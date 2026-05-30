import { MetadataRoute } from 'next'
import { getSiteConfig } from '@carloOS/config'
import { allRaces } from '../data/racing/meetings'
import {
  allHorseSlugs,
  allTrainerSlugs,
  allJockeySlugs,
  allTrackSlugs,
} from '../data/racing/profiles'
import { allTermSlugs } from '../data/racing/glossary'
import { allGuideSlugs } from '../data/racing/guides'

/**
 * Sitemap — hub pages, every racecard, every profile, and every glossary term.
 * Grows automatically with the data; no manual edits when the feed scales.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteConfig('horse-racing').theme.siteUrl
  const now = new Date()

  const entry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  const racecards = allRaces().map(({ race }) => entry(`/racecards/${race.id}`, 'daily', 0.7))
  const horses = allHorseSlugs().map((s) => entry(`/horses/${s}`, 'daily', 0.6))
  const trainers = allTrainerSlugs().map((s) => entry(`/trainers/${s}`, 'weekly', 0.6))
  const jockeys = allJockeySlugs().map((s) => entry(`/jockeys/${s}`, 'weekly', 0.6))
  const tracks = allTrackSlugs().map((s) => entry(`/tracks/${s}`, 'weekly', 0.6))
  const glossary = allTermSlugs().map((s) => entry(`/glossary/${s}`, 'monthly', 0.6))
  const guides = allGuideSlugs().map((s) => entry(`/guides/${s}`, 'monthly', 0.7))

  return [
    entry('', 'daily', 1.0),
    entry('/methodology', 'monthly', 0.9),
    entry('/track-record', 'daily', 0.8),
    entry('/about', 'monthly', 0.7),
    entry('/horses', 'daily', 0.7),
    entry('/trainers', 'daily', 0.7),
    entry('/jockeys', 'daily', 0.7),
    entry('/tracks', 'daily', 0.7),
    entry('/glossary', 'weekly', 0.8),
    entry('/guides', 'weekly', 0.8),
    ...racecards,
    ...horses,
    ...trainers,
    ...jockeys,
    ...tracks,
    ...glossary,
    ...guides,
  ]
}
