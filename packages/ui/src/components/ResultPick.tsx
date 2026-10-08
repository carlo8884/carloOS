import type { SiteId } from '@carloOS/config'
import { liveAnchorHref, partnerLinkQuiet, partnerNeededLabel, partnerQuoteHeld, shopCtaLabel } from '@carloOS/config/affiliate-hop'
import type { MatchedPick } from '../lib/result-picks'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { HeldQuoteNext } from './HeldQuoteNext'

/** One closing recommendation under a calculator result. Disclosure sits above a shop link. */
export function ResultPick({
  siteId,
  pick,
  linkFirst = false,
}: {
  siteId: SiteId
  pick: MatchedPick | null
  /** Put the shop link at the top of this result so it stays on the first screen. */
  linkFirst?: boolean
}) {
  if (!pick) return null
  const held = partnerQuoteHeld(pick.href)
  const href = held ? undefined : liveAnchorHref(pick.href)
  const quiet = !held && !href && pick.href.startsWith('/go/')
  if (!href && !held && !quiet) return null
  const shop = Boolean(href?.startsWith('/go/'))
  const label = shop && href ? shopCtaLabel(pick.href, pick.label) : pick.label
  const detail = <p className="m-0 text-sm leading-relaxed text-brand-text-mid">{pick.detail}</p>
  const disclosure = shop ? (
    <AffiliateDisclosure variant="inline" siteId={siteId} className={linkFirst ? 'mt-0 mb-3' : 'my-3'} />
  ) : null
  const control = held ? (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
      <button
        type="button"
        disabled
        className="inline-block border-0 bg-transparent p-0 text-left font-semibold text-brand-text-light cursor-not-allowed"
      >
        {partnerNeededLabel(pick.label)}
      </button>
      <HeldQuoteNext />
    </span>
  ) : quiet ? (
    <span data-partner-held="true" className="inline-block text-sm font-semibold text-brand-text-light">
      {partnerLinkQuiet(pick.href)
        ? `${pick.label.replace(/\s*→\s*$/, '').trim()} — partner ID needed`
        : partnerNeededLabel(pick.label)}
    </span>
  ) : href ? (
    <a
      href={href}
      data-shop-placement={shop || href.startsWith('http') ? 'card' : undefined}
      rel={shop ? 'sponsored noopener' : undefined}
      className="inline-block font-semibold text-brand-primary underline underline-offset-2"
    >
      {label}
    </a>
  ) : null
  return (
    <div data-result-pick className={`${linkFirst ? 'mb-4' : 'mt-4'} rounded-lg border border-brand-border bg-brand-surface p-4`}>
      {linkFirst ? (
        <>
          {disclosure}
          {control}
          <div className="mt-3">{detail}</div>
        </>
      ) : (
        <>
          {detail}
          {disclosure}
          {control}
        </>
      )}
    </div>
  )
}
