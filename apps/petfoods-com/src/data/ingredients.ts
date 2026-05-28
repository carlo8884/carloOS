/**
 * Ingredient catalog data — PetFoods.com.
 *
 * One row per ingredient deep-dive page rendered by
 * /ingredients/[slug]/page.tsx. The catalog is reference material — it
 * interprets a label, it does not rank an ingredient "good" or "bad."
 *
 * EDITORIAL RULES for this file:
 *   1. AAFCO definitions are quoted from the 2025 AAFCO Official Publication
 *      Chapter 9 (Feed Ingredient Definitions). When direct quotation is not
 *      practical, the entry references the AAFCO definition number and
 *      summarises faithfully.
 *   2. The PetFood.com transparency rubric for an ingredient is scored
 *      'High' / 'Medium' / 'Low' / 'Verify per product' based on whether
 *      the ingredient name itself carries species disclosure, regulatory
 *      clarity, and predictable nutritional contribution. The rubric is
 *      a disclosure scoring — not a nutritional ranking.
 *   3. `commonIn` references brand slugs that exist in the PetFoods.com
 *      catalog (/data/brands.ts). The relationship is "this ingredient is
 *      commonly listed on this brand's panels at the formula-family
 *      level" — confirmed by reviewing publicly available product panels
 *      on the brand's website. Per-SKU presence varies and must be
 *      verified at the panel.
 *   4. `concernsIfAny` is left empty unless there is a documented
 *      regulatory or peer-reviewed concern. Speculative or marketing-
 *      derived concerns are not included.
 *   5. Sourcing claims are deliberately not fabricated. When the catalog
 *      does not have verified sourcing data, the page surfaces an
 *      explicit "Verify per product" note in the sourcing section.
 */

export type IngredientCategory =
  | 'Protein'
  | 'Carb'
  | 'Fat'
  | 'Fiber'
  | 'Preservative'
  | 'Supplement'
  | 'Concerning'

export type ScoringRubric = 'High' | 'Medium' | 'Low' | 'Verify per product'

export interface Ingredient {
  slug: string
  name: string
  category: IngredientCategory
  /** AAFCO 2025 Official Publication, Chapter 9, definition (quoted or paraphrased) */
  aafcoDefinition: string
  /** AAFCO Chapter 9 section reference, e.g. "§9.10" — when known */
  aafcoSection?: string
  /** PetFood.com transparency rubric */
  scoringRubric: ScoringRubric
  /** 1-2 sentences: why this rubric scoring */
  scoringNote: string
  /** Brand slugs from /data/brands.ts where this ingredient commonly appears */
  commonIn: string[]
  /** 0-3 concerns. Empty array if none. */
  concernsIfAny: string[]
  /** Authoritative citations: AAFCO, FDA CVM, NRC, peer-reviewed */
  citations: string[]
  /** Related ingredient slugs in this catalog (for cross-linking) */
  relatedSlugs?: string[]
  /** Optional cross-link to a sister-site editorial record */
  editorialCrossLink?: string
}

