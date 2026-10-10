import type { SiteId } from '@carloOS/config'
import {
  consultLink,
  hopCommissionReady,
  partnerQuoteHeld,
  visibleShopHref,
} from '@carloOS/config/affiliate-hop'
import { AffiliateDisclosure } from '@carloOS/ui'

/**
 * A live /go button (partner tag set) gets the standard affiliate disclosure.
 * A held quote button or a plain untagged carrier link does not earn, so
 * it gets a neutral note instead of a commission line.
 */
export function HopDisclosure({
  href,
  siteId,
  noteClassName,
  showQuietNote = true,
  tone,
}: {
  href: string | readonly string[]
  siteId: SiteId
  noteClassName?: string
  /** When false, a held or untagged button adds no extra sentence. */
  showQuietNote?: boolean
  /** Light text when this note sits on a dark hero. */
  tone?: 'on-dark'
}) {
  const hrefs = Array.isArray(href) ? href : [href]
  const live = hrefs.some((item) => {
    const consult = consultLink(item)
    if (consult && !consult.attributed) return false
    const visible = visibleShopHref(item)
    if (!visible) return false
    // Amazon anchors stay on the page even before the tag is read at build time.
    if (/\/go\/amazon(?:-brand)?\//.test(visible)) return true
    return hopCommissionReady(visible)
  })
  if (live) {
    if (tone === 'on-dark') {
      return (
        <p data-affiliate-disclosure="inline" className="mt-3 mb-0 text-xs leading-relaxed text-white">
          <strong className="font-bold uppercase tracking-eyebrow text-2xs mr-2">Disclosure</strong>
          Some links on this page are affiliate links. We earn a commission if you click and buy, at no cost to you. We never accept payment for favorable reviews.{' '}
          <a href="/disclosure" className="font-semibold text-white underline underline-offset-2">
            Read our full disclosure
          </a>
        </p>
      )
    }
    return <AffiliateDisclosure variant="inline" siteId={siteId} className="mt-3 mb-0" />
  }
  if (!showQuietNote) return null
  const quiet = hrefs.some((item) => {
    if (partnerQuoteHeld(item)) return true
    const consult = consultLink(item)
    return Boolean(consult && !consult.attributed)
  })
  if (!quiet) return null
  return (
    <p data-quote-note className={noteClassName ?? 'mt-3 mb-0 text-xs leading-relaxed text-brand-text-mid'}>
      Quotes open on the carrier&apos;s site.
    </p>
  )
}
