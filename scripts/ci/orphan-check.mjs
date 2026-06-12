#!/usr/bin/env node
/**
 * CI check: orphan-page detector.
 *
 * Flags any indexable static page that receives zero inbound internal links
 * from anywhere in the same site (page files, nav config, footer config).
 *
 * An "orphaned" page has no path into it from the homepage link graph, which
 * means crawlers and AI indexers can only reach it via the XML sitemap — a
 * weak signal that costs crawl budget and reduces topical authority. The
 * canonical standard for this site is QC-STANDARDS.md §2 + the SEO/GEO
 * charter in CLAUDE.md §6.
 *
 * ─── What counts as an inbound link ────────────────────────────────────────
 * Static href strings extracted from:
 *   1. All *.tsx files under apps/<site>/src/
 *   2. The per-site config slice in packages/config/index.ts (nav + footer)
 *   3. The shared Footer.tsx component in packages/ui/src/components/
 *
 * Dynamic hrefs (template literals containing ${...}) are never resolved here;
 * they are covered by the link-check gate's dynamicPatterns logic.
 *
 * ─── Exclusions (must not flag) ─────────────────────────────────────────────
 *   - Homepage (/) — always linked implicitly by the header logo
 *   - Dynamic catch-all pages ([slug], [param]) — not statically enumerable
 *   - /admin and /dashboard — intentionally noindex, crawl-excluded
 *   - Redirect stubs (files that only call redirect(); no buildMetadata)
 *   - Legal/compliance utility pages:
 *       /legal/*, /disclosure, /editorial-standards, /data,
 *       /go/* (affiliate click-trackers), /llms.txt, /robots.ts, /sitemap.ts
 *   - noindex pages (noIndex: true / index: false in buildMetadata)
 *   - Route group directories (Next.js (group)/ folders map to the same URL)
 *
 * ─── Conservative design ────────────────────────────────────────────────────
 * This gate runs in REPORT-ONLY mode (exit 0). A hub linking to a page via a
 * template literal (e.g. `/breeds/${b.slug}`) counts as covering all spokes
 * under that hub prefix — we whitelist pages whose parent folder (one level
 * up) is itself linked anywhere. This prevents false positives on large
 * programmatic clusters.
 *
 * Promote to enforcing (exit 1 on failures) by flipping ENFORCE = true once
 * the report has been reviewed against main and zero false positives remain.
 *
 * Exit code: 0 (always — report-only mode)
 *
 * Per STATUS.md: graduated from draft per PR #claude/ci-linking-schema-gates.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

// ─── ENFORCE flag ──────────────────────────────────────────────────────────
// false = report findings but exit 0 (safe for PRs during initial rollout)
// true  = exit 1 on genuine orphans (flip this after first clean run on main)
// Flipped to enforcing 2026-06-12: main verified clean (0 orphans across 10 sites)
// over many PRs since rollout. The gate now hard-blocks new orphan pages.
const ENFORCE = true

const APPS = [
  'dog-com',
  'fish-com',
  'lizard-com',
  'saddle-com',
  'vets-co',
  'horses-com',
  'petfood-com',
  'petfoods-com',
  'ferret-com',
  'ferrets-com',
]

// Route prefixes that are intentionally crawl-excluded or utility-only.
// A page whose path starts with any of these is never flagged as orphaned.
const UTILITY_PREFIXES = [
  '/legal/',
  '/go/',
  '/disclosure',
  '/editorial-standards',
  '/data',
  '/admin',
  '/dashboard',
  '/api/',
  '/llms.txt',
]

// Exact route matches that are additionally excluded (edge cases).
const UTILITY_EXACT = new Set([
  '/',
])

// ─── Helpers ────────────────────────────────────────────────────────────────

function exists(p) {
  try { statSync(p); return true } catch { return false }
}

function listFiles(dir, exts) {
  if (!exists(dir)) return []
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

function isRedirectStub(src) {
  return (
    /from\s+['"]next\/navigation['"]/.test(src) &&
    /\bredirect\s*\(/.test(src) &&
    !/buildMetadata\s*\(/.test(src)
  )
}

function isNoIndex(src) {
  if (/\bnoIndex\s*:\s*true\b/.test(src)) return true
  if (/\bindex\s*:\s*false\b/.test(src)) return true
  if (/['"`][^'"`]*noindex[^'"`]*['"`]/i.test(src)) return true
  return false
}

function isUtilityRoute(route) {
  if (UTILITY_EXACT.has(route)) return true
  for (const pfx of UTILITY_PREFIXES) {
    if (route === pfx.replace(/\/$/, '') || route.startsWith(pfx)) return true
  }
  return false
}

/**
 * Enumerate static indexable page routes for a site.
 * Returns routes like '/training', '/training/basic-commands'.
 * Excludes: dynamics, redirect stubs, noindex, utility routes.
 */
