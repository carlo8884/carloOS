/**
 * Horses.com — placeholder homepage.
 * Skeleton only: real content arrives in a later sprint.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horses.com',
  description:
    'Premium domain. Site coming soon — research-based reference for horse owners.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '96px 24px 64px',
        textAlign: 'center',
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
        Horses.com
      </h1>
      <p
        style={{
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'var(--brand-text-mid)',
        }}
      >
        Premium domain. Site coming soon — research-based reference for horse owners.
      </p>
      <footer
        style={{
          marginTop: '96px',
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} Horses.com
      </footer>
    </div>
  )
}
