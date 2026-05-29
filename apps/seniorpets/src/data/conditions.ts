/**
 * Senior Pet Conditions — Master Registry
 *
 * Source of truth for the 30 condition pages that ship in the MVP.
 * Each entry maps to an MDX content file at src/content/conditions/<slug>.mdx
 * and is rendered by /conditions/[slug]/page.tsx.
 *
 * Adding a condition:
 *   1. Append an entry below.
 *   2. Run `npm run generate:content -- --slug <slug>` to draft MDX
 *      (uses OPENAI_API_KEY, server-only) — or hand-write the MDX.
 *   3. The sitemap auto-picks it up.
 */

export type Species = 'dog' | 'cat'

export interface ConditionMeta {
  slug: string
  /** Display title (sentence case, owner-friendly) */
  title: string
  /** SEO meta description — 140–160 chars, no clinical jargon */
  description: string
  species: Species
  /** Lower-cased category tag for filtering and breadcrumbs */
  category:
    | 'musculoskeletal'
    | 'neurologic'
    | 'renal-urinary'
    | 'endocrine'
    | 'cardiovascular'
    | 'respiratory'
    | 'gastrointestinal'
    | 'oncology'
    | 'sensory'
    | 'dental-oral'
    | 'integumentary'
  /** Schema.org MedicalCondition canonical code (ICD-10-CM-Vet or descriptive) */
  medicalCode?: string
  /** Programmatic search keywords for the condition page */
  keywords: string[]
}

