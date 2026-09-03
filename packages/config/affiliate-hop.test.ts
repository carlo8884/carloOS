import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  resolveAffiliateHop,
  stripPlaceholder,
  resolveTag,
  isChewyHopLive,
  visibleChewyHref,
  amazonFallbackFromChewyHref,
  visibleShopHref,
  VETS_PET_INSURANCE_REVIEW,
} from './affiliate-hop'

const routes = {
  amazon: {
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
  },
  'amazon-brand': {
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
  },
  chewy: {
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
  },
  'chewy-brand': {
    name: 'Chewy',
    template: 'https://chewy.com/s?query={sku}&utm_source=carloOS&aff=PLACEHOLDER',
  },
}

describe('resolveAffiliateHop', () => {
  it('never writes PLACEHOLDER into Location', () => {
    const hop = resolveAffiliateHop({
      vendor: 'chewy',
      sku: 'greenies',
      routes,
      env: {},
    })
    assert.equal(hop.target.includes('PLACEHOLDER'), false)
    assert.equal(hop.target, 'https://www.chewy.com')
  })

  it('falls amazon-brand back to AFF_AMAZON_TAG', () => {
    const hop = resolveAffiliateHop({
      vendor: 'amazon-brand',
      sku: 'ferret cage',
      routes,
      env: { AFF_AMAZON_TAG: 'boltonpets20-20ls' },
    })
    assert.equal(hop.envVarName, 'AFF_AMAZON_TAG')
    assert.equal(hop.target.includes('boltonpets20-20ls'), true)
    assert.equal(hop.target.includes('PLACEHOLDER'), false)
    assert.equal(hop.target.includes('ferret%20cage'), true)
  })

  it('keeps a working /go/amazon/{asin} hop', () => {
    const hop = resolveAffiliateHop({
      vendor: 'amazon',
      sku: 'B00TESTASIN',
      routes,
      env: { AFF_AMAZON_TAG: 'boltonpets20-20ls' },
    })
    assert.equal(hop.target, 'https://amazon.com/dp/B00TESTASIN?tag=boltonpets20-20ls')
  })

  it('empty amazon-brand and chewy hop to partner home, not 404', () => {
    const brand = resolveAffiliateHop({ vendor: 'amazon-brand', sku: '', routes, env: { AFF_AMAZON_TAG: 'x' } })
    const chewy = resolveAffiliateHop({ vendor: 'chewy', sku: '', routes, env: {} })
    assert.equal(brand.target, 'https://www.amazon.com')
    assert.equal(chewy.target, 'https://www.chewy.com')
  })

  it('unknown vendor 302s to Amazon home', () => {
    const hop = resolveAffiliateHop({ vendor: 'not-a-vendor', sku: 'x', routes, env: {} })
    assert.equal(hop.target, 'https://www.amazon.com')
  })

  it('strips leftover PLACEHOLDER query pairs', () => {
    assert.equal(stripPlaceholder('https://chewy.com/s?query=x&aff=PLACEHOLDER').includes('PLACEHOLDER'), false)
  })

  it('chewy-brand uses AFF_CHEWY_TAG fallback', () => {
    const tag = resolveTag('chewy-brand', { AFF_CHEWY_TAG: 'chewy-live' })
    assert.equal(tag.tag, 'chewy-live')
  })

  it('hides Chewy hrefs when the hop tag is empty', () => {
    assert.equal(isChewyHopLive({}), false)
    assert.equal(visibleChewyHref('/go/chewy-brand/ferret+cage', {}), undefined)
    assert.equal(visibleChewyHref('#', { AFF_CHEWY_TAG: 'x' }), undefined)
    assert.equal(
      visibleChewyHref('/go/chewy-brand/ferret+cage', { AFF_CHEWY_BRAND_TAG: 'live' }),
      '/go/chewy-brand/ferret+cage',
    )
    assert.equal(visibleChewyHref('/go/amazon-brand/ferret+cage', {}), '/go/amazon-brand/ferret+cage')
  })

  it('falls Chewy-brand search hops to amazon-brand when Chewy is empty', () => {
    assert.equal(
      amazonFallbackFromChewyHref('/go/chewy-brand/aqueon+10+gallon+aquarium?s=reviews-best-nano-tanks'),
      '/go/amazon-brand/aqueon+10+gallon+aquarium?s=reviews-best-nano-tanks',
    )
    assert.equal(amazonFallbackFromChewyHref('/go/chewy/connect'), undefined)
    assert.equal(visibleShopHref('/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food', {}), '/go/amazon-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food')
    assert.equal(visibleShopHref('/go/chewy/connect', {}), undefined)
    assert.equal(
      visibleShopHref('/go/chewy-brand/aqueon+20+gallon+long+aquarium', { AFF_CHEWY_BRAND_TAG: 'live' }),
      '/go/chewy-brand/aqueon+20+gallon+long+aquarium',
    )
    assert.equal(visibleShopHref('/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters', {}), '/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters')
    assert.equal(visibleShopHref('#', {}), undefined)
  })

  it('keeps Dog insurance quotes on the Vets.co review', () => {
    assert.equal(VETS_PET_INSURANCE_REVIEW, 'https://vets.co/reviews/best-pet-insurance')
  })
})
