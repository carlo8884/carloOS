#!/usr/bin/env node
/**
 * Audit Unsplash photo IDs across the CarloOS portfolio.
 *
 * Outputs:
 *   1. Markdown table grouped by site, listing each Unsplash photo ID
 *      with surrounding context (alt text, comment hints, variable name).
 *   2. A flat list of all unique IDs (for diffing against
 *      ops/data/verified-photo-ids.md).
 *
 * Why this exists:
 *   - Visual Bot's sandbox cannot reach the Unsplash API per Carlo policy.
 *   - All hand-curated manifest entries draw from the verified-in-production
 *     pool of IDs already rendering in apps/*. This script keeps the catalog
 *     in `ops/data/verified-photo-ids.md` honest by surfacing any newly
 *     introduced Unsplash URLs that haven't been documented yet.
 *
 * Usage:
 *   node scripts/audit-photo-ids.mjs                  # summary table
 *   node scripts/audit-photo-ids.mjs --check          # exit 1 if drift
 *   node scripts/audit-photo-ids.mjs --json           # machine-readable
 *
 * Lane: Visual Bot (scripts that audit visual primitives + image manifest).
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')
const APPS = join(ROOT, 'apps')
const CATALOG = join(ROOT, 'ops/data/verified-photo-ids.md')

const URL_RE = /images\.unsplash\.com\/photo-([a-zA-Z0-9_-]+)/g
const ALT_RE = /(?:imageAlt|alt)\s*[:=]\s*['"`]([^'"`]+)['"`]/

const args = new Set(process.argv.slice(2))
const checkMode = args.has('--check')
const jsonMode = args.has('--json')

function walk(dir, results) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.next') continue
    const full = join(dir, e.name)
    if (e.isDirectory()) walk(full, results)
    else if (/\.(tsx|ts|jsx|js|mdx)$/.test(e.name)) results.push(full)
  }
}

function siteFromPath(p) {
  const rel = relative(APPS, p)
  return rel.split('/')[0]
}

function findContext(lines, lineIdx) {
  // Search ±3 lines for an alt-text hint or the closest single-line comment.
  for (let i = Math.max(0, lineIdx - 3); i <= Math.min(lines.length - 1, lineIdx + 3); i++) {
    const m = lines[i].match(ALT_RE)
    if (m) return { kind: 'alt', text: m[1] }
  }
  for (let i = lineIdx; i >= Math.max(0, lineIdx - 3); i--) {
    const trimmed = lines[i].trim()
    if (trimmed.startsWith('//') && trimmed.length > 4) {
      return { kind: 'comment', text: trimmed.replace(/^\/\/\s*/, '').slice(0, 120) }
    }
  }
  return { kind: 'none', text: '' }
}

const files = []
walk(APPS, files)

const findings = new Map() // id → { id, sites: Set, contexts: [{site, file, line, alt|comment}] }
for (const file of files) {
  const src = readFileSync(file, 'utf8')
  if (!src.includes('images.unsplash.com')) continue
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    URL_RE.lastIndex = 0
    let m
    while ((m = URL_RE.exec(lines[i])) !== null) {
      const id = m[1]
      const site = siteFromPath(file)
      const ctx = findContext(lines, i)
      if (!findings.has(id)) findings.set(id, { id, sites: new Set(), contexts: [] })
      const entry = findings.get(id)
      entry.sites.add(site)
      entry.contexts.push({
        site,
        file: relative(ROOT, file),
        line: i + 1,
        ...ctx,
      })
    }
  }
}

const bySite = new Map()
for (const entry of findings.values()) {
  for (const site of entry.sites) {
    if (!bySite.has(site)) bySite.set(site, [])
    bySite.get(site).push(entry)
  }
}

if (jsonMode) {
  const out = {
    totalIds: findings.size,
    byId: Object.fromEntries(
      [...findings.entries()].map(([id, v]) => [
        id,
        { sites: [...v.sites], contexts: v.contexts },
      ]),
    ),
  }
  console.log(JSON.stringify(out, null, 2))
  process.exit(0)
}

let drift = 0
if (checkMode) {
  // Compare against catalog.
  let catalogIds = new Set()
  try {
    const md = readFileSync(CATALOG, 'utf8')
    const m = md.match(/`(\d{13,}-[a-z0-9]+)`/g) || []
    catalogIds = new Set(m.map((s) => s.replace(/`/g, '')))
  } catch {
    console.error(`Could not read catalog at ${CATALOG}`)
  }
  const live = new Set(findings.keys())
  const undocumented = [...live].filter((id) => !catalogIds.has(id))
  const stale = [...catalogIds].filter((id) => !live.has(id))
  if (undocumented.length || stale.length) {
    console.log('## Catalog drift detected\n')
    if (undocumented.length) {
      console.log('### Undocumented IDs (in code, not in catalog):')
      undocumented.forEach((id) => console.log(`  - ${id}`))
      console.log()
    }
    if (stale.length) {
      console.log('### Stale catalog IDs (in catalog, not in code):')
      stale.forEach((id) => console.log(`  - ${id}`))
      console.log()
    }
    console.log('Update ops/data/verified-photo-ids.md to match production.')
    drift = 1
  } else {
    console.log(`Catalog clean — ${live.size} IDs documented, no drift.`)
  }
  process.exit(drift)
}

// Summary mode: print markdown table grouped by site.
console.log(`# Unsplash photo ID audit — ${new Date().toISOString().slice(0, 10)}\n`)
console.log(`**Total unique IDs:** ${findings.size} across ${bySite.size} sites.\n`)
const siteOrder = [...bySite.keys()].sort()
for (const site of siteOrder) {
  const entries = bySite.get(site).sort((a, b) => a.id.localeCompare(b.id))
  console.log(`## ${site} (${entries.length} IDs)\n`)
  console.log('| ID | Best context hint | Locations |')
  console.log('|----|-------------------|-----------|')
  for (const e of entries) {
    const siteCtxs = e.contexts.filter((c) => c.site === site)
    const hint = siteCtxs.find((c) => c.kind === 'alt')?.text
      ?? siteCtxs.find((c) => c.kind === 'comment')?.text
      ?? '(no context)'
    const locs = [...new Set(siteCtxs.map((c) => c.file))].join('<br>')
    console.log(`| \`${e.id}\` | ${hint.slice(0, 80)} | ${locs} |`)
  }
  console.log()
}
