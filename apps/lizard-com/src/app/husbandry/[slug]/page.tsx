/**
 * Dynamic husbandry deep-dive template for Lizard.com.
 *
 * One static-rendered page per entry in src/data/husbandry-topics.ts at
 * /husbandry/<slug>. These are foundational keeper-education pages that
 * funnel into the species and equipment-review pages.
 *
 * Trust posture (QC §1):
 *   - No fake DVM byline. Byline reads "Lizard.com Editorial — sourced from
 *     cited references".
 *   - No in-house testing or measurement claims; cited Solarmeter / hygrometer
 *     numbers come from published references.
 *   - Products are described by category, not brand promise.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
  ArticleByline,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  HusbandryTopics,
  getHusbandryTopicBySlug,
  getRelatedHusbandryTopics,
  type HusbandryTopic,
} from '../../../data/husbandry-topics'

// ─── Static generation ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return HusbandryTopics.map((t) => ({ slug: t.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerTopicMetadata(t: HusbandryTopic): { title: string; description: string } {
  const titleRaw = `${t.topicName} Guide | Lizard.com`
  const title = truncate(titleRaw, 70)
  const desc = `${t.topicName}: ${t.shortDescription} Cited from Mader's RAMS, J Herp Med Surg, ARAV, and Reptiles Magazine.`
  return { title, description: truncate(desc, 160) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getHusbandryTopicBySlug(slug)

  if (!topic) {
    return buildMetadata({
      siteId: 'lizard-com',
      title: 'Husbandry Topic Not Found | Lizard.com',
      description: 'The requested reptile husbandry topic is not in the Lizard.com catalog.',
      path: `/husbandry/${slug}`,
    })
  }

  const { title, description } = buildPerTopicMetadata(topic)
  return buildMetadata({
    siteId: 'lizard-com',
    title,
    description,
    path: `/husbandry/${topic.slug}`,
    type: 'article',
  })
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildFaqItems(t: HusbandryTopic): FAQItem[] {
  return t.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    answerText: f.answer,
  }))
}

// ─── Affiliate link helper ─────────────────────────────────────────────────

function productHref(asin?: string): string | undefined {
  if (!asin) return undefined
  return `/go/amazon/${asin}`
}

// ─── Pretty-label helper ───────────────────────────────────────────────────

function prettyLabel(slug: string): string {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function HusbandryTopicPage({ params }: PageProps) {
  const { slug } = await params
  const topic = getHusbandryTopicBySlug(slug)
  if (!topic) notFound()

  const url = `https://lizard.com/husbandry/${topic.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerTopicMetadata(topic)
  const related = getRelatedHusbandryTopics(topic.slug, 3)
  const faqItems = buildFaqItems(topic)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Husbandry', href: '/husbandry' },
    { name: topic.topicName, href: `/husbandry/${topic.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'lizard-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Lizard.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://lizard.com${b.href}`,
    })),
  })

  const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  // Related health condition links (only those that exist in /health/<slug>).
  const relatedHealthLinks =
    topic.relatedHealthSlugs?.map((s) => ({
      label: prettyLabel(s),
      href: `/health/${s}`,
    })) ?? []

  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: topic.topicName,
        subtitle: topic.shortDescription,
        category: topic.category,
        authorName: 'Lizard.com Editorial',
        authorAvatar: 'LZ',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={combined}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What It Is', href: '#what' },
              { label: 'Why It Matters', href: '#why' },
              { label: 'By Species Class', href: '#species-class' },
              { label: 'Common Mistakes', href: '#mistakes' },
              { label: 'What to Buy', href: '#buy' },
              { label: 'How to Monitor', href: '#monitor' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion Species Guides"
            links={[
              { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
              { label: 'Leopard Gecko Care', href: '/species/leopard-gecko' },
              { label: 'Ball Python Care', href: '/species/ball-python' },
              { label: 'Crested Gecko Care', href: '/species/crested-gecko' },
            ]}
          />
          {relatedHealthLinks.length > 0 && (
            <RelatedLinks title="Related Conditions" links={relatedHealthLinks} />
          )}
          <CrossPortfolioCard
            currentSite="lizard-com"
            contentType="health"
            variant="sidebar"
          />
          <CalloutBox variant="info" title="Find an ARAV-certified vet">
            <p style={{ margin: 0, fontSize: '13.5px' }}>
              The Association of Reptilian and Amphibian Veterinarians (ARAV) maintains a public
              directory of veterinarians with reptile-specific training. For any significant
              reptile illness — or to set up a baseline new-pet exam — an ARAV-member clinic is the
              preferred referral.
            </p>
          </CalloutBox>
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Free Care Sheets"
            subtitle="Species guides for subscribers."
            source={`husbandry-${topic.slug}`}
            ctaText="Download Free"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Lizard.com Editorial — sourced from cited references"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <CalloutBox variant="evidence" title="Sourced from keeper-literature references">
          This guide synthesizes content from Mader&rsquo;s Reptile and Amphibian Medicine and
          Surgery (RAMS), the Journal of Herpetological Medicine and Surgery, ARAV continuing-
          education materials, and peer-reviewed Reptiles Magazine content. All measurement
          numbers cited are from the published literature, not in-house testing.
        </CalloutBox>

        <h2 id="what">What It Is</h2>
        <p>{topic.whatItIs}</p>

        <h2 id="why">Why It Matters</h2>
        <ul>
          {topic.whyItMatters.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2 id="species-class">By Species Class</h2>
        <p>
          Recommendations vary by the reptile&rsquo;s natural microhabitat. Use the class that best
          matches the species you keep; cross-check against the species-specific care guide for any
          fine-tuning before changing your setup.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          {topic.bySpeciesClass.map((s) => (
            <div
              key={s.class}
              style={{
                padding: '14px 16px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                {s.class}
              </div>
              <div style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'var(--brand-text-dark)' }}>
                {s.recommendation}
              </div>
            </div>
          ))}
        </div>

        <h2 id="mistakes">Common Mistakes</h2>
        <ul>
          {topic.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="buy">What to Buy</h2>
        <p>
          Categories below are described by what they do, not by a brand promise. Where we have an
          Amazon affiliate route registered, the &ldquo;Find&rdquo; link routes through Lizard.com&rsquo;s
          tracked redirect; otherwise it is a category-level note. See our affiliate disclosure for
          how these links work.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            margin: '12px 0 24px',
          }}
        >
          {topic.whatToBuy.map((p) => {
            const href = productHref(p.amazonAsin)
            return (
              <div
                key={p.item}
                style={{
                  padding: '14px 16px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '8px',
                  background: 'var(--brand-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                    fontSize: '15px',
                    lineHeight: 1.35,
                  }}
                >
                  {p.item}
                </div>
                <div
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--brand-text-mid)',
                    lineHeight: 1.45,
                  }}
                >
                  {p.purpose}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--brand-text-mid)',
                    marginTop: '4px',
                  }}
                >
                  Typical price: {p.priceRange}
                </div>
                {href && (
                  <Link
                    href={href}
                    rel="sponsored nofollow"
                    style={{
                      marginTop: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    Find on Amazon &rarr;
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {topic.measurementTools && topic.measurementTools.length > 0 && (
          <>
            <h3>Reference measurement tools</h3>
            <ul>
              {topic.measurementTools.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}

        <h2 id="monitor">How to Monitor</h2>
        <ol>
          {topic.howToMonitor.map((m) => (
            <li key={m} style={{ marginBottom: '6px' }}>
              {m}
            </li>
          ))}
        </ol>

        {related.length > 0 && (
          <>
            <h2 id="related">Related Husbandry Topics</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/husbandry/${r.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
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
                      marginBottom: '2px',
                    }}
                  >
                    {r.topicName}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {r.category}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} includeSchema={false} />

        <h2 id="sources">Sources</h2>
        <ul>
          {topic.citedSources.map((c) => (
            <li key={c.url}>
              <a href={c.url} target="_blank" rel="nofollow noreferrer">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
          This page is editorial reference content compiled from the cited herpetological-medicine
          and keeper-literature sources. It is not a substitute for veterinary diagnosis or
          treatment. For any significant reptile health concern, consult an ARAV-member or
          board-certified exotic-animal veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
