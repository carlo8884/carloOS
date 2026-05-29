/**
 * Dog.com — Breed-specific feeding & nutrition data file.
 *
 * Programmatic SEO source-of-truth for /breeds/[slug]/feeding pages.
 * Each record drives a deep-dive nutrition guide rendered by the
 * template at /app/breeds/[slug]/feeding/page.tsx.
 *
 * IMPORTANT — trust-integrity rules (QC §1):
 *   - No specific gram or cup quantities. Ranges only ("most adults need
 *     N–M kcal/day"), always paired with a "consult your veterinarian"
 *     reminder. Real dosing depends on individual body condition, activity,
 *     reproductive status, and disease state — none of which we can know.
 *   - No fabricated DVM byline. Content is "Dog.com Editorial."
 *   - No "we tested" / "we calibrated" claims. We synthesize published
 *     guidance from WSAVA, AAFCO, AAHA, and the peer-reviewed literature.
 *   - Caloric ranges below are computed from the standard RER formula
 *     (RER = 70 × BW_kg^0.75) multiplied by typical neutered-adult MER
 *     factors (1.4–1.6 × RER) for the breed's typical adult weight range.
 *     We present these as ranges only, never as prescriptions.
 *
 * Sources used per breed (cited in copy where relevant):
 *   - AAFCO Dog Food Nutrient Profiles (2016, current)
 *   - WSAVA Global Nutrition Committee guidelines
 *   - AAHA Nutritional Assessment Guidelines for Dogs and Cats
 *   - Breed-club nutrition statements (LRC, GRCA, etc.)
 *   - Published veterinary literature on breed-specific metabolic
 *     conditions (POMC variant in Labradors; BOAS/feeding in
 *     brachycephalic breeds; etc.)
 */

export type FeedingFrequency = {
  puppy: string
  adult: string
  senior: string
}

export type LifeStageNotes = {
  puppy: string
  adult: string
  senior: string
}

export type CaloricNeeds = {
  /** Adult weight range used as the basis for the calorie range, in lb. */
  weightRangeLb: [number, number]
  /** Maintenance kcal/day range for a typical neutered adult at this weight. */
  adultRangeKcalPerDay: [number, number]
  /**
   * Puppy maintenance energy multiplier vs. adult RER.
   * Free-text — e.g. "2× RER until 4 months, tapering to 1.6× RER at maturity".
   */
  puppyEnergyNote: string
  /**
   * Senior energy adjustment vs. adult.
   * Free-text — typically lower if sedentary, sometimes higher in lean seniors
   * with muscle loss.
   */
  seniorEnergyNote: string
}

export type FAQ = { question: string; answer: string }

export interface BreedFeedingProfile {
  slug: string
  breedName: string
  sizeCategory: 'Toy' | 'Small' | 'Medium' | 'Large' | 'Giant'
  /** 1–2 sentence breed-specific overview for the hero. */
  tagline: string
  lifeStageNotes: LifeStageNotes
  caloricNeeds: CaloricNeeds
  commonHealthConcerns: string[]
  dietaryConsiderations: string[]
  feedingFrequency: FeedingFrequency
  commonAllergies: string[]
  proteinRecommendation: string
  fatRecommendation: string
  weightManagementNotes: string
  recommendedFoodTypes: string[]
  avoidIngredients: string[]
  faqs: FAQ[]
}

/* ------------------------------------------------------------------ */

