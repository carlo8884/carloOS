import { SRC, STD } from './_shared.mjs'

const D = 'myths'

const RAW = [
  {
    dir: D, slug: 'by-products-myth', date: '2026-06-01',
    title: 'The By-Products Myth',
    metaTitle: 'Are Pet Food By-Products Bad? — The Myth | PetFood.com',
    metaDesc:
      'What AAFCO by-products actually are, why the floor-sweepings framing is wrong, the real transparency concern, and how organ meats are nutritionally valuable.',
    category: 'Myth-Busting', readTime: '9 min',
    hero:
      "By-products is among the most effective negative marketing terms in pet food, evoking floor sweepings and waste. The AAFCO definition tells a different story: by-products are largely organ meats, which are nutritionally dense. The legitimate concern is transparency, not nutritional value. This page checks the by-products claim against the regulatory definition.",
    toc: [
      { label: 'The Claim', id: 'claim' },
      { label: 'What By-Products Are', id: 'whatare' },
      { label: 'Organ Meats Are Valuable', id: 'organ' },
      { label: 'What Is Excluded', id: 'excluded' },
      { label: 'The Real Concern — Transparency', id: 'transparency' },
      { label: 'The Verdict', id: 'verdict' },
    ],
    body: [
      { p: "The claim is that by-products are low-quality waste — beaks, hooves, floor sweepings, diseased tissue — used as cheap filler, and that a food free of by-products is therefore superior. This framing has driven significant marketing, but it does not match the AAFCO ingredient definitions or the nutritional reality. By-products are a defined ingredient category consisting largely of nutritious organ meats. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'The Claim', id: 'claim' },
      { p: "Premium and boutique brands frequently advertise no by-products as a quality marker, leaning on the negative connotation of the word. The implication is that by-products are nutritionally inferior or even unsafe. Examined against the regulatory definition and nutritional science, the claim conflates a transparency issue with a quality issue and overstates both." },
      { h2: 'What By-Products Are', id: 'whatare' },
      { p: "AAFCO defines poultry by-products as the non-rendered clean parts of slaughtered poultry such as heads, feet, and viscera (internal organs), free from fecal content and foreign matter. Meat by-products are defined analogously for mammals and include organs such as liver, kidney, spleen, and lungs. These are the parts humans in many Western markets do not typically eat, not waste — and in many cultures they are prized human foods. See [[Pet Food Fillers Myth|/myths/fillers-myth]]." },
      { h2: 'Organ Meats Are Valuable', id: 'organ' },
      { p: "Organ meats are among the most nutrient-dense foods available: liver is rich in vitamin A, B-vitamins, iron, and copper; heart is a concentrated source of taurine and protein; kidney supplies B-vitamins and minerals. A whole prey animal, the cat's ancestral diet, is largely organ and muscle. Including organ-based by-products is nutritionally sound and, for some nutrients like taurine, advantageous. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]]." },
      { h2: 'What Is Excluded', id: 'excluded' },
      { p: "The AAFCO by-product definitions specifically exclude the parts the myth invokes: hair, horn, hooves, teeth, and (for by-products) the definitions require freedom from fecal content and foreign matter. The lurid imagery of the by-products myth describes material the definition does not permit. The ingredient is regulated, not a catch-all for waste." },
      { h2: 'The Real Concern — Transparency', id: 'transparency' },
      { p: "There is a legitimate point inside the myth, but it is about transparency, not quality. A species-generic term like poultry by-product meal does not tell the owner which species or which specific tissues are used, and the composition can vary between production runs. For owners managing a suspected food allergy or doing an elimination trial, that lack of specificity is a real problem. A species-named by-product (chicken by-product meal) is more transparent. The criticism that holds up is the disclosure gap, not the nutritional value. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'The Verdict', id: 'verdict' },
      { p: "By-products are not waste or filler — they are largely nutritious organ meats, formally defined and recognized by AAFCO and the FDA as appropriate pet food ingredients. The valid concern is transparency (species-generic terms reveal less), not quality. A no by-products claim is a marketing position, not a nutritional upgrade. Evaluate a food on its overall formulation and manufacturer transparency, not on the presence or absence of by-products. See [[Scoring Methodology|/guides/methodology]]." },
    ],
    related: [
      { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
      { label: 'Pet Food Fillers Myth', href: '/myths/fillers-myth' },
      { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
    ],
    sources: [...STD, SRC.fdaPet],
  },

  {
    dir: D, slug: 'fillers-myth', date: '2026-06-01',
    title: 'The Pet Food Fillers Myth',
    metaTitle: 'Pet Food Fillers — Is the Term Even Real? | PetFood.com',
    metaDesc:
      'Why filler is a marketing word with no regulatory meaning, how fiber and carbohydrate ingredients are functional, and how to evaluate ingredients on their role.',
    category: 'Myth-Busting', readTime: '8 min',
    hero:
      "Filler is one of the most-used words in pet food criticism and one of the least meaningful: it has no regulatory definition and is applied loosely to any ingredient a marketer wants to disparage. Many so-called fillers are functional fiber or carbohydrate sources. This page examines whether filler is a real category at all.",
    toc: [
      { label: 'The Claim', id: 'claim' },
      { label: 'Filler Has No Definition', id: 'nodefinition' },
      { label: 'Functional Ingredients', id: 'functional' },
      { label: 'Beet Pulp and Bran', id: 'beetpulp' },
      { label: 'When an Ingredient Is Padding', id: 'padding' },
      { label: 'The Verdict', id: 'verdict' },
    ],
    body: [
      { p: "The claim is that low-quality foods are bulked out with fillers — cheap ingredients with no nutritional value added only to pad the bag. The word implies waste and dilution. But filler has no regulatory or scientific definition; it is a rhetorical label applied selectively to grains, fiber sources, and carbohydrate ingredients that, in fact, serve real functions. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'The Claim', id: 'claim' },
      { p: "Critics label ingredients such as corn, beet pulp, brewers rice, or bran as fillers, suggesting they are nutritionally empty and present only to cut cost. The term is rarely defined; it functions as a catch-all pejorative. Examined ingredient by ingredient, most so-called fillers have a nutritional or functional role." },
      { h2: 'Filler Has No Definition', id: 'nodefinition' },
      { p: "Neither AAFCO nor the FDA defines filler, and no ingredient is approved or labeled as a filler. The word is not a regulatory category. This is the core problem with the claim: it is impossible to evaluate an ingredient against a standard that does not exist. Whether an ingredient is valuable depends on its actual function, not on whether a marketer chooses to call it a filler. See [[Reading a Pet Food Label|/guides/reading-pet-food-labels]]." },
      { h2: 'Functional Ingredients', id: 'functional' },
      { p: "Most ingredients tarred as fillers serve a function: carbohydrate sources provide digestible energy and the starch needed to form kibble; fiber sources support digestion, stool quality, and the gut microbiome; some provide vitamins, minerals, and antioxidants. A complete diet needs energy and fiber sources, and the ingredients supplying them are not waste. See [[Fiber and Digestive Health Diets|/diets/fiber-and-digestive-health]]." },
      { h2: 'Beet Pulp and Bran', id: 'beetpulp' },
      { p: "Beet pulp, a frequent target, is a moderately fermentable fiber that supports stool quality and feeds beneficial colonic bacteria — a functional ingredient, not padding. Bran and similar fiber sources likewise contribute fiber with digestive benefits. Labeling these as fillers ignores their role. The presence of a fiber source in a diet is generally a feature, not a flaw. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'When an Ingredient Is Padding', id: 'padding' },
      { p: "There is a defensible version of the concern: an ingredient that displaces higher-quality components purely to cut cost, without contributing energy, fiber, or nutrients, would be padding. But identifying that requires evaluating the specific ingredient's role in the specific formula, not applying a blanket filler label. The judgment is ingredient- and context-specific, not a category." },
      { h2: 'The Verdict', id: 'verdict' },
      { p: "Filler is a marketing word, not a real ingredient category, and most ingredients it is applied to are functional carbohydrate and fiber sources. Evaluate a diet on its overall formulation, nutrient adequacy, and the role each ingredient plays — not on whether a critic has labeled something a filler. See [[Scoring Methodology|/guides/methodology]] and [[Pet Food Marketing Terms|/myths/marketing-terms-decoded]]." },
    ],
    related: [
      { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
      { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
      { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'corn-in-pet-food-myth', date: '2026-06-01',
    title: 'Corn in Pet Food Myth',
    metaTitle: 'Is Corn Bad in Pet Food? — The Myth Examined | PetFood.com',
    metaDesc:
      'Whether corn is a filler or allergen, its actual digestibility and nutrient contribution, the rare reality of corn allergy, and how to judge corn in a diet.',
    category: 'Myth-Busting', readTime: '8 min',
    hero:
      "Corn is the single most maligned ingredient in pet food, accused of being an indigestible filler and a common allergen. Neither charge holds up well: properly processed corn is digestible and nutritious, and corn allergy is uncommon. This page examines the corn claims against the evidence.",
    toc: [
      { label: 'The Claims', id: 'claims' },
      { label: 'Corn Digestibility', id: 'digestibility' },
      { label: 'Nutrient Contribution', id: 'nutrients' },
      { label: 'The Allergy Question', id: 'allergy' },
      { label: 'Whole Corn vs Corn Gluten', id: 'forms' },
      { label: 'The Verdict', id: 'verdict' },
    ],
    body: [
      { p: "Corn is accused of two things in pet food: being an indigestible filler, and being a common allergen. Both claims are widely repeated and weakly supported. Properly cooked corn is well digested by dogs, contributes meaningful nutrients, and is an uncommon cause of food allergy relative to animal proteins. The corn myth is a clear case of marketing outrunning evidence. See [[Pet Food Fillers Myth|/myths/fillers-myth]]." },
      { h2: 'The Claims', id: 'claims' },
      { p: "The two charges against corn are that it is cheap filler with little nutritional value, and that it commonly causes allergies. These claims underpin grain-free and corn-free marketing. Examined separately, the digestibility claim is wrong for properly processed corn, and the allergy claim overstates a relatively rare problem." },
      { h2: 'Corn Digestibility', id: 'digestibility' },
      { p: "Whole raw corn is poorly digestible, but pet food corn is ground and cooked, which gelatinizes the starch and makes it highly digestible — studies show cooked corn starch is well utilized by dogs. The indigestible-filler claim describes raw whole corn, not the processed corn actually used in pet food. The processing step is the part the myth omits. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'Nutrient Contribution', id: 'nutrients' },
      { p: "Corn supplies digestible carbohydrate energy, linoleic acid (an essential omega-6 fatty acid), some protein, and antioxidants including carotenoids. Corn gluten meal is a concentrated protein source. While corn is not a complete protein on its own and is not a substitute for animal protein, it is not nutritionally empty — it contributes energy, fatty acids, and protein to the formula. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'The Allergy Question', id: 'allergy' },
      { p: "Food allergy in dogs and cats is most often caused by animal proteins — beef, dairy, chicken, fish — with corn and other grains far less common triggers. The widespread belief that corn is a leading allergen is not supported; itchy dogs are more likely reacting to a protein. True corn allergy exists but is uncommon and must be diagnosed by elimination trial, not assumed. See [[Food Allergy and Elimination Diets|/diets/food-allergy-and-elimination-diets]]." },
      { h2: 'Whole Corn vs Corn Gluten', id: 'forms' },
      { p: "Corn appears in several forms: ground whole corn (energy and some protein), corn gluten meal (a concentrated plant protein), and corn bran (fiber). Each has a different role. Corn gluten meal used to boost the crude-protein number changes the amino-acid balance of the diet, which is a legitimate formulation consideration — but that is a nuance about plant-protein concentration, not evidence that corn is bad. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'The Verdict', id: 'verdict' },
      { p: "Corn is neither an indigestible filler nor a common allergen. Properly processed, it is digestible and contributes energy, essential fatty acids, and protein. Corn allergy is uncommon. There is no general reason to avoid corn, and corn-free is a marketing position rather than a health upgrade. Judge a diet on its overall formulation, not the presence of corn. See [[Grain-Free vs Grain-Inclusive|/compare/grain-free-vs-grain-inclusive]]." },
    ],
    related: [
      { label: 'Pet Food Fillers Myth', href: '/myths/fillers-myth' },
      { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
      { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'marketing-terms-decoded', date: '2026-06-01',
    title: 'Pet Food Marketing Terms Decoded',
    metaTitle: 'Pet Food Marketing Terms — What They Really Mean | PetFood.com',
    metaDesc:
      'What natural, holistic, human-grade, premium, and gourmet actually mean on a pet food label — which are defined by AAFCO and which are unregulated.',
    category: 'Myth-Busting', readTime: '9 min',
    hero:
      "The front of a pet food bag is marketing; the regulated information is on the back. Words like natural, holistic, premium, and gourmet carry strong impressions and, in most cases, no enforceable definition. This page decodes the common marketing terms — which AAFCO defines, which are meaningless, and how to read past them.",
    toc: [
      { label: 'Front vs Back of Bag', id: 'frontback' },
      { label: 'Natural', id: 'natural' },
      { label: 'Holistic, Premium, Gourmet', id: 'undefined' },
      { label: 'Human-Grade', id: 'humangrade' },
      { label: 'Organic', id: 'organic' },
      { label: 'Reading Past the Marketing', id: 'reading' },
    ],
    body: [
      { p: "Pet food marketing relies on terms that sound meaningful but are mostly undefined and unenforceable. The regulated, comparable information — the ingredient list, guaranteed analysis, and AAFCO statement — is on the back of the bag, while the front carries the marketing. Knowing which terms have a definition and which do not is essential to reading a label honestly. See [[Reading a Pet Food Label|/guides/reading-pet-food-labels]]." },
      { h2: 'Front vs Back of Bag', id: 'frontback' },
      { p: "The front of the bag is designed to sell; the back carries the regulated disclosures. Brand names, imagery, and adjectives on the front are largely outside AAFCO's enforceable definitions, while the ingredient panel, guaranteed analysis, calorie statement, and nutritional adequacy statement are regulated and comparable. Buying decisions should rest on the back, not the front. See [[The Guaranteed Analysis Explained|/nutrition/guaranteed-analysis-explained]]." },
      { h2: 'Natural', id: 'natural' },
      { p: "Natural is one of the few marketing terms AAFCO does define: broadly, an ingredient derived from plant, animal, or mined sources, not produced by a chemically synthetic process, except in amounts that might occur in good manufacturing. Crucially, natural does not mean organic, healthier, or higher quality, and a natural food still requires synthetic vitamins (which prompts a with added vitamins and minerals qualifier). Natural is defined but narrow, and not a quality guarantee." },
      { h2: 'Holistic, Premium, Gourmet', id: 'undefined' },
      { p: "Holistic, premium, super-premium, and gourmet have no AAFCO definition and no enforceable standard whatsoever. Any food can use them regardless of its ingredients or formulation. They convey an impression of quality without committing to anything verifiable. Treat them as pure marketing and ignore them when comparing foods. See [[Pet Food Fillers Myth|/myths/fillers-myth]]." },
      { h2: 'Human-Grade', id: 'humangrade' },
      { p: "Human-grade is a meaningful claim only under specific conditions: for a product to be labeled human-grade, every ingredient and the entire manufacturing process must meet standards for human food production, which is a high and verifiable bar. Many uses of the term on individual ingredients (human-grade chicken) do not meet the standard for the finished product. The term has meaning when properly applied to the whole product, but is often used loosely." },
      { h2: 'Organic', id: 'organic' },
      { p: "Organic is regulated, but by the USDA National Organic Program, not AAFCO. A pet food carrying the USDA organic seal must meet the same organic standards as human food. This is a verifiable certification, unlike holistic or premium. However, organic refers to how ingredients are produced, not to nutritional superiority — an organic diet is not automatically more complete or better formulated. See [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Reading Past the Marketing', id: 'reading' },
      { p: "To read past marketing: ignore undefined adjectives (holistic, premium, gourmet); treat natural and organic as production claims, not quality or nutrition guarantees; verify human-grade applies to the whole product; and base decisions on the ingredient panel, guaranteed analysis, calorie statement, AAFCO substantiation, and manufacturer transparency. The regulated back of the bag, not the marketed front, is where comparison happens. See [[Reading a Pet Food Label|/guides/reading-pet-food-labels]]." },
    ],
    related: [
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
      { label: 'The Guaranteed Analysis Explained', href: '/nutrition/guaranteed-analysis-explained' },
      { label: 'Pet Food Fillers Myth', href: '/myths/fillers-myth' },
    ],
    sources: [...STD, SRC.fdaPet],
  },

  {
    dir: D, slug: 'limited-ingredient-diet-myth', date: '2026-06-01',
    title: 'The Limited-Ingredient Diet Myth',
    metaTitle: 'Are Limited-Ingredient Diets Hypoallergenic? | PetFood.com',
    metaDesc:
      'Why OTC limited-ingredient diets are not reliable allergy tools, the cross-contamination problem, the lack of a hypoallergenic definition, and what works instead.',
    category: 'Myth-Busting', readTime: '9 min',
    hero:
      "Limited-ingredient diets are marketed as a solution for food-sensitive pets, with the implication that fewer ingredients means hypoallergenic. The reality is that over-the-counter limited-ingredient foods are unreliable for diagnosing or managing true food allergy, largely because of undeclared cross-contamination. This page explains why, and what actually works.",
    toc: [
      { label: 'The Claim', id: 'claim' },
      { label: 'No Hypoallergenic Definition', id: 'nodefinition' },
      { label: 'The Cross-Contamination Problem', id: 'crosscontamination' },
      { label: 'Fewer Ingredients vs Novel Ingredients', id: 'fewervsnovel' },
      { label: 'What Actually Works', id: 'works' },
      { label: 'The Verdict', id: 'verdict' },
    ],
    body: [
      { p: "Limited-ingredient diets (LIDs) contain a short ingredient list, typically one protein and one carbohydrate, and are marketed for pets with food sensitivities. The implied promise is that they are hypoallergenic or suitable for an elimination trial. In practice, over-the-counter LIDs frequently fail at both, because the term hypoallergenic has no standard and because independent testing finds undeclared ingredients. See [[Food Allergy and Elimination Diets|/diets/food-allergy-and-elimination-diets]]." },
      { h2: 'The Claim', id: 'claim' },
      { p: "The marketing suggests that a short ingredient list reduces allergy risk and that an LID can serve as a diagnostic or management diet for food-allergic pets. Owners often select an LID on their own to address itching or digestive upset, assuming fewer ingredients equals safer. The assumption does not survive scrutiny of how these products are made and labeled." },
      { h2: 'No Hypoallergenic Definition', id: 'nodefinition' },
      { p: "There is no regulatory definition of hypoallergenic for pet food, and no requirement that an LID exclude any particular allergen. An LID is defined only by having a short ingredient list, not by being free of the proteins an individual animal reacts to. The term carries no enforceable promise about allergenicity. See [[Pet Food Marketing Terms|/myths/marketing-terms-decoded]]." },
      { h2: 'The Cross-Contamination Problem', id: 'crosscontamination' },
      { p: "The decisive issue is cross-contamination. Independent studies have repeatedly found over-the-counter limited-ingredient and novel-protein diets contaminated with proteins not on the label — commonly chicken, beef, or soy — because the same production lines run multiple formulas. For an animal allergic to the contaminating protein, the diet fails, and for a diagnostic elimination trial, undeclared protein invalidates the test. Veterinary therapeutic diets are manufactured to avoid this. See [[Hydrolyzed and Novel-Protein Diets|/diets/hydrolyzed-protein-diets]]." },
      { h2: 'Fewer Ingredients vs Novel Ingredients', id: 'fewervsnovel' },
      { p: "Reducing the number of ingredients does not help if the remaining ingredients are ones the animal has eaten (and could be sensitized to). What matters for allergy management is novelty — a protein the individual has never encountered — or hydrolysis, not merely a short list. An LID built on common proteins offers no allergy advantage; it is simply a simpler recipe. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'What Actually Works', id: 'works' },
      { p: "Diagnosing and managing food allergy requires a strict elimination trial using a veterinary therapeutic novel-protein or hydrolyzed diet manufactured to avoid cross-contamination, fed exclusively for 8 to 12 weeks, followed by provocation. Over-the-counter LIDs are not equivalent and should not be relied on for diagnosis. The veterinarian directs the trial. See [[Food Allergy and Elimination Diets|/diets/food-allergy-and-elimination-diets]]." },
      { h2: 'The Verdict', id: 'verdict' },
      { p: "Limited-ingredient is a marketing description, not a hypoallergenic guarantee. OTC LIDs are unreliable for food-allergy diagnosis and management due to the lack of a hypoallergenic standard and documented cross-contamination, and a short list of common proteins offers no allergy benefit. For genuine food allergy, use a veterinary elimination diet under veterinary direction. See [[The By-Products Myth|/myths/by-products-myth]]." },
    ],
    related: [
      { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      { label: 'Hydrolyzed and Novel-Protein Diets', href: '/diets/hydrolyzed-protein-diets' },
      { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
    ],
    sources: [...STD],
  },
]

export const MYTHS = RAW.map((p) => ({ ...p, hubName: 'Myths' }))
