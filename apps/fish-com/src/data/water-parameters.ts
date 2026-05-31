/**
 * Water-parameter reference data — Fish.com
 *
 * 8 core aquarium-chemistry parameters used by:
 *   - the /water-parameters reference hub
 *   - the /water-parameters/[slug] deep-dive route
 *
 * Editorial posture:
 *   - Reference content drawn from published aquatic-science and
 *     ornamental-fish literature; not veterinary advice.
 *   - Target ranges are typical hobby-literature bands for community
 *     freshwater, planted/soft-water, and reef/marine setups. Individual
 *     species tolerances vary; the per-page sensitivity section lists
 *     common edge cases.
 *   - Treatment / correction guidance is described in general terms.
 *     Specific reagent doses are not provided.
 *   - Citations point to standard published references the editorial
 *     team consults; they are not endorsements of a specific protocol or
 *     product.
 */

export type ParameterCategory =
  | 'Nitrogen'
  | 'pH / Buffer'
  | 'Hardness'
  | 'Physical'
  | 'Gas'

export type TestMethod =
  | 'Liquid reagent (titration)'
  | 'Liquid reagent (colorimetric)'
  | 'Test strip'
  | 'Digital meter'
  | 'Thermometer'

export interface ParameterRange {
  setup: 'Community freshwater' | 'Planted / soft-water freshwater' | 'Reef / marine'
  target: string
  notes: string
}

export interface WaterParameter {
  slug: string
  name: string
  symbol: string
  category: ParameterCategory
  unit: string
  /** Single-sentence definition for the hub table. */
  whatItMeasures: string
  /** Why it matters in 1–2 sentences. */
  whyItMatters: string
  ranges: ParameterRange[]
  affectedBy: string[]
  howToTest: { method: TestMethod; note: string }[]
  howToRaise: string[]
  howToLower: string[]
  speciesSensitivity: string[]
  commonMistakes: string[]
  relatedProblems: { label: string; href: string }[]
  citations: string[]
  /** Short label for the troubleshooting column in the hub table. */
  commonProblem: string
}

