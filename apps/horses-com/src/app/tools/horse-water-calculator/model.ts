/**
 * Merck Veterinary Manual, Nutritional Requirements of Horses:
 * https://www.merckvetmanual.com/management-and-nutrition/nutrition-horses/nutritional-requirements-of-horses-and-other-equids
 * Average minimal maintenance requirement of a sedentary adult horse in a
 * thermoneutral environment: 5 L/100 kg/day. 5 L/100 kg ≈ 0.60 US gal per 100 lb.
 * GAL_PER_100_LB_HIGH is a planning figure (about 10 gal at 1,000 lb), not
 * Merck's minimum. Merck says dry hay can almost double intake; this file
 * does not add a second coefficient.
 */

export const GAL_PER_100_LB_LOW = 0.6
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
