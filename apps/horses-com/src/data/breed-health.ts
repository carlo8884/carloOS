/**
 * Horses.com — Breed-specific health deep-dive data.
 * Source-of-truth for /breeds/[slug]/health pages.
 * Cited from: AAEP, USEF Veterinary Committee, AQHA/APHA/AHA/JC/TWHBEA/KFPS/ApHC,
 * Cornell Equine Genetics, UC Davis VGL, peer-reviewed equine literature.
 */

export type IssueFrequency = 'common' | 'occasional' | 'rare'

export interface HealthIssue {
  name: string
  frequency: IssueFrequency
  summary: string
  ageOfOnset: string
  geneticScreeningTest?: string
  citedRef?: string
}

export interface ScreeningRecommendation {
  name: string
  ageRecommended: string
  frequency: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface SourceCitation {
  ref: string
  label: string
  url?: string
}

export interface BreedHealthRecord {
  slug: string
  breedName: string
  lifespanRange: string
  overview: string
  knownHealthIssues: HealthIssue[]
  recommendedScreenings: ScreeningRecommendation[]
  breedSpecificVaccinations?: string[]
  emergencySigns: string[]
  preventiveCareTips: string[]
  insuranceCostNotes: string
  faqs: FAQ[]
  sourceCitations: SourceCitation[]
}

const thoroughbred: BreedHealthRecord = {
  slug: 'thoroughbred',
  breedName: 'Thoroughbred',
  lifespanRange: '25–30 years',
  overview:
    'Thoroughbreds combine an athletic phenotype with a punishing early racing career, producing a characteristic mid-life health profile dominated by gastric ulcer disease, orthopedic remodeling from track work, and respiratory wear. The Jockey Club registry, AAEP racetrack guidance, and Cornell\'s equine genetic database frame the standard screening priorities for the breed.',
  knownHealthIssues: [
    { name: 'Equine gastric ulcer syndrome (EGUS)', frequency: 'common', summary: 'Squamous and glandular gastric ulceration is documented in the majority of actively racing Thoroughbreds. Diagnosis is by gastroscopy; management requires both medical therapy and forage-first, low-starch dietary change.', ageOfOnset: 'Racing years (2–5); often persists or recurs after retirement', citedRef: 'hammond-egus' },
    { name: 'Bowed tendons and suspensory ligament desmitis', frequency: 'common', summary: 'Superficial digital flexor tendinopathy and suspensory ligament injuries are the highest-frequency soft-tissue injuries in racing and ex-racing Thoroughbreds.', ageOfOnset: 'Racing years; lingers lifelong as chronic remodeling', citedRef: 'aaep-lameness' },
    { name: 'Cervical vertebral stenotic myelopathy (Wobbler syndrome)', frequency: 'occasional', summary: 'Compression of the cervical spinal cord secondary to malformation or malarticulation, producing classic ataxia. Thoroughbreds are over-represented; diagnosis is by neurologic exam, cervical radiographs, and myelography or CT.', ageOfOnset: 'Young growing horse (6 months – 3 years)', citedRef: 'cornell-genetics' },
    { name: 'Exercise-induced pulmonary hemorrhage (EIPH)', frequency: 'common', summary: 'Bleeding from the lung\'s capillary bed during intense exercise is documented in the majority of racehorses on post-exercise endoscopy. Severity is graded 0–4.', ageOfOnset: 'Racing years', citedRef: 'aaep-lameness' },
    { name: 'Osteochondritis dissecans (OCD)', frequency: 'occasional', summary: 'Developmental orthopedic disease of the cartilage-bone interface. Arthroscopic debridement is the standard surgical management.', ageOfOnset: 'Yearling to early racing age', citedRef: 'aaep-lameness' },
    { name: 'Hyperflexion and contracted heels (post-racing)', frequency: 'occasional', summary: 'Long-term wear from race-track shoeing packages can leave retired Thoroughbreds with contracted heels, low underrun heel conformation, and chronic foot pain.', ageOfOnset: 'Post-retirement (4+ years)' },
  ],
  recommendedScreenings: [
    { name: 'AAEP-style pre-purchase exam (including flexion tests)', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Gastroscopy if EGUS signs', ageRecommended: 'Any age with clinical signs', frequency: 'As clinically indicated' },
    { name: 'Cervical neurologic exam and radiographs if ataxia', ageRecommended: 'Young growing horse, or any age with signs', frequency: 'On clinical signs' },
    { name: 'Lameness exam by AAEP-member veterinarian', ageRecommended: 'Annually for ridden horses', frequency: 'Annually' },
    { name: 'Dental float exam', ageRecommended: 'From 5 years', frequency: 'Annually' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually for all horses',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza, Potomac horse fever) recommended per AAEP risk-based schedule',
  ],
  emergencySigns: [
    'Acute non-weight-bearing lameness (possible fracture or catastrophic tendon rupture)',
    'Sudden ataxia, knuckling, or "drunk" gait (possible Wobbler crisis)',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
    'Profuse nasal bleeding outside of exercise',
    'Severe choke, repeated regurgitation, or aspiration after eating',
  ],
  preventiveCareTips: [
    'Forage-first diet — minimum 1.5–2% of body weight per day in long-stem hay or pasture to protect against EGUS.',
    'Coordinate with an AAEP-member veterinarian before any major training transition (track to second career, jumping, eventing).',
    'Use a farrier comfortable with off-track Thoroughbred foot conformation.',
    'Build conditioning slowly when transitioning out of racing.',
    'Provide several hours of daily turnout — stalled-only management worsens EGUS and respiratory disease.',
  ],
  insuranceCostNotes:
    'Thoroughbreds carry one of the heaviest claim profiles in equine insurance: colic surgery, EGUS work-up and chronic medication, tendon and suspensory injuries, OCD surgery, and Wobbler diagnostics. Bind cover before any gastroscopy, neurologic workup, or lameness diagnosis to avoid breed-typical pre-existing condition exclusions.',
  faqs: [
    { question: 'How common are gastric ulcers in Thoroughbreds?', answer: 'Gastroscopy studies of actively training Thoroughbreds (e.g., Hammond et al., 2001, Equine Veterinary Journal) have documented EGUS in the substantial majority of horses sampled. Even after retirement, recurrence is common when forage access is limited or stress is high.' },
    { question: 'Are off-track Thoroughbreds good for a first-time owner?', answer: 'Generally not as a first horse. Off-track Thoroughbreds (OTTBs) can make excellent second careers, but the rehabilitation curve is best handled by an owner with a coach and an AAEP-member veterinarian engaged from day one. Plan months, not weeks, for the let-down period.' },
    { question: 'Is equine insurance worth it for a Thoroughbred?', answer: 'For most active sport Thoroughbreds the answer is yes. Major medical, colic-surgery, and loss-of-use riders are commonly purchased because the breed-typical claim profile is exactly what insurance is designed for.' },
  ],
  sourceCitations: [
    { ref: 'hammond-egus', label: 'Hammond C.J. et al. — Endoscopic findings of the stomach in Thoroughbred racehorses (Equine Veterinary Journal, 2001)', url: 'https://beva.onlinelibrary.wiley.com/journal/20423306' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Lameness, Pre-Purchase, and Vaccination Guidelines', url: 'https://aaep.org/guidelines' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
    { ref: 'jc-tb', label: 'The Jockey Club — Thoroughbred Registration & Equine Welfare', url: 'https://www.jockeyclub.com/' },
  ],
}

const quarterHorse: BreedHealthRecord = {
  slug: 'quarter-horse',
  breedName: 'Quarter Horse',
  lifespanRange: '25–30 years',
  overview:
    'The American Quarter Horse Association (AQHA) maintains the largest equine registry in the world and a five-panel genetic test (HYPP, GBED, HERDA, PSSM1, MH) that every responsible Quarter Horse buyer should ask for. The breed\'s sub-types — halter, racing, cutting, reining, ranch — carry distinct genetic risk profiles concentrated by line.',
  knownHealthIssues: [
    { name: 'Hyperkalemic Periodic Paralysis (HYPP)', frequency: 'occasional', summary: 'Autosomal dominant sodium channel disorder (SCN4A) traced to the stallion Impressive. AQHA bars H/H foals from registration; N/H horses remain eligible but should be disclosed.', ageOfOnset: 'Foal to young adult; first episode often by 3 years', geneticScreeningTest: 'SCN4A DNA test (UC Davis VGL, Cornell)', citedRef: 'aqha-five-panel' },
    { name: 'Glycogen Branching Enzyme Deficiency (GBED)', frequency: 'rare', summary: 'Autosomal recessive GBE1 mutation traced to the stallion King P-234. Homozygous foals are stillborn or die in early life of glycogen storage failure.', ageOfOnset: 'Late-term fetus to foal', geneticScreeningTest: 'GBE1 DNA test (UC Davis VGL)', citedRef: 'aqha-five-panel' },
    { name: 'Hereditary Equine Regional Dermal Asthenia (HERDA)', frequency: 'rare', summary: 'Autosomal recessive PPIB collagen disorder concentrated in cutting bloodlines tracing to Poco Bueno. Affected horses develop fragile, hyperextensible skin that splits under saddle pressure.', ageOfOnset: 'Young ridden age (2–4 years, when work begins)', geneticScreeningTest: 'PPIB DNA test (UC Davis VGL)', citedRef: 'aqha-five-panel' },
    { name: 'Polysaccharide Storage Myopathy Type 1 (PSSM1)', frequency: 'occasional', summary: 'Autosomal dominant GYS1 mutation causing abnormal glycogen storage in skeletal muscle and tying-up episodes. Managed by low-starch, high-fat diet and consistent daily exercise.', ageOfOnset: 'Any age once training starts', geneticScreeningTest: 'GYS1 DNA test (UC Davis VGL)', citedRef: 'aqha-five-panel' },
    { name: 'Malignant Hyperthermia (MH)', frequency: 'rare', summary: 'Autosomal dominant RYR1 mutation producing fatal hyperthermic crisis triggered by anesthesia, stress, or exertion — especially when co-inherited with PSSM1.', ageOfOnset: 'Any age on trigger exposure', geneticScreeningTest: 'RYR1 DNA test (UC Davis VGL)', citedRef: 'aqha-five-panel' },
    { name: 'Navicular syndrome and caudal heel pain', frequency: 'common', summary: 'Quarter Horses, particularly halter and pleasure lines bred for upright pasterns and small feet relative to body mass, are over-represented in caudal heel pain diagnoses.', ageOfOnset: 'Middle age (7+ years)', citedRef: 'aaep-lameness' },
  ],
  recommendedScreenings: [
    { name: 'AQHA Five-Panel test (HYPP, GBED, HERDA, PSSM1, MH)', ageRecommended: 'Before purchase or breeding', frequency: 'Once per horse' },
    { name: 'AAEP pre-purchase exam with foot radiographs', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Body condition scoring', ageRecommended: 'Lifelong', frequency: 'At every veterinary visit' },
    { name: 'Dental float exam', ageRecommended: 'From 5 years', frequency: 'Annually' },
    { name: 'Senior wellness panel and PPID testing', ageRecommended: 'From 15 years', frequency: 'Annually' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP risk schedule for showing or shipped horses',
  ],
  emergencySigns: [
    'Sudden muscle trembling, weakness, or recumbency after feeding or exercise (possible HYPP crisis)',
    'Severe muscle stiffness, dark urine, reluctance to move (possible tying-up / PSSM1 episode)',
    'Acute non-weight-bearing lameness',
    'Skin tearing or wound that splits with normal handling (possible HERDA)',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
  ],
  preventiveCareTips: [
    'Run the AQHA Five-Panel before purchase or breeding — pedigree paperwork is not a substitute for the lab record.',
    'For known HYPP N/H horses, work with your veterinarian on a low-potassium diet plan and avoid abrupt fasting or stress.',
    'For PSSM1 horses, prioritize daily turnout and exercise plus a high-fat, low-starch ration designed with your vet.',
    'Maintain lean body condition — halter and pleasure-bred Quarter Horses gain weight quickly and laminitis risk follows.',
    'Schedule farrier visits on a strict 6–8 week cycle.',
  ],
  insuranceCostNotes:
    'Quarter Horses are among the most insurable breeds because the major genetic risks are testable up-front. Major medical and surgical riders are routine; mortality cover for ranch and competition horses is usually available at reasonable rates.',
  faqs: [
    { question: 'What is the AQHA Five-Panel test and should I run it?', answer: 'The AQHA Five-Panel screens for HYPP, GBED, HERDA, PSSM1, and Malignant Hyperthermia at an accredited laboratory (UC Davis Veterinary Genetics Laboratory and Cornell Equine Genetics among them). It is required for breeding stallions and strongly recommended for any Quarter Horse you intend to ride, breed, or insure.' },
    { question: 'Can a HYPP-positive Quarter Horse still be ridden safely?', answer: 'Many heterozygous (N/H) Quarter Horses are ridden successfully with careful dietary and exercise management coordinated with an AAEP-member veterinarian. AQHA bars H/H foals from registration as of 2007.' },
    { question: 'Is equine insurance worth it for a Quarter Horse?', answer: 'For most owners, yes — the breed\'s long working lifespan and high-incidence colic, foot pain, and tying-up episodes generate exactly the kind of bills equine major-medical insurance is designed for.' },
  ],
  sourceCitations: [
    { ref: 'aqha-five-panel', label: 'American Quarter Horse Association — Five-Panel Genetic Test Program', url: 'https://www.aqha.com/five-panel-genetic-test' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Lameness & Pre-Purchase Guidelines', url: 'https://aaep.org/guidelines' },
    { ref: 'ucd-vgl', label: 'UC Davis Veterinary Genetics Laboratory — Equine Tests Menu', url: 'https://vgl.ucdavis.edu/tests/horse' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
  ],
}

const arabian: BreedHealthRecord = {
  slug: 'arabian',
  breedName: 'Arabian',
  lifespanRange: '25–30 years',
  overview:
    'Arabians are among the longest-lived breeds and remain serviceably sound into their late twenties when correctly managed. They also carry several well-characterized autosomal-recessive genetic diseases routinely tested by the Arabian Horse Association (AHA), UC Davis VGL, and Cornell.',
  knownHealthIssues: [
    { name: 'Severe Combined Immunodeficiency (SCID)', frequency: 'rare', summary: 'Autosomal recessive DNA-PKcs mutation. Affected foals are born without functional B and T lymphocytes and die of infection by 4–6 months of age.', ageOfOnset: 'Foal (death typically by 4–6 months)', geneticScreeningTest: 'DNA-PKcs (PRKDC) DNA test', citedRef: 'shin-scid' },
    { name: 'Lavender Foal Syndrome (LFS)', frequency: 'rare', summary: 'Autosomal recessive MYO5A mutation concentrated in Egyptian Arabian lines. Affected foals are born with diluted lavender coat color and severe neurological signs and are not viable.', ageOfOnset: 'Foal (at birth)', geneticScreeningTest: 'MYO5A DNA test', citedRef: 'brooks-lfs' },
    { name: 'Cerebellar Abiotrophy (CA)', frequency: 'rare', summary: 'Autosomal recessive MUTYH mutation producing progressive Purkinje cell loss. Affected foals appear normal at birth and develop characteristic head tremor, ataxia, and a wide-based stance.', ageOfOnset: 'Foal to weanling', geneticScreeningTest: 'MUTYH DNA test', citedRef: 'brault-ca' },
    { name: 'Occipitoatlantoaxial Malformation (OAAM)', frequency: 'rare', summary: 'Congenital malformation of the upper cervical vertebrae producing neurologic signs from mild ataxia to recumbency. A genetic component has been identified in Arabians.', ageOfOnset: 'Foal to young horse', geneticScreeningTest: 'OAAM DNA test (offered at some labs)', citedRef: 'cornell-genetics' },
    { name: 'Equine Juvenile Epilepsy (idiopathic, Egyptian Arabian foals)', frequency: 'rare', summary: 'Self-limiting seizure disorder in Egyptian Arabian foals between several days and several months of age. Most foals resolve spontaneously by 6 months.', ageOfOnset: 'Foal (typically 2 days – 6 months)', citedRef: 'aha-genetics' },
    { name: 'Equine metabolic syndrome and laminitis', frequency: 'occasional', summary: 'Arabians, especially easy-keeping pleasure lines and older horses, are predisposed to equine metabolic syndrome (EMS), insulin dysregulation, and laminitis on rich pasture.', ageOfOnset: 'Middle age onward' },
  ],
  recommendedScreenings: [
    { name: 'Arabian recessive-disease genetic panel (SCID, LFS, CA, OAAM) at an accredited lab', ageRecommended: 'Before purchase or breeding', frequency: 'Once per horse' },
    { name: 'AAEP pre-purchase exam', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Body condition scoring and metabolic risk screening', ageRecommended: 'Lifelong', frequency: 'At every veterinary visit' },
    { name: 'Dental float exam', ageRecommended: 'From 5 years', frequency: 'Annually' },
    { name: 'PPID (Cushing\'s) workup', ageRecommended: 'From 15 years', frequency: 'Annually or on clinical signs' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP risk schedule for shows, endurance rides, and frequently shipped horses',
  ],
  emergencySigns: [
    'Foal that fails to nurse, has recurrent infection, or shows neurological signs (possible SCID, LFS, CA, or OAAM)',
    'Sudden cerebellar tremor or wide-based ataxic gait in a young horse',
    'Laminitis signs — heat in feet, bounding digital pulses, reluctance to move',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
    'Acute neck pain or audible cervical click with neurologic signs',
  ],
  preventiveCareTips: [
    'Test breeding stock on the full Arabian recessive panel — it is the single most cost-effective health step for the breed.',
    'Manage pasture intake carefully; many Arabians are easy keepers and laminitis-prone, especially after age 15.',
    'Plan for a long working life — many sound Arabians ride into their late twenties.',
    'Screen for PPID (Cushing\'s) once horses pass 15 years.',
    'Coordinate endurance training with an AAEP-member veterinarian for electrolyte and hydration protocols.',
  ],
  insuranceCostNotes:
    'Arabians are well-suited to mortality and major-medical insurance because risk is largely characterizable up-front by the breed\'s genetic test panel. Endurance competition and breeding stock often carry additional riders for loss of use.',
  faqs: [
    { question: 'Which genetic diseases should I test an Arabian for?', answer: 'The standard pre-purchase / pre-breeding panel for Arabians screens SCID, LFS, CA, and OAAM. UC Davis VGL and Cornell Equine Genetics maintain accredited Arabian panels; the Arabian Horse Association maintains the up-to-date list of recommended tests.' },
    { question: 'How long do Arabians typically live?', answer: 'Average working lifespan is 25–30 years with good management, and Arabians remain rideable later in life than most breeds when conditioning, dentistry, and farriery are kept current.' },
    { question: 'Are Arabians good first horses?', answer: 'Generally not as a true first horse — the breed\'s sensitivity and high energy level reward an experienced rider with a trainer on retainer.' },
  ],
  sourceCitations: [
    { ref: 'shin-scid', label: 'Shin E.K. et al. — Identification of the equine SCID mutation (PNAS, 1997)', url: 'https://www.pnas.org/' },
    { ref: 'brooks-lfs', label: 'Brooks S.A. et al. — Whole-genome SNP association in the Arabian foal lavender syndrome (PLoS Genetics, 2010)', url: 'https://journals.plos.org/plosgenetics/' },
    { ref: 'brault-ca', label: 'Brault L.S. et al. — Mapping of equine cerebellar abiotrophy (Mammalian Genome, 2010)', url: 'https://link.springer.com/journal/335' },
    { ref: 'aha-genetics', label: 'Arabian Horse Association — Genetic Disease Information', url: 'https://www.arabianhorses.org/' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Pre-Purchase & Vaccination Guidelines', url: 'https://aaep.org/guidelines' },
  ],
}

const warmblood: BreedHealthRecord = {
  slug: 'warmblood',
  breedName: 'Warmblood',
  lifespanRange: '25–30 years',
  overview:
    'The European warmblood studbooks (Hanoverian, Holsteiner, KWPN, Oldenburg, Trakehner, Selle Français, and others) share a clustered orthopedic and metabolic health profile shaped by sport-horse selection: OCD, PSSM2, Warmblood Fragile Foal Syndrome (WFFS), and suspensory desmitis dominate the lifetime claim profile. USEF Veterinary Committee and AAEP guidelines anchor screening priorities.',
  knownHealthIssues: [
    { name: 'Osteochondritis dissecans (OCD)', frequency: 'common', summary: 'Developmental orthopedic disease producing cartilage flaps and bone cysts at the stifle, hock, and fetlock. Pre-purchase radiographic surveys are standard in sport warmbloods.', ageOfOnset: 'Weanling to early ridden age', citedRef: 'aaep-lameness' },
    { name: 'Polysaccharide Storage Myopathy Type 2 (PSSM2) and Myofibrillar Myopathy', frequency: 'occasional', summary: 'A group of incompletely characterized muscle disorders producing exercise intolerance, tying-up, and topline atrophy. Interpretation of commercial PSSM2 panels remains debated.', ageOfOnset: 'Young ridden age onward', geneticScreeningTest: 'Commercial PSSM2 / MIM panels (interpret with vet)', citedRef: 'cornell-genetics' },
    { name: 'Warmblood Fragile Foal Syndrome (WFFS)', frequency: 'rare', summary: 'Autosomal recessive PLOD1 mutation. Most major warmblood studbooks require WFFS testing of approved stallions; carrier-to-carrier matings are avoidable by DNA testing.', ageOfOnset: 'Late-term fetus to foal', geneticScreeningTest: 'PLOD1 DNA test (UC Davis VGL)', citedRef: 'ucd-wffs' },
    { name: 'Suspensory ligament desmitis', frequency: 'common', summary: 'Proximal and branch suspensory injuries are the highest-frequency lameness finding in upper-level dressage, jumping, and eventing warmbloods. Ultrasound is the standard diagnostic.', ageOfOnset: 'Mature competition age', citedRef: 'aaep-lameness' },
    { name: 'Equine gastric ulcer syndrome (EGUS)', frequency: 'common', summary: 'High-performance warmbloods in stalled, shipped, and intensively trained lifestyles develop EGUS at meaningful rates.', ageOfOnset: 'Any age in competition lifestyle' },
    { name: 'Lordosis (swayback) in older horses', frequency: 'occasional', summary: 'Some warmblood lines develop pronounced lordosis with age; saddle fit must be re-evaluated frequently to avoid pressure points.', ageOfOnset: 'Senior years (15+ years)' },
  ],
  recommendedScreenings: [
    { name: 'AAEP pre-purchase exam with full radiographic survey', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'WFFS DNA test for breeding stock', ageRecommended: 'Before breeding', frequency: 'Once per horse' },
    { name: 'PSSM1 / PSSM2 testing on clinical signs', ageRecommended: 'On signs of tying-up', frequency: 'As clinically indicated' },
    { name: 'Lameness exam with ultrasound for suspensory baseline', ageRecommended: 'Annually for upper-level horses', frequency: 'Annually' },
    { name: 'Saddle-fit evaluation', ageRecommended: 'Any age', frequency: 'Every 6–12 months' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP for shows, FEI competition, and frequently shipped horses',
    'EHV-1 vaccination strategy should follow current USEF and AAEP guidance for the competition calendar',
  ],
  emergencySigns: [
    'Acute non-weight-bearing lameness (possible fracture or catastrophic ligament injury)',
    'Severe muscle stiffness, dark urine, reluctance to move (possible tying-up episode)',
    'Sudden ataxia, knuckling, or recumbency (possible EHV-1 neurologic disease — isolate immediately)',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
    'Mare in foal showing premature udder development or vaginal discharge',
  ],
  preventiveCareTips: [
    'Run the pre-purchase radiograph survey — OCD lesions are common and well-characterized.',
    'Require WFFS testing of any breeding stallion or mare before booking a cover.',
    'Schedule a saddle-fit evaluation every 6–12 months — sport warmbloods change shape with conditioning.',
    'Build conditioning slowly; suspensory injuries cluster around workload increases.',
    'Coordinate competition vaccination strategy with an AAEP-member veterinarian familiar with USEF rule changes.',
  ],
  insuranceCostNotes:
    'Sport warmbloods are among the most expensive horses to insure because the claim profile (orthopedic surgery, suspensory rehab, colic surgery) is heavy and predictable. Major medical, surgical, and loss-of-use riders are routine.',
  faqs: [
    { question: 'What is a "clean" pre-purchase radiograph survey on a warmblood?', answer: 'Truly lesion-free surveys are uncommon in young sport warmbloods. The realistic question is whether the radiographic findings are clinically relevant for the horse\'s intended job. Have the radiographs read by an AAEP-member veterinarian or board-certified surgeon familiar with sport horses, not the seller\'s veterinarian.' },
    { question: 'Is WFFS testing required to breed a warmblood?', answer: 'Most major studbooks require WFFS testing of approved stallions; mare requirements vary. Even where not required, testing both parents prevents the only avoidable outcome (a carrier-to-carrier mating). UC Davis VGL is the most widely referenced laboratory for the PLOD1 DNA test.' },
    { question: 'Is equine insurance worth it for a warmblood?', answer: 'For most sport warmbloods the answer is yes — the breed-typical claim profile (OCD surgery, suspensory rehab, colic surgery) is exactly the kind of bill insurance is designed for.' },
  ],
  sourceCitations: [
    { ref: 'ucd-wffs', label: 'UC Davis Veterinary Genetics Laboratory — Warmblood Fragile Foal Syndrome Test', url: 'https://vgl.ucdavis.edu/test/wffs' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Lameness, Pre-Purchase & Vaccination Guidelines', url: 'https://aaep.org/guidelines' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
    { ref: 'usef-vet', label: 'USEF Veterinary Committee — Competition Health Resources', url: 'https://www.usef.org/' },
  ],
}

const paintHorse: BreedHealthRecord = {
  slug: 'paint-horse',
  breedName: 'Paint Horse',
  lifespanRange: '25–31 years',
  overview:
    'American Paint Horses share most of the Quarter Horse genetic risk profile, plus a coat-pattern-specific lethal recessive (Lethal White Overo, LWO). The American Paint Horse Association (APHA) coordinates with AQHA on the five-panel genetic test menu and adds LWO testing for any horse intended for breeding with frame-overo patterning.',
  knownHealthIssues: [
    { name: 'Lethal White Overo Syndrome (LWO / OLWS)', frequency: 'rare', summary: 'Autosomal recessive EDNRB mutation associated with the frame-overo coat pattern. Homozygous (LWO/LWO) foals are born nearly all-white and die within 72 hours of intestinal aganglionosis.', ageOfOnset: 'Foal (death within 72 hours)', geneticScreeningTest: 'EDNRB DNA test (UC Davis VGL)', citedRef: 'apha-lwo' },
    { name: 'Hyperkalemic Periodic Paralysis (HYPP)', frequency: 'occasional', summary: 'When Paint pedigrees carry Quarter Horse Impressive blood, HYPP risk follows. Episodes are triggered by high-potassium feed or stress.', ageOfOnset: 'Foal to young adult', geneticScreeningTest: 'SCN4A DNA test', citedRef: 'aqha-five-panel' },
    { name: 'HERDA', frequency: 'rare', summary: 'Autosomal recessive PPIB collagen disorder concentrated in cutting bloodlines with Poco Bueno influence.', ageOfOnset: 'Young ridden age', geneticScreeningTest: 'PPIB DNA test', citedRef: 'aqha-five-panel' },
    { name: 'Polysaccharide Storage Myopathy Type 1 (PSSM1)', frequency: 'occasional', summary: 'Autosomal dominant GYS1 mutation producing tying-up episodes. Concentrated in halter and stock-bred Paints.', ageOfOnset: 'Any age once training starts', geneticScreeningTest: 'GYS1 DNA test', citedRef: 'aqha-five-panel' },
    { name: 'Sunburn and squamous cell carcinoma on unpigmented skin', frequency: 'common', summary: 'Pink-skinned (unpigmented) areas under white markings are at elevated risk for sunburn, photosensitization, and squamous cell carcinoma — particularly around the eyes, muzzle, and genitalia.', ageOfOnset: 'Lifelong; carcinoma risk rises with age', citedRef: 'aaep-derm' },
    { name: 'Equine recurrent uveitis (ERU) in some Paint lines', frequency: 'occasional', summary: 'Recurrent, painful intraocular inflammation that can progress to blindness. Annual eye exams and rapid response to squinting are standard preventive care.', ageOfOnset: 'Adult onset' },
  ],
  recommendedScreenings: [
    { name: 'APHA Five-Panel + LWO DNA test', ageRecommended: 'Before purchase or breeding', frequency: 'Once per horse' },
    { name: 'AAEP pre-purchase exam', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Annual ophthalmic exam with attention to unpigmented periocular skin', ageRecommended: 'Lifelong', frequency: 'Annually' },
    { name: 'Skin exam for early carcinoma lesions on white markings', ageRecommended: 'Lifelong', frequency: 'At every visit' },
    { name: 'Dental float exam', ageRecommended: 'From 5 years', frequency: 'Annually' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP for showing and travel',
  ],
  emergencySigns: [
    'All-white newborn foal that fails to pass meconium or develops colic in first 24–48 hours (possible LWO)',
    'Sudden muscle trembling or recumbency after feeding (possible HYPP)',
    'Severe muscle stiffness, dark urine, reluctance to move (possible PSSM1 tying-up)',
    'Acute squinting, eye discharge, or pupil change (possible uveitis flare)',
    'Rapidly growing or ulcerated skin lesion on a white marking',
  ],
  preventiveCareTips: [
    'Run APHA Five-Panel + LWO before breeding — both stallion and mare must be tested to avoid LWO/LWO matings.',
    'Apply equine-safe sunscreen daily to unpigmented muzzles; use UV fly masks in summer turnout.',
    'Examine all white-skin areas weekly for early carcinoma lesions.',
    'Run PSSM1 testing on any halter- or stock-bred Paint before starting hard training.',
    'Coordinate vaccination and travel schedule with an AAEP-member veterinarian if showing.',
  ],
  insuranceCostNotes:
    'Paint Horses insure on largely the same basis as Quarter Horses: testable genetic risk up-front, modest major-medical premiums, and reasonable mortality cover. Skin cancer claims on heavily white-marked horses have grown in significance — disclose any pre-existing skin lesions before binding.',
  faqs: [
    { question: 'What is Lethal White Overo Syndrome and how do I avoid it?', answer: 'LWO is caused by an autosomal recessive EDNRB mutation. Carrier (N/LWO) horses appear normal but, when bred to another carrier, can produce a foal that is born nearly all-white and dies within 72 hours of bowel failure. The DNA test is inexpensive and run at UC Davis VGL among other labs.' },
    { question: 'Does my Paint Horse need extra sun protection?', answer: 'Yes — any horse with unpigmented (pink) skin under white markings is at elevated risk for sunburn, photosensitization, and squamous cell carcinoma. Daily equine-safe sunscreen on the muzzle, UV-rated fly masks, and a shaded turnout option meaningfully reduce both acute and lifetime risk.' },
    { question: 'Are Paints good for a first-time owner?', answer: 'Generally yes, with a competent farrier and AAEP-member veterinarian on retainer. Paints share the Quarter Horse\'s biddable temperament but require the additional management overhead of skin protection and the recessive genetic tests.' },
  ],
  sourceCitations: [
    { ref: 'apha-lwo', label: 'American Paint Horse Association — Lethal White Overo Syndrome & DNA Testing', url: 'https://apha.com/' },
    { ref: 'aqha-five-panel', label: 'American Quarter Horse Association — Five-Panel Genetic Test Program (shared with APHA)', url: 'https://www.aqha.com/five-panel-genetic-test' },
    { ref: 'aaep-derm', label: 'American Association of Equine Practitioners — Dermatology & Neoplasia Resources', url: 'https://aaep.org/' },
    { ref: 'ucd-vgl', label: 'UC Davis Veterinary Genetics Laboratory — Equine Tests Menu', url: 'https://vgl.ucdavis.edu/tests/horse' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
  ],
}

const appaloosa: BreedHealthRecord = {
  slug: 'appaloosa',
  breedName: 'Appaloosa',
  lifespanRange: '25–30 years',
  overview:
    'The Appaloosa\'s defining leopard-complex (LP) coat-pattern locus carries a pleiotropic risk profile: LP/LP homozygous horses develop congenital stationary night blindness, and the breed as a whole shows an elevated rate of equine recurrent uveitis (ERU). The Appaloosa Horse Club (ApHC) and Cornell\'s equine genetic database describe the LP-linked health surveillance program.',
  knownHealthIssues: [
    { name: 'Equine recurrent uveitis (ERU)', frequency: 'common', summary: 'Appaloosas are over-represented in clinical ERU populations, with strongest association in LP/LP homozygous horses. ERU is the leading cause of equine blindness.', ageOfOnset: 'Adult onset (typically 4+ years)', citedRef: 'eru-appaloosa' },
    { name: 'Congenital stationary night blindness (CSNB)', frequency: 'occasional', summary: 'Non-progressive impairment of night vision present from birth in homozygous (LP/LP) horses. Affected horses are visually competent in daylight but reluctant to move in low light.', ageOfOnset: 'Foal (lifelong)', geneticScreeningTest: 'LP locus DNA test (UC Davis VGL)', citedRef: 'ucd-vgl' },
    { name: 'Polysaccharide Storage Myopathy Type 1 (PSSM1)', frequency: 'occasional', summary: 'GYS1 mutation occurs in Appaloosa pedigrees with stock-horse influence. Managed by low-starch, high-fat diet and consistent daily exercise.', ageOfOnset: 'Any age once training starts', geneticScreeningTest: 'GYS1 DNA test', citedRef: 'aqha-five-panel' },
    { name: 'Sunburn and squamous cell carcinoma on unpigmented skin', frequency: 'common', summary: 'Mottled and unpigmented skin under spotted patterns is at elevated risk for sunburn, photosensitization, and squamous cell carcinoma.', ageOfOnset: 'Lifelong; carcinoma risk rises with age', citedRef: 'aaep-derm' },
    { name: 'Equine metabolic syndrome and laminitis', frequency: 'occasional', summary: 'Many Appaloosas are easy keepers and laminitis-prone on rich pasture, especially as they age.', ageOfOnset: 'Middle age onward' },
    { name: 'Sparse mane and tail', frequency: 'common', summary: 'A breed-typical feature rather than a disease, but worth noting because it limits fly protection.', ageOfOnset: 'Lifelong' },
  ],
  recommendedScreenings: [
    { name: 'LP locus DNA test before breeding', ageRecommended: 'Before breeding', frequency: 'Once per horse' },
    { name: 'Annual ophthalmic exam with attention to ERU signs', ageRecommended: 'From 2 years', frequency: 'Annually' },
    { name: 'AAEP pre-purchase exam with attention to vision', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Skin exam on unpigmented areas', ageRecommended: 'Lifelong', frequency: 'At every visit' },
    { name: 'Metabolic / PPID screening in older horses', ageRecommended: 'From 15 years', frequency: 'Annually' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP for showing and travel',
  ],
  emergencySigns: [
    'Acute squinting, tearing, or pupil change (possible uveitis flare — vision-threatening)',
    'Severe muscle stiffness, dark urine, reluctance to move (possible PSSM1 tying-up)',
    'Laminitis signs — heat in feet, bounding digital pulses, reluctance to move',
    'Rapidly growing or ulcerated skin lesion on a white-marked area',
    'Sudden behavior change in low light suggesting acute vision loss',
  ],
  preventiveCareTips: [
    'Schedule a baseline ophthalmic exam with a veterinary ophthalmologist by age 2; repeat annually for life.',
    'Apply equine-safe sunscreen daily to unpigmented muzzles; use UV-rated fly masks year-round in sunny climates.',
    'Run the LP locus DNA test before breeding to predict CSNB risk in foals.',
    'For LP/LP horses with documented CSNB, ride only in good light and provide consistent footing.',
    'Monitor body condition and screen for PPID after age 15.',
  ],
  insuranceCostNotes:
    'Appaloosas are insurable on largely standard terms; the breed-specific risk that most affects insurance is vision loss from ERU, which is sometimes excluded after a first flare. Bind cover before any ophthalmic workup to keep eye coverage in scope.',
  faqs: [
    { question: 'Why are Appaloosas more prone to eye disease?', answer: 'Research has linked the leopard-complex (LP) coat-pattern locus on equine chromosome 1 to both congenital stationary night blindness in homozygous (LP/LP) horses and to an elevated rate of equine recurrent uveitis across the breed.' },
    { question: 'Should I run the LP DNA test before breeding?', answer: 'Yes. UC Davis VGL offers the test and the result predicts CSNB risk in the foal and informs the mating decision. The Appaloosa Horse Club maintains the current breeding recommendations.' },
    { question: 'Are Appaloosas good first horses?', answer: 'Generally yes, particularly the ranch and trail-bred lines. The breed is hardy and biddable.' },
  ],
  sourceCitations: [
    { ref: 'eru-appaloosa', label: 'Sandmeyer L.S. et al. — Equine recurrent uveitis in Appaloosa horses (multiple peer-reviewed surveys)', url: 'https://onlinelibrary.wiley.com/journal/14635224' },
    { ref: 'ucd-vgl', label: 'UC Davis Veterinary Genetics Laboratory — LP Locus & Appaloosa Tests', url: 'https://vgl.ucdavis.edu/tests/horse' },
    { ref: 'aphc-health', label: 'Appaloosa Horse Club — Health & Genetic Testing Resources', url: 'https://www.appaloosa.com/' },
    { ref: 'aaep-derm', label: 'American Association of Equine Practitioners — Dermatology & Ophthalmology Resources', url: 'https://aaep.org/' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
    { ref: 'aqha-five-panel', label: 'American Quarter Horse Association — Five-Panel Test (shared markers for Appaloosa)', url: 'https://www.aqha.com/five-panel-genetic-test' },
  ],
}

const tennesseeWalkingHorse: BreedHealthRecord = {
  slug: 'tennessee-walking-horse',
  breedName: 'Tennessee Walking Horse',
  lifespanRange: '28–30 years',
  overview:
    'Tennessee Walking Horses (TWHs) are a long-lived gaited breed with a clean genetic profile relative to many other breeds, but a unique welfare issue: soring of the show-line "Big Lick" horse, addressed annually by USDA APHIS inspections under the federal Horse Protection Act. Flat-shod and trail TWHs are unaffected.',
  knownHealthIssues: [
    { name: 'Soring injury (show-line "Big Lick" segment)', frequency: 'occasional', summary: 'Soring is the intentional application of chemical irritants or mechanical devices to a horse\'s pasterns to accentuate the artificial high-stepping gait shown by some TWHs. It is illegal under the federal Horse Protection Act (15 U.S.C. §1821); USDA APHIS publishes annual violation reports.', ageOfOnset: 'Show-age horses', citedRef: 'usda-aphis-hpa' },
    { name: 'Navicular syndrome and caudal heel pain', frequency: 'occasional', summary: 'Many gaited horses, including TWHs, develop caudal heel pain in middle age related to conformation and lifetime concussion.', ageOfOnset: 'Middle age (8+ years)', citedRef: 'aaep-lameness' },
    { name: 'PSSM1 and PSSM2', frequency: 'occasional', summary: 'Both PSSM1 (GYS1) and incompletely characterized PSSM2 variants occur in TWH pedigrees.', ageOfOnset: 'Any age once training starts', geneticScreeningTest: 'GYS1 DNA test for PSSM1', citedRef: 'cornell-genetics' },
    { name: 'Equine metabolic syndrome and laminitis', frequency: 'occasional', summary: 'TWHs, particularly easier-keeping pleasure lines, are predisposed to EMS, insulin dysregulation, and laminitis on rich pasture.', ageOfOnset: 'Middle age onward' },
    { name: 'DMRT3 "gait keeper" allele (not a disease — gait genetics)', frequency: 'common', summary: 'TWHs carry the DMRT3 mutation that enables alternate four-beat ambling gaits. This is genetics, not pathology, but worth knowing because the gait pattern changes how lameness presents.', ageOfOnset: 'Genetic; lifelong', geneticScreeningTest: 'DMRT3 DNA test', citedRef: 'andersson-dmrt3' },
    { name: 'Saddle and back soreness from gait conformation', frequency: 'common', summary: 'Long, sloping shoulders and a deep-walking topline make saddle fit harder than in a stock horse.', ageOfOnset: 'Any age' },
  ],
  recommendedScreenings: [
    { name: 'AAEP pre-purchase exam with attention to pasterns and feet (especially for show-line horses)', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Annual lameness check on caudal heel structures', ageRecommended: 'From 8 years', frequency: 'Annually' },
    { name: 'PSSM1 / DMRT3 testing on clinical signs or for breeding', ageRecommended: 'Before training or breeding', frequency: 'Once per horse' },
    { name: 'Saddle-fit evaluation', ageRecommended: 'Any age', frequency: 'Every 6–12 months' },
    { name: 'Metabolic / PPID screening', ageRecommended: 'From 15 years', frequency: 'Annually' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP for shows and travel',
  ],
  emergencySigns: [
    'Visible chemical burns, scarring, or scabs on pasterns (possible soring — report to USDA APHIS)',
    'Acute non-weight-bearing lameness',
    'Severe muscle stiffness, dark urine, reluctance to move (possible PSSM tying-up)',
    'Laminitis signs — heat in feet, bounding digital pulses, reluctance to move',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
  ],
  preventiveCareTips: [
    'If buying a former show-line TWH, examine pasterns and review USDA APHIS inspection history before purchase.',
    'Use a farrier comfortable with gaited horse trimming — many TWHs do best barefoot or in a light keg shoe.',
    'Test for PSSM1 if any history of tying-up; testing is inexpensive relative to the cost of a single episode.',
    'Schedule saddle-fit evaluations every 6–12 months.',
    'Monitor body condition and screen for PPID after age 15.',
  ],
  insuranceCostNotes:
    'TWHs are insurable on standard terms; major medical and surgical riders are common. Show-line horses with documented soring history are sometimes excluded from cover or rated higher.',
  faqs: [
    { question: 'What is "soring" and is it a problem in TWHs I might buy?', answer: 'Soring is the intentional application of chemical irritants or mechanical devices to a horse\'s pasterns. It is illegal under the federal Horse Protection Act, and USDA APHIS publishes annual inspection violation reports. The vast majority of TWHs — flat-shod, trail, and pleasure horses — are unaffected.' },
    { question: 'Should I run a PSSM test on my Tennessee Walking Horse?', answer: 'If the horse has any history of tying-up, muscle stiffness, or reluctance to work, yes. The GYS1 test for PSSM1 is inexpensive and run at UC Davis VGL and similar labs.' },
    { question: 'Are Tennessee Walking Horses good first horses?', answer: 'Yes, the flat-shod and trail-bred TWH is among the most forgiving first horses in the gaited world — calm, smooth, and long-lived.' },
  ],
  sourceCitations: [
    { ref: 'usda-aphis-hpa', label: 'USDA APHIS — Horse Protection Act Inspections & Annual Reports', url: 'https://www.aphis.usda.gov/animal-welfare/horse-protection' },
    { ref: 'andersson-dmrt3', label: 'Andersson L.S. et al. — Mutation in DMRT3 affects locomotion in horses (Nature, 2012)', url: 'https://www.nature.com/articles/nature11399' },
    { ref: 'twhbea-health', label: 'Tennessee Walking Horse Breeders\' & Exhibitors\' Association (TWHBEA) — Health & Registry', url: 'https://twhbea.com/' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Lameness Guidelines', url: 'https://aaep.org/guidelines' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
  ],
}

const friesian: BreedHealthRecord = {
  slug: 'friesian',
  breedName: 'Friesian',
  lifespanRange: '16–20 years',
  overview:
    'Friesians are a relatively short-lived breed (typical lifespan 16–20 years) with a concentrated genetic risk profile — autosomal-recessive dwarfism and hydrocephalus — driven by the breed\'s closed studbook and small founder base. KFPS (the Royal Friesian Studbook) and Cornell Equine Genetics define the test menu.',
  knownHealthIssues: [
    { name: 'Dwarfism (autosomal recessive, B4GALT7)', frequency: 'rare', summary: 'Autosomal recessive B4GALT7 mutation producing disproportionate limb shortening, angular limb deformities, and lifelong soundness compromise.', ageOfOnset: 'Foal (apparent at birth)', geneticScreeningTest: 'B4GALT7 DNA test', citedRef: 'leegwater-dwarfism' },
    { name: 'Hydrocephalus (autosomal recessive, B3GALNT2)', frequency: 'rare', summary: 'Autosomal recessive B3GALNT2 mutation producing fluid accumulation in the fetal cranium and dystocia in the mare. Affected foals are typically not viable.', ageOfOnset: 'Foal (late-term fetus)', geneticScreeningTest: 'B3GALNT2 DNA test', citedRef: 'ducro-hydrocephalus' },
    { name: 'Aortic rupture', frequency: 'occasional', summary: 'Friesians show a markedly elevated breed prevalence of aortic rupture relative to other breeds, often presenting as sudden death in adulthood.', ageOfOnset: 'Adult to middle age', citedRef: 'boerma-aorta' },
    { name: 'Megaesophagus', frequency: 'occasional', summary: 'Dilation and dysmotility of the esophagus producing choke, weight loss, and recurrent aspiration. Documented at elevated rates in Friesians.', ageOfOnset: 'Adult onset' },
    { name: 'Retained placenta in mares', frequency: 'common', summary: 'Friesian mares are over-represented in retained placenta cases relative to other breeds. Any portion of the placenta retained beyond 3 hours post-foaling warrants immediate veterinary intervention.', ageOfOnset: 'Post-foaling', citedRef: 'kfps-health' },
    { name: 'Shorter-than-average lifespan', frequency: 'common', summary: 'Average working lifespan of 16–20 years is meaningfully shorter than most sport and pleasure breeds.', ageOfOnset: 'Lifelong (statistical observation)' },
  ],
  recommendedScreenings: [
    { name: 'Dwarfism (B4GALT7) and Hydrocephalus (B3GALNT2) DNA test', ageRecommended: 'Before breeding', frequency: 'Once per horse' },
    { name: 'AAEP pre-purchase exam', ageRecommended: 'Before purchase', frequency: 'Once per horse' },
    { name: 'Cardiac auscultation', ageRecommended: 'Lifelong', frequency: 'Annually' },
    { name: 'Esophageal evaluation on choke or weight loss', ageRecommended: 'On clinical signs', frequency: 'As indicated' },
    { name: 'Foaling-mare placenta inspection at 3 hours post-foaling', ageRecommended: 'Each foaling', frequency: 'Each foaling' },
  ],
  breedSpecificVaccinations: [
    'Follow AAEP core vaccination guidelines: EEE/WEE, West Nile, rabies, tetanus annually',
    'Risk-based vaccines (strangles, EHV-1/EHV-4, equine influenza) per AAEP for shows and travel',
  ],
  emergencySigns: [
    'Sudden collapse, severe distress, or sudden death in an adult horse (possible aortic rupture)',
    'Choke, regurgitation, or repeated coughing after eating (possible megaesophagus)',
    'Placenta not fully passed within 3 hours of foaling (true emergency — call your vet immediately)',
    'Foal with limb deformities, breathing difficulty, or abnormal head size at birth',
    'Colic signs — pawing, rolling, flank-watching, abdominal distension',
  ],
  preventiveCareTips: [
    'Run both dwarfism (B4GALT7) and hydrocephalus (B3GALNT2) DNA tests on every breeding mare and stallion.',
    'Time foalings so an AAEP-member veterinarian can attend or be reachable within minutes.',
    'Inspect the passed placenta at 3 hours post-foaling and call your vet for any retained fragments.',
    'Annual cardiac auscultation as part of routine wellness — discuss any new murmur with your veterinarian.',
    'Watch for choke and weight loss; megaesophagus is often diagnosed late.',
  ],
  insuranceCostNotes:
    'Friesians carry higher mortality and reproductive premiums than most breeds because of the shorter typical lifespan, aortic rupture risk, and obstetric complications. Test breeding stock on the recessive panel before binding cover.',
  faqs: [
    { question: 'Why do Friesians live shorter lives than other breeds?', answer: 'A combination of factors: the closed studbook and narrow founder base have concentrated several autosomal recessive diseases (dwarfism, hydrocephalus), the breed shows a documented elevated rate of aortic rupture (Boerma 2012), and obstetric complications are more common than in most breeds. Average working lifespan is typically 16–20 years versus 25–30 for many other riding breeds.' },
    { question: 'Which genetic tests should I run on a Friesian?', answer: 'Before breeding, run both the dwarfism (B4GALT7) and hydrocephalus (B3GALNT2) DNA tests at an accredited laboratory (UC Davis VGL among others). KFPS / FHANA maintains the up-to-date list of recommended tests.' },
    { question: 'Are Friesians good for a first-time owner?', answer: 'Generally not as a true first horse. Friesians are gentle and willing but require an experienced owner because of the breed\'s specialized health surveillance, the cost profile, and the higher anesthetic and obstetric risks.' },
  ],
  sourceCitations: [
    { ref: 'leegwater-dwarfism', label: 'Leegwater P.A.J. et al. — Identification of a mutation in B4GALT7 in Friesian dwarfism (Vet J / PLOS ONE, 2016)', url: 'https://journals.plos.org/' },
    { ref: 'ducro-hydrocephalus', label: 'Ducro B.J. et al. — Autosomal recessive hydrocephalus in Friesian horses (Genetics Selection Evolution, 2015)', url: 'https://gsejournal.biomedcentral.com/' },
    { ref: 'boerma-aorta', label: 'Boerma S. et al. — Aortic rupture and aortopulmonary fistulation in Friesian horses (Equine Veterinary Education, 2012)', url: 'https://beva.onlinelibrary.wiley.com/journal/20423292' },
    { ref: 'kfps-health', label: 'KFPS (Royal Friesian Studbook) & Friesian Horse Association of North America — Health Resources', url: 'https://www.kfps.nl/' },
    { ref: 'cornell-genetics', label: 'Cornell Veterinary Genetics Laboratory — Equine Genetic Disease Database', url: 'https://equinegenetics.vet.cornell.edu/' },
    { ref: 'aaep-lameness', label: 'American Association of Equine Practitioners — Pre-Purchase & Vaccination Guidelines', url: 'https://aaep.org/guidelines' },
  ],
}

export const BreedHealthRecords: ReadonlyArray<BreedHealthRecord> = [
  thoroughbred,
  quarterHorse,
  arabian,
  warmblood,
  paintHorse,
  appaloosa,
  tennesseeWalkingHorse,
  friesian,
]

export function getBreedHealthBySlug(slug: string): BreedHealthRecord | undefined {
  return BreedHealthRecords.find((r) => r.slug === slug)
}
