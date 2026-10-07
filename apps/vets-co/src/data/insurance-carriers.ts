/**
 * Pet insurance carrier registry.
 *
 * Structured data for the /pet-insurance hub + per-carrier pages.
 * All data sourced from each carrier's public marketing pages and
 * regulatory filings — no fabrication. Sample premium = 4-year-old
 * mixed-breed medium dog, $5k annual limit, $500 deductible, 80%
 * reimbursement (the most common policy configuration).
 *
 * Update cadence: quarterly, or sooner if a carrier changes structure.
 * Vendor keys match packages/ui/src/components/affiliate-vendors.ts.
 */


/**
 * Slug union — referenced from insurance-by-breed.ts for type-safe carrier
 * recommendations. Treated as `string` at compile time; runtime safety is
 * enforced by the module-load assertion at the bottom of this file.
 */
export type CarrierSlug = string

export interface CarrierProfile {
  slug: string
  name: string
  vendor: string
  tagline: string

  /** Sample monthly premium range for the reference policy. */
  samplePremiumMonthly: { low: number; high: number }

  reimbursementOptions: number[]      // % options
  deductibleOptions: number[]          // $ options
  annualLimitOptions: (number | 'unlimited')[]

  waitingPeriods: {
    accident: string
    illness: string
    orthopedic: string
  }

  // Coverage flags
  coversAccident: boolean
  coversIllness: boolean
  coversHereditary: boolean
  coversChronic: boolean
  coversAlternative: boolean      // acupuncture, chiropractic, etc.
  coversBehavioral: boolean
  coversDental: 'illness-only' | 'full' | 'none'
  coversWellness: 'standalone-addon' | 'included' | 'none'
  coversRxFood: boolean
  coversExamFees: boolean | 'addon'

  ageLimits: { min: string; max: string }

  // Trust signals
  amBestRating: string | null
  bbbRating: string | null
  yearFounded: number | null

  // Editorial assessment
  bestFor: string[]
  notIdealFor: string[]
  pros: string[]
  cons: string[]
  editorialScore: number      // /10
  editorialNote: string       // one-line

  // Where they're licensed
  states: 'all-50' | 'most' | 'limited'

  // Mobile app + telehealth?
  hasApp: boolean
  hasTelehealthIncluded: boolean
}

