#!/usr/bin/env node
/**
 * A page that already calls buildFAQSchema must not let FAQAccordion emit a
 * second FAQPage. The accordion stays on the page for the visible questions
 * and sets includeSchema={false}.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '(funnels)' || entry.name === 'go') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (entry.name === 'page.tsx') out.push(path)
  }
  return out
}

function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:\\])\/\/.*$/gm, '$1')
}

/** Index of the `/` in the self-closing tag that starts at `<FAQAccordion`. */
function accordionClose(src, start) {
  let i = start + '<FAQAccordion'.length
  let brace = 0
  let paren = 0
  let bracket = 0
  let quote = ''
  while (i < src.length) {
    const c = src[i]
    if (quote) {
      if (c === '\\') {
        i += 2
        continue
      }
      if (c === quote) quote = ''
      i += 1
      continue
    }
    if (c === '"' || c === "'" || c === '`') {
      quote = c
      i += 1
      continue
    }
    if (c === '{') brace += 1
    else if (c === '}') brace -= 1
    else if (c === '(') paren += 1
    else if (c === ')') paren -= 1
    else if (c === '[') bracket += 1
    else if (c === ']') bracket -= 1
    else if (c === '>' && brace === 0 && paren === 0 && bracket === 0) {
      if (src[i - 1] === '/') return i - 1
      return -1
    }
    i += 1
  }
  return -1
}

const hits = []
for (const site of SITES) {
  const app = join(ROOT, 'apps', site, 'src/app')
  for (const file of walk(app)) {
    const src = stripComments(readFileSync(file, 'utf8'))
    if (!src.includes('buildFAQSchema(')) continue
    let from = 0
    while (from < src.length) {
      const start = src.indexOf('<FAQAccordion', from)
      if (start < 0) break
      const close = accordionClose(src, start)
      const tag = close < 0 ? src.slice(start, start + 180) : src.slice(start, close)
      if (!tag.includes('includeSchema={false}')) {
        const line = src.slice(0, start).split('\n').length
        hits.push(`${file.replace(ROOT + '/', '')}:${line} calls buildFAQSchema and mounts a second FAQ schema`)
      }
      from = start + '<FAQAccordion'.length
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} page(s) emit FAQPage twice`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: pages that call buildFAQSchema keep a single FAQ schema.')
