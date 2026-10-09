/**
 * Every real health page on the three launch sites shows a last-reviewed
 * date equal to that file's latest commit UTC date, plus a sources block
 * with at least one linked citation.
 *
 * Skips the Vets.co /health/[slug] notFound stub.
 */
import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const APPS = ['vets-co', 'horses-com', 'ferret-com']
const DATE_RE = /<LastReviewed date="(\d{4}-\d{2}-\d{2})" \/>/
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

export function checkHealthPage(file, text, gitDate) {
  if (isHealthStub(file, text)) return []
  const errors = []
  const dated = text.match(DATE_RE)
  if (!dated) errors.push('missing LastReviewed date')
  else if (dated[1] !== gitDate) errors.push(`LastReviewed ${dated[1]} != commit date ${gitDate}`)
  if (!text.includes('<ArticleSourcesList')) errors.push('missing ArticleSourcesList')
  if (citationUrls(text).length === 0) errors.push('missing a linked citation')
  return errors
}

function selfCheck() {
  const good = `<LastReviewed date="2026-10-09" />
<ArticleSourcesList sources={[{ url: "https://aaep.org/" }]} />`
  const shopOnly = `<LastReviewed date="2026-10-09" />
<ArticleSourcesList sources={[{ url: "https://www.amazon.com/s?k=hay" }]} />
{ name: 'Home', url: 'https://horses.com/' }`
  const ok = checkHealthPage('apps/horses-com/src/app/health/colic/page.tsx', good, '2026-10-09')
  const stale = checkHealthPage('apps/horses-com/src/app/health/colic/page.tsx', good, '2026-10-08')
  const bare = checkHealthPage('apps/vets-co/src/app/health/page.tsx', '<p>Health</p>', '2026-10-09')
  const shop = checkHealthPage('apps/horses-com/src/app/health/colic/page.tsx', shopOnly, '2026-10-09')
  const stub = checkHealthPage(
    'apps/vets-co/src/app/health/[slug]/page.tsx',
    'export default function SlugPage() { notFound() }\n',
    '2026-01-01',
  )
  if (ok.length || stub.length || !stale.length || !bare.length || !shop.length) {
    console.error('health-reviewed self-check failed', { ok, stale, bare, shop, stub })
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

function gitDate(file) {
  return execSync(`git log -1 --format=%cs -- ${JSON.stringify(file)}`, { encoding: 'utf8' }).trim()
}

selfCheck()

const failures = []
for (const app of APPS) {
  for (const file of walk(`apps/${app}/src/app/health`)) {
    const text = readFileSync(file, 'utf8')
    if (isHealthStub(file, text)) continue
    const errors = checkHealthPage(file, text, gitDate(file))
    if (errors.length) failures.push(`${file}: ${errors.join('; ')}`)
  }
}

if (failures.length) {
  console.error(`health-reviewed: ${failures.length} page(s) failed`)
  for (const line of failures) console.error(line)
  process.exit(1)
}

console.log('health-reviewed: every launch-site health page has a commit-dated review line and a linked source')
