/**
 * Dog.com — Breed data file.
 *
 * Programmatic SEO source-of-truth for /breeds/[slug] template.
 * Each entry must be sourced from AKC breed standards, OFA prevalence
 * databases, Morris Animal Foundation studies, or breed-club guidance.
 *
 * IMPORTANT — health prevalence rules:
 *   - Health concerns are listed only when documented in AKC/OFA/VCA/breed-club
 *     or peer-reviewed literature for that breed.
 *   - We never fabricate prevalence numbers. The template renders the conditions
 *     as a list — quantitative prevalence is only added to copy when it is
 *     supportable from OFA or a published study.
 *   - If a field is unknown, leave it undefined and the template will omit it.
 *
 * Existing canonical hand-written pages (golden-retriever, labrador-retriever,
 * french-bulldog, german-shepherd) are present here for the index + sitemap
 * but EXCLUDED from generateStaticParams in [slug]/page.tsx — their
 * deep, hand-written pages remain authoritative.
 *
 * Existing brief hand-written pages for other breeds (akita, beagle, boxer,
 * ...) are also excluded from generateStaticParams to avoid Next.js route
 * collisions. The template renders only breeds that do NOT have a static
 * folder.
 */

export type BreedGroup =
  | 'Sporting'
  | 'Working'
  | 'Toy'
  | 'Hound'
  | 'Herding'
  | 'Terrier'
  | 'Non-Sporting'
  | 'Crossbreed'

export type SizeCategory = 'Toy' | 'Small' | 'Medium' | 'Large' | 'Giant'
export type EnergyLevel = 'Low' | 'Moderate' | 'High' | 'Very High'
export type SheddingLevel =
  | 'Low'
  | 'Moderate'
  | 'Heavy'
  | 'Hypoallergenic claim — not validated'
export type GroomingLevel = 'Low' | 'Moderate' | 'High'

export interface Breed {
  slug: string
  name: string
  group: BreedGroup
  sizeCategory: SizeCategory
  weightRangeLb: [number, number]
  heightRangeIn: [number, number]
  lifespanYears: [number, number]
  energyLevel: EnergyLevel
  sheddingLevel: SheddingLevel
  trainabilityNotes: string
  healthConcerns: string[]
  commonHealthCrossLinks: string[]
  originCountry: string
  originPurpose: string
  temperamentTraits: string[]
  goodWithKids: boolean
  goodWithOtherDogs: boolean
  firstTimeOwnerFriendly: boolean
  groomingLevel: GroomingLevel
  knownGeneticTests?: string[]
  /**
   * Editorial breed × pet-insurance profile. Present ONLY for breeds with
   * clear, well-documented hereditary cost drivers (peer-reviewed / OFA /
   * breed-club / VCA literature). Drives the /breeds/<slug>/insurance spoke.
   * Conditions are framed as PREDISPOSITIONS, not certainties (QC §1).
   * Cost ranges are realistic US specialty/GP treatment bands, not invented.
   * If a breed lacks defensible data, leave this undefined — no page is built.
   */
  insuranceProfile?: BreedInsuranceProfile
}

/** Honest, sourced risk framing for the breed × insurance spoke. */
export type InsuranceRiskTier = 'higher' | 'average' | 'lower'

export interface BreedInsuranceCondition {
  /** Condition name as an owner would search it. */
  name: string
  /** Realistic US treatment cost band (GP + specialty). Range, not a point. */
  typicalCostRange: string
  /** One-line nuance: pre-existing exclusion risk, chronicity, bilateral, etc. */
  note: string
}

export interface BreedInsuranceProfile {
  /** 2–4 of the breed's best-documented hereditary cost drivers. */
  topConditions: BreedInsuranceCondition[]
  /** Honest tier relative to the average dog — not a scare label. */
  riskTier: InsuranceRiskTier
  /** Breed-specific enrollment-timing guidance (e.g. before BOAS/murmur shows). */
  enrollmentNote: string
}

/**
 * Slugs of breeds with existing static folders under /app/breeds/.
 * The dynamic [slug] template excludes these from generateStaticParams.
 * Source: ls apps/dog-com/src/app/breeds/ at sprint start.
 */
export const EXISTING_STATIC_BREED_SLUGS: ReadonlySet<string> = new Set([
  'akita',
  'australian-shepherd',
  'beagle',
  'bernese-mountain-dog',
  'border-collie',
  'boxer',
  'bulldog',
  'bullmastiff',
  'cavalier-king-charles',
  'cocker-spaniel',
  'dachshund',
  'doberman-pinscher',
  'french-bulldog',
  'german-shepherd',
  'golden-doodle',
  'golden-retriever',
  'great-dane',
  'great-pyrenees',
  'irish-setter',
  'irish-wolfhound',
  'labrador-retriever',
  'poodle',
  'rottweiler',
  'saint-bernard',
  'shiba-inu',
  'shih-tzu',
  'siberian-husky',
  'vizsla',
  'weimaraner',
  'yorkshire-terrier',
])

/**
 * Subset of canonical hand-written deep guides — used for explicit reference
 * elsewhere. These have 200+ lines of curated content and must not be
 * shadowed by template output.
 */
export const CANONICAL_HAND_WRITTEN_SLUGS: ReadonlySet<string> = new Set([
  'golden-retriever',
  'labrador-retriever',
  'french-bulldog',
  'german-shepherd',
])

