import test from 'node:test'
import assert from 'node:assert/strict'
import {
  checkGrok,
  checkPage,
  isRedirectAlias,
  markerHits,
} from './content-stub-guard.mjs'

const grokTail = `
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

test('a comment that forbids PLACEHOLDER is not a marker', () => {
  const src = '{/* ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}\n<p>Real guide copy about cage size and bedding for two ferrets.</p>'
  assert.deepEqual(markerHits(src), [])
})

test('rendered PLACEHOLDER and lorem ipsum fail', () => {
  assert.deepEqual(markerHits('<p>PLACEHOLDER</p>'), ['PLACEHOLDER'])
  assert.deepEqual(markerHits('<p>lorem ipsum dolor</p>'), ['lorem ipsum'])
})

test('redirect aliases are not stubs', () => {
  const src = `import { redirect } from 'next/navigation'\nexport default function Page(){ redirect('/tools/cost-calculator') }\n`
  assert.equal(isRedirectAlias(src), true)
  assert.deepEqual(checkPage('ferret-com/tools/ferret-cost-calculator', src), [])
})

test('a short tool page is a stub', () => {
  const src = 'export default function Page(){ return <p>Soon</p> }\n'
  const problems = checkPage('dog-com/tools/dog-crate-size-calculator', src)
  assert.ok(problems.some((line) => line.includes('stub floor')))
})

test('GROK.md must keep its closing sections and a real body', () => {
  assert.ok(checkGrok('# GROK\n\n## Live policy\nshort').some((line) => line.includes('missing')))
  const padded = `${'horse owner reference guide '.repeat(400)}\n${grokTail}`
  assert.deepEqual(checkGrok(padded), [])
  assert.ok(checkGrok(`${padded}\nPLACEHOLDER`).some((line) => line.includes('PLACEHOLDER')))
})
