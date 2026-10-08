#!/usr/bin/env node
/**
 * Live sweep of /go hop targets and outbound citations on the five earning sites.
 * Follows redirects, sends a browser user agent, and retries once.
 * A 404 or 410 is a dead link. A 401, 403, 429, 503, or bot wall is manual.
 * Writes the findings to stdout, to live-link-sweep.md, and to the GitHub
 * step summary when that file is set. Exits 0. Does not open issues and
 * does not mention anyone.
 */
import { appendFileSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { citationUrlsFromSource, goHrefsFromSource } from './weekly-link-monitor-lib.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const STOREFRONT_HOME = new Set([
  'embark',
  'wisdom-panel',
  'smartpak',
  'dover',
  'schneider',
  'ridingwarehouse',
  'marshall',
  'wysong',
])

const RETAIL = new Set(['amazon', 'amazon-brand', 'chewy', 'chewy-brand', 'chewy-pharmacy'])

const PARTNER_HOME = {
  amazon: 'https://www.amazon.com',
  'amazon-brand': 'https://www.amazon.com',
  chewy: 'https://www.chewy.com',
  'chewy-brand': 'https://www.chewy.com',
  'chewy-pharmacy': 'https://www.chewy.com',
}

const RETAIL_HOST =
  /amazon\.com|chewy\.com|smartpakequine\.com|doversaddlery\.com|sstack\.com|ridingwarehouse\.com|marshallpet\.com|wysong\.net|greenhawk\.com/i

export function stripPlaceholder(url) {
  let out = url.replace(/PLACEHOLDER/g, '')
  out = out
    .replace(/([?&])[^=?]+=(?=&|$)/g, '$1')
    .replace(/\?&/g, '?')
    .replace(/&&+/g, '&')
    .replace(/[?&]$/, '')
  if (!out.includes('?') && out.includes('&')) out = out.replace('&', '?')
  return out
}

export function parseRoutes(src) {
  const routes = {}
  const re = /(?:^|\n)\s*(?:'([^']+)'|([A-Za-z0-9-]+))\s*:\s*\{([\s\S]*?)\n\s*\},/g
  for (const match of src.matchAll(re)) {
    const key = (match[1] || match[2] || '').toLowerCase()
    const body = match[3]
    const template = body.match(/template:\s*'([^']+)'/)
    if (!key || !template) continue
    const requires = body.match(/requiresSku:\s*(true|false)/)
    routes[key] = {
      template: template[1],
      requiresSku: requires ? requires[1] === 'true' : true,
    }
  }
  return routes
}

function partnerHome(vendor, template) {
  if (PARTNER_HOME[vendor]) return PARTNER_HOME[vendor]
  try {
    return new URL(template.replace('{sku}', '')).origin
  } catch {
    return 'https://www.amazon.com'
  }
}

/**
 * The URL the hop opens once its existing tag is filled in.
 * PLACEHOLDER is stripped. No tag value is invented.
 */
export function resolveHopTarget(vendor, sku, route) {
  const name = (vendor || '').toLowerCase()
  const id = sku || ''
  if (!route) return partnerHome(name, '')
  if (STOREFRONT_HOME.has(name) && id.toLowerCase() === 'home') return partnerHome(name, route.template)
  if (!id && (RETAIL.has(name) || route.requiresSku !== false)) return partnerHome(name, route.template)
  const target = route.template.split('{sku}').join(encodeURIComponent(id.replaceAll('+', ' ')))
  return stripPlaceholder(target)
}

export function hopFromHref(href) {
  const path = href.split('?')[0]
  const parts = path.split('/').filter(Boolean)
  if (parts[0] !== 'go' || !parts[1]) return null
  return { vendor: parts[1].toLowerCase(), sku: decodeURIComponent(parts.slice(2).join('/')) }
}

function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.next')) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (/\.(tsx|ts|jsx|js|mjs|md)$/.test(entry.name)) out.push(path)
  }
  return out
}

