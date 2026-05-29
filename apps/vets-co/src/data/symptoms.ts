/**
 * Programmatic SEO data: 30 symptom-triage entries for /symptoms/[slug].
 *
 * Owners search "[symptom] in dog" / "[symptom] in cat" with HIGH urgency
 * intent. These are high-converting queries for find-a-vet routing and pet
 * insurance affiliate referrals.
 *
 * Citations point to AVMA, AAHA, VECCS, ACVIM, and Cornell / Merck Veterinary
 * Manual consumer references — institutional sources only, no individual
 * fake credentials.
 */

export type Species = 'Dog' | 'Cat' | 'Both' | 'Multi'
export type UrgencyTier =
  | 'ER NOW'
  | 'Same-day vet'
  | 'Schedule vet visit'
  | 'Monitor at home'

export interface Symptom {
  slug: string
  name: string
  species: Species
  urgencyTriage: UrgencyTier
  /** 2-4 ER triggers — the lines that flip this from monitor to drive-now. */
  redFlagsImmediate: string[]
  commonCauses: string[]
  diagnosticApproach: string[]
  selfCareWhenSafe: string[]
  /** One-sentence threshold for calling the vet. */
  whenToVet: string
  /** Cross-links to /health/* deep pages on vets.co. */
  relatedConditions: Array<{ label: string; href: string }>
  /** Institutional citations only — AVMA / AAHA / VECCS / ACVIM / Cornell / Merck Vet Manual. */
  citations: Array<{ label: string; href: string }>
}

const AVMA_OWNER = 'https://www.avma.org/resources/pet-owners'
const AAHA_OWNER = 'https://www.aaha.org/your-pet/pet-owner-education/'
const VECCS = 'https://veccs.org/'
const ACVIM = 'https://www.acvim.org/Animal-Owners'
const MERCK = 'https://www.merckvetmanual.com/'
const CORNELL_FELINE = 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center'

