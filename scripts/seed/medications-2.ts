// Senior pet medications — partial 2 (7 medications)

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

export const MEDICATIONS_2 = {
  enalapril: {
    slug: 'enalapril',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Enalapril is an ACE inhibitor widely used in dogs and cats with congestive heart failure or proteinuric chronic kidney disease. It reduces afterload, slows cardiac remodeling, and reduces protein loss in the kidneys.',
    overview: [
      'Enalapril blocks angiotensin-converting enzyme, reducing the production of angiotensin II.',
      'Used in heart failure (typically in combination with pimobendan and furosemide) and as antiproteinuric therapy in CKD.',
      'Renal function and electrolytes should be checked before and during therapy.',
    ],
    conditionsTreated: ['Congestive heart failure', 'Proteinuric chronic kidney disease', 'Systemic hypertension (adjunct)'],
    sideEffects: ['Hypotension', 'Azotemia in volume-depleted animals', 'Hyperkalemia (rare)', 'GI signs'],
    doseRange: [
      'Canine: 0.5 mg/kg orally once or twice daily.',
      'Feline: 0.25–0.5 mg/kg orally once daily.',
      'Always confirm dose with your veterinarian.',
    ],
    interactions: [
      'Use caution with diuretics (potential additive hypotension)',
      'Avoid concurrent NSAIDs when possible',
      'Combine carefully with spironolactone — monitor potassium',
    ],
    monitoring: [
      'Renal values and electrolytes 1–2 weeks after starting and after dose changes',
      'Blood pressure',
      'Periodic UPC in CKD patients',
    ],
    faqs: [
      {
        question: 'Why is enalapril used in kidney disease?',
        answer:
          'It reduces glomerular pressure and proteinuria, which slows disease progression in dogs and cats with significant urinary protein loss.',
      },
      {
        question: 'Can my pet take enalapril if dehydrated?',
        answer:
          'No — dehydration substantially increases the risk of acute kidney injury on ACE inhibitors. Rehydration is necessary first.',
      },
    ],
    citations: COMMON_CITATIONS,
  },

  cosequin: {
    slug: 'cosequin',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Cosequin is a glucosamine/chondroitin joint supplement used in dogs and cats as part of multimodal arthritis management. Although nutraceuticals are not regulated as drugs, Cosequin carries the NASC Quality Seal and is among the most widely studied veterinary joint supplements.',
    overview: [
      'Available in multiple formulations (Cosequin DS, Cosequin Maximum Strength, Cosequin for Cats).',
      'Most useful as an adjunct rather than monotherapy in clinically painful arthritis.',
      'Onset of effect is gradual — most owners see changes over weeks to months.',
    ],
    conditionsTreated: ['Canine and feline osteoarthritis (adjunct)'],
    sideEffects: ['GI upset (uncommon)', 'Allergic reactions in shellfish-sensitive pets'],
    doseRange: [
      'Follow product label by body weight; loading doses are typically used for the first 4–6 weeks before transitioning to maintenance.',
      'Confirm with your veterinarian, especially in pets with multiple supplements.',
    ],
    interactions: ['No major drug interactions reported'],
    monitoring: ['Clinical reassessment of comfort and function'],
    faqs: [
      {
        question: 'How long until I see results?',
        answer:
          'Most pets show changes over 4–8 weeks. If no change is seen in 12 weeks, the supplement is unlikely to be helping.',
      },
      {
        question: 'Is Cosequin a substitute for pain medication?',
        answer:
          'No. It is an adjunct. Clinically painful arthritis usually requires prescription analgesia.',
      },
    ],
    citations: COMMON_CITATIONS,
  },

  dasuquin: {
    slug: 'dasuquin',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Dasuquin adds avocado/soybean unsaponifiables (ASU) to the glucosamine/chondroitin combination found in Cosequin. ASU has independent evidence for cartilage support; Dasuquin is often chosen for dogs and cats with moderate arthritis where the additional component is judged worthwhile.',
    overview: [
      'Available in canine (Dasuquin, Dasuquin Advanced) and feline (Dasuquin for Cats) formulations.',
      'Dasuquin Advanced includes additional joint-supporting compounds and is used by some veterinarians for higher-severity cases.',
    ],
    conditionsTreated: ['Canine and feline osteoarthritis (adjunct)'],
    sideEffects: ['GI upset (uncommon)', 'Shellfish allergy precaution'],
    doseRange: ['Follow product label by body weight; confirm with your veterinarian.'],
    interactions: ['No major drug interactions reported'],
    monitoring: ['Clinical reassessment'],
    faqs: [
      {
        question: 'Is Dasuquin worth the upgrade from Cosequin?',
        answer:
          'The added ASU has independent supporting evidence. The decision is often based on cost and individual response.',
      },
    ],
    citations: COMMON_CITATIONS,
  },

  methimazole: {
    slug: 'methimazole',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Methimazole is the most common medical treatment for feline hyperthyroidism. It inhibits thyroid hormone synthesis and controls hyperthyroidism for as long as it is given. Both oral tablets (Felimazole) and compounded transdermal formulations are widely used.',
    overview: [
      'Methimazole does not destroy thyroid tissue; it suppresses hormone production. Stopping the medication causes return of hyperthyroidism.',
      'Transdermal compounded formulations are well-tolerated by cats that refuse pills; absorption is somewhat more variable than oral.',
      'Routine monitoring catches adverse effects early — most are reversible.',
    ],
    conditionsTreated: ['Feline hyperthyroidism'],
    sideEffects: [
      'GI signs (vomiting, anorexia) — typically early',
      'Facial pruritus and excoriation (occasionally severe)',
      'Hepatic toxicity (uncommon)',
      'Blood dyscrasias (rare but serious)',
    ],
    doseRange: [
      'Feline starting dose: typically 2.5 mg orally twice daily; transdermal dose somewhat higher.',
      'Dose titrated by T4 levels every 2–4 weeks initially.',
      'Confirm with your veterinarian.',
    ],
    interactions: [
      'Wear gloves when handling; methimazole is absorbed transdermally',
      'Discuss other medications with your veterinarian',
    ],
    monitoring: [
      'T4 every 2–4 weeks initially, then every 3–6 months once stable',
      'CBC and chemistry at baseline and periodically',
      'Blood pressure measurement',
      'Renal values — treatment may unmask underlying CKD',
    ],
    faqs: [
      {
        question: 'Is transdermal methimazole as effective as oral?',
        answer:
          'For most cats, yes, though absorption is more variable. Recheck T4 confirms control.',
      },
      {
        question: 'Can my cat ever stop methimazole?',
        answer:
          'Only if you choose I-131 (curative) or surgical thyroidectomy. Discontinuing without those interventions returns the cat to hyperthyroid state.',
      },
      {
        question: 'Why must I wear gloves?',
        answer:
          'Methimazole is absorbed through human skin and can suppress thyroid function in chronic exposure scenarios.',
      },
    ],
    citations: [
      {
        label: 'AAFP Hyperthyroidism Guidelines',
        url: 'https://catvets.com/guidelines/practice-guidelines/hyperthyroidism-guidelines',
      },
      ...COMMON_CITATIONS,
    ],
  },

  'insulin-glargine-cats': {
    slug: 'insulin-glargine-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Insulin glargine (Lantus) is widely used as first-line insulin for diabetic cats because of its long, smooth pharmacokinetics and its strong association with diabetic remission when paired with strict carbohydrate restriction.',
    overview: [
      'Glargine is a long-acting human insulin commonly used off-label in cats with strong evidence base for tight glucose control and remission.',
      'Twice-daily administration paired with low-carb diet maximizes the chance of remission, especially in the first 3–6 months after diagnosis.',
      'Home monitoring with a continuous glucose monitor or a pet-validated glucometer is the modern standard.',
    ],
    conditionsTreated: ['Feline diabetes mellitus'],
    sideEffects: [
      'Hypoglycemia (most dangerous acute risk)',
      'Local injection-site discomfort',
      'Allergic reactions (rare)',
    ],
    doseRange: [
      'Initial starting doses are typically 0.25–0.5 U/kg twice daily; doses are then titrated based on glucose curves and clinical response.',
      'Dose adjustments should be made only on veterinary advice — small changes have outsized effects in cats.',
    ],
    interactions: ['Corticosteroids increase insulin requirements substantially'],
    monitoring: [
      'Glucose curves periodically',
      'Continuous glucose monitor data when available',
      'Fructosamine every 1–3 months',
      'Body weight, clinical signs, and home logs',
    ],
    faqs: [
      {
        question: 'Will my cat go into remission?',
        answer:
          'Many newly diagnosed cats do — particularly those started on insulin glargine plus a strict low-carb canned diet within weeks of diagnosis.',
      },
      {
        question: 'How do I avoid hypoglycemia?',
        answer:
          'Always feed before injecting; never adjust dose without veterinary guidance; keep Karo syrup accessible; consider a continuous glucose monitor.',
      },
      {
        question: 'Is Lantus better than ProZinc?',
        answer:
          'Both are effective. Glargine has stronger published evidence for remission rates; ProZinc is FDA-approved for cats. Discuss the choice with your veterinarian.',
      },
    ],
    citations: [
      {
        label: 'AAHA Diabetes Management Guidelines',
        url: 'https://www.aaha.org/aaha-guidelines/diabetes-management/home/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  vetsulin: {
    slug: 'vetsulin',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Vetsulin is a porcine insulin zinc suspension and the only FDA-approved insulin for both dogs and cats. It is intermediate-acting and given twice daily with meals.',
    overview: [
      'Vetsulin must be thoroughly resuspended (shaken or rolled) before each draw to ensure consistent dosing.',
      'Used twice daily with consistent meals; missed doses or food withdrawal produce glucose swings.',
      'Available in U-40 strength — a different concentration than human insulins — requiring U-40 syringes.',
    ],
    conditionsTreated: ['Canine diabetes mellitus', 'Feline diabetes mellitus'],
    sideEffects: ['Hypoglycemia', 'Injection-site reactions (rare)'],
    doseRange: [
      'Canine starting dose: approximately 0.5 U/kg twice daily.',
      'Feline starting dose: approximately 1–2 U per cat twice daily.',
      'Always confirm specific dose and dilution with your veterinarian.',
    ],
    interactions: ['Corticosteroids substantially raise insulin requirements'],
    monitoring: [
      'Glucose curves periodically',
      'Continuous glucose monitor when available',
      'Fructosamine, body weight, home logs',
    ],
    faqs: [
      {
        question: 'Why do I have to shake Vetsulin?',
        answer:
          'It is a suspension — the active drug settles. Without resuspension, drawn doses are inconsistent.',
      },
      {
        question: 'What syringes do I use?',
        answer:
          'U-40 syringes for U-40 Vetsulin. Using a U-100 syringe causes serious under-dosing.',
      },
      {
        question: 'Is Vetsulin still the right choice for cats?',
        answer:
          'It is FDA-approved for cats but many veterinarians prefer glargine for cats because of the higher published remission rates.',
      },
    ],
    citations: [
      {
        label: 'FDA Vetsulin Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  'trilostane-vetoryl': {
    slug: 'trilostane-vetoryl',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Trilostane (Vetoryl) is the most commonly used treatment for Cushing’s disease in dogs. It inhibits adrenal cortisol synthesis and is dosed once or twice daily, with periodic ACTH stimulation tests or pre-pill cortisol monitoring guiding adjustments.',
    overview: [
      'Trilostane is reversible — its effect persists only while the drug is present. Missing doses returns cortisol to baseline.',
      'Used in both pituitary-dependent and adrenal-dependent canine Cushing’s.',
      'Periodic monitoring is essential because over-suppression can produce iatrogenic Addisonian crisis.',
    ],
    conditionsTreated: ['Canine hyperadrenocorticism (Cushing’s disease)'],
    sideEffects: ['Vomiting, diarrhea, lethargy (signs of over-suppression)', 'Iatrogenic Addisonian crisis (rare but serious)'],
    doseRange: [
      'Initial dosing typically 1–3 mg/kg orally once daily, often divided to twice daily.',
      'Titrated based on monitoring.',
      'Always confirm specific dose with your veterinarian.',
    ],
    interactions: [
      'Avoid concurrent corticosteroids',
      'Use caution with potassium-sparing diuretics',
    ],
    monitoring: [
      'ACTH stimulation test 10–14 days after starting',
      'Recheck at 30 days, then every 3–6 months once stable',
      'Pre-pill cortisol monitoring is an increasingly used alternative',
      'Watch for vomiting, diarrhea, anorexia — call your veterinarian for any of these',
    ],
    faqs: [
      {
        question: 'How quickly will I see results?',
        answer:
          'Some clinical signs (excessive thirst, appetite) often improve within weeks. Coat changes and muscle wasting recover more slowly.',
      },
      {
        question: 'What if my dog seems sluggish or has GI signs?',
        answer:
          'Call your veterinarian. These may be early signs of over-suppression; treatment is usually a dose reduction or brief drug holiday.',
      },
      {
        question: 'Is trilostane safe long-term?',
        answer:
          'Yes for most dogs, with structured monitoring. The biggest pitfall is missed rechecks.',
      },
    ],
    citations: [
      {
        label: 'FDA Vetoryl Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },
}
