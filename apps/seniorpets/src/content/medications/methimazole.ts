import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "methimazole",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Methimazole is the most common medical treatment for feline hyperthyroidism. It inhibits thyroid hormone synthesis and controls hyperthyroidism for as long as it is given. Both oral tablets (Felimazole) and compounded transdermal formulations are widely used.",
  "overview": [
    "Methimazole does not destroy thyroid tissue; it suppresses hormone production. Stopping the medication causes return of hyperthyroidism.",
    "Transdermal compounded formulations are well-tolerated by cats that refuse pills; absorption is somewhat more variable than oral.",
    "Routine monitoring catches adverse effects early — most are reversible."
  ],
  "conditionsTreated": [
    "Feline hyperthyroidism"
  ],
  "sideEffects": [
    "GI signs (vomiting, anorexia) — typically early",
    "Facial pruritus and excoriation (occasionally severe)",
    "Hepatic toxicity (uncommon)",
    "Blood dyscrasias (rare but serious)"
  ],
  "doseRange": [
    "Feline starting dose: typically 2.5 mg orally twice daily; transdermal dose somewhat higher.",
    "Dose titrated by T4 levels every 2–4 weeks initially.",
    "Confirm with your veterinarian."
  ],
  "interactions": [
    "Wear gloves when handling; methimazole is absorbed transdermally",
    "Discuss other medications with your veterinarian"
  ],
  "monitoring": [
    "T4 every 2–4 weeks initially, then every 3–6 months once stable",
    "CBC and chemistry at baseline and periodically",
    "Blood pressure measurement",
    "Renal values — treatment may unmask underlying CKD"
  ],
  "faqs": [
    {
      "question": "Is transdermal methimazole as effective as oral?",
      "answer": "For most cats, yes, though absorption is more variable. Recheck T4 confirms control."
    },
    {
      "question": "Can my cat ever stop methimazole?",
      "answer": "Only if you choose I-131 (curative) or surgical thyroidectomy. Discontinuing without those interventions returns the cat to hyperthyroid state."
    },
    {
      "question": "Why must I wear gloves?",
      "answer": "Methimazole is absorbed through human skin and can suppress thyroid function in chronic exposure scenarios."
    }
  ],
  "citations": [
    {
      "label": "AAFP Hyperthyroidism Guidelines",
      "url": "https://catvets.com/guidelines/practice-guidelines/hyperthyroidism-guidelines"
    },
    {
      "label": "Merck Veterinary Manual — Pharmacology",
      "url": "https://www.merckvetmanual.com/pharmacology"
    },
    {
      "label": "AAHA Clinical Resources",
      "url": "https://www.aaha.org/aaha-guidelines/"
    }
  ]
}

export default content
