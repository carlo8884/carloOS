import { hopCommissionReady, liveAnchorHref, partnerLinkQuiet, partnerNeededLabel, shopCtaLabel, visitNextStep } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

const CARRIER_QUOTE = /^\/go\/(trupanion|healthy-paws|embrace|lemonade|pumpkin|pets-best|spot|manypets|figo|aspca|fetch|metlife|wagmo)(?:\/|\?|#|$)/

/**
 * The page's top-pick hop, in normal flow under the title.
 * Disclosure sits above the link. Nothing is fixed or overlaid.
 * An unset carrier quote links to the comparison. A quiet product partner stays a note.
 * The link returns when that tag is set.
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
  // Same hold as partnerQuoteHeld. Kept so existing callers still type-check.
  void holdWithoutPartnerId
  const hop = liveAnchorHref(href)
  if (!hop) {
    if (!href?.startsWith('/go/')) return null
    const quietProduct = quietUntilTag || partnerLinkQuiet(href)
    if (!quietProduct && CARRIER_QUOTE.test(href)) {
      return (
        <div className="mb-5" data-primary-hop="held">
          <HeldQuoteNext tone="on-color" />
        </div>
      )
    }
    const visit = visitNextStep(href)
    if (visit) {
      return (
        <>
          <p className="mb-5 text-sm leading-relaxed text-white/75 m-0" data-primary-hop="held">
            The visit link stays off until that partner ID is set.
          </p>
          <p className="mb-5 m-0">
            <a
              href={visit.href}
              className="inline-block max-w-full whitespace-normal text-left text-sm font-bold text-white underline underline-offset-2"
            >
              {visit.label}
            </a>
          </p>
        </>
      )
    }
    return (
      <p className="mb-5 text-sm leading-relaxed text-white/75 m-0" data-primary-hop="held">
        {quietProduct
          ? `${label.replace(/\s*→\s*$/, '').trim()} — partner ID needed`
          : partnerNeededLabel(label)}
      </p>
    )
  }
  const amazon = /\/go\/amazon/.test(hop)
  const text = shopCtaLabel(href, label)
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
        rel="sponsored noopener"
        className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline"
      >
        {text}
      </a>
    </div>
  )
}
