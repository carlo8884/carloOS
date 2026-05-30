/**
 * Programmatic SEO data: 8 veterinary specialty deep-dive entries for
 * /specialists/[slug].
 *
 * Pet owners search "veterinary cardiologist near me" / "what does a
 * veterinary oncologist do" / "how much does a vet dermatologist cost"
 * with HIGH commercial intent. Specialist visits are chronic-care anchors:
 * once a pet is in a specialist's caseload, the lifetime value of that
 * relationship is measured in years and several thousand dollars of care.
 *
 * Trust-bar (QC §1):
 *  - Cite the relevant board-certification college on every page (ACVIM,
 *    ACVD, ACVO, ACVECC, ACVS, AAVD, AVDC). These are the authoritative
 *    references. AVMA is cited as the parent professional body.
 *  - Cost figures are PRESENTED AS RANGES from publicly available sources
 *    (CareCredit cost surveys, VIN client-cost benchmarks, NAPHIA insurance
 *    claim summaries, university teaching-hospital fee schedules). Every
 *    line is labeled "typical" — never "guaranteed."
 *  - Insurance language never claims a specific plan will pay a specific
 *    bill; it points at the coverage-comparison page where exclusion
 *    language, waiting periods, and pre-existing-condition handling are
 *    compared like-for-like.
 *  - No specific dosing, no treatment promises, no fabricated outcomes.
 *  - "Find one" always lists the GP referral path first.
 *
 * Cost data sources (in addition to per-entry citations):
 *   - CareCredit Pet Care Cost Survey — public summary
 *   - VIN (Veterinary Information Network) — client cost benchmarks
 *   - NAPHIA State of the Industry Report — claim averages
 *   - University teaching-hospital fee schedules (Cornell, UC Davis, Texas
 *     A&M) — public-facing pages.
 *
 * NEVER include a specific milligram dose, treatment regimen, or
 * survival-outcome promise in this data file or any page that consumes
 * it. Always defer to the specialist who has examined the patient. See
 * QC-STANDARDS.md §1.
 */

export interface CommonCondition {
  name: string
  summary: string
}

export interface CostRange {
  service: string
  range: string
}

export interface CitedSource {
  name: string
  url: string
}

export interface Specialty {
  slug: string
  /** Display name, e.g. "Veterinary Cardiology". */
  specialtyName: string
  /** Short label used in nav / cards, e.g. "Cardiology". */
  shortName: string
  /**
   * Board-certification college acronym + expansion.
   * e.g. "ACVIM (American College of Veterinary Internal Medicine) —
   * Cardiology subspecialty."
   */
  boardCertificationOrg: string
  /** Verified directory URL where pet owners can look up board-certified
   *  diplomates by specialty + state. */
  boardCertificationDirectoryUrl: string
  /** One-line summary used on the hub page. */
  whenToSeeSummary: string
  /** Red-flag symptoms / situations that warrant a specialist referral. */
  whenToSee: string[]
  commonConditionsTreated: CommonCondition[]
  whatToExpectAtVisit: string[]
  typicalDiagnostics: string[]
  averageCostRanges: CostRange[]
  insuranceCoverageNotes: string
  howToFindOne: string[]
  questionsToAskTheSpecialist: string[]
  citedSources: CitedSource[]
}

// ── Shared institutional source URLs (verified) ───────────────────────────
const AVMA = 'https://www.avma.org/'
const ACVIM = 'https://www.acvim.org/'
const ACVD = 'https://www.acvd.org/'
const ACVO = 'https://www.acvo.org/'
const ACVECC = 'https://acvecc.org/'
const ACVS = 'https://www.acvs.org/'
const AVDC = 'https://avdc.org/'
const NAPHIA = 'https://naphia.org/'
const CARE_CREDIT_COST = 'https://www.carecredit.com/well-u/pet-care/'

