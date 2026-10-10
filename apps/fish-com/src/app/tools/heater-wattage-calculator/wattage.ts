/**
 * Aquarium heater sizing shared by the interactive calculator and the
 * quick-reference table. One formula so a 40 gal default cannot disagree
 * with the chart.
 *
 * Planning figures, not a manufacturer chart: 3 W per gallon for a 10°F
 * lift, scaled linearly, times an insulation factor (open 1.2, lid 1,
 * sealed 0.85). Then 25% headroom, then the next stock heater size.
 */

export const HEATER_STEPS = [25, 50, 75, 100, 150, 200, 250, 300, 400, 500, 800] as const

export type Insulation = 'open' | 'lid' | 'sealed'

export function pickHeater(watts: number): number {
  for (const w of HEATER_STEPS) if (w >= watts) return w
  return HEATER_STEPS[HEATER_STEPS.length - 1]!
}

export function insulationFactor(insulation: Insulation): number {
  if (insulation === 'open') return 1.2
  if (insulation === 'sealed') return 0.85
  return 1
}

export function sizeHeater(gal: number, deltaF: number, insulation: Insulation) {
  const watts = gal * 3 * (deltaF / 10) * insulationFactor(insulation)
  const recommended = watts > 0 ? watts * 1.25 : 0
  const heaterPick = watts > 0 ? pickHeater(recommended) : 0
  return { watts, recommended, heaterPick }
}

/** Chart assumptions — the calculator's default inputs. */
export const REFERENCE_ROOM_F = 68
export const REFERENCE_TARGET_F = 78
export const REFERENCE_LIFT_F = REFERENCE_TARGET_F - REFERENCE_ROOM_F
export const REFERENCE_INSULATION: Insulation = 'lid'

export type ReferenceRow = {
  label: string
  single: string
  dual: string
}

const REFERENCE_SIZES: { label: string; gallons: number; dual: boolean; controller: boolean }[] = [
  { label: '5–10 gal', gallons: 10, dual: false, controller: false },
  { label: '20 gal', gallons: 20, dual: false, controller: false },
  { label: '29 gal', gallons: 29, dual: false, controller: false },
  { label: '40 gal', gallons: 40, dual: true, controller: false },
  { label: '55 gal', gallons: 55, dual: true, controller: false },
  { label: '75 gal', gallons: 75, dual: true, controller: false },
  { label: '125 gal', gallons: 125, dual: true, controller: false },
  { label: '180+ gal', gallons: 180, dual: true, controller: true },
]

export function referenceRows(): ReferenceRow[] {
  return REFERENCE_SIZES.map((row) => {
    const { heaterPick } = sizeHeater(row.gallons, REFERENCE_LIFT_F, REFERENCE_INSULATION)
    const each = pickHeater(heaterPick / 2)
    const dual = row.dual
      ? `2 × ${each}W${row.controller ? ' + controller' : ''}`
      : '—'
    return { label: row.label, single: `${heaterPick}W`, dual }
  })
}
