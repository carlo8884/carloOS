/**
 * /result/[id] — renders a stored triage assessment with monetization CTAs.
 *
 * The CTAs route per the response's monetization signals:
 *   - insurance_relevant → Lemonade / Pumpkin / ManyPets
 *   - non_urgent_vet     → Vetster / Dutch (telehealth)
 *   - product recommendations → Chewy + Amazon
 *   - urgent_er         → Find-a-vet directory
 *
 * FTC disclosure banner sits above the fold. Email capture is below the CTAs.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  AffiliateLink,
  AffiliateDisclosure,
  EmailCapture,
} from '@carloOS/ui'
import { getTriageQuery } from '@/lib/supabase'
import type { TriageResponse } from '@/lib/triage-prompt'

interface PageProps {
  params: { id: string }
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return buildMetadata({
    siteId: 'askthevet',
    title: 'Your triage assessment',
    description: 'AI-powered pet symptom triage with next steps and care options.',
    path: `/result/${params.id}`,
    type: 'article',
    noIndex: true, // private assessment — don't index per-user pages
  })
}

const TRIAGE_LABEL: Record<TriageResponse['triage_level'], { label: string; tone: string }> = {
  home_care: { label: 'Home care', tone: 'triage-home_care' },
  non_urgent_vet: { label: 'Non-urgent vet visit', tone: 'triage-non_urgent_vet' },
  urgent_er: { label: 'EMERGENCY — go to an ER vet now', tone: 'triage-urgent_er' },
}

export default async function ResultPage({ params }: PageProps) {
  const stored = await getTriageQuery(params.id)
  if (!stored) notFound()

  const response = stored.response_json as TriageResponse
  const level = response.triage_level
  const tone = TRIAGE_LABEL[level] ?? TRIAGE_LABEL.non_urgent_vet

  return (
    <>
      <AffiliateDisclosure variant="banner" />

      <article className="max-w-3xl mx-auto px-6 py-10">
        {/* FTC + medical disclaimer — above the fold */}
        <div className="rounded-md border border-brand-warning/30 bg-brand-warning/5 px-4 py-3 mb-6 text-sm text-brand-text-mid">
          <strong className="text-brand-text-dark">Important:</strong>{' '}
          {response.disclaimer}
        </div>

        {/* Triage badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${tone.tone}`}
          >
            {tone.label}
          </span>
        </div>

        {/* Original question */}
        <p className="text-sm text-brand-text-light mb-2">
          <span className="font-semibold text-brand-text-mid">{stored.species}:</span>{' '}
          {stored.question}
        </p>

        {/* Summary */}
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-text-dark mb-3 leading-tight">
          {response.summary}
        </h1>

        {/* Next steps */}
        <section className="my-8">
          <h2 className="text-lg font-semibold text-brand-text-dark mb-3">
            Recommended next steps
          </h2>
          <ol className="space-y-3">
            {response.next_steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-brand-text-mid leading-relaxed"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-brand-white text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── MONETIZATION CTA BLOCK ─────────────────────────────────── */}
        <section className="my-10 border-t border-brand-border pt-8">
          <h2 className="text-lg font-semibold text-brand-text-dark mb-1">
            Take the next step
          </h2>
          <p className="text-sm text-brand-text-light mb-5">
            These partner options can help you act on the assessment above.
          </p>

          {/* URGENT_ER: directory CTA */}
          {level === 'urgent_er' && (
            <div className="grid grid-cols-1 gap-3 mb-6">
              <AffiliateLink
                program="directory"
                href="/find-vet"
                subId={`askthevet:triage-directory:${stored.id}`}
                variant="card"
              >
                <span className="block text-base font-semibold text-brand-text-dark">
                  Find an emergency vet near you →
                </span>
                <span className="block text-sm text-brand-text-mid mt-1">
                  24/7 ER clinics, directory powered by Vets.co.
                </span>
              </AffiliateLink>
            </div>
          )}

          {/* NON_URGENT_VET: telehealth */}
          {level === 'non_urgent_vet' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <AffiliateLink
                program="vetster"
                href="https://vetster.com/?ref=askthevet"
                subId={`askthevet:triage-telehealth:${stored.id}`}
                variant="card"
                badge="Telehealth"
              >
                <span className="block text-base font-semibold text-brand-text-dark">
                  Vetster — talk to a vet now
                </span>
                <span className="block text-sm text-brand-text-mid mt-1">
                  Video consult, often same day. Most cases resolved without a clinic visit.
                </span>
              </AffiliateLink>
              <AffiliateLink
                program="dutch"
                href="https://dutch.com/?ref=askthevet"
                subId={`askthevet:triage-telehealth:${stored.id}`}
                variant="card"
                badge="Telehealth"
              >
                <span className="block text-base font-semibold text-brand-text-dark">
                  Dutch — unlimited vet care
                </span>
                <span className="block text-sm text-brand-text-mid mt-1">
                  Membership that covers unlimited visits, follow-ups, and prescriptions.
                </span>
              </AffiliateLink>
            </div>
          )}

          {/* INSURANCE: 3 options */}
          {response.insurance_relevant && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-brand-text-dark mb-3">
                Compare pet insurance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <AffiliateLink
                  program="lemonade"
                  href="https://lemonade.com/pet?ref=askthevet"
                  subId={`askthevet:triage-insurance:${stored.id}`}
                  variant="card"
                >
                  <span className="block text-base font-semibold text-brand-text-dark">
                    Lemonade
                  </span>
                  <span className="block text-xs text-brand-text-mid mt-1">
                    Fast claims, app-first.
                  </span>
                </AffiliateLink>
                <AffiliateLink
                  program="pumpkin"
                  href="https://pumpkin.care/?ref=askthevet"
                  subId={`askthevet:triage-insurance:${stored.id}`}
                  variant="card"
                >
                  <span className="block text-base font-semibold text-brand-text-dark">
                    Pumpkin
                  </span>
                  <span className="block text-xs text-brand-text-mid mt-1">
                    No upper age limit, preventive add-on.
                  </span>
                </AffiliateLink>
                <AffiliateLink
                  program="manypets"
                  href="https://manypets.com/us/?ref=askthevet"
                  subId={`askthevet:triage-insurance:${stored.id}`}
                  variant="card"
                >
                  <span className="block text-base font-semibold text-brand-text-dark">
                    ManyPets
                  </span>
                  <span className="block text-xs text-brand-text-mid mt-1">
                    No payout caps, pre-existing flexibility.
                  </span>
                </AffiliateLink>
              </div>
            </div>
          )}

          {/* PRODUCT recommendations: Chewy + Amazon */}
          {response.product_recommendations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-brand-text-dark mb-3">
                Supplies that may help
              </h3>
              {response.product_recommendations.map((p, i) => {
                const query = encodeURIComponent(`${p.category} for ${stored.species}`)
                return (
                  <div
                    key={i}
                    className="rounded-md border border-brand-border bg-brand-white p-4 mb-3"
                  >
                    <p className="font-semibold text-brand-text-dark mb-1">
                      {p.category}
                    </p>
                    <p className="text-sm text-brand-text-mid mb-3">{p.rationale}</p>
                    <div className="flex flex-wrap gap-2">
                      <AffiliateLink
                        program="chewy"
                        href={`https://www.chewy.com/s?query=${query}`}
                        subId={`askthevet:triage-product:${stored.id}`}
                      >
                        Shop on Chewy →
                      </AffiliateLink>
                      <AffiliateLink
                        program="amazon"
                        href={`https://www.amazon.com/s?k=${query}&tag=carloOS-20`}
                        subId={`askthevet:triage-product:${stored.id}`}
                      >
                        Shop on Amazon →
                      </AffiliateLink>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
        <section className="my-12 border-t border-brand-border pt-8">
          <EmailCapture
            variant="section"
            siteId="askthevet"
            title="Save your pet’s symptom history"
            subtitle="Get a copy of this assessment plus follow-up reminders if symptoms persist."
            source="triage-history"
            ctaText="Email me this assessment"
            perks={['Per-pet history', 'Follow-up reminders', 'No spam']}
          />
        </section>

        <AffiliateDisclosure variant="footnote" />
      </article>
    </>
  )
}
