/**
 * PetFoods.com — placeholder homepage.
 * Skeleton only: hints at catalog/database role. Real per-SKU,
 * per-brand, per-ingredient pages arrive in a later sprint.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'PetFoods.com',
  description:
    'The catalog: every commercial dog and cat food, scored on AAFCO completeness, ingredient sourcing, recall history. Browse by brand, by ingredient, by life stage.',
  path: '/',
  type: 'website',
})

const sections: Array<{ title: string; href: string }> = [
  { title: 'Browse by brand — coming soon', href: '/brands' },
  { title: 'Browse by ingredient — coming soon', href: '/ingredients' },
  { title: 'Browse by life stage — coming soon', href: '/life-stage' },
  { title: 'Recall database — coming soon', href: '/recalls' },
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
        PetFoods.com
      </h1>
      <p
        style={{
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'var(--brand-text-mid)',
          maxWidth: '640px',
          marginBottom: '48px',
        }}
      >
        The catalog. Every commercial dog and cat food, scored on AAFCO
        completeness, ingredient sourcing, and recall history. A working
        directory of brands, ingredients, and life-stage formulas — built to be
        referenced, not browsed.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '64px',
        }}
      >
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            style={{
              display: 'block',
              padding: '24px',
              border: '1px solid var(--brand-border)',
              borderRadius: '6px',
              background: 'var(--brand-white)',
              color: 'var(--brand-text-dark)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '-0.005em',
              transition: 'border-color 120ms ease',
            }}
          >
            {section.title}
          </Link>
        ))}
      </div>

      <footer
        style={{
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} PetFoods.com — sister catalog to PetFood.com.
      </footer>
    </div>
  )
}
