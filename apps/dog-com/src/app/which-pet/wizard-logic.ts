/**
 * Which-Pet Decision Wizard — pure recommendation engine.
 *
 * Pure client-side scoring. Each answer assigns weighted scores to candidate
 * species in a lookup table; the top three species (by normalized match
 * percentage) are surfaced as recommendations.
 *
 * Scoring approach:
 *   1. Each question defines a per-answer score delta for every species.
 *   2. Hard exclusions (e.g., "feathers allergy" → cap birds, "12+ hr away" →
 *      cap dogs) are applied as negative weights large enough to push the
 *      species out of the top three under normal conditions, without making
 *      the math non-monotone.
 *   3. Final match % = (species score / theoretical max for the highest-scoring
 *      species in this answer set) × 100, clamped to [10, 99].
 *
 * Sources for species suitability defaults:
 *   - AVMA Animal Welfare Division species-care guidelines
 *     https://www.avma.org/resources-tools/animal-health-welfare
 *   - ASPCA species-care guides (dog / cat / fish / reptile / small mammal /
 *     bird / horse) https://www.aspca.org/pet-care
 *
 * No first-person testing claims, no fake credentials.
 */

import type { SiteId } from '@carloOS/config'

// ─────────────────────────────────────────────
// QUESTION + ANSWER TYPES
// ─────────────────────────────────────────────

export type QuestionKey =
  | 'space'
  | 'hoursAway'
  | 'activity'
  | 'family'
  | 'allergies'
  | 'budget'
  | 'timeHorizon'
  | 'climate'
  | 'experience'
  | 'motivation'

export interface AnswerOption {
  value: string
  label: string
  sub?: string
}

export interface Question {
  key: QuestionKey
  prompt: string
  helper?: string
  options: AnswerOption[]
}

export type Answers = Partial<Record<QuestionKey, string>>

// ─────────────────────────────────────────────
// SPECIES UNIVERSE
// ─────────────────────────────────────────────

export type SpeciesId =
  | 'dog'
  | 'cat'
  | 'fish-freshwater'
  | 'fish-saltwater'
  | 'reptile-lizard'
  | 'reptile-snake'
  | 'ferret'
  | 'horse'
  | 'small-mammal'
  | 'bird'

export interface SpeciesProfile {
  id: SpeciesId
  label: string
  // The CarloOS site that owns this species, if any. When null, we link out
  // to ASPCA general-care references instead of a CarloOS deep-link.
  siteId: SiteId | null
  // External primary-source URL used when there is no CarloOS site for this
  // species (cat, small mammal, bird).
  externalReference?: { label: string; href: string }
}

export const SPECIES: Record<SpeciesId, SpeciesProfile> = {
  'dog': {
    id: 'dog',
    label: 'Dog',
    siteId: 'dog-com',
  },
  'cat': {
    id: 'cat',
    label: 'Cat',
    siteId: null,
    externalReference: {
      label: 'ASPCA cat-care guide',
      href: 'https://www.aspca.org/pet-care/cat-care',
    },
  },
  'fish-freshwater': {
    id: 'fish-freshwater',
    label: 'Freshwater fish',
    siteId: 'fish-com',
  },
  'fish-saltwater': {
    id: 'fish-saltwater',
    label: 'Saltwater fish',
    siteId: 'fish-com',
  },
  'reptile-lizard': {
    id: 'reptile-lizard',
    label: 'Lizard',
    siteId: 'lizard-com',
  },
  'reptile-snake': {
    id: 'reptile-snake',
    label: 'Snake',
    siteId: 'lizard-com',
  },
  'ferret': {
    id: 'ferret',
    label: 'Ferret',
    siteId: 'ferret-com',
  },
  'horse': {
    id: 'horse',
    label: 'Horse',
    siteId: 'horses-com',
  },
  'small-mammal': {
    id: 'small-mammal',
    label: 'Small mammal (rabbit, guinea pig, hamster)',
    siteId: null,
    externalReference: {
      label: 'ASPCA small-mammal care',
      href: 'https://www.aspca.org/pet-care/small-pet-care',
    },
  },
  'bird': {
    id: 'bird',
    label: 'Bird',
    siteId: null,
    externalReference: {
      label: 'ASPCA bird-care guide',
      href: 'https://www.aspca.org/pet-care/bird-care',
    },
  },
}

