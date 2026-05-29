/**
 * Vets.co Reviewer Directory Index — /reviewers
 *
 * Trust-hub foundation per MONETIZATION-ARCHITECT.md §5.2 (Vets.co disposition
 * as portfolio trust hub) and S7 (Universal Directory Engine).
 *
 * Two render modes, both gated server-side by NEXT_PUBLIC_SHOW_REVIEWERS:
 *
 *   - DEFAULT (env var unset or 'false'): renders a recruitment CTA pointing
 *     at reviewers@vets.co. The slot list still renders as a skeleton with
 *     city + specialty intent (so visitors and prospective reviewers can
 *     see what we're building toward) but every slot is marked "Pending
 *     Reviewer Profile" and none link out to individual profiles.
 *
 *   - ACTIVATED (env var === 'true'): every slot that is also marked
 *     is_visible renders as a card linking to /reviewers/[slug].
 *
 * Per QC-STANDARDS.md §1: no fabricated DVM names appear on this page in
 * either render mode. The placeholder names are the literal slot labels
 * ("Reviewer Pending — Slot 001").
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import {
  Reviewers,
  reviewersGloballyVisible,
  specialtyLabel,
} from '../../data/reviewers'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vets.co Reviewer Network',
  description:
    'Vets.co maintains an independent network of veterinary reviewers who validate clinical content across the CarloOS pet-health portfolio. Reviewer slots are open in twenty U.S. metros.',
  path: '/reviewers',
  type: 'website',
})

const REVIEWER_INBOX = 'reviewers@vets.co'

export default function ReviewerDirectoryIndexPage() {
  const showLive = reviewersGloballyVisible()

  return (
    <>
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Reviewer Network</span>
      </nav>

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Reviewer Network
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          Vets.co Reviewer Directory
        </h1>
        <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
          Vets.co maintains a network of independent veterinary reviewers who
          validate clinical content across the CarloOS portfolio. When a real
          reviewer is placed in a slot, the &ldquo;Reviewed by Dr. [Name] (Vets.co)&rdquo;
          badge appears on the relevant article — and links back here.
        </p>
      </div>

      {!showLive && (
        <section
          className="px-container sm:px-container-sm py-10"
          style={{ background: 'var(--brand-primary-pale)' }}
        >
          <div className="max-w-3xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Network in Recruitment
            </div>
            <h2
              className="font-display font-bold text-brand-text-dark mb-3"
              style={{ fontSize: 'clamp(20px, 2.6vw, 32px)' }}
            >
              We&rsquo;re building our reviewer network.
            </h2>
            <p className="text-brand-text-mid leading-relaxed mb-5 max-w-2xl">
              Are you a DVM who would like to contribute? Vets.co is recruiting
              independent veterinary reviewers in twenty U.S. metros. Reviewers
              receive a published profile linked from every article they
              review, professional attribution credit, and a small honorarium
              per review. No paid endorsements. No commercial influence over
              editorial.
            </p>
            <a
              href={`mailto:${REVIEWER_INBOX}?subject=Reviewer%20application%20%E2%80%94%20Vets.co`}
              className="inline-flex items-center font-semibold text-sm px-6 py-3 rounded no-underline hover:opacity-90"
              style={{ background: 'var(--brand-primary)', color: '#FFFFFF' }}
            >
              Email {REVIEWER_INBOX}
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
            <p className="text-xs text-brand-text-light mt-4">
              Include your state license number, primary specialty, and the
              topic areas you would like to cover.
            </p>
          </div>
        </section>
      )}

      <div className="px-container sm:px-container-sm py-12 max-w-6xl">
        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-6">
          <h2
            className="font-display font-bold text-brand-text-dark"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            Twenty open reviewer slots
          </h2>
          <p className="text-xs text-brand-text-light max-w-md">
            One slot per major U.S. metro. Specialty intent is suggested; each
            slot will be filled by a real DVM matched to the city and topic
            mix.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Reviewers.map((r) => {
            const isLive = showLive && r.is_visible && r.status === 'active'
            const card = (
              <div
                className="block p-5 rounded-md no-underline h-full"
                style={{
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-2xs font-bold tracking-eyebrow uppercase"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {r.city}, {r.state_abbr}
                  </span>
                  {!isLive && (
                    <span
                      className="text-2xs font-bold uppercase tracking-eyebrow px-2 py-1 rounded"
                      style={{
                        background: 'rgba(182,136,48,0.15)',
                        color: 'var(--brand-primary-dark)',
                      }}
                    >
                      Pending Reviewer Profile
                    </span>
                  )}
                </div>
                <div
                  className="font-display font-bold text-lg leading-snug mb-2"
                  style={{ color: 'var(--brand-text-dark)' }}
                >
                  {r.placeholderName}
                </div>
                <div className="text-xs text-brand-text-mid leading-relaxed mb-3">
                  Specialty intent:{' '}
                  {r.specialty_options.map((s) => specialtyLabel(s)).join(' / ')}
                </div>
                {isLive ? (
                  <span
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    View profile
                    <span aria-hidden="true" className="ml-1.5">→</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center text-xs text-brand-text-light">
                    Slot open — recruiting
                  </span>
                )}
              </div>
            )
            return isLive ? (
              <Link
                key={r.slug}
                href={`/reviewers/${r.slug}`}
                className="block no-underline"
              >
                {card}
              </Link>
            ) : (
              <div key={r.slug}>{card}</div>
            )
          })}
        </div>
      </div>

      <section
        className="px-container sm:px-container-sm py-12"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div className="max-w-3xl">
          <h2
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            How the reviewer network works
          </h2>
          <ul className="text-sm text-brand-text-mid leading-relaxed space-y-3">
            <li>
              <strong>Independent.</strong> Reviewers are credentialed
              veterinarians in their own practice or institution. Vets.co does
              not employ them and does not pay for endorsements.
            </li>
            <li>
              <strong>Attributed.</strong> Every article a reviewer signs off
              on carries a &ldquo;Reviewed by Dr. [Name] (Vets.co)&rdquo; badge
              that links to their public profile here.
            </li>
            <li>
              <strong>Verified.</strong> Credentials are checked against the
              issuing specialty college and the reviewer&rsquo;s state
              veterinary medical board before activation.
            </li>
            <li>
              <strong>Scoped.</strong> Reviewers only sign off on content
              within their declared specialty. A behaviorist does not review
              cardiology content.
            </li>
          </ul>
          <div className="mt-6">
            <a
              href={`mailto:${REVIEWER_INBOX}?subject=Reviewer%20application%20%E2%80%94%20Vets.co`}
              className="inline-flex items-center text-sm font-semibold no-underline hover:underline"
              style={{ color: 'var(--brand-primary)' }}
            >
              Apply to join the network
              <span aria-hidden="true" className="ml-1.5">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
