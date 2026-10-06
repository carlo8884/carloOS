'use client'

/**
 * Amazon + optional Chewy shop pair. Hides empty Chewy hops — never href="#".
 * Chewy-brand search queries fall back to amazon-brand until a Chewy tag is live.
 * Clicks are recorded by AffiliateClickListener (site, source, partner).
 * A generic "Shop on Amazon" label is renamed from the search in amazonHref.
 */
import type { CSSProperties } from 'react'
import { shopCtaLabel, visibleChewyHref, visibleShopHref } from '@carloOS/config/affiliate-hop'
import { amazonButtonLabel } from '../lib/amazon-browse-label'

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
  const amazon = visibleShopHref(amazonHref)
  const chewy = visibleChewyHref(chewyHref)
  const label = shopCtaLabel(amazonHref, amazonButtonLabel(amazon ?? amazonHref, amazonLabel))
  const amazonAssociate = Boolean(amazon && /\/go\/amazon/i.test(amazon))
  if (!amazon && !chewy) return null
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {amazon ? (
          <a
            href={amazon}
            rel="sponsored noopener"
            style={amazonStyle}
          >
            {label}
          </a>
        ) : null}
        {chewy ? (
          <a
            href={chewy}
            rel="sponsored noopener"
            style={chewyStyle}
          >
            {chewyLabel}
          </a>
        ) : null}
      </div>
      <p
        data-affiliate-disclosure="hop"
        style={{ margin: '8px 0 0', fontSize: '12px', lineHeight: 1.45, color: 'var(--brand-text-mid, #5c6570)' }}
      >
        {amazonAssociate
          ? 'As an Amazon Associate we earn from qualifying purchases.'
          : 'We may earn a commission from qualifying purchases.'}
      </p>
    </div>
  )
}
