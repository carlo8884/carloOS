import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "hypertrophic-cardiomyopathy",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Hypertrophic cardiomyopathy (HCM) is the most common heart disease of cats and a frequent cause of sudden death and arterial thromboembolism. It is often silent until a crisis. Screening with NT-proBNP and echocardiography is increasingly part of senior cat preventive care.",
  "overview": [
    "HCM is a primary heart muscle disease characterized by thickening of the left ventricular wall, which impairs filling and increases the risk of heart failure, syncope, and thromboembolic events.",
    "The disease has a strong genetic basis in several breeds, especially Maine Coon and Ragdoll, but it is common in mixed-breed cats as well.",
    "Diagnosis requires echocardiography. NT-proBNP can be used as a screening test in cats with murmurs or other risk factors; positive results lead to echo."
  ],
  "clinicalSigns": [
    "Often completely silent until a crisis",
    "New murmur, gallop rhythm, or arrhythmia detected on exam",
    "Increased respiratory rate or effort (over 30/min at rest is abnormal)",
    "Open-mouth breathing during a stressful event",
    "Sudden hindlimb weakness or paralysis with painful cold legs (saddle thrombus)",
    "Sudden collapse or death"
  ],
  "redFlags": [
    "Open-mouth breathing in a cat — emergency",
    "Sudden hindlimb paralysis with cold, painful legs — saddle thrombus, emergency",
    "Persistent respiratory rate over 40/min at rest",
    "Collapse or syncope"
  ],
  "treatment": [
    "There is no current cure or proven preventive medication for asymptomatic HCM. Therapy targets specific complications.",
    "In congestive heart failure, furosemide and pimobendan are used to remove fluid and improve cardiac output.",
    "Antithrombotic therapy with clopidogrel (Plavix) is the standard for cats at increased risk of thromboembolism — typically those with severe left atrial enlargement.",
    "Beta blockers (atenolol) may be used in cats with significant left ventricular outflow tract obstruction or arrhythmias.",
    "Cardiology referral and serial echocardiograms guide treatment intensity over time."
  ],
  "lifestyleChanges": [
    "Track resting respiratory rate at home, ideally daily; consistent values above 30/min are concerning.",
    "Minimize stress; long handling sessions or travel may precipitate crises.",
    "Avoid corticosteroid use when possible; they have been associated with CHF onset in HCM cats.",
    "Inform every veterinarian of the HCM diagnosis before any procedure."
  ],
  "prognosis": [
    "Highly variable. Many cats with asymptomatic HCM live years without significant impact. Once CHF or thromboembolism occurs, prognosis is more guarded — median survival after CHF onset is 6–18 months.",
    "Clopidogrel substantially reduces thromboembolic events in at-risk cats."
  ],
  "recommendedProducts": [
    {
      "name": "Clopidogrel (Plavix)",
      "description": "Antiplatelet therapy used in HCM cats with significant left atrial enlargement.",
      "vendor": "chewyrx",
      "path": "/rx/clopidogrel-cat"
    },
    {
      "name": "Furosemide (for CHF management)",
      "description": "Loop diuretic prescribed by your veterinarian for fluid management in heart failure.",
      "vendor": "chewyrx",
      "path": "/rx/furosemide"
    }
  ],
  "faqs": [
    {
      "question": "Should every senior cat be screened?",
      "answer": "Cats with murmurs, gallops, arrhythmias, breed risk (Maine Coon, Ragdoll), or planned anesthesia benefit from screening with NT-proBNP and echocardiogram."
    },
    {
      "question": "Is HCM preventable?",
      "answer": "No currently proven prevention. In breeding lines, genetic testing helps reduce incidence."
    },
    {
      "question": "What is saddle thrombus?",
      "answer": "A blood clot from the heart lodging at the aortic bifurcation, causing sudden, extremely painful hindlimb paralysis. It is a true emergency and one of the most distressing presentations of HCM."
    },
    {
      "question": "Can my cat exercise normally?",
      "answer": "Most cats with HCM continue to exercise as desired. Stress and over-exertion may be precipitants of CHF in advanced disease; your cardiologist can guide."
    }
  ],
  "citations": [
    {
      "label": "ACVIM Consensus Statement on Feline Cardiomyopathies",
      "url": "https://onlinelibrary.wiley.com/journal/19391676"
    },
    {
      "label": "Cornell Feline Health Center — Cardiomyopathy",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy"
    },
    {
      "label": "Merck Veterinary Manual — Cardiomyopathies in Cats",
      "url": "https://www.merckvetmanual.com/circulatory-system/cardiomyopathy/cardiomyopathies-in-cats"
    }
  ]
}

export default content
