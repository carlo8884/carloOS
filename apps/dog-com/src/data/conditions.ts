/**
 * Dog.com — Conditions source-of-truth for the /conditions authority hub.
 *
 * Companion to:
 *   - src/data/symptoms.ts  → /symptoms hub (presenting signs, owner triage)
 *   - src/data/diseases.ts  → /health/[slug] programmatic templates (deep refs)
 *
 * What this file is:
 *   A single curated list of every diagnosed condition that has a canonical
 *   long-form reference page on Dog.com, mapped to:
 *     - the body system (orthopedic / endocrine / cardiac / etc.)
 *     - the severity tier (emergency / chronic-manageable / acute-treatable /
 *       terminal-progressive)
 *     - a brief, citation-style description (no first-person hands-on claims)
 *     - the canonical /health/<slug> URL where the full reference lives
 *
 * Sourcing rules (QC-STANDARDS.md §1):
 *   - Every entry resolves to a real /health/<slug> route — either a hand-written
 *     static folder or a dynamic [slug] entry sourced from src/data/diseases.ts.
 *     scripts/ci/link-check.mjs verifies this in CI.
 *   - Severity tiers reflect current standard-of-care references (ACVIM
 *     consensus, AAHA guidelines, Merck Veterinary Manual, OFA hereditary
 *     registry). No invented prognostications.
 *   - Byline on the hub is "Dog.com Editorial — sourced from cited references".
 *   - No fabricated DVM credentials, no first-person ("we treated", "in our
 *     clinic"), no AI-generated humans.
 *
 * Why this file exists separately from diseases.ts:
 *   diseases.ts powers the programmatic /health/[slug] template and contains
 *   rich structured fields (diagnostic approach, treatment tiers, citations).
 *   conditions.ts is the hub-side index — flatter, hub-optimized, and additive
 *   over the hand-written /health/<slug> pages that don't have diseases.ts
 *   entries (breed-agnostic conditions like dog-arthritis, dog-allergies, etc.).
 */

export type BodySystem =
  | 'Orthopedic'
  | 'Endocrine'
  | 'Cardiac'
  | 'Dermatologic'
  | 'GI'
  | 'Neurologic'
  | 'Oncologic'
  | 'Ophthalmic'
  | 'Urinary'
  | 'Renal'
  | 'Infectious'
  | 'Respiratory'
  | 'Dental'
  | 'Reproductive'
  | 'Behavioral'
  | 'Hematologic'
  | 'Hepatic'

/**
 * Severity / urgency tier used by the hub to group conditions for owners.
 *
 *   - emergency           — life-threatening within hours without veterinary
 *                           intervention (GDV, glaucoma, parvo, pyometra)
 *   - acute-treatable     — serious and time-sensitive, but typically resolves
 *                           with prompt treatment (UTI, ringworm, hot spots)
 *   - chronic-manageable  — lifelong management, generally good quality of life
 *                           with adherence (diabetes, atopic dermatitis, CKD
 *                           early stages, hypothyroidism)
 *   - terminal-progressive — incurable and progressive; treatment focuses on
 *                            quality of life and slowing decline (DCM, lymphoma,
 *                            cognitive dysfunction, degenerative myelopathy)
 */
export type ConditionSeverity =
  | 'emergency'
  | 'acute-treatable'
  | 'chronic-manageable'
  | 'terminal-progressive'

export interface Condition {
  /** kebab-case identifier; matches the URL slug of the canonical reference. */
  slug: string
  /** Owner-facing name — the way a worried owner would search for it. */
  name: string
  /** Body system grouping used for hub sections. */
  bodySystem: BodySystem
  /** Severity tier used for owner-action grouping. */
  severity: ConditionSeverity
  /**
   * One-sentence brief — what the condition is and why it matters.
   * No first-person claims, no fabricated credentials, no paid language.
   */
  briefDescription: string
  /**
   * Canonical Dog.com reference page. Every value must resolve to a real
   * route — either a static /health/<slug> folder or a dynamic [slug] entry
   * sourced from src/data/diseases.ts. CI link-check.mjs verifies this.
   */
  learnMoreHref: string
  /**
   * Whether this condition is in the "most commonly diagnosed" set surfaced
   * at the top of the hub. Marked Common per ACVIM / AAHA prevalence guidance.
   */
  highlighted?: boolean
}

/**
 * Authoritative condition list, sourced from existing /health/ reference pages.
 * Ordered within each body system roughly by clinical prevalence.
 *
 * Coverage:
 *   - All hand-written /health/<slug> diagnosed-condition pages
 *   - All entries in src/data/diseases.ts (rendered by /health/[slug] template)
 *
 * Excluded from this list (these are not single diagnosed conditions):
 *   - Breed risk profiles: french-bulldog-health, german-shepherd-health,
 *     golden-retriever-health, labrador-health  → linked separately under
 *     /breeds, not /conditions
 *   - Life-stage guides: senior-dog-care, spay-neuter-guide
 *   - Preventive guides: dog-vaccinations, heartworm-prevention, dog-dental-care
 *   - Symptom triage guides: dog-symptoms-guide (already on /symptoms hub)
 *   - Treatment overview guides: dog-cancer-treatment (linked from oncologic)
 *   - Duplicative guides: dog-pyoderma-guide (kept dog-pyoderma as canonical)
 */
