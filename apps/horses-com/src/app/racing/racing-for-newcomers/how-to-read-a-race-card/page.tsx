/**
 * Horses.com -- Racing for Newcomers spoke -- /racing/racing-for-newcomers/how-to-read-a-race-card
 *
 * Decodes the racecard / program field by field as SPECTATOR LITERACY -- what
 * each entry tells you about the horse, its connections, the distance, the
 * class, the weights, the age/sex notation, and the form line, read like a
 * baseball box score. Carries an explicit "not handicapping / not betting"
 * disclaimer in body, FAQ, and closing note (QC §1 / racing quality bar §2).
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { NewcomerSpokePage } from '../NewcomerSpokePage'
import { getNewcomerSpoke } from '@/data/racing-for-newcomers'

const SLUG = 'how-to-read-a-race-card'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'How to Read a Race Card — A Spectator’s Guide | Horses.com',
  description:
    'A plain-language guide to reading a race card as a spectator: what the horse, connections, distance, class, weights, and form figures mean. Non-wagering.',
  path: `/racing/racing-for-newcomers/${SLUG}`,
  type: 'article',
})

export default function Page() {
  const data = getNewcomerSpoke(SLUG)
  if (!data) return notFound()
  return <NewcomerSpokePage spoke={data} />
}