// ─────────────────────────────────────────────
// QUESTION DEFINITIONS
// ─────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  {
    key: 'space',
    prompt: 'Where do you live?',
    helper: 'Living space drives almost every species choice — start here.',
    options: [
      { value: 'apartment', label: 'Apartment', sub: 'Limited indoor space, often no yard' },
      { value: 'small-house', label: 'Small house', sub: 'Indoor space + a small yard' },
      { value: 'large-house', label: 'Large house', sub: 'Multiple rooms + a yard for exercise' },
      { value: 'acreage', label: 'Acreage / rural', sub: 'Land suitable for large animals' },
    ],
  },
  {
    key: 'hoursAway',
    prompt: 'How many hours per day are you away from home?',
    helper: 'Pets that need frequent attention struggle when owners are gone for long stretches.',
    options: [
      { value: 'under-4', label: 'Less than 4 hours', sub: 'Work from home or part-time' },
      { value: '4-8', label: '4 to 8 hours', sub: 'Typical full-time schedule' },
      { value: '8-12', label: '8 to 12 hours', sub: 'Long shifts or commute' },
      { value: '12-plus', label: '12+ hours / frequent travel', sub: 'Often gone overnight' },
    ],
  },
  {
    key: 'activity',
    prompt: 'How active is your lifestyle?',
    helper: 'Some species need an active owner; others suit quiet households.',
    options: [
      { value: 'sedentary', label: 'Sedentary', sub: 'Mostly indoors, low daily movement' },
      { value: 'moderate', label: 'Moderate', sub: 'Daily walks, weekend outings' },
      { value: 'active', label: 'Active', sub: 'Daily exercise, hiking or running' },
      { value: 'very-active', label: 'Very active', sub: 'Multi-hour daily exercise is enjoyable' },
    ],
  },
  {
    key: 'family',
    prompt: 'Who lives in your household?',
    helper: 'Children of different ages change which species are appropriate.',
    options: [
      { value: 'single', label: 'Single adult' },
      { value: 'couple', label: 'Couple, no kids' },
      { value: 'kids-under-5', label: 'Kids under 5' },
      { value: 'kids-5-12', label: 'Kids 5 to 12' },
      { value: 'kids-teens', label: 'Teenagers' },
      { value: 'multigen', label: 'Multi-generational household' },
    ],
  },
  {
    key: 'allergies',
    prompt: 'Are there allergies in the household?',
    helper: 'Allergies are the single most common reason pets are rehomed.',
    options: [
      { value: 'none', label: 'No known allergies' },
      { value: 'fur', label: 'Fur / mammal allergy' },
      { value: 'feathers', label: 'Feather allergy' },
      { value: 'dander', label: 'General dander / pet allergy' },
      { value: 'unsure', label: 'Unsure — never lived with a pet' },
    ],
  },
  {
    key: 'budget',
    prompt: 'What is your monthly budget for the pet?',
    helper: 'Includes food, supplies, routine vet care, and a small reserve for emergencies.',
    options: [
      { value: 'under-50', label: 'Under $50/mo' },
      { value: '50-100', label: '$50 to $100/mo' },
      { value: '100-300', label: '$100 to $300/mo' },
      { value: '300-1000', label: '$300 to $1,000/mo' },
      { value: '1000-plus', label: '$1,000+/mo' },
    ],
  },
  {
    key: 'timeHorizon',
    prompt: 'How long do you want this commitment to last?',
    helper: 'Some species live 1-3 years; others live 20-30+ years.',
    options: [
      { value: 'short', label: 'Less than 5 years' },
      { value: 'medium', label: '5 to 15 years' },
      { value: 'long', label: '15+ years — lifetime commitment is fine' },
    ],
  },
  {
    key: 'climate',
    prompt: 'What is the climate where you live?',
    helper: 'Climate affects housing requirements (especially for reptiles + fish).',
    options: [
      { value: 'cold', label: 'Cold / northern' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'hot-humid', label: 'Hot and humid' },
      { value: 'dry-desert', label: 'Dry / desert' },
    ],
  },
  {
    key: 'experience',
    prompt: 'How much pet-care experience do you have?',
    helper: 'Some species are unforgiving of beginner mistakes.',
    options: [
      { value: 'first-time', label: 'First-time owner' },
      { value: 'kid-pets', label: 'Had pets as a kid' },
      { value: 'recent', label: 'Current or recent pet owner' },
      { value: 'experienced', label: 'Experienced across multiple species' },
    ],
  },
  {
    key: 'motivation',
    prompt: 'What is your primary reason for wanting a pet?',
    helper: 'The "why" shapes which species will actually meet your expectations.',
    options: [
      { value: 'companionship', label: 'Companionship for myself' },
      { value: 'family', label: 'Kids / family pet' },
      { value: 'hobby', label: 'Hobby — I enjoy caring for animals' },
      { value: 'specific', label: 'Specific (therapy, work, sport)' },
    ],
  },
]

