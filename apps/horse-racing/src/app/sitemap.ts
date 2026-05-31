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
import { allOwnershipSlugs } from '../data/racing/ownership'
import { allExperienceSlugs } from '../data/racing/experiences'
import { allGearSlugs } from '../data/racing/gear'

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
  const ownership = allOwnershipSlugs().map((s) => entry(`/ownership/${s}`, 'monthly', 0.7))
  const experiences = allExperienceSlugs().map((s) => entry(`/experiences/${s}`, 'monthly', 0.7))
  const gear = allGearSlugs().map((s) => entry(`/gear/${s}`, 'monthly', 0.7))

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
    entry('/ownership', 'weekly', 0.9),
    entry('/ownership/playbook', 'monthly', 0.8),
    entry('/experiences', 'weekly', 0.8),
    entry('/gear', 'weekly', 0.8),
    ...racecards,
    ...horses,
    ...trainers,
    ...jockeys,
    ...tracks,
    ...glossary,
    ...guides,
    ...ownership,
    ...experiences,
    ...gear,
  ]
}
