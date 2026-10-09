/**
 * Closing product picks for calculator results.
 * Sizes and products are the ones already printed on that site's reviews.
 * A gap in a published chart does not get a guessed band.
 */

export interface MatchedPick {
  href: string
  label: string
  detail: string
}

const ICRATE_LENGTHS = [18, 22, 24, 30, 36, 42, 48] as const

/** MidWest iCrate search for a standard length inside the review's 18–54 inch line. */
export function icratePick(lengthInches: number | null): MatchedPick {
  if (lengthInches != null && (ICRATE_LENGTHS as readonly number[]).includes(lengthInches)) {
    return {
      href: `/go/amazon-brand/midwest+icrate+${lengthInches}+inch+dog+crate?s=tools-dog-crate-size`,
      label: `Browse the ${lengthInches}-inch MidWest iCrate on Amazon`,
      detail: `The crate review lists the iCrate from 18 inches to 54 inches. This result is the ${lengthInches}-inch standard size.`,
    }
  }
  return {
    href: '/go/amazon-brand/midwest+icrate+dog+crate?s=tools-dog-crate-size',
    label: 'Browse MidWest iCrate dog crates on Amazon',
    detail: 'This result is larger than the 48-inch standard on this calculator. The crate review lists the iCrate up to 54 inches.',
  }
}

interface GallonBand {
  min: number
  max: number
  watts: string
  search: string
}

/** Heater-review chart: 5 gal, 10–20, 30–40, 50–75, 100+. */
const HEATER_GALLON_BANDS: GallonBand[] = [
  { min: 5, max: 5, watts: '25–50W', search: 'eheim+jager+25w+heater' },
  { min: 10, max: 20, watts: '50–100W', search: 'eheim+jager+50w+heater' },
  { min: 30, max: 40, watts: '100–150W', search: 'eheim+jager+100w+heater' },
  { min: 50, max: 75, watts: '200–250W', search: 'eheim+jager+200w+heater' },
  { min: 100, max: Number.POSITIVE_INFINITY, watts: '300W or more', search: 'eheim+jager+300w+heater' },
]

export function heaterFromGallons(gallons: number, source = 'tools-aquarium-volume'): MatchedPick {
  const gal = Math.round(gallons)
  const band = HEATER_GALLON_BANDS.find((row) => gal >= row.min && gal <= row.max)
  if (!band) {
    return {
      href: `/go/amazon-brand/eheim+jager+heater?s=${source}`,
      label: 'Browse Eheim Jager heaters on Amazon',
      detail: 'The heater review chart does not list a wattage band for this gallon count. It lists 5 gallons, 10–20, 30–40, 50–75, and 100 gallons or more.',
    }
  }
  const missedWatt = band.search.includes('25w')
  return {
    href: `/go/amazon-brand/${band.search}?s=${source}`,
    label: missedWatt
      ? 'Search Amazon for a 25W Eheim Jager'
      : `Browse the Eheim Jager in the review's ${band.watts} band`,
    detail: `The heater review lists ${band.watts} for this gallon band. The Eheim Jager card lists 25W to 300W.`,
  }
}

const EHEIM_WATTS = [25, 50, 75, 100, 150, 200, 250, 300] as const

/** Stock heater size, only when it sits on the Eheim card's 25W–300W line. */
export function heaterFromStockWatts(watts: number, source = 'tools-heater-wattage-calculator'): MatchedPick {
  if ((EHEIM_WATTS as readonly number[]).includes(watts)) {
    return {
      href: `/go/amazon-brand/eheim+jager+${watts}w+heater?s=${source}`,
      label: watts === 25
        ? 'Search Amazon for a 25W Eheim Jager'
        : `Browse the ${watts}W Eheim Jager on Amazon`,
      detail: `The Eheim Jager card lists 25W to 300W. This result's stock size is ${watts}W.`,
    }
  }
  return {
    href: `/go/amazon-brand/eheim+jager+heater?s=${source}`,
    label: 'Browse Eheim Jager heaters on Amazon',
    detail: `This result's stock size is ${watts}W. The Eheim Jager card stops at 300W, so this search is the heater the review names, not a wattage that card does not list.`,
  }
}

/** US sizes the winter-blanket review prints as the common full-size steps. */
export const REVIEW_BLANKET_INCHES = [75, 78, 81, 84] as const

/** Same 3-inch rounding the blanket calculator already uses, clamped 48–90. */
export function roundBlanketInches(inches: number): number {
  return Math.max(48, Math.min(90, Math.round(inches / 3) * 3))
}