export function collectSiteLinks(repoRoot, site) {
  const siteRoot = join(repoRoot, 'apps', site, 'src')
  const routes = parseRoutes(readFileSync(join(siteRoot, 'data/affiliate-routes.ts'), 'utf8'))
  const rows = new Map()
  function add(kind, url, where) {
    if (!url || !/^https?:\/\//i.test(url)) return
    const row = rows.get(url) || { url, kind, where: [] }
    if (row.where.length < 4 && !row.where.includes(where)) row.where.push(where)
    rows.set(url, row)
  }
  for (const file of walk(siteRoot)) {
    const src = readFileSync(file, 'utf8')
    const where = relative(repoRoot, file)
    for (const href of goHrefsFromSource(src)) {
      const hop = hopFromHref(href)
      if (!hop) continue
      add('hop', resolveHopTarget(hop.vendor, hop.sku, routes[hop.vendor]), `${where} (${href})`)
    }
    for (const url of citationUrlsFromSource(src)) add('citation', url, where)
  }
  return [...rows.values()]
}

export function botWall(snippet) {
  return /captcha|cf-browser-verification|just a moment|verify you are human|access denied|robot check|pardon our interruption|enable javascript and cookies/i.test(
    snippet || '',
  )
}

export function softRetailMiss(url, snippet) {
  let host = ''
  try {
    host = new URL(url).hostname
  } catch {
    return false
  }
  if (!RETAIL_HOST.test(host)) return false
  return /sorry,? we couldn.?t find|page you requested could not be found|we could not find that page|looking for something\?/i.test(
    snippet || '',
  )
}

export function collapsedToHome(original, finalUrl) {
  let from
  let to
  try {
    from = new URL(original)
    to = new URL(finalUrl)
  } catch {
    return false
  }
  if (from.hostname.replace(/^www\./, '') !== to.hostname.replace(/^www\./, '')) return false
  const depth = from.pathname.split('/').filter(Boolean).length
  const home = to.pathname === '/' || to.pathname === ''
  return depth >= 2 && home
}

export function classifyLive({ status, error, snippet, url, finalUrl }) {
  if (error || !status) return { kind: 'manual', detail: error || 'no response' }
  if (status === 404 || status === 410) return { kind: 'dead', detail: `HTTP ${status}` }
  if (status === 401 || status === 403 || status === 405 || status === 429 || status === 503) {
    return { kind: 'manual', detail: `HTTP ${status}` }
  }
  if (status >= 500) return { kind: 'manual', detail: `HTTP ${status}` }
  if (status >= 200 && status < 400) {
    if (botWall(snippet)) return { kind: 'manual', detail: `HTTP ${status} bot wall` }
    if (softRetailMiss(finalUrl || url, snippet)) return { kind: 'dead', detail: `HTTP ${status} soft 404` }
    if (finalUrl && collapsedToHome(url, finalUrl)) return { kind: 'dead', detail: `HTTP ${status} redirected to home` }
    return { kind: 'ok', detail: `HTTP ${status}` }
  }
  return { kind: 'manual', detail: `HTTP ${status}` }
}

async function readSnippet(response) {
  if (!response.body) return ''
  const reader = response.body.getReader()
  const chunks = []
  let size = 0
  try {
    while (size < 6000) {
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

async function once(url) {
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'user-agent': BROWSER_UA,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'accept-language': 'en-US,en;q=0.9',
    },
    signal: AbortSignal.timeout(15000),
  })
  const snippet = await readSnippet(response)
  return { status: response.status, finalUrl: response.url, snippet, error: '' }
}

export async function probeUrl(url) {
  let first
  try {
    first = await once(url)
  } catch (err) {
    first = { status: 0, finalUrl: url, snippet: '', error: err instanceof Error ? err.name : 'error' }
  }
  const retry =
    !first.status || first.status === 404 || first.status === 410 || first.status >= 500 || botWall(first.snippet)
  if (!retry) return first
  try {
    const second = await once(url)
    if (second.status) return second
    return first.status ? first : second
  } catch {
    return first
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

export function renderSweep({ checkedAt, sites }) {
  const lines = [
    `# Live link sweep — ${checkedAt}`,
    '',
    'Checked /go hop targets and outbound citations on dog-com, fish-com, horses-com, vets-co, and ferret-com.',
    'Dead is HTTP 404 or 410, a retailer soft 404, or a deep link that landed on the site home.',
    'Manual is a 401, 403, 429, 503, another 5xx, a bot wall, or no response after one retry. Manual is not a failure.',
    '',
  ]
  for (const site of sites) {
    lines.push(`## ${site.name}`)
    lines.push('')
    lines.push(
      `checked ${site.checked} / OK ${site.ok} / dead ${site.dead.length} / manual ${site.manual.length}`,
    )
    lines.push('')
    lines.push('### Dead')
    lines.push('')
    if (!site.dead.length) lines.push('none')
    else {
      for (const row of site.dead) {
        lines.push(`- ${row.url} — ${row.detail} — ${row.where.join(', ')}`)
      }
    }
    lines.push('')
    lines.push('### Manual')
    lines.push('')
    if (!site.manual.length) lines.push('none')
    else {
      const shown = site.manual.slice(0, 30)
      for (const row of shown) lines.push(`- ${row.url} — ${row.detail}`)
      if (site.manual.length > shown.length) {
        lines.push(`- ${site.manual.length - shown.length} more manual URLs omitted`)
      }
    }
    lines.push('')
  }
  const body = lines.join('\n')
  if (/(^|\s)@/.test(body)) throw new Error('live link sweep report must not mention anyone')
  return body
}

async function main() {
  const listOnly = process.argv.includes('--list')
  const jsonArg = process.argv.find((arg) => arg.startsWith('--json='))
  const siteArg = process.argv.find((arg) => arg.startsWith('--site='))
  const sites = siteArg ? [siteArg.slice('--site='.length)] : SITES
  const collected = sites.map((name) => ({ name, rows: collectSiteLinks(root, name) }))
  if (listOnly) {
    for (const site of collected) {
      const hops = site.rows.filter((row) => row.kind === 'hop').length
      const citations = site.rows.filter((row) => row.kind === 'citation').length
      console.log(`${site.name} unique ${site.rows.length} (hops ${hops}, citations ${citations})`)
    }
    return
  }
  const unique = new Map()
  for (const site of collected) {
    for (const row of site.rows) unique.set(row.url, true)
  }
  const urls = [...unique.keys()]
  process.stderr.write(`probing ${urls.length} unique URLs across ${collected.length} site(s)\n`)
  let done = 0
  const verdicts = new Map()
  await mapPool(urls, 8, async (url) => {
    const result = await probeUrl(url)
    const verdict = classifyLive({
      status: result.status,
      error: result.error,
      snippet: result.snippet,
      url,
      finalUrl: result.finalUrl,
    })
    verdicts.set(url, { detail: verdict.detail, verdict: verdict.kind, finalUrl: result.finalUrl || url })
    done += 1
    if (done % 40 === 0) process.stderr.write(`  ${done}/${urls.length}\n`)
  })
  const reports = collected.map((site) => {
    const probed = site.rows.map((row) => ({ ...row, ...verdicts.get(row.url) }))
    return {
      name: site.name,
      checked: probed.length,
      ok: probed.filter((row) => row.verdict === 'ok').length,
      dead: probed.filter((row) => row.verdict === 'dead'),
      manual: probed.filter((row) => row.verdict === 'manual'),
    }
  })
  const body = renderSweep({ checkedAt: new Date().toISOString().slice(0, 16) + 'Z', sites: reports })
  const reportPath = join(root, 'live-link-sweep.md')
  writeFileSync(reportPath, body)
  const summary = process.env.GITHUB_STEP_SUMMARY
  if (summary) appendFileSync(summary, body + '\n')
  if (jsonArg) {
    writeFileSync(jsonArg.slice('--json='.length), JSON.stringify(reports, null, 2))
  }
  console.log(body.split('\n').slice(0, 12).join('\n'))
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (invoked) {
  main().catch((err) => {
    console.error(err)
    process.exit(0)
  })
}
