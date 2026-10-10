#!/usr/bin/env node
/**
 * Five earning sites: sitemap index check.
 *
 * Fails when:
 *   - a sitemap URL (literal or a slug map in sitemap.ts) is noindex or a redirect
 *   - an indexable hub is missing: /pet-insurance breed hubs, state hubs,
 *     and the /tools, /guides, /reviews, and /pet-insurance section hubs
 *   - an indexable money page, tool, or guide is missing
 *     (/reviews, /tools, /guides, /pet-insurance, including dog carrier pages)
 *
 * Does not change robots or noindex. Directory shards stay out of this check.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()

const SITES = [
  { id: 'dog-com', domain: 'dog.com' },
  { id: 'vets-co', domain: 'vets.co' },
  { id: 'fish-com', domain: 'fish.com' },
  { id: 'horses-com', domain: 'horses.com' },
  { id: 'ferret-com', domain: 'ferret.com' },
]

const SKIP_DIRS = new Set(['api', 'admin', 'dashboard', 'node_modules', '.next', '.turbo'])
const MONEY_PREFIXES = ['/reviews', '/tools', '/guides', '/pet-insurance']

function exists(path) {
  try {
    statSync(path)
    return true
  } catch {
    return false
  }
}

function isNoIndex(src) {
  if (/\bnoIndex\s*:\s*true\b/.test(src)) return true
  if (/\bindex\s*:\s*false\b/.test(src)) return true
  if (/['"`][^'"`]*noindex[^'"`]*['"`]/i.test(src)) return true
  return false
}

function isRedirectStub(src) {
  return (
    /from\s+['"]next\/navigation['"]/.test(src) &&
    /\bredirect\s*\(/.test(src) &&
    !/buildMetadata\s*\(/.test(src)
  )
}

function slugsIn(src) {
  return [...src.matchAll(/\bslug:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => m[1])
}

function resolveModule(fromFile, spec) {
  if (!spec.startsWith('.')) return null
  const base = join(dirname(fromFile), spec)
  for (const ext of ['.ts', '.tsx', '.mjs', '.js']) {
    if (exists(base + ext)) return base + ext
  }
  if (exists(join(base, 'index.ts'))) return join(base, 'index.ts')
  return null
}

function importedSpecs(src) {
  const specs = []
  const re = /import\s+(?:type\s+)?[\s\S]*?\sfrom\s*['"](\.[^'"]+)['"]/g
  let m
  while ((m = re.exec(src)) !== null) specs.push(m[1])
  return specs
}

function collectSlugs(file, depth = 0, seen = new Set()) {
  if (!file || seen.has(file) || depth > 2) return []
  seen.add(file)
  let src = ''
  try {
    src = readFileSync(file, 'utf8')
  } catch {
    return []
  }
  const found = slugsIn(src)
  if (found.length > 0 || depth === 2) return found
  const out = []
  for (const spec of importedSpecs(src)) {
    out.push(...collectSlugs(resolveModule(file, spec), depth + 1, seen))
  }
  return out
}

function bindingImports(src) {
  const map = new Map()
  const re = /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s*['"](\.[^'"]+)['"]/g
  let m
  while ((m = re.exec(src)) !== null) {
    for (const part of m[1].split(',')) {
      const name = part.trim().split(/\s+as\s+/).pop()?.trim()
      if (name && !name.startsWith('type ')) map.set(name, m[2])
    }
  }
  return map
}

function expandMappedUrls(sitemapFile, src, domain) {
  const paths = new Set()
  const imports = bindingImports(src)
  const re = /(\w+)\.map\(\((\w+)\)\s*=>\s*\(\{[\s\S]*?url:\s*`([^`]+)`/g
  let m
  while ((m = re.exec(src)) !== null) {
    const [, binding, param, template] = m
    if (!template.includes(`\${${param}.slug}`)) continue
    const spec = imports.get(binding)
    const file = spec ? resolveModule(sitemapFile, spec) : null
    const slugs = [...new Set(collectSlugs(file))]
    const prefix = `https://${domain}`
    for (const slug of slugs) {
      const url = template.replace(`\${${param}.slug}`, slug)
      if (!url.startsWith(prefix)) continue
      const path = url.slice(prefix.length).split('?')[0].replace(/\/$/, '') || '/'
      paths.add(path.startsWith('/') ? path : `/${path}`)
    }
  }
  return paths
}

function literalPaths(src, domain) {
  const paths = new Set()
  const re = /url\s*:\s*['"`]([^'"`]+)['"`]/g
  let m
  while ((m = re.exec(src)) !== null) {
    let url = m[1]
    if (url.includes('${')) continue
    url = url.replace(new RegExp(`^https?://(www\\.)?${domain.replace('.', '\\.')}`), '')
    const path = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
    paths.add(path.startsWith('/') ? path : `/${path}`)
  }
  return paths
}

function walkPages(app) {
  const appDir = join(ROOT, 'apps', app, 'src/app')
  const pages = []
  function walk(dir) {
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name.startsWith('_') || entry.name.startsWith('.') || SKIP_DIRS.has(entry.name)) continue
        walk(path)
      } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        const rel = path.slice(appDir.length).replace(/\/page\.[tj]sx?$/, '')
        const route =
          rel
            .split('/')
            .filter((seg) => seg && !(seg.startsWith('(') && seg.endsWith(')')))
            .join('/') || ''
        const urlPath = route === '' ? '/' : `/${route}`
        let src = ''
        try {
          src = readFileSync(path, 'utf8')
        } catch {
          src = ''
        }
        pages.push({
          route: urlPath,
          file: path,
          src,
          dynamic: urlPath.includes('['),
          noIndex: isNoIndex(src) || layoutNoIndex(path, appDir),
          redirect: isRedirectStub(src),
        })
      }
    }
  }
  walk(appDir)
  return pages
}

function layoutNoIndex(pageFile, appDir) {
  let dir = dirname(pageFile)
  while (dir.startsWith(appDir)) {
    for (const name of ['layout.tsx', 'layout.ts']) {
      const layout = join(dir, name)
      if (!exists(layout)) continue
      try {
        if (isNoIndex(readFileSync(layout, 'utf8'))) return true
      } catch {
        /* ignore */
      }
    }
    if (dir === appDir) break
    dir = dirname(dir)
  }
  return false
}

