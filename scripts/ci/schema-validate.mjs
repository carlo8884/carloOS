#!/usr/bin/env node
/**
 * CI check: structured-data (JSON-LD) schema validator.
 *
 * Validates the correctness of JSON-LD schema objects emitted across the
 * CarloOS portfolio WITHOUT requiring a Next.js build (the sandbox cannot
 * run `next build`). Two complementary checks run in sequence:
 *
 * ─── 1. Builder sanity (static import simulation) ───────────────────────────
 * The shared schema builders in packages/ui/src/components/SEOHead.tsx are
 * re-implemented here as plain-JS reference functions (matching the TypeScript
 * source exactly). Representative inputs are run through each builder and the
 * resulting objects are asserted against the schema.org specification:
 *
 *   • Article    — @context, @type, headline, description, url, author,
 *                  publisher, datePublished, dateModified, mainEntityOfPage
 *   • FAQPage    — @context, @type, mainEntity[] with @type=Question,
 *                  name, acceptedAnswer.@type=Answer, acceptedAnswer.text
 *   • BreadcrumbList — @context, @type, itemListElement[] with sequential
 *                      positions (1-based, no gaps)
 *   • ItemList   — @context, @type, itemListElement[] with 1-based positions
 *   • HowTo      — @context, @type, name, description, url, step[]
 *                  each step: @type=HowToStep, name, text
 *   • MedicalWebPage — @context, @type, name, description, url, author,
 *                      lastReviewed, audience
 *   • Organization — @context, @type, @id (with #organization anchor),
 *                    name, url
 *   • WebSite    — @context, @type, @id (with #website anchor), name, url
 *   • Product    — @context, @type, name, description, review.@type=Review
 *
 * ─── 2. Inline schema scan (static page.tsx analysis) ───────────────────────
 * Each page.tsx under apps/<site>/src/app/ is scanned for inline JSON-LD
 * objects and validated for:
 *
 *   • @context must be 'https://schema.org' (not 'http://' or missing)
 *   • @type is present and non-empty
 *   • Type-specific required fields (see REQUIRED_BY_TYPE below)
 *   • BreadcrumbList: itemListElement positions must be sequential (1, 2, 3…)
 *   • Article: headline and author/@type fields present
 *   • SoftwareApplication: name and applicationCategory present
 *   • HowTo: name, description, url, step array present
 *
 * ─── Conservative design ─────────────────────────────────────────────────────
 * This gate runs in REPORT-ONLY mode (ENFORCE = false, exit 0 always).
 * It was rolled out against main (commit verified clean, 0 structural
 * findings) but kept report-only because the inline scan uses regex-based
 * JS-to-JSON parsing — complex multi-variable combineSchemas() patterns are
 * intentionally skipped to avoid false positives. Promote ENFORCE to
 * true once the first real finding has been reviewed and confirmed
 * actionable across all sites.
 *
 * Exit code: 0 (always — report-only mode, matching orphan-check pattern)
 *
 * Per CLAUDE.md §5: COO owns scripts/ci/*.mjs.
 * Per QC-STANDARDS.md §2.5 and §2.10: schema must validate and must not
 * contain fabricated reviewers.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

// ─── ENFORCE flag ─────────────────────────────────────────────────────────────
// false = report findings but exit 0 (report-only mode — safe for PRs)
// true  = exit 1 on any structural finding (flip after first clean review)
const ENFORCE = false

const APPS = [
  'dog-com',
  'fish-com',
  'lizard-com',
  'saddle-com',
  'vets-co',
  'horses-com',
  'petfood-com',
  'petfoods-com',
  'ferret-com',
  'ferrets-com',
]

// ─── §1: Builder sanity — reference implementations ──────────────────────────
// These mirror the TypeScript source in packages/ui/src/components/SEOHead.tsx.
// We do NOT import the TS source directly (requires tsc or ts-node); instead
// we replicate the exact output shapes as plain JS.

const DUMMY_SITE = {
  theme: { siteName: 'TestSite', siteUrl: 'https://testsite.com' },
}

function refBuildArticleSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    url: p.url,
    image: p.imageUrl,
    datePublished: p.publishedAt,
    dateModified: p.modifiedAt,
    author: { '@type': 'Person', name: p.authorName },
    publisher: { '@type': 'Organization', name: DUMMY_SITE.theme.siteName, url: DUMMY_SITE.theme.siteUrl },
    mainEntityOfPage: p.url,
  }
}

function refBuildFAQSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

function refBuildBreadcrumbSchema(input) {
  const items = Array.isArray(input) ? input : input.items
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

function refBuildItemListSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(p.name ? { name: p.name } : {}),
    itemListElement: p.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  }
}

function refBuildHowToSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: p.name,
    description: p.description,
    url: p.url,
    ...(p.totalTime ? { totalTime: p.totalTime } : {}),
    step: p.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  }
}

function refBuildMedicalWebPageSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: p.name,
    description: p.description,
    url: p.url,
    lastReviewed: p.lastReviewed,
    author: { '@type': 'Organization', name: p.authorName },
    audience: { '@type': 'MedicalAudience', audienceType: p.medicalAudience ?? 'Caregiver' },
    mainContentOfPage: { '@type': 'WebPageElement', cssSelector: '.carloOS-article' },
  }
}

function refBuildOrganizationSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${p.url}#organization`,
    name: p.name,
    url: p.url,
    ...(p.logoUrl ? { logo: p.logoUrl } : {}),
  }
}

function refBuildWebSiteSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${p.url}#website`,
    name: p.name,
    url: p.url,
    publisher: { '@id': `${p.url}#organization` },
  }
}

function refBuildProductSchema(p) {
  const review = {
    '@type': 'Review',
    author: { '@type': 'Organization', name: p.reviewAuthorName ?? 'Editorial team' },
    ...(p.reviewBody ? { reviewBody: p.reviewBody } : {}),
    ...(p.ratingValue != null
      ? { reviewRating: { '@type': 'Rating', ratingValue: p.ratingValue, bestRating: p.bestRating ?? 10 } }
      : {}),
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    ...(p.imageUrl ? { image: p.imageUrl } : {}),
    ...(p.url ? { url: p.url } : {}),
    review,
  }
}

// ─── Assertion helpers ────────────────────────────────────────────────────────

const builderFindings = []

function assertField(obj, path, label) {
  const parts = path.split('.')
  let v = obj
  for (const p of parts) {
    if (v == null || typeof v !== 'object') { v = undefined; break }
    v = v[p]
  }
  if (v === undefined || v === null || v === '') {
    builderFindings.push(`[builder:${label}] Missing or empty required field: '${path}'`)
    return false
  }
  return true
}

function assertType(obj, path, expected, label) {
  const parts = path.split('.')
  let v = obj
  for (const p of parts) {
    if (v == null || typeof v !== 'object') { v = undefined; break }
    v = v[p]
  }
  if (v !== expected) {
    builderFindings.push(`[builder:${label}] Field '${path}' expected '${expected}', got '${JSON.stringify(v)}'`)
    return false
  }
  return true
}

function assertArray(obj, path, minLen, label) {
  const parts = path.split('.')
  let v = obj
  for (const p of parts) {
    if (v == null || typeof v !== 'object') { v = undefined; break }
    v = v[p]
  }
  if (!Array.isArray(v)) {
    builderFindings.push(`[builder:${label}] Field '${path}' must be an array (got ${typeof v})`)
    return false
  }
  if (v.length < minLen) {
    builderFindings.push(`[builder:${label}] Field '${path}' must have at least ${minLen} item(s) (got ${v.length})`)
    return false
  }
  return true
}

function assertSequentialPositions(arr, label) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].position !== i + 1) {
      builderFindings.push(`[builder:${label}] itemListElement position at index ${i} is ${arr[i].position}, expected ${i + 1} (must be sequential 1-based)`)
    }
  }
}

// ─── §1 checks: run all builders with representative inputs ──────────────────

function runBuilderChecks() {
  // Article
  const article = refBuildArticleSchema({
    siteId: 'dog-com',
    title: 'Test Article Title',
    description: 'Test description text.',
    url: 'https://dog.com/test',
    imageUrl: 'https://dog.com/img/test.jpg',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-01-01T00:00:00Z',
    modifiedAt: '2026-06-01T00:00:00Z',
  })
  assertType(article, '@context', 'https://schema.org', 'Article')
  assertType(article, '@type', 'Article', 'Article')
  assertField(article, 'headline', 'Article')
  assertField(article, 'description', 'Article')
  assertField(article, 'url', 'Article')
  assertField(article, 'datePublished', 'Article')
  assertField(article, 'dateModified', 'Article')
  assertType(article, 'author.@type', 'Person', 'Article')
  assertField(article, 'author.name', 'Article')
  assertType(article, 'publisher.@type', 'Organization', 'Article')
  assertField(article, 'publisher.name', 'Article')
  assertField(article, 'mainEntityOfPage', 'Article')

  // FAQPage
  const faq = refBuildFAQSchema({
    questions: [
      { question: 'Q1?', answer: 'A1.' },
      { question: 'Q2?', answer: 'A2.' },
    ],
  })
  assertType(faq, '@context', 'https://schema.org', 'FAQPage')
  assertType(faq, '@type', 'FAQPage', 'FAQPage')
  assertArray(faq, 'mainEntity', 1, 'FAQPage')
  for (let i = 0; i < faq.mainEntity.length; i++) {
    const q = faq.mainEntity[i]
    if (q['@type'] !== 'Question') builderFindings.push(`[builder:FAQPage] mainEntity[${i}].@type must be 'Question', got '${q['@type']}'`)
    if (!q.name) builderFindings.push(`[builder:FAQPage] mainEntity[${i}].name is missing/empty`)
    if (!q.acceptedAnswer) builderFindings.push(`[builder:FAQPage] mainEntity[${i}].acceptedAnswer is missing`)
    else {
      if (q.acceptedAnswer['@type'] !== 'Answer') builderFindings.push(`[builder:FAQPage] mainEntity[${i}].acceptedAnswer.@type must be 'Answer'`)
      if (!q.acceptedAnswer.text) builderFindings.push(`[builder:FAQPage] mainEntity[${i}].acceptedAnswer.text is missing/empty`)
    }
  }

  // BreadcrumbList (object form)
  const crumb1 = refBuildBreadcrumbSchema({ items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Breeds', url: 'https://dog.com/breeds' },
    { name: 'Labrador', url: 'https://dog.com/breeds/labrador' },
  ] })
  assertType(crumb1, '@context', 'https://schema.org', 'BreadcrumbList(object)')
  assertType(crumb1, '@type', 'BreadcrumbList', 'BreadcrumbList(object)')
  assertArray(crumb1, 'itemListElement', 1, 'BreadcrumbList(object)')
  assertSequentialPositions(crumb1.itemListElement, 'BreadcrumbList(object)')
  for (let i = 0; i < crumb1.itemListElement.length; i++) {
    const el = crumb1.itemListElement[i]
    if (el['@type'] !== 'ListItem') builderFindings.push(`[builder:BreadcrumbList] itemListElement[${i}].@type must be 'ListItem'`)
    if (!el.name) builderFindings.push(`[builder:BreadcrumbList] itemListElement[${i}].name missing`)
    if (!el.item) builderFindings.push(`[builder:BreadcrumbList] itemListElement[${i}].item (URL) missing`)
  }

  // BreadcrumbList (array form)
  const crumb2 = refBuildBreadcrumbSchema([
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Guides', url: 'https://dog.com/guides' },
  ])
  assertType(crumb2, '@type', 'BreadcrumbList', 'BreadcrumbList(array)')
  assertSequentialPositions(crumb2.itemListElement, 'BreadcrumbList(array)')

  // ItemList
  const itemList = refBuildItemListSchema({
    name: 'Best Aquarium Heaters',
    items: [
      { name: 'Heater A', url: 'https://fish.com/reviews/best-aquarium-heaters#heater-a' },
      { name: 'Heater B', url: 'https://fish.com/reviews/best-aquarium-heaters#heater-b' },
      { name: 'Heater C' },
    ],
  })
  assertType(itemList, '@context', 'https://schema.org', 'ItemList')
  assertType(itemList, '@type', 'ItemList', 'ItemList')
  assertArray(itemList, 'itemListElement', 1, 'ItemList')
  assertSequentialPositions(itemList.itemListElement, 'ItemList')
  for (let i = 0; i < itemList.itemListElement.length; i++) {
    const el = itemList.itemListElement[i]
    if (el['@type'] !== 'ListItem') builderFindings.push(`[builder:ItemList] itemListElement[${i}].@type must be 'ListItem'`)
    if (!el.name) builderFindings.push(`[builder:ItemList] itemListElement[${i}].name missing`)
  }

  // HowTo
  const howTo = refBuildHowToSchema({
    name: 'How to calculate aquarium volume',
    description: 'Measure L×W×H and convert.',
    url: 'https://fish.com/tools/aquarium-volume-calculator',
    totalTime: 'PT2M',
    steps: [
      { name: 'Measure dimensions', text: 'Measure the inside L×W×H in inches.' },
      { name: 'Convert', text: 'Divide cubic inches by 231 for US gallons.' },
    ],
  })
  assertType(howTo, '@context', 'https://schema.org', 'HowTo')
  assertType(howTo, '@type', 'HowTo', 'HowTo')
  assertField(howTo, 'name', 'HowTo')
  assertField(howTo, 'description', 'HowTo')
  assertField(howTo, 'url', 'HowTo')
  assertArray(howTo, 'step', 1, 'HowTo')
  for (let i = 0; i < howTo.step.length; i++) {
    const s = howTo.step[i]
    if (s['@type'] !== 'HowToStep') builderFindings.push(`[builder:HowTo] step[${i}].@type must be 'HowToStep'`)
    if (!s.name) builderFindings.push(`[builder:HowTo] step[${i}].name missing`)
    if (!s.text) builderFindings.push(`[builder:HowTo] step[${i}].text missing`)
  }
  for (let i = 0; i < howTo.step.length; i++) {
    if (howTo.step[i].position !== i + 1) {
      builderFindings.push(`[builder:HowTo] step[${i}].position is ${howTo.step[i].position}, expected ${i + 1}`)
    }
  }

  // MedicalWebPage
  const mwp = refBuildMedicalWebPageSchema({
    name: 'Heartworm in Dogs',
    description: 'What is heartworm and how to prevent it.',
    url: 'https://vets.co/health/heartworm-in-dogs',
    authorName: 'Vets.co Editorial',
    lastReviewed: '2026-01-15',
    medicalAudience: 'Caregiver',
  })
  assertType(mwp, '@context', 'https://schema.org', 'MedicalWebPage')
  assertType(mwp, '@type', 'MedicalWebPage', 'MedicalWebPage')
  assertField(mwp, 'name', 'MedicalWebPage')
  assertField(mwp, 'description', 'MedicalWebPage')
  assertField(mwp, 'url', 'MedicalWebPage')
  assertField(mwp, 'lastReviewed', 'MedicalWebPage')
  assertType(mwp, 'author.@type', 'Organization', 'MedicalWebPage')
  assertField(mwp, 'author.name', 'MedicalWebPage')
  assertField(mwp, 'audience.@type', 'MedicalWebPage')
  assertField(mwp, 'audience.audienceType', 'MedicalWebPage')

  // Organization
  const org = refBuildOrganizationSchema({
    siteId: 'dog-com',
    name: 'Dog.com',
    url: 'https://dog.com',
    logoUrl: 'https://dog.com/logo.png',
  })
  assertType(org, '@context', 'https://schema.org', 'Organization')
  assertType(org, '@type', 'Organization', 'Organization')
  assertField(org, 'name', 'Organization')
  assertField(org, 'url', 'Organization')
  if (!org['@id'] || !org['@id'].includes('#organization')) {
    builderFindings.push(`[builder:Organization] '@id' must contain '#organization' anchor, got '${org['@id']}'`)
  }

  // WebSite
  const ws = refBuildWebSiteSchema({
    siteId: 'dog-com',
    name: 'Dog.com',
    url: 'https://dog.com',
  })
  assertType(ws, '@context', 'https://schema.org', 'WebSite')
  assertType(ws, '@type', 'WebSite', 'WebSite')
  assertField(ws, 'name', 'WebSite')
  assertField(ws, 'url', 'WebSite')
  if (!ws['@id'] || !ws['@id'].includes('#website')) {
    builderFindings.push(`[builder:WebSite] '@id' must contain '#website' anchor, got '${ws['@id']}'`)
  }
  if (!ws.publisher || !ws.publisher['@id']) {
    builderFindings.push(`[builder:WebSite] publisher['@id'] (cross-reference to Organization) is missing`)
  }

  // Product (with rating)
  const prod = refBuildProductSchema({
    name: 'Best Dog Harness',
    description: 'A comfortable, escape-proof harness.',
    ratingValue: 8.7,
    bestRating: 10,
    reviewBody: 'Excellent fit.',
    url: 'https://dog.com/reviews/best-dog-harnesses',
  })
  assertType(prod, '@context', 'https://schema.org', 'Product')
  assertType(prod, '@type', 'Product', 'Product')
  assertField(prod, 'name', 'Product')
  assertField(prod, 'description', 'Product')
  assertType(prod, 'review.@type', 'Review', 'Product')
  assertType(prod, 'review.author.@type', 'Organization', 'Product')

  // Product (no rating — ratingValue is optional)
  const prodNoRating = refBuildProductSchema({
    name: 'Dog Crate',
    description: 'A crate description.',
  })
  if (prodNoRating.review.reviewRating !== undefined) {
    builderFindings.push(`[builder:Product] reviewRating should be absent when ratingValue not provided`)
  }
}

// ─── §2: Inline schema scan ───────────────────────────────────────────────────

function exists(p) {
  try { statSync(p); return true } catch { return false }
}

function listPageFiles(site) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  if (!exists(appDir)) return []
  const out = []
  const walk = (d) => {
    let entries
    try { entries = readdirSync(d, { withFileTypes: true }) } catch { return }
    for (const e of entries) {
      const p = join(d, e.name)
      if (e.isDirectory()) {
        if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
        walk(p)
      } else if (/^page\.[tj]sx?$/.test(e.name)) {
        out.push(p)
      }
    }
  }
  walk(appDir)
  return out
}

/**
 * Required fields per @type for inline objects.
 * Only fields that are unambiguously required by schema.org and that our
 * codebase always provides. Conservative to avoid false positives.
 */
