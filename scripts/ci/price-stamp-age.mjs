#!/usr/bin/env node
/**
 * Money pages on the five earning sites cannot ship a dollar figure
 * with no price stamp, or with a stamp older than 120 UTC days.
 * A source line labeled "Example:" is a teaching figure and is exempt.
 * Dollar figures inside components/visual are out of scope.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const root = process.cwd()
const apps = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const priceRe = /\$\s?\d/
const DAY = 24 * 60 * 60 * 1000

export function cutoffDate(now = new Date()) {
  const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  return new Date(utc - 120 * DAY).toISOString().slice(0, 10)
}

export function stampedDate(text) {
  const m = text.match(/(?:priceAsOf|date)="(\d{4}-\d{2}-\d{2})"/)
  return m ? m[1] : null
}

export function pricedLines(text) {
  const lines = []
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*') || trimmed.startsWith('{/*')) continue
    if (/\bExample:/.test(line)) continue
    if (priceRe.test(line)) lines.push(line)
  }
  return lines
}

function skipPage(rel) {
  return rel.includes('/(funnels)/') || rel.endsWith('/src/app/page.tsx')
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next') continue
    const abs = join(dir, name)
    const st = statSync(abs)
    if (st.isDirectory()) walk(abs, out)
    else if (name.endsWith('.tsx')) out.push(abs)
  }
  return out
}

function resolveImport(src, spec) {
  let base
  if (spec.startsWith('@/')) {
    const app = src.split('/')[1]
    base = join(root, 'apps', app, 'src', spec.slice(2))
  } else if (spec.startsWith('.')) {
    base = resolve(dirname(join(root, src)), spec)
  } else return null
  for (const ext of ['', '.tsx', '/index.tsx']) {
    const cand = base + ext
    try {
      statSync(cand)
      if (cand.endsWith('.tsx')) return relative(root, cand)
    } catch { /* next */ }
  }
  return null
}

function importedTsx(rel, text) {
  return [...text.matchAll(/from\s+['"]([^'"]+)['"]/g)]
    .map((m) => resolveImport(rel, m[1]))
    .filter((dep) => dep && !dep.includes('/components/visual/'))
}

export function ageProblems(files, read, now = new Date()) {
  const cutoff = cutoffDate(now)
  const hits = []
  for (const rel of files) {
    if (!rel.endsWith('/page.tsx') || skipPage(rel)) continue
    const text = read(rel)
    if (!text.includes('/go/')) continue
    const pageStamp = stampedDate(text)
    if (pricedLines(text).length && (!pageStamp || pageStamp < cutoff)) {
      hits.push(`${rel} dollar figure stamp ${pageStamp || 'missing'} is older than ${cutoff}`)
    }
    for (const dep of importedTsx(rel, text)) {
      const depText = read(dep)
      if (!pricedLines(depText).length) continue
      const stamp = stampedDate(depText) || pageStamp
      if (!stamp || stamp < cutoff) {
        hits.push(`${rel} imports ${dep} whose dollar stamp ${stamp || 'missing'} is older than ${cutoff}`)
      }
    }
  }
  return hits
}

function main() {
  const files = []
  for (const app of apps) files.push(...walk(join(root, 'apps', app)).map((abs) => relative(root, abs)))
  const cache = new Map()
  const read = (rel) => {
    if (!cache.has(rel)) cache.set(rel, readFileSync(join(root, rel), 'utf8'))
    return cache.get(rel)
  }
  const hits = ageProblems(files, read)
  if (hits.length) {
    console.error(`FAIL: ${hits.length} price stamp age problem(s)`)
    for (const hit of hits.slice(0, 40)) console.error(`  - ${hit}`)
    process.exit(1)
  }
  console.log(`PASS: money-page dollar figures are stamped within 120 days (cutoff ${cutoffDate()}).`)
}

const entry = process.argv[1] || ''
if (entry.endsWith('price-stamp-age.mjs')) main()
