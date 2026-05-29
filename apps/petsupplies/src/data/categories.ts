/**
 * PetSupplies.com — Category Architecture
 * Architect S1 / Directive 6.
 *
 * 30 top-level categories, each with 5-10 subcategories. Each category drives
 * a programmatic SEO page at /category/[slug].
 *
 * Vendors map to keys in packages/config/affiliate.ts AFFILIATE_PROGRAMS.
 * Cross-link sites are the sister CarloOS content properties that own the
 * editorial coverage for the species (used by the "Related reading" block).
 */

export type PetType =
  | 'dog'
  | 'cat'
  | 'small-animal'
  | 'fish'
  | 'reptile'
  | 'bird'
  | 'general'

export interface Category {
  /** URL slug — must be unique. */
  slug: string
  /** "Best <h1Name> for <pet>" — used in H1, page title, JSON-LD. */
  h1Name: string
  /** Short label used in nav, sitemaps, and breadcrumbs. */
  shortName: string
  /** Pet type — drives icon + cross-links. */
  petType: PetType
  /** Subcategories — 5-10 each, rendered as filter chips on the page. */
  subcategories: string[]
  /** What buyers should look for — used verbatim in the page intro (~200-300 words). */
  intro: string
  /** Long buyer's guide section (500-800 words). */
  buyersGuide: string
  /** Editorial integrity: who should skip this category entirely. */
  whoShouldntBuy: string
  /** FAQ items rendered into FAQAccordion + FAQPage schema. */
  faqs: Array<{ q: string; a: string }>
  /** Cross-link to the relevant CarloOS content sites. */
  crossLinks: Array<{ site: string; href: string; label: string }>
  /** Preferred vendors for this category, in priority order. */
  preferredVendors: Array<'amazon' | 'chewy' | 'sharesale'>
}

// ─── DOG CATEGORIES (12) ──────────────────────────────────────────────────────

const DOG_CROSSLINKS = [
  { site: 'dog.com', href: 'https://dog.com/health', label: 'Dog Health Library on Dog.com' },
  { site: 'dog.com', href: 'https://dog.com/nutrition', label: 'Dog Nutrition guides on Dog.com' },
]

const CAT_CROSSLINKS = [
  { site: 'vets.co', href: 'https://vets.co/health', label: 'Cat Health on Vets.co' },
]

const FISH_CROSSLINKS = [
  { site: 'fish.com', href: 'https://fish.com/setup', label: 'Aquarium Setup on Fish.com' },
  { site: 'fish.com', href: 'https://fish.com/species', label: 'Fish Species on Fish.com' },
]

const REPTILE_CROSSLINKS = [
  { site: 'lizard.com', href: 'https://lizard.com/species', label: 'Reptile Species on Lizard.com' },
  { site: 'lizard.com', href: 'https://lizard.com/setup', label: 'Enclosure Setup on Lizard.com' },
]

const SMALL_ANIMAL_CROSSLINKS = [
  { site: 'ferret.com', href: 'https://ferret.com', label: 'Ferret & small-mammal care on Ferret.com' },
]

const BIRD_CROSSLINKS: Category['crossLinks'] = []

const GENERAL_CROSSLINKS = [
  { site: 'vets.co', href: 'https://vets.co', label: 'Pet Health Library on Vets.co' },
]

