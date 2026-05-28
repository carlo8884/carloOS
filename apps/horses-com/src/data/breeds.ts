/**
 * Horses.com — Breed data file.
 *
 * Programmatic SEO source-of-truth for /breeds/[slug] template.
 * Mirrors the dog-com breeds.ts pattern from PR #74.
 *
 * IMPORTANT — health prevalence rules:
 *   - Health concerns listed only when documented in AAEP, breed-club genetic
 *     panels, UC Davis VGL, AQHA / APHA / TWHBEA / AMHA guidance, or
 *     peer-reviewed equine literature.
 *   - Never fabricate genetic test prevalence numbers — cite real published
 *     studies in the rendered prose, or omit the number.
 *   - Unknown fields are left undefined; the template omits them.
 *
 * The canonical hand-written Quarter Horse page (/breeds/quarter-horse)
 * is present in this data for index + sitemap purposes but EXCLUDED from
 * generateStaticParams in [slug]/page.tsx — its deep, hand-written page
 * remains authoritative.
 */

export type Registry =
  | 'AQHA'
  | 'APHA'
  | 'JC'
  | 'USEF'
  | 'TWHBEA'
  | 'AMHA'
  | 'ApHC'
  | 'CMK'
  | 'WDAA'
  | 'crossbreed'
  | 'multi-registry'

export type BreedType =
  | 'Stock'
  | 'Sport'
  | 'Gaited'
  | 'Draft'
  | 'Pony'
  | 'Warmblood'
  | 'Wild/Feral'
  | 'Pleasure'

export type SizeCategory =
  | 'Pony (<14.2hh)'
  | 'Small Horse (14.2-15.2hh)'
  | 'Standard (15.2-16.2hh)'
  | 'Tall (16.2+hh)'
  | 'Draft (16.0+hh, heavy build)'

export type EnergyLevel = 'Low' | 'Moderate' | 'High' | 'Very High'

export interface Breed {
  slug: string
  name: string
  registry: Registry
  type: BreedType
  sizeCategory: SizeCategory
  /** Height in hands [min, max] */
  heightRangeHh: [number, number]
  weightRangeLb: [number, number]
  lifespanYears: [number, number]
  energyLevel: EnergyLevel
  disciplines: string[]
  /** 4-6 adjectives */
  temperamentTraits: string[]
  originCountry: string
  /** 1-sentence */
  originPurpose: string
  /** 3-6 breed-specific conditions */
  knownHealthConcerns: string[]
  /** URLs to /health/* and related pages on horses-com */
  knownHealthCrossLinks: string[]
  /** e.g. ['HYPP', 'GBED', 'HERDA', 'PSSM1', 'MH'] */
  knownGeneticTests?: string[]
  firstTimeOwnerFriendly: boolean
  /** Typical purchase price USD range when known */
  priceRangeUsd?: [number, number]
}

/**
 * Slugs of breeds with existing static folders under /app/breeds/.
 * The dynamic [slug] template excludes these from generateStaticParams.
 */
export const EXISTING_STATIC_BREED_SLUGS: ReadonlySet<string> = new Set([
  'quarter-horse',
])

/**
 * Subset of canonical hand-written deep guides — used for explicit reference
 * elsewhere.
 */
export const CANONICAL_HAND_WRITTEN_SLUGS: ReadonlySet<string> = new Set([
  'quarter-horse',
])

