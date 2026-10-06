import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { resolveAffiliateHop, visibleShopHref, type AffiliateRoute } from './affiliate-hop'
import { affiliateRoutes as dogRoutes } from '../../apps/dog-com/src/data/affiliate-routes'
import { affiliateRoutes as fishRoutes } from '../../apps/fish-com/src/data/affiliate-routes'
import { affiliateRoutes as horsesRoutes } from '../../apps/horses-com/src/data/affiliate-routes'
import { affiliateRoutes as vetsRoutes } from '../../apps/vets-co/src/data/affiliate-routes'
import { affiliateRoutes as ferretRoutes } from '../../apps/ferret-com/src/data/affiliate-routes'

/**
 * Carlo will set these four env vars later. Setting one must send that
 * partner's /go hop to the tagged partner URL. Unset must keep today's hop:
 * Chewy product search falls back to Amazon, and insurance quotes open
 * with the id param removed.
 */
const SITES: Record<string, Record<string, AffiliateRoute>> = {
  'dog-com': dogRoutes,
  'fish-com': fishRoutes,
  'horses-com': horsesRoutes,
  'vets-co': vetsRoutes,
  'ferret-com': ferretRoutes,
}

const CHEWY_TAG = 'chewy-live'
const TRU_TAG = 'tru-live'
const HP_TAG = 'hp-live'
const EMBRACE_TAG = 'emb-live'

function hop(site: string, vendor: string, sku: string, env: NodeJS.ProcessEnv) {
  return resolveAffiliateHop({ vendor, sku, routes: SITES[site], env })
}

