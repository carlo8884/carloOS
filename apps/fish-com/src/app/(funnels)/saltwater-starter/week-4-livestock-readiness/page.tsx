import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { WEEKS } from '../../../../data/saltwater-starter'

const WEEK = WEEKS[3]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Saltwater Week 4 — Adding Livestock Safely | Fish.com',
  description:
    'Week 4 of the reef-tank starter plan: cleanup crew first, first fish, quarantine protocols, and coral readiness.',
  path: '/saltwater-starter/week-4-livestock-readiness',
  type: 'article',
})

export default function Week4Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-brand-text-light mb-4">
        <Link href="/" className="hover:text-brand-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/saltwater-starter" className="hover:text-brand-primary">
          Saltwater Starter
        </Link>
        <span className="mx-2">/</span>
        <span>Week 4</span>
      </nav>

      <div className="text-xs uppercase tracking-wide text-brand-text-light mb-2">
        Week {WEEK.weekNumber} of 4
      </div>
      <h1 className="font-display text-4xl font-bold mb-3">{WEEK.title}</h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        {WEEK.summary}
      </p>

      <div className="bg-brand-bg rounded-lg p-6 my-8">
        <p className="text-brand-text-mid">
          Detailed livestock recommendations, quarantine setup, and
          coral-readiness criteria are being finalized. Subscribe below and
          we&apos;ll email you when this chapter ships.
        </p>
      </div>

      <p className="text-brand-text-mid leading-relaxed mb-6">{WEEK.intro}</p>

      <Link
        href="/saltwater-starter"
        className="text-sm font-semibold text-brand-primary hover:underline"
      >
        ← Back to the 4-week plan
      </Link>
    </article>
  )
}
