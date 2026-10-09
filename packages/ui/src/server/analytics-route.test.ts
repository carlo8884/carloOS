import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { analyticsStoreConfigured, handleAnalyticsRequest } from './analytics-route.ts'

const EARNING = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

async function bodyOf(env: NodeJS.ProcessEnv) {
  const res = handleAnalyticsRequest(env)
  const body = await res.json()
  return { status: res.status, body }
}

test('unset analytics store is HTTP 200 and ok false', async () => {
  assert.equal(analyticsStoreConfigured({}), false)
  const { status, body } = await bodyOf({})
  assert.equal(status, 200)
  assert.notEqual(status, 503)
  assert.deepEqual(body, { ok: false })
})

test('a set store still leaves the dashboard off', async () => {
  const env = {
    NEXT_PUBLIC_SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'service-role',
  }
  assert.equal(analyticsStoreConfigured(env), true)
  const { status, body } = await bodyOf(env)
  assert.equal(status, 200)
  assert.notEqual(status, 503)
  assert.deepEqual(body, { ok: false })
})

test('the five earning analytics routes use the quiet handler', () => {
  for (const site of EARNING) {
    const src = readFileSync(`apps/${site}/src/app/api/analytics/route.ts`, 'utf8')
    assert.match(src, /handleAnalyticsRequest/)
    assert.doesNotMatch(src, /503/)
  }
})
