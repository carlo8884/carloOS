#!/usr/bin/env node
/**
 * Report-only. Lists printed prices on the five earning sites whose git
 * blame date is more than 45 days old. Homepages and funnels are out of
 * scope. Exit 0 even when prices are listed.
 */
import { execSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const apps = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const priceRe = /\$\s?\d/
const DAYS = 45

export function cutoffDate(today = new Date(), days = DAYS) {
  const copy = new Date(today.getTime())
  copy.setUTCDate(copy.getUTCDate() - days)
  return copy.toISOString().slice(0, 10)
}

function skip(rel) {
  return rel.includes('/(funnels)/') || rel.endsWith('/src/app/page.tsx')
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next' || name.startsWith('.next')) continue
    const abs = join(dir, name)
    const st = statSync(abs)
    if (st.isDirectory()) walk(abs, out)
    else if (name.endsWith('.ts') || name.endsWith('.tsx')) out.push(abs)
  }
  return out
}

export function stalePriceLines(blameText, cutoff) {
  const rows = []
  for (const line of blameText.split('\n')) {
    const match = line.match(/^[\^0-9a-f]+\s+\([^)]*?(\d{4}-\d{2}-\d{2})\s+\d+\)\s?(.*)$/i)
    if (!match) continue
    const date = match[1]
    const code = match[2]
    const trimmed = code.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*') || trimmed.startsWith('{/*')) continue
    if (!priceRe.test(code)) continue
    if (date < cutoff) rows.push({ date, code: trimmed.slice(0, 160) })
  }
  return rows
}

function blame(rel) {
  try {
    return execSync(`git blame --date=short -w -- ${JSON.stringify(rel)}`, {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
  } catch {
    return ''
  }
}

function main() {
  const cutoff = cutoffDate()
  const found = []
  for (const app of apps) {
    for (const abs of walk(join(root, 'apps', app))) {
      const rel = relative(root, abs)
      if (skip(rel)) continue
      const rows = stalePriceLines(blame(rel), cutoff)
      for (const row of rows) found.push({ rel, ...row })
    }
  }
  found.sort((a, b) => a.date.localeCompare(b.date) || a.rel.localeCompare(b.rel))
  console.log(`Prices older than 45 days (before ${cutoff}): ${found.length}`)
  console.log('Report only. This check does not fail the build.')
  const shown = found.slice(0, 80)
  for (const row of shown) console.log(`- ${row.date} ${row.rel} — ${row.code}`)
  if (found.length > shown.length) console.log(`- ${found.length - shown.length} more omitted`)
  process.exit(0)
}

const invoked = process.argv[1] && process.argv[1].endsWith('stale-price-report.mjs')
if (invoked) main()
