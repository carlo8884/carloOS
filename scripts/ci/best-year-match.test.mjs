import assert from 'node:assert/strict'
import { test } from 'node:test'
import { pastBestLabels } from './best-year-match.mjs'

test('a 2025 best-of label fails in 2026', () => {
  const hits = pastBestLabels(`<h1>Best Equine Supplements 2025</h1>`, 2026)
  assert.equal(hits.length, 1)
  assert.equal(hits[0].year, 2025)
})

test('best of 2024 fails', () => {
  const hits = pastBestLabels(`title: 'best of 2024'`, 2026)
  assert.equal(hits.length, 1)
})

test('the current year passes', () => {
  assert.equal(pastBestLabels(`<h1>Best Winter Horse Blankets 2026</h1>`, 2026).length, 0)
})

test('a publish date is not a best-of label', () => {
  const src = `publishedAt: 'May 2025'\npublishedAt: '2025-05-01T00:00:00Z'`
  assert.equal(pastBestLabels(src, 2026).length, 0)
})

test('a citation year is not a best-of label', () => {
  assert.equal(pastBestLabels(`ECEIM 2024 consensus statement`, 2026).length, 0)
})

test('a commented label is not live', () => {
  const src = `{/* <h1>Best English Saddles 2025</h1> */}`
  assert.equal(pastBestLabels(src, 2026).length, 0)
})
