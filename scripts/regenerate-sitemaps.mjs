#!/usr/bin/env node
/**
 * Regenerate sitemap.ts for each site by walking the app router.
 *
 * Walks apps/<site>/src/app/ and collects every page.tsx that maps to a
 * crawler-visible route. Skips:
 *   - api/* routes
 *   - admin/* routes
 *   - [slug] dynamic routes (no concrete URL to publish)
 *   - _* and __* private folders
 *
 * Priority is assigned by depth and section. Higher priority for the home page
 * and category indexes; lower for legal pages.
 *
 * Run: node scripts/regenerate-sitemaps.mjs
 */

import { readdirSync, writeFileSync, statSync, readFileSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')

/**
 * Extract `slug: '...'` (or "...") literals from a data file so dynamic
 * [slug] routes whose params are known at build time can be enumerated in
 * the sitemap. Used for petfoods-com's data-driven ingredient/brand catalog.
 */
function slugsFromDataFile(relPath) {
  try {
    const src = readFileSync(join(ROOT, relPath), 'utf8')
    const out = new Set()
    const re = /\bslug:\s*['"]([a-z0-9-]+)['"]/g
    let m
    while ((m = re.exec(src)) !== null) out.add(m[1])
    return Array.from(out)
  } catch {
    return []
  }
}

// Per-site registry of dynamic-route slugs that should appear in the sitemap.
// These are routes served by [slug] dynamic pages where the slug set is known
// at build time (generateStaticParams).
const SADDLE_BRAND_SLUGS = [
  'antares',
  'bates',
  'billy-cook',
  'circle-y',
  'county',
  'custom-saddlery',
  'pessoa',
  'reinsman',
  'stubben',
  'wintec',
]

// Ferrets.com dynamic-route slugs, derived from the per-cluster data files so
// the sitemap stays in sync with the [slug] catch-all pages.
function ferretsExtraRoutes() {
  const out = []
  const read = (rel) => {
    try {
      return readFileSync(join(ROOT, 'apps/ferrets-com/src', rel), 'utf8')
    } catch {
      return ''
    }
  }
  const slugsFrom = (src) =>
    [...src.matchAll(/^  '?([a-z0-9][a-z0-9-]*)'?:\s*\{/gm)]
      .map((m) => m[1])
      .filter(Boolean)
  // States (50 + DC) live in data/states.ts as `slug: '...'`.
  for (const m of read('data/states.ts').matchAll(/slug: '([a-z-]+)'/g)) {
    out.push(`/states/${m[1]}`)
    out.push(`/find-a-vet/${m[1]}`)
  }
  for (const s of slugsFrom(read('data/guides/adopt.ts')))
    out.push(`/adopt/${s}`)
  for (const s of slugsFrom(read('data/guides/acquiring.ts')))
    out.push(`/acquiring/${s}`)
  for (const s of slugsFrom(read('data/guides/legality.ts')))
    out.push(`/legality/${s}`)
  for (const s of slugsFrom(read('data/guides/moving.ts')))
    out.push(`/moving/${s}`)
  return Array.from(new Set(out))
}

const SITES = [
  { id: 'dog-com', domain: 'dog.com' },
  { id: 'fish-com', domain: 'fish.com' },
  { id: 'lizard-com', domain: 'lizard.com' },
  {
    id: 'saddle-com',
    domain: 'saddle.com',
    extraRoutes: SADDLE_BRAND_SLUGS.map((s) => `/brands/${s}`),
  },
  { id: 'vets-co', domain: 'vets.co' },
  // Added 2026-05-31: extend coverage to the remaining 5 production sites
  // so sitemap regeneration is comprehensive post-mega-wave.
  { id: 'horses-com', domain: 'horses.com' },
  { id: 'petfood-com', domain: 'petfood.com' },
  {
    id: 'petfoods-com',
    domain: 'petfoods.com',
    // Data-driven [slug] catalog: enumerate ingredient + brand + review slugs
    // (union) so the full reference catalog is crawler-discoverable.
    extraRoutes: [
      ...slugsFromDataFile('apps/petfoods-com/src/data/ingredients.ts').map(
        (s) => `/ingredients/${s}`
      ),
      ...[
        ...new Set([
          ...slugsFromDataFile('apps/petfoods-com/src/data/brands.ts'),
          ...slugsFromDataFile('apps/petfoods-com/src/data/brand-reviews.ts'),
        ]),
      ].map((s) => `/brands/${s}`),
    ],
  },
  { id: 'ferret-com', domain: 'ferret.com' },
  {
    id: 'ferrets-com',
    domain: 'ferrets.com',
    extraRoutes: ferretsExtraRoutes(),
  },
]

function listRoutes(siteId) {
  const appDir = join(ROOT, 'apps', siteId, 'src/app')
  const routes = new Set()

  function walk(dir, prefix) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (
          entry.name.startsWith('_') ||
          entry.name.startsWith('.') ||
          entry.name === 'api' ||
          entry.name === 'admin' ||
          entry.name.includes('[') ||
          entry.name === 'node_modules'
        ) {
          continue
        }
        // Next.js route groups: `(name)/foo/page.tsx` → URL `/foo`.
        // The parenthesised segment exists only for code organization and
        // must NOT appear in sitemap URLs (or Googlebot follows 404s).
        const isRouteGroup =
          entry.name.startsWith('(') && entry.name.endsWith(')')
        const nextPrefix = isRouteGroup ? prefix : `${prefix}/${entry.name}`
        walk(path, nextPrefix)
      } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        routes.add(prefix === '' ? '/' : prefix)
      }
    }
  }

  walk(appDir, '')
  return Array.from(routes).sort((a, b) => a.localeCompare(b))
}

