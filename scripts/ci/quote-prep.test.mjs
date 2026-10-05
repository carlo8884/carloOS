import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const page = readFileSync('apps/vets-co/src/app/tools/insurance-quote-prep/page.tsx', 'utf8')

test('quote prep sends the next step to the carrier comparison', () => {
  assert.match(page, /href="\/reviews\/best-pet-insurance"/)
  assert.match(page, /Compare quotes on the carrier comparison/)
  assert.doesNotMatch(page, /\/go\/trupanion/)
  assert.doesNotMatch(page, /\/go\/healthy-paws/)
  assert.doesNotMatch(page, /\/go\/embrace/)
  assert.match(page, /SoftwareApplication/)
  assert.match(page, /buildHowToSchema/)
  assert.match(page, /FAQAccordion/)
  assert.doesNotMatch(page, /\bDVM\b/)
  assert.doesNotMatch(page, /we tested/i)
  assert.doesNotMatch(page, /in our lab/i)
})

test('insurance comparison pages and the tools hub link the checklist', () => {
  const files = [
    'apps/vets-co/src/app/reviews/best-pet-insurance/page.tsx',
    'apps/vets-co/src/app/insurance/page.tsx',
    'apps/vets-co/src/app/insurance/deductibles-reimbursement/page.tsx',
    'apps/vets-co/src/app/insurance/how-pet-insurance-works/page.tsx',
    'apps/vets-co/src/app/insurance/what-pet-insurance-covers/page.tsx',
    'apps/vets-co/src/app/insurance/pre-existing-conditions/page.tsx',
    'apps/vets-co/src/app/insurance/wellness-plans-vs-insurance/page.tsx',
    'apps/vets-co/src/app/tools/page.tsx',
    'apps/vets-co/src/app/sitemap.ts',
  ]
  for (const file of files) {
    assert.match(readFileSync(file, 'utf8'), /\/tools\/insurance-quote-prep/, file)
  }
})
