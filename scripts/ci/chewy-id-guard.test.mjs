import assert from 'node:assert/strict'
import { test } from 'node:test'
import { badChewyHops, stripCodeComments } from './chewy-id-guard.mjs'

test('a word-slug /go/chewy hop is not a product id', () => {
  const hits = badChewyHops('[Get it](https://dog.com/go/chewy/frisco-flat-lead-6ft)')
  assert.deepEqual(hits, ['frisco-flat-lead-6ft'])
})

test('Chewy Connect and a numeric id pass', () => {
  const hits = badChewyHops('href="/go/chewy/connect?s=telehealth" href="/go/chewy/123456"')
  assert.deepEqual(hits, [])
})

test('a chewy-brand search is not a product hop', () => {
  const hits = badChewyHops('href="/go/chewy-brand/frisco+flat+lead?s=email"')
  assert.deepEqual(hits, [])
})

test('a comment that names a word slug does not count', () => {
  const src = stripCodeComments('// never link /go/chewy/puppy-starter-kit\nhref="/go/chewy/connect"')
  assert.deepEqual(badChewyHops(src), [])
})
