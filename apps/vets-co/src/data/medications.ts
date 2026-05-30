/**
 * Programmatic SEO data: 12 pet-medication overview entries for
 * /medications/[slug].
 *
 * Owners search "[drug] for dogs side effects" / "[drug] dosage" with
 * HIGH commercial intent. We cannot legally give specific dosing — that is
 * the prescribing veterinarian's role and depends on weight, comorbidity,
 * concurrent meds, and bloodwork. We CAN describe the medication, what it
 * is prescribed for, what side effects to watch for, what monitoring is
 * required, and the threshold for calling the vet.
 *
 * Citations point only to institutional sources:
 *   - FDA CVM (Center for Veterinary Medicine) Freedom of Information
 *     summaries and the FDA-approved package inserts (labels) for each
 *     drug. These are the authoritative US regulatory references.
 *   - Plumb's Veterinary Drug Handbook (peer-reviewed veterinary
 *     pharmacology reference, 10th edition).
 *   - Maddison, Page & Church — Small Animal Clinical Pharmacology
 *     (Saunders / Elsevier).
 *   - Manufacturer monograph pages (Zoetis / Elanco / Dechra) for
 *     additional label detail when FDA CVM does not publish the full
 *     monograph publicly.
 *
 * NEVER include a specific dose, mg/kg figure, or treatment schedule in
 * this data file or in any page that consumes it. Always defer to the
 * prescribing veterinarian. See QC-STANDARDS.md §1.
 */

export type Species = 'Dog' | 'Cat' | 'Both' | 'Multi'

export interface Medication {
  slug: string
  /** Brand name + (generic) — exactly as it appears on the FDA label. */
  name: string
  genericName: string
  drugClass: string
  species: Species
  /** Conditions a vet commonly prescribes this medication for. */
  primaryUses: string[]
  /** Short paragraph describing mechanism of action in plain language. */
  howItWorks: string
  commonSideEffects: string[]
  /** Serious / rare side effects that warrant calling the vet immediately. */
  seriousSideEffects: string[]
  /** Bloodwork or other monitoring the FDA label or Plumb's recommends. */
  monitoringRequired: string
  drugInteractions: string[]
  /** Pregnancy, breed sensitivities, age restrictions, comorbidities. */
  specialPrecautions: string
  /** FDA CVM label + peer-reviewed veterinary pharmacology references. */
  citations: Array<{ label: string; href: string }>
}

// Shared citation URLs — institutional only.
const PLUMBS = 'https://www.plumbsveterinarydrugs.com/'
const FDA_FOI_INDEX = 'https://animaldrugsatfda.fda.gov/adafda/views/#/search'

