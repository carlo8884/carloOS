/**
 * Dog.com — Pet insurance carrier reference data.
 *
 * Source of truth for breed-specific insurance recommendations. Every claim
 * here is sourced from each carrier's published policy documents and rate
 * filings, not marketing pages. Updated 2026-05.
 *
 * Used by:
 *   - src/data/insurance-by-breed.ts (recommended/alternate carrier lookups)
 *   - src/app/pet-insurance/breeds/[breed]/page.tsx (carrier cards)
 *
 * Architect S6 — monetization. Each carrier links out via affiliate referral
 * URLs; gross commission $40–80 per converted policy depending on program.
 */

export type CarrierSlug =
  | 'lemonade-pet'
  | 'pumpkin-pet'
  | 'manypets'
  | 'trupanion'
  | 'embrace'
  | 'healthy-paws'
  | 'spot'
  | 'figo'
  | 'fetch-by-the-dodo'

export interface InsuranceCarrier {
  slug: CarrierSlug
  name: string
  /** One-line positioning — what this carrier wins on. */
  tagline: string
  /** Direct/affiliate referral URL. */
  url: string
  /** Affiliate program identifier (forwarded to AffiliateLink for tracking). */
  affiliateProgram: string
  /** Marketing one-paragraph description, factual. */
  description: string
  /** Reimbursement options. */
  reimbursement: string
  /** Deductible model. */
  deductibleType: 'annual' | 'per-incident'
  /** Annual payout limit. */
  annualLimit: string
  /** Illness waiting period in days. */
  illnessWaitDays: number
  /** Injury waiting period in days. */
  injuryWaitDays: number
  /** Orthopedic / cruciate-specific waiting period in days. Many carriers
   *  add a separate 6-month wait for orthopedic claims; this is the
   *  single most important spec for high-orthopedic-risk breeds. */
  orthopedicWaitDays: number
  /** Whether dental disease (not just dental injury) is covered. */
  coversDentalDisease: boolean
  /** Whether veterinary exam fees are covered on the base plan. */
  coversExamFees: boolean
  /** Whether the carrier pays the vet directly at checkout. */
  paysVetDirect: boolean
  /** Whether curable pre-existing conditions can be covered after a wait. */
  coversCurablePreExisting: boolean
  /** Typical monthly price band for a healthy adult dog. */
  priceRange: string
  /** Top reasons to choose this carrier. */
  pros: string[]
  /** Top reasons to consider an alternative. */
  cons: string[]
}

