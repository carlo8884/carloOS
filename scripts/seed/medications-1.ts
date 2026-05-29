// Senior pet medications — partial 1 (7 medications)

const COMMON_CITATIONS = [
  {
    label: 'Merck Veterinary Manual — Pharmacology',
    url: 'https://www.merckvetmanual.com/pharmacology',
  },
  {
    label: 'AAHA Clinical Resources',
    url: 'https://www.aaha.org/aaha-guidelines/',
  },
]

export const MEDICATIONS_1 = {
  adequan: {
    slug: 'adequan',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Adequan Canine (polysulfated glycosaminoglycan, PSGAG) is the only FDA-approved injectable disease-modifying osteoarthritis drug for dogs. It supports cartilage and modulates joint inflammation through mechanisms distinct from NSAIDs.',
    overview: [
      'Adequan is administered intramuscularly. The standard loading protocol is 2 mg/lb (4.4 mg/kg) twice weekly for 4 weeks (8 injections), followed by individualized maintenance dosing.',
      'Many owners learn to administer maintenance injections at home after veterinary training, which substantially reduces ongoing cost and clinic visits.',
      'Adequan’s mechanism centers on inhibiting cartilage-degrading enzymes and supporting glycosaminoglycan synthesis. The evidence base is strongest for early-stage osteoarthritis but the drug is used at all disease stages.',
    ],
    conditionsTreated: [
      'Canine osteoarthritis (FDA-approved indication)',
      'Off-label use in feline arthritis (extrapolated, less data)',
    ],
    sideEffects: [
      'Local injection-site discomfort',
      'Mild GI upset (uncommon)',
      'Rare bleeding tendency in dogs with coagulopathies',
      'Allergic reactions (rare)',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 2 mg/lb IM twice weekly for 4 weeks (loading), then maintenance dosing tailored to the individual dog.',
      'Maintenance schedules vary from every 2 weeks to every 4–6 weeks based on response and the dog’s comfort.',
      'Always confirm specific dose, frequency, and route with your veterinarian.',
    ],
    interactions: [
      'Use with caution in dogs with known bleeding disorders',
      'No significant interactions with NSAIDs in published studies; commonly used in combination',
      'Compatible with most analgesics including gabapentin and amantadine',
    ],
    monitoring: [
      'Periodic clinical reassessment of comfort and function',
      'CBC and chemistry as part of routine senior monitoring',
      'Pain-scoring at home using a structured tool helps quantify response',
    ],
    faqs: [
      {
        question: 'How quickly will I see improvement?',
        answer:
          'Most owners notice changes within 2–4 weeks of starting the loading protocol; full effect is typically seen by completion of the 8-injection loading series.',
      },
      {
        question: 'Can I give Adequan at home?',
        answer:
          'Yes — many veterinary teams train owners to administer IM injections at home after the loading series. This reduces ongoing cost considerably.',
      },
      {
        question: 'Is it safe to combine with my dog’s NSAID?',
        answer:
          'Yes. Adequan is commonly used alongside NSAIDs and is part of standard multimodal arthritis therapy.',
      },
    ],
    citations: [
      {
        label: 'FDA Adequan Canine Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  galliprant: {
    slug: 'galliprant',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Galliprant (grapiprant) is an EP4 prostaglandin receptor antagonist — a piprant-class drug. It is FDA-approved for canine osteoarthritis pain and is often selected for dogs with concurrent kidney disease because its mechanism differs from traditional NSAIDs.',
    overview: [
      'Galliprant blocks the EP4 receptor that mediates much of the pain and inflammation in osteoarthritis without inhibiting protective prostaglandin pathways the way traditional NSAIDs do.',
      'It is given once daily and is well-tolerated by most dogs. Baseline bloodwork (CBC, chemistry) is recommended before starting, and periodic rechecks are standard.',
      'Galliprant is approved for dogs only — not for cats.',
    ],
    conditionsTreated: ['Canine osteoarthritis pain and inflammation'],
    sideEffects: [
      'Mild GI signs (decreased appetite, soft stool) — usually self-limited',
      'Occasional vomiting',
      'Rare elevations in liver enzymes',
      'Rare bleeding tendency',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 2 mg/kg (0.91 mg/lb) orally once daily.',
      'Best given on an empty stomach.',
      'Always confirm specific dose with your veterinarian — body weight changes warrant dose recalibration.',
    ],
    interactions: [
      'Avoid concurrent use with other NSAIDs or corticosteroids',
      'Use caution in dogs receiving concurrent ACE inhibitors',
      'Discuss any new medication or supplement with your veterinarian',
    ],
    monitoring: [
      'Baseline bloodwork before starting',
      'Periodic chemistry (kidney, liver) — typically at 1 month and then every 6–12 months',
      'Clinical reassessment of pain and function',
    ],
    faqs: [
      {
        question: 'Is Galliprant safer than other NSAIDs?',
        answer:
          'Its mechanism is distinct and may produce a different safety profile, especially for the kidneys. It is still important to monitor bloodwork and watch for GI signs.',
      },
      {
        question: 'Can I give Galliprant with food?',
        answer:
          'Yes, although the manufacturer notes empty-stomach administration. Food does not significantly change effectiveness for most dogs.',
      },
      {
        question: 'Can my cat take Galliprant?',
        answer:
          'No — Galliprant is approved for dogs only.',
      },
    ],
    citations: [
      {
        label: 'FDA Galliprant Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  rimadyl: {
    slug: 'rimadyl',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Rimadyl (carprofen) is a COX-2 preferential NSAID that has been a foundation of canine osteoarthritis therapy for decades. It is generally well-tolerated, but routine bloodwork monitoring is essential because of its potential for liver and kidney effects.',
    overview: [
      'Carprofen is available as chewable tablets, caplets, and an injectable form. Dosing is twice daily or once daily.',
      'Many senior dogs receive carprofen as long-term arthritis therapy. The combination of low effective dose, daily monitoring of clinical signs, and periodic bloodwork supports safe long-term use.',
      'Idiopathic hepatotoxicity, while rare, has been reported, with a notably higher reported rate in Labrador Retrievers.',
    ],
    conditionsTreated: ['Canine osteoarthritis', 'Post-surgical pain'],
    sideEffects: [
      'GI signs (vomiting, diarrhea, decreased appetite) — most common',
      'Liver enzyme elevation',
      'Renal effects, particularly in dehydrated dogs',
      'Rare idiosyncratic hepatotoxicity',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 2 mg/lb total daily, divided twice daily or as a single daily dose.',
      'Lower effective doses are commonly used for long-term arthritis management under veterinary direction.',
      'Always confirm dose with your veterinarian.',
    ],
    interactions: [
      'Avoid concurrent use with corticosteroids or other NSAIDs',
      'Use caution with ACE inhibitors and diuretics',
      'Discuss with your veterinarian before adding any new medication',
    ],
    monitoring: [
      'Baseline bloodwork before starting',
      'Recheck at 2–4 weeks',
      'Then every 6 months',
      'Discontinue and call your veterinarian for vomiting, anorexia, lethargy, jaundice, or dark stools',
    ],
    faqs: [
      {
        question: 'Is Rimadyl safe for older dogs?',
        answer:
          'Yes, in most cases, with proper bloodwork monitoring and clinical follow-up. Many senior dogs take carprofen for years without difficulty.',
      },
      {
        question: 'Can I give my dog Tylenol or ibuprofen instead?',
        answer:
          'No. Human OTC NSAIDs are dangerous in dogs. Use only veterinary-prescribed analgesics.',
      },
      {
        question: 'My dog vomited once after a dose — should I continue?',
        answer:
          'Call your veterinarian. A single vomiting episode does not always mean the medication must be stopped, but it warrants conversation and possibly a recheck.',
      },
    ],
    citations: [
      {
        label: 'FDA Rimadyl Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  'meloxicam-dogs': {
    slug: 'meloxicam-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Meloxicam (Metacam) is a once-daily oral suspension NSAID widely used for chronic canine arthritis. It has a long track record and the liquid formulation allows easy dose titration in older dogs.',
    overview: [
      'Meloxicam is COX-2 preferential and is dosed once daily. The oral suspension makes precise small-dose adjustments easy, which is particularly useful for senior dogs at low chronic doses.',
      'It is approved for dogs in the United States but use in cats is generally limited to short-term (e.g., post-operative) applications due to potential for renal injury at chronic doses.',
    ],
    conditionsTreated: ['Canine osteoarthritis', 'Post-surgical pain'],
    sideEffects: [
      'GI signs',
      'Renal effects (especially in dehydrated dogs)',
      'Liver enzyme elevation',
      'Rare bleeding effects',
    ],
    doseRange: [
      'Canine FDA-labeled dose: initial 0.2 mg/kg, then 0.1 mg/kg once daily.',
      'Long-term low-effective-dose strategies are common in senior dogs.',
      'Always confirm with your veterinarian.',
    ],
    interactions: [
      'Avoid concurrent NSAIDs and corticosteroids',
      'Use caution with diuretics, ACE inhibitors',
    ],
    monitoring: [
      'Baseline and serial bloodwork as with all NSAIDs',
      'Clinical reassessment of comfort and function',
      'Discontinue and call your veterinarian for vomiting, anorexia, lethargy, or dark stool',
    ],
    faqs: [
      {
        question: 'Is meloxicam safe for cats?',
        answer:
          'Short-term use is approved in some countries; chronic use in cats carries renal risk and is approached cautiously. Solensia has become the more common chronic feline pain therapy.',
      },
      {
        question: 'Why is meloxicam often preferred for dose titration?',
        answer:
          'The oral suspension allows precise volumes for finely tuned dosing — particularly helpful in geriatric dogs with multiple comorbidities.',
      },
    ],
    citations: [
      {
        label: 'FDA Metacam Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  apoquel: {
    slug: 'apoquel',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Apoquel (oclacitinib) is a JAK inhibitor used to control chronic allergic itch in dogs. It works rapidly — often within hours — and is widely prescribed for dogs with atopic dermatitis, including seniors.',
    overview: [
      'Apoquel blocks JAK1-dependent cytokine signaling, reducing itch and inflammation. Onset of action is rapid.',
      'Loading dose is twice daily for 14 days, then once daily maintenance.',
      'Long-term immune-modulating effects warrant veterinary monitoring, especially in older dogs with infection or neoplasia risk.',
    ],
    conditionsTreated: ['Atopic dermatitis', 'Allergic pruritus in dogs'],
    sideEffects: [
      'Mild GI signs',
      'Risk of demodicosis activation in predisposed dogs',
      'Possible increased susceptibility to infection',
      'Caution warranted in dogs with neoplasia history',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 0.4–0.6 mg/kg twice daily for up to 14 days, then once daily.',
      'Use in dogs younger than 12 months is generally not recommended.',
      'Confirm with your veterinarian.',
    ],
    interactions: [
      'Use caution with concurrent immunosuppressants',
      'Monitor closely if administered with chemotherapy agents',
    ],
    monitoring: [
      'Baseline bloodwork',
      'Periodic CBC and chemistry',
      'Vigilance for new infections or skin masses',
    ],
    faqs: [
      {
        question: 'How quickly will my dog stop itching?',
        answer:
          'Most dogs show meaningful itch reduction within 4–24 hours of the first dose.',
      },
      {
        question: 'Is Apoquel safe long-term in a senior dog?',
        answer:
          'Yes for many dogs, with appropriate monitoring. Discuss any history of infections or neoplasia with your veterinarian before starting or continuing.',
      },
      {
        question: 'Can I combine Apoquel with Cytopoint?',
        answer:
          'Sometimes — discuss with your veterinarian. The two have different mechanisms and are occasionally used together in challenging cases.',
      },
    ],
    citations: [
      {
        label: 'FDA Apoquel Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  cytopoint: {
    slug: 'cytopoint',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Cytopoint (lokivetmab) is a caninized monoclonal antibody targeting IL-31, a major itch cytokine. A single subcutaneous injection in the clinic provides 4–8 weeks of itch control with minimal systemic burden.',
    overview: [
      'Cytopoint binds and neutralizes IL-31, the primary cytokine driving allergic itch in dogs.',
      'Because it acts only on IL-31, it does not produce broad immune suppression. This makes it a particularly attractive option for older dogs with complex health status.',
      'Effective only for allergic itch — not for itch caused by infections, parasites, or other non-allergic causes.',
    ],
    conditionsTreated: ['Atopic dermatitis', 'Allergic itch in dogs'],
    sideEffects: [
      'Local injection-site reaction (rare)',
      'Hypersensitivity reactions (rare)',
      'Mild GI signs (uncommon)',
    ],
    doseRange: [
      'Canine FDA-labeled dose: minimum 2 mg/kg subcutaneously, repeated every 4–8 weeks based on response.',
      'Administered by your veterinarian.',
    ],
    interactions: ['No significant drug interactions reported'],
    monitoring: [
      'Clinical reassessment at each injection',
      'Periodic dermatology workup if response wanes',
    ],
    faqs: [
      {
        question: 'How quickly does Cytopoint work?',
        answer:
          'Most dogs show meaningful improvement within 24–72 hours.',
      },
      {
        question: 'How often will my dog need injections?',
        answer:
          'Most dogs are dosed every 4–8 weeks depending on individual response.',
      },
      {
        question: 'Is Cytopoint safer than Apoquel for senior dogs?',
        answer:
          'It is more selective and does not produce broad immune effects, which can be attractive in older dogs with comorbidities. Effectiveness varies by individual.',
      },
    ],
    citations: [
      {
        label: 'FDA Cytopoint Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  vetmedin: {
    slug: 'vetmedin',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Vetmedin (pimobendan) is the cornerstone of modern canine heart-failure therapy. It improves cardiac output and reduces afterload, and the EPIC trial demonstrated significant delay in onset of CHF when started in preclinical Stage B2 disease.',
    overview: [
      'Pimobendan is an inodilator: it improves contractility (positive inotropy) and reduces vascular resistance (vasodilation), without raising myocardial oxygen demand the way traditional inotropes do.',
      'It is given twice daily, typically 1 hour before meals for optimal absorption.',
      'Cardiology referral and echocardiography are recommended to confirm appropriate disease stage before starting therapy.',
    ],
    conditionsTreated: ['Mitral valve disease (Stage B2 and CHF)', 'Dilated cardiomyopathy'],
    sideEffects: [
      'GI signs',
      'Ventricular arrhythmias (uncommon)',
      'Sudden death (rare)',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 0.25 mg/kg orally twice daily.',
      'Confirm dose, timing, and disease stage with your veterinarian.',
    ],
    interactions: [
      'Generally compatible with diuretics, ACE inhibitors, and spironolactone',
      'Discuss new medications with your veterinarian',
    ],
    monitoring: [
      'Resting respiratory rate at home daily',
      'Periodic recheck with thoracic imaging or echocardiography',
      'Renal values and electrolytes if combined with diuretics',
    ],
    faqs: [
      {
        question: 'When should pimobendan be started?',
        answer:
          'The EPIC trial supports starting in preclinical Stage B2 (cardiomegaly without symptoms) of mitral valve disease. In symptomatic CHF, it is part of standard therapy.',
      },
      {
        question: 'Does pimobendan cure heart disease?',
        answer:
          'No. It improves cardiac function and quality of life and delays progression to CHF — but the underlying disease continues.',
      },
      {
        question: 'Can my cat take pimobendan?',
        answer:
          'Use in cats is off-label and is occasionally pursued in specific feline cardiomyopathies under cardiologist guidance.',
      },
    ],
    citations: [
      {
        label: 'EPIC Trial — Pimobendan in Preclinical MMVD',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'FDA Vetmedin Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },
}
