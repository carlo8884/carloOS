#!/usr/bin/env node
/**
 * Weekly report of site_search_no_results queries. Reads
 * ops/analytics/site-search-no-results.json when that export exists.
 * Until GA4 data is collected, it prints a short note and exits 0.
 *
 *   [{ "site": "dog-com", "query": "kennel", "count": 4 }]
 */
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')
export const EXPORT_PATH = path.join(ROOT, 'ops/analytics/site-search-no-results.json')

export function zeroResultRows(raw) {
  if (!Array.isArray(raw)) return []
  const rows = []
  for (const row of raw) {
    if (!row || typeof row.query !== 'string') continue
    const query = row.query.trim()
    const count = Number(row.count)
    if (query.length < 2 || !Number.isFinite(count) || count <= 0) continue
    rows.push({
      site: typeof row.site === 'string' && row.site.trim() ? row.site.trim() : 'unknown',
      query,
      count,
    })
  }
  rows.sort((a, b) => b.count - a.count || a.site.localeCompare(b.site) || a.query.localeCompare(b.query))
  return rows
}

export function reportText(rows, source) {
  if (!source) {
    return [
      'Zero-result site searches',
      '',
      'No analytics export yet. /search sends site_search_no_results when a query returns no pages.',
      'Once that GA4 data exists, save it as ops/analytics/site-search-no-results.json',
      'with objects { site, query, count } and this report will list them.',
      '',
    ].join('\n')
  }
  const lines = [`Zero-result site searches (${rows.length} from ${source})`, '']
  if (rows.length === 0) lines.push('The export has no zero-result queries.')
  for (const row of rows) lines.push(`- ${row.site} ${row.count} ${row.query}`)
  lines.push('')
  return lines.join('\n')
}

function main() {
  if (!existsSync(EXPORT_PATH)) {
    process.stdout.write(reportText([], null))
    return
  }
  let raw
  try {
    raw = JSON.parse(readFileSync(EXPORT_PATH, 'utf8'))
  } catch (error) {
    console.error(`Could not read ${EXPORT_PATH}: ${error instanceof Error ? error.message : error}`)
    process.exit(0)
  }
  process.stdout.write(reportText(zeroResultRows(raw), 'ops/analytics/site-search-no-results.json'))
}

const invoked = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url
if (invoked) main()
