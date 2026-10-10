/**
 * Prescription comparisons send the reader to a clinic, not a brand homepage.
 * Product schema on those pages must not invent a shop URL.
 */
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const FILES = [
  'apps/dog-com/src/app/reviews/best-heartworm-prevention/page.tsx',
  'apps/dog-com/src/app/reviews/best-flea-tick-prevention/page.tsx',
]

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

export function rxSchemaProblems() {
  const problems = []
  for (const rel of FILES) {
    const src = readFileSync(join(root, rel), 'utf8')
    for (const block of productBlocks(src)) {
      const url = block.match(/url:\s*'([^']+)'/)
      if (!url) continue
      problems.push(`${rel}: product url is not a hop the page shows (${url[1]})`)
    }
  }
  return problems
}

function main() {
  const problems = rxSchemaProblems()
  if (problems.length) {
    console.error(`FAIL: ${problems.length} prescription schema url(s)`)
    for (const problem of problems) console.error('  - ' + problem)
    process.exit(1)
  }
  console.log('PASS: prescription product schema does not point at a brand homepage.')
}

if (process.argv[1] && process.argv[1].endsWith('rx-schema-home.mjs')) main()
