/**
 * Reptile husbandry deep-dive topic catalog — Lizard.com
 *
 * Eight foundational husbandry topics consumed by the dynamic route at
 * /husbandry/[slug]/page.tsx to render one long-tail SEO page per topic.
 *
 * Editorial posture:
 *   - Foundational keeper-education content. Funnels into the species and
 *     equipment pages (already published under /species and /reviews).
 *   - Source posture is keeper-literature: Mader's Reptile and Amphibian
 *     Medicine and Surgery (RAMS), the Journal of Herpetological Medicine
 *     and Surgery (J Herp Med Surg), ARAV continuing-education materials,
 *     AAV reference texts where reptile content overlaps, and peer-reviewed
 *     Reptiles Magazine content.
 *   - No in-house measurements. Where we cite Solarmeter or thermometer
 *     numbers, they are from the published Ferguson Zone framework or the
 *     vendor / peer-reviewed literature, not bench tests by Lizard.com.
 *   - No brand endorsements. Product recommendations are by category
 *     (e.g. "T5 HO UVB fixture, 12% strength for arid-zone baskers")
 *     not by brand promise.
 *
 * Slug-collision rule:
 *   /husbandry/ is a NEW top-level tree; all 8 slugs in this file are unique
 *   to the husbandry hub and will not collide with /health/, /setup/, or
 *   /species/ routes.
 */

export interface SpeciesClassRecommendation {
  class: string
  recommendation: string
}

export interface HusbandryProduct {
  item: string
  purpose: string
  priceRange: string
  /** When an ASIN is known we link via /go/amazon/<ASIN>. Optional. */
  amazonAsin?: string
}

export interface HusbandrySource {
  name: string
  url: string
}

export interface HusbandryFAQ {
  question: string
  answer: string
}

export interface HusbandryTopic {
  slug: string
  topicName: string
  /** Short tag used in hero subtitle / category badge */
  category: string
  /** Icon shown in hub cards — keep emoji-light per house style. Used only on hub. */
  icon: string
  /** Hero TL;DR / page-level subtitle */
  shortDescription: string
  whatItIs: string
  whyItMatters: string[]
  bySpeciesClass: SpeciesClassRecommendation[]
  commonMistakes: string[]
  whatToBuy: HusbandryProduct[]
  measurementTools?: string[]
  howToMonitor: string[]
  faqs: HusbandryFAQ[]
  citedSources: HusbandrySource[]
  /** Related slugs within the husbandry tree, used to cross-link in the sidebar. */
  relatedSlugs?: string[]
  /** Related health condition slugs (used in the sidebar Related Conditions block). */
  relatedHealthSlugs?: string[]
}

