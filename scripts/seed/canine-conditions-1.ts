// Canine senior conditions — partial 1 (5 conditions)
// Citations are real public veterinary references.

export const CANINE_CONDITIONS_1 = {
  osteoarthritis: {
    slug: 'osteoarthritis',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Osteoarthritis (OA) is the most common chronic disease of senior dogs, affecting an estimated one in five adult dogs in the United States. It is a progressive, non-reversible degeneration of joint cartilage that responds well to early, multimodal management — but is undertreated in older dogs whose owners attribute slowing down to age alone.',
    overview: [
      'Osteoarthritis is the degeneration of the smooth cartilage that cushions the ends of bones inside a joint, leading to bone-on-bone contact, inflammation, and pain. In dogs, OA most commonly affects the hips, stifles (knees), elbows, and lower back. It typically develops slowly over years and is often present long before owners notice clear lameness.',
      'Although any dog can develop OA, large-breed dogs and dogs with developmental joint disease (hip dysplasia, elbow dysplasia, cruciate ligament rupture) are at higher risk. Excess body weight accelerates progression — even small reductions in body condition score can produce noticeable improvements in mobility.',
      'OA is a clinical diagnosis supported by radiographs, but radiographic severity does not always match the dog’s level of pain. Many dogs with substantial radiographic disease move comfortably with appropriate management; others with mild findings are profoundly uncomfortable. Treatment decisions are guided by clinical signs and quality of life, not imaging alone.',
    ],
    clinicalSigns: [
      'Slowing on walks, reluctance to jump into the car or onto furniture',
      'Stiffness after rest that loosens with movement ("morning stiffness")',
      'Difficulty rising from the floor, especially on slick surfaces',
      'Subtle behavior changes — irritability when handled near the hips or back, decreased greeting enthusiasm, sleeping more',
      'Trembling in the hind legs, "bunny hopping" up stairs, or sitting with a slumped posture',
      'Muscle atrophy along the thighs or hips visible as the dog ages',
    ],
    redFlags: [
      'Sudden non-weight-bearing lameness — call your veterinarian the same day',
      'Inability to stand or get up after lying down',
      'Whining or yelping with normal handling that did not previously cause pain',
      'New stumbling, knuckling, or hind-end weakness — this may be neurologic rather than arthritic and requires evaluation',
    ],
    treatment: [
      'Effective OA management is multimodal: there is no single treatment that consistently controls senior-dog arthritis well on its own. The current standard is to combine weight management, controlled exercise, and a tiered set of medications and supplements tailored to the dog’s severity and comorbidities.',
      'NSAIDs (carprofen, meloxicam, deracoxib, firocoxib) are the foundation of pharmacologic management for moderate-to-severe pain. Grapiprant (Galliprant), a piprant-class drug, is often chosen in dogs with concurrent kidney disease because of its distinct mechanism. Baseline bloodwork is recommended before starting any NSAID, and periodic monitoring of kidney and liver values is standard.',
      'Disease-modifying agents include polysulfated glycosaminoglycan injections (Adequan Canine) and monoclonal antibodies targeting nerve growth factor (Librela / bedinvetmab). Nutraceuticals such as glucosamine/chondroitin (Cosequin) and ASU-enhanced formulas (Dasuquin) have a modest evidence base and are most useful as adjuncts rather than primary therapy.',
      'Adjunct analgesics including gabapentin, amantadine, and tramadol are added when NSAIDs alone are insufficient or when NSAIDs are contraindicated. Physical rehabilitation, underwater treadmill therapy, acupuncture, and laser therapy can meaningfully extend the comfortable years of a senior arthritic dog when performed by trained practitioners.',
    ],
    lifestyleChanges: [
      'Aim for an ideal body condition score (4/9 to 5/9). Even 5–10% weight loss can produce a visible mobility improvement.',
      'Use carpet runners, yoga mats, or rubber-backed rugs over slick floors. Hardwood and tile are a major contributor to falls in senior dogs.',
      'Provide a supportive orthopedic bed — memory foam designed for senior dogs offloads pressure on hips and elbows.',
      'Build a ramp for car entry and for any couch or bed the dog wants access to. Repeated jumping is one of the largest avoidable joint stressors.',
      'Keep daily activity consistent and moderate. Long weekend hikes after several quiet weekdays tend to flare arthritis the next day.',
    ],
    prognosis: [
      'Osteoarthritis is progressive and not curable, but the rate of progression varies widely and is heavily influenced by weight, exercise, and treatment adherence. Many dogs diagnosed with OA at age 8 live comfortably for 4–6 more years with well-managed multimodal therapy.',
      'The most common cause of euthanasia in dogs with end-stage arthritis is loss of mobility — the dog can no longer rise to eat, drink, or eliminate. Owners are encouraged to start treatment early, monitor body condition aggressively, and discuss quality-of-life metrics with their veterinarian well before mobility deteriorates.',
    ],
    recommendedProducts: [
      {
        name: 'Adequan Canine (PSGAG)',
        description:
          'Disease-modifying injectable used as a 4-week loading series and then monthly maintenance — labeled for non-infectious degenerative arthritis in dogs.',
        vendor: 'chewyrx',
        path: '/rx/adequan',
      },
      {
        name: 'Cosequin DS Joint Health',
        description:
          'Glucosamine + chondroitin senior-dog joint supplement carrying the NASC Quality Seal. Evidence base is modest but consistent for mild-to-moderate OA.',
        vendor: 'chewy',
        path: '/b/joint-supplements-cosequin',
      },
      {
        name: 'Big Barker Orthopedic Bed',
        description:
          'Therapeutic-grade memory foam senior-dog bed designed not to flatten — the kind of small home upgrade that meaningfully reduces sleep-time joint pressure.',
        vendor: 'amazon',
        search: 'Big Barker orthopedic dog bed',
      },
      {
        name: 'PetSafe Solvit Telescoping Pet Ramp',
        description:
          'Folding ramp that protects spinal and hip joints during car loading — a top recommendation from canine rehab specialists for senior dogs.',
        vendor: 'amazon',
        search: 'PetSafe Solvit telescoping pet ramp',
      },
    ],
    faqs: [
      {
        question: 'Should I give my senior dog joint supplements before they show symptoms?',
        answer:
          'For at-risk breeds (Labradors, Golden Retrievers, German Shepherds, Rottweilers, etc.) and for dogs with previous joint surgery, many veterinarians recommend starting a quality glucosamine/chondroitin supplement at middle age. There is no clear evidence supplements prevent OA, but they appear safe and may modestly slow progression.',
      },
      {
        question: 'How do I know whether my dog needs an NSAID or just supplements?',
        answer:
          'If your dog is slowing down but still moves comfortably most of the day, supplements and lifestyle changes are often sufficient. If your dog is reluctant to rise, refuses stairs, or shows behavior changes consistent with chronic pain, that is the threshold for prescription analgesia — typically an NSAID after baseline bloodwork.',
      },
      {
        question: 'Are CBD products effective for canine arthritis?',
        answer:
          'There is emerging but limited evidence that CBD may reduce arthritis pain in dogs. Studies from Cornell and Baylor have shown modest benefit. Products vary enormously in actual cannabinoid content, so if a veterinarian is comfortable recommending CBD, ask for a brand with a current third-party Certificate of Analysis.',
      },
      {
        question: 'Can my dog be on more than one arthritis medication at the same time?',
        answer:
          'Yes — multimodal therapy is the current standard. Common combinations include an NSAID plus gabapentin plus Adequan injections plus a joint supplement. Some combinations are restricted (two NSAIDs together, NSAIDs with corticosteroids), so any new medication should be added under veterinary supervision.',
      },
      {
        question: 'When should I consider euthanasia for an arthritic senior dog?',
        answer:
          'When the dog can no longer rise to eat, drink, or eliminate comfortably despite maximal multimodal therapy, quality of life is in serious decline. The HHHHHMM scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad) is a structured tool many veterinarians use to guide that conversation.',
      },
    ],
    citations: [
      {
        label: 'AAHA Canine Pain Management Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/2022-aaha-pain-management-guidelines-for-dogs-and-cats/home/',
      },
      {
        label: 'Cornell University CVM — Osteoarthritis in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/osteoarthritis-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Osteoarthritis in Animals',
        url: 'https://www.merckvetmanual.com/musculoskeletal-system/arthropathies-and-related-disorders-in-small-animals/osteoarthritis-in-animals',
      },
    ],
  },

  'canine-cognitive-dysfunction': {
    slug: 'canine-cognitive-dysfunction',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Canine cognitive dysfunction (CCD), often called dog dementia, is an age-related neurodegenerative condition with clinical and neuropathologic parallels to Alzheimer’s disease in humans. It is dramatically underdiagnosed: surveys suggest the majority of cases go unrecognized because owners attribute the signs to normal aging.',
    overview: [
      'CCD is a syndrome of progressive cognitive decline in older dogs. The most useful clinical framework is the DISHA acronym: Disorientation, Interaction changes, Sleep–wake cycle disruption, House-soiling, and Activity-level changes (often increased anxiety or aimless wandering).',
      'Prevalence rises sharply with age. Published studies from veterinary geriatric clinics suggest CCD affects roughly 14–35% of dogs over 8 years, with prevalence approaching 60% in dogs over 15 years. Many of these dogs are never formally diagnosed.',
      'CCD is a clinical diagnosis. There is no single confirmatory test; instead, the veterinarian rules out medical mimics (pain, vision and hearing loss, endocrine disease, hypertension) and then evaluates the dog against the DISHA framework. Validated owner questionnaires, such as the Canine Dementia Scale (CADES), can support diagnosis and track response to therapy.',
    ],
    clinicalSigns: [
      'Disorientation — staring at walls, getting stuck behind furniture, going to the wrong side of the door',
      'Reduced greeting behavior or appearing not to recognize familiar people',
      'Sleeping more during the day and pacing or vocalizing at night',
      'New house-soiling in a previously reliably housetrained dog',
      'Increased anxiety, restlessness, or compulsive behaviors',
      'Reduced response to known cues, decreased interest in food, toys, or walks',
    ],
    redFlags: [
      'Acute disorientation that develops over hours to days — this is more consistent with vestibular disease, stroke, or systemic illness than CCD',
      'Seizures, head tilt, circling, or facial asymmetry — these require same-day evaluation',
      'Sudden, dramatic personality change accompanied by appetite loss or vomiting — workup for systemic disease is warranted before attributing changes to dementia',
    ],
    treatment: [
      'Treatment for CCD is multimodal and aims to slow progression and improve daily quality of life. There is no curative therapy. The earlier intervention begins, the more effective each component appears to be.',
      'Selegiline (Anipryl), an MAO-B inhibitor, is FDA-approved for canine cognitive dysfunction. About one-third of dogs show notable improvement, one-third show modest improvement, and one-third do not respond — improvement is typically seen within 4–8 weeks of starting therapy.',
      'Therapeutic diets formulated for cognitive aging — Hill’s b/d, Purina Bright Mind / Pro Plan Bright Mind, and Royal Canin formulations — supply medium-chain triglycerides, antioxidants, and omega-3 fatty acids that have published clinical evidence in cognitive dysfunction.',
      'Supplements with supporting evidence in CCD include SAM-e (Denosyl, Novifit), omega-3 fatty acids, and proprietary blends such as Senilife and Aktivait. These are most useful as adjuncts to dietary and pharmacologic management.',
      'Anxiety-targeted interventions — predictable routine, environmental enrichment, nightlights, anxiety wraps, and in some cases trazodone or fluoxetine — can substantially reduce sundowning behaviors that disrupt the whole household.',
    ],
    lifestyleChanges: [
      'Keep furniture, food bowls, and the dog’s bed in the same place. Senior dogs with cognitive change navigate by memory and small rearrangements can be disorienting.',
      'Maintain a predictable daily routine — same wake time, same walk time, same meals. Predictability reduces anxiety.',
      'Provide low-intensity mental enrichment: snuffle mats, food puzzles, short scent-tracking games.',
      'Use nightlights along the path to the water bowl and elimination area; many CCD dogs become more disoriented in low light.',
      'Increase potty breaks. A CCD dog who is house-soiling is not "forgetting" — they are losing the executive ability to plan ahead and signal in time.',
    ],
    prognosis: [
      'CCD is progressive. With well-managed therapy, owners often gain 6–24 months of additional good quality time. The trajectory varies enormously: some dogs plateau for long periods, while others decline more steadily despite intervention.',
      'Quality of life decisions in CCD often hinge on sleep–wake disruption, severity of anxiety, and the dog’s ability to find food and water reliably. Honest conversations with the veterinary team about end-of-life decisions are part of the standard of care.',
    ],
    recommendedProducts: [
      {
        name: 'Hill’s Prescription Diet b/d Aging Care',
        description:
          'Therapeutic diet formulated specifically for senior cognitive support — antioxidants, l-carnitine, and DHA. The longest-studied veterinary cognitive diet.',
        vendor: 'chewyrx',
        path: '/rx/hills-bd',
      },
      {
        name: 'Purina Pro Plan Bright Mind Adult 7+',
        description:
          'Over-the-counter formulation with medium-chain triglycerides; published research supports cognitive benefit when started early.',
        vendor: 'chewy',
        path: '/b/purina-pro-plan-bright-mind',
      },
      {
        name: 'Senilife Brain Support',
        description:
          'Proprietary blend including phosphatidylserine and Ginkgo biloba; widely used in European veterinary geriatric clinics.',
        vendor: 'amazon',
        search: 'Senilife brain support for dogs',
      },
      {
        name: 'Denosyl (SAMe) Tablets',
        description:
          'SAM-e supplement with published cognitive-support evidence in older dogs; also supports liver function.',
        vendor: 'chewyrx',
        path: '/rx/denosyl',
      },
    ],
    faqs: [
      {
        question: 'Is canine cognitive dysfunction the same as Alzheimer’s?',
        answer:
          'CCD shares many similarities with Alzheimer’s disease, including beta-amyloid plaque deposition in the brain and cognitive decline, but the conditions are not identical. Dogs are considered one of the best naturally occurring models for human cognitive aging research.',
      },
      {
        question: 'When should I start Anipryl (selegiline)?',
        answer:
          'Earlier is generally better. Most studies show the strongest effect when selegiline is started while signs are still mild to moderate. Some veterinarians recommend starting therapy as soon as DISHA signs are clearly present and other causes are ruled out.',
      },
      {
        question: 'Do CBD products help dogs with CCD?',
        answer:
          'There are emerging studies in dogs, but the evidence base is still limited. CBD may help the anxiety and sleep disruption that accompany CCD; it is not a substitute for proven therapies like selegiline and therapeutic diets.',
      },
      {
        question: 'My dog wanders all night and yowls — what should I do tonight?',
        answer:
          'Talk to your veterinarian. Many dogs respond to a short-term anxiolytic such as trazodone in the evening, paired with environmental adjustments (nightlights, a cushioned bed near the owner, white-noise machine). Sleep–wake reversal is one of the most distressing signs for owners and is often the symptom that drives the conversation about euthanasia, so it should be aggressively managed.',
      },
    ],
    citations: [
      {
        label: 'AAHA Senior Care Guidelines for Dogs and Cats',
        url: 'https://www.aaha.org/aaha-guidelines/senior-care-configuration/senior-care-home/',
      },
      {
        label: 'Cornell University CVM — Cognitive Dysfunction Syndrome',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/cognitive-dysfunction-syndrome',
      },
      {
        label: 'Merck Veterinary Manual — Behavioral Problems of Geriatric Dogs and Cats',
        url: 'https://www.merckvetmanual.com/behavior/behavioral-problems-of-dogs/behavioral-problems-of-geriatric-dogs-and-cats',
      },
    ],
  },

  'chronic-kidney-disease-dogs': {
    slug: 'chronic-kidney-disease-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Chronic kidney disease (CKD) is a progressive, irreversible loss of nephron function. It is one of the most common diagnoses in senior dogs and one of the most amenable to thoughtful long-term management. Quality-of-life outcomes are tightly linked to how early the diagnosis is made and how aggressively diet, hydration, and blood pressure are addressed.',
    overview: [
      'CKD is defined as kidney damage or a sustained reduction in glomerular filtration rate for three months or longer. By the time clinical signs appear, roughly two-thirds of nephron function has typically been lost, which is why annual senior bloodwork — including SDMA, a sensitive early marker — is so important.',
      'The International Renal Interest Society (IRIS) staging system organizes CKD into four stages based on creatinine and SDMA, with sub-staging based on urine protein-to-creatinine ratio (UPC) and blood pressure. Treatment decisions depend on stage.',
      'Common underlying causes include chronic interstitial nephritis, glomerular disease, congenital and inherited disorders, infectious disease (Lyme, leptospirosis), and post-renal injury. In most senior dogs, no single cause is identified — management focuses on slowing progression and managing complications.',
    ],
    clinicalSigns: [
      'Increased drinking and urination (the earliest sign in most cases)',
      'Weight loss and muscle wasting, especially along the topline',
      'Decreased or fluctuating appetite',
      'Intermittent vomiting, especially in the morning before eating',
      'Bad breath with a chemical or ammonia odor (uremic halitosis)',
      'Dull, dry coat; pallor of the gums in more advanced disease',
    ],
    redFlags: [
      'Sudden complete loss of appetite or persistent vomiting — these can indicate uremic crisis and warrant same-day evaluation',
      'Hematemesis (vomiting blood) or melena (dark, tarry stool) — uremic gastritis can cause GI bleeding',
      'Acute collapse, profound lethargy, or seizures — uremic encephalopathy or hyperkalemia requires emergency care',
      'A previously controlled CKD dog who stops eating after a recent medication change — call your veterinarian',
    ],
    treatment: [
      'Treatment is tailored by IRIS stage. In Stage 1–2 disease, the cornerstones are early dietary modification, generous water access, and management of any treatable underlying cause. Dogs with proteinuria benefit from an ACE inhibitor (enalapril, benazepril) or an angiotensin receptor blocker (telmisartan).',
      'Therapeutic kidney diets — Hill’s k/d, Royal Canin Renal Support, Purina Pro Plan NF — have decades of published evidence demonstrating slowed progression and improved survival in dogs with Stage 2 and later CKD. The transition should be gradual to maintain appetite.',
      'In Stage 3–4 disease, subcutaneous fluid therapy at home becomes a daily or near-daily tool to support hydration. Phosphate binders (aluminum hydroxide, lanthanum carbonate, Epakitin) help normalize phosphorus, which is one of the strongest predictors of progression. Anti-nausea agents (maropitant, ondansetron) and appetite stimulants (mirtazapine, capromorelin) preserve quality of life.',
      'Blood pressure is checked at every visit. Hypertension is treated with amlodipine in dogs (often combined with an ACE inhibitor). Anemia of chronic kidney disease may be addressed with darbepoetin in advanced cases.',
    ],
    lifestyleChanges: [
      'Place multiple water sources around the home — bowls in two or three rooms, plus a water fountain. Total daily intake matters more than any single bowl.',
      'Switch to a therapeutic kidney diet over 7–14 days. Mixing with a small amount of warmed low-sodium broth often improves acceptance.',
      'Avoid high-sodium treats and table foods. Many senior dogs are slipped table scraps that quietly worsen blood pressure.',
      'Keep a simple home log of appetite, water intake, vomiting episodes, and body weight. This is the single most useful information you can bring to a recheck.',
      'Maintain a calm, predictable handling routine — stress measurably elevates blood pressure in senior dogs and complicates blood pressure interpretation.',
    ],
    prognosis: [
      'Prognosis is heavily stage-dependent. Dogs diagnosed at IRIS Stage 1–2 with good dietary control can live for years with stable kidney values. Dogs first diagnosed in Stage 3 or 4 have shorter expected survival, often measured in months to a year or two, though individual variation is large.',
      'Quality of life decisions in CKD are usually driven by appetite, hydration, and the dog’s response to anti-nausea therapy. With current tools, owners and veterinarians can often produce many additional good months even after a Stage 4 diagnosis.',
    ],
    recommendedProducts: [
      {
        name: 'Hill’s Prescription Diet k/d Kidney Care',
        description:
          'Therapeutic kidney diet — restricted phosphorus, controlled high-quality protein, added omega-3s. The longest-studied veterinary renal diet.',
        vendor: 'chewyrx',
        path: '/rx/hills-kd',
      },
      {
        name: 'Royal Canin Renal Support D',
        description:
          'Renal therapeutic diet with palatability options that suit picky senior dogs; often a useful alternative when Hill’s k/d is refused.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-renal-support',
      },
      {
        name: 'Epakitin Chitosan-Based Phosphate Binder',
        description:
          'Phosphate-binding supplement that helps normalize phosphorus in dogs not yet on prescription binders.',
        vendor: 'chewy',
        path: '/b/epakitin',
      },
      {
        name: 'Subcutaneous Fluid Kit (Lactated Ringer’s + giving set)',
        description:
          'For home subQ fluid therapy on veterinary instruction — a cornerstone of late-stage CKD management.',
        vendor: 'chewyrx',
        path: '/rx/lactated-ringers',
      },
    ],
    faqs: [
      {
        question: 'What is SDMA and why does it matter?',
        answer:
          'SDMA (symmetric dimethylarginine) is a kidney-function marker that rises earlier than creatinine — sometimes when only 25–40% of kidney function has been lost. Adding SDMA to annual senior bloodwork is one of the most effective ways to catch CKD in the early, more treatable stages.',
      },
      {
        question: 'Should every senior dog be on a kidney diet?',
        answer:
          'No. Kidney diets are formulated specifically for dogs with CKD and have phosphorus, protein, and sodium tuned for that purpose. Healthy senior dogs should eat a standard high-quality senior or all-life-stages diet. Always have a diagnosis before switching to a therapeutic diet.',
      },
      {
        question: 'How do I give subcutaneous fluids at home?',
        answer:
          'Your veterinary team will demonstrate the technique and provide written instructions. The fluid bag is warmed to body temperature, the needle is placed under the loose skin between the shoulder blades, and the fluid (typically 100–250 mL depending on size) runs in over a few minutes. Most dogs tolerate it well when paired with a small treat.',
      },
      {
        question: 'Is my dog in pain from kidney disease?',
        answer:
          'CKD itself is not typically painful. Discomfort comes from secondary issues — nausea, dehydration, oral ulcers from uremia, or hypertension-related headaches. Addressing those is the focus of comfort-oriented care.',
      },
    ],
    citations: [
      {
        label: 'IRIS Kidney — Staging of CKD in Dogs and Cats',
        url: 'http://www.iris-kidney.com/guidelines/staging.html',
      },
      {
        label: 'Cornell University CVM — Chronic Kidney Disease in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/chronic-kidney-disease-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Chronic Kidney Disease in Small Animals',
        url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/chronic-kidney-disease-in-small-animals',
      },
    ],
  },

  'diabetes-mellitus-dogs': {
    slug: 'diabetes-mellitus-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Canine diabetes mellitus is an endocrine disease characterized by insufficient insulin production. Unlike type 2 diabetes in humans, canine diabetes is essentially always insulin-dependent. With twice-daily injections, consistent diet, and steady monitoring, most diabetic dogs live for years of good-quality life.',
    overview: [
      'Diabetes mellitus in dogs results from progressive loss of insulin-producing beta cells. The result is hyperglycemia (high blood glucose), glucosuria (glucose in the urine), and downstream metabolic disruption. Female dogs are diagnosed roughly twice as often as males, and several breeds — Samoyed, Schnauzer, Bichon Frise, Poodles — are over-represented.',
      'The classic presentation is a middle-aged to senior dog with polyuria (excessive urination), polydipsia (excessive drinking), polyphagia (increased hunger), and weight loss despite a normal-to-increased appetite. Cataract formation is unusually rapid in diabetic dogs and is often the first sign that owners notice.',
      'Diagnosis is based on persistent fasting hyperglycemia plus glucosuria in a dog with consistent clinical signs. A single high blood glucose can occur from stress; a fructosamine level reflects glucose control over the prior 2–3 weeks and helps clarify ambiguous cases.',
    ],
    clinicalSigns: [
      'Drinking and urinating much more than usual',
      'Increased appetite with paradoxical weight loss',
      'Rapid onset of cataracts (often within weeks of diagnosis)',
      'Recurrent urinary tract infections',
      'Dull coat, mild lethargy, reduced exercise tolerance',
      'In advanced or uncontrolled cases: vomiting, anorexia, profound weakness (diabetic ketoacidosis — a medical emergency)',
    ],
    redFlags: [
      'Vomiting, inappetence, weakness, or rapid breathing in a known diabetic dog — DKA is a same-day emergency',
      'Trembling, wobbliness, disorientation, seizures — possible hypoglycemia; rub Karo syrup or honey on the gums and go to the veterinarian immediately',
      'Sudden, dramatic vision change consistent with cataract development — schedule an ophthalmology consult; lens-induced uveitis can become an emergency',
    ],
    treatment: [
      'Insulin injection is the cornerstone of canine diabetes treatment. Oral medications used in human type 2 diabetes are not effective in dogs. The most commonly used insulins are Vetsulin (porcine lente insulin) and NPH (intermediate-acting human insulin), both given twice daily.',
      'A consistent diet matters as much as the insulin itself. Most diabetic dogs do well on a moderate-carbohydrate, moderate-fiber therapeutic diet (Hill’s w/d, Royal Canin Glycobalance, Purina DM) fed at the same volume and times each day. Treats are not forbidden, but they should be predictable, low in simple sugars, and accounted for in the total daily ration.',
      'Glucose curves — a series of blood glucose readings taken every 1–2 hours through a dosing interval — are used initially to set the dose and periodically to confirm control. Home glucose monitoring with a pet-validated glucometer or a continuous glucose monitor (such as FreeStyle Libre) is increasingly common and reduces the stress of frequent clinic visits.',
      'Intact female dogs should be spayed at diagnosis. Progesterone produces marked insulin resistance and makes diabetic regulation extremely difficult; many newly diabetic dogs become significantly easier to regulate after ovariohysterectomy.',
    ],
    lifestyleChanges: [
      'Build a fixed daily schedule for meals, insulin, and exercise. Most diabetic dogs do best with meals and injections every 12 hours at the same clock time.',
      'Keep Karo corn syrup or honey near the front door and in any travel bag. Hypoglycemia is the most dangerous acute complication and is reversed in minutes by oral glucose.',
      'Spay intact females soon after diagnosis to remove the progesterone-driven insulin resistance.',
      'Monitor for urinary infections — dilute, glucose-laden urine is a hospitable environment for bacteria. Periodic urine culture is part of standard diabetic monitoring.',
      'Keep a feeding/insulin log. A simple notebook entry — time, dose, food eaten, any unusual behavior — pays enormous dividends at vet visits.',
    ],
    prognosis: [
      'With careful management, the median survival of diabetic dogs is several years. Most do not die of diabetes itself; they die with diabetes, often years later, of an unrelated senior condition.',
      'The most common causes of treatment failure are inconsistent feeding, missed injections, undiagnosed concurrent endocrine disease (Cushing’s, hypothyroidism), and chronic urinary infection. Owners who keep a steady routine and recheck schedule generally see good long-term outcomes.',
    ],
    recommendedProducts: [
      {
        name: 'Hill’s Prescription Diet w/d Multi-Benefit',
        description:
          'Multi-purpose therapeutic diet widely used in diabetic dogs — high fiber, controlled glycemic response.',
        vendor: 'chewyrx',
        path: '/rx/hills-wd',
      },
      {
        name: 'AlphaTRAK 3 Pet Glucometer Kit',
        description:
          'Pet-calibrated glucometer for home glucose monitoring — the most widely used home meter in veterinary endocrinology.',
        vendor: 'chewy',
        path: '/b/alphatrak-3',
      },
      {
        name: 'FreeStyle Libre 3 Continuous Glucose Monitor',
        description:
          'Human CGM commonly applied to dogs with veterinary guidance; provides 14 days of continuous data and reduces blood draw stress.',
        vendor: 'amazon',
        search: 'FreeStyle Libre 3 continuous glucose monitor',
      },
      {
        name: 'BD Ultra-Fine Insulin Syringes 0.3 mL',
        description:
          'Standard short-needle U-40 or U-100 insulin syringes — confirm the unit with your veterinarian before purchase.',
        vendor: 'chewyrx',
        path: '/rx/insulin-syringes',
      },
    ],
    faqs: [
      {
        question: 'Can canine diabetes be cured?',
        answer:
          'No. Canine diabetes is permanent and requires lifelong insulin. Cats can sometimes go into diabetic remission, but dogs essentially never do.',
      },
      {
        question: 'What do I do if my dog skips a meal?',
        answer:
          'Call your veterinarian before giving insulin. The default rule in most clinics is to give half the usual dose if the dog ate at least half the meal and to skip the dose if the dog ate nothing — but exact instructions should come from the veterinarian who knows your dog.',
      },
      {
        question: 'Why do diabetic dogs develop cataracts so fast?',
        answer:
          'Excess glucose enters the lens and is converted to sorbitol, which draws in water and disrupts lens transparency. Most diabetic dogs develop cataracts within the first 12–18 months. Cataract surgery is curative and can restore vision in most cases.',
      },
      {
        question: 'How much will treating a diabetic dog cost long-term?',
        answer:
          'Costs vary widely by region and by insulin type. Owners should plan for ongoing expenses for insulin, syringes, glucose monitoring, therapeutic diet, and recheck bloodwork. Pet insurance taken out before diagnosis can offset much of this; insurance taken out after diagnosis will exclude diabetes as a pre-existing condition.',
      },
    ],
    citations: [
      {
        label: 'AAHA Diabetes Management Guidelines for Dogs and Cats',
        url: 'https://www.aaha.org/aaha-guidelines/diabetes-management/home/',
      },
      {
        label: 'Cornell University CVM — Diabetes Mellitus in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/diabetes-mellitus-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Diabetes Mellitus in Dogs and Cats',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs-and-cats',
      },
    ],
  },

  'congestive-heart-failure': {
    slug: 'congestive-heart-failure',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Congestive heart failure (CHF) in senior dogs is most commonly the end result of years of slowly progressive mitral valve disease. With modern cardiac therapy, including pimobendan (Vetmedin), many dogs live one to two additional years of comfortable life after CHF is diagnosed.',
    overview: [
      'CHF is the syndrome that develops when the heart can no longer pump efficiently enough to meet the body’s needs, causing fluid to back up — into the lungs (left-sided failure, the more common form in dogs) or into the abdomen and chest cavity (right-sided failure). In senior dogs, the most common underlying cause is myxomatous mitral valve disease, especially in small-breed dogs such as Cavalier King Charles Spaniels, Chihuahuas, and Dachshunds.',
      'A second important cause in large-breed dogs is dilated cardiomyopathy (DCM), where the heart muscle becomes thin and weak. DCM has both genetic forms (Doberman Pinschers, Boxers, Great Danes) and a recent diet-associated form that has received attention in the veterinary cardiology literature.',
      'The diagnosis of CHF is made by combining a thoracic radiograph showing pulmonary edema with a cardiologist’s assessment of heart size and function via echocardiography. Owner-reported sleeping respiratory rate is the single most useful home monitoring tool.',
    ],
    clinicalSigns: [
      'Persistent cough, often at night or after lying down',
      'Increased respiratory rate at rest (over 30–35 breaths per minute while asleep is abnormal)',
      'Reduced exercise tolerance; needing to stop on walks',
      'Episodes of fainting (syncope), especially with excitement',
      'Distended abdomen (right-sided CHF causing ascites)',
      'Pale or bluish gums and lethargy in more advanced disease',
    ],
    redFlags: [
      'Breathing rate persistently above 40 breaths per minute at rest — call your veterinarian the same day',
      'Open-mouth breathing, blue or gray gum color, refusal to lie down — go to the emergency vet',
      'Collapse or sudden severe weakness',
      'Sudden swelling of the abdomen accompanied by lethargy',
    ],
    treatment: [
      'Pimobendan (Vetmedin) is the cornerstone of canine CHF therapy. The EPIC trial demonstrated that starting pimobendan during preclinical Stage B2 mitral valve disease (cardiomegaly without symptoms) delays the onset of CHF by a median of roughly 15 months. In symptomatic dogs, pimobendan combined with furosemide and an ACE inhibitor is standard.',
      'Loop diuretics — furosemide or torsemide — remove excess fluid from the lungs. Dosing is adjusted based on resting respiratory rate trends at home and periodic veterinary rechecks. Long-term therapy requires monitoring of kidney values and electrolytes.',
      'ACE inhibitors such as enalapril or benazepril reduce afterload on the heart and slow the maladaptive cardiac remodeling that worsens valvular disease over time.',
      'Spironolactone is often added for its mineralocorticoid-receptor antagonism, which has shown a survival benefit in dogs with mitral valve disease and CHF. In dogs with arrhythmias or syncope, antiarrhythmic medication or an antitussive may be added based on a cardiologist’s recommendation.',
    ],
    lifestyleChanges: [
      'Measure resting (sleeping) respiratory rate at home, ideally daily. A persistent climb above the dog’s established baseline is the most reliable early warning of decompensation.',
      'Restrict dietary sodium. Avoid high-sodium treats, deli meats, and table foods.',
      'Maintain ideal body condition. Obesity meaningfully worsens cardiac workload.',
      'Adjust exercise to comfort. Most CHF dogs continue to enjoy moderate walks; episodes of severe exertion should be avoided.',
      'Keep environment cool. Heat and humidity make breathing harder for dogs in CHF.',
    ],
    prognosis: [
      'Median survival after the onset of CHF in mitral valve disease is approximately 9–18 months on standard therapy, with substantial individual variation. Dogs with DCM tend to have shorter post-diagnosis survival, though early pimobendan therapy improves outcomes.',
      'Quality of life decisions in CHF are usually driven by respiratory comfort. When a dog cannot lie down to sleep comfortably or develops repeated pulmonary edema despite maximal therapy, end-of-life conversations are appropriate.',
    ],
    recommendedProducts: [
      {
        name: 'Vetmedin (Pimobendan) Chewable Tablets',
        description:
          'Inodilator that is the foundation of modern canine CHF therapy.',
        vendor: 'chewyrx',
        path: '/rx/vetmedin',
      },
      {
        name: 'Furosemide Tablets',
        description:
          'Loop diuretic prescribed by your veterinarian for fluid management in CHF.',
        vendor: 'chewyrx',
        path: '/rx/furosemide',
      },
      {
        name: 'Hill’s Prescription Diet h/d Cardiac Care',
        description:
          'Low-sodium therapeutic diet formulated for dogs with heart disease.',
        vendor: 'chewyrx',
        path: '/rx/hills-hd',
      },
      {
        name: 'PetSafe Drinkwell Pet Fountain',
        description:
          'Encourages steady water intake while making it easier to track and modulate sodium-light hydration.',
        vendor: 'amazon',
        search: 'PetSafe Drinkwell pet fountain',
      },
    ],
    faqs: [
      {
        question: 'My senior dog has a heart murmur — does that mean CHF?',
        answer:
          'No. A murmur indicates turbulent flow but does not by itself diagnose heart failure. Many dogs live with stable murmurs for years. The next step is usually a cardiology referral for echocardiogram so that staging can guide whether to start preclinical pimobendan therapy.',
      },
      {
        question: 'How often should I count breaths at home?',
        answer:
          'Once or twice daily while the dog is asleep. Counts under 30 are reassuring; trends matter more than any single reading. A persistent climb of more than 20–30% above your dog’s baseline should prompt a call to the veterinarian.',
      },
      {
        question: 'Is the coughing from heart disease or from collapsing trachea?',
        answer:
          'Both are common in small senior dogs and they often coexist. A chest radiograph helps differentiate: cardiac cough is usually associated with cardiomegaly and pulmonary edema, while tracheal collapse shows characteristic tracheal narrowing. A cardiology workup is the standard tiebreaker.',
      },
      {
        question: 'Should I restrict salt the way I would for a person with heart failure?',
        answer:
          'Sodium restriction is helpful but does not need to be extreme in early-stage disease. A high-quality maintenance diet plus avoiding high-sodium treats is sufficient for many dogs. As disease progresses, a prescription cardiac diet is appropriate.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Mitral Valve Disease',
        url: 'https://www.acvim.org/clinical-resources',
      },
      {
        label: 'Cornell University CVM — Heart Disease in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/mitral-valve-disease-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Heart Failure in Small Animals',
        url: 'https://www.merckvetmanual.com/circulatory-system/heart-disease-and-heart-failure/heart-failure-in-small-animals',
      },
    ],
  },
}
