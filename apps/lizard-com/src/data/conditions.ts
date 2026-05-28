/**
 * Reptile condition reference data — Lizard.com
 *
 * 15 reptile health conditions used by the dynamic route at
 * /health/[slug]/page.tsx to render a long-tail SEO page per condition.
 *
 * Editorial posture:
 *   - This is a keeper-facing health-reference catalog, not veterinary advice.
 *   - Urgency grades are qualitative bands drawn from the herpetological-medicine
 *     literature (Mader's Reptile and Amphibian Medicine and Surgery; J Herp
 *     Med Surg; ARAV continuing-education materials); they are not quantitative
 *     case-fatality rates.
 *   - Treatments are described as tiers from husbandry correction to medical and
 *     surgical management — they are not dosing instructions.
 *   - Citations point to the published reptile-vet, ARAV, peer-reviewed journal,
 *     and university extension records that the editorial team consults; they
 *     are not endorsements of a specific protocol.
 *
 * Slug-collision rule:
 *   The /health/ tree already has hand-written guides at dehydration-reptiles,
 *   dysecdysis, egg-binding, hypocalcemia, metabolic-bone-disease, parasites,
 *   parasites-guide, reptile-feeding-guide, respiratory-infection,
 *   salmonella-prevention, sick-reptile-signs, stomatitis, thermal-burns, and
 *   vitamin-a-deficiency. Every slug in this file is chosen to NOT collide
 *   with those — the generateStaticParams in the dynamic route therefore
 *   renders all 15.
 */

export type ConditionCategory =
  | 'Critical'
  | 'Common Chronic'
  | 'Husbandry-Driven'
  | 'Species-Specific'

export type Urgency = 'Routine' | 'Sub-acute' | 'Urgent' | 'Emergency'

export type Mortality = 'Low' | 'Moderate' | 'High' | 'Severe'

export interface Condition {
  slug: string
  name: string
  shortName?: string
  category: ConditionCategory
  urgency: Urgency
  mortality: Mortality
  contagious: boolean
  affectedSpecies: string[]
  causes: string[]
  earlySymptoms: string[]
  lateSymptoms: string[]
  diagnosticLadder: string[]
  treatmentTiers: string[]
  preventionNote: string
  whenToVet: string
  faq?: Array<{ question: string; answer: string }>
  citations: string[]
  relatedSlugs?: string[]
}

