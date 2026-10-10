#!/usr/bin/env node
/**
 * Fail when a commit on the five earning sites shrinks a page.tsx or a
 * src/content file by more than 40% of its lines, or deletes an exported
 * page route, unless the PR body has a line containing "intentional removal".
 *
 * Existing history is not failed here. With no base revision the job warns
 * and exits 0.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'

const APPS = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

export function inScope(file) {
  if (!APPS.some((app) => file.startsWith(`apps/${app}/`))) return false
  if (file.includes('(funnels)') || file.includes('/visual/')) return false
  if (file.endsWith('/page.tsx')) return true
  if (/\/src\/content\//.test(file) && !file.includes('/email-sequences/')) return true
  return false
}

export function allowsRemoval(body) {
  return String(body || '')
    .split('\n')
    .some((line) => line.includes('intentional removal'))
}

export function lineCount(text) {
  if (!text) return 0
  const parts = text.split('\n')
  if (parts.length && parts[parts.length - 1] === '') parts.pop()
  return parts.length
}

export function problems({ path, oldText, newText, body }) {
  if (!inScope(path) || allowsRemoval(body)) return []
  const oldLines = lineCount(oldText)
  const newLines = lineCount(newText)
  const found = []
  if (oldLines > 0 && newLines < oldLines * 0.6) {
    const lost = Math.round((1 - newLines / oldLines) * 100)
    found.push(`${path} shrank ${lost}% (${oldLines} lines to ${newLines})`)
  }
  const wasRoute = path.endsWith('/page.tsx') && /export\s+default\b/.test(oldText || '')
  const stillRoute = /export\s+default\b/.test(newText || '')
  if (wasRoute && !stillRoute) {
    found.push(`${path} removed an exported page route`)
  }
  return found
}

function show(rev, file) {
  try {
    return execSync(`git show ${rev}:${file}`, { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 })
  } catch {
    return ''
  }
}

function changedFiles(base) {
  const out = execSync(`git diff --name-only ${base}...HEAD`, {
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024,
  })
  return out.split('\n').map((line) => line.trim()).filter(Boolean)
}

function main() {
  const base = process.env.BASE_SHA || ''
  if (!base || /^0+$/.test(base)) {
    console.log('anti-truncation: no base revision; warning only, not failing.')
    process.exit(0)
  }
  let files = []
  try {
    files = changedFiles(base)
  } catch (error) {
    console.log('anti-truncation: could not diff against the base revision; warning only.')
    console.log(String(error.stderr || error.message).slice(0, 500))
    process.exit(0)
  }
  const body = process.env.PR_BODY || ''
  const failures = []
  for (const file of files) {
    if (!inScope(file)) continue
    const oldText = show(base, file)
    const newText = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
    failures.push(...problems({ path: file, oldText, newText, body }))
  }
  if (failures.length) {
    console.error(`anti-truncation: ${failures.length} page or content shrink(s)`)
    console.error('Add a PR body line containing "intentional removal" if the cut is deliberate.')
    for (const failure of failures) console.error(`  ${failure}`)
    process.exit(1)
  }
  console.log('anti-truncation: no page or content file shrank by more than 40%.')
}

const entry = process.argv[1] || ''
if (entry.endsWith('anti-truncation.mjs')) main()
