/**
 * Horses.com -- Racing for Newcomers spoke -- /racing/racing-for-newcomers/understanding-racing-silks
 *
 * What racing silks (owners' registered colours) are, how they are registered,
 * a brief history of the tradition, and how silks plus the saddlecloth number
 * let a spectator follow a horse through a race. Non-wagering throughout.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { NewcomerSpokePage } from '../NewcomerSpokePage'
import { getNewcomerSpoke } from '@/data/racing-for-newcomers'

const SLUG = 'understanding-racing-silks'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Understanding Racing Silks — A Spectator’s Guide | Horses.com',
  description:
    'What racing silks are, how owners register their colours, and how they help a spectator follow a horse during a race. A non-wagering guide to racing colours.',
  path: `/racing/racing-for-newcomers/${SLUG}`,
  type: 'article',
})

export default function Page() {
  const data = getNewcomerSpoke(SLUG)
  if (!data) return notFound()
  return <NewcomerSpokePage spoke={data} />
}
