#!/usr/bin/env node
/**
 * Money-page /go hops on the five earning sites must name their source page,
 * and the click recorder must send site, source, and partner. Amazon route
 * templates keep a tag slot so a resolved hop is not an untagged search.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '(funnels)' || entry.name === 'go') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (/\.(tsx|ts)$/.test(entry.name)) out.push(path)
  }
  return out
}

function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:\\])\/\/.*$/gm, '$1')
}

/** The quoted hop that starts at `/go/vendor`, including `${...}` expressions. */
function quotedHop(src, start) {
  let quote = ''
  for (let j = start - 1; j >= Math.max(0, start - 2); j--) {
    const char = src[j]
    if (char === '`' || char === '"' || char === "'") {
      quote = char
      break
    }
  }
  if (!quote) return src.slice(start, start + 160)
  let depth = 0
  for (let i = start; i < src.length; i++) {
    if (src[i] === '$' && src[i + 1] === '{') {
      depth++
      i++
      continue
    }
    if (depth > 0) {
      if (src[i] === '{') depth++
      else if (src[i] === '}') depth--
      continue
    }
    if (src[i] === quote) return src.slice(start, i)
  }
  return src.slice(start, start + 160)
}

function sourceOk(href) {
  return /[?&]s=(?:\$\{[^}]+\}|[^\s&'"`]{1,})/.test(href)
}

const hits = []

for (const site of SITES) {
  const appDir = join(ROOT, 'apps', site, 'src', 'app')
  for (const file of walk(appDir)) {
    const src = stripComments(readFileSync(file, 'utf8'))
    const re = /\/go\/[a-z0-9-]+/g
    let match
    while ((match = re.exec(src))) {
      const href = quotedHop(src, match.index)
      if (!sourceOk(href)) {
        hits.push(`${file.replace(ROOT + '/', '')}: hop missing ?s= source (${href.slice(0, 140)})`)
      }
    }
  }

  const routes = readFileSync(join(ROOT, 'apps', site, 'src/data/affiliate-routes.ts'), 'utf8')
  const amazonBlocks = routes.match(/amazon[^:]*:\s*\{[\s\S]*?template:\s*'[^']+'/g) || []
  if (amazonBlocks.length === 0) hits.push(`${site}: no Amazon route template`)
  for (const block of amazonBlocks) {
    if (!/tag=/.test(block)) hits.push(`${site}: Amazon template has no tag slot`)
  }

  const layout = readFileSync(join(appDir, 'layout.tsx'), 'utf8')
  if (!layout.includes(`<AffiliateClickListener site="${site}" />`)) {
    hits.push(`${site}: layout is missing AffiliateClickListener`)
  }
  if (!layout.includes('<HopEarnsProvider')) {
    hits.push(`${site}: layout is missing HopEarnsProvider`)
  }
  if (!/HopEarnsProvider amazon=\{Boolean\(process\.env\.AFF_AMAZON_TAG/.test(layout)) {
    hits.push(`${site}: layout must pass the server Amazon tag into HopEarnsProvider`)
  }
}

const listener = readFileSync(join(ROOT, 'packages/ui/src/components/AffiliateClickListener.tsx'), 'utf8')
if (!/trackEvent\(\s*'affiliate_click'/.test(listener)) hits.push('AffiliateClickListener does not fire affiliate_click')
if (!/trackEvent\(\s*'hop_click'/.test(listener)) hits.push('AffiliateClickListener does not fire hop_click')
if (!/card_id:\s*click\.slot/.test(listener)) hits.push('hop_click is missing card_id')
for (const field of ['site:', 'page:', 'source:', 'partner:', 'vendor:', 'product:', 'placement:', 'slot:', 'destination_type:', 'destination:']) {
  if (!listener.includes(field)) hits.push(`AffiliateClickListener event is missing ${field}`)
}
if (!listener.includes('search-recovery')) hits.push('AffiliateClickListener does not slot empty-search suggestions')
if (!listener.includes('now - lastAt < 1200')) hits.push('AffiliateClickListener does not collapse a double click')

const clickLib = readFileSync(join(ROOT, 'packages/ui/src/lib/affiliate-click.ts'), 'utf8')
if (!/vendor:\s*partner/.test(clickLib)) hits.push('affiliate click payload does not send vendor')
if (!/'ep\.vendor':\s*fields\.partner/.test(clickLib)) hits.push('email /go collect does not send ep.vendor')
if (!/'ep\.slot':\s*'email landing'/.test(clickLib)) hits.push('email /go collect does not send ep.slot')
if (!/ep\.card_id',\s*'email landing'/.test(clickLib)) hits.push('email /go hop_click does not send ep.card_id')
if (!/'ep\.destination_type':/.test(clickLib)) hits.push('email /go collect does not send ep.destination_type')
if (!/'ep\.destination':/.test(clickLib)) hits.push('email /go collect does not send ep.destination')

const resolver = readFileSync(join(ROOT, 'packages/config/affiliate-hop.ts'), 'utf8')
if (!/split\('PLACEHOLDER'\)\.join\(tag\)/.test(resolver)) {
  hits.push('Amazon redirect no longer substitutes the Associates tag')
}

for (const file of ['packages/ui/src/components/ShopCtas.tsx', 'packages/ui/src/components/PrimaryHop.tsx', 'packages/ui/src/components/ReviewCard.tsx']) {
  const src = readFileSync(join(ROOT, file), 'utf8')
  const note = src.indexOf('data-affiliate-disclosure="hop"')
  const button = note < 0 ? -1 : src.indexOf('data-shop-placement=', note)
  if (note < 0 || button < 0) {
    hits.push(`${file}: Associates line must be marked and sit above the shop button`)
  }
}

const shopCtas = readFileSync(join(ROOT, 'packages/ui/src/components/ShopCtas.tsx'), 'utf8')
if (!shopCtas.includes('useAmazonEarns()')) {
  hits.push('ShopCtas must take the Associates line from the server earns flag')
}
if (!/amazonFromServer !== null/.test(shopCtas)) {
  hits.push('ShopCtas must prefer the server earns flag over a browser env read')
}

const goHandler = readFileSync(join(ROOT, 'packages/ui/src/server/affiliate-hop.ts'), 'utf8')
if (!/event:\s*'affiliate_click'/.test(goHandler)) hits.push('/go handler does not log affiliate_click')
if (!/emailLandingHopClickUrl/.test(goHandler)) hits.push('/go handler does not send hop_click for a direct email hit')
for (const field of ['site:', 'source', 'vendor']) {
  if (!goHandler.includes(field)) hits.push(`/go handler log is missing ${field}`)
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} money-page hop(s) missing attribution`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: money-page hops carry a source, affiliate_click records site, page, and vendor, and Amazon redirects substitute the Associates tag.')
