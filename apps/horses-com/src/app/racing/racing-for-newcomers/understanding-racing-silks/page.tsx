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
const spoke = getNewcomerSpoke(SLUG)

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: `${spoke?.metaTitle ?? 'Understanding Racing Silks'} | Horses.com`,
  description: spoke?.description ?? '',
  path: `/racing/racing-for-newcomers/${SLUG}`,
  type: 'article',
})

export default function Page() {
  if (!spoke) notFound()
  return <NewcomerSpokePage spoke={spoke} />
}