export const PARAMETERS: WaterParameter[] = [
  // ────────────────────────────────────────────────────────────────
  // 1. Ammonia
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'ammonia',
    name: 'Ammonia',
    symbol: 'NH3 / NH4+',
    category: 'Nitrogen',
    unit: 'ppm (mg/L)',
    whatItMeasures:
      'The combined concentration of un-ionized (NH3) and ionized (NH4+) ammonia from fish waste, decomposing food, and dead organic matter.',
    whyItMatters:
      'Ammonia is acutely toxic to fish at very low concentrations. The un-ionized fraction (NH3) crosses gill membranes and damages tissue, with toxicity rising sharply at higher pH and temperature.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '0 ppm',
        notes: 'Any detectable reading in a cycled tank indicates a husbandry or filtration problem.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '0 ppm',
        notes:
          'Plants preferentially consume ammonium and may keep readings low even before the biofilter is established — do not interpret 0 ppm in a new planted tank as a cycled tank.',
      },
      {
        setup: 'Reef / marine',
        target: '0 ppm',
        notes:
          'Marine systems often run at higher pH (8.1–8.4), which shifts more of the NH3/NH4+ equilibrium toward the toxic NH3 fraction.',
      },
    ],
    affectedBy: [
      'Overstocking and overfeeding',
      'Loss of biofilter bacteria (filter media replacement, prolonged power outage, antibiotics)',
      'Decaying plant matter or unnoticed dead fish',
      'Tap water containing chloramine that was not fully neutralized',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (colorimetric)',
        note:
          'Salicylate or Nessler-based liquid kits (e.g., API, Salifert, Seachem) are the standard hobby-grade approach.',
      },
      { method: 'Test strip', note: 'Convenient but generally less precise at the low end of the scale.' },
    ],
    howToRaise: [
      'Not applicable — ammonia is a waste product and the target is always 0 ppm in a stocked, cycled aquarium.',
    ],
    howToLower: [
      'Immediate partial water change (25–50 percent) with conditioned water of matching temperature.',
      'Identify and remove the source: uneaten food, dead fish, decaying plants.',
      'Verify and restore the biofilter — confirm media is moist and oxygenated, avoid simultaneous full media replacement.',
      'For ongoing protection during cycling, ammonia-binding conditioners that lock NH3 into a less toxic form are an interim measure documented in aquatic-vet references.',
    ],
    speciesSensitivity: [
      'Scaleless fish (loaches, eels, catfish) are commonly cited as more sensitive than scaled species.',
      'Eggs, fry, and convalescent fish are more vulnerable than healthy adults.',
      'High-pH marine and African Rift Lake systems experience more toxicity at any given total-ammonia reading.',
    ],
    commonMistakes: [
      'Replacing all biofilter media at once and assuming the new media is colonized.',
      'Adding fish to a tank that has not completed a full nitrogen cycle.',
      'Using untreated tap water that contains chloramine.',
      'Assuming a planted tank does not need cycling because plants absorb ammonium.',
    ],
    relatedProblems: [
      { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' },
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
      { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
    ],
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Francis-Floyd R, Watson C, Petty D, Pouder DB. Ammonia in Aquatic Systems. UF/IFAS Extension FA-16.',
      'World Aquatic Veterinary Medical Association (WAVMA) reference materials.',
    ],
    commonProblem: 'Ammonia spike during cycling or biofilter loss',
  },
  // ────────────────────────────────────────────────────────────────
  // 2. Nitrite
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'nitrite',
    name: 'Nitrite',
    symbol: 'NO2-',
    category: 'Nitrogen',
    unit: 'ppm (mg/L)',
    whatItMeasures:
      'The intermediate compound in the nitrogen cycle, produced when ammonia-oxidizing bacteria convert NH3/NH4+ to NO2-.',
    whyItMatters:
      'Nitrite binds hemoglobin in fish blood and prevents oxygen transport, a condition sometimes referenced in aquaculture literature as brown-blood disease. Fish can suffocate even when dissolved oxygen is adequate.',
    ranges: [
      { setup: 'Community freshwater', target: '0 ppm', notes: 'A cycled tank reads zero.' },
      {
        setup: 'Planted / soft-water freshwater',
        target: '0 ppm',
        notes: 'Plants do not preferentially consume nitrite; any reading reflects an incomplete cycle.',
      },
      {
        setup: 'Reef / marine',
        target: '0 ppm',
        notes:
          'Marine nitrite is less acutely toxic than freshwater nitrite (chloride competes for the same gill uptake pathway), but the target remains zero.',
      },
    ],
    affectedBy: [
      'A new or disrupted nitrogen cycle (the "nitrite spike" phase).',
      'Filter media replacement that removed nitrite-oxidizing bacteria (Nitrobacter / Nitrospira spp.).',
      'A recent ammonia spike that overwhelmed the second stage of the biofilter.',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (colorimetric)',
        note: 'Diazotization-based liquid kits are the standard hobby-grade approach.',
      },
      { method: 'Test strip', note: 'Useful for quick spot checks but generally less precise at trace levels.' },
    ],
    howToRaise: ['Not applicable — nitrite is an intermediate waste product and the target is always 0 ppm.'],
    howToLower: [
      'Partial water change (25–50 percent) to reduce the current concentration.',
      'Aquaculture references describe sodium chloride dosed to a tank during a nitrite spike as a temporary measure — chloride ions compete with nitrite at the gill uptake site. This is a freshwater technique only and is contraindicated for some scaleless species and soft-water specialists.',
      'Allow the nitrite-oxidizing bacterial colony to catch up; this is a defined phase of cycling.',
    ],
    speciesSensitivity: [
      'Many tropical freshwater fish are more sensitive to nitrite than to ammonia at the same concentration.',
      'Tetras, rasboras, and other soft-water species are commonly cited as nitrite-sensitive.',
      'Scaleless species (loaches, some catfish) often tolerate salt-based interventions poorly.',
    ],
    commonMistakes: [
      'Stocking heavily during the nitrite-spike phase.',
      'Performing a 100 percent water change and assuming the cycle was reset.',
      'Replacing biofilter media simultaneously with substrate or decor swaps.',
    ],
    relatedProblems: [
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
      { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' },
      { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
    ],
    citations: [
      'Yanong RPE. Use of Salt in Freshwater Aquaculture. UF/IFAS Extension FA-122.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Francis-Floyd R, Watson C. Nitrogen in the Recirculating Aquaculture System. UF/IFAS Extension.',
    ],
    commonProblem: 'Nitrite spike between ammonia-oxidizer and nitrite-oxidizer establishment',
  },
  // ────────────────────────────────────────────────────────────────
  // 3. Nitrate
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'nitrate',
    name: 'Nitrate',
    symbol: 'NO3-',
    category: 'Nitrogen',
    unit: 'ppm (mg/L)',
    whatItMeasures:
      'The end product of the aerobic nitrogen cycle, produced when nitrite-oxidizing bacteria convert NO2- to NO3-.',
    whyItMatters:
      'Nitrate is far less acutely toxic than ammonia or nitrite, but chronic elevated levels are associated with stress, suppressed immunity, and stunted growth in fishkeeping references. In marine systems, elevated nitrate also drives nuisance algae.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: 'Under 20–40 ppm',
        notes: 'Managed through routine water changes; 20–40 ppm is a typical hobby-literature band.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '5–25 ppm (managed)',
        notes:
          'Planted-tank methods (Walstad, EI-style dosing) maintain non-zero nitrate as a plant macronutrient. Discus and many wild-caught soft-water species are kept at the low end of this band.',
      },
      {
        setup: 'Reef / marine',
        target: 'Under 5–10 ppm (mixed reef); near 0 ppm (SPS-dominant)',
        notes:
          'Reef-husbandry references describe progressively tighter targets for stony-coral systems, sometimes paired with similarly low phosphate.',
      },
    ],
    affectedBy: [
      'Stocking density and feeding rate (the primary drivers).',
      'Frequency and volume of water changes.',
      'Live plant or refugium macroalgae uptake.',
      'Tap-water nitrate (some municipal supplies start above 10 ppm).',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (colorimetric)',
        note:
          'Cadmium-reduction-based liquid kits are the standard hobby approach. Following kit-shaking instructions closely is critical for accuracy.',
      },
      { method: 'Test strip', note: 'Useful for trend monitoring; less precise than liquid reagents.' },
    ],
    howToRaise: [
      'In planted freshwater tanks running low, EI-style or PPS-Pro dosing schedules describe potassium-nitrate (KNO3) supplementation per published planted-tank protocols.',
    ],
    howToLower: [
      'Routine water changes — typically 25–30 percent weekly for most community freshwater setups.',
      'Reduce feeding to no more than fish consume in two minutes, once or twice daily.',
      'Add or increase live plants (freshwater) or refugium macroalgae such as Chaetomorpha (marine).',
      'In reef systems, carbon-dosing (vodka, vinegar, biopellets) is one published technique to drive bacterial nitrate consumption.',
    ],
    speciesSensitivity: [
      'Discus, wild-caught soft-water tetras, and many shrimp species are commonly cited as nitrate-sensitive.',
      'Stony-coral (SPS) tanks tolerate far less nitrate than mixed-reef or LPS-dominant systems.',
      'Fry of most species are more sensitive than adults.',
    ],
    commonMistakes: [
      'Mistaking a low nitrate reading in a new tank for a cycled tank.',
      'Skipping water changes because nitrate "looks fine" while still rising week-over-week.',
      'Assuming nitrate near zero in a heavily stocked tank means the test kit is accurate — re-verify against a known standard.',
    ],
    relatedProblems: [
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
      { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
      { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
    ],
    citations: [
      'Walstad DL. Ecology of the Planted Aquarium. 3rd ed. Echinodorus Publishing, 2013.',
      'Sprung J, Delbeek JC. The Reef Aquarium, Vols. 1–3. Ricordea Publishing.',
      'Francis-Floyd R, Watson C. Nitrogen in the Recirculating Aquaculture System. UF/IFAS Extension.',
    ],
    commonProblem: 'Chronic creep from infrequent water changes',
  },
  // ────────────────────────────────────────────────────────────────
  // 4. pH
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'ph',
    name: 'pH',
    symbol: 'pH',
    category: 'pH / Buffer',
    unit: 'pH units (logarithmic)',
    whatItMeasures:
      'The negative logarithm of hydrogen-ion activity — a measure of how acidic or basic aquarium water is. A pH change of 1.0 represents a tenfold change in hydrogen-ion concentration.',
    whyItMatters:
      'pH governs the toxicity of ammonia, the solubility of metals, the success of breeding for many species, and the comfort range of fish adapted to specific native water chemistry. Stability is often more important than hitting a single ideal value.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '6.8–7.8',
        notes: 'Most farm-raised community species tolerate this band; stability matters more than precision.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '6.0–7.0',
        notes:
          'Soft-water specialists (discus, wild apistos, many tetras) and planted tanks dosing CO2 typically run below 7.0. CO2 injection cycles cause diurnal pH swings of 0.5–1.0 by design.',
      },
      {
        setup: 'Reef / marine',
        target: '8.1–8.4',
        notes: 'Tied to the carbonate system; deviations usually reflect KH/alkalinity or CO2 issues.',
      },
    ],
    affectedBy: [
      'Carbonate hardness (KH / alkalinity) — the dominant buffer in most aquariums.',
      'Dissolved CO2 — adding CO2 lowers pH; off-gassing raises it.',
      'Tank substrate and decor (crushed coral, aragonite, and limestone raise pH; driftwood and peat lower it).',
      'Tap-water source (well water and softened water vary widely).',
    ],
    howToTest: [
      { method: 'Liquid reagent (colorimetric)', note: 'Bromothymol-blue and similar pH kits are the hobby standard.' },
      {
        method: 'Digital meter',
        note: 'Calibrated pH meters give the most precise reading and are standard in marine and CO2-injected planted tanks.',
      },
      { method: 'Test strip', note: 'Convenient but generally lower precision.' },
    ],
    howToRaise: [
      'Increase carbonate hardness (KH) — the underlying buffer — with crushed coral, aragonite, or sodium-bicarbonate dosing per published protocols.',
      'Increase aeration to off-gas dissolved CO2.',
      'Use a remineralization mix designed for African Rift Lake or marine systems.',
    ],
    howToLower: [
      'Inject CO2 (planted-tank method, with surface aeration paired in).',
      'Filter through botanical material — peat, catappa leaves, alder cones — for tannic, soft-water aesthetics.',
      'Dilute tank water with reverse-osmosis (RO) or RO/DI water to lower KH, then remineralize to the desired band.',
    ],
    speciesSensitivity: [
      'Discus, wild apistos, and many South American soft-water specialists thrive below pH 7.0.',
      'African Rift Lake cichlids (Malawi, Tanganyika) require hard, alkaline conditions in the 7.8–8.6 band.',
      'Saltwater fish and corals are adapted to a narrow alkaline band — sudden drops below 7.8 are stressful.',
    ],
    commonMistakes: [
      'Chasing a "perfect" pH value with daily reagent doses, which destabilizes the system.',
      'Using pH-Up / pH-Down products without addressing the underlying KH.',
      'Acclimating fish too quickly between water sources with very different pH.',
      'Assuming a stable wrong pH is worse than a fluctuating "right" pH — for most species, the opposite is true.',
    ],
    relatedProblems: [
      { label: 'Aquarium Water Chemistry (overview)', href: '/setup/water-chemistry-guide' },
      { label: 'CO2 Calculator', href: '/tools/co2-calculator' },
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
    ],
    citations: [
      'Boyd CE. Water Quality in Ponds for Aquaculture. Auburn University, 1990.',
      'Walstad DL. Ecology of the Planted Aquarium. 3rd ed. Echinodorus Publishing, 2013.',
      'Spotte S. Captive Seawater Fishes: Science and Technology. Wiley-Interscience, 1992.',
    ],
    commonProblem: 'pH swings driven by low KH or unbalanced CO2',
  },
  // ────────────────────────────────────────────────────────────────
  // 5. GH (General Hardness)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'general-hardness-gh',
    name: 'General Hardness (GH)',
    symbol: 'GH',
    category: 'Hardness',
    unit: 'dGH (German degrees) or ppm as CaCO3',
    whatItMeasures:
      'The total dissolved divalent mineral content of water — predominantly calcium (Ca2+) and magnesium (Mg2+) ions. Reported in German degrees (dGH) or ppm as calcium carbonate equivalent.',
    whyItMatters:
      'GH determines whether water is "soft" or "hard," drives shrimp shell formation and plant nutrient uptake, and is often the trigger that allows or blocks breeding in many fish species. GH and KH are independent measurements.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '4–12 dGH (approx. 70–215 ppm)',
        notes: 'Most farm-raised community species are tolerant within this range.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '2–8 dGH for soft-water species; 4–8 dGH for many planted tanks',
        notes:
          'Caridina shrimp (Crystal Red, Taiwan Bee) require very low GH, often 4–6 dGH with specific Ca:Mg ratios; Neocaridina (Cherry) tolerate higher.',
      },
      {
        setup: 'Reef / marine',
        target: 'Not the primary metric — calcium 380–450 ppm, magnesium 1250–1350 ppm tracked individually',
        notes:
          'Reef husbandry tracks calcium, magnesium, and alkalinity separately rather than as a single GH value, because corals are sinks for specific ions.',
      },
    ],
    affectedBy: [
      'Tap-water source (well water, softened water, and municipal water vary widely).',
      'Crushed coral, aragonite, or other carbonate substrates dissolving over time.',
      'RO/DI dilution (drops GH).',
      'Remineralization salts designed for shrimp, planted tanks, or African Rift Lake setups.',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (titration)',
        note: 'Drop-count titration kits (e.g., API GH/KH) — count drops until the color shifts from orange/red to green.',
      },
      { method: 'Test strip', note: 'Convenient but generally lower precision.' },
      { method: 'Digital meter', note: 'TDS meters give a related but not identical reading; not a direct GH substitute.' },
    ],
    howToRaise: [
      'Add a remineralization salt blend designed for the target setup (planted, shrimp, African Rift, marine).',
      'Use crushed coral or aragonite in the filter or substrate for slow dissolution.',
      'Switch part of the water change volume to a harder source.',
    ],
    howToLower: [
      'Dilute with reverse-osmosis (RO) or RO/DI water on water changes.',
      'Remove carbonate substrates (crushed coral, aragonite, limestone rock).',
      'Peat filtration provides a small, slow softening effect along with tannin release.',
    ],
    speciesSensitivity: [
      'Caridina shrimp (Crystal Red, Taiwan Bee) require very low, tightly controlled GH.',
      'Discus, wild-caught soft-water tetras, and rams thrive at low GH for breeding.',
      'African Rift Lake cichlids and livebearers (guppies, mollies, platies) prefer harder water.',
      'Marine fish and corals require specific mineral concentrations tracked individually.',
    ],
    commonMistakes: [
      'Confusing GH and KH — they measure different ions and can change independently.',
      'Using a TDS meter as a GH substitute.',
      'Adjusting GH without considering the Ca:Mg ratio (matters for shrimp and planted tanks).',
      'Buying expensive remineralization products before confirming the tap-water baseline.',
    ],
    relatedProblems: [
      { label: 'Aquarium Water Chemistry (overview)', href: '/setup/water-chemistry-guide' },
      { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
      { label: 'Cherry Shrimp Care', href: '/species/cherry-shrimp' },
    ],
    citations: [
      'Walstad DL. Ecology of the Planted Aquarium. 3rd ed. Echinodorus Publishing, 2013.',
      'Boyd CE. Water Quality in Ponds for Aquaculture. Auburn University, 1990.',
      'Tropica Aquarium Plants — published planted-tank water-chemistry guides.',
    ],
    commonProblem: 'Mismatch between tap-water GH and target species requirements',
  },
  // ────────────────────────────────────────────────────────────────
  // 6. KH (Carbonate Hardness / Alkalinity)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'carbonate-hardness-kh',
    name: 'Carbonate Hardness (KH)',
    symbol: 'KH / Alkalinity',
    category: 'pH / Buffer',
    unit: 'dKH or meq/L (marine) or ppm as CaCO3',
    whatItMeasures:
      'The buffering capacity of water — the concentration of carbonate (CO3 2-) and bicarbonate (HCO3-) ions available to neutralize acid and resist pH change. In marine contexts this is referenced as alkalinity (Alk).',
    whyItMatters:
      'KH is the safety net under pH. Low KH allows sudden pH crashes that can kill fish overnight. In reef systems, alkalinity is consumed by coral skeleton formation and is one of the three core parameters (with calcium and magnesium) tracked daily by experienced reefkeepers.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '3–8 dKH (approx. 54–143 ppm)',
        notes: 'Below 3 dKH the system loses buffer capacity and pH instability follows.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '1–4 dKH (for CO2-injected) to 3–8 dKH (low-tech)',
        notes:
          'CO2-injected tanks run low-KH water because CO2 already drives pH; soft-water specialists tolerate KH down to 1 dKH with careful management.',
      },
      {
        setup: 'Reef / marine',
        target: '7–11 dKH (approx. 2.5–4.0 meq/L)',
        notes:
          'Stony-coral skeleton formation consumes alkalinity continuously; depletion below 7 dKH is a red flag in SPS-dominant systems.',
      },
    ],
    affectedBy: [
      'Tap-water source — soft water sources can start at <1 dKH.',
      'Crushed coral, aragonite, and limestone gradually raising KH.',
      'Coral and coralline-algae consumption in marine systems.',
      'CO2 injection — does not consume KH, but interacts with it to drive pH.',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (titration)',
        note: 'Drop-count titration kits (API GH/KH, Salifert, Hanna) are the hobby standard.',
      },
      {
        method: 'Digital meter',
        note: 'Hanna and similar colorimeters give a precise alkalinity reading and are common in advanced reef systems.',
      },
      { method: 'Test strip', note: 'Useful for trend monitoring.' },
    ],
    howToRaise: [
      'Sodium-bicarbonate (baking soda) dosing per published freshwater protocols.',
      'Crushed coral, aragonite, or coral skeletons in the filter or substrate for slow dissolution.',
      'In marine systems, two-part alkalinity supplements, kalkwasser, or calcium reactors per published reef protocols.',
    ],
    howToLower: [
      'Dilute with reverse-osmosis (RO) or RO/DI water on water changes.',
      'Remove carbonate substrates and decor.',
      'Peat filtration provides a modest softening effect alongside tannin release.',
    ],
    speciesSensitivity: [
      'CO2-injected planted tanks with hobbyist drop checkers depend on a stable low-KH reference.',
      'Reef SPS tanks are sensitive to alkalinity swings of more than 1 dKH per day.',
      'African Rift Lake cichlids require sustained high KH alongside high pH.',
    ],
    commonMistakes: [
      'Treating pH instability with pH adjusters instead of correcting the underlying KH.',
      'Reading KH only once and assuming it is constant — KH drifts as carbonates are consumed or substrates dissolve.',
      'Dosing two-part alkalinity in marine systems without simultaneously testing and dosing calcium.',
    ],
    relatedProblems: [
      { label: 'Aquarium Water Chemistry (overview)', href: '/setup/water-chemistry-guide' },
      { label: 'CO2 Calculator', href: '/tools/co2-calculator' },
      { label: 'Saltwater Tank Setup', href: '/setup/saltwater-tank-setup' },
    ],
    citations: [
      'Holmes-Farley R. Chemistry and the Aquarium series. Reefkeeping / Advanced Aquarist archives.',
      'Boyd CE. Water Quality in Ponds for Aquaculture. Auburn University, 1990.',
      'Spotte S. Captive Seawater Fishes: Science and Technology. Wiley-Interscience, 1992.',
    ],
    commonProblem: 'pH crash from depleted carbonate buffer',
  },
  // ────────────────────────────────────────────────────────────────
  // 7. Temperature
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'temperature',
    name: 'Temperature',
    symbol: 'T',
    category: 'Physical',
    unit: '°F / °C',
    whatItMeasures:
      'The thermal energy of aquarium water, controlling fish metabolic rate, immune function, oxygen solubility, and chemical-reaction speeds.',
    whyItMatters:
      'Sudden temperature swings suppress fish immunity and trigger disease outbreaks. Warmer water holds less dissolved oxygen and accelerates ammonia toxicity. Stability is more important than precision within a species-appropriate band.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '74–80 °F (23–27 °C)',
        notes: 'Typical tropical community range. Goldfish, white cloud minnows, and some danios are kept cooler.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '72–78 °F (22–26 °C)',
        notes:
          'Slightly cooler at the low end favors plant growth and CO2 solubility. Discus and rams run at 82–86 °F (28–30 °C).',
      },
      {
        setup: 'Reef / marine',
        target: '76–80 °F (24–27 °C)',
        notes:
          'Tighter than freshwater because corals and many reef invertebrates have narrower thermal tolerance windows.',
      },
    ],
    affectedBy: [
      'Heater output and accuracy.',
      'Ambient room temperature and HVAC cycling.',
      'Aquarium lighting heat — particularly older T5HO and metal-halide rigs.',
      'Power outages.',
    ],
    howToTest: [
      {
        method: 'Thermometer',
        note:
          'A separate glass, digital, or infrared thermometer used independently of the heater is essential — heater dials drift and fail.',
      },
      { method: 'Digital meter', note: 'Calibrated digital thermometers are standard in reef and discus husbandry.' },
    ],
    howToRaise: [
      'Set the heater to the target temperature, then verify with a separate thermometer.',
      'Use a heater wattage matched to tank volume per published heater guides.',
      'Cover open-top tanks to reduce evaporative cooling.',
    ],
    howToLower: [
      'Increase surface agitation and run a fan across the water surface (evaporative cooling).',
      'Float a sealed bottle of frozen water in the tank for short-term relief during heat waves.',
      'Reduce or shift the lighting photoperiod to cooler parts of the day.',
      'For sustained tropical-room scenarios, aquarium chillers are the published long-term solution.',
    ],
    speciesSensitivity: [
      'Goldfish, white cloud minnows, hillstream loaches, and many danios are coldwater species kept below 72 °F.',
      'Discus, rams, and many wild-caught soft-water species need warm 82–86 °F water.',
      'Reef corals — particularly SPS — show stress within 2–3 °F of their established baseline.',
    ],
    commonMistakes: [
      'Relying on the heater dial without an independent thermometer.',
      'Choosing an undersized heater that runs constantly and burns out faster.',
      'Mixing coldwater and tropical species in the same tank.',
      'Acclimating fish too quickly between water of different temperatures.',
    ],
    relatedProblems: [
      { label: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator' },
      { label: 'Ich Treatment Guide', href: '/health/ich-treatment' },
      { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' },
    ],
    citations: [
      'Boyd CE. Water Quality in Ponds for Aquaculture. Auburn University, 1990.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Sprung J, Delbeek JC. The Reef Aquarium, Vols. 1–3. Ricordea Publishing.',
    ],
    commonProblem: 'Heater failure or undersizing causing diurnal swings',
  },
  // ────────────────────────────────────────────────────────────────
  // 8. Dissolved Oxygen
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'dissolved-oxygen',
    name: 'Dissolved Oxygen',
    symbol: 'DO',
    category: 'Gas',
    unit: 'ppm (mg/L) or percent saturation',
    whatItMeasures:
      'The concentration of molecular oxygen (O2) dissolved in the water column, available for fish respiration and aerobic biofilter function.',
    whyItMatters:
      'Low dissolved oxygen suffocates fish, stalls the biofilter, and is a frequent contributor to summer fish kills in ponds and overstocked tropical tanks. DO is rarely tested by hobbyists, but it is a leading cause of unexplained morning mortalities.',
    ranges: [
      {
        setup: 'Community freshwater',
        target: '6–8 ppm (above 80% saturation)',
        notes: 'Most community fish behave normally above 5 ppm; below 3 ppm, surface gasping appears.',
      },
      {
        setup: 'Planted / soft-water freshwater',
        target: '6–8 ppm with surface agitation paired to CO2 injection',
        notes:
          'Heavily planted tanks can swing from oversaturation at the end of photoperiod to dangerous lows pre-dawn — surface agitation balances this.',
      },
      {
        setup: 'Reef / marine',
        target: 'Above 6 ppm (above 90% saturation)',
        notes:
          'Reef systems typically run near saturation thanks to skimmer airflow and turbulent flow patterns.',
      },
    ],
    affectedBy: [
      'Temperature — warmer water holds less oxygen (cited extensively in pond / aquaculture references).',
      'Surface agitation and circulation (the primary determinant of gas exchange).',
      'Stocking density and night-time fish + plant respiration.',
      'Heavy planting with a CO2-injected photoperiod.',
    ],
    howToTest: [
      {
        method: 'Liquid reagent (titration)',
        note:
          'Winkler-method liquid kits are the standard for accuracy; less common in the hobby than in pond and aquaculture testing.',
      },
      {
        method: 'Digital meter',
        note: 'Optical and galvanic DO probes are used in advanced reef, koi-pond, and aquaculture settings.',
      },
    ],
    howToRaise: [
      'Increase surface agitation — air stones, powerheads aimed at the surface, or a hang-on-back filter output that breaks the surface.',
      'Add a wavemaker or stronger circulation pump to break up dead zones.',
      'Reduce temperature if it is at the top of the species-appropriate band.',
      'Reduce stocking density or feeding if both are elevated.',
    ],
    howToLower: [
      'Not applicable in normal husbandry — higher DO is essentially always better. Excess CO2 injection in planted tanks can transiently displace oxygen and is addressed by pairing CO2 with strong surface agitation.',
    ],
    speciesSensitivity: [
      'Active swimmers (rainbowfish, danios, hillstream loaches, mid-water schooling fish) are commonly cited as DO-sensitive.',
      'Bettas and labyrinth fish breathe atmospheric air and tolerate lower DO, but their tankmates may not.',
      'Reef corals depend on continuous high DO for tissue health.',
    ],
    commonMistakes: [
      'Sealing a tank lid completely without providing surface agitation.',
      'Running CO2 injection without paired surface agitation.',
      'Overstocking a low-flow tank and assuming visible activity equals adequate oxygen.',
      'Ignoring early-morning surface gasping as a one-off rather than a DO depletion signal.',
    ],
    relatedProblems: [
      { label: 'Aquarium Water Chemistry (overview)', href: '/setup/water-chemistry-guide' },
      { label: 'Pond Guide', href: '/setup/pond-guide' },
      { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
    ],
    citations: [
      'Boyd CE, Tucker CS. Pond Aquaculture Water Quality Management. Springer, 1998.',
      'Francis-Floyd R. Dissolved Oxygen for Fish Production. UF/IFAS Extension FA-27.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
    ],
    commonProblem: 'Pre-dawn DO crash from night-time respiration in heavily stocked or planted tanks',
  },
]

export function getParameterBySlug(slug: string): WaterParameter | undefined {
  return PARAMETERS.find((p) => p.slug === slug)
}

export function getRelatedParameters(slug: string, n: number): WaterParameter[] {
  const current = getParameterBySlug(slug)
  if (!current) return []
  return PARAMETERS.filter((p) => p.slug !== slug && p.category === current.category).slice(0, n)
}
