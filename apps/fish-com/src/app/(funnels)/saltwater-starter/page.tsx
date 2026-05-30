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
import { WEEKS, BUDGET_SUMMARIES } from '../../../data/saltwater-starter'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Saltwater Aquarium Starter — Week-by-Week Setup Plan | Fish.com',
  description:
    'A 4-week saltwater reef-tank setup plan with kit picks at three budget tiers. From tank selection to first fish.',
  path: '/saltwater-starter',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'fish-com',
    title: 'Saltwater Aquarium Starter — Week-by-Week Setup Plan',
    description:
      'A 4-week saltwater reef-tank setup plan with kit picks at entry, mid, and expert budget tiers.',
    url: 'https://fish.com/saltwater-starter',
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  }),
  buildBreadcrumbSchema([
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Saltwater Starter', url: 'https://fish.com/saltwater-starter' },
  ]),
)

export default function SaltwaterStarterPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <SchemaScript schema={schema} />

      <nav aria-label="Breadcrumb" className="text-sm text-brand-text-light mb-4">
        <Link href="/" className="hover:text-brand-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Saltwater Starter</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        Saltwater Aquarium Starter — Your Week-by-Week Plan
      </h1>

      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        A 4-week setup plan from empty room to first fish, with kit picks at
        three budget tiers. Each week unlocks the next — skip a step and the
        tank fails. Stay on the plan and you&apos;ll be a reef-keeper with a
        stable, beautiful system within a month.
      </p>

      <AffiliateDisclosure variant="banner" />

      {/* ─── Budget tier overview ────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          Pick Your Budget Tier
        </h2>
        <p className="text-brand-text-mid mb-6">
          Every kit recommendation comes at three tiers. Pick the one that
          matches your budget; we won&apos;t sandbag the entry tier or oversell
          the expert tier.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {BUDGET_SUMMARIES.map((b) => (
            <div
              key={b.tier}
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

      {/* ─── Weekly plan ─────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-4">
          The 4-Week Plan
        </h2>
        <ol className="space-y-4">
          {WEEKS.map((w) => (
            <li
              key={w.slug}
              className="border border-brand-border rounded-lg p-5 bg-brand-white"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs uppercase tracking-wide text-brand-text-light">
                  Week {w.weekNumber}
                </span>
                <Link
                  href={`/saltwater-starter/${w.slug}`}
                  className="font-display text-xl font-bold hover:text-brand-primary"
                >
                  {w.title}
                </Link>
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed">
                {w.summary}
              </p>
              <Link
                href={`/saltwater-starter/${w.slug}`}
                className="inline-block mt-3 text-sm font-semibold text-brand-primary hover:underline"
              >
                Read Week {w.weekNumber} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Why we made this guide ──────────────────────────────────────── */}
      <section className="mt-12 bg-brand-bg rounded-lg p-6">
        <h2 className="font-display text-xl font-bold mb-3">
          Why This Guide Exists
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-3">
          Most reef-tank failures happen in the first 90 days. The failures
          aren&apos;t bad luck — they&apos;re predictable mistakes: wrong tank
          size, undersized skimmer, adding fish before the cycle finished,
          buying livestock before quarantine procedures are in place.
        </p>
        <p className="text-brand-text-mid leading-relaxed">
          This guide is the sequence we wish every new reef-keeper followed.
          Each week unlocks the next — the kit picks at the bottom of each
          week&apos;s page are the gear we&apos;d buy if we were starting over
          today.
        </p>
      </section>

      {/* ─── Lead magnet ─────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          source="saltwater-starter-landing"
          title="Free: Reef Tank Setup Checklist"
          subtitle="The exact week-by-week checklist as a printable PDF, plus our 5-email reef-keeping primer."
          ctaText="Send me the checklist"
        />
      </section>
    </article>
  )
}
