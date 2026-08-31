import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isEmailUnderHeroPath } from './email-under-hero'

describe('isEmailUnderHeroPath', () => {
  it('matches money hubs and not random spokes', () => {
    assert.equal(isEmailUnderHeroPath('/health'), true)
    assert.equal(isEmailUnderHeroPath('/directory'), true)
    assert.equal(isEmailUnderHeroPath('/find-a-vet'), true)
    assert.equal(isEmailUnderHeroPath('/trainers'), false)
    assert.equal(isEmailUnderHeroPath('/join/pro'), false)
    assert.equal(isEmailUnderHeroPath('/reviews/best-dog-food'), false)
    assert.equal(isEmailUnderHeroPath('/faq'), false)
  })

  it('lets fish exclude homepage and reviews hub', () => {
    assert.equal(isEmailUnderHeroPath('/', ['/', '/reviews']), false)
    assert.equal(isEmailUnderHeroPath('/reviews', ['/', '/reviews']), false)
    assert.equal(isEmailUnderHeroPath('/species', ['/', '/reviews']), true)
  })
})
