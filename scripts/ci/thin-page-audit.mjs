#!/usr/bin/env node
/**
 * Thin-page audit (polish-mode item #6 per ops/bot-queue/COO.md after Carlo's
 * 2026-06-01 launch-quality-polish pivot).
 *
 * Scans every page.tsx across all production sites and flags pages whose
 * effective body is short enough to be either thin-content or shell-only.
 *
 * Heuristic per page:
 *   - body_words: words remaining after stripping imports, classNames, style
 *     blocks, hex/tailwind tokens
 *   - h2_count, h3_count: section-header counts
 *   - has_layout_component: whether the page composes a layout component
 *     that supplies content from data files (ArticleLayout, HubGrid, etc.)
 *
 * A page is "thin" if all of:
 *   - body_words < WORDS
 *   - h2_count < H2
 *   - file_size_bytes < BYTES
 *   - not a dynamic [slug] page (those render template content from data)
 *
 * Also reports duplicate <title>/<h1> groups within each site (normalized,
 * site-suffix stripped) — a canonicalization-risk signal for SEO/GEO.
 *
 * Outputs a markdown report on stdout. Not a CI gate — polish-pass informant.
 * Always exits 0 (advisory only).
 *
 * Usage:
 *   node scripts/ci/thin-page-audit.mjs            # all sites
 *   node scripts/ci/thin-page-audit.mjs <site>     # one site
 *   node scripts/ci/thin-page-audit.mjs --json     # machine-readable output
 *                                                  # { thin, duplicateTitles }
 */

import fs from 'node:fs'
import path from 'node:path'

const ALL_SITES = [
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

const args = process.argv.slice(2)
const wantJson = args.includes('--json')
const siteArg = args.find((a) => !a.startsWith('--'))
const SITES = siteArg ? [siteArg] : ALL_SITES

const THRESH_WORDS = 250
const THRESH_H2 = 2
const THRESH_BYTES = 4000

function walk(dir, ext, out = []) {
  let entries
  try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return out }
  for (const e of entries) {
    if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, ext, out)
    else if (e.name === ext) out.push(p)
  }
  return out
}

