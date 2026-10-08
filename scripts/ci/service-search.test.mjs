import assert from 'node:assert/strict'
import { test } from 'node:test'
import { serviceSearches, stripCodeComments } from './service-search.mjs'

test('an Amazon search for Chewy Connect is a service hop', () => {
  const hits = serviceSearches(
    'href="/go/amazon-brand/chewy+connect+with+a+vet?s=reviews-askvet-vs-connect-guide"',
  )
  assert.deepEqual(hits, ['chewy+connect+with+a+vet'])
})

test('an Amazon search for an insurer fails', () => {
  const hits = serviceSearches('href="/go/amazon-brand/trupanion+pet+insurance?s=reviews"')
  assert.deepEqual(hits, ['trupanion+pet+insurance'])
})

test('a vet-visit product search stays', () => {
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/high+value+vet+visit+treats"'), [])
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/soft+sided+vet+visit+carrier"'), [])
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/digital+veterinary+thermometer"'), [])
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/wide+platform+veterinary+floor+scale"'), [])
})

test('a bare vet-visit search fails', () => {
  assert.deepEqual(serviceSearches('href="/go/amazon/vet+visit"'), ['vet+visit'])
})

test('a product search and a vet-wrap search stay', () => {
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/horse+brushing+boots"'), [])
  assert.deepEqual(serviceSearches('href="/go/amazon-brand/vet+wrap+cohesive+bandage"'), [])
})

test('a comment that names a service search does not count', () => {
  const src = stripCodeComments(
    '// href="/go/amazon-brand/chewy+connect+with+a+vet"\nhref="/go/amazon-brand/nylon+horse+halter"',
  )
  assert.deepEqual(serviceSearches(src), [])
})
