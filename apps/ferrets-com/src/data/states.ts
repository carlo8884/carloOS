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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal to own as pets throughout Alabama with no state possession permit. Rabies vaccination is required under state animal-health law, and local licensing may apply.",
    lawCitation: "Alabama Department of Conservation and Natural Resources regulations on restricted/non-native species do not enumerate the domesticated ferret. General companion-animal and rabies-vaccination statutes (Ala. Code Title 3) govern ownership.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Alabama and the broader Southeast.",
      },
      {
        name: "Petfinder — Alabama Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/al/",
        blurb: "Alabama Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Auburn University College of Veterinary Medicine",
        city: "Auburn",
        specialty: "Teaching hospital with zoological/exotic referral capability; a common in-state referral point for adrenal and insulinoma workups.",
        url: "https://vetmed.auburn.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — AL filter",
        city: 'Statewide',
        specialty: "Birmingham and Huntsville hold the densest concentration of exotic-mammal practices; Mobile-area owners often refer toward the Gulf Coast or Auburn.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    abbr: 'AK',
    region: 'West',
    majorCities: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Exotic-pet vets are concentrated in the Anchorage and Fairbanks metro areas; rural owners should plan for long-distance referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Alaska. They appear on the state's clean list of animals that may be possessed without a permit, alongside dogs and cats.",
    lawCitation: "Alaska Department of Fish and Game regulations (5 AAC 92.029, the list of animals that may be possessed without a permit) include the domesticated ferret. No state possession permit is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; in-state ferret rescues are scarce, so many Alaska owners acquire from a vetted breeder or relocate an existing ferret.",
      },
      {
        name: "Petfinder — Alaska Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ak/",
        blurb: "Alaska Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — AK filter",
        city: 'Statewide',
        specialty: "Exotic-experienced clinics cluster in Anchorage and Fairbanks. Rural and bush-community owners should arrange a relationship with an Anchorage referral practice in advance.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets statewide in Arkansas with no special possession permit. Rabies vaccination is the standard state requirement.",
    lawCitation: "Arkansas Game and Fish Commission captive-wildlife rules address native and large exotic species; the domesticated ferret is not classified as restricted captive wildlife. Rabies vaccination is required under Arkansas Department of Health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Arkansas and the South-Central region.",
      },
      {
        name: "Petfinder — Arkansas Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ar/",
        blurb: "Arkansas Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — AR filter",
        city: 'Statewide',
        specialty: "The Little Rock metro and the northwest corridor (Fayetteville–Springdale–Rogers) hold most exotic-mammal capacity; expect referral travel from the Delta.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Colorado. They are explicitly listed as unregulated wildlife that does not require a state license to possess.",
    lawCitation: "Colorado Parks and Wildlife regulations (Chapter W-0, the unregulated-wildlife list) classify the domesticated ferret as unregulated — no state possession license is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Colorado and the Mountain West.",
      },
      {
        name: "Petfinder — Colorado Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/co/",
        blurb: "Colorado Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Colorado State University James L. Voss Veterinary Teaching Hospital",
        city: "Fort Collins",
        specialty: "Major teaching hospital with an exotic/avian service; a regional referral center for ferret oncology and endocrine cases.",
        url: "https://vth.colostate.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — CO filter",
        city: 'Statewide',
        specialty: "The Denver–Boulder corridor has the densest exotic-mammal practice concentration in the Mountain West, and Colorado State University in Fort Collins is a major referral hospital.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbr: 'CT',
    region: 'Northeast',
    majorCities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Connecticut permits ferrets; rabies vaccination is required under CGS §22-339b.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Connecticut with no state possession permit. State law requires rabies vaccination for ferrets, the same as for dogs and cats.",
    lawCitation: "Connecticut General Statutes §22-339b requires rabies vaccination of dogs, cats, and ferrets. The domesticated ferret is not on the state's potentially-dangerous-animal or restricted list, so no possession permit is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Connecticut and the broader New England / tri-state region.",
      },
      {
        name: "Petfinder — Connecticut Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ct/",
        blurb: "Connecticut Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — CT filter",
        city: 'Statewide',
        specialty: "The dense Northeast corridor means owners in lower Connecticut are within driving distance of multiple boarded exotic-mammal specialists in Connecticut, New York, and Massachusetts.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    abbr: 'DE',
    region: 'South',
    majorCities: ['Wilmington', 'Dover', 'Newark', 'Middletown'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Delaware permits ferrets statewide; the Wilmington–Philadelphia corridor includes several boarded exotic-mammal specialists within driving distance.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets statewide in Delaware with no state possession permit. Standard rabies vaccination and local licensing rules apply.",
    lawCitation: "Delaware Department of Natural Resources and Environmental Control rules govern native wildlife and large exotics; the domesticated ferret is not classified as restricted. Rabies vaccination is required under Delaware animal-health law.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Delaware and the mid-Atlantic / Delaware Valley region.",
      },
      {
        name: "Petfinder — Delaware Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/de/",
        blurb: "Delaware Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — DE filter",
        city: 'Statewide',
        specialty: "Wilmington-area owners can reach boarded exotic-mammal specialists in the Philadelphia metro within an hour; the University of Pennsylvania's exotic service is a regional referral option.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Idaho with no state possession permit for the domesticated ferret. Rabies vaccination and local rules apply.",
    lawCitation: "Idaho Department of Agriculture and Idaho Fish and Game rules regulate deleterious exotic animals and native wildlife; the domesticated ferret is treated as a companion animal rather than a regulated exotic. Confirm current Idaho Dept. of Agriculture guidance.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse in the Intermountain West, so vetted breeders and out-of-state transfers are common.",
      },
      {
        name: "Petfinder — Idaho Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/id/",
        blurb: "Idaho Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — ID filter",
        city: 'Statewide',
        specialty: "The Treasure Valley (Boise metro) holds most of the state's exotic-mammal capacity; eastern and panhandle owners should plan referral travel or telemedicine triage.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Indiana with no state possession permit. Rabies vaccination is required, and Indianapolis and other cities may add licensing rules.",
    lawCitation: "Indiana Department of Natural Resources wild-animal-possession permit rules (312 IAC 9-11) cover native and certain exotic species; the domesticated ferret is not a regulated wild animal. Rabies vaccination is required under Indiana animal-health law.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Indiana and the Great Lakes region.",
      },
      {
        name: "Petfinder — Indiana Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/in/",
        blurb: "Indiana Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Purdue University Veterinary Hospital",
        city: "West Lafayette",
        specialty: "Teaching hospital with an exotic/avian service; a primary in-state referral point for ferret endocrine and oncology cases.",
        url: "https://vethospital.purdue.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — IN filter",
        city: 'Statewide',
        specialty: "Indianapolis is the exotic-mammal hub; Purdue University's veterinary teaching hospital in West Lafayette is a major in-state referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbr: 'IA',
    region: 'Midwest',
    majorCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Iowa City', 'Sioux City'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Iowa permits ferrets; Iowa State University's Lloyd Veterinary Medical Center accepts ferret referrals in Ames.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Iowa with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Iowa Department of Natural Resources rules regulate dangerous wild animals (Iowa Code Chapter 717F) but exempt domesticated species; the ferret is not a dangerous wild animal under that chapter. Rabies vaccination is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Iowa and the Upper Midwest.",
      },
      {
        name: "Petfinder — Iowa Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ia/",
        blurb: "Iowa Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Iowa State University Lloyd Veterinary Medical Center",
        city: "Ames",
        specialty: "Teaching hospital with an exotics service; a regional referral center for ferret adrenal disease and insulinoma.",
        url: "https://vetmed.iastate.edu/hospital",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — IA filter",
        city: 'Statewide',
        specialty: "Des Moines and the Iowa City–Cedar Rapids corridor hold most exotic-mammal capacity; Iowa State University in Ames is a major teaching-hospital referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbr: 'KS',
    region: 'Midwest',
    majorCities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe', 'Lawrence'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Kansas permits ferrets; Kansas State University's College of Veterinary Medicine in Manhattan accepts exotic-mammal referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Kansas with no state possession permit. Rabies vaccination is required, and local ordinances may apply.",
    lawCitation: "Kansas Department of Wildlife and Parks regulates native wildlife and certain dangerous regulated animals; the domesticated ferret is not a regulated dangerous animal. Rabies vaccination is required under Kansas animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Kansas and the Central Plains.",
      },
      {
        name: "Petfinder — Kansas Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ks/",
        blurb: "Kansas Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Kansas State University Veterinary Health Center",
        city: "Manhattan",
        specialty: "Teaching hospital with an exotics service; a regional referral center for ferret oncology and endocrine workups.",
        url: "https://www.ksvdl.org/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — KS filter",
        city: 'Statewide',
        specialty: "The Kansas City and Wichita metros hold most exotic-mammal capacity; Kansas State University in Manhattan is a major teaching-hospital referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbr: 'KY',
    region: 'South',
    majorCities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Kentucky permits ferrets; rabies vaccination is required under KRS §258.015.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Kentucky with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Kentucky Department of Fish and Wildlife Resources rules (301 KAR 2:082) classify certain inherently-dangerous and native species; the domesticated ferret is not an inherently-dangerous animal under that rule. Rabies vaccination is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Kentucky and the Ohio Valley.",
      },
      {
        name: "Petfinder — Kentucky Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ky/",
        blurb: "Kentucky Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — KY filter",
        city: 'Statewide',
        specialty: "Louisville and Lexington hold most exotic-mammal capacity; northern-Kentucky owners often refer across the river into the Cincinnati metro.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbr: 'LA',
    region: 'South',
    majorCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Louisiana permits ferrets; LSU School of Veterinary Medicine in Baton Rouge accepts exotic-mammal referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Louisiana with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Louisiana Department of Wildlife and Fisheries regulates potentially-dangerous wild quadrupeds and native species; the domesticated ferret is not on that restricted list. Rabies vaccination is required under Louisiana animal-health law.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Louisiana and the Gulf South.",
      },
      {
        name: "Petfinder — Louisiana Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/la/",
        blurb: "Louisiana Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "LSU Veterinary Teaching Hospital",
        city: "Baton Rouge",
        specialty: "Teaching hospital with a zoological-medicine service; a primary in-state referral point for ferret endocrine and oncology cases.",
        url: "https://www.lsu.edu/vetmed/veterinary_hospital/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — LA filter",
        city: 'Statewide',
        specialty: "New Orleans and Baton Rouge hold most exotic-mammal capacity; LSU's veterinary teaching hospital in Baton Rouge is the major in-state referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'maine',
    name: 'Maine',
    abbr: 'ME',
    region: 'Northeast',
    majorCities: ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Maine permits ferrets; exotic-pet practices are concentrated in the Portland and Bangor metros.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Maine. The state has historically allowed ferrets without an individual possession permit, but Maine maintains an unrestricted/restricted species framework worth confirming.",
    lawCitation: "Maine Department of Inland Fisheries and Wildlife maintains lists of unrestricted, restricted, and prohibited species (09-137 CMR Chapter 7). The domesticated ferret has been treated as allowable; confirm its current classification with MDIFW before acquiring.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Maine and northern New England.",
      },
      {
        name: "Petfinder — Maine Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/me/",
        blurb: "Maine Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — ME filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity concentrates in the Portland metro; northern and Down East owners should plan referral travel toward Portland or into New Hampshire.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbr: 'MD',
    region: 'South',
    majorCities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Annapolis'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Maryland permits ferrets; the Baltimore–DC corridor has the highest density of boarded exotic-mammal specialists on the East Coast.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Maryland with no state possession permit. Rabies vaccination is required, and Baltimore and other jurisdictions may add licensing rules.",
    lawCitation: "Maryland Department of Natural Resources restricts certain native and exotic species (COMAR 08.03.11); the domesticated ferret is not on the prohibited list. Rabies vaccination is required under Maryland animal-health law.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Maryland and the mid-Atlantic / DC region.",
      },
      {
        name: "Petfinder — Maryland Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/md/",
        blurb: "Maryland Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — MD filter",
        city: 'Statewide',
        specialty: "The Baltimore–DC corridor has strong exotic-mammal capacity; the University of Pennsylvania exotic service to the north is a regional referral option.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Minnesota with no state possession permit. Rabies vaccination is recommended/required and local licensing may apply.",
    lawCitation: "Minnesota regulates regulated animals (Minn. Stat. §346.155) — primarily large cats, bears, and primates — and the domesticated ferret is not a regulated animal under that statute. The DNR's restricted-species rules likewise do not reach domesticated ferrets.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Minnesota and the Upper Midwest.",
      },
      {
        name: "Petfinder — Minnesota Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/mn/",
        blurb: "Minnesota Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "University of Minnesota Veterinary Medical Center",
        city: "St. Paul",
        specialty: "Teaching hospital with an exotics service; a regional referral center for ferret adrenal disease, insulinoma, and lymphoma.",
        url: "https://www.vmc.umn.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — MN filter",
        city: 'Statewide',
        specialty: "The Twin Cities metro holds the state's densest exotic-mammal capacity; the University of Minnesota's veterinary medical center in St. Paul is a major referral hospital.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    abbr: 'MS',
    region: 'South',
    majorCities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Mississippi permits ferrets; Mississippi State University's College of Veterinary Medicine accepts exotic referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Mississippi with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Mississippi Department of Wildlife, Fisheries, and Parks regulates inherently-dangerous and native wildlife; the domesticated ferret is not classified as inherently dangerous. Rabies vaccination is required under Mississippi animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Mississippi and the Deep South.",
      },
      {
        name: "Petfinder — Mississippi Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ms/",
        blurb: "Mississippi Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Mississippi State University College of Veterinary Medicine",
        city: "Starkville",
        specialty: "Teaching hospital with referral capability for exotic companion mammals; an in-state option for complex ferret cases.",
        url: "https://www.cvm.msstate.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — MS filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity is limited; the Jackson metro and the Memphis catchment (for north Mississippi) are the practical referral points. Mississippi State University in Starkville is the in-state teaching hospital.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    abbr: 'MO',
    region: 'Midwest',
    majorCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Missouri permits ferrets; the University of Missouri Veterinary Health Center in Columbia accepts exotic-mammal referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Missouri with no state possession permit. Rabies vaccination is required and local licensing may apply.",
    lawCitation: "Missouri Wildlife Code (3 CSR 10) and the dangerous-wild-animal statute (Mo. Rev. Stat. §578.023) regulate large carnivores and native wildlife; the domesticated ferret is not a dangerous wild animal under those provisions. Rabies vaccination is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Missouri and the Lower Midwest.",
      },
      {
        name: "Petfinder — Missouri Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/mo/",
        blurb: "Missouri Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "University of Missouri Veterinary Health Center",
        city: "Columbia",
        specialty: "Teaching hospital with an exotics service; a regional referral center for ferret endocrine and oncology cases.",
        url: "https://www.cvm.missouri.edu/veterinary-health-center/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — MO filter",
        city: 'Statewide',
        specialty: "St. Louis and Kansas City hold most exotic-mammal capacity; the University of Missouri veterinary teaching hospital in Columbia is a major in-state referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbr: 'MT',
    region: 'West',
    majorCities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Montana permits ferrets; exotic-pet practices are sparse outside the Billings and Missoula metros — plan for travel.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Montana with no state possession permit for the domesticated ferret. Rabies vaccination is recommended and local rules may apply.",
    lawCitation: "Montana Fish, Wildlife and Parks regulates the import and possession of wild and exotic animals; the domesticated ferret is treated as a companion animal rather than controlled wildlife. Confirm current MFWP guidance and any local ordinance.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse across the Northern Rockies, so vetted breeders and out-of-state transfers are common.",
      },
      {
        name: "Petfinder — Montana Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/mt/",
        blurb: "Montana Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — MT filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity concentrates in Billings, Missoula, and Bozeman; rural owners should establish a referral relationship in advance and plan for travel.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    abbr: 'NE',
    region: 'Midwest',
    majorCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Nebraska permits ferrets; exotic-mammal practices are concentrated in Omaha and Lincoln.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Nebraska with no state possession permit. Rabies vaccination is required and local licensing may apply.",
    lawCitation: "Nebraska Game and Parks Commission regulates captive wildlife and the Department of Agriculture regulates certain exotics; the domesticated ferret is not classified as controlled wildlife. Rabies vaccination is required under Nebraska animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Nebraska and the Central Plains.",
      },
      {
        name: "Petfinder — Nebraska Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ne/",
        blurb: "Nebraska Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — NE filter",
        city: 'Statewide',
        specialty: "The Omaha and Lincoln metros hold most exotic-mammal capacity in the state; western-Nebraska owners should plan referral travel.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    region: 'West',
    majorCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Nevada permits ferrets; heat-stress prevention is a clinical concern in the Las Vegas metro (ferrets do not tolerate temperatures above ~80°F).`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Nevada. The state does not require a permit to possess a domesticated ferret.",
    lawCitation: "Nevada Administrative Code 503.110 lists species that may not be possessed without a permit and species exempt from permit requirements; the domesticated ferret is not among the restricted live wildlife and may be possessed without a state permit.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Nevada and the Desert Southwest.",
      },
      {
        name: "Petfinder — Nevada Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/nv/",
        blurb: "Nevada Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — NV filter",
        city: 'Statewide',
        specialty: "The Las Vegas and Reno metros hold the state's exotic-mammal capacity; rural owners should plan referral travel to one of those two hubs.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    abbr: 'NH',
    region: 'Northeast',
    majorCities: ['Manchester', 'Nashua', 'Concord', 'Dover', 'Rochester'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Hampshire permits ferrets; many owners cross into Massachusetts for referrals to Tufts.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in New Hampshire with no state possession permit. Rabies vaccination is required and local rules may apply.",
    lawCitation: "New Hampshire Fish and Game controlled-species rules (Fis 800) regulate wildlife possession; the domesticated ferret is treated as a companion animal rather than controlled wildlife. Rabies vaccination is required under New Hampshire animal-health law.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving New Hampshire and northern New England.",
      },
      {
        name: "Petfinder — New Hampshire Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/nh/",
        blurb: "New Hampshire Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — NH filter",
        city: 'Statewide',
        specialty: "The southern-tier metros (Manchester, Nashua) sit within the Boston exotic-vet catchment, giving owners strong referral access.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    region: 'Northeast',
    majorCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Trenton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Jersey permits ferrets; the New York City prohibition does not extend across the river — North Jersey owners are sometimes the closest option for NYC-area ferret owners seeking care.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in New Jersey with no state possession permit. The state's potentially-dangerous-species permit framework does not reach the domesticated ferret.",
    lawCitation: "New Jersey Division of Fish and Wildlife exotic and nongame species rules (N.J.A.C. 7:25-4) require permits for potentially-dangerous species; the domesticated ferret is not a potentially-dangerous species under that rule. Rabies vaccination is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving New Jersey and the tri-state / mid-Atlantic region.",
      },
      {
        name: "Petfinder — New Jersey Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/nj/",
        blurb: "New Jersey Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — NJ filter",
        city: 'Statewide',
        specialty: "Northern New Jersey sits inside the New York metro exotic-vet catchment; the University of Pennsylvania exotic service is within reach for South Jersey owners.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    abbr: 'NM',
    region: 'West',
    majorCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} New Mexico permits ferrets; exotic-pet practices are concentrated in Albuquerque and Santa Fe.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in New Mexico with no state possession permit for the domesticated ferret. Rabies vaccination and local rules apply.",
    lawCitation: "New Mexico Department of Game and Fish regulates importation and possession of certain live wildlife; the domesticated ferret is treated as a companion animal rather than regulated wildlife. Confirm current Game and Fish guidance and any local ordinance.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse in the Desert Southwest, so vetted breeders and out-of-state transfers are common.",
      },
      {
        name: "Petfinder — New Mexico Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/nm/",
        blurb: "New Mexico Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — NM filter",
        city: 'Statewide',
        specialty: "The Albuquerque metro holds most exotic-mammal capacity; Santa Fe and Las Cruces owners typically refer toward Albuquerque or El Paso.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in North Dakota with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "North Dakota Game and Fish and the Department of Agriculture regulate nontraditional livestock and certain captive wildlife categories; the domesticated ferret is treated as a companion animal. Rabies vaccination is required under North Dakota rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse on the Northern Plains, so out-of-state transfers and vetted breeders are common.",
      },
      {
        name: "Petfinder — North Dakota Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/nd/",
        blurb: "North Dakota Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — ND filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity concentrates in Fargo and Bismarck; many owners use the Fargo–Moorhead metro's catchment, which extends into Minnesota.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Oklahoma with no state possession permit. Rabies vaccination is required and local licensing may apply.",
    lawCitation: "Oklahoma Department of Wildlife Conservation regulates native wildlife and certain exotics; the domesticated ferret is not classified as controlled wildlife. Rabies vaccination is required under Oklahoma animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Oklahoma and the South-Central region.",
      },
      {
        name: "Petfinder — Oklahoma Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ok/",
        blurb: "Oklahoma Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Oklahoma State University Veterinary Medical Hospital",
        city: "Stillwater",
        specialty: "Teaching hospital with an avian/exotic service; an in-state referral center for ferret endocrine and oncology cases.",
        url: "https://vetmed.okstate.edu/hospital/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — OK filter",
        city: 'Statewide',
        specialty: "The Oklahoma City and Tulsa metros hold most exotic-mammal capacity; Oklahoma State University in Stillwater is a major in-state teaching-hospital referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    region: 'West',
    majorCities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Beaverton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Oregon permits ferrets; Oregon State University's Carlson College of Veterinary Medicine in Corvallis accepts exotic referrals. The Portland metro has multiple exotic-pet practices.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Oregon. The state's prohibited and controlled-species rules exempt the domesticated ferret, so no permit is required.",
    lawCitation: "Oregon Department of Fish and Wildlife prohibited-species rules (OAR 635-056) list controlled and prohibited species; the domesticated ferret is exempt and may be kept as a pet without a permit.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Oregon and the Pacific Northwest.",
      },
      {
        name: "Petfinder — Oregon Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/or/",
        blurb: "Oregon Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Oregon State University Veterinary Teaching Hospital",
        city: "Corvallis",
        specialty: "Teaching hospital with referral capability for exotic companion mammals; an in-state option for complex ferret cases.",
        url: "https://vetmed.oregonstate.edu/hospital",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — OR filter",
        city: 'Statewide',
        specialty: "The Portland metro has dense exotic-mammal capacity; Oregon State University's veterinary teaching hospital in Corvallis is a major in-state referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Rhode Island. Rhode Island regulates exotic-animal possession closely, so confirming the current ferret rule with state authorities is especially important here.",
    lawCitation: "Rhode Island Department of Environmental Management regulates the importation and possession of wild and exotic animals (R.I. Gen. Laws Chapter 4-18 and DEM rules). The domesticated ferret has been treated as allowable; confirm its current classification and any permit or rabies-vaccination requirement with RI DEM before acquiring.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Rhode Island and southern New England.",
      },
      {
        name: "Petfinder — Rhode Island Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ri/",
        blurb: "Rhode Island Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — RI filter",
        city: 'Statewide',
        specialty: "Rhode Island's small size places nearly all owners within the Providence–Boston exotic-vet catchment, giving good referral access.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbr: 'SC',
    region: 'South',
    majorCities: ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Greenville'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} South Carolina permits ferrets; exotic-pet practices are concentrated in the Columbia, Charleston, and Greenville metros.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in South Carolina with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "South Carolina Department of Natural Resources regulates certain wildlife and large carnivores; the domesticated ferret is not classified as restricted wildlife. Rabies vaccination is required under South Carolina animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving South Carolina and the Southeast.",
      },
      {
        name: "Petfinder — South Carolina Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/sc/",
        blurb: "South Carolina Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — SC filter",
        city: 'Statewide',
        specialty: "The Charleston, Columbia, and Greenville metros hold most exotic-mammal capacity; upstate owners can also reach the Charlotte (NC) catchment.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    abbr: 'SD',
    region: 'Midwest',
    majorCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} South Dakota permits ferrets; exotic-pet practices are concentrated in Sioux Falls and Rapid City.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in South Dakota with no state possession permit. Rabies vaccination is recommended and local rules may apply.",
    lawCitation: "South Dakota Game, Fish and Parks and the Animal Industry Board regulate nondomestic and captive wildlife; the domesticated ferret is treated as a companion animal. Confirm current Animal Industry Board guidance and any local ordinance.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse on the Northern Plains, so out-of-state transfers and vetted breeders are common.",
      },
      {
        name: "Petfinder — South Dakota Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/sd/",
        blurb: "South Dakota Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — SD filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity concentrates in Sioux Falls and Rapid City; eastern owners can also use the broader Sioux Falls catchment that extends toward Minnesota and Iowa.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Utah. The state classifies the domesticated ferret as exempt from the controlled-species certificate-of-registration requirement.",
    lawCitation: "Utah Division of Wildlife Resources rules (Utah Admin. Code R657-3) classify species as prohibited, controlled, or exempt (noncontrolled); the domesticated ferret is treated as noncontrolled and may be kept without a certificate of registration.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Utah and the Mountain West.",
      },
      {
        name: "Petfinder — Utah Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/ut/",
        blurb: "Utah Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — UT filter",
        city: 'Statewide',
        specialty: "The Salt Lake City–Provo corridor (Wasatch Front) holds nearly all of the state's exotic-mammal capacity; rural owners should plan referral travel.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    abbr: 'VT',
    region: 'Northeast',
    majorCities: ['Burlington', 'Essex', 'South Burlington', 'Colchester', 'Rutland'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Vermont permits ferrets; many owners cross into Massachusetts for referrals to Tufts.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Vermont with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Vermont Fish and Wildlife rules on unrestricted and restricted species treat the domesticated ferret as an allowable companion animal; it is not on the prohibited list. Rabies vaccination is required under Vermont animal-health rules.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Vermont and northern New England.",
      },
      {
        name: "Petfinder — Vermont Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/vt/",
        blurb: "Vermont Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — VT filter",
        city: 'Statewide',
        specialty: "The Burlington metro holds most of the state's exotic-mammal capacity; southern-Vermont owners often refer into New Hampshire, Massachusetts, or New York.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in West Virginia with no state possession permit. Rabies vaccination is required and local rules may apply.",
    lawCitation: "West Virginia Division of Natural Resources and Department of Agriculture dangerous-wild-animal rules regulate large carnivores and certain exotics; the domesticated ferret is not a dangerous wild animal under those provisions. Rabies vaccination is required.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving West Virginia and the central Appalachian region.",
      },
      {
        name: "Petfinder — West Virginia Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/wv/",
        blurb: "West Virginia Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — WV filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity is limited in-state; Morgantown-area owners can reach the Pittsburgh catchment, and Eastern Panhandle owners reach the DC–Baltimore corridor.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbr: 'WI',
    region: 'Midwest',
    majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Wisconsin permits ferrets; the University of Wisconsin–Madison School of Veterinary Medicine accepts exotic-mammal referrals.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Wisconsin with no state possession permit. Rabies vaccination is required under state law.",
    lawCitation: "Wisconsin Department of Natural Resources captive-wildlife rules regulate native and certain exotic species; the domesticated ferret is not classified as captive wildlife requiring a license. Rabies vaccination is required under Wisconsin animal-health law (Wis. Stat. Chapter 95).",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA-affiliated shelters serving Wisconsin and the Upper Midwest.",
      },
      {
        name: "Petfinder — Wisconsin Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/wi/",
        blurb: "Wisconsin Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "UW–Madison Veterinary Care",
        city: "Madison",
        specialty: "Teaching hospital with a special-species service; a regional referral center for ferret endocrine and oncology cases.",
        url: "https://www.uwveterinarycare.wisc.edu/",
      },
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — WI filter",
        city: 'Statewide',
        specialty: "The Milwaukee and Madison metros hold most exotic-mammal capacity; the University of Wisconsin veterinary teaching hospital in Madison is a major in-state referral center.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    abbr: 'WY',
    region: 'West',
    majorCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
    exoticVetSearchHint: `${BOILERPLATE_HINT} Wyoming permits ferrets; exotic-pet practices are sparse — many owners travel to Colorado's Front Range for boarded specialists.`,
    legalStatus: 'legal',
    legalSummary: "Ferrets are legal as pets in Wyoming with no state possession permit for the domesticated ferret. Rabies vaccination is recommended and local rules may apply.",
    lawCitation: "Wyoming Game and Fish regulates live wildlife and certain exotics; the domesticated ferret is treated as a companion animal rather than regulated wildlife. Confirm current Game and Fish guidance and any local ordinance.",
    adoptionResources: [
      {
        name: "American Ferret Association (AFA) — Shelter Directory",
        type: 'directory',
        url: "https://www.ferret.org/links/shelters.html",
        blurb: "AFA national directory; ferret rescues are sparse across the Northern Rockies, so vetted breeders and out-of-state transfers are common.",
      },
      {
        name: "Petfinder — Wyoming Ferret Search",
        type: 'directory',
        url: "https://www.petfinder.com/search/ferrets-for-adoption/us/wy/",
        blurb: "Wyoming Petfinder listings, refreshed as partner shelters post.",
      },
    ],
    veterinaryResources: [
      {
        name: "Association of Exotic Mammal Veterinarians (AEMV) — WY filter",
        city: 'Statewide',
        specialty: "Exotic-mammal capacity is very limited in-state; Cheyenne and Casper owners often refer toward the Colorado Front Range (Fort Collins, Denver) or into neighboring states.",
        url: "https://www.aemv.org/find-a-vet",
      },
    ],
    localFerretAssociations: [],
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
