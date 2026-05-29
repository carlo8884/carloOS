/**
 * Sample pre-canned queries and SEO landing slugs for AskTheVet.com.
 * - SAMPLE_QUERIES feed the homepage "Common questions answered" grid.
 * - SYMPTOM_PAGES drive /symptom/[slug] programmatic SEO pages — these get
 *   crawled and rank for high-intent natural search.
 */

export type Species =
  | 'Dog'
  | 'Cat'
  | 'Bird'
  | 'Reptile'
  | 'Fish'
  | 'Horse'
  | 'Ferret'
  | 'Other'

export const SPECIES_OPTIONS: Species[] = [
  'Dog',
  'Cat',
  'Bird',
  'Reptile',
  'Fish',
  'Horse',
  'Ferret',
  'Other',
]

export interface SampleQuery {
  q: string
  species: Species
}

export const SAMPLE_QUERIES: SampleQuery[] = [
  { q: 'My dog is vomiting yellow foam', species: 'Dog' },
  { q: 'My cat hasn’t eaten in 2 days', species: 'Cat' },
  { q: 'My dog ate chocolate', species: 'Dog' },
  { q: 'My cat is sneezing a lot', species: 'Cat' },
  { q: 'My bearded dragon is not basking', species: 'Reptile' },
  { q: 'My ferret is sleeping all day', species: 'Ferret' },
  { q: 'My bird is fluffed up and quiet', species: 'Bird' },
  { q: 'My dog has diarrhea', species: 'Dog' },
  { q: 'My cat is breathing fast', species: 'Cat' },
  { q: 'My horse is limping on front leg', species: 'Horse' },
  { q: 'My fish is floating sideways', species: 'Fish' },
  { q: 'My dog is shaking and won’t move', species: 'Dog' },
]

// ── SEO landing pages ─────────────────────────────────────────────────
// Each slug renders a programmatic /symptom/[slug] page with a pre-canned
// question seeded into the homepage form. 10 sample slugs.

export interface SymptomPage {
  slug: string
  title: string
  question: string
  species: Species
  intro: string
}

export const SYMPTOM_PAGES: SymptomPage[] = [
  {
    slug: 'dog-vomiting',
    title: 'Dog Vomiting: When To Worry vs. When To Wait',
    question: 'My dog is vomiting',
    species: 'Dog',
    intro:
      'Most one-off vomiting in dogs resolves on its own, but repeat episodes, blood, or weakness change the picture. Use the symptom checker below for a fast triage assessment.',
  },
  {
    slug: 'cat-not-eating',
    title: 'Cat Not Eating: How Long Is Too Long?',
    question: 'My cat has stopped eating',
    species: 'Cat',
    intro:
      'Cats that skip more than one full day of food are at risk of hepatic lipidosis. The symptom checker can help you decide if home monitoring or a vet visit is appropriate.',
  },
  {
    slug: 'dog-diarrhea',
    title: 'Dog Diarrhea: Causes, Home Care, and Red Flags',
    question: 'My dog has diarrhea',
    species: 'Dog',
    intro:
      'Soft stool from dietary indiscretion is common. Bloody, watery, or persistent diarrhea needs a closer look. Run the symptom checker to see your next step.',
  },
  {
    slug: 'cat-sneezing',
    title: 'Cat Sneezing: Upper Respiratory or Something More?',
    question: 'My cat is sneezing a lot',
    species: 'Cat',
    intro:
      'Sneezing in cats is often viral upper respiratory infection, but discharge, eye changes, or appetite loss matter. Get a fast triage assessment below.',
  },
  {
    slug: 'lizard-not-basking',
    title: 'Lizard Not Basking: Husbandry or Health?',
    question: 'My lizard is not basking',
    species: 'Reptile',
    intro:
      'Most basking refusal is a husbandry issue — temperature, UVB, or photoperiod. But illness can present this way too. Get a triage assessment with the checker.',
  },
  {
    slug: 'dog-ate-chocolate',
    title: 'My Dog Ate Chocolate: Toxic Dose & Next Steps',
    question: 'My dog ate chocolate',
    species: 'Dog',
    intro:
      'Chocolate toxicity depends on the type, amount, and your dog’s weight. Many cases are emergencies. Use the symptom checker for a fast read.',
  },
  {
    slug: 'cat-breathing-fast',
    title: 'Cat Breathing Fast: A Time-Sensitive Symptom',
    question: 'My cat is breathing fast',
    species: 'Cat',
    intro:
      'A resting respiratory rate over 30 breaths per minute in a cat is often a warning sign. The checker can help you decide if this is an emergency.',
  },
  {
    slug: 'ferret-lethargic',
    title: 'Lethargic Ferret: Insulinoma & Other Causes',
    question: 'My ferret is very lethargic',
    species: 'Ferret',
    intro:
      'Lethargy in ferrets can mean insulinoma, adrenal disease, or simple sleep cycles. Get a fast triage read below.',
  },
  {
    slug: 'bird-fluffed-up',
    title: 'Fluffed-Up Bird: Why Birds Hide Illness',
    question: 'My bird is fluffed up and quiet',
    species: 'Bird',
    intro:
      'Birds hide illness until it’s advanced. A fluffed, quiet bird is rarely "just tired." Use the symptom checker for a fast assessment.',
  },
  {
    slug: 'horse-limping',
    title: 'Horse Limping: Lameness Grade & Vet Triage',
    question: 'My horse is limping on a front leg',
    species: 'Horse',
    intro:
      'Lameness ranges from minor stiffness to fracture. The checker will help you decide if rest or a vet call is the right next step.',
  },
]
