#!/usr/bin/env node
/**
 * Build-time search index for the five earning sites.
 *
 * Reads static guide, review, comparison, and tool pages and writes
 * apps/<site>/src/data/search-index.json. `next build` runs this first.
 * `node scripts/build-search-index.mjs --check` fails when the committed
 * files drift from the pages.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

export const SEARCH_SITES = {
  'dog-com': ['/guides'],
  'fish-com': ['/setup'],
  'horses-com': ['/guides'],
  'vets-co': ['/guides'],
  'ferret-com': ['/care'],
}

/** Pages outside the guide roots that customers search for by name. */
export const EXTRA_GUIDES = {
  'fish-com': ['/species/betta-fish-tank-mates'],
  'horses-com': ['/health/colic'],
  'vets-co': ['/health/heartworm-in-dogs', '/health/dog-vaccinations-guide'],
  'ferret-com': ['/health/adrenal-disease'],
}

/**
 * Match text that is not the page title. Used when a tool's title
 * does not contain the words a customer types.
 */
export const SEARCH_KEYWORDS = {
  'dog-com': {
    '/tools/dog-food-amount-calculator': 'how much to feed a puppy',
  },
  'fish-com': {
    '/reviews/best-aquarium-filters': 'aquarium filters',
  },
  'horses-com': {
    '/tools/horse-feed-calculator': 'how much hay',
    '/tools/horse-water-calculator': 'daily horse water intake',
  },
  'vets-co': {
    '/tools/is-this-a-cat-emergency': 'is my pet an emergency emergancy',
    '/guides/cost-of-veterinary-care': 'vet costs',
  },
}

export function searchCategory(route, guideRoots) {
  if (route.includes('-vs-')) return 'comparisons'
  if (route === '/tools' || route.startsWith('/tools/')) return 'tools'
  if (route === '/reviews' || route.startsWith('/reviews/')) return 'reviews'
  if (guideRoots.some((root) => route === root || route.startsWith(`${root}/`))) return 'guides'
  return null
}

function walkPages(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '(funnels)') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walkPages(full, out)
    else if (entry.name === 'page.tsx') out.push(full)
  }
  return out
}

function routeOf(appDir, file) {
  let rel = file.slice(appDir.length).replace(/\/page\.tsx$/, '')
  rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
  if (rel === '') return '/'
  return rel
}

function extractStringField(body, field) {
  for (const q of ["'", '"', '`']) {
    const re = new RegExp(`${field}\\s*:\\s*${q}((?:\\\\.|(?!${q}).)*)${q}`)
    const match = body.match(re)
    if (match) return match[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`')
  }
  return null
}

function extractMetadata(src) {
  const match = src.match(/buildMetadata\s*\(\s*\{([\s\S]*?)\}\s*\)/)
  if (!match) return { title: null, description: null }
  return {
    title: extractStringField(match[1], 'title'),
    description: extractStringField(match[1], 'description'),
  }
}

function isNoIndex(src) {
  if (/\bnoIndex\s*:\s*true\b/.test(src)) return true
  if (/\bindex\s*:\s*false\b/.test(src)) return true
  return false
}

function isRedirectStub(src) {
  return /from\s+['"]next\/navigation['"]/.test(src) && /\bredirect\s*\(/.test(src) && !/buildMetadata\s*\(/.test(src)
}

export function buildSiteIndex(site) {
  const guideRoots = SEARCH_SITES[site]
  const appDir = join(ROOT, 'apps', site, 'src/app')
  const entries = []
  for (const file of walkPages(appDir)) {
    const route = routeOf(appDir, file)
    if (route.includes('[')) continue
    const extra = EXTRA_GUIDES[site]?.includes(route) ? 'guides' : null
    const category = extra ?? searchCategory(route, guideRoots)
    if (!category) continue
    const src = readFileSync(file, 'utf8')
    if (isRedirectStub(src) || isNoIndex(src)) continue
    const { title, description } = extractMetadata(src)
    if (!title) continue
    const keywords = SEARCH_KEYWORDS[site]?.[route]
    entries.push({
      path: route,
      title,
      description: description ?? '',
      category,
      ...(keywords ? { keywords } : {}),
    })
  }
  entries.sort((a, b) => a.path.localeCompare(b.path))
  return { entries }
}

function indexPath(site) {
  return join(ROOT, 'apps', site, 'src/data/search-index.json')
}

export function serializeIndex(index) {
  return `${JSON.stringify(index, null, 2)}\n`
}

function parseArgs(argv) {
  const check = argv.includes('--check')
  const siteFlag = argv.indexOf('--site')
  const site = siteFlag >= 0 ? argv[siteFlag + 1] : null
  return { check, site }
}

function main() {
  const { check, site } = parseArgs(process.argv.slice(2))
  const sites = site ? [site] : Object.keys(SEARCH_SITES)
  if (site && !SEARCH_SITES[site]) {
    console.error(`Unknown site ${site}`)
    process.exit(1)
  }
  let drift = 0
  for (const id of sites) {
    const next = serializeIndex(buildSiteIndex(id))
    const file = indexPath(id)
    if (check) {
      let current = ''
      try {
        current = readFileSync(file, 'utf8')
      } catch {
        current = ''
      }
      if (current !== next) {
        drift += 1
        console.error(`${id}: search index is stale. Run node scripts/build-search-index.mjs`)
      } else {
        console.log(`${id}: search index matches ${JSON.parse(next).entries.length} pages`)
      }
    } else {
      writeFileSync(file, next)
      console.log(`${id}: wrote ${JSON.parse(next).entries.length} pages`)
    }
  }
  if (drift > 0) process.exit(1)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
