/** Saltwater setup page: 1–1.5 lb of live rock per gallon. */

export const LB_PER_GAL_LOW = 1
export const LB_PER_GAL_HIGH = 1.5

export function liveRockPounds(gallons: number): { lowLb: number; highLb: number } {
  return { lowLb: gallons * LB_PER_GAL_LOW, highLb: gallons * LB_PER_GAL_HIGH }
}