export const CONDITIONS: Condition[] = [
  // ─────────────────────────────────────────────────────────────────
  // ORTHOPEDIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-arthritis',
    name: 'Osteoarthritis',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'Affects approximately 1 in 5 adult dogs and is the most common cause of chronic pain in the species. Multimodal management — weight control, NSAIDs, rehabilitation — substantially improves quality of life.',
    learnMoreHref: '/health/dog-arthritis',
    highlighted: true,
  },
  {
    slug: 'hip-dysplasia',
    name: 'Hip Dysplasia',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'Hereditary developmental malformation of the hip joint, most common in large and giant breeds. OFA radiographic screening enables early intervention; surgical and conservative options both extend function.',
    learnMoreHref: '/health/hip-dysplasia',
    highlighted: true,
  },
  {
    slug: 'elbow-dysplasia',
    name: 'Elbow Dysplasia',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'Developmental disease of the elbow joint encompassing fragmented coronoid process, OCD, and ununited anconeal process. Common in Labradors, German Shepherds, and Rottweilers per OFA registry data.',
    learnMoreHref: '/health/elbow-dysplasia',
  },
  {
    slug: 'ccl-rupture',
    name: 'Cranial Cruciate Ligament Rupture',
    bodySystem: 'Orthopedic',
    severity: 'acute-treatable',
    briefDescription:
      'The canine equivalent of an ACL tear and the single most common orthopedic injury in dogs. Surgical stabilization (TPLO, TTA, extracapsular) restores function in most patients.',
    learnMoreHref: '/health/ccl-rupture',
    highlighted: true,
  },
  {
    slug: 'dog-luxating-patella',
    name: 'Luxating Patella',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'The kneecap slips out of its groove, most commonly in small and toy breeds. Graded I–IV; surgery is indicated for higher grades and for any dog with persistent lameness or progressive cartilage damage.',
    learnMoreHref: '/health/dog-luxating-patella',
  },
  {
    slug: 'patellar-luxation',
    name: 'Medial Patellar Luxation',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'Medial-side variant of patellar luxation; predisposed breeds include Yorkshire Terriers, Pomeranians, and Toy Poodles. Grade and clinical signs guide surgical vs. conservative management.',
    learnMoreHref: '/health/patellar-luxation',
  },
  {
    slug: 'intervertebral-disc-disease',
    name: 'Intervertebral Disc Disease (IVDD) — Type I',
    bodySystem: 'Orthopedic',
    severity: 'emergency',
    briefDescription:
      'Acute extrusion of disc material into the spinal canal, most often in chondrodystrophic breeds (Dachshund, Beagle, French Bulldog). Surgical decompression within 24–48 hours of severe onset significantly improves outcomes.',
    learnMoreHref: '/health/intervertebral-disc-disease',
    highlighted: true,
  },
  {
    slug: 'ivdd-non-frenchie',
    name: 'Intervertebral Disc Disease — Type II',
    bodySystem: 'Orthopedic',
    severity: 'chronic-manageable',
    briefDescription:
      'Slowly progressive disc protrusion in non-chondrodystrophic breeds. Presents more insidiously than Type I, often with chronic back pain and gradual neurologic decline.',
    learnMoreHref: '/health/ivdd-non-frenchie',
  },

  // ─────────────────────────────────────────────────────────────────
  // ENDOCRINE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-diabetes',
    name: 'Diabetes Mellitus',
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Insulin-deficient diabetes is lifelong but well-controlled with twice-daily insulin, a consistent diet, and home glucose monitoring. Cataract progression is the most common comorbidity owners notice first.',
    learnMoreHref: '/health/dog-diabetes',
    highlighted: true,
  },
  {
    slug: 'diabetes-mellitus',
    name: 'Diabetes Mellitus — Clinical Reference',
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Standard-of-care reference covering ACVIM diagnostic thresholds, insulin selection, monitoring, and management of DKA per the 2018 ACVIM consensus statement.',
    learnMoreHref: '/health/diabetes-mellitus',
  },
  {
    slug: 'cushing-disease',
    name: "Cushing's Disease (Hyperadrenocorticism)",
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Excess cortisol from a pituitary or adrenal tumor. Classic triad is polyuria, polydipsia, and pot-bellied appearance. Trilostane or mitotane controls signs in most patients.',
    learnMoreHref: '/health/cushing-disease',
    highlighted: true,
  },
  {
    slug: 'hyperadrenocorticism',
    name: "Hyperadrenocorticism — Pituitary and Adrenal Forms",
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Clinical reference distinguishing pituitary-dependent (~85%) from adrenal-dependent forms, with low-dose dexamethasone suppression testing and trilostane dosing per ACVIM small-animal endocrinology references.',
    learnMoreHref: '/health/hyperadrenocorticism',
  },
  {
    slug: 'addisons-disease',
    name: "Addison's Disease (Hypoadrenocorticism)",
    bodySystem: 'Endocrine',
    severity: 'emergency',
    briefDescription:
      'Adrenal insufficiency. Acute Addisonian crisis presents with collapse, hyperkalemia, and bradyarrhythmia and is rapidly fatal without IV fluids and steroid replacement.',
    learnMoreHref: '/health/addisons-disease',
    highlighted: true,
  },
  {
    slug: 'addisons-disease-adrenal',
    name: "Addison's Disease — Atypical and Classic",
    bodySystem: 'Endocrine',
    severity: 'emergency',
    briefDescription:
      'Reference covering atypical (glucocorticoid-only) vs. classic (mineralocorticoid-deficient) Addison\'s, ACTH stimulation testing, and DOCP vs. fludrocortisone replacement protocols.',
    learnMoreHref: '/health/addisons-disease-adrenal',
  },
  {
    slug: 'hypothyroidism',
    name: 'Hypothyroidism',
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Underactive thyroid causing weight gain, lethargy, recurrent skin and ear infections, and a "tragic" facial expression. Daily levothyroxine restores normal function in nearly all patients.',
    learnMoreHref: '/health/hypothyroidism',
    highlighted: true,
  },
  {
    slug: 'hypothyroidism-canine',
    name: 'Canine Hypothyroidism — Clinical Reference',
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'Diagnostic reference covering total T4, free T4 by equilibrium dialysis, and TSH testing per ACVIM small-animal endocrinology consensus, with levothyroxine titration guidance.',
    learnMoreHref: '/health/hypothyroidism-canine',
  },

  // ─────────────────────────────────────────────────────────────────
  // CARDIAC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-heart-disease',
    name: 'Heart Disease — Overview',
    bodySystem: 'Cardiac',
    severity: 'chronic-manageable',
    briefDescription:
      'Reference covering the two major canine cardiac diseases — myxomatous mitral valve disease (small breeds) and dilated cardiomyopathy (large breeds) — and the ACVIM staging system that guides treatment.',
    learnMoreHref: '/health/dog-heart-disease',
    highlighted: true,
  },
  {
    slug: 'mitral-valve-disease',
    name: 'Mitral Valve Disease',
    bodySystem: 'Cardiac',
    severity: 'terminal-progressive',
    briefDescription:
      'The most common acquired heart disease in dogs, with Cavalier King Charles Spaniels at extreme risk. Pimobendan therapy in ACVIM Stage B2 doubles time to congestive heart failure per the EPIC trial.',
    learnMoreHref: '/health/mitral-valve-disease',
    highlighted: true,
  },
  {
    slug: 'dilated-cardiomyopathy',
    name: 'Dilated Cardiomyopathy',
    bodySystem: 'Cardiac',
    severity: 'terminal-progressive',
    briefDescription:
      'Reduced systolic function and chamber dilation, most prevalent in Dobermans, Boxers, and giant breeds. Annual echocardiographic and Holter screening is recommended for at-risk breeds starting at age 3.',
    learnMoreHref: '/health/dilated-cardiomyopathy',
  },
  {
    slug: 'heartworm-disease',
    name: 'Heartworm Disease',
    bodySystem: 'Cardiac',
    severity: 'acute-treatable',
    briefDescription:
      'Mosquito-borne parasitic disease of the pulmonary arteries and right heart. Three-injection melarsomine adulticide therapy per American Heartworm Society guidelines has excellent outcomes when treated before caval syndrome.',
    learnMoreHref: '/health/heartworm-disease',
    highlighted: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // RENAL / URINARY
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-kidney-disease',
    name: 'Kidney Disease — Overview',
    bodySystem: 'Renal',
    severity: 'terminal-progressive',
    briefDescription:
      'Reference covering chronic kidney disease and acute kidney injury, IRIS staging, and SDMA-based early screening that detects disease at stage 1 when intervention is most effective.',
    learnMoreHref: '/health/dog-kidney-disease',
    highlighted: true,
  },
  {
    slug: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    bodySystem: 'Renal',
    severity: 'terminal-progressive',
    briefDescription:
      'Progressive loss of nephron function, most common in senior dogs. IRIS staging (1–4) and substaging by proteinuria and blood pressure guide renal diet, ACE inhibitor, phosphate binder, and fluid therapy decisions.',
    learnMoreHref: '/health/chronic-kidney-disease',
    highlighted: true,
  },
  {
    slug: 'acute-kidney-injury',
    name: 'Acute Kidney Injury',
    bodySystem: 'Renal',
    severity: 'emergency',
    briefDescription:
      'Rapid loss of kidney function from toxins (grapes, NSAIDs, ethylene glycol), leptospirosis, or hypoperfusion. Anuric AKI carries 60–80% mortality; early dialysis substantially improves outcomes at referral centers.',
    learnMoreHref: '/health/acute-kidney-injury',
  },
  {
    slug: 'urinary-tract-infection',
    name: 'Urinary Tract Infection',
    bodySystem: 'Urinary',
    severity: 'acute-treatable',
    briefDescription:
      'Bacterial cystitis presents with stranguria, pollakiuria, and hematuria. Culture-guided antibiotic therapy per ISCAID stewardship guidelines is standard; recurrent UTIs warrant underlying-cause workup.',
    learnMoreHref: '/health/urinary-tract-infection',
    highlighted: true,
  },
  {
    slug: 'bladder-stones',
    name: 'Bladder Stones (Urolithiasis)',
    bodySystem: 'Urinary',
    severity: 'acute-treatable',
    briefDescription:
      'Struvite, calcium oxalate, urate, or cystine stones cause hematuria, dysuria, and — in male dogs — potentially fatal urethral obstruction. Stone analysis guides dietary prevention per ACVIM 2016 consensus.',
    learnMoreHref: '/health/bladder-stones',
  },

  // ─────────────────────────────────────────────────────────────────
  // GI
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-bloat-gvd',
    name: 'Gastric Dilatation-Volvulus (Bloat / GDV)',
    bodySystem: 'GI',
    severity: 'emergency',
    briefDescription:
      'The stomach distends and twists on its axis, cutting off circulation. Without emergency surgical decompression, GDV is fatal within hours. Deep-chested large and giant breeds are at highest risk.',
    learnMoreHref: '/health/dog-bloat-gvd',
    highlighted: true,
  },
  {
    slug: 'gastric-dilatation-volvulus',
    name: 'GDV — Surgical Reference',
    bodySystem: 'GI',
    severity: 'emergency',
    briefDescription:
      'Clinical reference covering the gold-standard gastric decompression and gastropexy procedure, prophylactic gastropexy timing for at-risk breeds, and post-operative arrhythmia management.',
    learnMoreHref: '/health/gastric-dilatation-volvulus',
  },
  {
    slug: 'pancreatitis',
    name: 'Pancreatitis',
    bodySystem: 'GI',
    severity: 'acute-treatable',
    briefDescription:
      'Inflammation of the pancreas presenting with persistent vomiting, abdominal pain, and the "praying position." Spec cPL is the most specific blood test; supportive care and early enteral nutrition are mainstays.',
    learnMoreHref: '/health/pancreatitis',
    highlighted: true,
  },
  {
    slug: 'pancreatitis-acute',
    name: 'Acute Pancreatitis — Clinical Reference',
    bodySystem: 'GI',
    severity: 'emergency',
    briefDescription:
      'Reference covering severe necrotizing pancreatitis (30–50% mortality), IV fluid resuscitation, anti-emetic and analgesic protocols, and the low-fat diet recommendation for recurrence prevention.',
    learnMoreHref: '/health/pancreatitis-acute',
  },
  {
    slug: 'ibd',
    name: 'Inflammatory Bowel Disease',
    bodySystem: 'GI',
    severity: 'chronic-manageable',
    briefDescription:
      'Chronic enteropathy presenting with intermittent vomiting, diarrhea, and weight loss. Most cases are food-responsive on a hydrolyzed or novel-protein diet per the 2020 ACVIM consensus.',
    learnMoreHref: '/health/ibd',
  },
  {
    slug: 'dog-vomiting',
    name: 'Vomiting',
    bodySystem: 'GI',
    severity: 'acute-treatable',
    briefDescription:
      'Reference distinguishing isolated episodes (monitor at home) from persistent or bloody vomiting (same-day vet) and from vomiting with collapse or unproductive retching (ER). Dehydration is the primary risk.',
    learnMoreHref: '/health/dog-vomiting',
    highlighted: true,
  },
  {
    slug: 'dog-diarrhea',
    name: 'Diarrhea',
    bodySystem: 'GI',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering bland-diet management of acute self-limiting diarrhea, when to escalate (any blood, puppies/seniors, more than 48 hours), and red flags for hemorrhagic gastroenteritis.',
    learnMoreHref: '/health/dog-diarrhea',
    highlighted: true,
  },
  {
    slug: 'foreign-body-ingestion',
    name: 'Gastrointestinal Foreign Body',
    bodySystem: 'GI',
    severity: 'emergency',
    briefDescription:
      'Ingested object lodged in the stomach or intestines, causing obstruction and tissue compromise. Linear foreign bodies (string, tinsel) are particularly destructive; surgical removal is typically required.',
    learnMoreHref: '/health/foreign-body-ingestion',
  },
  {
    slug: 'anal-sac-disease',
    name: 'Anal Sac Disease',
    bodySystem: 'GI',
    severity: 'acute-treatable',
    briefDescription:
      'Impaction, sacculitis, or abscess of the anal glands. Recurrent cases warrant a workup for food allergy, atopy, or low-grade colitis as the underlying cause per ACVD dermatology references.',
    learnMoreHref: '/health/anal-sac-disease',
  },

  // ─────────────────────────────────────────────────────────────────
  // HEPATIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-liver-disease',
    name: 'Liver Disease',
    bodySystem: 'Hepatic',
    severity: 'chronic-manageable',
    briefDescription:
      'Reference covering chronic hepatitis, copper storage disease (Bedlington Terrier, Labrador), and hepatic encephalopathy management. Bile-acid testing is more sensitive than transaminase elevation alone.',
    learnMoreHref: '/health/dog-liver-disease',
  },
  {
    slug: 'liver-shunt',
    name: 'Portosystemic Shunt (Liver Shunt)',
    bodySystem: 'Hepatic',
    severity: 'chronic-manageable',
    briefDescription:
      'Congenital vascular anomaly bypassing the liver, presenting with poor growth, hepatic encephalopathy signs after meals, and elevated bile acids. Surgical attenuation is the definitive treatment in young dogs.',
    learnMoreHref: '/health/liver-shunt',
  },

  // ─────────────────────────────────────────────────────────────────
  // NEUROLOGIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-seizures',
    name: 'Seizures',
    bodySystem: 'Neurologic',
    severity: 'emergency',
    briefDescription:
      'A first-ever seizure, a seizure lasting more than two minutes (status epilepticus), or multiple seizures within 24 hours warrants emergency care. Prolonged seizures cause brain injury.',
    learnMoreHref: '/health/dog-seizures',
    highlighted: true,
  },
  {
    slug: 'epilepsy',
    name: 'Idiopathic Epilepsy',
    bodySystem: 'Neurologic',
    severity: 'chronic-manageable',
    briefDescription:
      'The most common cause of recurrent seizures in dogs aged 1–5 years. Phenobarbital, potassium bromide, levetiracetam, and zonisamide control seizures in the majority of patients per ACVIM small-animal neurology references.',
    learnMoreHref: '/health/epilepsy',
  },
  {
    slug: 'vestibular-disease',
    name: 'Idiopathic Vestibular Disease',
    bodySystem: 'Neurologic',
    severity: 'acute-treatable',
    briefDescription:
      'Acute-onset head tilt, nystagmus, and rolling, most often in senior dogs. Typically self-resolves over 1–3 weeks; the key clinical task is distinguishing peripheral (good prognosis) from central vestibular signs.',
    learnMoreHref: '/health/vestibular-disease',
  },
  {
    slug: 'degenerative-myelopathy',
    name: 'Degenerative Myelopathy',
    bodySystem: 'Neurologic',
    severity: 'terminal-progressive',
    briefDescription:
      'Progressive spinal-cord disease with hindlimb proprioceptive deficits advancing to paraparesis. SOD1 genetic testing identifies at-risk dogs. No specific treatment; supportive care extends quality of life.',
    learnMoreHref: '/health/degenerative-myelopathy',
  },
  {
    slug: 'cognitive-dysfunction',
    name: 'Canine Cognitive Dysfunction Syndrome',
    bodySystem: 'Neurologic',
    severity: 'terminal-progressive',
    briefDescription:
      'The canine analogue of Alzheimer\'s. Presents in senior dogs with disorientation, altered sleep-wake cycle, and house-soiling. Selegiline, diet, and environmental enrichment slow progression in some patients.',
    learnMoreHref: '/health/cognitive-dysfunction',
  },

  // ─────────────────────────────────────────────────────────────────
  // ONCOLOGIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-cancer-signs',
    name: 'Cancer Warning Signs',
    bodySystem: 'Oncologic',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering the ten owner-observable signs that warrant cancer workup — lumps, weight loss, lameness, abnormal swellings, bleeding, sores that don\'t heal — per Morris Animal Foundation Golden Retriever Lifetime Study findings.',
    learnMoreHref: '/health/dog-cancer-signs',
    highlighted: true,
  },
  {
    slug: 'lymphoma',
    name: 'Canine Lymphoma',
    bodySystem: 'Oncologic',
    severity: 'terminal-progressive',
    briefDescription:
      'The most common hematopoietic cancer in dogs, typically presenting with bilateral peripheral lymph-node enlargement. CHOP multi-agent chemotherapy achieves an 80% complete response with median survival around 12 months.',
    learnMoreHref: '/health/lymphoma',
    highlighted: true,
  },
  {
    slug: 'mast-cell-tumor',
    name: 'Mast Cell Tumor',
    bodySystem: 'Oncologic',
    severity: 'acute-treatable',
    briefDescription:
      'Cutaneous round-cell tumor with highly variable behavior. Low-grade Kiupel tumors are cured with wide surgical excision; high-grade tumors require chemotherapy or tyrosine kinase inhibitor therapy.',
    learnMoreHref: '/health/mast-cell-tumor',
  },
  {
    slug: 'hemangiosarcoma',
    name: 'Hemangiosarcoma',
    bodySystem: 'Oncologic',
    severity: 'terminal-progressive',
    briefDescription:
      'Aggressive vascular malignancy most common in Golden Retrievers, German Shepherds, and Boxers. Splenic hemangiosarcoma frequently presents as sudden collapse from a ruptured mass with hemoabdomen.',
    learnMoreHref: '/health/hemangiosarcoma',
  },
  {
    slug: 'osteosarcoma',
    name: 'Osteosarcoma',
    bodySystem: 'Oncologic',
    severity: 'terminal-progressive',
    briefDescription:
      'Aggressive primary bone cancer of giant breeds, typically arising in the appendicular skeleton. Standard of care is amputation plus carboplatin or doxorubicin chemotherapy; limb-sparing is available at referral centers.',
    learnMoreHref: '/health/osteosarcoma',
  },
  {
    slug: 'oral-melanoma',
    name: 'Oral Melanoma',
    bodySystem: 'Oncologic',
    severity: 'terminal-progressive',
    briefDescription:
      'Highly metastatic oral malignancy of senior dogs. Surgical resection (mandibulectomy/maxillectomy) combined with the Oncept DNA vaccine produces median survival of 12–18 months in early-stage disease.',
    learnMoreHref: '/health/oral-melanoma',
  },

  // ─────────────────────────────────────────────────────────────────
  // DERMATOLOGIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-allergies',
    name: 'Dog Allergies — Overview',
    bodySystem: 'Dermatologic',
    severity: 'chronic-manageable',
    briefDescription:
      'Reference covering atopic dermatitis (environmental), cutaneous adverse food reaction, and flea-allergy dermatitis. Year-round itching in classic distribution areas warrants ACVD-aligned workup.',
    learnMoreHref: '/health/dog-allergies',
    highlighted: true,
  },
  {
    slug: 'atopic-dermatitis',
    name: 'Canine Atopic Dermatitis',
    bodySystem: 'Dermatologic',
    severity: 'chronic-manageable',
    briefDescription:
      'Genetic predisposition to environmental allergies. Apoquel, Cytopoint, cyclosporine, and allergen-specific immunotherapy each have evidence for long-term control per ACVD/WAVD international guidelines.',
    learnMoreHref: '/health/atopic-dermatitis',
    highlighted: true,
  },
  {
    slug: 'food-allergy',
    name: 'Cutaneous Adverse Food Reaction',
    bodySystem: 'Dermatologic',
    severity: 'chronic-manageable',
    briefDescription:
      'Year-round non-seasonal itch with GI signs is suggestive. The diagnostic gold standard is an 8-week strict hydrolyzed or novel-protein diet trial followed by provocative re-challenge.',
    learnMoreHref: '/health/food-allergy',
  },
  {
    slug: 'dog-skin-allergies',
    name: 'Skin Allergies',
    bodySystem: 'Dermatologic',
    severity: 'chronic-manageable',
    briefDescription:
      'Reference covering allergic-pattern dermatitis, secondary pyoderma and Malassezia overgrowth, and the management algorithm for the itchy dog per ACVD International Committee on Allergic Diseases.',
    learnMoreHref: '/health/dog-skin-allergies',
  },
  {
    slug: 'dog-hot-spots',
    name: 'Hot Spots (Acute Moist Dermatitis)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Rapidly developing, painful, oozing skin lesions caused by self-trauma. Clip-and-clean, topical and systemic therapy address the lesion; identifying the underlying allergy or pain trigger prevents recurrence.',
    learnMoreHref: '/health/dog-hot-spots',
  },
  {
    slug: 'hot-spots',
    name: 'Acute Moist Dermatitis — Clinical Reference',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering wound clipping, chlorhexidine flushing, topical and oral antibiotics, anti-pruritic therapy, and identification of the underlying trigger (atopy, otitis, anal sac disease, pain).',
    learnMoreHref: '/health/hot-spots',
  },
  {
    slug: 'dog-pyoderma',
    name: 'Pyoderma (Bacterial Skin Infection)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Superficial or deep bacterial skin infection, almost always secondary to allergy, endocrine disease, or self-trauma. Cytology guides empiric therapy; culture is essential for recurrent or resistant cases.',
    learnMoreHref: '/health/dog-pyoderma',
  },
  {
    slug: 'dog-mange',
    name: 'Mange (Sarcoptic and Demodectic)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Sarcoptes scabiei (scabies) is intensely pruritic and zoonotic. Demodex is non-contagious and often signals an underlying immune issue in adult dogs. Isoxazolines (afoxolaner, fluralaner) are highly effective for both.',
    learnMoreHref: '/health/dog-mange',
  },
  {
    slug: 'sarcoptic-mange',
    name: 'Sarcoptic Mange (Scabies)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Highly contagious mite infestation causing intense pruritus, primarily on ear margins, elbows, and abdomen. Zoonotic risk to humans; isoxazoline therapy clears infestations within weeks.',
    learnMoreHref: '/health/sarcoptic-mange',
  },
  {
    slug: 'demodectic-mange',
    name: 'Demodectic Mange (Demodicosis)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Non-contagious mite overgrowth. Localized form often self-resolves in puppies; generalized adult-onset form warrants workup for underlying immunosuppression (Cushing\'s, hypothyroidism, neoplasia).',
    learnMoreHref: '/health/demodectic-mange',
  },
  {
    slug: 'demodex-and-secondary-pyoderma',
    name: 'Skin Tags and Cutaneous Histiocytoma',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering benign cutaneous masses — fibrovascular skin tags and the spontaneously regressing histiocytoma of young dogs. Histopathology distinguishes these from mast cell tumors.',
    learnMoreHref: '/health/demodex-and-secondary-pyoderma',
  },
  {
    slug: 'ringworm',
    name: 'Ringworm (Dermatophytosis)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Fungal infection — most commonly Microsporum canis. Zoonotic. Topical lime sulfur or miconazole-chlorhexidine baths plus systemic itraconazole or terbinafine resolve the majority of cases.',
    learnMoreHref: '/health/ringworm',
  },
  {
    slug: 'puppy-strangles',
    name: 'Juvenile Cellulitis (Puppy Strangles)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Sterile granulomatous and pustular dermatitis of puppies, presenting with facial swelling and submandibular lymphadenopathy. Aggressive immunosuppressive therapy resolves most cases; permanent scarring is the main sequela.',
    learnMoreHref: '/health/puppy-strangles',
  },
  {
    slug: 'dog-ear-infections',
    name: 'Ear Infections (Otitis Externa)',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Otic infections are almost always secondary to allergy, anatomy, or moisture. Cytology guides topical therapy; the diagnostic question is always "why now and why this dog" rather than only treating the lesion.',
    learnMoreHref: '/health/dog-ear-infections',
    highlighted: true,
  },
  {
    slug: 'otitis-externa',
    name: 'Otitis Externa — Clinical Reference',
    bodySystem: 'Dermatologic',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering cytology interpretation (cocci, rods, yeast), topical therapy selection, and the systematic primary-secondary-perpetuating-predisposing (PSPP) framework per ACVD otitis consensus.',
    learnMoreHref: '/health/otitis-externa',
  },

  // ─────────────────────────────────────────────────────────────────
  // OPHTHALMIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cherry-eye',
    name: 'Cherry Eye',
    bodySystem: 'Ophthalmic',
    severity: 'acute-treatable',
    briefDescription:
      'Prolapse of the third eyelid gland, common in Bulldogs, Cocker Spaniels, and Beagles. Surgical replacement (Morgan pocket or anchoring technique) is preferred over excision to preserve tear production.',
    learnMoreHref: '/health/cherry-eye',
  },
  {
    slug: 'cherry-eye-prolapse',
    name: 'Prolapsed Nictitans Gland — Surgical Reference',
    bodySystem: 'Ophthalmic',
    severity: 'acute-treatable',
    briefDescription:
      'Surgical reference covering the Morgan pocket and orbital rim anchoring techniques. Excision is contraindicated as it triples the lifetime risk of keratoconjunctivitis sicca per ACVO referral guidance.',
    learnMoreHref: '/health/cherry-eye-prolapse',
  },
  {
    slug: 'cataracts',
    name: 'Cataracts',
    bodySystem: 'Ophthalmic',
    severity: 'chronic-manageable',
    briefDescription:
      'Lens opacification — most commonly diabetic, hereditary, or age-related. Phacoemulsification surgery by a board-certified veterinary ophthalmologist restores vision in appropriately selected patients.',
    learnMoreHref: '/health/cataracts',
  },
  {
    slug: 'glaucoma',
    name: 'Glaucoma',
    bodySystem: 'Ophthalmic',
    severity: 'emergency',
    briefDescription:
      'Elevated intraocular pressure causing irreversible optic nerve damage and blindness within hours of acute onset. Same-day specialist evaluation is the only chance to preserve vision in primary glaucoma.',
    learnMoreHref: '/health/glaucoma',
    highlighted: true,
  },
  {
    slug: 'dry-eye-kcs',
    name: 'Dry Eye (Keratoconjunctivitis Sicca)',
    bodySystem: 'Ophthalmic',
    severity: 'chronic-manageable',
    briefDescription:
      'Immune-mediated lacrimal-gland destruction causing chronic mucoid discharge and corneal damage. Topical cyclosporine or tacrolimus restores tear production in most patients with lifelong therapy.',
    learnMoreHref: '/health/dry-eye-kcs',
  },
  {
    slug: 'progressive-retinal-atrophy',
    name: 'Progressive Retinal Atrophy',
    bodySystem: 'Ophthalmic',
    severity: 'terminal-progressive',
    briefDescription:
      'Inherited photoreceptor degeneration leading to progressive blindness. DNA testing identifies affected and carrier dogs in predisposed breeds. No specific treatment; dogs adapt remarkably well to vision loss.',
    learnMoreHref: '/health/progressive-retinal-atrophy',
  },

  // ─────────────────────────────────────────────────────────────────
  // RESPIRATORY
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'tracheal-collapse',
    name: 'Tracheal Collapse',
    bodySystem: 'Respiratory',
    severity: 'chronic-manageable',
    briefDescription:
      'Progressive flattening of tracheal cartilage rings, predominantly in toy and small breeds. Weight management, antitussives, and bronchodilators control most cases; tracheal stenting is available for refractory disease.',
    learnMoreHref: '/health/tracheal-collapse',
  },
  {
    slug: 'laryngeal-paralysis',
    name: 'Laryngeal Paralysis',
    bodySystem: 'Respiratory',
    severity: 'emergency',
    briefDescription:
      'Failure of laryngeal cartilage abduction during inspiration, presenting with stridor, exercise intolerance, and heat-stress collapse. Unilateral arytenoid lateralization surgery is curative in most patients.',
    learnMoreHref: '/health/laryngeal-paralysis',
  },
  {
    slug: 'brachycephalic-syndrome',
    name: 'Brachycephalic Obstructive Airway Syndrome (BOAS)',
    bodySystem: 'Respiratory',
    severity: 'chronic-manageable',
    briefDescription:
      'Anatomic upper-airway compromise in flat-faced breeds — stenotic nares, elongated soft palate, everted laryngeal saccules. Early surgical correction substantially reduces lifetime morbidity per RVC BOAS grading.',
    learnMoreHref: '/health/brachycephalic-syndrome',
  },

  // ─────────────────────────────────────────────────────────────────
  // INFECTIOUS
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'parvovirus',
    name: 'Canine Parvovirus',
    bodySystem: 'Infectious',
    severity: 'emergency',
    briefDescription:
      'Highly contagious enteric virus of unvaccinated puppies. With aggressive inpatient supportive care, survival rates reach 75–90%; untreated parvovirus carries 50–90% mortality.',
    learnMoreHref: '/health/parvovirus',
    highlighted: true,
  },
  {
    slug: 'distemper',
    name: 'Canine Distemper',
    bodySystem: 'Infectious',
    severity: 'emergency',
    briefDescription:
      'Multisystem viral disease affecting respiratory, GI, and neurologic systems. Overall mortality exceeds 50%; vaccination is highly effective and is core per AAHA canine vaccination guidelines.',
    learnMoreHref: '/health/distemper',
  },
  {
    slug: 'kennel-cough',
    name: 'Kennel Cough (CIRDC)',
    bodySystem: 'Infectious',
    severity: 'acute-treatable',
    briefDescription:
      'Canine infectious respiratory disease complex. Most cases self-resolve in 1–3 weeks in otherwise healthy adults; puppies, seniors, and immunocompromised dogs can progress to bacterial pneumonia.',
    learnMoreHref: '/health/kennel-cough',
  },
  {
    slug: 'leptospirosis-in-dogs',
    name: 'Leptospirosis',
    bodySystem: 'Infectious',
    severity: 'emergency',
    briefDescription:
      'Zoonotic spirochete causing acute kidney injury, hepatic dysfunction, and — in severe cases — pulmonary hemorrhage. Doxycycline plus aggressive supportive care achieves 70–85% survival per ACVIM consensus.',
    learnMoreHref: '/health/leptospirosis-in-dogs',
  },
  {
    slug: 'lyme-disease-in-dogs',
    name: 'Lyme Disease',
    bodySystem: 'Infectious',
    severity: 'acute-treatable',
    briefDescription:
      'Tick-borne Borrelia infection. Joint-form Lyme responds well to doxycycline; Lyme nephritis is uncommon but carries a guarded prognosis even with treatment per the 2018 ACVIM consensus update.',
    learnMoreHref: '/health/lyme-disease-in-dogs',
  },
  {
    slug: 'parainfluenza',
    name: 'Canine Parainfluenza Virus',
    bodySystem: 'Infectious',
    severity: 'acute-treatable',
    briefDescription:
      'Common contributor to canine infectious respiratory disease complex. The Bordetella-parainfluenza-adenovirus combination vaccine is non-core but strongly recommended for dogs that board, train, or socialize.',
    learnMoreHref: '/health/parainfluenza',
  },
  {
    slug: 'canine-influenza',
    name: 'Canine Influenza (H3N2 and H3N8)',
    bodySystem: 'Infectious',
    severity: 'acute-treatable',
    briefDescription:
      'Highly contagious viral respiratory disease. Outbreaks occur regionally; bivalent H3N2/H3N8 vaccination is recommended for dogs in boarding, daycare, or show environments per AAHA lifestyle guidance.',
    learnMoreHref: '/health/canine-influenza',
  },
  {
    slug: 'giardia',
    name: 'Giardiasis',
    bodySystem: 'Infectious',
    severity: 'acute-treatable',
    briefDescription:
      'Protozoal parasitic infection causing acute or chronic diarrhea. Fenbendazole is first-line per CAPC; environmental decontamination and bathing prevent reinfection in multi-dog households.',
    learnMoreHref: '/health/giardia',
  },
  {
    slug: 'salmon-poisoning',
    name: 'Salmon Poisoning Disease',
    bodySystem: 'Infectious',
    severity: 'emergency',
    briefDescription:
      'Neorickettsia helminthoeca infection acquired from eating raw Pacific Northwest salmonid fish. Without treatment, mortality approaches 90%; doxycycline plus supportive care is highly effective when started early.',
    learnMoreHref: '/health/salmon-poisoning',
  },

  // ─────────────────────────────────────────────────────────────────
  // DENTAL
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'gingivitis',
    name: 'Gingivitis',
    bodySystem: 'Dental',
    severity: 'chronic-manageable',
    briefDescription:
      'Reversible inflammation of the gum line. Daily home brushing combined with professional cleaning under anesthesia per AAHA dental care guidelines prevents progression to periodontitis.',
    learnMoreHref: '/health/gingivitis',
  },
  {
    slug: 'periodontal-disease',
    name: 'Periodontal Disease',
    bodySystem: 'Dental',
    severity: 'chronic-manageable',
    briefDescription:
      'The most prevalent disease in adult dogs. Full-mouth dental radiographs are essential — 60% of pathology is below the gumline. Established attachment loss is permanent and may require extraction.',
    learnMoreHref: '/health/periodontal-disease',
  },
  {
    slug: 'broken-tooth',
    name: 'Fractured Tooth',
    bodySystem: 'Dental',
    severity: 'acute-treatable',
    briefDescription:
      'Common from hard chew toys (antlers, nylon bones). Complicated crown fractures with exposed pulp warrant root canal therapy by a board-certified veterinary dentist or extraction within days per AVDC guidance.',
    learnMoreHref: '/health/broken-tooth',
  },

  // ─────────────────────────────────────────────────────────────────
  // REPRODUCTIVE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'pyometra',
    name: 'Pyometra',
    bodySystem: 'Reproductive',
    severity: 'emergency',
    briefDescription:
      'Bacterial infection of the uterus in intact females, typically 4–8 weeks after estrus. Open or closed-cervix pyometra is a surgical emergency; ovariohysterectomy is the definitive treatment.',
    learnMoreHref: '/health/pyometra',
    highlighted: true,
  },
  {
    slug: 'prostate-disease',
    name: 'Benign Prostatic Hyperplasia and Prostatitis',
    bodySystem: 'Reproductive',
    severity: 'acute-treatable',
    briefDescription:
      'Common in intact senior males. BPH responds to castration or finasteride; bacterial prostatitis requires prolonged culture-guided antibiotic therapy (4–6 weeks for acute, 6+ weeks for chronic).',
    learnMoreHref: '/health/prostate-disease',
  },
  {
    slug: 'testicular-tumor',
    name: 'Testicular Tumor',
    bodySystem: 'Reproductive',
    severity: 'acute-treatable',
    briefDescription:
      'The most common tumor of intact older male dogs. Cryptorchid testes have a 13.6× higher tumor risk per peer-reviewed studies. Castration is typically curative for the primary mass.',
    learnMoreHref: '/health/testicular-tumor',
  },

  // ─────────────────────────────────────────────────────────────────
  // BEHAVIORAL
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-anxiety',
    name: 'Anxiety',
    bodySystem: 'Behavioral',
    severity: 'chronic-manageable',
    briefDescription:
      'Reference covering generalized anxiety, fear-based reactivity, and the role of behavior modification combined with SSRIs, TCAs, or trazodone per ACVB veterinary behavior consensus.',
    learnMoreHref: '/health/dog-anxiety',
  },
  {
    slug: 'separation-anxiety',
    name: 'Separation Anxiety',
    bodySystem: 'Behavioral',
    severity: 'chronic-manageable',
    briefDescription:
      'True separation-related disorder presents within minutes of departure with destructive behavior, vocalization, and house-soiling. Fluoxetine combined with structured desensitization is the evidence-based standard.',
    learnMoreHref: '/health/separation-anxiety',
  },
  {
    slug: 'noise-phobia',
    name: 'Noise Phobia and Storm Anxiety',
    bodySystem: 'Behavioral',
    severity: 'chronic-manageable',
    briefDescription:
      'Storm and noise phobias are common and progressive without treatment. Sileo (dexmedetomidine oromucosal gel) is FDA-approved for situational use; long-term behavior modification addresses underlying anxiety.',
    learnMoreHref: '/health/noise-phobia',
  },

  // ─────────────────────────────────────────────────────────────────
  // HEMATOLOGIC
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'anemia-in-dogs',
    name: 'Anemia',
    bodySystem: 'Hematologic',
    severity: 'acute-treatable',
    briefDescription:
      'Reference covering regenerative (blood loss, IMHA) vs. non-regenerative (chronic disease, marrow failure) anemia workup. Pale or white gums are a same-day red flag warranting CBC and reticulocyte count.',
    learnMoreHref: '/health/anemia-in-dogs',
  },

  // ─────────────────────────────────────────────────────────────────
  // METABOLIC / GENERAL
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dog-obesity',
    name: 'Obesity',
    bodySystem: 'Endocrine',
    severity: 'chronic-manageable',
    briefDescription:
      'The most common preventable disease in dogs and a documented life-shortener. Body condition scoring (BCS 4–5/9 ideal) and structured weight-loss diets reverse the condition and reduce arthritis, diabetes, and cancer risk.',
    learnMoreHref: '/health/dog-obesity',
    highlighted: true,
  },
  {
    slug: 'megaesophagus',
    name: 'Megaesophagus',
    bodySystem: 'GI',
    severity: 'chronic-manageable',
    briefDescription:
      'Generalized loss of esophageal motility presenting with regurgitation and aspiration pneumonia risk. Bailey-chair upright feeding combined with treatment of any underlying myasthenia gravis is the standard approach.',
    learnMoreHref: '/health/megaesophagus',
  },
]