export function blanketPick(
  usInches: number,
  source: string,
  basis: 'chest-to-tail' | 'body-length' = 'chest-to-tail',
): MatchedPick {
  const size = Math.round(usInches)
  const measurement =
    basis === 'body-length'
      ? `This weight estimate does not set a blanket size. Blanket size on the review is the chest-to-tail length. The body length entered here, rounded to the same 3-inch step, is ${size} inches.`
      : `This result is ${size} inches, the chest-to-tail length rounded to the blanket calculator's 3-inch step.`
  if (size === 75 || size === 78) {
    return {
      href: `/go/amazon-brand/turnout+blanket+${size}+inch?s=${source}`,
      label: `Search Amazon for a ${size}-inch turnout blanket`,
      detail: `${measurement} The winter blanket review lists US sizes 75, 78, 81, and 84. The Rambo Original is the premium turnout on that review.`,
    }
  }
  if (size === 81 || size === 84) {
    return {
      href: '/reviews/best-winter-horse-blankets',
      label: 'Read the winter blanket review',
      detail: `${measurement} The winter blanket review lists US sizes 75, 78, 81, and 84. The Rambo Original is the premium turnout on that review.`,
    }
  }
  return {
    href: '/go/amazon-brand/waterproof+turnout+horse+blanket+winter?s=tools-horse-blanket-size-calculator',
    label: 'Browse winter horse blankets on Amazon',
    detail: `${measurement} The review names 75, 78, 81, and 84 as the common full-size steps, so this link is the winter-blanket search the blanket-size calculator already uses rather than a size that review does not print.`,
  }
}

/** Ferret-cage review: Kaytee for one ferret, Ferret Nation double for a pair or trio. */
export function ferretCagePick(count: number): MatchedPick {
  if (count <= 1) {
    return {
      href: '/go/amazon-brand/kaytee+ferret+home+multi+level?s=tools-cage-size-calculator',
      label: 'Browse the Kaytee multi-level ferret home on Amazon',
      detail: 'The cage review assigns the Kaytee to a single ferret with daily out-time.',
    }
  }
  if (count <= 4) {
    return {
      href: '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=tools-cage-size-calculator',
      label: 'Search Amazon for the Ferret Nation double unit',
      detail: 'The cage review lists the Ferret Nation double for 1–4 ferrets, and the modular stack for a pair or trio.',
    }
  }
  return {
    href: '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=tools-cage-size-calculator',
    label: 'Search Amazon for the Ferret Nation double unit',
    detail: 'The cage review lists the Ferret Nation double for 1–4 ferrets. This count is past that card.',
  }
}

export type FilterStyle = 'community' | 'planted' | 'goldfish' | 'cichlid' | 'reef'

/**
 * Filter-review cards: sponge under 20 gallons, Aqueon up to 30,
 * AquaClear 70 for 30–70, Fluval 307 for a high bioload in that same band.
 */
export function filterFromGallons(
  gallons: number,
  style: FilterStyle = 'community',
  source = 'tools-filter-gph-calculator',
): MatchedPick {
  const gal = Math.round(gallons)
  const heavy = style === 'goldfish' || style === 'cichlid'
  const shop = (query: string) => `/go/amazon-brand/${query}?s=${source}`
  if (style === 'reef') {
    return {
      href: '/reviews/best-aquarium-filters',
      label: 'Read the aquarium filter review',
      detail: 'The filter review ranks freshwater hang-on-back, canister, and sponge filters. It does not name a reef filter for this result.',
    }
  }
  if (gal < 20) {
    return {
      href: shop('hikari+bacto+surge+sponge+filter'),
      label: 'Browse the Hikari Bacto-Surge sponge filter on Amazon',
      detail: 'The filter review assigns a sponge filter to nano tanks under 20 gallons.',
    }
  }
  if (gal < 30) {
    return {
      href: shop('aqueon+quietflow+30'),
      label: 'Browse the Aqueon QuietFlow 30 on Amazon',
      detail: 'The filter review limits the Aqueon QuietFlow 30 to a tank up to 30 gallons. This result is under 30 gallons and at least 20.',
    }
  }
  if (gal >= 40 && gal <= 70 && heavy) {
    return {
      href: shop('fluval+307+canister+filter'),
      label: 'Browse the Fluval 307 canister on Amazon',
      detail: 'The filter review names the Fluval 307 for 40 to 70 gallons with a high bioload.',
    }
  }
  if (gal <= 70) {
    return {
      href: shop('aquaclear+70+filter'),
      label: 'Browse AquaClear 70 hang-on-back filters on Amazon',
      detail: 'The filter review names the AquaClear 70 for a community tank in the 30 to 70 gallon band.',
    }
  }
  return {
    href: shop('fluval+307+canister+filter'),
    label: 'Browse the Fluval 307 canister on Amazon',
    detail: 'The filter review lists the Fluval 307 for tanks up to 70 gallons. This volume is past that card.',
  }
}

