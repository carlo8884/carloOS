import type { SiteId } from '@carloOS/config'
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
  const shop = pick.href.startsWith('/go/')
  return (
    <div data-result-pick className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-4">
      <p className="m-0 text-sm leading-relaxed text-brand-text-mid">{pick.detail}</p>
      {shop ? <AffiliateDisclosure variant="inline" siteId={siteId} className="my-3" /> : null}
      <a
        href={pick.href}
        rel={shop ? 'sponsored noopener' : undefined}
        className="inline-block font-semibold text-brand-primary underline underline-offset-2"
      >
        {pick.label}
      </a>
    </div>
  )
}
