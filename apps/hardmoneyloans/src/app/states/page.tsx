import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { STATES } from '@/data/states'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Hard Money Loans by State — Complete Directory',
  description: `Find hard money lenders licensed in your state. Coverage maps, licensing notes, and top regional metros for all ${STATES.length} states plus DC.`,
  path: '/states',
  type: 'website',
})

export default function StatesDirectoryPage() {
  return (
    <section className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-container-wide">
        <h1 className="font-display text-4xl font-black tracking-tight mb-3">
          Hard Money Lenders by State
        </h1>
        <p className="text-brand-text-mid max-w-2xl mb-10">
          Every state has different licensing and regulatory posture for private real estate lending. Click a state for licensed lenders, top metros, and editorial notes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {STATES.map((s) => (
            <Link
              key={s.code}
              href={`/states/${s.code.toLowerCase()}`}
              className="bg-brand-white border border-brand-border rounded p-3 text-center no-underline hover:bg-brand-surface transition-colors"
            >
              <div className="font-display font-bold text-brand-text-dark">{s.name}</div>
              <div className="text-2xs uppercase tracking-wider text-brand-text-light mt-0.5">{s.code}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
