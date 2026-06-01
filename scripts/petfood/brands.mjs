import { SRC, STD } from './_shared.mjs'

const D = 'brands'
// Brand pages use contentType 'brand'; we keep 'nutrition' generic in the
// generator, but brand evaluation framing lives in the copy. No purchase CTAs.

const RAW = [
  {
    dir: D, slug: 'purina-pro-plan-evaluation', date: '2026-06-01',
    title: 'Purina Pro Plan — An Independent Evaluation',
    metaTitle: 'Purina Pro Plan — Independent Evaluation | PetFood.com',
    metaDesc:
      'Five-dimension evaluation of Purina Pro Plan — Nestle Purina corporate context, research and nutritionist depth, manufacturing, AAFCO posture, and recall history.',
    category: 'Brand Evaluation', readTime: '11 min',
    hero:
      "Purina Pro Plan is one of the highest-volume mainstream premium lines and one of the brands the WSAVA selection criteria tend to favor, because its parent invests heavily in nutrition research and feeding trials. This independent evaluation runs Pro Plan through the PetFood.com five-dimension rubric — corporate context, research depth, manufacturing, AAFCO posture, and recall history. Never paid placement.",
    toc: [
      { label: 'Corporate Context', id: 'corporate' },
      { label: 'Research and Nutritionists', id: 'research' },
      { label: 'Product Lines', id: 'lines' },
      { label: 'Manufacturing', id: 'manufacturing' },
      { label: 'AAFCO Posture', id: 'aafco' },
      { label: 'Recall History', id: 'recall' },
    ],
    body: [
      { p: "Purina Pro Plan is the premium line of Nestle Purina PetCare, evaluated here against the PetFood.com five-dimension rubric: corporate context, ingredient sourcing and research, manufacturing, AAFCO substantiation, and recall history. The evaluation is independent and never influenced by any commercial relationship. Pro Plan is notable for the depth of nutrition research and feeding-trial substantiation behind it, which aligns with the WSAVA selection criteria. See [[How to Choose a Pet Food|/guides/how-to-choose-a-pet-food]] and [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Corporate Context', id: 'corporate' },
      { p: "Nestle Purina PetCare is one of the largest pet food companies in the world, a division of Nestle, with deep resources for research and manufacturing. Scale brings both advantages (research budgets, quality-control infrastructure, feeding-trial capacity) and the usual scrutiny that attaches to large corporate ownership. For evaluating a diet, the relevant corporate question is whether that scale is directed toward nutritional rigor — and Purina is among the manufacturers that most visibly invest in it." },
      { h2: 'Research and Nutritionists', id: 'research' },
      { p: "Purina employs board-certified veterinary nutritionists and PhD animal nutritionists and operates a substantial research program, publishing peer-reviewed studies (including a notable lifetime study on the lifespan benefit of lean body condition in dogs). On the WSAVA criteria — qualified nutritionists on staff, feeding-trial testing, and published research — Pro Plan scores strongly. This research depth is one of the clearest points in its favor on our rubric. See [[The Pet Obesity Epidemic|/guides/pet-obesity-epidemic]]." },
      { h2: 'Product Lines', id: 'lines' },
      { p: "Pro Plan spans a wide range — life-stage diets, large- and small-breed formulas, sensitive-skin-and-stomach lines, performance diets, and specialized formulas — plus the separate Purina Pro Plan Veterinary Diets therapeutic range sold through veterinarians. The breadth means an owner can usually match a specific need within the line, and the veterinary therapeutic diets carry disease-specific formulation and, in cases, supporting evidence. See [[Prescription vs OTC Diets|/compare/prescription-vs-otc-diets]]." },
      { h2: 'Manufacturing', id: 'manufacturing' },
      { p: "Purina owns and operates its manufacturing facilities rather than relying on anonymous co-packing, which supports quality-control accountability — a positive signal under our manufacturing dimension and the WSAVA criteria. Owning the plants allows direct control over process, sourcing verification, and testing. As with any manufacturer, the meaningful detail is the specific quality-control and audit posture, which Purina discloses more than many smaller brands. See [[How to Choose a Pet Food|/guides/how-to-choose-a-pet-food]]." },
      { h2: 'AAFCO Posture', id: 'aafco' },
      { p: "Many Pro Plan diets are substantiated by AAFCO feeding trials rather than formulation alone — the higher-evidence pathway — which is a meaningful strength on our rubric, since feeding-trial substantiation is one of the WSAVA-favored signals. Owners should still confirm the specific formula and life-stage statement on the bag they buy, since substantiation can vary by product. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'Recall History', id: 'recall' },
      { p: "Like nearly every large manufacturer, Purina has had recalls over the years, which should be evaluated by cause, severity, and response rather than by count alone — a large-volume manufacturer naturally has more total product subject to recall. The relevant questions are whether recalls were handled transparently and what corrective action followed. The FDA CVM Recalls and Withdrawals database is the source of record for the current picture. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
    ],
    related: [
      { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
      { label: 'Scoring Methodology', href: '/guides/methodology' },
      { label: "Hill's vs Royal Canin", href: '/brands/hills-vs-royal-canin' },
    ],
    sources: [...STD, SRC.fdaPet],
  },

  {
    dir: D, slug: 'taste-of-the-wild-evaluation', date: '2026-06-01',
    title: 'Taste of the Wild — An Independent Evaluation',
    metaTitle: 'Taste of the Wild — Independent Evaluation | PetFood.com',
    metaDesc:
      'Five-dimension evaluation of Taste of the Wild — Diamond Pet Foods context, grain-free positioning and the DCM question, manufacturing, AAFCO posture, recalls.',
    category: 'Brand Evaluation', readTime: '11 min',
    hero:
      "Taste of the Wild built a large following on grain-free, novel-protein recipes at a mid-market price, but it also sits in the category most associated with the FDA dilated cardiomyopathy investigation and is made by Diamond Pet Foods, whose recall history is relevant. This independent evaluation runs the brand through the PetFood.com five-dimension rubric. Never paid placement.",
    toc: [
      { label: 'Corporate Context', id: 'corporate' },
      { label: 'Grain-Free Positioning', id: 'grainfree' },
      { label: 'The DCM Question', id: 'dcm' },
      { label: 'Research and Nutritionists', id: 'research' },
      { label: 'Manufacturing', id: 'manufacturing' },
      { label: 'Recall History', id: 'recall' },
    ],
    body: [
      { p: "Taste of the Wild is a grain-free, ancestral-themed line made by Diamond Pet Foods, evaluated here against the PetFood.com five-dimension rubric. It is a popular mid-priced option whose grain-free, legume-inclusive positioning intersects with two important issues on our rubric: the FDA DCM investigation and the manufacturer's recall history. The evaluation is independent and never influenced by any commercial relationship. See [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]] and [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Corporate Context', id: 'corporate' },
      { p: "Taste of the Wild is owned and manufactured by Diamond Pet Foods, a large privately held US manufacturer that produces many brands across its facilities. Diamond's scale gives manufacturing capacity, but its corporate history includes a significant recall event (discussed below) that bears on the manufacturing and recall dimensions of our rubric. Corporate context here is mixed: substantial scale, with a recall record that warrants attention." },
      { h2: 'Grain-Free Positioning', id: 'grainfree' },
      { p: "Taste of the Wild is built on grain-free recipes using novel proteins (bison, venison, fish) and legume- and potato-based carbohydrate. Grain-free is a marketing position, not a quality tier, and as discussed across this site it does not reduce allergy risk for most animals and is not the same as low-carbohydrate. The legume-inclusive grain-free formulation is also the pattern at the center of the DCM investigation. See [[Grain-Free vs Grain-Inclusive|/compare/grain-free-vs-grain-inclusive]] and [[Legumes — Peas, Lentils, and Chickpeas|/ingredients/legumes-peas-and-lentils]]." },
      { h2: 'The DCM Question', id: 'dcm' },
      { p: "Grain-free, legume-heavy diets are the formulation pattern associated — though not proven causally — with diet-associated dilated cardiomyopathy in the FDA CVM investigation, and several grain-free brands in this category were named in the FDA's case reporting. The mechanism remains unresolved. For owners of DCM-predisposed breeds, a legume-heavy grain-free diet is worth discussing with a veterinarian. This open question is a meaningful caution on our rubric for the grain-free category broadly. See [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]]." },
      { h2: 'Research and Nutritionists', id: 'research' },
      { p: "On the WSAVA criteria — qualified nutritionists on staff, feeding-trial substantiation, and published research — mid-market grain-free brands generally disclose less than the largest research-driven manufacturers. The relevant questions to ask are whether the company employs a board-certified veterinary nutritionist, whether diets are feeding-trial tested, and what research it conducts. Owners should seek these answers directly rather than relying on the brand's ancestral marketing narrative. See [[How to Choose a Pet Food|/guides/how-to-choose-a-pet-food]]." },
      { h2: 'Manufacturing', id: 'manufacturing' },
      { p: "Diamond Pet Foods manufactures Taste of the Wild in its own facilities, which supports control but also means the brand inherits the facilities' quality-control track record. The manufacturing dimension is best evaluated on disclosed quality-control and audit practices and on the recall history below. Manufacturer transparency on sourcing and process is the signal to seek. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
      { h2: 'Recall History', id: 'recall' },
      { p: "Diamond Pet Foods was at the center of a major 2012 Salmonella recall affecting multiple brands made at one of its facilities, an event that sickened pets and people and remains the most significant mark on the manufacturer's record. This history is material under our recall dimension. Recalls should be judged by cause, severity, and the corrective response, and the FDA CVM database holds the current record. A serious past recall warrants attention to whether manufacturing controls have since been strengthened. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
    ],
    related: [
      { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
      { label: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
      { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
    ],
    sources: [...STD, SRC.fdaDcm],
  },

  {
    dir: D, slug: 'wellness-vs-merrick', date: '2026-06-01',
    title: 'Wellness vs Merrick',
    metaTitle: 'Wellness vs Merrick — Brand Comparison | PetFood.com',
    metaDesc:
      'Side-by-side evaluation of two natural-positioned brands — corporate ownership, formulation philosophy, AAFCO posture, manufacturing, and recall history.',
    category: 'Brand Evaluation', readTime: '11 min',
    hero:
      "Wellness and Merrick are two natural-positioned premium brands that occupy similar shelf space, both now under large corporate ownership despite their independent-brand image. This independent comparison runs both through the PetFood.com five-dimension rubric — ownership, formulation, AAFCO posture, manufacturing, and recalls. Never paid placement.",
    toc: [
      { label: 'Two Natural Brands', id: 'twobrands' },
      { label: 'Corporate Ownership', id: 'ownership' },
      { label: 'Formulation Philosophy', id: 'formulation' },
      { label: 'AAFCO Posture', id: 'aafco' },
      { label: 'Manufacturing', id: 'manufacturing' },
      { label: 'Recall History', id: 'recall' },
    ],
    body: [
      { p: "Wellness and Merrick are premium brands positioned on natural ingredients and recognizable whole foods, and both compete for the same buyer. This comparison evaluates them side by side on the PetFood.com five-dimension rubric, independent of any commercial relationship. A recurring theme is that both, despite an artisanal brand image, are owned by large corporations — a reminder that brand image and corporate reality often differ. See [[Pet Food Marketing Terms|/myths/marketing-terms-decoded]] and [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'Two Natural Brands', id: 'twobrands' },
      { p: "Both brands lean on natural and whole-ingredient marketing, with named meats, recognizable produce, and an emphasis on what they exclude (artificial colors, certain by-products). As covered elsewhere, natural is a narrowly defined AAFCO term and not a quality guarantee, and the absence of by-products is a marketing position rather than a nutritional upgrade. The brands should be judged on substance, not the natural framing. See [[The By-Products Myth|/myths/by-products-myth]]." },
      { h2: 'Corporate Ownership', id: 'ownership' },
      { p: "Wellness (Wellness Pet Company) and Merrick are both owned by large corporate parents — Merrick was acquired by Nestle Purina, and Wellness sits within a large pet-nutrition holding company. The independent-artisan brand image of both predates and obscures this corporate ownership. Corporate ownership is neither inherently good nor bad; it matters insofar as it brings (or fails to bring) research and quality-control resources. The point for buyers is to evaluate the reality, not the image." },
      { h2: 'Formulation Philosophy', id: 'formulation' },
      { p: "Both offer grain-inclusive and grain-free lines; as with all grain-free, the legume-inclusive formulas intersect with the DCM question and the grain-free-is-not-low-carb point. Both emphasize named animal proteins early in the ingredient list, which is a transparency positive, though ingredient order can be affected by fresh-meat-first ranking and ingredient splitting. Judge the specific formula on its panel and analysis, not the brand's general philosophy. See [[Ingredient Splitting|/ingredients/ingredient-splitting]] and [[Grain-Free vs Grain-Inclusive|/compare/grain-free-vs-grain-inclusive]]." },
      { h2: 'AAFCO Posture', id: 'aafco' },
      { p: "The key questions for both are whether diets are substantiated by feeding trial or formulation alone, whether the company employs a board-certified veterinary nutritionist, and whether it conducts research — the WSAVA-favored signals. Larger corporate ownership can bring more of this capacity, but it must be verified per brand and per formula. Owners should confirm the AAFCO statement on the specific product and ask the WSAVA questions of each company. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'Manufacturing', id: 'manufacturing' },
      { p: "Manufacturing arrangements (owned plants versus co-packing) and disclosed quality-control practices differ and should be evaluated per brand. Corporate ownership by a large manufacturer can provide established quality-control infrastructure. As always, the meaningful signal is transparency about where and how the food is made and what testing is done, rather than the brand's marketing. See [[How to Choose a Pet Food|/guides/how-to-choose-a-pet-food]]." },
      { h2: 'Recall History', id: 'recall' },
      { p: "Both brands have had recalls over the years, as most established brands have; they should be assessed by cause, severity, and response rather than count. The FDA CVM Recalls and Withdrawals database is the source of record for each brand's current history. A balanced comparison weighs the recall record alongside the other four dimensions rather than treating any single recall as decisive. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
    ],
    related: [
      { label: 'The By-Products Myth', href: '/myths/by-products-myth' },
      { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
      { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
    ],
    sources: [...STD, SRC.fdaPet],
  },

  {
    dir: D, slug: 'kirkland-signature-evaluation', date: '2026-06-01',
    title: 'Kirkland Signature — An Independent Evaluation',
    metaTitle: 'Kirkland Signature Pet Food — Independent Evaluation | PetFood.com',
    metaDesc:
      'Five-dimension evaluation of Costco Kirkland Signature pet food — the value proposition, who manufactures it, AAFCO posture, transparency, and recall history.',
    category: 'Brand Evaluation', readTime: '10 min',
    hero:
      "Kirkland Signature, Costco's store brand, is among the best-value premium-positioned pet foods on the market, and its value-to-quality ratio is genuinely strong on several dimensions. But store-brand status raises specific questions about who actually makes it and how transparent the supply chain is. This independent evaluation applies the PetFood.com five-dimension rubric. Never paid placement.",
    toc: [
      { label: 'The Value Proposition', id: 'value' },
      { label: 'Who Makes It', id: 'whomakes' },
      { label: 'Formulation', id: 'formulation' },
      { label: 'AAFCO Posture', id: 'aafco' },
      { label: 'Transparency', id: 'transparency' },
      { label: 'Recall History', id: 'recall' },
    ],
    body: [
      { p: "Kirkland Signature is Costco's private-label brand, including a well-regarded pet food line evaluated here on the PetFood.com five-dimension rubric. Its standout feature is value — premium-positioned formulation at a notably lower price per pound than name-brand competitors. The store-brand model also raises the central question of who manufactures it and how much the supply chain is disclosed. The evaluation is independent and never influenced by any commercial relationship. See [[Food Cost Calculator|/tools/food-cost-calculator]] and [[Scoring Methodology|/guides/methodology]]." },
      { h2: 'The Value Proposition', id: 'value' },
      { p: "Kirkland Signature pet food is consistently priced below comparable premium name brands while offering named-meat-forward formulas, which makes it one of the strongest value options for cost-conscious owners who still want a premium-positioned diet. For large dogs especially, where food cost is significant, the per-calorie savings are meaningful. Value, however, is only one dimension — it must be weighed against transparency and substantiation. See the [[Food Cost Calculator|/tools/food-cost-calculator]]." },
      { h2: 'Who Makes It', id: 'whomakes' },
      { p: "As a store brand, Kirkland Signature pet food is manufactured by a contract producer rather than by Costco itself; Diamond Pet Foods has been a known manufacturer of certain Kirkland lines. This matters because the store brand inherits the contract manufacturer's quality-control and recall record, and because the manufacturer relationship may not be prominently disclosed on the package. Knowing who makes a store-brand food is part of evaluating it. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
      { h2: 'Formulation', id: 'formulation' },
      { p: "Kirkland lines include grain-inclusive and grain-free formulas with named animal proteins prominent on the panel. The standard formulation evaluation applies: read the ingredient panel with ingredient-splitting and fresh-meat-first effects in mind, note whether grain-free formulas are legume-heavy (relevant to the DCM question), and check the guaranteed analysis on a dry-matter basis. The formulation is generally competitive for the price. See [[Ingredient Splitting|/ingredients/ingredient-splitting]] and [[Grain-Free and DCM Risk|/ingredients/grain-free-dcm-risk]]." },
      { h2: 'AAFCO Posture', id: 'aafco' },
      { p: "Confirm the AAFCO nutritional adequacy statement on the specific Kirkland formula and life stage, and note whether substantiation is by feeding trial or formulation. Because the food is contract-manufactured, the depth of nutritionist involvement and research behind it depends on the manufacturer, and is less prominently disclosed than for the largest research-driven brands. The WSAVA questions are worth directing to Costco or the manufacturer. See [[AAFCO Completeness Explained|/guides/aafco-completeness-explained]]." },
      { h2: 'Transparency', id: 'transparency' },
      { p: "The main rubric weakness for store brands is transparency: the contract manufacturer, sourcing, quality-control practices, and nutritionist involvement are often less disclosed than for brands that own their plants and publish their research. This is not a quality verdict — the food may be well made — but the disclosure gap limits how much an owner can verify. Greater supply-chain transparency would strengthen the brand on our rubric. See [[How to Choose a Pet Food|/guides/how-to-choose-a-pet-food]]." },
      { h2: 'Recall History', id: 'recall' },
      { p: "Because Kirkland pet food has been made by Diamond Pet Foods, its recall exposure is tied to that manufacturer's record, including the major 2012 Salmonella recall that affected Diamond-made products. Recall history should be evaluated by cause, severity, and corrective response, with the FDA CVM database as the source of record. The store-brand model means recall risk follows the contract manufacturer, which is why identifying the maker matters. See [[Pet Food Recalls and the FDA|/guides/pet-food-recalls-and-fda]]." },
    ],
    related: [
      { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
      { label: 'Pet Food Recalls and the FDA', href: '/guides/pet-food-recalls-and-fda' },
      { label: 'Ingredient Splitting', href: '/ingredients/ingredient-splitting' },
    ],
    sources: [...STD, SRC.fdaPet],
  },
]

export const BRANDS = RAW.map((p) => ({ ...p, hubName: 'Brands' }))
