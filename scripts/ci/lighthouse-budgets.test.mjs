import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import {
  BUDGETS,
  EARNING_SITES,
  FLOORS,
  LAYOUT_PAGES,
  MONEY_PAGES,
  budgetProblems,
  needsRetry,
  scoreProblems,
} from './lighthouse-budgets-lib.mjs'

function claimAuditFirstFive(site) {
  const src = readFileSync(new URL('./claim-audit.mjs', import.meta.url), 'utf8')
  const block = src.split(`'${site}': [`)[1]?.split('],')[0] ?? ''
  return [...block.matchAll(/'([^']+)'/g)].map((match) => match[1]).slice(0, 5)
}

test('each earning site audits its first five money pages', () => {
  assert.deepEqual(Object.keys(MONEY_PAGES), EARNING_SITES)
  for (const site of EARNING_SITES) {
    assert.equal(MONEY_PAGES[site].length, 5)
    assert.deepEqual(MONEY_PAGES[site], claimAuditFirstFive(site))
  }
})

test('gift guides, search, and the not-found page are budgeted too', () => {
  assert.deepEqual(Object.keys(LAYOUT_PAGES), EARNING_SITES)
  for (const site of EARNING_SITES) {
    assert.deepEqual(LAYOUT_PAGES[site], [
      'reviews/november-december-gift-guide',
      'search',
      'this-page-does-not-exist',
    ])
    for (const slug of LAYOUT_PAGES[site]) {
      assert.equal(MONEY_PAGES[site].includes(slug), false)
    }
  }
})

test('budgets are not looser than the floors', () => {
  assert.deepEqual(budgetProblems(BUDGETS), [])
  assert.deepEqual(budgetProblems({
    performanceMin: 0.94,
    accessibilityMin: 1,
    clsMax: 0.05,
    lcpMaxMs: 2800,
  }), ['performance minimum 0.94 is below 0.95'])
  assert.ok(budgetProblems({ ...FLOORS, accessibilityMin: 0.96 }).length > 0)
  assert.ok(budgetProblems({ ...FLOORS, clsMax: 0.06 }).length > 0)
  assert.ok(budgetProblems({ ...FLOORS, lcpMaxMs: 2801 }).length > 0)
})

test('a healthy mobile run passes and a regression fails', () => {
  assert.deepEqual(scoreProblems({
    performance: 0.95,
    accessibility: 1,
    cls: 0.05,
    lcp: 2800,
  }), [])
  const regressed = scoreProblems({
    performance: 0.94,
    accessibility: 0.97,
    cls: 0.06,
    lcp: 2801,
    runtimeError: 'ERRORED_DOCUMENT_REQUEST',
  })
  assert.match(regressed.join('\n'), /performance/)
  assert.match(regressed.join('\n'), /accessibility/)
  assert.match(regressed.join('\n'), /CLS/)
  assert.match(regressed.join('\n'), /LCP/)
  assert.match(regressed.join('\n'), /ERRORED_DOCUMENT_REQUEST/)
})

test('a failing run is retried twice', () => {
  assert.equal(needsRetry(['performance'], 1, 3), true)
  assert.equal(needsRetry(['performance'], 2, 3), true)
  assert.equal(needsRetry(['performance'], 3, 3), false)
  assert.equal(needsRetry([], 1, 3), false)
})

test('the lighthouse workflow runs one mobile pass, not three', () => {
  const workflow = readFileSync(new URL('../../.github/workflows/lighthouse.yml', import.meta.url), 'utf8')
  assert.match(workflow, /lighthouse-budgets\.mjs/)
  assert.doesNotMatch(workflow, /numberOfRuns/)
  assert.match(workflow, /dog-com/)
  assert.match(workflow, /ferret-com/)
})
