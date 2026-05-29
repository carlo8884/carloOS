/**
 * Pet DNA test registry.
 *
 * Structured profiles for the /dna-testing hub + per-test pages.
 * Sourced from each test's public marketing pages — no fabrication.
 * Used by Architect S13 (Pet DNA Test Affiliate Funnel).
 *
 * Vendor keys match packages/ui/src/components/affiliate-vendors.ts.
 */

import type { Vendor } from '@carloOS/ui'

export interface DnaTestProfile {
  slug: string
  name: string
  brand: string
  vendor: Vendor
  species: ('dog' | 'cat')[]
  tagline: string

  // Pricing
  pricesUsd: { test: string; range: [number, number] }[]

  // Marker counts and coverage
  geneticMarkers: number              // ~200,000+ for Embark
  breedsCovered: number               // 350+ for Embark, 365+ for Wisdom
  healthConditionsScreened: number    // 250+ for Embark, 265+ for Wisdom
  traits: number                      // 51 for Wisdom, 35 for Embark

  // Testing capabilities
  ancestryBreakdown: boolean
  relativeFinder: boolean
  inbreedingCoefficient: boolean
  predictedAdultWeight: boolean
  lifeExpectancyEstimate: boolean
  drugSensitivity: boolean            // MDR1 etc.
  agingTest: boolean                  // "biological age" or similar

  // Trust + science
  ownedBy: string                     // Mars Petcare for Wisdom, etc.
  researchPartner: string | null      // Cornell CVM for Embark
  databaseSize: string                 // "5M+ dogs"
  yearFounded: number

  // Process
  saliva: 'cheek-swab' | 'saliva'
  resultsTime: string                  // "2-3 weeks"
  resultsFormat: ('digital' | 'printable')[]
  vetSharing: boolean

  // Editorial assessment
  bestFor: string[]
  notIdealFor: string[]
  pros: string[]
  cons: string[]
  editorialScore: number              // /10
  editorialNote: string

  // Affiliate
  affiliatePayoutLow: number
  affiliatePayoutHigh: number
}