function configRedirects(app) {
  const file = join(ROOT, 'apps', app, 'next.config.mjs')
  let src = ''
  try {
    src = readFileSync(file, 'utf8')
  } catch {
    return []
  }
  return [...src.matchAll(/source:\s*['"]([^'"]+)['"]/g)]
    .map((m) => m[1])
    .filter((source) => source.startsWith('/') && !source.includes('favicon') && !source.includes('apple-touch') && !source.includes('icon'))
}

function matchPage(path, pages) {
  const hits = pages.filter((page) => {
    const left = path.split('/').filter(Boolean)
    const right = page.route.split('/').filter(Boolean)
    if (left.length !== right.length) return false
    return right.every((seg, i) => (seg.startsWith('[') && seg.endsWith(']')) || seg === left[i])
  })
  hits.sort((a, b) => {
    const dyn = (route) => (route.match(/\[/g) || []).length
    return dyn(a.route) - dyn(b.route) || b.route.length - a.route.length
  })
  return hits[0] || null
}

function isMoney(route) {
  return MONEY_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`))
}

function isHubRoute(route) {
  if (['/tools', '/guides', '/reviews', '/pet-insurance'].includes(route)) return true
  if (/^\/pet-insurance\/breeds\/\[[^\]]+\]$/.test(route)) return true
  if (/^\/pet-insurance\/states\/\[[^\]]+\]$/.test(route)) return true
  return false
}

function staticParamsBinding(src) {
  const fn = src.match(/function generateStaticParams\(\) \{([\s\S]*?)\n\}/)
  if (!fn) return null
  const body = fn[1]
  const direct = body.match(/(\w+)\.map\(\((\w+)\)\s*=>/)
  if (direct) return { binding: direct[1] }
  const call = body.match(/(\w+)\(\)\.map\(\((\w+)\)\s*=>/)
  if (call) return { binding: call[1] }
  return null
}

function concreteDynamic(page) {
  if (!page.dynamic || page.noIndex || page.redirect) return []
  if (!isHubRoute(page.route) && !/^\/pet-insurance\/\[[^\]]+\]$/.test(page.route)) return []
  const params = page.route.match(/\[[^\]]+\]/g) || []
  if (params.length !== 1) return []
  const used = staticParamsBinding(page.src)
  if (!used) return []
  const spec = bindingImports(page.src).get(used.binding)
  const file = spec ? resolveModule(page.file, spec) : null
  const slugs = [...new Set(collectSlugs(file))]
  return slugs.map((slug) => page.route.replace(params[0], slug))
}

let failures = 0
const lines = []

for (const site of SITES) {
  const sitemapFile = join(ROOT, 'apps', site.id, 'src/app/sitemap.ts')
  const src = readFileSync(sitemapFile, 'utf8')
  const listed = literalPaths(src, site.domain)
  for (const path of expandMappedUrls(sitemapFile, src, site.domain)) listed.add(path)

  const pages = walkPages(site.id)
  const redirects = new Set(configRedirects(site.id))
  const missingHubs = []
  const missingMoney = []
  const listedBad = []

  for (const page of pages) {
    if (page.dynamic) {
      if (!page.noIndex && !page.redirect && (isHubRoute(page.route) || /^\/pet-insurance\/\[[^\]]+\]$/.test(page.route))) {
        for (const path of concreteDynamic(page)) {
          if (!listed.has(path)) {
            const bucket = isHubRoute(page.route) ? missingHubs : missingMoney
            bucket.push(path)
          }
        }
      }
      continue
    }
    const want = !page.noIndex && !page.redirect && !redirects.has(page.route) && (isHubRoute(page.route) || isMoney(page.route))
    if (want && !listed.has(page.route)) {
      if (isHubRoute(page.route)) missingHubs.push(page.route)
      else missingMoney.push(page.route)
    }
  }

  for (const path of [...listed].sort()) {
    if (redirects.has(path)) {
      listedBad.push(`${path}  redirect in next.config`)
      continue
    }
    const page = matchPage(path, pages)
    if (!page) continue
    if (page.redirect) listedBad.push(`${path}  redirect page`)
    else if (page.noIndex) listedBad.push(`${path}  noIndex`)
  }

  const unique = (rows) => [...new Set(rows)].sort()
  const hubs = unique(missingHubs)
  const money = unique(missingMoney)
  if (hubs.length === 0 && money.length === 0 && listedBad.length === 0) {
    lines.push(`${site.id}: clean (${listed.size} sitemap URLs)`)
    continue
  }
  lines.push(`${site.id}: ${hubs.length} hubs missing, ${money.length} money/tool/guide missing, ${listedBad.length} listed noindex or redirect`)
  for (const path of hubs) lines.push(`  missing hub ${path}`)
  for (const path of money) lines.push(`  missing money ${path}`)
  for (const row of listedBad) lines.push(`  listed ${row}`)
  failures += hubs.length + money.length + listedBad.length
}

console.log(lines.join('\n'))
if (failures > 0) {
  console.error(`\nFAIL: ${failures} sitemap index mismatch(es) on the five earning sites.`)
  process.exit(1)
}
console.log('\nPASS: five sitemaps list indexable hubs, money pages, tools, and guides, and omit noindex and redirect URLs.')
