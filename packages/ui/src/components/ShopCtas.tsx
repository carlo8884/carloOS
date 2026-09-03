/**
 * Amazon + optional Chewy shop pair. Hides empty Chewy hops — never href="#".
 * Chewy-brand search queries fall back to amazon-brand until a Chewy tag is live.
 */
import type { CSSProperties } from 'react'
import { visibleChewyHref, visibleShopHref } from '@carloOS/config/affiliate-hop'

const amazonStyle: CSSProperties = {
  display: 'inline-block',
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
  if (!amazon && !chewy) return null
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {amazon ? (
        <a href={amazon} rel="sponsored noopener" style={amazonStyle}>
          {amazonLabel}
        </a>
      ) : null}
      {chewy ? (
        <a href={chewy} rel="sponsored noopener" style={chewyStyle}>
          {chewyLabel}
        </a>
      ) : null}
    </div>
  )
}
