import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { affiliateClickParams, emailLandingCollectUrl, emailLandingHopClickUrl, shopPlacement } from './affiliate-click.ts'

const UI = join(fileURLToPath(new URL('.', import.meta.url)), '../components')

/** Shared shop components. Each one marks the anchor the click listener reads. */
const SHOP_COMPONENTS: Array<{ file: string; placement: string }> = [
  { file: 'PrimaryHop.tsx', placement: 'hero' },
  { file: 'TableShopLink.tsx', placement: 'table' },
  { file: 'ShopCtas.tsx', placement: 'card' },
  { file: 'ResultPick.tsx', placement: 'card' },
  { file: 'InlinePartnerQuote.tsx', placement: 'card' },
  { file: 'GuideChecklist.tsx', placement: 'card' },
  { file: 'AffiliateLink.tsx', placement: 'card' },
]

test('every shop component marks a placement the click listener emits', () => {
  const listener = readFileSync(join(UI, 'AffiliateClickListener.tsx'), 'utf8')
  assert.match(listener, /trackEvent\(\s*'affiliate_click'/)
  for (const field of ['site', 'page', 'source', 'partner', 'product', 'placement']) {
    assert.match(listener, new RegExp(`${field}:`), field)
  }
  const review = readFileSync(join(UI, 'ReviewCard.tsx'), 'utf8')
  assert.match(review, /data-shop-placement=\{!editorial && \(href\.startsWith\('\/go\/'\) \|\| href\.startsWith\('http'\)\) \? 'card' : undefined\}/)
  assert.match(review, /data-shop-placement="quick-pick"/)
  const experiment = readFileSync(join(UI, 'ExperimentPrimaryHop.tsx'), 'utf8')
  assert.match(experiment, /<PrimaryHop/)
  for (const component of SHOP_COMPONENTS) {
    const src = readFileSync(join(UI, component.file), 'utf8')
    assert.ok(
      src.includes(`data-shop-placement="${component.placement}"`) ||
        src.includes(`'${component.placement}'`) && src.includes('data-shop-placement'),
      component.file,
    )
    const event = affiliateClickParams({
      site: 'dog-com',
      page: '/reviews/best-dog-crates',
      href: '/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates',
      marked: component.placement,
    })
    assert.ok(event, component.file)
    assert.equal(event.site, 'dog-com')
    assert.equal(event.page, '/reviews/best-dog-crates')
    assert.equal(event.partner, 'amazon-brand')
    assert.equal(event.vendor, 'amazon-brand')
    assert.equal(event.product, 'midwest icrate dog crate')
    assert.equal(event.placement, component.placement)
    assert.equal(event.source, 'reviews-best-dog-crates')
    assert.equal(event.slot, component.placement)
    assert.equal(event.destination_type, 'search')
    assert.equal(event.destination, 'midwest icrate dog crate')
  }
  const quick = affiliateClickParams({
    site: 'dog-com',
    page: '/reviews/best-dog-crates',
    href: '/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates',
    marked: 'quick-pick',
  })
  assert.equal(quick?.placement, 'quick-pick')
})

test('email source is email landing, and a plain hop still records one card click', () => {
  assert.equal(shopPlacement({ marked: 'hero', source: 'email-cycling-guide' }), 'email landing')
  const email = affiliateClickParams({
    site: 'fish-com',
    page: '/go/amazon-brand/api+freshwater+master+test+kit',
    href: '/go/amazon-brand/api+freshwater+master+test+kit?s=email-cycling-guide',
    marked: 'hero',
  })
  assert.equal(email?.placement, 'email landing')
  assert.equal(email?.product, 'api freshwater master test kit')
  const plain = affiliateClickParams({
    site: 'ferret-com',
    page: '/reviews/best-ferret-cage',
    href: '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=reviews-best-ferret-cage',
    inTable: true,
  })
  assert.equal(plain?.placement, 'table')
  assert.equal(
    affiliateClickParams({
      site: 'dog-com',
      page: '/guides/dog-body-condition-score',
      href: '/guides/dog-body-condition-score',
    }),
    null,
  )
})

test('an outbound partner link still emits partner and product', () => {
  const event = affiliateClickParams({
    site: 'vets-co',
    page: '/telehealth',
    href: 'https://vetster.com/?campaign=telehealth',
    marked: 'card',
    text: 'Visit Vetster',
  })
  assert.equal(event?.partner, 'vetster.com')
  assert.equal(event?.vendor, 'vetster.com')
  assert.equal(event?.product, 'Visit Vetster')
  assert.equal(event?.placement, 'card')
  assert.equal(event?.page, '/telehealth')
})

test('direct email /go hits build one GA4 collect URL from the existing measurement ID', () => {
  assert.equal(
    emailLandingCollectUrl(undefined, {
      site: 'fish-com',
      page: '/go/amazon-brand/seachem+prime',
      source: 'email-cycling-guide',
      partner: 'amazon-brand',
      product: 'seachem prime',
      clientId: 'cid-test',
    }),
    null,
  )
  assert.equal(
    emailLandingCollectUrl('G-XXXXXXXXXX', {
      site: 'fish-com',
      page: '/go/amazon-brand/seachem+prime',
      source: 'email-cycling-guide',
      partner: 'amazon-brand',
      product: 'seachem prime',
      clientId: 'cid-test',
    }),
    null,
  )
  assert.equal(
    emailLandingCollectUrl('G-TESTONLY', {
      site: 'fish-com',
      page: '/go/amazon-brand/seachem+prime',
      source: 'reviews-best-aquarium-heaters',
      partner: 'amazon-brand',
      product: 'seachem prime',
      clientId: 'cid-test',
    }),
    null,
  )
  const url = emailLandingCollectUrl('G-TESTONLY', {
    site: 'fish-com',
    page: '/go/amazon-brand/seachem+prime',
    source: 'email-cycling-guide',
    partner: 'amazon-brand',
    product: 'seachem prime',
    clientId: 'cid-test',
  })
  assert.ok(url)
  const parsed = new URL(url)
  assert.equal(parsed.origin + parsed.pathname, 'https://www.google-analytics.com/g/collect')
  assert.equal(parsed.searchParams.get('en'), 'affiliate_click')
  assert.equal(parsed.searchParams.get('tid'), 'G-TESTONLY')
  assert.equal(parsed.searchParams.get('ep.site'), 'fish-com')
  assert.equal(parsed.searchParams.get('ep.page'), '/go/amazon-brand/seachem+prime')
  assert.equal(parsed.searchParams.get('ep.partner'), 'amazon-brand')
  assert.equal(parsed.searchParams.get('ep.vendor'), 'amazon-brand')
  assert.equal(parsed.searchParams.get('ep.product'), 'seachem prime')
  assert.equal(parsed.searchParams.get('ep.placement'), 'email landing')
  assert.equal(parsed.searchParams.get('ep.slot'), 'email landing')
  assert.equal(parsed.searchParams.get('ep.destination_type'), 'search')
  assert.equal(parsed.searchParams.get('ep.destination'), 'seachem prime')
  assert.equal(parsed.searchParams.get('ep.source'), 'email-cycling-guide')
  const hop = emailLandingHopClickUrl('G-TESTONLY', {
    site: 'fish-com',
    page: '/go/amazon-brand/seachem+prime',
    source: 'email-cycling-guide',
    partner: 'amazon-brand',
    product: 'seachem prime',
    clientId: 'cid-test',
  })
  assert.ok(hop)
  const hopUrl = new URL(hop)
  assert.equal(hopUrl.searchParams.get('en'), 'hop_click')
  assert.equal(hopUrl.searchParams.get('ep.card_id'), 'email landing')
  assert.equal(hopUrl.searchParams.get('ep.partner'), 'amazon-brand')
  assert.equal(emailLandingHopClickUrl('G-TESTONLY', {
    site: 'fish-com',
    page: '/go/amazon-brand/seachem+prime',
    source: 'reviews-best-aquarium-heaters',
    partner: 'amazon-brand',
    product: 'seachem prime',
    clientId: 'cid-test',
  }), null)
})

test('an ASIN hop, a search hop, and a recovery suggestion name the destination', () => {
  const asin = affiliateClickParams({
    site: 'ferret-com',
    page: '/reviews/best-ferret-cage',
    href: '/go/amazon/B0054U8UGW?s=reviews-best-ferret-cage',
    slot: 'hero',
    inHero: true,
  })
  assert.equal(asin?.destination_type, 'ASIN')
  assert.equal(asin?.destination, 'B0054U8UGW')
  assert.equal(asin?.slot, 'hero')

  const search = affiliateClickParams({
    site: 'fish-com',
    page: '/reviews/best-nano-tanks',
    href: '/go/amazon-brand/aqueon+10+gallon+aquarium?s=reviews-best-nano-tanks',
    slot: 'aqueon-10',
  })
  assert.equal(search?.destination_type, 'search')
  assert.equal(search?.destination, 'aqueon 10 gallon aquarium')
  assert.equal(search?.slot, 'aqueon-10')

  const recovery = affiliateClickParams({
    site: 'dog-com',
    page: '/search',
    href: '/reviews/best-dog-crates',
    recoveryPath: '/reviews/best-dog-crates',
    slot: 'search-recovery',
  })
  assert.equal(recovery?.destination_type, 'other')
  assert.equal(recovery?.destination, '/reviews/best-dog-crates')
  assert.equal(recovery?.slot, 'search-recovery')
  assert.equal(recovery?.page, '/search')
})

test('the Big Barker bed hop records the Large khaki ASIN', () => {
  const root = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')
  const review = readFileSync(join(root, 'apps/dog-com/src/app/reviews/best-dog-beds/page.tsx'), 'utf8')
  const guide = readFileSync(join(root, 'apps/dog-com/src/app/reviews/big-barker-vs-casper-guide/page.tsx'), 'utf8')
  const href = '/go/amazon/B009G9Y59S?s=reviews-best-dog-beds'
  assert.match(guide, /href="\/reviews\/best-dog-beds"/)
  assert.match(guide, /\/go\/amazon\/B009G9Y59S\?s=reviews-big-barker-vs-casper-guide/)
  assert.match(review, /PrimaryHop href='\/go\/amazon\/B009G9Y59S\?s=reviews-best-dog-beds'/)
  assert.match(review, /price="\$249\.95"/)
  assert.match(review, /dated 2026-10-09/)
  const hero = affiliateClickParams({
    site: 'dog-com',
    page: '/reviews/best-dog-beds',
    href,
    slot: 'hero',
    inHero: true,
  })
  assert.equal(hero?.site, 'dog-com')
  assert.equal(hero?.page, '/reviews/best-dog-beds')
  assert.equal(hero?.source, 'reviews-best-dog-beds')
  assert.equal(hero?.partner, 'amazon')
  assert.equal(hero?.slot, 'hero')
  assert.equal(hero?.destination_type, 'ASIN')
  assert.equal(hero?.destination, 'B009G9Y59S')
  const card = affiliateClickParams({
    site: 'dog-com',
    page: '/reviews/best-dog-beds',
    href,
    slot: 'big-barker',
    marked: 'card',
  })
  assert.equal(card?.slot, 'big-barker')
  assert.equal(card?.placement, 'card')
  assert.equal(card?.destination_type, 'ASIN')
  assert.equal(card?.destination, 'B009G9Y59S')
})
