#!/usr/bin/env node
/**
 * Required CI check: internal or generated shop voice must not
 * appear in customer-facing copy on the five earning sites
 * (dog-com, fish-com, horses-com, vets-co, ferret-com).
 *
 * The phrases are the ones removed in Rounds 204–205: inventory
 * asides ("already live on", "does not hop", "(those live on …)"),
 * hop numbers (#1168), TL;DR labels, and slug-shaped shop labels
 * ("Deductibles-reimbursement kit", "Shop the visit-cadence kit").
 * Real kit names (first-aid kit, day-one kit) stay allowed.
 *
 * Comments, (funnels), and components/visual are not customer copy.
 * Exit 0 if clean, 1 if any forbidden phrase appears.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

export const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

export const RULES = [
  { id: 'already-live', pattern: /already lives? on/i, reason: 'Internal inventory aside ("already live on")' },
  { id: 'does-not-hop', pattern: /does not hop/i, reason: 'Internal hop aside ("does not hop")' },
  { id: 'lives-on', pattern: /\((?:that|those) lives? on/i, reason: 'Internal page-slug aside ("(those live on …)")' },
  { id: 'hop-number', pattern: /#1\d{3}(?!\d)/, reason: 'Internal hop number (#1168)' },
  { id: 'tldr', pattern: /TL;DR/i, reason: 'Generated label (TL;DR)' },
  { id: 'not-published', pattern: /Not published on this page/i, reason: 'Internal publishing aside' },
  { id: 'this-comparison', pattern: /this comparison is/i, reason: 'Generated comparison aside' },
  { id: 'link-above', pattern: /the link above/i, reason: 'Generated link aside' },
  { id: 'match-copy', pattern: /that match the\s+.{0,220}?copy/i, reason: 'Generated "match the … copy" shop voice' },
  { id: 'on-page-copy', pattern: /on-page\s+.{0,80}?copy/i, reason: 'Generated "on-page copy" shop voice' },
  { id: 'hands-on-testing', pattern: /hands-on testing/i, reason: 'Internal testing aside' },
  { id: 'slug-kit', pattern: />\s*[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\s+kit\s*</, reason: 'Slug used as a shop label ("deductibles-reimbursement kit")' },
  { id: 'shop-slug-kit', pattern: />\s*Shop the\s+[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\s+kit\s*</i, reason: 'Shop label built from a page slug' },
]

export function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:"'`])\/\/[^\n]*/gm, '$1')
}

export function scanSource(src) {
  const visible = stripComments(src)
  const flat = visible.replace(/\s+/g, ' ')
  const hits = []
  for (const rule of RULES) {
    const hay = rule.id === 'slug-kit' || rule.id === 'shop-slug-kit' ? visible : flat
    if (rule.pattern.test(hay)) {
      const match = hay.match(rule.pattern)
      hits.push({
        id: rule.id,
        reason: rule.reason,
        snippet: (match ? match[0] : '').replace(/\s+/g, ' ').slice(0, 140),
      })
    }
  }
  return hits
}

/** Known-bad samples must fail. Known-good samples must pass. */
export function selfCheck() {
  const bad = [
    'Those treats already live on the other guide.',
    'The scale already lives on dog.com.',
    'This page does not hop medications.',
    'It is not a legal pad (that lives on how-to-afford-vet-care).',
    'They are not fly boots (those live on fly-control).',
    'They are not a #1170 divider hop.',
    'TL;DR. Figo is listed first.',
    'Not published on this page.',
    'This comparison is a planning table.',
    'Use the link above.',
    'notes that match the forage copy on this page',
    'searches match the on-page deductible copy',
    'This page does not claim hands-on testing.',
    '<h2 id="kit">Deductibles-reimbursement kit</h2>',
    '<div>Shop the visit-cadence kit</div>',
  ]
  const good = [
    'Pack a pet first-aid kit for the clinic ride.',
    'Then shop the day-one kit.',
    'The written emergency plan that lives on the tack-room wall.',
    'A <strong>H</strong>urt score for pain.',
    'Shop these supplies',
    '<h2 id="kit">Supplies named on this page</h2>',
  ]
  const errors = []
  for (const sample of bad) {
    if (scanSource(sample).length === 0) errors.push(`missed bad sample: ${sample}`)
  }
  for (const sample of good) {
    const hits = scanSource(sample)
    if (hits.length) errors.push(`flagged good sample (${hits.map((h) => h.id).join(', ')}): ${sample}`)
  }
  return errors
}

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.turbo', '(funnels)', 'visual'].includes(e.name)) continue
      walk(p, out)
    } else if (/\.tsx$/.test(e.name)) {
      out.push(p)
    }
  }
  return out
}

function main() {
  const fixtureErrors = selfCheck()
  if (fixtureErrors.length) {
    console.error('FAIL: internal-voice self-check')
    for (const err of fixtureErrors) console.error(`  ${err}`)
    process.exit(1)
  }

  const root = process.cwd()
  const files = []
  for (const site of SITES) walk(join(root, 'apps', site, 'src'), files)

  const hits = []
  const bySite = Object.fromEntries(SITES.map((site) => [site, 0]))
  for (const file of files) {
    const rel = file.replace(root + '/', '')
    const found = scanSource(readFileSync(file, 'utf8'))
    const site = SITES.find((s) => rel.startsWith(`apps/${s}/`))
    if (found.length && site) bySite[site] += found.length
    for (const hit of found) hits.push({ file: rel, ...hit })
  }

  if (hits.length) {
    console.log(`## Internal voice: ${hits.length} hit${hits.length === 1 ? '' : 's'}\n`)
    for (const h of hits) {
      console.log(`${h.file}`)
      console.log(`  reason: ${h.reason}`)
      console.log(`  line:   ${h.snippet}`)
      console.log()
    }
    console.error(`FAIL: ${hits.length} internal-voice phrase(s).`)
    process.exit(1)
  }

  console.log('## Internal voice: clean')
  console.log(`\nPASS: scanned ${files.length} customer-facing TSX files on the five earning sites; 0 hits.`)
  console.log('Per site:', JSON.stringify(bySite))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
