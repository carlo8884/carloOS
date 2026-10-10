#!/usr/bin/env node
/**
 * Five earning sites: internal hrefs must resolve, and /go slugs must be
 * registered vendors. A dynamic route that calls notFound() for an unknown
 * slug fails here too — link-check.mjs treats every [slug] as valid.
 *
 * dog-com, fish-com, horses-com, vets-co, ferret-com only.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function listFiles(dir, pred, out = []) {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(entry.name)) continue
      listFiles(path, pred, out)
    } else if (pred(path)) out.push(path)
  }
  return out
}

function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function registeredVendors(site) {
  const file = join(ROOT, 'apps', site, 'src/data/affiliate-routes.ts')
  const src = readFileSync(file, 'utf8')
  const keys = new Set()
  for (const match of src.matchAll(/^\s{2}'?([a-z0-9-]+)'?\s*:\s*\{/gim)) {
    if (match[1] !== 'name' && match[1] !== 'template') keys.add(match[1])
  }
  return keys
}

function resolveImport(fromFile, spec, siteSrc) {
  let base = null
  if (spec.startsWith('.')) base = resolve(dirname(fromFile), spec)
  else if (spec.startsWith('@/')) base = join(siteSrc, spec.slice(2))
  if (!base) return null
  for (const candidate of [
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.mjs`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
  ]) {
    if (existsSync(candidate)) return candidate
  }
  return null
}

function pageTexts(page, siteSrc) {
  const texts = []
  const seen = new Set()
  const walk = (file, depth) => {
    if (!file || seen.has(file) || depth < 0) return
    seen.add(file)
    let src
    try {
      src = readFileSync(file, 'utf8')
    } catch {
      return
    }
    texts.push(src)
    if (depth === 0) return
    for (const match of src.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
      walk(resolveImport(file, match[1], siteSrc), depth - 1)
    }
  }
  walk(page, 3)
  return texts
}

function allowedSlugs(page, siteSrc) {
  const texts = pageTexts(page, siteSrc)
  const allowed = new Set()
  const blob = texts.join('\n')
  for (const match of blob.matchAll(/['"`]([a-z0-9]+(?:-[a-z0-9]+)*)['"`]/g)) {
    if (match[1].length > 1 && match[1].length < 90) allowed.add(match[1])
  }
  for (const match of blob.matchAll(/breedASlug:\s*'([^']+)'\s*,\s*breedBSlug:\s*'([^']+)'/g)) {
    allowed.add(`${match[1]}-vs-${match[2]}`)
  }
  const src = readFileSync(page, 'utf8')
  const always404 = /export default function SlugPage\(\)\s*\{\s*notFound\(\)/.test(src)
  return { allowed, always404 }
}

function routesFor(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  const siteSrc = join(ROOT, 'apps', site, 'src')
  const files = [
    ...listFiles(appDir, (path) => /\/page\.[tj]sx?$/.test(path)),
    ...listFiles(appDir, (path) => /\/route\.[tj]sx?$/.test(path)),
  ]
  const staticRoutes = new Set(['/'])
  const dynamics = []
  for (const file of files) {
    let rel = file.slice(appDir.length).replace(/\/(page|route)\.[tj]sx?$/, '')
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
    if (!rel) {
      staticRoutes.add('/')
      continue
    }
    if (/\[.+\]/.test(rel)) {
      const isPage = /\/page\.[tj]sx?$/.test(file)
      const src = isPage ? readFileSync(file, 'utf8') : ''
      dynamics.push({
        rel,
        file,
        isPage,
        checksSlug: isPage && (/dynamicParams\s*=\s*false/.test(src) || /notFound\(/.test(src)),
        re: new RegExp(`^${rel.replace(/\[[^\]]+\]/g, '([^/]+)')}$`),
      })
    } else {
      staticRoutes.add(rel)
    }
  }
  dynamics.sort((a, b) => b.rel.length - a.rel.length)
  return { staticRoutes, dynamics, siteSrc }
}

const hrefRe =
  /href\s*[:=]\s*(?:"([^"]+)"|'([^']+)'|\{`([^`${}]+)`\}|\{"([^"]+)"\}|\{'([^']+)'\})/g

function collectHrefs(src) {
  const hrefs = []
  const code = stripComments(src)
  for (const match of code.matchAll(hrefRe)) {
    const href = match[1] || match[2] || match[3] || match[4] || match[5]
    if (!href || !href.startsWith('/') || href.startsWith('//') || href.includes('${')) continue
    hrefs.push(href)
  }
  return hrefs
}

function collectHops(src) {
  const hops = []
  const code = stripComments(src)
  for (const match of code.matchAll(/\/go\/([a-z0-9-]+)(?:\/([^"'`\s?#)]+))?/gi)) {
    hops.push({ vendor: match[1].toLowerCase(), sku: match[2] || '' })
  }
  return hops
}

function siteSlice(file, site) {
  if (!existsSync(file)) return ''
  const src = readFileSync(file, 'utf8')
  const re = new RegExp(`'${site}'\\s*:\\s*\\{`, 'g')
  let last = null
  let match
  while ((match = re.exec(src)) !== null) last = match
  if (!last) return ''
  let depth = 0
  let i = last.index + last[0].length - 1
  const start = i
  do {
    if (src[i] === '{') depth += 1
    else if (src[i] === '}') depth -= 1
    i += 1
  } while (depth > 0 && i < src.length)
  return src.slice(start, i)
}

const failures = []

for (const site of SITES) {
  const routes = routesFor(site)
  const vendors = registeredVendors(site)
  const slugCache = new Map()
  const files = listFiles(join(ROOT, 'apps', site, 'src'), (path) =>
    /\.(tsx|ts)$/.test(path),
  )
  const extra = [
    ['packages/ui/src/components/Footer.tsx', readFileSync(join(ROOT, 'packages/ui/src/components/Footer.tsx'), 'utf8')],
    ['packages/config/index.ts', siteSlice(join(ROOT, 'packages/config/index.ts'), site)],
    [
      'packages/ui/src/data/related-reads.ts',
      siteSlice(join(ROOT, 'packages/ui/src/data/related-reads.ts'), site),
    ],
  ]

  function checkHref(href, where) {
    const path = href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
    if (path === '/go' || path.startsWith('/go/')) return
    if (routes.staticRoutes.has(path)) return
    const hit = routes.dynamics.find((route) => route.re.test(path))
    if (!hit) {
      failures.push(`${where}: ${href} has no page on ${site}`)
      return
    }
    if (!hit.checksSlug) return
    let info = slugCache.get(hit.file)
    if (!info) {
      info = allowedSlugs(hit.file, routes.siteSrc)
      slugCache.set(hit.file, info)
    }
    if (info.always404) {
      failures.push(`${where}: ${href} matches ${hit.rel}, which always 404s`)
      return
    }
    const segments = path.match(hit.re).slice(1)
    const missing = segments.filter((segment) => !info.allowed.has(segment))
    if (missing.length) {
      failures.push(
        `${where}: ${href} 404s — unknown slug ${missing.join(', ')} on ${hit.rel}`,
      )
    }
  }

  function checkHops(src, where) {
    for (const hop of collectHops(src)) {
      if (!vendors.has(hop.vendor)) {
        failures.push(
          `${where}: /go/${hop.vendor}/${hop.sku} is not a registered hop on ${site}`,
        )
      }
    }
  }

  for (const file of files) {
    const src = readFileSync(file, 'utf8')
    const where = file.replace(`${ROOT}/`, '')
    for (const href of collectHrefs(src)) checkHref(href, where)
    checkHops(src, where)
  }
  for (const [where, src] of extra) {
    if (!src) continue
    for (const href of collectHrefs(src)) checkHref(href, where)
    checkHops(src, where)
  }
}

const unique = [...new Set(failures)]
if (unique.length) {
  console.error(`FAIL: ${unique.length} broken internal link(s) or unknown hop slug(s) on the five earning sites.`)
  for (const line of unique) console.error(`  ${line}`)
  process.exit(1)
}
console.log('PASS: five earning sites have no broken internal hrefs and no unknown /go slugs.')
