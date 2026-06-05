#!/usr/bin/env node
/**
 * article-craft.mjs -- Advisory craft-bar audit for CarloOS editorial articles.
 *
 * Usage:  node scripts/ci/article-craft.mjs
 *         npm run audit:craft
 *
 * Advisory only: always exits 0.  This script is NOT wired into the required
 * CI gate and does not block PRs.  Run it during weekly COO quality sweeps and
 * before flagging a site launch-ready.
 *
 * What it checks (per spec §3 "Per-Article Minimum Craft Bar"):
 *
 *   GAP-1  No ArticleByline import/use on a page that uses ArticleLayout
 *   GAP-2  ArticleByline present but updatedAt prop missing
 *   GAP-3  breadcrumbs prop absent or fewer than 3 items
 *   GAP-4  relatedLinks prop absent or fewer than 3 items
 *   GAP-5  Health/nutrition article pages with zero SourceCitation or
 *          ArticleSourcesList (heuristic: path contains health|nutrition|
 *          feeding|conditions|symptoms|clinical|ingredient|medical|breed)
 *
 * Trust-bar adjacent:
 *   GAP-6  ArticleByline reviewedBy set to a string containing DVM, MD, PhD,
 *          or "Dr." -- rudimentary; trust-guard.mjs is the hard enforcer.
 *
 * How the scan works:
 *   - Walks apps/[site]/src/app/.../page.tsx
 *   - Skips: [slug] dynamic routes, /admin, pure redirect stubs, node_modules,
 *     .next, .turbo, non-editorial pages (no ArticleLayout import)
 *   - Conservative heuristic: it reads the *source file*, not the runtime
 *     output. Indirect patterns (e.g., ArticleLayout used from a parent layout)
 *     are not caught -- this is intentional to keep false positives low.
 *
 * Relationship to other CI scripts:
 *   trust-guard.mjs     -- catches trust violations (Blocker; exits 1)
 *   metadata-policy.mjs -- catches SEO defects (some enforced; exits 1)
 *   link-check.mjs      -- catches broken links (enforced; exits 1)
 *   article-craft.mjs   -- catches craft gaps (all advisory; exits 0)
 *
 * Spec: ops/handoffs/2026-06-05-visual-coo-editorial-system-spec.md s3 + s6
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()

// ---------------------------------------------------------------------------
// Site list (production apps only; skip scaffolds and decommissioned apps)
// ---------------------------------------------------------------------------
const SITES = [
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

// ---------------------------------------------------------------------------
// Non-editorial routes: disclosure/legal/editorial-standards pages use
// ArticleLayout for layout scaffolding but are not editorial articles and
// should not be audited for craft-bar gaps.
// ---------------------------------------------------------------------------
const NON_EDITORIAL_ROUTE_RE =
  /^\/(disclosure|legal|editorial-standards|privacy-policy|terms|about|sitemap)(\/|$)/i

// ---------------------------------------------------------------------------
// Heuristic: paths that suggest health/nutrition/clinical content that
// requires source citations per the spec.
// ---------------------------------------------------------------------------
const CITATION_REQUIRED_PATH_RE =
  /\/(health|nutrition|feeding|conditions|condition|symptoms|clinical|ingredient|ingredients|medical|breeds?)\//i

// ---------------------------------------------------------------------------
// Walk all page.tsx files for a given site
// ---------------------------------------------------------------------------
function listPages(siteId) {
  const root = join(ROOT, 'apps', siteId, 'src/app')
  const out = []
  function walk(dir) {
    try {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name)
        if (e.isDirectory()) {
          if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
          walk(p)
        } else if (/^page\.(tsx|ts|jsx|js)$/.test(e.name)) {
          out.push(p)
        }
      }
    } catch {}
  }
  walk(root)
  return out
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function routeOf(siteRoot, file) {
  const rel = file.slice(siteRoot.length).replace(/\/page\.[tj]sx?$/, '')
  return rel === '' ? '/' : rel
}

/** True if the page only redirect()s to another URL and has no indexable content. */
function isRedirectStub(src) {
  return (
    /from\s+['"]next\/navigation['"]/.test(src) &&
    /\bredirect\s*\(\s*['"`]/.test(src) &&
    !/ArticleLayout/.test(src)
  )
}

/** True if the page imports ArticleLayout (the signal that this is an article). */
function isArticlePage(src) {
  return /\bArticleLayout\b/.test(src)
}

/**
 * Count the number of items in a JSX array prop named `propName`.
 * Very conservative: counts opening braces `{` inside the prop value block
 * between the prop= and the next unmatched }] or end of prop.  Falls back
 * to a simple count of `href:` occurrences which is good enough for
 * breadcrumbs/relatedLinks arrays.
 */
function countArrayPropItems(src, propName) {
  const re = new RegExp(`${propName}\\s*=\\s*\\{\\s*\\[`, 'g')
  const m = re.exec(src)
  if (!m) return 0
  const start = m.index + m[0].length
  // Count `href:` occurrences in the array value -- one per item
  const slice = src.slice(start, start + 2000)
  const close = slice.indexOf(']')
  const chunk = close >= 0 ? slice.slice(0, close) : slice
  const count = (chunk.match(/\bhref\s*:/g) || []).length
  return count
}

// ---------------------------------------------------------------------------
// Audit one page file
// ---------------------------------------------------------------------------
function auditPage(file, route, src) {
  const gaps = []

  // GAP-1: ArticleByline missing
  const hasByline = /\bArticleByline\b/.test(src)
  if (!hasByline) {
    gaps.push({ code: 'GAP-1', msg: 'ArticleByline missing' })
  }

  // GAP-2: ArticleByline present but updatedAt prop not set
  if (hasByline && !/\bupdatedAt\s*=/.test(src)) {
    gaps.push({ code: 'GAP-2', msg: 'ArticleByline present but updatedAt prop missing' })
  }

  // GAP-6: reviewedBy contains a credential pattern (trust-bar early warning)
  if (hasByline && /reviewedBy\s*=\s*[{'"](.*?(DVM|MD|PhD|Dr\.))/i.test(src)) {
    gaps.push({ code: 'GAP-6', msg: 'ArticleByline reviewedBy may contain a fabricated credential (DVM/MD/PhD/Dr.) -- trust-guard.mjs is the hard enforcer' })
  }

  // GAP-3: breadcrumbs absent or fewer than 3 items
  const hasBreadcrumbs = /\bbreadcrumbs\s*=/.test(src)
  if (!hasBreadcrumbs) {
    gaps.push({ code: 'GAP-3', msg: 'breadcrumbs prop absent (need Home -> Hub -> Article)' })
  } else {
    const breadcrumbCount = countArrayPropItems(src, 'breadcrumbs')
    if (breadcrumbCount > 0 && breadcrumbCount < 3) {
      gaps.push({ code: 'GAP-3', msg: `breadcrumbs prop has only ${breadcrumbCount} item(s) -- minimum 3 (Home -> Hub -> Article)` })
    }
  }

  // GAP-4: relatedLinks absent or fewer than 3 items
  // Note: relatedLinks can appear both on ArticleLayout (footer) and RelatedLinks
  // sidebar widget. We check for any usage here.
  const hasRelatedLinks = /\brelatedLinks\s*=/.test(src)
  if (!hasRelatedLinks) {
    gaps.push({ code: 'GAP-4', msg: 'relatedLinks prop absent (need >= 3, including hub link)' })
  } else {
    const rlCount = countArrayPropItems(src, 'relatedLinks')
    if (rlCount > 0 && rlCount < 3) {
      gaps.push({ code: 'GAP-4', msg: `relatedLinks has only ${rlCount} item(s) -- minimum 3` })
    }
  }

  // GAP-5: health/nutrition path with no source citations
  if (CITATION_REQUIRED_PATH_RE.test(route)) {
    const hasCitation =
      /\bSourceCitation\b/.test(src) ||
      /\bArticleSourcesList\b/.test(src)
    if (!hasCitation) {
      gaps.push({ code: 'GAP-5', msg: 'Health/nutrition/clinical article with no SourceCitation or ArticleSourcesList' })
    }
  }

  return gaps
}

// ---------------------------------------------------------------------------
// Main scan loop
// ---------------------------------------------------------------------------

let totalArticlePages = 0
let totalGapPages = 0
const siteReports = []
const gapCodeCounts = { 'GAP-1': 0, 'GAP-2': 0, 'GAP-3': 0, 'GAP-4': 0, 'GAP-5': 0, 'GAP-6': 0 }

for (const siteId of SITES) {
  const siteRoot = join(ROOT, 'apps', siteId, 'src/app')
  const pages = listPages(siteId)
  const siteGaps = []
  let siteArticleCount = 0

  for (const file of pages) {
    const route = routeOf(siteRoot, file)

    // Skip dynamic routes, admin, and known non-editorial layout pages
    if (route.includes('[') || route === '/admin') continue
    if (NON_EDITORIAL_ROUTE_RE.test(route)) continue

    const src = readFileSync(file, 'utf8')

    // Skip non-article pages and redirect stubs
    if (isRedirectStub(src) || !isArticlePage(src)) continue

    siteArticleCount++
    totalArticlePages++

    const gaps = auditPage(file, route, src)
    if (gaps.length > 0) {
      totalGapPages++
      siteGaps.push({ route, gaps })
      for (const g of gaps) {
        if (g.code in gapCodeCounts) gapCodeCounts[g.code]++
      }
    }
  }

  siteReports.push({ siteId, siteArticleCount, siteGaps })
}

// ---------------------------------------------------------------------------
// Output report
// ---------------------------------------------------------------------------

console.log('## article-craft.mjs -- Advisory craft-bar audit')
console.log('## WARNING-ONLY: exits 0. Not wired into required CI gate.')
console.log()
console.log(`Scanned ${totalArticlePages} ArticleLayout pages across ${SITES.length} sites.`)
console.log(`Pages with gaps: ${totalGapPages} / ${totalArticlePages}`)
console.log()

// Gap code legend
console.log('Gap codes:')
console.log('  GAP-1  No ArticleByline')
console.log('  GAP-2  ArticleByline missing updatedAt prop')
console.log('  GAP-3  breadcrumbs absent or fewer than 3 items')
console.log('  GAP-4  relatedLinks absent or fewer than 3 items')
console.log('  GAP-5  Health/nutrition/clinical article with no SourceCitation/ArticleSourcesList')
console.log('  GAP-6  Possible fabricated credential in reviewedBy (advisory; trust-guard enforces)')
console.log()

// Per-site summary table
const colW = [14, 8, 8, 8, 8, 8, 8, 8, 12]
function pad(s, w) {
  return String(s).padEnd(w)
}
const header = [
  pad('Site', colW[0]),
  pad('Pages', colW[1]),
  pad('GAP-1', colW[2]),
  pad('GAP-2', colW[3]),
  pad('GAP-3', colW[4]),
  pad('GAP-4', colW[5]),
  pad('GAP-5', colW[6]),
  pad('GAP-6', colW[7]),
  pad('Gap pages', colW[8]),
].join(' | ')

const divider = header.replace(/[^|]/g, '-').replace(/\|/g, '+')

console.log(header)
console.log(divider)

for (const { siteId, siteArticleCount, siteGaps } of siteReports) {
  const counts = { 'GAP-1': 0, 'GAP-2': 0, 'GAP-3': 0, 'GAP-4': 0, 'GAP-5': 0, 'GAP-6': 0 }
  for (const { gaps } of siteGaps) {
    for (const g of gaps) {
      if (g.code in counts) counts[g.code]++
    }
  }
  const gapPageCount = siteGaps.length
  const row = [
    pad(siteId, colW[0]),
    pad(siteArticleCount, colW[1]),
    pad(counts['GAP-1'] || '-', colW[2]),
    pad(counts['GAP-2'] || '-', colW[3]),
    pad(counts['GAP-3'] || '-', colW[4]),
    pad(counts['GAP-4'] || '-', colW[5]),
    pad(counts['GAP-5'] || '-', colW[6]),
    pad(counts['GAP-6'] || '-', colW[7]),
    pad(gapPageCount > 0 ? `${gapPageCount}/${siteArticleCount}` : 'clean', colW[8]),
  ].join(' | ')
  console.log(row)
}

console.log(divider)
const totalCounts = Object.values(gapCodeCounts)
const totalRow = [
  pad('TOTAL', colW[0]),
  pad(totalArticlePages, colW[1]),
  pad(gapCodeCounts['GAP-1'] || '-', colW[2]),
  pad(gapCodeCounts['GAP-2'] || '-', colW[3]),
  pad(gapCodeCounts['GAP-3'] || '-', colW[4]),
  pad(gapCodeCounts['GAP-4'] || '-', colW[5]),
  pad(gapCodeCounts['GAP-5'] || '-', colW[6]),
  pad(gapCodeCounts['GAP-6'] || '-', colW[7]),
  pad(`${totalGapPages}/${totalArticlePages}`, colW[8]),
].join(' | ')
console.log(totalRow)
console.log()

// Per-site detail
for (const { siteId, siteGaps } of siteReports) {
  if (siteGaps.length === 0) {
    console.log(`## ${siteId}: clean`)
    continue
  }
  console.log(`## ${siteId}: ${siteGaps.length} page(s) with gaps`)
  for (const { route, gaps } of siteGaps) {
    console.log(`  ${route}`)
    for (const g of gaps) {
      console.log(`    [${g.code}] ${g.msg}`)
    }
  }
  console.log()
}

// Portfolio totals by gap type
if (totalGapPages > 0) {
  console.log('## Portfolio totals by gap type:')
  for (const [code, count] of Object.entries(gapCodeCounts)) {
    if (count > 0) {
      console.log(`  ${code}: ${count} page(s)`)
    }
  }
  console.log()
}

console.log('ADVISORY: no action required to clear CI. Fix gaps before flagging a site launch-ready.')
console.log('Spec: ops/handoffs/2026-06-05-visual-coo-editorial-system-spec.md s3 + s6')

// Advisory only -- always exit 0
process.exit(0)
