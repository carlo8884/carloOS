/**
 * Vets.co — Breed-specific pet insurance routing data.
 *
 * Powers the programmatic /pet-insurance/breeds/[breed]/[state] matrix
 * (1,612 long-tail SEO pages: 31 dog breeds × 52 US states). Each page
 * targets buyer-stage queries like "best pet insurance for golden
 * retrievers in California". Vets.co is the portfolio's insurance hub
 * (policy §5: vets.co is INSURANCE ONLY — no product affiliates).
 *
 * Data ported from apps/dog-com/src/data/insurance-by-breed.ts so the
 * two sites stay in sync. If a carrier recommendation changes, update
 * both files. (Future: lift to packages/data once stable.)
 *
 * Each entry maps a breed to its dominant hereditary risk profile and the
 * carrier whose policy spec best fits that profile. Carrier slugs reference
 * src/data/insurance-carriers.ts — do not invent new carriers here.
 *
 * Routing logic (Architect S6 — monetization):
 *   - High orthopedic risk → Pumpkin (14 days or less) or Trupanion (per-condition deductible)
 *   - High dental risk (toy / brachy) → Fetch by The Dodo
 *   - High chronic/cancer risk → Trupanion (unlimited, per-condition deductible)
 *   - Low risk + healthy puppy → Lemonade
 *   - Older / adopted dog with a past condition: ManyPets is not accepting new US policies
 *
 * sampleMonthlyPremium is the puppy/young-adult band. Senior premiums are
 * typically 2–3x. Numbers are based on published rate filings and consumer
 * quote data, not invented.
 */

import { CARRIERS, type CarrierSlug } from './insurance-carriers'

export type SizeCategory = 'toy' | 'small' | 'medium' | 'large' | 'giant'
export type RiskLevel = 'high' | 'moderate' | 'low'

export interface BreedInsuranceProfile {
  /** Display name. */
  breedName: string
  /** Kebab-case URL slug used in /pet-insurance/breeds/[breed]. */
  slug: string
  /** Slug used for cross-site linking back to dog.com/breeds/[slug]
   *  (vets.co doesn't have its own breeds.ts — it's insurance-focused). */
  breedDataSlug: string
  sizeCategory: SizeCategory
  /** [min, max] in years. */
  lifespan: [number, number]
  /** 4–7 specific hereditary conditions this breed faces. */
  keyConditions: string[]
  /** Likelihood of multi-year claims. */
  chronicRisk: RiskLevel
  /** Drives carrier selection — short orthopedic waiting period matters
   *  for high-risk breeds. */
  orthopedicRisk: RiskLevel
  /** Drives "best for dental coverage" recommendation. */
  dentalRisk: RiskLevel
  /** Recommended carrier — best policy spec match for the breed's risk profile. */
  recommendedCarrier: CarrierSlug
  /** 1–2 sentences explaining the WHY behind the recommendation. */
  recommendedReason: string
  /** Two backup recommendations. */
  alternateCarriers: [CarrierSlug, CarrierSlug]
  /** Puppy / young-adult reference premium. Senior is typically 2–3x. */
  sampleMonthlyPremium: [number, number]
  /** Coverage features that matter most for this breed. */
  keyCoverageNeeds: string[]
}