const HARNESS_BANDS = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

/** The harness review's front-clip pick. The letter band is this calculator's result, not a new size chart. */
export function harnessPick(chestBand: string): MatchedPick {
  const band = (HARNESS_BANDS as readonly string[]).includes(chestBand) ? chestBand : 'M'
  return {
    href: '/go/amazon-brand/petsafe+easy+walk+harness?s=tools-harness-collar-size',
    label: `Browse PetSafe Easy Walk harnesses on Amazon (${band} chest band)`,
    detail: `The harness review's front-clip pick is the Easy Walk. This chest result is the ${band} retail band on this calculator.`,
  }
}

/**
 * Puppy-food review: large-breed formula at an expected adult weight of 50 lb or more,
 * Small Paws under 25 lb expected adult weight, Giant Puppy at 90 lb or more.
 * This calculator's weight is current weight, so a puppy under 50 lb is not assigned a bag.
 */
export function calorieFoodPick(
  stageLabel: string,
  weightLb: number,
  source = 'tools-dog-calorie-calculator',
): MatchedPick {
  const puppy = stageLabel.startsWith('Puppy')
  if (puppy && weightLb >= 90) {
    return {
      href: '/reviews/best-dog-food-for-puppies',
      label: 'Read the puppy food review',
      detail:
        'The puppy-food review names Royal Canin Giant Puppy for an expected adult weight of 90 lb or more. This result is a puppy stage and the current weight is already in that band.',
    }
  }
  if (puppy && weightLb >= 50) {
    return {
      href: `/go/amazon-brand/royal+canin+large+breed+puppy?s=${source}`,
      label: 'Browse Royal Canin large-breed puppy food on Amazon',
      detail:
        'The puppy-food review says an expected adult weight of 50 lb or more needs a large-breed puppy formula. Royal Canin Large Breed Puppy is that card. This result is a puppy stage and the current weight is already at that line.',
    }
  }
  if (puppy) {
    return {
      href: '/reviews/best-dog-food-for-puppies',
      label: 'Read the puppy food review',
      detail:
        "The puppy-food review assigns a large-breed formula at an expected adult weight of 50 lb or more, and Hill's Science Diet Small Paws under 25 lb expected adult weight. This result is current weight, so neither card is assigned.",
    }
  }
  if (stageLabel.startsWith('Senior')) {
    return {
      href: `/go/chewy-brand/hills+science+diet+senior+7?s=${source}`,
      label: "Browse Hill's Science Diet Senior on Chewy",
      detail: "The senior-food review includes Hill's Science Diet Senior. This result is the senior life stage.",
    }
  }
  return {
    href: `/go/chewy-brand/royal+canin+dry+dog+food?s=${source}`,
    label: 'Check price of Royal Canin dry dog food on Chewy',
    detail: 'The dry-food review ranks Royal Canin first for an adult dog. This result is an adult life stage.',
  }
}

export type PuppyAdultClass = 'toy' | 'small' | 'medium' | 'large' | 'giant'

/** Expected-adult class from the puppy weight predictor or the first-year budget. */
export function puppyClassFoodPick(
  adultClass: string,
  source = 'tools-puppy-weight-predictor',
): MatchedPick {
  if (adultClass === 'toy' || adultClass === 'small') {
    return {
      href: `/go/chewy-brand/hills+science+diet+puppy+small+paws?s=${source}`,
      label: "Browse Hill's Science Diet Puppy Small Paws on Chewy",
      detail:
        "The puppy-food review assigns Hill's Science Diet Small Paws to puppies expected to weigh under 25 lb as adults. This result uses the toy or small adult class.",
    }
  }
  if (adultClass === 'large') {
    return {
      href: `/go/amazon-brand/royal+canin+large+breed+puppy?s=${source}`,
      label: 'Browse Royal Canin large-breed puppy food on Amazon',
      detail:
        'The puppy-food review says an expected adult weight of 50 lb or more needs a large-breed puppy formula. This result uses the large adult class.',
    }
  }
  if (adultClass === 'giant') {
    return {
      href: '/reviews/best-dog-food-for-puppies',
      label: 'Read the puppy food review',
      detail:
        'The puppy-food review names Royal Canin Giant Puppy for an expected adult weight of 90 lb or more. This result uses the giant adult class.',
    }
  }
  return {
    href: '/reviews/best-dog-food-for-puppies',
    label: 'Read the puppy food review',
    detail:
      'The puppy-food review scores a large-breed food and a small-breed food. This result uses the medium adult class, which is neither of those cards.',
  }
}

