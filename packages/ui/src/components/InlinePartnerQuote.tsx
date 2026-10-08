import { liveAnchorHref, partnerQuoteHeld, partnerTagReady } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/**
 * A body-copy quote for Trupanion, Healthy Paws, or Embrace.
 * An unset tag links to the insurance comparison. A set tag keeps the /go link.
 * holdWithoutPartnerId is the same hold for callers that opt in.
 */
export function InlinePartnerQuote({
  href,
  label,
  holdWithoutPartnerId = false,
}: {
  href: string
  label: string
  holdWithoutPartnerId?: boolean
}) {
  const hop = liveAnchorHref(href)
  const held = !hop && (partnerQuoteHeld(href) || (holdWithoutPartnerId && !partnerTagReady(href)) || href.startsWith('/go/'))
  if (held) return <HeldQuoteNext />
  if (!hop) return null
  return (
    <a className="font-semibold text-brand-primary" href={hop} data-shop-placement="card" rel="sponsored noopener">
      {label}
    </a>
  )
}
