/**
 * Vets.co — Combined breed insurance dataset (dogs + cats).
 *
 * Thin wrapper that merges INSURANCE_BREEDS (dogs) and CAT_INSURANCE_BREEDS
 * into a single addressable list. Templates use this when they need to
 * resolve a breed slug without knowing the species upfront — e.g., the
 * programmatic /pet-insurance/breeds/[breed]/[state] route can find a
 * matching profile regardless of whether the slug came from the dog or
 * cat dataset.
 *
 * Slug uniqueness: dog and cat breed slugs do not collide (the
 * canonical dog list and cat list have no shared slugs). If a future
 * breed addition would collide (unlikely — golden-retriever can't be a
 * cat), prefix the cat slug with "cat-" defensively.
 */

import { INSURANCE_BREEDS } from './insurance-by-breed'
import { CAT_INSURANCE_BREEDS } from './insurance-by-cat-breed'
import { type BreedInsuranceProfile } from './insurance-by-breed'

export type Species = 'dog' | 'cat'

export interface AnnotatedBreedProfile extends BreedInsuranceProfile {
  species: Species
}

export const ALL_INSURANCE_BREEDS: AnnotatedBreedProfile[] = [
  ...INSURANCE_BREEDS.map((b) => ({ ...b, species: 'dog' as const })),
  ...CAT_INSURANCE_BREEDS.map((b) => ({ ...b, species: 'cat' as const })),
]

/** Find a breed profile by slug (across dogs + cats). */
export function findBreedBySlug(slug: string): AnnotatedBreedProfile | undefined {
  return ALL_INSURANCE_BREEDS.find((b) => b.slug === slug)
}

/** Filter the combined list by species. */
export function breedsForSpecies(species: Species): AnnotatedBreedProfile[] {
  return ALL_INSURANCE_BREEDS.filter((b) => b.species === species)
}