/** Worth-it model: a quote only when this scenario reimburses more than the premium. */
export function insuranceWorthPick(netVsPremium: number, breakeven: number | null): MatchedPick {
  if (breakeven === null) {
    return {
      href: '/reviews/best-pet-insurance',
      label: 'Read the pet insurance review',
      detail:
        'With this premium and annual cap, modeled reimbursement never exceeds the premium. The insurance review compares carriers. This result does not pick one.',
    }
  }
  if (netVsPremium > 0) {
    return {
      href: '/go/trupanion/home?s=tools-pet-insurance-worth-it',
      label: 'Get a Trupanion quote',
      detail:
        'This scenario reimburses more than the annual premium. Trupanion is the insurance review’s direct-pay pick. The model is not a quote.',
    }
  }
  return {
    href: '/reviews/best-pet-insurance',
    label: 'Read the pet insurance review',
    detail:
      'This scenario does not reimburse more than the premium. The insurance review compares carriers. This result does not pick one.',
  }
}

/** ER, clinic, or telehealth. Vetster is only the telehealth result. */
export function careSettingPick(setting: 'er' | 'clinic' | 'telehealth'): MatchedPick {
  if (setting === 'telehealth') {
    return {
      href: '/go/vetster/telehealth?s=tools-er-vs-clinic',
      label: 'Visit Vetster',
      detail:
        'This result is the telehealth setting. Vetster is the telehealth review’s pay-per-visit pick. It is not emergency care.',
    }
  }
  if (setting === 'clinic') {
    return {
      href: '/find-a-vet',
      label: 'Find a clinic',
      detail: 'This result is a clinic visit. The telehealth review is not the next step for these signs.',
    }
  }
  return {
    href: '/find-a-vet',
    label: 'Find an emergency vet',
    detail:
      'This result is the ER setting. The telehealth review says a remote consult is not a substitute for emergency care.',
  }
}

/** Litter planner stays on the review's paper card. The count changes the sentence, not the product. */
export function paperLitterPick(count: number): MatchedPick {
  const noun = count === 1 ? 'ferret' : 'ferrets'
  return {
    href: '/go/chewy-brand/recycled+paper+pellet+litter+non+clumping?s=tools-litter-planner',
    label: 'Find recycled paper-pellet litter on Chewy',
    detail: `The litter review's paper pick is recycled paper pellet. This plan is for ${count} ${noun}. The planner's default is paper pellet, not the wood-pellet card.`,
  }
}

/** Every cycle length on this tool is confirmed with the freshwater kit the test-kit review names. */
export function cycleTestPick(totalDays: number, methodLabel: string): MatchedPick {
  return {
    href: '/go/amazon-brand/api+freshwater+master+test+kit?s=tools-aquarium-cycling',
    label: 'Browse the API Freshwater Master Test Kit on Amazon',
    detail: `This ${methodLabel} plan is about ${totalDays} days. The test-kit review's freshwater kit is the API Freshwater Master. A zero ammonia and zero nitrite reading is what shows the cycle is done.`,
  }
}

/** Symptom checker: the freshwater kit stays; the closest condition changes the sentence. */
export function diseaseTestPick(conditionName: string): MatchedPick {
  return {
    href: '/go/amazon-brand/api+freshwater+master+test+kit?s=tools-fish-disease-symptom',
    label: 'Browse the API Freshwater Master Test Kit on Amazon',
    detail: `The closest match on this list is ${conditionName}. The test-kit review's freshwater kit is the API Freshwater Master. Test the water before medicating.`,
  }
}

/** Standlee is the forage card. Workload changes the dry-matter line, not a bag size the review does not print. */
export function foragePick(forageLabel: string, workloadLabel: string): MatchedPick {
  return {
    href: '/go/amazon-brand/standlee+premium+forage+pellets?s=tools-horse-feed-calculator',
    label: 'Browse Standlee Premium Forage pellets on Amazon',
    detail: `This ${workloadLabel} plan keeps forage at ${forageLabel} dry matter or more. Standlee Premium Forage is the forage card on the supplement review. That card does not print a bag size for this weight.`,
  }
}

