#!/usr/bin/env node
/**
 * Every guide, tool, and comparison page on the five earning sites ships
 * an Open Graph image and a Twitter large image, drawn by next/og from the
 * page title and the site palette, plus a real meta description.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const sites = [
  { id: 'dog-com', wordmark: 'Dog.com' },
  { id: 'fish-com', wordmark: 'Fish.com' },
  { id: 'horses-com', wordmark: 'Horses.com' },
  { id: 'vets-co', wordmark: 'Vets.co' },
  { id: 'ferret-com', wordmark: 'Ferret.com' },
]
const hits = []

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next') continue
    const abs = join(dir, name)
    if (statSync(abs).isDirectory()) walk(abs, out)
    else if (name === 'page.tsx') out.push(abs)
  }
  return out
}

function inScope(route) {
  if (['guides', 'tools', 'reviews', 'compare'].some((s) => route === s || route.startsWith(`${s}/`))) return true
  return route.endsWith('-guide') || route.includes('-vs-')
}

function stringField(body, field) {
  for (const q of ["'", '"', '`']) {
    const re = new RegExp(`${field}\\s*:\\s*${q}((?:\\\\.|(?!${q}).)*)${q}`)
    const m = body.match(re)
    if (m) return m[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`')
  }
  return null
}

function descriptionsOf(src) {
  const found = []
  for (const block of src.matchAll(/buildMetadata\s*\(\s*\{([\s\S]*?)\}\s*\)/g)) {
    const literal = stringField(block[1], 'description')
    if (literal) found.push(literal)
  }
  return found
}

const seo = readFileSync(join(root, 'packages/ui/src/components/SEOHead.tsx'), 'utf8')
if (!seo.includes("card: 'summary_large_image'")) hits.push('buildMetadata does not set a large Twitter card')
if (!seo.includes('/api/og?title=')) hits.push('buildMetadata does not point the card at /api/og')
if (!seo.includes('openGraph:') || !seo.includes('images: [{ url: ogImage')) {
  hits.push('buildMetadata does not attach an Open Graph image')
}
if (!seo.includes('images: [ogImage]')) hits.push('buildMetadata does not attach a Twitter image')
if (!seo.includes('description,')) hits.push('buildMetadata does not copy the description onto the card')

const og = readFileSync(join(root, 'packages/ui/src/og/OgTemplate.tsx'), 'utf8')
for (const site of sites) {
  if (!og.includes(`'${site.id}'`)) hits.push(`OgTemplate has no palette for ${site.id}`)
  const route = readFileSync(join(root, 'apps', site.id, 'src/app/api/og/route.tsx'), 'utf8')
  if (!route.includes("from 'next/og'")) hits.push(`${site.id} /api/og does not use next/og`)
  if (!route.includes('ImageResponse')) hits.push(`${site.id} /api/og does not render an ImageResponse`)
  if (!route.includes('OgTemplate')) hits.push(`${site.id} /api/og does not use the shared brand template`)
  if (!route.includes(`siteId="${site.id}"`)) hits.push(`${site.id} /api/og does not pass its site id`)
  if (!route.includes(`wordmark="${site.wordmark}"`)) hits.push(`${site.id} /api/og does not pass its wordmark`)
  if (!route.includes("searchParams.get('title')")) hits.push(`${site.id} /api/og does not read the page title`)
}

let pages = 0
for (const site of sites) {
  const appRoot = join(root, 'apps', site.id, 'src/app')
  for (const file of walk(appRoot)) {
    const route = file.slice(appRoot.length + 1).replace(/\/page\.tsx$/, '')
    if (!inScope(route)) continue
    const src = readFileSync(file, 'utf8')
    if (!src.includes('buildMetadata') && (src.includes('redirect(') || src.includes('notFound('))) continue
    pages += 1
    const rel = file.replace(root + '/', '')
    if (!src.includes('buildMetadata')) hits.push(`${rel} has no social metadata`)
    const descriptions = descriptionsOf(src)
    if (!descriptions.length) hits.push(`${rel} has no description`)
    for (const description of descriptions) {
      if (description.length < 40) hits.push(`${rel} description is ${description.length} chars`)
      else if (description.length > 160) hits.push(`${rel} description is ${description.length} chars`)
      else if (/lorem|todo|placeholder|coming soon|tbd\b/i.test(description)) {
        hits.push(`${rel} description is a stub`)
      }
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} social card problem(s)`)
  for (const hit of hits.slice(0, 40)) console.error(`  - ${hit}`)
  process.exit(1)
}
console.log(`PASS: ${pages} guide, tool, and comparison pages carry a description and a branded card.`)
