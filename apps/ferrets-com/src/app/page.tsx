/**
 * Ferrets.com — placeholder homepage.
 *
 * Sister to Ferret.com (the premium commercial brand). Ferrets.com is the
 * SEO/content firehose: long-tail informational, care library, and
 * directories of rescues / breeders / exotic-pet vets across the US.
 *
 * Skeleton only — real content + directory pages arrive in later sprints.
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Ferrets.com — The Ferret Owner\'s Library',
  description:
    'The ferret owner\'s library: care, health, directories of exotic-pet vets, rescues, and breeders across the US.',
  path: '/',
  type: 'website',
})

interface SectionCard {
  title: string
  blurb: string
  href: string
}

const SECTIONS: SectionCard[] = [
  {
    title: 'Care library — coming soon',
    blurb:
      'Diet, housing, enrichment, lifespan, and the health questions every ferret owner asks.',
    href: '/care',
  },
  {
    title: 'Find an exotic-pet vet — coming soon',
    blurb:
      'A state-by-state directory of vets who actually treat ferrets — not every clinic does.',
    href: '/find-a-vet',
  },
  {
    title: 'Rescues & breeders — coming soon',
    blurb:
      'Reputable rescues and breeders, organized by US state, with adoption + waitlist info.',
    href: '/directory/rescues',
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
      <header style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            margin: '0 auto',
          }}
        >
          The ferret owner&rsquo;s library — care guides, health references,
          and directories of exotic-pet vets, rescues, and breeders across
          the US. Browse by category below.
        </p>
      </header>

      {/* ─── Section cards (placeholders) ─────────────────────────── */}
      <section
        style={{
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          marginBottom: '64px',
        }}
      >
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            style={{
              display: 'block',
              padding: '28px 24px',
              border: '1px solid var(--brand-border)',
              borderRadius: '12px',
              background: 'var(--brand-surface)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--brand-text-dark)',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}
            >
              {s.title}
            </h2>
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
        ))}
      </section>

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer
        style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} Ferrets.com — sister site to Ferret.com
      </footer>
    </div>
  )
}