// ─────────────────────────────────────────────────────────────────────────
// Convenience accessors used by /conditions and any future detail templates.
// ─────────────────────────────────────────────────────────────────────────

export const ALL_BODY_SYSTEMS: BodySystem[] = [
  'Orthopedic',
  'Endocrine',
  'Cardiac',
  'Renal',
  'Urinary',
  'GI',
  'Hepatic',
  'Neurologic',
  'Oncologic',
  'Dermatologic',
  'Ophthalmic',
  'Respiratory',
  'Infectious',
  'Dental',
  'Reproductive',
  'Behavioral',
  'Hematologic',
]

export const EMERGENCY_CONDITIONS = CONDITIONS.filter((c) => c.severity === 'emergency')
export const CHRONIC_CONDITIONS = CONDITIONS.filter((c) => c.severity === 'chronic-manageable')
export const ACUTE_CONDITIONS = CONDITIONS.filter((c) => c.severity === 'acute-treatable')
export const TERMINAL_CONDITIONS = CONDITIONS.filter((c) => c.severity === 'terminal-progressive')

export const HIGHLIGHTED_CONDITIONS = CONDITIONS.filter((c) => c.highlighted)

export function conditionsByBodySystem(system: BodySystem): Condition[] {
  return CONDITIONS.filter((c) => c.bodySystem === system)
}

export function conditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug)
}
