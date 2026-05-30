/**
 * Species-class vivarium build catalog — Lizard.com
 *
 * Step-by-step setup guides consumed by the dynamic route at
 * /builds/[slug]/page.tsx. One static-rendered guide per species class with
 * equipment categories (no brand promises), build steps, common mistakes,
 * maintenance schedule, FAQ, and cited sources.
 *
 * Editorial posture:
 *   - Equipment recommendations by category with example products only — no
 *     "best" promises. ASINs route through /go/amazon/<ASIN> for affiliate
 *     attribution.
 *   - Source posture mirrors /husbandry: Mader's Reptile and Amphibian
 *     Medicine and Surgery (RAMS), the Journal of Herpetological Medicine
 *     and Surgery (J Herp Med Surg), ARAV continuing-education materials,
 *     AAV reference texts where reptile content overlaps.
 *   - No specific drug dosing or guaranteed outcomes. Setup guidance only.
 *
 * Slug-collision rule:
 *   /builds/ is a NEW top-level tree; the 5 slugs below are unique to this
 *   hub and do not collide with /species/, /husbandry/, /health/, or /setup/.
 */

export type BuildDifficulty = 'beginner' | 'intermediate' | 'advanced'

export interface EnclosureSize {
  /** Absolute minimum acceptable footprint. */
  min: string
  /** Recommended size for an adult animal. */
  recommended: string
  /** Ideal / "bioactive-friendly" upgrade footprint. */
  ideal: string
}

export interface TemperatureGradient {
  basking: string
  ambient: string
  cool: string
  nightDrop: string
}

export interface HumidityRange {
  day: string
  night: string
  breeding?: string
}

export interface LightingPlan {
  uvb?: string
  basking: string
  photoperiod: string
}

export interface HideSpec {
  type: string
  placement: string
}

export interface EquipmentExample {
  name: string
  /** Optional Amazon ASIN — link goes through /go/amazon/<ASIN>. */
  asin?: string
  priceRange: string
}

export interface EquipmentCategory {
  category: string
  examples: EquipmentExample[]
}

export interface BuildStep {
  step: number
  title: string
  description: string
}

export interface MaintenanceCadence {
  daily: string
  weekly: string
  monthly: string
}

export interface BuildFAQ {
  question: string
  answer: string
}

export interface BuildSource {
  name: string
  url: string
}

export interface VivariumBuild {
  slug: string
  speciesName: string
  scientificName: string
  buildName: string
  suitableFor: BuildDifficulty
  shortDescription: string
  overview: string
  enclosureSize: EnclosureSize
  temperatureGradient: TemperatureGradient
  humidityRange: HumidityRange
  lighting: LightingPlan
  substrate: string[]
  hides: HideSpec[]
  waterFeatures: string
  decorations: string[]
  heatingMethod: string
  requiredEquipment: EquipmentCategory[]
  buildSteps: BuildStep[]
  commonMistakes: string[]
  maintenanceSchedule: MaintenanceCadence[]
  faqs: BuildFAQ[]
  citedSources: BuildSource[]
}

// ─────────────────────────────────────────────────────────────────────
// 1. Bearded Dragon — desert species build
// ─────────────────────────────────────────────────────────────────────

