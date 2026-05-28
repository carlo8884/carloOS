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

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food Brands — Independent Comparison Index',
  description:
    'Catalog of major commercial pet food brands sold in the US — corporate parent, manufacturing country, scoring status. Companion catalog to PetFood.com.',
  path: '/brands',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food Brands — Independent Comparison Index',
  description:
    'A working index of every commercial dog and cat food brand sold in the United States, mapped to corporate parent and manufacturing country. The catalog is the spine; per-brand scored profiles are published as the PetFood.com editorial team reaches each one.',
  url: 'https://petfoods.com/brands',
  imageUrl: '',
  authorName: 'PetFoods.com Catalog',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

// ─── Brand catalog ──────────────────────────────────────────────────────────
// One row per brand we plan to score. Where a comparison page already exists
// on PetFood.com (the editorial sister site), it is linked. Otherwise the
// brand page is a placeholder; the entry exists so this index reflects the
// real catalog scope.

interface BrandEntry {
  name: string
  slug: string
  parent: string
  manufacturing: string
  // Editorial cross-link on PetFood.com (sister site), if one exists. The
  // catalog reference page on PetFoods.com lives at `/brands/{slug}` for all
  // entries — that is the primary destination of the card click.
  editorialCrossLink?: string
}

// One row per brand. All 35 catalog reference pages are live; entries with
// an editorialCrossLink also carry an outbound link to the PetFood.com
// editorial comparison page.
const BRANDS: BrandEntry[] = BRAND_DATA.map((b) => ({
  name: b.name,
  slug: b.slug,
  parent: b.parentCompany,
  manufacturing: b.manufacturingCountries.join(' / '),
  editorialCrossLink: b.editorialCrossLink,
}))

// Sort alphabetically — index reads like a reference table, not a ranking.
const SORTED = [...BRANDS].sort((a, b) => a.name.localeCompare(b.name))

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why does this index list brands you have not scored yet?',
    answer:
      'The index is the catalog spine. Listing the brand publicly — with parent company and manufacturing country — is the first deliverable. The scored profile is the second. We publish the index first so the scope is honest: this is the universe we intend to cover, and a missing entry is a gap we will fill, not a brand we are hiding.',
    answerText:
      'The index is the catalog spine. Listing the brand publicly is the first deliverable; the scored profile is the second. Publishing the index first keeps the scope of coverage honest.',
  },
  {
    question: 'What is the difference between the catalog reference page and a scored profile?',
    answer:
      'Each brand card here links to a catalog reference page on PetFoods.com — corporate ownership, manufacturing footprint, AAFCO posture, recall pointer, distribution channels, and an explicit list of fields we could not verify. A scored profile is a separate artifact published on the PetFood.com editorial sister site that runs the v1.0 rubric (AAFCO completeness, ingredient sourcing transparency, recall history, manufacturing standards, feeding-outcome literature). Where a scored profile exists on PetFood.com, the catalog reference page cross-links to it.',
    answerText:
      'The catalog reference page is a structured per-brand record on PetFoods.com. The scored profile is a separate rubric-driven artifact on the PetFood.com editorial sister site; catalog pages cross-link to it where one exists.',
  },
  {
    question: 'Why list the corporate parent so prominently?',
    answer:
      'Pet food brand ownership is highly consolidated. Mars Petcare, Nestlé Purina, Colgate-Palmolive, and General Mills own most of the brands an average shopper sees on a shelf. Knowing the parent matters for recall analysis (manufacturing footprint is often shared across siblings), for sourcing transparency, and for understanding why a “boutique” brand sometimes shares a plant with a mass-market one.',
    answerText:
      'Pet food brand ownership is highly consolidated. Knowing the parent matters for recall analysis, sourcing transparency, and understanding shared manufacturing footprints across brand siblings.',
  },
  {
    question: 'How is this site different from PetFood.com?',
    answer:
      'PetFood.com (singular) is the editorial sister site — it publishes scored brand comparisons, ingredient explainers, and the methodology that governs everything here. PetFoods.com (plural) is the catalog: per-brand, per-ingredient, per-life-stage, per-recall pages. The catalog feeds search demand; the editorial site holds the rubric. They share standards and cite each other.',
    answerText:
      'PetFood.com publishes the editorial scoring and comparison pages. PetFoods.com hosts the catalog of per-brand, per-ingredient, per-life-stage, and per-recall reference pages. Same standards, different surfaces.',
  },
  {
    question: 'Do any brands pay for inclusion?',
    answer:
      'No. The catalog is built from public retail availability, FDA CVM filings, and AAFCO state-registration records. No brand has paid, sponsored, or otherwise compensated for inclusion or ordering on this index — and per the PetFood.com brand standards, no brand ever will. Affiliate links to retailers may appear on individual brand pages, separately disclosed; affiliate revenue does not influence scoring.',
    answerText:
      'No. No brand has paid or sponsored for inclusion or ordering. Affiliate revenue, where it exists, is separately disclosed and does not influence scoring.',
  },
  {
    question: 'A brand I feed is not in this index. How do I get it added?',
    answer:
      'The current index covers approximately the top 35 by US shelf presence and search demand. Smaller regional brands, single-channel direct-to-consumer brands, and store-private-label SKUs are queued for a later expansion pass. If a brand is missing, it will be added before we score it; missing now is not a quality signal in either direction.',
    answerText:
      'The index covers the top brands by shelf presence and search demand; smaller regional and DTC brands are queued for a later expansion. Missing is not a quality signal in either direction.',
  },
]

