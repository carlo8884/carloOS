#!/usr/bin/env node
/**
 * Check every /go target and outbound citation on the five earning sites.
 * Writes link-monitor-report.md. Exits 1 when a hard failure is found.
 * Does not open GitHub issues; the workflow does that from the report.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {
  EARNING_SITES,
  amazonTagProblem,
  citationUrlsFromSource,
  classifyStatus,
  goHrefsFromSource,
  cardShopHrefs,
  citationProbeReadsBody,
  missingShopSource,
  renderReport,
  shopSearchVerdict,
  tableShopHrefs,
} from './weekly-link-monitor-lib.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const reportPath = join(root, 'link-monitor-report.md')

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

function hopFromHref(href) {
  const path = href.split('?')[0]
  const parts = path.split('/').filter(Boolean)
  if (parts[0] !== 'go' || !parts[1]) return null
  return { vendor: parts[1].toLowerCase(), sku: parts.slice(2).join('/') }
}

export async function collectChecks(repoRoot = root) {
  const { resolveAffiliateHop, visibleShopHref } = await import('../../packages/config/affiliate-hop.ts')
  const checks = new Map()

  function add(url, where) {
    if (!url || !/^https?:\/\//i.test(url)) return
    const key = url
    const row = checks.get(key) || { url, where: [] }
    if (row.where.length < 3) row.where.push(where)
    checks.set(key, row)
  }

  for (const site of EARNING_SITES) {
    const siteRoot = join(repoRoot, 'apps', site, 'src')
    const routesUrl = pathToFileURL(join(siteRoot, 'data/affiliate-routes.ts')).href
    const { affiliateRoutes } = await import(routesUrl)
    for (const file of walk(siteRoot)) {
      const src = readFileSync(file, 'utf8')
      const where = file.replace(repoRoot + '/', '')
      for (const href of goHrefsFromSource(src)) {
        const visible = visibleShopHref(href) || href
        const hop = hopFromHref(visible)
        if (!hop) continue
        const resolved = resolveAffiliateHop({
          vendor: hop.vendor,
          sku: hop.sku,
          routes: affiliateRoutes,
        })
        add(resolved.target, `${where} (${href})`)
      }
      for (const url of citationUrlsFromSource(src)) add(url, where)
    }
  }
  return [...checks.values()]
}

export async function collectShopChecks(repoRoot = root) {
  const { resolveAffiliateHop, visibleShopHref } = await import('../../packages/config/affiliate-hop.ts')
  const checks = new Map()
  const problems = []
  let hidden = 0

  function add(url, where) {
    const row = checks.get(url) || { url, where: [] }
    if (row.where.length < 3) row.where.push(where)
    checks.set(url, row)
  }

  for (const site of EARNING_SITES) {
    const siteRoot = join(repoRoot, 'apps', site, 'src')
    const routesUrl = pathToFileURL(join(siteRoot, 'data/affiliate-routes.ts')).href
    const { affiliateRoutes } = await import(routesUrl)
    for (const file of walk(siteRoot)) {
      if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue
      const src = readFileSync(file, 'utf8')
      const where = file.replace(repoRoot + '/', '')
      for (const href of [...tableShopHrefs(src), ...cardShopHrefs(src)]) {
        if (missingShopSource(href)) {
          problems.push({ url: href, detail: 'missing ?s= source', where })
          continue
        }
        const visible = visibleShopHref(href)
        if (!visible) {
          hidden += 1
          continue
        }
        const hop = hopFromHref(visible)
        if (!hop) {
          problems.push({ url: href, detail: 'shop href is not a /go hop', where })
          continue
        }
        const resolved = resolveAffiliateHop({
          vendor: hop.vendor,
          sku: hop.sku,
          routes: affiliateRoutes,
        })
        const tagProblem = amazonTagProblem(resolved.target, process.env)
        if (tagProblem) {
          problems.push({ url: resolved.target, detail: tagProblem, where: `${where} (${href})` })
          continue
        }
        add(resolved.target, `${where} (${href})`)
      }
    }
  }
  return { checks: [...checks.values()], problems, hidden }
}

async function readCapped(body, cap = 250000) {
  if (!body) return ''
  const reader = body.getReader()
  const chunks = []
  let size = 0
  try {
    while (size < cap) {
      const { done, value } = await reader.read()
      if (done || !value) break
      chunks.push(value)
      size += value.byteLength
    }
  } finally {
    await reader.cancel().catch(() => {})
  }
  const merged = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0))
  let offset = 0
  for (const chunk of chunks) {
    merged.set(chunk, offset)
    offset += chunk.byteLength
  }
  return new TextDecoder().decode(merged)
}

async function followChain(url, readBody = false) {
  const headers = { 'user-agent': 'CarloOSLinkMonitor/1.0', accept: 'text/html' }
  const statuses = []
  let current = url
  let html = ''
  try {
    for (let hop = 0; hop < 5; hop += 1) {
      const response = await fetch(current, {
        method: 'GET',
        redirect: 'manual',
        headers,
        signal: AbortSignal.timeout(12000),
      })
      statuses.push(response.status)
      const finished = response.status < 300 || response.status >= 400
      if (!finished) {
        await response.body?.cancel()
        const next = response.headers.get('location')
        if (!next) break
        current = new URL(next, current).href
        continue
      }
      if (readBody && response.status >= 200 && response.status < 300) html = await readCapped(response.body)
      else await response.body?.cancel()
      break
    }
    return { statuses, error: '', html }
  } catch (err) {
    return { statuses, error: err instanceof Error ? err.name : 'error', html }
  }
}

async function probe(url) {
  const headers = { 'user-agent': 'CarloOSLinkMonitor/1.0', accept: 'text/html' }
  async function once(method) {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      headers,
      signal: AbortSignal.timeout(12000),
    })
    await response.body?.cancel()
    return response.status
  }
  try {
    let status = await once('HEAD')
    if (status === 405 || status === 403 || status === 501) status = await once('GET')
    return { status, error: '' }
  } catch (err) {
    return { status: 0, error: err instanceof Error ? err.name : 'error' }
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
  const limitArg = process.argv.find((arg) => arg.startsWith('--limit='))
  const limit = limitArg ? Number(limitArg.slice('--limit='.length)) : Infinity
  let checks = await collectChecks()
  if (Number.isFinite(limit)) checks = checks.slice(0, limit)
  if (listOnly) {
    console.log(`unique targets: ${checks.length}`)
    return
  }
  const shop = await collectShopChecks()
  const shopUrls = new Set(shop.checks.map((row) => row.url))
  const probed = await mapPool(checks, 8, async (row) => {
    if (citationProbeReadsBody(row.url, shopUrls)) {
      const result = await followChain(row.url, true)
      const verdict = shopSearchVerdict(result.statuses, result.error, result.html)
      return { ...row, kind: verdict.kind, detail: verdict.detail }
    }
    const result = await probe(row.url)
    const kind = classifyStatus(result.status, result.error)
    const detail = result.error || `HTTP ${result.status}`
    return { ...row, kind, detail }
  })
  const failures = probed.filter((row) => row.kind === 'fail').map((row) => ({
    url: row.url,
    detail: row.detail,
    where: row.where.join(', '),
  }))
  const blocked = probed.filter((row) => row.kind === 'blocked').map((row) => ({
    url: row.url,
    detail: row.detail,
  }))
  const shopProbed = await mapPool(shop.checks, 6, async (row) => {
    const result = await followChain(row.url, true)
    const verdict = shopSearchVerdict(result.statuses, result.error, result.html)
    return { ...row, kind: verdict.kind, detail: verdict.detail }
  })
  const shopFailures = [
    ...shop.problems,
    ...shopProbed.filter((row) => row.kind === 'fail').map((row) => ({
      url: row.url,
      detail: row.detail,
      where: row.where.join(', '),
    })),
  ]
  const shopBlocked = shopProbed.filter((row) => row.kind === 'blocked').map((row) => ({
    url: row.url,
    detail: row.detail,
  }))
  const body = renderReport({
    checkedAt: new Date().toISOString().slice(0, 16) + 'Z',
    checked: checks.length,
    failures,
    blocked,
    shop: {
      checked: shop.checks.length,
      hidden: shop.hidden,
      failures: shopFailures,
      blocked: shopBlocked,
    },
  })
  writeFileSync(reportPath, body)
  console.log(body.split('\n').slice(0, 8).join('\n'))
  if (failures.length || shopFailures.length) process.exit(1)
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (invoked) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
