#!/usr/bin/env node
/**
 * Stock image sync — fetches photos from Unsplash + Pexels using build-time API keys,
 * writes a manifest into packages/ui/src/data/image-manifest.json.
 *
 * USAGE
 *   export UNSPLASH_ACCESS_KEY="your-key"
 *   export PEXELS_API_KEY="your-key"
 *   node scripts/sync-images.mjs
 *
 * The manifest is committed to git so production builds don't need API keys.
 * Re-run this script when you add new entries to scripts/image-queries.json.
 *
 * Idempotent — won't re-fetch keys whose manifest entry is fresh (skip if --force).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')

const QUERIES_PATH = resolve(ROOT, 'scripts/image-queries.json')
const MANIFEST_PATH = resolve(ROOT, 'packages/ui/src/data/image-manifest.json')

const FORCE = process.argv.includes('--force')

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY
const PEXELS_KEY = process.env.PEXELS_API_KEY

if (!UNSPLASH_KEY && !PEXELS_KEY) {
  console.error('ERROR: at least one of UNSPLASH_ACCESS_KEY or PEXELS_API_KEY must be set.')
  process.exit(1)
}

console.log(`Providers: ${UNSPLASH_KEY ? 'Unsplash ✓' : 'Unsplash ✗'} | ${PEXELS_KEY ? 'Pexels ✓' : 'Pexels ✗'}`)

const queries = JSON.parse(readFileSync(QUERIES_PATH, 'utf8'))
const manifest = existsSync(MANIFEST_PATH) ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')) : {}

async function fetchUnsplash(query, orientation = 'landscape') {
  if (!UNSPLASH_KEY) return null
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=5&content_filter=high`
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } })
  if (!res.ok) {
    console.error(`  Unsplash ${res.status}: ${query}`)
    return null
  }
  const data = await res.json()
  const photo = data.results?.[0]
  if (!photo) return null
  return {
    provider: 'unsplash',
    id: photo.id,
    url: photo.urls.regular,
    width: photo.width,
    height: photo.height,
    color: photo.color,
    photographer: photo.user.name,
    photographerUrl: `${photo.user.links.html}?utm_source=carloOS&utm_medium=referral`,
    sourceUrl: `${photo.links.html}?utm_source=carloOS&utm_medium=referral`,
    description: photo.alt_description || photo.description || '',
  }
}

async function fetchPexels(query, orientation = 'landscape') {
  if (!PEXELS_KEY) return null
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=5`
  const res = await fetch(url, { headers: { Authorization: PEXELS_KEY } })
  if (!res.ok) {
    console.error(`  Pexels ${res.status}: ${query}`)
    return null
  }
  const data = await res.json()
  const photo = data.photos?.[0]
  if (!photo) return null
  return {
    provider: 'pexels',
    id: String(photo.id),
    url: photo.src.large,
    width: photo.width,
    height: photo.height,
    color: photo.avg_color,
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
    sourceUrl: photo.url,
    description: photo.alt || '',
  }
}

async function pickBest(query, providerPref, orientation) {
  if (providerPref === 'unsplash') return await fetchUnsplash(query, orientation)
  if (providerPref === 'pexels') return await fetchPexels(query, orientation)
  const [u, p] = await Promise.all([fetchUnsplash(query, orientation), fetchPexels(query, orientation)])
  if (u && p) {
    // Prefer the higher-resolution result
    return (u.width * u.height) >= (p.width * p.height) ? u : p
  }
  return u || p
}

const entries = Object.entries(queries).filter(([k]) => !k.startsWith('$'))
console.log(`Syncing ${entries.length} image queries...\n`)

let added = 0
let skipped = 0
let failed = 0

for (const [key, config] of entries) {
  if (!FORCE && manifest[key]?.url) {
    skipped++
    console.log(`  ${key} — kept (${manifest[key].provider})`)
    continue
  }

  const result = await pickBest(config.query, config.provider || 'either', config.orientation || 'landscape')
  if (!result) {
    failed++
    console.log(`  ${key} — FAILED (no results for "${config.query}")`)
    continue
  }

  manifest[key] = {
    ...result,
    alt: config.alt || result.description || key,
    query: config.query,
  }
  added++
  console.log(`  ${key} — ${result.provider} ${result.id} by ${result.photographer}`)

  // Be polite to the APIs
  await new Promise(r => setTimeout(r, 300))
}

mkdirSync(dirname(MANIFEST_PATH), { recursive: true })
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')

console.log(`\nDone. ${added} new, ${skipped} kept, ${failed} failed.`)
console.log(`Manifest: ${MANIFEST_PATH}`)
console.log(`\nNext: commit packages/ui/src/data/image-manifest.json and push.`)
