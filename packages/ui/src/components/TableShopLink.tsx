import { partnerNeededLabel, partnerQuoteHeld, partnerTagReady, tableShopLink } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/** One product row's tracked shop link. The href is an existing /go target. */
export function TableShopLink({
  href,
  product,
  holdWithoutPartnerId = false,
}: {
  href: string
  product: string
  holdWithoutPartnerId?: boolean
}) {
  if (partnerQuoteHeld(href) || (holdWithoutPartnerId && !partnerTagReady(href))) {
    return (
      <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-semibold text-brand-text-light">{partnerNeededLabel(`${product} quote`)}</span>
        <HeldQuoteNext />
      </span>
    )
  }
  const link = tableShopLink(href, product)
  if (!link) return null
  return (
    <a
      href={link.href}
      rel="sponsored noopener"
      className="mt-1 block font-semibold text-brand-primary underline underline-offset-2"
    >
      {link.label}
    </a>
  )
}