describe('affiliate id matrix', () => {
  it('AFF_CHEWY_TAG tags Chewy search hops and does not fall back to Amazon', () => {
    const shop = '/go/chewy-brand/greenies?s=reviews-sample'
    for (const site of ['dog-com', 'fish-com', 'ferret-com']) {
      const unset = hop(site, 'chewy-brand', 'greenies', {})
      assert.equal(unset.tagResolved, false)
      assert.equal(unset.envVarName, 'AFF_CHEWY_BRAND_TAG')
      assert.equal(unset.target, 'https://www.chewy.com')
      assert.equal(visibleShopHref(shop, {}), '/go/amazon-brand/greenies?s=reviews-sample')

      const tagged = hop(site, 'chewy-brand', 'greenies', { AFF_CHEWY_TAG: CHEWY_TAG })
      assert.equal(tagged.tagResolved, true)
      assert.equal(tagged.envVarName, 'AFF_CHEWY_TAG')
      assert.equal(
        tagged.target,
        `https://chewy.com/s?query=greenies&utm_source=carloOS&aff=${CHEWY_TAG}`,
      )
      assert.equal(tagged.target.includes('amazon.com'), false)
      assert.equal(tagged.target.includes('PLACEHOLDER'), false)
      assert.equal(visibleShopHref(shop, { AFF_CHEWY_TAG: CHEWY_TAG }), shop)
    }

    const horsesUnset = hop('horses-com', 'chewy', 'greenies', {})
    assert.equal(horsesUnset.target, 'https://www.chewy.com')
    assert.equal(visibleShopHref('/go/chewy/greenies?s=tack-sample', {}), undefined)
    const horsesTagged = hop('horses-com', 'chewy', 'greenies', { AFF_CHEWY_TAG: CHEWY_TAG })
    assert.equal(horsesTagged.envVarName, 'AFF_CHEWY_TAG')
    assert.equal(
      horsesTagged.target,
      `https://chewy.com/s?query=greenies&utm_source=carloOS&aff=${CHEWY_TAG}`,
    )
    assert.equal(
      visibleShopHref('/go/chewy/greenies?s=tack-sample', { AFF_CHEWY_TAG: CHEWY_TAG }),
      '/go/chewy/greenies?s=tack-sample',
    )

    const connect = '/go/chewy/connect?s=telehealth'
    const vetsUnset = hop('vets-co', 'chewy', 'connect', {})
    assert.equal(vetsUnset.target, 'https://www.chewy.com/pethealth/connect-with-a-vet')
    assert.equal(vetsUnset.target.includes('PLACEHOLDER'), false)
    assert.equal(visibleShopHref(connect, {}), undefined)
    const vetsTagged = hop('vets-co', 'chewy', 'connect', { AFF_CHEWY_TAG: CHEWY_TAG })
    assert.equal(vetsTagged.envVarName, 'AFF_CHEWY_TAG')
    assert.equal(
      vetsTagged.target,
      `https://chewy.com/connect-with-a-vet?refid=${CHEWY_TAG}&campaign=connect`,
    )
    assert.equal(vetsTagged.target.includes('amazon.com'), false)
    assert.equal(visibleShopHref(connect, { AFF_CHEWY_TAG: CHEWY_TAG }), connect)
  })

  it('AFF_TRUPANION_TAG tags the quote url and unset keeps the untagged quote', () => {
    for (const site of ['dog-com', 'vets-co']) {
      const unset = hop(site, 'trupanion', 'home', {})
      assert.equal(unset.tagResolved, false)
      assert.equal(unset.envVarName, 'AFF_TRUPANION_TAG')
      assert.equal(unset.target, 'https://www.trupanion.com/enrollments/get-a-quote?campaign=home')
      assert.equal(unset.target.includes('PLACEHOLDER'), false)

      const tagged = hop(site, 'trupanion', 'home', { AFF_TRUPANION_TAG: TRU_TAG })
      assert.equal(tagged.tagResolved, true)
      assert.equal(tagged.envVarName, 'AFF_TRUPANION_TAG')
      assert.equal(
        tagged.target,
        `https://www.trupanion.com/enrollments/get-a-quote?refid=${TRU_TAG}&campaign=home`,
      )
      assert.equal(tagged.target.includes('amazon.com'), false)
      assert.equal(tagged.target.includes('chewy.com'), false)
    }
    const chewyStillUnset = hop('dog-com', 'chewy-brand', 'greenies', { AFF_TRUPANION_TAG: TRU_TAG })
    assert.equal(chewyStillUnset.target, 'https://www.chewy.com')
    assert.equal(
      visibleShopHref('/go/chewy-brand/greenies?s=reviews-sample', { AFF_TRUPANION_TAG: TRU_TAG }),
      '/go/amazon-brand/greenies?s=reviews-sample',
    )
  })

  it('AFF_HEALTHY_PAWS_TAG tags affid and unset drops only that param', () => {
    for (const site of ['dog-com', 'vets-co']) {
      const unset = hop(site, 'healthy-paws', 'home', {})
      assert.equal(unset.envVarName, 'AFF_HEALTHY_PAWS_TAG')
      assert.equal(unset.target, 'https://www.healthypawspetinsurance.com/quote?pid=home')

      const tagged = hop(site, 'healthy-paws', 'home', { AFF_HEALTHY_PAWS_TAG: HP_TAG })
      assert.equal(tagged.envVarName, 'AFF_HEALTHY_PAWS_TAG')
      assert.equal(
        tagged.target,
        `https://www.healthypawspetinsurance.com/quote?affid=${HP_TAG}&pid=home`,
      )
      assert.equal(tagged.target.includes('amazon.com'), false)
    }
  })

  it('AFF_EMBRACE_TAG tags source and unset drops only that param', () => {
    for (const site of ['dog-com', 'vets-co']) {
      const unset = hop(site, 'embrace', 'home', {})
      assert.equal(unset.envVarName, 'AFF_EMBRACE_TAG')
      assert.equal(unset.target, 'https://quote.embracepetinsurance.com/?campaign=home')

      const tagged = hop(site, 'embrace', 'home', { AFF_EMBRACE_TAG: EMBRACE_TAG })
      assert.equal(tagged.envVarName, 'AFF_EMBRACE_TAG')
      assert.equal(
        tagged.target,
        `https://quote.embracepetinsurance.com/?source=${EMBRACE_TAG}&campaign=home`,
      )
      assert.equal(tagged.target.includes('amazon.com'), false)
    }
  })

  it('a set Chewy tag does not rewrite an insurance quote', () => {
    const tagged = hop('vets-co', 'trupanion', 'home', { AFF_CHEWY_TAG: CHEWY_TAG })
    assert.equal(tagged.target, 'https://www.trupanion.com/enrollments/get-a-quote?campaign=home')
    assert.equal(tagged.target.includes(CHEWY_TAG), false)
  })
})
