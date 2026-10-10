/**
 * JourneyNext — one next step after a useful calculator answer.
 *
 * Editorial strip: next-step link + one existing /go hop. Not a shop dump,
 * not a magnet, not a kitchen-kit. Disclosure sits above the hop.
 */
import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import {
  consultLink,
  hopCommissionReady,
  partnerQuoteHeld,
  visibleShopHref,
} from '@carloOS/config/affiliate-hop'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { ShopCtas } from './ShopCtas'

export interface JourneyNextProps {
  siteId: SiteId
  nextHref: string
  nextLabel: string
  nextBlurb: string
  /** Omit both when the page no longer has a shop button for this step. */
  resourceHref?: string
  resourceLabel?: string
}

export function JourneyNext({
  siteId,
  nextHref,
  nextLabel,
  nextBlurb,
  resourceHref,
  resourceLabel,
}: JourneyNextProps) {
  const consult = resourceHref ? consultLink(resourceHref) : null
  const visible = !resourceHref || (consult && !consult.attributed) ? null : visibleShopHref(resourceHref)
  const live = Boolean(visible && hopCommissionReady(visible))
  const quiet = Boolean(
    resourceHref && !live && (partnerQuoteHeld(resourceHref) || Boolean(consult && !consult.attributed)),
  )
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
      {live ? <AffiliateDisclosure variant="inline" siteId={siteId} className="my-3" /> : null}
      {quiet ? (
        <p data-quote-note className="my-3 text-xs leading-relaxed text-brand-text-mid">
          Quotes open on the carrier&apos;s site.
        </p>
      ) : null}
      {resourceHref ? <ShopCtas amazonHref={resourceHref} amazonLabel={resourceLabel ?? ''} /> : null}
    </aside>
  )
}
