/**
 * Slim-inch bioload planning model for the Fish.com stocking calculator.
 *
 * This is an editorial planning heuristic, not a published standard, lab
 * calibration, or species-stocking model. Coefficients are ordinal adjustments
 * used to sketch a ceiling — they are not measured biofilter capacity or
 * dissolved-oxygen data for a specific tank.
 */

export type Filtration = 'under' | 'rated' | 'over' | 'heavy'
export type WaterType = 'fresh' | 'salt'
export type Style = 'community' | 'cichlid' | 'planted' | 'reef'

export const FILTRATION_FACTOR: Record<Filtration, number> = {
  under: 0.75,
  rated: 1.0,
  over: 1.3,
  heavy: 1.6,
}

export const STYLE_FACTOR: Record<Style, number> = {
  community: 1.0,
  planted: 1.15,
  cichlid: 0.7,
  reef: 0.55,
}

export const STYLES_FOR_WATER: Record<WaterType, readonly Style[]> = {
  fresh: ['community', 'planted', 'cichlid'],
  salt: ['community', 'reef'],
}

export const PLANNING_BAND_LOW = 0.6
export const PLANNING_BAND_HIGH = 0.8

/** Typical US glass footprints used only for the worked-example table. */
export const EXAMPLE_FOOTPRINTS = [
  { id: '10', label: '10 gal', footprint: '20 × 10 in', gal: 10, lengthIn: 20, widthIn: 10 },
  { id: '20l', label: '20 gal long', footprint: '30 × 12 in', gal: 20, lengthIn: 30, widthIn: 12 },
  { id: '40b', label: '40 gal breeder', footprint: '36 × 18 in', gal: 40, lengthIn: 36, widthIn: 18 },
  { id: '75', label: '75 gal', footprint: '48 × 18 in', gal: 75, lengthIn: 48, widthIn: 18 },
  { id: '125', label: '125 gal', footprint: '72 × 18 in', gal: 125, lengthIn: 72, widthIn: 18 },
] as const

export type StockingEstimate = {
  slimInches: number
  slimInchesSurface: number
  slimInchesVolume: number
  surfaceIn2: number
  planningLow: number
  planningHigh: number
  boundBy: 'volume' | 'surface area'
}

export function estimateStocking(input: {
  gal: number
  lengthIn: number
  widthIn: number
  waterType: WaterType
  filtration: Filtration
  style: Style
}): StockingEstimate | null {
  const { gal, lengthIn, widthIn, waterType, filtration, style } = input
  if (gal <= 0 || lengthIn <= 0 || widthIn <= 0) return null

  const surfaceIn2 = lengthIn * widthIn
  // Rough planning model only: ~12 sq in surface per slim-community inch (freshwater).
  // Saltwater uses ~2× surface per inch. This is a bioload ceiling heuristic, not
  // species advice — it does not encode schooling, adult size, or territory.
  const baseInPerSqIn = waterType === 'salt' ? 1 / 24 : 1 / 12
  const filtrationAdj = FILTRATION_FACTOR[filtration]
  const styleAdj = STYLE_FACTOR[style]

  const slimInchesSurface = surfaceIn2 * baseInPerSqIn * filtrationAdj * styleAdj
  // Volume sanity cap — even infinite surface can't override absolute water volume
  const slimInchesVolume = gal * (waterType === 'salt' ? 0.6 : 1.1) * filtrationAdj * styleAdj
  const slimInches = Math.min(slimInchesSurface, slimInchesVolume)
  // Default 40g / 36×18 community / rated: volume 44, surface 54, ceiling 44, 60–80% band 26–35
  const planningLow = slimInches * PLANNING_BAND_LOW
  const planningHigh = slimInches * PLANNING_BAND_HIGH
  const boundBy = slimInchesVolume <= slimInchesSurface ? 'volume' : 'surface area'

  return {
    slimInches,
    slimInchesSurface,
    slimInchesVolume,
    surfaceIn2,
    planningLow,
    planningHigh,
    boundBy,
  }
}

export function formatSlimBand(estimate: StockingEstimate): string {
  return `${estimate.slimInches.toFixed(0)} ceiling · ${estimate.planningLow.toFixed(0)}–${estimate.planningHigh.toFixed(0)} band`
}
