import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "vetsulin",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Vetsulin is a porcine insulin zinc suspension and the only FDA-approved insulin for both dogs and cats. It is intermediate-acting and given twice daily with meals.",
  "overview": [
    "Vetsulin must be thoroughly resuspended (shaken or rolled) before each draw to ensure consistent dosing.",
    "Used twice daily with consistent meals; missed doses or food withdrawal produce glucose swings.",
    "Available in U-40 strength — a different concentration than human insulins — requiring U-40 syringes."
  ],
  "conditionsTreated": [
    "Canine diabetes mellitus",
    "Feline diabetes mellitus"
  ],
  "sideEffects": [
    "Hypoglycemia",
    "Injection-site reactions (rare)"
  ],
  "doseRange": [
    "Canine starting dose: approximately 0.5 U/kg twice daily.",
    "Feline starting dose: approximately 1–2 U per cat twice daily.",
    "Always confirm specific dose and dilution with your veterinarian."
  ],
  "interactions": [
    "Corticosteroids substantially raise insulin requirements"
  ],
  "monitoring": [
    "Glucose curves periodically",
    "Continuous glucose monitor when available",
    "Fructosamine, body weight, home logs"
  ],
  "faqs": [
    {
      "question": "Why do I have to shake Vetsulin?",
      "answer": "It is a suspension — the active drug settles. Without resuspension, drawn doses are inconsistent."
    },
    {
      "question": "What syringes do I use?",
      "answer": "U-40 syringes for U-40 Vetsulin. Using a U-100 syringe causes serious under-dosing."
    },
    {
      "question": "Is Vetsulin still the right choice for cats?",
      "answer": "It is FDA-approved for cats but many veterinarians prefer glargine for cats because of the higher published remission rates."
    }
  ],
  "citations": [
    {
      "label": "FDA Vetsulin Label",
      "url": "https://animaldrugsatfda.fda.gov/"
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
