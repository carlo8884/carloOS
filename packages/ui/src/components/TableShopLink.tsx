import { tableShopLink } from '@carloOS/config/affiliate-hop'

/** One product row's tracked shop link. The href is an existing /go target. */
export function TableShopLink({ href, product }: { href: string; product: string }) {
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
