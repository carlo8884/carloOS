#!/usr/bin/env node
/**
 * Every visible dollar figure on the five earning sites carries an
 * "as of <git date>" note. The date is the newest git blame date of a
 * price line in that file. Homepages and funnel routes are out of scope.
 */
import { execSync } from 'node:child_process'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const root = process.cwd()
const apps = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const priceRe = /\$\s?\d/
const hits = []

function skip(rel) {
  return rel.includes('/(funnels)/') || rel.endsWith('/src/app/page.tsx')
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next') continue
    const abs = join(dir, name)
    const st = statSync(abs)
    if (st.isDirectory()) walk(abs, out)
    else if (name.endsWith('.ts') || name.endsWith('.tsx')) out.push(abs)
  }
  return out
}

function priceLineDates(rel) {
  let blame
  try {
    blame = execSync(`git blame --date=short -w -- ${JSON.stringify(rel)}`, {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
  } catch {
    return []
  }
  const dates = []
  for (const line of blame.split('\n')) {
    const code = line.slice(line.indexOf(')') + 1)
    const trimmed = code.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*') || trimmed.startsWith('{/*')) continue
    // Teaching examples keep their dollars and carry no price stamp.
    if (/\bExample:/.test(code)) continue
    if (!priceRe.test(code)) continue
    const date = line.match(/(\d{4}-\d{2}-\d{2})/)
    if (date) dates.push(date[1])
  }
  return dates
}

function stampedDate(text) {
  const m = text.match(/(?:priceAsOf|date)="(\d{4}-\d{2}-\d{2})"/)
  return m ? m[1] : null
}

function resolveImport(src, spec) {
  let base
  if (spec.startsWith('@/')) {
    const app = src.split('/')[1]
    base = join(root, 'apps', app, 'src', spec.slice(2))
  } else if (spec.startsWith('.')) {
    base = resolve(dirname(join(root, src)), spec)
  } else return null
  for (const ext of ['', '.ts', '.tsx', '/index.ts', '/index.tsx']) {
    const cand = base + ext
    try {
      statSync(cand)
      return relative(root, cand)
    } catch { /* next */ }
  }
  return null
}

function imported(rel) {
  const src = textOf(rel)
  return [...src.matchAll(/from\s+['"]([^'"]+)['"]/g)]
    .map((m) => resolveImport(rel, m[1]))
    .filter(Boolean)
}

const files = []
for (const app of apps) files.push(...walk(join(root, 'apps', app)))

const priced = new Map()
for (const abs of files) {
  const rel = relative(root, abs)
  if (skip(rel)) continue
  const dates = priceLineDates(rel)
  if (dates.length) priced.set(rel, dates.sort().at(-1))
}

const texts = new Map()
function textOf(rel) {
  if (!texts.has(rel)) texts.set(rel, readFileSync(join(root, rel), 'utf8'))
  return texts.get(rel)
}

function expectedDate(rel) {
  const dates = []
  if (priced.has(rel)) dates.push(priced.get(rel))
  for (const dep of imported(rel)) {
    if (priced.has(dep)) dates.push(priced.get(dep))
  }
  return dates.sort().at(-1) ?? null
}

function isAppPage(rel) {
  return rel.includes('/src/app/') && rel.endsWith('/page.tsx')
}

function pagesReaching(rel, seen = new Set()) {
  if (seen.has(rel)) return []
  seen.add(rel)
  const pages = []
  for (const abs of files) {
    const importer = relative(root, abs)
    if (skip(importer) || !imported(importer).includes(rel)) continue
    if (isAppPage(importer)) pages.push(importer)
    else pages.push(...pagesReaching(importer, seen))
  }
  return pages
}

for (const rel of priced.keys()) {
  if (!rel.endsWith('.tsx')) continue
  const date = expectedDate(rel)
  const stamped = stampedDate(textOf(rel))
  if (stamped === date) continue
  // Shared components also render on the homepage. The homepage stays
  // unstamped; the note lives on the tool page that mounts the component.
  if (!isAppPage(rel)) {
    const pages = pagesReaching(rel)
    const covered = pages.length > 0 && pages.every((page) => {
      const shown = stampedDate(textOf(page))
      return shown && shown >= date
    })
    if (pages.length === 0 || covered) continue
  }
  if (!stamped) hits.push(`${rel} has a price and no as-of date`)
  else hits.push(`${rel} says ${stamped}, git price date is ${date}`)
}

for (const [rel, date] of priced) {
  if (!rel.endsWith('.ts') || rel.endsWith('.tsx')) continue
  const pages = pagesReaching(rel)
  if (!pages.length) continue
  const covered = pages.some((page) => {
    const stamped = stampedDate(textOf(page))
    return stamped && stamped >= date
  })
  if (!covered) hits.push(`${rel} prices (as of ${date}) are not shown with that date`)
}

const layout = readFileSync(join(root, 'packages/ui/src/components/PriceAsOf.tsx'), 'utf8')
if (!layout.includes('Prices on this page are as of')) hits.push('PriceAsOf sentence drifted')

if (hits.length) {
  console.error(`FAIL: ${hits.length} price date problem(s)`)
  for (const hit of hits.slice(0, 40)) console.error(`  - ${hit}`)
  process.exit(1)
}
console.log(`PASS: ${[...priced.keys()].filter((f) => f.endsWith('.tsx')).length} priced pages carry their git as-of date.`)
