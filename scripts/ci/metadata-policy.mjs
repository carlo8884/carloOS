#!/usr/bin/env node
/**
 * CI check: metadata length + uniqueness policy.
 *
 * Per QC-STANDARDS.md §2:
 *   - Every indexable page has a unique non-empty <title> ≤ 70 chars (hard
 *     limit; 60 is the soft target).
 *   - Every indexable page has a unique non-empty meta description
 *     ≤ 160 chars.
 *   - No duplicate titles within a single site.
 *
 * Scans buildMetadata({...}) calls in app page.tsx files. Skips:
 *   - [slug] catch-all routes (metadata generated at runtime)
 *   - /admin (intentionally disallowed in robots.ts)
 *
 * Exit code: 0 if clean, 1 if any violation.
 *
 * Graduated from /tmp/title-check.js per STATUS.md §6.8.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
// All 10 production sites are scanned for cross-site duplicate-title detection
// (polish-mode queue #7 — Carlo's 2026-06-01 launch-quality-polish pivot).
// `enforce` controls whether per-site length/missing/dup-title violations FAIL
// the build: original Tier-1/promotion-path 5 sites stay strict; the 5 newer
// sites are advisory until each clears its polish pass and a per-site
// metadata sweep lands.
const APPS = [
  { id: 'dog-com',     enforce: true,  suffixes: [' | Dog.com',     ' — Dog.com',     ' - Dog.com']     },
  { id: 'fish-com',    enforce: true,  suffixes: [' | Fish.com',    ' — Fish.com',    ' - Fish.com']    },
  { id: 'lizard-com',  enforce: true,  suffixes: [' | Lizard.com',  ' — Lizard.com',  ' - Lizard.com']  },
  { id: 'saddle-com',  enforce: true,  suffixes: [' | Saddle.com',  ' — Saddle.com',  ' - Saddle.com']  },
  { id: 'vets-co',     enforce: true,  suffixes: [' | Vets.co',     ' — Vets.co',     ' - Vets.co']     },
  { id: 'horses-com',  enforce: false, suffixes: [' | Horses.com',  ' — Horses.com',  ' - Horses.com']  },
  { id: 'petfood-com', enforce: true,  suffixes: [' | PetFood.com', ' — PetFood.com', ' - PetFood.com'] },
  { id: 'petfoods-com',enforce: false, suffixes: [' | PetFoods.com',' — PetFoods.com',' - PetFoods.com']},
  { id: 'ferret-com',  enforce: true,  suffixes: [' | Ferret.com',  ' — Ferret.com',  ' - Ferret.com']  },
  { id: 'ferrets-com', enforce: false, suffixes: [' | Ferrets.com', ' — Ferrets.com', ' - Ferrets.com'] },
]

const TITLE_MAX = 70
const DESC_MAX = 160

/**
 * Strip any of the per-site suffixes from a title so we can compare "base"
 * titles across sites. Returns the title unchanged if no known suffix matches.
 */
function stripSiteSuffix(title) {
  for (const app of APPS) {
    for (const sfx of app.suffixes) {
      if (title.endsWith(sfx)) return title.slice(0, -sfx.length).trim()
    }
  }
  return title
}

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

function routeOf(siteRoot, file) {
  const rel = file.slice(siteRoot.length).replace(/\/page\.[tj]sx?$/, '')
  return rel === '' ? '/' : rel
}

