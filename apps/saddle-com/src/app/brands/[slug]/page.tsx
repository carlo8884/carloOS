import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  ReviewCard,
  RelatedLinks,
  EmailCapture,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { SADDLE_BRANDS, getBrandBySlug, getAllBrandSlugs, type SaddleBrand } from '@/data/saddle-brands'

interface BrandPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) {
    return buildMetadata({
      siteId: 'saddle-com',
      title: 'Saddle Brand Not Found | Saddle.com',
      description: 'The saddle brand you requested could not be found.',
      path: `/brands/${slug}`,
    })
  }
  const title = `${brand.name} Saddles Review 2026 — Models, Fit, Price | Saddle.com`
  const description = `${brand.name} saddle review — ${brand.bestKnownFor}. Models, fit notes, price range, warranty, and who it suits.`
  return buildMetadata({
    siteId: 'saddle-com',
    title: title.length <= 70 ? title : `${brand.name} Saddles Review 2026 | Saddle.com`,
    description: description.length <= 160 ? description : `${brand.name} saddles — models, fit, price range, warranty, and who each model suits. Updated 2026.`,
    path: `/brands/${slug}`,
    type: 'article',
  })
}

function priceRangeLabel(brand: SaddleBrand) {
  const [lo, hi] = brand.priceRangeUsd
  return `$${lo.toLocaleString()}–$${hi.toLocaleString()} (new)`
}

function disciplineShort(brand: SaddleBrand) {
  if (brand.discipline === 'Both') return 'English & Western'
  if (brand.discipline === 'Western') return 'Western'
  return 'English'
}