/** Senior stage uses the senior-feed search already on the age page. Age does not assign a joint card. */
export function horseAgePick(stageLabel: string): MatchedPick {
  if (stageLabel === 'Senior') {
    return {
      href: '/go/amazon-brand/senior+horse+feed?s=tools-horse-age-calculator',
      label: 'Browse senior horse feed on Amazon',
      detail:
        'This result is the senior stage. The age page already links senior horse feed. Age alone does not assign a joint supplement.',
    }
  }
  return {
    href: '/reviews/best-equine-supplements',
    label: 'Read the equine supplement review',
    detail: `This result is the ${stageLabel.toLowerCase()} stage. The supplement review’s joint card is not assigned from this age alone.`,
  }
}

/** Portioning searches already on the cat calorie page. The life stage changes which one. */
export function catFoodAmountPick(stageLabel: string, grams: number): MatchedPick {
  const rounded = Math.round(grams)
  if (stageLabel.startsWith('Weight loss')) {
    return {
      href: '/go/amazon-brand/kitchen+gram+scale?s=tools-cat-food-amount',
      label: 'Browse kitchen gram scales on Amazon',
      detail: `This weight-loss stage is about ${rounded} grams a day. The calorie page's scale search is how that smaller portion is weighed. It is not a diagnosis and not a food brand.`,
    }
  }
  if (stageLabel === 'Kitten') {
    return {
      href: '/go/amazon-brand/cat+food+measuring+scoop+grams?s=tools-cat-food-amount',
      label: 'Search Amazon for a gram measuring spoon',
      detail: `This kitten stage is about ${rounded} grams a day. The calorie page's measured-food search is the portioning pick for that stage. It is not a kitten-food ranking.`,
    }
  }
  return {
    href: '/go/amazon-brand/slow+feeder+cat+bowl?s=tools-cat-food-amount',
    label: 'Browse slow-feeder cat bowls on Amazon',
    detail: `This ${stageLabel.toLowerCase()} stage is about ${rounded} grams a day. The calorie page's slow-feeder search is the portioning pick. It is not a food ranking.`,
  }
}

/** Freezing uses the heated bucket. Temperate uses the flat-back bucket. The gallon band stays the same. */
export function horseWaterPick(freezing: boolean, lowGal: string, highGal: string): MatchedPick {
  if (freezing) {
    return {
      href: '/go/amazon-brand/heated+horse+water+bucket?s=tools-horse-water-calculator',
      label: 'Browse heated horse water buckets on Amazon',
      detail: `This temperate band is ${lowGal}–${highGal} gallons. The winter water guide uses the heated bucket already on the water page when the stall can freeze. Icy water is when horses drink less; this tool does not raise the band for cold.`,
    }
  }
  return {
    href: '/nutrition/water-requirements',
    label: 'Read the water requirements page',
    detail: `This temperate idle band is ${lowGal}–${highGal} gallons. The water page's everyday stall source is a flat-back bucket. Heat, work, lactation, and lush grass move intake off this band; the page does not publish a second coefficient.`,
  }
}

/** One starter-kit search from the saltwater setup page. Gallons change the pound sentence. */
export function liveRockPick(gallons: number, lowLb: string, highLb: string): MatchedPick {
  return {
    href: '/setup/saltwater-tank-setup',
    label: 'Read the saltwater tank setup',
    detail: `This ${gallons}-gallon tank is ${lowLb}–${highLb} lb of live rock at the setup page's 1–1.5 lb per gallon line. The kit is not a weighed rock order.`,
  }
}

/**
 * Wysong and Marshall do not print carbohydrate. Every result stays on the review.
 */
export function ferretLabelPick(dmCarb: number): MatchedPick {
  const carb = Math.round(dmCarb * 10) / 10
  return {
    href: '/diet/best-ferret-kibble',
    label: 'Read the ferret kibble review',
    detail: `This label's carbohydrate by difference is about ${carb}% on a dry-matter basis. The current Wysong Epigen 90 and Marshall Premium pages do not print carbohydrate. Check the label. The calculator did not test either food.`,
  }
}

/** Pond tools have one liner search on the page. The gallon count changes the sentence. */
export function pondLinerPick(gallons: number): MatchedPick {
  const gal = Math.round(gallons)
  return {
    href: '/go/amazon-brand/epdm+pond+liner?s=tools-pond-volume',
    label: 'Browse EPDM pond liners on Amazon',
    detail: `This estimate is ${gal.toLocaleString('en-US')} gallons. The pond calculator's liner search is the EPDM liner already linked on this page. The review pages do not print a liner size for that gallon count.`,
  }
}
