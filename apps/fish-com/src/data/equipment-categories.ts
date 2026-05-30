/**
 * Equipment category catalog for Fish.com.
 *
 * Drives the programmatic /equipment/[slug] buyer-guide pages and the
 * /equipment hub. Each entry is an educational category overview that explains
 * HOW to choose a category of equipment, then funnels readers to the
 * matching /reviews/best-* pages where specific products are ranked.
 *
 * These pages are SEPARATE from the /reviews/best-* pages — those rank
 * individual products; these explain the category. The two link to each
 * other: /equipment/aquarium-filters → /reviews/best-aquarium-filters.
 *
 * Price ranges reflect current retailer averages (Amazon, Petco, Bulk Reef
 * Supply) at time of publication, not specific promises.
 */

export interface EquipmentTypeTradeoff {
  type: string
  bestFor: string
  drawbacks: string
}

export interface EquipmentPriceTier {
  tier: string
  range: string
  summary: string
}

export interface EquipmentFurtherReading {
  label: string
  href: string
}

export interface EquipmentFaq {
  question: string
  answer: string
}

export interface EquipmentCategory {
  slug: string
  categoryName: string
  /** 1–2 sentence definition. */
  whatItIs: string
  /** Bullet list — why this category of gear matters to tank health. */
  whyItMatters: string[]
  /** Sub-types within the category with bestFor + drawbacks. */
  typesAndTradeoffs: EquipmentTypeTradeoff[]
  /** Decision criteria — bullet list. */
  howToChoose: string[]
  /** Common buyer mistakes — bullet list. */
  commonMistakes: string[]
  /** Price tiers (budget / mid / premium). */
  priceRanges: EquipmentPriceTier[]
  /** Links back into existing /reviews/best-* pages and related guides. */
  recommendedFurtherReading: EquipmentFurtherReading[]
  /** FAQs surfaced as schema + accordion. */
  faqs: EquipmentFaq[]
  /** Internal note on what conversion this page drives. 1 sentence. */
  affiliateAngle: string
}

