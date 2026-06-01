import { SRC, STD } from './_shared.mjs'

const D = 'ingredients'

const RAW = [
  {
    dir: D, slug: 'legumes-peas-and-lentils', date: '2026-06-01',
    title: 'Legumes — Peas, Lentils, and Chickpeas',
    metaTitle: 'Legumes in Pet Food — Peas, Lentils, Chickpeas | PetFood.com',
    metaDesc:
      'Why legumes rose with grain-free, their nutrient profile and protein contribution, the DCM investigation link, and how to read pulse-heavy ingredient panels.',
    category: 'Ingredient Reference', readTime: '10 min',
    hero:
      "Legumes — peas, lentils, chickpeas, and their protein isolates — moved from minor ingredients to dominant ones when grain-free diets needed a starch and protein substitute for cereal grains. They carry real nutritional value and a real question mark: pulse-heavy diets feature in the FDA dilated cardiomyopathy investigation. This page covers what legumes contribute and what the open concern is.",
    toc: [
      { label: 'Why Legumes Rose', id: 'rose' },
      { label: 'Nutrient Profile', id: 'nutrients' },
      { label: 'Protein Contribution and Isolates', id: 'isolates' },
      { label: 'The DCM Connection', id: 'dcm' },
      { label: 'Anti-Nutritional Factors', id: 'antinutritional' },
      { label: 'Reading a Pulse-Heavy Panel', id: 'panel' },
    ],
    body: [
      { p: "Legumes (pulses) include peas, lentils, chickpeas, and beans, along with concentrated derivatives like pea protein and pea starch. They became prominent in pet food as grain-free formulas needed a carbohydrate and binding source to replace cereal grains in extrusion. They are nutritious ingredients, but their heavy use is also at the center of the unresolved diet-associated dilated cardiomyopathy question. See [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]]." },
      { h2: 'Why Legumes Rose', id: 'rose' },
      { p: "Extruded kibble requires starch to form, so a grain-free recipe must replace cereal starch with something — and legumes (plus potato and tapioca) filled that role. Pulses offered the additional marketing advantage of boosting the crude-protein number on the guaranteed analysis, since they are higher in protein than grains. The result was a rapid rise in pulse-heavy formulas. See [[Grain-Free vs Grain-Inclusive|/compare/grain-free-vs-grain-inclusive]]." },
      { h2: 'Nutrient Profile', id: 'nutrients' },
      { p: "Whole pulses provide digestible carbohydrate, fiber, plant protein (roughly 20 to 25 percent crude protein on a dry-matter basis for whole pulses), and some minerals and B-vitamins. They are a legitimate ingredient with nutritional value. The fiber content supports digestion, and the carbohydrate supplies energy. As whole-food ingredients in moderate proportion, legumes are not a problem in themselves. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'Protein Contribution and Isolates', id: 'isolates' },
      { p: "Concentrated pulse derivatives — pea protein at 75 to 85 percent crude protein — are used to raise the headline protein figure. This matters because adding plant-protein isolates can shift the amino-acid balance of the diet: the crude-protein number rises, but the contribution to a complete, animal-quality amino-acid profile is different from animal protein. A high crude-protein figure built partly on pea protein does not mean the same thing as one built on animal protein. See [[Animal Protein Sources|/ingredients/animal-protein-sources]] and [[Dietary Protein Requirements|/nutrition/dietary-protein-requirements]]." },
      { h2: 'The DCM Connection', id: 'dcm' },
      { p: "From 2018, the FDA investigated dilated cardiomyopathy in dogs eating grain-free diets, and the formulation pattern most associated with cases was high in pulses (peas, lentils) and legume protein. The investigation established an association, not proven causation, and the mechanism remains unresolved — taurine status, bioavailability, and other factors are under study. Because the signal centers on pulse-heavy diets specifically, legume proportion is a reasonable thing to consider in at-risk dogs. See [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]]." },
      { h2: 'Anti-Nutritional Factors', id: 'antinutritional' },
      { p: "Raw legumes contain anti-nutritional factors (such as lectins, phytates, and enzyme inhibitors) that can interfere with digestion and mineral absorption, but cooking — which all pet food pulses undergo — reduces these substantially. Phytate can still bind some minerals, a minor consideration in well-formulated diets that account for it. Properly processed legumes are digestible; the anti-nutritional concern applies mainly to raw pulses. See [[Minerals in Pet Food|/nutrition/minerals-in-pet-food]]." },
      { h2: 'Reading a Pulse-Heavy Panel', id: 'panel' },
      { p: "When several pulses and pulse fractions appear high on the ingredient list (peas, pea protein, pea starch, lentils, chickpeas), the diet is pulse-heavy, and the practice of ingredient splitting can spread legumes across multiple entries to keep any single one lower on the list. For dogs in DCM-predisposed breeds or with cardiac concerns, a pulse-heavy formula is worth discussing with the veterinarian. For most animals, moderate legume inclusion is fine. See [[Reading a Pet Food Label|/guides/reading-pet-food-labels]]." },
    ],
    related: [
      { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
      { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
      { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
    ],
    sources: [...STD, SRC.fdaDcm],
  },

  {
    dir: D, slug: 'whole-grains-rice-oats-barley', date: '2026-06-01',
    title: 'Whole Grains — Rice, Oats, and Barley',
    metaTitle: 'Whole Grains in Pet Food — Rice, Oats, Barley | PetFood.com',
    metaDesc:
      'What grains contribute to pet diets, digestibility of rice vs corn vs wheat, the gluten question, and why grain-inclusive is a sound default for most pets.',
    category: 'Ingredient Reference', readTime: '9 min',
    hero:
      "Grains were the default carbohydrate in pet food until grain-free marketing recast them as villains. In fact, properly processed grains are digestible, contribute energy and nutrients, and are a sound choice for most animals. This page covers what rice, oats, barley, and other grains bring to a diet and the narrow cases where avoidance is warranted.",
    toc: [
      { label: 'What Grains Contribute', id: 'contribute' },
      { label: 'Rice', id: 'rice' },
      { label: 'Oats and Barley', id: 'oatsbarley' },
      { label: 'The Gluten Question', id: 'gluten' },
      { label: 'Whole vs Refined', id: 'wholerefined' },
      { label: 'When to Avoid Grain', id: 'avoid' },
    ],
    body: [
      { p: "Grains — rice, oats, barley, corn, wheat, sorghum — provide digestible carbohydrate energy, fiber, some protein, and B-vitamins and minerals in pet diets. Cooked and ground for pet food, they are well utilized by dogs and cats. The grain-free narrative cast grains as fillers and allergens, but the evidence supports grains as functional, digestible ingredients suitable for most animals. See [[Grain-Free vs Grain-Inclusive|/compare/grain-free-vs-grain-inclusive]]." },
      { h2: 'What Grains Contribute', id: 'contribute' },
      { p: "Grains supply the starch that, gelatinized in extrusion, both provides energy and binds kibble together. They also contribute fiber for digestive health, plant protein, essential fatty acids in some cases, and B-vitamins and minerals. As a digestible energy source in a complete diet, grains do real work. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'Rice', id: 'rice' },
      { p: "Rice is among the most digestible carbohydrate sources in pet food and is gentle on the gut, which is why it features in many gastrointestinal and sensitive-stomach diets (the classic bland diet pairs rice with a lean protein). Brown rice retains more fiber and nutrients than white rice. Rice is hypoallergenic in the practical sense that it rarely triggers food allergy, making it a common choice for sensitive animals. See [[Fiber and Digestive Health Diets|/diets/fiber-and-digestive-health]]." },
      { h2: 'Oats and Barley', id: 'oatsbarley' },
      { p: "Oats provide soluble fiber (beta-glucan) with digestive benefits and are well tolerated; barley contributes fiber and a moderate glycemic response. Both are whole grains offering fiber and nutrients beyond simple energy. They appear in many grain-inclusive diets as alternatives or complements to rice and corn, broadening the nutrient and fiber profile of the diet." },
      { h2: 'The Gluten Question', id: 'gluten' },
      { p: "Gluten is a protein found in wheat, barley, and rye (not in rice, corn, or oats). Gluten sensitivity is genuinely documented in a specific line of Irish Setters with a gluten-sensitive enteropathy, but it is rare across the general dog population, and most dogs and cats tolerate gluten-containing grains without issue. The human gluten-free trend does not translate to a general pet need. For the rare diagnosed case, gluten avoidance is appropriate. See [[Food Allergy and Elimination Diets|/diets/food-allergy-and-elimination-diets]]." },
      { h2: 'Whole vs Refined', id: 'wholerefined' },
      { p: "Whole grains retain the bran and germ, supplying more fiber, B-vitamins, and minerals than refined grains, which are stripped to the starchy endosperm. Whole grains (brown rice, whole oats, barley) generally offer a better nutrient and fiber profile, though refined grains like white rice have a place in highly digestible therapeutic diets where low residue is the goal. The choice depends on the diet's purpose. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'When to Avoid Grain', id: 'avoid' },
      { p: "Grain avoidance is warranted in the uncommon case of a confirmed grain allergy or a specific diagnosed enteropathy, identified by elimination trial — not as a default. For most animals, a grain-inclusive diet from a reputable manufacturer is a sound, often preferable choice, particularly given the DCM signal associated with some legume-heavy grain-free formulas. See [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]]." },
    ],
    related: [
      { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
      { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
      { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'fish-and-marine-ingredients', date: '2026-06-01',
    title: 'Fish and Marine Ingredients',
    metaTitle: 'Fish and Marine Ingredients in Pet Food | PetFood.com',
    metaDesc:
      'Salmon, whitefish, fish meal, and fish oil in pet diets, the omega-3 benefit, the thiamine and mercury considerations, and sustainability and sourcing.',
    category: 'Ingredient Reference', readTime: '10 min',
    hero:
      "Fish and marine ingredients bring valuable omega-3 fatty acids and high-quality protein to pet food, which is why salmon and whitefish recipes are popular and why fish oil is added to so many therapeutic diets. But marine ingredients also carry specific considerations — thiaminase in some raw fish, heavy-metal accumulation, and sustainability. This page covers the benefits and the caveats.",
    toc: [
      { label: 'Why Fish Is Used', id: 'why' },
      { label: 'Whole Fish vs Fish Meal', id: 'wholevsmeal' },
      { label: 'The Omega-3 Benefit', id: 'omega3' },
      { label: 'Thiamine and Raw Fish', id: 'thiamine' },
      { label: 'Mercury and Heavy Metals', id: 'mercury' },
      { label: 'Sustainability and Sourcing', id: 'sustainability' },
    ],
    body: [
      { p: "Fish and marine ingredients — named fish (salmon, whitefish, herring), fish meal, and fish oil — supply high-quality animal protein and, importantly, the long-chain omega-3 fatty acids EPA and DHA. They are valued both as a primary protein and as a functional omega-3 source. They also carry specific considerations around thiamine, contaminants, and sustainability that distinguish them from land-animal proteins. See [[Animal Protein Sources|/ingredients/animal-protein-sources]] and [[Fish Oil and Omega-3 Supplements|/supplements/fish-oil-omega-3]]." },
      { h2: 'Why Fish Is Used', id: 'why' },
      { p: "Fish provides a complete, highly digestible animal protein and is a leading natural source of EPA and DHA, the omega-3s with evidence for skin, joint, and other benefits. Named fish also serves as a novel protein for some animals in allergy management. These advantages make fish a desirable ingredient in both maintenance and therapeutic diets. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'Whole Fish vs Fish Meal', id: 'wholevsmeal' },
      { p: "As with land animals, whole fish (for example, salmon) is the wet, unrendered ingredient, while fish meal is the rendered, dried, concentrated product. Named fish meal (salmon meal, herring meal) is nutrient- and protein-dense and contributes more finished-product protein per ingoing pound than whole fish, which is mostly water. Generic fish meal is less transparent than a species-named meal. The transparency and concentration logic mirrors that for poultry and meat. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'The Omega-3 Benefit', id: 'omega3' },
      { p: "The standout nutritional advantage of marine ingredients is their EPA and DHA content. Diets built on fish, or supplemented with fish oil, deliver these omega-3s in their bioavailable pre-formed marine form — far more useful than the plant-derived alpha-linolenic acid that dogs and cats convert poorly. This is why fish-based and fish-oil-enriched diets feature in skin, joint, kidney, and cardiac nutrition. See [[Joint and Mobility Diets|/diets/joint-and-mobility-diets]]." },
      { h2: 'Thiamine and Raw Fish', id: 'thiamine' },
      { p: "Some raw fish contain thiaminase, an enzyme that destroys thiamine (vitamin B1), and diets heavy in certain raw fish have caused thiamine deficiency, particularly in cats. Cooking inactivates thiaminase, so cooked commercial fish diets are not a concern, and complete diets are supplemented with thiamine. The risk applies to raw or all-fish home diets, not properly formulated cooked commercial foods. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'Mercury and Heavy Metals', id: 'mercury' },
      { p: "Fish can accumulate mercury and other heavy metals, with larger, longer-lived predatory species accumulating more. The levels in commercial pet food fish ingredients are generally low and regulated, and most diets use smaller forage fish or salmon rather than large predators. For animals eating fish-based diets long-term, sourcing from reputable manufacturers that test for contaminants is the relevant safeguard; this is a minor consideration in well-sourced foods." },
      { h2: 'Sustainability and Sourcing', id: 'sustainability' },
      { p: "Marine ingredient sustainability varies with the fishery and species. Some manufacturers use byproducts of the human seafood industry or certified-sustainable sources; others do not disclose. For owners who weigh environmental impact, manufacturer transparency on fish sourcing and certification (such as Marine Stewardship Council) is the relevant signal. As with all ingredients, disclosure is the differentiator. See [[Scoring Methodology|/guides/methodology]]." },
    ],
    related: [
      { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
      { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
      { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'ingredient-splitting', date: '2026-06-01',
    title: 'Ingredient Splitting on Pet Food Labels',
    metaTitle: 'Ingredient Splitting on Pet Food Labels Explained | PetFood.com',
    metaDesc:
      'How ingredient splitting manipulates the descending-weight ingredient order, worked examples, and how to read a label to see through the practice.',
    category: 'Ingredient Reference', readTime: '9 min',
    hero:
      "The ingredient list is ordered by weight, which owners use to judge what a food is mostly made of — and manufacturers can game that order through ingredient splitting. By dividing one ingredient into several sub-types, a brand can push a less-desirable component down the list. This page explains the practice and how to read past it.",
    toc: [
      { label: 'The Descending-Order Rule', id: 'rule' },
      { label: 'How Splitting Works', id: 'howworks' },
      { label: 'A Worked Example', id: 'example' },
      { label: 'The Fresh-Meat First Trick', id: 'freshmeat' },
      { label: 'Seeing Through It', id: 'seeingthrough' },
      { label: 'What to Trust Instead', id: 'trust' },
    ],
    body: [
      { p: "AAFCO requires the ingredient list to be ordered by ingoing weight before processing, descending. Owners reasonably read the first few ingredients as what the food is mostly made of. Ingredient splitting exploits this by dividing one component into multiple named fractions, each of which weighs less individually and so appears lower on the list — making a less-desirable ingredient look like a minor one. See [[Reading a Pet Food Label|/guides/reading-pet-food-labels]]." },
      { h2: 'The Descending-Order Rule', id: 'rule' },
      { p: "Each ingredient is listed by its weight as it goes into the batch, heaviest first. This single rule drives most label interpretation — and most label confusion. Because the order is by weight, not by nutritional contribution, and because water-heavy fresh ingredients rank higher than their dry contribution warrants, the order can mislead even without deliberate manipulation. See [[Animal Protein Sources|/ingredients/animal-protein-sources]]." },
      { h2: 'How Splitting Works', id: 'howworks' },
      { p: "Splitting divides what is functionally one ingredient into several named entries — for example, listing peas, pea protein, pea fiber, and pea starch separately rather than as total pea content. Each fraction weighs less than the combined total, so each ranks lower on the list, and an animal protein can appear first even though the combined plant fractions outweigh it. The same trick applies to splitting grains (ground corn, corn gluten meal, corn bran) or other components." },
      { h2: 'A Worked Example', id: 'example' },
      { p: "Imagine a recipe with 30 units of chicken, and peas split into 12 units pea protein, 10 units pea starch, and 8 units pea fiber (30 units of pea components total). The label reads: chicken, pea protein, pea starch, pea fiber — chicken appears first and dominant. But the combined pea content (30 units) equals the chicken, and if the chicken is fresh (mostly water), its finished contribution is far smaller. The list implies a meat-first food; the formula is heavily plant-based. See [[Legumes — Peas, Lentils, and Chickpeas|/ingredients/legumes-peas-and-lentils]]." },
      { h2: 'The Fresh-Meat First Trick', id: 'freshmeat' },
      { p: "Compounding the issue, fresh meat is roughly 70 percent water at the ingoing step, so it ranks high by weight but contributes far less to the finished, dried kibble. A recipe leading with fresh chicken followed by split plant fractions can be plant-dominant in the finished product despite a meat-first appearance. Pairing fresh meat with a named meal lower in the list is a more honest way to deliver meat content. See [[Dry-Matter Basis Explained|/nutrition/dry-matter-basis-explained]]." },
      { h2: 'Seeing Through It', id: 'seeingthrough' },
      { p: "To see through splitting, mentally recombine related fractions: add up all the pea entries, all the corn entries, all the rice entries, and consider whether the combined plant content rivals or exceeds the animal protein. Note where fresh (wet) versus meal (dry) proteins sit. A long list of same-source fractions scattered through the panel is a flag for splitting." },
      { h2: 'What to Trust Instead', id: 'trust' },
      { p: "Because the ingredient order is gameable, do not rely on it alone. Use the guaranteed analysis (on a dry-matter basis), request the typical analysis and the dry-matter nutrient breakdown from the manufacturer, check the AAFCO substantiation, and weigh manufacturer transparency. The ingredient list is one input among several, not the verdict. See [[The Guaranteed Analysis Explained|/nutrition/guaranteed-analysis-explained]] and [[Scoring Methodology|/guides/methodology]]." },
    ],
    related: [
      { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
      { label: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
      { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'additives-and-supplements-on-labels', date: '2026-06-01',
    title: 'Additives on Pet Food Labels',
    metaTitle: 'Pet Food Additives — Vitamins, Minerals, Flavors | PetFood.com',
    metaDesc:
      'What the long list of additives at the end of the ingredient panel means — vitamin and mineral premixes, palatants, emulsifiers, colors, and which to watch.',
    category: 'Ingredient Reference', readTime: '9 min',
    hero:
      "The tail end of a pet food ingredient list — a long string of vitamins, minerals, and chemical-sounding names — alarms many owners, but most of it is the supplement premix that makes the food complete. This page decodes the additives at the bottom of the panel: which are essential, which are functional, and which (like artificial colors) add nothing nutritional.",
    toc: [
      { label: 'The Bottom of the Panel', id: 'bottom' },
      { label: 'Vitamin and Mineral Premix', id: 'premix' },
      { label: 'Chelated Minerals', id: 'chelated' },
      { label: 'Palatants and Flavors', id: 'palatants' },
      { label: 'Emulsifiers and Texturizers', id: 'emulsifiers' },
      { label: 'Colors — Cosmetic Only', id: 'colors' },
    ],
    body: [
      { p: "After the main ingredients, a complete pet food lists a long series of added vitamins, minerals, amino acids, and other additives. The chemical-sounding names can look concerning, but most are the supplement premix that brings the food to AAFCO completeness, plus functional additives for palatability, texture, and preservation. Understanding what each group does removes most of the alarm. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]] and [[Minerals in Pet Food|/nutrition/minerals-in-pet-food]]." },
      { h2: 'The Bottom of the Panel', id: 'bottom' },
      { p: "Because the panel is ordered by weight, the additives present in tiny amounts cluster at the bottom. Their position reflects their small quantity, not low importance — many are essential nutrients added in milligram or microgram amounts. A long additive tail is normal and expected on a complete diet; its absence would more likely indicate an incomplete product. See [[The Guaranteed Analysis Explained|/nutrition/guaranteed-analysis-explained]]." },
      { h2: 'Vitamin and Mineral Premix', id: 'premix' },
      { p: "The string of vitamin names (vitamin E supplement, thiamine mononitrate, pyridoxine hydrochloride, vitamin B12 supplement, and so on) and mineral sources (zinc sulfate, copper sulfate, ferrous sulfate, and others) is the premix added to guarantee the diet meets AAFCO nutrient profiles after processing losses. These are essential nutrients, not unnecessary chemicals — their chemical names simply name the specific compound supplying the nutrient. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'Chelated Minerals', id: 'chelated' },
      { p: "Minerals listed as a proteinate, amino-acid complex, or chelate (zinc proteinate, copper amino-acid complex) are organic chelated forms, generally more bioavailable than inorganic mineral salts. Their presence indicates the manufacturer chose a more absorbable mineral source. This is a modest quality signal, not a red flag. See [[Minerals in Pet Food|/nutrition/minerals-in-pet-food]]." },
      { h2: 'Palatants and Flavors', id: 'palatants' },
      { p: "Palatants — natural flavor, animal digest, hydrolyzed liver — make the food appealing, especially important for cats and for therapeutic diets that are otherwise less palatable. Animal digest, despite the unappetizing name, is a flavor enhancer made from enzymatically treated animal tissue and is a normal, safe additive. Natural flavor is a defined term covering these. They serve the real function of getting the animal to eat. See [[Pet Food Marketing Terms|/myths/marketing-terms-decoded]]." },
      { h2: 'Emulsifiers and Texturizers', id: 'emulsifiers' },
      { p: "Canned and some other foods include emulsifiers, gums (guar gum, carrageenan, xanthan gum), and humectants that control texture, moisture, and consistency. These are functional additives that keep the product stable and palatable. Carrageenan has drawn some debate, but it remains an approved additive; the evidence for harm at use levels in pet food is not established. Most texturizers are benign functional ingredients." },
      { h2: 'Colors — Cosmetic Only', id: 'colors' },
      { p: "Artificial colors (dyes named with numbers, such as Red 40 or Yellow 5) and some natural colorants add no nutritional value and exist purely to make the food look appealing to the human buyer — the animal does not care about color. Colors are the one additive category an owner can reasonably prefer to avoid, since they serve no purpose for the pet, though approved colors are not established as harmful at use levels. Many higher-end foods omit artificial colors. See [[Scoring Methodology|/guides/methodology]]." },
    ],
    related: [
      { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
      { label: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
    ],
    sources: [...STD, SRC.fdaPet],
  },
]

export const INGREDIENTS = RAW.map((p) => ({ ...p, hubName: 'Ingredients' }))