export const Ingredients: Ingredient[] = [
  // ─── PROTEINS ─────────────────────────────────────────────────────────────
  {
    slug: 'chicken-meal',
    name: 'Chicken Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Chicken Meal is the dry rendered product from a combination of chicken flesh and skin with or without accompanying bone, derived from the parts or whole carcasses of chicken or a combination thereof, exclusive of feathers, heads, feet and entrails."',
    aafcoSection: '§9.71',
    scoringRubric: 'High',
    scoringNote:
      'Named-species rendered meal. Carries species disclosure (not generic "meat meal") and delivers concentrated protein on a dry-matter basis. The AAFCO definition is narrow and excludes feathers, heads, feet, and entrails.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'victor', 'fromm', 'merrick', 'wellness', 'nutro', 'nulo'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Animal Food Ingredients Approved for Use in Animal Food',
    ],
    relatedSlugs: ['chicken-by-product-meal', 'salmon-meal', 'beef-meal', 'whitefish-meal', 'chicken-fat'],
  },
  {
    slug: 'chicken-by-product-meal',
    name: 'Chicken By-Product Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Chicken By-Product Meal consists of the ground, rendered, clean parts of the carcass of slaughtered chicken, such as necks, feet, undeveloped eggs and intestines, exclusive of feathers, except in such amounts as might occur unavoidably in good processing practices."',
    aafcoSection: '§9.10',
    scoringRubric: 'High',
    scoringNote:
      'Named-species by-product meal. "By-product" is an AAFCO term, not an indictment — the category covers organ meats and viscera, which are nutritionally dense. Carries species disclosure, unlike generic "meat by-product meal."',
    commonIn: ['purina-pro-plan', 'purina-one', 'iams', 'eukanuba', 'hills-science-diet', 'royal-canin', 'pedigree', 'friskies', 'fancy-feast'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'WSAVA Global Nutrition Committee — Selecting a Pet Food Manufacturer',
    ],
    relatedSlugs: ['chicken-meal', 'beef-meal'],
  },
  {
    slug: 'salmon-meal',
    name: 'Salmon Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Fish Meal is the clean, dried, ground tissue of undecomposed whole fish or fish cuttings, either or both, with or without the extraction of part of the oil." When the species is named — e.g., "Salmon Meal" — the AAFCO product-name and species-identification rules require that the named fish species comprise the source material.',
    aafcoSection: '§9.45 (fish meal); species-naming per AAFCO Model Regulations PF3',
    scoringRubric: 'High',
    scoringNote:
      'Named-species fish meal — carries species disclosure (unlike generic "fish meal"). Contributes long-chain omega-3 fatty acids (EPA/DHA). Preservation status (ethoxyquin vs mixed tocopherols) is a separate disclosure question and is not always declared on the finished-product label when ethoxyquin enters via supplier carryover.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'open-farm', 'wellness', 'nulo', 'solid-gold', 'ziwipeak'],
    concernsIfAny: [
      'Preservation by ethoxyquin at the supplier (fish-meal renderer) can carry over to the finished product without appearing on the consumer-facing label.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'AAFCO Model Pet Food Regulation PF3 (product-name and species-identification rules)',
      'FDA CVM — voluntary industry agreement (1997) lowering maximum ethoxyquin level in finished pet food',
    ],
    relatedSlugs: ['chicken-meal', 'whitefish-meal', 'salmon-oil', 'ethoxyquin'],
  },
  {
    slug: 'beef-meal',
    name: 'Beef Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Meat Meal is the rendered product from mammal tissues, exclusive of any added blood, hair, hoof, horn, hide trimmings, manure, stomach and rumen contents except in such amounts as may occur unavoidably in good processing practices." When the species is named — "Beef Meal" — the source material must be exclusively beef (cattle) tissue.',
    aafcoSection: '§9.59 (meat meal); species-naming per AAFCO Model Regulations',
    scoringRubric: 'High',
    scoringNote:
      'Named-species rendered mammalian meal. Carries species disclosure — distinct from generic "meat meal," which is permitted by AAFCO but does not name the source species. Less common as a primary protein in modern North American formulas than chicken or fish meals.',
    commonIn: ['acana', 'orijen', 'merrick', 'victor', 'taste-of-the-wild', 'natural-balance'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'AAFCO Model Pet Food Regulation PF3',
    ],
    relatedSlugs: ['chicken-meal', 'chicken-by-product-meal'],
  },
  {
    slug: 'whitefish-meal',
    name: 'Whitefish Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Fish Meal is the clean, dried, ground tissue of undecomposed whole fish or fish cuttings, either or both, with or without the extraction of part of the oil." "Whitefish meal" denotes meal sourced from species in the whitefish (Coregonus) family or, in commercial usage, lean (low-oil) white-flesh species; the more specific the species name on the label, the more verifiable the sourcing.',
    aafcoSection: '§9.45',
    scoringRubric: 'Medium',
    scoringNote:
      '"Whitefish" can describe multiple fish species depending on regional usage and supplier. More disclosure than generic "fish meal," less than a single-species name like "Pacific whitefish" or "ocean whitefish." Ethoxyquin carryover is the same supplier-side question as for any fish meal.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'wellness', 'natural-balance'],
    concernsIfAny: [
      'Species coverage of "whitefish" is not narrowly defined; supplier specifications determine the actual species mix.',
      'Ethoxyquin carryover from supplier-preserved fish meal is possible without appearing on the consumer-facing label.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA CVM — voluntary industry agreement (1997) on ethoxyquin in finished pet food',
    ],
    relatedSlugs: ['salmon-meal', 'salmon-oil', 'ethoxyquin'],
  },

  // ─── CARBS ────────────────────────────────────────────────────────────────
  {
    slug: 'brown-rice',
    name: 'Brown Rice',
    category: 'Carb',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Brown Rice is the unpolished rice left after the kernels have been removed." It is the whole rice grain with the bran layer intact, milled only to remove the inedible hull.',
    aafcoSection: '§9.16 (rice products)',
    scoringRubric: 'High',
    scoringNote:
      'Whole-grain cereal with the bran layer intact. AAFCO definition is narrow and specific. Highly digestible, well-tolerated, predictable nutritional contribution — the disclosure is clear and the ingredient is what the name says.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'iams', 'eukanuba', 'wellness', 'nutro', 'merrick', 'natural-balance', 'fromm'],
    concernsIfAny: [
      'Independent third-party testing has documented background arsenic in rice generally (a soil-uptake phenomenon, not specific to pet food); contribution to total dietary intake is generally below thresholds of concern but is a documented background factor.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA — Arsenic in Rice and Rice Products Risk Assessment (FDA, 2016; updated guidance maintained)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['oatmeal', 'sweet-potato'],
  },
  {
    slug: 'oatmeal',
    name: 'Oatmeal',
    category: 'Carb',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Oat Groats are the kernels of oats from which the hulls have been removed." "Oatmeal" in commercial pet-food usage denotes ground oat groats — the whole-grain oat kernel milled to flake or meal form. The AAFCO definition for ground oat groats is the regulatory anchor.',
    aafcoSection: '§9.15 (oat products)',
    scoringRubric: 'High',
    scoringNote:
      'Whole-grain oat product. Source of soluble fiber (beta-glucan). Generally well-tolerated; rare cereal allergen compared with wheat. Disclosure is clear and the ingredient matches the AAFCO definition.',
    commonIn: ['wellness', 'merrick', 'natural-balance', 'fromm', 'blue-buffalo', 'nutro', 'halo', 'whole-earth-farms'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['brown-rice', 'sweet-potato'],
  },
  {
    slug: 'sweet-potato',
    name: 'Sweet Potato',
    category: 'Carb',
    aafcoDefinition:
      'Sweet potato (Ipomoea batatas) is not assigned a unique AAFCO Chapter 9 ingredient number; it is a recognized vegetable ingredient in commercial pet food, used as a starchy carbohydrate source. AAFCO permits its use under the general framework for vegetable ingredients in pet food.',
    aafcoSection: 'General vegetable ingredient framework',
    scoringRubric: 'High',
    scoringNote:
      'Tuber-derived starchy carbohydrate. Higher in dietary fiber and provitamin A than common cereals. Frequently used in grain-free formulations; the AAFCO disclosure is straightforward and the ingredient is what the name says.',
    commonIn: ['taste-of-the-wild', 'wellness', 'merrick', 'natural-balance', 'open-farm', 'halo', 'the-honest-kitchen', 'solid-gold', 'nulo'],
    concernsIfAny: [
      'Used in some grain-free formulations alongside legumes; the FDA CVM open investigation into diet-associated dilated cardiomyopathy is centered on pulse-heavy formulations rather than sweet potato itself.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['brown-rice', 'oatmeal'],
  },

  // ─── FATS ─────────────────────────────────────────────────────────────────
  {
    slug: 'chicken-fat',
    name: 'Chicken Fat',
    category: 'Fat',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Chicken Fat is obtained from the tissue of chickens in the commercial process of rendering or extracting. It shall contain only the fatty matter natural to the product produced under good manufacturing practices and shall contain no additions of free fatty acids or other materials obtained from fat. It must contain not less than 90% total fatty acids and not more than 3% of unsaponifiable matter and not more than 1% of insoluble impurities."',
    aafcoSection: '§9.21',
    scoringRubric: 'High',
    scoringNote:
      'Named-species rendered fat with a strict AAFCO compositional specification. Highly digestible, primary fat source in many dry formulas. Preservation method (mixed tocopherols vs synthetic phenolic preservatives) is the next disclosure question.',
    commonIn: ['acana', 'orijen', 'purina-pro-plan', 'hills-science-diet', 'royal-canin', 'wellness', 'taste-of-the-wild', 'victor', 'merrick', 'nutro', 'fromm', 'nulo'],
    concernsIfAny: [
      'Oxidation in storage is a real concern for any fat ingredient in kibble; preservation system (mixed tocopherols vs BHA/BHT vs ethoxyquin) determines shelf stability and is a separate disclosure.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['salmon-oil', 'bha', 'bht'],
  },
  {
    slug: 'salmon-oil',
    name: 'Salmon Oil',
    category: 'Fat',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: fish oil ingredients are defined under §9.46 ("Fish Oil") and related entries as oil obtained from fish tissue in the rendering or extraction process. "Salmon Oil" is the named-species form, in which the source material is salmon. Long-chain omega-3 fatty acids (EPA and DHA) are the nutritionally relevant fraction.',
    aafcoSection: '§9.46 (fish oil); species-naming per AAFCO Model Regulations PF3',
    scoringRubric: 'High',
    scoringNote:
      'Named-species fish oil — carries species disclosure (unlike generic "fish oil"). Source of EPA and DHA. Inclusion at meaningful levels — and stability against oxidation in stored kibble — matter more than mere ingredient-panel presence.',
    commonIn: ['orijen', 'acana', 'open-farm', 'wellness', 'nulo', 'solid-gold', 'nutro', 'natural-balance', 'the-honest-kitchen'],
    concernsIfAny: [
      'Oxidation in storage is a real concern; a small declared inclusion in a poorly preserved kibble may deliver less bioavailable EPA/DHA than the panel suggests.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Bauer JE. Therapeutic use of fish oils in companion animals. J Am Vet Med Assoc. 2011;239(11):1441-1451.',
    ],
    relatedSlugs: ['chicken-fat', 'salmon-meal', 'whitefish-meal'],
  },

  // ─── CONCERNING (PRESERVATIVES) ──────────────────────────────────────────
  {
    slug: 'bha',
    name: 'BHA (Butylated Hydroxyanisole)',
    category: 'Concerning',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: BHA is listed among the chemical preservatives permitted in animal feed (21 CFR 582.3169) when used at not more than 0.02% of the total fat content of the feed. AAFCO accepts the FDA-permitted use levels.',
    aafcoSection: '§9.7 (chemical preservatives); 21 CFR 582.3169',
    scoringRubric: 'Verify per product',
    scoringNote:
      'AAFCO/FDA-permitted at specified inclusion limits. Classified by the US National Toxicology Program Report on Carcinogens as "reasonably anticipated to be a human carcinogen" at high doses. Regulatory and toxicology positions concern different exposure levels — both statements are true.',
    commonIn: [],
    concernsIfAny: [
      'NTP Report on Carcinogens classifies BHA as "reasonably anticipated to be a human carcinogen" based on animal studies at high doses.',
      'Owners who prefer to avoid BHA have many naturally-preserved alternatives (mixed tocopherols, rosemary extract).',
      'Carryover from supplier-preserved fat or fish meal can occur without appearing on the consumer-facing label.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      '21 CFR 582.3169 — FDA listing of BHA as a chemical preservative permitted in animal feed',
      'US National Toxicology Program — Report on Carcinogens, current edition',
    ],
    relatedSlugs: ['bht', 'ethoxyquin'],
    editorialCrossLink: '/ingredients/preservatives-pet-food',
  },
  {
    slug: 'bht',
    name: 'BHT (Butylated Hydroxytoluene)',
    category: 'Concerning',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: BHT is listed among the chemical preservatives permitted in animal feed (21 CFR 582.3173). AAFCO accepts FDA-permitted use levels for BHT in pet food.',
    aafcoSection: '§9.7 (chemical preservatives); 21 CFR 582.3173',
    scoringRubric: 'Verify per product',
    scoringNote:
      'AAFCO/FDA-permitted synthetic phenolic preservative, often paired with BHA. The toxicology evidence base is similar to BHA — animal studies at high doses raise concerns; regulatory position is that approved use levels in pet food are safe.',
    commonIn: [],
    concernsIfAny: [
      'Often co-formulated with BHA; the toxicology evidence base raises concerns at high doses in animal studies.',
      'Naturally-preserved alternatives (mixed tocopherols, rosemary extract) are widely available.',
      'Supplier carryover from preserved fats can occur without finished-product label disclosure.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      '21 CFR 582.3173 — FDA listing of BHT as a chemical preservative permitted in animal feed',
      'US National Toxicology Program — Report on Carcinogens, current edition',
    ],
    relatedSlugs: ['bha', 'ethoxyquin'],
    editorialCrossLink: '/ingredients/preservatives-pet-food',
  },
  {
    slug: 'ethoxyquin',
    name: 'Ethoxyquin',
    category: 'Concerning',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9 and 21 CFR 573.380: Ethoxyquin is a synthetic antioxidant permitted in animal feed as a preservative of carotene, xanthophylls, vitamins A and E. Following a voluntary industry agreement in 1997, FDA CVM requested manufacturers lower the maximum allowable ethoxyquin level in finished dog food from 150 ppm to 75 ppm.',
    aafcoSection: '§9.7 (chemical preservatives); 21 CFR 573.380',
    scoringRubric: 'Verify per product',
    scoringNote:
      'FDA-permitted at restricted levels. Historically common in fish-meal preservation at the supplier (renderer) stage. The carryover problem is the key disclosure issue: a finished pet food may contain ethoxyquin from a preserved fish-meal supplier without the finished-product label listing it, because the manufacturer did not add it.',
    commonIn: [],
    concernsIfAny: [
      'Carryover from supplier-preserved fish meal: ethoxyquin can be present in the finished product without appearing on the ingredient panel.',
      'FDA CVM voluntary industry agreement (1997) lowered the maximum allowable level — the regulatory posture has tightened over time, reflecting accumulated concerns.',
      'Brands marketing as "ethoxyquin-free" should be able to substantiate the claim at the supplier level (not just the manufacturing-add level).',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      '21 CFR 573.380 — FDA permitted use of ethoxyquin in animal feed',
      'FDA CVM — 1997 voluntary industry agreement on ethoxyquin maximum level in finished pet food',
    ],
    relatedSlugs: ['bha', 'bht', 'salmon-meal', 'whitefish-meal'],
    editorialCrossLink: '/ingredients/preservatives-pet-food',
  },

  // ─── SUPPLEMENTS ─────────────────────────────────────────────────────────
  {
    slug: 'taurine',
    name: 'Taurine',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025: taurine is a sulfur-containing amino acid recognized in the AAFCO Cat Food Nutrient Profile as essential (minimum 0.10% in dry/extruded foods; 0.20% in wet/canned foods on a dry-matter basis). It is not listed as a separately required nutrient in the AAFCO Dog Food Nutrient Profile.',
    aafcoSection: 'AAFCO Cat Food Nutrient Profile (taurine minimums)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-essential for cats — cats cannot synthesize sufficient taurine endogenously. For dogs, taurine status became a focus of the FDA CVM 2018 open investigation into atypical dilated cardiomyopathy in dogs eating legume-heavy grain-free diets; the question remains active in veterinary cardiology literature.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'fancy-feast', 'friskies', 'tiki-pets', 'fromm', 'nulo', 'wellness', 'orijen'],
    concernsIfAny: [
      'Open FDA CVM investigation into diet-associated DCM in dogs has raised questions about taurine status on legume-heavy grain-free diets; supplementation alone may not address the underlying mechanism.',
    ],
    citations: [
      'AAFCO Official Publication 2025 — Cat Food Nutrient Profile',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation, 2018-)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Freeman LM et al. Diet-associated dilated cardiomyopathy in dogs: what do we know? J Am Vet Med Assoc. 2018;253(11):1390-1394.',
    ],
    relatedSlugs: ['salmon-meal'],
  },
  {
    slug: 'glucosamine',
    name: 'Glucosamine',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025: glucosamine (as glucosamine hydrochloride or glucosamine sulfate) is recognized for use in animal feed as an ingredient. AAFCO does not require glucosamine in either the Dog or the Cat Nutrient Profile — it is a functional supplement, not an AAFCO-essential nutrient.',
    aafcoSection: 'AAFCO ingredient definitions for glucosamine HCl / glucosamine sulfate',
    scoringRubric: 'Medium',
    scoringNote:
      'Functional supplement, often paired with chondroitin sulfate, marketed for joint support. The clinical evidence for therapeutic effect at typical pet-food inclusion levels is mixed; sustained effect in published trials generally requires therapeutic dosing well above what kibble inclusion delivers.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'wellness', 'merrick', 'nutro', 'iams', 'eukanuba', 'fromm'],
    concernsIfAny: [
      'Typical kibble inclusion levels are well below therapeutic dosing in the veterinary literature; "contains glucosamine" on a label is not equivalent to a therapeutic dose.',
    ],
    citations: [
      'AAFCO Official Publication 2025 — Feed Ingredient Definitions',
      'Aragon CL et al. Systematic review of clinical trials of treatments for osteoarthritis in dogs. J Am Vet Med Assoc. 2007;230(4):514-521.',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['taurine'],
  },
]

// ─── Selectors ────────────────────────────────────────────────────────────

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return Ingredients.find((i) => i.slug === slug)
}

export function getRelatedIngredients(slug: string): Ingredient[] {
  const ingredient = getIngredientBySlug(slug)
  if (!ingredient || !ingredient.relatedSlugs) return []
  return ingredient.relatedSlugs
    .map((s) => getIngredientBySlug(s))
    .filter((i): i is Ingredient => i !== undefined)
}

export function getIngredientsByCategory(category: IngredientCategory): Ingredient[] {
  return Ingredients.filter((i) => i.category === category)
}

export const INGREDIENT_CATEGORY_ORDER: IngredientCategory[] = [
  'Protein',
  'Carb',
  'Fat',
  'Fiber',
  'Preservative',
  'Supplement',
  'Concerning',
]
