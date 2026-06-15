/**
 * Programmatic SEO source-of-truth for /nutrition/can-horses-eat/[food].
 *
 * One data model -> one template -> a page per food, each a substantive,
 * extractable, citation-grade answer to "can horses eat X?" — one of the
 * highest-volume equine query families. NOT thin programmatic content: every
 * entry carries a verdict, the reasoning, serving/quantity guidance or risk +
 * symptoms, and what-to-do, grounded in established equine toxicology and
 * feeding science.
 *
 * EQUINE TOXICOLOGY IS DISTINCT from dogs and cats. Horses are large,
 * non-ruminant herbivores (hindgut fermenters) that CANNOT VOMIT. The dominant
 * risks here are colic, laminitis, and choke — not the small-animal poisoning
 * picture. Forage (hay/pasture) is the dietary staple; everything below is a
 * treat or hazard layered on top of that base.
 *
 * TRUST (QC §1): verdicts here are health-critical. Every verdict reflects
 * mainstream equine veterinary references (ASPCA Animal Poison Control, Merck
 * Veterinary Manual, the Equine Endocrinology Group, and the equine
 * clinical-nutrition literature). No fabricated thresholds — where a precise
 * cutoff is not established, qualitative language is used. Every page defers to
 * a veterinarian and, for suspected poisoning, the ASPCA hotline (888-426-4435).
 * Do NOT add a food without a known, verifiable equine-safety profile.
 */

export type Verdict = 'safe' | 'caution' | 'toxic'

export type FoodCategory =
  | 'Fruits'
  | 'Vegetables'
  | 'Forage & Grains'
  | 'Treats & Sweets'
  | 'Animal Products'
  | 'Hazards & Toxins'

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
  /** Caution/toxic foods: the specific risks (framed around colic/laminitis/choke). */
  risks?: string[]
  /** Safe/caution foods: how to serve it safely (cutting up to prevent choke). */
  safePrep?: string
  /** Safe/caution foods: rough qualitative portion guidance. */
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
const MERCK = 'Merck Veterinary Manual'
const EEG = 'Equine Endocrinology Group laminitis/EMS guidance'
const AAEP = 'American Association of Equine Practitioners owner resources'

