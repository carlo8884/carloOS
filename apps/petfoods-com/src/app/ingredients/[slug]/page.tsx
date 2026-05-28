import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  CalloutBox,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  Ingredients,
  getIngredientBySlug,
  getRelatedIngredients,
  type Ingredient,
} from '../../../data/ingredients'
import { getBrandBySlug } from '../../../data/brands'

// ─── Static generation ──────────────────────────────────────────────────────
// One static page per ingredient at build time. No runtime fetch, no DB.

export function generateStaticParams() {
  return Ingredients.map((ingredient) => ({ slug: ingredient.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function buildPerIngredientMetadata(ingredient: Ingredient): { title: string; description: string } {
  // Per-ingredient titles (≤70 chars) and descriptions (≤160 chars), written explicitly.
  // Falls back to a templated form if a slug isn't in the curated map.
  const PER: Record<string, { title: string; description: string }> = {
    'chicken-meal': {
      title: 'Chicken Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Chicken meal: AAFCO definition, scoring, common brands. Named-species rendered meal, concentrated protein on a dry-matter basis.',
    },
    'chicken-by-product-meal': {
      title: 'Chicken By-Product Meal — Ingredient Reference | PetFoods.com',
      description:
        'Chicken by-product meal: AAFCO definition, why "by-product" is not an indictment, brand examples, and what disclosure the label gives you.',
    },
    'salmon-meal': {
      title: 'Salmon Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Salmon meal: AAFCO definition, omega-3 contribution, ethoxyquin carryover concern, and brand examples from the PetFoods.com catalog.',
    },
    'beef-meal': {
      title: 'Beef Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Beef meal: AAFCO definition, species disclosure tier, and how named-species meal differs from generic "meat meal" on a pet food label.',
    },
    'whitefish-meal': {
      title: 'Whitefish Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Whitefish meal: AAFCO definition, species-coverage ambiguity, ethoxyquin carryover, and brand examples from the PetFoods.com catalog.',
    },
    'brown-rice': {
      title: 'Brown Rice — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Brown rice in pet food: AAFCO definition, digestibility, background arsenic context, and brand examples from the PetFoods.com catalog.',
    },
    oatmeal: {
      title: 'Oatmeal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Oatmeal in dog and cat food: AAFCO definition, soluble-fiber (beta-glucan) contribution, and brand examples from the PetFoods.com catalog.',
    },
    'sweet-potato': {
      title: 'Sweet Potato — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Sweet potato in pet food: regulatory framework, grain-free formulation context, FDA CVM DCM investigation note, and brand examples.',
    },
    'chicken-fat': {
      title: 'Chicken Fat — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Chicken fat: AAFCO compositional specification, digestibility, preservation systems (mixed tocopherols vs BHA/BHT), and brand examples.',
    },
    'salmon-oil': {
      title: 'Salmon Oil — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Salmon oil in pet food: named-species disclosure, EPA/DHA contribution, oxidation concern in stored kibble, and brand examples.',
    },
    bha: {
      title: 'BHA in Pet Food — Preservative Reference | PetFoods.com',
      description:
        'BHA (butylated hydroxyanisole): AAFCO/FDA permitted level, NTP carcinogen classification at high doses, and what the disclosure actually says.',
    },
    bht: {
      title: 'BHT in Pet Food — Preservative Reference | PetFoods.com',
      description:
        'BHT (butylated hydroxytoluene): AAFCO/FDA permitted level, toxicology evidence at high doses, and naturally-preserved alternatives.',
    },
    ethoxyquin: {
      title: 'Ethoxyquin in Pet Food — Preservative Reference | PetFoods.com',
      description:
        'Ethoxyquin: FDA-permitted level, 1997 voluntary industry agreement, and the supplier-side carryover problem in fish-meal preservation.',
    },
    taurine: {
      title: 'Taurine in Pet Food — Supplement Reference | PetFoods.com',
      description:
        'Taurine: AAFCO-essential for cats, FDA CVM DCM investigation context for dogs on legume-heavy grain-free diets, and brand examples.',
    },
    glucosamine: {
      title: 'Glucosamine in Pet Food — Supplement Reference | PetFoods.com',
      description:
        'Glucosamine: AAFCO posture, clinical-evidence picture, and why kibble inclusion levels typically fall below therapeutic dosing.',
    },
  }

  const entry = PER[ingredient.slug]
  if (entry) return entry

  // Fallback (should not be hit for any of the 15 curated rows).
  const titleRaw = `${ingredient.name} — Pet Food Ingredient Reference | PetFoods.com`
  const descRaw = `${ingredient.name}: AAFCO definition, transparency scoring, and brand examples from the PetFoods.com ingredient catalog.`
  return {
    title: titleRaw.length <= 70 ? titleRaw : titleRaw.slice(0, 67) + '...',
    description: descRaw.length <= 160 ? descRaw : descRaw.slice(0, 157) + '...',
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const ingredient = getIngredientBySlug(slug)
  if (!ingredient) {
    return buildMetadata({
      siteId: 'petfoods-com',
      title: 'Ingredient Not Found',
      description: 'The requested ingredient is not in the PetFoods.com catalog.',
      path: `/ingredients/${slug}`,
    })
  }

  const { title, description } = buildPerIngredientMetadata(ingredient)

  return buildMetadata({
    siteId: 'petfoods-com',
    title,
    description,
    path: `/ingredients/${ingredient.slug}`,
    type: 'article',
  })
}

// ─── Page content helpers ──────────────────────────────────────────────────

function categoryDisplay(category: Ingredient['category']): string {
  switch (category) {
    case 'Protein':
      return 'Protein'
    case 'Carb':
      return 'Carbohydrate'
    case 'Fat':
      return 'Fat'
    case 'Fiber':
      return 'Fiber'
    case 'Preservative':
      return 'Preservative'
    case 'Supplement':
      return 'Supplement'
    case 'Concerning':
      return 'Disclosure-worth-scrutiny'
    default:
      return category
  }
}

function buildTldr(ingredient: Ingredient): string {
  // 60-80 word objective summary.
  const category = categoryDisplay(ingredient.category).toLowerCase()
  const commonText =
    ingredient.commonIn.length > 0
      ? `Commonly listed on panels from ${formatBrandNamesPlain(ingredient.commonIn).slice(0, 4).join(', ')}${ingredient.commonIn.length > 4 ? ', and others' : ''}.`
      : 'Brand-level inclusion varies; this catalog records no curated brand examples for this ingredient.'
  const rubric =
    ingredient.scoringRubric === 'Verify per product'
      ? 'PetFood.com transparency rubric: verify per product, because regulatory and disclosure context depend on the formulation context.'
      : `PetFood.com transparency rubric: ${ingredient.scoringRubric.toLowerCase()} disclosure tier.`
  return `${ingredient.name} is a ${category} ingredient in the PetFoods.com catalog. ${rubric} ${commonText} The AAFCO Official Publication 2025 carries the regulatory definition; this page interprets the label, it does not recommend the ingredient.`
}

function formatBrandNamesPlain(slugs: string[]): string[] {
  return slugs
    .map((s) => getBrandBySlug(s))
    .filter((b): b is NonNullable<ReturnType<typeof getBrandBySlug>> => b !== undefined)
    .map((b) => b.name)
}

// ─── Per-ingredient FAQ ────────────────────────────────────────────────────

function buildIngredientFaq(ingredient: Ingredient): FAQItem[] {
  const SHARED: FAQItem = {
    question: `Where does the AAFCO definition of ${ingredient.name} come from?`,
    answer: `The Association of American Feed Control Officials publishes the Official Publication annually; ingredient definitions live in Chapter 9. The 2025 edition is current. AAFCO definitions are the regulatory anchor for any pet food label sold in the United States — they do not necessarily match common English usage of the same word, which is why a reference catalog like this one exists.`,
    answerText: `AAFCO Official Publication 2025, Chapter 9. AAFCO definitions are the regulatory anchor for US pet food labels and don't always match common English usage of the same ingredient name.`,
  }

  const PER: Record<string, FAQItem[]> = {
    'chicken-meal': [
      {
        question: 'Is chicken meal worse than fresh chicken on a pet food label?',
        answer:
          'No — and the inverse claim, that fresh is always better, is also not supported. Fresh chicken is mostly water; chicken meal is rendered and dried. On a dry-matter basis (which is the only honest comparison) the meal delivers a much denser protein contribution per kilogram of ingredient. The ingredient-panel order is set by pre-cooking wet weight, not by dry-matter protein — a formulation with chicken first and chicken meal second can have most of its meat protein coming from the meal.',
        answerText:
          'No. Fresh chicken is mostly water; chicken meal is rendered and dry. Ingredient-panel order is set by pre-cooking wet weight, not dry-matter protein contribution.',
      },
      {
        question: 'What does AAFCO exclude from chicken meal?',
        answer:
          'The 2025 AAFCO definition is explicit: chicken meal excludes feathers, heads, feet, and entrails. The named-species ingredient is narrower than the generic alternatives ("poultry meal," "meat meal") and carries more disclosure.',
        answerText:
          'AAFCO excludes feathers, heads, feet, and entrails from chicken meal. Named-species meal is narrower than generic "poultry meal" or "meat meal."',
      },
      {
        question: 'Why is chicken meal sometimes listed before fresh chicken?',
        answer:
          'Because formulators are choosing to anchor the formula on the dry-matter protein density of the meal. AAFCO requires ingredients to be listed in descending order by pre-cooking wet weight; a meal listed first is a different formulation choice than fresh listed first, and is not a worse one.',
        answerText:
          'AAFCO requires descending order by pre-cooking wet weight. A meal listed first is a different (not worse) formulation choice — the meal anchors the dry-matter protein.',
      },
      SHARED,
    ],
    'chicken-by-product-meal': [
      {
        question: 'Is chicken by-product meal a low-quality ingredient?',
        answer:
          'The "by-product" label is industry terminology, not a quality signal. The AAFCO definition explicitly includes nutritionally dense tissue — necks, feet, undeveloped eggs, intestines — and explicitly excludes feathers. Organ meat is more nutrient-dense than muscle meat on most micronutrient profiles. The case to scrutinize on a label is not "by-product" but the absence of a species name ("meat by-product meal" without disclosure).',
        answerText:
          'No. "By-product" is AAFCO terminology covering nutritionally dense organ tissue. The disclosure issue is generic "meat by-product meal" without a species name, not named-species by-product meal.',
      },
      {
        question: 'How does chicken by-product meal differ from chicken meal?',
        answer:
          'Chicken meal is rendered flesh, skin, and (optionally) bone. Chicken by-product meal is rendered necks, feet, viscera, and similar tissue. Both are AAFCO-defined, both carry species disclosure, and both deliver concentrated protein. They are different functional ingredients, not better-versus-worse versions of the same thing.',
        answerText:
          'Chicken meal is rendered flesh, skin, and bone. By-product meal is rendered necks, feet, viscera. Both are AAFCO-defined; neither is the "worse" version of the other.',
      },
      {
        question: 'Why is chicken by-product meal more common in mass-market formulas?',
        answer:
          'Procurement economics. The rendered by-product stream is a lower-cost protein input than rendered flesh-and-skin meal; mass-market portfolios use it heavily, premium-tier portfolios use less of it. The nutritional case for the ingredient is not weaker — the procurement decision and the marketing posture are.',
        answerText:
          'Lower input cost than rendered flesh-and-skin meal. Mass-market portfolios use it heavily for procurement reasons, not because the nutritional case is weaker.',
      },
      SHARED,
    ],
    'salmon-meal': [
      {
        question: 'Is salmon meal the same as "fish meal"?',
        answer:
          'No. "Salmon meal" names the species (salmon); "fish meal" does not. Under AAFCO Model Pet Food Regulation PF3, naming the species commits the manufacturer to that species being the source. Generic "fish meal" can be any species or combination and carries the lowest disclosure tier within the fish-meal category.',
        answerText:
          'No. Salmon meal names the species; "fish meal" does not. AAFCO PF3 binds named-species claims to the named species.',
      },
      {
        question: 'Does salmon meal contain ethoxyquin?',
        answer:
          'It can — preservation happens at the renderer (supplier), not necessarily at the pet-food manufacturer. The FDA CVM 1997 voluntary industry agreement lowered the maximum ethoxyquin level allowed in finished pet food, but supplier-side carryover means a finished product can contain ethoxyquin without the manufacturer adding it and without it appearing on the consumer-facing label. Brands marketing as "ethoxyquin-free" should be able to substantiate the claim down to the fish-meal supplier.',
        answerText:
          'It can — via supplier carryover, even when the manufacturer does not add it. "Ethoxyquin-free" claims should be substantiated at the fish-meal supplier level.',
      },
      {
        question: 'How much EPA and DHA does salmon meal contribute?',
        answer:
          'Variable. Salmon meal delivers long-chain omega-3s, but the EPA/DHA level depends on the renderer specification, the lipid extraction step, and the storage stability of the finished product. A guaranteed-analysis minimum for omega-3 (when published) is more informative than the ingredient-panel presence alone.',
        answerText:
          'Variable. Look for a published omega-3 guaranteed-analysis minimum, not just ingredient-panel presence.',
      },
      SHARED,
    ],
    'beef-meal': [
      {
        question: 'Why is beef meal less common than chicken meal in modern pet food?',
        answer:
          'Procurement and palatability. Chicken-stream rendered material is more abundant and lower-cost in the North American supply chain, and dog palatability for chicken is generally high. Beef as a primary protein has become more common in alternative-protein and elimination-diet formulations than in mainline products.',
        answerText:
          'Procurement economics and palatability. Chicken meal is more abundant and lower-cost; beef is more common as an alternative-protein or elimination-diet ingredient.',
      },
      {
        question: 'How does beef meal differ from "meat meal"?',
        answer:
          'Beef meal names the source species (cattle). "Meat meal" is AAFCO-defined as rendered mammalian tissue without identifying the species. Beef meal is the named-species form and carries more disclosure than generic meat meal.',
        answerText:
          'Beef meal names the species. "Meat meal" is generic AAFCO-defined mammalian tissue with no species identification.',
      },
      {
        question: 'Is beef meal appropriate for an elimination diet?',
        answer:
          'Only if the patient has not been previously exposed to beef. The principle of a veterinary elimination diet is single-novel-protein selection; "novel" depends on the individual animal\'s exposure history. Beef is a common protein in human and pet food, so it is rarely the novel protein for elimination work — that role tends to go to less-common proteins (rabbit, venison, kangaroo, fish if not previously fed).',
        answerText:
          'Only if the patient has not been exposed to beef previously. Elimination diets require single-novel-protein selection; beef is rarely novel.',
      },
      SHARED,
    ],
    'whitefish-meal': [
      {
        question: 'What species is "whitefish" on a pet food label?',
        answer:
          'It depends on the supplier and the labeling context. In strict commercial usage, whitefish refers to Coregonus species (Great Lakes whitefish, lake whitefish). In broader usage, it can cover any lean white-flesh fish. Without a more specific species name on the label — "Pacific whitefish," "ocean whitefish," or a single named species — the reader cannot tell which.',
        answerText:
          'Depends on supplier and labeling. Strict use: Coregonus species. Broader use: any lean white-flesh fish. A specific species name is more disclosure than "whitefish."',
      },
      {
        question: 'Is whitefish meal preserved with ethoxyquin?',
        answer:
          'Same supplier-side question as for any fish meal. The renderer (supplier) may preserve with ethoxyquin, mixed tocopherols, or another approved antioxidant; the finished pet-food panel does not always disclose the supplier-side preservative when it carries over rather than being added at manufacture.',
        answerText:
          'Same supplier-side question as for any fish meal. The renderer\'s preservative may carry over without finished-product label disclosure.',
      },
      {
        question: 'Is whitefish meal a sustainable fishery choice?',
        answer:
          'Sustainability depends on the actual species and the fishery, not on the word "whitefish." Without species and source disclosure from the brand, the question cannot be answered from the label alone. Marine Stewardship Council (MSC) certification on the brand\'s fish supply chain — when disclosed — is the most direct sustainability signal.',
        answerText:
          'Depends on actual species and fishery — not answerable from the word "whitefish" alone. MSC certification on the brand\'s fish supply is the most direct signal.',
      },
      SHARED,
    ],
    'brown-rice': [
      {
        question: 'Is rice safe in pet food given the arsenic question?',
        answer:
          'Rice plants take up arsenic from soil — a documented phenomenon in human food, not specific to pet food. FDA has assessed dietary arsenic risk and provides ongoing guidance; for pet food, the contribution from rice at typical inclusion levels is generally below thresholds of concern. The relevant practice for a pet owner is to evaluate the formulation in context (rice is one ingredient among many) rather than to avoid rice as a category.',
        answerText:
          'Rice plants take up arsenic from soil. At typical pet-food inclusion levels the contribution is generally below thresholds of concern; FDA maintains guidance on rice in the human food supply.',
      },
      {
        question: 'Is brown rice better than white rice in pet food?',
        answer:
          'Brown rice has the bran layer intact, giving it more fiber and more micronutrients. White rice is more easily digested and is often the rice form used in veterinary therapeutic diets for gastrointestinal recovery. Better depends on the context: brown for routine maintenance, white for GI rest.',
        answerText:
          'Brown rice has the bran layer (more fiber, more micronutrients). White rice is more easily digested and is used in veterinary GI-rest diets. Better depends on the context.',
      },
      {
        question: 'Is rice a grain a dog can be allergic to?',
        answer:
          'Possible, but uncommon. True grain allergy in dogs is rarer than commonly assumed in pet-food marketing; the most common dietary protein allergens in dogs are beef, dairy, chicken, lamb, and wheat (per the veterinary dermatology literature) — rice is a comparatively rare trigger.',
        answerText:
          'Possible but uncommon. The most common canine dietary protein allergens are beef, dairy, chicken, lamb, and wheat (per veterinary dermatology literature); rice is a rare trigger.',
      },
      SHARED,
    ],
    oatmeal: [
      {
        question: 'Is oatmeal safe for dogs?',
        answer:
          'Yes. Whole-grain oat is well-tolerated and is a relatively rare cereal allergen compared with wheat. Oat fiber (beta-glucan) is a soluble fiber that supports stool consistency and is sometimes used in gastrointestinal-management formulations.',
        answerText:
          'Yes. Whole-grain oat is well-tolerated and a rare cereal allergen compared with wheat. Beta-glucan supports stool consistency.',
      },
      {
        question: 'Is oatmeal appropriate for diabetic dogs?',
        answer:
          'Oat has a lower glycemic profile than corn or rice in some formulations, and the soluble-fiber fraction can blunt postprandial glucose response. The diet for a diabetic dog should be set in coordination with the treating veterinarian; ingredient selection in isolation is not a treatment plan.',
        answerText:
          'Oat has a lower glycemic profile than corn or rice in some formulations. Diet for a diabetic dog should be set with the treating veterinarian.',
      },
      {
        question: 'Is oatmeal in cat food unusual?',
        answer:
          'Cats are obligate carnivores; carbohydrates in feline diets serve a kibble-binding and energy role rather than a nutritional-requirement role. Oatmeal in a cat food is uncommon (rice and corn are more typical cereal binders) but not problematic at modest inclusion.',
        answerText:
          'Cats are obligate carnivores; carbs are functional, not required. Oatmeal in cat food is uncommon (rice/corn are typical) but not problematic at modest inclusion.',
      },
      SHARED,
    ],
    'sweet-potato': [
      {
        question: 'Was sweet potato implicated in the FDA CVM DCM investigation?',
        answer:
          'No. The FDA Center for Veterinary Medicine investigation, opened in 2018, pointed at grain-free formulations heavy in pulse ingredients (peas, lentils, chickpeas, faba beans) — not at sweet potato or other tubers. Sweet potato appears in grain-free formulations, but it has not been the focus of the investigation. The investigation remains open.',
        answerText:
          'No. The FDA CVM investigation focused on pulse-heavy grain-free formulations, not on sweet potato. The investigation remains open.',
      },
      {
        question: 'Does sweet potato provide vitamin A?',
        answer:
          'Sweet potato is rich in beta-carotene, a provitamin A precursor. Dogs can convert beta-carotene to vitamin A; cats cannot do so efficiently and require preformed vitamin A from animal sources. For dogs, sweet potato can be a contributing source; for cats, the AAFCO requirement is met from supplemental retinyl ester or animal-derived vitamin A.',
        answerText:
          'Sweet potato is rich in beta-carotene. Dogs can convert beta-carotene to vitamin A; cats cannot do so efficiently and need preformed vitamin A from animal sources.',
      },
      {
        question: 'Is sweet potato glycemically equivalent to white potato?',
        answer:
          'Generally lower-glycemic than white potato, with more dietary fiber. The specific glycemic profile depends on processing — cooked-and-cooled starch behaves differently from freshly cooked starch — so the comparison is formulation-dependent rather than universal.',
        answerText:
          'Generally lower-glycemic than white potato, with more dietary fiber. Specific profile depends on processing.',
      },
      SHARED,
    ],
    'chicken-fat': [
      {
        question: 'Is chicken fat unhealthy because it is fat?',
        answer:
          'No. Fat is an essential macronutrient and the most energy-dense one available — at 9 kcal/g versus 4 kcal/g for protein or carbohydrate. Chicken fat is highly digestible and is the primary fat source in many dry formulas. The AAFCO compositional specification is strict (≥90% total fatty acids).',
        answerText:
          'No. Fat is essential and energy-dense (9 kcal/g). Chicken fat is highly digestible; AAFCO specifies ≥90% total fatty acids.',
      },
      {
        question: 'How should chicken fat be preserved?',
        answer:
          'Preservation prevents rancidity. Naturally-preserved options (mixed tocopherols, rosemary extract) have a shorter functional shelf life but no regulatory concern. Synthetic phenolic options (BHA, BHT) have longer shelf life and are AAFCO-permitted, but carry the toxicology questions covered on the BHA and BHT ingredient pages.',
        answerText:
          'Naturally-preserved (mixed tocopherols, rosemary extract) for shorter shelf life with no regulatory concern, or BHA/BHT for longer shelf life with the toxicology questions described on those ingredient pages.',
      },
      {
        question: 'Is chicken fat appropriate for a dog with pancreatitis?',
        answer:
          'High-fat diets are generally avoided for dogs with a history of pancreatitis; the treating veterinarian sets the dietary fat ceiling. Chicken fat is not specifically contraindicated — the question is the total dietary fat percentage, not the source ingredient.',
        answerText:
          'High-fat diets are generally avoided for pancreatitis-predisposed dogs. The treating veterinarian sets the dietary fat ceiling; the question is total dietary fat, not the source ingredient.',
      },
      SHARED,
    ],
    'salmon-oil': [
      {
        question: 'What is the difference between salmon oil and fish oil?',
        answer:
          'Salmon oil is named-species (salmon only). "Fish oil" is generic and can be any fish species — typically menhaden, anchovy, sardine, or a mix. Both deliver EPA and DHA; named-species disclosure is the difference at the label level.',
        answerText:
          'Salmon oil names the species. "Fish oil" is generic (often menhaden, anchovy, sardine, or a mix). Both deliver EPA/DHA.',
      },
      {
        question: 'How much salmon oil is enough?',
        answer:
          'For therapeutic effect (joint inflammation, dermatologic conditions) the veterinary literature uses dosing in the range of tens of milligrams of combined EPA+DHA per kilogram of body weight per day; pet-food panel inclusion of "contains salmon oil" without a published guaranteed-analysis omega-3 minimum is not equivalent to that dosing. A treating veterinarian sets the therapeutic dose.',
        answerText:
          'Therapeutic dosing in the veterinary literature is tens of mg of EPA+DHA per kg body weight per day. Panel presence is not equivalent to therapeutic dose; the treating veterinarian sets it.',
      },
      {
        question: 'Does salmon oil go rancid in kibble?',
        answer:
          'Polyunsaturated fats are oxidation-prone. A small declared inclusion of salmon oil in a poorly preserved kibble can deliver less bioavailable EPA/DHA than the panel suggests by end of shelf life. Mixed-tocopherol preservation slows oxidation; storage conditions (heat, light, oxygen exposure) also matter.',
        answerText:
          'Yes — polyunsaturated fats oxidize. Mixed-tocopherol preservation slows oxidation; storage conditions also matter.',
      },
      SHARED,
    ],
    bha: [
      {
        question: 'Is BHA safe in pet food?',
        answer:
          'AAFCO and FDA permit BHA in pet food at not more than 0.02% of total fat content (21 CFR 582.3169). The US National Toxicology Program Report on Carcinogens classifies BHA as "reasonably anticipated to be a human carcinogen" based on animal studies at high doses. The two positions are not in direct conflict — they concern different exposure levels — but they are both true, and owners who prefer to avoid BHA can choose from many naturally-preserved (mixed tocopherol) alternatives.',
        answerText:
          'AAFCO/FDA permit it at ≤0.02% of total fat (21 CFR 582.3169). NTP Report on Carcinogens classifies it at high doses as anticipated carcinogen. Both statements concern different exposure levels.',
      },
      {
        question: 'Can BHA be in a pet food without being on the label?',
        answer:
          'Yes — via supplier carryover. If a fat or fish-meal supplier preserves the rendered ingredient with BHA before shipping to the pet-food manufacturer, the finished-product label does not always list it because the manufacturer did not add it. Brands marketing as "no BHA/BHT" should be able to substantiate the claim down to the supplier level.',
        answerText:
          'Yes — via supplier carryover from preserved fat or fish meal, without the manufacturer adding it. "No BHA/BHT" marketing should be substantiated at the supplier level.',
      },
      {
        question: 'What are the natural alternatives to BHA?',
        answer:
          'Mixed tocopherols (natural vitamin E) and rosemary extract are the most common naturally-preserved options. They have a shorter functional shelf life than the synthetic phenolic preservatives but no regulatory concern. See the preservatives reference (/ingredients/preservatives-pet-food).',
        answerText:
          'Mixed tocopherols and rosemary extract. Shorter functional shelf life than BHA/BHT, but no regulatory concern. See /ingredients/preservatives-pet-food.',
      },
      SHARED,
    ],
    bht: [
      {
        question: 'Is BHT the same as BHA?',
        answer:
          'Closely related synthetic phenolic antioxidants, often co-formulated. Both are AAFCO/FDA-permitted at specified inclusion levels; both have similar toxicology evidence pictures at high doses in animal studies. The regulatory posture and the disclosure question are essentially the same for both.',
        answerText:
          'Closely related synthetic phenolic antioxidants, often co-formulated. Same AAFCO/FDA-permitted posture; similar toxicology evidence at high doses.',
      },
      {
        question: 'Is BHT in pet food regulated?',
        answer:
          'Yes — 21 CFR 582.3173 covers BHT as a chemical preservative permitted in animal feed. AAFCO accepts the FDA-permitted use levels. The supplier-carryover problem described for BHA also applies to BHT.',
        answerText:
          '21 CFR 582.3173 covers BHT as a permitted chemical preservative in animal feed. The supplier-carryover problem also applies.',
      },
      {
        question: 'How do I avoid BHT in pet food?',
        answer:
          'Choose products preserved with mixed tocopherols and rosemary extract — and look for brands that substantiate "no BHA/BHT" claims down to the supplier level, since carryover from preserved fat or fish meal can occur without the manufacturer adding it.',
        answerText:
          'Choose mixed-tocopherol / rosemary-extract preservation. Look for brands that substantiate "no BHA/BHT" at the supplier level (carryover is possible).',
      },
      SHARED,
    ],
    ethoxyquin: [
      {
        question: 'Is ethoxyquin still allowed in pet food?',
        answer:
          'Yes — at restricted levels. 21 CFR 573.380 covers permitted use in animal feed. Following accumulated concerns, FDA CVM requested in a 1997 voluntary industry agreement that manufacturers lower the maximum ethoxyquin level in finished dog food from 150 ppm to 75 ppm. The regulatory posture has tightened over time, reflecting the evolving evidence picture.',
        answerText:
          'Yes, at restricted levels (21 CFR 573.380). 1997 FDA CVM voluntary industry agreement lowered the maximum in finished dog food from 150 ppm to 75 ppm.',
      },
      {
        question: 'Why is ethoxyquin so often discussed in the context of fish meal?',
        answer:
          'Historically the preservative of choice for fish-meal rendering, because polyunsaturated fish lipids oxidize quickly. The supplier-side preservation is where ethoxyquin most often enters a finished pet food — and where the carryover problem originates. A finished-product label can omit ethoxyquin if the manufacturer did not add it, even when the fish-meal ingredient was preserved with it.',
        answerText:
          'Fish meal oxidizes quickly; ethoxyquin was historically the rendering-stage preservative. Supplier-side preservation means carryover into finished product without label disclosure.',
      },
      {
        question: 'How can a brand substantiate "ethoxyquin-free"?',
        answer:
          'By specifying the supplier-side preservation system in the fish-meal supply chain — for example, contracting with renderers using mixed tocopherols and certifying the carryover-free status by third-party testing of the incoming material. Brands marketing the claim without supplier-level substantiation are making a manufacturing-step statement, not a finished-product statement.',
        answerText:
          'By specifying supplier-side preservation and testing incoming material for carryover. Without supplier substantiation, "ethoxyquin-free" is a manufacturing-step claim, not a finished-product one.',
      },
      SHARED,
    ],
    taurine: [
      {
        question: 'Why is taurine essential for cats but not formally required for dogs?',
        answer:
          'Cats cannot synthesize sufficient taurine from sulfur amino acid precursors and must obtain it from diet. AAFCO classifies taurine as essential for cats — minimum 0.10% in dry/extruded foods, 0.20% in wet/canned foods (dry-matter basis). Dogs were historically considered able to synthesize adequate taurine, so the AAFCO Dog Food Nutrient Profile does not list a separate taurine minimum. The 2018 FDA CVM investigation reopened the question for some dog populations on legume-heavy grain-free diets.',
        answerText:
          'Cats cannot synthesize sufficient taurine; AAFCO requires 0.10% dry / 0.20% wet (DM basis). Dogs were assumed adequate synthesizers; the 2018 FDA CVM DCM investigation reopened the question for legume-heavy diets.',
      },
      {
        question: 'Does my dog need a taurine supplement?',
        answer:
          'For most dogs on a complete-and-balanced commercial diet, no. For dogs on legume-heavy grain-free diets — particularly larger breeds — the FDA CVM open investigation has raised the question, and a treating veterinarian can run a plasma taurine assay if there is clinical concern (echocardiographic findings, breed predisposition, or relevant family history). Supplementation in isolation is not the answer; the underlying dietary question matters.',
        answerText:
          'For most dogs on complete-and-balanced commercial diets, no. For dogs on legume-heavy grain-free diets with clinical concern, a treating vet can run a plasma taurine assay. Supplementation alone does not address the dietary question.',
      },
      {
        question: 'Are vegan diets adequate for cats with respect to taurine?',
        answer:
          'Plant-based foods do not naturally contain taurine; a cat fed a plant-based diet without taurine supplementation will develop taurine deficiency. Commercial vegan cat diets that meet AAFCO Cat Food Nutrient Profile compliance include synthetic taurine — the supplementation is essential, not optional, in that diet format.',
        answerText:
          'Plant-based foods do not naturally contain taurine. Vegan cat diets must include synthetic taurine supplementation to meet the AAFCO Cat Food Nutrient Profile.',
      },
      SHARED,
    ],
    glucosamine: [
      {
        question: 'Does glucosamine in pet food work for joint pain?',
        answer:
          'The clinical evidence is mixed. Systematic reviews of canine osteoarthritis treatments have found inconsistent evidence for glucosamine-chondroitin combinations at therapeutic dosing, and typical pet-food inclusion levels are well below those dosing levels. A pet food labeled "with glucosamine" is not equivalent to a therapeutic joint-support supplement; the treating veterinarian sets the appropriate management plan.',
        answerText:
          'Clinical evidence is mixed; systematic reviews report inconsistent effect. Typical kibble inclusion is well below therapeutic dosing. "With glucosamine" on a label is not a therapeutic supplement.',
      },
      {
        question: 'What is the typical glucosamine inclusion level in pet food?',
        answer:
          'Kibble formulations often list inclusion in the hundreds-of-mg-per-kilogram-of-food range. Therapeutic dosing in the veterinary literature is typically expressed per kilogram of body weight per day; the math between a published per-food inclusion and a per-dog dose depends on body weight and feeding amount, and usually does not reach therapeutic levels at typical feeding amounts.',
        answerText:
          'Kibble inclusion is typically in the hundreds of mg per kg of food. Therapeutic dosing is per kg body weight per day; arithmetic typically does not reach therapeutic levels at standard feeding amounts.',
      },
      {
        question: 'Is glucosamine in cat food useful?',
        answer:
          'The clinical-trial evidence for glucosamine in feline osteoarthritis is even thinner than for canine. AAFCO does not require glucosamine in either species. For a cat with diagnosed osteoarthritis, a treating veterinarian sets the management plan; ingredient-panel presence in a maintenance kibble is not the same as treatment.',
        answerText:
          'Clinical-trial evidence in cats is thinner than for dogs. AAFCO does not require it for either species; treatment of feline osteoarthritis is a veterinary decision.',
      },
      SHARED,
    ],
  }

  return PER[ingredient.slug] ?? [SHARED]
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function IngredientPage({ params }: PageProps) {
  const { slug } = await params
  const ingredient = getIngredientBySlug(slug)
  if (!ingredient) notFound()

  const related = getRelatedIngredients(ingredient.slug)
  const faqItems = buildIngredientFaq(ingredient)
  const brandExamples = ingredient.commonIn
    .map((s) => getBrandBySlug(s))
    .filter((b): b is NonNullable<ReturnType<typeof getBrandBySlug>> => b !== undefined)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: ingredient.name, href: `/ingredients/${ingredient.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'petfoods-com',
    title: `${ingredient.name}: Pet Food Ingredient Reference`,
    description: `Independent reference page for ${ingredient.name}: AAFCO definition, PetFood.com transparency scoring, brand examples, and concerns where applicable.`,
    url: `https://petfoods.com/ingredients/${ingredient.slug}`,
    imageUrl: '',
    authorName: 'PetFoods.com Catalog',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      // FAQItem.answer is ReactNode for the accordion; for the FAQ JSON-LD
      // schema we need a plain-text answer string. Every FAQ entry in this
      // template supplies the plain-text variant in `answerText`.
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://petfoods.com${b.href}`,
    })),
  })

  // ArticleLayout takes one schema record (and injects it via SchemaScript).
  // FAQ + Breadcrumb schemas are emitted inline as additional <script> tags
  // below — same pattern as the brand template.

  // Whether the slug is one of the preservatives that cross-links to the
  // preservatives editorial record.
  const linkToPreservativesHub =
    ingredient.category === 'Concerning' &&
    (ingredient.slug === 'bha' || ingredient.slug === 'bht' || ingredient.slug === 'ethoxyquin')

  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: `${ingredient.name}: Pet Food Ingredient Reference`,
        subtitle: `${categoryDisplay(ingredient.category)} · PetFood.com transparency rubric: ${ingredient.scoringRubric}`,
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '5 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={articleSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'At a Glance', href: '#at-a-glance' },
              { label: 'What It Is', href: '#what-it-is' },
              { label: 'How It Is Scored', href: '#how-scored' },
              { label: 'Common In', href: '#common-in' },
              ...(ingredient.concernsIfAny.length > 0 ? [{ label: 'Concerns', href: '#concerns' }] : []),
              { label: 'Sourcing Transparency', href: '#sourcing' },
              ...(related.length > 0 ? [{ label: 'Related Ingredients', href: '#related' }] : []),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion References"
            links={[
              { label: 'Ingredient Catalog (all)', href: '/ingredients' },
              { label: 'Brand Index (35)', href: '/brands' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              ...(linkToPreservativesHub
                ? [{ label: 'Preservatives in Pet Food — Editorial', href: '/ingredients/preservatives-pet-food' }]
                : []),
            ]}
          />
        </>
      }
    >
      {/* Inline FAQPage + BreadcrumbList schemas, in addition to the Article
          schema injected by ArticleLayout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="carloOS-article">
        <p id="tldr">
          <strong>TL;DR.</strong> {buildTldr(ingredient)}
        </p>

        <h2 id="at-a-glance">At a Glance</h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 28px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <Row label="Category" value={categoryDisplay(ingredient.category)} />
              <Row
                label="AAFCO definition reference"
                value={ingredient.aafcoSection ?? 'AAFCO Official Publication 2025, Chapter 9'}
              />
              <Row label="Transparency scoring" value={ingredient.scoringRubric} />
              <Row label="Scoring note" value={ingredient.scoringNote} />
            </tbody>
          </table>
        </div>

        <h2 id="what-it-is">What It Is</h2>
        <p>{ingredient.aafcoDefinition}</p>
        <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)' }}>
          AAFCO definitions live in the Official Publication, Chapter 9 (Feed Ingredient
          Definitions). The 2025 edition is current. The definition above is the regulatory anchor
          for any time {ingredient.name.toLowerCase()} appears on a US pet food label.
        </p>

        <h2 id="how-scored">How It Is Scored</h2>
        <p>
          The PetFood.com transparency rubric applied to this ingredient is{' '}
          <strong>{ingredient.scoringRubric}</strong>. {ingredient.scoringNote}
        </p>
        <p>
          The rubric scores <em>disclosure</em> — not nutrition. A "High" rubric scoring means the
          ingredient name itself carries enough regulatory and species detail that a reader can
          interpret the panel without contacting the manufacturer. A "Verify per product" scoring
          means the regulatory or sourcing context depends on the specific formulation and the
          reader needs to check the panel and the brand site. Neither scoring is a recommendation
          to feed or to avoid.
        </p>

        <h2 id="common-in">Common In</h2>
        {brandExamples.length > 0 ? (
          <>
            <p>
              Brand examples from the PetFoods.com catalog where {ingredient.name.toLowerCase()} is
              commonly listed on the ingredient panel of one or more formula families. Per-SKU
              presence varies and must be verified on the specific product panel.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {brandExamples.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '6px',
                    background: 'var(--brand-white)',
                    color: 'var(--brand-text-dark)',
                    textDecoration: 'none',
                    lineHeight: 1.4,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '2px',
                    }}
                  >
                    {b.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    Parent: {b.parentCompany}
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p>
            This catalog does not record specific brand examples for {ingredient.name.toLowerCase()}.{' '}
            {ingredient.category === 'Concerning'
              ? `As a disclosure-worth-scrutiny ingredient, ${ingredient.name.toLowerCase()} is rarely listed as a marketing-front ingredient; brand inclusion is generally either denied (in "no BHA/BHT/ethoxyquin" marketing) or unmentioned. Verify on the panel of any specific product.`
              : 'Per-SKU presence varies and must be verified on the specific product panel.'}
          </p>
        )}

        {ingredient.concernsIfAny.length > 0 && (
          <>
            <h2 id="concerns">Concerns</h2>
            <CalloutBox variant="warning" title="What to know before reading the panel">
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {ingredient.concernsIfAny.map((c) => (
                  <li key={c} style={{ marginBottom: '8px' }}>
                    {c}
                  </li>
                ))}
              </ul>
            </CalloutBox>
            {linkToPreservativesHub && (
              <p>
                For the full editorial record on synthetic preservatives in pet food — including the
                FDA/AAFCO regulatory posture, the NTP toxicology classifications, and the natural
                alternatives — see{' '}
                <Link href="/ingredients/preservatives-pet-food">/ingredients/preservatives-pet-food</Link>.
              </p>
            )}
          </>
        )}

        <h2 id="sourcing">Sourcing Transparency</h2>
        <p>
          Sourcing transparency for a single ingredient depends on the brand and the formula. The
          PetFoods.com catalog does not record per-product sourcing claims for{' '}
          {ingredient.name.toLowerCase()}, because those claims vary across SKUs even within the
          same brand portfolio and would not be reliably verifiable from a catalog row.{' '}
          <strong>Verify per product</strong> at purchase time: check the brand site for an
          ingredient-sourcing page, look for supplier-level disclosure (renderer, fishery, mill),
          and — where relevant — third-party certification (MSC for fisheries, GFSI-benchmarked
          plant audits).
        </p>
        {ingredient.category === 'Concerning' && (
          <p>
            For {ingredient.name.toLowerCase()} specifically, the supplier-carryover question is
            distinct from the manufacturing-add question. A finished-product label that does not
            list this preservative is not a guarantee that it is absent from the finished product;
            brands marketing the absence should substantiate at the supplier level.
          </p>
        )}

        {related.length > 0 && (
          <>
            <h2 id="related">Related Ingredients</h2>
            <p>Other entries in this catalog that share regulatory or nutritional context:</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ingredients/${r.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '6px',
                    background: 'var(--brand-white)',
                    color: 'var(--brand-text-dark)',
                    textDecoration: 'none',
                    lineHeight: 1.4,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '2px',
                    }}
                  >
                    {r.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {categoryDisplay(r.category)} · {r.scoringRubric}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} />

        <h2 id="sources">Sources</h2>
        <ul>
          {ingredient.citations.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </ArticleLayout>
  )
}

// ─── Row helper ────────────────────────────────────────────────────────────

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr style={{ borderTop: '1px solid var(--brand-border)' }}>
      <th
        scope="row"
        style={{
          textAlign: 'left',
          padding: '10px 14px',
          background: 'var(--brand-surface)',
          fontWeight: 700,
          width: '32%',
          color: 'var(--brand-text-dark)',
          verticalAlign: 'top',
        }}
      >
        {label}
      </th>
      <td style={{ padding: '10px 14px', color: 'var(--brand-text-mid)' }}>{value}</td>
    </tr>
  )
}
