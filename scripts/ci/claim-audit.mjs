#!/usr/bin/env node
/**
 * Top 10 money pages per earning site: every visible dollar figure must
 * appear on a ReviewCard on that page or on a review page it links to.
 * Hypothetical arithmetic (Suppose / hypothetical) is not a product price.
 * Homepages and funnels are out of scope.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

const PAGES = {
  'dog-com': [
    'reviews/best-dog-crates',
    'reviews/best-dry-dog-food',
    'reviews/best-dog-harnesses',
    'reviews/best-dog-food-for-puppies',
    'reviews/best-dog-gps-tracker',
    'reviews/best-dental-chews',
    'reviews/best-slow-feeder-bowls',
    'reviews/best-dog-beds',
    'reviews/best-joint-supplements',
    'reviews/best-large-breed-dog-food',
  ],
  'fish-com': [
    'reviews/best-aquarium-filters',
    'reviews/best-aquarium-heaters',
    'reviews/best-water-test-kits',
    'reviews/best-nano-tanks',
    'reviews/best-canister-filters',
    'reviews/best-planted-tank-fertilizers',
    'reviews/best-aquarium-lighting',
    'reviews/hob-vs-canister-guide',
    'reviews/eheim-vs-cobalt-heater-guide',
  ],
  'horses-com': [
    'reviews/best-equine-supplements',
    'reviews/best-winter-horse-blankets',
    'tack/saddle-pads',
    'tack/helmet-guide',
    'tack/boots-and-wraps',
    'tack/halters-and-lead-ropes',
    'tack/girths-and-cinches',
    'supplements/joint-supplements',
    'ownership/horse-insurance',
    'guides/saddle-fit-basics',
  ],
  'vets-co': [
    'reviews/best-pet-insurance',
    'telehealth',
    'insurance/deductibles-reimbursement',
    'insurance/how-pet-insurance-works',
    'insurance/what-pet-insurance-covers',
    'insurance/reading-the-fine-print',
    'insurance/pre-existing-conditions',
    'insurance/breed-specific-risk',
    'insurance/when-to-enroll',
    'guides/emergency-vet-costs',
  ],
  'ferret-com': [
    'reviews/best-ferret-cage',
    'reviews/best-ferret-litter',
    'reviews/best-ferret-harness',
    'diet/best-ferret-kibble',
    'care/bedding-and-litter-types',
    'care/cage-setup',
    'diet/whole-prey-vs-kibble',
    'reviews/ferret-nation-vs-prevue-guide',
    'reviews/wysong-vs-marshall-kibble-guide',
    'reviews/paper-vs-wood-litter-guide',
  ],
}

const priceRe = /\$\s?\d[\d,]*(?:\.\d+)?(?:\s*[–—-]\s*\$?\s?\d[\d,]*(?:\.\d+)?)?/g
const exemptRe = /Suppose|hypothetical|sample calculation|catastrophe/i

function pagePath(site, slug) {
  return join(ROOT, 'apps', site, 'src/app', slug, 'page.tsx')
}

function readPage(site, slug) {
  const path = pagePath(site, slug)
  if (!existsSync(path)) return null
  return readFileSync(path, 'utf8')
}

function norm(raw) {
  return raw
    .replace(/\$/g, '')
    .replace(/,/g, '')
    .replace(/\s/g, '')
    .replace(/[–—-]/g, '-')
    .replace(/[.;:,]+$/g, '')
}

function tokensIn(text) {
  const out = []
  for (const match of text.matchAll(priceRe)) out.push(norm(match[0]))
  return out
}

function lineOf(text, index) {
  const start = text.lastIndexOf('\n', index - 1) + 1
  const end = text.indexOf('\n', index)
  return text.slice(start, end === -1 ? text.length : end)
}

function callBodies(text, startMarker) {
  const bodies = []
  let from = 0
  while (from < text.length) {
    const start = text.indexOf(startMarker, from)
    if (start === -1) break
    let i = start + startMarker.length
    let quote = ''
    let paren = 0
    let end = -1
    for (; i < text.length; i++) {
      const ch = text[i]
      if (quote) {
        if (ch === '\\') { i += 1; continue }
        if (ch === quote) quote = ''
        continue
      }
      if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue }
      if (ch === '(') paren += 1
      else if (ch === ')') {
        paren -= 1
        if (paren === 0) { end = i + 1; break }
      }
    }
    if (end === -1) break
    bodies.push(text.slice(start, end))
    from = end
  }
  return bodies.join('\n')
}

function jsxElement(text, startMarker) {
  const bodies = []
  let from = 0
  while (from < text.length) {
    const start = text.indexOf(startMarker, from)
    if (start === -1) break
    let i = start + startMarker.length
    let quote = ''
    let brace = 0
    let end = -1
    for (; i < text.length; i++) {
      const ch = text[i]
      if (quote) {
        if (ch === '\\') { i += 1; continue }
        if (ch === quote) quote = ''
        continue
      }
      if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue }
      if (ch === '{') brace += 1
      else if (ch === '}') brace = Math.max(0, brace - 1)
      else if (brace === 0 && ch === '/' && text[i + 1] === '>') { end = i + 2; break }
    }
    if (end === -1) break
    bodies.push(text.slice(start, end))
    from = end
  }
  return bodies.join('\n')
}

const GENERIC = new Set(['adult', 'large', 'breed', 'best', 'plus', 'equine', 'original', 'premium', 'classic', 'freshwater', 'aquarium', 'review'])

function priceCards(text) {
  const cards = []
  const chunks = text.split(/<ReviewCard\b/)
  for (const chunk of chunks.slice(1)) {
    const name = (chunk.match(/\bname="([^"]+)"/) || [])[1] || ''
    const priceMatch = chunk.match(/\bprice="([^"]+)"/)
    if (!priceMatch) continue
    const beforePrice = chunk.slice(0, priceMatch.index)
    const words = name.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length >= 5 && !GENERIC.has(word))
    cards.push({ words, tokens: new Set([...tokensIn(beforePrice), ...tokensIn(priceMatch[1])]) })
  }
  return cards
}

function linkedCards(site, text) {
  const slugs = new Set()
  for (const match of text.matchAll(/href=["'`]\/([a-z0-9/-]+)["'`]/g)) slugs.add(match[1])
  const cards = []
  for (const slug of slugs) {
    const linked = readPage(site, slug)
    if (linked) cards.push(...priceCards(linked))
  }
  return cards
}

function tokenSupported(token, index, text, own, linked) {
  if (own.some((card) => card.tokens.has(token))) return true
  const around = text.slice(Math.max(0, index - 400), index + 120).toLowerCase()
  return linked.some((card) => card.tokens.has(token) && card.words.some((word) => around.includes(word)))
}

const hits = []
const counts = {}

for (const [site, slugs] of Object.entries(PAGES)) {
  counts[site] = { pages: slugs.length, unsupported: 0 }
  for (const slug of slugs) {
    const text = readPage(site, slug)
    if (!text) {
      hits.push(`${site}/${slug}: missing page`)
      counts[site].unsupported += 1
      continue
    }
    const own = priceCards(text)
    const linked = linkedCards(site, text)
    const ownTokens = new Set(own.flatMap((card) => [...card.tokens]))
    for (const match of text.matchAll(priceRe)) {
      const line = lineOf(text, match.index)
      if (line.trim().startsWith('//') || line.trim().startsWith('*')) continue
      if (exemptRe.test(line)) continue
      const token = norm(match[0])
      if (tokenSupported(token, match.index, text, own, linked)) continue
      counts[site].unsupported += 1
      hits.push(`${site}/${slug}: $${token} is not on a review card`)
    }
    const schemas = callBodies(text, 'buildProductSchema')
    for (const match of schemas.matchAll(/priceRange:\s*['"]([^'"]+)['"]/g)) {
      const token = norm(match[1])
      if (ownTokens.has(token)) continue
      counts[site].unsupported += 1
      hits.push(`${site}/${slug}: schema priceRange ${match[1]} is not on a review card`)
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} unsupported price claim(s)`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}

const summary = Object.entries(counts)
  .map(([site, row]) => `${site} ${row.pages} pages, 0 unsupported prices`)
  .join('; ')
console.log(`PASS: ${summary}.`)
