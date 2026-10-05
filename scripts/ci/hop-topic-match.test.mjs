import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { isCrossSell, topicMismatches } from './hop-topic-match.mjs'

function page({ path, title, description, body, href }) {
  return `export const metadata = buildMetadata({
  title: "${title}",
  description:
    "${description}",
  path: '${path}',
})
export default function Page() {
  return <article>${body}<ShopCtas amazonHref="${href}" amazonLabel="Browse" /></article>
}
`
}

test('a helmet search on a halters page is a mismatch', () => {
  const hits = topicMismatches(
    page({
      path: '/tack/halters-and-lead-ropes',
      title: 'Horse Halters and Lead Ropes',
      description: 'How a nylon halter and lead rope fit.',
      body: '<p>A halter sits behind the ears.</p>',
      href: '/go/amazon-brand/equestrian+riding+helmet?s=halters',
    }),
  )
  assert.equal(hits.length, 1)
  assert.equal(hits[0].search, 'helmet')
  assert.match(hits[0].page, /halter/)
})

test('a saddle-pad search on the pads page is not a mismatch', () => {
  const hits = topicMismatches(
    page({
      path: '/tack/saddle-pads',
      title: 'Saddle Pads',
      description: 'Quilted pads under the saddle.',
      body: '<p>A saddle pad spreads the saddle.</p>',
      href: '/go/amazon-brand/quilted+all+purpose+saddle+pad?s=saddle-pads',
    }),
  )
  assert.equal(hits.length, 0)
})

test('a hoof pick the article names is not a mismatch', () => {
  const hits = topicMismatches(
    page({
      path: '/breeds/quarter-horse',
      title: 'Quarter Horse',
      description: 'A stock horse used under saddle.',
      body: '<p>Daily care includes a hoof pick after the saddle comes off.</p>',
      href: '/go/amazon-brand/horse+hoof+pick?s=quarter-horse',
    }),
  )
  assert.equal(hits.length, 0)
})

test('a search outside the product list is ignored', () => {
  const hits = topicMismatches(
    page({
      path: '/ownership/senior-horse-care',
      title: 'Senior Horse Care',
      description: 'Feed and body condition for an older horse.',
      body: '<p>Beet pulp is one soaked feed.</p>',
      href: '/go/amazon-brand/beet+pulp+horse+feed?s=senior',
    }),
  )
  assert.equal(hits.length, 0)
})

test('a rider-size helmet search is an allowlisted cross-sell', () => {
  assert.equal(isCrossSell('/tools/horse-size-for-rider', 'ASTM SEI horse riding helmet'), true)
  const hits = topicMismatches(
    page({
      path: '/tools/horse-size-for-rider',
      title: 'Horse Size for Rider',
      description: 'Rider weight plus the saddle.',
      body: '<p>Add the saddle before you divide.</p>',
      href: '/go/amazon-brand/ASTM+SEI+horse+riding+helmet?s=tools-horse-size-for-rider',
    }),
  )
  assert.equal(hits.length, 0)
})

test('a helmet search on a halters page is still a mismatch', () => {
  assert.equal(isCrossSell('/tack/halters-and-lead-ropes', 'equestrian riding helmet'), false)
})

test('the workflow job is report-only and the script exits 0', () => {
  const script = readFileSync(new URL('./hop-topic-match.mjs', import.meta.url), 'utf8')
  const yml = readFileSync(new URL('../../.github/workflows/qc.yml', import.meta.url), 'utf8')
  assert.match(script, /process\.exit\(0\)/)
  assert.equal(/process\.exit\(1\)/.test(script), false)
  assert.match(yml, /Amazon search matches page topic \(report-only\)/)
  assert.match(yml, /node scripts\/ci\/hop-topic-match\.mjs/)
})
