/**
 * US States data for the Ferrets.com programmatic state-by-state directory.
 *
 * Two templates consume this array:
 *  - `/find-a-vet/[state]/page.tsx` (vet directory)
 *  - `/states/[state]/page.tsx`     (ferret legality + adoption directory)
 *
 * Both pages are prerendered at build time via `generateStaticParams`.
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
 * Legality directory fields (`legalStatus`, `legalSummary`, `lawCitation`,
 * `permitRequirementsIfAny`, `knownRestrictedCities`, `adoptionResources`,
 * `veterinaryResources`, `localFerretAssociations`, `officialResourceUrl`)
 * are populated for the highest-search-volume states + the legally-notable
 * states (CA, HI, NYC). Other states fall back to a generic template.
 *
 * Do NOT fabricate clinic, rescue, or breeder names. Adoption resources are
 * limited to national networks (American Ferret Association regional chapters,
 * Petfinder organization-search URLs, AEMV) — sources we can cite by name.
 * State Fish & Wildlife / Agriculture department URLs are official .gov links.
 */

export type Region = 'Northeast' | 'Midwest' | 'South' | 'West'

export type LegalStatus =
  | 'legal'
  | 'restricted'
  | 'illegal'
  | 'requires-permit'

/**
 * An adoption-side resource for a state. Type is constrained to keep the
 * editorial promise: only nationally-citable shelters/rescues/breeders.
 * Local rescues are not listed inline — they would require ongoing verification
 * we are not staffed for. The AFA regional-shelter directory is the primary
 * pointer.
 */
export interface AdoptionResource {
  name: string
  type: 'shelter' | 'rescue' | 'breeder' | 'directory'
  city?: string
  url?: string
  /** One-sentence description of what this resource provides. */
  blurb?: string
}

/**
 * A veterinary resource — typically a university teaching hospital or a
 * named professional association directory. Specific private clinics are NOT
 * listed (per the trust contract). Use the AEMV directory and the
 * /find-a-vet/[state] vetting checklist for clinic-level discovery.
 */
export interface VeterinaryResource {
  name: string
  city?: string
  /** What this resource covers — university hospital, AEMV directory, etc. */
  specialty: string
  url?: string
}

/**
 * A local ferret club, association, or regional AFA chapter. Only listed when
 * there is a verifiable public web presence and the org explicitly serves the
 * state in question. Generic national groups go in `adoptionResources` as
 * directories instead.
 */
