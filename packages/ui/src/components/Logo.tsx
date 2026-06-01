/**
 * CarloOS Logo — $0 typographic wordmark.
 *
 * Renders each site's `logoText` (from `@carloOS/config`) in the site's
 * display font, with the top-level-domain dot accented in brand-primary.
 *
 * Letter-spacing is `0` across all sizes (CSRO IR #4 fix-back). Negative
 * tracking is non-standard for serif body text; tightness is achieved via
 * weight + size, not by squeezing letterforms past their designed spacing.
 * The display fonts (Playfair Display / Bodoni / Cormorant / Baskerville)
 * already have negative bearing in the typeface itself.
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
  // letterSpacing: '0' across all sizes per CSRO IR #4 — negative tracking
  // is non-standard for serif body text; tightness is achieved via weight
  // + size, not by squeezing letterforms past their designed spacing.
  // The display fonts (Playfair / Bodoni / Cormorant / Baskerville) already
  // have negative bearing built into the typeface — adding more crowds the
  // serifs at small sizes.
  nav: {
    fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
    letterSpacing: '0',
    fontWeight: 800,
  },
  footer: {
    fontSize: 'clamp(1.3rem, 1.9vw, 1.55rem)',
    letterSpacing: '0',
    fontWeight: 800,
  },
  // Hero stays at weight 900; size bumped slightly to retain visual density
  // without negative tracking.
  hero: {
    fontSize: 'clamp(2.6rem, 6.8vw, 4.7rem)',
    letterSpacing: '0',
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
