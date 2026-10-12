/**
 * Vets.co — Cat breed-specific pet insurance routing data.
 *
 * Companion to insurance-by-breed.ts (dog breeds). Powers the cat-breed
 * dimension of the programmatic /pet-insurance/breeds/[breed]/[state]
 * matrix — adds ~1,300 long-tail SEO pages (25 cat breeds × 52 states).
 *
 * Vets.co is INSURANCE ONLY per policy §5. Cat insurance is a smaller
 * market than dog insurance (~35% of total pet insurance policies) but
 * has growing carrier interest. ASPCA Pet Health Insurance and Nationwide
 * are stronger in cats than the dog-focused carriers like Trupanion.
 *
 * Editorial discipline: cat-breed hereditary conditions below are drawn
 * from veterinary literature (AAFP breed-disease consensus, ACVIM cardiology
 * databases, Winn Feline Foundation health resources, peer-reviewed
 * breed-prevalence studies). They should be verified by a veterinary
 * editor before launch. Marked [NEEDS-VET-REVIEW] where uncertain.
 *
 * sampleMonthlyPremium is the young-adult band for a $5K annual limit,
 * $500 deductible, 80% reimbursement policy. Senior premiums (10+) are
 * typically 1.5-2x.
 */

import { type CarrierSlug } from './insurance-carriers'
import { type SizeCategory, type RiskLevel, type BreedInsuranceProfile } from './insurance-by-breed'

/**
 * Cat breeds reuse the same BreedInsuranceProfile interface as dogs.
 * SizeCategory mappings:
 *   - "small"  → petite cats (Singapura, Devon Rex, Cornish Rex)
 *   - "medium" → typical domestic cats (most breeds)
 *   - "large"  → Maine Coon, Norwegian Forest, Ragdoll, Savannah
 *   - "toy" and "giant" are not used for cats
 */

