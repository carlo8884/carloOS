// Feline senior conditions — partial 1 (5 conditions)

export const FELINE_CONDITIONS_1 = {
  'chronic-kidney-disease-cats': {
    slug: 'chronic-kidney-disease-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Chronic kidney disease (CKD) is the single most common serious diagnosis in senior cats. Studies estimate that 30–50% of cats over age 15 have some degree of CKD. With early identification and consistent management, many affected cats live for years of comfortable life.',
    overview: [
      'Feline CKD is a progressive, irreversible decline in kidney function. Unlike acute kidney injury, CKD develops gradually over months to years and most cats show clinical signs only after losing roughly two-thirds of nephron function.',
      'The IRIS staging system organizes CKD by creatinine and SDMA values, with sub-staging by urine protein-to-creatinine ratio and blood pressure. Staging guides treatment decisions including diet, antiproteinuric therapy, antihypertensive therapy, and phosphorus binders.',
      'Many feline CKD cases are idiopathic. Identified contributors include chronic interstitial nephritis, hypertension, polycystic kidney disease (Persians), pyelonephritis, and renal lymphoma.',
    ],
    clinicalSigns: [
      'Increased drinking and urination — often the first owner-observed sign',
      'Weight loss, especially muscle loss along the spine',
      'Decreased or finicky appetite',
      'Vomiting, especially in the morning',
      'Bad breath with a chemical odor',
      'Dull, unkempt coat — cats with CKD often groom less',
    ],
    redFlags: [
      'Sudden complete loss of appetite or rapid weight loss',
      'Persistent vomiting or hematemesis — uremic gastritis can cause GI bleeding',
      'Acute weakness, collapse, or seizures — uremic encephalopathy or severe electrolyte derangement',
      'Acute blindness — possible hypertensive retinopathy from undetected hypertension',
    ],
    treatment: [
      'Therapeutic kidney diets — Hill’s k/d, Royal Canin Renal Support, Purina NF — have decades of evidence demonstrating slower progression and improved survival. Cats are notoriously selective; transitioning slowly and offering multiple flavors and textures improves acceptance.',
      'Subcutaneous fluids are a cornerstone of management for IRIS Stage 2b and beyond. Most owners learn to administer them at home; weekly to daily fluid therapy can dramatically improve appetite, energy, and comfort.',
      'Phosphate binders are added when phosphorus rises despite diet. Common options include aluminum hydroxide, lanthanum carbonate, and Epakitin.',
      'Hypertension is treated with amlodipine. Blood pressure should be measured at every senior cat visit; many CKD cats have silent hypertension that contributes to retinal damage and faster renal decline.',
      'Anti-nausea medication (maropitant, ondansetron) and appetite stimulants (mirtazapine, capromorelin) preserve quality of life. Mirtazapine is available as a transdermal preparation (Mirataz), which most cats accept easily.',
    ],
    lifestyleChanges: [
      'Place several water sources around the home — multiple bowls, a fountain, and (for some cats) a slowly dripping faucet.',
      'Offer a kidney diet as the primary food; if the cat refuses, work with your veterinarian on alternatives rather than abandoning therapeutic nutrition altogether.',
      'Provide quiet, accessible litter boxes — at least one more box than the number of cats, with low sides for arthritic seniors.',
      'Keep a simple home log: appetite, water intake, vomiting episodes, weight, litterbox use.',
      'Reduce stress; chronic stress measurably raises blood pressure and worsens kidney function.',
    ],
    prognosis: [
      'Median survival after diagnosis varies by stage: IRIS Stage 2 cats often live 2–3+ years, Stage 3 cats roughly 1–2 years, and Stage 4 cats months to a year. Individual variation is substantial and well-managed cats often exceed median expectations.',
      'Quality of life is generally good if appetite, hydration, and blood pressure are well controlled. The most common end-of-life concern is progressive inappetence and weight loss despite therapy.',
    ],
    recommendedProducts: [
      {
        name: 'Hill’s Prescription Diet k/d Kidney Care',
        description:
          'The longest-studied feline renal diet. Available in multiple flavors and textures.',
        vendor: 'chewyrx',
        path: '/rx/hills-kd-cat',
      },
      {
        name: 'Royal Canin Renal Support',
        description:
          'Alternative renal diet line with multiple textures (A, F, S, T) chosen by palatability profile.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-renal-support-cat',
      },
      {
        name: 'PetSafe Drinkwell Cat Fountain',
        description:
          'Encourages steady hydration — particularly important for CKD cats.',
        vendor: 'amazon',
        search: 'PetSafe Drinkwell cat fountain',
      },
      {
        name: 'Subcutaneous Fluid Kit (Lactated Ringer’s + giving set)',
        description:
          'For home subQ fluid therapy on veterinary instruction — central to mid- and late-stage feline CKD management.',
        vendor: 'chewyrx',
        path: '/rx/lactated-ringers',
      },
      {
        name: 'Mirataz (Transdermal Mirtazapine)',
        description:
          'Ear-applied appetite stimulant; first FDA-approved transdermal feline appetite stimulant.',
        vendor: 'chewyrx',
        path: '/rx/mirataz',
      },
    ],
    faqs: [
      {
        question: 'What is SDMA and why does it matter for cats?',
        answer:
          'SDMA is a kidney function marker that rises earlier than creatinine — often when only 25–40% of function has been lost. Adding SDMA to annual senior cat bloodwork catches CKD at a much more treatable stage than waiting for creatinine to rise.',
      },
      {
        question: 'Should every senior cat be on a kidney diet?',
        answer:
          'No. Kidney diets are formulated for cats with confirmed CKD. Healthy senior cats should be on a high-quality maintenance diet. Confirm a diagnosis before starting a therapeutic diet.',
      },
      {
        question: 'How do I give subcutaneous fluids at home?',
        answer:
          'Your veterinary team will demonstrate. The bag is warmed; the needle is placed under the loose scruff skin; the fluid (typically 100–150 mL per session) runs in over a few minutes. Most cats tolerate it well, especially when paired with a high-value treat afterward.',
      },
      {
        question: 'Is my cat in pain from CKD?',
        answer:
          'CKD itself is not typically painful. Discomfort comes from nausea, oral ulcers, dehydration, and hypertensive headaches — all of which can be managed.',
      },
      {
        question: 'How often should my cat have rechecks?',
        answer:
          'Once-stable cats are typically rechecked every 3–6 months with bloodwork, urinalysis, and blood pressure. Late-stage cats may need more frequent visits.',
      },
    ],
    citations: [
      {
        label: 'IRIS Kidney — Staging of CKD',
        url: 'http://www.iris-kidney.com/guidelines/staging.html',
      },
      {
        label: 'Cornell Feline Health Center — Chronic Kidney Disease',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease',
      },
      {
        label: 'AAFP Senior Care Guidelines',
        url: 'https://catvets.com/guidelines/practice-guidelines/senior-care-guidelines',
      },
    ],
  },

  'hyperthyroidism-cats': {
    slug: 'hyperthyroidism-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Hyperthyroidism is the most common endocrine disease of older cats. The classic presentation — weight loss despite ravenous appetite — is so characteristic that veterinarians screen routinely with T4 levels in cats over 10. Treatment options range from daily oral medication to a single curative radioactive iodine treatment.',
    overview: [
      'Feline hyperthyroidism is caused by autonomous hormone production from one or both thyroid lobes, usually due to benign adenomatous hyperplasia. Malignant thyroid carcinoma accounts for less than 2% of cases.',
      'The disease typically presents after age 10 and is one of the most common reasons for unexplained weight loss in senior cats. Prevalence among cats over 10 in some surveys exceeds 10%.',
      'Diagnosis is straightforward in most cases: an elevated total T4 confirms the diagnosis. When T4 is borderline, free T4 by equilibrium dialysis or a T3 suppression test may be added.',
    ],
    clinicalSigns: [
      'Weight loss despite an excellent (often ravenous) appetite',
      'Increased thirst and urination',
      'Hyperactivity, vocalization, especially at night',
      'Unkempt or matted coat',
      'Intermittent vomiting and/or diarrhea',
      'Rapid heart rate, sometimes with a heart murmur',
      'Subtle behavior change — restlessness, irritability',
    ],
    redFlags: [
      'Acute weakness, collapse, or respiratory distress — possible cardiac decompensation from untreated disease',
      'New-onset blindness — possible hypertensive retinopathy (a common complication)',
      'Severe weight loss with poor body condition — long-undiagnosed disease',
    ],
    treatment: [
      'Methimazole (oral or transdermal) is the most common first-line treatment. It blocks thyroid hormone synthesis. The dose is titrated to a normal T4; most cats are well-controlled on 2.5–5 mg twice daily.',
      'Radioactive iodine (I-131) is the gold-standard curative treatment. A single subcutaneous injection at a specialty center destroys the abnormal thyroid tissue and resolves hyperthyroidism permanently in roughly 95% of cases. It is the most expensive option upfront but is often the most cost-effective long-term.',
      'A prescription iodine-restricted diet (Hill’s y/d) controls hyperthyroidism by limiting iodine intake. It requires that y/d be the only food the cat eats — an absolute restriction that can be challenging in multi-cat households.',
      'Surgical thyroidectomy is an option but is rarely chosen today due to higher complication rates compared with I-131.',
      'Underlying or unmasked CKD is a critical consideration: hyperthyroidism artificially boosts glomerular filtration, and treatment can reveal underlying CKD that was masked by elevated thyroid status.',
    ],
    lifestyleChanges: [
      'Once treated, cats often gain weight rapidly — adjust portions to avoid obesity.',
      'Monitor for hidden CKD with bloodwork before and after treatment.',
      'For methimazole, learn proper handling: gloves when administering, wash hands after touching crushed tablets.',
      'For transdermal methimazole, apply only to the inside of the ear pinna; rotate ears daily.',
      'Maintain steady blood pressure monitoring — hypertension is common and can persist after T4 normalizes.',
    ],
    prognosis: [
      'Prognosis is excellent for most hyperthyroid cats. Median survival after I-131 treatment exceeds 4 years; many cats live a normal lifespan after diagnosis.',
      'The most common complication is unmasking of underlying CKD; aggressive monitoring during the early treatment period catches this in time for effective management.',
    ],
    recommendedProducts: [
      {
        name: 'Methimazole (Felimazole or Compounded)',
        description:
          'Standard first-line oral antithyroid medication; transdermal compounded formulations are widely used in cats that refuse pills.',
        vendor: 'chewyrx',
        path: '/rx/methimazole-cat',
      },
      {
        name: 'Hill’s Prescription Diet y/d Thyroid Care',
        description:
          'Iodine-restricted therapeutic diet; only effective if it is the sole food.',
        vendor: 'chewyrx',
        path: '/rx/hills-yd',
      },
      {
        name: 'Pill Pockets for Cats',
        description:
          'Useful for owners administering oral methimazole — especially helpful when the cat dislikes the taste of crushed tablets.',
        vendor: 'chewy',
        path: '/b/greenies-pill-pockets-cat',
      },
    ],
    faqs: [
      {
        question: 'Is radioactive iodine treatment worth it?',
        answer:
          'For many owners, yes. I-131 cures the disease in a single visit, eliminates the need for daily medication, and total lifetime cost is often lower than a decade of methimazole plus monitoring.',
      },
      {
        question: 'My cat hides when I try to give a pill — what should I do?',
        answer:
          'Transdermal methimazole (compounded by a pharmacy and applied to the ear) is well-tolerated by most cats. Discuss this option with your veterinarian.',
      },
      {
        question: 'Why does my cat need bloodwork every few months?',
        answer:
          'Because methimazole dose requirements drift, and because treatment can unmask underlying CKD. Periodic T4, kidney values, and blood pressure together guide ongoing therapy.',
      },
      {
        question: 'Will my cat have to eat y/d forever?',
        answer:
          'Yes, if y/d is the chosen treatment. The moment iodine intake rises (a single treat, eating another cat’s food), hormone production rebounds. For households where strict feeding is not feasible, methimazole or I-131 is preferred.',
      },
    ],
    citations: [
      {
        label: 'AAFP Hyperthyroidism Guidelines',
        url: 'https://catvets.com/guidelines/practice-guidelines/hyperthyroidism-guidelines',
      },
      {
        label: 'Cornell Feline Health Center — Hyperthyroidism',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hyperthyroidism-cats',
      },
      {
        label: 'Merck Veterinary Manual — Hyperthyroidism in Cats',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hyperthyroidism-in-cats',
      },
    ],
  },

  'diabetes-mellitus-cats': {
    slug: 'diabetes-mellitus-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Feline diabetes mellitus is most often a type-2-like disease driven by obesity and insulin resistance. Unlike dogs, many newly diagnosed cats can go into diabetic remission with prompt insulin therapy and a strict low-carbohydrate diet.',
    overview: [
      'Feline diabetes is characterized by hyperglycemia, glucosuria, and insulin resistance, often combined with progressive beta-cell loss. The strongest risk factors are obesity, sedentary indoor lifestyle, advanced age, and male sex.',
      'The classic presentation is a middle-aged or senior overweight cat with polyuria, polydipsia, weight loss, and increased appetite. Plantigrade stance — walking on the hocks — is a late sign caused by diabetic neuropathy.',
      'Diagnosis combines persistent fasting hyperglycemia, glucosuria, and clinical signs. Because stress markedly raises feline blood glucose, fructosamine or a continuous glucose monitor is often used to confirm.',
    ],
    clinicalSigns: [
      'Polyuria and polydipsia',
      'Weight loss despite normal or increased appetite',
      'Plantigrade stance (walking on the hocks)',
      'Decreased grooming, unkempt coat',
      'Lethargy or hiding',
      'In severe or untreated cases: vomiting, dehydration, weakness — DKA',
    ],
    redFlags: [
      'Vomiting, weakness, rapid breathing in a diabetic cat — possible DKA, an emergency',
      'Hypoglycemia signs (wobbliness, disorientation, seizures) — rub Karo on gums and seek emergency care',
      'Sudden hindlimb weakness with painful breathing — possible saddle thrombus in cats with concurrent cardiac disease',
    ],
    treatment: [
      'Insulin glargine (Lantus) is the most commonly used first-line insulin in cats because of its long, smooth action profile and the relatively high rate of remission when paired with strict carbohydrate restriction. ProZinc is an FDA-approved feline insulin alternative.',
      'A low-carbohydrate, high-protein diet (typically canned food labeled for diabetics) is essential. Carbohydrate restriction substantially reduces insulin requirements and increases the chance of remission.',
      'Home glucose monitoring with a continuous glucose monitor (FreeStyle Libre) or a pet glucometer allows tight monitoring with minimal stress. Spot checks combined with periodic fructosamine give a clear picture of control.',
      'Remission — the ability to discontinue insulin while maintaining normal glucose — is possible in many newly diagnosed cats treated promptly. The window for remission is widest in the first 3–6 months after diagnosis.',
    ],
    lifestyleChanges: [
      'Convert to a low-carbohydrate canned diet immediately; dry food is generally too carbohydrate-dense for diabetic cats.',
      'Feed at consistent times, twice daily, coinciding with insulin doses.',
      'Encourage activity — climbing structures, hunting puzzles, gentle play.',
      'Track weight weekly; ideal body condition meaningfully improves remission chances.',
      'Keep Karo corn syrup or honey accessible for emergency hypoglycemia.',
    ],
    prognosis: [
      'With prompt insulin therapy and dietary management, many cats achieve diabetic remission. Cats that do not remit can still live for years with well-controlled diabetes.',
      'The major risk to long-term outcome is DKA, which usually follows missed doses, illness, or delayed diagnosis. Cats with concurrent renal disease or pancreatitis are more challenging to regulate.',
    ],
    recommendedProducts: [
      {
        name: 'Lantus (Insulin Glargine)',
        description:
          'Long-acting insulin commonly used in feline diabetes; promotes the strongest remission rates when paired with low-carb diet.',
        vendor: 'chewyrx',
        path: '/rx/lantus',
      },
      {
        name: 'ProZinc (Protamine Zinc Insulin)',
        description:
          'FDA-approved feline insulin used as a long-acting alternative.',
        vendor: 'chewyrx',
        path: '/rx/prozinc',
      },
      {
        name: 'Purina Pro Plan Veterinary Diets DM Dietetic Management',
        description:
          'Low-carbohydrate, high-protein canned diet formulated for diabetic cats.',
        vendor: 'chewyrx',
        path: '/rx/purina-dm',
      },
      {
        name: 'FreeStyle Libre 3 Continuous Glucose Monitor',
        description:
          'Human CGM widely used in cats with veterinary guidance — provides 14 days of low-stress data.',
        vendor: 'amazon',
        search: 'FreeStyle Libre 3 continuous glucose monitor',
      },
    ],
    faqs: [
      {
        question: 'Can my cat go into remission?',
        answer:
          'Yes — many newly diagnosed cats do, especially when started on insulin glargine and a strict low-carbohydrate canned diet promptly. The first 3–6 months are the most important window.',
      },
      {
        question: 'Why is canned food so important?',
        answer:
          'Dry food is generally too high in carbohydrate for diabetic cats. The metabolic load makes regulation harder and reduces the chance of remission.',
      },
      {
        question: 'What if my cat will not stop eating dry food?',
        answer:
          'A gradual transition over weeks, mixing increasing amounts of canned with dry, often succeeds. Some cats need creative approaches; your veterinary team can help.',
      },
      {
        question: 'How do I avoid hypoglycemia?',
        answer:
          'Feed before insulin so you know the cat has eaten; never adjust dose without veterinary guidance; keep Karo accessible; consider a continuous glucose monitor for tight feedback.',
      },
    ],
    citations: [
      {
        label: 'AAHA Diabetes Management Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/diabetes-management/home/',
      },
      {
        label: 'AAFP Feline Diabetes Resources',
        url: 'https://catvets.com/',
      },
      {
        label: 'Cornell Feline Health Center — Feline Diabetes',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-diabetes',
      },
    ],
  },

  'arthritis-cats': {
    slug: 'arthritis-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Feline osteoarthritis (OA) is dramatically underdiagnosed because cats hide pain. Radiographic studies estimate 60–90% of cats over age 12 have OA changes — yet most are not on treatment. Solensia (frunevetmab) and other new therapies have changed what is possible for managing senior cat pain.',
    overview: [
      'Cats with OA show subtle behavioral changes rather than overt lameness. The classic signs are reduced jumping, reluctance to use high perches, and decreased grooming of the lower back and hind end. Hip, elbow, and lumbar spine are commonly affected.',
      'Risk factors include age, obesity, prior trauma, and breed predispositions (Maine Coon for hip dysplasia, Scottish Fold for severe generalized arthropathy).',
      'Diagnosis combines history, careful observation, and orthopedic exam. Radiographs confirm but do not always correlate with pain severity. Validated owner questionnaires (Feline Musculoskeletal Pain Index) help quantify response to therapy.',
    ],
    clinicalSigns: [
      'No longer jumping to the counter or top of the cat tree',
      'Hesitating before jumping down — possibly choosing closer surfaces',
      'Reduced grooming of the lower back or hind end (matted fur over the spine)',
      'Litterbox accidents because high-sided boxes are too painful to enter',
      'Increased irritability, hiding, or sleeping more',
      'Stiff or "hopping" gait, especially after rest',
    ],
    redFlags: [
      'Acute non-weight-bearing lameness — possible fracture, dislocation, or saddle thrombus; same-day evaluation',
      'Sudden hindlimb paralysis with painful cold limbs — saddle thrombus is an emergency',
      'Inability to use the litterbox at all — pain or urinary obstruction needs urgent assessment',
    ],
    treatment: [
      'Solensia (frunevetmab) is a feline-specific monoclonal antibody against nerve growth factor (NGF). Monthly subcutaneous injection in the clinic. It is the first FDA-approved chronic pain medication for cats.',
      'Gabapentin is widely used adjunctively for chronic feline OA pain and for situational anxiety/handling.',
      'NSAIDs in cats are limited. Meloxicam is approved for short-term use in many countries; long-term low-dose use is sometimes pursued in cats without renal disease under careful monitoring. Robenacoxib (Onsior) is approved for short-term use.',
      'Adequan injections (off-label in cats) and joint supplements (Cosequin for Cats, Dasuquin Advanced) are used as adjuncts.',
      'Environmental modifications — ramps, steps, low-sided litterboxes, soft bedding — have outsized effects on cat comfort because pain often limits access to essential resources.',
    ],
    lifestyleChanges: [
      'Provide low-sided litterboxes (under 2 inches) in accessible locations on every floor.',
      'Add ramps or stairs to favorite resting spots and windows.',
      'Use soft, heated cat beds — many arthritic cats seek warmth.',
      'Maintain ideal body condition; even modest weight loss makes a visible difference.',
      'Brush daily, paying attention to areas the cat can no longer reach.',
    ],
    prognosis: [
      'Feline OA is progressive but well-controlled in most cats with current therapy. Solensia has substantially expanded the senior cat pain management toolkit.',
      'Quality of life is generally maintained for years with multimodal management. Owners typically underestimate how much pain their cat has been carrying until they see the response to therapy.',
    ],
    recommendedProducts: [
      {
        name: 'Solensia (Frunevetmab) Injection',
        description:
          'Monthly veterinarian-administered monoclonal antibody for feline OA pain. First FDA-approved chronic feline pain therapy.',
        vendor: 'chewyrx',
        path: '/rx/solensia',
      },
      {
        name: 'Cosequin for Cats',
        description:
          'Glucosamine/chondroitin supplement adapted for cats; modest evidence as an adjunct.',
        vendor: 'chewy',
        path: '/b/cosequin-cat',
      },
      {
        name: 'Low-Sided Litter Box',
        description:
          'Easy entry/exit for arthritic seniors who can no longer step over high sides.',
        vendor: 'amazon',
        search: 'low-sided senior cat litter box',
      },
      {
        name: 'Heated Cat Bed',
        description:
          'Therapeutic-temperature heated bed for arthritic seniors who seek warmth.',
        vendor: 'amazon',
        search: 'thermal heated cat bed senior',
      },
      {
        name: 'Cat Stairs / Ramp',
        description:
          'Provides access to favorite perches without painful jumping.',
        vendor: 'amazon',
        search: 'cat stairs for couch',
      },
    ],
    faqs: [
      {
        question: 'My cat is not limping — could she still have arthritis?',
        answer:
          'Yes. Cats with OA rarely limp. Instead they reduce activity, avoid jumps, and groom less. Behavioral signs are far more sensitive than gait changes.',
      },
      {
        question: 'How quickly does Solensia work?',
        answer:
          'Improvement is often visible within 1–2 weeks of the first injection, with full effect by the second monthly dose.',
      },
      {
        question: 'Can my cat take a long-term NSAID?',
        answer:
          'Long-term NSAID use is possible in selected cats but requires close monitoring of kidney values. Solensia has become the more common first-line chronic therapy because of its safety profile.',
      },
      {
        question: 'What home changes help most?',
        answer:
          'Low-sided litterboxes, accessible food and water on every floor, ramps to favorite perches, and warm soft bedding.',
      },
    ],
    citations: [
      {
        label: 'AAFP/ISFM Pain Management Guidelines for Cats',
        url: 'https://catvets.com/guidelines/practice-guidelines/pain-management-guidelines',
      },
      {
        label: 'Cornell Feline Health Center — Arthritis in Cats',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/arthritis',
      },
      {
        label: 'Merck Veterinary Manual — Osteoarthritis in Animals',
        url: 'https://www.merckvetmanual.com/musculoskeletal-system/arthropathies-and-related-disorders-in-small-animals/osteoarthritis-in-animals',
      },
    ],
  },

  'ibd-cats': {
    slug: 'ibd-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Inflammatory bowel disease (IBD) is a chronic immune-driven gastrointestinal disease and one of the most common causes of chronic vomiting and diarrhea in senior cats. Distinguishing IBD from small-cell GI lymphoma requires biopsy, and getting the diagnosis right matters because both conditions are manageable.',
    overview: [
      'Feline IBD is a chronic inflammation of the gastrointestinal tract by lymphocytes and plasma cells (most commonly), eosinophils, or neutrophils. Both stomach and intestines may be affected.',
      'Many older cats described as having "chronic stomach problems" or "hairballs every week" actually have undiagnosed IBD. Persistent vomiting more than once a week is not normal.',
      'IBD and small-cell intestinal lymphoma can look identical on basic workup. Definitive differentiation requires endoscopic or surgical biopsy. Empirical therapy often overlaps significantly between the two diagnoses.',
    ],
    clinicalSigns: [
      'Chronic vomiting, often weekly or more',
      'Chronic diarrhea or soft stool',
      'Weight loss despite a maintained or increased appetite',
      'Decreased coat quality',
      'Episodic abdominal discomfort or hiding',
      'Thickened intestinal loops felt on physical exam',
    ],
    redFlags: [
      'Rapid weight loss with poor body condition — workup for lymphoma is needed',
      'Vomiting blood or melena (dark, tarry stool)',
      'Inability to keep down food or water for more than 24 hours',
      'Severe dehydration, weakness, or jaundice',
    ],
    treatment: [
      'Diet trial is usually the first step: a strictly hydrolyzed protein diet or a novel-protein diet fed exclusively for 4–8 weeks. A meaningful subset of cats respond to diet alone and require no medication.',
      'Immunomodulatory therapy — prednisolone is the most common starting agent. Budesonide is sometimes used in cats that cannot tolerate prednisolone’s systemic effects.',
      'Chlorambucil is added in moderate to severe cases or in suspected small-cell lymphoma. Cyclosporine and other agents are used in refractory disease.',
      'Cobalamin (vitamin B12) is supplemented in most cats with chronic GI disease; B12 deficiency is common in feline IBD.',
      'Anti-emetic therapy (maropitant) and appetite stimulants (mirtazapine — Mirataz) support quality of life during initial management.',
    ],
    lifestyleChanges: [
      'Feed the trial diet exclusively — no treats, no other foods, no flavored medications.',
      'Track frequency and character of vomiting and stool in a simple log.',
      'Weigh weekly on a kitchen scale; stable weight is a key marker of treatment success.',
      'Maintain a low-stress environment; chronic stress measurably worsens GI symptoms.',
    ],
    prognosis: [
      'Many cats live for years with well-controlled IBD. Small-cell lymphoma, while a cancer diagnosis, often responds well to chlorambucil and prednisolone with long survival times — often two years or more.',
      'The major risk is misdiagnosis or undertreatment. Recurrent vomiting in a senior cat warrants a structured workup; "old cats just vomit" is not the right framing.',
    ],
    recommendedProducts: [
      {
        name: 'Royal Canin Hydrolyzed Protein HP for Cats',
        description:
          'Hydrolyzed-protein therapeutic diet used in dietary IBD trials.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-hp-cat',
      },
      {
        name: 'Hill’s Prescription Diet z/d',
        description:
          'Hydrolyzed-protein diet — alternative for the IBD diet trial.',
        vendor: 'chewyrx',
        path: '/rx/hills-zd-cat',
      },
      {
        name: 'Mirataz (Transdermal Mirtazapine)',
        description:
          'Ear-applied appetite stimulant for cats with reduced appetite during IBD therapy.',
        vendor: 'chewyrx',
        path: '/rx/mirataz',
      },
      {
        name: 'Vitamin B12 (Cobalamin) for Cats',
        description:
          'B12 supplementation is commonly recommended in feline IBD; available in injectable and oral forms.',
        vendor: 'chewy',
        path: '/b/b12-cats',
      },
    ],
    faqs: [
      {
        question: 'Is IBD curable?',
        answer:
          'IBD is generally not curable but is highly manageable. Many cats achieve excellent control with diet alone or diet plus low-dose medication.',
      },
      {
        question: 'How do I know whether it is IBD or lymphoma?',
        answer:
          'Definitive diagnosis requires biopsy via endoscopy or exploratory surgery. Initial management often overlaps; persistent symptoms despite empirical therapy warrant biopsy.',
      },
      {
        question: 'Are weekly hairballs really a problem?',
        answer:
          'Vomiting hairballs more than once a month is not normal and usually represents underlying GI disease. Cats that vomit weekly should be evaluated.',
      },
      {
        question: 'Can probiotics help?',
        answer:
          'Veterinary-quality probiotics (FortiFlora, Proviable) are commonly used as adjuncts. They are unlikely to control IBD alone but often help stool consistency.',
      },
    ],
    citations: [
      {
        label: 'AAFP — Chronic Vomiting in Cats',
        url: 'https://catvets.com/',
      },
      {
        label: 'Cornell Feline Health Center — IBD in Cats',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/inflammatory-bowel-disease',
      },
      {
        label: 'Merck Veterinary Manual — Feline IBD',
        url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/inflammatory-bowel-disease-in-small-animals',
      },
    ],
  },
}
