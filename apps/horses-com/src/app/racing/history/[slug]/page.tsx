/**
 * Horses.com Racing History spoke -- /racing/history/[slug]
 *
 * Long-form heritage explainer for each topic in the racing-history cluster:
 * a key-facts quick-reference, era-grouped sections, FAQ structured data, and
 * a references block sourced to real bodies. NON-WAGERING: no odds, picks, EV,
 * or handicapping. Superlatives are framed as widely-held opinion.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import {
  racingHistorySpokes,
  allRacingHistorySlugs,
  getRacingHistorySpoke,
} from '@/data/racing-history'

export function generateStaticParams() {
  return allRacingHistorySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const spoke = getRacingHistorySpoke(params.slug)
  if (!spoke) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Topic Not Found | Horses.com',
      description: 'This racing-history topic could not be found.',
      path: `/racing/history/${params.slug}`,
    })
  }
  return buildMetadata({
    siteId: 'horses-com',
    title: `${spoke.metaTitle} | Horses.com`,
    description: spoke.description,
    path: `/racing/history/${spoke.slug}`,
    type: 'article',
  })
}

export default function RacingHistorySpokePage({ params }: { params: { slug: string } }) {
  const spoke = getRacingHistorySpoke(params.slug)
  if (!spoke) notFound()

  const related = spoke.related
    .map((slug) => getRacingHistorySpoke(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: spoke.metaTitle,
    description: spoke.description,
    url: `https://horses.com/racing/history/${spoke.slug}`,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-06-08T00:00:00Z',
    modifiedAt: '2026-06-08T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: spoke.faq.map((f) => ({ question: f.question, answer: f.answerText })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://horses.com' },
      { name: 'Racing', url: 'https://horses.com/racing' },
      { name: 'History', url: 'https://horses.com/racing/history' },
      { name: spoke.title, url: `https://horses.com/racing/history/${spoke.slug}` },
    ],
  })

  const schema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  const tocItems = [
    ...spoke.sections.map((s) => ({ label: s.heading, href: `#${s.id}` })),
    { label: 'Frequently Asked', href: '#faq' },
    { label: 'References', href: '#references' },
  ]

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Image-first hero (StockImage via PremiumMasthead, attribution preserved) */}
      <PremiumMasthead
        manifestKey={spoke.manifestKey}
        fallbackKey="horses-com:hero"
        eyebrow={spoke.kicker}
        title={spoke.title}
        subtitle={spoke.heroSubtitle}
        alt={spoke.heroAlt}
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Racing History Hub', href: '/racing/history', category: 'Racing History' },
          ...related.map((x) => ({ title: x.title, href: `/racing/history/${x.slug}` })),
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: spoke.title,
          subtitle: spoke.intro,
          category: 'Racing History',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: spoke.readTime,
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'History', href: '/racing/history' },
          { name: spoke.title, href: `/racing/history/${spoke.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents items={tocItems} />
            <RelatedLinks
              title="Related History"
              links={[
                { label: 'Racing History Hub', href: '/racing/history' },
                ...related.map((x) => ({ label: x.title, href: `/racing/history/${x.slug}` })),
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Bloodstock & Breeding', href: '/bloodstock' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source={`racing-history-${spoke.slug}`}
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-08"
            updatedAt="2026-06-08"
            reviewedBy="Editorial team"
          />

          {/* Key facts quick-reference */}
          <div className="not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Quick Reference
            </div>
            <dl className="space-y-2 m-0">
              {spoke.keyFacts.map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-brand-dark sm:w-44 sm:shrink-0">{f.label}</dt>
                  <dd className="text-brand-text-mid m-0">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {spoke.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={spoke.faq} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            {spoke.references.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ol>

          <p className="text-xs text-brand-text-light mt-6">
            Heritage and educational content from Horses.com Editorial. This is not
            a wagering resource: no odds, picks, or handicapping guidance is
            provided. Superlatives are presented as widely-held opinion.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
