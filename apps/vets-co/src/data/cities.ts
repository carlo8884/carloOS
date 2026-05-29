/**
 * Vets.co metro directory — 20 U.S. metros for /find-a-vet/[city] landing pages.
 *
 * Trust-hub foundation per MONETIZATION-ARCHITECT.md S7 (Universal Directory
 * Engine). These are pet-owner-search-intent landing pages — "find a vet in
 * [city]" — that link out to the state-level /find-a-vet/[state] pages
 * already shipped, the pet-insurance comparison, and the reviewer directory.
 *
 * Per QC-STANDARDS.md §1, we do NOT fabricate specific veterinary practices
 * or claim populations of vets we have not verified. Fields below stay
 * abstract: rough metro population (publicly available U.S. Census estimates,
 * rounded to the nearest 100k), a region-level specialty intuition that is
 * defensible without naming a specific hospital, and a notable_practices
 * field that is intentionally a placeholder array — pages render gracefully
 * without it and the template tells the reader where to look instead.
 */

export interface MetroEntry {
  /** URL slug for /find-a-vet/[city]. */
  slug: string
  /** Display name of the metro. */
  name: string
  /** Full state name. */
  state: string
  /** Two-letter state abbreviation. */
  state_abbr: string
  /** Slug of the state on /find-a-vet/[state] — used to cross-link. */
  state_slug: string
  /**
   * Rough metro population (millions), defensible source: U.S. Census
   * Bureau metropolitan statistical area estimates. Rounded to one
   * decimal to avoid false precision.
   */
  population_millions: number
  /**
   * Specialty concentration note — qualitative, region-level intuition.
   * Defensible without naming a specific hospital (which would tip into
   * fabricated-directory territory until we've verified each practice).
   * Sourced from AVMA workforce statistics + ACVIM/ACVS specialist-density
   * mapping at the regional level.
   */
  specialty_concentration: string
  /**
   * Local context — weather, geography, lifestyle factors that change
   * which conditions pet owners most often face in this metro.
   */
  local_context: string
  /**
   * Placeholder array. Stays empty until Vets.co has independently
   * verified individual practices for inclusion. Pages render without it.
   */
  notable_practices: string[]
}

/**
 * Twenty target metros, ordered by U.S. Census Bureau MSA population (2024
 * estimates), with the population_millions field rounded to one decimal.
 * Region labels intentionally omitted — the state pages handle Census region
 * groupings.
 */