export const INSURANCE_BREEDS: BreedInsuranceProfile[] = [
  {
    breedName: 'Golden Retriever',
    slug: 'golden-retriever',
    breedDataSlug: 'golden-retriever',
    sizeCategory: 'large',
    lifespan: [10, 12],
    keyConditions: [
      'Hemangiosarcoma (cancer of blood-vessel lining)',
      'Lymphoma',
      'Hip and elbow dysplasia',
      'Subvalvular aortic stenosis (SAS)',
      'Atopic dermatitis',
      'Hypothyroidism',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Hemangiosarcoma and lymphoma are on the Golden\'s condition list. Trupanion has no annual or lifetime payout cap and uses a per-condition deductible, so a multi-year cancer claim hits the deductible once.',
    alternateCarriers: ['healthy-paws', 'pumpkin-pet'],
    sampleMonthlyPremium: [50, 85],
    keyCoverageNeeds: [
      'Unlimited annual payout (cancer treatment exceeds $8,000–$15,000 limits)',
      'Hereditary and congenital condition coverage',
      'Short orthopedic waiting period (hip/elbow dysplasia)',
      'Coverage for advanced diagnostics (CT, MRI, biopsy)',
    ],
  },
  {
    breedName: 'Labrador Retriever',
    slug: 'labrador-retriever',
    breedDataSlug: 'labrador-retriever',
    sizeCategory: 'large',
    lifespan: [10, 12],
    keyConditions: [
      'Hip and elbow dysplasia',
      'Cranial cruciate ligament (CCL) rupture',
      'Exercise-induced collapse (EIC)',
      'Obesity-related arthritis',
      'Laryngeal paralysis',
      'Progressive retinal atrophy (PRA)',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Hip dysplasia and CCL rupture are on the Lab\'s condition list. Pumpkin\'s orthopedic waiting period of 14 days or less means a Lab with early hip signs is covered before symptoms escalate. Critical when buying for a Lab puppy.',
    alternateCarriers: ['trupanion', 'spot'],
    sampleMonthlyPremium: [40, 75],
    keyCoverageNeeds: [
      'Short orthopedic waiting period (hip dysplasia, CCL)',
      'Coverage for ongoing rehab and physical therapy',
      'Hereditary condition coverage',
      'Unlimited annual payout for bilateral CCL repair',
    ],
  },
  {
    breedName: 'French Bulldog',
    slug: 'french-bulldog',
    breedDataSlug: 'french-bulldog',
    sizeCategory: 'small',
    lifespan: [10, 12],
    keyConditions: [
      'Brachycephalic obstructive airway syndrome (BOAS)',
      'Intervertebral disc disease (IVDD)',
      'Hemivertebrae',
      'Skin-fold dermatitis',
      'Cherry eye and entropion',
      'Periodontal disease',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Frenchies face a triple threat — BOAS surgery, dental disease (their crowded brachycephalic jaw drives early periodontal loss), and skin/eye conditions. Fetch covers periodontal disease on the base plan.',
    alternateCarriers: ['trupanion', 'pumpkin-pet'],
    sampleMonthlyPremium: [55, 95],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'BOAS surgery coverage with no breed exclusion clause',
      'IVDD surgical coverage ($6,000–10,000 per episode)',
      'Coverage for skin and eye chronic conditions',
    ],
  },
  {
    breedName: 'German Shepherd',
    slug: 'german-shepherd',
    breedDataSlug: 'german-shepherd',
    sizeCategory: 'large',
    lifespan: [9, 13],
    keyConditions: [
      'Hip and elbow dysplasia',
      'Degenerative myelopathy (DM)',
      'Gastric dilatation-volvulus (bloat)',
      'Exocrine pancreatic insufficiency (EPI)',
      'Hemangiosarcoma',
      'Panosteitis',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'GSDs face hip and elbow dysplasia and bloat (an emergency surgery). Pumpkin\'s 14-day orthopedic wait covers a young GSD before screening films are even read, and the unlimited-payout option handles bloat plus subsequent DM care.',
    alternateCarriers: ['trupanion', 'embrace'],
    sampleMonthlyPremium: [45, 80],
    keyCoverageNeeds: [
      'Short orthopedic waiting period',
      'Emergency surgery coverage (bloat is time-critical)',
      'Coverage for ongoing neurological care (DM)',
      'Exam fees included',
    ],
  },
  {
    breedName: 'Australian Shepherd',
    slug: 'australian-shepherd',
    breedDataSlug: 'australian-shepherd',
    sizeCategory: 'medium',
    lifespan: [12, 15],
    keyConditions: [
      'MDR1 multidrug sensitivity',
      'Hip dysplasia',
      'Collie eye anomaly (CEA)',
      'Progressive retinal atrophy',
      'Epilepsy',
      'Hereditary cataracts',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'embrace',
    recommendedReason:
      'Aussies face episodic conditions (epilepsy, MDR1 drug reactions) that need diagnostics and prescription coverage rather than catastrophic payouts. Embrace covers prescription medication on the base plan. The deductible reward: see the carrier\'s current terms.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'],
    sampleMonthlyPremium: [35, 70],
    keyCoverageNeeds: [
      'Prescription medication coverage (anti-epileptics)',
      'MDR1 genetic test coverage',
      'Ophthalmology coverage (CEA, PRA, cataracts)',
      'Hereditary condition coverage',
    ],
  },
  {
    breedName: 'Poodle',
    slug: 'poodle',
    breedDataSlug: 'poodle',
    sizeCategory: 'medium',
    lifespan: [12, 15],
    keyConditions: [
      'Addison\'s disease',
      'Sebaceous adenitis',
      'Progressive retinal atrophy',
      'Hip dysplasia (Standard Poodles)',
      'Gastric dilatation-volvulus (Standard Poodles)',
      'Cushing\'s disease',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'moderate',
    recommendedCarrier: 'embrace',
    recommendedReason:
      'Poodles tend toward chronic endocrine disease (Addison\'s, Cushing\'s) requiring lifelong meds and lab monitoring. Embrace covers prescription drugs. Exam-fee coverage is optional, and the deductible reward: see the carrier\'s current terms.',
    alternateCarriers: ['trupanion', 'healthy-paws'],
    sampleMonthlyPremium: [35, 75],
    keyCoverageNeeds: [
      'Prescription medication coverage (lifelong endocrine meds)',
      'Coverage for routine bloodwork on chronic conditions',
      'Exam-fee coverage is optional',
      'Dermatology coverage (sebaceous adenitis)',
    ],
  },
  {
    breedName: 'Bulldog',
    slug: 'bulldog',
    breedDataSlug: 'bulldog',
    sizeCategory: 'medium',
    lifespan: [8, 10],
    keyConditions: [
      'Brachycephalic obstructive airway syndrome (BOAS)',
      'Hip dysplasia',
      'Skin-fold dermatitis and pyoderma',
      'Cherry eye and entropion',
      'Demodectic mange',
      'Heat intolerance',
      'Cesarean-section birth complications',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'high',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'English Bulldogs have an 8–10 year lifespan on this page and stacked chronic conditions — BOAS, dermatology, hips, eyes. Trupanion\'s per-condition deductible and unlimited payout matter when a single dog files claims against 4–5 separate ongoing conditions over its life.',
    alternateCarriers: ['fetch-by-the-dodo', 'pumpkin-pet'],
    sampleMonthlyPremium: [60, 110],
    keyCoverageNeeds: [
      'Coverage for multiple concurrent chronic conditions',
      'BOAS surgery coverage with no breed exclusion',
      'Dermatology and chronic skin care',
      'Unlimited annual payout',
    ],
  },
  {
    breedName: 'Beagle',
    slug: 'beagle',
    breedDataSlug: 'beagle',
    sizeCategory: 'small',
    lifespan: [12, 15],
    keyConditions: [
      'Intervertebral disc disease (IVDD)',
      'Epilepsy',
      'Hypothyroidism',
      'Cherry eye',
      'Obesity-related arthritis',
      'Ear infections (chronic otitis)',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'lemonade-pet',
    recommendedReason:
      'Beagles are rated low for chronic and orthopedic risk on this page. The conditions to plan for are ear infections, weight-related arthritis, epilepsy, IVDD, hypothyroidism, and cherry eye. Lemonade\'s entry-tier premium fits a low-risk profile. Confirm on the quote that chronic ear infections and epilepsy medication are covered.',
    alternateCarriers: ['figo', 'embrace'],
    sampleMonthlyPremium: [20, 45],
    keyCoverageNeeds: [
      'Affordable monthly premium',
      'Coverage for chronic ear infections',
      'Prescription coverage for epilepsy meds',
      'Routine diagnostic coverage',
    ],
  },
  {
    breedName: 'Dachshund',
    slug: 'dachshund',
    breedDataSlug: 'dachshund',
    sizeCategory: 'small',
    lifespan: [12, 16],
    keyConditions: [
      'Intervertebral disc disease (IVDD) — Type I',
      'Patellar luxation',
      'Progressive retinal atrophy',
      'Periodontal disease',
      'Obesity-related back strain',
      'Cushing\'s disease',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'high',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Type I IVDD leads the Dachshund\'s condition list, and an episode can mean emergency disc surgery. Pumpkin\'s 14-day orthopedic/neurological waiting period plus dental disease coverage addresses both IVDD and the periodontal disease on the same list.',
    alternateCarriers: ['trupanion', 'fetch-by-the-dodo'],
    sampleMonthlyPremium: [35, 70],
    keyCoverageNeeds: [
      'IVDD surgical coverage',
      'Short neurological/orthopedic waiting period',
      'Dental disease coverage',
      'Rehab and physical therapy coverage',
    ],
  },
  {
    breedName: 'Rottweiler',
    slug: 'rottweiler',
    breedDataSlug: 'rottweiler',
    sizeCategory: 'large',
    lifespan: [9, 10],
    keyConditions: [
      'Osteosarcoma (bone cancer)',
      'Hip and elbow dysplasia',
      'Cranial cruciate ligament rupture',
      'Dilated cardiomyopathy',
      'Subaortic stenosis',
      'Gastric dilatation-volvulus',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Osteosarcoma (bone cancer) is on the Rottweiler\'s condition list, and treatment can include amputation plus chemo. Trupanion\'s unlimited payout and per-condition deductible mean one cancer diagnosis doesn\'t cap or restart the deductible across a multi-year treatment.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'],
    sampleMonthlyPremium: [50, 90],
    keyCoverageNeeds: [
      'Unlimited annual payout (osteosarcoma treatment)',
      'Short orthopedic waiting period',
      'Cardiology coverage',
      'Coverage for advanced imaging (CT/MRI)',
    ],
  },
  {
    breedName: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    breedDataSlug: 'yorkshire-terrier',
    sizeCategory: 'toy',
    lifespan: [13, 16],
    keyConditions: [
      'Periodontal disease',
      'Patellar luxation',
      'Tracheal collapse',
      'Portosystemic liver shunt',
      'Legg-Calvé-Perthes disease',
      'Hypoglycemia (puppies)',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Yorkies are rated high for dental risk on this page, with periodontal disease on their condition list, and advanced cases can need full-mouth extractions. Fetch covers periodontal disease (not just dental trauma) on the base plan.',
    alternateCarriers: ['pumpkin-pet', 'embrace'],
    sampleMonthlyPremium: [25, 60],
    keyCoverageNeeds: [
      'Periodontal disease coverage',
      'Tracheal collapse coverage',
      'Coverage for liver shunt diagnostics and surgery',
      'Small-breed orthopedic coverage',
    ],
  },
  {
    breedName: 'Boxer',
    slug: 'boxer',
    breedDataSlug: 'boxer',
    sizeCategory: 'large',
    lifespan: [10, 12],
    keyConditions: [
      'Boxer cardiomyopathy (ARVC)',
      'Aortic stenosis',
      'Mast cell tumors',
      'Lymphoma',
      'Hip dysplasia',
      'Hypothyroidism',
      'Brachycephalic airway syndrome',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'moderate',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Boxers face mast cell tumors and lymphoma plus inherited cardiomyopathy. Trupanion\'s unlimited payout handles oncology + cardiology in the same year, and the per-condition deductible favors lifelong cardiac monitoring.',
    alternateCarriers: ['healthy-paws', 'pumpkin-pet'],
    sampleMonthlyPremium: [50, 95],
    keyCoverageNeeds: [
      'Unlimited annual payout (combined cancer + cardiac)',
      'Cardiology coverage (Holter monitors, echo)',
      'Oncology coverage including surgery + chemo',
      'Coverage for hereditary conditions',
    ],
  },
  {
    breedName: 'Pomeranian',
    slug: 'pomeranian',
    breedDataSlug: 'pomeranian', // not in breeds.ts — fallback handled in page
    sizeCategory: 'toy',
    lifespan: [12, 16],
    keyConditions: [
      'Patellar luxation',
      'Tracheal collapse',
      'Periodontal disease',
      'Alopecia X (black skin disease)',
      'Hypoglycemia',
      'Patent ductus arteriosus (PDA)',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Poms\' tiny jaws drive crowding, and periodontal disease is on their condition list. Fetch covers periodontal disease on its base plan.',
    alternateCarriers: ['pumpkin-pet', 'lemonade-pet'],
    sampleMonthlyPremium: [25, 55],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'Tracheal collapse coverage and stenting',
      'Small-breed orthopedic coverage (patella)',
      'Affordable premium tier',
    ],
  },
  {
    breedName: 'Shih Tzu',
    slug: 'shih-tzu',
    breedDataSlug: 'shih-tzu',
    sizeCategory: 'small',
    lifespan: [10, 16],
    keyConditions: [
      'Brachycephalic airway syndrome',
      'Intervertebral disc disease',
      'Periodontal disease',
      'Progressive retinal atrophy',
      'Corneal ulcers and proptosis',
      'Hypothyroidism',
      'Patellar luxation',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Shih Tzus face brachycephalic airway issues plus periodontal disease. Fetch covers periodontal disease and eye-related emergencies including proptosis.',
    alternateCarriers: ['pumpkin-pet', 'embrace'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'Ophthalmology emergency coverage',
      'BOAS surgery coverage',
      'IVDD coverage',
    ],
  },
  {
    breedName: 'Doberman Pinscher',
    slug: 'doberman-pinscher',
    breedDataSlug: 'doberman-pinscher',
    sizeCategory: 'large',
    lifespan: [10, 12],
    keyConditions: [
      'Dilated cardiomyopathy (DCM)',
      'Von Willebrand disease (vWD)',
      'Wobbler syndrome (cervical spondylomyelopathy)',
      'Hypothyroidism',
      'Hip dysplasia',
      'Chronic active hepatitis',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Dilated cardiomyopathy (DCM) leads the Doberman\'s condition list — diagnosis triggers years of cardiology visits, Holter monitors, and medication. Trupanion\'s per-condition deductible means DCM hits the deductible once, then 90% reimbursement runs for life.',
    alternateCarriers: ['healthy-paws', 'embrace'],
    sampleMonthlyPremium: [45, 85],
    keyCoverageNeeds: [
      'Per-condition deductible (chronic DCM management)',
      'Cardiology coverage (Holter, echocardiogram)',
      'Neurological/MRI coverage for Wobbler\'s',
      'Hereditary condition coverage',
    ],
  },
  {
    breedName: 'Great Dane',
    slug: 'great-dane',
    breedDataSlug: 'great-dane',
    sizeCategory: 'giant',
    lifespan: [7, 10],
    keyConditions: [
      'Gastric dilatation-volvulus (bloat)',
      'Dilated cardiomyopathy',
      'Hip and elbow dysplasia',
      'Hypertrophic osteodystrophy',
      'Osteosarcoma',
      'Wobbler syndrome',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Great Danes face bloat (an emergency surgery) and osteosarcoma. Pumpkin\'s 14-day orthopedic wait and unlimited-payout tier matter for a giant breed with rapid-growth conditions like hypertrophic osteodystrophy.',
    alternateCarriers: ['trupanion', 'healthy-paws'],
    sampleMonthlyPremium: [60, 110],
    keyCoverageNeeds: [
      'Short orthopedic waiting period (rapid growth conditions)',
      'Emergency surgery coverage (bloat)',
      'Unlimited annual payout',
      'Cardiology coverage',
    ],
  },
  {
    breedName: 'Siberian Husky',
    slug: 'siberian-husky',
    breedDataSlug: 'siberian-husky',
    sizeCategory: 'medium',
    lifespan: [12, 14],
    keyConditions: [
      'Hereditary cataracts',
      'Progressive retinal atrophy',
      'Corneal dystrophy',
      'Hip dysplasia',
      'Hypothyroidism',
      'Zinc-responsive dermatosis',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'embrace',
    recommendedReason:
      'Huskies are rated low for chronic risk on this page; their listed conditions are mostly eye disease (cataracts, PRA, corneal dystrophy) plus hip dysplasia. Ophthalmology specialist visits are covered on the Embrace base plan. The deductible reward: see the carrier\'s current terms.',
    alternateCarriers: ['lemonade-pet', 'pumpkin-pet'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Ophthalmology coverage (cataracts, PRA)',
      'Diminishing deductible',
      'Hereditary condition coverage',
      'Affordable premium for a low-chronic-risk profile',
    ],
  },
  {
    breedName: 'Cavalier King Charles Spaniel',
    slug: 'cavalier-king-charles-spaniel',
    breedDataSlug: 'cavalier-king-charles',
    sizeCategory: 'small',
    lifespan: [9, 14],
    keyConditions: [
      'Mitral valve disease (MVD)',
      'Syringomyelia and Chiari-like malformation',
      'Hip dysplasia',
      'Episodic falling syndrome',
      'Periodontal disease',
      'Patellar luxation',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Mitral valve disease leads the Cavalier\'s condition list — a chronic cardiac condition needing lifelong meds and serial echos. Trupanion\'s per-condition deductible plus unlimited payout fits lifelong cardiac management.',
    alternateCarriers: ['fetch-by-the-dodo', 'embrace'],
    sampleMonthlyPremium: [35, 80],
    keyCoverageNeeds: [
      'Per-condition deductible (lifelong cardiac management)',
      'Cardiology coverage (echo, meds)',
      'Neurological coverage (MRI for syringomyelia)',
      'Dental disease coverage',
    ],
  },
  {
    breedName: 'Bernese Mountain Dog',
    slug: 'bernese-mountain-dog',
    breedDataSlug: 'bernese-mountain-dog',
    sizeCategory: 'giant',
    lifespan: [7, 10],
    keyConditions: [
      'Histiocytic sarcoma',
      'Osteosarcoma',
      'Hip and elbow dysplasia',
      'Cruciate ligament disease',
      'Degenerative myelopathy',
      'Atopic dermatitis',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion',
    recommendedReason:
      'Bernese face histiocytic sarcoma and osteosarcoma plus hip, elbow, and cruciate disease. Trupanion\'s unlimited payout and per-condition deductible fit a cancer-plus-orthopedic profile.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'],
    sampleMonthlyPremium: [55, 110],
    keyCoverageNeeds: [
      'Unlimited annual payout (cancer + orthopedic stack)',
      'Short orthopedic waiting period',
      'Oncology coverage including chemotherapy',
      'Coverage for advanced imaging',
    ],
  },
  {
    breedName: 'Vizsla',
    slug: 'vizsla',
    breedDataSlug: 'vizsla',
    sizeCategory: 'medium',
    lifespan: [12, 14],
    keyConditions: [
      'Hip dysplasia',
      'Hypothyroidism',
      'Epilepsy',
      'Cancer (lymphoma, hemangiosarcoma)',
      'Sebaceous adenitis',
      'Progressive retinal atrophy',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'healthy-paws',
    recommendedReason:
      'Vizslas are rated moderate for chronic risk on this page, with cancer (lymphoma, hemangiosarcoma) as the main catastrophic risk. Healthy Paws offers an annual-limit choice that includes unlimited, which is the fit for worst-case oncology.',
    alternateCarriers: ['embrace', 'lemonade-pet'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Unlimited annual payout (for cancer risk)',
      'Annual deductible',
      'Neurology coverage (epilepsy)',
      'Hereditary condition coverage',
    ],
  },
  {
    breedName: 'Basset Hound',
    slug: 'basset-hound',
    breedDataSlug: 'basset-hound', // not in breeds.ts — fallback handled in page
    sizeCategory: 'medium',
    lifespan: [10, 12],
    keyConditions: [
      'Intervertebral disc disease',
      'Elbow dysplasia',
      'Glaucoma',
      'Ear infections (chronic otitis)',
      'Obesity-related arthritis',
      'Gastric dilatation-volvulus',
      'Thrombopathia',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Bassets\' long-back/short-leg structure puts IVDD and elbow dysplasia on its condition list. Pumpkin\'s 14-day orthopedic/neurological waiting period covers a young Basset before disc issues surface, and exam fees on the base plan handle the breed\'s chronic ear and eye visits.',
    alternateCarriers: ['embrace', 'trupanion'],
    sampleMonthlyPremium: [35, 70],
    keyCoverageNeeds: [
      'Short orthopedic/neurological waiting period',
      'IVDD surgical coverage',
      'Chronic ear infection coverage',
      'Ophthalmology coverage (glaucoma)',
    ],
  },
  {
    breedName: 'Collie',
    slug: 'collie',
    breedDataSlug: 'collie', // not in breeds.ts — fallback handled in page
    sizeCategory: 'large',
    lifespan: [12, 14],
    keyConditions: [
      'Collie eye anomaly (CEA)',
      'MDR1 multidrug sensitivity',
      'Progressive retinal atrophy',
      'Dermatomyositis',
      'Hip dysplasia',
      'Bloat',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'embrace',
    recommendedReason:
      'Collies are rated low for chronic risk on this page, with listed risk concentrated in hereditary eye disease and MDR1 drug reactions — both diagnostic-heavy rather than payout-heavy. Embrace covers prescription medication and hereditary conditions. Exam-fee coverage is optional. The deductible reward: see the carrier\'s current terms.',
    alternateCarriers: ['pumpkin-pet', 'lemonade-pet'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Ophthalmology coverage (CEA, PRA)',
      'Prescription coverage (MDR1-safe drug alternatives)',
      'Hereditary condition coverage',
      'Diminishing deductible',
    ],
  },
  {
    breedName: 'Pug',
    slug: 'pug',
    breedDataSlug: 'pug', // not in breeds.ts — fallback handled in page
    sizeCategory: 'small',
    lifespan: [12, 15],
    keyConditions: [
      'Brachycephalic airway syndrome',
      'Pug dog encephalitis (necrotizing meningoencephalitis)',
      'Hemivertebrae',
      'Corneal ulcers and proptosis',
      'Hip dysplasia',
      'Periodontal disease',
      'Obesity',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Pugs stack brachycephalic airway, eye emergencies, and periodontal disease. Fetch covers periodontal disease on the base plan, and its exam-fee coverage matters for a breed with eye conditions on its list.',
    alternateCarriers: ['pumpkin-pet', 'trupanion'],
    sampleMonthlyPremium: [35, 75],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'BOAS surgery coverage with no breed exclusion',
      'Ophthalmology emergency coverage',
      'Exam fees included',
    ],
  },
  {
    breedName: 'Chihuahua',
    slug: 'chihuahua',
    breedDataSlug: 'chihuahua', // not in breeds.ts — fallback handled in page
    sizeCategory: 'toy',
    lifespan: [14, 16],
    keyConditions: [
      'Patellar luxation',
      'Periodontal disease',
      'Hydrocephalus',
      'Hypoglycemia',
      'Tracheal collapse',
      'Mitral valve disease',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Chihuahuas have a 14–16 year lifespan on this page, and their tiny jaws drive periodontal disease — annual cleanings and extractions add up. Fetch covers dental disease on the base plan, which matters over a 16-year lifespan.',
    alternateCarriers: ['lemonade-pet', 'embrace'],
    sampleMonthlyPremium: [20, 50],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'Long policy lifespan support (16-year breed)',
      'Cardiology coverage (MVD in senior years)',
      'Small-breed orthopedic coverage',
    ],
  },
  {
    breedName: 'Border Collie',
    slug: 'border-collie',
    breedDataSlug: 'border-collie',
    sizeCategory: 'medium',
    lifespan: [12, 15],
    keyConditions: [
      'Collie eye anomaly',
      'MDR1 multidrug sensitivity',
      'Hip dysplasia',
      'Trapped neutrophil syndrome',
      'Epilepsy',
      'Border collie collapse',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'lemonade-pet',
    recommendedReason:
      'Border Collies are rated low for chronic risk on this page. The listed conditions to plan for are hip dysplasia, epilepsy, collie eye anomaly, and MDR1 drug sensitivity. Lemonade\'s entry-tier premium fits a low-risk profile.',
    alternateCarriers: ['embrace', 'figo'],
    sampleMonthlyPremium: [25, 55],
    keyCoverageNeeds: [
      'Affordable premium',
      'Coverage for sport/exercise injuries',
      'Hereditary condition coverage',
      'Clear claim filing process',
    ],
  },
  {
    breedName: 'Cocker Spaniel',
    slug: 'cocker-spaniel',
    breedDataSlug: 'cocker-spaniel',
    sizeCategory: 'medium',
    lifespan: [10, 14],
    keyConditions: [
      'Chronic ear infections (otitis externa)',
      'Progressive retinal atrophy',
      'Hereditary cataracts',
      'Autoimmune hemolytic anemia',
      'Hip dysplasia',
      'Dilated cardiomyopathy',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'moderate',
    recommendedCarrier: 'embrace',
    recommendedReason:
      'Chronic recurrent otitis leads the Cocker\'s condition list — frequent vet visits, repeated meds, occasional surgery. Embrace covers prescription medication on the base plan. Exam-fee coverage is optional. The deductible reward: see the carrier\'s current terms.',
    alternateCarriers: ['pumpkin-pet', 'fetch-by-the-dodo'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Exam fee coverage',
      'Prescription medication coverage',
      'Ophthalmology coverage',
      'Coverage for chronic ear surgeries',
    ],
  },
  {
    breedName: 'Dalmatian',
    slug: 'dalmatian',
    breedDataSlug: 'dalmatian', // not in breeds.ts — fallback handled in page
    sizeCategory: 'large',
    lifespan: [11, 13],
    keyConditions: [
      'Hyperuricemia and urate bladder stones',
      'Congenital deafness',
      'Atopic dermatitis',
      'Hip dysplasia',
      'Hypothyroidism',
      'Iris sphincter dysplasia',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Dalmatians\' unique uric acid metabolism drives urate stone formation, and stones can need surgical removal. Pumpkin\'s base plan covers exam fees, diagnostics, and the urinary-tract specialty work this breed needs.',
    alternateCarriers: ['embrace', 'spot'],
    sampleMonthlyPremium: [35, 75],
    keyCoverageNeeds: [
      'Urinary tract surgery coverage',
      'Coverage for prescription diet and meds',
      'Dermatology coverage',
      'Exam fees included',
    ],
  },
  {
    breedName: 'Newfoundland',
    slug: 'newfoundland',
    breedDataSlug: 'newfoundland', // not in breeds.ts — fallback handled in page
    sizeCategory: 'giant',
    lifespan: [9, 10],
    keyConditions: [
      'Subaortic stenosis (SAS)',
      'Hip and elbow dysplasia',
      'Cystinuria',
      'Cruciate ligament rupture',
      'Dilated cardiomyopathy',
      'Bloat',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet',
    recommendedReason:
      'Newfoundlands face cruciate ligament rupture and subaortic stenosis (SAS). Pumpkin\'s 14-day orthopedic wait plus unlimited-payout tier fits a breed with both orthopedic and cardiac conditions on its list.',
    alternateCarriers: ['trupanion', 'healthy-paws'],
    sampleMonthlyPremium: [55, 105],
    keyCoverageNeeds: [
      'Short orthopedic waiting period',
      'Cardiology coverage (SAS, DCM)',
      'Emergency surgery coverage (bloat)',
      'Unlimited annual payout',
    ],
  },
  {
    breedName: 'Boston Terrier',
    slug: 'boston-terrier',
    breedDataSlug: 'boston-terrier', // not in breeds.ts — fallback handled in page
    sizeCategory: 'small',
    lifespan: [11, 13],
    keyConditions: [
      'Brachycephalic airway syndrome',
      'Patellar luxation',
      'Hereditary cataracts',
      'Corneal ulcers',
      'Hemivertebrae',
      'Mast cell tumors',
      'Periodontal disease',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Bostons stack brachy airway, eye issues, and dental disease. Fetch covers dental disease and exam fees on the base plan.',
    alternateCarriers: ['pumpkin-pet', 'embrace'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'BOAS surgery coverage',
      'Ophthalmology emergency coverage',
      'Exam fees included',
    ],
  },
  {
    breedName: 'Maltese',
    slug: 'maltese',
    breedDataSlug: 'maltese', // not in breeds.ts — fallback handled in page
    sizeCategory: 'toy',
    lifespan: [12, 15],
    keyConditions: [
      'Periodontal disease',
      'Patellar luxation',
      'Portosystemic liver shunt',
      'Tracheal collapse',
      'White shaker dog syndrome',
      'Hypoglycemia',
      'Mitral valve disease',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'high',
    recommendedCarrier: 'fetch-by-the-dodo',
    recommendedReason:
      'Maltese have periodontal disease on their condition list, and crowding can lead to extractions. Fetch covers periodontal disease on the base plan, and exam-fee coverage matters for senior-year cardiac and tracheal monitoring.',
    alternateCarriers: ['lemonade-pet', 'embrace'],
    sampleMonthlyPremium: [25, 55],
    keyCoverageNeeds: [
      'Dental disease coverage',
      'Coverage for liver shunt diagnostics and surgery',
      'Tracheal collapse coverage',
      'Cardiology coverage (senior MVD)',
    ],
  },
]

export function getBreedInsuranceBySlug(
  slug: string,
): BreedInsuranceProfile | undefined {
  return INSURANCE_BREEDS.find((b) => b.slug === slug)
}

/** Map a breeds.ts slug (e.g. 'cavalier-king-charles') to the matching
 *  insurance profile if one exists. Used by /breeds/[slug] to cross-link
 *  into the insurance funnel. */
export function getBreedInsuranceByBreedDataSlug(
  breedDataSlug: string,
): BreedInsuranceProfile | undefined {
  return INSURANCE_BREEDS.find((b) => b.breedDataSlug === breedDataSlug)
}

/** Type-checked at module load — every recommended/alternate carrier slug
 *  must resolve to a real entry in CARRIERS. Fails the build otherwise. */
const CARRIER_SLUGS = new Set(CARRIERS.map((c) => c.slug))
for (const breed of INSURANCE_BREEDS) {
  if (!CARRIER_SLUGS.has(breed.recommendedCarrier)) {
    throw new Error(
      `insurance-by-breed: ${breed.slug} references unknown carrier ${breed.recommendedCarrier}`,
    )
  }
  for (const alt of breed.alternateCarriers) {
    if (!CARRIER_SLUGS.has(alt)) {
      throw new Error(
        `insurance-by-breed: ${breed.slug} references unknown alternate carrier ${alt}`,
      )
    }
  }
}
