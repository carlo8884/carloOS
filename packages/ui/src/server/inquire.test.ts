import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { inquireFailureLead, INQUIRE_FALLBACK_HREF } from '../inquire-copy'
import { handleInquirePost } from './inquire.ts'

const note = {
  name: 'Ada',
  email: 'ada@example.com',
  message: 'A real note',
  robot: 'on',
  intent: 'offer',
}

function post(body: unknown, ip = '203.0.113.50') {
  return new Request('http://localhost/api/inquire', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': ip },
    body: JSON.stringify(body),
  })
}

test('unset inbox is not a success', async () => {
  let called = false
  const res = await handleInquirePost(post(note), {
    siteName: 'Dog.com',
    siteHost: 'dog.com',
    env: {},
    fetchImpl: async () => {
      called = true
      return new Response('no', { status: 200 })
    },
  })
  const body = await res.json()
  assert.equal(res.status, 503)
  assert.equal(body.ok, false)
  assert.equal(body.error, 'unconfigured')
  assert.equal(body.fallback, INQUIRE_FALLBACK_HREF)
  assert.equal(called, false)
  assert.match(inquireFailureLead(503), /not sent/)
  assert.doesNotMatch(inquireFailureLead(503), /Received/)
})

test('rejected inbox is not a success', async () => {
  const res = await handleInquirePost(post(note), {
    siteName: 'Vets.co',
    siteHost: 'vets.co',
    env: {
      INQUIRE_EMAIL: 'inbox@example.com',
      NEXT_PUBLIC_VETS_INQUIRE_CAPTURE: 'true',
    },
    fetchImpl: async () => new Response('nope', { status: 422 }),
  })
  const body = await res.json()
  assert.equal(res.status, 502)
  assert.equal(body.ok, false)
  assert.equal(body.error, 'rejected')
  assert.equal(body.fallback, '/disclosure')
  assert.match(inquireFailureLead(502), /not sent/)
  assert.doesNotMatch(inquireFailureLead(502), /Received/)
})

test('upstream throw is not a success', async () => {
  const res = await handleInquirePost(post(note), {
    siteName: 'Fish.com',
    siteHost: 'fish.com',
    env: { INQUIRE_EMAIL: 'inbox@example.com' },
    fetchImpl: async () => {
      throw new Error('network')
    },
  })
  const body = await res.json()
  assert.equal(res.status, 502)
  assert.equal(body.ok, false)
})

test('accepted send is the only ok:true path besides the honeypot', async () => {
  const sent: string[] = []
  const res = await handleInquirePost(post(note), {
    siteName: 'Horses.com',
    siteHost: 'horses.com',
    env: { INQUIRE_EMAIL: 'inbox@example.com' },
    fetchImpl: async (input) => {
      sent.push(String(input))
      return new Response('ok', { status: 200 })
    },
  })
  const body = await res.json()
  assert.equal(res.status, 200)
  assert.equal(body.ok, true)
  assert.equal(sent.length, 1)
  assert.match(sent[0], /formsubmit\.co\/ajax\/inbox%40example\.com/)

  const honeypot = await handleInquirePost(post({ ...note, company_website: 'https://spam.test' }), {
    siteName: 'Ferret.com',
    siteHost: 'ferret.com',
    env: { INQUIRE_EMAIL: 'inbox@example.com' },
    fetchImpl: async () => {
      throw new Error('should not send')
    },
  })
  assert.equal(honeypot.status, 200)
  assert.equal((await honeypot.json()).ok, true)
})

test('junk notes are not sent', async () => {
  let called = false
  const res = await handleInquirePost(
    post({ ...note, email: 'test@test.com', message: 'asdf' }, '203.0.113.77'),
    {
      siteName: 'Dog.com',
      siteHost: 'dog.com',
      env: {
        INQUIRE_EMAIL: 'inbox@example.com',
        NEXT_PUBLIC_DOG_INQUIRE_CAPTURE: 'true',
      },
      fetchImpl: async () => {
        called = true
        return new Response('ok', { status: 200 })
      },
    },
  )
  const body = await res.json()
  assert.equal(res.status, 422)
  assert.equal(body.ok, false)
  assert.equal(body.error, 'junk')
  assert.equal(called, false)
  assert.match(inquireFailureLead(422), /not sent/)
  assert.doesNotMatch(inquireFailureLead(422), /Received/)
})

test('a repeat IP is told to wait', async () => {
  let called = 0
  const opts = {
    siteName: 'Horses.com',
    siteHost: 'horses.com',
    env: { INQUIRE_EMAIL: 'inbox@example.com' },
    limit: 1,
    fetchImpl: async () => {
      called += 1
      return new Response('ok', { status: 200 })
    },
  }
  const first = await handleInquirePost(post(note, '203.0.113.88'), opts)
  const second = await handleInquirePost(post(note, '203.0.113.88'), opts)
  assert.equal(first.status, 200)
  assert.equal(second.status, 429)
  assert.equal((await second.json()).ok, false)
  assert.equal(called, 1)
  assert.match(inquireFailureLead(429), /not sent/)
  assert.match(inquireFailureLead(429), /Wait a few minutes/)
  assert.doesNotMatch(inquireFailureLead(429), /Received/)
})

test('dog and vets stay closed until their flags are on', async () => {
  let called = false
  const fetchImpl = async () => {
    called = true
    return new Response('ok', { status: 200 })
  }
  const dog = await handleInquirePost(post(note, '203.0.113.61'), {
    siteName: 'Dog.com',
    siteHost: 'dog.com',
    env: { INQUIRE_EMAIL: 'inbox@example.com' },
    fetchImpl,
  })
  assert.equal(dog.status, 503)
  assert.equal((await dog.json()).error, 'unconfigured')
  const vets = await handleInquirePost(post(note, '203.0.113.62'), {
    siteName: 'Vets.co',
    siteHost: 'vets.co',
    env: {},
    fetchImpl,
  })
  assert.equal(vets.status, 503)
  const vetsFlagged = await handleInquirePost(post(note, '203.0.113.63'), {
    siteName: 'Vets.co',
    siteHost: 'vets.co',
    env: {
      NEXT_PUBLIC_VETS_INQUIRE_CAPTURE: 'true',
      INQUIRE_EMAIL: 'inbox@example.com',
    },
    fetchImpl: async () => new Response('nope', { status: 500 }),
  })
  assert.equal(vetsFlagged.status, 502)
  assert.equal((await vetsFlagged.json()).error, 'rejected')
  assert.equal(called, false)
})

test('earning-site routes use the shared handler', () => {
  const sites: Array<[string, string, string]> = [
    ['apps/dog-com/src/app/api/inquire/route.ts', 'Dog.com', 'dog.com'],
    ['apps/fish-com/src/app/api/inquire/route.ts', 'Fish.com', 'fish.com'],
    ['apps/horses-com/src/app/api/inquire/route.ts', 'Horses.com', 'horses.com'],
    ['apps/vets-co/src/app/api/inquire/route.ts', 'Vets.co', 'vets.co'],
    ['apps/ferret-com/src/app/api/inquire/route.ts', 'Ferret.com', 'ferret.com'],
  ]
  for (const [file, siteName, siteHost] of sites) {
    const src = readFileSync(new URL(`../../../../${file}`, import.meta.url), 'utf8')
    assert.match(src, /handleInquirePost/)
    assert.match(src, new RegExp(siteName.replace('.', '\\.')))
    assert.match(src, new RegExp(siteHost.replace('.', '\\.')))
  }
})
