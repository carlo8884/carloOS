/**
 * PetFood.com editorial content data — consumed by gen-petfood-pages.mjs.
 *
 * Each page is 900-1400 words, fact-dense, anchored to AAFCO / NRC / FDA CVM /
 * WSAVA / peer-reviewed sources. Internal links use [[label|/href]] markers.
 * Apostrophes are fine inside JS strings here (single-quote keys are avoided
 * for values with apostrophes by using double-quoted or backtick strings).
 *
 * Clusters:
 *   nutrition/  — fundamentals (macronutrients, calories, AAFCO, dry-matter)
 *   ingredients/ — ingredient deep-dives (extends existing hub)
 *   diets/      — condition-specific therapeutic diets
 *   feeding/    — feeding guides + calculator companions
 *   compare/    — food-type comparisons (raw/fresh/kibble/canned/etc.)
 *   supplements/ — supplement reference
 *   species/    — dog vs cat nutrition
 *   myths/      — myth-busting
 *   guides/     — additional foundational guides (extends existing)
 *   brands/     — additional brand/food-type evaluations (extends existing)
 */

import { NUTRITION } from './petfood/nutrition.mjs'
import { INGREDIENTS } from './petfood/ingredients.mjs'
import { DIETS } from './petfood/diets.mjs'
import { FEEDING } from './petfood/feeding.mjs'
import { COMPARE } from './petfood/compare.mjs'
import { SUPPLEMENTS } from './petfood/supplements.mjs'
import { SPECIES } from './petfood/species.mjs'
import { MYTHS } from './petfood/myths.mjs'
import { GUIDES } from './petfood/guides.mjs'
import { BRANDS } from './petfood/brands.mjs'
import { HUBS } from './petfood/hubs.mjs'

export const PAGES = [
  ...NUTRITION,
  ...INGREDIENTS,
  ...DIETS,
  ...FEEDING,
  ...COMPARE,
  ...SUPPLEMENTS,
  ...SPECIES,
  ...MYTHS,
  ...GUIDES,
  ...BRANDS,
]

export { HUBS }