export const CARRIERS: InsuranceCarrier[] = [
  {
    slug: 'lemonade-pet',
    name: 'Lemonade Pet',
    tagline: 'Lowest premiums, fast app-based claims',
    url: 'https://lemonade.com/pet',
    affiliateProgram: 'lemonade-pet',
    description:
      'Lemonade offers the most competitive premiums in the category and the fastest in-app claim experience — AI handles routine claims in seconds. Best fit for healthy young dogs of low-to-moderate-risk breeds where the buyer is optimizing cost.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: '$5,000–$100,000',
    illnessWaitDays: 14,
    injuryWaitDays: 2,
    orthopedicWaitDays: 180,
    coversDentalDisease: false,
    coversExamFees: false,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$15–55/mo',
    pros: [
      'Lowest premiums in category',
      'In-app claims paid in seconds for routine cases',
      'Multi-policy discount when bundled with renters/home',
    ],
    cons: [
      '6-month orthopedic waiting period — bad for high-orthopedic-risk breeds',
      'Exam fees and dental disease excluded on base plan',
      'Not available in every state',
    ],
  },
  {
    slug: 'pumpkin-pet',
    name: 'Pumpkin Pet Insurance',
    tagline: '14-day orthopedic wait — best for high-orthopedic-risk breeds',
    url: 'https://pumpkin.care',
    affiliateProgram: 'pumpkin-pet',
    description:
      'Pumpkin has the shortest orthopedic waiting period of any major US carrier (14 days vs. the industry standard 6 months). For breeds with high hereditary orthopedic risk — Labs, Goldens, Bernese Mountain Dogs, Great Danes, Rotts — this single spec can be worth thousands of dollars.',
    reimbursement: '90%',
    deductibleType: 'annual',
    annualLimit: '$10,000–unlimited',
    illnessWaitDays: 14,
    injuryWaitDays: 14,
    orthopedicWaitDays: 14,
    coversDentalDisease: true,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$45–110/mo',
    pros: [
      '14-day orthopedic waiting period (industry-leading)',
      'Covers exam fees and dental disease on base plan',
      'Includes hereditary and congenital conditions',
    ],
    cons: [
      'Reimburses you — does not pay the vet directly',
      'Higher premiums than Lemonade or Figo',
      'Wellness add-on (Preventive Essentials) sold separately',
    ],
  },
  {
    slug: 'manypets',
    name: 'ManyPets',
    tagline: 'Covers curable pre-existing conditions after 18 months',
    url: 'https://manypets.com/us',
    affiliateProgram: 'manypets',
    description:
      'ManyPets is one of the only US carriers that will cover curable pre-existing conditions after an 18-month symptom-free window. Best fit for owners adopting older dogs, switching from another insurer mid-life, or insuring a dog with a resolved past condition.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: 'Unlimited',
    illnessWaitDays: 15,
    injuryWaitDays: 15,
    orthopedicWaitDays: 15,
    coversDentalDisease: true,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: true,
    priceRange: '$25–80/mo',
    pros: [
      'Covers curable pre-existing conditions after 18 symptom-free months',
      'Unlimited annual payout standard',
      'Exam fees and dental disease included',
    ],
    cons: [
      'Newer entrant in the US — less brand familiarity',
      'No direct-vet-pay option',
      'Coverage and pricing vary by state',
    ],
  },
  {
    slug: 'trupanion',
    name: 'Trupanion',
    tagline: 'Pays the vet directly · unlimited payouts · per-condition deductible',
    url: 'https://trupanion.com',
    affiliateProgram: 'trupanion',
    description:
      'Trupanion is built around veterinary-clinic economics: it pays the vet directly at checkout (no float), has no annual or lifetime payout limit, and uses a per-condition deductible — meaning a chronic condition like cancer or hip dysplasia hits the deductible once, not annually. Best fit for breeds with high lifetime claim risk.',
    reimbursement: '90%',
    deductibleType: 'per-incident',
    annualLimit: 'Unlimited',
    illnessWaitDays: 30,
    injuryWaitDays: 5,
    orthopedicWaitDays: 30,
    coversDentalDisease: false,
    coversExamFees: false,
    paysVetDirect: true,
    coversCurablePreExisting: false,
    priceRange: '$40–120/mo',
    pros: [
      'Pays vet directly — no out-of-pocket float on large bills',
      'No annual or lifetime payout limit',
      'Per-condition deductible favors chronic and cancer claims',
    ],
    cons: [
      'Higher monthly premiums than budget carriers',
      'Dental disease and exam fees require add-on riders',
      'Per-condition deductible less favorable for dogs with many unrelated incidents',
    ],
  },
  {
    slug: 'embrace',
    name: 'Embrace',
    tagline: 'Diminishing deductible · most customizable plan',
    url: 'https://embracepetinsurance.com',
    affiliateProgram: 'embrace',
    description:
      'Embrace offers the most flexible plan customization (deductible $100–$1,000, reimbursement 70%–90%, annual limit $5,000–unlimited) plus a diminishing deductible that drops $50 each claim-free year. Solid all-rounder.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: '$5,000–unlimited',
    illnessWaitDays: 14,
    injuryWaitDays: 2,
    orthopedicWaitDays: 180,
    coversDentalDisease: true,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$35–110/mo',
    pros: [
      'Diminishing deductible rewards claim-free years',
      'Highly customizable plan structure',
      'Optional wellness add-on for routine care',
    ],
    cons: [
      '6-month orthopedic wait (waivable with vet exam) — verify before signing',
      'Premium increases with age can be steep',
      'No direct-vet-pay option',
    ],
  },
  {
    slug: 'healthy-paws',
    name: 'Healthy Paws',
    tagline: 'Fastest claims · unlimited annual payout',
    url: 'https://healthypawspetinsurance.com',
    affiliateProgram: 'healthy-paws',
    description:
      'Healthy Paws processes most claims within 2 business days via mobile app — fastest in the category. No annual or lifetime limit. Simple plan structure (one base policy with deductible and reimbursement choice) rather than a la carte add-ons.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: 'Unlimited',
    illnessWaitDays: 15,
    injuryWaitDays: 15,
    orthopedicWaitDays: 365,
    coversDentalDisease: false,
    coversExamFees: false,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$30–100/mo',
    pros: [
      '2-day claim processing — fastest in category',
      'No annual or lifetime payout limit',
      'Annual deductible favors multiple-condition years',
    ],
    cons: [
      '12-month hip dysplasia waiting period for dogs enrolled after age 6',
      'No exam fees, dental disease, or wellness add-on',
      'Does not pay vet directly',
    ],
  },
  {
    slug: 'spot',
    name: 'Spot',
    tagline: 'Optional wellness add-on · covers exam fees',
    url: 'https://spotpetins.com',
    affiliateProgram: 'spot',
    description:
      'Spot bundles a flexible accident-and-illness plan with optional preventive-care coverage (vaccines, dental cleaning, heartworm tests). Exam fees included on the base plan — many competitors charge for this separately.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: '$2,500–unlimited',
    illnessWaitDays: 14,
    injuryWaitDays: 14,
    orthopedicWaitDays: 14,
    coversDentalDisease: true,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$30–95/mo',
    pros: [
      '14-day orthopedic waiting period',
      'Exam fees and dental disease on base plan',
      'Optional preventive-care add-on for routine spend',
    ],
    cons: [
      'Underwritten by multiple companies — coverage details vary by state',
      'Wellness add-on raises monthly cost meaningfully',
      'Customer service ratings inconsistent vs. Healthy Paws',
    ],
  },
  {
    slug: 'figo',
    name: 'Figo',
    tagline: '100% reimbursement option · cloud-based claims',
    url: 'https://figopetinsurance.com',
    affiliateProgram: 'figo',
    description:
      'Figo is the only major US carrier offering a 100% reimbursement tier (after deductible). Premiums are among the lowest. Pet Cloud mobile app handles claims, vet records, and reminders. Annual limits on standard plans cap around $10K–14K which is plenty for most breeds but tight for cancer-prone or orthopedic-prone breeds.',
    reimbursement: '70%–100%',
    deductibleType: 'annual',
    annualLimit: '$5,000–unlimited',
    illnessWaitDays: 14,
    injuryWaitDays: 1,
    orthopedicWaitDays: 180,
    coversDentalDisease: false,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$25–80/mo',
    pros: [
      '100% reimbursement tier available',
      'Competitive premiums',
      'Exam fees on base plan',
    ],
    cons: [
      '6-month orthopedic wait on standard plan',
      'Standard annual limits lower than Trupanion/Healthy Paws',
      'Dental disease not covered',
    ],
  },
  {
    slug: 'fetch-by-the-dodo',
    name: 'Fetch by The Dodo',
    tagline: 'Covers dental disease, behavioral therapy, and exam fees',
    url: 'https://fetchpet.com',
    affiliateProgram: 'fetch-by-the-dodo',
    description:
      'Fetch is the most generous policy on dental — it covers periodontal and dental disease (not just dental injury), which most carriers exclude. Also includes behavioral therapy, exam fees, and sick-visit telehealth. Best fit for small / brachycephalic / toy breeds with high dental risk.',
    reimbursement: '70%–90%',
    deductibleType: 'annual',
    annualLimit: '$5,000–unlimited',
    illnessWaitDays: 15,
    injuryWaitDays: 15,
    orthopedicWaitDays: 180,
    coversDentalDisease: true,
    coversExamFees: true,
    paysVetDirect: false,
    coversCurablePreExisting: false,
    priceRange: '$35–100/mo',
    pros: [
      'Covers periodontal/dental disease — rare in the category',
      'Behavioral therapy covered on base plan',
      'Exam fees included',
    ],
    cons: [
      '6-month orthopedic wait',
      'Premiums slightly above market for senior dogs',
      'Per-tooth dental sub-limit applies',
    ],
  },
]

export function getCarrierBySlug(slug: string): InsuranceCarrier | undefined {
  return CARRIERS.find((c) => c.slug === slug)
}
