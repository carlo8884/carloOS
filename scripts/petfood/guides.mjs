import { SRC, STD } from './_shared.mjs'

const D = 'guides'

const RAW = [
  {
    dir: D, slug: 'pet-food-recalls-and-fda', date: '2026-06-01',
    title: 'Pet Food Recalls and the FDA',
    metaTitle: 'Pet Food Recalls and FDA Oversight Explained | PetFood.com',
    metaDesc:
      'How pet food recalls work, the FDA CVM role, common recall causes (pathogens, vitamin D, aflatoxin), how to check the database, and what to do if affected.',
    category: 'Foundational Guide', readTime: '10 min',
    hero:
      "Pet food recalls happen, and an owner who understands how they work — what triggers them, who oversees them, and how to check — is better protected than one who relies on brand reputation alone. This page explains the FDA's role, the most common recall causes, and the practical steps to monitor recalls and respond if a food you feed is affected.",
    toc: [
      { label: 'Who Regulates Pet Food', id: 'regulators' },
      { label: 'How Recalls Work', id: 'howwork' },
      { label: 'Common Recall Causes', id: 'causes' },
      { label: 'Recall Classes', id: 'classes' },
      { label: 'Checking the Database', id: 'database' },
      { label: 'If Your Food Is Recalled', id: 'ifrecalled' },
    ],
    body: [
      { p: "Pet food in the United States is overseen federally by the FDA's Center for Veterinary Medicine (FDA CVM) and enforced at the state level by feed-control officials, with AAFCO providing the model regulations states adopt. Recalls are the mechanism for removing unsafe product from the market, and they occur for contamination, formulation errors, and labeling problems. Understanding the system lets owners track recalls themselves rather than relying on news to reach them. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'Who Regulates Pet Food', id: 'regulators' },
      { p: "FDA CVM holds federal authority over pet food safety, ingredient approval, and labeling, and can request or mandate recalls. State departments of agriculture enforce feed law within each state. AAFCO itself is not a regulator — it publishes the model regulations and nutrient profiles states adopt, and does not test, certify, or recall products. The recall authority sits with the FDA and the states. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'How Recalls Work', id: 'howwork' },
      { p: "Most pet food recalls are voluntary, initiated by the manufacturer (sometimes at the FDA's urging) when a problem is identified through testing, inspection, complaints, or adverse-event reports. The FDA can also request a recall and, under the Food Safety Modernization Act, has mandatory recall authority if a company will not act. The manufacturer issues the recall notice with affected lot numbers and best-by dates, which is why retaining the original packaging matters. See [[Pet Food Storage and Safety|/feeding/food-storage-and-safety]]." },
      { h2: 'Common Recall Causes', id: 'causes' },
      { p: "The most frequent recall causes are: pathogen contamination (Salmonella, Listeria — affecting raw diets and treats often, and pets and humans alike); nutrient formulation errors, notably excess vitamin D, which has caused multiple recalls and can be toxic; aflatoxin (a mold toxin in grains, which has caused fatal recalls); and foreign material or processing defects. Salmonella in raw and freeze-dried raw diets is a recurring theme. See [[Vitamins in Pet Food|/nutrition/vitamins-in-pet-food]] and [[Raw Pet Food Evaluation|/guides/raw-pet-food-evaluation]]." },
      { h2: 'Recall Classes', id: 'classes' },
      { p: "The FDA classifies recalls by hazard severity: Class I (reasonable probability of serious harm or death), Class II (temporary or reversible harm, or remote probability of serious harm), and Class III (unlikely to cause harm but in violation of regulations). A Class I recall — for example, toxic vitamin D levels or a dangerous pathogen — warrants immediate action; lower classes are less urgent but still mean the product should not be fed." },
      { h2: 'Checking the Database', id: 'database' },
      { p: "The FDA CVM maintains a Recalls and Withdrawals database for animal and veterinary products, updated as recalls are issued, and the FDA offers email and RSS alerts. Checking periodically, or subscribing to alerts, is the most reliable way to learn of a recall affecting a food you feed — more reliable than waiting for it to make the news. Several third parties also aggregate pet food recalls. See [[Pet Food Storage and Safety|/feeding/food-storage-and-safety]]." },
      { h2: 'If Your Food Is Recalled', id: 'ifrecalled' },
      { p: "If a food you feed is recalled, stop feeding it immediately, check the lot number and best-by date against the recall notice (which is why keeping the original bag or can matters), follow the manufacturer's and FDA's instructions for disposal or return, watch your animal for the relevant signs, and consult your veterinarian if the animal shows symptoms or if the recall is for a serious hazard. Report adverse events to the FDA, which helps identify problems early. See [[Pet Food Storage and Safety|/feeding/food-storage-and-safety]]." },
    ],
    related: [
      { label: 'Pet Food Storage and Safety', href: '/feeding/food-storage-and-safety' },
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
    ],
    sources: [...STD, SRC.fdaPet],
  },

  {
    dir: D, slug: 'dental-health-and-nutrition', date: '2026-06-01',
    title: 'Dental Health and Nutrition',
    metaTitle: 'Dental Health and Diet for Dogs and Cats | PetFood.com',
    metaDesc:
      'Whether food cleans teeth, what dental diets and the VOHC seal actually do, the limits of kibble, and how nutrition fits into real dental care.',
    category: 'Foundational Guide', readTime: '9 min',
    hero:
      "Dental disease is one of the most common health problems in dogs and cats, and the belief that dry food keeps teeth clean is widespread and largely wrong. Diet can play a supporting role through purpose-built dental products, but it does not replace dental care. This page covers what food can and cannot do for teeth.",
    toc: [
      { label: 'The Scale of Dental Disease', id: 'scale' },
      { label: 'Does Kibble Clean Teeth?', id: 'kibble' },
      { label: 'How Dental Diets Work', id: 'dentaldiets' },
      { label: 'The VOHC Seal', id: 'vohc' },
      { label: 'Dental Treats and Chews', id: 'treats' },
      { label: 'Nutrition Is Not Enough', id: 'notenough' },
    ],
    body: [
      { p: "Periodontal disease affects a majority of dogs and cats by middle age and contributes to pain, tooth loss, and systemic effects. Diet is frequently invoked as a dental solution — most commonly the claim that dry food cleans teeth — but the evidence is more limited than the marketing suggests. Specially designed dental products have a real but modest effect; ordinary food does not substitute for dental care. See [[Wet vs Dry Food|/compare/wet-vs-dry-food]]." },
      { h2: 'The Scale of Dental Disease', id: 'scale' },
      { p: "Plaque (a bacterial film) forms on teeth continuously and mineralizes into tartar, driving gingivitis and periodontal disease. The high prevalence of dental disease in pets reflects how little routine dental care most receive. Because diet contact with the teeth is brief and most food does little mechanical cleaning, nutrition is a minor player in a problem that mainly requires brushing and professional cleaning." },
      { h2: 'Does Kibble Clean Teeth?', id: 'kibble' },
      { p: "The common belief that dry kibble scrubs teeth is largely a myth. Most kibble shatters on first contact with little abrasive action, and dental disease is common in kibble-fed animals. There is no strong evidence that ordinary dry food meaningfully reduces dental disease compared with wet food. Choosing dry food primarily for dental benefit is not well supported. See [[Wet vs Dry Food|/compare/wet-vs-dry-food]]." },
      { h2: 'How Dental Diets Work', id: 'dentaldiets' },
      { p: "Purpose-built dental diets differ from ordinary kibble: they use a larger kibble with a fibrous matrix engineered so the tooth sinks into the kibble before it breaks, providing mechanical scrubbing along the tooth surface, and some incorporate compounds that reduce tartar mineralization. These designed dental kibbles do have measurable plaque- and tartar-reducing effects, unlike ordinary kibble. The design, not the dryness, produces the benefit." },
      { h2: 'The VOHC Seal', id: 'vohc' },
      { p: "The Veterinary Oral Health Council (VOHC) awards a seal to dental products — foods, treats, chews, and additives — that meet a defined standard for reducing plaque or tartar in controlled testing. The VOHC seal is the most reliable signal that a dental product actually works, because it reflects independent standard-setting rather than marketing. Looking for the VOHC seal is the practical way to identify effective dental products." },
      { h2: 'Dental Treats and Chews', id: 'treats' },
      { p: "Dental chews and treats can reduce plaque and tartar through mechanical action and, in some cases, active ingredients, and VOHC-accepted chews have demonstrated efficacy. They carry calories that must be counted within the daily budget and the 10 percent treat allowance, and hard chews carry a tooth-fracture risk if too hard. Choose appropriately sized, VOHC-accepted products and count the calories. See [[Treats and the 10 Percent Rule|/feeding/treats-and-the-ten-percent-rule]]." },
      { h2: 'Nutrition Is Not Enough', id: 'notenough' },
      { p: "Even the best dental diet or chew is an adjunct, not a replacement, for dental care. The gold standard is daily tooth brushing plus professional cleanings under anesthesia as recommended by the veterinarian. Diet and dental products support oral health at the margins; they do not prevent periodontal disease on their own. Owners should not rely on food to keep teeth healthy. See [[Senior Pet Diets|/diets/senior-pet-diets]]." },
    ],
    related: [
      { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
      { label: 'Treats and the 10 Percent Rule', href: '/feeding/treats-and-the-ten-percent-rule' },
      { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'pet-obesity-epidemic', date: '2026-06-01',
    title: 'The Pet Obesity Epidemic',
    metaTitle: 'The Pet Obesity Epidemic — Causes and Costs | PetFood.com',
    metaDesc:
      'How widespread pet obesity is, why it shortens lifespan and worsens disease, the feeding and behavioral causes, and the evidence that lean pets live longer.',
    category: 'Foundational Guide', readTime: '10 min',
    hero:
      "Pet obesity is the most common preventable health problem in dogs and cats, affecting a majority of animals in many surveys, and it shortens lifespan and worsens nearly every chronic disease. It is also among the most fixable through feeding decisions. This page covers the scale, the causes, the costs, and the strong evidence that keeping a pet lean adds years.",
    toc: [
      { label: 'How Widespread', id: 'widespread' },
      { label: 'Why It Matters', id: 'whymatters' },
      { label: 'The Lifespan Evidence', id: 'lifespan' },
      { label: 'Causes', id: 'causes' },
      { label: 'Owner Perception', id: 'perception' },
      { label: 'Reversing It', id: 'reversing' },
    ],
    body: [
      { p: "Surveys consistently find that more than half of dogs and cats in many countries are overweight or obese, making it the most common nutrition-related disorder in companion animals. Unlike many diseases, obesity is largely preventable and reversible through feeding and activity. Its consequences are serious and well-documented, and the benefits of keeping a pet lean are among the clearest findings in companion-animal nutrition. See [[Weight-Management Diets|/diets/weight-management-diets]]." },
      { h2: 'How Widespread', id: 'widespread' },
      { p: "Estimates from veterinary surveys regularly put the overweight-or-obese share of pet dogs and cats above 50 percent, and rising over recent decades. The trend mirrors the human obesity trend and shares causes: energy-dense food, sedentary lifestyles, and overfeeding. Because obesity develops gradually and is normalized, it is often unrecognized until it causes a problem. See [[Body Condition Scoring|/feeding/body-condition-scoring]]." },
      { h2: 'Why It Matters', id: 'whymatters' },
      { p: "Excess fat is not inert — adipose tissue is metabolically active and pro-inflammatory. Obesity is associated with osteoarthritis, diabetes mellitus (especially in cats), respiratory and cardiovascular strain, increased anesthetic and surgical risk, certain cancers, urinary disease, and reduced quality of life and activity. It worsens the management of nearly every concurrent chronic condition. The health cost is broad and substantial." },
      { h2: 'The Lifespan Evidence', id: 'lifespan' },
      { p: "The most compelling evidence comes from a lifetime study of Labrador Retrievers in which littermates were fed either to a lean body condition or 25 percent more. The lean-fed dogs lived a median of roughly two years longer, developed signs of chronic disease later, and needed treatment for osteoarthritis later. Keeping a dog lean measurably extended both lifespan and healthspan. Few nutritional interventions have evidence this strong. See [[Weight-Management Diets|/diets/weight-management-diets]]." },
      { h2: 'Causes', id: 'causes' },
      { p: "The causes are mostly about energy balance: overfeeding (often by following bag guidelines that overestimate, or by free-feeding), uncounted treats and table scraps, energy-dense diets fed by volume rather than calories, neutering (which lowers energy needs), reduced activity in indoor and aging animals, and breed predispositions. Most cases are driven by feeding more calories than the animal expends. See [[How Much to Feed a Dog|/feeding/how-much-to-feed-a-dog]] and [[Treats and the 10 Percent Rule|/feeding/treats-and-the-ten-percent-rule]]." },
      { h2: 'Owner Perception', id: 'perception' },
      { p: "A persistent obstacle is that many owners do not recognize their pet as overweight, in part because the overweight body shape has become normalized. Studies show owners systematically underestimate their pet's body condition. Objective tools — body condition scoring and a target weight set by the veterinarian — counter this perception gap, which is why hands-on assessment beats visual impression. See [[Body Condition Scoring|/feeding/body-condition-scoring]]." },
      { h2: 'Reversing It', id: 'reversing' },
      { p: "Obesity is reversible with a structured plan: a veterinarian-set target weight, a calorie deficit (ideally via a weight-management diet that preserves protein and nutrients), measured feeding with a kitchen scale, treat discipline within the 10 percent rule, increased activity, and regular reweighing. Loss should be gradual — and especially careful in cats to avoid hepatic lipidosis. The payoff, in years of healthier life, is large. See [[Weight-Management Diets|/diets/weight-management-diets]]." },
    ],
    related: [
      { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
      { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
      { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
    ],
    sources: [...STD],
  },

  {
    dir: D, slug: 'how-to-choose-a-pet-food', date: '2026-06-01',
    title: 'How to Choose a Pet Food',
    metaTitle: 'How to Choose a Pet Food — A Framework | PetFood.com',
    metaDesc:
      'A practical framework for choosing pet food — AAFCO substantiation, manufacturer transparency, the WSAVA questions, life-stage match, and ignoring marketing.',
    category: 'Foundational Guide', readTime: '10 min',
    hero:
      "Choosing a pet food is overwhelming because the market is enormous and the marketing is loud. A sound choice comes from a short list of evidence-based questions — about completeness, manufacturer transparency, and life-stage match — rather than from front-of-bag claims. This page lays out a framework, anchored to the WSAVA selection guidance, for choosing well.",
    toc: [
      { label: 'Start with Completeness', id: 'completeness' },
      { label: 'The WSAVA Questions', id: 'wsava' },
      { label: 'Manufacturer Transparency', id: 'transparency' },
      { label: 'Match the Life Stage', id: 'lifestage' },
      { label: 'Ignore the Marketing', id: 'marketing' },
      { label: 'A Practical Checklist', id: 'checklist' },
    ],
    body: [
      { p: "The pet food aisle offers thousands of options and a barrage of marketing, but a defensible choice rests on a handful of evidence-based criteria. The strongest framework comes from the WSAVA Global Nutrition Committee, which directs owners to ask about a manufacturer's nutritional expertise, quality control, and research rather than judging by ingredient marketing. This page turns that guidance into a practical process. See [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Start with Completeness', id: 'completeness' },
      { p: "The first filter is the AAFCO nutritional adequacy statement: confirm the food is complete and balanced for your animal's life stage, and prefer feeding-trial substantiation over formulation-only where available. A food without a complete-and-balanced statement (carrying instead intermittent or supplemental feeding only) is a treat or topper, not a diet. This single check rules out a great deal. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'The WSAVA Questions', id: 'wsava' },
      { p: "The WSAVA recommends asking the manufacturer: Does it employ a qualified nutritionist (such as a board-certified veterinary nutritionist or a PhD in animal nutrition)? Who formulates the diets and what are their credentials? Are the diets tested by AAFCO feeding trials? What specific quality-control measures are used? Where are the foods made? Does the company conduct and publish research? Manufacturers that answer these readily and well are more trustworthy than those that cannot. See [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Manufacturer Transparency', id: 'transparency' },
      { p: "Transparency is a strong signal: a manufacturer that discloses ingredient sourcing, manufacturing locations, quality-control and audit practices (such as a GFSI-benchmarked certification), nutritionist involvement, and a clear recall history is more accountable than one that hides behind marketing. Owning and operating the manufacturing facility, rather than co-packing anonymously, is a positive sign. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
      { h2: 'Match the Life Stage', id: 'lifestage' },
      { p: "Match the diet to the animal's life stage and needs: growth diets (including large-size growth validation for big-breed puppies) for the young, adult maintenance for healthy adults, and condition-specific therapeutic diets for diagnosed disease. The senior label is unregulated, so judge senior foods on their actual formulation. The right food depends on the individual, not on a single best brand. See [[Pet Food by Life Stage|/life-stage]] and [[Large-Breed Puppy Nutrition|/feeding/large-breed-puppy-nutrition]]." },
      { h2: 'Ignore the Marketing', id: 'marketing' },
      { p: "Discount the front-of-bag adjectives — holistic, premium, gourmet (undefined), and the negative claims like no by-products or grain-free (marketing positions, not quality measures). Natural and organic are defined production claims, not nutrition guarantees. Base the decision on the regulated back of the bag and the manufacturer's answers, not the imagery. See [[Pet Food Marketing Terms|/myths/marketing-terms-decoded]]." },
      { h2: 'A Practical Checklist', id: 'checklist' },
      { ol: [
        "Confirm a complete-and-balanced AAFCO statement for the correct life stage; prefer feeding-trial substantiation.",
        "Ask the WSAVA questions; favor manufacturers that employ a qualified nutritionist and answer readily.",
        "Check manufacturer transparency: sourcing, manufacturing, quality control, recall history.",
        "Match the life stage and any medical needs to the diet.",
        "Read the calorie statement so you can feed the right amount, and ignore undefined marketing terms.",
        "Reassess via body condition over the following weeks and adjust.",
      ]},
    ],
    related: [
      { label: 'Scoring Methodology', href: '/guides/methodology' },
      { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
    ],
    sources: [...STD, SRC.fdaPet],
  },
]

export const GUIDES = RAW.map((p) => ({ ...p, hubName: 'Guides' }))
