import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { Brands, getBrandBySlug, getRelatedBrandsByPriceTier, type Brand } from '../../../data/brands'

// ─── Static generation ──────────────────────────────────────────────────────
// One static page per brand at build time. No runtime fetch, no DB.

export function generateStaticParams() {
  return Brands.map((brand) => ({ slug: brand.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) {
    return buildMetadata({
      siteId: 'petfoods-com',
      title: 'Brand Not Found',
      description: 'The requested brand is not in the PetFoods.com catalog.',
      path: `/brands/${slug}`,
    })
  }

  // Title ≤70 chars. "{Name} — Parent, Manufacturing, AAFCO | PetFoods.com"
  // We construct conservatively and trim.
  const baseTitle = `${brand.name} — Independent Reference | PetFoods.com`
  const title = baseTitle.length <= 70 ? baseTitle : `${brand.name} — Reference | PetFoods.com`

  // Description ≤160 chars
  const mfg = brand.manufacturingCountries.join(' / ')
  const descRaw = `${brand.name} corporate parent ${brand.parentCompany}; manufactured in ${mfg}. Catalog reference with AAFCO, transparency, and recall notes.`
  const description = descRaw.length <= 160 ? descRaw : descRaw.slice(0, 157) + '...'

  return buildMetadata({
    siteId: 'petfoods-com',
    title,
    description,
    path: `/brands/${brand.slug}`,
    type: 'article',
  })
}

// ─── Page content helpers ──────────────────────────────────────────────────

function formatList(items: string[]): string {
  if (items.length === 0) return 'Verify with manufacturer'
  return items.join(', ')
}

function formatRecall(brand: Brand): string {
  if (!brand.recallCount) return 'Verify on FDA CVM Recalls & Withdrawals'
  const parts: string[] = []
  parts.push(`${brand.recallCount.lastFiveYears} in the last 5 years`)
  if (brand.recallCount.lifetime !== undefined) {
    parts.push(`${brand.recallCount.lifetime} lifetime (per FDA CVM)`)
  }
  return parts.join('; ')
}

function gfsiLabel(brand: Brand): string {
  if (brand.gfsiCertified === null) return 'None publicly disclosed'
  if (brand.gfsiCertified === 'Unverified') return 'Verify with manufacturer'
  return brand.gfsiCertified
}

function buildTldr(brand: Brand): string {
  // 60-80 word objective summary, no marketing language.
  const founded = brand.founded ? `founded in ${brand.founded}` : 'founding year not publicly verified'
  const hq = brand.headquartersCountry ? `headquartered in ${brand.headquartersCountry}` : 'headquarters not publicly verified'
  const mfg = formatList(brand.manufacturingCountries)
  const parent = brand.parentCompany
  const acquired = brand.parentAcquiredYear
    ? `, which acquired the brand in ${brand.parentAcquiredYear}`
    : ''
  const cats = brand.categories.join(', ').toLowerCase()
  const channels = brand.distributionChannels.join(' and ').toLowerCase()
  return `${brand.name} is a pet-food brand ${founded}, ${hq}, with manufacturing in ${mfg}. The corporate parent is ${parent}${acquired}. The brand’s product portfolio covers ${cats} formats and is distributed through ${channels}. AAFCO statements, GFSI certification status, and recall history vary across SKUs; the per-product detail must be verified at the source.`
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const related = getRelatedBrandsByPriceTier(brand.slug, 4)

  const schema = buildArticleSchema({
    siteId: 'petfoods-com',
    title: `${brand.name} — Independent Reference`,
    description: `Independent reference page for ${brand.name}: corporate parent (${brand.parentCompany}), manufacturing footprint, AAFCO posture, transparency and recall notes.`,
    url: `https://petfoods.com/brands/${brand.slug}`,
    imageUrl: '',
    authorName: 'PetFoods.com Catalog',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

  // Organization schema for the brand itself (separate from the Article above).
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: brand.sourcesUrl,
    parentOrganization: {
      '@type': 'Organization',
      name: brand.parentCompany,
    },
    ...(brand.founded ? { foundingDate: String(brand.founded) } : {}),
    ...(brand.headquartersCountry
      ? {
          address: {
            '@type': 'PostalAddress',
            addressCountry: brand.headquartersCountry,
          },
        }
      : {}),
  } as Record<string, unknown>

  // Track which fields we don't know, to render the explicit "verify" callout.
  const unknowns: string[] = []
  if (!brand.founded) unknowns.push('Founding year')
  if (!brand.headquartersCountry) unknowns.push('Headquarters country')
  if (!brand.recallCount) unknowns.push('Recall count (verify on FDA CVM)')
  if (brand.gfsiCertified === 'Unverified') unknowns.push('GFSI certification status')
  if (brand.transparencyScore === 'Unverified') unknowns.push('Public transparency posture')
  if (brand.aafcoStatementType === 'Verify per product') {
    unknowns.push('AAFCO statement type (varies across SKUs — verify on each product panel)')
  }

  const faqItems: FAQItem[] = buildBrandFaq(brand)

  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: `${brand.name} — Independent Reference`,
        subtitle: `${brand.parentCompany} ${brand.parentAcquiredYear ? `(acquired the brand in ${brand.parentAcquiredYear})` : ''} · Manufactured in ${formatList(brand.manufacturingCountries)} · Price tier ${brand.priceTier}`,
        category: 'Brand Reference',
        publishedAt: 'May 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: brand.name, href: `/brands/${brand.slug}` },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'Corporate Ownership', href: '#ownership' },
              { label: 'At a Glance', href: '#at-a-glance' },
              { label: 'Transparency Notes', href: '#transparency' },
              { label: 'Recall History', href: '#recalls' },
              { label: 'What We Don’t Know', href: '#unknowns' },
              { label: 'Compare Similar Brands', href: '#compare' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion References"
            links={[
              { label: 'Brand Index (all 35)', href: '/brands' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              { label: 'Life-Stage Catalog', href: '/life-stage' },
              ...(brand.editorialCrossLink
                ? [{ label: `${brand.name} — PetFood.com editorial`, href: brand.editorialCrossLink }]
                : []),
            ]}
          />
        </>
      }
    >
      {/* Inline Organization schema, in addition to the Article schema injected by ArticleLayout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="carloOS-article">
        <p id="tldr">
          <strong>TL;DR.</strong> {buildTldr(brand)}
        </p>

        <h2 id="ownership">Corporate Ownership</h2>
        <div
          style={{
            background: 'var(--brand-surface)',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            padding: '18px 20px',
            margin: '16px 0 24px',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '6px' }}>
            <strong>Parent:</strong> {brand.parentCompany}
          </div>
          {brand.parentAcquiredYear && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '6px' }}>
              <strong>Acquired:</strong> {brand.parentAcquiredYear}
            </div>
          )}
          {brand.parentNotes && (
            <p style={{ fontSize: '14px', margin: '8px 0 0', lineHeight: 1.55 }}>
              {brand.parentNotes}
            </p>
          )}
        </div>
        <p>
          Corporate ownership matters because procurement, plant footprint, and recall liability
          flow through the parent. A brand acquired into a multi-billion-dollar portfolio inherits
          shared suppliers and shared production lines with its siblings; an independently held
          brand operates a smaller and typically more visible supply chain. Neither is, on its own,
          a quality signal — both are context for reading the rest of this page.
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
              <Row label="HQ Country" value={brand.headquartersCountry ?? 'Verify with manufacturer'} />
              <Row label="Manufacturing Countries" value={formatList(brand.manufacturingCountries)} />
              <Row label="Founded" value={brand.founded ? String(brand.founded) : 'Verify with manufacturer'} />
              <Row label="Distribution Channels" value={formatList(brand.distributionChannels)} />
              <Row label="Price Tier" value={brand.priceTier} />
              <Row label="AAFCO statement type" value={brand.aafcoStatementType} />
              <Row label="GFSI certification" value={gfsiLabel(brand)} />
              <Row label="Recall count" value={formatRecall(brand)} />
              <Row label="Categories" value={formatList(brand.categories)} />
              <Row label="Transparency posture" value={brand.transparencyScore} />
            </tbody>
          </table>
        </div>

        <h2 id="transparency">Transparency Notes</h2>
        <p>
          Transparency on a pet-food brand is the share of supply-chain and manufacturing detail
          that a shopper can verify <em>without contacting the company</em>. Three things matter:
          where each protein and starch is sourced, what plant the food is made in, and what
          third-party audit posture the manufacturer maintains.
        </p>
        <ul>
          <li>
            <strong>Sourcing disclosure.</strong>{' '}
            {brand.transparencyScore === 'High'
              ? `${brand.name} publishes per-ingredient sourcing detail on its website. The level of detail varies by SKU; the brand-level posture is more transparent than the category norm.`
              : brand.transparencyScore === 'Medium'
                ? `${brand.name} publishes category-level sourcing claims (e.g., country of origin for primary proteins) but does not generally identify specific suppliers. This is roughly the category median.`
                : brand.transparencyScore === 'Low'
                  ? `${brand.name} provides limited public sourcing detail beyond the ingredient panel. Shoppers seeking supplier-level disclosure will need to contact the manufacturer directly.`
                  : `Public sourcing posture for ${brand.name} has not been verified for this reference page. Treat as unknown until checked at the source.`}
          </li>
          <li>
            <strong>Manufacturing plant disclosure.</strong>{' '}
            {brand.manufacturingCountries.length > 0
              ? `Production is reported in ${formatList(brand.manufacturingCountries)}; specific plant addresses are typically not on the public-facing site. For a recall analysis, the FDA CVM record lists the production facility.`
              : 'Manufacturing footprint is not publicly disclosed at the country level. Verify with the manufacturer.'}
          </li>
          <li>
            <strong>Audit posture.</strong>{' '}
            {brand.gfsiCertified === null
              ? `${brand.name} does not publicly disclose a GFSI-benchmarked certification (SQF, BRCGS, or FSSC 22000). Many brands maintain plant-level certifications without listing them on the consumer-facing site; verify with the manufacturer.`
              : brand.gfsiCertified === 'Unverified'
                ? `GFSI-benchmarked certification (SQF, BRCGS, or FSSC 22000) for ${brand.name} has not been verified from a public source for this reference page. Verify with the manufacturer.`
                : `${brand.name} reports ${brand.gfsiCertified}-certified manufacturing per its own disclosures. The certificate scope (which plants, which product families) should be checked directly.`}
          </li>
        </ul>

        <h2 id="recalls">Recall History</h2>
        <p>
          The authoritative source for US pet-food recalls is the{' '}
          <a
            href="https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals"
            target="_blank"
            rel="noopener"
          >
            FDA Center for Veterinary Medicine Recalls &amp; Withdrawals
          </a>{' '}
          database. The PetFoods.com{' '}
          <Link href="/recalls">recall catalog</Link> is a structured mirror of those filings.
          For {brand.name}, recall history should be read alongside the parent company’s and the
          manufacturer’s record — when the brand is contract-manufactured or shares a plant with a
          sibling, a recall on the production line affects every brand on it.
        </p>
        <p>
          <strong>Recorded recall count for {brand.name} (this catalog):</strong> {formatRecall(brand)}.
        </p>
        {!brand.recallCount && (
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)' }}>
            Recall count fields are deliberately left empty when they cannot be verified directly
            from the FDA CVM record. We do not estimate or interpolate recall numbers. Confirm the
            current count at the FDA CVM link above.
          </p>
        )}

        {brand.editorialCrossLink && (
          <>
            <h2 id="editorial">Editorial Cross-Reference</h2>
            <p>
              PetFood.com (the editorial sister site) has published a scored profile or comparison
              that includes {brand.name}:
            </p>
            <p>
              <a href={brand.editorialCrossLink} target="_blank" rel="noopener">
                {brand.editorialCrossLink}
              </a>
            </p>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)' }}>
              The editorial page applies the published v1.0 rubric (AAFCO completeness, ingredient
              sourcing, recall history, manufacturing standards, feeding-outcome literature). This
              catalog page is the structured reference; the editorial page is the assessment.
            </p>
          </>
        )}

        <h2 id="unknowns">What We Don’t Know About This Brand</h2>
        {unknowns.length === 0 ? (
          <p>
            All catalog fields are populated for {brand.name} from public sources. Per-product
            detail (specific lot information, single-SKU AAFCO statements) should still be verified
            on the bag panel and manufacturer website at purchase time.
          </p>
        ) : (
          <>
            <p>
              The following fields are not filled in for {brand.name} because we could not verify
              them from a public corporate disclosure, brand website, or FDA filing. The catalog
              policy is to leave a field empty rather than estimate it. Verify with the manufacturer
              if you need an answer before purchase:
            </p>
            <ul>
              {unknowns.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </>
        )}

        <h2 id="compare">Compare with Similar Brands</h2>
        <p>
          Other brands in the {brand.priceTier} price tier (catalog-level comparison only — these
          are <em>not</em> rank-ordered):
        </p>
        {related.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '12px',
              margin: '12px 0 24px',
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/brands/${r.slug}`}
                style={{
                  display: 'block',
                  padding: '12px 14px',
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
                    marginBottom: '4px',
                  }}
                >
                  {r.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                  Parent: {r.parentCompany}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                  Tier: {r.priceTier}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>
            No other brands in the catalog share this exact price tier. See the full{' '}
            <Link href="/brands">brand index</Link> for broader comparison.
          </p>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            <strong>{brand.name} corporate site:</strong>{' '}
            <a href={brand.sourcesUrl} target="_blank" rel="noopener">
              {brand.sourcesUrl}
            </a>{' '}
            — used to confirm category coverage, headquarters country, and parent-company
            attribution.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine.{' '}
            <em>Recalls &amp; Withdrawals — Animal &amp; Veterinary</em>.{' '}
            <a
              href="https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals"
              target="_blank"
              rel="noopener"
            >
              fda.gov/animal-veterinary/safety-health/recalls-withdrawals
            </a>{' '}
            — primary source for recall history.
          </li>
          <li>
            Association of American Feed Control Officials (AAFCO).{' '}
            <em>2025 Official Publication</em>. Reference for AAFCO statement type, nutrient
            profiles, and feed-ingredient definitions referenced on the brand’s product panels.
          </li>
          <li>
            Corporate disclosures (10-K, investor decks, acquisition press releases) from{' '}
            {brand.parentCompany} and predecessors. Used to confirm parent ownership and
            acquisition year.
          </li>
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
          width: '40%',
          color: 'var(--brand-text-dark)',
        }}
      >
        {label}
      </th>
      <td style={{ padding: '10px 14px', color: 'var(--brand-text-mid)' }}>{value}</td>
    </tr>
  )
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildBrandFaq(brand: Brand): FAQItem[] {
  return [
    {
      question: `Who owns ${brand.name}?`,
      answer: `${brand.name} is owned by ${brand.parentCompany}${brand.parentAcquiredYear ? `, which acquired the brand in ${brand.parentAcquiredYear}` : ''}.${brand.parentNotes ? ` ${brand.parentNotes}` : ''} Ownership matters for recall analysis (shared manufacturing footprint across siblings) and for understanding the procurement scale behind the brand.`,
      answerText: `${brand.name} is owned by ${brand.parentCompany}${brand.parentAcquiredYear ? ` (acquired ${brand.parentAcquiredYear})` : ''}. Ownership affects recall surface area and procurement scale.`,
    },
    {
      question: `Where is ${brand.name} manufactured?`,
      answer: `According to the brand’s own public disclosures, ${brand.name} is manufactured in ${formatList(brand.manufacturingCountries)}. Specific plant addresses are usually not listed on the consumer-facing site; the FDA CVM record identifies the production facility for any given recall.`,
      answerText: `${brand.name} is manufactured in ${formatList(brand.manufacturingCountries)} per the brand’s public disclosures.`,
    },
    {
      question: `What is ${brand.name}’s AAFCO statement type?`,
      answer:
        brand.aafcoStatementType === 'Verify per product'
          ? `${brand.name}’s portfolio includes multiple SKUs and the AAFCO nutritional adequacy statement is set per product — some lines are substantiated by feeding trial and others by formulation only. Read the AAFCO statement printed on the bag or can panel for the specific product you are buying.`
          : `${brand.name} reports a portfolio-level AAFCO statement type of: ${brand.aafcoStatementType}. The per-SKU statement on the bag or can panel is still the authoritative reference for any given product.`,
      answerText:
        brand.aafcoStatementType === 'Verify per product'
          ? `Varies per SKU. Read the AAFCO statement on the specific product panel.`
          : `${brand.aafcoStatementType}. Confirm per SKU on the product panel.`,
    },
    {
      question: `Does ${brand.name} have a recall history?`,
      answer: `The PetFoods.com catalog policy is to populate recall counts only from the FDA CVM Recalls & Withdrawals database. For ${brand.name}, the current entry is: ${formatRecall(brand)}. Confirm at the FDA CVM database before purchase if recall posture is a deciding factor for you.`,
      answerText: `Catalog policy uses FDA CVM as the source. Current entry: ${formatRecall(brand)}. Confirm directly at FDA CVM.`,
    },
    {
      question: `How does ${brand.name} compare to other brands?`,
      answer: `PetFoods.com does not rank brands. The "Compare with similar brands" section above lists other catalog entries in the same price tier (${brand.priceTier}); ranked comparisons live on the PetFood.com editorial sister site and apply the published v1.0 rubric.`,
      answerText: `Catalog comparison only. See the "Compare with similar brands" section above for catalog peers in the ${brand.priceTier} tier.`,
    },
  ]
}
