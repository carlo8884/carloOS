/**
 * Dynamic equipment-category buyer-guide template for Fish.com.
 *
 * One static-rendered page per entry in src/data/equipment-categories.ts, at
 * /equipment/<slug>. These pages are EDUCATIONAL category overviews — they
 * explain HOW to choose a category of aquarium equipment, then funnel readers
 * to the matching /reviews/best-* pages where specific products are ranked.
 *
 * Sections (in order):
 *   - What It Is
 *   - Why It Matters
 *   - Types & Tradeoffs
 *   - How to Choose
 *   - Common Mistakes
 *   - Price Ranges
 *   - Further Reading (cross-links to existing /reviews/best-* pages)
 *   - FAQs (with FAQPage schema)
 *
 * JSON-LD: Article + BreadcrumbList + FAQPage, emitted via combineSchemas.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArticleLayout,
  AffiliateDisclosure,
  CrossPortfolioCard,
  FAQAccordion,
  RelatedLinks,
  EmailCapture,
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  EquipmentCategories,
  getEquipmentCategoryBySlug,
  type EquipmentCategory,
} from '../../../data/equipment-categories'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return EquipmentCategories.map((c) => ({ slug: c.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerCategoryMetadata(c: EquipmentCategory): { title: string; description: string } {
  const titleRaw = `${c.categoryName} Buyer Guide — How to Choose | Fish.com`
  const title = truncate(titleRaw, 70)

  const descRaw = `${c.categoryName}: how to choose, types and tradeoffs, common mistakes, and price ranges. Editorial buyer guide from Fish.com.`
  const description = truncate(descRaw, 160)
  return { title, description }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getEquipmentCategoryBySlug(slug)

  if (!category) {
    return buildMetadata({
      siteId: 'fish-com',
      title: 'Equipment Guide Not Found | Fish.com',
      description: 'The requested equipment category guide is not in the Fish.com catalog.',
      path: `/equipment/${slug}`,
    })
  }

  const { title, description } = buildPerCategoryMetadata(category)
  return buildMetadata({
    siteId: 'fish-com',
    title,
    description,
    path: `/equipment/${category.slug}`,
    type: 'article',
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function EquipmentCategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getEquipmentCategoryBySlug(slug)
  if (!category) {
    notFound()
  }

  const url = `https://fish.com/equipment/${category.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerCategoryMetadata(category)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Equipment', href: '/equipment' },
    { name: category.categoryName, href: `/equipment/${category.slug}` },
  ]

  const faqItems: FAQItem[] = category.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    answerText: f.answer,
  }))

  const articleSchema = buildArticleSchema({
    siteId: 'fish-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://fish.com${b.href}`,
    })),
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  // ArticleLayout will inject one schema via <SchemaScript>. combineSchemas
  // returns an array; SchemaScript serializes the array into one JSON-LD
  // <script> tag.
  const allSchemas = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: `${category.categoryName} — How to Choose`,
        subtitle: category.whatItIs,
        category: 'Equipment Buyer Guide',
        authorName: 'Fish.com Editorial',
        authorAvatar: '🐠',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={allSchemas as unknown as Record<string, unknown>}
      relatedLinks={[{ title: 'Equipment Hub', href: '/equipment', category: 'Equipment' }, { title: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters', category: 'Reviews' }, { title: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide', category: 'Tank Setup' }, { title: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide', category: 'Tank Setup' }]}
      sidebar={
        <>
          <RelatedLinks
            title="Compare Specific Products"
            links={category.recommendedFurtherReading.map((r) => ({
              label: r.label,
              href: r.href,
            }))}
          />
          <CrossPortfolioCard
            currentSite="fish-com"
            contentType="equipment"
            variant="sidebar"
          />
          <div className="bg-brand-primary-pale border border-brand-primary/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Free Lead Magnet
            </div>
            <div className="font-display font-bold text-brand-dark text-base leading-snug mb-2">
              Get our Aquarium Cycling Survival Kit
            </div>
            <p className="text-xs text-brand-text-mid leading-relaxed mb-3">
              The 14-day fish-in / fishless cycling checklist, water-test schedule, and emergency
              ammonia-spike playbook — delivered as a printable PDF.
            </p>
            <a
              href="/setup"
              className="inline-block text-xs font-semibold text-brand-primary no-underline hover:underline"
            >
              Get the Survival Kit →
            </a>
          </div>
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Equipment picks and fishkeeping tips every Thursday."
            source={`equipment-${category.slug}`}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="what-it-is">What It Is</h2>
        <p>{category.whatItIs}</p>

        <h2 id="why-it-matters">Why It Matters</h2>
        <ul>
          {category.whyItMatters.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="types">Types &amp; Tradeoffs</h2>
        <p>
          {category.categoryName} are not a single category — sub-types serve different tanks,
          species, and price points. The table below summarizes which sub-type is the correct fit
          and what you give up for that fit.
        </p>
        <div
          style={{
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 28px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-surface)' }}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '24%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Type
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '40%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Best For
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '36%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Drawbacks
                </th>
              </tr>
            </thead>
            <tbody>
              {category.typesAndTradeoffs.map((t) => (
                <tr key={t.type} style={{ borderTop: '1px solid var(--brand-border)' }}>
                  <td
                    style={{
                      padding: '10px 14px',
                      fontWeight: 600,
                      verticalAlign: 'top',
                      color: 'var(--brand-text-dark)',
                    }}
                  >
                    {t.type}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      verticalAlign: 'top',
                      color: 'var(--brand-text-mid)',
                    }}
                  >
                    {t.bestFor}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      verticalAlign: 'top',
                      color: 'var(--brand-text-mid)',
                    }}
                  >
                    {t.drawbacks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="how-to-choose">How to Choose</h2>
        <p>
          The decision criteria below are ordered by impact — the first few decisions matter more
          than the last few. Get the sub-type right first; brand selection inside the right sub-type
          is the smaller decision.
        </p>
        <ul>
          {category.howToChoose.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <h2 id="common-mistakes">Common Mistakes</h2>
        <ul>
          {category.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="price-ranges">Price Ranges</h2>
        <p>
          Price ranges below reflect current retailer averages (Amazon, Petco, Bulk Reef Supply) at
          time of publication. Specific products fluctuate; the tier shapes are stable.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          {category.priceRanges.map((p) => (
            <div
              key={p.tier}
              style={{
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                padding: '14px 16px',
                background: 'var(--brand-white)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-primary)',
                  marginBottom: '4px',
                }}
              >
                {p.tier}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '6px',
                }}
              >
                {p.range}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'var(--brand-text-mid)',
                }}
              >
                {p.summary}
              </div>
            </div>
          ))}
        </div>

        <h2 id="shop">Where to Shop</h2>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', marginBottom: '12px' }}>
          Browse the {category.categoryName.toLowerCase()} category on Amazon or Chewy. Fish.com
          earns an affiliate commission when you purchase through these links — at no extra cost
          to you. Commission does not influence editorial picks.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '8px 0 24px' }}>
          <a
            href={`/go/amazon-brand/${encodeURIComponent(category.categoryName)}?s=equipment-${category.slug}`}
            rel="sponsored noopener"
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              background: 'var(--brand-dark, #232f3e)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Shop {category.categoryName} on Amazon →
          </a>
          <a
            href={`/go/chewy-brand/${encodeURIComponent(category.categoryName)}?s=equipment-${category.slug}`}
            rel="sponsored noopener"
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              background: 'var(--brand-primary, #1e90ff)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Shop {category.categoryName} on Chewy →
          </a>
        </div>

        <h2 id="further-reading">Further Reading</h2>
        <p>
          For specific brand and model recommendations within this category, the Fish.com editorial
          team has ranked the leading options on dedicated review pages. Use this guide to pick the
          sub-type that fits your tank, then jump to the review page for the product shortlist.
        </p>
        <ul>
          {category.recommendedFurtherReading.map((r) => (
            <li key={r.href}>
              <a href={r.href}>{r.label}</a>
            </li>
          ))}
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} includeSchema={false} />

        <p
          style={{
            marginTop: '32px',
            fontSize: '13px',
            color: 'var(--brand-text-mid)',
            borderTop: '1px solid var(--brand-border)',
            paddingTop: '16px',
          }}
        >
          Affiliate disclosure: Fish.com earns commissions on purchases made through links on our
          review pages. Buyer-guide rankings and category recommendations are editorially
          independent — affiliate relationships have no influence on which sub-types we recommend.
        </p>
      </div>
    </ArticleLayout>
  )
}