export interface LocalFerretAssociation {
  name: string
  url: string
}

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

  // ─── Legality directory fields (used by /states/[state]) ───────────────────

  /**
   * Normalized legal status used for the color-coded callout and hub grid.
   * Defaults to 'legal' when undefined.
   */
  legalStatus?: LegalStatus
  /**
   * Plain-language summary of the legal status. 1–3 sentences. Renders inside
   * the mandatory CalloutBox at the top of the state page.
   */
  legalSummary?: string
  /**
   * Specific state code / regulation reference. Required when `legalStatus`
   * is not `legal` (and recommended otherwise where a rabies-vaccination
   * statute or permit rule exists). Format: free-text including citation.
   */
  lawCitation?: string
  /**
   * Permit requirements when `legalStatus` is `requires-permit` (or when a
   * city-specific permit rule applies). Free text.
   */
  permitRequirementsIfAny?: string
  /**
   * Cities or jurisdictions inside an otherwise-legal state that impose a
   * local ban (e.g. New York City inside New York). Used to surface the
   * restriction in the page header.
   */
  knownRestrictedCities?: string[]
  /**
   * Adoption-side directory entries (national shelter networks, AFA chapters,
   * Petfinder organization searches). Empty array means "use national resources
   * below". NEVER fabricated; see file header.
   */
  adoptionResources?: AdoptionResource[]
  /**
   * Veterinary-side resources — usually a university teaching hospital + the
   * AEMV state filter. Private clinics are NOT listed.
   */
  veterinaryResources?: VeterinaryResource[]
  /**
   * Local ferret clubs / state-level AFA chapters / 501(c)(3)s with a
   * verifiable public site.
   */
  localFerretAssociations?: LocalFerretAssociation[]
  /**
   * Official state Fish & Wildlife / Agriculture / Health department URL the
   * reader should consult to verify the legal status before acquiring a ferret.
   * .gov / .state.* domains only.
   */
  officialResourceUrl?: string
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Arizona with no state permit required. Climate is the main clinical concern: ferrets do not tolerate temperatures above ~80°F, so cooling and indoor housing are essential.',
    lawCitation:
      'Arizona Game and Fish Department restricted-wildlife regulations (R12-4-406) — domesticated ferrets are not listed as restricted live wildlife.',
    officialResourceUrl: 'https://www.azgfd.com/wildlife/laws-and-regulations/',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in the Southwest.',
      },
      {
        name: 'Petfinder — Arizona Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/az/',
        blurb: 'Arizona Petfinder listings, concentrated in Phoenix and Tucson.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Arizona College of Veterinary Medicine',
        city: 'Oro Valley',
        specialty:
          'Emerging exotic-pet referral capability; the AAEAP-affiliated practices in Phoenix and Tucson remain the practical option for adrenal and insulinoma workups.',
        url: 'https://vetmed.arizona.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — AZ filter',
        city: 'Statewide',
        specialty:
          'Phoenix and Tucson metros have several ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'illegal',
    legalSummary:
      'Ferrets are illegal to own as pets in California. The state classifies them as a restricted (non-native) species. Veterinary treatment is not prohibited, but ownership, sale, import, and transport are.',
    lawCitation:
      'California Fish & Game Code §2118 (restricted species statute) and 14 California Code of Regulations §671 (restricted-species list, identifying Mustela putorius furo as Category D).',
    knownRestrictedCities: ['Statewide — all California cities and counties'],
    officialResourceUrl: 'https://wildlife.ca.gov/Conservation/Laws-And-Regulations',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb:
          'National AFA-affiliated shelter index. Adoption from California is not permitted; California residents relocating to a permissive state can use the directory in their destination state.',
      },
      {
        name: 'Petfinder — Ferret Search (out-of-state)',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/',
        blurb:
          'Petfinder aggregates adoptable ferrets from partner shelters. No California listings appear because of the state ban; useful only if you are relocating.',
      },
    ],
    veterinaryResources: [
      {
        name: 'UC Davis Veterinary Medical Teaching Hospital',
        city: 'Davis',
        specialty:
          'Companion Exotic Animal Medicine and Surgery service — accepts ferret patients; the ownership ban does not restrict treatment.',
        url: 'https://www.vetmed.ucdavis.edu/hospital',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — CA filter',
        city: 'Statewide',
        specialty:
          'Member directory of exotic-mammal vets. Filter by California; clinics may decline to advertise ferret services but will treat existing ferrets in confidence.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'requires-permit',
    legalSummary:
      'Ferrets are legal in Florida but classified as Class III wildlife. A no-cost personal-possession permit is required from the Florida Fish and Wildlife Conservation Commission (FWC) before acquiring a ferret.',
    lawCitation:
      'Florida Administrative Code Rule 68A-6.0022 (Class III wildlife — personal-use permit) and Rule 68A-6.0023 (caging and care standards).',
    permitRequirementsIfAny:
      'Apply through FWC for a Class III Personal Possession permit. The permit itself is no-cost but requires a written application identifying the species and intended housing. Caging standards under 68A-6.0023 apply.',
    officialResourceUrl: 'https://myfwc.com/license/captive-wildlife/',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters serving the Southeast.',
      },
      {
        name: 'Petfinder — Florida Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/fl/',
        blurb:
          'Florida Petfinder listings. Confirm the rescue has guidance on the Class III permit before adopting.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Florida College of Veterinary Medicine',
        city: 'Gainesville',
        specialty:
          'Zoological Medicine service — accepts ferret referrals; commonly consulted for adrenal and insulinoma cases in the Southeast.',
        url: 'https://hospitals.vetmed.ufl.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — FL filter',
        city: 'Statewide',
        specialty:
          'Member directory; Miami, Tampa, and Orlando metros have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    region: 'South',
    majorCities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens', 'Macon'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Georgia permits ferrets; the Atlanta metro has multiple exotic-pet practices and the UGA College of Veterinary Medicine accepts ferret referrals in Athens.`,
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets in Georgia with no state permit required. Georgia DNR wild-animal license rules apply to native wildlife and exotic carnivores, but domesticated ferrets are not classified as either.',
    lawCitation:
      'Georgia DNR wild-animal regulations (O.C.G.A. §27-5-4 and Ga. Comp. R. & Regs. 391-4-9) — the wild-animal license list does not include domesticated ferrets.',
    officialResourceUrl: 'https://georgiawildlife.com/licenses-permits-passes',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters serving Georgia and the broader Southeast.',
      },
      {
        name: 'Petfinder — Georgia Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/ga/',
        blurb: 'Georgia Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Georgia College of Veterinary Medicine',
        city: 'Athens',
        specialty:
          'Zoological Medicine service — accepts ferret referrals for adrenal, insulinoma, and dental workups.',
        url: 'https://vet.uga.edu/hospital/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — GA filter',
        city: 'Statewide',
        specialty:
          'Atlanta metro has the densest concentration of exotic-mammal clinics in the Southeast.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'illegal',
    legalSummary:
      'Ferrets are strictly illegal in Hawaii — possession, import, and transit through the state are all prohibited. There is no permit pathway. Mainland owners cannot bring or relocate a ferret to Hawaii.',
    lawCitation:
      'Hawaii Administrative Rules §4-71-6.5 (restricted-animals list, administered by the Hawaii Department of Agriculture). Hawaii Revised Statutes Chapter 142 §142-93 covers prohibited animals more broadly.',
    knownRestrictedCities: ['Statewide — all islands and counties'],
    officialResourceUrl: 'https://hdoa.hawaii.gov/pi/pq/import-program/',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb:
          'Hawaii adoption is not possible. If you are leaving Hawaii for a permissive state, use the directory in your destination.',
      },
    ],
    veterinaryResources: [],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Illinois with no state permit required. Local Chicago ordinances do not prohibit ferret ownership. Rabies vaccination is required under state Animal Control Act provisions.',
    lawCitation:
      'Illinois Animal Control Act (510 ILCS 5/) — rabies-vaccination and licensing framework. Ferrets are not listed under the Illinois Dangerous Animals Act (720 ILCS 585/).',
    officialResourceUrl: 'https://www2.illinois.gov/sites/agr/Animals/AnimalHealth/Pages/default.aspx',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in the greater Chicago area.',
      },
      {
        name: 'Petfinder — Illinois Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/il/',
        blurb: 'Illinois Petfinder results aggregate ferrets from partner shelters.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Illinois Veterinary Teaching Hospital',
        city: 'Urbana',
        specialty:
          'Zoological Medicine service — accepts ferret referrals and operates a Chicago-area satellite clinic.',
        url: 'https://vetmed.illinois.edu/vth/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — IL filter',
        city: 'Statewide',
        specialty:
          'Member directory. The Chicago metro and suburbs have the highest exotic-mammal clinic density in the Midwest.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Massachusetts with no state permit required. Rabies vaccination is required under MGL Chapter 140 §145B.',
    lawCitation:
      'Massachusetts General Laws Chapter 140 §145B (rabies vaccination of dogs, cats, and ferrets). 321 CMR 9.01 (MassWildlife) does not list domesticated ferrets among restricted exotic species.',
    officialResourceUrl: 'https://www.mass.gov/info-details/exotic-pets',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in New England.',
      },
      {
        name: 'Petfinder — Massachusetts Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/ma/',
        blurb: 'MA Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Tufts Cummings School of Veterinary Medicine — Foster Hospital',
        city: 'North Grafton',
        specialty:
          'Zoological Companion Animal Medicine service — accepts ferret referrals across New England.',
        url: 'https://hospitals.tufts.edu/foster-hospital-for-small-animals',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — MA filter',
        city: 'Statewide',
        specialty:
          'Boston metro and the surrounding suburbs have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    region: 'Midwest',
    majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Michigan permits ferrets; Michigan State University's College of Veterinary Medicine in East Lansing accepts exotic referrals.`,
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Michigan with no state permit required. Rabies vaccination is required under Michigan public-health rules.',
    lawCitation:
      'Michigan Department of Agriculture and Rural Development rules under the Animal Industry Act (Public Act 466 of 1988) — domesticated ferrets are not classified as wild animals; rabies vaccination required under MDARD rabies-control rules.',
    officialResourceUrl: 'https://www.michigan.gov/mdard/animals',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters across Michigan.',
      },
      {
        name: 'Petfinder — Michigan Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/mi/',
        blurb: 'Michigan Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Michigan State University Veterinary Medical Center',
        city: 'East Lansing',
        specialty:
          'Exotic Animal Medicine service — accepts ferret referrals; commonly consulted on adrenal disease.',
        url: 'https://cvm.msu.edu/vmc',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — MI filter',
        city: 'Statewide',
        specialty:
          'Detroit, Grand Rapids, and Ann Arbor metros have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'restricted',
    legalSummary:
      'Ferrets are legal as pets across New York State, except within the five boroughs of New York City, where they are prohibited. The NYC ban does not extend to Westchester, Long Island\'s Nassau and Suffolk counties, the Hudson Valley, or upstate.',
    lawCitation:
      'New York City Health Code §161.01 (Article 161, Wild Animals Prohibited). The state itself does not restrict ferret possession; the prohibition is municipal and applies only within Manhattan, the Bronx, Brooklyn, Queens, and Staten Island.',
    knownRestrictedCities: [
      'New York City — Manhattan',
      'New York City — Bronx',
      'New York City — Brooklyn',
      'New York City — Queens',
      'New York City — Staten Island',
    ],
    officialResourceUrl: 'https://www.nyc.gov/site/doh/health/health-topics/animals.page',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb:
          'AFA-affiliated shelters in upstate NY, Westchester, and Long Island serve the broader metro.',
      },
      {
        name: 'Petfinder — New York Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/ny/',
        blurb:
          'New York Petfinder results. NYC residents must adopt to an address outside the five boroughs.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Cornell University Hospital for Animals',
        city: 'Ithaca',
        specialty:
          'Zoological Medicine and Exotics — accepts ferret referrals; serves upstate NY and the Finger Lakes.',
        url: 'https://www.vet.cornell.edu/hospitals',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — NY filter',
        city: 'Statewide',
        specialty:
          'For NYC-resident ferret owners, Westchester, Nassau County, and Bergen County (NJ) clinics are the closest practical options.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    region: 'South',
    majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} North Carolina permits ferrets; NC State College of Veterinary Medicine in Raleigh accepts exotic-mammal referrals.`,
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in North Carolina with no state permit required. Some municipalities (notably Wake County) have specific rabies-vaccination ordinances for ferrets — check with your county animal-control office.',
    lawCitation:
      'North Carolina General Statutes Chapter 130A Article 6 (Communicable Diseases) §130A-185 — rabies-vaccination requirements explicitly extend to ferrets.',
    officialResourceUrl: 'https://www.ncwildlife.org/Licensing/Captivity-Licenses',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters serving the Carolinas.',
      },
      {
        name: 'Petfinder — North Carolina Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/nc/',
        blurb: 'NC Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'NC State Veterinary Hospital',
        city: 'Raleigh',
        specialty:
          'Exotic Animal Medicine — accepts ferret referrals for the Triangle and the broader Southeast.',
        url: 'https://hospital.cvm.ncsu.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — NC filter',
        city: 'Statewide',
        specialty:
          'Charlotte, Raleigh-Durham, and Greensboro metros have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets in Ohio with no state permit required. The Dangerous Wild Animal Act, enacted in 2012, does not list ferrets. Rabies vaccination is standard under state animal-health rules.',
    lawCitation:
      'Ohio Revised Code Chapter 935 (Dangerous Wild Animals) — ferrets are not enumerated as dangerous wild animals and may be kept without special permit. ORC §955 covers rabies-vaccination requirements.',
    officialResourceUrl: 'https://agri.ohio.gov/divisions/animal-health',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb:
          'AFA-affiliated shelters in Ohio and adjacent Midwest states.',
      },
      {
        name: 'Petfinder — Ohio Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/oh/',
        blurb: 'Ohio Petfinder listings statewide.',
      },
    ],
    veterinaryResources: [
      {
        name: 'The Ohio State University Veterinary Medical Center',
        city: 'Columbus',
        specialty:
          'Companion Animal — Avian and Exotic service. Accepts ferret referrals statewide.',
        url: 'https://vet.osu.edu/vmc',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — OH filter',
        city: 'Statewide',
        specialty:
          'Member directory. Columbus, Cleveland, and Cincinnati metros all have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'requires-permit',
    legalSummary:
      'Pennsylvania classifies ferrets as exotic wildlife. Ownership is permitted under an Exotic Wildlife Possession Permit issued by the Pennsylvania Game Commission. The permit and proof-of-source paperwork should be in hand before acquiring a ferret.',
    lawCitation:
      'Pennsylvania Game and Wildlife Code (Title 34) §2961 et seq. (exotic wildlife) and §147 (possession permits) administered by the Pennsylvania Game Commission.',
    permitRequirementsIfAny:
      'Apply through the Pennsylvania Game Commission for an Exotic Wildlife Possession Permit. The application requires proof of legal source (USDA-licensed breeder paperwork or interstate health certificate), housing description, and a per-animal fee.',
    officialResourceUrl: 'https://www.pgc.pa.gov/Wildlife/WildlifeRelatedDiseases/Pages/default.aspx',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters serve the Philadelphia–Pittsburgh corridor.',
      },
      {
        name: 'Petfinder — Pennsylvania Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/pa/',
        blurb:
          'PA Petfinder listings. Confirm the rescue provides documentation suitable for your Game Commission permit application.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Pennsylvania — Ryan Veterinary Hospital',
        city: 'Philadelphia',
        specialty:
          'Exotic Companion Animal Service — accepts ferret referrals; serves the Mid-Atlantic.',
        url: 'https://www.vet.upenn.edu/veterinary-hospitals/ryan-veterinary-hospital',
      },
      {
        name: 'Penn State Veterinary Sciences',
        city: 'State College',
        specialty:
          'Diagnostic and referral support for exotic companion mammals across central PA.',
        url: 'https://animalscience.psu.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — PA filter',
        city: 'Statewide',
        specialty:
          'Member directory; Philadelphia, Pittsburgh, and the Lehigh Valley have multiple ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Tennessee with no state permit required. Rabies vaccination is required under state animal-health rules.',
    lawCitation:
      'Tennessee Wildlife Resources Agency rules (TWRA Rule 1660-01-18) — domesticated ferrets are not classified as Class I or Class II wildlife. T.C.A. §68-8-105 covers rabies-vaccination requirements.',
    officialResourceUrl: 'https://www.tn.gov/twra/wildlife/regulations.html',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters serving Tennessee and the broader Southeast.',
      },
      {
        name: 'Petfinder — Tennessee Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/tn/',
        blurb: 'Tennessee Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'University of Tennessee Veterinary Medical Center',
        city: 'Knoxville',
        specialty:
          'Avian and Zoological Medicine service — accepts ferret referrals; serves Tennessee and adjacent states.',
        url: 'https://vetmed.tennessee.edu/vmc/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — TN filter',
        city: 'Statewide',
        specialty:
          'Nashville, Memphis, and Knoxville metros have ferret-experienced clinics.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    region: 'South',
    majorCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Texas permits ferrets; Texas A&M Veterinary Medical Teaching Hospital in College Station accepts exotic-mammal referrals. The Houston, Dallas–Fort Worth, and Austin metros all have multiple exotic-pet practices.`,
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets in Texas with no state-level permit requirement. Standard companion-animal rules apply; rabies vaccination is the practical baseline expectation.',
    lawCitation:
      'Texas Health & Safety Code Chapter 826 (rabies-control statute) covers domestic ferrets among rabies-vaccination requirements. Texas Parks & Wildlife restricted-species rules (31 TAC §65.325) do not list domesticated ferrets.',
    officialResourceUrl: 'https://tpwd.texas.gov/regulations/',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb:
          'Filter the AFA-affiliated shelter index for Texas-region listings.',
      },
      {
        name: 'Petfinder — Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/tx/',
        blurb:
          'Texas Petfinder results aggregate ferrets from partner shelters statewide.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Texas A&M Veterinary Medical Teaching Hospital',
        city: 'College Station',
        specialty:
          'Zoological Medicine service — accepts ferret referrals for adrenal, insulinoma, and dental workups.',
        url: 'https://vmth.tamu.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — TX filter',
        city: 'Statewide',
        specialty:
          'Cross-checked against ABVP-ECM certification holders for ferret-volume clinics in Houston, DFW, Austin, and San Antonio.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Virginia with no state permit required. Rabies vaccination is required under Virginia public-health regulations.',
    lawCitation:
      'Virginia Department of Wildlife Resources regulations — ferrets are not enumerated as restricted or non-native predatory wildlife under 4VAC15-30. Virginia Code §3.2-6521 requires rabies vaccination for ferrets.',
    officialResourceUrl: 'https://dwr.virginia.gov/wildlife/laws-regulations/',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in the DMV (DC–Maryland–Virginia) region.',
      },
      {
        name: 'Petfinder — Virginia Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/va/',
        blurb: 'Virginia Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Virginia–Maryland College of Veterinary Medicine',
        city: 'Blacksburg',
        specialty:
          'Zoological Medicine — accepts exotic-mammal referrals; serves the Mid-Atlantic.',
        url: 'https://vetmed.vt.edu/hospital.html',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — VA filter',
        city: 'Statewide',
        specialty:
          'The Northern Virginia metro shares boarded specialists with the DC area, one of the densest exotic-mammal corridors in the US.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    region: 'West',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Washington permits ferrets; Washington State University College of Veterinary Medicine in Pullman accepts exotic-mammal referrals. The Seattle metro has multiple exotic-pet practices.`,
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets statewide in Washington with no state permit required. Standard companion-animal rules apply; check Seattle and King County municipal codes for licensing requirements.',
    lawCitation:
      'Washington Department of Fish and Wildlife restricted-species rules (WAC 220-450) — domesticated ferrets are not classified as deleterious exotic wildlife. RCW 16.30 covers dangerous-animal restrictions; ferrets are excluded.',
    officialResourceUrl: 'https://wdfw.wa.gov/species-habitats/at-risk/prohibited',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in the Pacific Northwest.',
      },
      {
        name: 'Petfinder — Washington Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/wa/',
        blurb: 'Washington Petfinder listings.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Washington State University Veterinary Teaching Hospital',
        city: 'Pullman',
        specialty:
          'Exotics service — accepts ferret referrals; serves the Pacific Northwest and Inland Northwest.',
        url: 'https://vth.vetmed.wsu.edu/',
      },
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — WA filter',
        city: 'Statewide',
        specialty:
          'Seattle metro has multiple ferret-experienced clinics; eastern WA owners often consult WSU directly.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary:
      'Ferrets are legal as pets in the District of Columbia with no city permit required. Rabies vaccination is required under DC animal-control rules. Surrounding jurisdictions vary (Maryland and Virginia legal; Pennsylvania requires a permit).',
    lawCitation:
      'DC Code §8-1808 (Animal Control Act) — rabies-vaccination requirements include ferrets. DC Municipal Regulations Title 24 does not list ferrets as prohibited exotic animals.',
    officialResourceUrl: 'https://doh.dc.gov/service/animal-services',
    adoptionResources: [
      {
        name: 'American Ferret Association (AFA) — Shelter Directory',
        type: 'directory',
        url: 'https://www.ferret.org/links/shelters.html',
        blurb: 'AFA-affiliated shelters in the DMV (DC–Maryland–Virginia) region.',
      },
      {
        name: 'Petfinder — DC-area Ferret Search',
        type: 'directory',
        url: 'https://www.petfinder.com/search/ferrets-for-adoption/us/dc/',
        blurb:
          'DC Petfinder listings — most listings are physically housed in Maryland or Virginia.',
      },
    ],
    veterinaryResources: [
      {
        name: 'Association of Exotic Mammal Veterinarians (AEMV) — DC/MD/VA filter',
        city: 'Metro-wide',
        specialty:
          'The DC–Maryland–Virginia corridor has one of the highest concentrations of boarded exotic-mammal specialists in the US.',
        url: 'https://www.aemv.org/find-a-vet',
      },
    ],
    localFerretAssociations: [],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Top 15 states by population — the prioritised set for the legality directory.
 * Used by /states (hub) and /states/[state] to highlight the highest-search-
 * volume jurisdictions. Hawaii and DC are surfaced separately in the hub even
 * though they fall outside the top 15, because of their legal salience.
 */
export const TOP_STATE_SLUGS: string[] = [
  'california',
  'texas',
  'florida',
  'new-york',
  'pennsylvania',
  'illinois',
  'ohio',
  'georgia',
  'north-carolina',
  'michigan',
  'virginia',
  'washington',
  'arizona',
  'massachusetts',
  'tennessee',
]

/** Resolve a state by slug (case-insensitive). */
export function getStateBySlug(slug: string): StateEntry | undefined {
  const target = slug.toLowerCase()
  return States.find((s) => s.slug === target)
}

/**
 * Effective legal status — falls back to `'legal'` when not annotated.
 * Used by the hub grid and the per-state callout to render a color-coded
 * status badge.
 */
export function effectiveLegalStatus(state: StateEntry): LegalStatus {
  return state.legalStatus ?? 'legal'
}
