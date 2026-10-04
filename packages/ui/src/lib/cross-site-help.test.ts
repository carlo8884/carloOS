import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { CROSS_SITE_HELP_EVENT, crossSiteHelpParams } from './cross-site-help.ts'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')

/** Pages that earn exactly one CrossSiteHelp link in this slice. */
const PLACEMENTS: { file: string; site: string; path: string }[] = [
  { file: 'apps/dog-com/src/app/faq/page.tsx', site: 'vets-co', path: '/insurance/questions/is-pet-insurance-worth-it' },
  { file: 'apps/dog-com/src/app/tools/new-puppy-checklist/page.tsx', site: 'vets-co', path: '/reviews/best-pet-insurance' },
  { file: 'apps/dog-com/src/app/tools/puppy-first-year-budget/page.tsx', site: 'vets-co', path: '/insurance/questions/how-much-does-pet-insurance-cost' },
  { file: 'apps/dog-com/src/app/compare/[slug]/page.tsx', site: 'vets-co', path: '/reviews/best-pet-insurance' },
  { file: 'apps/horses-com/src/app/ownership/cost-of-owning-a-horse/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/horses-com/src/app/ownership/horse-insurance/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/horses-com/src/app/tools/horse-cost-calculator/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/ferret-com/src/app/ownership/ferret-insurance-basics/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/ferret-com/src/app/ownership/cost-of-owning-a-ferret/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/ferret-com/src/app/health/vet-visit-prep/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/ferret-com/src/app/tools/cost-calculator/page.tsx', site: 'vets-co', path: '/guides/emergency-vet-costs' },
  { file: 'apps/vets-co/src/app/breeds/beagle-health/page.tsx', site: 'dog-com', path: '/breeds/beagle' },
  { file: 'apps/vets-co/src/app/breeds/chihuahua-health/page.tsx', site: 'dog-com', path: '/breeds/chihuahua' },
  { file: 'apps/vets-co/src/app/breeds/french-bulldog-health/page.tsx', site: 'dog-com', path: '/breeds/french-bulldog' },
  { file: 'apps/vets-co/src/app/breeds/german-shepherd-health/page.tsx', site: 'dog-com', path: '/breeds/german-shepherd' },
  { file: 'apps/vets-co/src/app/breeds/golden-retriever-health/page.tsx', site: 'dog-com', path: '/breeds/golden-retriever' },
  { file: 'apps/vets-co/src/app/breeds/husky-health/page.tsx', site: 'dog-com', path: '/breeds/siberian-husky' },
  { file: 'apps/vets-co/src/app/breeds/labrador-health/page.tsx', site: 'dog-com', path: '/breeds/labrador-retriever' },
  { file: 'apps/vets-co/src/app/breeds/pomeranian-health/page.tsx', site: 'dog-com', path: '/breeds/pomeranian' },
  { file: 'apps/vets-co/src/app/breeds/yorkshire-terrier-health/page.tsx', site: 'dog-com', path: '/breeds/yorkshire-terrier' },
]

test('cross_site_help records the two sites, the topic, and the destination', () => {
  assert.equal(CROSS_SITE_HELP_EVENT, 'cross_site_help')
  assert.deepEqual(
    crossSiteHelpParams({
      fromSite: 'dog-com',
      toSite: 'vets-co',
      topic: 'insurance',
      destination: 'https://vets.co/reviews/best-pet-insurance',
    }),
    {
      from_site: 'dog-com',
      to_site: 'vets-co',
      topic: 'insurance',
      destination: 'https://vets.co/reviews/best-pet-insurance',
    },
  )
})

test('each placed page has one absolute crossSiteHref help link', () => {
  for (const placement of PLACEMENTS) {
    const source = fs.readFileSync(path.join(root, placement.file), 'utf8')
    const opens = source.match(/<CrossSiteHelp\b/g) ?? []
    assert.equal(opens.length, 1, placement.file)
    assert.match(source, new RegExp(`crossSiteHref\\('${placement.site}', '${placement.path}'\\)`))
  }
})

test('the help link component fires cross_site_help and does not use a relative href', () => {
  const component = fs.readFileSync(path.join(root, 'packages/ui/src/components/CrossSiteHelp.tsx'), 'utf8')
  assert.match(component, /CROSS_SITE_HELP_EVENT/)
  assert.match(component, /crossSiteHelpParams/)
  assert.doesNotMatch(component, /href=["']\//)
})
