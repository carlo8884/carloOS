import { partnerNeededLabel, partnerQuoteHeld, visibleShopHref } from '@carloOS/config/affiliate-hop'

/**
 * A body-copy quote for Trupanion, Healthy Paws, or Embrace.
 * Unset tags render a disabled control. A set tag keeps the /go link.
 */
export function InlinePartnerQuote({ href, label }: { href: string; label: string }) {
  if (partnerQuoteHeld(href)) {
    return (
      <button
        type="button"
        disabled
        className="border-0 bg-transparent p-0 text-left font-semibold text-brand-text-light cursor-not-allowed"
      >
        {partnerNeededLabel(label)}
      </button>
    )
  }
  const hop = visibleShopHref(href)
  if (!hop) return null
  return (
    <a className="font-semibold text-brand-primary" href={hop} rel="sponsored noopener">
      {label}
    </a>
  )
}
