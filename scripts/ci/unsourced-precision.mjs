#!/usr/bin/env node
/**
 * CI check: a money or guide page, or a src/data module, on the five
 * earning sites must not print an unsourced precision claim.
 *
 * A paragraph, FAQ answer, or data-file block fails when it contains
 * one of the phrases below and the same block has no http(s) URL,
 * "et al.", or "planning figure".
 *
 * Phrases: "studies show", "studies have shown", "veterinarians recommend",
 * "vets recommend", a positive "proven to", a positive "clinically proven",
 * and "survival rate" or "success rate" with a percent in the same
 * sentence, in either order.
 *
 * Left alone: "until proven otherwise", "not proven", "no proven",
 * "disproven", "unproven", and "do not print clinically proven" /
 * "does not print clinically proven". Bare "proven" and
 * "clinically significant" are not phrases.
 *
 * An in-script fixture fails the check if a bare phrase is allowed
 * through. Exit 0 when every scanned block is clean.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const SEGMENTS = new Set([
  'tools',
  'health',
  'nutrition',
  'reviews',
  'care',
  'diet',
  'supplements',
  'guides',
  'breeds',
])

const CITE = /https?:\/\/|et al\.|planning figure/i
const PERCENT = String.raw`\d+(?:\s*[–—-]\s*\d+)?\s*(?:%|percent)`
const RATE = new RegExp(
  `(?:(?:survival|success) rates?[^.\\n]{0,80}?${PERCENT}|(?<!\\d)${PERCENT}[^.\\n]{0,40}?(?:survival|success) rates?)`,
  'i',
)

const RULES = [
  { name: 'studies show', re: /studies show|studies have shown/i },
  { name: 'vets recommend', re: /(?:veterinarians|vets) recommend/i },
  { name: 'proven to', re: /proven to/i },
  { name: 'clinically proven', re: /clinically proven/i },
  { name: 'survival or success rate', re: RATE },
]

function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function softenExclusions(text) {
  return text
    .replace(/until proven otherwise/gi, '')
    .replace(/(?:do not|does not) print clinically proven/gi, '')
    .replace(/\b(?:not proven|no proven|disproven|unproven)\b/gi, '')
}

function blocksOf(src) {
  const lines = stripComments(src).split('\n')
  const blocks = []
  let buf = []
  let start = 1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '') {
      if (buf.length) blocks.push({ text: buf.join('\n'), line: start })
      buf = []
      start = i + 2
    } else {
      if (!buf.length) start = i + 1
      buf.push(lines[i])
    }
  }
  if (buf.length) blocks.push({ text: buf.join('\n'), line: start })
  return blocks
}

function phraseHits(text) {
  const softened = softenExclusions(text)
  return RULES.filter((rule) => rule.re.test(softened)).map((rule) => rule.name)
}

function blockFails(text) {
  if (CITE.test(text)) return []
  return phraseHits(text)
}

function walk(dir, out = [], accept = (name) => name === 'page.tsx') {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(entry.name)) continue
      walk(path, out, accept)
    } else if (accept(entry.name)) out.push(path)
  }
  return out
}

function inScope(filePath) {
  if (filePath.includes('/(funnels)/') || filePath.includes('/email-sequences/')) return false
  const parts = filePath.split('/')
  return parts.some((part) => SEGMENTS.has(part))
}

function assertFixtures() {
  const checks = [
    ['bare studies show', 'Studies show 80% survival in this setting.', false],
    ['url citation', 'Studies show 80% survival. Source: https://example.com/trial', true],
    ['et al. citation', 'Studies have shown a benefit (Kawcak et al., 2007).', true],
    ['planning figure', 'Vets recommend a 10% treat cap. This is a planning figure.', true],
    ['until proven otherwise', 'Treat it as an emergency until proven otherwise.', true],
    ['not proven to', 'This is not proven to prevent the disease.', true],
    ['do not print clinically proven', 'Those pages do not print clinically proven.', true],
    ['bare survival rate', 'The survival rate is 80%.', false],
    ['cited survival rate', 'The survival rate is 80% (Proudman et al., 2002).', true],
    ['bare percent then success rate', 'PDA closure has near-100% success rates.', false],
    ['cited percent then success rate', 'Closure has a near-100% success rate (https://example.com/pda).', true],
    ['bare proven to', 'This diet is proven to produce greater weight loss.', false],
    ['bare clinically proven', 'The chew is clinically proven.', false],
    ['clinically significant', 'The change was clinically significant.', true],
    ['proven broodmare', 'The catalog lists a proven broodmare and an unproven sire.', true],
  ]
  const problems = []
  for (const [label, text, shouldPass] of checks) {
    const failed = blockFails(text).length > 0
    if (failed === shouldPass) problems.push(`${label}: expected ${shouldPass ? 'pass' : 'fail'}`)
  }
  if (problems.length) {
    console.error('unsourced-precision fixture check failed:')
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
}

assertFixtures()

const files = []
const dataFiles = []
for (const site of SITES) {
  walk(join(ROOT, 'apps', site, 'src', 'app'), files)
  walk(join(ROOT, 'apps', site, 'src', 'data'), dataFiles, (name) => name.endsWith('.ts') || name.endsWith('.tsx'))
}
const pages = files.filter(inScope)
const dataModules = dataFiles
const misses = []
for (const filePath of [...pages, ...dataModules]) {
  const src = readFileSync(filePath, 'utf8')
  for (const block of blocksOf(src)) {
    const hits = blockFails(block.text)
    if (hits.length) {
      misses.push({
        filePath,
        line: block.line,
        hits,
        snippet: block.text.replace(/\s+/g, ' ').trim().slice(0, 180),
      })
    }
  }
}

if (misses.length) {
  console.error(`FAIL: ${misses.length} unsourced precision claim(s) on money or guide pages`)
  for (const miss of misses) {
    const rel = miss.filePath.replace(`${ROOT}/`, '')
    console.error(`  ${rel}:${miss.line} [${miss.hits.join(', ')}]`)
    console.error(`    ${miss.snippet}`)
  }
  console.error('Cite a primary source in the same paragraph, label it a planning figure, or cut the claim.')
  process.exit(1)
}

console.log(`PASS: ${pages.length} money and guide pages and ${dataModules.length} data modules have no unsourced precision claim`)
