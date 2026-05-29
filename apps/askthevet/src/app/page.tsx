/**
 * AskTheVet.com Homepage — /
 * Hero triage form + "Common questions answered" SEO block + FTC disclosure banner.
 * Server component. The form itself is the client TriageForm.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'
import { TriageForm } from './TriageForm'
import { SAMPLE_QUERIES, SYMPTOM_PAGES } from '@/data/symptoms'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet — AI Pet Symptom Checker & Triage',
  description:
    'Describe a symptom, get a fast triage assessment — home care, telehealth, or emergency vet. Built to route pet owners to the right care path in seconds.',
  path: '/',
  type: 'website',
})

function slugify(q: string) {
  // Map a sample query to its closest SYMPTOM_PAGES slug if any, else /symptom.
  const norm = q.toLowerCase()
  const match = SYMPTOM_PAGES.find((p) =>
    norm.includes(p.question.toLowerCase().split(' ').slice(0, 3).join(' ')),
  )
  return match ? `/symptom/${match.slug}` : '/symptom'
}

export default function HomePage() {
  return (
    <>
      <AffiliateDisclosure variant="banner" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-primary-pale border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
            AI Pet Symptom Checker
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text-dark mb-4 max-w-3xl">
            Is this an emergency, a vet visit, or something you can manage at home?
          </h1>
          <p className="text-base sm:text-lg text-brand-text-mid max-w-2xl mb-8">
            Describe what your pet is doing. We&apos;ll give you a plain-language triage assessment and concrete next steps in seconds.
          </p>

          <TriageForm />

          <p className="mt-6 text-xs text-brand-text-light max-w-2xl">
            AskTheVet provides consumer health information, not veterinary advice. Always consult a licensed veterinarian for diagnosis and treatment. In a life-threatening emergency, contact your nearest emergency vet immediately.
          </p>
        </div>
      </section>

      {/* ── COMMON QUESTIONS — 3 columns × 4 rows = 12 sample queries ────── */}
      <section className="bg-brand-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-dark mb-2">
              Common questions answered
            </h2>
            <p className="text-base text-brand-text-light">
              Tap any question to get a fast triage read. These are the symptoms owners search most.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SAMPLE_QUERIES.map((sample, i) => (
              <li key={i}>
                <Link
                  href={slugify(sample.q)}
                  className="block p-4 rounded-md border border-brand-border bg-brand-white hover:border-brand-primary hover:bg-brand-primary-pale transition-colors no-underline"
                >
                  <span className="block text-xs font-medium uppercase tracking-wide text-brand-primary mb-1">
                    {sample.species}
                  </span>
                  <span className="block text-sm font-medium text-brand-text-dark">
                    {sample.q}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-brand-surface border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-dark mb-8 text-center">
            How AskTheVet works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="p-6 rounded-lg bg-brand-white border border-brand-border">
              <div className="text-3xl font-bold text-brand-primary mb-2">1</div>
              <h3 className="font-semibold text-brand-text-dark mb-2">Describe the symptom</h3>
              <p className="text-sm text-brand-text-mid">Tell us what your pet is doing, when it started, and the species.</p>
            </li>
            <li className="p-6 rounded-lg bg-brand-white border border-brand-border">
              <div className="text-3xl font-bold text-brand-primary mb-2">2</div>
              <h3 className="font-semibold text-brand-text-dark mb-2">Get a triage level</h3>
              <p className="text-sm text-brand-text-mid">Home care, non-urgent vet, or emergency — with the reasoning behind it.</p>
            </li>
            <li className="p-6 rounded-lg bg-brand-white border border-brand-border">
              <div className="text-3xl font-bold text-brand-primary mb-2">3</div>
              <h3 className="font-semibold text-brand-text-dark mb-2">Take the next step</h3>
              <p className="text-sm text-brand-text-mid">Find a vet, book telehealth, or get the supplies you need — fast.</p>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
