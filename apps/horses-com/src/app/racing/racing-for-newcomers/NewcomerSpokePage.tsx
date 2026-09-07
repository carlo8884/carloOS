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
  EmailCapture,
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
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source={`racing-for-newcomers-${spoke.slug}`}
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

          {spoke.slug === 'how-to-read-a-race-card' ? (
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the how-to-read-a-race-card checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                How-to-read-a-race-card checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the laminated-horse-race-card-field-chart,
                stall-door-form-line-card, and
                equine-program-literacy-handbook notes
                that match the field-by-field program,
                form-line / connections, and spectator-
                literacy copy on this page — a laminated
                horse race-card-field chart so the distance /
                class / weights notes are posted on the stall
                door (not a barn-newcomer-race-card chart, not
                a yearling-sale-catalog chart), a horse
                stall-door form-line card so the past-performance
                / box-score notes are labeled at the barn (not
                a paddock-parade card, not an RNA-clearance
                card), and an equine program-literacy handbook
                so the spectator / non-wagering grounding is a
                physical barn book (not a silks-literacy
                handbook, not a bloodstock-agent handbook).
                Educational barn checklist, not a ranked race
                list, not a first-aid-kit hop, and not a
                substitute for a veterinarian. Horses.com does
                not sell insurance. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="horses-com"
                title="How-to-read-a-race-card checklist"
                subtitle="Email the race-card-field chart, form-line card, and program-literacy handbook notes. No spam."
                ctaText="Email my how-to-read-a-race-card checklist"
                source="racing-for-newcomers-how-to-read-a-race-card-under-hero"
              />
            </div>
          ) : null}

          {spoke.slug === 'a-day-at-the-races' ? (
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the a-day-at-the-races checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                A-day-at-the-races checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the laminated-horse-raceday-paddock-ring-chart,
                stall-door-call-to-post-card, and
                equine-raceday-etiquette-handbook notes
                that match the paddock / parade-ring, call-to-post
                / bugle, and etiquette / first-visit copy on this
                page — a laminated horse raceday-paddock-ring
                chart so the walking-ring / rail notes are posted
                on the stall door (not a race-card-field chart,
                not a barn-newcomer-race-card chart), a horse
                stall-door call-to-post card so the bugle /
                starting-gate notes are labeled at the barn (not
                a form-line card, not a paddock-parade card),
                and an equine raceday-etiquette handbook so the
                dress / family-friendly grounding is a physical
                barn book (not a program-literacy handbook, not
                a silks-literacy handbook). Educational barn
                checklist, not a ranked race list, not a
                first-aid-kit hop, and not a substitute for a
                veterinarian. Horses.com does not sell insurance.
                No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="horses-com"
                title="A-day-at-the-races checklist"
                subtitle="Email the raceday-paddock-ring chart, call-to-post card, and raceday-etiquette handbook notes. No spam."
                ctaText="Email my a-day-at-the-races checklist"
                source="racing-for-newcomers-a-day-at-the-races-under-hero"
              />
            </div>
          ) : null}

          {spoke.slug === 'understanding-racing-silks' ? (
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the understanding-racing-silks checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Understanding-racing-silks checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the laminated-horse-owner-silks-pattern-chart,
                stall-door-saddlecloth-number-card, and
                equine-racing-colours-register-handbook notes
                that match the owner-registered-colours / pattern,
                saddlecloth-number, and Jockey-Club-registration
                copy on this page — a laminated horse owner-silks
                pattern chart so the hooped / striped / chevroned
                notes are posted on the stall door (not a
                raceday-paddock-ring chart, not a race-card-field
                chart), a horse stall-door saddlecloth-number
                card so the follow-the-field notes are labeled
                at the barn (not a call-to-post card, not a
                form-line card), and an equine racing-colours
                register handbook so the owner-livery grounding
                is a physical barn book (not a raceday-etiquette
                handbook, not a silks-literacy handbook).
                Educational barn checklist, not a ranked race
                list, not a first-aid-kit hop, and not a
                substitute for a veterinarian. Horses.com does
                not sell insurance. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="horses-com"
                title="Understanding-racing-silks checklist"
                subtitle="Email the owner-silks-pattern chart, saddlecloth-number card, and racing-colours-register handbook notes. No spam."
                ctaText="Email my understanding-racing-silks checklist"
                source="racing-for-newcomers-understanding-racing-silks-under-hero"
              />
            </div>
          ) : null}

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
                  Directory import left untouched.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the how-to-read-a-race-card barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the
                  on-page field-by-field program, form-line /
                  connections, and spectator-literacy copy — a
                  laminated horse race-card-field chart, a
                  horse stall-door form-line card, and an
                  equine program-literacy handbook. Educational
                  barn searches only. They are not a ranked
                  race list, they are not a racing-for-newcomers
                  hub / racing-bloodstock hop, they are not a
                  first-aid-kit hop, they are not a child
                  toothbrush hop, and they do not replace a
                  veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                  Empty Chewy buttons stay hidden.
                </p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+race+card+field+chart?s=racing-for-newcomers-how-to-read-a-race-card"
                    amazonLabel="Browse laminated horse race-card-field charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+form+line+card?s=racing-for-newcomers-how-to-read-a-race-card"
                    amazonLabel="Browse horse stall-door form-line cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+program+literacy+handbook?s=racing-for-newcomers-how-to-read-a-race-card"
                    amazonLabel="Browse equine program-literacy handbooks on Amazon →"
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
                  Directory import left untouched.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the a-day-at-the-races barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the
                  on-page paddock / parade-ring, call-to-post /
                  bugle, and etiquette / first-visit copy — a
                  laminated horse raceday-paddock-ring chart, a
                  horse stall-door call-to-post card, and an
                  equine raceday-etiquette handbook. Educational
                  barn searches only. They are not a ranked
                  race list, they are not a how-to-read-a-race-card
                  / racing-for-newcomers-hub hop, they are not a
                  first-aid-kit hop, they are not a child
                  toothbrush hop, and they do not replace a
                  veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                  Empty Chewy buttons stay hidden.
                </p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+raceday+paddock+ring+chart?s=racing-for-newcomers-a-day-at-the-races"
                    amazonLabel="Browse laminated horse raceday-paddock-ring charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+call+to+post+card?s=racing-for-newcomers-a-day-at-the-races"
                    amazonLabel="Browse horse stall-door call-to-post cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+raceday+etiquette+handbook?s=racing-for-newcomers-a-day-at-the-races"
                    amazonLabel="Browse equine raceday-etiquette handbooks on Amazon →"
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
                  Directory import left untouched.
                  Do not re-open #1165 / what-to-expect. */}
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the understanding-racing-silks barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the
                  on-page owner-registered-colours / pattern,
                  saddlecloth-number, and Jockey-Club-
                  registration copy — a laminated horse
                  owner-silks-pattern chart, a horse stall-door
                  saddlecloth-number card, and an equine
                  racing-colours-register handbook. Educational
                  barn searches only. They are not a ranked
                  race list, they are not an a-day-at-the-races
                  / how-to-read-a-race-card hop, they are not a
                  first-aid-kit hop, they are not a child
                  toothbrush hop, and they do not replace a
                  veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                  Empty Chewy buttons stay hidden.
                </p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+owner+silks+pattern+chart?s=racing-for-newcomers-understanding-racing-silks"
                    amazonLabel="Browse laminated horse owner-silks-pattern charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+saddlecloth+number+card?s=racing-for-newcomers-understanding-racing-silks"
                    amazonLabel="Browse horse stall-door saddlecloth-number cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+racing+colours+register+handbook?s=racing-for-newcomers-understanding-racing-silks"
                    amazonLabel="Browse equine racing-colours-register handbooks on Amazon →"
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