function compareTargets(current: SaddleBrand) {
  return SADDLE_BRANDS.filter(
    (b) =>
      b.slug !== current.slug &&
      (current.discipline === b.discipline || current.discipline === 'Both' || b.discipline === 'Both'),
  ).slice(0, 4)
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const url = `https://saddle.com/brands/${brand.slug}`
  const compareList = compareTargets(brand)

  const articleSchema = buildArticleSchema({
    siteId: 'saddle-com',
    title: `${brand.name} Saddles Review 2026`,
    description: `${brand.name} saddle review — ${brand.bestKnownFor}.`,
    url,
    imageUrl: '',
    authorName: 'Saddle.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: brand.brandUrl,
    foundingDate: String(brand.foundedYear),
    foundingLocation: brand.headquartersCountry,
    description: brand.tagline,
  }

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://saddle.com/' },
      { name: 'Brands', url: 'https://saddle.com/brands' },
      { name: brand.name, url },
    ],
  })

  const faqSchema = buildFAQSchema({ questions: brand.faq })

  const combinedSchema = combineSchemas(articleSchema, organizationSchema, breadcrumbSchema, faqSchema)

  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="saddle-com"
        hero={{
          title: `${brand.name} Saddles — Review, Models, Fit & Price`,
          subtitle: brand.tagline,
          category: `${disciplineShort(brand)} Saddle Brand`,
          authorName: 'Saddle.com Editorial',
          authorAvatar: '🐴',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Brands', href: '/brands' },
          { name: brand.name, href: `/brands/${brand.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'At a Glance', href: '#at-a-glance' },
                { label: 'Brand History', href: '#history' },
                { label: 'Signature Models', href: '#models' },
                { label: 'Fit Profile', href: '#fit' },
                { label: 'Warranty & Support', href: '#support' },
                { label: 'Compare Brands', href: '#compare' },
                { label: 'Where to Buy', href: '#buy' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'All Saddle Brands', href: '/brands' },
                { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
                { label: disciplineShort(brand) === 'Western' ? 'Best Western Saddles' : 'Best English Saddles', href: disciplineShort(brand) === 'Western' ? '/reviews/best-western-saddles' : '/reviews/best-english-saddles' },
                { label: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="saddle-com"
              title="Free Saddle Buyer's Guide"
              subtitle="Brand-by-brand reviews and market intelligence."
              source={`brand-${brand.slug}`}
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Saddle.com Editorial"
            publishedAt="2026-05-29T00:00:00Z"
            updatedAt="2026-05-29T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="info" title={`${brand.name} — TL;DR`}>
            <p id="tldr" className="m-0">
              <strong>{brand.name}</strong> is a {disciplineShort(brand).toLowerCase()} saddle brand from {brand.headquartersCountry}, founded in {brand.foundedYear}. Best known for {brand.bestKnownFor.toLowerCase()}. Current retail range {priceRangeLabel(brand)}. Key technology: {brand.keyTechnology}.
            </p>
          </CalloutBox>

          <h2 id="at-a-glance">At a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top w-44">Founded</td>
                  <td className="py-2 text-brand-text-mid">{brand.foundedYear}</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top">Headquarters</td>
                  <td className="py-2 text-brand-text-mid">{brand.headquartersCountry}</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top">Discipline</td>
                  <td className="py-2 text-brand-text-mid">{brand.discipline}</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top">Price Range (new)</td>
                  <td className="py-2 text-brand-text-mid">{priceRangeLabel(brand)}</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top">Key Technology</td>
                  <td className="py-2 text-brand-text-mid">{brand.keyTechnology}</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-bold text-brand-dark align-top">Best Known For</td>
                  <td className="py-2 text-brand-text-mid">{brand.bestKnownFor}</td>
                </tr>
                {brand.warrantyTerms && (
                  <tr className="border-b border-brand-border">
                    <td className="py-2 pr-4 font-bold text-brand-dark align-top">Warranty</td>
                    <td className="py-2 text-brand-text-mid">{brand.warrantyTerms}</td>
                  </tr>
                )}
                {brand.affiliateProgram && (
                  <tr>
                    <td className="py-2 pr-4 font-bold text-brand-dark align-top">Where to Buy</td>
                    <td className="py-2 text-brand-text-mid">{brand.affiliateProgram}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h2 id="history">Brand History</h2>
          <p>{brand.history}</p>

          <h2 id="models">Signature Models</h2>
          <p>The {brand.name} lineup centers on a handful of cornerstone models. Specific configurations and pricing vary by dealer — these are the current flagship platforms.</p>
          <ul>
            {brand.signatureModels.map((m) => (
              <li key={m.name}>
                <strong>{m.name}</strong> ({m.discipline}) — {m.notes} <em>{m.approxPriceUsd}.</em>
              </li>
            ))}
          </ul>

          <h2 id="fit">Fit Profile & Who It Suits</h2>
          <p><strong>Fit notes.</strong> {brand.fitNotes}</p>
          <p><strong>Who it suits.</strong> {brand.whoItSuits}</p>

          <h2 id="support">Warranty & Support</h2>
          <p>{brand.supportNotes}</p>
          {brand.warrantyTerms && (
            <CalloutBox variant="info" title="Published warranty">
              <p className="m-0">{brand.warrantyTerms}</p>
            </CalloutBox>
          )}

          <h2 id="compare">Compare With Other Brands</h2>
          <p>{brand.comparedWith}</p>
          {compareList.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-3 my-4">
              {compareList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/brands/${c.slug}`}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
                >
                  <div className="text-sm font-bold text-brand-dark">{brand.name} vs {c.name}</div>
                  <div className="text-xs text-brand-text-light mt-1">{c.bestKnownFor}</div>
                </Link>
              ))}
            </div>
          )}

          <h2 id="buy">Where to Buy a {brand.name}</h2>
          <ReviewCard
            id="buy-card"
            badge={`${brand.name} — Current Lineup`}
            name={`${brand.name} Saddles`}
            subtitle={brand.tagline}
            score={Number(((brand.priceRangeUsd[0] >= 4000 ? 9.0 : brand.priceRangeUsd[0] >= 2000 ? 8.5 : 8.0)).toFixed(1))}
            description={
              <div>
                <p>{brand.history}</p>
                <p>For a deeper model-by-model breakdown of pricing, fit notes, and used-market notes, see our brand-level reviews and the {disciplineShort(brand) === 'Western' ? 'best Western saddles' : 'best English saddles'} comparison.</p>
              </div>
            }
            specs={[
              { label: 'Founded', value: String(brand.foundedYear) },
              { label: 'HQ', value: brand.headquartersCountry },
              { label: 'Discipline', value: disciplineShort(brand) },
              { label: 'Price', value: priceRangeLabel(brand) },
              { label: 'Key Tech', value: brand.keyTechnology.split('—')[0].trim() },
              ...(brand.warrantyTerms ? [{ label: 'Warranty', value: brand.warrantyTerms.split('.')[0] }] : []),
            ]}
            pros={[
              brand.bestKnownFor,
              brand.keyTechnology.split('—')[0].trim(),
              brand.fitNotes.split('.')[0],
            ]}
            cons={[
              `New retail starts at $${brand.priceRangeUsd[0].toLocaleString()} — confirm dealer pricing.`,
              'Used market requires fit check by a qualified saddler before purchase.',
            ]}
            price={priceRangeLabel(brand)}
            priceNote="Confirm current pricing with the manufacturer dealer locator."
            ctaText={brand.relatedReviewSlug ? `Read full ${brand.name} review →` : `Find a ${brand.name} dealer →`}
            ctaHref={brand.relatedReviewSlug ? `/reviews/${brand.relatedReviewSlug}` : brand.brandUrl}
            ctaAffiliateProgram="brand-direct"
            ctaAffiliateProduct={brand.slug}
          />
          <p className="text-xs text-brand-text-light mt-2">
            <strong>Affiliate disclosure.</strong> Saddle.com may earn a commission from purchases made through retailer links. See our <Link href="/legal/affiliate-disclosure" className="text-brand-primary underline">affiliate disclosure</Link>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion
            items={brand.faq.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            includeSchema={false}
          />

          <h2 id="sources">Sources & References</h2>
          <ul className="text-xs text-brand-text-light">
            {brand.citations.map((c) => (
              <li key={c}>
                <a href={c} rel="nofollow noopener" target="_blank" className="text-brand-primary underline break-all">{c}</a>
              </li>
            ))}
            <li>Society of Master Saddlers — qualified saddler directory (https://www.mastersaddlers.co.uk)</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
