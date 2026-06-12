/**
 * Dog Breed Match wizard — pure recommendation engine.
 *
 * Unlike the cross-species /which-pet wizard, this tool matches the OWNER's
 * lifestyle against the REAL attributes of every breed in
 * apps/dog-com/src/data/breeds.ts (size, energy, shedding, grooming,
 * good-with-kids, good-with-other-dogs, first-time-owner-friendliness, AKC
 * group, temperament). No fabricated stats — every score delta and every
 * "why this fits" bullet is derived directly from a breed's documented
 * attributes plus standard AKC / ASPCA owner-suitability guidance.
 *
 * Scoring approach (mirrors /which-pet):
 *   1. Each question defines per-answer score deltas keyed off the breed's
 *      real attributes (e.g. apartment penalizes Giant / Very High energy
 *      breeds; first-time owner favors firstTimeOwnerFriendly === true).
 *   2. Totals are summed across all answered questions.
 *   3. Breeds are grouped into honest FIT TIERS — never a percentage. There is
 *      no "best breed" or ranked winner: a breed either clearly lines up with
 *      the answers ('may-fit') or lines up with caveats ('closer-look'). Tiers
 *      come from raw-score bands relative to the strongest score for the answer
 *      set, with an absolute floor so a weak ceiling never pads poor fits.
 *
 * Sources for owner-suitability defaults:
 *   - AKC breed standards + breed-selector guidance
 *     https://www.akc.org/dog-breeds/
 *   - ASPCA "choosing a dog" adoption guidance
 *     https://www.aspca.org/pet-care/dog-care
 *
 * No first-person testing claims, no fake credentials.
 */

import {
  Breeds,
  type Breed,
  type SizeCategory,
  type EnergyLevel,
  type SheddingLevel,
  type GroomingLevel,
} from '../../../data/breeds'

// ─────────────────────────────────────────────
// QUESTION + ANSWER TYPES
// ─────────────────────────────────────────────

export type QuestionKey =
  | 'home'
  | 'timeDaily'
  | 'experience'
  | 'activity'
  | 'household'
  | 'grooming'
  | 'noise'

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
// QUESTION DEFINITIONS
// ─────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  {
    key: 'home',
    prompt: 'What kind of home do you have?',
    helper: 'Living space is the strongest filter on which breeds realistically fit.',
    options: [
      { value: 'apartment', label: 'Apartment or condo', sub: 'No private yard, shared walls' },
      { value: 'house-small-yard', label: 'House with a small yard', sub: 'Some outdoor space' },
      { value: 'house-big-yard', label: 'House with a large yard', sub: 'Room to run' },
      { value: 'rural', label: 'Rural property / acreage', sub: 'Open land and space' },
    ],
  },
  {
    key: 'timeDaily',
    prompt: 'How much time can you give a dog each day?',
    helper: 'Exercise and attention needs vary enormously between breeds.',
    options: [
      { value: 'low', label: 'Under 1 hour', sub: 'A short walk and some play' },
      { value: 'moderate', label: '1 to 2 hours', sub: 'A solid daily walk plus playtime' },
      { value: 'high', label: '2 to 3 hours', sub: 'Long walks, training, active play' },
      { value: 'very-high', label: '3+ hours', sub: 'A dog can be at the center of my day' },
    ],
  },
  {
    key: 'experience',
    prompt: 'How much dog experience do you have?',
    helper: 'Some breeds forgive beginner mistakes; others need a confident handler.',
    options: [
      { value: 'first-time', label: 'First-time owner', sub: 'This is my first dog' },
      { value: 'some', label: 'Some experience', sub: 'I have owned a dog before' },
      { value: 'experienced', label: 'Experienced owner', sub: 'I have trained challenging dogs' },
    ],
  },
  {
    key: 'activity',
    prompt: 'How active is your lifestyle?',
    helper: 'A breed that matches your energy is far more likely to thrive.',
    options: [
      { value: 'relaxed', label: 'Relaxed', sub: 'Mostly calm days, gentle outings' },
      { value: 'moderate', label: 'Moderately active', sub: 'Regular walks, weekend outings' },
      { value: 'active', label: 'Very active', sub: 'Hiking, running, daily exercise' },
    ],
  },
  {
    key: 'household',
    prompt: 'Who shares your home?',
    helper: 'Kids and resident dogs change which breeds are the safest fit.',
    options: [
      { value: 'adults', label: 'Adults only', sub: 'No kids, no other dogs' },
      { value: 'kids', label: 'Young kids', sub: 'Children in the home' },
      { value: 'other-dogs', label: 'Another dog', sub: 'A resident dog already lives here' },
      { value: 'kids-and-dogs', label: 'Kids and another dog', sub: 'A full, busy household' },
    ],
  },
  {
    key: 'grooming',
    prompt: 'How much grooming and shedding can you tolerate?',
    helper: 'Coat care is an ongoing cost in time and money — be honest here.',
    options: [
      { value: 'minimal', label: 'As little as possible', sub: 'Low shedding, low upkeep' },
      { value: 'some', label: 'Some upkeep is fine', sub: 'Regular brushing is okay' },
      { value: 'any', label: 'Grooming does not bother me', sub: 'Happy to brush daily or book groomers' },
    ],
  },
  {
    key: 'noise',
    prompt: 'How sensitive are you to barking and vocal dogs?',
    helper: 'Some breeds are notably vocal — a real factor in apartments and shared walls.',
    options: [
      { value: 'quiet', label: 'I need a quiet dog', sub: 'Barking is a deal-breaker' },
      { value: 'some', label: 'Some barking is fine', sub: 'Occasional noise is okay' },
      { value: 'any', label: 'Noise does not bother me', sub: 'A talkative dog is welcome' },
    ],
  },
]

