import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "enalapril",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Enalapril is an ACE inhibitor widely used in dogs and cats with congestive heart failure or proteinuric chronic kidney disease. It reduces afterload, slows cardiac remodeling, and reduces protein loss in the kidneys.",
  "overview": [
    "Enalapril blocks angiotensin-converting enzyme, reducing the production of angiotensin II.",
    "Used in heart failure (typically in combination with pimobendan and furosemide) and as antiproteinuric therapy in CKD.",
    "Renal function and electrolytes should be checked before and during therapy."
  ],
  "conditionsTreated": [
    "Congestive heart failure",
    "Proteinuric chronic kidney disease",
    "Systemic hypertension (adjunct)"
  ],
  "sideEffects": [
    "Hypotension",
    "Azotemia in volume-depleted animals",
    "Hyperkalemia (rare)",
    "GI signs"
  ],
  "doseRange": [
    "Canine: 0.5 mg/kg orally once or twice daily.",
    "Feline: 0.25–0.5 mg/kg orally once daily.",
    "Always confirm dose with your veterinarian."
  ],
  "interactions": [
    "Use caution with diuretics (potential additive hypotension)",
    "Avoid concurrent NSAIDs when possible",
    "Combine carefully with spironolactone — monitor potassium"
  ],
  "monitoring": [
    "Renal values and electrolytes 1–2 weeks after starting and after dose changes",
    "Blood pressure",
    "Periodic UPC in CKD patients"
  ],
  "faqs": [
    {
      "question": "Why is enalapril used in kidney disease?",
      "answer": "It reduces glomerular pressure and proteinuria, which slows disease progression in dogs and cats with significant urinary protein loss."
    },
    {
      "question": "Can my pet take enalapril if dehydrated?",
      "answer": "No — dehydration substantially increases the risk of acute kidney injury on ACE inhibitors. Rehydration is necessary first."
    }
  ],
  "citations": [
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
