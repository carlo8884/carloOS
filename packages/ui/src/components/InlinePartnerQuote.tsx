import { liveAnchorHref, partnerNeededLabel, partnerQuoteHeld, partnerTagReady } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/**
 * A body-copy quote for Trupanion, Healthy Paws, or Embrace.
 * Unset tags render a disabled control. A set tag keeps the /go link.
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
  if (held) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          type="button"
          disabled
          className="border-0 bg-transparent p-0 text-left font-semibold text-brand-text-light cursor-not-allowed"
        >
          {partnerNeededLabel(label)}
        </button>
        <HeldQuoteNext />
      </span>
    )
  }
  if (!hop) return null
  return (
    <a className="font-semibold text-brand-primary" href={hop} data-shop-placement="card" rel="sponsored noopener">
      {label}
    </a>
  )
}