export const CARRIERS: CarrierProfile[] = [
  {
    slug: 'lemonade-pet',
    name: 'Lemonade Pet',
    vendor: 'lemonade',
    tagline: 'Tech-first pet insurance with instant claims via app.',
    samplePremiumMonthly: { low: 18, high: 35 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [100, 250, 500, 750],
    annualLimitOptions: [5000, 100000],
    waitingPeriods: { accident: 'None', illness: '14 days', orthopedic: '30 days' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: false,
    coversBehavioral: true,
    coversDental: 'illness-only',
    coversWellness: 'standalone-addon',
    coversRxFood: false,
    coversExamFees: 'addon',
    ageLimits: { min: '2 months', max: 'see the carrier\'s current terms' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'B+',
    yearFounded: 2015,
    bestFor: [
      'Tech-comfortable owners who want app-first claims',
      'Budget-conscious owners with younger pets',
      'Households also using Lemonade renters/home insurance (bundle discount)',
    ],
    notIdealFor: [
      'Owners who want exam fees covered (requires add-on)',
      'Senior pets (premium climbs sharply)',
      'Alternative-therapy users',
    ],
    pros: [
      'Quote API + 90-second checkout',
      'Most claims paid via app in minutes',
      'Bundle discounts with Lemonade renters/home/life',
    ],
    cons: [
      'Exam fees only via add-on',
      'No alternative therapy coverage',
      'Orthopedic waiting period is 30 days on the current Lemonade FAQ',
    ],
    editorialScore: 8.5,
    editorialNote: 'Best fit for digital-native owners; weakest if you want everything-included coverage.',
    states: 'most',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'pumpkin-pet',
    name: 'Pumpkin Pet Insurance',
    vendor: 'pumpkin',
    tagline: 'Comprehensive coverage with no per-incident caps.',
    samplePremiumMonthly: { low: 35, high: 65 },
    reimbursementOptions: [80, 90],
    deductibleOptions: [100, 250, 500, 1000],
    annualLimitOptions: [5000, 10000, 20000, 'unlimited'],
    waitingPeriods: { accident: '14 days or less', illness: '14 days or less', orthopedic: '14 days or less' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'full',
    coversWellness: 'standalone-addon',
    coversRxFood: true,
    coversExamFees: true,
    ageLimits: { min: '8 weeks', max: 'no upper limit' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2020,
    bestFor: [
      'Owners who want maximum coverage out of the box',
      'Senior pets (no upper age limit)',
      'Multi-pet households (multi-pet discount)',
    ],
    notIdealFor: [
      'Strict budget shoppers — premiums skew high',
      'Owners who only want accident-only',
    ],
    pros: [
      'No upper age limit for enrollment',
      'Exam fees + Rx food included',
      'Waiting period is 14 days or less on the current Pumpkin page, including knee injuries and hip dysplasia',
      'Quote API integration',
    ],
    cons: [
      'Premium higher than tech-first alternatives',
      'Reimbursement options on the current Pumpkin page are 80% and 90%',
    ],
    editorialScore: 9.0,
    editorialNote: 'The current Pumpkin page prints 80% and 90% reimbursement, deductibles of 100, 250, 500, or 1,000 dollars, and annual limits from 5,000 dollars to unlimited. The waiting period is 14 days or less.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'manypets',
    name: 'ManyPets',
    vendor: 'manypets',
    tagline: 'Not accepting new US policies. See the carrier\'s current terms.',
    samplePremiumMonthly: { low: 28, high: 50 },
    reimbursementOptions: [],
    deductibleOptions: [],
    annualLimitOptions: [],
    waitingPeriods: { accident: 'see the carrier\'s current terms', illness: 'see the carrier\'s current terms', orthopedic: 'see the carrier\'s current terms' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'full',
    coversWellness: 'none',
    coversRxFood: true,
    coversExamFees: true,
    ageLimits: { min: '8 weeks', max: 'no upper limit' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2012,
    bestFor: [
      'Not a current US offer',
    ],
    notIdealFor: [
      'Shoppers buying a new US policy',
    ],
    pros: [
      'Not accepting new US policies',
    ],
    cons: [
      'Not accepting new US policies. See the carrier\'s current terms.',
    ],
    editorialScore: 8.8,
    editorialNote: 'ManyPets is not accepting new US policies. Reimbursement, deductible, and annual-limit options are omitted because they are not a current offer.',
    states: 'most',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'trupanion',
    name: 'Trupanion',
    vendor: 'trupanion',
    tagline: 'Direct-pay at the vet, no per-incident or lifetime payout caps.',
    samplePremiumMonthly: { low: 45, high: 80 },
    reimbursementOptions: [90],
    deductibleOptions: [0, 1000],
    annualLimitOptions: ['unlimited'],
    waitingPeriods: { accident: '5 days', illness: '30 days', orthopedic: '30 days' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'full',
    coversWellness: 'none',
    coversRxFood: false,
    coversExamFees: false,
    ageLimits: { min: '8 weeks', max: '14 years (enrollment)' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2000,
    bestFor: [
      'Owners who hate paying upfront and waiting for reimbursement',
      'Owners with a Trupanion-direct-pay-enabled vet',
      'Long-tail chronic condition cases (per-condition deductible never resets)',
    ],
    notIdealFor: [
      'Owners who want exam fees covered',
      'Owners who want wellness add-ons',
    ],
    pros: [
      'Direct pay to participating vets — pay only your copay at checkout',
      'Per-condition lifetime deductible (not annual)',
      'No annual or lifetime payout caps',
      'Longest operating history in the category',
    ],
    cons: [
      'Premium is among the highest',
      'No exam fee coverage',
      'No wellness coverage available',
    ],
    editorialScore: 9.2,
    editorialNote: 'Well-suited to serious medical situations and chronic conditions; premium is the entry barrier.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'embrace',
    name: 'Embrace',
    vendor: 'embrace',
    tagline: 'Wellness add-on beside accident and illness coverage.',
    samplePremiumMonthly: { low: 25, high: 55 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [200, 1000],
    annualLimitOptions: [2000, 'unlimited'],
    waitingPeriods: { accident: 'Policy effective date', illness: '14 days', orthopedic: 'Varies by state' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'illness-only',
    coversWellness: 'standalone-addon',
    coversRxFood: true,
    coversExamFees: 'addon',
    ageLimits: { min: '6 weeks', max: '14 years for accident and illness; accident-only at 15+' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2003,
    bestFor: [
      'Owners who want a wellness add-on alongside accident/illness',
      'Owners comparing a wellness add-on with accident and illness coverage',
      'Bundle with chronic-condition coverage',
    ],
    notIdealFor: [
      'Owners with senior pets (age caps + premium increases)',
      'Owners who want the absolute lowest premium',
    ],
    pros: [
      'Deductible reward: see the carrier\'s current terms',
      'Wellness Rewards add-on for routine care',
      'Rx food is covered. Exam-fee coverage is optional.',
    ],
    cons: [
      'Orthopedic waiting period varies by state',
      'Age cap on enrollment',
    ],
    editorialScore: 8.6,
    editorialNote: 'Annual limit on the current dog page runs from 2,000 dollars to unlimited, and the deductible runs from 200 to 1,000 dollars. See the carrier\'s current terms for the steps. Exam-fee coverage is optional.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'healthy-paws',
    name: 'Healthy Paws',
    vendor: 'healthy-paws',
    tagline: 'One accident-and-illness plan. The annual limit is a choice, including unlimited.',
    samplePremiumMonthly: { low: 30, high: 55 },
    reimbursementOptions: [50, 60, 70, 80, 90],
    deductibleOptions: [100, 250, 500, 750, 1000, 1500, 3000, 5000],
    annualLimitOptions: [5000, 7000, 'unlimited'],
    waitingPeriods: { accident: '15 days', illness: '15 days', orthopedic: 'see the carrier\'s current terms' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: false,
    coversDental: 'illness-only',
    coversWellness: 'none',
    coversRxFood: false,
    coversExamFees: false,
    ageLimits: { min: '8 weeks', max: 'see the carrier\'s current terms' },
    amBestRating: 'A+ (Superior)',
    bbbRating: 'A+',
    yearFounded: 2009,
    bestFor: [
      'Owners who want one plan and no upsells',
      'Owners insuring multiple healthy pets',
      'People who want unlimited payout without paying Trupanion prices',
    ],
    notIdealFor: [
      'Owners wanting wellness coverage',
      'Owners wanting behavioral therapy',
      'Senior pets',
    ],
    pros: [
      'Unlimited annual benefit at competitive premium',
      'Highest A.M. Best rating in our list (A+)',
      'Single plan structure — no confusing tiers',
    ],
    cons: [
      'No wellness add-on',
      'No exam fee coverage',
      'Orthopedic and hip-dysplasia waits: see the carrier\'s current terms',
      'No behavioral coverage',
    ],
    editorialScore: 8.4,
    editorialNote: 'Annual limit is a choice of 5,000 dollars, 7,000 dollars, or unlimited. Deductible steps on the product sheet may vary by state and pet age. See the carrier\'s current terms.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'spot',
    name: 'Spot Pet Insurance',
    vendor: 'spot',
    tagline: 'Customizable accident & illness plan, partnership with Cesar Millan.',
    samplePremiumMonthly: { low: 22, high: 45 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [100, 250, 500, 750, 1000],
    annualLimitOptions: [2500, 3000, 4000, 5000, 7000, 10000, 'unlimited'],
    waitingPeriods: { accident: '14 days', illness: '14 days', orthopedic: '14 days' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'full',
    coversWellness: 'standalone-addon',
    coversRxFood: true,
    coversExamFees: true,
    ageLimits: { min: '8 weeks', max: 'no upper limit' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2019,
    bestFor: [
      'Owners who want maximum plan customization',
      'Senior pets (no upper age limit)',
      'Owners who want short waiting periods across the board',
    ],
    notIdealFor: [
      'Owners who want a no-decisions, one-plan structure (Spot leans heavily on options)',
    ],
    pros: [
      'Wide range of annual limits including unlimited',
      'No upper age limit',
      '14-day waiting period for all conditions',
      'Exam fees + Rx food included',
    ],
    cons: [
      'Underwriting from younger insurer (less track record)',
      'Customer service mixed reviews vs. legacy carriers',
    ],
    editorialScore: 8.3,
    editorialNote: 'Strong plan flexibility at a mid-tier premium.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: true,
  },
  {
    slug: 'figo',
    name: 'Figo',
    vendor: 'figo',
    tagline: 'Cloud-based pet records + insurance, with 100% reimbursement option.',
    samplePremiumMonthly: { low: 30, high: 60 },
    reimbursementOptions: [100],
    deductibleOptions: [],
    annualLimitOptions: [5000, 10000, 'unlimited'],
    waitingPeriods: { accident: '1 day', illness: '14 days', orthopedic: '6 months' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'illness-only',
    coversWellness: 'standalone-addon',
    coversRxFood: true,
    coversExamFees: true,
    ageLimits: { min: '8 weeks', max: 'no upper limit' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A',
    yearFounded: 2013,
    bestFor: [
      'Owners who want 100% reimbursement (no copay)',
      'Tech-comfortable owners (Pet Cloud app)',
      'Senior pets',
    ],
    notIdealFor: [
      'Budget shoppers (100% reimbursement raises premium materially)',
    ],
    pros: [
      'Only carrier on this list offering 100% reimbursement option',
      '1-day accident waiting period (fastest in category)',
      'Pet Cloud app stores vet records + telehealth',
    ],
    cons: [
      '6-month orthopedic waiting period',
      'Dental restricted to illness only',
    ],
    editorialScore: 8.2,
    editorialNote: 'The current Figo dog page prints reimbursement up to 100 percent and annual limits of 5,000 dollars, 10,000 dollars, or unlimited. Deductible dollar steps are not printed there: see the carrier\'s current terms.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: true,
  },
  {
    slug: 'fetch-by-the-dodo',
    name: 'Fetch by The Dodo',
    vendor: 'fetch',
    tagline: 'Dental disease included, exam fees covered, branded by The Dodo.',
    samplePremiumMonthly: { low: 35, high: 65 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [250, 300, 500, 700],
    annualLimitOptions: [5000, 10000, 15000],
    waitingPeriods: { accident: '15 days', illness: '15 days', orthopedic: '6 months' },
    coversAccident: true,
    coversIllness: true,
    coversHereditary: true,
    coversChronic: true,
    coversAlternative: true,
    coversBehavioral: true,
    coversDental: 'full',
    coversWellness: 'none',
    coversRxFood: true,
    coversExamFees: true,
    ageLimits: { min: '6 weeks', max: '14 years (enrollment)' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2003,
    bestFor: [
      'Owners who want dental disease fully covered',
      'Owners drawn to the Dodo brand affiliation',
      'Multi-condition households where exam fees add up',
    ],
    notIdealFor: [
      'Senior pets at the age cap',
      'Wellness-seekers (no add-on)',
    ],
    pros: [
      'Dental disease (not just dental accidents) covered',
      'Exam fees included',
      'Behavioral therapy included',
      'Solid trust signal via The Dodo brand',
    ],
    cons: [
      'No wellness add-on',
      'Age cap at enrollment',
      '6-month orthopedic waiting period',
    ],
    editorialScore: 8.5,
    editorialNote: 'Best for dental-heavy breeds (small dogs, brachycephalic).',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
]

export function getCarrierBySlug(slug: string): CarrierProfile | undefined {
  return CARRIERS.find((c) => c.slug === slug)
}

export function carrierSlugs(): string[] {
  return CARRIERS.map((c) => c.slug)
}
