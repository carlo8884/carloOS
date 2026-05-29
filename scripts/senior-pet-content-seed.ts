/**
 * Canonical editorial seed for SeniorPets content.
 *
 * 30 conditions (15 canine + 15 feline) and 20 medications.
 *
 * Editorial policy:
 *  - Third-person encyclopedic voice. No first-person anecdotes.
 *  - Citations are real public veterinary references only.
 *  - No fabricated DVM bylines anywhere in body content.
 *  - Recommended-product entries surface affiliate vendors but the
 *    recommendations are editorial first; affiliate links are added second.
 *
 * Modules are split into per-category partials in scripts/seed/* so the
 * file stays editable. Each partial exports a slug → record map; this
 * index simply merges them.
 *
 * Architect S9 / Directive 6.
 */

import { CANINE_CONDITIONS_1 } from './seed/canine-conditions-1'
import { CANINE_CONDITIONS_2 } from './seed/canine-conditions-2'
import { CANINE_CONDITIONS_3 } from './seed/canine-conditions-3'
import { FELINE_CONDITIONS_1 } from './seed/feline-conditions-1'
import { FELINE_CONDITIONS_2 } from './seed/feline-conditions-2'
import { FELINE_CONDITIONS_3 } from './seed/feline-conditions-3'
import { MEDICATIONS_1 } from './seed/medications-1'
import { MEDICATIONS_2 } from './seed/medications-2'
import { MEDICATIONS_3 } from './seed/medications-3'

export const CONDITION_SEED: Record<string, unknown> = {
  ...CANINE_CONDITIONS_1,
  ...CANINE_CONDITIONS_2,
  ...CANINE_CONDITIONS_3,
  ...FELINE_CONDITIONS_1,
  ...FELINE_CONDITIONS_2,
  ...FELINE_CONDITIONS_3,
}

export const MEDICATION_SEED: Record<string, unknown> = {
  ...MEDICATIONS_1,
  ...MEDICATIONS_2,
  ...MEDICATIONS_3,
}