export default function BrandsHubPage() {
  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food Brands — Independent Comparison',
        subtitle:
          'A working alphabetical index of major commercial pet food brands sold in the United States, each mapped to its corporate parent and manufacturing footprint. The scored profile for each brand applies the same five-dimension rubric published on PetFood.com — the editorial sister site — and is added here as it is completed.',
        category: 'Brand Catalog Index',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'How to Read This Index', href: '#how-to-read' },
              { label: 'Brand Index (A–Z)', href: '#index' },
              { label: 'How We Score Brands', href: '#scoring' },
              { label: 'Corporate Consolidation Notes', href: '#consolidation' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="On the Sister Site"
            links={[
              { label: 'PetFood.com — Scoring Methodology v1.0', href: 'https://petfood.com/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: 'https://petfood.com/guides/aafco-completeness-explained' },
              { label: 'Orijen vs Acana — Brand Comparison', href: 'https://petfood.com/brands/orijen-vs-acana-comparison' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p id="tldr">
          <strong>TL;DR.</strong> This is the brand catalog for PetFoods.com. It lists the major
          commercial pet food brands sold in the United States, each annotated with corporate parent
          and primary manufacturing country. When the sister editorial site, PetFood.com, has
          already published a scored profile or brand-vs-brand comparison, the entry surfaces that
          editorial link in addition to the catalog reference. Every brand card resolves to a
          per-brand catalog reference page on PetFoods.com with corporate ownership, manufacturing
          footprint, AAFCO posture, and an explicit list of fields we could not verify.
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
          The catalog does not rank. Alphabetical only. Ranked positions appear only on per-brand
          scored profiles, where the score is tied to a specific formula and a specific date and is
          re-runnable from the published methodology.
        </p>

        <h2 id="index">Brand Index (A–Z)</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '14px',
            margin: '24px 0 32px',
          }}
        >
          {SORTED.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              style={{
                display: 'block',
                padding: '16px 18px',
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
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '6px',
                }}
              >
                {brand.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '4px' }}>
                Parent: {brand.parent}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '8px' }}>
                Manufactured: {brand.manufacturing}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: brand.editorialCrossLink
                    ? 'var(--brand-success)'
                    : 'var(--brand-text-mid)',
                  fontWeight: 600,
                }}
              >
                {brand.editorialCrossLink
                  ? 'Catalog reference · Editorial comparison on PetFood.com'
                  : 'View catalog reference →'}
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
            Every per-brand scored profile runs through the published PetFood.com rubric, v1.0.
          </p>
          <ol style={{ margin: '10px 0 0 18px' }}>
            <li><strong>AAFCO completeness</strong> — nutritional adequacy statement and whether it was earned by feeding trial or by formulation only.</li>
            <li><strong>Ingredient sourcing transparency</strong> — disclosure of protein source, country of origin, and supplier audit posture.</li>
            <li><strong>Recall history</strong> — FDA CVM Recalls &amp; Withdrawals database record for the brand and its manufacturer, weighted by severity.</li>
            <li><strong>Manufacturing standards</strong> — Global Food Safety Initiative–benchmarked certification status and audit transparency.</li>
            <li><strong>Feeding-outcome literature</strong> — peer-reviewed evidence, where it exists, for the formula or product family.</li>
          </ol>
          <p style={{ margin: '12px 0 0', fontSize: '14px' }}>
            The rubric, including the explicit anti-criteria (what we do <em>not</em> score on —
            packaging quality, brand age, marketing tone), is published in full at{' '}
            <a href="https://petfood.com/guides/methodology" target="_blank" rel="noopener">
              petfood.com/guides/methodology
            </a>
            . When the rubric version changes, prior scores are re-run.
          </p>
        </div>
        <p>
          The catalog is structurally independent from the methodology. The catalog says “this
          brand exists, here is who owns it, here is where it is made.” The methodology says
          “here is the rubric that will be applied.” The per-brand scored profile is the
          intersection: the rubric applied to a brand on a dated, citable record.
        </p>

        <h2 id="consolidation">Corporate Consolidation Notes</h2>
        <p>
          The US pet food market is dominated by a small number of multinational owners. As an
          orientation:
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
            (Science Diet and Prescription Diet). The only top-three pet food owner whose primary
            business is consumer health rather than confectionery or food conglomerate.
          </li>
          <li>
            <strong>General Mills</strong> — owns Blue Buffalo since 2018.
          </li>
          <li>
            <strong>Independent / family-owned</strong> — Fromm, Wysong, Stella &amp; Chewy’s,
            The Honest Kitchen, Open Farm, Diamond Pet Foods (also contract-manufactures for other
            brands), and others. Independent ownership is not, on its own, a quality signal; it is
            a procurement-and-recall posture worth knowing.
          </li>
        </ul>
        <p>
          Consolidation matters operationally. When a contract manufacturer issues a recall, every
          brand on that production line is affected — which is why the recall section on each
          per-brand page is tied to the manufacturer, not only the brand name on the bag. The
          consolidation map above is the reference for those cross-brand implications.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official Publication</em>,
            sections on pet food labeling, AAFCO nutrient profiles for dogs and cats, and feed
            ingredient definitions. Corporate parent and product-name claims are validated against
            this volume.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Recalls &amp;
            Withdrawals — Animal &amp; Veterinary</em>. Used to associate each brand with its
            manufacturing parent for recall-history analysis.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee. <em>WSAVA
            Selecting a Pet Food Manufacturer</em> guidance. The audit posture questions on the
            five-dimension rubric are derived from this document.
          </li>
          <li>
            Corporate disclosures (10-K, investor decks, brand-acquisition press releases) from
            Mars, Nestlé, General Mills, Colgate-Palmolive, Post Holdings, Better Choice Company,
            and other parents. Used to confirm parent ownership and acquisition dates.
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
