import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  AffiliateDisclosure,
  AffiliateLink,
  EmailCapture,
  buildMetadata,
} from '@carloOS/ui'
import { STATES, getState } from '@/data/states'
import { lendersLicensedIn } from '@/data/lenders'

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.code.toLowerCase() }))
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const s = getState(params.state)
  if (!s) {
    return buildMetadata({
      siteId: 'hardmoneyloans',
      title: 'State Not Found',
      description: 'State could not be found.',
      path: `/states/${params.state}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'hardmoneyloans',
    title: `Hard Money Loans in ${s.name} — Top Lenders 2026`,
    description: `Top private money lenders licensed in ${s.name}. Coverage notes, rate ranges by metro (${s.topMetros.slice(0,2).join(', ')}), and an editorial-ranked shortlist.`,
    path: `/states/${s.code.toLowerCase()}`,
    type: 'article',
  })
}

export default function StatePage({ params }: { params: { state: string } }) {
  const s = getState(params.state)
  if (!s) notFound()

  const lenders = lendersLicensedIn(s.code).sort((a, b) => b.editorialScore - a.editorialScore).slice(0, 5)

  return (
    <>
      <AffiliateDisclosure />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-container-wide">
          <div className="text-2xs uppercase tracking-wider text-brand-primary font-semibold mb-2">
            {s.code} · {s.marketPosture.replace('-', ' ')}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-3">
            Hard Money Loans in {s.name} — Top Lenders 2026
          </h1>
          <p className="text-lg text-white/75 max-w-3xl leading-relaxed">
            Top metros: {s.topMetros.join(', ')}. Editorial-ranked shortlist of {lenders.length} private lenders that fund investor deals in {s.name}.
          </p>
        </div>
      </section>

      {/* ── LICENSING NOTE ──────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold mb-2">Licensing & Regulatory Notes</h2>
          <p className="text-sm text-brand-text-mid leading-relaxed">{s.licensingNote}</p>
          <p className="text-2xs text-brand-text-light mt-3 italic">
            This is a high-level overview, not legal advice. Always confirm a lender&apos;s authorization in your state before submitting documents.
          </p>
        </div>
      </section>

      {/* ── LENDER SHORTLIST ────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-container-wide">
          <h2 className="font-display text-2xl font-bold mb-5">Top Lenders Active in {s.name}</h2>
          {lenders.length === 0 ? (
            <p className="text-sm text-brand-text-mid">
              No national lenders in our registry currently lend in {s.name}. Check back as we expand coverage.
            </p>
          ) : (
            <div className="space-y-4">
              {lenders.map((l, i) => (
                <div key={l.slug} className="bg-brand-white border border-brand-border rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-2xs uppercase tracking-wider text-brand-text-light mb-0.5">
                        #{i + 1} · Editorial Score {l.editorialScore.toFixed(1)}/10
                      </div>
                      <Link href={`/lenders/${l.slug}`} className="no-underline">
                        <h3 className="font-display text-xl font-bold text-brand-text-dark hover:underline">
                          {l.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-brand-text-mid mt-1.5 max-w-2xl leading-relaxed">
                        {l.positioning}
                      </p>
                      <div className="text-2xs text-brand-text-light mt-2 tabular-display">
                        Rate {l.rateMin.toFixed(2)}%–{l.rateMax.toFixed(2)}% · Max LTV {l.ltvMax}% · Term {l.termMonthsMin}–{l.termMonthsMax} mo
                      </div>
                    </div>
                    <AffiliateLink
                      vendor={l.vendor}
                      source={`state-${s.code.toLowerCase()}`}
                      eventLabel={`state-${s.code}-${l.slug}`}
                      className="shrink-0 self-center px-4 py-2 bg-brand-primary text-brand-white text-xs font-semibold rounded no-underline"
                    >
                      Get Quote
                    </AffiliateLink>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── QUIZ + EMAIL CAPTURE ─────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/quiz"
            className="bg-brand-dark text-brand-white rounded-lg p-6 no-underline block"
          >
            <h3 className="font-display text-xl font-bold mb-2">60-Second Lender Match</h3>
            <p className="text-sm text-white/70 mb-4">
              Answer 5 questions and see the lenders best matched to your deal in {s.name}.
            </p>
            <span className="inline-block px-4 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
              Take the Quiz
            </span>
          </Link>
          <div className="bg-brand-white border border-brand-border rounded-lg p-6">
            <h3 className="font-display text-xl font-bold mb-3">Free Weekly Market Update</h3>
            <p className="text-sm text-brand-text-mid mb-4">
              State-specific rate movements + lender program changes.
            </p>
            <EmailCapture
              siteId="hardmoneyloans"
              variant="inline"
              source={`hardmoneyloans:market-update:${s.code}`}
              ctaText="Subscribe"
            />
          </div>
        </div>
      </section>
    </>
  )
}
