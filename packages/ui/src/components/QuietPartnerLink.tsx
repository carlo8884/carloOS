import { heldShopText, partnerLinkQuiet } from '@carloOS/config/affiliate-hop'

/**
 * Keeps a held product-partner hop in the page.
 * The link renders when that vendor's tag is set. Until then it is plain
 * retailer text: no link, no homepage dump, no commission line.
 */
export function QuietPartnerLink({
  href,
  label,
  tone = 'light',
}: {
  href: string
  label: string
  tone?: 'light' | 'dark'
}) {
  const vendor = href.match(/^\/go\/([^/?#]+)/)?.[1] ?? ''
  if (!partnerLinkQuiet(href)) {
    const className =
      tone === 'dark'
        ? 'inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline'
        : 'font-semibold text-brand-primary'
    return (
      <a className={className} href={href} data-shop-placement="card" rel="sponsored noopener">
        {label}
      </a>
    )
  }
  const quietClass =
    tone === 'dark'
      ? 'mb-5 text-sm leading-relaxed text-white/75 m-0'
      : 'm-0 text-sm leading-relaxed text-brand-text-light'
  return (
    <p data-partner-held={vendor} className={quietClass}>
      {heldShopText(href)}
    </p>
  )
}
