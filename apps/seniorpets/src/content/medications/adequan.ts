import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "adequan",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Adequan Canine (polysulfated glycosaminoglycan, PSGAG) is the only FDA-approved injectable disease-modifying osteoarthritis drug for dogs. It supports cartilage and modulates joint inflammation through mechanisms distinct from NSAIDs.",
  "overview": [
    "Adequan is administered intramuscularly. The standard loading protocol is 2 mg/lb (4.4 mg/kg) twice weekly for 4 weeks (8 injections), followed by individualized maintenance dosing.",
    "Many owners learn to administer maintenance injections at home after veterinary training, which substantially reduces ongoing cost and clinic visits.",
    "Adequan’s mechanism centers on inhibiting cartilage-degrading enzymes and supporting glycosaminoglycan synthesis. The evidence base is strongest for early-stage osteoarthritis but the drug is used at all disease stages."
  ],
  "conditionsTreated": [
    "Canine osteoarthritis (FDA-approved indication)",
    "Off-label use in feline arthritis (extrapolated, less data)"
  ],
  "sideEffects": [
    "Local injection-site discomfort",
    "Mild GI upset (uncommon)",
    "Rare bleeding tendency in dogs with coagulopathies",
    "Allergic reactions (rare)"
  ],
  "doseRange": [
    "Canine FDA-labeled dose: 2 mg/lb IM twice weekly for 4 weeks (loading), then maintenance dosing tailored to the individual dog.",
    "Maintenance schedules vary from every 2 weeks to every 4–6 weeks based on response and the dog’s comfort.",
    "Always confirm specific dose, frequency, and route with your veterinarian."
  ],
  "interactions": [
    "Use with caution in dogs with known bleeding disorders",
    "No significant interactions with NSAIDs in published studies; commonly used in combination",
    "Compatible with most analgesics including gabapentin and amantadine"
  ],
  "monitoring": [
    "Periodic clinical reassessment of comfort and function",
    "CBC and chemistry as part of routine senior monitoring",
    "Pain-scoring at home using a structured tool helps quantify response"
  ],
  "faqs": [
    {
      "question": "How quickly will I see improvement?",
      "answer": "Most owners notice changes within 2–4 weeks of starting the loading protocol; full effect is typically seen by completion of the 8-injection loading series."
    },
    {
      "question": "Can I give Adequan at home?",
      "answer": "Yes — many veterinary teams train owners to administer IM injections at home after the loading series. This reduces ongoing cost considerably."
    },
    {
      "question": "Is it safe to combine with my dog’s NSAID?",
      "answer": "Yes. Adequan is commonly used alongside NSAIDs and is part of standard multimodal arthritis therapy."
    }
  ],
  "citations": [
    {
      "label": "FDA Adequan Canine Label",
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
