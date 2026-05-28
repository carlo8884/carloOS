/**
 * Dog.com — Nutrition-topic data file.
 *
 * Programmatic SEO source-of-truth for /nutrition/[slug] template.
 * Each entry MUST be sourced from real, citable references — typically:
 *   - ASPCA Animal Poison Control Center (APCC)
 *   - American Animal Hospital Association (AAHA) guidelines
 *   - American College of Veterinary Nutrition (ACVN) consensus
 *   - World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee
 *   - Pet Poison Helpline clinical references
 *   - Peer-reviewed veterinary literature (JAVMA, JVIM)
 *
 * IMPORTANT — sourcing rules (mirrors src/data/diseases.ts contract):
 *   - Never fabricate LD50 / toxicity thresholds. If a precise mg/kg figure
 *     is published by APCC or Pet Poison Helpline, cite it; otherwise leave
 *     dosingThresholds undefined and the template will omit the section.
 *   - Symptoms lists are clinical signs documented by APCC / Merck Vet Manual,
 *     not invented.
 *   - "Safe alternatives" are general veterinary-nutrition consensus items
 *     (carrots, blueberries, plain cooked chicken/turkey, etc.) — they are
 *     suggestions, not prescriptions.
 *   - If a topic shares a slug with an existing hand-written static folder
 *     under /app/nutrition/, the dynamic template excludes it via
 *     EXISTING_STATIC_NUTRITION_SLUGS — defense in depth.
 */

export type NutritionCategory =
  | 'Toxic Food'
  | 'Safe Food'
  | 'Special Diet'
  | 'Allergy'
  | 'Supplement'

export type NutritionUrgency =
  | 'ER NOW'
  | 'Same-day vet'
  | 'Monitor at home'
  | 'Not urgent'

export type NutritionAnswer =
  | 'No — toxic'
  | 'Yes'
  | 'Yes in moderation'
  | 'Not recommended'
  | 'Depends'

export interface NutritionTopic {
  slug: string
  name: string
  answer: NutritionAnswer
  category: NutritionCategory
  urgency: NutritionUrgency
  /** 60-100 word summary that opens the page. */
  keySummary: string
  /** Why it does / doesn't work, biochemically or nutritionally. */
  mechanism: string
  /** When applicable — toxic-food thresholds or feeding-amount caps. */
  dosingThresholds?: string
  /** Clinical signs of toxicity / intolerance. Used for toxic foods. */
  symptoms?: string[]
  /** Things owners can safely substitute (3–6 items). */
  safeAlternatives?: string[]
  /** Other /nutrition or /health pages to cross-link. */
  relatedTopics?: string[]
  /** Real citations only — APCC, AAHA, WSAVA, ACVN, peer-reviewed. */
  citations: string[]
}

/**
 * Slugs of /nutrition pages with existing static folders.
 * The dynamic [slug] template excludes these from generateStaticParams.
 * Source: ls apps/dog-com/src/app/nutrition/ at sprint start (2026-05-29).
 */
export const EXISTING_STATIC_NUTRITION_SLUGS: ReadonlySet<string> = new Set([
  'dog-supplements',
  'dog-treats-guide',
  'elimination-diet',
  'feeding-frequency',
  'grain-free-dcm-risk',
  'how-much-to-feed',
  'prescription-diets',
  'puppy-nutrition',
  'raw-diet-risks',
  'reading-food-labels',
  'safe-human-foods',
  'senior-dog-nutrition',
  'toxic-foods',
  'weight-management',
  'wsava-explained',
])

