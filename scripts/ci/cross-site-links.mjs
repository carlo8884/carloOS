#!/usr/bin/env node
/**
 * Relative links must stay on the current site.
 * A path that is a static page on another earning site (for example
 * dog.com's /reviews/best-dog-crates) has to be an absolute URL from
 * siteBaseUrl, not a same-origin href.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..')
export const EARNING_SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function listFiles(dir, exts) {
  const out = []
  const walk = (d) => {
    let entries
    try { entries = readdirSync(d, { withFileTypes: true }) } catch { return }
    for (const e of entries) {
      const p = join(d, e.name)
      if (e.isDirectory()) {
        if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
        walk(p)
      } else if (exts.some((x) => p.endsWith(x))) {
        out.push(p)
      }
    }
  }
  walk(dir)
  return out
}

export function staticRoutesFor(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  const routes = new Set(['/'])
  for (const f of listFiles(appDir, ['page.tsx', 'page.ts', 'page.jsx', 'page.js'])) {
    let rel = f.slice(appDir.length).replace(/\/page\.[tj]sx?$/, '')
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
    if (!rel || rel === '') {
      routes.add('/')
      continue
    }
    if (/\[.+\]/.test(rel)) continue
    routes.add(rel)
  }
  return routes
}

export function hrefsIn(src) {
  const out = []
  const re = /href\s*[:=]\s*(?:"([^"]+)"|'([^']+)'|\{`([^`${}]+)`\}|\{"([^"]+)"\}|\{'([^']+)'\})/g
  let m
  while ((m = re.exec(src)) !== null) {
    const v = m[1] || m[2] || m[3] || m[4] || m[5]
    if (v) out.push(v)
  }
  return out
}

export function normalizePath(href) {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return null
  const path = href.split('?')[0].split('#')[0]
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path || '/'
}

/** Relative hrefs whose static page lives on a different earning site. */
export function foreignRelativeLinks(siteId, hrefs, routesBySite) {
  const mine = routesBySite[siteId] || new Set()
  const bad = []
  const seen = new Set()
  for (const href of hrefs) {
    const path = normalizePath(href)
    if (!path || mine.has(path) || seen.has(path)) continue
    for (const other of Object.keys(routesBySite)) {
      if (other === siteId) continue
      if (routesBySite[other].has(path)) {
        seen.add(path)
        bad.push({ path, owner: other })
        break
      }
    }
  }
  return bad
}

function siteSlice(src, site) {
  const re = new RegExp(`'${site}'\\s*:\\s*\\{`, 'g')
  let last = null
  let mm
  while ((mm = re.exec(src)) !== null) last = mm
  if (!last) return ''
  let depth = 0
  let i = last.index + last[0].length - 1
  const start = i
  do {
    if (src[i] === '{') depth++
    else if (src[i] === '}') depth--
    i++
  } while (depth > 0 && i < src.length)
  return src.slice(start, i)
}

export function violations() {
  const routesBySite = {}
  for (const site of EARNING_SITES) routesBySite[site] = staticRoutesFor(site)
  const reads = readFileSync(join(ROOT, 'packages/ui/src/data/related-reads.ts'), 'utf8')
  const found = []
  for (const site of EARNING_SITES) {
    const hrefs = []
    for (const f of listFiles(join(ROOT, 'apps', site, 'src'), ['.tsx', '.ts'])) {
      hrefs.push(...hrefsIn(readFileSync(f, 'utf8')))
    }
    hrefs.push(...hrefsIn(siteSlice(reads, site)))
    for (const hit of foreignRelativeLinks(site, hrefs, routesBySite)) {
      found.push({ site, ...hit })
    }
  }
  return found
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (isMain) {
  const found = violations()
  if (found.length === 0) {
    console.log('PASS: no relative link points at another earning site\'s page.')
  } else {
    for (const hit of found) {
      console.error(`${hit.site} relative ${hit.path} is a page on ${hit.owner}. Use crossSiteHref.`)
    }
    console.error(`FAIL: ${found.length} relative cross-site link(s).`)
    process.exit(1)
  }
}
