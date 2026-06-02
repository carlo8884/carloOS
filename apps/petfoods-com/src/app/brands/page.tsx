import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { Brands as BRAND_DATA } from '../../data/brands'
import { BrandReviews, getBrandReviewBySlug } from '../../data/brand-reviews'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food Brands — Independent Reviews & WSAVA Scorecards',
  description:
    'Independent reviews of major pet food brands: WSAVA Global Nutrition Committee scorecards, FDA recall history, and corporate-parent context.',
  path: '/brands',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food Brands — Independent Reviews & WSAVA Scorecards',
  description:
    'A working index of every commercial dog and cat food brand sold in the United States, mapped to corporate parent and manufacturing country, with long-form WSAVA-scored reviews for the highest-search-volume brands.',
  url: 'https://petfoods.com/brands',
  imageUrl: '',
  authorName: 'PetFoods.com Editorial — independent ingredient & brand reference',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

// ─── Reviewed brand grid (10 long-form reviews) ─────────────────────────────

interface ReviewedBrandRow {
  slug: string
  name: string
  parent: string
  wsava: number
  recalls: number
  hasBoardCertNutritionists: boolean
  manufacturing: string
}

const REVIEWED_ROWS: ReviewedBrandRow[] = BrandReviews.map((r) => ({
  slug: r.slug,
  name: r.brandName,
  parent: r.parentCompany,
  wsava: r.wsavaComplianceScore,
  recalls: r.recallHistory.length,
  hasBoardCertNutritionists: r.hasBoardCertifiedNutritionists,
  manufacturing: r.manufacturingLocations.join(' / '),
})).sort((a, b) => {
  // Sort by WSAVA score descending, then alphabetical.
  if (b.wsava !== a.wsava) return b.wsava - a.wsava
  return a.name.localeCompare(b.name)
})

// ─── Full catalog (unchanged) ───────────────────────────────────────────────

interface BrandEntry {
  name: string
  slug: string
  parent: string
  manufacturing: string
  editorialCrossLink?: string
  hasReview: boolean
}

const BRANDS: BrandEntry[] = BRAND_DATA.map((b) => ({
  name: b.name,
  slug: b.slug,
  parent: b.parentCompany,
  manufacturing: b.manufacturingCountries.join(' / '),
  editorialCrossLink: b.editorialCrossLink,
  hasReview: !!getBrandReviewBySlug(b.slug),
}))

const SORTED = [...BRANDS].sort((a, b) => a.name.localeCompare(b.name))

const itemListSchema = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  name: 'Pet Food Brand Index (A-Z)',
  numberOfItems: SORTED.length,
  itemListElement: SORTED.map((brand, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: brand.name,
    url: `https://petfoods.com/brands/${brand.slug}`,
  })),
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How is the WSAVA scorecard calculated?',
    answer:
      'WSAVA itself does not publish brand-level scores. The score on each brand card here is PetFoods.com’s editorial count of how many of the WSAVA Global Nutrition Committee’s six "Selecting a Pet Food Manufacturer" questions the brand answers publicly on its corporate site or science pages. The six questions cover qualified nutritionist on staff, formulation responsibility, AAFCO feeding-trial vs. formulation-only substantiation, manufacturing location and visitability, quality-control measures, and whether the brand publishes a complete typical nutrient analysis. Each per-brand review page shows which questions were answered and which were not, with the brand’s public answer cited, so the score is auditable.',
    answerText:
      'PetFoods.com counts how many of the WSAVA Global Nutrition Committee’s six "Selecting a Pet Food Manufacturer" questions the brand answers publicly. Per-brand pages cite the answer for each question.',
  },
  {
    question: 'Why does this index list brands you have not reviewed yet?',
    answer:
      'The index is the catalog spine. Listing the brand publicly — with parent company and manufacturing country — is the first deliverable. The long-form review is the second. Ten brands have a full WSAVA-scored review at launch; the remaining catalog entries link to the structured reference page and are queued for review.',
    answerText:
      'The catalog is the spine; the long-form reviews come next. Ten brands have full reviews at launch; the rest are queued.',
  },
  {
    question: 'Do any brands pay for inclusion or for assessment language?',
    answer:
      'No. The catalog is built from public retail availability, FDA CVM filings, and AAFCO state-registration records. The reviews are written from public corporate disclosures, the WSAVA Global Nutrition Committee guidance, the AAFCO Official Publication, FDA CVM recall records, and the Tufts Cummings Vet School Petfoodology blog. No brand has paid, sponsored, or otherwise compensated PetFoods.com for inclusion, ordering, or assessment language. Affiliate links to retailers may appear on individual brand pages, separately disclosed; affiliate revenue does not influence the WSAVA scoring or the editorial assessment.',
    answerText:
      'No brand has paid for inclusion or for assessment language. Affiliate revenue, where it exists, does not influence the WSAVA scoring or editorial.',
  },
  {
    question: 'Why list the corporate parent so prominently?',
    answer:
      'Pet food brand ownership is highly consolidated. Mars Petcare, Nestlé Purina, Colgate-Palmolive, and General Mills own most of the brands an average shopper sees on a shelf. Knowing the parent matters for recall analysis (manufacturing footprint is often shared across siblings), for sourcing transparency, and for understanding why a "boutique" brand sometimes shares a plant with a mass-market one.',
    answerText:
      'Pet food brand ownership is highly consolidated. Knowing the parent matters for recall analysis, sourcing transparency, and shared manufacturing across brand siblings.',
  },
  {
    question: 'How is this site different from PetFood.com?',
    answer:
      'PetFood.com (singular) is the editorial sister site — scored brand comparisons, ingredient explainers, and the methodology that governs everything here. PetFoods.com (plural) is the catalog: per-brand, per-ingredient, per-life-stage, per-recall pages, plus the WSAVA-scored long-form reviews. The two sites share standards and cite each other.',
    answerText:
      'PetFood.com publishes scored comparisons and methodology. PetFoods.com hosts the catalog of per-brand, per-ingredient, per-life-stage, per-recall reference pages and the WSAVA-scored long-form reviews.',
  },
]

