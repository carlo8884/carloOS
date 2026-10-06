import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import {
  amazonTagProblem,
  citationUrlsFromSource,
  classifyRedirectChain,
  classifyStatus,
  goHrefsFromSource,
  cardShopHrefs,
  citationProbeReadsBody,
  emailShopHrefs,
  EMAIL_SEARCH_VENDORS,
  isEmptySearchHtml,
  isRetailerSearchUrl,
  missingShopSource,
  shopSearchVerdict,
  renderReport,
  tableShopHrefs,
} from './weekly-link-monitor-lib.mjs'

test('go hrefs and outbound citations are collected without own-site or asset hosts', () => {
  const src = `
    <a href="/go/amazon-brand/midwest+icrate?s=reviews-best-dog-crates">shop</a>
    <a href="/go/trupanion/home">quote</a>
    <a href="https://dog.com/reviews/best-dog-crates">self</a>
    <a href="https://avma.org/resources/pet-owners">AVMA</a>
    url: 'https://images.unsplash.com/photo-1'
    'https://schema.org'
    const note = \`https://example.com/docs\`
    const self = \`https://dog.com\${g.href}\`
  `
  assert.deepEqual(goHrefsFromSource(src), [
    '/go/amazon-brand/midwest+icrate',
    '/go/trupanion/home',
  ])
  assert.deepEqual(citationUrlsFromSource(src), [
    'https://avma.org/resources/pet-owners',
    'https://example.com/docs',
  ])
})

test('404 and connection errors fail; bot walls do not', () => {
  assert.equal(classifyStatus(200, ''), 'ok')
  assert.equal(classifyStatus(301, ''), 'ok')
  assert.equal(classifyStatus(404, ''), 'fail')
  assert.equal(classifyStatus(410, ''), 'fail')
  assert.equal(classifyStatus(500, ''), 'fail')
  assert.equal(classifyStatus(0, 'TimeoutError'), 'fail')
  assert.equal(classifyStatus(403, ''), 'blocked')
  assert.equal(classifyStatus(503, ''), 'blocked')
})