export const Breeds: Breed[] = [
  // ─────────────────────────────────────────────────────────────────
  // Canonical hand-written (kept in data for index + sitemap only).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'quarter-horse',
    name: 'Quarter Horse',
    registry: 'AQHA',
    type: 'Stock',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.0, 16.0],
    weightRangeLb: [950, 1300],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Western Pleasure', 'Reining', 'Ranch', 'Cutting', 'Racing', 'Trail'],
    temperamentTraits: ['Even-tempered', 'Biddable', 'Work-oriented', 'Calm', 'Versatile'],
    originCountry: 'United States',
    originPurpose:
      'Bred in 17th-century Virginia for quarter-mile match racing; refined for cattle work during westward expansion.',
    knownHealthConcerns: [
      'HYPP (Impressive line, SCN4A mutation)',
      'GBED (King P-234 line, glycogen branching enzyme deficiency)',
      'HERDA (Poco Bueno line, PPIB collagen disorder)',
      'PSSM1 (GYS1 mutation, halter and draft-influenced lines)',
      'Malignant hyperthermia (RYR1 mutation)',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['HYPP', 'GBED', 'HERDA', 'PSSM1', 'MH'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2500, 25000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Stock breeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'paint-horse',
    name: 'Paint Horse',
    registry: 'APHA',
    type: 'Stock',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.2, 16.0],
    weightRangeLb: [950, 1200],
    lifespanYears: [25, 31],
    energyLevel: 'Moderate',
    disciplines: ['Western Pleasure', 'Reining', 'Ranch', 'Trail', 'Halter'],
    temperamentTraits: ['Friendly', 'Calm', 'Willing', 'Athletic', 'People-oriented'],
    originCountry: 'United States',
    originPurpose:
      'Developed from spotted stock horses that fell outside Quarter Horse color rules; bears Quarter Horse and Thoroughbred foundation blood.',
    knownHealthConcerns: [
      'Lethal White Overo Syndrome (LWO, EDNRB frame-overo mutation — homozygous foals lethal)',
      'HYPP (when carrying Quarter Horse Impressive blood)',
      'HERDA (when carrying cutting-line Poco Bueno blood)',
      'PSSM1',
      'Sunburn and squamous-cell carcinoma in unpigmented skin',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['LWO', 'HYPP', 'HERDA', 'PSSM1', 'GBED'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2500, 20000],
  },
  {
    slug: 'appaloosa',
    name: 'Appaloosa',
    registry: 'ApHC',
    type: 'Stock',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.0, 16.0],
    weightRangeLb: [950, 1250],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Western Pleasure', 'Reining', 'Trail', 'Endurance', 'Ranch'],
    temperamentTraits: ['Independent', 'Hardy', 'Intelligent', 'Loyal', 'Versatile'],
    originCountry: 'United States',
    originPurpose:
      'Selectively bred by the Nez Perce people of the Palouse region as a spotted, sure-footed war and buffalo horse.',
    knownHealthConcerns: [
      'Equine recurrent uveitis (ERU, leading cause of blindness — strongly associated with leopard-complex spotting LP/LP)',
      'Congenital stationary night blindness (CSNB, homozygous LP/LP horses)',
      'PSSM1',
      'Sunburn and squamous-cell carcinoma on unpigmented skin',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers'],
    knownGeneticTests: ['LP (leopard complex)', 'PATN1', 'PSSM1', 'HYPP'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2000, 15000],
  },
  {
    slug: 'american-saddlebred',
    name: 'American Saddlebred',
    registry: 'USEF',
    type: 'Pleasure',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.0, 17.0],
    weightRangeLb: [1000, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Saddle Seat', 'Five-Gaited', 'Three-Gaited', 'Driving', 'Pleasure'],
    temperamentTraits: ['Animated', 'Spirited', 'Curious', 'Personable', 'Brave'],
    originCountry: 'United States',
    originPurpose:
      'Developed in Kentucky from Narragansett Pacer, Canadian Pacer, and Thoroughbred crosses as the riding horse of 19th-century plantation owners and Civil War officers.',
    knownHealthConcerns: [
      'Lordosis (swayback) — autosomal recessive (Cook 2010 Journal of Heredity)',
      'Equine polysaccharide storage myopathy type 2 (PSSM2)',
      'Anhidrosis in warm humid climates',
      'Stringhalt',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [5000, 30000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Sport / Thoroughbred / Warmbloods
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'thoroughbred',
    name: 'Thoroughbred',
    registry: 'JC',
    type: 'Sport',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.2, 17.0],
    weightRangeLb: [1000, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'Very High',
    disciplines: ['Flat Racing', 'Steeplechase', 'Eventing', 'Show Jumping', 'Foxhunting', 'Polo'],
    temperamentTraits: ['Hot-blooded', 'Sensitive', 'Athletic', 'Bold', 'Forward'],
    originCountry: 'England',
    originPurpose:
      'Founded in 17th-18th century England from three Arabian stallions (Byerley Turk, Darley Arabian, Godolphin Arabian) bred to native running mares for flat racing.',
    knownHealthConcerns: [
      'Cervical vertebral stenotic myelopathy (Wobbler syndrome)',
      'Exercise-induced pulmonary hemorrhage (EIPH)',
      'Gastric ulcers (EGUS, prevalence >90% in active racehorses — Hammond 2001)',
      'Osteochondritis dissecans (OCD)',
      'Bowed tendons and suspensory desmitis from track racing',
      'Hyperflexion / contracted heels post-racing',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [1000, 100000],
  },
  {
    slug: 'hanoverian',
    name: 'Hanoverian',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1450],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Eventing', 'Combined Driving'],
    temperamentTraits: ['Trainable', 'Bold', 'Athletic', 'Even-tempered', 'Brave'],
    originCountry: 'Germany',
    originPurpose:
      'Bred at the Celle State Stud in Lower Saxony from 1735 onward; refined post-WWII with Thoroughbred and Trakehner blood for modern sport disciplines.',
    knownHealthConcerns: [
      'Osteochondritis dissecans (OCD, prevalence ~10-25% in growing warmbloods — Stock 2005)',
      'Equine polysaccharide storage myopathy type 2 (PSSM2)',
      'Recurrent exertional rhabdomyolysis (RER)',
      'Warmblood fragile foal syndrome (WFFS, PLOD1 mutation)',
      'Suspensory ligament desmitis',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM1', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 200000],
  },
  {
    slug: 'holsteiner',
    name: 'Holsteiner',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [16.0, 17.2],
    weightRangeLb: [1200, 1500],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Show Jumping', 'Eventing', 'Dressage'],
    temperamentTraits: ['Brave', 'Powerful', 'Trainable', 'Quick-footed', 'Honest'],
    originCountry: 'Germany',
    originPurpose:
      'Oldest German warmblood breed, traced to 13th-century marsh horses of the Elbe River; refined post-WWII as a show-jumping specialist.',
    knownHealthConcerns: [
      'Osteochondritis dissecans (OCD)',
      'PSSM2',
      'Warmblood fragile foal syndrome (WFFS)',
      'Suspensory desmitis',
      'Kissing spine (overriding dorsal spinous processes)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [20000, 250000],
  },
  {
    slug: 'dutch-warmblood',
    name: 'Dutch Warmblood',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1450],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Driving', 'Eventing'],
    temperamentTraits: ['Intelligent', 'Willing', 'Athletic', 'Friendly', 'Sensitive'],
    originCountry: 'Netherlands',
    originPurpose:
      'Created post-WWII by KWPN from Gelderlander and Groningen base stock crossed with Thoroughbred, Hanoverian, and Holsteiner blood; strictly performance-tested.',
    knownHealthConcerns: [
      'Osteochondritis dissecans (OCD)',
      'PSSM2',
      'Warmblood fragile foal syndrome (WFFS)',
      'Lordosis in older horses',
      'Suspensory desmitis',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 200000],
  },
  {
    slug: 'oldenburg',
    name: 'Oldenburg',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [16.0, 17.2],
    weightRangeLb: [1300, 1500],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Eventing', 'Driving'],
    temperamentTraits: ['Bold', 'Trainable', 'Quiet', 'Forward', 'Honest'],
    originCountry: 'Germany',
    originPurpose:
      'Bred in 17th-century Oldenburg by Count Anton Günther from heavy carriage stock crossed with Iberian and Neapolitan blood; modernized to a sport-horse type.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS',
      'Lordosis',
      'Suspensory desmitis',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 200000],
  },
  {
    slug: 'trakehner',
    name: 'Trakehner',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.0],
    weightRangeLb: [1100, 1400],
    lifespanYears: [25, 32],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Eventing', 'Endurance'],
    temperamentTraits: ['Sensitive', 'Refined', 'Bold', 'Intelligent', 'Hot-blooded'],
    originCountry: 'East Prussia (Germany)',
    originPurpose:
      'Founded in 1732 at the Trakehnen Stud by King Frederick William I as a cavalry remount; the only major German warmblood that accepts only Trakehner, Thoroughbred, Arabian, and Anglo-Arab blood.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS',
      'Lordosis',
      'Cervical vertebral malformation',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 150000],
  },
  {
    slug: 'selle-francais',
    name: 'Selle Français',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1450],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Show Jumping', 'Eventing', 'Dressage'],
    temperamentTraits: ['Bold', 'Athletic', 'Willing', 'Honest', 'Energetic'],
    originCountry: 'France',
    originPurpose:
      'Created in 1958 by merging French regional half-bred studbooks (Anglo-Norman, Vendéen, Charolais); refined with Thoroughbred and Anglo-Arab blood for show jumping.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS',
      'Suspensory desmitis',
      'Recurrent exertional rhabdomyolysis (RER)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 250000],
  },
  {
    slug: 'westphalian',
    name: 'Westphalian',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1450],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Eventing'],
    temperamentTraits: ['Trainable', 'Bold', 'Friendly', 'Athletic', 'Honest'],
    originCountry: 'Germany',
    originPurpose:
      'Bred at the Warendorf State Stud in Westphalia from 1826; closely tied to the Hanoverian studbook and used heavily for dressage and jumping.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS',
      'Lordosis',
      'Suspensory desmitis',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 200000],
  },
  {
    slug: 'belgian-warmblood',
    name: 'Belgian Warmblood',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1450],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Show Jumping', 'Dressage', 'Eventing'],
    temperamentTraits: ['Bold', 'Quick-thinking', 'Athletic', 'Honest', 'Trainable'],
    originCountry: 'Belgium',
    originPurpose:
      'Founded in 1955 by the BWP as a sport-horse studbook independent from the Belgian Draft; refined with Holsteiner, Hanoverian, Selle Français, and Thoroughbred blood for show jumping.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS',
      'Suspensory desmitis',
      'Kissing spine',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 250000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Gaited breeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'tennessee-walking-horse',
    name: 'Tennessee Walking Horse',
    registry: 'TWHBEA',
    type: 'Gaited',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.3, 17.0],
    weightRangeLb: [900, 1200],
    lifespanYears: [28, 30],
    energyLevel: 'Moderate',
    disciplines: ['Trail', 'Show (flat-shod)', 'Pleasure', 'Endurance'],
    temperamentTraits: ['Calm', 'Smooth-gaited', 'Willing', 'People-oriented', 'Steady'],
    originCountry: 'United States',
    originPurpose:
      'Developed in the Tennessee Bluegrass region from Narragansett Pacer, Canadian Pacer, Standardbred, Thoroughbred, and Morgan crosses; bred for the inherited four-beat "running walk."',
    knownHealthConcerns: [
      'Soring damage in show-line horses (federal Horse Protection Act violations documented annually by USDA APHIS)',
      'Navicular syndrome',
      'PSSM1 and PSSM2',
      'Equine metabolic syndrome and laminitis',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1', 'DMRT3 (gait keeper allele)'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2500, 15000],
  },
  {
    slug: 'missouri-fox-trotter',
    name: 'Missouri Fox Trotter',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.0, 16.0],
    weightRangeLb: [900, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Trail', 'Endurance', 'Ranch', 'Pleasure'],
    temperamentTraits: ['Calm', 'Sure-footed', 'Willing', 'Hardy', 'Friendly'],
    originCountry: 'United States',
    originPurpose:
      'Developed in the Ozark Mountains of Missouri in the 1800s from Morgan, Thoroughbred, Arabian, and Tennessee Walker crosses; bred for the inherited diagonal "fox trot" gait that lets riders cover rough terrain at speed without bouncing.',
    knownHealthConcerns: [
      'Navicular disease',
      'PSSM1 and PSSM2',
      'Insulin resistance and laminitis',
      'Stringhalt',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1', 'DMRT3'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [3000, 12000],
  },
  {
    slug: 'paso-fino',
    name: 'Paso Fino',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [13.0, 15.2],
    weightRangeLb: [700, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Trail', 'Pleasure', 'Show (fino classes)', 'Endurance'],
    temperamentTraits: ['Spirited', 'Smooth-gaited', 'Proud', 'Sensitive', 'Surefooted'],
    originCountry: 'Puerto Rico / Colombia',
    originPurpose:
      'Descended from Spanish Jennets brought to the Caribbean in the 1500s; bred for the inherited evenly-timed lateral four-beat gait ("paso fino") used to cover plantation work without rider fatigue.',
    knownHealthConcerns: [
      'Degenerative suspensory ligament desmitis (DSLD/ESPA) — though more documented in Peruvian Paso',
      'PSSM2',
      'Navicular disease',
      'Equine metabolic syndrome',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['DMRT3', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3000, 20000],
  },
  {
    slug: 'peruvian-paso',
    name: 'Peruvian Paso',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.0, 15.2],
    weightRangeLb: [900, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Trail', 'Pleasure', 'Show (paso llano classes)', 'Endurance'],
    temperamentTraits: ['Smooth-gaited', 'Animated', 'Brave', 'Friendly', 'Sure-footed'],
    originCountry: 'Peru',
    originPurpose:
      'Descended from Spanish Jennets brought to Peru in the 1500s; bred in genetic isolation for the four-beat lateral "paso llano" gait with the signature foreleg "termino" outward arc.',
    knownHealthConcerns: [
      'Degenerative suspensory ligament desmitis (DSLD/ESPA — high breed prevalence; Halper 2006 J Vet Diagn Invest)',
      'Navicular disease',
      'PSSM2',
      'Equine metabolic syndrome',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['DMRT3', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3500, 20000],
  },
  {
    slug: 'standardbred',
    name: 'Standardbred',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.0, 17.0],
    weightRangeLb: [900, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Harness Racing', 'Trail (post-track)', 'Driving', 'Pleasure'],
    temperamentTraits: ['Calm', 'Trainable', 'Steady', 'Honest', 'Forward'],
    originCountry: 'United States',
    originPurpose:
      'Founded in 19th-century New York from Thoroughbred stallion Hambletonian 10 (1849); bred for harness racing at the trot or pace over a one-mile standard time.',
    knownHealthConcerns: [
      'Suspensory desmitis and bowed tendons from track work',
      'Gastric ulcers',
      'OCD',
      'Hereditary equine recurrent uveitis (less common than Appaloosa)',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['DMRT3 (gait keeper allele)'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [500, 10000],
  },
  {
    slug: 'icelandic',
    name: 'Icelandic Horse',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [12.2, 14.2],
    weightRangeLb: [730, 840],
    lifespanYears: [25, 40],
    energyLevel: 'Moderate',
    disciplines: ['Trail', 'Five-Gaited Show', 'Pleasure', 'Endurance'],
    temperamentTraits: ['Hardy', 'Friendly', 'Independent', 'Surefooted', 'Long-lived'],
    originCountry: 'Iceland',
    originPurpose:
      'Brought to Iceland by Norse settlers in the 9th-10th centuries and bred in genetic isolation since AD 982 (when Iceland prohibited horse imports); produces the inherited four-beat "tölt" and lateral "skeið."',
    knownHealthConcerns: [
      'Summer eczema / "sweet itch" — Culicoides hypersensitivity (high prevalence in horses exported off Iceland)',
      'Equine metabolic syndrome and laminitis (easy keepers)',
      'PSSM2',
      'Spavin (bone spavin from heavy use of hocks)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['DMRT3', 'PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [5000, 25000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Light / Iberian / desert breeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'arabian',
    name: 'Arabian',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.1, 15.3],
    weightRangeLb: [800, 1000],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Endurance', 'Show (Halter, English, Western)', 'Dressage', 'Trail'],
    temperamentTraits: ['Intelligent', 'Spirited', 'Sensitive', 'Loyal', 'Bold'],
    originCountry: 'Arabian Peninsula',
    originPurpose:
      'One of the oldest documented breeds; selectively bred by Bedouin tribes of the Arabian Peninsula over millennia as a war and endurance mount, prized for stamina, tractability, and bond with humans.',
    knownHealthConcerns: [
      'Severe combined immunodeficiency (SCID, DNA-PKcs autosomal recessive — foals dead by 4-6 months; Shin 1997 PNAS)',
      'Lavender foal syndrome (LFS, MYO5A autosomal recessive — Egyptian Arabian lines; Brooks 2010 PLoS Genet)',
      'Cerebellar abiotrophy (CA, MUTYH autosomal recessive — Brault 2010)',
      'Occipitoatlantoaxial malformation (OAAM)',
      'Equine juvenile epilepsy (idiopathic, foals resolve spontaneously)',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['SCID', 'LFS', 'CA', 'OAAM'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3000, 30000],
  },
  {
    slug: 'andalusian',
    name: 'Andalusian',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [15.0, 16.2],
    weightRangeLb: [1000, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Dressage', 'Doma Vaquera', 'Show', 'Driving'],
    temperamentTraits: ['Noble', 'Sensitive', 'Trainable', 'Calm', 'Proud'],
    originCountry: 'Spain',
    originPurpose:
      'Developed in Andalusia, Spain from the Iberian horses described by Pliny; refined by Carthusian monks from the 15th century onward as a high-school dressage horse and war horse for Spanish royalty.',
    knownHealthConcerns: [
      'Lateral patellar luxation',
      'Distal limb melanoma (gray horses — Sutton 1991, Smith 2006)',
      'PSSM2',
      'Inguinal hernia in colts',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 50000],
  },
  {
    slug: 'lusitano',
    name: 'Lusitano',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [15.0, 16.2],
    weightRangeLb: [1000, 1200],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Classical Dressage', 'Working Equitation', 'Mounted Bullfighting', 'Driving'],
    temperamentTraits: ['Brave', 'Willing', 'Sensitive', 'Athletic', 'Calm'],
    originCountry: 'Portugal',
    originPurpose:
      'The Portuguese branch of the Iberian horse; bred for centuries as a war and bullfighting horse, separated from the Spanish Andalusian by studbook in 1967.',
    knownHealthConcerns: [
      'Distal limb melanoma in gray horses',
      'PSSM2',
      'Lateral patellar luxation',
      'Recurrent exertional rhabdomyolysis (RER)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 50000],
  },
  {
    slug: 'lipizzaner',
    name: 'Lipizzaner',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.2, 15.3],
    weightRangeLb: [1000, 1200],
    lifespanYears: [25, 35],
    energyLevel: 'Moderate',
    disciplines: ['Classical Dressage (Spanish Riding School)', 'Driving', 'Show'],
    temperamentTraits: ['Intelligent', 'Sensitive', 'Trainable', 'Long-maturing', 'Proud'],
    originCountry: 'Slovenia / Austria',
    originPurpose:
      'Founded in 1580 at the Lipica Imperial Stud in present-day Slovenia by Archduke Charles II of Austria; six foundation stallions still appear in modern pedigrees. The breed of the Spanish Riding School of Vienna.',
    knownHealthConcerns: [
      'Distal limb melanoma in gray horses',
      'Equine metabolic syndrome',
      'PSSM2',
      'Late physical maturity (full height not reached until age 7)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 60000],
  },
  {
    slug: 'friesian',
    name: 'Friesian',
    registry: 'multi-registry',
    type: 'Pleasure',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.0, 17.0],
    weightRangeLb: [1300, 1500],
    lifespanYears: [16, 20],
    energyLevel: 'Moderate',
    disciplines: ['Dressage', 'Driving', 'Pleasure', 'Show'],
    temperamentTraits: ['Gentle', 'Willing', 'Showy', 'People-oriented', 'Trainable'],
    originCountry: 'Netherlands',
    originPurpose:
      'Native to Friesland in the northern Netherlands; bred from medieval times as a knight\'s war horse and later as an elegant driving horse. The studbook closed in the late 1800s and the breed nearly went extinct after WWII.',
    knownHealthConcerns: [
      'Dwarfism (autosomal recessive, B4GALT7 mutation — Leegwater 2016)',
      'Hydrocephalus (autosomal recessive, B3GALNT2 mutation — Ducro 2015)',
      'Aortic rupture (high breed prevalence; Boerma 2012)',
      'Megaesophagus',
      'Retained placenta',
      'Short lifespan relative to other breeds (16-20 yrs average)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['Dwarfism (B4GALT7)', 'Hydrocephalus (B3GALNT2)'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 50000],
  },
  {
    slug: 'mustang',
    name: 'Mustang',
    registry: 'multi-registry',
    type: 'Wild/Feral',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [13.2, 15.0],
    weightRangeLb: [700, 1000],
    lifespanYears: [25, 40],
    energyLevel: 'High',
    disciplines: ['Trail', 'Endurance', 'Ranch', 'Pleasure (post-gentling)'],
    temperamentTraits: ['Hardy', 'Surefooted', 'Wary', 'Intelligent', 'Independent'],
    originCountry: 'United States (feral)',
    originPurpose:
      'Feral descendants of horses brought by Spanish conquistadors in the 1500s; managed since 1971 by the Bureau of Land Management (BLM) under the Wild Free-Roaming Horses and Burros Act. Adopted out via BLM auction.',
    knownHealthConcerns: [
      'Variable — wild gene pool means lower breed-specific genetic disease risk',
      'Hoof and dental issues from post-adoption diet shifts',
      'Stress-related ulcers during gentling',
      'PSSM (sub-population dependent)',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [125, 5000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Draft breeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'belgian-draft',
    name: 'Belgian Draft',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Draft (16.0+hh, heavy build)',
    heightRangeHh: [16.2, 18.0],
    weightRangeLb: [1800, 2400],
    lifespanYears: [18, 25],
    energyLevel: 'Low',
    disciplines: ['Driving', 'Logging', 'Pulling Competitions', 'Show', 'Plowing'],
    temperamentTraits: ['Gentle', 'Calm', 'Willing', 'Powerful', 'Patient'],
    originCountry: 'Belgium',
    originPurpose:
      'Direct descendant of the medieval Flemish "Great Horse"; the largest population of draft horses in North America. Bred for heavy farm draft and logging work.',
    knownHealthConcerns: [
      'Junctional epidermolysis bullosa (JEB, LAMC2 autosomal recessive — foals lethal; Spirito 2002)',
      'Chronic progressive lymphedema (CPL — heavily feathered drafts; de Cock 2003)',
      'Equine polysaccharide storage myopathy type 1 (PSSM1 — high carrier rate in drafts)',
      'Shivers (chronic neuromuscular disorder)',
      'Squamous-cell carcinoma at non-pigmented eyelids',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['JEB', 'PSSM1'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2500, 12000],
  },
  {
    slug: 'percheron',
    name: 'Percheron',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Draft (16.0+hh, heavy build)',
    heightRangeHh: [16.2, 17.3],
    weightRangeLb: [1800, 2200],
    lifespanYears: [22, 27],
    energyLevel: 'Low',
    disciplines: ['Driving', 'Logging', 'Plowing', 'Show', 'Carriage'],
    temperamentTraits: ['Gentle', 'Intelligent', 'Willing', 'Calm', 'Powerful'],
    originCountry: 'France',
    originPurpose:
      'Developed in the Perche region of Normandy from medieval war horses crossed with Arabian blood (especially the foundation stallion Gallipoly, 1820); refined as a heavy carriage and farm draft horse.',
    knownHealthConcerns: [
      'PSSM1 (high prevalence in drafts)',
      'Shivers',
      'Equine motor neuron disease (EMND) — vitamin E deficiency-linked',
      'Chronic progressive lymphedema (CPL — when heavy feathering present)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [2500, 10000],
  },
  {
    slug: 'shire',
    name: 'Shire',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Draft (16.0+hh, heavy build)',
    heightRangeHh: [16.2, 19.0],
    weightRangeLb: [1800, 2500],
    lifespanYears: [20, 25],
    energyLevel: 'Low',
    disciplines: ['Driving', 'Logging', 'Plowing', 'Show', 'Brewing-Wagon Hitches'],
    temperamentTraits: ['Gentle', 'Patient', 'Calm', 'Willing', 'Powerful'],
    originCountry: 'England',
    originPurpose:
      'Descended from the medieval English "Great Horse"; refined in the East Midlands as a heavy farm and brewery dray horse. Holds Guinness records for the tallest horse ever recorded.',
    knownHealthConcerns: [
      'Chronic progressive lymphedema (CPL — extensive feathering)',
      'PSSM1',
      'Shivers',
      'Polysaccharide storage myopathy and tying-up',
      'Squamous-cell carcinoma at non-pigmented eyelids',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3500, 15000],
  },
  {
    slug: 'clydesdale',
    name: 'Clydesdale',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Draft (16.0+hh, heavy build)',
    heightRangeHh: [16.0, 18.0],
    weightRangeLb: [1800, 2400],
    lifespanYears: [20, 25],
    energyLevel: 'Low',
    disciplines: ['Driving', 'Show', 'Brewing-Wagon Hitches', 'Logging', 'Plowing'],
    temperamentTraits: ['Gentle', 'Active', 'Showy', 'Calm', 'Willing'],
    originCountry: 'Scotland',
    originPurpose:
      'Developed in the Clyde Valley of Lanarkshire, Scotland in the mid-1700s from local farm mares crossed with Flemish stallions; bred for high feathering and animated gait, made globally famous as the Anheuser-Busch hitch breed.',
    knownHealthConcerns: [
      'Chronic progressive lymphedema (CPL — extensive feathering)',
      'PSSM1',
      'Shivers',
      'Sunburn on white-marked legs and pink-skinned faces',
      'Cushings/PPID in older horses',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3500, 25000],
  },
  {
    slug: 'suffolk-punch',
    name: 'Suffolk Punch',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Draft (16.0+hh, heavy build)',
    heightRangeHh: [16.1, 17.2],
    weightRangeLb: [1900, 2200],
    lifespanYears: [25, 33],
    energyLevel: 'Low',
    disciplines: ['Plowing', 'Logging', 'Driving', 'Show'],
    temperamentTraits: ['Gentle', 'Hardy', 'Willing', 'Calm', 'Patient'],
    originCountry: 'England (East Anglia)',
    originPurpose:
      'Oldest English draft breed, traceable to Crisp\'s Horse of Ufford (1768); bred in East Anglia as a clean-legged plow horse. Listed as critically endangered by the Rare Breeds Survival Trust.',
    knownHealthConcerns: [
      'PSSM1',
      'Severe genetic bottleneck — narrow founder population',
      'Shivers',
      'Limited gene pool documented health issues from inbreeding',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [4000, 15000],
  },
  {
    slug: 'norwegian-fjord',
    name: 'Norwegian Fjord',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [13.1, 14.3],
    weightRangeLb: [880, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Dressage', 'Trail', 'Combined Driving', 'Plowing'],
    temperamentTraits: ['Gentle', 'Hardy', 'Willing', 'Strong', 'Calm'],
    originCountry: 'Norway',
    originPurpose:
      'One of the oldest pure breeds in the world; bred in western Norway since at least Viking times as a light farm draft and pack pony. The two-tone mane (dark dorsal stripe with light flanks) is trimmed in the traditional Viking pattern.',
    knownHealthConcerns: [
      'Equine metabolic syndrome and laminitis (very easy keeper)',
      'PSSM1 and PSSM2',
      'Squamous-cell carcinoma at non-pigmented eyelids',
      'Cushings/PPID in older horses',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [5000, 15000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Pony breeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'welsh-pony',
    name: 'Welsh Pony',
    registry: 'multi-registry',
    type: 'Pony',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [11.0, 14.2],
    weightRangeLb: [400, 800],
    lifespanYears: [25, 35],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Children\'s Show Hunter', 'Pony Club', 'Trail', 'Dressage'],
    temperamentTraits: ['Hardy', 'Intelligent', 'Brave', 'Willing', 'Long-lived'],
    originCountry: 'Wales',
    originPurpose:
      'Native to the Welsh hills since pre-Roman times; refined into four sections (A, B, C, D) by the Welsh Pony and Cob Society for everything from lead-line mounts to driving cobs.',
    knownHealthConcerns: [
      'Equine metabolic syndrome and laminitis (easy keepers)',
      'Cushings/PPID in older ponies',
      'PSSM2',
      'Squamous-cell carcinoma at non-pigmented eyelids',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [1500, 15000],
  },
  {
    slug: 'shetland-pony',
    name: 'Shetland Pony',
    registry: 'multi-registry',
    type: 'Pony',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [7.0, 10.2],
    weightRangeLb: [400, 500],
    lifespanYears: [25, 35],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Lead-Line', 'Pony Club', 'Show', 'Pet'],
    temperamentTraits: ['Hardy', 'Strong', 'Independent', 'Cheeky', 'Long-lived'],
    originCountry: 'Shetland Isles (Scotland)',
    originPurpose:
      'Bred on the Shetland Islands of Scotland since the Bronze Age; survived on a sparse diet of seaweed and heather, making the breed exceptionally hardy and easy-keeping.',
    knownHealthConcerns: [
      'Equine metabolic syndrome and laminitis (extreme easy keepers)',
      'Cushings/PPID',
      'Hyperlipidemia / hyperlipemia (especially during stress or pregnancy)',
      'Dwarfism (one of the breeds where mini-Shetland dwarfism mutations have been characterized)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['Dwarfism (ACAN)'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [500, 5000],
  },
  {
    slug: 'pony-of-the-americas',
    name: 'Pony of the Americas',
    registry: 'multi-registry',
    type: 'Pony',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [11.2, 14.0],
    weightRangeLb: [500, 900],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Western', 'English', 'Trail', 'Pony Club', 'Show'],
    temperamentTraits: ['Gentle', 'Willing', 'Calm', 'Hardy', 'Versatile'],
    originCountry: 'United States',
    originPurpose:
      'Founded in Iowa in 1954 by Les Boomhower from a Shetland-Appaloosa cross; bred as an all-around children\'s show pony with leopard-complex spotting.',
    knownHealthConcerns: [
      'Equine recurrent uveitis (ERU — leopard-complex association)',
      'Congenital stationary night blindness (CSNB, LP/LP horses)',
      'Equine metabolic syndrome and laminitis',
      'PSSM2',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['LP', 'PATN1', 'PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [1500, 8000],
  },
  {
    slug: 'connemara-pony',
    name: 'Connemara Pony',
    registry: 'multi-registry',
    type: 'Pony',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [12.2, 14.2],
    weightRangeLb: [640, 860],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Show Jumping', 'Eventing', 'Dressage', 'Pony Club', 'Hunter'],
    temperamentTraits: ['Athletic', 'Brave', 'Surefooted', 'Versatile', 'Trainable'],
    originCountry: 'Ireland',
    originPurpose:
      'Native to the Connemara region of western Ireland; the only native Irish pony breed. Bred for hardiness on rocky terrain and refined post-1923 with Welsh, Hackney, and Arabian blood.',
    knownHealthConcerns: [
      'Hoof wall separation disease (HWSD, SERPINB11 autosomal recessive — Finno 2015 PLoS Genet)',
      'Equine metabolic syndrome and laminitis',
      'PSSM2',
      'Osteochondritis dissecans (OCD)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['HWSD', 'PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [3500, 25000],
  },
  {
    slug: 'haflinger',
    name: 'Haflinger',
    registry: 'multi-registry',
    type: 'Pony',
    sizeCategory: 'Pony (<14.2hh)',
    heightRangeHh: [13.2, 15.0],
    weightRangeLb: [800, 1300],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Dressage', 'Trail', 'Logging', 'Pleasure'],
    temperamentTraits: ['Gentle', 'Willing', 'Hardy', 'Surefooted', 'Friendly'],
    originCountry: 'Austria / Italy (South Tyrol)',
    originPurpose:
      'Bred since 1874 in the South Tyrol Alps from the foundation stallion 249 Folie; bred as a mountain pack and light draft horse, traditionally chestnut with flaxen mane.',
    knownHealthConcerns: [
      'Equine metabolic syndrome and laminitis (easy keepers)',
      'Cushings/PPID',
      'Squamous-cell carcinoma at non-pigmented eyelids',
      'PSSM2',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [3000, 15000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Other notable
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'morgan',
    name: 'Morgan',
    registry: 'multi-registry',
    type: 'Pleasure',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.1, 15.2],
    weightRangeLb: [900, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'Moderate',
    disciplines: ['Saddle Seat', 'Driving', 'Dressage', 'Trail', 'Western'],
    temperamentTraits: ['Spirited', 'Willing', 'Athletic', 'People-oriented', 'Versatile'],
    originCountry: 'United States',
    originPurpose:
      'The first American breed — traces in entirety to a single 1789 Vermont stallion named Figure (later "Justin Morgan"). Used historically as a cavalry, harness racing, and farm horse.',
    knownHealthConcerns: [
      'Equine metabolic syndrome (Morgan-specific obesity prevalence; Frank 2010)',
      'Cushings/PPID',
      'PSSM2',
      'Polysaccharide storage myopathy and tying-up',
      'Lateral patellar luxation',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [3000, 20000],
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    registry: 'multi-registry',
    type: 'Pleasure',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [12.0, 16.0],
    weightRangeLb: [600, 1100],
    lifespanYears: [20, 30],
    energyLevel: 'High',
    disciplines: ['Driving', 'Show (Roadster)', 'Saddle Seat'],
    temperamentTraits: ['Animated', 'Spirited', 'Showy', 'Brave', 'Hot-blooded'],
    originCountry: 'England',
    originPurpose:
      'Developed in 14th-century Norfolk and Yorkshire from the Norfolk Trotter and Yorkshire Trotter; bred for high-action carriage work and harness racing.',
    knownHealthConcerns: [
      'PSSM2',
      'Lordosis in aging horses',
      'Suspensory desmitis',
      'Recurrent exertional rhabdomyolysis (RER)',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3000, 25000],
  },
  {
    slug: 'akhal-teke',
    name: 'Akhal-Teke',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.2, 16.0],
    weightRangeLb: [900, 1000],
    lifespanYears: [20, 25],
    energyLevel: 'High',
    disciplines: ['Endurance', 'Dressage', 'Show Jumping', 'Racing'],
    temperamentTraits: ['Bold', 'Sensitive', 'Loyal', 'Independent', 'Athletic'],
    originCountry: 'Turkmenistan',
    originPurpose:
      'One of the oldest existing horse breeds; bred by the Teke tribe in the Akhal oasis of Turkmenistan for centuries as a desert war and endurance mount. Famous for the metallic golden sheen of the coat.',
    knownHealthConcerns: [
      'Naked Foal Syndrome (NFS, ST14 autosomal recessive — Bauer 2017)',
      'Cervical vertebral malformation (Wobbler)',
      'Cryptorchidism',
      'Distal limb cellulitis from desert-adapted thin skin',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['NFS'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 100000],
  },
  {
    slug: 'marwari',
    name: 'Marwari',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.0, 15.2],
    weightRangeLb: [750, 1000],
    lifespanYears: [20, 25],
    energyLevel: 'High',
    disciplines: ['Show', 'Ceremonial', 'Trail', 'Endurance'],
    temperamentTraits: ['Loyal', 'Bold', 'Sensitive', 'Sure-footed', 'Hardy'],
    originCountry: 'India (Rajasthan)',
    originPurpose:
      'Bred since the 12th century by the Rathores of Marwar, Rajasthan as a desert cavalry horse. Identified by the signature inward-turned ear tips.',
    knownHealthConcerns: [
      'Limited international veterinary literature — most data anecdotal',
      'Heat stress when moved to humid climates',
      'PSSM2 documented in some imports',
      'Wobbler syndrome',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 50000],
  },
  {
    slug: 'cleveland-bay',
    name: 'Cleveland Bay',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [16.0, 16.2],
    weightRangeLb: [1300, 1500],
    lifespanYears: [20, 25],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Show Jumping', 'Dressage', 'Hunting'],
    temperamentTraits: ['Sensible', 'Honest', 'Bold', 'Powerful', 'Long-lived'],
    originCountry: 'England',
    originPurpose:
      'Oldest established English horse breed; bred in the Cleveland district of North Yorkshire from medieval pack horses crossed with Andalusian and Barb blood. Listed as critically endangered by the Rare Breeds Survival Trust.',
    knownHealthConcerns: [
      'Severe genetic bottleneck — fewer than 1,000 purebreds worldwide',
      'PSSM2',
      'Suspensory desmitis',
      'OCD',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [5000, 25000],
  },
  {
    slug: 'irish-sport-horse',
    name: 'Irish Sport Horse',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1100, 1400],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Eventing', 'Show Jumping', 'Hunting', 'Dressage'],
    temperamentTraits: ['Brave', 'Honest', 'Athletic', 'Trainable', 'Hardy'],
    originCountry: 'Ireland',
    originPurpose:
      'Created by Horse Sport Ireland from Irish Draught × Thoroughbred crosses; the dominant breed in international eventing for the last three decades.',
    knownHealthConcerns: [
      'OCD',
      'PSSM2',
      'WFFS (when carrying continental warmblood blood)',
      'Suspensory desmitis',
      'Equine gastric ulcer syndrome (EGUS — high prevalence in eventers)',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [10000, 100000],
  },
  {
    slug: 'anglo-arabian',
    name: 'Anglo-Arabian',
    registry: 'multi-registry',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [15.2, 16.3],
    weightRangeLb: [900, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Eventing', 'Endurance', 'Dressage', 'Show Jumping'],
    temperamentTraits: ['Refined', 'Bold', 'Sensitive', 'Athletic', 'Hot-blooded'],
    originCountry: 'France / multi-national',
    originPurpose:
      'First-cross Thoroughbred × Arabian, with subsequent generations bred Anglo to Anglo, Anglo to Arabian, or Anglo to Thoroughbred. Originated in 19th-century France; the standard French eventing horse before the Selle Français consolidation.',
    knownHealthConcerns: [
      'Arabian-derived: SCID, CA, LFS (when Arabian parent carries)',
      'Thoroughbred-derived: gastric ulcers, suspensory desmitis',
      'PSSM2',
      'Wobbler syndrome',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['SCID', 'CA', 'LFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [5000, 50000],
  },
  {
    slug: 'knabstrupper',
    name: 'Knabstrupper',
    registry: 'multi-registry',
    type: 'Pleasure',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [15.2, 16.2],
    weightRangeLb: [1000, 1300],
    lifespanYears: [20, 30],
    energyLevel: 'Moderate',
    disciplines: ['Dressage', 'Driving', 'Circus', 'Show'],
    temperamentTraits: ['Calm', 'Willing', 'Friendly', 'Trainable', 'Showy'],
    originCountry: 'Denmark',
    originPurpose:
      'Founded in 1812 at Knabstrupgaard in Denmark from a single spotted Iberian-cross mare named Flaebehoppen; refined with Frederiksborg and warmblood blood. Carries leopard-complex spotting (LP) similar to the Appaloosa.',
    knownHealthConcerns: [
      'Equine recurrent uveitis (ERU — LP-associated)',
      'Congenital stationary night blindness (LP/LP horses)',
      'PSSM2',
      'OCD',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['LP', 'PATN1', 'PSSM2'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [10000, 40000],
  },
  {
    slug: 'gypsy-vanner',
    name: 'Gypsy Vanner (Tinker)',
    registry: 'multi-registry',
    type: 'Draft',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [13.0, 16.0],
    weightRangeLb: [1100, 1700],
    lifespanYears: [20, 25],
    energyLevel: 'Moderate',
    disciplines: ['Driving', 'Pleasure', 'Show', 'Trail'],
    temperamentTraits: ['Calm', 'Friendly', 'Willing', 'Bold', 'People-oriented'],
    originCountry: 'United Kingdom / Ireland',
    originPurpose:
      'Bred by the Romanichal and Irish Traveller communities from the late 1800s as a colorful, feathered family caravan horse; formalized as a breed in the 1990s under the Gypsy Vanner Horse Society.',
    knownHealthConcerns: [
      'Chronic progressive lymphedema (CPL — extreme feathering)',
      'Equine metabolic syndrome and laminitis (easy keepers)',
      'PSSM1',
      'Mallenders / sallenders (dermatosis under feathering)',
      'Squamous-cell carcinoma at non-pigmented eyelids',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['PSSM1'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [5000, 30000],
  },
  {
    slug: 'rocky-mountain-horse',
    name: 'Rocky Mountain Horse',
    registry: 'multi-registry',
    type: 'Gaited',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.2, 16.0],
    weightRangeLb: [850, 1000],
    lifespanYears: [25, 35],
    energyLevel: 'Moderate',
    disciplines: ['Trail', 'Pleasure', 'Endurance', 'Show'],
    temperamentTraits: ['Calm', 'Surefooted', 'Friendly', 'Hardy', 'Smooth-gaited'],
    originCountry: 'United States',
    originPurpose:
      'Developed in eastern Kentucky from a foundation stallion known as "Old Tobe" in the early 1900s; bred for the inherited four-beat single-foot gait and the silver-chocolate coat color.',
    knownHealthConcerns: [
      'Multiple congenital ocular anomalies (MCOA / "Silver Dapple Syndrome", PMEL17/SILV mutation — Andersson 2008)',
      'PSSM2',
      'Equine metabolic syndrome',
      'Navicular disease',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['MCOA (PMEL17)', 'PSSM2', 'DMRT3'],
    firstTimeOwnerFriendly: true,
    priceRangeUsd: [3500, 20000],
  },

  // ─────────────────────────────────────────────────────────────────
  // Crossbreeds
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'warmblood',
    name: 'Warmblood (General)',
    registry: 'multi-registry',
    type: 'Warmblood',
    sizeCategory: 'Tall (16.2+hh)',
    heightRangeHh: [15.3, 17.2],
    weightRangeLb: [1200, 1500],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Dressage', 'Show Jumping', 'Eventing', 'Combined Driving'],
    temperamentTraits: ['Trainable', 'Athletic', 'Bold', 'Honest', 'Willing'],
    originCountry: 'Europe (multi-national)',
    originPurpose:
      'Umbrella term for European sport horse studbooks (Hanoverian, Holsteiner, KWPN, Oldenburg, Trakehner, Selle Français, etc.) descended from heavy carriage and cavalry stock refined post-WWII with Thoroughbred blood for FEI-discipline competition.',
    knownHealthConcerns: [
      'Osteochondritis dissecans (OCD)',
      'Polysaccharide storage myopathy type 2 (PSSM2) and "MIM" / Myofibrillar Myopathy',
      'Warmblood fragile foal syndrome (WFFS)',
      'Lordosis in older horses',
      'Suspensory ligament desmitis from sport workload',
      'Equine gastric ulcer syndrome',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['WFFS', 'PSSM1', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [15000, 200000],
  },
  {
    slug: 'quarab',
    name: 'Quarab',
    registry: 'crossbreed',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [14.2, 16.0],
    weightRangeLb: [900, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Endurance', 'Trail', 'Western', 'Show'],
    temperamentTraits: ['Spirited', 'Athletic', 'Sensitive', 'Hardy', 'Willing'],
    originCountry: 'United States',
    originPurpose:
      'Cross of Quarter Horse (or Paint) and Arabian, combining stock-horse cow sense with Arabian endurance and refinement. Registered through the International Quarab Horse Association.',
    knownHealthConcerns: [
      'Arabian-derived: SCID, CA, LFS (test if Arabian parent carries)',
      'Quarter Horse-derived: HYPP, GBED, HERDA, PSSM1 (test if Quarter Horse parent carries)',
      'Sunburn on light skin',
      'Wobbler syndrome',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['SCID', 'CA', 'LFS', 'HYPP', 'GBED', 'HERDA', 'PSSM1'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [2500, 15000],
  },
  {
    slug: 'anglo-arab',
    name: 'Anglo-Arab',
    registry: 'crossbreed',
    type: 'Sport',
    sizeCategory: 'Standard (15.2-16.2hh)',
    heightRangeHh: [15.2, 16.3],
    weightRangeLb: [900, 1100],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Eventing', 'Endurance', 'Dressage', 'Show Jumping'],
    temperamentTraits: ['Refined', 'Bold', 'Sensitive', 'Athletic', 'Forward'],
    originCountry: 'France / multi-national',
    originPurpose:
      'First-cross Thoroughbred × Arabian; minimum 12.5% Arabian blood for AHSA/USEF Half-Arabian and Anglo-Arab registration. Historically the French cavalry remount before Selle Français consolidation.',
    knownHealthConcerns: [
      'Arabian-derived: SCID, CA, LFS',
      'Thoroughbred-derived: gastric ulcers, suspensory desmitis',
      'PSSM2',
      'Wobbler syndrome',
    ],
    knownHealthCrossLinks: ['/health/equine-ulcers', '/supplements/joint-supplements'],
    knownGeneticTests: ['SCID', 'CA', 'LFS', 'PSSM2'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [5000, 40000],
  },
  {
    slug: 'pintabian',
    name: 'Pintabian',
    registry: 'crossbreed',
    type: 'Sport',
    sizeCategory: 'Small Horse (14.2-15.2hh)',
    heightRangeHh: [14.2, 15.3],
    weightRangeLb: [800, 1000],
    lifespanYears: [25, 30],
    energyLevel: 'High',
    disciplines: ['Endurance', 'Trail', 'Show', 'Dressage'],
    temperamentTraits: ['Refined', 'Spirited', 'Sensitive', 'Athletic', 'Loyal'],
    originCountry: 'United States',
    originPurpose:
      'Registered through the Pintabian Horse Registry — minimum 99% Arabian blood with the tobiano spotting pattern; produced by crossing Pinto stock with Arabian and breeding back several generations to Arabian.',
    knownHealthConcerns: [
      'Arabian-derived: SCID, CA, LFS',
      'Tobiano-derived: lethal white overo only if frame-overo blood present',
      'Sunburn on white-marked skin',
      'PSSM2',
    ],
    knownHealthCrossLinks: ['/supplements/joint-supplements'],
    knownGeneticTests: ['SCID', 'CA', 'LFS', 'LWO'],
    firstTimeOwnerFriendly: false,
    priceRangeUsd: [3500, 20000],
  },
]

// ─────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────

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
 * Group breeds by type for the index page.
 */
export function groupBreedsByType(): Record<BreedType, Breed[]> {
  const out = {
    Stock: [],
    Sport: [],
    Gaited: [],
    Draft: [],
    Pony: [],
    Warmblood: [],
    'Wild/Feral': [],
    Pleasure: [],
  } as Record<BreedType, Breed[]>
  for (const breed of Breeds) {
    out[breed.type].push(breed)
  }
  return out
}

/**
 * Group breeds by size category for an alternative browse view.
 */
export function groupBreedsBySize(): Record<SizeCategory, Breed[]> {
  const out = {
    'Pony (<14.2hh)': [],
    'Small Horse (14.2-15.2hh)': [],
    'Standard (15.2-16.2hh)': [],
    'Tall (16.2+hh)': [],
    'Draft (16.0+hh, heavy build)': [],
  } as Record<SizeCategory, Breed[]>
  for (const breed of Breeds) {
    out[breed.sizeCategory].push(breed)
  }
  return out
}
