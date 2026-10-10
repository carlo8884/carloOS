import assert from 'node:assert/strict'
import { test } from 'node:test'
import { anchorHrefs, heldCopyHits } from './held-partner-hrefs.mjs'
import { heldVendorOfHref, liveAnchorHref } from '../../packages/config/affiliate-hop.ts'

test('built HTML anchors ignore script JSON and quiet notes', () => {
  const html = `<!doctype html><html><body>
    <a href="/go/amazon-brand/wysong+ferret+food?s=tools-label-calculator">Browse Wysong ferret food on Amazon</a>
    <p data-partner-held="wysong">Available from Wysong</p>
    <script type="application/ld+json">{"url":"https://horses.com/go/smartpak/cosequin-asu-plus"}</script>
    <a href="/go/smartpak/cosequin-asu-plus?s=tools-horse-age-calculator">SmartPak</a>
    <a href="https://vetster.com/?campaign=telehealth">Vetster</a>
  </body></html>`
  const hrefs = anchorHrefs(html)
  assert.deepEqual(hrefs, [
    '/go/amazon-brand/wysong+ferret+food?s=tools-label-calculator',
    '/go/smartpak/cosequin-asu-plus?s=tools-horse-age-calculator',
    'https://vetster.com/?campaign=telehealth',
  ])
  assert.equal(heldVendorOfHref(hrefs[0]), null)
  assert.equal(heldVendorOfHref(hrefs[1]), 'smartpak')
  assert.equal(heldVendorOfHref(hrefs[2]), 'vetster.com')
  assert.equal(
    liveAnchorHref('/go/amazon-brand/senior+horse+feed?s=tools-horse-age-calculator', {}),
    '/go/amazon-brand/senior+horse+feed?s=tools-horse-age-calculator',
  )
})

test('an amazon-brand search that names a held brand is not held', () => {
  assert.equal(heldVendorOfHref('/go/amazon-brand/wysong+ferret+food?s=diet-best-ferret-kibble'), null)
  assert.equal(heldVendorOfHref('/go/chewy-brand/royal+canin+dry+dog+food'), 'chewy-brand')
  assert.equal(
    liveAnchorHref('/go/chewy-brand/royal+canin+dry+dog+food', {}),
    '/go/amazon-brand/royal+canin+dry+dog+food',
  )
})

test('a held row with neutral text passes the built-copy scan', () => {
  const html = `<html><body>
    <span data-partner-held="true">Available from SmartPak</span>
    <p data-partner-held="carniwhole">Available from the brand</p>
    <script>self.__next_f.push([1,"Available from Dover"])</script>
  </body></html>`
  assert.deepEqual(heldCopyHits(html), [])
  assert.deepEqual(anchorHrefs(html), [])
})

test('internal held-partner wording in built HTML or RSC fails', () => {
  assert.deepEqual(heldCopyHits('<span data-partner-held="true">SmartPak Cosequin — partner ID needed</span>'), ['partner ID'])
  assert.equal(heldCopyHits('<p>Check price stays ready for when the Wysong Partner ID is set.</p>').length >= 1, true)
  assert.deepEqual(heldCopyHits('3:["$","span",null,{"children":"Dover — tag needed"}]'), ['tag needed'])
  assert.deepEqual(heldCopyHits('<p>The visit link stays off until that tag is set.</p>'), ['tag is set'])
})
