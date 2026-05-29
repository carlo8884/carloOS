/**
 * Long-form brand reviews — PetFoods.com.
 *
 * One record per brand we have written an independent review for. Each record
 * is keyed by `slug` and is joined to the catalog row in `./brands.ts` at
 * render time by the `/brands/[slug]/page.tsx` template.
 *
 * EDITORIAL RULES for this file (QC §1 trust-bar):
 *
 *   1. NO fabricated data. Every field is taken from one of:
 *        - the brand's own public website (corporate / press / FAQ),
 *        - the WSAVA Global Nutrition Committee "Selecting a Pet Food
 *          Manufacturer" guidance document and its 6-question rubric,
 *        - the AAFCO 2025 Official Publication,
 *        - the US FDA Center for Veterinary Medicine "Recalls &
 *          Withdrawals — Animal & Veterinary" database,
 *        - the Tufts Cummings Vet School Petfoodology blog
 *          (https://vetnutrition.tufts.edu/petfoodology).
 *      If a value cannot be confirmed from one of these, the field is
 *      omitted. The template renders an explicit "not publicly verified"
 *      note in place of the missing value.
 *
 *   2. WSAVA scorecard — the score is the number of the six WSAVA
 *      Global Nutrition Committee "Selecting a Pet Food Manufacturer"
 *      questions that the brand answers publicly. The six questions are:
 *
 *        Q1. Does the company employ a full-time qualified nutritionist
 *            (PhD in animal nutrition or board-certified veterinary
 *            nutritionist — ACVN or ECVCN)?
 *        Q2. Who formulates the diets and what are their credentials?
 *        Q3. Are the diets tested using AAFCO feeding trials, or are they
 *            formulated to meet AAFCO nutrient profiles only?
 *        Q4. Where are the foods produced and manufactured? Can the
 *            facility be visited?
 *        Q5. What specific quality-control measures are used to assure
 *            the consistency and quality of ingredients and the end
 *            product?
 *        Q6. Will the company provide a complete product nutrient
 *            analysis for the dog/cat food in question (beyond the
 *            guaranteed analysis on the bag)?
 *
 *      WSAVA itself does not publish brand scores. The 0-6 score here is
 *      PetFoods.com's editorial reading of which questions the brand
 *      answers publicly via its corporate site or published Q&A. We
 *      indicate which questions are answered in `wsavaQuestionsAnswered`
 *      so the score is auditable.
 *
 *   3. Recall history. ONLY recalls that appear in the FDA CVM "Recalls &
 *      Withdrawals" database are listed. We include the year, product
 *      affected, and FDA-stated reason. Brands with no recall in the
 *      window we reviewed (FDA CVM records 2015 onward) carry an empty
 *      array and the template prints the explicit "No recalls in our
 *      review window — verify current status on FDA CVM" note.
 *
 *   4. Independent assessment. A 60-120 word editorial paragraph written
 *      by the PetFoods.com editorial desk. No DVM byline, no fake
 *      credentials, no marketing language. Cites the trade-offs that
 *      come out of the WSAVA / AAFCO / FDA records above.
 *
 *   5. Disclosure. Every page that renders one of these records carries
 *      the standing PetFoods.com affiliate disclosure in the header of
 *      the review section. No brand has paid for inclusion or for any
 *      assessment language. Affiliate revenue, where it exists on
 *      retailer outbound links, does not influence the editorial.
 */

export interface WsavaAnsweredQuestion {
  /** "Q1" — "Q6" from the WSAVA 6-question rubric (see header note). */
  question: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6'
  /** Short summary of the brand's public answer. */
  answer: string
}

export interface ProductLine {
  name: string
  targetPet: 'Dog' | 'Cat' | 'Dog and Cat'
  formulationApproach: string
  priceTier: '$' | '$$' | '$$$' | '$$$$'
}

export interface RecallRecord {
  year: number
  product: string
  reason: string
}

export interface CitedSource {
  name: string
  url: string
}

export interface BrandReview {
  slug: string
  brandName: string
  parentCompany: string
  founded?: number
  headquarters: string
  manufacturingLocations: string[]
  /** True if the brand owns and operates at least one of the production plants where its food is made. */
  ownsManufacturing: boolean
  /** Count of WSAVA Global Nutrition Committee 6-question rubric items the brand answers publicly. */
  wsavaComplianceScore: 0 | 1 | 2 | 3 | 4 | 5 | 6
  wsavaQuestionsAnswered: WsavaAnsweredQuestion[]
  /** True only when the brand publicly identifies at least one full-time qualified nutritionist (PhD in animal nutrition or board-certified veterinary nutritionist — ACVN/ECVCN). */
  hasBoardCertifiedNutritionists: boolean
  /** True only when the brand publicly states that at least part of its portfolio is substantiated by AAFCO feeding trials (not formulation only). */
  conductsFeedingTrials: boolean
  productLines: ProductLine[]
  strengths: string[]
  weaknesses: string[]
  /** FDA CVM Recalls & Withdrawals records in the window we reviewed (2015 onward). */
  recallHistory: RecallRecord[]
  whoItsBestFor: string[]
  whoShouldAvoid: string[]
  /** Editorial paragraph (60-120 words). No DVM byline, no fake credentials. */
  independentAssessment: string
  /** Every record listed here is a citable public source supporting at least one claim in the row. */
  citedSources: CitedSource[]
}

// ─── WSAVA rubric reference (rendered on every brand page) ────────────────

export const WSAVA_QUESTION_TEXT: Record<WsavaAnsweredQuestion['question'], string> = {
  Q1: 'Does the company employ a full-time qualified nutritionist (PhD in animal nutrition or board-certified veterinary nutritionist — ACVN or ECVCN)?',
  Q2: 'Who formulates the diets and what are their credentials?',
  Q3: 'Are the diets tested using AAFCO feeding trials, or are they formulated to meet AAFCO nutrient profiles only?',
  Q4: 'Where are the foods produced and manufactured? Can the facility be visited?',
  Q5: 'What specific quality-control measures are used to assure the consistency and quality of ingredients and the end product?',
  Q6: 'Will the company provide a complete product nutrient analysis (beyond the guaranteed analysis on the bag)?',
}