export const Symptoms: Symptom[] = [
  // ─── DOG SYMPTOMS (15) ─────────────────────────────────────────────
  {
    slug: 'dog-vomiting',
    name: 'Dog Vomiting',
    species: 'Dog',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Unproductive retching with a bloated, hard abdomen (suspect GDV / bloat)',
      'Vomiting blood, coffee-ground material, or projectile vomiting',
      'Known toxin ingestion (xylitol, grapes, chocolate, antifreeze, rodenticide)',
      'More than 3 episodes in a few hours, or vomiting plus collapse / pale gums',
    ],
    commonCauses: [
      'Dietary indiscretion — garbage, table scraps, sudden diet change',
      'Gastroenteritis (viral, bacterial, parasitic)',
      'Foreign body or partial GI obstruction',
      'Pancreatitis, especially after a fatty meal',
      'Toxin ingestion',
      "Chronic disease (kidney, liver, Addison's, IBD, cancer)",
    ],
    diagnosticApproach: [
      'History (timeline, contents, possible exposures, vaccination status)',
      'Physical exam including abdominal palpation and hydration check',
      'CBC / chemistry panel and electrolytes for dehydration and organ values',
      'Abdominal radiographs (and ultrasound if obstruction suspected)',
      "Specialized testing: cPL for pancreatitis, ACTH stim for Addison's, parvo SNAP for puppies",
    ],
    selfCareWhenSafe: [
      'Withhold food (not water) for 8-12 hours if your dog is alert and acting normal',
      'Reintroduce bland food (boiled chicken + rice) in small portions',
      'Offer small frequent water amounts; ice cubes help if water is not staying down',
      'Note frequency, color, contents — bring a photo to the vet if it persists',
    ],
    whenToVet:
      'If vomiting continues beyond 24 hours, repeats more than 3 times in a day, or is accompanied by lethargy, diarrhea, or refusal to drink.',
    relatedConditions: [
      { label: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs' },
      { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — Vomiting in Small Animals',
        href: `${MERCK}digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/vomiting-in-small-animals`,
      },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'dog-diarrhea',
    name: 'Dog Diarrhea',
    species: 'Dog',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Profuse bloody diarrhea (hemorrhagic gastroenteritis / HGE)',
      'Diarrhea plus repeated vomiting and obvious lethargy or collapse',
      'Unvaccinated puppy with diarrhea (parvovirus suspect)',
      'Pale gums, weakness, or signs of shock',
    ],
    commonCauses: [
      'Dietary change or indiscretion',
      'Intestinal parasites (giardia, hookworms, whipworms, roundworms)',
      'Viral or bacterial enteritis (parvo, Salmonella, Campylobacter)',
      'Stress colitis',
      'IBD, food allergy, or chronic GI disease',
    ],
    diagnosticApproach: [
      'Fresh fecal exam (float and direct smear) for parasites',
      'Parvo SNAP test for at-risk puppies',
      'CBC and chemistry for dehydration and protein loss',
      'Imaging if obstruction, mass, or intussusception suspected',
      'Diet trial or endoscopy for chronic cases',
    ],
    selfCareWhenSafe: [
      'Bland diet (boiled chicken + plain white rice or veterinary GI diet) for 2-3 days',
      'Free access to clean water; check skin turgor and gum moisture',
      'Probiotic designed for dogs may help (vet-approved brands)',
      'Bag a stool sample for the vet if it persists',
    ],
    whenToVet:
      'If diarrhea lasts more than 48 hours, contains blood, or your dog is dehydrated, lethargic, or unable to keep water down.',
    relatedConditions: [
      { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' },
      { label: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs' },
      { label: 'Leptospirosis', href: '/health/leptospirosis' },
    ],
    citations: [
      {
        label: 'AVMA — Parvovirus',
        href: 'https://www.avma.org/resources-tools/pet-owners/petcare/canine-parvovirus',
      },
      {
        label: 'Merck Veterinary Manual — Diarrhea in Dogs',
        href: `${MERCK}dog-owners/digestive-disorders-of-dogs/diarrhea-in-dogs`,
      },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'dog-not-eating',
    name: 'Dog Not Eating (Anorexia)',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Not eating AND not drinking for over 24 hours',
      'Anorexia plus vomiting, diarrhea, or distended abdomen',
      'Puppy or small breed refusing food (hypoglycemia risk)',
      'Anorexia plus pale or yellow gums, or collapse',
    ],
    commonCauses: [
      'Dental disease or oral pain',
      'GI upset, pancreatitis, or obstruction',
      'Systemic illness (kidney, liver, endocrine disease, cancer)',
      'Pain anywhere in the body',
      'Stress, environmental change, recent vaccination',
    ],
    diagnosticApproach: [
      'Full physical exam including oral exam',
      'CBC, chemistry, urinalysis as the baseline workup',
      'Abdominal imaging if pain or palpation findings',
      'Specialized testing based on bloodwork (T4, cPL, ACTH stim)',
    ],
    selfCareWhenSafe: [
      'Try warming food slightly or offering bland, palatable options (boiled chicken)',
      'Hand-feed in small amounts; quiet environment',
      'Rule out treat overload — too many extras can blunt mealtime appetite',
      'Track water intake and urine output',
    ],
    whenToVet:
      'If an adult dog has not eaten for 24 hours, or sooner for puppies, toy breeds, or any dog with other symptoms.',
    relatedConditions: [
      { label: 'Dental Cleaning Guide', href: '/health/dental-cleaning-guide' },
      { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — Dogs',
        href: `${MERCK}dog-owners/disorders-affecting-multiple-body-systems-of-dogs`,
      },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
    ],
  },
  {
    slug: 'dog-lethargy',
    name: 'Dog Lethargy',
    species: 'Dog',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Lethargy plus pale, white, blue, or yellow gums',
      'Collapse or inability to stand',
      'Lethargy plus distended abdomen, repeated vomiting, or rapid breathing',
      'Sudden severe lethargy in a dog that was normal hours ago',
    ],
    commonCauses: [
      'Infection (viral, bacterial, tick-borne)',
      'Pain from injury or arthritis',
      "Endocrine disease (Addison's, hypothyroid, diabetic crisis)",
      'Anemia (immune-mediated, blood loss, tick-borne)',
      'Cardiac disease',
      'Toxin exposure',
    ],
    diagnosticApproach: [
      'Full physical and neuro exam',
      'CBC, chemistry, electrolytes, T4',
      'Chest and abdominal imaging when indicated',
      'Tick-borne disease panel in endemic regions',
      'Cardiac workup if murmur or arrhythmia',
    ],
    selfCareWhenSafe: [
      'Rest in a quiet area, monitor breathing rate at rest',
      'Offer water and bland food; track intake',
      'Take resting respiratory rate (under 30 breaths/min asleep is normal)',
      'Document onset, severity, and any other changes for the vet',
    ],
    whenToVet:
      'Any lethargy lasting more than 24 hours, or any lethargy with other red flags, warrants a same-day vet visit.',
    relatedConditions: [
      { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      { label: 'Merck Veterinary Manual — Dog Owners', href: `${MERCK}dog-owners` },
    ],
  },
  {
    slug: 'dog-limping',
    name: 'Dog Limping',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Non-weight-bearing on a limb (holds it up entirely)',
      'Obvious deformity, open wound, or bone protruding',
      'Limping after a fall, hit by car, or other major trauma',
      'Limping plus fever, collapse, or pale gums (suspect tick-borne or autoimmune)',
    ],
    commonCauses: [
      'Soft tissue strain or sprain',
      'Cranial cruciate ligament (CCL/ACL) injury',
      'Osteoarthritis, especially in seniors',
      'Hip or elbow dysplasia',
      'Foreign body in paw, torn nail, paw pad burn',
      'Tick-borne disease (Lyme, ehrlichia)',
      'Bone tumor in large-breed seniors',
    ],
    diagnosticApproach: [
      'Lameness exam — observe gait, palpate joints, range-of-motion test',
      'Sedated orthopedic exam (drawer test for cruciate)',
      'Radiographs of the affected limb',
      'Tick-borne disease testing in endemic regions',
      'Advanced imaging (MRI, CT) for complex cases',
    ],
    selfCareWhenSafe: [
      'Strict rest for 24-48 hours — leash walks only, no jumping',
      'Check paw pads, between toes, and nails for foreign objects',
      'Cold compress for 10-15 minutes can help fresh soft tissue injury',
      'Do NOT give human pain medications (ibuprofen and acetaminophen are toxic)',
    ],
    whenToVet:
      'If limping persists beyond 48 hours of rest, or any non-weight-bearing limp warrants prompt evaluation.',
    relatedConditions: [
      { label: 'Pain Management in Dogs', href: '/health/pain-management-dogs' },
      { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' },
      { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      {
        label: 'Merck Veterinary Manual — Lameness in Dogs',
        href: `${MERCK}dog-owners/bone,-joint,-and-muscle-disorders-of-dogs/lameness-in-dogs`,
      },
    ],
  },
  {
    slug: 'dog-excessive-drinking',
    name: 'Dog Drinking Excessively',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Polydipsia plus weakness, vomiting, or sweet-smelling breath (diabetic ketoacidosis)',
      'Drinking constantly plus disorientation or seizures',
      'Sudden onset in a puppy or unvaccinated dog with fever (leptospirosis)',
      'Polydipsia plus dramatic weight loss in a senior',
    ],
    commonCauses: [
      'Diabetes mellitus',
      'Chronic kidney disease',
      "Cushing's disease (hyperadrenocorticism)",
      'Pyometra in intact females',
      'Liver disease',
      'Medications (steroids, diuretics)',
      'Hot weather, exercise, salty diet',
    ],
    diagnosticApproach: [
      'Quantify water intake (normal is roughly 50-60 mL/kg/day)',
      'CBC, chemistry, urinalysis with USG',
      'Urine culture if infection suspected',
      "Cushing's testing (LDDST or ACTH stim) if indicated",
      'Abdominal ultrasound for pyometra, masses, or organ disease',
    ],
    selfCareWhenSafe: [
      'Measure exact water consumption over 24 hours and bring the number to the vet',
      'Note any pee accidents, change in urine color, or weight changes',
      'Do not restrict water — that makes underlying disease more dangerous',
    ],
    whenToVet:
      "If your dog's water intake clearly exceeds normal for several days, or any sudden change in drinking and urination habits.",
    relatedConditions: [
      { label: "Cushing's Disease in Dogs", href: '/health/cushing-disease-dogs' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
      {
        label: 'Merck Veterinary Manual — Diabetes in Dogs',
        href: `${MERCK}dog-owners/hormonal-disorders-of-dogs/diabetes-mellitus-in-dogs`,
      },
    ],
  },
  {
    slug: 'dog-excessive-urination',
    name: 'Dog Urinating Frequently',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Straining to urinate with little or nothing produced (urinary obstruction)',
      'Bloody urine plus weakness or vomiting',
      'Urinating large volumes plus dehydration / collapse',
      'Pet acts painful when urinating',
    ],
    commonCauses: [
      'Urinary tract infection',
      'Bladder stones',
      "Diabetes mellitus or Cushing's disease",
      'Chronic kidney disease',
      'Behavioral marking or incomplete house training',
      'Medication side effect (steroids, diuretics)',
    ],
    diagnosticApproach: [
      'Urinalysis with sediment exam, urine culture',
      'CBC, chemistry, USG',
      'Abdominal imaging for stones, masses, prostate',
      "Cushing's and diabetes screening based on signalment",
    ],
    selfCareWhenSafe: [
      'Track frequency, volume, and any straining or vocalizing',
      'Collect a clean midstream sample if you can — a vet-ready cup helps',
      'Ensure constant access to clean water',
    ],
    whenToVet:
      'Any change in urination habits lasting more than 48 hours, or straining without producing urine, warrants vet evaluation.',
    relatedConditions: [
      { label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' },
      { label: "Cushing's Disease in Dogs", href: '/health/cushing-disease-dogs' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      {
        label: 'Merck Veterinary Manual — Urinary System',
        href: `${MERCK}dog-owners/urinary-system-disorders-of-dogs`,
      },
    ],
  },
  {
    slug: 'dog-panting-at-rest',
    name: 'Dog Panting at Rest',
    species: 'Dog',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Heavy panting with brick-red or pale gums (heat stroke or shock)',
      'Open-mouth panting at rest in a brachycephalic breed in heat',
      'Panting plus distended abdomen and unproductive retching (GDV)',
      'Panting plus collapse, weakness, or pacing through the night',
    ],
    commonCauses: [
      'Heat or recent exertion',
      'Pain (a major and under-recognized cause)',
      'Anxiety or stress',
      'Cardiac or respiratory disease',
      "Cushing's disease",
      'Anemia, fever, metabolic disturbance',
    ],
    diagnosticApproach: [
      'Resting respiratory rate (normal under 30 breaths/min asleep)',
      'Body temperature (rectal) — fever above 103°F or heat stroke above 104°F',
      'Physical exam, heart and lung auscultation',
      'Bloodwork, chest radiographs, echocardiogram as indicated',
    ],
    selfCareWhenSafe: [
      'Move to a cool, quiet area; offer water',
      'Take rectal temperature if possible — over 104°F is an emergency',
      'Count breaths per minute at rest',
    ],
    whenToVet:
      'Panting at rest with no obvious cause (no recent exercise, not hot, not stressed) should prompt a same-day vet call.',
    relatedConditions: [
      { label: 'Heat Stroke in Dogs', href: '/health/heat-stroke-dogs' },
      { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      {
        label: 'AVMA — Heat Stroke',
        href: 'https://www.avma.org/resources-tools/pet-owners/petcare/dangers-leaving-pets-parked-cars',
      },
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      {
        label: 'Merck Veterinary Manual — Respiratory System',
        href: `${MERCK}dog-owners/lung-and-airway-disorders-of-dogs`,
      },
    ],
  },
  {
    slug: 'dog-coughing',
    name: 'Dog Coughing',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Cough plus blue or pale gums, or labored breathing',
      'Coughing up blood',
      'Cough plus collapse or fainting (syncope)',
      'Sudden severe cough plus possible object inhalation',
    ],
    commonCauses: [
      'Kennel cough / canine infectious respiratory disease complex',
      'Canine influenza',
      'Heart disease with pulmonary edema',
      'Tracheal collapse (small breeds)',
      'Pneumonia',
      'Heartworm disease',
      'Allergies, foreign body, or neoplasia',
    ],
    diagnosticApproach: [
      'Physical exam, heart and lung auscultation',
      'Chest radiographs',
      'Heartworm antigen test',
      'CBC, chemistry, possibly echocardiogram',
      'Tracheal wash or BAL for chronic cases',
    ],
    selfCareWhenSafe: [
      'Reduce exercise and avoid collar pressure (use a harness)',
      'Humidified air or steamy bathroom can soothe',
      'Isolate from other dogs if infectious cause is suspected',
    ],
    whenToVet:
      'If the cough lasts more than a few days, worsens, or comes with any breathing difficulty, schedule a vet visit promptly.',
    relatedConditions: [
      { label: 'Canine Influenza', href: '/health/canine-influenza' },
      { label: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs' },
      { label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' },
    ],
    citations: [
      {
        label: 'AVMA — Canine Influenza',
        href: 'https://www.avma.org/resources-tools/animal-health-and-welfare/animal-health/canine-influenza',
      },
      {
        label: 'AAHA — Canine Vaccination Guidelines',
        href: 'https://www.aaha.org/aaha-guidelines/2022-aaha-canine-vaccination-guidelines/',
      },
      {
        label: 'Merck Veterinary Manual — Respiratory',
        href: `${MERCK}dog-owners/lung-and-airway-disorders-of-dogs`,
      },
    ],
  },
  {
    slug: 'dog-sneezing',
    name: 'Dog Sneezing',
    species: 'Dog',
    urgencyTriage: 'Monitor at home',
    redFlagsImmediate: [
      'Sudden violent sneezing fits after head-down sniffing (foxtail / grass awn)',
      'Bloody nasal discharge',
      'Sneezing plus facial swelling or eye discharge from one nostril',
      'Sneezing plus difficulty breathing',
    ],
    commonCauses: [
      'Environmental allergens (pollen, dust)',
      'Upper respiratory infection',
      'Foreign body in the nose (foxtail, grass awn)',
      'Dental disease with oronasal fistula',
      'Nasal mites or fungal infection',
      'Nasal tumor (older dogs)',
    ],
    diagnosticApproach: [
      'Visual exam of nose and face',
      'Rhinoscopy under anesthesia if foreign body or chronic cause suspected',
      'Skull / nasal radiographs or CT for chronic unilateral cases',
      'Fungal serology in endemic areas',
    ],
    selfCareWhenSafe: [
      'Wipe nose with a damp cloth; humidify the air',
      'Keep away from dusty or smoky environments',
      'Track frequency, side affected, and any discharge color',
    ],
    whenToVet:
      'If sneezing is severe, bloody, one-sided, or persists more than a few days, schedule a vet visit.',
    relatedConditions: [
      { label: 'Canine Influenza', href: '/health/canine-influenza' },
      { label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' },
      { label: 'Dental Cleaning Guide', href: '/health/dental-cleaning-guide' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      {
        label: 'Merck Veterinary Manual — Nose & Throat',
        href: `${MERCK}dog-owners/lung-and-airway-disorders-of-dogs/disorders-of-the-nose-and-throat-in-dogs`,
      },
    ],
  },
  {
    slug: 'dog-scratching-itching',
    name: 'Dog Scratching and Itching',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Severe itching plus facial swelling, hives, or vomiting (anaphylaxis)',
      'Self-trauma with open wounds or bleeding',
      'Itching plus collapse or difficulty breathing',
    ],
    commonCauses: [
      'Flea allergy dermatitis',
      'Environmental allergies (atopy)',
      'Food allergy',
      'Bacterial or yeast skin infection',
      'Sarcoptic or demodectic mange',
      'Contact irritant',
    ],
    diagnosticApproach: [
      'Skin exam with flea comb and skin scrapings',
      'Cytology of skin and ears for yeast / bacteria',
      'Trial parasite control if not on year-round prevention',
      'Diet elimination trial for food allergy',
      'Allergy testing (intradermal or serum) for environmental allergens',
    ],
    selfCareWhenSafe: [
      'Verify year-round flea and tick prevention',
      'Bathe with vet-approved hypoallergenic shampoo (avoid harsh human soaps)',
      'Track flares against season, food changes, walks',
    ],
    whenToVet:
      'If itching is constant, causing wounds, or paired with skin redness, odor, or hair loss, schedule a vet visit.',
    relatedConditions: [
      { label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' },
      { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' },
      { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
    ],
    citations: [
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — Skin Disorders',
        href: `${MERCK}dog-owners/skin-disorders-of-dogs`,
      },
    ],
  },
  {
    slug: 'dog-weight-loss',
    name: 'Dog Losing Weight',
    species: 'Dog',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Rapid weight loss in days plus vomiting or diarrhea',
      'Weight loss plus pale or yellow gums',
      'Marked muscle wasting with a swollen belly',
      'Senior dog with sudden weight loss and lethargy',
    ],
    commonCauses: [
      'Chronic GI disease (IBD, malabsorption, parasites)',
      'Cancer',
      'Chronic kidney or liver disease',
      'Diabetes mellitus',
      "Hyperthyroidism (rare in dogs) or Addison's disease",
      'Dental disease causing painful eating',
      'Inadequate calorie intake',
    ],
    diagnosticApproach: [
      'Weigh on the same scale and chart over weeks',
      'CBC, chemistry, urinalysis, T4',
      'Fecal exam, abdominal ultrasound',
      'Chest radiographs if cancer suspected',
      'GI panel (cobalamin/folate, TLI) for chronic GI disease',
    ],
    selfCareWhenSafe: [
      'Document weight weekly on the same scale',
      'Photograph topline and ribs every two weeks — body condition shifts slowly',
      'Review diet — confirm calorie content meets needs',
    ],
    whenToVet:
      'Any unintentional weight loss of more than 10% body weight, or any weight loss in a senior dog, deserves a vet visit.',
    relatedConditions: [
      { label: 'Weight Management', href: '/health/weight-management' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'dog-swollen-belly',
    name: 'Dog Swollen Belly',
    species: 'Dog',
    urgencyTriage: 'ER NOW',
    redFlagsImmediate: [
      'Distended, tympanic abdomen with unproductive retching (GDV / bloat)',
      'Sudden abdominal distension with weakness or pale gums (internal bleeding)',
      'Distended abdomen plus rapid breathing or collapse',
      'Intact female with vaginal discharge or none and a large belly (pyometra)',
    ],
    commonCauses: [
      'Gastric dilatation-volvulus (GDV) — deep-chested breeds, emergency',
      'Free abdominal fluid (heart failure, hypoalbuminemia, hemorrhage, peritonitis)',
      'Pyometra in intact females',
      'Mass effect (splenic, hepatic, or other tumor)',
      "Cushing's disease (pot-bellied appearance)",
      'Obesity',
    ],
    diagnosticApproach: [
      'Immediate physical exam and vital signs',
      'Abdominal radiographs — classic "double bubble" indicates GDV',
      'Abdominocentesis to characterize fluid',
      'Ultrasound for mass, pyometra, or organ disease',
      'CBC, chemistry, coagulation panel',
    ],
    selfCareWhenSafe: [
      'There is no safe home care for a truly distended, painful belly — go to the ER',
      'If mild and chronic (slow weight gain), schedule a vet visit and bring photos',
    ],
    whenToVet:
      'Sudden abdominal distension — especially in a large, deep-chested breed — is a true emergency. Drive to the nearest 24-hour ER.',
    relatedConditions: [
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
      { label: "Cushing's Disease in Dogs", href: '/health/cushing-disease-dogs' },
      { label: 'Weight Management', href: '/health/weight-management' },
    ],
    citations: [
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — GDV',
        href: `${MERCK}digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals`,
      },
    ],
  },
  {
    slug: 'dog-head-tilt',
    name: 'Dog Head Tilt',
    species: 'Dog',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Head tilt plus circling, falling, or rolling',
      'Head tilt plus seizures or altered mentation',
      'Sudden head tilt with vomiting and severe disorientation',
      'Head tilt plus facial nerve paralysis (drooping face)',
    ],
    commonCauses: [
      'Otitis interna / middle ear infection',
      'Idiopathic vestibular disease (old-dog vestibular)',
      'Central nervous system disease (stroke, mass, inflammation)',
      'Polyp or tumor in the ear canal',
      'Toxin or medication reaction',
    ],
    diagnosticApproach: [
      'Otoscopic exam of both ears',
      'Neurological exam to localize peripheral vs central',
      'Bloodwork to screen for systemic disease',
      'Advanced imaging (MRI, CT) for central or chronic peripheral cases',
    ],
    selfCareWhenSafe: [
      'Confine to a small, padded space to prevent falls',
      'Hand-feed and offer water at floor level',
      'Anti-nausea medication may be prescribed; do not give human meds',
    ],
    whenToVet:
      'Any sudden head tilt warrants a same-day vet visit to differentiate ear disease from central nervous system disease.',
    relatedConditions: [
      { label: 'Dog Eye Conditions', href: '/health/dog-eye-conditions' },
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
    citations: [
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
      {
        label: 'Merck Veterinary Manual — Vestibular Disease',
        href: `${MERCK}dog-owners/brain,-spinal-cord,-and-nerve-disorders-of-dogs/vestibular-disease-in-dogs`,
      },
    ],
  },
  {
    slug: 'dog-pale-gums',
    name: 'Dog Pale Gums',
    species: 'Dog',
    urgencyTriage: 'ER NOW',
    redFlagsImmediate: [
      'White or pale pink gums (severe anemia or shock)',
      'Pale gums plus collapse, weakness, or rapid breathing',
      'Pale gums plus distended abdomen (possible internal bleeding)',
      'Blue-tinged or muddy gums (poor oxygenation)',
    ],
    commonCauses: [
      'Acute blood loss (trauma, splenic tumor, rodenticide poisoning)',
      'Immune-mediated hemolytic anemia (IMHA)',
      'Chronic disease anemia',
      'Shock from any cause',
      'Severe dehydration',
      'Heart disease with poor perfusion',
    ],
    diagnosticApproach: [
      'Capillary refill time (normal under 2 seconds)',
      'CBC and chemistry to characterize anemia',
      'Blood smear, reticulocyte count, Coombs test',
      'Coagulation panel; rodenticide screen',
      'Imaging for hemorrhage source',
    ],
    selfCareWhenSafe: [
      'There is no safe home care — pale gums mean drive to the ER now',
      'On the way, keep your dog warm and quiet',
    ],
    whenToVet:
      'Pale, white, blue, or yellow gums are always an emergency. Go to the nearest 24-hour veterinary ER immediately.',
    relatedConditions: [
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
      { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' },
      { label: 'Leptospirosis', href: '/health/leptospirosis' },
    ],
    citations: [
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — Anemia in Dogs',
        href: `${MERCK}dog-owners/blood-disorders-of-dogs/anemia-in-dogs`,
      },
    ],
  },

  // ─── CAT SYMPTOMS (15) ─────────────────────────────────────────────
  {
    slug: 'cat-vomiting',
    name: 'Cat Vomiting',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Vomiting plus open-mouth breathing or rapid breathing',
      'Vomiting blood or projectile vomiting',
      'Known toxin exposure (lily — even pollen — antifreeze, NSAID, acetaminophen)',
      'Vomiting plus lethargy and not eating for over 24 hours (hepatic lipidosis risk)',
    ],
    commonCauses: [
      'Hairballs (occasional is normal; frequent is not)',
      'Dietary indiscretion or food change',
      'Inflammatory bowel disease (IBD)',
      'Hyperthyroidism (senior cats)',
      'Chronic kidney disease',
      'GI lymphoma',
      'Foreign body, especially linear (string, ribbon)',
    ],
    diagnosticApproach: [
      'Detailed history (frequency, contents, weight trend, appetite)',
      'CBC, chemistry, T4, urinalysis',
      'Abdominal radiographs and ultrasound',
      'fPL for pancreatitis',
      'Endoscopy or surgical biopsy for chronic cases',
    ],
    selfCareWhenSafe: [
      'For a single episode in an otherwise normal cat: monitor and resume normal diet in small amounts',
      'Brush long-haired cats regularly to reduce hairball volume',
      'Never assume vomiting is "just hairballs" — chronic vomiting is a disease signal',
    ],
    whenToVet:
      'Vomiting more than once a week, vomiting for more than 24 hours, or any vomiting plus reduced appetite needs a vet visit.',
    relatedConditions: [
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'Merck Veterinary Manual — Cats', href: `${MERCK}cat-owners` },
    ],
  },
  {
    slug: 'cat-diarrhea',
    name: 'Cat Diarrhea',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Bloody, profuse, or watery diarrhea with weakness',
      'Diarrhea plus repeated vomiting and refusal to drink',
      'Kitten with diarrhea (rapid dehydration risk)',
      'Diarrhea plus pale or yellow gums',
    ],
    commonCauses: [
      'Dietary change or food intolerance',
      'Intestinal parasites (giardia, coccidia, tritrichomonas)',
      'Bacterial or viral enteritis',
      'Inflammatory bowel disease',
      'GI lymphoma',
      'Pancreatitis',
      'Hyperthyroidism',
    ],
    diagnosticApproach: [
      'Fecal float, direct smear, giardia and tritrich PCR',
      'CBC, chemistry, T4',
      'fPL for pancreatitis',
      'Abdominal ultrasound for chronic cases',
      'Diet trial or endoscopic biopsy when indicated',
    ],
    selfCareWhenSafe: [
      'Switch to a bland or veterinary GI diet for 3-5 days',
      'Ensure constant water access; check hydration',
      'Bag a fresh stool sample for the vet',
    ],
    whenToVet:
      'If diarrhea lasts more than 48 hours, contains blood, or your cat shows any other symptoms, schedule a vet visit.',
    relatedConditions: [
      { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      {
        label: 'Merck Veterinary Manual — Digestive Disorders of Cats',
        href: `${MERCK}cat-owners/digestive-disorders-of-cats`,
      },
    ],
  },
  {
    slug: 'cat-not-eating',
    name: 'Cat Not Eating',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Cat has not eaten for 24-48 hours (hepatic lipidosis is a real, fast risk)',
      'Anorexia plus jaundice (yellow gums, ears, eyes)',
      'Anorexia plus open-mouth breathing or hiding',
      'Overweight cat that abruptly stops eating',
    ],
    commonCauses: [
      'Dental or oral pain',
      'GI disease, pancreatitis, foreign body',
      'Chronic kidney disease',
      'Hyperthyroidism (paradoxically can cause appetite swings)',
      'Stress (new pet, move, schedule change)',
      'Cancer',
    ],
    diagnosticApproach: [
      'Physical and oral exam',
      'CBC, chemistry, T4, urinalysis',
      'Abdominal imaging',
      'fPL for pancreatitis',
      'Targeted workup based on findings',
    ],
    selfCareWhenSafe: [
      'Offer warmed wet food, single-protein novelty diets, or a favorite treat',
      'Quiet, low-traffic feeding area; separate from other pets',
      'Hand-feed small amounts',
    ],
    whenToVet:
      'Cats should not skip meals. If a cat refuses food for 24 hours — especially an overweight cat — call the vet today.',
    relatedConditions: [
      { label: 'Dental Cleaning Guide', href: '/health/dental-cleaning-guide' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
    citations: [
      {
        label: 'Cornell Feline Health Center — Hepatic Lipidosis',
        href: `${CORNELL_FELINE}/health-information/feline-health-topics`,
      },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'cat-lethargy',
    name: 'Cat Lethargy',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Lethargy plus open-mouth breathing or rapid breathing',
      'Lethargy plus jaundice or pale gums',
      'Lethargy plus straining in the litter box (male cats — urinary obstruction)',
      'Sudden collapse, weakness, or inability to use the back legs',
    ],
    commonCauses: [
      'Infection (URI, abscess, FIV / FeLV related)',
      'Chronic kidney disease',
      'Hyperthyroidism or diabetes',
      'Pain (arthritis, dental disease, abdominal disease)',
      'Anemia',
      'Cardiac disease',
      'Cancer',
    ],
    diagnosticApproach: [
      'Full physical exam and weight check',
      'CBC, chemistry, T4, urinalysis',
      'Chest radiographs and echocardiogram if cardiac signs',
      'FIV / FeLV testing if status unknown',
    ],
    selfCareWhenSafe: [
      'Quiet, warm space with easy access to food, water, litter',
      'Count resting respiratory rate (under 30/min is normal)',
      'Track appetite, water intake, and litter box use',
    ],
    whenToVet:
      'Cats hide illness well. Any unexplained lethargy beyond 24 hours warrants a same-day call.',
    relatedConditions: [
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
      { label: 'Merck Veterinary Manual — Cats', href: `${MERCK}cat-owners` },
    ],
  },
  {
    slug: 'cat-hiding',
    name: 'Cat Hiding More Than Usual',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Hiding plus refusal to eat or drink for 24 hours',
      'Hiding plus open-mouth breathing or rapid breathing',
      'Hiding plus vocalizing in pain, straining in litter box, or vomiting',
      'Cat hides AND does not respond to favorite person',
    ],
    commonCauses: [
      'Pain (the most common reason a friendly cat suddenly hides)',
      'Illness — cats instinctively hide when unwell',
      'Stress (new pet, new baby, household change, fireworks)',
      'Cognitive dysfunction in seniors',
      'Bullying by another household pet',
    ],
    diagnosticApproach: [
      'Physical exam including oral and abdominal palpation',
      'CBC, chemistry, T4, urinalysis as senior baseline',
      'Imaging if pain or palpation findings',
      'Behavioral history for environmental triggers',
    ],
    selfCareWhenSafe: [
      'Provide quiet hiding spots, vertical space, multiple resources',
      'Minimize household stressors and use Feliway pheromones',
      'Do not force the cat out — observe from a distance',
    ],
    whenToVet:
      'If hiding is new, lasts more than 24-48 hours, or is paired with any other symptom, see a vet.',
    relatedConditions: [
      { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AAFP — American Association of Feline Practitioners', href: 'https://catvets.com/' },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
    ],
  },
  {
    slug: 'cat-straining-urinate',
    name: 'Cat Straining to Urinate',
    species: 'Cat',
    urgencyTriage: 'ER NOW',
    redFlagsImmediate: [
      'Male cat going in and out of the litter box producing little or nothing (urethral obstruction — life-threatening within 24 hours)',
      'Vocalizing, hiding, vomiting, or collapse with straining',
      'Hard, painful bladder on gentle abdominal touch',
      'Bloody urine plus weakness or refusal to move',
    ],
    commonCauses: [
      'Feline lower urinary tract disease (FLUTD) / sterile cystitis',
      'Urethral obstruction (especially male cats)',
      'Bladder stones or crystals',
      'Urinary tract infection (less common in young cats)',
      'Stress-induced cystitis',
    ],
    diagnosticApproach: [
      'Immediate physical exam and bladder palpation',
      'Bloodwork, electrolytes, and ECG (obstructed cats develop fatal hyperkalemia)',
      'Urinalysis, culture, imaging',
      'Catheterization and IV fluids for obstructed males',
    ],
    selfCareWhenSafe: [
      'There is no safe home care for an obstructed male cat — drive to the ER',
      'For known sterile cystitis, increase water intake (fountain, wet food) and reduce stress',
    ],
    whenToVet:
      'A male cat straining to urinate without producing urine is one of the most time-critical emergencies in cat medicine. Go to the ER now.',
    relatedConditions: [
      { label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
    ],
    citations: [
      {
        label: 'Cornell Feline Health Center — FLUTD',
        href: `${CORNELL_FELINE}/health-information/feline-health-topics`,
      },
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      { label: 'AAFP — American Association of Feline Practitioners', href: 'https://catvets.com/' },
    ],
  },
  {
    slug: 'cat-weight-loss',
    name: 'Cat Losing Weight',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Rapid weight loss in a cat that has stopped eating (lipidosis risk)',
      'Weight loss plus marked thirst and urination (diabetes, kidney, hyperthyroid)',
      'Weight loss plus jaundice',
      'Senior cat with steady weight loss and behavior change',
    ],
    commonCauses: [
      'Hyperthyroidism (most common cause in senior cats)',
      'Chronic kidney disease',
      'Diabetes mellitus',
      'GI disease — IBD or GI lymphoma',
      'Dental disease',
      'Cancer',
    ],
    diagnosticApproach: [
      'CBC, chemistry, T4, urinalysis as the baseline',
      'Blood pressure',
      'Abdominal ultrasound for GI or organ disease',
      'Fructosamine for diabetes confirmation',
      'Cobalamin / folate and TLI for GI workup',
    ],
    selfCareWhenSafe: [
      'Weigh on a kitchen scale every 1-2 weeks at home',
      'Photograph topline and ribs to track muscle vs fat changes',
      'Verify exact calorie intake — measure, do not eyeball',
    ],
    whenToVet:
      'Any unintentional weight loss in a cat — even slow — warrants senior bloodwork including T4.',
    relatedConditions: [
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Weight Management', href: '/health/weight-management' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'cat-excessive-drinking',
    name: 'Cat Drinking Excessively',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Polydipsia plus vomiting and dehydration',
      'Drinking constantly plus dramatic weight loss',
      'Sweet-smelling breath plus weakness (diabetic ketoacidosis)',
      'Polydipsia plus collapse',
    ],
    commonCauses: [
      'Chronic kidney disease',
      'Hyperthyroidism',
      'Diabetes mellitus',
      'Liver disease',
      'Hypercalcemia',
      'Diet high in dry food (relative water deficit)',
    ],
    diagnosticApproach: [
      'Measure 24-hour intake (normal roughly 40-60 mL/kg/day)',
      'CBC, chemistry, T4, urinalysis with USG',
      'Ionized calcium',
      'Blood pressure',
      'Abdominal ultrasound if indicated',
    ],
    selfCareWhenSafe: [
      'Measure water in a graduated cup daily for several days; bring numbers to the vet',
      'Increase wet food to offset thirst from a dry-only diet',
      'Do not restrict water',
    ],
    whenToVet:
      'A noticeable, persistent change in drinking habits in a cat is a strong signal — book a vet visit within a week.',
    relatedConditions: [
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
      { label: 'Merck Veterinary Manual — Cats', href: `${MERCK}cat-owners` },
    ],
  },
  {
    slug: 'cat-breathing-fast',
    name: 'Cat Breathing Fast',
    species: 'Cat',
    urgencyTriage: 'ER NOW',
    redFlagsImmediate: [
      'Open-mouth breathing or panting in a cat at rest (always abnormal)',
      'Sleeping respiratory rate above 30 breaths per minute (heart failure red flag)',
      'Blue or pale gums',
      'Sitting hunched with extended neck, refusing to move',
    ],
    commonCauses: [
      'Heart disease with pulmonary edema or pleural effusion',
      'Asthma (feline bronchial disease)',
      'Pneumonia',
      'Trauma — diaphragmatic hernia, pneumothorax',
      'Anemia',
      'Heatstroke',
    ],
    diagnosticApproach: [
      'Stabilize first — oxygen, minimal stress handling',
      'Chest radiographs once stable',
      'Echocardiogram',
      'NT-proBNP, CBC, chemistry',
      'Thoracocentesis if effusion present',
    ],
    selfCareWhenSafe: [
      'Stop all stressful handling; carry in a covered carrier; drive to the ER',
      'Cool, quiet transport; no head-down positioning',
    ],
    whenToVet:
      'Cats almost never breathe fast or open-mouth without serious disease. Sleeping breaths over 30/min or open-mouth breathing is an emergency.',
    relatedConditions: [
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Heat Stroke in Dogs', href: '/health/heat-stroke-dogs' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
    ],
  },
  {
    slug: 'cat-excessive-grooming',
    name: 'Cat Overgrooming',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Open wounds, raw skin, or bleeding from licking',
      'Overgrooming plus refusal to eat or hide (severe pain)',
      'Sudden licking at one spot only (often pain origin)',
    ],
    commonCauses: [
      'Flea allergy dermatitis',
      'Environmental or food allergies',
      'Pain (cats often groom over a painful area)',
      'Anxiety / stress-induced psychogenic alopecia',
      'Hyperthyroidism',
      'Skin infection or mites',
    ],
    diagnosticApproach: [
      'Skin exam, flea comb, cytology',
      'CBC, chemistry, T4',
      'Imaging if pain suspected over a specific region',
      'Diet trial for food allergy',
      'Behavioral assessment for stress',
    ],
    selfCareWhenSafe: [
      'Verify year-round flea prevention',
      'Reduce household stress (resources, hiding spots, predictability)',
      'Use a soft Elizabethan collar if self-trauma is occurring',
    ],
    whenToVet:
      'Persistent overgrooming, hair loss, or skin damage warrants a vet visit — true psychogenic alopecia is a diagnosis of exclusion.',
    relatedConditions: [
      { label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AAFP — American Association of Feline Practitioners', href: 'https://catvets.com/' },
      {
        label: 'Merck Veterinary Manual — Skin Disorders of Cats',
        href: `${MERCK}cat-owners/skin-disorders-of-cats`,
      },
    ],
  },
  {
    slug: 'cat-hair-loss',
    name: 'Cat Hair Loss (Alopecia)',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Generalized hair loss plus weight loss and ravenous appetite (hyperthyroidism)',
      'Hair loss with raw, oozing skin',
      'Hair loss plus open-mouth breathing or lethargy',
    ],
    commonCauses: [
      'Flea allergy dermatitis',
      'Dermatophytosis (ringworm — zoonotic)',
      'Hyperthyroidism',
      "Cushing's disease (rare in cats)",
      'Allergies and atopy',
      'Psychogenic overgrooming',
    ],
    diagnosticApproach: [
      "Skin scraping, fungal culture, Wood's lamp exam",
      'Cytology',
      'CBC, chemistry, T4',
      'Diet trial or allergy workup',
    ],
    selfCareWhenSafe: [
      'Verify flea control',
      'Photograph affected areas to track over time',
      'If ringworm is suspected, isolate from other pets and people until diagnosed',
    ],
    whenToVet:
      'Patchy or progressive hair loss should be evaluated within a week — ringworm and hyperthyroidism are common causes that need targeted treatment.',
    relatedConditions: [
      { label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      {
        label: 'AVMA — Ringworm in Pets',
        href: 'https://www.avma.org/resources-tools/pet-owners/petcare',
      },
      {
        label: 'Merck Veterinary Manual — Skin Disorders of Cats',
        href: `${MERCK}cat-owners/skin-disorders-of-cats`,
      },
    ],
  },
  {
    slug: 'cat-bloody-urine',
    name: 'Cat Bloody Urine',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Bloody urine in a male cat with straining (obstruction risk — ER)',
      'Bloody urine plus vomiting, lethargy, or hiding',
      'Pink or red litter clumps plus refusal to use the box',
      'Bloody urine plus pale gums',
    ],
    commonCauses: [
      'Feline idiopathic cystitis (FIC) — stress-driven, common',
      'Bladder stones or crystals',
      'Urinary tract infection (less common in young cats)',
      'Bladder tumor (seniors)',
      'Trauma',
      'Coagulation disorder or rodenticide',
    ],
    diagnosticApproach: [
      'Urinalysis with sediment, urine culture',
      'CBC, chemistry, coagulation if other bleeding signs',
      'Imaging (radiographs, ultrasound) for stones, masses',
    ],
    selfCareWhenSafe: [
      'Add water sources (fountain, multiple bowls); switch to wet food when possible',
      'Reduce stressors and provide one litter box per cat plus one extra',
      'Collect a sterile sample with non-absorbent litter if possible',
    ],
    whenToVet:
      'Visible blood in cat urine deserves a same-day vet call — and immediate ER if a male cat is straining.',
    relatedConditions: [
      { label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
    ],
    citations: [
      {
        label: 'Cornell Feline Health Center — FLUTD',
        href: `${CORNELL_FELINE}/health-information/feline-health-topics`,
      },
      { label: 'AAFP — American Association of Feline Practitioners', href: 'https://catvets.com/' },
      { label: 'AVMA — Pet Owner Resources', href: AVMA_OWNER },
    ],
  },
  {
    slug: 'cat-sneezing',
    name: 'Cat Sneezing',
    species: 'Cat',
    urgencyTriage: 'Schedule vet visit',
    redFlagsImmediate: [
      'Sneezing plus open-mouth breathing or rapid breathing',
      'Bloody nasal discharge',
      'Sneezing plus refusal to eat (cats need to smell food)',
      'Severe facial swelling',
    ],
    commonCauses: [
      'Feline upper respiratory infection (herpesvirus, calicivirus)',
      'Bacterial infection (Bordetella, Chlamydia)',
      'Allergies',
      'Foreign body (less common than dogs)',
      'Nasal polyp (younger cats) or nasal tumor (seniors)',
      'Dental disease with oronasal involvement',
    ],
    diagnosticApproach: [
      'Physical and oral exam',
      'PCR panel for upper respiratory pathogens',
      'CBC, chemistry, FIV / FeLV testing if status unknown',
      'Imaging or rhinoscopy for chronic / one-sided cases',
    ],
    selfCareWhenSafe: [
      'Humidified air; wipe nose with warm damp cloth',
      'Warm strongly aromatic food to stimulate appetite',
      'Isolate from other cats until URI is ruled out',
    ],
    whenToVet:
      'Persistent sneezing, any bloody discharge, one-sided signs, or sneezing plus appetite loss needs a vet visit.',
    relatedConditions: [
      { label: 'Dental Cleaning Guide', href: '/health/dental-cleaning-guide' },
      { label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'AAFP — American Association of Feline Practitioners', href: 'https://catvets.com/' },
      { label: 'AAHA — Owner Education', href: AAHA_OWNER },
    ],
  },
  {
    slug: 'cat-head-pressing',
    name: 'Cat Head Pressing',
    species: 'Cat',
    urgencyTriage: 'ER NOW',
    redFlagsImmediate: [
      'Pressing head against walls, corners, or furniture (neurological emergency)',
      'Head pressing plus circling, seizures, or altered mentation',
      'Head pressing plus blindness or disorientation',
      'Sudden severe behavior change in any cat',
    ],
    commonCauses: [
      'Hepatic encephalopathy (liver failure or shunt)',
      'Brain tumor or stroke',
      'Toxin exposure',
      'Severe metabolic disturbance',
      'Infectious or inflammatory CNS disease',
      'Hypertension with target organ damage',
    ],
    diagnosticApproach: [
      'Immediate physical and neurological exam',
      'CBC, chemistry, ammonia, bile acids',
      'Blood pressure',
      'Imaging (MRI / CT) of the brain',
      'CSF analysis if indicated',
    ],
    selfCareWhenSafe: [
      'There is no safe home care for head pressing — go to the ER',
      'Keep the cat in a quiet, padded carrier on the way',
    ],
    whenToVet:
      'Head pressing is always a neurological emergency. Go to the nearest 24-hour ER immediately.',
    relatedConditions: [
      { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
      { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'VECCS — Veterinary Emergency & Critical Care Society', href: VECCS },
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'ACVIM — Animal Owners', href: ACVIM },
    ],
  },
  {
    slug: 'cat-third-eyelid-showing',
    name: 'Cat Third Eyelid Showing',
    species: 'Cat',
    urgencyTriage: 'Same-day vet',
    redFlagsImmediate: [
      'Third eyelid showing plus painful eye, squinting, or discharge',
      "Both third eyelids prominent plus lethargy and diarrhea (Haw's syndrome / systemic illness)",
      'Third eyelid covering most of the eye plus neurological signs',
      'Third eyelid plus dilated or asymmetric pupils',
    ],
    commonCauses: [
      'Generalized illness, weight loss, dehydration',
      'Eye pain, ulcer, or uveitis',
      "Horner's syndrome (nerve damage)",
      "Haw's syndrome (often follows GI illness)",
      'Tetanus (rare)',
      'Behind-the-eye mass',
    ],
    diagnosticApproach: [
      'Full ophthalmic exam including fluorescein stain and Schirmer test',
      'Neurological exam',
      'CBC, chemistry, T4',
      'Imaging if mass or central cause suspected',
    ],
    selfCareWhenSafe: [
      'Do not use human eye drops',
      'Note whether one eye or both, and any pain signs (squinting, pawing)',
    ],
    whenToVet:
      'Visible third eyelids — especially in only one eye, or with pain or other symptoms — needs a same-day vet visit.',
    relatedConditions: [
      { label: 'Dog Eye Conditions', href: '/health/dog-eye-conditions' },
      { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
      { label: 'Emergency Signs', href: '/health/emergency-signs' },
    ],
    citations: [
      { label: 'Cornell Feline Health Center', href: CORNELL_FELINE },
      { label: 'ACVO — Veterinary Ophthalmologists', href: 'https://www.acvo.org/' },
      {
        label: 'Merck Veterinary Manual — Eye Disorders of Cats',
        href: `${MERCK}cat-owners/eye-disorders-of-cats`,
      },
    ],
  },
]

export const SymptomsBySlug: Record<string, Symptom> = Object.fromEntries(
  Symptoms.map((s) => [s.slug, s])
)
