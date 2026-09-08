#!/usr/bin/env node
/**
 * CI check: kitchen-kit / invented-Amazon / fake-magnet copy must not
 * return on the five earning sites (dog-com, fish-com, horses-com,
 * vets-co, ferret-com).
 *
 * Scans customer-visible TSX (JSX comments stripped) for Pattern B
 * kitchen-kit English, invented Amazon query labels, and signup copy
 * that promises checklists / PDFs / courses / immediate email delivery
 * that we cannot fulfill until an ESP exists.
 *
 * Exit 0 if clean, 1 if any forbidden phrase appears.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const FORBIDDEN = [
  { pattern: /kitchen kit/i, reason: 'Customer-visible "kitchen kit" builder English' },
  { pattern: /Empty Chewy buttons stay hidden/, reason: 'Ops leftover shown as customer copy' },
  { pattern: /Aging pages stay held/, reason: 'Ops leftover shown as customer copy' },
  { pattern: /laminated\+/, reason: 'Invented Amazon search (laminated+…)' },
  { pattern: /fridge\+/, reason: 'Invented Amazon search (fridge+…)' },
  { pattern: /stall\+door/, reason: 'Invented Amazon search (stall+door…)' },
  { pattern: /mustelid\+/, reason: 'Invented Amazon search (mustelid+…)' },
  { pattern: /Browse laminated/i, reason: 'Invented laminated Amazon label' },
  { pattern: /quesenberry-afa-er-grounding/, reason: 'Kebab builder ID as customer copy' },
  { pattern: /fridge-match-persona-card/, reason: 'Kebab builder ID as customer copy' },
  { pattern: /avma-college-directory-grounding/, reason: 'Kebab builder ID as customer copy' },
  { pattern: /ctaText="Email my [^"]*(?:checklist|PDF|course|cheat sheet)/i, reason: 'EmailCapture promises a magnet we do not deliver' },
  { pattern: /ctaText="Email the [^"]*(?:checklist|PDF|course|cheat sheet|schedule)/i, reason: 'EmailCapture promises a magnet we do not deliver' },
  { pattern: /We'll email the .{0,80}immediately/i, reason: 'Promises immediate email delivery without an ESP' },
  { pattern: /Card delivered immediately/i, reason: 'Promises immediate card delivery without an ESP' },
  { pattern: /Schedule in your inbox immediately/i, reason: 'Promises immediate schedule delivery without an ESP' },
  { pattern: /8-week email course/i, reason: 'Promises an email course that does not exist' },
  { pattern: /8-email course/i, reason: 'Promises an email course that does not exist' },
  { pattern: /eight-email course/i, reason: 'Promises an email course that does not exist' },
]

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
    } else if (/\.(tsx|ts)$/.test(e.name) && !p.includes('.next/types/')) {
      out.push(p)
    }
  }
  return out
}

const files = []
for (const site of SITES) walk(join(ROOT, 'apps', site, 'src'), files)

const hits = []
for (const file of files) {
  const raw = readFileSync(file, 'utf8')
  const src = stripComments(raw)
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (const rule of FORBIDDEN) {
      if (rule.pattern.test(line)) {
        hits.push({
          file: file.replace(ROOT + '/', ''),
          line: i + 1,
          reason: rule.reason,
          snippet: line.trim().slice(0, 160),
        })
      }
    }
  }
}

if (hits.length > 0) {
  console.log(`## Kitchen-kit ban: ${hits.length} hit${hits.length === 1 ? '' : 's'}\n`)
  for (const h of hits) {
    console.log(`${h.file}:${h.line}`)
    console.log(`  reason: ${h.reason}`)
    console.log(`  line:   ${h.snippet}`)
    console.log()
  }
  console.error(`FAIL: ${hits.length} forbidden kitchen-kit / fake-magnet phrase(s).`)
  process.exit(1)
}

console.log('## Kitchen-kit ban: clean')
console.log(`\nPASS: scanned ${files.length} files on the five earning sites; 0 hits.`)
process.exit(0)
