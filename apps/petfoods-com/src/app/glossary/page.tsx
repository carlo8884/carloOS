import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  ArticleByline,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food Label Glossary — AAFCO Terms Decoded | PetFoods.com',
  description:
    'What pet food label terms actually mean under AAFCO: human-grade, natural, holistic, by-product, meal, the 95% and 25% naming rules, and complete & balanced.',
  path: '/glossary',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food Label Glossary — AAFCO Terms Decoded',
  description:
    'A reference glossary of the regulated and marketing terms that appear on US dog and cat food labels, each defined against the AAFCO Official Publication and FDA regulations, with cross-links to the ingredient catalog.',
  url: 'https://petfoods.com/glossary',
  imageUrl: '',
  authorName: 'PetFoods.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// ─── Glossary entries ────────────────────────────────────────────────────────

interface GlossaryEntry {
  id: string
  term: string
  category: 'Naming rule' | 'Quality claim' | 'Ingredient term' | 'Substantiation'
  definition: string
  /** Optional ingredient-catalog slug this term cross-links to. */
  ingredientSlug?: string
}

const ENTRIES: GlossaryEntry[] = [
  {
    id: 'ninety-five-percent-rule',
    term: 'The 95% Rule',
    category: 'Naming rule',
    definition:
      'Under AAFCO Model Regulation PF3, a product named simply "Beef for Dogs" or "Salmon Cat Food" must contain at least 95% of that named ingredient (or 70% counting added water). This is the strongest naming tier and is most common in canned single-protein products.',
  },
  {
    id: 'twenty-five-percent-rule',
    term: 'The 25% / "Dinner" Rule',
    category: 'Naming rule',
    definition:
      'When a named ingredient makes up between 25% and 94% of the product, AAFCO requires a qualifying term such as "Dinner," "Entree," "Platter," "Formula," or "Recipe." So "Chicken Dinner" need only be 25% chicken — far less than "Chicken for Dogs." Reading the qualifier is the difference between a 95% and a 25% product.',
  },
  {
    id: 'with-rule',
    term: 'The "With" Rule',
    category: 'Naming rule',
    definition:
      'Under AAFCO PF3, "with" requires only 3% of the named ingredient. "Dog Food With Beef" can be just 3% beef. The placement of the word "with" changes the required percentage dramatically, which is why it is a frequently misread label cue.',
  },
  {
    id: 'flavor-rule',
    term: 'The "Flavor" Rule',
    category: 'Naming rule',
    definition:
      'Under AAFCO PF3, "Beef Flavor" requires only that the flavor be detectable — there is no minimum percentage of beef, and the flavor may come from a digest or another source rather than from beef muscle meat. "Flavor" is the lowest naming tier.',
    ingredientSlug: 'natural-flavors',
  },
  {
    id: 'complete-and-balanced',
    term: 'Complete & Balanced',
    category: 'Substantiation',
    definition:
      'A regulated AAFCO claim meaning the diet meets the AAFCO Dog or Cat Food Nutrient Profile for a stated life stage. The diet is substantiated either by formulation (meeting the profile on paper / by analysis) or by an AAFCO feeding trial. The nutritional adequacy statement on the label specifies which method and which life stage.',
  },
  {
    id: 'feeding-trial',
    term: 'AAFCO Feeding Trial',
    category: 'Substantiation',
    definition:
      'A protocol in which the diet is fed to animals under a defined AAFCO procedure and they are monitored for nutritional adequacy. A feeding-trial statement ("Animal feeding tests using AAFCO procedures substantiate that…") is generally considered more clinically informative than a formulation-only statement, because it tests bioavailability in living animals, not just calculated nutrient levels.',
  },
  {
    id: 'formulated-to-meet',
    term: 'Formulated to Meet',
    category: 'Substantiation',
    definition:
      'A nutritional adequacy statement indicating the diet was formulated to meet the AAFCO nutrient profile by calculation or laboratory analysis, without a feeding trial. It is a valid AAFCO substantiation method; the distinction from a feeding trial is about bioavailability testing, not legality.',
  },
  {
    id: 'human-grade',
    term: 'Human-Grade',
    category: 'Quality claim',
    definition:
      'A claim with a specific AAFCO-recognized meaning: every ingredient, and the finished product, must be stored, handled, processed, and transported in a manner compliant with FDA human-food regulations, and the product must be produced in a facility licensed for human food. Most pet foods cannot legally make this claim. "Human-grade ingredients" (a softer phrasing) is weaker than a true "human-grade" finished-product claim.',
  },
  {
    id: 'natural',
    term: 'Natural',
    category: 'Quality claim',
    definition:
      'AAFCO defines "natural" as a feed or ingredient derived from plant, animal, or mined sources, not subjected to chemically synthetic processing, and not containing chemically synthetic additives — except in amounts that occur unavoidably in good manufacturing. Because almost all complete diets add synthetic vitamins/minerals, the common label phrasing is "Natural with added vitamins and minerals." "Natural" is not the same as "organic."',
  },
  {
    id: 'organic',
    term: 'Organic',
    category: 'Quality claim',
    definition:
      'Unlike "natural," "organic" on pet food is governed by the USDA National Organic Program (the same standard as human food), not by AAFCO alone. The percentage of organic content determines whether a product can say "100% organic," "organic," or "made with organic ingredients." It is the more stringently regulated of the two claims.',
  },
  {
    id: 'holistic',
    term: 'Holistic',
    category: 'Quality claim',
    definition:
      'A purely marketing term with no AAFCO or FDA regulatory definition. Any pet food may use it regardless of formulation. It carries no enforceable meaning and should be read as marketing language, not as a substantiated quality tier.',
  },
  {
    id: 'premium-gourmet',
    term: 'Premium / Gourmet / Super-Premium',
    category: 'Quality claim',
    definition:
      'Marketing terms with no regulatory definition under AAFCO or FDA. A product labeled "premium" is not required to meet any nutrient standard beyond the baseline complete-and-balanced requirement that applies to all products making that claim. The words signal price and positioning, not a regulated quality level.',
  },
  {
    id: 'meal',
    term: 'Meal (e.g., Chicken Meal)',
    category: 'Ingredient term',
    definition:
      'An AAFCO-defined rendered, dried ingredient. "Chicken meal" is rendered chicken flesh, skin, and bone, dried to a concentrated protein. It is not lower quality than fresh meat — on a dry-matter basis it is more protein-dense, because fresh meat is mostly water and is weighed wet on the panel.',
    ingredientSlug: 'chicken-meal',
  },
  {
    id: 'by-product',
    term: 'By-Product / By-Product Meal',
    category: 'Ingredient term',
    definition:
      'An AAFCO term covering organ meats and other tissues beyond skeletal muscle (e.g., liver, lung, kidney, spleen). "By-product" denotes the tissue category, not low quality — organ meat is nutrient-dense. The disclosure question is whether a species is named ("chicken by-product meal") or not ("meat by-product").',
    ingredientSlug: 'chicken-by-product-meal',
  },
  {
    id: 'meat',
    term: '"Meat" (unspecified)',
    category: 'Ingredient term',
    definition:
      'Under AAFCO, "meat" denotes mammalian tissue without identifying the species. Generic "meat," "meat meal," "meat and bone meal," and "meat by-product" carry a low disclosure tier precisely because the source species is not named — a key consideration for protein-elimination diets.',
    ingredientSlug: 'meat-and-bone-meal',
  },
  {
    id: 'poultry',
    term: '"Poultry" (unspecified)',
    category: 'Ingredient term',
    definition:
      'A generic AAFCO term covering chicken, turkey, or a mixture. Like generic "meat," it does not disclose the source species. Named-species forms ("chicken meal," "turkey meal") carry more disclosure than "poultry meal" or "poultry by-product meal."',
    ingredientSlug: 'poultry-by-product-meal',
  },
  {
    id: 'grain-free',
    term: 'Grain-Free',
    category: 'Quality claim',
    definition:
      'A formulation descriptor with no AAFCO nutrient definition — it simply means no cereal grains. The carbohydrate is supplied by alternatives such as potatoes, sweet potatoes, tapioca, or pulses (peas, lentils, chickpeas). The FDA CVM has an open investigation into an association between some pulse-heavy grain-free diets and canine dilated cardiomyopathy; "grain-free" is not synonymous with "better."',
    ingredientSlug: 'legume-blends',
  },
  {
    id: 'limited-ingredient',
    term: 'Limited Ingredient Diet (LID)',
    category: 'Quality claim',
    definition:
      'A marketing descriptor (not an AAFCO term) for diets built around a single animal-protein source and a limited carbohydrate set, positioned for food-sensitivity management. It is not equivalent to a veterinary hydrolyzed or novel-protein elimination diet; for a true elimination trial, a veterinarian selects the protein based on the individual animal\'s exposure history.',
  },
  {
    id: 'guaranteed-analysis',
    term: 'Guaranteed Analysis',
    category: 'Substantiation',
    definition:
      'The AAFCO-required panel of minimum crude protein, minimum crude fat, maximum crude fiber, and maximum moisture (plus any additional guarantees a brand chooses to state). It reports on an as-fed basis, so comparing a wet food to a dry food requires converting both to a dry-matter basis before the numbers are comparable.',
  },
  {
    id: 'dry-matter-basis',
    term: 'Dry-Matter Basis (DMB)',
    category: 'Substantiation',
    definition:
      'The honest way to compare diets of different moisture content. Removing the water mathematically lets a 10%-moisture kibble and a 78%-moisture canned food be compared on the same scale. Guaranteed-analysis numbers are reported as-fed, so dry-matter conversion is the step that makes a cross-format comparison meaningful.',
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is "human-grade" a real claim or just marketing?',
    answer:
      'It is a real, AAFCO-recognized claim with a specific bar: every ingredient and the finished product must be handled in compliance with FDA human-food regulations and produced in a human-food-licensed facility. Most pet foods cannot legally make a true finished-product "human-grade" claim. Watch for the softer "made with human-grade ingredients," which is weaker than a finished-product human-grade claim.',
    answerText:
      'Real and AAFCO-recognized, with a specific bar: human-food-compliant handling and a human-food-licensed facility. Most pet foods cannot meet it. "Made with human-grade ingredients" is weaker than a finished-product claim.',
  },
  {
    question: 'What is the difference between "Chicken Dog Food" and "Chicken Dinner"?',
    answer:
      'The AAFCO naming rules. "Chicken Dog Food" (the 95% rule) must be at least 95% chicken; "Chicken Dinner" (the 25% rule) need only be 25% chicken. The qualifier word — Dinner, Entree, Formula, Recipe, Platter — drops the required percentage from 95% to 25%. "With chicken" drops it to 3%, and "chicken flavor" requires only a detectable flavor.',
    answerText:
      '"Chicken Dog Food" must be ≥95% chicken (95% rule); "Chicken Dinner" need only be 25% (25% rule). "With chicken" requires 3%; "chicken flavor" requires only a detectable flavor.',
  },
  {
    question: 'Does "natural" mean there are no synthetic additives?',
    answer:
      'Almost never in a complete diet. AAFCO defines "natural" as derived from plant, animal, or mined sources without chemically synthetic processing — but complete-and-balanced diets add synthetic vitamins and minerals to meet the nutrient profile. That is why the common phrasing is "Natural with added vitamins and minerals." "Natural" is also not the same as "organic," which is governed by the USDA National Organic Program.',
    answerText:
      'Almost never in a complete diet — synthetic vitamins/minerals are added to meet the profile, hence "Natural with added vitamins and minerals." "Natural" is not the same as USDA "organic."',
  },
  {
    question: 'Is a feeding trial better than "formulated to meet"?',
    answer:
      'A feeding-trial statement is generally considered more clinically informative because it tests the diet in living animals, capturing bioavailability that a calculated formulation cannot. Both are valid AAFCO substantiation methods, and "formulated to meet" is not a deficiency — but if everything else is equal, the feeding-trial statement provides more evidence that the nutrients are actually usable by the animal.',
    answerText:
      'A feeding trial tests bioavailability in living animals, so it is generally more clinically informative. Both are valid AAFCO methods; "formulated to meet" is not a deficiency.',
  },
  {
    question: 'How is this glossary different from the ingredient catalog?',
    answer:
      'The glossary decodes label terms and naming rules — the words a manufacturer uses on the bag. The ingredient catalog defines the substances themselves against the AAFCO Official Publication Chapter 9. Many glossary entries link directly to the matching ingredient page (for example, "meal" links to chicken meal, "by-product" to chicken by-product meal) so you can move from the label term to the underlying ingredient.',
    answerText:
      'The glossary decodes label terms and naming rules; the ingredient catalog defines the substances. Glossary entries cross-link to the matching ingredient pages.',
  },
]

