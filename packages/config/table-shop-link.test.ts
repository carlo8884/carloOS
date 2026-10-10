import test from 'node:test'
import assert from 'node:assert/strict'
import { tableShopLink } from './affiliate-hop.ts'

const empty = {} as NodeJS.ProcessEnv

test('a Chewy search row falls back to the same Amazon search and keeps attribution', () => {
  const link = tableShopLink(
    '/go/chewy-brand/petsafe+easy+walk+harness?s=reviews-best-dog-harnesses',
    'PetSafe Easy Walk',
    empty,
  )
  assert.deepEqual(link, {
    href: '/go/amazon-brand/petsafe+easy+walk+harness?s=reviews-best-dog-harnesses',
    label: 'PetSafe Easy Walk on Amazon',
  })
})

test('a live Chewy tag keeps the Chewy hop and the Chewy label', () => {
  const link = tableShopLink(
    '/go/chewy-brand/petsafe+easy+walk+harness?s=reviews-best-dog-harnesses',
    'PetSafe Easy Walk',
    { AFF_CHEWY_TAG: 'live' },
  )
  assert.equal(link?.href, '/go/chewy-brand/petsafe+easy+walk+harness?s=reviews-best-dog-harnesses')
  assert.equal(link?.label, 'PetSafe Easy Walk on Chewy')
})

test('a store hop keeps its retailer and its query', () => {
  const link = tableShopLink(
    '/go/smartpak/rambo-original-turnout?s=reviews-best-winter-horse-blankets',
    'Rambo Original',
    empty,
  )
  assert.deepEqual(link, {
    href: '/go/smartpak/rambo-original-turnout?s=reviews-best-winter-horse-blankets',
    label: 'Rambo Original on SmartPak',
  })
})

test('an insurance home hop stays /home and names a quote', () => {
  const link = tableShopLink('/go/trupanion/home?s=reviews-best-pet-insurance', 'Trupanion', empty)
  assert.equal(link?.href, '/go/trupanion/home?s=reviews-best-pet-insurance')
  assert.equal(link?.label, 'Trupanion quote')
})

test('a Chewy Connect hop is not swapped to AskVet while the tag is unset', () => {
  assert.equal(tableShopLink('/go/chewy/connect?s=telehealth', 'Chewy Connect', empty), null)
  const live = tableShopLink('/go/chewy/connect?s=telehealth', 'Chewy Connect', { AFF_CHEWY_TAG: 'live' })
  assert.equal(live?.href, '/go/chewy/connect?s=telehealth')
  assert.equal(live?.label, 'Chewy Connect on Chewy')
})

test('a Chewy pharmacy hop falls back to the clinic finder until a Chewy tag exists', () => {
  assert.deepEqual(tableShopLink('/go/chewy-pharmacy/heartgard?s=rx', 'Heartgard', empty), {
    href: '/find-a-vet',
    label: 'Find a clinic that can prescribe →',
  })
  const live = tableShopLink('/go/chewy-pharmacy/heartgard?s=rx', 'Heartgard', { AFF_CHEWY_TAG: 'live' })
  assert.equal(live?.href, '/go/chewy-pharmacy/heartgard?s=rx')
})