export const DNA_TESTS: DnaTestProfile[] = [
  {
    slug: 'embark-vet-dog-dna-test',
    name: 'Embark Breed + Health Identification Kit',
    brand: 'Embark Vet',
    vendor: 'embarkvet',
    species: ['dog'],
    tagline: 'The gold standard for canine genetic testing — built in partnership with Cornell University.',
    pricesUsd: [
      { test: 'Breed Identification', range: [99, 129] },
      { test: 'Breed + Health Identification', range: [149, 199] },
      { test: 'For Breeders', range: [149, 199] },
    ],
    geneticMarkers: 230000,
    breedsCovered: 350,
    healthConditionsScreened: 270,
    traits: 35,
    ancestryBreakdown: true,
    relativeFinder: true,
    inbreedingCoefficient: true,
    predictedAdultWeight: true,
    lifeExpectancyEstimate: false,
    drugSensitivity: true,
    agingTest: false,
    ownedBy: 'Embark Veterinary, Inc.',
    researchPartner: 'Cornell University College of Veterinary Medicine',
    databaseSize: '1.5M+ dogs',
    yearFounded: 2015,
    saliva: 'cheek-swab',
    resultsTime: '2-4 weeks',
    resultsFormat: ['digital', 'printable'],
    vetSharing: true,
    bestFor: [
      'Owners who want the deepest genetic-marker analysis available',
      'Breeders evaluating breeding pair compatibility',
      'Rescue dog owners curious about breed mix + relative finder',
      'Health-conscious owners wanting hereditary condition screening',
    ],
    notIdealFor: [
      'Strict budget shoppers — premium pricing vs. Wisdom Panel',
      'Cat owners — Embark is dogs-only',
    ],
    pros: [
      'Highest genetic-marker count in the industry (230,000+)',
      'Cornell-developed genotyping platform',
      'Relative Finder connects you with your dog\'s genetic family across the database',
      'Veterinary-shareable health reports',
      'Strong editorial coverage from independent reviewers',
    ],
    cons: [
      'Premium price vs. Wisdom Panel',
      'Results take 2-4 weeks',
      'Dogs only',
    ],
    editorialScore: 9.4,
    editorialNote: 'Best overall canine DNA test — pay more, get more.',
    affiliatePayoutLow: 10,
    affiliatePayoutHigh: 25,
  },
  {
    slug: 'wisdom-panel-premium',
    name: 'Wisdom Panel Premium',
    brand: 'Wisdom Panel',
    vendor: 'wisdompanel',
    species: ['dog'],
    tagline: 'The largest dog DNA database in the world, owned by Mars Petcare.',
    pricesUsd: [
      { test: 'Wisdom Panel Essential', range: [85, 99] },
      { test: 'Wisdom Panel Premium', range: [149, 169] },
    ],
    geneticMarkers: 100000,
    breedsCovered: 365,
    healthConditionsScreened: 265,
    traits: 51,
    ancestryBreakdown: true,
    relativeFinder: false,
    inbreedingCoefficient: false,
    predictedAdultWeight: true,
    lifeExpectancyEstimate: true,
    drugSensitivity: true,
    agingTest: false,
    ownedBy: 'Mars Petcare (via Kinship)',
    researchPartner: 'University of Cambridge Canine Genetics Centre',
    databaseSize: '5M+ dogs',
    yearFounded: 2007,
    saliva: 'cheek-swab',
    resultsTime: '2-3 weeks',
    resultsFormat: ['digital'],
    vetSharing: true,
    bestFor: [
      'Owners who want the broadest breed library (365+ breeds)',
      'Budget-conscious shoppers on Wisdom Panel Essential',
      'Owners wanting predicted adult weight + life expectancy estimates',
    ],
    notIdealFor: [
      'Owners who want a Relative Finder feature',
      'Breeders needing the highest marker density',
      'Cat owners (separate Basepaws product is the Mars cat option)',
    ],
    pros: [
      'Largest breed library in the category (365+)',
      'Largest validated database (5M+ dogs)',
      'University of Cambridge research partnership',
      'Essential tier is the budget-best dog DNA test',
      'Predicted weight + life expectancy modeling',
    ],
    cons: [
      'No Relative Finder feature',
      'Lower genetic marker count vs. Embark',
      'No inbreeding coefficient reporting',
    ],
    editorialScore: 9.0,
    editorialNote: 'Best for breadth + budget; weakest if you want the deepest marker analysis.',
    affiliatePayoutLow: 8,
    affiliatePayoutHigh: 18,
  },
  {
    slug: 'basepaws-cat-dna-test',
    name: 'Basepaws Breed + Health Cat DNA Test',
    brand: 'Basepaws',
    vendor: 'basepaws',
    species: ['cat'],
    tagline: 'The leading cat DNA test, owned by Zoetis.',
    pricesUsd: [
      { test: 'Breed + Health', range: [129, 159] },
      { test: 'Dental Health Test', range: [69, 99] },
      { test: 'Whole Genome Sequencing', range: [499, 599] },
    ],
    geneticMarkers: 4000000,
    breedsCovered: 21,
    healthConditionsScreened: 65,
    traits: 25,
    ancestryBreakdown: true,
    relativeFinder: false,
    inbreedingCoefficient: false,
    predictedAdultWeight: false,
    lifeExpectancyEstimate: false,
    drugSensitivity: false,
    agingTest: false,
    ownedBy: 'Zoetis Inc.',
    researchPartner: null,
    databaseSize: '12k+ cats',
    yearFounded: 2016,
    saliva: 'cheek-swab',
    resultsTime: '4-6 weeks',
    resultsFormat: ['digital'],
    vetSharing: true,
    bestFor: [
      'Cat owners (the only competitive cat DNA test in the market)',
      'Owners of mixed-breed cats wanting heritage estimates',
      'Owners worried about dental disease risk (Basepaws Dental Health add-on)',
      'Owners willing to spend for whole-genome sequencing',
    ],
    notIdealFor: [
      'Dog owners — Basepaws is cats-only',
      'Owners wanting fast turnaround (4-6 weeks)',
    ],
    pros: [
      'Only credible cat DNA test option',
      'Standalone Dental Health Test (unique in category)',
      'Whole Genome Sequencing tier available',
      'Owned by Zoetis — major animal health credibility',
    ],
    cons: [
      'Smaller database than dog peers (12k cats vs. millions for dog tests)',
      'Fewer health conditions screened (~65) than dog options',
      'Long turnaround (4-6 weeks)',
    ],
    editorialScore: 8.4,
    editorialNote: 'The default cat DNA test by lack of competition; strongest dental angle.',
    affiliatePayoutLow: 10,
    affiliatePayoutHigh: 20,
  },
]

