import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
  EmailCapture,
  BuyBox,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { Brands, getBrandBySlug, getRelatedBrandsByPriceTier, type Brand } from '../../../data/brands'
import {
  BrandReviews,
  getBrandReviewBySlug,
  WSAVA_QUESTION_TEXT,
  type BrandReview,
  type WsavaAnsweredQuestion,
} from '../../../data/brand-reviews'

// ─── Static generation ──────────────────────────────────────────────────────
// One static page per brand at build time. No runtime fetch, no DB.

export function generateStaticParams() {
  // Union of catalog brand slugs and long-form-review slugs.
  const set = new Set<string>([
    ...Brands.map((b) => b.slug),
    ...BrandReviews.map((r) => r.slug),
  ])
  return Array.from(set).map((slug) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  const review = getBrandReviewBySlug(slug)
  if (!brand && !review) {
    return buildMetadata({
      siteId: 'petfoods-com',
      title: 'Brand Not Found',
      description: 'The requested brand is not in the PetFoods.com catalog.',
      path: `/brands/${slug}`,
    })
  }

  const displayName = review?.brandName ?? brand!.name
  const parent = review?.parentCompany ?? brand!.parentCompany

  const baseTitle = review
    ? `${displayName} Review — WSAVA, Recalls, Lineup | PetFoods.com`
    : `${displayName} — Independent Reference | PetFoods.com`
  const title = baseTitle.length <= 70 ? baseTitle : `${displayName} — Reference | PetFoods.com`

  const mfg = (review?.manufacturingLocations ?? brand?.manufacturingCountries ?? []).join(' / ')
  const descRaw = review
    ? `${displayName} review: parent ${parent}, manufacturing ${mfg}, WSAVA scorecard, recalls, who it's best for. Independent — no brand has paid for this assessment.`
    : `${displayName} corporate parent ${parent}; manufactured in ${mfg}. Catalog reference with AAFCO, transparency, and recall notes.`
  const description = descRaw.length <= 160 ? descRaw : descRaw.slice(0, 157) + '...'

  return buildMetadata({
    siteId: 'petfoods-com',
    title,
    description,
    path: `/brands/${slug}`,
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
  const review = getBrandReviewBySlug(slug)
  if (!brand && !review) notFound()

  if (review) {
    return <BrandReviewPage review={review} brand={brand ?? undefined} />
  }
  return <BrandCatalogPage brand={brand!} />
}

// ─── Catalog-only renderer (legacy 25 brands) ──────────────────────────────

function BrandCatalogPage({ brand }: { brand: Brand }) {
  const related = getRelatedBrandsByPriceTier(brand.slug, 4)

  const schema = buildArticleSchema({
    siteId: 'petfoods-com',
    title: `${brand.name} — Independent Reference`,
    description: `Independent reference page for ${brand.name}: corporate parent (${brand.parentCompany}), manufacturing footprint, AAFCO posture, transparency and recall notes.`,
    url: `https://petfoods.com/brands/${brand.slug}`,
    imageUrl: '',
    authorName: 'PetFoods.com Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

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

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://petfoods.com/' },
      { name: 'Brands', url: 'https://petfoods.com/brands' },
      { name: brand.name, url: `https://petfoods.com/brands/${brand.slug}` },
    ],
  })

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
              { label: 'Ingredient Glossary', href: '/ingredients' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              { label: 'Life-Stage Catalog', href: '/life-stage' },
              ...(brand.editorialCrossLink
                ? [{ label: `${brand.name} — PetFood.com editorial`, href: brand.editorialCrossLink }]
                : []),
            ]}
          />
          <CrossPortfolioCard
            currentSite="petfoods-com"
            contentType="brand"
            variant="sidebar"
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfoods-com"
            title="PetFoods.com weekly digest"
            subtitle="New recall filings, reformulations, and brand changes — one email a week."
            source={`brand:${brand.slug}`}
          />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="carloOS-article">
        <DisclosureBanner />

        <p id="tldr">
          <strong>TL;DR.</strong> {buildTldr(brand)}
        </p>

        <BuyBox
          label={`Where to buy ${brand.name}`}
          disclosure={`Browse ${brand.name}'s full lineup on Chewy or Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you.`}
          secondaryDisclosure="We never rank by commission."
          brands={[
            {
              name: brand.name,
              vendors: [
                { vendor: 'chewy', href: `/go/chewy-brand/${encodeURIComponent(brand.name)}?s=brand-${brand.slug}`, label: 'Search on Chewy' },
                { vendor: 'amazon', href: `/go/amazon-brand/${encodeURIComponent(brand.name)}?s=brand-${brand.slug}`, label: 'Search on Amazon' },
              ],
            },
          ]}
        />

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
              policy is to leave a field empty rather than estimate it.
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
          <CompareGrid related={related} />
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
            </a>
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
            </a>
          </li>
          <li>
            Association of American Feed Control Officials (AAFCO). <em>2025 Official Publication</em>.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee.{' '}
            <em>Selecting a Pet Food Manufacturer</em>.{' '}
            <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener">
              wsava.org/global-guidelines/global-nutrition-guidelines/
            </a>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}

// ─── Long-form review renderer ─────────────────────────────────────────────

function BrandReviewPage({ review, brand }: { review: BrandReview; brand?: Brand }) {
  const schema = buildArticleSchema({
    siteId: 'petfoods-com',
    title: `${review.brandName} Review — WSAVA, Recalls, Lineup`,
    description: `Independent review of ${review.brandName}: parent ${review.parentCompany}, manufacturing ${review.manufacturingLocations.join(' / ')}, WSAVA scorecard, FDA recall history, who it's best for and who should avoid it.`,
    url: `https://petfoods.com/brands/${review.slug}`,
    imageUrl: '',
    authorName: 'PetFoods.com Editorial — independent ingredient & brand reference',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: review.brandName,
    parentOrganization: {
      '@type': 'Organization',
      name: review.parentCompany,
    },
    ...(review.founded ? { foundingDate: String(review.founded) } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: review.headquarters,
    },
  } as Record<string, unknown>

  const reviewedQuestions = new Set(review.wsavaQuestionsAnswered.map((q) => q.question))
  const allQuestions: WsavaAnsweredQuestion['question'][] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: ‘Home’, url: ‘https://petfoods.com/’ },
      { name: ‘Brands’, url: ‘https://petfoods.com/brands’ },
      { name: review.brandName, url: `https://petfoods.com/brands/${review.slug}` },
    ],
  })

  const faqItems: FAQItem[] = [
    {
      question: `What is ${review.brandName}’s WSAVA compliance score?`,
      answer: `${review.brandName} answers ${review.wsavaComplianceScore} of the six WSAVA Global Nutrition Committee "Selecting a Pet Food Manufacturer" questions publicly. The six questions cover nutritionist credentials, formulation responsibility, AAFCO substantiation, manufacturing location and visitability, quality-control measures, and full nutrient analysis disclosure. WSAVA itself does not publish brand-level scores; the count here is PetFoods.com’s editorial reading of the brand’s public disclosures.`,
      answerText: `${review.brandName} answers ${review.wsavaComplianceScore} of the six WSAVA "Selecting a Pet Food Manufacturer" questions publicly per our editorial reading.`,
    },
    {
      question: `Does ${review.brandName} use board-certified veterinary nutritionists?`,
      answer: review.hasBoardCertifiedNutritionists
        ? `Yes — ${review.brandName} publicly identifies at least one full-time qualified nutritionist (PhD in animal nutrition or board-certified veterinary nutritionist — ACVN/ECVCN) on its corporate or science pages.`
        : `Based on the brand’s public disclosures we reviewed, ${review.brandName} does not publicly identify a board-certified veterinary nutritionist (ACVN/ECVCN) on its formulation team. The brand may employ qualified nutrition staff that are not publicly profiled; verify with the manufacturer if this is a deciding factor.`,
      answerText: review.hasBoardCertifiedNutritionists
        ? `Yes — public disclosure identifies qualified nutritionists.`
        : `Not publicly disclosed. Verify with the manufacturer if it is a deciding factor.`,
    },
    {
      question: `Does ${review.brandName} run AAFCO feeding trials?`,
      answer: review.conductsFeedingTrials
        ? `${review.brandName} publicly indicates that at least part of its portfolio is substantiated by AAFCO feeding trials (not only formulated to meet the AAFCO nutrient profile). The AAFCO statement on the bag is the per-SKU authority.`
        : `${review.brandName} does not publicly headline AAFCO feeding-trial substantiation. Many SKUs in the line appear to be formulated to meet the AAFCO nutrient profile only — confirm the AAFCO statement on the specific bag you are buying.`,
      answerText: review.conductsFeedingTrials
        ? `At least partially, per public disclosure.`
        : `Not publicly highlighted. Verify per bag.`,
    },
    {
      question: `Has ${review.brandName} had any recalls?`,
      answer:
        review.recallHistory.length === 0
          ? `In the FDA CVM Recalls & Withdrawals window we reviewed, ${review.brandName} has no recall records. Recall posture changes over time — confirm the current state directly at the FDA CVM database before purchase.`
          : `${review.brandName} has ${review.recallHistory.length} FDA CVM recall record${review.recallHistory.length === 1 ? '' : 's'} in the window we reviewed. The most recent: ${review.recallHistory[0].year} — ${review.recallHistory[0].product}.`,
      answerText:
        review.recallHistory.length === 0
          ? `No recall records in our review window. Verify on FDA CVM.`
          : `${review.recallHistory.length} FDA CVM recall record(s) in our review window.`,
    },
  ]

  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: `${review.brandName} — Independent Review`,
        subtitle: `${review.parentCompany} · HQ ${review.headquarters} · Manufactured in ${review.manufacturingLocations.join(' / ')} · WSAVA scorecard ${review.wsavaComplianceScore}/6`,
        category: 'Brand Review',
        publishedAt: 'May 2026',
        readTime: '9 min',
        authorName: 'PetFoods.com Editorial',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: review.brandName, href: `/brands/${review.slug}` },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Overview', href: '#overview' },
              { label: 'Manufacturer Profile', href: '#manufacturer' },
              { label: 'WSAVA Compliance Scorecard', href: '#wsava' },
              { label: 'Product Lines', href: '#product-lines' },
              { label: 'Strengths', href: '#strengths' },
              { label: 'Weaknesses', href: '#weaknesses' },
              { label: 'Recall History', href: '#recall-history' },
              { label: 'Who It’s Best For', href: '#best-for' },
              { label: 'Who Should Avoid', href: '#avoid' },
              { label: 'Independent Assessment', href: '#assessment' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion References"
            links={[
              { label: 'Ingredient Glossary', href: '/ingredients' },
              { label: 'All Brands (index)', href: '/brands' },
              { label: 'Pet Food Recall Database', href: '/recalls' },
              { label: 'Life-Stage Catalog', href: '/life-stage' },
              ...(brand?.editorialCrossLink
                ? [{ label: `${review.brandName} on PetFood.com`, href: brand.editorialCrossLink }]
                : []),
            ]}
          />
          <CrossPortfolioCard
            currentSite="petfoods-com"
            contentType="brand"
            variant="sidebar"
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfoods-com"
            title="PetFoods.com weekly digest"
            subtitle="New recall filings, reformulations, and brand changes — one email a week."
            source={`brand-review:${review.slug}`}
          />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="carloOS-article">
        <DisclosureBanner />

        <BuyBox
          label={`Where to buy ${review.brandName}`}
          disclosure={`Browse ${review.brandName}'s full lineup on Chewy or Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you.`}
          secondaryDisclosure="We never rank by commission."
          brands={[
            {
              name: review.brandName,
              vendors: [
                { vendor: 'chewy', href: `/go/chewy-brand/${encodeURIComponent(review.brandName)}?s=review-${review.slug}`, label: 'Search on Chewy' },
                { vendor: 'amazon', href: `/go/amazon-brand/${encodeURIComponent(review.brandName)}?s=review-${review.slug}`, label: 'Search on Amazon' },
              ],
            },
          ]}
        />

        <h2 id="overview">Overview</h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 24px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <Row label="Brand" value={review.brandName} />
              <Row label="Parent company" value={review.parentCompany} />
              <Row label="Founded" value={review.founded ? String(review.founded) : 'Not publicly verified'} />
              <Row label="Headquarters" value={review.headquarters} />
              <Row label="Manufacturing locations" value={review.manufacturingLocations.join(', ')} />
              <Row label="Owns manufacturing" value={review.ownsManufacturing ? 'Yes' : 'No (uses contract manufacturing in whole or part)'} />
              <Row label="WSAVA compliance" value={`${review.wsavaComplianceScore} of 6 questions answered publicly`} />
              <Row label="Board-certified veterinary nutritionists" value={review.hasBoardCertifiedNutritionists ? 'Publicly disclosed' : 'Not publicly disclosed'} />
              <Row label="AAFCO feeding trials" value={review.conductsFeedingTrials ? 'At least partially substantiated' : 'Not publicly highlighted'} />
            </tbody>
          </table>
        </div>

        <h2 id="manufacturer">Manufacturer Profile</h2>
        <p>
          {review.brandName} is owned by <strong>{review.parentCompany}</strong>, headquartered in{' '}
          {review.headquarters}. Production runs in {review.manufacturingLocations.join(', ')}.{' '}
          {review.ownsManufacturing
            ? 'The brand owns and operates at least one of the plants where its food is made — chain-of-custody is direct.'
            : 'The brand does not own all the plants where its food is made — at least part of the line is contract-manufactured, per the brand’s own public disclosures.'}{' '}
          {review.hasBoardCertifiedNutritionists
            ? 'The corporate disclosures identify a full-time qualified nutritionist (PhD in animal nutrition or ACVN/ECVCN board certification) on the formulation team.'
            : 'The corporate disclosures we reviewed do not publicly identify a full-time qualified nutritionist (PhD in animal nutrition or ACVN/ECVCN board certification). That does not mean none is employed — only that the credential is not part of the brand’s public face.'}
        </p>

        <h2 id="wsava">WSAVA Compliance Scorecard</h2>
        <p>
          The World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee publishes
          a six-question rubric — <em>Selecting a Pet Food Manufacturer</em> — that owners and
          veterinarians can apply to any brand. Our scorecard counts how many of the six questions
          {' '}{review.brandName} answers publicly. WSAVA itself does <em>not</em> publish brand-level
          scores; this scorecard is PetFoods.com’s editorial reading of public disclosures, and the
          per-question evidence below is auditable.
        </p>
        <div
          style={{
            background: 'var(--brand-primary-pale)',
            border: '1px solid var(--brand-primary)',
            borderRadius: '8px',
            padding: '14px 18px',
            margin: '16px 0',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <strong>Score: {review.wsavaComplianceScore} / 6 WSAVA questions answered publicly.</strong>
        </div>
        <div style={{ overflowX: 'auto', margin: '16px 0 28px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--brand-surface)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px', width: '60px' }}>Q</th>
                <th style={{ padding: '10px 12px' }}>WSAVA question</th>
                <th style={{ padding: '10px 12px', width: '100px' }}>Answered?</th>
                <th style={{ padding: '10px 12px' }}>Public answer</th>
              </tr>
            </thead>
            <tbody>
              {allQuestions.map((q) => {
                const answered = reviewedQuestions.has(q)
                const detail = review.wsavaQuestionsAnswered.find((x) => x.question === q)
                return (
                  <tr key={q} style={{ borderTop: '1px solid var(--brand-border)' }}>
                    <td style={{ padding: '10px 12px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{q}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>{WSAVA_QUESTION_TEXT[q]}</td>
                    <td
                      style={{
                        padding: '10px 12px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: answered ? 'var(--brand-success)' : 'var(--brand-text-light)',
                      }}
                    >
                      {answered ? 'Yes' : 'Not disclosed'}
                    </td>
                    <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>
                      {detail?.answer ?? 'No public answer found in the corporate disclosures we reviewed.'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <h2 id="product-lines">Product Lines</h2>
        <div style={{ overflowX: 'auto', margin: '12px 0 24px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--brand-surface)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px' }}>Line</th>
                <th style={{ padding: '10px 12px' }}>Target pet</th>
                <th style={{ padding: '10px 12px' }}>Formulation approach</th>
                <th style={{ padding: '10px 12px' }}>Price tier</th>
              </tr>
            </thead>
            <tbody>
              {review.productLines.map((line) => (
                <tr key={line.name} style={{ borderTop: '1px solid var(--brand-border)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{line.name}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>{line.targetPet}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>{line.formulationApproach}</td>
                  <td style={{ padding: '10px 12px', fontFamily: 'var(--font-mono)' }}>{line.priceTier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="strengths">Strengths</h2>
        <ul>
          {review.strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="weaknesses">Weaknesses</h2>
        <ul>
          {review.weaknesses.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2 id="recall-history">Recall History</h2>
        <p>
          The authoritative source for US pet-food recalls is the{' '}
          <a
            href="https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals"
            target="_blank"
            rel="noopener"
          >
            FDA Center for Veterinary Medicine Recalls &amp; Withdrawals
          </a>{' '}
          database. The list below is the recall record we found for {review.brandName} in the
          window we reviewed (2015 onward). Always cross-check with FDA CVM directly before
          purchase.
        </p>
        {review.recallHistory.length === 0 ? (
          <div
            style={{
              padding: '14px 18px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              background: 'var(--brand-surface)',
              margin: '12px 0 24px',
              fontSize: '14px',
            }}
          >
            <strong>No reported recalls in our review window.</strong> We found no FDA CVM recall
            records for {review.brandName} from 2015 onward. Recall posture changes — confirm the
            current state directly at the FDA CVM database before purchase.
          </div>
        ) : (
          <div style={{ overflowX: 'auto', margin: '12px 0 24px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--brand-surface)', textAlign: 'left' }}>
                  <th style={{ padding: '10px 12px', width: '80px' }}>Year</th>
                  <th style={{ padding: '10px 12px' }}>Product affected</th>
                  <th style={{ padding: '10px 12px' }}>FDA-stated reason</th>
                </tr>
              </thead>
              <tbody>
                {review.recallHistory.map((r, idx) => (
                  <tr key={`${r.year}-${idx}`} style={{ borderTop: '1px solid var(--brand-border)' }}>
                    <td style={{ padding: '10px 12px', fontFamily: 'var(--font-mono)' }}>{r.year}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>{r.product}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>{r.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 id="best-for">Who It’s Best For</h2>
        <ul>
          {review.whoItsBestFor.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2 id="avoid">Who Should Avoid</h2>
        <ul>
          {review.whoShouldAvoid.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2 id="assessment">Independent Assessment</h2>
        <p style={{ fontSize: '15.5px', lineHeight: 1.6 }}>{review.independentAssessment}</p>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginTop: '10px' }}>
          Assessment by the PetFoods.com editorial desk. No DVM byline is claimed. We do not score on
          packaging, brand age, or marketing tone. We do not accept brand payment for assessment
          language.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} />

        <h2 id="sources">Sources</h2>
        <ul>
          {review.citedSources.map((src) => (
            <li key={src.url}>
              {src.name}.{' '}
              <a href={src.url} target="_blank" rel="noopener">
                {src.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ArticleLayout>
  )
}

// ─── Shared sub-components ─────────────────────────────────────────────────

function DisclosureBanner() {
  return (
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
      this assessment. Editorial decisions — including which brands are reviewed, the WSAVA
      scoring, and recall coverage — are not for sale.
    </div>
  )
}

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

function CompareGrid({ related }: { related: Brand[] }) {
  return (
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
  )
}

// ─── FAQ builder (catalog renderer) ───────────────────────────────────────

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