// ─────────────────────────────────────────────
// SCORING TABLE
// ─────────────────────────────────────────────
//
// For each (question, answer) we assign a delta for every species. Defaults
// are 0 — only meaningful signals are encoded. Score range per signal is
// roughly -5 to +5; hard exclusions use -10.

type ScoreRow = Partial<Record<SpeciesId, number>>

const SCORES: Record<QuestionKey, Record<string, ScoreRow>> = {
  space: {
    'apartment': {
      'dog': -2, 'cat': 3, 'fish-freshwater': 4, 'fish-saltwater': 2,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 2,
      'horse': -10, 'small-mammal': 3, 'bird': 1,
    },
    'small-house': {
      'dog': 2, 'cat': 3, 'fish-freshwater': 3, 'fish-saltwater': 2,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': -10, 'small-mammal': 3, 'bird': 2,
    },
    'large-house': {
      'dog': 4, 'cat': 3, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': -5, 'small-mammal': 2, 'bird': 3,
    },
    'acreage': {
      'dog': 5, 'cat': 3, 'fish-freshwater': 2, 'fish-saltwater': 2,
      'reptile-lizard': 2, 'reptile-snake': 2, 'ferret': 2,
      'horse': 5, 'small-mammal': 2, 'bird': 3,
    },
  },

  hoursAway: {
    'under-4': {
      'dog': 5, 'cat': 2, 'fish-freshwater': 1, 'fish-saltwater': 1,
      'reptile-lizard': 2, 'reptile-snake': 1, 'ferret': 4,
      'horse': 4, 'small-mammal': 3, 'bird': 4,
    },
    '4-8': {
      'dog': 2, 'cat': 3, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 1,
      'horse': 2, 'small-mammal': 2, 'bird': 1,
    },
    '8-12': {
      'dog': -2, 'cat': 2, 'fish-freshwater': 4, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 4, 'ferret': -2,
      'horse': -2, 'small-mammal': 1, 'bird': -3,
    },
    '12-plus': {
      'dog': -5, 'cat': -2, 'fish-freshwater': 3, 'fish-saltwater': 2,
      'reptile-lizard': 2, 'reptile-snake': 3, 'ferret': -5,
      'horse': -5, 'small-mammal': -2, 'bird': -5,
    },
  },

  activity: {
    'sedentary': {
      'dog': -1, 'cat': 3, 'fish-freshwater': 4, 'fish-saltwater': 4,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': 1,
      'horse': -5, 'small-mammal': 3, 'bird': 2,
    },
    'moderate': {
      'dog': 3, 'cat': 3, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 1, 'small-mammal': 3, 'bird': 3,
    },
    'active': {
      'dog': 5, 'cat': 2, 'fish-freshwater': 2, 'fish-saltwater': 2,
      'reptile-lizard': 2, 'reptile-snake': 2, 'ferret': 3,
      'horse': 4, 'small-mammal': 2, 'bird': 2,
    },
    'very-active': {
      'dog': 5, 'cat': 1, 'fish-freshwater': 1, 'fish-saltwater': 1,
      'reptile-lizard': 1, 'reptile-snake': 1, 'ferret': 2,
      'horse': 5, 'small-mammal': 1, 'bird': 1,
    },
  },

  family: {
    'single': {
      'dog': 3, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 3, 'small-mammal': 3, 'bird': 3,
    },
    'couple': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 3, 'small-mammal': 3, 'bird': 3,
    },
    'kids-under-5': {
      // ASPCA + AVMA caution against snake/ferret/exotic-reptile in homes
      // with toddlers due to bite/zoonosis risk and unpredictable handling.
      'dog': 2, 'cat': 2, 'fish-freshwater': 4, 'fish-saltwater': 3,
      'reptile-lizard': -3, 'reptile-snake': -5, 'ferret': -3,
      'horse': -3, 'small-mammal': 1, 'bird': -2,
    },
    'kids-5-12': {
      'dog': 5, 'cat': 4, 'fish-freshwater': 5, 'fish-saltwater': 3,
      'reptile-lizard': 2, 'reptile-snake': 1, 'ferret': 2,
      'horse': 2, 'small-mammal': 4, 'bird': 2,
    },
    'kids-teens': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 4, 'reptile-snake': 3, 'ferret': 3,
      'horse': 4, 'small-mammal': 2, 'bird': 3,
    },
    'multigen': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 3,
      'reptile-lizard': 2, 'reptile-snake': 1, 'ferret': 1,
      'horse': 2, 'small-mammal': 3, 'bird': 2,
    },
  },

  allergies: {
    'none': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 3, 'small-mammal': 3, 'bird': 3,
    },
    'fur': {
      // Mammalian allergies typically rule out cat/dog/ferret/small mammal.
      'dog': -10, 'cat': -10, 'fish-freshwater': 5, 'fish-saltwater': 5,
      'reptile-lizard': 5, 'reptile-snake': 5, 'ferret': -10,
      'horse': -8, 'small-mammal': -10, 'bird': 2,
    },
    'feathers': {
      'dog': 3, 'cat': 3, 'fish-freshwater': 4, 'fish-saltwater': 4,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 2, 'small-mammal': 3, 'bird': -10,
    },
    'dander': {
      'dog': -8, 'cat': -10, 'fish-freshwater': 5, 'fish-saltwater': 5,
      'reptile-lizard': 5, 'reptile-snake': 5, 'ferret': -8,
      'horse': -5, 'small-mammal': -5, 'bird': -3,
    },
    'unsure': {
      'dog': 1, 'cat': 1, 'fish-freshwater': 3, 'fish-saltwater': 3,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 1,
      'horse': 1, 'small-mammal': 1, 'bird': 1,
    },
  },

  budget: {
    'under-50': {
      // ASPCA estimates: rough annual care averaged to monthly. Below $50/mo
      // realistically only sustains a small mammal or basic freshwater tank.
      'dog': -5, 'cat': -3, 'fish-freshwater': 4, 'fish-saltwater': -5,
      'reptile-lizard': -2, 'reptile-snake': 0, 'ferret': -3,
      'horse': -10, 'small-mammal': 4, 'bird': 0,
    },
    '50-100': {
      'dog': 0, 'cat': 3, 'fish-freshwater': 4, 'fish-saltwater': -2,
      'reptile-lizard': 2, 'reptile-snake': 3, 'ferret': 2,
      'horse': -10, 'small-mammal': 4, 'bird': 3,
    },
    '100-300': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 3,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': 4,
      'horse': -5, 'small-mammal': 3, 'bird': 4,
    },
    '300-1000': {
      'dog': 5, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 5,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': 4,
      'horse': 2, 'small-mammal': 3, 'bird': 4,
    },
    '1000-plus': {
      'dog': 5, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 5,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 3,
      'horse': 5, 'small-mammal': 2, 'bird': 4,
    },
  },

  timeHorizon: {
    'short': {
      // Short horizons fit hamsters/small rodents; rule out long-lived species.
      'dog': -3, 'cat': -3, 'fish-freshwater': 2, 'fish-saltwater': 1,
      'reptile-lizard': -3, 'reptile-snake': -5, 'ferret': 3,
      'horse': -10, 'small-mammal': 5, 'bird': -5,
    },
    'medium': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 4,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': 4,
      'horse': 0, 'small-mammal': 3, 'bird': 2,
    },
    'long': {
      'dog': 4, 'cat': 5, 'fish-freshwater': 3, 'fish-saltwater': 4,
      'reptile-lizard': 4, 'reptile-snake': 5, 'ferret': 2,
      'horse': 5, 'small-mammal': 1, 'bird': 5,
    },
  },

  climate: {
    'cold': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 2,
      'reptile-lizard': 1, 'reptile-snake': 1, 'ferret': 4,
      'horse': 4, 'small-mammal': 3, 'bird': 2,
    },
    'temperate': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 4,
      'reptile-lizard': 3, 'reptile-snake': 3, 'ferret': 4,
      'horse': 4, 'small-mammal': 4, 'bird': 4,
    },
    'hot-humid': {
      'dog': 2, 'cat': 3, 'fish-freshwater': 4, 'fish-saltwater': 4,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': -2,
      'horse': 2, 'small-mammal': 1, 'bird': 4,
    },
    'dry-desert': {
      'dog': 2, 'cat': 4, 'fish-freshwater': 2, 'fish-saltwater': 2,
      'reptile-lizard': 5, 'reptile-snake': 4, 'ferret': 1,
      'horse': 3, 'small-mammal': 2, 'bird': 3,
    },
  },

  experience: {
    'first-time': {
      'dog': 2, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': -5,
      'reptile-lizard': -2, 'reptile-snake': -3, 'ferret': -3,
      'horse': -10, 'small-mammal': 4, 'bird': -2,
    },
    'kid-pets': {
      'dog': 3, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 0,
      'reptile-lizard': 2, 'reptile-snake': 1, 'ferret': 1,
      'horse': -5, 'small-mammal': 4, 'bird': 1,
    },
    'recent': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 3,
      'reptile-lizard': 4, 'reptile-snake': 4, 'ferret': 4,
      'horse': 2, 'small-mammal': 3, 'bird': 3,
    },
    'experienced': {
      'dog': 4, 'cat': 4, 'fish-freshwater': 3, 'fish-saltwater': 5,
      'reptile-lizard': 5, 'reptile-snake': 5, 'ferret': 5,
      'horse': 5, 'small-mammal': 2, 'bird': 5,
    },
  },

  motivation: {
    'companionship': {
      'dog': 5, 'cat': 5, 'fish-freshwater': 1, 'fish-saltwater': 1,
      'reptile-lizard': 1, 'reptile-snake': 1, 'ferret': 4,
      'horse': 3, 'small-mammal': 3, 'bird': 4,
    },
    'family': {
      'dog': 5, 'cat': 4, 'fish-freshwater': 4, 'fish-saltwater': 2,
      'reptile-lizard': 2, 'reptile-snake': 1, 'ferret': 2,
      'horse': 3, 'small-mammal': 4, 'bird': 2,
    },
    'hobby': {
      'dog': 2, 'cat': 2, 'fish-freshwater': 5, 'fish-saltwater': 5,
      'reptile-lizard': 5, 'reptile-snake': 5, 'ferret': 3,
      'horse': 4, 'small-mammal': 2, 'bird': 4,
    },
    'specific': {
      'dog': 5, 'cat': 2, 'fish-freshwater': 1, 'fish-saltwater': 1,
      'reptile-lizard': 1, 'reptile-snake': 1, 'ferret': 1,
      'horse': 4, 'small-mammal': 1, 'bird': 1,
    },
  },
}

