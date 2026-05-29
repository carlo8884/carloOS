import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "chronic-vomiting-dogs",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Recurrent vomiting in a senior dog is rarely benign. It can signal pancreatitis, IBD, chronic kidney disease, hepatic disease, or neoplasia. The owner instinct to \"wait and see\" is often the wrong call after age 8.",
  "overview": [
    "Chronic vomiting is defined as vomiting occurring on more than three days in a 1–2 week period, or recurrent episodes spaced over weeks to months. In senior dogs, the differential is broad and skews toward serious underlying disease compared with younger dogs.",
    "Common causes include chronic pancreatitis, inflammatory bowel disease, chronic kidney disease, hepatic disease, hypoadrenocorticism, foreign body, and gastrointestinal neoplasia. Less commonly, chronic vomiting reflects toxin exposure, motility disorders, or central causes such as vestibular disease.",
    "A structured workup typically includes CBC, chemistry, urinalysis, T4, fecal exam, abdominal radiographs, abdominal ultrasound, and often a specific canine pancreatic lipase (cPL or Spec cPL). Endoscopy with biopsy is the gold standard for confirming IBD or gastric neoplasia."
  ],
  "clinicalSigns": [
    "Recurrent vomiting unrelated to a single meal or exposure",
    "Weight loss despite a maintained or increased appetite",
    "Diarrhea, sometimes with mucus or blood",
    "Decreased energy or interest in play",
    "Foul breath, dehydration, or pale gums",
    "Abdominal discomfort — hunched posture, \"praying\" position"
  ],
  "redFlags": [
    "Repeated vomiting in 6–12 hours with lethargy — possible pancreatitis, foreign body, or systemic illness",
    "Vomiting blood or material resembling coffee grounds — GI bleeding; same-day evaluation",
    "Inability to keep down water — risk of dehydration; emergency care",
    "Distended abdomen with retching but no productive vomit — possible GDV (gastric dilatation–volvulus); emergency"
  ],
  "treatment": [
    "Treatment depends entirely on diagnosis. Symptomatic care — anti-nausea agents (maropitant), gastric protectants (omeprazole, sucralfate), fluid therapy — is supportive while the workup is in progress.",
    "Pancreatitis is managed with anti-nausea therapy, analgesia, IV fluids, and early reintroduction of a low-fat diet. Chronic pancreatitis requires long-term dietary fat restriction.",
    "IBD is treated with a stepwise approach: hydrolyzed or novel-protein diet trial first, then immunomodulatory medications (prednisone, cyclosporine, chlorambucil) for non-responders.",
    "Underlying systemic disease (CKD, hepatic disease, Addison’s) is addressed specifically. Identifying the cause is essential because non-specific anti-emetic therapy without diagnosis can mask progressive disease."
  ],
  "lifestyleChanges": [
    "Feed multiple small meals rather than one or two large ones.",
    "Avoid table foods and high-fat treats, which trigger pancreatitis in susceptible dogs.",
    "Keep an episode log — frequency, timing, appearance of vomit, association with meals or activity.",
    "Provide constant access to fresh water, especially during recovery from vomiting episodes."
  ],
  "prognosis": [
    "Prognosis depends entirely on the underlying diagnosis. Many causes — IBD, food-responsive enteropathy, chronic pancreatitis — are highly manageable long-term.",
    "Diagnosing the cause is the single most important step. Senior dogs with vomiting attributed to \"just sensitive stomachs\" without workup are at meaningful risk of having a treatable disease missed."
  ],
  "recommendedProducts": [
    {
      "name": "Cerenia (Maropitant) Tablets",
      "description": "FDA-approved anti-nausea medication widely used in dogs with chronic vomiting of any cause.",
      "vendor": "chewyrx",
      "path": "/rx/cerenia"
    },
    {
      "name": "Hill’s Prescription Diet i/d Low Fat",
      "description": "Low-fat therapeutic diet useful in chronic pancreatitis and dietary-responsive vomiting.",
      "vendor": "chewyrx",
      "path": "/rx/hills-id-low-fat"
    },
    {
      "name": "Royal Canin Hydrolyzed Protein HP",
      "description": "Hydrolyzed-protein diet for food-responsive enteropathy and IBD trials.",
      "vendor": "chewyrx",
      "path": "/rx/royal-canin-hp"
    },
    {
      "name": "Pet Acid Reducer (Famotidine OTC)",
      "description": "Over-the-counter H2 blocker often used alongside prescribed therapy on veterinary advice.",
      "vendor": "amazon",
      "search": "famotidine for dogs"
    }
  ],
  "faqs": [
    {
      "question": "How often is \"too often\" for a senior dog to vomit?",
      "answer": "More than once a week, or any vomiting accompanied by lethargy, appetite loss, or weight change, warrants evaluation. Senior dogs do not have the metabolic reserves of younger dogs and decompensate faster."
    },
    {
      "question": "Should I withhold food after vomiting?",
      "answer": "A brief food withhold (a few hours) may be appropriate, but prolonged fasting is not. Modern veterinary guidelines favor early reintroduction of a bland or low-fat diet."
    },
    {
      "question": "Is over-the-counter Pepcid (famotidine) safe for my dog?",
      "answer": "Famotidine is commonly used in dogs at veterinarian-directed doses, but it is not a substitute for diagnosis in chronic vomiting. Discuss the dose and duration with your veterinarian."
    },
    {
      "question": "Could chronic vomiting be cancer?",
      "answer": "Gastrointestinal neoplasia is on the differential for any senior dog with chronic vomiting and weight loss. Ultrasound and biopsy are the definitive tests."
    }
  ],
  "citations": [
    {
      "label": "ACVIM Consensus Statement on Chronic Enteropathies in Dogs",
      "url": "https://onlinelibrary.wiley.com/journal/19391676"
    },
    {
      "label": "AAHA Senior Care Guidelines",
      "url": "https://www.aaha.org/aaha-guidelines/senior-care-configuration/senior-care-home/"
    },
    {
      "label": "Merck Veterinary Manual — Vomiting in Small Animals",
      "url": "https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/vomiting-in-small-animals"
    }
  ]
}

export default content
