import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { CARRIERS } from '../../apps/vets-co/src/data/insurance-carriers.ts'

function carrier(slug: string) {
  const row = CARRIERS.find((c) => c.slug === slug)
  assert.ok(row, slug)
  return row!
}

describe('coverage finder option lock', () => {
  it('marks ManyPets as not accepting new US policies with no options', () => {
    const row = carrier('manypets')
    assert.match(row.tagline, /not accepting new US policies/i)
    assert.deepEqual(row.reimbursementOptions, [])
    assert.deepEqual(row.deductibleOptions, [])
    assert.deepEqual(row.annualLimitOptions, [])
  })

  it('keeps Pumpkin options that the current Pumpkin page prints', () => {
    const row = carrier('pumpkin-pet')
    assert.deepEqual(row.reimbursementOptions, [80, 90])
    assert.deepEqual(row.deductibleOptions, [100, 250, 500, 1000])
    assert.deepEqual(row.annualLimitOptions, [5000, 10000, 20000, 'unlimited'])
    assert.equal(row.waitingPeriods.accident, '14 days or less')
    assert.equal(row.waitingPeriods.illness, '14 days or less')
    assert.equal(row.waitingPeriods.orthopedic, '14 days or less')
  })

  it('drops Figo option values the current dog page does not print', () => {
    const row = carrier('figo')
    assert.deepEqual(row.reimbursementOptions, [100])
    assert.deepEqual(row.deductibleOptions, [])
    assert.deepEqual(row.annualLimitOptions, [5000, 10000, 'unlimited'])
  })
})
