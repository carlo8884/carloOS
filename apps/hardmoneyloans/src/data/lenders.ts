/**
 * HardMoneyLoans.com — Lender Registry
 *
 * Data sourced exclusively from public-facing lender marketing pages and
 * widely reported industry coverage. No private/insider data is included.
 *
 * Ranges and program details change frequently — the editorial process
 * cross-checks each entry against the lender's published programs page
 * before a build is shipped. Rate ranges are floors-and-ceilings, not
 * guaranteed quotes.
 *
 * Per Architect S11 §6.1 ("Hard Money Lead Marketplace"):
 *   - This file is the source of truth for both /lenders/[slug] and the
 *     comparison table on the homepage.
 *   - Editorial scores (1-10) are CarloOS internal assessment, not lender
 *     marketing claims. Methodology lives at /editorial-standards.
 */

import type { Vendor } from '@carloOS/ui'

export type Specialty =
  | 'fix-and-flip'
  | 'dscr-rental'
  | 'bridge'
  | 'new-construction'
  | 'multifamily'
  | 'commercial'

export interface LenderProfile {
  slug: string
  name: string
  vendor: Vendor
  /** One-line editorial positioning. */
  positioning: string
  /** Loan amounts ($USD), inclusive. */
  loanMin: number
  loanMax: number
  /** Interest rate range — published lender floors/ceilings. */
  rateMin: number
  rateMax: number
  /** Loan-to-value caps. */
  ltvMax: number
  /** Term range in months. */
  termMonthsMin: number
  termMonthsMax: number
  /** State coverage. 'nationwide' or a curated list. */
  stateCoverage: 'nationwide' | string[]
  /** Excluded states (best-effort summary). */
  stateExclusions?: string[]
  /** Property types they actively fund. */
  propertyTypes: Array<'SFR' | 'Multifamily' | 'Mixed-Use' | 'Commercial' | 'New Construction'>
  /** Specialties — drives /quiz routing. */
  specialties: Specialty[]
  /** Editorial 1-10. */
  editorialScore: number
  pros: string[]
  cons: string[]
  /** "Best for" use cases — drives the /lenders/[slug] page. */
  bestFor: string[]
  /** Public marketing URL — used as the no-affiliate canonical reference. */
  marketingUrl: string
  /** Year founded — for trust/longevity signal. */
  founded: number
}

