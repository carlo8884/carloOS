#!/usr/bin/env node
/**
 * CI check: internal link integrity.
 *
 * Walks each app's src/app/ directory, enumerates routable pages, then scans
 * all TSX files (plus packages/config/index.ts nav/footerLinks slices and the
 * shared Footer.tsx) for internal hrefs. Any internal href that doesn't
 * resolve to a real page.tsx or a [slug] catch-all is a failure.
 *
 * Skips: anchors (#...), external (http://, https://, mailto:, tel:).
 *
 * Exit code: 0 if all links resolve, 1 if any broken link found.
 *
 * Originally /tmp/link-check.js — graduated to CI per STATUS.md §6.8.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const APPS = ['dog-com', 'fish-com', 'lizard-com', 'saddle-com', 'vets-co']

function listFiles(dir, exts) {
  if (!exists(dir)) return []
  const out = []
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
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

function exists(path) {
  try {
    readdirSync(path)
    return true
  } catch {
    return false
  }
}

function routesFor(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  const pageFiles = listFiles(appDir, ['page.tsx', 'page.ts', 'page.jsx', 'page.js'])
  const staticRoutes = new Set(['/'])
  const dynamicFolders = new Set()
  const dynamicPatterns = [] // RegExp[] for routes with [slug] anywhere in the path
  for (const f of pageFiles) {
    let rel = f.slice(appDir.length).replace(/\/page\.[tj]sx?$/, '')
    if (rel === '') continue
    // Strip Next.js route groups: (funnels)/foo → /foo, (auth)/login → /login.
    // Route groups are ignored when computing the URL path.
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
    if (rel === '') {
      staticRoutes.add('/')
      continue
    }
    if (/\[.+\]/.test(rel)) {
      // Trailing [slug] → register the parent folder (backwards-compat)
      if (rel.endsWith('/[slug]')) {
        const parent = rel.replace(/\/\[slug\]$/, '')
        dynamicFolders.add(parent || '/')
      }
      // Always register a regex pattern for the full route — covers /breeds/[slug]/feeding etc.
      const pattern = '^' + rel.replace(/\[[^\]]+\]/g, '[^/]+') + '$'
      dynamicPatterns.push(new RegExp(pattern))
    } else {
      staticRoutes.add(rel)
    }
  }
  return { staticRoutes, dynamicFolders, dynamicPatterns }
}

function resolves(href, routes) {
  const path = href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
  if (routes.staticRoutes.has(path)) return true
  const parts = path.split('/')
  if (parts.length >= 2) {
    const parent = parts.slice(0, -1).join('/') || '/'
    if (routes.dynamicFolders.has(parent)) return true
  }
  for (const re of routes.dynamicPatterns) {
    if (re.test(path)) return true
  }
  return false
}

function collectHrefs(site) {
  const appDir = join(ROOT, 'apps', site, 'src')
  const tsxFiles = listFiles(appDir, ['.tsx'])
  const hrefs = []
  const jsxHrefRe = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{`([^`${}]+)`\}|\{"([^"]+)"\}|\{'([^']+)'\})/g
  const objHrefRe = /href\s*:\s*['"`]([^'"`]+)['"`]/g

  for (const f of tsxFiles) {
    const src = readFileSync(f, 'utf8')
    for (const re of [jsxHrefRe, objHrefRe]) {
      let m
      while ((m = re.exec(src)) !== null) {
        const v = m[1] || m[2] || m[3] || m[4] || m[5]
        if (!v || !v.startsWith('/') || v.startsWith('//')) continue
        const line = src.slice(0, m.index).split('\n').length
        hrefs.push({ source: f.replace(ROOT + '/', ''), line, href: v })
      }
    }
  }

  // Shared Footer
  const footerPath = join(ROOT, 'packages/ui/src/components/Footer.tsx')
  if (exists(footerPath.replace(/\/Footer\.tsx$/, ''))) {
    try {
      const footerSrc = readFileSync(footerPath, 'utf8')
      for (const re of [jsxHrefRe, objHrefRe]) {
        let m
        while ((m = re.exec(footerSrc)) !== null) {
          const v = m[1] || m[2] || m[3] || m[4] || m[5]
          if (!v || !v.startsWith('/') || v.startsWith('//')) continue
          const line = footerSrc.slice(0, m.index).split('\n').length
          hrefs.push({ source: 'packages/ui/src/components/Footer.tsx [shared]', line, href: v })
        }
      }
    } catch {}
  }

  // Per-site config slice (siteConfigs entry — last occurrence of `'<site>': {`)
  try {
    const configSrc = readFileSync(join(ROOT, 'packages/config/index.ts'), 'utf8')
    const siteSliceRe = new RegExp(`'${site}'\\s*:\\s*\\{`, 'g')
    let lastMatch = null
    let mm
    while ((mm = siteSliceRe.exec(configSrc)) !== null) lastMatch = mm
    if (lastMatch) {
      let depth = 0
      let i = lastMatch.index + lastMatch[0].length - 1
      const start = i
      do {
        if (configSrc[i] === '{') depth++
        else if (configSrc[i] === '}') depth--
        i++
      } while (depth > 0 && i < configSrc.length)
      const slice = configSrc.slice(start, i)
      for (const re of [jsxHrefRe, objHrefRe]) {
        let m
        while ((m = re.exec(slice)) !== null) {
          const v = m[1] || m[2] || m[3] || m[4] || m[5]
          if (!v || !v.startsWith('/') || v.startsWith('//')) continue
          const offsetInConfig = start + m.index
          const line = configSrc.slice(0, offsetInConfig).split('\n').length
          hrefs.push({ source: 'packages/config/index.ts', line, href: v })
        }
      }
    }
  } catch {}

  return hrefs
}

let totalBroken = 0
const report = []

for (const site of APPS) {
  const routes = routesFor(site)
  const hrefs = collectHrefs(site)
  const broken = []
  const seen = new Set()
  for (const h of hrefs) {
    if (!resolves(h.href, routes)) {
      const key = `${h.source}:${h.line}:${h.href}`
      if (seen.has(key)) continue
      seen.add(key)
      broken.push(h)
    }
  }
  if (broken.length > 0) {
    totalBroken += broken.length
    report.push(`\n## ${site}: ${broken.length} broken internal link${broken.length === 1 ? '' : 's'}`)
    for (const b of broken) {
      report.push(`  ${b.source}:${b.line} — href=${JSON.stringify(b.href)}`)
    }
  } else {
    report.push(`## ${site}: clean`)
  }
}

console.log(report.join('\n'))

if (totalBroken > 0) {
  console.error(`\nFAIL: ${totalBroken} broken internal link(s) found across the repo.`)
  console.error('Fix the href, repoint to an existing page, or de-link the breadcrumb.')
  process.exit(1)
} else {
  console.log('\nPASS: 0 broken internal links across all 5 sites.')
  process.exit(0)
}
