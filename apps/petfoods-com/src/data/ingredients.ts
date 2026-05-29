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
    relatedSlugs: ['taurine', 'chondroitin'],
  },

  // ─── WAVE 2: PROTEINS (PLANT + ALTERNATIVE) ──────────────────────────────
  {
    slug: 'corn-gluten-meal',
    name: 'Corn Gluten Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Corn Gluten Meal is the dried residue from corn after the removal of the larger part of the starch and germ, and the separation of the bran by the process employed in the wet milling manufacture of corn starch or syrup, or by enzymatic treatment of the endosperm." It is a concentrated plant-protein ingredient (typically 60% crude protein on a dry-matter basis).',
    aafcoSection: '§9.20 (corn products)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-defined plant protein concentrate. Often mischaracterized in pet-food marketing as a "filler" — it is not a filler; it is a protein-dense ingredient. The relevant disclosure question is amino-acid completeness, not panel order: plant proteins generally have lower digestible-essential-amino-acid scores than animal proteins, and corn gluten meal is limited in lysine.',
    commonIn: ['purina-pro-plan', 'purina-one', 'iams', 'eukanuba', 'hills-science-diet', 'royal-canin', 'pedigree'],
    concernsIfAny: [
      'Amino-acid limitation: corn gluten meal is low in lysine relative to the AAFCO amino-acid profiles; formulators address this by combining it with complementary proteins or by adding crystalline lysine.',
      'Marketing characterization as a "filler" is inaccurate — it is a protein concentrate, not a filler — but the panel-order question (whether protein contribution is plant-anchored versus animal-anchored) is a real formulation question.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on protein quality and ingredient evaluation',
    ],
    relatedSlugs: ['soybean-meal', 'pea-protein', 'potato-protein'],
  },
  {
    slug: 'soybean-meal',
    name: 'Soybean Meal',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Soybean Meal is the product obtained by grinding the flakes which remain after removal of most of the oil from soybeans by a solvent or mechanical extraction process." Standard dehulled soybean meal is approximately 48% crude protein on an as-fed basis.',
    aafcoSection: '§9.85 (soybean products)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-defined plant protein concentrate with an unusually complete essential amino-acid profile among plant proteins. Allergy concerns are widely discussed in pet-food marketing; the veterinary dermatology literature lists soy as a less common food allergen in dogs than beef, dairy, chicken, wheat, or lamb. Disclosure is clear and the AAFCO definition is narrow.',
    commonIn: ['purina-pro-plan', 'purina-one', 'iams', 'eukanuba', 'hills-science-diet', 'pedigree', 'beneful'],
    concernsIfAny: [
      'Reported food allergy in dogs is possible but is less frequent than allergy to beef, dairy, chicken, wheat, or lamb (per veterinary dermatology literature); marketing characterization as a major allergen overstates the population-level evidence.',
      'For dogs with diagnosed soy hypersensitivity (rare), strict avoidance is appropriate; for the general population, AAFCO permitted use and clinical evidence support soybean meal as an acceptable protein source.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'Mueller RS, Olivry T, Prélaud P. Critically appraised topic on adverse food reactions of companion animals (2): common food allergen sources in dogs and cats. BMC Vet Res. 2016;12:9.',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog',
    ],
    relatedSlugs: ['corn-gluten-meal', 'pea-protein', 'potato-protein'],
  },
  {
    slug: 'potato-protein',
    name: 'Potato Protein',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: potato protein is the concentrated protein fraction recovered from potato (Solanum tuberosum) processing waters, typically by heat coagulation or acid precipitation. Standard dehydrated potato protein concentrate is approximately 75-80% crude protein on a dry-matter basis.',
    aafcoSection: 'AAFCO recognized plant protein concentrate',
    scoringRubric: 'Medium',
    scoringNote:
      'Concentrated plant protein commonly used in grain-free formulations to anchor protein percentage without legumes. Disclosure is clear, but consumers often misread "potato protein" as the same nutritional contribution as a comparable inclusion of animal protein — the digestibility and amino-acid profile differ. The FDA CVM 2018 DCM investigation centers on pulse-heavy formulations; potato protein itself has not been singled out.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'natural-balance', 'merrick'],
    concernsIfAny: [
      'Amino-acid profile differs from animal proteins; combining with complementary proteins or supplemental amino acids is standard formulation practice.',
      'Used in some grain-free formulations alongside pulses; the FDA CVM open investigation focuses on pulse density rather than on potato protein specifically.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['pea-protein', 'corn-gluten-meal', 'soybean-meal', 'legume-blends'],
  },
  {
    slug: 'pea-protein',
    name: 'Pea Protein',
    category: 'Protein',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: pea protein is the concentrated protein fraction isolated from yellow field peas (Pisum sativum), typically by dry milling and air classification or by wet extraction. Standard pea protein concentrate is approximately 75-85% crude protein on a dry-matter basis.',
    aafcoSection: 'AAFCO recognized plant protein concentrate',
    scoringRubric: 'Verify per product',
    scoringNote:
      'Concentrated plant protein widely used in grain-free formulations. The FDA CVM 2018 open investigation into non-hereditary dilated cardiomyopathy in dogs has focused on grain-free formulations containing high proportions of pulses (peas, lentils, chickpeas, faba beans). Pea protein concentrate is one of the ingredients within the scope of that investigation. The investigation remains open and FDA has not established a causal mechanism.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'merrick', 'natural-balance', 'wellness'],
    concernsIfAny: [
      'FDA CVM open investigation (2018-) into non-hereditary DCM in dogs has focused on pulse-heavy grain-free formulations; pea protein is one of the ingredients within scope.',
      'FDA has not established a causal mechanism or a safe inclusion threshold; the investigation remains open and the agency continues to report cases.',
      'Amino-acid profile is reasonably complete for a plant protein but is typically combined with complementary proteins in formulation.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation, 2018-)',
      'Freeman LM et al. Diet-associated dilated cardiomyopathy in dogs: what do we know? J Am Vet Med Assoc. 2018;253(11):1390-1394.',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on grain-free diets and DCM',
    ],
    relatedSlugs: ['potato-protein', 'legume-blends', 'taurine', 'l-carnitine'],
    editorialCrossLink: '/ingredients/grain-free-dcm-pet-food',
  },
  {
    slug: 'legume-blends',
    name: 'Legume Blends (Peas, Lentils, Chickpeas)',
    category: 'Fiber',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: peas, lentils, and chickpeas (pulses) are recognized as ingredients under their specific names; "legume blend" is a market term for formulations using two or more pulses in combination. AAFCO does not assign a single ingredient definition for "legume blend"; each component is defined separately.',
    aafcoSection: 'General pulse ingredient framework',
    scoringRubric: 'Verify per product',
    scoringNote:
      'Pulse ingredients (peas, lentils, chickpeas, faba beans) appear frequently in grain-free formulations as both carbohydrate and protein contributors. The FDA Center for Veterinary Medicine opened an investigation in 2018 into a reported correlation between non-hereditary dilated cardiomyopathy in dogs and grain-free diets with high proportions of pulses. FDA has not established a causal mechanism; the investigation is open.',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'merrick', 'natural-balance', 'wellness', 'nulo', 'solid-gold'],
    concernsIfAny: [
      'FDA CVM open investigation (2018-) into non-hereditary DCM in dogs is centered on grain-free formulations with high pulse density.',
      'FDA has not identified a single mechanism (taurine deficiency, bioavailability, lectin content, fiber-mineral interactions are all hypotheses); supplementation with taurine alone has not been shown to address the underlying mechanism.',
      'Tufts Cummings School of Veterinary Medicine has published practitioner-facing summaries advising caution with pulse-heavy grain-free diets pending resolution of the investigation.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation, 2018-)',
      'Freeman LM et al. Diet-associated dilated cardiomyopathy in dogs: what do we know? J Am Vet Med Assoc. 2018;253(11):1390-1394.',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on grain-free diets and DCM',
    ],
    relatedSlugs: ['pea-protein', 'potato-protein', 'taurine', 'sweet-potato'],
    editorialCrossLink: '/ingredients/grain-free-dcm-pet-food',
  },

  // ─── WAVE 2: CARBS ───────────────────────────────────────────────────────
  {
    slug: 'wheat-flour',
    name: 'Wheat Flour',
    category: 'Carb',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Wheat Flour is a product obtained in the manufacture of wheat flour and consists primarily of finely ground, refined wheat that may contain wheat germ and bran." Refined wheat flour is the milled endosperm with most of the bran and germ removed; "whole wheat flour" preserves the bran and germ.',
    aafcoSection: '§9.97 (wheat products)',
    scoringRubric: 'Medium',
    scoringNote:
      'AAFCO-defined cereal carbohydrate. Refined wheat flour is lower in fiber and micronutrients than whole-wheat alternatives. Wheat is among the more frequently reported canine food allergens (per veterinary dermatology literature), though prevalence is still well below the marketing-implied levels in grain-free positioning.',
    commonIn: ['pedigree', 'beneful', 'cesar', 'friskies', 'fancy-feast', 'greenies'],
    concernsIfAny: [
      'Wheat is among the more commonly reported canine food allergens in the veterinary dermatology literature (after beef, dairy, chicken); for diagnosed cases, strict avoidance is appropriate.',
      'Refined wheat flour delivers fewer micronutrients than whole-wheat alternatives.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'Mueller RS, Olivry T, Prélaud P. Critically appraised topic on adverse food reactions of companion animals (2). BMC Vet Res. 2016;12:9.',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['rice-flour', 'tapioca-starch', 'brown-rice', 'oatmeal'],
  },
  {
    slug: 'rice-flour',
    name: 'Rice Flour',
    category: 'Carb',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Rice Flour is the finely ground meal obtained after milling rice." It is the milled rice grain ground to a flour consistency; nutritional profile depends on whether the source is brown rice (whole grain) or white rice (refined).',
    aafcoSection: '§9.16 (rice products)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-defined cereal carbohydrate. Rice is a comparatively rare allergen in dogs and cats. The same background arsenic context that applies to brown rice (soil-uptake phenomenon) applies to rice flour; contribution to total dietary intake at typical pet-food inclusion levels is generally below thresholds of concern.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'iams', 'eukanuba', 'natural-balance'],
    concernsIfAny: [
      'Background arsenic in rice is a documented soil-uptake phenomenon; contribution to pet diet at typical inclusion is generally below thresholds of concern but is a documented background factor (see FDA arsenic-in-rice guidance).',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA — Arsenic in Rice and Rice Products Risk Assessment (FDA, 2016; updated guidance maintained)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['brown-rice', 'wheat-flour', 'tapioca-starch'],
  },
  {
    slug: 'tapioca-starch',
    name: 'Tapioca Starch',
    category: 'Carb',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: tapioca starch (also called cassava starch) is the starch extracted from the root tuber of the cassava plant (Manihot esculenta). It is a highly refined starch with minimal protein, fat, or fiber and is recognized for use as a carbohydrate source and binder in animal feed.',
    aafcoSection: 'AAFCO recognized starch ingredient',
    scoringRubric: 'Medium',
    scoringNote:
      'AAFCO-recognized refined starch commonly used as a grain-free carbohydrate or as a kibble binder. Nutritionally it is essentially pure carbohydrate (negligible protein, fat, fiber, or micronutrients). Disclosure is clear; the question for the reader is whether the formulation relies on tapioca as a primary carbohydrate (in which case fiber and micronutrient contribution comes from other ingredients) or as a binder (small inclusion).',
    commonIn: ['acana', 'orijen', 'taste-of-the-wild', 'natural-balance', 'merrick'],
    concernsIfAny: [
      'Refined starch — minimal protein, fat, fiber, or micronutrient contribution; when used as a primary carb, those contributions must come from other ingredients.',
      'Used in some grain-free formulations; the FDA CVM open DCM investigation focuses on pulses, not on tapioca starch.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Questions & Answers: FDA\'s Work on Potential Causes of Non-Hereditary DCM in Dogs (open investigation)',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['rice-flour', 'potato-protein', 'sweet-potato'],
  },

  // ─── WAVE 2: FIBER + FUNCTIONAL VEGETABLES ───────────────────────────────
  {
    slug: 'pumpkin',
    name: 'Pumpkin',
    category: 'Fiber',
    aafcoDefinition:
      'Pumpkin (Cucurbita pepo, C. maxima) is recognized as a vegetable ingredient in commercial pet food under the general AAFCO framework for vegetable ingredients. Dried or canned pumpkin contributes soluble and insoluble fiber, with the soluble fraction (pectin) supporting stool consistency.',
    aafcoSection: 'General vegetable ingredient framework',
    scoringRubric: 'High',
    scoringNote:
      'Functional vegetable ingredient. The fiber contribution is small at typical pet-food inclusion levels, but the functional reputation (stool consistency support, mild diarrhea or constipation modulation) is consistent with the fiber chemistry. Disclosure is straightforward.',
    commonIn: ['wellness', 'merrick', 'natural-balance', 'open-farm', 'halo', 'the-honest-kitchen', 'fromm', 'nulo'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on fiber and gastrointestinal health',
    ],
    relatedSlugs: ['sweet-potato', 'carrots', 'spinach'],
  },
  {
    slug: 'carrots',
    name: 'Carrots',
    category: 'Fiber',
    aafcoDefinition:
      'Carrots (Daucus carota) are recognized as a vegetable ingredient in commercial pet food under the general AAFCO framework for vegetable ingredients. The relevant nutritional contributions are beta-carotene (a provitamin A precursor) and dietary fiber.',
    aafcoSection: 'General vegetable ingredient framework',
    scoringRubric: 'High',
    scoringNote:
      'Functional vegetable ingredient providing beta-carotene and fiber. Dogs can convert beta-carotene to retinol (vitamin A); cats cannot do so efficiently and require preformed vitamin A from animal sources or supplementation. Marketing-front mentions of carrots typically reflect a small inclusion; the panel order indicates the relative contribution.',
    commonIn: ['wellness', 'merrick', 'natural-balance', 'open-farm', 'fromm', 'halo', 'the-honest-kitchen', 'blue-buffalo'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'AAFCO Dog Food Nutrient Profile and Cat Food Nutrient Profile (vitamin A requirements differ by species)',
    ],
    relatedSlugs: ['pumpkin', 'sweet-potato', 'spinach'],
  },
  {
    slug: 'spinach',
    name: 'Spinach',
    category: 'Fiber',
    aafcoDefinition:
      'Spinach (Spinacia oleracea) is recognized as a leafy vegetable ingredient in commercial pet food under the general AAFCO framework for vegetable ingredients. Spinach contains naturally occurring oxalates (oxalic acid), which can bind calcium and other divalent minerals.',
    aafcoSection: 'General vegetable ingredient framework',
    scoringRubric: 'Medium',
    scoringNote:
      'Leafy vegetable ingredient. Contains naturally occurring oxalates; for dogs with a documented history of calcium oxalate urolithiasis, veterinary nutritionists typically advise caution with chronically high-oxalate diets. At typical small-inclusion levels in commercial pet food, spinach contribution to total dietary oxalate is generally modest, but the chemistry is the basis for the conservative posture in stone-forming patients.',
    commonIn: ['wellness', 'merrick', 'open-farm', 'halo', 'the-honest-kitchen'],
    concernsIfAny: [
      'Naturally occurring oxalates: for dogs with a documented history of calcium oxalate urolithiasis, the treating veterinarian or veterinary nutritionist may advise limiting chronically high-oxalate ingredients.',
      'Routine inclusion at small levels in maintenance diets for dogs without stone history is generally not a clinical concern, but the chemistry is documented.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on dietary management of urolithiasis',
    ],
    relatedSlugs: ['carrots', 'pumpkin', 'blueberries'],
  },
  {
    slug: 'blueberries',
    name: 'Blueberries',
    category: 'Fiber',
    aafcoDefinition:
      'Blueberries (Vaccinium spp.) are recognized as a fruit ingredient in commercial pet food under the general AAFCO framework for vegetable and fruit ingredients. Blueberries contain anthocyanin pigments and other polyphenolic compounds.',
    aafcoSection: 'General vegetable/fruit ingredient framework',
    scoringRubric: 'High',
    scoringNote:
      'Fruit ingredient typically included at small panel-order positions (i.e., a small percentage by weight). Marketing-front claims about antioxidant effects in dogs and cats outpace the controlled-trial evidence: in vitro antioxidant activity is well documented, but clinical outcomes at the inclusion levels used in commercial pet food are not well characterized in the veterinary literature.',
    commonIn: ['blue-buffalo', 'wellness', 'merrick', 'natural-balance', 'open-farm', 'fromm', 'halo', 'orijen', 'acana'],
    concernsIfAny: [
      'Marketing-front antioxidant claims at typical small inclusion levels are not well substantiated by controlled clinical trials in dogs or cats; in vitro antioxidant chemistry is documented, but in vivo outcomes are not.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on antioxidant claims in pet food',
    ],
    relatedSlugs: ['cranberries', 'carrots', 'pumpkin'],
  },
  {
    slug: 'cranberries',
    name: 'Cranberries',
    category: 'Fiber',
    aafcoDefinition:
      'Cranberries (Vaccinium macrocarpon) are recognized as a fruit ingredient in commercial pet food under the general AAFCO framework for vegetable and fruit ingredients. Cranberries contain proanthocyanidins, the polyphenolic compounds investigated for urinary-tract effects in humans.',
    aafcoSection: 'General vegetable/fruit ingredient framework',
    scoringRubric: 'Medium',
    scoringNote:
      'Fruit ingredient with marketing positioning around urinary-tract health. The human literature on cranberry and urinary-tract infection prevention is mixed and centers on therapeutic doses of A-type proanthocyanidins, well above what pet-food inclusion delivers. The veterinary literature on cranberry for canine or feline UTI prevention is limited; AAFCO does not recognize a therapeutic UTI-prevention claim for cranberry in pet food.',
    commonIn: ['blue-buffalo', 'wellness', 'merrick', 'natural-balance', 'halo', 'fromm', 'nulo'],
    concernsIfAny: [
      'Marketing-front urinary-tract claims at typical pet-food inclusion levels are not supported by AAFCO as a therapeutic claim; the veterinary clinical evidence base is limited and does not parallel the human therapeutic-dose literature.',
      'For diagnosed urinary-tract conditions, a treating veterinarian sets the management plan; ingredient-panel presence is not a treatment.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on functional ingredient claims',
    ],
    relatedSlugs: ['blueberries', 'yucca-schidigera'],
  },

  // ─── WAVE 2: FATS ────────────────────────────────────────────────────────
  {
    slug: 'flaxseed',
    name: 'Flaxseed',
    category: 'Fat',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: "Flaxseed (Linseed) is the seed of the flax plant (Linum usitatissimum)." It is recognized for use in pet food as a source of dietary fiber and alpha-linolenic acid (ALA), the plant-derived omega-3 fatty acid.',
    aafcoSection: '§9.43 (flax/linseed)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-defined seed ingredient providing ALA (alpha-linolenic acid) and soluble fiber. Conversion of ALA to the long-chain omega-3s EPA and DHA is limited in dogs and very limited in cats; flaxseed is not a substitute for marine-derived EPA/DHA when those long-chain omega-3s are the nutritional target. The fiber contribution is real.',
    commonIn: ['wellness', 'merrick', 'natural-balance', 'fromm', 'nutro', 'blue-buffalo', 'halo'],
    concernsIfAny: [
      'Conversion of plant-derived ALA to long-chain EPA/DHA is limited in dogs and very limited in cats; for therapeutic or supplemental EPA/DHA targets, marine-derived sources (fish oil, salmon oil, krill oil) are the relevant ingredient.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Bauer JE. Therapeutic use of fish oils in companion animals. J Am Vet Med Assoc. 2011;239(11):1441-1451.',
    ],
    relatedSlugs: ['salmon-oil', 'fish-oil', 'chicken-fat'],
  },
  {
    slug: 'fish-oil',
    name: 'Fish Oil (Generic)',
    category: 'Fat',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9 §9.46: "Fish Oil is oil obtained from fish tissue in the rendering or extraction process." When the species is not named — i.e., "fish oil" without a qualifier — the AAFCO definition does not commit the manufacturer to a single species and the source may be one species, a combination (commonly menhaden, anchovy, sardine), or supplier-determined.',
    aafcoSection: '§9.46 (fish oil)',
    scoringRubric: 'Medium',
    scoringNote:
      'Generic AAFCO-defined fish oil — source of EPA and DHA. Lower disclosure than named-species fish oil (e.g., "salmon oil"). Oxidation stability and supplier-side preservation (mixed tocopherols vs ethoxyquin) are the next disclosure questions; a published omega-3 guaranteed-analysis minimum is more informative than panel presence alone.',
    commonIn: ['purina-pro-plan', 'hills-science-diet', 'royal-canin', 'iams', 'eukanuba', 'pedigree', 'fromm', 'nutro'],
    concernsIfAny: [
      'Species not disclosed by the ingredient name "fish oil"; if species disclosure matters, look for a named-species form (salmon oil, anchovy oil, herring oil).',
      'Oxidation in storage is a real concern for any polyunsaturated fat in kibble; preservation system at the supplier (mixed tocopherols vs ethoxyquin) determines stability.',
      'Supplier-side ethoxyquin carryover is possible without the finished-product label disclosing it.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Bauer JE. Therapeutic use of fish oils in companion animals. J Am Vet Med Assoc. 2011;239(11):1441-1451.',
      'FDA CVM — voluntary industry agreement (1997) on ethoxyquin maximum level in finished pet food',
    ],
    relatedSlugs: ['salmon-oil', 'flaxseed', 'ethoxyquin', 'chicken-fat'],
  },

  // ─── WAVE 2: SUPPLEMENTS ─────────────────────────────────────────────────
  {
    slug: 'chondroitin',
    name: 'Chondroitin Sulfate',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: chondroitin sulfate is recognized for use in animal feed as a joint-support ingredient, typically derived from bovine, porcine, or marine cartilage. AAFCO does not require chondroitin sulfate in either the Dog or the Cat Nutrient Profile — it is a functional supplement, not an AAFCO-essential nutrient.',
    aafcoSection: 'AAFCO ingredient definition for chondroitin sulfate',
    scoringRubric: 'Medium',
    scoringNote:
      'Functional supplement, frequently paired with glucosamine in joint-support formulations. Systematic reviews of canine osteoarthritis treatments report inconsistent evidence for glucosamine-chondroitin combinations at therapeutic dosing. Typical pet-food inclusion levels are below the therapeutic dosing levels used in clinical trials.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'wellness', 'merrick', 'nutro', 'iams', 'eukanuba', 'fromm'],
    concernsIfAny: [
      'Typical kibble inclusion levels are well below therapeutic dosing in the veterinary literature; "contains chondroitin" on a label is not equivalent to a therapeutic dose.',
      'Source disclosure (bovine, porcine, marine) is not consistently provided on the consumer-facing label.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'Aragon CL et al. Systematic review of clinical trials of treatments for osteoarthritis in dogs. J Am Vet Med Assoc. 2007;230(4):514-521.',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['glucosamine'],
  },
  {
    slug: 'l-carnitine',
    name: 'L-Carnitine',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025: L-carnitine is a quaternary amine derived from the amino acids lysine and methionine; it is recognized for use in animal feed as a supplemental ingredient. It plays a role in fatty-acid transport into mitochondria for beta-oxidation. AAFCO does not list L-carnitine as a required nutrient in either the Dog or the Cat Nutrient Profile.',
    aafcoSection: 'AAFCO ingredient definition for L-carnitine',
    scoringRubric: 'Medium',
    scoringNote:
      'Functional supplement with documented physiological roles in fatty-acid metabolism and cardiac muscle energetics. Used in some weight-management and cardiac-support formulations. Clinical evidence in dogs is mixed but more supportive than for joint supplements; AAFCO does not require it. Some breeds (notably Boxers and Cocker Spaniels) have documented carnitine-responsive dilated cardiomyopathy phenotypes; the treating veterinarian sets therapeutic dosing.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'iams', 'eukanuba', 'wellness'],
    concernsIfAny: [
      'Typical kibble inclusion levels are below the therapeutic dosing levels used in the veterinary cardiology literature for carnitine-responsive DCM in predisposed breeds; treatment dosing is a veterinary decision.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
      'Pion PD et al. Myocardial failure in cats associated with low plasma taurine — a reversible cardiomyopathy. Science. 1987;237(4816):764-768.',
      'Tufts Cummings School of Veterinary Medicine — Petfoodology blog, articles on cardiac diet management',
    ],
    relatedSlugs: ['taurine', 'pea-protein', 'legume-blends'],
  },
  {
    slug: 'yucca-schidigera',
    name: 'Yucca Schidigera Extract',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025, Chapter 9: yucca schidigera extract is recognized for use in animal feed as a supplemental ingredient. It contains saponins and polyphenolic compounds and is marketed in pet food for fecal odor reduction.',
    aafcoSection: 'AAFCO ingredient definition for yucca schidigera extract',
    scoringRubric: 'Medium',
    scoringNote:
      'Functional supplement with marketing positioning around fecal and urinary odor reduction (claimed mechanism: ammonia binding via saponins). The published evidence is limited; some controlled trials in livestock have reported reductions in ammonia emission, but published evidence in companion animals is sparser. Disclosure is straightforward.',
    commonIn: ['wellness', 'merrick', 'natural-balance', 'halo', 'fromm'],
    concernsIfAny: [
      'Marketing-front odor-reduction claims at typical inclusion levels rest more on the livestock literature than on controlled companion-animal trials.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['cranberries'],
  },
  {
    slug: 'choline-chloride',
    name: 'Choline Chloride',
    category: 'Supplement',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025: choline chloride is a recognized source of choline, an essential nutrient required for hepatic function, lipid transport, and neurotransmitter synthesis. AAFCO Dog and Cat Food Nutrient Profiles list minimum choline requirements (1,200 mg/kg for adult dogs; 2,400 mg/kg for adult cats, on a dry-matter basis).',
    aafcoSection: 'AAFCO Dog Food Nutrient Profile and Cat Food Nutrient Profile (choline minimums)',
    scoringRubric: 'High',
    scoringNote:
      'AAFCO-required nutrient delivered most commonly via the supplemental form choline chloride. Its presence on the ingredient panel is not a marketing flourish — it is a routine formulation step to meet the AAFCO minimum. Choline is essential and the ingredient is what the name says.',
    commonIn: ['hills-science-diet', 'royal-canin', 'purina-pro-plan', 'iams', 'eukanuba', 'wellness', 'merrick', 'fromm', 'nutro', 'natural-balance'],
    concernsIfAny: [],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'AAFCO Official Publication 2025 — Dog Food Nutrient Profile and Cat Food Nutrient Profile',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['taurine'],
  },

  // ─── WAVE 2: CONCERNING (FLAVORS) ────────────────────────────────────────
  {
    slug: 'natural-flavors',
    name: 'Natural Flavors',
    category: 'Concerning',
    aafcoDefinition:
      'Per AAFCO Official Publication 2025: "natural flavor" / "natural flavoring" is recognized as an ingredient category in animal feed and is most commonly derived in pet food from hydrolyzed animal tissue ("digest") — animal protein chemically or enzymatically broken down to enhance palatability. The AAFCO definition does not require species disclosure for the term "natural flavor" alone; specific subforms such as "chicken digest" or "animal digest" carry more disclosure.',
    aafcoSection: 'AAFCO ingredient definitions for animal digest and natural flavorings',
    scoringRubric: 'Verify per product',
    scoringNote:
      'AAFCO-permitted ingredient category. The term itself does not commit the manufacturer to a specific source or species; common pet-food sources include hydrolyzed animal digest, herb extracts, or yeast-derived flavorings. The disclosure question is whether the panel uses the generic term "natural flavor" or a more specific form such as "chicken digest." Neither form is a safety concern — the question is what the reader can interpret from the label.',
    commonIn: ['purina-pro-plan', 'purina-one', 'iams', 'eukanuba', 'pedigree', 'beneful', 'friskies', 'fancy-feast', 'cesar'],
    concernsIfAny: [
      'No species disclosure when the ingredient is listed only as "natural flavor"; for allergy-management diets, more specific forms (named-species digest) provide more disclosure.',
      'Marketing characterization as a hidden ingredient overstates the regulatory picture: AAFCO permits the term, and the underlying material is typically hydrolyzed animal tissue used as a palatant.',
    ],
    citations: [
      'AAFCO Official Publication 2025, Chapter 9 Feed Ingredient Definitions',
      'FDA Center for Veterinary Medicine — Animal Food Ingredients Approved for Use in Animal Food',
      'NRC, Nutrient Requirements of Dogs and Cats (2006)',
    ],
    relatedSlugs: ['chicken-by-product-meal', 'soybean-meal'],
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
