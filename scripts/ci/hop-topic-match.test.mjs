import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { CROSS_SELLS, isCrossSell, topicMismatches } from './hop-topic-match.mjs'

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

test('a hoof pick the hoof-care article names is not a mismatch', () => {
  const hits = topicMismatches(
    page({
      path: '/care/hoof-care-basics',
      title: 'Hoof Care Basics',
      description: 'How to use a hoof pick.',
      body: '<p>Daily care includes a hoof pick after the saddle comes off.</p>',
      href: '/go/amazon-brand/horse+hoof+pick?s=hoof-care',
    }),
  )
  assert.equal(hits.length, 0)
})

test('a dynamic breed template is scanned and a hoof pick is a mismatch', () => {
  const src = `export async function generateMetadata() {
  return buildMetadata({
    title: "Thoroughbred",
    description: "Breed guide.",
    path: \`/breeds/\${slug}\`,
  })
}
export default function Page() {
  return <article>
    <li>Is your farrier comfortable with this breed's typical hoof angles?</li>
    <ShopCtas amazonHref="/go/amazon-brand/horse+hoof+pick?s=breed-thoroughbred" />
    <ShopCtas amazonHref="/go/amazon-brand/equestrian+riding+helmet?s=breed-thoroughbred" />
  </article>
}
`
  const hits = topicMismatches(src, 'apps/horses-com/src/app/breeds/[slug]/page.tsx')
  assert.equal(hits.filter((hit) => hit.search === 'hoof').length, 1)
  assert.equal(hits.filter((hit) => hit.search === 'helmet').length, 1)
  assert.equal(hits[0].path, '/breeds/')
})

test('the breed template links the buying guide and has no hoof-pick hop', () => {
  const src = readFileSync(
    new URL('../../apps/horses-com/src/app/breeds/[slug]/page.tsx', import.meta.url),
    'utf8',
  )
  assert.equal(src.includes('horse+hoof+pick'), false)
  assert.match(src, /href="\/ownership\/buying-your-first-horse"/)
  assert.equal(
    topicMismatches(src, 'apps/horses-com/src/app/breeds/[slug]/page.tsx').length,
    0,
  )
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

test('the cross-sell allowlist is the documented set', () => {
  assert.deepEqual(
    CROSS_SELLS.map((row) => `${row.path} :: ${row.query}`).sort(),
    [
      '/first-horse-roadmap :: horse hoof pick',
      '/tools :: horse hoof pick',
      '/tools/horse-size-for-rider :: ASTM SEI horse riding helmet',
      '/tools/horse-size-for-rider :: horse girth cinch',
      '/tools/horse-size-for-rider :: horse stirrups',
    ].sort(),
  )
})

test('the relevance note stays on the hop guard', () => {
  const script = readFileSync(new URL('./hop-topic-match.mjs', import.meta.url), 'utf8')
  assert.match(
    script,
    /a hop's product must be something the page tells the reader to use for their pet/,
  )
})

test('the workflow job fails the build on a mismatch', () => {
  const script = readFileSync(new URL('./hop-topic-match.mjs', import.meta.url), 'utf8')
  const yml = readFileSync(new URL('../../.github/workflows/qc.yml', import.meta.url), 'utf8')
  assert.match(script, /process\.exit\(0\)/)
  assert.match(script, /process\.exit\(1\)/)
  assert.equal(yml.includes('Amazon search matches page topic (report-only)'), false)
  assert.match(yml, /name: Amazon search matches page topic\n/)
  assert.match(yml, /node scripts\/ci\/hop-topic-match\.mjs/)
})
