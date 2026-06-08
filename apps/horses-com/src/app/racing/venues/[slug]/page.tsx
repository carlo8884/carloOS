/**
 * Horses.com -- Racing Venue spoke -- /racing/venues/[slug]
 *
 * Educational venue guide for each iconic American Thoroughbred racetrack in
 * the cluster: a key-facts quick-reference, history / the-track / signature-race
 * / notable-moments / spectator-experience sections, FAQ structured data, and a
 * references block sourced to real institutions.
 *
 * HARD WAGERING BAN (CSRO / QC §1): venues are presented as places of history,
 * architecture, tradition, and spectacle -- NO odds, picks, EV/fair-odds,
 * sportsbook/ADW links, betting strategy, racecards, or ratings engines.
 *
 * Breadcrumbs are provided to ArticleLayout via the `breadcrumbs` prop ONLY.
 * The shared ArticleLayout/Breadcrumb is the single breadcrumb source: it
 * auto-derives the BreadcrumbList JSON-LD from the prop, so this page does NOT
 * hand-build a buildBreadcrumbSchema (that would double-emit).
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { allRacingVenueSlugs, getRacingVenue } from '@/data/racing-venues'

export function generateStaticParams() {
  return allRacingVenueSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const venue = getRacingVenue(params.slug)
  if (!venue) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Venue Not Found | Horses.com',
      description: 'This racing venue guide could not be found.',
      path: `/racing/venues/${params.slug}`,
    })
  }
  return buildMetadata({
    siteId: 'horses-com',
    title: venue.metaTitle,
    description: venue.description,
    path: `/racing/venues/${venue.slug}`,
    type: 'article',
  })
}

export default function RacingVenueSpokePage({ params }: { params: { slug: string } }) {
  const venue = getRacingVenue(params.slug)
  if (!venue) notFound()

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: venue.metaTitle,
    description: venue.description,
    url: `https://horses.com/racing/venues/${venue.slug}`,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-06-08T00:00:00Z',
    modifiedAt: '2026-06-08T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: venue.faq.map((f) => ({ question: f.question, answer: f.answerText })),
  })

  // NOTE: no buildBreadcrumbSchema here. ArticleLayout derives the
  // BreadcrumbList from the `breadcrumbs` prop below (single breadcrumb source).
  const schema = combineSchemas(articleSchema, faqSchema)

  const tocItems = [
    ...venue.sections.map((s) => ({ label: s.heading, href: `#${s.id}` })),
    { label: 'Frequently Asked', href: '#faq' },
    { label: 'References', href: '#references' },
  ]

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Image-first hero. Reuses the existing horses-com:racing manifest key
          with the synced horses-com:hero fallback -- no new manifest keys. */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow={venue.kicker}
        title={venue.heroTitle}
        subtitle={venue.heroSubtitle}
        alt={venue.heroAlt}
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'Racing Venues Hub', href: '/racing/venues', category: 'Venue Guides' },
          ...venue.related.map((r) => ({ title: r.label, href: r.href })),
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: venue.heroTitle,
          subtitle: venue.intro,
          category: 'Venue Guide',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: venue.readTime,
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Venues', href: '/racing/venues' },
          { name: venue.shortName, href: `/racing/venues/${venue.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents items={tocItems} />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Racing Venues Hub', href: '/racing/venues' },
                ...venue.related,
                { label: 'Horse Racing Hub', href: '/racing' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source={`racing-venues-${venue.slug}`}
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
              {venue.keyFacts.map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-brand-dark sm:w-44 sm:shrink-0">{f.label}</dt>
                  <dd className="text-brand-text-mid m-0">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {venue.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={venue.faq} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            {venue.references.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ol>

          <p className="text-xs text-brand-text-light mt-6">
            Educational venue content from Horses.com Editorial. This is not a
            wagering resource: no odds, picks, or handicapping guidance is
            provided. Historical and architectural details reflect
            well-established public record.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
