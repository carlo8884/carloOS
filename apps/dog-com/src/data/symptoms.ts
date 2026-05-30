/**
 * Dog.com — Symptoms source-of-truth.
 *
 * Powers /symptoms (hub index) and any future symptom-by-slug template.
 *
 * Each entry maps a recognizable presenting sign ("vomiting", "limping",
 * "labored breathing") to:
 *   - an urgency tier the owner can act on
 *   - a short, citation-style brief description (no first-person hands-on claims)
 *   - the canonical learnMoreHref on /health/<slug> when an existing reference
 *     page covers the underlying condition, or /health/dog-symptoms-guide
 *     when the symptom is covered inside the master guide
 *
 * Sourcing principle (QC-STANDARDS.md §1):
 *   - Symptoms and triage thresholds reflect current standard-of-care
 *     references (ACVIM consensus, AAHA guidelines, Merck Veterinary Manual,
 *     VCA Animal Hospitals, ASPCA Animal Poison Control).
 *   - No fabricated credentials, no first-person ("we tested" / "we examined").
 *   - Author byline on the hub is "Dog.com Editorial".
 */

export type SymptomUrgency = 'emergency' | 'urgent' | 'monitor'

export interface Symptom {
  /** kebab-case identifier, suitable for fragments and future routes */
  slug: string
  /** Owner-facing presenting sign — written the way a worried owner types it */
  title: string
  /** Triage tier the owner can act on */
  urgency: SymptomUrgency
  /** One-sentence brief — what it is, why it matters, what to do */
  briefDescription: string
  /**
   * Canonical existing reference page. Every value here must resolve to a
   * real /health/<slug> route — link-check.mjs verifies this in CI.
   */
  learnMoreHref: string
  /**
   * Related body-system tag, used for grouping in future expansions.
   * Keep tags short and consistent with /health category labels.
   */
  bodySystem:
    | 'Respiratory'
    | 'Cardiovascular'
    | 'Neurological'
    | 'GI'
    | 'Urinary'
    | 'Skin'
    | 'Musculoskeletal'
    | 'Ocular'
    | 'Behavioral'
    | 'General'
    | 'Toxicology'
}

/**
 * Authoritative symptom list. Ordered within each urgency tier by frequency
 * of presentation at general practice / ER per published triage references.
 */
