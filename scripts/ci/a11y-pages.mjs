/**
 * Accessibility source check for money pages and the guides added in rounds 7–10.
 *
 * Lighthouse link-in-text-block fails when a link inside a sentence is
 * `no-underline` and its color is too close to the surrounding text.
 * An underline is enough to pass. Breadcrumb and card links are not this pattern.
 *
 * Pinned pages: the five phone-Lighthouse money pages on dog.com, fish.com,
 * horses.com, vets.co, and ferret.com, plus the round 7 and round 9 buyer
 * guides and the five How we pick pages.
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'

const PAGES = [
  // Dog.com money pages
  'apps/dog-com/src/app/reviews/best-dog-crates/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-harnesses/page.tsx',
  'apps/dog-com/src/app/reviews/best-dog-beds/page.tsx',
  'apps/dog-com/src/app/reviews/best-dental-chews/page.tsx',
  'apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx',
  // Horses.com money pages
  'apps/horses-com/src/app/reviews/best-winter-horse-blankets/page.tsx',
  'apps/horses-com/src/app/reviews/best-equine-supplements/page.tsx',
  'apps/horses-com/src/app/supplements/joint-supplements/page.tsx',
  'apps/horses-com/src/app/tack/saddle-pads/page.tsx',
  'apps/horses-com/src/app/ownership/horse-insurance/page.tsx',
  // Fish.com money pages
  'apps/fish-com/src/app/reviews/best-aquarium-filters/page.tsx',
  'apps/fish-com/src/app/reviews/best-aquarium-heaters/page.tsx',
  'apps/fish-com/src/app/reviews/best-aquarium-lighting/page.tsx',
  'apps/fish-com/src/app/reviews/best-canister-filters/page.tsx',
  'apps/fish-com/src/app/reviews/best-water-test-kits/page.tsx',
  // Vets.co money pages
  'apps/vets-co/src/app/reviews/best-pet-insurance/page.tsx',
  'apps/vets-co/src/app/telehealth/page.tsx',
  'apps/vets-co/src/app/reviews/trupanion-vs-healthy-paws-guide/page.tsx',
  'apps/vets-co/src/app/reviews/trupanion-vs-embrace-guide/page.tsx',
  'apps/vets-co/src/app/reviews/vetster-vs-askvet-guide/page.tsx',
  // Ferret.com money pages
  'apps/ferret-com/src/app/reviews/best-ferret-cage/page.tsx',
  'apps/ferret-com/src/app/diet/best-ferret-kibble/page.tsx',
  'apps/ferret-com/src/app/reviews/best-ferret-litter/page.tsx',
  'apps/ferret-com/src/app/reviews/best-ferret-harness/page.tsx',
  'apps/ferret-com/src/app/reviews/ferret-nation-vs-prevue-guide/page.tsx',
  // Round 7 buyer guides
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
  // Round 9 buyer guides
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
  // Round 10 How we pick
  'apps/dog-com/src/app/how-we-pick/page.tsx',
  'apps/fish-com/src/app/how-we-pick/page.tsx',
  'apps/horses-com/src/app/how-we-pick/page.tsx',
  'apps/vets-co/src/app/how-we-pick/page.tsx',
  'apps/ferret-com/src/app/how-we-pick/page.tsx',
]

// Inline sentence links only. Breadcrumbs use hover:text-brand-primary.
// Block links (class includes "block") are their own line, which Lighthouse
// does not score as link-in-text-block.
const INLINE_LINK = /className="([^"]*)"/g

const failures = []
const seen = new Set()
for (const rel of PAGES) {
  if (seen.has(rel)) continue
  seen.add(rel)
  const abs = path.join(process.cwd(), rel)
  let src
  try {
    src = readFileSync(abs, 'utf8')
  } catch {
    failures.push(`${rel}: missing file`)
    continue
  }
  INLINE_LINK.lastIndex = 0
  let match
  while ((match = INLINE_LINK.exec(src))) {
    const cls = match[1]
    if (!/(?:^|\s)text-brand-primary no-underline/.test(cls)) continue
    if (/(?:^|\s)block(?:\s|$)/.test(cls)) continue
    failures.push(`${rel}: inline link uses no-underline (Lighthouse link-in-text-block)`)
    break
  }
}

if (failures.length) {
  console.error('FAIL: accessibility page check')
  for (const line of failures) console.error('  ' + line)
  process.exit(1)
}

console.log(`PASS: ${seen.size} money and round 7–10 pages have no unstyled inline links.`)
