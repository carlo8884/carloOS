/** Daily food grams. Adult maintenance uses the WSAVA July 2020 chart (2006 NRC). Other multipliers are planning figures. */

export const LB_PER_KG = 2.2046

export type DogStage =
  | { label: string; kind: 'nrc'; kcalPerKg075: number }
  | { label: string; kind: 'planning'; factor: number }

export const DOG_STAGES: readonly DogStage[] = [
  { label: 'Inactive adult', kind: 'nrc', kcalPerKg075: 95 },
  { label: 'Active adult', kind: 'nrc', kcalPerKg075: 130 },
  { label: 'Neutered adult', kind: 'planning', factor: 1.6 },
  { label: 'Intact adult', kind: 'planning', factor: 1.8 },
  { label: 'Weight loss', kind: 'planning', factor: 1.0 },
  { label: 'Weight gain', kind: 'planning', factor: 1.7 },
  { label: 'Light work / active', kind: 'planning', factor: 2.0 },
  { label: 'Puppy (0-4 months)', kind: 'planning', factor: 3.0 },
  { label: 'Puppy (4-12 months)', kind: 'planning', factor: 2.0 },
  { label: 'Senior (less active)', kind: 'planning', factor: 1.4 },
]

export function stageOptionLabel(stage: DogStage): string {
  return stage.kind === 'nrc'
    ? `${stage.label} (${stage.kcalPerKg075} × kg^0.75)`
    : `${stage.label} (planning factor ${stage.factor})`
}

export function weightKg(weight: number, unit: 'lb' | 'kg'): number {
  return unit === 'lb' ? weight / LB_PER_KG : weight
}

/** Planning stages: RER = 70 × kg^0.75, MER = factor × RER.
 *  NRC stages: kcal/day = 95 or 130 × kg^0.75 (WSAVA July 2020).
 *  Grams = MER × 1000 / kcal per kg. */
export function foodGrams(weight: number, unit: 'lb' | 'kg', stage: DogStage, kcalPerKg: number): {
  rer: number
  mer: number
  grams: number
} {
  const kg = weightKg(weight, unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const mer = stage.kind === 'nrc' ? stage.kcalPerKg075 * Math.pow(kg, 0.75) : stage.factor * rer
  const grams = (mer * 1000) / kcalPerKg
  return { rer, mer, grams }
}
