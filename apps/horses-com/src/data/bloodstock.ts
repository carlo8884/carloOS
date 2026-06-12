/**
 * Horses.com -- Bloodstock cluster data
 *
 * Editorial substance for the /bloodstock hub and its three spokes.
 * NON-WAGERING: this is the breeding and sales side of the sport, treated as an
 * educational reference. No betting, odds, handicapping, or investment advice.
 *
 * Trust posture (QC §1): byline "Horses.com Editorial" only; no fabricated
 * expertise; no individualized buying/investment advice; figures kept general.
 * No ratings/racecard/profile infrastructure is referenced here -- this is a
 * self-contained editorial dataset.
 */

export interface BloodstockSpoke {
  slug: string
  /** Card title on the hub. */
  title: string
  /** Short eyebrow/category label. */
  kicker: string
  /** One-line description for the hub card. */
  description: string
}

/**
 * Hub-level spoke index. Mirrors the slugs of the three spoke pages so the hub
 * card grid and the ItemList schema stay in sync.
 */
export const bloodstockSpokes: BloodstockSpoke[] = [
  {
    slug: 'what-is-bloodstock',
    title: 'What Is Bloodstock?',
    kicker: 'The business',
    description:
      'What the term means, what bloodstock agents do, and how the breeding-and-trading side of racing actually works.',
  },
  {
    slug: 'how-thoroughbred-sales-work',
    title: 'How Thoroughbred Sales Work',
    kicker: 'The sales ring',
    description:
      'Yearling sales, two-year-olds in training, breeding stock, the bidding process, and what the prices really mean.',
  },
  {
    slug: 'reading-a-pedigree',
    title: 'How to Read a Pedigree',
    kicker: 'Breeding basics',
    description:
      'Sire and dam lines, black type, the role of the broodmare, and what breeders mean by a "strong page".',
  },
]