export const LENDERS: LenderProfile[] = [
  {
    slug: 'kiavi',
    name: 'Kiavi',
    vendor: 'kiavi',
    positioning:
      'Tech-forward private lender for SFR investors — formerly LendingHome — with a self-serve digital application and strong DSCR + bridge programs.',
    loanMin: 75_000,
    loanMax: 3_000_000,
    rateMin: 9.25,
    rateMax: 12.50,
    ltvMax: 90,
    termMonthsMin: 12,
    termMonthsMax: 360,
    stateCoverage: 'nationwide',
    stateExclusions: ['ND', 'SD', 'VT'],
    propertyTypes: ['SFR', 'Multifamily'],
    specialties: ['fix-and-flip', 'dscr-rental', 'bridge'],
    editorialScore: 9.1,
    pros: [
      'Online application + digital draws speed up closing vs traditional hard money',
      'Funds 1-4 unit residential, both fix-and-flip and DSCR rental',
      'Has closed >$22B+ in loans (per public disclosures) — long operating history',
    ],
    cons: [
      'Not licensed in every state — verify coverage during application',
      'Pricing is competitive but not the absolute lowest in the market',
    ],
    bestFor: [
      'SFR fix-and-flip investors doing 2+ deals/year',
      'BRRRR investors refinancing into a 30-year DSCR rental product',
      'Investors who want digital-first servicing (online portal, draw requests)',
    ],
    marketingUrl: 'https://www.kiavi.com',
    founded: 2013,
  },
  {
    slug: 'rcn-capital',
    name: 'RCN Capital',
    vendor: 'rcncapital',
    positioning:
      'Nationwide private lender for residential 1-4 unit investors — broad product menu spanning fix-and-flip, ground-up construction, and long-term rental.',
    loanMin: 50_000,
    loanMax: 7_500_000,
    rateMin: 9.99,
    rateMax: 13.25,
    ltvMax: 90,
    termMonthsMin: 12,
    termMonthsMax: 360,
    stateCoverage: 'nationwide',
    stateExclusions: ['AK', 'NV', 'ND', 'SD', 'VT'],
    propertyTypes: ['SFR', 'Multifamily', 'Mixed-Use'],
    specialties: ['fix-and-flip', 'dscr-rental', 'new-construction', 'bridge', 'multifamily'],
    editorialScore: 8.7,
    pros: [
      'One of the widest product menus in the space — flip, rental, new build, multifamily',
      'Multifamily up to 5-50 units on dedicated program',
      'Established brand with broker channel and direct retail',
    ],
    cons: [
      'State exclusions on a handful of low-volume markets',
      'Higher minimum credit thresholds than some competitors',
    ],
    bestFor: [
      'Investors who want one lender across flip, rental, and new construction',
      'Multifamily buyers in the 5-50 unit range',
      'Brokers seeking a wholesale relationship',
    ],
    marketingUrl: 'https://www.rcncapital.com',
    founded: 2010,
  },
  {
    slug: 'lima-one',
    name: 'Lima One Capital',
    vendor: 'limaone',
    positioning:
      'Full-suite investor lender with FixNFlip, NewConstruction, Multifamily Bridge, and Rental30 — known for institutional-grade processes.',
    loanMin: 75_000,
    loanMax: 20_000_000,
    rateMin: 9.50,
    rateMax: 12.99,
    ltvMax: 90,
    termMonthsMin: 13,
    termMonthsMax: 360,
    stateCoverage: 'nationwide',
    stateExclusions: ['AK', 'NV', 'ND', 'SD', 'VT'],
    propertyTypes: ['SFR', 'Multifamily', 'Mixed-Use', 'New Construction'],
    specialties: ['fix-and-flip', 'dscr-rental', 'new-construction', 'multifamily', 'bridge'],
    editorialScore: 8.9,
    pros: [
      'Institutional-grade underwriting + deep multifamily bridge desk',
      'Funds new construction up to 100% of cost on qualified deals',
      'Rental30 product offers 30-year fixed DSCR for buy-and-hold',
    ],
    cons: [
      'Higher document expectations than the most "light-doc" private lenders',
      'Pricing assumes a complete investor profile — first-timers can stall',
    ],
    bestFor: [
      'Multi-property portfolio investors',
      'Ground-up construction in landed lots',
      'Buy-and-hold investors who want a single 30-year refinance product',
    ],
    marketingUrl: 'https://www.limaone.com',
    founded: 2010,
  },
  {
    slug: 'anchor-loans',
    name: 'Anchor Loans',
    vendor: 'anchorloans',
    positioning:
      'One of the longest-tenured private fix-and-flip lenders in the US — fast close, heavy on west-coast and high-velocity flippers.',
    loanMin: 100_000,
    loanMax: 7_500_000,
    rateMin: 9.95,
    rateMax: 12.95,
    ltvMax: 85,
    termMonthsMin: 6,
    termMonthsMax: 24,
    stateCoverage: 'nationwide',
    stateExclusions: ['AK', 'HI', 'ND', 'SD', 'VT'],
    propertyTypes: ['SFR', 'Multifamily', 'Mixed-Use'],
    specialties: ['fix-and-flip', 'bridge', 'new-construction', 'multifamily'],
    editorialScore: 8.4,
    pros: [
      'Founded 1998 — longest operating history of the major private lenders',
      'Fast-track closings for experienced flippers (often 7-14 days)',
      'Has originated >$15B in loans (per public statements)',
    ],
    cons: [
      'Less digital-forward than Kiavi or Groundfloor',
      'Focused on experienced borrowers — first-timer track record matters',
    ],
    bestFor: [
      'High-velocity flippers running 5+ deals at once',
      'Experienced investors who value closing speed over rate',
      'West coast (CA, AZ, NV) property markets',
    ],
    marketingUrl: 'https://www.anchorloans.com',
    founded: 1998,
  },
  {
    slug: 'groundfloor',
    name: 'Groundfloor',
    vendor: 'groundfloor',
    positioning:
      'Specializes in residential 1-4 unit fix-and-flip loans funded partly via a retail crowdfunding model — efficient for smaller flip deals.',
    loanMin: 75_000,
    loanMax: 2_000_000,
    rateMin: 7.50,
    rateMax: 12.50,
    ltvMax: 90,
    termMonthsMin: 6,
    termMonthsMax: 18,
    stateCoverage: 'nationwide',
    stateExclusions: ['AK', 'ID', 'MN', 'ND', 'NV', 'OR', 'SD', 'UT', 'VT'],
    propertyTypes: ['SFR'],
    specialties: ['fix-and-flip', 'bridge'],
    editorialScore: 8.0,
    pros: [
      'Among the lowest rate floors in private 1-4 unit lending',
      'Self-serve loan application + transparent fee schedule',
      'No prepayment penalty on standard programs',
    ],
    cons: [
      'Strictly 1-4 unit residential — no multifamily or commercial',
      'Narrower state coverage than the largest competitors',
    ],
    bestFor: [
      'Small residential flips ($75k–$500k range)',
      'Borrowers who want low rate floors and no prepay penalty',
      'Investors comfortable with self-serve digital underwriting',
    ],
    marketingUrl: 'https://www.groundfloor.com',
    founded: 2013,
  },
  {
    slug: 'crosscountry-mortgage',
    name: 'CrossCountry Mortgage',
    vendor: 'crosscountry',
    positioning:
      'Large national mortgage banker with an investor-focused non-QM / DSCR division — useful when blending hard money bridge with a 30-year refinance under one roof.',
    loanMin: 75_000,
    loanMax: 5_000_000,
    rateMin: 7.99,
    rateMax: 12.00,
    ltvMax: 80,
    termMonthsMin: 12,
    termMonthsMax: 360,
    stateCoverage: 'nationwide',
    propertyTypes: ['SFR', 'Multifamily'],
    specialties: ['dscr-rental', 'bridge'],
    editorialScore: 7.8,
    pros: [
      'Licensed in 50 states — broadest coverage in this list',
      'Can pair short-term bridge with a 30-year DSCR refinance internally',
      'Established mortgage banker with full back-office',
    ],
    cons: [
      'Not a dedicated "true" hard money desk — slower than pure-play private lenders',
      'Rate floors assume strong borrower profile + clean title',
    ],
    bestFor: [
      'BRRRR investors who want one lender across bridge + long-term hold',
      'Borrowers in non-NV/ND/SD states where dedicated private lenders are limited',
      'Investors with strong PITI documentation',
    ],
    marketingUrl: 'https://crosscountrymortgage.com',
    founded: 2003,
  },
  {
    slug: 'jet-lending',
    name: 'Jet Lending',
    vendor: 'jetlending',
    positioning:
      'Houston-headquartered private lender expanded into multi-state — strong on Texas markets but lends in 30+ states.',
    loanMin: 50_000,
    loanMax: 3_000_000,
    rateMin: 10.50,
    rateMax: 13.99,
    ltvMax: 90,
    termMonthsMin: 6,
    termMonthsMax: 24,
    stateCoverage: [
      'TX', 'OK', 'AR', 'LA', 'NM', 'CO', 'KS', 'MO', 'TN', 'FL',
      'GA', 'AL', 'MS', 'AZ', 'NC', 'SC', 'KY', 'IN', 'OH', 'PA',
      'VA', 'WV', 'IL', 'NE', 'NV', 'WA', 'WI', 'MD', 'NJ', 'CT', 'MI',
    ],
    propertyTypes: ['SFR', 'Multifamily'],
    specialties: ['fix-and-flip', 'bridge', 'new-construction'],
    editorialScore: 7.5,
    pros: [
      'Texas-focused desk with deep local knowledge of TX/OK/AR markets',
      'Will fund smaller deals other lenders pass on (down to $50k)',
      'Founded 2004 — multi-cycle operating history',
    ],
    cons: [
      'Coverage map is regional, not nationwide',
      'Higher rate floors than digital-first competitors',
    ],
    bestFor: [
      'Texas-region flippers (DFW, Houston, Austin)',
      'Smaller deals where minimum loan size matters',
      'First-time flippers willing to pay a premium for relationship underwriting',
    ],
    marketingUrl: 'https://jetlending.com',
    founded: 2004,
  },
  {
    slug: 'civic-financial',
    name: 'Civic Financial Services',
    vendor: 'civicfinancial',
    positioning:
      'Non-owner-occupied investor lender — bridge, ground-up, and DSCR products. Acquired by Roc Capital (formerly part of PacWest), national platform.',
    loanMin: 100_000,
    loanMax: 7_000_000,
    rateMin: 9.49,
    rateMax: 12.50,
    ltvMax: 80,
    termMonthsMin: 12,
    termMonthsMax: 360,
    stateCoverage: 'nationwide',
    stateExclusions: ['AK', 'MN', 'ND', 'SD', 'UT', 'VT'],
    propertyTypes: ['SFR', 'Multifamily', 'Mixed-Use'],
    specialties: ['bridge', 'dscr-rental', 'new-construction', 'multifamily'],
    editorialScore: 7.9,
    pros: [
      'Strong DSCR rental program for non-owner-occupied 1-4 unit',
      'Funded by institutional capital — consistent draw funding',
      'Has historically funded smaller multifamily (5-20 units)',
    ],
    cons: [
      'Post-acquisition product menu has shifted — verify current offerings',
      'Underwriting is documentation-heavy vs lighter-touch competitors',
    ],
    bestFor: [
      'DSCR rental loans on stabilized properties',
      'Mid-sized multifamily acquisitions in core markets',
      'Investors who want an institutionally-funded lender vs balance-sheet shop',
    ],
    marketingUrl: 'https://www.civicfs.com',
    founded: 2014,
  },
]

export function getLender(slug: string): LenderProfile | undefined {
  return LENDERS.find((l) => l.slug === slug)
}

export function lendersLicensedIn(stateCode: string): LenderProfile[] {
  return LENDERS.filter((l) => {
    if (l.stateCoverage === 'nationwide') {
      return !(l.stateExclusions ?? []).includes(stateCode)
    }
    return l.stateCoverage.includes(stateCode)
  })
}

export function lendersForSpecialty(specialty: Specialty): LenderProfile[] {
  return LENDERS.filter((l) => l.specialties.includes(specialty))
}
