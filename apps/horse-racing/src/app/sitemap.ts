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
import { allEditionSlugs } from '../data/racing/newsletter'
import { allBloodstockSlugs } from '../data/racing/bloodstock'
import { allRaceTypeSlugs } from '../data/racing/race-types'
import { allMajorRaceSlugs } from '../data/racing/major-races'
import { allRacingRoleSlugs } from '../data/racing/racing-roles'
import { allTrainingSafetySlugs } from '../data/racing/training-safety'
import { allRacehorseCareSlugs } from '../data/racing/racehorse-care'
import { allRacingHistorySlugs } from '../data/racing/racing-history'

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
  const editions = allEditionSlugs().map((s) => entry(`/newsletter/${s}`, 'monthly', 0.6))
  const bloodstock = allBloodstockSlugs().map((s) => entry(`/bloodstock/${s}`, 'monthly', 0.7))
  const raceTypes = allRaceTypeSlugs().map((s) => entry(`/race-types/${s}`, 'monthly', 0.7))
  const majorRaces = allMajorRaceSlugs().map((s) => entry(`/major-races/${s}`, 'monthly', 0.7))
  const racingRoles = allRacingRoleSlugs().map((s) => entry(`/racing-roles/${s}`, 'monthly', 0.7))
  const trainingSafety = allTrainingSafetySlugs().map((s) => entry(`/training-safety/${s}`, 'monthly', 0.7))
  const racehorseCare = allRacehorseCareSlugs().map((s) => entry(`/racehorse-care/${s}`, 'monthly', 0.7))
  const racingHistory = allRacingHistorySlugs().map((s) => entry(`/racing-history/${s}`, 'monthly', 0.7))

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
    entry('/ownership/cost-calculator', 'monthly', 0.8),
    entry('/ownership/ways-in', 'weekly', 0.8),
    entry('/experiences', 'weekly', 0.8),
    entry('/gear', 'weekly', 0.8),
    entry('/newsletter', 'weekly', 0.8),
    entry('/predict', 'weekly', 0.7),
    entry('/first-derby', 'weekly', 0.9),
    entry('/bloodstock', 'weekly', 0.8),
    entry('/race-types', 'weekly', 0.8),
    entry('/major-races', 'weekly', 0.9),
    entry('/racing-roles', 'weekly', 0.8),
    entry('/training-safety', 'weekly', 0.8),
    entry('/racehorse-care', 'weekly', 0.8),
    entry('/racing-history', 'weekly', 0.8),
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
    ...editions,
    ...bloodstock,
    ...raceTypes,
    ...majorRaces,
    ...racingRoles,
    ...trainingSafety,
    ...racehorseCare,
    ...racingHistory,
  ]
}
