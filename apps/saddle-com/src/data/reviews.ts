/**
 * Single source of truth for Saddle.com review hub entries.
 *
 * The /reviews hub renders both its featured-card grid (the 4 promoted
 * reviews) and its "All Reviews" footer index from this array — adding a
 * new review here is enough; no edit to /reviews/page.tsx required.
 *
 * Drift prevention: prior to this file, the hub hand-listed reviews twice,
 * which silently lost `/reviews/best-stirrups` (fixed in PR #278).
 */

export interface SaddleReview {
  /** URL slug under /reviews/ — must match the page.tsx directory name. */
  slug: string
  /** Display label used in the All-Reviews index. */
  shortTitle: string
  /** Featured-card title (longer; year-stamped). */
  fullTitle: string
  /** Featured-card subtitle. */
  description: string
  /** Show in the top featured grid? Defaults to false (index-only). */
  featured?: boolean
  /** Optional eyebrow on the featured card (e.g. 'Full Review'). */
  featuredBadge?: string
}

export const SADDLE_REVIEWS: SaddleReview[] = [
  {
    slug: 'best-english-saddles',
    shortTitle: 'Best English Saddles',
    fullTitle: 'Best English Saddles 2025',
    description:
      'Stubben, Pessoa, Bates, Collegiate — dressage, jumping, AP ranked',
    featured: true,
    featuredBadge: '🏆 Full Review',
  },
  {
    slug: 'best-western-saddles',
    shortTitle: 'Best Western Saddles',
    fullTitle: 'Best Western Saddles 2025',
    description:
      'Working, pleasure, and trail western saddles compared.',
  },
  {
    slug: 'stubben-saddle-review',
    shortTitle: 'Stubben Saddle Review',
    fullTitle: 'Stubben Saddle Review 2025',
    description: 'Roxane, Portos, Aramis — complete lineup reviewed',
    featured: true,
  },
  {
    slug: 'pessoa-saddle-review',
    shortTitle: 'Pessoa Saddle Review',
    fullTitle: 'Pessoa Saddle Review 2025',
    description: 'Gen X Pro, Legacy, Optimum ranked',
    featured: true,
  },
  {
    slug: 'collegiate-saddle-review',
    shortTitle: 'Collegiate Saddle Review',
    fullTitle: 'Collegiate Saddle Review 2025',
    description: 'Best budget English saddles reviewed',
    featured: true,
  },
  {
    slug: 'best-horse-blankets',
    shortTitle: 'Best Horse Blankets',
    fullTitle: 'Best Horse Blankets 2025',
    description:
      'Turnout and stable blankets ranked for denier and fill weight.',
  },
  {
    slug: 'best-riding-boots',
    shortTitle: 'Best Riding Boots',
    fullTitle: 'Best Riding Boots 2025',
    description:
      'Field, dress, and tall boots compared for fit and durability.',
  },
  {
    slug: 'best-riding-gloves',
    shortTitle: 'Best Riding Gloves',
    fullTitle: 'Best Riding Gloves 2025',
    description: 'Roeckl, SSG, and Shires ranked for summer and winter.',
  },
  {
    slug: 'best-riding-helmets',
    shortTitle: 'Best Riding Helmets',
    fullTitle: 'Best Riding Helmets 2025',
    description:
      'ASTM/SEI-certified helmets compared on fit, ventilation, and price.',
  },
  {
    slug: 'best-saddle-pads',
    shortTitle: 'Best Saddle Pads',
    fullTitle: 'Best Saddle Pads 2025',
    description: 'Dressage, jump, and Western saddle pads compared.',
  },
  {
    slug: 'best-stirrup-irons',
    shortTitle: 'Best Stirrup Irons',
    fullTitle: 'Best Stirrup Irons 2025',
    description:
      'Composite, safety-release, and traditional stirrup irons ranked.',
  },
  {
    slug: 'best-stirrups',
    shortTitle: 'Best Stirrups',
    fullTitle: 'Best Stirrups 2025',
    description:
      'Beginner-friendly index of stirrup options and safety considerations.',
  },
]

export const FEATURED_SADDLE_REVIEWS = SADDLE_REVIEWS.filter((r) => r.featured)
