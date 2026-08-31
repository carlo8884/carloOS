import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  isValidSubscribeEmail,
  parseSubscribeBody,
  handleSubscribePost,
} from './subscribe'

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
})
