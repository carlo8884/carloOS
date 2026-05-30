/**
 * Life-stage catalog data — PetFood.com.
 *
 * One row per life-stage deep-dive page rendered by
 * /life-stage/[slug]/page.tsx. The catalog is reference material — it
 * interprets a label (AAFCO statement, nutrient profile) and surfaces
 * what label readers should look for. It does not rank a brand "best."
 *
 * EDITORIAL RULES (mirrors the ingredients catalog in petfoods-com):
 *   1. The AAFCO nutritional adequacy statement is quoted, where a
 *      formal life-stage profile exists, from the AAFCO 2025 Official
 *      Publication Chapter 6 (Model Pet Food Regulations) and the
 *      associated Dog/Cat Food Nutrient Profiles. Where AAFCO has not
 *      defined a formal profile (notably "senior"), that gap is named
 *      explicitly.
 *   2. Nutrient minima/maxima referenced in the summary are from the
 *      AAFCO Dog Food Nutrient Profile, AAFCO Cat Food Nutrient
 *      Profile, or NRC (National Research Council) 2006 — never
 *      fabricated. Where a precise figure is not common knowledge in
 *      the public regulatory record, the summary describes the
 *      requirement qualitatively and cites the source.
 *   3. brandExamples reference real product lines that publicly label
 *      against the life stage in question. The page does not declare
 *      a brand "best" — it describes what the brand discloses against
 *      the AAFCO statement and the WSAVA Global Nutrition Committee
 *      guidelines for owner-facing manufacturer questions.
 *   4. scoringConsiderations describes what a label reader (and a
 *      PetFood.com transparency scorer) looks for in this life-stage
 *      category. It is a disclosure rubric, not a nutritional ranking.
 *   5. Citations point to AAFCO 2025 Ch.6, NRC 2006 Nutrient
 *      Requirements of Dogs and Cats, WSAVA Global Nutrition Committee
 *      manufacturer-selection guidelines, and FDA CVM where relevant
 *      (e.g., DCM investigation context for large-breed growth).
 */

export type LifeStageCategory =
  | 'Growth'
  | 'Adult Maintenance'
  | 'Senior'
  | 'Large-Breed Growth'

export interface LifeStage {
  slug: string
  name: string
  /** Which species this row applies to */
  species: 'Dog' | 'Cat'
  category: LifeStageCategory
  /** Verbatim or paraphrased AAFCO nutritional adequacy statement template */
  aafcoStatement: string
  /** Whether AAFCO defines a formal nutrient profile for this stage */
  formalAafcoProfile: boolean
  /** 3-6 sentence summary of the AAFCO/NRC nutrient profile for this stage */
  nutrientProfileSummary: string
  /** Key nutrient minima or constraints for the at-a-glance table */
  keyNutrients: Array<{ label: string; value: string }>
  /** What a label reader / PetFood.com transparency scorer looks for */
  scoringConsiderations: string[]
  /** Real-brand product-line examples; never declared "best" */
  brandExamples: Array<{
    brand: string
    line: string
    note: string
  }>
  /** Common pitfalls: overfeeding, underfeeding, transitioning, etc. */
  commonPitfalls: string[]
  /** Authoritative citations */
  citations: string[]
  /** Related life-stage slugs in this catalog */
  relatedSlugs: string[]
  /** Cornerstone PetFood.com pages this stage cross-links into */
  cornerstoneLinks: Array<{ label: string; href: string }>
}

