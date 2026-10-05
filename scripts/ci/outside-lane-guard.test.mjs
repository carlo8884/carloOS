import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { guardProblems, isHourLogBlock, singleInsertion } from './outside-lane-guard.mjs'

const BEFORE = `# GROK.md — CEO lane log (preview only)

## 2026-10-04 ~19:03 PDT hour
1. Left alone this hour.

---
`

const HOUR = `## 2026-10-04 ~23:04 PDT hour
1. Fish.com species eyebrow photo chip. Left alone this hour.

Carlo offline until next week. Recap logged here.

---

`

test('grok/ branches fail and cursor, bot, and normal branches pass', () => {
  assert.deepEqual(
    guardProblems({ headRef: 'grok/fish-species-eyebrow', before: BEFORE, after: BEFORE }).map((p) => p.includes('grok/')),
    [true],
  )
  assert.deepEqual(guardProblems({ headRef: 'Grok/Other', before: BEFORE, after: BEFORE }), [
    'head branch Grok/Other is an outside grok/ lane',
  ])
  for (const headRef of ['cursor/outside-lane-guard-6ba7', 'bot/dashboard-sync', 'feature/footer-fix', '']) {
    assert.deepEqual(guardProblems({ headRef, before: BEFORE, after: BEFORE }), [])
  }
})

test('a pure hour-log insertion fails on any branch', () => {
  const after = `# GROK.md — CEO lane log (preview only)\n\n${HOUR}${BEFORE.slice(BEFORE.indexOf('## 2026-10-04 ~19:03'))}`
  assert.equal(isHourLogBlock(singleInsertion(BEFORE, after)), true)
  const problems = guardProblems({ headRef: 'feature/hour-only', before: BEFORE, after })
  assert.deepEqual(problems, ['GROK.md change is only an appended hour-log block'])
  const both = guardProblems({ headRef: 'grok/fish-species-eyebrow', before: BEFORE, after })
  assert.equal(both.length, 2)
})

test('a real GROK.md edit is not treated as an hour log', () => {
  const after = BEFORE.replace('Left alone this hour.', 'The inquire form stays shared.')
  assert.equal(singleInsertion(BEFORE, after), null)
  assert.deepEqual(guardProblems({ headRef: 'cursor/real-edit-6ba7', before: BEFORE, after }), [])
})

test('the workflow job is named Outside-lane branch guard and runs on every pull request', () => {
  const yml = readFileSync(new URL('../../.github/workflows/outside-lane-guard.yml', import.meta.url), 'utf8')
  assert.match(yml, /name: Outside-lane branch guard/)
  assert.match(yml, /pull_request:/)
  assert.match(yml, /branches: \[main\]/)
  assert.doesNotMatch(yml, /paths:/)
  assert.match(yml, /outside-lane-guard\.mjs/)
})
