#!/usr/bin/env node
/**
 * A new care or insurance cost sentence, or a new review-card price,
 * on a five-site page that already carries priceAsOf (or <PriceAsOf date>)
 * must show that same date within 12 lines ("dated YYYY-MM-DD" or
 * "last updated YYYY-MM-DD").
 *
 * Existing undated sentences are not failed here. With no base revision
 * the job warns and exits 0.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'

const APPS = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const PRICE = /\$\s?\d/
const CARE =
  /clinic|surger|treatment|premium|insurance|vaccin|board|consult|workup|chemotherap|reimburs|deductible|\bexam\b|emergency fund|farm[- ]call|poison|specialist|anesthes|lifetime|DNA test|\bcosts?\b|\bfees?\b/i
const SKIP = /printed price|price="\$|label:\s*'\$/

export function isCostSentence(line) {
  const s = line.trim()
  if (!PRICE.test(s) || !CARE.test(s)) return false
  if (s.startsWith('//') || s.startsWith('*') || s.startsWith('/*') || s.startsWith('{/*')) return false
  if (SKIP.test(s)) return false
  if (/^(text|name|description):/.test(s)) return false
  return true
}

export function stampOf(text) {
  const m =
    text.match(/priceAsOf="(\d{4}-\d{2}-\d{2})"/) ||
    text.match(/<PriceAsOf[^>]*date="(\d{4}-\d{2}-\d{2})"/)
  return m ? m[1] : null
}

export function datedNearby(lines, index, stamp) {
  const start = Math.max(0, index - 12)
  const end = Math.min(lines.length, index + 13)
  const re = new RegExp(`(?:dated|last updated)\\s+${stamp}`)
  return re.test(lines.slice(start, end).join('\n'))
}

function inScope(file) {
  if (!APPS.some((app) => file.startsWith(`apps/${app}/`))) return false
  if (file.includes('(funnels)') || file.includes('/visual/')) return false
  return file.endsWith('.tsx') || file.endsWith('.ts')
}

export function isCardPrice(line) {
  const s = line.trim()
  if (s.startsWith('//') || s.startsWith('*') || s.startsWith('/*') || s.startsWith('{/*')) return false
  if (!/price="[^"]*\$\s?\d/.test(s) && !/price=\{['"]\$\s?\d/.test(s)) return false
  return true
}

function addedMatchingLines(diff, predicate) {
  /** @type {{file:string,line:number,text:string}[]} */
  const found = []
  let file = null
  let inFile = false
  let newLine = 0
  for (const raw of diff.split('\n')) {
    if (raw.startsWith('diff --git ')) {
      file = raw.split(' b/').pop()
      inFile = Boolean(file && inScope(file))
      continue
    }
    const hunk = raw.match(/^@@ -\d+(?:,\d+)? \+(\d+)/)
    if (hunk) {
      newLine = Number(hunk[1])
      continue
    }
    if (!inFile) continue
    if (raw.startsWith('+') && !raw.startsWith('+++')) {
      const text = raw.slice(1)
      if (predicate(text)) found.push({ file, line: newLine, text })
      newLine += 1
    }
  }
  return found
}

export function addedCostLines(diff) {
  return addedMatchingLines(diff, isCostSentence)
}

export function addedCardPriceLines(diff) {
  return addedMatchingLines(diff, isCardPrice)
}

function main() {
  const base = process.env.BASE_SHA || ''
  if (!base || /^0+$/.test(base)) {
    console.log('cost-date-nearby: no base revision; warning only, not failing.')
    process.exit(0)
  }
  let diff = ''
  try {
    diff = execSync(`git diff -U0 ${base}...HEAD`, {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
  } catch (error) {
    console.log('cost-date-nearby: could not diff against the base revision; warning only.')
    console.log(String(error.stderr || error.message).slice(0, 500))
    process.exit(0)
  }
  const failures = []
  const checks = [
    ...addedCostLines(diff).map((row) => ({ ...row, kind: 'cost sentence' })),
    ...addedCardPriceLines(diff).map((row) => ({ ...row, kind: 'review-card price' })),
  ]
  for (const added of checks) {
    if (!fs.existsSync(added.file)) continue
    const text = fs.readFileSync(added.file, 'utf8')
    const stamp = stampOf(text)
    if (!stamp) continue
    const lines = text.split('\n')
    const index = added.line - 1
    if (index < 0 || index >= lines.length) {
      failures.push(`${added.file}:${added.line} new ${added.kind} could not be mapped`)
      continue
    }
    if (!datedNearby(lines, index, stamp)) {
      failures.push(
        `${added.file}:${added.line} new ${added.kind} is missing "dated ${stamp}" within 12 lines`,
      )
    }
  }
  if (failures.length) {
    console.error(`cost-date-nearby: ${failures.length} new cost line(s) omit the page date`)
    for (const failure of failures) console.error(`  ${failure}`)
    process.exit(1)
  }
  console.log('cost-date-nearby: new care-cost sentences and review-card prices show the page date.')
}

const entry = process.argv[1] || ''
if (entry.endsWith('cost-date-nearby.mjs')) main()
