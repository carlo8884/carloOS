import assert from 'node:assert/strict'
import test from 'node:test'
import { ageProblems, cutoffDate, pricedLines } from './price-stamp-age.mjs'

const now = new Date('2026-10-07T23:30:00Z')

test('cutoff is 120 UTC days before today', () => {
  assert.equal(cutoffDate(now), '2026-06-09')
})

test('example lines and comments are not priced figures', () => {
  const text = ['Example: a $45 quote', '  // $10 note', 'real $20 fee'].join('\n')
  assert.deepEqual(pricedLines(text), ['real $20 fee'])
})

test('a stamp exactly 120 days old passes and the day before fails', () => {
  const rel = 'apps/dog-com/src/app/reviews/widget/page.tsx'
  const fresh = 'href="/go/amazon-brand/widget"\npriceAsOf="2026-06-09"\nthe fee is $20\n'
  const stale = 'href="/go/amazon-brand/widget"\npriceAsOf="2026-06-08"\nthe fee is $20\n'
  assert.deepEqual(ageProblems([rel], () => fresh, now), [])
  assert.equal(ageProblems([rel], () => stale, now).length, 1)
})

test('a missing stamp fails and a labeled example does not', () => {
  const rel = 'apps/dog-com/src/app/tools/widget/page.tsx'
  const missing = 'href="/go/amazon-brand/widget"\nthe fee is $20\n'
  const example = 'href="/go/amazon-brand/widget"\nExample: the fee is $20\n'
  assert.equal(ageProblems([rel], () => missing, now).length, 1)
  assert.deepEqual(ageProblems([rel], () => example, now), [])
})

test('a page with no shop hop is ignored', () => {
  const rel = 'apps/dog-com/src/app/health/note/page.tsx'
  const text = 'the fee is $20\n'
  assert.deepEqual(ageProblems([rel], () => text, now), [])
})
