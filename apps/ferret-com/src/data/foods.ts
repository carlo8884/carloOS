/**
 * Programmatic SEO source-of-truth for /diet/can-ferrets-eat/[food].
 *
 * One data model -> one template -> a page per food, each a substantive,
 * extractable, citation-grade answer to "can ferrets eat X?" — a high-volume
 * pet query family. NOT thin programmatic content: every entry carries a
 * verdict, the reasoning, serving/quantity guidance or risk + symptoms, and
 * what-to-do, grounded in obligate-carnivore physiology and established
 * veterinary toxicology.
 *
 * FERRETS ARE DISTINCT (QC §1 — health-critical). Ferrets are strict obligate
 * carnivores with a short gut and ~3-hour transit time. They cannot digest
 * plant fiber or complex carbohydrate, and dietary sugar/carbohydrate is
 * associated with pancreatic beta-cell stress and elevated INSULINOMA risk —
 * a common ferret cancer. High-fiber plant matter also causes dangerous GI
 * BLOCKAGES. So fruits, vegetables, grains, and sugary treats are NOT
 * appropriate, in addition to the classic toxins (chocolate, onion/garlic,
 * xylitol, grapes/raisins, caffeine, alcohol, macadamia/nuts). The safe list
 * is plain meat, egg, and meat-based/organ treats.
 *
 * Every verdict reflects mainstream exotic-mammal veterinary consensus
 * (ASPCA Animal Poison Control, Pet Poison Helpline, and the ferret clinical
 * literature). No fabricated thresholds; qualitative where no precise dose
 * is established. Every page defers to a ferret-experienced veterinarian and
 * the ASPCA hotline (888-426-4435). Do NOT add a food without a known,
 * verifiable ferret safety profile.
 */

export type Verdict = 'safe' | 'caution' | 'toxic'

export type FoodCategory =
  | 'Meat & Poultry'
  | 'Eggs & Organ'
  | 'Fish & Seafood'
  | 'Dairy'
  | 'Fruits'
  | 'Vegetables'
  | 'Grains & Carbs'
  | 'Nuts & Sweets'
  | 'Toxic Household'

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
  /** Safe/caution foods: rough portion guidance. */
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
const QC = 'Quesenberry & Carpenter, Ferrets, Rabbits, and Rodents (clinical reference)'
const VCEAP = 'Veterinary Clinics of North America: Exotic Animal Practice'

