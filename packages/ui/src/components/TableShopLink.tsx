import { liveAnchorHref, partnerQuoteHeld, partnerTagReady, tableShopLink } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/** One product row's tracked shop link. The href is an existing /go target. */
export function TableShopLink({
  href,
  product,
  holdWithoutPartnerId = false,
  quietUntilTag = false,
}: {
  href: string
  product: string
  holdWithoutPartnerId?: boolean
  /** Held product partners stay in the row as a note until their own tag is set. */
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
          {product} — partner ID needed
        </span>
      )
    }
    return null
  }
  void quietUntilTag
  const link = tableShopLink(href, product)
  return (
    <a
      href={hop}
      data-shop-placement="table"
      rel="sponsored noopener"
      className="mt-1 block font-semibold text-brand-primary underline underline-offset-2"
    >
      {link?.label ?? product}
    </a>
  )
}
