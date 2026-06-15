/**
 * Programmatic SEO source-of-truth for /nutrition/can-dogs-eat/[food].
 *
 * One data model -> one template -> a page per food, each a substantive,
 * extractable, citation-grade answer to "can dogs eat X?" — one of the
 * highest-volume pet query families. NOT thin programmatic content: every
 * entry carries a verdict, the reasoning, serving/quantity guidance or risk +
 * symptoms, and what-to-do, grounded in established veterinary toxicology.
 *
 * TRUST (QC §1): toxicity verdicts here are health-critical. Every verdict
 * reflects mainstream veterinary consensus (ASPCA Animal Poison Control, Pet
 * Poison Helpline, VCA/Merck veterinary references). No fabricated thresholds.
 * Every page defers to the ASPCA hotline (888-426-4435) and a veterinarian.
 * Do NOT add a food without a known, verifiable safety profile.
 */

export type Verdict = 'safe' | 'caution' | 'toxic'

export type FoodCategory =
  | 'Fruits'
  | 'Vegetables'
  | 'Proteins & Eggs'
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

export const DOG_FOODS: FoodEntry[] = [
  // ---------------- TOXIC ----------------
  {
    slug: 'chocolate', name: 'Chocolate', category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Chocolate is toxic to dogs — it contains theobromine and caffeine, which dogs cannot clear efficiently.',
    detail: 'Chocolate contains theobromine and caffeine (methylxanthines) that dogs metabolize slowly, so they build to toxic levels. Toxicity rises with the darkness of the chocolate: baking chocolate and cocoa powder are the most dangerous, dark and semi-sweet are high risk, and milk chocolate is lower but still unsafe in quantity. The toxic dose depends on the type, the amount, and your dog’s weight.',
    risks: ['Theobromine and caffeine poisoning', 'Cardiac arrhythmias and seizures at higher doses', 'Pancreatitis risk from the fat and sugar'],
    symptoms: ['Vomiting and diarrhea', 'Restlessness, hyperactivity, panting', 'Rapid or irregular heartbeat', 'Tremors or seizures (severe)'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or your vet immediately with the chocolate type, amount, and your dog’s weight — they calculate whether the dose is toxic. Do not wait for symptoms.',
    related: ['coffee', 'xylitol', 'grapes'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'grapes', name: 'Grapes', aliases: ['raisins'], category: 'Fruits', verdict: 'toxic',
    shortAnswer: 'No. Grapes and raisins are toxic to dogs and can cause sudden kidney failure — even in small amounts.',
    detail: 'Grapes, raisins, currants, and sultanas can cause acute kidney injury in dogs. The toxic compound is now thought to be tartaric acid, but sensitivity varies widely between dogs and no safe amount has been established — some dogs react to a few grapes. Because the risk is severe and unpredictable, all grape and raisin ingestion is treated as an emergency.',
    risks: ['Acute kidney failure', 'No established safe dose — individual sensitivity varies'],
    symptoms: ['Vomiting (often within hours)', 'Lethargy and loss of appetite', 'Decreased or absent urination (a late, serious sign)'],
    whatToDo: 'Treat any amount as an emergency. Call ASPCA Poison Control (888-426-4435) or your vet right away — early decontamination greatly improves the outcome.',
    related: ['raisins', 'chocolate', 'blueberries'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'onions', name: 'Onions', aliases: ['garlic', 'chives', 'leeks'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Onions — and the whole allium family (garlic, chives, leeks) — are toxic to dogs and damage red blood cells.',
    detail: 'Onions, garlic, leeks, and chives contain N-propyl disulfide and related compounds that damage canine red blood cells and cause hemolytic anemia. All forms count — raw, cooked, powdered, and dehydrated — and powdered or concentrated forms (onion/garlic powder, soup mixes) are especially potent. Garlic is more concentrated than onion by weight.',
    risks: ['Hemolytic anemia (red-blood-cell destruction)', 'Cumulative — repeated small amounts add up', 'Hidden in many human dishes, broths, and seasonings'],
    symptoms: ['Weakness, lethargy, pale gums', 'Rapid breathing or elevated heart rate', 'Reddish or brown urine', 'Vomiting (signs can be delayed several days)'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or your vet with the form and amount. Signs of anemia can take days to appear, so do not assume your dog is fine because it seems normal at first.',
    related: ['garlic', 'chives'],
    sources: [ASPCA, PPH, VCA],
  },
  {
    slug: 'xylitol', name: 'Xylitol', aliases: ['birch sugar', 'sugar-free gum'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Xylitol, a sugar substitute, is extremely toxic to dogs — it triggers a dangerous insulin release and can cause liver failure.',
    detail: 'Xylitol (sometimes labeled "birch sugar") is a sweetener in sugar-free gum, mints, some peanut butters, baked goods, and toothpaste. In dogs it causes a rapid, massive insulin release that crashes blood sugar within 10–60 minutes, and higher doses can cause acute liver failure. It is one of the most dangerous everyday human products for dogs.',
    risks: ['Severe hypoglycemia (dangerously low blood sugar) within an hour', 'Acute liver failure at higher doses', 'Hidden in "sugar-free" products — always check labels, especially peanut butter'],
    symptoms: ['Weakness, wobbliness, collapse', 'Vomiting', 'Tremors or seizures', 'Lethargy'],
    whatToDo: 'This is an emergency — act within minutes. Call ASPCA Poison Control (888-426-4435) or rush to an emergency vet. Bring the product packaging so the xylitol amount can be assessed.',
    related: ['peanut-butter', 'chocolate'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'macadamia-nuts', name: 'Macadamia Nuts', category: 'Nuts & Seeds', verdict: 'toxic',
    shortAnswer: 'No. Macadamia nuts are toxic to dogs and cause weakness, tremors, and hyperthermia — even in small amounts.',
    detail: 'Macadamia nuts are uniquely toxic to dogs through a mechanism that is not fully understood. Even a small number can cause a recognizable syndrome of hind-limb weakness, tremors, and elevated body temperature, typically within 12 hours. Most dogs recover with supportive care, but the reaction is distressing and warrants veterinary advice.',
    risks: ['Hind-limb weakness and inability to walk', 'Tremors and elevated body temperature', 'Often combined with chocolate (e.g., cookies) for a double risk'],
    symptoms: ['Weakness, especially in the back legs', 'Tremors', 'Vomiting, lethargy', 'Fever / panting'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or your vet with the amount eaten. Note whether the nuts were in chocolate, which adds a second toxin.',
    related: ['chocolate', 'almonds', 'walnuts'],
    sources: [ASPCA, PPH, VCA],
  },
  {
    slug: 'coffee', name: 'Coffee', aliases: ['caffeine', 'tea', 'energy drinks'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Coffee and caffeine are toxic to dogs — the same methylxanthines that make chocolate dangerous.',
    detail: 'Caffeine is a methylxanthine, like the theobromine in chocolate, and dogs are far more sensitive to it than people. Coffee grounds, beans, tea, energy drinks, and caffeine pills are all hazards, and used grounds still contain enough to cause signs. A few laps of cooled coffee rarely harm a large dog, but beans, grounds, or pills are dangerous.',
    risks: ['Cardiac arrhythmias', 'Hyperactivity, tremors, seizures at higher doses', 'Beans, grounds, and pills are the most concentrated forms'],
    symptoms: ['Restlessness and hyperactivity', 'Rapid heart rate or panting', 'Vomiting', 'Tremors or seizures (severe)'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or your vet with the source (grounds, pills, drink) and amount. Caffeine pills and espresso beans are the most urgent.',
    related: ['chocolate', 'xylitol'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'alcohol', name: 'Alcohol', aliases: ['beer', 'wine', 'liquor'], category: 'Other & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Alcohol is toxic to dogs in any form, including raw bread dough and fermenting items — dogs are highly sensitive to it.',
    detail: 'Ethanol is toxic to dogs at much lower doses than to people, and it is found not only in drinks but in raw yeast dough (which ferments in the warm stomach), rotting fruit, and some desserts. Dogs become intoxicated quickly and can progress to dangerous central-nervous-system and respiratory depression.',
    risks: ['CNS depression — disorientation, collapse', 'Dangerously low body temperature and blood sugar', 'Respiratory depression at higher doses'],
    symptoms: ['Wobbliness, disorientation', 'Vomiting', 'Slow breathing', 'Collapse'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or an emergency vet immediately. Raw bread dough is a particular hazard and may need urgent treatment.',
    related: ['bread-dough', 'chocolate'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'avocado', name: 'Avocado', category: 'Fruits', verdict: 'caution',
    shortAnswer: 'Caution. Avocado flesh is only mildly risky for dogs, but the pit is a serious choking and obstruction hazard.',
    detail: 'Avocado contains persin, which is highly toxic to birds and some livestock but only mildly so to dogs — the flesh causes, at most, stomach upset in most dogs. The bigger canine risks are the large pit (a choking and intestinal-obstruction hazard) and the high fat content, which can trigger pancreatitis or GI upset. Small amounts of plain flesh are usually tolerated, but it is not a food to offer freely.',
    risks: ['Pit is a choking / intestinal-obstruction hazard', 'High fat can cause GI upset or pancreatitis', 'Persin (mild in dogs, severe in birds)'],
    symptoms: ['Vomiting or diarrhea', 'Signs of obstruction if the pit is swallowed (vomiting, no stool, distress)'],
    safePrep: 'If offered at all, give a small amount of plain ripe flesh only — never the pit, skin, or leaves.',
    quantity: 'Occasional small amounts of flesh at most; not a routine treat.',
    related: ['banana', 'mango'],
    sources: [ASPCA, VCA],
  },

  // ---------------- CAUTION ----------------
  {
    slug: 'peanut-butter', name: 'Peanut Butter', category: 'Nuts & Seeds', verdict: 'caution',
    shortAnswer: 'Usually yes — but ONLY xylitol-free peanut butter. Xylitol-sweetened peanut butter is deadly to dogs.',
    detail: 'Plain, unsalted peanut butter is a popular, generally safe dog treat and a useful way to give medication. The critical caveat is xylitol: some "sugar-free" or "no sugar added" peanut butters contain this sweetener, which is life-threateningly toxic to dogs. Always read the label. Even xylitol-free peanut butter is high in fat and calories, so it is a treat, not a staple.',
    benefits: ['Protein and healthy fats', 'Highly palatable — useful for pills and enrichment toys'],
    risks: ['Xylitol in some brands is deadly — always check the label', 'High fat/calories; pancreatitis risk in excess'],
    safePrep: 'Choose plain, unsalted, xylitol-free peanut butter. Use as an occasional treat or in a food toy.',
    quantity: 'Keep treats to ~10% of daily calories; a small spoonful for a medium dog.',
    related: ['xylitol', 'almonds'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'cheese', name: 'Cheese', category: 'Dairy', verdict: 'caution',
    shortAnswer: 'In small amounts, usually — but many dogs are lactose intolerant, and cheese is high in fat and salt.',
    detail: 'Most dogs can have a little cheese as a treat, and it is handy for hiding pills. However, dogs produce little lactase, so dairy commonly causes gas, loose stool, or upset — and cheese is high in fat (pancreatitis risk) and salt. Low-fat options like a little plain cottage cheese are gentler. Avoid cheeses with onion, garlic, or herbs.',
    benefits: ['Protein and calcium', 'Very palatable for training and medication'],
    risks: ['Lactose intolerance — gas, diarrhea', 'High fat (pancreatitis) and salt', 'Flavored cheeses may contain toxic onion/garlic'],
    safePrep: 'Offer a small piece of plain, low-fat cheese; skip it if your dog gets loose stool.',
    quantity: 'A small cube or two as an occasional treat.',
    related: ['yogurt', 'milk'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'almonds', name: 'Almonds', category: 'Nuts & Seeds', verdict: 'caution',
    shortAnswer: 'Not recommended. Almonds are not toxic like macadamias, but they are a choking, obstruction, and pancreatitis risk.',
    detail: 'Almonds are not directly poisonous to dogs, but they are hard to digest and pose real practical risks: choking and intestinal obstruction (especially in small dogs), and a high fat content that can trigger pancreatitis. Flavored or salted almonds add salt and sometimes toxic seasonings. They are best avoided in favor of dog-safe treats.',
    risks: ['Choking / intestinal obstruction', 'High fat — GI upset and pancreatitis', 'Salted/flavored versions add salt and seasonings'],
    symptoms: ['Gagging or choking', 'Vomiting or diarrhea', 'Signs of obstruction (repeated vomiting, no stool)'],
    safePrep: 'Better skipped. If a dog eats a few plain almonds, monitor; call your vet if a small dog or large quantity is involved.',
    related: ['macadamia-nuts', 'peanut-butter', 'walnuts'],
    sources: [ASPCA, PPH],
  },
  {
    slug: 'tomato', name: 'Tomato', category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Ripe tomato flesh is fine in small amounts, but green tomatoes and the leaves/stems contain solanine and are not safe.',
    detail: 'Ripe red tomato flesh is non-toxic and safe for most dogs in moderation. The green parts — unripe tomatoes, leaves, and stems — contain solanine and tomatine, which can cause GI upset and, in larger amounts, other signs. Keep dogs out of the tomato garden, and offer only ripe fruit.',
    benefits: ['Ripe flesh provides vitamins and antioxidants', 'Low calorie'],
    risks: ['Green tomatoes, leaves, and stems contain solanine', 'Garden plants are a hazard'],
    safePrep: 'Offer small pieces of ripe, red tomato with the green parts removed. Avoid sauces (often contain onion/garlic).',
    quantity: 'A few small pieces as an occasional treat.',
    related: ['cucumber', 'carrots'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'bread', name: 'Bread', category: 'Grains & Carbs', verdict: 'caution',
    shortAnswer: 'Plain baked bread is safe in small amounts, but it is empty calories — and raw bread dough is dangerous.',
    detail: 'A small piece of plain white or wheat bread is non-toxic to most dogs, but it offers little nutrition and adds calories. The real hazard is raw yeast dough: it rises in the warm stomach and ferments into alcohol, causing both bloating and alcohol toxicity. Avoid breads with raisins, onion, garlic, nuts, or seeds.',
    benefits: ['Harmless in small amounts; sometimes used to pad medication'],
    risks: ['Empty calories', 'RAW dough is an emergency (bloat + alcohol)', 'Add-ins like raisins, onion, or nuts can be toxic'],
    safePrep: 'Offer a small piece of plain, fully baked bread. Never give raw dough.',
    quantity: 'A small bite occasionally.',
    related: ['bread-dough', 'rice', 'oatmeal'],
    sources: [ASPCA, VCA],
  },
  {
    slug: 'ham', name: 'Ham', aliases: ['pork', 'bacon'], category: 'Proteins & Eggs', verdict: 'caution',
    shortAnswer: 'Not recommended. Ham, bacon, and other cured pork are very high in salt and fat for dogs.',
    detail: 'Plain cooked pork is not toxic, but ham and bacon are heavily salted and fatty, which makes them a poor choice for dogs: the fat raises pancreatitis risk and the salt is hard on dogs prone to heart or kidney issues. Cooked bones (like a ham bone) are an additional splintering and obstruction hazard. A tiny taste is unlikely to harm a healthy dog, but it should not be routine.',
    risks: ['Very high salt and fat (pancreatitis risk)', 'Cooked ham bones splinter — choking/obstruction/perforation', 'Worse for dogs with heart, kidney, or pancreatitis history'],
    symptoms: ['Vomiting or diarrhea', 'Excessive thirst', 'Abdominal pain (pancreatitis)'],
    safePrep: 'Better to skip. If sharing meat, use a small amount of plain, unseasoned, lean cooked meat instead. Never give cooked bones.',
    related: ['chicken', 'cheese'],
    sources: [ASPCA, VCA],
  },

  // ---------------- SAFE ----------------
  {
    slug: 'carrots', name: 'Carrots', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes. Carrots are a healthy, low-calorie treat for dogs, raw or cooked.',
    detail: 'Carrots are one of the best everyday dog treats: low in calories, high in fiber and beta-carotene, and satisfying to crunch. Raw carrot sticks can help with dental chewing, and frozen carrots can soothe a teething puppy. Cut into appropriate sizes to avoid choking, especially for small dogs.',
    benefits: ['Low calorie, high fiber', 'Beta-carotene (vitamin A)', 'Crunch supports chewing / dental interest'],
    safePrep: 'Wash, and cut into bite-sized pieces or sticks. Raw or lightly cooked (no salt/butter).',
    quantity: 'A few pieces daily is fine within the 10% treat budget.',
    related: ['green-beans', 'cucumber', 'sweet-potato'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'blueberries', name: 'Blueberries', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes. Blueberries are a safe, antioxidant-rich treat for dogs.',
    detail: 'Blueberries are a dog-safe superfood: small, low in calories, and rich in antioxidants, fiber, and vitamin C. Their size makes them easy to use as training treats. Fresh or frozen both work — frozen ones make a nice hot-weather treat.',
    benefits: ['Antioxidants and vitamin C', 'Low calorie — good training treat', 'Fiber'],
    safePrep: 'Wash and serve whole (or mashed for tiny dogs). Fresh or frozen.',
    quantity: 'A small handful as a treat; fewer for small dogs.',
    related: ['strawberries', 'apples', 'banana'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'apples', name: 'Apples', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes — without the core and seeds. Apple flesh is a crunchy, vitamin-rich treat for dogs.',
    detail: 'Apple slices are a refreshing, fiber- and vitamin-rich treat. The one caveat is the core and seeds: apple seeds contain a small amount of cyanide-releasing compound, and while a stray seed is rarely a problem, the core is also a choking hazard. Remove the core and seeds and slice the flesh.',
    benefits: ['Vitamins A and C, fiber', 'Low fat, satisfying crunch'],
    risks: ['Seeds contain trace cyanogenic compounds — remove them', 'Core is a choking hazard'],
    safePrep: 'Wash, core, remove seeds, and slice. Skip the core.',
    quantity: 'A few slices as a treat.',
    related: ['pears', 'blueberries', 'banana'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'banana', name: 'Banana', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Bananas are a safe, soft treat — but they are high in sugar.',
    detail: 'Bananas are a dog-safe treat: soft, easy to mash into food toys, and a source of potassium and vitamins. Because they are relatively high in natural sugar, they are best as an occasional treat rather than a daily staple, especially for overweight dogs. The peel is not toxic but is hard to digest — skip it.',
    benefits: ['Potassium, vitamin B6, fiber', 'Soft — easy for puppies and seniors, good in food toys'],
    risks: ['Higher in sugar — moderation for overweight or diabetic dogs', 'Peel is hard to digest'],
    safePrep: 'Peel and offer a few small slices, or mash into a food toy.',
    quantity: 'A couple of slices as an occasional treat.',
    related: ['blueberries', 'apples', 'mango'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'watermelon', name: 'Watermelon', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes — flesh only, no seeds or rind. Watermelon is a hydrating warm-weather treat for dogs.',
    detail: 'Seedless watermelon flesh is a refreshing, hydrating, low-calorie treat (it is about 92% water). Remove the seeds, which can cause GI upset or obstruction in quantity, and the rind, which is tough and can cause blockage. Frozen chunks make a great summer treat.',
    benefits: ['Very hydrating, low calorie', 'Vitamins A and C'],
    risks: ['Seeds — GI upset/obstruction in quantity', 'Rind is tough — obstruction risk'],
    safePrep: 'Remove seeds and rind; offer flesh in bite-sized pieces (fresh or frozen).',
    quantity: 'A few pieces as a treat.',
    related: ['blueberries', 'cucumber', 'strawberries'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'pumpkin', name: 'Pumpkin', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes. Plain cooked or canned pumpkin is dog-safe and is often used to settle digestion.',
    detail: 'Plain pumpkin (cooked fresh or plain canned — not pie filling) is a vet-favorite addition for dogs: its soluble fiber can help with both mild diarrhea and constipation, and it is low in calories. Avoid spiced pumpkin-pie filling, which contains sugar and sometimes xylitol or nutmeg.',
    benefits: ['Soluble fiber — supports firm stool', 'Low calorie, vitamin A', 'Gentle on the stomach'],
    risks: ['Use PLAIN pumpkin — pie filling has sugar/spices and sometimes xylitol'],
    safePrep: 'Use plain canned pumpkin or plain cooked pumpkin (no salt, sugar, or spices).',
    quantity: 'A teaspoon to a tablespoon mixed into food depending on dog size.',
    related: ['sweet-potato', 'carrots', 'green-beans'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'sweet-potato', name: 'Sweet Potato', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes — cooked and plain. Sweet potato is a nutritious, fiber-rich treat for dogs.',
    detail: 'Cooked, plain sweet potato is a wholesome dog treat, rich in fiber, beta-carotene, and vitamins. Always cook it (raw is hard to digest and a choking risk) and serve it plain — no butter, salt, or marshmallow toppings. Dehydrated sweet-potato slices are a popular natural chew.',
    benefits: ['Fiber, beta-carotene (vitamin A), vitamin C', 'Naturally sweet — well liked'],
    risks: ['Serve cooked, not raw', 'High in carbohydrate/calories — moderation for weight control'],
    safePrep: 'Cook (bake/steam/boil) and serve plain, in bite-sized pieces. No butter or seasoning.',
    quantity: 'A few small pieces as a treat.',
    related: ['pumpkin', 'carrots', 'rice'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'green-beans', name: 'Green Beans', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes. Plain green beans are an excellent low-calorie treat — often recommended for weight management.',
    detail: 'Plain green beans (fresh, steamed, or plain canned with no added salt) are one of the best treats for dogs watching their weight: filling, fibrous, and very low in calories. They are a common vet recommendation for adding volume to the bowl of a dieting dog. Avoid versions cooked with butter, salt, onion, or garlic.',
    benefits: ['Very low calorie, filling fiber', 'Good for weight-management diets', 'Vitamins and minerals'],
    risks: ['Avoid added salt, butter, onion, or garlic (use plain)'],
    safePrep: 'Serve plain — raw, steamed, or no-salt canned. Cut for small dogs.',
    quantity: 'Generous within reason; a useful low-cal filler.',
    related: ['carrots', 'pumpkin', 'cucumber'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'chicken', name: 'Chicken', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — plain, cooked, and boneless. Plain chicken is a safe, lean protein and a bland-diet staple.',
    detail: 'Plain, fully cooked, boneless, skinless chicken is a safe, highly digestible protein, and boiled chicken with plain rice is a classic vet-recommended bland diet for an upset stomach. Avoid seasoning, onion, and garlic, never give cooked bones (they splinter), and remove the skin to cut fat. Watch for chicken allergies in sensitive dogs.',
    benefits: ['Lean, highly digestible protein', 'Boiled chicken + rice is a standard bland diet', 'Very palatable for medication and training'],
    risks: ['Never cooked bones (splinter)', 'No seasoning/onion/garlic', 'Some dogs are chicken-allergic'],
    safePrep: 'Boil or bake plain, boneless, skinless chicken; shred and cool. No oil, salt, or seasoning.',
    quantity: 'Small amounts as a treat, or as directed for a bland diet.',
    related: ['eggs', 'rice', 'ham'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'eggs', name: 'Eggs', category: 'Proteins & Eggs', verdict: 'safe',
    shortAnswer: 'Yes — cooked. Plain cooked eggs are a safe, complete protein for dogs.',
    detail: 'Cooked eggs are a safe, nutritious treat — a source of highly digestible protein and amino acids. Cook them plainly (no butter, salt, onion, or cheese) and serve scrambled or hard-boiled. Raw eggs are best avoided due to Salmonella risk and a protein (avidin) that can interfere with biotin over time.',
    benefits: ['Complete, highly digestible protein', 'Vitamins and amino acids'],
    risks: ['Cook them — raw eggs carry Salmonella risk', 'No salt/butter/onion'],
    safePrep: 'Scramble or hard-boil plain (no oil, butter, or seasoning); cool before serving.',
    quantity: 'Part of an egg as a treat; whole egg only for larger dogs occasionally.',
    related: ['chicken', 'yogurt'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'rice', name: 'Rice', category: 'Grains & Carbs', verdict: 'safe',
    shortAnswer: 'Yes. Plain cooked rice is gentle, digestible, and a staple of the bland diet for upset stomachs.',
    detail: 'Plain cooked white rice is bland, easy to digest, and the classic partner to boiled chicken for a dog with a mild upset stomach. Brown rice is more nutritious but harder to digest. Serve it plain — no salt, butter, or seasoning — and as part of a balanced diet rather than a daily filler.',
    benefits: ['Easy to digest — bland-diet staple', 'Gentle energy source'],
    safePrep: 'Cook plain (no salt or butter). White rice is gentlest for upset stomachs.',
    quantity: 'A spoonful mixed in, or as directed for a bland diet.',
    related: ['chicken', 'oatmeal', 'pumpkin'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'cucumber', name: 'Cucumber', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes. Cucumber is a crunchy, hydrating, very low-calorie treat for dogs.',
    detail: 'Cucumber is about 95% water, making it a hydrating, low-calorie, crunchy treat — a good option for dogs on a diet. Cut it into appropriate sizes to prevent choking, especially for small dogs, and introduce it gradually as too much of any new vegetable can cause mild GI upset.',
    benefits: ['Very low calorie, hydrating', 'Crunchy — good for weight management'],
    safePrep: 'Wash and slice into bite-sized pieces; remove large chunks for small dogs.',
    quantity: 'A few slices as a treat.',
    related: ['carrots', 'green-beans', 'watermelon'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'strawberries', name: 'Strawberries', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Strawberries are a safe, vitamin-C-rich treat — but contain natural sugar.',
    detail: 'Strawberries are a dog-safe fruit, rich in fiber and vitamin C. They are higher in sugar than vegetables, so they are best as an occasional treat, especially for overweight dogs. Serve fresh and cut; skip sugary syrups or canned strawberries.',
    benefits: ['Vitamin C and fiber', 'Antioxidants'],
    risks: ['Natural sugar — moderation for overweight/diabetic dogs'],
    safePrep: 'Wash, remove the stem/leaves, and cut into pieces. Fresh only.',
    quantity: 'A few small pieces as a treat.',
    related: ['blueberries', 'watermelon', 'apples'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'yogurt', name: 'Yogurt', category: 'Dairy', verdict: 'safe',
    shortAnswer: 'In small amounts — plain, unsweetened yogurt is usually fine, but watch for lactose sensitivity and xylitol.',
    detail: 'A spoonful of plain, unsweetened yogurt is generally safe and provides protein, calcium, and probiotics. The cautions are lactose (some dogs get loose stool), and — critically — sweeteners: never give yogurt sweetened with xylitol, and avoid added sugar or fruit syrups. Plain Greek yogurt is lower in lactose.',
    benefits: ['Protein, calcium, probiotics', 'Plain Greek yogurt is lower in lactose'],
    risks: ['Lactose sensitivity in some dogs', 'NEVER xylitol-sweetened; avoid added sugar/flavors'],
    safePrep: 'Choose plain, unsweetened, xylitol-free yogurt; a small spoonful.',
    quantity: 'A spoonful as an occasional treat.',
    related: ['cheese', 'xylitol', 'eggs'],
    sources: [VCA, ASPCA],
  },
  {
    slug: 'oatmeal', name: 'Oatmeal', category: 'Grains & Carbs', verdict: 'safe',
    shortAnswer: 'Yes — plain and cooked. Oatmeal is a digestible, fiber-rich option, especially for sensitive dogs.',
    detail: 'Plain cooked oatmeal is a safe, fiber-rich carbohydrate that can suit dogs sensitive to wheat. Cook it with water (not milk), serve it plain and cooled, and skip sugar, flavorings, and toppings like raisins. Introduce gradually and keep portions modest.',
    benefits: ['Soluble fiber', 'Wheat-free carbohydrate for sensitive dogs'],
    risks: ['Cook plain with water — no sugar, flavoring, or raisins'],
    safePrep: 'Cook plain with water, cool, and serve in modest amounts.',
    quantity: 'A spoonful or two mixed into food.',
    related: ['rice', 'pumpkin', 'banana'],
    sources: [VCA, ASPCA],
  },
]

export const DOG_FOOD_CATEGORIES: FoodCategory[] = [
  'Fruits', 'Vegetables', 'Proteins & Eggs', 'Dairy', 'Nuts & Seeds', 'Grains & Carbs', 'Other & Sweets',
]

export function getDogFood(slug: string): FoodEntry | undefined {
  return DOG_FOODS.find((f) => f.slug === slug)
}

/** Related foods for internal linking: declared `related` slugs first, then same-category fill, max 4. */
export function getRelatedFoods(entry: FoodEntry): FoodEntry[] {
  const out: FoodEntry[] = []
  for (const slug of entry.related ?? []) {
    const f = getDogFood(slug)
    if (f && f.slug !== entry.slug && !out.includes(f)) out.push(f)
  }
  if (out.length < 4) {
    for (const f of DOG_FOODS) {
      if (out.length >= 4) break
      if (f.slug !== entry.slug && f.category === entry.category && !out.includes(f)) out.push(f)
    }
  }
  return out.slice(0, 4)
}

/** Build per-food FAQ entries (drives the FAQPage citation schema + on-page accordion). */
export function foodFaqs(entry: FoodEntry): { question: string; answer: string }[] {
  const name = entry.name.toLowerCase()
  const faqs: { question: string; answer: string }[] = [
    { question: `Can dogs eat ${name}?`, answer: `${entry.shortAnswer} ${entry.detail}` },
  ]
  if (entry.verdict === 'toxic') {
    faqs.push({
      question: `What happens if a dog eats ${name}?`,
      answer: `${(entry.symptoms ?? []).join('; ') || 'Signs vary by amount and dog.'}. ${entry.whatToDo ?? 'Contact ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away.'}`,
    })
    faqs.push({
      question: `How much ${name} is dangerous for a dog?`,
      answer: `Because individual sensitivity and the amount both matter, treat any ingestion as potentially serious and let a professional assess the dose. Call ASPCA Animal Poison Control at 888-426-4435 with your dog’s weight and the amount eaten.`,
    })
  } else {
    if (entry.quantity || entry.safePrep) {
      faqs.push({
        question: `How much ${name} can a dog have?`,
        answer: `${entry.quantity ?? 'Offer modest amounts as an occasional treat.'} ${entry.safePrep ?? ''} Treats should stay within about 10% of your dog’s daily calories.`.trim(),
      })
    }
    if (entry.risks?.length) {
      faqs.push({
        question: `Is ${name} bad for dogs?`,
        answer: `It can be if the cautions are ignored: ${entry.risks.join('; ')}. Served correctly and in moderation, it is generally fine for most healthy dogs.`,
      })
    }
  }
  return faqs
}

export const VERDICT_META: Record<Verdict, { label: string; tone: string; color: string }> = {
  safe: { label: 'Yes — Safe in moderation', tone: 'good', color: '#15803d' },
  caution: { label: 'Caution — Risks apply', tone: 'warn', color: '#b45309' },
  toxic: { label: 'No — Toxic to dogs', tone: 'danger', color: '#b91c1c' },
}