export const NutritionTopics: NutritionTopic[] = [
  // ─────────────────────────────────────────────────────────────────
  // TOXIC FOODS (5)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'can-dogs-eat-chocolate',
    name: 'Can Dogs Eat Chocolate?',
    answer: 'No — toxic',
    category: 'Toxic Food',
    urgency: 'ER NOW',
    keySummary:
      'No. Chocolate contains theobromine and caffeine — methylxanthines that dogs metabolize far more slowly than people do. Dark and baking chocolate are the most dangerous; milk chocolate is moderately toxic; white chocolate has trivial theobromine but enough fat to trigger pancreatitis. Any suspected ingestion should be triaged through the ASPCA Animal Poison Control Center (888-426-4435) or an emergency veterinarian, because the toxic dose depends on the dog\'s weight and the chocolate type. Early decontamination is far easier than treating a seizing or arrhythmic patient.',
    mechanism:
      'Methylxanthines block adenosine receptors and inhibit phosphodiesterase, producing cardiac stimulation, vasoconstriction, central-nervous-system excitation, and diuresis. Dogs eliminate theobromine with a half-life of roughly 17.5 hours, so signs can persist for more than a day.',
    dosingThresholds:
      'Per the ASPCA APCC and Merck Veterinary Manual: mild signs typically appear at ~20 mg/kg theobromine; cardiotoxicity at ~40–50 mg/kg; seizures at ~60 mg/kg. As a rough guide that should be confirmed with APCC: baking chocolate contains ~390 mg theobromine per oz, dark chocolate ~150 mg/oz, milk chocolate ~58 mg/oz. Always confirm the dose with a veterinarian or poison control before deciding to monitor at home.',
    symptoms: [
      'Vomiting and diarrhea',
      'Restlessness, hyperactivity, panting',
      'Excessive thirst and urination',
      'Tachycardia, arrhythmias',
      'Muscle tremors',
      'Seizures',
      'Hyperthermia',
    ],
    safeAlternatives: [
      'Carob-based dog treats (theobromine-free)',
      'Plain blueberries',
      'Small slices of banana',
      'Commercial dog biscuits formulated to AAFCO standards',
    ],
    relatedTopics: ['/nutrition/toxic-foods', '/nutrition/can-dogs-eat-macadamia-nuts', '/nutrition/xylitol-poisoning-in-dogs'],
    citations: [
      'ASPCA Animal Poison Control Center — Chocolate Toxicity in Dogs (888-426-4435)',
      'Pet Poison Helpline — Chocolate clinical reference',
      'Merck Veterinary Manual — Methylxanthine Toxicosis',
      'Gwaltney-Brant S. Chocolate intoxication. Vet Med 2001',
    ],
  },
  {
    slug: 'can-dogs-eat-grapes-and-raisins',
    name: 'Can Dogs Eat Grapes or Raisins?',
    answer: 'No — toxic',
    category: 'Toxic Food',
    urgency: 'ER NOW',
    keySummary:
      'No. Grapes, raisins, sultanas, and currants can cause acute kidney injury in dogs. The mechanism was unclear for decades; recent ASPCA APCC and veterinary-toxicology work (Wegenast et al., 2021) identifies tartaric acid and potassium bitartrate as the most likely cause, which also explains why cream-of-tartar–containing baked goods are now considered a risk. Toxicity is idiosyncratic — some dogs eat grapes without harm, others develop AKI from a small amount — so any ingestion should be treated as a potential emergency and triaged with ASPCA APCC or a veterinarian.',
    mechanism:
      'Current best evidence (ASPCA APCC, 2021) attributes the toxicity to tartaric acid / potassium bitartrate, which appears to cause acute proximal renal tubular necrosis. Because individual susceptibility varies and the toxic dose has never been characterized, the conservative clinical approach is to decontaminate (induce emesis, activated charcoal) on any known ingestion and monitor renal values for 72 hours.',
    dosingThresholds:
      'No reliably safe dose has been established. Reported cases include AKI from as little as 0.7 oz/kg of grapes and 0.1 oz/kg of raisins, but other dogs tolerate larger amounts — APCC recommends treating any ingestion as potentially toxic rather than calculating an exposure threshold.',
    symptoms: [
      'Vomiting (often within 6–12 hours)',
      'Diarrhea',
      'Lethargy, weakness',
      'Anorexia',
      'Decreased or absent urination (oliguria/anuria)',
      'Abdominal pain',
      'Dehydration',
    ],
    safeAlternatives: [
      'Blueberries (small handful, washed)',
      'Watermelon (seedless, no rind)',
      'Apple slices (no seeds or core)',
      'Plain cucumber',
    ],
    relatedTopics: ['/nutrition/toxic-foods', '/health/acute-kidney-injury', '/nutrition/can-dogs-eat-blueberries'],
    citations: [
      'ASPCA Animal Poison Control Center — Grape/Raisin Toxicity (888-426-4435)',
      'Wegenast CA, Meadows ID, Anderson RE, et al. Acute kidney injury in dogs following ingestion of cream of tartar and tamarinds, and the connection to tartaric acid as the proposed toxic principle in grapes and raisins. JVECC 2022',
      'Pet Poison Helpline — Grapes and Raisins',
      'Eubig PA et al. Acute renal failure in dogs after the ingestion of grapes or raisins: a retrospective evaluation of 43 dogs. JVIM 2005',
    ],
  },
  {
    slug: 'can-dogs-eat-onions-and-garlic',
    name: 'Can Dogs Eat Onions or Garlic?',
    answer: 'No — toxic',
    category: 'Toxic Food',
    urgency: 'Same-day vet',
    keySummary:
      'No. All Allium species — onions, garlic, leeks, shallots, chives — contain organosulfur compounds (notably n-propyl disulfide) that damage canine red blood cells and cause oxidative hemolytic anemia. Garlic is roughly five times more potent gram-for-gram than onion. The effect is dose-dependent and cumulative, so even small amounts in table scraps, baby food, or repeatedly fed garlic "supplements" can be a problem. Onset of clinical signs is often delayed 1–5 days after ingestion, which is why a same-day veterinary consultation is warranted on any meaningful exposure.',
    mechanism:
      'Allium organosulfur compounds oxidize hemoglobin to methemoglobin and damage erythrocyte membranes, producing Heinz-body anemia, hemolysis, and methemoglobinemia. Cooked, dehydrated, and powdered forms remain toxic because the offending compounds survive processing.',
    dosingThresholds:
      'Veterinary toxicology references generally cite onion exposures above ~15–30 g/kg body weight (or garlic above ~5 g/kg) as the threshold for clinically significant hematologic changes, with repeated low-dose exposures also capable of causing anemia. The ASPCA recommends contacting APCC for any known ingestion to estimate exposure and decide whether to decontaminate or monitor a CBC.',
    symptoms: [
      'Vomiting, diarrhea, abdominal pain (early)',
      'Lethargy and exercise intolerance',
      'Pale or yellow-tinged gums (anemia, icterus)',
      'Brown or red-tinged urine (hemoglobinuria)',
      'Rapid breathing and elevated heart rate',
      'Weakness or collapse in severe cases',
    ],
    safeAlternatives: [
      'Plain cooked chicken or turkey (no seasoning)',
      'Plain cooked pumpkin or sweet potato',
      'Carrot sticks',
      'Commercial dog treats with an AAFCO statement',
    ],
    relatedTopics: ['/nutrition/toxic-foods', '/health/anemia-in-dogs', '/nutrition/can-dogs-eat-plain-chicken'],
    citations: [
      'ASPCA Animal Poison Control Center — Allium Toxicity (888-426-4435)',
      'Cope RB. Allium species poisoning in dogs and cats. Vet Med 2005',
      'Merck Veterinary Manual — Onion and Garlic Toxicity in Small Animals',
      'Pet Poison Helpline — Onion and Garlic',
    ],
  },
  {
    slug: 'xylitol-poisoning-in-dogs',
    name: 'Can Dogs Eat Xylitol?',
    answer: 'No — toxic',
    category: 'Toxic Food',
    urgency: 'ER NOW',
    keySummary:
      'No — xylitol is one of the most dangerous everyday toxins to dogs. The sugar alcohol is found in sugar-free gum, mints, "skinny" baked goods, peanut butter, chewable vitamins, some prescription tablets, and certain toothpastes. In dogs (but not people) xylitol triggers massive insulin release and, at higher doses, hepatic necrosis. Hypoglycemia can develop within 10–60 minutes. Any suspected xylitol ingestion is an immediate ER visit — do not wait for symptoms and do not induce vomiting at home in a possibly hypoglycemic dog.',
    mechanism:
      'Xylitol is a potent insulin secretagogue in canines: a single dose can produce a 6× greater insulin release than glucose, causing acute hypoglycemia. At higher exposures (≥ 0.5 g/kg per ASPCA APCC) the mechanism shifts toward acute hepatic necrosis, with elevated liver enzymes appearing 8–72 hours after ingestion.',
    dosingThresholds:
      'Per the ASPCA APCC and FDA Center for Veterinary Medicine: hypoglycemia is reported at doses as low as ~0.1 g/kg body weight; hepatotoxicity is reported at doses ≥ ~0.5 g/kg. A single piece of xylitol-sweetened gum (often 0.3–1 g xylitol per piece) can be hypoglycemic for a small dog. Always confirm the specific product\'s xylitol content with APCC or the manufacturer.',
    symptoms: [
      'Vomiting (often early)',
      'Weakness, ataxia, "drunken" gait',
      'Tremors or seizures (hypoglycemia)',
      'Collapse',
      'Icterus / jaundice (hepatic injury, delayed)',
      'Petechiae or unexplained bruising (coagulopathy, severe cases)',
    ],
    safeAlternatives: [
      'Xylitol-free peanut butter (read every label, every time)',
      'Plain pumpkin puree (no added sweeteners)',
      'Plain Greek yogurt in small amounts (if not lactose-intolerant)',
      'Commercial dog treats with an AAFCO statement',
    ],
    relatedTopics: ['/nutrition/can-dogs-eat-peanut-butter', '/nutrition/toxic-foods', '/health/dog-liver-disease'],
    citations: [
      'ASPCA Animal Poison Control Center — Xylitol Toxicity (888-426-4435)',
      'FDA Center for Veterinary Medicine — Paws Off Xylitol; It\'s Dangerous for Dogs (consumer advisory)',
      'Dunayer EK, Gwaltney-Brant SM. Acute hepatic failure and coagulopathy associated with xylitol ingestion in eight dogs. JAVMA 2006',
      'Pet Poison Helpline — Xylitol',
    ],
  },
  {
    slug: 'can-dogs-eat-macadamia-nuts',
    name: 'Can Dogs Eat Macadamia Nuts?',
    answer: 'No — toxic',
    category: 'Toxic Food',
    urgency: 'Same-day vet',
    keySummary:
      'No. Macadamia nuts produce a well-documented but not-yet-fully-explained neurological and musculoskeletal toxicity in dogs — typically weakness in the hindlimbs, vomiting, ataxia, tremors, and hyperthermia within 12 hours of ingestion. Cats and other species are unaffected. The good news is the syndrome is rarely fatal and most dogs recover fully within 24–48 hours with supportive care; the bad news is the cause is unknown, so there is no antidote, no characterized "safe" dose, and chocolate-covered macadamia nuts compound the risk with theobromine toxicity.',
    mechanism:
      'The active toxic principle has not been identified. Clinical signs are reproducible across breeds and ages; experimental dosing has demonstrated weakness and CNS depression but the biochemical pathway remains uncharacterized as of current Merck Veterinary Manual references.',
    dosingThresholds:
      'Experimentally, signs have been induced at ~2.4 g of macadamia nuts per kg body weight, with severity tracking dose. ASPCA APCC treats any ingestion of more than a trivial amount as worth a same-day veterinary consultation; ingestions over 1–2 g/kg or any chocolate-covered macadamia ingestion warrant prompt evaluation.',
    symptoms: [
      'Weakness, especially in the hind limbs',
      'Vomiting',
      'Ataxia and difficulty walking',
      'Tremors',
      'Hyperthermia (fever)',
      'Depression and lethargy',
    ],
    safeAlternatives: [
      'Plain unsalted peanut butter (xylitol-free)',
      'Small slices of apple (no seeds or core)',
      'Carrot sticks',
      'Commercial dog treats with an AAFCO statement',
    ],
    relatedTopics: ['/nutrition/toxic-foods', '/nutrition/can-dogs-eat-chocolate', '/nutrition/can-dogs-eat-peanut-butter'],
    citations: [
      'ASPCA Animal Poison Control Center — Macadamia Nut Toxicity (888-426-4435)',
      'Hansen SR, Buck WB, Meerdink G, Khan SA. Weakness, tremors, and depression associated with macadamia nuts in dogs. Vet Hum Toxicol 2000',
      'Merck Veterinary Manual — Macadamia Nuts',
      'Pet Poison Helpline — Macadamia Nuts',
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SAFE IN MODERATION (4)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'can-dogs-eat-peanut-butter',
    name: 'Can Dogs Eat Peanut Butter?',
    answer: 'Yes in moderation',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Yes — provided the label is xylitol-free. Plain peanut butter is a useful high-value training reward and a workable Kong filler for most healthy adult dogs. The two real concerns are (1) xylitol, which is now appearing in some "natural," "no sugar added," or low-calorie peanut butters and is acutely toxic to dogs, and (2) calorie density — peanut butter runs roughly 90–100 kcal per tablespoon, enough to push a small dog over WSAVA\'s 10 %-of-daily-calories treat ceiling in a single serving.',
    mechanism:
      'Peanuts themselves contain no canine-specific toxins. The protein and fat are well-digested by most dogs. Problems arise from added sweeteners (xylitol is the dangerous one), high sodium, or simple overfeeding pushing the dog into a positive energy balance and pancreatitis-risk territory.',
    dosingThresholds:
      'WSAVA Global Nutrition Committee guidance: treats should make up no more than 10 % of daily caloric intake. Practical guide: roughly ½ teaspoon for toy breeds, 1 teaspoon for small dogs, 1 tablespoon for medium dogs, 1–2 tablespoons for large dogs per day — always counted against the daily kcal budget, never on top of it. ALWAYS check the ingredient panel for xylitol or "birch sugar" before feeding.',
    safeAlternatives: [
      'Plain canned pumpkin (low calorie, fiber)',
      'Plain low-fat Greek yogurt (small amounts)',
      'Small pieces of cooked chicken breast',
      'Commercial training treats with an AAFCO statement',
    ],
    relatedTopics: ['/nutrition/xylitol-poisoning-in-dogs', '/nutrition/safe-human-foods', '/nutrition/dog-treats-guide'],
    citations: [
      'ASPCA Animal Poison Control Center — Xylitol Toxicity (888-426-4435)',
      'WSAVA Global Nutrition Committee — Healthy Treats handout (90/10 rule)',
      'FDA Center for Veterinary Medicine — Paws Off Xylitol consumer advisory',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats (2010, updated)',
    ],
  },
  {
    slug: 'can-dogs-eat-carrots',
    name: 'Can Dogs Eat Carrots?',
    answer: 'Yes',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Yes. Raw or cooked carrots are one of the safest, lowest-calorie human-food treats for dogs. They supply beta-carotene, fiber, and a satisfying crunch, and a frozen carrot is a useful chew for teething puppies. The only practical cautions are choking — large coin-sized chunks fed to enthusiastic gulpers can lodge in the airway — and the fact that carrots are still calories and still count toward the 10 % treat ceiling. There is no documented carrot toxicity in dogs.',
    mechanism:
      'Carrots are about 88 % water, 9 % carbohydrate (much of it fiber), and trivial fat and protein. Beta-carotene is converted to vitamin A in the canine liver. Because dogs digest cellulose poorly, cooked or grated carrots deliver more usable carotenoids than whole raw sticks.',
    dosingThresholds:
      'Treat ceiling: 10 % of daily kcal (WSAVA). Raw carrots run roughly 25 kcal per medium carrot (~60 g), so they fit easily — a Yorkie can have a few baby carrots a day, a Lab can have a whole medium carrot without disturbing its diet. Cut into appropriately sized pieces for the dog to chew rather than swallow whole.',
    safeAlternatives: [
      'Plain cucumber slices',
      'Green beans (plain, no salt or butter)',
      'Blueberries',
      'Plain cooked pumpkin',
    ],
    relatedTopics: ['/nutrition/safe-human-foods', '/nutrition/can-dogs-eat-blueberries', '/nutrition/dog-treats-guide'],
    citations: [
      'WSAVA Global Nutrition Committee — Healthy Treats handout',
      'ASPCA — People Foods to Avoid Feeding Your Pets (negative list — carrots not listed)',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
      'Merck Veterinary Manual — Nutrient Requirements of Dogs',
    ],
  },
  {
    slug: 'can-dogs-eat-blueberries',
    name: 'Can Dogs Eat Blueberries?',
    answer: 'Yes',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Yes. Blueberries are non-toxic to dogs and a sensible whole-food treat — low calorie, high in fiber and antioxidants, and small enough to use as a single-bite training reward. There are no published reports of blueberry toxicity in dogs. Wash them, feed them whole (frozen blueberries are a particularly good warm-weather treat), and keep total daily treats under WSAVA\'s 10 % caloric ceiling. Avoid sweetened or "muffin-mix" blueberry products, and never substitute grapes or raisins, which are unrelated and toxic.',
    mechanism:
      'Blueberries supply anthocyanins, vitamin C, vitamin K, manganese, and soluble fiber. They have minimal fat, low simple sugars, and no canine-specific toxins. Dogs lack the chronic disease burden in which the human "antioxidant" benefits are studied, so the practical case for feeding them is "low-calorie treat with no downside," not a therapeutic claim.',
    dosingThresholds:
      'Treat ceiling 10 % of daily kcal (WSAVA). Blueberries are ~0.6 kcal each — even a toy breed can have 5–10 a day without disturbing the diet, and a large dog can have a small handful. Introduce gradually to assess GI tolerance; soft stool from over-consumption resolves on cessation.',
    safeAlternatives: [
      'Strawberries (in small amounts, hulled)',
      'Raspberries (small amounts)',
      'Watermelon (seedless, no rind)',
      'Carrot pieces',
    ],
    relatedTopics: ['/nutrition/safe-human-foods', '/nutrition/can-dogs-eat-grapes-and-raisins', '/nutrition/can-dogs-eat-carrots'],
    citations: [
      'WSAVA Global Nutrition Committee — Healthy Treats handout',
      'ASPCA — People Foods to Avoid Feeding Your Pets (negative list — blueberries not listed)',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
      'Merck Veterinary Manual — Nutrient Requirements of Dogs',
    ],
  },
  {
    slug: 'can-dogs-eat-plain-chicken',
    name: 'Can Dogs Eat Plain Cooked Chicken?',
    answer: 'Yes',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Yes. Plain cooked, boneless, skinless chicken breast — no salt, no garlic, no onion, no oil — is a staple bland-diet protein recommended by veterinarians for short-term GI upset, an acceptable training treat for most dogs, and a safe everyday topper in small amounts. The clinical cautions are: no cooked bones (they splinter), no skin or fatty cuts on a pancreatitis-prone dog, no Allium-containing seasoning, and chicken alone is not a complete diet and should not replace an AAFCO-compliant food for more than a few days without veterinary supervision.',
    mechanism:
      'Cooked lean chicken is a highly digestible, low-fat animal-protein source with an amino-acid profile well-matched to canine maintenance requirements. The bland-diet rationale (chicken + plain white rice) is that low fat and low fiber rest the GI tract during a self-limiting upset; it is not a long-term feeding plan because it does not meet AAFCO complete-and-balanced standards.',
    dosingThresholds:
      'For a bland diet during GI upset: roughly ⅓ chicken to ⅔ plain white rice by volume, fed in 4–6 small meals per day for 2–3 days, then transitioned back to the regular diet. As a treat: count toward the 10 % daily kcal ceiling — ~165 kcal per 100 g of cooked boneless skinless breast. Never feed cooked bones of any kind.',
    safeAlternatives: [
      'Plain cooked turkey breast (no skin, no seasoning)',
      'Plain cooked white fish (cod, tilapia, no bones)',
      'Boiled lean ground beef (drained)',
      'Commercial therapeutic GI diets (e.g., when bland diet is needed >48 h)',
    ],
    relatedTopics: ['/nutrition/safe-human-foods', '/health/dog-diarrhea', '/health/dog-vomiting'],
    citations: [
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats (2010, updated)',
      'WSAVA Global Nutrition Committee — feeding-guidelines handouts',
      'Merck Veterinary Manual — Nutritional Management of Gastrointestinal Disease',
      'ASPCA — People Foods to Avoid Feeding Your Pets (negative list)',
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // COMMON QUESTIONS (3)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'can-dogs-eat-ice-cream',
    name: 'Can Dogs Eat Ice Cream or Dairy?',
    answer: 'Not recommended',
    category: 'Safe Food',
    urgency: 'Monitor at home',
    keySummary:
      'Not as a routine treat. Most adult dogs are at least partially lactose-intolerant — lactase activity drops sharply after weaning — so ice cream and milk reliably produce gas, soft stool, or diarrhea. Beyond lactose, commercial ice cream is calorie- and sugar-dense, frequently contains chocolate or xylitol (both toxic), and some "premium" or "no sugar added" varieties use sugar alcohols that can cause GI upset or, in the case of xylitol, life-threatening hypoglycemia. A small lick is rarely a real problem in a healthy dog; a daily scoop is.',
    mechanism:
      'Adult dogs produce only small amounts of intestinal lactase. Undigested lactose passes to the colon, is fermented by gut bacteria, and draws water osmotically — producing flatulence and diarrhea. Fat content of premium ice creams also raises pancreatitis risk in predisposed dogs.',
    dosingThresholds:
      'There is no published "safe" dose. If you feed any dairy, choose plain, unsweetened, full-fat Greek yogurt or a small piece of hard cheese (lower lactose); offer once and watch for 12 hours of GI upset before repeating. Skip ice cream entirely if the label includes chocolate, xylitol, macadamia, raisins, or coffee. For frozen treats, use a commercial dog-specific frozen product or a frozen banana puree.',
    symptoms: [
      'Gas / flatulence',
      'Soft stool or diarrhea',
      'Vomiting',
      'Abdominal discomfort',
      '(If xylitol-containing): weakness, tremors, seizures — ER NOW',
      '(If chocolate-containing): tremors, tachycardia — ER NOW',
    ],
    safeAlternatives: [
      'Frozen plain Greek yogurt (small amount, lactose-tolerant dogs only)',
      'Frozen banana puree in a Kong',
      'Frozen watermelon chunks (seedless)',
      'Commercial dog-formulated frozen treats',
    ],
    relatedTopics: ['/nutrition/xylitol-poisoning-in-dogs', '/nutrition/can-dogs-eat-chocolate', '/nutrition/dog-treats-guide'],
    citations: [
      'ASPCA — People Foods to Avoid Feeding Your Pets',
      'Case LP et al. Canine and Feline Nutrition (3rd ed.) — lactase activity in adult dogs',
      'WSAVA Global Nutrition Committee — Healthy Treats handout',
      'AAHA Nutritional Assessment Guidelines',
    ],
  },
  {
    slug: 'can-dogs-eat-eggs',
    name: 'Can Dogs Eat Eggs (Raw vs Cooked)?',
    answer: 'Yes in moderation',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Cooked eggs — yes, in moderation. Raw eggs — not recommended. A scrambled, hard-boiled, or poached egg with no salt, butter, or seasoning is a useful occasional protein boost and training reward for most healthy adult dogs. Raw eggs carry the same Salmonella and Campylobacter risk they do for people (FDA documents canine and human household-transmission cases), and raw egg whites contain avidin, which binds biotin and can cause deficiency with chronic feeding. Cook them.',
    mechanism:
      'Eggs are a near-perfect protein source with a high biological value and supply choline, riboflavin, and selenium. Cooking denatures avidin (removing the biotin-binding concern) and pasteurizes Salmonella / Campylobacter. The yolk is calorie- and fat-dense, which is why eggs are a treat rather than a free-fed staple.',
    dosingThresholds:
      'WSAVA 10 %-of-daily-kcal treat ceiling applies. One large cooked egg = ~70–80 kcal — enough to constitute the entire treat allowance for a small dog. Guideline: small dogs ≤ ¼ egg/day, medium dogs ≤ ½ egg/day, large dogs ≤ 1 egg/day as a treat — and skip eggs entirely on pancreatitis-prone dogs.',
    symptoms: [
      'Soft stool (over-feeding)',
      'GI upset from raw-egg Salmonella / Campylobacter (vomiting, diarrhea, fever)',
      'Biotin deficiency with chronic raw egg-white feeding (dermatologic signs)',
    ],
    safeAlternatives: [
      'Plain cooked chicken breast pieces',
      'Plain cooked turkey breast',
      'Commercial high-value training treats (AAFCO statement)',
      'Plain canned pumpkin (lower-calorie option)',
    ],
    relatedTopics: ['/nutrition/can-dogs-eat-plain-chicken', '/nutrition/safe-human-foods', '/nutrition/raw-diet-risks'],
    citations: [
      'FDA Center for Veterinary Medicine — Get the Facts! Raw Pet Food Diets can be Dangerous',
      'CDC — Salmonella outbreaks linked to raw pet food',
      'WSAVA Global Nutrition Committee — Raw-food guidance handout',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
    ],
  },
  {
    slug: 'can-dogs-eat-bread',
    name: 'Can Dogs Eat Bread?',
    answer: 'Yes in moderation',
    category: 'Safe Food',
    urgency: 'Not urgent',
    keySummary:
      'Plain, fully baked bread — yes, in small amounts. Raw bread dough — no, this is a true emergency. Plain white or whole-wheat bread is non-toxic to dogs but is essentially empty calories, so it should be an occasional treat at most. The dangerous form is raw yeast dough: in the warmth of the stomach the yeast continues to ferment, producing ethanol (alcohol toxicosis) and CO₂ (gastric dilatation that can progress to bloat). Other red flags on a bread label are raisins, garlic, onion, macadamia nuts, and xylitol — all toxic to dogs.',
    mechanism:
      'Plain baked bread provides only carbohydrate calories with no canine-specific toxin. Raw yeast dough is the problem: gastric warmth accelerates fermentation, producing absorbable ethanol (causing CNS depression, hypoglycemia, metabolic acidosis) plus expanding gas that can mechanically distend the stomach and predispose to gastric dilatation-volvulus in at-risk breeds.',
    dosingThresholds:
      'Treat ceiling 10 % of daily kcal. A slice of white bread is roughly 70–80 kcal — enough to be most of a small dog\'s daily treat allowance. For raw dough ingestion, there is no safe dose: any amount of raw yeast dough warrants immediate ER evaluation per the ASPCA APCC.',
    symptoms: [
      '(Plain bread overfeeding): weight gain, soft stool',
      '(Raw dough): distended abdomen — ER NOW',
      '(Raw dough): unproductive retching — ER NOW',
      '(Raw dough): ataxia, disorientation, vomiting (ethanol toxicosis) — ER NOW',
      '(Raisin bread): see /nutrition/can-dogs-eat-grapes-and-raisins',
    ],
    safeAlternatives: [
      'Plain cooked rice in small amounts',
      'Plain cooked sweet potato',
      'Carrot pieces',
      'Commercial dog treats with an AAFCO statement',
    ],
    relatedTopics: ['/nutrition/can-dogs-eat-grapes-and-raisins', '/health/dog-bloat-gvd', '/nutrition/toxic-foods'],
    citations: [
      'ASPCA Animal Poison Control Center — Bread Dough Toxicity (888-426-4435)',
      'Means C. Bread dough toxicosis in dogs. Vet Med 2003',
      'Merck Veterinary Manual — Ethanol Toxicosis',
      'Pet Poison Helpline — Bread Dough',
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SPECIAL DIETS (3)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'senior-dog-nutrition-guide',
    name: 'How Should I Feed a Senior Dog?',
    answer: 'Depends',
    category: 'Special Diet',
    urgency: 'Not urgent',
    keySummary:
      'There is no single "senior diet." A healthy 10-year-old Labrador with no disease, a 14-year-old Chihuahua with early kidney disease, and an 8-year-old Great Dane in geriatric cardiac care all have different nutritional needs. AAHA Senior Care guidelines recommend: (1) a baseline nutritional assessment at every senior visit, (2) adjusting calories to maintain a body condition score of 4–5/9 — most healthy seniors need fewer calories, but cachectic seniors often need more — and (3) protein restriction is only indicated when specifically prescribed for documented renal or hepatic disease, not as a default for age alone.',
    mechanism:
      'Aging dogs experience reduced lean body mass (sarcopenia), slower basal metabolic rate, declining renal and hepatic reserve, and increased prevalence of orthopedic, cardiac, and endocrine disease. The right diet supports lean mass (adequate high-quality protein), maintains ideal body condition (calorie-adjusted), and addresses any disease-specific requirements (sodium, phosphorus, omega-3s, fiber) on a per-dog basis.',
    safeAlternatives: [
      'Commercial senior or adult maintenance diets meeting AAFCO with WSAVA-aligned manufacturer practices',
      'Veterinary therapeutic diets when disease-specific (e.g., renal, cardiac, hepatic)',
      'Body-condition-score guided portion adjustment instead of switching brands',
      'Omega-3 (EPA/DHA) supplementation when indicated for OA per ACVIM',
    ],
    relatedTopics: ['/nutrition/weight-management', '/health/senior-dog-care', '/nutrition/prescription-diets'],
    citations: [
      'AAHA Senior Care Guidelines for Dogs and Cats (2023)',
      'WSAVA Global Nutrition Committee — Selecting Pet Food guidance',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
      'Laflamme DP. Pet food safety: dietary protein and aging. Top Companion Anim Med 2008',
    ],
  },
  {
    slug: 'puppy-weaning-nutrition',
    name: 'How Do I Feed a Puppy Through Weaning?',
    answer: 'Depends',
    category: 'Special Diet',
    urgency: 'Not urgent',
    keySummary:
      'Weaning is a gradual transition, not a single event. AAHA Life Stage and AAFCO growth guidance broadly support starting supplemental gruel at 3–4 weeks of age, full transition to a complete-and-balanced puppy diet by 7–8 weeks, and continuing growth-formulated food through the appropriate age for the breed size. Large- and giant-breed puppies require a specifically formulated large-breed growth diet to keep calcium and energy density in the narrow range that minimizes developmental orthopedic disease — feeding them a standard growth diet is a documented risk factor for hip dysplasia and osteochondrosis.',
    mechanism:
      'Puppies have ~2× the maintenance energy requirement of an adult on a per-kg basis and need a complete diet with controlled calcium (especially in large breeds — excessive calcium accelerates skeletal growth disproportionate to maturation). Bitch\'s milk supplies everything for the first 3–4 weeks; after that, the GI tract is mature enough to handle solids and the pup\'s nutritional demands outpace what milk can provide.',
    dosingThresholds:
      'AAFCO growth statements require diets to meet "growth" or "all life stages." Large-breed growth diets additionally cap calcium at ≤ 1.8 % on a dry-matter basis. Free-choice feeding is appropriate for toy/small-breed puppies but should be replaced with measured meals 3–4 times daily for large/giant breeds to limit overconsumption.',
    safeAlternatives: [
      'Commercial puppy diets with an AAFCO growth statement (size-appropriate)',
      'Large-breed-specific puppy formulas for dogs expected to exceed 70 lb adult weight',
      'Veterinary milk replacer (e.g., bitch\'s-milk substitute) for orphan or supplemented neonates',
      'WSAVA-aligned manufacturers (employ a board-certified veterinary nutritionist, run AAFCO feeding trials)',
    ],
    relatedTopics: ['/nutrition/puppy-nutrition', '/health/hip-dysplasia', '/nutrition/wsava-explained'],
    citations: [
      'AAHA Canine Life Stage Guidelines (2019)',
      'AAFCO Official Publication — Dog Food Nutrient Profiles (growth and reproduction)',
      'WSAVA Global Nutrition Committee — Selecting Pet Food guidance',
      'Hawthorne AJ et al. Growth rates and body composition in puppies. JN 2004',
    ],
  },
  {
    slug: 'choosing-a-prescription-diet',
    name: 'How Do I Choose a Prescription Diet?',
    answer: 'Depends',
    category: 'Special Diet',
    urgency: 'Not urgent',
    keySummary:
      'A "prescription" or veterinary therapeutic diet is a food formulated to support medical management of a specific condition — typically kidney disease, urinary stones, hepatic disease, GI disease, food allergy, or diabetes. Choosing one is a clinical decision, not a consumer one. The right diet depends on which disease is being managed, which formulation has the strongest published evidence for that disease, and what your dog will actually eat consistently. Use the WSAVA Global Nutrition Committee\'s manufacturer-vetting questions to evaluate the brand, and accept that the prescription itself should come from the veterinarian who knows the dog\'s diagnosis.',
    mechanism:
      'Therapeutic diets manipulate one or more nutrient parameters — protein quantity/quality, phosphorus, sodium, fiber type/amount, fatty acid profile, urinary mineral precursors, or use of hydrolyzed/novel proteins — at levels that would be inappropriate for healthy dogs. That is why they are dispensed under a veterinary-client-patient relationship rather than sold over the counter.',
    safeAlternatives: [
      'Brand from a manufacturer that meets WSAVA Global Nutrition Committee criteria (employs a board-certified veterinary nutritionist, conducts AAFCO feeding trials, owns its manufacturing facilities)',
      'Diet specifically formulated and published for the diagnosed disease (not a generic "kidney support" supplement)',
      'A formulation the dog will eat reliably (palatability matters — non-compliance is therapy failure)',
      'Reassessment with the veterinarian every 3–6 months to confirm the diet is still appropriate',
    ],
    relatedTopics: ['/nutrition/prescription-diets', '/nutrition/wsava-explained', '/health/chronic-kidney-disease'],
    citations: [
      'WSAVA Global Nutrition Committee — Recommendations on Selecting Pet Foods',
      'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
      'ACVIM Consensus Statement on Chronic Kidney Disease (Polzin DJ et al., updated)',
      'Freeman LM et al. WSAVA nutritional assessment guidelines. JSAP 2011',
    ],
  },
]

export function getNutritionTopicBySlug(slug: string): NutritionTopic | undefined {
  return NutritionTopics.find((t) => t.slug === slug)
}

/**
 * Slugs that will be rendered by the dynamic /nutrition/[slug] template.
 * Excludes any entry whose slug already exists as a static folder.
 */
export function getProgrammaticNutritionTopics(): NutritionTopic[] {
  return NutritionTopics.filter((t) => !EXISTING_STATIC_NUTRITION_SLUGS.has(t.slug))
}