export const Medications: Medication[] = [
  // ─── DOG DERMATOLOGY (3) ──────────────────────────────────────────────
  {
    slug: 'apoquel',
    name: 'Apoquel (oclacitinib)',
    genericName: 'oclacitinib',
    drugClass: 'Janus kinase (JAK) inhibitor',
    species: 'Dog',
    primaryUses: [
      'Control of pruritus (itching) associated with allergic dermatitis in dogs',
      'Control of atopic dermatitis in dogs at least 12 months of age',
    ],
    howItWorks:
      'Oclacitinib selectively inhibits Janus kinase 1 (JAK1), the intracellular enzyme that transmits the itch and inflammation signals carried by cytokines such as IL-31. By blocking that signal, Apoquel reduces the urge to scratch and the redness of allergic skin within hours — much faster than steroid alternatives, and without the appetite, thirst, and behavioral side effects of long-course prednisone.',
    commonSideEffects: [
      'Vomiting',
      'Diarrhea',
      'Lethargy',
      'Decreased appetite',
      'Mild new skin or ear infections (because immune signaling is dampened)',
    ],
    seriousSideEffects: [
      'Demodicosis or generalized skin infection',
      'Pneumonia',
      'Worsening or new neoplasia (lymphoma, mast cell tumor, transitional cell carcinoma have been reported in post-marketing surveillance)',
      'Severe bone marrow suppression with low white cells, platelets, or red cells',
    ],
    monitoringRequired:
      'The FDA label recommends a baseline CBC and chemistry before starting long-term therapy, and periodic CBC monitoring during treatment. Watch for new lumps, persistent cough, or worsening skin infections — these warrant prompt re-evaluation.',
    drugInteractions: [
      'Concurrent immunosuppressants (cyclosporine, glucocorticoids) — additive immunosuppression',
      'Vaccines — modified live vaccines may be less effective; discuss timing with your vet',
    ],
    specialPrecautions:
      'Not approved for dogs under 12 months of age or for dogs with serious infections. Use with caution in dogs with a history of cancer. Safety has not been established in breeding, pregnant, or lactating dogs.',
    citations: [
      { label: 'FDA CVM — Apoquel (oclacitinib) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Oclacitinib monograph", href: PLUMBS },
      {
        label: 'Maddison, Page & Church — Small Animal Clinical Pharmacology',
        href: 'https://www.elsevier.com/books/small-animal-clinical-pharmacology/maddison/978-0-7020-2858-8',
      },
    ],
  },
  {
    slug: 'cytopoint',
    name: 'Cytopoint (lokivetmab)',
    genericName: 'lokivetmab',
    drugClass: 'Caninized monoclonal antibody (anti-IL-31)',
    species: 'Dog',
    primaryUses: [
      'Treatment of clinical manifestations of atopic dermatitis in dogs',
      'Reduction of itch in dogs with allergic skin disease, including those who cannot tolerate Apoquel or steroids',
    ],
    howItWorks:
      'Lokivetmab is a laboratory-engineered antibody that binds and neutralizes interleukin-31 (IL-31), the cytokine most directly responsible for the itch sensation in canine atopic dermatitis. Because it is a protein-based biologic given by injection, it is cleared by normal antibody metabolism rather than the liver or kidneys — making it useful in dogs with concurrent organ disease.',
    commonSideEffects: [
      'Injection-site discomfort (transient)',
      'Lethargy in the 24 hours after the injection',
      'Mild GI upset (rare)',
    ],
    seriousSideEffects: [
      'Hypersensitivity reaction (facial swelling, hives, vomiting, collapse) — rare but possible with any injectable biologic',
      'Anaphylaxis on first or subsequent dose',
      'Loss of efficacy due to anti-drug antibody formation',
    ],
    monitoringRequired:
      'Routine bloodwork is generally not required for Cytopoint, but your vet will monitor response between injections and reassess the underlying allergy management plan. Dogs are typically observed in the clinic for a short window after the first dose for any hypersensitivity reaction.',
    drugInteractions: [
      'No known pharmacokinetic interactions because Cytopoint is not metabolized by the liver',
      "May be combined with antibiotics or antifungals for concurrent skin infections at the vet's discretion",
    ],
    specialPrecautions:
      'Use with caution in dogs with a known history of hypersensitivity to biologics. Safety in breeding, pregnant, or lactating dogs has not been established. Effect may be reduced in dogs that develop neutralizing antibodies after repeated dosing.',
    citations: [
      { label: 'FDA CVM — Cytopoint (lokivetmab) approval letter', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Lokivetmab monograph", href: PLUMBS },
      {
        label: 'Merck Veterinary Manual — Pharmacology of the Integumentary System',
        href: 'https://www.merckvetmanual.com/pharmacology',
      },
    ],
  },
  {
    slug: 'atopica',
    name: 'Atopica (cyclosporine)',
    genericName: 'cyclosporine (modified)',
    drugClass: 'Calcineurin inhibitor / immunomodulator',
    species: 'Both',
    primaryUses: [
      'Chronic atopic dermatitis in dogs at least 6 months of age and weighing at least 4 lb',
      'Allergic dermatitis in cats (Atopica for Cats formulation)',
      'Off-label: perianal fistula, immune-mediated keratoconjunctivitis sicca (KCS), and certain immune-mediated skin diseases',
    ],
    howItWorks:
      'Cyclosporine blocks calcineurin, the enzyme T-lymphocytes need to release interleukin-2 and other inflammatory cytokines. The result is targeted suppression of the allergic immune response in the skin, without the broad effects of steroids. Onset is slower than Apoquel — meaningful itch control usually takes four to six weeks.',
    commonSideEffects: [
      'Vomiting and soft stool (most common, especially in the first 2 weeks)',
      'Decreased appetite',
      'Gingival hyperplasia (overgrowth of the gums)',
      'Hirsutism (extra hair growth)',
      'Hypersalivation in cats',
    ],
    seriousSideEffects: [
      'Opportunistic infections (toxoplasmosis in cats; systemic fungal infection)',
      'Worsening of latent neoplasia',
      'Hepatotoxicity',
      'Nephrotoxicity at high doses or with interacting drugs',
    ],
    monitoringRequired:
      'Pre-treatment CBC, chemistry, urinalysis, and (in cats) Toxoplasma and FIV/FeLV status. Periodic bloodwork during long-term therapy. Watch closely for any new infection, weight loss, or change in appetite.',
    drugInteractions: [
      'Ketoconazole and other azole antifungals — markedly increase cyclosporine blood levels',
      'Macrolide antibiotics (erythromycin, clarithromycin)',
      "Grapefruit juice and St. John's wort",
      'Other immunosuppressants',
    ],
    specialPrecautions:
      'Cats should be tested for Toxoplasma and kept indoors with no raw food during therapy. Not recommended in dogs with a history of malignancy. Safety in breeding, pregnant, or lactating animals has not been established. Caution in patients with renal insufficiency.',
    citations: [
      { label: 'FDA CVM — Atopica (cyclosporine) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Cyclosporine monograph", href: PLUMBS },
      {
        label: 'Maddison, Page & Church — Small Animal Clinical Pharmacology',
        href: 'https://www.elsevier.com/books/small-animal-clinical-pharmacology/maddison/978-0-7020-2858-8',
      },
    ],
  },

  // ─── PAIN MANAGEMENT (3) ──────────────────────────────────────────────
  {
    slug: 'carprofen',
    name: 'Rimadyl (carprofen)',
    genericName: 'carprofen',
    drugClass: 'Non-steroidal anti-inflammatory drug (NSAID)',
    species: 'Dog',
    primaryUses: [
      'Relief of pain and inflammation associated with osteoarthritis in dogs',
      'Control of postoperative pain associated with soft-tissue and orthopedic surgery',
    ],
    howItWorks:
      'Carprofen preferentially inhibits cyclooxygenase-2 (COX-2), the enzyme that produces inflammatory prostaglandins, while sparing more of the COX-1 enzyme that protects the stomach lining and kidneys. The result is meaningful pain and inflammation relief with — when used at label doses in an appropriate patient — a better gastrointestinal safety profile than older NSAIDs.',
    commonSideEffects: [
      'Vomiting',
      'Diarrhea',
      'Decreased appetite',
      'Lethargy',
      'Mild elevation in liver enzymes',
    ],
    seriousSideEffects: [
      'Gastrointestinal ulceration or perforation (black tarry stool, vomiting blood)',
      'Acute kidney injury, especially in dehydrated dogs',
      'Idiosyncratic hepatotoxicity (most reported in Labrador Retrievers in the first 2-3 weeks)',
      'Bleeding disorders due to platelet inhibition',
    ],
    monitoringRequired:
      'Baseline CBC, chemistry, and urinalysis before starting. Recheck bloodwork at 2-4 weeks, then every 6 months or as your vet recommends for long-term therapy. Stop the drug and call the vet immediately for vomiting, diarrhea, dark stools, jaundice, or loss of appetite.',
    drugInteractions: [
      'Other NSAIDs (including aspirin) — additive ulceration and bleeding risk',
      'Corticosteroids — significantly increased GI ulcer risk; do not combine',
      'ACE inhibitors and diuretics in dogs with cardiac or renal disease',
      'Anticoagulants',
    ],
    specialPrecautions:
      'Do not give to dogs with pre-existing GI ulceration, kidney disease, liver disease, or bleeding disorders. Do not give to dehydrated dogs or with steroids. NEVER give to cats — feline NSAID dosing is entirely different and most canine NSAIDs are toxic to cats. Not for breeding, pregnant, or lactating dogs.',
    citations: [
      { label: 'FDA CVM — Rimadyl (carprofen) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Carprofen monograph", href: PLUMBS },
      {
        label: 'FDA CVM — Get the Facts about Pain Relievers for Pets',
        href: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets',
      },
    ],
  },
  {
    slug: 'meloxicam',
    name: 'Metacam (meloxicam)',
    genericName: 'meloxicam',
    drugClass: 'Non-steroidal anti-inflammatory drug (NSAID)',
    species: 'Both',
    primaryUses: [
      'Relief of pain and inflammation from osteoarthritis in dogs',
      'Control of postoperative pain in dogs',
      'Single-dose postoperative pain control in cats (oral suspension is NOT labeled for repeated use in US cats)',
    ],
    howItWorks:
      'Meloxicam is a COX-2 preferential NSAID in the oxicam family. It blocks the prostaglandin pathway that drives joint inflammation and pain. The palatable oral suspension allows precise small-volume dosing, which is why it is widely used for chronic osteoarthritis in dogs.',
    commonSideEffects: [
      'Vomiting',
      'Soft stool or diarrhea',
      'Decreased appetite',
      'Lethargy',
    ],
    seriousSideEffects: [
      'Gastrointestinal ulceration or perforation',
      'Acute kidney injury — the FDA carries a black-box warning against repeat dosing in cats specifically because of this risk',
      'Hepatotoxicity',
      'Death from acute renal failure in cats given repeat doses',
    ],
    monitoringRequired:
      'Baseline CBC, chemistry, and urinalysis. Recheck bloodwork at 2-4 weeks and then every 6 months on chronic therapy. In cats, the FDA boxed warning is explicit: repeated use of meloxicam in cats has been associated with acute renal failure and death. Owners must understand the single-dose-only label.',
    drugInteractions: [
      'Other NSAIDs and corticosteroids — additive GI and renal toxicity',
      'ACE inhibitors and furosemide in patients with cardiac or renal disease',
      'Aminoglycoside antibiotics',
      'Anticoagulants',
    ],
    specialPrecautions:
      'Contraindicated in patients with known NSAID hypersensitivity, active GI ulcer, bleeding disorders, or significant kidney/liver disease. Avoid in dehydrated patients. In cats, follow the FDA boxed warning strictly — do not redose without explicit vet direction. Not for breeding, pregnant, or lactating animals.',
    citations: [
      {
        label: 'FDA CVM — Metacam (meloxicam) Freedom of Information Summary and boxed warning',
        href: FDA_FOI_INDEX,
      },
      { label: "Plumb's Veterinary Drug Handbook — Meloxicam monograph", href: PLUMBS },
      {
        label: 'FDA CVM — Get the Facts about Pain Relievers for Pets',
        href: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets',
      },
    ],
  },
  {
    slug: 'gabapentin',
    name: 'Gabapentin',
    genericName: 'gabapentin',
    drugClass: 'GABA analog / anticonvulsant and adjunctive analgesic',
    species: 'Both',
    primaryUses: [
      'Adjunctive treatment of chronic, neuropathic, or musculoskeletal pain in dogs and cats (off-label, widely accepted)',
      'Anxiolytic for stressful vet visits, car rides, or grooming in cats (off-label)',
      'Adjunctive seizure control in dogs as part of a multi-drug protocol (off-label)',
    ],
    howItWorks:
      'Despite its name, gabapentin does not act primarily on GABA receptors. It binds the α2δ subunit of voltage-gated calcium channels in the central nervous system, dampening the release of excitatory neurotransmitters. The clinical effects are reduced neuropathic pain signaling and mild sedation. Onset is within 1-2 hours of an oral dose.',
    commonSideEffects: [
      'Sedation and ataxia (wobbly gait), especially in the first few days',
      'Mild hypersalivation',
      'Vomiting (uncommon)',
    ],
    seriousSideEffects: [
      'Profound sedation, particularly in geriatric or renally compromised patients',
      'Withdrawal seizures if a long-term anticonvulsant dose is stopped abruptly',
      'Xylitol toxicity from the commercial human oral SOLUTION (Neurontin liquid contains xylitol — fatal to dogs); always use the capsule or veterinary suspension',
    ],
    monitoringRequired:
      'Baseline chemistry to assess kidney function — gabapentin is excreted unchanged by the kidneys and accumulates if renal function is reduced. Periodic bloodwork on chronic therapy. Reassess pain control regularly.',
    drugInteractions: [
      'Other CNS depressants (opioids, trazodone, benzodiazepines) — additive sedation',
      'Antacids reduce gabapentin absorption — separate doses',
      'Hydrocodone',
    ],
    specialPrecautions:
      'Use dose adjustment in patients with renal insufficiency. Do not stop abruptly in seizure patients. Use ONLY the capsule, tablet, or compounded veterinary preparation — the human commercial oral solution contains xylitol and can kill a dog. Not established as safe in pregnant or breeding animals.',
    citations: [
      { label: "Plumb's Veterinary Drug Handbook — Gabapentin monograph", href: PLUMBS },
      {
        label: 'FDA — Xylitol toxicity in dogs (consumer alert)',
        href: 'https://www.fda.gov/consumers/consumer-updates/paws-xylitol-danger-your-dog',
      },
      {
        label: 'Merck Veterinary Manual — Pharmacology of the Nervous System',
        href: 'https://www.merckvetmanual.com/pharmacology/systemic-pharmacotherapeutics-of-the-nervous-system',
      },
    ],
  },

  // ─── CARDIAC (2) ──────────────────────────────────────────────────────
  {
    slug: 'vetmedin',
    name: 'Vetmedin (pimobendan)',
    genericName: 'pimobendan',
    drugClass: 'Inodilator (calcium sensitizer and PDE-3 inhibitor)',
    species: 'Dog',
    primaryUses: [
      'Management of congestive heart failure due to myxomatous mitral valve disease (MMVD) in dogs',
      'Management of congestive heart failure due to dilated cardiomyopathy (DCM) in dogs',
      'Delay of onset of heart failure in dogs with preclinical Stage B2 MMVD (per the EPIC and PROTECT trials)',
    ],
    howItWorks:
      'Pimobendan does two useful things at once. First, it sensitizes the cardiac troponin complex to calcium, so each heartbeat produces a stronger contraction without using more oxygen. Second, it inhibits phosphodiesterase-3 in vascular smooth muscle, opening up arteries and veins to reduce the workload on the failing heart. The combination is called inodilation.',
    commonSideEffects: [
      'Inappetence',
      'Lethargy',
      'Diarrhea',
      'Mild dyspnea',
    ],
    seriousSideEffects: [
      'Worsening of underlying outflow tract obstruction in hypertrophic cardiomyopathy',
      'Arrhythmias',
      'Sudden death in dogs with advanced cardiac disease (rare)',
    ],
    monitoringRequired:
      'Cardiac evaluation including thoracic radiographs and echocardiography to confirm diagnosis and stage. Recheck imaging and bloodwork (chemistry including kidney values) on the schedule your cardiologist or primary vet sets — typically every 3-6 months in stable heart failure. Track resting respiratory rate at home (under 30 breaths/min asleep is the target).',
    drugInteractions: [
      'Other positive inotropes (digoxin) — additive arrhythmogenic potential',
      'Beta-blockers — opposing inotropic effects; only combine under cardiology guidance',
      'NSAIDs in concurrent renal disease',
    ],
    specialPrecautions:
      'Contraindicated in dogs with hypertrophic cardiomyopathy or any condition where increased cardiac output would be harmful (e.g., aortic stenosis with severe outflow obstruction). Not for breeding, pregnant, or lactating dogs. Not labeled for cats in the US.',
    citations: [
      { label: 'FDA CVM — Vetmedin (pimobendan) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Pimobendan monograph", href: PLUMBS },
      {
        label: 'Boswood et al. — EPIC trial, Journal of Veterinary Internal Medicine',
        href: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
    ],
  },
  {
    slug: 'furosemide',
    name: 'Lasix (furosemide)',
    genericName: 'furosemide',
    drugClass: 'Loop diuretic',
    species: 'Both',
    primaryUses: [
      'Treatment of pulmonary edema secondary to congestive heart failure in dogs and cats',
      'Treatment of edema and ascites secondary to cardiac, hepatic, or renal disease',
      'Adjunctive management of hypercalcemia or acute kidney injury (specialist use)',
    ],
    howItWorks:
      'Furosemide blocks the Na-K-2Cl co-transporter in the thick ascending limb of the loop of Henle in the kidney. The result is dramatic loss of sodium, chloride, potassium, and water into the urine — pulling fluid out of waterlogged lungs and tissues. Onset after an oral dose is roughly 30-60 minutes; intravenous onset is within minutes, which is why it is the first-line ER drug for cardiogenic pulmonary edema.',
    commonSideEffects: [
      'Increased thirst and urination',
      'Mild dehydration',
      'Electrolyte derangements (low potassium, low chloride)',
      'Pre-renal azotemia (mild rise in kidney values)',
    ],
    seriousSideEffects: [
      'Severe dehydration and acute kidney injury',
      'Profound electrolyte disturbances causing weakness, arrhythmias, or collapse',
      'Ototoxicity (hearing loss) at very high IV doses',
      'Metabolic alkalosis',
    ],
    monitoringRequired:
      'Baseline and recheck chemistry, electrolytes, and renal values — typically within 5-10 days of starting and then every few months on chronic therapy. Daily home tracking of resting respiratory rate is the single most useful tool. Body weight checks help identify dehydration or fluid retention early.',
    drugInteractions: [
      'NSAIDs — blunt diuretic effect and increase nephrotoxicity',
      'ACE inhibitors — additive hypotension; standard combination but requires monitoring',
      'Aminoglycoside antibiotics — additive ototoxicity and nephrotoxicity',
      'Digoxin — diuretic-induced hypokalemia potentiates digoxin toxicity',
      'Corticosteroids — additive potassium loss',
    ],
    specialPrecautions:
      'Contraindicated in anuric patients and in animals with severe electrolyte depletion or dehydration. Use the lowest effective dose. Cats with hypertrophic cardiomyopathy can be particularly sensitive to volume depletion. Not for routine use in pregnancy.',
    citations: [
      { label: 'FDA CVM — Furosemide (Lasix) approved veterinary labels', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Furosemide monograph", href: PLUMBS },
      {
        label: 'ACVIM Consensus Statement — Diagnosis and Treatment of MMVD in Dogs',
        href: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15488',
      },
    ],
  },

  // ─── ANTIBIOTICS (2) ──────────────────────────────────────────────────
  {
    slug: 'clavamox',
    name: 'Clavamox (amoxicillin / clavulanate potassium)',
    genericName: 'amoxicillin-clavulanate',
    drugClass: 'Beta-lactam antibiotic with beta-lactamase inhibitor',
    species: 'Both',
    primaryUses: [
      'Skin and soft tissue infections (pyoderma, cellulitis, abscesses, wounds) in dogs and cats',
      'Periodontal infections',
      'Urinary tract infections caused by susceptible organisms',
      'Some upper respiratory infections',
    ],
    howItWorks:
      'Amoxicillin is a broad-spectrum penicillin that disrupts bacterial cell-wall synthesis. Clavulanate has minimal antibacterial activity on its own — its job is to inhibit beta-lactamase, the enzyme many resistant bacteria produce to destroy penicillins. The combination restores activity against many resistant strains of Staphylococcus, E. coli, and anaerobes that plain amoxicillin no longer covers.',
    commonSideEffects: [
      'Vomiting',
      'Diarrhea (most common with the chewable form on an empty stomach)',
      'Decreased appetite',
      'Yeast overgrowth in chronic or repeated courses',
    ],
    seriousSideEffects: [
      'Anaphylaxis or other hypersensitivity reaction (facial swelling, hives, collapse)',
      'Clostridial overgrowth and severe colitis',
      'Hepatotoxicity (rare, more often reported in humans than in dogs)',
      'Hemolytic anemia in rare hypersensitivity cases',
    ],
    monitoringRequired:
      'Most courses are short and do not require lab monitoring beyond the initial diagnostic workup. For recurrent or chronic infections, a urine or skin culture and sensitivity is essential — empirical use without culture drives antimicrobial resistance. Recheck the original infection at the end of the course.',
    drugInteractions: [
      'Bacteriostatic antibiotics (tetracyclines, macrolides) — theoretical antagonism',
      'Allopurinol — increased rash risk in humans, less defined in pets',
      'Probenecid — increases penicillin blood levels',
    ],
    specialPrecautions:
      'Contraindicated in animals with known penicillin or cephalosporin hypersensitivity. Use with caution in patients with significant renal impairment (dose adjustment may be needed). Give with food to reduce GI upset. Generally considered safe in pregnancy but use only when indicated.',
    citations: [
      {
        label: 'FDA CVM — Clavamox (amoxicillin-clavulanate) Freedom of Information Summary',
        href: FDA_FOI_INDEX,
      },
      { label: "Plumb's Veterinary Drug Handbook — Amoxicillin-Clavulanate monograph", href: PLUMBS },
      {
        label: 'ISCAID — Guidelines for the Diagnosis and Management of Urinary Tract Infections in Dogs and Cats',
        href: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15971',
      },
    ],
  },
  {
    slug: 'doxycycline',
    name: 'Doxycycline',
    genericName: 'doxycycline',
    drugClass: 'Tetracycline antibiotic',
    species: 'Both',
    primaryUses: [
      'Tick-borne diseases (Lyme borreliosis, ehrlichiosis, anaplasmosis, Rocky Mountain spotted fever)',
      'Heartworm pre-treatment to eliminate Wolbachia',
      'Respiratory infections (Mycoplasma, Bordetella, Chlamydia in cats)',
      'Leptospirosis (treatment and post-exposure prevention)',
    ],
    howItWorks:
      'Doxycycline binds the 30S ribosomal subunit of bacteria and blocks protein synthesis. Unlike older tetracyclines it is highly lipid-soluble — meaning it penetrates intracellular pathogens (the tick-borne organisms, Wolbachia inside heartworms, Mycoplasma) that other antibiotics miss. It also has anti-inflammatory effects independent of its antibacterial action.',
    commonSideEffects: [
      'Vomiting and inappetence (often eased by giving with food)',
      'Esophageal stricture in cats if a tablet or capsule is given dry without a water chaser',
      'Mild rise in liver enzymes',
      'Photosensitivity (sunburn risk on lightly haired skin)',
    ],
    seriousSideEffects: [
      'Esophagitis or esophageal stricture in cats (always follow a pill with water or food)',
      'Hepatotoxicity',
      'Yellow discoloration of erupting teeth in puppies and kittens under 6 months',
      'Hemolytic anemia (rare)',
    ],
    monitoringRequired:
      'Baseline chemistry to assess liver function. For tick-borne disease and heartworm protocols, recheck the relevant infectious disease panel as your vet directs. For cats, the prescription should be written for the oral suspension or a moist food, not a dry pill, to prevent strictures.',
    drugInteractions: [
      'Antacids, sucralfate, iron, calcium, and dairy — bind doxycycline and prevent absorption',
      'Warfarin and other anticoagulants — enhanced effect',
      'Penicillins — theoretical antagonism',
      'Isotretinoin — additive intracranial pressure (very rare)',
    ],
    specialPrecautions:
      'Avoid in puppies and kittens under 6 months (tooth staining) unless the indication is overwhelming (severe tick-borne disease). In cats, always follow the pill with at least 6 mL of water or a small bolus of food. Use with caution in patients with hepatic insufficiency. Not recommended in pregnancy except when benefits clearly outweigh risk.',
    citations: [
      { label: 'FDA CVM — Doxycycline approved veterinary labels', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Doxycycline monograph", href: PLUMBS },
      {
        label: 'American Heartworm Society — Current Canine Guidelines',
        href: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines',
      },
    ],
  },

  // ─── ENDOCRINE (1) ────────────────────────────────────────────────────
  {
    slug: 'vetoryl',
    name: 'Vetoryl (trilostane)',
    genericName: 'trilostane',
    drugClass: 'Adrenal steroid synthesis inhibitor',
    species: 'Dog',
    primaryUses: [
      "Treatment of pituitary-dependent hyperadrenocorticism (PDH) — the most common form of Cushing's disease in dogs",
      'Treatment of adrenal-dependent hyperadrenocorticism (ADH) in dogs not surgical candidates',
      "Off-label management of alopecia X and certain atypical Cushing's variants",
    ],
    howItWorks:
      "Trilostane reversibly inhibits 3β-hydroxysteroid dehydrogenase, the enzyme the adrenal cortex needs to make cortisol. By partially blocking this step, trilostane brings down the excess cortisol that drives Cushing's signs — excessive thirst, urination, panting, hair loss, and the classic pot-bellied appearance — without ablating the gland permanently.",
    commonSideEffects: [
      'Mild lethargy or inappetence in the first 2 weeks',
      'Vomiting or diarrhea',
      'Mild elevations in potassium',
      'Resolution of polyuria/polydipsia that some owners mistakenly read as the dog "drinking too little"',
    ],
    seriousSideEffects: [
      'Iatrogenic hypoadrenocorticism (Addisonian crisis): vomiting, weakness, collapse, low sodium, high potassium — a medical emergency',
      'Adrenal necrosis (rare but reported)',
      'Sudden death',
      'Hepatotoxicity (uncommon)',
    ],
    monitoringRequired:
      'Baseline CBC, chemistry, urinalysis, and ACTH stimulation test. ACTH stim plus chemistry recheck typically 10-14 days after starting therapy, again at 30 days, at 90 days, and then every 3-6 months. The veterinary endocrinology consensus is that monitoring is non-negotiable on trilostane — owners who skip rechecks risk an Addisonian crisis.',
    drugInteractions: [
      'Mitotane (Lysodren) — do not combine without a washout period',
      'Other drugs that affect potassium (ACE inhibitors, spironolactone, potassium-sparing diuretics)',
      'NSAIDs — additive GI and renal risk in dehydrated dogs',
    ],
    specialPrecautions:
      'Contraindicated in dogs with primary hepatic or renal disease, in pregnant or breeding dogs, and in dogs with known hypersensitivity. Owners must be counselled that any vomiting, diarrhea, weakness, or appetite loss warrants stopping the drug and calling the vet that day — these can be the first signs of iatrogenic Addisonian crisis.',
    citations: [
      { label: 'FDA CVM — Vetoryl (trilostane) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Trilostane monograph", href: PLUMBS },
      {
        label: 'ACVIM Consensus — Diagnosis of Spontaneous Canine Hyperadrenocorticism',
        href: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.12192',
      },
    ],
  },

  // ─── ANTI-ANXIETY (1) ─────────────────────────────────────────────────
  {
    slug: 'fluoxetine',
    name: 'Reconcile (fluoxetine)',
    genericName: 'fluoxetine',
    drugClass: 'Selective serotonin reuptake inhibitor (SSRI)',
    species: 'Both',
    primaryUses: [
      'Treatment of canine separation anxiety, as part of a comprehensive behavior modification plan (FDA-approved indication)',
      'Off-label treatment of generalized anxiety, noise phobias, compulsive disorders, and aggression in dogs',
      'Off-label treatment of feline urine marking, anxiety, and compulsive grooming',
    ],
    howItWorks:
      'Fluoxetine selectively blocks the reuptake of serotonin at the presynaptic neuron, increasing serotonin availability in the synapse. Over weeks, this stabilizes mood and dampens the over-reactive fear responses that drive separation anxiety, noise phobias, and compulsive behaviors. Full clinical effect typically requires 4-8 weeks of daily dosing.',
    commonSideEffects: [
      'Decreased appetite (especially the first 1-2 weeks)',
      'Lethargy or sedation',
      'Mild GI upset',
      'Restlessness or paradoxical anxiety in some dogs',
    ],
    seriousSideEffects: [
      'Serotonin syndrome (hyperthermia, tremors, agitation, seizures) if combined with other serotonergic drugs',
      'Aggression or behavior change',
      'Seizures (lowered seizure threshold; caution in epileptic patients)',
      'Anorexia significant enough to require dose reduction',
    ],
    monitoringRequired:
      'Baseline CBC and chemistry, particularly to confirm liver function. Behavioral reassessment every 2-4 weeks during titration, then quarterly. Bloodwork rechecks every 6-12 months on chronic therapy. Never stop abruptly — taper under vet guidance.',
    drugInteractions: [
      'MAO inhibitors (selegiline, amitraz collars, methylene blue) — serotonin syndrome risk; do not combine',
      'Tramadol, trazodone, ondansetron, mirtazapine, and other serotonergic drugs — additive serotonin effect',
      'Tricyclic antidepressants (clomipramine, amitriptyline)',
      'Warfarin',
      'NSAIDs — slightly increased bleeding risk',
    ],
    specialPrecautions:
      'Contraindicated in patients on MAO inhibitors and within 14 days of stopping one (including amitraz tick collars). Use with caution in epileptic dogs. Do not stop abruptly. Behavior medication only works alongside a behavior modification plan — pharmacology is not a substitute for training. Not for breeding, pregnant, or lactating animals without specialist guidance.',
    citations: [
      { label: 'FDA CVM — Reconcile (fluoxetine) Freedom of Information Summary', href: FDA_FOI_INDEX },
      { label: "Plumb's Veterinary Drug Handbook — Fluoxetine monograph", href: PLUMBS },
      {
        label: 'AVSAB Position Statement — Use of Punishment for Behavior Modification in Animals',
        href: 'https://avsab.org/resources/position-statements/',
      },
    ],
  },
]

export const MedicationsBySlug: Record<string, Medication> = Object.fromEntries(
  Medications.map((m) => [m.slug, m]),
)