function priorityFor(route) {
  if (route === '/') return 1.0
  const depth = (route.match(/\//g) || []).length
  if (route.startsWith('/legal/')) return 0.2
  if (route === '/editorial-standards') return 0.3
  if (route === '/tools') return 0.95 // calculator hub
  if (route.startsWith('/tools/')) return 0.85 // individual calculator
  if (depth === 1) return 0.9 // category index
  if (depth === 2) return 0.7 // content page
  return 0.5
}

function frequencyFor(route) {
  if (route === '/') return 'daily'
  if (route.startsWith('/legal/')) return 'yearly'
  if (route === '/editorial-standards') return 'yearly'
  const depth = (route.match(/\//g) || []).length
  if (depth === 1) return 'weekly'
  return 'monthly'
}

function generateSitemap(site, routes) {
  const baseUrl = `https://${site.domain}`
  const lines = routes.map((route) => {
    const url = route === '/' ? baseUrl : `${baseUrl}${route}`
    const priority = priorityFor(route)
    const freq = frequencyFor(route)
    return `    { url: '${url}', lastModified: now, changeFrequency: '${freq}', priority: ${priority.toFixed(2)} },`
  })

  return `import { MetadataRoute } from 'next'

/**
 * Auto-generated by scripts/regenerate-sitemaps.mjs.
 * To refresh after adding/removing pages, re-run:
 *   node scripts/regenerate-sitemaps.mjs
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
${lines.join('\n')}
  ]
}
`
}

let totalRoutes = 0
for (const site of SITES) {
  const walked = listRoutes(site.id)
  const merged = new Set(walked)
  for (const r of site.extraRoutes || []) merged.add(r)
  const routes = Array.from(merged).sort((a, b) => a.localeCompare(b))
  totalRoutes += routes.length
  const sitemapPath = join(ROOT, 'apps', site.id, 'src/app/sitemap.ts')
  writeFileSync(sitemapPath, generateSitemap(site, routes))
  console.log(`${site.id}: ${routes.length} routes → ${sitemapPath}`)
}
console.log(`\nTotal: ${totalRoutes} routes across ${SITES.length} sites`)
