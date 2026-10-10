import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  dogInquireCaptureEnabled,
  emailCaptureSurface,
  fishSubscribeDeliveryEnabled,
  fishSubscribeFormVisible,
  inquireFormDefaultOpen,
  inquireOfferOpen,
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

  it('keeps fish, horses, and ferret inquire email fields off while FormSubmit is down', () => {
    const inbox = { INQUIRE_EMAIL: 'inbox@example.com', NEXT_PUBLIC_INQUIRE_EMAIL: 'inbox@example.com' }
    for (const site of ['Fish.com', 'Horses.com', 'Ferret.com']) {
      assert.equal(inquireOfferOpen(site, inbox), false)
      assert.equal(inquireFormDefaultOpen(site, inbox), false)
    }
    assert.equal(inquireOfferOpen('Vets.co', {}), false)
    assert.equal(inquireFormDefaultOpen('Vets.co', {}), false)
    assert.equal(inquireOfferOpen('Dog.com', {}), false)
    assert.equal(
      inquireOfferOpen('Vets.co', {
        NEXT_PUBLIC_VETS_INQUIRE_CAPTURE: 'true',
        INQUIRE_EMAIL: 'inbox@example.com',
      }),
      true,
    )
  })

  it('renders under-hero captures as on-page magnets, not email inputs', () => {
    const underHero = [
      ['dog-com', 'tools-dog-crate-size-under-hero'],
      ['dog-com', 'tools-new-puppy-checklist-under-hero'],
      ['vets-co', 'emergency-triage-card-under-hero'],
      ['ferret-com', 'first-year-schedule-under-hero'],
    ] as const
    for (const [siteId, source] of underHero) {
      assert.equal(emailCaptureSurface({ siteId, source, hasResource: true, env: {} }), 'magnet')
    }
    assert.equal(
      emailCaptureSurface({
        siteId: 'fish-com',
        source: 'tools-stocking-calculator-under-hero',
        captureOpen: false,
        hasResource: true,
        env: {},
      }),
      'magnet',
    )
    assert.equal(
      emailCaptureSurface({
        siteId: 'fish-com',
        source: 'tools-stocking-calculator-under-hero',
        captureOpen: true,
        hasResource: true,
        env: {},
      }),
      'form',
    )
    assert.equal(
      emailCaptureSurface({
        siteId: 'dog-com',
        source: 'reviews-front-clip-vs-back-clip-guide',
        addressOnly: true,
        hasChecklist: true,
        guideAddress: false,
        env: {},
      }),
      'checklist',
    )
  })
})
