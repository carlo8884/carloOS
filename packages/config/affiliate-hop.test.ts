import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import {
  consultLink,
  hopCommissionReady,
  resolveAffiliateHop,
  stripPlaceholder,
  resolveTag,
  amazonAssociateTag,
  isChewyHopLive,
  visibleChewyHref,
  amazonFallbackFromChewyHref,
  visibleShopHref,
  shopCtaLabel,
  partnerTagReady,
  partnerNeededLabel,
  partnerQuoteHeld,
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

  it('copies AFF_AMAZON_TAG verbatim and appends nothing', () => {
    assert.equal(amazonAssociateTag({ AFF_AMAZON_TAG: 'boltonpets20-20ls' }), 'boltonpets20-20ls')
    assert.equal(amazonAssociateTag({ AFF_AMAZON_TAG: 'boltonpets20-20' }), 'boltonpets20-20')
    assert.equal(amazonAssociateTag({}), '')
    const hop = resolveAffiliateHop({
      vendor: 'amazon',
      sku: 'B00TESTASIN',
      routes,
      env: { AFF_AMAZON_TAG: 'boltonpets20-20' },
    })
    assert.equal(hop.target, 'https://amazon.com/dp/B00TESTASIN?tag=boltonpets20-20')
  })

  it('treats + in a search sku as a space so Amazon does not search for plus signs', () => {
    const hop = resolveAffiliateHop({
      vendor: 'amazon-brand',
      sku: 'fi+series+3+dog+collar',
      routes,
      env: { AFF_AMAZON_TAG: 'boltonpets20-20ls' },
    })
    assert.equal(
      hop.target,
      'https://amazon.com/s?k=fi%20series%203%20dog%20collar&tag=boltonpets20-20ls',
    )
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
    assert.equal(visibleShopHref('/go/chewy/connect', { AFF_CHEWY_TAG: 'live' }), '/go/chewy/connect')
    assert.equal(visibleShopHref('/go/chewy-pharmacy/heartgard?s=rx', {}), '/find-a-vet')
    assert.equal(
      visibleShopHref('/go/chewy-pharmacy/heartgard?s=rx', { AFF_CHEWY_PHARMACY_TAG: 'live' }),
      '/go/chewy-pharmacy/heartgard?s=rx',
    )
    assert.equal(
      visibleShopHref('/go/chewy-brand/aqueon+20+gallon+long+aquarium', { AFF_CHEWY_BRAND_TAG: 'live' }),
      '/go/chewy-brand/aqueon+20+gallon+long+aquarium',
    )
    assert.equal(visibleShopHref('/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters', {}), '/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters')
    assert.equal(visibleShopHref('#', {}), undefined)
  })

  it('names the retailer the Chewy-brand hop actually opens', () => {
    const href = '/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food'
    const amazonLabel = 'Check price of Royal Canin dry dog food on Amazon'
    assert.equal(shopCtaLabel(href, amazonLabel, {}), amazonLabel)
    assert.equal(
      shopCtaLabel(href, amazonLabel, { AFF_CHEWY_BRAND_TAG: 'live' }),
      'Check price of Royal Canin dry dog food on Chewy',
    )
    assert.equal(
      shopCtaLabel(href, 'Check price of Royal Canin dry dog food on Chewy', {}),
      amazonLabel,
    )
    assert.equal(
      shopCtaLabel('/go/amazon-brand/fi+series+3+dog+collar', 'Check price of the Fi Series 3 collar on Amazon', {}),
      'Check price of the Fi Series 3 collar on Amazon',
    )
    assert.equal(
      shopCtaLabel('/go/chewy/connect?s=telehealth', 'Check Chewy Connect price on Chewy', {}),
      'Check Chewy Connect price on Chewy',
    )
  })

  it('keeps Dog insurance quotes on the Vets.co review', () => {
    assert.equal(VETS_PET_INSURANCE_REVIEW, 'https://vets.co/reviews/best-pet-insurance')
  })

  it('strips a leading PLACEHOLDER param without leaving a bare ampersand', () => {
    assert.equal(
      stripPlaceholder('https://www.trupanion.com/enrollments/get-a-quote?refid=PLACEHOLDER&campaign=home'),
      'https://www.trupanion.com/enrollments/get-a-quote?campaign=home',
    )
  })

  it('sends a storefront /home sku to the merchant origin', () => {
    const routes = {
      embark: {
        name: 'Embark',
        template: 'https://embarkvet.com/products/{sku}?refid=PLACEHOLDER',
        requiresSku: true,
      },
      smartpak: {
        name: 'SmartPak',
        template: 'https://www.smartpakequine.com/search/search?SearchTerm={sku}&cm_mmc=PLACEHOLDER',
        requiresSku: true,
      },
    }
    assert.equal(
      resolveAffiliateHop({ vendor: 'embark', sku: 'home', routes, env: {} }).target,
      'https://embarkvet.com',
    )
    assert.equal(
      resolveAffiliateHop({ vendor: 'smartpak', sku: 'home', routes, env: {} }).target,
      'https://www.smartpakequine.com',
    )
  })

  it('sends an untagged insurance hop to the quote page', () => {
    const insurance = {
      trupanion: {
        name: 'Trupanion',
        template: 'https://www.trupanion.com/enrollments/get-a-quote?refid=PLACEHOLDER&campaign={sku}',
        requiresSku: false,
      },
    }
    const hop = resolveAffiliateHop({ vendor: 'trupanion', sku: 'home', routes: insurance, env: {} })
    assert.equal(hop.tagResolved, false)
    assert.equal(hop.envVarName, 'AFF_TRUPANION_TAG')
    assert.equal(hop.target, 'https://www.trupanion.com/enrollments/get-a-quote?campaign=home')
    assert.equal(hop.target.includes('PLACEHOLDER'), false)
  })

  it('substitutes AFF_TRUPANION_TAG on the quote page', () => {
    const insurance = {
      trupanion: {
        name: 'Trupanion',
        template: 'https://www.trupanion.com/enrollments/get-a-quote?refid=PLACEHOLDER&campaign={sku}',
        requiresSku: false,
      },
    }
    const hop = resolveAffiliateHop({
      vendor: 'trupanion',
      sku: 'home',
      routes: insurance,
      env: { AFF_TRUPANION_TAG: 'tru-live' },
    })
    assert.equal(hop.tagResolved, true)
    assert.equal(hop.envVarName, 'AFF_TRUPANION_TAG')
    assert.equal(
      hop.target,
      'https://www.trupanion.com/enrollments/get-a-quote?refid=tru-live&campaign=home',
    )
  })

  it('holds Trupanion, Healthy Paws, and Embrace quotes until their tags are set', () => {
    const href = '/go/trupanion/home?s=reviews-best-pet-insurance'
    assert.equal(partnerTagReady(href, {}), false)
    assert.equal(partnerTagReady(href, { AFF_TRUPANION_TAG: 'tru-live' }), true)
    assert.equal(partnerTagReady('/go/healthy-paws/home?s=reviews-best-pet-insurance', {}), false)
    assert.equal(partnerTagReady('/go/embrace/home?s=reviews-best-pet-insurance', { AFF_EMBRACE_TAG: 'emb-live' }), true)
    assert.equal(partnerTagReady('/go/amazon-brand/horse+hoof+pick', {}), true)
    assert.equal(partnerNeededLabel('Get a Trupanion quote →'), 'Quotes not available here yet')
    assert.equal(partnerQuoteHeld(href, {}), true)
    assert.equal(partnerQuoteHeld(href, { AFF_TRUPANION_TAG: 'tru-live' }), false)
    assert.equal(partnerQuoteHeld('/go/amazon-brand/horse+hoof+pick', {}), false)
    assert.equal(partnerQuoteHeld(undefined, {}), false)
    assert.equal(resolveTag('trupanion', {}).tag, '')
  })

  it('keeps unset Vetster, AskVet, and Chewy Connect as plain links', () => {
    const vetster = consultLink('/go/vetster/telehealth?s=telehealth', {})
    assert.equal(vetster?.attributed, false)
    assert.equal(vetster?.href, 'https://vetster.com/?campaign=telehealth')
    assert.equal(vetster?.href.includes('PLACEHOLDER'), false)
    const askvet = consultLink('/go/askvet/telehealth?s=reviews-askvet-vs-connect-guide', {})
    assert.equal(askvet?.href, 'https://askvet.app/?campaign=telehealth')
    const chewy = consultLink('/go/chewy/connect?s=telehealth', {})
    assert.equal(chewy?.href, 'https://chewy.com/connect-with-a-vet?campaign=connect')
    assert.equal(chewy?.href.includes('PLACEHOLDER'), false)
    assert.equal(consultLink('/go/amazon-brand/pet+first+aid+kit', {}), null)
  })

  it('switches a consult hop to /go once the env tag exists', () => {
    const href = '/go/vetster/telehealth?s=telehealth'
    assert.equal(consultLink(href, { AFF_VETSTER_TAG: 'vet-live' })?.attributed, true)
    assert.equal(consultLink(href, { AFF_VETSTER_TAG: 'vet-live' })?.href, href)
    assert.equal(consultLink('/go/askvet/telehealth?s=telehealth', { AFF_ASKVET_TAG: 'ask-live' })?.href, '/go/askvet/telehealth?s=telehealth')
    assert.equal(consultLink('/go/chewy/connect?s=telehealth', { AFF_CHEWY_TAG: 'chewy-live' })?.href, '/go/chewy/connect?s=telehealth')
    const routes = {
      chewy: {
        name: 'Chewy Connect',
        template: 'https://chewy.com/connect-with-a-vet?refid=PLACEHOLDER&campaign={sku}',
        requiresSku: false,
      },
      vetster: {
        name: 'Vetster',
        template: 'https://vetster.com/?refid=PLACEHOLDER&campaign={sku}',
        requiresSku: false,
      },
    }
    const plain = resolveAffiliateHop({ vendor: 'chewy', sku: 'connect', routes, env: {} })
    assert.equal(plain.target, 'https://chewy.com/connect-with-a-vet?campaign=connect')
    assert.equal(plain.target.includes('PLACEHOLDER'), false)
    const tagged = resolveAffiliateHop({ vendor: 'vetster', sku: 'telehealth', routes, env: { AFF_VETSTER_TAG: 'vet-live' } })
    assert.equal(tagged.target, 'https://vetster.com/?refid=vet-live&campaign=telehealth')
    const otherChewy = resolveAffiliateHop({ vendor: 'chewy', sku: 'kibble', routes, env: {} })
    assert.equal(otherChewy.target, 'https://www.chewy.com')
  })

  it('matches the vets consult templates without editing affiliate-routes', () => {
    const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
    const src = readFileSync(join(root, 'apps/vets-co/src/data/affiliate-routes.ts'), 'utf8')
    assert.match(src, /https:\/\/vetster\.com\/\?refid=PLACEHOLDER&campaign=\{sku\}/)
    assert.match(src, /https:\/\/askvet\.app\/\?refid=PLACEHOLDER&campaign=\{sku\}/)
    assert.match(src, /https:\/\/chewy\.com\/connect-with-a-vet\?refid=PLACEHOLDER&campaign=\{sku\}/)
    assert.match(src, /https:\/\/lemonade\.com\/pet\?affid=PLACEHOLDER&offer=\{sku\}/)
    assert.match(src, /https:\/\/get\.pumpkin\.care\/quote\?refid=PLACEHOLDER&campaign=\{sku\}/)
    assert.match(src, /https:\/\/www\.petsbest\.com\/enroll\?affid=PLACEHOLDER&campaign=\{sku\}/)
  })

  it('keeps unset Lemonade, Pumpkin, and Pets Best quotes as plain links', () => {
    const lemonade = consultLink('/go/lemonade/home?s=insurance-when-to-enroll', {})
    assert.equal(lemonade?.attributed, false)
    assert.equal(lemonade?.href, 'https://lemonade.com/pet?offer=home')
    assert.equal(lemonade?.href.includes('PLACEHOLDER'), false)
    const pumpkin = consultLink('/go/pumpkin/home?s=insurance-wellness-plans-vs-insurance', {})
    assert.equal(pumpkin?.href, 'https://get.pumpkin.care/quote?campaign=home')
    const pets = consultLink('/go/pets-best/home?s=insurance-deductibles-reimbursement', {})
    assert.equal(pets?.href, 'https://www.petsbest.com/enroll?campaign=home')
    assert.equal(pets?.href.includes('PLACEHOLDER'), false)
    const estimator = consultLink('/go/lemonade/estimator?s=insurance-reimbursement-estimator', {})
    assert.equal(estimator?.href, 'https://lemonade.com/pet?offer=estimator')
  })

  it('switches a quote hop back to /go once that carrier tag is set', () => {
    const href = '/go/lemonade/home?s=insurance-when-to-enroll'
    assert.equal(consultLink(href, { AFF_LEMONADE_TAG: 'lem-live' })?.attributed, true)
    assert.equal(consultLink(href, { AFF_LEMONADE_TAG: 'lem-live' })?.href, href)
    assert.equal(consultLink('/go/pumpkin/home?s=x', { AFF_PUMPKIN_TAG: 'pum-live' })?.href, '/go/pumpkin/home?s=x')
    assert.equal(consultLink('/go/pets-best/home?s=x', { AFF_PETS_BEST_TAG: 'pb-live' })?.href, '/go/pets-best/home?s=x')
  })

  it('hides a commission claim when the hop tag is unset', () => {
    assert.equal(hopCommissionReady('/go/lemonade/home?s=x', {}), false)
    assert.equal(hopCommissionReady('/go/amazon-brand/pet+first+aid+kit', {}), false)
    assert.equal(hopCommissionReady('/go/amazon-brand/pet+first+aid+kit', { AFF_AMAZON_TAG: 'carloos-ci-20' }), true)
    assert.equal(hopCommissionReady('/go/spot/home?s=x', {}), false)
    assert.equal(hopCommissionReady('/go/spot/home?s=x', { AFF_SPOT_TAG: 'spot-live' }), true)
    assert.equal(hopCommissionReady('https://lemonade.com/pet?offer=home', {}), false)
    assert.equal(hopCommissionReady('/go/trupanion/home?s=x', {}), false)
  })
})
