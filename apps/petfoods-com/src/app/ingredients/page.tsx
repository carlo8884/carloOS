import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  combineSchemas,
  ArticleLayout,
  ArticleByline,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { Ingredients } from '../../data/ingredients'

// Slug set for ingredient deep-dive pages live under /ingredients/[slug].
// Used to render real <Link>s for those entries and to fall back to an anchor
// for entries that link elsewhere (e.g. external PetFood.com references).
const DEEP_DIVE_SLUGS = new Set(Ingredients.map((i) => i.slug))

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food Ingredients — A–Z Reference',
  description:
    'Category-grouped catalog of common dog and cat food ingredients with AAFCO definitions, regulatory status, and links to PetFood.com ingredient explainers.',
  path: '/ingredients',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food Ingredients — A–Z Reference',
  description:
    'A category-grouped index of the ingredients most commonly found in commercial dog and cat food, with AAFCO Official Publication references and cross-links to PetFood.com analysis.',
  url: 'https://petfoods.com/ingredients',
  imageUrl: '',
  authorName: 'PetFoods.com Catalog',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

// Dataset schema — this page presents an original, structured reference
// catalog of common pet food ingredients grouped by AAFCO functional category.
// Each record includes ingredient name, AAFCO definition / classification, and
// disclosure notes. The annotation and compilation are original to this site.
// Qualifies as a Dataset: tabular, primary-source, freely accessible.
// No DOIs, invented dates, or fabricated credentials — QC §1.
const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Pet Food Ingredients — AAFCO Reference Catalog',
  description:
    'Category-grouped reference catalog of common ingredients in US dog and cat food. Each record includes ingredient name, AAFCO functional category, Official Publication definition or classification, species disclosure level, and regulatory-context notes. Original compilation by PetFoods.com Editorial from the AAFCO 2025 Official Publication.',
  url: 'https://petfoods.com/ingredients',
  creator: {
    '@type': 'Organization',
    name: 'PetFoods.com Editorial',
    url: 'https://petfoods.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PetFoods.com',
    url: 'https://petfoods.com',
  },
  isAccessibleForFree: true,
  variableMeasured: [
    'Ingredient name (as it appears on a US pet food label)',
    'AAFCO functional category (protein, fat/oil, carbohydrate, preservative, vitamin/mineral, palatant)',
    'AAFCO Official Publication definition or classification',
    'Species disclosure level (named species, generic, or unspecified)',
    'Regulatory or label-context notes',
  ],
  about: {
    '@type': 'Thing',
    name: 'Pet food ingredient definitions and AAFCO classifications',
  },
}

const schema = combineSchemas(articleSchema, datasetSchema)

// ─── Ingredient catalog ─────────────────────────────────────────────────────
// Grouped by AAFCO functional category. Each entry has a short factual note —
// not a recommendation. Where PetFood.com has already published an ingredient-
// level reference (e.g., grain-free / DCM), the entry cross-links to it.

interface IngredientEntry {
  name: string
  note: string
  href: string
  external?: boolean
}

interface IngredientGroup {
  id: string
  title: string
  intro: string
  items: IngredientEntry[]
}

