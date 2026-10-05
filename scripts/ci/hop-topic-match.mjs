#!/usr/bin/env node
/**
 * Report-only. Lists a hard-coded Amazon search on a five-earning-site page
 * when both the search and the page name a product from a closed list
 * (helmet, halter, stirrup, saddle, pad, boot, blanket, girth, bridle, bit,
 * martingale, surcingle, hoof) and those products do not overlap.
 *
 * A helmet search on a halters or pads page is the case this exists to catch.
 * A product the article actually names still passes. Searches outside the
 * list are ignored, so a feed search on a breed page stays quiet.
 *
 * Dynamic templates are scanned too. A template-literal path such as
 * `/breeds/${slug}` is read the same way as a static path. A generic hoof
 * pick on any `/breeds/` page is reported even when the article mentions
 * hoof angles, because that search is not a breed product. Hoof-care and
 * grooming pages live outside `/breeds/` and still pass when they name a pick.
 *
 * CROSS_SELLS records the searches that are real products on purpose when
 * the article's product words do not overlap (a hoof pick on the first-horse
 * roadmap, the rider-size tack set). A helmet search on a halters page is
 * not in that list. The check exits 0 either way. Promote it to a hard gate
 * only after the report is empty.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

/**
 * Intentional cross-sells. The article's product words and the search do not
 * overlap, and the search is still a real product this page means to offer.
 * A helmet search on a halters page is not in this list.
 */
export const CROSS_SELLS = [
  {
    path: '/first-horse-roadmap',
    query: 'horse hoof pick',
    why: 'Kept hoof pick on the first-horse roadmap. The farrier step is on the page; the search is that tool, not a second tack category.',
  },
  {
    path: '/tools',
    query: 'horse hoof pick',
    why: 'Tools hub. The cost-calculator card names a hoof pick in the first-horse kit. The hub prose itself is about heart girth and body condition.',
  },
  {
    path: '/tools/horse-size-for-rider',
    query: 'horse girth cinch',
    why: 'Rider-size tool shops the tack set it adds into the carrying weight: saddle, pad, girth, stirrups, and a riding helmet.',
  },
  {
    path: '/tools/horse-size-for-rider',
    query: 'horse stirrups',
    why: 'Same rider-fit tack set as the girth and helmet on this tool.',
  },
  {
    path: '/tools/horse-size-for-rider',
    query: 'ASTM SEI horse riding helmet',
    why: 'Same rider-fit tack set. The helmet is the safety piece next to the saddle the tool already shops.',
  },
]

export function isCrossSell(path, query) {
  return CROSS_SELLS.some((row) => row.path === path && row.query === query)
}

const GROUPS = [
  ['helmet'],
  ['halter'],
  ['stirrup'],
  ['saddle'],
  ['pad', 'numnah'],
  ['boot', 'wrap'],
  ['blanket', 'rug'],
  ['girth', 'cinch'],
  ['bridle'],
  ['bit'],
  ['martingale'],
  ['surcingle', 'vaulting'],
  ['hoof'],
]

export function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function hasWord(text, word) {
  return new RegExp(`(?:^|[^a-z])${word}`, 'i').test(text)
}

export function groupsIn(text) {
  const found = new Set()
  for (const group of GROUPS) {
    if (group.some((word) => hasWord(text, word))) found.add(group[0])
  }
  return found
}

function articleText(src) {
  const chunks = []
  const re = /<(p|li|h1|h2|h3)\b[^>]*>([\s\S]*?)<\/\1>/gi
  let match
  while ((match = re.exec(src))) {
    chunks.push(match[2].replace(/<[^>]+>/g, ' '))
  }
  return chunks.join(' ')
}

function pagePath(block, file) {
  const quoted = (block.match(/path:\s*'([^']+)'/) || [])[1]
  const templated = (block.match(/path:\s*`([^`]*)`/) || [])[1]
  let path = quoted || templated || ''
  if (!path && file.includes('/src/app/')) {
    path = `/${file.split('/src/app/')[1].replace(/\/page\.tsx$/, '')}`
  }
  return path.replace(/\$\{[^}]+\}/g, '').replace(/\[[^\]]+\]/g, '').replace(/\/+/g, '/')
}

/**
 * Mismatches in one page source. `file` is only used in the report row.
 * Returns [] when the page has no buildMetadata path or names no product
 * from the closed list. Dynamic `[slug]` templates are included.
 */
export function topicMismatches(src, file = '') {
  const clean = stripComments(src)
  const meta =
    clean.match(/buildMetadata\(\{([\s\S]*?)\n\}\)/) ||
    clean.match(/buildMetadata\(\{([\s\S]*?)\n\s*\}\)/)
  if (!meta) return []
  const block = meta[1]
  const title = (block.match(/title:\s*"([^"]+)"/) || [])[1] || ''
  const description = (block.match(/description:\s*\n?\s*"([^"]+)"/) || [])[1] || ''
  const path = pagePath(block, file)
  if (!path) return []
  const topic = groupsIn(`${path} ${title} ${description} ${articleText(clean)}`)
  const queries = [...clean.matchAll(/\/go\/amazon(?:-brand)?\/([^"'?\s]+)/g)].map((m) =>
    decodeURIComponent(m[1]).replace(/\+/g, ' '),
  )
  const hits = []
  for (const query of queries) {
    const queryGroups = groupsIn(query)
    if (queryGroups.size === 0) continue
    if (isCrossSell(path, query)) continue
    const genericBreedHoofPick = path.startsWith('/breeds') && /\bhoof pick\b/i.test(query)
    if (!genericBreedHoofPick && topic.size === 0) continue
    if (!genericBreedHoofPick && [...queryGroups].some((group) => topic.has(group))) continue
    hits.push({
      file,
      path,
      query,
      page: [...topic].join(', ') || 'no listed product',
      search: [...queryGroups].join(', '),
    })
  }
  return hits
}

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
      walk(p, out)
    } else if (e.name === 'page.tsx' && !p.includes('.next/types/')) {
      out.push(p)
    }
  }
  return out
}

function main() {
  const files = []
  for (const site of SITES) walk(join(ROOT, 'apps', site, 'src'), files)
  const hits = []
  for (const file of files) {
    hits.push(...topicMismatches(readFileSync(file, 'utf8'), file.replace(ROOT + '/', '')))
  }
  if (hits.length === 0) {
    console.log(`PASS: Amazon searches on ${files.length} earning-site pages match the page topic.`)
    process.exit(0)
  }
  const noun = hits.length === 1 ? 'search does' : 'searches do'
  console.log(
    `REPORT: ${hits.length} Amazon ${noun} not share a topic word with the page. Report only. This check does not fail the build.`,
  )
  for (const hit of hits) {
    console.log(`  ${hit.file}`)
    console.log(`    ${hit.path} is about ${hit.page}; search "${hit.query}" is about ${hit.search}`)
  }
  process.exit(0)
}

const invoked = process.argv[1] && process.argv[1].endsWith('hop-topic-match.mjs')
if (invoked) main()
