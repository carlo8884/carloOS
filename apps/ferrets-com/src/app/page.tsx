/**
 * Ferrets.com — homepage.
 *
 * The directory + long-form library for ferret owners. Sister site to
 * Ferret.com (buyer guides, reviews, AI assistant). This homepage links to
 * the three live foundation surfaces: /care, /find-a-vet,
 * /directory/rescues.
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Ferrets.com — Directory & Library for Ferret Owners',
  description:
    'The directory and long-form library for ferret owners: care references, the state-by-state exotic-pet vet directory, and the ferret rescue directory.',
  path: '/',
  type: 'website',
})

interface SectionCard {
  eyebrow: string
  title: string
  blurb: string
  href: string
}

const SECTIONS: SectionCard[] = [
  {
    eyebrow: 'Directory',
    title: 'Are Ferrets Legal in Your State?',
    blurb:
      'A color-coded legality directory for all 50 states and DC — cited state-code framing, permit notes, official-department links, and AFA adoption pointers per state.',
    href: '/states',
  },
  {
    eyebrow: 'Legality',
    title: 'Ferret Legality Topics',
    blurb:
      'Where ferrets are banned and why, how city rules override state law, rabies and travel law, renting with a ferret, and how the rules change.',
    href: '/legality',
  },
  {
    eyebrow: 'Adoption',
    title: 'Adopting a Ferret',
    blurb:
      'Regional adoption guides, rescue vs. breeder, the application process, real costs, the first 30 days, and responsible rehoming.',
    href: '/adopt',
  },
  {
    eyebrow: 'How-to',
    title: 'Acquiring a Ferret',
    blurb:
      'The pre-acquisition checklist, permits and licensing, vaccination and records, choosing a healthy ferret, transport, and setup — in order.',
    href: '/acquiring',
  },
  {
    eyebrow: 'Logistics',
    title: 'Moving With a Ferret',
    blurb:
      'What to do when relocating to a ban state or permit state, the cross-country move checklist, international relocation, and re-establishing vet care.',
    href: '/moving',
  },
  {
    eyebrow: 'Directory',
    title: 'Find an Exotic-Pet Vet',
    blurb:
      'Most general-practice vets see fewer than ten ferrets a year. Seven questions to ask, the AEMV directory, and the state-by-state index.',
    href: '/find-a-vet',
  },
  {
    eyebrow: 'Directory',
    title: 'Ferret Rescues',
    blurb:
      'How rescue works, what to look for, the American Ferret Association accredited-shelter program, and the rescue vetting checklist.',
    href: '/directory/rescues',
  },
  {
    eyebrow: 'Reference',
    title: 'Care Library',
    blurb:
      'Diet, housing, hygiene, enrichment, travel, multi-ferret households, and senior care — grounded in the exotic-mammal veterinary literature.',
    href: '/care',
  },
]

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '96px 24px 64px',
      }}
    >
      {/* ─── Header ───────────────────────────────────────────────── */}
      <header style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--brand-text-dark)',
            marginBottom: '20px',
          }}
        >
          Ferrets.com
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--brand-text-mid)',
            maxWidth: '640px',
            margin: '0 auto 16px',
          }}
        >
          The directory and long-form library for ferret owners. Care
          references, the state-by-state exotic-pet vet directory, and the
          ferret rescue directory.
        </p>
        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.55,
            color: 'var(--brand-text-light)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Looking for buyer guides, product reviews, or the AI shopping
          assistant? Visit{' '}
          <a
            href="https://ferret.com"
            rel="noopener"
            style={{ color: 'var(--brand-primary)', fontWeight: 600 }}
          >
            Ferret.com
          </a>{' '}
          — our commercial sister site.
        </p>
      </header>

      {/* ─── Section cards ────────────────────────────────────────── */}
      <section
        aria-labelledby="start-here"
        style={{ marginBottom: '64px' }}
      >
        <h2
          id="start-here"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--brand-text-light)',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Start Here
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                style={{
                  display: 'block',
                  padding: '28px 24px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '12px',
                  background: 'var(--brand-surface)',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-text-light)',
                    marginBottom: '8px',
                  }}
                >
                  {s.eyebrow}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.55,
                    color: 'var(--brand-text-mid)',
                    margin: 0,
                  }}
                >
                  {s.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Email capture ───────────────────────────────────────── */}
      <section
        aria-labelledby="newsletter"
        style={{ marginBottom: '64px' }}
      >
        <h2
          id="newsletter"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--brand-text-dark)',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          Directory updates
        </h2>
        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.55,
            color: 'var(--brand-text-mid)',
            textAlign: 'center',
            maxWidth: '520px',
            margin: '0 auto 20px',
          }}
        >
          One email per state-directory batch and per new long-form library
          page. No product pitches.
        </p>
        <EmailCapture
          siteId="ferrets-com"
          variant="section"
          title="Ferrets.com Updates"
          subtitle="Directory + library updates only."
          source="homepage"
        />
      </section>

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer
        style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} Ferrets.com — sister site to Ferret.com. General
        information; not individualized veterinary advice.
      </footer>
    </div>
  )
}
