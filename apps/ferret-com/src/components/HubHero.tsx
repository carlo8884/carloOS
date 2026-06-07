/**
 * HubHero — image-first overlaid hub masthead (Ferret.com).
 *
 * Structural primitive (COO lane, CLAUDE.md §5 non-visual primitives). It does
 * NOT select imagery or do photography — it composes the existing <StockImage>
 * (Visual Bot owns the manifest + which key each hub uses). Its job is layout:
 * make a hub's first screen match the homepage's premium image-first identity
 * (a real ferret photo as the first + dominant element after the nav, with the
 * eyebrow + H1 + intro overlaid on a bottom-up gradient scrim) instead of the
 * old pattern (a flat dark text block, then a separate wide image below it).
 *
 * Image strategy mirrors the homepage:
 *   - Only a REAL synced manifest key should be passed (every hub-hero key
 *     verified to carry a url in packages/ui/src/data/image-manifest.json).
 *   - subtleCredit keeps Unsplash/Pexels attribution present + clickable (QC §1
 *     + TOS) without dominating the masthead.
 *   - A bottom-up scrim keeps overlaid copy legible over any photo.
 *
 * Trust posture (QC §1): copy only, no fabricated authority, no AI humans.
 */

import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

// Strip StockImage's outer margins so the photo fills the masthead edge-to-edge
// (matches the homepage hero's FILL_IMAGE override).
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

export interface HubHeroProps {
  /** Small uppercase kicker above the H1, e.g. "Health Reference". */
  eyebrow: string
  /** The hub H1, e.g. "Ferret Health". */
  title: string
  /** One-paragraph intro overlaid on the photo. */
  intro: string
  /** REAL synced manifest key (must carry a url in the manifest). */
  manifestKey: string
  /** Alt text for the hero photo. */
  imageAlt: string
  /** Optional primary CTA pinned under the intro — funnels into a spoke/tool. */
  cta?: { href: string; label: string }
}

export function HubHero({ eyebrow, title, intro, manifestKey, imageAlt, cta }: HubHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--brand-dark)',
        minHeight: 'clamp(52vh, 58vh, 64vh)',
      }}
    >
      {/* Full-bleed hub photo fills the masthead. */}
      <div
        className={`${FILL_IMAGE} [&_figure]:h-full [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
        style={{ position: 'absolute', inset: 0 }}
      >
        <StockImage
          manifestKey={manifestKey}
          alt={imageAlt}
          aspect="16:9"
          variant="inline"
          priority
          subtleCredit
        />
      </div>

      {/* Bottom-up scrim — keeps the overlaid eyebrow + H1 + intro legible. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, var(--brand-dark) 0%, rgba(30,20,10,0.64) 48%, rgba(30,20,10,0.2) 100%)',
        }}
      />
      {/* Warm amber wash for depth (matches the homepage hero). */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.26,
          backgroundImage:
            'radial-gradient(ellipse at 20% 80%, rgba(201,157,95,0.4) 0%, transparent 60%)',
        }}
      />

      {/* Overlaid copy — pinned to the bottom of the photo. */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: 'clamp(52vh, 58vh, 64vh)',
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 80px) clamp(32px, 4vw, 48px)',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--brand-amber)',
            }}
          >
            <span
              aria-hidden
              style={{ display: 'inline-block', width: '24px', height: '2px', background: 'var(--brand-amber)', flexShrink: 0 }}
            />
            {eyebrow}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.125rem, 5.5vw, 3.5rem)',
            fontWeight: 900,
            color: 'rgba(251, 245, 232, 0.98)',
            letterSpacing: '-0.025em',
            lineHeight: 1.06,
            margin: '0 0 16px',
            maxWidth: '20ch',
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
            fontWeight: 400,
            color: 'rgba(251, 245, 232, 0.84)',
            maxWidth: '46ch',
            lineHeight: 1.6,
            margin: 0,
            textShadow: '0 1px 10px rgba(0,0,0,0.5)',
          }}
        >
          {intro}
        </p>

        {cta && (
          <div style={{ marginTop: '24px' }}>
            <Link
              href={cta.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--brand-amber)',
                color: 'var(--brand-dark)',
                padding: '14px 24px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: '2px solid var(--brand-amber)',
                boxShadow: '0 6px 24px rgba(201,157,95,0.32)',
              }}
            >
              {cta.label}
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
