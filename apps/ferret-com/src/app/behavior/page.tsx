import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Behavior — Training, Bonding & Enrichment | Ferret.com',
  description:
    'Ferret behavior references: litter training, kit bite inhibition, harness training, ferret-to-ferret introductions, and multi-ferret group dynamics.',
  path: '/behavior',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
  ],
})

export default function BehaviorHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <div
        style={{
          background: 'var(--brand-dark)',
          padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="eyebrow">
              <span className="eyebrow-rule" />
              Behavior Reference
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              color: 'var(--brand-primary-pale)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}
          >
            Ferret Behavior
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              color: 'rgba(251, 245, 232, 0.65)',
              maxWidth: '600px',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Training, bonding, and enrichment references for domestic ferrets — from kit bite
            inhibition through harness training, ferret-to-ferret introductions, and
            multi-ferret group dynamics.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav
        style={{
          padding: '12px clamp(20px, 5vw, 80px)',
          fontSize: '0.8125rem',
          color: 'var(--brand-text-light)',
          background: 'var(--brand-surface)',
          borderBottom: '1px solid var(--brand-border)',
          display: 'flex',
          gap: '8px',
        }}
      >
        <Link href="/" className="amber-link" style={{ fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Behavior</span>
      </nav>

      {/* Hero image */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 80px) 0' }}>
        <StockImage manifestKey="ferret-com:behavior-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          <li>
            <Link
              href="/behavior/training-and-bonding"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 22px',
                background: 'var(--brand-white)',
                border: '1px solid var(--brand-border)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'var(--brand-amber)',
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-amber-dark)',
                  marginBottom: '8px',
                }}
              >
                Training & socialization
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}
              >
                Training & Bonding
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--brand-text-mid)',
                  margin: '0 0 14px',
                  flex: 1,
                }}
              >
                Litter training, kit bite inhibition, scruffing as a calming reflex (not
                punishment), H-style harness training, slow ferret-to-ferret introductions,
                and multi-ferret group dynamics.
              </p>
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                }}
              >
                Read →
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Email Capture */}
      <section
        style={{
          background: 'var(--brand-primary-pale)',
          borderTop: '1px solid var(--brand-border)',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The Ferret.com Reference"
          subtitle="New articles on ferret behavior, health, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="behavior-hub"
          perks={[
            'Evidence-based only',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