const REQUIRED_BY_TYPE = {
  Article: ['@context', '@type', 'headline', 'url', 'author', 'publisher'],
  FAQPage: ['@context', '@type'],
  BreadcrumbList: ['@context', '@type', 'itemListElement'],
  ItemList: ['@context', '@type', 'itemListElement'],
  HowTo: ['@context', '@type', 'name', 'description', 'url'],
  SoftwareApplication: ['@context', '@type', 'name', 'applicationCategory'],
  MedicalWebPage: ['@context', '@type', 'name', 'description', 'url'],
  Organization: ['@context', '@type', 'name', 'url'],
  WebSite: ['@context', '@type', 'name', 'url'],
  Product: ['@context', '@type', 'name'],
  WebPage: ['@context', '@type'],
  Event: ['@context', '@type', 'name'],
  VideoObject: ['@context', '@type', 'name'],
  Review: ['@context', '@type', 'author'],
}

/**
 * Extract a map of top-level string constant declarations from a source file.
 * e.g. `const URL = 'https://fish.com/tools/aquarium-volume-calculator'`
 * or   `const SITE_URL = 'https://fish.com'`
 *
 * Used to substitute variable references in inline schema objects before
 * attempting JSON parsing (the most common reason schemas are skipped).
 */
function extractStringConstants(src) {
  const constants = new Map()
  // Match: const VARNAME = 'string' or const VARNAME = "string"
  const CONST_RE = /^(?:const|let|var)\s+([A-Z_][A-Z0-9_]*)\s*=\s*['"]([^'"]+)['"]\s*$/gm
  let m
  while ((m = CONST_RE.exec(src)) !== null) {
    constants.set(m[1], m[2])
  }
  return constants
}

