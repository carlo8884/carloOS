import { SRC, STD } from './_shared.mjs'

const D = 'supplements'

const RAW = [
  {
    dir: D, slug: 'fish-oil-omega-3', date: '2026-06-01',
    title: 'Fish Oil and Omega-3 Supplements',
    metaTitle: 'Fish Oil and Omega-3 Supplements for Pets | PetFood.com',
    metaDesc:
      'The evidence for EPA and DHA in joint, skin, kidney, and heart health, dosing and quality concerns, oxidation, and why plant omega-3 sources fall short.',
    category: 'Supplement Reference', readTime: '10 min',
    hero:
      "Fish oil is the pet supplement with the strongest evidence base, supported for joint comfort, skin and coat, and as an adjunct in kidney and heart disease. But not all omega-3 supplements are equal — the active forms are the marine EPA and DHA, dose matters, and oxidation is a real quality problem. This page covers the evidence, the dosing, and the pitfalls.",
    toc: [
      { label: 'EPA and DHA', id: 'epadha' },
      { label: 'Evidence by Use', id: 'evidence' },
      { label: 'Why Marine, Not Plant', id: 'marine' },
      { label: 'Dosing', id: 'dosing' },
      { label: 'Quality and Oxidation', id: 'quality' },
      { label: 'Cautions', id: 'cautions' },
    ],
    body: [
      { p: "Fish oil supplies the long-chain omega-3 fatty acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), which modulate inflammation and support several tissues. Among pet supplements, omega-3 fatty acids have some of the best-supported clinical evidence, and they are incorporated into many therapeutic diets for exactly this reason. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'EPA and DHA', id: 'epadha' },
      { p: "EPA and DHA are the biologically active omega-3s. They shift the production of inflammatory mediators toward a less-inflammatory profile, which underlies their benefit in inflammatory and degenerative conditions. DHA also supports neural and retinal tissue, making it important in growth diets. The relevant figure on a supplement label is the combined EPA and DHA content, not the total fish-oil weight." },
      { h2: 'Evidence by Use', id: 'evidence' },
      { p: "The strongest evidence is in canine osteoarthritis, where high-dose EPA and DHA improve comfort and weight-bearing in controlled studies; in skin and coat health, where omega-3s help inflammatory skin disease; and as an adjunct in chronic kidney disease, where they may slow progression. There is supporting evidence for cardiac benefit in some conditions. Claims for cognitive and other benefits are more preliminary. See [[Joint and Mobility Diets|/diets/joint-and-mobility-diets]] and [[Kidney Disease Diets|/diets/kidney-disease-diets]]." },
      { h2: 'Why Marine, Not Plant', id: 'marine' },
      { p: "Plant omega-3 sources (flaxseed, chia) provide alpha-linolenic acid, which dogs and cats convert to EPA and DHA only inefficiently — and cats barely at all. To deliver meaningful EPA and DHA, the supplement should be marine-sourced: fish oil, krill oil, or algal oil (a vegetarian source of pre-formed DHA). Choosing a plant-based omega-3 supplement and expecting EPA/DHA effects is a common error. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'Dosing', id: 'dosing' },
      { p: "Effective doses for therapeutic effect (such as for arthritis) are higher than the small amounts in most maintenance diets, and are calculated per body weight by the veterinarian. Because dose matters and the EPA/DHA content varies widely between products, the supplement should be chosen on its actual EPA/DHA per serving, and the dose set with the veterinarian rather than by the bottle's generic instruction. Over-dosing carries its own risks (see cautions)." },
      { h2: 'Quality and Oxidation', id: 'quality' },
      { p: "Fish oil oxidizes readily, and oxidized oil is not only ineffective but potentially harmful. Choose products with antioxidant protection (such as added vitamin E), buy quantities that will be used before they go rancid, store as directed (often refrigerated after opening), and discard any oil that smells strongly rancid. Third-party purity testing (for heavy metals and oxidation) is a quality signal. See [[Pet Food Storage and Safety|/feeding/food-storage-and-safety]]." },
      { h2: 'Cautions', id: 'cautions' },
      { p: "Omega-3s are generally safe but not risk-free at high doses: they can affect platelet function and bleeding, may cause gastrointestinal upset or diarrhea, add calories (relevant in weight management), and very high intakes can affect immune function and vitamin E status. Animals on medications or with bleeding disorders, and those near surgery, should be supplemented only with veterinary guidance. As with any supplement, more is not automatically better." },
    ],
    related: [
      { label: 'Joint and Mobility Diets', href: '/diets/joint-and-mobility-diets' },
      { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
      { label: 'Glucosamine and Joint Supplements', href: '/supplements/glucosamine-and-joint-support' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'glucosamine-and-joint-support', date: '2026-06-01',
    title: 'Glucosamine and Joint Supplements',
    metaTitle: 'Glucosamine and Joint Supplements for Pets | PetFood.com',
    metaDesc:
      'What the evidence really shows for glucosamine, chondroitin, and green-lipped mussel, the supplement-regulation gap, quality concerns, and realistic expectations.',
    category: 'Supplement Reference', readTime: '9 min',
    hero:
      "Glucosamine and chondroitin are the best-selling joint supplements for pets, but their evidence base is weaker than their marketing implies, and the loosely regulated supplement market means product quality varies widely. This page lays out what the studies actually show, where these supplements fit, and how to set expectations.",
    toc: [
      { label: 'The Ingredients', id: 'ingredients' },
      { label: 'What the Evidence Shows', id: 'evidence' },
      { label: 'Green-Lipped Mussel', id: 'mussel' },
      { label: 'The Regulation Gap', id: 'regulation' },
      { label: 'Quality Concerns', id: 'quality' },
      { label: 'Realistic Expectations', id: 'expectations' },
    ],
    body: [
      { p: "Glucosamine and chondroitin sulfate are cartilage-component molecules marketed to support joint health in animals with osteoarthritis. They are among the most-used pet supplements and are widely added to mobility diets and treats. Their popularity outruns their evidence, and as supplements they sit in a lightly regulated market where label accuracy is not guaranteed. See [[Joint and Mobility Diets|/diets/joint-and-mobility-diets]]." },
      { h2: 'The Ingredients', id: 'ingredients' },
      { p: "Glucosamine is an amino sugar involved in building cartilage; chondroitin sulfate is a major structural component of cartilage. The rationale is that supplementing these building blocks supports cartilage maintenance and repair. They are often combined, sometimes with manganese, methylsulfonylmethane (MSM), or other additives. The theory is plausible; the clinical proof is the weak link." },
      { h2: 'What the Evidence Shows', id: 'evidence' },
      { p: "Controlled studies of glucosamine and chondroitin in dogs and cats show mixed results, with overall evidence generally weaker than for weight management and marine omega-3s. Some animals appear to benefit, and the supplements are generally safe, but they should not be expected to match the effect of weight loss, omega-3s, or veterinary pain medication. They are a reasonable low-risk adjunct, not a primary therapy. See [[Fish Oil and Omega-3 Supplements|/supplements/fish-oil-omega-3]]." },
      { h2: 'Green-Lipped Mussel', id: 'mussel' },
      { p: "Green-lipped mussel (Perna canaliculus) is a whole-food joint supplement supplying omega-3 fatty acids, glycosaminoglycans, and other compounds, with a modest but somewhat more encouraging evidence base than glucosamine alone in some studies. It appears in several mobility diets and supplements. As with the others, it is a low-risk adjunct rather than a cure, and quality and dose vary by product." },
      { h2: 'The Regulation Gap', id: 'regulation' },
      { p: "Pet supplements (nutraceuticals) are not regulated as rigorously as foods or drugs. They are not held to the AAFCO complete-and-balanced standard or to drug-level efficacy proof, and oversight of label accuracy and manufacturing is limited. This regulatory gap means the actual content can differ from the label and that efficacy claims are often unsubstantiated. Skepticism toward marketing claims is warranted. See [[Multivitamins for Pets|/supplements/multivitamins-for-pets]]." },
      { h2: 'Quality Concerns', id: 'quality' },
      { p: "Independent testing of joint supplements has at times found products containing less active ingredient than labeled. To reduce this risk, prefer products with third-party quality certification, a National Animal Supplement Council (NASC) seal, batch testing, and a reputable manufacturer. A cheap supplement that does not contain what it claims is not a bargain." },
      { h2: 'Realistic Expectations', id: 'expectations' },
      { p: "Glucosamine-based supplements are low-risk and may help some animals, but they are not a substitute for the interventions with stronger evidence — weight control, omega-3 fatty acids, and veterinary-directed pain management. Give any joint supplement adequate time (often several weeks) to show effect, evaluate the response honestly, and discuss the joint plan with the veterinarian rather than stacking unproven products. See [[Joint and Mobility Diets|/diets/joint-and-mobility-diets]]." },
    ],
    related: [
      { label: 'Joint and Mobility Diets', href: '/diets/joint-and-mobility-diets' },
      { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
      { label: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'probiotics-for-pets', date: '2026-06-01',
    title: 'Probiotics for Pets',
    metaTitle: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
    metaDesc:
      'How probiotics and prebiotics support the gut, the strain-specific evidence, why human probiotics are not interchangeable, viability and quality, and proper use.',
    category: 'Supplement Reference', readTime: '9 min',
    hero:
      "Probiotics have a genuine evidence base for specific uses in pets — notably acute diarrhea — but the benefits are strain-specific, human products are not interchangeable with pet ones, and product quality (viable organisms at the labeled count) is a recurring problem. This page covers what works, what does not, and how to choose a product.",
    toc: [
      { label: 'Probiotics and Prebiotics', id: 'probioticsprebiotics' },
      { label: 'The Gut Microbiome', id: 'microbiome' },
      { label: 'Evidence by Use', id: 'evidence' },
      { label: 'Strain Specificity', id: 'strain' },
      { label: 'Viability and Quality', id: 'viability' },
      { label: 'Using Probiotics Well', id: 'using' },
    ],
    body: [
      { p: "Probiotics are live microorganisms that, given in adequate amounts, confer a health benefit; prebiotics are fermentable fibers that feed beneficial gut bacteria. Together they aim to support a healthy gut microbiome. The pet probiotic category is large and uneven — some uses are well-supported, many marketing claims are not, and product quality varies considerably. See [[Fiber and Digestive Health Diets|/diets/fiber-and-digestive-health]]." },
      { h2: 'Probiotics and Prebiotics', id: 'probioticsprebiotics' },
      { p: "Probiotics supply live beneficial bacteria (and sometimes yeast such as Saccharomyces boulardii); prebiotics (fructooligosaccharides, inulin, beet pulp) are the fibers that nourish them. Synbiotics combine both. Many gastrointestinal diets already include prebiotics, and probiotics are added as a separate supplement or as a component of some diets. See [[Carbohydrates in Pet Food|/nutrition/carbohydrates-in-pet-food]]." },
      { h2: 'The Gut Microbiome', id: 'microbiome' },
      { p: "The gut microbiome — the community of microorganisms in the digestive tract — influences digestion, immune function, and overall health, and is shaped strongly by diet. Disruptions (from disease, antibiotics, or abrupt diet change) can produce digestive upset. Probiotics aim to support or restore a favorable microbial balance, though the resident microbiome is complex and supplemented organisms are often transient." },
      { h2: 'Evidence by Use', id: 'evidence' },
      { p: "The best-supported use is acute diarrhea, where specific probiotic strains can shorten the duration of episodes in dogs and cats, including antibiotic-associated and stress-related diarrhea. There is supporting evidence for some chronic GI conditions as an adjunct. Broad wellness, immune, and behavior claims are largely unsubstantiated. The benefit is real for defined situations, not a general tonic. See [[How to Transition Pet Food|/feeding/how-to-transition-pet-food]]." },
      { h2: 'Strain Specificity', id: 'strain' },
      { p: "Probiotic effects are strain-specific: a benefit shown for one bacterial strain does not transfer to a different strain or species, and the dose (colony-forming units) matters. This is why human probiotics are not interchangeable with pet products — the strains studied and the relevant gut environment differ. Choose a product whose specific strains and doses have evidence in dogs or cats for your intended use." },
      { h2: 'Viability and Quality', id: 'viability' },
      { p: "Probiotics must contain live organisms at the labeled count at the time of use, and independent testing has repeatedly found pet probiotics with far fewer viable organisms than claimed, or contaminating organisms. Live bacteria are sensitive to heat, moisture, and time, so storage and shelf life matter. Prefer products with a guaranteed live count through the expiration date, a NASC seal or third-party testing, and proper storage. A dead probiotic does nothing." },
      { h2: 'Using Probiotics Well', id: 'using' },
      { p: "Use a veterinary-grade probiotic with evidence for the intended purpose, at the studied dose, stored correctly. For acute diarrhea, an appropriate probiotic is a reasonable adjunct, but persistent or severe GI signs need diagnosis, not just a supplement. Probiotics complement, rather than replace, an appropriate diet and veterinary care. See [[Fiber and Digestive Health Diets|/diets/fiber-and-digestive-health]]." },
    ],
    related: [
      { label: 'Fiber and Digestive Health Diets', href: '/diets/fiber-and-digestive-health' },
      { label: 'How to Transition Pet Food', href: '/feeding/how-to-transition-pet-food' },
      { label: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'multivitamins-for-pets', date: '2026-06-01',
    title: 'Multivitamins for Pets',
    metaTitle: 'Do Pets Need Multivitamins? — The Evidence | PetFood.com',
    metaDesc:
      'Why animals on complete diets rarely need a multivitamin, the over-supplementation risk for fat-soluble vitamins, when supplementation is justified, and quality.',
    category: 'Supplement Reference', readTime: '8 min',
    hero:
      "Multivitamins are among the most-purchased and least-necessary pet supplements. An animal eating a complete and balanced diet already receives every required vitamin and mineral in the right amount, and adding a multivitamin can push fat-soluble vitamins toward harm. This page explains when supplementation helps, when it hurts, and how to evaluate a product.",
    toc: [
      { label: 'Complete Diets Already Cover It', id: 'complete' },
      { label: 'The Over-Supplementation Risk', id: 'oversupplementation' },
      { label: 'When Supplementation Helps', id: 'whenhelps' },
      { label: 'Home-Prepared Diets', id: 'homeprepared' },
      { label: 'Reading a Multivitamin', id: 'reading' },
      { label: 'The Bottom Line', id: 'bottomline' },
    ],
    body: [
      { p: "A complete and balanced commercial diet is formulated and supplemented to meet the AAFCO nutrient profiles, which means it already supplies all required vitamins and minerals in appropriate amounts and ratios. For a healthy animal on such a diet, a multivitamin is redundant at best and, because several nutrients are toxic in excess, potentially harmful. The supplement industry's framing of multivitamins as universal insurance is not supported. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'Complete Diets Already Cover It', id: 'complete' },
      { p: "The vitamin and mineral premix added to commercial food is calculated to meet requirements after accounting for processing losses and shelf-life decay. Adding a multivitamin on top stacks a second full dose of fat-soluble vitamins and minerals onto a diet already meeting the targets, with no benefit since the requirement is already met. More of a nutrient that is already adequate does not improve health. See [[Minerals in Pet Food|/nutrition/minerals-in-pet-food]]." },
      { h2: 'The Over-Supplementation Risk', id: 'oversupplementation' },
      { p: "The fat-soluble vitamins (A, D, E, K) accumulate in the body, so excess is a genuine toxicity risk, not merely waste. Excess vitamin D can be dangerous; excess vitamin A causes painful skeletal disease, classically in cats. Excess of some minerals interferes with absorption of others. Routinely adding a multivitamin to a complete diet is the most common way owners create this avoidable risk. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]]." },
      { h2: 'When Supplementation Helps', id: 'whenhelps' },
      { p: "Targeted supplementation has a real place under veterinary direction: documented deficiencies, specific malabsorption conditions (for example, cobalamin deficiency in some GI disease), certain life-stage or medical needs, and — importantly — home-prepared diets that require a balancing supplement to be complete. The key word is targeted: supplement a specific identified need, not a generic just-in-case." },
      { h2: 'Home-Prepared Diets', id: 'homeprepared' },
      { p: "The one common scenario where a vitamin-and-mineral supplement is essential is a home-cooked or home-prepared diet, which whole-food ingredients alone cannot balance — particularly for calcium and several micronutrients. Such a diet should be formulated by a board-certified veterinary nutritionist who specifies the exact supplement and dose. This is supplementation to complete the diet, not to top up an already-complete one. See [[Home-Cooked vs Commercial Diets|/compare/home-cooked-vs-commercial]]." },
      { h2: 'Reading a Multivitamin', id: 'reading' },
      { p: "If supplementation is indicated, evaluate the product: confirm it provides the specific nutrient needed without megadoses of fat-soluble vitamins, prefer products with a NASC seal or third-party quality testing, check that it is formulated for the species (cat and dog needs differ), and confirm the dose with the veterinarian relative to what the diet already supplies. Avoid stacking multiple supplements that overlap." },
      { h2: 'The Bottom Line', id: 'bottomline' },
      { p: "For a healthy animal on a complete and balanced diet, a multivitamin is unnecessary and carries a small but real over-supplementation risk. Supplement only a specific, identified need, under veterinary guidance, and reserve full vitamin-and-mineral supplementation for home-prepared diets formulated by a nutritionist. The default for a commercially fed pet is no multivitamin. See [[Pet Food Myths|/myths]]." },
    ],
    related: [
      { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
      { label: 'Home-Cooked vs Commercial Diets', href: '/compare/home-cooked-vs-commercial' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'skin-and-coat-supplements', date: '2026-06-01',
    title: 'Skin and Coat Supplements',
    metaTitle: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
    metaDesc:
      'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
    category: 'Supplement Reference', readTime: '8 min',
    hero:
      "A dull, flaky, or shedding coat is one of the most common reasons owners reach for a supplement, and some skin-and-coat ingredients genuinely help. But a poor coat is often a sign of an inadequate diet or an underlying medical problem, and the most reliable fix is usually a better diet rather than a topper. This page covers the ingredients that work and the reasons a coat goes wrong.",
    toc: [
      { label: 'What Drives Coat Quality', id: 'drivers' },
      { label: 'Essential Fatty Acids', id: 'efa' },
      { label: 'Zinc and Biotin', id: 'zincbiotin' },
      { label: 'Protein and Amino Acids', id: 'protein' },
      { label: 'When the Coat Signals Disease', id: 'disease' },
      { label: 'Diet First', id: 'dietfirst' },
    ],
    body: [
      { p: "The skin and coat have high nutrient demands — the skin is the body's largest organ and hair is largely protein — so coat quality is a sensitive readout of nutritional status and overall health. Several supplement ingredients support skin and coat, but the most effective intervention is usually ensuring the diet is complete, adequate in essential fatty acids and high-quality protein, and that no underlying disease is undermining the coat. See [[Dietary Fat and Essential Fatty Acids|/nutrition/dietary-fat-and-fatty-acids]]." },
      { h2: 'What Drives Coat Quality', id: 'drivers' },
      { p: "A healthy coat depends on adequate energy, high-quality protein (hair is keratin, a protein), essential fatty acids, zinc, and several vitamins. Deficiency or imbalance in any of these shows up as a dull, dry, flaky, or thin coat. Because a complete diet supplies all of these, a coat problem in an animal on a good diet often points to a medical cause rather than a nutrient gap." },
      { h2: 'Essential Fatty Acids', id: 'efa' },
      { p: "Omega-6 (linoleic acid) and omega-3 (EPA, DHA) fatty acids are the best-supported nutritional lever for skin and coat. Omega-6 supports the skin barrier and coat shine, while omega-3s reduce skin inflammation in allergic and inflammatory conditions. Fish oil is the most reliable omega-3 source. Many coat improvements attributed to a supplement are really the effect of added essential fatty acids. See [[Fish Oil and Omega-3 Supplements|/supplements/fish-oil-omega-3]]." },
      { h2: 'Zinc and Biotin', id: 'zincbiotin' },
      { p: "Zinc is essential for skin and coat, and zinc-responsive dermatosis occurs both from dietary deficiency and from a genetic absorption defect in certain northern breeds — these cases respond to zinc supplementation under veterinary direction. Biotin (vitamin B7) supports keratin formation; true biotin deficiency is uncommon on a complete diet, so biotin supplements help mainly in the rare deficiency state rather than as a general coat booster. See [[Minerals in Pet Food|/nutrition/minerals-in-pet-food]]." },
      { h2: 'Protein and Amino Acids', id: 'protein' },
      { p: "Because hair is protein and the coat is continually renewed, adequate high-quality dietary protein and the sulfur amino acids (methionine, cystine) that build keratin are essential for a healthy coat. A diet inadequate in protein or amino-acid quality produces a poor coat. Ensuring the diet supplies enough high-biological-value protein addresses this directly. See [[Taurine and Amino Acids|/nutrition/taurine-and-amino-acids]]." },
      { h2: 'When the Coat Signals Disease', id: 'disease' },
      { p: "A coat that deteriorates despite a good diet is a flag for underlying disease: hypothyroidism, Cushing's disease, parasites, allergies, and other conditions all affect the coat. Reaching for a supplement can delay diagnosis of a treatable disease. A persistently poor coat, hair loss, or skin lesions warrant veterinary evaluation rather than a longer trial of supplements." },
      { h2: 'Diet First', id: 'dietfirst' },
      { p: "For most coat complaints, the right sequence is: confirm the diet is complete and balanced and adequate in essential fatty acids and protein; rule out parasites and underlying disease with the veterinarian; and only then consider a targeted supplement such as fish oil. A supplement layered onto an inadequate diet or an undiagnosed disease addresses the symptom, not the cause. See [[Multivitamins for Pets|/supplements/multivitamins-for-pets]]." },
    ],
    related: [
      { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
      { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
      { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
    ],
    sources: [...STD],
  },
]

export const SUPPLEMENTS = RAW.map((p) => ({ ...p, hubName: 'Supplements' }))
