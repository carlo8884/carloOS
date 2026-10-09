/**
 * Launch-site health pages and money pages show "Last updated <date>"
 * where the date is that page's own last content commit, plus a linked
 * source on every health page and on every money page that names one.
 *
 * On a money page, a source URL has to be a page the sentences cite.
 * A bare homepage is allowed only when those sentences name that
 * organization. A label that is itself a URL is not a label.
 *
 * A content commit is a change to the page or its data file. Stamp lines,
 * source-list edits, comment-only edits, comparison-foot date bumps, and
 * shared layout or footer commits do not count.
 *
 * Skips the Vets.co /health/[slug] notFound stub.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
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

const SOURCE_OBJ_RE = /\{\s*label:\s*(['"])((?:(?!\1).)*)\1\s*,\s*url:\s*(['"])(https:\/\/[^'"]+)\3(?:\s*,\s*publisher:\s*(['"])((?:(?!\5).)*)\5)?\s*,?\s*\}/gs

/** Short names that mean the organization, not a product page. */
const ORG_ALIASES = [
  ['american association of equine practitioners', ['aaep']],
  ['aaep', ['american association of equine practitioners']],
  ['american ferret association', ['afa']],
  ['afa', ['american ferret association']],
  ['association of exotic mammal veterinarians', ['aemv']],
  ['aemv', ['association of exotic mammal veterinarians']],
  ['kentucky equine research', ['ker']],
  ['ker', ['kentucky equine research']],
  ['canadian veterinary journal', ['cvma', 'canadian veterinary medical association']],
  ['cvma', ['canadian veterinary journal', 'canadian veterinary medical association']],
  ['fda center for veterinary medicine', ['fda', 'food and drug administration']],
  ['fda', ['fda center for veterinary medicine', 'food and drug administration']],
  ['national association of insurance commissioners', ['naic']],
  ['naic', ['national association of insurance commissioners']],
  ['marshall pet products', ['marshall']],
]

export function isBareHomepage(url) {
  try {
    return new URL(url).pathname.replace(/\/+$/, '') === ''
  } catch {
    return false
  }
}

export function isRawLabel(value) {
  return /^https?:\/\//i.test(value || '') || /^www\./i.test(value || '')
}

export function visibleProse(text) {
  const faq = text.search(/\bconst FAQS\b/)
  const fn = text.search(/export default function\b/)
  const start = faq >= 0 && fn >= 0 ? Math.min(faq, fn) : Math.max(faq, fn)
  let slice = start >= 0 ? text.slice(start) : text
  slice = slice.replace(/<ArticleSourcesList\b[\s\S]*?(?:<\/ArticleSourcesList>|\/\s*>)/g, ' ')
  return slice
}

