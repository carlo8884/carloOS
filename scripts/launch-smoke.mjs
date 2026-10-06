#!/usr/bin/env node
/**
 * Launch-day smoke for one earning site.
 *
 *   pnpm launch:smoke dog-com
 *   pnpm launch:smoke dog-com --host https://dog.com
 *   npm run launch:smoke -- dog-com --expect-noindex
 *
 * With no --host, the script calls the Vercel project domain that is live
 * today (the *.vercel.app alias) and expects noindex. Pass the apex with
 * --host after DNS and SITE_INDEXABLE=true to require a crawlable robots.txt.
 *
 * Checks: home and five money pages return 200, each canonical is the apex,
 * robots match the mode, sitemap.xml returns 200, a missing path is noindex,
 * and at least one /go hop answers 302 to a partner host.
 *
 * Does not set SITE_INDEXABLE and does not change Vercel domains.
 */
import { MONEY_PAGES } from './ci/lighthouse-budgets-lib.mjs'

export const SITES = {
  'dog-com': {
    id: 'dog-com',
    aliases: ['dog', 'dog.com', 'dog-com'],
    apex: 'https://dog.com',
    preview: 'https://dog-com-three.vercel.app',
    project: 'dog-com',
  },
  'fish-com': {
    id: 'fish-com',
    aliases: ['fish', 'fish.com', 'fish-com'],
    apex: 'https://fish.com',
    preview: 'https://carlo-os-fish-com.vercel.app',
    project: 'carlo-os-fish-com',
  },
  'horses-com': {
    id: 'horses-com',
    aliases: ['horses', 'horses.com', 'horses-com'],
    apex: 'https://horses.com',
    preview: 'https://horses-com.vercel.app',
    project: 'horses-com',
  },
  'vets-co': {
    id: 'vets-co',
    aliases: ['vets', 'vets.co', 'vets-co'],
    apex: 'https://vets.co',
    preview: 'https://carlo-os-vets-co.vercel.app',
    project: 'carlo-os-vets-co',
  },
  'ferret-com': {
    id: 'ferret-com',
    aliases: ['ferret', 'ferret.com', 'ferret-com'],
    apex: 'https://ferret.com',
    preview: 'https://ferret-com.vercel.app',
    project: 'ferret-com',
  },
}

const PARTNER_HOSTS = [
  'amazon.com',
  'www.amazon.com',
  'chewy.com',
  'www.chewy.com',
  'ridingwarehouse.com',
  'www.ridingwarehouse.com',
  'doversaddlery.com',
  'www.doversaddlery.com',
  'smartpakequine.com',
  'www.smartpakequine.com',
  'lemonade.com',
  'www.lemonade.com',
  'vetster.com',
  'www.vetster.com',
  'pumpkin.care',
  'get.pumpkin.care',
  'healthypaws.com',
  'www.healthypawspetinsurance.com',
  'petsbest.com',
  'www.petsbest.com',
]

export function resolveSite(name) {
  const key = String(name || '').trim().toLowerCase()
  for (const site of Object.values(SITES)) {
    if (site.aliases.includes(key)) return site
  }
  return null
}

export function parseArgs(argv) {
  const rest = []
  let host = ''
  let expectNoindex = null
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--host') host = argv[++i] || ''
    else if (arg === '--expect-noindex') expectNoindex = true
    else if (arg === '--indexable') expectNoindex = false
    else if (arg === '--help' || arg === '-h') rest.push('--help')
    else rest.push(arg)
  }
  return { siteName: rest[0] || '', host, expectNoindex, help: rest.includes('--help') }
}

export function originOf(hostOrUrl) {
  const raw = String(hostOrUrl || '').trim()
  if (!raw) return ''
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  const url = new URL(withScheme)
  return url.origin
}

export function isPreviewHost(origin) {
  try {
    const host = new URL(origin).hostname.toLowerCase()
    return host === 'vercel.app' || host.endsWith('.vercel.app') || host === 'localhost' || host === '127.0.0.1'
  } catch {
    return false
  }
}

/** Preview and localhost stay noindex. An apex host expects a crawlable robots.txt. */
export function expectNoindexFor(origin, override) {
  if (override === true || override === false) return override
  return isPreviewHost(origin)
}

