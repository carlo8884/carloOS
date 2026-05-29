import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  AffiliateDisclosure,
  AffiliateLink,
  FAQAccordion,
  buildMetadata,
} from '@carloOS/ui'
import { LENDERS, getLender } from '@/data/lenders'

export function generateStaticParams() {
  return LENDERS.map((l) => ({ slug: l.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLender(params.slug)
  if (!l) {
    return buildMetadata({
      siteId: 'hardmoneyloans',
      title: 'Lender Not Found',
      description: 'Lender profile could not be found.',
      path: `/lenders/${params.slug}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'hardmoneyloans',
    title: `${l.name} Review (2026) — Loans, Rates, Coverage`,
    description: `Independent review of ${l.name}. Loan range ${l.loanMin.toLocaleString()}–${l.loanMax.toLocaleString()}, rates ${l.rateMin}%–${l.rateMax}%, max LTV ${l.ltvMax}%. Editorial score ${l.editorialScore}/10.`,
    path: `/lenders/${l.slug}`,
    type: 'article',
  })
}

export default function LenderPage({ params }: { params: { slug: string } }) {
  const l = getLender(params.slug)
  if (!l) notFound()

  const related = LENDERS.filter((x) => x.slug !== l.slug)
    .filter((x) => x.specialties.some((s) => l.specialties.includes(s)))
    .sort((a, b) => b.editorialScore - a.editorialScore)
    .slice(0, 3)

  const faqs = [
    {
      question: `What types of loans does ${l.name} offer?`,
      answer: `${l.name} offers ${l.specialties.join(', ')} products for ${l.propertyTypes.join(', ')} property types.`,
    },
    {
      question: `What is ${l.name}'s loan range?`,
      answer: `${l.name} funds loans from $${l.loanMin.toLocaleString()} to $${l.loanMax.toLocaleString()}, with terms from ${l.termMonthsMin} to ${l.termMonthsMax} months.`,
    },
    {
      question: `What states does ${l.name} lend in?`,
      answer:
        l.stateCoverage === 'nationwide'
          ? `${l.name} lends nationwide${l.stateExclusions?.length ? `, with exclusions in: ${l.stateExclusions.join(', ')}` : ''}.`
          : `${l.name} lends in: ${l.stateCoverage.join(', ')}.`,
    },
    {
      question: `How does ${l.name} compare to other hard money lenders?`,
      answer: `${l.name} earned a CarloOS editorial score of ${l.editorialScore.toFixed(1)}/10. Strengths: ${l.pros.slice(0, 2).join('; ')}. Tradeoffs: ${l.cons.slice(0, 2).join('; ')}.`,
    },
  ]

  return (
    <>
      <AffiliateDisclosure />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-container-wide">
          <div className="text-2xs uppercase tracking-wider text-brand-primary font-semibold mb-2">
            Lender Profile · Editorial Score {l.editorialScore.toFixed(1)}/10
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-3">
            {l.name} Review
          </h1>
          <p className="text-lg text-white/75 max-w-3xl leading-relaxed mb-6">
            {l.positioning}
          </p>
          <AffiliateLink
            vendor={l.vendor}
            source="lender-hero"
            eventLabel={`hero-${l.slug}`}
            className="inline-block px-6 py-3 bg-brand-primary text-brand-white text-sm font-semibold rounded no-underline"
          >
            Get a Quote from {l.name}
          </AffiliateLink>
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-container-wide">
          <h2 className="font-display text-2xl font-bold mb-5">Quick Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Fact label="Loan Range" value={`$${(l.loanMin/1000).toFixed(0)}k–$${(l.loanMax/1_000_000).toFixed(1)}M`} />
            <Fact label="Rate Range" value={`${l.rateMin.toFixed(2)}%–${l.rateMax.toFixed(2)}%`} />
            <Fact label="Max LTV" value={`${l.ltvMax}%`} />
            <Fact label="Term Length" value={`${l.termMonthsMin}–${l.termMonthsMax} mo`} />
            <Fact label="States" value={l.stateCoverage === 'nationwide' ? 'Nationwide' : `${l.stateCoverage.length} states`} />
            <Fact label="Property Types" value={l.propertyTypes.join(', ')} />
            <Fact label="Founded" value={String(l.founded)} />
            <Fact label="Specialties" value={l.specialties.join(', ')} />
          </div>
          {l.stateExclusions && l.stateExclusions.length > 0 && (
            <p className="mt-4 text-2xs text-brand-text-light">
              State exclusions (best-effort summary): {l.stateExclusions.join(', ')}. Verify coverage at application.
            </p>
          )}
        </div>
      </section>

      {/* ── PROS / CONS ──────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-brand-success">Strengths</h3>
            <ul className="space-y-2">
              {l.pros.map((p, i) => (
                <li key={i} className="text-sm text-brand-text-mid leading-relaxed pl-4 relative">
                  <span className="absolute left-0 text-brand-success">+</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-brand-warning">Tradeoffs</h3>
            <ul className="space-y-2">
              {l.cons.map((c, i) => (
                <li key={i} className="text-sm text-brand-text-mid leading-relaxed pl-4 relative">
                  <span className="absolute left-0 text-brand-warning">−</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── BEST FOR ─────────────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-container-wide">
          <h2 className="font-display text-2xl font-bold mb-4">Best For</h2>
          <ul className="space-y-2 max-w-2xl">
            {l.bestFor.map((b, i) => (
              <li key={i} className="text-sm text-brand-text-mid leading-relaxed pl-4 relative">
                <span className="absolute left-0 text-brand-primary">·</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-4">{l.name} FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to apply?</h2>
          <p className="text-white/75 mb-5">
            Quote requests route directly to {l.name}. Or capture a quote through our lead form — we&apos;ll relay it to {l.name} and follow up.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <AffiliateLink
              vendor={l.vendor}
              source="lender-cta"
              eventLabel={`cta-${l.slug}`}
              className="px-6 py-3 bg-brand-primary text-brand-white text-sm font-semibold rounded no-underline"
            >
              Apply Directly with {l.name}
            </AffiliateLink>
            <Link
              href={`/quote/${l.slug}`}
              className="px-6 py-3 border border-white/25 text-brand-white text-sm font-semibold rounded no-underline"
            >
              Request a Quote via HardMoneyLoans
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-brand-white px-container sm:px-container-sm py-12">
          <div className="mx-auto max-w-container-wide">
            <h2 className="font-display text-2xl font-bold mb-4">Related Lenders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/lenders/${r.slug}`}
                  className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:shadow-card transition-shadow"
                >
                  <h3 className="font-display font-bold text-brand-text-dark">{r.name}</h3>
                  <div className="text-2xs uppercase tracking-wider text-brand-text-light mt-0.5">
                    Score {r.editorialScore.toFixed(1)}/10
                  </div>
                  <p className="text-xs text-brand-text-mid mt-2 leading-relaxed line-clamp-3">{r.positioning}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-brand-border rounded p-3">
      <div className="text-2xs uppercase tracking-wider text-brand-text-light mb-1">{label}</div>
      <div className="text-sm font-semibold text-brand-text-dark tabular-display">{value}</div>
    </div>
  )
}
