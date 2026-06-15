/**
 * Fish disease reference data — Fish.com
 *
 * 35 common aquarium fish diseases, used by the dynamic route at
 * /health/[slug]/page.tsx to render a long-tail SEO page per condition.
 *
 * Editorial posture:
 *   - This is a hobbyist health-reference catalog, not veterinary advice.
 *   - Mortality grades are qualitative bands drawn from aquaculture-vet
 *     literature, not quantitative case-fatality rates.
 *   - Treatments are described as tiers from environmental management to
 *     prescription/chemotherapeutic — they are not dosing instructions.
 *   - Citations point to the published aquatic-vet, WAVMA, FishBase,
 *     OIE/WOAH, USDA, and university extension records that the editorial
 *     team consults; they are not endorsements of a specific protocol.
 *
 * Slug-collision rule:
 *   The /health/ tree already has hand-written guides at columnaris,
 *   dropsy-treatment, fin-rot, fish-lice-anchor-worm, gill-flukes,
 *   ich-treatment, pop-eye, swim-bladder-disease, velvet-disease.
 *   Every slug in this file is chosen to NOT collide with those — the
 *   generateStaticParams in the dynamic route therefore renders all 25.
 */

export type DiseaseCategory =
  | 'Parasitic'
  | 'Bacterial'
  | 'Fungal'
  | 'Viral'
  | 'Nutritional'
  | 'Environmental'
  | 'Genetic'

export type WaterType = 'Freshwater' | 'Saltwater' | 'Both'

export type Mortality = 'Low' | 'Moderate' | 'High' | 'Severe'

export interface Disease {
  slug: string
  name: string
  scientificName?: string
  category: DiseaseCategory
  waterType: WaterType
  contagious: boolean
  mortality: Mortality
  symptoms: string[]
  causes: string[]
  diagnosticApproach: string[]
  treatmentTiers: string[]
  preventionNote: string
  citations: string[]
  relatedSlugs?: string[]
}

