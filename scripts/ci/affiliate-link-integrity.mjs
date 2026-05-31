#!/usr/bin/env node
/**
 * Affiliate-link integrity check.
 *
 * Catches the two affiliate failure classes that have repeatedly shipped/leaked
 * on CarloOS (dir-015 Dog.com 404s; the Ferret PR with chewy-brand 404s + bare
 * untracked manufacturer URLs):
 *
 *   1. A page links `/go/<vendor>/<sku>` to a vendor key NOT registered in that
 *      app's `src/data/affiliate-routes.ts` → the redirect 404s = dead link.
 *   2. A ReviewCard/buy-box CTA links to a bare external `https://<vendor>.com`
 *      instead of through `/go/...` → untracked = no affiliate attribution.
 *
 * Both are silent: they pass `next build` and lint clean. CI/build cannot catch
 * them — only this check can. Runs in CI (per-PR) and on the scheduled IR guard.
 *
 * Exit 1 on any class-1 violation (dead link = hard fail). Class-2 (untracked)
 * is reported as a warning unless STRICT=1.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const APPS_DIR = join(ROOT, 'apps')
const STRICT = process.env.STRICT === '1'

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next') continue
      walk(p, out)
    } else if (/\.(tsx?|jsx?)$/.test(e.name)) out.push(p)
  }
  return out
}

/** Registered vendor keys for an app, parsed from affiliate-routes.ts top-level keys. */
function registeredVendors(appDir) {
  const f = join(appDir, 'src/data/affiliate-routes.ts')
  if (!existsSync(f)) return null // app has no affiliate routes at all
  const src = readFileSync(f, 'utf8')
  const keys = new Set()
  // matches top-level route keys:  amazon: {   OR   'chewy-brand': {
  const re = /^\s{2}'?([a-z0-9-]+)'?\s*:\s*\{/gim
  let m
  while ((m = re.exec(src))) {
    const k = m[1]
    if (k === 'name' || k === 'template') continue
    keys.add(k)
  }
  return keys
}

const deadLinks = []   // class 1 (hard fail)
const untracked = []   // class 2 (warn / strict-fail)

for (const app of readdirSync(APPS_DIR, { withFileTypes: true })) {
  if (!app.isDirectory()) continue
  const appDir = join(APPS_DIR, app.name)
  const appSrc = join(appDir, 'src')
  if (!existsSync(appSrc)) continue
  const vendors = registeredVendors(appDir)

  for (const file of walk(appSrc)) {
    const src = readFileSync(file, 'utf8')
    const rel = file.slice(ROOT.length + 1)

    // class 1 — /go/<vendor>/<sku> with an unregistered vendor key
    for (const m of src.matchAll(/\/go\/([a-z0-9-]+)\//g)) {
      const vendor = m[1]
      if (vendors === null) {
        deadLinks.push(`${rel}: links /go/${vendor}/ but app has NO affiliate-routes.ts`)
      } else if (!vendors.has(vendor)) {
        deadLinks.push(`${rel}: /go/${vendor}/ — vendor "${vendor}" NOT registered (will 404). Registered: ${[...vendors].join(', ')}`)
      }
    }

    // class 2 — a buy-box CTA pointing at a bare external URL (bypasses /go tracking)
    for (const m of src.matchAll(/ctaHref=["'](https?:\/\/[^"']+)["']/g)) {
      untracked.push(`${rel}: ctaHref="${m[1]}" bypasses /go → untracked (no affiliate attribution)`)
    }
  }
}

let failed = false
console.log('## Affiliate-link integrity\n')

if (deadLinks.length) {
  failed = true
  console.log(`### 🔴 DEAD LINKS (unregistered /go vendor → 404): ${deadLinks.length}`)
  for (const d of deadLinks) console.log('  ' + d)
  console.log('')
} else {
  console.log('### ✓ No dead /go links — every vendor key is registered.\n')
}

if (untracked.length) {
  console.log(`### ${STRICT ? '🔴' : '🟡'} UNTRACKED buy-box URLs (bypass /go, no attribution): ${untracked.length}`)
  for (const u of untracked) console.log('  ' + u)
  if (STRICT) failed = true
  console.log('')
} else {
  console.log('### ✓ No bare-URL buy-boxes — all CTAs route through /go.\n')
}

if (failed) {
  console.log('FAIL: affiliate-link integrity violations (dead = revenue lost; untracked = no commission).')
  process.exit(1)
}
console.log('PASS: affiliate links clean.')
