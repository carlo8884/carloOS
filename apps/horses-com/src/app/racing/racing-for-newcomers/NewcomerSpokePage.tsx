/**
 * Shared spoke renderer for the Racing for Newcomers cluster.
 *
 * The three spokes (how-to-read-a-race-card, a-day-at-the-races,
 * understanding-racing-silks) are distinct named routes that share one layout:
 * masthead, key-facts quick-reference, body sections, FAQ, references. This
 * component renders any NewcomerSpoke so each route file stays a thin wrapper.
 *
 * NON-WAGERING (QC §1): every spoke carries an explicit non-betting closing note.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import {
  ArticleLayout,
  ArticleByline,
  CrossPortfolioCard,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  AffiliateDisclosure,
  ShopCtas,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import type { NewcomerSpoke } from '@/data/racing-for-newcomers'

export function NewcomerSpokePage({ spoke }: { spoke: NewcomerSpoke }) {
  const url = `https://horses.com/racing/racing-for-newcomers/${spoke.slug}`

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: spoke.metaTitle,
    description: spoke.description,
    url,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-06-08T00:00:00Z',
    modifiedAt: '2026-06-08T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: spoke.faq.map((f) => ({ question: f.question, answer: f.answerText })),
  })

  // BreadcrumbList JSON-LD is auto-derived by <ArticleLayout> from the
  // complete `breadcrumbs` prop below (each item has a real href), so we do
  // NOT build one here — emitting it both places produced a duplicate
  // BreadcrumbList. Passing this combined schema into ArticleLayout's `schema`
  // prop lets its dedup logic own breadcrumb emission: exactly one per spoke.
  const schema = combineSchemas(articleSchema, faqSchema)

  const tocItems = [
    ...spoke.sections.map((s) => ({ label: s.heading, href: `#${s.id}` })),
    { label: 'Frequently Asked', href: '#faq' },
    { label: 'References', href: '#references' },
  ]

  return (
    <>
      {/* Image-first hero. Reuses the existing horses-com:racing manifest key
          with the synced horses-com:hero fallback — no new manifest keys. */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow={spoke.kicker}
        title={spoke.heroTitle}
        subtitle={spoke.heroSubtitle}
        alt={spoke.heroAlt}
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        schema={schema}
        relatedLinks={[
          { title: 'Racing for Newcomers Hub', href: '/racing/racing-for-newcomers', category: 'For Newcomers' },
          ...spoke.related.map((r) => ({ title: r.label, href: r.href })),
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: spoke.heroTitle,
          subtitle: spoke.intro,
          category: 'Racing for Newcomers',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: spoke.readTime,
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Racing for Newcomers', href: '/racing/racing-for-newcomers' },
          { name: spoke.name, href: `/racing/racing-for-newcomers/${spoke.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents items={tocItems} />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Racing for Newcomers Hub', href: '/racing/racing-for-newcomers' },
                ...spoke.related,
                { label: 'Horse Racing Hub', href: '/racing' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />

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
            Spectator-education content from Horses.com Editorial. This is not a
            wagering resource: no odds, picks, selections, or handicapping guidance
            is provided or implied. Program information is explained only as
            information about the horses and the race. If you choose to wager, that
            is a separate activity governed by your jurisdiction&apos;s racing or
            gaming authority.
          </p>

          {spoke.slug === 'how-to-read-a-race-card' ? (
            <>
              <AffiliateDisclosure variant="inline" siteId="horses-com" />

              {/* Money path — live amazon-brand search hops
                  (laminated horse race-card-field chart /
                  horse stall-door form-line card /
                  equine program-literacy handbook).
                  No existing product hop to keep.
                  Educational barn searches only; no Rx /
                  vaccine / flea / heartworm / nsaid hops.
                  ShopCtas hides empty Chewy; never href="#"
                  or PLACEHOLDER. Unused vs racing-for-newcomers
                  hub / racing-bloodstock hops.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop related supplies
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+supplies?s=racing-for-newcomers-how-to-read-a-race-card"
                    amazonLabel="Shop on Amazon"
                  />
          </div>
              </div>
            </>
          ) : null}

          {spoke.slug === 'a-day-at-the-races' ? (
            <>
              <AffiliateDisclosure variant="inline" siteId="horses-com" />

              {/* Money path — live amazon-brand search hops
                  (laminated horse raceday-paddock-ring chart /
                  horse stall-door call-to-post card /
                  equine raceday-etiquette handbook).
                  No existing product hop to keep.
                  Educational barn searches only; no Rx /
                  vaccine / flea / heartworm / nsaid hops.
                  ShopCtas hides empty Chewy; never href="#"
                  or PLACEHOLDER. Unused vs how-to-read-a-race-card
                  / racing-for-newcomers hub hops.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop related supplies
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+supplies?s=racing-for-newcomers-a-day-at-the-races"
                    amazonLabel="Shop on Amazon"
                  />
          </div>
              </div>
            </>
          ) : null}

          {spoke.slug === 'understanding-racing-silks' ? (
            <>
              <AffiliateDisclosure variant="inline" siteId="horses-com" />

              {/* Money path — live amazon-brand search hops
                  (laminated horse owner-silks-pattern chart /
                  horse stall-door saddlecloth-number card /
                  equine racing-colours-register handbook).
                  No existing product hop to keep.
                  Educational barn searches only; no Rx /
                  vaccine / flea / heartworm / nsaid hops.
                  ShopCtas hides empty Chewy; never href="#"
                  or PLACEHOLDER. Unused vs a-day-at-the-races
                  / how-to-read-a-race-card / newcomers-hub hops.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop related supplies
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+supplies?s=racing-for-newcomers-understanding-racing-silks"
                    amazonLabel="Shop on Amazon"
                  />
          </div>
              </div>
            </>
          ) : null}
        </div>
      </ArticleLayout>
    </>
  )
}
