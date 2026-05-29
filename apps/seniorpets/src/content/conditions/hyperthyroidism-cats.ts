import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "hyperthyroidism-cats",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Hyperthyroidism is the most common endocrine disease of older cats. The classic presentation — weight loss despite ravenous appetite — is so characteristic that veterinarians screen routinely with T4 levels in cats over 10. Treatment options range from daily oral medication to a single curative radioactive iodine treatment.",
  "overview": [
    "Feline hyperthyroidism is caused by autonomous hormone production from one or both thyroid lobes, usually due to benign adenomatous hyperplasia. Malignant thyroid carcinoma accounts for less than 2% of cases.",
    "The disease typically presents after age 10 and is one of the most common reasons for unexplained weight loss in senior cats. Prevalence among cats over 10 in some surveys exceeds 10%.",
    "Diagnosis is straightforward in most cases: an elevated total T4 confirms the diagnosis. When T4 is borderline, free T4 by equilibrium dialysis or a T3 suppression test may be added."
  ],
  "clinicalSigns": [
    "Weight loss despite an excellent (often ravenous) appetite",
    "Increased thirst and urination",
    "Hyperactivity, vocalization, especially at night",
    "Unkempt or matted coat",
    "Intermittent vomiting and/or diarrhea",
    "Rapid heart rate, sometimes with a heart murmur",
    "Subtle behavior change — restlessness, irritability"
  ],
  "redFlags": [
    "Acute weakness, collapse, or respiratory distress — possible cardiac decompensation from untreated disease",
    "New-onset blindness — possible hypertensive retinopathy (a common complication)",
    "Severe weight loss with poor body condition — long-undiagnosed disease"
  ],
  "treatment": [
    "Methimazole (oral or transdermal) is the most common first-line treatment. It blocks thyroid hormone synthesis. The dose is titrated to a normal T4; most cats are well-controlled on 2.5–5 mg twice daily.",
    "Radioactive iodine (I-131) is the gold-standard curative treatment. A single subcutaneous injection at a specialty center destroys the abnormal thyroid tissue and resolves hyperthyroidism permanently in roughly 95% of cases. It is the most expensive option upfront but is often the most cost-effective long-term.",
    "A prescription iodine-restricted diet (Hill’s y/d) controls hyperthyroidism by limiting iodine intake. It requires that y/d be the only food the cat eats — an absolute restriction that can be challenging in multi-cat households.",
    "Surgical thyroidectomy is an option but is rarely chosen today due to higher complication rates compared with I-131.",
    "Underlying or unmasked CKD is a critical consideration: hyperthyroidism artificially boosts glomerular filtration, and treatment can reveal underlying CKD that was masked by elevated thyroid status."
  ],
  "lifestyleChanges": [
    "Once treated, cats often gain weight rapidly — adjust portions to avoid obesity.",
    "Monitor for hidden CKD with bloodwork before and after treatment.",
    "For methimazole, learn proper handling: gloves when administering, wash hands after touching crushed tablets.",
    "For transdermal methimazole, apply only to the inside of the ear pinna; rotate ears daily.",
    "Maintain steady blood pressure monitoring — hypertension is common and can persist after T4 normalizes."
  ],
  "prognosis": [
    "Prognosis is excellent for most hyperthyroid cats. Median survival after I-131 treatment exceeds 4 years; many cats live a normal lifespan after diagnosis.",
    "The most common complication is unmasking of underlying CKD; aggressive monitoring during the early treatment period catches this in time for effective management."
  ],
  "recommendedProducts": [
    {
      "name": "Methimazole (Felimazole or Compounded)",
      "description": "Standard first-line oral antithyroid medication; transdermal compounded formulations are widely used in cats that refuse pills.",
      "vendor": "chewyrx",
      "path": "/rx/methimazole-cat"
    },
    {
      "name": "Hill’s Prescription Diet y/d Thyroid Care",
      "description": "Iodine-restricted therapeutic diet; only effective if it is the sole food.",
      "vendor": "chewyrx",
      "path": "/rx/hills-yd"
    },
    {
      "name": "Pill Pockets for Cats",
      "description": "Useful for owners administering oral methimazole — especially helpful when the cat dislikes the taste of crushed tablets.",
      "vendor": "chewy",
      "path": "/b/greenies-pill-pockets-cat"
    }
  ],
  "faqs": [
    {
      "question": "Is radioactive iodine treatment worth it?",
      "answer": "For many owners, yes. I-131 cures the disease in a single visit, eliminates the need for daily medication, and total lifetime cost is often lower than a decade of methimazole plus monitoring."
    },
    {
      "question": "My cat hides when I try to give a pill — what should I do?",
      "answer": "Transdermal methimazole (compounded by a pharmacy and applied to the ear) is well-tolerated by most cats. Discuss this option with your veterinarian."
    },
    {
      "question": "Why does my cat need bloodwork every few months?",
      "answer": "Because methimazole dose requirements drift, and because treatment can unmask underlying CKD. Periodic T4, kidney values, and blood pressure together guide ongoing therapy."
    },
    {
      "question": "Will my cat have to eat y/d forever?",
      "answer": "Yes, if y/d is the chosen treatment. The moment iodine intake rises (a single treat, eating another cat’s food), hormone production rebounds. For households where strict feeding is not feasible, methimazole or I-131 is preferred."
    }
  ],
  "citations": [
    {
      "label": "AAFP Hyperthyroidism Guidelines",
      "url": "https://catvets.com/guidelines/practice-guidelines/hyperthyroidism-guidelines"
    },
    {
      "label": "Cornell Feline Health Center — Hyperthyroidism",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hyperthyroidism-cats"
    },
    {
      "label": "Merck Veterinary Manual — Hyperthyroidism in Cats",
      "url": "https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hyperthyroidism-in-cats"
    }
  ]
}

export default content