function analyzePage(filePath) {
  const src = fs.readFileSync(filePath, 'utf8')
  const bytes = Buffer.byteLength(src)

  let body = src
    .replace(/import[^\n]+\n/g, '')
    .replace(/className=['"`][^'"`]+['"`]/g, '')
    .replace(/style=\{[^}]+\}/g, '')
    .replace(/#[0-9a-fA-F]{3,8}/g, '')
    .replace(/[a-zA-Z-]+-\d+/g, '')

  const words = body.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w) && w.length > 1).length
  const h2 = (src.match(/<h2[\s>]/g) || []).length
  const h3 = (src.match(/<h3[\s>]/g) || []).length

  const layoutComponents = [
    'ArticleLayout',
    'HubGrid',
    'ReviewLayout',
    'BreedLayout',
    'TableOfContents',
  ]
  const hasLayoutComponent = layoutComponents.some((c) => src.includes(`<${c}`))

  // Detect data-driven hub pages (map/iterate over imported data)
  const isDataDriven = /\.map\(/.test(src) && /from\s+['"`]\.\.\/\.\.\/data\//.test(src)

  return { bytes, words, h2, h3, hasLayoutComponent, isDataDriven }
}

function routeFromPath(appDir, file) {
  let rel = file.slice(appDir.length).replace(/\/page\.tsx$/, '') || '/'
  rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
  return rel || '/'
}

// Extract the page's primary title for duplicate detection: prefer the
// metadata `title:` (the canonical <title>), fall back to the first literal
// <h1>. Returns null if none found.
function extractTitle(src) {
  const meta = src.match(/\btitle\s*:\s*(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/)
  if (meta) return meta[2].replace(/\\(['"\\])/g, '$1')
  const h1 = src.match(/<h1[^>]*>([^<]+)<\/h1>/)
  if (h1) return h1[1].trim()
  return null
}

// Normalize a title for comparison: drop the site-name suffix after the first
// pipe, lowercase, strip punctuation, collapse whitespace. Two pages sharing a
// normalized title are a duplicate-title group (canonicalization risk).
function normTitle(t) {
  return t
    .split('|')[0]
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const findings = []
const dupGroups = [] // { site, title, routes[] }
for (const site of SITES) {
  const appDir = `apps/${site}/src/app`
  if (!fs.existsSync(appDir)) continue
  const pages = walk(appDir, 'page.tsx')
  const titleMap = new Map() // normalized title -> [routes]
  for (const file of pages) {
    const route = routeFromPath(appDir, file)
    if (/\[/.test(route)) continue // dynamic routes render template content
    if (route === '/') continue // homepages are bespoke; skip
    const src = fs.readFileSync(file, 'utf8')

    // Duplicate-title accumulation (per site).
    const title = extractTitle(src)
    if (title) {
      const key = normTitle(title)
      if (key) {
        if (!titleMap.has(key)) titleMap.set(key, [])
        titleMap.get(key).push(route)
      }
    }

    const a = analyzePage(file)
    if (a.words < THRESH_WORDS && a.h2 < THRESH_H2 && a.bytes < THRESH_BYTES) {
      findings.push({
        site,
        route,
        file: file.replace(/^apps\//, ''),
        words: a.words,
        h2: a.h2,
        h3: a.h3,
        bytes: a.bytes,
        hasLayoutComponent: a.hasLayoutComponent,
        isDataDriven: a.isDataDriven,
      })
    }
  }
  for (const [key, routes] of titleMap) {
    if (routes.length > 1) dupGroups.push({ site, title: key, routes })
  }
}

findings.sort((a, b) => a.site.localeCompare(b.site) || a.words - b.words)

if (wantJson) {
  console.log(JSON.stringify({ thin: findings, duplicateTitles: dupGroups }, null, 2))
  process.exit(0)
}

const bySite = new Map()
for (const f of findings) {
  if (!bySite.has(f.site)) bySite.set(f.site, [])
  bySite.get(f.site).push(f)
}

const out = []
out.push('# Thin-page audit')
out.push('')
out.push(`Sites scanned: **${SITES.length}** (${SITES.join(', ')})`)
out.push(`Thresholds: words < ${THRESH_WORDS}, h2 < ${THRESH_H2}, file < ${THRESH_BYTES} bytes.`)
out.push('Dynamic routes (`[slug]`) excluded — they render template content from data files.')
out.push("Homepages (`/`) excluded — they're bespoke layouts.")
out.push('')
out.push(`Total flagged: **${findings.length}**`)
out.push('')

if (findings.length === 0) {
  out.push('## All scanned sites passed the thin-page threshold.')
} else {
  for (const [site, items] of bySite) {
    out.push(`## ${site} (${items.length})`)
    out.push('')
    out.push('| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |')
    out.push('|---|---|---|---|---|---|---|')
    for (const f of items) {
      const layout = f.hasLayoutComponent ? '✅' : '—'
      const data = f.isDataDriven ? '✅' : '—'
      out.push(`| \`${f.route}\` | ${f.words} | ${f.h2} | ${f.h3} | ${f.bytes} | ${layout} | ${data} |`)
    }
    out.push('')
  }
  out.push('## How to interpret')
  out.push('')
  out.push('- **Has layout? ✅** — page composes a layout component (ArticleLayout, HubGrid, etc.) that may render substantial DOM not captured by the word counter. Manually verify visual depth before declaring thin.')
  out.push('- **Data-driven? ✅** — page iterates over imported data. The displayed content is much richer than the source bytes suggest. Verify the data file has entries.')
  out.push('- **No layout, no data, low words** — genuinely thin. Either beef-up content, consolidate with a sibling, or archive.')
  out.push('- **Hub/index pages** (e.g. `/tools`, `/guides`, `/reviews`) legitimately score low on prose — their value is the spoke links they expose, not body copy. Not a defect if breadcrumbs + schema + child links are present.')
}

out.push('')
out.push('## Duplicate titles (within-site)')
out.push('')
if (dupGroups.length === 0) {
  out.push('None — every page has a distinct normalized `<title>`/`<h1>` per site.')
} else {
  out.push(`Found **${dupGroups.length}** duplicate-title group(s). Same normalized title on multiple routes risks canonicalization confusion.`)
  out.push('')
  out.push('| Site | Normalized title | Routes |')
  out.push('|---|---|---|')
  for (const g of dupGroups) {
    out.push(`| ${g.site} | "${g.title}" | ${g.routes.join(', ')} |`)
  }
}

console.log(out.join('\n'))
