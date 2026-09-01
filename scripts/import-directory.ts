#!/usr/bin/env npx tsx
/**
 * Idempotent directory importer.
 *
 * Reads license-board CSVs from directory-packs/ (NOT invented here) and
 * writes unclaimed stubs to apps/<site>/src/data/directory-listings.json.
 *
 * Required columns: display_name,city,state,category,license_number,source_url,claimed
 * claimed is forced false. Rows without source_url + license_number are skipped.
 * Dedupe: (license_number,state) then (display_name,city,state).
 *
 * Load order once files exist: ferret 70, fish 665, dog 1368, horses 1648,
 * vets-co 59741. TX/NY in the vets pack were lookup-only — import only
 * what is in the CSV.
 *
 * Usage:
 *   npx tsx scripts/import-directory.ts
 *   npx tsx scripts/import-directory.ts --site ferret-com
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseDirectoryCsv } from '../packages/config/directory'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PACK_DIR = join(ROOT, 'directory-packs')
const BATCH = 4000

const SITE_TO_APP: Record<string, { pack: string; app: string }> = {
  'ferret-com': { pack: 'ferret-national.csv', app: 'ferret-com' },
  'fish-com': { pack: 'fish-national.csv', app: 'fish-com' },
  'dog-com': { pack: 'dog-national.csv', app: 'dog-com' },
  'horses-com': { pack: 'horses-national.csv', app: 'horses-com' },
  'vets-co': { pack: 'vets-co-national.csv', app: 'vets-co' },
}

const ORDER = ['ferret-com', 'fish-com', 'dog-com', 'horses-com', 'vets-co']

function parseArgs(argv: string[]) {
  const out: { site: string | null } = { site: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--site' && argv[i + 1]) {
      out.site = argv[i + 1]
      i += 1
    }
  }
  return out
}

function writeJson(app: string, listings: unknown[]) {
  const dest = join(ROOT, 'apps', app, 'src/data/directory-listings.json')
  mkdirSync(dirname(dest), { recursive: true })
  const next = `${JSON.stringify(listings, null, 2)}\n`
  if (existsSync(dest) && readFileSync(dest, 'utf8') === next) {
    return { dest, wrote: false, count: listings.length }
  }
  writeFileSync(dest, next)
  return { dest, wrote: true, count: listings.length }
}

function importSite(siteId: string) {
  const spec = SITE_TO_APP[siteId]
  if (!spec) throw new Error(`unknown site ${siteId}`)
  const csvPath = join(PACK_DIR, spec.pack)
  if (!existsSync(csvPath)) {
    const empty = writeJson(spec.app, [])
    console.log(`[directory] ${spec.pack} missing — ${empty.dest} stays empty []`)
    return { siteId, count: 0, skipped: 0, missing: true }
  }

  const csv = readFileSync(csvPath, 'utf8')
  const { listings, skipped } = parseDirectoryCsv(csv)
  const result = writeJson(spec.app, listings)
  console.log(
    `[directory] ${siteId}: ${result.count} stubs (${skipped} skipped) → ${result.dest}${result.wrote ? '' : ' (unchanged)'}`,
  )
  if (listings.length > BATCH) {
    console.log(
      `[directory] ${siteId}: ${listings.length} rows accepted in one idempotent write (batch size ${BATCH} is for future streaming)`,
    )
  }
  return { siteId, count: result.count, skipped, missing: false }
}

function main() {
  const { site } = parseArgs(process.argv.slice(2))
  const sites = site ? [site] : ORDER
  for (const id of sites) {
    importSite(id)
  }
}

main()
