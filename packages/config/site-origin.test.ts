import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { crossSiteHref, siteBaseUrl, siteOriginMode } from './site-origin.mjs'

describe('site origins', () => {
  it('uses the apex unless the build is a Vercel preview', () => {
    assert.equal(siteOriginMode({}), 'apex')
    assert.equal(siteOriginMode({ VERCEL_ENV: 'production' }), 'apex')
    assert.equal(siteOriginMode({ VERCEL_ENV: 'preview' }), 'preview')
    assert.equal(siteOriginMode({ NEXT_PUBLIC_SITE_ORIGIN_MODE: 'preview' }), 'preview')
  })

  it('builds dog and vets links from that one table', () => {
    assert.equal(siteBaseUrl('dog-com', {}), 'https://dog.com')
    assert.equal(
      siteBaseUrl('dog-com', { VERCEL_ENV: 'preview' }),
      'https://dog-com-three.vercel.app',
    )
    assert.equal(
      crossSiteHref('vets-co', '/reviews/best-pet-insurance', {}),
      'https://vets.co/reviews/best-pet-insurance',
    )
    assert.equal(
      crossSiteHref('vets-co', '/reviews/best-pet-insurance', { VERCEL_ENV: 'preview' }),
      'https://carlo-os-vets-co.vercel.app/reviews/best-pet-insurance',
    )
    assert.equal(
      crossSiteHref('fish-com', 'health', { VERCEL_ENV: 'preview' }),
      'https://carlo-os-fish-com.vercel.app/health',
    )
  })
})
