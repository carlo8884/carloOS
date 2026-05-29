// Senior pet medications — partial 3 (6 medications)

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

export const MEDICATIONS_3 = {
  'levothyroxine-soloxine': {
    slug: 'levothyroxine-soloxine',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Levothyroxine sodium (Thyro-Tabs, Soloxine) is the standard replacement therapy for canine hypothyroidism. Once-daily or twice-daily dosing restores energy, weight, and coat quality within weeks.',
    overview: [
      'Levothyroxine is synthetic T4 (thyroxine), which the body converts to active T3.',
      'Initial dosing is twice daily; many dogs are eventually transitioned to once daily based on T4 monitoring.',
      'Therapy is lifelong; stopping returns the dog to hypothyroid state.',
    ],
    conditionsTreated: ['Canine hypothyroidism'],
    sideEffects: ['Signs of thyrotoxicosis if over-dosed: panting, restlessness, weight loss, tachycardia'],
    doseRange: [
      'Starting dose: approximately 0.02 mg/kg orally every 12 hours.',
      'Adjusted based on T4 measured 4–6 hours post-dose.',
      'Confirm dose with your veterinarian.',
    ],
    interactions: [
      'Calcium and high-fat meals reduce absorption',
      'Corticosteroids alter thyroid hormone levels',
    ],
    monitoring: [
      'T4 (and ideally fT4 by ED + TSH) at 4–6 weeks after starting and after dose changes',
      'Annual T4 once stable',
    ],
    faqs: [
      {
        question: 'How quickly will I see improvement?',
        answer:
          'Energy and attitude often return in 1–2 weeks; coat regrowth takes 6–12 weeks.',
      },
      {
        question: 'Is generic levothyroxine acceptable?',
        answer:
          'Yes, but switching brands can alter blood levels. Once a brand is producing good control, it is usually best to stay with it.',
      },
    ],
    citations: COMMON_CITATIONS,
  },

  'selegiline-anipryl': {
    slug: 'selegiline-anipryl',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Selegiline (Anipryl) is an MAO-B inhibitor FDA-approved for canine cognitive dysfunction. It is also used off-label in some cats. About one-third of treated dogs show notable improvement.',
    overview: [
      'Selegiline increases dopamine and other neurotransmitters in the brain by blocking MAO-B.',
      'Onset is gradual — meaningful improvement is typically seen within 4–8 weeks.',
      'Drug interactions are extensive; disclose all medications to your veterinarian.',
    ],
    conditionsTreated: ['Canine cognitive dysfunction', 'Off-label use in feline cognitive dysfunction'],
    sideEffects: ['GI signs', 'Restlessness', 'Rare seizures'],
    doseRange: [
      'Canine FDA-labeled dose: 0.5–1.0 mg/kg orally once daily in the morning.',
      'Confirm with your veterinarian.',
    ],
    interactions: [
      'Avoid concurrent SSRIs, tricyclic antidepressants, tramadol, ephedrine, and certain opioids',
      'Inform every veterinarian about selegiline before procedures',
    ],
    monitoring: ['Clinical reassessment using DISHA framework', 'CADES owner questionnaire helps track response'],
    faqs: [
      {
        question: 'Will my dog "wake up" right away?',
        answer:
          'No. Most responders show changes over 4–8 weeks.',
      },
      {
        question: 'What if there is no response?',
        answer:
          'About one-third of dogs do not respond meaningfully. Multimodal therapy (diet, supplements, anxiety management) may still help.',
      },
    ],
    citations: [
      {
        label: 'FDA Anipryl Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  'proin-er': {
    slug: 'proin-er',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Proin ER (phenylpropanolamine extended-release) is the FDA-approved standard treatment for hormone-responsive urinary incontinence in spayed female dogs. It increases urethral sphincter tone and resolves leakage in roughly 75–90% of cases.',
    overview: [
      'Proin ER is dosed once daily — a meaningful convenience compared with older twice- or three-times-daily PPA formulations.',
      'Most dogs respond within 1–2 weeks; full effect is typically seen by 4 weeks.',
      'Blood-pressure-sensitive dogs warrant evaluation before starting.',
    ],
    conditionsTreated: ['Urinary sphincter mechanism incompetence (hormone-responsive incontinence)'],
    sideEffects: [
      'Restlessness',
      'Decreased appetite',
      'Increased blood pressure',
      'Behavior change',
    ],
    doseRange: [
      'Canine FDA-labeled dose: 2–4 mg/kg orally once daily.',
      'Use caution in dogs with hypertension or heart disease.',
      'Confirm with your veterinarian.',
    ],
    interactions: [
      'Avoid concurrent MAOIs (selegiline)',
      'Use caution with thyroid hormone, sympathomimetics, and tricyclic antidepressants',
    ],
    monitoring: ['Blood pressure', 'Clinical assessment of continence', 'Periodic urinalysis with culture'],
    faqs: [
      {
        question: 'Why was the old PPA formulation reformulated?',
        answer:
          'The extended-release formulation reduces blood-level peaks, smooths the cardiovascular effects, and allows once-daily dosing.',
      },
      {
        question: 'Can I combine Proin with estrogen?',
        answer:
          'Yes — combined therapy (Proin plus Incurin) is sometimes used in dogs that do not fully respond to either alone.',
      },
    ],
    citations: [
      {
        label: 'FDA Proin ER Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  gabapentin: {
    slug: 'gabapentin',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Gabapentin is a versatile medication used in senior pets for chronic pain, neuropathic pain, anxiety, and as a pre-visit sedative. It is widely used off-label in both dogs and cats and is generally well-tolerated.',
    overview: [
      'Gabapentin modulates calcium channels in the central nervous system, reducing neuropathic and chronic pain signaling.',
      'Onset is rapid for sedation; chronic pain benefit may take days to fully develop.',
      'Compounded liquid formulations are commonly used in cats — confirm with the pharmacist that the formulation does not contain xylitol (toxic to dogs and contraindicated in any pet).',
    ],
    conditionsTreated: ['Chronic pain', 'Neuropathic pain', 'Pre-visit anxiety in cats', 'Adjunct in arthritis'],
    sideEffects: ['Sedation', 'Ataxia at higher doses', 'Mild GI signs'],
    doseRange: [
      'Canine: 5–15 mg/kg orally every 8–12 hours for chronic pain; higher for acute sedation.',
      'Feline: 10–20 mg/kg orally for anxiolysis 2–3 hours before vet visits; lower chronic doses for arthritis.',
      'Reduced dosing recommended in pets with kidney disease.',
      'Confirm with your veterinarian.',
    ],
    interactions: ['Sedative effects may be additive with opioids and other CNS depressants'],
    monitoring: ['Clinical assessment of pain or anxiety control'],
    faqs: [
      {
        question: 'Is gabapentin safe with my cat’s kidney disease?',
        answer:
          'It can be — but the dose typically needs to be reduced. Discuss with your veterinarian.',
      },
      {
        question: 'How quickly does gabapentin work for vet anxiety?',
        answer:
          'Sedation typically develops within 1–2 hours and peaks within 2–3 hours of administration.',
      },
      {
        question: 'Why does my pharmacist ask about xylitol?',
        answer:
          'Some compounded human gabapentin liquids contain xylitol, which is highly toxic to dogs. Pet-appropriate compounded formulations should be xylitol-free.',
      },
    ],
    citations: COMMON_CITATIONS,
  },

  'solensia-cats': {
    slug: 'solensia-cats',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Solensia (frunevetmab) is the first FDA-approved chronic pain medication for cats. A monthly subcutaneous injection blocks nerve growth factor (NGF), substantially reducing osteoarthritis pain with minimal systemic burden.',
    overview: [
      'Solensia is a felinized monoclonal antibody — it does not produce broad immune suppression.',
      'Administered monthly by your veterinarian.',
      'Most cats show meaningful improvement within 1–2 weeks of the first injection.',
    ],
    conditionsTreated: ['Feline osteoarthritis pain'],
    sideEffects: ['Injection-site reactions (mild, uncommon)', 'Dermatitis (uncommon)'],
    doseRange: [
      'Feline FDA-labeled dose: weight-based monthly subcutaneous injection administered by your veterinarian.',
      'Specific dose set by the manufacturer chart.',
    ],
    interactions: ['No significant drug interactions reported'],
    monitoring: ['Clinical reassessment monthly', 'FMPI or similar pain scoring tool helps quantify response'],
    faqs: [
      {
        question: 'Is Solensia safer than chronic NSAIDs?',
        answer:
          'For most cats, yes. It does not require the kidney-function compromises that chronic NSAID use can produce.',
      },
      {
        question: 'How quickly will I see improvement?',
        answer:
          'Often within 1–2 weeks of the first injection.',
      },
      {
        question: 'Why must it be given in the clinic?',
        answer:
          'Frunevetmab is a biologic and requires proper storage, handling, and administration.',
      },
    ],
    citations: [
      {
        label: 'FDA Solensia Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },

  'librela-dogs': {
    slug: 'librela-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Librela (bedinvetmab) is a caninized monoclonal antibody against nerve growth factor (NGF), FDA-approved for canine osteoarthritis pain. Monthly subcutaneous injections in the clinic reduce pain with a low systemic burden.',
    overview: [
      'Librela works by binding NGF, reducing pain signaling at the periphery.',
      'Administered monthly by your veterinarian.',
      'Owners and veterinarians should discuss recent FDA adverse event communications, particularly regarding neurologic signs, before starting or continuing therapy.',
    ],
    conditionsTreated: ['Canine osteoarthritis pain'],
    sideEffects: [
      'Injection-site reactions (mild)',
      'Reports of neurologic adverse events have prompted FDA communications — discuss with your veterinarian',
    ],
    doseRange: [
      'Canine FDA-labeled dose: weight-based monthly subcutaneous injection administered by your veterinarian.',
    ],
    interactions: ['No significant drug interactions reported'],
    monitoring: ['Clinical reassessment monthly', 'Vigilance for any new neurologic signs'],
    faqs: [
      {
        question: 'Is Librela a good option for older dogs?',
        answer:
          'For many it is — the safety profile may be particularly attractive when traditional NSAIDs are contraindicated. Discuss the recent FDA safety communications with your veterinarian.',
      },
      {
        question: 'How quickly does Librela work?',
        answer:
          'Most dogs show meaningful improvement within 1–2 weeks of the first injection.',
      },
      {
        question: 'Can I combine Librela with NSAIDs?',
        answer:
          'Sometimes — discuss with your veterinarian. The combination is used in some dogs as part of multimodal pain management.',
      },
    ],
    citations: [
      {
        label: 'FDA Librela Label',
        url: 'https://animaldrugsatfda.fda.gov/',
      },
      ...COMMON_CITATIONS,
    ],
  },
}
