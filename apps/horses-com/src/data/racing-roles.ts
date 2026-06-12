/**
 * Horses.com -- Racing Roles cluster data
 *
 * Spoke index for the depth merge beneath the existing overview hub at
 * /racing/the-people-of-racing. Each spoke goes DEEP on ONE human role in a
 * racing operation; the overview stays the who's-who summary hub. This file
 * only carries the card/index metadata so the hub's "Roles in Depth" section
 * and the per-spoke sibling links stay in sync with the actual spoke pages.
 *
 * NON-WAGERING (QC §1): these are people/role explainers -- what each role
 * does, the path into it, and the daily reality. No betting on jockeys or
 * trainers, no odds, no handicapping. Pay/earnings are kept general (pay model,
 * not specific salary figures) and never framed as a bet signal.
 *
 * Trust posture: byline "Horses.com Editorial" only; no fabricated credentials
 * or AI humans; figures kept general or sourced; no ratings/racecard/odds/
 * profile infrastructure.
 */

export interface RacingRoleSpoke {
  slug: string
  /** Card title on the hub's depth section. */
  title: string
  /** Short eyebrow/category label. */
  kicker: string
  /** One-line description for the hub card. */
  description: string
}

/**
 * Spoke index, ordered by the working flow of a race day: the rider, the
 * trainer who prepared the horse, the owner who funds it, and the officials
 * who keep it fair. Mirrors the slugs of the four spoke pages beneath
 * /racing/racing-roles/<slug>.
 */
export const racingRoleSpokes: RacingRoleSpoke[] = [
  {
    slug: 'jockey',
    title: 'The Jockey',
    kicker: 'In the saddle',
    description:
      'The licensed rider who partners the horse in a race -- an elite athlete making split-second tactical decisions at speed.',
  },
  {
    slug: 'trainer',
    title: 'The Trainer',
    kicker: 'The stable',
    description:
      'The licensed professional who conditions the horse, plans its campaign, enters races, and runs the stable team.',
  },
  {
    slug: 'owner',
    title: 'The Owner',
    kicker: 'The connections',
    description:
      'The person or group that owns the horse, funds its costs, and earns its purses -- from sole owners to fractional syndicates.',
  },
  {
    slug: 'racing-official',
    title: 'Racing Officials & Stewards',
    kicker: 'Integrity',
    description:
      'The licensed officials -- stewards, starter, placing judges, clerk of scales -- who enforce the rules and protect each race.',
  },
]
