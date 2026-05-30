/**
 * CarloOS DataPartnershipsCallout — small footer-area block inviting
 * researchers, journalists, universities, and commercial partners to
 * contact the site about its editorially-curated datasets.
 *
 * MVP intentional minimal surface: one short paragraph + a mailto link
 * to `data@<site-domain>` (derived from the site's siteUrl). No form
 * (no spam validation overhead), no giant CTA, no puffery.
 *
 * Per QC-STANDARDS.md §1: no "industry leader" language, no fake
 * credentials. The opt-out signal ("we don't sell tracking data") is
 * carried by the longer /data page; this callout is a quiet invitation.
 *
 * USAGE (import directly from this module):
 *   import { DataPartnershipsCallout } from '@carloOS/ui/src/components/DataPartnershipsCallout'
 *   <DataPartnershipsCallout siteId="dog-com" />
 *   <DataPartnershipsCallout siteId="fish-com" topic="aquarium stocking" />
 */

import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'

export interface DataPartnershipsCalloutProps {
  siteId: SiteId
  /** Optional one-word topic hook (e.g. "aquarium stocking", "breed health"). */
  topic?: string
  /** Optional override for the /data page link. Defaults to "/data". */
  href?: string
  /** Optional extra className for container */
  className?: string
}

/**
 * Returns the bare host (e.g. "dog.com") from a site's full siteUrl.
 * Used to build the `data@<host>` mailto target deterministically.
 */
function hostFromSiteUrl(siteUrl: string): string {
  return siteUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
}

export function DataPartnershipsCallout({
  siteId,
  topic,
  href = '/data',
  className,
}: DataPartnershipsCalloutProps) {
  const config = getSiteConfig(siteId)
  const host = hostFromSiteUrl(config.theme.siteUrl)
  const mailto = `data@${host}`
  const topicPhrase = topic ? ` on ${topic}` : ''

  return (
    <aside
      data-data-partnerships-callout
      aria-label="Data partnerships"
      className={[
        'mt-10 pt-6 border-t border-brand-border',
        'text-sm text-brand-text-mid leading-relaxed max-w-3xl',
        className ?? '',
      ].join(' ')}
    >
      <strong className="font-semibold text-brand-text-dark">
        Researcher, journalist, or building something with pet data?
      </strong>{' '}
      We maintain editorially-curated datasets{topicPhrase} and are open to
      partnerships with universities, newsrooms, and commercial teams. Email{' '}
      <a
        href={`mailto:${mailto}`}
        className="text-brand-primary hover:underline no-underline font-medium"
      >
        {mailto}
      </a>{' '}
      or read more about{' '}
      <Link
        href={href}
        className="text-brand-primary hover:underline no-underline font-medium"
      >
        data partnerships
      </Link>
      .
    </aside>
  )
}
