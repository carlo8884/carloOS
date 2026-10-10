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
  assert.match(yml, /outside-lane:\n\s+name: Outside-lane branch guard/)
  assert.match(yml, /pull_request:/)
  assert.match(yml, /branches: \[main\]/)
  assert.doesNotMatch(yml, /paths:/)
  assert.match(yml, /outside-lane-guard\.mjs/)
  assert.match(yml, /PR_TITLE:/)
  assert.match(yml, /PR_BODY:/)
})

const CHIP_FILES = ['apps/fish-com/src/components/HomeGuides.tsx']
const CHIP_PATCH = `diff --git a/apps/fish-com/src/components/HomeGuides.tsx b/apps/fish-com/src/components/HomeGuides.tsx
+                <span className="relative h-9 w-14">
+                  <StockImage manifestKey="fish-com:category-planted" alt="Lush aquatic plants" />
+                </span>
`
const CHIP_TITLE = 'fish: photo-chip the tank-planning eyebrow'
const CHIP_BODY = 'GROK.md left untouched so the outside-lane hour-log guard does not fire.'

test('a fish homepage photo chip fails, and cursor/ and bot/ stay green', () => {
  const failed = guardProblems({
    headRef: 'fish/tank-planning-eyebrow',
    before: BEFORE,
    after: BEFORE,
    files: CHIP_FILES,
    patch: CHIP_PATCH,
    title: CHIP_TITLE,
    body: CHIP_BODY,
  })
  assert.equal(failed.length, 1)
  assert.match(failed[0], /outside cursor\/ and bot\//)
  assert.match(failed[0], /photo chip/)
  for (const headRef of ['cursor/ceo-lane-guard-6ba7', 'bot/dashboard-sync']) {
    assert.deepEqual(
      guardProblems({
        headRef,
        before: BEFORE,
        after: BEFORE,
        files: CHIP_FILES,
        patch: CHIP_PATCH,
        title: CHIP_TITLE,
        body: CHIP_BODY,
      }),
      [],
    )
  }
})

test('a non-cursor branch fails on a homepage-only diff or on CEO-lane copy', () => {
  const homepage = guardProblems({
    headRef: 'fish/home-typo',
    before: BEFORE,
    after: BEFORE,
    files: ['apps/fish-com/src/app/page.tsx'],
    title: 'Fix a homepage typo',
    body: 'No chip.',
  })
  assert.match(homepage[0], /homepage, hero, or eyebrow files/)

  const copyOnly = guardProblems({
    headRef: 'fish/tank-planning-eyebrow',
    before: BEFORE,
    after: BEFORE,
    files: ['apps/fish-com/src/app/setup/planted-tank-setup/page.tsx'],
    title: 'Setup notes',
    body: 'GROK.md left untouched',
  })
  assert.match(copyOnly[0], /CEO-lane pattern/)

  assert.deepEqual(
    guardProblems({
      headRef: 'feature/footer-fix',
      before: BEFORE,
      after: BEFORE,
      files: ['apps/dog-com/src/app/nutrition/senior-dog-nutrition/page.tsx'],
      title: 'Name the senior food button',
      body: 'The label matches the search.',
    }),
    [],
  )
})
