/**
 * Horses.com -- Great Racehorses spoke -- /racing/great-racehorses/[slug]
 *
 * Heritage career profile for each legendary Thoroughbred in the cluster:
 * a key-facts quick-reference, career-overview / signature-races / connections /
 * legacy sections, FAQ structured data, and a references block sourced to real
 * bodies. NON-WAGERING (QC §1): careers are presented as sporting/historical
 * achievement -- no odds, picks, EV, or handicapping. Superlatives are framed as
 * widely-held opinion.
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
import {
  allGreatRacehorseSlugs,
  getGreatRacehorse,
} from '@/data/great-racehorses'

export function generateStaticParams() {
  return allGreatRacehorseSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const horse = getGreatRacehorse(params.slug)
  if (!horse) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Profile Not Found | Horses.com',
      description: 'This racehorse profile could not be found.',
      path: `/racing/great-racehorses/${params.slug}`,
    })
  }
  return buildMetadata({
    siteId: 'horses-com',
    title: `${horse.metaTitle} | Horses.com`,
    description: horse.description,
    path: `/racing/great-racehorses/${horse.slug}`,
    type: 'article',
  })
}

export default function GreatRacehorseSpokePage({ params }: { params: { slug: string } }) {
  const horse = getGreatRacehorse(params.slug)
  if (!horse) notFound()

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: horse.metaTitle,
    description: horse.description,
    url: `https://horses.com/racing/great-racehorses/${horse.slug}`,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-06-08T00:00:00Z',
    modifiedAt: '2026-06-08T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: horse.faq.map((f) => ({ question: f.question, answer: f.answerText })),
  })

  const schema = combineSchemas(articleSchema, faqSchema)

  const tocItems = [
    ...horse.sections.map((s) => ({ label: s.heading, href: `#${s.id}` })),
    { label: 'Frequently Asked', href: '#faq' },
    { label: 'References', href: '#references' },
  ]

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Image-first hero (StockImage via PremiumMasthead, attribution preserved).
          Reuses the existing horses-com:racing manifest key with the synced
          horses-com:hero fallback — no new manifest keys introduced. */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow={horse.kicker}
        title={horse.heroTitle}
        subtitle={horse.heroSubtitle}
        alt={horse.heroAlt}
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'Great Racehorses Hub', href: '/racing/great-racehorses', category: 'Heritage Profiles' },
          ...horse.related.map((r) => ({ title: r.label, href: r.href })),
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: horse.heroTitle,
          subtitle: horse.intro,
          category: 'Heritage Profile',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: horse.readTime,
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Great Racehorses', href: '/racing/great-racehorses' },
          { name: horse.name, href: `/racing/great-racehorses/${horse.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents items={tocItems} />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Great Racehorses Hub', href: '/racing/great-racehorses' },
                ...horse.related,
                { label: 'Horse Racing Hub', href: '/racing' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source={`great-racehorses-${horse.slug}`}
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
              {horse.keyFacts.map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-brand-dark sm:w-44 sm:shrink-0">{f.label}</dt>
                  <dd className="text-brand-text-mid m-0">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {horse.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={horse.faq} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            {horse.references.map((ref) => (
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