export default function BrandsHubPage() {
  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food Brands — Independent Reviews & WSAVA Scorecards',
        subtitle:
          'A working index of major commercial pet food brands sold in the United States, each mapped to its corporate parent, manufacturing footprint, and (for the ten brands with the highest search volume) a long-form WSAVA-scored independent review.',
        category: 'Brand Catalog & Reviews',
        publishedAt: 'May 2026',
        readTime: '10 min',
        authorName: 'PetFoods.com Editorial',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
      ]}
      schema={[schema, itemListSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'How to Read This Index', href: '#how-to-read' },
              { label: 'In-Depth Reviews (WSAVA-Scored)', href: '#reviews' },
              { label: 'Full Brand Index (A–Z)', href: '#index' },
              { label: 'How We Score Brands', href: '#scoring' },
              { label: 'Corporate Consolidation Notes', href: '#consolidation' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Reference Hubs"
            links={[
              { label: 'Ingredient Glossary', href: '/ingredients' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              { label: 'Life-Stage Catalog', href: '/life-stage' },
              { label: 'PetFood.com — Scoring Methodology v1.0', href: 'https://petfood.com/guides/methodology' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <div
          style={{
            background: 'var(--brand-surface)',
            border: '1px solid var(--brand-border)',
            borderLeft: '4px solid var(--brand-primary)',
            borderRadius: '6px',
            padding: '12px 16px',
            margin: '0 0 24px',
            fontSize: '13.5px',
            lineHeight: 1.55,
            color: 'var(--brand-text-mid)',
          }}
        >
          <strong style={{ color: 'var(--brand-text-dark)' }}>Independent editorial.</strong>{' '}
          PetFoods.com is reader-supported via affiliate links to retailers. No brand has paid for
          inclusion or for any assessment language. WSAVA scoring and recall coverage are not for
          sale.
        </div>

        <p id="tldr">
          <strong>TL;DR.</strong> This page indexes the major commercial pet-food brands sold in the
          United States, each annotated with corporate parent and primary manufacturing country.
          {' '}<strong>Ten brands</strong> carry a full long-form independent review, with a WSAVA
          Global Nutrition Committee 6-question scorecard, FDA CVM recall history, product-line
          breakdown, strengths and weaknesses, and an editorial assessment paragraph. The remainder
          of the catalog links to a structured reference page and is queued for the next review pass.
        </p>

        <h2 id="how-to-read">How to Read This Index</h2>
        <p>
          Each row is one brand. The corporate parent and manufacturing country are the two pieces
          of context that change how an ingredient panel or a recall record should be interpreted.
          A brand owned by Mars Petcare, Nestlé Purina, Colgate-Palmolive, or General Mills is part
          of a multi-billion-dollar portfolio with shared procurement, shared plants, and
          cross-brand recall implications. An independent or family-owned brand is a different
          regulatory and supply-chain surface and is read differently for that reason.
        </p>
        <p>
          The index does not rank. The reviewed-brand grid below is sorted by WSAVA-questions-
          answered (descending), then alphabetical — the WSAVA count is a transparency indicator,
          not a ranking of food quality. The full alphabetical index follows the reviewed grid.
        </p>

        <h2 id="reviews">In-Depth Reviews (WSAVA-Scored)</h2>
        <p>
          Ten brands have a long-form independent review at launch — selected by US shelf presence
          and search volume. Each card below shows the WSAVA Global Nutrition Committee 6-question
          score (0-6), the FDA CVM recall count in our review window, and whether the brand
          publicly identifies a board-certified veterinary nutritionist (ACVN/ECVCN) on its
          formulation team. Click through to the per-brand page for the full scorecard and
          assessment.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
            margin: '24px 0 32px',
          }}
        >
          {REVIEWED_ROWS.map((row) => (
            <Link
              key={row.slug}
              href={`/brands/${row.slug}`}
              style={{
                display: 'block',
                padding: '18px 20px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                textDecoration: 'none',
                lineHeight: 1.45,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '10px',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  {row.name}
                </div>
                <WsavaBadge score={row.wsava} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '4px' }}>
                Parent: {row.parent}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '10px' }}>
                Manufactured: {row.manufacturing}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  margin: '0 0 8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                }}
              >
                <Chip
                  label={row.hasBoardCertNutritionists ? 'Board-cert nutritionist' : 'No public nutritionist'}
                  good={row.hasBoardCertNutritionists}
                />
                <Chip
                  label={row.recalls === 0 ? 'No recalls (review window)' : `${row.recalls} FDA recall${row.recalls === 1 ? '' : 's'}`}
                  good={row.recalls === 0}
                />
              </div>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-primary)',
                  fontWeight: 600,
                  marginTop: '6px',
                }}
              >
                Read full review →
              </div>
            </Link>
          ))}
        </div>

        <h2 id="index">Full Brand Index (A–Z)</h2>
        <p>
          The complete catalog — every brand we cover, in alphabetical order. Cards marked
          “Reviewed” carry the full long-form WSAVA-scored review above; the others link to the
          structured catalog reference page.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '12px',
            margin: '18px 0 28px',
          }}
        >
          {SORTED.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              style={{
                display: 'block',
                padding: '14px 16px',
                border: '1px solid var(--brand-border)',
                borderRadius: '6px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                textDecoration: 'none',
                lineHeight: 1.45,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '4px',
                }}
              >
                {brand.name}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--brand-text-mid)', marginBottom: '4px' }}>
                Parent: {brand.parent}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--brand-text-mid)', marginBottom: '6px' }}>
                Manufactured: {brand.manufacturing}
              </div>
              <div
                style={{
                  fontSize: '10.5px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: brand.hasReview ? 'var(--brand-success)' : 'var(--brand-text-mid)',
                  fontWeight: 700,
                }}
              >
                {brand.hasReview ? 'Full WSAVA review →' : 'Catalog reference →'}
              </div>
            </Link>
          ))}
        </div>

        <h2 id="scoring">How We Score Brands</h2>
        <div
          style={{
            background: 'var(--brand-primary-pale)',
            border: '1px solid var(--brand-primary)',
            borderRadius: '8px',
            padding: '20px 22px',
            margin: '20px 0 28px',
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--brand-text-dark)' }}>
            Each long-form review counts how many of the WSAVA Global Nutrition Committee’s six
            “Selecting a Pet Food Manufacturer” questions the brand answers publicly.
          </p>
          <ol style={{ margin: '10px 0 0 18px' }}>
            <li><strong>Q1.</strong> Does the company employ a full-time qualified nutritionist (PhD in animal nutrition or board-certified veterinary nutritionist — ACVN or ECVCN)?</li>
            <li><strong>Q2.</strong> Who formulates the diets and what are their credentials?</li>
            <li><strong>Q3.</strong> Are the diets tested using AAFCO feeding trials, or formulated to meet AAFCO nutrient profiles only?</li>
            <li><strong>Q4.</strong> Where are the foods produced and manufactured? Can the facility be visited?</li>
            <li><strong>Q5.</strong> What specific quality-control measures are used to assure the consistency and quality of ingredients and the end product?</li>
            <li><strong>Q6.</strong> Will the company provide a complete product nutrient analysis (beyond the guaranteed analysis on the bag)?</li>
          </ol>
          <p style={{ margin: '12px 0 0', fontSize: '14px' }}>
            WSAVA does not itself publish brand-level scores. The 0-6 number is PetFoods.com’s
            editorial reading of which questions the brand answers publicly. Each per-brand review
            shows the brand’s public answer for each answered question and explicitly notes the
            questions that were not answered, so the score is auditable. The WSAVA scoring is a
            transparency indicator only — not a ranking of food quality and not a substitute for
            veterinary advice for an individual pet.
          </p>
        </div>

        <h2 id="consolidation">Corporate Consolidation Notes</h2>
        <p>
          The US pet food market is dominated by a small number of multinational owners:
        </p>
        <ul>
          <li>
            <strong>Mars Petcare</strong> — the largest single pet food owner globally. Brands
            include Royal Canin, Iams, Eukanuba, Pedigree, Cesar, Nutro, Greenies, and (since 2022)
            Champion Petfoods (Orijen, Acana). Shared manufacturing footprint across multiple
            brand siblings.
          </li>
          <li>
            <strong>Nestlé Purina PetCare</strong> — Purina Pro Plan, Purina ONE, Beneful, Fancy
            Feast, Friskies, Merrick (acquired 2015), Whole Earth Farms.
          </li>
          <li>
            <strong>Colgate-Palmolive</strong> — sole owner of Hill’s Pet Nutrition
            (Science Diet and Prescription Diet).
          </li>
          <li>
            <strong>General Mills</strong> — owns Blue Buffalo since 2018.
          </li>
          <li>
            <strong>Independent / family-owned</strong> — Fromm, Wysong, Stella &amp; Chewy’s,
            The Honest Kitchen, Open Farm, Diamond Pet Foods (also contract-manufactures for other
            brands). Independent ownership is not, on its own, a quality signal; it is a
            procurement-and-recall posture worth knowing.
          </li>
        </ul>
        <p>
          Consolidation matters operationally. When a contract manufacturer issues a recall, every
          brand on that production line is affected — which is why the recall section on each
          per-brand page is tied to the manufacturer, not only the brand name on the bag.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee.{' '}
            <em>Selecting a Pet Food Manufacturer</em>.{' '}
            <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener">
              wsava.org/global-guidelines/global-nutrition-guidelines/
            </a>{' '}
            — primary source for the 6-question scorecard rubric.
          </li>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official Publication</em>,
            sections on pet food labeling, nutrient profiles for dogs and cats, and feeding-trial
            substantiation requirements.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Recalls &amp;
            Withdrawals — Animal &amp; Veterinary</em>.{' '}
            <a href="https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals" target="_blank" rel="noopener">
              fda.gov/animal-veterinary/safety-health/recalls-withdrawals
            </a>{' '}
            — primary source for recall history on every reviewed brand.
          </li>
          <li>
            U.S. FDA CVM. <em>Investigation into Potential Link between Certain Diets and Canine
            Dilated Cardiomyopathy</em>.{' '}
            <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy" target="_blank" rel="noopener">
              fda.gov — DCM investigation
            </a>{' '}
            — cited on the Blue Buffalo, Wellness, Orijen, and Acana reviews.
          </li>
          <li>
            Tufts University Cummings School of Veterinary Medicine. <em>Petfoodology blog</em>.{' '}
            <a href="https://vetnutrition.tufts.edu/petfoodology" target="_blank" rel="noopener">
              vetnutrition.tufts.edu/petfoodology
            </a>{' '}
            — clinical-nutrition perspective referenced across the WSAVA-tier reviews.
          </li>
          <li>
            Corporate disclosures (10-K filings, investor decks, brand “About” / “Science” pages,
            acquisition press releases) from the parent companies named above.
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function WsavaBadge({ score }: { score: number }) {
  const bg =
    score >= 5
      ? 'var(--brand-primary)'
      : score >= 3
        ? 'var(--brand-primary-light)'
        : 'var(--brand-text-light)'
  return (
    <span
      style={{
        display: 'inline-block',
        background: bg,
        color: '#fff',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '0.02em',
        padding: '4px 10px',
        borderRadius: '999px',
        whiteSpace: 'nowrap',
      }}
      title="Count of WSAVA Global Nutrition Committee 6-question rubric items answered publicly."
    >
      WSAVA {score}/6
    </span>
  )
}

function Chip({ label, good }: { label: string; good: boolean }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 8px',
        borderRadius: '999px',
        background: good ? 'var(--brand-primary-pale)' : 'var(--brand-surface)',
        color: good ? 'var(--brand-primary-dark)' : 'var(--brand-text-mid)',
        border: '1px solid var(--brand-border)',
      }}
    >
      {label}
    </span>
  )
}
