/**
 * Product and ItemList urls on the top commercial pages must be the hop
 * the page already shows. Ratings that are not backed by reviews stay out.
 */
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { MONEY_PAGES } from './lighthouse-budgets-lib.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')

const EXTRA = [
  'apps/fish-com/src/app/reviews/best-aquarium-lighting/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-food-small-breed/page.tsx',
  'apps/dog-com/src/app/reviews/best-joint-supplements/page.tsx',
  'apps/dog-com/src/app/reviews/best-slow-feeder-bowls/page.tsx',
  'apps/dog-com/src/app/reviews/best-large-breed-dog-food/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-food-senior/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-beds/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-food-sensitive-stomach/page.tsx',
  'apps/dog-com/src/app/reviews/best-dental-chews/page.tsx',
  'apps/fish-com/src/app/reviews/best-planted-tank-fertilizers/page.tsx',
  'apps/horses-com/src/app/supplements/joint-supplements/page.tsx',
]

function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:\\])\/\/.*$/gm, '$1')
}

function productBlocks(src) {
  const blocks = []
  const needle = 'buildProductSchema('
  let from = 0
  while (from < src.length) {
    const start = src.indexOf(needle, from)
    if (start < 0) break
    let depth = 0
    let end = start + needle.length
    for (; end < src.length; end++) {
      const ch = src[end]
      if (ch === '(') depth++
      else if (ch === ')') {
        if (depth === 0) break
        depth--
      }
    }
    blocks.push(src.slice(start, end))
    from = end + 1
  }
  return blocks
}

export function schemaHopProblems() {
  const problems = []
  const files = EXTRA.slice()
  for (const [site, paths] of Object.entries(MONEY_PAGES)) {
    for (const path of paths) files.push(`apps/${site}/src/app/${path}/page.tsx`)
  }
  for (const rel of files) {
    const src = readFileSync(join(root, rel), 'utf8')
    const code = stripComments(src)
    if (/\bratingValue\b|\breviewCount\b|\baggregateRating\b/.test(code)) {
      problems.push(`${rel}: rating or review count is not backed by reviews`)
    }
    if (/\bwe tested\b|\bwe calibrated\b|\bin our lab\b/i.test(code)) {
      problems.push(`${rel}: first-person testing claim`)
    }
    for (const block of productBlocks(code)) {
      const url = block.match(/url:\s*'([^']+)'/)
      if (!url) continue
      if (!url[1].includes('/go/')) {
        problems.push(`${rel}: product url is not the visible hop (${url[1]})`)
        continue
      }
      const hop = url[1].slice(url[1].indexOf('/go/'))
      if (src.split(hop).length - 1 < 2) {
        problems.push(`${rel}: product hop is not on the page (${hop})`)
      }
    }
    for (const match of code.matchAll(/https?:\/\/[^"'`\s]+\/go\/[^"'`\s]+/g)) {
      const hop = match[0].slice(match[0].indexOf('/go/'))
      if (src.split(hop).length - 1 < 2) {
        problems.push(`${rel}: schema hop is not on the page (${hop})`)
      }
    }
  }
  return problems
}

function main() {
  const problems = schemaHopProblems()
  if (problems.length) {
    console.error(`FAIL: ${problems.length} schema hop problem(s)`)
    for (const problem of problems) console.error('  - ' + problem)
    process.exit(1)
  }
  console.log('PASS: product and ItemList urls on the top commercial pages match a visible hop.')
}

if (process.argv[1] && process.argv[1].endsWith('schema-hop-urls.mjs')) main()
