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
import { STARTER_KIT, BUDGET_SUMMARIES } from '../../../data/starter-kit'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Starter Kit — Everything You Need on Day 1 | Ferret.com',
  description:
    'The complete first-ferret shopping list: cage, food, bedding, litter, accessories. Three budget tiers, every pick justified.',
  path: '/ferret-starter-kit',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'ferret-com',
    title: 'Ferret Starter Kit — Everything You Need on Day 1',
    description:
      'The complete first-ferret shopping list with editorially-justified picks across cage, food, bedding, litter, and accessories.',
    url: 'https://ferret.com/ferret-starter-kit',
    imageUrl: '',
    authorName: 'Ferret.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  }),
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferret.com/' },
      {
        name: 'Ferret Starter Kit',
        url: 'https://ferret.com/ferret-starter-kit',
      },
    ],
  }),
)

export default function FerretStarterKitPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <SchemaScript schema={schema} />

      <nav aria-label="Breadcrumb" className="text-sm text-brand-text-light mb-4">
        <Link href="/" className="hover:text-brand-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Ferret Starter Kit</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        Ferret Starter Kit — Everything You Need Before Your Ferret Comes Home
      </h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        Bringing home a ferret without the right gear is the single most
        common reason new owners panic and rehome within 90 days. This is the
        shopping list we&apos;d hand to ourselves if we were starting over —
        broken into 5 categories at 3 budget tiers, with every pick justified.
      </p>

      <AffiliateDisclosure variant="inline" siteId="ferret-com" />

      {/* ─── Budget tier overview ────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          How Much You&apos;ll Actually Spend
        </h2>
        <p className="text-brand-text-mid mb-6">
          Pet-store starter kits underprice the real cost. The numbers below
          are honest totals at each tier — including the cage (the biggest
          line item).
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {BUDGET_SUMMARIES.map((b) => (
            <div
              key={b.label}
              className="border border-brand-border rounded-lg p-5 bg-brand-white"
            >
              <div className="text-xs uppercase tracking-wide text-brand-text-light mb-1">
                {b.label}
              </div>
              <div className="font-display text-2xl font-bold mb-2">
                {b.totalApprox}
              </div>
              <p className="text-sm text-brand-text-mid mb-3 leading-relaxed">
                {b.tagline}
              </p>
              <p className="text-xs text-brand-text-light">
                <strong className="text-brand-text-mid">Best for:</strong>{' '}
                {b.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Categories ───────────────────────────────────────────────────── */}
      {STARTER_KIT.map((cat) => (
        <section key={cat.slug} className="mt-12">
          <h2 className="font-display text-2xl font-bold mb-2">{cat.name}</h2>
          <p className="text-brand-text-mid leading-relaxed mb-5">
            {cat.whyItMatters}
          </p>

          <div className="grid gap-4">
            {cat.picks.map((item, idx) => (
              <div
                key={idx}
                className="border border-brand-border rounded-lg p-5 bg-brand-white flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="font-display text-lg font-bold mb-1">
                    {item.name}
                  </div>
                  <div className="text-sm text-brand-text-light mb-2">
                    ~${item.approxPriceUSD}
                  </div>
                  <p className="text-sm text-brand-text-mid leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
                <a
                  href={`/go/${item.vendor}/${encodeURIComponent(item.sku)}?s=starter-kit-${cat.slug}`}
                  rel="sponsored noopener"
                  className="inline-block whitespace-nowrap text-center px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors md:self-center"
                >
                  Check Price →
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ─── Insurance cross-link ─────────────────────────────────────────── */}
      <section className="mt-12 bg-brand-surface rounded-lg p-6 border-l-4 border-brand-primary">
        <h2 className="font-display text-xl font-bold mb-3">
          One More Thing: Insurance Before Symptoms
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-4">
          Ferrets have a notably high lifetime rate of expensive hereditary
          conditions (insulinoma, adrenal disease, lymphoma). Adrenal surgery
          alone runs $1,500–$3,500. Insurance is dramatically cheaper to buy
          BEFORE symptoms appear — exotic-pet policies will exclude conditions
          that have already been diagnosed.
        </p>
        <a
          href="https://vets.co/pet-insurance"
          rel="noopener"
          className="inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
        >
          Compare exotic-pet insurance →
        </a>
      </section>

      {/* ─── Lead magnet ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          source="ferret-starter-kit"
          title="Free: First-Year Ferret Care Checklist"
          subtitle="Vaccines, vet visits, dietary milestones, and warning signs to watch for — the first 12 months by week."
          ctaText="Email me the checklist"
        />
      </section>
    </article>
  )
}
