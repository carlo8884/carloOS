import type { MedicationContent } from '../types'

const content: MedicationContent = {
  "slug": "vetmedin",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Vetmedin (pimobendan) is the cornerstone of modern canine heart-failure therapy. It improves cardiac output and reduces afterload, and the EPIC trial demonstrated significant delay in onset of CHF when started in preclinical Stage B2 disease.",
  "overview": [
    "Pimobendan is an inodilator: it improves contractility (positive inotropy) and reduces vascular resistance (vasodilation), without raising myocardial oxygen demand the way traditional inotropes do.",
    "It is given twice daily, typically 1 hour before meals for optimal absorption.",
    "Cardiology referral and echocardiography are recommended to confirm appropriate disease stage before starting therapy."
  ],
  "conditionsTreated": [
    "Mitral valve disease (Stage B2 and CHF)",
    "Dilated cardiomyopathy"
  ],
  "sideEffects": [
    "GI signs",
    "Ventricular arrhythmias (uncommon)",
    "Sudden death (rare)"
  ],
  "doseRange": [
    "Canine FDA-labeled dose: 0.25 mg/kg orally twice daily.",
    "Confirm dose, timing, and disease stage with your veterinarian."
  ],
  "interactions": [
    "Generally compatible with diuretics, ACE inhibitors, and spironolactone",
    "Discuss new medications with your veterinarian"
  ],
  "monitoring": [
    "Resting respiratory rate at home daily",
    "Periodic recheck with thoracic imaging or echocardiography",
    "Renal values and electrolytes if combined with diuretics"
  ],
  "faqs": [
    {
      "question": "When should pimobendan be started?",
      "answer": "The EPIC trial supports starting in preclinical Stage B2 (cardiomegaly without symptoms) of mitral valve disease. In symptomatic CHF, it is part of standard therapy."
    },
    {
      "question": "Does pimobendan cure heart disease?",
      "answer": "No. It improves cardiac function and quality of life and delays progression to CHF — but the underlying disease continues."
    },
    {
      "question": "Can my cat take pimobendan?",
      "answer": "Use in cats is off-label and is occasionally pursued in specific feline cardiomyopathies under cardiologist guidance."
    }
  ],
  "citations": [
    {
      "label": "EPIC Trial — Pimobendan in Preclinical MMVD",
      "url": "https://onlinelibrary.wiley.com/journal/19391676"
    },
    {
      "label": "FDA Vetmedin Label",
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
