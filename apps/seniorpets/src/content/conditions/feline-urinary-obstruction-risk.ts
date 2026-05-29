import type { ConditionContent } from '../types'

const content: ConditionContent = {
  "slug": "feline-urinary-obstruction-risk",
  "publishedAt": "2026-05-29T00:00:00Z",
  "updatedAt": "2026-05-29T00:00:00Z",
  "abstract": "Urinary obstruction in male cats is one of the most dangerous emergencies in feline medicine. While more common in young to middle-aged cats, senior males remain at risk — especially those with feline lower urinary tract disease (FLUTD), bladder stones, or stress.",
  "overview": [
    "The narrow male feline urethra obstructs easily with mucus plugs, crystals, or small stones. Within 24–48 hours, an obstructed cat develops life-threatening hyperkalemia, acidosis, and acute kidney injury.",
    "FLUTD is an umbrella term that includes feline idiopathic cystitis (FIC), bacterial cystitis (uncommon in younger cats but more common in seniors with CKD or diabetes), and urolithiasis.",
    "Recognition is owner-driven: any male cat straining without producing urine should be considered obstructed until proven otherwise."
  ],
  "clinicalSigns": [
    "Repeated, unproductive litterbox visits",
    "Vocalizing in or near the litterbox",
    "Excessive grooming of the perineum",
    "Hiding, restlessness",
    "Vomiting in advanced obstruction",
    "Collapse and unresponsiveness — late, life-threatening"
  ],
  "redFlags": [
    "Any straining in a male cat without confirmed urine production — emergency, go to ER",
    "Vomiting plus litterbox visits — likely advanced obstruction",
    "Collapse, weakness, slow breathing — hyperkalemic cardiac depression, true emergency"
  ],
  "treatment": [
    "Emergency relief by urinary catheterization, IV fluids, and correction of hyperkalemia. Most cats are hospitalized for 2–3 days.",
    "After resolution, longer-term management addresses the underlying cause — FIC management for idiopathic cases, urinary diets for stone-formers, antibiotics for bacterial cystitis.",
    "Perineal urethrostomy (PU) is reserved for repeat obstructions — it creates a wider opening to dramatically reduce recurrence.",
    "Stress reduction is critical for FIC; multimodal environmental modification (MEMO) is a well-described approach."
  ],
  "lifestyleChanges": [
    "Provide one more litterbox than the number of cats; place them on every floor.",
    "Use clumping, low-dust, unscented litter that the cat prefers.",
    "Feed primarily wet food to increase urine volume.",
    "Provide water fountains and multiple water sources.",
    "Reduce stress: pheromones (Feliway), routine, vertical space, and elimination of inter-cat tension."
  ],
  "prognosis": [
    "Most cats recover well from a first obstruction with proper emergency care and prevention.",
    "Recurrence is common in non-PU cases. Cats with multiple obstructions or persistent recurrence are candidates for perineal urethrostomy."
  ],
  "recommendedProducts": [
    {
      "name": "Hill’s Prescription Diet c/d Multicare",
      "description": "Therapeutic urinary diet that reduces stone and crystal formation.",
      "vendor": "chewyrx",
      "path": "/rx/hills-cd-cat"
    },
    {
      "name": "Royal Canin Urinary SO",
      "description": "Alternative urinary therapeutic diet.",
      "vendor": "chewyrx",
      "path": "/rx/royal-canin-urinary-so"
    },
    {
      "name": "Feliway Classic Diffuser",
      "description": "Pheromone therapy reduces stress-related FIC episodes.",
      "vendor": "chewy",
      "path": "/b/feliway"
    },
    {
      "name": "PetSafe Drinkwell Cat Fountain",
      "description": "Encourages steady hydration to dilute urine.",
      "vendor": "amazon",
      "search": "PetSafe Drinkwell cat fountain"
    }
  ],
  "faqs": [
    {
      "question": "How do I know if my cat is blocked?",
      "answer": "A male cat straining in the litterbox without producing urine should be assumed blocked. Go to an emergency vet immediately — every hour matters."
    },
    {
      "question": "Are female cats at risk too?",
      "answer": "Female cats can develop FLUTD but rarely obstruct because the female urethra is wider."
    },
    {
      "question": "Will my cat block again?",
      "answer": "Recurrence is possible. Strict diet, stress reduction, and increased water intake reduce risk meaningfully. PU surgery is considered for repeat blockers."
    },
    {
      "question": "What is PU surgery?",
      "answer": "Perineal urethrostomy is a surgery that creates a wider permanent urinary opening. It dramatically reduces obstruction risk but requires specific aftercare."
    }
  ],
  "citations": [
    {
      "label": "ACVIM Consensus on FLUTD",
      "url": "https://onlinelibrary.wiley.com/journal/19391676"
    },
    {
      "label": "Cornell Feline Health Center — FLUTD",
      "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease"
    },
    {
      "label": "Merck Veterinary Manual — Feline Lower Urinary Tract Disease",
      "url": "https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/feline-lower-urinary-tract-disease"
    }
  ]
}

export default content
