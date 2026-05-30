import { MetadataRoute } from 'next'
import { getSiteConfig } from '@carloOS/config'
import { allRaces } from '../data/racing/meetings'

/**
 * Sitemap — Race Center hub + every dynamic racecard.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteConfig('horse-racing').theme.siteUrl
  const now = new Date()

  const racecards: MetadataRoute.Sitemap = allRaces().map(({ race }) => ({
    url: `${base}/racecards/${race.id}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/track-record`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    ...racecards,
  ]
}