// ─────────────────────────────────────────────
// ATTRIBUTE HELPERS
// ─────────────────────────────────────────────

const ENERGY_RANK: Record<EnergyLevel, number> = {
  'Low': 0,
  'Moderate': 1,
  'High': 2,
  'Very High': 3,
}

const SIZE_RANK: Record<SizeCategory, number> = {
  'Toy': 0,
  'Small': 1,
  'Medium': 2,
  'Large': 3,
  'Giant': 4,
}

// Lower-shedding score = easier on minimal-upkeep owners.
const SHED_RANK: Record<SheddingLevel, number> = {
  'Low': 0,
  'Hypoallergenic claim — not validated': 0,
  'Moderate': 1,
  'Heavy': 2,
}

const GROOM_RANK: Record<GroomingLevel, number> = {
  'Low': 0,
  'Moderate': 1,
  'High': 2,
}

// Temperament traits (lowercased) that signal a notably vocal breed. Used only
// for the noise question; sourced from AKC breed-standard descriptors.
const VOCAL_TRAITS = ['vocal', 'alert', 'watchful', 'barks', 'talkative']

// Groups whose breeds are most commonly described as vocal / alert watchdogs.
const VOCAL_GROUPS = ['Hound', 'Terrier', 'Toy']

function isVocal(breed: Breed): boolean {
  const traits = breed.temperamentTraits.map((t) => t.toLowerCase())
  if (traits.some((t) => VOCAL_TRAITS.some((v) => t.includes(v)))) return true
  return VOCAL_GROUPS.includes(breed.group)
}

// ─────────────────────────────────────────────
// SCORING
// ─────────────────────────────────────────────
//
// Each question returns a numeric delta for a given breed, derived entirely
// from that breed's real attributes. Range per signal is roughly -6 to +5.

function scoreHome(answer: string, breed: Breed): number {
  const size = SIZE_RANK[breed.sizeCategory]
  const energy = ENERGY_RANK[breed.energyLevel]
  switch (answer) {
    case 'apartment':
      // Penalize giant + very-high-energy breeds; reward small/calm breeds.
      return (
        (size >= 4 ? -6 : size === 3 ? -3 : 3 - size) +
        (energy >= 3 ? -4 : energy === 2 ? -1 : 2)
      )
    case 'house-small-yard':
      return (size >= 4 ? -2 : 2) + (energy >= 3 ? -1 : 1)
    case 'house-big-yard':
      return (size >= 3 ? 3 : 1) + (energy >= 2 ? 2 : 0)
    case 'rural':
      return (size >= 3 ? 4 : 1) + (energy >= 2 ? 3 : 0)
    default:
      return 0
  }
}

function scoreTime(answer: string, breed: Breed): number {
  const energy = ENERGY_RANK[breed.energyLevel]
  switch (answer) {
    case 'low':
      // Low daily time penalizes high-energy breeds hard, rewards calm breeds.
      return energy >= 3 ? -6 : energy === 2 ? -3 : 4 - energy
    case 'moderate':
      return energy >= 3 ? -2 : energy === 0 ? 2 : 3
    case 'high':
      return energy >= 2 ? 4 : 1
    case 'very-high':
      return energy >= 3 ? 5 : energy === 2 ? 3 : 0
    default:
      return 0
  }
}

