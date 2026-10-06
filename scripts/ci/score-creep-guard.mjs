#!/usr/bin/env node
/**
 * Editor scores stay off the five earning sites.
 *
 * Fails when app source adds score={}, ratingValue, "scored N.N", "N.N/10",
 * or an {editorialScore}/10-style template.
 * Parked aquarium lighting stays allowlisted, including the Nicrew Classic card
 * (its score and the price/cta line share that file). Clinical body-condition
 * and grimace scales stay allowlisted. Funnels are not exempt.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const apps = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

export const LIGHTING_FILES = [
  'apps/fish-com/src/app/reviews/best-aquarium-lighting/page.tsx',
  'apps/fish-com/src/app/reviews/kessil-vs-nicrew-guide/page.tsx',
  'apps/fish-com/src/app/reviews/hygger-vs-fluval-light-guide/page.tsx',
]

export const PATTERNS = [
  { name: 'score={}', re: /score=\{/ },
  { name: 'ratingValue', re: /ratingValue/ },
  { name: 'scored N.N', re: /scored\s+\d+\.\d+/ },
  { name: 'N.N/10', re: /\d+\.\d+\/10/ },
  { name: 'editorialScore template', re: /\{[^}\n]*editorialScore[^}\n]*\}|editorialScore\s*\/\s*10/ },
]

export function isAllowed(rel) {
  const norm = rel.replaceAll('\\', '/')
  if (LIGHTING_FILES.includes(norm)) return true
  if (norm.includes('body-condition-score')) return true
  if (norm.includes('grimace-scale')) return true
  return false
}

export function findingsIn(rel, text) {
  if (isAllowed(rel)) return []
  const hits = []
  const lines = text.split('\n')
  for (let i = 0; i < lines.length; i++) {
    for (const pattern of PATTERNS) {
      if (pattern.re.test(lines[i])) {
        hits.push({ file: rel, line: i + 1, name: pattern.name, text: lines[i].trim().slice(0, 180) })
      }
    }
  }
  return hits
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

export function scan(cwd = root) {
  const hits = []
  for (const app of apps) {
    const dir = join(cwd, 'apps', app)
    for (const abs of walk(dir)) {
      const rel = relative(cwd, abs)
      hits.push(...findingsIn(rel, readFileSync(abs, 'utf8')))
    }
  }
  return hits
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const hits = scan()
  if (hits.length) {
    console.error(`FAIL: ${hits.length} editor-score hit(s) outside the lighting and clinical allowlist`)
    for (const hit of hits) console.error(`  ${hit.file}:${hit.line} ${hit.name}: ${hit.text}`)
    process.exit(1)
  }
  console.log('PASS: no new editor scores on the five earning sites (lighting and clinical scales allowlisted).')
}
