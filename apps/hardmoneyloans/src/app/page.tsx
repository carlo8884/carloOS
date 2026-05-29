/**
 * HardMoneyLoans.com — Homepage
 *
 * Sections:
 *   1. Hero + state selector
 *   2. Quick Quiz (client component)
 *   3. Comparison table (8 lenders)
 *   4. Educational section
 *   5. Trust signals + editorial standards link
 *
 * Wrapped in <AffiliateDisclosure> because all CTAs are affiliate links.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  AffiliateLink,
  AdSlot,
  EmailCapture,
  buildMetadata,
  FAQAccordion,
} from '@carloOS/ui'
import { LENDERS } from '@/data/lenders'
import { QuickQuiz } from './QuickQuiz'
import { StateSelector } from './StateSelector'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Hard Money Loans for Real Estate Investors — 2026 Lender Rankings',
  description:
    'Compare the top hard money lenders for fix-and-flip, BRRRR, bridge, and DSCR loans. Independent rankings, state-by-state guidance, and a 60-second match quiz.',
  path: '/',
  type: 'website',
})

const PRICE_FLOOR = process.env.NEXT_PUBLIC_HARDMONEY_LEAD_PRICE_FLOOR ?? '200'

const HOMEPAGE_FAQS = [
  {
    question: 'What is a hard money loan?',
    answer:
      'A hard money loan is short-term real estate financing secured by property rather than borrower credit. It typically funds in 7-21 days, runs 6-24 months, and is used by investors for fix-and-flip projects, bridge financing, or to acquire properties that don\'t qualify for conventional lending.',
  },
  {
    question: 'How do hard money loan rates compare to conventional mortgages?',
    answer:
      'Hard money rates currently run roughly 8%-13.5% versus the conventional 30-year owner-occupied range. The premium covers speed, asset-based underwriting, and lender risk. Most investors model the loan into deal returns rather than compare it head-to-head with a primary residence mortgage.',
  },
  {
    question: 'Do I need good credit to get a hard money loan?',
    answer:
      'Most private lenders look for a 660-680 minimum score, but the deal itself (LTV, after-repair value, exit strategy) carries more weight than for conventional loans. Some lenders fund deals with sub-660 credit when the equity cushion is strong and the borrower has flip experience.',
  },
  {
    question: 'How fast can I close on a hard money loan?',
    answer:
      'Experienced borrowers with clean title and complete documentation routinely close in 7-14 days. First-time borrowers usually take 14-21 days because additional verification, appraisal, and entity setup are required.',
  },
  {
    question: 'Are these rankings independent?',
    answer:
      'Rankings are editorial — we evaluate lenders on rate competitiveness, state coverage, product depth, transparency, and borrower track record. We earn referral fees when readers connect with lenders, but compensation does not affect rank order. Methodology is published at /editorial-standards.',
  },
]

export default function HomePage() {
  return (
    <>
      <AffiliateDisclosure />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white px-container sm:px-container-sm py-20">
        <div className="mx-auto max-w-container-wide">
          <span className="text-2xs uppercase tracking-eyebrow text-brand-primary font-semibold">
            Architect S11 · Hard Money Lender Marketplace
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mt-3 mb-5 max-w-4xl">
            Hard money loans for real estate investors — compare top lenders in 60 seconds.
          </h1>
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
            Independent rankings of {LENDERS.length} private lenders covering fix-and-flip, BRRRR, bridge, and DSCR rental loans. State-by-state licensing notes. No sales calls — quote requests go directly to the lender.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="/quiz"
              className="px-6 py-3 bg-brand-primary text-brand-white text-sm font-semibold rounded no-underline"
            >
              Take the 60-Second Quiz
            </Link>
            <Link
              href="/lenders"
              className="px-6 py-3 border border-white/25 text-brand-white text-sm font-semibold rounded no-underline"
            >
              Compare All Lenders
            </Link>
          </div>

          {/* State selector */}
          <div className="mt-10">
            <StateSelector />
          </div>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-2">
            60-Second Lender Match
          </h2>
          <p className="text-brand-text-mid mb-6 max-w-xl">
            Five questions — loan size, property type, purpose, state, credit range — and we surface the three lenders most likely to fund your deal.
          </p>
          <QuickQuiz />
        </div>
      </section>

      {/* ── AD SLOT ─────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-4">
        <div className="mx-auto max-w-3xl">
          <AdSlot slot="in-article" />
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-container-wide">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-2">
            Top {LENDERS.length} Hard Money Lenders — 2026 Comparison
          </h2>
          <p className="text-brand-text-mid mb-8 max-w-2xl">
            Editorial rankings updated quarterly. Rate ranges reflect lender-published floors and ceilings, not personalized quotes.
          </p>

          <div className="overflow-x-auto border border-brand-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-brand-surface">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Lender</th>
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Loan Range</th>
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Rate Range</th>
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Max LTV</th>
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Term</th>
                  <th className="px-4 py-3 font-semibold text-brand-text-dark">Score</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {LENDERS.sort((a, b) => b.editorialScore - a.editorialScore).map((l) => (
                  <tr key={l.slug} className="border-t border-brand-border">
                    <td className="px-4 py-3">
                      <Link href={`/lenders/${l.slug}`} className="font-semibold text-brand-text-dark no-underline hover:underline">
                        {l.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 tabular-display">
                      ${(l.loanMin / 1000).toFixed(0)}k–${(l.loanMax / 1_000_000).toFixed(1)}M
                    </td>
                    <td className="px-4 py-3 tabular-display">
                      {l.rateMin.toFixed(2)}%–{l.rateMax.toFixed(2)}%
                    </td>
                    <td className="px-4 py-3 tabular-display">{l.ltvMax}%</td>
                    <td className="px-4 py-3 tabular-display">
                      {l.termMonthsMin}–{l.termMonthsMax} mo
                    </td>
                    <td className="px-4 py-3 tabular-display font-semibold">{l.editorialScore.toFixed(1)}</td>
                    <td className="px-4 py-3">
                      <AffiliateLink
                        vendor={l.vendor}
                        source="homepage-comparison"
                        eventLabel={`compare-${l.slug}`}
                        className="px-3 py-1.5 bg-brand-primary text-brand-white text-2xs font-semibold rounded no-underline"
                      >
                        Get Quote
                      </AffiliateLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL ──────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-container-wide">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
            Learn Before You Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/guides/what-is-hard-money', title: 'What Is Hard Money?', desc: 'Primer for first-time borrowers — what it costs, how it differs from a mortgage, when it makes sense.' },
              { href: '/guides/fix-and-flip-financing', title: 'Fix-and-Flip Financing', desc: 'Use case deep-dive — how loan structure, rehab budget, and ARV interact.' },
              { href: '/guides/brrrr-strategy', title: 'BRRRR Strategy', desc: 'Hard money on the front end, DSCR refinance on the back end — the full loop.' },
              { href: '/guides/dscr-vs-hard-money', title: 'DSCR vs Hard Money', desc: 'Comparison of short-term private money and 30-year DSCR rental loans.' },
              { href: '/guides/how-to-qualify', title: 'How to Qualify', desc: 'Documents, credit, entity setup, and what underwriters actually want.' },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="block bg-brand-white rounded-lg border border-brand-border p-5 no-underline hover:shadow-card transition-shadow"
              >
                <h3 className="font-display text-lg font-bold mb-1.5">{g.title}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
            Frequently Asked
          </h2>
          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* ── TRUST + EMAIL CAPTURE ────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-3">
            Free Weekly Market Update
          </h2>
          <p className="text-white/75 mb-6">
            Top private money rates by state, lender program changes, and editorial notes — delivered every Monday. No spam.
          </p>
          <div className="bg-brand-white rounded-lg p-5 text-left">
            <EmailCapture
              siteId="hardmoneyloans"
              variant="inline"
              source="hardmoneyloans:market-update"
              ctaText="Subscribe"
            />
          </div>
          <p className="text-2xs text-white/55 mt-5">
            Editorial standards · Independent rankings · Lead quality floor ≥ ${PRICE_FLOOR}
          </p>
        </div>
      </section>
    </>
  )
}

