import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

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
  parent: string
  manufacturing: string
  // Editorial cross-link on PetFood.com if one already exists; otherwise the
  // placeholder local href the future per-brand catalog page will live at.
  href: string
  external?: boolean
  status: 'editorial-linked' | 'catalog-placeholder'
}

const BRANDS: BrandEntry[] = [
  { name: 'Acana', parent: 'Champion Petfoods (Mars Petcare)', manufacturing: 'Canada / USA (Kentucky)', href: 'https://petfood.com/brands/orijen-vs-acana-comparison', external: true, status: 'editorial-linked' },
  { name: 'Beneful', parent: 'Nestlé Purina PetCare', manufacturing: 'USA', href: '/brands/beneful', status: 'catalog-placeholder' },
  { name: 'Blue Buffalo', parent: 'General Mills', manufacturing: 'USA', href: '/brands/blue-buffalo', status: 'catalog-placeholder' },
  { name: 'Cesar', parent: 'Mars Petcare', manufacturing: 'USA / Austria', href: '/brands/cesar', status: 'catalog-placeholder' },
  { name: 'Diamond Pet Foods', parent: 'Schell & Kampeter (independent)', manufacturing: 'USA (multiple)', href: '/brands/diamond-pet-foods', status: 'catalog-placeholder' },
  { name: 'Eukanuba', parent: 'Mars Petcare', manufacturing: 'USA / Netherlands', href: '/brands/eukanuba', status: 'catalog-placeholder' },
  { name: 'Fancy Feast', parent: 'Nestlé Purina PetCare', manufacturing: 'USA / Thailand', href: '/brands/fancy-feast', status: 'catalog-placeholder' },
  { name: 'Friskies', parent: 'Nestlé Purina PetCare', manufacturing: 'USA', href: '/brands/friskies', status: 'catalog-placeholder' },
  { name: 'Fromm Family Foods', parent: 'Fromm (independent, family-owned)', manufacturing: 'USA (Wisconsin)', href: '/brands/fromm', status: 'catalog-placeholder' },
  { name: 'Greenies', parent: 'Mars Petcare', manufacturing: 'USA', href: '/brands/greenies', status: 'catalog-placeholder' },
  { name: 'Halo', parent: 'Better Choice Company', manufacturing: 'USA', href: '/brands/halo', status: 'catalog-placeholder' },
  { name: 'Hill’s Science Diet', parent: 'Colgate-Palmolive', manufacturing: 'USA (multiple)', href: '/brands/hills-science-diet', status: 'catalog-placeholder' },
  { name: 'Iams', parent: 'Mars Petcare', manufacturing: 'USA / Netherlands', href: '/brands/iams', status: 'catalog-placeholder' },
  { name: 'Instinct', parent: 'Nature’s Variety (Agrolimen)', manufacturing: 'USA / Canada', href: '/brands/instinct', status: 'catalog-placeholder' },
  { name: 'Merrick', parent: 'Nestlé Purina PetCare', manufacturing: 'USA (Texas / Missouri)', href: '/brands/merrick', status: 'catalog-placeholder' },
  { name: 'Natural Balance', parent: 'Nexus Capital Management', manufacturing: 'USA', href: '/brands/natural-balance', status: 'catalog-placeholder' },
  { name: 'Nulo', parent: 'Nulo Pet Food (independent)', manufacturing: 'USA', href: '/brands/nulo', status: 'catalog-placeholder' },
  { name: 'Nutro', parent: 'Mars Petcare', manufacturing: 'USA', href: '/brands/nutro', status: 'catalog-placeholder' },
  { name: 'Open Farm', parent: 'Open Farm Inc. (independent)', manufacturing: 'Canada / USA', href: '/brands/open-farm', status: 'catalog-placeholder' },
  { name: 'Orijen', parent: 'Champion Petfoods (Mars Petcare)', manufacturing: 'Canada / USA (Kentucky)', href: 'https://petfood.com/brands/orijen-vs-acana-comparison', external: true, status: 'editorial-linked' },
  { name: 'Pedigree', parent: 'Mars Petcare', manufacturing: 'USA / multiple', href: '/brands/pedigree', status: 'catalog-placeholder' },
  { name: 'Primal Pet Foods', parent: 'Primal (independent)', manufacturing: 'USA (California)', href: '/brands/primal', status: 'catalog-placeholder' },
  { name: 'Purina ONE', parent: 'Nestlé Purina PetCare', manufacturing: 'USA', href: '/brands/purina-one', status: 'catalog-placeholder' },
  { name: 'Purina Pro Plan', parent: 'Nestlé Purina PetCare', manufacturing: 'USA', href: '/brands/purina-pro-plan', status: 'catalog-placeholder' },
  { name: 'Royal Canin', parent: 'Mars Petcare', manufacturing: 'USA / France / multiple', href: '/brands/royal-canin', status: 'catalog-placeholder' },
  { name: 'Solid Gold', parent: 'H.H. Gregg / NXMH', manufacturing: 'USA', href: '/brands/solid-gold', status: 'catalog-placeholder' },
  { name: 'Stella & Chewy’s', parent: 'Stella & Chewy’s (independent)', manufacturing: 'USA (Wisconsin)', href: '/brands/stella-and-chewys', status: 'catalog-placeholder' },
  { name: 'Taste of the Wild', parent: 'Schell & Kampeter (Diamond Pet Foods)', manufacturing: 'USA', href: '/brands/taste-of-the-wild', status: 'catalog-placeholder' },
  { name: 'The Honest Kitchen', parent: 'The Honest Kitchen (independent)', manufacturing: 'USA', href: '/brands/the-honest-kitchen', status: 'catalog-placeholder' },
  { name: 'Tiki Pets (Tiki Dog / Tiki Cat)', parent: 'Whitebridge Pet Brands', manufacturing: 'Thailand / USA', href: '/brands/tiki-pets', status: 'catalog-placeholder' },
  { name: 'Victor Pet Food', parent: 'Mid America Pet Food (Post Holdings)', manufacturing: 'USA (Texas)', href: '/brands/victor', status: 'catalog-placeholder' },
  { name: 'Wellness (WellPet)', parent: 'Clearlake Capital', manufacturing: 'USA', href: '/brands/wellness', status: 'catalog-placeholder' },
  { name: 'Whole Earth Farms', parent: 'Nestlé Purina PetCare (Merrick)', manufacturing: 'USA', href: '/brands/whole-earth-farms', status: 'catalog-placeholder' },
  { name: 'Wysong', parent: 'Wysong Corporation (independent)', manufacturing: 'USA (Michigan)', href: '/brands/wysong', status: 'catalog-placeholder' },
  { name: 'ZiwiPeak', parent: 'Ziwi Limited (FountainVest)', manufacturing: 'New Zealand', href: '/brands/ziwipeak', status: 'catalog-placeholder' },
]

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
    question: 'What does “scored profile coming soon” actually mean?',
    answer:
      'It means a per-brand reference page applying the published PetFood.com scoring rubric (AAFCO completeness, ingredient sourcing transparency, recall history, manufacturing standards, feeding-outcome literature) is queued but not yet written. When it lands it will appear at the linked URL. The methodology is fixed in advance; the rubric does not change to suit a brand.',
    answerText:
      'A per-brand reference page applying the published PetFood.com scoring rubric is queued but not yet written. The methodology is fixed in advance and does not change per brand.',
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
          already published a scored profile or brand-vs-brand comparison, the entry cross-links to
          it. Where no scored profile exists yet, the entry is a catalog placeholder — the
          brand is in scope, the scoring rubric is fixed, and the per-brand page is queued.
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
            <a
              key={brand.name}
              href={brand.href}
              {...(brand.external ? { target: '_blank', rel: 'noopener' } : {})}
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
                  color:
                    brand.status === 'editorial-linked'
                      ? 'var(--brand-success)'
                      : 'var(--brand-text-light)',
                  fontWeight: 600,
                }}
              >
                {brand.status === 'editorial-linked'
                  ? 'Editorial comparison → PetFood.com'
                  : 'Scored profile coming soon'}
              </div>
            </a>
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
