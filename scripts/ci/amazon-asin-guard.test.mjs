import assert from 'node:assert/strict'
import { test } from 'node:test'
import { nonAsinAmazonHops, stripCodeComments } from './amazon-asin-guard.mjs'

test('a word-slug /go/amazon hop is not an ASIN', () => {
  const hits = nonAsinAmazonHops('[Get it](https://fish.com/go/amazon/api-master-test-kit)')
  assert.deepEqual(hits, ['api-master-test-kit'])
})

test('a 10-character ASIN hop passes', () => {
  const hits = nonAsinAmazonHops('href="/go/amazon/B00DSY0Q3S?s=reviews"')
  assert.deepEqual(hits, [])
})

test('an amazon-brand search is not an amazon product hop', () => {
  const hits = nonAsinAmazonHops(
    'href="/go/amazon-brand/api+freshwater+master+test+kit?s=email-cycling-guide"',
  )
  assert.deepEqual(hits, [])
})

test('a comment that names a word slug does not count', () => {
  const src = stripCodeComments('// never link /go/amazon/api-master-test-kit\nhref="/go/amazon/B00DSY0Q3S"')
  assert.deepEqual(nonAsinAmazonHops(src), [])
})
