#!/usr/bin/env node
/**
 * Fail when GROK.md, or a tool or guide page on the five earning sites,
 * has been cut down to a stub or still contains a placeholder marker
 * in the text that ships. Comments are ignored, so "never PLACEHOLDER"
 * notes in shop-CTA comments do not fail. Redirect aliases are not stubs.
 *
 *   node scripts/ci/content-stub-guard.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const GROK_MIN_WORDS = 1500
const PAGE_MIN_WORDS = 250
const GROK_SECTIONS = [
  '## Currently underway',
  '## Test and deployment status',
  '## Next planned priority',
  '## Carlo-only blockers',
  '## Live policy',
]

const MARKERS = [
  { re: /\bPLACEHOLDER\b/, label: 'PLACEHOLDER' },
  { re: /lorem ipsum/i, label: 'lorem ipsum' },
  { re: /\bTBD\b/, label: 'TBD' },
  { re: /\bTKTK\b/, label: 'TKTK' },
  { re: /this (?:page|section) is a stub/i, label: 'stub label' },
  { re: /\[\s*content goes here\s*\]/i, label: 'content goes here' },
]

export function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ' ')
    .replace(/(^|\n)[ \t]*\/\/[^\n]*/g, '$1')
}

export function markerHits(src) {
  const text = stripComments(src)
  return MARKERS.filter((marker) => marker.re.test(text)).map((marker) => marker.label)
}

export function wordCount(src) {
  return (stripComments(src).match(/[A-Za-z]{4,}/g) || []).length
}

export function isRedirectAlias(src) {
  const text = stripComments(src)
  return /\bredirect\s*\(/.test(text) && !/<(?:h1|h2|p|section|article)\b/.test(text)
}

function walkPages(dir, out = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkPages(full, out)
    else if (entry.name === 'page.tsx') out.push(full)
  }
  return out
}

function routeOf(appDir, file) {
  const rel = path.relative(appDir, file).replace(/\\/g, '/')
  if (rel === 'page.tsx') return '/'
  return `/${rel.slice(0, -'/page.tsx'.length)}`
}

export function isToolOrGuide(route) {
  const lower = route.toLowerCase()
  return lower === '/tools' || lower.includes('/tools/') || lower.includes('guide')
}

export function checkGrok(src) {
  const problems = []
  const words = wordCount(src)
  if (words < GROK_MIN_WORDS) {
    problems.push(`GROK.md has ${words} words, under the ${GROK_MIN_WORDS}-word stub floor`)
  }
  for (const heading of GROK_SECTIONS) {
    if (!src.includes(heading)) problems.push(`GROK.md is missing ${heading}`)
  }
  for (const hit of markerHits(src)) problems.push(`GROK.md contains ${hit}`)
  return problems
}

export function checkPage(route, src) {
  if (!isToolOrGuide(route) || isRedirectAlias(src)) return []
  const problems = []
  const words = wordCount(src)
  if (words < PAGE_MIN_WORDS) {
    problems.push(`${route} has ${words} words, under the ${PAGE_MIN_WORDS}-word stub floor`)
  }
  for (const hit of markerHits(src)) problems.push(`${route} contains ${hit}`)
  return problems
}

export function collectProblems(root = ROOT) {
  const problems = []
  const grokPath = path.join(root, 'GROK.md')
  if (!fs.existsSync(grokPath)) {
    problems.push('GROK.md is missing')
  } else {
    problems.push(...checkGrok(fs.readFileSync(grokPath, 'utf8')))
  }
  for (const site of SITES) {
    const appDir = path.join(root, 'apps', site, 'src', 'app')
    for (const file of walkPages(appDir)) {
      const route = `${site}${routeOf(appDir, file)}`
      problems.push(...checkPage(route, fs.readFileSync(file, 'utf8')))
    }
  }
  return problems
}

function main() {
  const problems = collectProblems()
  if (problems.length) {
    console.error(`content-stub-guard: ${problems.length} problem(s)`)
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
  console.log('content-stub-guard: GROK.md and earning-site tool/guide pages are intact')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
