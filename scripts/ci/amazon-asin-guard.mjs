#!/usr/bin/env node
/**
 * Fail when a five-site source file links /go/amazon/<sku> and the sku is
 * not a 10-character ASIN. /go/amazon-brand/ searches are product searches
 * and are not hops of this shape.
 *
 *   node scripts/ci/amazon-asin-guard.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const EXTS = new Set(['.tsx', '.ts', '.md', '.mjs', '.js'])
const HOP = /\/go\/amazon\/([A-Za-z0-9_-]+)/g
const ASIN = /^[A-Z0-9]{10}$/

export function stripCodeComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ' ')
    .replace(/(^|\n)[ \t]*\/\/[^\n]*/g, '$1')
}

export function nonAsinAmazonHops(src) {
  const hits = []
  for (const match of src.matchAll(HOP)) {
    const sku = match[1]
    if (!ASIN.test(sku)) hits.push(sku)
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
      for (const sku of nonAsinAmazonHops(src)) {
        const rel = path.relative(root, file)
        problems.push(`${rel}: /go/amazon/${sku} is not a 10-character ASIN`)
      }
    }
  }
  return problems
}

function main() {
  const problems = collectProblems()
  if (problems.length) {
    console.error(`amazon-asin-guard: ${problems.length} non-ASIN /go/amazon hop(s)`)
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
  console.log('amazon-asin-guard: five-site /go/amazon hops are ASINs')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
