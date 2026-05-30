import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture,
} from '@carloOS/ui'
import { WEEKS, BUDGET_SUMMARIES } from '../../../../data/saltwater-starter'

const WEEK = WEEKS[0]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Saltwater Week 1 — Tank, Stand, Plumbing | Fish.com',
  description:
    'Week 1 of the reef-tank starter plan: tank sizing, stand requirements, and the most-regretted decision in saltwater.',
  path: '/saltwater-starter/week-1-tank-stand',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'fish-com',
    title: WEEK.title,
    description: WEEK.summary,
    url: 'https://fish.com/saltwater-starter/week-1-tank-stand',
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  }),
  buildBreadcrumbSchema([
    { name: 'Home', url: 'https://fish.com/' },
    {
      name: 'Saltwater Starter',
      url: 'https://fish.com/saltwater-starter',
    },
    {
      name: 'Week 1 — Tank, Stand, Plumbing',
      url: 'https://fish.com/saltwater-starter/week-1-tank-stand',
    },
  ]),
)

export default function Week1Page() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <SchemaScript schema={schema} />

      <nav aria-label="Breadcrumb" className="text-sm text-brand-text-light mb-4">
        <Link href="/" className="hover:text-brand-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/saltwater-starter" className="hover:text-brand-primary">
          Saltwater Starter
        </Link>
        <span className="mx-2">/</span>
        <span>Week 1</span>
      </nav>

      <div className="text-xs uppercase tracking-wide text-brand-text-light mb-2">
        Week {WEEK.weekNumber} of 4
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        {WEEK.title}
      </h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        {WEEK.summary}
      </p>

      <AffiliateDisclosure variant="banner" />

      {/* ─── Intro ────────────────────────────────────────────────────────── */}
      <section className="mt-8">
        <p className="text-brand-text-mid leading-relaxed">{WEEK.intro}</p>
      </section>

      {/* ─── Kit categories ───────────────────────────────────────────────── */}
      {WEEK.categories.map((cat) => (
        <section key={cat.name} className="mt-10">
          <h2 className="font-display text-2xl font-bold mb-2">{cat.name}</h2>
          <p className="text-brand-text-mid leading-relaxed mb-5">
            {cat.whyItMatters}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {BUDGET_SUMMARIES.map((b) => {
              const item = cat.items[b.tier]
              return (
                <div
                  key={b.tier}
                  className="border border-brand-border rounded-lg p-5 bg-brand-white flex flex-col"
                >
                  <div className="text-xs uppercase tracking-wide text-brand-text-light mb-1">
                    {b.label}
                  </div>
                  <div className="font-display text-lg font-bold mb-1">
                    {item.name}
                  </div>
                  {item.approxPriceUSD > 0 && (
                    <div className="text-sm text-brand-text-light mb-2">
                      ~${item.approxPriceUSD}
                    </div>
                  )}
                  <p className="text-sm text-brand-text-mid leading-relaxed mb-4 flex-1">
                    {item.rationale}
                  </p>
                  {item.approxPriceUSD > 0 && (
                    <a
                      href={`/go/${item.vendor}/${item.sku}?s=saltwater-week-1`}
                      rel="sponsored noopener"
                      className="inline-block text-center px-4 py-2 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
                    >
                      Check Price
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      ))}

      {/* ─── Common mistakes ──────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-4">
          Common Mistakes at This Stage
        </h2>
        <ul className="space-y-4">
          {WEEK.commonMistakes.map((m, i) => (
            <li
              key={i}
              className="border-l-4 border-brand-danger pl-4 py-1"
            >
              <div className="font-semibold text-brand-text-mid mb-1">
                ✗ {m.mistake}
              </div>
              <div className="text-sm text-brand-text-mid leading-relaxed">
                <strong className="text-brand-success">✓ Fix:</strong> {m.fix}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Readiness checklist ──────────────────────────────────────────── */}
      <section className="mt-12 bg-brand-bg rounded-lg p-6">
        <h2 className="font-display text-xl font-bold mb-3">
          Ready for Week 2?
        </h2>
        <p className="text-brand-text-mid mb-4">
          Confirm all of the following before moving to Week 2 (Lighting,
          Filtration, Flow):
        </p>
        <ul className="space-y-2 mb-6">
          {WEEK.readinessChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-brand-text-mid">
              <span className="text-brand-success">☐</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/saltwater-starter/week-2-lighting-filtration"
          className="inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
        >
          Continue to Week 2 →
        </Link>
      </section>

      {/* ─── Lead magnet ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          source="saltwater-week-1"
          title="Free: Reef Tank Setup Checklist"
          subtitle="The full 4-week checklist as a printable PDF."
          ctaText="Send me the checklist"
        />
      </section>
    </article>
  )
}