function indexableRoutesFor(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  if (!exists(appDir)) return new Set()

  const routes = new Set()

  const pageFiles = listFiles(appDir, ['page.tsx', 'page.ts', 'page.jsx', 'page.js'])
  for (const f of pageFiles) {
    // Derive URL path from file path
    let rel = f.slice(appDir.length).replace(/\/page\.[tj]sx?$/, '')
    if (rel === '') rel = '/'

    // Skip dynamic segments
    if (/\[.+\]/.test(rel)) continue

    // Strip route groups: (funnels)/foo → /foo
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '') || '/'

    // Re-check after stripping groups
    if (rel === '') rel = '/'

    if (isUtilityRoute(rel)) continue

    const src = readFileSync(f, 'utf8')
    if (isRedirectStub(src)) continue
    if (isNoIndex(src)) continue

    routes.add(rel)
  }

  return routes
}

// ─── Extract internal hrefs from a source string ─────────────────────────────

const JSX_HREF_RE = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{`([^`${}]+)`\}|\{"([^"]+)"\}|\{'([^']+)'\})/g
const OBJ_HREF_RE = /href\s*:\s*['"`]([^'"`]+)['"`]/g

function extractHrefs(src) {
  const hrefs = []
  for (const re of [JSX_HREF_RE, OBJ_HREF_RE]) {
    let m
    while ((m = re.exec(src)) !== null) {
      const v = m[1] || m[2] || m[3] || m[4] || m[5]
      if (!v || !v.startsWith('/') || v.startsWith('//')) continue
      // Skip template literals with interpolations
      if (v.includes('${')) continue
      const path = v.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
      if (!path.startsWith('/')) continue
      hrefs.push(path)
    }
  }
  return hrefs
}

/**
 * Build the set of all internal paths that are linked-to from within a site.
 * Includes:
 *   - All TSX files under apps/<site>/src/
 *   - The per-site nav/footer config slice in packages/config/index.ts
 *   - The shared Footer.tsx
 */
function collectInboundTargets(site) {
  const targets = new Set()

  // Per-site TSX files
  const appSrc = join(ROOT, 'apps', site, 'src')
  const tsxFiles = listFiles(appSrc, ['.tsx'])
  for (const f of tsxFiles) {
    const src = readFileSync(f, 'utf8')
    for (const p of extractHrefs(src)) targets.add(p)
  }

  // Shared Footer
  const footerPath = join(ROOT, 'packages/ui/src/components/Footer.tsx')
  if (exists(footerPath)) {
    try {
      const src = readFileSync(footerPath, 'utf8')
      for (const p of extractHrefs(src)) targets.add(p)
    } catch {}
  }

  // Per-site config slice
  try {
    const configSrc = readFileSync(join(ROOT, 'packages/config/index.ts'), 'utf8')
    const siteSliceRe = new RegExp(`'${site}'\\s*:\\s*\\{`, 'g')
    let lastMatch = null
    let mm
    while ((mm = siteSliceRe.exec(configSrc)) !== null) lastMatch = mm
    if (lastMatch) {
      let depth = 0
      let i = lastMatch.index + lastMatch[0].length - 1
      do {
        if (configSrc[i] === '{') depth++
        else if (configSrc[i] === '}') depth--
        i++
      } while (depth > 0 && i < configSrc.length)
      const slice = configSrc.slice(lastMatch.index, i)
      for (const p of extractHrefs(slice)) targets.add(p)
    }
  } catch {}

  return targets
}

/**
 * Build parent prefixes covered by template-literal dynamic hrefs.
 * e.g. /breeds/${b.slug} → /breeds is a covered parent
 */
function collectDynamicParents(site) {
  const parents = new Set()
  const appSrc = join(ROOT, 'apps', site, 'src')
  const tsxFiles = listFiles(appSrc, ['.tsx'])
  // Match href="/prefix/${anything}" patterns
  const TMPL_RE = /href\s*=\s*(?:`|"|\{`)\/([^`"${]+)\$\{/g
  const TMPL_OBJ_RE = /href\s*:\s*`\/([^`${]+)\$\{/g
  for (const f of tsxFiles) {
    const src = readFileSync(f, 'utf8')
    for (const re of [TMPL_RE, TMPL_OBJ_RE]) {
      let m
      while ((m = re.exec(src)) !== null) {
        const prefix = ('/' + m[1]).replace(/\/$/, '')
        if (prefix.length > 1) parents.add(prefix)
      }
    }
  }
  return parents
}

// ─── Main ────────────────────────────────────────────────────────────────────

let totalOrphans = 0
const report = []

for (const site of APPS) {
  const routes = indexableRoutesFor(site)
  const targets = collectInboundTargets(site)
  const dynParents = collectDynamicParents(site)

  const orphans = []
  for (const route of routes) {
    if (route === '/') continue // Homepage always excluded

    // Direct link found
    if (targets.has(route)) continue

    // Parent covered by a dynamic template href (e.g. /breeds/${slug} covers /breeds/beagle)
    const parts = route.split('/')
    if (parts.length >= 2) {
      const parent = parts.slice(0, -1).join('/') || '/'
      if (dynParents.has(parent)) continue
      // Also check grandparent for nested routes
      if (parts.length >= 3) {
        const grandparent = parts.slice(0, -2).join('/') || '/'
        if (dynParents.has(grandparent)) continue
      }
    }

    orphans.push(route)
  }

  orphans.sort()
  if (orphans.length > 0) {
    totalOrphans += orphans.length
    report.push(`\n## ${site}: ${orphans.length} orphan page${orphans.length === 1 ? '' : 's'} (no inbound internal links)`)
    for (const r of orphans) {
      report.push(`  ${r}`)
    }
  } else {
    report.push(`## ${site}: clean (${routes.size} pages scanned)`)
  }
}

console.log(report.join('\n'))

if (totalOrphans > 0) {
  const mode = ENFORCE ? 'FAIL' : 'REPORT'
  console.log(`\n${mode}: ${totalOrphans} orphan page${totalOrphans === 1 ? '' : 's'} found across all sites.`)
  if (!ENFORCE) {
    console.log('Running in report-only mode (exit 0). Set ENFORCE=true in this script to make it a hard gate.')
    console.log('An orphaned page receives zero inbound internal links — crawlers reach it only via sitemap.')
    console.log('Fix by adding a link from a hub, footer, or related-links section, or add to UTILITY_PREFIXES if intentionally crawl-only.')
  } else {
    console.error('Each orphaned page receives zero inbound internal links.')
    console.error('Fix: link from hub, footer, nav, or related-links. Or add to UTILITY_PREFIXES if crawl-only.')
    process.exit(1)
  }
} else {
  console.log(`\nPASS: 0 orphan pages across all ${APPS.length} sites.`)
}
process.exit(0)
