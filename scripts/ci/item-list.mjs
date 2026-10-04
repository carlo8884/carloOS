#!/usr/bin/env node
/**
 * Comparison and best-of pages on the five earning sites emit an ItemList
 * whose names match a visible ranking already on the page: the Quick Picks
 * array, the ReviewCard names, or an explicit RANKED list.
 * The list carries no Review, AggregateRating, or rating fields.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.next') || entry.name === 'node_modules') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (entry.name === 'page.tsx') out.push(path)
  }
  return out
}

function sliceArray(src, marker) {
  const start = src.indexOf(marker)
  if (start < 0) return null
  let depth = 0
  let body = ''
  for (let i = start + marker.length - 1; i < src.length; i++) {
    const ch = src[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) return body
    }
    if (depth > 0) body += ch
  }
  return null
}

export function objectNames(src, varName) {
  const body = sliceArray(src, `const ${varName} = [`)
  if (body == null) return null
  const names = []
  for (const match of body.matchAll(/name:\s*(?:'([^']*)'|"([^"]*)")/g)) {
    names.push(match[1] ?? match[2])
  }
  return names
}

export function stringNames(src, varName) {
  const body = sliceArray(src, `const ${varName} = [`)
  if (body == null) return null
  const names = []
  for (const match of body.matchAll(/'([^']+)'|"([^"]+)"/g)) names.push(match[1] ?? match[2])
  return names
}

export function reviewCardNames(src) {
  const names = []
  for (const chunk of src.split('<ReviewCard').slice(1)) {
    const match = chunk.match(/\bname="([^"]+)"/) || chunk.match(/\bname=\{'([^']+)'\}/) || chunk.match(/\bname=\{"([^"]+)"\}/)
    if (match) names.push(match[1])
  }
  return names
}

function callArgs(src, fn) {
  const start = src.indexOf(`${fn}(`)
  if (start < 0) return null
  let depth = 0
  let body = ''
  for (let i = start + fn.length + 1; i < src.length; i++) {
    const ch = src[i]
    if (ch === '(') depth++
    else if (ch === ')') {
      if (depth === 0) return body
      depth--
    }
    body += ch
  }
  return null
}

function handBuiltItemList(src) {
  const start = src.search(/['"]@type['"]\s*:\s*['"]ItemList['"]/)
  if (start < 0) return null
  const slice = src.slice(start, start + 2000)
  const itemsBody = sliceArray(slice, 'itemListElement: [')
  if (itemsBody == null) return null
  const names = []
  for (const match of itemsBody.matchAll(/name:\s*(?:'([^']*)'|"([^"]*)")/g)) {
    names.push(match[1] ?? match[2])
  }
  return { names, body: itemsBody }
}

export function itemListNames(src) {
  const args = callArgs(src, 'buildItemListSchema')
  if (args != null) {
    const mapped = args.match(/items:\s*(\w+)\.map\(/)
    if (mapped) {
      const objects = objectNames(src, mapped[1])
      if (objects?.length) return objects
      return stringNames(src, mapped[1])
    }
    const itemsBody = sliceArray(args, 'items: [')
    if (itemsBody == null) return []
    const names = []
    for (const match of itemsBody.matchAll(/name:\s*(?:'([^']*)'|"([^"]*)")/g)) {
      names.push(match[1] ?? match[2])
    }
    return names
  }
  return handBuiltItemList(src)?.names ?? null
}

export function rankingSets(src) {
  const sets = []
  const quick = src.match(/<QuickPicks\s+items=\{(\w+)\}/)
  if (quick) {
    const names = objectNames(src, quick[1])
    if (names?.length) sets.push(names)
  }
  const cards = reviewCardNames(src)
  if (cards.length >= 2) sets.push(cards)
  const ranked = stringNames(src, 'RANKED')
  if (ranked?.length >= 2) sets.push(ranked)
  return sets
}

export function sameNames(a, b) {
  return a.length === b.length && a.every((name, i) => name === b[i])
}

export function pageProblems(rel, src) {
  const problems = []
  const sets = rankingSets(src)
  if (!sets.length) return problems
  const args = callArgs(src, 'buildItemListSchema')
  const hand = handBuiltItemList(src)
  if (args == null && hand == null) {
    problems.push('missing ItemList')
    return problems
  }
  const listBody = args ?? hand.body
  if (/AggregateRating|reviewCount|ratingValue|'Review'|"Review"/.test(listBody)) {
    problems.push('ItemList must not carry a Review or a rating')
  }
  const names = itemListNames(src)
  if (!names?.length) problems.push('ItemList has no items')
  else if (!sets.some((set) => sameNames(set, names))) {
    problems.push(`ItemList names do not match a visible ranking (${names.join(' | ')})`)
  }
  return problems
}

function inScope(rel) {
  if (rel.includes('(funnels)/')) return false
  if (rel.endsWith('/reviews/page.tsx')) return false
  return /\/reviews\/|vs-|\/best-/.test(rel)
}

export function itemListBuilderProblems(src) {
  const start = src.indexOf('export function buildItemListSchema')
  const end = src.indexOf('// ─', start + 10)
  const body = src.slice(start, end > start ? end : undefined)
  const problems = []
  if (!body.includes("'ItemList'") && !body.includes('"ItemList"')) problems.push('builder is not an ItemList')
  if (/AggregateRating|Review/.test(body)) problems.push('builder emits Review or AggregateRating')
  return problems
}

function main() {
  const problems = []
  const builder = readFileSync(join(root, 'packages/ui/src/components/SEOHead.tsx'), 'utf8')
  for (const problem of itemListBuilderProblems(builder)) problems.push(`SEOHead.tsx: ${problem}`)
  for (const site of SITES) {
    for (const file of walk(join(root, 'apps', site, 'src/app'))) {
      const rel = file.slice(root.length + 1)
      if (!inScope(rel)) continue
      const src = readFileSync(file, 'utf8')
      if (/\bredirect\(/.test(src)) continue
      for (const problem of pageProblems(rel, src)) problems.push(`${rel}: ${problem}`)
    }
  }
  if (problems.length) {
    console.error(`FAIL: ${problems.length} ItemList problem(s)`)
    for (const problem of problems) console.error('  - ' + problem)
    process.exit(1)
  }
  console.log('PASS: comparison and best-of ItemLists match the visible ranking and carry no ratings.')
}

if (process.argv[1] && process.argv[1].endsWith('item-list.mjs')) main()