// ─────────────────────────────────────────────
// RATIONALE TEMPLATES
// ─────────────────────────────────────────────
//
// "Why this fits" bullets are generated from the strongest positive signals
// in each species' score. "What to consider" is a single caveat sourced from
// AVMA/ASPCA species guides.

interface RationaleHints {
  fit: string[]
  considerations: string[]
}

const CAVEATS: Record<SpeciesId, string> = {
  'dog':
    'Daily exercise and ~10-15 year commitment; ASPCA estimates first-year costs of $1,400-$4,300 including vaccinations and spay/neuter.',
  'cat':
    'Indoor-only is strongly recommended by AVMA for longevity and wildlife protection; expect a 12-18 year commitment.',
  'fish-freshwater':
    'A proper nitrogen-cycle (4-6 weeks) is required before adding fish; equipment is one-time but non-trivial.',
  'fish-saltwater':
    'Saltwater systems require precise salinity and water-chemistry control; AVMA + AAVMC guidelines recommend prior freshwater experience.',
  'reptile-lizard':
    'Species-correct UVB lighting, basking gradients, and a reptile-experienced vet are non-negotiable per ARAV husbandry guidelines.',
  'reptile-snake':
    'Snakes are escape artists and require precise temperature gradients plus a reliable feeder source; many species live 20-30+ years.',
  'ferret':
    'Ferrets are illegal in California, Hawaii, NYC, and Washington DC; check local rules before acquiring.',
  'horse':
    'Boarding, farrier, dentistry, and vet care often run $500-$2,000/mo even before purchase price; consider lease-before-buy.',
  'small-mammal':
    'Rabbits and guinea pigs are social — most welfare bodies recommend keeping at least a pair; lifespans range 2-12 years by species.',
  'bird':
    'Parrots can live 30-80+ years and form intense bonds; rehoming is common when owners underestimate the commitment.',
}