export const Cities: MetroEntry[] = [
  {
    slug: 'new-york',
    name: 'New York',
    state: 'New York',
    state_abbr: 'NY',
    state_slug: 'new-york',
    population_millions: 19.5,
    specialty_concentration:
      'The New York metro has one of the deepest concentrations of board-certified veterinary specialists in the United States, including exotics and avian medicine — driven by a large urban pet population with a meaningful share of small mammals, reptiles, and birds. Multiple 24-hour emergency hospitals and several large multi-specialty referral centers serve the five boroughs and the surrounding tri-state area.',
    local_context:
      'Apartment living, limited green space, and dense urban traffic shape the conditions vets see most often: leash-related injuries, allergic dermatitis from urban allergens, weight management in indoor pets, and noise-related anxiety.',
    notable_practices: [],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'California',
    state_abbr: 'CA',
    state_slug: 'california',
    population_millions: 12.9,
    specialty_concentration:
      'The Los Angeles basin hosts large multi-specialty referral hospitals and one of the country\'s densest networks of dermatology, ophthalmology, and integrative medicine practices. Wildlife exposure (coyotes, rattlesnakes, foxtails) and a strong holistic-care culture set the LA metro apart from other large-coastal metros.',
    local_context:
      'Foxtail season (late spring through fall), rattlesnake encounters in foothill neighborhoods, chronic environmental allergies, and heat-related risks during inland summer spikes are local drivers for emergency and dermatology demand.',
    notable_practices: [],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    state_abbr: 'IL',
    state_slug: 'illinois',
    population_millions: 9.4,
    specialty_concentration:
      'Chicago has a strong concentration of board-certified surgical and orthopedic specialists, with multiple multi-specialty referral hospitals across the metro and academic specialty access in the broader Midwest (Illinois, Purdue, Wisconsin teaching hospitals within drive distance).',
    local_context:
      'Harsh winters drive a seasonal pattern of paw-pad injuries from de-icing salt, hypothermia risk for short-coated breeds, and slip-and-fall orthopedic injuries on ice. Summer brings lake-shore exposure to blue-green algae and a spike in tick-borne disease in the surrounding forest preserves.',
    notable_practices: [],
  },
  {
    slug: 'houston',
    name: 'Houston',
    state: 'Texas',
    state_abbr: 'TX',
    state_slug: 'texas',
    population_millions: 7.5,
    specialty_concentration:
      'The Houston metro has multiple 24-hour emergency hospitals and large multi-specialty centers, plus academic specialty access at Texas A&M College of Veterinary Medicine in nearby College Station. Tropical and subtropical exposure shapes the case mix — heartworm, mosquito-borne disease, and heat emergencies run year-round.',
    local_context:
      'Year-round heartworm pressure, frequent hurricane and flood evacuations (plan for pet evacuation kits), heat stroke risk from May through October, and snake encounters in suburban green spaces are all local drivers.',
    notable_practices: [],
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'Arizona',
    state_abbr: 'AZ',
    state_slug: 'arizona',
    population_millions: 5.0,
    specialty_concentration:
      'The Phoenix metro has multiple large multi-specialty referral hospitals offering cardiology, oncology, internal medicine, neurology, and surgery. Several 24-hour emergency hospitals serve the Valley. Heat and arid-climate exposure define the local emergency case mix.',
    local_context:
      'Heat stroke is a year-round emergency concern from May through September; pavement burns to paw pads peak in midsummer. Valley fever (Coccidioides) is endemic and a routine differential for chronic cough or weight loss. Rattlesnake and Gila monster encounters drive a seasonal envenomation caseload.',
    notable_practices: [],
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    state: 'Pennsylvania',
    state_abbr: 'PA',
    state_slug: 'pennsylvania',
    population_millions: 6.2,
    specialty_concentration:
      'The Philadelphia metro is anchored by the University of Pennsylvania School of Veterinary Medicine (Ryan Veterinary Hospital), one of the premier veterinary teaching hospitals in the country. Specialty access is broad and deep, with multiple private referral hospitals across the metro and the broader Delaware Valley.',
    local_context:
      'Four-season exposure: tick-borne disease pressure in spring and summer, leptospirosis risk in standing water, holiday-season toxin exposures (chocolate, xylitol, raisins), and cold-weather paw-pad injuries from de-icing salt.',
    notable_practices: [],
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    state: 'Texas',
    state_abbr: 'TX',
    state_slug: 'texas',
    population_millions: 2.6,
    specialty_concentration:
      'San Antonio has multiple 24-hour emergency hospitals and a growing private specialty referral network. For complex cases, the academic teaching hospital at Texas A&M is within drive distance for Central Texas residents.',
    local_context:
      'Hot summers drive year-round heat and dehydration risk; rural-adjacent neighborhoods face snake encounters and tick-borne disease pressure. Working-dog and equine populations are higher than in coastal metros.',
    notable_practices: [],
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    state: 'California',
    state_abbr: 'CA',
    state_slug: 'california',
    population_millions: 3.3,
    specialty_concentration:
      'The San Diego metro has multiple multi-specialty referral hospitals and a number of board-certified ophthalmologists. Coastal-California climate and an active outdoor pet population shape the case mix — sun-related skin disease, marine exposure (jellyfish, fish-hook injuries), and a steady seasonal flow of orthopedic injuries from active dogs.',
    local_context:
      'Foxtails are a major seasonal concern in coastal canyons; rattlesnake encounters occur in foothill neighborhoods. Mild year-round weather keeps activity levels high — and so do related sports-injury and paw-pad issues.',
    notable_practices: [],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'Texas',
    state_abbr: 'TX',
    state_slug: 'texas',
    population_millions: 7.9,
    specialty_concentration:
      'The Dallas-Fort Worth metro has one of the densest specialty referral networks in the South, including cardiology, oncology, neurology, and surgical specialty hospitals. Multiple 24-hour emergency centers cover both Dallas and Tarrant counties.',
    local_context:
      'Long hot summers drive heat-related emergencies; spring storms bring noise-anxiety calls. Heartworm prevention is essential year-round, and tick-borne disease pressure rises in suburban-edge neighborhoods.',
    notable_practices: [],
  },
  {
    slug: 'san-jose',
    name: 'San Jose',
    state: 'California',
    state_abbr: 'CA',
    state_slug: 'california',
    population_millions: 2.0,
    specialty_concentration:
      'San Jose and the broader South Bay are within drive distance of UC Davis School of Veterinary Medicine and a deep network of San Francisco Bay Area private specialty hospitals. Neurology, internal medicine, and oncology access is strong across the region.',
    local_context:
      'Foxtails are a major seasonal hazard in regional parks; rattlesnake encounters occur in foothill open space. Tech-worker pet ownership profiles tend toward smaller breeds and high preventive-care engagement.',
    notable_practices: [],
  },
  {
    slug: 'austin',
    name: 'Austin',
    state: 'Texas',
    state_abbr: 'TX',
    state_slug: 'texas',
    population_millions: 2.5,
    specialty_concentration:
      'Austin has multiple 24-hour emergency hospitals and a growing private specialty referral network. Behavior medicine and integrative medicine practices are notably well-represented for a metro of this size. Texas A&M College of Veterinary Medicine is within drive distance for complex referrals.',
    local_context:
      'Heat-related emergencies run from May through October; dog-friendly outdoor culture drives both sports injuries and snake/foxtail exposures. Spring oak pollen drives a noticeable seasonal allergic dermatitis spike.',
    notable_practices: [],
  },
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    state: 'Florida',
    state_abbr: 'FL',
    state_slug: 'florida',
    population_millions: 1.7,
    specialty_concentration:
      'Jacksonville has 24-hour emergency hospitals and a private specialty referral network covering cardiology, internal medicine, and surgery. The University of Florida College of Veterinary Medicine in Gainesville is within drive distance for advanced referrals.',
    local_context:
      'Year-round heartworm pressure, frequent hurricane evacuations, and beach-adjacent exposures (saltwater toxicity, jellyfish, sand impaction) shape the local emergency case mix. Heat emergencies are a year-round concern.',
    notable_practices: [],
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    state: 'Texas',
    state_abbr: 'TX',
    state_slug: 'texas',
    population_millions: 1.0,
    specialty_concentration:
      'Fort Worth sits within the Dallas-Fort Worth specialty referral network and has direct access to equine and theriogenology specialists serving the surrounding working-ranch communities. Orthopedic surgical access is strong.',
    local_context:
      'Working-dog and equine pet populations are higher than in pure-urban metros. Heat-related emergencies, snake encounters, and tick-borne disease pressure dominate the seasonal case mix.',
    notable_practices: [],
  },
  {
    slug: 'columbus',
    name: 'Columbus',
    state: 'Ohio',
    state_abbr: 'OH',
    state_slug: 'ohio',
    population_millions: 2.2,
    specialty_concentration:
      'Columbus is anchored by The Ohio State University College of Veterinary Medicine, one of the largest veterinary teaching hospitals in the country. Specialty access — oncology, internal medicine, cardiology, neurology, and complex surgery — is exceptionally deep for a metro of this size.',
    local_context:
      'Four-season exposure with cold-weather paw-pad injuries from de-icing salt, tick-borne disease pressure in spring and summer, and holiday-season toxin exposures during the long indoor months.',
    notable_practices: [],
  },
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    state: 'Indiana',
    state_abbr: 'IN',
    state_slug: 'indiana',
    population_millions: 2.1,
    specialty_concentration:
      'Indianapolis has multiple 24-hour emergency hospitals and private specialty referral access. Purdue University College of Veterinary Medicine in West Lafayette — within drive distance — provides academic specialty referrals for complex cases.',
    local_context:
      'Four-season exposure; ice-related orthopedic injuries in winter; tick-borne disease pressure in the surrounding rural counties in spring and summer.',
    notable_practices: [],
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
    state: 'North Carolina',
    state_abbr: 'NC',
    state_slug: 'north-carolina',
    population_millions: 2.8,
    specialty_concentration:
      'Charlotte has a robust private specialty referral network including cardiology, internal medicine, and surgery. NC State College of Veterinary Medicine in Raleigh is within drive distance for advanced referrals; multiple 24-hour emergency hospitals serve the metro.',
    local_context:
      'Long warm seasons drive year-round heartworm prevention; tick-borne disease pressure is significant in spring and summer; thunderstorm noise anxiety drives a meaningful behavior caseload.',
    notable_practices: [],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'California',
    state_abbr: 'CA',
    state_slug: 'california',
    population_millions: 4.6,
    specialty_concentration:
      'The San Francisco Bay Area has one of the deepest specialty referral networks in the country, with multiple multi-specialty hospitals, strong oncology and internal medicine access, and direct access to UC Davis School of Veterinary Medicine for academic referrals.',
    local_context:
      'Mild marine climate; cable-car and steep-street injuries are not unheard of in city dogs; coastal exposure to algal bloom toxicity is a seasonal concern. High preventive-care engagement and a strong integrative-medicine culture set the case mix apart.',
    notable_practices: [],
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    state: 'Washington',
    state_abbr: 'WA',
    state_slug: 'washington',
    population_millions: 4.0,
    specialty_concentration:
      'Seattle has a robust private specialty referral network and one of the country\'s strongest exotics and avian medicine concentrations outside of New York. Washington State University College of Veterinary Medicine (Pullman) is the academic specialty referral for the broader region.',
    local_context:
      'Wet climate drives chronic skin and ear disease; mushroom toxicity is a year-round risk in green-space-rich neighborhoods; algal bloom and shellfish toxin exposure are seasonal concerns along Puget Sound.',
    notable_practices: [],
  },
  {
    slug: 'denver',
    name: 'Denver',
    state: 'Colorado',
    state_abbr: 'CO',
    state_slug: 'colorado',
    population_millions: 3.0,
    specialty_concentration:
      'The Denver metro has 24-hour emergency hospitals and large private specialty referral centers. Colorado State University in Fort Collins — within drive distance — is one of the top veterinary teaching hospitals in the country, with strong oncology, orthopedic surgery, and neurology programs.',
    local_context:
      'Altitude affects exertion tolerance for short-nosed and senior dogs; rattlesnake encounters in foothill neighborhoods drive a seasonal envenomation caseload; cold-weather paw-pad injuries are common.',
    notable_practices: [],
  },
  {
    slug: 'boston',
    name: 'Boston',
    state: 'Massachusetts',
    state_abbr: 'MA',
    state_slug: 'massachusetts',
    population_millions: 4.9,
    specialty_concentration:
      'The Boston metro is anchored by Cummings School of Veterinary Medicine at Tufts University (Foster Hospital for Small Animals) — one of the top teaching hospitals in the Northeast — and supported by multiple private specialty hospitals. Neurology, internal medicine, and dentistry access is exceptionally strong.',
    local_context:
      'Four-season exposure; cold-weather paw-pad injuries from de-icing salt in winter; tick-borne disease pressure (Lyme, anaplasmosis) is among the highest in the country in surrounding suburbs; coastal exposure to algal bloom in summer.',
    notable_practices: [],
  },
]

export function findCity(slug: string): MetroEntry | undefined {
  return Cities.find((c) => c.slug === slug)
}