function extractStringField(body, field) {
  for (const q of ["'", '"', '`']) {
    const re = new RegExp(`${field}\\s*:\\s*${q}((?:\\\\.|(?!${q}).)*)${q}`)
    const m = body.match(re)
    if (m) return m[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`')
  }
  return null
}

function extractMetadata(src) {
  const m = src.match(/buildMetadata\s*\(\s*\{([\s\S]*?)\}\s*\)/)
  if (!m) return { title: null, description: null }
  const body = m[1]
  return {
    title: extractStringField(body, 'title'),
    description: extractStringField(body, 'description'),
  }
}

let totalViolations = 0
let totalWarnings = 0
const report = []
// site:route → fullTitle, keyed by the base title (after stripping known suffix)
const crossSiteBaseTitles = new Map()

for (const app of APPS) {
  const siteRoot = join(ROOT, 'apps', app.id, 'src/app')
  const pages = listPages(app.id)
  const issues = []
  const titleToRoutes = new Map()

  for (const file of pages) {
    const route = routeOf(siteRoot, file)

    // Skip catch-alls and intentionally-noindex routes
    if (route.includes('[slug]') || route === '/admin') continue

    const src = readFileSync(file, 'utf8')
    let { title, description } = extractMetadata(src)

    // Client components ('use client') can't export metadata. Next.js falls
    // back to the nearest layout.tsx — so check there if the page itself
    // has no metadata.
    if (title === null) {
      const layoutPath = file.replace(/\/page\.[tj]sx?$/, '/layout.tsx')
      try {
        const layoutSrc = readFileSync(layoutPath, 'utf8')
        const layoutMeta = extractMetadata(layoutSrc)
        if (layoutMeta.title !== null) {
          title = layoutMeta.title
          description = layoutMeta.description
        }
      } catch {}
    }

    if (title === null) {
      issues.push({ route, type: 'missing-title' })
      continue
    }

    if (!titleToRoutes.has(title)) titleToRoutes.set(title, [])
    titleToRoutes.get(title).push(route)

    // Track cross-site base titles for the post-loop check.
    const base = stripSiteSuffix(title)
    if (!crossSiteBaseTitles.has(base)) crossSiteBaseTitles.set(base, [])
    crossSiteBaseTitles.get(base).push({ site: app.id, route, fullTitle: title })

    if (title.length > TITLE_MAX) {
      issues.push({ route, type: 'title-too-long', detail: `${title.length} chars` })
    }

    if (!description) {
      issues.push({ route, type: 'missing-description' })
    } else if (description.length > DESC_MAX) {
      issues.push({ route, type: 'description-too-long', detail: `${description.length} chars` })
    }
  }

  for (const [title, routes] of titleToRoutes) {
    if (routes.length > 1) {
      issues.push({ route: routes.join(', '), type: 'duplicate-title', detail: JSON.stringify(title) })
    }
  }

  if (issues.length > 0) {
    if (app.enforce) totalViolations += issues.length
    else totalWarnings += issues.length
    const tag = app.enforce ? '' : ' (advisory, not enforced)'
    report.push(`\n## ${app.id}: ${issues.length} issue${issues.length === 1 ? '' : 's'}${tag}`)
    for (const i of issues) {
      report.push(`  [${i.type}] ${i.route}${i.detail ? ' — ' + i.detail : ''}`)
    }
  } else {
    report.push(`## ${app.id}: clean`)
  }
}

// Cross-site near-duplicate title detection (polish-mode queue item #7,
// Carlo's 2026-06-01 launch-quality-polish pivot). Two sites carrying the
// same base title is usually unintentional duplication (templated content
// or a copy-paste). Cross-portfolio bridges that intentionally share a
// title belong in `EXPECTED_CROSS_SITE_TITLE_DUPES` below.
//
// This check is currently informational — it warns but does not fail. Once
// the polish wave clears the false positives, promote to a hard fail.
const EXPECTED_CROSS_SITE_TITLE_DUPES = new Set([
  // Legal + editorial standards pages intentionally use the same base title
  // on every site — each is a per-site copy of the same FTC/policy content
  // (Bolton Properties, LLC as the canonical entity across the portfolio).
  'Privacy Policy',
  'Terms of Use',
  'Affiliate Disclosure',
  'Affiliate Disclosure Policy',
  'Editorial Standards',
  'Editorial Standards — How We Create Content',
])
const crossSiteIssues = []
for (const [base, occurrences] of crossSiteBaseTitles) {
  if (occurrences.length < 2) continue
  const sites = new Set(occurrences.map((o) => o.site))
  if (sites.size < 2) continue
  if (EXPECTED_CROSS_SITE_TITLE_DUPES.has(base)) continue
  crossSiteIssues.push({ base, occurrences })
}
if (crossSiteIssues.length > 0) {
  report.push('')
  report.push(`## Cross-site near-duplicate base titles (informational): ${crossSiteIssues.length}`)
  report.push('Two sites sharing the same base title (after stripping the per-site suffix) is usually unintentional. If intentional, add the base title to `EXPECTED_CROSS_SITE_TITLE_DUPES` in `scripts/ci/metadata-policy.mjs`.')
  for (const issue of crossSiteIssues) {
    report.push(`  [cross-site-dup-title] "${issue.base}"`)
    for (const o of issue.occurrences) {
      report.push(`    - ${o.site}${o.route} → "${o.fullTitle}"`)
    }
  }
}

console.log(report.join('\n'))

const advisoryCounts =
  (totalWarnings ? `${totalWarnings} advisory-site issue(s)` : '') +
  (totalWarnings && crossSiteIssues.length ? ' + ' : '') +
  (crossSiteIssues.length ? `${crossSiteIssues.length} cross-site dup warning(s)` : '')

if (totalViolations > 0) {
  console.error(`\nFAIL: ${totalViolations} metadata-policy violation(s) in enforced sites.`)
  if (advisoryCounts) console.error(`(plus ${advisoryCounts} — informational, non-blocking)`)
  console.error('Per QC-STANDARDS.md §2: titles ≤ 70 chars, descriptions ≤ 160 chars, no duplicate titles.')
  process.exit(1)
} else {
  const enforcedCount = APPS.filter((a) => a.enforce).length
  if (advisoryCounts) {
    console.log(`\nPASS: metadata policy clean across ${enforcedCount} enforced sites (${advisoryCounts} — informational).`)
  } else {
    console.log(`\nPASS: metadata policy clean across all ${APPS.length} sites.`)
  }
  process.exit(0)
}