export const Diseases: Disease[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1. Ich
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ich',
    name: 'Ich (White Spot Disease)',
    scientificName: 'Ichthyophthirius multifiliis',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'High',
    symptoms: [
      'Pinhead-sized white spots resembling grains of salt on body and fins',
      'Flashing — fish rubbing against substrate, rocks, or decor',
      'Clamped fins, reduced appetite, lethargy in advanced cases',
      'Rapid or labored gill movement when gills are colonized',
    ],
    causes: [
      'Introduction of infected fish, plants, or water from a contaminated system',
      'Stress lowering host defenses — temperature swings, poor water quality, transport',
      'Failure to quarantine new arrivals before adding to the display tank',
    ],
    diagnosticApproach: [
      'Visual identification of characteristic white cysts on body and fins',
      'Skin scrape under low-power microscopy showing the multinucleated trophont',
      'Differential against velvet (smaller, gold-dust appearance) and epistylis (stalked colonies)',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: raise temperature to 82-86F if species-tolerant to accelerate the life cycle',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses, increased aeration, removal of activated carbon',
      'Tier 3 — Chemotherapeutic: formalin/malachite green combinations (Ich-X, API Super Ick Cure) per label, maintained 10-14 days minimum',
      'Tier 4 — Veterinary referral for breeding stock, koi ponds, or refractory cases',
    ],
    preventionNote:
      'Quarantine every new fish, plant, and piece of decor for a minimum of 2-4 weeks in a separate system. Ich cannot persist in a fish-free tank past 48-72 hours at room temperature, so a fallow display tank reliably clears the parasite once all hosts are removed.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Dickerson HW. Ichthyophthirius multifiliis. In: Woo PTK (ed). Fish Diseases and Disorders Vol. 1. CABI, 2006.',
      'World Aquatic Veterinary Medical Association (WAVMA) — Aquatic Veterinary Medical Reference.',
    ],
    relatedSlugs: ['velvet', 'saprolegnia-fungal-infection', 'mouth-fungus-columnaris'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 2. Velvet
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'velvet',
    name: 'Velvet Disease (Gold Dust Disease)',
    scientificName: 'Piscinoodinium pillulare (freshwater) / Amyloodinium ocellatum (marine)',
    category: 'Parasitic',
    waterType: 'Both',
    contagious: true,
    mortality: 'Severe',
    symptoms: [
      'Fine gold or rust-colored dust coating the body, often visible under angled light',
      'Rapid breathing, gasping at the surface as gill tissue is colonized',
      'Clamped fins, scratching, loss of appetite progressing rapidly',
      'High mortality within days in marine velvet (Amyloodinium) outbreaks',
    ],
    causes: [
      'Introduction of infected fish from retail or wholesale systems',
      'Failure to quarantine; the dinoflagellate has a free-swimming dinospore stage that spreads silently',
      'Light exposure increases pathogenicity — the parasite is photosynthetic when free-living',
    ],
    diagnosticApproach: [
      'Examination under a focused flashlight in a dim room — the fine dust is more visible',
      'Skin/gill scrape microscopy showing pyriform dinospores or attached trophonts',
      'Differential against ich (larger, discrete white spots) and bacterial gill disease',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: dim lighting to reduce photosynthetic activity; raise temperature in freshwater systems if tolerated',
      'Tier 2 — Supportive: copper-based treatments in marine systems at carefully monitored ionic-copper levels',
      'Tier 3 — Chemotherapeutic: chloroquine phosphate (marine, by-prescription in many jurisdictions), formalin in freshwater per label',
      'Tier 4 — Veterinary referral; marine Amyloodinium outbreaks have very narrow treatment windows',
    ],
    preventionNote:
      'Quarantine all new arrivals for 4 weeks minimum, longer for marine fish. Copper prophylaxis in marine quarantine systems is a long-standing public-aquarium practice. Velvet is more lethal than ich and acts faster — early intervention is essential.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Francis-Floyd R, Reed P. Amyloodinium ocellatum, an Important Parasite of Cultured Marine Fish. UF/IFAS Extension FA-164.',
      'WAVMA Aquatic Veterinary Medical Reference — Marine Dinoflagellate Infestation Protocol.',
    ],
    relatedSlugs: ['ich', 'bacterial-gill-disease', 'mouth-fungus-columnaris'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 3. Fin Rot (Bacterial)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'fin-rot-disease',
    name: 'Fin Rot',
    scientificName: 'Aeromonas spp., Pseudomonas spp., Vibrio spp. (opportunistic)',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Ragged, fraying, or eroded fin margins with a whitish or reddened edge',
      'Progressive loss of fin tissue; in advanced cases erosion reaches the body',
      'Reddened bases at the point of fin attachment indicating systemic involvement',
      'Secondary fungal colonization (white cottony growth) on the eroded tissue',
    ],
    causes: [
      'Poor water quality — chronic ammonia, nitrite, or elevated nitrate',
      'Mechanical injury from fin-nipping tankmates, sharp decor, or netting',
      'Cold stress in species kept below their thermal range',
      'Immunosuppression from prolonged transport or high stocking density',
    ],
    diagnosticApproach: [
      'Visual inspection of fin margins; photograph for serial comparison',
      'Water-quality test (ammonia, nitrite, nitrate, pH, temperature) — the cause is almost always environmental',
      'Wet mount of fin margin under microscopy to rule out gill flukes or columnaris',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: aggressive water-change schedule, address the underlying water-quality fault',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses for freshwater species that tolerate it',
      'Tier 3 — Chemotherapeutic: over-the-counter broad-spectrum antibiotics where legally available (kanamycin, nitrofurazone) per label',
      'Tier 4 — Veterinary referral with culture-and-sensitivity for valuable fish or refractory cases',
    ],
    preventionNote:
      'Fin rot is fundamentally a water-quality and husbandry disease. Maintain a fully cycled tank with 0 ammonia and 0 nitrite, perform weekly water changes, avoid overstocking, and remove fin-nipping tankmates. Antibiotics are downstream of fixing the environment.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Yanong RPE. Use of Antibiotics in Ornamental Fish Aquaculture. UF/IFAS Extension Circular 84.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['tail-rot', 'mouth-fungus-columnaris', 'ammonia-poisoning'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 4. Columnaris (Mouth Fungus)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'mouth-fungus-columnaris',
    name: 'Columnaris (Mouth Fungus)',
    scientificName: 'Flavobacterium columnare',
    category: 'Bacterial',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Severe',
    symptoms: [
      'White or grayish cottony patches around the mouth, often mistaken for fungus',
      'Saddleback lesion — a discolored band across the dorsal surface',
      'Frayed fins, reddened gills, lethargy progressing within 24-72 hours',
      'Acute strains can kill within 24 hours with minimal external signs',
    ],
    causes: [
      'Flavobacterium columnare — gram-negative filamentous bacterium ubiquitous in freshwater',
      'Trigger conditions: elevated temperature (above 75F), high organic load, low dissolved oxygen, crowding',
      'Wounds, handling stress, and shipping stress raise infection risk dramatically',
    ],
    diagnosticApproach: [
      'Wet-mount microscopy of a skin scrape showing the characteristic long, slender, gliding rods that form column-like aggregations',
      'Differential against true fungal (Saprolegnia) infection — fungus has hyphae, columnaris has bacterial rods',
      'Water-quality testing; columnaris outbreaks correlate strongly with stressors',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: lower temperature to species minimum if tolerated, reduce organic load, increase aeration',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses (note: some columnaris strains are salt-tolerant)',
      'Tier 3 — Chemotherapeutic: kanamycin, oxytetracycline, or nitrofurazone per label where legally available; topical methylene blue or potassium permanganate baths under expert guidance',
      'Tier 4 — Veterinary referral with antimicrobial culture-and-sensitivity for valuable stock',
    ],
    preventionNote:
      'Columnaris is opportunistic on stressed fish in warm, organic-rich water. Maintain low-stocking, cool species at the lower end of their range during summer, perform regular water changes, and quarantine new arrivals. A peracute outbreak can kill an entire tank in 24-48 hours.',
    citations: [
      'Declercq AM, Haesebrouck F, Van den Broeck W, et al. Columnaris disease in fish. Vet Res. 2013;44:27.',
      'Wagner BA et al. Flavobacterium columnare — the bacterial pathogen causing columnaris disease. USDA/APHIS.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
    ],
    relatedSlugs: ['fin-rot-disease', 'saprolegnia-fungal-infection', 'bacterial-gill-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 5. Dropsy
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'dropsy',
    name: 'Dropsy (Ascites)',
    scientificName: 'Aeromonas hydrophila / multi-etiology syndrome',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'Severe',
    symptoms: [
      'Pinecone scales — abdominal swelling lifts scales away from the body, visible from above',
      'Bulging eyes (concurrent exophthalmia), pale gills, distended belly',
      'Lethargy, loss of appetite, hanging near the surface or substrate',
      'The "pinecone" sign indicates kidney or osmoregulatory failure, often a late-stage presentation',
    ],
    causes: [
      'Bacterial infection — most commonly Aeromonas hydrophila, but dropsy is a syndrome rather than a single disease',
      'Underlying kidney failure, viral infection, mycobacterial granuloma, or toxin exposure can present identically',
      'Stress, poor water quality, and immunosuppression precipitate clinical signs',
    ],
    diagnosticApproach: [
      'Visual identification of the pinecone scale presentation from above',
      'History — water-quality testing, recent stressors, presence of similar signs in tankmates',
      'Definitive etiology requires necropsy or veterinary work-up; in the home setting dropsy is treated empirically',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: immediate water-quality correction; quarantine the affected fish to reduce tank stress',
      'Tier 2 — Supportive: Epsom salt baths (magnesium sulfate) at hobby-literature doses to assist osmoregulation',
      'Tier 3 — Chemotherapeutic: kanamycin, oxytetracycline, or medicated food per label where legally available',
      'Tier 4 — Veterinary referral; prognosis at the pinecone stage is guarded to poor regardless of intervention',
    ],
    preventionNote:
      'Dropsy is a late-stage sign of systemic disease. Prevention is upstream: stable water chemistry, varied diet, low stress, and quarantine of new fish. When dropsy is visible the underlying disease has typically been progressing for days to weeks.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
      'WAVMA Aquatic Veterinary Medical Reference — Systemic Bacterial Disease.',
    ],
    relatedSlugs: ['popeye-exophthalmia', 'fish-tuberculosis-mycobacterium', 'koi-herpesvirus-khv'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 6. Swim Bladder Disease (true bacterial/inflammatory)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'swim-bladder',
    name: 'Swim Bladder Disease',
    category: 'Bacterial',
    waterType: 'Freshwater',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Loss of buoyancy control — floating, sinking, or rolling sideways',
      'Difficulty maintaining vertical orientation, especially after feeding',
      'Visible distension of the abdomen in some presentations',
      'In chronic cases the fish remains active but cannot reach food or surface',
    ],
    causes: [
      'Bacterial infection of the swim bladder wall (inflammatory swim bladder disease)',
      'Mechanical trauma from collision, rough handling, or aggressive tankmates',
      'Congenital deformity in selectively bred lines (fancy goldfish, balloon-bodied mollies)',
      'Secondary compression from intestinal distension or tumor',
    ],
    diagnosticApproach: [
      'Behavioral observation — pattern of buoyancy loss, response to feeding, body posture',
      'Radiograph (where available) is the definitive imaging tool for inflammatory versus mechanical etiology',
      'Differential against constipation (transient, food-related) and gas-bubble disease (gas in tissues)',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: lower water level so the fish can reach the surface, reduce flow, soft substrate',
      'Tier 2 — Supportive: 24-48 hour fast, then small pea or daphnia feeding if constipation is suspected',
      'Tier 3 — Chemotherapeutic: broad-spectrum antibiotic medicated food for confirmed bacterial inflammation',
      'Tier 4 — Veterinary referral; in valuable fish surgical decompression and chronic management are documented in the literature',
    ],
    preventionNote:
      'Distinguish true swim bladder disease (inflammatory, often chronic, often unrelated to diet) from transient buoyancy issues (post-feeding, constipation, gulped air). Fancy goldfish lines are predisposed and the condition is often lifelong — humane long-term management is the realistic goal.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
      'Lewbart GA. Fish soft tissue surgery. Vet Clin Exot Anim 2010;13:351-67.',
    ],
    relatedSlugs: ['swim-bladder-issues', 'fish-constipation', 'dropsy'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 7. Pop-eye (Exophthalmia)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'popeye-exophthalmia',
    name: 'Pop-Eye (Exophthalmia)',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Protrusion of one or both eyes from the socket',
      'Cloudy or opaque cornea in some presentations',
      'Concurrent signs of systemic illness — clamped fins, lethargy, off-feed',
      'Unilateral pop-eye often points to trauma; bilateral pop-eye points to systemic disease',
    ],
    causes: [
      'Bacterial infection — frequently part of a broader Aeromonas or Mycobacterium presentation',
      'Trauma — collision, fight wound, or netting injury',
      'Gas supersaturation in the eye from oxygen-saturated water',
      'Vitamin deficiency or organ failure (kidney) in chronic cases',
    ],
    diagnosticApproach: [
      'Unilateral versus bilateral — narrow the differential',
      'Concurrent systemic signs — dropsy, ulceration, behavioral changes',
      'Water-quality testing including dissolved oxygen saturation',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: water-quality correction, isolation if trauma is suspected',
      'Tier 2 — Supportive: Epsom salt baths to reduce pressure in osmoregulatory pop-eye',
      'Tier 3 — Chemotherapeutic: broad-spectrum antibiotics for systemic bacterial cases',
      'Tier 4 — Veterinary referral; enucleation has been documented for irreparable, painful eyes in valuable fish',
    ],
    preventionNote:
      'Pop-eye in one eye is often physical trauma; pop-eye in both eyes is often systemic and warrants a full work-up. Even with successful treatment the affected eye may remain visually impaired or be lost. Routine prevention is good water quality, low stress, and quarantine of new arrivals.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
      'WAVMA Aquatic Veterinary Medical Reference — Ophthalmic Disease in Fish.',
    ],
    relatedSlugs: ['dropsy', 'fish-tuberculosis-mycobacterium', 'gas-bubble-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 8. Camallanus (internal nematode)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'camallanus-worms',
    name: 'Camallanus (Internal Nematode Worms)',
    scientificName: 'Camallanus cotti',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Moderate',
    symptoms: [
      'Red, thread-like worms protruding from the vent of the fish',
      'Wasting despite normal or increased appetite',
      'Distended abdomen in heavy infestations',
      'Reduced fertility and lost fry in livebearer-keeping systems',
    ],
    causes: [
      'Ingestion of infected copepod intermediate hosts (in nature)',
      'Direct fish-to-fish transmission through larvae shed in feces',
      'Common in commercially imported livebearers; many tanks are infected sub-clinically for months',
    ],
    diagnosticApproach: [
      'Visual identification of red threads at the vent (a near-pathognomonic sign)',
      'Fecal-flotation microscopy for less obvious cases',
      'Necropsy with intestinal dissection in deceased specimens to confirm worm burden',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: improve diet and reduce stress to support host response',
      'Tier 2 — Supportive: increased water-change frequency to reduce environmental larval load',
      'Tier 3 — Chemotherapeutic: levamisole (the most widely-cited in-tank treatment) or fenbendazole-medicated food, per veterinary or aquaculture-extension protocol',
      'Tier 4 — Veterinary referral for breeding stock or refractory cases',
    ],
    preventionNote:
      'Camallanus is endemic in much of the commercial livebearer supply. Quarantine new arrivals for 4-6 weeks and consider a prophylactic anthelmintic course before adding to the display tank. Repeat treatments are typically required at 14-21 day intervals to catch maturing larvae.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Yanong RPE. Nematode (Roundworm) Infections in Fish. UF/IFAS Extension Circular 91.',
      'WAVMA Aquatic Veterinary Medical Reference — Helminth Infections.',
    ],
    relatedSlugs: ['hole-in-the-head', 'fish-tuberculosis-mycobacterium', 'anchor-worm-fish-lice'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 9. Anchor Worm + Fish Lice
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'anchor-worm-fish-lice',
    name: 'Anchor Worm & Fish Lice (External Crustacean Parasites)',
    scientificName: 'Lernaea spp. (anchor worm) / Argulus spp. (fish lice)',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Moderate',
    symptoms: [
      'Anchor worm — thread-like worms with forked tail visible attached to the fish, often with reddened anchor site',
      'Fish lice — flat, disc-shaped crustaceans (up to 5mm) visible crawling on the body',
      'Flashing, scratching, and reddened wounds at attachment sites',
      'Secondary bacterial infections at the wound after the parasite detaches',
    ],
    causes: [
      'Introduction with new fish, plants, or pond water — most pond-sourced fish are at risk',
      'Both parasites have free-swimming larval stages that infect new hosts',
      'Argulus can carry secondary pathogens including spring viraemia of carp virus',
    ],
    diagnosticApproach: [
      'Visual identification of the anchor (Lernaea) or disc (Argulus) on the fish',
      'Skin scrape under low-power microscopy when adults are absent but larvae suspected',
      'Inspection of pond or tank surfaces for shed Argulus, especially after dark',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: manual removal of adult anchor worms with tweezers under sedation by a veterinarian, where feasible',
      'Tier 2 — Supportive: salt baths for short-duration osmotic stress on the parasites',
      'Tier 3 — Chemotherapeutic: emamectin, diflubenzuron, or organophosphate treatments per veterinary or aquaculture-extension protocol; over-the-counter products vary by jurisdiction',
      'Tier 4 — Veterinary referral for koi ponds and high-value collections; many of the effective chemicals are restricted',
    ],
    preventionNote:
      'Quarantine and visually inspect every new fish for at least 30 days. Pond-sourced fish (koi, goldfish) are the highest-risk source. Larval stages can survive in pond water and substrate for weeks — successful eradication requires multiple treatments timed to the parasite life cycle.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'WAVMA Aquatic Veterinary Medical Reference — Crustacean Parasites.',
    ],
    relatedSlugs: ['camallanus-worms', 'koi-herpesvirus-khv', 'ich'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 10. Hole in the Head (HITH / HLLE-adjacent)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'hole-in-the-head',
    name: 'Hole in the Head (HITH / Hexamitiasis)',
    scientificName: 'Spironucleus (Hexamita) spp. — multifactorial syndrome',
    category: 'Parasitic',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Small pits or depressions on the head, particularly above the eyes and along the lateral line on the head',
      'Pits enlarge and may develop white, stringy mucus discharge',
      'Loss of appetite, weight loss, lethargy in advanced cases',
      'Most common in cichlids (oscars, discus, angelfish) and marine surgeonfish/tangs',
    ],
    causes: [
      'Spironucleus (formerly Hexamita) intestinal flagellate, considered a contributory rather than sole cause',
      'Nutritional deficiency — particularly vitamin C, vitamin D, and varied animal-protein diet',
      'Activated carbon use in some hobby reports has been associated, though the literature is mixed',
      'Chronic poor water quality, high nitrate, and stress',
    ],
    diagnosticApproach: [
      'Visual identification of the characteristic head pits',
      'Stool examination under microscopy for Spironucleus when an internal component is suspected',
      'Dietary and water-quality history — the syndrome is rarely monocausal',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: aggressive water-quality correction, lower nitrate to under 20 ppm, varied high-quality diet',
      'Tier 2 — Supportive: vitamin-enriched foods (vitamin C, soaked in liquid vitamins or commercial fortified food)',
      'Tier 3 — Chemotherapeutic: metronidazole in medicated food (the most widely cited in-water and in-food protocol) per veterinary or aquaculture-extension dose',
      'Tier 4 — Veterinary referral for valuable specimens or recurrent cases',
    ],
    preventionNote:
      'HITH is a multifactorial syndrome — environment, diet, and parasite load all contribute. Discus, oscars, and tangs are predisposed; prevent with low nitrate, varied diet rich in micronutrients, and metronidazole treatment of newly introduced cichlids in quarantine.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Francis-Floyd R. Hole-in-the-Head Disease (HITH) Spironucleus spp. UF/IFAS Extension FA-181.',
      'WAVMA Aquatic Veterinary Medical Reference — Flagellate Infections.',
    ],
    relatedSlugs: ['lateral-line-erosion', 'camallanus-worms', 'nitrate-poisoning'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 11. Neon Tetra Disease
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'neon-tetra-disease',
    name: 'Neon Tetra Disease',
    scientificName: 'Pleistophora hyphessobryconis',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Severe',
    symptoms: [
      'Loss of color in the blue or red stripe — patches of grayish-white develop',
      'Restlessness, often swimming apart from the school',
      'Difficulty swimming, curved spine in late stages',
      'Progressive muscle wasting',
    ],
    causes: [
      'Pleistophora hyphessobryconis — a microsporidian parasite forming spores in muscle tissue',
      'Transmission via ingestion — infected fish are eaten by tankmates or fish consume spore-contaminated organisms',
      'Common in commercially raised neon tetras and related characins; some reports of cross-infection in cardinals and other species',
    ],
    diagnosticApproach: [
      'Visual identification — fading of the bright stripe is the hallmark sign',
      'Microscopic examination of muscle squash preparations from a deceased fish shows the characteristic Pleistophora spores',
      'Differential against false neon tetra disease (Mycobacterium) — clinically similar, distinct organism',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: isolate or euthanize visibly affected fish to prevent oral transmission to tankmates',
      'Tier 2 — Supportive: no effective in-water treatment is documented in the peer-reviewed literature',
      'Tier 3 — Chemotherapeutic: fumagillin (limited evidence, off-label in most jurisdictions), generally regarded as unsuccessful in established infections',
      'Tier 4 — Veterinary referral; control in commercial neon production relies on stock culling rather than treatment',
    ],
    preventionNote:
      'There is no reliable cure for clinical neon tetra disease. Prevention relies on careful quarantine of new tetras, removal of any fish showing color loss, and avoidance of mixed-species ingestion (do not feed deceased fish back to the tank).',
    citations: [
      'Lom J, Dykova I. Microsporidian xenomas in fish seen in wider perspective. Folia Parasitol. 2005;52:69-81.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['fish-tuberculosis-mycobacterium', 'ich', 'velvet'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 12. Bacterial Gill Disease
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'bacterial-gill-disease',
    name: 'Bacterial Gill Disease',
    scientificName: 'Flavobacterium branchiophilum',
    category: 'Bacterial',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'High',
    symptoms: [
      'Rapid or labored gill movement and gasping at the surface',
      'Pale, swollen, or mucus-coated gill filaments visible when the operculum lifts',
      'Lethargy, off-feed, congregation near the water surface or filter outflow',
      'Sudden mortality in fingerlings and stressed adults',
    ],
    causes: [
      'Flavobacterium branchiophilum proliferation in high-organic-load, low-flow systems',
      'Crowding, poor water quality, and elevated ammonia are key trigger conditions',
      'Common in aquaculture fingerlings; secondary to environmental stress in hobby tanks',
    ],
    diagnosticApproach: [
      'Wet-mount microscopy of a gill biopsy showing dense bacterial colonization on filaments',
      'Differential against gill flukes, ammonia toxicity, and supersaturation (gas-bubble disease)',
      'Water-quality testing including dissolved oxygen and ammonia',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: large water changes, increased aeration, reduced stocking, organic-load reduction',
      'Tier 2 — Supportive: salt as a tonic at hobby-literature doses to support gill function',
      'Tier 3 — Chemotherapeutic: chloramine-T or potassium permanganate baths in aquaculture protocols; oxytetracycline-medicated food where legally available',
      'Tier 4 — Veterinary referral; aquaculture treatment is well-described but doses are weight- and water-chemistry-dependent',
    ],
    preventionNote:
      'Bacterial gill disease is opportunistic on stressed, crowded fish. Maintain reasonable stocking, perform routine water changes, ensure mechanical and biological filtration are sized for the bioload, and avoid temperature swings.',
    citations: [
      'Good C, Davidson J, Wiens GD, et al. Flavobacterium branchiophilum and bacterial gill disease in farmed rainbow trout. J Aquat Anim Health. 2015;27:1-8.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['mouth-fungus-columnaris', 'ammonia-poisoning', 'gas-bubble-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 13. Ammonia poisoning
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ammonia-poisoning',
    name: 'Ammonia Poisoning',
    category: 'Environmental',
    waterType: 'Both',
    contagious: false,
    mortality: 'Severe',
    symptoms: [
      'Gasping at the surface, hanging at filter outflow',
      'Red or inflamed gill filaments, sometimes with visible bleeding',
      'Lethargy, loss of appetite, clamped fins',
      'Sudden mass mortality when ammonia spikes acutely',
    ],
    causes: [
      'New tank without an established nitrifying biofilter (new tank syndrome)',
      'Filter media replacement, antibiotic dosing, or extended power outage killing the biofilter',
      'Overfeeding, overstocking, or a decomposing dead fish in the tank',
      'Toxicity is greater at higher pH because more of the total ammonia exists as the un-ionized NH3 form',
    ],
    diagnosticApproach: [
      'Test kit reading of total ammonia (NH3 + NH4+); any reading above 0 ppm in a stocked freshwater tank warrants action',
      'Convert to un-ionized NH3 using pH and temperature; toxicity rises sharply above pH 7.5',
      'History — recent tank setup, filter media changes, antibiotic course, or stocking change',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: immediate large water change (50 percent) with dechlorinated, temperature-matched water; repeat as needed',
      'Tier 2 — Supportive: ammonia-binding water conditioner (Prime / AmQuel) to detoxify ammonia while the biofilter recovers',
      'Tier 3 — Biological: add live nitrifying-bacteria culture or seed media from an established tank to rebuild biological filtration',
      'Tier 4 — Investigation: identify and correct the upstream cause (overstocking, dead fish, biofilter loss)',
    ],
    preventionNote:
      'Complete the nitrogen cycle before adding fish, never replace all filter media at once, avoid overfeeding, and test ammonia weekly for the first 6 weeks of any new tank. Ammonia at any detectable level is harmful — the long-term target is 0 ppm.',
    citations: [
      'Francis-Floyd R, Watson C, Petty BD, et al. Ammonia in Aquatic Systems. UF/IFAS Extension FA-16.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Boyd CE, Tucker CS. Pond Aquaculture Water Quality Management. Springer, 1998.',
    ],
    relatedSlugs: ['nitrite-poisoning', 'nitrate-poisoning', 'bacterial-gill-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 14. Nitrite poisoning
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'nitrite-poisoning',
    name: 'Nitrite Poisoning (Brown Blood Disease)',
    category: 'Environmental',
    waterType: 'Both',
    contagious: false,
    mortality: 'High',
    symptoms: [
      'Lethargy, gasping at the surface despite normal dissolved oxygen',
      'Brownish discoloration of gill tissue (methemoglobinemia)',
      'Loss of appetite, hanging near surface or returns',
      'Sudden mortality in stocked tanks with rising nitrite',
    ],
    causes: [
      'Incomplete nitrification — ammonia-oxidizing bacteria established but nitrite-oxidizing bacteria not yet established (mid-cycle)',
      'Biofilter disruption from antibiotic dosing, chlorine exposure, or filter media replacement',
      'Nitrite binds hemoglobin to form methemoglobin, which cannot transport oxygen — the fish suffocates in oxygen-rich water',
    ],
    diagnosticApproach: [
      'Test kit reading of nitrite; any reading above 0 ppm is clinically significant',
      'Concurrent ammonia test to identify cycle stage',
      'Brown gill color is the gross-pathology hallmark of severe methemoglobinemia',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: large water change with dechlorinated, temperature-matched water',
      'Tier 2 — Supportive: chloride salt addition (1 g sodium chloride per liter, hobby-literature dose) competitively blocks nitrite uptake at the gill',
      'Tier 3 — Biological: add nitrifying-bacteria culture or media from a cycled tank',
      'Tier 4 — Investigation: identify and fix the upstream cause (cycle disruption, overstocking)',
    ],
    preventionNote:
      'Cycle the tank before stocking, never replace all filter media at once, and during early stocking test ammonia and nitrite at least weekly. Chloride salt is a useful emergency tool but does not substitute for water changes and biofilter recovery.',
    citations: [
      'Francis-Floyd R, Watson C, Yanong RPE. Nitrite Poisoning in Aquatic Animals. UF/IFAS Extension FA-3.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Boyd CE, Tucker CS. Pond Aquaculture Water Quality Management. Springer, 1998.',
    ],
    relatedSlugs: ['ammonia-poisoning', 'nitrate-poisoning', 'bacterial-gill-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 15. Nitrate poisoning
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'nitrate-poisoning',
    name: 'Nitrate Poisoning (Chronic Nitrate Toxicity)',
    category: 'Environmental',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Chronic loss of color, reduced growth, suppressed appetite over weeks to months',
      'Increased susceptibility to opportunistic infection (fin rot, columnaris, HITH)',
      'In sensitive species (invertebrates, corals, fry) reproductive failure and direct mortality at elevated levels',
      'Acute nitrate shock when fish from a low-nitrate environment are moved to a high-nitrate tank',
    ],
    causes: [
      'Accumulation as the end-product of nitrification when water changes are infrequent',
      'Overstocking, overfeeding, and uneaten food driving nitrogen input',
      'Tap-water source nitrate above 10 ppm in some agricultural regions',
      'Sensitivity varies by species — invertebrates and reef organisms are far more sensitive than most freshwater fish',
    ],
    diagnosticApproach: [
      'Test kit reading of nitrate; freshwater target is typically under 20-40 ppm, reef and sensitive species under 5 ppm',
      'Compare tank water to source water to identify the magnitude of in-tank accumulation',
      'History of water-change frequency and stocking density',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: increase water-change frequency and volume; serial smaller changes to avoid osmotic shock',
      'Tier 2 — Supportive: add fast-growing plants (freshwater) or refugium macroalgae (marine) to consume nitrate biologically',
      'Tier 3 — Chemical: nitrate-reduction filter media or carbon dosing for advanced reef systems',
      'Tier 4 — Source: switch to a low-nitrate water source (RO/DI) if tap nitrate is the input',
    ],
    preventionNote:
      'Routine water changes are the primary nitrate-control tool. A weekly 20-30 percent water change in a moderately stocked freshwater tank keeps nitrate within hobbyist-acceptable bounds; reef and invertebrate systems require more frequent and lower-nutrient regimes.',
    citations: [
      'Camargo JA, Alonso A, Salamanca A. Nitrate toxicity to aquatic animals. Chemosphere. 2005;58:1255-67.',
      'Yanong RPE. Nitrate in Aquaculture and Aquariums. UF/IFAS Extension FA-150.',
      'Boyd CE, Tucker CS. Pond Aquaculture Water Quality Management. Springer, 1998.',
    ],
    relatedSlugs: ['ammonia-poisoning', 'nitrite-poisoning', 'hole-in-the-head'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 16. Gas Bubble Disease
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'gas-bubble-disease',
    name: 'Gas Bubble Disease (Supersaturation)',
    category: 'Environmental',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Small gas bubbles visible in fins, gills, eyes, or beneath the skin',
      'Buoyancy problems and surface gasping',
      'Pop-eye in some presentations (gas in the orbital tissues)',
      'Sudden mortality in fry and small fish, often with no obvious external sign',
    ],
    causes: [
      'Total dissolved gas pressure exceeding 100 percent saturation, typically from cold tap water warming in the tank',
      'Air leaks on the suction side of pumps drawing micro-bubbles into the water column',
      'Spring-fed pond water containing nitrogen-supersaturated groundwater',
      'Aggressive CO2 injection without adequate gas exchange in planted tanks',
    ],
    diagnosticApproach: [
      'Visual identification of bubbles in fin tissue or beneath the skin',
      'History — recent large water change with cold tap water, new pump installation, source water change',
      'Specialty saturometer measurement of total dissolved gas pressure in professional settings',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: aggressive aeration to drive off excess dissolved gases; surface agitation, air stones, increased flow',
      'Tier 2 — Supportive: lower water level briefly to increase surface area for off-gassing',
      'Tier 3 — Source: identify and fix the supersaturation source (pump air leak, cold-water-change protocol, CO2 over-injection)',
      'Tier 4 — Veterinary referral; clinical gas embolism in valuable specimens may require species-specific protocols',
    ],
    preventionNote:
      'Age and aerate cold tap water before adding it to the tank; pre-condition water in a holding container with an air stone. Inspect pump suction-side seals routinely. Reduce CO2 injection rates if the drop checker indicates over-injection.',
    citations: [
      'Speare DJ. Disorders associated with exposure to excess dissolved gases. In: Leatherland JF, Woo PTK (eds). Fish Diseases and Disorders Vol. 2. CABI, 2010.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Bouck GR. Etiology of gas bubble disease. Trans Am Fish Soc. 1980;109:703-7.',
    ],
    relatedSlugs: ['popeye-exophthalmia', 'bacterial-gill-disease', 'ammonia-poisoning'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 17. KHV
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'koi-herpesvirus-khv',
    name: 'Koi Herpesvirus (KHV)',
    scientificName: 'Cyprinid herpesvirus 3 (CyHV-3)',
    category: 'Viral',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Severe',
    symptoms: [
      'Necrotic gill lesions — mottled, sloughing tissue when the operculum lifts',
      'Sunken eyes and pale patches on the body',
      'Lethargy, anorexia, schooling near the water surface',
      'Mass mortality in a tight temperature window (typically 18-28C)',
    ],
    causes: [
      'Cyprinid herpesvirus 3, the etiologic agent of KHV disease in common carp and koi',
      'Transmitted by fish-to-fish contact, contaminated water, and contaminated equipment',
      'Survivors become latent carriers and shed virus under stress — a long-standing problem for koi-pond biosecurity',
      'KHV is a listed (notifiable) disease in many jurisdictions under WOAH (OIE) guidance',
    ],
    diagnosticApproach: [
      'Suspected on clinical and epidemiological grounds — koi or common carp mortality at 18-28C',
      'Definitive diagnosis is PCR on gill or kidney tissue at an accredited diagnostic laboratory',
      'Differential against spring viraemia of carp and bacterial gill disease',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: temperature manipulation outside the 18-28C range slows mortality but does not clear infection',
      'Tier 2 — Supportive: no licensed antiviral treatment exists',
      'Tier 3 — Regulatory: in notifiable jurisdictions, suspected outbreaks must be reported to the state or national fish-health authority',
      'Tier 4 — Biosecurity: humane depopulation and disinfection of premises is the only reliable elimination route in many cases',
    ],
    preventionNote:
      'KHV prevention is biosecurity, not treatment. Quarantine all new koi for 4-8 weeks at temperatures within the permissive range, source only from KHV-tested suppliers, and disinfect nets and equipment moved between systems. Survivors carry the virus for life.',
    citations: [
      'WOAH (OIE) Aquatic Animal Health Code — Koi herpesvirus disease chapter.',
      'Pokorova D, Vesely T, Piackova V, et al. Current knowledge on koi herpesvirus (KHV). Vet Med Czech. 2005;50:139-47.',
      'Hedrick RP, Gilad O, Yun S, et al. A herpesvirus associated with mass mortality of juvenile and adult koi. J Aquat Anim Health. 2000;12:44-57.',
    ],
    relatedSlugs: ['viral-hemorrhagic-septicemia', 'anchor-worm-fish-lice', 'bacterial-gill-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 18. VHS
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'viral-hemorrhagic-septicemia',
    name: 'Viral Hemorrhagic Septicemia (VHS)',
    scientificName: 'Novirhabdovirus piscine (VHSV)',
    category: 'Viral',
    waterType: 'Both',
    contagious: true,
    mortality: 'Severe',
    symptoms: [
      'Hemorrhages in skin, gills, eyes, and internal organs',
      'Exophthalmia, abdominal distension, pale gills',
      'Erratic spiral swimming in the late neurological phase',
      'Large-scale mortality events in salmonid aquaculture and Great Lakes wild fisheries',
    ],
    causes: [
      'Viral Hemorrhagic Septicemia Virus (VHSV) — a rhabdovirus with multiple genotypes affecting different species',
      'Transmitted in water and via contaminated equipment and live-fish movements',
      'VHS is a WOAH (OIE) listed disease and is regulated in the EU and North America',
    ],
    diagnosticApproach: [
      'Suspected on clinical and epidemiological grounds in regulated species',
      'Definitive diagnosis by virus isolation in cell culture and RT-PCR at an accredited diagnostic laboratory',
      'Mandatory laboratory reporting in many jurisdictions',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: no environmental control eliminates the virus',
      'Tier 2 — Supportive: no licensed antiviral treatment',
      'Tier 3 — Regulatory: notifiable in most fish-keeping jurisdictions; report suspected cases to the state or national fish-health authority',
      'Tier 4 — Biosecurity: depopulation, disinfection, and source-restriction are the primary control measures',
    ],
    preventionNote:
      'VHS is primarily an aquaculture and wild-fishery disease; the home aquarium risk is low but not zero, especially for keepers of cold-water species, baitfish, and pond fish. Avoid moving live baitfish between water bodies — this is a USDA-APHIS-regulated activity in affected US states.',
    citations: [
      'WOAH (OIE) Aquatic Animal Health Code — Viral haemorrhagic septicaemia chapter.',
      'USDA APHIS — VHSv Fact Sheet. https://www.aphis.usda.gov',
      'Skall HF, Olesen NJ, Mellergaard S. Viral haemorrhagic septicaemia virus in marine fish and its implications for fish farming. J Fish Dis. 2005;28:509-29.',
    ],
    relatedSlugs: ['koi-herpesvirus-khv', 'dropsy', 'fish-tuberculosis-mycobacterium'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 19. Fish TB (Mycobacterium)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'fish-tuberculosis-mycobacterium',
    name: 'Fish Tuberculosis (Mycobacteriosis)',
    scientificName: 'Mycobacterium marinum, M. fortuitum, M. chelonae',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: true,
    mortality: 'High',
    symptoms: [
      'Chronic wasting despite normal appetite, loss of body condition over months',
      'Spinal curvature, exophthalmia, ulcerative skin lesions',
      'Internal granulomas on necropsy — gray-white nodules in spleen, kidney, liver',
      'Slow-onset, often misdiagnosed for months in established tanks',
    ],
    causes: [
      'Mycobacterium species, slow-growing acid-fast bacteria with environmental reservoirs',
      'Transmission via ingestion of infected tissue, contaminated water, and through wounds',
      'M. marinum is zoonotic and causes "fish tank granuloma" in keepers with cut or abraded skin exposed to tank water',
    ],
    diagnosticApproach: [
      'Suspected on chronic clinical signs and history of long-standing tank issues',
      'Definitive diagnosis on necropsy with acid-fast (Ziehl-Neelsen) staining of internal nodules',
      'PCR available at specialty aquatic-vet laboratories for species identification',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: there is no reliable in-tank cure; depopulation and disinfection are the practical control',
      'Tier 2 — Supportive: improve husbandry to reduce stress in valuable specimens, accepting that the underlying infection persists',
      'Tier 3 — Chemotherapeutic: multi-drug regimens (rifampin, isoniazid, ethambutol) have anecdotal use in fish but are not curative and raise antimicrobial-stewardship concerns',
      'Tier 4 — Public health: keepers with skin lesions following tank contact should consult a physician about M. marinum culture and treatment',
    ],
    preventionNote:
      'Mycobacteriosis is one of the few aquarium diseases with a documented zoonotic risk. Wear waterproof gloves when servicing a tank with any unhealed cut. Quarantine new arrivals, avoid feeding live or fresh fish from unknown sources, and necropsy unexplained chronic losses.',
    citations: [
      'Decostere A, Hermans K, Haesebrouck F. Piscine mycobacteriosis: a literature review. Vet Microbiol. 2004;99:159-66.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'CDC — Mycobacterium marinum (fish tank granuloma) information for clinicians.',
    ],
    relatedSlugs: ['dropsy', 'popeye-exophthalmia', 'neon-tetra-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 20. Saprolegnia
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'saprolegnia-fungal-infection',
    name: 'Saprolegnia (Fungal Infection)',
    scientificName: 'Saprolegnia spp.',
    category: 'Fungal',
    waterType: 'Freshwater',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'White or grayish cottony growth on body, fins, or eggs',
      'Affected tissue underneath the fungal mat is typically necrotic before colonization',
      'Concurrent signs of underlying disease — injury, poor water quality, ammonia toxicity',
    ],
    causes: [
      'Saprolegnia is a water mold (oomycete), not a true fungus, and is ubiquitous in freshwater',
      'It is opportunistic — it colonizes already-damaged tissue rather than initiating infection',
      'Cold temperatures, poor water quality, and stress lower host resistance',
    ],
    diagnosticApproach: [
      'Visual identification of the cotton-wool growth',
      'Wet-mount microscopy showing characteristic hyphae (distinguishing from columnaris bacterial rods)',
      'Identify and address the underlying lesion or stressor that allowed colonization',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: water-quality correction, address the underlying injury or stressor',
      'Tier 2 — Supportive: salt baths or potassium permanganate baths under expert guidance',
      'Tier 3 — Chemotherapeutic: formalin, malachite green, or hydrogen peroxide per aquaculture-extension protocol',
      'Tier 4 — Veterinary referral for severe systemic involvement',
    ],
    preventionNote:
      'Saprolegnia is a marker of underlying tissue damage. Maintaining water quality, addressing injuries promptly, and avoiding chronic cold stress are the primary preventives. Routine "fungus medication" is usually treating the symptom rather than the cause.',
    citations: [
      'van West P. Saprolegnia parasitica, an oomycete pathogen with a fishy appetite. Mycologist. 2006;20:99-104.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Yanong RPE. Fungal Diseases of Fish. UF/IFAS Extension Circular 91.',
    ],
    relatedSlugs: ['egg-fungus', 'mouth-fungus-columnaris', 'fin-rot-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 21. Egg fungus
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'egg-fungus',
    name: 'Egg Fungus',
    scientificName: 'Saprolegnia spp. on fish eggs',
    category: 'Fungal',
    waterType: 'Freshwater',
    contagious: false,
    mortality: 'High',
    symptoms: [
      'White cottony growth on individual eggs or expanding through a clutch',
      'Affected eggs turn opaque-white and stop developing',
      'Healthy-looking neighboring eggs become engulfed if hyphae spread',
    ],
    causes: [
      'Saprolegnia colonization of unfertilized or dead eggs, then spreading to viable eggs',
      'Low flow, low oxygen, or warm water accelerating mold growth',
      'Removal of parental care (in mouthbrooders or guarders) increases vulnerability',
    ],
    diagnosticApproach: [
      'Visual identification of the fluffy white growth on eggs',
      'Confirm unfertilized eggs are present (they are the initial substrate) by counting opaque eggs early in the clutch',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: gentle flow over the eggs (an air stone, sponge filter, or breeder mesh) to improve oxygen exchange and discourage colonization',
      'Tier 2 — Supportive: manual removal of obviously fungused or unfertilized eggs with a turkey baster or pipette',
      'Tier 3 — Chemotherapeutic: methylene blue at hobby-literature doses in the egg-tumble container; formalin or hydrogen peroxide protocols in commercial breeding',
      'Tier 4 — Husbandry: in species with parental care, leave the parents to fan and remove dead eggs themselves where possible',
    ],
    preventionNote:
      'Egg fungus starts on dead eggs and spreads. Prevention is gentle flow, removal of unfertilized eggs, prophylactic methylene blue in artificial-incubation setups, and leaving parental care intact in species that practice it.',
    citations: [
      'Yanong RPE. Use of Hydrogen Peroxide in Finfish Aquaculture. UF/IFAS Extension FA-157.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'van West P. Saprolegnia parasitica, an oomycete pathogen with a fishy appetite. Mycologist. 2006;20:99-104.',
    ],
    relatedSlugs: ['saprolegnia-fungal-infection', 'mouth-fungus-columnaris', 'fin-rot-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 22. Tail rot
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'tail-rot',
    name: 'Tail Rot',
    scientificName: 'Aeromonas spp., Flavobacterium spp.',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Erosion, fraying, or blackened margins of the caudal (tail) fin specifically',
      'Progressive loss of fin webbing, sometimes back to the peduncle',
      'Reddened tail base in systemic cases',
      'Often co-occurs with fin rot on other fins; "tail rot" is the species-specific naming convention',
    ],
    causes: [
      'Bacterial colonization of mechanically damaged tail tissue',
      'Common in long-finned betta and fancy goldfish where the heavy tail is more prone to injury and bacterial colonization',
      'Poor water quality and warm water accelerate bacterial growth',
    ],
    diagnosticApproach: [
      'Visual inspection of the tail fin; photograph weekly to track progression or regression',
      'Distinguish from natural fin loss in betta (occasional shed) and from fin nipping (irregular bite marks rather than progressive erosion)',
      'Water-quality test as a baseline',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: clean water, aggressive water-change schedule, removal of sharp decor',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses for tolerant species; warm-but-not-hot temperature management',
      'Tier 3 — Chemotherapeutic: broad-spectrum antibiotic (kanamycin, nitrofurazone) for advancing cases',
      'Tier 4 — Veterinary referral for valuable specimens or refractory cases',
    ],
    preventionNote:
      'Tail rot in fancy fish is fundamentally a water-quality and husbandry issue. Maintain clean water, avoid decor that snags long fins, and remove fin-nipping tankmates. Fins regrow when the underlying cause is corrected, but the regrowth is often less perfect than the original tissue.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Yanong RPE. Use of Antibiotics in Ornamental Fish Aquaculture. UF/IFAS Extension Circular 84.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['fin-rot-disease', 'mouth-fungus-columnaris', 'ammonia-poisoning'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 23. LLE (Lateral Line Erosion)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'lateral-line-erosion',
    name: 'Head and Lateral Line Erosion (HLLE / LLE)',
    category: 'Nutritional',
    waterType: 'Both',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'Pitted or eroded tissue along the lateral line and around the head',
      'Loss of color and texture in affected areas',
      'Slow onset over months; rarely fatal alone but cosmetically disfiguring',
      'Most common in marine surgeonfish (tangs), freshwater cichlids, and discus',
    ],
    causes: [
      'Multifactorial; nutritional deficiency (vitamin C, vitamin A, vitamin D, iodine) is the most widely-cited contributor',
      'Long-term activated carbon use has been associated in some hobby reports and aquarium-industry studies, mechanism still debated',
      'Poor water quality, particularly elevated nitrate, and stray voltage have been implicated',
      'Distinct from HITH (which has a more pit-like, focal lesion on the head) but the two share contributing factors',
    ],
    diagnosticApproach: [
      'Visual identification of pitted, eroded skin along lateral line and head',
      'Dietary history — varied diet, fortified marine food, vitamin supplementation',
      'Water-quality history including activated-carbon use and nitrate trend',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: lower nitrate, remove or rotate activated carbon, address stray voltage if suspected',
      'Tier 2 — Supportive: varied vitamin-rich diet (vitamin C, vitamin A, vitamin D, iodine), commercial fortified foods (Mysis, Nori for marine herbivores)',
      'Tier 3 — Chemotherapeutic: metronidazole if a flagellate component is suspected (overlap with HITH)',
      'Tier 4 — Time: regression of established lesions is slow even after the cause is removed; expect months for visible improvement',
    ],
    preventionNote:
      'LLE is primarily a chronic-husbandry disease. Feed a varied, vitamin-rich diet, keep nitrate low, manage activated carbon thoughtfully, and avoid prolonged stress. Susceptible species (tangs, cichlids, discus) benefit from proactive dietary enrichment.',
    citations: [
      'Stamper MA, Spicer CW, Neiffer DL, et al. Status of head and lateral line erosion in aquarium-held fishes. J Zoo Wildl Med. 2011;42:573-82.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Francis-Floyd R. Hole-in-the-Head Disease (HITH) Spironucleus spp. UF/IFAS Extension FA-181.',
    ],
    relatedSlugs: ['hole-in-the-head', 'nitrate-poisoning', 'fish-tuberculosis-mycobacterium'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 24. Constipation
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'fish-constipation',
    name: 'Fish Constipation',
    category: 'Nutritional',
    waterType: 'Both',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'Visible abdominal distension without scale lifting',
      'Long, stringy feces hanging from the vent',
      'Reduced or absent defecation, loss of appetite',
      'Secondary swim-bladder compression presenting as buoyancy issues',
    ],
    causes: [
      'Overfeeding of dry foods, particularly without periodic fasting',
      'Diet too high in dry-expanded foods relative to fiber sources',
      'Lack of dietary fiber — particularly in herbivorous species like goldfish and plecos given primarily protein-rich pellets',
      'Sometimes an early sign of underlying systemic disease (dropsy precursor)',
    ],
    diagnosticApproach: [
      'Behavioral and dietary history',
      'Distinguish from dropsy (scales lifting), tumor (asymmetric), and gravid female (species-typical)',
      'Trial of fasting and high-fiber feeding before assuming pathology',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: 24-72 hour fast to clear the gut',
      'Tier 2 — Supportive: small feeding of shelled pea, daphnia, or other high-fiber food after the fast',
      'Tier 3 — Chemotherapeutic: Epsom salt bath at hobby-literature doses as an osmotic laxative for refractory cases',
      'Tier 4 — Investigation: if constipation recurs or signs progress, reassess for underlying systemic disease',
    ],
    preventionNote:
      'Most cases are husbandry-related. Feed only what the fish consume in 2-3 minutes, fast one day per week, and vary the diet — especially for goldfish, plecos, and other species with high-fiber natural diets that get under-served by protein-dense pellets.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Lewbart GA. Self-Assessment Color Review of Ornamental Fish. Manson Publishing, 2010.',
      'WAVMA Aquatic Veterinary Medical Reference — Nutritional Disorders in Ornamental Fish.',
    ],
    relatedSlugs: ['swim-bladder-issues', 'swim-bladder', 'dropsy'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 25. Swim bladder issues (broader buoyancy syndrome — distinct slug)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'swim-bladder-issues',
    name: 'Swim Bladder Issues (Buoyancy Disorders)',
    category: 'Environmental',
    waterType: 'Freshwater',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'Difficulty maintaining position in the water column — floating at the surface or sinking',
      'Rolling, tilting, or swimming upside-down',
      'Loss of buoyancy that comes and goes (often after feeding)',
      'Often a transient issue in fancy goldfish and bettas; rarely fatal on its own',
    ],
    causes: [
      'Gulped air from surface feeding (especially floating pellets in goldfish)',
      'Constipation compressing the swim bladder from below',
      'Anatomical predisposition in selectively bred fancy goldfish, balloon mollies, ranchu',
      'Environmental: rapid temperature swing or barometric pressure change',
    ],
    diagnosticApproach: [
      'Distinguish from bacterial swim bladder disease (chronic, often unilateral, often with other systemic signs)',
      'Dietary review — floating vs sinking pellets, feeding volume, fiber',
      'Trial of fasting and pre-soaked or sinking food',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: lower water level so the fish can reach the surface easily, reduce flow',
      'Tier 2 — Supportive: 24-48 hour fast, then small pea or daphnia feed',
      'Tier 3 — Husbandry: switch to pre-soaked or sinking pellets to reduce gulped air',
      'Tier 4 — Chronic: in fancy goldfish with persistent issues, accept long-term management — humane modifications include shallow water, soft decor, and lifelong dietary adjustments',
    ],
    preventionNote:
      'Differentiate transient buoyancy issues (this entry) from true bacterial swim bladder disease (the separate entry). Most home cases are dietary or anatomical and resolve with husbandry changes. Long-finned, deep-bodied fancy varieties are predisposed and may never be entirely free of episodes.',
    citations: [
      'Lewbart GA. Self-Assessment Color Review of Ornamental Fish. Manson Publishing, 2010.',
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'WAVMA Aquatic Veterinary Medical Reference — Buoyancy Disorders in Goldfish.',
    ],
    relatedSlugs: ['swim-bladder', 'fish-constipation', 'gas-bubble-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 26. Cloudy Eye
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cloudy-eye',
    name: 'Cloudy Eye',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'A milky, hazy, or opaque film over one or both eyes',
      'Reduced responsiveness to food or movement on the affected side',
      'Sometimes accompanied by a whitish sheen across the body (excess slime coat)',
      'In bacterial cases, concurrent fin or skin reddening',
    ],
    causes: [
      'Poor water quality — chronic ammonia, nitrite, or low-grade bacterial load is the most common trigger',
      'Physical eye injury from netting, fighting, or sharp decor',
      'Nutritional deficiency (particularly vitamin A) in chronic, bilateral presentations',
      'Old age or cataract in some species, which is not treatable',
    ],
    diagnosticApproach: [
      'Determine whether one eye (often trauma) or both (often water quality or systemic) is affected',
      'Water-quality test — cloudy eye is frequently the first visible sign of a water problem',
      'Distinguish a surface haze (corneal/external, often reversible) from a deep opacity (lens cataract, usually permanent)',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: correct water quality first; many cloudy-eye cases clear on water changes alone',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses for tolerant species; varied vitamin-rich diet for nutritional cases',
      'Tier 3 — Chemotherapeutic: broad-spectrum antibiotic only where a bacterial cause is evident and water quality is already corrected',
      'Tier 4 — Veterinary referral for valuable specimens or a non-resolving deep opacity',
    ],
    preventionNote:
      'Cloudy eye is usually a water-quality barometer rather than a primary disease. Keep ammonia and nitrite at 0, perform routine water changes, handle fish gently, and feed a varied diet. A surface haze from poor water typically clears once the environment is corrected; a deep lens opacity (cataract) generally does not.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Lewbart GA. Self-Assessment Color Review of Ornamental Fish. Manson Publishing, 2010.',
      'WAVMA Aquatic Veterinary Medical Reference — Ophthalmic Disease in Fish.',
    ],
    relatedSlugs: ['popeye-exophthalmia', 'ammonia-poisoning', 'fin-rot-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 27. Lymphocystis
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'lymphocystis',
    name: 'Lymphocystis (Cauliflower Disease)',
    scientificName: 'Lymphocystivirus (Iridoviridae)',
    category: 'Viral',
    waterType: 'Both',
    contagious: true,
    mortality: 'Low',
    symptoms: [
      'White to pinkish wart-like or cauliflower-like nodules on fins, mouth, and body',
      'Clusters of grain-sized growths that enlarge slowly over weeks',
      'Generally no impairment of feeding or behavior unless growths obstruct the mouth or gills',
      'Self-limiting in most cases — nodules often regress on their own over weeks to months',
    ],
    causes: [
      'Lymphocystis virus, an iridovirus that causes enormous enlargement of infected skin cells',
      'Stress and poor water quality predispose fish and prolong the course',
      'Transmission by contact with infected fish or shed virus, often slow within a tank',
    ],
    diagnosticApproach: [
      'Visual identification of the characteristic cauliflower-like nodules — fairly distinctive',
      'Differential against epistylis and external parasites (which are mobile or stalked) and against tumors',
      'Histology confirms the grossly enlarged infected cells in uncertain cases',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: optimize water quality and reduce stress to support immune clearance',
      'Tier 2 — Supportive: there is no specific antiviral; the disease is usually allowed to run its self-limiting course',
      'Tier 3 — Surgical: a veterinarian may remove growths that obstruct the mouth, eye, or gill in severe cases',
      'Tier 4 — Veterinary referral when growths impair function or fail to regress over an extended period',
    ],
    preventionNote:
      'Lymphocystis is unsightly but usually harmless and self-resolving. Avoid the temptation to treat it with antibiotics or anti-parasite medication — neither works on a virus. Reduce stress, maintain good water quality, and quarantine new fish; most cases resolve without intervention.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
      'Yanong RPE. Viral Diseases of Ornamental Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['fish-pox-carp-pox', 'koi-herpesvirus-khv', 'epistylis'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 28. Costia (Slime Disease)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'costia-slime-disease',
    name: 'Costia (Slime Disease)',
    scientificName: 'Ichthyobodo necator (formerly Costia necatrix)',
    category: 'Parasitic',
    waterType: 'Both',
    contagious: true,
    mortality: 'High',
    symptoms: [
      'A bluish-white or gray film of excess mucus over the skin (the "slime" appearance)',
      'Flashing, lethargy, clamped fins, and rubbing against surfaces',
      'Rapid breathing and surface gasping when gills are colonized',
      'Rapid decline in weakened, crowded, or chilled fish',
    ],
    causes: [
      'Ichthyobodo, a tiny flagellate parasite that is among the smallest aquarium ectoparasites',
      'Proliferates on stressed, crowded, or chilled fish in poor water quality',
      'Introduced with infected fish; often an opportunist on already-compromised stock',
    ],
    diagnosticApproach: [
      'Skin or gill scrape under higher-power microscopy — the flickering, comma-shaped flagellate is small and easily missed',
      'Excess mucus and flashing without visible spots points away from ich and velvet toward a microscopic ectoparasite',
      'Differential against Chilodonella and Trichodina, which require the same microscopic confirmation',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: correct water quality and reduce crowding and chilling, which drive outbreaks',
      'Tier 2 — Supportive: salt baths at hobby-literature doses help many freshwater species',
      'Tier 3 — Chemotherapeutic: formalin or formalin/malachite green per aquaculture-extension protocol; raising temperature can help in tolerant species',
      'Tier 4 — Veterinary referral for valuable stock or rapidly progressing gill involvement',
    ],
    preventionNote:
      'Costia is an opportunist on stressed fish. Maintain warm, stable, clean water for the species kept, avoid overcrowding, and quarantine new arrivals. Because the parasite is microscopic, a skin scrape under the microscope is the only way to confirm it — treating blind for "slime disease" is unreliable.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'Yanong RPE. Flagellate Parasites of Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['chilodonella', 'trichodina', 'ich'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 29. Chilodonella
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'chilodonella',
    name: 'Chilodonella',
    scientificName: 'Chilodonella spp.',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'High',
    symptoms: [
      'A grayish-white film of excess mucus, similar in appearance to Costia',
      'Flashing, clamped fins, lethargy, and loss of appetite',
      'Labored breathing and surface gasping when the gills are heavily affected',
      'Can cause sudden heavy losses in cool water and crowded systems',
    ],
    causes: [
      'Chilodonella, a ciliated protozoan ectoparasite that thrives in cool, organically rich water',
      'Outbreaks favored by low temperature, crowding, and high organic load',
      'Introduced with infected fish; opportunistic on stressed or chilled stock',
    ],
    diagnosticApproach: [
      'Skin or gill scrape microscopy — the heart- or saucer-shaped ciliate is identifiable to a trained eye',
      'Excess mucus plus flashing without discrete spots suggests a microscopic ectoparasite rather than ich or velvet',
      'Differential against Costia and Trichodina, which present similarly and require the same microscopy',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: reduce organic load, improve water quality, and address chilling and crowding',
      'Tier 2 — Supportive: salt baths at hobby-literature doses for tolerant species',
      'Tier 3 — Chemotherapeutic: formalin or potassium permanganate baths per aquaculture-extension protocol',
      'Tier 4 — Veterinary referral for valuable stock or when gill involvement is advanced',
    ],
    preventionNote:
      'Chilodonella is a cool-water opportunist. Keep the system clean and uncrowded, avoid chilling fish below their range, and quarantine new arrivals. As with the other microscopic ectoparasites, a skin scrape under the microscope is the reliable way to confirm it before treating.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['costia-slime-disease', 'trichodina', 'bacterial-gill-disease'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 30. Trichodina
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'trichodina',
    name: 'Trichodina',
    scientificName: 'Trichodina spp.',
    category: 'Parasitic',
    waterType: 'Both',
    contagious: true,
    mortality: 'Moderate',
    symptoms: [
      'Excess mucus production giving the skin a dull, pale, or filmy look',
      'Flashing and rubbing against surfaces, clamped fins',
      'Irritated, frayed fins and reddened skin patches in heavier infestations',
      'Gill irritation with increased respiration when gills are colonized',
    ],
    causes: [
      'Trichodina, a disc-shaped ciliate ectoparasite that feeds on skin and gill surfaces',
      'A classic indicator of poor water quality and high organic load — its presence often signals husbandry problems',
      'Spreads in crowded systems and is introduced with infected fish',
    ],
    diagnosticApproach: [
      'Skin or gill scrape microscopy — the rotating, disc-shaped ciliate with a ring of denticles is distinctive and often described as a "flying saucer"',
      'Heavy Trichodina loads almost always accompany an environmental problem, so test water as part of the workup',
      'Differential against Costia and Chilodonella, which share the excess-mucus presentation',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: improve water quality and reduce organic load — often the single most effective step',
      'Tier 2 — Supportive: salt baths at hobby-literature doses for tolerant species',
      'Tier 3 — Chemotherapeutic: formalin or potassium permanganate baths per aquaculture-extension protocol',
      'Tier 4 — Veterinary referral for valuable stock or persistent infestations',
    ],
    preventionNote:
      'Trichodina is widely regarded as a barometer of water quality — light numbers are tolerated by healthy fish, and heavy infestations point to an environmental fault. The most durable control is excellent husbandry: clean water, low organic load, sensible stocking, and quarantine of new fish.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'Yanong RPE. Ciliated Protozoan Parasites of Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['costia-slime-disease', 'chilodonella', 'ich'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 31. Epistylis
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'epistylis',
    name: 'Epistylis (Red Sore / Stalked Ciliate)',
    scientificName: 'Epistylis spp.',
    category: 'Parasitic',
    waterType: 'Both',
    contagious: false,
    mortality: 'Moderate',
    symptoms: [
      'Fuzzy white or off-white tufts on the skin, fins, or mouth, often mistaken for fungus',
      'A reddened, ulcerated base beneath the tuft (distinguishing it from true fungus)',
      'Growths that may have a slightly translucent or granular look compared with cottony fungus',
      'Most common in pond fish such as koi and goldfish, especially on wounds',
    ],
    causes: [
      'Epistylis, a stalked colonial ciliate that anchors to the skin surface and to existing wounds',
      'High organic load and poor water quality drive proliferation',
      'It feeds on bacteria in the water rather than on the fish directly, but its attachment damages tissue and opens the door to secondary bacterial infection',
    ],
    diagnosticApproach: [
      'Wet-mount microscopy is the key step — Epistylis shows characteristic stalked, bell-shaped ciliates, whereas true fungus shows branching hyphae',
      'The reddened, ulcerated base under the tuft is a useful gross clue that it is not Saprolegnia',
      'Water-quality testing, since outbreaks track organic load',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: aggressive water-quality correction and reduction of organic load is central, since the parasite feeds on waterborne bacteria',
      'Tier 2 — Supportive: salt baths at hobby-literature doses for tolerant species',
      'Tier 3 — Chemotherapeutic: formalin or potassium permanganate baths per aquaculture-extension protocol; secondary bacterial ulcers may need separate antibiotic treatment',
      'Tier 4 — Veterinary referral for valuable koi or refractory ulcerated cases',
    ],
    preventionNote:
      'Epistylis is frequently misdiagnosed and treated as fungus, which fails. The defining check is a microscope: stalked ciliates rather than fungal hyphae. Because it thrives on waterborne bacteria, the most effective control is reducing organic load and maintaining excellent water quality, especially in ponds.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'Yanong RPE. Sessile Ciliate Infections of Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['saprolegnia-fungal-infection', 'mouth-fungus-columnaris', 'trichodina'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 32. Black Spot Disease
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'black-spot-disease',
    name: 'Black Spot Disease (Diplopstomiasis)',
    scientificName: 'Digenean trematode metacercariae (e.g. Neascus spp.)',
    category: 'Parasitic',
    waterType: 'Freshwater',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'Small black or dark-brown spots, like grains of pepper, scattered on the skin, fins, and sometimes the gills',
      'Spots are flat and embedded rather than raised like ich or fuzzy like fungus',
      'Usually little behavioral change; light infestations are mostly cosmetic',
      'Mild flashing in some fish from skin irritation',
    ],
    causes: [
      'Encysted larval stages (metacercariae) of digenean flukes whose life cycle involves snails and fish-eating birds',
      'The dark spot is host pigment laid down around the encysted larva, not the parasite itself',
      'Almost always introduced with wild-caught fish or pond fish exposed to the snail-and-bird life cycle; it cannot complete its life cycle in a closed indoor aquarium',
    ],
    diagnosticApproach: [
      'Visual identification of flat, embedded black spots is usually sufficient',
      'History — wild-caught or pond-sourced fish strongly supports the diagnosis',
      'Differential against melanin spots (natural pigment) and against raised black growths',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: because the life cycle needs snails and birds, simply isolating affected fish in a closed tank breaks transmission; existing cysts then resolve slowly',
      'Tier 2 — Supportive: good husbandry while the encysted larvae die off over weeks to months',
      'Tier 3 — Chemotherapeutic: praziquantel is the cited anthelmintic for fluke stages, used per veterinary or aquaculture-extension protocol; many keepers simply wait the cysts out',
      'Tier 4 — Snail and intermediate-host control in pond settings to prevent reinfection',
    ],
    preventionNote:
      'Black spot disease is largely a wild-fish and pond phenomenon and is mostly cosmetic in the aquarium. Because the parasite needs a snail and a bird to complete its cycle, it cannot spread among fish in a closed indoor tank — quarantining new wild-caught fish and controlling snails in ponds is enough to prevent it establishing.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Hoffman GL. Parasites of North American Freshwater Fishes. 2nd ed. Cornell University Press, 1999.',
      'Yanong RPE. Digenean Trematode Infections in Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['anchor-worm-fish-lice', 'gill-flukes', 'ich'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 33. Fish Pox (Carp Pox)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'fish-pox-carp-pox',
    name: 'Fish Pox (Carp Pox)',
    scientificName: 'Cyprinid herpesvirus 1 (CyHV-1)',
    category: 'Viral',
    waterType: 'Freshwater',
    contagious: true,
    mortality: 'Low',
    symptoms: [
      'Smooth, waxy, milky-white to pinkish raised plaques on the skin and fins',
      'Growths described as looking like drops of candle wax or paraffin on the fish',
      'Generally no impairment of feeding or behavior; the plaques are mostly cosmetic',
      'Lesions that wax and wane with the seasons, often regressing in warm water and returning when it cools',
    ],
    causes: [
      'Cyprinid herpesvirus 1, a herpesvirus of carp, koi, goldfish, and related cyprinids',
      'Cooler water temperatures favor the appearance of lesions; warmth often suppresses them',
      'Stress and poor water quality predispose; survivors can carry the virus and show recurrent lesions',
    ],
    diagnosticApproach: [
      'Visual identification of the smooth, waxy plaques is usually sufficient in cyprinids',
      'Differential against lymphocystis (cauliflower-textured rather than waxy-smooth) and against true tumors',
      'Histology or PCR at a specialty laboratory confirms uncertain cases',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: optimize water quality and reduce stress; warming the water within the species range often reduces lesions',
      'Tier 2 — Supportive: no specific antiviral treatment exists; the condition is generally tolerated as cosmetic',
      'Tier 3 — Veterinary referral only if growths obstruct function or there is diagnostic uncertainty',
      'Tier 4 — Biosecurity: quarantine new cyprinids, since survivors can carry and transmit the virus',
    ],
    preventionNote:
      'Carp pox is unsightly but usually harmless, and there is no cure — antibiotics and anti-parasite medications do nothing to a virus. Good water quality, warmth within the species range, and low stress keep lesions to a minimum. Quarantine new koi and goldfish, as carriers can pass the virus on.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
      'Yanong RPE. Viral Diseases of Ornamental Fish. UF/IFAS Extension.',
    ],
    relatedSlugs: ['lymphocystis', 'koi-herpesvirus-khv', 'anchor-worm-fish-lice'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 34. Clamped Fins
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'clamped-fins',
    name: 'Clamped Fins',
    category: 'Environmental',
    waterType: 'Both',
    contagious: false,
    mortality: 'Low',
    symptoms: [
      'Fins held tightly folded against the body rather than spread open',
      'A pinched, hunched, or generally "unhappy" posture',
      'Often accompanied by lethargy, reduced appetite, and hiding',
      'A general distress sign rather than a disease in itself — frequently the earliest clue something is wrong',
    ],
    causes: [
      'Poor water quality — ammonia, nitrite, nitrate, or wrong pH and temperature is the most common cause',
      'External parasites (ich, velvet, flukes, Costia) causing skin and gill irritation',
      'Stress from aggression, transport, or an unsuitable environment',
      'An early or general sign of many bacterial and parasitic diseases',
    ],
    diagnosticApproach: [
      'Treat clamped fins as a symptom, not a diagnosis — test water quality first',
      'Inspect closely for spots, excess mucus, fin damage, or rapid breathing that point to a specific disease',
      'Review recent changes — new fish, water change, temperature swing, aggression — for the trigger',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: test and correct water quality and temperature; this resolves a large share of cases on its own',
      'Tier 2 — Supportive: reduce stressors, address aggression, and ensure an appropriate habitat for the species',
      'Tier 3 — Targeted: if a specific disease is found (parasite, bacterial infection), treat that condition using its own guide',
      'Tier 4 — Veterinary referral if clamping persists with other systemic signs and no environmental cause is found',
    ],
    preventionNote:
      'Clamped fins are the fish equivalent of a check-engine light: a non-specific distress sign that something in the environment or health of the fish is wrong. The first response is always to test the water, not to medicate. Stable, clean water, a suitable habitat, and low stress prevent the great majority of cases.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Lewbart GA. Self-Assessment Color Review of Ornamental Fish. Manson Publishing, 2010.',
      'WAVMA Aquatic Veterinary Medical Reference — Behavioral and Environmental Stress Signs.',
    ],
    relatedSlugs: ['ammonia-poisoning', 'ich', 'fish-tuberculosis-mycobacterium'],
  },
  // ─────────────────────────────────────────────────────────────────
  // 35. Red Pest / Hemorrhagic Septicemia (bacterial)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'red-pest-septicemia',
    name: 'Red Pest (Bacterial Hemorrhagic Septicemia)',
    scientificName: 'Aeromonas spp., Pseudomonas spp. (opportunistic)',
    category: 'Bacterial',
    waterType: 'Both',
    contagious: false,
    mortality: 'High',
    symptoms: [
      'Red streaks or blotches in the fins, tail, and along the body — visible blood vessels and hemorrhage',
      'Reddened, inflamed vent or belly; sometimes ulcers or open sores',
      'Lethargy, loss of appetite, and rapid breathing as the infection becomes systemic',
      'Can progress to dropsy, ulcers, or sudden death in severe cases',
    ],
    causes: [
      'Opportunistic gram-negative bacteria (notably Aeromonas) that are ubiquitous in aquarium water',
      'Almost always secondary to poor water quality, injury, or chronic stress that lowers host defenses',
      'High organic load, ammonia, and overcrowding are the usual precipitating conditions',
    ],
    diagnosticApproach: [
      'Visual identification of red streaking in normally clear fin tissue, distinct from the natural coloration of the fish',
      'Water-quality testing — red-streak septicemia is a near-universal companion of a water-quality fault',
      'Differential against ammonia burn (gill and skin reddening), velvet, and natural red pigmentation',
    ],
    treatmentTiers: [
      'Tier 1 — Environmental: immediate water-quality correction is the foundation — most mild cases respond to clean water alone',
      'Tier 2 — Supportive: aquarium salt at hobby-literature doses for tolerant species; quarantine affected fish to reduce tank stress',
      'Tier 3 — Chemotherapeutic: broad-spectrum antibiotics (kanamycin, nitrofurazone, or medicated food) where legally available, for systemic or advancing cases',
      'Tier 4 — Veterinary referral with culture-and-sensitivity for valuable stock or refractory infections',
    ],
    preventionNote:
      'Bacterial hemorrhagic septicemia is overwhelmingly a downstream consequence of a water-quality or stress problem, not a primary infection. Prevention is upstream husbandry: a fully cycled tank, regular water changes, sensible stocking, gentle handling, and quarantine of new fish. Reaching for antibiotics before fixing the environment usually fails.',
    citations: [
      'Noga EJ. Fish Disease: Diagnosis and Treatment. 2nd ed. Wiley-Blackwell, 2010.',
      'Yanong RPE. Use of Antibiotics in Ornamental Fish Aquaculture. UF/IFAS Extension Circular 84.',
      'Roberts RJ (ed). Fish Pathology. 4th ed. Wiley-Blackwell, 2012.',
    ],
    relatedSlugs: ['dropsy', 'fin-rot-disease', 'ammonia-poisoning'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getDiseaseBySlug(slug: string): Disease | undefined {
  return Diseases.find((d) => d.slug === slug)
}

export function getRelatedDiseases(slug: string, limit = 3): Disease[] {
  const current = getDiseaseBySlug(slug)
  if (!current) return []

  // Prefer explicit relatedSlugs from the entry; fall back to same-category matches.
  const explicit: Disease[] = (current.relatedSlugs ?? [])
    .map((s) => getDiseaseBySlug(s))
    .filter((d): d is Disease => d !== undefined)

  if (explicit.length >= limit) return explicit.slice(0, limit)

  const fallback = Diseases.filter(
    (d) => d.slug !== slug && d.category === current.category && !explicit.some((e) => e.slug === d.slug),
  ).slice(0, limit - explicit.length)

  return [...explicit, ...fallback].slice(0, limit)
}

// Slugs of existing hand-written disease pages we MUST NOT regenerate.
// Used by generateStaticParams in /health/[slug]/page.tsx to filter out
// (defensive; all entries in this file already use non-colliding slugs).
export const RESERVED_HEALTH_SLUGS = new Set<string>([
  'columnaris',
  'dropsy-treatment',
  'fin-rot',
  'fish-disease-guide',
  'fish-lice-anchor-worm',
  'gill-flukes',
  'ich-treatment',
  'new-tank-syndrome',
  'nitrogen-cycle-explained',
  'pop-eye',
  'swim-bladder-disease',
  'velvet-disease',
])
