/**
 * Temperate idle band: 0.5–1.0 US gallon per 100 lb.
 * At 1,000 lb that is 5–10 gallons, the water page's idle-adult line.
 * The page does not publish a second coefficient for heat, work, or lactation.
 */

export const GAL_PER_100_LB_LOW = 0.5
export const GAL_PER_100_LB_HIGH = 1
export const LITERS_PER_GALLON = 3.785411784

export function horseWaterGallons(weightLb: number): { lowGal: number; highGal: number; lowL: number; highL: number } {
  const lowGal = (weightLb / 100) * GAL_PER_100_LB_LOW
  const highGal = (weightLb / 100) * GAL_PER_100_LB_HIGH
  return {
    lowGal,
    highGal,
    lowL: lowGal * LITERS_PER_GALLON,
    highL: highGal * LITERS_PER_GALLON,
  }
}
