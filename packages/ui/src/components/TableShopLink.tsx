import { heldShopText, hopCommissionReady, liveAnchorHref, partnerQuoteHeld, partnerTagReady, tableShopLink } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/** One product row's tracked shop link. The href is an existing /go target. */
export function TableShopLink({
  href,
  product,
  label,
  holdWithoutPartnerId = false,
  quietUntilTag = false,
}: {
  href: string
  product: string
  /** Visible text when the generated “product on retailer” line would imply a product page. */
  label?: string
  holdWithoutPartnerId?: boolean
  /** Held product partners stay in the row as plain retailer text, with no link. */
  quietUntilTag?: boolean
}) {
  const hop = liveAnchorHref(href)
  if (!hop) {
    if (partnerQuoteHeld(href) || (holdWithoutPartnerId && !partnerTagReady(href))) {
      return (
        <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <HeldQuoteNext />
        </span>
      )
    }
    if (href.startsWith('/go/')) {
      return (
        <span data-partner-held="true" className="mt-1 block text-sm font-semibold text-brand-text-light">
          {heldShopText(href)}
        </span>
      )
    }
    return null
  }
  void quietUntilTag
  const link = tableShopLink(href, product)
  const text = label?.trim() || link?.label || product
  const amazon = /\/go\/amazon/i.test(hop)
  return (
    <span className="mt-1 block">
      {hopCommissionReady(hop) ? (
        <span className="mb-1 block text-2xs font-normal text-brand-text-light no-underline" data-affiliate-disclosure="hop">
          {amazon
            ? 'As an Amazon Associate we earn from qualifying purchases.'
            : 'We may earn a commission from qualifying purchases.'}
        </span>
      ) : null}
      <a
        href={hop}
        data-shop-placement="table"
        rel="sponsored noopener"
        className="block font-semibold text-brand-primary underline underline-offset-2"
      >
        {text}
      </a>
    </span>
  )
}
