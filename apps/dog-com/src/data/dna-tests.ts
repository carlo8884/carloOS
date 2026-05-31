/**
 * Pet DNA test registry.
 *
 * Structured profiles for the /dna-testing hub + per-test pages.
 * Sourced from each test's public marketing pages — no fabrication.
 * Used by Architect S13 (Pet DNA Test Affiliate Funnel).
 *
 * Vendor keys match packages/ui/src/components/affiliate-vendors.ts.
 */


export interface DnaTestProfile {
  slug: string
  name: string
  brand: string
  vendor: string
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
    // vendor key must match the registered route in
    // apps/dog-com/src/data/affiliate-routes.ts — the canonical key is
    // `embark`, NOT `embark-vet`. The page renders /go/${t.vendor}/home,
    // so a mismatch here re-introduces the dir-015 #1 404 bug.
    vendor: 'embark',
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
    vendor: 'wisdom-panel',
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
  'bulldog': {
    breedName: 'Bulldog',
    keyConditions: [
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Hip dysplasia', risk: 'high' },
      { name: 'Cherry eye (prolapsed nictitans gland)', risk: 'high' },
      { name: 'Hyperuricosuria (HUU)', risk: 'moderate' },
      { name: 'Degenerative myelopathy (DM)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'English Bulldogs carry one of the highest hereditary burden profiles of any breed. DNA screening identifies HUU and DM carriers and supports proactive planning around the breed\'s near-certain airway and orthopedic challenges.',
  },
  'beagle': {
    breedName: 'Beagle',
    keyConditions: [
      { name: 'Musladin-Lueke syndrome (MLS)', risk: 'moderate' },
      { name: 'Neonatal cerebellar cortical degeneration (NCCD)', risk: 'moderate' },
      { name: 'Factor VII deficiency', risk: 'moderate' },
      { name: 'Primary open-angle glaucoma (POAG)', risk: 'moderate' },
      { name: 'Intervertebral disc disease (IVDD)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Beagles carry several well-characterized recessive mutations including MLS and Factor VII deficiency. DNA testing identifies carriers and supports informed breeding and surgical-bleeding-risk decisions.',
  },
  'dachshund': {
    breedName: 'Dachshund',
    keyConditions: [
      { name: 'Intervertebral disc disease (IVDD, CDDY/FGF4)', risk: 'high' },
      { name: 'Progressive retinal atrophy (cord1-PRA)', risk: 'moderate' },
      { name: 'Lafora disease (Miniature Wirehaired)', risk: 'moderate' },
      { name: 'Patellar luxation', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'IVDD is the defining hereditary risk for Dachshunds — driven by the FGF4 retrogene (CDDY) present in nearly all of the breed. DNA testing confirms the CDDY genotype and informs lifelong back-care decisions.',
  },
  'rottweiler': {
    breedName: 'Rottweiler',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Osteosarcoma predisposition', risk: 'high' },
      { name: 'Dilated cardiomyopathy (DCM)', risk: 'moderate' },
      { name: 'Subaortic stenosis (SAS)', risk: 'moderate' },
      { name: 'Juvenile laryngeal paralysis and polyneuropathy (JLPP)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Rottweilers are one of the highest-risk breeds for osteosarcoma and carry the JLPP mutation. DNA testing confirms JLPP status and supports early orthopedic and cardiac monitoring plans.',
  },
  'yorkshire-terrier': {
    breedName: 'Yorkshire Terrier',
    keyConditions: [
      { name: 'Portosystemic (liver) shunt', risk: 'high' },
      { name: 'Tracheal collapse', risk: 'high' },
      { name: 'Patellar luxation', risk: 'high' },
      { name: 'Legg-Calvé-Perthes disease', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Yorkies are the toy breed most associated with portosystemic shunt and tracheal collapse. DNA testing supports early surgical planning and informs the breed\'s heightened anesthesia risk.',
  },
  'boxer': {
    breedName: 'Boxer',
    keyConditions: [
      { name: 'Arrhythmogenic right ventricular cardiomyopathy (ARVC / Boxer cardiomyopathy)', risk: 'high' },
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'high' },
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Mast cell tumors and lymphoma predisposition', risk: 'high' },
      { name: 'Subaortic stenosis (SAS)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Boxers are the prototypical ARVC breed and one of the highest-DM-risk breeds. Embark screens both the SOD1 DM variant and supports Boxer-specific Holter monitoring conversations with your vet.',
  },
  'pomeranian': {
    breedName: 'Pomeranian',
    keyConditions: [
      { name: 'Patellar luxation', risk: 'high' },
      { name: 'Tracheal collapse', risk: 'high' },
      { name: 'Patent ductus arteriosus (PDA)', risk: 'moderate' },
      { name: 'Alopecia X / black skin disease', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Poms share the small-breed orthopedic and airway risks (luxating patella, tracheal collapse). DNA testing supports early-life monitoring and informs anesthesia planning for dental procedures.',
  },
  'shih-tzu': {
    breedName: 'Shih Tzu',
    keyConditions: [
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Intervertebral disc disease (IVDD)', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Renal dysplasia', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Shih Tzus inherit the brachycephalic airway risks of their flat-faced peers and also carry PRA-prcd. DNA testing identifies vision-loss carriers before clinical signs appear.',
  },
  'doberman-pinscher': {
    breedName: 'Doberman Pinscher',
    keyConditions: [
      { name: 'Dilated cardiomyopathy (DCM, PDK4 / TTN variants)', risk: 'high' },
      { name: 'von Willebrand disease type I', risk: 'high' },
      { name: 'Hypothyroidism', risk: 'moderate' },
      { name: 'Wobbler syndrome (cervical spondylomyelopathy)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Dobermans are the highest-risk breed for DCM — up to 60% lifetime prevalence in some populations. Embark screens both Doberman-specific DCM variants and the vWD-I variant, both clinically actionable.',
  },
  'great-dane': {
    breedName: 'Great Dane',
    keyConditions: [
      { name: 'Dilated cardiomyopathy (DCM)', risk: 'high' },
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
      { name: 'Wobbler syndrome (cervical spondylomyelopathy)', risk: 'high' },
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Osteosarcoma predisposition', risk: 'high' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Great Danes face a stacked giant-breed risk profile — DCM, bloat, and osteosarcoma. DNA testing flags cardiac and orthopedic risk so prophylactic gastropexy and cardiology baselines can be planned early.',
  },
  'siberian-husky': {
    breedName: 'Siberian Husky',
    keyConditions: [
      { name: 'Hereditary cataracts', risk: 'high' },
      { name: 'Progressive retinal atrophy (X-linked PRA)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Zinc-responsive dermatosis', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Huskies carry an X-linked PRA variant and an unusual zinc-absorption defect. DNA testing identifies the X-linked PRA carrier status, which matters for breeding decisions and informs diet planning.',
  },
  'cavalier-king-charles-spaniel': {
    breedName: 'Cavalier King Charles Spaniel',
    keyConditions: [
      { name: 'Mitral valve disease (MVD)', risk: 'high' },
      { name: 'Syringomyelia / Chiari-like malformation (SM/CM)', risk: 'high' },
      { name: 'Episodic falling syndrome (BCAN deletion)', risk: 'moderate' },
      { name: 'Curly coat / dry eye syndrome (CKCSID)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Cavaliers face near-universal MVD risk by age 10 and very high syringomyelia rates. DNA testing screens the episodic falling and curly coat / dry eye variants — both Cavalier-specific recessive disorders.',
  },
  'miniature-schnauzer': {
    breedName: 'Miniature Schnauzer',
    keyConditions: [
      { name: 'Hyperlipidemia / hypertriglyceridemia', risk: 'high' },
      { name: 'Pancreatitis predisposition', risk: 'high' },
      { name: 'Myotonia congenita', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (Type A PRA)', risk: 'moderate' },
      { name: 'Urolithiasis (calcium oxalate stones)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Mini Schnauzers carry a known myotonia congenita variant and have the highest hypertriglyceridemia risk of any breed. DNA testing helps anticipate pancreatitis-prone diet and lifestyle adjustments.',
  },
  'bernese-mountain-dog': {
    breedName: 'Bernese Mountain Dog',
    keyConditions: [
      { name: 'Histiocytic sarcoma predisposition', risk: 'high' },
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'moderate' },
      { name: 'von Willebrand disease type I', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Berners have the highest histiocytic sarcoma incidence of any breed — median lifespan is only ~7 years. DNA testing flags DM and vWD-I carriers and informs early-life insurance and oncology screening decisions.',
  },
  'mastiff': {
    breedName: 'Mastiff',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Dilated cardiomyopathy (DCM)', risk: 'moderate' },
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
      { name: 'Progressive retinal atrophy (dominant PRA, RHO)', risk: 'moderate' },
      { name: 'Cystinuria', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'English Mastiffs carry a rare dominant-RHO PRA variant and a cystinuria variant — both clinically relevant. DNA testing supports breeding decisions and informs giant-breed gastropexy timing.',
  },
  'vizsla': {
    breedName: 'Vizsla',
    keyConditions: [
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Hypothyroidism', risk: 'moderate' },
      { name: 'Hemophilia A', risk: 'moderate' },
      { name: 'Epilepsy (idiopathic)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Vizslas are a relatively healthy sporting breed but carry hereditary epilepsy and endocrine risks. DNA testing supports early identification of carriers for breeding-program decisions.',
  },
  'weimaraner': {
    breedName: 'Weimaraner',
    keyConditions: [
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Hypertrophic osteodystrophy (HOD)', risk: 'moderate' },
      { name: 'von Willebrand disease type II', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Weimaraners are one of the highest-bloat-risk deep-chested breeds and carry a rare vWD type II variant. DNA testing supports surgical-bleeding-risk planning and informs prophylactic gastropexy decisions.',
  },
  'brittany': {
    breedName: 'Brittany',
    keyConditions: [
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Canine discoid lupus erythematosus', risk: 'moderate' },
      { name: 'Complement 3 deficiency', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Brittanys carry a documented complement-3 deficiency variant unique to the breed. DNA testing identifies the PRA-prcd carrier status and supports informed breeding decisions.',
  },
  'basset-hound': {
    breedName: 'Basset Hound',
    keyConditions: [
      { name: 'Intervertebral disc disease (IVDD, CDDY)', risk: 'high' },
      { name: 'Elbow dysplasia', risk: 'high' },
      { name: 'Glaucoma (primary)', risk: 'moderate' },
      { name: 'Thrombopathia', risk: 'moderate' },
      { name: 'X-linked severe combined immunodeficiency (X-SCID)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Bassets carry the CDDY (FGF4) IVDD genotype universally and have a Basset-specific thrombopathia variant. DNA testing supports lifelong back-care and surgical-bleeding-risk planning.',
  },
  'collie': {
    breedName: 'Collie',
    keyConditions: [
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'high' },
      { name: 'Collie eye anomaly (CEA)', risk: 'high' },
      { name: 'Progressive retinal atrophy (rcd2-PRA)', risk: 'moderate' },
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Up to 70% of Collies carry MDR1 — knowing this status before a vet prescribes ivermectin, loperamide, or other affected drugs is potentially lifesaving. CEA prevalence in the breed also exceeds 70%.',
  },
  'pug': {
    breedName: 'Pug',
    keyConditions: [
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Pug dog encephalitis (necrotizing meningoencephalitis)', risk: 'moderate' },
      { name: 'Hemivertebrae / spinal malformation', risk: 'high' },
      { name: 'Hip dysplasia', risk: 'high' },
      { name: 'Primary glaucoma', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Pugs face high airway, spinal, and orthopedic risks. DNA testing helps quantify breed mix in suspected pug crosses and identifies risk markers worth proactive vet conversations.',
  },
  'chihuahua': {
    breedName: 'Chihuahua',
    keyConditions: [
      { name: 'Patellar luxation', risk: 'high' },
      { name: 'Tracheal collapse', risk: 'moderate' },
      { name: 'Hydrocephalus', risk: 'moderate' },
      { name: 'Mitral valve disease (MVD)', risk: 'moderate' },
      { name: 'Hypoglycemia (juvenile)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Chihuahuas share the small-breed cardiac and orthopedic risk profile — luxating patella and MVD lead the list. DNA testing also confirms whether suspected mixes carry MDR1 from herding-breed ancestry.',
  },
  'jack-russell-terrier': {
    breedName: 'Jack Russell Terrier',
    keyConditions: [
      { name: 'Spinocerebellar ataxia (SCA)', risk: 'moderate' },
      { name: 'Late-onset ataxia (LOA)', risk: 'moderate' },
      { name: 'Primary lens luxation (PLL, ADAMTS17)', risk: 'high' },
      { name: 'Patellar luxation', risk: 'moderate' },
      { name: 'Deafness (congenital)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Jack Russells carry the ADAMTS17 primary lens luxation variant — a sight-threatening hereditary risk Embark screens directly. Two distinct ataxia variants are also breed-specific.',
  },
  'border-collie': {
    breedName: 'Border Collie',
    keyConditions: [
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'high' },
      { name: 'Collie eye anomaly (CEA)', risk: 'high' },
      { name: 'Trapped neutrophil syndrome (TNS)', risk: 'moderate' },
      { name: 'Neuronal ceroid lipofuscinosis (CL)', risk: 'moderate' },
      { name: 'Imerslund-Gräsbeck syndrome (B12 malabsorption)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Border Collies carry several breed-specific recessive disorders Embark screens by variant (TNS, CL, IGS, MDR1, CEA). Knowing carrier status is essential before working-line breeding and clinically actionable for individual dogs.',
  },
  'cocker-spaniel': {
    breedName: 'Cocker Spaniel',
    keyConditions: [
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'high' },
      { name: 'Adult-onset neuropathy (AON, American Cocker)', risk: 'moderate' },
      { name: 'Familial nephropathy (English Cocker)', risk: 'moderate' },
      { name: 'Phosphofructokinase deficiency (PFK)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Cocker Spaniels are the highest-prevalence breed for PRA-prcd and carry a breed-specific PFK deficiency variant. DNA testing screens both and supports informed breeding decisions.',
  },
  'shetland-sheepdog': {
    breedName: 'Shetland Sheepdog',
    keyConditions: [
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'high' },
      { name: 'Collie eye anomaly (CEA)', risk: 'moderate' },
      { name: 'von Willebrand disease type III', risk: 'moderate' },
      { name: 'Hypothyroidism', risk: 'moderate' },
      { name: 'Dermatomyositis', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Shelties carry MDR1 and a rare vWD type III variant. Drug-sensitivity status is critical to know before ivermectin, loperamide, or vincristine is ever prescribed.',
  },
  'pembroke-welsh-corgi': {
    breedName: 'Pembroke Welsh Corgi',
    keyConditions: [
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'high' },
      { name: 'Intervertebral disc disease (IVDD, CDDY)', risk: 'high' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'von Willebrand disease type I', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Pembrokes are one of the top-three breeds for DM and carry the CDDY IVDD genotype universally. SOD1 DM status is the single most impactful screening result for the breed.',
  },
  'cardigan-welsh-corgi': {
    breedName: 'Cardigan Welsh Corgi',
    keyConditions: [
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'high' },
      { name: 'Intervertebral disc disease (IVDD, CDDY)', risk: 'high' },
      { name: 'Progressive retinal atrophy (rcd3-PRA)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Cardigans carry a breed-specific rcd3-PRA variant Embark screens directly, plus high DM and IVDD prevalence. Carrier status is essential for responsible breeding.',
  },
  'dalmatian': {
    breedName: 'Dalmatian',
    keyConditions: [
      { name: 'Hyperuricosuria (HUU)', risk: 'high' },
      { name: 'Congenital sensorineural deafness', risk: 'high' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Bronzing syndrome / dalmatian dermatitis', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Essentially all purebred Dalmatians are homozygous for the HUU variant — making low-purine diet and hydration management lifelong essentials. DNA testing confirms HUU and breed mix in suspected crosses.',
  },
  'akita': {
    breedName: 'Akita',
    keyConditions: [
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'Sebaceous adenitis', risk: 'moderate' },
      { name: 'VKH-like syndrome (uveodermatologic)', risk: 'moderate' },
      { name: 'Hypothyroidism', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Akitas have an unusual immune-mediated condition profile (sebaceous adenitis, VKH-like syndrome) and a breed-typical low T4 baseline that complicates hypothyroidism diagnosis. DNA testing screens for PRA-prcd carriers.',
  },
  'alaskan-malamute': {
    breedName: 'Alaskan Malamute',
    keyConditions: [
      { name: 'Polyneuropathy (AMPN, NDRG1)', risk: 'moderate' },
      { name: 'Chondrodysplasia (dwarfism)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Hereditary cataracts', risk: 'moderate' },
      { name: 'Zinc-responsive dermatosis', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Malamutes carry breed-specific polyneuropathy (NDRG1) and chondrodysplasia variants. DNA testing screens both — critical for breeders and clinically informative for individual dogs.',
  },
  'samoyed': {
    breedName: 'Samoyed',
    keyConditions: [
      { name: 'Hereditary glomerulopathy (X-linked, COL4A5)', risk: 'high' },
      { name: 'Progressive retinal atrophy (X-linked PRA)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Diabetes mellitus predisposition', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Samoyeds carry a serious X-linked hereditary nephritis (COL4A5) that is fatal in affected males. DNA testing of this variant is one of the most important screens any Samoyed owner or breeder can run.',
  },
  'chow-chow': {
    breedName: 'Chow Chow',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Entropion', risk: 'high' },
      { name: 'Hypothyroidism', risk: 'moderate' },
      { name: 'Pemphigus foliaceus', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Chows carry high orthopedic and autoimmune skin disease risk. DNA testing helps confirm breed mix in suspected Chow crosses where coat and disposition can complicate identification.',
  },
  'newfoundland': {
    breedName: 'Newfoundland',
    keyConditions: [
      { name: 'Subaortic stenosis (SAS)', risk: 'high' },
      { name: 'Dilated cardiomyopathy (DCM)', risk: 'moderate' },
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Cystinuria (SLC3A1)', risk: 'moderate' },
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Newfoundlands are one of the highest-risk breeds for SAS and carry a Newfoundland-specific cystinuria (SLC3A1) variant Embark screens. Cardiology baseline by 12 months is the breed standard of care.',
  },
  'saint-bernard': {
    breedName: 'Saint Bernard',
    keyConditions: [
      { name: 'Hip and elbow dysplasia', risk: 'high' },
      { name: 'Dilated cardiomyopathy (DCM)', risk: 'moderate' },
      { name: 'Osteosarcoma predisposition', risk: 'high' },
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Saints face the standard giant-breed risk cluster — orthopedic, cardiac, GDV, and osteosarcoma. DNA testing flags DM status and supports proactive cardiology and gastropexy planning.',
  },
  'irish-setter': {
    breedName: 'Irish Setter',
    keyConditions: [
      { name: 'Progressive retinal atrophy (rcd1-PRA, PDE6B)', risk: 'high' },
      { name: 'Canine leukocyte adhesion deficiency (CLAD)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Gastric dilatation-volvulus (bloat / GDV)', risk: 'high' },
      { name: 'Hypothyroidism', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Irish Setters carry the rcd1-PRA variant — one of the earliest mapped canine PRA mutations — and the breed-specific CLAD immune deficiency. Embark screens both directly.',
  },
  'english-springer-spaniel': {
    breedName: 'English Springer Spaniel',
    keyConditions: [
      { name: 'Phosphofructokinase deficiency (PFK)', risk: 'moderate' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'Fucosidosis', risk: 'moderate' },
      { name: 'Hip and elbow dysplasia', risk: 'moderate' },
      { name: 'Acral mutilation syndrome', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'English Springers carry breed-specific PFK deficiency and fucosidosis variants — both recessive disorders Embark screens directly. Carrier status matters for breeding decisions and exertional-collapse risk assessment.',
  },
  'american-staffordshire-terrier': {
    breedName: 'American Staffordshire Terrier',
    keyConditions: [
      { name: 'Neuronal ceroid lipofuscinosis (NCL-A)', risk: 'moderate' },
      { name: 'Cerebellar ataxia (hereditary)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Mast cell tumor predisposition', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'AmStaffs carry a breed-specific NCL-A variant linked to adult-onset neurodegeneration. DNA testing identifies carriers — a screen the breed parent club explicitly recommends.',
  },
  'american-pit-bull-terrier': {
    breedName: 'American Pit Bull Terrier',
    keyConditions: [
      { name: 'Hip dysplasia', risk: 'moderate' },
      { name: 'Hereditary cataracts', risk: 'moderate' },
      { name: 'Atopic dermatitis (allergies)', risk: 'high' },
      { name: 'Cerebellar ataxia (NAPEPLD)', risk: 'moderate' },
      { name: 'Degenerative myelopathy (DM, SOD1)', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Pit Bull Terriers share several recessive variants with AmStaffs including a NAPEPLD cerebellar ataxia variant. DNA testing also resolves the most common rescue-dog question — what is my dog actually made of.',
  },
  'boston-terrier': {
    breedName: 'Boston Terrier',
    keyConditions: [
      { name: 'Brachycephalic obstructive airway syndrome (BOAS)', risk: 'high' },
      { name: 'Hereditary cataracts (juvenile and adult)', risk: 'high' },
      { name: 'Patellar luxation', risk: 'moderate' },
      { name: 'Hemivertebrae', risk: 'moderate' },
      { name: 'Brachycephalic ocular syndrome', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Bostons carry a breed-specific juvenile hereditary cataract (HSF4) variant Embark screens directly, plus standard brachycephalic risks. Cataract status is one of the most actionable screens for the breed.',
  },
  'maltese': {
    breedName: 'Maltese',
    keyConditions: [
      { name: 'Portosystemic (liver) shunt', risk: 'high' },
      { name: 'Patellar luxation', risk: 'moderate' },
      { name: 'Mitral valve disease (MVD)', risk: 'moderate' },
      { name: 'Hydrocephalus', risk: 'moderate' },
      { name: 'White shaker dog syndrome', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Maltese have one of the highest portosystemic shunt rates among toy breeds. DNA testing supports breed-confirmation and informs the heightened anesthesia and surgical-risk planning typical of micro-breeds.',
  },
  'papillon': {
    breedName: 'Papillon',
    keyConditions: [
      { name: 'Patellar luxation', risk: 'high' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'Neuroaxonal dystrophy (PNAD)', risk: 'moderate' },
      { name: 'von Willebrand disease type I', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Papillons carry a breed-specific PNAD (progressive neuroaxonal dystrophy) variant Embark screens directly. PRA-prcd and vWD-I carrier status are also clinically relevant.',
  },
  'italian-greyhound': {
    breedName: 'Italian Greyhound',
    keyConditions: [
      { name: 'Patellar luxation', risk: 'high' },
      { name: 'Progressive retinal atrophy (PRA-prcd)', risk: 'moderate' },
      { name: 'Color dilution alopecia', risk: 'moderate' },
      { name: 'Periodontal disease', risk: 'high' },
      { name: 'Hereditary cataracts', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'IGs share toy-breed orthopedic and dental risks, plus a coat-color-linked alopecia tied to the dilution allele. DNA testing reports both dilution and PRA-prcd status.',
  },
  'whippet': {
    breedName: 'Whippet',
    keyConditions: [
      { name: 'Multiple drug sensitivity (MDR1)', risk: 'moderate' },
      { name: 'von Willebrand disease type I', risk: 'moderate' },
      { name: 'Bully whippet syndrome (MSTN myostatin variant)', risk: 'moderate' },
      { name: 'Hereditary cataracts', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Whippets carry the MSTN "bully whippet" myostatin variant — heterozygotes are racing-fast, homozygotes are heavily muscled and health-affected. Embark reports MSTN and MDR1 status directly.',
  },
  'basenji': {
    breedName: 'Basenji',
    keyConditions: [
      { name: 'Fanconi syndrome (FAN1)', risk: 'high' },
      { name: 'Progressive retinal atrophy (PRA-BAS)', risk: 'moderate' },
      { name: 'Pyruvate kinase deficiency (PK)', risk: 'moderate' },
      { name: 'Hip dysplasia', risk: 'moderate' },
    ],
    bestTest: 'embark-vet-dog-dna-test',
    note: 'Basenjis are the canonical Fanconi syndrome breed — FAN1 variant testing is the single most important screen any Basenji owner or breeder can run, and Embark screens it directly along with breed-specific PK and PRA variants.',
  },
}
