import assert from 'node:assert/strict'
import { test } from 'node:test'
import { anchorHrefs } from './held-partner-hrefs.mjs'
import { heldVendorOfHref, liveAnchorHref } from '../../packages/config/affiliate-hop.ts'

test('built HTML anchors ignore script JSON and quiet notes', () => {
  const html = `<!doctype html><html><body>
    <a href="/go/amazon-brand/wysong+ferret+food?s=tools-label-calculator">Browse Wysong ferret food on Amazon</a>
    <p data-partner-held="wysong">Check price of Wysong Epigen 90 at Wysong stays ready.</p>
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