export const SYMPTOMS: Symptom[] = [
  // ─────────────────────────────────────────────
  // EMERGENCY — go to the ER now
  // ─────────────────────────────────────────────
  {
    slug: 'labored-breathing',
    title: 'Labored or open-mouth breathing',
    urgency: 'emergency',
    briefDescription:
      'Open-mouth breathing at rest, exaggerated chest or belly movement, or extended neck with elbows out indicates oxygen deprivation and is the most time-critical presentation in veterinary emergency medicine.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'Respiratory',
  },
  {
    slug: 'pale-or-blue-gums',
    title: 'Pale, white, blue, or grey gums',
    urgency: 'emergency',
    briefDescription:
      'Normal canine gums are bubble-gum pink. Pale or white gums indicate shock or significant blood loss; blue or grey gums indicate oxygen deprivation. Either warrants immediate ER evaluation.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'Cardiovascular',
  },
  {
    slug: 'sudden-collapse',
    title: 'Sudden collapse or inability to stand',
    urgency: 'emergency',
    briefDescription:
      'A dog that collapses, cannot bear weight, or falls repeatedly may be experiencing a cardiac event, internal bleeding, neurological emergency, or severe pain. Do not wait to see whether it resolves.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'General',
  },
  {
    slug: 'distended-abdomen-with-retching',
    title: 'Distended abdomen with non-productive retching',
    urgency: 'emergency',
    briefDescription:
      'A visibly bloated or hard belly combined with retching and restlessness in a deep-chested breed is gastric dilatation-volvulus (GDV / bloat) until proven otherwise. GDV is fatal within hours without surgery.',
    learnMoreHref: '/health/dog-bloat-gvd',
    bodySystem: 'GI',
  },
  {
    slug: 'seizure',
    title: 'Seizure lasting longer than 2 minutes',
    urgency: 'emergency',
    briefDescription:
      'A first-ever seizure, a seizure lasting more than two minutes (status epilepticus), or multiple seizures within 24 hours warrants emergency care. Prolonged seizures cause brain injury.',
    learnMoreHref: '/health/dog-seizures',
    bodySystem: 'Neurological',
  },
  {
    slug: 'suspected-poisoning',
    title: 'Suspected poisoning or toxic ingestion',
    urgency: 'emergency',
    briefDescription:
      'Call ASPCA Animal Poison Control (888-426-4435) and your emergency vet at the same time. For many toxins — xylitol, anticoagulant rodenticide, certain mushrooms — treatment is most effective before symptoms appear.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'Toxicology',
  },
  {
    slug: 'uncontrolled-bleeding',
    title: 'Uncontrolled bleeding',
    urgency: 'emergency',
    briefDescription:
      'Wounds that continue bleeding after five to ten minutes of firm continuous pressure, deep lacerations, puncture wounds from bites, or any wound near a major vessel require immediate ER care.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'General',
  },
  {
    slug: 'eye-injury',
    title: 'Eye injury or sudden eye change',
    urgency: 'emergency',
    briefDescription:
      'Squinting with pawing at the eye, sudden cloudiness, redness with discharge, or trauma to the eye area requires same-day care — hours can determine whether vision is preserved.',
    learnMoreHref: '/health/cherry-eye',
    bodySystem: 'Ocular',
  },

  // ─────────────────────────────────────────────
  // URGENT — see a vet today or tomorrow
  // ─────────────────────────────────────────────
  {
    slug: 'bloody-vomit-or-diarrhea',
    title: 'Vomiting or diarrhea with blood',
    urgency: 'urgent',
    briefDescription:
      'More than three episodes in 24 hours, any blood (bright red or dark coffee-ground), or a lethargic dog that will not eat warrants a same-day vet visit. Hemorrhagic gastroenteritis can cause dangerous fluid loss within hours.',
    learnMoreHref: '/health/dog-vomiting',
    bodySystem: 'GI',
  },
  {
    slug: 'persistent-vomiting',
    title: 'Persistent vomiting without blood',
    urgency: 'urgent',
    briefDescription:
      'One isolated episode in an otherwise normal dog can be monitored at home. Repeated vomiting that prevents the dog from keeping water down, or vomiting accompanied by lethargy, warrants vet evaluation within 24 hours.',
    learnMoreHref: '/health/dog-vomiting',
    bodySystem: 'GI',
  },
  {
    slug: 'persistent-diarrhea',
    title: 'Persistent diarrhea',
    urgency: 'urgent',
    briefDescription:
      'Soft stool for more than 48 hours, diarrhea in a puppy or senior dog, or any diarrhea accompanied by lethargy, fever, or appetite loss should be evaluated. Dehydration is the primary risk.',
    learnMoreHref: '/health/dog-diarrhea',
    bodySystem: 'GI',
  },
  {
    slug: 'straining-to-urinate',
    title: 'Straining to urinate or not urinating',
    urgency: 'urgent',
    briefDescription:
      'Repeated squatting or posturing with little or no output, crying while urinating, or blood-tinged urine needs same-day evaluation. A complete urinary blockage is life-threatening within 24 to 48 hours.',
    learnMoreHref: '/health/dog-kidney-disease',
    bodySystem: 'Urinary',
  },
  {
    slug: 'sudden-limb-weakness',
    title: 'Sudden limb weakness or paralysis',
    urgency: 'urgent',
    briefDescription:
      'Sudden hindlimb weakness, inability to walk, or dragging of the rear feet is a spinal cord injury (IVDD) until proven otherwise. Surgical outcomes are significantly better when treatment begins within 24 hours of severe onset.',
    learnMoreHref: '/health/intervertebral-disc-disease',
    bodySystem: 'Neurological',
  },
  {
    slug: 'head-tilt-or-loss-of-balance',
    title: 'Head tilt, circling, or loss of balance',
    urgency: 'urgent',
    briefDescription:
      'Sudden head tilt, circling in one direction, falling to one side, or rapid involuntary eye movement (nystagmus) indicates vestibular disease and requires same-day evaluation to distinguish peripheral from central causes.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'Neurological',
  },
  {
    slug: 'swollen-lymph-nodes',
    title: 'Swollen lymph nodes',
    urgency: 'urgent',
    briefDescription:
      'Firm bilateral swelling at the lymph node sites — under the jaw, in front of the shoulders, behind the knees, in the groin — is the most common presentation of canine lymphoma. Early evaluation expands treatment options.',
    learnMoreHref: '/health/dog-cancer-signs',
    bodySystem: 'General',
  },
  {
    slug: 'complete-food-refusal',
    title: 'Complete food refusal with other changes',
    urgency: 'urgent',
    briefDescription:
      'Missing a single meal in an otherwise normal dog can be monitored. Complete refusal for 24 or more hours combined with lethargy, vomiting, or behavior change warrants a vet visit within 24 hours.',
    learnMoreHref: '/health/dog-symptoms-guide',
    bodySystem: 'General',
  },
  {
    slug: 'limping',
    title: 'Limping or sudden lameness',
    urgency: 'urgent',
    briefDescription:
      'Mild intermittent limping that improves with rest can be monitored for 24 to 48 hours. Severe lameness, non-weight-bearing on a limb, or a visible deformity needs same-day evaluation for fracture, cruciate injury, or luxating patella.',
    learnMoreHref: '/health/dog-luxating-patella',
    bodySystem: 'Musculoskeletal',
  },
  {
    slug: 'ear-discharge-or-shaking',
    title: 'Persistent ear shaking, scratching, or discharge',
    urgency: 'urgent',
    briefDescription:
      'Repeated head shaking, scratching at the ears, an odor from the ear canal, or visible discharge indicates otitis externa. Untreated infections progress and become more painful and harder to resolve.',
    learnMoreHref: '/health/dog-ear-infections',
    bodySystem: 'General',
  },

  // ─────────────────────────────────────────────
  // MONITOR — watch at home and book a routine visit
  // ─────────────────────────────────────────────
  {
    slug: 'unexplained-weight-loss',
    title: 'Unexplained weight loss',
    urgency: 'monitor',
    briefDescription:
      'A dog losing weight without dietary changes warrants investigation. In middle-aged and senior dogs, unexplained weight loss is often the earliest sign of cancer, diabetes, kidney disease, or chronic GI conditions.',
    learnMoreHref: '/health/dog-cancer-signs',
    bodySystem: 'General',
  },
  {
    slug: 'increased-thirst-and-urination',
    title: 'Increased thirst and urination',
    urgency: 'monitor',
    briefDescription:
      'Persistently increased water intake and urination (polyuria / polydipsia) is the classic early sign of diabetes mellitus, Cushing’s disease, and chronic kidney disease. Book a routine vet visit for blood and urine work.',
    learnMoreHref: '/health/dog-diabetes',
    bodySystem: 'Urinary',
  },
  {
    slug: 'chronic-itching-or-licking',
    title: 'Chronic itching, licking, or paw-chewing',
    urgency: 'monitor',
    briefDescription:
      'Year-round itching, repeated paw licking, recurrent ear infections, or hair loss in classic atopic-distribution areas indicates environmental or food allergies. Book a routine visit before secondary skin infections develop.',
    learnMoreHref: '/health/dog-allergies',
    bodySystem: 'Skin',
  },
  {
    slug: 'bad-breath',
    title: 'Persistent bad breath',
    urgency: 'monitor',
    briefDescription:
      'Foul breath in an adult dog is the most reliable owner-observable sign of periodontal disease. Untreated dental disease drives chronic inflammation and is linked to cardiac, renal, and hepatic conditions.',
    learnMoreHref: '/health/dog-dental-care',
    bodySystem: 'General',
  },
  {
    slug: 'behavior-or-mood-change',
    title: 'New anxiety, restlessness, or mood change',
    urgency: 'monitor',
    briefDescription:
      'A sudden change in baseline temperament — new anxiety, hiding, restlessness, or aggression — can reflect pain, cognitive dysfunction, endocrine disease, or a primary behavioral problem. Worth a routine evaluation.',
    learnMoreHref: '/health/dog-anxiety',
    bodySystem: 'Behavioral',
  },
]

/**
 * Convenience accessors used by /symptoms and any future detail templates.
 */
export const EMERGENCY_SYMPTOMS = SYMPTOMS.filter((s) => s.urgency === 'emergency')
export const URGENT_SYMPTOMS = SYMPTOMS.filter((s) => s.urgency === 'urgent')
export const MONITOR_SYMPTOMS = SYMPTOMS.filter((s) => s.urgency === 'monitor')

export function symptomBySlug(slug: string): Symptom | undefined {
  return SYMPTOMS.find((s) => s.slug === slug)
}
