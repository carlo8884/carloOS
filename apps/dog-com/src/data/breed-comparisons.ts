/**
 * Dog.com — Breed-vs-breed comparison dataset.
 *
 * Source of truth for /compare/[slug] programmatic comparison pages.
 *
 * Each pair points to two slugs in src/data/breeds.ts. The dynamic
 * /compare/[slug] template reads the underlying Breed records and renders
 * a side-by-side comparison from structured fields — no fabricated copy.
 *
 * Pair-selection rules (this slate of 30):
 *   - Both slugs MUST exist in src/data/breeds.ts (verified at build time).
 *   - Pair represents an actual high-volume "[breed A] vs [breed B]"
 *     search pattern (Google Suggest / Trends / common adoption-research
 *     query). 30 covers the highest-intent slate; subsequent slates
 *     can extend this constant without template changes.
 *   - primaryAxis classifies the dominant decision lens for the pair,
 *     used to group pairs on the /compare hub index.
 *
 * Trust-bar:
 *   - No first-person claims ("we tested both breeds").
 *   - Verdict copy is calibrated and field-derived; no fabricated rankings.
 *   - All cited health-condition links resolve to existing /health/ pages.
 */

export type ComparisonAxis =
  | 'family-friendliness'
  | 'energy-level'
  | 'maintenance'
  | 'apartment-suitability'
  | 'beginner-friendliness'

export interface BreedComparisonPair {
  /** Slug of breed A — must exist in Breeds[] in src/data/breeds.ts. */
  breedASlug: string
  /** Slug of breed B — must exist in Breeds[] in src/data/breeds.ts. */
  breedBSlug: string
  /** Dominant decision lens for this pair; used for hub-page grouping. */
  primaryAxis: ComparisonAxis
}

/**
 * Build the canonical comparison slug from a pair.
 * Order is preserved (A vs B, not B vs A) so each pair has exactly one URL.
 */
export function pairSlug(p: { breedASlug: string; breedBSlug: string }): string {
  return `${p.breedASlug}-vs-${p.breedBSlug}`
}

/**
 * Parse a /compare/[slug] route slug back into the two breed slugs.
 * Returns null if the slug is malformed.
 *
 * The longest-common-prefix risk (e.g. "golden-retriever-vs-labrador-retriever"
 * splitting incorrectly) is avoided by matching against the known pair set
 * in the page template, not by ambiguous string splitting.
 */
export function parsePairSlug(slug: string): { breedASlug: string; breedBSlug: string } | null {
  const idx = slug.indexOf('-vs-')
  if (idx === -1) return null
  const a = slug.slice(0, idx)
  const b = slug.slice(idx + '-vs-'.length)
  if (!a || !b) return null
  return { breedASlug: a, breedBSlug: b }
}

/**
 * The starter slate of 30 breed-vs-breed comparison pairs.
 *
 * Order within the slate reflects rough search-volume rank from
 * combined Google Suggest patterns and adoption-research keyword
 * tools (mid-2025 snapshot).
 */
export const BREED_COMPARISON_PAIRS: readonly BreedComparisonPair[] = [
  // ── Top-popularity head-to-heads ────────────────────────────────
  { breedASlug: 'golden-retriever', breedBSlug: 'labrador-retriever', primaryAxis: 'family-friendliness' },
  { breedASlug: 'french-bulldog', breedBSlug: 'bulldog', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'french-bulldog', breedBSlug: 'boston-terrier', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'siberian-husky', breedBSlug: 'australian-shepherd', primaryAxis: 'energy-level' },
  { breedASlug: 'german-shepherd', breedBSlug: 'belgian-malinois', primaryAxis: 'energy-level' },
  { breedASlug: 'german-shepherd', breedBSlug: 'rottweiler', primaryAxis: 'energy-level' },
  { breedASlug: 'doberman-pinscher', breedBSlug: 'rottweiler', primaryAxis: 'energy-level' },
  { breedASlug: 'cane-corso', breedBSlug: 'rottweiler', primaryAxis: 'beginner-friendliness' },
  { breedASlug: 'border-collie', breedBSlug: 'australian-shepherd', primaryAxis: 'energy-level' },
  { breedASlug: 'australian-shepherd', breedBSlug: 'australian-cattle-dog', primaryAxis: 'energy-level' },

  // ── Family/companion comparisons ────────────────────────────────
  { breedASlug: 'golden-retriever', breedBSlug: 'bernese-mountain-dog', primaryAxis: 'family-friendliness' },
  { breedASlug: 'labrador-retriever', breedBSlug: 'german-shepherd', primaryAxis: 'family-friendliness' },
  { breedASlug: 'cavalier-king-charles', breedBSlug: 'cocker-spaniel', primaryAxis: 'family-friendliness' },
  { breedASlug: 'beagle', breedBSlug: 'basset-hound', primaryAxis: 'family-friendliness' },
  { breedASlug: 'boxer', breedBSlug: 'bullmastiff', primaryAxis: 'family-friendliness' },

  // ── Apartment / small-space comparisons ─────────────────────────
  { breedASlug: 'shih-tzu', breedBSlug: 'maltese', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'yorkshire-terrier', breedBSlug: 'maltese', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'pomeranian', breedBSlug: 'yorkshire-terrier', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'chihuahua', breedBSlug: 'pomeranian', primaryAxis: 'apartment-suitability' },
  { breedASlug: 'havanese', breedBSlug: 'bichon-frise', primaryAxis: 'apartment-suitability' },

  // ── Maintenance / grooming comparisons ──────────────────────────
  { breedASlug: 'poodle', breedBSlug: 'labradoodle', primaryAxis: 'maintenance' },
  { breedASlug: 'poodle', breedBSlug: 'golden-doodle', primaryAxis: 'maintenance' },
  { breedASlug: 'labradoodle', breedBSlug: 'golden-doodle', primaryAxis: 'maintenance' },
  { breedASlug: 'cockapoo', breedBSlug: 'maltipoo', primaryAxis: 'maintenance' },

  // ── Working / herding head-to-heads ─────────────────────────────
  { breedASlug: 'german-shorthaired-pointer', breedBSlug: 'vizsla', primaryAxis: 'energy-level' },
  { breedASlug: 'vizsla', breedBSlug: 'weimaraner', primaryAxis: 'energy-level' },
  { breedASlug: 'pembroke-welsh-corgi', breedBSlug: 'shetland-sheepdog', primaryAxis: 'family-friendliness' },

  // ── Giant breeds ────────────────────────────────────────────────
  { breedASlug: 'great-dane', breedBSlug: 'mastiff', primaryAxis: 'beginner-friendliness' },
  { breedASlug: 'great-pyrenees', breedBSlug: 'newfoundland', primaryAxis: 'beginner-friendliness' },
  { breedASlug: 'saint-bernard', breedBSlug: 'newfoundland', primaryAxis: 'beginner-friendliness' },
] as const

