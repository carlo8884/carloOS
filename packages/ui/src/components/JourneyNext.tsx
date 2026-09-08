/**
 * JourneyNext — one next step after a useful calculator answer.
 *
 * Editorial strip: next-step link + one existing /go hop. Not a shop dump,
 * not a magnet, not a kitchen-kit. Disclosure sits above the hop.
 */
import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { ShopCtas } from './ShopCtas'

export interface JourneyNextProps {
  siteId: SiteId
  nextHref: string
  nextLabel: string
  nextBlurb: string
  resourceHref: string
  resourceLabel: string
}

export function JourneyNext({
  siteId,
  nextHref,
  nextLabel,
  nextBlurb,
  resourceHref,
  resourceLabel,
}: JourneyNextProps) {
  return (
    <aside
      id="journey-next"
      className="mt-8 max-w-2xl rounded-xl border border-brand-border bg-brand-white p-5"
    >
      <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
        Next step
      </p>
      <p className="font-display text-base font-semibold leading-snug text-brand-dark">
        <Link href={nextHref} className="text-brand-primary no-underline hover:underline">
          {nextLabel} →
        </Link>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">{nextBlurb}</p>
      <AffiliateDisclosure variant="inline" siteId={siteId} className="my-3" />
      <ShopCtas amazonHref={resourceHref} amazonLabel={resourceLabel} />
    </aside>
  )
}
