/**
 * Vets.co Reviewer Profile — /reviewers/[slug]
 *
 * Per MONETIZATION-ARCHITECT.md §5.2: each profile is the deep-link target
 * for the "Reviewed by Dr. X (Vets.co)" badges that will appear on clinical
 * articles across the CarloOS portfolio (dog.com, fish.com, saddle.com,
 * lizard.com). Until real reviewers are recruited, every slot is a
 * placeholder.
 *
 * Visibility behavior (QC-STANDARDS.md §1):
 *
 *   - If NEXT_PUBLIC_SHOW_REVIEWERS !== 'true', any direct hit to
 *     /reviewers/[slug] redirects to /reviewers — the index page explains
 *     the network is in recruitment.
 *
 *   - If the env var is true but the per-slot is_visible flag is still
 *     false, we also redirect — individual slots stay hidden until Carlo
 *     flips them on.
 *
 *   - If both are true and the slot is 'active', we render the profile.
 *     The slot will only ever reach this state after a real DVM is placed
 *     in it (credentials filled, education filled, name swapped from the
 *     placeholder). The placeholder slug structure is reserved so the URL
 *     never changes when the reviewer is recruited.
 *
 * No fabricated DVM names appear in this file. The placeholder name
 * pattern is the literal slot label.
 */

import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import {
  Reviewers,
  findReviewer,
  reviewersGloballyVisible,
  specialtyLabel,
} from '../../../data/reviewers'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Reviewers.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const r = findReviewer(params.slug)
  if (!r) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Reviewer Profile | Vets.co',
      description: 'Vets.co reviewer profile.',
      path: `/reviewers/${params.slug}`,
      type: 'website',
    })
  }
  return buildMetadata({
    siteId: 'vets-co',
    title: `${r.placeholderName} | Vets.co Reviewer Network`,
    description: `Reviewer slot in ${r.city}, ${r.state_abbr}. Specialty intent: ${r.specialty_options.map((s) => specialtyLabel(s)).join(', ')}.`,
    path: `/reviewers/${r.slug}`,
    type: 'website',
  })
}

export default function ReviewerProfilePage({ params }: PageProps) {
  const r = findReviewer(params.slug)
  if (!r) notFound()

  const showLive = reviewersGloballyVisible()

  // Gate 1: global env var off — bounce to index where the recruitment
  // CTA is. Gate 2: per-slot is_visible still false — same bounce. The
  // status === 'active' check is the final guard.
  if (!showLive || !r.is_visible || r.status !== 'active') {
    redirect('/reviewers')
  }

  const url = `https://vets.co/reviewers/${r.slug}`
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Reviewers', url: 'https://vets.co/reviewers' },
      { name: r.placeholderName, url },
    ],
  })
  const schema = combineSchemas(breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviewers" className="hover:text-brand-primary no-underline">
          Reviewers
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{r.placeholderName}</span>
      </nav>

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Reviewer · {r.city}, {r.state_abbr}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          {r.placeholderName}
        </h1>
        <div className="flex flex-wrap gap-2 mt-3">
          {r.specialty_options.map((s) => (
            <span
              key={s}
              className="text-2xs font-bold uppercase tracking-eyebrow px-2.5 py-1 rounded"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {specialtyLabel(s)}
            </span>
          ))}
        </div>
      </div>

      <div className="px-container sm:px-container-sm py-12 max-w-3xl">
        <section className="mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            About
          </div>
          <p className="text-brand-text-mid leading-relaxed">{r.bio}</p>
        </section>

        <section className="mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
            Credentials
          </div>
          {r.credentials.length === 0 ? (
            <p className="text-sm text-brand-text-light italic">
              [To be filled by real reviewer]
            </p>
          ) : (
            <ul className="text-sm text-brand-text-mid space-y-2">
              {r.credentials.map((c, i) => (
                <li key={i}>
                  <strong>{c.label}</strong> &middot; {c.issuer}
                  {c.year ? ` · ${c.year}` : ''}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
            Education
          </div>
          {r.education.length === 0 ? (
            <p className="text-sm text-brand-text-light italic">
              [To be filled by real reviewer]
            </p>
          ) : (
            <ul className="text-sm text-brand-text-mid space-y-2">
              {r.education.map((e, i) => (
                <li key={i}>
                  <strong>{e.degree}</strong> &middot; {e.institution}
                  {e.year ? ` · ${e.year}` : ''}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
            Years in Practice
          </div>
          <p className="text-sm text-brand-text-mid">
            {r.years_experience !== null
              ? `${r.years_experience} years`
              : '[To be filled by real reviewer]'}
          </p>
        </section>

        <section
          className="mt-12 p-5 rounded-md"
          style={{
            background: 'var(--brand-primary-pale)',
            border: '1px solid var(--brand-border)',
          }}
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Standards
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed">
            Reviewers sign off only on content within their declared
            specialty. Vets.co does not pay reviewers for endorsements and
            does not allow commercial influence over the editorial review
            process. See our{' '}
            <Link
              href="/editorial-standards"
              className="font-semibold no-underline hover:underline"
              style={{ color: 'var(--brand-primary)' }}
            >
              editorial standards
            </Link>
            {' '}for the full process.
          </p>
        </section>
      </div>
    </>
  )
}
