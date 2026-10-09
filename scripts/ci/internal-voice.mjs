#!/usr/bin/env node
/**
 * Required CI check: internal or generated shop voice must not
 * appear in customer-facing copy on the five earning sites
 * (dog-com, fish-com, horses-com, vets-co, ferret-com).
 *
 * The phrases are the ones removed in Rounds 204–207: inventory
 * asides ("already live on", "does not hop", "(those live on …)"),
 * hop numbers (#1168), TL;DR labels, slug-shaped shop labels
 * ("Deductibles-reimbursement kit", "Shop the visit-cadence kit"),
 * "not a … hop" / "not a reason to hop" asides, and any other
 * customer-facing "hop" or "hops" that means an affiliate link
 * ("The hop below", "never hops", "not shoppable hops").
 * Real kit names stay allowed. Real-word uses stay on the allowlist:
 * three-legged hop, war-dance hop, treat hopper, and a horse that
 * "will not bear weight on a limb, hops,".
 *
 * Comments, imports, code identifiers, (funnels), and components/visual
 * are not customer copy.
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
  { id: 'not-a-hop', pattern: /not (?:an?|the)\s+(?:(?!\bnot\b)[^.;]){0,200}?\bhop\b/i, reason: 'Internal "not a … hop" aside' },
  { id: 'reason-to-hop', pattern: /not a reason to hop/i, reason: 'Internal "not a reason to hop" aside' },
  { id: 'customer-hop', pattern: /\bhops?\b/i, reason: 'Customer-facing "hop" or "hops" outside the real-word allowlist' },
]

export function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:"'`])\/\/[^\n]*/gm, '$1')
}

/** Apostrophe entities hide the semicolon from clause scanners. */
export function decodeEntities(src) {
  return src.replace(/&(?:apos|rsquo|lsquo|#39);/g, "'")
}

/** Real words and gait, not affiliate links. */
export const HOP_ALLOWLIST = [
  /\bthree-legged hops?\b/gi,
  /\bwar-dance hops?\b/gi,
  /\btreat hoppers?\b/gi,
  /will not bear weight on a limb, hops,/gi,
]

/** Visible copy with code identifiers and the real-word allowlist removed. */
export function customerHopHay(src) {
  let s = decodeEntities(stripComments(src))
  s = s.replace(/^\s*import\b[^\n]*/gm, ' ')
  s = s.replace(/[?&]hop=/g, ' ')
  s = s.replace(/\baffiliate-hop\b/g, ' ')
  s = s.replace(/\bdata-[\w-]*hop\w*/gi, ' ')
  s = s.replace(/\bHop[A-Z]\w*/g, ' ')
  s = s.replace(/\b(?:pick|next|shop|primary|resource)Hop\b/g, ' ')
  s = s.replace(/\bhop\s*\??\s*:/g, ' ')
  s = s.replace(/\bhop\s*=\s*\{/g, ' ')
  s = s.replace(/\{\s*hop\s*\}/g, ' ')
  s = s.replace(/\bhop\b(?=\s*[,})])/g, ' ')
  for (const re of HOP_ALLOWLIST) {
    re.lastIndex = 0
    s = s.replace(re, ' ')
  }
  return s.replace(/\s+/g, ' ')
}

export function scanSource(src) {
  const visible = stripComments(src)
  const flat = decodeEntities(visible).replace(/\s+/g, ' ')
  const hits = []
  for (const rule of RULES) {
    const hay = rule.id === 'customer-hop'
      ? customerHopHay(src)
      : rule.id === 'slug-kit' || rule.id === 'shop-slug-kit'
        ? visible
        : flat
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
    'A preset heater is sized for a nano — it is not an Eheim Jager hop.',
    'Mapping a flinch is an observation, not a reason to hop a grooming glove.',
    'It is not a Hill&apos;s w/d or Royal Canin Diabetic hop.',
    'The hop below is the same wire crate already on this page.',
    'Same dental-chew hop used on the dental review.',
    'This page never hops medications.',
    'Clinic prescriptions are not shoppable hops.',
  ]
  const good = [
    'Pack a pet first-aid kit for the clinic ride.',
    'Then shop the day-one kit.',
    'The written emergency plan that lives on the tack-room wall.',
    'A <strong>H</strong>urt score for pain.',
    'Shop these supplies',
    '<h2 id="kit">Supplies named on this page</h2>',
    'The button below opens the same wire crate search on Amazon.',
    'The same dental-chew button is on the dental review.',
    'An apple wedger is how carrots go in as sticks — it is not a treat hopper.',
    'Skipping or three-legged hop',
    'A sideways war-dance hop that signals play.',
    'A horse that will not bear weight on a limb, hops, or is suspected of a fracture is an emergency.',
    'hop?: ReactNode',
    '{hop}',
    'import { x } from "./affiliate-hop"',
    'data-primary-hop="1"',
    'https://example.com/?hop=PLACEHOLDER',
    '{/* The hop below stays in a comment */}\n<p>Pack a first-aid kit.</p>',
    'Baking soda is a grocery bicarbonate.',
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
    } else if (/\.tsx?$/.test(e.name)) {
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
    // Other rules stay on TSX. TS data and route modules are scanned for
    // customer-facing hop/hops only, so a blurb in a .ts file cannot hide.
    let found = scanSource(readFileSync(file, 'utf8'))
    if (file.endsWith('.ts')) found = found.filter((hit) => hit.id === 'customer-hop')
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
  console.log(`\nPASS: scanned ${files.length} customer-facing TS/TSX files on the five earning sites; 0 hits.`)
  console.log('Per site:', JSON.stringify(bySite))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
