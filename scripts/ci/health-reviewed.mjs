/**
 * Launch-site health pages and money pages show "Last updated <date>"
 * where the date is that page's own last content commit, plus a linked
 * source on every health page and on every money page that names one.
 *
 * A content commit is a change to the page or its data file. Stamp lines,
 * source-list edits, comment-only edits, comparison-foot date bumps, and
 * shared layout or footer commits do not count.
 *
 * Skips the Vets.co /health/[slug] notFound stub.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { contentDate, diffHasContent } from './content-date.mjs'

const HEALTH = ['vets-co', 'horses-com', 'ferret-com']
const DATE_RE = /<LastUpdated\b[^>]*\bdate="(\d{4}-\d{2}-\d{2})"[^>]*\/>/
const SOURCE_URL_RE = /url:\s*['"](https:\/\/[^'"]+)['"]/g
const SKIP_HOST = /(^|\.)(schema\.org|vets\.co|horses\.com|ferret\.com|amazon\.[a-z.]+|chewy\.com|unsplash\.com|pexels\.com|google\.com|gstatic\.com)$/i

export function citationUrls(text) {
  const urls = []
  for (const match of text.matchAll(SOURCE_URL_RE)) {
    const url = match[1]
    if (url.includes('/go/')) continue
    let host = ''
    try {
      host = new URL(url).hostname
    } catch {
      continue
    }
    if (SKIP_HOST.test(host)) continue
    urls.push(url)
  }
  return urls
}

export function isHealthStub(file, text) {
  return file.endsWith('health/[slug]/page.tsx') || (text.includes('notFound()') && text.length < 500)
}

export function checkPage(file, text, gitDate, { requireSource }) {
  if (isHealthStub(file, text)) return []
  const errors = []
  const dated = text.match(DATE_RE)
  if (!dated) errors.push('missing LastUpdated date')
  else if (dated[1] !== gitDate) errors.push(`LastUpdated ${dated[1]} != content date ${gitDate}`)
  if (text.includes('Last reviewed')) errors.push('still says Last reviewed')
  if (requireSource) {
    if (!text.includes('<ArticleSourcesList')) errors.push('missing ArticleSourcesList')
    if (citationUrls(text).length === 0) errors.push('missing a linked citation')
  }
  return errors
}

function selfCheck() {
  const good = `<LastUpdated date="2026-10-08" />
<ArticleSourcesList sources={[{ url: "https://aaep.org/" }]} />`
  const darkTone = `<LastUpdated date="2026-10-08" tone="dark" />
<ArticleSourcesList sources={[{ url: "https://aaep.org/" }]} />`
  const shopOnly = `<LastUpdated date="2026-10-08" />
<ArticleSourcesList sources={[{ url: "https://www.amazon.com/s?k=hay" }]} />`
  const ok = checkPage('apps/horses-com/src/app/health/colic/page.tsx', good, '2026-10-08', { requireSource: true })
  const onDark = checkPage('apps/horses-com/src/app/reviews/best-equine-supplements/page.tsx', darkTone, '2026-10-08', { requireSource: true })
  const stale = checkPage('apps/horses-com/src/app/health/colic/page.tsx', good, '2026-10-07', { requireSource: true })
  const bare = checkPage('apps/vets-co/src/app/health/page.tsx', '<p>Health</p>', '2026-10-09', { requireSource: true })
  const shop = checkPage('apps/horses-com/src/app/health/colic/page.tsx', shopOnly, '2026-10-08', { requireSource: true })
  const stub = checkPage(
    'apps/vets-co/src/app/health/[slug]/page.tsx',
    'export default function SlugPage() { notFound() }\n',
    '2026-01-01',
    { requireSource: true },
  )
  const stamp = diffHasContent('+          <LastUpdated date="2026-10-09" />\n')
  const prose = diffHasContent('-          <p>Old copy.</p>\n+          <p>New copy.</p>\n')
  const comment = diffHasContent('-          {/* old shop note */\n+          {/* new shop note */\n')
  if (ok.length || onDark.length || stub.length || stamp || !prose || comment || !stale.length || !bare.length || !shop.length) {
    console.error('health-reviewed self-check failed', { ok, onDark, stale, bare, shop, stub, stamp, prose, comment })
    process.exit(1)
  }
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (name === 'page.tsx') out.push(path)
  }
  return out
}

function moneyFiles() {
  return [
    ...walk('apps/vets-co/src/app/reviews'),
    ...walk('apps/vets-co/src/app/insurance'),
    ...walk('apps/horses-com/src/app/reviews'),
    'apps/horses-com/src/app/ownership/horse-insurance/page.tsx',
    ...walk('apps/ferret-com/src/app/reviews'),
    'apps/ferret-com/src/app/diet/best-ferret-kibble/page.tsx',
  ]
}

selfCheck()

const failures = []
for (const app of HEALTH) {
  for (const file of walk(`apps/${app}/src/app/health`)) {
    const text = readFileSync(file, 'utf8')
    if (isHealthStub(file, text)) continue
    const dated = contentDate(file)
    const errors = checkPage(file, text, dated?.date, { requireSource: true })
    if (errors.length) failures.push(`${file}: ${errors.join('; ')}`)
  }
}
const EXTRA_DATED = ['apps/horses-com/src/app/breeds/[slug]/health/page.tsx']
for (const file of EXTRA_DATED) {
  const text = readFileSync(file, 'utf8')
  const dated = contentDate(file)
  const errors = checkPage(file, text, dated?.date, { requireSource: false })
  if (errors.length) failures.push(`${file}: ${errors.join('; ')}`)
}
for (const file of moneyFiles()) {
  const text = readFileSync(file, 'utf8')
  const dated = contentDate(file)
  const errors = checkPage(file, text, dated?.date, { requireSource: true })
  if (errors.length) failures.push(`${file}: ${errors.join('; ')}`)
}

if (failures.length) {
  console.error(`health-reviewed: ${failures.length} page(s) failed`)
  for (const line of failures) console.error(line)
  process.exit(1)
}

console.log('health-reviewed: launch-site health and money pages show a content date and a linked source')
