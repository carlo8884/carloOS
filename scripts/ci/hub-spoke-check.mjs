#!/usr/bin/env node
/**
 * CI check: hub→spoke reciprocity.
 *
 * For every hub page that renders an ItemList schema with static spoke URLs,
 * this gate verifies two properties:
 *
 *   1. FORWARD: every spoke URL the hub links to resolves to a real route
 *      (catches slugs the hub lists but no page.tsx exists for — these are
 *      404 links that waste crawl budget and break AI retrieval chains).
 *
 *   2. RECIPROCAL: every spoke has a back-link to its hub (in breadcrumbs,
 *      relatedLinks, or any static href). Specifically, the breadcrumb
 *      intermediate at position N-2 should be the hub path, not a sibling
 *      leaf — the exact class of defect audited in lizard-com (spokes in
 *      /health/* had breadcrumbs pointing at /health/sick-reptile-signs
 *      instead of /health, making the breadcrumb chain incorrect for AI
 *      and crawlers).
 *
 * ─── Hub identification ──────────────────────────────────────────────────────
 * A page is treated as a hub if its source contains:
 *   '@type': 'ItemList'  or  "@type": "ItemList"
 * AND it is a static non-dynamic page (no [param] in path).
 *
 * ─── Spoke URL extraction ────────────────────────────────────────────────────
 * Static spoke paths are extracted from href attributes/properties in the hub
 * file that begin with the hub's own path prefix (e.g. hub /training/ →
 * spokes /training/basic-commands). Template-literal hrefs (containing ${})
 * are excluded — those spokes are validated by other gates (link-check,
 * sitemap-drift).
 *
 * ─── Conservative design ─────────────────────────────────────────────────────
 * This gate runs in REPORT-ONLY mode (exit 0). The reciprocity check (2) in
 * particular can produce false positives for hubs whose spokes intentionally
 * back-link to a different intermediate page. Review the report on main before
 * flipping ENFORCE to true.
 *
 * Exit code: 0 (always — report-only mode)
 *
 * Per STATUS.md: graduated from draft per PR #claude/ci-linking-schema-gates.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

// ─── ENFORCE flag ─────────────────────────────────────────────────────────
// false = report findings but exit 0 (safe for PRs during initial rollout)
// true  = exit 1 on any finding (flip after first clean-reviewed run on main)
const ENFORCE = false

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

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

/**
 * Build the set of static routable paths for a site.
 * Keys are URL paths (e.g. '/training/basic-commands').
 * Values are absolute file paths to the page.tsx.
 */
function buildRouteMap(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  if (!exists(appDir)) return new Map()

  const routeMap = new Map()
  const pageFiles = listFiles(appDir, ['page.tsx', 'page.ts', 'page.jsx', 'page.js'])

  for (const f of pageFiles) {
    let rel = f.slice(appDir.length).replace(/\/page\.[tj]sx?$/, '')
    if (rel === '') rel = '/'
    // Strip route groups
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '') || '/'
    if (rel === '') rel = '/'
    // Skip dynamic segments — not statically checkable
    if (/\[.+\]/.test(rel)) continue
    routeMap.set(rel, f)
  }

  return routeMap
}

// ─── Href extraction ─────────────────────────────────────────────────────────

