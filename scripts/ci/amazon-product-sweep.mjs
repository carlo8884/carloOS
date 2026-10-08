#!/usr/bin/env node
/**
 * Weekly check of /go hops on the five earning sites that open a specific
 * Amazon product (an ASIN or a /dp/ URL), not a search.
 * A bot wall, HTTP 401, 403, 429, 503, another 5xx, or no response is
 * unverifiable and is not a dead link.
 * Writes the findings to stdout, to amazon-product-sweep.md, and to the
 * GitHub step summary when that file is set. Exits 0. Does not open issues,
 * does not replace hops, and does not mention anyone.
 */
import { appendFileSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { goHrefsFromSource } from './weekly-link-monitor-lib.mjs'
import {
  botWall,
  hopFromHref,
  parseRoutes,
  probeUrl,
  resolveHopTarget,
  SITES,
} from './live-link-sweep.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')

export const PRODUCT_STATUSES = [
  'live',
  'currently unavailable',
  'redirected to a different product',
  'dog page / 404',
  'unverifiable',
]

const DOG_PAGE =
  /sorry[,!]?\s+we couldn.?t find that page|dogs of amazon|looking for something\?|page you requested could not be found/i
const UNAVAILABLE =
  /currently unavailable|we don.?t know when or if this item will be back in stock/i

export function asinFromUrl(url) {
  const match = String(url || '').match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?#]|$)/i)
  return match ? match[1].toUpperCase() : ''
}

/** A product hop resolves to /dp/ or /gp/product/. A search does not. */
export function productFromHref(href, routes) {
  const hop = hopFromHref(href)
  if (!hop) return null
  const target = resolveHopTarget(hop.vendor, hop.sku, routes[hop.vendor])
  const asin = asinFromUrl(target)
  if (!asin) return null
  return { asin, target, vendor: hop.vendor, sku: hop.sku }
}

function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'visual') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (/\.(tsx|ts|jsx|js|mjs|md)$/.test(entry.name)) out.push(path)
  }
  return out
}

function addProduct(rows, product, href, where) {
  const key = product.asin
  const row = rows.get(key) || { ...product, where: [], hrefs: [] }
  if (row.where.length < 8 && !row.where.includes(where)) row.where.push(where)
  if (row.hrefs.length < 4 && !row.hrefs.includes(href)) row.hrefs.push(href)
  rows.set(key, row)
}

export function collectAmazonProducts(repoRoot) {
  const sites = SITES.map((site) => {
    const siteRoot = join(repoRoot, 'apps', site, 'src')
    let routes = {}
    try {
      routes = parseRoutes(readFileSync(join(siteRoot, 'data/affiliate-routes.ts'), 'utf8'))
    } catch {
      routes = {}
    }
    const rows = new Map()
    for (const file of walk(siteRoot)) {
      const src = readFileSync(file, 'utf8')
      const where = relative(repoRoot, file)
      for (const href of goHrefsFromSource(src)) {
        const product = productFromHref(href, routes)
        if (!product) continue
        addProduct(rows, product, href, where)
      }
    }
    return { name: site, rows: [...rows.values()] }
  })

  let sharedRoutes = {}
  try {
    sharedRoutes = parseRoutes(readFileSync(join(repoRoot, 'apps/dog-com/src/data/affiliate-routes.ts'), 'utf8'))
  } catch {
    sharedRoutes = {}
  }
  const shared = new Map()
  const uiRoot = join(repoRoot, 'packages/ui/src')
  for (const file of walk(uiRoot)) {
    if (file.includes(`${join('components', 'visual')}`)) continue
    const src = readFileSync(file, 'utf8')
    const where = relative(repoRoot, file)
    for (const href of goHrefsFromSource(src)) {
      const product = productFromHref(href, sharedRoutes)
      if (!product) continue
      addProduct(shared, product, href, where)
    }
  }
  sites.push({ name: 'shared-ui', rows: [...shared.values()] })
  return sites
}