function phraseIn(prose, phrase) {
  if (!phrase || phrase.length < 2) return false
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<![\\w])${escaped}(?![\\w])`, 'i').test(prose)
}

export function citesOrganization(prose, label, publisher) {
  const names = []
  for (const raw of [publisher, label]) {
    if (!raw || isRawLabel(raw)) continue
    names.push(raw)
  }
  const expanded = new Set(names)
  for (const name of names) {
    const key = name.toLowerCase()
    for (const [from, aliases] of ORG_ALIASES) {
      if (key === from) for (const alias of aliases) expanded.add(alias)
    }
  }
  return [...expanded].some((phrase) => phraseIn(prose, phrase))
}

export function sourceObjects(text) {
  SOURCE_OBJ_RE.lastIndex = 0
  return [...text.matchAll(SOURCE_OBJ_RE)].map((match) => ({
    label: match[2],
    url: match[4],
    publisher: match[6] || '',
    index: match.index,
    raw: match[0],
  }))
}

export function primaryUrls(prose) {
  const found = []
  for (const match of prose.matchAll(/https:\/\/[^\s'"<>)]+/g)) {
    let url = match[0].replace(/[.,;]+$/, '')
    if (url.includes('${') || url.includes('/go/')) continue
    let host = ''
    try {
      host = new URL(url).hostname
    } catch {
      continue
    }
    if (SKIP_HOST.test(host)) continue
    if (!found.includes(url)) found.push(url)
  }
  return found
}

function sameUrl(a, b) {
  return a.replace(/\/+$/, '') === b.replace(/\/+$/, '')
}

/**
 * Money-page sources. A bare homepage is allowed only when the visible
 * sentences name that organization. A label that is itself a URL is not
 * a label. A page that cites no outside page is not given one.
 */
export function moneySourceErrors(text) {
  const errors = []
  const prose = visibleProse(text)
  const sources = sourceObjects(text)
  for (const source of sources) {
    if (isRawLabel(source.label) || isRawLabel(source.publisher)) {
      errors.push(`raw source label ${source.label}`)
    }
    const named = citesOrganization(prose, source.label, source.publisher)
    const linked = primaryUrls(prose).some((url) => sameUrl(url, source.url))
    if (isBareHomepage(source.url) && !named) {
      errors.push(`homepage ${source.url} is not cited`)
    } else if (!isBareHomepage(source.url) && !named && !linked) {
      errors.push(`source ${source.url} is not cited`)
    }
  }
  for (const url of primaryUrls(prose)) {
    if (!sources.some((source) => sameUrl(source.url, url))) {
      errors.push(`copy cites ${url} but the source list does not`)
    }
  }
  return errors
}

export function checkPage(file, text, gitDate, { requireSource, homepageRule }) {
  if (isHealthStub(file, text)) return []
  const errors = []
  const dated = text.match(DATE_RE)
  if (!dated) errors.push('missing LastUpdated date')
  else if (dated[1] !== gitDate) errors.push(`LastUpdated ${dated[1]} != content date ${gitDate}`)
  if (text.includes('Last reviewed')) errors.push('still says Last reviewed')
  if (homepageRule) {
    errors.push(...moneySourceErrors(text))
  } else if (requireSource) {
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
  const sourceOnly = diffHasContent(
    '+          <ArticleSourcesList title="Sources"\n+            { label: "Cosequin ASU Plus", url: "https://www.cosequin.com/product/horses/cosequin-asu-plus", publisher: "Cosequin" },\n',
  )
  const citedHome = `export default function Page() {
  return <p>The AAEP describes blanketing.</p>
  <LastUpdated date="2026-10-08" />
  <ArticleSourcesList sources={[{ label: "AAEP", url: "https://aaep.org/", publisher: "AAEP" }]} />
}`
  const uncitedHome = `export default function Page() {
  return <p>Blankets come in three weights.</p>
  <LastUpdated date="2026-10-08" />
  <ArticleSourcesList sources={[{ label: "AAEP", url: "https://aaep.org/", publisher: "AAEP" }]} />
}`
  const rawLabel = `export default function Page() {
  return <p>See https://www.cosequin.com/product/horses/cosequin-asu-plus.</p>
  <LastUpdated date="2026-10-08" />
  <ArticleSourcesList sources={[{ label: "www.cosequin.com/product/horses/cosequin-asu-plus", url: "https://www.cosequin.com/product/horses/cosequin-asu-plus", publisher: "Cosequin" }]} />
}`
  const citedOk = checkPage('apps/horses-com/src/app/reviews/blankets/page.tsx', citedHome, '2026-10-08', { homepageRule: true })
  const homeFail = checkPage('apps/horses-com/src/app/reviews/blankets/page.tsx', uncitedHome, '2026-10-08', { homepageRule: true })
  const rawFail = checkPage('apps/horses-com/src/app/reviews/blankets/page.tsx', rawLabel, '2026-10-08', { homepageRule: true })
  if (
    ok.length ||
    onDark.length ||
    stub.length ||
    stamp ||
    sourceOnly ||
    !prose ||
    comment ||
    !stale.length ||
    !bare.length ||
    !shop.length ||
    citedOk.length ||
    !homeFail.length ||
    !rawFail.length
  ) {
    console.error('health-reviewed self-check failed', {
      ok,
      onDark,
      stale,
      bare,
      shop,
      stub,
      stamp,
      sourceOnly,
      prose,
      comment,
      citedOk,
      homeFail,
      rawFail,
    })
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

function run() {
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
    const errors = checkPage(file, text, dated?.date, { requireSource: true, homepageRule: true })
    if (errors.length) failures.push(`${file}: ${errors.join('; ')}`)
  }

  if (failures.length) {
    console.error(`health-reviewed: ${failures.length} page(s) failed`)
    for (const line of failures) console.error(line)
    process.exit(1)
  }

  console.log('health-reviewed: launch-site health and money pages show a content date and a linked source')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  selfCheck()
  run()
}