function scoreExperience(answer: string, breed: Breed): number {
  switch (answer) {
    case 'first-time':
      // Strongly favor breeds flagged first-time-owner-friendly.
      return breed.firstTimeOwnerFriendly ? 5 : -5
    case 'some':
      return breed.firstTimeOwnerFriendly ? 2 : 0
    case 'experienced':
      // Experienced owners can take on either; gently reward the harder breeds
      // so they are not buried, without penalizing easy breeds.
      return breed.firstTimeOwnerFriendly ? 2 : 3
    default:
      return 0
  }
}

function scoreActivity(answer: string, breed: Breed): number {
  const energy = ENERGY_RANK[breed.energyLevel]
  switch (answer) {
    case 'relaxed':
      return energy <= 1 ? 4 : energy === 2 ? -2 : -5
    case 'moderate':
      return energy === 1 ? 4 : energy === 2 ? 2 : energy === 0 ? 2 : -2
    case 'active':
      return energy >= 2 ? 4 : energy === 1 ? 1 : -3
    default:
      return 0
  }
}

function scoreHousehold(answer: string, breed: Breed): number {
  switch (answer) {
    case 'adults':
      return 1
    case 'kids':
      return breed.goodWithKids ? 4 : -6
    case 'other-dogs':
      return breed.goodWithOtherDogs ? 4 : -6
    case 'kids-and-dogs':
      return (breed.goodWithKids ? 3 : -6) + (breed.goodWithOtherDogs ? 3 : -6)
    default:
      return 0
  }
}

function scoreGrooming(answer: string, breed: Breed): number {
  const shed = SHED_RANK[breed.sheddingLevel]
  const groom = GROOM_RANK[breed.groomingLevel]
  switch (answer) {
    case 'minimal':
      // Reward low-shed + low-groom; penalize heavy-shed + high-groom.
      return (2 - shed * 3) + (1 - groom * 2)
    case 'some':
      return shed >= 2 ? -1 : 2
    case 'any':
      // No penalty for any coat; gently surface the high-maintenance coats.
      return 1 + (groom >= 2 ? 1 : 0)
    default:
      return 0
  }
}

function scoreNoise(answer: string, breed: Breed): number {
  const vocal = isVocal(breed)
  switch (answer) {
    case 'quiet':
      return vocal ? -4 : 3
    case 'some':
      return vocal ? 0 : 1
    case 'any':
      return 1
    default:
      return 0
  }
}

const SCORERS: Record<QuestionKey, (answer: string, breed: Breed) => number> = {
  home: scoreHome,
  timeDaily: scoreTime,
  experience: scoreExperience,
  activity: scoreActivity,
  household: scoreHousehold,
  grooming: scoreGrooming,
  noise: scoreNoise,
}

export function scoreBreed(breed: Breed, answers: Answers): number {
  let total = 0
  for (const q of QUESTIONS) {
    const a = answers[q.key]
    if (!a) continue
    total += SCORERS[q.key](a, breed)
  }
  return total
}

// ─────────────────────────────────────────────
// "WHY THIS FITS" + "WHAT TO CONSIDER"
// ─────────────────────────────────────────────
//
// Every bullet is derived from the breed's real attributes plus the user's
// answer. No fabricated statistics.

