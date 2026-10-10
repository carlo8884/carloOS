#!/usr/bin/env node
/**
 * A visible "Best … YEAR" or "best of YEAR" label on a five-site page fails
 * when YEAR is earlier than the current UTC year. Publish dates and citation
 * years are not labels, so they stay as written.
 *
 * Comments are ignored. Saddle.com and the other non-earning apps are out of
 * scope for this gate.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const LABEL = /\bbest(?:\s+of)?(?:\s+[\w&'-]+){0,10}\s+((?:19|20)\d{2})\b/gi

export function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/** Labels whose year is earlier than `year`. */
export function pastBestLabels(src, year = new Date().getUTCFullYear()) {
  const clean = stripComments(src)
  const hits = []
  LABEL.lastIndex = 0
  let match
  while ((match = LABEL.exec(clean))) {
    const found = Number(match[1])
    if (found < year) hits.push({ label: match[0], year: found })
  }
  return hits
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo', 'visual', '(funnels)'].includes(entry.name)) continue
      walk(path, out)
    } else if (/\.(tsx|ts)$/.test(entry.name)) out.push(path)
  }
  return out
}

function main() {
  const year = new Date().getUTCFullYear()
  const hits = []
  let seen = 0
  for (const site of SITES) {
    for (const file of walk(join(ROOT, 'apps', site, 'src'))) {
      const src = readFileSync(file, 'utf8')
      const clean = stripComments(src)
      LABEL.lastIndex = 0
      seen += [...clean.matchAll(LABEL)].length
      const rel = file.replace(ROOT + '/', '')
      for (const hit of pastBestLabels(src, year)) {
        hits.push(`${rel}: "${hit.label}" is before ${year}`)
      }
    }
  }
  if (hits.length) {
    console.error(`FAIL: ${hits.length} past-year best-of label(s)`)
    for (const hit of hits) console.error('  ' + hit)
    process.exit(1)
  }
  console.log(`PASS: ${seen} best-of labels on the five sites use ${year} or later.`)
}

const invoked = process.argv[1] && process.argv[1].endsWith('best-year-match.mjs')
if (invoked) main()
