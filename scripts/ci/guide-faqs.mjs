#!/usr/bin/env node
/**
 * Round 7, 9, and 11 buyer guides show 3–5 questions whose visible
 * answer is the FAQPage answer. FAQAccordion renders `answer` and
 * emits that same string when `answerText` is absent.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const guides = [
  // Round 7
  'apps/dog-com/src/app/reviews/best-puppy-crate-guide/page.tsx',
  'apps/dog-com/src/app/reviews/front-clip-vs-back-clip-guide/page.tsx',
  'apps/fish-com/src/app/reviews/hob-vs-canister-guide/page.tsx',
  'apps/fish-com/src/app/reviews/best-display-tank-heater-guide/page.tsx',
  'apps/horses-com/src/app/reviews/rambo-vs-rhino-guide/page.tsx',
  'apps/horses-com/src/app/reviews/best-blanket-for-clipped-horse-guide/page.tsx',
  'apps/vets-co/src/app/reviews/trupanion-vs-healthy-paws-guide/page.tsx',
  'apps/vets-co/src/app/reviews/vetster-vs-askvet-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/paper-vs-wood-litter-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/vest-vs-h-harness-guide/page.tsx',
  // Round 9
  'apps/dog-com/src/app/reviews/big-barker-vs-casper-guide/page.tsx',
  'apps/dog-com/src/app/reviews/greenies-vs-whimzees-guide/page.tsx',
  'apps/fish-com/src/app/reviews/hygger-vs-fluval-light-guide/page.tsx',
  'apps/fish-com/src/app/reviews/api-vs-salifert-guide/page.tsx',
  'apps/horses-com/src/app/reviews/cosequin-vs-platinum-guide/page.tsx',
  'apps/horses-com/src/app/reviews/quilted-vs-sheepskin-pad-guide/page.tsx',
  'apps/vets-co/src/app/reviews/trupanion-vs-embrace-guide/page.tsx',
  'apps/vets-co/src/app/reviews/spot-vs-manypets-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/ferret-nation-vs-prevue-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/wysong-vs-marshall-kibble-guide/page.tsx',
  // Round 11
  'apps/dog-com/src/app/reviews/holiday-scraps-trash-can-guide/page.tsx',
  'apps/dog-com/src/app/reviews/holiday-chocolate-calculator-guide/page.tsx',
  'apps/fish-com/src/app/reviews/winter-heater-sizing-guide/page.tsx',
  'apps/fish-com/src/app/reviews/winter-photoperiod-guide/page.tsx',
  'apps/horses-com/src/app/reviews/blanket-weight-by-temperature-guide/page.tsx',
  'apps/horses-com/src/app/reviews/winter-water-unfrozen-guide/page.tsx',
  'apps/vets-co/src/app/reviews/holiday-leftovers-low-fat-guide/page.tsx',
  'apps/vets-co/src/app/reviews/holiday-emergency-visit-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/fall-molt-brush-guide/page.tsx',
  'apps/ferret-com/src/app/reviews/winter-harness-fit-guide/page.tsx',
]

const hits = []
const accordion = readFileSync(join(root, 'packages/ui/src/components/FAQAccordion.tsx'), 'utf8')
if (!accordion.includes('buildFAQSchema')) hits.push('FAQAccordion no longer emits FAQPage schema')
if (!accordion.includes('item.answerText ?? (typeof item.answer === \'string\' ? item.answer : \'\')')) {
  hits.push('FAQAccordion schema answer is no longer the visible string')
}
if (!accordion.includes('{item.answer}')) hits.push('FAQAccordion no longer shows item.answer')

for (const rel of guides) {
  const src = readFileSync(join(root, rel), 'utf8')
  if (!src.includes('<FAQAccordion')) hits.push(`${rel} does not show an FAQ`)
  if (/includeSchema=\{\s*false\s*\}/.test(src)) hits.push(`${rel} turns FAQ schema off`)
  const items = [...src.matchAll(/question:\s*(['"`])([\s\S]*?)\1,\s*answer:\s*(['"`])((?:\\.|(?!\3)[\s\S])*)\3/g)]
  if (items.length < 3 || items.length > 5) hits.push(`${rel} has ${items.length} FAQ answers`)
  if (/answerText\s*:/.test(src)) {
    hits.push(`${rel} sets answerText, so the schema can drift from the visible answer`)
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} guide FAQ problem(s)`)
  for (const hit of hits) console.error(`  - ${hit}`)
  process.exit(1)
}
console.log(`PASS: ${guides.length} round 7, 9, and 11 guides show 3–5 FAQ answers that match their FAQPage schema.`)