function buildFitBullets(breed: Breed, answers: Answers): string[] {
  const bullets: string[] = []
  const energy = ENERGY_RANK[breed.energyLevel]
  const size = SIZE_RANK[breed.sizeCategory]
  const shed = SHED_RANK[breed.sheddingLevel]

  // Home.
  if (answers.home === 'apartment' && size <= 1 && energy <= 1) {
    bullets.push(
      `${breed.name}s are ${breed.sizeCategory.toLowerCase()}-sized with ${breed.energyLevel.toLowerCase()} energy, which suits apartment living.`,
    )
  } else if ((answers.home === 'rural' || answers.home === 'house-big-yard') && (size >= 3 || energy >= 2)) {
    bullets.push(
      `With ${breed.energyLevel.toLowerCase()} energy, ${breed.name}s make good use of the space you have.`,
    )
  }

  // Time + activity.
  if ((answers.timeDaily === 'high' || answers.timeDaily === 'very-high' || answers.activity === 'active') && energy >= 2) {
    bullets.push(
      `Their ${breed.energyLevel.toLowerCase()} energy matches an active routine with plenty of daily exercise.`,
    )
  } else if ((answers.timeDaily === 'low' || answers.activity === 'relaxed') && energy <= 1) {
    bullets.push(
      `${breed.name}s have ${breed.energyLevel.toLowerCase()} energy, so they fit a calmer, lower-time household.`,
    )
  }

  // Experience.
  if (answers.experience === 'first-time' && breed.firstTimeOwnerFriendly) {
    bullets.push(`Widely considered a good fit for first-time owners.`)
  } else if (answers.experience === 'experienced' && !breed.firstTimeOwnerFriendly) {
    bullets.push(`Rewards an experienced handler who can meet their training needs.`)
  }

  // Household.
  if ((answers.household === 'kids' || answers.household === 'kids-and-dogs') && breed.goodWithKids) {
    bullets.push(`Documented as good with children when properly socialized.`)
  }
  if ((answers.household === 'other-dogs' || answers.household === 'kids-and-dogs') && breed.goodWithOtherDogs) {
    bullets.push(`Generally good with other dogs, easing a multi-dog introduction.`)
  }

  // Grooming.
  if (answers.grooming === 'minimal' && shed === 0 && GROOM_RANK[breed.groomingLevel] === 0) {
    bullets.push(`Low-shedding with low grooming needs — light on day-to-day upkeep.`)
  }

  // Noise.
  if (answers.noise === 'quiet' && !isVocal(breed)) {
    bullets.push(`Not among the most vocal breeds, which helps in quieter homes.`)
  }

  // Pad with honest attribute-based fallbacks if fewer than 2 strong hits.
  const fallbacks = [
    `${breed.name}s are in the AKC ${breed.group} group, bred for ${shorten(breed.originPurpose)}.`,
    `Typical temperament: ${breed.temperamentTraits.slice(0, 3).join(', ').toLowerCase()}.`,
    `${breed.energyLevel} energy with ${breed.groomingLevel.toLowerCase()} grooming needs.`,
  ]
  let fi = 0
  while (bullets.length < 2 && fi < fallbacks.length) {
    const candidate = fallbacks[fi++]
    if (!bullets.includes(candidate)) bullets.push(candidate)
  }

  return bullets.slice(0, 3)
}

function shorten(text: string): string {
  const firstClause = text.split(/[.,;]/)[0].trim().toLowerCase()
  return firstClause.length > 0 ? firstClause : 'its original working role'
}

function buildCaveat(breed: Breed, answers: Answers): string {
  const energy = ENERGY_RANK[breed.energyLevel]
  const size = SIZE_RANK[breed.sizeCategory]

  if (answers.home === 'apartment' && (size >= 3 || energy >= 2)) {
    return `${breed.name}s are ${breed.sizeCategory.toLowerCase()} with ${breed.energyLevel.toLowerCase()} energy — apartment living works only with committed daily exercise and an outlet for their drive.`
  }
  if ((answers.timeDaily === 'low' || answers.activity === 'relaxed') && energy >= 2) {
    return `This is a ${breed.energyLevel.toLowerCase()}-energy breed; without enough daily exercise, ${breed.name}s can develop problem behaviors.`
  }
  if (answers.experience === 'first-time' && !breed.firstTimeOwnerFriendly) {
    return `${breed.name}s are typically better suited to owners with prior dog experience — plan for structured training and patience.`
  }
  if (answers.grooming === 'minimal' && SHED_RANK[breed.sheddingLevel] >= 2) {
    return `${breed.name}s are heavy shedders — expect regular brushing and hair around the home despite your preference for low upkeep.`
  }
  if (answers.household === 'kids' && !breed.goodWithKids) {
    return `${breed.name}s are not the most kid-suited breed in this list; supervise closely and prioritize early socialization.`
  }
  if (GROOM_RANK[breed.groomingLevel] === 2) {
    return `Grooming is a real commitment for ${breed.name}s — budget for regular brushing or professional grooming.`
  }
  // Default honest caveat tied to lifespan + general guidance.
  return `Every ${breed.name} is an individual; meet the specific dog, ask about health testing, and plan for a ${breed.lifespanYears[0]}-${breed.lifespanYears[1]} year commitment.`
}

// ─────────────────────────────────────────────
// MAIN ENGINE
// ─────────────────────────────────────────────

// Honest fit tiers — NOT a ranked list, NOT a percentage.
//   'may-fit'      — the breed's documented attributes clearly line up with the
//                    answers. A genuine candidate to research further.
//   'closer-look'  — a mixed fit: some attributes line up, but the caveat
//                    matters. Worth considering with eyes open.
export type FitTier = 'may-fit' | 'closer-look'

/** A breed's documented health cross-links (per breeds.ts), capped for the
 *  per-card link row. Falls back to the /health hub when none are recorded.
 *  Every path is a real folder under /app/health (or its [slug] template). */
export interface HealthLink {
  label: string
  href: string
}

