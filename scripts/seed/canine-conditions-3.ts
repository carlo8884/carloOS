// Canine senior conditions — partial 3 (5 conditions)

export const CANINE_CONDITIONS_3 = {
  'hearing-loss-dogs': {
    slug: 'hearing-loss-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Age-related hearing loss in dogs is common, gradual, and often misinterpreted as disobedience or cognitive decline. Most senior dogs adapt well to deafness when owners switch to hand signals and visual cues.',
    overview: [
      'Presbycusis — age-related hearing loss — develops gradually in many senior dogs starting around age 8–10. The condition is sensorineural, caused by cochlear hair cell degeneration. It is not reversible but it is rarely painful.',
      'Other causes of hearing loss in seniors include chronic otitis externa (especially in floppy-eared breeds), aminoglycoside or chlorhexidine-related ototoxicity, and obstruction from inflammatory polyps or tumors.',
      'Definitive testing uses the brainstem auditory evoked response (BAER), available at university teaching hospitals and some specialty practices. For most senior dogs the clinical pattern alone is sufficient; BAER is reserved for cases where the diagnosis is uncertain.',
    ],
    clinicalSigns: [
      'Failure to respond to verbal cues that previously worked',
      'Startling when touched from behind',
      'Sleeping more deeply and being harder to rouse',
      'Increased vocalization, especially at night',
      'Not coming when called from the yard',
      'Confused response to a doorbell that previously prompted barking',
    ],
    redFlags: [
      'Acute onset deafness over hours to days — possible vestibular disease or middle ear obstruction',
      'Persistent head tilt, circling, facial nerve paralysis — suggests middle/inner ear pathology',
      'Painful ear scratching, head shaking, bloody discharge — otitis or aural hematoma',
    ],
    treatment: [
      'Age-related hearing loss has no medical or surgical cure. Management focuses on behavioral and environmental adaptation.',
      'Hand signal training is highly effective. Most older dogs already understand multiple visual cues from years of training and can learn additional ones in weeks.',
      'Underlying ear disease should be treated. A senior dog with chronic otitis may regain meaningful hearing once the inflammation resolves.',
      'Cochlear implants are not a current option for dogs. Research is ongoing.',
    ],
    lifestyleChanges: [
      'Approach a deaf dog from the front; touch their shoulder rather than startling them.',
      'Use a strong vibration collar (not shock) for distance recall in safe areas.',
      'Add a porch light or flashing yard light as a "come inside" signal at night.',
      'Keep your deaf dog on leash or in a fenced area outdoors — they cannot hear approaching vehicles.',
      'Inform groomers and pet sitters of the hearing loss to prevent startle responses.',
    ],
    prognosis: [
      'Hearing loss does not affect lifespan. Most dogs adapt rapidly with consistent hand signals and visual routines.',
      'Owners commonly underestimate how well their deaf dog can do — the bigger challenge is usually adjusting human habits than canine ones.',
    ],
    recommendedProducts: [
      {
        name: 'PetSafe Vibration Collar (no-shock)',
        description:
          'Vibration-only remote collar useful as a non-aversive recall cue for deaf dogs in fenced areas.',
        vendor: 'amazon',
        search: 'PetSafe vibration collar deaf dog',
      },
      {
        name: 'Reflective LED Dog Collar',
        description:
          'Lighted collar improves visibility during evening walks when verbal recall is no longer effective.',
        vendor: 'amazon',
        search: 'LED dog collar rechargeable',
      },
      {
        name: 'Zymox Otic Plus Ear Solution',
        description:
          'Veterinary-recommended enzymatic ear solution; useful for senior dogs with chronic otitis contributing to hearing loss.',
        vendor: 'chewy',
        path: '/b/zymox-otic',
      },
    ],
    faqs: [
      {
        question: 'How can I tell if my dog is deaf or just ignoring me?',
        answer:
          'Try sounds the dog cannot anticipate visually — clapping behind their head, the doorbell when they cannot see you, the rattle of a treat bag in another room. Consistent non-response across multiple novel sounds suggests true hearing loss.',
      },
      {
        question: 'Can hearing return?',
        answer:
          'Age-related hearing loss is permanent, but hearing lost to chronic ear infection may improve once the inflammation is treated.',
      },
      {
        question: 'Should I train hand signals before my dog goes fully deaf?',
        answer:
          'Yes. Owners who pair verbal cues with hand signals during early hearing loss have dogs that transition almost seamlessly. Common cues — sit, down, come, stay — are easy to convert.',
      },
      {
        question: 'Is a vibration collar safe for older dogs?',
        answer:
          'A vibration collar (not a shock collar) is widely used and well-tolerated. Start with low intensity and pair the vibration with rewards so it is associated with attention, not punishment.',
      },
    ],
    citations: [
      {
        label: 'AAHA Senior Care Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/senior-care-configuration/senior-care-home/',
      },
      {
        label: 'VCA Animal Hospitals — Deafness in Dogs',
        url: 'https://vcahospitals.com/know-your-pet/deafness-in-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Deafness in Animals',
        url: 'https://www.merckvetmanual.com/ear-disorders/deafness/deafness-in-animals',
      },
    ],
  },

  'laryngeal-paralysis': {
    slug: 'laryngeal-paralysis',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Laryngeal paralysis is a progressive disorder of the laryngeal cartilages that obstructs breathing. It most commonly affects older large-breed dogs — Labradors, Golden Retrievers, and Newfoundlands are over-represented. Recognizing it early matters because heat-stroke-like episodes can be life-threatening.',
    overview: [
      'In laryngeal paralysis, the muscles that open the arytenoid cartilages during inhalation lose innervation. Air movement becomes restricted, especially with exertion and heat. The disease is often part of a broader generalized neuropathy ("geriatric onset laryngeal paralysis polyneuropathy", GOLPP).',
      'The hallmark sound is a noisy, raspy inhalation — easily mistaken for normal "older dog breathing." Owners often notice exercise intolerance and a change in the dog’s bark first.',
      'Diagnosis is confirmed by laryngeal examination under light sedation. Differentials include brachycephalic obstructive airway syndrome, tracheal collapse, and laryngeal mass.',
    ],
    clinicalSigns: [
      'Raspy, noisy breathing on inhalation (stridor)',
      'Change in bark quality — hoarse or weaker',
      'Exercise intolerance, especially in heat or humidity',
      'Coughing or gagging when eating or drinking',
      'Episodes of acute distress, blue gums, collapse — emergency presentation',
      'Hind-end weakness in dogs with GOLPP',
    ],
    redFlags: [
      'Severe panting with blue/purple gums and difficulty breathing — emergency',
      'Acute heat stroke in a previously diagnosed dog — call ahead and go to the emergency vet',
      'Sudden onset stridor or collapse',
      'Aspiration pneumonia signs (coughing up phlegm, fever, lethargy) — common complication',
    ],
    treatment: [
      'Mild cases are managed conservatively: weight loss, exercise restriction, climate control, and avoidance of stress. Sedatives such as acepromazine or trazodone may be prescribed for crises.',
      'Surgical "tieback" (unilateral arytenoid lateralization) is the definitive treatment. It opens the airway permanently and is the standard of care for symptomatic dogs. The trade-off is a lifelong increased risk of aspiration pneumonia.',
      'Post-operative dogs require permanent dietary precautions — soft food, elevated bowls, no swimming — and many continue to receive periodic anti-inflammatory therapy.',
    ],
    lifestyleChanges: [
      'Walk in cool morning or evening hours; avoid midday heat.',
      'Use a harness, not a collar — neck pressure can trigger episodes.',
      'Keep the home air-conditioned; humidity is a particular trigger.',
      'Monitor weight aggressively; obesity worsens every aspect of the disease.',
      'Feed from elevated bowls to reduce aspiration risk.',
    ],
    prognosis: [
      'With timely surgical intervention, most dogs return to a near-normal quality of life. Aspiration pneumonia rates after surgery are roughly 10–25% depending on the series.',
      'Without surgery, severe cases progress and may suffer fatal respiratory crises during heat or stress.',
    ],
    recommendedProducts: [
      {
        name: 'PetSafe Easy Walk Harness',
        description:
          'A front-clip harness avoids the neck pressure that can trigger episodes in laryngeal paralysis.',
        vendor: 'amazon',
        search: 'PetSafe Easy Walk harness',
      },
      {
        name: 'Elevated Dog Bowls',
        description:
          'Raised feeders reduce aspiration risk during eating.',
        vendor: 'amazon',
        search: 'elevated dog bowl stand',
      },
      {
        name: 'Cooling Mat for Dogs',
        description:
          'Pressure-activated cooling mat helps dogs with airway disease manage warm days.',
        vendor: 'amazon',
        search: 'pressure-activated cooling mat for dogs',
      },
    ],
    faqs: [
      {
        question: 'Is the noisy breathing just normal aging?',
        answer:
          'No. Raspy inhalation in a senior large-breed dog should be evaluated for laryngeal paralysis. Untreated, it can progress to life-threatening crises.',
      },
      {
        question: 'Does my dog need surgery right away?',
        answer:
          'Not necessarily. Many dogs are managed conservatively for months to years. Surgery is recommended when episodes interfere with daily life or when the dog has had a respiratory crisis.',
      },
      {
        question: 'Can my dog still swim after surgery?',
        answer:
          'No. Swimming should be avoided permanently after tieback surgery because of the high aspiration risk.',
      },
      {
        question: 'Will the hind-end weakness keep getting worse?',
        answer:
          'In GOLPP, the polyneuropathy generally does progress slowly. Surgery addresses the airway but does not affect the neuropathy itself; supportive care (slip-resistant rugs, harness with hind-end support) helps maintain mobility.',
      },
    ],
    citations: [
      {
        label: 'ACVS — Laryngeal Paralysis in Dogs',
        url: 'https://www.acvs.org/small-animal/laryngeal-paralysis',
      },
      {
        label: 'Cornell University CVM — Laryngeal Paralysis',
        url: 'https://www.vet.cornell.edu/',
      },
      {
        label: 'Merck Veterinary Manual — Laryngeal Diseases',
        url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/laryngeal-diseases-of-small-animals',
      },
    ],
  },

  'anal-gland-disease-dogs': {
    slug: 'anal-gland-disease-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Anal gland disease — impaction, sacculitis, and abscess — is a common, painful, and often recurring problem in senior dogs, especially small breeds. It is undertreated because the signs (scooting, licking) are dismissed as quirks.',
    overview: [
      'Dogs have paired anal sacs in the 4 and 8 o’clock positions just inside the anus. They normally express small amounts of pungent fluid during defecation. Problems arise when ducts become blocked (impaction), inflamed (sacculitis), or infected to the point of rupture (abscess).',
      'Predisposing factors include chronic soft stool, obesity, food allergies that affect stool consistency, and conformational issues in small breeds.',
      'Diagnosis is by physical exam, including digital rectal exam to assess fullness, texture, and any masses. Recurrent disease warrants a more thorough workup including dietary trial and screening for anal sac neoplasia in senior dogs.',
    ],
    clinicalSigns: [
      'Scooting along the ground',
      'Excessive licking at the perianal area or base of the tail',
      'Strong fishy odor on the dog or in resting areas',
      'Pain or vocalization when defecating',
      'Visible swelling, redness, or draining tract near the anus',
      'Reluctance to sit on hard surfaces',
    ],
    redFlags: [
      'Bleeding, draining tract, or visible swelling beside the anus — possible abscess; same-day evaluation',
      'Fever, lethargy, off food — possible systemic infection',
      'Hard mass associated with the anal sac in a senior dog — must be evaluated for anal sac adenocarcinoma',
      'Painful defecation in a senior with concurrent hypercalcemia — workup for anal sac tumor warranted',
    ],
    treatment: [
      'Manual expression by a veterinary team relieves uncomplicated impaction. Many dogs require periodic expression every 3–8 weeks.',
      'Sacculitis is treated with manual emptying plus instilled antibiotic/anti-inflammatory ointments. Oral antibiotics are added when infection is established.',
      'Abscesses require sedated lancing, lavage, and oral antibiotics. Most dogs respond well; recurrence is the most common complication.',
      'Recurrent disease may justify surgical removal of the sacs (sacculectomy) — an effective but technically demanding procedure best done by a board-certified surgeon.',
    ],
    lifestyleChanges: [
      'Add insoluble fiber (canned pumpkin, psyllium) to promote firmer stool that expresses the sacs naturally.',
      'Maintain ideal body condition — obesity is a major risk factor.',
      'Investigate underlying food allergies if disease is chronic.',
      'Avoid having groomers express sacs routinely if your dog is asymptomatic; over-expression can paradoxically worsen disease.',
    ],
    prognosis: [
      'Most cases respond well to expression and dietary changes. Recurrent abscesses warrant surgical removal in some dogs.',
      'Anal sac adenocarcinoma is uncommon but important to detect; complete excision and metastasis screening are the standard of care.',
    ],
    recommendedProducts: [
      {
        name: 'Glandex Anal Gland Support',
        description:
          'Pumpkin and fiber-based supplement formulated specifically to promote natural anal gland expression.',
        vendor: 'amazon',
        search: 'Glandex anal gland support',
      },
      {
        name: 'Plain Canned Pumpkin',
        description:
          'Insoluble-fiber addition to meals — supports firmer stool and natural gland expression.',
        vendor: 'amazon',
        search: 'plain canned pumpkin for dogs',
      },
      {
        name: 'Hill’s Prescription Diet Multi-Benefit w/d',
        description:
          'High-fiber therapeutic diet that supports both weight management and stool consistency.',
        vendor: 'chewyrx',
        path: '/rx/hills-wd',
      },
    ],
    faqs: [
      {
        question: 'Is scooting always anal gland trouble?',
        answer:
          'Not always. Allergies, perianal dermatitis, tapeworms, and rectal masses can all cause scooting. A veterinary exam is the right next step in a persistent case.',
      },
      {
        question: 'Should I express my dog’s glands at home?',
        answer:
          'External expression by an inexperienced owner is generally not recommended; many home efforts move secretion deeper into the sac and worsen impaction. Internal (digital) expression by a trained professional is more effective.',
      },
      {
        question: 'How can I prevent recurrent problems?',
        answer:
          'Firmer stool from added fiber, ideal body condition, and identifying any underlying food allergy address most cases.',
      },
      {
        question: 'When should I consider surgical removal?',
        answer:
          'Dogs with three or more abscesses, chronic painful sacculitis unresponsive to medical management, or anal sac neoplasia are candidates for sacculectomy.',
      },
    ],
    citations: [
      {
        label: 'AVMA — Anal Sac Disease in Dogs',
        url: 'https://www.avma.org/',
      },
      {
        label: 'VCA Animal Hospitals — Anal Sac Disease in Dogs',
        url: 'https://vcahospitals.com/know-your-pet/anal-sac-disease-in-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Anal Sac Disease',
        url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-rectum-and-anus-in-small-animals/anal-sac-disease-in-small-animals',
      },
    ],
  },

  'urinary-incontinence-dogs': {
    slug: 'urinary-incontinence-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Urinary incontinence in senior spayed female dogs is most often a hormone-responsive disorder of urethral sphincter tone. It is highly treatable and should not be confused with behavioral house-soiling or with cognitive decline.',
    overview: [
      'Hormone-responsive urinary incontinence (also called urethral sphincter mechanism incompetence) is most common in middle-aged to senior spayed female dogs. The post-spay decline in estrogen is thought to reduce urethral tone, leading to passive urine leakage at rest.',
      'Less common causes include neurologic disease (intervertebral disc disease, degenerative myelopathy), urinary tract infection, ectopic ureter (typically congenital), and bladder masses.',
      'Diagnosis is by history, urinalysis with culture, and physical exam. Imaging may be added when neurologic or anatomic disease is suspected.',
    ],
    clinicalSigns: [
      'Wet spot on bedding after the dog has rested or slept',
      'Dribbling urine when standing or walking, with no awareness from the dog',
      'Normal voluntary urination posture and volume on walks',
      'Perivulvar dermatitis from chronic urine contact',
      'Strong urine odor in resting areas',
    ],
    redFlags: [
      'Inability to urinate voluntarily — possible urethral obstruction; emergency',
      'Hind-end weakness or knuckling alongside incontinence — neurologic workup is needed',
      'Bloody urine, straining, frequent small voids — likely UTI or stones',
      'New incontinence in a dog with PU/PD — workup for endocrine disease',
    ],
    treatment: [
      'Phenylpropanolamine (Proin ER) is the most commonly prescribed medication and is effective in roughly 75–90% of hormone-responsive cases. It works by increasing urethral sphincter tone.',
      'Estrogen therapy (estriol — Incurin) is a useful alternative or adjunct, often combined with Proin in resistant cases.',
      'Treatment of any underlying UTI is essential before evaluating incontinence response. A urine culture is part of the standard workup.',
      'Refractory cases may benefit from referral for advanced therapies including collagen injections and surgical procedures.',
    ],
    lifestyleChanges: [
      'Provide washable bedding and waterproof mattress covers.',
      'Offer frequent outdoor breaks, especially after long rest periods.',
      'Clean the perivulvar area daily with pet-safe wipes to prevent dermatitis.',
      'Use belly bands or doggy diapers as a comfort measure, but treat the underlying cause rather than relying on diapers alone.',
    ],
    prognosis: [
      'Excellent in most cases. Most spayed female dogs achieve full or near-full continence on appropriate therapy.',
      'Failure to respond to standard medications warrants a workup for less common causes, including ectopic ureter, neurologic disease, or bladder mass.',
    ],
    recommendedProducts: [
      {
        name: 'Proin ER (Phenylpropanolamine)',
        description:
          'FDA-approved once-daily medication for hormone-responsive urinary incontinence in spayed female dogs.',
        vendor: 'chewyrx',
        path: '/rx/proin-er',
      },
      {
        name: 'Incurin (Estriol)',
        description:
          'Estrogen-based therapy for hormone-responsive incontinence, often used in dogs that cannot tolerate Proin.',
        vendor: 'chewyrx',
        path: '/rx/incurin',
      },
      {
        name: 'Washable Pet Pee Pads',
        description:
          'Reusable, leak-proof pads for sleeping areas — protect bedding while treatment takes effect.',
        vendor: 'amazon',
        search: 'washable waterproof dog pee pads',
      },
    ],
    faqs: [
      {
        question: 'Is my dog leaking urine on purpose?',
        answer:
          'No. Hormone-responsive incontinence happens during rest and the dog is genuinely unaware. It is not a behavior problem.',
      },
      {
        question: 'Will Proin affect my dog’s blood pressure?',
        answer:
          'Phenylpropanolamine can elevate blood pressure modestly. Dogs with pre-existing hypertension or heart disease should be evaluated before starting therapy.',
      },
      {
        question: 'Could it be a UTI instead?',
        answer:
          'Yes, and a urine culture is part of the standard workup. UTIs and hormone-responsive incontinence can coexist; the UTI must be treated before assessing baseline continence.',
      },
      {
        question: 'Are doggy diapers helpful?',
        answer:
          'They are a useful temporary comfort measure but do not address the underlying disorder. Pursue diagnosis and treatment rather than relying on diapers long-term.',
      },
    ],
    citations: [
      {
        label: 'AVMA — Urinary Incontinence in Dogs',
        url: 'https://www.avma.org/',
      },
      {
        label: 'Cornell University CVM — Urinary Incontinence',
        url: 'https://www.vet.cornell.edu/',
      },
      {
        label: 'Merck Veterinary Manual — Urinary Incontinence',
        url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/urinary-incontinence-in-small-animals',
      },
    ],
  },

  'chronic-vomiting-dogs': {
    slug: 'chronic-vomiting-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Recurrent vomiting in a senior dog is rarely benign. It can signal pancreatitis, IBD, chronic kidney disease, hepatic disease, or neoplasia. The owner instinct to "wait and see" is often the wrong call after age 8.',
    overview: [
      'Chronic vomiting is defined as vomiting occurring on more than three days in a 1–2 week period, or recurrent episodes spaced over weeks to months. In senior dogs, the differential is broad and skews toward serious underlying disease compared with younger dogs.',
      'Common causes include chronic pancreatitis, inflammatory bowel disease, chronic kidney disease, hepatic disease, hypoadrenocorticism, foreign body, and gastrointestinal neoplasia. Less commonly, chronic vomiting reflects toxin exposure, motility disorders, or central causes such as vestibular disease.',
      'A structured workup typically includes CBC, chemistry, urinalysis, T4, fecal exam, abdominal radiographs, abdominal ultrasound, and often a specific canine pancreatic lipase (cPL or Spec cPL). Endoscopy with biopsy is the gold standard for confirming IBD or gastric neoplasia.',
    ],
    clinicalSigns: [
      'Recurrent vomiting unrelated to a single meal or exposure',
      'Weight loss despite a maintained or increased appetite',
      'Diarrhea, sometimes with mucus or blood',
      'Decreased energy or interest in play',
      'Foul breath, dehydration, or pale gums',
      'Abdominal discomfort — hunched posture, "praying" position',
    ],
    redFlags: [
      'Repeated vomiting in 6–12 hours with lethargy — possible pancreatitis, foreign body, or systemic illness',
      'Vomiting blood or material resembling coffee grounds — GI bleeding; same-day evaluation',
      'Inability to keep down water — risk of dehydration; emergency care',
      'Distended abdomen with retching but no productive vomit — possible GDV (gastric dilatation–volvulus); emergency',
    ],
    treatment: [
      'Treatment depends entirely on diagnosis. Symptomatic care — anti-nausea agents (maropitant), gastric protectants (omeprazole, sucralfate), fluid therapy — is supportive while the workup is in progress.',
      'Pancreatitis is managed with anti-nausea therapy, analgesia, IV fluids, and early reintroduction of a low-fat diet. Chronic pancreatitis requires long-term dietary fat restriction.',
      'IBD is treated with a stepwise approach: hydrolyzed or novel-protein diet trial first, then immunomodulatory medications (prednisone, cyclosporine, chlorambucil) for non-responders.',
      'Underlying systemic disease (CKD, hepatic disease, Addison’s) is addressed specifically. Identifying the cause is essential because non-specific anti-emetic therapy without diagnosis can mask progressive disease.',
    ],
    lifestyleChanges: [
      'Feed multiple small meals rather than one or two large ones.',
      'Avoid table foods and high-fat treats, which trigger pancreatitis in susceptible dogs.',
      'Keep an episode log — frequency, timing, appearance of vomit, association with meals or activity.',
      'Provide constant access to fresh water, especially during recovery from vomiting episodes.',
    ],
    prognosis: [
      'Prognosis depends entirely on the underlying diagnosis. Many causes — IBD, food-responsive enteropathy, chronic pancreatitis — are highly manageable long-term.',
      'Diagnosing the cause is the single most important step. Senior dogs with vomiting attributed to "just sensitive stomachs" without workup are at meaningful risk of having a treatable disease missed.',
    ],
    recommendedProducts: [
      {
        name: 'Cerenia (Maropitant) Tablets',
        description:
          'FDA-approved anti-nausea medication widely used in dogs with chronic vomiting of any cause.',
        vendor: 'chewyrx',
        path: '/rx/cerenia',
      },
      {
        name: 'Hill’s Prescription Diet i/d Low Fat',
        description:
          'Low-fat therapeutic diet useful in chronic pancreatitis and dietary-responsive vomiting.',
        vendor: 'chewyrx',
        path: '/rx/hills-id-low-fat',
      },
      {
        name: 'Royal Canin Hydrolyzed Protein HP',
        description:
          'Hydrolyzed-protein diet for food-responsive enteropathy and IBD trials.',
        vendor: 'chewyrx',
        path: '/rx/royal-canin-hp',
      },
      {
        name: 'Pet Acid Reducer (Famotidine OTC)',
        description:
          'Over-the-counter H2 blocker often used alongside prescribed therapy on veterinary advice.',
        vendor: 'amazon',
        search: 'famotidine for dogs',
      },
    ],
    faqs: [
      {
        question: 'How often is "too often" for a senior dog to vomit?',
        answer:
          'More than once a week, or any vomiting accompanied by lethargy, appetite loss, or weight change, warrants evaluation. Senior dogs do not have the metabolic reserves of younger dogs and decompensate faster.',
      },
      {
        question: 'Should I withhold food after vomiting?',
        answer:
          'A brief food withhold (a few hours) may be appropriate, but prolonged fasting is not. Modern veterinary guidelines favor early reintroduction of a bland or low-fat diet.',
      },
      {
        question: 'Is over-the-counter Pepcid (famotidine) safe for my dog?',
        answer:
          'Famotidine is commonly used in dogs at veterinarian-directed doses, but it is not a substitute for diagnosis in chronic vomiting. Discuss the dose and duration with your veterinarian.',
      },
      {
        question: 'Could chronic vomiting be cancer?',
        answer:
          'Gastrointestinal neoplasia is on the differential for any senior dog with chronic vomiting and weight loss. Ultrasound and biopsy are the definitive tests.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Chronic Enteropathies in Dogs',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'AAHA Senior Care Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/senior-care-configuration/senior-care-home/',
      },
      {
        label: 'Merck Veterinary Manual — Vomiting in Small Animals',
        url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/vomiting-in-small-animals',
      },
    ],
  },
}