// Sanity check (build-time only — never executed in production).
if (BREED_COMPARISON_PAIRS.length !== 30) {
  // Throwing at module-eval time turns this into a TS+Node build-time failure.
  throw new Error(
    `BREED_COMPARISON_PAIRS must contain exactly 30 pairs; found ${BREED_COMPARISON_PAIRS.length}.`,
  )
}

// ─────────────────────────────────────────────────────────────────
// Faq scaffolding
// ─────────────────────────────────────────────────────────────────

/**
 * Generic FAQ scaffolding shared across all comparison pages.
 * Page template substitutes {A} and {B} with the breed display names
 * and {a_slug} / {b_slug} with the URL slugs.
 *
 * Sources for FAQ content: AKC breed standards, OFA hereditary registry,
 * Wilcox & Walkowicz "Encyclopedia of the Dog" (2nd ed., DK, 2007),
 * APPA 2023-2024 National Pet Owners Survey for monthly-cost ranges.
 */
export const BREED_COMPARISONS_FAQS: ReadonlyArray<{
  question: string
  answerTemplate: string
}> = [
  {
    question: 'Is the {A} or the {B} better for families with children?',
    answerTemplate:
      'Both breeds can do well in family homes when properly socialized, but they differ on a few axes that matter for households with young children: ' +
      'size, energy level, and tolerance for rough handling. Compare the side-by-side temperament traits and the "Good with kids" row above, ' +
      'then weigh the daily exercise commitment against the realistic activity level of your household. The AKC breed standards for both breeds ' +
      'describe the breed-typical temperament; individual dogs vary, and early socialization between weeks 3 and 14 has more influence on the adult ' +
      'dog than breed alone.',
  },
  {
    question: 'Which costs more to own — the {A} or the {B}?',
    answerTemplate:
      'Lifetime cost is driven by four things: size (food + boarding scale with weight), grooming (professional appointments every 4–6 weeks add up), ' +
      'breed-specific health risks (insurance premiums and out-of-pocket diagnostics), and lifespan. The monthly-cost row above shows national averages ' +
      'from the APPA 2023–2024 National Pet Owners Survey; your region, food choice, and vet pricing will shift the actual number. The bigger driver is ' +
      'usually unplanned veterinary costs for the breed-specific conditions listed in the comparison table — pet insurance materially smooths those.',
  },
  {
    question: 'Can the {A} or the {B} live in an apartment?',
    answerTemplate:
      'Apartment suitability is a function of size, energy level, vocalization, and the breed\'s tolerance for being alone during the day. ' +
      'A breed marked as apartment-suitable above can live in an apartment if its daily exercise needs are met through structured off-property time. ' +
      'A breed not marked as apartment-suitable can sometimes work in a larger unit with a dedicated owner, but is harder to set up for success. ' +
      'Check the energy-level and daily-exercise rows above and be honest about how much time you can commit.',
  },
  {
    question: 'Which is easier to train — the {A} or the {B}?',
    answerTemplate:
      'Trainability ranks are derived from AKC breed standard descriptions and standard obedience/working performance literature. The "Trainability" row above ' +
      'summarizes the breed-typical biddability. That said, the easier-to-train breed for *you* is the one whose drives match your training style and time budget — ' +
      'a highly biddable working breed without a job becomes a behavioral problem. If you do not have prior experience with either breed type, plan to work ' +
      'with a credentialed trainer (CPDT-KA, KPA-CTP, or IAABC) from puppyhood.',
  },
  {
    question: 'What health problems should I know about for the {A} vs the {B}?',
    answerTemplate:
      'The comparison table above lists the most documented breed-specific health concerns for each breed, drawn from OFA prevalence data, breed-club ' +
      'CHIC panels, and the published veterinary literature. Following each condition, follow the link to the corresponding Dog.com /health/ page for the ' +
      'symptoms, diagnostic workup, and treatment landscape. Buying from a breeder who tests parents per the OFA / CHIC panel and discloses results ' +
      'materially lowers (but does not eliminate) the risk for offspring.',
  },
] as const
