/**
 * Programmatic SEO data: 8 veterinary diagnostic-test deep-dive entries for
 * /diagnostics/[slug].
 *
 * Owners search "[test name] for dogs cost" / "what does [test] show" with
 * HIGH commercial intent — diagnostic workups commonly run $300-2,000 and
 * are a primary trigger for pet-insurance affiliate conversion.
 *
 * We explain what the test measures, why a veterinarian orders it, how it is
 * performed, what preparation it requires, typical US cost ranges, what
 * results mean in lay terms, and what comes next — and then we always defer
 * to the veterinarian's interpretation, because results only mean something
 * in the context of the individual patient's clinical picture.
 *
 * Citations point only to institutional sources:
 *   - ACVIM  — American College of Veterinary Internal Medicine
 *   - AAHA   — American Animal Hospital Association
 *   - ACVR   — American College of Veterinary Radiology
 *   - ACVD   — American College of Veterinary Dermatology
 *   - Merck Veterinary Manual (consumer + clinical editions)
 *
 * NEVER guarantee a specific result, treatment, or cost in this file. Cost
 * ranges are labeled "typical US range" and vary by hospital, region, and
 * complexity. Result interpretation always defers to the prescribing
 * veterinarian. See QC-STANDARDS.md §1.
 */

export type DiagnosticCategory = 'blood' | 'urine' | 'imaging' | 'biopsy' | 'cardiac'
export type ResultUrgency = 'routine' | 'urgent' | 'emergency'

export interface DiagnosticCostBand {
  /** Plain-language label for what the cost band covers — e.g. "in-house, single test". */
  range: string
  /** Drivers that move cost up or down within the typical US range. */
  factors: string
}

export interface DiagnosticResultInterpretation {
  /** Short result label as a lay owner would see it on a report — e.g. "Low RBC (anemia)". */
  result: string
  /** Plain-language interpretation. NEVER prescriptive. */
  interpretation: string
  /** Urgency tier — what the veterinarian is likely to do next. */
  urgency: ResultUrgency
}

export interface DiagnosticFAQ {
  question: string
  answer: string
}

export interface DiagnosticCitation {
  name: string
  url: string
}

export interface Diagnostic {
  slug: string
  testName: string
  /** Acronyms / shorthand names a vet or owner might use interchangeably. */
  alsoKnownAs: string[]
  category: DiagnosticCategory
  /** Specialty most likely to interpret a complex result. */
  interpretingSpecialtySlug: string
  whatItMeasures: string
  whenVetsOrder: string[]
  howItsDone: string
  preparationNeeded: string[]
  duration: string
  typicalCost: DiagnosticCostBand[]
  whatResultsMean: DiagnosticResultInterpretation[]
  whatComesNext: string[]
  insuranceCoverageNotes: string
  faqs: DiagnosticFAQ[]
  citedSources: DiagnosticCitation[]
  /** Cross-links to /symptoms/* and /medications/* on vets.co. */
  relatedLinks: Array<{ label: string; href: string }>
}

// Shared institutional citation URLs.
const ACVIM = 'https://www.acvim.org/Animal-Owners'
const AAHA = 'https://www.aaha.org/your-pet/pet-owner-education/'
const ACVR = 'https://www.acvr.org/page/pet-owners'
const ACVD = 'https://www.acvd.org/page/PetOwners'
const MERCK = 'https://www.merckvetmanual.com/'

