#!/usr/bin/env node
/**
 * Fail when a five-site Amazon search names a service, a vet visit, or an
 * insurer. Product searches that mention a visit stay, when a product noun
 * is in the query. /go/amazon and /go/amazon-brand are both searches.
 *
 *   node scripts/ci/service-search.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const EXTS = new Set(['.tsx', '.ts', '.md', '.mjs', '.js'])
const HOP = /\/go\/amazon(?:-brand)?\/([^"'?\s]+)/g

/** Service and insurer tokens. A product noun does not excuse these. */
const SERVICE = /(?:^|\+)(?:chewy\+connect|connect\+with\+a\+vet|askvet|vetster|telehealth|trupanion|lemonade|manypets|figo|healthy\+paws|pets\+best|pet\+insurance|embrace)(?:\+|$)/i

/** A visit word is a product search only when a product noun is present. */
const VISIT = /(?:^|\+)(?:vet\+visit|veterinary)(?:\+|$)/i
const PRODUCT = /(?:^|\+)(?:treats|carrier|thermometer|scale|kit|cone|bowl|crate|harness|food|collar|bed|toy|brush|blanket|boots?|halter|supplement|pellets?|litter|cage|filters?|heaters?|lights?|tanks?|fertilizer|bandage|wrap)(?:\+|$)/i

export function stripCodeComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ' ')
    .replace(/(^|\n)[ \t]*\/\/[^\n]*/g, '$1')
}

/** @returns {string[]} queries that name a service, visit, or insurer */
export function serviceSearches(src) {
  const hits = []
  for (const match of src.matchAll(HOP)) {
    const query = match[1]
    if (SERVICE.test(query) || (VISIT.test(query) && !PRODUCT.test(query))) hits.push(query)
  }
  return hits
}

function walk(dir, out = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (EXTS.has(path.extname(entry.name))) out.push(full)
  }
  return out
}

export function collectProblems(root = ROOT) {
  const problems = []
  for (const site of SITES) {
    const srcDir = path.join(root, 'apps', site, 'src')
    for (const file of walk(srcDir)) {
      const raw = fs.readFileSync(file, 'utf8')
      const src = file.endsWith('.md') ? raw : stripCodeComments(raw)
      for (const query of serviceSearches(src)) {
        const rel = path.relative(root, file)
        problems.push(`${rel}: /go/amazon search "${query}" names a service, visit, or insurer`)
      }
    }
  }
  return problems
}

function main() {
  const problems = collectProblems()
  if (problems.length) {
    console.error(`service-search: ${problems.length} Amazon search(es) name a service, visit, or insurer`)
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
  console.log('service-search: five-site Amazon searches name products')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
