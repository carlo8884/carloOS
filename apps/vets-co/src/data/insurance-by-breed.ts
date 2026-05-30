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
 *   - High orthopedic risk → Pumpkin (14-day ortho wait) or Trupanion (per-condition deductible)
 *   - High dental risk (toy / brachy) → Fetch by The Dodo
 *   - High chronic/cancer risk → Trupanion (unlimited, per-condition deductible)
 *   - Low risk + healthy puppy → Lemonade
 *   - Older / adopted dog with past condition → ManyPets (curable PE coverage)
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
      'Goldens have a ~60% lifetime cancer rate driven by hemangiosarcoma and lymphoma — treatment runs $5,000–20,000+. Trupanion has no annual or lifetime payout cap and uses a per-condition deductible, so a multi-year cancer claim hits the deductible once. No other carrier protects this breed better against the worst-case scenario.',
    alternateCarriers: ['healthy-paws', 'pumpkin-pet'],
    sampleMonthlyPremium: [50, 85],
    keyCoverageNeeds: [
      'Unlimited annual payout (cancer treatment exceeds $10K limits)',
      'Hereditary and congenital condition coverage',
      'Short orthopedic waiting period (hip/elbow dysplasia common)',
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
      'Labs are the #1 breed for hip dysplasia claims and CCL rupture (~$4,500 per side). Pumpkin\'s 14-day orthopedic waiting period — vs. the industry-standard 6 months — means a Lab with early hip signs is covered before symptoms escalate. Critical when buying for a Lab puppy.',
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
      'Frenchies face a triple threat — BOAS surgery ($2,500–5,000), dental disease (their crowded brachycephalic jaw drives early periodontal loss), and skin/eye conditions. Fetch is one of the only carriers that covers periodontal disease on the base plan, plus behavioral therapy for anxiety common in the breed.',
    alternateCarriers: ['trupanion', 'pumpkin-pet'],
    sampleMonthlyPremium: [55, 95],
    keyCoverageNeeds: [
      'Dental disease coverage (most carriers exclude this)',
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
      'GSDs have the highest hip dysplasia rate of any AKC breed and face bloat ($5,000+ emergency surgery). Pumpkin\'s 14-day orthopedic wait covers a young GSD before screening films are even read, and the unlimited-payout option handles bloat plus subsequent DM care.',
    alternateCarriers: ['trupanion', 'embrace'],
    sampleMonthlyPremium: [45, 80],
    keyCoverageNeeds: [
      'Short orthopedic waiting period',
      'Emergency surgery coverage (bloat is time-critical)',
      'Coverage for ongoing neurological care (DM)',
      'Exam fees included (frequent vet visits)',
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
      'Aussies face episodic conditions (epilepsy, MDR1 drug reactions) that need diagnostics and prescription coverage rather than catastrophic payouts. Embrace covers prescription medication on the base plan and the diminishing deductible rewards the breed\'s typically clean middle years.',
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
      'Poodles tend toward chronic endocrine disease (Addison\'s, Cushing\'s) requiring lifelong meds and lab monitoring. Embrace covers prescription drugs, the diminishing deductible rewards the breed\'s long lifespan, and exam fees are included for the regular bloodwork these conditions require.',
    alternateCarriers: ['trupanion', 'healthy-paws'],
    sampleMonthlyPremium: [35, 75],
    keyCoverageNeeds: [
      'Prescription medication coverage (lifelong endocrine meds)',
      'Coverage for routine bloodwork on chronic conditions',
      'Exam fees included',
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
      'English Bulldogs have the shortest lifespan of any major breed (~8–10 yr) driven by stacked chronic conditions — BOAS, dermatology, hips, eyes. Trupanion\'s per-condition deductible and unlimited payout matter when a single dog files claims against 4–5 separate ongoing conditions over its life.',
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
      'Beagles are one of the lowest-claim breeds in the AKC top 50. Most claims are routine (ear infections, weight-related issues). Lemonade\'s low premiums and fast in-app claim processing match the risk profile — there\'s no need to pay Trupanion-level premiums for a healthy Beagle.',
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
      '~25% of Dachshunds will experience IVDD; emergency disc surgery costs $6,000–10,000 and most affected dogs need more than one episode. Pumpkin\'s 14-day orthopedic/neurological waiting period plus dental disease coverage hits both of the breed\'s top risks.',
    alternateCarriers: ['trupanion', 'fetch-by-the-dodo'],
    sampleMonthlyPremium: [35, 70],
    keyCoverageNeeds: [
      'IVDD surgical coverage (most likely large claim)',
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
      'Rotts have the highest osteosarcoma rate of any AKC breed (~12% lifetime). Amputation plus chemo runs $10,000–15,000. Trupanion\'s unlimited payout and per-condition deductible mean one cancer diagnosis doesn\'t cap or restart the deductible across a multi-year treatment.',
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
      'Yorkies have the worst dental risk profile of any AKC breed — 80%+ have periodontal disease by age 3, and full-mouth extractions cost $1,500–3,000. Fetch is one of very few carriers that cover periodontal disease (not just dental trauma) on the base plan.',
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
      'Boxers face a stacked cancer risk (mast cell tumors and lymphoma combined affect ~40% of the breed) plus inherited cardiomyopathy. Trupanion\'s unlimited payout handles oncology + cardiology in the same year, and the per-condition deductible favors lifelong cardiac monitoring.',
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
      'Poms\' tiny jaws drive crowding and severe periodontal disease by middle age — Fetch is the rare carrier covering periodontal disease on its base plan. The breed\'s tracheal collapse and patellar luxation are also well-covered.',
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
      'Shih Tzus face brachycephalic airway issues plus the worst dental disease profile after Yorkies. Fetch covers periodontal disease — the most common claim for this breed — and eye-related emergencies including proptosis.',
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
      'Dobermans have the highest DCM rate of any breed (~50% lifetime in some lines) — diagnosis triggers years of cardiology visits, Holter monitors, and medication. Trupanion\'s per-condition deductible means DCM hits the deductible once, then 90% reimbursement runs for life.',
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
      'Great Danes top the bloat-mortality list (~40% lifetime risk, $5,000+ emergency surgery) and have the highest osteosarcoma rate after Rottweilers. Pumpkin\'s 14-day orthopedic wait and unlimited-payout tier matter when this giant breed often files its first major claim before age 3.',
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
      'Huskies are generally healthy — the dominant claim categories are ophthalmology and orthopedic. Embrace\'s diminishing deductible rewards the breed\'s typically long claim-free middle years, and ophthalmology specialist visits are covered on the base plan.',
    alternateCarriers: ['lemonade-pet', 'pumpkin-pet'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Ophthalmology coverage (cataracts, PRA)',
      'Diminishing deductible (healthy mid-life)',
      'Hereditary condition coverage',
      'Affordable premium for a healthy breed',
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
      'Nearly 100% of Cavaliers develop mitral valve disease by age 10 — a known, near-certain chronic cardiac condition needing lifelong meds and serial echos. Trupanion\'s per-condition deductible plus unlimited payout is the cleanest match for a breed where the expensive condition is predictable, not hypothetical.',
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
      'Bernese have the highest cancer-mortality rate of any AKC breed — histiocytic sarcoma alone accounts for ~25% of deaths. Combined with high orthopedic claims, the breed routinely exceeds any annual payout cap. Trupanion\'s unlimited payout and per-condition deductible are non-negotiable here.',
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
      'Vizslas are generally healthy with an above-average cancer rate as the main catastrophic risk. Healthy Paws\' unlimited payout handles worst-case oncology, while the annual deductible rewards the typical year with only minor claims.',
    alternateCarriers: ['embrace', 'lemonade-pet'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Unlimited annual payout (for cancer risk)',
      'Annual deductible (most years have few claims)',
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
      'Bassets\' long-back/short-leg structure drives high IVDD and elbow dysplasia rates. Pumpkin\'s 14-day orthopedic/neurological waiting period covers a young Basset before disc issues surface, and exam fees on the base plan handle the breed\'s chronic ear and eye visits.',
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
      'Collies are generally healthy with concentrated risk in hereditary eye disease and MDR1 drug reactions — both diagnostic-heavy rather than payout-heavy. Embrace covers exam fees, prescription medication, and hereditary conditions; the diminishing deductible suits the breed\'s long healthy stretch.',
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
      'Pugs stack brachycephalic airway, eye emergencies, and periodontal disease. Fetch is one of the only carriers that covers periodontal disease on the base plan, and its exam-fee coverage matters for a breed whose owners visit the vet frequently for eye and skin issues.',
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
      'Chihuahuas live the longest of any AKC breed, but their tiny jaws drive severe periodontal disease — annual cleanings and extractions add up. Fetch covers dental disease on the base plan, which becomes the dominant claim category over a 16-year lifespan.',
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
      'Border Collies are among the healthiest medium-size breeds — most claims are sports-injury and routine orthopedic. Lemonade\'s low premiums and fast claims match a low-risk profile; high-coverage Trupanion tier isn\'t justified actuarially.',
    alternateCarriers: ['embrace', 'figo'],
    sampleMonthlyPremium: [25, 55],
    keyCoverageNeeds: [
      'Affordable premium',
      'Coverage for sport/exercise injuries',
      'Hereditary condition coverage',
      'Fast claims processing',
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
      'Cockers\' top claim category is chronic recurrent otitis — frequent vet visits, repeated meds, occasional surgery. Embrace covers exam fees and prescription medication on the base plan; the diminishing deductible rewards owners who manage ears proactively.',
    alternateCarriers: ['pumpkin-pet', 'fetch-by-the-dodo'],
    sampleMonthlyPremium: [30, 65],
    keyCoverageNeeds: [
      'Exam fee coverage (frequent visits)',
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
      'Dalmatians\' unique uric acid metabolism drives urate stone formation — surgical removal runs $3,000–5,000 and many dogs have repeat episodes. Pumpkin\'s base plan covers exam fees, diagnostics, and the urinary-tract specialty work this breed needs.',
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
      'Newfoundlands\' giant frame drives high CCL rupture rates ($4,500–6,000 per side), and SAS is the leading inherited cardiac killer. Pumpkin\'s 14-day orthopedic wait plus unlimited-payout tier covers a breed that often files multiple large claims before age 5.',
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
      'Bostons stack brachy airway, eye issues, and high dental disease — three categories most budget carriers exclude or limit. Fetch covers dental disease and exam fees on the base plan, addressing the breed\'s top two claim drivers.',
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
      'Maltese have one of the highest periodontal disease rates of any toy breed — early-life crowding drives extractions costing $1,500–3,000. Fetch covers periodontal disease on the base plan, and exam-fee coverage matters for senior-year cardiac and tracheal monitoring.',
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
