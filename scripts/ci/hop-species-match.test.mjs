import assert from 'node:assert/strict'
import { test } from 'node:test'
import { labelMisses, speciesMisses } from './hop-species-match.mjs'

test('a ferret page that never says dog cannot shop a dog crate', () => {
  const src = `
    <p>A ferret needs a tall cage.</p>
    <ShopCtas amazonHref="/go/amazon-brand/dog+crate?s=ferret-cage" amazonLabel="Browse dog crates on Amazon" />
  `
  const hits = speciesMisses(src, 'ferret-com')
  assert.equal(hits.length, 1)
  assert.deepEqual(hits[0].missing, ['dog'])
})

test('a ferret page that names kitten clippers may shop that search', () => {
  const src = `
    <p>Clippers made for cats, kittens, or small dogs are the right scale.</p>
    <ShopCtas amazonHref="/go/amazon-brand/cat+kitten+nail+clippers?s=care-nail-trimming" amazonLabel="Browse cat and kitten nail clippers on Amazon" />
  `
  assert.equal(speciesMisses(src, 'ferret-com').length, 0)
})

test('a dog page may shop dog food without a second species check', () => {
  const src = `<ShopCtas amazonHref="/go/amazon-brand/dry+dog+food?s=reviews" amazonLabel="Browse dry dog food on Amazon" />`
  assert.equal(speciesMisses(src, 'dog-com').length, 0)
})

test('a commented hop is not live', () => {
  const src = `{/* <ShopCtas amazonHref="/go/amazon-brand/dog+crate?s=x" amazonLabel="Browse dog crates on Amazon" /> */}`
  assert.equal(speciesMisses(src, 'ferret-com').length, 0)
})

test('a heater label cannot point at a filter search', () => {
  const src = `<ShopCtas amazonHref="/go/amazon-brand/aquarium+filter?s=heater" amazonLabel="Browse aquarium heaters on Amazon" />`
  const hits = labelMisses(src)
  assert.equal(hits.length, 1)
  assert.match(hits[0].query, /filter/)
})

test('a matching label passes', () => {
  const src = `<ShopCtas amazonHref="/go/amazon-brand/eheim+jager+heater?s=heaters" amazonLabel="Browse Eheim Jager heaters on Amazon" />`
  assert.equal(labelMisses(src).length, 0)
})
