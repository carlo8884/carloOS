import assert from 'node:assert/strict'
import { test } from 'node:test'
import { amazonBrowseLabel, amazonButtonLabel } from './amazon-browse-label.ts'

test('names the button after the search the hop already opens', () => {
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/horse+hoof+pick?s=breeds-quarter-horse'),
    'Browse horse hoof pick on Amazon →',
  )
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/ferret+litter?s=care-litter-training'),
    'Browse ferret litter on Amazon →',
  )
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/aquarium%20filter?s=reviews'),
    'Browse aquarium filter on Amazon →',
  )
})

test('keeps brand names that are already in the search', () => {
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/eheim+aquarium+heater?s=equipment'),
    'Browse Eheim aquarium heater on Amazon →',
  )
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/circle+y+western+show+saddle?s=disciplines'),
    'Browse Circle Y western show saddle on Amazon →',
  )
  assert.equal(
    amazonBrowseLabel('/go/amazon-brand/daily+racing+form?s=racing'),
    'Browse Daily Racing Form on Amazon →',
  )
})

test('leaves an explicit product label alone', () => {
  assert.equal(
    amazonButtonLabel(
      '/go/amazon-brand/equestrian+riding+helmet?s=halters-and-lead-ropes',
      'Browse nylon halters on Amazon →',
    ),
    'Browse nylon halters on Amazon →',
  )
})

test('rewrites only the generic shop label', () => {
  assert.equal(
    amazonButtonLabel('/go/amazon-brand/horse+saddle?s=disciplines-dressage', 'Shop on Amazon'),
    'Browse horse saddle on Amazon →',
  )
  assert.equal(
    amazonButtonLabel('/go/amazon-brand/horse+saddle?s=disciplines-dressage', 'Shop on Amazon →'),
    'Browse horse saddle on Amazon →',
  )
  assert.equal(amazonButtonLabel(undefined, 'Shop on Amazon →'), 'Shop on Amazon →')
})