export const HORSE_FOODS: FoodEntry[] = [
  // ---------------- TOXIC / NEVER ----------------
  {
    slug: 'chocolate', name: 'Chocolate', aliases: ['cocoa', 'caffeine'], category: 'Treats & Sweets', verdict: 'toxic',
    shortAnswer: 'No. Chocolate is toxic to horses — it contains theobromine and caffeine, which horses cannot clear safely, and it is also a banned competition substance.',
    detail: 'Chocolate contains the methylxanthines theobromine and caffeine, which are toxic to horses and can cause colic, excitability, an irregular heartbeat, tremors, and seizures at higher doses. There is the added problem that theobromine and caffeine are prohibited substances under competition rules and will trigger a positive drug test. Because horses cannot vomit, anything toxic that is swallowed stays in the system.',
    risks: ['Theobromine and caffeine poisoning — colic, arrhythmia, tremors, seizures', 'Prohibited (doping) substance in competition', 'Horses cannot vomit, so there is no way to bring it back up'],
    symptoms: ['Restlessness, sweating, muscle tremors', 'Rapid or irregular heartbeat', 'Colic signs (pawing, rolling, looking at the flank)', 'Seizures at high doses'],
    whatToDo: 'Call your veterinarian immediately, and for a suspected poisoning the ASPCA Animal Poison Control Center at 888-426-4435 (24/7, fee applies). Note the amount and type of chocolate. Do not wait for symptoms — horses cannot vomit, so prompt veterinary care matters.',
    related: ['lawn-clippings', 'avocado', 'sugar-cubes'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'avocado', name: 'Avocado', category: 'Fruits', verdict: 'toxic',
    shortAnswer: 'No. Avocado is toxic to horses — the persin in the fruit, skin, leaves, and pit can cause heart and tissue damage, plus the pit is a serious choke hazard.',
    detail: 'Avocado contains persin, which is toxic to horses; the leaves, bark, skin, fruit, and pit have all been implicated. Reported effects include swelling of the head and neck, colic, fluid around the heart, and respiratory distress. On top of the toxin, the large pit is a choke and obstruction hazard. There is no safe serving of avocado for a horse.',
    risks: ['Persin toxicity — swelling of head/neck, colic, heart and respiratory effects', 'Large pit is a choke and obstruction hazard', 'All parts (leaves, skin, fruit, pit) are implicated'],
    symptoms: ['Swelling around the head, neck, and muzzle', 'Colic signs', 'Difficulty breathing', 'Reluctance to eat or drink'],
    whatToDo: 'Call your veterinarian immediately, and for a suspected poisoning the ASPCA Animal Poison Control Center at 888-426-4435. Keep horses away from avocado trees and discarded avocado entirely.',
    related: ['chocolate', 'tomato', 'potato'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'onions', name: 'Onions', aliases: ['garlic', 'leeks', 'chives'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Onions — and the whole allium family (garlic, leeks, chives) — are toxic to horses and damage red blood cells, causing anemia.',
    detail: 'Onions, garlic, leeks, and chives contain N-propyl disulfide and related compounds that damage equine red blood cells and cause Heinz-body hemolytic anemia. All forms count — raw, cooked, and dried — and the effect is cumulative, so repeated small amounts add up. While tiny amounts of garlic are sometimes marketed as a fly aid, large or sustained intake is a documented cause of anemia in horses.',
    risks: ['Heinz-body hemolytic anemia (red-blood-cell destruction)', 'Cumulative — repeated small amounts add up', 'Wild onion/garlic in pasture is a hazard too'],
    symptoms: ['Lethargy and weakness', 'Pale or yellow-tinged gums', 'Rapid breathing or heart rate', 'Dark, red, or brown urine'],
    whatToDo: 'Call your veterinarian, who may check a blood count, especially after large or repeated intake. For a suspected poisoning call the ASPCA Animal Poison Control Center at 888-426-4435. Signs of anemia can take days to appear.',
    related: ['lawn-clippings', 'cabbage', 'potato'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'tomato', name: 'Tomato', aliases: ['tomato plant', 'tomato leaves'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Tomatoes and the tomato plant are not safe for horses — they are nightshades, and the green parts contain solanine and atropine-like alkaloids.',
    detail: 'The tomato is a member of the nightshade (Solanaceae) family. The plant — leaves, stems, and unripe green fruit — contains solanine and tropane alkaloids (atropine-like compounds) that can disrupt the gut and nervous system in horses, causing colic, a slowed or erratic heartbeat, and other signs. Because horses encounter the plant in gardens and the safety margin is poor, tomatoes are best treated as off the menu rather than offered as a treat.',
    risks: ['Nightshade alkaloids (solanine, atropine-like compounds)', 'Colic and altered gut motility', 'Whole plant — leaves and green fruit — is the main hazard'],
    symptoms: ['Colic signs and reduced gut sounds', 'Altered (often slowed) heart rate', 'Drooling, dilated pupils, drowsiness or agitation'],
    whatToDo: 'Keep horses out of vegetable gardens and away from tomato plants. If a horse eats tomato plant, call your veterinarian, and for a suspected poisoning the ASPCA Animal Poison Control Center at 888-426-4435.',
    related: ['potato', 'avocado', 'onions'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'potato', name: 'Potato', aliases: ['raw potato', 'green potato'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Potatoes are not a safe horse food — they are nightshades, the green and sprouted parts contain solanine, and whole potatoes are a choke hazard.',
    detail: 'Potatoes belong to the nightshade family. Green, sprouted, or raw potatoes contain solanine, which can cause colic and neurological signs in horses, and even ordinary raw potatoes are starchy and hard to digest. A whole or large piece of potato is also a classic choke risk because horses tend to bolt unfamiliar treats. There is no good reason to feed potato to a horse.',
    risks: ['Solanine in green/sprouted/raw potato — colic, neurological signs', 'Whole pieces are a choke hazard', 'High starch load is hard on the equine hindgut'],
    symptoms: ['Colic signs', 'Drooling, weakness, or trembling', 'Signs of choke: coughing, drooling, food/saliva at the nostrils, distress'],
    whatToDo: 'Do not feed potato. If a horse chokes or shows colic or neurological signs after eating potato, treat it as an emergency and call your veterinarian; for a suspected poisoning call the ASPCA at 888-426-4435.',
    related: ['tomato', 'bread', 'apples'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'rhubarb', name: 'Rhubarb', aliases: ['rhubarb leaves'], category: 'Vegetables', verdict: 'toxic',
    shortAnswer: 'No. Rhubarb leaves are toxic to horses — they are high in soluble oxalates that can damage the kidneys.',
    detail: 'Rhubarb leaves contain high levels of soluble oxalates (and other compounds) that can bind calcium and damage the kidneys in horses. Garden rhubarb is a recognized toxic plant for livestock, and the leafy tops are the most dangerous part. Keep rhubarb and its trimmings well away from horses and never throw garden waste into a paddock.',
    risks: ['Soluble oxalates — kidney damage, low blood calcium', 'Garden trimmings tossed into paddocks are a common route', 'Leaves are the most toxic part'],
    symptoms: ['Drooling and reluctance to eat', 'Colic signs', 'Weakness, staggering, tremors', 'Reduced or abnormal urination'],
    whatToDo: 'Keep rhubarb out of reach and never dump garden clippings where horses graze. If ingestion is suspected, call your veterinarian, and the ASPCA Animal Poison Control Center at 888-426-4435.',
    related: ['lawn-clippings', 'onions', 'tomato'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'lawn-clippings', name: 'Lawn & Grass Clippings', aliases: ['grass clippings', 'mower clippings'], category: 'Hazards & Toxins', verdict: 'toxic',
    shortAnswer: 'No. Never feed lawn or grass clippings to horses — they ferment fast and clump, causing colic, laminitis, and choke.',
    detail: 'Fresh lawn clippings are one of the most dangerous things to give a horse, even though they are "just grass." Because they are cut, wilting, and easy to bolt in large mouthfuls, horses gulp them without chewing, which causes choke, and the cut grass ferments rapidly to produce gas and acid in the hindgut, triggering colic and laminitis. Clippings may also contain toxic plants or chemicals from the mower. Grazing standing pasture is fine; mowed clippings are not.',
    risks: ['Rapid fermentation -> gas colic and laminitis', 'Gulped in clumps without chewing -> choke', 'May contain toxic weeds, mold, or lawn chemicals'],
    symptoms: ['Colic signs (pawing, rolling, looking at the flank)', 'Signs of choke: coughing, drooling, distress', 'Laminitis signs: lameness, heat in the hooves, reluctance to move'],
    whatToDo: 'Never put grass clippings in a paddock and keep horses off freshly mowed piles. If a horse has eaten clippings and shows colic, choke, or laminitis signs, call your veterinarian immediately — these are emergencies.',
    related: ['lettuce', 'grain', 'bread'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'acorns', name: 'Acorns & Oak', aliases: ['oak leaves', 'oak'], category: 'Hazards & Toxins', verdict: 'toxic',
    shortAnswer: 'No. Acorns and oak leaves are toxic to horses — their tannins can cause severe colic and kidney damage, and some horses develop a craving for them.',
    detail: 'Acorns, oak leaves, and oak buds contain tannins that are toxic to horses, causing gut and kidney damage. The risk peaks in autumn when acorns drop, and worryingly some horses develop a taste for acorns and seek them out. Large intakes can cause severe, sometimes fatal, colic and kidney injury. Fencing horses away from oak trees, especially in a windy autumn, is important pasture management.',
    risks: ['Tannin toxicity — severe colic and kidney damage', 'Risk peaks when acorns drop in autumn', 'Some horses develop a craving and overeat them'],
    symptoms: ['Colic signs and bloody or dark diarrhea', 'Loss of appetite and depression', 'Reduced urination (kidney involvement)'],
    whatToDo: 'Fence horses away from oak trees and clear fallen acorns. If a horse has eaten a quantity of acorns or shows colic, call your veterinarian immediately, and the ASPCA at 888-426-4435 for poisoning guidance.',
    related: ['lawn-clippings', 'rhubarb', 'tomato'],
    sources: [ASPCA, MERCK, AAEP],
  },
  {
    slug: 'moldy-feed', name: 'Moldy or Spoiled Feed', aliases: ['moldy hay', 'spoiled feed', 'dusty hay'], category: 'Hazards & Toxins', verdict: 'toxic',
    shortAnswer: 'No. Never feed moldy or spoiled hay, grain, or feed to horses — mold toxins can cause colic, neurological disease, and respiratory damage.',
    detail: 'Moldy hay, grain, and feed are dangerous to horses. Mold toxins (mycotoxins) can cause colic and, in some cases, fatal neurological disease — moldy corn is linked to leukoencephalomalacia ("moldy corn disease"). Dusty, moldy hay also damages the airways and is a major trigger for heaves (equine asthma). When in doubt, throw it out: spoiled feed is never worth the risk.',
    risks: ['Mycotoxins — colic and neurological disease (e.g. moldy corn disease)', 'Mold and dust trigger heaves (equine asthma)', 'Spoiled feed can also harbor botulism toxin'],
    symptoms: ['Colic signs', 'Neurological signs: stumbling, head pressing, circling', 'Coughing and labored breathing', 'Going off feed'],
    whatToDo: 'Discard any feed or hay that is moldy, musty-smelling, or warm. If a horse has eaten spoiled feed and shows colic or neurological signs, call your veterinarian immediately — neurological signs are an emergency.',
    related: ['lawn-clippings', 'grain', 'bread'],
    sources: [MERCK, AAEP],
  },
  {
    slug: 'cattle-feed', name: 'Cattle Feed & Ionophores', aliases: ['monensin', 'cattle feed', 'medicated feed'], category: 'Hazards & Toxins', verdict: 'toxic',
    shortAnswer: 'No. Never give horses cattle or poultry feed — it may contain ionophores such as monensin, which are deadly to horses even in small amounts.',
    detail: 'Feed formulated for cattle, sheep, or poultry often contains ionophore additives such as monensin (Rumensin) and lasalocid to improve growth. Horses are exquisitely sensitive to these compounds: even small amounts can cause fatal heart-muscle damage, and there is no antidote. Cross-contamination of horse feed at mills has caused mass poisonings. Feed only feed clearly labeled as safe for horses, and store species-specific feeds separately.',
    risks: ['Ionophores (monensin, lasalocid) cause fatal heart damage', 'No antidote — even small doses can be lethal', 'Mill cross-contamination is a documented route'],
    symptoms: ['Going off feed, colic, sweating', 'Weakness, stumbling, rapid or irregular heartbeat', 'Sudden death (may occur without warning, or weeks later)'],
    whatToDo: 'Never feed cattle/poultry feed to horses. If a horse may have eaten ionophore-containing feed, treat it as an emergency: call your veterinarian and the ASPCA Animal Poison Control Center at 888-426-4435 at once, and save the feed label/bag.',
    related: ['grain', 'moldy-feed', 'chocolate'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'dairy', name: 'Dairy (Milk & Cheese)', aliases: ['milk', 'cheese', 'yogurt'], category: 'Animal Products', verdict: 'caution',
    shortAnswer: 'No. Adult horses should not be given dairy — they are herbivores and become lactose intolerant after weaning, so milk and cheese cause digestive upset.',
    detail: 'Horses are obligate herbivores with a hindgut built to ferment fiber, not to digest animal products. After weaning, horses lose most of their lactase, so milk, cheese, and yogurt are not digested properly and ferment in the gut, causing diarrhea and colic. Dairy offers nothing a horse needs and disrupts the carefully balanced microbial population of the hindgut. It does not belong in an equine diet.',
    risks: ['Lactose intolerance in adult horses -> diarrhea, colic', 'Disrupts the fiber-fermenting hindgut microbiome', 'No nutritional place in a herbivore diet'],
    symptoms: ['Diarrhea and loose manure', 'Colic signs', 'Reduced appetite'],
    whatToDo: 'Do not feed dairy to adult horses. A small accidental amount is unlikely to be an emergency, but watch for diarrhea or colic and call your veterinarian if either develops.',
    related: ['meat', 'bread', 'sugar-cubes'],
    sources: [MERCK, AAEP],
  },
  {
    slug: 'meat', name: 'Meat', aliases: ['ham', 'chicken', 'fish'], category: 'Animal Products', verdict: 'caution',
    shortAnswer: 'No. Horses are herbivores — their digestive system is not designed for meat, which is inappropriate and can cause digestive disturbance.',
    detail: 'Horses are strict herbivores. Their teeth, stomach, and fiber-fermenting hindgut are built for plants, not animal protein, and they lack the digestive machinery to handle meat. Feeding meat can disrupt the hindgut microbiome and cause colic and other digestive problems, and it offers no benefit. Never feed meat or meat-containing products to a horse.',
    risks: ['No equine digestive pathway for animal protein', 'Disrupts the hindgut microbiome -> colic', 'Cured/salted meats add salt and fat the horse cannot use'],
    symptoms: ['Colic signs', 'Diarrhea or abnormal manure', 'Going off feed'],
    whatToDo: 'Do not feed meat to horses. If a horse accidentally eats a meaningful amount and shows colic or digestive upset, call your veterinarian.',
    related: ['dairy', 'bread', 'chocolate'],
    sources: [MERCK, AAEP],
  },

  // ---------------- CAUTION ----------------
  {
    slug: 'grain', name: 'Grain & Sweet Feed', aliases: ['oats in excess', 'sweet feed', 'corn', 'concentrates'], category: 'Forage & Grains', verdict: 'caution',
    shortAnswer: 'Caution. Small, measured amounts of grain can be appropriate, but large grain meals are a leading cause of colic and laminitis in horses.',
    detail: 'Grain and sweet feed have a place for horses that genuinely need extra energy, but they are also one of the most common causes of digestive disaster. A large starchy meal overwhelms the small intestine, spills undigested starch into the hindgut, and ferments rapidly — driving grain-overload colic and laminitis. Accidental access to a feed bin (a horse breaking into the feed room) is a true emergency. Feed grain only in small, measured meals when needed, and never free-choice.',
    benefits: ['A controlled source of extra energy for horses in hard work or hard keepers', 'Often used as a carrier for supplements'],
    risks: ['Large meals -> grain-overload colic and laminitis', 'Breaking into the feed bin is an emergency', 'High sugar/starch is dangerous for laminitis-prone, IR, or Cushing’s horses'],
    symptoms: ['Colic signs after a large or unaccustomed grain meal', 'Laminitis: lameness, hoof heat, a "sawhorse" stance, reluctance to move'],
    safePrep: 'Feed only in small, measured meals (split larger rations across the day), introduce changes gradually over 1–2 weeks, and keep the feed room securely latched.',
    quantity: 'Match to actual workload; many horses on good forage need little or no grain. A qualified nutritionist or your veterinarian can set amounts.',
    whatToDo: 'If a horse breaks into grain or shows colic or laminitis signs after a large grain meal, call your veterinarian immediately — grain overload is an emergency even before signs appear.',
    related: ['oats', 'bread', 'sugar-cubes'],
    sources: [MERCK, AAEP, EEG],
  },
  {
    slug: 'bread', name: 'Bread', aliases: ['dough', 'bagels'], category: 'Forage & Grains', verdict: 'caution',
    shortAnswer: 'Caution. Bread is not toxic, but it forms a doughy mass that can cause choke and colic, and it is a starchy, sugary treat.',
    detail: 'A small piece of plain bread will not poison a horse, but bread is a poor and slightly risky treat. Chewed bread forms a sticky, doughy ball that can lodge in the esophagus and cause choke, and large amounts add a starch and sugar load the hindgut handles badly, risking colic. Doughy, yeasty products are worse still. There are far safer treats — bread is best avoided.',
    risks: ['Doughy mass -> choke risk', 'Starch/sugar load -> colic and unsuitable for laminitis-prone horses', 'No nutritional benefit over forage'],
    symptoms: ['Signs of choke: coughing, drooling, feed at the nostrils, distress', 'Colic signs after a large amount'],
    safePrep: 'Better skipped. If given at all, offer only a small piece of plain bread (never dough), and never to a horse prone to choke.',
    quantity: 'Not a routine treat; a small piece at most.',
    related: ['grain', 'sugar-cubes', 'apples'],
    sources: [MERCK, AAEP],
  },
  {
    slug: 'cabbage', name: 'Cabbage', aliases: ['broccoli', 'cauliflower', 'brussels sprouts'], category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Caution. Cabbage and other brassicas are not toxic, but they ferment in the hindgut and produce gas that can cause colic.',
    detail: 'Cabbage, broccoli, cauliflower, and Brussels sprouts are not poisonous to horses, but they are gas-forming vegetables. In the equine hindgut they ferment and release gas, which can cause uncomfortable gas (tympanic) colic, especially in any quantity. A small nibble is unlikely to harm a healthy horse, but brassicas are not a good treat and are best limited or avoided.',
    risks: ['Gas-forming -> tympanic (gas) colic', 'Worse in quantity or in colic-prone horses'],
    symptoms: ['Colic signs: restlessness, pawing, looking at the flank', 'Bloating, passing a lot of gas'],
    safePrep: 'Best avoided. If offered, only a very small piece occasionally — never a bowlful.',
    quantity: 'A small bite at most; not a regular treat.',
    related: ['lettuce', 'celery', 'green-beans'],
    sources: [MERCK, AAEP],
  },
  {
    slug: 'stone-fruit', name: 'Stone Fruit (Peaches, Plums, Cherries)', aliases: ['peaches', 'plums', 'cherries', 'apricots'], category: 'Fruits', verdict: 'caution',
    shortAnswer: 'Caution. The flesh of stone fruits is generally fine in small amounts, but the pits are a serious choke and obstruction hazard and must be removed.',
    detail: 'The soft flesh of peaches, plums, apricots, and cherries is not toxic to horses and can be an occasional treat, but the pit (stone) is the problem: it is a major choke and intestinal-obstruction hazard, and the pits and wilting leaves of cherry and related Prunus trees also contain cyanogenic compounds. Always remove the pit, never offer whole fruit, and keep horses away from wilting cherry/plum branches.',
    risks: ['Pits are a choke and obstruction hazard — always remove', 'Prunus pits and wilting leaves contain cyanogenic compounds', 'Sugar load matters for laminitis-prone horses'],
    symptoms: ['Signs of choke: coughing, drooling, feed at the nostrils, distress', 'Colic signs if a pit causes obstruction'],
    safePrep: 'Remove the pit completely and cut the flesh into small pieces. Never give whole stone fruit, and keep horses away from wilting cherry/plum foliage.',
    quantity: 'A few small pieces of pitted flesh as an occasional treat.',
    related: ['apples', 'pears', 'banana'],
    sources: [ASPCA, MERCK],
  },
  {
    slug: 'sugar-cubes', name: 'Sugar Cubes & Sugary Treats', aliases: ['sugar', 'candy', 'mints', 'peppermints'], category: 'Treats & Sweets', verdict: 'caution',
    shortAnswer: 'Caution. The occasional sugar cube or mint is fine for most healthy horses, but sugary treats are risky for laminitis-prone, IR, or Cushing’s horses.',
    detail: 'Sugar cubes, peppermints, and commercial horse candies are a traditional reward, and one now and then is harmless for a healthy horse. The concern is sugar: horses with insulin dysregulation, equine metabolic syndrome (EMS), or Cushing’s (PPID) are at real risk of laminitis from sugary treats, so for those horses they should be avoided. Even for healthy horses, keep sugary treats to a small token amount.',
    risks: ['Sugar can trigger laminitis in IR/EMS/Cushing’s horses', 'Excess contributes to weight gain and dental issues', 'Hand-fed treats can encourage nipping in some horses'],
    symptoms: ['Laminitis signs in at-risk horses: lameness, hoof heat, reluctance to move'],
    safePrep: 'Reserve sugary treats for healthy horses, in token amounts. For laminitis-prone, IR, EMS, or Cushing’s horses, use low-sugar treats or a piece of their normal forage instead.',
    quantity: 'One or two small pieces occasionally for a healthy horse; none for at-risk horses.',
    related: ['apples', 'carrots', 'grain'],
    sources: [EEG, AAEP],
  },
  {
    slug: 'lettuce', name: 'Lettuce', aliases: ['salad greens'], category: 'Vegetables', verdict: 'caution',
    shortAnswer: 'Caution. Plain lettuce in small amounts is generally tolerated, but it is very watery and a large amount can loosen manure or cause mild colic.',
    detail: 'Plain leaf or romaine lettuce is not toxic and a few leaves are a harmless treat for most horses. The caution is quantity: lettuce is almost all water and low in fiber, so a large amount can cause loose manure or mild digestive upset, and like any sudden bulk of fresh greens it is best introduced in small amounts. Avoid spoiled or slimy lettuce and dressings.',
    risks: ['Large amounts -> loose manure or mild colic', 'Very watery, low fiber — not a forage substitute'],
    symptoms: ['Loose manure or mild colic signs after a large amount'],
    safePrep: 'Offer a few clean, fresh leaves of plain lettuce; avoid spoiled lettuce and any dressing.',
    quantity: 'A few leaves as an occasional treat, not a large bowlful.',
    related: ['celery', 'cabbage', 'carrots'],
    sources: [MERCK, AAEP],
  },

  // ---------------- SAFE (in moderation) ----------------
  {
    slug: 'carrots', name: 'Carrots', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Carrots are a classic, well-tolerated horse treat — just cut them lengthwise to prevent choke.',
    detail: 'Carrots are the quintessential horse treat: palatable, a source of beta-carotene and fiber, and well tolerated by most horses. The two cautions are choke and sugar. Whole round "coins" or chunks can lodge in the throat, so cut carrots into long sticks (not discs), and because carrots do contain sugar, keep portions modest for laminitis-prone, IR, or Cushing’s horses. Fed sensibly, carrots are a great reward.',
    benefits: ['Beta-carotene (vitamin A) and fiber', 'Highly palatable — excellent training/reward treat', 'Low calorie compared with grain or sugary treats'],
    risks: ['Round chunks/discs are a choke hazard — cut into long sticks', 'Sugar content — keep modest for laminitis-prone/IR/Cushing’s horses'],
    safePrep: 'Wash and cut into long sticks (lengthwise), not coins or chunks, to reduce choke risk.',
    quantity: 'A few carrots a day is fine for most healthy horses; fewer for metabolic horses.',
    related: ['apples', 'celery', 'green-beans'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'apples', name: 'Apples', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Apples are a favorite horse treat — cut into pieces (cored) to prevent choke, and limit for sugar-sensitive horses.',
    detail: 'Apples are a beloved and well-tolerated horse treat, providing fiber and a little vitamin C. As with carrots, the issues are choke and sugar. A whole apple can lodge in the throat, so cut apples into pieces and remove the core; the seeds contain trace cyanogenic compounds so the core is best discarded anyway. Apples are sugary, so keep them to a few pieces — and avoid them — for laminitis-prone, IR, or Cushing’s horses.',
    benefits: ['Fiber and a little vitamin C', 'Very palatable — a reliable reward', 'Familiar, easy treat most horses love'],
    risks: ['Whole apples are a choke hazard — cut into pieces', 'Sugar content — limit for laminitis-prone/IR/Cushing’s horses', 'Discard the core (seeds have trace cyanogenic compounds)'],
    safePrep: 'Wash, core, and cut into several pieces or wedges. Never feed a whole apple.',
    quantity: 'A few pieces as a treat; fewer for metabolic horses.',
    related: ['carrots', 'pears', 'banana'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'banana', name: 'Banana', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Most horses enjoy banana, which is soft and easy to eat — it is sugary, so keep portions small.',
    detail: 'Banana is a safe, soft treat that many horses love, and because it is soft it carries less choke risk than hard whole fruit. It provides potassium and is sometimes used to hide medication or by endurance riders. The main caution is sugar: bananas are relatively high in natural sugar, so they are an occasional treat, and should be limited for laminitis-prone, IR, or Cushing’s horses. The peel is edible but some horses dislike it.',
    benefits: ['Potassium and a soft, palatable texture', 'Useful for hiding medication or as an energy treat', 'Lower choke risk than hard whole fruit'],
    risks: ['Sugar content — moderation for laminitis-prone/IR/Cushing’s horses'],
    safePrep: 'Offer a peeled banana broken into pieces (peel is edible but optional).',
    quantity: 'Part of a banana as an occasional treat.',
    related: ['apples', 'watermelon', 'pumpkin'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'watermelon', name: 'Watermelon', aliases: ['melon'], category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Horses can eat watermelon flesh — and the rind — as a hydrating summer treat, in small amounts.',
    detail: 'Watermelon is a safe, hydrating warm-weather treat for horses. Both the flesh and the rind are edible to horses (many horses enjoy the rind), making it a low-waste treat. It is watery and contains sugar, so offer it in moderation, and cut it into manageable pieces rather than handing over large chunks. As with any fresh treat, introduce it gradually.',
    benefits: ['Very hydrating — a good summer treat', 'Both flesh and rind are edible to horses', 'Lower in sugar than many fruits'],
    risks: ['Large chunks should be cut to a manageable size', 'Introduce gradually like any new fresh food'],
    safePrep: 'Cut into manageable pieces (flesh and/or rind); remove from large hard chunks. Wash the rind first.',
    quantity: 'A few pieces as an occasional treat.',
    related: ['banana', 'pumpkin', 'apples'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'pumpkin', name: 'Pumpkin', aliases: ['squash'], category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Plain pumpkin flesh and seeds are safe for horses as a treat — avoid the stems/leaves and any spiced pie filling.',
    detail: 'Plain pumpkin (and most squash) flesh is a safe, fiber-rich seasonal treat that many horses enjoy, and the seeds are fine too. Feed it plain — never spiced pumpkin-pie filling, which contains sugar and additives — and avoid the stems and leaves of the pumpkin plant, which can irritate the gut. Cut it into manageable pieces and introduce it gradually like any new food.',
    benefits: ['Fiber and a little vitamin A', 'Seasonal, palatable, low-waste treat', 'Seeds are also safe'],
    risks: ['Use plain pumpkin — never spiced pie filling', 'Avoid the stems and leaves', 'Introduce gradually'],
    safePrep: 'Offer plain raw or cooked pumpkin flesh in manageable pieces; avoid pie filling, stems, and leaves.',
    quantity: 'A few pieces as an occasional treat.',
    related: ['watermelon', 'carrots', 'celery'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'celery', name: 'Celery', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Celery is a safe, crunchy, low-sugar treat for horses — cut it into short pieces to prevent choke.',
    detail: 'Celery is a safe, low-calorie, low-sugar vegetable that makes a good treat, including for horses that need to watch their sugar intake. The main practical caution is the stringy stalks, which can be a choke risk if a horse bolts long pieces; cutting celery into short chunks helps. The leaves are also fine. Wash it well and introduce it gradually.',
    benefits: ['Low sugar — suitable for many metabolic horses in small amounts', 'Hydrating and crunchy', 'Low calorie'],
    risks: ['Long stringy stalks can be a choke risk — cut into short pieces'],
    safePrep: 'Wash and cut into short pieces (stalk and leaves are both fine).',
    quantity: 'A few pieces as an occasional treat.',
    related: ['carrots', 'lettuce', 'green-beans'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'green-beans', name: 'Green Beans', category: 'Vegetables', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Plain green beans are a safe, low-sugar treat for horses — serve them fresh or steamed, never canned with salt.',
    detail: 'Plain green beans (snap beans) are a safe, low-sugar, fibrous treat that many horses accept. Serve them fresh or lightly steamed and plain — avoid canned green beans, which are high in added salt, and never serve them cooked with butter, onion, or seasoning. Like any new fresh food, introduce them in small amounts. They are a useful low-sugar option for metabolic horses in moderation.',
    benefits: ['Low sugar — suitable for many metabolic horses in moderation', 'Fiber and a satisfying crunch', 'Low calorie'],
    risks: ['Avoid canned (salt) or seasoned versions — plain only', 'Introduce gradually'],
    safePrep: 'Offer plain fresh or lightly steamed green beans; no salt, butter, or seasoning.',
    quantity: 'A small handful as an occasional treat.',
    related: ['carrots', 'celery', 'pumpkin'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'pears', name: 'Pears', category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Pears are a safe treat — cut into pieces (cored) to prevent choke, and limit for sugar-sensitive horses.',
    detail: 'Ripe pears are a safe and palatable treat for horses, similar to apples. The same two cautions apply: cut them into pieces and remove the core to avoid choke (pear seeds, like apple seeds, contain trace cyanogenic compounds, so discard the core), and remember pears are sugary, so keep portions small and avoid them for laminitis-prone, IR, or Cushing’s horses. Offer ripe, not hard, fruit.',
    benefits: ['Fiber and a little vitamin C', 'Soft when ripe — palatable reward'],
    risks: ['Whole pears are a choke hazard — cut into pieces', 'Sugar content — limit for laminitis-prone/IR/Cushing’s horses', 'Discard the core (seeds have trace cyanogenic compounds)'],
    safePrep: 'Wash, core, and cut ripe pears into pieces. Never feed a whole pear.',
    quantity: 'A few pieces as an occasional treat.',
    related: ['apples', 'banana', 'stone-fruit'],
    sources: [AAEP, MERCK],
  },
  {
    slug: 'sugar-beet', name: 'Sugar Beet (Prepared)', aliases: ['beet pulp', 'sugar beet pulp'], category: 'Forage & Grains', verdict: 'safe',
    shortAnswer: 'Yes, when properly prepared. Sugar-beet pulp is a safe, valuable fiber feed — but it must be soaked correctly before feeding.',
    detail: 'Sugar-beet pulp is a widely used, safe "super-fiber" feed for horses, useful for hard keepers, seniors with poor teeth, and as a low-starch energy source. The critical caveat is preparation: dried beet pulp (especially pelleted or unmolassed shreds) should be soaked in water before feeding so it does not swell and risk choke or, rarely, a blockage. Once soaked it is safe and digestible. Choose unmolassed pulp for sugar-sensitive horses.',
    benefits: ['Highly digestible "super-fiber" energy without high starch', 'Excellent for hard keepers and dental-compromised seniors', 'Unmolassed forms are relatively low in sugar'],
    risks: ['Must be soaked before feeding — dry pulp can swell and risk choke', 'Choose unmolassed for laminitis-prone/IR horses'],
    safePrep: 'Soak dried beet pulp in water per the product directions before feeding; never feed it dry.',
    quantity: 'Follow the feed directions and your nutritionist/veterinarian; a common partial forage replacement.',
    related: ['oats', 'grain', 'carrots'],
    sources: [MERCK, AAEP],
  },
  {
    slug: 'oats', name: 'Oats', category: 'Forage & Grains', verdict: 'safe',
    shortAnswer: 'Yes, in appropriate amounts. Oats are the traditional, relatively safe grain for horses — but they are still a concentrate, so measure carefully.',
    detail: 'Oats are the traditional horse grain and are more digestible in the small intestine than corn, making them a relatively safer concentrate when extra energy is needed. "Relatively safe" still means measured: oats are a starchy concentrate, so large meals can still cause colic or laminitis, and sugar/starch-sensitive (IR, EMS, Cushing’s) horses should avoid them. Feed oats in small, measured amounts matched to the horse’s workload, not free-choice.',
    benefits: ['More digestible in the small intestine than corn', 'A controllable energy source for working horses', 'Traditional, widely available concentrate'],
    risks: ['Still a starchy concentrate — large meals risk colic/laminitis', 'Not appropriate for IR/EMS/Cushing’s horses', 'Measure by weight, not by scoop'],
    safePrep: 'Feed small, measured amounts matched to workload; introduce gradually and split larger rations.',
    quantity: 'Match to actual workload; many forage-fed horses need little or none. Confirm amounts with your veterinarian/nutritionist.',
    related: ['grain', 'sugar-beet', 'bread'],
    sources: [MERCK, AAEP, EEG],
  },
  {
    slug: 'strawberries', name: 'Strawberries', aliases: ['berries', 'blueberries'], category: 'Fruits', verdict: 'safe',
    shortAnswer: 'Yes, in moderation. Small berries like strawberries and blueberries are a safe treat for horses in small amounts.',
    detail: 'Small soft berries such as strawberries and blueberries are safe, palatable treats for horses and carry little choke risk because of their size. They are higher in sugar than vegetables, so they are best as a small, occasional treat, and like other sugary fruits should be limited for laminitis-prone, IR, or Cushing’s horses. Wash them, remove the leafy strawberry tops, and introduce gradually.',
    benefits: ['Antioxidants and a little vitamin C', 'Small and soft — low choke risk', 'Palatable novelty treat'],
    risks: ['Natural sugar — moderation for laminitis-prone/IR/Cushing’s horses', 'Introduce gradually'],
    safePrep: 'Wash and offer a small handful of plain berries; remove strawberry leafy tops.',
    quantity: 'A small handful as an occasional treat.',
    related: ['apples', 'banana', 'watermelon'],
    sources: [AAEP, MERCK],
  },
]

export const HORSE_FOOD_CATEGORIES: FoodCategory[] = [
  'Fruits', 'Vegetables', 'Forage & Grains', 'Treats & Sweets', 'Animal Products', 'Hazards & Toxins',
]

export function getHorseFood(slug: string): FoodEntry | undefined {
  return HORSE_FOODS.find((f) => f.slug === slug)
}

/** Related foods for internal linking: declared `related` slugs first, then same-category fill, max 4. */
export function getRelatedFoods(entry: FoodEntry): FoodEntry[] {
  const out: FoodEntry[] = []
  for (const slug of entry.related ?? []) {
    const f = getHorseFood(slug)
    if (f && f.slug !== entry.slug && !out.includes(f)) out.push(f)
  }
  if (out.length < 4) {
    for (const f of HORSE_FOODS) {
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
    { question: `Can horses eat ${name}?`, answer: `${entry.shortAnswer} ${entry.detail}` },
  ]
  if (entry.verdict === 'toxic') {
    faqs.push({
      question: `What happens if a horse eats ${name}?`,
      answer: `${(entry.symptoms ?? []).join('; ') || 'Signs vary by amount and individual horse.'}. ${entry.whatToDo ?? 'Contact your veterinarian, and for a suspected poisoning the ASPCA Animal Poison Control Center (888-426-4435), right away. Remember horses cannot vomit, so prompt veterinary care matters.'}`,
    })
    faqs.push({
      question: `How much ${name} is dangerous for a horse?`,
      answer: `Because individual sensitivity and the amount both matter — and horses cannot vomit to bring it back up — treat any meaningful ingestion as potentially serious and let a veterinarian assess it. For a suspected poisoning, call the ASPCA Animal Poison Control Center at 888-426-4435.`,
    })
  } else {
    if (entry.quantity || entry.safePrep) {
      faqs.push({
        question: `How much ${name} can a horse have?`,
        answer: `${entry.quantity ?? 'Offer modest amounts as an occasional treat.'} ${entry.safePrep ?? ''} Treats should stay small alongside a forage-first diet, and sugary treats should be limited for laminitis-prone, insulin-resistant, or Cushing’s horses.`.trim(),
      })
    }
    if (entry.risks?.length) {
      faqs.push({
        question: `Is ${name} bad for horses?`,
        answer: `It can be if the cautions are ignored: ${entry.risks.join('; ')}. Served correctly and in moderation, it is generally fine for most healthy horses.`,
      })
    }
  }
  return faqs
}

export const VERDICT_META: Record<Verdict, { label: string; tone: string; color: string }> = {
  safe: { label: 'Yes — Safe in moderation', tone: 'good', color: '#15803d' },
  caution: { label: 'Caution — Risks apply', tone: 'warn', color: '#b45309' },
  toxic: { label: 'No — Not safe for horses', tone: 'danger', color: '#b91c1c' },
}
