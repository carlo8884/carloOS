/** Daily cat food grams from the same feline RER/DER factors as the calorie calculator. */

export const LB_PER_KG = 2.2046

export const CAT_STAGES = [
  { label: 'Neutered indoor adult', factor: 1.2 },
  { label: 'Intact indoor adult', factor: 1.4 },
  { label: 'Neutered outdoor / active', factor: 1.4 },
  { label: 'Intact outdoor / active', factor: 1.6 },
  { label: 'Weight loss (vet-supervised)', factor: 0.8 },
  { label: 'Weight gain', factor: 1.3 },
  { label: 'Kitten', factor: 2.5 },
  { label: 'Senior indoor', factor: 1.1 },
  { label: 'Obese-prone indoor', factor: 1.0 },
] as const

export function weightKg(weight: number, unit: 'lb' | 'kg'): number {
  return unit === 'lb' ? weight / LB_PER_KG : weight
}

/** RER = 70 × kg^0.75. DER = factor × RER. Grams = DER × 1000 / kcal per kg. */
export function catFoodGrams(weight: number, unit: 'lb' | 'kg', factor: number, kcalPerKg: number): {
  rer: number
  der: number
  grams: number
} {
  const kg = weightKg(weight, unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const der = factor * rer
  const grams = (der * 1000) / kcalPerKg
  return { rer, der, grams }
}
