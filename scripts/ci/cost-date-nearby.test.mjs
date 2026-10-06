import assert from 'node:assert/strict'
import test from 'node:test'
import { addedCostLines, datedNearby, isCostSentence, stampOf } from './cost-date-nearby.mjs'

test('a care-cost sentence is in scope and a product price attribute is not', () => {
  assert.equal(isCostSentence('<p>Surgery commonly runs $3,000 at the clinic.</p>'), true)
  assert.equal(isCostSentence('price="$30–50 / 5 lb"'), false)
  assert.equal(isCostSentence("{ label: '$5,000 / year', value: 5000 },"), false)
  assert.equal(isCostSentence('text: \'Boarding commonly $400 a month.\''), false)
})

test('the page stamp is the priceAsOf date', () => {
  assert.equal(stampOf('priceAsOf="2026-06-11"\n<PriceAsOf date="2026-01-01" />'), '2026-06-11')
  assert.equal(stampOf('<PriceAsOf date="2026-10-05" />'), '2026-10-05')
})

test('a date within 12 lines satisfies the check', () => {
  const lines = []
  for (let i = 0; i < 20; i += 1) lines.push(`line ${i}`)
  lines[4] = '<p>Those figures are typical US ranges dated 2026-06-11.</p>'
  lines[10] = '<p>A consult runs $150.</p>'
  assert.equal(datedNearby(lines, 10, '2026-06-11'), true)
  assert.equal(datedNearby(lines, 18, '2026-06-11'), false)
})

test('added cost lines are read from a zero-context diff', () => {
  const diff = [
    'diff --git a/apps/vets-co/src/app/insurance/page.tsx b/apps/vets-co/src/app/insurance/page.tsx',
    '@@ -10,0 +11,2 @@',
    '+<p>Premiums run $40 a month.</p>',
    '+<p>Those figures are typical US ranges dated 2026-06-11.</p>',
    'diff --git a/apps/other/page.tsx b/apps/other/page.tsx',
    '@@ -1,0 +2 @@',
    '+<p>Surgery runs $9.</p>',
  ].join('\n')
  const added = addedCostLines(diff)
  assert.equal(added.length, 1)
  assert.equal(added[0].file, 'apps/vets-co/src/app/insurance/page.tsx')
  assert.equal(added[0].line, 11)
})
