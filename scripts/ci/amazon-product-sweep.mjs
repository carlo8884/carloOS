#!/usr/bin/env node
/**
 * Weekly check of /go hops on the five earning sites.
 * Product hops open a specific Amazon product (an ASIN or a /dp/ URL).
 * Search hops are /go/amazon-brand/ queries.
 * A bot wall, HTTP 401, 403, 429, 503, another 5xx, or no response is
 * unverifiable and is not a dead or empty link.
 * A source template such as ${amazonBrandSlug(query)} is not a query.
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
import { renderFirstScreenAudit } from './amazon-search-audit.mjs'

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

export const SEARCH_STATUSES = ['live', 'empty', 'redirected', '404', 'unverifiable']

/** Search result markers start well after the first few kilobytes. */
export const SEARCH_BODY_BYTES = 360000

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

/** A template slot is not a search a reader can open. */
export function concreteSearchSku(sku) {
  return Boolean(sku) && !/[$`{}]/.test(sku)
}

/** A search hop is /go/amazon-brand/<query>. A product hop is not. */
export function searchFromHref(href, routes) {
  const hop = hopFromHref(href)
  if (!hop || hop.vendor !== 'amazon-brand' || !concreteSearchSku(hop.sku)) return null
  const target = resolveHopTarget(hop.vendor, hop.sku, routes?.[hop.vendor])
  if (!target.includes('/s')) return null
  return { query: hop.sku, target }
}

function addSearch(rows, search, href, where) {
  const row = rows.get(search.query) || { ...search, where: [], hrefs: [] }
  if (row.where.length < 8 && !row.where.includes(where)) row.where.push(where)
  if (row.hrefs.length < 4 && !row.hrefs.includes(href)) row.hrefs.push(href)
  rows.set(search.query, row)
}

export function collectAmazonSearches(repoRoot) {
  return SITES.map((site) => {
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
        const search = searchFromHref(href, routes)
        if (!search) continue
        addSearch(rows, search, href, where)
      }
    }
    return { name: site, rows: [...rows.values()] }
  })
}

export function classifyAmazonSearch({ status, error, snippet, finalUrl }) {
  if (error || !status) return { status: 'unverifiable', detail: error || 'no response' }
  if (status === 404 || status === 410) return { status: '404', detail: `HTTP ${status}` }
  if (status === 401 || status === 403 || status === 405 || status === 429 || status === 503 || status >= 500) {
    return { status: 'unverifiable', detail: `HTTP ${status}` }
  }
  const body = snippet || ''
  if (botWall(body.slice(0, 8000))) return { status: 'unverifiable', detail: `HTTP ${status} bot wall` }
  if (DOG_PAGE.test(body)) return { status: '404', detail: `HTTP ${status} dog page` }
  let path = ''
  try {
    path = new URL(finalUrl || '').pathname
  } catch {
    path = ''
  }
  if (/\/(?:dp|gp\/product)\//i.test(path)) return { status: 'redirected', detail: `HTTP ${status} product page` }
  if (path && path !== '/s' && !path.startsWith('/s/')) return { status: 'redirected', detail: `HTTP ${status} ${path}` }
  if (/no results for|did not match any products/i.test(body)) return { status: 'empty', detail: `HTTP ${status} no results` }
  if (/(?:^|[^\d])0\s+results?\s+for/i.test(body)) return { status: 'empty', detail: `HTTP ${status} 0 results` }
  const count = body.match(/(\d[\d,]*)\s+results?\s+for/i)
  const results = count ? Number(count[1].replace(/,/g, '')) : 0
  if (results > 0 && (/MAIN-SEARCH_RESULTS-|s-search-result/.test(body) || body.length > 200000)) {
    return { status: 'live', detail: `HTTP ${status} ${count[1]} results` }
  }
  if (body.length < 250000) return { status: 'unverifiable', detail: `HTTP ${status} short body` }
  return { status: 'unverifiable', detail: `HTTP ${status} no result marker` }
}

function searchSection(searches) {
  const lines = [
    '## Amazon searches',
    '',
    'Checked unique /go/amazon-brand/ queries on the five earning sites. A source template is not a query.',
    'Live means the search page shows results for that query. Empty means no results. Redirected means the final URL left the search.',
    '404 is an HTTP 404 or a dog page. Unverifiable is a bot wall, HTTP 401, 403, 429, 503, another 5xx, or no response. Unverifiable is not an empty search.',
    '',
  ]
  for (const site of searches) {
    const counts = Object.fromEntries(SEARCH_STATUSES.map((status) => [status, 0]))
    for (const row of site.rows) {
      if (counts[row.status] !== undefined) counts[row.status] += 1
    }
    lines.push(`## ${site.name} searches`)
    lines.push('')
    lines.push(
      `unique queries ${site.rows.length} / live ${counts.live} / empty ${counts.empty} / redirected ${counts.redirected} / 404 ${counts['404']} / unverifiable ${counts.unverifiable}`,
    )
    lines.push('')
    for (const status of SEARCH_STATUSES) {
      const rows = site.rows.filter((row) => row.status === status)
      lines.push(`### ${status}`)
      lines.push('')
      if (!rows.length) lines.push('none')
      else if (status === 'live') lines.push(`${rows.length} live. Live queries are counted above and not listed one by one.`)
      else {
        for (const row of rows) {
          lines.push(`- ${row.query} — ${row.detail} — ${(row.where || []).join(', ')}`)
        }
      }
      lines.push('')
    }
  }
  return lines
}

