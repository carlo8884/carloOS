/**
 * Horses.com -- Racing for Newcomers spoke -- /racing/racing-for-newcomers/a-day-at-the-races
 *
 * The spectator experience of attending the races: the rhythm of the card, the
 * paddock and parade ring, the post parade and call to post, watching a race,
 * etiquette, what to wear, and family-friendly notes. Non-wagering throughout.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { NewcomerSpokePage } from '../NewcomerSpokePage'
import { getNewcomerSpoke } from '@/data/racing-for-newcomers'

const SLUG = 'a-day-at-the-races'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'A Day at the Races — A Newcomer’s Guide | Horses.com',
  description:
    'A newcomer’s guide to attending the races: the paddock, post parade, call to post, watching a race, etiquette, and what to wear. A non-wagering spectator guide.',
  path: `/racing/racing-for-newcomers/${SLUG}`,
  type: 'article',
})

export default function Page() {
  const data = getNewcomerSpoke(SLUG)
  if (!data) return notFound()
  return <NewcomerSpokePage spoke={data} />
}