export function classifyAmazonProduct({ status, error, snippet, url, finalUrl, asin }) {
  if (error || !status) return { status: 'unverifiable', detail: error || 'no response' }
  if (status === 404 || status === 410) return { status: 'dog page / 404', detail: `HTTP ${status}` }
  if (status === 401 || status === 403 || status === 405 || status === 429 || status === 503 || status >= 500) {
    return { status: 'unverifiable', detail: `HTTP ${status}` }
  }
  if (botWall(snippet)) return { status: 'unverifiable', detail: `HTTP ${status} bot wall` }
  if (DOG_PAGE.test(snippet || '')) return { status: 'dog page / 404', detail: `HTTP ${status} dog page` }
  if (UNAVAILABLE.test(snippet || '')) return { status: 'currently unavailable', detail: `HTTP ${status}` }
  const landed = asinFromUrl(finalUrl || '')
  const wanted = (asin || asinFromUrl(url) || '').toUpperCase()
  if (wanted && landed && landed !== wanted) {
    return { status: 'redirected to a different product', detail: `HTTP ${status} ${landed}` }
  }
  if (wanted && !landed) {
    return { status: 'redirected to a different product', detail: `HTTP ${status} left the product page` }
  }
  if (status >= 200 && status < 400) return { status: 'live', detail: `HTTP ${status}` }
  return { status: 'unverifiable', detail: `HTTP ${status}` }
}

export function renderAmazonSweep({ checkedAt, sites }) {
  const lines = [
    `# Amazon product sweep — ${checkedAt}`,
    '',
    'Checked /go hops on dog-com, fish-com, horses-com, vets-co, and ferret-com that open a specific Amazon product (an ASIN or a /dp/ URL), not a search.',
    'Shared UI is packages/ui/src, excluding components/visual. A product hop there is listed once, not five times.',
    'Unverifiable is a bot wall, HTTP 401, 403, 429, 503, another 5xx, or no response. Unverifiable is not a dead link.',
    'This job records status only. It does not replace hops, open issues, or mention anyone.',
    '',
  ]
  for (const site of sites) {
    const counts = Object.fromEntries(PRODUCT_STATUSES.map((status) => [status, 0]))
    for (const row of site.rows) {
      if (counts[row.status] !== undefined) counts[row.status] += 1
    }
    lines.push(`## ${site.name}`)
    lines.push('')
    lines.push(
      `product hops ${site.rows.length} / live ${counts.live} / currently unavailable ${counts['currently unavailable']} / redirected to a different product ${counts['redirected to a different product']} / dog page / 404 ${counts['dog page / 404']} / unverifiable ${counts.unverifiable}`,
    )
    lines.push('')
    for (const status of PRODUCT_STATUSES) {
      const rows = site.rows.filter((row) => row.status === status)
      lines.push(`### ${status}`)
      lines.push('')
      if (!rows.length) lines.push('none')
      else {
        for (const row of rows) {
          lines.push(`- ${row.asin} — ${row.detail} — ${row.target} — ${(row.where || []).join(', ')}`)
        }
      }
      lines.push('')
    }
  }
  lines.push('## Replacements')
  lines.push('')
  lines.push('none recorded by this job')
  lines.push('')
  const body = lines.join('\n')
  if (/(^|\s)@/.test(body)) throw new Error('amazon product sweep report must not mention anyone')
  return body
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length)
  let cursor = 0
  async function worker() {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      out[index] = await fn(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()))
  return out
}

async function main() {
  const listOnly = process.argv.includes('--list')
  const collected = collectAmazonProducts(root)
  if (listOnly) {
    for (const site of collected) console.log(`${site.name} product hops ${site.rows.length}`)
    return
  }
  const unique = new Map()
  for (const site of collected) {
    for (const row of site.rows) unique.set(row.target, row.asin)
  }
  const targets = [...unique.entries()]
  process.stderr.write(`probing ${targets.length} Amazon product URL(s)\n`)
  const verdicts = new Map()
  await mapPool(targets, 4, async ([target, asin]) => {
    const result = await probeUrl(target)
    verdicts.set(
      target,
      classifyAmazonProduct({
        status: result.status,
        error: result.error,
        snippet: result.snippet,
        url: target,
        finalUrl: result.finalUrl,
        asin,
      }),
    )
  })
  const sites = collected.map((site) => ({
    name: site.name,
    rows: site.rows.map((row) => ({
      ...row,
      ...(verdicts.get(row.target) || { status: 'unverifiable', detail: 'no response' }),
    })),
  }))
  const body = renderAmazonSweep({ checkedAt: new Date().toISOString().slice(0, 16) + 'Z', sites })
  writeFileSync(join(root, 'amazon-product-sweep.md'), body)
  const summary = process.env.GITHUB_STEP_SUMMARY
  if (summary) appendFileSync(summary, body + '\n')
  console.log(body)
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (invoked) {
  main().catch((err) => {
    console.error(err)
    process.exit(0)
  })
}