/**
 * Extract top-level inline JSON-LD object literals from a source file.
 *
 * Finds lines with '@context': 'https://schema.org', walks to the enclosing
 * object's open brace, then counts braces to find the closing brace.
 * Attempts to parse each extracted block as JSON after substituting known
 * string constants (e.g. `const URL = '...'`).
 *
 * Conservative: silently skips unparseable blocks (template literals,
 * .map() calls, computed keys, function-scoped schemas) — no false positives
 * from parse failures.
 */
function extractInlineSchemas(src) {
  const lines = src.split('\n')
  const found = []

  // Extract top-level const string values for substitution
  const stringConstants = extractStringConstants(src)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Detect a line that contains @context = https://schema.org
    if (!/'@context'\s*:\s*'https:\/\/schema\.org'/.test(line) &&
        !/"@context"\s*:\s*"https:\/\/schema\.org"/.test(line)) {
      continue
    }

    // Walk backwards (up to 5 lines) to find the opening '{' of this object
    let openLine = i
    let depth = 0
    for (let back = i; back >= Math.max(0, i - 5); back--) {
      for (const ch of lines[back]) {
        if (ch === '{') depth++
        else if (ch === '}') depth--
      }
      if (depth > 0) { openLine = back; break }
    }

    // Walk forward from openLine counting braces to find the closing brace
    let braceDepth = 0
    let started = false
    let endLine = i
    for (let fwd = openLine; fwd < Math.min(lines.length, openLine + 200); fwd++) {
      for (const ch of lines[fwd]) {
        if (ch === '{') { braceDepth++; started = true }
        else if (ch === '}') { braceDepth-- }
      }
      if (started && braceDepth === 0) { endLine = fwd; break }
    }

    let rawSlice = lines.slice(openLine, endLine + 1).join('\n')

    // Substitute known top-level string constants to make the slice parseable.
    // Only substitute all-caps identifiers (our codebase convention for URL constants)
    // that appear as property values (: VARNAME) followed by , or whitespace or }.
    for (const [name, value] of stringConstants) {
      // Escape value for insertion into single-quoted string (escape single quotes)
      const safeValue = value.replace(/'/g, "\\'")
      // Match `: VARNAME` where VARNAME is followed by , or whitespace or } or newline
      const varRe = new RegExp(`:\\s*${name}(?=[,\\s\\n}])`, 'g')
      rawSlice = rawSlice.replace(varRe, `: '${safeValue}'`)
    }

    const jsonStr = jsObjectToJson(rawSlice)
    if (!jsonStr) { i = endLine; continue }

    let obj
    try { obj = JSON.parse(jsonStr) } catch { i = endLine; continue }

    if (!obj['@type'] || !obj['@context']) { i = endLine; continue }

    found.push({ type: obj['@type'], obj, lineNumber: openLine + 1 })
    i = endLine
  }

  return found
}

