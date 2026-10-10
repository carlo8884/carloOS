/** Daily cat food grams. Adult maintenance uses the WSAVA July 2020 chart (2006 NRC). Other multipliers are planning figures. */

export const LB_PER_KG = 2.2046

export type CatStage =
  | { label: string; kind: 'nrc-lean' }
  | { label: string; kind: 'nrc-obese' }
  | { label: string; kind: 'planning'; factor: number }

export const CAT_STAGES: readonly CatStage[] = [
  { label: 'Lean adult', kind: 'nrc-lean' },
  { label: 'Obese-prone adult', kind: 'nrc-obese' },
  { label: 'Neutered indoor adult', kind: 'planning', factor: 1.2 },
  { label: 'Intact indoor adult', kind: 'planning', factor: 1.4 },
  { label: 'Neutered outdoor / active', kind: 'planning', factor: 1.4 },
  { label: 'Intact outdoor / active', kind: 'planning', factor: 1.6 },
  { label: 'Weight loss (vet-supervised)', kind: 'planning', factor: 0.8 },
  { label: 'Weight gain', kind: 'planning', factor: 1.3 },
  { label: 'Kitten', kind: 'planning', factor: 2.5 },
  { label: 'Senior indoor', kind: 'planning', factor: 1.1 },
  { label: 'Obese-prone indoor', kind: 'planning', factor: 1.0 },
]

export function stageOptionLabel(stage: CatStage): string {
  if (stage.kind === 'nrc-lean') return 'Lean adult (100 × kg^0.67)'
  if (stage.kind === 'nrc-obese') return 'Obese-prone adult (130 × kg^0.40)'
  return `${stage.label} (planning factor ${stage.factor})`
}

export function weightKg(weight: number, unit: 'lb' | 'kg'): number {
  return unit === 'lb' ? weight / LB_PER_KG : weight
}

/** Planning stages: RER = 70 × kg^0.75, DER = factor × RER.
 *  Lean adult: 100 × kg^0.67. Obese-prone adult: 130 × kg^0.40.
 *  Grams = DER × 1000 / kcal per kg. */
export function catFoodGrams(weight: number, unit: 'lb' | 'kg', stage: CatStage | number, kcalPerKg: number): {
  rer: number
  der: number
  grams: number
} {
  const resolved: CatStage = typeof stage === 'number'
    ? { label: 'planning factor', kind: 'planning', factor: stage }
    : stage
  const kg = weightKg(weight, unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const der = resolved.kind === 'nrc-lean'
    ? 100 * Math.pow(kg, 0.67)
    : resolved.kind === 'nrc-obese'
      ? 130 * Math.pow(kg, 0.4)
      : resolved.factor * rer
  const grams = (der * 1000) / kcalPerKg
  return { rer, der, grams }
}