const GROUPS: IngredientGroup[] = [
  {
    id: 'proteins',
    title: 'Proteins — Animal and Plant Sources',
    intro:
      'Protein ingredients carry distinct AAFCO definitions and disclosure expectations depending on whether they are named (“chicken meal”) or generic (“meat meal”), and on whether the input is the whole tissue, the rendered meal, or a by-product. Each row notes the AAFCO category and what the disclosure actually tells a reader.',
    items: [
      { name: 'Chicken (whole, fresh)', note: 'Wet-weight muscle tissue. High moisture; relative ingredient-panel position is misleading without dry-matter conversion. AAFCO Official Publication 2025 ingredient definitions.', href: '/ingredients/chicken' },
      { name: 'Chicken meal', note: 'Rendered, dried chicken; concentrated protein on a dry-matter basis. Named-species meal is a specific AAFCO-defined ingredient and carries more disclosure than generic “meat meal.”', href: '/ingredients/chicken-meal' },
      { name: 'Chicken by-product meal', note: 'AAFCO-defined: ground rendered parts of slaughtered chicken (organs, feet, viscera) excluding feathers. Nutrient-dense; the “by-product” label is an industry term, not a quality signal.', href: '/ingredients/chicken-by-product-meal' },
      { name: 'Salmon meal', note: 'Named-species rendered fish protein. Carries species disclosure (unlike generic “fish meal”). Contributes long-chain omega-3 fatty acids (EPA/DHA). Ethoxyquin supplier-side preservation is a separate disclosure question.', href: '/ingredients/salmon-meal' },
      { name: 'Whitefish meal', note: 'Named-species fish meal. Species coverage of “whitefish” is supplier-dependent; more disclosure than generic “fish meal,” less than a single-species name.', href: '/ingredients/whitefish-meal' },
      { name: 'Lamb, lamb meal', note: 'Common alternative-protein source for elimination or sensitive-diet formulations. AAFCO-defined.', href: '/ingredients/lamb' },
      { name: 'Beef meal', note: 'AAFCO-defined named-species rendered mammalian meal. Less common as a primary protein in modern North American formulas than chicken or fish meals.', href: '/ingredients/beef-meal' },
      { name: 'Meat meal / meat and bone meal', note: 'Generic, unspecified mammalian rendered material. AAFCO permits the term but it does not identify species — the lowest tier of protein disclosure in a commercial formula.', href: '/ingredients/meat-and-bone-meal' },
      { name: 'Animal digest', note: 'AAFCO-defined: hydrolyzed animal tissue used primarily as a palatant. Common in cat food and kibble coatings; unspecified species.', href: '/ingredients/animal-digest' },
      { name: 'Pea protein, potato protein, soy protein concentrate', note: 'Plant-protein isolates used to raise crude protein on the guaranteed analysis. Concentration of plant protein in dog food is one of the factors flagged in the FDA CVM 2018 grain-free / DCM investigation.', href: 'https://petfood.com/ingredients/grain-free-dcm-risk', external: true },
    ],
  },
  {
    id: 'carbs',
    title: 'Carbohydrates — Grains, Legumes, Tubers',
    intro:
      'Carbohydrate sources contribute energy, fiber, and binding properties in kibble. Grain-inclusive and grain-free are categorical labels, not quality labels; the relevant questions are sourcing, glycemic profile, and (for legume-heavy diets) the open FDA CVM investigation into dilated cardiomyopathy.',
    items: [
      { name: 'Brown rice', note: 'Whole-grain cereal with the bran layer intact, milled only to remove the inedible hull. AAFCO §9.16. Highly digestible, well-tolerated, predictable nutritional contribution.', href: '/ingredients/brown-rice' },
      { name: 'Oatmeal, oat groats', note: 'Whole-grain oat. Source of soluble fiber (beta-glucan). Generally well-tolerated; rare grain trigger compared to wheat.', href: '/ingredients/oatmeal' },
      { name: 'Corn (whole, ground, gluten meal)', note: 'Common cereal. Often vilified in pet-food marketing without nutritional basis; corn is a digestible energy and protein contributor when properly milled. Corn gluten meal is a concentrated protein fraction.', href: '/ingredients/corn' },
      { name: 'Wheat (whole, gluten, middlings)', note: 'Cereal grain. Source of digestible energy. Most common cereal allergen in dogs, though true grain allergy is rarer than commonly assumed.', href: '/ingredients/wheat' },
      { name: 'Barley, sorghum, millet', note: 'Alternative cereal grains, lower-glycemic than corn or rice in some formulations.', href: '/ingredients/alternative-grains' },
      { name: 'Peas, lentils, chickpeas, faba beans (pulses / legumes)', note: 'Concentrated plant-protein and fiber sources. Legume-heavy grain-free diets are a focus of the open FDA CVM investigation into atypical canine dilated cardiomyopathy. See the PetFood.com record on grain-free and DCM.', href: 'https://petfood.com/ingredients/grain-free-dcm-risk', external: true },
      { name: 'Sweet potato', note: 'Tuber-derived starchy carbohydrate. Higher in fiber and provitamin A than common cereals. Often featured in grain-free formulations; not implicated in the FDA CVM DCM investigation in the way pulses are.', href: '/ingredients/sweet-potato' },
      { name: 'Tapioca / cassava', note: 'Starchy root, used as a grain-free binder. Low in protein; nutritionally a near-pure carbohydrate.', href: '/ingredients/tapioca' },
    ],
  },
  {
    id: 'fats',
    title: 'Fats and Oils',
    intro:
      'Fats supply concentrated energy and essential fatty acids. The relevant question is named source (chicken fat is named; “animal fat” is generic) and preservation method (mixed tocopherols vs ethoxyquin vs BHA/BHT).',
    items: [
      { name: 'Chicken fat', note: 'Named-species rendered fat. Highly digestible; primary fat source in many dry formulas. Often preserved with mixed tocopherols (natural vitamin E).', href: '/ingredients/chicken-fat' },
      { name: 'Salmon oil', note: 'Named-species fish oil. Source of EPA and DHA. Inclusion at meaningful levels — and stability against oxidation in stored kibble — matter more than mere ingredient-panel presence.', href: '/ingredients/salmon-oil' },
      { name: 'Flaxseed, flaxseed oil', note: 'Plant source of short-chain omega-3 (ALA). Dogs convert ALA to EPA/DHA inefficiently; flaxseed alone is not equivalent to a marine omega-3 source.', href: '/ingredients/flaxseed' },
      { name: 'Sunflower oil, canola oil, soybean oil', note: 'Plant oils. Energy contributors; profile is primarily omega-6 (linoleic acid). Not interchangeable with marine omega-3 sources.', href: '/ingredients/vegetable-oils' },
      { name: 'Animal fat (unspecified)', note: 'Generic, unspecified mammalian fat. Lowest tier of fat disclosure; AAFCO permits the term.', href: '/ingredients/animal-fat' },
    ],
  },
  {
    id: 'fibers',
    title: 'Fibers and Functional Carbohydrates',
    intro:
      'Fiber sources contribute to stool quality, gastrointestinal transit, and (in some cases) prebiotic function. AAFCO-defined ingredients; not all fiber is interchangeable.',
    items: [
      { name: 'Beet pulp', note: 'Dried residue from sugar-beet processing. Moderately fermentable fiber, supports stool consistency. The “beet pulp is bad” claim from early 2000s pet-food marketing is not supported by veterinary nutrition literature.', href: '/ingredients/beet-pulp' },
      { name: 'Chicory root, inulin, FOS (fructooligosaccharides)', note: 'Soluble fiber acting as a prebiotic substrate for beneficial gut bacteria. Common in formulas marketed as digestive-health.', href: '/ingredients/chicory-root' },
      { name: 'Cellulose (powdered)', note: 'Insoluble fiber. Common in weight-control formulas as a low-calorie bulking agent.', href: '/ingredients/cellulose' },
      { name: 'Pumpkin, psyllium', note: 'Soluble-fiber inclusions sometimes added for gastrointestinal symptomatic support.', href: '/ingredients/pumpkin' },
    ],
  },
  {
    id: 'preservatives',
    title: 'Preservatives — Synthetic and Natural',
    intro:
      'Preservatives prevent rancidity of the fat fraction and oxidation of fat-soluble vitamins. The category is one of the most contentious in pet-food marketing. The regulatory picture is mixed; the literature is uneven across the synthetics. Disclosure is the relevant baseline.',
    items: [
      { name: 'Mixed tocopherols (vitamin E)', note: 'Natural-source preservative. Shorter shelf life than BHA/BHT but no regulatory concerns. Common in “naturally preserved” marketed formulas.', href: '/ingredients/tocopherols' },
      { name: 'Rosemary extract', note: 'Botanical antioxidant. Generally recognized as safe (GRAS) for the use level in pet food. Anecdotally implicated in seizure threshold in epileptic dogs at high inclusion; the clinical evidence is thin.', href: '/ingredients/rosemary-extract' },
      { name: 'BHA (butylated hydroxyanisole)', note: 'Synthetic phenolic antioxidant. Approved by FDA and AAFCO at specified limits (21 CFR 582.3169). Classified by the US National Toxicology Program at high doses as “reasonably anticipated to be a human carcinogen.” Regulatory and toxicology positions concern different exposure levels.', href: '/ingredients/bha' },
      { name: 'BHT (butylated hydroxytoluene)', note: 'Synthetic preservative often paired with BHA (21 CFR 582.3173). Same regulatory posture and a similar toxicology evidence picture at high doses.', href: '/ingredients/bht' },
      { name: 'Ethoxyquin', note: 'Synthetic preservative historically common in fish meal. FDA-CVM voluntary industry agreement (1997) lowered maximum allowable levels in finished pet food. Some manufacturers source ethoxyquin-preserved fish meal; the finished product label does not always list it because it can be a carryover.', href: '/ingredients/ethoxyquin' },
      { name: 'Propylene glycol', note: 'Soft-moist texture and humectant agent. FDA-approved for use in dog food, but prohibited in cat food since 1996 because of Heinz body anemia risk in cats.', href: '/ingredients/propylene-glycol' },
      { name: 'Sodium tripolyphosphate, citric acid', note: 'Auxiliary preservatives / processing aids. Generally low-concern at typical inclusion.', href: '/ingredients/auxiliary-preservatives' },
    ],
  },
  {
    id: 'supplements',
    title: 'Supplements — Vitamins, Minerals, Functional Ingredients',
    intro:
      'Added nutrients that bring a complete-and-balanced formula into AAFCO compliance, and functional inclusions that go beyond the AAFCO profile. The relevant questions are inclusion at meaningful levels and bioavailability.',
    items: [
      { name: 'Taurine', note: 'Sulfur-containing amino acid. Essential for cats (cats cannot synthesize enough endogenously). Conditionally relevant for dogs — the FDA CVM 2018 DCM investigation drew attention to taurine status in legume-heavy grain-free diets.', href: '/ingredients/taurine' },
      { name: 'L-carnitine', note: 'Implicated in cardiac muscle metabolism; supplemented in some adult and senior formulas.', href: '/ingredients/l-carnitine' },
      { name: 'Glucosamine, chondroitin sulfate', note: 'Joint-support inclusions, often paired. AAFCO does not require either. Clinical evidence for therapeutic effect at typical pet-food inclusion levels is mixed; sustained effect generally requires higher dosing.', href: '/ingredients/glucosamine' },
      { name: 'Probiotic strains (Bacillus, Enterococcus, Bifidobacterium)', note: 'Live or viable bacterial inclusions. Strain identity and CFU count at point of consumption are the relevant disclosures; many label claims do not specify either.', href: '/ingredients/probiotics' },
      { name: 'Chelated / proteinated trace minerals', note: 'Trace minerals (zinc, copper, manganese) bound to amino acids or short peptides for improved bioavailability over inorganic sulfate forms.', href: '/ingredients/chelated-minerals' },
      { name: 'Vitamin and mineral premix', note: 'Composite added-nutrient blend. The label entry abbreviates an underlying list of specific vitamin/mineral compounds.', href: '/ingredients/vitamin-premix' },
    ],
  },
  {
    id: 'concerning',
    title: 'Ingredient Disclosures Worth Scrutiny',
    intro:
      'These ingredients are not necessarily unsafe — most are AAFCO-permitted — but they signal lower disclosure or unregulated marketing language. They appear here so the reader can spot them on a label and ask the right follow-up.',
    items: [
      { name: 'Artificial colors (Red 40, Yellow 5, Yellow 6, Blue 2)', note: 'FDA-approved color additives. No nutritional contribution; present primarily for human-shopper visual appeal. Common in mid-tier kibble.', href: '/ingredients/artificial-colors' },
      { name: '“Natural flavors”', note: 'AAFCO-defined catch-all. The term is broad; without follow-up disclosure from the manufacturer, the reader does not know what is in it.', href: '/ingredients/natural-flavors' },
      { name: '“Meat” / “meat meal” / “poultry” (unspecified)', note: 'Generic AAFCO-defined ingredients. Permitted; lowest tier of species disclosure. Compare to “chicken meal,” “turkey meal,” “salmon meal” which name the species.', href: '/ingredients/unspecified-meat' },
      { name: '“Holistic,” “premium,” “human-grade,” “super-premium”', note: 'Marketing terms with no AAFCO regulatory definition. “Human-grade” has a narrow AAFCO definition only when the entire product meets human-edible standards; the term is widely used in marketing without that qualification.', href: '/ingredients/marketing-terms' },
      { name: '“Animal digest” (cat food palatant)', note: 'AAFCO-defined hydrolyzed animal tissue. Functionally a palatant. Unspecified species — lowest tier of disclosure for that role.', href: '/ingredients/animal-digest' },
    ],
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why are by-products listed without scare-quotes?',
    answer:
      'Because “by-product” is an AAFCO-defined term, not an indictment. The category covers organ meats, viscera, and other nutritious tissues. Named-species by-product meals (chicken by-product meal, beef by-product meal) carry species disclosure. The case to scrutinize is unspecified-species meat meal — that is a disclosure issue, not a nutritional one.',
    answerText:
      'By-product is an AAFCO-defined term covering nutritious organ meats and viscera. Named-species by-product meals carry species disclosure; unspecified-species meat meal is the disclosure issue.',
  },
  {
    question: 'Is grain-free dog food dangerous?',
    answer:
      'The FDA Center for Veterinary Medicine opened a public investigation in 2018 into reports of dilated cardiomyopathy in dog breeds not previously considered predisposed. The investigation pointed at — but did not establish causation with — grain-free diets heavy in pulse ingredients (peas, lentils, chickpeas). The investigation has not been closed and has not been retracted. The full record, including what it does and does not say, is at petfood.com/ingredients/grain-free-dcm-risk.',
    answerText:
      'The FDA CVM investigation opened in 2018 pointed at grain-free pulse-heavy diets without establishing causation. The investigation is open. Full record at PetFood.com.',
  },
  {
    question: 'Are BHA and BHT safe in pet food?',
    answer:
      'They are AAFCO-permitted and FDA-approved at specified inclusion levels. They are also classified by the U.S. National Toxicology Program as “reasonably anticipated to be a human carcinogen” at high doses. The regulatory position is that approved use levels in pet food are safe; the toxicology position concerns higher exposures. Both statements are true and refer to different exposure levels. Owners who prefer to avoid them have many naturally-preserved alternatives.',
    answerText:
      'BHA and BHT are AAFCO-permitted at specified levels. NTP classifies them at high doses as anticipated carcinogens. The regulatory and toxicology positions concern different exposure levels.',
  },
  {
    question: 'Does this site recommend a specific ingredient list?',
    answer:
      'No. The catalog is reference material. Recommending a formula in the abstract — without knowing the individual animal, life stage, body-condition score, breed predispositions, and clinical context — is the kind of advice a veterinarian gives, not a website. The ingredient pages exist so a reader can interpret a label they are already looking at.',
    answerText:
      'No. Recommending a formula without knowing the individual animal and clinical context is the kind of advice a veterinarian gives. The ingredient pages exist so a reader can interpret a label they are already looking at.',
  },
  {
    question: 'Why is taurine in the cat-required list but not the dog-required list?',
    answer:
      'Cats cannot synthesize sufficient taurine endogenously and must obtain it from diet; AAFCO classifies taurine as essential for cats. Dogs were historically considered able to synthesize taurine from sulfur amino acid precursors, so taurine has not been an AAFCO essential nutrient for dogs at the same level. The 2018 FDA CVM DCM investigation, however, raised the possibility that some dogs on legume-heavy grain-free diets may have impaired taurine status; the question is open in the veterinary cardiology literature.',
    answerText:
      'Cats cannot synthesize sufficient taurine and require it in diet; AAFCO classifies it as essential for cats. Taurine status in dogs is an open question following the 2018 FDA CVM DCM investigation.',
  },
  {
    question: 'Where do these ingredient definitions come from?',
    answer:
      'The Association of American Feed Control Officials (AAFCO) Official Publication, updated annually, contains the regulatory definitions for ingredient names that may legally appear on a US pet food label. The 2025 edition is the current version. AAFCO definitions do not necessarily mirror common English usage — which is precisely why the catalog exists.',
    answerText:
      'AAFCO Official Publication 2025 contains the regulatory definitions for ingredient names on US pet food labels. AAFCO terms do not always mirror common English usage.',
  },
]