export function renderAmazonSweep({ checkedAt, sites, searches }) {
  const lines = [
    `# Amazon product sweep — ${checkedAt}`,
    '',
    'Checked /go hops on dog-com, fish-com, horses-com, vets-co, and ferret-com that open a specific Amazon product (an ASIN or a /dp/ URL).',
    'The search section covers unique /go/amazon-brand/ queries. One artifact covers products and searches.',
    'Shared UI is packages/ui/src, excluding components/visual. A product hop there is listed once, not five times.',
    'Unverifiable is a bot wall, HTTP 401, 403, 429, 503, another 5xx, or no response. Unverifiable is not a dead link and not an empty search.',
    'This job records status only. It does not replace hops, open issues, or mention anyone.',
    '',
  ]
  if (searches) lines.push(...searchSection(searches))
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
  lines.push(...renderFirstScreenAudit())
  lines.push('## Replacements')
  lines.push('')
  lines.push('none recorded by this job')
  lines.push('')
  const body = lines.join('\n')
  if (/(^|\s)@/.test(body)) throw new Error('amazon product sweep report must not mention anyone')
  return body
}

async function readBody(response, max) {
  if (!response.body) return ''
  const reader = response.body.getReader()
  const chunks = []
  let size = 0
  try {
    while (size < max) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
      size += value.length
    }
  } catch {
    /* body cut short */
  }
  try {
    await reader.cancel()
  } catch {
    /* already closed */
  }
  const bytes = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk.subarray(0, bytes.length - offset), offset)
    offset += chunk.length
    if (offset >= bytes.length) break
  }
  return new TextDecoder().decode(bytes)
}

async function probeSearch(url) {
  async function once() {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9',
      },
      signal: AbortSignal.timeout(20000),
    })
    const snippet = await readBody(response, SEARCH_BODY_BYTES)
    return { status: response.status, finalUrl: response.url, snippet, error: '' }
  }
  let first
  try {
    first = await once()
  } catch (err) {
    first = { status: 0, finalUrl: url, snippet: '', error: err instanceof Error ? err.name : 'error' }
  }
  const verdict = classifyAmazonSearch(first)
  if (verdict.status !== 'unverifiable' && verdict.status !== '404') return verdict
  try {
    return classifyAmazonSearch(await once())
  } catch {
    return verdict
  }
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
  const searchCollected = collectAmazonSearches(root)
  const searchTargets = new Map()
  for (const site of searchCollected) {
    for (const row of site.rows) searchTargets.set(row.target, row.query)
  }
  const searchList = [...searchTargets.entries()]
  process.stderr.write(`probing ${searchList.length} Amazon search URL(s)\n`)
  const searchVerdicts = new Map()
  await mapPool(searchList, 4, async ([target]) => {
    searchVerdicts.set(target, await probeSearch(target))
  })
  const searches = searchCollected.map((site) => ({
    name: site.name,
    rows: site.rows.map((row) => ({
      ...row,
      ...(searchVerdicts.get(row.target) || { status: 'unverifiable', detail: 'no response' }),
    })),
  }))
  const body = renderAmazonSweep({
    checkedAt: new Date().toISOString().slice(0, 16) + 'Z',
    sites,
    searches,
  })
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
