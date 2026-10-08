import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  asinFromUrl,
  classifyAmazonProduct,
  productFromHref,
  renderAmazonSweep,
} from './amazon-product-sweep.mjs'
import { parseRoutes } from './live-link-sweep.mjs'

const routes = parseRoutes(`
export const affiliateRoutes = {
  amazon: {
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
  'amazon-brand': {
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
    requiresSku: true,
  },
}
`)

test('a search hop is not a product, and an ASIN hop is a /dp/ URL with the tag removed', () => {
  assert.equal(productFromHref('/go/amazon-brand/corydoras+tank+setup?s=species-corydoras', routes), null)
  const product = productFromHref('/go/amazon/B0TESTASIN?s=species-corydoras', routes)
  assert.equal(product.asin, 'B0TESTASIN')
  assert.equal(product.target, 'https://amazon.com/dp/B0TESTASIN')
  assert.equal(asinFromUrl('https://www.amazon.com/Some-Name/dp/B0TESTASIN/ref=sr'), 'B0TESTASIN')
  assert.equal(asinFromUrl('https://www.amazon.com/gp/product/B0TESTASIN'), 'B0TESTASIN')
})

test('bot walls are unverifiable, and a dead or moved product is not', () => {
  assert.equal(
    classifyAmazonProduct({
      status: 200,
      error: '',
      snippet: 'Just a moment while we verify you are human',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'unverifiable',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 503,
      error: '',
      snippet: '',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'unverifiable',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 0,
      error: 'TimeoutError',
      snippet: '',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'unverifiable',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 200,
      error: '',
      snippet: 'Add to Cart',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://www.amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'live',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 200,
      error: '',
      snippet: 'Currently unavailable. We don\'t know when or if this item will be back in stock.',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://www.amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'currently unavailable',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 200,
      error: '',
      snippet: 'product',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://www.amazon.com/dp/B0OTHERAS1',
      asin: 'B0TESTASIN',
    }).status,
    'redirected to a different product',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 404,
      error: '',
      snippet: '',
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'dog page / 404',
  )
  assert.equal(
    classifyAmazonProduct({
      status: 200,
      error: '',
      snippet: "Sorry! We couldn't find that page. Dogs of Amazon.",
      url: 'https://amazon.com/dp/B0TESTASIN',
      finalUrl: 'https://www.amazon.com/dp/B0TESTASIN',
      asin: 'B0TESTASIN',
    }).status,
    'dog page / 404',
  )
})

test('the report counts each status and does not mention anyone', () => {
  const body = renderAmazonSweep({
    checkedAt: '2026-10-08T22:00Z',
    sites: [
      {
        name: 'fish-com',
        rows: [
          {
            asin: 'B0TESTASIN',
            status: 'live',
            detail: 'HTTP 200',
            target: 'https://amazon.com/dp/B0TESTASIN',
            where: ['apps/fish-com/src/app/species/corydoras/page.tsx'],
          },
          {
            asin: 'B0GONEASIN',
            status: 'dog page / 404',
            detail: 'HTTP 404',
            target: 'https://amazon.com/dp/B0GONEASIN',
            where: ['apps/fish-com/src/app/reviews/page.tsx'],
          },
        ],
      },
    ],
  })
  assert.match(body, /product hops 2 \/ live 1 \/ currently unavailable 0 \/ redirected to a different product 0 \/ dog page \/ 404 1 \/ unverifiable 0/)
  assert.match(body, /B0GONEASIN/)
  assert.match(body, /none recorded by this job/)
  assert.equal(/(^|\s)@/.test(body), false)
  assert.throws(() =>
    renderAmazonSweep({
      checkedAt: '2026-10-08T22:00Z',
      sites: [{ name: 'dog-com', rows: [{ asin: 'B0TESTASIN', status: 'live', detail: 'see @someone', target: 'https://amazon.com/dp/B0TESTASIN', where: [] }] }],
    }),
  )
})