const JSX_HREF_RE = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{`([^`${}]+)`\}|\{"([^"]+)"\}|\{'([^']+)'\})/g
const OBJ_HREF_RE = /href\s*:\s*['"`]([^'"`]+)['"`]/g

function extractStaticInternalHrefs(src) {
  const hrefs = []
  for (const re of [JSX_HREF_RE, OBJ_HREF_RE]) {
    let m
    while ((m = re.exec(src)) !== null) {
      const v = m[1] || m[2] || m[3] || m[4] || m[5]
      if (!v || !v.startsWith('/') || v.startsWith('//')) continue
      if (v.includes('${')) continue // skip template literals
      const path = v.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
      hrefs.push(path)
    }
  }
  return hrefs
}

// ─── Hub detection ────────────────────────────────────────────────────────────

/**
 * Returns true if the page source defines an ItemList schema inline.
 * Conservative: requires the literal string to appear in source.
 */
function isHubPage(src) {
  return (
    /'@type'\s*:\s*'ItemList'/.test(src) ||
    /"@type"\s*:\s*"ItemList"/.test(src)
  )
}

// ─── Breadcrumb analysis ──────────────────────────────────────────────────────

/**
 * Extract breadcrumb hrefs from a spoke's source.
 * Matches the typical pattern:
 *   breadcrumbs={[{ name: '...', href: '/...' }, ...]}
 *   breadcrumbs={[{ name: '...' }, { name: '...', href: '/...' }, ...]}
 *
 * Returns array of hrefs in order, filtering undefineds.
 */
function extractBreadcrumbHrefs(src) {
  // Find all breadcrumbs={[...]} blocks
  const results = []
  // Match the breadcrumbs prop assignment — captures everything between [ and ]
  // Handles both single-line and multi-line breadcrumbs
  const CRUMB_BLOCK_RE = /breadcrumbs\s*=\s*\{\s*\[([\s\S]*?)\]\s*\}/g
  let blockMatch
  while ((blockMatch = CRUMB_BLOCK_RE.exec(src)) !== null) {
    const block = blockMatch[1]
    // Extract href values from crumb objects in order
    const CRUMB_HREF_RE = /\{[^}]*href\s*:\s*['"`](\/[^'"`]*)['"`][^}]*\}/g
    let crumbMatch
    const hrefs = []
    while ((crumbMatch = CRUMB_HREF_RE.exec(block)) !== null) {
      hrefs.push(crumbMatch[1].split('?')[0].split('#')[0].replace(/\/$/, '') || '/')
    }
    if (hrefs.length > 0) results.push(hrefs)
  }
  return results
}

/**
 * Check if a spoke's breadcrumbs have the wrong intermediate crumb.
 *
 * For a spoke at /hub/child, the expected breadcrumb structure is:
 *   [{ href: '/' }, { href: '/hub' }, { href: '/hub/child' }]
 *
 * A wrong intermediate is:
 *   [{ href: '/' }, { href: '/hub/sibling-leaf' }, { href: '/hub/child' }]
 *
 * Returns the wrong intermediate href if detected, null otherwise.
 */
function detectWrongBreadcrumbIntermediate(spokePath, hubPath, src) {
  const crumbGroups = extractBreadcrumbHrefs(src)
  for (const crumbs of crumbGroups) {
    if (crumbs.length < 2) continue
    // The second-to-last crumb should be the hub path (or a parent of hub)
    const intermediate = crumbs[crumbs.length - 2]
    if (!intermediate) continue
    // If intermediate is not the hub path and starts with the same base,
    // it might be a sibling leaf wrongly used as an intermediate
    if (intermediate !== hubPath) {
      // Only flag if the intermediate is a CHILD of the hub (starts with
      // hubPath + '/'), meaning it is a sibling-leaf being misused as the
      // intermediate crumb. Example: hub=/health, wrong intermediate=
      // /health/sick-reptile-signs (a leaf under /health used instead of /health).
      if (intermediate.startsWith(hubPath + '/')) {
        return intermediate
      }
    }
  }
  return null
}

// ─── Main ─────────────────────────────────────────────────────────────────────

let totalFindings = 0
const report = []

for (const site of APPS) {
  const routeMap = buildRouteMap(site)
  const siteFindings = []

  for (const [hubRoute, hubFile] of routeMap) {
    if (hubRoute === '/') continue

    const hubSrc = readFileSync(hubFile, 'utf8')
    if (!isHubPage(hubSrc)) continue
    if (isRedirectStub(hubSrc)) continue

    // Extract spoke paths: static hrefs in the hub that are children of the hub's path
    const spokeHrefs = extractStaticInternalHrefs(hubSrc)
    const hubPrefix = hubRoute === '/' ? '/' : hubRoute + '/'

    const linkedSpokes = new Set()
    for (const href of spokeHrefs) {
      if (!href.startsWith(hubPrefix)) continue
      // Only direct children (depth = hub + 1 segment)
      const remaining = href.slice(hubPrefix.length)
      if (!remaining || remaining.includes('/')) continue // skip deeper nesting
      linkedSpokes.add(href)
    }

    if (linkedSpokes.size === 0) continue

    for (const spokePath of linkedSpokes) {
      // ─── Forward check: spoke route must exist ──────────────────────────
      if (!routeMap.has(spokePath)) {
        siteFindings.push({
          type: 'broken-forward-link',
          hub: hubRoute,
          spoke: spokePath,
          detail: `Hub ${hubRoute} links to ${spokePath} but no page.tsx exists there`,
        })
        continue
      }

      // ─── Reciprocal check ───────────────────────────────────────────────
      const spokeFile = routeMap.get(spokePath)
      const spokeSrc = readFileSync(spokeFile, 'utf8')

      // Check 1: spoke has any back-link to hub
      const spokeHrefs = extractStaticInternalHrefs(spokeSrc)
      const hasBackLink = spokeHrefs.some((h) => h === hubRoute)

      if (!hasBackLink) {
        siteFindings.push({
          type: 'missing-back-link',
          hub: hubRoute,
          spoke: spokePath,
          detail: `Spoke ${spokePath} has no link back to hub ${hubRoute} (check breadcrumbs and relatedLinks)`,
        })
      }

      // Check 2: breadcrumb intermediate should be the hub, not a sibling leaf
      const wrongIntermediate = detectWrongBreadcrumbIntermediate(spokePath, hubRoute, spokeSrc)
      if (wrongIntermediate) {
        siteFindings.push({
          type: 'wrong-breadcrumb-intermediate',
          hub: hubRoute,
          spoke: spokePath,
          detail: `Spoke ${spokePath} breadcrumb intermediate is ${wrongIntermediate} instead of hub ${hubRoute}`,
        })
      }
    }
  }

  if (siteFindings.length > 0) {
    totalFindings += siteFindings.length
    report.push(`\n## ${site}: ${siteFindings.length} hub→spoke finding${siteFindings.length === 1 ? '' : 's'}`)
    for (const f of siteFindings) {
      report.push(`  [${f.type}] ${f.detail}`)
    }
  } else {
    report.push(`## ${site}: clean`)
  }
}

console.log(report.join('\n'))

if (totalFindings > 0) {
  const mode = ENFORCE ? 'FAIL' : 'REPORT'
  console.log(`\n${mode}: ${totalFindings} hub→spoke finding${totalFindings === 1 ? '' : 's'} across all sites.`)
  if (!ENFORCE) {
    console.log('Running in report-only mode (exit 0). Set ENFORCE=true in this script to make it a hard gate.')
    console.log('')
    console.log('Finding types:')
    console.log('  [broken-forward-link]        Hub lists a spoke URL that has no page.tsx — crawl-budget waste, AI 404.')
    console.log('  [missing-back-link]          Spoke has no link back to its hub — breaks topical authority graph.')
    console.log('  [wrong-breadcrumb-intermediate]  Spoke breadcrumb intermediate is a leaf/sibling, not the hub — BreadcrumbList invalid.')
  } else {
    console.error('See CLAUDE.md §6 and QC-STANDARDS.md §2.9 for hub→spoke reciprocity requirements.')
    process.exit(1)
  }
} else {
  console.log(`\nPASS: 0 hub→spoke findings across all ${APPS.length} sites.`)
}
process.exit(0)