export const FERRET_FOODS: FoodEntry[] = [
  // ---------------- TOXIC ----------------
  {
    slug: 'chocolate', name: 'Chocolate', category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Chocolate is toxic to ferrets — it contains theobromine and caffeine, which a ferret cannot clear safely.',
    detail: 'Chocolate contains theobromine and caffeine (methylxanthines) that ferrets metabolize poorly, so they build to toxic levels. Because a ferret is tiny — most weigh only 1–4 pounds — even a small amount of chocolate is dangerous, and darker chocolate (baking chocolate, cocoa powder, dark chocolate) is the most hazardous. There is no safe serving of chocolate for a ferret.',
    risks: ['Theobromine and caffeine poisoning', 'Cardiac arrhythmias and seizures', 'A ferret’s small body weight means small amounts matter'],
    symptoms: ['Vomiting or diarrhea', 'Restlessness, hyperactivity, tremors', 'Rapid or irregular heartbeat', 'Seizures (severe)'],
    whatToDo: 'Treat any amount as an emergency. Call your veterinarian or ASPCA Animal Poison Control (888-426-4435) right away with the chocolate type, amount, and your ferret’s weight. Do not wait for symptoms.',
    related: ['caffeine', 'xylitol', 'onion'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'onion', name: 'Onion', aliases: ['garlic', 'chives', 'leeks'], category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Onions and the whole allium family — garlic, chives, leeks — are toxic to ferrets and destroy red blood cells.',
    detail: 'Onions, garlic, leeks, and chives contain organosulfur compounds that damage mammalian red blood cells and cause hemolytic anemia. Ferrets are small and sensitive, and all forms count — raw, cooked, powdered, and dehydrated — with powders and concentrated seasonings (onion/garlic powder, baby food, soup mixes) being especially potent. Garlic supplements and "natural" flea remedies are a frequent hidden source.',
    risks: ['Hemolytic anemia (red-blood-cell destruction)', 'Cumulative — repeated small amounts add up', 'Hidden in baby food, broths, seasonings, and garlic supplements'],
    symptoms: ['Weakness, lethargy, pale gums', 'Rapid breathing or elevated heart rate', 'Reddish or brown urine', 'Vomiting (signs can be delayed days)'],
    whatToDo: 'Call your veterinarian or ASPCA Animal Poison Control (888-426-4435) with the form and amount. Anemia can take days to appear, so do not assume your ferret is fine because it seems normal at first.',
    related: ['chocolate', 'xylitol', 'onion'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'xylitol', name: 'Xylitol', aliases: ['birch sugar', 'sugar-free gum'], category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Xylitol, a sugar substitute, is dangerous to ferrets and can cause a sudden blood-sugar crash.',
    detail: 'Xylitol (sometimes labeled "birch sugar") is a sweetener in sugar-free gum, mints, some peanut butters, baked goods, and toothpaste. It is well documented to trigger a rapid insulin release and dangerous hypoglycemia in dogs, and ferrets — already prone to insulin-related disease — should never be exposed to it. Beyond the acute risk, ferrets have no use for sweeteners of any kind.',
    risks: ['Risk of severe hypoglycemia (dangerously low blood sugar)', 'Especially concerning in a species already prone to insulin disease', 'Hidden in "sugar-free" products — always check labels'],
    symptoms: ['Weakness, wobbliness, collapse', 'Vomiting', 'Tremors or seizures', 'Lethargy'],
    whatToDo: 'Treat as an emergency. Call your veterinarian or ASPCA Animal Poison Control (888-426-4435) immediately, and bring the product packaging so the xylitol amount can be assessed.',
    related: ['chocolate', 'sugary-treats', 'banana'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'grapes', name: 'Grapes', aliases: ['raisins', 'currants', 'sultanas'], category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Grapes and raisins should never be given to ferrets — they are sugar-heavy and carry a documented kidney-injury risk.',
    detail: 'Grapes, raisins, currants, and sultanas can cause acute kidney injury in dogs, with no established safe amount and wide individual sensitivity, and the same caution is extended to ferrets. On top of that, grapes and raisins are sugar-dense — exactly the kind of food an obligate carnivore prone to insulinoma should never receive. Raisin-based "small animal treats" are a common, deceptive source.',
    risks: ['Documented kidney-injury risk (extrapolated from dogs)', 'High sugar — works against beta-cell health and insulinoma risk', 'Hidden in marketed raisin treats and trail-mix spills'],
    symptoms: ['Vomiting or diarrhea', 'Lethargy and loss of appetite', 'Reduced urination (a serious, later sign)'],
    whatToDo: 'Treat any amount as urgent. Call your veterinarian or ASPCA Animal Poison Control (888-426-4435) right away — early treatment greatly improves the outcome.',
    related: ['sugary-treats', 'banana', 'xylitol'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'caffeine', name: 'Caffeine', aliases: ['coffee', 'tea', 'energy drinks'], category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Caffeine — in coffee, tea, and energy drinks — is toxic to ferrets, the same stimulant family as chocolate.',
    detail: 'Caffeine is a methylxanthine, like the theobromine in chocolate, and ferrets are far more sensitive to it than people because of their small size. Coffee grounds and beans, tea, energy drinks, soda, and caffeine pills are all hazards, and even used grounds retain enough to cause signs. There is no appropriate amount of caffeine for a ferret.',
    risks: ['Cardiac arrhythmias', 'Hyperactivity, tremors, seizures', 'Beans, grounds, and pills are the most concentrated forms'],
    symptoms: ['Restlessness and hyperactivity', 'Rapid heart rate or panting', 'Vomiting', 'Tremors or seizures (severe)'],
    whatToDo: 'Call your veterinarian or ASPCA Animal Poison Control (888-426-4435) with the source and amount. Caffeine pills and espresso beans are the most urgent.',
    related: ['chocolate', 'alcohol', 'xylitol'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'alcohol', name: 'Alcohol', aliases: ['beer', 'wine', 'liquor'], category: 'Toxic Household', verdict: 'toxic',
    shortAnswer: 'No. Alcohol is toxic to ferrets in any form — they are tiny and intoxicate dangerously fast.',
    detail: 'Ethanol is toxic to ferrets at very small doses because of their body size, and it appears not only in drinks but in raw yeast dough (which ferments in the warm stomach) and fermenting fruit. A ferret can progress quickly to central-nervous-system and respiratory depression. Keep all alcohol, and rising bread dough, well out of reach.',
    risks: ['CNS depression — disorientation, collapse', 'Dangerously low body temperature and blood sugar', 'Respiratory depression at higher doses'],
    symptoms: ['Wobbliness, disorientation', 'Vomiting', 'Slow breathing', 'Collapse'],
    whatToDo: 'Call your veterinarian or an emergency clinic immediately, or ASPCA Animal Poison Control (888-426-4435). Raw bread dough is a particular hazard.',
    related: ['bread', 'caffeine', 'chocolate'],
    sources: [ASPCA, PPH, QC],
  },
  {
    slug: 'nuts', name: 'Nuts', aliases: ['peanuts', 'almonds', 'macadamia nuts', 'walnuts', 'peanut butter'], category: 'Nuts & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Nuts and nut butters are inappropriate and unsafe for ferrets — high in fat, plant matter, and choking/obstruction risk, and macadamias are outright toxic.',
    detail: 'Nuts are a plant food a ferret cannot digest, packed with the kind of fat and fiber an obligate-carnivore gut is not built for, and a real choking and intestinal-obstruction hazard for a small animal. Macadamia nuts are specifically toxic, and nut butters frequently contain xylitol, which is dangerous. Whole nuts and nut butters alike should be kept away from ferrets entirely.',
    risks: ['Choking and intestinal-obstruction hazard', 'Macadamia nuts are specifically toxic', 'Nut butters may contain xylitol', 'Indigestible plant fat and fiber'],
    symptoms: ['Gagging or choking', 'Vomiting, lethargy', 'Weakness or tremors (macadamia)', 'Signs of blockage: vomiting, no stool, distress'],
    whatToDo: 'If a ferret eats nuts or nut butter, call your veterinarian or ASPCA Animal Poison Control (888-426-4435), and note whether macadamias or xylitol-containing butter were involved.',
    related: ['vegetables', 'xylitol', 'sugary-treats'],
    sources: [ASPCA, PPH, QC],
  },

  // ---------------- CAUTION (inappropriate plant matter & sugar — strong caution for an obligate carnivore) ----------------
  {
    slug: 'banana', name: 'Banana', category: 'Fruits', verdict: 'caution',
    shortAnswer: 'Not recommended. Ferrets sometimes love banana, but it is sugary plant matter an obligate carnivore should not have.',
    detail: 'Banana is a classic example of a treat ferrets beg for but should not eat. It is high in natural sugar and made of plant fiber a ferret cannot digest, and routine sugary treats are associated with pancreatic beta-cell stress and elevated insulinoma risk. The fact that a ferret enjoys it is not evidence it is safe — palatability and appropriateness are different questions.',
    risks: ['High sugar — linked to insulinoma risk over time', 'Plant fiber a ferret cannot digest; can loosen stool', 'Reinforces a taste for inappropriate sweet foods'],
    safePrep: 'Best skipped entirely. If a ferret steals a lick, it is not an emergency, but do not offer fruit as a treat.',
    quantity: 'None as a routine treat — use plain meat or egg instead.',
    symptoms: ['Loose stool or diarrhea after sugary foods'],
    related: ['grapes', 'sugary-treats', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'vegetables', name: 'Vegetables', aliases: ['carrot', 'peas', 'broccoli', 'spinach'], category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Not recommended. Ferrets cannot digest vegetables — plant fiber offers them nothing and risks GI upset or blockage.',
    detail: 'Vegetables are built on plant cell walls and fiber that a ferret’s short gut cannot break down, so they provide no usable nutrition and pass through poorly. Fibrous or chunky vegetables (carrot, peas, broccoli, corn) are a genuine gastrointestinal-blockage risk in a small animal, and starchy vegetables add carbohydrate an obligate carnivore should not have. Vegetables are not a ferret food.',
    risks: ['Indigestible plant fiber — no nutritional value', 'Fibrous/chunky pieces risk GI blockage', 'Starchy vegetables add inappropriate carbohydrate'],
    safePrep: 'Best avoided. Do not use vegetables as treats or food toppers for ferrets.',
    quantity: 'None — choose a meat-based treat instead.',
    symptoms: ['Straining, no stool, vomiting, or lethargy (possible blockage)'],
    related: ['vegetables', 'grains', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'grains', name: 'Grains', aliases: ['rice', 'oats', 'corn', 'cereal'], category: 'Grains & Carbs', verdict: 'caution',
    shortAnswer: 'Not recommended. Grains are carbohydrate an obligate carnivore should not eat — they raise insulinoma concern and dilute protein.',
    detail: 'Rice, oats, corn, wheat, and cereal are starch-heavy plant foods with no place in a ferret diet. A ferret cannot use dietary carbohydrate well, and high-carbohydrate intake is associated with pancreatic beta-cell stress and insulinoma risk; grain fillers in cheap "ferret food" are exactly what to avoid. Grain offers a ferret calories without the protein and fat it actually needs.',
    risks: ['Carbohydrate load linked to insulinoma risk', 'Displaces the protein and fat a ferret needs', 'Common low-quality filler in cheap ferret foods'],
    safePrep: 'Avoid grains as treats, and choose a kibble whose first ingredients are named meats rather than grains.',
    quantity: 'None as a treat — see choosing a ferret kibble for the macronutrient targets.',
    related: ['bread', 'vegetables', 'sugary-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'bread', name: 'Bread', aliases: ['toast', 'crackers'], category: 'Grains & Carbs', verdict: 'caution',
    shortAnswer: 'Not recommended. Bread is grain-based carbohydrate a ferret cannot use — and raw bread dough is dangerous.',
    detail: 'Bread is starch and grain, providing a ferret empty carbohydrate it should not have and that adds to insulinoma concern. A small stolen crumb is not an emergency, but bread should never be offered as a treat. Raw bread dough is a separate, real hazard: it rises in the warm stomach and ferments into alcohol, causing both bloating and alcohol toxicity.',
    risks: ['Empty carbohydrate — inappropriate for an obligate carnivore', 'RAW dough is dangerous (expansion + alcohol)', 'No nutritional value for a ferret'],
    safePrep: 'Do not offer bread as a treat. Keep raw, rising dough completely out of reach.',
    quantity: 'None — offer a meat-based treat instead.',
    symptoms: ['Bloating, distress, or wobbliness after raw dough'],
    related: ['grains', 'alcohol', 'safe-meat-treats'],
    sources: [ASPCA, QC],
  },
  {
    slug: 'sugary-treats', name: 'Sugary Treats', aliases: ['candy', 'yogurt drops', 'honey'], category: 'Nuts & Sweets', verdict: 'caution',
    shortAnswer: 'Not recommended. Sugary treats — candy, yogurt drops, honey — are exactly the foods linked to insulinoma in ferrets.',
    detail: 'Many products marketed as "ferret treats" — yogurt drops, raisin treats, honey-coated bits — are sugar-heavy and inappropriate for an obligate carnivore. Chronic sugar exposure is implicated in pancreatic beta-cell stress and elevated insulinoma risk, one of the most common ferret cancers. If a treat is sweet, it is almost certainly the wrong treat: the one reliable rule is that a ferret treat should be meat.',
    risks: ['Sugar linked to insulinoma (a common ferret cancer)', 'Yogurt drops also carry lactose for a lactose-intolerant animal', 'Crowds out appropriate meat-based treats'],
    safePrep: 'Skip all sweet treats. Choose plain meat, egg, or single-ingredient freeze-dried meat instead.',
    quantity: 'None — a few small pieces of meat is the better daily treat.',
    related: ['xylitol', 'banana', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'dairy', name: 'Dairy', aliases: ['milk', 'cheese', 'yogurt', 'ice cream'], category: 'Dairy', verdict: 'caution',
    shortAnswer: 'Not recommended. Adult ferrets are largely lactose-intolerant, so milk, cheese, and ice cream commonly cause diarrhea.',
    detail: 'Adult ferrets produce little lactase, so dairy — milk, cheese, yogurt, ice cream — commonly causes gas and diarrhea, and sweetened dairy adds sugar the animal cannot use. Despite this, "yogurt drops" are widely sold as ferret treats; they combine lactose with sugar and are best avoided. A ferret has no dietary need for dairy of any kind.',
    risks: ['Lactose intolerance — gas and diarrhea', 'Sweetened dairy adds inappropriate sugar', 'Marketed yogurt drops are a common but poor choice'],
    safePrep: 'Avoid dairy. If you want a soft treat, use a little plain cooked egg or a meat paste instead.',
    quantity: 'None as a routine treat.',
    symptoms: ['Loose stool or diarrhea after dairy'],
    related: ['egg', 'sugary-treats', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'fish', name: 'Fish', aliases: ['tuna', 'salmon', 'sardines'], category: 'Fish & Seafood', verdict: 'caution',
    shortAnswer: 'Occasionally, plain and cooked — but fish is not ideal for ferrets and is best a rare extra, not a staple.',
    detail: 'Ferrets can physically digest plain cooked fish, and small amounts are not dangerous, but fish is not the protein a ferret evolved on. Many ferrets dislike it, fish-based diets are associated with stronger-smelling stool and litter habits, and oily or canned fish carries salt, oils, and additives. If offered at all, it should be a small, plain, cooked, boneless piece on rare occasions — poultry and other meats are better everyday choices.',
    benefits: ['Animal protein a ferret can digest', 'Some ferrets accept it as a novelty'],
    risks: ['Not the ideal protein source for ferrets', 'Canned/oily fish adds salt and additives', 'Bones are a choking/obstruction hazard', 'Can intensify stool odor'],
    safePrep: 'If offered, use a small piece of plain, cooked, boneless fish with no salt, oil, or seasoning. Skip canned fish in brine or oil.',
    quantity: 'A rare small piece at most — not a staple. Plain poultry is a better everyday treat.',
    related: ['chicken', 'egg', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },

  // ---------------- SAFE (plain animal protein) ----------------
  {
    slug: 'chicken', name: 'Chicken', aliases: ['poultry'], category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — plain, cooked or raw, and boneless. Chicken is an ideal ferret protein and a go-to treat.',
    detail: 'Plain chicken is close to the perfect ferret food: high-protein, high-fat, and essentially carbohydrate-free, exactly what an obligate carnivore needs. It can be served cooked (boneless, no seasoning) or, for owners who feed raw, as part of a raw diet. Never give cooked bones, which splinter, and skip all seasoning, onion, and garlic. Plain chicken is one of the best treats and training rewards you can offer.',
    benefits: ['High-protein, high-fat, near-zero carbohydrate', 'Highly palatable — excellent training reward', 'Easy to portion into small treat-sized pieces'],
    risks: ['Never cooked bones (they splinter)', 'No seasoning, onion, or garlic'],
    safePrep: 'Cook plain and boneless (boil or bake, no oil or salt) and cut into small pieces, or feed raw as part of a planned raw diet.',
    quantity: 'A few small pieces a day as a treat is fine; whole-prey/raw feeders use it as a base protein.',
    related: ['turkey', 'egg', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'turkey', name: 'Turkey', category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — plain, cooked or raw, and boneless. Turkey is an excellent high-protein ferret food.',
    detail: 'Plain turkey, like chicken, is well suited to a ferret: high in protein and fat, with no carbohydrate. Serve it cooked and boneless with no seasoning, or as part of a raw diet. Avoid processed turkey (deli slices, seasoned roasts) which carry salt, sugar, and onion/garlic flavorings, and never give cooked bones.',
    benefits: ['High-protein, high-fat, carbohydrate-free', 'Good variety alongside chicken', 'Well accepted by most ferrets'],
    risks: ['No deli/processed turkey (salt, sugar, onion/garlic)', 'Never cooked bones'],
    safePrep: 'Use plain cooked boneless turkey (no seasoning) or raw turkey as part of a planned diet, cut small.',
    quantity: 'Small pieces as a treat; a base protein for raw/whole-prey feeders.',
    related: ['chicken', 'lamb', 'egg'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'beef', name: 'Beef', category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — plain and unseasoned. Beef is a safe red-meat protein for ferrets, cooked or raw.',
    detail: 'Plain beef is a good ferret protein — high in protein and fat with no carbohydrate. It can be served cooked and unseasoned or fed raw as part of a balanced raw diet. Leaner cuts are fine; very fatty trimmings in excess can loosen stool. Avoid seasoned, breaded, or processed beef, and never use anything cooked in onion or garlic.',
    benefits: ['High-protein, high-fat red meat', 'Adds variety to the protein rotation', 'Cooked or raw both work'],
    risks: ['No seasoning, onion, or garlic', 'Very fatty trimmings in excess can loosen stool'],
    safePrep: 'Serve plain cooked beef (no seasoning) or raw beef as part of a planned diet, in small pieces.',
    quantity: 'Small pieces as a treat; a rotation protein for raw feeders.',
    related: ['lamb', 'chicken', 'organ-meat'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'lamb', name: 'Lamb', category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — plain and unseasoned. Lamb is a safe, palatable red-meat protein for ferrets.',
    detail: 'Plain lamb is a suitable ferret protein, rich in the fat and protein an obligate carnivore needs and free of carbohydrate. It is useful in a protein rotation, especially for ferrets that tolerate it well. Serve it cooked and unseasoned or raw as part of a planned diet, avoid bones in cooked form, and skip any seasoned or processed lamb.',
    benefits: ['High-protein, high-fat red meat', 'Good rotation protein', 'Often well accepted'],
    risks: ['No seasoning, onion, or garlic', 'Richer fat — introduce gradually'],
    safePrep: 'Serve plain cooked lamb (no seasoning) or raw lamb as part of a planned diet, cut small.',
    quantity: 'Small pieces as a treat; a rotation protein for raw feeders.',
    related: ['beef', 'turkey', 'organ-meat'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'egg', name: 'Egg', aliases: ['eggs', 'cooked egg', 'egg yolk'], category: 'Eggs & Organ', verdict: 'safe',
    shortAnswer: 'Yes — a small amount, ideally cooked. Egg is a safe, rich, well-loved ferret treat.',
    detail: 'Egg is a complete animal protein and a popular ferret treat. Cooked egg (scrambled plain or hard-boiled) is the safest form; many owners also offer a little raw yolk, which ferrets tolerate well. Egg is rich, so keep portions small and occasional. Serve it plain — no butter, salt, cheese, or onion — and treat it as a treat rather than a meal.',
    benefits: ['Complete, highly digestible animal protein', 'Very palatable — good for bonding and medication', 'Cooked or a little raw yolk both work'],
    risks: ['Rich — small amounts only', 'No butter, salt, cheese, or onion', 'Whole raw whites in excess are best avoided'],
    safePrep: 'Scramble or hard-boil plain (no oil, salt, or seasoning), or offer a small amount of raw yolk. Cool before serving.',
    quantity: 'A small amount a few times a week at most — egg is rich.',
    related: ['chicken', 'organ-meat', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'organ-meat', name: 'Organ Meat', aliases: ['liver', 'heart', 'kidney'], category: 'Eggs & Organ', verdict: 'safe',
    shortAnswer: 'Yes — in moderation. Organ meats like liver and heart are nutrient-dense, ferret-appropriate foods.',
    detail: 'Organ meats — liver, heart, kidney — are part of a natural whole-prey diet and provide concentrated nutrients, including taurine in heart and vitamin A in liver. They suit ferrets well as a component of raw/whole-prey feeding or as an occasional treat. Liver is rich in vitamin A, so it should be a modest fraction of the diet rather than fed in large amounts. Serve plain and unseasoned, cooked or raw within a planned diet.',
    benefits: ['Nutrient-dense; heart provides taurine', 'A natural part of whole-prey feeding', 'Highly palatable as a treat'],
    risks: ['Liver is high in vitamin A — keep it a modest fraction', 'Serve plain; no seasoning'],
    safePrep: 'Offer small amounts of plain liver, heart, or kidney (cooked or raw within a planned diet). Keep liver a small portion.',
    quantity: 'A small amount as a treat; a measured fraction within a raw diet.',
    related: ['egg', 'chicken', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'safe-meat-treats', name: 'Meat-Based Treats', aliases: ['freeze-dried meat', 'meat treats'], category: 'Eggs & Organ', verdict: 'safe',
    shortAnswer: 'Yes. Single-ingredient meat treats — freeze-dried chicken, liver, or whole-prey treats — are the ideal ferret treat.',
    detail: 'The cleanest ferret treats are single-ingredient animal proteins: freeze-dried chicken, turkey, liver, or whole-prey treats whose only ingredient is meat or organ. They honour the one reliable rule — a ferret treat should be meat — with no sugar, grain, or fruit fillers. Read the panel, because "freeze-dried" on the front does not guarantee a clean ingredient list. These are excellent for bonding and litter or recall training.',
    benefits: ['Single-ingredient animal protein — no sugar or grain', 'Ideal training and bonding reward', 'Long shelf life and easy to portion'],
    risks: ['Check the panel — some "meat" treats hide sugar or grain', 'Still calorie-dense — keep treats occasional'],
    safePrep: 'Choose treats whose only ingredient is a named meat or organ. Offer a few small pieces.',
    quantity: 'A few small pieces a day; treats sit on top of the base diet, not in place of it.',
    related: ['chicken', 'egg', 'organ-meat'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'ferret-kibble', name: 'Ferret Kibble', aliases: ['ferret food', 'kitten food'], category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — a high-quality, meat-first ferret (or high-protein kitten) kibble is a safe, complete base diet.',
    detail: 'A complete diet for a kibble-fed ferret is a high-quality ferret food — or, where good ferret food is unavailable, a high-protein, low-carbohydrate kitten food — whose first ingredients are named meats. The target is roughly 32–40% protein and 18–22% fat on a dry-matter basis with minimal carbohydrate. Avoid grain-heavy or fruit-and-vegetable "ferret" blends; the named-meat-first rule and a low carbohydrate-by-difference are what matter.',
    benefits: ['Complete, balanced base diet when chosen well', 'Convenient and shelf-stable', 'Meat-first formulas meet protein/fat targets'],
    risks: ['Many cheap "ferret foods" are grain/fruit-heavy — read the panel', 'Aim for ~32–40% protein, high fat, minimal carbohydrate'],
    safePrep: 'Choose a ferret or high-protein kitten kibble with named meats first and low carbohydrate. See choosing a ferret kibble for the full method.',
    quantity: 'Free-fed or measured as the base diet, per the food’s guidance.',
    related: ['safe-meat-treats', 'chicken', 'fish'],
    sources: [QC, VCEAP],
  },
  {
    slug: 'water', name: 'Water', category: 'Meat & Poultry', verdict: 'safe',
    shortAnswer: 'Yes — fresh, clean water should always be available. Hydration is essential for ferrets.',
    detail: 'Fresh, clean water is the one thing a ferret should always have free access to, whether from a heavy tip-proof bowl or a bottle (many ferrets drink more from a bowl). A kibble-heavy diet is dry, so water intake matters, and dehydration can develop quickly, especially in warm weather, since ferrets do not tolerate heat well. Change the water daily and clean the bowl or bottle regularly.',
    benefits: ['Essential for hydration and kidney function', 'Especially important on a dry kibble diet', 'Supports heat tolerance in a heat-sensitive species'],
    safePrep: 'Provide fresh water in a heavy bowl and/or bottle; change daily and clean the vessel often.',
    quantity: 'Always available, free choice.',
    related: ['ferret-kibble', 'chicken', 'safe-meat-treats'],
    sources: [QC, VCEAP],
  },
]

export const FERRET_FOOD_CATEGORIES: FoodCategory[] = [
  'Meat & Poultry', 'Eggs & Organ', 'Fish & Seafood', 'Dairy', 'Fruits', 'Vegetables', 'Grains & Carbs', 'Nuts & Sweets', 'Toxic Household',
]

export function getFerretFood(slug: string): FoodEntry | undefined {
  return FERRET_FOODS.find((f) => f.slug === slug)
}

/** Related foods for internal linking: declared `related` slugs first, then same-category fill, max 4. */
export function getRelatedFoods(entry: FoodEntry): FoodEntry[] {
  const out: FoodEntry[] = []
  for (const slug of entry.related ?? []) {
    const f = getFerretFood(slug)
    if (f && f.slug !== entry.slug && !out.includes(f)) out.push(f)
  }
  if (out.length < 4) {
    for (const f of FERRET_FOODS) {
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
    { question: `Can ferrets eat ${name}?`, answer: `${entry.shortAnswer} ${entry.detail}` },
  ]
  if (entry.verdict === 'toxic') {
    faqs.push({
      question: `What happens if a ferret eats ${name}?`,
      answer: `${(entry.symptoms ?? []).join('; ') || 'Signs vary by amount and the individual ferret.'}. ${entry.whatToDo ?? 'Contact your veterinarian or ASPCA Animal Poison Control (888-426-4435) right away.'}`,
    })
    faqs.push({
      question: `How much ${name} is dangerous for a ferret?`,
      answer: `Ferrets are very small, so even a little can matter and there is no established safe amount — treat any ingestion as potentially serious and let a professional assess it. Call your veterinarian or ASPCA Animal Poison Control at 888-426-4435 with your ferret’s weight and the amount eaten.`,
    })
  } else if (entry.verdict === 'caution') {
    faqs.push({
      question: `Why shouldn’t ferrets eat ${name}?`,
      answer: `${(entry.risks ?? []).join('; ') || 'It is not an appropriate food for an obligate carnivore.'}. Ferrets are strict carnivores: choose plain meat, egg, or a single-ingredient meat treat instead.`,
    })
  } else {
    if (entry.quantity || entry.safePrep) {
      faqs.push({
        question: `How much ${name} can a ferret have?`,
        answer: `${entry.quantity ?? 'Offer modest amounts as part of an appropriate carnivore diet.'} ${entry.safePrep ?? ''}`.trim(),
      })
    }
    if (entry.risks?.length) {
      faqs.push({
        question: `Is ${name} safe for ferrets?`,
        answer: `Yes, when served correctly: ${entry.risks.join('; ')}. Served plain and appropriately, it suits an obligate-carnivore diet.`,
      })
    }
  }
  return faqs
}

export const VERDICT_META: Record<Verdict, { label: string; tone: string; color: string }> = {
  safe: { label: 'Yes — Safe for ferrets', tone: 'good', color: '#15803d' },
  caution: { label: 'Not recommended — Inappropriate for ferrets', tone: 'warn', color: '#b45309' },
  toxic: { label: 'No — Toxic to ferrets', tone: 'danger', color: '#b91c1c' },
}