export const Conditions: Condition[] = [
  // ─────────────────────────────────────────────────────────────────
  // CRITICAL (5)
  // ─────────────────────────────────────────────────────────────────

  // 1. Prolapse
  {
    slug: 'cloacal-prolapse',
    name: 'Cloacal & Hemipenal Prolapse in Reptiles',
    shortName: 'Cloacal Prolapse',
    category: 'Critical',
    urgency: 'Emergency',
    mortality: 'High',
    contagious: false,
    affectedSpecies: [
      'Bearded dragons',
      'Leopard geckos',
      'Ball pythons and other snakes (hemipenal prolapse in males)',
      'Tortoises and aquatic turtles (cloacal, phallic, or oviductal prolapse)',
      'Monitors, tegus, and iguanas',
    ],
    causes: [
      'Straining from constipation, impaction, parasitism, or cystic calculi',
      'Dystocia and reproductive-tract disease in females (oviductal prolapse)',
      'Hypocalcemia / metabolic bone disease weakening cloacal sphincter tone',
      'Tenesmus from cryptosporidiosis, coccidiosis, or enteric inflammation',
      'Post-copulatory hemipenal prolapse in male snakes and lizards',
      'Distal colonic neoplasia or foreign body in older animals',
    ],
    earlySymptoms: [
      'Pink or red moist tissue visible at the vent',
      'Persistent straining after defecation or attempts to lay',
      'Anorexia and lethargy in the 24-48 hours before prolapse',
    ],
    lateSymptoms: [
      'Dry, dark, or necrotic tissue at the vent (devitalized prolapse)',
      'Self-trauma, blood loss, or fly strike on exposed tissue',
      'Sepsis — collapse, weakness, dehydration, pale mucous membranes',
    ],
    diagnosticLadder: [
      'Identify the prolapsed organ — cloaca, distal colon, oviduct, urinary bladder, hemipenis, or phallus (each has distinct treatment)',
      'Assess viability — pink and moist suggests salvageable; dry, dark, or perforated suggests amputation',
      'Radiographs and ultrasound to rule out underlying cause (eggs, calculi, mass, impaction)',
      'Fecal direct + flotation for parasites; CBC / chemistry to assess sepsis and electrolytes',
      'Culture of devitalized tissue if surgical management is anticipated',
    ],
    treatmentTiers: [
      'Tier 1 — First aid at home: keep tissue moist with sterile saline-soaked gauze, apply hypertonic sugar or 50% dextrose to reduce edema, transport to a reptile veterinarian within hours',
      'Tier 2 — Manual reduction under sedation with lubrication, hypertonic sugar/glycerin osmotic shrinkage, and one or two purse-string sutures at the vent',
      'Tier 3 — Cloacopexy or colopexy for recurrent prolapse to anchor the tissue internally',
      'Tier 4 — Surgical amputation (hemipenectomy for non-viable hemipenis; partial colectomy or oviductal resection for necrotic tissue) by an experienced reptile or exotic-animal surgeon',
      'Tier 5 — Treat the underlying cause: deworm for parasites, lithotripsy or cystotomy for calculi, calcium and UVB correction for hypocalcemia, ovariosalpingectomy for recurrent dystocia',
    ],
    preventionNote:
      'Most reptile prolapses are a symptom of an underlying husbandry or disease problem, not a primary event. Provide species-appropriate substrate (no loose particulate for arid lizards prone to impaction), correct calcium and UVB (a hypocalcemic cloacal sphincter cannot hold tissue in), maintain hydration, and quarantine new arrivals long enough to clear cryptosporidiosis and coccidia (60-90 days minimum). Address straining the first day it is observed.',
    whenToVet:
      'Always — within hours. Prolapsed tissue dries, becomes infected, and dies quickly. Even a successful at-home reduction without addressing the underlying cause typically prolapses again within days.',
    faq: [
      {
        question: 'Can I push the prolapse back in myself?',
        answer:
          'Brief manual reduction with sterile lubrication and a clean, gloved finger is reasonable while you arrange veterinary transport, but it is not a substitute for veterinary care. Without identifying and treating the underlying cause, the prolapse will recur within hours to days and the second prolapse is usually worse than the first.',
      },
      {
        question: 'Is hemipenal prolapse the same as cloacal prolapse?',
        answer:
          'No. A male snake or lizard can prolapse one or both hemipenes (paired copulatory organs) after breeding — these look like a pair of pink, frilled tubes lateral to the vent and are distinct from a true cloacal prolapse. A non-viable hemipenis is amputated unilaterally without affecting urination or defecation; the animal can still breed with the remaining one.',
      },
    ],
    citations: [
      "Mader DR, Divers SJ (eds). Current Therapy in Reptile Medicine and Surgery. Elsevier, 2014 — Chapter on Cloacal and Reproductive-Tract Disease.",
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Position Statements and Continuing Education materials.',
      'Music MK, Strunk A. Reproductive Anatomy and Disorders of Reptiles. Vet Clin North Am Exot Anim Pract. 2016;19(3):825-851.',
    ],
    relatedSlugs: ['dystocia-egg-binding', 'reptile-parasitism', 'reptile-cryptosporidiosis'],
  },

  // 2. Egg-binding
  {
    slug: 'dystocia-egg-binding',
    name: 'Dystocia (Egg-Binding) in Reptiles — A Veterinary Reference',
    shortName: 'Dystocia (Egg-Binding)',
    category: 'Critical',
    urgency: 'Emergency',
    mortality: 'High',
    contagious: false,
    affectedSpecies: [
      'Bearded dragons (extremely common, including unmated females)',
      'Veiled and panther chameleons',
      'Leopard geckos and other Eublepharid geckos',
      'Iguanas',
      'Ball pythons, corn snakes, and other oviparous snakes',
      'Aquatic turtles and tortoises',
    ],
    causes: [
      'Obstructive dystocia — oversized, misshapen, or mineralized eggs; pelvic narrowing; mass or stricture',
      'Non-obstructive dystocia — calcium deficiency, dehydration, hypothermia, no acceptable laying site',
      'Reproductive-tract disease — salpingitis, oviductal torsion, ectopic eggs',
      'Captive-husbandry triggers — chronic over-conditioning (obesity), poor thermal gradient, missing lay-box',
      'Concurrent disease — kidney failure, MBD, hepatic lipidosis',
    ],
    earlySymptoms: [
      'Visibly gravid female past her normal lay window with no eggs produced',
      'Restlessness, digging behavior, refusal to eat',
      'Mild straining when basking',
    ],
    lateSymptoms: [
      'Persistent unproductive straining with cloacal pulsing',
      'Profound lethargy, weakness, open-mouth breathing (snakes)',
      'Cloacal prolapse, hemorrhagic discharge, or signs of sepsis (yolk coelomitis)',
    ],
    diagnosticLadder: [
      'History and physical — confirm species, confirm female is sexually mature, confirm gravidity duration',
      'Coelomic palpation — egg number and approximate position',
      'Radiographs — count eggs, assess shell calcification, look for malformed or mineralized eggs',
      'Ultrasound — assess oviductal wall thickness, look for free fluid (rupture), evaluate non-shelled follicles',
      'Bloodwork — ionized calcium, glucose, PCV, total solids before any oxytocin attempt',
    ],
    treatmentTiers: [
      'Tier 1 — Husbandry correction first: appropriate lay-box (6-12 inch deep moist substrate), correct temperatures, hydration, calm environment — many mild cases lay within 24-48 h once the lay-box is provided',
      'Tier 2 — Medical management by a veterinarian: calcium gluconate followed by oxytocin (species- and case-specific; contraindicated with obstruction), warm soaks, supportive fluids',
      'Tier 3 — Surgical management: ovocentesis (percutaneous aspiration of eggs in chelonians and large snakes when accessible), salpingotomy for obstructed but otherwise healthy oviducts',
      'Tier 4 — Ovariosalpingectomy (full spay) for recurrent dystocia, ruptured oviduct, or chronic follicular stasis — definitively prevents recurrence',
      'Tier 5 — Long-term reproductive suppression with GnRH agonists (deslorelin implants, leuprolide) for high-risk individuals',
    ],
    preventionNote:
      'Every sexually mature female reptile needs a permanent, species-appropriate lay-box (deep moist soil or coconut fiber, not sand which collapses), correct UVB and calcium throughout life, an appropriate thermal gradient, and a body-condition target that prevents obesity. Females will retain eggs and die rather than lay on inappropriate substrate — providing the box is not optional. Track every gravid female by date; the typical post-ovulation window to lay is 4-6 weeks in bearded dragons and 2-4 weeks in most colubrid snakes — escalate to a veterinarian past species norms.',
    whenToVet:
      'Same day if straining is unproductive, if the female stops eating during the laying window, if more than 48 hours have passed since active straining began, or at any point with cloacal discharge, prolapse, or systemic signs (open-mouth breathing, weakness, collapse). Use an ARAV-member or board-certified exotic-animal veterinarian when possible.',
    faq: [
      {
        question: 'Can an unmated female reptile become egg-bound?',
        answer:
          'Yes. Many female lizards (bearded dragons and chameleons especially) and some snakes develop infertile slug eggs without a male present. The same dystocia risks apply. Every mature female needs lay-box access regardless of whether you keep a male.',
      },
      {
        question: 'Will a warm bath fix egg-binding?',
        answer:
          'A single warm soak is reasonable supportive care in a mildly retained, alert female, but it is not a treatment. If there is no progress within 24-48 hours of providing optimal husbandry and a lay-box, escalate to a reptile veterinarian. Repeated home soaks while the female declines are how egg-bound reptiles die.',
      },
    ],
    citations: [
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Reproductive-Tract Disease chapter.",
      'DeNardo D. Dystocias. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      'Stahl SJ. Reproductive Disorders in Female Reptiles. J Herp Med Surg. 2002;12(3):16-24.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Continuing-education materials on reptile reproductive medicine.',
    ],
    relatedSlugs: ['cloacal-prolapse', 'hepatic-lipidosis-reptiles', 'reptile-gout'],
  },

  // 3. Septicemia
  {
    slug: 'reptile-septicemia',
    name: 'Septicemia in Reptiles — Recognition and Emergency Management',
    shortName: 'Septicemia',
    category: 'Critical',
    urgency: 'Emergency',
    mortality: 'Severe',
    contagious: false,
    affectedSpecies: [
      'All reptile species — lizards, snakes, chelonians, and crocodilians',
      'High-risk: chronically debilitated animals, post-burn or post-bite patients, post-dystocia females, hatchlings',
    ],
    causes: [
      'Bacterial translocation from severe stomatitis, pneumonia, enteritis, or salpingitis',
      'Bite, fight, or rodent-bite wounds with delayed presentation',
      'Thermal burns penetrating the skin and seeding subcutaneous infection',
      'Indwelling devices, recent surgery, or contaminated injection sites',
      'Mycobacteriosis, salmonellosis, Aeromonas / Pseudomonas in chelonians kept in poor water',
    ],
    earlySymptoms: [
      'Lethargy disproportionate to current temperature',
      'Anorexia for several days',
      'Mild petechial hemorrhages on the ventral scales or oral mucosa',
    ],
    lateSymptoms: [
      'Classic "red-belly" — diffuse erythema or petechiation of ventral scales',
      'Open-mouth breathing, dyspnea, gular pulsing',
      'Recumbency, loss of righting reflex, hypothermia',
      'Multi-organ failure — anuria, icterus, neurologic signs',
    ],
    diagnosticLadder: [
      'Physical exam — body temperature relative to enclosure, mucous-membrane color, hydration, source-of-infection survey (oral cavity, vent, skin, lungs)',
      'CBC with manual differential — heterophilia with toxic change, monocytosis, anemia of chronic disease',
      'Plasma biochemistry — hyperuricemia (renal involvement), elevated AST/CK (muscle, hepatic), hypoglycemia in advanced cases',
      'Blood culture and culture of any obvious primary site (wound, oral cavity, coelomic fluid)',
      'Imaging — radiographs and ultrasound to identify pneumonia, coelomitis, abscess, or retained eggs as a source',
    ],
    treatmentTiers: [
      'Tier 1 — Move to optimal preferred body temperature range and stabilize hydration with subcutaneous, intracoelomic, or intraosseous fluids',
      'Tier 2 — Empirical broad-spectrum antibiotics chosen for gram-negative reptilian flora (often ceftazidime and/or enrofloxacin) pending culture',
      'Tier 3 — Source control — debride and culture wounds, drain abscesses, treat stomatitis or pneumonia at the source',
      'Tier 4 — Targeted antibiotic therapy based on culture and sensitivity, continued at full course (often 4-8 weeks)',
      'Tier 5 — Critical care — assisted feeding via esophagostomy tube, analgesia, plasma transfusion in select cases',
    ],
    preventionNote:
      'Septicemia is almost always the late stage of an unaddressed primary problem — a small bite that was not cleaned, a burn that was treated at home, a respiratory infection that was given another week, a stomatitis flushed with disinfectant instead of cultured. Treat every wound, every refusing-to-eat episode, every persistent skin lesion as a developing infection until proven otherwise. Quarantine new arrivals 60-90 days and keep enclosure hygiene rigorous.',
    whenToVet:
      'Immediately. Septicemia is a true emergency — survival drops sharply once the animal is recumbent or hypothermic. Even suspicion of septicemia justifies after-hours veterinary contact.',
    citations: [
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Innis CJ. Sepsis in Reptiles. Vet Clin North Am Exot Anim Pract. 2017;20(2):407-419.',
      'Jacobson ER. Infectious Diseases and Pathology of Reptiles. CRC Press, 2007.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Antimicrobial Use Guidelines.',
    ],
    relatedSlugs: ['mouth-rot', 'reptile-abscesses', 'heat-source-burns'],
  },

  // 4. Parasitism
  {
    slug: 'reptile-parasitism',
    name: 'Internal and External Parasites in Reptiles',
    shortName: 'Parasitism',
    category: 'Critical',
    urgency: 'Urgent',
    mortality: 'Moderate',
    contagious: true,
    affectedSpecies: [
      'Wild-caught and ranched lizards, snakes, and chelonians (highest burden)',
      'Captive-bred reptiles in mixed-source collections',
      'Bearded dragons (pinworms, coccidia), leopard geckos (cryptosporidium, coccidia)',
      'Ball pythons and colubrids (mites, tapeworms, nematodes)',
      'Tortoises (oxyurids, hexamita, ascarids)',
    ],
    causes: [
      'Nematodes — ascarids, oxyurids (pinworms), strongyles, Strongyloides, Capillaria',
      'Cestodes and trematodes from intermediate-host prey items',
      'Protozoa — coccidia (Isospora, Eimeria), Entamoeba invadens, Hexamita, Cryptosporidium',
      'Pentastomes in wild-caught snakes (zoonotic — handle with care)',
      'External — snake mites (Ophionyssus natricis), ticks, chiggers',
      'Husbandry triggers — overcrowding, fecal contamination of substrate, shared water bowls between enclosures',
    ],
    earlySymptoms: [
      'Soft, malformed, or unusually frequent stools',
      'Visible parasites in feces, vent area, or substrate',
      'Black "pepper" specks on skin or in the water bowl (mites)',
      'Increased soaking, rubbing on cage furniture, or attempted shedding out of cycle',
    ],
    lateSymptoms: [
      'Progressive weight loss despite eating',
      'Anemia, lethargy, and prolapsed cloaca from straining',
      'Regurgitation in snakes; vomiting and dehydration in lizards',
      'Sudden death in heavy infections of juveniles',
    ],
    diagnosticLadder: [
      'Fecal direct smear — motile protozoa, larvae',
      'Fecal flotation (zinc sulfate preferred for nematode eggs)',
      'Fecal acid-fast or PCR for cryptosporidium',
      'Skin scrape and cellophane tape preparation for mites and oxyurid eggs',
      'CBC for eosinophilia or anemia in heavy infections',
    ],
    treatmentTiers: [
      'Tier 1 — Husbandry: deep cleaning of enclosure, sterilizable substrate during treatment, hot-water laundering of soft furniture, isolation of affected animals',
      'Tier 2 — Targeted antiparasitics under veterinary guidance: fenbendazole or panacur for most nematodes, ponazuril or sulfadimethoxine for coccidia, metronidazole for Entamoeba/Hexamita',
      'Tier 3 — Mite control: permethrin-based reptile-safe products (Provent-a-Mite) applied to enclosure surfaces (NOT directly on animal), or ivermectin under veterinary direction (DO NOT use in chelonians or indigo snakes — ivermectin is fatal)',
      'Tier 4 — Repeat fecal at 2 and 4 weeks; many parasites require two or three treatment cycles to clear',
      'Tier 5 — Cryptosporidium-positive animals: see separate cryptosporidiosis entry — typically requires lifelong management or euthanasia',
    ],
    preventionNote:
      'Quarantine every new arrival a minimum of 60-90 days in a separate room (snake mites pass on hands and clothing). Run fecal exams on entry and again at 30 days. Use disposable or sterilizable substrate during quarantine. Buy captive-bred whenever possible; ask the breeder about their parasite-screening protocol. Use feeder rodents from reputable sources to limit cestode and pentastome exposure.',
    whenToVet:
      'Whenever fecal abnormalities, weight loss, or visible parasites are observed. Never deworm blindly — wrong drug at the wrong dose can be fatal (ivermectin in chelonians; fenbendazole repeated too often can suppress bone marrow). Identify the parasite first.',
    citations: [
      'Greiner EC, Mader DR. Parasitology. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Schilliger L et al. Parasitic Diseases of Reptiles. Vet Clin North Am Exot Anim Pract. 2020;23(2):491-507.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Parasite-Screening Continuing-Education materials.',
    ],
    relatedSlugs: ['reptile-cryptosporidiosis', 'snake-mites', 'reptile-septicemia'],
  },

  // 5. Thermal burns
  {
    slug: 'heat-source-burns',
    name: 'Thermal Burns from Heat Sources in Captive Reptiles',
    shortName: 'Thermal Burns',
    category: 'Critical',
    urgency: 'Urgent',
    mortality: 'Moderate',
    contagious: false,
    affectedSpecies: [
      'Ball pythons, boas, and large constrictors (coil around heat sources)',
      'Bearded dragons and uromastyx on under-tank heaters or exposed bulbs',
      'Tortoises with belly contact on hot rocks or heat panels',
      'Any snake or lizard with access to an unguarded heat lamp, ceramic heat emitter, or hot rock',
    ],
    causes: [
      'Hot rocks — historically the leading cause; thermostat failure or no thermostat at all',
      'Unguarded ceramic heat emitters, basking bulbs, or radiant heat panels at reachable height',
      'Under-tank heaters without a thermostat — surface temperatures can exceed 50C / 120F',
      'Heat mats placed under thin substrate with a body-contact-prone snake on top',
      'Failure mode: thermostat-free setups left unattended, especially during winter heating-system changes',
    ],
    earlySymptoms: [
      'Erythema and a single discolored or pale scale patch',
      'Blistering of the ventral or dorsal scales overlying a heat source',
      'Behavioral change — animal staying away from the previously preferred warm side',
    ],
    lateSymptoms: [
      'Full-thickness eschar (dark, leathery dead skin)',
      'Secondary septicemia, "red-belly" appearance, anorexia',
      'Bone or muscle exposure in severe deep burns',
      'Contracture and scarring affecting future sheds',
    ],
    diagnosticLadder: [
      'Visual assessment — burn depth (superficial, partial-thickness, full-thickness)',
      'Body-weight, hydration, and pain assessment',
      'Wound culture and sensitivity if infection is suspected',
      'CBC and biochemistry to screen for septicemia in burns covering more than 10-15% of body surface',
      'Histopathology of an excised eschar in deep wounds to assess extent',
    ],
    treatmentTiers: [
      'Tier 1 — Remove the heat source immediately and replace it with a thermostat-controlled, properly guarded setup before the animal is returned',
      'Tier 2 — Daily cleaning with dilute chlorhexidine 0.05% or povidone-iodine 0.1-0.2%, application of silver sulfadiazine (Silvadene) cream',
      'Tier 3 — Systemic analgesia (meloxicam, tramadol, or opioids under veterinary direction) and broad-spectrum antibiotics if culture or systemic signs warrant',
      'Tier 4 — Surgical debridement of necrotic tissue; honey or hydrogel dressings; second-intention healing',
      'Tier 5 — Skin grafts or full-thickness reconstruction for extensive deep burns at a specialty practice',
    ],
    preventionNote:
      'Never use a hot rock — it is the single most preventable cause of reptile burns. Every heat source needs an in-line thermostat or proportional dimming controller and a physical guard the animal cannot push against. Verify basking surface temperatures with a probe thermometer or infrared gun, not the lamp wattage. Inspect snakes housed near radiant panels weekly during shed cycles when behavior changes.',
    whenToVet:
      'Any burn larger than a single small scale, any blistering, or any burn over the ventral surface of a snake. Small superficial burns can be managed at home with cleaning and topical antimicrobials, but second- and third-degree burns are painful, require analgesia, and predispose to fatal septicemia.',
    citations: [
      'Mitchell MA. Burn Wounds. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Integument and Wound Management chapters.",
      'Mans C, Sladky KK. Analgesia in Reptiles. J Herp Med Surg. 2013;23(1-2):11-22.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Husbandry-Caused Disease educational materials.',
    ],
    relatedSlugs: ['reptile-septicemia', 'reptile-abscesses', 'retained-shed'],
  },

  // ─────────────────────────────────────────────────────────────────
  // COMMON CHRONIC (5)
  // ─────────────────────────────────────────────────────────────────

  // 6. Gout
  {
    slug: 'reptile-gout',
    name: 'Reptile Gout (Visceral and Articular) — Uric Acid Disease',
    shortName: 'Gout',
    category: 'Common Chronic',
    urgency: 'Urgent',
    mortality: 'High',
    contagious: false,
    affectedSpecies: [
      'Carnivorous lizards fed excessive purine-rich prey (monitors, tegus)',
      'Insectivores and omnivores fed pinky mice as a staple (leopard geckos, bearded dragons)',
      'Iguanas and uromastyx (herbivores) with chronic dehydration or kidney disease',
      'Chelonians with chronic renal disease',
      'Older animals across all groups',
    ],
    causes: [
      'Chronic dehydration — the single most common driver',
      'Renal disease impairing uric acid excretion',
      'High dietary protein in primarily herbivorous species (iguanas, uromastyx fed cat food or animal protein)',
      'Hypovitaminosis A and chronic low-grade kidney injury',
      'Drug-induced — aminoglycoside antibiotics without fluid support',
      'Hot, dry husbandry without sufficient ambient humidity for the species',
    ],
    earlySymptoms: [
      'Stiff, painful gait or reluctance to move',
      'Swollen joints (articular gout) — most often distal limb joints',
      'Lethargy and reduced appetite',
    ],
    lateSymptoms: [
      'White tophaceous deposits visible under the skin or in the oral cavity',
      'Recumbency, anorexia, severe weight loss',
      'Sudden death from visceral gout (deposits on heart and great vessels)',
    ],
    diagnosticLadder: [
      'Bloodwork — uric acid usually elevated (>15-20 mg/dL is concerning; reptile reference ranges are species-specific)',
      'Hydration assessment and ionized calcium / phosphorus',
      'Radiographs — periarticular soft-tissue swelling, mineralization, renomegaly',
      'Ultrasound of coelomic cavity for kidney size and pericardial or hepatic gout deposits',
      'Fine-needle aspirate of a joint or tophus — birefringent urate crystals under polarized microscopy are diagnostic',
    ],
    treatmentTiers: [
      'Tier 1 — Aggressive hydration: warm soaks daily, subcutaneous or intracoelomic fluids under veterinary direction',
      'Tier 2 — Husbandry correction: appropriate humidity, ad-lib clean water, correct diet (reduce animal protein in herbivores)',
      'Tier 3 — Allopurinol to reduce uric acid production (dosed by an exotic-animal veterinarian)',
      'Tier 4 — Analgesia for joint pain (meloxicam can be used carefully — but is itself renally cleared; weigh risk)',
      'Tier 5 — Surgical debulking of joint tophi for quality of life in select cases; humane euthanasia for advanced visceral gout',
    ],
    preventionNote:
      'Hydration is prevention. Every reptile needs species-appropriate ambient humidity, accessible clean water, and routine soaking for species that drink poorly from a bowl (chameleons, uromastyx). Feed appropriate diets — herbivores should not receive animal protein, and insectivorous lizards should not be fed mice as a staple. Avoid nephrotoxic drugs (aminoglycosides) without fluid support and a creatinine/uric acid baseline.',
    whenToVet:
      'Any reptile with stiff gait, joint swelling, or unexplained anorexia in an animal at risk. Once visceral gout is established it is functionally irreversible; early-stage articular gout caught while uric acid is only mildly elevated has a much better prognosis.',
    citations: [
      'Reavill DR, Schmidt RE. Urinary-Tract Diseases of Reptiles. J Exot Pet Med. 2010;19(4):280-289.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Miller HA. Urinary Disorders. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Renal Disease in Reptiles educational materials.',
    ],
    relatedSlugs: ['hypovitaminosis-a', 'hepatic-lipidosis-reptiles', 'reptile-respiratory-infection'],
  },

  // 7. RI
  {
    slug: 'reptile-respiratory-infection',
    name: 'Reptile Respiratory Infection — Lower-Tract Disease (Pneumonia)',
    shortName: 'Respiratory Infection (RI)',
    category: 'Common Chronic',
    urgency: 'Urgent',
    mortality: 'High',
    contagious: true,
    affectedSpecies: [
      'Ball pythons, boas, and other snakes (especially in cool, dry housing)',
      'Bearded dragons (atypical or low-grade pneumonia)',
      'Tortoises (Mycoplasma agassizii — runny nose syndrome, contagious between chelonians)',
      'Crested geckos and tropical species housed too cool',
      'Wild-caught chameleons during acclimation',
    ],
    causes: [
      'Suboptimal temperature gradient — immune function in reptiles is temperature-dependent',
      'Chronic low humidity for tropical species (or chronic high humidity for arid species)',
      'Bacterial — gram-negative organisms predominate (Pseudomonas, Aeromonas, Klebsiella)',
      'Mycoplasma in tortoises (Upper Respiratory Tract Disease — URTD)',
      'Viral — paramyxovirus in snakes, ferlavirus, reovirus',
      'Fungal pneumonia in immunosuppressed animals',
    ],
    earlySymptoms: [
      'Audible click or wheeze on respiration',
      'Bubbles or mucus at the nostrils or glottis',
      'Increased respiratory effort, slightly extended posture',
      'Reduced appetite, mild lethargy',
    ],
    lateSymptoms: [
      'Open-mouth breathing, gular pumping',
      'Stargazing, head-tilting upward to clear airway in snakes',
      'Cyanosis of oral mucosa, recumbency',
      'Severe anorexia and weight loss',
    ],
    diagnosticLadder: [
      'Husbandry audit first — temperature (gradient, hot side, basking), humidity, ventilation, substrate',
      'Physical exam — auscultation, oral exam, hydration',
      'Radiographs (horizontal-beam preferred in snakes and large lizards) — interstitial or alveolar patterns',
      'Tracheal or lung wash for cytology, Gram stain, culture, and sensitivity',
      'Mycoplasma PCR in tortoises, paramyxovirus PCR in snake collections',
    ],
    treatmentTiers: [
      'Tier 1 — Husbandry correction: raise to species-appropriate preferred body temperature (lower end of normal can paralyze immune response), correct humidity, increase ventilation',
      'Tier 2 — Supportive care: warm soaks, oral or subcutaneous fluids, nebulization with saline plus F10 SC or acetylcysteine under veterinary direction',
      'Tier 3 — Targeted antibiotics by culture and sensitivity — empirical choices include ceftazidime, enrofloxacin, or marbofloxacin; treatment courses are typically 4-8 weeks',
      'Tier 4 — Assisted feeding via stomach tube or esophagostomy tube for prolonged anorexia',
      'Tier 5 — Specialist referral and advanced imaging for refractory cases or fungal disease',
    ],
    preventionNote:
      "Most reptile respiratory infections are husbandry diseases. Verify hot-side, cool-side, and basking temperatures with a probe — not the lamp wattage. Maintain species-correct humidity (ball pythons 50-60%, tropical chameleons 60-80%, desert species 30-40%). Ventilate enclosures. Quarantine new arrivals 60-90 days, and never house tortoises from different sources together without a negative Mycoplasma PCR first — URTD is lifelong and contagious. Don't reach for antibiotics before the husbandry has been corrected.",
    whenToVet:
      'Any open-mouth breathing, audible respiratory noise that persists more than 24 hours after a temperature correction, mucus from nares or glottis, or any respiratory sign in a tortoise housed with conspecifics. Respiratory infections rarely self-resolve and can progress to fatal pneumonia within days in severe cases.',
    citations: [
      'Schumacher J. Respiratory Diseases of Reptiles. Vet Clin North Am Exot Anim Pract. 2011;14(2):207-224.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Brown DR et al. Mycoplasma agassizii Causes Upper Respiratory Tract Disease in the Desert Tortoise. Infection and Immunity. 1994;62(10):4580-4586.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Antimicrobial Use Guidelines.',
    ],
    relatedSlugs: ['mouth-rot', 'reptile-septicemia', 'hypovitaminosis-a'],
  },

  // 8. Mites
  {
    slug: 'snake-mites',
    name: 'Snake Mites (Ophionyssus natricis) and Other Ectoparasites',
    shortName: 'Snake Mites',
    category: 'Common Chronic',
    urgency: 'Urgent',
    mortality: 'Moderate',
    contagious: true,
    affectedSpecies: [
      'Ball pythons and other pythons (most commonly affected)',
      'Boas, corn snakes, kingsnakes, and all colubrids',
      'Lizards — bearded dragons, monitors, iguanas',
      'Tortoises and aquatic turtles (less common; usually different mite species)',
    ],
    causes: [
      'Introduction of an infested new animal without quarantine',
      'Contaminated cage furniture, plants, or substrate moved between collections',
      'Reptile shows, expos, and pet-store environments (handler-to-handler transfer)',
      'Lab- or breeder-of-origin contamination on shipping containers',
    ],
    earlySymptoms: [
      'Small black or rust-colored specks on snake, in the water bowl, or under scales',
      'Increased soaking behavior',
      'Tiny moving dots visible on light-colored substrate after handling',
    ],
    lateSymptoms: [
      'Anemia in heavily infested animals — pale gums, weakness',
      'Secondary bacterial infection at feeding sites',
      'Refusal to eat, dysecdysis (poor sheds) with retained eye caps',
      'Vector for transmission of inclusion body disease (IBD) and other bloodborne pathogens',
    ],
    diagnosticLadder: [
      'Wipe down snake with damp white paper towel — mites are visible as moving black/red dots',
      'Inspect water bowl, heat pit, gular fold, and vent — favored hiding spots',
      'Cage inspection for mites and eggs in cracks, decor, and substrate',
      'Differential — substrate debris, dirt, food crumbs (none move under magnification)',
    ],
    treatmentTiers: [
      'Tier 1 — Strip the enclosure: remove all substrate, soak/replace decor, wash water bowls in hot water with bleach',
      'Tier 2 — Treat the enclosure: permethrin-based reptile-safe product (Provent-a-Mite or similar) applied to enclosure surfaces per label; do NOT apply directly to the animal',
      'Tier 3 — Bathe the animal in lukewarm water for 20-30 minutes (head out) to drown and dislodge mites; do not use detergents or harsh soaps',
      'Tier 4 — Repeat enclosure treatment at 7-10 day intervals for at least 3 cycles to break the egg-to-adult cycle',
      'Tier 5 — Veterinary-directed systemic acaricides (ivermectin in select species — NEVER in chelonians or indigo snakes, where it is fatal; fluralaner has emerging off-label use)',
    ],
    preventionNote:
      'Quarantine every new arrival a minimum of 60-90 days in a separate room. Provent-a-Mite or equivalent on quarantine enclosures during this period is a reasonable precaution. After handling animals at shows, change clothes and wash hands and arms before entering your collection room. Inspect new animals, including the gular fold, heat pit, and around the vent, before introduction.',
    whenToVet:
      'Heavy infestations causing anemia or weakness, mites in chelonian or large-collection settings, or refractory infestations that survive three treatment cycles. Also seek veterinary input before using any systemic acaricide — wrong drug or wrong species can be fatal.',
    citations: [
      'Schilliger L, Mete A, Brown PA. Ectoparasites of Reptiles. Vet Clin North Am Exot Anim Pract. 2020;23(2):509-524.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Ectoparasites chapter.",
      'Mehlhorn H et al. Ophionyssus natricis biology and control. Parasitol Res. 2014;113(1):157-162.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Parasite Control educational materials.',
    ],
    relatedSlugs: ['reptile-parasitism', 'reptile-inclusion-body-disease', 'retained-shed'],
  },

  // 9. Mouth rot
  {
    slug: 'mouth-rot',
    name: 'Mouth Rot (Infectious Stomatitis) in Reptiles',
    shortName: 'Mouth Rot',
    category: 'Common Chronic',
    urgency: 'Urgent',
    mortality: 'Moderate',
    contagious: false,
    affectedSpecies: [
      'Snakes (ball pythons, boas, colubrids) — most commonly described',
      'Bearded dragons and other lizards (often involving the periodontal tissue specifically)',
      'Tortoises and aquatic turtles (with herpesvirus or bacterial infection)',
      'Any debilitated or immunosuppressed reptile',
    ],
    causes: [
      'Bacterial overgrowth on traumatized oral mucosa (Pseudomonas, Aeromonas, Klebsiella, anaerobes)',
      'Suboptimal husbandry — cold temperatures suppress immune function',
      'Concurrent disease — pneumonia, septicemia, hypovitaminosis A',
      'Oral trauma — rostral abrasions from striking cage walls, dropped prey items, mishandled feeding',
      'Periodontal disease in agamids (bearded dragons especially) — pathognomonic yellow plaques on the gum line',
    ],
    earlySymptoms: [
      'Small petechial hemorrhages or pinpoint yellow plaques on gums or palate',
      'Mild ptyalism (excess saliva or stringy mucus)',
      'Reduced appetite or reluctance to constrict prey',
    ],
    lateSymptoms: [
      'Caseous (cheesy) yellow plaques covering large oral surfaces',
      'Open-mouth posture, facial swelling, exposed bone in advanced cases',
      'Refusal to eat, weight loss, secondary pneumonia from aspirated material',
      'Septicemia',
    ],
    diagnosticLadder: [
      'Full oral exam under appropriate restraint or sedation',
      'Husbandry audit — temperatures, humidity, recent stress',
      'Culture and sensitivity of the lesion (deep swab below the plaque)',
      'CBC and biochemistry to assess systemic involvement',
      'Skull radiographs if osteomyelitis is suspected',
    ],
    treatmentTiers: [
      'Tier 1 — Husbandry correction: optimal temperatures and humidity, reduce stress, separate from cage mates',
      'Tier 2 — Mechanical debridement of plaques under sedation and flushing with dilute chlorhexidine 0.05%',
      'Tier 3 — Topical and systemic antibiotics chosen by culture (often ceftazidime systemic plus topical silver sulfadiazine)',
      'Tier 4 — Bearded-dragon periodontal disease: surgical debridement, root planing, and long-course antibiotics by an exotic-animal veterinarian; advanced cases may require dental extraction',
      'Tier 5 — Assisted feeding and analgesia during recovery; treat any underlying systemic disease (hypovitaminosis A, septicemia)',
    ],
    preventionNote:
      'Keep oral trauma low — avoid wire-front enclosures where snakes can rub the rostrum, ensure prey size is appropriate, watch for periodontal plaque in agamids at every handling. Maintain correct temperatures so the reptile immune system can function. Address any anorexia early — anorexia plus oral plaques is mouth rot until proven otherwise. Do not "flush and hope" — undertreated stomatitis predictably progresses to septicemia.',
    whenToVet:
      "Within days. Visible oral plaques or persistent ptyalism warrants veterinary examination — undertreated mouth rot kills by sepsis or by spreading to the bone. Bearded-dragon periodontal disease in particular is often more advanced than it looks on first exam and benefits from prompt referral.",
    citations: [
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Oral-Cavity Disease chapter.",
      'Mehler SJ, Bennett RA. Oral Flora and Stomatitis in Reptiles. J Herp Med Surg. 2003;13(2):17-21.',
      'McCracken H, Birch C. Periodontal Disease in Reptiles. J Herp Med Surg. 2015;25(3-4):84-93.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Oral Disease in Reptiles educational materials.',
    ],
    relatedSlugs: ['reptile-respiratory-infection', 'reptile-septicemia', 'reptile-abscesses'],
  },

  // 10. Abscesses
  {
    slug: 'reptile-abscesses',
    name: 'Reptile Abscesses — Caseous Lesions and Their Surgical Management',
    shortName: 'Abscesses',
    category: 'Common Chronic',
    urgency: 'Urgent',
    mortality: 'Moderate',
    contagious: false,
    affectedSpecies: [
      'All reptile species — subcutaneous abscesses are very common',
      'Aural (ear) abscesses are classic in box turtles and other terrapins',
      'Bite or fight wounds in communal-housed monitors, tegus, iguanas',
      'Periodontal abscesses in bearded dragons',
    ],
    causes: [
      'Bite or claw wounds from cagemates or rodent prey',
      'Penetrating substrate injuries (sharp decor, exposed wire)',
      'Untreated burns or local infections that wall off',
      'Hypovitaminosis A predisposing to recurrent aural abscesses in chelonians',
      'Hematogenous spread from a primary infection (septicemia, pneumonia)',
    ],
    earlySymptoms: [
      'Localized swelling, often firm to fluctuant',
      'Behavioral change — reduced appetite, reluctance to move affected limb',
      'For aural abscesses: visible swelling of the tympanic scale on one side of the chelonian head',
    ],
    lateSymptoms: [
      'Drainage of caseous (cheese-like) material',
      'Lameness, ulceration, or self-trauma over the abscess',
      'Systemic signs — anorexia, weight loss, septicemia',
    ],
    diagnosticLadder: [
      'Physical exam, palpation, and assessment of fluctuance vs. solid',
      'Fine-needle aspirate — reptile pus is caseous (not liquid), so cytology shows heterophils and bacteria but the lesion is not aspirable in the dog/cat sense',
      'Culture and sensitivity from a deep surgical sample',
      'Radiographs to assess for underlying bone involvement (osteomyelitis)',
      'Bloodwork to assess systemic involvement',
    ],
    treatmentTiers: [
      'Tier 1 — Husbandry audit and correction (housing density, cagemate compatibility, substrate hazards, vitamin A status)',
      'Tier 2 — Surgical removal — reptile abscesses must be excised en bloc with the surrounding capsule; lancing and draining alone almost always fails',
      'Tier 3 — Wound packing, second-intention healing, topical antimicrobials (silver sulfadiazine or honey dressings)',
      'Tier 4 — Systemic antibiotics by culture and sensitivity, often 2-6 weeks',
      'Tier 5 — For aural abscesses in chelonians: surgical ear-canal exposure and curettage, plus correction of vitamin A deficiency',
    ],
    preventionNote:
      "House compatible animals separately. Bite-and-fight wounds are the leading cause of subcutaneous abscesses — males of most monitor, tegu, and lizard species cannot be housed together once mature. Inspect new wounds the same day and disinfect; minor wounds left untreated wall off and become abscesses 1-2 weeks later. For chelonians, correct dietary vitamin A and use clean water — recurrent aural abscesses are usually a vitamin-A and water-quality story.",
    whenToVet:
      'Any firm or fluctuant swelling that persists more than a few days. Reptile abscesses rarely resolve without surgery because the pus is caseous and walled off — early surgical excision has a much better prognosis than chronic management.',
    citations: [
      'Mauldin GN, Done LB. Soft Tissue Surgery. In: Mader DR, Divers SJ. Current Therapy in Reptile Medicine and Surgery. Elsevier, 2014.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Murray MJ. Aural Abscesses in Chelonians. J Herp Med Surg. 2006;16(4):136-142.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Reptile Surgery educational materials.',
    ],
    relatedSlugs: ['heat-source-burns', 'mouth-rot', 'hypovitaminosis-a'],
  },

  // ─────────────────────────────────────────────────────────────────
  // HUSBANDRY-DRIVEN (3)
  // ─────────────────────────────────────────────────────────────────

  // 11. Retained shed
  {
    slug: 'retained-shed',
    name: 'Retained Shed (Dysecdysis) — Causes and Correction',
    shortName: 'Retained Shed',
    category: 'Husbandry-Driven',
    urgency: 'Sub-acute',
    mortality: 'Low',
    contagious: false,
    affectedSpecies: [
      'Ball pythons, boas, and other snakes',
      'Leopard geckos and crested geckos (toe and tail retention)',
      'Bearded dragons (head and tail-tip retention)',
      'Chameleons (around eye turrets and toes)',
      'Tortoises and aquatic turtles (less commonly)',
    ],
    causes: [
      'Inadequate humidity at the time of shed (the dominant cause)',
      'Lack of a rough surface for the snake to rub against and start the shed',
      'Dehydration, especially in arid species transitioning to a shed cycle',
      'Skin disease — dermatitis, mites, burns, scar tissue',
      'Systemic illness — anorexia, parasitism, hypothyroidism',
      'Nutritional disease — hypovitaminosis A, hypovitaminosis E',
    ],
    earlySymptoms: [
      'Patches of dull or whitish skin remaining after shed should have completed',
      'Retained eye caps (spectacles) in snakes — appear as wrinkled or opaque scales over each eye',
      'Constricted bands of skin on gecko toes or tail tips',
    ],
    lateSymptoms: [
      'Necrosis or autoamputation of digits or tail tip from constricting retained skin',
      'Corneal damage in snakes with chronically retained spectacles',
      'Skin infection or fungal colonization under retained shed',
    ],
    diagnosticLadder: [
      'Confirm husbandry — humidity, hide availability, hydration, temperature',
      'Inspect the entire animal — particularly toes, tail, vent, and eyes',
      'For chronic or recurrent dysecdysis: skin scrape for mites, fecal for parasites, screening biochemistry, consider vitamin A status',
      'In snakes with chronically retained spectacles, slit-lamp examination by a veterinarian to rule out subspectacular abscess',
    ],
    treatmentTiers: [
      'Tier 1 — Soak in lukewarm shallow water for 20-30 minutes; gently roll retained skin off with a damp soft cloth',
      'Tier 2 — Provide a moist hide (sphagnum moss or damp paper towel in a covered container) during shed cycles',
      'Tier 3 — For retained gecko toe sheds: soak then carefully unwrap with fingertips or a damp cotton swab; never pull dry skin',
      'Tier 4 — Veterinary removal of retained spectacles with a lubricated tape technique under magnification — do not attempt at home (corneal damage risk)',
      'Tier 5 — Identify and correct any underlying systemic disease for chronic recurrent dysecdysis',
    ],
    preventionNote:
      'Match humidity to species: ball pythons need 50-60% baseline and 70-80% during shed; tropical species 60-80% year round; arid species need a humid hide even though ambient humidity is low. Provide a rough surface (cork bark, rough rock) for snakes to initiate shedding. Ensure hydration — many "shed problems" are dehydration problems. Provide a moist hide for leopard geckos at all times. Address retained shed within one shed cycle; constricted toe bands can cause autoamputation within weeks.',
    whenToVet:
      'Retained spectacles in snakes (do not pry), constricted digits showing color change or swelling, persistent dysecdysis across two or more shed cycles despite husbandry correction, or any concurrent skin lesion. Most acute retained sheds can be managed at home with a soak; recurrent cases need a workup.',
    citations: [
      'Schmidt RE, Reavill DR. Dysecdysis in Reptiles. J Exot Pet Med. 2010;19(4):319-325.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Integument chapter.",
      'Frye FL. Reptile Care: An Atlas of Diseases and Treatments. TFH Publications, 1991.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Husbandry educational materials.',
    ],
    relatedSlugs: ['snake-mites', 'hypovitaminosis-a', 'heat-source-burns'],
  },

  // 12. Hepatic lipidosis
  {
    slug: 'hepatic-lipidosis-reptiles',
    name: 'Hepatic Lipidosis (Fatty Liver Disease) in Reptiles',
    shortName: 'Hepatic Lipidosis',
    category: 'Husbandry-Driven',
    urgency: 'Urgent',
    mortality: 'High',
    contagious: false,
    affectedSpecies: [
      'Bearded dragons (overfed adults are textbook cases)',
      'Leopard geckos (overfed adults; gravid females are also at risk)',
      'Iguanas, uromastyx, and other herbivorous lizards fed inappropriate fatty diets',
      'Female reptiles after follicular stasis or dystocia',
      'Obese ball pythons and boas',
    ],
    causes: [
      'Chronic over-feeding and obesity — too many fatty insects (waxworms, superworms) or too-frequent feeding',
      'Sedentary lifestyle in undersized enclosures',
      'Reproductive stress — follicle resorption mobilizes body fat through the liver',
      'Anorexia from any cause in a previously obese animal — fat is mobilized to the liver faster than the liver can process it',
      'Inappropriate diet — dog food, cat food, or high-protein commercial diets in herbivores',
    ],
    earlySymptoms: [
      'Excessive body condition (obesity), fat pads in the axilla, jowl, or limb base',
      'Decreased appetite that progresses over weeks',
      'Yellow-tinged feces or urates',
    ],
    lateSymptoms: [
      'Profound anorexia, lethargy, weakness',
      'Jaundice (visible in oral mucosa and ventral skin)',
      'Coelomic enlargement (hepatomegaly), neurologic signs in end-stage disease',
      'Death from hepatic failure',
    ],
    diagnosticLadder: [
      'Body condition scoring (1-9) and weight trend over months',
      'Plasma biochemistry — elevated bile acids, AST, GLDH; hypoglycemia in advanced disease',
      'Coelomic ultrasound — hyperechoic liver, hepatomegaly',
      'Fine-needle aspirate of the liver — vacuolar hepatopathy, lipid accumulation in hepatocytes',
      'CBC for concurrent inflammation or anemia',
    ],
    treatmentTiers: [
      'Tier 1 — Stop overfeeding and correct diet; gradual weight loss over months (rapid starvation worsens lipidosis)',
      'Tier 2 — Hydration support and nutritional support — assisted feeding via syringe or esophagostomy tube with a species-appropriate balanced formula (Critical Care Carnivore, Oxbow Critical Care)',
      'Tier 3 — Hepatoprotectants (S-adenosylmethionine, silymarin) and L-carnitine under veterinary direction',
      'Tier 4 — Address any concurrent disease (dystocia, reproductive stasis) — ovariosalpingectomy may be required for follicular-stasis-driven lipidosis',
      'Tier 5 — Intensive critical care for end-stage cases (rarely successful once the animal is jaundiced)',
    ],
    preventionNote:
      'Most hepatic lipidosis is preventable obesity. Adult bearded dragons need fewer insects than juveniles and should be transitioned to a mostly-vegetable diet by age 12-18 months. Leopard geckos do not need feeding every day as adults. Provide enclosures large enough for climbing and movement. Track body weight monthly. Never allow a chronically obese reptile to become anorectic without immediate veterinary intervention — that anorexia plus obesity combination is the classic on-ramp to fatal lipidosis.',
    whenToVet:
      'Any obese reptile that stops eating for more than a few days. Any female with prolonged anorexia after a reproductive cycle. Any reptile showing yellowing of urates, mucous membranes, or skin.',
    citations: [
      'McArthur S et al. Hepatic Lipidosis in Reptiles. J Herp Med Surg. 2008;18(2):44-52.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019 — Hepatobiliary chapter.",
      'Stahl SJ. Reproductive Disease in Bearded Dragons. Vet Clin North Am Exot Anim Pract. 2003;6(1):105-126.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Nutrition educational materials.',
    ],
    relatedSlugs: ['dystocia-egg-binding', 'reptile-gout', 'hypovitaminosis-a'],
  },

  // 13. Hypovitaminosis A
  {
    slug: 'hypovitaminosis-a',
    name: 'Hypovitaminosis A (Vitamin A Deficiency) in Reptiles',
    shortName: 'Hypovitaminosis A',
    category: 'Husbandry-Driven',
    urgency: 'Sub-acute',
    mortality: 'Moderate',
    contagious: false,
    affectedSpecies: [
      'Aquatic turtles (red-eared sliders, painted turtles, map turtles) — classic puffy-eyelid presentation',
      'Box turtles and other terrestrial chelonians',
      'Chameleons (especially insectivore-only diets)',
      'Bearded dragons and other lizards fed solely waxworms or only crickets without supplementation',
      'Tortoises on grass-only diets without variety',
    ],
    causes: [
      'Insectivore diet without gut-loading or appropriate dietary supplementation',
      'Aquatic-turtle diets of only lettuce, only commercial pellets of poor quality, or only feeder fish without organ tissue',
      'Lack of dietary variety — same prey item or same vegetable for months',
      'Concurrent gastrointestinal disease impairing absorption',
      'Note that excess vitamin A is also harmful (hypervitaminosis A is iatrogenic from injections) — supplement carefully',
    ],
    earlySymptoms: [
      'Bilateral periorbital (eyelid) swelling in aquatic turtles — pathognomonic',
      'Squamous metaplasia of mucous membranes (oral, respiratory, reproductive)',
      'Recurrent aural (ear) abscesses in chelonians',
      'Poor sheds and rough skin',
    ],
    lateSymptoms: [
      'Eyes closed shut, unable to feed',
      'Stomatitis and pneumonia (secondary to mucous membrane changes)',
      'Reproductive failure in females (cystic salpingitis)',
      'Renal squamous metaplasia and renal failure',
    ],
    diagnosticLadder: [
      'Dietary history — specific list of food items over the past 3-6 months and supplementation pattern',
      'Physical exam — periorbital swelling, oral mucous membrane appearance, aural region',
      'Plasma vitamin A — not always reliable but supportive',
      'Liver biopsy in research / advanced cases for hepatic vitamin A stores',
      'Differential — primary aural abscess, conjunctivitis from water-quality issues, mycoplasma URTD',
    ],
    treatmentTiers: [
      'Tier 1 — Dietary correction: aquatic turtles should receive dark leafy greens, organ meats in moderation, whole fish, and a quality commercial pellet; insectivores need gut-loaded prey and a multi-vitamin supplement once weekly',
      'Tier 2 — Oral vitamin A supplementation (cod liver oil, beta-carotene-containing vegetables) — preferred over injection because it is harder to overdose',
      'Tier 3 — Injectable vitamin A by a veterinarian for severe deficiency — narrow therapeutic window; overdosing causes skin sloughing (hypervitaminosis A)',
      'Tier 4 — Treat secondary infections (aural abscesses surgically, ocular and respiratory disease per their own protocols)',
      'Tier 5 — Long-term husbandry correction — most reptiles do not need ongoing supplementation once diet is appropriate',
    ],
    preventionNote:
      "Feed appropriately varied species-specific diets. Aquatic turtles need a balanced diet that mirrors what an omnivorous wild turtle would eat — vegetables, protein, and a quality commercial pellet, not just lettuce or only pellets. Insectivorous lizards need gut-loaded prey (insects fed nutritionally complete food 24-48 hours before being offered) and dusted with a calcium/vitamin supplement on most feedings, plus a multi-vitamin once weekly. Do not over-supplement with injectable vitamin A unless a veterinarian has confirmed deficiency — hypervitaminosis A causes skin sloughing that's harder to treat than the original deficiency.",
    whenToVet:
      "Any swollen-eye aquatic turtle, any recurrent aural abscess in a chelonian, any reptile with chronic respiratory or ocular signs not explained by husbandry. Don't self-medicate with injectable vitamin A — the margin between deficient and toxic is narrow.",
    citations: [
      'Boyer TH, Boyer DM. Turtles and Tortoises. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Donoghue S. Nutrition. In: Mader DR. Reptile Medicine and Surgery. 2nd ed. Saunders, 2006.',
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Nutrition educational materials.',
    ],
    relatedSlugs: ['reptile-abscesses', 'mouth-rot', 'reptile-respiratory-infection'],
  },

  // ─────────────────────────────────────────────────────────────────
  // SPECIES-SPECIFIC (2)
  // ─────────────────────────────────────────────────────────────────

  // 14. Crypto
  {
    slug: 'reptile-cryptosporidiosis',
    name: 'Cryptosporidiosis in Reptiles (Cryptosporidium serpentis, C. varanii)',
    shortName: 'Cryptosporidiosis',
    category: 'Species-Specific',
    urgency: 'Urgent',
    mortality: 'Severe',
    contagious: true,
    affectedSpecies: [
      'Leopard geckos (Cryptosporidium varanii / saurophilum — formerly C. saurophilum)',
      'Snakes — pythons, boas, colubrids (Cryptosporidium serpentis)',
      'Bearded dragons and other agamids',
      'Monitor lizards',
      'Note — reptile crypto species are mostly host-specific but rare zoonotic transmission is documented; immunocompromised humans should avoid contact',
    ],
    causes: [
      'Fecal-oral transmission via contaminated water, food, or fomites',
      'Introduction of subclinical carriers (a reptile can shed crypto for months without obvious signs)',
      'Shared water bowls, communal housing, and contaminated handler hands',
      'Stress and concurrent disease worsening clinical signs in established carriers',
    ],
    earlySymptoms: [
      'Mid-body swelling in snakes (hypertrophic gastritis appears as a visible bulge mid-body)',
      'Regurgitation 2-4 days post-feeding (snakes)',
      'Progressive weight loss despite eating (leopard geckos — "stick-tail")',
      'Chronic intermittent diarrhea',
    ],
    lateSymptoms: [
      'Profound emaciation — bones visible, tail base wasted',
      'Repeated regurgitation, complete anorexia',
      'Cloacal prolapse from chronic straining',
      'Death from cachexia',
    ],
    diagnosticLadder: [
      'Fecal acid-fast staining (Ziehl-Neelsen, Kinyoun) — oocysts are 4-6 microns and red on acid-fast',
      'Fecal PCR — more sensitive than acid-fast, can differentiate species',
      'Gastric lavage with cytology in snakes for direct sampling',
      'Endoscopy and gastric biopsy for definitive diagnosis in research / refractory cases',
      'Quarantine and repeat testing — shedding is intermittent, so a single negative does not rule out infection',
    ],
    treatmentTiers: [
      'Tier 1 — Immediate isolation: separate room, dedicated tools, dedicated handlers (or treat last in rounds)',
      'Tier 2 — Supportive care: fluids, assisted feeding with bland easily digestible formula, warmth, hydration',
      'Tier 3 — Paromomycin (an aminoglycoside used off-label) reduces oocyst shedding but does not consistently clear infection; halofuginone and nitazoxanide have been investigated with mixed results',
      'Tier 4 — Long-term management of subclinical carriers may be reasonable if isolated and asymptomatic; many veterinarians and breeders elect humane euthanasia of clinically symptomatic snakes given the prognosis and contagion risk',
      'Tier 5 — Collection-wide screening and depopulation in commercial breeding operations following an outbreak',
    ],
    preventionNote:
      "Crypto is the single best argument for strict quarantine. Quarantine new arrivals 90 days minimum in a separate room with dedicated tools, and run an acid-fast or PCR fecal before introducing them to the collection. Do not share water bowls, hides, or substrate between enclosures. Disinfect with hydrogen peroxide-based products (most household disinfectants do NOT inactivate crypto oocysts — bleach is also unreliable; 5-10% ammonium hydroxide or commercial oocidal products are preferred). Recognize that buying from an unknown source or rescuing a wasting leopard gecko of unknown history is high risk.",
    whenToVet:
      'Any snake with mid-body swelling and post-prandial regurgitation, any leopard gecko with progressive tail-base wasting, or any chronic GI signs in a reptile. Confirm with acid-fast or PCR before assuming a different diagnosis. The treatment plan is heavily dependent on whether other animals share the room.',
    citations: [
      'Pedraza-Diaz S et al. Cryptosporidium in Reptiles. Vet Parasitol. 2009;165(3-4):170-178.',
      'Xiao L et al. Cryptosporidium in Reptiles — Molecular Epidemiology. Appl Environ Microbiol. 2004;70(2):891-899.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Cryptosporidiosis educational materials.',
    ],
    relatedSlugs: ['reptile-parasitism', 'cloacal-prolapse', 'hepatic-lipidosis-reptiles'],
  },

  // 15. IBD
  {
    slug: 'reptile-inclusion-body-disease',
    name: 'Inclusion Body Disease (IBD) of Boas and Pythons',
    shortName: 'Inclusion Body Disease',
    category: 'Species-Specific',
    urgency: 'Sub-acute',
    mortality: 'Severe',
    contagious: true,
    affectedSpecies: [
      'Boa constrictors (often subclinical carriers for years)',
      'Burmese pythons, ball pythons, and other pythons (typically more severe acute disease)',
      'Other boid and pythonid species, with varying disease severity',
      'No documented natural infection in non-boid/pythonid snakes',
    ],
    causes: [
      'Reptarenaviruses (Reptarenavirus genus — first identified 2012) cause the inclusion bodies; the precise role of co-infecting hartmaniviruses is still under investigation',
      'Snake mites (Ophionyssus natricis) are a leading suspected vector',
      'Direct contact between snakes, shared husbandry tools, or breeding contact',
      'Introduction of subclinically infected (especially boa) snakes to a collection',
    ],
    earlySymptoms: [
      'In boas — often subclinical for years; intermittent regurgitation or anorexia',
      'In pythons — acute central nervous system signs are more typical: stargazing, head-tremors, loss of righting reflex, "tonic" or rigid posture',
      'Anorexia and weight loss',
    ],
    lateSymptoms: [
      'Severe neurologic signs — opisthotonos, corkscrewing, persistent stargazing',
      'Chronic regurgitation, secondary infections (pneumonia, stomatitis) from immunosuppression',
      'Skin sarcomas or lymphoproliferative disease in chronic carriers',
      'Death (pythons typically months after onset; boas can carry for years)',
    ],
    diagnosticLadder: [
      'History of compatible signs in a boid or pythonid',
      'Blood smear cytology — eosinophilic intracytoplasmic inclusions in lymphocytes are suggestive',
      'Liver, kidney, or esophageal tonsil biopsy with histopathology — diagnostic inclusion bodies',
      'PCR for reptarenavirus on whole blood or tissue (most sensitive antemortem test)',
      'Postmortem — characteristic inclusion bodies on histopathology of multiple organs',
    ],
    treatmentTiers: [
      'Tier 1 — There is no curative treatment; management focuses on isolation, supportive care, and minimizing transmission',
      'Tier 2 — Aggressive mite control to remove the suspected vector (see snake-mites entry)',
      'Tier 3 — Supportive care for individual animals — assisted feeding, treatment of secondary infections, controlled handling',
      'Tier 4 — In breeding collections: PCR testing of all animals, isolation of positives, depopulation or strict quarantine of affected lineages',
      'Tier 5 — Humane euthanasia for snakes with severe progressive neurologic disease and poor quality of life',
    ],
    preventionNote:
      'Quarantine every new boa or python a minimum of 6 months in a separate room (longer than the standard 60-90 days because boas can carry the virus without obvious signs). PCR screening of all new boid arrivals is the only reliable way to clear them. Treat any mite infestation immediately and aggressively — mites are a vector. Never house boas and pythons together casually, and never breed without confirmed negative PCR status on both parents.',
    whenToVet:
      'Any neurologic signs in a pythonid (stargazing, head-tremors, loss of righting reflex), any chronic regurgitation in a boa, or any collection with multiple boids showing chronic disease. Confirm with PCR and biopsy before assuming IBD — neurologic signs in snakes can also come from septicemia, paramyxovirus, organophosphate toxicity, and other causes.',
    citations: [
      'Stenglein MD et al. Identification, Characterization, and In Vitro Culture of Highly Divergent Arenaviruses from Boa Constrictors and Annulated Tree Boas: Candidate Etiological Agents for Snake Inclusion Body Disease. mBio. 2012;3(4):e00180-12.',
      'Hetzel U et al. Reptarenaviruses in Snake Inclusion Body Disease. J Virol. 2013;87(20):10918-10935.',
      "Divers SJ, Stahl SJ (eds). Mader's Reptile and Amphibian Medicine and Surgery. 3rd ed. Elsevier, 2019.",
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — Viral Disease in Snakes educational materials.',
    ],
    relatedSlugs: ['snake-mites', 'reptile-respiratory-infection', 'reptile-septicemia'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getConditionBySlug(slug: string): Condition | undefined {
  return Conditions.find((c) => c.slug === slug)
}

export function getRelatedConditions(slug: string, limit = 3): Condition[] {
  const current = getConditionBySlug(slug)
  if (!current) return []

  const explicit: Condition[] = (current.relatedSlugs ?? [])
    .map((s) => getConditionBySlug(s))
    .filter((c): c is Condition => c !== undefined)

  if (explicit.length >= limit) return explicit.slice(0, limit)

  const fallback = Conditions.filter(
    (c) =>
      c.slug !== slug &&
      c.category === current.category &&
      !explicit.some((e) => e.slug === c.slug),
  ).slice(0, limit - explicit.length)

  return [...explicit, ...fallback].slice(0, limit)
}

// Slugs of existing hand-written health pages we MUST NOT regenerate.
// Used by generateStaticParams in /health/[slug]/page.tsx to filter out
// (defensive; all entries in this file already use non-colliding slugs).
export const RESERVED_HEALTH_SLUGS = new Set<string>([
  'dehydration-reptiles',
  'dysecdysis',
  'egg-binding',
  'hypocalcemia',
  'metabolic-bone-disease',
  'parasites',
  'parasites-guide',
  'reptile-feeding-guide',
  'respiratory-infection',
  'salmonella-prevention',
  'sick-reptile-signs',
  'stomatitis',
  'thermal-burns',
  'vitamin-a-deficiency',
])