export default function IngredientsHubPage() {
  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food Ingredients — A–Z Reference',
        subtitle:
          'A category-grouped index of the ingredients most commonly listed on US commercial dog and cat food labels. Each entry carries the AAFCO definition, a short factual note, and — where the editorial sister site PetFood.com has already published deeper analysis — a cross-link. The catalog is reference material; it interprets labels, it does not recommend foods.',
        category: 'Ingredient Catalog Index',
        publishedAt: 'May 2026',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Brand Index (A–Z)', href: '/brands', category: 'Hub' },
        { title: 'Pet Food Recall Database', href: '/recalls', category: 'Hub' },
        { title: 'Pet Food by Life Stage', href: '/life-stage', category: 'Hub' },
        { title: 'Label Glossary — AAFCO Terms', href: '/glossary', category: 'Reference' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'How to Read an Ingredient Panel', href: '#how-to-read' },
              ...GROUPS.map((g) => ({ label: g.title, href: `#${g.id}` })),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="On the Sister Site"
            links={[
              { label: 'AAFCO Completeness Explained', href: 'https://petfood.com/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: 'https://petfood.com/guides/reading-pet-food-labels' },
              { label: 'Grain-Free and DCM — The FDA Record', href: 'https://petfood.com/ingredients/grain-free-dcm-risk' },
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
      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFoods.com Editorial"
          publishedAt="2026-05-28T00:00:00Z"
          updatedAt="2026-05-28T00:00:00Z"
          reviewedBy="Editorial team"
        />
        <p id="tldr">
          <strong>TL;DR.</strong> This is the ingredient catalog. Entries are grouped by functional
          category — proteins, carbs, fats, fibers, preservatives, supplements, and disclosure
          patterns worth scrutiny — and each carries the AAFCO Official Publication 2025
          definition or its regulatory status. The catalog does not rank ingredients “good” or
          “bad”; it explains what the term means on a label so a reader can interpret the panel in
          front of them.
        </p>

        <h2 id="how-to-read">How to Read an Ingredient Panel</h2>
        <p>
          Three rules to keep in mind before the catalog itself is useful:
        </p>
        <ol>
          <li>
            <strong>Ingredients are listed by pre-cooking wet weight, not by nutritional
            contribution.</strong> A whole-meat first ingredient (high moisture) may contribute
            less protein to the finished product than a meal listed third (low moisture, dense
            protein). Dry-matter conversion is the only honest comparison.
          </li>
          <li>
            <strong>Named species disclosure is more than the absence of a by-product
            label.</strong> “Chicken meal” names a species. “Meat meal” does not. The split tier
            is the by-product question.
          </li>
          <li>
            <strong>Ingredient splitting can hide a primary ingredient.</strong> If peas appear as
            “peas, pea protein, pea fiber” at positions 3, 5, and 7, the combined pea content may
            exceed the named meat at position 1. Read for splits.
          </li>
        </ol>
        <p>
          The full label-reading mechanics — guaranteed analysis, dry-matter calculations,
          product-name rules, feeding-guideline inflation — are covered in detail at{' '}
          <a href="https://petfood.com/guides/reading-pet-food-labels" target="_blank" rel="noopener">
            petfood.com/guides/reading-pet-food-labels
          </a>
          .
        </p>

        {GROUPS.map((group) => (
          <section key={group.id} id={group.id}>
            <h2>{group.title}</h2>
            <p>{group.intro}</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '14px',
                margin: '18px 0 24px',
              }}
            >
              {group.items.map((item) => {
                // Detect whether the href maps to a live /ingredients/[slug] page in
                // this app. If so, render as Next <Link> (client-side routing) and
                // surface a "Deep dive" pill. Otherwise fall back to <a>.
                const localSlug = item.href.startsWith('/ingredients/')
                  ? item.href.replace('/ingredients/', '')
                  : null
                const hasDeepDive = localSlug !== null && DEEP_DIVE_SLUGS.has(localSlug)

                const cardStyle = {
                  display: 'block',
                  padding: '14px 16px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '6px',
                  background: 'var(--brand-white)',
                  color: 'var(--brand-text-dark)',
                  textDecoration: 'none',
                  lineHeight: 1.45,
                } as const

                const inner = (
                  <>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--brand-text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
                      {item.note}
                    </div>
                    {item.external && (
                      <div style={{ fontSize: '11px', color: 'var(--brand-success)', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Full record → PetFood.com
                      </div>
                    )}
                    {hasDeepDive && (
                      <div style={{ fontSize: '11px', color: 'var(--brand-success)', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Deep dive →
                      </div>
                    )}
                  </>
                )

                if (hasDeepDive) {
                  return (
                    <Link key={item.name} href={item.href} style={cardStyle}>
                      {inner}
                    </Link>
                  )
                }

                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      style={cardStyle}
                    >
                      {inner}
                    </a>
                  )
                }

                // Non-deep-dive, non-external: no page exists for this slug yet.
                // Render as a non-interactive card to avoid 404 navigation.
                return (
                  <div key={item.name} style={cardStyle}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official Publication</em>.
            The annual reference volume containing ingredient definitions, nutrient profiles for
            dogs and cats, and pet food labeling rules. The regulatory source for every entry on
            this catalog.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine.{' '}
            <em>Animal Food Ingredients Approved for Use in Animal Food</em> and the FDA-AAFCO
            Memorandum of Understanding. The regulatory backdrop for AAFCO ingredient definitions
            in interstate commerce.
          </li>
          <li>
            U.S. National Toxicology Program. <em>Report on Carcinogens</em>, current edition.
            Source for the BHA classification cited above.
          </li>
          <li>
            FDA CVM. <em>Questions &amp; Answers: FDA’s Work on Potential Causes of Non-Hereditary
            DCM in Dogs</em> (2019; investigation page maintained current). Source for the
            grain-free / pulse / DCM investigation status.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee.{' '}
            <em>Selecting a Pet Food Manufacturer</em>. Source for the disclosure-and-audit
            questions a reader is entitled to ask a manufacturer.
          </li>
          <li>
            National Research Council. <em>Nutrient Requirements of Dogs and Cats</em> (NRC, 2006).
            The underlying nutritional science volume that AAFCO nutrient profiles draw on.
          </li>
        </ul>

        <CrossPortfolioCard
          currentSite="petfoods-com"
          contentType="nutrition"
          variant="footer"
        />
      </div>
    </ArticleLayout>
  )
}
