/**
 * Horse height notation. One hand is 4 inches.
 * 15.2hh means 15 hands and 2 inches, not 15.2 decimal hands.
 * 14.2hh is 58 inches. That height and under is a pony.
 */

const CM_PER_INCH = 2.54
const IN_PER_HAND = 4
const PONY_MAX_INCHES = 14 * IN_PER_HAND + 2

export interface HandsResult {
  inches: number
  cm: number
  hands: number
  handInches: number
  /** hands.inches notation string, e.g. "15.2" */
  handsNotation: string
  isPony: boolean
}

export function fromInches(totalInches: number): HandsResult {
  let hands = Math.floor(totalInches / IN_PER_HAND)
  // The digit after the point is 0–3. A remainder that rounds to 4 carries
  // into the next hand, so the label never reads 15.4.
  let handInches = Math.round(totalInches - hands * IN_PER_HAND)
  if (handInches === IN_PER_HAND) {
    hands += 1
    handInches = 0
  }
  return {
    inches: totalInches,
    cm: totalInches * CM_PER_INCH,
    hands,
    handInches,
    handsNotation: `${hands}.${handInches}`,
    isPony: totalInches <= PONY_MAX_INCHES,
  }
}