const beardedDragonBuild: VivariumBuild = {
  slug: 'bearded-dragon-build',
  speciesName: 'Bearded Dragon',
  scientificName: 'Pogona vitticeps',
  buildName: 'Desert Basker Vivarium Build',
  suitableFor: 'beginner',
  shortDescription:
    'A 4x2x2 desert-zone build for an adult Pogona vitticeps: high basking surface, strong UVB, dry sand-soil substrate, and a true cool side for behavioral thermoregulation.',
  overview:
    'Bearded dragons originate from the arid interior of central Australia and are open-zone, heliothermic baskers. The build prioritizes a high-output basking site (100-110°F surface), a true 75-85°F cool side, T5 HO 10-12% UVB across roughly two-thirds of the enclosure, and a dry, dig-friendly substrate. The minimum footprint for a single adult is 4 feet long by 2 feet deep by 2 feet tall; larger is better. This setup follows the Ferguson Zone 3-4 framework cited in the keeper-veterinary literature.',
  enclosureSize: {
    min: '48"L x 24"D x 24"H (4x2x2 ft) for one adult',
    recommended: '72"L x 24"D x 24"H (6x2x2 ft) for one adult',
    ideal: '96"L x 30"D x 30"H (8x2.5x2.5 ft) for bioactive setups',
  },
  temperatureGradient: {
    basking: '100-110°F surface temperature at the basking platform (measured with an IR temp gun)',
    ambient: '85-90°F mid-enclosure',
    cool: '75-85°F at the cool end',
    nightDrop: '65-75°F overnight; no visible light',
  },
  humidityRange: {
    day: '30-40% relative humidity',
    night: '40-50% relative humidity',
  },
  lighting: {
    uvb: 'T5 HO 10-12% linear UVB fixture spanning ~⅔ of the enclosure length, mounted 12-15 inches above the basking surface (above-screen) or per fixture instructions. Replace every 12 months even if it still emits visible light.',
    basking: 'Flood-style halogen basking bulb (50-100W) over a flat basking platform; choose wattage to hit the 100-110°F surface target with the bulb at its mounted distance, on a proportional dimming thermostat.',
    photoperiod: '12-14 hours in summer, 10-12 hours in winter; all daytime lighting on a single timer.',
  },
  substrate: [
    'Washed play sand + organic topsoil mix (about 70/30) for diggers — supports natural digging behavior',
    'Excavator clay if you want to sculpt fixed terrain features',
    'Slate or ceramic tile for keepers who prefer a hard, easy-clean surface',
    'AVOID loose calcium-sand, walnut shell, and crushed-corn-cob substrates (impaction risk cited in Mader\'s RAMS)',
  ],
  hides: [
    {
      type: 'Warm hide (under or beside the basking site)',
      placement: 'On the warm end — gives the dragon a thermal-warm shelter without leaving the gradient',
    },
    {
      type: 'Cool hide',
      placement: 'On the cool end — should be enclosed on three sides and fit the adult comfortably',
    },
    {
      type: 'Humid hide (small)',
      placement: 'Mid-enclosure — sphagnum moss inside, used during shed cycles',
    },
  ],
  waterFeatures:
    'A shallow ceramic water dish on the cool side, replenished daily. Bearded dragons drink less from standing water than most reptiles; many keepers also offer a weekly soak in a separate shallow tub at 85-90°F for 15-20 minutes.',
  decorations: [
    'Sturdy basking branch or stacked flagstone platform under the basking light',
    'Cork-bark slabs or hardwood branches for climbing (dragons are semi-arboreal as juveniles)',
    'Live or artificial drought-tolerant plants (succulents, dragon fruit cuttings) for visual cover',
    'Rock pile on the cool side to create a secondary microclimate',
  ],
  heatingMethod:
    'Overhead halogen basking flood on a proportional dimming thermostat — primary heat source. No under-tank heat mats for adult bearded dragons (heat comes from above in their native habitat). A deep heat projector (no visible light) can supplement at night in colder rooms; thermostat-controlled.',
  requiredEquipment: [
    {
      category: 'Enclosure',
      examples: [
        { name: '4x2x2 ft front-opening PVC enclosure (example product)', priceRange: '$350-$700' },
        { name: '4x2x2 ft sealed-wood vivarium (example product)', priceRange: '$250-$500' },
      ],
    },
    {
      category: 'UVB lighting',
      examples: [
        { name: 'T5 HO 34W 10-12% UVB linear fixture (36-inch)', priceRange: '$60-$120' },
        { name: 'Replacement T5 HO 10-12% UVB bulb (36-inch)', priceRange: '$25-$45' },
      ],
    },
    {
      category: 'Basking heat',
      examples: [
        { name: 'Halogen flood basking bulb, 75W or 100W', priceRange: '$8-$18' },
        { name: 'Dome fixture rated for halogen, ceramic socket', priceRange: '$15-$35' },
      ],
    },
    {
      category: 'Thermostat',
      examples: [
        { name: 'Proportional dimming thermostat (single-channel)', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'Substrate',
      examples: [
        { name: 'Washed play sand (50 lb bag)', priceRange: '$8-$15' },
        { name: 'Organic topsoil (40 lb bag, no fertilizer or pesticide)', priceRange: '$8-$12' },
        { name: 'Excavator clay (10 lb)', priceRange: '$25-$40' },
      ],
    },
    {
      category: 'Measurement',
      examples: [
        { name: 'Infrared temperature gun', priceRange: '$20-$40' },
        { name: 'Solarmeter 6.5 UV Index meter', priceRange: '$210-$240' },
        { name: 'Min/max digital thermometer with probe', priceRange: '$15-$30' },
        { name: 'Digital hygrometer with probe', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Hides & decor',
      examples: [
        { name: 'Resin or cork-bark warm hide', priceRange: '$15-$40' },
        { name: 'Hardwood basking branch (4 ft)', priceRange: '$20-$45' },
        { name: 'Stacked flagstone basking platform', priceRange: '$10-$25' },
      ],
    },
    {
      category: 'Water',
      examples: [{ name: 'Shallow ceramic reptile water dish', priceRange: '$10-$25' }],
    },
  ],
  buildSteps: [
    {
      step: 1,
      title: 'Site the enclosure',
      description:
        'Place the enclosure away from direct windows, HVAC vents, and high-traffic walkways. Leave 4-6 inches of clearance behind for cable runs and ventilation. Confirm the floor can support 100+ lb (loaded enclosure + substrate).',
    },
    {
      step: 2,
      title: 'Install the substrate base',
      description:
        'Lay 3-4 inches of washed-sand / organic-topsoil mix across the entire floor. Pack the warm-end side slightly higher to create elevation toward the basking platform. Mist lightly so the mix holds shape, then let it dry before adding animals.',
    },
    {
      step: 3,
      title: 'Mount lighting fixtures above the enclosure',
      description:
        'Center the T5 HO UVB fixture over the basking-end ⅔ of the enclosure. Mount the basking halogen dome at the warm end above the planned basking platform, 12-15 inches from the basking surface. Both fixtures connect to a single light-cycle timer; the halogen feeds through the thermostat.',
    },
    {
      step: 4,
      title: 'Build the basking platform and warm-side hide',
      description:
        'Stack flagstone or place a sturdy hardwood branch directly under the halogen so the highest surface sits about 12 inches below the bulb. Add the warm hide under or beside the platform so the dragon can shelter in heat. Verify the warm-hide air temperature is in the 85-90°F range, not basking-hot.',
    },
    {
      step: 5,
      title: 'Build the cool side and humid hide',
      description:
        'On the opposite end, place a closed-on-three-sides cool hide, a small humid hide stuffed with damp sphagnum moss, and a ceramic water dish. Add a rock pile or low cork-bark stack for additional shelter.',
    },
    {
      step: 6,
      title: 'Calibrate the gradient over 48-72 hours (no animal yet)',
      description:
        'Run the full light/heat cycle for 2-3 days. Verify with an IR temp gun: basking surface 100-110°F, ambient mid-enclosure 85-90°F, cool side 75-85°F. Confirm UVI at the basking site with a Solarmeter 6.5 (target 3.0-4.5). Tune bulb distance or wattage before introducing the animal.',
    },
    {
      step: 7,
      title: 'Introduce the dragon and observe for 14 days',
      description:
        'Move the dragon in mid-morning so it has a full day-cycle to acclimate. Watch position use across all three zones, feeding response, and stool. Re-verify temperatures and UVI in the first week — substrate settling or branch shifting can change the basking-site readings.',
    },
  ],
  commonMistakes: [
    'Coil or compact UVB bulb instead of linear T5 HO — coils degrade fast and cover only a small footprint.',
    'Basking temperature below 95°F — undertemped dragons stop digesting and develop chronic GI issues.',
    'No true cool side — the entire enclosure sits at 90°F+ and the dragon has no thermal refuge.',
    'Loose calcium-sand or walnut substrate — impaction risk cited repeatedly in the herpetological-medicine literature.',
    'UVB bulb that "still looks fine" left in past 12 months — visible output and biological UVB output are independent.',
    'Glass tank under 40 gallons — too small for an adult; cannot establish a real gradient.',
  ],
  maintenanceSchedule: [
    {
      daily: 'Spot-clean feces and uneaten greens; refill water dish; verify basking and cool-side temps with an IR gun.',
      weekly: 'Sift loose substrate; deep-clean water dish; offer a 15-20 minute warm soak.',
      monthly: 'Wipe down enclosure walls; replace any damaged decor; full UVI check with a Solarmeter; record weight.',
    },
  ],
  faqs: [
    {
      question: 'Do I really need a 4x2x2 minimum?',
      answer:
        'Yes for an adult. Anything smaller cannot maintain a real temperature gradient — the basking heat bleeds into the cool side and the dragon has no thermal refuge. Many keeper-veterinary references and welfare guidelines treat 4x2x2 as the floor for a single adult Pogona vitticeps, not the recommended size.',
    },
    {
      question: 'Can I use a coil UVB instead of T5 HO?',
      answer:
        'Not as the primary UVB. Compact and coil bulbs project UVB over a small footprint and degrade quickly. A 36-inch T5 HO 10-12% linear bulb provides the broad, consistent UVI a basking desert species needs across its activity zone.',
    },
    {
      question: 'Is loose substrate safe?',
      answer:
        'Sand + soil mixes are widely used and well-tolerated by adult Pogona when temperatures are correct (so digestion works) and dietary calcium is adequate. The substrates linked to impaction in the literature are calcium-sand, walnut shell, and crushed corn cob — avoid those specifically.',
    },
    {
      question: 'Do I need a night heat source?',
      answer:
        'Usually no. A 65-75°F overnight drop is normal and beneficial for the species. Add a thermostat-controlled deep heat projector only if the room dips below 60°F overnight.',
    },
    {
      question: 'How often should I replace UVB?',
      answer:
        'T5 HO linear UVB bulbs are replaced on a 12-month cadence. Compact / coil bulbs degrade faster (6-9 months). The only way to know for sure is a Solarmeter 6.5 reading at the basking site.',
    },
  ],
  citedSources: [
    {
      name: "Mader's Reptile and Amphibian Medicine and Surgery — Pogona husbandry chapter",
      url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
    },
    {
      name: 'Journal of Herpetological Medicine and Surgery — Pogona UVB and metabolic bone disease reviews',
      url: 'https://meridian.allenpress.com/jhms',
    },
    {
      name: 'ARAV — Continuing-education resources on reptile lighting and thermoregulation',
      url: 'https://arav.org/resources/',
    },
    {
      name: 'Ferguson, G. W. et al. — UV-B exposure and basking-site selection in lizards',
      url: 'https://meridian.allenpress.com/jhms',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────
// 2. Leopard Gecko — terrestrial, hide-focused build
// ─────────────────────────────────────────────────────────────────────

const leopardGeckoBuild: VivariumBuild = {
  slug: 'leopard-gecko-build',
  speciesName: 'Leopard Gecko',
  scientificName: 'Eublepharis macularius',
  buildName: 'Crepuscular Terrestrial Build',
  suitableFor: 'beginner',
  shortDescription:
    'A 36x18x18 terrestrial build for Eublepharis macularius: multiple hides, gentle overhead heat, optional low-output UVB, and a humid hide for shed support.',
  overview:
    'Leopard geckos are crepuscular ground-dwellers from rocky semi-arid foothills of Afghanistan, Pakistan, and northwestern India. The build prioritizes three hides (warm dry, cool dry, humid moist), an overhead heat source rather than an under-tank pad, and a low-output linear UVB fixture across part of the enclosure. The minimum footprint is 36x18x18 inches for one adult; larger is better. The UVB question is no longer controversial in the recent peer-reviewed literature — low-level UVB at a Ferguson Zone 1 target benefits the animal even when dietary D3 is supplemented.',
  enclosureSize: {
    min: '36"L x 18"D x 18"H for one adult',
    recommended: '36"L x 18"D x 18"H to 48"L x 18"D x 18"H',
    ideal: '48"L x 24"D x 24"H bioactive setup with vertical hardscape',
  },
  temperatureGradient: {
    basking: '90-95°F surface temperature at the warm-side basking spot',
    ambient: '78-84°F mid-enclosure',
    cool: '70-75°F at the cool end',
    nightDrop: '65-72°F overnight; no visible light',
  },
  humidityRange: {
    day: '30-40% ambient relative humidity',
    night: '40-50% ambient relative humidity',
    breeding: '50-60% briefly during pairing if breeding is planned',
  },
  lighting: {
    uvb: 'Low-output linear T5 HO 5-7% UVB fixture across ~⅓ of the enclosure length, mounted above-screen at the manufacturer-rated distance. Target UVI 0.5-1.5 at the gecko\'s typical perch height (Ferguson Zone 1). Replace every 12 months.',
    basking: 'Low-wattage halogen or par38 basking bulb (35-50W) over a flat slate basking spot, on a proportional dimming thermostat.',
    photoperiod: '12 hours year-round with seasonal variation optional (10 hours winter, 14 hours summer).',
  },
  substrate: [
    'Washed play sand + organic topsoil mix (about 60/40) for diggers',
    'Excavator clay sculpted into a fixed hardscape',
    'Slate or ceramic tile as a low-risk all-purpose option for new keepers',
    'AVOID loose calcium-sand, walnut shell, and crushed-corn-cob substrates (impaction risk cited in Mader\'s RAMS)',
  ],
  hides: [
    {
      type: 'Warm dry hide',
      placement: 'On the warm side, partially under the basking light — gives a thermal-warm shelter',
    },
    {
      type: 'Cool dry hide',
      placement: 'On the cool end — closed on three sides, fits the adult body length',
    },
    {
      type: 'Moist / humid hide',
      placement: 'Mid-enclosure — sphagnum moss or paper-towel base, used during sheds',
    },
  ],
  waterFeatures:
    'A small shallow ceramic water dish on the cool side, refilled daily. Leopard geckos rarely drink from standing water but the dish maintains ambient humidity. No standing pool or deep water.',
  decorations: [
    'Stacked flagstone or slate basking platform under the heat lamp',
    'Cork-bark rounds for additional hides and visual cover',
    'Low artificial or live drought-tolerant plants (sansevieria, haworthia)',
    'Smooth rock pile on the cool side to create a secondary microclimate',
  ],
  heatingMethod:
    'Overhead halogen basking bulb on a proportional dimming thermostat — primary heat source for the surface basking spot. Recent peer-reviewed literature favors overhead heat over under-tank heat mats for Eublepharis macularius because gravid females and digesting animals naturally seek surface basking opportunities under cover. A deep heat projector can supplement at night in cold rooms.',
  requiredEquipment: [
    {
      category: 'Enclosure',
      examples: [
        { name: '36x18x18 in front-opening PVC enclosure (example product)', priceRange: '$220-$400' },
        { name: '36x18x18 in glass terrarium with screen top', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'UVB lighting (optional but recommended)',
      examples: [
        { name: 'T5 HO 14W 5-7% UVB linear fixture (12-18 inch)', priceRange: '$45-$90' },
        { name: 'Replacement T5 HO 5-7% UVB bulb', priceRange: '$20-$35' },
      ],
    },
    {
      category: 'Basking heat',
      examples: [
        { name: 'Halogen flood basking bulb, 35W or 50W', priceRange: '$8-$15' },
        { name: 'Ceramic-socket dome fixture', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Thermostat',
      examples: [
        { name: 'Proportional dimming thermostat (single-channel)', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'Hides',
      examples: [
        { name: 'Resin warm hide', priceRange: '$10-$25' },
        { name: 'Cork-bark cool hide', priceRange: '$12-$25' },
        { name: 'Moist hide / humid box', priceRange: '$8-$20' },
      ],
    },
    {
      category: 'Substrate',
      examples: [
        { name: 'Washed play sand (50 lb bag)', priceRange: '$8-$15' },
        { name: 'Organic topsoil (40 lb bag)', priceRange: '$8-$12' },
        { name: 'Slate or ceramic tile (12x12 in)', priceRange: '$3-$8 each' },
      ],
    },
    {
      category: 'Measurement',
      examples: [
        { name: 'Infrared temperature gun', priceRange: '$20-$40' },
        { name: 'Min/max digital thermometer with probe', priceRange: '$15-$30' },
        { name: 'Digital hygrometer with probe', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Water',
      examples: [{ name: 'Shallow ceramic reptile water dish', priceRange: '$8-$20' }],
    },
  ],
  buildSteps: [
    {
      step: 1,
      title: 'Site and assemble the enclosure',
      description:
        'Place on a stable surface away from windows and HVAC vents. Glass terraria need a tight-fitting screen top to retain ambient heat; PVC enclosures retain heat better but cost more.',
    },
    {
      step: 2,
      title: 'Lay the substrate',
      description:
        'For new keepers, lay slate or ceramic tile across the whole floor. For experienced keepers, lay 2-3 inches of washed-sand / organic-topsoil mix. Pack the warm-side mound slightly higher.',
    },
    {
      step: 3,
      title: 'Mount the lighting fixtures',
      description:
        'Position the halogen dome on the warm end, 8-12 inches above the planned basking spot. If using UVB, mount the T5 HO low-output fixture across the warm third of the enclosure at the manufacturer-rated distance. Both fixtures connect to a single timer; halogen feeds through the thermostat.',
    },
    {
      step: 4,
      title: 'Place the three hides',
      description:
        'Set the warm hide under or beside the basking spot so the gecko can shelter in warmth. Place the cool hide at the opposite end. Position the moist hide mid-enclosure, stuffed with damp sphagnum moss. Verify the warm hide\'s interior air temperature sits around 85-88°F.',
    },
    {
      step: 5,
      title: 'Add water and decor',
      description:
        'Set the shallow ceramic water dish on the cool side. Add a stacked flagstone basking platform, a few hardwood branches or cork-bark slabs for low climbing structure, and one or two drought-tolerant plants if desired.',
    },
    {
      step: 6,
      title: 'Calibrate the gradient over 48-72 hours (no animal yet)',
      description:
        'Run the full light/heat cycle for 2-3 days. Verify with an IR temp gun: basking spot 90-95°F, ambient 78-84°F, cool side 70-75°F. If using UVB, confirm UVI 0.5-1.5 at the typical perch height. Tune before introducing the animal.',
    },
    {
      step: 7,
      title: 'Introduce the gecko and observe for 14 days',
      description:
        'Add the gecko in late afternoon — leopard geckos are crepuscular and will explore at dusk. Watch which hides it uses, feeding response, and shed timing. Re-verify temperatures and humidity in week one.',
    },
  ],
  commonMistakes: [
    'Under-tank heat mat as the only heat source — does not produce a surface basking spot the gecko can choose, and old-style mats without a thermostat have caused thermal burns documented in J Herp Med Surg case reports.',
    'No moist hide — leopard geckos retain shed on toes, tail tip, and eyelids when humidity is too low at shed time. The moist hide solves this passively.',
    'Loose calcium-sand or walnut substrate — impaction risk; choose a tile, slate, or sand+soil mix instead.',
    'No UVB at all — older keeper literature said UVB was unnecessary; recent peer-reviewed work suggests low-level UVB (Ferguson Zone 1) is beneficial even with dietary D3 supplementation.',
    'Heat lamp on but no thermostat — surface temperatures drift with room temperature; a proportional dimming thermostat is the only way to lock in the basking-site target.',
  ],
  maintenanceSchedule: [
    {
      daily: 'Spot-clean feces; verify warm-side basking and cool-side temperatures; refresh water dish.',
      weekly: 'Re-mist the moist hide; deep-clean water dish; sift loose substrate or wipe tile.',
      monthly: 'Wipe enclosure walls; replace any damaged decor; record weight; check UVI if UVB is fitted.',
    },
  ],
  faqs: [
    {
      question: 'Do leopard geckos really need UVB?',
      answer:
        'The modern peer-reviewed answer is "low-level UVB is beneficial even when dietary D3 is supplemented." Older keeper literature said no UVB was required, but recent work in the Journal of Herpetological Medicine and Surgery and similar venues supports a Ferguson Zone 1 target (UVI 0.5-1.5). It is not as critical as it is for a bearded dragon, but it is no longer controversial that adding low-level UVB is a positive change.',
    },
    {
      question: 'Why overhead heat instead of an under-tank heat mat?',
      answer:
        'Leopard geckos naturally bask on warm rocks under cover. Overhead halogen produces a true surface basking spot the gecko can choose; an under-tank mat heats only the floor without creating a "sun spot" the animal can move into or out of. Heat mats also have a thermal-burn history in the case-report literature when used without a thermostat.',
    },
    {
      question: 'How important is the moist hide?',
      answer:
        'Critical. Leopard gecko sheds get stuck on toes, tail tip, and eyelids when ambient humidity is low. The moist hide is a small, enclosed microclimate the gecko enters voluntarily during shed cycles. It removes most shed problems without needing to humidify the whole enclosure.',
    },
    {
      question: 'Can I house two leopard geckos together?',
      answer:
        'Two females sometimes, but it is not recommended for new keepers. Two males will fight. Male+female pairs will breed continuously and stress the female. The simpler and safer default is one gecko per enclosure.',
    },
    {
      question: 'Is a 20-gallon-long enough?',
      answer:
        'A 20-gallon-long is the absolute historical floor for a single adult, but 36x18x18 (≈40 gallons of equivalent footprint) is the modern recommended minimum. Larger enclosures support a real gradient and give the gecko meaningful behavioral space.',
    },
  ],
  citedSources: [
    {
      name: "Mader's Reptile and Amphibian Medicine and Surgery — Eublepharis husbandry and case reports",
      url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
    },
    {
      name: 'Journal of Herpetological Medicine and Surgery — Leopard gecko UVB and thermal-burn case literature',
      url: 'https://meridian.allenpress.com/jhms',
    },
    {
      name: 'ARAV — Continuing-education resources on reptile lighting',
      url: 'https://arav.org/resources/',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────
// 3. Ball Python — tropical, humidity-controlled build
// ─────────────────────────────────────────────────────────────────────

const ballPythonBuild: VivariumBuild = {
  slug: 'ball-python-build',
  speciesName: 'Ball Python',
  scientificName: 'Python regius',
  buildName: 'Tropical Humid Vivarium Build',
  suitableFor: 'beginner',
  shortDescription:
    'A 4x2x2 humidity-controlled tropical build for adult Python regius: two snug hides, controlled overhead heat, 55-65% ambient humidity, and a deep substrate that holds moisture.',
  overview:
    'Ball pythons are nocturnal, ambush-feeding pythons from the savannah-forest ecotone of West and Central Africa. The build prioritizes a sealed PVC enclosure that holds humidity, two snug-fitting hides (warm and cool), a controlled basking spot (88-92°F surface), 55-65% ambient humidity, and 70-80% humidity during shed cycles. The minimum footprint for an adult is 4 feet long by 2 feet deep by 2 feet tall. The build follows current keeper-veterinary literature on ball-python welfare and humidity-driven dysecdysis.',
  enclosureSize: {
    min: '48"L x 24"D x 24"H (4x2x2 ft) for one adult',
    recommended: '48"L x 24"D x 24"H to 72"L x 24"D x 24"H',
    ideal: '72"L x 24"D x 24"H bioactive setup with climbing structure',
  },
  temperatureGradient: {
    basking: '88-92°F surface temperature at the warm-side basking spot',
    ambient: '80-84°F mid-enclosure',
    cool: '75-78°F at the cool end',
    nightDrop: '72-76°F overnight; no visible light',
  },
  humidityRange: {
    day: '55-65% ambient relative humidity',
    night: '60-70% ambient relative humidity',
    breeding: '70-80% briefly during shed cycles and pairing',
  },
  lighting: {
    uvb: 'Optional. Low-output T5 HO 5-7% UVB across part of the enclosure provides circadian benefit and supports natural D3 synthesis. Target UVI 0.5-1.5 at the snake\'s typical resting height (Ferguson Zone 1). Replace every 12 months.',
    basking: 'Low-wattage halogen or deep heat projector (50-100W) on a proportional dimming thermostat — overhead heat preferred over heat tape for surface basking opportunities.',
    photoperiod: '12 hours year-round; ball pythons are nocturnal but benefit from a consistent day-night cycle.',
  },
  substrate: [
    'Cypress mulch (the keeper-default for moisture retention without mold)',
    'Coconut husk / coir bedding mixed with sphagnum moss',
    'Organic topsoil + sphagnum moss for bioactive setups',
    'AVOID cedar, pine, and aspen for high-humidity ball-python setups (cedar/pine are toxic; aspen molds at ball-python humidity targets)',
  ],
  hides: [
    {
      type: 'Warm snug hide',
      placement: 'On the warm side — the snake should fit tightly inside, touching the walls; this is a security need, not a luxury',
    },
    {
      type: 'Cool snug hide',
      placement: 'On the cool end — identical fit; the snake should be able to thermoregulate without trading off security',
    },
    {
      type: 'Optional humid hide / moss box',
      placement: 'Mid-enclosure during shed cycles — supplements ambient humidity for cleaner sheds',
    },
  ],
  waterFeatures:
    'A medium-large water dish big enough for the snake to coil in, on the cool side. Many ball pythons soak before sheds. Refill daily; deep-clean weekly.',
  decorations: [
    'Sturdy horizontal branches at floor and mid-height (ball pythons climb more than older literature suggested)',
    'Cork-bark slabs leaning against walls for cover',
    'Live or artificial broad-leaf plants (pothos, philodendron) for visual cover',
    'Leaf litter on the substrate surface for additional cover and a more natural look',
  ],
  heatingMethod:
    'Overhead halogen or deep heat projector on a proportional dimming thermostat — primary heat source. Under-tank heat tape can supplement on a separate thermostat but is no longer the default per the current welfare-focused literature. The deep heat projector emits infrared without visible light and is well-suited for nocturnal species.',
  requiredEquipment: [
    {
      category: 'Enclosure',
      examples: [
        { name: '4x2x2 ft sealed PVC enclosure (example product)', priceRange: '$350-$700' },
        { name: '4x2x2 ft sealed-wood vivarium', priceRange: '$250-$500' },
      ],
    },
    {
      category: 'UVB lighting (optional)',
      examples: [
        { name: 'T5 HO 24W 5-7% UVB linear fixture (24-inch)', priceRange: '$50-$95' },
      ],
    },
    {
      category: 'Heat source',
      examples: [
        { name: 'Deep heat projector, 80W or 100W', priceRange: '$30-$70' },
        { name: 'Halogen flood basking bulb, 50W or 75W', priceRange: '$8-$15' },
        { name: 'Ceramic-socket dome fixture', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Thermostat',
      examples: [
        { name: 'Proportional dimming thermostat (single-channel)', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'Hides',
      examples: [
        { name: 'Snug resin warm hide (snake-fitted)', priceRange: '$15-$35' },
        { name: 'Snug resin cool hide (snake-fitted)', priceRange: '$15-$35' },
        { name: 'Moss-stuffed humid box', priceRange: '$10-$25' },
      ],
    },
    {
      category: 'Substrate',
      examples: [
        { name: 'Cypress mulch (large bag)', priceRange: '$15-$25' },
        { name: 'Coconut husk / coir bedding (compressed brick)', priceRange: '$10-$20' },
        { name: 'Sphagnum moss (bulk bag)', priceRange: '$10-$25' },
      ],
    },
    {
      category: 'Measurement',
      examples: [
        { name: 'Infrared temperature gun', priceRange: '$20-$40' },
        { name: 'Min/max digital thermometer with probe', priceRange: '$15-$30' },
        { name: 'Digital hygrometer with probe', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Water',
      examples: [{ name: 'Heavy ceramic or plastic water dish (large enough to soak)', priceRange: '$15-$40' }],
    },
  ],
  buildSteps: [
    {
      step: 1,
      title: 'Site the enclosure',
      description:
        'A sealed PVC enclosure holds humidity far better than a glass terrarium with a screen top. Place it on a stable surface away from drafts and HVAC vents.',
    },
    {
      step: 2,
      title: 'Lay deep humidity-holding substrate',
      description:
        'Spread 3-4 inches of cypress mulch or a cypress/coir/sphagnum mix across the entire floor. Mist lightly so the substrate is damp but never waterlogged. The deeper the layer, the more stable the ambient humidity.',
    },
    {
      step: 3,
      title: 'Mount the heat source overhead',
      description:
        'A deep heat projector or halogen flood bulb sits centered over the warm-end basking branch, 8-12 inches above the planned basking surface. Wire through the proportional dimming thermostat. If using UVB, mount the low-output T5 HO across one-third of the enclosure length.',
    },
    {
      step: 4,
      title: 'Place two identical snug hides',
      description:
        'Set the warm hide directly under or beside the basking spot. Set the cool hide at the opposite end. Both hides must be small enough that the coiled snake touches the walls — open or loose hides will be ignored and the snake will refuse to use the cool side at all. Identical hides on both ends mean the snake never trades security for temperature.',
    },
    {
      step: 5,
      title: 'Add water dish, decor, and leaf litter',
      description:
        'Place a heavy water dish big enough to soak in on the cool side. Add sturdy horizontal branches at floor and mid-height, cork-bark slabs leaning against the walls, and leaf litter scattered across the substrate surface.',
    },
    {
      step: 6,
      title: 'Calibrate the gradient and humidity over 48-72 hours (no animal yet)',
      description:
        'Run the full cycle for 2-3 days. Verify with an IR temp gun: basking surface 88-92°F, ambient 80-84°F, cool side 75-78°F. Verify humidity at 55-65% during the day, 60-70% at night. If humidity is low, add more sphagnum moss to the substrate or partially cover any screen vents (never block them completely).',
    },
    {
      step: 7,
      title: 'Introduce the snake and run a 14-day quarantine of attention',
      description:
        'Move the snake in during the evening — ball pythons are nocturnal and will explore at night. Do not feed for 7-10 days after the move. Watch hide use, basking, water-soaking, and stool. Re-verify humidity in week one (substrate dries out as it equilibrates).',
    },
  ],
  commonMistakes: [
    'Hides that are too big — ball pythons feel exposed in oversized hides and become stressed feeders.',
    'Hides only on the warm side — snake never uses the cool side because it has no security shelter there.',
    'Screen-top glass tank — humidity bleeds out continuously; the keeper fights humidity every day. A sealed PVC enclosure is the structural fix.',
    'No basking surface — under-tank heat tape alone gives the snake belly heat but no surface basking opportunity. Recent literature favors an overhead surface basking spot in addition to or instead of belly heat.',
    'Pine or cedar substrate — toxic, repeatedly cited in case reports.',
    'Letting humidity stay over 75% all the time — chronic scale rot and respiratory infections follow.',
  ],
  maintenanceSchedule: [
    {
      daily: 'Spot-clean feces or shed; refill water dish; check humidity and temperature.',
      weekly: 'Mist the substrate lightly; deep-clean water dish; record weight monthly or weekly for breeding-age females.',
      monthly: 'Replace top half of substrate; full enclosure wipe-down; replace any moldy decor; check basking surface temperature.',
    },
  ],
  faqs: [
    {
      question: 'Do ball pythons need overhead light?',
      answer:
        'Ball pythons are nocturnal, but they still benefit from a consistent day-night photoperiod and from low-level UVB exposure where possible. A deep heat projector (no visible light) is a popular nocturnal-friendly heat source. Visible light should follow a 12-hour cycle and turn off at night.',
    },
    {
      question: 'How big should the hides be?',
      answer:
        'Snug. The coiled snake should touch the walls of the hide. Oversized hides leave the snake feeling exposed and unable to thermoregulate confidently. Identical snug hides on warm and cool ends are the structural fix — the snake never trades security for temperature.',
    },
    {
      question: 'What humidity drives ball-python sheds?',
      answer:
        '55-65% ambient during normal conditions; bump to 70-80% briefly during the shed cycle. Sustained humidity over 75% causes scale rot and respiratory infections — the spike is brief and tied to shed timing.',
    },
    {
      question: 'Why is my ball python not eating?',
      answer:
        'The single most common cause is environmental: temperatures off, humidity off, hide too open, or a recent move. Confirm the basking surface is 88-92°F, the cool side is 75-78°F, the hides are snug on both ends, and that no major changes happened in the last 7-14 days. Persistent fasting in a weight-stable adult is normal in winter and is not an emergency unless weight drops noticeably.',
    },
    {
      question: 'Is a 40-gallon tank enough for an adult?',
      answer:
        'No. 4x2x2 ft is the modern minimum — anything smaller cannot maintain a real thermal gradient or stable ambient humidity. Larger sealed-PVC enclosures are the upgrade direction.',
    },
  ],
  citedSources: [
    {
      name: "Mader's Reptile and Amphibian Medicine and Surgery — Python regius husbandry and infectious disease chapters",
      url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
    },
    {
      name: 'Journal of Herpetological Medicine and Surgery — Ball python dysecdysis and respiratory disease',
      url: 'https://meridian.allenpress.com/jhms',
    },
    {
      name: 'ARAV — Continuing-education resources on snake husbandry and welfare',
      url: 'https://arav.org/resources/',
    },
    {
      name: 'Association of Avian Veterinarians (AAV) — exotic-animal reference texts where reptile content overlaps',
      url: 'https://www.aav.org/',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────
// 4. Crested Gecko — arboreal, vertical-orientation build
// ─────────────────────────────────────────────────────────────────────

const crestedGeckoBuild: VivariumBuild = {
  slug: 'crested-gecko-build',
  speciesName: 'Crested Gecko',
  scientificName: 'Correlophus ciliatus',
  buildName: 'Arboreal Bioactive Vivarium Build',
  suitableFor: 'beginner',
  shortDescription:
    'A 18x18x36 vertical bioactive build for Correlophus ciliatus: dense vertical hardscape, broad-leaf foliage, moderate humidity with a daily dry-down, and ambient room-temperature heat.',
  overview:
    'Crested geckos are arboreal nocturnal geckos endemic to the southern islands of New Caledonia. The build prioritizes vertical orientation, dense climbing structure and broad-leaf foliage for security, moderate humidity (60-80% with a daily dry-down to 50%), and room-temperature ambient heat — the species does not need a hot basking site. The recommended footprint is 18x18x36 inches for one adult, with 24x18x36 as a comfortable upgrade.',
  enclosureSize: {
    min: '18"L x 18"D x 24"H for a juvenile or sub-adult',
    recommended: '18"L x 18"D x 36"H for one adult',
    ideal: '24"L x 18"D x 36"H or larger bioactive setup',
  },
  temperatureGradient: {
    basking: '78-82°F at the top of the enclosure (no dedicated basking bulb required if room is in range)',
    ambient: '72-78°F mid-enclosure',
    cool: '70-74°F at the bottom of the enclosure',
    nightDrop: '65-72°F overnight; no supplemental heat needed in most homes',
  },
  humidityRange: {
    day: '60-80% relative humidity with a daily dry-down to ~50%',
    night: '70-90% relative humidity (post-mist peak)',
  },
  lighting: {
    uvb: 'Optional. Low-output T5 HO 5-7% UVB or compact UVB at the top of the enclosure, targeting UVI 0.5-1.5 at the gecko\'s typical perch height (Ferguson Zone 1). Crested geckos are nocturnal but recent literature supports a modest UVB benefit even with dietary D3 from MRP diet powders. Replace every 12 months.',
    basking: 'No dedicated basking bulb unless the room sits below 70°F. A low-wattage 25-40W halogen at the top can supplement in cold rooms.',
    photoperiod: '12 hours year-round; lights off at night for natural activity.',
  },
  substrate: [
    'Bioactive soil mix: organic topsoil + sphagnum moss + leaf litter + cleanup-crew layer (springtails, isopods)',
    'Pre-mixed bioactive substrate from a reptile-specialty vendor',
    'Paper towel for quarantine, juvenile rearing, and post-purchase observation',
    'AVOID gravel, sand, and crushed-corn-cob substrates (impaction risk if accidentally ingested during prey-feeding)',
  ],
  hides: [
    {
      type: 'Cork-bark vertical tube (high)',
      placement: 'Upper third of the enclosure — primary daytime sleep shelter',
    },
    {
      type: 'Cork-bark slab (mid)',
      placement: 'Mid-enclosure leaning against the back wall — secondary cover',
    },
    {
      type: 'Leaf-litter / planted floor cover',
      placement: 'Bottom of the enclosure — ground-level security for nighttime activity',
    },
  ],
  waterFeatures:
    'A small water dish at the floor and a daily mist (1-2 times per day) that allows droplets to collect on leaves — most crested geckos drink off leaves and decor, not from the dish. Allow a daily dry-down to roughly 50% to prevent chronic over-humidity.',
  decorations: [
    'Dense broad-leaf foliage (live pothos, philodendron, or artificial broad-leaf plants) covering the upper two-thirds',
    'Cork-bark vertical tubes and slabs as climbing and shelter structure',
    'Diagonal hardwood branches creating multiple perch heights',
    'Magnetic ledges or cork-bark shelves for night-time perching at multiple heights',
  ],
  heatingMethod:
    'Ambient room temperature in most homes — crested geckos do well at 72-78°F ambient and do not need a basking lamp if the room sits in range. If the room drops below 70°F, add a low-wattage 25-40W halogen at the top on a thermostat, or a thermostat-controlled deep heat projector. Heat from above; never use under-tank mats for an arboreal nocturnal species.',
  requiredEquipment: [
    {
      category: 'Enclosure',
      examples: [
        { name: '18x18x36 in front-opening glass terrarium (example product)', priceRange: '$180-$320' },
        { name: '18x18x36 in PVC vertical enclosure', priceRange: '$250-$450' },
      ],
    },
    {
      category: 'UVB lighting (optional)',
      examples: [
        { name: 'T5 HO 14W 5-7% UVB linear fixture (18-inch)', priceRange: '$45-$90' },
      ],
    },
    {
      category: 'Heat (if needed)',
      examples: [
        { name: 'Low-wattage 25W or 40W halogen flood bulb', priceRange: '$8-$15' },
        { name: 'Proportional dimming thermostat', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'Substrate',
      examples: [
        { name: 'Bioactive substrate mix (10 quart)', priceRange: '$20-$45' },
        { name: 'Organic topsoil (40 lb bag)', priceRange: '$8-$12' },
        { name: 'Sphagnum moss (bulk bag)', priceRange: '$10-$25' },
        { name: 'Cleanup-crew bundle (springtails + isopods)', priceRange: '$20-$45' },
      ],
    },
    {
      category: 'Hardscape & decor',
      examples: [
        { name: 'Cork-bark vertical tube (large)', priceRange: '$25-$55' },
        { name: 'Cork-bark slab (12-18 in)', priceRange: '$10-$25' },
        { name: 'Artificial broad-leaf vines and plants (multi-pack)', priceRange: '$20-$45' },
        { name: 'Live pothos cuttings (rooted)', priceRange: '$8-$20' },
      ],
    },
    {
      category: 'Measurement',
      examples: [
        { name: 'Infrared temperature gun', priceRange: '$20-$40' },
        { name: 'Min/max digital thermometer with probe', priceRange: '$15-$30' },
        { name: 'Digital hygrometer with probe', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Water & misting',
      examples: [
        { name: 'Shallow ceramic water dish', priceRange: '$8-$20' },
        { name: 'Manual pump spray bottle', priceRange: '$8-$15' },
        { name: 'Automatic misting system (single-zone)', priceRange: '$150-$300' },
      ],
    },
    {
      category: 'Diet (crested-gecko-specific)',
      examples: [
        { name: 'Meal Replacement Powder (MRP) crested gecko diet', priceRange: '$15-$35' },
      ],
    },
  ],
  buildSteps: [
    {
      step: 1,
      title: 'Choose orientation and site the enclosure',
      description:
        'Crested geckos need vertical space. An 18x18x36 vertical glass or PVC terrarium is the modern minimum. Place away from windows, drafts, and HVAC vents.',
    },
    {
      step: 2,
      title: 'Build the drainage and bioactive substrate',
      description:
        'For a bioactive setup, lay 1-2 inches of LECA / hydroball drainage, a mesh divider, then 3-4 inches of bioactive substrate (organic topsoil + sphagnum moss + leaf litter). Seed with springtails and isopods. For a non-bioactive setup, paper towel is fine for the first 30-60 days.',
    },
    {
      step: 3,
      title: 'Install vertical hardscape',
      description:
        'Position a large cork-bark vertical tube against one back corner, a cork-bark slab leaning against the opposite wall, and 2-3 diagonal hardwood branches creating a connected climbing network across the upper two-thirds of the enclosure.',
    },
    {
      step: 4,
      title: 'Add dense broad-leaf foliage',
      description:
        'Cover the upper two-thirds with broad-leaf plants — live pothos and philodendron if you can light them, otherwise high-quality artificial vines and broad-leaf plants. The animal needs visual cover and surfaces to drink water droplets off after misting.',
    },
    {
      step: 5,
      title: 'Mount lighting (if used) and the misting system',
      description:
        'If the room is below 70°F or you are running a UVB fixture, mount lighting on top of the screen and connect to a timer (UVB) or thermostat (heat). Install the misting nozzles to wet leaves and hardscape; do not aim directly at the gecko.',
    },
    {
      step: 6,
      title: 'Calibrate humidity cycles over 48-72 hours (no animal yet)',
      description:
        'Run the misting schedule for 2-3 days. Verify ambient temperature 72-78°F, humidity peaks 70-90% post-mist, and dries back to ~50% before the next mist. If humidity stays over 80% for hours after a mist, reduce mist volume or improve ventilation.',
    },
    {
      step: 7,
      title: 'Introduce the gecko and observe for 14 days',
      description:
        'Move the gecko in during the evening. Observe perch use, MRP feeding response (offer in a small ledge dish on the upper hardscape), and shed timing. Re-verify humidity cycle in week one.',
    },
  ],
  commonMistakes: [
    'Horizontal terrarium — crested geckos need vertical space; a 36-inch tall enclosure is the standard.',
    'Continuous high humidity (over 80% all day) — leads to chronic respiratory problems and mold. Allow a daily dry-down to ~50%.',
    'Hot basking lamp in a warm room — crested geckos overheat above 82-84°F; many keepers run no heat lamp at all.',
    'Sparse foliage — the gecko feels exposed, hides constantly, and stops feeding. Dense broad-leaf cover is structural, not aesthetic.',
    'Insect-heavy diet without MRP — a commercial Meal Replacement Powder diet is the modern keeper standard and supports long-term calcium and vitamin balance.',
  ],
  maintenanceSchedule: [
    {
      daily: 'Mist 1-2 times to peak humidity; check temperature; remove uneaten MRP after 24 hours.',
      weekly: 'Refresh MRP ledge dish; spot-clean visible droppings; wipe down glass; record weight monthly or as needed.',
      monthly: 'Top off substrate; replace damaged decor; deep-clean water dish; check UVI if UVB is fitted.',
    },
  ],
  faqs: [
    {
      question: 'Do crested geckos need a heat lamp?',
      answer:
        'In most homes, no. The species is happy at 72-78°F ambient and overheats above 82-84°F. Add supplemental heat only if the room consistently drops below 70°F, and use a low-wattage 25-40W halogen on a thermostat at the top of the enclosure if you do.',
    },
    {
      question: 'Is UVB necessary for crested geckos?',
      answer:
        'Not strictly required if a commercial MRP diet is the primary food source — those diets contain calibrated D3. However, recent peer-reviewed literature supports a modest benefit from low-level UVB (Ferguson Zone 1, UVI 0.5-1.5) for any reptile, including nocturnal species. It is a positive-but-optional addition.',
    },
    {
      question: 'How often should I mist?',
      answer:
        '1-2 times per day depending on ambient humidity. The key pattern is a humidity peak (70-90%) after misting that dries back to roughly 50% before the next mist. Continuous high humidity causes mold and respiratory issues.',
    },
    {
      question: 'Can I house two crested geckos together?',
      answer:
        'Two females sometimes if the enclosure is large enough (24x18x36 or bigger) and both eat. Two males will fight. Male+female pairing leads to year-round eggs that stress the female. The default safer setup is one gecko per enclosure.',
    },
    {
      question: 'Do they really only eat MRP?',
      answer:
        'A balanced commercial Meal Replacement Powder diet covers complete nutrition for crested geckos. Many keepers also offer dusted feeder insects (gut-loaded crickets, dubia roaches) 1-2 times per week as enrichment, but MRP can be the sole nutritional source.',
    },
  ],
  citedSources: [
    {
      name: "Mader's Reptile and Amphibian Medicine and Surgery — Correlophus husbandry and arboreal reptile chapters",
      url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
    },
    {
      name: 'Journal of Herpetological Medicine and Surgery — Arboreal gecko husbandry and MBD reviews',
      url: 'https://meridian.allenpress.com/jhms',
    },
    {
      name: 'ARAV — Continuing-education resources on bioactive vivarium design',
      url: 'https://arav.org/resources/',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────
// 5. Corn Snake — temperate, low-humidity simple-feeders build
// ─────────────────────────────────────────────────────────────────────

const cornSnakeBuild: VivariumBuild = {
  slug: 'corn-snake-build',
  speciesName: 'Corn Snake',
  scientificName: 'Pantherophis guttatus',
  buildName: 'Temperate Low-Humidity Build',
  suitableFor: 'beginner',
  shortDescription:
    'A 4x2x2 temperate-zone build for adult Pantherophis guttatus: aspen substrate, 40-60% ambient humidity, simple two-hide layout, and an overhead basking spot at 85-90°F.',
  overview:
    'Corn snakes are temperate-zone colubrids native to the southeastern United States. The build prioritizes a simple, low-humidity layout (40-60% ambient), aspen bedding for natural burrowing, two secure hides on warm and cool ends, an overhead basking spot at 85-90°F, and a true cool side at 70-75°F. Adult footprint minimum is 4 feet long by 2 feet deep by 2 feet tall. Corn snakes are well-suited to beginners and are documented as one of the simplest, most reliable feeders in the keeper-veterinary literature.',
  enclosureSize: {
    min: '48"L x 24"D x 24"H (4x2x2 ft) for one adult',
    recommended: '48"L x 24"D x 24"H to 60"L x 24"D x 24"H',
    ideal: '72"L x 24"D x 24"H bioactive setup with climbing structure',
  },
  temperatureGradient: {
    basking: '85-90°F surface temperature at the warm-side basking spot',
    ambient: '78-82°F mid-enclosure',
    cool: '70-75°F at the cool end',
    nightDrop: '65-72°F overnight; no visible light',
  },
  humidityRange: {
    day: '40-50% ambient relative humidity',
    night: '45-60% ambient relative humidity',
  },
  lighting: {
    uvb: 'Optional. Low-output T5 HO 5-7% UVB across the warm-end third targets UVI 0.5-1.5 at the snake\'s typical perch height (Ferguson Zone 1). Replace every 12 months. Recent literature supports the modest benefit; older keeper literature treated it as unnecessary.',
    basking: 'Low-wattage halogen flood basking bulb (50-75W) on a proportional dimming thermostat — overhead surface basking spot.',
    photoperiod: '12 hours year-round with optional seasonal variation (10 hours winter, 14 hours summer) supporting natural cycle.',
  },
  substrate: [
    'Aspen shavings (the keeper-default for temperate colubrids — natural burrowing, low dust, no aromatic oils)',
    'Cypress mulch if you want better moisture retention without going humid',
    'Organic topsoil + leaf litter for bioactive setups',
    'AVOID cedar and pine (toxic aromatic oils — repeatedly cited in respiratory case reports)',
  ],
  hides: [
    {
      type: 'Warm hide',
      placement: 'On the warm side, directly under or beside the basking spot — security shelter in warmth',
    },
    {
      type: 'Cool hide',
      placement: 'On the cool end — identical security at the lower temperature',
    },
    {
      type: 'Optional humid hide / moss box',
      placement: 'Mid-enclosure during shed cycles only — corn snakes do not need continuous humid hides',
    },
  ],
  waterFeatures:
    'A medium water dish big enough for the snake to soak in occasionally, on the cool side. Refill daily; deep-clean weekly. Corn snakes will drink and occasionally soak before shed.',
  decorations: [
    'Sturdy horizontal branches at floor and mid-height — corn snakes climb more than older literature suggested',
    'Cork-bark slabs leaning against walls for cover',
    'Stacked flat rocks creating a basking platform under the overhead bulb',
    'Live or artificial broad-leaf plants for visual cover',
  ],
  heatingMethod:
    'Overhead halogen on a proportional dimming thermostat — primary heat source. Surface basking spot is the modern recommendation over under-tank heat tape, which heats the floor without producing a discrete sun-warmth area the snake can choose. A thermostat-controlled deep heat projector can supplement at night in colder rooms.',
  requiredEquipment: [
    {
      category: 'Enclosure',
      examples: [
        { name: '4x2x2 ft front-opening PVC enclosure (example product)', priceRange: '$350-$700' },
        { name: '4x2x2 ft sealed-wood vivarium', priceRange: '$250-$500' },
      ],
    },
    {
      category: 'UVB lighting (optional)',
      examples: [
        { name: 'T5 HO 24W 5-7% UVB linear fixture (24-inch)', priceRange: '$50-$95' },
      ],
    },
    {
      category: 'Basking heat',
      examples: [
        { name: 'Halogen flood basking bulb, 50W or 75W', priceRange: '$8-$15' },
        { name: 'Ceramic-socket dome fixture', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Thermostat',
      examples: [
        { name: 'Proportional dimming thermostat (single-channel)', priceRange: '$120-$220' },
      ],
    },
    {
      category: 'Hides',
      examples: [
        { name: 'Resin warm hide (snake-fitted)', priceRange: '$15-$35' },
        { name: 'Resin cool hide (snake-fitted)', priceRange: '$15-$35' },
        { name: 'Moss box for shed cycles', priceRange: '$8-$20' },
      ],
    },
    {
      category: 'Substrate',
      examples: [
        { name: 'Aspen shavings (large bag)', priceRange: '$15-$30' },
        { name: 'Cypress mulch (large bag)', priceRange: '$15-$25' },
      ],
    },
    {
      category: 'Measurement',
      examples: [
        { name: 'Infrared temperature gun', priceRange: '$20-$40' },
        { name: 'Min/max digital thermometer with probe', priceRange: '$15-$30' },
        { name: 'Digital hygrometer with probe', priceRange: '$15-$30' },
      ],
    },
    {
      category: 'Water',
      examples: [{ name: 'Heavy ceramic or plastic water dish (mid-size)', priceRange: '$10-$30' }],
    },
  ],
  buildSteps: [
    {
      step: 1,
      title: 'Site and assemble the enclosure',
      description:
        'A sealed PVC or sealed-wood enclosure holds heat better than a screen-top glass tank. Place on a stable surface away from drafts. Confirm the floor can support a 75-100 lb loaded enclosure.',
    },
    {
      step: 2,
      title: 'Lay 3-4 inches of aspen substrate',
      description:
        'Spread 3-4 inches of aspen shavings across the entire floor. Aspen supports natural burrowing behavior, is low-dust, and stays dry at corn-snake humidity targets. Avoid cedar and pine, which release aromatic oils that have been linked to respiratory disease in the case-report literature.',
    },
    {
      step: 3,
      title: 'Mount the basking heat overhead',
      description:
        'Position the halogen flood dome over the warm-end basking platform, 10-12 inches above the planned basking surface. Wire through the proportional dimming thermostat. If using UVB, mount the low-output T5 HO across the warm third of the enclosure.',
    },
    {
      step: 4,
      title: 'Place two secure hides',
      description:
        'Set the warm hide on the warm end, the cool hide at the opposite end. Both hides should fit the coiled snake snugly. Identical hides on both ends prevent the snake from trading security for temperature.',
    },
    {
      step: 5,
      title: 'Add water dish, branches, and decor',
      description:
        'Place a medium water dish on the cool side. Add 1-2 sturdy horizontal branches for climbing, cork-bark slabs leaning against the walls, and stacked flagstone or smooth rocks as a basking platform under the overhead bulb.',
    },
    {
      step: 6,
      title: 'Calibrate the gradient over 48-72 hours (no animal yet)',
      description:
        'Run the full cycle for 2-3 days. Verify with an IR temp gun: basking surface 85-90°F, ambient 78-82°F, cool side 70-75°F. Confirm humidity at 40-50% during the day. Tune bulb wattage and ventilation before introducing the animal.',
    },
    {
      step: 7,
      title: 'Introduce the snake and observe for 14 days',
      description:
        'Move the snake in during the evening — corn snakes are most active at dusk. Wait 7-10 days before the first feed. Watch hide use, basking, and stool. Re-verify temperature and humidity in week one.',
    },
  ],
  commonMistakes: [
    'Cedar or pine substrate — toxic aromatic oils; documented respiratory disease in the case-report literature.',
    'Hides too big — the coiled snake should touch the walls of the hide; oversized hides leave the snake exposed and stressed.',
    'Only one hide — the snake refuses to use the warm or cool side because it has no security there. Two hides, one each end, is the modern minimum.',
    'Under-tank heat tape with no thermostat — risk of thermal burns documented in J Herp Med Surg.',
    'Humidity over 70% chronically — corn snakes are a temperate, low-humidity species; over-humid setups cause scale rot.',
  ],
  maintenanceSchedule: [
    {
      daily: 'Spot-clean feces or shed; refill water dish; verify warm-side basking and cool-side temperatures.',
      weekly: 'Deep-clean water dish; sift aspen substrate; record weight monthly or as needed.',
      monthly: 'Replace top half of substrate; full enclosure wipe-down; check basking-bulb function; replace decor as needed.',
    },
  ],
  faqs: [
    {
      question: 'Are corn snakes really beginner-friendly?',
      answer:
        'Yes — they are widely cited in the keeper-veterinary literature as one of the simplest, most reliable feeders in the colubrid family. They tolerate a wide temperature range, eat frozen-thawed rodents on a consistent schedule, and have a low humidity target that does not require constant misting.',
    },
    {
      question: 'Do I need a hot side AND a cool side?',
      answer:
        'Yes. The basking spot (85-90°F) drives digestion; the cool side (70-75°F) lets the snake escape heat. Without a true gradient the snake cannot behaviorally thermoregulate and feeding response and digestion suffer.',
    },
    {
      question: 'Is aspen bedding really better than cedar or pine?',
      answer:
        'Yes. Cedar and pine contain aromatic oils that are linked to respiratory disease in reptiles in the case-report literature. Aspen is low-dust, dry, and supports natural burrowing without any aromatic-oil risk.',
    },
    {
      question: 'How often do corn snakes eat?',
      answer:
        'Adults eat one appropriately-sized frozen-thawed rodent every 7-14 days. Juveniles eat more often (every 5-7 days). Fasting through brumation in winter is normal for adults and is not a feeding problem.',
    },
    {
      question: 'Do corn snakes climb?',
      answer:
        'Yes, more than older keeper literature suggested. Add 1-2 sturdy horizontal branches and some vertical structure. Corn snakes will use mid-height perches and benefit from the additional behavioral surface.',
    },
  ],
  citedSources: [
    {
      name: "Mader's Reptile and Amphibian Medicine and Surgery — Pantherophis husbandry chapter",
      url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
    },
    {
      name: 'Journal of Herpetological Medicine and Surgery — Colubrid husbandry and thermal-burn case literature',
      url: 'https://meridian.allenpress.com/jhms',
    },
    {
      name: 'ARAV — Continuing-education resources on snake husbandry',
      url: 'https://arav.org/resources/',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────
// Export catalog
// ─────────────────────────────────────────────────────────────────────

export const VivariumBuilds: VivariumBuild[] = [
  beardedDragonBuild,
  leopardGeckoBuild,
  ballPythonBuild,
  crestedGeckoBuild,
  cornSnakeBuild,
]

export function getVivariumBuildBySlug(slug: string): VivariumBuild | undefined {
  return VivariumBuilds.find((b) => b.slug === slug)
}

export function getRelatedVivariumBuilds(slug: string, max = 3): VivariumBuild[] {
  const current = getVivariumBuildBySlug(slug)
  if (!current) return []
  return VivariumBuilds.filter((b) => b.slug !== slug).slice(0, max)
}

/** Pretty difficulty label for badges. */
export function difficultyLabel(d: BuildDifficulty): string {
  switch (d) {
    case 'beginner':
      return 'Beginner-Friendly'
    case 'intermediate':
      return 'Intermediate'
    case 'advanced':
      return 'Advanced'
  }
}

/** Returns the slug of the matching /species/ route (1:1 mapping). */
export function speciesSlugFor(build: VivariumBuild): string {
  return build.slug.replace(/-build$/, '')
}
