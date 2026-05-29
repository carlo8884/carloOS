import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "feline-hyperaldosteronism",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Primary hyperaldosteronism (Conn’s syndrome) is an under-recognized cause of weakness, hypertension, and refractory hypokalemia in senior cats. The classic presentation includes neck ventroflexion and resistant high blood pressure.",
  "overview": [
    "Hyperaldosteronism is over-production of aldosterone from an adrenal tumor or bilateral hyperplasia. Aldosterone excess drives potassium loss, sodium retention, and hypertension.",
    "Once considered rare, the condition is increasingly recognized in senior cats as routine blood pressure measurement has become more common.",
    "Diagnosis: persistent hypokalemia plus hypertension in a senior cat, with confirmation via plasma aldosterone, plasma renin activity, and adrenal imaging."
  ],
  "clinicalSigns": [
    "Episodic weakness, especially neck ventroflexion",
    "Difficulty jumping",
    "Resistant hypertension",
    "Polyuria and polydipsia",
    "Occasional sudden blindness from hypertensive retinopathy"
  ],
  "redFlags": [
    "Sudden blindness — possible hypertensive retinal detachment",
    "Severe weakness and inability to walk",
    "Cardiac arrhythmias from severe hypokalemia"
  ],
  "treatment": [
    "Adrenalectomy is curative for unilateral adrenal tumors but is technically demanding and often referred to specialty centers.",
    "Medical management uses spironolactone (a mineralocorticoid receptor antagonist), potassium supplementation, and amlodipine for blood pressure.",
    "Treating concurrent CKD and dietary potassium support are part of long-term care."
  ],
  "lifestyleChanges": [
    "Monitor blood pressure regularly.",
    "Provide easy access to food and water (multiple stations).",
    "Avoid sudden activity that could trigger collapse during severe hypokalemia episodes."
  ],
  "prognosis": [
    "Surgical patients often do well long-term. Medically managed patients can live for years with regular monitoring and dose adjustments."
  ],
  "recommendedProducts": [
    {
      "name": "Potassium Gluconate Supplement (Renal K+)",
      "description": "Potassium supplement used to correct chronic hypokalemia.",
      "vendor": "chewy",
      "path": "/b/renal-k-cat"
    },
    {
      "name": "Spironolactone",
      "description": "Mineralocorticoid receptor antagonist used in medical management.",
      "vendor": "chewyrx",
      "path": "/rx/spironolactone"
    },
    {
      "name": "Amlodipine Besylate",
      "description": "First-line antihypertensive for feline systemic hypertension.",
      "vendor": "chewyrx",
      "path": "/rx/amlodipine-cat"
    }
  ],
  "faqs": [
    {
      "question": "How common is feline hyperaldosteronism?",
      "answer": "Historically considered rare, it is increasingly diagnosed as blood pressure and electrolyte screening become routine in senior cat care."
    },
    {
      "question": "Is surgery the best option?",
      "answer": "For unilateral adrenal tumors in stable cats, adrenalectomy can be curative. Medical management is a good alternative for non-surgical candidates."
    },
    {
      "question": "Can it be confused with CKD?",
      "answer": "Yes. CKD and hyperaldosteronism can coexist, and many of the signs overlap. Persistent hypokalemia with hypertension despite CKD therapy should prompt aldosterone evaluation."
    },
    {
      "question": "Is this related to Cushing’s?",
      "answer": "Both involve the adrenal glands, but Cushing’s is over-production of cortisol while Conn’s is over-production of aldosterone. They have different signs and different workups."
    }
  ],
  "citations": [
    {
      "label": "ACVIM Consensus on Systemic Hypertension in Cats",
      "url": "https://onlinelibrary.wiley.com/journal/19391676"
    },
    {
      "label": "Cornell Feline Health Center — Endocrine Disease",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics"
    },
    {
      "label": "Merck Veterinary Manual — Hyperaldosteronism in Cats",
      "url": "https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hyperaldosteronism-in-animals"
    }
  ]
}

export default content
