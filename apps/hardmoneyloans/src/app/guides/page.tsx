import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Hard Money Lending Guides',
  description: 'Plain-language guides on hard money loans, fix-and-flip financing, BRRRR strategy, DSCR comparisons, and qualification.',
  path: '/guides',
})

const GUIDES = [
  { href: '/guides/what-is-hard-money', title: 'What Is a Hard Money Loan?', desc: 'Plain-language primer for first-time borrowers.' },
  { href: '/guides/fix-and-flip-financing', title: 'Fix-and-Flip Financing', desc: 'How rehab budget, ARV, and exit timing affect the loan.' },
  { href: '/guides/brrrr-strategy', title: 'The BRRRR Strategy', desc: 'Hard money on the front end, DSCR refinance on the back end.' },
  { href: '/guides/dscr-vs-hard-money', title: 'DSCR vs Hard Money', desc: 'When each product fits — and when they overlap.' },
  { href: '/guides/how-to-qualify', title: 'How to Qualify', desc: 'Documents, credit, entity setup, and what underwriters want.' },
]

export default function GuidesIndex() {
  return (
    <section className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-container-wide">
        <h1 className="font-display text-4xl font-black tracking-tight mb-8">Hard Money Lending Guides</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:shadow-card transition-shadow"
            >
              <h2 className="font-display text-xl font-bold text-brand-text-dark mb-1.5">{g.title}</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