function buildFitBullets(species: SpeciesId, answers: Answers): string[] {
  const bullets: string[] = []
  for (const q of QUESTIONS) {
    const a = answers[q.key]
    if (!a) continue
    const row = SCORES[q.key]?.[a]
    if (!row) continue
    const score = row[species] ?? 0
    if (score >= 4) {
      bullets.push(FIT_REASONS[q.key]?.[a]?.[species] ?? defaultFitReason(q.key, a))
    }
  }
  // Always surface at least three bullets; pad with general species notes if
  // the answer set was too weak to produce enough high-signal hits.
  while (bullets.length < 3) {
    bullets.push(GENERIC_FIT[species][bullets.length % GENERIC_FIT[species].length])
  }
  return bullets.slice(0, 3)
}

function defaultFitReason(key: QuestionKey, answer: string): string {
  return `Your ${key} answer (${answer}) aligns well with this species.`
}

// Hand-written rationales for high-signal (q, a, species) combinations.
const FIT_REASONS: Partial<Record<QuestionKey, Record<string, Partial<Record<SpeciesId, string>>>>> = {
  space: {
    'apartment': {
      'fish-freshwater': 'Freshwater tanks are the most apartment-friendly pet — quiet, contained, and don\'t need outdoor space.',
      'cat': 'Cats adapt well to apartment living, especially with vertical climbing space.',
      'reptile-lizard': 'A properly-sized lizard enclosure fits comfortably in a one-bedroom apartment.',
      'small-mammal': 'A guinea pig or rabbit setup fits a corner of an apartment with minimal disruption.',
    },
    'large-house': {
      'dog': 'Large houses with yards are ideal for dogs of most sizes and energy levels.',
    },
    'acreage': {
      'horse': 'Acreage allows on-property horse keeping with proper fencing and shelter.',
      'dog': 'Acreage suits high-energy and working breeds that thrive with room to roam.',
    },
  },
  hoursAway: {
    'under-4': {
      'dog': 'Being home most of the day matches a dog\'s social needs — they don\'t do well alone for long stretches.',
      'ferret': 'Ferrets need 3-4 hours of supervised out-of-cage time daily; a home-based schedule makes this easy.',
    },
    '8-12': {
      'fish-freshwater': 'Fish don\'t care if you\'re gone all day — automatic feeders and stable parameters do the work.',
      'reptile-snake': 'Snakes are largely solitary and content in a stable enclosure during long workdays.',
    },
  },
  activity: {
    'very-active': {
      'dog': 'Athletic dogs (huskies, vizslas, border collies) need an owner who matches their daily energy output.',
      'horse': 'Daily riding and groundwork require an owner who genuinely enjoys multi-hour activity.',
    },
    'sedentary': {
      'fish-freshwater': 'Fish-keeping is a relaxing observational hobby — no walks, no schedule outside of feedings.',
      'reptile-lizard': 'Reptile husbandry is largely about environment, not exercise.',
    },
  },
  family: {
    'kids-5-12': {
      'dog': 'School-age children and family dogs are a classic match when the family commits to supervised handling.',
      'fish-freshwater': 'Fish are a strong "first-pet" choice for kids — engagement without bite or scratch risk.',
      'small-mammal': 'Guinea pigs and rabbits, with supervised handling, suit school-age children.',
    },
    'kids-under-5': {
      'fish-freshwater': 'A securely-mounted fish tank is one of the few pets pediatric guidance considers safe with toddlers.',
    },
  },
  allergies: {
    'fur': {
      'fish-freshwater': 'Aquariums are completely allergen-free for fur-sensitive households.',
      'reptile-lizard': 'Reptiles produce no fur or mammalian dander — a common refuge for allergic families.',
      'reptile-snake': 'Snakes shed cleanly and produce no respiratory allergens.',
    },
    'dander': {
      'fish-freshwater': 'No dander at all — aquariums and terraria are the standard recommendation for pet-dander-allergic households.',
    },
  },
  budget: {
    'under-50': {
      'small-mammal': 'A guinea pig or hamster is one of the few species you can responsibly maintain under $50/mo.',
      'fish-freshwater': 'A small freshwater setup runs $20-40/mo in food, conditioner, and incremental gear.',
    },
    '300-1000': {
      'fish-saltwater': 'A saltwater reef tank sits comfortably in the $300-1,000/mo range for livestock, salt, and additives.',
    },
    '1000-plus': {
      'horse': 'Horse keeping comfortably consumes $1,000+/mo even without major medical events.',
    },
  },
  timeHorizon: {
    'short': {
      'small-mammal': 'Hamsters and gerbils have 2-3 year lifespans — a meaningful but not multi-decade commitment.',
    },
    'long': {
      'horse': 'Horses live 25-30+ years; well-suited for owners ready for a lifetime relationship.',
      'reptile-snake': 'Ball pythons and boas commonly reach 25-30+ years in good husbandry.',
      'cat': 'Cats live 12-18+ years; indoor cats now routinely reach the high end of that range.',
    },
  },
  climate: {
    'dry-desert': {
      'reptile-lizard': 'Desert species (bearded dragons, leopard geckos) match arid climates with minimal climate-control overhead.',
    },
  },
  experience: {
    'first-time': {
      'fish-freshwater': 'Freshwater fish are one of the most forgiving first-pet choices when the tank is cycled correctly.',
      'cat': 'Cats are widely regarded as one of the easiest first pets for adults.',
      'small-mammal': 'Small mammals are often a child\'s first pet and a manageable adult first-pet choice.',
    },
    'experienced': {
      'fish-saltwater': 'Experienced fishkeepers can step up to saltwater systems with confidence.',
      'reptile-snake': 'Snakes reward experienced reptile keepers; husbandry mistakes are unforgiving for beginners.',
      'ferret': 'Ferrets benefit from owners who have managed high-energy, escape-prone pets before.',
      'horse': 'Horse ownership is best paired with years of riding and care experience.',
    },
  },
  motivation: {
    'companionship': {
      'dog': 'Dogs are the canonical companionship species — pack-bonded by evolution.',
      'cat': 'Cats provide deep bonded companionship with lower daily-management overhead than dogs.',
      'ferret': 'Ferrets are intensely interactive and bond strongly with attentive owners.',
    },
    'hobby': {
      'fish-saltwater': 'Reef-keeping is a long-running technical hobby with strong online communities.',
      'fish-freshwater': 'Aquascaping and breeding scratch a deep technical-hobby itch.',
      'reptile-lizard': 'Reptile husbandry is a science-rich hobby with active species communities.',
      'reptile-snake': 'Snake-keeping is a long-running specialist hobby.',
    },
    'specific': {
      'dog': 'Service, therapy, and working roles are dog-specific — no other species fills these reliably.',
      'horse': 'Therapeutic riding, sport, and working partnerships are horse-specific.',
    },
  },
}

