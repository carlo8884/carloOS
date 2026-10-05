#!/usr/bin/env node
/**
 * Comparison and who-should-buy tables: each product row that already has
 * a /go hop on its review card also has a TableShopLink to that same hop.
 * Rows with no shop hop (prescription names, unscored products) stay as
 * in-page anchors. No new /go targets.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const APPS = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const hits = []

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next' || name === '(funnels)') continue
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (name.endsWith('.tsx')) out.push(path)
  }
  return out
}

function cards(src) {
  const map = new Map()
  for (const chunk of src.split('<ReviewCard').slice(1)) {
    const id = chunk.match(/\bid="([^"]+)"/)
    const href = chunk.match(/\bctaHref="([^"]+)"/)
    if (id && href && href[1].startsWith('/go/')) map.set(id[1], href[1])
  }
  return map
}

for (const app of APPS) {
  for (const file of walk(join(ROOT, 'apps', app, 'src/app'))) {
    if (file.endsWith('/src/app/page.tsx')) continue
    const src = readFileSync(file, 'utf8')
    if (!src.includes('<table')) continue
    const hops = new Set()
    for (const href of src.matchAll(/\b(?:ctaHref|href)=["'](\/go\/[^"']+)["']/g)) hops.add(href[1])
    for (const href of src.matchAll(/<TableShopLink[^>]*href=\{"(\/go\/[^"]+)"\}/g)) {
      if (!hops.has(href[1])) hits.push(`${file.replace(ROOT + '/', '')}: TableShopLink ${href[1]} is not an existing hop on this page`)
    }
    for (const href of src.matchAll(/shopHref:\s*'(\/go\/[^']+)'/g)) {
      if (!hops.has(href[1])) hits.push(`${file.replace(ROOT + '/', '')}: shopHref ${href[1]} is not an existing hop on this page`)
    }
    if (src.includes('shopHref:') && !src.includes('<TableShopLink href={row.shopHref}')) {
      hits.push(`${file.replace(ROOT + '/', '')}: spec rows name a shopHref but do not render it`)
    }
    const byId = cards(src)
    for (const table of src.matchAll(/<table[\s\S]*?<\/table>/g)) {
      const body = table[0]
      const need = new Map()
      for (const link of body.matchAll(/<a href="#([^"]+)"[^>]*>([^<]*)<\/a>/g)) {
        const href = byId.get(link[1])
        if (!href) continue
        need.set(href, (need.get(href) ?? 0) + 1)
      }
      for (const [href, count] of need) {
        const found = body.split(`href={"${href}"}`).length - 1
        if (found < count) {
          hits.push(`${file.replace(ROOT + '/', '')}: ${count} row(s) for ${href} but ${found} table shop link(s)`)
        }
      }
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} table shop-link problem(s)`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: comparison rows with an existing shop hop link to that hop.')
