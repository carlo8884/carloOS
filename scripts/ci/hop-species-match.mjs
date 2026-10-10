#!/usr/bin/env node
/**
 * A live Amazon search on a five-site page may name another species only
 * when that page also names it. A ferret page can shop the cat nail
 * clippers the article recommends. It cannot shop a dog crate the article
 * never mentions. The site's own species words are allowed without a
 * second mention.
 *
 * Comments are ignored, so a stubbed hop does not count. Labels beside
 * amazonHref must share a content word with the search, so a heater
 * button cannot point at a filter search.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

/** Species words that belong on this site without being repeated in the article. */
export const OWN = {
  'dog-com': ['dog', 'puppy', 'canine'],
  'fish-com': ['fish', 'aquarium', 'betta', 'cichlid', 'reef'],
  'horses-com': ['horse', 'equine', 'foal', 'pony'],
  'vets-co': ['dog', 'puppy', 'canine', 'cat', 'kitten', 'pet'],
  'ferret-com': ['ferret'],
}

export const SPECIES = [
  'dog', 'puppy', 'canine', 'cat', 'kitten', 'ferret',
  'horse', 'equine', 'foal', 'pony', 'aquarium', 'betta', 'cichlid', 'reef', 'fish',
]

export function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function words(text) {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? []
}

function mentions(body, token) {
  return new RegExp(`\\b${token}s?\\b`, 'i').test(body)
}

export function queryText(hrefOrSlug) {
  const slug = hrefOrSlug.split('/').pop().split('?')[0]
  return decodeURIComponent(slug).replace(/\+/g, ' ')
}

/**
 * Foreign species tokens in Amazon searches that the page body never uses.
 * `site` is a SITES id. Returns [] when every foreign word is also on the page.
 */
export function speciesMisses(src, site) {
  const own = new Set(OWN[site] ?? [])
  const clean = stripComments(src)
  const body = clean
    .replace(/\/go\/amazon[^"'`\s)]*/g, ' ')
    .replace(/amazonLabel="[^"]*"/g, ' ')
  const hits = []
  const re = /\/go\/amazon(?:-brand)?\/([^"'`?\s]+)/g
  let match
  while ((match = re.exec(clean))) {
    const query = queryText(match[1])
    const missing = [...new Set(words(query))].filter(
      (token) => SPECIES.includes(token) && !own.has(token) && !mentions(body, token),
    )
    if (missing.length) hits.push({ query, missing })
  }
  return hits
}

const TOPIC_NOUNS = [
  'heater', 'filter', 'litter', 'harness', 'crate', 'blanket', 'saddle', 'halter',
  'kibble', 'substrate', 'helmet', 'girth', 'bridle', 'stirrup', 'clipper', 'hoof',
  'supplement', 'cage',
]

function topicNouns(text) {
  return words(text).filter((word) => TOPIC_NOUNS.some((noun) => word === noun || word.startsWith(noun)))
}

/**
 * amazonHref / amazonLabel pairs whose label shares no content word with
 * the search. A label that only says "Browse on Amazon" is not checked.
 */
export function labelMisses(src) {
  const clean = stripComments(src)
  const re = /amazonHref="([^"]+)"([\s\S]{0,240}?)amazonLabel="([^"]+)"/g
  const hits = []
  let match
  while ((match = re.exec(clean))) {
    const query = queryText(match[1])
    const labelNouns = topicNouns(match[3])
    const queryNouns = topicNouns(query)
    if (labelNouns.length === 0 || queryNouns.length === 0) continue
    const overlap = labelNouns.some((word) =>
      queryNouns.some((token) => token === word || token.startsWith(word) || word.startsWith(token)),
    )
    if (!overlap) hits.push({ query, label: match[3] })
  }
  return hits
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo', 'visual'].includes(entry.name)) continue
      walk(path, out)
    } else if (/\.(tsx|ts)$/.test(entry.name)) out.push(path)
  }
  return out
}

function main() {
  let hops = 0
  let labels = 0
  const hits = []
  for (const site of SITES) {
    for (const file of walk(join(ROOT, 'apps', site, 'src'))) {
      const src = readFileSync(file, 'utf8')
      const clean = stripComments(src)
      hops += [...clean.matchAll(/\/go\/amazon(?:-brand)?\/([^"'`?\s]+)/g)].length
      const rel = file.replace(ROOT + '/', '')
      for (const hit of speciesMisses(src, site)) {
        hits.push(`${rel}: "${hit.query}" names ${hit.missing.join(', ')}, and the page does not`)
      }
      const labelHits = labelMisses(src)
      labels += [...clean.matchAll(/amazonHref="[^"]+"[\s\S]{0,240}?amazonLabel="[^"]+"/g)].length
      for (const hit of labelHits) {
        hits.push(`${rel}: label "${hit.label}" does not match search "${hit.query}"`)
      }
    }
  }
  if (hits.length) {
    console.error(`FAIL: ${hits.length} Amazon hop(s) do not match the page or the label beside them`)
    for (const hit of hits) console.error('  ' + hit)
    process.exit(1)
  }
  console.log(
    `PASS: ${hops} Amazon hops. A foreign species word in the search also appears on the page. ${labels} labeled buttons do not pair one product word with a different product search.`,
  )
}

const invoked = process.argv[1] && process.argv[1].endsWith('hop-species-match.mjs')
if (invoked) main()
