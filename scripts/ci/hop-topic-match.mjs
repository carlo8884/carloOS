#!/usr/bin/env node
/**
 * Report-only. Lists a hard-coded Amazon search on a five-earning-site page
 * when both the search and the page name a product from a closed list
 * (helmet, halter, stirrup, saddle, pad, boot, blanket, girth, bridle, bit,
 * martingale, surcingle, hoof) and those products do not overlap.
 *
 * A helmet search on a halters or pads page is the case this exists to catch.
 * A product the article actually names still passes. Searches outside the
 * list are ignored, so breed pages and generic supply hops stay quiet.
 *
 * The live report still includes related-product hops (a hoof pick on a
 * breed page, a girth on the rider-size tool). Those are not the
 * helmet-on-the-wrong-page class, so this check exits 0. Promote it to a
 * hard gate only after that list is empty or each remaining row is accepted.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

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

/**
 * Mismatches in one page source. `file` is only used in the report row.
 * Returns [] when the page has no buildMetadata path, is dynamic, or names
 * no product from the closed list.
 */
export function topicMismatches(src, file = '') {
  const clean = stripComments(src)
  const meta = clean.match(/buildMetadata\(\{([\s\S]*?)\n\}\)/)
  if (!meta) return []
  const block = meta[1]
  const title = (block.match(/title:\s*"([^"]+)"/) || [])[1] || ''
  const description = (block.match(/description:\s*\n?\s*"([^"]+)"/) || [])[1] || ''
  const path = (block.match(/path:\s*'([^']+)'/) || [])[1]
  if (!path || path.includes('[')) return []
  const topic = groupsIn(`${path} ${title} ${description} ${articleText(clean)}`)
  if (topic.size === 0) return []
  const queries = [...clean.matchAll(/\/go\/amazon(?:-brand)?\/([^"'?\s]+)/g)].map((m) =>
    decodeURIComponent(m[1]).replace(/\+/g, ' '),
  )
  const hits = []
  for (const query of queries) {
    const queryGroups = groupsIn(query)
    if (queryGroups.size === 0) continue
    if ([...queryGroups].some((group) => topic.has(group))) continue
    hits.push({
      file,
      path,
      query,
      page: [...topic].join(', '),
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
  console.log(
    `REPORT: ${hits.length} Amazon search${hits.length === 1 ? '' : 'es'} do not share a topic word with the page. Report only. This check does not fail the build.`,
  )
  for (const hit of hits) {
    console.log(`  ${hit.file}`)
    console.log(`    ${hit.path} is about ${hit.page}; search "${hit.query}" is about ${hit.search}`)
  }
  process.exit(0)
}

const invoked = process.argv[1] && process.argv[1].endsWith('hop-topic-match.mjs')
if (invoked) main()