test('the report lists failures and does not mention anyone', () => {
  const body = renderReport({
    checkedAt: '2026-10-04T22:00Z',
    checked: 2,
    failures: [{ url: 'https://example.com/gone', detail: 'HTTP 404', where: 'apps/dog-com/src/app/reviews/page.tsx' }],
    blocked: [],
  })
  assert.match(body, /FAIL=1/)
  assert.match(body, /https:\/\/example.com\/gone/)
  assert.equal(/(^|\s)@/.test(body), false)
  const clean = renderReport({ checkedAt: '2026-10-04T22:00Z', checked: 1, failures: [], blocked: [] })
  assert.match(clean, /FAIL=0/)
  assert.match(clean, /## Failures\nnone/)
})

test('one retailer redirect is allowed and a longer chain or a 404 fails', () => {
  assert.equal(classifyRedirectChain([200]).kind, 'ok')
  assert.equal(classifyRedirectChain([301, 200]).kind, 'ok')
  assert.equal(classifyRedirectChain([302, 200]).kind, 'ok')
  assert.equal(classifyRedirectChain([301, 503]).kind, 'blocked')
  assert.equal(classifyRedirectChain([403]).kind, 'blocked')
  assert.equal(classifyRedirectChain([404]).kind, 'fail')
  assert.equal(classifyRedirectChain([301, 302, 200]).kind, 'fail')
  assert.match(classifyRedirectChain([301, 302, 200]).detail, /redirect chain 2/)
  assert.equal(classifyRedirectChain([], 'TimeoutError').kind, 'fail')
})

test('amazon search hops keep the tag only when the environment has one', () => {
  const tagged = 'https://amazon.com/s?k=fi%20series%203&tag=boltonpets20-20ls'
  assert.equal(amazonTagProblem(tagged, { AFF_AMAZON_TAG: 'boltonpets20-20ls' }), '')
  assert.equal(amazonTagProblem('https://amazon.com/s?k=crate', { AFF_AMAZON_TAG: 'boltonpets20-20ls' }), 'amazon tag mismatch')
  assert.equal(amazonTagProblem('https://amazon.com/s?k=crate', {}), '')
  assert.equal(amazonTagProblem('https://www.amazon.com', { AFF_AMAZON_TAG: 'boltonpets20-20ls' }), '')
  assert.equal(amazonTagProblem('https://amazon.com/s?k=x&tag=PLACEHOLDER', { AFF_AMAZON_TAG: 'boltonpets20-20ls' }), 'PLACEHOLDER')
})

test('table and gift-guide shop links keep a source and the new pages are included', () => {
  const sample = `
    <TableShopLink href={"/go/trupanion/home?s=reviews-best-pet-insurance"} product={"Trupanion"} />
    <TableShopLink href={\`/go/chewy-brand/lickimat+splash?s=\${SOURCE}\`} product="LickiMat Splash" />
    <TableShopLink href={"/go/chewy/connect?s=telehealth"} product={"Chewy Connect"} />
  `
  assert.deepEqual(tableShopHrefs(sample), [
    '/go/trupanion/home?s=reviews-best-pet-insurance',
    '/go/chewy-brand/lickimat+splash?s=${SOURCE}',
    '/go/chewy/connect?s=telehealth',
  ])
  assert.equal(missingShopSource('/go/trupanion/home'), true)
  assert.equal(missingShopSource('/go/trupanion/home?s=reviews-best-pet-insurance'), false)
  for (const site of ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']) {
    const gift = readFileSync(
      new URL(`../../apps/${site}/src/app/reviews/november-december-gift-guide/page.tsx`, import.meta.url),
      'utf8',
    )
    const hrefs = tableShopHrefs(gift)
    assert.ok(hrefs.length >= 3, site)
    assert.ok(hrefs.every((href) => !missingShopSource(href)), site)
  }
})

test('the shop section is part of the report and does not mention anyone', () => {
  const body = renderReport({
    checkedAt: '2026-10-05T04:30Z',
    checked: 4,
    failures: [],
    blocked: [],
    shop: {
      checked: 3,
      hidden: 1,
      failures: [{ url: 'https://example.com/missing', detail: 'HTTP 404', where: 'apps/dog-com/src/app/reviews/november-december-gift-guide/page.tsx' }],
      blocked: [{ url: 'https://amazon.com/s?k=crate', detail: 'HTTP 503' }],
    },
  })
  assert.match(body, /FAIL=1/)
  assert.match(body, /## Comparison-table and gift-guide shop links/)
  assert.match(body, /ReviewCard, and ShopCtas/)
  assert.match(body, /Hidden Chewy hops with no tag: 1/)
  assert.match(body, /november-december-gift-guide/)
  assert.equal(/(^|\s)@/.test(body), false)
})

test('review cards and shop buttons are part of the empty-search probe', () => {
  const src = `
    <ReviewCard ctaHref="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters" />
    <ShopCtas amazonHref="/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters" />
    <ShopCtas chewyHref="/go/chewy-brand/dog+harness?s=reviews-best-dog-harnesses" />
  `
  assert.deepEqual(cardShopHrefs(src), [
    '/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters',
    '/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters',
    '/go/chewy-brand/dog+harness?s=reviews-best-dog-harnesses',
  ])
})

test('the shop probe fails a real empty search and keeps 503 and 429 blocked', () => {
  const empty = '<span>No results for your search query. </span>'
  assert.equal(shopSearchVerdict([200], '', empty).kind, 'fail')
  assert.equal(shopSearchVerdict([200], '', empty).detail, 'empty search')
  assert.equal(shopSearchVerdict([301, 200], '', empty + 'data-asin="B00TEST01"'.repeat(8)).kind, 'ok')
  assert.equal(shopSearchVerdict([503], '', empty).kind, 'blocked')
  assert.equal(shopSearchVerdict([429], '', empty).kind, 'blocked')
  assert.equal(shopSearchVerdict([403], '', empty).kind, 'blocked')
  assert.equal(shopSearchVerdict([200], '', '<title>Robot Check</title>No results for your search query').kind, 'ok')
})

test('citation probe body-reads retailer searches the shop probe does not already cover', () => {
  const search = 'https://www.amazon.com/s?k=atc+refractometer&tag=test-20'
  const product = 'https://www.amazon.com/dp/B000000000'
  const article = 'https://avma.org/resources/pet-owners'
  assert.equal(isRetailerSearchUrl(search), true)
  assert.equal(isRetailerSearchUrl(product), false)
  assert.equal(isRetailerSearchUrl(article), false)
  assert.equal(isRetailerSearchUrl('https://www.chewy.com/s?query=dog+harness'), true)
  assert.equal(isRetailerSearchUrl('https://www.smartpakequine.com/search/search?SearchTerm=halter'), true)
  const covered = new Set([search])
  assert.equal(citationProbeReadsBody(search, covered), false)
  assert.equal(citationProbeReadsBody('https://www.amazon.com/s?k=tropic+marin+classic+salt&tag=test-20', covered), true)
  assert.equal(citationProbeReadsBody(product, covered), false)
  const empty = '<span>No results for your search query. </span>'
  assert.equal(shopSearchVerdict([200], '', empty).detail, 'empty search')
  assert.equal(shopSearchVerdict([503], '', empty).kind, 'blocked')
  assert.equal(shopSearchVerdict([429], '', empty).kind, 'blocked')
})

test('an empty Amazon search is not a rate-limit page', () => {
  assert.equal(
    isEmptySearchHtml('<span>No results for your search query. </span>', 2),
    true,
  )
  assert.equal(
    isEmptySearchHtml('<span>No results for your search query. </span>' + 'data-asin="B00"'.repeat(8), 8),
    false,
  )
  assert.equal(isEmptySearchHtml('HTTP 503 Service Unavailable', 0), false)
  assert.equal(isEmptySearchHtml('<title>Robot Check</title>No results for your search query', 0), false)
})

test('email retailer searches keep the source query', () => {
  const hrefs = emailShopHrefs(
    '[Get it](https://fish.com/go/amazon-brand/api+freshwater+master+test+kit?s=email-cycling-guide)\n[Skip](https://dog.com/go/chewy/connect)',
  )
  assert.deepEqual(hrefs, [
    '/go/amazon-brand/api+freshwater+master+test+kit?s=email-cycling-guide',
    '/go/chewy/connect',
  ])
  assert.equal(EMAIL_SEARCH_VENDORS.has('amazon-brand'), true)
  assert.equal(EMAIL_SEARCH_VENDORS.has('chewy'), false)
  assert.equal(missingShopSource(hrefs[0]), false)
})

test('the workflow files one issue and cannot assign or request review', () => {
  const yml = readFileSync(new URL('../../.github/workflows/link-monitor.yml', import.meta.url), 'utf8')
  const stripped = yml.replace(/uses: actions\/[A-Za-z0-9-]+@v\d+/g, 'uses: action')
  assert.match(yml, /cron:/)
  assert.match(yml, /issues: write/)
  assert.equal(/assignees|reviewers|pull-requests:/.test(yml), false)
  assert.equal(/@/.test(stripped), false)
})
