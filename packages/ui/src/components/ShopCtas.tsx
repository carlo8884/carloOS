'use client'

/**
 * Amazon + optional Chewy shop pair. Hides empty Chewy hops — never href="#".
 * Chewy-brand search queries fall back to amazon-brand until a Chewy tag is live.
 * Clicks are recorded by AffiliateClickListener (site, page, partner, product, placement).
 * The Associates line sits above the buttons. It follows the earns flag the
 * server layout serialized, so hydration does not delete the sentence.
 * A generic "Shop on Amazon" label is renamed from the search in amazonHref.
 */
import type { CSSProperties } from 'react'
import { liveAnchorHref, shopCtaLabel, visibleChewyHref, visibleShopHref } from '@carloOS/config/affiliate-hop'
import { amazonButtonLabel } from '../lib/amazon-browse-label'
import { useAmazonEarns } from './HopEarns'

const amazonStyle: CSSProperties = {
  display: 'inline-block',
  maxWidth: '100%',
  whiteSpace: 'normal',
  padding: '9px 16px',
  background: 'var(--brand-dark, #232f3e)',
  color: 'white',
  fontSize: '13px',
  fontWeight: 700,
  textDecoration: 'none',
  borderRadius: '6px',
}

const chewyStyle: CSSProperties = {
  ...amazonStyle,
  background: 'var(--brand-primary, #1e90ff)',
}

export function ShopCtas({
  amazonHref,
  chewyHref,
  amazonLabel = 'Shop on Amazon →',
  chewyLabel = 'Shop on Chewy →',
}: {
  amazonHref?: string
  chewyHref?: string
  amazonLabel?: string
  chewyLabel?: string
}) {
  // Amazon stays on visibleShopHref. liveAnchorHref reads tags dynamically, and
  // that diverges between the server render and the client bundle.
  const amazonVisible = visibleShopHref(amazonHref)
  const amazon =
    amazonVisible && /\/go\/amazon/i.test(amazonVisible)
      ? amazonVisible
      : liveAnchorHref(amazonVisible)
  const chewyVisible = visibleChewyHref(chewyHref)
  const chewy = chewyVisible ? liveAnchorHref(chewyVisible) : undefined
  const label = shopCtaLabel(amazonHref, amazonButtonLabel(amazon ?? amazonHref, amazonLabel))
  const amazonAssociate = Boolean(amazon && /\/go\/amazon/i.test(amazon))
  const amazonFromServer = useAmazonEarns()
  // The server flag wins. Reading AFF_AMAZON_TAG here is empty in the browser
  // and hydration removes the line the server rendered.
  const amazonTagLive =
    amazonFromServer !== null
      ? amazonFromServer
      : Boolean(process.env.AFF_AMAZON_TAG || process.env.AFF_AMAZON_BRAND_TAG)
  const chewyTag = process.env.AFF_CHEWY_TAG || process.env.AFF_CHEWY_BRAND_TAG || process.env.AFF_CHEWY_PHARMACY_TAG || ''
  const amazonEarns = Boolean(amazonAssociate && amazonTagLive)
  const chewyEarns = Boolean(chewy && /\/go\/chewy/i.test(chewy) && chewyTag)
  if (!amazon && !chewy) return null
  const disclosure = amazonEarns || chewyEarns ? (
    <p
      data-affiliate-disclosure="hop"
      style={{ margin: '0 0 8px', fontSize: '12px', lineHeight: 1.45, color: 'var(--brand-text-mid, #5c6570)' }}
    >
      {amazonEarns
        ? 'As an Amazon Associate we earn from qualifying purchases.'
        : 'We may earn a commission from qualifying purchases.'}
    </p>
  ) : null
  return (
    <div>
      {disclosure}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {amazon ? (
          <a
            href={amazon}
            data-shop-placement="card"
            rel="sponsored noopener"
            style={amazonStyle}
          >
            {label}
          </a>
        ) : null}
        {chewy ? (
          <a
            href={chewy}
            data-shop-placement="card"
            rel="sponsored noopener"
            style={chewyStyle}
          >
            {chewyLabel}
          </a>
        ) : null}
      </div>
    </div>
  )
}
