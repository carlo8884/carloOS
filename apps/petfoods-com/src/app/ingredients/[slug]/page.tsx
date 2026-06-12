import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  ArticleLayout,
  ArticleByline,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
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
    'corn-gluten-meal': {
      title: 'Corn Gluten Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Corn gluten meal: AAFCO definition, why "filler" is a marketing myth, amino-acid limitation in lysine, and brand examples.',
    },
    'soybean-meal': {
      title: 'Soybean Meal — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Soybean meal: AAFCO definition, the dog allergy debate vs. veterinary dermatology evidence, and brand examples from the catalog.',
    },
    'potato-protein': {
      title: 'Potato Protein — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Potato protein: AAFCO posture, grain-free formulation context, FDA CVM DCM investigation note, and brand examples.',
    },
    'pea-protein': {
      title: 'Pea Protein — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Pea protein: AAFCO posture, FDA CVM open investigation into grain-free diets and DCM in dogs, and brand examples.',
    },
    'legume-blends': {
      title: 'Legume Blends in Pet Food — Reference | PetFoods.com',
      description:
        'Peas, lentils, chickpeas: AAFCO framework, FDA CVM open DCM investigation, taurine question, and what the label tells you.',
    },
    'wheat-flour': {
      title: 'Wheat Flour — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Wheat flour: AAFCO definition, allergen-frequency context from veterinary dermatology, and brand examples from the catalog.',
    },
    'rice-flour': {
      title: 'Rice Flour — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Rice flour: AAFCO definition, background arsenic context, brown vs white rice flour, and brand examples from the catalog.',
    },
    'tapioca-starch': {
      title: 'Tapioca Starch — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Tapioca starch: AAFCO posture as a refined grain-free starch, what it does (and does not) contribute, and brand examples.',
    },
    pumpkin: {
      title: 'Pumpkin in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Pumpkin: regulatory framework, soluble-fiber (pectin) stool consistency support, and brand examples from the catalog.',
    },
    carrots: {
      title: 'Carrots in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Carrots: regulatory framework, beta-carotene contribution, vitamin A conversion differences in dogs vs cats, and brand examples.',
    },
    spinach: {
      title: 'Spinach in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Spinach: regulatory framework, oxalate chemistry, calcium oxalate urolithiasis context, and brand examples from the catalog.',
    },
    blueberries: {
      title: 'Blueberries in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Blueberries: regulatory framework, antioxidant marketing vs. controlled-trial evidence, and brand examples from the catalog.',
    },
    cranberries: {
      title: 'Cranberries in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Cranberries: regulatory framework, the human UTI evidence picture vs. canine claims, and brand examples from the catalog.',
    },
    flaxseed: {
      title: 'Flaxseed — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Flaxseed: AAFCO definition, ALA omega-3 contribution, ALA-to-EPA conversion limits in dogs and cats, and brand examples.',
    },
    'fish-oil': {
      title: 'Fish Oil — Pet Food Ingredient Reference | PetFoods.com',
      description:
        'Generic fish oil: AAFCO definition, species-disclosure gap vs. salmon oil, ethoxyquin carryover, and brand examples.',
    },
    chondroitin: {
      title: 'Chondroitin Sulfate — Pet Food Supplement Reference | PetFoods.com',
      description:
        'Chondroitin sulfate: AAFCO posture, clinical evidence in canine osteoarthritis, and why kibble inclusion falls below therapeutic.',
    },
    'l-carnitine': {
      title: 'L-Carnitine — Pet Food Supplement Reference | PetFoods.com',
      description:
        'L-carnitine: AAFCO posture, role in fatty-acid metabolism, breed-specific carnitine-responsive DCM context, and brand examples.',
    },
    'yucca-schidigera': {
      title: 'Yucca Schidigera Extract — Ingredient Reference | PetFoods.com',
      description:
        'Yucca schidigera extract: AAFCO posture, fecal-odor-reduction marketing claims, and the evidence picture in companion animals.',
    },
    'choline-chloride': {
      title: 'Choline Chloride — Pet Food Supplement Reference | PetFoods.com',
      description:
        'Choline chloride: AAFCO-required nutrient, role in hepatic function and lipid transport, and brand examples from the catalog.',
    },
    'natural-flavors': {
      title: 'Natural Flavors in Pet Food — Ingredient Reference | PetFoods.com',
      description:
        'Natural flavors: AAFCO posture, hydrolyzed animal digest as the most common source, and what the term discloses (and does not).',
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
    'corn-gluten-meal': [
      {
        question: 'Is corn gluten meal a "filler" in pet food?',
        answer:
          'No — "filler" is a marketing word, not a regulatory one. Corn gluten meal is a concentrated plant protein (typically around 60% crude protein on a dry-matter basis). The relevant formulation question is amino-acid completeness — corn gluten meal is low in lysine, which formulators address by combining it with complementary proteins or by adding crystalline lysine — not "filler."',
        answerText:
          'No. Corn gluten meal is a concentrated plant protein (~60% crude protein DM). The relevant question is amino-acid completeness (it is low in lysine), not "filler."',
      },
      {
        question: 'Why do premium brands avoid corn gluten meal?',
        answer:
          'Procurement, marketing positioning, and amino-acid profile choices. Premium positioning leans toward animal-anchored protein and uses plant proteins more sparingly; mass-market portfolios use corn gluten meal as a cost-effective protein concentrate. The choice is a formulation and marketing decision, not a safety question — AAFCO permits corn gluten meal and the AAFCO definition is narrow.',
        answerText:
          'Premium portfolios lean toward animal-anchored protein; mass-market portfolios use corn gluten meal as a cost-effective protein concentrate. Formulation choice, not safety.',
      },
      {
        question: 'Is corn gluten meal the same as corn?',
        answer:
          'No. The AAFCO definition is specific: corn gluten meal is the dried protein-dense residue after starch, germ, and bran are removed from corn during wet milling. It is roughly 60% protein and is nutritionally distinct from whole corn or ground corn meal.',
        answerText:
          'No. Corn gluten meal is the dried protein-dense residue after starch, germ, and bran are removed — about 60% protein, nutritionally distinct from whole corn.',
      },
      SHARED,
    ],
    'soybean-meal': [
      {
        question: 'Is soy a common food allergen in dogs?',
        answer:
          'Less common than commonly assumed. The most frequently reported canine food allergens in the veterinary dermatology literature are beef, dairy, chicken, wheat, and lamb. Soy is reported as a cause of adverse food reactions in some dogs, but at a lower frequency than the proteins above. For diagnosed soy hypersensitivity (rare), strict avoidance is appropriate; for the general population, AAFCO permitted use and clinical evidence support soybean meal as an acceptable protein source.',
        answerText:
          'Less common than marketing implies. The most frequently reported canine food allergens are beef, dairy, chicken, wheat, and lamb; soy is reported less often.',
      },
      {
        question: 'How does soybean meal compare to animal proteins?',
        answer:
          'Soybean meal has an unusually complete essential amino-acid profile for a plant protein — including reasonable lysine and methionine — but is still lower in digestibility for dogs than rendered animal proteins on most published estimates. Formulators routinely combine it with animal proteins to anchor the dry-matter amino-acid profile.',
        answerText:
          'Soybean meal has a relatively complete plant-protein amino-acid profile but lower digestibility than rendered animal proteins. Typically combined with animal proteins in formulation.',
      },
      {
        question: 'Is soybean meal in pet food genetically modified?',
        answer:
          'In the US commodity supply chain, soybean meal is overwhelmingly derived from GMO soybeans. Brands that market non-GMO sourcing should be able to substantiate that claim at the supplier level. AAFCO does not require GMO disclosure on the pet-food ingredient panel.',
        answerText:
          'US soybean meal is overwhelmingly from GMO soybeans. Non-GMO marketing should be substantiated at the supplier level. AAFCO does not require GMO disclosure.',
      },
      SHARED,
    ],
    'potato-protein': [
      {
        question: 'Is potato protein implicated in the FDA CVM DCM investigation?',
        answer:
          'No, not specifically. The FDA Center for Veterinary Medicine investigation, opened in 2018, has focused on grain-free formulations heavy in pulses (peas, lentils, chickpeas, faba beans). Potato protein appears in some of those formulations but has not itself been singled out as a focus of the investigation. The investigation remains open.',
        answerText:
          'No, not specifically. The FDA CVM investigation focuses on pulse-heavy grain-free formulations; potato protein has not been singled out. Investigation remains open.',
      },
      {
        question: 'How does potato protein compare to animal protein?',
        answer:
          'Potato protein is a concentrated plant protein (75-80% crude protein DM) with a distinct amino-acid profile from animal proteins. Digestibility is reasonable but generally lower than rendered animal proteins. Formulators typically combine it with complementary proteins or supplemental amino acids to anchor the dry-matter profile.',
        answerText:
          'Concentrated plant protein (75-80% crude protein DM). Distinct amino-acid profile from animal proteins; typically combined with complementary proteins in formulation.',
      },
      {
        question: 'Why does potato protein appear in grain-free formulas?',
        answer:
          'Grain-free formulations need a protein concentrate that is not a cereal grain; potato protein and pulse proteins (pea, chickpea) are the two main categories. Some manufacturers favor potato protein specifically to keep pulse density lower in light of the FDA CVM open investigation into pulse-heavy diets and DCM.',
        answerText:
          'Grain-free formulations need a non-cereal protein concentrate; potato protein and pulse proteins are the two main categories. Potato protein keeps pulse density lower.',
      },
      SHARED,
    ],
    'pea-protein': [
      {
        question: 'Does pea protein cause DCM in dogs?',
        answer:
          'The FDA Center for Veterinary Medicine has not established that pea protein, or any single ingredient, causes non-hereditary dilated cardiomyopathy in dogs. The 2018 FDA CVM investigation observed an association between grain-free formulations with high proportions of pulses (including pea protein) and reported DCM cases. The agency continues to investigate; no causal mechanism has been established and the investigation is open.',
        answerText:
          'FDA CVM has not established causation. The 2018 investigation observed an association between pulse-heavy grain-free formulations and DCM cases; no mechanism is established and the investigation is open.',
      },
      {
        question: 'Is a pea-protein-free diet always safer for dogs?',
        answer:
          'Not by itself. The FDA CVM investigation has not provided a binary safe-versus-unsafe threshold, and several confounding factors (genetics, breed, total dietary pulse density, taurine status, total amino-acid balance) remain under investigation. For a dog with diagnosed DCM or with breed predisposition, the treating veterinarian sets the dietary plan; for healthy dogs, the practical recommendation in the Tufts Cummings School Petfoodology blog is caution with pulse-heavy grain-free diets pending resolution.',
        answerText:
          'Not by itself. The FDA CVM investigation has not provided a safe-vs-unsafe threshold; multiple confounders remain. Tufts Petfoodology blog recommends caution with pulse-heavy grain-free pending resolution.',
      },
      {
        question: 'What is the amino-acid profile of pea protein?',
        answer:
          'Pea protein concentrate is reasonably complete for a plant protein, with adequate lysine but limited methionine and cysteine relative to AAFCO amino-acid profiles for dogs. Formulators typically combine it with complementary proteins or supplemental sulfur amino acids.',
        answerText:
          'Reasonably complete plant protein. Adequate lysine but limited methionine/cysteine; typically combined with complementary proteins or supplemental sulfur amino acids.',
      },
      SHARED,
    ],
    'legume-blends': [
      {
        question: 'What is the FDA investigation into grain-free diets and DCM?',
        answer:
          'The FDA Center for Veterinary Medicine opened an investigation in 2018 after reports of non-hereditary dilated cardiomyopathy in dogs eating grain-free diets with high proportions of pulse ingredients (peas, lentils, chickpeas, faba beans). FDA has provided several public Q&A updates and has not established a causal mechanism. The investigation is open. The official FDA CVM updates are the authoritative source for the current status.',
        answerText:
          'FDA CVM opened the investigation in 2018 after DCM reports in dogs on pulse-heavy grain-free diets. No causal mechanism established; investigation open. The official FDA CVM Q&A is the authoritative source.',
      },
      {
        question: 'Should I avoid all legumes in my dog\'s food?',
        answer:
          'The FDA has not advised a blanket avoidance. The Tufts Cummings School Petfoodology blog, written by veterinary nutritionists, has provided practitioner-facing guidance recommending caution with grain-free diets that include pulses in the first few ingredient-panel positions, particularly for breeds with DCM predisposition. The treating veterinarian sets the plan for an individual dog.',
        answerText:
          'FDA has not advised blanket avoidance. Tufts Petfoodology blog recommends caution with grain-free diets that have pulses in the first few panel positions, especially for DCM-predisposed breeds.',
      },
      {
        question: 'Will adding a taurine supplement fix the problem?',
        answer:
          'Possibly not by itself. Some cases of diet-associated DCM in dogs have shown taurine deficiency; others have not. The FDA CVM investigation is examining multiple hypotheses (taurine bioavailability, sulfur amino-acid balance, lectin or phytate interactions, fiber-mineral interactions). Supplementation alone has not been shown to address the underlying mechanism in all cases; the dietary question matters.',
        answerText:
          'Possibly not by itself. Some cases show taurine deficiency, others do not. Multiple hypotheses (taurine bioavailability, sulfur amino acids, lectins, fiber-mineral interactions) are under investigation.',
      },
      SHARED,
    ],
    'wheat-flour': [
      {
        question: 'Is wheat a common dog allergen?',
        answer:
          'Wheat is among the more frequently reported canine food allergens in the veterinary dermatology literature, after beef, dairy, and chicken. That said, the population-level prevalence is still well below the level implied by grain-free marketing. For dogs with diagnosed wheat hypersensitivity, strict avoidance is appropriate; for the general population, AAFCO permitted use and clinical evidence support wheat as an acceptable carbohydrate.',
        answerText:
          'Wheat is among the more frequently reported canine food allergens (after beef, dairy, chicken). Prevalence is still well below grain-free-marketing levels.',
      },
      {
        question: 'What is the difference between wheat flour and whole wheat?',
        answer:
          'Whole wheat preserves the bran (fiber and micronutrients) and germ (fat and micronutrients). Refined wheat flour is the milled endosperm with most of the bran and germ removed. Nutritionally, whole wheat delivers more fiber and micronutrients than refined flour; the AAFCO definition above covers refined wheat flour.',
        answerText:
          'Whole wheat preserves bran and germ. Refined wheat flour is the milled endosperm only — more processed, lower in fiber and micronutrients.',
      },
      {
        question: 'Is wheat flour related to wheat gluten?',
        answer:
          'Related but distinct. Wheat gluten is the concentrated protein fraction isolated from wheat flour, typically about 75% protein on a dry-matter basis. Wheat flour is the full milled grain (or refined endosperm); wheat gluten is the protein concentrate. The 2007 melamine recalls involved wheat gluten contaminated at the supplier, not wheat flour per se.',
        answerText:
          'Related but distinct. Wheat gluten is the protein concentrate (~75% protein DM) isolated from wheat flour. The 2007 melamine recall involved contaminated wheat gluten, not wheat flour per se.',
      },
      SHARED,
    ],
    'rice-flour': [
      {
        question: 'Is rice flour better than brown rice in pet food?',
        answer:
          'Depends on context. Rice flour is milled from rice (often white rice in commercial pet food) and is more easily digested than whole-grain brown rice. Brown rice preserves more fiber and micronutrients but is slightly less digestible. Veterinary therapeutic diets for gastrointestinal recovery often choose white-rice-derived flour for digestibility; maintenance diets often choose brown rice for fiber.',
        answerText:
          'Depends on context. Rice flour (often white rice) is more digestible; brown rice has more fiber and micronutrients. GI recovery diets favor white; maintenance often favors brown.',
      },
      {
        question: 'Does rice flour carry the same arsenic concern as brown rice?',
        answer:
          'The arsenic uptake happens in the rice plant, not at the flour-milling step — so any rice-derived ingredient carries the same background-arsenic profile as the source rice. At typical pet-food inclusion levels, the contribution to total dietary arsenic is generally below thresholds of concern (per the FDA arsenic-in-rice risk assessment); it is a documented background factor, not a reason to avoid rice as a category.',
        answerText:
          'Yes — arsenic uptake happens in the rice plant, not at milling. At typical pet-food inclusion the contribution is generally below thresholds of concern per FDA risk assessment.',
      },
      {
        question: 'Is rice flour gluten-free?',
        answer:
          'Rice itself does not contain gluten. Rice flour in a pet food labeled gluten-free should be supplier-substantiated against cross-contamination, but the underlying ingredient is naturally gluten-free. True canine gluten sensitivity (separate from general wheat allergy) is rare and has been described primarily in Irish Setters.',
        answerText:
          'Yes — rice does not contain gluten. Cross-contamination is the supplier-side question. True canine gluten sensitivity is rare and described primarily in Irish Setters.',
      },
      SHARED,
    ],
    'tapioca-starch': [
      {
        question: 'What does tapioca starch actually contribute nutritionally?',
        answer:
          'Carbohydrate energy and binding function — and very little else. Tapioca starch is a highly refined starch with negligible protein, fat, fiber, or micronutrients. When tapioca is a primary carbohydrate, the fiber and micronutrient contribution must come from other ingredients in the formulation.',
        answerText:
          'Carbohydrate energy and binding function. Negligible protein, fat, fiber, or micronutrients; other ingredients must supply fiber and micronutrients when tapioca is a primary carb.',
      },
      {
        question: 'Is tapioca part of the FDA grain-free DCM investigation?',
        answer:
          'No, not specifically. The FDA Center for Veterinary Medicine investigation is focused on pulse-heavy grain-free formulations. Tapioca starch appears in some grain-free formulations as a non-pulse alternative carb; the investigation has not singled out tapioca starch. The investigation remains open.',
        answerText:
          'No, not specifically. The FDA CVM investigation focuses on pulse-heavy grain-free formulations, not on tapioca starch. Investigation remains open.',
      },
      {
        question: 'Is tapioca starch the same as cassava?',
        answer:
          'Tapioca starch is the starch fraction extracted from cassava root (Manihot esculenta). "Cassava" on a pet-food label usually refers to the whole-root form (with fiber and micronutrients intact); "tapioca starch" refers to the refined starch fraction. They are not nutritionally equivalent.',
        answerText:
          'Tapioca starch is the refined starch fraction of cassava root. "Cassava" usually means the whole-root form (with fiber/micronutrients); the two are not nutritionally equivalent.',
      },
      SHARED,
    ],
    pumpkin: [
      {
        question: 'Does pumpkin really help with dog diarrhea?',
        answer:
          'There is plausible mechanistic and clinical evidence for the soluble-fiber fraction (pectin) supporting stool consistency. At small pet-food inclusion levels, the contribution to the formula\'s total fiber profile is modest, but the functional reputation for fresh pumpkin (canned, pureed, unsweetened) as a home-management option for mild loose stools is consistent with the fiber chemistry. For persistent or severe gastrointestinal signs, a treating veterinarian sets the management plan.',
        answerText:
          'The soluble fiber (pectin) supports stool consistency. At pet-food inclusion levels, contribution is modest. For persistent or severe GI signs, the treating veterinarian sets the plan.',
      },
      {
        question: 'How much pumpkin can a dog eat?',
        answer:
          'For home use as a digestive aid: plain canned pumpkin (not pumpkin pie filling), one to two tablespoons per meal for a medium-sized dog, is the commonly cited starting amount. The exact amount depends on body weight and the specific issue being managed; if signs persist beyond a day or two, a veterinary consultation is appropriate.',
        answerText:
          'Plain canned pumpkin (not pie filling), 1-2 tablespoons per meal for a medium-sized dog as a starting amount. Persistent signs warrant veterinary consultation.',
      },
      {
        question: 'Is pumpkin safe for cats?',
        answer:
          'Yes, in modest amounts. Plain pumpkin is sometimes used in cats for hairball management or mild stool consistency support, on the same soluble-fiber rationale. Cats are obligate carnivores and dietary fiber serves a functional role; pumpkin is not a nutritional requirement.',
        answerText:
          'Yes, in modest amounts. Sometimes used for hairball management or stool consistency. Cats are obligate carnivores; pumpkin is functional, not required.',
      },
      SHARED,
    ],
    carrots: [
      {
        question: 'Do dogs get vitamin A from carrots?',
        answer:
          'Dogs can convert dietary beta-carotene (the orange pigment in carrots) to retinol (vitamin A), so carrots contribute to vitamin A intake for dogs. Cats lack efficient beta-carotene-to-retinol conversion and require preformed vitamin A from animal sources or supplementation. The AAFCO Cat Food Nutrient Profile reflects this species difference.',
        answerText:
          'Dogs convert beta-carotene to retinol; carrots contribute to canine vitamin A intake. Cats lack efficient conversion and need preformed vitamin A from animal sources.',
      },
      {
        question: 'How much of a pet food is actually carrot?',
        answer:
          'When carrots appear near the end of the ingredient panel, the inclusion percentage is typically small (often well under 1% by weight). Marketing-front mentions of carrots ("with garden vegetables") frequently reflect small inclusions; the panel order is the cue to the relative contribution.',
        answerText:
          'When carrots appear near the end of the panel, inclusion is typically under 1% by weight. Marketing-front "with garden vegetables" mentions often reflect small inclusions.',
      },
      {
        question: 'Are raw carrots safe for dogs as a treat?',
        answer:
          'Yes, in moderation. Raw carrot pieces are a low-calorie treat option for dogs without dental disease that affects chewing; for puppies and small breeds, cut to a size that does not pose a choking risk. The vitamin A contribution from a treat-sized amount is small but nonzero.',
        answerText:
          'Yes, in moderation. Cut to a size that does not pose a choking risk. Vitamin A contribution from a treat-sized amount is small.',
      },
      SHARED,
    ],
    spinach: [
      {
        question: 'Should I avoid spinach if my dog has had bladder stones?',
        answer:
          'For dogs with a documented history of calcium oxalate urolithiasis specifically, the treating veterinarian or veterinary nutritionist may advise limiting chronically high-oxalate ingredients — and spinach is among the higher-oxalate common vegetables. For dogs without stone history, routine inclusion of small amounts of spinach in maintenance diets is generally not a clinical concern.',
        answerText:
          'For dogs with calcium oxalate urolithiasis history, the treating vet may advise limiting high-oxalate ingredients including spinach. For dogs without stone history, small routine inclusion is generally not a concern.',
      },
      {
        question: 'How much spinach is in commercial pet food?',
        answer:
          'When spinach appears in commercial pet food, the inclusion percentage is typically small (often well under 1% by weight). The oxalate contribution at those levels is modest in absolute terms; the chemistry is documented but the clinical risk depends on the individual dog\'s history and the total dietary picture.',
        answerText:
          'Typically under 1% by weight when spinach appears. Oxalate contribution at those levels is modest in absolute terms; risk depends on individual history.',
      },
      {
        question: 'Is spinach toxic to dogs?',
        answer:
          'No — spinach is not toxic. The oxalate question is a chronic-management consideration for stone-forming patients, not an acute toxicity concern. For a healthy dog, spinach in commercial pet food at typical inclusion levels does not pose a clinical concern.',
        answerText:
          'No, spinach is not toxic. The oxalate question is a chronic-management consideration for stone-forming patients, not acute toxicity.',
      },
      SHARED,
    ],
    blueberries: [
      {
        question: 'Do blueberries in pet food actually deliver antioxidant benefits?',
        answer:
          'The in vitro antioxidant chemistry of blueberry polyphenols is well documented, but the in vivo clinical outcomes at the inclusion levels used in commercial pet food are not well characterized in dogs or cats. Marketing-front antioxidant claims typically rest on chemistry, not on controlled-trial outcomes in companion animals. For most pet foods that list blueberries near the end of the panel, the inclusion is small.',
        answerText:
          'In vitro antioxidant chemistry is well documented; in vivo outcomes at pet-food inclusion levels are not well characterized. Marketing-front claims rest on chemistry, not on controlled trials.',
      },
      {
        question: 'Are blueberries safe for dogs?',
        answer:
          'Yes, in moderation. Fresh or frozen blueberries are a low-calorie treat option for dogs. Inclusion in commercial pet food at small panel-order positions is safe; the marketing question is whether the inclusion is at functionally meaningful levels.',
        answerText:
          'Yes, in moderation. Fresh or frozen blueberries are a low-calorie treat. Commercial pet-food inclusion is safe; the question is whether levels are functionally meaningful.',
      },
      {
        question: 'Can cats eat blueberries?',
        answer:
          'Yes, in very small amounts. Cats are obligate carnivores and lack the sweet-taste receptor, so most cats are indifferent to fruit. Blueberries in cat food appear primarily as a marketing-front antioxidant claim; functional contribution at small inclusion levels is unverified in the feline literature.',
        answerText:
          'Yes, in very small amounts. Most cats are indifferent to fruit (no sweet-taste receptor). Functional contribution in cat food is unverified.',
      },
      SHARED,
    ],
    cranberries: [
      {
        question: 'Do cranberries prevent urinary-tract infections in dogs?',
        answer:
          'The veterinary clinical evidence is limited and does not parallel the human therapeutic-dose literature. Even in humans, cranberry trials for UTI prevention have produced mixed results, and the therapeutic doses used in those trials are well above what pet-food inclusion delivers. AAFCO does not recognize a UTI-prevention therapeutic claim for cranberry in pet food; for diagnosed urinary-tract conditions, the treating veterinarian sets the management plan.',
        answerText:
          'Veterinary clinical evidence is limited and does not match the human therapeutic-dose literature. AAFCO does not recognize a UTI-prevention therapeutic claim for cranberry. Treatment is a veterinary decision.',
      },
      {
        question: 'Are cranberries safe for dogs?',
        answer:
          'Yes, in moderation. Fresh, dried (unsweetened), or commercial pet-food inclusion of cranberry at small levels is safe. Sweetened or sugared cranberry products (juice, dried with added sugar) are not appropriate for dogs.',
        answerText:
          'Yes, in moderation — fresh, unsweetened, or pet-food inclusion at small levels is safe. Sweetened cranberry products are not appropriate.',
      },
      {
        question: 'Should I give my dog cranberry supplements?',
        answer:
          'For a dog with recurrent urinary-tract issues, the treating veterinarian sets the management plan; cranberry supplementation may be discussed but is not first-line therapy in the veterinary urology literature. Ingredient-panel presence of cranberry in a maintenance pet food is not a treatment.',
        answerText:
          'The treating vet sets the plan for recurrent UTIs; cranberry is not first-line in veterinary urology literature. Panel presence in maintenance pet food is not treatment.',
      },
      SHARED,
    ],
    flaxseed: [
      {
        question: 'Is flaxseed a good source of omega-3 for dogs?',
        answer:
          'Flaxseed provides alpha-linolenic acid (ALA), the plant-derived omega-3. Conversion of ALA to the long-chain omega-3s EPA and DHA is limited in dogs (and very limited in cats), so flaxseed is not a substitute for marine-derived EPA/DHA when those long-chain omega-3s are the nutritional target. For dietary fiber contribution, flaxseed is a useful ingredient; for EPA/DHA, fish oil or salmon oil are the relevant sources.',
        answerText:
          'Flaxseed provides plant-derived ALA. ALA-to-EPA/DHA conversion is limited in dogs and very limited in cats; for EPA/DHA targets, fish oil or salmon oil are the relevant sources.',
      },
      {
        question: 'Is flaxseed safe for cats?',
        answer:
          'Yes, at modest inclusion. The ALA-to-EPA/DHA conversion is even more limited in cats than in dogs, so flaxseed is not a meaningful source of long-chain omega-3s for cats. For fiber and ALA at modest inclusion, flaxseed is acceptable in feline diets; for EPA/DHA, marine-derived sources are required.',
        answerText:
          'Yes, at modest inclusion. ALA conversion in cats is very limited; flaxseed is not a meaningful EPA/DHA source for cats. Marine-derived sources are required for those.',
      },
      {
        question: 'Does flaxseed go rancid in kibble?',
        answer:
          'Whole flaxseed is more shelf-stable than ground flaxseed or expressed flaxseed oil; the ALA fatty acid is polyunsaturated and oxidation-prone. In kibble, the preservation system (mixed tocopherols, rosemary extract) and storage conditions matter for ALA preservation. Whole-flax inclusion is more shelf-stable than oil inclusion.',
        answerText:
          'Whole flaxseed is more shelf-stable than ground or oil forms. ALA is polyunsaturated and oxidation-prone; preservation system and storage conditions matter.',
      },
      SHARED,
    ],
    'fish-oil': [
      {
        question: 'What is the difference between "fish oil" and "salmon oil" on a pet food label?',
        answer:
          'Species disclosure. "Salmon oil" names the species (salmon only). Generic "fish oil" does not — under AAFCO §9.46 the term covers oil from undisclosed fish species, commonly menhaden, anchovy, sardine, or a supplier-determined mix. Both deliver EPA and DHA; named-species disclosure is the difference at the label level.',
        answerText:
          'Species disclosure. "Salmon oil" names the species. "Fish oil" covers undisclosed species (commonly menhaden, anchovy, sardine, or a mix). Both deliver EPA and DHA.',
      },
      {
        question: 'How can I tell if the fish oil in my dog\'s food is preserved with ethoxyquin?',
        answer:
          'Often, you cannot from the label alone. The supplier-side ethoxyquin question described on the ethoxyquin ingredient page applies to any fish-derived ingredient. Brands marketing "ethoxyquin-free" should be able to substantiate the claim at the fish-oil supplier level, not just at the manufacturing-add step. See /ingredients/ethoxyquin for the carryover-disclosure discussion.',
        answerText:
          'Often you cannot from the label alone. Supplier-side ethoxyquin carryover applies to any fish-derived ingredient. Brands marketing "ethoxyquin-free" should substantiate at the supplier level.',
      },
      {
        question: 'Is fish oil sustainable?',
        answer:
          'Sustainability depends on the source fishery, not on the words "fish oil." Without species and source disclosure, the question cannot be answered from the label alone. Marine Stewardship Council (MSC) certification on the brand\'s fish supply chain — when disclosed — is the most direct sustainability signal.',
        answerText:
          'Depends on the source fishery, not the words "fish oil." MSC certification on the brand\'s fish supply chain (when disclosed) is the most direct sustainability signal.',
      },
      SHARED,
    ],
    chondroitin: [
      {
        question: 'Does chondroitin work for canine joint pain?',
        answer:
          'The clinical evidence is mixed, paralleling the picture for glucosamine. Systematic reviews of canine osteoarthritis treatments have reported inconsistent effect for glucosamine-chondroitin combinations at therapeutic dosing, and typical pet-food inclusion is below those dosing levels. A pet food labeled "with chondroitin" is not a therapeutic joint-support supplement; the treating veterinarian sets the management plan for diagnosed osteoarthritis.',
        answerText:
          'Clinical evidence is mixed. Systematic reviews report inconsistent effect at therapeutic dosing; kibble inclusion is below therapeutic. Panel presence is not a therapeutic supplement.',
      },
      {
        question: 'Is chondroitin in pet food sourced from a specific animal?',
        answer:
          'Yes — common sources are bovine, porcine, or marine (shark, fish) cartilage. The AAFCO ingredient definition does not require source disclosure on the consumer-facing label, so the chondroitin in a specific pet food is sourced according to the manufacturer\'s supply contract and may not be disclosed.',
        answerText:
          'Common sources are bovine, porcine, or marine cartilage. AAFCO does not require source disclosure on the consumer-facing panel.',
      },
      {
        question: 'Can I give my dog a chondroitin supplement on top of a pet food that already contains it?',
        answer:
          'For a dog with diagnosed osteoarthritis, the treating veterinarian sets the dosing plan; therapeutic dosing in the veterinary literature is per kilogram of body weight per day, and pet-food panel inclusion typically does not reach those levels. Stacking is a veterinary decision rather than an owner-side calculation.',
        answerText:
          'For diagnosed osteoarthritis, the treating vet sets the dosing plan. Therapeutic dosing is per kg body weight per day; pet-food inclusion typically does not reach those levels. Stacking is a veterinary decision.',
      },
      SHARED,
    ],
    'l-carnitine': [
      {
        question: 'What does L-carnitine do in pet food?',
        answer:
          'L-carnitine plays a role in transporting fatty acids into mitochondria for beta-oxidation; physiologically it is involved in both fat metabolism and cardiac muscle energetics. AAFCO does not require it as a separately listed nutrient. It is used in some weight-management formulations (on a fat-metabolism rationale) and in some cardiac-support formulations (particularly for breeds with carnitine-responsive DCM phenotypes).',
        answerText:
          'Carnitine transports fatty acids into mitochondria for beta-oxidation. Roles in fat metabolism and cardiac energetics. AAFCO does not require it; used in some weight-management and cardiac-support formulations.',
      },
      {
        question: 'Which breeds have carnitine-responsive dilated cardiomyopathy?',
        answer:
          'Boxers and American Cocker Spaniels are the two breeds with the best-documented carnitine-responsive (or taurine-responsive) DCM phenotypes in the veterinary cardiology literature. For dogs in those breeds with diagnosed DCM, the treating veterinary cardiologist sets the therapeutic supplementation plan; ingredient-panel presence in a maintenance kibble is not equivalent to therapeutic dosing.',
        answerText:
          'Boxers and American Cocker Spaniels are the best-documented breeds. For diagnosed DCM, the treating veterinary cardiologist sets therapeutic dosing; panel presence is not equivalent.',
      },
      {
        question: 'Is L-carnitine appropriate for cats?',
        answer:
          'Cats have their own taurine-responsive DCM picture (described in the 1987 Pion et al. work that established taurine as essential for cats). L-carnitine supplementation in feline cardiac disease is less established than taurine. For a cat with diagnosed cardiac disease, the treating veterinarian sets the supplementation plan.',
        answerText:
          'Cats have a taurine-responsive DCM picture. L-carnitine in feline cardiac disease is less established than taurine; the treating vet sets the plan.',
      },
      SHARED,
    ],
    'yucca-schidigera': [
      {
        question: 'Does yucca schidigera reduce dog poop smell?',
        answer:
          'The proposed mechanism — saponin-mediated ammonia binding — has support in livestock studies (cattle, swine, poultry), where reductions in ammonia emission have been reported. Controlled trials in companion animals are sparser and the effect size at typical pet-food inclusion levels is not well established. Marketing-front "odor reduction" claims rest more on the livestock literature than on companion-animal controlled trials.',
        answerText:
          'Mechanism (saponin-mediated ammonia binding) has support in livestock studies. Companion-animal trials are sparser; effect size at typical inclusion is not well established.',
      },
      {
        question: 'Is yucca schidigera safe in cat food?',
        answer:
          'AAFCO permits yucca schidigera extract in pet food at the typical low inclusion levels used commercially. There is no documented safety signal in cats at those inclusion levels. The marketing question (effect on litter-box odor) parallels the canine question — not well characterized in controlled feline trials.',
        answerText:
          'AAFCO permits it at typical low inclusion levels. No documented safety signal in cats. The odor-reduction claim is not well characterized in controlled feline trials.',
      },
      {
        question: 'Does yucca contain saponins that could harm dogs?',
        answer:
          'Raw yucca plant material contains saponins that can be irritating at high doses; yucca schidigera extract used in pet food is a processed extract at low inclusion. At those inclusion levels, AAFCO permitted use does not raise a safety concern. The question for the consumer is efficacy, not toxicity.',
        answerText:
          'Raw yucca contains saponins. Pet-food extract is processed and used at low inclusion; AAFCO permitted use does not raise a safety concern. The question is efficacy, not toxicity.',
      },
      SHARED,
    ],
    'choline-chloride': [
      {
        question: 'Why does choline chloride appear on so many pet food panels?',
        answer:
          'Choline is an AAFCO-required nutrient in both the Dog and Cat Food Nutrient Profiles. Most commercial diets meet the AAFCO minimum (1,200 mg/kg dry-matter basis for adult dogs, 2,400 mg/kg for adult cats) by supplementing with choline chloride. Its appearance on the ingredient panel is a routine formulation step, not a marketing flourish.',
        answerText:
          'Choline is AAFCO-required (1,200 mg/kg DM for adult dogs, 2,400 mg/kg for adult cats). Choline chloride is the standard supplemental form; panel appearance is routine formulation.',
      },
      {
        question: 'What does choline do in dogs and cats?',
        answer:
          'Choline is involved in hepatic function (lipid transport from the liver), neurotransmitter synthesis (acetylcholine), and methyl-group metabolism. Deficiency in dogs and cats has been associated with hepatic lipidosis (fatty liver) in experimental studies, which is why the AAFCO minimum exists. At commercial-diet inclusion levels, deficiency is not a clinical concern.',
        answerText:
          'Hepatic function, acetylcholine synthesis, methyl-group metabolism. Experimental deficiency causes hepatic lipidosis; AAFCO minimum exists for this reason. At commercial-diet levels deficiency is not a clinical concern.',
      },
      {
        question: 'Can a dog or cat get too much choline?',
        answer:
          'At typical commercial-diet inclusion levels, choline excess is not a documented clinical concern. NRC has documented experimental high-dose tolerances; commercial diets meeting AAFCO minimums operate well within those margins. The AAFCO posture is that the regulated minimum is the relevant number for label compliance.',
        answerText:
          'At typical commercial-diet levels, excess is not a documented clinical concern. Commercial diets meeting AAFCO minimums operate well within NRC-documented experimental tolerances.',
      },
      SHARED,
    ],
    'natural-flavors': [
      {
        question: 'What is "natural flavor" actually made of?',
        answer:
          'In pet food, the most common source is hydrolyzed animal tissue ("digest") — animal protein chemically or enzymatically broken down to enhance palatability. Other sources include yeast-derived flavorings, herb extracts, and other AAFCO-recognized natural flavoring materials. The term itself does not commit the manufacturer to a single species or source; more specific subforms such as "chicken digest" carry more disclosure.',
        answerText:
          'Most commonly hydrolyzed animal tissue (digest). Other sources include yeast-derived flavorings and herb extracts. Specific subforms like "chicken digest" carry more disclosure than generic "natural flavor."',
      },
      {
        question: 'Is "natural flavor" a hidden ingredient?',
        answer:
          'Not in a regulatory sense — AAFCO permits the term and the underlying material is recognized as a feed ingredient. The disclosure question is about species and source specificity. For owners managing food allergies, more specific forms (named-species digest) provide the disclosure needed for elimination work; generic "natural flavor" does not.',
        answerText:
          'Not in a regulatory sense — AAFCO permits the term. The disclosure question is about species specificity. For allergy management, named-species digest provides the needed disclosure; generic "natural flavor" does not.',
      },
      {
        question: 'Are natural flavors safer than artificial flavors?',
        answer:
          'AAFCO permits both natural and artificial flavoring categories at specified levels; the regulatory posture does not classify one as safer than the other. The marketing distinction is a labeling-tier statement, not a safety statement. Owners who prefer the natural category for personal reasons should look for the more specific subforms for better disclosure.',
        answerText:
          'AAFCO permits both at specified levels; the regulatory posture does not rank one as safer. The distinction is a labeling-tier statement, not a safety statement.',
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
      relatedLinks={[
        { title: 'Ingredient Catalog (all)', href: '/ingredients', category: 'Hub' },
        { title: 'Brand Index (A–Z)', href: '/brands', category: 'Hub' },
        { title: 'Pet Food Recall Database', href: '/recalls', category: 'Safety' },
        { title: 'Label Glossary — AAFCO Terms', href: '/glossary', category: 'Reference' },
      ]}
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
              { label: 'Brand Index (A–Z)', href: '/brands' },
              { label: 'Label Glossary', href: '/glossary' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              ...(linkToPreservativesHub
                ? [{ label: 'Preservatives in Pet Food — Editorial', href: '/ingredients/preservatives-pet-food' }]
                : []),
            ]}
          />
          <CrossPortfolioCard
            currentSite="petfoods-com"
            contentType="nutrition"
            variant="sidebar"
          />
        </>
      }
    >
      {/* Inline FAQPage + BreadcrumbList + DefinedTerm schemas, in addition
          to the Article schema injected by ArticleLayout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTerm',
            name: ingredient.name,
            description: ingredient.aafcoDefinition,
            inDefinedTermSet: {
              '@type': 'DefinedTermSet',
              name: 'Pet Food Ingredient Glossary',
              url: 'https://petfoods.com/ingredients',
            },
            url: `https://petfoods.com/ingredients/${slug}`,
          }),
        }}
      />

      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFoods.com Editorial"
          publishedAt="2026-05-28T00:00:00Z"
          updatedAt="2026-05-28T00:00:00Z"
          reviewedBy="Editorial team"
        />
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
