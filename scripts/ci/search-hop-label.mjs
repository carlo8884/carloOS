#!/usr/bin/env node
/**
 * A /go/amazon-brand/ search is not a product page. These searches
 * still open a different first result, so the button and the text next to
 * it must say "Search Amazon for …". Shop, Browse, and Check price stay
 * legal on a verified /go/amazon/<ASIN> hop.
 *
 * Lighting stays parked: this list does not include a lighting SKU.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

export const SEARCH_HOPS = [
  { sku: 'cosequin+ds+maximum+strength', label: 'Search Amazon for Cosequin DS' },
  { sku: 'northmate+green+interactive+feeder', label: 'Search Amazon for Northmate Green' },
  { sku: 'tractive+gps+dog+tracker', label: 'Search Amazon for Tractive GPS' },
  { sku: 'seachem+flourish+comprehensive', label: 'Search Amazon for Seachem Flourish Comprehensive' },
  { sku: 'hydor+inline+heater', label: 'Search Amazon for Hydor Inline' },
  { sku: 'aquarium+co-op+easy+green+fertilizer', label: 'Search Amazon for Easy Green' },
  { sku: 'salifert+aquarium+test+kit', label: 'Search Amazon for Salifert' },
  { sku: 'bluelab+ph+meter', label: 'Search Amazon for a Bluelab pH meter' },
  { sku: 'ferret+h+style+harness+adjustable', label: 'Search Amazon for an H-style ferret harness' },
]

const PRODUCT_PAGE = /\bShop\b|\bBrowse\b|\bCheck price\b|product page|opens the /i

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '(funnels)'].includes(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) out.push(path)
  }
  return out
}

function hasLabel(line) {
  return /ctaText=|resourceLabel=|amazonLabel=|shopLabel=|\blabel=|TableShopLink/.test(line)
}

/** Label strings that belong to this hop, not the hop on the next row. */
export function labelsForSku(lines, index) {
  const line = lines[index]
  const found = []
  if (hasLabel(line)) found.push(line)
  for (const neighbor of [lines[index - 1], lines[index + 1]]) {
    if (!neighbor || neighbor.includes('/go/')) continue
    if (hasLabel(neighbor)) found.push(neighbor)
  }
  return found
}

export function searchHopLabelProblems(root = ROOT) {
  const problems = []
  for (const site of SITES) {
    const app = join(root, 'apps', site, 'src')
    for (const file of walk(app)) {
      const rel = file.replace(root + '/', '')
      if (rel.endsWith('best-aquarium-lighting/page.tsx')) continue
      const lines = readFileSync(file, 'utf8').split('\n')
      lines.forEach((line, index) => {
        for (const hop of SEARCH_HOPS) {
          if (!line.includes(hop.sku)) continue
          const labels = labelsForSku(lines, index)
          for (const labelLine of labels) {
            if (!labelLine.includes(hop.label) || PRODUCT_PAGE.test(labelLine)) {
              problems.push(`${rel}:${index + 1} ${hop.sku} uses product-page wording`)
            }
          }
        }
      })
    }
  }
  return problems
}

function main() {
  const problems = searchHopLabelProblems()
  if (problems.length) {
    console.error(`FAIL: ${problems.length} search hop label problem(s)`)
    for (const problem of problems) console.error('  ' + problem)
    process.exit(1)
  }
  console.log('PASS: the mismatched searches say Search Amazon for, not a product page.')
}

if (process.argv[1] && process.argv[1].endsWith('search-hop-label.mjs')) main()
