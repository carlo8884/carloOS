import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "feline-asthma",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Feline asthma is a chronic, allergic airway disease that produces episodic coughing and difficulty breathing. The cough is often mistaken for hairballs, leading to delayed diagnosis. Inhaled corticosteroids via spacer (AeroKat) are the gold-standard long-term therapy.",
  "overview": [
    "Feline asthma involves eosinophilic inflammation, bronchoconstriction, and airway remodeling, often triggered by inhaled allergens. Prevalence is estimated at 1–5% of cats, with under-reporting common.",
    "The classic presentation is a cat in a crouched position with neck extended, coughing in spasms. Owners often describe it as \"trying to throw up a hairball.\"",
    "Diagnosis combines history, physical exam, thoracic radiographs (showing bronchial pattern), and sometimes bronchoalveolar lavage. Heartworm-associated respiratory disease is on the differential and is tested separately."
  ],
  "clinicalSigns": [
    "Episodic coughing — often in spasms of 5–20 seconds",
    "Wheezing audible without a stethoscope in some cases",
    "Open-mouth breathing during a flare (emergency sign)",
    "Reduced exercise tolerance",
    "Crouched posture with neck extended during coughing"
  ],
  "redFlags": [
    "Open-mouth breathing in a cat — emergency",
    "Persistent rapid breathing at rest",
    "Blue or gray gum color",
    "Collapse"
  ],
  "treatment": [
    "Inhaled fluticasone via spacer (AeroKat) is the standard maintenance therapy. Most cats accept the spacer with training.",
    "Albuterol inhaler via spacer is used as a rescue inhaler for acute bronchospasm.",
    "Oral or injectable corticosteroids are used during initial flares or for cats who will not accept inhaled therapy.",
    "Identifying and removing environmental triggers — fragrances, scented litters, smoke, candles, perfumes — substantially reduces flare frequency."
  ],
  "lifestyleChanges": [
    "Use unscented, low-dust clumping litter.",
    "Eliminate household smoke, scented candles, and air fresheners.",
    "Use HEPA filtration in the cat’s primary spaces.",
    "Switch to fragrance-free cleaning products.",
    "Practice spacer training with positive reinforcement; most cats accept it within a couple of weeks."
  ],
  "prognosis": [
    "With consistent inhaled therapy and environmental control, most cats live a normal lifespan with infrequent flares.",
    "Uncontrolled disease produces progressive airway remodeling and worsens prognosis."
  ],
  "recommendedProducts": [
    {
      "name": "AeroKat Feline Spacer",
      "description": "Spacer device designed for delivering inhaled medications to cats.",
      "vendor": "amazon",
      "search": "AeroKat feline spacer"
    },
    {
      "name": "Fluticasone Inhaler (Flovent)",
      "description": "Inhaled corticosteroid prescribed by your veterinarian — first-line maintenance therapy for feline asthma.",
      "vendor": "chewyrx",
      "path": "/rx/fluticasone"
    },
    {
      "name": "Unscented Low-Dust Clumping Litter",
      "description": "Reduces airway irritation in asthmatic cats.",
      "vendor": "chewy",
      "path": "/b/unscented-cat-litter"
    }
  ],
  "faqs": [
    {
      "question": "How do I know if it is asthma or hairballs?",
      "answer": "Asthma cough is dry, spasmodic, often without any productive material. Hairball events typically end in vomited material. Persistent cough should be evaluated."
    },
    {
      "question": "Are inhaled steroids safe long-term?",
      "answer": "Yes, in most cats. Inhaled fluticasone has minimal systemic absorption, so side effects are far lower than chronic oral steroids."
    },
    {
      "question": "My cat hates the mask — will it work?",
      "answer": "Most cats accept the AeroKat spacer with patient training using treats and short sessions. Many initially resistant cats are tolerating it within a week or two."
    },
    {
      "question": "Can my cat outgrow asthma?",
      "answer": "No. Feline asthma is a chronic disease. Triggers can be reduced and inflammation controlled, but the underlying condition persists."
    }
  ],
  "citations": [
    {
      "label": "AAFP — Feline Asthma Resources",
      "url": "https://catvets.com/"
    },
    {
      "label": "Cornell Feline Health Center — Asthma",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/asthma"
    },
    {
      "label": "Merck Veterinary Manual — Feline Lower Airway Disease",
      "url": "https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/feline-lower-airway-disease"
    }
  ]
}

export default content
