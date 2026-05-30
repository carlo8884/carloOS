/**
 * Condition-specific therapeutic / prescription diet catalog — PetFood.com.
 *
 * One row per condition-specific deep-dive page rendered by
 * /conditions/[slug]/page.tsx. The catalog is veterinary-reference material
 * — it summarises when and why a prescription or therapeutic diet is
 * typically indicated, what the formulation does at a high level, what the
 * label-reader should look for, and what the brand examples are. It does
 * not declare any brand "best" and it does not provide individualised
 * dosing or feeding amounts.
 *
 * EDITORIAL RULES (per QC-STANDARDS §1 and the petfood-com data catalogs):
 *   1. Therapeutic / prescription veterinary diets are not over-the-counter
 *      sole-diet substitutes. Every page reiterates that the treating
 *      veterinarian sets the diet plan for a pet with a diagnosed
 *      condition. We never tell an owner to switch diets without a vet.
 *   2. We never give specific nutrient quantities per kilogram of body
 *      weight. Nutrient targets are described as qualitative ranges
 *      (low / moderate / high, or AAFCO-relative) and sourced from
 *      published references — AAFCO 2025 Chapter 6, NRC 2006, WSAVA
 *      Global Nutrition Committee, ACVIM Internal Medicine consensus
 *      statements, AAHA nutrition guidelines, and FDA-CVM.
 *   3. We never call any condition "easily managed." Chronic conditions
 *      are managed in conjunction with the treating DVM and often with
 *      a board-certified veterinary internist or nutritionist.
 *   4. Brand examples are real product lines that the manufacturer
 *      publicly labels against the indication. We describe what each
 *      product line discloses, never that one brand is "best."
 *   5. The "gold-standard" tag on a brand entry refers to the role the
 *      product line plays in the published veterinary literature
 *      (long-running clinical evidence, WSAVA-aligned manufacturer,
 *      AAFCO-substantiated label), not a PetFood.com ranking judgement.
 */

export type BrandRole = 'gold-standard' | 'reasonable-alternative'

export interface NutrientTarget {
  nutrient: string
  range: string
  why: string
}

export interface ConditionFAQ {
  question: string
  answer: string
}

export interface ConditionCitation {
  name: string
  url: string
}

export interface ConditionDiet {
  slug: string
  conditionName: string
  /** 1-2 sentence summary used on the hub card and as the page subtitle */
  summary: string
  /** Severity icon hint for the hub page — keep token, not emoji */
  severity: 'chronic' | 'urgent' | 'manage-with-vet'
  /** The mechanism / formulation summary */
  whatTheDietDoes: string[]
  /** Qualitative nutrient targets — no per-kg-bodyweight dosing */
  nutrientTargets: NutrientTarget[]
  /** Common veterinary indications and timing — when the conversation starts */
  whenItsNeeded: string[]
  /** The Rx (veterinary therapeutic) vs OTC (retail) distinction */
  rxVsOtcDifference: string
  /** Real product lines — describes role, not ranking */
  brandExamplesByCondition: Array<{
    brand: string
    productLine: string
    role: BrandRole
  }>
  /** Practical transition guidance — generic, not feeding-amount-specific */
  how_to_transition: string[]
  /** Foods, supplements, or human-foods to avoid */
  whatToAvoid: string[]
  /** Practical cost expectation — descriptive only */
  typicalCost: {
    perMonth: string
    vsRegularFood: string
  }
  vetConsultRequired: boolean
  faqs: ConditionFAQ[]
  citedSources: ConditionCitation[]
}

