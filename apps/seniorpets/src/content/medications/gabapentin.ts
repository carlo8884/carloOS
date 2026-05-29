import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "gabapentin",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Gabapentin is a versatile medication used in senior pets for chronic pain, neuropathic pain, anxiety, and as a pre-visit sedative. It is widely used off-label in both dogs and cats and is generally well-tolerated.",
  "overview": [
    "Gabapentin modulates calcium channels in the central nervous system, reducing neuropathic and chronic pain signaling.",
    "Onset is rapid for sedation; chronic pain benefit may take days to fully develop.",
    "Compounded liquid formulations are commonly used in cats — confirm with the pharmacist that the formulation does not contain xylitol (toxic to dogs and contraindicated in any pet)."
  ],
  "conditionsTreated": [
    "Chronic pain",
    "Neuropathic pain",
    "Pre-visit anxiety in cats",
    "Adjunct in arthritis"
  ],
  "sideEffects": [
    "Sedation",
    "Ataxia at higher doses",
    "Mild GI signs"
  ],
  "doseRange": [
    "Canine: 5–15 mg/kg orally every 8–12 hours for chronic pain; higher for acute sedation.",
    "Feline: 10–20 mg/kg orally for anxiolysis 2–3 hours before vet visits; lower chronic doses for arthritis.",
    "Reduced dosing recommended in pets with kidney disease.",
    "Confirm with your veterinarian."
  ],
  "interactions": [
    "Sedative effects may be additive with opioids and other CNS depressants"
  ],
  "monitoring": [
    "Clinical assessment of pain or anxiety control"
  ],
  "faqs": [
    {
      "question": "Is gabapentin safe with my cat’s kidney disease?",
      "answer": "It can be — but the dose typically needs to be reduced. Discuss with your veterinarian."
    },
    {
      "question": "How quickly does gabapentin work for vet anxiety?",
      "answer": "Sedation typically develops within 1–2 hours and peaks within 2–3 hours of administration."
    },
    {
      "question": "Why does my pharmacist ask about xylitol?",
      "answer": "Some compounded human gabapentin liquids contain xylitol, which is highly toxic to dogs. Pet-appropriate compounded formulations should be xylitol-free."
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
