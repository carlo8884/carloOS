import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "ibd-cats",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Inflammatory bowel disease (IBD) is a chronic immune-driven gastrointestinal disease and one of the most common causes of chronic vomiting and diarrhea in senior cats. Distinguishing IBD from small-cell GI lymphoma requires biopsy, and getting the diagnosis right matters because both conditions are manageable.",
  "overview": [
    "Feline IBD is a chronic inflammation of the gastrointestinal tract by lymphocytes and plasma cells (most commonly), eosinophils, or neutrophils. Both stomach and intestines may be affected.",
    "Many older cats described as having \"chronic stomach problems\" or \"hairballs every week\" actually have undiagnosed IBD. Persistent vomiting more than once a week is not normal.",
    "IBD and small-cell intestinal lymphoma can look identical on basic workup. Definitive differentiation requires endoscopic or surgical biopsy. Empirical therapy often overlaps significantly between the two diagnoses."
  ],
  "clinicalSigns": [
    "Chronic vomiting, often weekly or more",
    "Chronic diarrhea or soft stool",
    "Weight loss despite a maintained or increased appetite",
    "Decreased coat quality",
    "Episodic abdominal discomfort or hiding",
    "Thickened intestinal loops felt on physical exam"
  ],
  "redFlags": [
    "Rapid weight loss with poor body condition — workup for lymphoma is needed",
    "Vomiting blood or melena (dark, tarry stool)",
    "Inability to keep down food or water for more than 24 hours",
    "Severe dehydration, weakness, or jaundice"
  ],
  "treatment": [
    "Diet trial is usually the first step: a strictly hydrolyzed protein diet or a novel-protein diet fed exclusively for 4–8 weeks. A meaningful subset of cats respond to diet alone and require no medication.",
    "Immunomodulatory therapy — prednisolone is the most common starting agent. Budesonide is sometimes used in cats that cannot tolerate prednisolone’s systemic effects.",
    "Chlorambucil is added in moderate to severe cases or in suspected small-cell lymphoma. Cyclosporine and other agents are used in refractory disease.",
    "Cobalamin (vitamin B12) is supplemented in most cats with chronic GI disease; B12 deficiency is common in feline IBD.",
    "Anti-emetic therapy (maropitant) and appetite stimulants (mirtazapine — Mirataz) support quality of life during initial management."
  ],
  "lifestyleChanges": [
    "Feed the trial diet exclusively — no treats, no other foods, no flavored medications.",
    "Track frequency and character of vomiting and stool in a simple log.",
    "Weigh weekly on a kitchen scale; stable weight is a key marker of treatment success.",
    "Maintain a low-stress environment; chronic stress measurably worsens GI symptoms."
  ],
  "prognosis": [
    "Many cats live for years with well-controlled IBD. Small-cell lymphoma, while a cancer diagnosis, often responds well to chlorambucil and prednisolone with long survival times — often two years or more.",
    "The major risk is misdiagnosis or undertreatment. Recurrent vomiting in a senior cat warrants a structured workup; \"old cats just vomit\" is not the right framing."
  ],
  "recommendedProducts": [
    {
      "name": "Royal Canin Hydrolyzed Protein HP for Cats",
      "description": "Hydrolyzed-protein therapeutic diet used in dietary IBD trials.",
      "vendor": "chewyrx",
      "path": "/rx/royal-canin-hp-cat"
    },
    {
      "name": "Hill’s Prescription Diet z/d",
      "description": "Hydrolyzed-protein diet — alternative for the IBD diet trial.",
      "vendor": "chewyrx",
      "path": "/rx/hills-zd-cat"
    },
    {
      "name": "Mirataz (Transdermal Mirtazapine)",
      "description": "Ear-applied appetite stimulant for cats with reduced appetite during IBD therapy.",
      "vendor": "chewyrx",
      "path": "/rx/mirataz"
    },
    {
      "name": "Vitamin B12 (Cobalamin) for Cats",
      "description": "B12 supplementation is commonly recommended in feline IBD; available in injectable and oral forms.",
      "vendor": "chewy",
      "path": "/b/b12-cats"
    }
  ],
  "faqs": [
    {
      "question": "Is IBD curable?",
      "answer": "IBD is generally not curable but is highly manageable. Many cats achieve excellent control with diet alone or diet plus low-dose medication."
    },
    {
      "question": "How do I know whether it is IBD or lymphoma?",
      "answer": "Definitive diagnosis requires biopsy via endoscopy or exploratory surgery. Initial management often overlaps; persistent symptoms despite empirical therapy warrant biopsy."
    },
    {
      "question": "Are weekly hairballs really a problem?",
      "answer": "Vomiting hairballs more than once a month is not normal and usually represents underlying GI disease. Cats that vomit weekly should be evaluated."
    },
    {
      "question": "Can probiotics help?",
      "answer": "Veterinary-quality probiotics (FortiFlora, Proviable) are commonly used as adjuncts. They are unlikely to control IBD alone but often help stool consistency."
    }
  ],
  "citations": [
    {
      "label": "AAFP — Chronic Vomiting in Cats",
      "url": "https://catvets.com/"
    },
    {
      "label": "Cornell Feline Health Center — IBD in Cats",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/inflammatory-bowel-disease"
    },
    {
      "label": "Merck Veterinary Manual — Feline IBD",
      "url": "https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/inflammatory-bowel-disease-in-small-animals"
    }
  ]
}

export default content
