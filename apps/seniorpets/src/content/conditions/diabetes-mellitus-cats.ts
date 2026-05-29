import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "diabetes-mellitus-cats",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Feline diabetes mellitus is most often a type-2-like disease driven by obesity and insulin resistance. Unlike dogs, many newly diagnosed cats can go into diabetic remission with prompt insulin therapy and a strict low-carbohydrate diet.",
  "overview": [
    "Feline diabetes is characterized by hyperglycemia, glucosuria, and insulin resistance, often combined with progressive beta-cell loss. The strongest risk factors are obesity, sedentary indoor lifestyle, advanced age, and male sex.",
    "The classic presentation is a middle-aged or senior overweight cat with polyuria, polydipsia, weight loss, and increased appetite. Plantigrade stance — walking on the hocks — is a late sign caused by diabetic neuropathy.",
    "Diagnosis combines persistent fasting hyperglycemia, glucosuria, and clinical signs. Because stress markedly raises feline blood glucose, fructosamine or a continuous glucose monitor is often used to confirm."
  ],
  "clinicalSigns": [
    "Polyuria and polydipsia",
    "Weight loss despite normal or increased appetite",
    "Plantigrade stance (walking on the hocks)",
    "Decreased grooming, unkempt coat",
    "Lethargy or hiding",
    "In severe or untreated cases: vomiting, dehydration, weakness — DKA"
  ],
  "redFlags": [
    "Vomiting, weakness, rapid breathing in a diabetic cat — possible DKA, an emergency",
    "Hypoglycemia signs (wobbliness, disorientation, seizures) — rub Karo on gums and seek emergency care",
    "Sudden hindlimb weakness with painful breathing — possible saddle thrombus in cats with concurrent cardiac disease"
  ],
  "treatment": [
    "Insulin glargine (Lantus) is the most commonly used first-line insulin in cats because of its long, smooth action profile and the relatively high rate of remission when paired with strict carbohydrate restriction. ProZinc is an FDA-approved feline insulin alternative.",
    "A low-carbohydrate, high-protein diet (typically canned food labeled for diabetics) is essential. Carbohydrate restriction substantially reduces insulin requirements and increases the chance of remission.",
    "Home glucose monitoring with a continuous glucose monitor (FreeStyle Libre) or a pet glucometer allows tight monitoring with minimal stress. Spot checks combined with periodic fructosamine give a clear picture of control.",
    "Remission — the ability to discontinue insulin while maintaining normal glucose — is possible in many newly diagnosed cats treated promptly. The window for remission is widest in the first 3–6 months after diagnosis."
  ],
  "lifestyleChanges": [
    "Convert to a low-carbohydrate canned diet immediately; dry food is generally too carbohydrate-dense for diabetic cats.",
    "Feed at consistent times, twice daily, coinciding with insulin doses.",
    "Encourage activity — climbing structures, hunting puzzles, gentle play.",
    "Track weight weekly; ideal body condition meaningfully improves remission chances.",
    "Keep Karo corn syrup or honey accessible for emergency hypoglycemia."
  ],
  "prognosis": [
    "With prompt insulin therapy and dietary management, many cats achieve diabetic remission. Cats that do not remit can still live for years with well-controlled diabetes.",
    "The major risk to long-term outcome is DKA, which usually follows missed doses, illness, or delayed diagnosis. Cats with concurrent renal disease or pancreatitis are more challenging to regulate."
  ],
  "recommendedProducts": [
    {
      "name": "Lantus (Insulin Glargine)",
      "description": "Long-acting insulin commonly used in feline diabetes; promotes the strongest remission rates when paired with low-carb diet.",
      "vendor": "chewyrx",
      "path": "/rx/lantus"
    },
    {
      "name": "ProZinc (Protamine Zinc Insulin)",
      "description": "FDA-approved feline insulin used as a long-acting alternative.",
      "vendor": "chewyrx",
      "path": "/rx/prozinc"
    },
    {
      "name": "Purina Pro Plan Veterinary Diets DM Dietetic Management",
      "description": "Low-carbohydrate, high-protein canned diet formulated for diabetic cats.",
      "vendor": "chewyrx",
      "path": "/rx/purina-dm"
    },
    {
      "name": "FreeStyle Libre 3 Continuous Glucose Monitor",
      "description": "Human CGM widely used in cats with veterinary guidance — provides 14 days of low-stress data.",
      "vendor": "amazon",
      "search": "FreeStyle Libre 3 continuous glucose monitor"
    }
  ],
  "faqs": [
    {
      "question": "Can my cat go into remission?",
      "answer": "Yes — many newly diagnosed cats do, especially when started on insulin glargine and a strict low-carbohydrate canned diet promptly. The first 3–6 months are the most important window."
    },
    {
      "question": "Why is canned food so important?",
      "answer": "Dry food is generally too high in carbohydrate for diabetic cats. The metabolic load makes regulation harder and reduces the chance of remission."
    },
    {
      "question": "What if my cat will not stop eating dry food?",
      "answer": "A gradual transition over weeks, mixing increasing amounts of canned with dry, often succeeds. Some cats need creative approaches; your veterinary team can help."
    },
    {
      "question": "How do I avoid hypoglycemia?",
      "answer": "Feed before insulin so you know the cat has eaten; never adjust dose without veterinary guidance; keep Karo accessible; consider a continuous glucose monitor for tight feedback."
    }
  ],
  "citations": [
    {
      "label": "AAHA Diabetes Management Guidelines",
      "url": "https://www.aaha.org/aaha-guidelines/diabetes-management/home/"
    },
    {
      "label": "AAFP Feline Diabetes Resources",
      "url": "https://catvets.com/"
    },
    {
      "label": "Cornell Feline Health Center — Feline Diabetes",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-diabetes"
    }
  ]
}

export default content