export const LifeStages: LifeStage[] = [
  // ─── PUPPY GROWTH ──────────────────────────────────────────────────────
  {
    slug: 'puppy-growth',
    name: 'Puppy (Growth)',
    species: 'Dog',
    category: 'Growth',
    aafcoStatement:
      '"[Product Name] is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for growth" — or, for the stronger claim, "Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides complete and balanced nutrition for growth."',
    formalAafcoProfile: true,
    nutrientProfileSummary:
      'The AAFCO Dog Food Nutrient Profile for growth and reproduction (2025 Official Publication, Chapter 6) sets minima higher than adult maintenance across protein, fat, calcium, phosphorus, and several trace minerals. Crude protein minimum is 22.5% on a dry-matter basis; crude fat minimum is 8.5%; calcium minimum is 1.2% and maximum is 1.8%; phosphorus minimum is 1.0% and maximum is 1.6%. The calcium-to-phosphorus ratio range is 1:1 to 2:1. The growth profile applies to puppies and to pregnant or lactating bitches; bag labels typically combine the two categories under "growth and reproduction."',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Growth and reproduction (Ch.6)' },
      { label: 'Crude protein (min, DM)', value: '22.5%' },
      { label: 'Crude fat (min, DM)', value: '8.5%' },
      { label: 'Calcium (min/max, DM)', value: '1.2% / 1.8%' },
      { label: 'Phosphorus (min/max, DM)', value: '1.0% / 1.6%' },
      { label: 'Ca:P ratio', value: '1:1 to 2:1' },
    ],
    scoringConsiderations: [
      'Look for the AAFCO statement to include "growth" or "all life stages" — an adult-maintenance-only food is not appropriate as the sole diet for a growing puppy.',
      'Prefer the "animal feeding tests" wording over "formulated to meet" where available — the feeding-trial substantiation is the stronger of the two AAFCO claim types.',
      'For puppies of breeds that will exceed roughly 70 lb adult weight, the AAFCO growth profile alone is not sufficient: see the dedicated large-breed-puppy page for the more restrictive calcium/phosphorus and energy-density requirements.',
      'Check the feeding guide for a per-age-and-weight chart, not just adult-equivalent feeding amounts. Puppy energy needs vary significantly by age, breed expected adult weight, and activity.',
    ],
    brandExamples: [
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Puppy and breed-specific puppy formulas',
        note:
          'Publishes growth-specific guaranteed analyses; many SKUs are feeding-trial-substantiated. WSAVA-aligned manufacturer (employs board-certified veterinary nutritionists, owns and operates manufacturing plants).',
      },
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Puppy",
        note:
          'Publishes growth AAFCO statement and per-age feeding guides; WSAVA-aligned manufacturer. Therapeutic puppy formulas (Prescription Diet) are veterinary-only.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Puppy',
        note:
          'Publishes growth AAFCO statement; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Feeding an adult-maintenance formula to a puppy. Adult-maintenance protein, calcium, and energy density are typically below the growth profile minima and will not support normal skeletal development.',
      'Free-feeding without measuring. Growth-phase overfeeding is the single most modifiable risk factor for adolescent obesity and is associated in observational data with later orthopedic disease.',
      "Abrupt diet transition. Puppy gastrointestinal tract is more reactive than an adult dog's; transition over 7-10 days, mixing the new food into the old food in increasing proportions, to reduce loose-stool and food-refusal risk.",
      'Supplementing calcium on top of a complete-and-balanced growth formula. Calcium oversupplementation is associated in the orthopedic literature with developmental skeletal disease; the AAFCO maximum exists for a reason.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations; Dog Food Nutrient Profiles (Growth and Reproduction).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods (manufacturer-selection criteria).',
      'Hawthorne AJ et al. Body-weight changes during growth in puppies of different breeds. Journal of Nutrition (2004) and related developmental-energy literature.',
    ],
    relatedSlugs: ['large-breed-puppy', 'adult-dog', 'senior-dog'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── KITTEN GROWTH ──────────────────────────────────────────────────────
  {
    slug: 'kitten-growth',
    name: 'Kitten (Growth)',
    species: 'Cat',
    category: 'Growth',
    aafcoStatement:
      '"[Product Name] is formulated to meet the nutritional levels established by the AAFCO Cat Food Nutrient Profiles for growth" — or, for the stronger claim, "Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides complete and balanced nutrition for growth."',
    formalAafcoProfile: true,
    nutrientProfileSummary:
      'The AAFCO Cat Food Nutrient Profile for growth and reproduction (2025 Official Publication, Chapter 6) sets higher minima than adult maintenance for protein, fat, and several essential amino acids — including taurine, arginine, methionine, and lysine. Crude protein minimum is 30.0% on a dry-matter basis; crude fat minimum is 9.0%; taurine minimum is 0.10% in dry/extruded foods and 0.20% in wet/canned foods (cats cannot synthesize sufficient taurine and require dietary intake at all life stages). Arachidonic acid minimum is 0.02% — cats cannot synthesize this fatty acid from linoleic acid as dogs can.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Growth and reproduction (Ch.6)' },
      { label: 'Crude protein (min, DM)', value: '30.0%' },
      { label: 'Crude fat (min, DM)', value: '9.0%' },
      { label: 'Taurine (min, dry/extruded)', value: '0.10%' },
      { label: 'Taurine (min, wet/canned)', value: '0.20%' },
      { label: 'Arachidonic acid (min, DM)', value: '0.02%' },
    ],
    scoringConsiderations: [
      'Confirm the AAFCO statement names "growth" or "all life stages" — adult-maintenance cat food does not meet kitten growth minima for taurine, protein, or several essential amino acids.',
      'Prefer feeding-trial substantiation over formulated-to-meet where the choice exists. The WSAVA Global Nutrition Committee guidelines treat feeding-trial AAFCO claims as the higher tier.',
      'For dry/extruded vs wet/canned: the taurine minimum is higher in wet food (0.20% vs 0.10%) because of processing-related taurine losses; do not assume the same percentage applies to both formats.',
      'For homemade or plant-based kitten diets: there is no AAFCO-substantiated homemade kitten diet on the consumer market. Cats are obligate carnivores and a kitten developmental deficit (taurine, arachidonic acid, preformed vitamin A) is not reversible at scale.',
    ],
    brandExamples: [
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Kitten and Mother & Babycat formulas',
        note:
          'Publishes kitten-specific AAFCO statements; many SKUs are feeding-trial-substantiated. WSAVA-aligned manufacturer with board-certified veterinary nutritionists.',
      },
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Kitten",
        note:
          'Publishes growth AAFCO statement and per-age feeding guides; WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Kitten',
        note:
          'Publishes growth AAFCO statement; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Feeding kittens dog food — even short-term. Dog food does not meet feline-essential nutrient minima (taurine, arachidonic acid, preformed vitamin A) and prolonged feeding produces deficiency disease.',
      'Free-feeding without monitoring weight. Kittens are particularly sensitive to under- and over-feeding; body condition scoring (BCS) every 2-4 weeks is a useful check.',
      'Vegan or plant-based kitten diets without AAFCO substantiation. Plant-only diets lack pre-formed taurine, arachidonic acid, and pre-formed vitamin A; only AAFCO-substantiated formulations with synthetic supplementation are nutritionally adequate, and even those have a thinner evidence base than animal-protein-based diets.',
      'Abrupt diet transition. Kittens have a more reactive GI tract and stronger food-neophobia than adult cats; transition over 7-14 days, increasing the new-food proportion gradually.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations; Cat Food Nutrient Profiles (Growth and Reproduction).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
      'Pion PD et al. Myocardial failure in cats associated with low plasma taurine: a reversible cardiomyopathy. Science (1987) — establishing the taurine-cat-cardiac link that drives the cat-food taurine minimum.',
    ],
    relatedSlugs: ['adult-cat', 'senior-cat'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── ADULT DOG ──────────────────────────────────────────────────────────
  {
    slug: 'adult-dog',
    name: 'Adult Dog (Maintenance)',
    species: 'Dog',
    category: 'Adult Maintenance',
    aafcoStatement:
      '"[Product Name] is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for maintenance" — or, with feeding-trial substantiation, "Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides complete and balanced nutrition for maintenance."',
    formalAafcoProfile: true,
    nutrientProfileSummary:
      'The AAFCO Dog Food Nutrient Profile for adult maintenance (2025 Official Publication, Chapter 6) sets the baseline minima for a non-reproducing, non-growing adult dog. Crude protein minimum is 18.0% on a dry-matter basis; crude fat minimum is 5.5%; calcium minimum is 0.5% and maximum is 2.5%; phosphorus minimum is 0.4%. The maintenance profile is the most permissive of the AAFCO life-stage profiles and is appropriate as the sole diet for adult dogs not in reproduction, growth, or therapeutic states. A bag labeled "all life stages" must meet the more restrictive growth-and-reproduction profile, not the maintenance profile.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Adult maintenance (Ch.6)' },
      { label: 'Crude protein (min, DM)', value: '18.0%' },
      { label: 'Crude fat (min, DM)', value: '5.5%' },
      { label: 'Calcium (min/max, DM)', value: '0.5% / 2.5%' },
      { label: 'Phosphorus (min, DM)', value: '0.4%' },
      { label: 'Ca:P ratio', value: '1:1 to 2:1' },
    ],
    scoringConsiderations: [
      'Confirm the AAFCO statement names "maintenance" or "all life stages." A formula with no AAFCO statement at all is not, by AAFCO definition, complete and balanced — most often that is a snack, treat, or topper, and the label should say so.',
      'Feeding-trial substantiation is the stronger of the two AAFCO claim types; where two otherwise comparable formulas are on the shelf, the feeding-trial one carries more substantiation.',
      'Check the calorie content statement (kcal/cup or kcal/can). Energy density varies several-fold across commercial adult-maintenance formulas, and a fixed cup-volume feeding amount can produce widely different energy delivery.',
      'For overweight or sedentary adult dogs, an "adult maintenance" formula remains appropriate; the intervention is the feeding amount, not the formula category. Weight-management formulas (lower energy density, higher fiber) are a separate AAFCO-substantiated category.',
    ],
    brandExamples: [
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Adult formulas (multiple)',
        note:
          'Publishes adult-maintenance AAFCO statement; many SKUs are feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Adult",
        note:
          'Publishes adult-maintenance AAFCO statement; WSAVA-aligned manufacturer with board-certified veterinary nutritionists on staff.',
      },
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Adult (size-and-breed-specific)',
        note:
          'Publishes adult-maintenance AAFCO statement; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Overfeeding via fixed cup-volume guidelines without accounting for energy density. Two cups of one brand can deliver substantially more or fewer calories than two cups of another.',
      'Feeding "all life stages" food to a low-activity adult dog without adjusting the amount. All-life-stages food meets growth profile minima (higher calcium, protein, energy density); the amount fed must come down compared with a maintenance-only formula.',
      'Treating the AAFCO statement as a nutritional grade. The statement is a substantiation method, not a quality score — a poorly-formulated food can carry the maintenance AAFCO statement, and a very good food can be feeding-trial-substantiated.',
      'Abrupt diet transition. Even in adult dogs, a 7-day mix-in transition reduces the rate of loose stool and food refusal.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations; Dog Food Nutrient Profiles (Adult Maintenance).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
    ],
    relatedSlugs: ['puppy-growth', 'senior-dog', 'large-breed-puppy'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── ADULT CAT ──────────────────────────────────────────────────────────
  {
    slug: 'adult-cat',
    name: 'Adult Cat (Maintenance)',
    species: 'Cat',
    category: 'Adult Maintenance',
    aafcoStatement:
      '"[Product Name] is formulated to meet the nutritional levels established by the AAFCO Cat Food Nutrient Profiles for maintenance" — or, with feeding-trial substantiation, "Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides complete and balanced nutrition for maintenance."',
    formalAafcoProfile: true,
    nutrientProfileSummary:
      'The AAFCO Cat Food Nutrient Profile for adult maintenance (2025 Official Publication, Chapter 6) sets the baseline minima for a non-reproducing, non-growing adult cat. Crude protein minimum is 26.0% on a dry-matter basis; crude fat minimum is 9.0%; taurine minimum is 0.10% in dry/extruded foods and 0.20% in wet/canned foods; arachidonic acid minimum is 0.02%. Adult-maintenance cat food does not need to meet the higher protein and lysine minima of the growth profile but must still meet feline-essential constraints (taurine, arachidonic acid, preformed vitamin A) that distinguish cat food from dog food at every life stage.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Adult maintenance (Ch.6)' },
      { label: 'Crude protein (min, DM)', value: '26.0%' },
      { label: 'Crude fat (min, DM)', value: '9.0%' },
      { label: 'Taurine (min, dry/extruded)', value: '0.10%' },
      { label: 'Taurine (min, wet/canned)', value: '0.20%' },
      { label: 'Arachidonic acid (min, DM)', value: '0.02%' },
    ],
    scoringConsiderations: [
      'Confirm the AAFCO statement names "maintenance" or "all life stages." A formula with no AAFCO statement is not complete and balanced — typically a snack or topper, not a sole-diet food.',
      'For indoor cats, evaluate energy density carefully; indoor cats have lower daily energy needs than outdoor or active cats and are at higher obesity risk on standard maintenance formulas at standard feeding amounts.',
      'For wet vs dry: hydration is a common veterinary recommendation for cats prone to urinary disease. Wet food contributes substantially more dietary water than dry; the AAFCO maintenance profile is met in both formats.',
      'Treat "grain-free" as a marketing category, not a nutritional one. Grain-free cat foods are not nutritionally superior on the AAFCO profile and the FDA CVM DCM investigation (primarily a canine concern) is a reminder that pulse-heavy formulations do not necessarily produce a better diet.',
    ],
    brandExamples: [
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Adult and indoor-specific formulas',
        note:
          'Publishes adult-maintenance AAFCO statement; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Adult",
        note:
          'Publishes adult-maintenance AAFCO statement; WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Adult cat formulas',
        note:
          'Publishes adult-maintenance AAFCO statement; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Feeding cats dog food. Even an "all life stages" dog food lacks the feline-essential taurine and arachidonic acid additions; cats fed dog food long-term develop deficiency disease.',
      'Free-feeding dry food to a low-activity indoor cat. Indoor cats have lower energy needs and dry food is energy-dense; portion control is the primary obesity-prevention intervention.',
      'Switching wet to dry, or vice versa, abruptly. Cats are food-neophobic; a 7-14 day mix-in transition reduces refusal and digestive upset.',
      'Assuming "natural" or "grain-free" reflects AAFCO superiority. The AAFCO substantiation is the only consumer-facing complete-and-balanced claim that is regulated.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations; Cat Food Nutrient Profiles (Adult Maintenance).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
      'FDA Center for Veterinary Medicine — DCM investigation update (2019, 2022); primarily canine but relevant for grain-free formulation context across species.',
    ],
    relatedSlugs: ['kitten-growth', 'senior-cat'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── SENIOR DOG ─────────────────────────────────────────────────────────
  {
    slug: 'senior-dog',
    name: 'Senior Dog',
    species: 'Dog',
    category: 'Senior',
    aafcoStatement:
      'There is no formal AAFCO "senior" nutrient profile. A senior dog food carries one of the two recognized AAFCO statements — adult maintenance, or all life stages — and adds "senior" as a marketing classification. The owner-facing implication is that the manufacturer has adjusted energy density, protein quality, or supplemental ingredients (e.g., omega-3, glucosamine) for older dogs, but the regulatory baseline is the underlying AAFCO statement, not the senior label.',
    formalAafcoProfile: false,
    nutrientProfileSummary:
      'AAFCO Chapter 6 (2025) defines two life-stage nutrient profiles for dogs: growth-and-reproduction and adult maintenance. "Senior" is not among them. A senior-labeled food is a manufacturer-defined category that sits on top of the AAFCO adult-maintenance profile, typically with reduced energy density (to account for lower activity in older dogs), often with adjusted protein quality (some senior formulas reduce protein, others increase it — the veterinary nutrition literature does not support generalized protein restriction in healthy older dogs), and frequently with added omega-3 fatty acids, antioxidants, glucosamine, or chondroitin. The NRC 2006 Nutrient Requirements of Dogs and Cats discusses age-related changes qualitatively but does not set a separate "senior" requirement.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Maintenance or all life stages (no formal senior profile)' },
      { label: 'Energy density', value: 'Manufacturer-adjusted (typically reduced)' },
      { label: 'Crude protein (min, DM)', value: '18.0% (maintenance baseline)' },
      { label: 'Crude fat (min, DM)', value: '5.5% (maintenance baseline)' },
      { label: 'Common additions', value: 'Omega-3, glucosamine, antioxidants (not AAFCO-required)' },
    ],
    scoringConsiderations: [
      'The "senior" label is a marketing classification, not an AAFCO category. Read the underlying AAFCO statement — that is the regulatory claim.',
      'Generalized protein restriction in healthy older dogs is not supported by current veterinary nutrition consensus. Protein restriction is appropriate for diagnosed renal disease (a veterinary therapeutic diet), not for "old" as a category.',
      'Energy density commonly drops in senior formulas to compensate for lower activity and rising obesity risk. Feeding amount may need to be adjusted; body condition scoring (BCS) every 4-8 weeks is a useful check.',
      'For dogs with diagnosed conditions — renal disease, cardiac disease, osteoarthritis, cognitive dysfunction — a veterinary therapeutic diet is the appropriate intervention, not a retail senior formula. The treating veterinarian sets the diet.',
    ],
    brandExamples: [
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Adult 7+ and Adult 11+ Senior Vitality",
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; senior is a manufacturer category. WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Bright Mind 7+ and 11+ senior formulas',
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; markets specific senior-cognition formulation choices (e.g., medium-chain triglycerides). WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Mature and Aging formulas (size-specific)',
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; segments senior into size categories. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Assuming "senior" means AAFCO-validated for older dogs. AAFCO does not validate senior as a life stage — the regulatory claim is the underlying maintenance (or all-life-stages) statement.',
      'Generalized protein restriction without a diagnosis. Reduced-protein senior formulas are appropriate for some conditions but not for healthy aging; consensus is to maintain protein intake unless there is a medical reason to restrict.',
      "Self-prescribing therapeutic diets. Diets labeled for kidney support, cardiac support, or joint disease that are intended as therapeutic (Hill's Prescription Diet, Royal Canin Veterinary, Purina Pro Plan Veterinary) require a veterinary prescription and should not be substituted without veterinary input.",
      'Not adjusting feeding amount. Senior formulas often reduce kcal/cup; an unchanged feeding amount can mean the dog is eating to the same volume but a different calorie target. Recheck BCS after any senior-formula transition.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations (which defines only growth-and-reproduction and adult-maintenance profiles for dogs).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press — age-related considerations discussion.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
      'Laflamme DP. Nutrition for aging cats and dogs and the importance of body condition. Veterinary Clinics of North America: Small Animal Practice (2005) — senior protein-requirement discussion.',
    ],
    relatedSlugs: ['adult-dog', 'puppy-growth'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── SENIOR CAT ─────────────────────────────────────────────────────────
  {
    slug: 'senior-cat',
    name: 'Senior Cat',
    species: 'Cat',
    category: 'Senior',
    aafcoStatement:
      'There is no formal AAFCO "senior" nutrient profile for cats. A senior cat food carries the AAFCO adult-maintenance statement (or all-life-stages) and adds "senior," "mature," or "aging" as a marketing classification. The regulatory baseline is the underlying AAFCO statement; senior reflects manufacturer formulation choices, not an additional regulatory tier.',
    formalAafcoProfile: false,
    nutrientProfileSummary:
      'AAFCO Chapter 6 (2025) defines two life-stage nutrient profiles for cats: growth-and-reproduction and adult maintenance. There is no senior profile. Senior cat food is built on the adult-maintenance profile, with manufacturer adjustments that commonly include moderately higher protein quality (older cats are at higher risk of sarcopenia, and the veterinary nutrition literature broadly supports maintained-to-increased protein intake in healthy aging cats), adjusted phosphorus (lower-phosphorus formulations are common given the high prevalence of subclinical chronic kidney disease in older cats), and often increased dietary water (wet formats, or kibble paired with wet). The NRC 2006 does not set a separate senior requirement.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Maintenance or all life stages (no formal senior profile)' },
      { label: 'Crude protein (min, DM)', value: '26.0% (maintenance baseline; often higher in senior formulas)' },
      { label: 'Taurine (min, dry/extruded)', value: '0.10%' },
      { label: 'Taurine (min, wet/canned)', value: '0.20%' },
      { label: 'Phosphorus', value: 'Often moderated in senior formulas (kidney-disease prevalence)' },
      { label: 'Common additions', value: 'Omega-3, antioxidants, joint-support (not AAFCO-required)' },
    ],
    scoringConsiderations: [
      'The "senior" label is a marketing classification. Read the underlying AAFCO statement — that is the regulatory claim.',
      'Protein restriction in healthy senior cats is not supported by current veterinary nutrition consensus; older cats are at risk of sarcopenia (loss of lean body mass), and maintained-to-higher protein intake helps preserve muscle. Phosphorus restriction is appropriate for diagnosed chronic kidney disease (a therapeutic diet) — not for "old" as a category.',
      'Chronic kidney disease prevalence in cats over 12 years old is high; a senior-cat workup including renal panel and urine specific gravity is standard veterinary practice and informs whether a therapeutic kidney diet is appropriate.',
      'Hydration matters more in older cats. Wet food, or kibble paired with wet, contributes substantially more dietary water than dry-only and is commonly recommended.',
    ],
    brandExamples: [
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Adult 7+ and Adult 11+ cat formulas",
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; senior is a manufacturer category. WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Aging 12+ and Mature feline formulas',
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; segments by age. WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Adult 7+ Prime Plus cat formula',
        note:
          'Publishes the underlying AAFCO adult-maintenance statement; markets formulation choices intended for aging cats. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Generalized protein restriction without a diagnosis. Reduced-protein senior cat formulas are appropriate for some kidney-disease cases but not for healthy aging; restricting protein in a healthy older cat can accelerate sarcopenia.',
      "Self-prescribing therapeutic kidney diets. Diets labeled for kidney support (Hill's k/d, Royal Canin Renal, Purina NF) are therapeutic and require veterinary diagnosis and prescription.",
      'Skipping the senior workup. Many older cats have subclinical kidney, thyroid, or dental disease; a baseline geriatric workup (typically at 7-10 years, more frequently thereafter) informs diet appropriately.',
      'Abrupt diet transition. Cats are food-neophobic, and senior cats more so; 7-14 day mix-in transition is standard.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations (which defines only growth-and-reproduction and adult-maintenance profiles for cats).',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
      'Sparkes AH et al. ISFM Consensus Guidelines on the Diagnosis and Management of Feline Chronic Kidney Disease. Journal of Feline Medicine and Surgery (2016).',
      'Laflamme DP, Hannah SS. Discrepancy between use of lean body mass or nitrogen balance to determine protein requirements for adult cats. Journal of Feline Medicine and Surgery (2013).',
    ],
    relatedSlugs: ['adult-cat', 'kitten-growth'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },

  // ─── LARGE-BREED PUPPY ──────────────────────────────────────────────────
  {
    slug: 'large-breed-puppy',
    name: 'Large-Breed Puppy (Growth)',
    species: 'Dog',
    category: 'Large-Breed Growth',
    aafcoStatement:
      '"[Product Name] is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for growth, including growth of large size dogs (70 lb or more as an adult)" — or, with feeding-trial substantiation, "Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides complete and balanced nutrition for growth, including growth of large size dogs (70 lb or more as an adult)." The "including growth of large size dogs" qualifier is the AAFCO-specified phrasing for compliance with the more restrictive large-breed growth requirements.',
    formalAafcoProfile: true,
    nutrientProfileSummary:
      'AAFCO Chapter 6 (2025) defines a more restrictive calcium and energy profile for the growth of large-breed dogs (dogs expected to reach 70 lb or more as adults) within the growth-and-reproduction profile. The calcium maximum is reduced to 1.8% on a dry-matter basis (versus the broader growth maximum) and the per-1000-kcal-ME calcium specification is tightened to a maximum of 4.5 g/1000 kcal. Excess calcium during the rapid-growth phase of large-breed puppies is associated with developmental skeletal disease (hypertrophic osteodystrophy, osteochondrosis, hip and elbow dysplasia) in the veterinary orthopedic literature — the restriction is the regulatory response.',
    keyNutrients: [
      { label: 'AAFCO profile', value: 'Growth, including large-size growth (Ch.6)' },
      { label: 'Crude protein (min, DM)', value: '22.5%' },
      { label: 'Crude fat (min, DM)', value: '8.5%' },
      { label: 'Calcium (min, DM)', value: '1.2%' },
      { label: 'Calcium (max, DM, large-breed)', value: '1.8%' },
      { label: 'Calcium per 1000 kcal ME (max)', value: '4.5 g' },
      { label: 'Ca:P ratio', value: '1:1 to 2:1' },
    ],
    scoringConsiderations: [
      'For a puppy expected to exceed 70 lb adult weight, the AAFCO statement must explicitly include the "including growth of large size dogs (70 lb or more as an adult)" qualifier — a generic growth-and-reproduction statement does not certify against the more restrictive calcium ceiling.',
      "Confirm the calcium maximum and the per-1000-kcal calcium specification meet the large-breed-growth ceiling. The label's guaranteed analysis lists calcium minima; the calcium maximum is the compliance-relevant figure for large-breed growth.",
      '"All life stages" formulas can satisfy the large-breed growth specification only if explicitly labeled "including growth of large size dogs"; generic all-life-stages does not.',
      'For very large or giant breeds (>100 lb projected adult weight), the orthopedic literature is even more cautious about calcium and energy density; some board-certified veterinary nutritionists recommend formulas at the lower end of the calcium range.',
    ],
    brandExamples: [
      {
        brand: 'Royal Canin',
        line: 'Royal Canin Large Puppy and Giant Puppy formulas',
        note:
          'Publishes growth AAFCO statement with the large-size-dogs qualifier; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
      {
        brand: "Hill's Science Diet",
        line: "Hill's Science Diet Large Breed Puppy",
        note:
          'Publishes growth AAFCO statement with the large-size-dogs qualifier; WSAVA-aligned manufacturer.',
      },
      {
        brand: 'Purina Pro Plan',
        line: 'Purina Pro Plan Large Breed Puppy',
        note:
          'Publishes growth AAFCO statement with the large-size-dogs qualifier; many SKUs feeding-trial-substantiated. WSAVA-aligned manufacturer.',
      },
    ],
    commonPitfalls: [
      'Feeding a generic puppy formula (no large-breed qualifier) to a large-breed puppy. The standard growth profile allows higher calcium than the orthopedic literature supports for large-breed development; this is one of the most common owner-side contributors to developmental skeletal disease risk.',
      'Supplementing calcium on top of a complete-and-balanced large-breed growth formula. Calcium oversupplementation in large-breed puppies has been associated in controlled studies with skeletal abnormalities; the AAFCO ceiling exists for that reason.',
      'Overfeeding. Rapid growth — even when nutrient ratios are correct — is itself an orthopedic risk factor for large-breed puppies. Feed to a moderate growth curve (treating-veterinarian or breed-specific growth chart) rather than ad libitum.',
      'Switching to adult food too early or too late. The transition timing for large-breed puppies is breed- and size-specific; consult the treating veterinarian for individualized guidance.',
    ],
    citations: [
      'AAFCO 2025 Official Publication, Chapter 6 — Model Pet Food and Specialty Pet Food Regulations; Dog Food Nutrient Profiles, large-breed-growth provisions.',
      'National Research Council (2006). Nutrient Requirements of Dogs and Cats. National Academies Press.',
      'WSAVA Global Nutrition Committee — Guidelines on Selecting Pet Foods.',
      'Hazewinkel HAW et al. Influences of chronic calcium excess on the skeletal development of growing Great Danes. Journal of the American Animal Hospital Association — foundational large-breed-calcium orthopedic study.',
      'Lauten SD. Nutritional Risks to Large-Breed Dogs: From Weaning to the Geriatric Years. Veterinary Clinics of North America: Small Animal Practice (2006).',
    ],
    relatedSlugs: ['puppy-growth', 'adult-dog'],
    cornerstoneLinks: [
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
    ],
  },
]

// ─── Lookup helpers ─────────────────────────────────────────────────────────

export function getLifeStageBySlug(slug: string): LifeStage | undefined {
  return LifeStages.find((s) => s.slug === slug)
}

export function getRelatedLifeStages(slug: string): LifeStage[] {
  const stage = getLifeStageBySlug(slug)
  if (!stage) return []
  return stage.relatedSlugs
    .map((s) => getLifeStageBySlug(s))
    .filter((s): s is LifeStage => s !== undefined)
}
