/**
 * UTC date of the latest commit that changed a page's own copy.
 *
 * Shared layout, footer, and stamp-only edits do not count. A stamp-only
 * edit is the last-updated line, its import, a sources block, or a
 * comparison-foot date bump. Comment-only edits do not count.
 *
 * Content files are relative imports under that app's data directory.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, normalize } from 'node:path'

const STAMP_NAME = /\b(LastReviewed|LastUpdated|ArticleSourcesList)\b/

export function ignorableDiffLine(line) {
  const text = line.trim()
  if (!text) return true
  if (text.startsWith('{/*') || text.startsWith('*/') || text.startsWith('//') || text.startsWith('*')) return true
  if (STAMP_NAME.test(text)) return true
  if (/^import\b/.test(text)) return true
  if (/id="references"|<h2 id="references"|title="References"|title="Sources"|sources=\{/.test(text)) return true
  if (/^<\/?(?:div|ol|li)[\s>]/.test(text) || text === '</div>' || text === '</ol>' || text === '</li>') return true
  if (/^<\/?(?:ArticleSourcesList|LastReviewed|LastUpdated)\b/.test(text)) return true
  if (/<ComparisonFoot\b/.test(text)) return true
  return false
}

function stampInfrastructure(text) {
  const line = text.trim()
  if (/^(?:label|url|publisher)\s*:/.test(line) || /^\{\s*(?:label|url|publisher)\s*:/.test(line)) return true
  if (/^[,[\]{}()/>]+$/.test(line) || line === '},' || line === '],' || line === ']}' || line === '/>') return true
  if (/^<li>/.test(line) && /\b(?:19|20)\d{2}\b|aaep|journal|et al|wiley|elsevier|proceedings/i.test(line)) return true
  if (/^<\/?(?:div|ol|li)\b/.test(line) || line === '</div>' || line === '</ol>' || line === '</li>') return true
  return false
}

export function diffHasContent(diffText) {
  const stampCommit = STAMP_NAME.test(diffText)
  const signed = []
  for (const line of diffText.split('\n')) {
    if (!line.startsWith('+') && !line.startsWith('-')) continue
    if (line.startsWith('+++') || line.startsWith('---')) continue
    const body = line.slice(1)
    if (ignorableDiffLine(body)) continue
    signed.push({ add: line.startsWith('+'), body })
  }
  if (signed.length === 0) return false

  const strip = (line) =>
    line
      .replace(/className="[^"]*"/g, '')
      .replace(/Last reviewed: \d{4}-\d{2}-\d{2}\. ?/i, '')
      .replace(/\s+/g, ' ')
      .trim()
  const added = signed.filter((line) => line.add).map((line) => strip(line.body)).sort()
  const removed = signed.filter((line) => !line.add).map((line) => strip(line.body)).sort()
  if (added.length && added.length === removed.length && added.every((line, i) => line === removed[i])) {
    return false
  }

  const bodies = signed.map((line) => line.body)
  const kept = stampCommit ? bodies.filter((line) => !stampInfrastructure(line)) : bodies
  if (kept.length === 0) return false

  const commentOnly = kept.every((line) => {
    const text = line.trim()
    if (text.startsWith('{/*') || text.startsWith('//') || text.startsWith('* ')) return true
    if (text.endsWith('*/') && !text.includes('<')) return true
    if (!text.includes('<') && !/^["'`]/.test(text) && !/:\s*["'`]/.test(text)) return true
    return false
  })
  if (commentOnly) return false
  return true
}

function resolveDataImport(pageFile, spec) {
  if (!spec.startsWith('.')) return null
  if (spec.includes('/components/')) return null
  const base = normalize(join(dirname(pageFile), spec))
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.json`, join(base, 'index.ts'), join(base, 'index.tsx')]
  for (const candidate of candidates) {
    if (!existsSync(candidate)) continue
    if (!candidate.includes('/data/') && !candidate.endsWith('.json')) continue
    return candidate
  }
  return null
}

export function contentFiles(pageFile) {
  const text = readFileSync(pageFile, 'utf8')
  const files = [pageFile]
  for (const match of text.matchAll(/from\s+['"](\.[^'"]+)['"]/g)) {
    const resolved = resolveDataImport(pageFile, match[1])
    if (resolved && !files.includes(resolved)) files.push(resolved)
  }
  return files
}

export function contentDate(pageFile, root = process.cwd()) {
  const files = contentFiles(pageFile).filter((file) => existsSync(file))
  const log = execFileSync(
    'git',
    ['log', '-n', '40', '-U0', '--format=--COMMIT--%H--%cs', '--', ...files],
    { cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
  )
  const chunks = log.split('--COMMIT--').slice(1)
  for (const chunk of chunks) {
    const header = chunk.slice(0, chunk.indexOf('\n'))
    const parts = header.split('--')
    const sha = parts[0]
    const date = parts[1]
    if (!sha || !date) continue
    const diff = chunk.slice(chunk.indexOf('\n') + 1)
    if (diffHasContent(diff)) return { sha, date }
  }
  return null
}