export const Diagnostics: Diagnostic[] = [
  // ─── BLOOD (4) ──────────────────────────────────────────────────────
  {
    slug: 'complete-blood-count-cbc',
    testName: 'Complete Blood Count (CBC)',
    alsoKnownAs: ['CBC', 'Hemogram', 'Complete blood count with differential'],
    category: 'blood',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'A complete blood count quantifies the three cell lines circulating in your pet\'s blood — red blood cells (which carry oxygen), white blood cells (which fight infection and regulate inflammation), and platelets (which form clots). The CBC reports both totals and the relative proportions of white-cell subtypes (neutrophils, lymphocytes, monocytes, eosinophils, basophils) along with red-cell indices that describe cell size and hemoglobin content. Together these numbers screen for anemia, infection, inflammation, immune-mediated disease, bone-marrow disorders, and clotting problems.',
    whenVetsOrder: [
      'Routine annual or senior wellness screening',
      'Pre-anesthetic workup before a dental or surgical procedure',
      'Investigation of vague signs — lethargy, weight loss, decreased appetite',
      'Suspected infection — fever, bite wounds, tick exposure',
      'Bleeding or unexplained bruising (platelet evaluation)',
      'Monitoring chronic medications (NSAIDs, chemotherapy, immunosuppressants)',
    ],
    howItsDone:
      'A veterinary technician or nurse draws a small blood sample, typically from the jugular vein at the side of the neck or a saphenous vein on the back leg. The sample goes into a purple-top EDTA tube and is run on an in-house hematology analyzer (results in minutes) or sent to a reference laboratory (results next morning). A trained technician or pathologist also reviews a stained blood smear under the microscope to confirm cell morphology — the part of the CBC a machine cannot do alone.',
    preparationNeeded: [
      'No fasting required for the CBC itself, though many vets pair it with a chemistry panel that benefits from a 6-12 hour fast',
      'Bring a list of every medication and supplement your pet is on — several can shift white-cell or platelet numbers',
      'A calm visit helps; epinephrine from stress can transiently shift white-cell distribution',
    ],
    duration:
      'Sample collection takes under five minutes. In-house results return in 10-20 minutes. Reference-lab results return in 12-24 hours.',
    typicalCost: [
      {
        range: '$50-100 in-house at a general practice (typical US range)',
        factors:
          'In-house analyzers, single test as part of a wellness visit, no pathologist review.',
      },
      {
        range: '$80-180 reference lab with pathologist review (typical US range)',
        factors:
          'Reference labs (IDEXX, Antech, Zoetis) add a clinical pathologist\'s slide review and written interpretation — worth the upgrade for anemias, leukocytosis, or any unexpected result.',
      },
      {
        range: '$150-300 bundled with chemistry, T4, urinalysis (typical US range)',
        factors:
          'Senior or pre-anesthetic packages often combine CBC + chemistry + UA + T4 at a discount versus individual pricing.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Low red blood cells (anemia)',
        interpretation:
          'Anemia means oxygen-carrying capacity is reduced. The CBC indices (MCV, MCHC) and reticulocyte count tell your veterinarian whether the bone marrow is regenerating (recent blood loss, hemolysis) or not (chronic kidney disease, bone-marrow suppression). Next steps depend on cause, not the number alone.',
        urgency: 'urgent',
      },
      {
        result: 'High white blood cells (leukocytosis)',
        interpretation:
          'Elevated white cells most often reflect inflammation, infection, or stress. The differential — which specific subtype is elevated — points the workup. Neutrophilia suggests bacterial infection or inflammation; lymphocytosis can be reactive or, in rare cases, lymphoma. Your vet interprets the pattern alongside the physical exam.',
        urgency: 'urgent',
      },
      {
        result: 'Low platelets (thrombocytopenia)',
        interpretation:
          'Low platelets can predispose to bleeding. Mild drops are often artifactual (platelet clumping in the sample) and a smear review confirms. True thrombocytopenia warrants evaluation for tick-borne disease, immune-mediated destruction, or bone-marrow disease — typically same-day to next-day workup.',
        urgency: 'urgent',
      },
      {
        result: 'Severe pancytopenia (low red cells, white cells, and platelets)',
        interpretation:
          'All three cell lines low together is a bone-marrow emergency until proven otherwise. This pattern requires immediate veterinary evaluation, often at a 24-hour hospital, and prompt referral to internal medicine or oncology.',
        urgency: 'emergency',
      },
      {
        result: 'All values within reference range',
        interpretation:
          'Normal values are reassuring but not absolute. A CBC is a snapshot; some diseases (early kidney disease, early endocrine disease) are not detectable on the CBC at all. Your vet interprets the CBC alongside history, exam, and other panels.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Recheck CBC in 2-4 weeks if a single value is borderline and your pet is asymptomatic',
      'Add a reticulocyte count if anemia is present, to classify regenerative vs. non-regenerative',
      'Add tick-borne disease testing (4Dx Snap, PCR panel) for low platelets in tick-endemic regions',
      'Refer to a board-certified internist or oncologist for any unexplained pancytopenia',
      'Pair CBC with a chemistry panel and urinalysis to widen the screening net',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse CBCs ordered to investigate a new symptom once your policy is active and waiting periods are cleared. Routine wellness CBCs are typically covered only under separate wellness add-ons. Pre-existing conditions are excluded, so enrolling before a chronic problem appears matters most.',
    faqs: [
      {
        question: 'Does my pet need to fast before a CBC?',
        answer:
          'The CBC itself does not require fasting, but most veterinarians pair it with a chemistry panel that benefits from a 6-12 hour fast. Ask the clinic when you book the appointment so the bloodwork is most interpretable.',
      },
      {
        question: 'Why did my vet send the CBC to an outside lab?',
        answer:
          'Reference laboratories include a clinical pathologist\'s review of a stained blood smear, which adds detail an in-house analyzer cannot provide. It is the higher-quality interpretation and is the right choice for any unexpected or abnormal result.',
      },
      {
        question: 'Are CBC reference ranges different for puppies and seniors?',
        answer:
          'Yes. Puppies and kittens have lower hematocrits than adults; senior pets may show subtle changes that reflect age-related disease rather than the test itself. Your veterinarian uses age-appropriate reference ranges and interprets results in the context of your pet\'s clinical picture.',
      },
      {
        question: 'My pet\'s CBC came back normal but they are still sick. Why?',
        answer:
          'A normal CBC rules out many — but not all — diseases. Early endocrine disease, structural disease, and many gastrointestinal conditions can present with a normal CBC. Your veterinarian will usually layer in chemistry, urinalysis, imaging, or specialist referral based on the exam and history.',
      },
      {
        question: 'Does pet insurance cover a CBC?',
        answer:
          'Most accident-and-illness plans cover diagnostic CBCs ordered to investigate a symptom or monitor an active illness, once the policy is active and waiting periods are cleared. Wellness CBCs typically require a separate wellness add-on. Pre-existing conditions are excluded — enroll before a chronic illness is diagnosed.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on internal medicine diagnostics', url: ACVIM },
      { name: 'AAHA — Diagnostic testing in the wellness exam', url: AAHA },
      { name: 'Merck Veterinary Manual — Hematology overview', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Tick-borne Diseases', href: '/health/tick-borne-diseases' },
    ],
  },

  {
    slug: 'chemistry-panel',
    testName: 'Chemistry Panel',
    alsoKnownAs: ['Serum chemistry', 'Biochemical profile', 'Chem panel', 'Comprehensive metabolic panel'],
    category: 'blood',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'A chemistry panel measures dissolved substances in the blood serum — enzymes, electrolytes, proteins, glucose, and waste products. The panel screens kidney function (BUN, creatinine, SDMA), liver function and bile flow (ALT, ALP, GGT, total bilirubin), pancreas (amylase, lipase, sometimes SPEC cPL/fPL), protein balance (total protein, albumin, globulin), electrolytes (sodium, potassium, chloride), glucose, and calcium and phosphorus. It is the workhorse panel for evaluating organ function in any pet that is sick, on chronic medication, or aged 7 and older.',
    whenVetsOrder: [
      'Routine senior wellness — annual once a pet is 7+',
      'Pre-anesthetic workup before any sedation or surgery',
      'Vague signs — vomiting, lethargy, weight loss, appetite changes',
      'Increased drinking and urination (polyuria / polydipsia workup)',
      'Monitoring NSAID, ACE inhibitor, diuretic, or chemotherapy drugs',
      'Suspected toxin exposure (xylitol, ibuprofen, antifreeze, mushroom)',
    ],
    howItsDone:
      'A veterinary technician draws blood — typically into a red- or green-top tube — and either runs it on an in-house chemistry analyzer (results in 10-20 minutes) or sends it to a reference lab (next morning). For a fasting glucose and accurate lipid panel, your pet should be fasted 8-12 hours; the rest of the panel is reasonably stable in a fed sample but is most interpretable fasted.',
    preparationNeeded: [
      'Fast 8-12 hours before the appointment (water is fine)',
      'Bring a list of every medication and supplement — many shift liver and kidney values',
      'Tell the vet if your pet has vomited, had diarrhea, or refused water recently — these affect electrolytes and concentration',
    ],
    duration:
      'Sample collection takes under five minutes. In-house results return in 10-20 minutes. Reference-lab results return in 12-24 hours.',
    typicalCost: [
      {
        range: '$80-150 in-house at a general practice (typical US range)',
        factors:
          'Standard 12- to 18-analyte panel run on an in-house analyzer during a single visit.',
      },
      {
        range: '$100-200 reference lab with extended panel (typical US range)',
        factors:
          'Reference labs add SDMA (early kidney marker), expanded enzymes, and a written interpretation. Standard for any abnormal screen.',
      },
      {
        range: '$200-400 senior or pre-anesthetic bundle (typical US range)',
        factors:
          'CBC + chemistry + T4 + urinalysis bundled at a discount versus individual pricing — the right starting point for any sick or senior pet.',
      },
    ],
    whatResultsMean: [
      {
        result: 'High BUN and creatinine with concentrated urine',
        interpretation:
          'May reflect dehydration ("pre-renal azotemia") rather than kidney disease itself. Rehydration often normalizes these values. Your vet pairs the chemistry with a urinalysis to tell dehydration apart from true kidney disease.',
        urgency: 'urgent',
      },
      {
        result: 'High BUN, creatinine, and SDMA with dilute urine',
        interpretation:
          'Suggests chronic kidney disease. SDMA detects loss of kidney function earlier than BUN and creatinine — by the time creatinine rises, roughly 75% of nephron function is gone. Staging, diet change, and follow-up labs typically come next.',
        urgency: 'urgent',
      },
      {
        result: 'High liver enzymes (ALT, ALP)',
        interpretation:
          'Elevations may reflect medication effects (steroids, phenobarbital, NSAIDs), Cushing\'s disease, primary liver disease, or hepatic lipidosis in cats. Magnitude and pattern matter. Your vet often re-tests in 2-4 weeks and may add bile acids or abdominal imaging.',
        urgency: 'urgent',
      },
      {
        result: 'High glucose',
        interpretation:
          'Stress hyperglycemia is common in cats and resolves on its own; persistent hyperglycemia with glucosuria points to diabetes mellitus. A fructosamine measures average blood sugar over the prior 2-3 weeks and differentiates stress from true diabetes.',
        urgency: 'urgent',
      },
      {
        result: 'High potassium',
        interpretation:
          'Hyperkalemia can be a medical emergency — it disrupts cardiac rhythm. Common causes: urinary obstruction (blocked male cat), Addison\'s disease, severe kidney failure, or a hemolyzed sample. Marked hyperkalemia warrants same-day evaluation.',
        urgency: 'emergency',
      },
      {
        result: 'All values within reference range',
        interpretation:
          'Reassuring, but not definitive. The chemistry panel screens organ function broadly; a specific endocrine condition (e.g. early Addison\'s, early Cushing\'s) requires targeted hormone testing.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Pair with a urinalysis to distinguish dehydration from kidney disease',
      'Add SDMA if not already included — earliest sensitive marker for chronic kidney disease',
      'Add T4 in any senior cat (hyperthyroidism) or any dog with suspected hypothyroidism',
      'Add bile acids if liver enzymes are persistently elevated',
      'Add ACTH stim or low-dose dex suppression if Cushing\'s is suspected',
      'Refer to a board-certified internist for any unexplained persistent abnormality',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse chemistry panels ordered to investigate a new symptom or monitor an active illness, once your policy is active and waiting periods have passed. Routine senior screening chemistries are usually covered only under separate wellness add-ons. Pre-existing conditions are excluded.',
    faqs: [
      {
        question: 'How long should my pet fast before a chemistry panel?',
        answer:
          '8-12 hours of food fasting is standard. Water is fine and should not be withheld. Fasting normalizes glucose and lipids and makes the panel most interpretable.',
      },
      {
        question: 'What does SDMA add to the standard chemistry panel?',
        answer:
          'SDMA (symmetric dimethylarginine) detects loss of kidney function earlier than BUN and creatinine — typically when 25-40% of nephron function is lost, versus 75% for creatinine. It is included by most reference labs and is the highest-yield addition for any pet 7 years or older.',
      },
      {
        question: 'Are mildly abnormal values always significant?',
        answer:
          'No. Single mildly abnormal values in an otherwise healthy pet are often retested in 2-4 weeks before any action is taken. Your veterinarian interprets the panel as a pattern, not as individual numbers.',
      },
      {
        question: 'Why did my vet repeat the chemistry panel?',
        answer:
          'Repeat testing distinguishes trends from one-time blips. A single elevated value can reflect transient illness, recent food intake, a hemolyzed sample, or laboratory variability. A trend over time is far more informative than a single number.',
      },
      {
        question: 'Does pet insurance cover a chemistry panel?',
        answer:
          'Most accident-and-illness plans cover diagnostic chemistry panels ordered to investigate a symptom or monitor an illness, once the policy is active and waiting periods are cleared. Wellness chemistries usually require a separate wellness add-on. Pre-existing conditions are excluded.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on internal medicine diagnostics', url: ACVIM },
      { name: 'AAHA — Senior care and diagnostic guidelines', url: AAHA },
      { name: 'Merck Veterinary Manual — Clinical biochemistry overview', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Cushing\'s Disease in Dogs', href: '/health/cushing-disease-dogs' },
    ],
  },

  {
    slug: 'urinalysis',
    testName: 'Urinalysis (UA)',
    alsoKnownAs: ['UA', 'Urine analysis', 'Routine urinalysis'],
    category: 'urine',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'A urinalysis evaluates the urine across three dimensions: physical (color, clarity, specific gravity / concentration), chemical (pH, protein, glucose, ketones, bilirubin, blood), and microscopic (cells, casts, crystals, bacteria). Combined with a chemistry panel, the urinalysis distinguishes kidney disease from dehydration, screens for diabetes and urinary tract infection, identifies stone-forming crystals, and detects protein loss through the kidneys.',
    whenVetsOrder: [
      'Suspected urinary tract infection — straining, frequent small urinations, blood in urine',
      'Increased drinking and urination workup (always paired with chemistry)',
      'Senior wellness screening',
      'Pre-anesthetic workup',
      'Monitoring kidney disease, diabetes mellitus, or Cushing\'s disease',
      'Investigation of suspected urinary stones or crystals',
    ],
    howItsDone:
      'Three collection methods, each with trade-offs. Free-catch into a clean container is easy but contaminated. Mid-stream catch reduces but does not eliminate contamination. Cystocentesis — a sterile needle through the body wall directly into the bladder under ultrasound guidance — is the gold standard for culture and infection workup because it bypasses external contamination. Cystocentesis is well-tolerated and safe in pets with adequate bladder volume.',
    preparationNeeded: [
      'For free-catch, bring a fresh sample collected within four hours and kept cool',
      'For cystocentesis, your vet may ask you to not let your pet urinate for 2-3 hours before the appointment',
      'Bring a list of every medication and supplement — several change urine pH or concentration',
    ],
    duration:
      'In-house urinalysis returns in 15-30 minutes. A urine culture (if added) returns in 2-5 days from a reference laboratory.',
    typicalCost: [
      {
        range: '$40-80 in-house dipstick + microscopic exam (typical US range)',
        factors:
          'Standard urinalysis with dipstick chemistries and a technician\'s microscopic sediment review. Adequate for screening.',
      },
      {
        range: '$80-150 reference lab with pathologist review (typical US range)',
        factors:
          'Adds a clinical pathologist\'s sediment interpretation. Worth the upgrade for any unexpected finding or persistent UTI.',
      },
      {
        range: '$150-300 with urine culture and sensitivity (typical US range)',
        factors:
          'Culture identifies the specific organism and the antibiotics it is sensitive to. Standard of care before treating any complicated or recurrent UTI.',
      },
    ],
    whatResultsMean: [
      {
        result: 'White blood cells, bacteria, and blood on sediment',
        interpretation:
          'Strongly suggestive of urinary tract infection. A culture and sensitivity guides which antibiotic will work. AAHA guidelines discourage empirical antibiotic use without a culture, especially for recurrent or complicated UTIs.',
        urgency: 'urgent',
      },
      {
        result: 'Dilute urine (low specific gravity) with normal chemistry',
        interpretation:
          'May reflect excessive water intake, recent diuretic use, or early kidney disease. Your vet often retests after a brief water restriction or pairs it with a chemistry panel including SDMA.',
        urgency: 'urgent',
      },
      {
        result: 'Glucose in the urine (glucosuria)',
        interpretation:
          'Almost always reflects diabetes mellitus once the blood glucose threshold is exceeded. Confirmed by a paired serum glucose and, ideally, a fructosamine. Same-day veterinary evaluation is appropriate.',
        urgency: 'urgent',
      },
      {
        result: 'Crystals in the sediment',
        interpretation:
          'Some crystals (struvite, calcium oxalate, urate, cystine) form stones; others are incidental. Your vet correlates crystal type, urine pH, and breed to decide whether dietary intervention or imaging is needed. Crystals alone are not a diagnosis of stones.',
        urgency: 'routine',
      },
      {
        result: 'Heavy proteinuria (UPC ratio over 0.5 in dogs, over 0.4 in cats)',
        interpretation:
          'Significant protein loss through the kidneys. Warrants a follow-up UPC ratio, blood pressure measurement, and often a referral to an internist for staging and treatment.',
        urgency: 'urgent',
      },
      {
        result: 'All values within reference range',
        interpretation:
          'Reassuring. A normal urinalysis paired with a normal chemistry panel makes most kidney and urinary disease unlikely at this snapshot in time.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Urine culture and sensitivity before treating any complicated UTI',
      'UPC ratio if dipstick shows protein — quantifies true protein loss',
      'Abdominal ultrasound or radiographs if crystals or stones suspected',
      'Blood pressure measurement and SDMA if dilute urine or proteinuria',
      'Refer to internal medicine for any persistent proteinuria or unexplained dilute urine',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans cover urinalysis ordered to investigate a symptom or monitor an active illness, once the policy is active and waiting periods are cleared. Routine wellness UAs typically require a separate wellness add-on. Pre-existing conditions are excluded.',
    faqs: [
      {
        question: 'Is cystocentesis safe for my pet?',
        answer:
          'Yes — cystocentesis is a routine, low-risk procedure. With a moderately full bladder and ultrasound guidance, it is well-tolerated and is the gold standard for any culture-confirmed UTI workup. Most pets do not require sedation.',
      },
      {
        question: 'Can I collect a urine sample at home?',
        answer:
          'A free-catch sample collected within four hours and kept cool is fine for screening, but it is contaminated and not appropriate for culture. For any suspected UTI, your vet will typically prefer a cystocentesis sample.',
      },
      {
        question: 'Do crystals in the urine mean my pet has stones?',
        answer:
          'No. Crystals can be incidental, especially if the urine sat at room temperature before analysis. Stones are confirmed by imaging (radiograph or ultrasound), not by sediment crystals alone. Your vet interprets crystals in context.',
      },
      {
        question: 'Why does my vet recommend a culture if the dipstick already showed bacteria?',
        answer:
          'A dipstick or sediment can suggest infection, but only a culture identifies the specific organism and the antibiotics it is sensitive to. AAHA guidelines discourage empirical antibiotic use without a culture, especially for recurrent or complicated UTIs — this protects against antibiotic resistance.',
      },
      {
        question: 'Does pet insurance cover urinalysis?',
        answer:
          'Most accident-and-illness plans cover urinalysis ordered to investigate a symptom or monitor an illness, once the policy is active and waiting periods are cleared. Pre-existing conditions — including a previously diagnosed UTI or kidney disease — are excluded.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on internal medicine diagnostics', url: ACVIM },
      { name: 'AAHA — Diagnosis and treatment of urinary tract infections guidelines', url: AAHA },
      { name: 'Merck Veterinary Manual — Urinalysis in small animals', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Urinary Tract Infection in Dogs', href: '/health/urinary-tract-infection' },
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
    ],
  },

  {
    slug: 'thyroid-test-t4',
    testName: 'Thyroid Test (Total T4)',
    alsoKnownAs: ['T4', 'Total thyroxine', 'TT4', 'Thyroid hormone test'],
    category: 'blood',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'Total T4 measures the circulating concentration of thyroxine, the primary thyroid hormone. In dogs, T4 is used to screen for hypothyroidism (low thyroid output) — a common middle-age-to-senior canine endocrine disease. In cats, T4 is used to screen for hyperthyroidism (excess thyroid output) — the most common feline endocrine disease over age 10. Because T4 can be lowered by non-thyroidal illness in dogs ("euthyroid sick syndrome"), a low T4 alone is not diagnostic of hypothyroidism — confirmatory testing (free T4 by equilibrium dialysis, TSH) is usually needed.',
    whenVetsOrder: [
      'Senior cat wellness (annual screen over age 8-10)',
      'Adult dog with weight gain, lethargy, recurrent skin or ear infections, or cold intolerance',
      'Senior cat with weight loss despite a good appetite, increased drinking, or vocalization',
      'Workup of unexplained alopecia (hair loss without itch)',
      'Pre-anesthetic in any senior pet',
      'Monitoring response to levothyroxine in a dog or methimazole in a cat',
    ],
    howItsDone:
      'A simple serum blood draw — no fasting required. The sample is run on an in-house immunoassay analyzer (results in 20-30 minutes) or a reference laboratory (next morning). Reference labs typically include both total T4 and free T4 by equilibrium dialysis (the more specific test for true hypothyroidism in dogs) and canine TSH.',
    preparationNeeded: [
      'No fasting required',
      'Tell your vet about every medication — sulfa antibiotics, phenobarbital, and steroids can lower T4',
      'Ideally schedule when your pet is otherwise well — non-thyroidal illness can suppress T4 readings in dogs',
    ],
    duration:
      'Sample collection takes under five minutes. In-house total T4 returns in 20-30 minutes. Reference-lab full thyroid panel returns in 12-24 hours.',
    typicalCost: [
      {
        range: '$40-90 in-house total T4 (typical US range)',
        factors:
          'In-house immunoassay for screening. Adequate for senior-cat hyperthyroidism screen.',
      },
      {
        range: '$80-180 reference lab full thyroid panel (typical US range)',
        factors:
          'Reference labs include total T4, free T4 by equilibrium dialysis, and canine TSH. Standard for any suspected canine hypothyroidism.',
      },
      {
        range: '$150-300 thyroid panel + senior bundle (typical US range)',
        factors:
          'Senior bundles add CBC, chemistry, and urinalysis at a discount versus individual pricing.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Low total T4 in a dog with classic signs (weight gain, lethargy, skin disease)',
        interpretation:
          'Suggestive of hypothyroidism but not yet diagnostic. Confirmatory testing — free T4 by equilibrium dialysis and TSH — separates true hypothyroidism from non-thyroidal illness. Treatment is daily oral levothyroxine; the diagnosis is for life.',
        urgency: 'routine',
      },
      {
        result: 'Low total T4 in a sick dog without classic hypothyroid signs',
        interpretation:
          'Often non-thyroidal illness ("euthyroid sick syndrome"), not true hypothyroidism. Treating the underlying illness usually normalizes the T4. Do not start lifelong thyroid supplementation on a low T4 alone.',
        urgency: 'routine',
      },
      {
        result: 'High total T4 in a senior cat with weight loss',
        interpretation:
          'Diagnostic of hyperthyroidism. Treatment options include daily methimazole, a prescription diet (Hill\'s y/d), radioactive iodine (the curative gold standard), or surgical thyroidectomy. Untreated hyperthyroidism stresses the heart and progresses chronic kidney disease.',
        urgency: 'urgent',
      },
      {
        result: 'High-normal total T4 in a senior cat with subtle signs',
        interpretation:
          'May reflect early hyperthyroidism. Free T4 and a repeat T4 in 4-6 weeks often clarify. Your vet may also pair with blood pressure and a chemistry panel because hyperthyroidism affects kidneys and heart.',
        urgency: 'routine',
      },
      {
        result: 'Normal total T4',
        interpretation:
          'Reassuring for screening, but does not rule out every thyroid condition. Some early canine hypothyroidism shows normal T4 with elevated TSH — which is why the full reference-lab panel matters.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Confirmatory free T4 by equilibrium dialysis and TSH for suspected canine hypothyroidism',
      'Repeat T4 in 4-6 weeks for borderline feline results, paired with blood pressure',
      'Chemistry, CBC, and urinalysis to evaluate concurrent kidney disease before treating hyperthyroidism',
      'Cardiology evaluation for any hyperthyroid cat with a heart murmur or arrhythmia',
      'Refer to internal medicine for difficult cases — concurrent disease or atypical results',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse thyroid testing ordered to investigate a new symptom or monitor an active endocrine disease, once the policy is active and waiting periods are cleared. Pre-existing endocrine conditions are excluded, so enrolling before a chronic diagnosis matters most. Lifelong thyroid medications are typically covered as prescribed medications under accident-and-illness plans.',
    faqs: [
      {
        question: 'Why is a low T4 not enough to diagnose hypothyroidism in dogs?',
        answer:
          'Many non-thyroidal illnesses — infection, inflammation, Cushing\'s disease, and several medications — lower total T4 without the dog being hypothyroid. Treating the underlying illness usually normalizes the T4. Confirmatory free T4 by equilibrium dialysis and TSH separate true hypothyroidism from euthyroid sick syndrome.',
      },
      {
        question: 'What is the best treatment for feline hyperthyroidism?',
        answer:
          'Radioactive iodine (I-131) is the curative gold standard and is offered at referral facilities. Daily methimazole, a prescription iodine-restricted diet (Hill\'s y/d), and surgical thyroidectomy are alternatives — each with trade-offs your vet will walk you through. Choice depends on age, concurrent kidney disease, and owner logistics.',
      },
      {
        question: 'How often should I screen my senior cat for hyperthyroidism?',
        answer:
          'Annual T4 screening starting at 8-10 years is standard. Earlier and more frequent screening is reasonable for cats with subtle weight loss, increased appetite, or vocalization.',
      },
      {
        question: 'Does treating hyperthyroidism worsen kidney disease?',
        answer:
          'Treating hyperthyroidism can unmask underlying chronic kidney disease that the elevated thyroid hormone was masking by increasing kidney blood flow. Your veterinarian usually treats hyperthyroidism cautiously and monitors kidney function during the first weeks of treatment.',
      },
      {
        question: 'Does pet insurance cover thyroid testing and lifelong medications?',
        answer:
          'Most accident-and-illness plans cover diagnostic thyroid testing and lifelong prescribed thyroid medications once the policy is active and waiting periods have passed. Pre-existing endocrine conditions are excluded, which is why enrolling before a chronic diagnosis matters most.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on internal medicine and endocrine disease', url: ACVIM },
      { name: 'AAHA — Senior care guidelines', url: AAHA },
      { name: 'Merck Veterinary Manual — Thyroid disease in small animals', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
    ],
  },

  // ─── IMAGING (3) ────────────────────────────────────────────────────
  {
    slug: 'x-ray-radiograph',
    testName: 'X-ray (Radiograph)',
    alsoKnownAs: ['Radiograph', 'X-ray', 'Plain film', 'Rads'],
    category: 'imaging',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'Radiographs use a brief, low-dose pulse of ionizing radiation to create a two-dimensional image of the inside of your pet. They are the first-line imaging study for evaluating the skeleton (fractures, arthritis, hip dysplasia, bone tumors), the chest (heart silhouette, pulmonary parenchyma, pleural space), the abdomen (organ size, foreign body, obstruction, stones), and dental disease (a separate dental radiograph series). Radiographs are fast, widely available, and inexpensive — but they show shape and density, not real-time motion or soft-tissue detail at the level ultrasound or CT provides.',
    whenVetsOrder: [
      'Suspected fracture, lameness, or orthopedic disease',
      'Suspected foreign-body ingestion or GI obstruction (acute vomiting, abdominal pain)',
      'Cough, increased respiratory effort, or suspected heart disease',
      'Suspected urinary or kidney stones',
      'Pre-anesthetic chest screen in senior pets',
      'Cancer staging — chest radiographs to screen for pulmonary metastasis',
    ],
    howItsDone:
      'A veterinary technician positions your pet on the imaging table (usually awake, sometimes briefly sedated for orthopedic or cardiac films that require precise positioning). The X-ray tube above the patient delivers a brief pulse — measured in milliseconds — and a digital detector below captures the image. Most clinics take two orthogonal views (lateral and ventrodorsal) so the anatomy can be assessed in three dimensions. Modern digital radiography produces images within seconds for the veterinarian to review.',
    preparationNeeded: [
      'No fasting unless sedation is planned (fast 8-12 hours if sedation is likely)',
      'For abdominal radiographs, the bladder and colon should ideally be empty — a recent walk helps',
      'Bring a current medication list, including supplements',
      'Owners are typically asked to step out of the imaging suite for radiation safety',
    ],
    duration:
      'Image acquisition takes 5-10 minutes for a typical two-view study. Full radiographic exam (including positioning and review) typically completes in 20-40 minutes.',
    typicalCost: [
      {
        range: '$150-300 in-house two-view study (typical US range)',
        factors:
          'Two-view chest or abdomen, awake, interpreted by the primary veterinarian.',
      },
      {
        range: '$300-600 multi-region study with sedation (typical US range)',
        factors:
          'Sedation, multiple anatomic regions, or orthopedic films requiring precise positioning.',
      },
      {
        range: '$100-200 telerad consult fee on top of above (typical US range)',
        factors:
          'Many clinics submit images to a board-certified radiologist (ACVR) for a written report — the standard of care for any complex or referral-bound case.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Obvious foreign body or obstruction pattern',
        interpretation:
          'Linear gas patterns, "string of pearls," or a radiopaque object in the GI tract often warrants same-day surgical consultation. Some foreign bodies are radiolucent (cloth, plastic) and require contrast study or ultrasound to confirm.',
        urgency: 'emergency',
      },
      {
        result: 'Enlarged cardiac silhouette (high vertebral heart score)',
        interpretation:
          'Suggests cardiomegaly. Pattern matters — left atrial enlargement raises concern for mitral valve disease (dogs) or hypertrophic cardiomyopathy (cats). An echocardiogram is the next step for confirmation and staging.',
        urgency: 'urgent',
      },
      {
        result: 'Pulmonary nodules or masses',
        interpretation:
          'May reflect primary lung tumor, metastatic disease, fungal disease, or granuloma. Pattern, number, and location guide the next step — sometimes immediate referral for CT, sometimes a wait-and-recheck approach. Single small nodules are not always cancer.',
        urgency: 'urgent',
      },
      {
        result: 'Osteoarthritis or hip dysplasia',
        interpretation:
          'Common findings in senior dogs and predisposed breeds. Severity guides pain management strategy. Conformation grading (PennHIP, OFA) is for breeding decisions and is performed under specific sedation.',
        urgency: 'routine',
      },
      {
        result: 'Suspected bone tumor (lytic lesion)',
        interpretation:
          'Aggressive bone lesions warrant prompt referral for biopsy or CT — osteosarcoma is the most common primary bone tumor in dogs and is time-sensitive.',
        urgency: 'urgent',
      },
      {
        result: 'Unremarkable study',
        interpretation:
          'Radiographs cannot detect every lesion — soft-tissue masses, early kidney disease, and many GI conditions are radiograph-silent. A normal study is reassuring but does not exclude every possibility.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Telerad consult with a board-certified radiologist for any complex finding',
      'Abdominal ultrasound for soft-tissue detail the radiograph cannot show',
      'Echocardiogram for any cardiomegaly or suspected structural heart disease',
      'CT scan for chest or musculoskeletal lesions requiring three-dimensional detail',
      'Biopsy or fine-needle aspirate for any mass identified on radiograph',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse diagnostic radiographs ordered to investigate a new symptom or stage a known illness, once the policy is active and waiting periods are cleared. Pre-existing conditions are excluded, and routine screening films may require a wellness add-on. Imaging is one of the higher-cost diagnostic categories — radiograph + ultrasound + telerad consult can run $500-1,500 in total.',
    faqs: [
      {
        question: 'Are X-rays safe for my pet?',
        answer:
          'Yes. A two-view diagnostic radiograph delivers a very small radiation dose — far less than the threshold for any biologic harm. Veterinary staff use lead shielding and follow ALARA (as low as reasonably achievable) principles, and owners are typically asked to step out of the imaging suite as a precaution.',
      },
      {
        question: 'Why does my pet need sedation for the X-ray?',
        answer:
          'Sedation is used when precise positioning is required (orthopedic, cardiac, or hip-dysplasia films) or when stress makes a quality study difficult. Sedation is short-acting and reversible. Many radiographs are completed without sedation.',
      },
      {
        question: 'What is a telerad consult and is it worth it?',
        answer:
          'A telerad consult sends your pet\'s images to a board-certified veterinary radiologist (ACVR diplomate) for a written report. For complex chest disease, oncologic staging, or any orthopedic case headed to referral, the consult is the standard of care. Most clinics offer it as an add-on for a flat fee.',
      },
      {
        question: 'Can radiographs detect cancer?',
        answer:
          'Radiographs detect masses by changes in shape, density, or anatomy. They are excellent at identifying lung metastasis and obvious bone tumors but cannot detect every cancer — many soft-tissue tumors require ultrasound, CT, or biopsy to confirm.',
      },
      {
        question: 'Does pet insurance cover X-rays?',
        answer:
          'Most accident-and-illness plans cover diagnostic radiographs ordered to investigate a symptom or stage a known illness, once the policy is active and waiting periods are cleared. Imaging is reimbursed at the policy reimbursement rate after the deductible. Pre-existing conditions are excluded.',
      },
    ],
    citedSources: [
      { name: 'ACVR — Pet owner resources on veterinary radiology', url: ACVR },
      { name: 'AAHA — Diagnostic imaging in general practice', url: AAHA },
      { name: 'Merck Veterinary Manual — Diagnostic imaging overview', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Veterinary Cardiology Specialists', href: '/specialists/veterinary-cardiology' },
      { label: 'Pain Management in Dogs', href: '/health/pain-management-dogs' },
    ],
  },

  {
    slug: 'ultrasound-abdominal',
    testName: 'Abdominal Ultrasound',
    alsoKnownAs: ['Abdominal US', 'Belly ultrasound', 'Sonography'],
    category: 'imaging',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'Abdominal ultrasound uses high-frequency sound waves to produce real-time images of the soft-tissue organs inside the belly — liver, gallbladder, spleen, kidneys, adrenals, pancreas, GI tract, bladder, and lymph nodes. It evaluates organ size, internal architecture, blood flow (with Doppler), and identifies masses, cysts, fluid, foreign bodies, and stones. Ultrasound complements radiographs: radiographs show shape and density, ultrasound shows soft-tissue structure and motion. It is the next-step imaging study for most internal-medicine workups.',
    whenVetsOrder: [
      'Persistent or unexplained vomiting',
      'Elevated liver enzymes that do not resolve on rechecks',
      'Suspected abdominal mass on physical exam or radiograph',
      'Chronic kidney disease staging or unexplained proteinuria',
      'Suspected pancreatitis',
      'Cancer staging — abdominal metastasis screening',
      'Free abdominal fluid identified on radiographs',
      'Senior screening in predisposed breeds (Golden Retriever, German Shepherd, Labrador 7+ for splenic and hepatic masses)',
    ],
    howItsDone:
      'A veterinary technician shaves a strip of belly fur (sound waves do not pass through air, and fur traps air against the skin), applies acoustic coupling gel, and the veterinarian moves a hand-held transducer across the abdomen while watching real-time images on a screen. Most pets tolerate ultrasound awake or with mild sedation; restless or painful pets may require deeper sedation. A complete abdominal ultrasound systematically evaluates each organ and typically captures 30-80 still images.',
    preparationNeeded: [
      'Fast 8-12 hours before the appointment (gas in the stomach degrades the image)',
      'Avoid letting your pet urinate just before — a moderately full bladder is the acoustic window for evaluating adjacent structures',
      'Plan for shaving of a strip of belly fur (it grows back in 4-8 weeks)',
      'Bring a list of every medication and supplement',
    ],
    duration:
      'A complete abdominal ultrasound typically takes 30-60 minutes including positioning, scanning, and image capture. Targeted (single-organ) studies are shorter.',
    typicalCost: [
      {
        range: '$300-500 in-house screening study (typical US range)',
        factors:
          'Performed by the primary veterinarian or a sonographer at a general practice. Adequate for many screening indications.',
      },
      {
        range: '$500-900 complete study by a board-certified internist or radiologist (typical US range)',
        factors:
          'Performed by an ACVIM or ACVR diplomate at a referral hospital. Higher-quality images, formal written report, standard for complex or referral-bound cases.',
      },
      {
        range: '$700-1,500 ultrasound + fine-needle aspirate of identified lesion (typical US range)',
        factors:
          'Many ultrasound-identified lesions can be sampled in the same visit under ultrasound guidance — fine-needle aspirate of liver, spleen, or lymph node adds 1-3 sample sites and a cytology fee.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Splenic mass or liver mass',
        interpretation:
          'Splenic and hepatic masses are common findings in senior large-breed dogs. Distinguishing benign (hematoma, nodular hyperplasia) from malignant (hemangiosarcoma, lymphoma) requires cytology or biopsy. A free-fluid finding around a splenic mass raises concern for active bleeding and warrants emergency evaluation.',
        urgency: 'urgent',
      },
      {
        result: 'Thickened pancreas with peripancreatic fluid',
        interpretation:
          'Highly suggestive of pancreatitis, especially in the right clinical context (vomiting, abdominal pain, elevated SPEC cPL or fPL). Treatment is supportive — fluids, anti-nausea medications, pain control — and most patients improve over days.',
        urgency: 'urgent',
      },
      {
        result: 'Bladder stones or kidney stones',
        interpretation:
          'Stones identified by ultrasound are characterized by size, location, and number. Some require surgical removal; some can be dissolved with a prescription diet depending on composition. Crystal type on urinalysis helps predict stone composition.',
        urgency: 'routine',
      },
      {
        result: 'Free abdominal fluid',
        interpretation:
          'Causes range from cardiac disease (right-sided heart failure) to liver disease, neoplasia with bleeding, or peritonitis. Ultrasound-guided abdominocentesis samples the fluid for analysis and is often performed the same visit. Significant abdominal fluid warrants prompt workup.',
        urgency: 'urgent',
      },
      {
        result: 'Bilaterally enlarged adrenals',
        interpretation:
          'Suggestive of Cushing\'s disease (hyperadrenocorticism). Confirmation by ACTH stim or low-dose dexamethasone suppression. Asymmetric enlargement raises concern for an adrenal tumor.',
        urgency: 'routine',
      },
      {
        result: 'No abnormalities identified',
        interpretation:
          'Reassuring. A normal abdominal ultrasound makes most structural abdominal disease unlikely at this snapshot. Functional disease (early renal disease, endocrine disease, motility disorders) may still be present and is detected by other tests.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Fine-needle aspirate or biopsy of any identified mass — often same visit under ultrasound guidance',
      'Abdominocentesis and fluid analysis for any free abdominal fluid',
      'Repeat ultrasound in 4-8 weeks to follow lesions of uncertain significance',
      'CT scan for surgical planning of complex masses',
      'Refer to internal medicine, oncology, or surgery based on findings',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans cover abdominal ultrasound ordered to investigate a new symptom or stage a known illness, once the policy is active and waiting periods are cleared. Pre-existing conditions are excluded. Diagnostic workups combining ultrasound with cytology and bloodwork commonly run $800-2,000 in total and are reimbursed at the policy reimbursement rate after the deductible.',
    faqs: [
      {
        question: 'Does my pet need sedation for an abdominal ultrasound?',
        answer:
          'Most pets tolerate ultrasound awake or with mild oral sedation. Deeper sedation is reserved for restless, painful, or particularly anxious patients. Discuss sedation preferences with your veterinarian before the appointment.',
      },
      {
        question: 'How is ultrasound different from an X-ray?',
        answer:
          'Radiographs are fast, inexpensive, and excellent for evaluating bone and gas-filled structures. Ultrasound is slower, more expensive, and excellent for evaluating soft-tissue organ structure and blood flow. They complement each other — most internal-medicine workups use both.',
      },
      {
        question: 'Can ultrasound diagnose cancer?',
        answer:
          'Ultrasound identifies and characterizes masses but cannot determine cell type — that requires cytology (fine-needle aspirate) or biopsy. Many ultrasound-guided aspirates are performed in the same visit, which is one of the great advantages of the modality.',
      },
      {
        question: 'Why does my pet have to fast before an ultrasound?',
        answer:
          'Gas inside the GI tract scatters sound waves and degrades image quality. A 8-12 hour food fast lets the stomach and bowel empty and dramatically improves imaging of the liver, pancreas, and right kidney.',
      },
      {
        question: 'Does pet insurance cover abdominal ultrasound?',
        answer:
          'Most accident-and-illness plans cover diagnostic ultrasound ordered to investigate a symptom or stage a known illness, once the policy is active and waiting periods are cleared. Pre-existing conditions are excluded. Combined workups (ultrasound + cytology + bloodwork) commonly run $800-2,000 in total.',
      },
    ],
    citedSources: [
      { name: 'ACVR — Pet owner resources on veterinary radiology and ultrasound', url: ACVR },
      { name: 'ACVIM — Animal owner resources on internal medicine diagnostics', url: ACVIM },
      { name: 'Merck Veterinary Manual — Diagnostic ultrasound overview', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Veterinary Internal Medicine Specialists', href: '/specialists/veterinary-internal-medicine' },
      { label: 'Cushing\'s Disease in Dogs', href: '/health/cushing-disease-dogs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
  },

  {
    slug: 'echocardiogram',
    testName: 'Echocardiogram',
    alsoKnownAs: ['Echo', 'Cardiac ultrasound', 'Heart ultrasound', 'Doppler echocardiography'],
    category: 'cardiac',
    interpretingSpecialtySlug: 'veterinary-cardiology',
    whatItMeasures:
      'An echocardiogram is an ultrasound of the heart that evaluates chamber sizes, wall thickness, valve structure and motion, blood flow patterns (with color and spectral Doppler), and overall cardiac function (systolic and diastolic). It is the definitive test for diagnosing and staging structural heart disease — mitral valve disease in dogs, hypertrophic cardiomyopathy in cats, dilated cardiomyopathy in large-breed dogs, and congenital heart defects in young pets. The echocardiogram tells your veterinarian not only whether heart disease is present, but at what stage and which medications are likely to help.',
    whenVetsOrder: [
      'Heart murmur detected on exam — any new murmur, any murmur in a young pet, or a louder murmur in a known patient',
      'Suspected congestive heart failure (cough, increased respiratory effort, exercise intolerance)',
      'Cardiomegaly identified on chest radiograph',
      'Pre-anesthetic evaluation for older patients with murmurs or arrhythmias',
      'Cats with suspected hypertrophic cardiomyopathy — especially before sedation or surgery',
      'Staging of known heart disease and titrating heart medications',
      'Screening of predisposed breeds (Cavalier King Charles Spaniel, Doberman, Boxer, Maine Coon, Ragdoll)',
    ],
    howItsDone:
      'A board-certified cardiologist (ACVIM cardiology) or trained internist shaves a small window on the right and left sides of the chest, applies acoustic coupling gel, and uses a specialized cardiac transducer to acquire standardized views. Most cats and many dogs tolerate the study awake on a soft, gently restrained mat; deeper sedation is generally avoided because it can change cardiac performance. A simultaneous ECG tracing helps time the images to the cardiac cycle. The full study takes 30-60 minutes and produces a written report.',
    preparationNeeded: [
      'No fasting required (sedation usually avoided in cardiology cases)',
      'Bring a list of every medication and supplement — many cardiac medications affect what is seen on the study',
      'Bring prior radiographs and bloodwork if the study is at a referral hospital',
      'Plan for a shaved patch on both sides of the chest (regrows in 4-8 weeks)',
    ],
    duration:
      'A complete echocardiogram typically takes 30-60 minutes, including positioning, scanning, image capture, and review.',
    typicalCost: [
      {
        range: '$400-700 in-house cardiology screen (typical US range)',
        factors:
          'Performed by a general practitioner or internist with cardiac training. Adequate for staging known mitral valve disease.',
      },
      {
        range: '$500-900 board-certified cardiologist with full Doppler study (typical US range)',
        factors:
          'Performed by an ACVIM cardiology diplomate at a referral hospital. Higher diagnostic yield for complex disease, congenital defects, or treatment planning.',
      },
      {
        range: '$700-1,500 echo + chest radiographs + NT-proBNP + ECG (typical US range)',
        factors:
          'Complete cardiac workup bundled at a referral visit. Standard for any new diagnosis of congestive heart failure or any decision about advanced therapy.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Mitral valve regurgitation with left atrial enlargement (ACVIM Stage B2 or higher)',
        interpretation:
          'Common in senior small-breed dogs, especially Cavalier King Charles Spaniels. ACVIM consensus guidelines recommend starting pimobendan in dogs at Stage B2 (preclinical heart enlargement) — this prolongs the time to congestive heart failure by months. Recheck echo every 6-12 months.',
        urgency: 'urgent',
      },
      {
        result: 'Hypertrophic cardiomyopathy (HCM) in a cat',
        interpretation:
          'The most common feline heart disease. Some cats have subclinical disease and remain stable for years; others progress to congestive heart failure or arterial thromboembolism ("saddle thrombus"). Treatment depends on stage; sedation and surgery require extra precaution.',
        urgency: 'urgent',
      },
      {
        result: 'Dilated cardiomyopathy (DCM) in a large-breed dog',
        interpretation:
          'Dobermans, Boxers, and Great Danes are predisposed; recent reports of diet-associated DCM in Goldens and other breeds. Treatment is multi-drug and progresses to congestive heart failure. Holter monitoring for arrhythmias is often added.',
        urgency: 'urgent',
      },
      {
        result: 'Congenital heart defect (patent ductus arteriosus, pulmonic stenosis, etc.)',
        interpretation:
          'Identified in young pets, usually as a workup of a heart murmur. Many congenital defects are treatable — PDA closure has near-100% success rates. Refer to cardiology promptly while the patient is young.',
        urgency: 'urgent',
      },
      {
        result: 'Pericardial effusion',
        interpretation:
          'Fluid around the heart can cause cardiac tamponade — life-threatening. Often associated with heart-base tumors (hemangiosarcoma, chemodectoma) in dogs. Emergency pericardiocentesis is often performed the same visit.',
        urgency: 'emergency',
      },
      {
        result: 'Normal echocardiogram',
        interpretation:
          'Rules out structural heart disease at this snapshot. Some heart murmurs are "innocent" (no underlying disease) or reflect non-cardiac causes (anemia, fever). Your cardiologist or internist interprets a normal echo in clinical context.',
        urgency: 'routine',
      },
    ],
    whatComesNext: [
      'Start pimobendan at ACVIM Stage B2 mitral valve disease per current consensus',
      'NT-proBNP blood test as a screening adjunct in cats and dogs',
      'Holter (24-hour ECG) for any suspected arrhythmia, especially in Dobermans and Boxers',
      'Genetic testing for HCM in predisposed cat breeds (Maine Coon, Ragdoll)',
      'Refer to a board-certified cardiologist for any new congenital defect, severe cardiomyopathy, or pericardial effusion',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse echocardiograms ordered to investigate a heart murmur or stage known heart disease, once the policy is active and waiting periods are cleared. Pre-existing heart conditions — including a previously documented murmur — are excluded, which is why enrolling young (before any murmur is identified) matters most for predisposed breeds.',
    faqs: [
      {
        question: 'What is the difference between an echocardiogram and an EKG?',
        answer:
          'An EKG (electrocardiogram) records the heart\'s electrical activity and is used to diagnose arrhythmias. An echocardiogram is an ultrasound that images cardiac structure and function. They are complementary — many cardiac workups use both.',
      },
      {
        question: 'Does my pet need sedation for an echocardiogram?',
        answer:
          'Most pets tolerate the study awake. Sedation is generally avoided in cardiology because it can alter cardiac performance and confuse the interpretation. A trained sonographer or cardiologist positions the patient gently with a soft mat.',
      },
      {
        question: 'Do I need a referral to a cardiologist?',
        answer:
          'Many general practitioners and internists perform echocardiograms competently for staging known disease. A board-certified cardiologist (ACVIM cardiology diplomate) is the standard for any new congenital defect, severe cardiomyopathy, or treatment planning that involves multiple medications. Your veterinarian will refer when appropriate.',
      },
      {
        question: 'How often should heart disease be rechecked?',
        answer:
          'Recheck intervals depend on stage. Preclinical disease (ACVIM Stage B) is typically rechecked every 6-12 months. Active congestive heart failure (Stage C) is rechecked every 1-3 months while medications are being titrated. Your cardiologist sets the schedule.',
      },
      {
        question: 'Does pet insurance cover an echocardiogram?',
        answer:
          'Most accident-and-illness plans cover diagnostic echocardiograms ordered to investigate a heart murmur or stage known heart disease, once the policy is active and waiting periods are cleared. Pre-existing heart conditions are excluded — enrolling before any murmur is identified matters most for predisposed breeds.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on cardiology', url: ACVIM },
      { name: 'ACVR — Pet owner resources on diagnostic imaging', url: ACVR },
      { name: 'Merck Veterinary Manual — Cardiovascular system overview', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Veterinary Cardiology Specialists', href: '/specialists/veterinary-cardiology' },
      { label: 'Heart Disease Symptoms in Dogs', href: '/health/emergency-signs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
  },

  // ─── BIOPSY (1) ─────────────────────────────────────────────────────
  {
    slug: 'biopsy-cytology',
    testName: 'Biopsy and Cytology',
    alsoKnownAs: ['Fine-needle aspirate', 'FNA', 'Tissue biopsy', 'Incisional biopsy', 'Excisional biopsy'],
    category: 'biopsy',
    interpretingSpecialtySlug: 'veterinary-internal-medicine',
    whatItMeasures:
      'Cytology examines individual cells from a fine-needle aspirate (FNA) — a small-gauge needle inserted into a mass or organ to harvest cells without removing tissue. Biopsy harvests a piece of tissue (incisional) or the whole lesion (excisional) for histopathology, which preserves the cells\' relationships to each other and is the gold standard for cancer diagnosis and grading. Cytology is fast and minimally invasive; biopsy provides more diagnostic information, including grade, margins, and prognosis. The two are complementary — most workups start with cytology and proceed to biopsy when needed.',
    whenVetsOrder: [
      'New skin or subcutaneous mass — any lump merits cytology before observation',
      'Enlarged lymph node — to differentiate reactive from neoplastic',
      'Mass on internal organ identified on ultrasound or CT',
      'Bone lesion suspicious for tumor on radiograph',
      'Skin disease that does not respond to empirical treatment',
      'Unresolved ear or eye disease where infection alone does not explain the picture',
      'Pre-surgical confirmation of mass type and grade — guides surgical margins',
    ],
    howItsDone:
      'Fine-needle aspirate is performed with a small-gauge needle attached to a syringe, often without sedation for accessible masses. Cells are deposited on glass slides, stained, and examined under the microscope — either in-house (results in 30-60 minutes for a clear diagnosis) or by a clinical pathologist (results in 12-48 hours). Tissue biopsy is performed under sedation or anesthesia using a punch, wedge, or surgical excision. Biopsy tissue goes to a veterinary anatomic pathologist for histopathology — results return in 5-10 business days with grade, margins, and prognosis.',
    preparationNeeded: [
      'For superficial mass FNA, typically no fasting or sedation',
      'For ultrasound-guided FNA of internal masses, fast 8-12 hours',
      'For incisional or excisional biopsy, fast 8-12 hours (anesthesia)',
      'Discontinue any anti-platelet or anti-coagulant medication only on veterinary direction',
      'Bring a complete medication list and recent bloodwork',
    ],
    duration:
      'Superficial FNA takes 5-15 minutes. Ultrasound-guided FNA adds the ultrasound exam (30-60 minutes). Surgical biopsy takes 30-90 minutes plus anesthesia recovery. Cytology results return in 30 minutes to 48 hours; histopathology results in 5-10 business days.',
    typicalCost: [
      {
        range: '$60-180 in-house cytology of superficial mass (typical US range)',
        factors:
          'Single-site fine-needle aspirate with in-house slide review. Adequate for many obvious lipomas or reactive lymph nodes.',
      },
      {
        range: '$150-350 reference-lab cytology with pathologist review (typical US range)',
        factors:
          'Adds a clinical pathologist\'s formal interpretation — standard for any non-obvious diagnosis or suspected cancer.',
      },
      {
        range: '$400-900 incisional or excisional biopsy with histopathology (typical US range)',
        factors:
          'Surgical biopsy under anesthesia plus histopathology fee. Cost depends on lesion location and complexity.',
      },
      {
        range: '$800-2,000 advanced workup (immunohistochemistry, PARR, flow cytometry) (typical US range)',
        factors:
          'Lymphoma grading and immunophenotyping; advanced markers when histopathology alone is not definitive. Standard for treatment planning in many oncology cases.',
      },
    ],
    whatResultsMean: [
      {
        result: 'Lipoma (benign fatty tumor)',
        interpretation:
          'A common, benign mass in middle-aged and older dogs. Often observed without removal unless they grow large or interfere with movement. Cytology is highly accurate for lipoma diagnosis.',
        urgency: 'routine',
      },
      {
        result: 'Mast cell tumor',
        interpretation:
          'Common skin tumor in dogs with variable behavior — some are easily cured by complete surgical excision, some are aggressive. Grade (determined on biopsy histopathology) drives treatment. Prompt referral to surgical oncology is the standard.',
        urgency: 'urgent',
      },
      {
        result: 'Lymphoma',
        interpretation:
          'The most common cancer affecting lymph nodes in dogs and cats. Cytology suggests the diagnosis; flow cytometry, PARR, and immunohistochemistry determine the subtype (B-cell, T-cell, etc.) that drives prognosis and chemotherapy choice.',
        urgency: 'urgent',
      },
      {
        result: 'Hemangiosarcoma',
        interpretation:
          'An aggressive cancer of blood-vessel lining, often arising in the spleen, heart, or skin. Splenic hemangiosarcoma frequently presents with sudden collapse and abdominal bleeding. Treatment combines surgery and chemotherapy; prognosis is guarded.',
        urgency: 'emergency',
      },
      {
        result: 'Reactive (inflammatory) cells without atypia',
        interpretation:
          'Suggests infection, allergy, or recent trauma rather than cancer. Treatment targets the underlying cause, and a recheck cytology in 4-6 weeks confirms resolution.',
        urgency: 'routine',
      },
      {
        result: 'Non-diagnostic sample',
        interpretation:
          'Sometimes the needle does not capture enough representative cells (especially for fibrous or cystic lesions). A repeat aspirate, an ultrasound-guided aspirate, or a tissue biopsy is the next step. A non-diagnostic FNA does not mean the mass is benign.',
        urgency: 'urgent',
      },
    ],
    whatComesNext: [
      'Excisional biopsy with appropriate margins for any suspected malignancy',
      'Staging workup — chest radiographs, abdominal ultrasound, regional lymph node aspiration — for any cancer diagnosis',
      'Refer to a board-certified veterinary oncologist for treatment planning',
      'Refer to a board-certified veterinary dermatologist for unresolved skin or ear disease',
      'Repeat cytology of a non-diagnostic sample, often under ultrasound guidance',
    ],
    insuranceCoverageNotes:
      'Most accident-and-illness pet insurance plans reimburse cytology, biopsy, and histopathology when ordered to investigate a new mass or stage a known illness, once the policy is active and waiting periods are cleared. Pre-existing conditions are excluded, which is why enrolling before a mass is identified matters most. Oncology workups (cytology + staging + advanced markers) commonly run $1,000-3,000 in total.',
    faqs: [
      {
        question: 'Why do I need a biopsy if cytology already showed cancer?',
        answer:
          'Cytology often identifies the cell type but cannot grade the tumor or confirm complete surgical margins. Histopathology on a biopsy is the gold standard for grading and prognosis and is typically required before deciding on chemotherapy or radiation.',
      },
      {
        question: 'Is fine-needle aspirate painful?',
        answer:
          'Most pets tolerate superficial FNA without sedation — a small-gauge needle is similar in sensation to a blood draw. Ultrasound-guided FNA of internal masses is usually well-tolerated with light sedation. Surgical biopsy requires anesthesia.',
      },
      {
        question: 'Should every lump be aspirated?',
        answer:
          'Yes. The "watch and wait" approach is risky because some malignant masses look benign on inspection. AAHA and oncology guidelines recommend aspirating any new skin or subcutaneous mass at the first visit. Cytology is fast, low-cost, and low-risk.',
      },
      {
        question: 'What is the difference between cytology and histopathology?',
        answer:
          'Cytology examines individual cells from a fine-needle aspirate — fast, inexpensive, and minimally invasive. Histopathology examines intact tissue from a biopsy and preserves architecture, which is the gold standard for grading and margins. Most workups use both.',
      },
      {
        question: 'Does pet insurance cover biopsy and cytology?',
        answer:
          'Most accident-and-illness plans cover cytology and biopsy ordered to investigate a new mass or stage a known illness, once the policy is active and waiting periods are cleared. Pre-existing conditions are excluded. Combined oncology workups commonly run $1,000-3,000 in total.',
      },
    ],
    citedSources: [
      { name: 'ACVIM — Animal owner resources on oncology and internal medicine', url: ACVIM },
      { name: 'AAHA — Oncology guidelines', url: AAHA },
      { name: 'ACVD — Pet owner resources on dermatology', url: ACVD },
      { name: 'Merck Veterinary Manual — Cytology and biopsy in small animals', url: MERCK },
    ],
    relatedLinks: [
      { label: 'Veterinary Oncology Specialists', href: '/specialists/veterinary-oncology' },
      { label: 'Veterinary Dermatology Specialists', href: '/specialists/veterinary-dermatology' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
  },
]

export const DiagnosticsBySlug: Record<string, Diagnostic> = Object.fromEntries(
  Diagnostics.map((d) => [d.slug, d]),
)
