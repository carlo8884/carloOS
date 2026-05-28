/**
 * US States data for the Ferrets.com programmatic state-by-state vet directory.
 *
 * One template at `/find-a-vet/[state]/page.tsx` consumes this array and
 * generates a static page per entry at build time via `generateStaticParams`.
 *
 * Region values follow the US Census Bureau's four-region classification
 * (Northeast, Midwest, South, West). DC is grouped with the South per
 * Census convention.
 *
 * `ferretLegalNote` is populated ONLY where there is a documented, public-
 * record restriction (Hawaii: HAR §4-71-6.5; California: F&G Code §2118;
 * New York City: NYC Health Code §161.01). DC has no ban but adjacent
 * jurisdictions vary, so a contextual note is included.
 *
 * Do NOT fabricate clinic names. This file is for guidance pages only.
 */

export type Region = 'Northeast' | 'Midwest' | 'South' | 'West'

export interface StateEntry {
  /** URL slug (kebab-case, ASCII). */
  slug: string
  /** Display name. */
  name: string
  /** Two-letter postal abbreviation. */
  abbr: string
  /** US Census Bureau region. */
  region: Region
  /** 4–8 major metro areas in the state (real metros only). */
  majorCities: string[]
  /**
   * State-specific note when there is a documented legal restriction on
   * ferret ownership. Cites the regulation. Omitted when no restriction exists.
   */
  ferretLegalNote?: string
  /**
   * Boilerplate + state-specific guidance for searching for an exotic-pet vet.
   */
  exoticVetSearchHint: string
}

const BOILERPLATE_HINT =
  'Filter by ABVP-ECM (Exotic Companion Mammal) board certification or AEMV (Association of Exotic Mammal Veterinarians) membership, then call the clinic and ask the seven vetting questions on the /find-a-vet landing page.'

