/**
 * Senior Pet Medications — Master Registry
 *
 * Source of truth for the 20 medication pages that ship in the MVP.
 * Rendered by /medications/[slug]/page.tsx.
 *
 * EDITORIAL POLICY: Doses are typical published ranges from veterinary
 * pharmacology references. Every medication page must surface the
 * "Talk to your veterinarian before starting or changing any medication"
 * banner. Pricing is intentionally NOT included — it’s shop-by-shop.
 */

export interface MedicationMeta {
  slug: string
  /** Generic / brand display name */
  name: string
  /** Active ingredient(s), comma-separated */
  activeIngredient: string
  /** Drug class — owner-friendly label */
  drugClass: string
  /** SEO meta description, 140–160 chars */
  description: string
  /** Species this medication is most commonly dosed in */
  species: ('dog' | 'cat')[]
  /** Conditions this medication treats (slugs from conditions.ts where applicable) */
  treats: string[]
  /** Prescription required? */
  prescription: boolean
  /** Slug for the Chewy Pharmacy product path (used by AffiliateLink) */
  chewyRxPath?: string
  /** Common warnings — never replace a vet consult */
  warnings: string[]
}

export const MEDICATIONS: MedicationMeta[] = [
  {
    slug: 'adequan',
    name: 'Adequan Canine',
    activeIngredient: 'Polysulfated glycosaminoglycan (PSGAG)',
    drugClass: 'Disease-modifying osteoarthritis drug (injectable)',
    description:
      'Adequan for dogs: how PSGAG injections support cartilage in arthritic senior dogs, the typical loading schedule, and what to expect.',
    species: ['dog'],
    treats: ['osteoarthritis'],
    prescription: true,
    chewyRxPath: '/rx/adequan',
    warnings: [
      'Injectable medication — typically administered IM by a veterinarian or owner after training',
      'Use with caution in patients with bleeding disorders',
    ],
  },
  {
    slug: 'galliprant',
    name: 'Galliprant',
    activeIngredient: 'Grapiprant',
    drugClass: 'EP4 prostaglandin receptor antagonist',
    description:
      'Galliprant for senior dogs with arthritis — a newer-class NSAID with a different safety profile from carprofen and meloxicam.',
    species: ['dog'],
    treats: ['osteoarthritis'],
    prescription: true,
    chewyRxPath: '/rx/galliprant',
    warnings: [
      'For dogs only — not for cats',
      'Baseline bloodwork (kidney, liver) recommended before starting',
      'Monitor for GI signs, especially in dogs with concurrent kidney disease',
    ],
  },
  {
    slug: 'rimadyl',
    name: 'Rimadyl (Carprofen)',
    activeIngredient: 'Carprofen',
    drugClass: 'NSAID (COX-2 preferential)',
    description:
      'Rimadyl for dogs: dosing, side-effect monitoring, and how it compares to Galliprant for arthritis pain in seniors.',
    species: ['dog'],
    treats: ['osteoarthritis'],
    prescription: true,
    chewyRxPath: '/rx/rimadyl',
    warnings: [
      'For dogs only',
      'Routine bloodwork monitoring (kidney, liver) is essential',
      'Discontinue and call your vet for vomiting, dark stool, or appetite loss',
    ],
  },
  {
    slug: 'meloxicam-dogs',
    name: 'Meloxicam',
    activeIngredient: 'Meloxicam',
    drugClass: 'NSAID (COX-2 preferential)',
    description:
      'Meloxicam in dogs for chronic arthritis — the once-daily oral suspension that’s a long-standing senior-dog standard.',
    species: ['dog'],
    treats: ['osteoarthritis'],
    prescription: true,
    chewyRxPath: '/rx/meloxicam',
    warnings: [
      'Bloodwork before starting and at recheck',
      'Avoid concurrent corticosteroids or other NSAIDs',
    ],
  },
  {
    slug: 'apoquel',
    name: 'Apoquel',
    activeIngredient: 'Oclacitinib',
    drugClass: 'JAK inhibitor (allergy/itch)',
    description:
      'Apoquel for senior dogs with chronic allergic itch — how it works, what to monitor, and why it’s not a one-size-fits-all answer.',
    species: ['dog'],
    treats: [],
    prescription: true,
    chewyRxPath: '/rx/apoquel',
    warnings: [
      'May increase risk of infections and slow-healing wounds',
      'Use with caution in dogs with a history of neoplasia',
    ],
  },
  {
    slug: 'cytopoint',
    name: 'Cytopoint',
    activeIngredient: 'Lokivetmab (canine monoclonal antibody)',
    drugClass: 'Monoclonal antibody (allergy/itch)',
    description:
      'Cytopoint injections for senior dogs with chronic atopic dermatitis — a long-acting, low-systemic-burden alternative.',
    species: ['dog'],
    treats: [],
    prescription: true,
    chewyRxPath: '/rx/cytopoint',
    warnings: [
      'Administered by your veterinarian',
      'Not effective for non-allergic itch (e.g., parasitic, infectious)',
    ],
  },
  {
    slug: 'vetmedin',
    name: 'Vetmedin (Pimobendan)',
    activeIngredient: 'Pimobendan',
    drugClass: 'Inodilator (cardiac)',
    description:
      'Vetmedin for senior dogs with mitral valve disease — when it’s started, how it extends life, and the EPIC trial summarized.',
    species: ['dog'],
    treats: ['congestive-heart-failure'],
    prescription: true,
    chewyRxPath: '/rx/vetmedin',
    warnings: [
      'Cardiology evaluation should confirm appropriate stage',
      'Resting respiratory rate monitoring at home is essential',
    ],
  },
  {
    slug: 'enalapril',
    name: 'Enalapril',
    activeIngredient: 'Enalapril maleate',
    drugClass: 'ACE inhibitor (cardiac, renal)',
    description:
      'Enalapril use in senior dogs and cats — supporting cardiac and proteinuric kidney disease, with renal monitoring.',
    species: ['dog', 'cat'],
    treats: ['congestive-heart-failure', 'chronic-kidney-disease-dogs', 'chronic-kidney-disease-cats'],
    prescription: true,
    chewyRxPath: '/rx/enalapril',
    warnings: [
      'Renal function and electrolytes should be monitored',
      'Avoid in dehydrated patients',
    ],
  },
  {
    slug: 'cosequin',
    name: 'Cosequin',
    activeIngredient: 'Glucosamine, chondroitin (varies by formula)',
    drugClass: 'Joint supplement (nutraceutical)',
    description:
      'Cosequin for dogs and cats — the joint supplement clinical research most commonly references, and how to use it as part of a multimodal plan.',
    species: ['dog', 'cat'],
    treats: ['osteoarthritis', 'arthritis-cats'],
    prescription: false,
    chewyRxPath: '/products/cosequin',
    warnings: [
      'Nutraceuticals are not regulated as drugs — choose NASC-quality-seal brands',
      'Not a substitute for prescription pain control in moderate-to-severe arthritis',
    ],
  },
  {
    slug: 'dasuquin',
    name: 'Dasuquin',
    activeIngredient: 'Glucosamine, chondroitin, ASU (avocado/soybean unsaponifiables)',
    drugClass: 'Joint supplement (nutraceutical)',
    description:
      'Dasuquin vs Cosequin: what the addition of ASU means and when it’s worth the upgrade for arthritic seniors.',
    species: ['dog', 'cat'],
    treats: ['osteoarthritis', 'arthritis-cats'],
    prescription: false,
    chewyRxPath: '/products/dasuquin',
    warnings: [
      'Talk to your vet before starting in pets with liver disease',
    ],
  },
  {
    slug: 'methimazole',
    name: 'Methimazole',
    activeIngredient: 'Methimazole',
    drugClass: 'Antithyroid (feline hyperthyroidism)',
    description:
      'Methimazole for hyperthyroid cats: oral vs transdermal, monitoring T4, and what owners should know about long-term management.',
    species: ['cat'],
    treats: ['hyperthyroidism-cats'],
    prescription: true,
    chewyRxPath: '/rx/methimazole',
    warnings: [
      'CBC and T4 monitoring required',
      'Transdermal compounded formulations should come from a reputable compounding pharmacy',
    ],
  },
  {
    slug: 'insulin-glargine-cats',
    name: 'Insulin Glargine (Lantus) — for cats',
    activeIngredient: 'Insulin glargine',
    drugClass: 'Long-acting insulin',
    description:
      'Why insulin glargine is the first-line choice for diabetic cats — protocol, monitoring, and the chance of remission.',
    species: ['cat'],
    treats: ['diabetes-mellitus-cats'],
    prescription: true,
    chewyRxPath: '/rx/lantus',
    warnings: [
      'Insulin is a high-alert medication — never adjust dose without your veterinarian',
      'Hypoglycemia kit (Karo syrup) should always be accessible',
    ],
  },
  {
    slug: 'vetsulin',
    name: 'Vetsulin',
    activeIngredient: 'Porcine insulin zinc suspension',
    drugClass: 'Intermediate-acting insulin',
    description:
      'Vetsulin for diabetic dogs — the FDA-approved canine insulin, twice-daily dosing, and home glucose monitoring options.',
    species: ['dog', 'cat'],
    treats: ['diabetes-mellitus-dogs'],
    prescription: true,
    chewyRxPath: '/rx/vetsulin',
    warnings: [
      'Always shake to resuspend before drawing',
      'Hypoglycemia can be life-threatening — keep Karo syrup accessible',
    ],
  },
  {
    slug: 'trilostane-vetoryl',
    name: 'Trilostane (Vetoryl)',
    activeIngredient: 'Trilostane',
    drugClass: 'Adrenal steroidogenesis inhibitor',
    description:
      'Trilostane for Cushing’s disease in dogs — ACTH-stimulation monitoring, side effects, and the realistic owner experience.',
    species: ['dog'],
    treats: ['cushings-disease-dogs'],
    prescription: true,
    chewyRxPath: '/rx/vetoryl',
    warnings: [
      'ACTH-stimulation tests are required for dose monitoring',
      'Vomiting, diarrhea, or lethargy can signal over-suppression — call your vet',
    ],
  },
  {
    slug: 'levothyroxine-soloxine',
    name: 'Levothyroxine (Soloxine, Thyro-Tabs)',
    activeIngredient: 'Levothyroxine sodium',
    drugClass: 'Thyroid hormone replacement',
    description:
      'Levothyroxine for hypothyroid dogs — once vs twice daily, monitoring T4, and how long it takes to see improvement.',
    species: ['dog'],
    treats: ['hypothyroidism-dogs'],
    prescription: true,
    chewyRxPath: '/rx/thyro-tabs',
    warnings: [
      'T4 levels should be rechecked 4–6 weeks after starting or dose change',
      'Give on an empty stomach when possible',
    ],
  },
  {
    slug: 'selegiline-anipryl',
    name: 'Selegiline (Anipryl)',
    activeIngredient: 'Selegiline',
    drugClass: 'MAO-B inhibitor (cognitive support)',
    description:
      'Selegiline (Anipryl) for canine cognitive dysfunction — how it works, who responds, and what owners typically notice.',
    species: ['dog'],
    treats: ['canine-cognitive-dysfunction'],
    prescription: true,
    chewyRxPath: '/rx/anipryl',
    warnings: [
      'Multiple drug interactions — disclose all medications and supplements to your veterinarian',
    ],
  },
  {
    slug: 'proin-er',
    name: 'Proin ER',
    activeIngredient: 'Phenylpropanolamine',
    drugClass: 'Alpha-adrenergic agonist (urethral sphincter tone)',
    description:
      'Proin ER for hormone-responsive urinary incontinence in spayed senior dogs — dosing, side effects, and blood-pressure considerations.',
    species: ['dog'],
    treats: ['urinary-incontinence-dogs'],
    prescription: true,
    chewyRxPath: '/rx/proin-er',
    warnings: [
      'Avoid in dogs with hypertension or heart disease',
      'Monitor for restlessness, appetite loss, or behavior change',
    ],
  },
  {
    slug: 'gabapentin',
    name: 'Gabapentin',
    activeIngredient: 'Gabapentin',
    drugClass: 'Neuropathic pain / anxiolytic',
    description:
      'Gabapentin in senior dogs and cats — chronic pain, pre-visit anxiolysis, and what to watch for in pets with kidney disease.',
    species: ['dog', 'cat'],
    treats: ['osteoarthritis', 'arthritis-cats'],
    prescription: true,
    chewyRxPath: '/rx/gabapentin',
    warnings: [
      'Dose reduction recommended in pets with kidney disease',
      'Compounded liquid formulations may contain xylitol — confirm with your pharmacist',
    ],
  },
  {
    slug: 'solensia-cats',
    name: 'Solensia',
    activeIngredient: 'Frunevetmab (feline monoclonal antibody)',
    drugClass: 'Anti-NGF monoclonal antibody',
    description:
      'Solensia for feline osteoarthritis — the first FDA-approved monoclonal antibody for chronic pain in cats. How it works and what to expect.',
    species: ['cat'],
    treats: ['arthritis-cats'],
    prescription: true,
    chewyRxPath: '/rx/solensia',
    warnings: [
      'Administered by your veterinarian as a monthly injection',
      'Not for breeding, pregnant, or lactating cats',
    ],
  },
  {
    slug: 'librela-dogs',
    name: 'Librela',
    activeIngredient: 'Bedinvetmab (canine monoclonal antibody)',
    drugClass: 'Anti-NGF monoclonal antibody',
    description:
      'Librela for canine osteoarthritis pain — monthly monoclonal antibody injections, what current evidence shows, and the safety-signal updates.',
    species: ['dog'],
    treats: ['osteoarthritis'],
    prescription: true,
    chewyRxPath: '/rx/librela',
    warnings: [
      'Discuss recent regulatory safety communications with your vet',
      'Not a substitute for diagnostic workup of acute lameness',
    ],
  },
]

export function getMedication(slug: string): MedicationMeta | undefined {
  return MEDICATIONS.find((m) => m.slug === slug)
}
