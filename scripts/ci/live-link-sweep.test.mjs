import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  classifyLive,
  collapsedToHome,
  parseRoutes,
  renderSweep,
  resolveHopTarget,
  stripPlaceholder,
} from './live-link-sweep.mjs'

test('route templates resolve a search sku and drop an empty tag', () => {
  const routes = parseRoutes(`
export const affiliateRoutes = {
  'amazon-brand': {
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
}
`)
  assert.equal(
    resolveHopTarget('amazon-brand', 'midwest+icrate', routes['amazon-brand']),
    'https://amazon.com/s?k=midwest%20icrate',
  )
  assert.equal(resolveHopTarget('amazon', 'B00TEST', routes.amazon), 'https://amazon.com/dp/B00TEST')
  assert.equal(stripPlaceholder('https://amazon.com/s?k=crate&tag='), 'https://amazon.com/s?k=crate')
})

test('404 is dead, a bot wall is manual, and an example line is not required here', () => {
  assert.equal(classifyLive({ status: 200, error: '', snippet: '', url: 'https://avma.org/a/b', finalUrl: 'https://avma.org/a/b' }).kind, 'ok')
  assert.equal(classifyLive({ status: 404, error: '', snippet: '', url: 'https://avma.org/a', finalUrl: 'https://avma.org/a' }).kind, 'dead')
  assert.equal(classifyLive({ status: 410, error: '', snippet: '', url: 'https://avma.org/a', finalUrl: 'https://avma.org/a' }).kind, 'dead')
  assert.equal(classifyLive({ status: 403, error: '', snippet: '', url: 'https://avma.org/a', finalUrl: 'https://avma.org/a' }).kind, 'manual')
  assert.equal(
    classifyLive({ status: 200, error: '', snippet: 'Just a moment while we verify you are human', url: 'https://avma.org/a', finalUrl: 'https://avma.org/a' }).kind,
    'manual',
  )
  assert.equal(classifyLive({ status: 0, error: 'TimeoutError', snippet: '', url: 'https://avma.org/a', finalUrl: 'https://avma.org/a' }).kind, 'manual')
  assert.equal(
    classifyLive({ status: 403, error: '', snippet: '', url: 'https://aafco.org/', finalUrl: 'https://aafco.org/' }).kind,
    'ok',
  )
  assert.equal(
    classifyLive({ status: 200, error: '', snippet: 'Just a moment while we verify you are human', url: 'https://www.veccs.org/', finalUrl: 'https://www.veccs.org/' }).kind,
    'ok',
  )
  assert.equal(
    classifyLive({ status: 404, error: '', snippet: '', url: 'https://aafco.org/missing', finalUrl: 'https://aafco.org/missing' }).kind,
    'dead',
  )
})

test('a retailer soft 404 and a citation that falls back to the home page are dead', () => {
  assert.equal(
    classifyLive({
      status: 200,
      error: '',
      snippet: "Sorry, we couldn't find that page",
      url: 'https://www.amazon.com/dp/B00GONE',
      finalUrl: 'https://www.amazon.com/dp/B00GONE',
    }).kind,
    'dead',
  )
  assert.equal(collapsedToHome('https://www.avma.org/resources/pet-owners/care', 'https://www.avma.org/'), true)
  assert.equal(collapsedToHome('https://www.avma.org/resources', 'https://www.avma.org/resources/'), false)
  assert.equal(
    classifyLive({
      status: 200,
      error: '',
      snippet: 'home',
      url: 'https://www.avma.org/resources/pet-owners/care',
      finalUrl: 'https://www.avma.org/',
    }).kind,
    'dead',
  )
})

test('the report lists dead links and does not mention anyone', () => {
  const body = renderSweep({
    checkedAt: '2026-10-07T23:50Z',
    sites: [
      {
        name: 'dog-com',
        checked: 2,
        ok: 1,
        dead: [{ url: 'https://example.com/gone', detail: 'HTTP 404', where: ['apps/dog-com/src/app/health/page.tsx'] }],
        manual: [],
      },
    ],
  })
  assert.match(body, /checked 2 \/ OK 1 \/ dead 1 \/ manual 0/)
  assert.match(body, /https:\/\/example\.com\/gone/)
  assert.equal(/(^|\s)@/.test(body), false)
})
