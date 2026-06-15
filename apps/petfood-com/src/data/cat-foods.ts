/**
 * Programmatic SEO source-of-truth for /feeding/can-cats-eat/[food].
 *
 * One data model -> one template -> a page per food, each a substantive,
 * extractable, citation-grade answer to "can cats eat X?" — one of the
 * highest-volume pet query families. NOT thin programmatic content: every
 * entry carries a verdict, the reasoning, serving/quantity guidance or risk +
 * symptoms, and what-to-do, grounded in established veterinary toxicology.
 *
 * CATS ARE NOT SMALL DOGS. Verdicts here are species-specific: cats are
 * obligate carnivores (plant foods are nutritionally low-value), are MORE
 * sensitive than dogs to alliums (onion/garlic), are commonly lactose
 * intolerant as adults, and have fish-specific risks (thiaminase in raw fish,
 * mercury and thiamine-displacement from a tuna-heavy diet). Treats should be
 * <10% of daily calories — most cats need little beyond a balanced diet.
 *
 * TRUST (QC §1): toxicity verdicts here are health-critical. Every verdict
 * reflects mainstream veterinary consensus (ASPCA Animal Poison Control, Pet
 * Poison Helpline, VCA/Merck veterinary references). No fabricated thresholds.
 * Every page defers to the ASPCA hotline (888-426-4435) and a veterinarian.
 * Do NOT add a food without a known, verifiable feline safety profile.
 */

export type Verdict = 'safe' | 'caution' | 'toxic'

export type FoodCategory =
  | 'Fruits'
  | 'Vegetables'
  | 'Proteins & Eggs'
  | 'Fish & Seafood'
  | 'Dairy'
  | 'Nuts & Seeds'
  | 'Grains & Carbs'
  | 'Other & Sweets'

export interface FoodEntry {
  slug: string
  name: string
  aliases?: string[]
  category: FoodCategory
  verdict: Verdict
  /** Extractable one-line answer (the AI-citation / featured-snippet target). */
  shortAnswer: string
  /** 1–3 sentences of the "why" behind the verdict. */
  detail: string
  /** Safe/caution foods: documented benefits. */
  benefits?: string[]
  /** Caution/toxic foods: the specific risks. */
  risks?: string[]
  /** Safe/caution foods: how to serve it safely. */
  safePrep?: string
  /** Safe/caution foods: rough portion guidance (always "treats = 10% of calories"). */
  quantity?: string
  /** Caution/toxic foods: signs of a problem to watch for. */
  symptoms?: string[]
  /** Toxic foods (and caution where relevant): what to do if eaten. */
  whatToDo?: string
  /** Related food slugs for internal linking. */
  related?: string[]
  /** Source labels (no fabricated citations). */
  sources: string[]
}

const ASPCA = 'ASPCA Animal Poison Control Center'
const PPH = 'Pet Poison Helpline'
const VCA = 'VCA Animal Hospitals veterinary references'
const MERCK = 'Merck Veterinary Manual'