// Fallback fit rationales when no high-signal answer matched the species.
const GENERIC_FIT: Record<SpeciesId, string[]> = {
  'dog': [
    'Strong all-around match against your answers.',
    'Dogs are one of the best-supported pet species — vet care, training, and resources are widely available.',
    'Most household configurations can accommodate at least one dog breed.',
  ],
  'cat': [
    'Cats are flexible across many household types.',
    'Lower daily-management overhead than dogs while still providing companionship.',
    'Strong fit for indoor lifestyles.',
  ],
  'fish-freshwater': [
    'Freshwater fish are quiet, allergen-free, and have low daily overhead once cycled.',
    'Wide species variety lets you customize the experience.',
    'Strong match for limited-space households.',
  ],
  'fish-saltwater': [
    'Saltwater systems are an immersive, long-running hobby.',
    'Visually stunning and excellent for households comfortable with technical hobbies.',
    'Best suited to households with hobby budget and patience for the cycle.',
  ],
  'reptile-lizard': [
    'Lizards combine low-noise, low-allergen care with rewarding husbandry.',
    'Strong match for households that enjoy environment-building.',
    'Many species suit beginner-to-intermediate keepers.',
  ],
  'reptile-snake': [
    'Snakes are quiet, contained, and low daily-handling.',
    'Husbandry is highly proceduralized — well-documented online communities.',
    'Best suited to households comfortable with periodic feeder-rodent management.',
  ],
  'ferret': [
    'Ferrets are highly interactive and form strong bonds with engaged owners.',
    'A good fit for households that can supervise daily out-of-cage play.',
    'Check state and city laws before acquiring.',
  ],
  'horse': [
    'Horses are deeply rewarding for committed owners with the time and budget.',
    'Best match for active, experienced households with land or a trusted boarding option.',
    'Lifetime sport and companionship potential.',
  ],
  'small-mammal': [
    'Small mammals match modest budgets and limited space.',
    'A strong first-pet experience for many households.',
    'Most species do best in pairs.',
  ],
  'bird': [
    'Birds are intelligent, interactive companions.',
    'Best matched to households that can commit to daily out-of-cage time.',
    'Some parrots live 30-80+ years — verify lifespan expectations.',
  ],
}

