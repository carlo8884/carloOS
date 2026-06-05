import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  ArticleByline,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food by Life Stage — Puppy, Adult, Senior, All Stages',
  description:
    'AAFCO life-stage definitions, nutrient profile differences, and what each classification actually means on a US dog or cat food label.',
  path: '/life-stage',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food by Life Stage — Puppy, Adult, Senior, All Stages',
  description:
    'Reference catalog of AAFCO life-stage classifications for dog and cat food, the nutrient-profile differences between them, and what an owner should ask a manufacturer for each.',
  url: 'https://petfoods.com/life-stage',
  imageUrl: '',
  authorName: 'PetFoods.com Catalog',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

// ─── Life stage catalog ─────────────────────────────────────────────────────

interface LifeStageCard {
  id: string
  title: string
  aafcoStatement: string
  whoItIsFor: string
  nutrientHighlights: string[]
  formulationNotes: string
  watchOuts: string
  href: string
}

const STAGES: LifeStageCard[] = [
  {
    id: 'growth',
    title: 'Growth (Puppy / Kitten)',
    aafcoStatement:
      'Formulated to meet the nutritional levels established by the AAFCO Dog (or Cat) Food Nutrient Profiles for Growth. Large-breed puppy formulas additionally state: “including growth of large size dogs (70 lb or more as an adult).”',
    whoItIsFor:
      'Puppies and kittens from weaning to approximately one year (small/medium breeds) or up to 18–24 months (large/giant breeds). Kittens to approximately 12 months.',
    nutrientHighlights: [
      'Higher minimum crude protein (AAFCO 2025 OP: dogs growth ≥ 22.5% DM; cats growth ≥ 30.0% DM)',
      'Higher minimum fat (AAFCO 2025 OP: dogs growth ≥ 8.5% DM; cats growth ≥ 9.0% DM)',
      'Calcium and phosphorus minima are higher and the Ca:P ratio range is narrower than for adult maintenance — critical for skeletal development',
      'Specific calcium maximum (1.8% DM, or for large-breed growth ≤ 1.8% DM with absolute target near 1.2–1.5%) — excess calcium during growth is implicated in developmental orthopedic disease in large-breed puppies',
    ],
    formulationNotes:
      'Growth diets are calorically denser. Feeding-trial AAFCO substantiation for growth is more clinically informative than formulation-only because the trial covers the full growth phase. Large-breed puppy diets specifically restrict calcium absolute levels — feeding an adult or all-life-stages diet to a large-breed puppy can supply too much calcium, even when the percentage looks compliant.',
    watchOuts:
      'A diet labeled “all life stages” without an explicit large-breed growth qualifier may not be appropriate for a large-breed puppy. WSAVA guidance recommends reading the AAFCO statement and the Ca/P disclosure rather than relying on marketing claims.',
    href: '#growth',
  },
  {
    id: 'maintenance',
    title: 'Adult Maintenance',
    aafcoStatement:
      'Formulated to meet the nutritional levels established by the AAFCO Dog (or Cat) Food Nutrient Profiles for Maintenance.',
    whoItIsFor:
      'Healthy, non-pregnant, non-lactating adult dogs and cats. Approximately one year and older; large/giant breed dogs typically transition once skeletal growth has plateaued.',
    nutrientHighlights: [
      'Lower required protein and fat floor than growth (AAFCO 2025 OP: dogs maintenance protein ≥ 18.0% DM, fat ≥ 5.5% DM; cats maintenance protein ≥ 26.0% DM, fat ≥ 9.0% DM)',
      'Wider Ca:P ratio range than growth — skeletal development concerns are no longer active',
      'Caloric density varies substantially across maintenance formulas; the guaranteed analysis is the relevant compare-across-brands surface',
    ],
    formulationNotes:
      'Most commercial adult formulas substantiate AAFCO compliance by formulation, not feeding trial. The PetFood.com methodology weights feeding-trial substantiation higher because it verifies the calculated profile in living animals.',
    watchOuts:
      'Adult maintenance formulas are not interchangeable across species — adult cat food fed to a dog underprovides several nutrients and overprovides others. Feeding-guideline portion sizes on the bag tend to be inflated; body-condition score is the more honest gauge.',
    href: '#maintenance',
  },
  {
    id: 'senior',
    title: 'Senior (Mature)',
    aafcoStatement:
      'AAFCO does not maintain a distinct “senior” nutrient profile. Senior-labeled formulas substantiate AAFCO compliance against either the Adult Maintenance profile or All Life Stages. The “senior” marker is a marketing classification, not an AAFCO category.',
    whoItIsFor:
      'Dogs and cats in the latter third of expected lifespan — a moving target by breed size and species. Small dogs and most cats: approximately 8–10 years and older. Large/giant breed dogs: 5–7 years and older.',
    nutrientHighlights: [
      'No AAFCO-specific senior profile; senior diets vary widely in protein, phosphorus, sodium, and caloric density across brands',
      'Common formulation choices include moderately reduced phosphorus (for early chronic kidney disease risk), moderately reduced sodium, added joint-support ingredients (glucosamine, chondroitin, EPA/DHA), and adjusted caloric density',
      'Protein levels are inconsistent — older veterinary nutrition thinking favored protein restriction in seniors, but current consensus is that healthy seniors do not require restriction and may need slightly higher protein to preserve lean mass',
    ],
    formulationNotes:
      'Because there is no AAFCO senior profile, a senior label means whatever the manufacturer has decided it means. Two brand-name “senior” formulas may differ in protein content by more than 10 percentage points. Reading the guaranteed analysis is the only honest comparison.',
    watchOuts:
      'A senior diagnosis that motivates a senior diet — for example, early chronic kidney disease — is a veterinary call, not a marketing one. Therapeutic renal or hepatic diets are a different category (regulated under FDA prescription-diet framework) and are not interchangeable with retail “senior” formulas.',
    href: '#senior',
  },
  {
    id: 'all-stages',
    title: 'All Life Stages',
    aafcoStatement:
      'Formulated to meet the nutritional levels established by the AAFCO Dog (or Cat) Food Nutrient Profiles for All Life Stages. (Effectively, it meets growth-and-reproduction levels, which are higher than maintenance.)',
    whoItIsFor:
      'Households with multiple animals at different ages; bridges puppy and adult feeding without switching formulas. For cats, all-life-stages is common in raw and freeze-dried formats.',
    nutrientHighlights: [
      'All life stages = growth-and-reproduction substantiation. Minimum protein, fat, calcium, and phosphorus levels match the growth profile, which is higher than maintenance.',
      'Without the qualifier “including growth of large size dogs,” an all-life-stages dog formula is not validated for large-breed puppies — the calcium maximum and absolute calcium level may exceed what large-breed skeletal development tolerates safely',
    ],
    formulationNotes:
      'For an adult dog, an all-life-stages diet is nutritionally adequate but caloric density may be higher than needed, contributing to overfeeding if portion sizes are not adjusted downward. For a small or medium-breed puppy, all-life-stages is generally appropriate.',
    watchOuts:
      'Check for the large-breed-growth qualifier specifically if feeding a large-breed puppy. Absence of the qualifier is not a safety claim; AAFCO permits the all-life-stages designation without it.',
    href: '#all-stages',
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is there a real difference between puppy food and adult food?',
    answer:
      'Yes. The AAFCO Nutrient Profiles for Growth and for Adult Maintenance specify different minima for protein, fat, calcium, and phosphorus, and growth has a calcium maximum that maintenance does not. The differences are not marketing — they reflect different nutritional requirements during skeletal development versus established adulthood.',
    answerText:
      'Yes. AAFCO Growth and Adult Maintenance profiles specify different minima for protein, fat, calcium, and phosphorus, and growth has a calcium maximum that maintenance does not.',
  },
  {
    question: 'Why is there no AAFCO “senior” category?',
    answer:
      'Because the underlying nutritional research has not produced a stable consensus on a single senior nutrient profile distinct from adult maintenance. AAFCO has historically not codified one. Brands fill the gap with their own senior formulations, which is why two senior products from different brands can differ substantially in protein, phosphorus, and caloric density. Read the guaranteed analysis, not the label adjective.',
    answerText:
      'AAFCO has not codified a senior profile because nutritional research has not produced a stable consensus distinct from adult maintenance. Senior formulations vary substantially across brands.',
  },
  {
    question: 'Can I feed an all-life-stages food to my large-breed puppy?',
    answer:
      'Only if the label explicitly says it is substantiated for growth of large size dogs (70 lb or more as an adult). Without that qualifier, the calcium content may be higher than appropriate for large-breed skeletal development, which is implicated in developmental orthopedic disease. This is one of the most consequential label-reading questions for a large-breed puppy owner.',
    answerText:
      'Only if the label explicitly says it is substantiated for growth of large size dogs (70 lb or more as an adult). Without that qualifier, calcium may be too high for large-breed skeletal development.',
  },
  {
    question: 'When should I switch from puppy to adult food?',
    answer:
      'Approximately at the end of skeletal growth — for small breeds, around 9–12 months; for medium breeds, 12 months; for large breeds, 12–18 months; for giant breeds, up to 24 months. Kittens transition around 12 months. The transition is a veterinary judgment call informed by breed size and body-condition score, not a calendar date.',
    answerText:
      'At the end of skeletal growth — 9–12 months for small breeds, up to 24 months for giant breeds. Kittens at approximately 12 months. The transition is a veterinary judgment informed by breed size and body-condition score.',
  },
  {
    question: 'Does an older dog need lower-protein food?',
    answer:
      'Older veterinary nutrition thinking favored protein restriction in geriatric dogs, but current consensus in the WSAVA Global Nutrition Committee guidance and contemporary veterinary internal medicine literature is that healthy seniors do not require protein restriction and may benefit from somewhat higher protein to preserve lean muscle mass. Specific therapeutic restriction (for chronic kidney disease, for example) is a veterinary decision, not a retail-aisle one.',
    answerText:
      'Current veterinary nutrition consensus is that healthy seniors do not require protein restriction and may benefit from higher protein for lean mass preservation. Therapeutic restriction is a veterinary decision.',
  },
  {
    question: 'Are AAFCO and WSAVA the same thing?',
    answer:
      'No. AAFCO is a US regulatory body that sets ingredient definitions and nutrient profiles for pet food labels. WSAVA — the World Small Animal Veterinary Association — is an international veterinary association whose Global Nutrition Committee publishes guidance for veterinarians and owners on selecting and evaluating pet food. AAFCO is the regulatory floor; WSAVA is the clinical-evaluation framework. They are complementary, not interchangeable.',
    answerText:
      'AAFCO is the US regulatory body for pet food ingredient definitions and nutrient profiles. WSAVA is an international veterinary association whose Global Nutrition Committee publishes clinical guidance. Complementary, not interchangeable.',
  },
]

