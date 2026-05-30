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
const APPS = [
  { id: 'dog-com',   suffixes: [' | Dog.com', ' — Dog.com', ' - Dog.com'] },
  { id: 'fish-com',  suffixes: [' | Fish.com', ' — Fish.com', ' - Fish.com'] },
  { id: 'lizard-com',suffixes: [' | Lizard.com', ' — Lizard.com', ' - Lizard.com'] },
  { id: 'saddle-com',suffixes: [' | Saddle.com', ' — Saddle.com', ' - Saddle.com'] },
  { id: 'vets-co',   suffixes: [' | Vets.co', ' — Vets.co', ' - Vets.co'] },
]

const TITLE_MAX = 70
const DESC_MAX = 160

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
const report = []

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
    totalViolations += issues.length
    report.push(`\n## ${app.id}: ${issues.length} issue${issues.length === 1 ? '' : 's'}`)
    for (const i of issues) {
      report.push(`  [${i.type}] ${i.route}${i.detail ? ' — ' + i.detail : ''}`)
    }
  } else {
    report.push(`## ${app.id}: clean`)
  }
}

console.log(report.join('\n'))

if (totalViolations > 0) {
  console.error(`\nFAIL: ${totalViolations} metadata-policy violation(s).`)
  console.error('Per QC-STANDARDS.md §2: titles ≤ 70 chars, descriptions ≤ 160 chars, no duplicate titles.')
  process.exit(1)
} else {
  console.log('\nPASS: metadata policy clean across all 5 sites.')
  process.exit(0)
}
