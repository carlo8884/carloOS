import { SRC, STD } from './_shared.mjs'

const D = 'species'

const RAW = [
  {
    dir: D, slug: 'dog-vs-cat-nutrition-overview', date: '2026-06-01',
    title: 'Dog vs Cat Nutrition',
    metaTitle: 'Dog vs Cat Nutrition — Why They Differ | PetFood.com',
    metaDesc:
      'The core metabolic differences between dogs and cats — obligate carnivore vs facultative omnivore — and why a cat cannot live on dog food.',
    category: 'Species Nutrition', readTime: '11 min',
    hero:
      "Dogs and cats are not small versions of the same animal nutritionally. The cat is an obligate carnivore with hard dietary requirements the dog can synthesize internally, and these differences are written into the separate AAFCO profiles. Understanding them explains why a cat cannot live on dog food and why species-appropriate feeding is a requirement, not a preference.",
    toc: [
      { label: 'Carnivore vs Omnivore', id: 'carnivoreomnivore' },
      { label: 'Protein and Amino Acids', id: 'protein' },
      { label: 'Taurine and Arginine', id: 'taurinearginine' },
      { label: 'Vitamin A and Niacin', id: 'vitaminaniacin' },
      { label: 'Fat — Arachidonic Acid', id: 'fat' },
      { label: 'Why Dog Food Fails Cats', id: 'whyfails' },
    ],
    body: [
      { p: "Dogs and cats diverged onto different nutritional paths through evolution. The cat is a strict (obligate) carnivore whose metabolism assumes a diet of animal tissue and which has lost the ability to make several nutrients from plant precursors. The dog is a facultative omnivore, more flexible, able to synthesize nutrients the cat must eat pre-formed. The AAFCO Dog and Cat Food Nutrient Profiles encode these differences, and they are the reason the two species need different food. See [[Dietary Protein Requirements|/nutrition/dietary-protein-requirements]]." },
      { h2: 'Carnivore vs Omnivore', id: 'carnivoreomnivore' },
      { p: "Cats evolved as desert-dwelling hunters eating whole small prey — high protein, high moisture, very low carbohydrate. Their physiology reflects this: a continuous high rate of protein use, limited carbohydrate-handling enzymes, a weak thirst drive, and obligate dietary requirements for nutrients found only in animal tissue. Dogs, sharing a long domestication history with humans, adapted to a broader diet, including expanded starch-digestion capacity, and can derive nutrition from a wider ingredient base. See [[Cats Are Obligate Carnivores|/species/cats-are-obligate-carnivores]]." },
      { h2: 'Protein and Amino Acids', id: 'protein' },
      { p: "Cats require more dietary protein than dogs as a fraction of energy and cannot downregulate protein catabolism when intake is low, which makes protein-restricted diets riskier for cats. The AAFCO cat profile sets higher protein minimums (30 percent dry-matter for adult maintenance) than the dog profile (18 percent). Cats also have higher requirements for several specific amino acids. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]]." },
      { h2: 'Taurine and Arginine', id: 'taurinearginine' },
      { p: "Taurine is an essential dietary nutrient for cats — they cannot synthesize enough and continuously lose it conjugating bile acids — and dietary deficiency causes blindness and heart disease. Dogs synthesize taurine and have no dietary requirement (with breed exceptions). Arginine is critically essential for cats: a single arginine-deficient meal can cause dangerous hyperammonemia, because the feline urea cycle cannot tolerate arginine shortage. Both requirements are met by animal tissue and supplementation. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]]." },
      { h2: 'Vitamin A and Niacin', id: 'vitaminaniacin' },
      { p: "Cats cannot convert beta-carotene (the plant form) to retinol-form vitamin A and so require pre-formed vitamin A from animal sources. They also cannot synthesize adequate niacin from tryptophan, so they require dietary niacin. Dogs can perform both conversions. These are clear biochemical reasons a cat needs an animal-based, feline-formulated diet. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'Fat — Arachidonic Acid', id: 'fat' },
      { p: "Cats require pre-formed arachidonic acid, an omega-6 fatty acid found in animal fat, because they lack adequate enzyme activity to make it from plant-derived linoleic acid. Dogs can synthesize arachidonic acid and do not require it in the diet. This is another nutrient that a plant-only diet cannot supply to a cat and that the dog can make on its own. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'Why Dog Food Fails Cats', id: 'whyfails' },
      { p: "Put together, the differences mean a dog food cannot meet a cat's needs: it is typically too low in protein, may lack adequate taurine, does not guarantee pre-formed vitamin A and arachidonic acid at feline levels, and may not supply enough niacin. A cat fed dog food long-term risks taurine-deficiency heart disease and blindness, vitamin A deficiency, and protein inadequacy. Feeding each species its own complete, species-formulated diet is a nutritional necessity. See [[Feeding Multiple Pets|/feeding/feeding-multiple-pets]]." },
    ],
    related: [
      { label: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
      { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
      { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'cats-are-obligate-carnivores', date: '2026-06-01',
    title: 'Cats Are Obligate Carnivores',
    metaTitle: 'What Obligate Carnivore Means for Cat Nutrition | PetFood.com',
    metaDesc:
      'What obligate carnivore means in practice for feline diets — the metabolic adaptations, the vegan-cat problem, and the dietary requirements that follow.',
    category: 'Species Nutrition', readTime: '10 min',
    hero:
      "Obligate carnivore is a precise biological term, not a marketing slogan: the cat's metabolism is built around eating animal tissue and has lost the flexibility omnivores retain. This shapes everything about feline nutrition, from protein needs to the impossibility of a healthy plant-only cat diet without heavy synthetic supplementation. This page explains what the term actually means.",
    toc: [
      { label: 'The Term Defined', id: 'defined' },
      { label: 'Metabolic Adaptations', id: 'adaptations' },
      { label: 'The Required Nutrients', id: 'nutrients' },
      { label: 'Carbohydrate Handling', id: 'carbohydrate' },
      { label: 'The Vegan-Cat Problem', id: 'vegan' },
      { label: 'Practical Implications', id: 'practical' },
    ],
    body: [
      { p: "An obligate carnivore is an animal that must consume animal tissue to obtain certain nutrients it cannot synthesize, because its metabolism has specialized for a meat diet and lost biochemical pathways that omnivores retain. The domestic cat is the textbook example. This is a statement about physiology, not philosophy, and it underlies the entire feline AAFCO nutrient profile. See [[Dog vs Cat Nutrition|/species/dog-vs-cat-nutrition-overview]]." },
      { h2: 'The Term Defined', id: 'defined' },
      { p: "Obligate means required, and carnivore means meat-eater: the cat is obligated by its biology to eat animal tissue. Over evolution as a hunter of small prey, the cat lost or downregulated several enzymatic pathways that would let it make certain nutrients from plant precursors, because its diet always supplied them pre-formed. The lost flexibility is the defining feature." },
      { h2: 'Metabolic Adaptations', id: 'adaptations' },
      { p: "Cats run a continuously high rate of protein metabolism and cannot fully downregulate it when protein is scarce, so they need a steady high-protein intake. They have a weak thirst drive adapted to obtaining water from prey, limited capacity to handle large carbohydrate loads, and an obligatory use of taurine to conjugate bile acids, continuously depleting it. Each adaptation reflects the prey-based ancestral diet. See [[Water and Hydration|/nutrition/water-and-hydration]]." },
      { h2: 'The Required Nutrients', id: 'nutrients' },
      { p: "The cat must obtain from the diet: taurine (cannot synthesize enough), arginine (urea cycle cannot tolerate shortage), pre-formed vitamin A (cannot convert beta-carotene), arachidonic acid (cannot make it from linoleic acid), and niacin (inadequate synthesis from tryptophan), among others. All of these are present in animal tissue and are why a feline diet is animal-based and feline-formulated. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]] and [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'Carbohydrate Handling', id: 'carbohydrate' },
      { p: "Cats have low salivary amylase and reduced intestinal disaccharidase activity relative to omnivores, reflecting a diet historically low in carbohydrate. They can use moderate dietary carbohydrate but do best on protein-forward diets, and high-carbohydrate feeding is one factor in feline obesity and diabetes. This is the metabolic basis for favoring lower-carbohydrate diets in many cats. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'The Vegan-Cat Problem', id: 'vegan' },
      { p: "Because cats require nutrients found naturally only in animal tissue, a plant-only cat diet is possible solely with heavy synthetic supplementation of taurine, arachidonic acid, pre-formed vitamin A, and others — and the long-term safety and nutritional adequacy of such diets remain debated and harder to guarantee. The obligate-carnivore biology is precisely why a vegan diet is far more problematic for a cat than for a dog. Any such diet should be undertaken only with veterinary and nutritionist oversight." },
      { h2: 'Practical Implications', id: 'practical' },
      { p: "In practice, obligate-carnivore status means: feed a complete, animal-based, feline-formulated diet; never substitute dog food; favor adequate protein and consider lower-carbohydrate, higher-moisture options especially for at-risk cats; and treat the feline nutrient requirements as non-negotiable. The term is not marketing — it is the reason cat food and dog food are formulated differently. See [[Kibble vs Canned for Cats|/compare/kibble-vs-canned-for-cats]]." },
    ],
    related: [
      { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
      { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
      { label: 'Kibble vs Canned for Cats', href: '/compare/kibble-vs-canned-for-cats' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'are-dogs-carnivores-or-omnivores', date: '2026-06-01',
    title: 'Are Dogs Carnivores or Omnivores?',
    metaTitle: 'Are Dogs Carnivores or Omnivores? — The Evidence | PetFood.com',
    metaDesc:
      'What domestication and starch-digestion genetics tell us about the canine diet, why dogs are facultative omnivores, and what this means for feeding.',
    category: 'Species Nutrition', readTime: '10 min',
    hero:
      "The claim that dogs are carnivores like their wolf ancestors is a popular premise behind raw and meat-heavy diets, but the genetics of domestication tell a more nuanced story. Dogs adapted to a starch-richer diet alongside humans and are best described as facultative omnivores. This page covers the evidence and what it means for how to feed a dog.",
    toc: [
      { label: 'The Wolf Comparison', id: 'wolf' },
      { label: 'Domestication and Amylase', id: 'amylase' },
      { label: 'Facultative Omnivore', id: 'facultative' },
      { label: 'What Dogs Can Synthesize', id: 'synthesize' },
      { label: 'Dietary Flexibility', id: 'flexibility' },
      { label: 'Practical Feeding', id: 'practical' },
    ],
    body: [
      { p: "Dogs descend from wolves, and the assumption that they share the wolf's carnivorous physiology drives much of the meat-maximalist marketing in pet food. But dogs diverged from wolves through a long domestication process that included dietary adaptation, and modern dogs are not metabolically identical to wolves. The evidence points to the dog as a facultative omnivore — able to thrive on a meat-based diet but also adapted to use carbohydrate. See [[Dog vs Cat Nutrition|/species/dog-vs-cat-nutrition-overview]]." },
      { h2: 'The Wolf Comparison', id: 'wolf' },
      { p: "While dogs and wolves are closely related, domestication over roughly 15,000 to 30,000 years selected for traits suited to living alongside humans, including the ability to digest the starch-rich scraps of human settlements. Treating the modern dog as a captive wolf ignores this adaptation. The wolf comparison is a starting point, not a conclusion about how to feed a dog." },
      { h2: 'Domestication and Amylase', id: 'amylase' },
      { p: "A landmark genetic finding is that dogs, compared with wolves, carry expanded copy numbers of the gene for pancreatic amylase (AMY2B) and show adaptations improving starch and glucose digestion. This is direct molecular evidence that dogs adapted to a higher-starch diet during domestication — a key difference from their wolf ancestors and from obligate carnivores like the cat. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'Facultative Omnivore', id: 'facultative' },
      { p: "The dog is best described as a facultative omnivore: primarily adapted to a meat-rich diet but able to digest and use carbohydrate and a broad range of ingredients. This is distinct from the cat (obligate carnivore) and from a true omnivore. The practical meaning is dietary flexibility — dogs can thrive on well-formulated diets across a range of ingredient compositions, provided the diet is complete and balanced." },
      { h2: 'What Dogs Can Synthesize', id: 'synthesize' },
      { p: "Unlike cats, dogs can synthesize taurine (in most breeds) from sulfur amino acids, convert beta-carotene to vitamin A, and make arachidonic acid from linoleic acid. This metabolic flexibility is why dogs have no dietary requirement for several nutrients that cats must eat pre-formed, and why dog food can be formulated with a broader ingredient base than cat food. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]]." },
      { h2: 'Dietary Flexibility', id: 'flexibility' },
      { p: "Because dogs are flexible, there is no single correct macronutrient ratio for all dogs — a well-formulated higher-protein diet and a well-formulated moderate-carbohydrate diet can both support health. Individual needs vary with activity, life stage, and health. The flexibility does not mean carbohydrate is required (it is not) or that any diet works; it means the dog tolerates a range of complete diets. See [[Dietary Protein Requirements|/nutrition/dietary-protein-requirements]]." },
      { h2: 'Practical Feeding', id: 'practical' },
      { p: "For feeding a dog, the carnivore-versus-omnivore debate matters less than diet quality: feed a complete and balanced diet appropriate to life stage, with adequate high-quality protein and essential fatty acids, from a transparent manufacturer. The dog's omnivore flexibility means the ingredient base can vary; the completeness and balance cannot. Do not let the wolf myth drive an unbalanced meat-only home diet. See [[Home-Cooked vs Commercial Diets|/compare/home-cooked-vs-commercial]]." },
    ],
    related: [
      { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
      { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
      { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'feeding-cats-vs-dogs-differences', date: '2026-06-01',
    title: 'Feeding Cats vs Dogs — Practical Differences',
    metaTitle: 'Feeding Cats vs Dogs — Practical Differences | PetFood.com',
    metaDesc:
      'How feeding routines differ between cats and dogs — meal patterns, food motivation, neophobia, free-feeding risks, and translating nutrition into daily practice.',
    category: 'Species Nutrition', readTime: '9 min',
    hero:
      "Beyond the biochemistry, cats and dogs differ in how they eat — and getting the routine right is as important as getting the formula right. Dogs are food-motivated gorgers; cats are grazers that can be fussy and prone to fixed preferences. This page translates the species differences into practical feeding routines.",
    toc: [
      { label: 'Eating Patterns', id: 'patterns' },
      { label: 'Food Motivation', id: 'motivation' },
      { label: 'Neophobia and Preferences', id: 'neophobia' },
      { label: 'Free-Feeding Risks', id: 'freefeeding' },
      { label: 'Water and Format', id: 'water' },
      { label: 'Putting It Together', id: 'together' },
    ],
    body: [
      { p: "The nutritional differences between cats and dogs translate into different feeding behaviors and routines. A feeding plan that works for a dog can fail for a cat and vice versa. Understanding how each species naturally eats — and where that behavior creates problems in a household — helps owners build routines that support good nutrition and a healthy weight. See [[Feeding Frequency and Schedules|/feeding/feeding-frequency-and-schedules]]." },
      { h2: 'Eating Patterns', id: 'patterns' },
      { p: "Dogs, descended from pack hunters, tend to eat quickly and opportunistically — gorging when food is available, which suits meal feeding. Cats, hunters of small prey, naturally eat many small meals throughout the day, which is why cats often graze and why several small measured meals (or a measured portion in a puzzle feeder) suit feline physiology. Forcing a cat into a single large meal works against its nature; letting a dog graze invites overeating." },
      { h2: 'Food Motivation', id: 'motivation' },
      { p: "Most dogs are highly food-motivated, which makes treats powerful training tools but also makes overfeeding and treat-driven weight gain easy. Cats are generally less food-motivated and more selective, so food is a weaker training lever and fussiness is more common. The dog's food drive demands treat discipline; the cat's selectivity demands patience with diet changes. See [[Treats and the 10 Percent Rule|/feeding/treats-and-the-ten-percent-rule]]." },
      { h2: 'Neophobia and Preferences', id: 'neophobia' },
      { p: "Cats can develop strong, fixed food preferences and food neophobia (reluctance to try new foods), often shaped by early-life exposure and by texture as much as flavor. This makes diet transitions harder in cats and means an owner who frequently switches a cat's food to chase preference can train fussiness. Dogs are generally more willing to accept new foods. Gradual transitions matter especially for cats. See [[How to Transition Pet Food|/feeding/how-to-transition-pet-food]]." },
      { h2: 'Free-Feeding Risks', id: 'freefeeding' },
      { p: "Free-feeding (food left out) is common for cats because of their grazing nature, but on energy-dense dry food it drives overconsumption and obesity, and it hides intake so illness is harder to notice. For dogs, free-feeding almost guarantees overeating. Measured feeding — even if delivered as several small meals or via puzzle feeders for cats — is preferred for both species for weight control and monitoring. See [[How Much to Feed a Cat|/feeding/how-much-to-feed-a-cat]]." },
      { h2: 'Water and Format', id: 'water' },
      { p: "Cats, with their weak thirst drive, benefit from moisture-rich food and multiple water sources, making canned food and water fountains more valuable for them than for dogs. Dogs drink readily and have less format-driven hydration concern. This species difference is a reason wet food carries more weight in feline feeding decisions. See [[Water and Hydration|/nutrition/water-and-hydration]] and [[Kibble vs Canned for Cats|/compare/kibble-vs-canned-for-cats]]." },
      { h2: 'Putting It Together', id: 'together' },
      { p: "For dogs: measured meals (usually twice daily), strict treat discipline, and slow-feeders for fast eaters. For cats: several small measured meals or puzzle feeding, patience and gradual change for transitions, attention to hydration and format, and avoidance of free-fed dry food in weight-prone cats. Both species: count all calories, monitor body condition, and keep the species on their own complete, species-appropriate diets. See [[Body Condition Scoring|/feeding/body-condition-scoring]]." },
    ],
    related: [
      { label: 'Feeding Frequency and Schedules', href: '/feeding/feeding-frequency-and-schedules' },
      { label: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
      { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
    ],
    sources: [...STD],
  },
]

export const SPECIES = RAW.map((p) => ({ ...p, hubName: 'Species' }))
