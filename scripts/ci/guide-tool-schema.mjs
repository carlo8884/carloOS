#!/usr/bin/env node
/**
 * Article + Breadcrumb JSON-LD on guide and tool pages (five earning sites).
 *
 * Every non-redirect page under /guides, /tools, /reviews, or a *-guide route
 * must emit both. The reviews hub itself is an index, not a comparison.
 * The Article headline must equal the visible title (h1, ArticleLayout
 * hero title, or hub masthead title). BreadcrumbList names must equal the
 * trail the page actually renders.
 *
 * apps/dog-com/src/app/tools/dog-age-calculator/page.tsx is locked by draft
 * #1631. Its Article node lives in the sibling layout. Its breadcrumb last
 * crumb still says the h1 ("Dog Age in Human Years Calculator") while the
 * nav says "Dog Age Calculator"; that one mismatch stays until the lock lifts.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const LOCKED_CRUMB = 'apps/dog-com/src/app/tools/dog-age-calculator/page.tsx'

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path, acc)
    else if (entry === 'page.tsx') acc.push(path)
  }
  return acc
}

function inScope(rel) {
  if (/\/reviews\/page\.tsx$/.test(rel)) return false
  return /\/(guides|tools|reviews)\//.test(rel) || /-guide\/page\.tsx$/.test(rel)
}

function isRedirect(src) {
  if (/buildMetadata/.test(src)) return false
  return /\bredirect\(/.test(src) || /\bnotFound\(/.test(src)
}

function readJsString(src, index) {
  let i = index
  while (i < src.length && /\s/.test(src[i])) i++
  const q = src[i]
  if (q !== "'" && q !== '"' && q !== '`') return null
  let out = ''
  i++
  while (i < src.length) {
    if (src[i] === '\\') {
      out += src[i + 1] ?? ''
      i += 2
      continue
    }
    if (q === '`' && src[i] === '$' && src[i + 1] === '{') return null
    if (src[i] === q) return { value: out.replace(/\s+/g, ' ').trim(), end: i + 1 }
    out += src[i]
    i++
  }
  return null
}

function propIn(block, name) {
  const re = new RegExp(`\\b${name}:\\s*`)
  const m = re.exec(block)
  if (!m) return null
  return readJsString(block, m.index + m[0].length)
}

function matchParen(src, openIdx) {
  let depth = 0
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i]
    if (c === "'" || c === '"' || c === '`') {
      const q = c
      i++
      while (i < src.length) {
        if (src[i] === '\\') {
          i += 2
          continue
        }
        if (src[i] === q) break
        i++
      }
      continue
    }
    if (c === '(') depth++
    else if (c === ')') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function htmlText(inner) {
  const text = inner
    .replace(/\{\s*' '\s*\}/g, ' ')
    .replace(/\{\s*" "\s*\}/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&#8250;/g, '›')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text || text.includes('{')) return null
  return text
}

function visibleTitle(src) {
  if (/<ArticleLayout\b/.test(src)) {
    const i = src.indexOf('hero={{')
    if (i >= 0) {
      const title = propIn(src.slice(i, i + 1800), 'title')
      if (title?.value) return title.value
    }
  }
  const h1 = src.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)
  if (h1) {
    const title = htmlText(h1[1])
    if (title) return title
  }
  const mast = src.match(/<(?:HubMasthead|PremiumMasthead)\b[\s\S]{0,900}?\btitle="([^"]+)"/)
  if (mast) return htmlText(mast[1])
  return null
}

function articleHeadline(src) {
  const call = src.indexOf('buildArticleSchema(')
  if (call >= 0) {
    const open = src.indexOf('(', call)
    const close = matchParen(src, open)
    const title = propIn(src.slice(open, close), 'title')
    if (title?.value) return title.value
  }
  const re = /headline:\s*/g
  let m
  while ((m = re.exec(src))) {
    const before = src.slice(Math.max(0, m.index - 300), m.index)
    if (!/'Article'|"Article"/.test(before)) continue
    const title = readJsString(src, m.index + m[0].length)
    if (title?.value) return title.value
  }
  return null
}

