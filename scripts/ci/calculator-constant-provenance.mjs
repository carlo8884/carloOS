#!/usr/bin/env node
/**
 * CI check: a numeric constant table in a five-site calculator needs a source
 * or a planning-figure label.
 *
 * A table is a const array or object whose body holds at least two numeric
 * literals. It passes when a nearby comment has an external http(s) source,
 * or the table, its file, or another file in the same tool directory says
 * "planning figure" or "planning heuristic".
 *
 * Insurance-quote tools are held and are not scanned. A bare table fails,
 * including the in-script fixture, so a weakened check cannot stay green.
 *
 * Exit 0 when every scanned table is sourced or labeled. Exit 1 otherwise.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const SKIP_NAME = /^(FAQS|SOURCES|TOOLS|STEPS|BREADCRUMBS|RELATED|NAV_LINKS|HOWTOS|REVIEWS|FEATURES|SHOP_SOURCE)$/i
const PLANNING = /planning figure|planning heuristic/i
const BLOCKED_HOST = /^(?:www\.)?(?:schema\.org|dog\.com|fish\.com|horses\.com|vets\.co|ferret\.com|ferrets\.com|amazon\.com|chewy\.com|www\.amazon\.com|www\.chewy\.com)$/i

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(entry.name)) continue
      walk(path, out)
    } else if (/\.(tsx|ts)$/.test(entry.name)) out.push(path)
  }
  return out
}

function extractBalanced(src, openIdx) {
  const open = src[openIdx]
  const close = open === '[' ? ']' : '}'
  let depth = 0
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === open) depth++
    else if (src[i] === close) {
      depth--
      if (depth === 0) return src.slice(openIdx, i + 1)
    }
  }
  return src.slice(openIdx)
}

function commentsOnly(text) {
  const block = text.match(/\/\*[\s\S]*?\*\//g) || []
  const line = text.match(/(^|[^:])\/\/.*$/gm) || []
  return [...block, ...line].join('\n')
}

function externalSourceInComments(text) {
  const comments = commentsOnly(text)
  const urls = comments.match(/https?:\/\/[^\s)'"`]+/gi) || []
  return urls.some((url) => {
    try {
      const host = new URL(url).host
      return !BLOCKED_HOST.test(host)
    } catch {
      return false
    }
  })
}

function numericLiterals(body) {
  const stripped = body.replace(/'(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`/g, '""')
  return stripped.match(/(?<![\w.])-?\d+(?:\.\d+)?/g) || []
}

function braceDepthAt(src, index) {
  let depth = 0
  let i = 0
  while (i < index) {
    const c = src[i]
    if (c === '/' && src[i + 1] === '/') {
      const nl = src.indexOf('\n', i)
      i = nl < 0 ? src.length : nl
      continue
    }
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2)
      i = end < 0 ? src.length : end + 2
      continue
    }
    if (c === "'" || c === '"' || c === '`') {
      const quote = c
      i++
      while (i < index && src[i] !== quote) {
        if (src[i] === '\\') i++
        i++
      }
      i++
      continue
    }
    if (c === '{') depth++
    else if (c === '}') depth--
    i++
  }
  return depth
}

function isTable(name, body) {
  if (SKIP_NAME.test(name)) return false
  if (body.includes('@context') || body.includes('@type')) return false
  if (body.length < 8 || body.length > 12000) return false
  const nums = numericLiterals(body)
  if (nums.length < 2) return false
  const stripped = body.replace(/'(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`/g, '""')
  if (body[0] === '[' && !stripped.includes('{')) return false
  return true
}

function findTables(src) {
  const re = /(?:export\s+)?const\s+([A-Za-z0-9_]+)\s*(?::[\s\S]{0,220}?)?=\s*[\[{]/g
  const tables = []
  let match
  while ((match = re.exec(src))) {
    const openIdx = match.index + match[0].length - 1
    const body = extractBalanced(src, openIdx)
    if (!isTable(match[1], body)) continue
    if (braceDepthAt(src, match.index) > 0) continue
    const line = src.slice(0, match.index).split('\n').length
    tables.push({ name: match[1], line, start: match.index, body })
  }
  return tables
}

function nearbyText(src, start) {
  const lines = src.slice(0, start).split('\n')
  return lines.slice(Math.max(0, lines.length - 40)).join('\n')
}

function toolDirectoryHasPlanning(filePath) {
  const dir = dirname(filePath)
  if (dir.endsWith(`${join('components', 'tools')}`)) return false
  let names
  try {
    names = readdirSync(dir)
  } catch {
    return false
  }
  for (const name of names) {
    if (!/\.(ts|tsx)$/.test(name)) continue
    if (PLANNING.test(readFileSync(join(dir, name), 'utf8'))) return true
  }
  return false
}

function tableHasProvenance(src, table, filePath) {
  const nearby = nearbyText(src, table.start)
  const windowText = `${nearby}\n${table.body}`
  if (PLANNING.test(windowText)) return true
  if (externalSourceInComments(windowText)) return true
  if (/Evangelista/i.test(windowText)) return true
  if (PLANNING.test(src)) return true
  if (toolDirectoryHasPlanning(filePath)) return true
  return false
}

function scanFile(filePath) {
  if (/insurance/i.test(filePath)) return []
  const src = readFileSync(filePath, 'utf8')
  const misses = []
  for (const table of findTables(src)) {
    if (!tableHasProvenance(src, table, filePath)) {
      misses.push({ filePath, ...table })
    }
  }
  return misses
}

function assertFixtures() {
  const bare = 'const BANDS = [\n  { min: 4, max: 6 },\n  { min: 8, max: 10 },\n]\n'
  const labeled = '// Planning figure: not a published chart.\n' + bare
  const heuristic = '// Planning heuristic for a first pass.\n' + bare
  const sourced = '// Source table: https://example.com/primary-chart\n' + bare
  const checks = [
    ['bare table', bare, false],
    ['planning figure', labeled, true],
    ['planning heuristic', heuristic, true],
    ['http source comment', sourced, true],
  ]
  const problems = []
  for (const [label, src, shouldPass] of checks) {
    const tables = findTables(src)
    if (tables.length !== 1) {
      problems.push(`${label}: expected 1 table, found ${tables.length}`)
      continue
    }
    const passed = tableHasProvenance(src, tables[0], join(ROOT, 'apps', 'dog-com', 'src', 'app', 'tools', 'fixture', 'Calculator.tsx'))
    if (passed !== shouldPass) problems.push(`${label}: expected ${shouldPass ? 'pass' : 'fail'}`)
  }
  if (problems.length) {
    console.error('calculator-constant-provenance fixture check failed:')
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
}

assertFixtures()

const files = []
for (const site of SITES) {
  walk(join(ROOT, 'apps', site, 'src'), files)
}
const calculatorFiles = files.filter((file) => /\/tools\/|\/components\/tools\//.test(file))
const misses = calculatorFiles.flatMap(scanFile)

if (misses.length) {
  console.error(`FAIL: ${misses.length} calculator constant table(s) have no source comment and no planning-figure label`)
  for (const miss of misses) {
    const rel = miss.filePath.replace(`${ROOT}/`, '')
    console.error(`  ${rel}:${miss.line} ${miss.name}`)
  }
  console.error('Add a primary-source URL in a comment next to the table, or label it "planning figure" / "planning heuristic".')
  process.exit(1)
}

console.log(`PASS: calculator constant tables in ${calculatorFiles.length} five-site tool files are sourced or labeled`)
