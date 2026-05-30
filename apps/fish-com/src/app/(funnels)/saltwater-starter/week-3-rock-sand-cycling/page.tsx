import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { WEEKS } from '../../../../data/saltwater-starter'

const WEEK = WEEKS[2]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Saltwater Week 3 — Rock, Sand, and Cycling | Fish.com',
  description:
    'Week 3 of the reef-tank starter plan: live rock vs dry rock, substrate selection, and the 4-week cycling process.',
  path: '/saltwater-starter/week-3-rock-sand-cycling',
  type: 'article',
})

export default function Week3Page() {
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
        <span>Week 3</span>
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
          Detailed kit recommendations for rock, substrate, and cycling are
          being finalized. Subscribe below and we&apos;ll email you when this
          chapter ships.
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