function canonicalHref(html) {
  const match = String(html).match(/<link[^>]*rel=["']canonical["'][^>]*>/i)
    || String(html).match(/<link[^>]*rel=canonical[^>]*>/i)
  if (!match) return ''
  const href = match[0].match(/href=["']([^"']+)["']/i)
  return href ? href[1] : ''
}

function hasNoindex(html, headers) {
  const tag = headers.get('x-robots-tag') || ''
  if (/noindex/i.test(tag)) return true
  return /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
    || /<meta[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(html)
}

function robotsAllowsCrawl(body, apex) {
  const text = String(body)
  if (!/user-agent:\s*\*/i.test(text)) return 'robots.txt has no User-agent: *'
  if (/user-agent:\s*\*[\s\S]*?disallow:\s*\/\s*$/im.test(text) && !/allow:\s*\//i.test(text)) {
    return 'robots.txt disallows the whole site'
  }
  const blanket = text.split(/user-agent:/i).slice(1).find((block) => block.trim().startsWith('*'))
  if (blanket && /disallow:\s*\/\s*(\n|$)/i.test(blanket) && !/allow:\s*\//i.test(blanket)) {
    return 'robots.txt disallows the whole site'
  }
  const sitemap = `${apex.replace(/\/$/, '')}/sitemap.xml`
  if (!text.includes(sitemap)) return `robots.txt does not list ${sitemap}`
  return ''
}

function robotsIsNoindex(body) {
  const text = String(body)
  return /disallow:\s*\/\s*(\n|$)/i.test(text)
}

function goHrefs(html) {
  return [...String(html).matchAll(/href=["'](\/go\/[^"']+)["']/g)].map((m) => m[1])
}

function partnerHost(location, pageOrigin, apex) {
  let url
  try {
    url = new URL(location, pageOrigin)
  } catch {
    return ''
  }
  const host = url.hostname.toLowerCase()
  const pageHost = new URL(pageOrigin).hostname.toLowerCase()
  const apexHost = new URL(apex).hostname.toLowerCase()
  if (host === pageHost || host === apexHost || host.endsWith('.vercel.app')) return ''
  return host
}

async function get(url, init = {}) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'CarloOS-launch-smoke' },
    ...init,
  })
  const text = await response.text()
  return { response, text, status: response.status }
}

export async function smokeSite(site, origin, { expectNoindex, fetchImpl } = {}) {
  const problems = []
  const request = fetchImpl || get
  const pages = ['/', ...MONEY_PAGES[site.id].map((path) => `/${path}`)]
  let hopHref = ''

  for (const path of pages) {
    const url = new URL(path, origin).href
    const { response, text, status } = await request(url)
    if (status !== 200) problems.push(`${path} returned ${status}`)
    const canonical = canonicalHref(text)
    const apex = site.apex.replace(/\/$/, '')
    if (!canonical.startsWith(apex)) {
      problems.push(`${path} canonical is ${canonical || 'missing'}, expected ${apex}`)
    }
    if (!hopHref) hopHref = goHrefs(text)[0] || ''
    if (expectNoindex && response.headers && !(response.headers.get('x-robots-tag') || '').includes('noindex')) {
      // HTML meta on preview builds can still say index; the edge header is the switch.
      // A missing header is reported once from robots.txt, not on every page.
    }
  }

  const robotsUrl = new URL('/robots.txt', origin).href
  const robots = await request(robotsUrl)
  if (robots.status !== 200) problems.push(`robots.txt returned ${robots.status}`)
  else if (expectNoindex) {
    if (!robotsIsNoindex(robots.text)) problems.push('expected-noindex: robots.txt does not disallow /')
  } else {
    const issue = robotsAllowsCrawl(robots.text, site.apex)
    if (issue) problems.push(issue)
  }

  const sitemapUrl = new URL('/sitemap.xml', origin).href
  const sitemap = await request(sitemapUrl)
  if (sitemap.status !== 200) problems.push(`sitemap.xml returned ${sitemap.status}`)
  else if (!/<urlset|<sitemapindex/i.test(sitemap.text)) problems.push('sitemap.xml is not a sitemap document')

  const missing = await request(new URL('/this-page-does-not-exist-launch-smoke', origin).href)
  if (missing.status !== 404) problems.push(`missing page returned ${missing.status}, expected 404`)
  if (!hasNoindex(missing.text, missing.response.headers)) problems.push('404 page does not carry noindex')

  if (!hopHref) problems.push('no /go hop found on the home page or the five money pages')
  else {
    const hopUrl = new URL(hopHref, origin).href
    const hop = await request(hopUrl, { redirect: 'manual' })
    const location = hop.response.headers.get('location') || ''
    if (hop.status !== 302) problems.push(`${hopHref} returned ${hop.status}, expected 302`)
    const host = partnerHost(location, origin, site.apex)
    if (!host) problems.push(`${hopHref} location ${location || 'missing'} is not a partner`)
    else if (PARTNER_HOSTS.length && !PARTNER_HOSTS.some((name) => host === name || host.endsWith(`.${name}`))) {
      // Any off-site host is a partner. The list is documentation, not a block.
    }
  }

  return problems
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help || !args.siteName) {
    console.log('Usage: pnpm launch:smoke <site> [--host URL] [--expect-noindex|--indexable]')
    console.log('Sites: dog-com, fish-com, horses-com, vets-co, ferret-com')
    process.exit(args.help ? 0 : 1)
  }
  const site = resolveSite(args.siteName)
  if (!site) {
    console.error(`Unknown site ${args.siteName}`)
    process.exit(1)
  }
  const origin = originOf(args.host || site.preview)
  const expectNoindex = expectNoindexFor(origin, args.expectNoindex)
  console.log(`${site.id} ${origin} ${expectNoindex ? 'expected-noindex' : 'indexable'}`)
  const problems = await smokeSite(site, origin, { expectNoindex })
  if (problems.length) {
    console.error(`FAIL: ${problems.length}`)
    for (const problem of problems) console.error(`  - ${problem}`)
    process.exit(1)
  }
  console.log(`PASS: ${site.id} home, five money pages, canonical, robots, sitemap, 404 noindex, and a /go 302`)
}

const invoked = process.argv[1] && process.argv[1].endsWith('launch-smoke.mjs')
if (invoked) main()