export const CAT_FOODS: FoodEntry[] = [
  // ---------------- TOXIC ----------------
  {
    slug: 'onions', name: 'Onions', aliases: ['garlic', 'chives', 'leeks', 'shallots'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Onions — and the whole allium family (garlic, chives, leeks) — are toxic to cats, which are even more sensitive than dogs.',
    detail: 'Onions, garlic, leeks, chives, and shallots contain organosulfur compounds that damage feline red blood cells and cause Heinz-body hemolytic anemia. Cats are notably more sensitive to alliums than dogs. Every form counts — raw, cooked, powdered, and dehydrated — and concentrated forms such as onion or garlic powder and soup or seasoning mixes are especially potent. Garlic is more concentrated than onion by weight.',
    risks: ['Heinz-body hemolytic anemia (red-blood-cell destruction)', 'Cats are more sensitive than dogs', 'Cumulative — repeated small amounts add up', 'Hidden in many baby foods, broths, and seasonings'],
    symptoms: ['Weakness, lethargy, pale gums', 'Rapid breathing or elevated heart rate', 'Reddish or brown urine', 'Vomiting (signs can be delayed several days)'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian with the form and amount. Signs of anemia can take days to appear, so do not assume your cat is fine because it seems normal at first.',
    related: ['garlic', 'chives'],
    sources: [ASPCA, PPH, VCA],
  },
  {
    slug: 'garlic', name: 'Garlic', aliases: ['garlic powder'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Garlic is toxic to cats and is more concentrated than onion — even small amounts can damage red blood cells.',
    detail: 'Garlic is an allium, like onion, and is more potent by weight. The organosulfur compounds it contains cause Heinz-body anemia in cats, which are more sensitive to alliums than dogs. Garlic powder and garlic-containing supplements, broths, and seasoned meats are common hidden sources. There is no established safe amount for cats, and "natural" garlic flea remedies are not safe.',
    risks: ['More concentrated than onion by weight', 'Heinz-body hemolytic anemia', 'Garlic-based "natural" flea remedies are unsafe', 'Hidden in seasoned meats and broths'],
    symptoms: ['Weakness, lethargy, pale gums', 'Reddish or brown urine', 'Rapid breathing', 'Vomiting and reduced appetite'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian with the form and amount eaten. Do not use garlic-based flea products on cats.',
    related: ['onions', 'chives'],
    sources: [ASPCA, PPH, VCA],
  },
  {
    slug: 'chives', name: 'Chives', category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Chives are part of the allium family and are toxic to cats, like onion and garlic.',
    detail: 'Chives, along with onions, garlic, and leeks, belong to the allium family and contain compounds that damage feline red blood cells, causing Heinz-body anemia. Cats are more sensitive to alliums than dogs. Chives often appear in garnishes, dips, and herb-seasoned dishes, so keep cats away from seasoned human food and herb gardens containing chives.',
    risks: ['Allium toxicity — Heinz-body anemia', 'Common in garnishes and herb gardens', 'Cumulative with other allium exposure'],
    symptoms: ['Weakness and pale gums', 'Reddish or brown urine', 'Lethargy', 'Vomiting'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian with the amount eaten. Watch for delayed signs of anemia over several days.',
    related: ['onions', 'garlic'],
    sources: [ASPCA, PPH, VCA],
  },
  {
    slug: 'chocolate', name: 'Chocolate', category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Chocolate is toxic to cats — it contains theobromine and caffeine, which cats cannot clear efficiently.',
    detail: 'Chocolate contains theobromine and caffeine (methylxanthines) that cats metabolize slowly, so they build to toxic levels. Toxicity rises with the darkness of the chocolate: baking chocolate and cocoa powder are the most dangerous, dark and semi-sweet are high risk, and milk chocolate is lower but still unsafe. Cats are less likely than dogs to seek out sweets, but ingestion is still an emergency.',
    risks: ['Theobromine and caffeine poisoning', 'Cardiac arrhythmias and seizures at higher doses', 'Baking chocolate and cocoa powder are the most dangerous'],
    symptoms: ['Vomiting and diarrhea', 'Restlessness, hyperactivity, panting', 'Rapid or irregular heartbeat', 'Tremors or seizures (severe)'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian immediately with the chocolate type, amount, and your cat’s weight. Do not wait for symptoms.',
    related: ['coffee', 'xylitol'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'coffee', name: 'Coffee', aliases: ['caffeine', 'tea', 'energy drinks'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Coffee and caffeine are toxic to cats — the same methylxanthines that make chocolate dangerous.',
    detail: 'Caffeine is a methylxanthine, like the theobromine in chocolate, and cats are highly sensitive to it. Coffee grounds, beans, tea, energy drinks, and caffeine pills are all hazards, and used grounds still contain enough to cause signs. Because cats are small, even modest amounts of a concentrated source can be serious.',
    risks: ['Cardiac arrhythmias', 'Hyperactivity, tremors, seizures at higher doses', 'Beans, grounds, and pills are the most concentrated forms'],
    symptoms: ['Restlessness and hyperactivity', 'Rapid heart rate or panting', 'Vomiting', 'Tremors or seizures (severe)'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian with the source (grounds, pills, drink) and amount. Caffeine pills and espresso beans are the most urgent.',
    related: ['chocolate', 'xylitol'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'alcohol', name: 'Alcohol', aliases: ['beer', 'wine', 'liquor'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Alcohol is toxic to cats in any form, including raw bread dough and fermenting items — cats are highly sensitive to it.',
    detail: 'Ethanol is toxic to cats at low doses, and it is found not only in drinks but in raw yeast dough (which ferments in the warm stomach), rotting fruit, and some desserts. Cats become intoxicated quickly and can progress to dangerous central-nervous-system and respiratory depression. Because cats are small, even a small spill can be significant.',
    risks: ['CNS depression — disorientation, collapse', 'Dangerously low body temperature and blood sugar', 'Respiratory depression at higher doses'],
    symptoms: ['Wobbliness, disorientation', 'Vomiting', 'Slow breathing', 'Collapse'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or an emergency veterinarian immediately. Raw bread dough is a particular hazard and may need urgent treatment.',
    related: ['bread', 'chocolate'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'xylitol', name: 'Xylitol', aliases: ['birch sugar', 'sugar-free gum'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Xylitol, a sugar substitute, should be kept away from cats — and is a known emergency in dogs. Avoid all sugar-free products.',
    detail: 'Xylitol (sometimes labeled "birch sugar") is a sweetener in sugar-free gum, mints, some peanut butters, baked goods, and toothpaste. It is famously and severely toxic to dogs, causing insulin release and liver injury. The feline response is less documented, but veterinary poison resources advise keeping it away from cats entirely and treating ingestion as a reason to call a professional. Never offer cats sugar-free human products.',
    risks: ['Severely toxic to dogs; avoid all exposure in cats', 'Hidden in "sugar-free" products — gum, mints, some peanut butters', 'Always check labels before sharing any human food'],
    symptoms: ['Weakness or wobbliness', 'Vomiting', 'Lethargy', 'Any unusual signs after ingestion warrant a call'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian if your cat eats a xylitol-containing product. Bring the packaging so the amount can be assessed.',
    related: ['chocolate', 'coffee'],
    sources: [ASPCA, PPH],
  },
  {
    slug: 'grapes', name: 'Grapes', aliases: ['raisins', 'currants', 'sultanas'], category: 'Fruits', verdict: 'toxic',
    shortAnswer: 'No. Grapes and raisins are treated as unsafe for cats — they cause kidney failure in dogs, so avoid them entirely.',
    detail: 'Grapes, raisins, currants, and sultanas cause acute kidney injury in dogs, and the toxic mechanism (now thought to involve tartaric acid) is not fully understood. The risk in cats is less documented, but because the consequence is severe and unpredictable, veterinary poison resources advise treating all grape and raisin ingestion in cats as a reason to call a professional. Cats are usually uninterested in grapes, but keep them out of reach.',
    risks: ['Causes acute kidney failure in dogs', 'No established safe amount; mechanism not fully understood', 'Treated as an avoid for cats out of caution'],
    symptoms: ['Vomiting', 'Lethargy and loss of appetite', 'Decreased or absent urination (a late, serious sign)'],
    whatToDo: 'Treat ingestion as a reason to call ASPCA Animal Poison Control (888-426-4435) or your veterinarian. Early advice greatly improves the outcome.',
    related: ['chocolate', 'onions'],
    sources: [ASPCA, PPH],
  },
  {
    slug: 'macadamia-nuts', name: 'Macadamia Nuts', category: 'Nuts & Seeds', verdict: 'toxic',
    shortAnswer: 'No. Macadamia nuts are kept away from cats — they cause a recognizable toxic syndrome in dogs, and cats gain nothing from nuts.',
    detail: 'Macadamia nuts cause a distinctive syndrome of weakness, tremors, and elevated body temperature in dogs through a mechanism that is not fully understood; the feline response is less documented. Because cats are obligate carnivores with no nutritional need for nuts, and because the risk is poorly characterized, the safe course is to keep macadamia nuts (and nuts generally) away from cats. They are also a choking and fat hazard.',
    risks: ['Toxic syndrome documented in dogs; poorly characterized in cats', 'Choking and intestinal-obstruction hazard', 'High fat — GI upset and pancreatitis risk', 'Often combined with chocolate in baked goods'],
    symptoms: ['Weakness', 'Tremors', 'Vomiting, lethargy', 'Any unusual signs after ingestion warrant a call'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian with the amount eaten, and note whether the nuts were in chocolate, which adds a second toxin.',
    related: ['chocolate', 'grapes'],
    sources: [ASPCA, PPH],
  },

  // ---------------- CAUTION ----------------
  {
    slug: 'tuna', name: 'Tuna', aliases: ['canned tuna'], category: 'Fish & Seafood', verdict: 'caution',
    shortAnswer: 'Occasional treat only. A little plain cooked or canned tuna is fine, but it is not a balanced diet and can cause problems as a staple.',
    detail: 'Cats love tuna, but human tuna is not a complete feline diet: fed regularly it can displace balanced nutrition, contribute to mercury exposure over time, and lacks the right vitamin and mineral balance — heavy fish diets are also linked to thiamine (vitamin B1) issues. Some cats develop a strong preference ("tuna addiction") and refuse balanced food. Treat tuna as an occasional topper, not a meal, and choose tuna packed in water with no added salt or oil.',
    benefits: ['Highly palatable — useful as an occasional topper or for tempting appetite', 'Protein and omega-3 fatty acids'],
    risks: ['Not nutritionally complete — unsafe as a staple', 'Mercury exposure with frequent feeding', 'Can drive picky "tuna-only" preferences', 'Heavy fish diets are linked to thiamine concerns'],
    safePrep: 'Offer a small spoonful of plain tuna packed in water (no salt, oil, or seasonings) as an occasional treat — not a meal replacement.',
    quantity: 'A small spoonful occasionally; keep treats within about 10% of daily calories.',
    related: ['salmon', 'raw-fish', 'chicken'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'salmon', name: 'Salmon', category: 'Fish & Seafood', verdict: 'caution',
    shortAnswer: 'Cooked salmon is fine as an occasional treat, but raw salmon is unsafe and fish should not be a staple.',
    detail: 'Plain, fully cooked, boneless salmon is a safe occasional treat that cats usually love, providing protein and omega-3 fatty acids. The cautions: never feed raw salmon (raw fish carries parasites and thiaminase, which destroys vitamin B1), remove all bones, and do not make fish the main diet — a complete, balanced cat food should be the foundation. Avoid smoked or salted salmon, which is too high in salt.',
    benefits: ['Protein and omega-3 fatty acids', 'Palatable occasional treat'],
    risks: ['Raw salmon — parasites and thiaminase (destroys vitamin B1)', 'Bones are a choking/obstruction hazard', 'Smoked/salted salmon is too high in salt', 'Not a balanced staple diet'],
    safePrep: 'Cook plain (no oil, salt, or seasoning), remove all bones, and offer a small flaked amount occasionally.',
    quantity: 'A small portion as an occasional treat within the 10% treat budget.',
    related: ['tuna', 'raw-fish', 'chicken'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'raw-fish', name: 'Raw Fish', category: 'Fish & Seafood', verdict: 'caution',
    shortAnswer: 'Avoid. Raw fish contains thiaminase, which destroys vitamin B1 (thiamine), and can carry parasites and bacteria.',
    detail: 'Raw fish is best avoided for cats. Many raw fish contain thiaminase, an enzyme that breaks down thiamine (vitamin B1); a diet heavy in raw fish can cause a thiamine deficiency that affects the nervous system. Raw fish can also carry parasites and bacteria. Cooking deactivates thiaminase and kills pathogens, so if you offer fish, cook it plain and keep it occasional.',
    risks: ['Thiaminase destroys thiamine (vitamin B1)', 'Parasite and bacterial risk', 'Thiamine deficiency affects the nervous system in heavy fish diets'],
    symptoms: ['Loss of appetite (with prolonged thiamine deficiency)', 'Wobbliness or neurological signs (severe deficiency)', 'Vomiting or GI upset'],
    safePrep: 'Cook fish plainly before offering it, remove bones, and keep fish an occasional treat rather than a staple.',
    quantity: 'Better skipped raw; if offering fish, cook it and keep portions small and occasional.',
    related: ['salmon', 'tuna', 'fish'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'fish', name: 'Fish', category: 'Fish & Seafood', verdict: 'caution',
    shortAnswer: 'Occasional cooked fish is fine, but fish should not be a cat’s main diet, and raw fish should be avoided.',
    detail: 'Cats are drawn to fish, and a little plain, cooked, boneless fish is a fine occasional treat. But fish is not a complete feline diet: a fish-heavy diet can contribute to thiamine (vitamin B1) problems, mercury exposure, and nutritional imbalance, and some cats become so fond of fish that they refuse balanced food. Use a complete, balanced cat food as the foundation and treat fish as an extra.',
    benefits: ['Protein and omega-3 fatty acids', 'Palatable occasional treat'],
    risks: ['Not a complete diet — imbalance if overfed', 'Raw fish carries thiaminase and parasites', 'Can drive picky preferences', 'Bones are a choking hazard'],
    safePrep: 'Offer small amounts of plain, cooked, deboned fish occasionally. Never raw, salted, or seasoned.',
    quantity: 'A small amount occasionally within the 10% treat budget.',
    related: ['tuna', 'salmon', 'raw-fish'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'milk', name: 'Milk', aliases: ['cow milk'], category: 'Dairy', verdict: 'caution',
    shortAnswer: 'Skip it. Despite the classic image, most adult cats are lactose intolerant and milk causes digestive upset.',
    detail: 'The "saucer of milk" is a myth: kittens digest their mother’s milk, but most cats lose much of their lactase enzyme after weaning and become lactose intolerant. Cow’s milk then causes gas, bloating, and diarrhea. Cats also do not need dairy. If you want to offer a milk-like treat, lactose-free cat milk products exist, but plain water is the better everyday choice.',
    risks: ['Most adult cats are lactose intolerant', 'Diarrhea, gas, and bloating', 'No nutritional need for milk', 'Adds unnecessary calories'],
    symptoms: ['Diarrhea or loose stool', 'Gas and bloating', 'Stomach upset'],
    safePrep: 'Better to skip cow’s milk. If offering a milk treat, use a lactose-free cat milk product; otherwise fresh water is best.',
    quantity: 'Not recommended; if used at all, a tiny amount of lactose-free cat milk occasionally.',
    related: ['cheese', 'yogurt'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'cheese', name: 'Cheese', category: 'Dairy', verdict: 'caution',
    shortAnswer: 'In tiny amounts at most — many cats are lactose intolerant, and cheese is high in fat and salt.',
    detail: 'A tiny piece of plain cheese is sometimes used to hide a pill, but cheese is not a good cat treat: most adult cats are lactose intolerant, and cheese is high in fat and salt. Cats are obligate carnivores and gain nothing from dairy. If you use a sliver to give medication, watch for digestive upset, and avoid cheeses flavored with onion, garlic, or herbs.',
    risks: ['Lactose intolerance — gas and diarrhea', 'High fat and salt', 'Flavored cheeses may contain toxic onion/garlic', 'No nutritional need for dairy'],
    safePrep: 'If used to hide a pill, offer a tiny piece of plain, low-lactose cheese; stop if your cat gets loose stool.',
    quantity: 'A tiny sliver only, occasionally — not a routine treat.',
    related: ['milk', 'yogurt'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'dog-food', name: 'Dog Food', category: 'Proteins & Eggs', verdict: 'caution',
    shortAnswer: 'Not toxic, but inadequate. Dog food lacks taurine and other nutrients cats must get from their diet — it is not safe long-term.',
    detail: 'A stolen bite of dog food will not poison a cat, but dog food is formulated for dogs and is nutritionally inadequate for cats over time. Cats are obligate carnivores with specific needs — notably taurine (an amino acid) and arachidonic acid — that dog food is not guaranteed to supply. A taurine-deficient diet can cause heart disease (dilated cardiomyopathy) and vision problems. Feed cats a complete, balanced cat food, and keep dog and cat bowls separate in multi-pet homes.',
    risks: ['Lacks adequate taurine — heart and eye disease over time', 'Missing arachidonic acid and other feline-specific nutrients', 'Wrong protein and fat balance for cats', 'Inadequate as a long-term diet'],
    symptoms: ['No immediate signs from one bite', 'Long-term deficiency: weight loss, poor coat, lethargy', 'Heart or vision problems with chronic taurine deficiency'],
    safePrep: 'Feed a complete, balanced cat food. In multi-pet homes, feed cats and dogs separately so the cat does not rely on dog food.',
    quantity: 'An occasional accidental bite is not an emergency; do not feed dog food as a cat’s diet.',
    related: ['chicken', 'eggs'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'cooked-bones', name: 'Cooked Bones', category: 'Proteins & Eggs', verdict: 'caution',
    shortAnswer: 'Avoid. Cooked bones splinter and can cause choking, mouth injuries, or intestinal obstruction and perforation.',
    detail: 'Cooked bones — from chicken, fish, or other meats — become brittle and splinter when chewed, creating sharp fragments that can lodge in the mouth or throat, choke a cat, or cause obstruction and perforation of the digestive tract. Always remove bones from any cooked meat or fish before offering it. If your cat swallows a cooked bone, watch closely and call your veterinarian.',
    risks: ['Splinter into sharp fragments', 'Choking and mouth/throat injuries', 'Intestinal obstruction or perforation'],
    symptoms: ['Gagging, pawing at the mouth, or drooling', 'Vomiting or retching', 'Lethargy or abdominal pain (obstruction)', 'Blood in stool (perforation)'],
    whatToDo: 'If your cat swallows a cooked bone or shows any of these signs, contact your veterinarian or an emergency clinic promptly. Do not try to pull a lodged bone out yourself.',
    safePrep: 'Always debone cooked meat and fish before offering it. Never give cooked bones.',
    related: ['chicken', 'salmon', 'fish'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'bread', name: 'Bread', category: 'Grains & Carbs', verdict: 'caution',
    shortAnswer: 'A nibble of plain baked bread is harmless but pointless — and raw bread dough is dangerous.',
    detail: 'A small piece of plain, fully baked bread is non-toxic, but it is empty calories for an obligate carnivore and offers a cat nothing nutritionally. The real hazard is raw yeast dough: it rises in the warm stomach and ferments into alcohol, causing both painful bloating and alcohol toxicity. Avoid breads with raisins, onion, garlic, or nuts.',
    risks: ['Empty calories with no feline nutritional value', 'RAW dough is an emergency (bloat + alcohol)', 'Add-ins like raisins, onion, or garlic can be toxic'],
    symptoms: ['Bloating or distended abdomen (raw dough)', 'Wobbliness (alcohol from fermenting dough)', 'Vomiting'],
    safePrep: 'If offered at all, a tiny piece of plain baked bread. Never give raw dough.',
    quantity: 'A tiny nibble occasionally at most; not a treat to encourage.',
    related: ['alcohol', 'rice'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'ham', name: 'Ham', aliases: ['bacon', 'deli meat', 'cured pork'], category: 'Proteins & Eggs', verdict: 'caution',
    shortAnswer: 'Not recommended. Ham, bacon, and deli meats are very high in salt and fat and are unsafe as a regular treat for cats.',
    detail: 'Plain cooked pork is not toxic, but ham, bacon, and deli meats are heavily salted and often seasoned, which makes them a poor choice for a small obligate carnivore. The salt is hard on cats prone to heart or kidney issues, the fat can cause stomach upset, and cured-meat seasonings sometimes include onion or garlic. A tiny taste is unlikely to harm a healthy cat, but it should not be routine.',
    risks: ['Very high salt and fat', 'Seasonings may include toxic onion/garlic', 'Worse for cats with heart or kidney conditions'],
    symptoms: ['Excessive thirst', 'Vomiting or diarrhea', 'Stomach upset'],
    safePrep: 'Better to skip. If sharing meat, use a small amount of plain, unseasoned, cooked meat instead.',
    quantity: 'A tiny taste at most, rarely — not a regular treat.',
    related: ['chicken', 'turkey'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'avocado', name: 'Avocado', category: 'Fruits', verdict: 'caution',
    shortAnswer: 'Caution. Avocado flesh is only mildly risky for cats, but the pit is a choking and obstruction hazard and the fat can upset the stomach.',
    detail: 'Avocado contains persin, which is highly toxic to birds and some livestock but only mildly so to cats — the flesh causes, at most, stomach upset in most cats. The bigger feline risks are the large pit (a choking and intestinal-obstruction hazard) and the high fat content, which can cause GI upset. Cats have no nutritional need for avocado, so it is not a treat worth encouraging.',
    risks: ['Pit is a choking / intestinal-obstruction hazard', 'High fat can cause GI upset', 'Persin (mild in cats, severe in birds)'],
    symptoms: ['Vomiting or diarrhea', 'Signs of obstruction if the pit is swallowed (vomiting, no stool, distress)'],
    safePrep: 'If offered at all, a tiny amount of plain ripe flesh only — never the pit, skin, or leaves.',
    quantity: 'Not a routine treat; a tiny amount of flesh at most.',
    related: ['banana', 'pumpkin'],
    sources: [ASPCA, VCA],
  },

  // ---------------- SAFE ----------------
  {
    slug: 'chicken', name: 'Chicken', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — plain, cooked, and boneless. Plain chicken is a safe, lean protein and a cat-friendly treat.',
    detail: 'Plain, fully cooked, boneless, skinless chicken is a safe, highly digestible protein and one of the best treats for a cat, since cats are obligate carnivores. Cook it plainly with no salt, onion, garlic, or seasoning, never give cooked bones (they splinter), and remove the skin to cut fat. It is a useful way to tempt the appetite of a cat that is eating poorly, alongside a balanced diet.',
    benefits: ['Lean, highly digestible animal protein', 'Cats are obligate carnivores — meat suits them well', 'Useful for tempting appetite and giving medication'],
    risks: ['Never cooked bones (splinter)', 'No seasoning, onion, or garlic', 'A treat, not a complete diet'],
    safePrep: 'Boil or bake plain, boneless, skinless chicken; shred and cool. No oil, salt, or seasoning.',
    quantity: 'Small amounts as a treat within the 10% treat budget.',
    related: ['turkey', 'eggs', 'fish'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'turkey', name: 'Turkey', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — plain, cooked, and boneless. Plain turkey is a safe, lean protein treat for cats.',
    detail: 'Like chicken, plain cooked turkey is a safe, lean, highly digestible protein for cats. Use plain roasted or boiled white meat with no skin, salt, gravy, or seasoning, and never the bones. Avoid deli turkey and seasoned holiday turkey, which are salty and often contain onion or garlic. A small piece of plain turkey is a good treat for an obligate carnivore.',
    benefits: ['Lean animal protein cats digest well', 'Good treat for an obligate carnivore'],
    risks: ['No skin, gravy, salt, or seasoning', 'Never cooked bones', 'Avoid seasoned/deli turkey (salt, onion, garlic)'],
    safePrep: 'Offer small pieces of plain, cooked, boneless, skinless turkey. No seasoning or gravy.',
    quantity: 'A few small pieces as a treat within the 10% treat budget.',
    related: ['chicken', 'eggs'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'eggs', name: 'Eggs', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — cooked. Plain cooked eggs are a safe, complete protein for cats.',
    detail: 'Cooked eggs are a safe, nutritious treat for cats — a source of highly digestible protein and amino acids that suit an obligate carnivore. Cook them plainly (no butter, salt, onion, or cheese) and serve scrambled or hard-boiled. Avoid raw eggs: they carry a Salmonella risk, and raw egg white contains avidin, which can interfere with biotin over time.',
    benefits: ['Complete, highly digestible protein', 'Amino acids that suit obligate carnivores'],
    risks: ['Cook them — raw eggs carry Salmonella risk', 'Raw egg white (avidin) can affect biotin', 'No salt, butter, or onion'],
    safePrep: 'Scramble or hard-boil plain (no oil, butter, or seasoning); cool before serving.',
    quantity: 'A small amount of cooked egg as an occasional treat.',
    related: ['chicken', 'turkey'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'pumpkin', name: 'Pumpkin', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes — plain and cooked. Plain pumpkin is cat-safe and is often used to settle mild digestive upset.',
    detail: 'Plain cooked or plain canned pumpkin (not pie filling) is a safe addition for cats: its soluble fiber can help with both mild diarrhea and constipation, and it is low in calories. Use a small amount mixed into food, and avoid spiced pumpkin-pie filling, which contains sugar and sometimes nutmeg or xylitol. As an obligate carnivore, a cat needs only a little.',
    benefits: ['Soluble fiber — supports firm stool', 'Low calorie', 'Often used for mild digestive upset'],
    risks: ['Use PLAIN pumpkin — pie filling has sugar/spices', 'Only a small amount — cats need little plant matter'],
    safePrep: 'Use plain canned pumpkin or plain cooked pumpkin (no salt, sugar, or spices); mix a small amount into food.',
    quantity: 'About a teaspoon mixed into food; introduce gradually.',
    related: ['green-beans', 'rice'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'green-beans', name: 'Green Beans', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes — plain. Plain green beans are a safe, low-calorie treat, sometimes used to add volume for an overweight cat.',
    detail: 'Plain green beans (cooked soft, or plain canned with no added salt) are a safe, very low-calorie treat that some owners use, with veterinary guidance, to add volume to the bowl of an overweight cat. As obligate carnivores, many cats are uninterested, and beans should never replace meat-based nutrition. Avoid versions cooked with butter, salt, onion, or garlic.',
    benefits: ['Very low calorie, fibrous', 'Sometimes used to help with weight management (with vet guidance)'],
    risks: ['Avoid added salt, butter, onion, or garlic (use plain)', 'A supplement to, never a replacement for, balanced food'],
    safePrep: 'Serve plain — cooked soft or no-salt canned. Cut into small pieces.',
    quantity: 'A small amount occasionally; discuss weight-management use with your vet.',
    related: ['pumpkin', 'rice'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'blueberries', name: 'Blueberries', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in tiny amounts. Blueberries are a safe, antioxidant-rich treat — though many cats are uninterested.',
    detail: 'Blueberries are non-toxic and safe for cats in tiny amounts: small, low in calories, and rich in antioxidants and fiber. As obligate carnivores, most cats show little interest in fruit, and any fruit is an occasional novelty rather than a nutritional need. Offer one or two, fresh or thawed, and watch for any GI upset.',
    benefits: ['Antioxidants and fiber', 'Low calorie, bite-sized'],
    risks: ['Tiny amounts only — cats need little fruit', 'Some cats get mild GI upset from new foods'],
    safePrep: 'Wash and offer one or two whole (or mashed for a small cat). Fresh or thawed.',
    quantity: 'One or two berries as an occasional novelty treat.',
    related: ['banana', 'melon'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'banana', name: 'Banana', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in tiny amounts. Banana is a safe, soft treat — but high in sugar and not something most cats need.',
    detail: 'Banana is non-toxic and safe for cats in tiny amounts, providing potassium and soft texture. Because it is relatively high in natural sugar and cats are obligate carnivores with no need for fruit, it is an occasional novelty at most. Offer a small slice and skip the peel, which is hard to digest. Many cats will simply ignore it.',
    benefits: ['Potassium and fiber', 'Soft and easy to nibble'],
    risks: ['High in natural sugar', 'Cats have no nutritional need for fruit', 'Peel is hard to digest'],
    safePrep: 'Peel and offer a small slice or a mashed bit. Skip the peel.',
    quantity: 'A small slice as an occasional novelty treat.',
    related: ['blueberries', 'melon'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'melon', name: 'Melon', aliases: ['cantaloupe', 'watermelon', 'honeydew'], category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes — flesh only, no seeds or rind, in small amounts. Melon is a safe, hydrating novelty treat that some cats enjoy.',
    detail: 'Seedless melon flesh — cantaloupe, watermelon, or honeydew — is non-toxic and safe for cats in small amounts, and some cats are surprisingly drawn to it (its aroma carries notes some cats find appealing). Remove the seeds and rind, which can cause GI upset or obstruction, and offer a few small pieces of flesh. It is hydrating and low in calories, but still just an occasional novelty for an obligate carnivore.',
    benefits: ['Hydrating, low calorie', 'Some cats enjoy the flesh'],
    risks: ['Remove seeds and rind (obstruction risk)', 'Small amounts — high-sugar fruit', 'A novelty, not a nutritional need'],
    safePrep: 'Remove seeds and rind; offer a few small pieces of plain flesh.',
    quantity: 'A few small pieces as an occasional treat.',
    related: ['blueberries', 'banana'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'yogurt', name: 'Yogurt', category: 'Dairy', verdict: 'safe',
    shortAnswer: 'In tiny amounts — plain, unsweetened yogurt is usually tolerated better than milk, but watch for lactose sensitivity.',
    detail: 'A small spoonful of plain, unsweetened yogurt is generally tolerated better than milk because some of the lactose is already fermented, and it provides a little protein and calcium. Still, cats are obligate carnivores with no need for dairy, and some are sensitive — watch for loose stool. Never give yogurt sweetened with xylitol, and avoid added sugar or fruit flavors.',
    benefits: ['Lower lactose than milk — often better tolerated', 'A little protein and calcium'],
    risks: ['Lactose sensitivity in some cats', 'NEVER xylitol-sweetened; avoid added sugar/flavors', 'No nutritional need for dairy'],
    safePrep: 'Choose plain, unsweetened, xylitol-free yogurt; offer a small spoonful and watch for loose stool.',
    quantity: 'A small spoonful as an occasional treat.',
    related: ['cheese', 'milk'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'rice', name: 'Rice', category: 'Grains & Carbs', verdict: 'safe',
    shortAnswer: 'Yes — plain cooked rice is safe in small amounts and sometimes used in a bland diet for an upset stomach.',
    detail: 'Plain cooked white rice is non-toxic and easy to digest, and a small amount mixed with plain cooked chicken is sometimes recommended by veterinarians as a temporary bland diet for a cat with a mild upset stomach. Because cats are obligate carnivores, rice is a small addition, not a staple — serve it plain with no salt, butter, or seasoning, and return to a complete cat food as the cat recovers.',
    benefits: ['Easy to digest', 'Used in temporary bland diets (with vet guidance)'],
    risks: ['A small addition, not a feline staple', 'Serve plain — no salt, butter, or seasoning'],
    safePrep: 'Cook plain (no salt or butter); mix a small amount with plain cooked chicken if your vet advises a bland diet.',
    quantity: 'A small spoonful mixed in, or as directed by your vet.',
    related: ['chicken', 'pumpkin'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'shrimp', name: 'Shrimp', category: 'Fish & Seafood', verdict: 'safe',
    shortAnswer: 'Yes — plain, fully cooked, peeled shrimp is a safe occasional treat for most cats.',
    detail: 'Cooked shrimp is a lean, protein-rich treat many cats love. Serve it plain and fully cooked (never raw — raw shellfish carries bacteria and thiaminase, which destroys vitamin B1), with the shell, tail, and vein removed to prevent choking. Keep it to an occasional treat, not a meal, and skip any garlic, butter, or seasoning.',
    benefits: ['Lean protein cats enjoy', 'Useful high-value treat'],
    risks: ['Never raw (bacteria + thiaminase)', 'Remove shell, tail, and vein', 'No seasoning, garlic, or butter'],
    safePrep: 'Steam or boil plain, peel, devein, and offer a small piece cooled.',
    quantity: 'A small piece as an occasional treat.',
    related: ['fish', 'raw-fish', 'chicken'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'beef', name: 'Beef', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — plain, fully cooked, unseasoned beef is a safe protein treat for cats.',
    detail: 'As obligate carnivores, cats do well with animal protein, and plain cooked lean beef is a fine occasional treat. Cook it through (raw meat carries a bacterial risk), trim excess fat, and serve it unseasoned — no onion, garlic, salt, or sauces. It is a treat, not a substitute for a complete, balanced cat food.',
    benefits: ['Animal protein suited to obligate carnivores'],
    risks: ['Cook it through', 'Trim fat; no seasoning, onion, or garlic'],
    safePrep: 'Cook plain, trim fat, cut into small pieces, serve cooled.',
    quantity: 'A few small pieces as an occasional treat.',
    related: ['chicken', 'turkey'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'liver', name: 'Liver', category: 'Proteins & Eggs', verdict: 'caution',
    shortAnswer: 'Tiny amounts only. Liver is nutritious but too much causes vitamin A toxicity in cats, which damages bones.',
    detail: 'A very small amount of cooked liver is a fine, palatable treat. The catch is vitamin A: cats are prone to vitamin A toxicity, and regular or large servings of liver can cause painful bone and joint disease over time (hypervitaminosis A). Treat liver as a rare, tiny treat — never a frequent food.',
    risks: ['Vitamin A toxicity with regular or large amounts (bone disease)', 'Rich — can cause loose stool'],
    symptoms: ['With chronic overfeeding: stiffness, reluctance to move, bone/joint pain'],
    safePrep: 'Offer a very small piece of plain cooked liver only rarely.',
    quantity: 'A tiny piece, infrequently — not a regular food.',
    related: ['chicken', 'beef'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'carrots', name: 'Carrots', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes, in small amounts — plain cooked carrot is a safe, low-calorie treat, though many cats are indifferent.',
    detail: 'Carrots are non-toxic and provide fiber and beta-carotene. Because cats are obligate carnivores, vegetables are optional extras rather than nutrition they need, and many cats simply are not interested. If offered, cook carrots until soft (raw is a choking hazard) and cut into small pieces.',
    benefits: ['Fiber, low calorie'],
    risks: ['Cook soft — raw is a choking risk', 'Optional extra, not needed nutritionally'],
    safePrep: 'Cook until soft, cut into small pieces, serve plain.',
    quantity: 'A small piece occasionally.',
    related: ['green-beans', 'pumpkin'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'cucumber', name: 'Cucumber', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes — plain cucumber is a safe, hydrating, very low-calorie nibble, if your cat is interested.',
    detail: 'Cucumber is mostly water and non-toxic, making it a harmless low-calorie treat. Peel it if the skin is waxed, cut into small pieces, and serve plain. Many cats ignore it, which is fine — it offers little a carnivore needs.',
    benefits: ['Hydrating, very low calorie'],
    risks: ['Cut small; optional extra'],
    safePrep: 'Peel if waxed, cut into small pieces, serve plain.',
    quantity: 'A small piece occasionally.',
    related: ['carrots', 'green-beans'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'spinach', name: 'Spinach', category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Tiny amounts only, and not for cats with urinary or kidney issues — spinach is high in oxalates.',
    detail: 'A small amount of plain cooked spinach is not toxic to a healthy cat, but spinach is high in oxalates, which can contribute to calcium-oxalate bladder or kidney stones. Any cat with a history of urinary tract disease, bladder stones, or kidney problems should avoid it entirely. For other cats, it is at most a rare, tiny treat.',
    risks: ['High in oxalates — calcium-oxalate stone risk', 'Avoid entirely in cats with urinary or kidney disease'],
    safePrep: 'If offered to a healthy cat at all, a tiny amount of plain cooked spinach, rarely.',
    quantity: 'A very small amount, infrequently — or skip it.',
    related: ['green-beans'],
    sources: [VCA, MERCK],
  },
  {
    slug: 'apple', name: 'Apple', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes — a small piece of apple flesh is safe, but remove the core and seeds, and expect many cats to ignore it.',
    detail: 'Apple flesh is non-toxic and offers a little fiber. Remove the core and seeds — apple seeds contain a trace cyanogenic compound and the core is a choking hazard. Cats lack sweet-taste receptors, so most are uninterested; flesh in small pieces is a harmless novelty.',
    benefits: ['Fiber; harmless novelty'],
    risks: ['Remove core and seeds', 'Cats often disinterested'],
    safePrep: 'Remove core and seeds; cut flesh into small pieces.',
    quantity: 'A small piece occasionally.',
    related: ['banana', 'blueberries'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'strawberries', name: 'Strawberries', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in tiny amounts — strawberries are non-toxic, but sugary and not something cats need.',
    detail: 'Strawberries are safe for cats in small amounts and contain some vitamin C and fiber. They are relatively sugary, so they should be a rare, tiny treat, especially for overweight or diabetic cats. As with most fruit, many cats will not be interested.',
    benefits: ['Non-toxic; vitamin C and fiber'],
    risks: ['Sugar — keep tiny, especially for overweight/diabetic cats'],
    safePrep: 'Wash, remove the stem, offer a small piece of flesh.',
    quantity: 'A small piece, rarely.',
    related: ['blueberries', 'apple', 'melon'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'sweet-potato', name: 'Sweet Potato', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes — a small amount of plain cooked sweet potato is safe, though it is a carb a carnivore does not need.',
    detail: 'Plain cooked sweet potato is non-toxic and provides fiber and beta-carotene. Always cook it (raw is hard to digest and a choking risk) and serve plain — no butter, salt, or marshmallow. Because it is carbohydrate-dense and cats are obligate carnivores, keep it to a small occasional treat.',
    benefits: ['Fiber and beta-carotene'],
    risks: ['Cook it; serve plain', 'Carb-dense — small amounts only'],
    safePrep: 'Bake or steam, mash a small amount, serve plain and cooled.',
    quantity: 'A small spoonful occasionally.',
    related: ['pumpkin', 'carrots'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'peanut-butter', name: 'Peanut Butter', category: 'Nuts & Seeds', verdict: 'caution',
    shortAnswer: 'Not recommended. It is high in fat, offers nothing cats need, and some brands contain deadly xylitol.',
    detail: 'Peanut butter is not toxic the way chocolate is, but it is a poor choice for cats: high in fat and calories, hard for some to swallow, of no nutritional value to a carnivore, and — critically — some "sugar-free" peanut butters contain xylitol, which is dangerous. There are far better cat treats; if any is given, it should be a tiny lick of a plain, xylitol-free product.',
    risks: ['Xylitol in some brands is dangerous — always check the label', 'High fat/calories; no feline value'],
    safePrep: 'Better skipped; if used at all, a tiny amount of plain, xylitol-free peanut butter.',
    quantity: 'A tiny lick at most — better avoided.',
    related: ['cheese', 'xylitol'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'mushrooms', name: 'Mushrooms', category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Plain store-bought mushrooms in tiny amounts are generally tolerated, but wild mushrooms must never be offered.',
    detail: 'Plain, cooked, store-bought culinary mushrooms are not toxic to cats, and a tiny piece is generally harmless (some cats are drawn to their savory umami taste). Wild mushrooms are another matter entirely — some are deadly, identification is unreliable, and a cat that develops a taste for them outdoors is at real risk. Keep cats away from wild mushrooms.',
    risks: ['WILD mushrooms can be fatal — never offer them and discourage foraging', 'Avoid seasoned/sauced mushroom dishes (onion/garlic)'],
    safePrep: 'If offered at all, a tiny piece of plain cooked store-bought mushroom — never wild.',
    quantity: 'A tiny piece, rarely; never wild.',
    related: ['onions', 'garlic'],
    sources: [ASPCA, PPH],
  },
]

export const CAT_FOOD_CATEGORIES: FoodCategory[] = [
  'Fruits', 'Vegetables', 'Proteins & Eggs', 'Fish & Seafood', 'Dairy', 'Nuts & Seeds', 'Grains & Carbs', 'Other & Sweets',
]

export function getCatFood(slug: string): FoodEntry | undefined {
  return CAT_FOODS.find((f) => f.slug === slug)
}

/** Related foods for internal linking: declared `related` slugs first, then same-category fill, max 4. */
export function getRelatedCatFoods(entry: FoodEntry): FoodEntry[] {
  const out: FoodEntry[] = []
  for (const slug of entry.related ?? []) {
    const f = getCatFood(slug)
    if (f && f.slug !== entry.slug && !out.includes(f)) out.push(f)
  }
  if (out.length < 4) {
    for (const f of CAT_FOODS) {
      if (out.length >= 4) break
      if (f.slug !== entry.slug && f.category === entry.category && !out.includes(f)) out.push(f)
    }
  }
  return out.slice(0, 4)
}

/** Build per-food FAQ entries (drives the FAQPage citation schema + on-page accordion). */
export function catFoodFaqs(entry: FoodEntry): { question: string; answer: string }[] {
  const name = entry.name.toLowerCase()
  const faqs: { question: string; answer: string }[] = [
    { question: `Can cats eat ${name}?`, answer: `${entry.shortAnswer} ${entry.detail}` },
  ]
  if (entry.verdict === 'toxic') {
    faqs.push({
      question: `What happens if a cat eats ${name}?`,
      answer: `${(entry.symptoms ?? []).join('; ') || 'Signs vary by amount and cat.'}. ${entry.whatToDo ?? 'Contact ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away.'}`,
    })
    faqs.push({
      question: `How much ${name} is dangerous for a cat?`,
      answer: `Because cats are small and individual sensitivity varies, treat any ingestion as potentially serious and let a professional assess the dose. Call ASPCA Animal Poison Control at 888-426-4435 with your cat’s weight and the amount eaten.`,
    })
  } else {
    if (entry.quantity || entry.safePrep) {
      faqs.push({
        question: `How much ${name} can a cat have?`,
        answer: `${entry.quantity ?? 'Offer modest amounts as an occasional treat.'} ${entry.safePrep ?? ''} Treats should stay within about 10% of your cat’s daily calories — most cats need little beyond a complete, balanced diet.`.trim(),
      })
    }
    if (entry.risks?.length) {
      faqs.push({
        question: `Is ${name} bad for cats?`,
        answer: `It can be if the cautions are ignored: ${entry.risks.join('; ')}. Served correctly and in moderation, it is generally fine for most healthy cats as an occasional treat.`,
      })
    }
  }
  return faqs
}

export const VERDICT_META: Record<Verdict, { label: string; tone: string; color: string }> = {
  safe: { label: 'Yes — Safe in moderation', tone: 'good', color: '#15803d' },
  caution: { label: 'Caution — Risks apply', tone: 'warn', color: '#b45309' },
  toxic: { label: 'No — Toxic to cats', tone: 'danger', color: '#b91c1c' },
}