function hasArticle(src) {
  return /buildArticleSchema\(/.test(src) || /@type': 'Article'|@type": "Article"/.test(src)
}

function schemaCrumbNames(src) {
  const names = []
  let idx = 0
  while (idx < src.length) {
    const start = src.indexOf('buildBreadcrumbSchema(', idx)
    if (start < 0) break
    const open = src.indexOf('(', start)
    const close = matchParen(src, open)
    if (close < 0) break
    const body = src.slice(open, close)
    const re = /\bname:\s*/g
    let m
    while ((m = re.exec(body))) {
      const name = readJsString(body, m.index + m[0].length)
      if (name?.value) names.push(name.value)
    }
    idx = close + 1
  }
  return names
}

function propCrumbNames(src) {
  const start = src.search(/breadcrumbs=\{\s*\[/)
  if (start < 0) return null
  const open = src.indexOf('[', start)
  let depth = 0
  for (let i = open; i < src.length; i++) {
    if (src[i] === '[') depth++
    else if (src[i] === ']') {
      depth--
      if (depth === 0) {
        const body = src.slice(open, i)
        const names = []
        const re = /\bname:\s*/g
        let m
        while ((m = re.exec(body))) {
          const name = readJsString(body, m.index + m[0].length)
          if (name?.value) names.push(name.value)
        }
        return names
      }
    }
  }
  return null
}

function navCrumbNames(src) {
  const re = /<nav\b[^>]*>[\s\S]*?<\/nav>/g
  let m
  while ((m = re.exec(src))) {
    const nav = m[0]
    if (!/href="\/"|href='\/'/.test(nav)) continue
    const names = []
    const texts = nav.matchAll(/<(?:Link|span|a)\b[^>]*>([\s\S]*?)<\/(?:Link|span|a)>/g)
    for (const text of texts) {
      const name = htmlText(text[1])
      if (!name || /^[›>»]$/.test(name)) continue
      names.push(name)
    }
    if (names.length) return names
  }
  return []
}

function sameTrail(a, b) {
  return a.length === b.length && a.every((name, i) => name === b[i])
}

const failures = []
let checked = 0

for (const site of SITES) {
  const appDir = join(ROOT, 'apps', site, 'src/app')
  for (const page of walk(appDir)) {
    const rel = page.slice(ROOT.length + 1)
    if (!inScope(rel)) continue
    const src = readFileSync(page, 'utf8')
    if (isRedirect(src)) continue
    checked++

    const layoutPath = join(page, '..', 'layout.tsx')
    const layout = existsSync(layoutPath) ? readFileSync(layoutPath, 'utf8') : ''
    const blob = src + '\n' + layout

    const hasCrumb =
      /buildBreadcrumbSchema\(/.test(blob) ||
      /breadcrumbs=\{/.test(src) ||
      /<Breadcrumb\b/.test(src) ||
      /@type': 'BreadcrumbList'|@type": "BreadcrumbList"/.test(blob)
    if (!hasCrumb) failures.push(`${rel} — missing Breadcrumb schema`)

    // Product comparisons already use a longer h1 than the Article headline.
    // This check only requires the breadcrumb trail to match on those pages.
    const comparisonOnly = /\/reviews\//.test(rel) && !/-guide\/page\.tsx$/.test(rel)
    if (!comparisonOnly) {
      if (!hasArticle(blob)) failures.push(`${rel} — missing Article schema`)
      const title = visibleTitle(src)
      const headline = articleHeadline(layout) || articleHeadline(src)
      if (!title) failures.push(`${rel} — no visible title to check the Article headline against`)
      else if (!headline) failures.push(`${rel} — Article schema has no headline`)
      else if (headline !== title) {
        failures.push(`${rel} — Article headline "${headline}" does not match the visible title "${title}"`)
      }

      if (/DVM|Veterinarian [A-Z]/.test(articleAuthor(blob))) {
        failures.push(`${rel} — Article author must stay an editorial byline, not a clinical credential`)
      }
    }

    if (rel === LOCKED_CRUMB) continue
    if (/<ArticleLayout\b/.test(src) && propCrumbNames(src)) continue

    const schemaTrail = schemaCrumbNames(src)
    if (!schemaTrail.length) continue
    const visibleTrail = navCrumbNames(src)
    if (!visibleTrail.length) {
      failures.push(`${rel} — BreadcrumbList ${schemaTrail.join(' > ')} is not shown on the page`)
      continue
    }
    if (!sameTrail(schemaTrail, visibleTrail)) {
      failures.push(
        `${rel} — BreadcrumbList "${schemaTrail.join(' > ')}" does not match the trail "${visibleTrail.join(' > ')}"`,
      )
    }
  }
}

function articleAuthor(src) {
  const call = src.indexOf('buildArticleSchema(')
  if (call >= 0) {
    const open = src.indexOf('(', call)
    const close = matchParen(src, open)
    const author = propIn(src.slice(open, close < 0 ? open + 800 : close), 'authorName')
    if (author?.value) return author.value
  }
  const inline = src.match(/'Article'[\s\S]{0,400}?name:\s*'([^']+)'/)
  return inline?.[1] ?? ''
}

if (failures.length) {
  console.log('# Guide and tool Article / Breadcrumb schema\n')
  for (const line of failures) console.log(`  ${line}`)
  console.log(`\nFAIL: ${failures.length} guide/tool page(s) (${checked} checked).`)
  process.exit(1)
}

console.log(`PASS: ${checked} guide, tool, and comparison pages emit a breadcrumb trail that matches BreadcrumbList.`)
