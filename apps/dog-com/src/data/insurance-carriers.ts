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

import type { Vendor } from '@carloOS/ui'

export interface CarrierProfile {
  slug: string
  name: string
  vendor: Vendor
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
    annualLimitOptions: [5000, 10000, 20000, 50000, 100000],
    waitingPeriods: { accident: '2 days', illness: '14 days', orthopedic: '6 months' },
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
    ageLimits: { min: '2 months', max: '14 years (enrollment)' },
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
      '6-month orthopedic waiting period (industry standard but worth noting)',
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
    reimbursementOptions: [90],
    deductibleOptions: [100, 250, 500, 1000],
    annualLimitOptions: [10000, 20000, 'unlimited'],
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
      'Same 14-day waiting period for all conditions including orthopedic',
      'Quote API integration',
    ],
    cons: [
      'Premium higher than tech-first alternatives',
      'Only 90% reimbursement (no 80% option to lower premium)',
    ],
    editorialScore: 9.0,
    editorialNote: 'Most comprehensive carrier in the market; weak point is the premium.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'manypets',
    name: 'ManyPets',
    vendor: 'manypets',
    tagline: 'UK transplant offering high coverage with optional pre-existing condition coverage after 18 months.',
    samplePremiumMonthly: { low: 28, high: 50 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [250, 500],
    annualLimitOptions: ['unlimited'],
    waitingPeriods: { accident: '15 days', illness: '15 days', orthopedic: '15 days' },
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
      'Owners with pets that have minor pre-existing conditions',
      'Owners wanting unlimited annual coverage',
      'Senior pets',
    ],
    notIdealFor: [
      'Owners who want wellness coverage (not offered)',
      'Owners who prefer tiered annual limits',
    ],
    pros: [
      'Unlimited annual benefit standard',
      'Curable pre-existing conditions covered after 18 months symptom-free',
      'Quote API integration',
      'No payout cap per condition',
    ],
    cons: [
      'No wellness add-on',
      'Only two deductible options',
    ],
    editorialScore: 8.8,
    editorialNote: 'Strongest pre-existing condition stance in the market.',
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
    deductibleOptions: [0, 100, 250, 500, 750, 1000],
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
    editorialNote: 'Best-in-class for serious medical situations and chronic conditions; premium is the entry barrier.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'embrace',
    name: 'Embrace',
    vendor: 'embrace',
    tagline: 'Strong wellness add-on and per-incident deductible discount.',
    samplePremiumMonthly: { low: 25, high: 55 },
    reimbursementOptions: [70, 80, 90],
    deductibleOptions: [200, 300, 500, 750, 1000],
    annualLimitOptions: [5000, 8000, 10000, 15000, 30000],
    waitingPeriods: { accident: '2 days', illness: '14 days', orthopedic: '6 months' },
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
    ageLimits: { min: '6 weeks', max: '14 years (enrollment)' },
    amBestRating: 'A (Excellent)',
    bbbRating: 'A+',
    yearFounded: 2003,
    bestFor: [
      'Owners who want a wellness add-on alongside accident/illness',
      'Cost-conscious owners with healthy pets (deductible decreases each claim-free year)',
      'Bundle with chronic-condition coverage',
    ],
    notIdealFor: [
      'Owners with senior pets (age caps + premium increases)',
      'Owners who want the absolute lowest premium',
    ],
    pros: [
      "Healthy Pet Deductible: $50 off your deductible each year you don't file an illness claim",
      'Wellness Rewards add-on for routine care',
      'Exam fees + Rx food covered',
    ],
    cons: [
      '6-month orthopedic waiting period (waivable with exam form)',
      'Age cap on enrollment',
    ],
    editorialScore: 8.6,
    editorialNote: 'Best overall balance of coverage breadth and wellness add-on.',
    states: 'all-50',
    hasApp: true,
    hasTelehealthIncluded: false,
  },
  {
    slug: 'healthy-paws',
    name: 'Healthy Paws',
    vendor: 'healthypaws',
    tagline: 'Single-plan simplicity with unlimited annual benefit.',
    samplePremiumMonthly: { low: 30, high: 55 },
    reimbursementOptions: [50, 60, 70, 80, 90],
    deductibleOptions: [100, 250, 500, 750],
    annualLimitOptions: ['unlimited'],
    waitingPeriods: { accident: '15 days', illness: '15 days', orthopedic: '12 months' },
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
    ageLimits: { min: '8 weeks', max: '14 years (enrollment)' },
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
      '12-month orthopedic waiting period (longer than industry norm)',
      'No behavioral coverage',
    ],
    editorialScore: 8.4,
    editorialNote: 'Best for owners who hate decision fatigue and want unlimited coverage.',
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
    annualLimitOptions: [2500, 4000, 5000, 7000, 10000, 'unlimited'],
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
    editorialNote: 'Best plan flexibility in the category at mid-tier premium.',
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
    reimbursementOptions: [70, 80, 90, 100],
    deductibleOptions: [100, 250, 500, 750, 1500],
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
    editorialNote: 'Only carrier offering true 100% reimbursement; premium reflects it.',
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
