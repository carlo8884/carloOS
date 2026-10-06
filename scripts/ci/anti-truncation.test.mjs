import assert from 'node:assert/strict'
import test from 'node:test'
import { allowsRemoval, inScope, problems } from './anti-truncation.mjs'

const page = 'apps/dog-com/src/app/health/example/page.tsx'
const article = `export default function Page() {\n${'line\n'.repeat(100)}}`

test('a drop of more than 40% fails, and exactly 40% does not', () => {
  const cut = `export default function Page() {\n${'line\n'.repeat(59)}}`
  const keep = `export default function Page() {\n${'line\n'.repeat(80)}}`
  assert.equal(problems({ path: page, oldText: article, newText: cut, body: '' }).length > 0, true)
  assert.equal(problems({ path: page, oldText: article, newText: keep, body: '' }).length, 0)
})

test('deleting an exported page route fails even when the phrase is absent', () => {
  const found = problems({ path: page, oldText: article, newText: '', body: '' })
  assert.ok(found.some((line) => line.includes('removed an exported page route')))
})

test('an intentional removal line in the PR body allows the shrink', () => {
  const found = problems({
    path: page,
    oldText: article,
    newText: '',
    body: 'Notes\nintentional removal of the duplicate guide\n',
  })
  assert.deepEqual(found, [])
  assert.equal(allowsRemoval('not this'), false)
})

test('scope is page.tsx and content files on the five sites, not email sequences', () => {
  assert.equal(inScope('apps/vets-co/src/app/health/page.tsx'), true)
  assert.equal(inScope('apps/ferret-com/src/content/guides/note.md'), true)
  assert.equal(inScope('apps/ferret-com/src/content/email-sequences/keeper/01.md'), false)
  assert.equal(inScope('apps/lizard-com/src/app/page.tsx'), false)
  assert.equal(inScope('apps/dog-com/src/app/(funnels)/quote/page.tsx'), false)
})