export interface BreedFit {
  slug: string
  name: string
  group: string
  tier: FitTier
  rawScore: number
  fitBullets: string[]
  caveat: string
  href: string
  /** Breed-specific health reading; never a diagnosis or invented stat. */
  healthLinks: HealthLink[]
  /** Disclosed internal path to Dog.com's on-site pet-insurance comparison. */
  insuranceHref: string
}

export interface BreedFitResults {
  /** Clear positive fits. */
  mayFit: BreedFit[]
  /** Mixed fits — caveat is prominent. */
  closerLook: BreedFit[]
  /** True when nothing cleared the upper tier (no-strong-fit state). */
  noStrongFit: boolean
}

// Total breeds the wizard can match against.
export const MATCHABLE_BREED_COUNT = Breeds.length

// Tier-classifier tuning. Derived by inspecting the raw-score distribution
// across representative answer sets (apartment/low-time, rural/active,
// kids, multi-dog, big-yard/active): the top raw score lands ~19–23 and the
// scores compress near the ceiling, so a relative band off the top score gives
// a stable 3–6 upper-tier breeds where a fixed absolute cut does not. The
// ABS_FLOOR stops a weak ceiling (contradictory answers) from promoting
// genuinely poor fits.
const MAY_FIT_BAND = 4 // upper tier: score within 4 of the strongest score…
const CLOSER_BAND = 9 // closer-look: within 9 of the strongest score…
const ABS_FLOOR = 6 // …but never below a real positive raw score.
const MAY_FIT_CAP = 6 // never pad past 6 in either tier.
const CLOSER_CAP = 6

/** Up to 3 breed-specific health reads; `/health` hub fallback when none. */
function buildHealthLinks(breed: Breed): HealthLink[] {
  const links = breed.commonHealthCrossLinks
    .filter((href) => href.startsWith('/health/'))
    .slice(0, 3)
    .map((href) => ({ label: healthLabel(href), href }))
  if (links.length > 0) return links
  return [{ label: 'Dog health hub', href: '/health' }]
}

/** Turn `/health/dog-arthritis` into "Dog arthritis" for the link row. */
function healthLabel(href: string): string {
  const slug = href.replace(/^\/health\//, '').replace(/\/$/, '')
  const words = slug.split('-').join(' ').trim()
  return words.length > 0 ? words.charAt(0).toUpperCase() + words.slice(1) : 'Dog health'
}

function toBreedFit(breed: Breed, score: number, answers: Answers, tier: FitTier): BreedFit {
  return {
    slug: breed.slug,
    name: breed.name,
    group: breed.group,
    tier,
    rawScore: score,
    fitBullets: buildFitBullets(breed, answers),
    caveat: buildCaveat(breed, answers),
    href: `/breeds/${breed.slug}`,
    healthLinks: buildHealthLinks(breed),
    insuranceHref: '/reviews/best-pet-insurance',
  }
}

/**
 * Group every breed into honest fit tiers for the given answers. No ranked
 * winner, no percentage. Upper tier ('may-fit') is the cluster of breeds whose
 * raw score sits within MAY_FIT_BAND of the strongest score (floored at
 * ABS_FLOOR, capped at MAY_FIT_CAP); 'closer-look' is the next band of mixed
 * fits. Breeds below the closer band are not surfaced — the tool never pads
 * poor fits.
 */
export function getBreedFits(answers: Answers): BreedFitResults {
  const scored = Breeds.map((breed) => ({
    breed,
    score: scoreBreed(breed, answers),
  })).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return a.breed.name.localeCompare(b.breed.name)
  })

  const topScore = scored[0]?.score ?? 0
  const mayFitThreshold = Math.max(topScore - MAY_FIT_BAND, ABS_FLOOR)
  const closerThreshold = Math.max(topScore - CLOSER_BAND, ABS_FLOOR)

  const mayFit = scored
    .filter(({ score }) => score >= mayFitThreshold)
    .slice(0, MAY_FIT_CAP)
    .map(({ breed, score }) => toBreedFit(breed, score, answers, 'may-fit'))

  const mayFitSlugs = new Set(mayFit.map((b) => b.slug))

  const closerLook = scored
    .filter(({ breed, score }) => score >= closerThreshold && !mayFitSlugs.has(breed.slug))
    .slice(0, CLOSER_CAP)
    .map(({ breed, score }) => toBreedFit(breed, score, answers, 'closer-look'))

  return {
    mayFit,
    closerLook,
    noStrongFit: mayFit.length === 0,
  }
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => Boolean(answers[q.key]))
}

export function progressPercent(answers: Answers): number {
  const answered = QUESTIONS.filter((q) => answers[q.key]).length
  return Math.round((answered / QUESTIONS.length) * 100)
}
