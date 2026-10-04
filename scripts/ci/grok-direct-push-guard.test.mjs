import test from 'node:test'
import assert from 'node:assert/strict'
import { checkGrok } from './content-stub-guard.mjs'
import { findGoodGrokSha, planGrokPush, RESTORE_SUBJECT } from './grok-direct-push-guard.mjs'

const intact = `${'horse owner reference guide '.repeat(400)}
## Currently underway
notes
## Test and deployment status
notes
## Next planned priority
notes
## Carlo-only blockers
notes
## Live policy
notes
`

test('an intact GROK.md needs no restore', () => {
  assert.deepEqual(checkGrok(intact), [])
  assert.deepEqual(
    planGrokPush({ problems: [], headSubject: 'log an hour', goodSha: 'abc' }),
    { action: 'pass' },
  )
})

test('a PLACEHOLDER stub restores the newest passing ancestor', () => {
  const blobs = new Map([
    ['new', 'PLACEHOLDER\n'],
    ['mid', '# GROK\n\nshort hour only\n'],
    ['old', intact],
  ])
  const good = findGoodGrokSha(['new', 'mid', 'old'], (sha) => blobs.get(sha) ?? null)
  assert.equal(good.sha, 'old')
  assert.deepEqual(
    planGrokPush({
      problems: checkGrok('PLACEHOLDER\n'),
      headSubject: 'restore GROK.md history and keep 2026-10-04 13:03 PDT hour',
      goodSha: good.sha,
    }),
    { action: 'restore', sha: 'old' },
  )
})

test('a restore commit that is still a stub does not push again', () => {
  const plan = planGrokPush({
    problems: ['GROK.md contains PLACEHOLDER'],
    headSubject: RESTORE_SUBJECT,
    goodSha: 'old',
  })
  assert.equal(plan.action, 'fail')
  assert.match(plan.reason, /another revert/)
})

test('no passing ancestor means fail without inventing a file', () => {
  const good = findGoodGrokSha(['bad'], () => 'PLACEHOLDER\n')
  assert.equal(good, null)
  const plan = planGrokPush({
    problems: ['GROK.md contains PLACEHOLDER'],
    headSubject: 'log an hour',
    goodSha: null,
  })
  assert.equal(plan.action, 'fail')
  assert.match(plan.reason, /invent/)
})
