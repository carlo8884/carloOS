import { consultLink, hopCommissionReady, partnerLinkQuiet, partnerNeededLabel, partnerQuoteHeld, partnerTagReady, shopCtaLabel, visibleShopHref } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

/**
 * The page's top-pick hop, in normal flow under the title.
 * Disclosure sits above the link. Nothing is fixed or overlaid.
 * An unset Trupanion, Healthy Paws, or Embrace quote stays visible but
 * disabled. holdWithoutPartnerId is the same hold for callers that opt in.
 */
export function PrimaryHop({
  href,
  label,
  holdWithoutPartnerId = false,
  quietUntilTag = false,
}: {
  href: string
  label: string
  holdWithoutPartnerId?: boolean
  /** Held product partners stay visible as a note until their own tag is set. */
  quietUntilTag?: boolean
}) {
  if (quietUntilTag && partnerLinkQuiet(href)) {
    return (
      <p className="mb-5 text-sm leading-relaxed text-white/75 m-0" data-primary-hop="held">
        {label.replace(/\s*→\s*$/, '').trim()} — partner ID needed
      </p>
    )
  }
  const held = partnerQuoteHeld(href) || (holdWithoutPartnerId && !partnerTagReady(href))
  if (held) {
    return (
      <div className="mb-5 flex flex-wrap items-center gap-3" data-primary-hop="true">
        <button
          type="button"
          disabled
          className="inline-block max-w-full whitespace-normal text-left bg-white/70 text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md cursor-not-allowed"
        >
          {partnerNeededLabel(label)}
        </button>
        <HeldQuoteNext tone="on-color" />
      </div>
    )
  }
  const consult = consultLink(href)
  const plain = Boolean(consult && !consult.attributed)
  const hop = plain ? consult!.href : visibleShopHref(href)
  if (!hop) return null
  const amazon = /\/go\/amazon/.test(hop)
  const text = plain ? label : shopCtaLabel(href, label)
  return (
    <div className="mb-5" data-primary-hop="true">
      {hop.startsWith('/go/') && hopCommissionReady(hop) ? (
        <p className="text-xs text-white/80 mb-2">
          {amazon
            ? 'As an Amazon Associate we earn from qualifying purchases.'
            : 'We may earn a commission from qualifying purchases.'}
        </p>
      ) : null}
      <a
        href={hop}
        data-shop-placement="hero"
        rel={plain ? 'nofollow noopener' : 'sponsored noopener'}
        target={plain ? '_blank' : undefined}
        className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline"
      >
        {text}
      </a>
    </div>
  )
}
