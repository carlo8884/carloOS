// Feline senior conditions — partial 2 (5 conditions)

export const FELINE_CONDITIONS_2 = {
  'periodontal-disease-cats': {
    slug: 'periodontal-disease-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Dental disease is the most common health problem in adult cats. By age 3, more than 70% of cats have measurable periodontal disease. In senior cats, untreated dental disease produces silent, chronic pain that meaningfully diminishes quality of life.',
    overview: [
      'Feline periodontal disease follows the same plaque–tartar–gingivitis–attachment-loss progression as in dogs and humans. Once attachment is lost, it does not return.',
      'Cats also suffer from tooth resorptive lesions (FORLs) and stomatitis — distinct disease processes with their own management.',
      'A complete oral health assessment and treatment (COHAT) under anesthesia with full-mouth radiographs is the only way to diagnose and properly treat dental disease in cats. Anesthesia-free dentistry does not address below-gumline disease.',
    ],
    clinicalSigns: [
      'Bad breath (often subtle in cats — owners are not always close enough to notice)',
      'Reluctance to eat hard food; chewing on one side',
      'Drooling, especially during eating',
      'Pawing at the face, head shaking',
      'Visible tartar at the gumline, red gum margins',
      'Weight loss or coat decline from chronic oral pain',
    ],
    redFlags: [
      'Facial swelling — possible tooth root abscess',
      'Heavy drooling with blood',
      'Refusal to eat — needs same-day evaluation',
      'Severe oral pain with foul-smelling breath — possible stomatitis',
    ],
    treatment: [
      'A COHAT under general anesthesia is the foundation of treatment. Most senior cats benefit from one every 12–24 months.',
      'Extraction of non-salvageable teeth is often the most humane treatment, and cats do remarkably well with multiple extractions — most adapt to eating canned food easily.',
      'Daily home brushing with feline enzymatic toothpaste is the gold standard for prevention; many cats can be trained to accept brushing over weeks.',
      'VOHC-accepted dental treats and water additives are reasonable adjuncts for cats that will not tolerate brushing.',
    ],
    lifestyleChanges: [
      'Introduce home brushing gradually — start with letting the cat lick toothpaste from your finger.',
      'Feed a dental-care diet (Hill’s t/d) for cats willing to chew kibble.',
      'Schedule professional dental procedures on a calendar — owners rarely overestimate how often their cat needs them.',
      'Monitor for changes in chewing or grooming patterns; cats hide oral pain.',
    ],
    prognosis: [
      'With consistent care, periodontal disease is well-controlled in cats. Even cats with most or all teeth extracted typically eat well and thrive.',
      'Untreated dental disease is a major contributor to chronic stress and reduced quality of life in senior cats.',
    ],
    recommendedProducts: [
      {
        name: 'Virbac C.E.T. Enzymatic Toothpaste',
        description: 'Veterinary enzymatic toothpaste in cat-acceptable flavors.',
        vendor: 'chewy',
        path: '/b/virbac-cet-cat',
      },
      {
        name: 'Hill’s Prescription Diet t/d Dental Care for Cats',
        description: 'Therapeutic dental kibble engineered to reduce plaque and tartar.',
        vendor: 'chewyrx',
        path: '/rx/hills-td-cat',
      },
      {
        name: 'Greenies Feline Dental Treats',
        description: 'VOHC-accepted dental treats — useful adjunct for cats that will not accept brushing.',
        vendor: 'chewy',
        path: '/b/greenies-cat',
      },
    ],
    faqs: [
      {
        question: 'Is anesthesia safe for older cats?',
        answer:
          'Yes, when performed with pre-anesthetic bloodwork, IV fluids, and proper monitoring. Modern protocols are well-tolerated by healthy senior cats.',
      },
      {
        question: 'My cat still eats — does her mouth hurt?',
        answer:
          'Probably. Cats are extraordinarily good at hiding oral pain. Behavior change after extractions is often dramatic.',
      },
      {
        question: 'How often do most senior cats need dental procedures?',
        answer:
          'Every 12–24 months for most; some breeds and individuals need annual cleanings.',
      },
      {
        question: 'Is dry food better for teeth than canned?',
        answer:
          'Standard dry food has little dental benefit. Dental-formula kibble (like Hill’s t/d) is engineered for the purpose and does have evidence.',
      },
    ],
    citations: [
      {
        label: 'AAHA Dental Care Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/dental-care/dental-care-home/',
      },
      {
        label: 'VOHC — Accepted Products List',
        url: 'https://vohc.org/accepted-products/',
      },
      {
        label: 'Cornell Feline Health Center — Dental Disease',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-dental-disease',
      },
    ],
  },

  'feline-tooth-resorption': {
    slug: 'feline-tooth-resorption',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Feline odontoclastic resorptive lesions (FORLs, or tooth resorption) are progressive, painful destructions of tooth structure. They affect an estimated 30–70% of senior cats and are diagnosed only with dental radiographs taken under anesthesia.',
    overview: [
      'Tooth resorption begins below the gumline, often invisible on awake exam. Odontoclasts destroy tooth root and crown over time. The exposed dentin contacts oral bacteria and inflammation, producing significant pain.',
      'The cause is unknown despite decades of research. Hypotheses include dietary, metabolic, and immune contributions.',
      'Definitive diagnosis requires full-mouth dental radiographs under anesthesia. Two classes — Type 1 (associated with periodontal disease, intact roots) and Type 2 (ankylosis with root replacement by bone) — guide treatment.',
    ],
    clinicalSigns: [
      'Subtle behavior change at meals — turning the head, chattering, dropping food',
      'Pawing at the mouth',
      'Drooling, sometimes bloody',
      'Hesitation when grooming or being touched on the face',
      'Visible pink defects at the gumline of affected teeth (late-stage)',
    ],
    redFlags: [
      'Heavy drooling with blood',
      'Refusal to eat',
      'Facial swelling',
      'Suddenly aggressive when touched on the head',
    ],
    treatment: [
      'Extraction is the standard treatment. The technique varies by FORL type — Type 1 requires full extraction; Type 2 may be managed with crown amputation if the root is fully resorbed.',
      'Anti-inflammatories and antibiotics are not effective long-term substitutes for extraction.',
      'After extraction, cats are typically dramatically more comfortable within days.',
    ],
    lifestyleChanges: [
      'Schedule full-mouth dental radiographs at every senior cat dental procedure — not just for cats with visible lesions.',
      'Feed canned food during recovery; most cats return to dry food within a week or two.',
    ],
    prognosis: [
      'Excellent after appropriate extraction. Affected teeth are gone; new ones do not develop FORLs.',
      'Other teeth may develop FORLs over time, so periodic radiographic monitoring is important.',
    ],
    recommendedProducts: [
      {
        name: 'Royal Canin Dental Diet for Cats',
        description: 'Therapeutic kibble for ongoing dental care after FORL extractions.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-dental-cat',
      },
      {
        name: 'Wet Food Sample Variety (Royal Canin or Hill’s recovery)',
        description: 'For comfortable eating during the post-extraction recovery period.',
        vendor: 'chewy',
        path: '/b/wet-food-variety',
      },
    ],
    faqs: [
      {
        question: 'Why are FORLs so painful?',
        answer:
          'They expose the sensitive inner tooth structure to the oral environment, similar to a human cavity but typically more extensive.',
      },
      {
        question: 'Are FORLs preventable?',
        answer:
          'Not currently; the cause is unknown. Early detection through radiographs and prompt extraction prevent ongoing pain.',
      },
      {
        question: 'Will my cat have trouble eating after extractions?',
        answer:
          'Most cats eat well within a few days and many continue to eat dry food long-term despite multiple extractions.',
      },
    ],
    citations: [
      {
        label: 'AVDC — Tooth Resorption',
        url: 'https://www.avdc.org/',
      },
      {
        label: 'AAHA Dental Care Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/dental-care/dental-care-home/',
      },
      {
        label: 'Cornell Feline Health Center — Dental Disease',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-dental-disease',
      },
    ],
  },

  'hypertrophic-cardiomyopathy': {
    slug: 'hypertrophic-cardiomyopathy',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Hypertrophic cardiomyopathy (HCM) is the most common heart disease of cats and a frequent cause of sudden death and arterial thromboembolism. It is often silent until a crisis. Screening with NT-proBNP and echocardiography is increasingly part of senior cat preventive care.',
    overview: [
      'HCM is a primary heart muscle disease characterized by thickening of the left ventricular wall, which impairs filling and increases the risk of heart failure, syncope, and thromboembolic events.',
      'The disease has a strong genetic basis in several breeds, especially Maine Coon and Ragdoll, but it is common in mixed-breed cats as well.',
      'Diagnosis requires echocardiography. NT-proBNP can be used as a screening test in cats with murmurs or other risk factors; positive results lead to echo.',
    ],
    clinicalSigns: [
      'Often completely silent until a crisis',
      'New murmur, gallop rhythm, or arrhythmia detected on exam',
      'Increased respiratory rate or effort (over 30/min at rest is abnormal)',
      'Open-mouth breathing during a stressful event',
      'Sudden hindlimb weakness or paralysis with painful cold legs (saddle thrombus)',
      'Sudden collapse or death',
    ],
    redFlags: [
      'Open-mouth breathing in a cat — emergency',
      'Sudden hindlimb paralysis with cold, painful legs — saddle thrombus, emergency',
      'Persistent respiratory rate over 40/min at rest',
      'Collapse or syncope',
    ],
    treatment: [
      'There is no current cure or proven preventive medication for asymptomatic HCM. Therapy targets specific complications.',
      'In congestive heart failure, furosemide and pimobendan are used to remove fluid and improve cardiac output.',
      'Antithrombotic therapy with clopidogrel (Plavix) is the standard for cats at increased risk of thromboembolism — typically those with severe left atrial enlargement.',
      'Beta blockers (atenolol) may be used in cats with significant left ventricular outflow tract obstruction or arrhythmias.',
      'Cardiology referral and serial echocardiograms guide treatment intensity over time.',
    ],
    lifestyleChanges: [
      'Track resting respiratory rate at home, ideally daily; consistent values above 30/min are concerning.',
      'Minimize stress; long handling sessions or travel may precipitate crises.',
      'Avoid corticosteroid use when possible; they have been associated with CHF onset in HCM cats.',
      'Inform every veterinarian of the HCM diagnosis before any procedure.',
    ],
    prognosis: [
      'Highly variable. Many cats with asymptomatic HCM live years without significant impact. Once CHF or thromboembolism occurs, prognosis is more guarded — median survival after CHF onset is 6–18 months.',
      'Clopidogrel substantially reduces thromboembolic events in at-risk cats.',
    ],
    recommendedProducts: [
      {
        name: 'Clopidogrel (Plavix)',
        description: 'Antiplatelet therapy used in HCM cats with significant left atrial enlargement.',
        vendor: 'chewyrx',
        path: '/rx/clopidogrel-cat',
      },
      {
        name: 'Furosemide (for CHF management)',
        description: 'Loop diuretic prescribed by your veterinarian for fluid management in heart failure.',
        vendor: 'chewyrx',
        path: '/rx/furosemide',
      },
    ],
    faqs: [
      {
        question: 'Should every senior cat be screened?',
        answer:
          'Cats with murmurs, gallops, arrhythmias, breed risk (Maine Coon, Ragdoll), or planned anesthesia benefit from screening with NT-proBNP and echocardiogram.',
      },
      {
        question: 'Is HCM preventable?',
        answer:
          'No currently proven prevention. In breeding lines, genetic testing helps reduce incidence.',
      },
      {
        question: 'What is saddle thrombus?',
        answer:
          'A blood clot from the heart lodging at the aortic bifurcation, causing sudden, extremely painful hindlimb paralysis. It is a true emergency and one of the most distressing presentations of HCM.',
      },
      {
        question: 'Can my cat exercise normally?',
        answer:
          'Most cats with HCM continue to exercise as desired. Stress and over-exertion may be precipitants of CHF in advanced disease; your cardiologist can guide.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Feline Cardiomyopathies',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell Feline Health Center — Cardiomyopathy',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy',
      },
      {
        label: 'Merck Veterinary Manual — Cardiomyopathies in Cats',
        url: 'https://www.merckvetmanual.com/circulatory-system/cardiomyopathy/cardiomyopathies-in-cats',
      },
    ],
  },

  'cataracts-vision-loss-cats': {
    slug: 'cataracts-vision-loss-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Vision loss in senior cats is most commonly caused by hypertensive retinopathy from undetected high blood pressure. Cataracts and uveitis are less common in cats than dogs. Acute blindness in a senior cat is a same-day emergency.',
    overview: [
      'The most overlooked cause of feline blindness is systemic hypertension secondary to CKD, hyperthyroidism, or primary hypertension. Hypertensive retinopathy and retinal detachment can develop suddenly.',
      'Other causes include uveitis (often associated with infectious disease — FeLV, FIV, toxoplasmosis, FIP), cataracts (often secondary to chronic uveitis), and progressive retinal atrophy.',
      'Diagnosis includes fundic exam, blood pressure measurement, and workup for underlying systemic disease. Ophthalmology referral is appropriate for any acute or unexplained blindness.',
    ],
    clinicalSigns: [
      'Bumping into furniture',
      'Dilated pupils that do not respond to bright light',
      'Disorientation in unfamiliar environments',
      'Reluctance to jump or move around',
      'Sudden change in eye color or appearance (red eye, cloudy eye)',
    ],
    redFlags: [
      'Acute blindness — emergency; possible hypertensive retinal detachment',
      'Red or painful eye',
      'Cloudy cornea or visibly different pupil sizes',
      'New blindness combined with weight loss or PU/PD — workup for underlying CKD/hyperthyroidism',
    ],
    treatment: [
      'Hypertensive retinopathy is treated by addressing the underlying disease and starting amlodipine to control blood pressure. If treatment is started promptly, some vision recovery is possible after retinal reattachment.',
      'Uveitis is treated by addressing the underlying infectious or inflammatory cause and using topical anti-inflammatories.',
      'Cataract surgery is occasionally performed in cats but is less common than in dogs.',
      'Blind cats adapt well to a stable home environment.',
    ],
    lifestyleChanges: [
      'Do not move furniture or food/water/litterbox locations.',
      'Speak before approaching to avoid startling.',
      'Block off stair access until the cat learns navigation.',
      'Keep the cat indoors permanently; outdoor blind cats are at substantial risk.',
    ],
    prognosis: [
      'When hypertensive retinopathy is treated within 24–48 hours of acute blindness, partial vision recovery is possible. Delayed treatment is associated with permanent vision loss.',
      'Blind cats living in stable indoor environments generally have good quality of life.',
    ],
    recommendedProducts: [
      {
        name: 'Amlodipine Besylate',
        description: 'First-line antihypertensive for cats; prescribed by your veterinarian.',
        vendor: 'chewyrx',
        path: '/rx/amlodipine-cat',
      },
      {
        name: 'Pheromone Diffuser (Feliway)',
        description: 'Helps newly blind cats adapt to their environment with reduced anxiety.',
        vendor: 'chewy',
        path: '/b/feliway',
      },
    ],
    faqs: [
      {
        question: 'My cat suddenly cannot see — what should I do tonight?',
        answer:
          'Go to a veterinary emergency clinic. Sudden blindness in a senior cat is often hypertensive and time-sensitive.',
      },
      {
        question: 'Can the vision come back?',
        answer:
          'Sometimes, if hypertensive disease is treated rapidly. Delays beyond a few days substantially reduce the chance of recovery.',
      },
      {
        question: 'Do blind cats live well?',
        answer:
          'Yes, in stable indoor environments. They navigate by memory, whiskers, and scent. Keeping the layout consistent is the most important thing an owner can do.',
      },
      {
        question: 'Why is blood pressure measured in cats?',
        answer:
          'Because hypertension is common with CKD and hyperthyroidism and is one of the leading causes of feline blindness. It is also asymptomatic until something fails.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Systemic Hypertension in Cats',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell Feline Health Center — Hypertension',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertension',
      },
      {
        label: 'ACVO — Ophthalmic Diseases in Cats',
        url: 'https://www.acvo.org/',
      },
    ],
  },

  'feline-cognitive-dysfunction': {
    slug: 'feline-cognitive-dysfunction',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Feline cognitive dysfunction (FCD) is age-related cognitive decline in older cats. Loud nighttime vocalization, disorientation, and changes in interaction are common. Many cases are diagnosable and treatable, but most go unrecognized.',
    overview: [
      'FCD has many parallels with canine CCD and human dementia. Studies estimate that around 30% of cats aged 11–14 and over 50% of cats over 15 show cognitive signs.',
      'Common signs are organized by the DISHA framework as in dogs: Disorientation, Interaction changes, Sleep–wake disruption, House-soiling, and Activity-level changes (often increased vocalization at night).',
      'Diagnosis is clinical, after ruling out hyperthyroidism, hypertension, CKD, pain, and sensory loss. Owner questionnaires and careful history-taking are essential.',
    ],
    clinicalSigns: [
      'Loud yowling at night, often in hallways or at doorways',
      'Disorientation — staring at walls, going to the wrong side of a familiar door',
      'Reduced interaction with familiar people or pets',
      'New litterbox lapses without urinary disease',
      'Sleep–wake reversal',
      'Decreased grooming',
    ],
    redFlags: [
      'Sudden disorientation over hours to days — possible vestibular disease or stroke',
      'Seizures, ataxia, head tilt — neurologic workup',
      'New vocalization with weight loss — workup for hyperthyroidism and hypertension',
      'New aggression with pain — assess for OA and dental disease',
    ],
    treatment: [
      'No FDA-approved therapy exists for FCD in cats, but several interventions are used off-label.',
      'Selegiline is used off-label in some cats with modest reported benefit.',
      'SAM-e (Novifit), omega-3 fatty acids, and antioxidant supplements (Senilife) are commonly recommended.',
      'Anxiety-targeted interventions — pheromones (Feliway), trazodone, gabapentin for nighttime sedation — substantially reduce sundowning-style vocalization.',
      'Environmental enrichment, predictable routine, nightlights, and accessible food/water/litter are foundational.',
    ],
    lifestyleChanges: [
      'Keep litterboxes, food, and resting spots in the same places.',
      'Provide nightlights along navigation paths.',
      'Use multiple low-sided litterboxes on every floor.',
      'Maintain a predictable feeding and play routine.',
      'Use Feliway diffusers continuously in households with FCD cats.',
    ],
    prognosis: [
      'FCD is progressive. With multimodal management, owners often gain 1–2 years of good quality time. Sleep-cycle disruption is often the symptom that drives the end-of-life conversation.',
    ],
    recommendedProducts: [
      {
        name: 'Feliway Classic Diffuser',
        description: 'Synthetic feline facial pheromone for environmental anxiety reduction.',
        vendor: 'chewy',
        path: '/b/feliway',
      },
      {
        name: 'Senilife (Cognitive Support Supplement)',
        description: 'Antioxidant blend used as an adjunct in feline cognitive support.',
        vendor: 'amazon',
        search: 'Senilife for cats',
      },
      {
        name: 'Low-Sided Litter Box',
        description: 'Improves accessibility for senior cats with cognitive change and/or arthritis.',
        vendor: 'amazon',
        search: 'low-sided cat litter box',
      },
    ],
    faqs: [
      {
        question: 'Why does my senior cat yowl at night?',
        answer:
          'Cognitive dysfunction, hyperthyroidism, hypertension, pain, and sensory loss are all on the differential. A full senior workup (T4, blood pressure, kidney values, orthopedic exam) is the right starting point.',
      },
      {
        question: 'Are there medications for FCD?',
        answer:
          'Several are used off-label including selegiline, SAM-e, and anxiolytics like trazodone or gabapentin. Effectiveness is variable; multimodal management tends to outperform any single intervention.',
      },
      {
        question: 'Will my cat forget me?',
        answer:
          'Bonded interactions usually remain, though intensity and frequency may decline. Cats commonly continue to seek their primary person even as cognition declines.',
      },
      {
        question: 'When is it time to consider euthanasia?',
        answer:
          'When the cat is consistently distressed at night, unable to use the litterbox, has lost interest in food and interaction, and quality of life is meaningfully diminished despite intervention. The HHHHHMM scale is a useful structured tool.',
      },
    ],
    citations: [
      {
        label: 'AAFP Senior Care Guidelines',
        url: 'https://catvets.com/guidelines/practice-guidelines/senior-care-guidelines',
      },
      {
        label: 'Cornell Feline Health Center — Behavior of Older Cats',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics',
      },
      {
        label: 'Merck Veterinary Manual — Geriatric Behavioral Problems',
        url: 'https://www.merckvetmanual.com/behavior/behavioral-problems-of-dogs/behavioral-problems-of-geriatric-dogs-and-cats',
      },
    ],
  },
}