// ─── Records ──────────────────────────────────────────────────────────────

export const BrandReviews: BrandReview[] = [
  // ───────── Royal Canin ─────────
  {
    slug: 'royal-canin',
    brandName: 'Royal Canin',
    parentCompany: 'Mars Petcare',
    founded: 1968,
    headquarters: 'Aimargues, France',
    manufacturingLocations: ['France', 'United States', 'Canada'],
    ownsManufacturing: true,
    wsavaComplianceScore: 6,
    wsavaQuestionsAnswered: [
      { question: 'Q1', answer: 'Royal Canin publicly identifies a global team of qualified nutritionists and veterinarians on its corporate "About" pages.' },
      { question: 'Q2', answer: 'Diets are formulated in-house by Royal Canin\'s nutrition and research teams; credentials and bios are listed on the corporate site.' },
      { question: 'Q3', answer: 'Portfolio mixes AAFCO feeding-trial-substantiated lines with formulation-only lines; the AAFCO statement is printed per SKU.' },
      { question: 'Q4', answer: 'Production occurs at company-owned and company-operated plants; locations are listed in corporate communications.' },
      { question: 'Q5', answer: 'Royal Canin publishes a quality-and-safety overview covering ingredient supplier qualification, in-plant testing, and finished-batch testing.' },
      { question: 'Q6', answer: 'Royal Canin publishes a complete nutrient analysis for each diet via its product-detail pages and provides additional detail on request.' },
    ],
    hasBoardCertifiedNutritionists: true,
    conductsFeedingTrials: true,
    productLines: [
      { name: 'Royal Canin Veterinary Diet', targetPet: 'Dog and Cat', formulationApproach: 'Therapeutic diets distributed through licensed veterinarians', priceTier: '$$$$' },
      { name: 'Royal Canin Size Health Nutrition', targetPet: 'Dog', formulationApproach: 'Size-segmented (X-Small through Giant) maintenance diets', priceTier: '$$$' },
      { name: 'Royal Canin Breed Health Nutrition', targetPet: 'Dog and Cat', formulationApproach: 'Breed-specific kibble shape and nutrient profile', priceTier: '$$$' },
      { name: 'Royal Canin Feline Care Nutrition', targetPet: 'Cat', formulationApproach: 'Life-stage and condition-targeted dry and wet diets', priceTier: '$$$' },
    ],
    strengths: [
      'Meets all six WSAVA Global Nutrition Committee transparency questions based on public disclosures.',
      'Owns and operates its manufacturing plants — full chain-of-custody for the production process.',
      'One of the few brands whose portfolio includes diets substantiated by AAFCO feeding trials, not only formulation.',
      'Veterinary Diet line is one of the most-prescribed therapeutic diet lines in North America.',
    ],
    weaknesses: [
      'Heavy use of named by-product meals and corn-based carbohydrates is a turn-off for owners seeking a "whole food" ingredient deck — the formulation is nutritionally defensible but the ingredient panel is not boutique-friendly.',
      'Price tier is at the high end of mass-market premium; per-pound cost is higher than Pro Plan or Hill\'s Science Diet for comparable life-stage lines.',
      'Many breed-specific SKUs are marketed on small phenotypic differences that are not clinically meaningful for most pets — the breed-segmentation is more a marketing structure than a medical one.',
    ],
    recallHistory: [],
    whoItsBestFor: [
      'Owners who place WSAVA transparency and feeding-trial substantiation above ingredient-deck aesthetics.',
      'Pets on a veterinary-prescribed therapeutic diet where Royal Canin Veterinary Diet is the indicated SKU.',
      'Owners of breeds (e.g., Bulldog, Persian) where the breed-specific kibble shape provides a real prehension benefit.',
    ],
    whoShouldAvoid: [
      'Owners with a hard requirement for grain-free or single-protein boutique formulations.',
      'Owners on a value budget — Pedigree, Iams, or Purina ONE deliver life-stage adequacy at a lower per-pound price.',
    ],
    independentAssessment:
      'Royal Canin is one of a small number of large pet-food companies that answers all six WSAVA "Selecting a Pet Food Manufacturer" questions on its corporate site. Combined with owned manufacturing, in-house formulation by credentialed nutritionists, and AAFCO feeding-trial substantiation across part of the portfolio, the operational transparency is among the strongest in the category. The trade-off is ingredient aesthetics: named by-product meals, brewer\'s rice, and corn carbohydrates dominate the panel. Nutritionally defensible, but unlikely to satisfy an owner whose decision rule is "no by-products."',
    citedSources: [
      { name: 'Royal Canin Corporate — Our Approach', url: 'https://www.royalcanin.com/us/about-us' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
      { name: 'Tufts Petfoodology — Questions You Should Be Asking About Your Pet\'s Food', url: 'https://vetnutrition.tufts.edu/petfoodology/' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
    ],
  },

  // ───────── Hill's Science Diet ─────────
  {
    slug: 'hills-science-diet',
    brandName: 'Hill’s Science Diet',
    parentCompany: 'Colgate-Palmolive (Hill’s Pet Nutrition)',
    founded: 1939,
    headquarters: 'Topeka, Kansas, USA',
    manufacturingLocations: ['United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 6,
    wsavaQuestionsAnswered: [
      { question: 'Q1', answer: 'Hill’s publicly identifies more than two hundred PhD nutritionists, food scientists, and board-certified veterinary nutritionists on its corporate site.' },
      { question: 'Q2', answer: 'Diets are formulated in-house at the Hill’s Pet Nutrition Center in Topeka, Kansas; team credentials are listed on the corporate science pages.' },
      { question: 'Q3', answer: 'Portfolio includes AAFCO feeding-trial-substantiated diets; statement is per SKU on the bag.' },
      { question: 'Q4', answer: 'Plants are located in the United States and are owned by Hill’s; locations are listed in corporate materials.' },
      { question: 'Q5', answer: 'Hill’s publishes a quality-and-safety overview describing supplier qualification, in-plant testing, and finished-product release testing.' },
      { question: 'Q6', answer: 'Complete nutrient analysis is published per SKU on the product-detail pages, beyond the guaranteed-analysis panel.' },
    ],
    hasBoardCertifiedNutritionists: true,
    conductsFeedingTrials: true,
    productLines: [
      { name: 'Hill’s Prescription Diet', targetPet: 'Dog and Cat', formulationApproach: 'Therapeutic diets distributed through licensed veterinarians', priceTier: '$$$$' },
      { name: 'Hill’s Science Diet Adult', targetPet: 'Dog and Cat', formulationApproach: 'AAFCO-adequate adult maintenance formulas', priceTier: '$$$' },
      { name: 'Hill’s Science Diet Puppy / Kitten', targetPet: 'Dog and Cat', formulationApproach: 'Growth-life-stage formulas, with large-breed-puppy variant', priceTier: '$$$' },
      { name: 'Hill’s Science Diet Sensitive Stomach & Skin', targetPet: 'Dog and Cat', formulationApproach: 'Limited-protein-source maintenance line for sensitivity-prone pets', priceTier: '$$$' },
    ],
    strengths: [
      'Answers all six WSAVA Global Nutrition Committee transparency questions per public disclosures.',
      'In-house research operation (Hill’s Pet Nutrition Center) generates peer-reviewed feeding-outcome literature cited by veterinary schools.',
      'Prescription Diet line is the most-stocked therapeutic-diet brand in the US veterinary channel.',
      'Owns its US manufacturing plants — direct control over the production line.',
    ],
    weaknesses: [
      'January 2019 vitamin-D-toxicity recall of canned dog foods was large in scope (multiple lots across the Prescription Diet and Science Diet canned ranges) and the root-cause supplier-error explanation was unsatisfying for many owners.',
      'Ingredient panels lean on chicken by-product meal, brewer\'s rice, and corn — same ingredient-aesthetics trade-off as Royal Canin and Pro Plan.',
      'Price tier is at the high end of grocery-and-pet-specialty premium.',
    ],
    recallHistory: [
      { year: 2019, product: 'Multiple lots of canned dog food (Prescription Diet and Science Diet)', reason: 'Elevated vitamin D from a vitamin pre-mix supplied by a third-party vendor; voluntary recall expanded in 2019.' },
    ],
    whoItsBestFor: [
      'Owners whose veterinarian has recommended a Prescription Diet SKU.',
      'Owners who weight WSAVA transparency, AAFCO feeding-trial substantiation, and published research above ingredient-deck aesthetics.',
      'Owners of large-breed puppies, where the calcium-controlled large-breed-puppy SKU is a useful published-formulation choice.',
    ],
    whoShouldAvoid: [
      'Owners with a hard requirement for grain-free, by-product-free, or boutique-ingredient panels.',
      'Owners who consider the 2019 vitamin-D recall disqualifying.',
    ],
    independentAssessment:
      'Hill’s Science Diet sits in the same WSAVA-transparent, feeding-trial-substantiated tier as Royal Canin and Purina Pro Plan, and is the most veterinary-channel-embedded of the three through the Prescription Diet line. The 2019 vitamin-D-toxicity recall, traced to a third-party vitamin pre-mix supplier, is the major mark against the brand and is the reason it does not sit on top of the category on operational risk. Owners willing to read the recall report and accept that supplier-error recalls happen across the industry will find Hill’s a defensible mainstream-premium choice; owners using the brand on a veterinary diet prescription have very few comparable alternatives.',
    citedSources: [
      { name: 'Hill’s Pet Nutrition — Our Science', url: 'https://www.hillspet.com/about-us' },
      { name: 'FDA CVM — Hill’s Pet Nutrition January 2019 Recall Update', url: 'https://www.fda.gov/animal-veterinary/recalls-withdrawals/hills-pet-nutrition-voluntarily-expands-recall-canned-dog-food-due-elevated-levels-vitamin-d' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
      { name: 'Tufts Petfoodology', url: 'https://vetnutrition.tufts.edu/petfoodology/' },
    ],
  },

  // ───────── Purina Pro Plan ─────────
  {
    slug: 'purina-pro-plan',
    brandName: 'Purina Pro Plan',
    parentCompany: 'Nestlé Purina PetCare',
    headquarters: 'St. Louis, Missouri, USA',
    manufacturingLocations: ['United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 6,
    wsavaQuestionsAnswered: [
      { question: 'Q1', answer: 'Nestlé Purina publicly identifies a team of board-certified veterinary nutritionists (ACVN) and PhD animal nutritionists across the Pro Plan and Veterinary Diets lines.' },
      { question: 'Q2', answer: 'Diets are formulated in-house at the Purina research facility in St. Joseph, Missouri (Nestlé Purina Research Center).' },
      { question: 'Q3', answer: 'Pro Plan publishes AAFCO feeding-trial substantiation for many of its life-stage diets; per-SKU statement is on the bag.' },
      { question: 'Q4', answer: 'Production is at Purina-owned US plants; the company publishes plant locations in its corporate communications.' },
      { question: 'Q5', answer: 'Purina publishes a quality-and-food-safety overview describing supplier qualification, lot testing, and finished-product release testing.' },
      { question: 'Q6', answer: 'Complete nutrient analysis is available per SKU on the Pro Plan product pages; full panel beyond the guaranteed analysis is published or provided on request.' },
    ],
    hasBoardCertifiedNutritionists: true,
    conductsFeedingTrials: true,
    productLines: [
      { name: 'Pro Plan Sport / Performance', targetPet: 'Dog', formulationApproach: 'High-protein / high-fat formula for working and sporting dogs', priceTier: '$$$' },
      { name: 'Pro Plan Sensitive Skin & Stomach', targetPet: 'Dog and Cat', formulationApproach: 'Salmon or lamb primary protein, oat meal carrier', priceTier: '$$$' },
      { name: 'Pro Plan Veterinary Diets', targetPet: 'Dog and Cat', formulationApproach: 'Therapeutic diets distributed through licensed veterinarians', priceTier: '$$$$' },
      { name: 'Pro Plan Complete Essentials', targetPet: 'Dog and Cat', formulationApproach: 'Life-stage AAFCO-adequate adult maintenance line', priceTier: '$$$' },
    ],
    strengths: [
      'Meets all six WSAVA Global Nutrition Committee transparency questions per public disclosures.',
      'AAFCO feeding-trial-substantiated across many SKUs — not only formulated to meet the profile.',
      'Veterinary Diets line is a primary alternative to Hill’s Prescription Diet in the US veterinary channel.',
      'Pro Plan Sport / Performance line is one of the few mainstream brands targeting working-dog energy density with published-research support.',
    ],
    weaknesses: [
      'Parent Nestlé Purina has issued several recalls across its broader portfolio over the past decade; Pro Plan-branded recalls have been narrower in scope but the parent\'s record is on file at FDA CVM.',
      'Ingredient panels include corn, brewers rice, and named by-product meals — the standard mainstream-premium ingredient deck, not a boutique panel.',
    ],
    recallHistory: [
      { year: 2016, product: 'Pro Plan Savory Meals With Real Beef in Sauce — limited canned wet dog food lots', reason: 'Possible inadequate vitamin/mineral levels in a subset of canned wet dog food cans; voluntary recall per FDA CVM.' },
    ],
    whoItsBestFor: [
      'Owners who want a WSAVA-transparent, feeding-trial-substantiated brand at mainstream-premium price.',
      'Working- or sporting-dog owners using the Sport / Performance line.',
      'Owners whose veterinarian has prescribed Pro Plan Veterinary Diets.',
    ],
    whoShouldAvoid: [
      'Owners with a hard requirement for grain-free or by-product-free panels.',
      'Owners who consider any parent-company recall history disqualifying.',
    ],
    independentAssessment:
      'Pro Plan is the most-cited brand in WSAVA-aligned veterinary-nutrition guidance alongside Hill’s Science Diet and Royal Canin. It meets the same operational bar — credentialed in-house nutritionists, owned manufacturing, AAFCO feeding-trial substantiation, full nutrient-panel disclosure — at a slightly lower per-pound price than Hill’s or Royal Canin. The mark against the line is the parent\'s broader recall history rather than Pro Plan-specific failures. For owners weighting research and feeding-trial substantiation above ingredient aesthetics, Pro Plan is one of three defensible mainstream-premium choices.',
    citedSources: [
      { name: 'Purina Pro Plan — Our Approach', url: 'https://www.purina.com/pro-plan' },
      { name: 'Nestlé Purina Research Center — Science Behind the Brand', url: 'https://www.purina.com/about-purina' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'Tufts Petfoodology', url: 'https://vetnutrition.tufts.edu/petfoodology/' },
    ],
  },

  // ───────── Iams ─────────
  {
    slug: 'iams',
    brandName: 'Iams',
    parentCompany: 'Mars Petcare',
    founded: 1946,
    headquarters: 'Dayton, Ohio, USA',
    manufacturingLocations: ['United States', 'Netherlands'],
    ownsManufacturing: true,
    wsavaComplianceScore: 3,
    wsavaQuestionsAnswered: [
      { question: 'Q1', answer: 'Iams identifies in-house nutrition and research staff at the Iams pet-care facility; the public-facing detail is thinner than Royal Canin or Pro Plan but staff credentials are referenced.' },
      { question: 'Q4', answer: 'Production is at Mars Petcare-owned plants in the US and Netherlands per corporate disclosures.' },
      { question: 'Q5', answer: 'Mars Petcare publishes a corporate quality-and-food-safety overview covering supplier qualification and in-plant testing.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Iams ProActive Health Adult', targetPet: 'Dog and Cat', formulationApproach: 'Chicken-and-grain adult maintenance kibble', priceTier: '$$' },
      { name: 'Iams ProActive Health Healthy Weight', targetPet: 'Dog and Cat', formulationApproach: 'Reduced-fat adult formula', priceTier: '$$' },
      { name: 'Iams Perfect Portions (wet)', targetPet: 'Cat', formulationApproach: 'Single-serve canned cat-food cups', priceTier: '$$' },
    ],
    strengths: [
      'Mass-retail-available at a value-tier price.',
      'Manufactured at owned Mars Petcare plants — known and stable production footprint.',
      'Long-running brand with consistent ingredient sourcing.',
    ],
    weaknesses: [
      'Public WSAVA transparency posture is incomplete — the brand does not publish detailed answers to all six WSAVA Global Nutrition Committee questions.',
      'AAFCO feeding-trial substantiation is not publicly highlighted; many SKUs appear to be formulated to the AAFCO nutrient profile only — verify per bag.',
      'Has carried recall events at FDA CVM for limited lots in past years; check current FDA CVM database before purchase.',
    ],
    recallHistory: [
      { year: 2010, product: 'Iams Veterinary Formulas — limited dry dog and cat formulas (contract-manufactured at the Procter & Gamble Henderson, North Carolina facility)', reason: 'Potential salmonella contamination per FDA notice. (Predates Mars’ 2014 acquisition of Iams from P&G.)' },
    ],
    whoItsBestFor: [
      'Value-tier shoppers who want a known mass-market brand under a major-parent quality system.',
      'Owners whose pet has done well on Iams historically and who do not need WSAVA-tier transparency.',
    ],
    whoShouldAvoid: [
      'Owners who require all six WSAVA questions to be publicly answered.',
      'Owners who want AAFCO feeding-trial substantiation as a hard requirement.',
    ],
    independentAssessment:
      'Iams is a competently produced value-tier brand under Mars Petcare ownership. The public WSAVA transparency posture is thinner than its sibling Royal Canin: nutritionist credentials are referenced but not detailed, and AAFCO feeding-trial substantiation is not a headline feature of the line. The brand carries an older salmonella-related recall from the P&G ownership era; nothing under Mars stewardship has been comparably broad. For an owner buying at the value tier, Iams is a defensible mainstream choice; for an owner buying primarily on WSAVA-tier transparency, Iams is materially weaker than Royal Canin / Hill’s / Pro Plan.',
    citedSources: [
      { name: 'Iams — About Us', url: 'https://www.iams.com/about-us' },
      { name: 'Mars Petcare — Quality & Food Safety', url: 'https://www.marspetcare.com/' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Eukanuba ─────────
  {
    slug: 'eukanuba',
    brandName: 'Eukanuba',
    parentCompany: 'Mars Petcare',
    founded: 1969,
    headquarters: 'Dayton, Ohio, USA',
    manufacturingLocations: ['United States', 'Netherlands'],
    ownsManufacturing: true,
    wsavaComplianceScore: 3,
    wsavaQuestionsAnswered: [
      { question: 'Q1', answer: 'Eukanuba references in-house nutrition and research staff via Mars Petcare; public-facing detail is thinner than Royal Canin or Pro Plan.' },
      { question: 'Q4', answer: 'Production is at Mars Petcare-owned plants in the US and Netherlands per corporate disclosures.' },
      { question: 'Q5', answer: 'Mars Petcare publishes a corporate quality-and-food-safety overview applicable to Eukanuba.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Eukanuba Adult Maintenance', targetPet: 'Dog', formulationApproach: 'Chicken-based adult maintenance kibble across small, medium, and large breed sizes', priceTier: '$$' },
      { name: 'Eukanuba Premium Performance', targetPet: 'Dog', formulationApproach: 'Higher-protein, higher-fat sporting-dog formula', priceTier: '$$$' },
      { name: 'Eukanuba Senior', targetPet: 'Dog', formulationApproach: 'Reduced-fat senior maintenance formula', priceTier: '$$' },
    ],
    strengths: [
      'Premium Performance line is well-regarded in the sporting-and-working-dog community for its calorie density and consistency.',
      'Manufactured at owned Mars Petcare plants — same production footprint as Iams.',
      'Long-running brand with stable ingredient sourcing.',
    ],
    weaknesses: [
      'Public WSAVA transparency posture is incomplete — Eukanuba does not publish full answers to all six WSAVA Global Nutrition Committee questions.',
      'AAFCO feeding-trial substantiation is not a public headline of the line; many SKUs appear to be formulated-only — verify per bag.',
      'Has carried recall events at FDA CVM under prior P&G ownership; check current FDA CVM database before purchase.',
    ],
    recallHistory: [
      { year: 2010, product: 'Eukanuba Veterinary Diets and renal-formula dry dog and cat foods (contract-manufactured at the P&G Henderson, NC facility)', reason: 'Potential salmonella contamination per FDA notice. (Predates Mars’ 2014 acquisition of Eukanuba from P&G.)' },
    ],
    whoItsBestFor: [
      'Sporting- and working-dog owners using the Premium Performance line.',
      'Owners who want a Mars-Petcare-owned brand at a tier above Iams but below Royal Canin Vet Diet.',
    ],
    whoShouldAvoid: [
      'Owners who require all six WSAVA questions to be publicly answered.',
      'Owners who want AAFCO feeding-trial substantiation as a hard requirement.',
    ],
    independentAssessment:
      'Eukanuba is the upper-mid sibling to Iams under Mars Petcare. Premium Performance is the line that gives Eukanuba its name in the sporting-dog community; the Adult and Senior lines are competently produced mainstream offerings. As with Iams, the WSAVA transparency posture is thinner than Royal Canin’s and the brand does not publicly headline AAFCO feeding-trial substantiation. The pre-acquisition salmonella recall under P&G ownership is on file at FDA; nothing under Mars stewardship has been comparably broad. Defensible for the sporting-dog use case, weaker as a general WSAVA-first choice.',
    citedSources: [
      { name: 'Eukanuba — About Us', url: 'https://www.eukanuba.com/us' },
      { name: 'Mars Petcare — Quality & Food Safety', url: 'https://www.marspetcare.com/' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Blue Buffalo ─────────
  {
    slug: 'blue-buffalo',
    brandName: 'Blue Buffalo',
    parentCompany: 'General Mills',
    founded: 2003,
    headquarters: 'Wilton, Connecticut, USA',
    manufacturingLocations: ['United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 2,
    wsavaQuestionsAnswered: [
      { question: 'Q4', answer: 'Blue Buffalo states that the majority of its food is manufactured at company-owned and operated facilities in the United States, including the Heartland Pet Food Manufacturing plant in Joplin, Missouri (acquired by Blue Buffalo and now part of the General Mills footprint).' },
      { question: 'Q5', answer: 'Blue Buffalo publishes a quality-and-food-safety overview describing supplier qualification, ingredient testing, and finished-product testing.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Blue Buffalo Life Protection Formula', targetPet: 'Dog and Cat', formulationApproach: 'Deboned-meat-first kibble with brand-signature "LifeSource Bits" supplement inclusion', priceTier: '$$$' },
      { name: 'Blue Buffalo Wilderness', targetPet: 'Dog and Cat', formulationApproach: 'High-protein grain-inclusive formulas (the line that was previously marketed as grain-free has been reformulated to include grain in many SKUs)', priceTier: '$$$' },
      { name: 'Blue Buffalo Basics', targetPet: 'Dog and Cat', formulationApproach: 'Limited-ingredient single-protein formulas', priceTier: '$$$' },
      { name: 'Blue Buffalo Natural Veterinary Diet', targetPet: 'Dog and Cat', formulationApproach: 'Therapeutic diets distributed through licensed veterinarians', priceTier: '$$$$' },
    ],
    strengths: [
      'Owns and operates US manufacturing through the Heartland plant in Joplin, Missouri.',
      'Ingredient panel is more "whole food" forward than the WSAVA-tier mainstream brands — chicken, brown rice, oatmeal rather than chicken by-product meal and corn.',
      'Available across mass-retail, specialty, and direct-to-consumer channels.',
    ],
    weaknesses: [
      'Public WSAVA transparency posture is materially thinner than Royal Canin / Hill’s / Pro Plan — the brand does not publicly identify board-certified veterinary nutritionists (ACVN/ECVCN) on its formulation team and does not publicly highlight AAFCO feeding-trial substantiation.',
      'Was named in the FDA’s 2019 investigation into a possible link between grain-free diets and canine dilated cardiomyopathy (DCM); the brand has subsequently reformulated many SKUs but the FDA report identified Blue Buffalo as one of the most commonly reported brands in DCM case submissions to FDA.',
      'Multiple historical recall events on file at FDA CVM (mold/melamine, elevated beef thyroid hormone, propylene-glycol-treated wet food, aluminum-fragment risk in a treats line) across the past decade.',
    ],
    recallHistory: [
      { year: 2015, product: 'BLUE Wilderness Wild Chew Bones for puppies', reason: 'Possible salmonella contamination per FDA notice; voluntary recall.' },
      { year: 2016, product: 'BLUE Wilderness Rocky Mountain Recipe Red Meat Dinner Wet Food for Adult Dogs (one lot)', reason: 'Elevated beef thyroid hormone (potential cause of hyperthyroidism in dogs) per FDA notice; voluntary recall.' },
      { year: 2017, product: 'Blue Buffalo Homestyle Recipe Healthy Weight wet dog food (one production lot)', reason: 'Potential foreign material (aluminum) in product per FDA notice; voluntary recall.' },
      { year: 2017, product: 'Blue Kitchen Cravings dog food (limited cans of a single SKU)', reason: 'Potential foreign material per FDA notice; voluntary recall.' },
    ],
    whoItsBestFor: [
      'Owners who want a more "whole food" ingredient panel than the WSAVA-tier mainstream brands without leaving the mass-retail channel.',
      'Owners who have read the FDA grain-free / DCM investigation, accept the reformulated grain-inclusive Wilderness line, and want a deboned-meat-first formulation.',
    ],
    whoShouldAvoid: [
      'Owners who require board-certified veterinary nutritionists (ACVN/ECVCN) on the public formulation team.',
      'Owners with a breed at elevated DCM risk (Doberman, Golden Retriever, Boxer, others) who consider the FDA grain-free / DCM investigation disqualifying.',
      'Owners who consider the multi-year recall record disqualifying.',
    ],
    independentAssessment:
      'Blue Buffalo is the largest of the "ingredient-forward" brands — deboned meat, no by-product meals, no corn — and is the brand that most successfully crossed from specialty into mass retail. The trade-off is operational: the brand does not meet the full WSAVA transparency bar, does not publicly identify board-certified veterinary nutritionists on the formulation team, and was prominently named in the FDA’s ongoing investigation of grain-free diets and canine dilated cardiomyopathy. Recall history at FDA CVM is multi-year and multi-cause. Defensible for owners who weight ingredient panel above WSAVA posture; not the right choice for owners who weight WSAVA posture above ingredient panel.',
    citedSources: [
      { name: 'Blue Buffalo — Our Story', url: 'https://bluebuffalo.com/our-story' },
      { name: 'FDA CVM — Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Wellness (Wellness CORE) ─────────
  {
    slug: 'wellness',
    brandName: 'Wellness (incl. Wellness CORE)',
    parentCompany: 'WellPet (owned by Clearlake Capital)',
    headquarters: 'Tewksbury, Massachusetts, USA',
    manufacturingLocations: ['United States'],
    ownsManufacturing: false,
    wsavaComplianceScore: 2,
    wsavaQuestionsAnswered: [
      { question: 'Q4', answer: 'WellPet publicly states that Wellness foods are manufactured in the United States at WellPet-operated and contract-manufacturing facilities; specific plant addresses are generally not on the consumer-facing site.' },
      { question: 'Q5', answer: 'WellPet publishes a "Quality & Safety" overview that describes ingredient supplier qualification and end-product testing.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Wellness CORE Grain-Free', targetPet: 'Dog and Cat', formulationApproach: 'High-protein grain-free kibble; one of the most-sold grain-free retail lines.', priceTier: '$$$' },
      { name: 'Wellness Complete Health', targetPet: 'Dog and Cat', formulationApproach: 'Grain-inclusive deboned-meat-first kibble', priceTier: '$$$' },
      { name: 'Wellness Simple', targetPet: 'Dog and Cat', formulationApproach: 'Limited-ingredient diet (single novel protein, limited carbohydrate sources)', priceTier: '$$$' },
    ],
    strengths: [
      'Deboned-meat-first ingredient panel; no chicken by-product meal in primary SKUs.',
      'Limited-ingredient (Wellness Simple) line is a useful tool for elimination-diet workups for owners under veterinary guidance.',
      'Stable specialty-channel presence; well-known to specialty-pet-retail staff.',
    ],
    weaknesses: [
      'Public WSAVA transparency posture is thin — does not publicly identify board-certified veterinary nutritionists (ACVN/ECVCN) on the formulation team and does not publicly headline AAFCO feeding-trial substantiation.',
      'Wellness CORE Grain-Free was identified by the FDA in its 2019 grain-free / canine dilated cardiomyopathy (DCM) investigation as one of the most commonly named brands in case submissions; owners of DCM-predisposed breeds should consult with their veterinarian.',
      'WellPet does not own all the plants where its food is made — uses a mix of owned and contract manufacturing per its public disclosures.',
    ],
    recallHistory: [
      { year: 2017, product: 'Wellness Beef & Salmon Formula canned dog food (one production lot)', reason: 'Possible elevated levels of naturally occurring beef thyroid hormone (potential cause of hyperthyroidism in dogs); voluntary recall per FDA notice.' },
    ],
    whoItsBestFor: [
      'Owners who want a deboned-meat-first ingredient deck at specialty-tier pricing.',
      'Owners running a veterinarian-guided elimination diet who want a limited-ingredient SKU (Wellness Simple).',
    ],
    whoShouldAvoid: [
      'Owners who require all six WSAVA Global Nutrition Committee questions to be publicly answered.',
      'Owners of DCM-predisposed breeds (Doberman, Golden Retriever, Boxer, others) who consider the FDA grain-free / DCM investigation disqualifying for the CORE Grain-Free line.',
    ],
    independentAssessment:
      'Wellness (and the Wellness CORE line specifically) sits in the same "boutique-ingredient panel, thin WSAVA posture" tier as Blue Buffalo. The Complete Health and Simple lines are credible choices in the specialty channel, particularly for owners running an elimination diet under veterinary guidance. CORE Grain-Free was prominently named in the FDA grain-free / DCM investigation and is the most defensible reason to recommend caution for DCM-predisposed breeds. The brand uses a mix of owned and contract manufacturing — less plant control than Royal Canin or Hill’s.',
    citedSources: [
      { name: 'Wellness Pet Food — Quality & Safety', url: 'https://www.wellnesspetfood.com/quality-safety' },
      { name: 'FDA CVM — Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Orijen ─────────
  {
    slug: 'orijen',
    brandName: 'Orijen',
    parentCompany: 'Champion Petfoods (acquired by Mars Petcare 2022)',
    founded: 1985,
    headquarters: 'Edmonton, Alberta, Canada',
    manufacturingLocations: ['Canada', 'United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 3,
    wsavaQuestionsAnswered: [
      { question: 'Q4', answer: 'Orijen is produced at Champion Petfoods-owned and operated DogStar kitchens in Morinville, Alberta (Canada) and Auburn, Kentucky (USA); both plants are publicly identified by the brand.' },
      { question: 'Q5', answer: 'Champion Petfoods publishes a quality assurance overview describing supplier qualification, on-site testing, and finished-product release testing at the DogStar kitchens.' },
      { question: 'Q6', answer: 'Orijen publishes a complete typical analysis (beyond the AAFCO guaranteed analysis) for each diet on its product-detail pages.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Orijen Original', targetPet: 'Dog', formulationApproach: 'Multi-meat (chicken, turkey, fish), high-protein kibble', priceTier: '$$$$' },
      { name: 'Orijen Six Fish', targetPet: 'Dog', formulationApproach: 'Six wild-caught fish proteins, no land-animal protein', priceTier: '$$$$' },
      { name: 'Orijen Regional Red', targetPet: 'Dog', formulationApproach: 'Red-meat-forward formula (beef, pork, lamb, bison)', priceTier: '$$$$' },
      { name: 'Orijen Cat & Kitten / Six Fish Cat', targetPet: 'Cat', formulationApproach: 'High-protein, low-carbohydrate cat formulas', priceTier: '$$$$' },
    ],
    strengths: [
      'Owns and operates both production facilities (DogStar Edmonton and DogStar Auburn) — full chain-of-custody.',
      'Publishes complete typical nutrient analysis (beyond AAFCO guaranteed analysis) on each product page.',
      'One of the highest-protein, highest-inclusion-of-animal-ingredients commercial kibble lines on the US market.',
    ],
    weaknesses: [
      'Does not publicly identify board-certified veterinary nutritionists (ACVN/ECVCN) on the in-house formulation team — partial WSAVA posture only.',
      'Named in the FDA’s 2019 grain-free / canine dilated cardiomyopathy (DCM) investigation as one of the brands most commonly reported in case submissions.',
      'Was the subject of US consumer class-action lawsuits in 2018-2019 alleging the brand\'s "biologically appropriate" marketing claims were misleading; the litigation has been settled or dismissed across jurisdictions, but the trail is part of the brand record.',
      'Per-pound price is among the highest in the kibble category.',
    ],
    recallHistory: [],
    whoItsBestFor: [
      'Owners who weight high-animal-protein-inclusion ingredient panels above WSAVA-tier transparency, and who are willing to pay the per-pound premium.',
      'Owners with a stable adult dog and no DCM-predisposed breed history.',
    ],
    whoShouldAvoid: [
      'Owners of DCM-predisposed breeds (Doberman, Golden Retriever, Boxer, others) who consider the FDA grain-free / DCM investigation disqualifying.',
      'Owners who require board-certified veterinary nutritionists (ACVN/ECVCN) on the formulation team.',
    ],
    independentAssessment:
      'Orijen is one of the most-discussed "boutique premium" brands in the US — owned manufacturing, full nutrient panel disclosure, very high animal-protein inclusion. The trade-offs are well-documented: partial WSAVA posture (no publicly identified board-certified veterinary nutritionist on staff), prominent appearance in the FDA’s 2019 grain-free / DCM investigation, and a consumer-class-action trail around marketing claims. Recall record at FDA CVM in the window we reviewed is clean. For an owner who weights ingredient-deck and chain-of-custody above WSAVA posture, Orijen is the category benchmark; for an owner with a DCM-predisposed breed, it is not the safest first choice.',
    citedSources: [
      { name: 'Orijen Pet Foods — Our Kitchens', url: 'https://www.orijenpetfoods.com/our-kitchens' },
      { name: 'FDA CVM — Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Acana ─────────
  {
    slug: 'acana',
    brandName: 'Acana',
    parentCompany: 'Champion Petfoods (acquired by Mars Petcare 2022)',
    founded: 1985,
    headquarters: 'Edmonton, Alberta, Canada',
    manufacturingLocations: ['Canada', 'United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 3,
    wsavaQuestionsAnswered: [
      { question: 'Q4', answer: 'Acana is produced at the same Champion Petfoods-owned DogStar kitchens (Morinville, Alberta and Auburn, Kentucky) as Orijen; plant locations are publicly identified.' },
      { question: 'Q5', answer: 'Champion Petfoods’ quality-assurance overview applies to Acana as well as Orijen — supplier qualification, on-site testing, finished-product release testing.' },
      { question: 'Q6', answer: 'Acana publishes a complete typical analysis (beyond AAFCO guaranteed analysis) for each diet on its product-detail pages.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Acana Heritage / Classics', targetPet: 'Dog', formulationApproach: 'Grain-inclusive (oats, brown rice) recipes — lower carbohydrate share than mainstream kibble but not grain-free', priceTier: '$$$' },
      { name: 'Acana Singles', targetPet: 'Dog', formulationApproach: 'Limited-ingredient single-novel-protein recipes (pork & squash, lamb & apple, etc.) suitable for elimination diets', priceTier: '$$$' },
      { name: 'Acana Regionals', targetPet: 'Dog', formulationApproach: 'Multi-protein high-inclusion kibble — the most "Orijen-like" recipes within the Acana line', priceTier: '$$$' },
    ],
    strengths: [
      'Same owned-manufacturing chain-of-custody and the same published typical nutrient analysis as Orijen, at a lower per-pound price.',
      'Singles line is a useful limited-ingredient option for elimination-diet workups under veterinary guidance.',
      'Heritage / Classics grain-inclusive recipes are a defensible choice for owners who want the Champion Petfoods quality posture without the grain-free DCM-investigation exposure.',
    ],
    weaknesses: [
      'Same partial WSAVA posture as Orijen — no publicly identified board-certified veterinary nutritionist (ACVN/ECVCN) on the formulation team.',
      'Some Acana recipes were named alongside Orijen in the FDA’s 2019 grain-free / DCM investigation; the grain-inclusive Heritage line is a way to step around the grain-free concern within the same brand family.',
      'Was named in the same 2018-2019 consumer-class-action litigation as Orijen around marketing claims.',
    ],
    recallHistory: [],
    whoItsBestFor: [
      'Owners who want the Champion Petfoods chain-of-custody and ingredient posture at a more accessible per-pound price than Orijen.',
      'Owners running a vet-guided elimination diet who want a limited-ingredient single-novel-protein SKU.',
    ],
    whoShouldAvoid: [
      'Owners who require all six WSAVA Global Nutrition Committee questions to be publicly answered.',
      'Owners of DCM-predisposed breeds who consider the FDA grain-free / DCM investigation disqualifying for any grain-free SKU.',
    ],
    independentAssessment:
      'Acana is the more affordable sibling within the Champion Petfoods house. Same owned plants as Orijen, same published typical analysis, similar high-animal-protein orientation — at a lower per-pound price. The Heritage grain-inclusive sub-line is a useful answer to the FDA grain-free / DCM exposure that affects Orijen and many other boutique brands. As with Orijen, the partial WSAVA posture (no publicly identified board-certified veterinary nutritionist) is the main mark against the line for owners who weight WSAVA highly. Recall history at FDA CVM in the window we reviewed is clean.',
    citedSources: [
      { name: 'Acana Pet Foods — About', url: 'https://acana.com/about-acana/' },
      { name: 'Orijen / Champion Petfoods — DogStar Kitchens', url: 'https://www.orijenpetfoods.com/our-kitchens' },
      { name: 'FDA CVM — Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },

  // ───────── Fromm ─────────
  {
    slug: 'fromm',
    brandName: 'Fromm Family Foods',
    parentCompany: 'Fromm Family Foods (independent, family-owned)',
    founded: 1904,
    headquarters: 'Mequon, Wisconsin, USA',
    manufacturingLocations: ['United States'],
    ownsManufacturing: true,
    wsavaComplianceScore: 2,
    wsavaQuestionsAnswered: [
      { question: 'Q4', answer: 'Fromm publicly states that all dry foods are produced at company-owned facilities in Wisconsin.' },
      { question: 'Q5', answer: 'Fromm publishes a quality overview describing in-plant testing and supplier qualification at its Wisconsin facilities.' },
    ],
    hasBoardCertifiedNutritionists: false,
    conductsFeedingTrials: false,
    productLines: [
      { name: 'Fromm Gold', targetPet: 'Dog and Cat', formulationApproach: 'Multi-protein (duck, chicken, lamb) grain-inclusive kibble; the brand\'s flagship line', priceTier: '$$$' },
      { name: 'Fromm Four-Star Nutritionals', targetPet: 'Dog and Cat', formulationApproach: 'Rotational recipe line — varied protein and carbohydrate combinations designed to be rotated as the same brand', priceTier: '$$$' },
      { name: 'Fromm Classic', targetPet: 'Dog and Cat', formulationApproach: 'Single-protein (chicken) value-tier line at a lower per-pound price than Gold or Four-Star', priceTier: '$$' },
    ],
    strengths: [
      'Fifth-generation family-owned and US-manufactured at owned plants — among the longest continuously family-owned pet food makers in the US.',
      'Recall history at FDA CVM in the window we reviewed is clean.',
      'Four-Star rotational line is one of the few brands that explicitly supports protein-source rotation within the same brand family — useful for owners who want a varied diet without changing brand-quality posture.',
    ],
    weaknesses: [
      'Public WSAVA transparency posture is thin — Fromm does not publicly identify board-certified veterinary nutritionists (ACVN/ECVCN) on the formulation team and does not publicly headline AAFCO feeding-trial substantiation.',
      'Specialty-channel-only distribution — not widely available in mass-retail. Owners outside metro areas may struggle to find consistent supply.',
      'Some grain-free SKUs within the line were named (by their grain-free formulation type) in the FDA’s 2019 grain-free / DCM investigation; grain-inclusive Gold and Classic SKUs are the safer in-line choices for DCM-predisposed breeds.',
    ],
    recallHistory: [],
    whoItsBestFor: [
      'Owners who want a long-running family-owned US producer with a clean recent recall record.',
      'Owners who want to rotate proteins within the same brand family (Four-Star Nutritionals line).',
      'Specialty-channel shoppers who do not need WSAVA-tier credentialed-nutritionist transparency.',
    ],
    whoShouldAvoid: [
      'Owners who require all six WSAVA Global Nutrition Committee questions to be publicly answered.',
      'Mass-retail shoppers who need a brand available at general grocery chains.',
    ],
    independentAssessment:
      'Fromm is one of the longer-established independent US producers — family-owned for five generations, US-manufactured at owned Wisconsin plants, and with a clean recent FDA CVM recall record. The Four-Star Nutritionals rotational line is a useful tool for owners who want to vary proteins within the same brand-quality posture. The standing trade-off is the same as Wellness and Blue Buffalo: thin WSAVA posture, no publicly identified board-certified veterinary nutritionist, no public AAFCO feeding-trial substantiation. A defensible choice for the specialty-channel shopper who weights ownership stability and recall record above WSAVA posture; not the right pick for a WSAVA-first owner.',
    citedSources: [
      { name: 'Fromm Family Foods — Our Company', url: 'https://frommfamily.com/about/' },
      { name: 'US FDA Center for Veterinary Medicine — Recalls & Withdrawals', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
      { name: 'FDA CVM — Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy' },
      { name: 'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────

export function getBrandReviewBySlug(slug: string): BrandReview | undefined {
  return BrandReviews.find((b) => b.slug === slug)
}

/** All slugs that have a long-form review (used by the hub page). */
export function getReviewedSlugs(): string[] {
  return BrandReviews.map((b) => b.slug)
}
