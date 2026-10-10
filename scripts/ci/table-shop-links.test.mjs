import assert from 'node:assert/strict'
import { test } from 'node:test'
import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { heldShopText } from '../../packages/config/affiliate-hop.ts'
import { HELD_COPY_PATTERN } from './internal-voice.mjs'
import { TableShopLink } from '../../packages/ui/src/components/TableShopLink.tsx'
import { QuietPartnerLink } from '../../packages/ui/src/components/QuietPartnerLink.tsx'
import { ReviewCard } from '../../packages/ui/src/components/ReviewCard.tsx'

// tsx compiles the components with the classic JSX runtime.
globalThis.React = React

// Held-partner tags are unset in CI. Keep them unset for these renders.
for (const key of ['AFF_SMARTPAK_TAG', 'AFF_WYSONG_TAG', 'AFF_DOVER_TAG', 'AFF_CARNIWHOLE_TAG']) delete process.env[key]

test('heldShopText names the retailer or the brand, nothing internal', () => {
  assert.equal(heldShopText('/go/smartpak/cosequin-asu-plus?s=tack'), 'Available from SmartPak')
  assert.equal(heldShopText('/go/wysong/epigen-90'), 'Available from Wysong')
  assert.equal(heldShopText('/go/carniwhole/home'), 'Available from Carniwhole')
  assert.equal(heldShopText('/go/unknown-vendor/x'), 'Available from the brand')
  assert.equal(heldShopText(undefined), 'Available from the brand')
})

test('a held TableShopLink row has no link and neutral text', () => {
  const html = renderToStaticMarkup(
    createElement(TableShopLink, { href: '/go/smartpak/cosequin-asu-plus?s=tack', product: 'Cosequin ASU', quietUntilTag: true }),
  )
  assert.doesNotMatch(html, /<a\b/)
  assert.match(html, /Available from SmartPak/)
  assert.doesNotMatch(html, HELD_COPY_PATTERN)
})

test('a held QuietPartnerLink has no link and neutral text', () => {
  const html = renderToStaticMarkup(
    createElement(QuietPartnerLink, { href: '/go/wysong/epigen-90', label: 'Check price at Wysong →' }),
  )
  assert.doesNotMatch(html, /<a\b/)
  assert.match(html, /Available from Wysong/)
  assert.doesNotMatch(html, HELD_COPY_PATTERN)
})

test('a held ReviewCard footer has no shop link and neutral text', () => {
  const html = renderToStaticMarkup(
    createElement(ReviewCard, {
      name: 'Dover Saddlery girth',
      description: 'A girth.',
      ctaText: 'Check price at Dover →',
      ctaHref: '/go/dover/girth?s=tack',
      quietUntilTag: true,
    }),
  )
  assert.doesNotMatch(html, /href="\/go\/dover/)
  assert.match(html, /Available from Dover/)
  assert.doesNotMatch(html, HELD_COPY_PATTERN)
})