export default function LifeStageHubPage() {
  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food by Life Stage',
        subtitle:
          'AAFCO classifies dog and cat food into a small number of life-stage categories — Growth (including a large-breed-growth qualifier), Adult Maintenance, and All Life Stages — each with its own nutrient profile. “Senior” is a marketing classification, not an AAFCO category. This catalog explains what each classification actually means on a label.',
        category: 'Life Stage Catalog',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Life Stage', href: '/life-stage' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Ingredient Catalog (A–Z)', href: '/ingredients', category: 'Hub' },
        { title: 'Brand Index (A–Z)', href: '/brands', category: 'Hub' },
        { title: 'Pet Food Recall Database', href: '/recalls', category: 'Hub' },
        { title: 'Label Glossary — AAFCO Terms', href: '/glossary', category: 'Reference' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'AAFCO Life Stages — The Whole Picture', href: '#aafco-picture' },
              ...STAGES.map((s) => ({ label: s.title, href: `#${s.id}` })),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="On the Sister Site"
            links={[
              { label: 'AAFCO Completeness Explained', href: 'https://petfood.com/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: 'https://petfood.com/guides/reading-pet-food-labels' },
              { label: 'PetFood.com Methodology', href: 'https://petfood.com/guides/methodology' },
            ]}
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
          <strong>TL;DR.</strong> Every US commercial dog or cat food carries an AAFCO statement
          declaring which life stage it is formulated for. The statement is binding: it determines
          whether the formula meets a specific set of nutritional minima and maxima. Growth and
          Adult Maintenance are distinct AAFCO profiles; All Life Stages is effectively the
          growth-and-reproduction profile applied across the board; “senior” is a category label
          brands use without an AAFCO nutrient profile to anchor it. Read the AAFCO statement; do
          not rely on the marketing adjective on the front of the bag.
        </p>

        <h2 id="aafco-picture">AAFCO Life Stages — The Whole Picture</h2>
        <p>
          AAFCO publishes two nutrient profiles for dogs (Growth-and-Reproduction and Adult
          Maintenance) and two for cats (Growth-and-Reproduction and Adult Maintenance). A formula
          substantiated for both is labeled “All Life Stages.” Within the dog growth profile, a
          large-breed-growth qualifier applies a tighter calcium ceiling because of the
          developmental orthopedic disease risk in large-breed puppies.
        </p>
        <p>
          “Senior,” “mature,” “puppy,” and “kitten” are categories the marketplace uses, but the
          AAFCO statement in small print on the back of the bag is the operative classification. A
          bag may say “senior” on the front while substantiating only Adult Maintenance on the
          back; that is permitted. The label-reading mechanics — and the full breakdown of the
          six dog life stages (gestation, lactation, growth, large-breed growth, adult maintenance,
          all life stages) and the four cat life stages — are detailed at{' '}
          <a href="https://petfood.com/guides/aafco-completeness-explained" target="_blank" rel="noopener">
            petfood.com/guides/aafco-completeness-explained
          </a>
          .
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            margin: '24px 0 32px',
          }}
        >
          {STAGES.map((stage) => (
            <article
              key={stage.id}
              id={stage.id}
              style={{
                padding: '22px 22px 18px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
              }}
            >
              <h3 style={{ margin: '0 0 10px', fontSize: '20px', fontWeight: 700, color: 'var(--brand-text-dark)' }}>
                {stage.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: '0 0 12px' }}>
                <strong>Who it is for:</strong> {stage.whoItIsFor}
              </p>
              <div
                style={{
                  background: 'var(--brand-primary-pale)',
                  border: '1px solid var(--brand-primary)',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  margin: '0 0 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: 1.5,
                  color: 'var(--brand-text-dark)',
                }}
              >
                <strong style={{ textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '10px' }}>
                  AAFCO Statement (representative)
                </strong>
                <br />
                {stage.aafcoStatement}
              </div>
              <strong style={{ fontSize: '13px', color: 'var(--brand-text-dark)' }}>Nutrient highlights</strong>
              <ul style={{ margin: '6px 0 14px 18px', fontSize: '13px', color: 'var(--brand-text-mid)' }}>
                {stage.nutrientHighlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <strong style={{ fontSize: '13px', color: 'var(--brand-text-dark)' }}>Formulation notes</strong>
              <p style={{ margin: '6px 0 14px', fontSize: '13px', color: 'var(--brand-text-mid)' }}>{stage.formulationNotes}</p>
              <strong style={{ fontSize: '13px', color: 'var(--brand-text-dark)' }}>Watch-outs</strong>
              <p style={{ margin: '6px 0 8px', fontSize: '13px', color: 'var(--brand-text-mid)' }}>{stage.watchOuts}</p>
              <div style={{ fontSize: '11px', color: 'var(--brand-text-light)', fontWeight: 600, marginTop: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Brand examples for this stage — coming soon
              </div>
            </article>
          ))}
        </div>

        <h2>How to Match a Life Stage to a Brand</h2>
        <p>
          The catalog approach is the same regardless of life stage: read the AAFCO statement on
          the bag (Step 1 — what life stage is this formula substantiated for?), read the
          guaranteed analysis (Step 2 — does it match the nutrient highlights for that life
          stage?), and cross-reference the brand’s scored profile on PetFood.com (Step 3 — has the
          rubric been applied to this brand yet?). When the per-brand scored profiles for each
          life stage land in this catalog, they will be linked from the corresponding card above.
          For now, the editorial sister site is the place to look for specific brand evaluations —
          for example, the{' '}
          <a href="https://petfood.com/brands/orijen-vs-acana-comparison" target="_blank" rel="noopener">
            Orijen vs Acana comparison
          </a>{' '}
          works through life-stage substantiation for two premium grain-free brands.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official
            Publication</em>. Sections: Dog Food Nutrient Profiles (Growth-and-Reproduction;
            Adult Maintenance), Cat Food Nutrient Profiles (Growth-and-Reproduction; Adult
            Maintenance), and pet food labeling regulations including the nutritional adequacy
            statement and the large-breed-growth qualifier.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee.{' '}
            <em>Global Nutrition Guidelines</em> and <em>Selecting a Pet Food Manufacturer</em>.
            The clinical-evaluation framework around life-stage feeding choices and the questions
            an owner is entitled to ask a manufacturer.
          </li>
          <li>
            National Research Council. <em>Nutrient Requirements of Dogs and Cats</em> (NRC, 2006).
            The underlying nutritional science volume that AAFCO life-stage profiles draw on.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine.{' '}
            <em>Veterinary Therapeutic Diets</em> regulatory framework — the basis on which
            therapeutic “senior” renal, hepatic, and similar diets are categorized separately
            from retail life-stage formulas.
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
