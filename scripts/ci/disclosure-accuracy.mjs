#!/usr/bin/env node
/**
 * CI check: a shop page on the five earning sites must not render
 * <AffiliateDisclosure> or a hardcoded "earns a commission" sentence.
 *
 * Disclosure, about, legal, and editorial-standards pages may state the
 * policy. Funnel routes are out of this scan. HopDisclosure is the only
 * shop-page renderer, and it lives outside src/app, so a raw
 * <AffiliateDisclosure> tag on a page fails.
 *
 * Pages that still use the old pattern are frozen in
 * disclosure-accuracy-allowlist.txt (including parked lighting reviews
 * and homepages). A match that is not listed fails. A listed path that
 * no longer matches fails, so converting a page has to drop its line.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const POLICY = new Set(['about', 'legal', 'disclosure', 'editorial-standards'])
const JSX = /<AffiliateDisclosure\b/
const SENTENCE = /\bearns?\s+(?:an\s+|a\s+)?(?:affiliate\s+)?commissions?\b/i

function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
      walk(p, out)
    } else if (/\.(tsx|ts|jsx|js)$/.test(e.name)) {
      out.push(p)
    }
  }
  return out
}

function exempt(rel) {
  if (rel.includes('/(funnels)/')) return true
  const parts = new Set(rel.split('/'))
  for (const part of parts) {
    if (POLICY.has(part)) return true
  }
  return false
}

function matches(text) {
  return JSX.test(text) || SENTENCE.test(text)
}

const allowPath = join(ROOT, 'scripts/ci/disclosure-accuracy-allowlist.txt')
const allow = readFileSync(allowPath, 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))

const hits = []
for (const site of SITES) {
  for (const file of walk(join(ROOT, 'apps', site, 'src', 'app'))) {
    const rel = file.slice(ROOT.length + 1)
    if (exempt(rel)) continue
    const text = stripComments(readFileSync(file, 'utf8'))
    if (matches(text)) hits.push(rel)
  }
}

const hitSet = new Set(hits)
const allowSet = new Set(allow)
const unexpected = hits.filter((rel) => !allowSet.has(rel)).sort()
const stale = allow.filter((rel) => !hitSet.has(rel)).sort()

if (unexpected.length || stale.length) {
  if (unexpected.length) {
    console.log(`## Disclosure accuracy: ${unexpected.length} page(s) outside the allowlist\n`)
    for (const rel of unexpected) console.log(rel)
    console.log()
  }
  if (stale.length) {
    console.log(`## Disclosure accuracy: ${stale.length} allowlist line(s) no longer match\n`)
    for (const rel of stale) console.log(rel)
    console.log()
  }
  console.error('FAIL: unconditional disclosure drifted. Disclose only beside a live hop, or update the allowlist when a listed page is converted.')
  process.exit(1)
}

console.log('## Disclosure accuracy: clean')
console.log(`\nPASS: ${hits.length} listed pages still match; 0 new unconditional disclosures.`)
process.exit(0)
