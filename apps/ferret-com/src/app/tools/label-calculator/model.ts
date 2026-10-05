/**
 * Dry-matter conversion and carbohydrate by difference from the label page.
 * Dry-matter % = 100 − moisture.
 * Dry-matter nutrient = as-fed nutrient ÷ dry-matter % × 100.
 * Carbohydrate by difference = 100 − protein − fat − fiber − moisture − ash.
 * Omitted ash uses the page's 6–8% note at the midpoint, 7.
 */

export const OMITTED_ASH = 7

export interface LabelInput {
  protein: number
  fat: number
  fiber: number
  moisture: number
  ash: number | null
}

export interface LabelResult {
  ashUsed: number
  ashOmitted: boolean
  asFedCarb: number
  dryMatterPercent: number
  dmProtein: number
  dmFat: number
  dmCarb: number
}

export function labelMath(input: LabelInput): LabelResult | null {
  const ashOmitted = input.ash == null
  const ashUsed = ashOmitted ? OMITTED_ASH : input.ash ?? OMITTED_ASH
  const dryMatterPercent = 100 - input.moisture
  if (dryMatterPercent <= 0) return null
  const asFedCarb = 100 - input.protein - input.fat - input.fiber - input.moisture - ashUsed
  if (asFedCarb < 0) return null
  const toDm = (asFed: number) => (asFed / dryMatterPercent) * 100
  return {
    ashUsed,
    ashOmitted,
    asFedCarb,
    dryMatterPercent,
    dmProtein: toDm(input.protein),
    dmFat: toDm(input.fat),
    dmCarb: toDm(asFedCarb),
  }
}
