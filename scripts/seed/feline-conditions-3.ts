// Feline senior conditions — partial 3 (5 conditions)

export const FELINE_CONDITIONS_3 = {
  'feline-constipation-megacolon': {
    slug: 'feline-constipation-megacolon',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Constipation is common in senior cats and most often reflects chronic dehydration, particularly in cats with concurrent CKD. End-stage chronic constipation leads to megacolon, an irreversibly dilated colon that may require surgery.',
    overview: [
      'Most senior feline constipation is "obstipation"-prone because cats are obligate carnivores with low thirst drive. Underlying CKD, arthritis (painful to posture), and reduced activity all contribute.',
      'Megacolon develops when chronic distention damages colonic smooth muscle beyond recovery. At that point, medical management becomes increasingly difficult and surgical colectomy may be considered.',
      'Diagnosis uses physical exam, palpation of a doughy fecal mass, radiographs, and an underlying-disease workup.',
    ],
    clinicalSigns: [
      'Repeated, unproductive litterbox visits',
      'Hard, dry stool — pellet-like or absent',
      'Vomiting from severe constipation',
      'Decreased appetite',
      'Hiding or lethargy',
      'Straining mistaken for urinary issue',
    ],
    redFlags: [
      'Straining in the litterbox without producing urine — possible urinary obstruction, emergency in males',
      'Vomiting with severe abdominal distention',
      'Persistent inappetence and hiding',
      'Bloody stool',
    ],
    treatment: [
      'Hydration is foundational. Many cats benefit from subcutaneous fluids, especially those with CKD. Wet food, fountains, and multiple water sources support steady intake.',
      'Lactulose syrup titrated to a soft (but not loose) stool is the most common pharmacologic therapy. MiraLAX (PEG 3350) is increasingly used; dosing is individualized.',
      'Prokinetic agents (cisapride, compounded) increase colonic motility and are useful in cats with megacolon precursors.',
      'Dietary fiber strategies vary; some cats do well on high-fiber diets, others on highly digestible low-residue diets.',
      'Subtotal colectomy is the definitive treatment for true megacolon. Most cats recover well and live a normal life with looser stool consistency.',
    ],
    lifestyleChanges: [
      'Switch to wet food as the primary diet for senior cats.',
      'Provide multiple water sources, including a fountain.',
      'Use low-sided, accessible litterboxes on every floor.',
      'Treat concurrent arthritis — pain can prevent normal posturing in the box.',
      'Monitor stool consistency in a simple home log.',
    ],
    prognosis: [
      'Most chronic constipation is well-controlled with medical management. Megacolon eventually outpaces medical therapy and may require surgery — long-term outcomes after subtotal colectomy are generally excellent.',
    ],
    recommendedProducts: [
      {
        name: 'Lactulose Syrup',
        description: 'Osmotic laxative — standard first-line therapy for feline chronic constipation.',
        vendor: 'chewyrx',
        path: '/rx/lactulose',
      },
      {
        name: 'MiraLAX (PEG 3350)',
        description: 'OTC polyethylene glycol used in feline constipation under veterinary direction.',
        vendor: 'amazon',
        search: 'MiraLAX unflavored',
      },
      {
        name: 'PetSafe Drinkwell Cat Fountain',
        description: 'Encourages hydration to prevent recurrent constipation.',
        vendor: 'amazon',
        search: 'PetSafe Drinkwell cat fountain',
      },
      {
        name: 'Royal Canin Gastrointestinal Fiber Response',
        description: 'High-fiber therapeutic diet for cats with constipation tendency.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-fiber-response',
      },
    ],
    faqs: [
      {
        question: 'How often should a senior cat have a bowel movement?',
        answer:
          'Roughly once daily for most cats. More than 48 hours without a bowel movement is concerning, especially with reduced appetite.',
      },
      {
        question: 'Can I give my cat human laxatives?',
        answer:
          'MiraLAX is commonly used in cats under veterinary direction. Other human laxatives (stimulant types, mineral oil) can be harmful and should not be given without veterinary guidance.',
      },
      {
        question: 'Will my cat need surgery?',
        answer:
          'Most cats do not. Subtotal colectomy is reserved for true megacolon refractory to medical therapy.',
      },
      {
        question: 'Is my cat straining for urine or stool?',
        answer:
          'This is a critical distinction. Urinary obstruction in male cats is a same-day emergency. Watch for any urine production; if uncertain, go to the emergency vet.',
      },
    ],
    citations: [
      {
        label: 'AAFP — Constipation in Cats',
        url: 'https://catvets.com/',
      },
      {
        label: 'Cornell Feline Health Center — Constipation and Megacolon',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics',
      },
      {
        label: 'Merck Veterinary Manual — Megacolon in Cats',
        url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/intestinal-obstruction-in-small-animals',
      },
    ],
  },

  'feline-asthma': {
    slug: 'feline-asthma',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Feline asthma is a chronic, allergic airway disease that produces episodic coughing and difficulty breathing. The cough is often mistaken for hairballs, leading to delayed diagnosis. Inhaled corticosteroids via spacer (AeroKat) are the gold-standard long-term therapy.',
    overview: [
      'Feline asthma involves eosinophilic inflammation, bronchoconstriction, and airway remodeling, often triggered by inhaled allergens. Prevalence is estimated at 1–5% of cats, with under-reporting common.',
      'The classic presentation is a cat in a crouched position with neck extended, coughing in spasms. Owners often describe it as "trying to throw up a hairball."',
      'Diagnosis combines history, physical exam, thoracic radiographs (showing bronchial pattern), and sometimes bronchoalveolar lavage. Heartworm-associated respiratory disease is on the differential and is tested separately.',
    ],
    clinicalSigns: [
      'Episodic coughing — often in spasms of 5–20 seconds',
      'Wheezing audible without a stethoscope in some cases',
      'Open-mouth breathing during a flare (emergency sign)',
      'Reduced exercise tolerance',
      'Crouched posture with neck extended during coughing',
    ],
    redFlags: [
      'Open-mouth breathing in a cat — emergency',
      'Persistent rapid breathing at rest',
      'Blue or gray gum color',
      'Collapse',
    ],
    treatment: [
      'Inhaled fluticasone via spacer (AeroKat) is the standard maintenance therapy. Most cats accept the spacer with training.',
      'Albuterol inhaler via spacer is used as a rescue inhaler for acute bronchospasm.',
      'Oral or injectable corticosteroids are used during initial flares or for cats who will not accept inhaled therapy.',
      'Identifying and removing environmental triggers — fragrances, scented litters, smoke, candles, perfumes — substantially reduces flare frequency.',
    ],
    lifestyleChanges: [
      'Use unscented, low-dust clumping litter.',
      'Eliminate household smoke, scented candles, and air fresheners.',
      'Use HEPA filtration in the cat’s primary spaces.',
      'Switch to fragrance-free cleaning products.',
      'Practice spacer training with positive reinforcement; most cats accept it within a couple of weeks.',
    ],
    prognosis: [
      'With consistent inhaled therapy and environmental control, most cats live a normal lifespan with infrequent flares.',
      'Uncontrolled disease produces progressive airway remodeling and worsens prognosis.',
    ],
    recommendedProducts: [
      {
        name: 'AeroKat Feline Spacer',
        description: 'Spacer device designed for delivering inhaled medications to cats.',
        vendor: 'amazon',
        search: 'AeroKat feline spacer',
      },
      {
        name: 'Fluticasone Inhaler (Flovent)',
        description: 'Inhaled corticosteroid prescribed by your veterinarian — first-line maintenance therapy for feline asthma.',
        vendor: 'chewyrx',
        path: '/rx/fluticasone',
      },
      {
        name: 'Unscented Low-Dust Clumping Litter',
        description: 'Reduces airway irritation in asthmatic cats.',
        vendor: 'chewy',
        path: '/b/unscented-cat-litter',
      },
    ],
    faqs: [
      {
        question: 'How do I know if it is asthma or hairballs?',
        answer:
          'Asthma cough is dry, spasmodic, often without any productive material. Hairball events typically end in vomited material. Persistent cough should be evaluated.',
      },
      {
        question: 'Are inhaled steroids safe long-term?',
        answer:
          'Yes, in most cats. Inhaled fluticasone has minimal systemic absorption, so side effects are far lower than chronic oral steroids.',
      },
      {
        question: 'My cat hates the mask — will it work?',
        answer:
          'Most cats accept the AeroKat spacer with patient training using treats and short sessions. Many initially resistant cats are tolerating it within a week or two.',
      },
      {
        question: 'Can my cat outgrow asthma?',
        answer:
          'No. Feline asthma is a chronic disease. Triggers can be reduced and inflammation controlled, but the underlying condition persists.',
      },
    ],
    citations: [
      {
        label: 'AAFP — Feline Asthma Resources',
        url: 'https://catvets.com/',
      },
      {
        label: 'Cornell Feline Health Center — Asthma',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/asthma',
      },
      {
        label: 'Merck Veterinary Manual — Feline Lower Airway Disease',
        url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/feline-lower-airway-disease',
      },
    ],
  },

  'feline-urinary-obstruction-risk': {
    slug: 'feline-urinary-obstruction-risk',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Urinary obstruction in male cats is one of the most dangerous emergencies in feline medicine. While more common in young to middle-aged cats, senior males remain at risk — especially those with feline lower urinary tract disease (FLUTD), bladder stones, or stress.',
    overview: [
      'The narrow male feline urethra obstructs easily with mucus plugs, crystals, or small stones. Within 24–48 hours, an obstructed cat develops life-threatening hyperkalemia, acidosis, and acute kidney injury.',
      'FLUTD is an umbrella term that includes feline idiopathic cystitis (FIC), bacterial cystitis (uncommon in younger cats but more common in seniors with CKD or diabetes), and urolithiasis.',
      'Recognition is owner-driven: any male cat straining without producing urine should be considered obstructed until proven otherwise.',
    ],
    clinicalSigns: [
      'Repeated, unproductive litterbox visits',
      'Vocalizing in or near the litterbox',
      'Excessive grooming of the perineum',
      'Hiding, restlessness',
      'Vomiting in advanced obstruction',
      'Collapse and unresponsiveness — late, life-threatening',
    ],
    redFlags: [
      'Any straining in a male cat without confirmed urine production — emergency, go to ER',
      'Vomiting plus litterbox visits — likely advanced obstruction',
      'Collapse, weakness, slow breathing — hyperkalemic cardiac depression, true emergency',
    ],
    treatment: [
      'Emergency relief by urinary catheterization, IV fluids, and correction of hyperkalemia. Most cats are hospitalized for 2–3 days.',
      'After resolution, longer-term management addresses the underlying cause — FIC management for idiopathic cases, urinary diets for stone-formers, antibiotics for bacterial cystitis.',
      'Perineal urethrostomy (PU) is reserved for repeat obstructions — it creates a wider opening to dramatically reduce recurrence.',
      'Stress reduction is critical for FIC; multimodal environmental modification (MEMO) is a well-described approach.',
    ],
    lifestyleChanges: [
      'Provide one more litterbox than the number of cats; place them on every floor.',
      'Use clumping, low-dust, unscented litter that the cat prefers.',
      'Feed primarily wet food to increase urine volume.',
      'Provide water fountains and multiple water sources.',
      'Reduce stress: pheromones (Feliway), routine, vertical space, and elimination of inter-cat tension.',
    ],
    prognosis: [
      'Most cats recover well from a first obstruction with proper emergency care and prevention.',
      'Recurrence is common in non-PU cases. Cats with multiple obstructions or persistent recurrence are candidates for perineal urethrostomy.',
    ],
    recommendedProducts: [
      {
        name: 'Hill’s Prescription Diet c/d Multicare',
        description: 'Therapeutic urinary diet that reduces stone and crystal formation.',
        vendor: 'chewyrx',
        path: '/rx/hills-cd-cat',
      },
      {
        name: 'Royal Canin Urinary SO',
        description: 'Alternative urinary therapeutic diet.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-urinary-so',
      },
      {
        name: 'Feliway Classic Diffuser',
        description: 'Pheromone therapy reduces stress-related FIC episodes.',
        vendor: 'chewy',
        path: '/b/feliway',
      },
      {
        name: 'PetSafe Drinkwell Cat Fountain',
        description: 'Encourages steady hydration to dilute urine.',
        vendor: 'amazon',
        search: 'PetSafe Drinkwell cat fountain',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my cat is blocked?',
        answer:
          'A male cat straining in the litterbox without producing urine should be assumed blocked. Go to an emergency vet immediately — every hour matters.',
      },
      {
        question: 'Are female cats at risk too?',
        answer:
          'Female cats can develop FLUTD but rarely obstruct because the female urethra is wider.',
      },
      {
        question: 'Will my cat block again?',
        answer:
          'Recurrence is possible. Strict diet, stress reduction, and increased water intake reduce risk meaningfully. PU surgery is considered for repeat blockers.',
      },
      {
        question: 'What is PU surgery?',
        answer:
          'Perineal urethrostomy is a surgery that creates a wider permanent urinary opening. It dramatically reduces obstruction risk but requires specific aftercare.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus on FLUTD',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell Feline Health Center — FLUTD',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease',
      },
      {
        label: 'Merck Veterinary Manual — Feline Lower Urinary Tract Disease',
        url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/feline-lower-urinary-tract-disease',
      },
    ],
  },

  'feline-weight-loss': {
    slug: 'feline-weight-loss',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Unexplained weight loss in a senior cat is a clinically meaningful finding that should prompt a complete workup. The top differentials — hyperthyroidism, CKD, diabetes, IBD, and gastrointestinal lymphoma — are all manageable when identified early.',
    overview: [
      'Weight loss in senior cats is often missed because cats become thinner gradually. Body condition scoring at every visit catches what owners often miss in daily observation.',
      'A complete senior workup includes CBC, chemistry, T4, urinalysis with culture, blood pressure, and abdominal ultrasound. Specific markers (SDMA, cobalamin/folate, fPL) round out the picture.',
      'GI lymphoma — particularly small-cell intestinal lymphoma — is a common cause of weight loss in senior cats and has a good prognosis with appropriate therapy.',
    ],
    clinicalSigns: [
      'Visible weight loss, often along the spine and at the hips',
      'Reduced appetite or paradoxically increased appetite (hyperthyroidism, diabetes)',
      'Vomiting or diarrhea',
      'Decreased coat quality, dehydration',
      'Behavior change — hiding, decreased grooming',
    ],
    redFlags: [
      'Rapid weight loss over weeks',
      'Inability to maintain weight despite eating well',
      'Severe muscle wasting',
      'Concurrent jaundice or pallor',
    ],
    treatment: [
      'Treatment depends on the diagnosis. Hyperthyroidism, CKD, diabetes, IBD, and small-cell lymphoma all have specific, well-described therapies.',
      'Appetite stimulants (mirtazapine — Mirataz transdermal, capromorelin) can be added during the workup or as long-term support.',
      'Nutritional support is part of the management plan — high-calorie therapeutic diets, multiple small meals, and warming food to enhance aroma.',
    ],
    lifestyleChanges: [
      'Weigh weekly on a kitchen scale and keep a chart.',
      'Offer multiple small meals throughout the day.',
      'Warm canned food briefly to enhance aroma.',
      'Provide quiet, accessible eating areas away from other pets.',
    ],
    prognosis: [
      'Highly variable, depending on diagnosis. Most causes have good to excellent prognoses with appropriate management.',
      'Delayed diagnosis is the most common reason for poor outcomes — the workup should not be postponed.',
    ],
    recommendedProducts: [
      {
        name: 'Mirataz (Transdermal Mirtazapine)',
        description: 'Ear-applied appetite stimulant — first FDA-approved transdermal feline appetite stimulant.',
        vendor: 'chewyrx',
        path: '/rx/mirataz',
      },
      {
        name: 'Hill’s Prescription Diet a/d Critical Care',
        description: 'Calorie-dense recovery diet useful for cats with substantial weight loss.',
        vendor: 'chewyrx',
        path: '/rx/hills-ad',
      },
      {
        name: 'PetSafe Healthy Pet Simply Feed',
        description: 'Programmable feeder for delivering multiple small meals.',
        vendor: 'amazon',
        search: 'PetSafe Healthy Pet Simply Feed',
      },
    ],
    faqs: [
      {
        question: 'How much weight loss is concerning?',
        answer:
          'Loss of 5% or more of body weight in a senior cat warrants evaluation. Cats are small enough that even a half-pound matters.',
      },
      {
        question: 'My cat eats a lot but is losing weight — why?',
        answer:
          'Most commonly hyperthyroidism, diabetes, IBD, or GI lymphoma. A T4 plus chemistry plus abdominal ultrasound is a high-yield starting workup.',
      },
      {
        question: 'Should I use an appetite stimulant before testing?',
        answer:
          'Sometimes — Mirataz can support nutrition during the workup. But it should not replace the diagnostic search.',
      },
      {
        question: 'Is GI lymphoma a death sentence?',
        answer:
          'No. Small-cell GI lymphoma responds well to chlorambucil and prednisolone in many cats, with survival often exceeding two years.',
      },
    ],
    citations: [
      {
        label: 'AAFP Senior Care Guidelines',
        url: 'https://catvets.com/guidelines/practice-guidelines/senior-care-guidelines',
      },
      {
        label: 'Cornell Feline Health Center — Weight Loss in Cats',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics',
      },
      {
        label: 'Merck Veterinary Manual — Lymphoma in Cats',
        url: 'https://www.merckvetmanual.com/circulatory-system/canine-lymphoma/lymphoma-in-cats',
      },
    ],
  },

  'feline-hyperaldosteronism': {
    slug: 'feline-hyperaldosteronism',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Primary hyperaldosteronism (Conn’s syndrome) is an under-recognized cause of weakness, hypertension, and refractory hypokalemia in senior cats. The classic presentation includes neck ventroflexion and resistant high blood pressure.',
    overview: [
      'Hyperaldosteronism is over-production of aldosterone from an adrenal tumor or bilateral hyperplasia. Aldosterone excess drives potassium loss, sodium retention, and hypertension.',
      'Once considered rare, the condition is increasingly recognized in senior cats as routine blood pressure measurement has become more common.',
      'Diagnosis: persistent hypokalemia plus hypertension in a senior cat, with confirmation via plasma aldosterone, plasma renin activity, and adrenal imaging.',
    ],
    clinicalSigns: [
      'Episodic weakness, especially neck ventroflexion',
      'Difficulty jumping',
      'Resistant hypertension',
      'Polyuria and polydipsia',
      'Occasional sudden blindness from hypertensive retinopathy',
    ],
    redFlags: [
      'Sudden blindness — possible hypertensive retinal detachment',
      'Severe weakness and inability to walk',
      'Cardiac arrhythmias from severe hypokalemia',
    ],
    treatment: [
      'Adrenalectomy is curative for unilateral adrenal tumors but is technically demanding and often referred to specialty centers.',
      'Medical management uses spironolactone (a mineralocorticoid receptor antagonist), potassium supplementation, and amlodipine for blood pressure.',
      'Treating concurrent CKD and dietary potassium support are part of long-term care.',
    ],
    lifestyleChanges: [
      'Monitor blood pressure regularly.',
      'Provide easy access to food and water (multiple stations).',
      'Avoid sudden activity that could trigger collapse during severe hypokalemia episodes.',
    ],
    prognosis: [
      'Surgical patients often do well long-term. Medically managed patients can live for years with regular monitoring and dose adjustments.',
    ],
    recommendedProducts: [
      {
        name: 'Potassium Gluconate Supplement (Renal K+)',
        description: 'Potassium supplement used to correct chronic hypokalemia.',
        vendor: 'chewy',
        path: '/b/renal-k-cat',
      },
      {
        name: 'Spironolactone',
        description: 'Mineralocorticoid receptor antagonist used in medical management.',
        vendor: 'chewyrx',
        path: '/rx/spironolactone',
      },
      {
        name: 'Amlodipine Besylate',
        description: 'First-line antihypertensive for feline systemic hypertension.',
        vendor: 'chewyrx',
        path: '/rx/amlodipine-cat',
      },
    ],
    faqs: [
      {
        question: 'How common is feline hyperaldosteronism?',
        answer:
          'Historically considered rare, it is increasingly diagnosed as blood pressure and electrolyte screening become routine in senior cat care.',
      },
      {
        question: 'Is surgery the best option?',
        answer:
          'For unilateral adrenal tumors in stable cats, adrenalectomy can be curative. Medical management is a good alternative for non-surgical candidates.',
      },
      {
        question: 'Can it be confused with CKD?',
        answer:
          'Yes. CKD and hyperaldosteronism can coexist, and many of the signs overlap. Persistent hypokalemia with hypertension despite CKD therapy should prompt aldosterone evaluation.',
      },
      {
        question: 'Is this related to Cushing’s?',
        answer:
          'Both involve the adrenal glands, but Cushing’s is over-production of cortisol while Conn’s is over-production of aldosterone. They have different signs and different workups.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus on Systemic Hypertension in Cats',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell Feline Health Center — Endocrine Disease',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics',
      },
      {
        label: 'Merck Veterinary Manual — Hyperaldosteronism in Cats',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hyperaldosteronism-in-animals',
      },
    ],
  },
}