export const ConditionDiets: ConditionDiet[] = [
  // ─── FOOD ALLERGIES & INTOLERANCES ─────────────────────────────────────
  {
    slug: 'food-allergies-and-intolerances',
    conditionName: 'Food Allergies & Intolerances',
    summary:
      'Limited-ingredient, hydrolyzed-protein, and novel-protein elimination diets are the diagnostic and management approach for suspected cutaneous adverse food reactions in dogs and cats.',
    severity: 'manage-with-vet',
    whatTheDietDoes: [
      'A strict elimination diet is the diagnostic gold standard for cutaneous adverse food reaction (CAFR). Hydrolyzed-protein diets reduce the size of the protein fragments below the immunoglobulin-recognition threshold so the immune system does not mount a reaction to the dietary protein.',
      'Novel-protein diets use a single intact protein source the patient has not previously encountered (rabbit, venison, kangaroo, alligator) so any pre-existing immune memory is not activated.',
      'Limited-ingredient diets reduce the total number of distinct protein and carbohydrate sources, which makes it easier to identify and avoid the offending ingredient if a CAFR is confirmed in a food trial.',
      'An 8-12 week strict elimination food trial — feeding only the chosen diet and water, no treats, no flavoured chews, no flavoured medications — is the diagnostic procedure described in the WSAVA dermatology and ACVIM internal medicine literature.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Protein source',
        range: 'Hydrolyzed or single novel intact protein',
        why: 'Hydrolysis reduces fragment size below typical immunoglobulin recognition; novel proteins avoid pre-existing immune memory. Both are formulation strategies, not nutrient minima.',
      },
      {
        nutrient: 'Carbohydrate source',
        range: 'Single source preferred',
        why: 'Carbohydrate-source protein contamination (e.g., wheat gluten) is a non-trivial confounder; single-source carbohydrate simplifies trial interpretation.',
      },
      {
        nutrient: 'AAFCO completeness',
        range: 'Complete and balanced for the relevant life stage',
        why: 'Therapeutic elimination diets must still meet the AAFCO 2025 Chapter 6 nutrient profile for the pet\'s life stage; veterinary therapeutic formulations are designed to meet this baseline.',
      },
      {
        nutrient: 'Omega-3 fatty acids (EPA/DHA)',
        range: 'Often supplemented at modestly higher inclusion',
        why: 'EPA/DHA support skin-barrier function; many dermatology-marketed therapeutic diets carry modestly higher omega-3 inclusion than standard maintenance.',
      },
    ],
    whenItsNeeded: [
      'Chronic non-seasonal pruritus (itching) in a dog or cat where flea, parasite, and environmental allergy work-up has been completed and CAFR is on the differential list.',
      'Recurrent otitis externa (ear infections) or recurrent superficial pyoderma that has not resolved with environmental allergy management.',
      'Chronic gastrointestinal signs (intermittent vomiting, diarrhoea, soft stool) where dietary trigger is on the differential list, often overlapping with the gastrointestinal-sensitivity catalog entry.',
      'Confirmed CAFR diagnosis after a positive elimination trial and provocative re-challenge — the management diet is the trial diet long-term.',
    ],
    rxVsOtcDifference:
      'Veterinary therapeutic hydrolyzed diets (Hill\'s Prescription Diet z/d, Royal Canin Hypoallergenic / Ultamino, Purina HA, Blue Buffalo Natural Veterinary Diet HF) carry pharmaceutical-grade ingredient sourcing, formal hydrolysis validation, and are sold through veterinary clinics or with a veterinary authorisation. Retail "limited-ingredient" diets do not undergo the same ingredient-cross-contamination control; published studies have documented retail limited-ingredient diets containing undeclared proteins at levels relevant for sensitised patients. For diagnostic food trials, the veterinary therapeutic product is the standard of care.',
    brandExamplesByCondition: [
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet z/d (hydrolyzed) and Derm Complete",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Hypoallergenic HP, Ultamino, and selected protein lines (rabbit, venison)',
        role: 'gold-standard',
      },
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets HA Hydrolyzed',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet HF Hydrolyzed for Food Intolerance',
        role: 'reasonable-alternative',
      },
      {
        brand: 'Rayne Clinical Nutrition',
        productLine: 'Rayne Kangaroo-MAINT and Rabbit-MAINT novel-protein diets',
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'Transition over 7-10 days from the current diet to the elimination diet, increasing the new-diet proportion gradually to reduce gastrointestinal upset.',
      'For the 8-12 week trial period, the elimination diet is the only food source. No treats, no table scraps, no flavoured medications, no flavoured dental chews — anything that delivers protein outside the trial diet invalidates the trial.',
      'Provide one labelled water source and avoid any flavoured water or broth additions.',
      'Track itching, ear-infection frequency, and gastrointestinal signs in a weekly journal — this is the dataset the treating veterinarian uses to interpret the trial.',
    ],
    whatToAvoid: [
      'Flavoured oral medications (heartworm preventatives, NSAID chews, flavoured antibiotics) during the trial period. Ask the treating veterinarian for unflavoured alternatives.',
      'Dental chews, rawhides, and bully-stick-style treats — all introduce non-trial proteins.',
      'Multi-pet households where the trial pet may scavenge another pet\'s food. Separate feeding and clean shared bowls between meals.',
      'Switching between elimination-diet brands during the trial — the trial is brand-and-formulation-specific; switching restarts the diagnostic window.',
    ],
    typicalCost: {
      perMonth: 'Roughly $90-$180 per month for a medium-size dog on a veterinary therapeutic hydrolyzed diet; higher for novel-protein formulations.',
      vsRegularFood: 'Typically 2-4x the cost of a standard adult-maintenance retail formula on a per-day basis.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'Can I use a retail "limited-ingredient" diet for my dog\'s food trial?',
        answer:
          'The published veterinary dermatology literature (WSAVA dermatology references, JAVMA studies on retail limited-ingredient diet contamination) finds that retail limited-ingredient diets carry a non-trivial rate of undeclared protein contamination, which can invalidate a diagnostic food trial. For a diagnostic trial in a suspected CAFR case, a veterinary therapeutic hydrolyzed or novel-protein diet selected with the treating veterinarian is the standard of care.',
      },
      {
        question: 'How long does an elimination food trial take?',
        answer:
          'The WSAVA dermatology consensus is 8-12 weeks of strict diet, followed by a provocation re-challenge with the previous diet. Improvement during the elimination phase and recurrence on re-challenge confirms the diagnosis. The treating veterinarian sets the trial length for the individual patient.',
      },
      {
        question: 'Are grain-free diets the same as hypoallergenic diets?',
        answer:
          'No. "Grain-free" describes a carbohydrate-source formulation choice (no corn, wheat, rice, barley); it does not address protein allergens, which are the more common dietary trigger in dogs and cats. The FDA Center for Veterinary Medicine has additionally raised dilated cardiomyopathy questions about pulse-heavy grain-free formulations in dogs; see /ingredients/grain-free-dcm-risk for the full record.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
      {
        name: 'Olivry T, Mueller RS et al. Critically appraised topic on adverse food reactions of companion animals. BMC Veterinary Research (multiple parts) — dermatology elimination-diet methodology.',
        url: 'https://bmcvetres.biomedcentral.com/',
      },
      {
        name: 'ACVIM consensus statements — Internal Medicine Consensus Statements (American College of Veterinary Internal Medicine).',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
      {
        name: 'FDA Center for Veterinary Medicine — Animal Food and Feeds',
        url: 'https://www.fda.gov/animal-veterinary',
      },
    ],
  },

  // ─── KIDNEY (RENAL) DISEASE ────────────────────────────────────────────
  {
    slug: 'kidney-disease-renal-diets',
    conditionName: 'Kidney Disease (Renal Diets)',
    summary:
      'Therapeutic renal diets restrict phosphorus, moderate high-quality protein, and reduce sodium to slow progression of chronic kidney disease (CKD) in dogs and cats — one of the most clinically-evidence-based dietary interventions in small-animal medicine.',
    severity: 'chronic',
    whatTheDietDoes: [
      'Phosphorus restriction is the single load-bearing intervention. The IRIS (International Renal Interest Society) staging framework and published feline CKD trials show that dietary phosphorus restriction slows the progression of chronic kidney disease and improves survival.',
      'Protein is moderated, not eliminated. The historical "low-protein renal diet" position has been refined: current ACVIM and ISFM consensus is high-biological-value protein at controlled inclusion, not protein restriction at the cost of lean body mass.',
      'Sodium reduction supports blood-pressure management in CKD patients, who are at high risk of systemic hypertension.',
      'Buffering agents (potassium citrate) and B-vitamin supplementation address common CKD comorbidities — metabolic acidosis and renal-loss water-soluble-vitamin depletion.',
      'Omega-3 fatty acid (EPA/DHA) supplementation is consistently included; the renal-disease literature supports a renal-protective effect at therapeutic-diet inclusion levels.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Phosphorus',
        range: 'Restricted — substantially below AAFCO maintenance minima for the same life stage',
        why: 'Phosphorus restriction is the single most clinically-evidence-based dietary intervention for CKD progression (Elliott et al; ISFM feline CKD consensus).',
      },
      {
        nutrient: 'Protein',
        range: 'Moderate, high-biological-value',
        why: 'Current ACVIM consensus favours quality and biological value over absolute restriction; the goal is to reduce uremic load without driving sarcopenia.',
      },
      {
        nutrient: 'Sodium',
        range: 'Restricted',
        why: 'CKD patients are at high risk of systemic hypertension; sodium reduction supports blood pressure management within the diet plan.',
      },
      {
        nutrient: 'Omega-3 fatty acids (EPA/DHA)',
        range: 'Elevated relative to maintenance',
        why: 'Supports renal blood flow and inflammation modulation; consistent inclusion across therapeutic renal product lines.',
      },
      {
        nutrient: 'Potassium',
        range: 'Supplemented (especially in feline formulations)',
        why: 'Hypokalemia is a documented comorbidity of feline CKD; therapeutic feline renal diets carry supplemental potassium.',
      },
      {
        nutrient: 'B-vitamins',
        range: 'Supplemented',
        why: 'Renal loss of water-soluble vitamins is documented; supplementation addresses this deficit.',
      },
    ],
    whenItsNeeded: [
      'Confirmed chronic kidney disease at IRIS stage 2 or above (and many veterinary internists initiate therapeutic-diet conversation at late stage 1 with progressive markers).',
      'Persistently elevated SDMA (symmetric dimethylarginine) with concurrent isosthenuria on urinalysis, suggesting early-stage CKD before classic azotemia.',
      'Confirmed hyperphosphatemia in a CKD patient — phosphorus-restricted diet is the first-line intervention before adding a phosphate binder.',
      'CKD patients with concurrent systemic hypertension where sodium reduction is part of the management plan.',
    ],
    rxVsOtcDifference:
      'Therapeutic renal diets (Hill\'s Prescription Diet k/d, Royal Canin Veterinary Diet Renal, Purina Pro Plan Veterinary Diets NF Kidney Function, Blue Buffalo Natural Veterinary Diet KS Kidney Support) require a veterinary authorisation and are formulated to specifications below the AAFCO maintenance phosphorus minimum — intentionally. They are not appropriate as the sole diet for a pet without diagnosed CKD because the same restriction that benefits a CKD patient would create a deficiency in a healthy animal at long-term feeding. Over-the-counter "senior" or "kidney-support" retail formulas do not carry the same regulatory restriction profile and are not equivalent for clinical management.',
    brandExamplesByCondition: [
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet k/d (Kidney Care) — dog and cat formulations",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Veterinary Diet Renal Support (multiple palatability variants)',
        role: 'gold-standard',
      },
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets NF Kidney Function (Early Care and Advanced Care)',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet KS Kidney Support',
        role: 'reasonable-alternative',
      },
      {
        brand: 'Rayne Clinical Nutrition',
        productLine: 'Rayne Adult-MAINT (lower-phosphorus formulations)',
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'Cats in particular are food-neophobic and CKD-affected cats often have reduced appetite — transition over 2-4 weeks (rather than the usual 7-10 days), mixing the new diet in increasing proportions and offering both wet and dry formats.',
      'For inappetent CKD cats, the treating veterinarian may recommend warming the food, offering small frequent meals, or compounding palatability aids before switching to a therapeutic renal diet.',
      'Re-check blood phosphorus, BUN, creatinine, SDMA, and urine specific gravity at the cadence the treating veterinarian recommends (typically 2-4 weeks after a major diet change, then per IRIS stage).',
      'Track body condition score and muscle condition score over time — sarcopenia is a CKD-progression marker, and protein adequacy of the chosen renal diet matters.',
    ],
    whatToAvoid: [
      'High-phosphorus treats and human-food scraps (cheese, dairy, organ meats, processed meats). A phosphorus-restricted diet is undermined by phosphorus-rich treats.',
      'Sodium-rich treats (jerky, deli meats, salted snacks) — these counteract the sodium-restriction component of the therapeutic diet.',
      'Cat treats marketed as "kidney support" that are not from a veterinary therapeutic line — palatability-driven retail "kidney" treats often do not carry the same phosphorus restriction as the prescription food they accompany.',
      'Adding calcium or phosphorus supplements without veterinary input — this works directly against the dietary intervention.',
    ],
    typicalCost: {
      perMonth: 'Roughly $80-$200 per month for a cat or small-to-medium dog on a therapeutic renal diet; CKD lifetime management often runs $300-$800 per month including diagnostics, fluids, and medications.',
      vsRegularFood: 'Therapeutic renal kibble is typically 2-3x the per-day cost of a standard adult-maintenance formula; per-can wet costs can run higher.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'Can I switch my CKD cat to a renal diet without seeing the vet?',
        answer:
          'No — and this is one of the situations where self-prescription is most consequential. Therapeutic renal diets are formulated to specifications below the AAFCO maintenance phosphorus minimum, which is appropriate only for a patient with diagnosed CKD. The treating veterinarian needs to confirm the IRIS stage, screen for concurrent disease (hyperthyroidism in older cats, urinary tract infection, hypertension), and set the diet and monitoring plan.',
      },
      {
        question: 'Is wet or dry better for a CKD cat?',
        answer:
          'Wet food contributes substantially more dietary water than dry, which is consistently recommended for CKD cats because of impaired urine-concentrating ability and dehydration risk. Many veterinary internists recommend wet, or wet plus dry, for CKD cats; the chosen format should still be a veterinary therapeutic renal diet — palatability and water content are independent considerations.',
      },
      {
        question: 'Do dogs need protein restriction for kidney disease too?',
        answer:
          'Current ACVIM consensus for canine CKD favours phosphorus restriction and moderated high-biological-value protein over aggressive protein restriction. The treating veterinarian sets the diet based on IRIS stage, body condition, and concurrent conditions.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'International Renal Interest Society (IRIS) — staging and treatment guidelines for chronic kidney disease in dogs and cats.',
        url: 'http://www.iris-kidney.com/guidelines/',
      },
      {
        name: 'Sparkes AH et al. ISFM Consensus Guidelines on the Diagnosis and Management of Feline Chronic Kidney Disease. Journal of Feline Medicine and Surgery (2016).',
        url: 'https://journals.sagepub.com/home/jfm',
      },
      {
        name: 'ACVIM Consensus Statements — Internal Medicine (American College of Veterinary Internal Medicine).',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food.',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
      {
        name: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats.',
        url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/',
      },
    ],
  },

  // ─── WEIGHT MANAGEMENT ─────────────────────────────────────────────────
  {
    slug: 'weight-management',
    conditionName: 'Weight Management',
    summary:
      'Therapeutic weight-loss and weight-maintenance diets combine reduced energy density, increased dietary fiber for satiety, and protein preservation to support sustained weight loss in dogs and cats under veterinary supervision.',
    severity: 'chronic',
    whatTheDietDoes: [
      'Energy density (kcal per cup or can) is reduced relative to standard maintenance, which allows the same feeding volume to deliver fewer calories — practical compliance is typically better than feeding less of a standard diet.',
      'Soluble and insoluble fiber are increased to support satiety. Hill\'s Prescription Diet Metabolic and Royal Canin Satiety Support are notable for their fiber-driven satiety strategies; the Royal Canin Satiety formulation in particular has published satiety-marker data underpinning its design.',
      'High-quality protein inclusion is maintained or moderately elevated to preserve lean body mass during caloric restriction — sarcopenia during weight loss is a documented risk in older pets and a relevant nutritional design constraint.',
      'L-carnitine is commonly supplemented in therapeutic weight-loss formulations; the canine and feline obesity literature supports a role in fat-metabolism efficiency during caloric restriction.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Energy density',
        range: 'Reduced vs maintenance baseline',
        why: 'Lower kcal/cup supports portion-controlled feeding without leaving the pet hungry; therapeutic weight-loss formulations are explicitly engineered for this.',
      },
      {
        nutrient: 'Crude protein',
        range: 'Maintained or moderately elevated vs maintenance',
        why: 'Protein preservation during weight loss reduces lean-body-mass loss; AAHA and WSAVA nutrition guidelines emphasise this.',
      },
      {
        nutrient: 'Crude fiber',
        range: 'Elevated (often substantially)',
        why: 'Fiber promotes satiety and slows gastric emptying; Royal Canin Satiety Support is the canonical example of a satiety-targeted formulation.',
      },
      {
        nutrient: 'L-carnitine',
        range: 'Supplemented',
        why: 'Supports fatty-acid transport into mitochondria for oxidation; consistent inclusion across therapeutic weight-loss product lines.',
      },
      {
        nutrient: 'Omega-3 fatty acids (EPA/DHA)',
        range: 'Modestly elevated',
        why: 'Supports joint and skin-barrier health in overweight patients with concurrent osteoarthritis; consistent inclusion.',
      },
    ],
    whenItsNeeded: [
      'Confirmed overweight or obese body-condition score (BCS 6 or above on the WSAVA 9-point scale) at a wellness exam.',
      'Concurrent diagnosed conditions where weight loss is a primary treatment lever — canine osteoarthritis, feline diabetes mellitus, feline lower urinary tract disease.',
      'Pre-surgical weight loss recommended by the treating veterinarian to reduce anesthetic risk or improve orthopedic surgical outcome.',
      'Failed retail-formula weight-loss attempts where compliance with feeding-amount restriction has not been achievable.',
    ],
    rxVsOtcDifference:
      'Veterinary therapeutic weight-loss diets (Hill\'s Prescription Diet Metabolic and r/d, Royal Canin Veterinary Diet Satiety Support, Purina Pro Plan Veterinary Diets OM Overweight Management) carry the formulation engineering — reduced energy density, satiety-targeted fiber, protein preservation, L-carnitine — at therapeutic inclusion levels. Retail "weight management" or "light" formulas typically reduce energy density modestly but do not match the satiety-targeted fiber or the published weight-loss outcome data. For obese patients with concurrent disease, the veterinary therapeutic product paired with the treating veterinarian\'s feeding-amount plan is the standard approach.',
    brandExamplesByCondition: [
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet Metabolic and r/d Weight Reduction",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Veterinary Diet Satiety Support Weight Management',
        role: 'gold-standard',
      },
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets OM Overweight Management',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet W+M Weight Management + Mobility Support',
        role: 'reasonable-alternative',
      },
      {
        brand: "Hill's Science Diet",
        productLine: "Hill's Science Diet Perfect Weight (retail line)",
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'Transition over 7-10 days from the current diet to the therapeutic weight-loss diet, mixing the new diet in increasing proportions.',
      'Feed measured amounts at scheduled meals — free-feeding undermines the therapeutic intervention.',
      'Re-weigh and record body-condition score every 2-4 weeks. The target sustained weight-loss rate in canine and feline obesity management is around 1-2% of body weight per week; faster loss in cats carries hepatic lipidosis risk and is avoided.',
      'Adjust the feeding amount with the treating veterinarian as the patient loses weight — the appropriate feeding amount changes as the goal weight is approached.',
    ],
    whatToAvoid: [
      'Treats, table scraps, and high-calorie chews that displace the controlled-calorie therapeutic feeding plan. If treats are necessary for training compliance, allocate them within the daily calorie budget and prefer the same-brand therapeutic treat line where available.',
      'Aggressive caloric restriction in cats. Cats are at risk of hepatic lipidosis during rapid weight loss; the treating veterinarian sets the rate.',
      'Substituting a "grain-free" or "lite" retail formula for a therapeutic weight-loss diet without veterinary input — the formulation engineering is materially different.',
      'Skipping body-condition-score re-checks. Adjustment cadence (every 2-4 weeks for active weight loss, every 4-8 weeks once at target weight) is the operational core of the intervention.',
    ],
    typicalCost: {
      perMonth: 'Roughly $70-$160 per month for a medium-size dog on a therapeutic weight-loss diet; the long-term cost is typically offset by reduced osteoarthritis-management and diabetic-care costs.',
      vsRegularFood: 'Therapeutic weight-loss kibble is typically 1.5-2.5x the per-day cost of a standard adult-maintenance formula; the calorie-density reduction means the per-meal volume may be larger than the prior diet.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'Can\'t I just feed less of my dog\'s normal food?',
        answer:
          'Possible in principle, but practical compliance is the issue. Feeding 70-80% of a standard maintenance diet for sustained periods leaves many dogs hungry and many owners drift back toward the original feeding amount. Therapeutic weight-loss diets are explicitly engineered around lower energy density, satiety-targeted fiber, and protein preservation so the pet does not experience the same hunger response at the lower calorie target.',
      },
      {
        question: 'How fast should my pet lose weight?',
        answer:
          'The WSAVA and AAHA nutrition guidelines target around 1-2% of body weight per week as a sustainable loss rate in dogs. Cats are managed more cautiously because of hepatic lipidosis risk during rapid weight loss; the treating veterinarian sets the rate and re-check cadence for the individual patient.',
      },
      {
        question: 'My dog has arthritis and is overweight — which do I treat first?',
        answer:
          'Concurrent management. Weight loss is one of the highest-yield interventions for canine osteoarthritis pain; some weight-management therapeutic diets (Blue Buffalo W+M, Hill\'s Metabolic + Mobility) are formulated explicitly for this overlap. The treating veterinarian sets the pain-control plan in parallel.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'AAHA Weight Management Guidelines for Dogs and Cats.',
        url: 'https://www.aaha.org/aaha-guidelines/weight-management/',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Body Condition Score and Muscle Condition Score tools.',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
      {
        name: 'Laflamme DP. Companion Animals Symposium: Obesity in dogs and cats: What is wrong with being fat? Journal of Animal Science.',
        url: 'https://academic.oup.com/jas',
      },
      {
        name: 'ACVIM consensus and AAHA preventive care guidelines — body condition scoring and nutritional assessment.',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
    ],
  },

  // ─── DIABETES ──────────────────────────────────────────────────────────
  {
    slug: 'diabetes',
    conditionName: 'Diabetes Mellitus',
    summary:
      'Therapeutic diabetic diets use low-glycemic-load carbohydrate sources, complex carbohydrates with elevated fiber, and high protein (especially in cats) to support glycemic control alongside insulin therapy in dogs and cats.',
    severity: 'chronic',
    whatTheDietDoes: [
      'Glycemic-control strategy differs by species. In cats, the AAHA and ISFM consensus favours a high-protein, low-carbohydrate diet — cats are obligate carnivores with limited carbohydrate-handling capacity, and lower dietary carbohydrate often reduces insulin requirement and supports diabetic remission in some cases.',
      'In dogs, the published canine diabetes literature favours moderate complex-carbohydrate inclusion with elevated soluble and insoluble fiber. Fiber slows post-prandial glucose absorption and reduces peak insulin demand.',
      'Consistent meal composition and meal timing are themselves part of the intervention. Diabetic patients on insulin therapy benefit from predictable post-prandial glucose curves; the diet supports this together with the insulin protocol.',
      'Caloric control supports concurrent weight management — many diabetic dogs and cats are diagnosed with concurrent overweight or obese body-condition scores, and weight loss is itself a primary glycemic intervention.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Carbohydrate (cats)',
        range: 'Low',
        why: 'AAHA/ISFM feline diabetes consensus favours low-carbohydrate diets; lower carbohydrate often reduces exogenous insulin requirement and supports remission in some cases.',
      },
      {
        nutrient: 'Carbohydrate (dogs)',
        range: 'Moderate, complex sources',
        why: 'Complex carbohydrates with fiber moderate post-prandial glucose; the canine diabetes literature favours this over carbohydrate restriction for most patients.',
      },
      {
        nutrient: 'Crude fiber',
        range: 'Elevated (especially in canine diabetic diets)',
        why: 'Soluble and insoluble fiber slow gastric emptying and post-prandial glucose absorption; reduces peak insulin demand.',
      },
      {
        nutrient: 'Crude protein',
        range: 'High (especially in feline diabetic diets)',
        why: 'High protein supports lean body mass and aligns with the obligate-carnivore feline metabolic profile; published feline diabetes work supports this approach.',
      },
      {
        nutrient: 'AAFCO completeness',
        range: 'Complete and balanced for adult maintenance',
        why: 'Therapeutic diabetic diets meet the AAFCO 2025 Chapter 6 adult-maintenance profile; the glycemic-control adjustments sit on top of that baseline.',
      },
    ],
    whenItsNeeded: [
      'Confirmed diagnosis of diabetes mellitus in a dog or cat — persistent hyperglycemia, glycosuria, and clinical signs (polyuria, polydipsia, weight loss, polyphagia).',
      'Concurrent obesity in a diabetic patient — weight loss combined with a therapeutic diabetic diet is a primary glycemic intervention.',
      'Diabetic remission attempts in newly-diagnosed cats — the published feline diabetes literature describes higher remission rates with low-carbohydrate diets paired with early-and-tight glycemic control.',
      'Diabetic ketoacidosis recovery and stabilisation — once the patient is eating, transition to a therapeutic diabetic diet supports ongoing glycemic stability.',
    ],
    rxVsOtcDifference:
      'Veterinary therapeutic diabetic diets (Hill\'s Prescription Diet w/d Multi-Benefit, Royal Canin Veterinary Diet Glycobalance, Purina Pro Plan Veterinary Diets DM Dietetic Management) carry the formulation engineering — species-appropriate carbohydrate profile, elevated fiber for canine formulations, elevated protein for feline formulations — at therapeutic inclusion levels. Retail "diabetic-friendly" formulations are not equivalent; the published clinical-trial data for canine and feline diabetes management uses the veterinary therapeutic lines. For diabetic patients on insulin, the diet is part of the medical management plan and is set by the treating veterinarian.',
    brandExamplesByCondition: [
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets DM Dietetic Management (feline canned and dry; the canonical low-carbohydrate feline diabetic diet)',
        role: 'gold-standard',
      },
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet w/d Multi-Benefit and m/d (feline diabetes management)",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Veterinary Diet Glycobalance (dog and cat)',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet W+M Weight Management + Mobility Support (for concurrent obesity in diabetic patients)',
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'Transition over 7-10 days from the current diet to the therapeutic diabetic diet, mixing in increasing proportions to reduce gastrointestinal upset.',
      'Coordinate the diet transition with the insulin protocol. Diabetic patients on insulin therapy benefit from consistent meal timing and composition; abrupt diet changes can perturb glycemic control and require insulin dose adjustment.',
      'Re-check fructosamine or glycated haemoglobin (HbA1c equivalent in dogs and cats) at the cadence the treating veterinarian sets — typically 2-3 weeks after a major diet or insulin change.',
      'Track water intake, urination frequency, body-condition score, and appetite — these owner-side observations inform the treating veterinarian between recheck appointments.',
    ],
    whatToAvoid: [
      'High-carbohydrate treats and snacks — many retail dental chews, semi-moist treats, and human-food scraps deliver post-prandial glucose excursions that work against the therapeutic diet.',
      'Free-feeding diabetic patients. Consistent scheduled meals are part of the intervention; ad libitum access perturbs glycemic control and insulin timing.',
      'Sudden diet switches without veterinary input. Insulin doses are calibrated to the current diet; a diet change without an insulin recalibration is a known cause of hypoglycemia.',
      'Semi-moist dry foods (the chewy "kibble" formats). The propylene-glycol and humectant package in semi-moist formulations is associated with poorer glycemic profiles in diabetic patients.',
    ],
    typicalCost: {
      perMonth: 'Roughly $80-$170 per month for a medium-size dog or cat on a therapeutic diabetic diet; ongoing diabetic management (insulin, syringes, glucose monitoring, recheck appointments) typically runs an additional $100-$300+ per month.',
      vsRegularFood: 'Therapeutic diabetic diets are typically 1.5-3x the per-day cost of a standard adult-maintenance formula.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'Will diet alone control my pet\'s diabetes?',
        answer:
          'In dogs, no — canine diabetes mellitus is essentially always insulin-dependent and diet supports the insulin protocol rather than replacing it. In some newly-diagnosed cats, particularly when caught early and paired with weight loss and tight glycemic control, diabetic remission off insulin is achievable; the published feline diabetes literature describes this. The treating veterinarian sets the management plan.',
      },
      {
        question: 'My cat is on a low-carb diet — can I still give cat treats?',
        answer:
          'Most retail cat treats are carbohydrate-heavier than the therapeutic low-carbohydrate diabetic feline diet, and they undermine the dietary intervention. If treats are necessary, options include freeze-dried protein-only treats or pieces of the cat\'s therapeutic diet itself; discuss with the treating veterinarian.',
      },
      {
        question: 'How is my dog\'s diabetic diet different from my cat\'s?',
        answer:
          'Canine diabetic diets typically use moderate complex carbohydrate plus elevated fiber to moderate post-prandial glucose. Feline diabetic diets typically use low carbohydrate and high protein, reflecting the obligate-carnivore feline metabolic profile and the published feline diabetes evidence. The species-specific therapeutic product lines reflect this.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'AAHA Diabetes Management Guidelines for Dogs and Cats.',
        url: 'https://www.aaha.org/aaha-guidelines/diabetes-management/',
      },
      {
        name: 'Behrend E et al. 2018 AAHA Diabetes Management Guidelines.',
        url: 'https://www.aaha.org/',
      },
      {
        name: 'ACVIM Consensus Statements — Internal Medicine.',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
      {
        name: 'ISFM Consensus Guidelines on the Practical Management of Diabetes Mellitus in Cats. Journal of Feline Medicine and Surgery.',
        url: 'https://journals.sagepub.com/home/jfm',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food.',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
    ],
  },

  // ─── URINARY STONES / FLUTD ────────────────────────────────────────────
  {
    slug: 'urinary-stones',
    conditionName: 'Urinary Stones & FLUTD',
    summary:
      'Therapeutic urinary diets target struvite dissolution, calcium oxalate prevention, and feline lower urinary tract disease (FLUTD) management through adjusted urine pH, controlled mineral inclusion, and increased dietary water.',
    severity: 'urgent',
    whatTheDietDoes: [
      'Struvite (magnesium ammonium phosphate) uroliths are dissolvable through dietary urine acidification combined with controlled magnesium, phosphorus, and ammonium intake. Therapeutic struvite-dissolution diets are formulated to produce an undersaturated urine for struvite.',
      'Calcium oxalate uroliths are not dissolvable; the dietary strategy is recurrence prevention through increased water intake (often via wet-food preference), controlled calcium and oxalate inclusion, and a mildly alkalinising target urine pH (the opposite of the struvite strategy).',
      'Feline lower urinary tract disease (FLUTD), including feline idiopathic cystitis (FIC), is managed primarily through environmental enrichment and stress reduction — but dietary water intake is a documented modifier, and therapeutic urinary diets often emphasise wet-food formulations or high-moisture inclusion.',
      'Urinary diets carry adjusted sodium inclusion. Mild sodium elevation supports diuresis and dilutes urine solute concentration; this is balanced against the cardiovascular and renal considerations in older patients.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Urine pH target',
        range: 'Acidifying for struvite; mildly alkalinising for calcium oxalate',
        why: 'Struvite solubility increases at lower pH; calcium oxalate forms more readily at acidic pH. The mineral and pH targets are condition-specific and opposing.',
      },
      {
        nutrient: 'Magnesium',
        range: 'Restricted (struvite formulations)',
        why: 'Magnesium is a struvite constituent; restriction supports undersaturation in the urine for struvite-prone patients.',
      },
      {
        nutrient: 'Calcium and oxalate precursors',
        range: 'Controlled (calcium oxalate formulations)',
        why: 'Reducing dietary calcium and oxalate-precursor amino acids (e.g., excess vitamin C, excess vitamin D) supports calcium oxalate recurrence prevention.',
      },
      {
        nutrient: 'Sodium',
        range: 'Mildly elevated',
        why: 'Supports diuresis and dilutes urine solute concentration; balanced against blood-pressure and cardiac-renal considerations in older patients.',
      },
      {
        nutrient: 'Dietary moisture',
        range: 'High (wet-food preferred where possible)',
        why: 'Increased dietary water reduces urine specific gravity and stone-forming saturation; consistently emphasised in FLUTD and stone-prevention protocols.',
      },
    ],
    whenItsNeeded: [
      'Confirmed urolithiasis (bladder or kidney stones) by imaging — radiograph for radiopaque stones (struvite, calcium oxalate) and ultrasound for radiolucent stones.',
      'Stone-removal procedure (cystotomy, urethral hydropulsion, voiding urohydropropulsion, percutaneous stone removal) — diet is part of post-procedure recurrence prevention.',
      'Feline lower urinary tract disease signs (stranguria, pollakiuria, haematuria, periuria) where the differential includes urolithiasis, urethral plug, feline idiopathic cystitis, or bacterial UTI.',
      'Confirmed urethral obstruction in a male cat — diet is a long-term prevention strategy after stabilisation and obstruction relief.',
    ],
    rxVsOtcDifference:
      'Veterinary therapeutic urinary diets (Hill\'s Prescription Diet c/d Multicare, s/d, Royal Canin Veterinary Diet Urinary SO, Purina Pro Plan Veterinary Diets UR Urinary Ox/St) carry the stone-type-specific mineral profile and urine-pH target at therapeutic inclusion levels. Retail "urinary support" formulations do not match the precision of the stone-dissolution or stone-prevention engineering. For confirmed urolithiasis or FLUTD, the veterinary therapeutic product paired with the treating veterinarian\'s diagnostic and monitoring plan is the standard.',
    brandExamplesByCondition: [
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet c/d Multicare (struvite dissolution and prevention), s/d (struvite dissolution short course), and Multicare Stress (FIC)",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Veterinary Diet Urinary SO and Urinary SO + Calm (FIC variant)',
        role: 'gold-standard',
      },
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets UR Urinary Ox/St (combined struvite and calcium oxalate management)',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet W+U Weight Management + Urinary Care',
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'Transition over 7-10 days from the current diet to the therapeutic urinary diet, mixing in increasing proportions.',
      'For dissolution protocols (e.g., struvite), confirm the patient is eating the dissolution diet exclusively — partial compliance prolongs the dissolution window and risks ongoing irritation.',
      'Encourage water intake. Multiple fresh-water stations, pet water fountains, and a wet-food component (or therapeutic urinary wet formulation) consistently improve daily water consumption.',
      'Schedule recheck imaging and urinalysis at the cadence the treating veterinarian sets — typically 4-6 weeks for struvite dissolution monitoring; longer intervals for calcium oxalate recurrence surveillance.',
    ],
    whatToAvoid: [
      'High-mineral treats and human-food scraps that work against the dietary mineral targets — particularly dairy, salty snacks, and supplements containing calcium, vitamin C, or vitamin D.',
      'Switching between struvite and calcium-oxalate-prevention diets without veterinary input — the urine-pH targets are opposing and the mineral profiles are stone-type-specific.',
      'Dry-only feeding in cats with FLUTD where increased water intake is part of the management plan. A wet-food component is consistently recommended.',
      'Acidifying supplements (cranberry, methionine) on top of an already-acidifying therapeutic urinary diet — additive acidification can over-shoot the target urine pH and contribute to calcium oxalate risk.',
    ],
    typicalCost: {
      perMonth: 'Roughly $70-$170 per month for a cat or small-to-medium dog on a therapeutic urinary diet; lifetime stone-recurrence-prevention management often runs as an ongoing cost on top of episodic imaging and surgical procedures.',
      vsRegularFood: 'Therapeutic urinary kibble is typically 1.5-2.5x the per-day cost of a standard adult-maintenance formula; per-can wet adds further cost but is often clinically preferred.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'How do I know which stone type my pet has?',
        answer:
          'Stone-type determination is by analysis of a passed or surgically-removed stone — sent to a urolith laboratory (the Minnesota Urolith Center is a commonly-referenced resource). Imaging alone (radiograph, ultrasound) suggests stone presence but is not always definitive on type. The treating veterinarian selects the therapeutic urinary diet based on stone-type analysis and patient history.',
      },
      {
        question: 'Will a urinary diet prevent all future stones?',
        answer:
          'Urinary diets reduce recurrence risk but do not eliminate it. Calcium oxalate in particular has a high recurrence rate even with optimal dietary management; long-term monitoring with periodic urinalysis and imaging at the cadence the treating veterinarian sets is the practical approach.',
      },
      {
        question: 'My cat has FLUTD signs but no stones — does diet still help?',
        answer:
          'Often, yes. Feline lower urinary tract disease frequently does not involve uroliths and is often feline idiopathic cystitis (FIC). The dietary lever in FIC is increased water intake — wet-food formulations and the FIC-targeted therapeutic urinary diets are commonly recommended. The bulk of FIC management is, however, environmental enrichment and stress reduction; the treating veterinarian and ISFM guidance support this.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'ACVIM Consensus Statement on the Treatment and Prevention of Uroliths in Dogs and Cats.',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
      {
        name: 'ISFM/AAFP Feline Lower Urinary Tract Disease consensus.',
        url: 'https://journals.sagepub.com/home/jfm',
      },
      {
        name: 'Minnesota Urolith Center — urolith submission and trends data.',
        url: 'https://vetmed.umn.edu/centers-programs/minnesota-urolith-center',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food.',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
      {
        name: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats.',
        url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/',
      },
    ],
  },

  // ─── GASTROINTESTINAL SENSITIVITY ──────────────────────────────────────
  {
    slug: 'gastrointestinal-sensitivity',
    conditionName: 'Gastrointestinal Sensitivity',
    summary:
      'Therapeutic gastrointestinal diets use a combination of low-fat (for pancreatitis-prone and lymphangiectasia patients), high-fiber (for colitis), highly-digestible substrates, and pre- and probiotic inclusion to support chronic and acute GI conditions in dogs and cats.',
    severity: 'chronic',
    whatTheDietDoes: [
      'Highly-digestible substrates (cooked starch, hydrolyzed or moderately-cooked protein) reduce the substrate available to colonic fermentation and reduce digestive workload — relevant in acute gastroenteritis recovery and chronic enteropathy.',
      'Low-fat formulations support pancreatitis-prone dogs (particularly Miniature Schnauzers, Yorkshire Terriers, and other historically pancreatitis-affected breeds) and patients with intestinal lymphangiectasia.',
      'Soluble fiber inclusion (psyllium, beet pulp, inulin) supports colonic health, slows transit, and improves stool quality in chronic colitis and large-bowel diarrhoea.',
      'Pre- and probiotic inclusion is increasingly standard in therapeutic gastrointestinal product lines. The published evidence base is heterogeneous but consistent enough that WSAVA and ACVIM gastrointestinal references include diet-incorporated pre/probiotics in the discussion.',
      'Hydrolyzed protein is the substrate of choice for chronic inflammatory enteropathy (formerly inflammatory bowel disease) where dietary-protein hypersensitivity is suspected. The diagnostic and management approach often overlaps with the food-allergies-and-intolerances catalog entry.',
    ],
    nutrientTargets: [
      {
        nutrient: 'Crude fat',
        range: 'Low for pancreatitis and lymphangiectasia; moderate for general GI sensitivity',
        why: 'Dietary fat is a pancreatic-stimulus and a relevant lymphangiectasia driver; the appropriate fat target is condition-specific.',
      },
      {
        nutrient: 'Crude fiber',
        range: 'Elevated for chronic colitis and large-bowel diarrhoea',
        why: 'Soluble fiber supports colonocyte energy supply and stool quality; the AAHA and ACVIM gastrointestinal references describe fiber-responsive enteropathy as a recognised subset.',
      },
      {
        nutrient: 'Digestibility (substrate selection)',
        range: 'High',
        why: 'Cooked-starch and moderately-processed protein reduce the colonic-fermentation substrate and reduce digestive workload; consistent across therapeutic GI product lines.',
      },
      {
        nutrient: 'Protein source',
        range: 'Hydrolyzed where dietary hypersensitivity is suspected; novel protein as an alternative',
        why: 'Hydrolyzed protein reduces immunoglobulin-recognition and is the diagnostic substrate for chronic inflammatory enteropathy with suspected dietary trigger.',
      },
      {
        nutrient: 'Pre- and probiotics',
        range: 'Often included',
        why: 'The published evidence is heterogeneous but consistent enough that diet-incorporated pre/probiotics are increasingly standard; WSAVA and ACVIM references include them in the GI management discussion.',
      },
    ],
    whenItsNeeded: [
      'Acute gastroenteritis recovery where a bland, highly-digestible diet supports the recovery window — typically a short-course veterinary GI formulation for 7-14 days.',
      'Chronic intermittent vomiting or diarrhoea where dietary trial is on the management plan, often in conjunction with the food-allergies-and-intolerances elimination trial.',
      'Diagnosed chronic inflammatory enteropathy (CIE; formerly IBD) — hydrolyzed-protein therapeutic GI diet is a first-line management lever before immunomodulatory therapy.',
      'Confirmed or strongly-suspected pancreatitis history — a low-fat therapeutic GI diet is the dietary management lever; the treating veterinarian sets the fat target.',
      'Confirmed intestinal lymphangiectasia or protein-losing enteropathy — low-fat therapeutic GI diet is part of the management plan, with concurrent veterinary monitoring of serum protein and albumin.',
    ],
    rxVsOtcDifference:
      'Veterinary therapeutic gastrointestinal diets (Hill\'s Prescription Diet i/d, i/d Low Fat, w/d, Royal Canin Veterinary Diet Gastrointestinal HE, Low Fat, Fiber Response, Purina Pro Plan Veterinary Diets EN Gastroenteric, FortiFlora-supplemented lines) carry the formulation engineering — digestibility, fat target, fiber profile, hydrolyzed protein where indicated, and often diet-incorporated pre/probiotics — at therapeutic inclusion levels. Retail "sensitive stomach" formulations are not equivalent and are not appropriate substitutes for diagnosed pancreatitis, chronic inflammatory enteropathy, or lymphangiectasia patients.',
    brandExamplesByCondition: [
      {
        brand: "Hill's Prescription Diet",
        productLine: "Hill's Prescription Diet i/d (and i/d Low Fat for pancreatitis-prone patients)",
        role: 'gold-standard',
      },
      {
        brand: 'Royal Canin Veterinary Diet',
        productLine: 'Royal Canin Veterinary Diet Gastrointestinal (HE, Low Fat, Fiber Response, Puppy GI variants)',
        role: 'gold-standard',
      },
      {
        brand: 'Purina Pro Plan Veterinary Diets',
        productLine: 'Purina Pro Plan Veterinary Diets EN Gastroenteric and FortiFlora-supplemented lines',
        role: 'gold-standard',
      },
      {
        brand: 'Blue Buffalo Natural Veterinary Diet',
        productLine: 'Blue Buffalo Natural Veterinary Diet GI Gastrointestinal Support',
        role: 'reasonable-alternative',
      },
      {
        brand: 'Rayne Clinical Nutrition',
        productLine: 'Rayne Adult-Health-RSS and Low-Fat-MAINT (rabbit-based low-fat formulations for combined pancreatitis-and-CAFR cases)',
        role: 'reasonable-alternative',
      },
    ],
    how_to_transition: [
      'For acute gastroenteritis recovery, transition to the therapeutic GI diet directly from a short period of nil-by-mouth or bland-only feeding as the treating veterinarian directs.',
      'For chronic management, transition over 7-10 days mixing in increasing proportions to reduce gastrointestinal upset.',
      'For pancreatitis-prone patients on low-fat diets, treats and human-food scraps must also be low-fat to maintain the dietary intervention. The fat target is undermined by single high-fat exposures.',
      'Track stool quality, vomiting frequency, body-condition score, and serum biochemistry (especially albumin and total protein for lymphangiectasia patients) at the cadence the treating veterinarian sets.',
    ],
    whatToAvoid: [
      'High-fat treats and table scraps in pancreatitis-prone patients — the single most common driver of acute pancreatitis recurrence in the published canine pancreatitis literature.',
      'Frequent diet rotation in patients with chronic inflammatory enteropathy on a hydrolyzed-protein diet — once the diet is supporting remission, brand or formulation changes can perturb that stability.',
      'Untested home-cooked or raw GI diets in patients with diagnosed chronic enteropathy or lymphangiectasia. Home-cooked nutritionally-adequate GI diets exist (formulated by board-certified veterinary nutritionists) but ad-hoc home-cooking is not equivalent and carries deficiency risk.',
      'Adding fiber supplements (psyllium, methylcellulose) on top of an already-fiber-enriched therapeutic GI diet without veterinary input — additive fiber can over-shoot the target and produce paradoxical large-bowel signs.',
    ],
    typicalCost: {
      perMonth: 'Roughly $80-$180 per month for a medium-size dog on a therapeutic GI diet; chronic enteropathy management often runs ongoing diet cost plus concurrent diagnostic and medication costs.',
      vsRegularFood: 'Therapeutic GI kibble is typically 1.5-3x the per-day cost of a standard adult-maintenance formula; low-fat and hydrolyzed formulations sit at the higher end.',
    },
    vetConsultRequired: true,
    faqs: [
      {
        question: 'My dog gets diarrhoea sometimes — do I need a prescription GI diet?',
        answer:
          'Not necessarily for occasional self-limiting episodes. Chronic, recurrent, or progressive GI signs warrant a veterinary workup; the published ACVIM and WSAVA references describe the diagnostic pathway. The treating veterinarian decides whether a therapeutic GI diet is the appropriate lever, often after ruling out parasitic, infectious, and dietary-indiscretion causes first.',
      },
      {
        question: 'Is a "sensitive stomach" retail diet the same as a prescription GI diet?',
        answer:
          'No. Retail "sensitive stomach" formulations are typically reformulations of adult-maintenance with adjusted ingredient palatability or fiber; they do not carry the digestibility engineering, the precise fat target, or the hydrolyzed protein substrate of veterinary therapeutic GI lines. For diagnosed chronic enteropathy, pancreatitis, or lymphangiectasia, the veterinary therapeutic product is the appropriate intervention.',
      },
      {
        question: 'Are probiotic supplements as good as a probiotic-containing GI diet?',
        answer:
          'The published evidence on probiotic supplementation in companion-animal GI disease is heterogeneous. Diet-incorporated pre/probiotics, separate probiotic supplements (e.g., FortiFlora, Visbiome Vet), and dietary fiber that supports endogenous microbial populations are all part of the toolkit; the treating veterinarian sets the combination.',
      },
    ],
    citedSources: [
      {
        name: 'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations',
        url: 'https://www.aafco.org/publications/',
      },
      {
        name: 'ACVIM Consensus Statements — Internal Medicine (chronic enteropathy, pancreatitis).',
        url: 'https://www.acvim.org/Education/Consensus-Statements',
      },
      {
        name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food.',
        url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
      },
      {
        name: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats.',
        url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/',
      },
      {
        name: 'FDA Center for Veterinary Medicine — Animal Food and Feeds.',
        url: 'https://www.fda.gov/animal-veterinary',
      },
      {
        name: 'Forman MA et al. ACVIM consensus statement on pancreatitis in cats. Journal of Veterinary Internal Medicine.',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
    ],
  },
]

// ─── Lookup helpers ─────────────────────────────────────────────────────────

export function getConditionDietBySlug(slug: string): ConditionDiet | undefined {
  return ConditionDiets.find((c) => c.slug === slug)
}

export function getRelatedConditionDiets(slug: string, limit: number = 3): ConditionDiet[] {
  const current = getConditionDietBySlug(slug)
  if (!current) return []
  return ConditionDiets.filter((c) => c.slug !== slug).slice(0, limit)
}
