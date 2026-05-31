/**
 * State-by-state reptile law reference for Lizard.com.
 *
 * Powers /states (hub) and /states/[state] (50 state pages).
 *
 * Editorial discipline (per QC-STANDARDS.md §1):
 *
 *   1. Every banned-species or restricted-species claim cites a primary
 *      source — the actual state statute, administrative rule, or the
 *      enforcing wildlife agency's published list. If a primary source
 *      cannot be located for a state, that state is flagged
 *      `coverage: 'framework'` and only the general posture + agency
 *      + a link to the state code are exposed. We do NOT invent banned
 *      lists, do NOT extrapolate from a neighboring state, and do NOT
 *      paraphrase third-party hobbyist round-ups as authoritative.
 *
 *   2. No legal-advice language. The template renders
 *      "according to [agency], [species] is classified as..." rather
 *      than "you can keep this" / "you cannot keep this".
 *
 *   3. Laws change. Pages render a disclaimer block telling readers to
 *      verify with the agency before acquiring a reptile.
 *
 *   4. "Coverage in progress" is the honest, trust-bar-compliant state
 *      when we have not yet completed primary-source research. It is
 *      preferable to a fabricated list.
 *
 * 10 states are fully populated with banned + restricted species and
 * 5 primary-source citations each (CA, TX, FL, NY, IL, PA, OH, GA, NC,
 * MI). The remaining 40 states have framework-only data (general
 * posture + agency + state code link) and are clearly tagged.
 *
 * Update cadence: annually, or whenever a state passes reptile-specific
 * legislation. New full-coverage states can be promoted from framework
 * to full simply by populating `bannedSpecies`, `restrictedSpecies`,
 * `permitRequiredFor`, `notes`, and `citations`, then flipping
 * `coverage: 'full'`.
 */

export type GeneralPosture = 'permissive' | 'moderate' | 'restrictive'
export type CoverageLevel = 'full' | 'framework'

export interface BannedSpeciesEntry {
  name: string
  reason: string
}

export interface RestrictedSpeciesEntry {
  name: string
  permitRequired: string
}

export interface Citation {
  title: string
  url: string
}

export interface ReptileLaw {
  stateCode: string
  stateName: string
  slug: string
  generalPosture: GeneralPosture
  /**
   * `full` = banned/restricted species + permit categories + citations
   * are populated from primary sources.
   * `framework` = only posture, agency, and a link to the state code.
   * Per QC-STANDARDS.md §1 we do NOT fabricate banned-species lists for
   * framework states.
   */
  coverage: CoverageLevel
  bannedSpecies: BannedSpeciesEntry[]
  restrictedSpecies: RestrictedSpeciesEntry[]
  permitRequiredFor: string[]
  agency: { name: string; url: string }
  notes: string
  citations: Citation[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Posture rubric (applied uniformly across all 50 states):
//
//   permissive  — no general possession permit; venomous + invasive
//                  bans are the primary restrictions.
//
//   moderate    — possession permits required for several categories
//                  (venomous, large constrictors, native species),
//                  with a substantial allowed-species list available
//                  without permit.
//
//   restrictive — many common pet reptiles require a permit, and/or
//                  the state maintains a short "approved" list.
// ─────────────────────────────────────────────────────────────────────────────

export const StateReptileLaws: ReptileLaw[] = [
  // ─── Fully populated states ────────────────────────────────────────────

  {
    stateCode: 'CA',
    stateName: 'California',
    slug: 'california',
    generalPosture: 'restrictive',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'All venomous reptiles for personal possession',
        reason:
          'California Code of Regulations Title 14 §671 designates venomous reptiles as restricted; possession for personal pet purposes is generally prohibited.',
      },
      {
        name: 'Snapping turtles (Chelydra spp.)',
        reason:
          'Listed as restricted under 14 CCR §671 as a species detrimental to native wildlife.',
      },
      {
        name: 'Burmese python (Python bivittatus) and other large constrictors of concern',
        reason:
          'Restricted under 14 CCR §671 due to invasive-species risk; importation and possession require special permits.',
      },
      {
        name: 'All native California reptile species (taken from the wild without permit)',
        reason:
          'Native species are protected under California Fish and Game Code; collection from the wild requires a sport fishing license at minimum and is often further restricted by daily-bag rules.',
      },
      {
        name: 'Tegus (Salvator and Tupinambis spp.)',
        reason:
          'Restricted under 14 CCR §671 as a species detrimental to native fauna.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Most native California reptiles',
        permitRequired:
          'California Department of Fish and Wildlife (CDFW) Native Reptile Permit; commercial activity also requires an additional permit.',
      },
      {
        name: 'Restricted non-native species',
        permitRequired:
          'CDFW Restricted Species Permit (14 CCR §671.1); typically issued only for research, education (zoo/aquarium), or commercial display.',
      },
    ],
    permitRequiredFor: [
      'Native California reptiles (Native Reptile Permit)',
      'Restricted species listed in 14 CCR §671 (Restricted Species Permit)',
      'Commercial import or sale of any restricted species',
    ],
    agency: {
      name: 'California Department of Fish and Wildlife (CDFW)',
      url: 'https://wildlife.ca.gov/Conservation/Laws-And-Regulations',
    },
    notes:
      'California maintains one of the most restrictive reptile-keeping frameworks in the United States. The Restricted Species list (14 CCR §671) is broad, covering venomous reptiles, large constrictors, tegus, and many other species commonly kept as pets in less-regulated states. CDFW issues permits primarily for scientific, educational, and zoological purposes; personal-pet permits for restricted species are uncommon. Local jurisdictions (notably the City and County of San Francisco and the City of Los Angeles) impose additional bans or restrictions, and HOA covenants may further constrain reptile keeping. Always verify both state and local rules before acquiring any reptile in California.',
    citations: [
      {
        title: 'California Code of Regulations Title 14 §671 — Importation, Transportation and Possession of Live Restricted Animals',
        url: 'https://govt.westlaw.com/calregs/Document/IB30E29F0D45011DEB97CF67CD0B99467',
      },
      {
        title: 'CDFW — Restricted Species Laws and Regulations',
        url: 'https://wildlife.ca.gov/Conservation/Laws-And-Regulations/Restricted-Species-Laws-and-Regulations',
      },
      {
        title: 'California Fish and Game Code (FGC §2118–2157)',
        url: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=FGC&division=3.&title=&part=&chapter=2.&article=',
      },
      {
        title: 'CDFW — Native Reptile and Amphibian Possession Information',
        url: 'https://wildlife.ca.gov/Licensing/Native-Reptile',
      },
      {
        title: 'CDFW — Permits and Licenses',
        url: 'https://wildlife.ca.gov/Licensing',
      },
    ],
  },

