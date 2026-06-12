/**
 * Horses.com -- Race Types & Classes cluster data
 *
 * Spoke index for the depth merge beneath the existing overview hub at
 * /racing/understanding-race-types-and-classes. Each spoke goes DEEP on ONE
 * race class; the overview stays the summary hub. This file only carries the
 * card/index metadata so the hub's "in depth" section and the per-spoke
 * sibling links stay in sync with the actual spoke pages.
 *
 * NON-WAGERING (QC §1): race classes are explained as STRUCTURAL categories
 * -- what each class means and how horses move through the claiming/allowance/
 * stakes ladder. No betting strategy, odds, handicapping-to-bet, or wagering
 * angles anywhere in this cluster. Claiming prices and handicap weights are
 * described only as the sport's organizing mechanics, never as bet signals.
 *
 * Trust posture: byline "Horses.com Editorial" only; no fabricated credentials;
 * figures kept general; no ratings/racecard/odds/profile infrastructure.
 */

export interface RaceTypeSpoke {
  slug: string
  /** Card title on the hub's depth section. */
  title: string
  /** Short eyebrow/category label (class tier). */
  kicker: string
  /** One-line description for the hub card. */
  description: string
}

/**
 * Spoke index, ordered low → high through the class ladder, with handicap
 * (a weighting method that cuts across the ladder) placed last. Mirrors the
 * slugs of the seven spoke pages beneath /racing/race-types/<slug>.
 */
export const raceTypeSpokes: RaceTypeSpoke[] = [
  {
    slug: 'maiden-races',
    title: 'Maiden Races',
    kicker: 'Entry level',
    description:
      'Races restricted to horses that have never won — the starting point of almost every racing career, and where future stars first show.',
  },
  {
    slug: 'claiming-races',
    title: 'Claiming Races',
    kicker: 'Entry level',
    description:
      'Races in which every horse is for sale at a set price, forming the everyday backbone of the racing calendar and keeping fields evenly matched.',
  },
  {
    slug: 'allowance-races',
    title: 'Allowance Races',
    kicker: 'Mid class',
    description:
      'Non-claiming races where weights are adjusted by the conditions — the proving ground between breaking a maiden and reaching stakes company.',
  },
  {
    slug: 'optional-claiming-races',
    title: 'Optional Claiming Races',
    kicker: 'Mid class',
    description:
      'A hybrid where some horses run for an allowance while others may also be claimed — the format racing secretaries use to fill competitive fields.',
  },
  {
    slug: 'stakes-races',
    title: 'Stakes Races',
    kicker: 'Top class',
    description:
      'The top class of racing, with the biggest purses and the "black type" that turns racing success into breeding value.',
  },
  {
    slug: 'graded-stakes-races',
    title: 'Graded Stakes Races',
    kicker: 'Top class',
    description:
      'The elite subset of stakes, ranked Grade 1, 2, or 3 by an independent committee on the quality of the horses each race attracts.',
  },
  {
    slug: 'handicap-races',
    title: 'Handicap Races',
    kicker: 'Weighting method',
    description:
      'Races where an official assigns each horse a weight intended to give every runner an equal chance — a method that cuts across the class ladder.',
  },
]