export const EquipmentCategories: EquipmentCategory[] = [
  // ─── Filters ────────────────────────────────────────────────────────────
  {
    slug: 'aquarium-filters',
    categoryName: 'Aquarium Filters',
    whatItIs:
      'An aquarium filter is the life-support system of the tank — it houses the beneficial bacteria that convert toxic ammonia and nitrite into nitrate while removing particulate waste. The filter, not the heater or the light, is the single most important piece of equipment in any aquarium.',
    whyItMatters: [
      'The filter is where roughly 80–90% of the tank biological filtration capacity lives — far more than the substrate or decor surfaces.',
      'Undersized or wrong-type filtration causes most beginner tank crashes, fish loss, and stalled cycles.',
      'Filter media volume — not flow rate — predicts how much bioload the tank can sustainably support.',
      'The correct filter for a 10-gallon shrimp tank is not the correct filter for a 75-gallon community; matching type to use case is more important than brand.',
    ],
    typesAndTradeoffs: [
      {
        type: 'Hang-on-back (HOB)',
        bestFor:
          '10–75 gallon community tanks. Easy weekly maintenance, good biological capacity, low cost.',
        drawbacks:
          'Visible on the back of the tank. Noisy if water level drops. Smaller models use proprietary cartridges that lock you into recurring purchases.',
      },
      {
        type: 'Canister',
        bestFor:
          '50+ gallon tanks, planted tanks, and high-bioload setups. Superior biological volume, near-silent operation, longer cleaning intervals (3–6 months).',
        drawbacks:
          '2–3× the cost of an equivalent HOB. Setup is more involved. Cleaning day requires disconnecting hoses and is a 30-minute job.',
      },
      {
        type: 'Sponge (air-driven)',
        bestFor:
          'Nano tanks under 20 gallons, shrimp tanks (no intake risk), breeding setups with fry, hospital/quarantine tanks.',
        drawbacks:
          'Requires a separate air pump. Limited mechanical filtration — particulates stay in the water column. Not appropriate as the sole filter on tanks above ~30 gallons.',
      },
      {
        type: 'Sump',
        bestFor:
          '75+ gallon freshwater or any saltwater reef setup. Maximum biological volume, hides heaters and dosing equipment below the tank, adds water volume to the system.',
        drawbacks:
          'Requires a drilled tank or overflow box, a sump tank, and a return pump. Higher complexity, higher cost, and a real flood risk if installed incorrectly.',
      },
      {
        type: 'Internal',
        bestFor:
          'Small tanks (under 20 gallons), turtle tanks where above-water equipment is impractical, and shallow tanks that cannot accommodate a HOB.',
        drawbacks:
          'Takes up display space inside the tank. Smaller media volume than a same-class HOB. Limited adjustability.',
      },
    ],
    howToChoose: [
      'Size by bioload, not by tank volume alone. Heavily stocked goldfish tanks need 2× the filter rating; lightly stocked planted tanks need less.',
      'Look for refillable media baskets over proprietary cartridges — proprietary cartridges add ~$60/year in recurring spend.',
      'Aim for filter turnover of 4–6× tank volume per hour for community freshwater, 8–10× for saltwater, and 10–20× for reef tanks.',
      'For shrimp or fry tanks, sponge filters are the only safe option — every other intake will suck in inhabitants.',
      'Choose a filter rated one size up from your tank size. Manufacturer ratings assume optimistic stocking.',
    ],
    commonMistakes: [
      'Buying the cheapest filter to save money, then having to upgrade six months later when fish die from undersized filtration.',
      'Replacing all the media at once when cleaning. The beneficial bacteria live on the media — replace one cartridge at a time, spaced weeks apart.',
      'Rinsing media in tap water. Chlorine kills the bacterial colony. Always rinse in old tank water during a water change.',
      'Running filters without enough biological media (BioMax, ceramic rings, sponge). Carbon and floss are mechanical/chemical; they do not host the cycle.',
      'Ignoring the impeller. HOB and canister impellers need cleaning every 3–4 months or flow drops 30–50%.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$15–$45',
        summary:
          'Sponge filters and small HOBs for tanks under 30 gallons. Adequate for shrimp and lightly stocked nano setups.',
      },
      {
        tier: 'Mid-range',
        range: '$45–$120',
        summary:
          'Larger HOBs (AquaClear, Tidal) with refillable media baskets. The sweet spot for most 20–75 gallon community tanks.',
      },
      {
        tier: 'Premium',
        range: '$120–$400',
        summary:
          'Canister filters (Fluval, Eheim, Oase) and entry-level sump setups. Required for 75+ gallon, planted, or saltwater systems.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Aquarium Filters (HOB, canister, sponge ranked)', href: '/reviews/best-aquarium-filters' },
      { label: 'Best Canister Filters compared', href: '/reviews/best-canister-filters' },
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
      { label: 'Tank Setup Guide', href: '/setup' },
    ],
    faqs: [
      {
        question: 'Do I need a filter on my aquarium?',
        answer:
          'Yes. Aquariums are closed systems and fish waste rapidly accumulates as toxic ammonia without a filter housing the beneficial bacteria that convert it. The only common exception is a heavily planted Walstad-method tank, which uses plants as a biological filter — but even then, gentle water movement is required.',
      },
      {
        question: 'How big a filter do I need for my tank size?',
        answer:
          'A common starting rule is filter turnover of 4–6× tank volume per hour for community freshwater, 8–10× for saltwater, and 10–20× for reef. Choose a filter rated one size up from your tank size (e.g. a "75 gallon" filter for a 55 gallon tank) — manufacturer ratings assume optimistic stocking levels.',
      },
      {
        question: 'How often should I clean my aquarium filter?',
        answer:
          'HOB filters: rinse media monthly in old tank water. Canister filters: full clean every 3–6 months. Sponge filters: squeeze monthly in tank water. Never use tap water — chlorine kills the beneficial bacteria the cycle depends on.',
      },
      {
        question: 'Are canister filters worth the extra cost over HOB filters?',
        answer:
          'For tanks over 50 gallons, planted tanks, or any saltwater setup — yes. Canisters offer 3–5× the biological media volume, run near-silently, and need cleaning much less often. For tanks under 50 gallons with light bioload, a refillable HOB like the AquaClear performs comparably at a fraction of the cost.',
      },
      {
        question: 'Can sponge filters be the only filter on a larger tank?',
        answer:
          'Generally no — sponge filters lack mechanical filtration and have limited biological volume. They work well as supplemental filtration on larger tanks, or as the sole filter on dedicated shrimp tanks and fry tanks under ~30 gallons where their gentle flow and intake-safety are required features.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks via the linked /reviews/best-aquarium-filters and /reviews/best-canister-filters product pages, which carry the actual buy buttons.',
  },

  // ─── Heaters ────────────────────────────────────────────────────────────
  {
    slug: 'aquarium-heaters',
    categoryName: 'Aquarium Heaters',
    whatItIs:
      'An aquarium heater maintains stable tropical water temperature — typically 76–80°F for community freshwater and 78–82°F for saltwater. Temperature stability matters more than the absolute number, and heater failure (either stuck-on or stuck-off) is one of the most common single-point causes of full-tank loss.',
    whyItMatters: [
      'Most tropical fish tolerate temperature swings of 2–3°F poorly — chronic ich outbreaks track to fluctuating heaters more often than to introduced disease.',
      'A stuck-on heater can cook an entire tank in 12 hours; a stuck-off heater drops a 75-gallon tank to room temperature in a day.',
      'Cheap heater thermostats commonly read 2–4°F off label. The number on the dial is not the actual tank temperature.',
      'Heater redundancy (two smaller heaters instead of one large one) protects against single-point failure and is standard practice on tanks above 40 gallons.',
    ],
    typesAndTradeoffs: [
      {
        type: 'Submersible glass',
        bestFor:
          'Most freshwater community tanks 10–75 gallons. Affordable, accurate when from a reputable brand (Eheim Jager, Fluval E), easy to replace.',
        drawbacks:
          'Glass can shatter if exposed to air while running. Lower-tier models drift 3–4°F off label. Lifespan typically 3–5 years.',
      },
      {
        type: 'Titanium / shatterproof',
        bestFor:
          'Saltwater reef tanks, large freshwater systems, and tanks with rambunctious fish (oscars, large cichlids) that can break glass.',
        drawbacks:
          '2–4× the cost of glass. Most require an external controller for accurate temperature regulation.',
      },
      {
        type: 'Inline (canister-attached)',
        bestFor:
          'Planted tanks where in-tank equipment is undesirable, and any sump setup. Hidden from view, stable temperature, no in-tank footprint.',
        drawbacks:
          'Requires a canister filter or sump with the right hose diameter. More expensive and harder to service mid-cycle.',
      },
      {
        type: 'Heating cable / mat',
        bestFor:
          'Specialty applications — under-substrate heating for some planted-tank methodologies, or chiller-controlled reef systems.',
        drawbacks:
          'Niche use case. Most modern planted-tank guidance does not require substrate heating. Limited heat output per dollar.',
      },
    ],
    howToChoose: [
      'Size at 3–5 watts per gallon for rooms at 65–72°F. Cooler rooms need more wattage; tanks in 76°F rooms barely need a heater at all.',
      'For tanks above 40 gallons, use two smaller heaters on opposite ends rather than one large unit — redundancy plus better thermal distribution.',
      'Verify with an independent thermometer. Treat the heater dial as approximate; trust a separate digital thermometer for the actual reading.',
      'Look for adjustable thermostats — preset "tropical" heaters typically run hotter than labeled and offer no fine control.',
      'For valuable livestock (reef, breeding, expensive cichlids), pair the heater with an external controller (Inkbird ITC-308) that cuts power if temperature drifts.',
    ],
    commonMistakes: [
      'Trusting the dial. Verify temperature with a separate digital thermometer; cheap heaters routinely read 2–4°F off.',
      'Running one oversized heater instead of two smaller ones. A single stuck-on 300W heater can cook a 55-gallon tank in hours.',
      'Skipping the heater on saltwater because "reef tanks have lights" — light heat is not stable heat, and overnight drops are damaging.',
      'Plugging the heater into the same outlet as a return pump on a switched circuit. Unplugging the pump kills the heater too.',
      'Removing a glass heater from water while powered. Thermal shock from contact with cool air commonly shatters the glass tube.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$15–$30',
        summary:
          'Generic preset heaters for nano tanks. Acceptable for hardy fish like guppies and platies; not recommended for tanks over 30 gallons.',
      },
      {
        tier: 'Mid-range',
        range: '$30–$80',
        summary:
          'Eheim Jager, Fluval E-series, Aqueon Pro. The reliability sweet spot — accurate thermostats, multi-year lifespans.',
      },
      {
        tier: 'Premium',
        range: '$80–$250',
        summary:
          'Titanium heaters with external controllers (Finnex HMA, BRS controllers). Required for reef tanks and recommended for any high-value livestock.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Aquarium Heaters (Eheim, Fluval, Aqueon ranked)', href: '/reviews/best-aquarium-heaters' },
      { label: 'Best Water Test Kits — pair with temperature monitoring', href: '/reviews/best-water-test-kits' },
      { label: 'New Tank Syndrome (temperature swings as a trigger)', href: '/health/new-tank-syndrome' },
    ],
    faqs: [
      {
        question: 'How many watts of heater do I need for my tank?',
        answer:
          'A general guideline is 3–5 watts per gallon if your tank is in a 65–72°F room. A 55-gallon tank in a typical home needs roughly 200–250W total — which can be one 250W heater or, preferably, two 125W heaters for redundancy.',
      },
      {
        question: 'Should I use one heater or two?',
        answer:
          'For tanks above 40 gallons, two smaller heaters on opposite ends is standard practice. It distributes heat more evenly and protects against single-point failure — if one heater sticks off, the other holds the tank; if one sticks on, the tank only gets to 50% of the runaway temperature.',
      },
      {
        question: 'Is the temperature dial on my heater accurate?',
        answer:
          'Often not. Cheap heaters routinely read 2–4°F off label, and even reputable brands drift over time. Always verify the actual tank temperature with an independent digital thermometer and adjust the dial to match the thermometer, not the printed scale.',
      },
      {
        question: 'How long do aquarium heaters last?',
        answer:
          'Glass submersible heaters typically last 3–5 years before the thermostat starts drifting. Titanium heaters with external controllers can last 7–10+ years. Failure mode is usually a stuck thermostat — either stuck-on (overheating) or stuck-off (no heat), both equally damaging.',
      },
      {
        question: 'Why is my heater not keeping the tank warm enough?',
        answer:
          'Most common causes: undersized for the tank, room temperature significantly below 70°F, heater thermostat reading high (so it shuts off before the tank is warm), or the heater is buried in substrate where its sensor reads ambient gravel temperature.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks via the /reviews/best-aquarium-heaters page, which carries product buy buttons and brand-specific recommendations.',
  },

  // ─── Lighting ───────────────────────────────────────────────────────────
  {
    slug: 'aquarium-lighting',
    categoryName: 'Aquarium Lighting',
    whatItIs:
      'Aquarium lighting drives photosynthesis in plants and corals, supports fish circadian rhythm, and renders the tank visually. The correct light is dictated by what lives in the tank: planted freshwater, reef, and fish-only-with-live-rock (FOWLR) systems each have different PAR, spectrum, and photoperiod requirements.',
    whyItMatters: [
      'Wrong-spectrum lighting causes algae blooms in fish-only tanks and stunted growth in planted tanks — the same light cannot serve both.',
      'Reef corals require specific PAR (photosynthetically active radiation) levels by species. Too little and corals brown out; too much and they bleach.',
      'Photoperiod (daily hours on) controls algae far more than fertilizer dosing does. Long photoperiods on under-planted tanks are the primary algae trigger.',
      'LED has effectively replaced fluorescent and metal halide for new builds — better efficiency, longer life, programmable, and no annual bulb replacement.',
    ],
    typesAndTradeoffs: [
      {
        type: 'Low-light planted LED',
        bestFor:
          'Anubias, java fern, cryptocoryne, mosses, low-tech planted tanks without CO2. PAR around 30–50 µmol at substrate.',
        drawbacks:
          'Insufficient for demanding stem plants or carpet species like dwarf hairgrass. Will not support coral.',
      },
      {
        type: 'High-light planted LED',
        bestFor:
          'High-tech planted tanks running CO2 injection. Carpeting plants, red stems, dense aquascapes. PAR 80–150 µmol at substrate.',
        drawbacks:
          'Algae explosion risk without matching CO2 and fertilizer dosing. Requires understanding of the planted-tank "triangle" of light, CO2, and nutrients.',
      },
      {
        type: 'Reef LED (full-spectrum)',
        bestFor:
          'Mixed-coral reef tanks. Programmable channels for blue, white, UV, and violet. Strong PAR (150–400+ µmol depending on coral mix).',
        drawbacks:
          'Significant upfront cost ($200–$1500). Requires acclimation periods and gradual PAR ramp-up to avoid coral bleaching.',
      },
      {
        type: 'FOWLR / fish-only LED',
        bestFor:
          'Fish-only saltwater tanks with live rock but no coral. Color rendering and circadian rhythm support — coral-grade output not required.',
        drawbacks:
          'Excess intensity or wrong spectrum on fish-only tanks just feeds algae on the rock. Less light is more.',
      },
      {
        type: 'Stock hood lights',
        bestFor:
          'Display-only freshwater tanks with no live plants — bettas, fancy goldfish, low-stock community tanks.',
        drawbacks:
          'Insufficient for plants. Often poor color rendering. Many bundled fluorescent bulbs drift in spectrum over 6–12 months.',
      },
    ],
    howToChoose: [
      'Match the light to what you keep, not to the tank. A reef light on a goldfish tank just grows algae; a planted-tank light on a reef tank kills the corals.',
      'For planted tanks, start with a programmable LED so you can ramp intensity and adjust photoperiod — algae problems are far easier to solve when you can dim the light.',
      'For reef, look for PAR data published by the manufacturer or independent reviewers — wattage and lumens are not meaningful proxies.',
      'Photoperiod: planted tanks usually thrive on 6–8 hours daily; reef tanks 8–10 hours; fish-only 8–10 hours. Long photoperiods do not help plants and reliably grow algae.',
      'Mount height matters. A 24" light hung 12" above the water delivers very different PAR than the same light sitting on the rim.',
    ],
    commonMistakes: [
      'Running 12+ hour photoperiods. Most algae problems in planted tanks resolve by cutting the light back to 6–7 hours.',
      'Buying a reef-grade light for a freshwater tank because it "looks bright." Spectrum and PAR are dialed for corals; freshwater plants do worse under it.',
      'Skipping a timer. Manual on/off introduces inconsistent photoperiods that disrupt plant growth cycles and algae management.',
      'Confusing watts and PAR. A 150W LED can deliver more or less usable plant/coral light than a 75W LED depending on optics — only PAR readings tell you which.',
      'Adding CO2 to a low-light tank and expecting growth, or removing CO2 from a high-light tank and expecting it to keep up. The three-leg triangle (light, CO2, nutrients) has to be balanced together.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$30–$120',
        summary:
          'Entry-level LEDs (NICREW, Hygger) for low-light planted tanks and FOWLR. Acceptable for anubias, java fern, fish-only setups.',
      },
      {
        tier: 'Mid-range',
        range: '$120–$400',
        summary:
          'Fluval Plant 3.0, Finnex Planted+ 24/7, AI Prime — programmable, controllable, suitable for most high-tech planted tanks and entry-level reef.',
      },
      {
        tier: 'Premium',
        range: '$400–$1500+',
        summary:
          'Radion XR-series, Kessil A-series, ATI Straton — flagship reef and aquascape lighting. Required for SPS-dominant reef tanks and competitive aquascapes.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Aquarium Lighting (planted, reef, FOWLR ranked)', href: '/reviews/best-aquarium-lighting' },
      { label: 'Best Planted-Tank Fertilizers (pair with high-light setups)', href: '/reviews/best-planted-tank-fertilizers' },
      { label: 'Best Nano Tanks (light-bundled all-in-ones)', href: '/reviews/best-nano-tanks' },
    ],
    faqs: [
      {
        question: 'How many hours a day should I run my aquarium light?',
        answer:
          'Planted tanks generally do best at 6–8 hours daily. Reef tanks: 8–10 hours including blue-channel ramp-up and ramp-down. Fish-only tanks: 8–10 hours for viewing. Photoperiods longer than 10 hours reliably trigger algae and rarely benefit plants or coral.',
      },
      {
        question: 'Do I need a special light for a planted tank?',
        answer:
          'For low-light plants (anubias, java fern, mosses) a basic LED works. For demanding stem plants, carpets, or red plants you need a high-output planted LED — and almost certainly CO2 injection to keep up with the demand the light creates.',
      },
      {
        question: 'Can I use a freshwater light on a saltwater tank?',
        answer:
          'For fish-only saltwater (FOWLR), usually yes — it just needs to render colors well. For coral, no: corals need specific spectrum (heavy blue, violet, UV) and PAR levels that planted-tank lights cannot deliver.',
      },
      {
        question: 'What is PAR and why does it matter for corals?',
        answer:
          'PAR (Photosynthetically Active Radiation) measures the light wavelengths corals and plants actually use for photosynthesis. Manufacturer lumen and watt ratings do not predict PAR — two lights with identical wattage can deliver wildly different PAR at the substrate. Reputable reef-light manufacturers publish PAR-vs-depth curves; rely on those.',
      },
      {
        question: 'My tank has algae — is my light too strong?',
        answer:
          'Usually a combination of too long a photoperiod, too high an intensity for the plant load, and excess nutrients in the water column. The first lever is photoperiod — cut to 6 hours and see if the algae recedes before changing anything else.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks via the /reviews/best-aquarium-lighting page (planted + reef picks) and cross-sells fertilizer purchases via /reviews/best-planted-tank-fertilizers.',
  },

  // ─── Substrates ─────────────────────────────────────────────────────────
  {
    slug: 'aquarium-substrates',
    categoryName: 'Aquarium Substrates',
    whatItIs:
      'Substrate is the layer of material that covers the tank bottom — gravel, sand, or specialized aquasoil. It serves three jobs: biological filtration surface area, plant root anchoring and nutrition, and the aesthetic foundation of the aquascape.',
    whyItMatters: [
      'Substrate choice is largely irreversible. Changing substrate on an established tank requires tearing down the aquascape and disrupting the biological filter.',
      'Inert gravel and sand provide structure but no plant nutrition; nutrient-rich aquasoils feed plants for 1–3 years but also lower pH and KH.',
      'Substrate particle size dictates which bottom-dwelling species can live with it: cory catfish need fine sand, plecos tolerate gravel, and shrimp prefer smaller particle sizes.',
      'Color and grain size shape how dark or bright the tank reads visually — dark substrates make fish colors pop and are standard practice in display aquascapes.',
    ],
    typesAndTradeoffs: [
      {
        type: 'Inert gravel',
        bestFor:
          'General freshwater community tanks, cichlid tanks, low-tech planted tanks with root-feeding plants supplemented by root tabs.',
        drawbacks:
          'No plant nutrition. Larger gravel traps detritus that requires regular vacuuming. Some "pretty" gravels are coated with sealant that wears off.',
      },
      {
        type: 'Pool-filter / play sand',
        bestFor:
          'Cory catfish, loaches, freshwater stingrays, biotope tanks. Soft on barbels, supports natural foraging behavior.',
        drawbacks:
          'Can compact and develop anaerobic dead zones in deep beds. Disturbs easily under filter outflow. Fine sand fouls some filter impellers.',
      },
      {
        type: 'Aquasoil (ADA, Fluval Stratum, UNS)',
        bestFor:
          'High-tech planted tanks. Pre-loaded with nutrients, lowers pH and KH to ranges most plants prefer, excellent root anchoring.',
        drawbacks:
          'Ammonia leach during the first 2–6 weeks requires aggressive water changes. Replaced every 1–3 years as nutrients deplete. Most expensive option per pound.',
      },
      {
        type: 'Aragonite / crushed coral',
        bestFor:
          'African Rift Lake cichlid tanks (Malawi, Tanganyika), brackish tanks, and saltwater FOWLR setups. Buffers pH upward and adds calcium.',
        drawbacks:
          'Inappropriate for most community freshwater — will push pH above 8.0 where many fish do poorly. Limited plant compatibility.',
      },
      {
        type: 'Bare bottom',
        bestFor:
          'Breeding tanks, hospital and quarantine tanks, fry grow-out, frag tanks in reef setups. Easy to clean, no detritus traps.',
        drawbacks:
          'Visually utilitarian. Reduces biological filtration surface area. Does not support rooted plants or sand-sifting species.',
      },
    ],
    howToChoose: [
      'Pick substrate based on the species you intend to keep first. Cory cats and sand are non-negotiable; cichlid pH preferences dictate aragonite or inert.',
      'For planted tanks: low-tech without CO2 → inert gravel + root tabs. High-tech with CO2 → aquasoil. Capped-soil setups (aquasoil under inert gravel) are a middle ground.',
      'Substrate depth: 1.5–2.5 inches is the standard range. Less and root-feeding plants struggle; more risks anaerobic pockets in fine sand without burrowing inhabitants.',
      'Test new gravel for carbonate content with a drop of vinegar before adding it — bubbling means it will buffer pH upward, which is fine for cichlids but wrong for everything else.',
      'For a darker, more natural look (preferred by most fish and visually), choose dark-grey or black substrates rather than bright neon-colored gravels.',
    ],
    commonMistakes: [
      'Adding aquasoil to an established stocked tank. The ammonia leach during the first weeks routinely causes mass fish loss.',
      'Using deep beds of fine sand (3+ inches) without burrowing inhabitants. Anaerobic pockets accumulate hydrogen sulfide, which is toxic when released.',
      'Choosing painted or coated gravels for cichlid tanks where digging exposes the underlying material and the sealant chips off.',
      'Vacuuming aquasoil. Vigorous gravel vacuuming pulverizes aquasoil into mud — only do light surface skimming on planted-tank substrates.',
      'Combining root-tab fertilizers with aquasoil and then puzzling over algae — heavy nutrient excess is the cause.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$0.30–$0.80 per pound',
        summary:
          'Pool-filter sand, play sand, and bulk inert aquarium gravel. Adequate for community tanks and cichlid setups.',
      },
      {
        tier: 'Mid-range',
        range: '$1–$3 per pound',
        summary:
          'Branded aquarium gravels (CaribSea), aragonite for cichlid and saltwater tanks, planted-tank capping gravels.',
      },
      {
        tier: 'Premium',
        range: '$3–$8 per pound',
        summary:
          'Aquasoils (ADA Amazonia, Fluval Stratum, UNS Controsoil). Required for high-tech planted aquascapes; consumed and replaced every 1–3 years.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Planted-Tank Fertilizers (pair with inert substrate)', href: '/reviews/best-planted-tank-fertilizers' },
      { label: 'Best Aquarium Lighting (planted-tank options)', href: '/reviews/best-aquarium-lighting' },
      { label: 'Tank Setup Guide', href: '/setup' },
      { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
    ],
    faqs: [
      {
        question: 'Sand vs gravel — which is better for a freshwater aquarium?',
        answer:
          'It depends on the inhabitants. Cory catfish, loaches, and many community fish do better on sand. Plecos, larger cichlids, and most beginner-friendly community fish do well on gravel. Gravel traps detritus that requires vacuuming; sand stays cleaner on the surface but can develop anaerobic spots if deep and undisturbed.',
      },
      {
        question: 'Do I need aquasoil for a planted tank?',
        answer:
          'For high-tech planted tanks with CO2 and demanding plants — yes, aquasoil dramatically simplifies success. For low-tech tanks with anubias, java fern, and crypts, inert gravel plus root tabs works fine and costs a fraction of the price.',
      },
      {
        question: 'How deep should aquarium substrate be?',
        answer:
          '1.5–2.5 inches is the standard range. For root-feeding plants like swords and crypts, lean toward the deeper end. For sand-sifting cichlids and a low-maintenance look, lean shallower. Deeper than 3 inches of fine sand without burrowing inhabitants invites anaerobic problems.',
      },
      {
        question: 'Can I change substrate on an established tank?',
        answer:
          'Yes, but it is disruptive — the substrate hosts a portion of your biological filter and the change typically requires removing fish temporarily and re-establishing parameters. If you must change, transfer in stages over 2–3 weeks, replacing one third at a time.',
      },
      {
        question: 'Does substrate affect water chemistry?',
        answer:
          'Yes. Aragonite and crushed coral buffer pH upward and add calcium hardness — great for African cichlids, wrong for tetras. Aquasoils typically pull pH and KH downward. Inert gravel and pool-filter sand are neutral and leave water chemistry to your tap and your dosing.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks for aquasoil, sand, and gravel via product cross-links from the lighting and fertilizer review pages — substrate purchases bundle naturally with planted-tank gear.',
  },

  // ─── Test Kits ──────────────────────────────────────────────────────────
  {
    slug: 'aquarium-test-kits',
    categoryName: 'Aquarium Test Kits',
    whatItIs:
      'A water test kit measures the chemical parameters that dictate whether fish live or die — ammonia, nitrite, nitrate, pH, KH, GH, phosphate, and in saltwater also calcium, alkalinity, and magnesium. Liquid reagent kits are the editorial standard; test strips are convenient but routinely read 1–2 levels off actual values.',
    whyItMatters: [
      'Ammonia and nitrite at any detectable level are toxic to fish. The difference between 0 and 0.5 ppm is the difference between healthy fish and dying fish — a measurement tool that cannot resolve that difference is not useful.',
      'A cycle cannot be confirmed without testing. "The tank looks fine" is not a substitute for ammonia 0 / nitrite 0 / nitrate measurable readings.',
      'Reef and high-tech planted tanks demand parameter precision (alkalinity ±0.5 dKH, calcium ±20 ppm) that test strips and basic kits cannot deliver.',
      'Test kit reagents expire — kits older than 18–24 months read low on ammonia and nitrite. The bottle date matters as much as the brand.',
    ],
    typesAndTradeoffs: [
      {
        type: 'API liquid master kit',
        bestFor:
          'Most freshwater hobbyists. Covers ammonia, nitrite, nitrate, pH, high-range pH. Accurate enough for cycle confirmation and routine monitoring.',
        drawbacks:
          'Color matching is subjective. Nitrate test requires vigorous bottle shaking. Reagents expire roughly 24 months after opening.',
      },
      {
        type: 'Salifert',
        bestFor:
          'Saltwater reef hobbyists. Best-in-class reagent kits for alkalinity, calcium, magnesium, phosphate, and nitrate. Tighter resolution than API.',
        drawbacks:
          'Higher cost per test. Procedures are more involved (multiple drops, swirling, timing).',
      },
      {
        type: 'Hanna Checker / photometer',
        bestFor:
          'Reef hobbyists prioritizing alkalinity precision and competitive aquascapers monitoring phosphate. Removes color-matching subjectivity.',
        drawbacks:
          'Significant upfront cost ($45–$70 per parameter handheld; $400+ for multi-parameter photometers). Reagent sachets are recurring spend.',
      },
      {
        type: 'Test strips',
        bestFor:
          'Quick directional read on already-cycled tanks. Travel testing. Sub-optimal as primary tools.',
        drawbacks:
          'Routinely read 1–2 color blocks off actual values for ammonia, nitrate, and pH. Should not be used to confirm a cycle or diagnose a fish-loss event.',
      },
      {
        type: 'Digital probes (pH, conductivity)',
        bestFor:
          'Continuous monitoring on high-value reef and planted setups. Pair with controllers like Apex or GHL for automated alarms.',
        drawbacks:
          'Probes drift and need calibration every 1–3 months. Replacement probes are $40–$100 every 1–2 years.',
      },
    ],
    howToChoose: [
      'Start with the API Freshwater Master Test Kit for any new freshwater tank — it covers the cycle parameters and is the most widely supported reference in hobbyist troubleshooting forums.',
      'For reef, add Salifert kits for alkalinity, calcium, and magnesium on top of an API base kit. Upgrade to a Hanna Checker for alkalinity once you start dosing two-part.',
      'Skip test strips as your only tool. They are useful for a 30-second "is anything wildly off?" check but cannot confirm a cycle is complete.',
      'Check the manufacture / expiration date when buying — old stock at discount retailers may be near or past useful life. Reagents lose accuracy 18–24 months after the bottle is opened.',
      'Calibrate digital probes against fresh reagent kit readings monthly. Probe drift is the most common cause of "my parameters say X but my livestock disagrees" mystery.',
    ],
    commonMistakes: [
      'Trusting test strips alone to confirm a tank has cycled. Strips routinely read 0 ppm ammonia when liquid kits read 0.5 ppm.',
      'Skipping the nitrate bottle shake (Bottle 2 on API). Without 30 seconds of hard shaking the test underreports by half.',
      'Comparing test colors under warm room light. Always compare against the printed chart in natural daylight; warm bulbs shift perceived color.',
      'Using a 3-year-old test kit. Reagents degrade — ammonia and nitrite kits start reading low after about 24 months even unopened.',
      'Testing only ammonia and nitrite. Nitrate matters for water changes, pH matters for fish compatibility, and KH matters for stability — a one-parameter view misses the actual diagnosis.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$25–$45',
        summary:
          'API Freshwater Master Test Kit. Adequate for any freshwater hobbyist. Test strips ($10–$15) belong in this tier as a supplementary tool only.',
      },
      {
        tier: 'Mid-range',
        range: '$45–$150',
        summary:
          'Salifert per-parameter reef kits (alk, calc, mag, phosphate). Hanna handheld checkers for individual parameters. The reef-keeper baseline.',
      },
      {
        tier: 'Premium',
        range: '$150–$800',
        summary:
          'Multi-parameter photometers (Hanna, Red Sea), digital probe + controller setups (Apex, GHL). Required for SPS reef and competitive aquascaping.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Water Test Kits (API, Salifert, Hanna ranked)', href: '/reviews/best-water-test-kits' },
      { label: 'Nitrogen Cycle Explained (what to test for and why)', href: '/health/nitrogen-cycle-explained' },
      { label: 'New Tank Syndrome (testing prevents the failure mode)', href: '/health/new-tank-syndrome' },
    ],
    faqs: [
      {
        question: 'Are test strips accurate enough for aquarium use?',
        answer:
          'No, not as a primary tool. Test strips routinely read 1–2 color blocks off actual values for ammonia, nitrate, and pH. Use a liquid kit (API Master is the standard) to confirm a cycle and diagnose problems. Strips are acceptable as a quick directional check on an already-stable, cycled tank.',
      },
      {
        question: 'How often should I test my aquarium water?',
        answer:
          'During cycling: every 2–3 days until ammonia and nitrite both read 0 and nitrate accumulates. After cycling: weekly during the first 2 months of stocking, then bi-weekly to monthly on a stable tank. Reef tanks: alkalinity 2–3× weekly, calcium and magnesium weekly.',
      },
      {
        question: 'What parameters should I be testing?',
        answer:
          'Freshwater: ammonia, nitrite, nitrate, pH at minimum. Add KH and GH if you have demanding fish or shrimp. Saltwater: add salinity (refractometer), alkalinity, calcium, and magnesium. Phosphate and nitrate matter for any planted or reef system targeting algae control.',
      },
      {
        question: 'Why does my test kit give a different reading than the pet store?',
        answer:
          'Common causes: your kit or theirs is expired (reagents degrade after 18–24 months); different brands have slightly different reference scales; sample timing and water temperature affect results; or one of you is doing the test wrong (test the nitrate bottle shake — it gets skipped constantly).',
      },
      {
        question: 'Do I need a reef test kit if I keep saltwater fish without coral?',
        answer:
          'For FOWLR tanks the basic freshwater parameters plus salinity and alkalinity are usually sufficient. Calcium and magnesium become important only when keeping coral, which consumes them. A refractometer for salinity is the one tool every saltwater hobbyist needs that freshwater hobbyists do not.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks via the /reviews/best-water-test-kits page for API, Salifert, and Hanna kit purchases — high-frequency repurchase category as reagents expire.',
  },

  // ─── CO2 Systems ────────────────────────────────────────────────────────
  {
    slug: 'aquarium-co2-systems',
    categoryName: 'Aquarium CO2 Systems',
    whatItIs:
      'A CO2 system injects supplemental carbon dioxide into a planted aquarium so plants can photosynthesize at the rate the lighting allows. CO2 is the third leg of the planted-tank triangle alongside light and nutrients, and it is the single biggest distinguishing factor between low-tech and high-tech planted tanks.',
    whyItMatters: [
      'Without CO2, high-light planted tanks reliably grow algae rather than plants — light without matching carbon availability is the dominant cause of planted-tank algae outbreaks.',
      'CO2 enables the demanding plant species that high-tech aquascapes are known for: carpets (dwarf hairgrass, monte carlo), red stems, and dense growth rates.',
      'Pressurized CO2 with a solenoid timer is the only setup that delivers stable concentrations — DIY yeast systems vary by temperature and finish productively after 2–3 weeks.',
      'CO2 overdose can suffocate fish. A drop checker (green = correct, blue = too low, yellow = dangerous) is non-negotiable safety equipment, not an accessory.',
    ],
    typesAndTradeoffs: [
      {
        type: 'Pressurized CO2 (cylinder + regulator)',
        bestFor:
          'Any high-tech planted tank from 20 gallons up. Stable, controllable, solenoid-friendly (auto on with the lights), refillable cylinders.',
        drawbacks:
          'Significant upfront cost ($150–$400 complete). Requires understanding regulator setup, working-pressure adjustment, and bubble counting.',
      },
      {
        type: 'DIY yeast / sugar system',
        bestFor:
          'Hobbyists testing planted-tank ideas before committing to pressurized. Nano tanks under 10 gallons where pressurized hardware is overkill.',
        drawbacks:
          'Output varies dramatically with temperature and bottle age. No solenoid control. Productive lifespan of 2–3 weeks per bottle before yeast exhausts itself.',
      },
      {
        type: 'Liquid carbon (Seachem Excel, Tropica Premium)',
        bestFor:
          'Low-tech tanks wanting modest plant boost without pressurized hardware. Algaecide effect on hair and BBA algae is a useful side benefit.',
        drawbacks:
          'Not a true CO2 substitute for high-tech aquascapes. Toxic to vallisneria and some moss species at recommended doses. Requires daily dosing.',
      },
      {
        type: 'Disposable bottle CO2 (Fluval, Hagen)',
        bestFor:
          'Nano tanks 5–15 gallons where a full pressurized rig would dominate the space. Aesthetic-friendly on display setups.',
        drawbacks:
          'Per-gram cost of CO2 is 3–5× that of refillable cylinders. Limited duration per bottle. Constrained to small tank volumes.',
      },
      {
        type: 'Paintball CO2 (with adapter)',
        bestFor:
          'Mid-sized tanks (15–40 gallons) wanting pressurized CO2 in a compact form. Paintball cylinders refill cheaply at sporting goods stores.',
        drawbacks:
          'Requires a paintball-to-aquarium regulator. Cylinder duration is shorter than 5-pound aquarium cylinders. Needs more frequent refills.',
      },
    ],
    howToChoose: [
      'Match CO2 strategy to lighting. Low-light planted tanks (basic LED, anubias and java fern) do not need CO2 at all and often do worse with it.',
      'For a high-tech aquascape, budget for the full pressurized rig from the start: cylinder, regulator with solenoid, bubble counter, check valve, diffuser, and drop checker.',
      'Size the cylinder for refill convenience. A 5-pound cylinder runs a 40-gallon tank for ~6–9 months — convenient. A 24oz paintball lasts weeks — annoying for the same tank.',
      'Always pair CO2 with a drop checker filled with 4 dKH reference solution. Adjust bubble rate until the drop checker is green during the photoperiod.',
      'Ramp injection in slowly. Start at half the target bubble rate and increase over 5–7 days while monitoring fish behavior; sudden CO2 increases cause gasping.',
    ],
    commonMistakes: [
      'Running CO2 24/7 instead of solenoid-timed to the photoperiod. Plants do not use CO2 in the dark, fish do not benefit from elevated CO2 overnight, and you waste gas.',
      'Skipping the drop checker. There is no other reliable way to confirm dissolved CO2 is in the target range without expensive monitoring.',
      'Overdosing liquid carbon as a CO2 substitute. Most liquid carbons are toxic to vallisneria, certain mosses, and shrimp at high doses.',
      'Using DIY yeast on tanks above ~20 gallons. Output is inconsistent and insufficient to drive demanding plant growth at scale.',
      'Aiming the CO2 diffuser at the filter intake. While this distributes CO2, it also outgases more rapidly at the surface and reduces effective injection rates.',
    ],
    priceRanges: [
      {
        tier: 'Budget',
        range: '$15–$80',
        summary:
          'DIY yeast setups, liquid carbon bottles, and basic disposable-cartridge CO2 kits. Adequate for low-tech tanks experimenting with modest plant boost.',
      },
      {
        tier: 'Mid-range',
        range: '$80–$250',
        summary:
          'Entry-level pressurized rigs with paintball or 24oz cylinders. Includes solenoid regulator and drop checker. Suitable for 10–30 gallon high-tech aquascapes.',
      },
      {
        tier: 'Premium',
        range: '$250–$700+',
        summary:
          'Full pressurized setups with 5–10 lb cylinders, dual-stage regulators, inline atomizers, and PH controllers. Required for serious aquascaping and tanks above 40 gallons.',
      },
    ],
    recommendedFurtherReading: [
      { label: 'Best Aquarium Lighting (pair CO2 with high-output planted LEDs)', href: '/reviews/best-aquarium-lighting' },
      { label: 'Best Planted-Tank Fertilizers (the third leg of the triangle)', href: '/reviews/best-planted-tank-fertilizers' },
      { label: 'Best Water Test Kits (KH and pH for drop-checker reference)', href: '/reviews/best-water-test-kits' },
    ],
    faqs: [
      {
        question: 'Do I need CO2 for my planted aquarium?',
        answer:
          'Only if you want to grow demanding plants (carpets, red stems, dense aquascapes) under high light. Low-light planted tanks with anubias, java fern, mosses, and crypts grow fine without injected CO2 — and often grow worse with it because the high light required to make CO2 worthwhile also feeds algae if not perfectly balanced.',
      },
      {
        question: 'Is liquid carbon as good as pressurized CO2?',
        answer:
          'For low-tech tanks wanting a modest plant boost, liquid carbon (Seachem Excel, Tropica Premium) helps and has a useful side effect against BBA and hair algae. For high-tech aquascapes with demanding plants, no — liquid carbon does not deliver the carbon concentration that dwarf hairgrass carpets and red stems require.',
      },
      {
        question: 'Can CO2 injection kill my fish?',
        answer:
          'Yes, if overdosed or run without monitoring. CO2 displaces oxygen at the gill surface and causes gasping, lethargy, and eventually death. Always use a drop checker filled with 4 dKH reference solution to confirm dissolved CO2 stays in the green range, and time CO2 to shut off overnight via solenoid.',
      },
      {
        question: 'How long does a CO2 cylinder last?',
        answer:
          'Depends heavily on tank size and bubble rate. A 5-pound cylinder typically runs a 40-gallon planted tank for 6–9 months at solenoid-controlled photoperiod injection. Paintball cylinders (24oz) run a similar tank for 4–8 weeks. Disposable bottles last 2–6 weeks on nano tanks.',
      },
      {
        question: 'Should CO2 run at night or 24/7?',
        answer:
          'Neither — CO2 should run only during the photoperiod. Plants do not use CO2 in the dark, and elevated overnight CO2 stresses fish since respiration adds more on top. The standard setup is a solenoid valve that turns CO2 on 30 minutes before lights-on and off 30 minutes before lights-off.',
      },
    ],
    affiliateAngle:
      'Drives Amazon affiliate clicks via the linked /reviews/best-aquarium-lighting and /reviews/best-planted-tank-fertilizers pages — CO2 buyers cross-purchase lights and ferts at high attach rate.',
  },
]

// ─── Helpers ───────────────────────────────────────────────────────────────

export function getEquipmentCategoryBySlug(slug: string): EquipmentCategory | undefined {
  return EquipmentCategories.find((c) => c.slug === slug)
}