export const CAT_INSURANCE_BREEDS: BreedInsuranceProfile[] = [
  {
    breedName: 'Maine Coon',
    slug: 'maine-coon',
    breedDataSlug: 'maine-coon',
    sizeCategory: 'large',
    lifespan: [12, 15],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM — Maine Coon-specific MYBPC3 mutation)',
      'Hip dysplasia',
      'Spinal muscular atrophy (SMA)',
      'Polycystic kidney disease (PKD)',
      'Periodontal disease',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'moderate',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Maine Coons carry a breed-specific HCM mutation (MYBPC3) and are rated high for orthopedic risk on this page (hip dysplasia, SMA). Trupanion has no annual or lifetime payout cap and uses a per-condition deductible — for a cat with both a cardiac and orthopedic claim history, this structure fits multi-year claim totals.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [30, 55],
    keyCoverageNeeds: [
      'Echocardiogram coverage for HCM screening',
      'Orthopedic coverage with short waiting period',
      'High annual/lifetime payout limits',
    ],
  },
  {
    breedName: 'Persian',
    slug: 'persian',
    breedDataSlug: 'persian',
    sizeCategory: 'medium',
    lifespan: [12, 17],
    keyConditions: [
      'Polycystic kidney disease (PKD-1 mutation)',
      'Brachycephalic airway syndrome',
      'Progressive retinal atrophy',
      'Dental malocclusion and periodontal disease (skull conformation)',
      'Entropion (eyelid inversion)',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'high',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Persians carry the PKD-1 hereditary kidney disease mutation and have brachycephalic airway issues that can require dental/airway surgery. Pumpkin\'s base coverage includes hereditary conditions without rider add-ons and includes dental coverage — Persians need both.',
    alternateCarriers: ['trupanion', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [32, 60],
    keyCoverageNeeds: [
      'Hereditary condition coverage (specifically PKD)',
      'Full dental coverage (not just illness-related)',
      'Brachycephalic-related airway treatments',
    ],
  },
  {
    breedName: 'Ragdoll',
    slug: 'ragdoll',
    breedDataSlug: 'ragdoll',
    sizeCategory: 'large',
    lifespan: [12, 17],
    keyConditions: [
      'Hypertrophic cardiomyopathy (Ragdoll-specific MYBPC3 mutation, different from Maine Coon mutation)',
      'Urinary tract issues (bladder stones, idiopathic cystitis)',
      'Periodontal disease',
      'Feline mucopolysaccharidosis',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Ragdolls carry an HCM mutation distinct from the Maine Coon\'s. Cardiology workups and chronic cardiac medication add up quickly — Trupanion\'s per-condition deductible and no payout cap fit this profile.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 50],
    keyCoverageNeeds: [
      'Cardiac specialist coverage (echocardiograms, cardiology consults)',
      'Long-term medication coverage (cardiac meds can be lifelong)',
      'Urinary tract issue coverage',
    ],
  },
  {
    breedName: 'British Shorthair',
    slug: 'british-shorthair',
    breedDataSlug: 'british-shorthair',
    sizeCategory: 'medium',
    lifespan: [13, 17],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM)',
      'Polycystic kidney disease (PKD — overlap with Persian lineage)',
      'Hemophilia B (males primarily)',
      'Obesity (breed predisposition; not hereditary but insurance-relevant)',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'British Shorthairs share PKD risk with Persians and have a moderate cardiac risk profile. Pumpkin\'s hereditary condition coverage at base tier fits this profile; the breed\'s longevity means insurance pays out across many years.',
    alternateCarriers: ['embrace', 'trupanion'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [25, 45],
    keyCoverageNeeds: [
      'Hereditary condition coverage (PKD)',
      'Cardiac workup coverage',
      'Long-term claim continuity (low chronic-condition reset)',
    ],
  },
  {
    breedName: 'Bengal',
    slug: 'bengal',
    breedDataSlug: 'bengal',
    sizeCategory: 'medium',
    lifespan: [12, 16],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM)',
      'Progressive retinal atrophy (PRA-b)',
      'Patellar luxation',
      'Bengal-specific anesthetic sensitivity',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'healthy-paws' as CarrierSlug,
    recommendedReason:
      'Bengals have patellar luxation on their condition list on top of breed-specific cardiac and ophthalmologic risks. Healthy Paws offers an annual-limit choice that includes unlimited, which fits that mix.',
    alternateCarriers: ['pumpkin-pet', 'trupanion'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 50],
    keyCoverageNeeds: [
      'Ophthalmology coverage (PRA progression monitoring)',
      'Orthopedic coverage (patellar luxation surgery)',
      'No payout cap for cardiac care',
    ],
  },
  {
    breedName: 'Sphynx',
    slug: 'sphynx',
    breedDataSlug: 'sphynx',
    sizeCategory: 'medium',
    lifespan: [8, 14],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM)',
      'Hereditary myopathy (Sphynx-specific muscle weakness)',
      'Urticaria pigmentosa (skin condition)',
      'Periodontal disease (early onset; lack of fur correlates with grooming hygiene issues)',
      'Skin issues (sunburn, oily-skin acne)',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'high',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Sphynx cats face HCM and hereditary myopathy plus complex dermatologic needs. Pumpkin\'s hereditary coverage at base tier plus dental coverage fits this profile; the breed\'s shorter lifespan means insurance value materializes earlier.',
    alternateCarriers: ['trupanion', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [35, 65],
    keyCoverageNeeds: [
      'HCM screening and cardiac specialist coverage',
      'Dermatology coverage',
      'Dental coverage including extractions',
    ],
  },
  {
    breedName: 'Siamese',
    slug: 'siamese',
    breedDataSlug: 'siamese',
    sizeCategory: 'medium',
    lifespan: [15, 20],
    keyConditions: [
      'Amyloidosis (liver and kidney protein deposition)',
      'Asthma',
      'Progressive retinal atrophy',
      'Dental disease (skull conformation)',
      'Hyperesthesia syndrome',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'high',
    recommendedCarrier: 'embrace' as CarrierSlug,
    recommendedReason:
      'Siamese cats have a 15–20 year lifespan on this page, so insurance pays out across many years — the breed lives long enough for chronic conditions (amyloidosis, asthma) to materialize. Embrace\'s Healthy Pet Deductible decreases each claim-free year, ideal for a long-lived breed.',
    alternateCarriers: ['pumpkin-pet', 'trupanion'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [24, 45],
    keyCoverageNeeds: [
      'Long-term chronic condition coverage (asthma is lifelong)',
      'Dental coverage',
      'Renal disease coverage (amyloidosis affects kidneys)',
    ],
  },
  {
    breedName: 'Russian Blue',
    slug: 'russian-blue',
    breedDataSlug: 'russian-blue',
    sizeCategory: 'medium',
    lifespan: [15, 20],
    keyConditions: [
      'No breed-specific hereditary condition listed',
      'Obesity tendency (insurance-relevant though not hereditary)',
      'Urinary tract issues',
      'Dental disease (older age)',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'lemonade-pet' as CarrierSlug,
    recommendedReason:
      'Russian Blues are rated low for chronic and orthopedic risk on this page, with no breed-specific hereditary condition listed. Lemonade\'s low entry premium fits a low-risk profile — paying high premiums for a healthy breed wastes coverage budget.',
    alternateCarriers: ['embrace', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [18, 35],
    keyCoverageNeeds: [
      'Standard accident + illness coverage',
      'Lower deductible',
    ],
  },
  {
    breedName: 'Scottish Fold',
    slug: 'scottish-fold',
    breedDataSlug: 'scottish-fold',
    sizeCategory: 'medium',
    lifespan: [11, 15],
    keyConditions: [
      'Osteochondrodysplasia (Scottish Fold disease — degenerative cartilage/bone defect from the fold-gene)',
      'Polycystic kidney disease (PKD)',
      'Hypertrophic cardiomyopathy (HCM)',
      'Joint pain and arthritis (related to osteochondrodysplasia)',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Scottish Folds carry an inherent musculoskeletal disorder from the fold-gene that causes progressive joint disease. Lifetime orthopedic and pain-management costs are high. Trupanion\'s per-condition deductible and no annual cap fit decade-long claim totals on a single condition.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [32, 60],
    keyCoverageNeeds: [
      'Orthopedic coverage with no per-condition cap',
      'Long-term medication and physical therapy coverage',
      'Cardiac and renal coverage (HCM + PKD)',
    ],
  },
  {
    breedName: 'Norwegian Forest Cat',
    slug: 'norwegian-forest-cat',
    breedDataSlug: 'norwegian-forest-cat',
    sizeCategory: 'large',
    lifespan: [14, 16],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM)',
      'Glycogen storage disease IV (genetic test available; fatal if untreated in kittens)',
      'Hip dysplasia',
      'Retinal dysplasia',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Norwegian Forest Cats have hereditary conditions that span cardiac, metabolic, and orthopedic categories. Pumpkin\'s broad base coverage including hereditary conditions fits this profile.',
    alternateCarriers: ['trupanion', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [25, 45],
    keyCoverageNeeds: [
      'Hereditary condition coverage',
      'Cardiac specialist access',
      'Orthopedic coverage',
    ],
  },
  {
    breedName: 'Abyssinian',
    slug: 'abyssinian',
    breedDataSlug: 'abyssinian',
    sizeCategory: 'medium',
    lifespan: [9, 15],
    keyConditions: [
      'Progressive retinal atrophy (PRA — Abyssinian-specific mutation)',
      'Pyruvate kinase deficiency (PK-Def)',
      'Amyloidosis',
      'Patellar luxation',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'moderate',
    dentalRisk: 'low',
    recommendedCarrier: 'healthy-paws' as CarrierSlug,
    recommendedReason:
      'Abyssinians have ophthalmologic and metabolic hereditary risks. Healthy Paws offers an annual-limit choice that includes unlimited, which fits a moderate-risk profile.',
    alternateCarriers: ['pumpkin-pet', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [25, 45],
    keyCoverageNeeds: [
      'Ophthalmology coverage (PRA progression)',
      'Hereditary metabolic disorder coverage',
    ],
  },
  {
    breedName: 'American Shorthair',
    slug: 'american-shorthair',
    breedDataSlug: 'american-shorthair',
    sizeCategory: 'medium',
    lifespan: [15, 20],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM — in some bloodlines)',
      'Obesity (general predisposition)',
      'Dental disease (older age)',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'lemonade-pet' as CarrierSlug,
    recommendedReason:
      'American Shorthairs are rated low for chronic and orthopedic risk on this page, with a 15–20 year lifespan. Lemonade\'s entry-tier premium fits a low-risk profile; pay for higher coverage only if claims trend high.',
    alternateCarriers: ['embrace', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [18, 35],
    keyCoverageNeeds: ['Standard accident + illness coverage', 'Dental coverage for older age'],
  },
  {
    breedName: 'Burmese',
    slug: 'burmese',
    breedDataSlug: 'burmese',
    sizeCategory: 'medium',
    lifespan: [16, 18],
    keyConditions: [
      'Diabetes mellitus',
      'Gangliosidosis (lipid storage disorder)',
      'Hypokalemia (Burmese-specific potassium deficiency)',
      'Craniofacial defect',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Diabetes mellitus is on the Burmese condition list — lifelong insulin and monitoring costs accumulate quickly. Trupanion\'s per-condition deductible (paid once, then 90% coverage forever) is purpose-built for chronic conditions like diabetes.',
    alternateCarriers: ['pumpkin-pet', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 50],
    keyCoverageNeeds: [
      'Diabetes / endocrine coverage with no chronic-claim reset',
      'Long-term medication coverage (insulin)',
      'Glucose monitoring supply coverage',
    ],
  },
  {
    breedName: 'Birman',
    slug: 'birman',
    breedDataSlug: 'birman',
    sizeCategory: 'medium',
    lifespan: [12, 16],
    keyConditions: [
      'Hypertrophic cardiomyopathy (HCM)',
      'Congenital hypotrichosis',
      'Spongiform degeneration (CNS condition)',
      'Dental disease',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'embrace' as CarrierSlug,
    recommendedReason:
      'Birmans are rated moderate for chronic risk on this page, with HCM as the listed cardiac condition. Embrace\'s Healthy Pet Deductible decreases for claim-free years.',
    alternateCarriers: ['pumpkin-pet', 'lemonade-pet'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [22, 42],
    keyCoverageNeeds: [
      'Cardiac specialist coverage',
      'Standard accident + illness',
    ],
  },
  {
    breedName: 'Devon Rex',
    slug: 'devon-rex',
    breedDataSlug: 'devon-rex',
    sizeCategory: 'small',
    lifespan: [9, 15],
    keyConditions: [
      'Hereditary myopathy (Devon Rex muscle weakness)',
      'Hip dysplasia',
      'Patellar luxation',
      'Hypertrophic cardiomyopathy (HCM)',
      'Skin conditions (curly coat predisposition)',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Devon Rex cats have hereditary muscle and orthopedic conditions that benefit from per-condition deductible coverage. Trupanion\'s structure protects against multi-year orthopedic claims.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 50],
    keyCoverageNeeds: [
      'Orthopedic coverage with short waiting period',
      'Hereditary myopathy coverage',
    ],
  },
  {
    breedName: 'Oriental Shorthair',
    slug: 'oriental-shorthair',
    breedDataSlug: 'oriental-shorthair',
    sizeCategory: 'medium',
    lifespan: [12, 15],
    keyConditions: [
      'Amyloidosis (Siamese-lineage shared risk)',
      'Asthma',
      'Dental disease (skull conformation similar to Siamese)',
      'Hypertrophic cardiomyopathy',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'low',
    dentalRisk: 'high',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Oriental Shorthairs share much of the Siamese hereditary risk profile (amyloidosis, asthma). Pumpkin\'s base coverage including hereditary conditions and dental coverage fits this profile.',
    alternateCarriers: ['embrace', 'trupanion'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [24, 45],
    keyCoverageNeeds: [
      'Dental coverage (full, not illness-only)',
      'Asthma management coverage',
      'Hereditary condition coverage',
    ],
  },
  {
    breedName: 'Exotic Shorthair',
    slug: 'exotic-shorthair',
    breedDataSlug: 'exotic-shorthair',
    sizeCategory: 'medium',
    lifespan: [12, 15],
    keyConditions: [
      'Polycystic kidney disease (PKD, inherited from Persian lineage)',
      'Brachycephalic airway syndrome',
      'Dental malocclusion',
      'Progressive retinal atrophy',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'low',
    dentalRisk: 'high',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Exotic Shorthairs are the short-haired Persian equivalent — same PKD risk and brachycephalic issues. Pumpkin\'s hereditary coverage and dental coverage match this profile.',
    alternateCarriers: ['trupanion', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 52],
    keyCoverageNeeds: [
      'Hereditary condition coverage (PKD)',
      'Dental coverage',
      'Brachycephalic-related airway treatments',
    ],
  },
  {
    breedName: 'Turkish Angora',
    slug: 'turkish-angora',
    breedDataSlug: 'turkish-angora',
    sizeCategory: 'medium',
    lifespan: [13, 17],
    keyConditions: [
      'Deafness (in white blue-eyed cats specifically)',
      'Hypertrophic cardiomyopathy',
      'Ataxia (Turkish Angora-specific neurologic condition)',
      'Generally healthy otherwise',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'low',
    recommendedCarrier: 'embrace' as CarrierSlug,
    recommendedReason:
      'Turkish Angoras are rated low for chronic risk on this page, with a few breed-specific conditions. Embrace\'s claim-free deductible decrease fits that profile.',
    alternateCarriers: ['lemonade-pet', 'pumpkin-pet'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [20, 40],
    keyCoverageNeeds: ['Standard accident + illness', 'Neurology coverage if Ataxia history'],
  },
  {
    breedName: 'Manx',
    slug: 'manx',
    breedDataSlug: 'manx',
    sizeCategory: 'medium',
    lifespan: [9, 14],
    keyConditions: [
      'Manx syndrome (taillessness gene causes spinal/intestinal/urinary defects in a subset)',
      'Spina bifida',
      'Megacolon',
      'Bladder dysfunction',
    ],
    chronicRisk: 'high',
    orthopedicRisk: 'high',
    dentalRisk: 'low',
    recommendedCarrier: 'trupanion' as CarrierSlug,
    recommendedReason:
      'Manx cats with Manx syndrome require lifelong management of spinal, urinary, and intestinal issues. Trupanion\'s no-cap structure and per-condition deductible fit decade-long claim totals for the syndrome cases.',
    alternateCarriers: ['pumpkin-pet', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [30, 60],
    keyCoverageNeeds: [
      'Hereditary congenital defect coverage',
      'Long-term incontinence/urinary care',
      'Orthopedic and neurology coverage',
    ],
  },
  {
    breedName: 'Tonkinese',
    slug: 'tonkinese',
    breedDataSlug: 'tonkinese',
    sizeCategory: 'medium',
    lifespan: [12, 16],
    keyConditions: [
      'Generally healthy breed (Siamese × Burmese hybrid)',
      'Dental disease',
      'Asthma',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'lemonade-pet' as CarrierSlug,
    recommendedReason:
      'Tonkinese cats are rated low for chronic and orthopedic risk on this page. Lemonade\'s entry-tier premium fits the risk profile.',
    alternateCarriers: ['embrace', 'pumpkin-pet'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [18, 35],
    keyCoverageNeeds: ['Standard accident + illness', 'Dental coverage'],
  },
  {
    breedName: 'Ragamuffin',
    slug: 'ragamuffin',
    breedDataSlug: 'ragamuffin',
    sizeCategory: 'large',
    lifespan: [13, 16],
    keyConditions: [
      'Hypertrophic cardiomyopathy (Ragdoll-lineage)',
      'Polycystic kidney disease',
      'Obesity tendency',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'low',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Ragamuffins share Ragdoll-lineage hereditary risks. Pumpkin\'s hereditary coverage at base tier fits this profile.',
    alternateCarriers: ['trupanion', 'embrace'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [24, 45],
    keyCoverageNeeds: ['Hereditary condition coverage', 'Cardiac specialist access'],
  },
  {
    breedName: 'Egyptian Mau',
    slug: 'egyptian-mau',
    breedDataSlug: 'egyptian-mau',
    sizeCategory: 'medium',
    lifespan: [13, 16],
    keyConditions: [
      'Leukodystrophy (CNS disorder; some Egyptian Mau lines)',
      'Heart murmurs (cardiac workup recommended)',
      'Generally healthy otherwise',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'low',
    recommendedCarrier: 'lemonade-pet' as CarrierSlug,
    recommendedReason:
      'Egyptian Maus are rated low for chronic risk on this page. Lemonade\'s low premium fits that profile; pay for higher coverage only if specific risk factors are confirmed.',
    alternateCarriers: ['embrace', 'pumpkin-pet'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [20, 40],
    keyCoverageNeeds: ['Standard accident + illness'],
  },
  {
    breedName: 'Savannah',
    slug: 'savannah',
    breedDataSlug: 'savannah',
    sizeCategory: 'large',
    lifespan: [12, 20],
    keyConditions: [
      'Hypertrophic cardiomyopathy (in some lines)',
      'Megaesophagus',
      'Pyruvate kinase deficiency (Abyssinian-lineage)',
    ],
    chronicRisk: 'moderate',
    orthopedicRisk: 'low',
    dentalRisk: 'low',
    recommendedCarrier: 'pumpkin-pet' as CarrierSlug,
    recommendedReason:
      'Savannahs are a hybrid breed (serval × domestic) with breed-specific hereditary risks. Pumpkin\'s hereditary coverage at base tier is appropriate.',
    alternateCarriers: ['trupanion', 'healthy-paws'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [28, 55],
    keyCoverageNeeds: ['Hereditary condition coverage', 'Cardiac specialist coverage'],
  },
  {
    breedName: 'Ocicat',
    slug: 'ocicat',
    breedDataSlug: 'ocicat',
    sizeCategory: 'medium',
    lifespan: [12, 18],
    keyConditions: [
      'Generally healthy breed',
      'Dental disease (typical for older cats)',
      'Periodic anemia',
    ],
    chronicRisk: 'low',
    orthopedicRisk: 'low',
    dentalRisk: 'moderate',
    recommendedCarrier: 'lemonade-pet' as CarrierSlug,
    recommendedReason:
      'Ocicats are rated low for chronic risk on this page. Lemonade fits the risk profile.',
    alternateCarriers: ['embrace', 'pumpkin-pet'] as [CarrierSlug, CarrierSlug],
    sampleMonthlyPremium: [18, 35],
    keyCoverageNeeds: ['Standard accident + illness', 'Dental coverage'],
  },
]