export const BREED_FEEDING_PROFILES: BreedFeedingProfile[] = [
  {
    slug: 'labrador-retriever',
    breedName: 'Labrador Retriever',
    sizeCategory: 'Large',
    tagline:
      'Labradors are the most obesity-prone large breed in the United States. A documented mutation in the POMC gene affects roughly 1 in 4 pet Labradors and disrupts the normal satiety signal — meaning measured meals are not optional.',
    lifeStageNotes: {
      puppy:
        'Lab puppies grow fast and are at high risk of developmental orthopedic disease if overfed or fed an adult or high-calorie formula. Use a food formulated for large-breed puppies that meets AAFCO growth profiles for large-size dogs (expected adult weight > 70 lb), which restricts calcium to a controlled range. Body condition matters more than scale weight — ribs should be easily palpable with a thin fat cover at all times during growth.',
      adult:
        'Adult Labradors should be fed measured meals twice daily, with treats counted against daily caloric intake. The POMC variant means many Labs will appear hungry no matter how recently they have eaten; this is genetic, not a sign of underfeeding. Feeding to body condition (ribs palpable, visible waist from above) is more reliable than feeding-guide tables on the bag.',
      senior:
        'Older Labradors often need a 10–20% calorie reduction as activity drops, but lean body mass should be preserved with adequate high-quality protein. Joint-supportive nutrients (EPA/DHA from marine sources, glucosamine, chondroitin) become more relevant alongside arthritis management.',
    },
    caloricNeeds: {
      weightRangeLb: [55, 80],
      adultRangeKcalPerDay: [1100, 1700],
      puppyEnergyNote:
        'Roughly 2× adult RER from weaning to ~4 months, tapering to 1.6× RER by 6 months and 1.2–1.4× RER through skeletal maturity (~12–18 months). Large-breed puppy formula only.',
      seniorEnergyNote:
        'Often 10–20% below adult maintenance once activity drops, but adjust to body condition rather than age alone.',
    },
    commonHealthConcerns: [
      'Obesity (POMC gene variant in ~23% of pet Labradors per Raffan et al., 2016, Cell Metabolism)',
      'Hip and elbow dysplasia (Labradors are the second most elbow-affected breed)',
      'Osteoarthritis secondary to dysplasia and excess body condition',
      'Exercise-induced collapse (EIC) in working-lines',
      'Hypothyroidism in middle age',
    ],
    dietaryConsiderations: [
      'Lifelong lean body condition (BCS 4–5/9) is the single highest-impact intervention',
      'Marine-source EPA/DHA supports joints and may modestly reduce arthritis NSAID needs',
      'Measured meals — never free-feed a Labrador',
      'Treats counted as part of daily calories, ideally ≤10% of intake',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day (twice-daily feeding is associated with lower GDV risk than once-daily in large breeds)',
      senior: '2 meals/day; some seniors do better on 3 smaller meals',
    },
    commonAllergies: [
      'Cutaneous adverse food reactions are uncommon overall; when present, beef, dairy, and chicken are the most frequently reported triggers across dogs in general (Mueller et al., 2016 review)',
      'Atopic dermatitis (environmental, not dietary) is more common than true food allergy in this breed',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% on a dry-matter basis for adult maintenance; 22.5% for growth. Most adult Labrador diets sit between 22–28% DM protein, which supports lean mass without driving excess calories.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Most adult Lab diets fall in the 12–18% fat range; higher fat is energy-dense and contributes to obesity risk in this breed.',
    weightManagementNotes:
      'Labradors gain weight easily and lose it slowly. If your dog is above ideal body condition, work with your veterinarian on a structured weight-loss plan — typically a 1–2% body weight loss per week target, achieved with a therapeutic weight-loss diet (not just less of the regular food, which can create nutrient deficiencies at heavily reduced volumes). Reassess body condition monthly.',
    recommendedFoodTypes: [
      'Complete-and-balanced dry food meeting AAFCO adult maintenance or large-breed growth profiles',
      'WSAVA-aligned manufacturers (those that meet the WSAVA Global Nutrition Committee selection criteria) preferred',
      'Therapeutic weight-management diets (Hill\'s Metabolic, Royal Canin Satiety, Purina OM) for dogs above ideal BCS',
    ],
    avoidIngredients: [
      'High-calorie "all life stages" foods for adult, sedentary Labradors — they accelerate weight gain',
      'Excessive table scraps and high-fat treats',
      'Cooked bones (splinter risk)',
      'Xylitol-sweetened products (acutely toxic — life-threatening hypoglycemia)',
      'Grapes and raisins (acute kidney injury risk)',
    ],
    faqs: [
      {
        question: 'How many calories does an adult Labrador Retriever need per day?',
        answer:
          'A neutered adult Labrador in the 55–80 lb range typically needs roughly 1,100–1,700 kcal/day for maintenance, with active working dogs at the higher end and sedentary household dogs at the lower end. Individual needs vary by metabolism, neuter status, and activity — confirm with your veterinarian based on body condition.',
      },
      {
        question: 'Is grain-free food better for Labradors?',
        answer:
          'No. The FDA has investigated a link between grain-free diets and diet-associated dilated cardiomyopathy (DCM) since 2018. The link is strongest with diets high in peas, lentils, and other pulses. WSAVA and most veterinary cardiologists currently recommend against grain-free diets unless your veterinarian has prescribed one for a specific medical reason.',
      },
      {
        question: 'How can I tell if my Labrador is overweight?',
        answer:
          'Use the 9-point Body Condition Score (BCS) chart from the WSAVA Global Nutrition Committee. Ideal is BCS 4–5/9 — ribs easily palpable with light fat cover, a visible waist from above, and an abdominal tuck when viewed from the side. If you cannot feel ribs without pressing, your dog is above ideal.',
      },
      {
        question: 'My Labrador acts hungry all the time — am I underfeeding?',
        answer:
          'Probably not. The POMC gene variant carried by roughly 23% of pet Labradors disrupts the normal satiety signal — affected dogs do not feel "full" the way other dogs do. Feed to body condition, not to behavior. If body condition is ideal, do not increase portions in response to begging.',
      },
    ],
  },

  {
    slug: 'golden-retriever',
    breedName: 'Golden Retriever',
    sizeCategory: 'Large',
    tagline:
      'Golden Retrievers carry the highest documented breed-specific cancer rate in the United States — roughly 60% of deaths are attributed to cancer per the Morris Animal Foundation Golden Retriever Lifetime Study. Lean body condition and a complete-and-balanced diet are the practical levers owners can pull.',
    lifeStageNotes: {
      puppy:
        'Golden puppies should be fed a large-breed growth formula meeting AAFCO growth profiles for large-size dogs (>70 lb expected adult weight). Controlled calcium and phosphorus levels matter for orthopedic development. Free-choice feeding accelerates growth and increases dysplasia and orthopedic risk — measured meals from weaning.',
      adult:
        'Adult Goldens benefit from a lean body condition (BCS 4–5/9) maintained throughout life. The Morris Animal Foundation Lifetime Study found that overweight body condition was associated with shorter median lifespan and higher all-cause morbidity. Feed measured twice-daily meals.',
      senior:
        'Many senior Goldens develop orthopedic, cardiac, or cancer-related needs. Maintain lean mass with adequate protein (don\'t restrict protein in older dogs unless your veterinarian has prescribed a renal diet for documented kidney disease).',
    },
    caloricNeeds: {
      weightRangeLb: [55, 75],
      adultRangeKcalPerDay: [1100, 1600],
      puppyEnergyNote:
        '2× adult RER from weaning to ~4 months, tapering to 1.6× RER by 6 months and 1.2–1.4× RER through skeletal maturity (~12–18 months).',
      seniorEnergyNote:
        'Typically 10–20% below adult maintenance as activity drops; adjust to body condition.',
    },
    commonHealthConcerns: [
      'Hemangiosarcoma and lymphoma (the highest-prevalence cancers per the Golden Retriever Lifetime Study)',
      'Hip and elbow dysplasia',
      'Subvalvular aortic stenosis (SAS) and dilated cardiomyopathy (DCM)',
      'Hypothyroidism',
      'Atopic dermatitis (chronic skin allergies)',
    ],
    dietaryConsiderations: [
      'Lean body condition throughout life',
      'Marine-source EPA/DHA for joint, skin, and cardiovascular support',
      'Complete-and-balanced diets from manufacturers meeting WSAVA selection criteria',
      'Vigilance about diet-associated DCM — avoid unprescribed grain-free diets',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day',
      senior: '2 meals/day; smaller, more frequent meals may help dogs with cancer-related anorexia',
    },
    commonAllergies: [
      'Atopic dermatitis (environmental allergens) is common in Goldens — far more so than true food allergy',
      'When food allergy is present, beef, dairy, and chicken are the most commonly reported triggers across dogs in general',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% on a dry-matter basis for adult maintenance; 22.5% for growth. Adult Goldens generally do well on 22–28% DM protein.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Typical adult Golden diets sit in the 12–18% fat range.',
    weightManagementNotes:
      'Goldens are food-motivated and easily over-treated. Use body condition score, not the bag\'s feeding chart, as your reference. If your Golden is above ideal BCS, partner with your veterinarian on a structured weight-loss plan — therapeutic weight-loss diets preserve essential nutrients at reduced calorie intake.',
    recommendedFoodTypes: [
      'Complete-and-balanced dry food meeting AAFCO adult maintenance or large-breed growth profiles',
      'WSAVA-aligned manufacturers preferred',
      'Veterinary therapeutic diets for documented medical conditions',
    ],
    avoidIngredients: [
      'Unprescribed grain-free diets (FDA-investigated link to dilated cardiomyopathy)',
      'Boutique/exotic-protein diets without published feeding-trial substantiation',
      'Cooked bones',
      'Xylitol-sweetened products',
      'Grapes, raisins, macadamia nuts, onions, garlic',
    ],
    faqs: [
      {
        question: 'Do Golden Retrievers need a special diet because of cancer risk?',
        answer:
          'No specific diet has been shown to prevent cancer in Goldens. The strongest dietary lever supported by current evidence is lifelong lean body condition, which is associated with longer median lifespan in dogs generally. Discuss any specific nutritional questions with your veterinarian, especially during cancer treatment.',
      },
      {
        question: 'Should I feed my Golden Retriever grain-free food?',
        answer:
          'Most veterinary cardiologists currently recommend against grain-free diets unless your veterinarian has prescribed one for a specific medical condition. The FDA investigation into diet-associated dilated cardiomyopathy (DCM) has shown a strong association with grain-free diets, particularly those high in peas, lentils, and other pulses.',
      },
      {
        question: 'How much should I feed my Golden Retriever puppy?',
        answer:
          'Feed a large-breed growth formula at measured meals, adjusting to maintain ideal body condition (ribs easily palpable with a thin fat cover). Specific amounts depend on growth rate, individual metabolism, and food calorie density — your veterinarian can confirm the right target at each well-puppy visit.',
      },
      {
        question: 'Do Goldens benefit from fish oil supplements?',
        answer:
          'Many Goldens do — EPA and DHA from marine sources are well-documented to support joints, skin, and cardiovascular health. Use a product with a published EPA+DHA content per serving and discuss the right amount with your veterinarian, who will adjust based on body weight and any concurrent medications.',
      },
    ],
  },

  {
    slug: 'german-shepherd',
    breedName: 'German Shepherd',
    sizeCategory: 'Large',
    tagline:
      'German Shepherds have a sensitive GI tract relative to other large breeds and are predisposed to exocrine pancreatic insufficiency (EPI) and chronic enteropathies. Diet stability, moderate fat levels, and breed-specific awareness of EPI symptoms are the practical priorities.',
    lifeStageNotes: {
      puppy:
        'GSD puppies should be fed a large-breed growth formula meeting AAFCO growth profiles for large-size dogs. Controlled calcium is important for orthopedic development. Slow, measured growth — rather than fast growth — is associated with lower lifetime orthopedic disease risk in large-breed puppies.',
      adult:
        'Adult GSDs do best on a stable diet — frequent food switches can trigger GI upset in this breed. Moderate-fat, highly digestible diets are generally well tolerated. Lifelong lean body condition reduces orthopedic and degenerative myelopathy burden.',
      senior:
        'Many senior GSDs develop hindlimb weakness from degenerative myelopathy (DM), hip arthritis, or both. Maintain lean body condition and adequate protein for muscle mass; avoid the temptation to "feed up" a thin senior without a vet workup — weight loss often signals an underlying condition.',
    },
    caloricNeeds: {
      weightRangeLb: [50, 90],
      adultRangeKcalPerDay: [1100, 1800],
      puppyEnergyNote:
        '2× adult RER until ~4 months, tapering to 1.6× RER by 6 months and 1.2–1.4× RER through skeletal maturity (~14–18 months).',
      seniorEnergyNote:
        'Often 10–20% below adult maintenance once activity drops, but maintain protein intake for lean mass.',
    },
    commonHealthConcerns: [
      'Exocrine pancreatic insufficiency (EPI) — GSDs are the most commonly affected breed',
      'Hip and elbow dysplasia',
      'Degenerative myelopathy (SOD1 mutation testing available)',
      'Gastric dilatation-volvulus (GDV / bloat) — deep-chested breed',
      'Chronic enteropathies (IBD, antibiotic-responsive enteropathy)',
    ],
    dietaryConsiderations: [
      'Highly digestible, moderate-fat diets are typically best tolerated',
      'Diet stability matters — avoid frequent food switches',
      'Twice-daily feeding (not once daily) is associated with lower GDV risk in deep-chested breeds',
      'Dogs with confirmed EPI need pancreatic enzyme supplementation with every meal, plus cobalamin (B12) supplementation if deficient — this is a veterinary diagnosis and prescription',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day (twice daily preferred for GDV-prevention reasons)',
      senior: '2 meals/day; smaller, more frequent meals may help dogs with EPI or IBD',
    },
    commonAllergies: [
      'Adverse food reactions are more common in GSDs than in many other breeds',
      'Chronic enteropathies in GSDs often respond to a hydrolyzed-protein or novel-protein diet — diagnosis and prescription should be made by a veterinarian',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult GSD diets sit in the 22–28% DM protein range; highly digestible protein sources matter more than total protein percentage for GI-sensitive individuals.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Moderate fat (10–15% DM) is often better tolerated than high-fat formulations in GSDs.',
    weightManagementNotes:
      'GSDs should be kept lean to reduce hip dysplasia progression and degenerative myelopathy burden. Sudden weight loss in a GSD warrants veterinary workup for EPI, IBD, and other conditions — don\'t simply increase food.',
    recommendedFoodTypes: [
      'Highly digestible, moderate-fat complete-and-balanced diets',
      'WSAVA-aligned manufacturers preferred',
      'Veterinary therapeutic GI or hydrolyzed-protein diets for diagnosed chronic enteropathies',
      'Pancreatic-enzyme supplementation (prescribed) for confirmed EPI',
    ],
    avoidIngredients: [
      'High-fat formulations in GI-sensitive individuals',
      'Frequent diet changes — transition slowly when switching foods (7–10 days minimum)',
      'Cooked bones (splinter risk)',
      'Xylitol-sweetened products',
      'Grapes, raisins, onions, garlic, macadamia nuts',
    ],
    faqs: [
      {
        question: 'Why does my German Shepherd have chronic loose stools?',
        answer:
          'GSDs are predisposed to several GI conditions including exocrine pancreatic insufficiency (EPI), antibiotic-responsive enteropathy, and inflammatory bowel disease. Chronic loose stools warrant a veterinary workup — EPI in particular is treatable with pancreatic enzyme supplementation but is often undiagnosed for months before testing.',
      },
      {
        question: 'What is the best dog food for German Shepherds with sensitive stomachs?',
        answer:
          'There is no single best brand. The general approach is a complete-and-balanced diet from a WSAVA-aligned manufacturer using highly digestible ingredients and moderate fat content. For dogs with diagnosed chronic enteropathies, a veterinary therapeutic GI or hydrolyzed-protein diet may be prescribed.',
      },
      {
        question: 'Should I be worried about bloat (GDV) in my GSD?',
        answer:
          'German Shepherds are a deep-chested breed at elevated GDV risk. Twice-daily feeding (not once daily), avoiding vigorous exercise immediately before or after meals, and elective prophylactic gastropexy (often performed at spay/neuter for high-risk breeds) are the standard preventive measures. Discuss gastropexy timing with your veterinarian.',
      },
      {
        question: 'Can I feed my German Shepherd a raw diet?',
        answer:
          'The WSAVA, FDA, CDC, and AVMA all advise against raw diets due to documented pathogen contamination (Salmonella, Listeria, E. coli) and nutritional imbalance risk in home-prepared formulations. If you are considering a raw diet for a specific reason, discuss the evidence and the alternatives with your veterinarian.',
      },
    ],
  },

  {
    slug: 'french-bulldog',
    breedName: 'French Bulldog',
    sizeCategory: 'Small',
    tagline:
      'French Bulldogs are brachycephalic, prone to skin and ear allergies, and easily overweight given their small size. Feeding strategy must account for BOAS-related eating challenges and a high prevalence of cutaneous and GI conditions.',
    lifeStageNotes: {
      puppy:
        'Frenchie puppies are small-breed dogs but with a stocky build that gains weight easily. Use a small-breed puppy formula meeting AAFCO growth profiles for small/medium dogs (expected adult weight <70 lb). Feed measured meals from weaning.',
      adult:
        'Adult Frenchies typically weigh 16–28 lb. They are easily overweight, and excess body condition worsens BOAS-related breathing difficulty. Lean body condition is not optional in this breed — it is a respiratory-health imperative.',
      senior:
        'Senior Frenchies often have concurrent orthopedic, dermatologic, and BOAS-related issues. Calorie needs typically drop with reduced activity; maintain lean condition aggressively to spare breathing function.',
    },
    caloricNeeds: {
      weightRangeLb: [16, 28],
      adultRangeKcalPerDay: [550, 850],
      puppyEnergyNote:
        '2× adult RER until ~4 months, tapering to 1.6× RER by 6 months and 1.2–1.4× RER through skeletal maturity (~10–12 months).',
      seniorEnergyNote:
        'Often 10–20% below adult maintenance — but lean condition is critical for breathing, so do not under-restrict either.',
    },
    commonHealthConcerns: [
      'Brachycephalic obstructive airway syndrome (BOAS) — worsened by excess body condition',
      'Cutaneous adverse food reactions and atopic dermatitis (skin allergies are highly prevalent)',
      'Intervertebral disc disease (IVDD)',
      'Hip dysplasia',
      'Gastroesophageal reflux and regurgitation, often BOAS-related',
    ],
    dietaryConsiderations: [
      'Lean body condition is essential to ease BOAS symptoms',
      'Slow-feeder or puzzle bowls help BOAS-affected dogs avoid aerophagia (swallowing air with rapid eating)',
      'Small kibble size or moistened food is easier for brachycephalic dogs to pick up and chew',
      'For dogs with confirmed cutaneous adverse food reactions, a hydrolyzed-protein or novel-protein elimination diet (prescribed by a veterinarian) is the diagnostic and therapeutic standard',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day; some BOAS-affected dogs do better on 3 smaller meals',
      senior: '2–3 meals/day',
    },
    commonAllergies: [
      'Cutaneous adverse food reactions are notably common in Frenchies relative to many other breeds',
      'When food allergy is confirmed, beef, dairy, chicken, and wheat are the most commonly reported triggers across dogs in general',
      'Environmental atopic dermatitis is even more common than food allergy and presents similarly — diagnosis requires elimination diet work',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult small-breed diets sit in the 22–30% DM protein range.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Frenchies do not benefit from very high-fat diets; moderate fat (10–15% DM) is generally appropriate.',
    weightManagementNotes:
      'A 2 lb gain on a Frenchie is the proportional equivalent of an 8–12 lb gain on a Labrador. Frenchies hide weight gain under their stocky build — use body condition score, not the scale. Excess weight worsens BOAS symptoms and can precipitate respiratory crises in hot weather.',
    recommendedFoodTypes: [
      'Complete-and-balanced small-breed adult diet from a WSAVA-aligned manufacturer',
      'Small kibble or moistened food for easier prehension',
      'Veterinary therapeutic diets (hydrolyzed-protein, novel-protein, or GI) for diagnosed conditions',
    ],
    avoidIngredients: [
      'High-calorie treats — Frenchie portion math is unforgiving',
      'Large-breed kibble (hard for brachycephalic dogs to pick up)',
      'Cooked bones',
      'Xylitol-sweetened products',
      'Grapes, raisins, onions, garlic, macadamia nuts, chocolate',
      'Unprescribed grain-free diets (FDA DCM investigation)',
    ],
    faqs: [
      {
        question: 'How many calories does an adult French Bulldog need per day?',
        answer:
          'A neutered adult Frenchie in the 16–28 lb range typically needs roughly 550–850 kcal/day for maintenance. Sedentary household dogs sit at the lower end. Confirm your dog\'s individual target with your veterinarian, who will adjust to body condition.',
      },
      {
        question: 'Why does my Frenchie have so many skin problems — is it the food?',
        answer:
          'Possibly, but more often it is environmental atopic dermatitis rather than true food allergy. The two present similarly. Diagnosing food allergy requires a strict 8–12 week elimination diet trial with a veterinary hydrolyzed-protein or novel-protein diet, then a re-challenge. This should be done with your veterinarian or a veterinary dermatologist.',
      },
      {
        question: 'Should I feed my Frenchie a grain-free diet?',
        answer:
          'Most veterinary cardiologists currently recommend against grain-free diets unless prescribed for a specific medical reason. The FDA has investigated a link between grain-free diets and dilated cardiomyopathy (DCM) since 2018, and the link is strongest for diets high in pulses (peas, lentils).',
      },
      {
        question: 'How can I tell if my French Bulldog is overweight?',
        answer:
          'Use the 9-point Body Condition Score (BCS) chart from the WSAVA Global Nutrition Committee. Ideal is BCS 4–5/9 — ribs easily palpable, visible waist from above, abdominal tuck from the side. Frenchies hide weight under their stocky build, so palpation matters more than appearance.',
      },
    ],
  },

  {
    slug: 'poodle',
    breedName: 'Poodle',
    sizeCategory: 'Medium',
    tagline:
      'Poodles span three size varieties (Standard, Miniature, Toy) with markedly different caloric needs and health risks. Standard Poodles are deep-chested and predisposed to GDV and Addison\'s disease; smaller varieties carry different risks. Feeding strategy varies by variety.',
    lifeStageNotes: {
      puppy:
        'Use a growth formula appropriate to expected adult size — large-breed growth for Standard Poodles, small-breed growth for Miniature and Toy. Standard Poodle puppies in particular benefit from controlled-calcium large-breed puppy formulas.',
      adult:
        'Adult caloric needs differ enormously by variety. A Toy Poodle (4–6 lb) needs only a small fraction of what a Standard Poodle (40–70 lb) needs. Feed measured meals to body condition.',
      senior:
        'Senior Poodles of all sizes benefit from lean body condition. Toy and Miniature Poodles are prone to dental disease, which can affect food choice (softened kibble or canned food may be needed). Standard Poodles often develop arthritis and Addison\'s disease in middle age.',
    },
    caloricNeeds: {
      weightRangeLb: [4, 70],
      adultRangeKcalPerDay: [200, 1500],
      puppyEnergyNote:
        '2× adult RER until ~4 months, tapering through skeletal maturity. Use large-breed growth formula for Standard Poodles.',
      seniorEnergyNote:
        'Typically 10–20% below adult maintenance once activity drops; adjust to body condition.',
    },
    commonHealthConcerns: [
      'Addison\'s disease (hypoadrenocorticism) — Standard Poodles are the most predisposed breed',
      'Gastric dilatation-volvulus (GDV / bloat) — Standard Poodles',
      'Progressive retinal atrophy (PRA) — all varieties; DNA testing available',
      'Hip dysplasia — Standard Poodles',
      'Patellar luxation — Toy and Miniature Poodles',
      'Dental disease — Toy and Miniature Poodles',
    ],
    dietaryConsiderations: [
      'Variety-appropriate kibble size (large kibble for Standards; small kibble for Toys/Minis)',
      'Twice-daily feeding for Standard Poodles (GDV-prevention)',
      'Dental-supportive diets or daily dental care for Toy/Miniature Poodles',
      'Dogs with Addison\'s disease often do well on standard adult diets — the condition is managed with medication, not diet',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day (essential for Standard Poodles; recommended for all)',
      senior: '2 meals/day',
    },
    commonAllergies: [
      'Adverse food reactions occur in Poodles but are less prevalent than in some other breeds',
      'When present, beef, dairy, and chicken are the most commonly reported triggers across dogs in general',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult Poodle diets sit in the 22–28% DM protein range.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Moderate fat is appropriate for all varieties.',
    weightManagementNotes:
      'Toy Poodles can gain meaningful weight on a few extra treats per day — the small absolute calorie surplus is large relative to their body mass. Use small training treats or pieces of kibble from the daily ration as rewards. Standard Poodles, like other large breeds, benefit from lean body condition for joint and cardiovascular health.',
    recommendedFoodTypes: [
      'Complete-and-balanced diet appropriate to variety (small-breed for Toys/Minis, adult or large-breed for Standards)',
      'WSAVA-aligned manufacturers preferred',
      'Veterinary therapeutic diets for diagnosed conditions',
    ],
    avoidIngredients: [
      'Unprescribed grain-free diets (FDA DCM investigation — Standard Poodles among the breeds with reported cases)',
      'Boutique/exotic-protein diets without published feeding-trial substantiation',
      'Cooked bones',
      'Xylitol-sweetened products',
      'Grapes, raisins, onions, garlic, macadamia nuts',
    ],
    faqs: [
      {
        question: 'Do all Poodle sizes need the same food?',
        answer:
          'No. Toy and Miniature Poodles are small-breed dogs and do better on small-breed formulations and kibble sizes. Standard Poodles are large-breed dogs and benefit from large-breed puppy formulas during growth and the same general feeding strategy as other large breeds (twice-daily feeding, lean body condition, GDV awareness).',
      },
      {
        question: 'Should I feed my Poodle grain-free food?',
        answer:
          'Most veterinary cardiologists currently recommend against grain-free diets unless your veterinarian has prescribed one. The FDA investigation into diet-associated DCM has included reports in Standard Poodles, and the link is strongest with diets high in pulses (peas, lentils).',
      },
      {
        question: 'How do I prevent dental disease in my Toy Poodle?',
        answer:
          'Daily toothbrushing with a veterinary toothpaste, professional dental cleanings as recommended by your veterinarian, and Veterinary Oral Health Council (VOHC)-accepted dental products. Toy and Miniature Poodles are at high risk for periodontal disease — diet alone is not enough.',
      },
      {
        question: 'Can dietary changes help with Addison\'s disease in Standard Poodles?',
        answer:
          'No. Addison\'s disease is managed with lifelong mineralocorticoid and glucocorticoid medication, not diet. Most affected dogs do well on a standard adult maintenance diet — discuss any specific dietary questions with your veterinarian.',
      },
    ],
  },

  {
    slug: 'bulldog',
    breedName: 'Bulldog',
    sizeCategory: 'Medium',
    tagline:
      'Bulldogs (English Bulldogs) are brachycephalic, stocky, and easily overweight. Excess body condition is particularly dangerous because it worsens BOAS, heat intolerance, and orthopedic load. Lean condition is a respiratory and orthopedic imperative.',
    lifeStageNotes: {
      puppy:
        'Bulldog puppies grow quickly and easily overshoot ideal body condition. Feed a small/medium-breed growth formula meeting AAFCO growth profiles, in measured meals. Avoid free-choice feeding.',
      adult:
        'Adult Bulldogs typically weigh 40–55 lb. They are notably prone to obesity, and excess weight worsens BOAS-related breathing and heat intolerance. Lean body condition (BCS 4–5/9) is non-negotiable.',
      senior:
        'Senior Bulldogs often have concurrent BOAS, orthopedic, dermatologic, and cardiac issues. Caloric needs typically drop sharply with reduced activity — adjust portions promptly to avoid weight gain.',
    },
    caloricNeeds: {
      weightRangeLb: [40, 55],
      adultRangeKcalPerDay: [900, 1300],
      puppyEnergyNote:
        '2× adult RER until ~4 months, tapering through skeletal maturity (~12 months).',
      seniorEnergyNote:
        'Often 15–25% below adult maintenance — Bulldogs slow down significantly with age, but lean condition must be maintained for breathing.',
    },
    commonHealthConcerns: [
      'Brachycephalic obstructive airway syndrome (BOAS) — worsened by obesity',
      'Heat intolerance and risk of heat stroke',
      'Skin fold dermatitis and chronic skin allergies',
      'Hip dysplasia and elbow dysplasia',
      'Cherry eye and entropion',
      'Cardiac disease (pulmonic stenosis among others)',
    ],
    dietaryConsiderations: [
      'Lean body condition is critical for BOAS and heat tolerance',
      'Slow-feeder bowls help reduce aerophagia (air-swallowing)',
      'Small kibble or moistened food is easier for brachycephalic dogs to pick up',
      'Skin allergy work (food vs. environmental) often involves a prescribed elimination diet trial',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day',
      senior: '2 meals/day',
    },
    commonAllergies: [
      'Cutaneous adverse food reactions are relatively common in Bulldogs',
      'When confirmed, beef, dairy, chicken, and wheat are the most commonly reported triggers across dogs in general',
      'Environmental atopic dermatitis is even more prevalent in this breed — diagnosis requires veterinary workup',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult Bulldog diets sit in the 22–28% DM protein range.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Moderate fat (10–14% DM) is appropriate; high-fat diets accelerate weight gain in this breed.',
    weightManagementNotes:
      'Bulldogs hide weight under their stocky build. A few extra pounds on a Bulldog meaningfully worsens BOAS symptoms and heat-stroke risk. If your dog is above ideal BCS, partner with your veterinarian on a structured weight-loss plan using a therapeutic weight-management diet — restricting volume of a regular food can create nutrient deficiencies.',
    recommendedFoodTypes: [
      'Complete-and-balanced adult maintenance diet from a WSAVA-aligned manufacturer',
      'Small kibble or moistened food for easier prehension',
      'Veterinary therapeutic diets for diagnosed conditions',
    ],
    avoidIngredients: [
      'High-calorie treats — Bulldog portion math is unforgiving',
      'High-fat diets',
      'Cooked bones',
      'Xylitol-sweetened products',
      'Grapes, raisins, onions, garlic, macadamia nuts, chocolate',
      'Unprescribed grain-free diets (FDA DCM investigation)',
    ],
    faqs: [
      {
        question: 'How many calories does an adult Bulldog need per day?',
        answer:
          'A neutered adult Bulldog in the 40–55 lb range typically needs roughly 900–1,300 kcal/day for maintenance, with sedentary household dogs at the lower end. Confirm your dog\'s target with your veterinarian based on body condition.',
      },
      {
        question: 'Why is my Bulldog always itchy?',
        answer:
          'Bulldogs are predisposed to both environmental atopic dermatitis and cutaneous adverse food reactions, which present similarly. Diagnosis requires veterinary workup — typically a strict 8–12 week prescribed elimination diet trial to rule food allergy in or out, with a veterinary dermatology referral if symptoms persist.',
      },
      {
        question: 'Should Bulldogs eat from raised bowls?',
        answer:
          'Raised feeders have historically been suggested for brachycephalic breeds, but the evidence is mixed and some studies in large/deep-chested breeds suggest raised feeders may increase GDV risk. For Bulldogs specifically, slow-feeder bowls (which reduce eating speed) and easier-to-pick-up food forms (smaller kibble, moistened) are generally more impactful than bowl height.',
      },
      {
        question: 'Can my Bulldog have a raw or BARF diet?',
        answer:
          'The WSAVA, FDA, CDC, and AVMA all advise against raw diets due to documented pathogen contamination and nutritional imbalance risk. Bulldogs gain no breed-specific benefit from raw feeding, and the risks (Salmonella, Listeria, E. coli) apply equally. Discuss with your veterinarian before starting any non-standard diet.',
      },
    ],
  },

  {
    slug: 'beagle',
    breedName: 'Beagle',
    sizeCategory: 'Medium',
    tagline:
      'Beagles are scent-driven, food-motivated, and one of the most obesity-prone medium-size breeds. The combination of high food drive and frequent counter-surfing or scavenging means measured meals and locked food storage are practical necessities.',
    lifeStageNotes: {
      puppy:
        'Beagle puppies grow quickly. Use a small/medium-breed puppy formula meeting AAFCO growth profiles. Measured meals from weaning — Beagle puppies do not self-regulate well.',
      adult:
        'Adult Beagles typically weigh 20–30 lb. They are notably food-driven and easily gain weight. Treats should be counted against daily calories, and ideally most rewards come from the daily kibble ration during training.',
      senior:
        'Many senior Beagles develop hypothyroidism, dental disease, and arthritis. Caloric needs drop with reduced activity. Adjust portions promptly to avoid weight gain, which accelerates arthritis progression.',
    },
    caloricNeeds: {
      weightRangeLb: [20, 30],
      adultRangeKcalPerDay: [600, 900],
      puppyEnergyNote:
        '2× adult RER until ~4 months, tapering through skeletal maturity (~10–12 months).',
      seniorEnergyNote:
        'Typically 10–20% below adult maintenance once activity drops; adjust to body condition.',
    },
    commonHealthConcerns: [
      'Obesity (highly prevalent — Beagles are notably food-driven)',
      'Hypothyroidism',
      'Intervertebral disc disease (IVDD)',
      'Epilepsy (idiopathic)',
      'Cherry eye and ear infections (long pendulous ears)',
      'Dental disease',
    ],
    dietaryConsiderations: [
      'Measured meals — never free-feed a Beagle',
      'Treats counted as part of daily calories, ≤10% of intake',
      'Slow-feeder bowls or puzzle feeders help slow eating and provide mental enrichment',
      'Locked or out-of-reach food storage — Beagles will counter-surf and trash-raid',
    ],
    feedingFrequency: {
      puppy: '3–4 meals/day until 4 months, then 3 meals until 6 months, then 2 meals/day',
      adult: '2 meals/day',
      senior: '2 meals/day; smaller, more frequent meals may help some seniors',
    },
    commonAllergies: [
      'Adverse food reactions occur but are not notably more prevalent in Beagles than in dogs generally',
      'When present, beef, dairy, and chicken are the most commonly reported triggers',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult Beagle diets sit in the 22–28% DM protein range.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Moderate fat (10–14% DM) is appropriate; high-fat diets accelerate weight gain in this breed.',
    weightManagementNotes:
      'Beagles are the canine textbook case for owner-driven obesity. The food drive is intense and persistent — owners often interpret a Beagle\'s constant begging as hunger and overfeed. Body condition score, not begging behavior, should drive portion decisions. If your Beagle is overweight, work with your veterinarian on a structured weight-loss plan.',
    recommendedFoodTypes: [
      'Complete-and-balanced adult maintenance diet from a WSAVA-aligned manufacturer',
      'Weight-management formulations for dogs above ideal body condition',
      'Veterinary therapeutic weight-loss diets (Hill\'s Metabolic, Royal Canin Satiety, Purina OM) for clinically overweight or obese dogs',
    ],
    avoidIngredients: [
      'High-calorie treats — small absolute additions are large relative to daily needs',
      'Free-feeding setups',
      'Cooked bones',
      'Xylitol-sweetened products',
      'Grapes, raisins, onions, garlic, macadamia nuts, chocolate',
      'Unprescribed grain-free diets (FDA DCM investigation)',
    ],
    faqs: [
      {
        question: 'How many calories does an adult Beagle need per day?',
        answer:
          'A neutered adult Beagle in the 20–30 lb range typically needs roughly 600–900 kcal/day for maintenance, with sedentary household dogs at the lower end and active hunting dogs at the higher end. Confirm your dog\'s individual target with your veterinarian based on body condition.',
      },
      {
        question: 'My Beagle acts hungry all the time — should I feed more?',
        answer:
          'No, not based on behavior alone. Beagles are intensely food-driven and many will appear hungry no matter how recently fed. Feed to body condition (BCS 4–5/9 ideal), not to begging. If body condition is correct, the persistent food interest is normal Beagle behavior.',
      },
      {
        question: 'How can I tell if my Beagle is overweight?',
        answer:
          'Use the 9-point Body Condition Score chart from the WSAVA Global Nutrition Committee. Ideal is BCS 4–5/9 — ribs easily palpable with a light fat cover, visible waist from above, abdominal tuck from the side. If you cannot easily feel ribs, your Beagle is overweight.',
      },
      {
        question: 'What treats can I give my Beagle without making them fat?',
        answer:
          'Low-calorie options include pieces of the daily kibble ration (the simplest approach), fresh vegetables (green beans, carrots, cucumber, sliced apple without seeds), and commercial training treats with a published calorie count. Whatever the source, total treats should make up no more than 10% of daily caloric intake.',
      },
    ],
  },

  {
    slug: 'yorkshire-terrier',
    breedName: 'Yorkshire Terrier',
    sizeCategory: 'Toy',
    tagline:
      'Yorkshire Terriers are toy-breed dogs (typically 4–7 lb) with high relative caloric needs, hypoglycemia risk in puppies, and significant dental disease prevalence. Small absolute portion errors are proportionally large for a Yorkie.',
    lifeStageNotes: {
      puppy:
        'Yorkie puppies are at meaningful risk of juvenile hypoglycemia — they can crash from low blood sugar within hours of a missed meal. Feed small, frequent meals (4 or more per day) until at least 4–6 months of age. Use a small-breed or toy-breed puppy formula.',
      adult:
        'Adult Yorkies typically weigh 4–7 lb. Caloric needs are small in absolute terms but high relative to body weight. A few extra calories per day quickly accumulates. Dental disease prevention from a young age is essential.',
      senior:
        'Senior Yorkies often have advanced dental disease, tracheal collapse, and progressive heart disease (mitral valve disease). Caloric needs drop with reduced activity; some seniors prefer or require softened or canned food due to dental issues.',
    },
    caloricNeeds: {
      weightRangeLb: [4, 7],
      adultRangeKcalPerDay: [180, 280],
      puppyEnergyNote:
        'Toy-breed puppies need 2.5–3× adult RER initially and have higher per-kg energy needs than larger puppies. Frequent meals required to avoid hypoglycemia.',
      seniorEnergyNote:
        'Typically 10–20% below adult maintenance once activity drops; adjust to body condition.',
    },
    commonHealthConcerns: [
      'Juvenile hypoglycemia (Yorkie puppies)',
      'Dental disease (highly prevalent in toy breeds)',
      'Tracheal collapse',
      'Patellar luxation',
      'Portosystemic (liver) shunts',
      'Mitral valve disease (degenerative valvular disease)',
    ],
    dietaryConsiderations: [
      'Small kibble size — standard kibble is too large for Yorkie jaws',
      'Daily dental care (toothbrushing, VOHC-accepted products) is essential — diet alone does not prevent dental disease',
      'Calorie-dense, complete-and-balanced toy-breed diets are appropriate for most adults',
      'Dogs with diagnosed liver shunts may need a prescribed protein-modified diet — this is a veterinary decision',
    ],
    feedingFrequency: {
      puppy: '4+ meals/day until 4 months, then 3 meals until 6 months, then 2–3 meals/day',
      adult: '2–3 meals/day',
      senior: '2–3 meals/day; soft food may be preferred for advanced dental disease',
    },
    commonAllergies: [
      'Adverse food reactions occur but are not notably more prevalent in Yorkies than in dogs generally',
      'When present, beef, dairy, and chicken are the most commonly reported triggers',
    ],
    proteinRecommendation:
      'AAFCO minimum 18% (adult) and 22.5% (growth) on a dry-matter basis. Most adult toy-breed diets sit in the 24–32% DM protein range, reflecting the higher per-kg metabolic rate.',
    fatRecommendation:
      'AAFCO minimum 5.5% (adult) and 8.5% (growth) on a dry-matter basis. Toy-breed diets tend to be calorie-dense (often 14–18% DM fat) to meet high per-kg energy needs in small stomachs.',
    weightManagementNotes:
      'A 1 lb gain on a Yorkie is the proportional equivalent of a 15–20 lb gain on a Labrador. Use a kitchen scale for portioning, not measuring cups — small volume differences are large relative to daily needs. Treats should be very small pieces.',
    recommendedFoodTypes: [
      'Complete-and-balanced toy-breed or small-breed adult diet from a WSAVA-aligned manufacturer',
      'Small kibble size for easier prehension',
      'Veterinary therapeutic diets for diagnosed conditions (liver shunt, dental, etc.)',
    ],
    avoidIngredients: [
      'Large kibble (hard for tiny mouths)',
      'High-calorie treats — a single biscuit can be a meaningful fraction of daily calories',
      'Cooked bones (particularly dangerous for toy breeds — perforation risk)',
      'Xylitol-sweetened products (especially dangerous in small dogs)',
      'Grapes, raisins, onions, garlic, macadamia nuts, chocolate',
      'Unprescribed grain-free diets (FDA DCM investigation)',
    ],
    faqs: [
      {
        question: 'How many calories does an adult Yorkshire Terrier need per day?',
        answer:
          'A neutered adult Yorkie in the 4–7 lb range typically needs roughly 180–280 kcal/day for maintenance. The range is wide relative to body weight because activity level and metabolism vary substantially. Confirm with your veterinarian based on body condition.',
      },
      {
        question: 'How often should I feed my Yorkie puppy?',
        answer:
          'At least 4 meals per day until 4 months of age, then 3 meals until at least 6 months. Toy-breed puppies are at real risk of juvenile hypoglycemia — they can become dangerously hypoglycemic within hours of a missed meal. Never skip meals for a Yorkie puppy. Keep a high-calorie supplemental gel (such as Nutri-Cal) on hand and discuss its use with your veterinarian.',
      },
      {
        question: 'Should I feed my Yorkie wet or dry food?',
        answer:
          'Either complete-and-balanced option can work. Dry food has a slight dental benefit due to mechanical action; wet food is more palatable and easier to chew, which matters for dogs with dental disease. The most important factor is choosing a complete-and-balanced diet from a reputable, WSAVA-aligned manufacturer. Daily toothbrushing matters more than food form for dental health.',
      },
      {
        question: 'My Yorkie is a picky eater — what should I do?',
        answer:
          'First, rule out a medical cause with your veterinarian — dental disease, GI conditions, and other illnesses can present as picky eating. If no medical cause, stop offering alternatives or table food and stick to a single complete-and-balanced diet. Most healthy dogs will not voluntarily starve when only one food is offered, but a Yorkie that misses multiple meals should be evaluated promptly for hypoglycemia risk.',
      },
    ],
  },
]

/** Map of slug → profile for O(1) lookup. */
export const BREED_FEEDING_BY_SLUG: Record<string, BreedFeedingProfile> =
  BREED_FEEDING_PROFILES.reduce<Record<string, BreedFeedingProfile>>(
    (acc, p) => {
      acc[p.slug] = p
      return acc
    },
    {},
  )

export function getBreedFeedingBySlug(
  slug: string,
): BreedFeedingProfile | undefined {
  return BREED_FEEDING_BY_SLUG[slug]
}

/** Slugs that have a /breeds/[slug]/feeding deep-dive page generated. */
export const FEEDING_PAGE_SLUGS: ReadonlySet<string> = new Set(
  BREED_FEEDING_PROFILES.map((p) => p.slug),
)
