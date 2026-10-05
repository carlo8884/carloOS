/** Daily food grams from the same RER/MER factors as the calorie calculator. */

export const LB_PER_KG = 2.2046

export const DOG_STAGES = [
  { label: 'Neutered adult', factor: 1.6 },
  { label: 'Intact adult', factor: 1.8 },
  { label: 'Weight loss', factor: 1.0 },
  { label: 'Weight gain', factor: 1.7 },
  { label: 'Light work / active', factor: 2.0 },
  { label: 'Puppy (0-4 months)', factor: 3.0 },
  { label: 'Puppy (4-12 months)', factor: 2.0 },
  { label: 'Senior (less active)', factor: 1.4 },
] as const

export function weightKg(weight: number, unit: 'lb' | 'kg'): number {
  return unit === 'lb' ? weight / LB_PER_KG : weight
}

/** RER = 70 × kg^0.75. MER = factor × RER. Grams = MER × 1000 / kcal per kg. */
export function foodGrams(weight: number, unit: 'lb' | 'kg', factor: number, kcalPerKg: number): {
  rer: number
  mer: number
  grams: number
} {
  const kg = weightKg(weight, unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const mer = factor * rer
  const grams = (mer * 1000) / kcalPerKg
  return { rer, mer, grams }
}
