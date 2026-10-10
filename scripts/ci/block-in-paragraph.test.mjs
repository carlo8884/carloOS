import assert from 'node:assert/strict'
import { test } from 'node:test'
import { paragraphBlockHits } from './block-in-paragraph.mjs'

test('a div or figure inside a paragraph is a hit', () => {
  const html = '<p>Lead <div class="chip"></div> tail</p><p>Photo <figure><img alt=""></figure></p>'
  const hits = paragraphBlockHits(html)
  assert.deepEqual(hits.map((hit) => hit.tag), ['div', 'figure'])
})

test('phrasing content and a paragraph beside a div are clean', () => {
  const html = '<div><p>Hello <span>there</span> <a href="/go/amazon-brand/x">shop</a></p></div><figure></figure>'
  assert.deepEqual(paragraphBlockHits(html), [])
})

test('script and style text that looks like a nested div is ignored', () => {
  const html = '<p>ok</p><script>const s = "<p><div>no</div></p>"</script><style>p div{color:red}</style>'
  assert.deepEqual(paragraphBlockHits(html), [])
})

test('the scanner does not auto-close a paragraph before a block', () => {
  const html = '<p>open <div>still inside the raw paragraph</div>'
  assert.equal(paragraphBlockHits(html).length, 1)
})