const CATEGORY_ORDER: GlossaryEntry['category'][] = [
  'Naming rule',
  'Substantiation',
  'Quality claim',
  'Ingredient term',
]

export default function GlossaryHubPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Label Glossary', href: '/glossary' },
  ]

  const faqSchema = buildFAQSchema({
    questions: FAQ_ITEMS.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({ name: b.name, url: `https://petfoods.com${b.href}` })),
  })

  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food Label Glossary — AAFCO Terms Decoded',
        subtitle:
          'What the regulated and marketing terms on a US dog or cat food label actually mean — the naming rules, the substantiation statements, and the quality claims that do (and do not) carry an enforceable definition.',
        category: 'Reference Glossary',
        publishedAt: 'June 2026',
        readTime: '9 min',
        authorName: 'PetFoods.com Editorial',
      }}
      breadcrumbs={breadcrumbItems}
      schema={schema}
      relatedLinks={[
        { title: 'Ingredients A–Z Reference', href: '/ingredients', category: 'Reference' },
        { title: 'Brand Index & Reviews', href: '/brands', category: 'Reference' },
        { title: 'Pet Food Recall Database', href: '/recalls', category: 'Safety' },
        { title: 'Pet Food by Life Stage', href: '/life-stage', category: 'Reference' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'Naming Rules', href: '#naming-rule' },
              { label: 'Substantiation Terms', href: '#substantiation' },
              { label: 'Quality Claims', href: '#quality-claim' },
              { label: 'Ingredient Terms', href: '#ingredient-term' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Reference Hubs"
            links={[
              { label: 'Ingredient Catalog', href: '/ingredients' },
              { label: 'Brand Index', href: '/brands' },
              { label: 'Life-Stage Catalog', href: '/life-stage' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
            ]}
          />
          <CrossPortfolioCard currentSite="petfoods-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFoods.com Editorial"
          publishedAt="2026-06-01T00:00:00Z"
          updatedAt="2026-06-01T00:00:00Z"
          reviewedBy="Editorial team"
        />
        <p id="tldr">
          <strong>TL;DR.</strong> US pet food labels mix terms with strict AAFCO and FDA definitions
          (the 95%/25%/with/flavor naming rules, "complete &amp; balanced," "human-grade," "natural,"
          "organic") with terms that carry no enforceable meaning at all ("holistic," "premium,"
          "gourmet"). This glossary defines each against its regulatory source and links the
          ingredient-related terms to the full ingredient catalog. Knowing which words are regulated
          and which are marketing is the single most useful label-reading skill.
        </p>

        {CATEGORY_ORDER.map((cat) => {
          const items = ENTRIES.filter((e) => e.category === cat)
          const heading =
            cat === 'Naming rule'
              ? 'Naming Rules (the percentage tiers)'
              : cat === 'Substantiation'
                ? 'Substantiation & Adequacy Terms'
                : cat === 'Quality claim'
                  ? 'Quality Claims (regulated and unregulated)'
                  : 'Ingredient Terms'
          return (
            <section key={cat} id={cat.toLowerCase().replace(/\s+/g, '-')}>
              <h2>{heading}</h2>
              <dl style={{ margin: '12px 0 28px' }}>
                {items.map((e) => (
                  <div
                    key={e.id}
                    id={e.id}
                    style={{
                      border: '1px solid var(--brand-border)',
                      borderRadius: '8px',
                      padding: '14px 18px',
                      margin: '0 0 12px',
                      background: 'var(--brand-white)',
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--brand-text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      {e.term}
                    </dt>
                    <dd style={{ margin: 0, color: 'var(--brand-text-mid)', lineHeight: 1.55 }}>
                      {e.definition}
                      {e.ingredientSlug && (
                        <>
                          {' '}
                          <Link href={`/ingredients/${e.ingredientSlug}`}>
                            See the ingredient page →
                          </Link>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )
        })}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official Publication</em>
            {' '}— Model Regulations for Pet Food and Specialty Pet Food (PF1–PF9, including the
            product-naming percentage rules), Chapter 9 Feed Ingredient Definitions, and the Dog and
            Cat Food Nutrient Profiles.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labeling
            </em> and <em>Animal Food Ingredients Approved for Use in Animal Food</em>.{' '}
            <a
              href="https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food"
              target="_blank"
              rel="noopener"
            >
              fda.gov — pet food
            </a>
          </li>
          <li>
            U.S. FDA CVM. <em>Investigation into Potential Link between Certain Diets and Canine
            Dilated Cardiomyopathy</em> — cited for the grain-free entry.
          </li>
          <li>
            U.S. Department of Agriculture, National Organic Program — the governing standard for the
            "organic" claim on pet food.
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