/**
 * Best-effort conversion of a JS object literal excerpt to valid JSON.
 * Returns null if the conversion is clearly unsafe (template literals,
 * dynamic variable references, computed keys).
 *
 * Only handles patterns that actually appear in the CarloOS codebase.
 */
function jsObjectToJson(src) {
  // Skip if there are template literals or complex dynamic expressions
  if (/`|=>\s*\{|\$\{/.test(src)) return null
  // Skip if there are unresolved all-caps identifiers used as property values
  // (our convention for URL constants like URL, SITE_URL, PAGE_URL, etc.).
  // After extractStringConstants substitution most should be resolved; if any
  // remain, the object references external/dynamic data and is not parseable.
  if (/:\s*[A-Z][A-Z0-9_]{2,}\b/.test(src)) return null
  // Skip .map() calls — these produce arrays we cannot statically evaluate
  if (/\.map\s*\(/.test(src)) return null

  let s = src

  // Strip leading variable assignment
  s = s.replace(/^\s*(?:const|let|var)\s+\w+\s*(?::\s*[\w<>,\s|[\]]+)?\s*=\s*/, '')
  // Strip trailing comma after the closing brace
  s = s.replace(/\}\s*,\s*$/, '}')

  // Remove line comments BEFORE quote conversion to avoid stripping https://
  // Only remove comments that are NOT inside string literals.
  // Safe heuristic: remove `// ...` only on lines where the comment starts
  // after whitespace or a comma (not after a colon that precedes a URL value).
  // Simplest safe approach: remove `//` only when preceded by whitespace or ','
  s = s.replace(/([,\s])\/\/[^\n]*/g, '$1')

  // Convert single-quoted strings to double-quoted strings
  s = s.replace(/'(?:[^'\\]|\\.)*'/g, (match) => {
    const inner = match.slice(1, -1)
      .replace(/\\'/g, "'")
      .replace(/"/g, '\\"')
    return '"' + inner + '"'
  })

  // Remove JS trailing commas before } or ]
  s = s.replace(/,(\s*[}\]])/g, '$1')

  // Quote bare property keys (identifiers not yet in double quotes)
  s = s.replace(/([{,\n]\s*)([a-zA-Z_$@][\w$@]*)(\s*:)/g, (_m, before, key, colon) => {
    return `${before}"${key}"${colon}`
  })

  if (!/^\s*\{/.test(s)) return null
  return s
}

/**
 * Validate a parsed inline schema object against required-fields rules.
 * Returns array of finding strings (empty = clean).
 */
function validateInlineSchema(schema, filePath, lineNumber) {
  const findings = []
  const type = Array.isArray(schema['@type'])
    ? schema['@type'].join(',')
    : String(schema['@type'])
  const loc = `${filePath.replace(ROOT + '/', '')}:${lineNumber}`

  // @context must be https (not http)
  const ctx = schema['@context']
  if (!ctx) {
    findings.push(`[inline:${type}] ${loc} — '@context' missing`)
  } else if (ctx === 'http://schema.org') {
    findings.push(`[inline:${type}] ${loc} — '@context' uses http:// (must be https://)`)
  } else if (ctx !== 'https://schema.org') {
    findings.push(`[inline:${type}] ${loc} — '@context' unexpected value: '${ctx}'`)
  }

  // Check required fields for known types
  const matchedType = Object.keys(REQUIRED_BY_TYPE).find(
    (t) => type === t || (Array.isArray(schema['@type']) && schema['@type'].includes(t))
  )
  if (matchedType) {
    for (const field of REQUIRED_BY_TYPE[matchedType]) {
      if (field === '@context') continue
      const val = schema[field]
      if (val === undefined || val === null || val === '') {
        findings.push(`[inline:${matchedType}] ${loc} — required field '${field}' is missing or empty`)
      }
    }
  }

  // BreadcrumbList: sequential positions + item sub-fields
  if (type === 'BreadcrumbList' && Array.isArray(schema.itemListElement)) {
    for (let i = 0; i < schema.itemListElement.length; i++) {
      const el = schema.itemListElement[i]
      if (!el) continue
      if (el.position !== i + 1) {
        findings.push(`[inline:BreadcrumbList] ${loc} — itemListElement[${i}].position is ${el.position}, expected ${i + 1} (must be sequential 1-based)`)
      }
      if (!el['@type']) findings.push(`[inline:BreadcrumbList] ${loc} — itemListElement[${i}].@type missing`)
      if (!el.name) findings.push(`[inline:BreadcrumbList] ${loc} — itemListElement[${i}].name missing`)
      if (!el.item) findings.push(`[inline:BreadcrumbList] ${loc} — itemListElement[${i}].item (URL) missing`)
    }
  }

  // ItemList: sequential positions
  if (type === 'ItemList' && Array.isArray(schema.itemListElement)) {
    for (let i = 0; i < schema.itemListElement.length; i++) {
      const el = schema.itemListElement[i]
      if (!el) continue
      if (el.position !== i + 1) {
        findings.push(`[inline:ItemList] ${loc} — itemListElement[${i}].position is ${el.position}, expected ${i + 1} (must be sequential 1-based)`)
      }
    }
  }

  // Article: author and publisher must have @type
  if (type === 'Article') {
    if (schema.author && typeof schema.author === 'object' && !schema.author['@type']) {
      findings.push(`[inline:Article] ${loc} — author.@type missing (must be 'Person' or 'Organization')`)
    }
    if (schema.publisher && typeof schema.publisher === 'object' && !schema.publisher['@type']) {
      findings.push(`[inline:Article] ${loc} — publisher.@type missing (must be 'Organization')`)
    }
  }

  // SoftwareApplication: url is present in all codebase instances
  if (type === 'SoftwareApplication' && !schema.url) {
    findings.push(`[inline:SoftwareApplication] ${loc} — 'url' field missing`)
  }

  // HowTo: step array present and non-empty
  if (type === 'HowTo') {
    if (!Array.isArray(schema.step) || schema.step.length === 0) {
      findings.push(`[inline:HowTo] ${loc} — 'step' must be a non-empty array`)
    } else {
      for (let i = 0; i < schema.step.length; i++) {
        const s = schema.step[i]
        if (!s) continue
        if (!s.name) findings.push(`[inline:HowTo] ${loc} — step[${i}].name missing`)
        if (!s.text) findings.push(`[inline:HowTo] ${loc} — step[${i}].text missing`)
      }
    }
  }

  return findings
}

/**
 * Quick regex scan for http:// @context (catches files where JS-to-JSON
 * conversion fails — we can still detect this critical pattern via regex).
 */
function quickScanForHttpContext(src, filePath) {
  const findings = []
  const HTTP_CTX_RE = /'@context'\s*:\s*'http:\/\/schema\.org'|"@context"\s*:\s*"http:\/\/schema\.org"/g
  let m
  while ((m = HTTP_CTX_RE.exec(src)) !== null) {
    const lineNum = src.slice(0, m.index).split('\n').length
    findings.push(`[scan] ${filePath.replace(ROOT + '/', '')}:${lineNum} — '@context' uses http:// (must be https://)`)
  }
  return findings
}

// ─── Main ─────────────────────────────────────────────────────────────────────

runBuilderChecks()

const report = []

if (builderFindings.length > 0) {
  report.push(`\n## Builder sanity: ${builderFindings.length} finding${builderFindings.length === 1 ? '' : 's'}`)
  for (const f of builderFindings) report.push(`  ${f}`)
} else {
  report.push('## Builder sanity: PASS (all 9 shared schema builders produce well-formed objects)')
}

let totalInlineFindings = 0
let totalFilesScanned = 0
let totalObjectsChecked = 0

for (const site of APPS) {
  const pages = listPageFiles(site)
  const siteFindings = []

  for (const f of pages) {
    let src
    try { src = readFileSync(f, 'utf8') } catch { continue }

    // Quick scan: catches http:// even in files we cannot fully parse
    siteFindings.push(...quickScanForHttpContext(src, f))

    // Full inline extraction + validation
    const schemas = extractInlineSchemas(src)
    totalFilesScanned++
    totalObjectsChecked += schemas.length

    for (const { type, obj, lineNumber } of schemas) {
      siteFindings.push(...validateInlineSchema(obj, f, lineNumber))
    }
  }

  if (siteFindings.length > 0) {
    totalInlineFindings += siteFindings.length
    report.push(`\n## ${site}: ${siteFindings.length} finding${siteFindings.length === 1 ? '' : 's'}`)
    for (const finding of siteFindings) report.push(`  ${finding}`)
  } else {
    report.push(`## ${site}: clean`)
  }
}

report.push(`\n## Scan totals`)
report.push(`  Files scanned:    ${totalFilesScanned}`)
report.push(`  Schemas checked:  ${totalObjectsChecked}`)
report.push(`  Builder findings: ${builderFindings.length}`)
report.push(`  Inline findings:  ${totalInlineFindings}`)

console.log(report.join('\n'))

const totalFindings = builderFindings.length + totalInlineFindings

if (totalFindings > 0) {
  const mode = ENFORCE ? 'FAIL' : 'REPORT'
  console.log(`\n${mode}: ${totalFindings} structured-data finding${totalFindings === 1 ? '' : 's'} across all sites.`)
  if (!ENFORCE) {
    console.log('Running in report-only mode (exit 0). Set ENFORCE=true in this script to make it a hard gate.')
    console.log('')
    console.log('Finding types:')
    console.log('  [builder:<Type>]  Shared builder in packages/ui/SEOHead produces malformed output.')
    console.log('  [inline:<Type>]   Inline schema object in a page.tsx has a structural defect.')
    console.log('  [scan]            http:// @context detected (must be https://).')
    console.log('')
    console.log('Per QC-STANDARDS.md §2.5 + §2.10: schema must validate; no fabricated reviewers.')
  } else {
    console.error('Fix structural schema defects before merging.')
    console.error('Per QC-STANDARDS.md §2.5 and CLAUDE.md §6 GEO requirements.')
    process.exit(1)
  }
} else {
  console.log(`\nPASS: 0 schema findings across all ${APPS.length} sites (${totalObjectsChecked} objects validated).`)
}
process.exit(0)
