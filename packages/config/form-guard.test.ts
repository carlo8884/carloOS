import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  honeypotTripped,
  isJunkEmail,
  isJunkLabel,
  isJunkMessage,
  isJunkOffer,
  isJunkPhone,
  resetFormGuardForTests,
  takeRateLimit,
} from './form-guard'

describe('form guard', () => {
  it('ignores an empty honeypot and catches a filled one', () => {
    assert.equal(honeypotTripped({ company_website: '' }), false)
    assert.equal(honeypotTripped({ company_website: '   ' }), false)
    assert.equal(honeypotTripped({ company_website: 'https://spam.test' }), true)
  })

  it('rejects obvious junk addresses and keeps a normal one', () => {
    assert.equal(isJunkEmail('owner@example.com'), false)
    assert.equal(isJunkEmail('ada@example.com'), false)
    assert.equal(isJunkEmail('test@test.com'), true)
    assert.equal(isJunkEmail('asdf@asdf.com'), true)
    assert.equal(isJunkEmail('aaaaaa@bbbb.com'), true)
    assert.equal(isJunkEmail('real.owner@mailinator.com'), true)
    assert.equal(isJunkEmail('not-an-email'), true)
  })

  it('rejects throwaway names, notes, phones, and offers', () => {
    assert.equal(isJunkLabel('Ada'), false)
    assert.equal(isJunkLabel('test'), true)
    assert.equal(isJunkMessage('A real note'), false)
    assert.equal(isJunkMessage('asdf'), true)
    assert.equal(isJunkMessage('https://spam.test/buy'), true)
    assert.equal(isJunkPhone(''), false)
    assert.equal(isJunkPhone('555-010-1234'), false)
    assert.equal(isJunkPhone('0000000000'), true)
    assert.equal(isJunkOffer(''), false)
    assert.equal(isJunkOffer('1500'), false)
    assert.equal(isJunkOffer('asdf'), true)
  })

  it('limits repeats from the same key', () => {
    resetFormGuardForTests()
    const now = 1_000_000
    assert.equal(takeRateLimit('inquire:203.0.113.8', { limit: 2, now }).ok, true)
    assert.equal(takeRateLimit('inquire:203.0.113.8', { limit: 2, now: now + 1 }).ok, true)
    const blocked = takeRateLimit('inquire:203.0.113.8', { limit: 2, now: now + 2 })
    assert.equal(blocked.ok, false)
    assert.equal(takeRateLimit('inquire:203.0.113.9', { limit: 2, now: now + 2 }).ok, true)
  })
})
