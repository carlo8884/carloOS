import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  dogInquireCaptureEnabled,
  fishSubscribeDeliveryEnabled,
  fishSubscribeFormVisible,
  vetsInquireCaptureEnabled,
} from './capture-flags'

describe('capture flags', () => {
  it('keeps fish subscribe hidden and undelivered until the flag and an inbox exist', () => {
    assert.equal(fishSubscribeFormVisible({}), false)
    assert.equal(fishSubscribeDeliveryEnabled({ INQUIRE_EMAIL: 'inbox@example.com' }), false)
    assert.equal(
      fishSubscribeFormVisible({
        NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE: 'true',
        NEXT_PUBLIC_INQUIRE_EMAIL: 'inbox@example.com',
      }),
      true,
    )
    assert.equal(
      fishSubscribeDeliveryEnabled({
        NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE: 'true',
        INQUIRE_EMAIL: 'inbox@example.com',
      }),
      true,
    )
    assert.equal(
      fishSubscribeDeliveryEnabled({ NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE: 'true' }),
      false,
    )
  })

  it('keeps dog and vets inquire closed until each flag and an inbox exist', () => {
    assert.equal(dogInquireCaptureEnabled({ INQUIRE_EMAIL: 'inbox@example.com' }), false)
    assert.equal(vetsInquireCaptureEnabled({}), false)
    assert.equal(
      dogInquireCaptureEnabled({
        NEXT_PUBLIC_DOG_INQUIRE_CAPTURE: 'true',
        INQUIRE_EMAIL: 'inbox@example.com',
      }),
      true,
    )
    assert.equal(
      vetsInquireCaptureEnabled({ NEXT_PUBLIC_VETS_INQUIRE_CAPTURE: 'true' }),
      false,
    )
    assert.equal(
      vetsInquireCaptureEnabled({
        NEXT_PUBLIC_VETS_INQUIRE_CAPTURE: 'true',
        INQUIRE_EMAIL: 'inbox@example.com',
      }),
      true,
    )
  })
})