export const Specialties: Specialty[] = [
  // ─── 1. CARDIOLOGY ────────────────────────────────────────────────────
  {
    slug: 'veterinary-cardiology',
    specialtyName: 'Veterinary Cardiology',
    shortName: 'Cardiology',
    boardCertificationOrg:
      'ACVIM (American College of Veterinary Internal Medicine) — Cardiology subspecialty. Diplomates use the credential "DACVIM (Cardiology)".',
    boardCertificationDirectoryUrl: 'https://www.acvim.org/About/Find-a-Specialist',
    whenToSeeSummary:
      'New heart murmur, cough at rest, exercise intolerance, fainting, or pre-breeding clearance in breeds at hereditary risk.',
    whenToSee: [
      'A new heart murmur identified by your primary vet, especially in breeds prone to mitral valve disease (Cavalier King Charles Spaniel) or dilated cardiomyopathy (Doberman, Boxer, Great Dane).',
      'Coughing at rest, especially overnight, in a middle-aged or older dog.',
      'Exercise intolerance — your pet tires faster than usual, refuses walks, or has to stop and rest.',
      'Fainting or collapse episodes (syncope), even brief ones.',
      'Persistent fast or irregular heart rate detected by your primary vet.',
      'Blue-tinged gums (cyanosis) or labored breathing at rest.',
      'Pre-breeding cardiac clearance for breeds with a published screening recommendation.',
      'Echocardiogram follow-up after a previous cardiology evaluation.',
    ],
    commonConditionsTreated: [
      {
        name: 'Myxomatous mitral valve disease (MMVD)',
        summary:
          'The most common acquired heart disease in dogs. Small-breed dogs — especially Cavalier King Charles Spaniels — develop a degenerative mitral valve leak that progresses over years. Staging is by ACVIM consensus criteria and guides the timing of medication.',
      },
      {
        name: 'Dilated cardiomyopathy (DCM)',
        summary:
          'A disease of the heart muscle that reduces the heart\'s ability to pump. Genetic in Dobermans, Boxers, Great Danes, and Irish Wolfhounds. Diet-associated DCM has been reported in dogs eating grain-free / boutique / exotic-protein diets and remains an active research area.',
      },
      {
        name: 'Hypertrophic cardiomyopathy (HCM)',
        summary:
          'The most common heart disease in cats. Often silent until a sudden episode of breathing difficulty, aortic thromboembolism, or sudden death. Genetic in Maine Coons and Ragdolls.',
      },
      {
        name: 'Congenital heart defects',
        summary:
          'Patent ductus arteriosus (PDA), subaortic stenosis, pulmonic stenosis, and ventricular septal defects are typically detected as continuous or loud systolic murmurs in puppies and kittens. Many are treatable with minimally invasive catheter-based interventions when caught early.',
      },
      {
        name: 'Arrhythmias',
        summary:
          'Atrial fibrillation, ventricular tachycardia, and conduction blocks. Diagnosis often requires a 24-hour Holter monitor in addition to in-clinic ECG. Treatment can include antiarrhythmic medication or, in some cases, pacemaker implantation.',
      },
      {
        name: 'Pericardial effusion',
        summary:
          'Fluid in the sac around the heart, often from a bleeding mass on the heart base or right atrium (commonly hemangiosarcoma in older Golden Retrievers and German Shepherds). May present as collapse or abdominal distension and is often treated initially with pericardiocentesis.',
      },
    ],
    whatToExpectAtVisit: [
      'A detailed history review — your primary vet\'s notes, prior chest X-rays, ECGs, bloodwork, and any video clips of episodes you have at home.',
      'A thorough cardiovascular physical exam: auscultation in multiple positions, pulse quality, mucous-membrane color, and respiratory effort assessment.',
      'An echocardiogram (heart ultrasound) — the central diagnostic tool. Most pets do not need sedation; some anxious or fractious patients may.',
      'Often an ECG to characterize rhythm, and sometimes blood pressure and pro-BNP / NT-proBNP bloodwork.',
      'A written report sent to your primary vet, with a staged plan: monitoring interval, any medications to start, and what to watch for at home.',
    ],
    typicalDiagnostics: [
      'Echocardiogram with Doppler (cardiac ultrasound).',
      'ECG / electrocardiogram (rhythm assessment).',
      'Thoracic radiographs (chest X-rays).',
      '24-hour Holter monitor (ambulatory ECG worn at home).',
      'Blood pressure measurement.',
      'Cardiac biomarker bloodwork (NT-proBNP, cardiac troponin I).',
      'Genetic testing where a breed-specific mutation has been identified.',
    ],
    averageCostRanges: [
      { service: 'Initial cardiology consultation', range: '$200–500 (typical US range)' },
      { service: 'Echocardiogram', range: '$400–800 (typical US range)' },
      { service: 'ECG / electrocardiogram', range: '$75–200 (typical US range)' },
      { service: '24-hour Holter monitor', range: '$300–600 (typical US range)' },
      { service: 'Thoracic radiographs (2-view)', range: '$150–400 (typical US range)' },
      { service: 'Follow-up echocardiogram', range: '$300–600 (typical US range)' },
      {
        service: 'Annual chronic-disease management (medications + rechecks)',
        range: '$1,200–4,000 per year (typical US range, varies by stage)',
      },
    ],
    insuranceCoverageNotes:
      'Accident-and-illness pet insurance plans typically reimburse specialist consultations, diagnostics, and ongoing cardiac medications once any waiting period has passed — provided the heart condition is not pre-existing. Coverage details vary considerably by insurer and plan tier. Breed-specific exclusions are uncommon for cardiology but bilateral-condition language and per-condition caps can affect long-term out-of-pocket cost. Pre-existing condition exclusions are universal across the industry, which is why enrolling before a murmur is documented matters most for breeds at hereditary risk.',
    howToFindOne: [
      'Ask your primary veterinarian for a referral — they often have a working relationship with one or more cardiologists and can transfer records directly.',
      'Use the ACVIM "Find a Specialist" directory to search for board-certified cardiologists by state.',
      'Veterinary teaching hospitals (Cornell, UC Davis, Texas A&M, University of Pennsylvania and others) maintain cardiology services that accept owner-initiated appointments.',
      'Verify "DACVIM (Cardiology)" on the specialist\'s profile — board certification requires a 3-year residency and passing the ACVIM specialty exam.',
      'For urgent symptoms (collapse, labored breathing at rest), go to a 24-hour emergency hospital first; cardiology referral can follow once the pet is stable.',
    ],
    questionsToAskTheSpecialist: [
      'What ACVIM stage is my pet\'s heart disease, and what defines progression to the next stage?',
      'What is the recheck interval you recommend, and what changes at home would warrant calling sooner?',
      'Which medications are you starting, what side effects should I watch for, and how will we monitor them?',
      'What is the prognosis range for this condition at this stage, given my pet\'s breed and age?',
      'Are there activity restrictions, and how strict are they?',
      'If congestive heart failure develops, what should I do first — and where should I go?',
      'Is there a diet recommendation that is supported by current evidence for this condition?',
    ],
    citedSources: [
      { name: 'ACVIM — American College of Veterinary Internal Medicine', url: ACVIM },
      {
        name: 'ACVIM Consensus Guidelines for the Diagnosis and Treatment of MMVD in Dogs (Keene et al.)',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15488',
      },
      {
        name: 'FDA Investigation: Potential Link Between Certain Diets and Canine DCM',
        url: 'https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
      },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },

  // ─── 2. ONCOLOGY ──────────────────────────────────────────────────────
  {
    slug: 'veterinary-oncology',
    specialtyName: 'Veterinary Oncology',
    shortName: 'Oncology',
    boardCertificationOrg:
      'ACVIM (American College of Veterinary Internal Medicine) — Oncology subspecialty. Diplomates use "DACVIM (Oncology)". Radiation oncology is a separate ACVR subspecialty.',
    boardCertificationDirectoryUrl: 'https://www.acvim.org/About/Find-a-Specialist',
    whenToSeeSummary:
      'New cancer diagnosis, suspicious mass, lymphoma staging, or to design and supervise a chemotherapy or radiation protocol.',
    whenToSee: [
      'A confirmed cancer diagnosis from your primary vet (biopsy or cytology) where treatment planning is required.',
      'A mass that has grown, changed shape or color, ulcerated, or persisted longer than four weeks.',
      'Enlarged lymph nodes (sub-mandibular, pre-scapular, popliteal) without obvious infection.',
      'Unexplained weight loss, lethargy, or appetite change in a middle-aged or senior pet.',
      'Recurrent or non-healing wounds, or persistent bleeding from the mouth or nose.',
      'A previously treated cancer that has recurred or where staging needs to be repeated.',
      'Second opinion on prognosis or on a chemotherapy / radiation recommendation.',
    ],
    commonConditionsTreated: [
      {
        name: 'Lymphoma',
        summary:
          'The most common cancer in dogs and one of the most common in cats. Multicentric (lymph-node), gastrointestinal, mediastinal, and cutaneous forms exist. Chemotherapy protocols (CHOP-based and others) are well-established and most dogs tolerate treatment well.',
      },
      {
        name: 'Hemangiosarcoma',
        summary:
          'An aggressive cancer of blood-vessel lining, most often arising on the spleen, heart base, or skin. Common in Golden Retrievers, German Shepherds, and Labradors. Often presents as acute collapse from internal bleeding.',
      },
      {
        name: 'Mast cell tumors',
        summary:
          'The most common skin cancer in dogs. Behavior ranges from indolent to highly aggressive depending on grade. Surgical margins and histologic grade drive prognosis and the decision to add chemotherapy or radiation.',
      },
      {
        name: 'Osteosarcoma',
        summary:
          'The most common bone cancer in large- and giant-breed dogs. Amputation or limb-spare surgery combined with chemotherapy is the typical multi-modal approach. Pain management is a central part of the conversation.',
      },
      {
        name: 'Soft tissue sarcoma',
        summary:
          'A group of mesenchymal tumors (fibrosarcoma, peripheral nerve sheath tumor, others). Wide surgical excision is the cornerstone of treatment; radiation is often added when margins are narrow.',
      },
      {
        name: 'Transitional cell carcinoma (TCC)',
        summary:
          'Bladder cancer, most common in Scottish Terriers and several other breeds. Diagnosed with ultrasound and the BRAF mutation test. Combination NSAID and chemotherapy treatment is established standard of care.',
      },
    ],
    whatToExpectAtVisit: [
      'A full review of your primary vet\'s diagnostic workup — cytology, biopsy, staging imaging, and bloodwork.',
      'A staging discussion: what additional tests (lymph node aspirates, abdominal ultrasound, chest imaging, bone marrow) are needed to define the extent of disease.',
      'A written treatment plan that lays out the options — surgery alone, chemotherapy, radiation, combination, or palliative-only — with expected response rates and quality-of-life considerations.',
      'A frank cost-and-time conversation so families can make decisions with the financial and logistical picture in view.',
      'A close working relationship with your primary vet, who will continue routine care between specialty appointments.',
    ],
    typicalDiagnostics: [
      'Fine-needle aspiration cytology and tissue biopsy.',
      'Staging bloodwork (CBC, chemistry, urinalysis).',
      'Abdominal ultrasound and thoracic radiographs (or CT).',
      'Bone marrow aspirate in selected lymphoma cases.',
      'PARR / immunophenotyping for lymphoma subtyping.',
      'BRAF mutation test for suspected transitional cell carcinoma.',
      'CT or MRI for surgical and radiation planning.',
    ],
    averageCostRanges: [
      { service: 'Initial oncology consultation', range: '$200–500 (typical US range)' },
      { service: 'Staging workup (imaging + bloodwork)', range: '$800–2,500 (typical US range)' },
      { service: 'Surgical removal of skin tumor (varies by site/size)', range: '$800–3,500 (typical US range)' },
      {
        service: 'CHOP chemotherapy course for lymphoma',
        range: '$5,000–10,000 across the protocol (typical US range)',
      },
      { service: 'Single-agent chemotherapy cycle', range: '$200–800 per dose (typical US range)' },
      { service: 'Radiation therapy course', range: '$5,000–10,000 (typical US range, varies widely)' },
      {
        service: 'Total first-year cost for a multimodal protocol',
        range: '$8,000–15,000 (typical US range, varies by tumor type)',
      },
    ],
    insuranceCoverageNotes:
      'Cancer is one of the most common claim categories in pet insurance, and most accident-and-illness plans reimburse chemotherapy, surgery, and radiation when the diagnosis post-dates enrollment and any waiting period. Per-condition caps, annual maximums, and exclusion language around "experimental" treatments are the variables that matter most. Pre-existing condition language is decisive: a suspected mass noted in a wellness exam can be considered pre-existing even before biopsy, depending on the insurer. Enrolling before any abnormal finding is documented is the most reliable way to keep oncology care covered.',
    howToFindOne: [
      'Start with a referral from your primary vet — they will transfer biopsy slides, cytology, and imaging directly to the oncology team.',
      'Use the ACVIM "Find a Specialist" directory to search board-certified oncologists by state.',
      'University teaching hospitals run comprehensive oncology services with access to clinical trials and newer therapies.',
      'Veterinary Cancer Society (VCS) maintains a public membership directory of veterinarians focused on oncology practice.',
      'Verify "DACVIM (Oncology)" board certification or "DACVR (Radiation Oncology)" for radiation specialists.',
    ],
    questionsToAskTheSpecialist: [
      'What is the tumor type, grade, and stage — and what does that mean for prognosis in plain language?',
      'What are all the treatment options, including palliative-only, and what is the expected response rate for each?',
      'What is the realistic median survival time with and without treatment?',
      'What is the total cost of each option, including diagnostics, treatment, and follow-up monitoring?',
      'What side effects should I watch for at home, and when should I call?',
      'How will we measure whether treatment is working, and when would we change course?',
      'Are there clinical trials my pet might qualify for?',
    ],
    citedSources: [
      { name: 'ACVIM — American College of Veterinary Internal Medicine', url: ACVIM },
      { name: 'Veterinary Cancer Society', url: 'https://vetcancersociety.org/' },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      {
        name: 'Withrow & MacEwen\'s Small Animal Clinical Oncology (Elsevier) — standard reference textbook',
        url: 'https://www.elsevier.com/books/withrow-and-macewens-small-animal-clinical-oncology/9780323594967',
      },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },

  // ─── 3. DERMATOLOGY ──────────────────────────────────────────────────
  {
    slug: 'veterinary-dermatology',
    specialtyName: 'Veterinary Dermatology',
    shortName: 'Dermatology',
    boardCertificationOrg:
      'ACVD (American College of Veterinary Dermatology). Diplomates use the credential "DACVD".',
    boardCertificationDirectoryUrl: 'https://www.acvd.org/find-a-dermatologist',
    whenToSeeSummary:
      'Chronic itching, recurrent ear or skin infections, suspected food or environmental allergy, or non-responsive autoimmune skin disease.',
    whenToSee: [
      'Itching, licking, or chewing that persists despite primary-vet treatment for fleas, secondary infection, or empirical allergy therapy.',
      'Recurrent ear infections (more than 2–3 in a year, or one that will not resolve).',
      'Recurrent superficial skin infection (pyoderma) that returns after each antibiotic course.',
      'Suspected food allergy — to design and supervise an elimination diet trial.',
      'Suspected environmental allergy (atopic dermatitis) where intradermal skin testing or serum allergy testing would inform treatment.',
      'Hair loss, scaling, or changes in skin color or texture that the primary vet has not been able to diagnose.',
      'Suspected autoimmune skin disease (pemphigus, lupus, vasculitis) — most require biopsy and long-term immunosuppression.',
      'Long-term use of oral steroids that you and your primary vet want to wean.',
    ],
    commonConditionsTreated: [
      {
        name: 'Atopic dermatitis (environmental allergy)',
        summary:
          'A hereditary tendency to react to environmental allergens — pollens, mites, molds. Lifelong management with a combination of allergen-specific immunotherapy (allergy shots or oral drops), targeted medications (oclacitinib, lokivetmab, cyclosporine), and skin-barrier support.',
      },
      {
        name: 'Food allergy / adverse food reaction',
        summary:
          'Most reliably diagnosed by an 8–12 week elimination diet trial with a novel-protein or hydrolyzed diet followed by deliberate re-challenge. Blood and saliva food-allergy tests are not reliable diagnostic tools.',
      },
      {
        name: 'Otitis externa (ear infection)',
        summary:
          'Recurrent ear infections are almost always secondary to an underlying allergy or anatomic problem. A dermatologist works up the underlying cause, performs video-otoscopy when indicated, and designs a long-term management plan.',
      },
      {
        name: 'Bacterial pyoderma',
        summary:
          'Superficial skin infection that often recurs because of an underlying allergy. Recurrent or methicillin-resistant cases benefit from culture-directed therapy and management of the primary disease.',
      },
      {
        name: 'Malassezia dermatitis',
        summary:
          'Yeast overgrowth on the skin or in the ears, often accompanying allergic skin disease. Treatment involves topical antifungal therapy and addressing the underlying allergic disease.',
      },
      {
        name: 'Pemphigus foliaceus and other immune-mediated skin diseases',
        summary:
          'Autoimmune diseases that cause pustules, crusts, and erosions, often starting on the face and ears. Diagnosis is by biopsy. Treatment involves immunosuppressive medication and long-term monitoring.',
      },
    ],
    whatToExpectAtVisit: [
      'A long, history-heavy first appointment — when itching started, what flea control is in use, what the primary vet has tried, and what diet your pet eats.',
      'Cytology of any infected sites — skin and ear cytology in clinic identify the bugs growing and guide treatment.',
      'A staged diagnostic plan: most commonly, ruling out parasites and infection first, then designing an elimination diet trial, then allergy testing if atopic dermatitis is suspected.',
      'A written long-term management plan, because allergy is managed rather than cured.',
      'Ongoing partnership with your primary vet for routine care and flare management.',
    ],
    typicalDiagnostics: [
      'Skin and ear cytology.',
      'Skin scrapes and trichograms for parasites and follicular disease.',
      'Bacterial and fungal culture with antimicrobial susceptibility testing.',
      'Skin biopsy for histopathology in autoimmune, neoplastic, or refractory cases.',
      'Intradermal allergy skin testing or serum IgE allergy testing for atopic dermatitis.',
      'Elimination diet trial with deliberate re-challenge for suspected food allergy.',
      'Video-otoscopy for chronic ear disease.',
    ],
    averageCostRanges: [
      { service: 'Initial dermatology consultation', range: '$200–500 (typical US range)' },
      { service: 'Cytology and skin scrape workup', range: '$80–250 (typical US range)' },
      { service: 'Skin biopsy with histopathology', range: '$300–700 (typical US range)' },
      { service: 'Intradermal allergy testing', range: '$300–600 (typical US range)' },
      { service: 'Serum allergy panel', range: '$200–500 (typical US range)' },
      {
        service: 'Allergen-specific immunotherapy formulation',
        range: '$300–700 to start, then $30–60/month maintenance (typical US range)',
      },
      {
        service: 'Annual chronic-management cost',
        range: '$1,000–4,500 per year (typical US range, varies by therapy)',
      },
    ],
    insuranceCoverageNotes:
      'Allergic skin disease is one of the most common pet-insurance claim categories, and most accident-and-illness plans reimburse dermatology consultations, diagnostics, immunotherapy, and chronic medications like oclacitinib and lokivetmab — provided the allergy is not pre-existing. Many policies treat atopic dermatitis as a bilateral or chronic condition that recurs each year against the annual deductible, which improves long-term value. Pre-existing condition exclusions are decisive: a single primary-care note of "pruritus" can prevent allergy claims later, depending on the insurer.',
    howToFindOne: [
      'Get a referral from your primary vet — dermatologists strongly prefer records of prior workup so they do not duplicate testing.',
      'Use the ACVD "Find a Dermatologist" directory to locate board-certified diplomates by state.',
      'Teaching hospitals (Cornell, NC State, UC Davis) maintain dermatology services that accept owner-initiated appointments.',
      'Vetster and some other telehealth platforms have board-certified dermatologists for follow-up and second opinions — initial diagnosis usually still needs an in-person exam.',
      'Verify "DACVD" board certification on the specialist\'s profile or hospital page.',
    ],
    questionsToAskTheSpecialist: [
      'What is the most likely underlying diagnosis, and what is the diagnostic plan to confirm it?',
      'If we suspect food allergy, what novel-protein or hydrolyzed diet do you recommend, and how strict does the trial need to be?',
      'What flare-management plan should I have at home so I do not need an urgent visit each time?',
      'What are the long-term side effects of the medications you are recommending, and how will we monitor for them?',
      'Is allergen-specific immunotherapy a reasonable option for my pet — and what would success look like?',
      'How long until we know whether this plan is working, and what would change if it is not?',
    ],
    citedSources: [
      { name: 'ACVD — American College of Veterinary Dermatology', url: ACVD },
      {
        name: 'WAVD Clinical Consensus Guidelines: Canine Atopic Dermatitis',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/vde.13072',
      },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
      { name: 'CareCredit Pet Care Cost Reference', url: CARE_CREDIT_COST },
    ],
  },

  // ─── 4. OPHTHALMOLOGY ────────────────────────────────────────────────
  {
    slug: 'veterinary-ophthalmology',
    specialtyName: 'Veterinary Ophthalmology',
    shortName: 'Ophthalmology',
    boardCertificationOrg:
      'ACVO (American College of Veterinary Ophthalmologists). Diplomates use the credential "DACVO".',
    boardCertificationDirectoryUrl: 'https://www.acvo.org/find-a-veterinary-ophthalmologist',
    whenToSeeSummary:
      'Painful or red eye, sudden vision change, cataracts, glaucoma, corneal ulcers that will not heal, or breed-screening for hereditary eye disease.',
    whenToSee: [
      'Squinting, excessive tearing, pawing at the eye, or any sign your pet is in eye pain — eye emergencies do not improve with watchful waiting.',
      'A red, cloudy, bulging, or visibly painful eye.',
      'Sudden vision change — bumping into things, hesitation at curbs, reluctance to navigate at night.',
      'A corneal ulcer that is not healing on primary-vet medication after one week.',
      'Suspected glaucoma — an acute glaucoma attack is a vision emergency and warrants same-day specialty care.',
      'Cataracts — for surgical evaluation. Early referral preserves more options.',
      'Breed screening exams for hereditary eye disease (CAER / OFA Eye Certification).',
      'Eyelid abnormalities (entropion, ectropion, distichiasis, eyelid masses) requiring surgical correction.',
    ],
    commonConditionsTreated: [
      {
        name: 'Cataracts',
        summary:
          'Lens opacity that progresses to vision loss. Diabetic dogs are at very high risk. Phacoemulsification surgery — the same procedure used in human cataract surgery — is well-established in dogs with appropriate candidates.',
      },
      {
        name: 'Glaucoma',
        summary:
          'Elevated intraocular pressure that damages the retina and optic nerve. Acute glaucoma is a vision emergency. Some breeds (Cocker Spaniel, Basset Hound, Shih Tzu, Chow Chow) have hereditary primary glaucoma and benefit from prophylactic medication in the second eye.',
      },
      {
        name: 'Corneal ulcers',
        summary:
          'Defects in the corneal surface that can rapidly progress to deeper layers. Indolent ulcers (SCCEDs), melting ulcers, and infectious keratitis benefit from specialty management when primary-vet treatment is not resolving the lesion.',
      },
      {
        name: 'Dry eye (keratoconjunctivitis sicca)',
        summary:
          'Reduced tear production. Common in Cocker Spaniels, West Highland White Terriers, and English Bulldogs. Diagnosed with a Schirmer tear test. Lifelong cyclosporine therapy is the standard of care.',
      },
      {
        name: 'Progressive retinal atrophy (PRA)',
        summary:
          'A group of hereditary retinal degenerations that cause progressive vision loss, typically starting with night vision. Multiple breed-specific genetic tests are available for at-risk breeds.',
      },
      {
        name: 'Eyelid abnormalities',
        summary:
          'Entropion (eyelids rolling inward), ectropion (eyelids rolling outward), and distichiasis (extra eyelashes). Surgical correction is straightforward in experienced hands and prevents long-term corneal damage.',
      },
    ],
    whatToExpectAtVisit: [
      'A full ophthalmic examination using a slit-lamp biomicroscope, tonometer (intraocular pressure), Schirmer tear test, fluorescein stain, and indirect ophthalmoscopy.',
      'Most exams are performed awake — gentle restraint plus topical anesthetic is usually enough.',
      'For surgical candidates, a discussion of risks, alternatives, and post-operative expectations including frequent home eye drops.',
      'For breed-screening exams (CAER / OFA), a formal report submitted to the OFA registry.',
      'A written report to your primary vet, with timing of any recheck and any home medications.',
    ],
    typicalDiagnostics: [
      'Slit-lamp biomicroscopy.',
      'Tonometry (intraocular pressure measurement).',
      'Schirmer tear test (tear production).',
      'Fluorescein stain (corneal ulcer detection).',
      'Direct and indirect ophthalmoscopy of the retina.',
      'Gonioscopy for predisposed glaucoma breeds.',
      'Ocular ultrasound and electroretinography (ERG) for cataract surgical candidates.',
      'Genetic testing for hereditary retinal disease.',
    ],
    averageCostRanges: [
      { service: 'Initial ophthalmology consultation', range: '$200–500 (typical US range)' },
      { service: 'CAER / breed screening exam', range: '$50–150 plus OFA filing fee (typical US range)' },
      {
        service: 'Cataract surgery (phacoemulsification, single eye)',
        range: '$3,500–6,000 (typical US range)',
      },
      {
        service: 'Cataract surgery (both eyes, same anesthesia)',
        range: '$4,500–8,000 (typical US range)',
      },
      { service: 'Glaucoma medication management', range: '$50–200 per month (typical US range)' },
      { service: 'Entropion or ectropion surgery', range: '$800–2,500 (typical US range)' },
      {
        service: 'Chronic dry-eye management (cyclosporine)',
        range: '$300–800 per year (typical US range)',
      },
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse ophthalmology consultations, cataract surgery, glaucoma medications, and dry-eye management once the eye condition is established after enrollment and the waiting period. Bilateral-condition language matters in ophthalmology: a plan that treats one eye as pre-existing because of disease on the other side will dramatically reduce reimbursement. Hereditary disease exclusions vary; some plans cover hereditary disease without a rider, others require it. Read the exclusion list before selecting a plan for a breed at hereditary risk.',
    howToFindOne: [
      'Ask your primary vet for a referral — they can flag time-sensitive issues so the specialist sees you sooner.',
      'Use the ACVO "Find a Veterinary Ophthalmologist" directory to locate board-certified diplomates by state.',
      'Teaching hospitals run comprehensive ophthalmology services including cataract surgery.',
      'For breed CAER / OFA eye certification exams, many ophthalmologists hold scheduled regional clinics — check the OFA website for upcoming events.',
      'For an acute red, painful, or sudden-vision-loss eye, go to a 24-hour emergency hospital first; ophthalmology referral can follow once initial pressure control or analgesia has been given.',
    ],
    questionsToAskTheSpecialist: [
      'What is the diagnosis, and is this condition typically painful even when it does not look painful from the outside?',
      'What is the prognosis for vision with and without treatment?',
      'If surgery is recommended, what is the success rate at your institution, and what are the realistic risks?',
      'What home eye drops are required, how often, and for how long?',
      'How will we monitor whether treatment is working, and what is the recheck schedule?',
      'For breeds at hereditary risk, should the second eye be on prophylactic medication?',
    ],
    citedSources: [
      { name: 'ACVO — American College of Veterinary Ophthalmologists', url: ACVO },
      {
        name: 'ACVO Genetics Committee — Ocular Disorders Presumed to be Inherited in Purebred Dogs',
        url: 'https://www.acvo.org/genetics',
      },
      { name: 'OFA — Companion Animal Eye Registry (CAER)', url: 'https://www.ofa.org/diseases/eye-certification' },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },

  // ─── 5. NEUROLOGY ────────────────────────────────────────────────────
  {
    slug: 'veterinary-neurology',
    specialtyName: 'Veterinary Neurology',
    shortName: 'Neurology',
    boardCertificationOrg:
      'ACVIM (American College of Veterinary Internal Medicine) — Neurology subspecialty. Diplomates use "DACVIM (Neurology)".',
    boardCertificationDirectoryUrl: 'https://www.acvim.org/About/Find-a-Specialist',
    whenToSeeSummary:
      'Seizures, sudden weakness or paralysis, suspected intervertebral disc disease, vestibular signs, or cognitive decline.',
    whenToSee: [
      'A first seizure that lasts more than 2 minutes, or any cluster of seizures within 24 hours — an emergency.',
      'Recurrent seizures (more than one per month, or any in a young or geriatric pet) — for diagnostic workup and anti-seizure medication planning.',
      'Sudden inability to walk, dragging a limb, or "off in the back end" — suspected intervertebral disc disease, especially in Dachshunds, Beagles, and other chondrodystrophic breeds.',
      'Sudden head tilt, circling, nystagmus, or loss of balance — vestibular syndrome.',
      'Progressive weakness or difficulty getting up over weeks to months — suspected Wobbler syndrome, degenerative myelopathy, or spinal tumor.',
      'Painful neck, with reluctance to lower the head to eat or drink.',
      'Behavioral changes that are out of character — disorientation, loss of housetraining, altered sleep — for cognitive workup in older pets.',
      'Facial droop or asymmetry, difficulty blinking, or difficulty swallowing.',
    ],
    commonConditionsTreated: [
      {
        name: 'Idiopathic epilepsy',
        summary:
          'The most common cause of recurrent seizures in young to middle-aged dogs. Long-term control with anti-seizure medication is the standard of care; goal is reduction in frequency and severity, not necessarily zero seizures.',
      },
      {
        name: 'Intervertebral disc disease (IVDD)',
        summary:
          'Disc material extruding into the spinal canal causes back or neck pain and varying degrees of weakness or paralysis. MRI defines the location and surgical candidacy. Outcomes are best with prompt evaluation, before deep pain perception is lost.',
      },
      {
        name: 'Vestibular disease',
        summary:
          'Sudden head tilt, nystagmus, and ataxia. Peripheral (inner-ear) causes are common and often improve. Central (brainstem) causes can indicate stroke, inflammation, or tumor and warrant prompt imaging.',
      },
      {
        name: 'Wobbler syndrome (cervical spondylomyelopathy)',
        summary:
          'Compression of the spinal cord in the neck, most common in Dobermans and Great Danes. Diagnosed with MRI. Medical and surgical management both have a role depending on severity.',
      },
      {
        name: 'Degenerative myelopathy',
        summary:
          'A progressive, painless spinal cord disease seen most often in German Shepherds, Corgis, and Boxers. There is a breed-specific genetic test. Supportive care — including physical rehabilitation — is the cornerstone.',
      },
      {
        name: 'Brain tumors',
        summary:
          'Often present as new-onset seizures in older dogs and cats, or as behavioral or gait changes. MRI is the diagnostic modality of choice. Treatment options include surgery, radiation, palliative medication, or combinations.',
      },
    ],
    whatToExpectAtVisit: [
      'A detailed neurologic examination that localizes the problem to a region of the nervous system before any imaging is ordered.',
      'A discussion of imaging — MRI is the most common diagnostic test for spine and brain disease, and almost always requires general anesthesia.',
      'For acute IVDD, often a same-day MRI and surgical recommendation if the pet is a candidate.',
      'For chronic conditions, a staged plan that may include cerebrospinal fluid analysis or advanced imaging.',
      'A written report to your primary vet with anti-seizure medication monitoring schedule, rehabilitation referral, or surgical timing.',
    ],
    typicalDiagnostics: [
      'Detailed neurologic exam (the most important test).',
      'MRI of the spine or brain under general anesthesia.',
      'CT scan (faster, less detailed than MRI but useful for some indications).',
      'Cerebrospinal fluid (CSF) analysis.',
      'Electrodiagnostic testing (EMG, nerve conduction studies).',
      'Bloodwork including anti-seizure medication levels.',
      'Genetic testing for breed-specific neurologic disease (degenerative myelopathy, etc.).',
    ],
    averageCostRanges: [
      { service: 'Initial neurology consultation', range: '$200–500 (typical US range)' },
      { service: 'MRI under general anesthesia', range: '$2,000–4,000 (typical US range)' },
      { service: 'CT scan under general anesthesia', range: '$1,000–2,500 (typical US range)' },
      {
        service: 'Spinal surgery for IVDD',
        range: '$5,000–10,000 including imaging and post-op care (typical US range)',
      },
      {
        service: 'Anti-seizure medication monitoring (annual)',
        range: '$300–800 per year (typical US range)',
      },
      {
        service: 'Post-spinal-surgery rehabilitation',
        range: '$1,200–3,000 across the recovery (typical US range)',
      },
    ],
    insuranceCoverageNotes:
      'Spinal surgery and MRI are among the largest single-claim categories in pet insurance, and most accident-and-illness plans reimburse the workup and surgical treatment of IVDD when it post-dates enrollment and the waiting period. Some insurers apply a separate IVDD waiting period (often 6 months). Hereditary disease language matters for breeds at known risk — confirm coverage in writing before assuming. Long-term anti-seizure medication is also covered by most accident-and-illness plans, with the same pre-existing condition rules.',
    howToFindOne: [
      'Start with your primary vet — for spinal emergencies, they may direct you to the closest neurology service with MRI access.',
      'Use the ACVIM "Find a Specialist" directory to locate board-certified neurologists by state.',
      'Veterinary teaching hospitals run 24-hour neurology services in many regions.',
      'For acute spinal injury or seizures longer than 2 minutes, go to a 24-hour emergency hospital first — they will coordinate with neurology.',
      'Verify "DACVIM (Neurology)" or, in newer training tracks, "DACVN" board certification.',
    ],
    questionsToAskTheSpecialist: [
      'What is the most likely diagnosis, and what does the neuro exam alone tell us before imaging?',
      'If we image, are we looking for something that is treatable? What changes if we do not image?',
      'For an IVDD candidate, what is the expected recovery time and outcome with surgery versus conservative management?',
      'If anti-seizure medication is recommended, what side effects do we monitor, and how often will we check levels?',
      'What rehabilitation is recommended, and when does it start?',
      'What would warrant an urgent return — what changes at home would be a red flag?',
    ],
    citedSources: [
      { name: 'ACVIM — American College of Veterinary Internal Medicine', url: ACVIM },
      {
        name: 'ACVIM Consensus Statement on Seizure Management in Dogs',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.13841',
      },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
      { name: 'CareCredit Pet Care Cost Reference', url: CARE_CREDIT_COST },
    ],
  },

  // ─── 6. DENTISTRY ────────────────────────────────────────────────────
  {
    slug: 'veterinary-dentistry',
    specialtyName: 'Veterinary Dentistry',
    shortName: 'Dentistry',
    boardCertificationOrg:
      'AVDC (American Veterinary Dental College). Diplomates use the credential "DAVDC".',
    boardCertificationDirectoryUrl: 'https://avdc.org/find-a-veterinary-dentist/',
    whenToSeeSummary:
      'Complex extractions, oral surgery, jaw fractures, oral tumors, advanced periodontal disease, or persistent pain after a routine dental.',
    whenToSee: [
      'Complex extractions involving canine teeth, large-breed molars, or teeth with extensive bone loss.',
      'Oral tumors or non-healing oral masses requiring biopsy, staging, and surgical planning.',
      'Jaw fracture — traumatic or pathologic — requiring repair.',
      'Maxillofacial trauma after a fall, vehicle injury, or bite wound.',
      'Persistent oral pain, refusal to eat, or drooling that did not resolve after a primary-vet dental cleaning.',
      'Suspected tooth root abscess presenting as a draining tract under the eye.',
      'Bite or occlusion problems in young dogs and cats (malocclusions, retained deciduous teeth that need timed extraction).',
      'Endodontic options (root canal therapy) as an alternative to extraction for strategic teeth, especially working dogs.',
    ],
    commonConditionsTreated: [
      {
        name: 'Periodontal disease',
        summary:
          'The most common disease in adult dogs and cats. Stages 1–4 reflect progressively worse gum and bone involvement. Stage 3–4 disease often needs extraction and may benefit from specialty cleaning under cone-beam CT or dental radiography.',
      },
      {
        name: 'Feline tooth resorption',
        summary:
          'A common, painful condition in cats where the tooth structure breaks down at the gum line. Diagnosed with dental radiographs. Extraction or crown amputation is curative for the affected tooth.',
      },
      {
        name: 'Fractured teeth with pulp exposure',
        summary:
          'Common after chewing hard toys, bones, or antlers. Pulp exposure is painful and predisposes to abscess. Root canal therapy preserves the tooth; extraction is the alternative.',
      },
      {
        name: 'Oral tumors',
        summary:
          'Common types include malignant melanoma, squamous cell carcinoma, fibrosarcoma, and acanthomatous ameloblastoma. Early diagnosis and wide surgical excision (often partial maxillectomy or mandibulectomy) drive outcomes.',
      },
      {
        name: 'Jaw fractures',
        summary:
          'Traumatic and pathologic. Repair techniques range from inter-arch wiring to plate fixation and require dental imaging for planning.',
      },
      {
        name: 'Malocclusion in young animals',
        summary:
          'Retained deciduous canines, lance teeth, and base-narrow canines can be addressed with timed extraction or orthodontic appliances to prevent long-term damage.',
      },
    ],
    whatToExpectAtVisit: [
      'A conscious oral exam at the initial consultation — the full dental procedure is done under general anesthesia at a separate appointment.',
      'A discussion of anesthesia safety: AVDC, AAHA, and AVMA position statements all oppose "anesthesia-free dental cleaning," which cannot address subgingival disease, the part that matters.',
      'Full-mouth dental radiographs or cone-beam CT at the procedure visit — most disease is below the gum line and invisible to the naked eye.',
      'A written treatment plan with cost ranges for each option (extraction vs. root canal vs. crown vs. orthodontic therapy where applicable).',
      'A written report to your primary vet with home-care recommendations and recheck timing.',
    ],
    typicalDiagnostics: [
      'Full-mouth dental radiographs under general anesthesia.',
      'Cone-beam CT for complex cases (jaw fractures, oral tumors, surgical planning).',
      'Periodontal probing and charting under anesthesia.',
      'Biopsy of suspicious oral masses.',
      'Pre-anesthetic bloodwork.',
    ],
    averageCostRanges: [
      { service: 'Initial veterinary dental consultation', range: '$150–400 (typical US range)' },
      {
        service: 'Routine dental cleaning under anesthesia',
        range: '$400–1,200 (typical US range, primary-vet)',
      },
      {
        service: 'Specialty dental procedure (extractions + radiographs)',
        range: '$1,200–3,500 (typical US range)',
      },
      { service: 'Root canal therapy (single tooth)', range: '$1,500–3,500 (typical US range)' },
      { service: 'Crown placement', range: '$1,500–3,000 (typical US range)' },
      {
        service: 'Oral tumor surgery (partial maxillectomy/mandibulectomy)',
        range: '$3,500–7,500 (typical US range)',
      },
      {
        service: 'Jaw fracture repair',
        range: '$2,500–6,000 (typical US range, varies with fixation method)',
      },
    ],
    insuranceCoverageNotes:
      'Pet-insurance dental coverage varies more than almost any other category. Most accident-and-illness plans reimburse dental disease that results from injury (fractured teeth, jaw fractures) without an add-on, but coverage of periodontal disease commonly requires a dental-illness rider or higher-tier plan and often comes with annual cleaning requirements to remain in good standing. Read the specific dental clauses before assuming coverage. Wellness add-on plans that include "dental cleaning" generally cap reimbursement well below the cost of a specialty procedure.',
    howToFindOne: [
      'Ask your primary vet for a referral — they can transfer dental records and imaging.',
      'Use the AVDC "Find a Veterinary Dentist" directory to locate board-certified diplomates.',
      'Teaching hospitals run dentistry and oral surgery services for complex cases.',
      'Verify "DAVDC" board certification on the practitioner\'s page.',
      'Avoid "anesthesia-free dental cleaning" services — the AVDC, AAHA, and AVMA all advise against them; the cleaning that matters is below the gum line.',
    ],
    questionsToAskTheSpecialist: [
      'Are extractions necessary, and if so which teeth — and are there any teeth you would consider for root canal instead?',
      'What does pre-anesthetic monitoring look like at your practice, and what is your anesthetic protocol?',
      'How will pain be controlled at home after the procedure?',
      'For an oral tumor, what is the staging plan, and what does wide excision look like for this tumor type?',
      'What home dental care should I do once we are healed up?',
      'How often should we recheck after this procedure?',
    ],
    citedSources: [
      { name: 'AVDC — American Veterinary Dental College', url: AVDC },
      { name: 'American Veterinary Dental Society', url: 'https://www.avds-online.org/' },
      {
        name: 'AAHA Dental Care Guidelines for Dogs and Cats',
        url: 'https://www.aaha.org/aaha-guidelines/dental-care/',
      },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },

  // ─── 7. INTERNAL MEDICINE ────────────────────────────────────────────
  {
    slug: 'veterinary-internal-medicine',
    specialtyName: 'Veterinary Internal Medicine',
    shortName: 'Internal Medicine',
    boardCertificationOrg:
      'ACVIM (American College of Veterinary Internal Medicine) — Small Animal Internal Medicine. Diplomates use "DACVIM (SAIM)".',
    boardCertificationDirectoryUrl: 'https://www.acvim.org/About/Find-a-Specialist',
    whenToSeeSummary:
      'Complex chronic disease, unexplained bloodwork changes, suspected endocrine disease, autoimmune disease, or persistent GI signs.',
    whenToSee: [
      'Unexplained or progressive bloodwork abnormalities — anemia, elevated liver enzymes, kidney values trending up.',
      'Suspected endocrine disease — Cushing\'s (hyperadrenocorticism), Addison\'s (hypoadrenocorticism), uncontrolled diabetes, hyperthyroidism in cats.',
      'Chronic vomiting or diarrhea that has not responded to primary-vet workup and diet trials.',
      'Suspected immune-mediated disease — IMHA (anemia), IMPA (joint disease), ITP (low platelets).',
      'Chronic kidney disease that needs staging, fluid therapy planning, or evaluation for renal transplant or biopsy.',
      'Liver disease (hepatic shunts, chronic hepatitis, copper-associated hepatopathy) that needs imaging, biopsy, and long-term planning.',
      'Suspected infectious disease that needs advanced testing (leptospirosis, tick-borne disease, fungal disease).',
      'A diagnostic puzzle — multiple body systems involved, no single primary-care explanation.',
    ],
    commonConditionsTreated: [
      {
        name: 'Chronic kidney disease (CKD)',
        summary:
          'Staged by IRIS (International Renal Interest Society) criteria. Long-term management includes diet, blood pressure control, phosphate binders when needed, and regular monitoring of SDMA, urine protein, and electrolytes.',
      },
      {
        name: 'Diabetes mellitus',
        summary:
          'Common in middle-aged to older dogs and cats. An internist refines insulin protocols, troubleshoots difficult cases, and uses continuous glucose monitors to fine-tune therapy.',
      },
      {
        name: 'Hyperadrenocorticism (Cushing\'s disease)',
        summary:
          'Excess cortisol from a pituitary or adrenal tumor. Diagnosis combines clinical signs with ACTH stimulation or low-dose dexamethasone suppression testing. Treatment is most often trilostane, with close monitoring.',
      },
      {
        name: 'Inflammatory bowel disease (IBD) and chronic enteropathy',
        summary:
          'A spectrum of chronic GI disease. Diagnosis often requires endoscopy with biopsies. Treatment is staged through diet trial, then immunomodulation, with attention to vitamin B12.',
      },
      {
        name: 'Immune-mediated hemolytic anemia (IMHA)',
        summary:
          'A life-threatening anemia where the immune system attacks red blood cells. Treated with immunosuppression and clot-prevention; often requires transfusion. ICU and internal medicine coordinate care.',
      },
      {
        name: 'Hyperthyroidism in cats',
        summary:
          'The most common endocrine disease in older cats. Treatment options include daily methimazole, prescription diet, radioactive iodine (the only curative option), or thyroidectomy.',
      },
    ],
    whatToExpectAtVisit: [
      'A long, history-heavy first appointment, often 60–90 minutes, with full review of every prior test and treatment.',
      'A focused physical exam, then a discussion of a staged diagnostic plan that prioritizes the tests likely to change management.',
      'Often abdominal ultrasound at the first visit, plus expanded bloodwork (immune panels, endocrine testing, infectious disease screens).',
      'Endoscopy, bone marrow aspirate, or fine-needle aspirate biopsies on a separate appointment if indicated.',
      'A clear, written long-term plan back to your primary vet with monitoring intervals, expected costs, and what to watch for at home.',
    ],
    typicalDiagnostics: [
      'Expanded CBC, chemistry, urinalysis with urine protein-creatinine ratio.',
      'Abdominal ultrasound and thoracic radiographs.',
      'Endocrine testing (ACTH stim, low-dose dex suppression, thyroid panels, fructosamine).',
      'Endoscopy with biopsy (upper and lower GI).',
      'Bone marrow aspirate and core biopsy.',
      'Infectious disease panels (tick-borne disease, fungal serology, leptospirosis).',
      'Liver biopsy with culture and copper quantification.',
      'Continuous glucose monitoring.',
    ],
    averageCostRanges: [
      { service: 'Initial internal medicine consultation', range: '$200–500 (typical US range)' },
      { service: 'Expanded bloodwork panel', range: '$200–500 (typical US range)' },
      { service: 'Abdominal ultrasound', range: '$400–800 (typical US range)' },
      { service: 'Upper and lower GI endoscopy with biopsies', range: '$2,000–4,500 (typical US range)' },
      { service: 'Bone marrow aspirate and biopsy', range: '$600–1,200 (typical US range)' },
      {
        service: 'Annual chronic-disease management',
        range: '$1,500–6,000 per year (typical US range, varies by condition)',
      },
      {
        service: 'IMHA hospitalization with transfusion',
        range: '$3,000–10,000 (typical US range, varies with response)',
      },
    ],
    insuranceCoverageNotes:
      'Internal medicine cases are typically high-claim categories — chronic endocrine disease, IBD, IMHA, and CKD all involve repeated visits, ongoing medication, and recurring diagnostics. Most accident-and-illness plans reimburse internal medicine consultations, diagnostics, and ongoing medication once the condition is post-enrollment. Annual maximum limits matter most for high-frequency disease; consider plans with higher annual or no-cap structures for breeds at hereditary risk for endocrine or immune-mediated disease.',
    howToFindOne: [
      'Ask your primary vet to refer — they will send records, prior bloodwork trends, and imaging directly.',
      'Use the ACVIM "Find a Specialist" directory to locate board-certified internists by state.',
      'Teaching hospitals run internal medicine services that often include access to clinical trials.',
      'Verify "DACVIM (SAIM)" — Small Animal Internal Medicine — on the specialist\'s profile.',
      'For Cushing\'s, IMHA, or diabetes troubleshooting, telehealth options exist for follow-ups once an in-person workup is complete.',
    ],
    questionsToAskTheSpecialist: [
      'What is the working diagnosis, and what is the differential list we are still considering?',
      'Which tests will change management, and which ones will not — so we can prioritize?',
      'What is the long-term outlook for this condition with good management?',
      'What home monitoring should I do, and what would warrant calling sooner?',
      'How will we coordinate care with my primary vet for routine bloodwork and prescription refills?',
      'What are the side effects of the medication you are starting, and how will we monitor for them?',
    ],
    citedSources: [
      { name: 'ACVIM — American College of Veterinary Internal Medicine', url: ACVIM },
      { name: 'IRIS — International Renal Interest Society (CKD staging)', url: 'https://www.iris-kidney.com/' },
      {
        name: 'ACVIM Consensus Statement on the Diagnosis of Spontaneous Canine Chronic Hepatitis',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15467',
      },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },

  // ─── 8. EMERGENCY & CRITICAL CARE ────────────────────────────────────
  {
    slug: 'veterinary-emergency-critical-care',
    specialtyName: 'Veterinary Emergency and Critical Care',
    shortName: 'Emergency & Critical Care',
    boardCertificationOrg:
      'ACVECC (American College of Veterinary Emergency and Critical Care). Diplomates use "DACVECC".',
    boardCertificationDirectoryUrl: 'https://acvecc.org/find-an-ecc-specialist/',
    whenToSeeSummary:
      'Trauma, suspected poisoning, sudden collapse, breathing difficulty, bloat, or any pet that needs intensive monitoring or stabilization.',
    whenToSee: [
      'Trauma — hit by car, fall from height, dog fight bite wounds.',
      'Sudden collapse, fainting, or unresponsiveness.',
      'Difficulty breathing at rest, blue-tinged gums, or sustained open-mouth breathing in a cat.',
      'Suspected toxin ingestion — chocolate, xylitol, grapes/raisins, rodenticides, prescription human medication, certain plants.',
      'Bloat / GDV in a deep-chested dog — unproductive retching with a distended abdomen is a life-threatening emergency.',
      'Heatstroke or hypothermia.',
      'Active bleeding that does not stop with pressure, or signs of internal bleeding (pale gums, weakness, distended abdomen).',
      'Inability to urinate, especially in male cats (urethral obstruction) and male dogs.',
      'Seizure lasting more than 2 minutes, or multiple seizures within 24 hours.',
      'Severe vomiting or diarrhea with weakness, dehydration, or bloody stool.',
    ],
    commonConditionsTreated: [
      {
        name: 'Trauma stabilization',
        summary:
          'Shock management, oxygen support, pain control, point-of-care imaging (focused abdominal/thoracic ultrasound), and surgical triage. Multi-system trauma benefits from a critical care specialist coordinating multiple teams.',
      },
      {
        name: 'Gastric dilatation-volvulus (GDV / bloat)',
        summary:
          'A surgical emergency in deep-chested dogs. Survival depends on rapid stabilization, decompression, and surgical correction. Most surgeons recommend prophylactic gastropexy at the same anesthesia.',
      },
      {
        name: 'Toxin ingestion',
        summary:
          'Treatment includes decontamination, antidote where one exists, and supportive care. ASPCA Animal Poison Control (888-426-4435) and Pet Poison Helpline (855-764-7661) are paid consultation services that triage toxin cases.',
      },
      {
        name: 'Respiratory emergencies',
        summary:
          'Pulmonary edema (heart failure), pleural effusion, pneumonia, upper airway obstruction (laryngeal paralysis, brachycephalic crisis). Oxygen, sedation, and rapid imaging are central.',
      },
      {
        name: 'Diabetic ketoacidosis (DKA)',
        summary:
          'A life-threatening complication of unregulated diabetes that requires fluid and electrolyte management, regular insulin, and intensive monitoring.',
      },
      {
        name: 'Sepsis',
        summary:
          'Bloodstream infection causing organ dysfunction. Treatment includes IV antibiotics, fluid therapy, vasopressors when needed, and source control. ICU monitoring is essential.',
      },
    ],
    whatToExpectAtVisit: [
      'A triage nurse meets you at the door and prioritizes by severity — the sickest patients go first, regardless of arrival order.',
      'A rapid stabilization phase: oxygen, IV access, fluid therapy, pain control, point-of-care bloodwork and ultrasound (FAST scan).',
      'A clear conversation about the working diagnosis, the recommended diagnostic plan, and an estimate before procedures begin.',
      'A defined plan for the next 24 hours — what is being monitored, what could change, and what the criteria are for discharge.',
      'Regular updates from the ECC team and a written discharge summary sent to your primary vet.',
    ],
    typicalDiagnostics: [
      'Point-of-care bloodwork (CBC, chemistry, blood gas, lactate, coagulation panel).',
      'Focused abdominal and thoracic ultrasound (AFAST / TFAST).',
      'Radiographs (chest, abdomen, orthopedic).',
      'Blood pressure, ECG, continuous SpO2 and capnography in critical patients.',
      'Toxicology screens where available.',
      'CT scan for trauma and surgical planning.',
    ],
    averageCostRanges: [
      { service: 'Emergency exam and triage', range: '$150–300 (typical US range, after-hours often higher)' },
      { service: 'Hospitalization per day (general)', range: '$600–1,500 per day (typical US range)' },
      { service: 'ICU hospitalization per day', range: '$1,500–3,500 per day (typical US range)' },
      { service: 'GDV surgery + recovery', range: '$3,500–10,000 (typical US range)' },
      { service: 'Snake-bite treatment with antivenom', range: '$1,500–5,000+ (typical US range)' },
      { service: 'Pyometra surgery + recovery', range: '$2,500–6,000 (typical US range)' },
      {
        service: 'Multi-day toxin treatment',
        range: '$1,500–5,000 (typical US range, varies with toxin and length of stay)',
      },
    ],
    insuranceCoverageNotes:
      'Emergency and critical care is what most pet-insurance plans were designed to cover. Most accident-and-illness plans reimburse ER exam fees, hospitalization, surgery, and ICU care once the policy is active and any waiting period has passed. Annual maximum limits are the most important variable — a multi-day ICU stay for sepsis, GDV, or trauma can exhaust low-cap plans quickly. Plans with higher annual maximums (or no annual cap) protect best against catastrophic ER costs.',
    howToFindOne: [
      'Find and save the address and phone number of your nearest 24-hour emergency veterinary hospital before you need it — searching during a crisis costs time.',
      'For toxin exposure, call ASPCA Animal Poison Control at 888-426-4435 ($75 consultation) or Pet Poison Helpline at 855-764-7661 before driving — they will tell you what to do en route.',
      'Use the ACVECC "Find an ECC Specialist" directory to identify specialty hospitals near you with board-certified critical care.',
      'Many ERs do not have board-certified DACVECC criticalists on every shift — for known-complex cases, ask which hours a criticalist is on duty.',
      'Verify "DACVECC" board certification for the criticalist who will be primary on a complex ICU case.',
    ],
    questionsToAskTheSpecialist: [
      'What is the most likely diagnosis given how my pet is presenting now, and what would change that?',
      'What is your written estimate for the recommended workup and the first 24 hours of care?',
      'What is the prognosis with treatment, and what is the prognosis without?',
      'Who is the on-shift doctor for the next 12 hours, and when does the team change over?',
      'What is the criteria for discharge — what do we need to see before we can take them home?',
      'After discharge, who is the right person to call with questions — you, my primary vet, or both?',
    ],
    citedSources: [
      { name: 'ACVECC — American College of Veterinary Emergency and Critical Care', url: ACVECC },
      {
        name: 'Veterinary Emergency and Critical Care Society (VECCS)',
        url: 'https://veccs.org/',
      },
      { name: 'ASPCA Animal Poison Control Center', url: 'https://www.aspca.org/pet-care/animal-poison-control' },
      { name: 'AVMA — American Veterinary Medical Association', url: AVMA },
      { name: 'NAPHIA — North American Pet Health Insurance Association', url: NAPHIA },
    ],
  },
]

export const SpecialtiesBySlug: Record<string, Specialty> = Object.fromEntries(
  Specialties.map((s) => [s.slug, s]),
)
