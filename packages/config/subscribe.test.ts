import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  isValidSubscribeEmail,
  parseSubscribeBody,
  handleSubscribePost,
} from './subscribe'
import { JUNK_EMAIL_MESSAGE, RATE_LIMIT_MESSAGE } from './form-guard'

describe('isValidSubscribeEmail', () => {
  it('accepts a normal address', () => {
    assert.equal(isValidSubscribeEmail('owner@example.com'), true)
  })
  it('rejects missing domain', () => {
    assert.equal(isValidSubscribeEmail('owner@'), false)
    assert.equal(isValidSubscribeEmail('not-an-email'), false)
  })
})

describe('parseSubscribeBody', () => {
  it('treats filled honeypot as success-shaped honeypot', () => {
    const parsed = parseSubscribeBody({
      email: 'bot@example.com',
      company_website: 'https://spam.example',
    })
    assert.equal(parsed.kind, 'honeypot')
  })
  it('rejects a bad email', () => {
    const parsed = parseSubscribeBody({ email: 'nope' })
    assert.equal(parsed.kind, 'error')
    if (parsed.kind === 'error') {
      assert.equal(parsed.message, JUNK_EMAIL_MESSAGE)
      assert.doesNotMatch(parsed.message, /saved|subscribed|received/i)
    }
  })

  it('rejects an obvious junk address', () => {
    const parsed = parseSubscribeBody({ email: 'test@test.com', source: 'reviews-best-puppy-crate-guide' })
    assert.equal(parsed.kind, 'error')
  })
})

describe('handleSubscribePost', () => {
  it('returns 503 when inbox env is empty — never fake success', async () => {
    const req = new Request('https://dog.com/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: 'owner@example.com', source: 'homepage-under-hero' }),
    })
    const result = await handleSubscribePost(req, { site: 'dog.com', env: {} })
    assert.equal(result.status, 503)
    assert.equal(result.body.ok, undefined)
  })

  it('posts to FormSubmit when inbox is set', async () => {
    const calls: { url: string; body: string }[] = []
    const req = new Request('https://dog.com/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: 'owner@example.com',
        siteId: 'dog-com',
        source: 'homepage-under-hero',
      }),
    })
    const result = await handleSubscribePost(req, {
      site: 'dog.com',
      env: { INQUIRE_EMAIL: 'carlo@example.com' },
      fetchImpl: async (url, init) => {
        calls.push({ url: String(url), body: String(init?.body || '') })
        return new Response('{"success":"true"}', { status: 200 })
      },
    })
    assert.equal(result.status, 200)
    assert.equal(result.body.ok, true)
    assert.equal(calls.length, 1)
    assert.match(calls[0].url, /formsubmit\.co/)
    assert.equal(calls[0].body.includes('PLACEHOLDER'), false)
    assert.match(calls[0].body, /owner@example.com/)
  })

  it('does not deliver a honeypot or a junk address, and slows a repeat IP', async () => {
    let calls = 0
    const fetchImpl = async () => {
      calls += 1
      return new Response('ok', { status: 200 })
    }
    const env = { INQUIRE_EMAIL: 'inbox@example.com' }
    const honeypot = await handleSubscribePost(
      new Request('https://dog.com/api/subscribe', {
        method: 'POST',
        headers: { 'x-forwarded-for': '198.51.100.10' },
        body: JSON.stringify({ email: 'owner@example.com', company_website: 'https://spam.test' }),
      }),
      { site: 'dog.com', env, fetchImpl },
    )
    assert.equal(honeypot.status, 200)
    assert.equal(honeypot.body.ok, true)
    assert.equal(calls, 0)

    const junk = await handleSubscribePost(
      new Request('https://dog.com/api/subscribe', {
        method: 'POST',
        headers: { 'x-forwarded-for': '198.51.100.10' },
        body: JSON.stringify({ email: 'asdf@asdf.com' }),
      }),
      { site: 'dog.com', env, fetchImpl },
    )
    assert.equal(junk.status, 400)
    assert.equal(junk.body.message, JUNK_EMAIL_MESSAGE)
    assert.equal(calls, 0)

    const headers = { 'x-forwarded-for': '198.51.100.24' }
    const body = JSON.stringify({ email: 'owner@example.com', source: 'guide' })
    const first = await handleSubscribePost(
      new Request('https://dog.com/api/subscribe', { method: 'POST', headers, body }),
      { site: 'dog.com', env, fetchImpl, limit: 1 },
    )
    const second = await handleSubscribePost(
      new Request('https://dog.com/api/subscribe', { method: 'POST', headers, body }),
      { site: 'dog.com', env, fetchImpl, limit: 1 },
    )
    assert.equal(first.status, 200)
    assert.equal(second.status, 429)
    assert.equal(second.body.message, RATE_LIMIT_MESSAGE)
    assert.doesNotMatch(second.body.message || '', /saved|subscribed|received/i)
    assert.equal(calls, 1)
  })
})