export const CONDITIONS: ConditionMeta[] = [
  // ── Canine ──────────────────────────────────────────────────────────────
  {
    slug: 'osteoarthritis',
    title: 'Osteoarthritis in Senior Dogs',
    description:
      'Signs, vet-reviewed treatment options, and recommended joint products for arthritis in older dogs. Galliprant, Adequan, and lifestyle changes that work.',
    species: 'dog',
    category: 'musculoskeletal',
    keywords: ['dog arthritis', 'senior dog joint pain', 'galliprant for dogs', 'adequan'],
  },
  {
    slug: 'canine-cognitive-dysfunction',
    title: 'Canine Cognitive Dysfunction (Dog Dementia)',
    description:
      'DISHA signs, diagnostic checklist, and treatment for dog dementia — including selegiline, SAM-e, and senior-friendly home changes.',
    species: 'dog',
    category: 'neurologic',
    keywords: ['dog dementia', 'CCD in dogs', 'sundowning in dogs', 'selegiline'],
  },
  {
    slug: 'chronic-kidney-disease-dogs',
    title: 'Chronic Kidney Disease (CKD) in Senior Dogs',
    description:
      'IRIS staging, diet, fluid therapy, and medications for chronic kidney disease in older dogs. What changes after a kidney value comes back high.',
    species: 'dog',
    category: 'renal-urinary',
    keywords: ['dog CKD', 'chronic kidney disease in dogs', 'kidney diet for dogs'],
  },
  {
    slug: 'diabetes-mellitus-dogs',
    title: 'Diabetes Mellitus in Senior Dogs',
    description:
      'Insulin therapy basics, glucose curves, and diet for diabetic dogs. Why pills don’t work and how to monitor at home.',
    species: 'dog',
    category: 'endocrine',
    keywords: ['dog diabetes', 'vetsulin', 'diabetic dog diet'],
  },
  {
    slug: 'congestive-heart-failure',
    title: 'Congestive Heart Failure in Senior Dogs',
    description:
      'Recognizing CHF, the role of Vetmedin, and home monitoring (resting respiratory rate). When coughing is the heart, not the lungs.',
    species: 'dog',
    category: 'cardiovascular',
    keywords: ['dog CHF', 'vetmedin', 'mitral valve disease in dogs'],
  },
  {
    slug: 'hypothyroidism-dogs',
    title: 'Hypothyroidism in Senior Dogs',
    description:
      'Hair loss, weight gain, lethargy — when low thyroid is the cause and how levothyroxine restores quality of life.',
    species: 'dog',
    category: 'endocrine',
    keywords: ['dog hypothyroid', 'levothyroxine for dogs', 'soloxine'],
  },
  {
    slug: 'cushings-disease-dogs',
    title: 'Cushing’s Disease (HAC) in Senior Dogs',
    description:
      'Hyperadrenocorticism signs, trilostane vs mitotane, and what owners should know about the long, expensive workup.',
    species: 'dog',
    category: 'endocrine',
    keywords: ['cushings disease', 'trilostane', 'vetoryl', 'HAC in dogs'],
  },
  {
    slug: 'addisons-disease-dogs',
    title: 'Addison’s Disease in Senior Dogs',
    description:
      'Hypoadrenocorticism — “the great pretender.” Why intermittent vague illness in a middle-aged or senior dog warrants ACTH testing.',
    species: 'dog',
    category: 'endocrine',
    keywords: ['addisons disease', 'hypoadrenocorticism', 'percorten', 'zycortal'],
  },
  {
    slug: 'periodontal-disease-dogs',
    title: 'Periodontal Disease in Senior Dogs',
    description:
      'Why dental disease is the most under-treated senior-dog condition, and how cleanings under anesthesia change outcomes.',
    species: 'dog',
    category: 'dental-oral',
    keywords: ['dog dental disease', 'dog teeth cleaning', 'senior dog dental'],
  },
  {
    slug: 'cataracts-vision-loss-dogs',
    title: 'Cataracts and Vision Loss in Senior Dogs',
    description:
      'Nuclear sclerosis vs true cataracts, when surgery makes sense, and how to help a vision-impaired senior dog navigate the home.',
    species: 'dog',
    category: 'sensory',
    keywords: ['dog cataracts', 'blind dog', 'nuclear sclerosis in dogs'],
  },
  {
    slug: 'hearing-loss-dogs',
    title: 'Hearing Loss in Senior Dogs',
    description:
      'Age-related deafness in dogs — when to suspect it, how to test, and the hand-signal training approach that works.',
    species: 'dog',
    category: 'sensory',
    keywords: ['deaf dog', 'senior dog hearing', 'BAER test'],
  },
  {
    slug: 'laryngeal-paralysis',
    title: 'Laryngeal Paralysis in Senior Dogs',
    description:
      'The raspy bark and exercise intolerance owners often miss — laryngeal paralysis (Lar Par) in older large-breed dogs and what to do.',
    species: 'dog',
    category: 'respiratory',
    keywords: ['laryngeal paralysis', 'lar par', 'tieback surgery'],
  },
  {
    slug: 'anal-gland-disease-dogs',
    title: 'Anal Gland Disease in Senior Dogs',
    description:
      'Why scooting, licking, and recurring infections happen — chronic anal sacculitis management in older dogs.',
    species: 'dog',
    category: 'gastrointestinal',
    keywords: ['dog anal glands', 'scooting in dogs', 'anal sacculitis'],
  },
  {
    slug: 'urinary-incontinence-dogs',
    title: 'Urinary Incontinence in Senior Dogs',
    description:
      'Hormone-responsive urinary incontinence in spayed female dogs — proin, estrogen therapy, and other manageable options.',
    species: 'dog',
    category: 'renal-urinary',
    keywords: ['dog leaking urine', 'proin', 'spay incontinence'],
  },
  {
    slug: 'chronic-vomiting-dogs',
    title: 'Chronic Vomiting in Senior Dogs',
    description:
      'When vomiting in an older dog is a red flag — pancreatitis, IBD, kidney disease, and the workup that should follow.',
    species: 'dog',
    category: 'gastrointestinal',
    keywords: ['dog vomiting', 'chronic vomiting in dogs', 'pancreatitis in dogs'],
  },

  // ── Feline ──────────────────────────────────────────────────────────────
  {
    slug: 'chronic-kidney-disease-cats',
    title: 'Chronic Kidney Disease (CKD) in Senior Cats',
    description:
      'The most common serious illness of senior cats — IRIS staging, kidney diets, subQ fluids, and how to extend quality of life.',
    species: 'cat',
    category: 'renal-urinary',
    keywords: ['cat CKD', 'kidney disease in cats', 'subq fluids for cats'],
  },
  {
    slug: 'hyperthyroidism-cats',
    title: 'Hyperthyroidism in Senior Cats',
    description:
      'Weight loss despite ravenous appetite — methimazole, Hill’s y/d, and radioactive iodine (I-131) options compared.',
    species: 'cat',
    category: 'endocrine',
    keywords: ['cat hyperthyroidism', 'methimazole for cats', 'I-131 cats'],
  },
  {
    slug: 'diabetes-mellitus-cats',
    title: 'Diabetes Mellitus in Senior Cats',
    description:
      'Why low-carb diets and insulin glargine make remission possible — diabetic cat management that gets results.',
    species: 'cat',
    category: 'endocrine',
    keywords: ['cat diabetes', 'lantus for cats', 'diabetic cat diet'],
  },
  {
    slug: 'arthritis-cats',
    title: 'Arthritis in Senior Cats',
    description:
      'Cats hide pain — the subtle behavioral signs of feline arthritis and the new monoclonal antibody (Solensia) that changed treatment.',
    species: 'cat',
    category: 'musculoskeletal',
    keywords: ['cat arthritis', 'solensia for cats', 'frunevetmab'],
  },
  {
    slug: 'ibd-cats',
    title: 'Inflammatory Bowel Disease (IBD) in Senior Cats',
    description:
      'Chronic vomiting and diarrhea workup, hydrolyzed diets, and immunosuppressive options for IBD in older cats.',
    species: 'cat',
    category: 'gastrointestinal',
    keywords: ['cat IBD', 'chronic vomiting cat', 'hydrolyzed diet cat'],
  },
  {
    slug: 'periodontal-disease-cats',
    title: 'Periodontal Disease in Senior Cats',
    description:
      'Dental disease is the most common health issue in adult cats — recognizing it and why anesthetic cleanings matter.',
    species: 'cat',
    category: 'dental-oral',
    keywords: ['cat dental disease', 'cat teeth cleaning'],
  },
  {
    slug: 'feline-tooth-resorption',
    title: 'Tooth Resorption (FORLs) in Senior Cats',
    description:
      'Feline odontoclastic resorptive lesions — painful, common, and only diagnosed with dental radiographs under anesthesia.',
    species: 'cat',
    category: 'dental-oral',
    keywords: ['FORLs', 'tooth resorption in cats', 'feline dental'],
  },
  {
    slug: 'hypertrophic-cardiomyopathy',
    title: 'Hypertrophic Cardiomyopathy (HCM) in Senior Cats',
    description:
      'The most common feline heart disease — recognizing CHF, NT-proBNP screening, and what owners need to know about thromboembolism risk.',
    species: 'cat',
    category: 'cardiovascular',
    keywords: ['cat HCM', 'feline heart disease', 'saddle thrombus'],
  },
  {
    slug: 'cataracts-vision-loss-cats',
    title: 'Vision Loss in Senior Cats',
    description:
      'Hypertensive retinopathy, uveitis, and cataracts in older cats — and why high blood pressure is the most overlooked cause of feline blindness.',
    species: 'cat',
    category: 'sensory',
    keywords: ['blind cat', 'cat vision loss', 'hypertensive retinopathy'],
  },
  {
    slug: 'feline-cognitive-dysfunction',
    title: 'Feline Cognitive Dysfunction (FCD)',
    description:
      'Yowling at night, disorientation, and litterbox lapses — cognitive decline in senior cats and what can help.',
    species: 'cat',
    category: 'neurologic',
    keywords: ['cat dementia', 'FCD', 'senior cat yowling'],
  },
  {
    slug: 'feline-constipation-megacolon',
    title: 'Constipation and Megacolon in Senior Cats',
    description:
      'Why dehydration drives most senior cat constipation, lactulose dosing, MiraLAX use, and when megacolon needs surgery.',
    species: 'cat',
    category: 'gastrointestinal',
    keywords: ['cat constipation', 'megacolon', 'lactulose for cats'],
  },
  {
    slug: 'feline-asthma',
    title: 'Feline Asthma in Senior Cats',
    description:
      'Coughing fits often mistaken for hairballs — diagnosing feline asthma, AeroKat inhalers, and steroid therapy.',
    species: 'cat',
    category: 'respiratory',
    keywords: ['cat asthma', 'aerokat', 'flovent for cats'],
  },
  {
    slug: 'feline-urinary-obstruction-risk',
    title: 'Urinary Obstruction Risk in Senior Male Cats',
    description:
      'Why FLUTD in older male cats is a life-threatening emergency — prevention, prescription diets, and warning signs.',
    species: 'cat',
    category: 'renal-urinary',
    keywords: ['cat urinary blockage', 'FLUTD', 'blocked cat'],
  },
  {
    slug: 'feline-weight-loss',
    title: 'Unexplained Weight Loss in Senior Cats',
    description:
      'The senior cat weight-loss workup — hyperthyroidism, CKD, diabetes, GI lymphoma, and the bloodwork that finds the cause.',
    species: 'cat',
    category: 'oncology',
    keywords: ['senior cat weight loss', 'GI lymphoma cat'],
  },
  {
    slug: 'feline-hyperaldosteronism',
    title: 'Primary Hyperaldosteronism (Conn’s Syndrome) in Senior Cats',
    description:
      'A rare but increasingly recognized cause of weakness and resistant hypertension in older cats — when to ask about aldosterone.',
    species: 'cat',
    category: 'endocrine',
    keywords: ['feline hyperaldosteronism', 'conns syndrome cat'],
  },
]

export function getCondition(slug: string): ConditionMeta | undefined {
  return CONDITIONS.find((c) => c.slug === slug)
}

export function getConditionsBySpecies(species: Species): ConditionMeta[] {
  return CONDITIONS.filter((c) => c.species === species)
}
