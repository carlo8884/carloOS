import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "apoquel",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Apoquel (oclacitinib) is a JAK inhibitor used to control chronic allergic itch in dogs. It works rapidly — often within hours — and is widely prescribed for dogs with atopic dermatitis, including seniors.",
  "overview": [
    "Apoquel blocks JAK1-dependent cytokine signaling, reducing itch and inflammation. Onset of action is rapid.",
    "Loading dose is twice daily for 14 days, then once daily maintenance.",
    "Long-term immune-modulating effects warrant veterinary monitoring, especially in older dogs with infection or neoplasia risk."
  ],
  "conditionsTreated": [
    "Atopic dermatitis",
    "Allergic pruritus in dogs"
  ],
  "sideEffects": [
    "Mild GI signs",
    "Risk of demodicosis activation in predisposed dogs",
    "Possible increased susceptibility to infection",
    "Caution warranted in dogs with neoplasia history"
  ],
  "doseRange": [
    "Canine FDA-labeled dose: 0.4–0.6 mg/kg twice daily for up to 14 days, then once daily.",
    "Use in dogs younger than 12 months is generally not recommended.",
    "Confirm with your veterinarian."
  ],
  "interactions": [
    "Use caution with concurrent immunosuppressants",
    "Monitor closely if administered with chemotherapy agents"
  ],
  "monitoring": [
    "Baseline bloodwork",
    "Periodic CBC and chemistry",
    "Vigilance for new infections or skin masses"
  ],
  "faqs": [
    {
      "question": "How quickly will my dog stop itching?",
      "answer": "Most dogs show meaningful itch reduction within 4–24 hours of the first dose."
    },
    {
      "question": "Is Apoquel safe long-term in a senior dog?",
      "answer": "Yes for many dogs, with appropriate monitoring. Discuss any history of infections or neoplasia with your veterinarian before starting or continuing."
    },
    {
      "question": "Can I combine Apoquel with Cytopoint?",
      "answer": "Sometimes — discuss with your veterinarian. The two have different mechanisms and are occasionally used together in challenging cases."
    }
  ],
  "citations": [
    {
      "label": "FDA Apoquel Label",
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
