/**
 * Shared content types for condition + medication MDX-style modules.
 *
 * Each condition page is a structured object exported from
 * src/content/conditions/<slug>.ts. The dynamic /conditions/[slug] route
 * renders the structure verbatim, so the script generator can populate
 * fields without any markdown parsing dependency.
 *
 * Rationale: avoids @next/mdx setup overhead, keeps each condition
 * page strongly typed, and lets the build fail loudly if a field is
 * missing rather than silently rendering an empty section.
 */

export interface FAQ {
  question: string
  answer: string
}

export interface Citation {
  /** Human-readable label, e.g. "Cornell University CVM — Feline Chronic Kidney Disease" */
  label: string
  /** Live, publicly resolvable URL */
  url: string
}

export interface ProductRecommendation {
  /** Display name for the recommended product or product category */
  name: string
  /** One-line description / why we recommend it */
  description: string
  /** Affiliate vendor */
  vendor:
    | 'chewyrx'
    | 'chewy'
    | 'amazon'
    | 'petwellbeing'
    | 'nuvet'
  /** Product path on the vendor (Chewy) or Amazon search query */
  path?: string
  search?: string
  asin?: string
}

export interface ConditionContent {
  slug: string
  /** ISO date — when the article was first written/generated */
  publishedAt: string
  /** ISO date — last editorial review */
  updatedAt: string
  /** 1-paragraph hero abstract — appears immediately under the title */
  abstract: string
  /** Overview / "what is it" — 2–4 paragraphs */
  overview: string[]
  /** Clinical signs / what owners notice — bulleted */
  clinicalSigns: string[]
  /** Urgent red flags — bulleted, rendered inside a warning callout */
  redFlags: string[]
  /** Treatment options — narrative paragraphs */
  treatment: string[]
  /** Lifestyle / home changes — bulleted */
  lifestyleChanges: string[]
  /** Prognosis paragraph(s) */
  prognosis: string[]
  /** Recommended products / Rx — surfaces affiliate links */
  recommendedProducts: ProductRecommendation[]
  /** FAQ accordion — 3 to 5 entries */
  faqs: FAQ[]
  /** Citations to reputable veterinary references */
  citations: Citation[]
}

export interface MedicationContent {
  slug: string
  publishedAt: string
  updatedAt: string
  /** 1-paragraph abstract */
  abstract: string
  /** Overview narrative */
  overview: string[]
  /** Conditions treated (text labels) */
  conditionsTreated: string[]
  /** Common side effects — bulleted */
  sideEffects: string[]
  /** Dose-range narrative — flagged with strong vet disclaimer in the page template */
  doseRange: string[]
  /** Drug interactions / contraindications */
  interactions: string[]
  /** Monitoring requirements */
  monitoring: string[]
  /** FAQ accordion */
  faqs: FAQ[]
  /** Citations */
  citations: Citation[]
}
