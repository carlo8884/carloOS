import assert from 'node:assert/strict'
import http from 'node:http'
import { once } from 'node:events'
import test from 'node:test'
import {
  expectNoindexFor,
  originOf,
  resolveSite,
  smokeSite,
} from './launch-smoke.mjs'

function page(canonical, go) {
  return `<!doctype html><html><head>
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="index, follow" />
  </head><body>${go ? `<a href="${go}">shop</a>` : ''}</body></html>`
}

function listen(handler) {
  const server = http.createServer(handler)
  server.listen(0, '127.0.0.1')
  return once(server, 'listening').then(() => server)
}

test('preview hosts default to expected-noindex and an apex does not', () => {
  assert.equal(resolveSite('dog').id, 'dog-com')
  assert.equal(resolveSite('vets.co').apex, 'https://vets.co')
  assert.equal(expectNoindexFor('https://dog-com-three.vercel.app', null), true)
  assert.equal(expectNoindexFor('https://dog.com', null), false)
  assert.equal(expectNoindexFor('https://dog.com', true), true)
  assert.equal(originOf('dog.com'), 'https://dog.com')
})

test('expected-noindex mode accepts a preview-shaped host', async () => {
  const site = resolveSite('dog-com')
  const server = await listen((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1')
    if (url.pathname === '/robots.txt') {
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.end('User-Agent: *\nDisallow: /\n')
      return
    }
    if (url.pathname === '/sitemap.xml') {
      res.writeHead(200, { 'content-type': 'application/xml' })
      res.end('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>')
      return
    }
    if (url.pathname.startsWith('/go/')) {
      res.writeHead(302, { location: 'https://www.amazon.com/s?k=crate' })
      res.end()
      return
    }
    if (url.pathname.includes('does-not-exist')) {
      res.writeHead(404, { 'x-robots-tag': 'noindex, nofollow', 'content-type': 'text/html' })
      res.end('<html><head><meta name="robots" content="noindex, follow" /><link rel="canonical" href="https://dog.com/" /></head></html>')
      return
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(page('https://dog.com' + (url.pathname === '/' ? '/' : url.pathname), '/go/amazon-brand/midwest+icrate?s=home'))
  })
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const problems = await smokeSite(site, origin, { expectNoindex: true })
    assert.deepEqual(problems, [])
  } finally {
    server.close()
  }
})

test('indexable mode requires a crawlable robots.txt and an apex sitemap line', async () => {
  const site = resolveSite('fish-com')
  const server = await listen((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1')
    if (url.pathname === '/robots.txt') {
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.end('User-Agent: *\nAllow: /\nDisallow: /go/\nSitemap: https://fish.com/sitemap.xml\n')
      return
    }
    if (url.pathname === '/sitemap.xml') {
      res.writeHead(200, { 'content-type': 'application/xml' })
      res.end('<sitemapindex></sitemapindex>')
      return
    }
    if (url.pathname.startsWith('/go/')) {
      res.writeHead(302, { location: 'https://www.amazon.com/s?k=filter' })
      res.end()
      return
    }
    if (url.pathname.includes('does-not-exist')) {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.end('<meta name="robots" content="noindex, follow" /><link rel="canonical" href="https://fish.com/" />')
      return
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(page('https://fish.com' + (url.pathname === '/' ? '/' : url.pathname), '/go/amazon-brand/aquarium+filter?s=home'))
  })
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const problems = await smokeSite(site, origin, { expectNoindex: false })
    assert.deepEqual(problems, [])
  } finally {
    server.close()
  }
})

test('indexable mode fails when robots still disallow the site', async () => {
  const site = resolveSite('vets-co')
  const server = await listen((req, res) => {
    if (req.url.startsWith('/robots.txt')) {
      res.writeHead(200)
      res.end('User-Agent: *\nDisallow: /\n')
      return
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(page('https://vets.co/', ''))
  })
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const problems = await smokeSite(site, origin, { expectNoindex: false })
    assert.ok(problems.some((line) => /robots/i.test(line)))
  } finally {
    server.close()
  }
})
