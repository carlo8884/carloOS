/**
 * Ferret.com — homepage.
 * Foundation surface linking to the first cornerstone content cluster.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret.com — A Reference for Ferret Owners',
  description:
    'Research-based reference for ferret owners — diet, health, and habitat guidance grounded in exotic-mammal veterinary literature.',
  path: '/',
  type: 'website',
})

const CORNERSTONES = [
  {
    href: '/care/diet-basics',
    eyebrow: 'Ferret Care',
    title: 'Diet Basics',
    teaser:
      'Ferrets are obligate carnivores: 32–40% protein, 18–22% fat, under 3% carbohydrate. What to feed, what to avoid, and why high-carb diets are the leading lifestyle-level risk factor for insulinoma.',
  },
  {
    href: '/health/insulinoma',
    eyebrow: 'Ferret Health',
    title: 'Insulinoma',
    teaser:
      'The most common neoplasm in middle-aged ferrets. Clinical signs that are easily mistaken for "old age slowing down", fasting-glucose diagnostic thresholds, the prednisone–diazoxide–surgery treatment ladder, and emergency hypoglycemia response.',
  },
  {
    href: '/care/cage-setup',
    eyebrow: 'Ferret Care',
    title: 'Cage Setup',
    teaser:
      'A ferret cage is the bedroom, not the house. Minimum dimensions and bar spacing, hammocks over loose bedding, corner litter boxes, four hours of out-of-cage time, and the ferret-proofing list most first-time owners miss.',
  },
]

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '880px',
        margin: '0 auto',
        padding: '72px 24px 64px',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--brand-text-dark)',
            marginBottom: '16px',
          }}
        >
          Ferret.com
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--brand-text-mid)',
            maxWidth: '620px',
            margin: '0 auto',
          }}
        >
          A research-based reference for ferret owners. Diet, health, and habitat guidance grounded in
          exotic-mammal veterinary literature — the American Ferret Association, the Association of
          Exotic Mammal Veterinarians, the <em>Journal of Exotic Pet Medicine</em>, and the
          <em> Veterinary Clinics of North America: Exotic Animal Practice</em>.
        </p>
      </header>

      <section aria-labelledby="cornerstones">
        <h2
          id="cornerstones"
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
          }}
        >
          {CORNERSTONES.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                style={{
                  display: 'block',
                  padding: '24px 28px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: 'var(--brand-surface)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-text-light)',
                    marginBottom: '6px',
                  }}
                >
                  {c.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {c.title}
                </div>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.55,
                    color: 'var(--brand-text-mid)',
                    margin: 0,
                  }}
                >
                  {c.teaser}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer
        style={{
          marginTop: '80px',
          fontSize: '0.8125rem',
          color: 'var(--brand-text-light)',
          textAlign: 'center',
        }}
      >
        © {year} Ferret.com. General information — not individualized veterinary advice.
      </footer>
    </div>
  )
}
