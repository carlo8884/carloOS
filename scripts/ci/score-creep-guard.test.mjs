import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { LIGHTING_FILES, findingsIn, isAllowed } from './score-creep-guard.mjs'

const lighting = 'apps/fish-com/src/app/reviews/best-aquarium-lighting/page.tsx'

test('parked lighting files are allowlisted', () => {
  for (const file of LIGHTING_FILES) assert.equal(isAllowed(file), true)
  assert.equal(isAllowed('apps/fish-com/src/app/reviews/best-aquarium-heaters/page.tsx'), false)
})

test('Nicrew Classic score and price line stay inside the allowlisted lighting file', () => {
  const text = readFileSync(lighting, 'utf8')
  const lines = text.split('\n')
  const scoreLine = lines.findIndex((line) => line.includes('id="nicrew"') && line.includes('score={8.5}'))
  assert.ok(scoreLine >= 0, 'Nicrew Classic score line missing')
  const priceLine = lines[scoreLine + 5] || ''
  assert.match(priceLine, /price="\$20–35"/)
  assert.match(priceLine, /ctaText="Shop Nicrew LED/)
  assert.equal(findingsIn(lighting, text).length, 0)
  assert.ok(findingsIn('apps/fish-com/src/app/reviews/some-new-page/page.tsx', lines[scoreLine]).length > 0)
})

test('clinical body-condition and grimace scales are allowlisted', () => {
  const paths = [
    'apps/dog-com/src/app/tools/dog-body-condition-score/page.tsx',
    'apps/dog-com/src/app/guides/dog-body-condition-score/page.tsx',
    'apps/dog-com/src/app/tools/dog-grimace-scale/Calculator.tsx',
    'apps/ferret-com/src/app/tools/ferret-body-condition-score/page.tsx',
    'apps/ferret-com/src/app/tools/ferret-grimace-scale/page.tsx',
    'apps/horses-com/src/app/tools/body-condition-score/page.tsx',
    'apps/horses-com/src/app/tools/horse-grimace-scale/page.tsx',
    'apps/vets-co/src/app/tools/cat-body-condition-score/page.tsx',
    'apps/vets-co/src/app/tools/cat-grimace-scale/page.tsx',
  ]
  for (const file of paths) {
    assert.equal(isAllowed(file), true, file)
    assert.equal(findingsIn(file, 'score={9.1}\nratingValue: 8\nscored 4.5\n9.0/10').length, 0)
  }
})

test('a new page fails on each forbidden pattern', () => {
  const file = 'apps/dog-com/src/app/reviews/new-score/page.tsx'
  const samples = [
    ['score={}', 'score={9.1}'],
    ['ratingValue', 'ratingValue: 9.1,'],
    ['scored N.N', 'scored 9.1 and marked Best'],
    ['N.N/10', 'Editorial score 9.1/10'],
    ['editorialScore template', 'Score: {t.editorialScore}/10'],
  ]
  for (const [name, line] of samples) {
    const hits = findingsIn(file, line)
    assert.equal(hits.length, 1, name)
    assert.equal(hits[0].name, name)
  }
})

test('funnels are not exempt', () => {
  const file = 'apps/dog-com/src/app/(funnels)/pet-insurance/page.tsx'
  assert.equal(isAllowed(file), false)
  assert.equal(findingsIn(file, 'score={9.2}').length, 1)
  assert.equal(findingsIn(file, 'Score: {c.editorialScore}/10').length, 1)
})

test('stored editorialScore fields and clinical totals are not template scores', () => {
  const file = 'apps/dog-com/src/data/insurance-carriers.ts'
  assert.equal(findingsIn(file, 'editorialScore: 9.2,').length, 0)
  assert.equal(findingsIn(file, 'b.editorialScore - a.editorialScore').length, 0)
  assert.equal(findingsIn('apps/dog-com/src/app/tools/dog-grimace-scale/page.tsx', 'about 4/10').length, 0)
})