export function getDnaTestBySlug(slug: string): DnaTestProfile | undefined {
  return DNA_TESTS.find((t) => t.slug === slug)
}

export function dnaTestSlugs(): string[] {
  return DNA_TESTS.map((t) => t.slug)
}

/**
 * Breed-specific health condition mappings — for the breed × DNA test
 * landing pages (architect S13 deployment).
 */
export const BREED_DNA_RECOMMENDATIONS: Record<
  string,
  {
    breedName: string
    keyConditions: { name: string; risk: 'high' | 'moderate' }[]
    bestTest: 'embark-vet-dog-dna-test' | 'wisdom-panel-premium'
    note: string
  }
> = {
  'golden-retriever': {
    breedName: 'Golden Retriever',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Subaortic stenosis (SAS)', risk: 'moderate' },
      { name: 'Hemangiosarcoma predisposition', risk: 'high' },
      { name: 'Lymphoma predisposition', risk: 'high' },
      { name: 'Hypothyroidism', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Goldens have one of the highest cancer rates of any breed (60%+ lifetime). DNA testing flags hereditary heart and orthopedic conditions for proactive monitoring.',
  },
  'labrador-retriever': {
    breedName: 'Labrador Retriever',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Exercise-induced collapse (EIC)', risk: 'moderate' },
      { name: 'Centronuclear myopathy (CNM)', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA)', risk: 'moderate' },
      { name: 'Obesity gene (POMC mutation)', risk: 'high' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Labs carry a known POMC mutation that drives obesity risk. DNA testing identifies carriers so you can preempt weight gain with strict feeding.',
  },
  'french-bulldog': {
    breedName: 'French Bulldog',
    keyConditions: [
      { name: 'Hyperuricosuria (HUU)', risk: 'high' },
      { name: 'Degenerative myelopathy (DM)', risk: 'moderate' },
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'moderate' },
      { name: 'Intervertebral disc disease (IVDD)', risk: 'high' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Frenchies inherit high risks for orthopedic and respiratory conditions. DNA testing is informational, not preventative — but it helps you anticipate insurance + lifestyle decisions early.',
  },
  'german-shepherd': {
    breedName: 'German Shepherd',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Degenerative myelopathy (DM)', risk: 'high' },
      { name: 'Exocrine pancreatic insufficiency (EPI)', risk: 'moderate' },
      { name: 'Hemophilia A', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Shepherds are the second-most-affected breed for DM. Genetic testing identifies carriers so owners can monitor for hindlimb weakness onset.',
  },
  'australian-shepherd': {
    breedName: 'Australian Shepherd',
    keyConditions: [
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'high' },
      { name: 'Collie eye anomaly (CEA)', risk: 'moderate' },
      { name: 'Hereditary cataracts', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Aussies carry the MDR1 mutation at high frequency. Knowing your dog\'s MDR1 status before a vet prescribes ivermectin or other affected drugs is potentially lifesaving.',
  },
  'poodle': {
    breedName: 'Poodle',
    keyConditions: [
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'von Willebrand disease type I', risk: 'moderate' },
      { name: 'Sebaceous adenitis', risk: 'moderate' },
      { name: 'Addison\'s disease (Standard Poodle)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Standard poodles in particular carry hereditary Addison\'s risk. DNA testing supports earlier vet discussion of monitoring.',
  },
}
