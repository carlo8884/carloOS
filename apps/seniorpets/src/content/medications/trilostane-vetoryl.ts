import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "trilostane-vetoryl",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Trilostane (Vetoryl) is the most commonly used treatment for Cushing’s disease in dogs. It inhibits adrenal cortisol synthesis and is dosed once or twice daily, with periodic ACTH stimulation tests or pre-pill cortisol monitoring guiding adjustments.",
  "overview": [
    "Trilostane is reversible — its effect persists only while the drug is present. Missing doses returns cortisol to baseline.",
    "Used in both pituitary-dependent and adrenal-dependent canine Cushing’s.",
    "Periodic monitoring is essential because over-suppression can produce iatrogenic Addisonian crisis."
  ],
  "conditionsTreated": [
    "Canine hyperadrenocorticism (Cushing’s disease)"
  ],
  "sideEffects": [
    "Vomiting, diarrhea, lethargy (signs of over-suppression)",
    "Iatrogenic Addisonian crisis (rare but serious)"
  ],
  "doseRange": [
    "Initial dosing typically 1–3 mg/kg orally once daily, often divided to twice daily.",
    "Titrated based on monitoring.",
    "Always confirm specific dose with your veterinarian."
  ],
  "interactions": [
    "Avoid concurrent corticosteroids",
    "Use caution with potassium-sparing diuretics"
  ],
  "monitoring": [
    "ACTH stimulation test 10–14 days after starting",
    "Recheck at 30 days, then every 3–6 months once stable",
    "Pre-pill cortisol monitoring is an increasingly used alternative",
    "Watch for vomiting, diarrhea, anorexia — call your veterinarian for any of these"
  ],
  "faqs": [
    {
      "question": "How quickly will I see results?",
      "answer": "Some clinical signs (excessive thirst, appetite) often improve within weeks. Coat changes and muscle wasting recover more slowly."
    },
    {
      "question": "What if my dog seems sluggish or has GI signs?",
      "answer": "Call your veterinarian. These may be early signs of over-suppression; treatment is usually a dose reduction or brief drug holiday."
    },
    {
      "question": "Is trilostane safe long-term?",
      "answer": "Yes for most dogs, with structured monitoring. The biggest pitfall is missed rechecks."
    }
  ],
  "citations": [
    {
      "label": "FDA Vetoryl Label",
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
