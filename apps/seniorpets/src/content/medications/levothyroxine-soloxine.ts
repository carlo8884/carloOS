import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "levothyroxine-soloxine",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Levothyroxine sodium (Thyro-Tabs, Soloxine) is the standard replacement therapy for canine hypothyroidism. Once-daily or twice-daily dosing restores energy, weight, and coat quality within weeks.",
  "overview": [
    "Levothyroxine is synthetic T4 (thyroxine), which the body converts to active T3.",
    "Initial dosing is twice daily; many dogs are eventually transitioned to once daily based on T4 monitoring.",
    "Therapy is lifelong; stopping returns the dog to hypothyroid state."
  ],
  "conditionsTreated": [
    "Canine hypothyroidism"
  ],
  "sideEffects": [
    "Signs of thyrotoxicosis if over-dosed: panting, restlessness, weight loss, tachycardia"
  ],
  "doseRange": [
    "Starting dose: approximately 0.02 mg/kg orally every 12 hours.",
    "Adjusted based on T4 measured 4–6 hours post-dose.",
    "Confirm dose with your veterinarian."
  ],
  "interactions": [
    "Calcium and high-fat meals reduce absorption",
    "Corticosteroids alter thyroid hormone levels"
  ],
  "monitoring": [
    "T4 (and ideally fT4 by ED + TSH) at 4–6 weeks after starting and after dose changes",
    "Annual T4 once stable"
  ],
  "faqs": [
    {
      "question": "How quickly will I see improvement?",
      "answer": "Energy and attitude often return in 1–2 weeks; coat regrowth takes 6–12 weeks."
    },
    {
      "question": "Is generic levothyroxine acceptable?",
      "answer": "Yes, but switching brands can alter blood levels. Once a brand is producing good control, it is usually best to stay with it."
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
