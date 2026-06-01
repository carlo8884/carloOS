/**
 * CarloOS Logo — $0 typographic wordmark.
 *
 * Renders each site's `logoText` (from `@carloOS/config`) in the site's
 * display font, with the top-level-domain dot accented in brand-primary.
 *
 * Letter-spacing values are conservative-by-default (-0.01em to -0.015em)
 * and tuned NOT to crowd the serifs of Playfair Display / Bodoni / Cormorant
 * / Baskerville at small sizes. Heavier tightening was overshooting the
 * editorial restraint on Saddle.com and PetFood.com previews.
 *
 * Sizing variants:
 *   - 'nav'    — top-of-page nav usage (default)
 *   - 'footer' — light footer treatment on dark surface
 *   - 'hero'   — large display on home pages
 *
 * This component is DISPLAY-ONLY — wrap in a <Link> at the call site if
 * you need navigation or click handlers (Nav/Footer do this so they can
 * close mobile menus on click).
 *
 * No SVG, no image, no font fallback dependency beyond what's already
 * loaded by next/font. Renders identically server- and client-side.
 *
 * Brand law (QC §1):
 *   - No AI-generated marks
 *   - No symbols implying credentials we don't hold
 *   - The accent dot is decorative only — it's the TLD separator, not
 *     a logo glyph
 */

import type { CSSProperties } from 'react'
import type { SiteConfig } from '@carloOS/config'

export type LogoSize = 'nav' | 'footer' | 'hero'

export interface LogoProps {
  config: SiteConfig
  size?: LogoSize
  /** Optional className for the outer span */
  className?: string
  /**
   * Optional override color for the body text. Defaults to `inherit` so
   * Nav/Footer's surrounding color cascade works as before.
   */
  color?: string
  /**
   * Optional override color for the accent dot. Defaults to
   * var(--brand-primary).
   */
  dotColor?: string
}

const SIZE_STYLES: Record<
  LogoSize,
  { fontSize: string; letterSpacing: string; fontWeight: number }
> = {
  // Nav: small + dense, slight negative tracking only.
  // -0.01em respects Playfair / Bodoni serif spacing at ~18-22px.
  nav: {
    fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
    letterSpacing: '-0.01em',
    fontWeight: 800,
  },
  // Footer: slightly larger; still restrained.
  footer: {
    fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
    letterSpacing: '-0.01em',
    fontWeight: 800,
  },
  // Hero: large enough that -0.015em looks intentional rather than jammed.
  hero: {
    fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
    letterSpacing: '-0.015em',
    fontWeight: 900,
  },
}

export function Logo({
  config,
  size = 'nav',
  className,
  color,
  dotColor,
}: LogoProps) {
  const { logoText, fontDisplay } = config.theme
  const sizeStyle = SIZE_STYLES[size]

  // Split the logoText at the LAST dot — accent the TLD dot, not earlier dots.
  // "Dog.com" → "Dog" + "." + "com"; "Vets.co" → "Vets" + "." + "co".
  const lastDot = logoText.lastIndexOf('.')
  const body = lastDot > 0 ? logoText.slice(0, lastDot) : logoText
  const tld = lastDot > 0 ? logoText.slice(lastDot + 1) : ''

  const wrapperStyle: CSSProperties = {
    fontFamily: `var(--font-display), ${fontDisplay}, serif`,
    fontWeight: sizeStyle.fontWeight,
    fontSize: sizeStyle.fontSize,
    letterSpacing: sizeStyle.letterSpacing,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: 0,
    color: color ?? 'inherit',
  }

  return (
    <span
      className={['logo-wordmark', className ?? ''].filter(Boolean).join(' ')}
      style={wrapperStyle}
      aria-label={logoText}
    >
      <span data-logo-body>{body}</span>
      {tld && (
        <>
          <span
            aria-hidden="true"
            data-logo-dot
            style={{
              color: dotColor ?? 'var(--brand-primary)',
              fontWeight: 900,
              // Pull the dot slightly toward the TLD so it visually anchors there.
              margin: '0 0.02em',
            }}
          >
            .
          </span>
          <span data-logo-tld>{tld}</span>
        </>
      )}
    </span>
  )
}