export const HusbandryTopics: HusbandryTopic[] = [
  // ───────────────────────────────────────────────────────────────────
  // 1. UVB Lighting
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'uvb-lighting',
    topicName: 'UVB Lighting for Reptiles',
    category: 'Lighting',
    icon: 'UVB',
    shortDescription:
      'Bulb-type selection, Ferguson-Zone UVI targets, mounting distance, and the replacement schedule most keepers miss.',
    whatItIs:
      'UVB (ultraviolet B, 290-320 nm) is the wavelength band reptiles use to synthesize vitamin D3 in the skin. Vitamin D3 is required to absorb dietary calcium. Without adequate UVB or carefully managed dietary D3, calcium absorption fails and metabolic bone disease (MBD) follows. UVB output is measured in UV Index (UVI) at the basking site with a calibrated meter such as the Solarmeter 6.5; the keeper-facing Ferguson Zone framework maps species microhabitats to UVI bands 1-4.',
    whyItMatters: [
      'Inadequate UVB is the single most common upstream cause of metabolic bone disease in captive reptiles.',
      'Compact and coil UVB bulbs degrade faster than T5 HO linear bulbs even when they still emit visible light — output is invisible to the eye, so a bulb that looks fine may be biologically dead.',
      'UVB output drops with distance — a bulb correctly sized at 12 inches is undosed at 18 inches and overdosed at 6 inches.',
      'Mesh screens block 30-50% of UVB; UVB measured above the mesh is not what the animal receives.',
      'Solarmeter-verified output is the only reliable check. Brand and label alone do not tell you what is reaching the basking site.',
    ],
    bySpeciesClass: [
      {
        class: 'Desert / arid (Ferguson Zone 3-4)',
        recommendation:
          'Bearded dragons, uromastyx, sulcata and Russian tortoises, blue-tongue skinks (Northern), savannah monitors: 12% T5 HO linear UVB at 12-18 inches above the basking site (per fixture instructions). Target UVI 3.0-4.5 at the basking surface.',
      },
      {
        class: 'Tropical / humid forest (Ferguson Zone 2-3)',
        recommendation:
          'Crested geckos, day geckos, panther chameleons, veiled chameleons, blue-tongue skinks (Indonesian): 6% T5 HO at 10-14 inches. Target UVI 1.0-2.6 at the highest perch the animal regularly uses.',
      },
      {
        class: 'Crepuscular / shade-dweller (Ferguson Zone 1-2)',
        recommendation:
          'Leopard geckos, gargoyle geckos, ball pythons, corn snakes: 5-6% T5 HO or 2-5% compact, low and indirect. Target UVI 0-1.0 at the basking surface. Recent literature supports providing low-level UVB to species historically housed without it; metabolic-bone-disease risk reduction outweighs the previous default of zero UVB.',
      },
      {
        class: 'Aquatic / semi-aquatic',
        recommendation:
          'Sliders, painted turtles, musk turtles: T5 HO 5-10% mounted 12 inches above the basking platform. Splash exposure shortens bulb life — replace on a schedule, not by appearance.',
      },
    ],
    commonMistakes: [
      'Using a compact coil bulb in a large enclosure — output cone is too narrow to cover the basking zone.',
      'Counting bulb age from purchase rather than from first use; reptile UVB output drops sharply at 6-12 months even if visible light continues.',
      'Mounting UVB behind a glass top — glass blocks the entire UVB band. Use mesh or open-top fixtures only.',
      'Measuring UVB above the mesh or above the basking branch; the only meaningful number is at the surface the animal occupies.',
      'Pairing dietary D3 supplementation with UVB at uncalibrated doses — risks hypervitaminosis D in species that synthesize D3 efficiently.',
    ],
    whatToBuy: [
      {
        item: 'T5 HO linear UVB fixture (24-48 inch, reflector-equipped)',
        purpose: 'Primary UVB source for the basking site; broad output cone covers the gradient.',
        priceRange: '$60-$120',
      },
      {
        item: 'T5 HO UVB bulb — 6% for forest, 12% for arid (sized to fixture)',
        purpose: 'Replaceable bulb; the fixture is the long-lived component.',
        priceRange: '$30-$50',
      },
      {
        item: 'Solarmeter 6.5 UV Index meter',
        purpose: 'Verifies UVI at the basking site and tracks bulb decay over the year.',
        priceRange: '$220-$260',
      },
      {
        item: 'Mesh-top enclosure or open-top vivarium',
        purpose: 'Allows UVB to reach the animal; glass tops block UVB entirely.',
        priceRange: '$150-$600 (varies by size)',
      },
    ],
    measurementTools: [
      'Solarmeter 6.5 — handheld UVI meter, the reference instrument in keeper literature',
      'Solarmeter 6.2 — UVB irradiance meter (µW/cm²) for keepers tracking raw output',
    ],
    howToMonitor: [
      'Measure UVI at the basking surface with a Solarmeter 6.5 at install and once per quarter.',
      'Record the date the bulb was first energized — replacement schedule runs from that date, not from purchase.',
      'Replace T5 HO UVB bulbs every 12 months unless your Solarmeter readings remain in-zone at month 12; replace compact bulbs every 6 months.',
      'Inspect the fixture reflector annually — corroded or dust-coated reflectors cut effective output substantially.',
      'Watch the animal for early MBD signs (tremor, soft jaw, kinks in the spine, reduced activity) and escalate husbandry review immediately if seen.',
    ],
    faqs: [
      {
        question: 'Do I really need UVB for a leopard gecko or ball python?',
        answer:
          'Current keeper literature, including recent J Herp Med Surg reviews and ARAV continuing-education material, supports low-level UVB even for species long kept without it. The downside risk is small; the upside (reduced MBD incidence, better calcium economy, more natural behavior) is meaningful. Use a 5-6% T5 HO or 2-5% compact at the cool side so the animal can choose its exposure.',
      },
      {
        question: 'How often should I replace a UVB bulb?',
        answer:
          'Linear T5 HO bulbs hold useful output for about 12 months in normal reptile use; compact and coil bulbs fall off at 6 months. The visible-light output of a UVB bulb does not predict its UVB output — a bulb that still lights up may be biologically dead. Confirm with a Solarmeter 6.5 or replace on schedule.',
      },
      {
        question: 'Can I use a UVB bulb behind glass?',
        answer:
          'No. Standard window and aquarium glass blocks the entire UVB band. UVB must reach the animal through mesh or open air. Mesh itself cuts UVB by 30-50%, which is why mounting distance is specified relative to the mesh top, not the bulb housing.',
      },
      {
        question: 'Is the Ferguson Zone for my species the same in every enclosure?',
        answer:
          'The Ferguson Zone is a target UVI range, not a bulb spec. The bulb and mounting distance you need to deliver that UVI depends on enclosure height, mesh density, basking-site position, and bulb age. Measure with a Solarmeter at the basking surface — never assume a label.',
      },
      {
        question: 'What is the difference between UVA, UVB, and UVI?',
        answer:
          'UVA (320-400 nm) influences reptile behavior and color vision. UVB (290-320 nm) drives vitamin D3 synthesis. UVI (UV Index) is the aggregated biological-weighting metric reported by meters like the Solarmeter 6.5 — it is the number you compare to Ferguson Zone targets.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery (3rd ed.) — Lighting chapter",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — UVB in captive reptiles',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV (Association of Reptilian and Amphibian Veterinarians) — Lighting resources',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Ferguson Zones in practice',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['basking-temperatures', 'calcium-d3-supplementation', 'thermoregulation-basics'],
    relatedHealthSlugs: ['metabolic-bone-disease', 'hypocalcemia', 'vitamin-a-deficiency'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 2. Basking Temperatures
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'basking-temperatures',
    topicName: 'Reptile Basking Temperatures',
    category: 'Temperature',
    icon: 'BSK',
    shortDescription:
      'Target basking temperatures by species class — desert, temperate, tropical — and how to deliver them without burning the animal.',
    whatItIs:
      'The basking site is the hottest point in the enclosure, where the reptile concentrates heat for digestion, immune function, and behavioral thermoregulation. Basking temperature is measured at the surface the animal contacts, not the air above it. A reptile that cannot reach its preferred basking temperature digests poorly, sheds poorly, and immune-suppresses; one that cannot leave the basking zone overheats and dies. The correct setup provides the target and a thermal escape.',
    whyItMatters: [
      'Reptile immune function is temperature-dependent — chronically under-temperature animals are more susceptible to respiratory infection and parasitic flares.',
      'Digestion fails below species-specific thresholds. Cold ball pythons regurgitate; cold beardies retain food and develop colonic dysbiosis.',
      'Surface temperature, not air temperature, is what the animal experiences. An infrared thermometer or temperature gun is the only honest way to measure it.',
      'Basking bulbs without thermostatic control routinely overshoot — thermal burns are one of the most common reptile veterinary emergencies.',
    ],
    bySpeciesClass: [
      {
        class: 'Desert / arid baskers',
        recommendation:
          'Bearded dragons 100-110°F (38-43°C) surface; uromastyx 120-130°F (49-54°C) surface; sulcata 95-100°F (35-38°C). All require a cool side at 75-85°F to allow thermoregulation.',
      },
      {
        class: 'Temperate / mediterranean species',
        recommendation:
          'Russian tortoises 90-95°F (32-35°C) basking, 70-75°F cool side; corn snakes 88-92°F basking, 75-80°F cool. Night drop into low 70s is normal and beneficial.',
      },
      {
        class: 'Tropical forest / humid species',
        recommendation:
          'Ball pythons 88-92°F (31-33°C) basking, 78-82°F cool; crested geckos 78-80°F (25-27°C) ambient with a 5°F warmer spot; veiled chameleons 85-90°F basking branch, 70-75°F lower zone.',
      },
      {
        class: 'Crepuscular / nocturnal species',
        recommendation:
          'Leopard geckos 88-92°F warm-side belly-heat surface, 75-80°F cool; tokay geckos 80-88°F warm side, 72-78°F cool. Overhead basking optional but helpful for diurnal vitamin D3 cycling.',
      },
    ],
    commonMistakes: [
      'Measuring air temperature with a dial thermometer stuck to the glass instead of surface temperature at the basking site.',
      'Running a basking bulb on a dimmer instead of a thermostat — dimmers do not stop overshoot when room temperature rises.',
      'No thermal gradient — the entire enclosure is at basking temp, so the animal has no cool side and chronically overheats.',
      'Stick-on heat pads under glass — radiant temperature on the surface is unpredictable and burns are common with no thermostat.',
      'Confusing "ambient" advice in care sheets with "basking" — these are two different numbers and both matter.',
    ],
    whatToBuy: [
      {
        item: 'Proportional or pulse-proportional thermostat',
        purpose: 'Holds basking temperature within ±1°F; the single most important safety device on a reptile enclosure.',
        priceRange: '$90-$200',
      },
      {
        item: 'Halogen flood (deep heat projector or PAR38 halogen) on the thermostat',
        purpose: 'Delivers concentrated radiant heat at the basking surface; the spectrum reptiles evolved to bask under.',
        priceRange: '$15-$45',
      },
      {
        item: 'Infrared temperature gun (laser-aimed)',
        purpose: 'Reads surface temperature directly at the basking site — the only honest measurement.',
        priceRange: '$20-$50',
      },
      {
        item: 'Digital min/max probe thermometer',
        purpose: 'Tracks 24-hour temperature extremes at the cool side and basking spot.',
        priceRange: '$15-$30',
      },
    ],
    measurementTools: [
      'Infrared temperature gun for surface readings',
      'Digital probe thermometer with min/max memory for 24-hour gradient',
      'Thermostat probe placed at the basking surface for the controller itself',
    ],
    howToMonitor: [
      'Take an infrared surface reading at the basking site once per day for the first week of any new setup.',
      'Once stable, spot-check weekly and after any room-temperature change (heater on, window open, season change).',
      'Watch behavior: a reptile that flattens on the basking site for long periods is cold; one that pants, gapes, or hides constantly is too hot.',
      'After feeding, the animal should bask noticeably — failure to bask post-meal in a known healthy reptile is a temperature problem until proven otherwise.',
    ],
    faqs: [
      {
        question: 'Air temperature or surface temperature?',
        answer:
          'Surface. The reptile sits on the basking site and absorbs radiant heat into its body wall — that is the temperature the animal actually experiences. Use an infrared temperature gun to read the surface; an air thermometer six inches away can be off by 15-20°F.',
      },
      {
        question: 'Do I need a thermostat?',
        answer:
          'Yes. Bulbs without thermostatic control overshoot whenever room temperature rises. Thermal burns are one of the most common reptile veterinary emergencies and are nearly always preventable with a proportional thermostat. The thermostat costs less than a single emergency vet visit.',
      },
      {
        question: 'Should temperatures drop at night?',
        answer:
          'For most species, yes — a 5-10°F night drop is normal and beneficial. Tropical species held at the same temperature day and night often eat poorly. The exception is hatchlings and convalescing animals, which may need a smaller drop.',
      },
      {
        question: 'My basking bulb says it gets to 100°F — why am I reading 85°F?',
        answer:
          'Manufacturer specs are usually at a fixed distance in a closed test rig. In a real enclosure, mounting distance, fixture type, basking-surface material, mesh top, and room temperature all change the delivered surface temperature. Always measure with an infrared gun; never trust the bulb label alone.',
      },
      {
        question: 'How long should the basking light be on?',
        answer:
          'Generally a 12-hour photoperiod, adjusted seasonally for temperate species that benefit from a 10-hour winter / 14-hour summer cycle. Always-on basking lights disrupt the diurnal cycle and depress feeding response.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Thermoregulation chapter",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Preferred Optimal Temperature Zones',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV continuing-education library — Thermal husbandry',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Basking and gradient guides',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['uvb-lighting', 'thermoregulation-basics', 'vivarium-sizing'],
    relatedHealthSlugs: ['thermal-burns', 'respiratory-infection', 'metabolic-bone-disease'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 3. Humidity Management
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'humidity-management',
    topicName: 'Reptile Humidity Management',
    category: 'Climate',
    icon: 'HUM',
    shortDescription:
      'Target relative humidity ranges by species, mistlers vs foggers vs misting systems, and the hygrometer pattern that survives keeper neglect.',
    whatItIs:
      'Humidity in a reptile enclosure is the relative humidity (RH) of the air the animal breathes, plus the available surface moisture for shedding, hydration, and microbial balance. Different species evolved at different RH ranges; deviation produces dysecdysis (stuck shed), respiratory infection, or eye and skin disease. RH is measured with a calibrated hygrometer placed in the zone the animal uses most.',
    whyItMatters: [
      'Stuck shed (dysecdysis) is almost always a humidity problem, and untreated stuck shed on the toes or tail tip causes circulatory loss and necrosis.',
      'Chronically high humidity in species evolved for dry climates predisposes to scale rot, respiratory infection, and tail-rot in monitors and tegus.',
      'Chronically low humidity in tropical species causes corneal disease in geckos, dysecdysis in chameleons, and persistent dehydration in ball pythons.',
      'A single ambient reading lies — humidity varies enormously between the substrate surface, mid-enclosure, and a screen top.',
    ],
    bySpeciesClass: [
      {
        class: 'Arid / desert',
        recommendation:
          'Bearded dragons, uromastyx, leopard geckos: 30-40% RH ambient with a single moist hide at 60-70%. Spike during shed is acceptable for 24-48 hours.',
      },
      {
        class: 'Temperate / mediterranean',
        recommendation:
          'Corn snakes, Russian tortoises, blue-tongue skinks (Northern): 40-60% RH with a humid hide. Tortoises burrow into damp substrate at night for microclimate moisture.',
      },
      {
        class: 'Tropical / humid forest',
        recommendation:
          'Ball pythons 55-65% RH baseline with 70-80% during shed; crested geckos 60-80% RH (dropping to 50% overnight); panther chameleons 60-80% RH with heavy misting.',
      },
      {
        class: 'High-humidity rainforest / amphibian-adjacent',
        recommendation:
          'Day geckos, frilled dragons in some climates, mossy leaf-tail geckos: 70-90% RH with daily mistlers or an automated misting system. Air movement is required to prevent mold.',
      },
    ],
    commonMistakes: [
      'Using a single cheap dial hygrometer — many are off by ±20% RH out of the box. Use a calibrated digital hygrometer.',
      'Sealing the enclosure to raise humidity instead of adjusting substrate moisture — kills airflow and produces respiratory infection.',
      'Misting a fully-screened enclosure with a single spray bottle — water evaporates in minutes and the animal sees a humidity spike then trough.',
      'Running a fogger without ventilation — bacterial and fungal aerosols build up and cause pneumonia.',
      'Treating a species with one humidity target rather than a gradient — most species need a moist hide and a dry zone, not uniform humidity.',
    ],
    whatToBuy: [
      {
        item: 'Calibrated digital hygrometer with min/max memory',
        purpose: 'Honest 24-hour RH tracking; replace any dial hygrometer that came with the enclosure.',
        priceRange: '$20-$40',
      },
      {
        item: 'Pressure misting system (for tropical / chameleon setups)',
        purpose: 'Delivers timed misting cycles with droplet sizing suited to the species.',
        priceRange: '$120-$300',
      },
      {
        item: 'Ultrasonic fogger (for high-humidity species only, on a timer)',
        purpose: 'Produces fine fog overnight when ambient RH naturally dips.',
        priceRange: '$25-$60',
      },
      {
        item: 'Moist-hide box (commercial or DIY)',
        purpose: 'Microhabitat humidity refuge for shedding without raising whole-enclosure RH.',
        priceRange: '$8-$25',
      },
    ],
    measurementTools: [
      'Digital hygrometer with min/max memory at the basking zone and at the cool side',
      'Optional ambient temp/RH datalogger for keepers tracking multi-day trends',
    ],
    howToMonitor: [
      'Place hygrometers at both ends of the enclosure for the first month of any new setup.',
      'Calibrate dial hygrometers (or replace with digital) using the salt-test method before trusting any reading.',
      'During the animal\'s shed cycle, check RH twice daily and provide a moist hide regardless of species.',
      'After misting, look for full droplet evaporation within 1-2 hours — standing water on substrate is a scale-rot risk.',
      'Watch for early dehydration signs: skin tenting, sunken eyes, reduced shedding completeness.',
    ],
    faqs: [
      {
        question: 'My hygrometer says 50% but my snake has stuck shed — what gives?',
        answer:
          'Either the hygrometer is wrong (very common with cheap dial models — salt-test or replace), or the reading is from a zone the animal doesn\'t use. Hygrometers belong where the animal sits. Stuck shed is a humidity signal; trust the animal first, then recalibrate.',
      },
      {
        question: 'Fogger or mister?',
        answer:
          'Mistlers deliver visible droplets and a rapid RH spike — good for drink-from-leaves species like chameleons and crested geckos. Foggers produce fine ambient humidity and are best for overnight RH maintenance in tropical setups. Both require ventilation. Neither replaces a properly moist substrate when the species needs one.',
      },
      {
        question: 'How do I raise humidity without making the enclosure swampy?',
        answer:
          'Use moisture-retaining substrate (cypress mulch, coco coir) under a top layer of dry leaf litter; add a moist hide; mist the enclosure walls (not the substrate) once or twice daily; and ensure airflow so RH cycles between 60-80% rather than staying flat.',
      },
      {
        question: 'Is high humidity ever dangerous?',
        answer:
          'Yes — chronically high humidity in arid species causes scale rot, respiratory infection, and tail-rot in monitors. The fix is rarely to seal the enclosure tighter; the fix is usually species-appropriate substrate moisture plus normal airflow.',
      },
      {
        question: 'How do I calibrate a hygrometer?',
        answer:
          'Salt test: seal the hygrometer in a closed container with a small dish of damp salt (slurry) for 6 hours. The RH inside will stabilize at 75%. The reading on the hygrometer should match — anything more than ±3% off is unreliable. Digital units that fail the salt test should be replaced.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Husbandry & Dermatology chapters",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Humidity and reptile disease',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV — Husbandry resources',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Humidity guides',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['substrate-selection', 'vivarium-sizing', 'thermoregulation-basics'],
    relatedHealthSlugs: ['dysecdysis', 'respiratory-infection', 'dehydration-reptiles'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 4. Substrate Selection
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'substrate-selection',
    topicName: 'Reptile Substrate Selection',
    category: 'Enclosure',
    icon: 'SUB',
    shortDescription:
      'Loose particle vs solid substrate, impaction risk by species, bioactive vs sterile setups, and the substrates that fail under captive conditions.',
    whatItIs:
      'Substrate is the surface the reptile lives on. It buffers humidity, supports natural behaviors (burrowing, digging, basking on warm sand), and can either complete a closed bioactive cycle or stay sterile and replaceable. The wrong substrate causes impaction, scale rot, respiratory disease, or dermatitis. The right substrate is matched to the species, the enclosure size, and the keeper\'s maintenance bandwidth.',
    whyItMatters: [
      'Loose particle substrate ingested with food is a leading cause of GI impaction in juvenile bearded dragons and small monitors.',
      'Damp dirty substrate in arid species causes scale rot and ventral dermatitis within weeks.',
      'Aromatic woods (cedar, pine) release phenols that damage reptile respiratory epithelium — never use them.',
      'A bioactive substrate with a healthy isopod and springtail clean-up crew can run for years; an unmaintained sterile substrate accumulates ammonia and fecal bacteria fast.',
    ],
    bySpeciesClass: [
      {
        class: 'Arid / desert',
        recommendation:
          'Bearded dragons (adult): washed play sand, tile, or excavator clay; adult uromastyx: play sand 4+ inches deep for digging. Juveniles of these species: tile or paper to eliminate impaction risk during the high-feeding-error window.',
      },
      {
        class: 'Temperate / mediterranean',
        recommendation:
          'Russian tortoises: topsoil/sand 60:40 mix at 3-4 inch depth; corn snakes: aspen, cypress mulch, or paper. Avoid walnut shell — sharp and digestion-blocking.',
      },
      {
        class: 'Tropical forest',
        recommendation:
          'Ball pythons, boas: cypress mulch or coco husk for humidity retention; arboreal geckos: bioactive ABG mix with leaf litter for clean-up crew; chameleons: bare floor with foliage or shallow bioactive (urine concentration is the issue).',
      },
      {
        class: 'High-humidity / rainforest',
        recommendation:
          'Day geckos, mossy leaf-tails, mossy-microhabitat species: bioactive with deep drainage layer, ABG mix, leaf litter, and active isopod/springtail colony to manage waste in continuously moist conditions.',
      },
    ],
    commonMistakes: [
      'Calcium-carbonate sand ("Repti-Sand") for juvenile bearded dragons — sold as digestible; in practice contributes to impaction.',
      'Pine or cedar shavings in any reptile enclosure — aromatic phenols cause respiratory disease.',
      'Walnut-shell substrate (marketed for desert species) — sharp particles and impaction risk.',
      'Damp substrate under arid species without a dry side — produces scale rot in weeks.',
      'Bioactive setups without active clean-up crew populations — the substrate looks bioactive but functions as moist debris.',
    ],
    whatToBuy: [
      {
        item: 'Cypress mulch or coco husk',
        purpose: 'Humidity-retaining substrate for tropical snakes and ground-dwelling lizards.',
        priceRange: '$15-$30 per bag',
      },
      {
        item: 'Aspen shavings',
        purpose: 'Dry, dust-light substrate for temperate colubrids (corn snakes, rat snakes).',
        priceRange: '$10-$25',
      },
      {
        item: 'Bioactive ABG mix or DIY topsoil/coco/sand blend',
        purpose: 'Long-running bioactive base for tropical and high-humidity setups.',
        priceRange: '$25-$60',
      },
      {
        item: 'Isopod and springtail starter culture',
        purpose: 'Live clean-up crew that processes waste and prevents anaerobic pockets.',
        priceRange: '$20-$40',
      },
      {
        item: 'Reptile-safe ceramic or porcelain tile',
        purpose: 'Zero-impaction-risk solid substrate for juvenile lizards and high-volume feeders.',
        priceRange: '$10-$30 (varies by tile size)',
      },
    ],
    howToMonitor: [
      'Spot-clean visible feces and shed daily; full substrate change for sterile setups every 4-8 weeks depending on species.',
      'In bioactive setups, monitor isopod and springtail populations — if you stop seeing them on lift-tests, the colony is dying.',
      'Watch for scale rot on the ventral surface of snakes and tegus — damp substrate signal.',
      'Watch for substrate ingestion at feeding — feed in a bowl or off tile to eliminate the risk in impaction-prone species.',
      'Smell test the substrate at substrate level once a week — ammonia or sour fermentation odor means it\'s time to refresh, not to mist.',
    ],
    faqs: [
      {
        question: 'Is sand safe for bearded dragons?',
        answer:
          'Washed play sand is safe for adult bearded dragons (over 18 months, eating cleanly, no underlying MBD). For juveniles, tile or paper is the safer default until feeding behavior is reliably accurate. Calcium-carbonate "digestible" sand is sold heavily but the impaction record in juveniles is concerning enough that we do not recommend it.',
      },
      {
        question: 'What is a bioactive substrate?',
        answer:
          'A bioactive substrate is a live ecosystem: drainage layer, soil mix, leaf litter, and a population of detritivores (isopods, springtails) that process the reptile\'s waste in place. It runs for years without full changes when maintained, and provides better humidity stability than sterile substrates. It is not a hands-off setup — the clean-up crew is livestock that needs monitoring.',
      },
      {
        question: 'Can I use coco coir for arid species?',
        answer:
          'Only as part of a dry-side / wet-side split, and only if you can keep the coco-coir zone bone-dry. Coco coir holds moisture even when it looks dry, and arid species held on damp coco develop scale rot. Bone-dry coco mixed with sand for digging is fine; ambient-humidity coco is not.',
      },
      {
        question: 'How deep should the substrate be?',
        answer:
          'Depends on whether the species burrows. Sulcata and Russian tortoises want 3-6 inches; uromastyx want 4+ inches of sand; snakes and arboreal geckos need only 1-2 inches for humidity. Match the natural behavior — a deep substrate the animal never uses is wasted volume.',
      },
      {
        question: 'Why are pine and cedar bad?',
        answer:
          'Both release aromatic phenols (volatile organic compounds) that damage reptile respiratory epithelium and can be hepatotoxic with chronic exposure. They are inappropriate for any reptile enclosure regardless of species.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Husbandry / Toxicology chapters",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Impaction and substrate review',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV — Husbandry and bioactive resources',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Substrate guides',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['humidity-management', 'vivarium-sizing'],
    relatedHealthSlugs: ['dehydration-reptiles', 'dysecdysis', 'respiratory-infection'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 5. Vivarium Sizing
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'vivarium-sizing',
    topicName: 'Reptile Vivarium Sizing',
    category: 'Enclosure',
    icon: 'VIV',
    shortDescription:
      'Minimum dimensions by adult size, the height vs ground-space tradeoff, and why modern keeper-literature minimums have grown.',
    whatItIs:
      'Vivarium sizing is the floorplan and volume of an enclosure relative to the animal\'s adult body length, locomotion style, and need to thermoregulate. The 2020s keeper-literature consensus is substantially larger than 1990s pet-shop guidance — a healthy thermal gradient and behavioral repertoire require room. Arboreal species need vertical height; terrestrial species need ground space; semi-aquatic species need surface area and depth.',
    whyItMatters: [
      'A thermal gradient requires linear distance between basking and cool zones — undersized enclosures cannot deliver one, and the animal is forced to overheat or chill.',
      'Locomotion-style mismatch (arboreal species in shallow enclosures, terrestrial species in tall narrow ones) drives chronic stress and poor body condition.',
      'Hide redundancy (warm hide + cool hide + humid hide) requires footprint; a single hide undersized enclosure forces the animal to choose between thermoregulation and security.',
      'Older "minimum" recommendations (e.g. 20-gallon long for adult bearded dragons) are now considered substandard by ARAV and current keeper literature.',
    ],
    bySpeciesClass: [
      {
        class: 'Small terrestrial lizards (15-25 cm adult)',
        recommendation:
          'Leopard geckos, crested geckos (note: crested is arboreal — see below): minimum 36" x 18" x 18" (4x2x2 ft for active species). Modern best-practice: 48" x 24" x 18".',
      },
      {
        class: 'Medium terrestrial lizards (35-60 cm adult)',
        recommendation:
          'Bearded dragons, blue-tongue skinks, uromastyx: minimum 48" x 24" x 24" (4x2x2 ft). Modern best-practice 6x2x2 ft for adult beardies and uromastyx, with deep substrate for digging in the latter.',
      },
      {
        class: 'Large monitors and tegus (1+ meter adult)',
        recommendation:
          'Savannah monitors, Argentine tegus: 8x4x4 ft minimum for an adult; many keepers build room-sized custom enclosures. Vertical space is needed for thermoregulation under a strong basking lamp.',
      },
      {
        class: 'Arboreal species (height-priority)',
        recommendation:
          'Crested geckos, panther chameleons, veiled chameleons, day geckos: height is the dominant dimension. Adult chameleons: 24"x24"x48". Crested geckos: 18"x18"x24" minimum, 18"x18"x36" preferred. Vertical perches and dense planting matter as much as raw volume.',
      },
      {
        class: 'Snakes — colubrids and pythons',
        recommendation:
          'Adult corn snakes 4x2x2 ft (length-priority); adult ball pythons 4x2x2 ft minimum (6x2x2 ft preferred); adult boa constrictor 6x2x2 ft minimum, larger for big morphs. Snakes use the enclosure they have — undersized enclosures cause stress hiding and feeding refusal.',
      },
      {
        class: 'Tortoises (chelonians)',
        recommendation:
          'Russian tortoise adult: 4x2 ft floorspace minimum (8x4 ft preferred). Sulcata adult: outdoor enclosure required at maturity; indoor minimum 8x4 ft as a temporary shelter only. Substrate depth and outdoor access dominate the design.',
      },
    ],
    commonMistakes: [
      'Buying a 20-gallon "starter kit" for a hatchling without a plan for the adult enclosure — most reptiles outgrow the starter within a year.',
      'Treating tall narrow aquariums as suitable for terrestrial reptiles — height the animal cannot use is wasted, and the floor footprint is what they need.',
      'Skipping the cool side entirely because the basking lamp covers the whole footprint of a small enclosure.',
      'Front-opening vs top-opening — top-opening fish tanks are sub-optimal for diurnal lizards (they perceive overhead approach as predator pressure).',
      'Not budgeting for the adult-size enclosure when buying the hatchling. The adult enclosure costs more than the animal.',
    ],
    whatToBuy: [
      {
        item: 'Front-opening PVC vivarium (Zen Habitats, Animal Plastics class)',
        purpose: 'Insulated, humidity-holding adult enclosure; the workhorse of modern reptile husbandry.',
        priceRange: '$300-$900',
      },
      {
        item: 'Bioactive-ready glass terrarium (Exo Terra class)',
        purpose: 'Front-opening glass for tropical and arboreal species; good for visibility and planting.',
        priceRange: '$150-$400',
      },
      {
        item: 'Outdoor tortoise enclosure (custom or kit)',
        purpose: 'Required adult housing for sulcata and most temperate tortoises in climate-appropriate regions.',
        priceRange: '$200-$2000+ depending on scale',
      },
      {
        item: 'Custom-built adult monitor or tegu enclosure (8x4x4 ft+)',
        purpose: 'There is no off-the-shelf retail enclosure for adult savannah monitors or large tegus.',
        priceRange: '$800-$3000 in materials',
      },
    ],
    howToMonitor: [
      'Watch the animal use the space — a healthy reptile explores, basks, and uses both ends of the gradient daily.',
      'Track basking and cool-side temperatures separately and confirm both targets are met simultaneously (this is where undersized enclosures fail).',
      'Note body-condition score and weight monthly; chronic understocking shows up as muscle loss and behavioral stereotypy.',
      'When upgrading enclosure size, expect 1-2 weeks of behavioral adjustment — under-exploration in week 1 is normal.',
    ],
    faqs: [
      {
        question: 'Why are modern minimums bigger than what pet shops sell?',
        answer:
          'Pet-shop guidance reflects retail constraints (what fits on a shelf, what a first-time buyer will spend). Current ARAV husbandry guidance, peer-reviewed welfare research, and the major keeper-literature texts all support substantially larger enclosures than the older 10-20 gallon defaults. The biological case is: reptiles need a real thermal gradient and hide redundancy, which require footprint.',
      },
      {
        question: 'Is bigger always better?',
        answer:
          'For most species, yes — within reason. Very large enclosures for very small geckos can make hatchlings feel exposed and stop them feeding, so start in a hatchling tub and upgrade in stages. For adults of any medium-to-large species, larger is almost always better as long as the basking site, hides, and humidity are correct.',
      },
      {
        question: 'Does height count?',
        answer:
          'For arboreal species, yes — height is the dominant dimension. For terrestrial species, height above the basking lamp is wasted. Match the dimension to the animal\'s locomotion style.',
      },
      {
        question: 'Can I house two reptiles together to save space?',
        answer:
          'Almost always: no. The majority of commonly kept reptiles are solitary, and cohabitation drives chronic stress, resource competition, and aggression. The few species with documented social tolerance (some skinks, some geckos) still need dramatically more space than a single animal, not less. Default to one animal per enclosure unless you are specifically working with a documented social species and a documented protocol.',
      },
      {
        question: 'What about screen vs PVC vs glass?',
        answer:
          'PVC holds humidity and heat best; glass is great for tropical visibility but humid setups need a dry zone; full screen is required for chameleons (airflow) but a poor choice for most other species. Match material to climate need, not to retail availability.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Husbandry & Welfare chapters",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Enclosure welfare studies',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV — Husbandry recommendations',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Enclosure size guides',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['basking-temperatures', 'humidity-management', 'substrate-selection'],
    relatedHealthSlugs: ['respiratory-infection', 'thermal-burns'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 6. Calcium + D3 Supplementation
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'calcium-d3-supplementation',
    topicName: 'Calcium & D3 Supplementation for Reptiles',
    category: 'Nutrition',
    icon: 'CA',
    shortDescription:
      'Calcium without-D3 vs calcium with-D3, dusting frequency by species, multivitamin rotation, and how supplementation interacts with UVB.',
    whatItIs:
      'Calcium and vitamin D3 supplementation is a powdered dusting program applied to feeder insects or vegetables. It prevents metabolic bone disease (MBD) when paired with appropriate UVB and a species-appropriate diet. The two powders to understand are "calcium without D3" (pure calcium carbonate) and "calcium with D3" (calcium plus pre-formed cholecalciferol). The third pillar is a balanced multivitamin used less frequently. Over-supplementing D3 in a UVB-adequate enclosure can cause hypervitaminosis D; under-supplementing causes hypocalcemia and MBD.',
    whyItMatters: [
      'Metabolic bone disease is the most common preventable nutritional disease in captive reptiles and is almost always the result of mismatched UVB + supplementation, not raw calcium deficiency.',
      'Calcium without D3 plus appropriate UVB is the modern standard for most diurnal species. The animal regulates its own D3 synthesis.',
      'Calcium with D3 is for species without UVB exposure, or as a rescue protocol for confirmed MBD under veterinary guidance.',
      'Hypervitaminosis D (from over-supplementing D3 in animals that also synthesize their own under UVB) causes soft-tissue calcification and is hard to reverse — over-supplementation is not safer.',
    ],
    bySpeciesClass: [
      {
        class: 'Insectivorous lizards with UVB (bearded dragons, leopard geckos, day geckos)',
        recommendation:
          'Dust feeders at most meals with calcium without D3 for juveniles; reduce to every 2nd-3rd feeding for adults. Multivitamin once weekly. Skip pure D3 powder unless the animal lacks UVB.',
      },
      {
        class: 'Crested and gargoyle geckos (powdered diet base)',
        recommendation:
          'Pangea, Repashy, or similar complete crested gecko diet (CGD) covers calcium and D3 in the formulation. Supplemental dusting is unnecessary when the animal is eating CGD regularly. Live feeders given as enrichment can be lightly dusted with calcium.',
      },
      {
        class: 'Omnivorous and herbivorous lizards (uromastyx, blue-tongue skinks)',
        recommendation:
          'Sprinkle calcium powder lightly over salad 2-3x weekly; multivitamin once weekly. Excess oxalates in greens (spinach, beet greens) bind calcium and should be minimized.',
      },
      {
        class: 'Tortoises (Russian, sulcata, leopard tortoise)',
        recommendation:
          'Cuttlebone available at all times; light calcium dusting on greens 2x weekly. Outdoor sunlight covers D3 in season; indoor wintering animals need UVB and a low-dose D3 multivitamin.',
      },
      {
        class: 'Snakes',
        recommendation:
          'Whole rodent prey is nutritionally complete — no supplementation is required for healthy snakes on rodent diets. Reproducing females and species on non-rodent prey (eggs, fish) may need targeted supplementation under veterinary guidance.',
      },
    ],
    commonMistakes: [
      'Daily calcium-with-D3 dusting for animals that also have UVB — risks hypervitaminosis D.',
      'Calcium dusting without addressing UVB — the calcium has nowhere to go and MBD develops anyway.',
      'Using a multivitamin daily — fat-soluble vitamin A and D accumulate and become toxic.',
      'Feeding spinach, beet greens, and Swiss chard as salad bases — high oxalate content binds calcium and contributes to bladder stones in tortoises.',
      'Leaving cuttlebone out in damp enclosures (chameleons, geckos) — it molds quickly and is a respiratory hazard.',
    ],
    whatToBuy: [
      {
        item: 'Calcium carbonate powder (without D3)',
        purpose: 'Primary calcium dusting for UVB-equipped species.',
        priceRange: '$8-$15',
      },
      {
        item: 'Calcium with D3 powder',
        purpose: 'Reserved for non-UVB species or rescue protocols under veterinary direction.',
        priceRange: '$10-$18',
      },
      {
        item: 'Reptile-formulated multivitamin (e.g. Repashy Calcium Plus, Zoo Med ReptiVite)',
        purpose: 'Weekly balanced micronutrient dusting; includes vitamin A and other fat-solubles in safe ratios.',
        priceRange: '$15-$25',
      },
      {
        item: 'Cuttlebone',
        purpose: 'Free-choice calcium source for tortoises and large lizards in dry enclosures.',
        priceRange: '$5-$10',
      },
      {
        item: 'Crested gecko complete diet (CGD) — Pangea, Repashy',
        purpose: 'Complete powdered diet for Rhacodactylus species; covers calcium and D3 in the formulation.',
        priceRange: '$15-$35',
      },
    ],
    howToMonitor: [
      'Track the calcium-dusting schedule on a calendar or sticky note on the enclosure — it is easy to forget which days are which.',
      'Watch for early MBD signs: tremor, soft jaw, kinked spine, reduced activity, refusal to bask.',
      'Watch for hypervitaminosis D signs: lethargy, soft-tissue calcification on radiographs (vet finding), polydipsia.',
      'Replace open calcium and multivitamin powders every 6 months — open jars degrade in humid keeper rooms.',
      'Re-evaluate supplementation when changing UVB setup; new UVB bulb may mean less D3 supplementation is needed.',
    ],
    faqs: [
      {
        question: 'Calcium with D3 or without D3?',
        answer:
          'For UVB-equipped diurnal species: without D3 is the modern default — the animal makes its own D3 from UVB. For species housed without UVB, or as a temporary rescue protocol for diagnosed MBD: with D3, under veterinary guidance, at conservative dosing.',
      },
      {
        question: 'How often should I dust feeders?',
        answer:
          'Juvenile insectivores: most meals with calcium without D3. Adults: every 2nd-3rd feeding. Multivitamin: once weekly across all life stages. Crested gecko complete diets cover this in the formulation and need no additional dusting.',
      },
      {
        question: 'Can I give too much calcium?',
        answer:
          'Pure calcium without D3 has a wide margin of safety in animals with healthy renal function. The toxicity risk in over-supplementation is almost always from D3 (hypervitaminosis D) or from chronic multivitamin over-dosing (vitamin A toxicity), not from the calcium itself.',
      },
      {
        question: 'Do I still need UVB if I dust with calcium + D3?',
        answer:
          'For most species, yes. UVB drives more than just D3 synthesis — it influences activity, color, and behavior, and the published evidence that dietary D3 alone can fully substitute for UVB in long-term welfare is weak. Use both: UVB plus calcium without D3 in most cases.',
      },
      {
        question: 'Why is my supplemented bearded dragon still showing MBD signs?',
        answer:
          'Three usual causes: (1) UVB output is too low at the basking site (verify with a Solarmeter), (2) calcium is being given but oxalate-heavy greens are binding it, or (3) the animal is past early MBD and needs veterinary radiographs and injectable calcium therapy. Supplementation alone cannot reverse advanced MBD.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Nutrition / MBD chapters",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Calcium and vitamin D reviews',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV — Nutrition and supplementation guidelines',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Association of Avian Veterinarians (AAV) — Comparative vitamin D references',
        url: 'https://www.aav.org/',
      },
      {
        name: 'Reptiles Magazine — Calcium and D3 supplementation overview',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['uvb-lighting', 'thermoregulation-basics'],
    relatedHealthSlugs: ['metabolic-bone-disease', 'hypocalcemia', 'vitamin-a-deficiency'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 7. Reptile Quarantine Protocol
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'reptile-quarantine-protocol',
    topicName: 'Reptile Quarantine Protocol',
    category: 'Biosecurity',
    icon: 'QTN',
    shortDescription:
      '30 to 90-day quarantine protocol for new arrivals, room separation, parasite screening, and the workflow that prevents cryptosporidium and IBD outbreaks.',
    whatItIs:
      'Quarantine is the period a newly acquired reptile is housed separately from the existing collection while pathogens of concern are ruled out. The standard ARAV-aligned period is 90 days minimum for established collections (30 days as a hobbyist floor for low-risk single-animal keepers), and longer for boids (where inclusion body disease can take many months to express). The protocol covers room separation, dedicated tools, fecal screening, and observed feeding and shedding before integration.',
    whyItMatters: [
      'Cryptosporidium serpentis in snakes and C. varanii in lizards are not curable and are spread routinely between collection animals via shared tools and water bowls — quarantine is the only meaningful intervention.',
      'Inclusion body disease (IBD) in boids has a months-to-years incubation window; a 30-day quarantine cannot rule it out.',
      'Snake mites and pinworms transfer in days through shared substrate or hands.',
      'New-arrival animals are usually subclinically stressed and shed pathogens at higher rates than a stable established animal would.',
    ],
    bySpeciesClass: [
      {
        class: 'Snakes — colubrids, kingsnakes, milks',
        recommendation:
          '60-90 day quarantine. Paper-towel substrate (so feces and mites are visible), single water bowl, no decor that can\'t be sterilized. Two fecals (intake and at 30 days) plus observed feeding and shed cycle before integration.',
      },
      {
        class: 'Snakes — boids and pythons',
        recommendation:
          '90 days minimum; many breeders maintain 6+ month quarantine for boas and ball pythons due to IBD. Same paper-towel/sterilizable-only protocol. Veterinary IBD testing (PCR) is the gold standard before integration into an established boid collection.',
      },
      {
        class: 'Lizards — bearded dragons, monitors, tegus',
        recommendation:
          '60-90 days. Two fecals (intake and 30 days) screening for coccidia, pinworms, and cryptosporidium varanii. Observe feeding response, weight stability, and one full shed cycle.',
      },
      {
        class: 'Geckos — crested, leo, day geckos',
        recommendation:
          '60 days. Fecal screening at intake; observe for crypto signs (weight loss despite feeding, regurgitation) over the period. Strict no-contact between juvenile crested colonies and incoming animals.',
      },
      {
        class: 'Chelonians (tortoises, turtles)',
        recommendation:
          '90 days minimum, often longer for high-risk species. Mycoplasma agassizii testing for desert tortoises and many Mediterranean species. Herpesvirus testing for high-risk species. Fecal screening for flagellates and oxyurids.',
      },
    ],
    commonMistakes: [
      'Quarantining in the same room as the established collection — airborne and aerosol transmission still occurs.',
      'Reusing feeding tongs, water bowls, or hide boxes between QT and main collection — the most common transfer path.',
      'Cutting QT short because the animal "looks fine" — most reptile pathogens have asymptomatic shedding windows.',
      'No paper-towel substrate during QT — bedding hides feces, mites, and parasite eggs.',
      'Adopting from a collection that itself failed quarantine — pedigree of the source matters.',
    ],
    whatToBuy: [
      {
        item: 'Dedicated quarantine tub or rack enclosure',
        purpose: 'Separate, sterilizable housing in a separate room from the main collection.',
        priceRange: '$60-$200',
      },
      {
        item: 'Dedicated feeding tongs, water bowl, and hide for QT',
        purpose: 'Tools and items that never leave the QT room; eliminates the most common transfer path.',
        priceRange: '$30-$50',
      },
      {
        item: 'Reptile-safe disinfectant (chlorhexidine, F10SC, or accelerated hydrogen peroxide)',
        purpose: 'Enclosure and tool sterilization between QT animals.',
        priceRange: '$15-$40',
      },
      {
        item: 'Veterinary fecal screening',
        purpose: 'Intake and 30-day fecals at an ARAV-member reptile veterinarian.',
        priceRange: '$30-$80 per fecal',
      },
      {
        item: 'Veterinary infectious-disease PCR panel (boids, chelonians)',
        purpose: 'IBD, herpesvirus, mycoplasma screening for high-risk groups.',
        priceRange: '$120-$300',
      },
    ],
    howToMonitor: [
      'Daily: weight check, fecal output, water consumption, behavior log.',
      'Weekly: full enclosure breakdown and visual mite/parasite check.',
      'At intake and 30 days: veterinary fecal screening for parasites.',
      'Before integration: confirm at least one full shed cycle, stable weight, and clear fecals.',
      'Always feed QT animals AFTER the main collection, and wash hands and change shirts between rooms.',
    ],
    faqs: [
      {
        question: 'Is 30 days enough?',
        answer:
          'For a single-pet hobbyist taking one healthy-looking captive-bred animal home, 30 days is the absolute floor — and many pathogens can still be missed in that window. For multi-animal collections or anyone keeping boids, 90 days is the modern standard and is the period the major keeper-literature texts and ARAV continuing-education materials describe.',
      },
      {
        question: 'Can I quarantine in the same room if the enclosure is closed?',
        answer:
          'No — air, aerosols from misting, and unconscious hand-and-tool contact all transfer pathogens between enclosures in the same room. True quarantine is a different room, ideally on a different ventilation path.',
      },
      {
        question: 'What pathogens am I actually screening for?',
        answer:
          'Cryptosporidium (snakes and lizards), inclusion body disease (boids), pinworms and oxyurids, coccidia, snake mites, mycoplasma (chelonians, desert tortoises), herpesvirus (chelonians, varanids), and pentastomes (wild-caught animals). Your reptile vet will scope the panel to species and source.',
      },
      {
        question: 'Why is paper towel the quarantine substrate?',
        answer:
          'Because you need to see what is coming out of the animal. Loose substrate hides feces, mites, mite frass, blood, and parasite eggs. Paper towel is replaceable, sterilizable in a single step (throw away), and free.',
      },
      {
        question: 'Do I quarantine captive-bred animals too?',
        answer:
          'Yes. Captive-bred animals from clean, well-managed sources are lower risk than wild-caught or unknown-source animals — but still non-zero. The protocol is the same; the duration can be the floor (60 days) for trusted captive-bred sources and the ceiling (90+ days) for wild-caught or unknown-source animals.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Infectious Disease & Biosecurity chapters",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Cryptosporidium and IBD reviews',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV — Biosecurity and quarantine guidance',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Quarantine protocols for new acquisitions',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['humidity-management', 'substrate-selection'],
    relatedHealthSlugs: ['respiratory-infection', 'stomatitis'],
  },

  // ───────────────────────────────────────────────────────────────────
  // 8. Thermoregulation Basics
  // ───────────────────────────────────────────────────────────────────
  {
    slug: 'thermoregulation-basics',
    topicName: 'Reptile Thermoregulation Basics',
    category: 'Climate',
    icon: 'TRM',
    shortDescription:
      'How the basking-to-cool-side gradient works, why night drops matter, and how to read a reptile that is choosing its own temperature.',
    whatItIs:
      'Reptiles are ectotherms — they regulate body temperature by moving between zones of different ambient temperature, not by metabolic heat. A correctly designed enclosure provides a linear thermal gradient from a basking site (warm end) to a cool side, with intermediate zones in between, plus a controlled night drop. The animal selects its position to drive digestion, immune function, gestation, and behavioral cycles. Thermoregulation is the keeper\'s job to enable, not the keeper\'s job to choose for the animal.',
    whyItMatters: [
      'A thermal gradient with both ends correct is more important than hitting either end exactly — the animal will pick the temperature it needs at any given moment.',
      'Constant temperature (no cool side, no night drop) prevents normal behavioral thermoregulation and depresses immune and digestive function.',
      'Night drops mimic natural circadian temperature cycles and improve feeding response in most temperate and tropical species.',
      'A reptile that can\'t cool off is in as much trouble as one that can\'t warm up — overheating reptiles can die within hours.',
    ],
    bySpeciesClass: [
      {
        class: 'Desert / arid baskers',
        recommendation:
          'Strong vertical gradient: 100-130°F basking surface, 75-85°F cool side, 65-75°F night drop. Long photoperiod (12-14 hr) in summer, shorter in winter.',
      },
      {
        class: 'Temperate / mediterranean',
        recommendation:
          'Moderate gradient: 88-95°F basking, 70-78°F cool, 65-72°F night drop. 12-hour photoperiod with seasonal lengthening/shortening optional and often beneficial.',
      },
      {
        class: 'Tropical forest',
        recommendation:
          'Mild gradient: 85-92°F basking, 75-80°F cool side, 72-76°F night (relatively warm overall). Photoperiod 11-12 hours year-round.',
      },
      {
        class: 'Nocturnal / crepuscular',
        recommendation:
          'Belly-heat-dominated gradient: 88-92°F warm-side surface, 75-78°F cool side. Night drop into low 70s. Daytime light is not the primary driver — provide darkness during peak activity hours.',
      },
      {
        class: 'Brumating species',
        recommendation:
          'Russian tortoises, corn snakes, some bearded dragons brumate naturally in winter at 50-60°F for 8-12 weeks. Lower temperatures, reduced photoperiod, no feeding during the period. Brumate only healthy adults; never brumate underweight or sick animals.',
      },
    ],
    commonMistakes: [
      'No cool side — the entire enclosure is at basking temperature and the animal cannot escape heat.',
      'No night drop — keeping basking lamps on overnight, or supplemental heat that prevents the natural drop.',
      'Using a colored "night light" (red or blue) for nighttime heat — reptiles see red and blue light; the only true night heat source is a non-light emitter (deep heat projector or ceramic heat emitter on a thermostat).',
      'Brumating a sick animal — brumation depresses immune function further and kills animals that were already declining.',
      'Treating reptile thermoregulation as a single number to hit instead of a range to provide.',
    ],
    whatToBuy: [
      {
        item: 'Proportional thermostat with day/night programming',
        purpose: 'Holds basking temp during the day and drops to a lower setpoint at night automatically.',
        priceRange: '$120-$250',
      },
      {
        item: 'Deep heat projector or ceramic heat emitter',
        purpose: 'Provides supplemental heat without visible light for nighttime use in colder rooms.',
        priceRange: '$25-$60',
      },
      {
        item: 'Light-cycle timer (mechanical or smart-plug)',
        purpose: 'Automates the photoperiod independently of room schedule.',
        priceRange: '$10-$30',
      },
      {
        item: 'Min/max digital thermometer at cool side and basking site',
        purpose: 'Verifies the full 24-hour temperature swing the animal is experiencing.',
        priceRange: '$15-$30',
      },
    ],
    measurementTools: [
      'Infrared temperature gun for surface readings',
      'Min/max digital probe thermometer at multiple zones for 24-hour gradient verification',
      'Optional ambient datalogger for keepers tracking multi-week trends',
    ],
    howToMonitor: [
      'Verify basking surface, mid-enclosure, and cool-side temperatures separately every 24 hours for the first two weeks of a new setup.',
      'Watch the animal\'s position over the day — a healthy reptile uses all zones at different times.',
      'Track nighttime minimum temperature for the first month; cold-snap nights are a common cause of overnight problems.',
      'Photograph or note basking duration after feeding — failure to bask post-meal is a temperature problem until proven otherwise.',
      'Adjust photoperiod seasonally for temperate species (10 hours winter, 14 hours summer) where the natural cycle is well-established.',
    ],
    faqs: [
      {
        question: 'Why is the cool side as important as the basking site?',
        answer:
          'A reptile that can\'t escape the basking heat overheats. Reptiles do not sweat; they only regulate by moving to cooler zones. An enclosure without a real cool side traps the animal in chronic over-temperature — and acute overheating during a hot summer day in that enclosure can kill within hours.',
      },
      {
        question: 'Should the lights be off at night?',
        answer:
          'Yes — visible light off, and (in most species) a temperature drop overnight as well. Red and blue "night lights" are still visible to the reptile and disrupt the diurnal cycle. Use a non-light heat source (deep heat projector or ceramic) on a thermostat if your room is too cold at night.',
      },
      {
        question: 'How big should the gradient be?',
        answer:
          'Top to bottom about 25-35°F in most species. The animal needs a meaningfully different temperature at the cool end. If the basking site and cool side differ by only 5-10°F, the animal effectively has no gradient.',
      },
      {
        question: 'What is brumation?',
        answer:
          'Brumation is the reptile analogue of hibernation — a low-temperature, low-activity overwintering period observed in many temperate species. It is natural, often beneficial for breeding-aged animals, and must be done deliberately at controlled temperatures over 8-12 weeks. It is not appropriate for sick, underweight, or young animals.',
      },
      {
        question: 'My reptile sits on the cool side all day — is something wrong?',
        answer:
          'Possibly. A persistent cool-side preference can mean the basking site is too hot, the basking light is too bright, the animal feels exposed at the basking site, or the animal is unwell. Verify surface temperatures with an infrared gun, check that the basking site has visual cover, and consult a reptile vet if the behavior is sustained across multiple days.',
      },
    ],
    citedSources: [
      {
        name: "Mader's Reptile and Amphibian Medicine and Surgery — Thermoregulation chapter",
        url: 'https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-323-48253-0',
      },
      {
        name: 'Journal of Herpetological Medicine and Surgery — Preferred Optimal Temperature Zones',
        url: 'https://meridian.allenpress.com/jhms',
      },
      {
        name: 'ARAV continuing-education library — Thermal husbandry',
        url: 'https://arav.org/resources/',
      },
      {
        name: 'Reptiles Magazine — Thermoregulation and brumation guides',
        url: 'https://reptilesmagazine.com/',
      },
    ],
    relatedSlugs: ['basking-temperatures', 'uvb-lighting', 'vivarium-sizing'],
    relatedHealthSlugs: ['thermal-burns', 'respiratory-infection'],
  },
]

// ─────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────

export function getHusbandryTopicBySlug(slug: string): HusbandryTopic | undefined {
  return HusbandryTopics.find((t) => t.slug === slug)
}

export function getRelatedHusbandryTopics(slug: string, max = 3): HusbandryTopic[] {
  const topic = getHusbandryTopicBySlug(slug)
  if (!topic) return []
  const related: HusbandryTopic[] = []
  if (topic.relatedSlugs) {
    for (const s of topic.relatedSlugs) {
      const t = getHusbandryTopicBySlug(s)
      if (t) related.push(t)
    }
  }
  // Pad with category-matched topics if needed.
  if (related.length < max) {
    for (const t of HusbandryTopics) {
      if (t.slug === slug) continue
      if (related.some((r) => r.slug === t.slug)) continue
      if (t.category === topic.category) related.push(t)
      if (related.length >= max) break
    }
  }
  return related.slice(0, max)
}