export const Breeds: Breed[] = [
  // ─────────────────────────────────────────────────────────────────
  // Canonical hand-written (kept in data for index + sitemap only).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'golden-retriever',
    name: 'Golden Retriever',
    group: 'Sporting',
    sizeCategory: 'Large',
    weightRangeLb: [55, 75],
    heightRangeIn: [21, 24],
    lifespanYears: [10, 12],
    energyLevel: 'High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Exceptionally trainable — among the top working/obedience breeds; food and praise motivated.',
    healthConcerns: [
      'Hemangiosarcoma and lymphoma (Morris Animal Foundation Golden Retriever Lifetime Study)',
      'Hip and elbow dysplasia (OFA breed statistics)',
      'Subvalvular aortic stenosis',
      'Hypothyroidism',
      'Atopic dermatitis',
    ],
    commonHealthCrossLinks: [
      '/health/dog-cancer-signs',
      '/health/dog-arthritis',
      '/health/dog-skin-allergies',
      '/health/golden-retriever-health',
    ],
    originCountry: 'Scotland',
    originPurpose:
      'Bred in the Scottish Highlands in the mid-1800s by Lord Tweedmouth to retrieve waterfowl in cold water and rough terrain.',
    temperamentTraits: ['Friendly', 'Trustworthy', 'Eager to please', 'Patient', 'Confident'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'prcd-PRA', 'GR-PRA1', 'GR-PRA2', 'ICT-A'],
  },
  {
    slug: 'labrador-retriever',
    name: 'Labrador Retriever',
    group: 'Sporting',
    sizeCategory: 'Large',
    weightRangeLb: [55, 80],
    heightRangeIn: [21, 24],
    lifespanYears: [10, 12],
    energyLevel: 'High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Among the most trainable breeds in existence — food-motivated and biddable; most-registered service and assistance dog.',
    healthConcerns: [
      'Hip and elbow dysplasia (OFA breed statistics)',
      'Obesity — POMC gene mutation documented in ~23% of pet Labs',
      'Exercise-induced collapse (EIC)',
      'Centronuclear myopathy (CNM)',
      'prcd-PRA',
    ],
    commonHealthCrossLinks: [
      '/health/dog-obesity',
      '/health/dog-arthritis',
      '/health/labrador-health',
    ],
    originCountry: 'Newfoundland (Canada) — refined in the UK',
    originPurpose:
      'Bred from St. John\'s water dogs to retrieve fish and waterfowl in icy North Atlantic waters; refined in England in the 1800s.',
    temperamentTraits: ['Outgoing', 'Even-tempered', 'Gentle', 'Intelligent', 'Active'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'EIC', 'CNM', 'prcd-PRA', 'D-locus'],
  },
  {
    slug: 'french-bulldog',
    name: 'French Bulldog',
    group: 'Non-Sporting',
    sizeCategory: 'Small',
    weightRangeLb: [16, 28],
    heightRangeIn: [11, 13],
    lifespanYears: [10, 12],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Stubborn but intelligent — short training sessions with food rewards; heat sensitivity restricts vigorous training.',
    healthConcerns: [
      'Brachycephalic obstructive airway syndrome (BOAS)',
      'Intervertebral disc disease (IVDD)',
      'Heat intolerance and exercise intolerance',
      'Atopic dermatitis and skin-fold dermatitis',
      'Hemivertebrae and spinal malformations',
    ],
    commonHealthCrossLinks: [
      '/health/french-bulldog-health',
      '/health/intervertebral-disc-disease',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'France',
    originPurpose:
      'Developed in 1800s Paris from English toy bulldogs brought by Nottingham lace workers; bred as a companion dog.',
    temperamentTraits: ['Adaptable', 'Playful', 'Affectionate', 'Alert', 'Sociable'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'CARDIAC', 'BOAS-grading', 'JHC', 'HUU'],
  },
  {
    slug: 'german-shepherd',
    name: 'German Shepherd',
    group: 'Herding',
    sizeCategory: 'Large',
    weightRangeLb: [50, 90],
    heightRangeIn: [22, 26],
    lifespanYears: [9, 13],
    energyLevel: 'Very High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Highly trainable — military, police, and service dog standard. Requires structured training from puppyhood.',
    healthConcerns: [
      'Hip and elbow dysplasia (OFA — high prevalence for breed)',
      'Degenerative myelopathy (SOD1 mutation)',
      'Exocrine pancreatic insufficiency (EPI)',
      'Bloat / GDV',
      'Hemangiosarcoma',
    ],
    commonHealthCrossLinks: [
      '/health/german-shepherd-health',
      '/health/dog-bloat-gvd',
      '/health/dog-arthritis',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Developed in late-1800s Germany by Max von Stephanitz as a standardized herding and working dog.',
    temperamentTraits: ['Confident', 'Courageous', 'Smart', 'Loyal', 'Watchful'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'DM-SOD1', 'MDR1'],
  },

  // ─────────────────────────────────────────────────────────────────
  // Existing brief hand-written pages (kept in data — template skips).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'akita',
    name: 'Akita',
    group: 'Working',
    sizeCategory: 'Large',
    weightRangeLb: [70, 130],
    heightRangeIn: [24, 28],
    lifespanYears: [10, 13],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Intelligent but willful and independent; requires experienced owner with consistent boundaries.',
    healthConcerns: [
      'Hip dysplasia',
      'Hypothyroidism',
      'Sebaceous adenitis',
      'Progressive retinal atrophy',
      'Uveodermatologic (VKH-like) syndrome',
      'Gastric dilatation-volvulus (bloat)',
    ],
    commonHealthCrossLinks: [
      '/health/hypothyroidism',
      '/health/dog-bloat-gvd',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'Japan',
    originPurpose:
      'Originated in the mountainous Akita region of Japan; used historically for hunting boar, bear, and elk.',
    temperamentTraits: ['Loyal', 'Dignified', 'Courageous', 'Reserved', 'Alert'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID', 'prcd-PRA'],
  },
  {
    slug: 'australian-shepherd',
    name: 'Australian Shepherd',
    group: 'Herding',
    sizeCategory: 'Medium',
    weightRangeLb: [40, 65],
    heightRangeIn: [18, 23],
    lifespanYears: [12, 15],
    energyLevel: 'Very High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Highly trainable, eager to work — requires a job; thrives on agility, herding, and obedience sports.',
    healthConcerns: [
      'Hip dysplasia',
      'Multidrug sensitivity (MDR1 mutation)',
      'Collie eye anomaly',
      'Progressive retinal atrophy',
      'Epilepsy',
    ],
    commonHealthCrossLinks: ['/health/dog-arthritis', '/health/dog-seizures'],
    originCountry: 'United States',
    originPurpose:
      'Developed in the western U.S. in the 1800s to herd livestock on ranches; not actually from Australia.',
    temperamentTraits: ['Smart', 'Work-oriented', 'Exuberant', 'Devoted', 'Reserved with strangers'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'MDR1', 'CEA', 'prcd-PRA', 'HSF4 (cataracts)'],
  },
  {
    slug: 'beagle',
    name: 'Beagle',
    group: 'Hound',
    sizeCategory: 'Small',
    weightRangeLb: [20, 30],
    heightRangeIn: [13, 15],
    lifespanYears: [10, 15],
    energyLevel: 'High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Scent-driven and easily distracted; food-motivated training works but recall is famously unreliable off-leash.',
    healthConcerns: [
      'Obesity',
      'Ear infections',
      'Intervertebral disc disease',
      'Hypothyroidism',
      'Cherry eye',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-obesity',
      '/health/dog-ear-infections',
      '/health/cherry-eye',
      '/health/intervertebral-disc-disease',
    ],
    originCountry: 'England',
    originPurpose:
      'Bred in England by the 1500s for hunting rabbit and hare in packs; small enough to follow on foot.',
    temperamentTraits: ['Merry', 'Friendly', 'Curious', 'Vocal', 'Determined'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'EYES', 'MLS (Musladin-Lueke)', 'NCCD'],
  },
  {
    slug: 'bernese-mountain-dog',
    name: 'Bernese Mountain Dog',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [70, 115],
    heightRangeIn: [23, 28],
    lifespanYears: [7, 10],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Gentle and willing — responds well to positive reinforcement; slow to mature mentally until age 2-3.',
    healthConcerns: [
      'Histiocytic sarcoma (extraordinarily high breed prevalence)',
      'Hip and elbow dysplasia',
      'Bloat / GDV',
      'Degenerative myelopathy',
      'Von Willebrand disease type I',
    ],
    commonHealthCrossLinks: [
      '/health/dog-cancer-signs',
      '/health/dog-cancer-treatment',
      '/health/dog-bloat-gvd',
      '/health/dog-arthritis',
    ],
    originCountry: 'Switzerland',
    originPurpose:
      'Originated in the Swiss canton of Bern as a farm dog — pulling carts, droving cattle, and guarding.',
    temperamentTraits: ['Good-natured', 'Calm', 'Affectionate', 'Strong', 'Patient'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'DM-SOD1', 'vWD I'],
  },
  {
    slug: 'border-collie',
    name: 'Border Collie',
    group: 'Herding',
    sizeCategory: 'Medium',
    weightRangeLb: [30, 55],
    heightRangeIn: [18, 22],
    lifespanYears: [12, 15],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Widely regarded as the most intelligent dog breed; demands daily mental work or develops obsessive behaviors.',
    healthConcerns: [
      'Hip dysplasia',
      'Collie eye anomaly',
      'Progressive retinal atrophy',
      'Epilepsy',
      'Multidrug sensitivity (MDR1)',
      'Trapped neutrophil syndrome',
    ],
    commonHealthCrossLinks: ['/health/dog-seizures', '/health/dog-arthritis'],
    originCountry: 'United Kingdom (Anglo-Scottish border)',
    originPurpose:
      'Developed on the Anglo-Scottish border to silently gather and move flocks of sheep across difficult terrain.',
    temperamentTraits: ['Intense', 'Energetic', 'Alert', 'Smart', 'Sensitive'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'EYES', 'CEA', 'MDR1', 'TNS', 'NCL', 'IGS'],
  },
  {
    slug: 'boxer',
    name: 'Boxer',
    group: 'Working',
    sizeCategory: 'Large',
    weightRangeLb: [50, 80],
    heightRangeIn: [21, 25],
    lifespanYears: [10, 12],
    energyLevel: 'High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Playful and intelligent but easily bored — short, varied training sessions work best.',
    healthConcerns: [
      'Boxer cardiomyopathy (ARVC)',
      'Aortic stenosis',
      'Mast cell tumors and lymphoma',
      'Hip dysplasia',
      'Degenerative myelopathy',
      'Hypothyroidism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-cancer-signs',
      '/health/hypothyroidism',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Developed in late-1800s Germany from Bullenbeisser stock; used as a hunting catch dog and military messenger.',
    temperamentTraits: ['Bright', 'Fun-loving', 'Loyal', 'Patient with children', 'Spirited'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC (Holter)', 'ARVC', 'DM-SOD1', 'JKD'],
  },
  {
    slug: 'bulldog',
    name: 'Bulldog',
    group: 'Non-Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [40, 55],
    heightRangeIn: [14, 16],
    lifespanYears: [8, 10],
    energyLevel: 'Low',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Stubborn but eager to please their person; short sessions with high-value rewards.',
    healthConcerns: [
      'Brachycephalic obstructive airway syndrome (BOAS)',
      'Hip dysplasia',
      'Skin-fold dermatitis',
      'Cherry eye',
      'Heat stroke risk',
      'Dystocia (most litters delivered by C-section)',
    ],
    commonHealthCrossLinks: [
      '/health/cherry-eye',
      '/health/dog-skin-allergies',
      '/health/dog-arthritis',
    ],
    originCountry: 'England',
    originPurpose:
      'Bred in 1200s England for bull-baiting; reshaped into a companion breed after bull-baiting was outlawed in 1835.',
    temperamentTraits: ['Calm', 'Courageous', 'Friendly', 'Dignified', 'Stubborn'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'CARDIAC', 'HUU'],
  },
  {
    slug: 'bullmastiff',
    name: 'Bullmastiff',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [100, 130],
    heightRangeIn: [24, 27],
    lifespanYears: [7, 9],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Powerful and independent — requires firm, kind training and committed socialization from puppyhood.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Bloat / GDV',
      'Lymphoma and osteosarcoma',
      'Subaortic stenosis',
      'Hypothyroidism',
      'Entropion',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-cancer-signs',
      '/health/hypothyroidism',
    ],
    originCountry: 'England',
    originPurpose:
      'Created in 1800s England by crossing Mastiffs and Bulldogs to protect estates from poachers; the "gamekeeper\'s night dog."',
    temperamentTraits: ['Affectionate', 'Loyal', 'Brave', 'Docile with family', 'Reserved'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'THYROID'],
  },
  {
    slug: 'cavalier-king-charles',
    name: 'Cavalier King Charles Spaniel',
    group: 'Toy',
    sizeCategory: 'Small',
    weightRangeLb: [13, 18],
    heightRangeIn: [12, 13],
    lifespanYears: [9, 14],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Eager to please and people-focused; among the easier toy breeds to train, but can be sensitive to harsh correction.',
    healthConcerns: [
      'Mitral valve disease (very high breed prevalence)',
      'Syringomyelia / Chiari-like malformation',
      'Hip dysplasia',
      'Patellar luxation',
      'Episodic falling syndrome',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-luxating-patella',
      '/health/dog-arthritis',
    ],
    originCountry: 'United Kingdom',
    originPurpose:
      'Refined in 1920s England by Roswell Eldridge to recreate the longer-muzzled toy spaniels seen in 17th-century paintings.',
    temperamentTraits: ['Affectionate', 'Gentle', 'Graceful', 'Adaptable', 'Eager'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'EYES', 'CARDIAC (annual)', 'MRI for SM', 'EFS', 'DE/CC'],
  },
  {
    slug: 'cocker-spaniel',
    name: 'Cocker Spaniel',
    group: 'Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [20, 30],
    heightRangeIn: [13, 15],
    lifespanYears: [10, 14],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Sensitive and eager — best with positive reinforcement; field-bred lines are markedly higher energy than show lines.',
    healthConcerns: [
      'Ear infections (heavy ear leather, narrow canal)',
      'Cherry eye and ectropion',
      'Hip dysplasia',
      'Progressive retinal atrophy',
      'Autoimmune hemolytic anemia',
      'Adult-onset neuropathy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-ear-infections',
      '/health/cherry-eye',
      '/health/anemia-in-dogs',
    ],
    originCountry: 'United States (American Cocker); England (English Cocker)',
    originPurpose:
      'Bred to flush and retrieve woodcock; the American Cocker was bred down in size from the English Cocker in the late 1800s.',
    temperamentTraits: ['Gentle', 'Smart', 'Happy', 'Sensitive', 'Sociable'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES', 'prcd-PRA', 'AON', 'FNF'],
  },
  {
    slug: 'dachshund',
    name: 'Dachshund',
    group: 'Hound',
    sizeCategory: 'Small',
    weightRangeLb: [11, 32],
    heightRangeIn: [5, 9],
    lifespanYears: [12, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Independent and stubborn — bred to hunt alone; housetraining is famously slow. Reward-based training is essential.',
    healthConcerns: [
      'Intervertebral disc disease (most affected breed — CDDY/CDPA genetic basis)',
      'Patellar luxation',
      'Obesity',
      'Progressive retinal atrophy',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/intervertebral-disc-disease',
      '/health/dog-luxating-patella',
      '/health/dog-obesity',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Developed in 1600s Germany — "badger dog" — to follow badgers into their setts and fight them underground.',
    temperamentTraits: ['Spunky', 'Curious', 'Brave', 'Devoted', 'Stubborn'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'EYES', 'CARDIAC', 'PRA-cord1', 'IVDD (CDDY/CDPA)', 'Lafora'],
  },
  {
    slug: 'doberman-pinscher',
    name: 'Doberman Pinscher',
    group: 'Working',
    sizeCategory: 'Large',
    weightRangeLb: [60, 100],
    heightRangeIn: [24, 28],
    lifespanYears: [10, 12],
    energyLevel: 'High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Highly intelligent and responsive — requires confident, consistent training and committed socialization.',
    healthConcerns: [
      'Dilated cardiomyopathy (very high breed prevalence)',
      'Von Willebrand disease type I',
      'Hypothyroidism',
      'Wobbler syndrome (cervical vertebral instability)',
      'Hip dysplasia',
      'Bloat / GDV',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Created in 1890s Germany by tax collector Karl Friedrich Louis Dobermann as a personal protection dog.',
    temperamentTraits: ['Loyal', 'Fearless', 'Alert', 'Intelligent', 'Energetic'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'EYES', 'CARDIAC (Holter + echo)', 'DCM1', 'DCM2', 'vWD I', 'THYROID'],
  },
  {
    slug: 'golden-doodle',
    name: 'Goldendoodle',
    group: 'Crossbreed',
    sizeCategory: 'Large',
    weightRangeLb: [30, 90],
    heightRangeIn: [17, 24],
    lifespanYears: [10, 15],
    energyLevel: 'High',
    sheddingLevel: 'Hypoallergenic claim — not validated',
    trainabilityNotes:
      'Generally trainable — inherits intelligence from both parent breeds; individual temperament varies more than purebreds.',
    healthConcerns: [
      'Hip and elbow dysplasia (from both parent breeds)',
      'Progressive retinal atrophy',
      'Atopic dermatitis',
      'Cancer (inherited risk from Golden Retriever lineage)',
      'Subvalvular aortic stenosis',
    ],
    commonHealthCrossLinks: [
      '/health/dog-arthritis',
      '/health/dog-skin-allergies',
      '/health/dog-cancer-signs',
    ],
    originCountry: 'United States / Australia',
    originPurpose:
      'Developed in the 1990s as a low-shedding companion dog by crossing Golden Retrievers with Standard or Miniature Poodles.',
    temperamentTraits: ['Friendly', 'Affectionate', 'Playful', 'Smart', 'Sociable'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'prcd-PRA', 'GR-PRA1', 'GR-PRA2', 'ICT-A'],
  },
  {
    slug: 'great-dane',
    name: 'Great Dane',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [110, 175],
    heightRangeIn: [28, 32],
    lifespanYears: [7, 10],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Gentle and willing — early training is essential before they reach adult size; never use harsh methods.',
    healthConcerns: [
      'Dilated cardiomyopathy',
      'Bloat / GDV (highest-risk breed — prophylactic gastropexy commonly recommended)',
      'Osteosarcoma',
      'Hip dysplasia',
      'Wobbler syndrome',
      'Hypothyroidism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-heart-disease',
      '/health/dog-cancer-signs',
      '/health/hypothyroidism',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Refined in Germany in the 1800s from older mastiff-greyhound types to hunt wild boar and guard estates.',
    temperamentTraits: ['Friendly', 'Patient', 'Dependable', 'Elegant', 'Sweet'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'THYROID'],
  },
  {
    slug: 'great-pyrenees',
    name: 'Great Pyrenees',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [85, 120],
    heightRangeIn: [25, 32],
    lifespanYears: [10, 12],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Independent livestock guardian — bred to make decisions alone; obedience training requires patience and respect for the breed\'s autonomy.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Patellar luxation',
      'Osteosarcoma',
      'Bloat / GDV',
      'Addison\'s disease',
      'Neuronal degeneration',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-arthritis',
      '/health/addisons-disease',
      '/health/dog-luxating-patella',
    ],
    originCountry: 'France/Spain (Pyrenees Mountains)',
    originPurpose:
      'Used for millennia as a livestock guardian dog in the Pyrenees Mountains, protecting flocks from wolves and bears.',
    temperamentTraits: ['Smart', 'Patient', 'Calm', 'Strong-willed', 'Protective'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'PATELLAS', 'ND-PYR'],
  },
  {
    slug: 'irish-setter',
    name: 'Irish Setter',
    group: 'Sporting',
    sizeCategory: 'Large',
    weightRangeLb: [60, 70],
    heightRangeIn: [25, 27],
    lifespanYears: [12, 15],
    energyLevel: 'High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Intelligent but slow to mature — Setter "clown" personality persists for 3+ years; needs patient, consistent training.',
    healthConcerns: [
      'Hip dysplasia',
      'Progressive retinal atrophy (rcd-1 mutation)',
      'Bloat / GDV',
      'Hypothyroidism',
      'Canine leukocyte adhesion deficiency (CLAD)',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
      '/health/dog-seizures',
    ],
    originCountry: 'Ireland',
    originPurpose:
      'Refined in 1700s Ireland from English Setter, Spaniel, and Pointer stock to locate game birds for net-trappers and hunters.',
    temperamentTraits: ['Outgoing', 'Sweet-natured', 'Active', 'Playful', 'Affectionate'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES', 'CARDIAC', 'THYROID', 'rcd-1', 'CLAD'],
  },
  {
    slug: 'irish-wolfhound',
    name: 'Irish Wolfhound',
    group: 'Hound',
    sizeCategory: 'Giant',
    weightRangeLb: [105, 180],
    heightRangeIn: [30, 35],
    lifespanYears: [6, 8],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Gentle giants — eager to please but slow to mature; do not respond well to harsh methods.',
    healthConcerns: [
      'Dilated cardiomyopathy',
      'Bone cancer (osteosarcoma) — extremely high breed prevalence',
      'Bloat / GDV',
      'Hip dysplasia',
      'Liver shunt',
      'Pneumonia',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-bloat-gvd',
      '/health/dog-liver-disease',
    ],
    originCountry: 'Ireland',
    originPurpose:
      'Ancient Irish coursing hound used to hunt wolves and Irish elk; nearly extinct by 1800s, revived by Captain George Augustus Graham.',
    temperamentTraits: ['Courageous', 'Dignified', 'Calm', 'Patient', 'Generous'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'vWD'],
  },
  {
    slug: 'poodle',
    name: 'Poodle',
    group: 'Non-Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [4, 70],
    heightRangeIn: [10, 22],
    lifespanYears: [10, 18],
    energyLevel: 'High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Among the most trainable and intelligent breeds; standard, miniature, and toy varieties all excel at obedience and agility.',
    healthConcerns: [
      'Hip dysplasia (Standard)',
      'Progressive retinal atrophy (prcd-PRA)',
      'Addison\'s disease',
      'Sebaceous adenitis',
      'Bloat / GDV (Standard)',
      'Epilepsy',
      'Patellar luxation (Toy and Miniature)',
    ],
    commonHealthCrossLinks: [
      '/health/dog-arthritis',
      '/health/addisons-disease',
      '/health/dog-bloat-gvd',
      '/health/dog-skin-allergies',
      '/health/dog-luxating-patella',
    ],
    originCountry: 'Germany (refined in France)',
    originPurpose:
      'Originally a German water retriever ("Pudel" — to splash); the iconic Poodle clip is functional — protecting joints in cold water.',
    temperamentTraits: ['Active', 'Proud', 'Smart', 'Trainable', 'Elegant'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'prcd-PRA', 'NEwS', 'vWD I', 'DM'],
  },
  {
    slug: 'rottweiler',
    name: 'Rottweiler',
    group: 'Working',
    sizeCategory: 'Large',
    weightRangeLb: [80, 135],
    heightRangeIn: [22, 27],
    lifespanYears: [9, 10],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Confident and powerful — requires committed obedience training and socialization from puppyhood by an experienced owner.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma (very high breed prevalence)',
      'Subaortic stenosis',
      'Hypothyroidism',
      'Bloat / GDV',
      'Juvenile-onset renal disease',
    ],
    commonHealthCrossLinks: [
      '/health/dog-cancer-signs',
      '/health/dog-bloat-gvd',
      '/health/dog-heart-disease',
      '/health/hypothyroidism',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Descended from Roman drover dogs in Rottweil, Germany; used to drive cattle and pull butcher\'s carts.',
    temperamentTraits: ['Loyal', 'Loving', 'Confident', 'Watchful', 'Calm'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'JLPP', 'THYROID'],
  },
  {
    slug: 'saint-bernard',
    name: 'Saint Bernard',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [120, 180],
    heightRangeIn: [26, 30],
    lifespanYears: [8, 10],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Gentle and willing — must be trained before reaching full size; never harsh-handle a giant breed.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma',
      'Dilated cardiomyopathy',
      'Bloat / GDV',
      'Entropion / ectropion',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-heart-disease',
      '/health/dog-cancer-signs',
      '/health/dog-seizures',
    ],
    originCountry: 'Switzerland',
    originPurpose:
      'Bred from the 1600s at the Great St. Bernard Hospice in the Swiss Alps; used for Alpine rescue of travelers caught in storms.',
    temperamentTraits: ['Playful', 'Charming', 'Inquisitive', 'Friendly', 'Patient'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'DM-SOD1'],
  },
  {
    slug: 'shiba-inu',
    name: 'Shiba Inu',
    group: 'Non-Sporting',
    sizeCategory: 'Small',
    weightRangeLb: [17, 23],
    heightRangeIn: [13, 17],
    lifespanYears: [13, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Independent, cat-like, and stubborn — recall is unreliable; harness training over collar; thrives with respectful, consistent handling.',
    healthConcerns: [
      'Patellar luxation',
      'Hip dysplasia',
      'Progressive retinal atrophy',
      'Glaucoma',
      'Allergies / atopic dermatitis',
      'Hypothyroidism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-skin-allergies',
      '/health/hypothyroidism',
    ],
    originCountry: 'Japan',
    originPurpose:
      'One of Japan\'s six native breeds; bred for hunting small game in dense mountain underbrush.',
    temperamentTraits: ['Alert', 'Bold', 'Confident', 'Independent', 'Reserved'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'GM1 gangliosidosis'],
  },
  {
    slug: 'shih-tzu',
    name: 'Shih Tzu',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [9, 16],
    heightRangeIn: [8, 11],
    lifespanYears: [10, 18],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Affectionate and people-oriented; can be stubborn about housetraining. Short, fun sessions work best.',
    healthConcerns: [
      'Brachycephalic obstructive airway syndrome (mild)',
      'Hip dysplasia',
      'Patellar luxation',
      'Renal dysplasia',
      'Progressive retinal atrophy',
      'Dry eye (KCS)',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-kidney-disease',
    ],
    originCountry: 'Tibet / China',
    originPurpose:
      'Tibetan temple dog refined in the Chinese imperial court; a companion to royalty, never a working breed.',
    temperamentTraits: ['Affectionate', 'Playful', 'Outgoing', 'Lively', 'Loyal'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'RD/OSD'],
  },
  {
    slug: 'siberian-husky',
    name: 'Siberian Husky',
    group: 'Working',
    sizeCategory: 'Medium',
    weightRangeLb: [35, 60],
    heightRangeIn: [20, 24],
    lifespanYears: [12, 15],
    energyLevel: 'Very High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Independent and notoriously escape-artistic; recall is unreliable; never let off-leash in unfenced areas. Requires positive training and stamina-matching exercise.',
    healthConcerns: [
      'Hip dysplasia',
      'Hereditary cataracts',
      'Progressive retinal atrophy',
      'Corneal dystrophy',
      'Hypothyroidism',
      'Uveodermatologic syndrome',
    ],
    commonHealthCrossLinks: [
      '/health/hypothyroidism',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'Russia (Siberia)',
    originPurpose:
      'Bred by the Chukchi people of northeast Asia as a sled dog for endurance travel and hauling light loads over long distances.',
    temperamentTraits: ['Loyal', 'Outgoing', 'Mischievous', 'Athletic', 'Independent'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES (annual)', 'THYROID', 'HUU'],
  },
  {
    slug: 'vizsla',
    name: 'Vizsla',
    group: 'Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [44, 60],
    heightRangeIn: [21, 24],
    lifespanYears: [12, 14],
    energyLevel: 'Very High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Sensitive, eager, and intelligent — soft-tempered, never harsh-handle; prone to separation anxiety without sufficient companionship.',
    healthConcerns: [
      'Hip dysplasia',
      'Epilepsy',
      'Hypothyroidism',
      'Sebaceous adenitis',
      'Progressive retinal atrophy',
      'Vizsla inflammatory polymyopathy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-seizures',
      '/health/hypothyroidism',
      '/health/dog-anxiety',
    ],
    originCountry: 'Hungary',
    originPurpose:
      'Hungarian pointing breed dating to at least the 10th century; used by the Magyar nobility to point and retrieve upland game and waterfowl.',
    temperamentTraits: ['Affectionate', 'Energetic', 'Gentle', 'Loyal', 'Quiet'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID', 'prcd-PRA'],
  },
  {
    slug: 'weimaraner',
    name: 'Weimaraner',
    group: 'Sporting',
    sizeCategory: 'Large',
    weightRangeLb: [55, 90],
    heightRangeIn: [23, 27],
    lifespanYears: [10, 13],
    energyLevel: 'Very High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Strong-willed and high-drive — needs daily heavy exercise and structured training. Severe separation anxiety is common.',
    healthConcerns: [
      'Hip dysplasia',
      'Bloat / GDV',
      'Hypertrophic osteodystrophy',
      'Hypothyroidism',
      'Vaccine-related immune issues (post-vaccination juvenile cellulitis)',
      'Spinal dysraphism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
      '/health/dog-anxiety',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Bred in 19th-century Weimar, Germany as a noble\'s hunting dog — pointing and retrieving large game, then later upland birds.',
    temperamentTraits: ['Friendly', 'Fearless', 'Alert', 'Obedient', 'Stubborn'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID', 'HUU'],
  },
  {
    slug: 'yorkshire-terrier',
    name: 'Yorkshire Terrier',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [4, 7],
    heightRangeIn: [7, 8],
    lifespanYears: [11, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Intelligent but stubborn; housetraining is the most common challenge — small bladder, cold-weather avoidance.',
    healthConcerns: [
      'Patellar luxation',
      'Tracheal collapse',
      'Portosystemic liver shunt',
      'Dental disease',
      'Legg-Calvé-Perthes',
      'Hypoglycemia (puppies)',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-liver-disease',
      '/health/dog-dental-care',
    ],
    originCountry: 'England (Yorkshire)',
    originPurpose:
      'Developed in 19th-century Yorkshire by mill and mine workers to hunt rats in textile mills.',
    temperamentTraits: ['Affectionate', 'Sprightly', 'Tomboyish', 'Brave', 'Bossy'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'PRA', 'Bile acids (liver shunt)'],
  },

  // ─────────────────────────────────────────────────────────────────
  // NEW programmatic breed pages — rendered by [slug]/page.tsx.
  // AKC top-50 additions and the 5 most popular doodle crossbreeds.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'german-shorthaired-pointer',
    name: 'German Shorthaired Pointer',
    group: 'Sporting',
    sizeCategory: 'Large',
    weightRangeLb: [45, 70],
    heightRangeIn: [21, 25],
    lifespanYears: [10, 12],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Highly trainable and eager to please — needs a job and daily vigorous exercise; bored GSPs become destructive.',
    healthConcerns: [
      'Hip dysplasia',
      'Bloat / GDV',
      'Hypothyroidism',
      'Progressive retinal atrophy',
      'Subaortic stenosis',
      'Cone degeneration',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
      '/health/dog-heart-disease',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Developed in 19th-century Germany as a versatile all-purpose gun dog — pointing, retrieving on land and water, and tracking wounded game.',
    temperamentTraits: ['Friendly', 'Smart', 'Willing to please', 'Active', 'Athletic'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'CD (cone degeneration)'],
  },
  {
    slug: 'pembroke-welsh-corgi',
    name: 'Pembroke Welsh Corgi',
    group: 'Herding',
    sizeCategory: 'Small',
    weightRangeLb: [24, 30],
    heightRangeIn: [10, 12],
    lifespanYears: [12, 13],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Bright and willing; herding instincts mean they may nip heels — train an alternative behavior early.',
    healthConcerns: [
      'Intervertebral disc disease (long-back, short-leg conformation)',
      'Hip dysplasia',
      'Degenerative myelopathy (SOD1 — high breed prevalence)',
      'Progressive retinal atrophy',
      'Von Willebrand disease type I',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/intervertebral-disc-disease',
      '/health/dog-arthritis',
      '/health/dog-seizures',
    ],
    originCountry: 'Wales',
    originPurpose:
      'Cattle-herding dog of Pembrokeshire, Wales — small enough to nip heels and duck under kicks; one of the oldest herding breeds in the British Isles.',
    temperamentTraits: ['Affectionate', 'Smart', 'Alert', 'Bold', 'Cheerful'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'DM-SOD1', 'vWD I', 'prcd-PRA'],
  },
  {
    slug: 'miniature-schnauzer',
    name: 'Miniature Schnauzer',
    group: 'Terrier',
    sizeCategory: 'Small',
    weightRangeLb: [11, 20],
    heightRangeIn: [12, 14],
    lifespanYears: [12, 15],
    energyLevel: 'High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Smart and eager; vocal — barking is the most common behavioral complaint and needs early management.',
    healthConcerns: [
      'Hyperlipidemia and pancreatitis',
      'Urolithiasis (calcium oxalate stones)',
      'Progressive retinal atrophy (type B)',
      'Myotonia congenita',
      'Congenital megaesophagus',
      'Cushing\'s disease',
    ],
    commonHealthCrossLinks: [
      '/health/pancreatitis',
      '/health/megaesophagus',
      '/health/cushing-disease',
    ],
    originCountry: 'Germany',
    originPurpose:
      'Bred down from the Standard Schnauzer in late-1800s Germany using Affenpinscher and Poodle crosses; a vermin-hunting farm dog.',
    temperamentTraits: ['Friendly', 'Smart', 'Obedient', 'Spirited', 'Alert'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES', 'CARDIAC', 'PRA type B', 'MAC (myotonia)'],
  },
  {
    slug: 'cane-corso',
    name: 'Cane Corso',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [88, 110],
    heightRangeIn: [23, 28],
    lifespanYears: [9, 12],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Powerful guardian breed — requires extensive socialization and committed obedience training by an experienced owner.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Bloat / GDV',
      'Idiopathic epilepsy',
      'Demodectic mange',
      'Cherry eye',
      'Mitral valve disease',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-seizures',
      '/health/cherry-eye',
      '/health/dog-mange',
    ],
    originCountry: 'Italy',
    originPurpose:
      'Italian mastiff descended from Roman war and farm dogs; used for hunting boar, guarding property, and droving cattle.',
    temperamentTraits: ['Affectionate to family', 'Intelligent', 'Majestic', 'Trainable', 'Watchful'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'IDIOPATHIC EPILEPSY'],
  },
  {
    slug: 'boston-terrier',
    name: 'Boston Terrier',
    group: 'Non-Sporting',
    sizeCategory: 'Small',
    weightRangeLb: [12, 25],
    heightRangeIn: [15, 17],
    lifespanYears: [11, 13],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Intelligent, friendly, and biddable — easier-trained than most brachycephalic breeds.',
    healthConcerns: [
      'Brachycephalic obstructive airway syndrome (mild)',
      'Patellar luxation',
      'Hereditary cataracts (juvenile)',
      'Cherry eye',
      'Hemivertebrae',
      'Deafness',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/cherry-eye',
    ],
    originCountry: 'United States',
    originPurpose:
      'Developed in 1870s Boston from English Bulldog and white English Terrier crosses; America\'s first non-sporting breed.',
    temperamentTraits: ['Friendly', 'Bright', 'Amusing', 'Lively', 'Gentle'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['PATELLAS', 'EYES (annual)', 'CARDIAC', 'BAER (deafness)', 'JHC'],
  },
  {
    slug: 'pomeranian',
    name: 'Pomeranian',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [3, 7],
    heightRangeIn: [6, 7],
    lifespanYears: [12, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Bright and trainable but tends to be vocal and overconfident with much larger dogs.',
    healthConcerns: [
      'Patellar luxation',
      'Tracheal collapse',
      'Dental disease',
      'Alopecia X (black skin disease)',
      'Hypoglycemia in puppies',
      'Hypothyroidism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-dental-care',
      '/health/hypothyroidism',
    ],
    originCountry: 'Germany / Poland (Pomerania region)',
    originPurpose:
      'Bred down from larger spitz-type sled dogs of Pomerania; reduced in size in 1800s England under Queen Victoria\'s patronage.',
    temperamentTraits: ['Inquisitive', 'Bold', 'Lively', 'Active', 'Vocal'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'THYROID'],
  },
  {
    slug: 'havanese',
    name: 'Havanese',
    group: 'Toy',
    sizeCategory: 'Small',
    weightRangeLb: [7, 13],
    heightRangeIn: [8, 12],
    lifespanYears: [14, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Smart and people-focused; bred to be a velcro companion — does not tolerate long absences.',
    healthConcerns: [
      'Patellar luxation',
      'Hip dysplasia',
      'Chondrodysplasia',
      'Cataracts and progressive retinal atrophy',
      'Legg-Calvé-Perthes',
      'Deafness',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-arthritis',
    ],
    originCountry: 'Cuba',
    originPurpose:
      'National dog of Cuba — descended from the bichon-type dogs brought by Spanish settlers; bred as a companion to Cuban aristocracy.',
    temperamentTraits: ['Affectionate', 'Outgoing', 'Funny', 'Gentle', 'Sociable'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'CARDIAC', 'BAER', 'CSNB (night blindness)'],
  },
  {
    slug: 'shetland-sheepdog',
    name: 'Shetland Sheepdog',
    group: 'Herding',
    sizeCategory: 'Small',
    weightRangeLb: [15, 25],
    heightRangeIn: [13, 16],
    lifespanYears: [12, 14],
    energyLevel: 'High',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Top-tier trainability and biddability — among the top obedience and agility breeds. Sensitive to harsh correction.',
    healthConcerns: [
      'Collie eye anomaly',
      'Multidrug sensitivity (MDR1)',
      'Hip dysplasia',
      'Hypothyroidism',
      'Von Willebrand disease type III',
      'Dermatomyositis',
    ],
    commonHealthCrossLinks: [
      '/health/hypothyroidism',
      '/health/dog-arthritis',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'Scotland (Shetland Islands)',
    originPurpose:
      'Sheltering and herding dog of the Shetland Islands; small enough to thrive on the sparse forage of the islands.',
    temperamentTraits: ['Playful', 'Energetic', 'Bright', 'Sensitive', 'Reserved with strangers'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES', 'CEA', 'MDR1', 'vWD III', 'THYROID'],
  },
  {
    slug: 'english-springer-spaniel',
    name: 'English Springer Spaniel',
    group: 'Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [40, 50],
    heightRangeIn: [19, 20],
    lifespanYears: [12, 14],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Eager, smart, and biddable — field-bred lines are markedly more active than show lines. Springer rage syndrome is rare but documented.',
    healthConcerns: [
      'Hip dysplasia',
      'Progressive retinal atrophy (prcd)',
      'Ear infections',
      'Phosphofructokinase deficiency (PFK)',
      'Fucosidosis',
      'Retinal dysplasia',
    ],
    commonHealthCrossLinks: [
      '/health/dog-ear-infections',
      '/health/dog-arthritis',
    ],
    originCountry: 'England',
    originPurpose:
      'Bred in England to "spring" game birds into the air for falconers and net-trappers; one of the oldest spaniel types.',
    temperamentTraits: ['Friendly', 'Playful', 'Obedient', 'Energetic', 'Affectionate'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'prcd-PRA', 'PFK', 'Fucosidosis'],
  },
  {
    slug: 'brittany',
    name: 'Brittany',
    group: 'Sporting',
    sizeCategory: 'Medium',
    weightRangeLb: [30, 40],
    heightRangeIn: [17, 21],
    lifespanYears: [12, 14],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Smart, eager to please, and sensitive — easily over-corrected. Tons of energy and prefers to work or hunt.',
    healthConcerns: [
      'Hip dysplasia',
      'Epilepsy',
      'Hypothyroidism',
      'Glaucoma',
      'Complement-3 deficiency',
    ],
    commonHealthCrossLinks: [
      '/health/dog-seizures',
      '/health/hypothyroidism',
      '/health/dog-arthritis',
    ],
    originCountry: 'France',
    originPurpose:
      'French pointing-retrieving breed from the Brittany region, developed in the 1800s for upland bird hunting.',
    temperamentTraits: ['Bright', 'Fun-loving', 'Upbeat', 'Friendly', 'Sensitive'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID'],
  },
  {
    slug: 'mastiff',
    name: 'Mastiff',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [120, 230],
    heightRangeIn: [27, 32],
    lifespanYears: [6, 10],
    energyLevel: 'Low',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Calm and dignified; train before they outweigh you. Massive size means harsh handling is never appropriate.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Bloat / GDV',
      'Cardiomyopathy',
      'Cystinuria',
      'Progressive retinal atrophy',
      'Cancer (osteosarcoma, lymphoma)',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-heart-disease',
      '/health/dog-cancer-signs',
    ],
    originCountry: 'England',
    originPurpose:
      'Ancient English mastiff — used in war, baiting, and as estate guardians for over 2000 years.',
    temperamentTraits: ['Courageous', 'Dignified', 'Good-natured', 'Loyal', 'Calm'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'PRA', 'Cystinuria', 'DM'],
  },
  {
    slug: 'chihuahua',
    name: 'Chihuahua',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [2, 6],
    heightRangeIn: [5, 8],
    lifespanYears: [14, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Intelligent but stubborn; small size invites under-training. Treat them like a real dog — same rules, gentle methods.',
    healthConcerns: [
      'Patellar luxation',
      'Heart disease (mitral valve disease, patent ductus arteriosus)',
      'Tracheal collapse',
      'Hydrocephalus',
      'Dental disease',
      'Hypoglycemia',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-heart-disease',
      '/health/dog-dental-care',
    ],
    originCountry: 'Mexico',
    originPurpose:
      'Descended from the Techichi, the companion dog of the Toltec civilization in central Mexico over 1000 years ago.',
    temperamentTraits: ['Charming', 'Graceful', 'Sassy', 'Devoted', 'Bold'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Low',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'NCL (ceroid lipofuscinosis)'],
  },
  {
    slug: 'maltese',
    name: 'Maltese',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [4, 7],
    heightRangeIn: [7, 9],
    lifespanYears: [12, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Smart and eager; the most common training challenge is housetraining due to their small bladder.',
    healthConcerns: [
      'Patellar luxation',
      'Portosystemic liver shunt',
      'White shaker syndrome',
      'Heart disease (mitral valve disease)',
      'Dental disease',
      'Hypoglycemia in puppies',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-liver-disease',
      '/health/dog-heart-disease',
      '/health/dog-dental-care',
    ],
    originCountry: 'Malta',
    originPurpose:
      'Among the oldest companion breeds in the Mediterranean; recorded since the time of the Greek and Roman empires.',
    temperamentTraits: ['Gentle', 'Playful', 'Charming', 'Bold', 'Affectionate'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'Bile acids (liver shunt)'],
  },
  {
    slug: 'belgian-malinois',
    name: 'Belgian Malinois',
    group: 'Herding',
    sizeCategory: 'Large',
    weightRangeLb: [40, 80],
    heightRangeIn: [22, 26],
    lifespanYears: [14, 16],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Among the most trainable working breeds — the standard for modern military, police, and protection sport. Not a pet for casual ownership.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Progressive retinal atrophy',
      'Pannus (chronic superficial keratitis)',
      'Anesthesia sensitivity',
      'Epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-arthritis',
      '/health/dog-seizures',
    ],
    originCountry: 'Belgium',
    originPurpose:
      'Belgian herding dog from the Malines region; standardized in the late 1800s and selected heavily for working ability rather than appearance.',
    temperamentTraits: ['Confident', 'Smart', 'Hard-working', 'Driven', 'Watchful'],
    goodWithKids: false,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'DM-SOD1'],
  },
  {
    slug: 'collie',
    name: 'Collie',
    group: 'Herding',
    sizeCategory: 'Large',
    weightRangeLb: [50, 75],
    heightRangeIn: [22, 26],
    lifespanYears: [12, 14],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Sensitive, intelligent, and biddable — responds best to gentle positive reinforcement. Lassie was not fiction — the breed truly is that responsive.',
    healthConcerns: [
      'Collie eye anomaly',
      'Multidrug sensitivity (MDR1) — extremely high breed prevalence',
      'Progressive retinal atrophy',
      'Hip dysplasia',
      'Dermatomyositis',
      'Bloat / GDV',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/dog-arthritis',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'Scotland',
    originPurpose:
      'Scottish Highland herding dog (both rough and smooth varieties); refined into a show breed in 1800s England.',
    temperamentTraits: ['Devoted', 'Graceful', 'Proud', 'Sensitive', 'Friendly'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'EYES', 'CEA', 'MDR1', 'DM-SOD1'],
  },
  {
    slug: 'newfoundland',
    name: 'Newfoundland',
    group: 'Working',
    sizeCategory: 'Giant',
    weightRangeLb: [100, 150],
    heightRangeIn: [26, 28],
    lifespanYears: [9, 10],
    energyLevel: 'Moderate',
    sheddingLevel: 'Heavy',
    trainabilityNotes:
      'Gentle, eager to please, and slow to mature — never harsh-handle. Water rescue and draft work are natural fits.',
    healthConcerns: [
      'Subaortic stenosis',
      'Dilated cardiomyopathy',
      'Hip and elbow dysplasia',
      'Cystinuria',
      'Bloat / GDV',
      'Hypothyroidism',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
    ],
    originCountry: 'Canada (Newfoundland)',
    originPurpose:
      'Water rescue and working dog of Newfoundland fisherman; webbed feet, double coat, and instinctive swimming ability.',
    temperamentTraits: ['Sweet', 'Patient', 'Devoted', 'Trusting', 'Gentle'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'Cystinuria'],
  },
  {
    slug: 'rhodesian-ridgeback',
    name: 'Rhodesian Ridgeback',
    group: 'Hound',
    sizeCategory: 'Large',
    weightRangeLb: [70, 85],
    heightRangeIn: [24, 27],
    lifespanYears: [10, 12],
    energyLevel: 'High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Independent and strong-willed — train with respect, never harsh correction. Sighthound instincts mean unreliable off-leash recall.',
    healthConcerns: [
      'Hip and elbow dysplasia',
      'Dermoid sinus (breed-specific congenital condition)',
      'Hypothyroidism',
      'Bloat / GDV',
      'Degenerative myelopathy',
      'Juvenile myoclonic epilepsy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-bloat-gvd',
      '/health/hypothyroidism',
      '/health/dog-seizures',
    ],
    originCountry: 'Southern Africa (Zimbabwe / South Africa)',
    originPurpose:
      'Bred by Boer settlers in southern Africa from native ridged dogs and European hunting breeds; used to hold lions at bay during hunts.',
    temperamentTraits: ['Affectionate', 'Dignified', 'Even-tempered', 'Independent', 'Athletic'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID', 'JME', 'DM-SOD1'],
  },
  {
    slug: 'west-highland-white-terrier',
    name: 'West Highland White Terrier',
    group: 'Terrier',
    sizeCategory: 'Small',
    weightRangeLb: [15, 22],
    heightRangeIn: [10, 12],
    lifespanYears: [13, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Bright and confident with classic terrier independence; reward-based training is essential.',
    healthConcerns: [
      'Atopic dermatitis (very common in breed)',
      'Westie lung disease (pulmonary fibrosis)',
      'Craniomandibular osteopathy',
      'Patellar luxation',
      'Hereditary cataracts',
      'Globoid cell leukodystrophy',
    ],
    commonHealthCrossLinks: [
      '/health/dog-skin-allergies',
      '/health/dog-luxating-patella',
    ],
    originCountry: 'Scotland',
    originPurpose:
      'Scottish working terrier from Argyllshire — bred specifically white to be distinguishable from fox while hunting.',
    temperamentTraits: ['Loyal', 'Happy', 'Entertaining', 'Confident', 'Independent'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CMO', 'GCL'],
  },
  {
    slug: 'bichon-frise',
    name: 'Bichon Frise',
    group: 'Non-Sporting',
    sizeCategory: 'Small',
    weightRangeLb: [12, 18],
    heightRangeIn: [9, 12],
    lifespanYears: [14, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Cheerful, intelligent, and quick to learn; can be challenging to housetrain (small bladder typical of toy-size breeds).',
    healthConcerns: [
      'Atopic dermatitis (very common)',
      'Patellar luxation',
      'Allergies (food and environmental)',
      'Bladder stones',
      'Hip dysplasia',
      'Dental disease',
    ],
    commonHealthCrossLinks: [
      '/health/dog-skin-allergies',
      '/health/dog-allergies',
      '/health/dog-luxating-patella',
      '/health/dog-dental-care',
    ],
    originCountry: 'Mediterranean (Spain / Canary Islands)',
    originPurpose:
      'Descended from the Barbet and the Bichon-type dogs of the Mediterranean; favored by French and Spanish nobility from the 1300s onward.',
    temperamentTraits: ['Playful', 'Curious', 'Peppy', 'Affectionate', 'Gentle'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'CARDIAC'],
  },
  {
    slug: 'portuguese-water-dog',
    name: 'Portuguese Water Dog',
    group: 'Working',
    sizeCategory: 'Medium',
    weightRangeLb: [35, 60],
    heightRangeIn: [17, 23],
    lifespanYears: [11, 13],
    energyLevel: 'High',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Highly intelligent and biddable — was the breed chosen by President Obama partly for its low-shedding coat and trainability.',
    healthConcerns: [
      'Hip dysplasia',
      'Progressive retinal atrophy (prcd)',
      'Storage disease (GM1)',
      'Juvenile dilated cardiomyopathy',
      'Addison\'s disease',
      'Microphthalmia',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/addisons-disease',
      '/health/dog-arthritis',
    ],
    originCountry: 'Portugal',
    originPurpose:
      'Portuguese fisherman\'s dog from the Algarve coast — herded fish into nets, retrieved lost gear, and carried messages between boats.',
    temperamentTraits: ['Affectionate', 'Adventurous', 'Athletic', 'Smart', 'Hardworking'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'prcd-PRA', 'GM1', 'JDCM'],
  },
  {
    slug: 'australian-cattle-dog',
    name: 'Australian Cattle Dog',
    group: 'Herding',
    sizeCategory: 'Medium',
    weightRangeLb: [35, 50],
    heightRangeIn: [17, 20],
    lifespanYears: [12, 16],
    energyLevel: 'Very High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Tireless and intelligent — needs structured work and an outlet for biting/heeling instincts.',
    healthConcerns: [
      'Hip dysplasia',
      'Progressive retinal atrophy (prcd)',
      'Deafness (high prevalence — color-linked)',
      'Primary lens luxation',
      'Multidrug sensitivity (MDR1)',
    ],
    commonHealthCrossLinks: [
      '/health/dog-arthritis',
    ],
    originCountry: 'Australia',
    originPurpose:
      'Bred in 1800s Australia from blue merle Collies, Dingoes, and Dalmatians to drive cattle across vast outback distances.',
    temperamentTraits: ['Alert', 'Curious', 'Pleasant', 'Loyal', 'Protective'],
    goodWithKids: true,
    goodWithOtherDogs: false,
    firstTimeOwnerFriendly: false,
    groomingLevel: 'Low',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'BAER', 'prcd-PRA', 'PLL'],
  },
  {
    slug: 'basset-hound',
    name: 'Basset Hound',
    group: 'Hound',
    sizeCategory: 'Medium',
    weightRangeLb: [40, 65],
    heightRangeIn: [13, 15],
    lifespanYears: [12, 13],
    energyLevel: 'Low',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'Stubborn and scent-driven — recall is unreliable; high food motivation aids training but predisposes to obesity.',
    healthConcerns: [
      'Intervertebral disc disease',
      'Ear infections (heavy, low-set ears)',
      'Obesity',
      'Bloat / GDV',
      'Glaucoma',
      'Elbow dysplasia',
    ],
    commonHealthCrossLinks: [
      '/health/intervertebral-disc-disease',
      '/health/dog-ear-infections',
      '/health/dog-obesity',
      '/health/dog-bloat-gvd',
    ],
    originCountry: 'France',
    originPurpose:
      'French scenthound — "basset" means low-slung; bred for hunters who followed on foot rather than horseback.',
    temperamentTraits: ['Patient', 'Low-key', 'Charming', 'Devoted', 'Stubborn'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'THYROID'],
  },
  {
    slug: 'papillon',
    name: 'Papillon',
    group: 'Toy',
    sizeCategory: 'Toy',
    weightRangeLb: [4, 9],
    heightRangeIn: [8, 11],
    lifespanYears: [14, 16],
    energyLevel: 'High',
    sheddingLevel: 'Moderate',
    trainabilityNotes:
      'One of the most trainable toy breeds — frequent agility and obedience competitor; needs mental stimulation.',
    healthConcerns: [
      'Patellar luxation',
      'Progressive retinal atrophy',
      'Dental disease',
      'Hypoglycemia in puppies',
      'Open fontanel',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-dental-care',
    ],
    originCountry: 'France / Belgium',
    originPurpose:
      'European court dog ("Papillon" — butterfly — for the ear shape); painted in noble portraits since the 1500s.',
    temperamentTraits: ['Friendly', 'Alert', 'Happy', 'Lively', 'Affectionate'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'PRA1'],
  },

  // ─── Doodle / crossbreed extensions ─────────────────────────────
  {
    slug: 'labradoodle',
    name: 'Labradoodle',
    group: 'Crossbreed',
    sizeCategory: 'Large',
    weightRangeLb: [30, 80],
    heightRangeIn: [17, 24],
    lifespanYears: [12, 14],
    energyLevel: 'High',
    sheddingLevel: 'Hypoallergenic claim — not validated',
    trainabilityNotes:
      'Generally biddable — inherits trainability from both parents; coat type (wool/fleece/hair) varies by generation.',
    healthConcerns: [
      'Hip and elbow dysplasia (from both parent breeds)',
      'Progressive retinal atrophy',
      'Exercise-induced collapse (Lab-side)',
      'Addison\'s disease (Poodle-side)',
      'Allergies / atopic dermatitis',
    ],
    commonHealthCrossLinks: [
      '/health/dog-arthritis',
      '/health/addisons-disease',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'Australia',
    originPurpose:
      'Developed in 1989 by Wally Conron at the Royal Guide Dogs Association of Australia to produce a guide dog suitable for an allergic handler.',
    temperamentTraits: ['Friendly', 'Energetic', 'Sociable', 'Smart', 'Playful'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'ELBOWS', 'EYES', 'CARDIAC', 'prcd-PRA', 'EIC', 'CNM'],
  },
  {
    slug: 'cockapoo',
    name: 'Cockapoo',
    group: 'Crossbreed',
    sizeCategory: 'Small',
    weightRangeLb: [12, 25],
    heightRangeIn: [10, 15],
    lifespanYears: [12, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Hypoallergenic claim — not validated',
    trainabilityNotes:
      'Eager, smart, and people-oriented — usually easy to train; coat ranges from wavy to curly depending on generation.',
    healthConcerns: [
      'Patellar luxation',
      'Progressive retinal atrophy',
      'Ear infections (long pendant ears)',
      'Allergies / atopic dermatitis',
      'Hip dysplasia',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-ear-infections',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'United States',
    originPurpose:
      'One of the earliest deliberate Poodle hybrids — bred in the U.S. since the 1960s to combine the Cocker\'s temperament with the Poodle\'s lower-shedding coat.',
    temperamentTraits: ['Friendly', 'Affectionate', 'Playful', 'Smart', 'Sociable'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'prcd-PRA'],
  },
  {
    slug: 'maltipoo',
    name: 'Maltipoo',
    group: 'Crossbreed',
    sizeCategory: 'Small',
    weightRangeLb: [5, 20],
    heightRangeIn: [8, 14],
    lifespanYears: [12, 16],
    energyLevel: 'Moderate',
    sheddingLevel: 'Hypoallergenic claim — not validated',
    trainabilityNotes:
      'Quick learners with the right motivation; housetraining is the most common challenge — small bladder typical of toy breeds.',
    healthConcerns: [
      'Patellar luxation',
      'Progressive retinal atrophy',
      'Portosystemic liver shunt (Maltese-side)',
      'White shaker syndrome',
      'Dental disease',
    ],
    commonHealthCrossLinks: [
      '/health/dog-luxating-patella',
      '/health/dog-liver-disease',
      '/health/dog-dental-care',
    ],
    originCountry: 'United States',
    originPurpose:
      'Modern designer cross developed in the U.S. in the 1990s by crossing Maltese with Toy or Miniature Poodles for a small, low-shedding companion.',
    temperamentTraits: ['Affectionate', 'Lively', 'Sociable', 'Gentle', 'Playful'],
    goodWithKids: false,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'High',
    knownGeneticTests: ['PATELLAS', 'EYES', 'CARDIAC', 'Bile acids (liver shunt)'],
  },
  {
    slug: 'cavachon',
    name: 'Cavachon',
    group: 'Crossbreed',
    sizeCategory: 'Small',
    weightRangeLb: [15, 25],
    heightRangeIn: [12, 13],
    lifespanYears: [10, 15],
    energyLevel: 'Moderate',
    sheddingLevel: 'Low',
    trainabilityNotes:
      'Eager and people-oriented; gentle positive training works well — sensitive to harsh correction.',
    healthConcerns: [
      'Mitral valve disease (Cavalier-side — high prevalence concern)',
      'Patellar luxation',
      'Atopic dermatitis',
      'Hip dysplasia',
      'Cataracts',
    ],
    commonHealthCrossLinks: [
      '/health/dog-heart-disease',
      '/health/dog-luxating-patella',
      '/health/dog-skin-allergies',
    ],
    originCountry: 'United States',
    originPurpose:
      'Designer cross developed in the late 1990s by crossing Cavalier King Charles Spaniels with Bichon Frises for a low-shedding, child-friendly companion.',
    temperamentTraits: ['Affectionate', 'Gentle', 'Playful', 'Adaptable', 'Friendly'],
    goodWithKids: true,
    goodWithOtherDogs: true,
    firstTimeOwnerFriendly: true,
    groomingLevel: 'Moderate',
    knownGeneticTests: ['HIPS', 'PATELLAS', 'EYES', 'CARDIAC (annual)'],
  },
]

/**
 * Look up a breed by slug. Returns undefined if no match.
 */
export function getBreedBySlug(slug: string): Breed | undefined {
  return Breeds.find((b) => b.slug === slug)
}

/**
 * Slugs that should be rendered by the [slug] template — i.e. NOT already
 * present as a static folder under /app/breeds/.
 */
export function getTemplateRenderedSlugs(): string[] {
  return Breeds.filter((b) => !EXISTING_STATIC_BREED_SLUGS.has(b.slug)).map((b) => b.slug)
}

/**
 * Group breeds by AKC group for the index page.
 */
export function groupBreedsByAKCGroup(): Record<BreedGroup, Breed[]> {
  const out = {
    Sporting: [],
    Working: [],
    Toy: [],
    Hound: [],
    Herding: [],
    Terrier: [],
    'Non-Sporting': [],
    Crossbreed: [],
  } as Record<BreedGroup, Breed[]>
  for (const breed of Breeds) {
    out[breed.group].push(breed)
  }
  return out
}

/**
 * Group breeds by size category for an alternative browse view.
 */
export function groupBreedsBySize(): Record<SizeCategory, Breed[]> {
  const out = {
    Toy: [],
    Small: [],
    Medium: [],
    Large: [],
    Giant: [],
  } as Record<SizeCategory, Breed[]>
  for (const breed of Breeds) {
    out[breed.sizeCategory].push(breed)
  }
  return out
}

// ─────────────────────────────────────────────────────────────────────────
// Breed × pet-insurance profiles (editorial spoke: /breeds/<slug>/insurance)
//
// Keyed by the breeds.ts slug. Present ONLY for breeds with clear,
// well-documented hereditary cost drivers. Sources: OFA/CHIC prevalence data,
// AKC parent-club priority panels, VCA/Merck veterinary references, and the
// published veterinary literature (e.g. Cavalier MVD breed-club cardiology
// guidance; brachycephalic BOAS literature; chondrodystrophic IVDD studies).
//
// Trust rules (QC §1):
//   - Conditions are PREDISPOSITIONS, not certainties.
//   - Cost ranges are realistic US GP/specialty bands — not invented, and
//     deliberately given as ranges, not point figures.
//   - No scaremongering, no "guaranteed", no superlatives.
//   - If a breed's data is not defensible, it is NOT listed here.
// ─────────────────────────────────────────────────────────────────────────
const BREED_INSURANCE_PROFILES: Record<string, BreedInsuranceProfile> = {
  'french-bulldog': {
    riskTier: 'higher',
    enrollmentNote:
      'BOAS, skin, and eye signs frequently appear young. A single vet note about noisy breathing or a scratched cornea before coverage starts can make that whole category a permanent exclusion — so enrolling before the first breathing complaint is the biggest factor in whether coverage actually helps.',
    topConditions: [
      {
        name: 'BOAS (airway surgery — nares & soft palate)',
        typicalCostRange: '$2,000–$6,000+',
        note: 'Often needed young; counts as pre-existing if breathing signs predate coverage.',
      },
      {
        name: 'IVDD (intervertebral disc disease)',
        typicalCostRange: '$3,000–$8,000+ (surgery)',
        note: 'Chondrodystrophic-breed risk; recurrence and related-site exclusions are common.',
      },
      {
        name: 'Skin-fold & recurrent ear infections',
        typicalCostRange: '$200–$600 per episode',
        note: 'Chronic and recurring — the wellness-vs-illness coverage line matters here.',
      },
      {
        name: 'Corneal ulcers / eye conditions',
        typicalCostRange: '$300–$2,500',
        note: 'Brachycephalic eye shape predisposes; some cases need surgery.',
      },
    ],
  },
  'cavalier-king-charles': {
    riskTier: 'higher',
    enrollmentNote:
      'This is the breed where "insure as a puppy" matters most. Mitral valve murmurs can appear relatively early, and once a murmur is on the record the lifelong cardiac costs are typically treated as pre-existing. The window to insure before a murmur is documented is narrow.',
    topConditions: [
      {
        name: 'Myxomatous mitral valve disease (MVD)',
        typicalCostRange: '$300–$1,500/yr ongoing + episodes',
        note: 'Breed is reported far more likely than average; a murmur noted before coverage = exclusion.',
      },
      {
        name: 'Syringomyelia / Chiari-like malformation',
        typicalCostRange: '$2,000–$8,000+ (MRI + management)',
        note: 'Neurological; diagnostics alone (MRI) are expensive.',
      },
      {
        name: 'Hip dysplasia',
        typicalCostRange: '$1,500–$6,000',
        note: 'Orthopedic; watch for bilateral / related-site exclusion language.',
      },
      {
        name: 'Hereditary eye conditions (retinal, cataract)',
        typicalCostRange: '$300–$3,000',
        note: 'Parent-club screening is relevant; some cases progress to surgery.',
      },
    ],
  },
  'golden-retriever': {
    riskTier: 'higher',
    enrollmentNote:
      'Goldens carry one of the best-documented lifetime cancer burdens of any breed (the Morris Animal Foundation Golden Retriever Lifetime Study tracks this). Because cancer treatment can run into five figures, an annual-limit policy can be exhausted quickly — many Golden owners weigh an unlimited-annual-limit plan and enroll before any mass or lameness is recorded.',
    topConditions: [
      {
        name: 'Cancer (hemangiosarcoma, lymphoma, mast cell)',
        typicalCostRange: '$5,000–$20,000+ (work-up + treatment)',
        note: 'High lifetime incidence in the breed; annual limits can be exhausted fast.',
      },
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Orthopedic; bilateral surgeries possible — check related-site exclusions.',
      },
      {
        name: 'Atopic dermatitis / chronic skin & ear disease',
        typicalCostRange: '$200–$2,000/yr',
        note: 'Lifelong management; allergy work-ups and medicated care add up.',
      },
      {
        name: 'Hypothyroidism',
        typicalCostRange: '$300–$800/yr',
        note: 'Manageable but lifelong medication and monitoring once diagnosed.',
      },
    ],
  },
  'labrador-retriever': {
    riskTier: 'higher',
    enrollmentNote:
      'Labs are large, active, and orthopedically busy — hip and elbow dysplasia and cranial cruciate ligament (CCL) tears are common. Because a CCL tear in one knee raises the odds of the other knee following, the way a policy handles bilateral/related conditions matters a lot for this breed. Enroll before any limp is in the record.',
    topConditions: [
      {
        name: 'Cranial cruciate ligament (CCL) rupture',
        typicalCostRange: '$3,500–$6,000 per knee (TPLO)',
        note: 'Frequently bilateral over time — confirm the second knee is not excluded.',
      },
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Orthopedic; OFA-tested parents lower but do not eliminate risk.',
      },
      {
        name: 'Obesity-linked osteoarthritis',
        typicalCostRange: '$200–$1,500/yr',
        note: 'Lifelong management; weight control is the single biggest modifier.',
      },
      {
        name: 'Exercise-induced collapse / laryngeal paralysis (older Labs)',
        typicalCostRange: '$500–$5,000',
        note: 'Diagnostics plus, in some cases, surgery for laryngeal paralysis.',
      },
    ],
  },
  'german-shepherd': {
    riskTier: 'higher',
    enrollmentNote:
      'Two breed-defining risks shape coverage for a German Shepherd: hip/elbow dysplasia and degenerative myelopathy (DM), a progressive spinal-cord disease. DM care is supportive and long-running, so a policy without a per-condition or annual cap that gets exhausted matters. Enrolling before any gait change is noted is the key.',
    topConditions: [
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Orthopedic; one of the most documented dysplasia breeds.',
      },
      {
        name: 'Degenerative myelopathy (DM)',
        typicalCostRange: '$1,000–$4,000+ over time (supportive)',
        note: 'Progressive; care is long-running rather than a single procedure.',
      },
      {
        name: 'Gastric dilatation-volvulus (bloat / GDV)',
        typicalCostRange: '$2,000–$7,500 (emergency surgery)',
        note: 'Deep-chested-breed emergency; minutes matter and costs are sudden.',
      },
      {
        name: 'Exocrine pancreatic insufficiency (EPI)',
        typicalCostRange: '$1,000–$3,000/yr (lifelong enzymes)',
        note: 'Breed-associated; manageable but a permanent recurring cost.',
      },
    ],
  },
  bulldog: {
    riskTier: 'higher',
    enrollmentNote:
      'The English Bulldog shares the brachycephalic airway, skin-fold, and eye risks of the French Bulldog, plus heavy orthopedic loading. Many of these signs are visible young, so the pre-existing line is unforgiving — enroll before the first breathing, skin, or joint note appears.',
    topConditions: [
      {
        name: 'BOAS (brachycephalic airway syndrome)',
        typicalCostRange: '$2,000–$6,000+ (surgery)',
        note: 'Often needed young; pre-existing if signs predate coverage.',
      },
      {
        name: 'Hip dysplasia & cruciate disease',
        typicalCostRange: '$1,500–$6,000',
        note: 'Heavy, low-slung build loads the joints; bilateral risk applies.',
      },
      {
        name: 'Skin-fold dermatitis (face, tail pocket)',
        typicalCostRange: '$200–$700 per episode',
        note: 'Chronic and recurring; the illness-vs-wellness line matters.',
      },
      {
        name: 'Cherry eye / entropion',
        typicalCostRange: '$300–$1,500 per eye',
        note: 'Often surgical; commonly seen young.',
      },
    ],
  },
  boxer: {
    riskTier: 'higher',
    enrollmentNote:
      'Boxers carry a notably high cancer burden plus a breed-specific heart condition, arrhythmogenic right ventricular cardiomyopathy (Boxer cardiomyopathy / ARVC). Both are expensive and can appear in mid-life, so enrolling before any mass, fainting episode, or arrhythmia is documented protects the most.',
    topConditions: [
      {
        name: 'Cancer (mast cell tumors, lymphoma, brain)',
        typicalCostRange: '$3,000–$15,000+',
        note: 'High breed incidence; treatment can exhaust annual limits.',
      },
      {
        name: 'Boxer cardiomyopathy (ARVC)',
        typicalCostRange: '$1,000–$3,000/yr (monitoring + meds)',
        note: 'Lifelong cardiology; a recorded arrhythmia before coverage is excluded.',
      },
      {
        name: 'Hip dysplasia & cruciate disease',
        typicalCostRange: '$1,500–$6,000',
        note: 'Orthopedic; bilateral risk over time.',
      },
      {
        name: 'Brachycephalic airway / heat intolerance',
        typicalCostRange: '$1,500–$5,000 (if surgical)',
        note: 'Moderately brachycephalic; airway grading is worth discussing.',
      },
    ],
  },
  dachshund: {
    riskTier: 'higher',
    enrollmentNote:
      'The Dachshund is the textbook IVDD breed — its long-backed, chondrodystrophic build means intervertebral disc disease is the dominant cost driver, and episodes can recur at different spinal sites. Enroll before any back, neck, or hind-limb sign is recorded, and read the related-site exclusion language carefully.',
    topConditions: [
      {
        name: 'IVDD (intervertebral disc disease)',
        typicalCostRange: '$3,000–$8,000+ (surgery)',
        note: 'The breed-defining risk; recurrence and related-site exclusions common.',
      },
      {
        name: 'Patellar luxation',
        typicalCostRange: '$1,500–$4,000 (surgical)',
        note: 'Orthopedic; can be bilateral.',
      },
      {
        name: 'Dental disease (small-breed crowding)',
        typicalCostRange: '$400–$1,500 per cleaning/extractions',
        note: 'Recurring; often a wellness-vs-illness coverage nuance.',
      },
      {
        name: 'Progressive retinal atrophy / eye conditions',
        typicalCostRange: '$300–$2,000',
        note: 'Hereditary screening relevant in some lines.',
      },
    ],
  },
  rottweiler: {
    riskTier: 'higher',
    enrollmentNote:
      'Rottweilers combine a high cancer burden — including osteosarcoma, an aggressive bone cancer — with significant orthopedic risk. Osteosarcoma in particular is expensive and time-sensitive, so enrolling before any lameness or mass appears, ideally with a higher annual limit, is the prudent path.',
    topConditions: [
      {
        name: 'Osteosarcoma & other cancers',
        typicalCostRange: '$5,000–$15,000+',
        note: 'Aggressive bone cancer over-represented in the breed; costs escalate fast.',
      },
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Orthopedic; large frame loads the joints.',
      },
      {
        name: 'Cranial cruciate ligament rupture',
        typicalCostRange: '$3,500–$6,000 per knee',
        note: 'Frequently bilateral — check related-site exclusions.',
      },
      {
        name: 'Subaortic stenosis (heart)',
        typicalCostRange: '$500–$3,000 (work-up + monitoring)',
        note: 'Congenital cardiac risk; a recorded murmur before coverage is excluded.',
      },
    ],
  },
  'great-dane': {
    riskTier: 'higher',
    enrollmentNote:
      'For a giant breed like the Great Dane, gastric dilatation-volvulus (bloat) and dilated cardiomyopathy are the defining risks — both sudden, both expensive. Bloat is a true emergency where costs land all at once, so coverage in place before any episode, and before a heart murmur is noted, is what counts.',
    topConditions: [
      {
        name: 'Gastric dilatation-volvulus (bloat / GDV)',
        typicalCostRange: '$2,000–$7,500 (emergency surgery)',
        note: 'Classic giant-breed emergency; costs are sudden and large.',
      },
      {
        name: 'Dilated cardiomyopathy (DCM)',
        typicalCostRange: '$1,000–$3,000/yr (cardiology + meds)',
        note: 'Lifelong; a recorded murmur/arrhythmia before coverage is excluded.',
      },
      {
        name: 'Hip dysplasia & developmental orthopedic disease',
        typicalCostRange: '$1,500–$7,000',
        note: 'Giant-frame growth issues; bilateral risk.',
      },
      {
        name: 'Wobbler syndrome (cervical spondylomyelopathy)',
        typicalCostRange: '$3,000–$8,000+ (if surgical)',
        note: 'Neurological; diagnostics (MRI) alone are costly.',
      },
    ],
  },
  'bernese-mountain-dog': {
    riskTier: 'higher',
    enrollmentNote:
      'The Bernese Mountain Dog carries one of the highest cancer burdens of any breed, with histiocytic sarcoma notably over-represented, alongside giant-breed orthopedic risk. Because cancer treatment can run high and start in mid-life, enrolling early with a generous annual limit is the common-sense approach.',
    topConditions: [
      {
        name: 'Cancer (histiocytic sarcoma, lymphoma, mast cell)',
        typicalCostRange: '$5,000–$20,000+',
        note: 'Very high breed incidence; treatment can exhaust annual limits.',
      },
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Orthopedic; large frame and rapid growth contribute.',
      },
      {
        name: 'Cruciate ligament disease',
        typicalCostRange: '$3,500–$6,000 per knee',
        note: 'Can be bilateral; check related-site exclusions.',
      },
      {
        name: 'Degenerative / inflammatory joint disease',
        typicalCostRange: '$200–$1,500/yr',
        note: 'Lifelong management as the dog ages.',
      },
    ],
  },
  'doberman-pinscher': {
    riskTier: 'higher',
    enrollmentNote:
      'Dilated cardiomyopathy (DCM) is the defining Doberman risk — the breed is strongly over-represented, and the disease can be silent until a sudden event. A von Willebrand bleeding-disorder predisposition compounds surgical risk. Coverage in place before any murmur, arrhythmia, or bleeding episode is recorded is the priority.',
    topConditions: [
      {
        name: 'Dilated cardiomyopathy (DCM)',
        typicalCostRange: '$1,000–$3,000/yr (cardiology, Holter, meds)',
        note: 'Strongly breed-associated; a recorded abnormality before coverage is excluded.',
      },
      {
        name: 'Von Willebrand disease (bleeding disorder)',
        typicalCostRange: '$500–$3,000 (work-up + surgical management)',
        note: 'Hereditary; raises the cost and risk of any surgery.',
      },
      {
        name: 'Cervical spondylomyelopathy (Wobbler)',
        typicalCostRange: '$3,000–$8,000+ (if surgical)',
        note: 'Neurological; MRI diagnostics are expensive.',
      },
      {
        name: 'Hip dysplasia',
        typicalCostRange: '$1,500–$6,000',
        note: 'Orthopedic; OFA-tested parents lower but do not eliminate risk.',
      },
    ],
  },
  'cocker-spaniel': {
    riskTier: 'average',
    enrollmentNote:
      'The Cocker Spaniel\'s costs tend to be chronic rather than catastrophic — recurring ear infections and a range of hereditary eye conditions dominate. Because these often start young and recur, enrolling before the first ear or eye note keeps those categories from becoming pre-existing exclusions.',
    topConditions: [
      {
        name: 'Chronic / recurrent otitis (ear infections)',
        typicalCostRange: '$200–$800 per episode',
        note: 'Heavy ears predispose; recurring care adds up and may be excluded if pre-existing.',
      },
      {
        name: 'Hereditary eye disease (glaucoma, cataract, PRA, cherry eye)',
        typicalCostRange: '$300–$3,000+',
        note: 'Several breed-screened conditions; some need surgery.',
      },
      {
        name: 'Autoimmune conditions (e.g. AIHA)',
        typicalCostRange: '$2,000–$6,000 (crisis + management)',
        note: 'Breed-associated; episodes are expensive and can recur.',
      },
      {
        name: 'Patellar luxation / hip dysplasia',
        typicalCostRange: '$1,500–$4,000',
        note: 'Orthopedic; bilateral risk in some lines.',
      },
    ],
  },
  newfoundland: {
    riskTier: 'higher',
    enrollmentNote:
      'A giant working breed, the Newfoundland faces subaortic stenosis (a congenital heart condition), giant-breed orthopedics, and bloat. The cardiac risk is congenital, so a murmur found at an early exam can become a permanent exclusion — enrolling as a puppy, before that first cardiac note, matters here.',
    topConditions: [
      {
        name: 'Subaortic stenosis (SAS)',
        typicalCostRange: '$500–$3,000+ (work-up, monitoring)',
        note: 'Congenital cardiac risk; a murmur noted before coverage is excluded.',
      },
      {
        name: 'Hip & elbow dysplasia',
        typicalCostRange: '$1,500–$7,000 (surgical)',
        note: 'Giant-frame orthopedic load; bilateral risk.',
      },
      {
        name: 'Gastric dilatation-volvulus (bloat / GDV)',
        typicalCostRange: '$2,000–$7,500 (emergency surgery)',
        note: 'Deep-chested-breed emergency; sudden, large cost.',
      },
      {
        name: 'Cystinuria (bladder stones)',
        typicalCostRange: '$800–$3,000 (recurrent management)',
        note: 'Breed-associated; can recur and need repeat treatment.',
      },
    ],
  },
  'boston-terrier': {
    riskTier: 'average',
    enrollmentNote:
      'The Boston Terrier is a smaller brachycephalic breed: airway and eye issues, plus patellar luxation, are the main drivers. Many show young, so enrolling before the first breathing or eye note keeps the brachycephalic category from being excluded as pre-existing.',
    topConditions: [
      {
        name: 'Brachycephalic airway syndrome (BOAS)',
        typicalCostRange: '$1,500–$5,000 (if surgical)',
        note: 'Milder than some flat-faced breeds but still a pre-existing-risk category.',
      },
      {
        name: 'Corneal ulcers / eye conditions',
        typicalCostRange: '$300–$2,500',
        note: 'Prominent eyes predispose; some cases are surgical.',
      },
      {
        name: 'Patellar luxation',
        typicalCostRange: '$1,500–$4,000 (surgical)',
        note: 'Orthopedic; can be bilateral.',
      },
      {
        name: 'Hemivertebrae / spinal issues',
        typicalCostRange: '$1,000–$6,000 (if symptomatic)',
        note: 'Screw-tail-associated; most are incidental but some progress.',
      },
    ],
  },
}

/**
 * Slugs (in breeds.ts terms) that have an editorial breed × insurance spoke.
 * Source of truth for generateStaticParams, the hub, and the sitemap list.
 */
export const BREED_INSURANCE_SLUGS: readonly string[] =
  Object.keys(BREED_INSURANCE_PROFILES)

/** Look up a breed's insurance profile by its breeds.ts slug. */
export function getBreedInsuranceProfile(
  slug: string,
): BreedInsuranceProfile | undefined {
  return BREED_INSURANCE_PROFILES[slug]
}

/** Breeds (full objects) that have an insurance spoke, in display order. */
export function getBreedsWithInsuranceProfile(): Breed[] {
  return BREED_INSURANCE_SLUGS.map((s) => getBreedBySlug(s)).filter(
    (b): b is Breed => b !== undefined,
  )
}