  {
    stateCode: 'TX',
    stateName: 'Texas',
    slug: 'texas',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Indigenous Texas venomous snakes for commercial use without permit',
        reason:
          'Texas Parks and Wildlife Code Chapter 43 Subchapter G regulates "non-game" species; commercial collection of native venomous snakes requires the Non-Game Permit and Controlled Exotic Snake Permit.',
      },
      {
        name: 'Free-roaming exotic constrictors and venomous species without Controlled Exotic Snake Permit',
        reason:
          'Texas Parks and Wildlife Code §43.851 (the "Controlled Exotic Snake" statute) requires a permit for possession of African rock python, Asiatic rock python, green anaconda, reticulated python, southern African python, Burmese python, and all venomous snakes not indigenous to Texas.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Controlled exotic snakes (Burmese, reticulated, African rock, Asiatic rock, southern African python, green anaconda)',
        permitRequired:
          'Controlled Exotic Snake Permit (Texas Parks and Wildlife Code §43.853).',
      },
      {
        name: 'Non-indigenous venomous snakes',
        permitRequired:
          'Controlled Exotic Snake Permit; municipal ordinances may further restrict possession inside city limits.',
      },
      {
        name: 'Native non-game reptiles (e.g., Texas horned lizard, indigenous turtles)',
        permitRequired:
          'Non-Game Permit for commercial collection; possession of Texas horned lizards is generally prohibited as a protected non-game species.',
      },
    ],
    permitRequiredFor: [
      'Controlled exotic snakes (Burmese, reticulated, African rock, Asiatic rock, southern African python, green anaconda)',
      'All non-indigenous venomous snakes',
      'Commercial collection of native non-game reptiles',
    ],
    agency: {
      name: 'Texas Parks and Wildlife Department (TPWD)',
      url: 'https://tpwd.texas.gov/regulations/',
    },
    notes:
      'Texas takes a generally moderate approach: most common pet reptiles (bearded dragons, leopard geckos, ball pythons, corn snakes, crested geckos) can be kept without a state permit. Permits are required for the six "controlled exotic snake" species and for all non-indigenous venomous snakes under Texas Parks and Wildlife Code §43.851. Native species protections — particularly the Texas horned lizard (Phrynosoma cornutum), which is the state reptile and a protected non-game species — prohibit casual collection. Municipalities including Houston, Dallas, and Austin have their own ordinances; some restrict large constrictors and venomous reptiles inside city limits even when state law allows them with a permit.',
    citations: [
      {
        title: 'Texas Parks and Wildlife Code Chapter 43 Subchapter V — Controlled Exotic Snakes',
        url: 'https://statutes.capitol.texas.gov/Docs/PW/htm/PW.43.htm#V',
      },
      {
        title: 'TPWD — Controlled Exotic Snake Permit',
        url: 'https://tpwd.texas.gov/regulations/permits/snake/',
      },
      {
        title: 'TPWD — Non-Game and Threatened Wildlife',
        url: 'https://tpwd.texas.gov/huntwild/wild/wildlife_diversity/nongame/',
      },
      {
        title: 'Texas Administrative Code Title 31 §65.331 — Threatened and Endangered Species',
        url: 'https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=31&pt=2&ch=65&sch=G',
      },
      {
        title: 'TPWD — White List / Controlled Exotic Species',
        url: 'https://tpwd.texas.gov/huntwild/wild/wildlife_diversity/nongame/listed-species/',
      },
    ],
  },

  {
    stateCode: 'FL',
    stateName: 'Florida',
    slug: 'florida',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Burmese python (Python bivittatus)',
        reason:
          'Designated a Prohibited Species under Florida Administrative Code 68-5.007 due to established invasive populations in the Everglades; possession as a personal pet is prohibited.',
      },
      {
        name: 'Reticulated python (Malayopython reticulatus)',
        reason:
          'Prohibited Species under FAC 68-5.007 as of the 2021 reptile rule rewrite.',
      },
      {
        name: 'Green anaconda (Eunectes murinus) and other Eunectes spp.',
        reason:
          'Prohibited Species under FAC 68-5.007.',
      },
      {
        name: 'African rock python (Python sebae) and Northern African rock python (Python natalensis)',
        reason:
          'Prohibited Species under FAC 68-5.007.',
      },
      {
        name: 'Nile monitor (Varanus niloticus) and tegus (Salvator and Tupinambis spp.)',
        reason:
          'Designated Prohibited Species under FAC 68-5.007 after established breeding populations were documented in South Florida.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Venomous reptiles',
        permitRequired:
          'Class I/II Venomous Reptile License through the Florida Fish and Wildlife Conservation Commission (FWC); 1,000 documented hours of experience with the species required.',
      },
      {
        name: 'Conditional non-native reptiles (legacy holders only)',
        permitRequired:
          'Existing holders of Burmese pythons, Nile monitors, and tegus acquired before the 2021 prohibition may continue to possess them under a no-cost permit; new acquisitions are not allowed.',
      },
    ],
    permitRequiredFor: [
      'All venomous reptiles (Class I/II Venomous Reptile License)',
      'Legacy possession of species moved to Prohibited list in 2021 (Burmese python, reticulated python, green anaconda, African rock python, tegus, Nile monitor)',
      'Commercial sale or exhibition of captive wildlife',
    ],
    agency: {
      name: 'Florida Fish and Wildlife Conservation Commission (FWC)',
      url: 'https://myfwc.com/wildlifehabitats/nonnatives/',
    },
    notes:
      'Florida sits at the center of US reptile-keeping policy because of its uniquely severe invasive-species problem. The 2021 rewrite of Florida Administrative Code 68-5 reclassified Burmese pythons, reticulated pythons, green anacondas, African rock pythons, tegus, and Nile monitors as Prohibited Species after established breeding populations were confirmed in South Florida. Existing pet owners were grandfathered under a no-cost permit but cannot acquire additional animals; commercial breeding of these species in Florida is no longer permitted. Venomous reptiles require a Class I/II Venomous Reptile License with documented 1,000-hour experience minimums. Most common pet reptiles (bearded dragons, leopard geckos, corn snakes, ball pythons, crested geckos) remain freely possessable without a state permit.',
    citations: [
      {
        title: 'Florida Administrative Code 68-5 — Captive Wildlife',
        url: 'https://www.flrules.org/gateway/ChapterHome.asp?Chapter=68-5',
      },
      {
        title: 'FWC — Prohibited Species List',
        url: 'https://myfwc.com/wildlifehabitats/nonnatives/regulations/prohibited/',
      },
      {
        title: 'FWC — Captive Wildlife Permits and Licenses',
        url: 'https://myfwc.com/license/captive-wildlife/',
      },
      {
        title: 'FWC — Venomous Reptile License',
        url: 'https://myfwc.com/license/captive-wildlife/venomous-reptiles/',
      },
      {
        title: 'FWC — 2021 Constrictor and Tegu Rule (Final Order)',
        url: 'https://myfwc.com/wildlifehabitats/nonnatives/regulations/',
      },
    ],
  },

  {
    stateCode: 'NY',
    stateName: 'New York',
    slug: 'new-york',
    generalPosture: 'restrictive',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'All venomous reptiles (Crotalus, Naja, Bitis, etc.)',
        reason:
          'New York Environmental Conservation Law (ECL) §11-0511 prohibits possession of venomous reptiles as personal pets; only properly licensed zoological, research, or educational institutions may hold them.',
      },
      {
        name: 'Large constrictors over 12 feet (Burmese python, reticulated python, anacondas, African rock python)',
        reason:
          'ECL §11-0103 and 6 NYCRR Part 175 classify these as wild animals prohibited from personal possession.',
      },
      {
        name: 'Crocodilians (American alligator, all crocodiles and caimans)',
        reason:
          'Prohibited as "wild animals" under ECL §11-0511.',
      },
      {
        name: 'Native New York reptile species taken from the wild',
        reason:
          'Native turtles, snakes, and lizards are protected under 6 NYCRR Part 182; collection from the wild generally requires a permit and is restricted by season and bag limits.',
      },
      {
        name: 'Snapping turtles (commercial collection without permit)',
        reason:
          'Regulated under 6 NYCRR Part 1.31 as a game species with seasonal restrictions; commercial collection requires a separate license.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Native New York reptiles for educational use',
        permitRequired:
          'NYS Department of Environmental Conservation (DEC) Wildlife Possession License.',
      },
      {
        name: 'Non-native restricted species held by zoos or educational facilities',
        permitRequired:
          'DEC License to Collect or Possess (LCP) for scientific, educational, or exhibition use.',
      },
    ],
    permitRequiredFor: [
      'Any native New York reptile possessed for personal or educational purposes',
      'Wild animals on the ECL §11-0511 list (venomous, large constrictors, crocodilians)',
      'Commercial possession or sale of any regulated species',
    ],
    agency: {
      name: 'New York State Department of Environmental Conservation (DEC)',
      url: 'https://www.dec.ny.gov/animals/9358.html',
    },
    notes:
      'New York is one of the most restrictive states for reptile keeping. Environmental Conservation Law §11-0511 ("wild animal" statute) prohibits private possession of venomous reptiles, crocodilians, and large constrictors statewide. New York City overlays additional restrictions through Title 24 of the NYC Health Code, which goes further than state law in some categories — including bans on common species (such as ferrets) that are legal elsewhere in the state. Common pet reptiles (bearded dragons, leopard geckos, corn snakes, ball pythons, crested geckos) are legal at the state level, but NYC and other municipalities may regulate them further. Always verify both state and municipal rules; the DEC is the authoritative state-level reference.',
    citations: [
      {
        title: 'NY Environmental Conservation Law §11-0511 — Possession, transportation, and sale of wild animals',
        url: 'https://www.nysenate.gov/legislation/laws/ENV/11-0511',
      },
      {
        title: '6 NYCRR Part 175 — Possession and Sale of Wildlife',
        url: 'https://govt.westlaw.com/nycrr/Browse/Home/NewYork/NewYorkCodesRulesandRegulations?guid=I4ed9aa20b5a011dda0a4e17826ebc834',
      },
      {
        title: 'NYS DEC — Wildlife Permits',
        url: 'https://www.dec.ny.gov/permits/6383.html',
      },
      {
        title: 'NYC Health Code Article 161 — Animals',
        url: 'https://www.nyc.gov/site/doh/health/health-topics/animal-permits.page',
      },
      {
        title: 'NYS DEC — Native Reptile and Amphibian Information',
        url: 'https://www.dec.ny.gov/animals/7464.html',
      },
    ],
  },

  {
    stateCode: 'IL',
    stateName: 'Illinois',
    slug: 'illinois',
    generalPosture: 'restrictive',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'All venomous reptiles',
        reason:
          'Illinois Herptiles-Herps Act (510 ILCS 68) prohibits private possession of poisonous (venomous) reptiles; only properly licensed institutional holders are exempt.',
      },
      {
        name: 'Large constrictors and crocodilians for private possession',
        reason:
          'The Dangerous Animals Act (720 ILCS 585) prohibits possession of crocodilians and certain large constrictors as personal pets.',
      },
      {
        name: 'Native Illinois reptile species (without permit)',
        reason:
          'Native species are protected under the Herptiles-Herps Act (510 ILCS 68); commercial collection requires the IDNR Commercial Permit and is restricted by species and season.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Native Illinois reptiles (educational or scientific use)',
        permitRequired:
          'Illinois Department of Natural Resources (IDNR) Scientific Collector\'s Permit or Educational Permit.',
      },
      {
        name: 'Non-native reptiles regulated under the Dangerous Animals Act',
        permitRequired:
          'Only entities meeting the statutory exemption (e.g., USDA-licensed exhibitor, accredited zoo) may possess.',
      },
    ],
    permitRequiredFor: [
      'All native Illinois reptiles possessed for any purpose',
      'Any species classified as "dangerous" under 720 ILCS 585',
      'Commercial herp activities (sale, breeding for sale, exhibition)',
    ],
    agency: {
      name: 'Illinois Department of Natural Resources (IDNR)',
      url: 'https://dnr.illinois.gov/conservation/wildlifeillinois.html',
    },
    notes:
      'Illinois regulates reptile keeping through two statutes that work in concert: the Herptiles-Herps Act (510 ILCS 68), which governs native species and herp collection generally, and the Dangerous Animals Act (720 ILCS 585), which prohibits private possession of designated dangerous species. The combined effect is that venomous reptiles, crocodilians, and large constrictors are not legal as personal pets. Most common pet reptiles (bearded dragons, leopard geckos, ball pythons, corn snakes, crested geckos) are legal without a state permit. Chicago and Cook County have additional municipal restrictions — Chicago Municipal Code §7-12-051 restricts possession of certain reptiles within city limits even when state law allows them.',
    citations: [
      {
        title: 'Illinois Herptiles-Herps Act (510 ILCS 68)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2697&ChapterID=41',
      },
      {
        title: 'Illinois Dangerous Animals Act (720 ILCS 585)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=1971&ChapterID=53',
      },
      {
        title: 'IDNR — Permits and Licenses',
        url: 'https://dnr.illinois.gov/permits.html',
      },
      {
        title: 'IDNR — Wildlife Permits (Scientific Collector\'s Permit)',
        url: 'https://dnr.illinois.gov/permits/scientific.html',
      },
      {
        title: 'Chicago Municipal Code §7-12 — Animal Care and Control',
        url: 'https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2627921',
      },
    ],
  },

  {
    stateCode: 'PA',
    stateName: 'Pennsylvania',
    slug: 'pennsylvania',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Native Pennsylvania venomous snakes (timber rattlesnake, eastern massasauga, copperhead) for commercial collection',
        reason:
          'Pennsylvania Code Title 58 §75.1–75.4 regulates native reptiles and amphibians; timber rattlesnake and copperhead require an annual Venomous Snake Permit, and the eastern massasauga is fully protected (no possession permitted).',
      },
      {
        name: 'Endangered or threatened native species',
        reason:
          'Pennsylvania Fish and Boat Commission lists certain native reptiles (including the bog turtle and eastern massasauga) as endangered or threatened; possession is prohibited under 58 Pa. Code §75.1.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Native Pennsylvania reptiles (snakes, turtles, lizards)',
        permitRequired:
          'Pennsylvania Fish and Boat Commission (PFBC) Reptile and Amphibian Permit; daily and seasonal limits apply.',
      },
      {
        name: 'Native venomous snakes (timber rattlesnake, copperhead) for hobbyist take',
        permitRequired:
          'Annual Venomous Snake Permit (PFBC) plus the base Reptile and Amphibian Permit; eastern massasauga is fully protected and cannot be taken.',
      },
    ],
    permitRequiredFor: [
      'Any native Pennsylvania reptile possessed by hobbyists (Reptile and Amphibian Permit)',
      'Native venomous snakes (additional Venomous Snake Permit)',
      'Commercial activities (separate commercial permit)',
    ],
    agency: {
      name: 'Pennsylvania Fish and Boat Commission (PFBC)',
      url: 'https://www.fishandboat.com/Resource/Amphibians_Reptiles/Pages/AmphibianReptileRegulations.aspx',
    },
    notes:
      'Pennsylvania takes a moderate approach focused primarily on native species protection. Most commonly kept non-native pet reptiles (bearded dragons, leopard geckos, ball pythons, corn snakes, crested geckos) are legal without a state permit. Native species — including any wild-caught Pennsylvania turtle, snake, or lizard — require the PFBC Reptile and Amphibian Permit, with stricter rules for native venomous snakes. The eastern massasauga rattlesnake is fully protected as a state-endangered species and cannot be possessed. Several Pennsylvania municipalities (including Philadelphia) have additional restrictions on exotic animals; verify locally before acquiring a large constrictor or venomous reptile.',
    citations: [
      {
        title: 'Pennsylvania Code Title 58 Chapter 75 — Fishing',
        url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/058/chapter75/chap75toc.html',
      },
      {
        title: 'PFBC — Amphibian and Reptile Regulations',
        url: 'https://www.fishandboat.com/Resource/Amphibians_Reptiles/Pages/AmphibianReptileRegulations.aspx',
      },
      {
        title: 'PFBC — Permits (Reptile/Amphibian, Venomous Snake)',
        url: 'https://www.fishandboat.com/LicensePermitRegistration/Pages/default.aspx',
      },
      {
        title: 'PFBC — Threatened and Endangered Species',
        url: 'https://www.fishandboat.com/Resource/EndangeredSpecies/Pages/default.aspx',
      },
      {
        title: 'Pennsylvania Game Commission — Exotic Wildlife Permits (where game-regulated species overlap)',
        url: 'https://www.pgc.pa.gov/Wildlife/WildlifeRelatedDiseases/Pages/PermittedActivities.aspx',
      },
    ],
  },

  {
    stateCode: 'OH',
    stateName: 'Ohio',
    slug: 'ohio',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Venomous snakes (all non-native) and constrictors over 12 feet',
        reason:
          'Ohio Revised Code Chapter 935 — the Dangerous Wild Animal Act, enacted after the 2011 Zanesville incident — designates these species as "restricted snakes" requiring a permit; new private acquisition is generally prohibited.',
      },
      {
        name: 'Crocodilians (alligators, crocodiles, caimans)',
        reason:
          'Designated dangerous wild animals under ORC §935.01; private possession prohibited except for permit-holding facilities meeting strict requirements.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Restricted snakes (venomous and constrictors > 12 feet)',
        permitRequired:
          'Restricted Snake Possession Permit through the Ohio Department of Agriculture (ODA); legacy holders required to have registered by the statutory deadline.',
      },
      {
        name: 'Native Ohio reptiles',
        permitRequired:
          'Ohio Department of Natural Resources (ODNR) Wild Animal Permit for native species; commercial collection requires additional permits.',
      },
    ],
    permitRequiredFor: [
      'Restricted snakes (venomous + large constrictors) — ODA permit',
      'Dangerous wild animals (crocodilians, large constrictors) — ODA permit',
      'Native Ohio reptile species — ODNR Wild Animal Permit',
    ],
    agency: {
      name: 'Ohio Department of Agriculture (Dangerous Wild Animals); Ohio Department of Natural Resources (native species)',
      url: 'https://agri.ohio.gov/divisions/animal-health/dangerous-wild-animals',
    },
    notes:
      'Ohio\'s reptile law was substantially rewritten after the 2011 Zanesville exotic-animal incident. ORC Chapter 935 — the Dangerous Wild Animal Act — created the "restricted snake" category covering all venomous snakes and constrictors over 12 feet. Existing private owners had to register and obtain permits by 2014; new private acquisition is generally not permitted. Most common pet reptiles (bearded dragons, leopard geckos, corn snakes, ball pythons, crested geckos) remain legal without a state permit. Native Ohio reptiles require an ODNR Wild Animal Permit. Municipal ordinances (e.g., Columbus, Cleveland, Cincinnati) may impose further restrictions.',
    citations: [
      {
        title: 'Ohio Revised Code Chapter 935 — Dangerous Wild Animals and Restricted Snakes',
        url: 'https://codes.ohio.gov/ohio-revised-code/chapter-935',
      },
      {
        title: 'Ohio Department of Agriculture — Dangerous Wild Animals',
        url: 'https://agri.ohio.gov/divisions/animal-health/dangerous-wild-animals',
      },
      {
        title: 'Ohio Administrative Code 901:1-30 — Dangerous Wild Animals and Restricted Snakes',
        url: 'https://codes.ohio.gov/ohio-administrative-code/chapter-901:1-30',
      },
      {
        title: 'ODNR Division of Wildlife — Permits',
        url: 'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/division-wildlife/permit-information',
      },
      {
        title: 'ODNR — Ohio\'s Native Reptiles',
        url: 'https://ohiodnr.gov/discover-and-learn/plants-trees/reptiles-amphibians',
      },
    ],
  },

  {
    stateCode: 'GA',
    stateName: 'Georgia',
    slug: 'georgia',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Venomous reptiles (non-native)',
        reason:
          'Georgia Code §27-5-4 prohibits private possession of wild animals on the regulated list, which includes all non-native venomous reptiles.',
      },
      {
        name: 'Crocodilians (alligators, crocodiles, caimans)',
        reason:
          'Regulated under the Georgia Wild Animal Law (O.C.G.A. §27-5-4); requires a Wild Animal License, which is generally not issued to private hobbyists.',
      },
      {
        name: 'Tegus and large monitors',
        reason:
          'Designated invasive species under Georgia Department of Natural Resources (GA DNR) wildlife regulations; possession and sale are restricted following established breeding populations of Argentine black-and-white tegus in south Georgia.',
      },
      {
        name: 'Burmese python and other large constrictors',
        reason:
          'Regulated under O.C.G.A. §27-5-4 as wild animals; new acquisition restricted.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Wild animals listed in O.C.G.A. §27-5-4',
        permitRequired:
          'GA DNR Wild Animal License; generally limited to educational facilities, zoos, and properly permitted exhibitors.',
      },
      {
        name: 'Native Georgia reptiles',
        permitRequired:
          'GA DNR Scientific Collecting Permit for non-commercial collection; commercial collection requires a separate license.',
      },
    ],
    permitRequiredFor: [
      'All "wild animals" designated under O.C.G.A. §27-5-4 (includes venomous, crocodilians, large constrictors, tegus)',
      'Native Georgia reptiles for any purpose',
      'Commercial herp activities (sale, breeding, exhibition)',
    ],
    agency: {
      name: 'Georgia Department of Natural Resources — Wildlife Resources Division',
      url: 'https://georgiawildlife.com/regulations',
    },
    notes:
      'Georgia\'s Wild Animal Law (O.C.G.A. §27-5-4) regulates a broad list of species that includes venomous reptiles, crocodilians, large constrictors, and tegus. Wild Animal Licenses are available but generally limited to educational and zoological holders; private hobbyist permits for these species are uncommon. Most common pet reptiles (bearded dragons, leopard geckos, ball pythons, corn snakes, crested geckos) are legal without a state permit. Georgia DNR has also issued targeted invasive-species advisories for Argentine black-and-white tegus, which now have established breeding populations in south Georgia and are no longer freely possessable. Atlanta and other municipalities may have additional ordinances.',
    citations: [
      {
        title: 'Georgia Code Title 27 Chapter 5 — Wild Animals',
        url: 'https://law.justia.com/codes/georgia/title-27/chapter-5/',
      },
      {
        title: 'Georgia DNR — Wild Animal Regulations',
        url: 'https://georgiawildlife.com/regulations/wildanimals',
      },
      {
        title: 'Georgia DNR — License and Permit Information',
        url: 'https://georgiawildlife.com/permits',
      },
      {
        title: 'Georgia DNR — Tegu Information and Invasive Species Advisory',
        url: 'https://georgiawildlife.com/tegus',
      },
      {
        title: 'Georgia Administrative Rules 391-4-9 — Wild Animals (Wildlife Resources Division)',
        url: 'https://rules.sos.ga.gov/gac/391-4-9',
      },
    ],
  },

  {
    stateCode: 'NC',
    stateName: 'North Carolina',
    slug: 'north-carolina',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Native North Carolina venomous snakes (without permit)',
        reason:
          'North Carolina General Statute §14-417 ("Regulation of Reptiles") requires permits for possession of venomous reptiles, large constrictors, and crocodilians.',
      },
      {
        name: 'Crocodilians (alligators, crocodiles, caimans)',
        reason:
          'Regulated under NCGS §14-417 and §14-417.1; possession requires a permit issued by the local Animal Control or county health department.',
      },
      {
        name: 'Large constrictors capable of reaching adult length over 12 feet',
        reason:
          'Regulated under NCGS §14-417 as "reptiles" subject to mandatory permit and containment standards.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Venomous reptiles, large constrictors, and crocodilians',
        permitRequired:
          'Local permit issued at the county or municipal level under the authority granted by NCGS §14-417; the state does not centrally issue these permits.',
      },
      {
        name: 'Native North Carolina reptiles',
        permitRequired:
          'NC Wildlife Resources Commission (WRC) Captivity Permit; bag limits and seasonal restrictions apply.',
      },
    ],
    permitRequiredFor: [
      'Venomous reptiles (local permit required per NCGS §14-417)',
      'Large constrictors > 12 feet adult length',
      'Crocodilians (alligators, crocodiles, caimans)',
      'Native NC reptiles (WRC Captivity Permit)',
    ],
    agency: {
      name: 'North Carolina Wildlife Resources Commission (WRC) — native species; local Animal Control / county health — venomous and dangerous reptiles',
      url: 'https://www.ncwildlife.org/Licensing-and-Permits',
    },
    notes:
      'North Carolina is unusual in that the regulation of dangerous reptiles is delegated to local government rather than handled centrally. NCGS §14-417 requires a permit for venomous reptiles, large constrictors, and crocodilians, but the permits are issued at the county or municipal level — meaning that requirements, fees, and even practical availability vary substantially from one county to the next. Native species fall under the NC Wildlife Resources Commission and require a Captivity Permit. Most common pet reptiles (bearded dragons, leopard geckos, ball pythons, corn snakes, crested geckos) are legal without a state permit. Always check with both the WRC and your county Animal Control before acquiring a venomous or large-constrictor reptile.',
    citations: [
      {
        title: 'North Carolina General Statute §14-417 — Regulation of Reptiles',
        url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_14/GS_14-417.html',
      },
      {
        title: 'NCGS §14-417.1 — Local Government Authority over Reptiles',
        url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_14/GS_14-417.1.html',
      },
      {
        title: 'NC Wildlife Resources Commission — Licensing and Permits',
        url: 'https://www.ncwildlife.org/Licensing-and-Permits',
      },
      {
        title: 'NCWRC — Captivity License Information',
        url: 'https://www.ncwildlife.org/Licensing-and-Permits/Permits',
      },
      {
        title: 'NCWRC — Reptiles and Amphibians of North Carolina',
        url: 'https://www.ncwildlife.org/Learning/Species/Reptiles',
      },
    ],
  },

  {
    stateCode: 'MI',
    stateName: 'Michigan',
    slug: 'michigan',
    generalPosture: 'moderate',
    coverage: 'full',
    bannedSpecies: [
      {
        name: 'Large constrictors and crocodilians for private possession (without permit)',
        reason:
          'Michigan Compiled Laws §287.731 ("Large Carnivore Act") and the Michigan Department of Natural Resources Director\'s Orders restrict possession of dangerous reptiles; venomous reptiles and crocodilians require institutional licensing.',
      },
      {
        name: 'Native Michigan reptiles (without DNR permit)',
        reason:
          'Native turtles, snakes, and lizards are protected under MCL §324.43504 and the Wildlife Conservation Order; possession requires a Michigan DNR permit.',
      },
      {
        name: 'Eastern massasauga rattlesnake (native)',
        reason:
          'Federally threatened under the Endangered Species Act and state-protected in Michigan; possession is prohibited.',
      },
    ],
    restrictedSpecies: [
      {
        name: 'Native Michigan reptiles for hobbyist possession',
        permitRequired:
          'Michigan DNR Captive Wild Animal Order Permit or Scientific Collector\'s Permit, depending on intended use.',
      },
      {
        name: 'Venomous reptiles and crocodilians',
        permitRequired:
          'USDA exhibitor license + Michigan Department of Agriculture/DNR permitting; private hobbyist permits are not generally available.',
      },
    ],
    permitRequiredFor: [
      'All native Michigan reptiles for hobbyist or educational possession',
      'Venomous reptiles, crocodilians, and large constrictors (institutional only)',
      'Commercial herp activities',
    ],
    agency: {
      name: 'Michigan Department of Natural Resources (DNR)',
      url: 'https://www.michigan.gov/dnr/managing-resources/wildlife/captivewildlife',
    },
    notes:
      'Michigan regulates dangerous reptiles primarily through the Department of Natural Resources under MCL §324.43504 and the Wildlife Conservation Order. Most common pet reptiles (bearded dragons, leopard geckos, corn snakes, ball pythons, crested geckos) are legal without a state permit. Native Michigan species — including the federally threatened eastern massasauga rattlesnake — are protected and require DNR permitting. The Large Carnivore Act and related Director\'s Orders restrict large dangerous species. Municipalities (Detroit, Grand Rapids, Ann Arbor) may impose additional restrictions; verify locally for large constrictors or venomous species.',
    citations: [
      {
        title: 'Michigan Compiled Laws §324.43504 — Captive Wild Animals',
        url: 'http://www.legislature.mi.gov/(S(0))/mileg.aspx?page=getobject&objectname=mcl-324-43504',
      },
      {
        title: 'Michigan DNR — Captive Wildlife',
        url: 'https://www.michigan.gov/dnr/managing-resources/wildlife/captivewildlife',
      },
      {
        title: 'Michigan Wildlife Conservation Order (Director\'s Orders)',
        url: 'https://www.michigan.gov/dnr/about/laws',
      },
      {
        title: 'Michigan DNR — Permits and Licenses',
        url: 'https://www.michigan.gov/dnr/buy-and-apply/licenses',
      },
      {
        title: 'USFWS — Eastern Massasauga Rattlesnake Recovery (federally threatened, Michigan-native)',
        url: 'https://www.fws.gov/species/eastern-massasauga-sistrurus-catenatus',
      },
    ],
  },

  // ─── Framework-only states ────────────────────────────────────────────
  //
  // For these states, ONLY the general posture + agency + state code
  // link are exposed. Banned-species and restricted-species lists are
  // intentionally empty; the template renders a "Coverage in progress"
  // banner instead. Per QC-STANDARDS.md §1: we do not invent regulated-
  // species lists.

  {
    stateCode: 'AL',
    stateName: 'Alabama',
    slug: 'alabama',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Alabama Department of Conservation and Natural Resources — Wildlife and Freshwater Fisheries Division',
      url: 'https://www.outdooralabama.com/wildlife-section',
    },
    notes:
      'Coverage in progress. Alabama regulates native species through the Department of Conservation and Natural Resources; verify directly with the Wildlife and Freshwater Fisheries Division before acquiring any reptile in Alabama.',
    citations: [
      {
        title: 'Alabama Department of Conservation and Natural Resources — Wildlife Regulations',
        url: 'https://www.outdooralabama.com/wildlife-regulations',
      },
    ],
  },

  {
    stateCode: 'AK',
    stateName: 'Alaska',
    slug: 'alaska',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Alaska Department of Fish and Game',
      url: 'https://www.adfg.alaska.gov/index.cfm?adfg=permits.main',
    },
    notes:
      'Coverage in progress. Alaska operates under one of the strictest "clean list" frameworks in the United States — most reptile species are not on the Alaska Department of Fish and Game\'s "Clean List" of approved animals, meaning they are not legal to possess without a specific permit. Verify directly with ADFG before acquiring any reptile in Alaska.',
    citations: [
      {
        title: 'Alaska Department of Fish and Game — Permits',
        url: 'https://www.adfg.alaska.gov/index.cfm?adfg=permits.main',
      },
    ],
  },

  {
    stateCode: 'AZ',
    stateName: 'Arizona',
    slug: 'arizona',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Arizona Game and Fish Department',
      url: 'https://www.azgfd.com/regulations/',
    },
    notes:
      'Coverage in progress. Arizona regulates native and non-native reptiles through the Arizona Game and Fish Department; native species (including Gila monsters and several rattlesnake species) are strictly protected. Verify directly with AZGFD before acquiring any reptile in Arizona.',
    citations: [
      {
        title: 'Arizona Game and Fish Department — Regulations',
        url: 'https://www.azgfd.com/regulations/',
      },
    ],
  },

  {
    stateCode: 'AR',
    stateName: 'Arkansas',
    slug: 'arkansas',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Arkansas Game and Fish Commission',
      url: 'https://www.agfc.com/en/regulations/',
    },
    notes:
      'Coverage in progress. Arkansas regulates native species through the Arkansas Game and Fish Commission; verify directly with AGFC before acquiring any reptile in Arkansas.',
    citations: [
      {
        title: 'Arkansas Game and Fish Commission — Regulations',
        url: 'https://www.agfc.com/en/regulations/',
      },
    ],
  },

  {
    stateCode: 'CO',
    stateName: 'Colorado',
    slug: 'colorado',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Colorado Parks and Wildlife',
      url: 'https://cpw.state.co.us/learn/Pages/RulesRegs.aspx',
    },
    notes:
      'Coverage in progress. Colorado regulates wildlife through Colorado Parks and Wildlife and maintains restrictions on dangerous and native species. Verify directly with CPW before acquiring any reptile in Colorado.',
    citations: [
      {
        title: 'Colorado Parks and Wildlife — Rules and Regulations',
        url: 'https://cpw.state.co.us/learn/Pages/RulesRegs.aspx',
      },
    ],
  },

  {
    stateCode: 'CT',
    stateName: 'Connecticut',
    slug: 'connecticut',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Connecticut Department of Energy and Environmental Protection — Wildlife Division',
      url: 'https://portal.ct.gov/DEEP/Wildlife/Wildlife-in-Connecticut',
    },
    notes:
      'Coverage in progress. Connecticut maintains relatively restrictive rules on potentially dangerous wildlife. Verify directly with CT DEEP before acquiring any reptile in Connecticut.',
    citations: [
      {
        title: 'Connecticut DEEP — Wildlife Regulations',
        url: 'https://portal.ct.gov/DEEP/Wildlife/Regulations',
      },
    ],
  },

  {
    stateCode: 'DE',
    stateName: 'Delaware',
    slug: 'delaware',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Delaware Division of Fish and Wildlife',
      url: 'https://dnrec.delaware.gov/fish-wildlife/',
    },
    notes:
      'Coverage in progress. Delaware regulates wildlife through the Division of Fish and Wildlife within DNREC. Verify directly with the agency before acquiring any reptile in Delaware.',
    citations: [
      {
        title: 'Delaware DNREC — Fish and Wildlife',
        url: 'https://dnrec.delaware.gov/fish-wildlife/',
      },
    ],
  },

  {
    stateCode: 'HI',
    stateName: 'Hawaii',
    slug: 'hawaii',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Hawaii Department of Agriculture — Plant Industry Division',
      url: 'https://hdoa.hawaii.gov/pi/',
    },
    notes:
      'Coverage in progress. Hawaii has the strictest reptile-import and possession rules in the United States — designed to protect the islands\' unique native ecosystems from invasive species. Most reptiles are not legal to possess in Hawaii. Verify directly with the Hawaii Department of Agriculture before acquiring or importing any reptile.',
    citations: [
      {
        title: 'Hawaii Department of Agriculture — Plant Quarantine (controls reptile imports)',
        url: 'https://hdoa.hawaii.gov/pq/',
      },
    ],
  },

  {
    stateCode: 'ID',
    stateName: 'Idaho',
    slug: 'idaho',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Idaho Department of Fish and Game',
      url: 'https://idfg.idaho.gov/rules',
    },
    notes:
      'Coverage in progress. Idaho regulates wildlife through the Department of Fish and Game; verify directly with IDFG before acquiring any reptile in Idaho.',
    citations: [
      {
        title: 'Idaho Department of Fish and Game — Rules',
        url: 'https://idfg.idaho.gov/rules',
      },
    ],
  },

  {
    stateCode: 'IN',
    stateName: 'Indiana',
    slug: 'indiana',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Indiana Department of Natural Resources — Division of Fish and Wildlife',
      url: 'https://www.in.gov/dnr/fish-and-wildlife/',
    },
    notes:
      'Coverage in progress. Indiana regulates native species and dangerous animals through the Department of Natural Resources. Verify directly with IDNR before acquiring any reptile in Indiana.',
    citations: [
      {
        title: 'Indiana DNR — Fish and Wildlife',
        url: 'https://www.in.gov/dnr/fish-and-wildlife/',
      },
    ],
  },

  {
    stateCode: 'IA',
    stateName: 'Iowa',
    slug: 'iowa',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Iowa Department of Natural Resources',
      url: 'https://www.iowadnr.gov/About-DNR/About-Page/Rules-Regulations',
    },
    notes:
      'Coverage in progress. Iowa regulates dangerous wild animals and native species through the Department of Natural Resources. Verify directly with Iowa DNR before acquiring any reptile in Iowa.',
    citations: [
      {
        title: 'Iowa DNR — Rules and Regulations',
        url: 'https://www.iowadnr.gov/About-DNR/About-Page/Rules-Regulations',
      },
    ],
  },

  {
    stateCode: 'KS',
    stateName: 'Kansas',
    slug: 'kansas',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Kansas Department of Wildlife and Parks',
      url: 'https://ksoutdoors.com/Services/Regulations',
    },
    notes:
      'Coverage in progress. Kansas regulates dangerous wild animals and native species through the Department of Wildlife and Parks. Verify directly with KDWP before acquiring any reptile in Kansas.',
    citations: [
      {
        title: 'Kansas Department of Wildlife and Parks — Regulations',
        url: 'https://ksoutdoors.com/Services/Regulations',
      },
    ],
  },

  {
    stateCode: 'KY',
    stateName: 'Kentucky',
    slug: 'kentucky',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Kentucky Department of Fish and Wildlife Resources',
      url: 'https://fw.ky.gov/Wildlife/Pages/default.aspx',
    },
    notes:
      'Coverage in progress. Kentucky regulates dangerous wildlife through 301 KAR 2:082 and related administrative regulations. Verify directly with KDFWR before acquiring any reptile in Kentucky.',
    citations: [
      {
        title: 'Kentucky Department of Fish and Wildlife Resources — Wildlife',
        url: 'https://fw.ky.gov/Wildlife/Pages/default.aspx',
      },
    ],
  },

  {
    stateCode: 'LA',
    stateName: 'Louisiana',
    slug: 'louisiana',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Louisiana Department of Wildlife and Fisheries',
      url: 'https://www.wlf.louisiana.gov/page/rules-and-regulations',
    },
    notes:
      'Coverage in progress. Louisiana regulates large constrictors, venomous reptiles, and native species through the Department of Wildlife and Fisheries. Verify directly with LDWF before acquiring any reptile in Louisiana.',
    citations: [
      {
        title: 'Louisiana Department of Wildlife and Fisheries — Rules and Regulations',
        url: 'https://www.wlf.louisiana.gov/page/rules-and-regulations',
      },
    ],
  },

  {
    stateCode: 'ME',
    stateName: 'Maine',
    slug: 'maine',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Maine Department of Inland Fisheries and Wildlife',
      url: 'https://www.maine.gov/ifw/laws-rules/index.html',
    },
    notes:
      'Coverage in progress. Maine operates an "approved species" list framework — many reptiles require state permitting. Verify directly with Maine IF&W before acquiring any reptile in Maine.',
    citations: [
      {
        title: 'Maine Department of Inland Fisheries and Wildlife — Laws and Rules',
        url: 'https://www.maine.gov/ifw/laws-rules/index.html',
      },
    ],
  },

  {
    stateCode: 'MD',
    stateName: 'Maryland',
    slug: 'maryland',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Maryland Department of Natural Resources — Wildlife and Heritage Service',
      url: 'https://dnr.maryland.gov/wildlife/Pages/default.aspx',
    },
    notes:
      'Coverage in progress. Maryland regulates dangerous reptiles and native species through the Department of Natural Resources. Verify directly with Maryland DNR before acquiring any reptile in Maryland.',
    citations: [
      {
        title: 'Maryland DNR — Wildlife and Heritage Service',
        url: 'https://dnr.maryland.gov/wildlife/Pages/default.aspx',
      },
    ],
  },

  {
    stateCode: 'MA',
    stateName: 'Massachusetts',
    slug: 'massachusetts',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Massachusetts Division of Fisheries and Wildlife (MassWildlife)',
      url: 'https://www.mass.gov/orgs/division-of-fisheries-and-wildlife',
    },
    notes:
      'Coverage in progress. Massachusetts operates a strict approved-species list under 321 CMR 9.01; many common pet reptiles are restricted or require permits. Verify directly with MassWildlife before acquiring any reptile in Massachusetts.',
    citations: [
      {
        title: 'Massachusetts Division of Fisheries and Wildlife — Regulations',
        url: 'https://www.mass.gov/regulations/321-CMR-9-exemption-list',
      },
    ],
  },

  {
    stateCode: 'MN',
    stateName: 'Minnesota',
    slug: 'minnesota',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Minnesota Department of Natural Resources',
      url: 'https://www.dnr.state.mn.us/regulations.html',
    },
    notes:
      'Coverage in progress. Minnesota regulates dangerous wild animals under Minnesota Statute §346.155 and native species through the Department of Natural Resources. Verify directly with Minnesota DNR before acquiring any reptile in Minnesota.',
    citations: [
      {
        title: 'Minnesota DNR — Regulations',
        url: 'https://www.dnr.state.mn.us/regulations.html',
      },
    ],
  },

  {
    stateCode: 'MS',
    stateName: 'Mississippi',
    slug: 'mississippi',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Mississippi Department of Wildlife, Fisheries, and Parks',
      url: 'https://www.mdwfp.com/wildlife-hunting/',
    },
    notes:
      'Coverage in progress. Mississippi regulates dangerous wild animals under Mississippi Code §49-8 and native species through the Department of Wildlife, Fisheries, and Parks. Verify directly with MDWFP before acquiring any reptile in Mississippi.',
    citations: [
      {
        title: 'Mississippi Department of Wildlife, Fisheries, and Parks — Wildlife and Hunting',
        url: 'https://www.mdwfp.com/wildlife-hunting/',
      },
    ],
  },

  {
    stateCode: 'MO',
    stateName: 'Missouri',
    slug: 'missouri',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Missouri Department of Conservation',
      url: 'https://mdc.mo.gov/regulations',
    },
    notes:
      'Coverage in progress. Missouri regulates dangerous wild animals under Missouri Revised Statutes §578.023 and native species through the Department of Conservation. Verify directly with MDC before acquiring any reptile in Missouri.',
    citations: [
      {
        title: 'Missouri Department of Conservation — Regulations',
        url: 'https://mdc.mo.gov/regulations',
      },
    ],
  },

  {
    stateCode: 'MT',
    stateName: 'Montana',
    slug: 'montana',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Montana Fish, Wildlife and Parks',
      url: 'https://fwp.mt.gov/aboutfwp/regulations',
    },
    notes:
      'Coverage in progress. Montana regulates wildlife through Fish, Wildlife and Parks. Verify directly with Montana FWP before acquiring any reptile in Montana.',
    citations: [
      {
        title: 'Montana Fish, Wildlife and Parks — Regulations',
        url: 'https://fwp.mt.gov/aboutfwp/regulations',
      },
    ],
  },

  {
    stateCode: 'NE',
    stateName: 'Nebraska',
    slug: 'nebraska',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Nebraska Game and Parks Commission',
      url: 'https://outdoornebraska.gov/regulations/',
    },
    notes:
      'Coverage in progress. Nebraska regulates wildlife through the Game and Parks Commission. Verify directly with Nebraska Game and Parks before acquiring any reptile in Nebraska.',
    citations: [
      {
        title: 'Nebraska Game and Parks Commission — Regulations',
        url: 'https://outdoornebraska.gov/regulations/',
      },
    ],
  },

  {
    stateCode: 'NV',
    stateName: 'Nevada',
    slug: 'nevada',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Nevada Department of Wildlife',
      url: 'https://www.ndow.org/species/regulations/',
    },
    notes:
      'Coverage in progress. Nevada is among the more permissive states for reptile possession at the state level, though native species (including the desert tortoise) are strictly protected. Verify directly with NDOW before acquiring any reptile in Nevada.',
    citations: [
      {
        title: 'Nevada Department of Wildlife — Species Regulations',
        url: 'https://www.ndow.org/species/regulations/',
      },
    ],
  },

  {
    stateCode: 'NH',
    stateName: 'New Hampshire',
    slug: 'new-hampshire',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'New Hampshire Fish and Game Department',
      url: 'https://www.wildlife.nh.gov/wildlife-and-habitat/wildlife-laws-rules-and-policies',
    },
    notes:
      'Coverage in progress. New Hampshire operates a controlled-species framework — many reptiles require state permitting. Verify directly with NH Fish and Game before acquiring any reptile in New Hampshire.',
    citations: [
      {
        title: 'New Hampshire Fish and Game — Wildlife Laws, Rules and Policies',
        url: 'https://www.wildlife.nh.gov/wildlife-and-habitat/wildlife-laws-rules-and-policies',
      },
    ],
  },

  {
    stateCode: 'NJ',
    stateName: 'New Jersey',
    slug: 'new-jersey',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'New Jersey Division of Fish and Wildlife',
      url: 'https://www.nj.gov/dep/fgw/exoticpetregs.htm',
    },
    notes:
      'Coverage in progress. New Jersey operates a strict permit-based framework for exotic and native species under N.J.A.C. 7:25-4. Many common pet reptiles require an Exotic and Non-Game Permit. Verify directly with NJ Fish and Wildlife before acquiring any reptile in New Jersey.',
    citations: [
      {
        title: 'New Jersey Division of Fish and Wildlife — Exotic and Non-Game Species Regulations',
        url: 'https://www.nj.gov/dep/fgw/exoticpetregs.htm',
      },
    ],
  },

  {
    stateCode: 'NM',
    stateName: 'New Mexico',
    slug: 'new-mexico',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'New Mexico Department of Game and Fish',
      url: 'https://www.wildlife.state.nm.us/conservation/non-game-species/',
    },
    notes:
      'Coverage in progress. New Mexico regulates native species and dangerous reptiles through the Department of Game and Fish. Verify directly with NMDGF before acquiring any reptile in New Mexico.',
    citations: [
      {
        title: 'New Mexico Department of Game and Fish — Non-Game Species',
        url: 'https://www.wildlife.state.nm.us/conservation/non-game-species/',
      },
    ],
  },

  {
    stateCode: 'ND',
    stateName: 'North Dakota',
    slug: 'north-dakota',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'North Dakota Game and Fish Department',
      url: 'https://gf.nd.gov/regulations',
    },
    notes:
      'Coverage in progress. North Dakota is among the more permissive states at the state level. Verify directly with the Game and Fish Department before acquiring any reptile in North Dakota.',
    citations: [
      {
        title: 'North Dakota Game and Fish Department — Regulations',
        url: 'https://gf.nd.gov/regulations',
      },
    ],
  },

  {
    stateCode: 'OK',
    stateName: 'Oklahoma',
    slug: 'oklahoma',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Oklahoma Department of Wildlife Conservation',
      url: 'https://www.wildlifedepartment.com/hunting/regulations',
    },
    notes:
      'Coverage in progress. Oklahoma regulates dangerous wildlife under Title 29 of the Oklahoma Statutes and native species through the Department of Wildlife Conservation. Verify directly with ODWC before acquiring any reptile in Oklahoma.',
    citations: [
      {
        title: 'Oklahoma Department of Wildlife Conservation — Regulations',
        url: 'https://www.wildlifedepartment.com/hunting/regulations',
      },
    ],
  },

  {
    stateCode: 'OR',
    stateName: 'Oregon',
    slug: 'oregon',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Oregon Department of Fish and Wildlife',
      url: 'https://www.dfw.state.or.us/agency/regulations.asp',
    },
    notes:
      'Coverage in progress. Oregon operates a controlled-species framework under ORS Chapter 497 — many reptiles require permits and some are prohibited. Verify directly with ODFW before acquiring any reptile in Oregon.',
    citations: [
      {
        title: 'Oregon Department of Fish and Wildlife — Regulations',
        url: 'https://www.dfw.state.or.us/agency/regulations.asp',
      },
    ],
  },

  {
    stateCode: 'RI',
    stateName: 'Rhode Island',
    slug: 'rhode-island',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Rhode Island Department of Environmental Management — Division of Fish and Wildlife',
      url: 'https://dem.ri.gov/natural-resources-bureau/fish-wildlife',
    },
    notes:
      'Coverage in progress. Rhode Island regulates dangerous and exotic animals through DEM Fish and Wildlife. Verify directly with RI DEM before acquiring any reptile in Rhode Island.',
    citations: [
      {
        title: 'Rhode Island DEM — Fish and Wildlife',
        url: 'https://dem.ri.gov/natural-resources-bureau/fish-wildlife',
      },
    ],
  },

  {
    stateCode: 'SC',
    stateName: 'South Carolina',
    slug: 'south-carolina',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'South Carolina Department of Natural Resources',
      url: 'https://www.dnr.sc.gov/regulations.html',
    },
    notes:
      'Coverage in progress. South Carolina regulates dangerous reptiles and native species through the Department of Natural Resources. Verify directly with SCDNR before acquiring any reptile in South Carolina.',
    citations: [
      {
        title: 'South Carolina Department of Natural Resources — Regulations',
        url: 'https://www.dnr.sc.gov/regulations.html',
      },
    ],
  },

  {
    stateCode: 'SD',
    stateName: 'South Dakota',
    slug: 'south-dakota',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'South Dakota Game, Fish and Parks',
      url: 'https://gfp.sd.gov/rules/',
    },
    notes:
      'Coverage in progress. South Dakota is among the more permissive states at the state level. Verify directly with SD Game, Fish and Parks before acquiring any reptile in South Dakota.',
    citations: [
      {
        title: 'South Dakota Game, Fish and Parks — Rules',
        url: 'https://gfp.sd.gov/rules/',
      },
    ],
  },

  {
    stateCode: 'TN',
    stateName: 'Tennessee',
    slug: 'tennessee',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Tennessee Wildlife Resources Agency',
      url: 'https://www.tn.gov/twra/wildlife.html',
    },
    notes:
      'Coverage in progress. Tennessee classifies wildlife under T.C.A. §70-4 with multiple species classes; venomous reptiles and large constrictors are regulated. Verify directly with TWRA before acquiring any reptile in Tennessee.',
    citations: [
      {
        title: 'Tennessee Wildlife Resources Agency — Wildlife',
        url: 'https://www.tn.gov/twra/wildlife.html',
      },
    ],
  },

  {
    stateCode: 'UT',
    stateName: 'Utah',
    slug: 'utah',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Utah Division of Wildlife Resources',
      url: 'https://wildlife.utah.gov/rules-and-regulations.html',
    },
    notes:
      'Coverage in progress. Utah operates a controlled-species framework under Utah Administrative Code R657-3 — many reptiles are classified as controlled or prohibited. Verify directly with Utah DWR before acquiring any reptile in Utah.',
    citations: [
      {
        title: 'Utah Division of Wildlife Resources — Rules and Regulations',
        url: 'https://wildlife.utah.gov/rules-and-regulations.html',
      },
    ],
  },

  {
    stateCode: 'VT',
    stateName: 'Vermont',
    slug: 'vermont',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Vermont Fish and Wildlife Department',
      url: 'https://vtfishandwildlife.com/about-us/laws-and-regulations',
    },
    notes:
      'Coverage in progress. Vermont operates an "unrestricted" species list under 10 V.S.A. §4709 — reptiles not on the list cannot be possessed without a permit. Verify directly with VT Fish and Wildlife before acquiring any reptile in Vermont.',
    citations: [
      {
        title: 'Vermont Fish and Wildlife Department — Laws and Regulations',
        url: 'https://vtfishandwildlife.com/about-us/laws-and-regulations',
      },
    ],
  },

  {
    stateCode: 'VA',
    stateName: 'Virginia',
    slug: 'virginia',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Virginia Department of Wildlife Resources',
      url: 'https://dwr.virginia.gov/wildlife/regulations/',
    },
    notes:
      'Coverage in progress. Virginia regulates non-native and predatory wildlife through 4VAC15-30 and native species through the Department of Wildlife Resources. Verify directly with VDWR before acquiring any reptile in Virginia.',
    citations: [
      {
        title: 'Virginia Department of Wildlife Resources — Regulations',
        url: 'https://dwr.virginia.gov/wildlife/regulations/',
      },
    ],
  },

  {
    stateCode: 'WA',
    stateName: 'Washington',
    slug: 'washington',
    generalPosture: 'restrictive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Washington Department of Fish and Wildlife',
      url: 'https://wdfw.wa.gov/about/regulations',
    },
    notes:
      'Coverage in progress. Washington regulates dangerous wild animals under RCW 16.30 and native species through the Department of Fish and Wildlife. Verify directly with WDFW before acquiring any reptile in Washington.',
    citations: [
      {
        title: 'Washington Department of Fish and Wildlife — Regulations',
        url: 'https://wdfw.wa.gov/about/regulations',
      },
    ],
  },

  {
    stateCode: 'WV',
    stateName: 'West Virginia',
    slug: 'west-virginia',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'West Virginia Division of Natural Resources',
      url: 'https://wvdnr.gov/hunting/regulations/',
    },
    notes:
      'Coverage in progress. West Virginia regulates dangerous wild animals under W.Va. Code §19-34 and native species through the Division of Natural Resources. Verify directly with WV DNR before acquiring any reptile in West Virginia.',
    citations: [
      {
        title: 'West Virginia Division of Natural Resources — Regulations',
        url: 'https://wvdnr.gov/hunting/regulations/',
      },
    ],
  },

  {
    stateCode: 'WI',
    stateName: 'Wisconsin',
    slug: 'wisconsin',
    generalPosture: 'moderate',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Wisconsin Department of Natural Resources',
      url: 'https://dnr.wisconsin.gov/topic/hunt/regulations',
    },
    notes:
      'Coverage in progress. Wisconsin regulates harmful wild animals under Wis. Stat. §169 and native species through the Department of Natural Resources. Verify directly with Wisconsin DNR before acquiring any reptile in Wisconsin.',
    citations: [
      {
        title: 'Wisconsin Department of Natural Resources — Regulations',
        url: 'https://dnr.wisconsin.gov/topic/hunt/regulations',
      },
    ],
  },

  {
    stateCode: 'WY',
    stateName: 'Wyoming',
    slug: 'wyoming',
    generalPosture: 'permissive',
    coverage: 'framework',
    bannedSpecies: [],
    restrictedSpecies: [],
    permitRequiredFor: [],
    agency: {
      name: 'Wyoming Game and Fish Department',
      url: 'https://wgfd.wyo.gov/regulations',
    },
    notes:
      'Coverage in progress. Wyoming is among the more permissive states for reptile possession at the state level. Verify directly with Wyoming Game and Fish before acquiring any reptile in Wyoming.',
    citations: [
      {
        title: 'Wyoming Game and Fish Department — Regulations',
        url: 'https://wgfd.wyo.gov/regulations',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getStateLawBySlug(slug: string): ReptileLaw | undefined {
  return StateReptileLaws.find((s) => s.slug === slug)
}

export function getStateLawByCode(code: string): ReptileLaw | undefined {
  return StateReptileLaws.find((s) => s.stateCode === code.toUpperCase())
}

export function fullyCoveredStates(): ReptileLaw[] {
  return StateReptileLaws.filter((s) => s.coverage === 'full')
}

export function frameworkOnlyStates(): ReptileLaw[] {
  return StateReptileLaws.filter((s) => s.coverage === 'framework')
}

export function statesByPosture(posture: GeneralPosture): ReptileLaw[] {
  return StateReptileLaws.filter((s) => s.generalPosture === posture)
}

export function postureLabel(posture: GeneralPosture): string {
  switch (posture) {
    case 'permissive':
      return 'Permissive'
    case 'moderate':
      return 'Moderate'
    case 'restrictive':
      return 'Restrictive'
  }
}

export function postureColor(posture: GeneralPosture): {
  bg: string
  border: string
  text: string
} {
  switch (posture) {
    case 'permissive':
      return {
        bg: 'rgba(122,181,42,0.16)',
        border: 'rgba(122,181,42,0.45)',
        text: '#7AB52A',
      }
    case 'moderate':
      return {
        bg: 'rgba(245,178,42,0.16)',
        border: 'rgba(245,178,42,0.45)',
        text: '#E0A025',
      }
    case 'restrictive':
      return {
        bg: 'rgba(229,80,80,0.16)',
        border: 'rgba(229,80,80,0.45)',
        text: '#E55050',
      }
  }
}

/**
 * Five "common questions answered" for the per-state page. We surface
 * the same five common pet species across every state and instruct the
 * template to render an "according to [agency]" answer rather than a
 * categorical yes/no. The five species cover the ~80% of "is X legal in
 * [state]" search demand.
 */
export const COMMON_QUESTION_SPECIES = [
  'Ball python',
  'Bearded dragon',
  'Leopard gecko',
  'Corn snake',
  'Red-eared slider',
] as const

export function stateCount(): { full: number; framework: number; total: number } {
  const full = fullyCoveredStates().length
  const framework = frameworkOnlyStates().length
  return { full, framework, total: full + framework }
}