export const CATEGORIES: Category[] = [
  // ─── DOG ────────────────────────────────────────────────────────────────────
  {
    slug: 'dog-food-dry',
    h1Name: 'Dry Dog Food',
    shortName: 'Dry Dog Food',
    petType: 'dog',
    subcategories: ['Puppy formulas', 'Adult maintenance', 'Senior formulas', 'Large breed', 'Small breed', 'Sensitive stomach', 'Grain-inclusive', 'Limited ingredient'],
    intro: `Dry kibble remains the dominant feeding format for U.S. dogs, and the gap between the best and the worst dry foods is wider than most owners realize. The criteria that matter — published in the WSAVA Global Nutrition Guidelines — are whether the manufacturer employs a full-time qualified nutritionist (board-certified ACVN or PhD), runs AAFCO feeding trials rather than only formulation analysis, and operates its own manufacturing rather than co-packing. Marketing claims about "ancestral," "biologically appropriate," or "human grade" are not regulated and tell you nothing about formulation quality. We rank by formulation transparency, life-stage statement, nutrient profile against AAFCO minimums, and the manufacturer's ability to answer caloric-density and nutrient-balance questions in writing. Prices below reflect a 30-lb bag where available; some specialty brands ship only in 4-lb or 12-lb formats.`,
    buyersGuide: `**WSAVA-aligned brands have the best evidence base.** Hill's, Purina Pro Plan, Royal Canin, Iams, and Eukanuba are the five brands that meet every WSAVA recommendation — full-time board-certified nutritionists, AAFCO feeding trials, owned manufacturing, and published nutrient analyses on request. That is why these brands appear on most veterinarian recommendation lists despite the marketing assumption that boutique brands must be better.\n\n**Boutique grain-free is a clinical risk for some dogs.** The FDA's ongoing investigation into diet-associated dilated cardiomyopathy (DCM) has consistently flagged grain-free, legume-heavy formulas, particularly from boutique brands that do not employ veterinary nutritionists. There is no published evidence that grain-free is healthier for dogs without a confirmed grain allergy — a condition that affects under 1% of dogs with food allergies according to peer-reviewed reviews. If your dog does not have a veterinary-diagnosed grain allergy, grain-inclusive formulas are the safer choice.\n\n**Life-stage matters more than breed-specific.** "Large breed puppy" is a meaningful formulation choice — large-breed puppies require controlled calcium (between 1.2-1.8%), restricted caloric density, and balanced calcium-to-phosphorus ratios to reduce orthopedic disease risk. "Senior" or "small breed" formulas are marketing categories with no consistent regulatory definition; the nutrient profile matters far more than the label.\n\n**Read the AAFCO statement, not the front of the bag.** The legally meaningful language is on the back. "Formulated to meet" means the recipe was analyzed on paper. "Animal feeding tests using AAFCO procedures substantiate" means the food was fed to live dogs to confirm digestibility, palatability, and stool quality. The latter is a higher standard.`,
    whoShouldntBuy: `Skip this entire category if your dog has a veterinary-diagnosed chronic condition that requires a therapeutic diet — chronic kidney disease, lower-urinary-tract disease, severe inflammatory bowel disease, exocrine pancreatic insufficiency, hepatic encephalopathy, or confirmed food allergies. Therapeutic diets like Hill's Prescription Diet, Royal Canin Veterinary Diet, and Purina Pro Plan Veterinary Diets require a prescription because their nutrient profiles fall outside the AAFCO general feeding range — they treat disease. Switching a dog with kidney disease from a renal therapeutic diet to a high-quality maintenance kibble can shorten remaining life expectancy. Talk to your veterinarian first; do not let cost drive that conversation.`,
    faqs: [
      { q: 'Is grain-free dog food bad for dogs?', a: 'There is no evidence grain-free is healthier for dogs without a diagnosed grain allergy, and the FDA has investigated a correlation between grain-free legume-heavy diets and diet-associated dilated cardiomyopathy (DCM). For dogs without a confirmed grain allergy, grain-inclusive formulas from WSAVA-compliant brands are the safer default.' },
      { q: 'What does AAFCO "complete and balanced" mean?', a: 'AAFCO sets the minimum nutrient profile for U.S. dog food. A bag labeled "complete and balanced for adult maintenance" meets minimums for a healthy adult dog. The stronger standard is "animal feeding tests using AAFCO procedures substantiate" — meaning the food was tested on live dogs.' },
      { q: 'How do I switch foods without GI upset?', a: 'Transition over 7-10 days: 25% new / 75% old for 2-3 days, 50/50 for 2-3 days, 75% new / 25% old for 2-3 days, then 100% new. If stools loosen, slow the schedule. Dogs with known sensitive stomachs benefit from a 14-day transition.' },
      { q: 'How much should I feed?', a: 'The feeding chart on the bag is a starting point — most dogs require less than the chart suggests because the chart assumes active intact dogs. Adjust by body condition score, not weight: ribs easily palpable but not visible, defined waist from above, abdominal tuck from the side. Recheck monthly.' },
    ],
    crossLinks: DOG_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-food-wet',
    h1Name: 'Wet Dog Food',
    shortName: 'Wet Dog Food',
    petType: 'dog',
    subcategories: ['Pâté', 'Stew/chunks', 'Grain-inclusive', 'Limited ingredient', 'Topper portions', 'Puppy wet', 'Senior wet'],
    intro: `Wet (canned) dog food serves three legitimate purposes: hydration support for dogs who do not drink enough, palatability for picky eaters or post-surgical appetite stimulation, and texture variety for dogs with dental disease. Wet food typically runs 70-80% moisture compared to kibble's 8-12%, which matters for dogs with subclinical kidney issues and seniors who need increased fluid intake. The same WSAVA criteria — board-certified nutritionists, AAFCO feeding trials, owned manufacturing — apply with equal weight. Cost per calorie is 3-5x higher than dry kibble, which is the practical constraint for most owners of medium and large breeds. We rank by nutrient profile, ingredient transparency, manufacturer credentials, and texture quality across the format range from pâté through stew.`,
    buyersGuide: `**Read the calorie density, not the can.** Wet food caloric density ranges from roughly 0.7 to 1.4 kcal per gram. A 13-oz can might contain 320 calories or 520 calories depending on formulation. For a 50-lb dog at a healthy weight, daily caloric needs are roughly 900 kcal — that translates to between 1.7 and 2.8 cans per day depending on the brand. Brands that publish caloric density per can (Hill's, Royal Canin, Purina Pro Plan, Wellness) make this calculation easy. Brands that don't are worth questioning.\n\n**Wet food is not inherently "better" than kibble.** Both formats can meet the AAFCO complete and balanced standard. The marketing claim that wet is "biologically appropriate" or "more natural" has no support in the veterinary literature. The legitimate reasons to feed wet are hydration, palatability, and reduced caloric density per volume (useful for dogs on weight loss).\n\n**Mix-feeding works.** Many veterinary nutritionists recommend a 50/50 wet/dry feeding schedule for dogs with low water intake or finicky appetites. The total daily caloric intake matters, not the format.\n\n**Storage matters.** An opened can lasts 5-7 days refrigerated in a sealed container. Most dogs will not eat refrigerated cold wet food directly from the fridge — warming briefly to room temperature is usually necessary.`,
    whoShouldntBuy: `If you are feeding wet food to bypass a diagnosed therapeutic diet recommendation, this is the wrong category. Dogs on prescription diets for kidney disease, urinary stones, IBD, or food allergy should remain on the therapeutic version of the diet — including the wet format from the same prescription line. Switching from Hill's k/d wet to a non-prescription "kidney support" wet can rapidly destabilize a managed renal patient.`,
    faqs: [
      { q: 'Is wet food better than kibble?', a: 'Neither format is inherently better. Wet food provides more hydration and is often more palatable; kibble is more calorically dense, cheaper per calorie, and contributes mild abrasive mechanical action against tartar. The right answer for your dog depends on hydration status, dental health, weight management goals, and budget.' },
      { q: 'How long does an opened can last?', a: 'Refrigerated in a sealed container, 5-7 days. Most dogs prefer wet food warmed to room temperature.' },
      { q: 'Can I mix wet and dry food?', a: 'Yes — this is a common veterinary nutritionist recommendation for dogs with low water intake or finicky appetites. Calculate total daily calories across both formats to avoid overfeeding.' },
      { q: 'Is wet food bad for teeth?', a: 'Wet food does not provide the same mild mechanical action against tartar as kibble, but dental disease is primarily driven by individual oral hygiene, breed, and genetics — not food format. Daily brushing and VOHC-accepted dental chews matter far more than format.' },
    ],
    crossLinks: DOG_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-food-fresh',
    h1Name: 'Fresh Dog Food',
    shortName: 'Fresh / Cooked Dog Food',
    petType: 'dog',
    subcategories: ['Subscription-delivered', 'Beef formulas', 'Chicken formulas', 'Turkey formulas', 'Limited ingredient', 'Custom-portioned'],
    intro: `Fresh, lightly-cooked dog food has become one of the fastest-growing pet food categories — projected to reach over $10 billion in U.S. sales by 2027. The format sits between traditional canned and raw: gently cooked at lower temperatures than canning, refrigerated rather than shelf-stable, and typically subscription-delivered to keep cold-chain logistics intact. The legitimate advantages are higher digestibility for some dogs, transparent ingredients, and palatability for finicky eaters. The trade-offs are cost (often $4-12/day for a medium dog), freezer storage requirements, and a much shorter veterinary track record than kibble. We rank by formulation credentials, manufacturing standards, and per-day cost at a 40-lb feeding weight.`,
    buyersGuide: `**Cost is the primary practical constraint.** A medium-sized 40-lb dog on a typical fresh subscription runs $4-8 per day depending on the brand — roughly $1,500-2,900 per year. For comparison, a high-quality dry kibble for the same dog runs $400-700 per year. The question is not whether fresh is "better" but whether the marginal benefit justifies the marginal cost for your specific dog.\n\n**The WSAVA criteria still apply.** The Farmer's Dog and Just Food For Dogs both employ board-certified veterinary nutritionists (Diplomates of ACVN). Some smaller fresh brands do not, and instead use consulting nutritionists who lack ACVN credentials. The credential matters because formulating a complete and balanced diet from whole-food ingredients (rather than micronutrient-fortified kibble) is technically harder.\n\n**Storage and prep are not trivial.** Fresh food requires freezer space (typical delivery is 2-4 weeks of food), refrigerator thaw cycles, and same-day feeding once thawed. Travel, boarding, and pet-sitting arrangements all need to account for cold-chain handling.\n\n**Transition slowly.** The shift from kibble to fresh requires the same 7-10 day transition as any food change. Some dogs experience loose stool during the first week — slow the schedule rather than abandon the change.`,
    whoShouldntBuy: `Skip fresh food if your dog is on a prescription therapeutic diet — fresh subscription brands do not yet offer veterinarian-formulated renal, urinary, or hepatic prescription equivalents that have undergone the same regulatory review. Skip it also if cost is a real concern: the marginal benefit over a high-quality WSAVA-compliant kibble is small enough that the money is often better spent on dental care, preventive vet visits, or pet insurance.`,
    faqs: [
      { q: 'Is fresh dog food healthier than kibble?', a: 'There is limited peer-reviewed evidence that fresh outperforms a high-quality WSAVA-compliant kibble on health outcomes. Fresh food is typically more digestible and palatable, but for an otherwise healthy dog on a quality kibble, the marginal benefit is small.' },
      { q: 'How long does fresh food last?', a: 'Sealed and frozen, 6-12 months. Thawed and refrigerated, 4-5 days. Opened at room temperature, 1-2 hours before bacterial growth becomes a concern.' },
      { q: 'Do I need a prescription?', a: 'No — fresh dog food sold through subscription brands is non-prescription. Therapeutic diets for diagnosed disease still require a veterinarian-issued prescription.' },
      { q: 'Are home-cooked recipes equivalent?', a: 'Only if formulated by a board-certified veterinary nutritionist (Diplomate ACVN). Studies of online home-cooked recipes have found over 90% are nutritionally incomplete or unbalanced.' },
    ],
    crossLinks: DOG_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'dog-food-raw',
    h1Name: 'Raw Dog Food',
    shortName: 'Raw Dog Food',
    petType: 'dog',
    subcategories: ['Freeze-dried raw', 'Frozen raw patties', 'Air-dried', 'Raw meal toppers', 'Limited ingredient raw'],
    intro: `Raw dog food remains a contested category. Major veterinary organizations — the AVMA, FDA, AAHA, CDC — recommend against feeding raw meat-based diets due to bacterial contamination risks (Salmonella, Listeria, Campylobacter, E. coli) that affect both pets and the humans handling the food. At the same time, the freeze-dried and high-pressure-pasteurized formats have reduced some of those risks, and a meaningful subset of owners report digestive and coat benefits in their individual dogs. We do not rank raw against non-raw — we rank within the raw category for owners who have already decided to feed raw and want the safest, best-formulated options. Our criteria emphasize pathogen-reduction processing (HPP or freeze-drying), AAFCO compliance statements, manufacturer recall history, and nutritional completeness.`,
    buyersGuide: `**Major veterinary organizations advise against raw diets.** This is the honest framing — the AVMA, FDA, and AAHA all explicitly recommend against feeding raw meat-based diets to companion animals due to documented pathogen risks to both pets and human household members, including children and immunocompromised individuals. If you are reading this section, we assume you have already weighed those concerns.\n\n**Choose pathogen-reduced formats.** High-pressure pasteurization (HPP) and freeze-drying both substantially reduce bacterial loads compared to fresh raw. Stella & Chewy's, Primal, and Vital Essentials all use HPP. Avoid raw products that have not been HPP-treated and are not freeze-dried.\n\n**Verify AAFCO completeness.** "Complete and balanced for all life stages" must appear on the package. Several boutique raw brands sell products labeled "for intermittent or supplemental feeding only" — these are not complete diets and feeding them as sole nutrition will cause nutritional deficiencies.\n\n**Handle like raw meat for humans.** Wash hands, food bowls, prep surfaces, and utensils after handling raw pet food. Do not allow dogs to lick faces immediately after feeding. Households with infants, immunocompromised members, or pregnant women face elevated risk and should reconsider.\n\n**Cost is high.** A 50-lb dog on commercial raw runs roughly $6-15/day depending on the brand and format.`,
    whoShouldntBuy: `Skip raw food entirely if your household includes infants, immunocompromised individuals, elderly adults, or pregnant women — the pathogen risk is not theoretical. Skip raw if your dog has known immune compromise (lupus, IMHA on immunosuppression, post-chemotherapy). Skip raw if you cannot maintain rigorous food-handling hygiene. And skip raw if your dog has an existing therapeutic-diet requirement — there are no FDA-approved therapeutic raw diets for renal, hepatic, urinary, or GI disease.`,
    faqs: [
      { q: 'Is raw dog food safer than people think?', a: 'No — the bacterial contamination risk is well-documented in peer-reviewed studies. HPP and freeze-drying reduce but do not eliminate the risk. Major veterinary organizations have not changed their recommendations against raw feeding.' },
      { q: 'Is freeze-dried raw the same as fresh raw?', a: 'Nutritionally similar, but freeze-drying meaningfully reduces bacterial load through moisture removal. It is the safer raw format from a pathogen-handling perspective.' },
      { q: 'Can I feed raw to puppies?', a: 'Puppies are more vulnerable to bacterial illness due to their developing immune systems, and large-breed puppies have specific calcium and phosphorus requirements that many raw diets fail to balance. Most veterinary nutritionists strongly advise against raw feeding for puppies.' },
      { q: 'What about salmonella for the dog?', a: 'Dogs can shed Salmonella in feces for weeks after consuming contaminated raw food — even when the dog itself shows no clinical signs. That shedding is the primary household transmission risk.' },
    ],
    crossLinks: DOG_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-food-rx',
    h1Name: 'Prescription Dog Food',
    shortName: 'Rx / Therapeutic Diets',
    petType: 'dog',
    subcategories: ['Renal (kidney)', 'Urinary (struvite/oxalate)', 'GI / IBD', 'Hepatic (liver)', 'Hydrolyzed protein', 'Low fat', 'Weight management'],
    intro: `Prescription therapeutic diets are not the same product category as maintenance dog food — they are formulated to treat diagnosed disease, fall outside standard AAFCO maintenance nutrient ranges, and require a veterinarian's prescription to dispense. The brands that lead this category — Hill's Prescription Diet, Royal Canin Veterinary Diet, and Purina Pro Plan Veterinary Diets — have the largest published clinical evidence base supporting therapeutic claims (kidney disease progression, urinary stone management, GI inflammation, hepatic function). This list is for owners whose veterinarian has already prescribed a specific therapeutic line and who want to understand the available options. We do not rank one therapeutic diet against another — the right choice is what your veterinarian prescribes for your dog's specific diagnosis.`,
    buyersGuide: `**Your vet's prescription comes first.** Therapeutic diets are not interchangeable. A renal diet is not a substitute for a urinary diet, and a low-fat GI diet is not equivalent to a hydrolyzed protein diet. Each is formulated for a specific physiologic problem and verified against clinical evidence in that population.\n\n**The "for kidney support" non-prescription products are not equivalent.** Several non-prescription brands market "kidney support" or "renal-friendly" foods. These are not the same as veterinarian-prescribed therapeutic renal diets, which feature carefully restricted phosphorus, controlled high-quality protein, omega-3 supplementation, and clinical trial data showing extended survival in dogs with chronic kidney disease.\n\n**You can refill via online pharmacies.** Chewy Pharmacy, 1-800-PetMeds, and Walmart Pet Rx can dispense prescription diets at lower cost than most veterinary clinics. Your vet must authorize the prescription. Auto-ship saves 5-10% on most brands.\n\n**Recheck your prescription annually.** Disease progression changes nutritional requirements. A dog with stage 2 chronic kidney disease may need a different therapeutic formulation than the same dog at stage 4. Annual or semi-annual recheck bloodwork should drive any diet adjustments.\n\n**Cost is real and worth budgeting.** Prescription therapeutic diets typically cost 1.5-3x as much as a comparable maintenance diet. Pet insurance with a wellness rider sometimes covers prescription diets; standard accident-and-illness policies generally do not.`,
    whoShouldntBuy: `Skip this category if your dog has not been diagnosed with a condition that requires therapeutic nutrition. Feeding a healthy dog a renal diet long-term can cause inappropriate protein restriction; feeding a healthy dog a urinary diet can cause unnecessary mineral imbalances. These are medical products, not premium versions of maintenance food.`,
    faqs: [
      { q: 'Why do prescription diets cost more?', a: 'Therapeutic diets require more clinical evidence, more nutrient-specific formulation, more controlled ingredient sourcing, and lower production volumes than mass-market maintenance diets.' },
      { q: 'Can I make a homemade equivalent?', a: 'Only if formulated by a board-certified veterinary nutritionist (Diplomate ACVN) who has reviewed your dog\'s specific bloodwork. BalanceIT and PetDiets.com offer recipe formulation services from credentialed nutritionists.' },
      { q: 'How long until I see improvement?', a: 'Most therapeutic diets show measurable bloodwork or symptom changes within 4-8 weeks. Renal diets typically show improvement in BUN and creatinine within 4-6 weeks; urinary diets show urine pH and crystal changes within 2-4 weeks.' },
      { q: 'Can I switch brands of prescription diet?', a: 'Only with your veterinarian\'s guidance — Hill\'s k/d and Royal Canin Renal Support are similar but not identical, and the right choice depends on bloodwork values, body condition, and tolerance.' },
    ],
    crossLinks: DOG_CROSSLINKS,
    preferredVendors: ['chewy'],
  },
  {
    slug: 'dog-beds',
    h1Name: 'Dog Beds',
    shortName: 'Dog Beds',
    petType: 'dog',
    subcategories: ['Orthopedic foam', 'Memory foam', 'Bolster / donut', 'Elevated cots', 'Heated beds', 'Cooling beds', 'Crate-fit beds', 'Outdoor beds'],
    intro: `Dog beds matter more than most owners realize: dogs sleep 12-14 hours per day, and for large breeds and seniors with osteoarthritis, the bed quality directly affects pain levels, mobility, and quality of life. The published clinical literature on dog beds is thin — only one bed manufacturer (Big Barker) has published a peer-reviewed randomized trial. Outside of that, the meaningful selection criteria are foam quality (density and thickness), warranty length, cover removability and washability, durability against chewers, and appropriate sizing for the dog's adult weight and joint condition. We rank by foam credibility, warranty terms, washability, and price-per-year of expected life.`,
    buyersGuide: `**Big Barker is the only bed with published clinical data.** A 2018 study in the American Journal of Veterinary Research found large dogs with arthritis sleeping on Big Barker beds showed significant reductions in pain, stiffness, and lameness compared to dogs sleeping on standard beds. The 7-inch therapeutic foam is American-manufactured and comes with a 10-year no-flatten warranty. The price is high — $250-400 — but for large breed dogs with diagnosed orthopedic disease, the clinical evidence justifies it.\n\n**Foam density and thickness, not "memory foam" marketing.** "Memory foam" describes a foam type, not a quality grade. A cheap 2-inch memory foam mat will flatten within months. Look for foam density specifications (high-density foam runs 3-5 pounds per cubic foot) and overall thickness of at least 4 inches for medium breeds and 6 inches for large breeds.\n\n**Removable, washable covers are non-negotiable.** Dog beds get dirty fast — saliva, dander, urine accidents, mud. A non-removable cover will smell within months. Look for full-zipper covers, machine-washable on a gentle cycle.\n\n**Size for the adult dog, not the current dog.** Puppies grow. Buy the bed size that fits the dog's projected adult length nose-to-tail plus a few inches. Most beds list weight ranges that closely match recommended dog weight categories.\n\n**Chewers need different beds.** Heavy chewers will destroy any foam bed within days. The realistic options are elevated cot-style beds (Kuranda, K9 Ballistics) or chew-proof covers (Molly Mutt duvet system with replaceable insert). Do not buy a $300 orthopedic bed for a known chewer.`,
    whoShouldntBuy: `Skip the premium orthopedic foam beds if your dog is a known heavy chewer — you will spend $300 and have a destroyed bed within a week. Skip donut/bolster beds for dogs who actively dislike enclosed sleeping spaces. Skip heated beds for short-coated dogs in warm climates — heated beds are designed for cold-climate seniors with poor thermoregulation, not for general comfort.`,
    faqs: [
      { q: 'Are orthopedic beds worth it for healthy dogs?', a: 'For large breeds at high orthopedic risk (Labradors, Goldens, German Shepherds, Mastiffs) or any dog over 7 years old, yes — preventive joint support is reasonable. For small adult dogs in good health, a quality non-orthopedic bed is sufficient.' },
      { q: 'How long should a dog bed last?', a: 'A quality bed (>$120) with high-density foam should last 3-5 years before noticeable flattening. Budget beds (<$50) typically last 12-18 months.' },
      { q: 'What size bed for my dog?', a: 'Measure your dog from nose to tail tip, then add 8-12 inches. The bed should accommodate the dog in a stretched-out side-lying position without limbs hanging off.' },
      { q: 'How do I wash a dog bed?', a: 'Remove the cover (most modern beds have full zippers). Machine wash cold on gentle, tumble dry low or air dry. For the foam itself, spot clean with mild detergent — never submerge foam in water.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/health/dog-arthritis', label: 'Dog arthritis guide on Dog.com' },
    ],
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-crates',
    h1Name: 'Dog Crates',
    shortName: 'Dog Crates',
    petType: 'dog',
    subcategories: ['Wire crates', 'Plastic / airline-approved', 'Soft-sided travel', 'Heavy-duty escape-proof', 'Furniture-style', 'Double-door'],
    intro: `Dog crates serve different functions — house-training, travel, escape-proof confinement for separation anxiety, airline travel — and the right crate depends on what you are solving for. The biggest sizing mistake owners make is buying a crate that is too large during the puppy phase, which defeats the purpose of crate training: most puppies will not soil a crate sized to allow only standing, turning, and lying down. Wire crates with dividers solve this by allowing you to expand the usable space as the puppy grows. We rank by build quality, escape resistance, ventilation, ease of cleaning, and airline compliance for travel-rated crates.`,
    buyersGuide: `**Wire crates are best for home use.** Wire crates offer the best ventilation, easiest cleaning (removable plastic pan), and most flexible sizing through divider panels. MidWest iCrate and Frisco are the dominant value picks; both are durable enough for typical use and inexpensive enough to size up rather than out-grow.\n\n**Plastic crates are required for most air travel.** Airlines require IATA-compliant hard-sided kennels with ventilation on at least four sides, locking metal hardware, and adequate space for the dog to stand, turn, and lie down naturally. Petmate Sky Kennel and Ruff Tough Kennels are the standards.\n\n**Heavy-duty crates for escape-prone dogs.** Dogs with severe separation anxiety can damage themselves trying to escape standard wire or plastic crates. Impact Case and Gunner kennels are the heavy-duty options — welded steel construction, escape-proof latching, and significantly higher cost ($500-1,500).\n\n**Crate-train, do not crate-cage.** A crate used as punishment or for 10-hour shifts becomes a source of anxiety, not safety. The crate should be associated with quiet rest, food, chews, and short positive sessions. Crate training is a process — see crate-training guides on Dog.com.\n\n**Size the crate for the adult dog, but use a divider during puppy phase.** Wire crates with divider panels let you start with a small interior and expand it as the puppy grows. This is the standard recommendation from positive-reinforcement trainers because puppies will avoid soiling a properly-sized space.`,
    whoShouldntBuy: `If you are using a crate to manage a behavior problem you have not diagnosed, you are using the wrong tool. Severe separation anxiety, noise phobia, and barrier frustration often get worse with crating rather than better. Consult a certified veterinary behaviorist (DACVB) before crating a dog with diagnosed anxiety disorders. Crating is a management tool, not a treatment.`,
    faqs: [
      { q: 'What size crate does my dog need?', a: 'The dog should be able to stand fully, turn around without crouching, and lie down with limbs extended. Most manufacturers list weight and length ranges that match standard breed sizes.' },
      { q: 'How long can a dog be crated?', a: 'Adult dogs: maximum 4-6 hours during the day. Puppies under 6 months: maximum 2-3 hours during the day. Overnight crating is acceptable for any age. Crating for 8+ hours during the day is excessive and counterproductive.' },
      { q: 'Are wire crates safe for puppies?', a: 'Yes, with proper supervision. Use a divider to size the interior appropriately for the puppy\'s current size — this leverages the natural reluctance to soil sleeping space.' },
      { q: 'My dog escapes the crate — what now?', a: 'For Houdini-level escape artists, the realistic options are heavy-duty welded-steel crates (Impact, Gunner) or addressing the underlying anxiety with a certified behaviorist before continuing crate use.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/training/crate-training', label: 'Crate training guide on Dog.com' },
    ],
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-leashes',
    h1Name: 'Dog Leashes',
    shortName: 'Dog Leashes',
    petType: 'dog',
    subcategories: ['Standard 6-foot', 'Hands-free / running', 'Long-line training', 'Retractable', 'Reflective night', 'Multi-dog couplers', 'Heavy-duty for pullers'],
    intro: `The right leash depends on what you are doing — neighborhood walking, leash-reactive training, running, urban transit. The 6-foot fixed-length leash remains the default for most walking situations because it gives the dog enough movement freedom without surrendering handler control. Retractable leashes are widely sold but discouraged by most positive-reinforcement trainers for reasons covered in detail below. Materials (biothane, nylon, rope) trade off durability, weight, and weather resistance. We rank by build quality, hardware grade, handler comfort, and fit for the intended use case.`,
    buyersGuide: `**6-foot fixed leashes are the default for good reason.** Most municipal leash laws specify a maximum leash length of 6-8 feet. A fixed 6-foot leash gives the dog enough freedom to sniff and explore at the curb without ambiguity for the handler about where the dog actually is.\n\n**Avoid retractable leashes for most situations.** Retractable leashes — the Flexi-style cord retractors — get criticized by trainers because they teach dogs that pulling extends the leash (the opposite of loose-leash training), can cause friction burns to handlers if grabbed mid-deployment, and frequently fail to lock under sudden tension. They have a narrow legitimate use case for recall practice in open spaces, but for daily walks they actively interfere with leash training.\n\n**Biothane and BioThane-style coated webbing.** For dogs who swim, get muddy, or walk in rainy climates, BioThane (a coated polyester webbing) is significantly easier to clean than nylon or leather. Mendota Pet and Wilderdog both make excellent biothane options.\n\n**Hardware grade matters for big dogs.** A 100-lb dog hitting the end of a leash at speed generates several hundred pounds of force. Cheap zinc-alloy snap hooks fail. Look for marine-grade stainless steel snap hooks (Trident-style or Aluma-Light) on any leash used for medium-to-large breeds.\n\n**Long-line training leashes (15-30 feet) are useful.** For recall training in safe open spaces, a long line lets you maintain a connection while practicing distance work. Use a Y-front harness, not a collar, with long lines — sudden tension on a collar from a fast-moving dog can cause cervical injury.`,
    whoShouldntBuy: `Skip retractable leashes for any walk in pedestrian traffic — including suburban sidewalks. The combination of slow lock response and unclear leash position creates dog-on-dog conflict risk. Skip rope-style leashes for puller dogs — rope concentrates force at narrow contact points and causes hand burns. Skip leather leashes if you have not committed to leather conditioning every 4-6 weeks.`,
    faqs: [
      { q: 'Are retractable leashes ever okay?', a: 'For recall practice in safe open spaces (large yards, empty fields, beaches), they can work. For neighborhood walks, leash-reactive training, or any pedestrian environment, they introduce more problems than they solve.' },
      { q: 'What\'s the best leash for a puller?', a: 'A leash will not fix pulling — only training does. For a puller in the meantime, a 4-foot biothane leash with a marine-grade snap hook gives you the most handler control. Pair with a front-clip harness (see Dog Harnesses) and loose-leash training fundamentals.' },
      { q: 'Hands-free leash for running?', a: 'A waist-belt leash with shock-absorbing bungee section (Ruffwear Roamer, Stunt Puppy Stunt Runner) is the standard runner option. Use a harness, not a collar, for connection.' },
      { q: 'How long should a long line be?', a: '15-30 feet for recall practice. Longer than 30 feet becomes tangle-prone and hard to manage cleanly.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/training/loose-leash-walking', label: 'Loose-leash walking guide on Dog.com' },
    ],
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'dog-harnesses',
    h1Name: 'Dog Harnesses',
    shortName: 'Dog Harnesses',
    petType: 'dog',
    subcategories: ['Front-clip (no-pull)', 'Y-front / step-in', 'Tactical / handle', 'Car-restraint rated', 'Running / hiking', 'Brachycephalic-fit', 'Reflective night'],
    intro: `Harnesses have largely replaced collars as the default attachment point for walks — they distribute pulling force across the chest rather than the throat, which matters most for brachycephalic breeds (French Bulldogs, Pugs, Bostons), small breeds prone to tracheal collapse, and any dog that pulls on leash. The right harness depends on what you are solving: no-pull training, daily walks, vehicle restraint, hiking. Y-front geometry (which leaves the shoulder joint free) is the orthopedically-preferred design for active dogs. We rank by fit, build quality, no-pull effectiveness, and orthopedic geometry.`,
    buyersGuide: `**Y-front geometry preserves shoulder mechanics.** The straps should form a "Y" across the chest with one strap descending vertically from the throat between the front legs, not a horizontal strap that crosses the shoulder joint. Horizontal-strap designs (common in cheap harnesses) restrict shoulder rotation and can contribute to gait abnormalities over months of daily use. Ruffwear Front Range, Hurtta, Julius-K9, and Perfect Fit all use Y-front geometry.\n\n**Front-clip is the standard for no-pull training.** A leash clipped to the front of the chest redirects the dog's forward momentum back toward the handler when the dog pulls — making pulling less reinforcing. Front-clip harnesses (PetSafe Easy Walk, Balance Harness) are training tools, not permanent solutions. The goal is to graduate to back-clip walking once the dog has learned loose-leash mechanics.\n\n**Brachycephalic breeds need harnesses, not collars.** Any pressure on the trachea is dangerous for short-faced dogs. A well-fitted Y-front harness is non-negotiable for French Bulldogs, Pugs, Bostons, Bulldogs, and similar breeds.\n\n**Vehicle restraint requires crash-tested harnesses.** Most "car safety" harnesses are not crash-tested. Sleepypod Clickit Sport is the most widely independently crash-tested option (tested by Center for Pet Safety). Cheap car harnesses can break in collision and cause injury.\n\n**Fit fingers, not estimates.** A properly-fitted harness lets you fit two fingers (flat, side-by-side) under each strap. Tighter restricts breathing and motion; looser allows the dog to back out of the harness during a startle reaction.`,
    whoShouldntBuy: `Skip cheap horizontal-strap harnesses (the "fashion harness" category, often $10-20). The shoulder restriction trade-off is not worth the savings. Skip car restraints that are not independently crash-tested. Skip front-clip harnesses for dogs who have already mastered loose-leash walking — front clips can contribute to gait imbalances if used long-term on dogs who do not need the redirection.`,
    faqs: [
      { q: 'Does a no-pull harness fix pulling?', a: 'It reduces the reinforcement value of pulling, making training easier. It does not, by itself, teach loose-leash walking. Most dogs revert to pulling within days if the harness is the only intervention.' },
      { q: 'Harness or collar for daily walks?', a: 'For most dogs, a Y-front harness is the better daily-walk option. Collars are appropriate for ID tags but not as the primary leash attachment for any dog that pulls or any brachycephalic breed.' },
      { q: 'How do I measure for fit?', a: 'Girth: just behind the front legs, the widest part of the rib cage. Neck: at the base of the neck where a collar would sit. Chest depth: from the withers to the sternum. Manufacturer size charts will list these measurements for each size.' },
      { q: 'Are step-in harnesses good?', a: 'Step-in (the dog steps over a flat U-shape that buckles on the back) is comfortable for dogs who dislike overhead harnesses but provides less torso coverage and is easier to escape from. Reasonable for calm, well-leash-trained dogs.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/health/brachycephalic-syndrome', label: 'Brachycephalic syndrome on Dog.com' },
    ],
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-toys',
    h1Name: 'Dog Toys',
    shortName: 'Dog Toys',
    petType: 'dog',
    subcategories: ['Chew toys', 'Puzzle / enrichment', 'Fetch', 'Plush squeakers', 'Tug', 'Frozen food puzzles', 'Tough-chewer rated', 'Senior gentle'],
    intro: `Toys are not optional enrichment — for most dogs, daily mental stimulation through chew, puzzle, and fetch toys directly reduces destructive behavior, separation anxiety, and reactive arousal. The market is enormous and the quality range is dramatic. The two failure modes that matter most are choke and obstruction risk (small or breakable plastic toys, ingestable squeaker fragments) and dental damage from inappropriately hard chews (deer antlers, real bones, very hard nylon). We rank by safety, durability against the target chewer level, enrichment value, and price-per-week of use.`,
    buyersGuide: `**Match toy hardness to dental hardness.** The "thumbnail test" used by veterinary dentists: if you cannot make a slight indentation in the chew with your thumbnail, the chew is too hard and likely to fracture teeth. This rules out deer antlers, raw bones, marrow bones, and very hard nylon chews like cheap Nylabone replicas. The most-fractured premolar in adult dogs is the carnassial (upper fourth premolar), and a single fracture leads to $1,500-3,000 in extraction or root canal cost. Kong Classic, Goughnuts, and West Paw Zogoflex Hurley are durable without exceeding the thumbnail test.\n\n**Stuffed Kongs as separation-anxiety tools.** A Kong Classic stuffed with peanut butter or wet food and frozen is the standard cheap enrichment intervention for low-grade separation anxiety. The 20-40 minutes of focused licking and chewing is a measurable calming activity in the published behavior literature.\n\n**Puzzle toys for high-drive dogs.** Outward Hound and Nina Ottosson puzzle feeders provide cognitive enrichment that 10 minutes of fetch does not. Daily puzzle use measurably reduces destructive behavior in working-breed dogs (Border Collies, German Shepherds, Australian Shepherds).\n\n**Squeakers are choke risks if your dog disembowels toys.** If your dog opens plush toys to extract the squeaker, do not buy plush toys with squeakers. Use Kongs and rubber toys instead. The squeaker module is a small object large enough to occlude the esophagus.\n\n**Rotate, don't accumulate.** Dogs habituate to toys quickly. A rotation of 4-6 toys with weekly swap-outs maintains interest better than a pile of 30 toys all available all the time.`,
    whoShouldntBuy: `Skip antlers and raw bones — the dental-fracture risk is documented and not worth the price. Skip plush toys for any dog who has ever extracted and swallowed a squeaker. Skip tennis balls as a daily chew toy — the abrasive felt wears down enamel over months of daily chewing. Tennis balls are fine for fetch but should be removed when the play session ends.`,
    faqs: [
      { q: 'Are antlers safe for chewing?', a: 'No — most veterinary dentists explicitly recommend against antlers because they fail the thumbnail test and cause carnassial tooth fractures. Stick to softer, rubberier chews.' },
      { q: 'Tennis balls as toys?', a: 'Fine for short fetch sessions, not for unsupervised chewing. The felt is mildly abrasive to dental enamel with daily chewing exposure.' },
      { q: 'Kong stuffing ideas?', a: 'Peanut butter (xylitol-free), wet dog food, plain canned pumpkin, plain yogurt. Freeze for 4-8 hours to extend chewing time. Limit calorie-dense stuffings to 10% of daily intake.' },
      { q: 'When to throw a toy away?', a: 'Any time the toy develops sharp edges, exposed stuffing, or pieces small enough to swallow. Sooner if your dog is an aggressive chewer.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/health/dog-dental-care', label: 'Dental care on Dog.com' },
    ],
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'dog-dental',
    h1Name: 'Dog Dental Care',
    shortName: 'Dental Chews & Toothbrushes',
    petType: 'dog',
    subcategories: ['VOHC-accepted chews', 'Toothbrushes', 'Toothpaste (enzymatic)', 'Water additives', 'Dental wipes', 'Dental diets'],
    intro: `Periodontal disease affects more than 80% of dogs over age three and is one of the most undertreated chronic conditions in companion animals. The gold standard is professional dental cleaning under anesthesia plus daily home brushing — but realistically, most owners do not brush, and the practical question is which adjunct interventions actually work. The Veterinary Oral Health Council (VOHC) awards a Seal of Acceptance to products that have demonstrated meaningful tartar and plaque reduction in controlled trials. The VOHC list is the only credible third-party verification in this category. We use it as the primary filter and rank by clinical evidence, palatability, and per-day cost.`,
    buyersGuide: `**Daily brushing is the only intervention with strong evidence.** Toothbrushing with enzymatic toothpaste, performed daily, is the most-evidence-supported home dental intervention for dogs. Less than 7% of dog owners actually do it, which is why adjunct interventions matter.\n\n**The VOHC seal is the credible filter.** Products with the VOHC Accepted Plaque or Tartar seal have demonstrated measurable reductions in clinical trials. The list is publicly available at vohc.org. Greenies, OraVet, Virbac C.E.T. enzymatic chews, and Purina Pro Plan Dental Chewz all carry VOHC acceptance.\n\n**Avoid hard chews marketed for dental.** Cow hooves, marrow bones, and hard nylon "dental" chews fail the thumbnail test and cause tooth fractures. The dental benefit (mechanical scraping) is dramatically outweighed by the fracture risk.\n\n**Water additives are weak evidence.** Several water additives carry VOHC acceptance, but the clinical effect size is small compared to brushing or VOHC-accepted chews. They are reasonable as a small additional measure for owners who brush; they should not replace brushing.\n\n**Annual professional cleaning under anesthesia.** Home care reduces but does not eliminate the need for professional dental cleaning. Anesthesia-free dental cleaning ("scaling without sedation") is widely available at groomers but carries no evidence of meaningful subgingival cleaning — the part that actually matters for periodontal disease. The AVMA explicitly recommends against it.`,
    whoShouldntBuy: `Skip anesthesia-free dental cleaning services — they look like a cleaning but provide cosmetic-only benefit and do not reach the subgingival space where periodontal disease develops. Skip antlers, hooves, and hard chews marketed for "dental health" — the fracture risk is real and the dental benefit is small. Skip water additives marketed without the VOHC seal — the additive market is full of products with no published efficacy data.`,
    faqs: [
      { q: 'How do I brush a dog\'s teeth?', a: 'Start with finger-brush exposure for a week (touching gums with enzymatic toothpaste on a finger), then introduce a soft pet toothbrush. Focus on the outer surfaces of the upper premolars and canines — those are highest-risk sites for tartar.' },
      { q: 'Why is human toothpaste dangerous?', a: 'Human toothpaste contains fluoride and often xylitol, both of which are toxic to dogs at ingestion-level doses. Use only enzymatic toothpaste formulated for dogs.' },
      { q: 'What does VOHC mean?', a: 'Veterinary Oral Health Council — a panel of veterinary dental specialists that reviews submitted clinical trial data and awards an "Accepted" seal to products that meet pre-specified thresholds for tartar or plaque reduction.' },
      { q: 'How often does my dog need a professional cleaning?', a: 'Most dogs need professional dental cleaning under anesthesia every 1-2 years starting around age 2-3. Small breeds (Yorkies, Chihuahuas, Italian Greyhounds) often need cleaning annually due to crowded dentition and elevated periodontal disease risk.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/health/dog-dental-care', label: 'Full dental care guide on Dog.com' },
    ],
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'dog-joint-supplements',
    h1Name: 'Dog Joint Supplements',
    shortName: 'Joint Supplements',
    petType: 'dog',
    subcategories: ['Glucosamine + chondroitin', 'Omega-3 (EPA/DHA)', 'Green-lipped mussel', 'MSM blends', 'Hip-and-joint chews', 'Veterinary prescription nutraceuticals'],
    intro: `Joint supplements are a $400M+ category for dogs with mixed evidence. The strongest published support is for omega-3 fatty acids (EPA + DHA at therapeutic doses) and green-lipped mussel; the evidence for glucosamine and chondroitin is positive but smaller-effect than the marketing suggests. The category is also under-regulated — the supplement industry is not subject to the same purity testing as pharmaceuticals, and several independent analyses have found substantial label-vs-content discrepancies in joint supplement products. We rank by evidence base, NASC quality seal, EPA/DHA dose where applicable, and per-day cost.`,
    buyersGuide: `**Omega-3 has the strongest evidence.** Multiple peer-reviewed trials have shown that EPA + DHA at therapeutic doses (50-100mg combined per kg body weight per day) measurably reduces lameness scores in dogs with osteoarthritis. The effect size is comparable to NSAIDs for mild-to-moderate arthritis. Therapeutic diets that include this dose (Hill\'s j/d, Royal Canin Mobility) are the most-validated way to deliver it; supplement-only delivery requires high-quality fish oil at correct dose.\n\n**Glucosamine and chondroitin: smaller effect.** The published evidence shows modest benefit at best, with effect sizes well below NSAIDs. Glucosamine and chondroitin are likely safe and may help some dogs, but they should not be the primary intervention for diagnosed osteoarthritis.\n\n**Green-lipped mussel (Perna canaliculus).** A New Zealand mussel extract with documented anti-inflammatory activity. Smaller evidence base than omega-3 but consistently positive for joint and mobility outcomes. Antinol and several Cosequin variants include green-lipped mussel.\n\n**Look for the NASC Quality Seal.** The National Animal Supplement Council (NASC) requires GMP manufacturing, label accuracy, and adverse-event reporting. The seal is the closest thing to third-party quality verification in this unregulated category. Cosequin, Dasuquin, Nutramax, and most major brands carry NASC seals.\n\n**Talk to your vet about Adequan.** For dogs with diagnosed osteoarthritis, polysulfated glycosaminoglycan (Adequan, given by injection) has stronger published evidence than oral supplements. It requires a prescription and a series of injections over 4-8 weeks but is genuinely disease-modifying in some dogs.`,
    whoShouldntBuy: `Skip joint supplements as a replacement for veterinary diagnosis. Limping in a dog has many causes — cruciate disease, hip dysplasia, intervertebral disc disease, immune-mediated polyarthritis, soft-tissue trauma — and several require treatments unrelated to supplements. Get a diagnosis first. Skip cheap unbranded supplements without the NASC seal — the label-vs-content discrepancy in this category is documented and meaningful.`,
    faqs: [
      { q: 'When should I start a joint supplement?', a: 'For breeds at high orthopedic risk (Labradors, Goldens, German Shepherds, large/giant breeds), some veterinarians recommend starting omega-3 supplementation around age 4-5 as preventive support. For diagnosed osteoarthritis, supplements are an adjunct to veterinarian-prescribed treatment.' },
      { q: 'How long until I see improvement?', a: 'Omega-3: 4-6 weeks at therapeutic dose. Glucosamine/chondroitin: 8-12 weeks. If no measurable improvement in lameness or activity tolerance after 12 weeks, the supplement is not working for that dog.' },
      { q: 'Can I use human fish oil?', a: 'Yes, with veterinary guidance on dose. Most human fish oil capsules contain 180-300mg combined EPA+DHA per capsule — calculate the dose for your dog\'s weight. Avoid flavored or sweetened products.' },
      { q: 'What about CBD for joints?', a: 'The published evidence is preliminary but increasingly positive (Cornell, Colorado State trials). CBD for dogs remains a gray-market regulatory category in the U.S. — quality varies widely. If you try it, look for NASC-certified products with published certificates of analysis.' },
    ],
    crossLinks: [
      ...DOG_CROSSLINKS,
      { site: 'dog.com', href: 'https://dog.com/health/dog-arthritis', label: 'Arthritis management on Dog.com' },
    ],
    preferredVendors: ['chewy', 'amazon'],
  },
  // ─── CAT ────────────────────────────────────────────────────────────────────
  {
    slug: 'cat-food',
    h1Name: 'Cat Food',
    shortName: 'Cat Food',
    petType: 'cat',
    subcategories: ['Dry kibble', 'Wet / canned', 'Kitten formulas', 'Senior formulas', 'Indoor formulas', 'Hairball formulas', 'Urinary support', 'Prescription'],
    intro: `Cats are obligate carnivores with nutritional requirements that differ meaningfully from dogs — they require dietary taurine, arachidonic acid, and pre-formed vitamin A from animal sources, and they cannot efficiently convert plant-source nutrients to active forms. The WSAVA Global Nutrition Guidelines apply with equal force in cat nutrition: brands that employ board-certified ACVN nutritionists, run AAFCO feeding trials, and own their manufacturing are the most-validated choice. The most consequential decision in cat nutrition is dry-vs-wet — driven by the observation that cats are evolved desert hunters with low thirst drive, and dry-only diets contribute to chronic subclinical dehydration in many cats. We rank by formulation credentials, life-stage appropriateness, and moisture content.`,
    buyersGuide: `**Wet food is the default recommendation for most cats.** The cat-feeding consensus among feline-specialty veterinarians (AAFP) increasingly favors wet food or a wet-and-dry combination because of chronic dehydration risk in dry-only diets. Cats fed only dry food consume measurably less total water than cats on wet diets even with abundant fresh water available.\n\n**WSAVA brands are the same five.** Hill\'s, Royal Canin, Purina Pro Plan, Iams, and Eukanuba meet every WSAVA recommendation in cat nutrition just as in dog nutrition. Royal Canin\'s breed-specific lines (Persian, Maine Coon, Sphynx) are well-formulated for the orofacial differences of those breeds.\n\n**Kitten nutrition matters more than adult.** Kittens grow rapidly through 12 months and need higher protein, higher caloric density, and DHA supplementation for cognitive development. Feed a kitten or "all life stages" formula until at least 12 months of age (longer for large-breed Maine Coons and Ragdolls).\n\n**Urinary health is largely a hydration question.** Cats with a history of urinary stones, FLUTD, or feline interstitial cystitis benefit substantially from increased dietary moisture. Wet food, drinking fountains, and prescription urinary diets all contribute. Dry-only diets are associated with elevated urine specific gravity and increased crystallization risk.\n\n**Senior cats: high-quality protein matters.** The old recommendation to reduce protein in senior cats is now considered outdated. Cats over 10 years lose muscle mass faster on protein-restricted diets. Look for senior formulas that maintain protein percentage and adjust other nutrients (phosphorus restriction for early kidney disease).`,
    whoShouldntBuy: `Skip this category if your cat has been prescribed a therapeutic diet for diagnosed kidney disease, urinary stones, hyperthyroidism, hepatic lipidosis, IBD, or food allergies. The therapeutic equivalents (Hill\'s k/d, Royal Canin Renal Support, Hill\'s y/d, Royal Canin Hydrolyzed Protein) are formulated for those specific conditions and are not interchangeable with maintenance diets. Talk to your vet first.`,
    faqs: [
      { q: 'Wet or dry — which is better?', a: 'For most cats, wet food or a wet-and-dry combination is preferred because cats have low thirst drive and chronic dehydration contributes to urinary and kidney disease. Dry food is acceptable when paired with reliable water intake.' },
      { q: 'Is grain-free necessary?', a: 'No. Cat food allergies are rare (under 1% of cats), and "grain-free" is a marketing positioning rather than a clinical category. Cats with diagnosed food allergies often need hydrolyzed protein or novel-protein prescription diets — not grain-free maintenance diets.' },
      { q: 'How much should I feed?', a: 'Caloric needs depend on weight, body condition, and activity. An average 10-lb indoor adult cat needs roughly 200 calories per day. Most cat food labels list caloric density per cup or can — calculate and adjust by body condition score.' },
      { q: 'Can I free-feed dry food?', a: 'Free-feeding contributes to feline obesity, which is the most common nutritional disorder in domestic cats. Scheduled meals (2-3x daily) better support healthy weight and let you notice changes in appetite.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'cat-litter',
    h1Name: 'Cat Litter',
    shortName: 'Cat Litter',
    petType: 'cat',
    subcategories: ['Clumping clay', 'Crystal / silica', 'Pine / wood pellet', 'Corn / plant-based', 'Low-dust / asthma-friendly', 'Multi-cat formulas', 'Unscented'],
    intro: `Litter choice has more impact on cat behavior than most owners realize. Inappropriate elimination is the leading reason cats are surrendered to shelters, and litter aversion accounts for a substantial share of those cases. The published feline-behavior literature consistently identifies unscented, fine-grained, clumping clay as the preferred substrate for most cats — the texture closely matches the soft sandy substrates cats prefer in natural habitats, and the absence of fragrances avoids irritating the highly sensitive feline olfactory system. We rank by clumping performance, dust generation, odor control, and cat preference data where available.`,
    buyersGuide: `**Unscented, fine-grained clumping clay is the default.** Behavior research (Galaxy, Buffington) consistently shows cats prefer unscented over scented and fine-grained over coarse. Dr. Elsey\'s Ultra Premium, Tidy Cats Free & Clean Unscented, and World\'s Best Cat Litter (corn-based) are the consistently top-rated options.\n\n**Two boxes per cat, plus one.** The standard behavioral recommendation: number of litter boxes equals number of cats plus one. Multiple-cat households with too few boxes account for a large share of inappropriate elimination cases.\n\n**Dust is a real respiratory concern.** Cats with feline asthma and elderly cats with subclinical respiratory disease can be significantly worsened by dusty litter. Crystal litters and low-dust clay formulations matter for these cats. Humans with asthma in the household benefit equally.\n\n**Plant-based litters: trade-offs.** Pine, corn, and wheat litters reduce clay-dust exposure and are flushable in some formulations. Trade-offs: less effective odor control than clay, often higher cost, and some cats reject the larger pellet texture.\n\n**Scoop daily, full-change weekly.** Daily scooping and weekly full-litter changes are the standard. The litter box should be cleaned with mild unscented soap (not bleach or strongly fragranced cleaners — cats avoid fragranced boxes).\n\n**Box size matters.** Most commercial litter boxes are too small. The general guideline: 1.5x the length of the cat from nose to tail base. Storage tote boxes (without lids) often work better than commercial boxes for large cats.`,
    whoShouldntBuy: `Skip strongly-fragranced litters — they smell pleasant to humans but contribute to litter aversion in cats. Skip dusty clay litters if any household member (human or cat) has respiratory disease. Skip covered or self-cleaning litter boxes if your cat has a known history of inappropriate elimination — those changes often worsen the behavioral problem.`,
    faqs: [
      { q: 'Is clay litter dangerous for cats?', a: 'Standard bentonite clay litter is safe for cats. Some plant-based competitors market against clay with safety claims that lack strong evidence. The legitimate concerns are dust exposure for asthmatic cats and ingestion in young kittens learning to use the box (use a non-clumping litter for kittens under 8 weeks).' },
      { q: 'Why does my cat go outside the box?', a: 'Inappropriate elimination has medical and behavioral causes. Rule out urinary tract disease, kidney disease, and pain first (always a vet visit). Then consider box number, box location, box size, litter texture, and household stressors. Most cases respond to environmental adjustments.' },
      { q: 'Are self-cleaning litter boxes worth it?', a: 'Worth it for owner convenience if your cat accepts them. Many cats reject the motor noise and movement. Introduce gradually. The Litter-Robot is the most common, with mixed cat-acceptance reports.' },
      { q: 'How often should I change litter?', a: 'Daily scooping. Full replacement weekly for clumping clay (more often for crystal and plant-based litters that hold less moisture). Wash the box monthly with mild unscented soap.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'cat-beds',
    h1Name: 'Cat Beds',
    shortName: 'Cat Beds',
    petType: 'cat',
    subcategories: ['Bolster / donut', 'Cave beds', 'Heated beds', 'Window perches', 'Wall-mounted shelves', 'Cube / hide beds'],
    intro: `Cat beds are largely a comfort and territorial category. Unlike dogs, cats select sleeping locations based on temperature, height, and visibility — most cats prefer warm, elevated, partially-enclosed spaces with clear sightlines to their environment. The published feline-environmental literature (Buffington's "Indoor Cat" framework) emphasizes vertical space and choice as more important than expensive single-bed purchases. We rank by cat-acceptance reports, warmth, washability, and practical fit in typical home environments.`,
    buyersGuide: `**Cats want choice.** A single expensive cat bed in the living room is less effective than 3-4 inexpensive options distributed across rooms, heights, and temperature zones. Most cats rotate among preferred resting spots throughout the day in response to sunlight, household activity, and temperature.\n\n**Warmth matters.** Cats prefer temperatures of 86-97°F for sleeping — substantially warmer than typical room temperature. Heated beds (low-wattage K&H pet heated mats, Aspen Pet warmer beds) are particularly valued by senior cats and cats in cool households.\n\n**Elevation and visibility.** Window perches and cat trees often outperform floor-level beds because they satisfy both warmth (sunlight) and visual access. Wall-mounted shelves and cat highways extend territory upward in apartment environments.\n\n**Cave beds for anxious cats.** Cats with environmental anxiety or in multi-cat households benefit from enclosed cave-style beds (often dome-shaped or felted wool) that provide visual seclusion. The same cats may reject open bolster beds.\n\n**Washability matters more than for dogs.** Cats groom obsessively, leaving hair and saliva. Removable, machine-washable covers are non-negotiable for daily-used beds.`,
    whoShouldntBuy: `Skip expensive single beds in households with multiple cats — territorial dynamics often mean only the highest-ranked cat uses any single bed. Skip heated beds in warm climates with already-warm households — heat preference assumes cool environment. Skip elaborate cat trees if your cat ignores cat trees (many cats do; sunny windowsills win every time).`,
    faqs: [
      { q: 'Why does my cat ignore the bed I bought?', a: 'Cats select sleeping locations by temperature, height, visibility, and texture — and they have strong preferences. The bed you bought may be in the wrong location (too cool, too low, too exposed) or have the wrong texture. Try moving it before buying another.' },
      { q: 'Heated bed safety?', a: 'Quality heated cat beds (K&H, Aspen) use low-wattage heating elements that warm the bed only when the cat is on it, with built-in temperature limits. Avoid heating pads not designed for pets (burn risk).' },
      { q: 'Where should I put cat beds?', a: 'High, warm, with clear sightlines, away from busy household traffic. Windowsills, bookshelf tops, and bedrooms are typical favorites.' },
      { q: 'Are cat trees worth it?', a: 'For many cats, yes — they provide elevation, scratching surfaces, and observation perches. For other cats, a sunny window perch wins. Buy the smaller option first to gauge interest before investing in a multi-level tree.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'cat-scratchers',
    h1Name: 'Cat Scratchers',
    shortName: 'Cat Scratchers',
    petType: 'cat',
    subcategories: ['Vertical posts', 'Horizontal pads', 'Inclined ramps', 'Cardboard', 'Sisal rope', 'Cat trees with scratchers', 'Door-mounted'],
    intro: `Scratching is a normal, healthy cat behavior — it sheds dead nail sheath, marks territory visually and chemically (via pads on the feet), and stretches forelimb musculature. The behavior cannot be eliminated; it can only be redirected from furniture to dedicated surfaces. The feline-behavior consensus (Buffington, Pachel) recommends offering multiple scratching surfaces of different textures, orientations, and locations — and placing them next to existing scratching targets rather than where the owner prefers. We rank by stability, surface quality, durability, and price.`,
    buyersGuide: `**Vertical posts must be tall and stable.** A vertical scratching post should be taller than the cat\'s fully-extended body (most cats can reach 24-32 inches when standing on hind legs) and heavy enough not to tip when used vigorously. SmartCat Ultimate Scratching Post (32 inches, 18 lbs) is the most-recommended single post.\n\n**Horizontal pads matter too.** Many cats prefer horizontal or inclined scratching — particularly cats who scratch carpets. PetFusion Ultimate Cat Scratcher Lounge (a curved cardboard piece) is one of the highest-rated horizontal options.\n\n**Sisal rope and sisal fabric are different.** Sisal rope is the rougher, more durable textile. Sisal fabric (often used on cheaper posts) wears through within months. Buy sisal rope wrapping for durability.\n\n**Cardboard scratchers are cheap and effective.** Replaceable cardboard scratchers (PetFusion, SmartyKat) are the budget option. Cats often prefer the texture, and the consumable cost is reasonable.\n\n**Location matters more than appearance.** Place scratchers where the cat already scratches — next to the corner of the couch the cat has chosen, not in the corner you would prefer. Once the cat reliably uses the new surface, you can slowly move it.`,
    whoShouldntBuy: `Skip declawing as an alternative — the procedure is amputation of the distal phalanx, has poor postoperative pain outcomes documented in the veterinary literature, and is banned in many countries and U.S. cities. The behavioral solution is multiple scratchers plus environmental enrichment, not surgical removal of digits.`,
    faqs: [
      { q: 'How do I stop my cat from scratching furniture?', a: 'Provide attractive alternatives (vertical post next to the furniture corner the cat targets), make the furniture less appealing (double-sided tape, foil, Sticky Paws), and reinforce use of the new scratcher with treats and play.' },
      { q: 'How tall should a scratching post be?', a: 'Taller than the cat at full vertical extension — for most adult cats, 30+ inches. Short posts (under 24 inches) are functionally useless for adult cats who want a full stretch-scratch.' },
      { q: 'Sisal vs cardboard?', a: 'Cats often prefer cardboard texture; sisal rope is more durable for a permanent fixture. Most households benefit from both options.' },
      { q: 'Does Soft Paws work?', a: 'Vinyl claw caps (Soft Paws, Soft Claws) prevent damage during a 4-6 week wearing period. They require regular replacement and are not appropriate for cats who go outside. A behaviorally less restrictive alternative to declaw.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'cat-toys',
    h1Name: 'Cat Toys',
    shortName: 'Cat Toys',
    petType: 'cat',
    subcategories: ['Wand / teaser', 'Catnip', 'Puzzle feeders', 'Treat-dispensing balls', 'Laser pointers', 'Interactive electronic', 'Solo-play balls'],
    intro: `Indoor cats need daily structured play to satisfy predatory instincts that would otherwise be expressed through hunting. The feline-behavior consensus consistently shows that scheduled play sessions of 10-15 minutes, 2-3 times per day, with prey-mimicking toys (wand teasers, feathers on string, small mice) reduce inappropriate scratching, aggression, and obesity. Many household behavior problems in indoor cats trace to insufficient predatory outlet rather than to medical or temperamental issues. We rank by play-engagement reports, safety, durability, and enrichment value.`,
    buyersGuide: `**Wand teasers replicate the predator-prey sequence.** Da Bird, Cat Dancer, and Neko Flies are the most-recommended wand toys. The full predatory sequence — stalk, chase, pounce, catch, kill, eat — is most-fully expressed with wand-style toys that let you simulate prey movement. End sessions with a "catch" (let the cat capture the toy) and a small treat to complete the sequence.\n\n**Puzzle feeders for solo enrichment.** Puzzle feeders — Doc & Phoebe\'s Indoor Hunting Feeder, NoBowl, slow-feeder balls — convert eating into a hunting activity. Particularly valuable for overweight cats and cats with destructive tendencies during owner-absent hours.\n\n**Catnip works for ~70% of cats.** The catnip-response gene is heritable and absent in roughly 30% of cats. For responsive cats, fresh, high-quality catnip (Cosmic Catnip, Yeowww!) produces 10-15 minutes of intense play followed by a refractory period of 1-2 hours. For non-responders, silver vine (Matatabi) is an alternative that elicits a similar response in many cats who do not respond to catnip.\n\n**Laser pointers — use with care.** Laser pointers reliably trigger prey-chase behavior but never let the cat "catch" anything, which can produce frustration in some cats. End laser sessions by directing the dot onto a tangible toy the cat can capture, then provide a treat. Avoid laser-only play sessions.\n\n**Rotate toys.** Cats habituate to toys within days. Keep most toys put away and rotate 3-4 toys into the available pool weekly. Old toys become "new" again after 1-2 weeks of absence.`,
    whoShouldntBuy: `Skip toys with small detachable parts (eyes, bells, ribbon ties) — these are choke and ingestion risks. Skip strings, ribbons, and yarn left unsupervised — linear foreign bodies are a common emergency surgery in cats and can be fatal. Skip electronic toys for cats who show no interest after the first few exposures — many cats find them unsettling.`,
    faqs: [
      { q: 'How long should I play with my cat each day?', a: 'Minimum 15-30 minutes of structured play, ideally split into 2-3 sessions. The best times are early morning and just before evening meals, when cats are naturally most active.' },
      { q: 'Why doesn\'t my cat respond to catnip?', a: 'Roughly 30% of cats lack the heritable catnip-response gene. Silver vine (Matatabi) elicits a similar response in many catnip-non-responders.' },
      { q: 'Are laser pointers cruel?', a: 'Not inherently. They become problematic if used as the sole enrichment without resolution — the cat needs a tangible catch and reward at the end of the chase sequence to complete the predatory cycle.' },
      { q: 'My cat doesn\'t play. What\'s wrong?', a: 'Possible causes: pain (always rule out arthritis or dental disease in older cats), depression, environmental stress, or the wrong toy. Try wand teasers with feathers (high prey-drive trigger) and play during dawn or dusk activity windows.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'cat-dental',
    h1Name: 'Cat Dental Care',
    shortName: 'Cat Dental Care',
    petType: 'cat',
    subcategories: ['VOHC dental treats', 'Toothbrushes for cats', 'Enzymatic toothpaste', 'Water additives', 'Dental diets'],
    intro: `Periodontal disease affects most adult cats. Worse, cats are masters at hiding oral pain — many cats with severe tooth resorption or end-stage periodontal disease show no obvious symptoms until advanced disease is present. The home-care evidence base parallels dogs: daily brushing with enzymatic toothpaste is the strongest intervention; VOHC-accepted dental chews provide measurable but smaller benefit. Cats with feline odontoclastic resorptive lesions (FORL) — a condition affecting 25-40% of cats — require professional extraction; no home care prevents progression once lesions are present. We rank by VOHC acceptance, palatability for cats, and ease of use.`,
    buyersGuide: `**Daily brushing remains the gold standard.** Most cats can be trained to tolerate brief brushing if introduction is gradual — start with finger-touching of the gums with enzymatic toothpaste (Virbac C.E.T., Petrodex), then introduce a soft fingerbrush, then a small soft-bristled brush. The 30-day acclimation timeline is realistic.\n\n**VOHC-accepted products are the credible filter.** Hill\'s t/d cat dental diet, Greenies Feline, and Virbac C.E.T. cat chews carry VOHC acceptance. The VOHC list at vohc.org is the only third-party verification.\n\n**Water additives — same caveat as dogs.** Limited but positive evidence; smaller effect than brushing or VOHC chews. Reasonable as an additional layer for owners who already brush; not a replacement for brushing.\n\n**Watch for tooth resorption.** Feline odontoclastic resorptive lesions are common, painful, and not preventable by home care. Annual veterinary dental exam (under anesthesia, with dental x-rays) is the standard recommendation for cats over age 3.\n\n**Senior cats: annual professional cleaning.** Senior cats with chronic kidney disease or hyperthyroidism need careful pre-anesthetic screening, but anesthesia risk is now well-managed at most veterinary practices with proper monitoring. Untreated dental disease is often worse than the anesthetic risk.`,
    whoShouldntBuy: `Skip anesthesia-free dental cleaning for cats — same concerns as for dogs, with additional concern that cats are usually scruff-restrained for the procedure (highly aversive and ineffective for true cleaning). Skip dental treats that are not on the VOHC list — the cat dental market includes many unsubstantiated products.`,
    faqs: [
      { q: 'Can I brush my cat\'s teeth?', a: 'Yes, with patient acclimation over 2-4 weeks. Cat-specific enzymatic toothpaste and a small soft brush. Most cats tolerate it once introduced gradually.' },
      { q: 'What is tooth resorption?', a: 'Feline odontoclastic resorptive lesions (FORL) — the body resorbs the tooth structure from within. Common (25-40% of cats), painful, and requires professional extraction. Not preventable by home care.' },
      { q: 'How often does a cat need professional dental cleaning?', a: 'Most cats need professional cleaning under anesthesia every 1-2 years starting around age 2-3, depending on individual disease progression and home care.' },
      { q: 'My cat won\'t let me brush. Now what?', a: 'Use VOHC-accepted dental diets (Hill\'s t/d) and dental treats as the primary home intervention, and maintain annual professional cleaning.' },
    ],
    crossLinks: CAT_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  // ─── SMALL ANIMAL ───────────────────────────────────────────────────────────
  {
    slug: 'small-animal-hutches',
    h1Name: 'Rabbit Hutches & Small Animal Enclosures',
    shortName: 'Hutches & Cages',
    petType: 'small-animal',
    subcategories: ['Indoor rabbit pens', 'Outdoor rabbit hutches', 'Guinea pig cages', 'Ferret cages', 'Hamster habitats', 'Multi-level setups'],
    intro: `Small animal housing — rabbits, guinea pigs, ferrets, hamsters — is one of the categories where most commercially-marketed products are inadequately sized for the species\' welfare needs. The pet-industry hutches and cages widely sold at chain retailers are typically 30-50% smaller than the minimum spaces recommended by veterinary welfare organizations (RSPCA, House Rabbit Society, AVMA). The default recommendation for rabbits and guinea pigs is now indoor X-pen enclosures or free-roaming with rabbit-proofing, not traditional cages. We rank by usable space, ventilation, ease of cleaning, and welfare compliance.`,
    buyersGuide: `**Rabbits need much more space than typical cages provide.** The House Rabbit Society and RSPCA recommend a minimum of 12 square feet of usable enclosure space plus at least 32 square feet of daily exercise area for a single rabbit. Most pet-store "rabbit cages" provide 6-8 square feet — substantially below the minimum for welfare.\n\n**Indoor X-pens or free-roaming are the modern recommendation.** A 4-foot X-pen (32-inch height for most rabbit breeds, 36-inch for larger breeds) provides adequate base space and is dramatically easier to clean than traditional hutches. Many rabbit-savvy households move to free-roaming with rabbit-proofed rooms.\n\n**Guinea pigs need substantially larger enclosures than commercial cages.** The Humane Society recommends 7.5 square feet for a single guinea pig and 10.5 for a pair. Most commercial guinea pig cages are 4-5 square feet. The C&C (cubes and coroplast) DIY enclosure system is widely used by rescues because it provides adequate space cheaply.\n\n**Ferrets need vertical and horizontal space.** Multi-level ferret cages (Ferret Nation, Critter Nation) are the standard. Minimum recommended dimensions: 36" wide x 24" deep x 36" tall per ferret, with multiple levels.\n\n**Outdoor hutches: weather and predator risk.** Outdoor housing for rabbits requires predator-proof construction (raccoons, foxes, hawks), insulated weather protection, and supplemental heating in cold climates. Most welfare organizations now recommend indoor housing for companion rabbits.`,
    whoShouldntBuy: `Skip the standard pet-store rabbit cages (typically 4-6 square feet) — they are too small for rabbit welfare. Skip outdoor-only rabbit hutches in extreme climates. Skip hamster wheels under 8 inches in diameter — small wheels cause spine curvature in adult Syrian hamsters.`,
    faqs: [
      { q: 'How big should a rabbit enclosure be?', a: 'House Rabbit Society minimum: 12 sq ft of enclosure plus 32 sq ft of daily exercise space. Larger is better. Indoor X-pen setups and free-roaming both work well.' },
      { q: 'Outdoor or indoor for rabbits?', a: 'Indoor is the modern recommendation. Outdoor housing carries predator, weather, and disease risks that indoor housing avoids.' },
      { q: 'Can guinea pigs and rabbits share an enclosure?', a: 'No — they have different dietary needs, different communication signals, and rabbits can injure guinea pigs. House separately.' },
      { q: 'What\'s the minimum ferret cage size?', a: 'Roughly 24" x 24" x 24" per ferret as an absolute minimum; 36" x 24" x 36" multi-level cages are the practical standard. Ferrets need 4-6 hours of out-of-cage activity daily regardless of cage size.' },
    ],
    crossLinks: SMALL_ANIMAL_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'small-animal-food',
    h1Name: 'Small Animal Food',
    shortName: 'Small Animal Food',
    petType: 'small-animal',
    subcategories: ['Rabbit pellets', 'Guinea pig pellets (vitamin C)', 'Timothy hay', 'Orchard grass', 'Ferret food', 'Hamster food', 'Treats'],
    intro: `Small herbivore nutrition (rabbits, guinea pigs) is dominated by one decision: hay should make up 70-80% of total daily intake. Pellets are a small supplemental component, not the primary food, despite the way the category is marketed. Guinea pigs additionally require dietary vitamin C — they are one of the few mammals besides humans and primates that cannot synthesize their own. Ferrets are obligate carnivores and require high-protein, high-fat, animal-based diets. We rank by formulation appropriateness, ingredient quality, and species-specific welfare standards.`,
    buyersGuide: `**Hay is the foundation, not the pellet.** For rabbits and guinea pigs, unlimited timothy hay should be available at all times. Pellets are a supplemental component — most adult rabbits should receive less than 1/4 cup of pellets per day for a 5-lb rabbit. Pellet-only diets cause obesity, dental disease, and GI stasis.\n\n**Avoid muesli-style mixes.** Colorful mixes with seeds, dried fruit, and corn allow selective eating — the rabbit or guinea pig eats only the high-calorie components and leaves the balanced pellets. This causes nutritional imbalance. Use plain timothy-based pellets (Oxbow Essentials, Sherwood Forest).\n\n**Guinea pigs need supplemental vitamin C.** Guinea pigs cannot synthesize vitamin C and require 10-30mg daily. Quality guinea pig pellets are fortified, but vitamin C degrades within 90 days of manufacture. Supplement with fresh bell pepper, kale, or chewable tablets (Oxbow Vitamin C). Vitamin C in water is not recommended — the vitamin degrades quickly and discourages drinking.\n\n**Timothy hay is the standard for adults.** Adult rabbits and guinea pigs should eat timothy-based hay (not alfalfa). Alfalfa is too calcium-dense and protein-rich for adult animals — reserved for growing young animals and pregnant/nursing mothers.\n\n**Ferrets need high-protein animal-based food.** Ferrets are obligate carnivores. Quality ferret food: 32-38% protein, 18-22% fat, minimal carbohydrate, animal-based protein sources. Wysong Epigen 90 and Orijen Cat & Kitten (often fed to ferrets) are common choices.`,
    whoShouldntBuy: `Skip muesli-style mixes — they enable selective eating and cause nutritional imbalance. Skip alfalfa-based pellets for adult rabbits and guinea pigs (too calcium-dense). Skip rabbit food with corn, seeds, or dried fruit as primary ingredients. Skip vitamin C in water for guinea pigs.`,
    faqs: [
      { q: 'How much pellet food per day?', a: 'Adult rabbits: 1/4 cup per 5 lbs of body weight per day. Adult guinea pigs: 1/8 cup per day. Hay is the foundation; pellets are supplemental.' },
      { q: 'Why timothy hay specifically?', a: 'Lower calcium and protein than alfalfa, which is appropriate for adult maintenance. Alfalfa is reserved for growing young animals and reproducing females.' },
      { q: 'Do ferrets eat the same food as cats?', a: 'High-quality kitten food is often used because it has the high protein and fat profile ferrets need. Quality ferret-specific foods (Wysong, Marshall Premium) are also appropriate.' },
      { q: 'How much vitamin C does a guinea pig need?', a: '10-30 mg per day. Fresh bell peppers, kale, broccoli, and supplemented pellets all provide it. Avoid vitamin C in water (rapid degradation and reduced drinking).' },
    ],
    crossLinks: SMALL_ANIMAL_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'small-animal-bedding',
    h1Name: 'Small Animal Bedding',
    shortName: 'Bedding & Substrate',
    petType: 'small-animal',
    subcategories: ['Paper-based bedding', 'Aspen shavings', 'Fleece liners', 'Hay-based bedding', 'Compressed pellet'],
    intro: `Small animal bedding is a respiratory health question first, comfort question second. Pine and cedar shavings — historically common — release aromatic hydrocarbons that have been linked to respiratory disease and liver enzyme changes in small herbivores. The current evidence-based standard is paper-based bedding, kiln-dried aspen, or fleece liners over absorbent layers. We rank by respiratory safety, absorbency, dust generation, and per-week cost.`,
    buyersGuide: `**Avoid pine and cedar shavings.** Both release aromatic compounds (phenols) that have been associated with respiratory irritation and hepatic enzyme induction in rats, rabbits, and guinea pigs. The exotic-veterinary consensus has shifted away from pine and cedar over the past two decades.\n\n**Paper-based bedding is the safe default.** Carefresh, Kaytee Clean & Cozy, and similar paper-pulp beddings are dust-free, highly absorbent, and chemically inert. Reasonable per-week cost for most small-animal owners.\n\n**Kiln-dried aspen is the wood alternative.** Aspen does not release the aromatic compounds that pine and cedar do. Kiln-drying further reduces volatile content. Reasonable for owners who prefer a natural-looking substrate.\n\n**Fleece liners are popular for guinea pigs and rabbits.** A fleece top layer over absorbent backing (Cozy Cavies, Guinea Dad) reduces ongoing consumable cost — you wash rather than discard. Higher upfront cost but lower ongoing cost over months.\n\n**Compressed-paper pellet bedding (Yesterday\'s News) for litter trays.** For litter-trained rabbits, paper pellet bedding in the litter tray plus paper or fleece in the rest of the enclosure is a common setup.`,
    whoShouldntBuy: `Skip pine and cedar shavings for any small herbivore — the respiratory and hepatic concerns are well-documented in the small-mammal veterinary literature. Skip very dusty corncob bedding — high dust content irritates respiratory passages. Skip clay-based litters for rabbits and guinea pigs (ingestion risk).`,
    faqs: [
      { q: 'How often do I change bedding?', a: 'Spot-clean wet areas daily; full bedding change weekly. Less frequent changes (bi-weekly) work for fleece-liner systems if spot-cleaning is consistent.' },
      { q: 'Is hay also bedding?', a: 'Hay can be used as bedding in the sleeping area for rabbits and guinea pigs — it doubles as forage. Cost-effective but less absorbent than paper-based bedding for the wet zones.' },
      { q: 'Why is pine bad?', a: 'Soft pine releases aromatic phenols (alpha- and beta-pinene) that have been associated with respiratory irritation and hepatic enzyme induction in small mammals. Kiln-dried aspen does not release these compounds.' },
      { q: 'Are fleece liners worth it?', a: 'Yes for owners willing to wash regularly. Higher upfront cost ($30-60 per set), lower ongoing cost compared to disposable bedding. Most popular for guinea pigs.' },
    ],
    crossLinks: SMALL_ANIMAL_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  // ─── FISH ───────────────────────────────────────────────────────────────────
  {
    slug: 'fish-tanks',
    h1Name: 'Fish Tanks & Aquariums',
    shortName: 'Aquariums',
    petType: 'fish',
    subcategories: ['Starter kits (10-20 gal)', 'Mid-size (29-55 gal)', 'Large (75+ gal)', 'Nano / desktop (under 10 gal)', 'Bowfront / shaped', 'Rimless'],
    intro: `Tank size is the single most consequential decision in fishkeeping. Larger volumes are dramatically more stable — water chemistry buffers (pH, hardness, ammonia spikes) scale with volume, and beginner mistakes that would kill fish in a 5-gallon tank often have time to be corrected in a 29-gallon. The fishkeeping community standard, contrary to pet-industry marketing, is "go bigger than you think you need." A 29-gallon tank costs roughly 50% more than a 10-gallon kit but is 3x more forgiving and supports a wider range of stocking options. We rank by build quality (silicone seam consistency, glass thickness), warranty terms, and value per gallon.`,
    buyersGuide: `**Go bigger than the pet store recommends.** A 29-gallon tank is dramatically more forgiving than a 10-gallon for beginners. The water-quality math is volume-based — twice the volume means half the impact of a stocking error or feeding mistake. The classic beginner trap is a 5-gallon "starter" tank with too many fish and unstable water chemistry.\n\n**Glass vs acrylic.** Glass is heavier, more scratch-resistant, and cheaper. Acrylic is lighter, clearer, but easily scratched and more expensive. For starting out, glass is the practical default.\n\n**Tank dimensions matter for fish welfare.** "Long" tanks (more horizontal swimming space) are preferred over "tall" tanks of the same volume for most fish — most species swim horizontally, not vertically. A 29-gallon "long" footprint (30" x 12" x 18") is more useful than a 29-gallon "extra tall" of the same volume.\n\n**Starter kit value varies.** All-in-one starter kits (Aqueon, Tetra) bundle a tank, hood, light, filter, and heater at a modest discount. The bundled components are typically entry-grade and often need upgrading (especially heaters and filters) within the first year. Buying components separately costs more upfront but often performs better.\n\n**Plan stocking before buying.** A 29-gallon tank can support a small school of tetras (15-20) or a couple of medium cichlids — not both. Plan the stocking list before the tank purchase.\n\n**Tank weight matters for floor placement.** Water weighs 8.3 lbs per gallon. A filled 75-gallon tank with substrate and decor weighs over 700 lbs concentrated on a small footprint. Verify floor weight capacity in older buildings.`,
    whoShouldntBuy: `Skip tanks under 5 gallons for fish — most "betta bowls" and 1-gallon novelty tanks are too small for the bioload of a single fish to be safely managed. Skip tanks above 55 gallons as a first aquarium unless you have already maintained a smaller tank successfully. Skip elaborately-shaped tanks (corner units, hexagons) — they trade footprint efficiency for aesthetics.`,
    faqs: [
      { q: 'What size for a single betta?', a: 'Minimum 5 gallons, ideally 10. The "betta bowls" sold at chain stores (under 2 gallons) are too small for stable water chemistry.' },
      { q: 'How many fish can I keep?', a: 'Depends on species and tank size. The old "one inch per gallon" rule is a rough beginner guideline that fails for large or messy fish. Plan stocking by adult size and bioload before buying.' },
      { q: 'Glass or acrylic?', a: 'Glass for most beginners — cheaper, more scratch-resistant, and easier to clean. Acrylic if weight is a constraint or for very large custom tanks.' },
      { q: 'Should I buy a starter kit?', a: 'Reasonable for absolute beginners on a budget. Plan to upgrade the filter and heater within the first year as you understand your specific needs.' },
    ],
    crossLinks: FISH_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'fish-filters',
    h1Name: 'Aquarium Filters',
    shortName: 'Aquarium Filters',
    petType: 'fish',
    subcategories: ['Hang-on-back (HOB)', 'Canister filters', 'Sponge filters', 'Internal filters', 'Sump systems', 'Nano filters'],
    intro: `Filtration is the single largest contributor to fish health and tank stability. The fishkeeping rule of thumb is to size filtration for 4-10x the tank volume per hour in turnover capacity — but the type of filtration matters as much as the rate. Hang-on-back (HOB) filters are the value default for tanks up to roughly 75 gallons; canister filters become more cost-effective above 75 gallons and offer better biological filtration capacity. Sponge filters, often dismissed by beginners, are the standard for shrimp tanks, betta tanks, and fry-rearing setups because they cannot suck small organisms in. We rank by build quality, flow rate, media capacity, noise level, and ease of maintenance.`,
    buyersGuide: `**Size for 4-10x turnover per hour.** A 29-gallon tank wants a filter rated for at least 120 gph (4x) and ideally 200-290 gph (7-10x). Manufacturers tend to overstate gallons-per-hour ratings — assume the real flow rate is 60-70% of the box claim.\n\n**Aquaclear HOB filters are the value standard.** The AquaClear 70 (formerly 300) is the most-recommended HOB filter in the fishkeeping community. Reliable, easy to maintain, accommodates customizable media in the chamber, and offers a flow-rate adjustment. Fluval C-series is the competing line.\n\n**Canister filters for large or heavily-stocked tanks.** Fluval 07-series, Eheim Classic, and Oase BioMaster are the leading options for tanks 55+ gallons. Higher upfront cost; larger media volume means longer service intervals and better biological stability.\n\n**Sponge filters for delicate inhabitants.** Powered by an air pump, sponge filters provide gentle biological filtration ideal for shrimp tanks, betta tanks, and fry rearing. Very cheap (~$10-15) and effectively maintenance-free. Pair with an air pump in the $15-30 range.\n\n**Media matters more than housing.** All biological filtration relies on the bacterial colony on the media surface. Keeping established media wet during a filter change is the difference between a stable tank and a mini-cycle.\n\n**Maintenance schedule: rinse, don\'t replace.** Filter media should be rinsed in old tank water (not tap water — chlorine kills bacteria) every 2-4 weeks. The standard "replace cartridges monthly" pet-store recommendation is a sales tactic, not a maintenance need.`,
    whoShouldntBuy: `Skip undersized filters — a filter rated below 4x turnover is inadequate for most stocking levels. Skip "cartridge-based" filtration systems that lock you into expensive proprietary cartridge replacement (Tetra Whisper, some Marineland). Skip very loud filters in bedrooms — Eheim is the standard for quiet operation.`,
    faqs: [
      { q: 'How big a filter do I need?', a: '4-10x the tank volume per hour. A 29-gallon tank wants at least 120-290 gph rated filtration. Box ratings overstate actual flow by 30-40% in most cases.' },
      { q: 'Canister vs HOB?', a: 'HOB is cheaper, easier to maintain, and sufficient for most freshwater tanks up to 75 gallons. Canisters offer larger media volume and quieter operation, becoming more cost-effective above 55-75 gallons.' },
      { q: 'How often do I clean the filter?', a: 'Rinse media in old tank water every 2-4 weeks. Do not replace established media unless physically degraded — the bacterial colony is the filter.' },
      { q: 'Do sponge filters work?', a: 'Yes, well — they are the standard for shrimp tanks, betta tanks, and fry rearing. Gentle flow, effective biological filtration, very cheap to run.' },
    ],
    crossLinks: FISH_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'fish-heaters',
    h1Name: 'Aquarium Heaters',
    shortName: 'Aquarium Heaters',
    petType: 'fish',
    subcategories: ['Submersible glass', 'Submersible titanium', 'Inline (canister)', 'Heater with external controller', 'Mini-tank heaters'],
    intro: `Aquarium heater failure modes are dramatic — stuck-on heaters cook fish; stuck-off heaters can chill them. The category includes both reliable workhorses and notorious failure-prone models, and the published reliability data is largely community-aggregated. The right wattage scales roughly with tank volume and ambient temperature differential — too small a heater cannot maintain target temperature; too large a heater fails on more aggressively. We rank by reliability reports, accuracy, safety features (auto-shutoff, ceramic vs glass), and price.`,
    buyersGuide: `**Wattage rule of thumb: 3-5 watts per gallon.** A 29-gallon tank in a typical room wants a 100-150 watt heater. Colder rooms or higher target temperatures push the needed wattage higher.\n\n**Use two smaller heaters in larger tanks.** For tanks 55+ gallons, two heaters rated for half the total wattage offer redundancy — if one fails on or off, the other limits the deviation. Standard practice in the planted-tank and reef communities.\n\n**Eheim Jager is the reliability standard.** The Eheim Jager glass submersible has been the community-trusted heater for decades. Accurate, reliable, and reasonably priced for the quality.\n\n**Inkbird controllers add safety.** Inkbird ITC-308 or similar external temperature controllers regulate any heater via outlet switching. The heater\'s built-in thermostat becomes the redundant fail-safe; the controller is the primary regulation. Highly recommended for any high-value tank.\n\n**Titanium heaters with separate controllers for advanced tanks.** Titanium heating elements (Finnex, Cobalt) are essentially shatter-proof and pair well with external controllers. Higher cost, longer expected service life.\n\n**Avoid cheap unbranded heaters.** The aquarium-hobby aggregate failure-rate data is clear: unbranded $10 heaters fail more often and more dangerously than $25-40 reliable brands. The savings are not worth the fish loss.`,
    whoShouldntBuy: `Skip cheap unbranded heaters — failure rate and severity are documented as substantially worse than reputable brands. Skip glass heaters in tanks with large boisterous fish (clown loaches, larger cichlids) that may crack them — use titanium. Skip heaters that lack a thermostat (some "preset" heaters fix at 78°F regardless of room).`,
    faqs: [
      { q: 'What temperature for tropical fish?', a: 'Most community tropical species: 75-80°F. Specific species have specific ranges — research before stocking. Discus prefer 84-86°F; goldfish prefer 65-72°F (coldwater).' },
      { q: 'How big a heater?', a: '3-5 watts per gallon as a starting point. A 29-gallon community tank in a typical room wants a 100-150 watt heater.' },
      { q: 'Do I need two heaters?', a: 'For tanks 55+ gallons, two redundant heaters reduce the risk of stuck-on or stuck-off failure events. Common in valuable or hard-to-replace livestock setups.' },
      { q: 'My heater stopped working — what happens?', a: 'A stuck-off heater drops temperature roughly 1-3°F per hour in a typical room. Most fish tolerate brief drops. Stuck-on heaters are far more dangerous — they can boil water within hours.' },
    ],
    crossLinks: FISH_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'fish-lighting',
    h1Name: 'Aquarium Lighting',
    shortName: 'Aquarium Lighting',
    petType: 'fish',
    subcategories: ['LED fixtures (planted)', 'LED fixtures (low-light/fish-only)', 'Reef LED', 'Programmable / sunrise-sunset', 'Replacement bulbs (legacy)', 'Marine spectrum'],
    intro: `Aquarium lighting trades off two demands — the aesthetic and photoperiod needs of fish, and the photosynthesis needs of live plants or corals. LED has displaced fluorescent and metal halide as the dominant aquarium light technology in the last decade because of energy efficiency, programmability, and lifetime. Lighting needs vary dramatically by tank type: a fish-only freshwater tank needs minimal lighting and a simple LED is sufficient; a high-light planted tank needs PAR-rated LED at the proper depth and spectrum; a reef tank has different spectral requirements again. We rank by PAR output, spectrum, programmability, and price-per-PAR.`,
    buyersGuide: `**Match lighting to tank purpose.** Fish-only freshwater: any decent LED in the $30-80 range. Low-light planted: Finnex Stingray, Beamswork. High-light planted: Twinstar S, Chihiros, ADA Solar. Reef: AI Prime, Kessil, Radion. The category is segmented by purpose; one light does not serve all.\n\n**PAR is more useful than watts.** PAR (Photosynthetically Active Radiation) measures the light actually usable for plant or coral growth. Manufacturer-published PAR readings at depth are the comparable metric. Wattage is an indirect proxy.\n\n**Photoperiod: 8-10 hours daily.** Most freshwater tanks run an 8-10 hour photoperiod. Longer photoperiods drive algae growth. Sunrise/sunset programmable lights (Fluval Plant 3.0, NICREW) replicate dawn and dusk and reduce stress on light-sensitive species.\n\n**Mars Hydro and budget Chinese brands.** Mars Hydro has emerged as the value brand for planted-tank lighting in the past few years. Performance close to premium brands at lower cost; build quality less consistent.\n\n**Programmable lights pay for themselves.** Smart programmable lights (Fluval Plant 3.0, NICREW HyperReef, AI Prime) eliminate the need for separate timers and allow ramp-up/ramp-down profiles that match natural daylight cycles.`,
    whoShouldntBuy: `Skip very cheap unbranded LED strips — color accuracy and PAR output are typically misrepresented. Skip non-replaceable fixtures if you plan to upgrade plant stocking over time. Skip metal halide and T5 fluorescent for new builds — LED has displaced them on both efficiency and maintenance.`,
    faqs: [
      { q: 'How long should the light be on?', a: '8-10 hours per day for most tanks. Longer drives algae; shorter limits plant growth.' },
      { q: 'Do I need expensive plant lighting?', a: 'Low-light plants (Anubias, Java Fern, Cryptocoryne) thrive under modest LED fixtures. High-light plants (carpeting plants, red plants) need PAR-rated fixtures and CO2 injection.' },
      { q: 'Why do I have so much algae?', a: 'Most algae problems trace to lighting duration, lighting intensity, or nutrient imbalance. Start by reducing photoperiod to 7 hours and check nitrate/phosphate levels.' },
      { q: 'Reef lighting vs planted lighting?', a: 'Different spectral requirements. Reef tanks need higher blue spectrum for coral zooxanthellae; planted tanks need full-spectrum white with red emphasis. Lights are generally not interchangeable.' },
    ],
    crossLinks: FISH_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'fish-water-test-kits',
    h1Name: 'Aquarium Water Test Kits',
    shortName: 'Water Test Kits',
    petType: 'fish',
    subcategories: ['Master test kits (5+ params)', 'Ammonia kits', 'Nitrate kits', 'pH kits', 'GH/KH kits', 'Reef-specific kits (Ca, Mg, Alk)'],
    intro: `Water testing is the single most important diagnostic activity in fishkeeping. The five parameters that matter most during tank cycling — ammonia, nitrite, nitrate, pH, and KH — are also the parameters that drive most fish-loss events in established tanks. Liquid drop-test kits (API Master, Salifert) are dramatically more accurate than dip-strip tests for the core parameters. We rank by accuracy, range, reagent shelf life, and per-test cost.`,
    buyersGuide: `**API Freshwater Master Test Kit is the value standard.** Tests ammonia, nitrite, nitrate, and pH. Each kit lasts roughly 800 tests across the four parameters. The de-facto starter kit in the freshwater fishkeeping hobby for over two decades. Reagents have a 3-year shelf life from manufacture.\n\n**Dip strips are unreliable for ammonia and nitrite.** Dip strip accuracy drops dramatically for the parameters that matter most during cycling. Strips are acceptable for general checks on established tanks but should not be relied on for diagnosing problems.\n\n**Salifert kits for reef parameters.** Reef tanks require calcium, magnesium, alkalinity, and sometimes phosphate testing. Salifert kits are widely considered the most accurate widely-available reef test kits.\n\n**Test daily during cycling, weekly after.** During the nitrogen-cycle establishment period (4-8 weeks), test ammonia, nitrite, and nitrate every 1-3 days. After cycling, weekly tests are usually adequate. Test more often when adding new fish or after equipment changes.\n\n**Replace reagents annually.** Most reagents lose accuracy over 12-18 months once opened. Old reagents systematically under-read — a tank that "tests safe" may actually have elevated nitrates.\n\n**Skip electronic testers for hobby use.** The community consensus is that electronic pH and TDS meters require frequent calibration and often produce less reliable readings than properly-used liquid kits.`,
    whoShouldntBuy: `Skip dip strips as the primary testing method — accuracy for ammonia and nitrite is too low for cycling diagnosis. Skip very old kit stock (check the manufacture date) — expired reagents under-read systematically. Skip electronic testers as a substitute for liquid kits in hobby tanks.`,
    faqs: [
      { q: 'What does a tank cycling mean?', a: 'Cycling is the establishment of bacterial colonies that convert toxic ammonia (from fish waste) to less-toxic nitrite, then to non-toxic nitrate. The process takes 4-8 weeks in a new tank. Test ammonia and nitrite to track progress.' },
      { q: 'What parameters should I test?', a: 'Freshwater: ammonia, nitrite, nitrate, pH. Add KH/GH for planted tanks. Reef: add calcium, magnesium, alkalinity, phosphate.' },
      { q: 'How often do I test?', a: 'Daily-to-every-3-days during cycling (4-8 weeks). Weekly after establishment. More often when adding new fish or after equipment changes.' },
      { q: 'API drops or strips?', a: 'Liquid drop kits are substantially more accurate for the parameters that matter most. Strips are acceptable for casual checks but not for cycling diagnosis.' },
    ],
    crossLinks: FISH_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  // ─── REPTILE ────────────────────────────────────────────────────────────────
  {
    slug: 'reptile-enclosures',
    h1Name: 'Reptile Enclosures',
    shortName: 'Reptile Enclosures',
    petType: 'reptile',
    subcategories: ['Glass terrariums', 'PVC enclosures', 'Bioactive setups', 'Bearded dragon enclosures', 'Leopard gecko tanks', 'Ball python enclosures', 'Tortoise tables'],
    intro: `Reptile enclosure sizing is dramatically under-specified at most chain retailers. The current reptile-keeping consensus — driven by welfare research and the Reptiles & Amphibians community — has moved sharply upward from historical "minimum" sizes. A 40-gallon "breeder" tank, once standard for an adult bearded dragon, is now widely considered welfare-inadequate; the modern minimum is 4ft x 2ft x 2ft (120 gal equivalent). The same upward revision has happened across species. Glass terrariums (Exo Terra, Zoo Med) trade off visibility and aesthetic for thermal inefficiency; PVC enclosures (Animal Plastics, Boaphile) trade off cost for thermal stability and longer service life. We rank by adequate sizing per species, thermal management, ease of cleaning, and welfare-compliant features.`,
    buyersGuide: `**Modern welfare-recommended minimums are much larger than chain-store recommendations.** Adult bearded dragon: 4ft x 2ft x 2ft minimum (modern consensus, up from 40-gallon historical). Adult ball python: 4ft x 2ft x 2ft. Adult leopard gecko: 3ft x 18in x 18in. Adult tegu: 8ft x 4ft x 4ft. These numbers come from the Reptile Welfare Center, Reptifiles, and species-specific welfare research.\n\n**PVC enclosures hold heat better than glass.** Glass terrariums lose heat through every surface; PVC enclosures retain heat efficiently and require less wattage to maintain target temperature gradients. For desert species needing 100°F+ basking, PVC is dramatically more energy-efficient.\n\n**Bioactive setups are increasingly mainstream.** A bioactive enclosure includes a drainage layer, soil substrate, isopod and springtail "cleanup crew," and live plants. The cleanup crew breaks down waste, eliminating most spot-cleaning. Higher upfront effort, lower ongoing maintenance, and substantially improved welfare. The Bio Dude and Josh\'s Frogs sell complete kits.\n\n**Front-opening enclosures reduce handling stress.** Top-opening terrariums require reaching down into the enclosure from above — which most reptiles experience as a predator approach. Front-opening enclosures (Exo Terra, ZenHabitats) allow side approach, which is less stressful.\n\n**Plan thermal gradient before buying.** Reptiles regulate temperature behaviorally by moving between warm and cool zones. The enclosure must be long enough to maintain a clear temperature gradient — a hot basking end and a cool retreat end, with a 15-20°F differential.`,
    whoShouldntBuy: `Skip the 10-gallon and 20-gallon "starter" tanks for any reptile beyond hatchling/juvenile temporary housing — they are too small for adult welfare. Skip glass terrariums for species requiring high temperatures in cold rooms (PVC is dramatically more efficient). Skip top-opening enclosures for skittish species (front-opening reduces handling stress).`,
    faqs: [
      { q: 'What size for a bearded dragon?', a: 'Modern minimum: 4ft x 2ft x 2ft for an adult. The historical 40-gallon recommendation is now considered welfare-inadequate.' },
      { q: 'Glass or PVC?', a: 'PVC for thermal efficiency and longevity. Glass for visibility and lower upfront cost. Most experienced keepers transition to PVC for adult enclosures.' },
      { q: 'What is bioactive?', a: 'A setup with drainage, soil substrate, springtails and isopods as cleanup crew, and live plants. Reduces ongoing maintenance and improves welfare.' },
      { q: 'Where do I put the enclosure?', a: 'Away from direct sunlight (causes uncontrolled temperature spikes), away from drafts, and at a height where the reptile can see you approaching from the side (reduces predator-startle response).' },
    ],
    crossLinks: REPTILE_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'reptile-uvb-lighting',
    h1Name: 'Reptile UVB Lighting',
    shortName: 'UVB Lighting',
    petType: 'reptile',
    subcategories: ['T5 HO linear', 'T8 linear', 'Compact fluorescent (CFL)', 'Mercury vapor', 'Bearded dragon UVB', 'Leopard gecko UVB', 'Tortoise UVB'],
    intro: `UVB lighting is one of the most-undersold and most-misunderstood reptile equipment categories. Most diurnal reptiles require UVB exposure for vitamin D3 synthesis, which in turn regulates calcium metabolism. Inadequate UVB is the cause of metabolic bone disease (MBD) — one of the most common preventable conditions in captive reptiles. The complications are: UVB bulbs decay even when still visibly emitting light (the UVB output drops within 6-12 months while the visible light continues); cheap CFL bulbs are widely sold but produce inadequate UVB output for most species; the right bulb depends on species, enclosure size, and distance from basking spot. We rank by published UVB output (UV Index), bulb longevity, and price-per-month of service.`,
    buyersGuide: `**T5 HO linear bulbs are the modern standard.** Arcadia T5 HO and Zoo Med ReptiSun T5 HO are the community-validated standards for nearly all diurnal reptiles. Output 2-3x as much UVB as T8 fluorescent and dramatically more than CFL coil bulbs. The Arcadia 12% Desert is the most-recommended bulb for bearded dragons; 6% Forest for leopard geckos and many other species.\n\n**Replace bulbs every 12 months minimum.** UVB output decays measurably within 6-9 months and substantially within 12 months, even when visible light output appears unchanged. Mark the install date on the bulb. Many breeders replace every 6 months.\n\n**Mount within proper distance.** UVB intensity drops dramatically with distance. The standard recommendation is the bulb mounted so the basking surface is 8-12 inches from the bulb (varies by bulb model and screen-mesh attenuation). Solar Meter 6.5 measures actual UV Index at the basking site — the gold standard for verifying setup.\n\n**Mesh screens reduce output 30-50%.** Wire mesh attenuates UVB substantially. Bulbs mounted above screens need higher output to compensate.\n\n**Skip coil/CFL bulbs for most species.** Compact fluorescent UVB bulbs (the screw-in coils) have a narrow beam of light, produce less total UVB, and have historically been linked to corneal damage in early product runs. The category has improved but is still inferior to linear T5 HO for most species.\n\n**Mercury vapor bulbs (MVB) provide UVB and heat in one fixture.** MVBs (Zoo Med PowerSun, Arcadia D3 UV Basking) combine heat and UVB. Higher upfront cost, single-fixture convenience. Good for large desert enclosures where a separate basking bulb is also needed.`,
    whoShouldntBuy: `Skip coil/CFL bulbs as the primary UVB source for any UVB-required species — output is too low and beam too narrow. Skip "no UVB needed" recommendations from chain-store staff for diurnal reptiles — most diurnal species require UVB regardless of marketing claims. Skip UVB for fully nocturnal species (some snakes), where it is unnecessary.`,
    faqs: [
      { q: 'Do leopard geckos need UVB?', a: 'Modern consensus: yes, low-level UVB (2-5% UV Index) improves welfare and bone health even though leopard geckos can survive on D3-supplemented diet alone. The historical "no UVB needed" recommendation is being revised.' },
      { q: 'How often do I replace the bulb?', a: '12 months for T5 HO; 6 months for T8 fluorescent and CFL. Output decays even when visible light continues.' },
      { q: 'How far from the reptile?', a: '8-12 inches between bulb and basking surface for most species. Closer for mesh-screen attenuated setups. Solar Meter 6.5 verifies actual UV Index at the basking spot.' },
      { q: 'Arcadia or ReptiSun?', a: 'Both are community-trusted. Arcadia tends to be slightly preferred by experienced keepers for output consistency; ReptiSun is more widely available in the U.S.' },
    ],
    crossLinks: REPTILE_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'reptile-heating',
    h1Name: 'Reptile Heating',
    shortName: 'Reptile Heating',
    petType: 'reptile',
    subcategories: ['Basking bulbs (halogen)', 'Ceramic heat emitters', 'Under-tank heat mats', 'Deep heat projectors', 'Heat panels (radiant)', 'Thermostats'],
    intro: `Reptile heating is the equipment category most commonly under-budgeted by new keepers — and the category where shortcuts most directly cause welfare problems. Every heat source must be controlled by a thermostat — never plugged directly into mains power. Cheap thermostats fail; cheap thermometers misread; cheap heat mats can scorch enclosure floors and burn reptiles. The thermal gradient (a basking-zone temperature and a cool-zone retreat 15-20°F lower) is fundamental to reptile thermoregulation behavior. We rank by safety (thermostat compatibility, fail-safe design), heat output consistency, and thermal-gradient management.`,
    buyersGuide: `**Always use a thermostat.** Every heat source — basking bulbs, ceramic emitters, heat mats, radiant panels — must be regulated by a thermostat. Direct-to-mains heat sources can overheat dramatically and cause fire or fatal burns. Herpstat, Vivarium Electronics, and Inkbird are the community-trusted thermostat brands.\n\n**Halogen basking bulbs replace incandescent.** Halogen flood-style bulbs produce strong infrared-A wavelengths that reptiles experience as natural sun. Modern recommendations favor halogen over incandescent ceramic bulbs for basking points. Arcadia Halogen and Zoo Med Halogen are the standard options.\n\n**Ceramic heat emitters for nocturnal heat.** Ceramic heat emitters produce heat without visible light — useful for maintaining ambient temperature in cold rooms at night without disrupting day/night cycles.\n\n**Under-tank heat mats are no longer the primary recommendation for most species.** Historical leopard gecko and ball python care used heat mats as primary heat. Current consensus recommends overhead heat (basking bulbs, deep heat projectors) for most species because it more accurately replicates the sun-from-above thermal experience. Heat mats remain useful as supplemental belly heat for some species.\n\n**Deep heat projectors (DHP) and radiant heat panels.** Arcadia Deep Heat Projector and Reptile Basics radiant heat panels provide gentle infrared heating useful for maintaining ambient temperature in larger enclosures. Higher upfront cost.\n\n**Verify temperatures with multiple instruments.** A laser temperature gun (infrared thermometer) measures basking surface temperature accurately. A digital probe thermometer measures ambient air. Dial thermometers with stick-on suction cups are unreliable.`,
    whoShouldntBuy: `Skip heat sources without a thermostat — never. Skip heat rocks (the cheap glass-fronted decorative rocks) — they have a documented history of causing serious burns. Skip cheap unbranded heat mats that lack thermal-runaway protection. Skip incandescent "night red bulbs" — reptiles can see red light, disrupting day/night cycle.`,
    faqs: [
      { q: 'What temperatures do I need?', a: 'Species-specific. Bearded dragon basking: 100-110°F surface; cool side: 75-80°F. Ball python basking: 88-92°F; cool side: 78-80°F. Leopard gecko basking: 90-95°F surface; cool side: 75-78°F. Verify with a laser temperature gun.' },
      { q: 'Do I need a thermostat?', a: 'Yes — for every heat source, every time. Direct-to-mains heat is unsafe and causes welfare and fire issues.' },
      { q: 'Heat mat or bulb?', a: 'Modern recommendation favors overhead heat (bulbs, projectors) for most species. Heat mats remain useful as supplemental belly heat in some setups.' },
      { q: 'Why not heat rocks?', a: 'Heat rocks have a documented history of causing burns — the heating elements can fail and produce localized very-high temperatures. The reptile community uniformly discourages them.' },
    ],
    crossLinks: REPTILE_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'reptile-substrate',
    h1Name: 'Reptile Substrate',
    shortName: 'Reptile Substrate',
    petType: 'reptile',
    subcategories: ['Bioactive soil mixes', 'Coconut fiber / coir', 'Cypress mulch', 'Sand-soil mixes (desert)', 'Paper towel / reptile carpet', 'Aspen shavings (snakes)'],
    intro: `Reptile substrate is a contested category where pet-industry marketing diverges sharply from welfare-driven keeper recommendations. Calcium sand, walnut shell, and shredded aspen have all been marketed as appropriate for bearded dragons over the years; all three carry documented impaction risks and are no longer recommended by the reptile-welfare community. The current consensus favors bioactive soil mixes for most species, with species-specific exceptions (paper towel for quarantine, aspen for North American colubrid snakes, reptile carpet only for hospital setups). We rank by impaction safety, humidity management, suitability for natural behaviors, and ease of bioactive setup.`,
    buyersGuide: `**Avoid loose particulate substrates for arid species.** Calcium sand, silica sand, and walnut shell have a documented history of causing impaction in bearded dragons and other arid-species lizards. The reptile veterinary consensus has shifted firmly against these products. Bio Dude Terra Sahara, ZooMed ReptiSoil, and similar soil-sand mixes are the modern alternatives.\n\n**Bioactive substrates require drainage and cleanup crew.** A proper bioactive setup includes a drainage layer (clay pellets or LECA), a barrier mesh, the substrate layer, springtails and isopods as cleanup crew, and leaf litter for the cleanup crew to process. Higher initial cost; lower ongoing maintenance; substantially better welfare for fossorial behaviors.\n\n**Coconut fiber / coir for humid species.** Crested geckos, ball pythons, and other humidity-loving species do well on coconut-coir-based substrates. Affordable, holds humidity, and substantially renewable. Reptisoil, Zoo Med Eco Earth.\n\n**Cypress mulch for ball pythons and corn snakes.** Holds humidity for ball pythons and provides a naturalistic look. Resistant to mold. Reptile Sciences Cypress Mulch is the typical choice.\n\n**Aspen shavings for North American colubrids.** Corn snakes, king snakes, and milk snakes do well on dry aspen shavings. Easy to spot-clean. Not appropriate for humid-environment species.\n\n**Paper towel for hatchlings and quarantine.** Paper towel is the standard quarantine and hatchling substrate — easy to monitor for fecal abnormalities, cheap to replace, and impaction-impossible. Not appropriate as a long-term enrichment substrate but valuable for specific use cases.`,
    whoShouldntBuy: `Skip calcium sand and silica sand for any species — the impaction risk is documented and well-established. Skip cedar and pine shavings for any reptile — the aromatic compounds are respiratory irritants. Skip walnut shell substrate — same impaction concerns as sand without the natural-look benefit.`,
    faqs: [
      { q: 'Is sand bad for bearded dragons?', a: 'Loose particulate sand, including "calcium sand" marketed as digestible, carries a documented impaction risk. Modern care recommendations favor soil-sand mix bioactive substrates that allow natural digging behaviors without loose particulates.' },
      { q: 'Bioactive vs paper towel?', a: 'Bioactive offers welfare and aesthetic advantages but higher setup cost and complexity. Paper towel is appropriate for quarantine, hatchlings, and animals with health concerns being monitored.' },
      { q: 'How deep should substrate be?', a: 'Species and substrate type dependent. Bioactive setups typically 3-6 inches deep to allow burrowing and natural cleanup-crew habitat.' },
      { q: 'Coconut fiber for bearded dragons?', a: 'Mixed views — some experienced keepers report success, others report impaction risk. The current consensus favors a soil-sand mix designed specifically for arid species over pure coconut fiber.' },
    ],
    crossLinks: REPTILE_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  // ─── BIRD ───────────────────────────────────────────────────────────────────
  {
    slug: 'bird-cages',
    h1Name: 'Bird Cages',
    shortName: 'Bird Cages',
    petType: 'bird',
    subcategories: ['Small bird (parakeet, cockatiel)', 'Medium bird (conure, pionus)', 'Large parrot (Amazon, African Grey)', 'Macaw-size', 'Finch / canary flight cages', 'Travel cages'],
    intro: `Bird cage sizing is consistently under-sold by the pet industry. The right cage allows the bird to fully extend its wings in both directions, fly horizontally across the cage, and climb vertically with multiple perches at varied heights. Bar spacing is a critical safety specification — too wide and small birds escape or get heads caught; too narrow restricts grip and movement. Powder coating quality matters because chewed-off paint chips can cause heavy metal toxicity (lead, zinc). We rank by interior dimensions, bar spacing per species, powder-coat safety, and build quality.`,
    buyersGuide: `**Size for full wing extension plus horizontal flight space.** A cockatiel cage minimum: 20" x 20" x 24" tall. Conure minimum: 24" x 24" x 30" tall. Amazon parrot minimum: 30" x 30" x 36" tall. Macaw minimum: 36" x 48" x 60" tall. Larger is consistently better — birds in too-small cages develop feather-plucking and stereotypic behaviors.\n\n**Bar spacing matters for safety.** Finches and parakeets: 1/4" to 3/8" bar spacing. Cockatiels and conures: 1/2" to 5/8". Larger parrots: 3/4" to 1". Too-wide spacing risks head entrapment; too-narrow restricts perch-grip variation.\n\n**Powder coat quality.** Quality powder-coated steel cages (HQ, A&E, Vision) use non-toxic powder coatings safe for birds. Avoid cheap painted or galvanized steel — galvanized coatings can release zinc, and lead paint risk persists on cheap imported cages.\n\n**Multiple perches at multiple heights and textures.** A single dowel perch causes foot problems over time. Provide rope, natural branch, and varied-diameter perches at different heights. Birds prefer to roost at the highest point in the cage.\n\n**Bottom grate is essential.** A removable grate separates the bird from droppings and dropped food. Critical for hygiene; basic feature on any quality cage.\n\n**Cage placement matters as much as cage choice.** Birds need to be part of household activity — isolation causes stress. But avoid kitchens (Teflon fumes from non-stick cookware are acutely lethal to birds), drafty windows, and direct sunlight without shade options.`,
    whoShouldntBuy: `Skip the small "starter" cages sold at chain stores for cockatiels and larger — they are too small for welfare. Skip cages with galvanized steel components (zinc toxicity risk). Skip cages with bar spacing inappropriate for the species. Skip placing any bird cage in a household where Teflon non-stick cookware is in use (acute fume lethality).`,
    faqs: [
      { q: 'How big a cage for a parakeet?', a: 'Minimum 18" x 18" x 18". Bigger is better. Pairs need substantially more space (24" x 24" x 24" minimum).' },
      { q: 'Powder coat or stainless?', a: 'Powder coat is standard for most companion birds. Stainless steel (Cage Crazy, Kings) is the premium option — no chip risk, lifetime durability, much higher cost.' },
      { q: 'Why are macaws so expensive to house?', a: 'Cage sizes appropriate for macaws start around 4 ft x 5 ft footprint, are typically welded steel construction, and run $1,500-5,000. The bird and the cage together are a major financial commitment.' },
      { q: 'Where should I put the cage?', a: 'Active part of the home (birds need social interaction), away from kitchens (Teflon fume risk), away from drafty windows, with shade options for sunny placements.' },
    ],
    crossLinks: BIRD_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'bird-food',
    h1Name: 'Bird Food',
    shortName: 'Bird Food',
    petType: 'bird',
    subcategories: ['Pelleted diet (formulated)', 'Seed mixes', 'Fresh vegetables', 'Cockatiel / parakeet specific', 'Large parrot specific', 'Lory nectar diet'],
    intro: `Bird nutrition has shifted dramatically in the last 20 years. The historical seed-only diet — still widely sold — is now recognized as the largest preventable contributor to companion-bird disease. Seed-only diets cause obesity, atherosclerosis, fatty liver disease, and hypovitaminosis A. The avian-veterinary consensus is now a formulated pellet diet (60-80% of intake) plus fresh vegetables and small amounts of fruit, with seeds as treats only. We rank by formulation credentials, ingredient quality, and species-appropriate sizing.`,
    buyersGuide: `**Pellets, not seed mix, as the primary diet.** Harrison\'s Bird Foods, Roudybush, ZuPreem Natural, and Lafeber Nutri-Berries are the most-recommended formulated pellets. Quality pellets are nutritionally complete and have largely replaced seed mixes in modern bird care.\n\n**Transition slowly from seed-only.** Birds raised on seed mix resist transition to pellets. The standard transition protocol takes 2-8 weeks — gradually mixing increasing percentages of pellets while reducing seeds. Some birds are stubborn enough to require multiple approaches.\n\n**Fresh vegetables daily.** Leafy greens, broccoli, bell pepper, sweet potato, and carrot are the most-recommended fresh foods for most companion birds. Avoid avocado (toxic), onion, garlic, and most fruit seeds.\n\n**Fruit in moderation.** Sweet fruits (banana, mango, apple) are calorically dense and should be a small percentage of diet. Berries and citrus are lower in calories.\n\n**Seeds as treats only.** Sunflower seeds and millet are appropriate as training treats and enrichment — small percentages of total diet only. Cockatiels and budgies are particularly addicted to seed mixes and resist transition; persistence pays off.\n\n**Avoid food brands marketed with bright colors and fruit shapes.** ZuPreem FruitBlend is widely sold but the artificial colors and high sugar content make it less appropriate than ZuPreem Natural or Harrison\'s for most birds.`,
    whoShouldntBuy: `Skip seed-only mixes as the primary diet for any companion bird — the published nutritional consequences are well-established. Skip avocado, chocolate, caffeine, alcohol, and salt — all are toxic or harmful to birds. Skip foods cooked in non-stick cookware (Teflon fume risk).`,
    faqs: [
      { q: 'Pellets or seeds?', a: 'Pellets as primary diet. Seeds as treats only. The shift from seed-only diets has dramatically improved companion-bird health outcomes over the past 20 years.' },
      { q: 'How do I transition from seed to pellets?', a: 'Gradually over 2-8 weeks. Mix increasing percentages of pellets into the seed mix. Some birds resist strongly; consult an avian vet for stubborn cases.' },
      { q: 'What vegetables are safe?', a: 'Leafy greens, broccoli, bell pepper, sweet potato, carrot. Avoid avocado, onion, garlic, raw beans, and most fruit seeds.' },
      { q: 'Why are sunflower seeds bad?', a: 'Very high fat content and addictively palatable — birds will eat sunflower seeds preferentially and reject more balanced foods. Appropriate as a small treat percentage only.' },
    ],
    crossLinks: BIRD_CROSSLINKS,
    preferredVendors: ['chewy', 'amazon'],
  },
  {
    slug: 'bird-perches',
    h1Name: 'Bird Perches',
    shortName: 'Bird Perches',
    petType: 'bird',
    subcategories: ['Natural wood', 'Rope perches', 'Concrete / cement (nail-grooming)', 'Heated perches', 'Platform perches', 'Java wood'],
    intro: `Perch variety is a foot-health issue. Birds that stand on a single uniform-diameter dowel develop pressure sores (bumblefoot) and arthritis from the lack of foot-position variation. The modern foot-welfare recommendation is multiple perches of varied diameter and texture: at minimum, one rope or natural-branch perch (varied diameter), one cement perch (nail filing), and one wide platform perch (rest). We rank by texture variety, nail-trimming utility, foot-pressure distribution, and safety from chewing-related ingestion.`,
    buyersGuide: `**Varied diameter is the foot-health priority.** A single uniform diameter perch causes pressure points; varied diameter distributes load. Natural branch perches (Manzanita, Java) are the modern standard for primary perching — irregular surfaces continuously change foot position.\n\n**One cement or pumice perch for nail filing.** A cement perch placed near a high-use area lets the bird file its own nails through normal gripping. Reduces or eliminates the need for nail trims. Place where the bird naturally rests; not in the lowest spot (cement is uncomfortable for full-time perching).\n\n**Rope perches for medium and large birds.** Rope perches provide additional texture and movement variation. Watch for fraying — birds will chew loose threads, and ingested rope can cause GI obstruction. Replace when fraying becomes significant.\n\n**Wide platform perches for rest.** A flat platform perch (often higher in the cage) provides a true rest position where weight is distributed across the entire foot rather than gripped around a perch. Particularly valuable for older birds or birds with foot problems.\n\n**Safety: avoid dowels for adult birds.** The wooden dowel that ships with most cages is a low-quality perch — uniform diameter and too smooth. Most experienced bird owners discard cage-included dowels in favor of natural branch perches.\n\n**Heated perches for cold-tolerance issues.** Birds with circulation issues or elderly birds in cool households benefit from low-wattage heated perches (K&H Snuggle Up).`,
    whoShouldntBuy: `Skip plastic perches for any bird — too smooth for adequate grip. Skip sandpaper-covered perches (foot abrasion). Skip cement perches for the primary roosting spot (uncomfortable for full-time perching). Skip cheap rope perches with synthetic fibers (ingestion risk).`,
    faqs: [
      { q: 'How many perches do I need?', a: 'Minimum three of varied diameter and texture: one rope or natural branch, one cement, one platform. More perches at varied heights enrich the environment.' },
      { q: 'What about sandpaper perches?', a: 'Discontinued by most reputable bird stores — abrade foot surfaces and provide little nail-filing benefit. Cement or pumice perches are the modern alternative.' },
      { q: 'Where do I place perches?', a: 'Varied heights, with the highest perch being the bird\'s preferred sleeping spot. Avoid placing perches directly above food or water dishes (fecal contamination).' },
      { q: 'How often do I replace perches?', a: 'Natural wood: every 6-12 months as chewed down. Rope: when fraying becomes significant. Cement: yearly or when significantly worn smooth.' },
    ],
    crossLinks: BIRD_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  // ─── GENERAL ────────────────────────────────────────────────────────────────
  {
    slug: 'pet-carriers',
    h1Name: 'Pet Carriers',
    shortName: 'Pet Carriers',
    petType: 'general',
    subcategories: ['Soft-sided airline (in-cabin)', 'Hard-sided travel', 'Backpack carriers', 'Stroller / rolling', 'Cat-specific carriers', 'Large dog carriers'],
    intro: `Pet carrier selection turns on three questions: airline approval (if flying), durability for car travel, and cat-vs-dog ergonomics. Airline in-cabin requirements vary by carrier and aircraft type — the under-seat dimensions are not standardized. Cats benefit from carriers with multiple openings (top + front) because top-loading reduces handling stress. We rank by build quality, ventilation, escape resistance, and fit to under-seat dimensions for the major U.S. airlines.`,
    buyersGuide: `**Check airline dimensions before buying.** Under-seat dimensions vary by airline and aircraft: Delta 18" x 11" x 11"; United 18" x 11" x 11"; American 19" x 13" x 9"; Southwest 18.5" x 8.5" x 13.5". Always verify with the specific airline for your route. Sherpa Original Deluxe and Sleepypod Air both meet most major-airline requirements.\n\n**Soft-sided for in-cabin air travel.** Soft-sided carriers compress to fit under seats and are the practical choice for in-cabin air travel. Sherpa Original, Petmate Sky Kennel (smaller models), and Sleepypod Air are the most-recommended.\n\n**Hard-sided for cargo or car travel.** IATA-compliant hard-sided kennels (Petmate Sky Kennel, Ruff Tough Kennels) are required for air cargo and provide maximum impact protection in vehicles.\n\n**Top-opening carriers for cats.** Cats experience top-down approaches as predatory and resist front-only loading. Carriers with both top and front openings (Sleepypod, Petmate Two Door Top Load) substantially reduce handling stress.\n\n**Crash-tested car carriers.** Sleepypod Mobile Pet Bed and Petmate kennels with seat-belt loops are the standard car-travel options. Center for Pet Safety publishes independent crash-test results for car restraints.\n\n**Carrier acclimation.** Many cats and small dogs develop carrier aversion from associating the carrier exclusively with vet trips. Leave the carrier accessible in the home with familiar bedding for daily voluntary use — reduces vet-trip stress substantially.`,
    whoShouldntBuy: `Skip cardboard "starter carriers" except for very short transport — they tear easily, lack ventilation, and provide no impact protection. Skip carriers without solid-base support (sagging carriers cause handler shoulder strain). Skip wheeled-stroller pet carriers for general use — they look convenient but are bulky and poorly ventilated for actual travel.`,
    faqs: [
      { q: 'Will this fit on an airplane?', a: 'Depends on the airline and the specific aircraft. Verify under-seat dimensions with the airline before purchase. Sherpa carriers are the most-broadly-airline-approved soft-sided line.' },
      { q: 'Cat or dog carrier?', a: 'Cat-specific carriers tend to have top-load openings and lower interior heights (cats prefer to fit snugly rather than stand). Dog carriers tend to be taller and emphasize stability. Use the right tool for the species.' },
      { q: 'How do I get my cat into the carrier?', a: 'Leave the carrier accessible in the home for days or weeks before the trip. Place favorite bedding inside. Reward voluntary entry. Vet-trip-only carrier use creates carrier aversion.' },
      { q: 'Are crash-tested carriers worth it?', a: 'Yes for regular car travelers. Most "pet seat belts" and standard carriers are not independently crash-tested. Sleepypod and Center for Pet Safety publish actual crash data.' },
    ],
    crossLinks: GENERAL_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'pet-stairs',
    h1Name: 'Pet Stairs & Ramps',
    shortName: 'Pet Stairs & Ramps',
    petType: 'general',
    subcategories: ['Foam stairs (3-step)', 'Foam stairs (4+ step)', 'Plastic ramps', 'Folding ramps', 'Car ramps', 'Bed-height stairs'],
    intro: `Pet stairs and ramps reduce joint stress on senior dogs, dogs with intervertebral disc disease (IVDD), small breeds prone to luxating patella, and senior cats. The clinical case for ramps is strongest in Dachshunds, Corgis, French Bulldogs, and any small-breed dog whose primary access to the bed or couch involves jumping. The choice between stairs and ramps depends on the pet's mobility — dogs with severe arthritis or paresis often find ramps easier than stairs. We rank by stability, weight capacity, surface grip, and ease of folding for storage.`,
    buyersGuide: `**Ramps over stairs for severe arthritis or IVDD.** Stairs require lifting and weight-shifting that can be difficult for dogs with hip dysplasia, severe arthritis, or post-IVDD surgery. Ramps provide a continuous incline with less joint loading.\n\n**Stairs for moderate cases or small dogs.** Foam stairs (PetSafe CozyUp, Frisco) are stable, cushioned, and visually appealing. Foam construction provides traction without slipping.\n\n**Folding ramps for cars.** Folding aluminum or plastic ramps (PetSafe Happy Ride, Pet Gear) make vehicle access dramatically easier for large dogs with mobility issues. Critical for owners with senior large-breed dogs and SUVs or pickup trucks.\n\n**Surface grip matters more than appearance.** Carpeted ramps and stairs provide better grip than smooth plastic. Many ramps come with rubber traction strips that wear out — check replacement availability.\n\n**Weight capacity.** Most pet stairs are rated for 100-150 lbs; pet ramps typically 200-350 lbs. Match to the dog\'s adult weight plus margin.\n\n**Train the dog to use stairs/ramps.** Many dogs initially refuse stairs and ramps in favor of jumping. Reward use with treats, place near the bed or couch, and prevent jumping access while the dog learns.`,
    whoShouldntBuy: `Skip pet stairs for severe arthritis cases — the joint stress of stair-stepping is often worse than jumping. Skip cheap plastic ramps that flex under weight — instability defeats the purpose. Skip ramps with smooth surfaces for any dog with limited grip strength.`,
    faqs: [
      { q: 'Stairs or ramp?', a: 'Stairs for moderate mobility issues and small-to-medium dogs. Ramps for severe arthritis, IVDD recovery, and large dogs needing car access.' },
      { q: 'Foam or wood stairs?', a: 'Foam (PetSafe CozyUp) provides better traction and cushioning. Wood is more aesthetic and durable but slipperier.' },
      { q: 'How tall a ramp do I need?', a: 'Measure the height of the bed, couch, or vehicle. The ramp angle should be 18-25 degrees for comfortable use — a 25" tall couch wants a 50-60" long ramp.' },
      { q: 'Will my dog use them?', a: 'Many dogs initially refuse and jump instead. Train with treats; place at the dog\'s usual jump-off spot; prevent jumping access during the learning period.' },
    ],
    crossLinks: GENERAL_CROSSLINKS,
    preferredVendors: ['amazon', 'chewy'],
  },
  {
    slug: 'pet-cameras',
    h1Name: 'Pet Cameras',
    shortName: 'Pet Cameras',
    petType: 'general',
    subcategories: ['Treat-dispensing cameras', 'Two-way audio', 'Motion-tracking', 'Outdoor / weatherproof', 'Multi-room systems', 'Night-vision cameras'],
    intro: `Pet cameras have become widely affordable, with the entry-level options at $50 and feature-rich treat-dispensing cameras under $200. The legitimate use cases are: separation anxiety monitoring, behavior tracking in owners\' absence, and safety monitoring (e.g., elderly pet check-ins). The market is dominated by Furbo (treat-dispensing premium), Petcube (treat-dispensing alternative), and general home security cameras (Wyze, Ring) that work fine for pets at much lower cost. We rank by video quality, audio quality, smartphone app responsiveness, subscription requirements, and value.`,
    buyersGuide: `**Wyze cameras are the value choice if you don\'t need a treat dispenser.** $30-50 Wyze v3 cameras provide 1080p video, free cloud storage for short clips, and excellent app responsiveness. For owners who just want to check in on their pet, this is dramatically more cost-effective than pet-specific cameras.\n\n**Furbo Dog Camera is the premium treat-tossing option.** $200-250 with a $7/month optional subscription for activity alerts. Treat-tossing is genuinely useful for separation-anxiety training (positive reinforcement at the right moment) and recall practice. Furbo has the most-developed bark-detection and barking-alert features.\n\n**Petcube Bites and Play 2 are Furbo alternatives.** Similar feature set, similar price range. Petcube\'s subscription includes more cloud-storage features.\n\n**Two-way audio matters for separation anxiety.** Speaking to the dog during distress events provides some comfort but can also trigger frustrated barking when the dog cannot find the source. Test with your specific dog before relying on audio as a calming intervention.\n\n**Subscription costs add up.** Many cameras have ongoing subscription fees for full features (cloud storage, AI detection, longer history). Calculate 3-year ownership cost when comparing.\n\n**Wi-Fi requirements.** All these cameras require home Wi-Fi. Verify coverage in the room where the camera will be installed. Outdoor cameras often need a Wi-Fi extender to maintain connection.`,
    whoShouldntBuy: `Skip pet cameras as the primary intervention for severe separation anxiety — monitoring the dog without intervening can worsen owner anxiety and does not address the underlying behavioral issue. Consult a certified behaviorist. Skip treat-tossing cameras for overweight pets — the convenience of remote treating contributes to caloric overfeeding.`,
    faqs: [
      { q: 'Furbo vs Wyze?', a: 'Furbo for treat-tossing and bark detection. Wyze for cheap general monitoring. Many owners use Wyze cameras for pet monitoring and find the additional Furbo features not worth the price.' },
      { q: 'Are treat dispensers actually useful?', a: 'Yes — for separation-anxiety training (timing positive reinforcement during calm moments), recall practice, and behavior shaping. Less useful as a daily "treat whenever I miss you" tool.' },
      { q: 'Subscription required?', a: 'Most cameras work without subscription for basic monitoring. Subscriptions unlock cloud storage, AI detection, and history features.' },
      { q: 'Two-way audio — does it help anxious dogs?', a: 'Mixed evidence. Some dogs find owner voice calming; others become more agitated trying to find the source. Test with your specific dog.' },
    ],
    crossLinks: GENERAL_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
  {
    slug: 'pet-gps-trackers',
    h1Name: 'Pet GPS Trackers',
    shortName: 'GPS Trackers',
    petType: 'general',
    subcategories: ['Real-time GPS (subscription)', 'Bluetooth-only trackers', 'Cellular GPS', 'Cat-specific trackers', 'Activity + GPS combined', 'Coverage map verification'],
    intro: `GPS trackers for pets fall into two categories with dramatically different capabilities: real-time cellular GPS trackers (Whistle, Fi, Tractive) that require monthly subscriptions and provide live location anywhere with cell coverage, and Bluetooth trackers (AirTag, Tile) that only locate the pet when within Bluetooth range of a participating phone. The right choice depends on the use case: lost-pet recovery anywhere benefits from cellular GPS; indoor-mostly pets with occasional escape risk may be adequately served by Bluetooth trackers leveraging the Apple Find My or Tile network. We rank by GPS accuracy, battery life, subscription cost, network coverage, and species/size fit.`,
    buyersGuide: `**Cellular GPS trackers for outdoor and lost-recovery use cases.** Fi, Whistle, and Tractive provide real-time location via cellular networks. Monthly subscription ($5-12) is required. Coverage is essentially nationwide (LTE), but rural and remote-area coverage gaps still exist. Verify coverage at home and along regular routes.\n\n**Fi is the standout for dogs.** Long battery life (multi-week), durable construction, good app, smart-home integration. Higher upfront cost ($150-200); requires subscription. The most-recommended cellular tracker in the dog community.\n\n**Tractive is the international and small-pet option.** Lighter weight options suitable for cats and small dogs. Strong international coverage. Subscription required.\n\n**Apple AirTag for indoor pets and short-range recovery.** AirTag uses the Apple Find My network — millions of iPhones contribute to the location network. Excellent for finding pets that escape locally; poor for pets that travel far before being found. No subscription required. Recent reports of escaped cats found via AirTag are increasingly common.\n\n**Bluetooth-only trackers (Tile) for short-range scenarios.** Tile and similar require the pet to be within Bluetooth range (about 100ft) of a participating phone. Useful for indoor-mostly pets; insufficient for outdoor cats or active dogs.\n\n**Battery life trade-off.** Real-time GPS drains batteries faster than location-on-demand. Most cellular trackers run 1-3 weeks per charge in typical use; battery life drops dramatically with continuous tracking enabled.\n\n**Cat-specific considerations.** Cat collars must be break-away safety collars to prevent strangulation. Many GPS trackers are too heavy for cats — verify weight (under 30g is the cat-friendly threshold).`,
    whoShouldntBuy: `Skip cellular GPS trackers without verifying coverage in your specific area — rural and remote areas still have coverage gaps. Skip heavy GPS trackers for cats (strangulation and discomfort risk). Skip GPS trackers as a substitute for fenced yards and leashes — they help recover lost pets but do not prevent loss.`,
    faqs: [
      { q: 'Subscription or no subscription?', a: 'Subscription cellular GPS for real-time tracking anywhere. AirTag/Tile for no-subscription short-range and lost-recovery on the Apple/Tile network.' },
      { q: 'Will it work in rural areas?', a: 'Depends on the specific cellular network. Verify coverage at home and along regular walking routes. Some rural and mountainous areas still have gaps.' },
      { q: 'Battery life?', a: '1-3 weeks for most cellular GPS trackers in typical use. Continuous live tracking reduces battery life dramatically.' },
      { q: 'Can my cat wear one?', a: 'Only on a break-away safety collar. Verify the tracker weight is under 30g for cat comfort. Cellular trackers can be heavy; lighter Bluetooth trackers may be more practical.' },
    ],
    crossLinks: GENERAL_CROSSLINKS,
    preferredVendors: ['amazon'],
  },
]

export const CATEGORY_BY_SLUG: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
)
