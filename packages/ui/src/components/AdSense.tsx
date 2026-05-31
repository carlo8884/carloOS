/**
 * AdSense — Google AdSense integration for portfolio-wide display revenue.
 *
 * Day-1 passive ad revenue across all 327+ existing pages. Auto-activates
 * when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set in Vercel env. No-ops in dev
 * and on sites without an ID.
 *
 * Architect S4 — Programmatic Display Ad Layer.
 *
 * Pet-niche RPM via AdSense: $2-8 (low end). Upgrade path:
 *   - 10k sessions/mo: apply to Ezoic (RPM $8-15)
 *   - 50k sessions/mo: apply to Mediavine (RPM $25-50)
 *   - 100k pageviews/mo: apply to Raptive (RPM $30-60)
 *
 * USAGE:
 *   - <AdSenseLoader />: drop into shared Footer (renders the script once)
 *   - <AdSlot slot="in-article">: drop where you want an ad (top of post,
 *     mid-article, sidebar)
 *
 * Slot IDs come from AdSense dashboard. Configure each via env:
 *   NEXT_PUBLIC_ADSENSE_CLIENT_ID  - ca-pub-xxxxxxxx (the publisher ID)
 *   NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE - the slot ID for in-article ads
 *   NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR    - sidebar ad slot
 *   NEXT_PUBLIC_ADSENSE_SLOT_FOOTER     - footer ad slot
 */

import Script from 'next/script'

// ─────────────────────────────────────────────
// AdSenseLoader — drop into shared Footer once
// ─────────────────────────────────────────────
export function AdSenseLoader() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  if (!clientId) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        '[AdSenseLoader] NEXT_PUBLIC_ADSENSE_CLIENT_ID not set. ' +
          'Sign up at adsense.google.com, verify ownership, and add ' +
          'the publisher ID to enable site-wide display ads.',
      )
    }
    return null
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  )
}

// ─────────────────────────────────────────────
// AdSlot — drop where you want an ad
// ─────────────────────────────────────────────
interface AdSlotProps {
  /**
   * Logical slot name. Maps to NEXT_PUBLIC_ADSENSE_SLOT_<UPPER> env var.
   * Common values: in-article, sidebar, footer.
   */
  slot: 'in-article' | 'sidebar' | 'footer' | 'multiplex'

  /** Optional Tailwind / class override on the wrapper */
  className?: string

  /**
   * Optional aspect — for layout reservation to prevent CLS.
   * Default 'responsive' uses auto.
   */
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid'

  /** Set true for in-feed style ads (between list items). */
  fullWidthResponsive?: boolean
}

export function AdSlot({
  slot,
  className,
  format = 'auto',
  fullWidthResponsive = true,
}: AdSlotProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
  const slotId = getSlotId(slot)

  if (!clientId || !slotId) {
    // Render a minimum-height placeholder in dev so layout doesn't shift;
    // render nothing in production to avoid empty space.
    if (process.env.NODE_ENV !== 'production') {
      return (
        <div
          className={
            className ??
            'my-6 flex h-24 items-center justify-center border border-dashed border-stone-300 bg-stone-50 text-xs text-stone-500'
          }
          aria-hidden
        >
          [AdSense slot: {slot} — not configured]
        </div>
      )
    }
    return null
  }

  return (
    <div className={className ?? 'my-6'}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <Script id={`adsense-push-${slot}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  )
}

function getSlotId(slot: string): string | undefined {
  const key = `NEXT_PUBLIC_ADSENSE_SLOT_${slot.toUpperCase().replace(/-/g, '_')}`
  // Next.js inlines public env vars at build time — read via process.env
  // dynamically by mapping known keys.
  switch (key) {
    case 'NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE':
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE
    case 'NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR':
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR
    case 'NEXT_PUBLIC_ADSENSE_SLOT_FOOTER':
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER
    case 'NEXT_PUBLIC_ADSENSE_SLOT_MULTIPLEX':
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_MULTIPLEX
    default:
      return undefined
  }
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}