export const States: StateEntry[] = [
  {
    slug: 'alabama',
    name: 'Alabama',
    abbr: 'AL',
    region: 'South',
    majorCities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Alabama has no statewide ferret restriction; rabies vaccination is required under state law.`,
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    abbr: 'AK',
    region: 'West',
    majorCities: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Exotic-pet vets are concentrated in the Anchorage and Fairbanks metro areas; rural owners should plan for long-distance referrals.`,
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    region: 'West',
    majorCities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Arizona permits ferrets statewide; heat-stress prevention (ferrets do not tolerate temperatures above ~80°F) is an additional clinical concern owners should raise.`,
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    abbr: 'AR',
    region: 'South',
    majorCities: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Arkansas permits ferrets; rabies vaccination is the standard state requirement.`,
  },
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    region: 'West',
    majorCities: [
      'Los Angeles',
      'San Diego',
      'San Jose',
      'San Francisco',
      'Sacramento',
      'Fresno',
      'Oakland',
      'Long Beach',
    ],
    ferretLegalNote:
      'Ferrets are prohibited as pets in California under California Fish & Game Code §2118 and 14 CCR §671 (restricted species list). The ban has been the subject of repeated reform efforts and enforcement varies in practice, but the law as written is unchanged. Vets in California will treat ferrets — practice acts do not require a vet to verify legal ownership before providing care — and confidentiality of the veterinary record is preserved.',
    exoticVetSearchHint: `${BOILERPLATE_HINT} California: although ferret ownership is prohibited under state law (F&G Code §2118), exotic-pet vets statewide do see ferrets clinically and are not required to report ownership. Owners report the practical situation rather than relying on the statute.`,
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    region: 'West',
    majorCities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Boulder'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Colorado permits ferrets; the Denver–Boulder corridor has the highest density of exotic-mammal practices in the state.`,
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbr: 'CT',
    region: 'Northeast',
    majorCities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Connecticut permits ferrets; rabies vaccination is required under CGS §22-339b.`,
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    abbr: 'DE',
    region: 'South',
    majorCities: ['Wilmington', 'Dover', 'Newark', 'Middletown'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Delaware permits ferrets statewide; the Wilmington–Philadelphia corridor includes several boarded exotic-mammal specialists within driving distance.`,
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    region: 'South',
    majorCities: [
      'Jacksonville',
      'Miami',
      'Tampa',
      'Orlando',
      'St. Petersburg',
      'Fort Lauderdale',
      'Tallahassee',
    ],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Florida requires a Class III wildlife permit for ferrets (FWC Rule 68A-6.0022); the permit is no-cost for personal possession but is a documented public-record requirement.`,
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    region: 'South',
    majorCities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens', 'Macon'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Georgia permits ferrets; the Atlanta metro has multiple exotic-pet practices and the UGA College of Veterinary Medicine accepts ferret referrals in Athens.`,
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    abbr: 'HI',
    region: 'West',
    majorCities: ['Honolulu', 'Hilo', 'Kailua', 'Kahului'],
    ferretLegalNote:
      'Ferrets are strictly prohibited in Hawaii under Hawaii Administrative Rules §4-71-6.5 (restricted-animals list). The prohibition is enforced by the Hawaii Department of Agriculture and applies to import, possession, and transit. There is no permit pathway for personal possession. Owners moving to Hawaii cannot bring a ferret; owners visiting Hawaii cannot transit a ferret through the state.',
    exoticVetSearchHint:
      'Hawaii prohibits ferret ownership under HAR §4-71-6.5 — there are no Hawaii-based ferret clinics by design. If you are relocating from the mainland and need transition guidance, contact the AEMV directly for referral to a vet in your departure state who can advise on rehoming.',
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    abbr: 'ID',
    region: 'West',
    majorCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Idaho permits ferrets; exotic-pet vets are concentrated in the Treasure Valley (Boise metro).`,
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    region: 'Midwest',
    majorCities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Peoria'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Illinois permits ferrets; Chicago and the surrounding suburbs have the highest concentration of exotic-mammal practices in the Midwest.`,
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    abbr: 'IN',
    region: 'Midwest',
    majorCities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Bloomington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Indiana permits ferrets; the Purdue University College of Veterinary Medicine accepts ferret referrals.`,
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbr: 'IA',
    region: 'Midwest',
    majorCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Iowa City', 'Sioux City'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Iowa permits ferrets; Iowa State University's Lloyd Veterinary Medical Center accepts ferret referrals in Ames.`,
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbr: 'KS',
    region: 'Midwest',
    majorCities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe', 'Lawrence'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Kansas permits ferrets; Kansas State University's College of Veterinary Medicine in Manhattan accepts exotic-mammal referrals.`,
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbr: 'KY',
    region: 'South',
    majorCities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Kentucky permits ferrets; rabies vaccination is required under KRS §258.015.`,
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbr: 'LA',
    region: 'South',
    majorCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Louisiana permits ferrets; LSU School of Veterinary Medicine in Baton Rouge accepts exotic-mammal referrals.`,
  },
  {
    slug: 'maine',
    name: 'Maine',
    abbr: 'ME',
    region: 'Northeast',
    majorCities: ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Maine permits ferrets; exotic-pet practices are concentrated in the Portland and Bangor metros.`,
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbr: 'MD',
    region: 'South',
    majorCities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Annapolis'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Maryland permits ferrets; the Baltimore–DC corridor has the highest density of boarded exotic-mammal specialists on the East Coast.`,
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    region: 'Northeast',
    majorCities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Massachusetts permits ferrets; Tufts Cummings School of Veterinary Medicine in North Grafton accepts exotic-mammal referrals.`,
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    region: 'Midwest',
    majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Michigan permits ferrets; Michigan State University's College of Veterinary Medicine in East Lansing accepts exotic referrals.`,
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbr: 'MN',
    region: 'Midwest',
    majorCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Minnesota permits ferrets; the University of Minnesota Veterinary Medical Center in St. Paul accepts exotic-mammal referrals.`,
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    abbr: 'MS',
    region: 'South',
    majorCities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Mississippi permits ferrets; Mississippi State University's College of Veterinary Medicine accepts exotic referrals.`,
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    abbr: 'MO',
    region: 'Midwest',
    majorCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Missouri permits ferrets; the University of Missouri Veterinary Health Center in Columbia accepts exotic-mammal referrals.`,
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbr: 'MT',
    region: 'West',
    majorCities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Montana permits ferrets; exotic-pet practices are sparse outside the Billings and Missoula metros — plan for travel.`,
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    abbr: 'NE',
    region: 'Midwest',
    majorCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Nebraska permits ferrets; exotic-mammal practices are concentrated in Omaha and Lincoln.`,
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    region: 'West',
    majorCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Nevada permits ferrets; heat-stress prevention is a clinical concern in the Las Vegas metro (ferrets do not tolerate temperatures above ~80°F).`,
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    abbr: 'NH',
    region: 'Northeast',
    majorCities: ['Manchester', 'Nashua', 'Concord', 'Dover', 'Rochester'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Hampshire permits ferrets; many owners cross into Massachusetts for referrals to Tufts.`,
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    region: 'Northeast',
    majorCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Trenton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Jersey permits ferrets; the New York City prohibition does not extend across the river — North Jersey owners are sometimes the closest option for NYC-area ferret owners seeking care.`,
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    abbr: 'NM',
    region: 'West',
    majorCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Mexico permits ferrets; exotic-pet practices are concentrated in Albuquerque and Santa Fe.`,
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    region: 'Northeast',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany'],
    ferretLegalNote:
      'Ferrets are legal in New York State, but the New York City Health Code §161.01 lists ferrets among wild animals prohibited within the five boroughs of NYC. The NYC restriction has been challenged repeatedly and upheld; it is enforced by NYC DOHMH. Outside NYC (Long Island excluding Queens/Brooklyn, Westchester, the Hudson Valley, upstate NY) ferrets are legal as pets. NYC residents seeking ferret care commonly travel to Westchester, Nassau County, or northern New Jersey for veterinary visits.',
    exoticVetSearchHint: `${BOILERPLATE_HINT} New York: ferrets are legal statewide except within the five boroughs of New York City (NYC Health Code §161.01). NYC residents typically seek care in Westchester, Nassau County, or North Jersey.`,
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    region: 'South',
    majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} North Carolina permits ferrets; NC State College of Veterinary Medicine in Raleigh accepts exotic-mammal referrals.`,
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    abbr: 'ND',
    region: 'Midwest',
    majorCities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} North Dakota permits ferrets; exotic-pet practices are concentrated in Fargo — rural owners should plan for travel.`,
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    region: 'Midwest',
    majorCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Ohio permits ferrets; The Ohio State University College of Veterinary Medicine in Columbus accepts exotic referrals.`,
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    abbr: 'OK',
    region: 'South',
    majorCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Oklahoma permits ferrets; Oklahoma State University Center for Veterinary Health Sciences in Stillwater accepts exotic referrals.`,
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    region: 'West',
    majorCities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Beaverton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Oregon permits ferrets; Oregon State University's Carlson College of Veterinary Medicine in Corvallis accepts exotic referrals. The Portland metro has multiple exotic-pet practices.`,
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    region: 'Northeast',
    majorCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Pennsylvania requires an exotic-wildlife possession permit for ferrets under Title 34 §147 (Pennsylvania Game Commission). The University of Pennsylvania's Ryan Veterinary Hospital and Penn State's veterinary services accept exotic-mammal referrals.`,
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    abbr: 'RI',
    region: 'Northeast',
    majorCities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Rhode Island permits ferrets; many owners cross into Massachusetts for referrals to Tufts.`,
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbr: 'SC',
    region: 'South',
    majorCities: ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Greenville'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} South Carolina permits ferrets; exotic-pet practices are concentrated in the Columbia, Charleston, and Greenville metros.`,
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    abbr: 'SD',
    region: 'Midwest',
    majorCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} South Dakota permits ferrets; exotic-pet practices are concentrated in Sioux Falls and Rapid City.`,
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    region: 'South',
    majorCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Tennessee permits ferrets; the University of Tennessee College of Veterinary Medicine in Knoxville accepts exotic-mammal referrals.`,
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    region: 'South',
    majorCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Texas permits ferrets; Texas A&M Veterinary Medical Teaching Hospital in College Station accepts exotic-mammal referrals. The Houston, Dallas–Fort Worth, and Austin metros all have multiple exotic-pet practices.`,
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbr: 'UT',
    region: 'West',
    majorCities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Ogden'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Utah permits ferrets; exotic-pet practices are concentrated along the Wasatch Front (Salt Lake City through Provo).`,
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    abbr: 'VT',
    region: 'Northeast',
    majorCities: ['Burlington', 'Essex', 'South Burlington', 'Colchester', 'Rutland'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Vermont permits ferrets; many owners cross into Massachusetts for referrals to Tufts.`,
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    region: 'South',
    majorCities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Arlington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Virginia permits ferrets; the Virginia–Maryland College of Veterinary Medicine in Blacksburg accepts exotic-mammal referrals. The Northern Virginia metro shares boarded specialists with the DC area.`,
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    region: 'West',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Washington permits ferrets; Washington State University College of Veterinary Medicine in Pullman accepts exotic-mammal referrals. The Seattle metro has multiple exotic-pet practices.`,
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    abbr: 'WV',
    region: 'South',
    majorCities: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} West Virginia permits ferrets; exotic-pet practices are concentrated in the Charleston, Huntington, and Morgantown metros.`,
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbr: 'WI',
    region: 'Midwest',
    majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Wisconsin permits ferrets; the University of Wisconsin–Madison School of Veterinary Medicine accepts exotic-mammal referrals.`,
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    abbr: 'WY',
    region: 'West',
    majorCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Wyoming permits ferrets; exotic-pet practices are sparse — many owners travel to Colorado's Front Range for boarded specialists.`,
  },
  {
    slug: 'district-of-columbia',
    name: 'Washington, D.C.',
    abbr: 'DC',
    region: 'South',
    majorCities: ['Washington'],
    ferretLegalNote:
      'Ferrets are permitted as pets in the District of Columbia. The District itself imposes no possession restriction. However, owners commuting from adjacent jurisdictions should note: ferrets are legal in Maryland and Virginia (most of the surrounding metro) but require a permit in Pennsylvania, and the New York City prohibition does not affect the DC metro. DC residents typically have ready access to boarded exotic-mammal specialists through the Maryland and Northern Virginia veterinary networks.',
    exoticVetSearchHint: `${BOILERPLATE_HINT} DC: ferrets are permitted in the District; the broader DC–Maryland–Virginia metro has one of the highest concentrations of boarded exotic-mammal specialists on the East Coast.`,
  },
]