// ─────────────────────────────────────────────
// MAIN ENGINE
// ─────────────────────────────────────────────

export interface Recommendation {
  speciesId: SpeciesId
  label: string
  matchPercent: number
  rawScore: number
  fitBullets: string[]
  caveat: string
  siteId: SiteId | null
  externalReference?: { label: string; href: string }
}

export function scoreAllSpecies(answers: Answers): Record<SpeciesId, number> {
  const totals = Object.fromEntries(
    (Object.keys(SPECIES) as SpeciesId[]).map((s) => [s, 0]),
  ) as Record<SpeciesId, number>

  for (const q of QUESTIONS) {
    const a = answers[q.key]
    if (!a) continue
    const row = SCORES[q.key]?.[a]
    if (!row) continue
    for (const sp of Object.keys(SPECIES) as SpeciesId[]) {
      totals[sp] += row[sp] ?? 0
    }
  }
  return totals
}

export function getRecommendations(answers: Answers, topN = 3): Recommendation[] {
  const totals = scoreAllSpecies(answers)
  const sorted = (Object.keys(totals) as SpeciesId[])
    .map((id) => ({ id, score: totals[id] }))
    .sort((a, b) => b.score - a.score)

  // Theoretical maximum = top species' score, used to normalize percentages.
  const topScore = sorted[0]?.score ?? 1
  const denom = Math.max(topScore, 1)

  const top = sorted.slice(0, topN)
  return top.map(({ id, score }) => {
    const profile = SPECIES[id]
    const pct = Math.max(10, Math.min(99, Math.round((score / denom) * 95)))
    return {
      speciesId: id,
      label: profile.label,
      matchPercent: pct,
      rawScore: score,
      fitBullets: buildFitBullets(id, answers),
      caveat: CAVEATS[id],
      siteId: profile.siteId,
      externalReference: profile.externalReference,
    }
  })
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => Boolean(answers[q.key]))
}

export function progressPercent(answers: Answers): number {
  const answered = QUESTIONS.filter((q) => answers[q.key]).length
  return Math.round((answered / QUESTIONS.length) * 100)
}
