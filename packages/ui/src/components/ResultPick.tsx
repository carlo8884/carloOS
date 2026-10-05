import type { SiteId } from '@carloOS/config'
import { partnerNeededLabel, partnerQuoteHeld, visibleShopHref } from '@carloOS/config/affiliate-hop'
import type { MatchedPick } from '../lib/result-picks'
import { AffiliateDisclosure } from './AffiliateDisclosure'

/** One closing recommendation under a calculator result. Disclosure sits above a shop link. */
export function ResultPick({
  siteId,
  pick,
}: {
  siteId: SiteId
  pick: MatchedPick | null
}) {
  if (!pick) return null
  const held = partnerQuoteHeld(pick.href)
  const href = held ? undefined : pick.href.startsWith('/go/') ? visibleShopHref(pick.href) : pick.href
  if (!href && !held) return null
  const shop = Boolean(href?.startsWith('/go/'))
  const label =
    shop && href && /\/go\/amazon/.test(href) && /chewy/i.test(pick.href)
      ? pick.label.replace(/\bon Chewy\b/i, 'on Amazon')
      : pick.label
  return (
    <div data-result-pick className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-4">
      <p className="m-0 text-sm leading-relaxed text-brand-text-mid">{pick.detail}</p>
      {shop ? <AffiliateDisclosure variant="inline" siteId={siteId} className="my-3" /> : null}
      {held ? (
        <button
          type="button"
          disabled
          className="inline-block border-0 bg-transparent p-0 text-left font-semibold text-brand-text-light cursor-not-allowed"
        >
          {partnerNeededLabel(pick.label)}
        </button>
      ) : (
        <a
          href={href}
          rel={shop ? 'sponsored noopener' : undefined}
          className="inline-block font-semibold text-brand-primary underline underline-offset-2"
        >
          {label}
        </a>
      )}
    </div>
  )
}
