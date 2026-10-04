import assert from 'node:assert/strict'
import { test } from 'node:test'
import { hubQueryMatches } from './hub-search.ts'

test('empty query keeps every card', () => {
  assert.equal(hubQueryMatches('', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('   ', 'Best Dog Crates', 'Housing'), true)
})

test('matches title or topic, and requires every word', () => {
  assert.equal(hubQueryMatches('crate', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('housing', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('winter blanket', 'Best Winter Horse Blankets', 'Turnout'), true)
  assert.equal(hubQueryMatches('winter saddle', 'Best Winter Horse Blankets', 'Turnout'), false)
})

test('ignores letter case', () => {
  assert.equal(hubQueryMatches('TRUPANION', 'Trupanion vs Healthy Paws', 'Insurance'), true)
})
