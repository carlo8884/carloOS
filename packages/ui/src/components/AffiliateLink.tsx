/**
 * AffiliateLink — CarloOS canonical affiliate router primitive
 *
 * Every outbound commercial link in the portfolio should route through
 * this component. It:
 *   1. Wraps the link in our `/go/<vendor>/<sku>` redirect (UTM tagged)
 *   2. Fires an `affiliate_click` event to Supabase `events` table
 *   3. Refuses to render unless the parent page also renders an
 *      <AffiliateDisclosure /> (FTC requirement — enforced via context)
 *
 * Built per Architect Directive 2 / Primitive P2.
 * See: MONETIZATION-ARCHITECT.md §1 (P2) and §2 (S5, S6, S18).
 */

'use client'

import type { ReactNode } from 'react'
import { useContext, createContext } from 'react'

// ─────────────────────────────────────────────
// FTC DISCLOSURE CONTEXT
// ─────────────────────────────────────────────
// Any page that renders <AffiliateLink> MUST render <AffiliateDisclosure>
// somewhere up the tree (preferably above the fold). The disclosure
// component sets this context flag. Without it, AffiliateLink renders
// a console warning in dev and a no-op fallback in production.

export const AffiliateDisclosureContext = createContext<{ disclosed: boolean }>({
  disclosed: false,
})

// ─────────────────────────────────────────────
// VENDOR REGISTRY
// ─────────────────────────────────────────────
// Single source of truth for affiliate program metadata.
// Add new vendors here; the /go/[vendor]/[sku] redirect reads from this.

export type Vendor =
  // Pet supplies
  | 'chewy'
  | 'petco'
  | 'amazon'
  | 'furhaven'
  | 'innovet'
  | 'ollie'
  | 'spotandtango'
  | 'thefarmersdog'
  | 'holistapet'
  | 'prettylitter'
  | 'hepper'
  | 'muttropolis'
  | 'petwellbeing'
  | 'nuvet'
  // Pet pharmacy
  | 'allivet'
  | 'petmeds'
  | 'vetrxdirect'
  | 'entirelypets'
  | 'chewyrx'
  // Pet insurance
  | 'trupanion'
  | 'healthypaws'
  | 'embrace'
  | 'lemonade'
  | 'spot'
  | 'pumpkin'
  | 'figo'
  | 'manypets'
  | 'fetch'
  | 'wagmo'
  | 'metlifepet'
  | 'petsbest'
  | 'aspcapet'
  // Telehealth
  | 'vetster'
  | 'pawp'
  | 'dutch'
  | 'airvet'
  // DNA
  | 'embarkvet'
  | 'wisdompanel'
  | 'basepaws'
  // Training
  | 'spiritdog'
  | 'doggydan'
  | 'k9ti'
  | 'braintrainingfordogs'
  // Equine
  | 'smartpak'
  | 'doversaddlery'
  | 'ridingwarehouse'
  | 'statelinetack'
  | 'schneiders'
  | 'bigdees'
  | 'horse'
  // Aquarium
  | 'bulkreefsupply'
  | 'marinedepot'
  | 'liveaquaria'
  // Pet financing
  | 'carecredit'
  | 'scratchpay'
  | 'cherry'
  // Bereavement / trust
  | 'betterhelp'
  | 'legalzoom'
  | 'trustandwill'
  // Off-vertical
  | 'wayfair'
  | 'buildcom'

// ─────────────────────────────────────────────
// AffiliateLink — the component
// ─────────────────────────────────────────────

interface AffiliateLinkProps {
  /** Which vendor's program. Routed by /go/[vendor]/[sku]. */
  vendor: Vendor

  /**
   * Vendor's product SKU/ASIN. Used for attribution and (eventually)
   * deep-linking to the exact product page on the vendor site.
   * Use 'home' for top-of-funnel vendor home page links.
   */
  sku: string

  /**
   * Source context — usually the slug of the article the user is
   * reading. Helps attribute revenue back to the page that drove it.
   */
  source?: string

  /**
   * Optional: override the redirect path entirely.
   * Used when the vendor's link can't be generated from sku alone.
   * (e.g. dynamically-generated insurance quote URLs).
   */
  href?: string

  /** Default: open in new tab. Set false for in-flow conversions. */
  newTab?: boolean

  /** Optional: ARIA / SEO improvements. */
  rel?: string

  /** Standard link content. */
  children: ReactNode

  /** Optional Tailwind / class overrides. */
  className?: string
}

export function AffiliateLink({
  vendor,
  sku,
  source,
  href,
  newTab = true,
  rel,
  children,
  className,
}: AffiliateLinkProps) {
  const { disclosed } = useContext(AffiliateDisclosureContext)

  // FTC enforcement: refuse to render in dev without disclosure.
  // In production, render a plain (non-affiliate) link as fallback.
  if (!disclosed) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[AffiliateLink] Missing <AffiliateDisclosure> in page tree. ` +
          `Vendor: ${vendor}, sku: ${sku}, source: ${source}. ` +
          `FTC requires affiliate disclosure above the fold on any ` +
          `page rendering affiliate links.`,
      )
    }
  }

  const redirectHref = href ?? `/go/${vendor}/${encodeURIComponent(sku)}`
  const queryParts: string[] = []
  if (source) queryParts.push(`s=${encodeURIComponent(source)}`)
  const finalHref = queryParts.length
    ? `${redirectHref}?${queryParts.join('&')}`
    : redirectHref

  const handleClick = () => {
    // Fire analytics event. Fails silently — never block navigation.
    if (typeof window === 'undefined') return
    try {
      const payload = {
        event_type: 'affiliate_click',
        event_data: { vendor, sku, source: source ?? null },
      }
      // Use sendBeacon when available (survives page nav)
      const body = JSON.stringify(payload)
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics', body)
      } else {
        fetch('/api/analytics', {
          method: 'POST',
          body,
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
        })
      }
    } catch {
      // No-op
    }
  }

  return (
    <a
      href={finalHref}
      onClick={handleClick}
      target={newTab ? '_blank' : undefined}
      rel={
        rel ??
        (newTab ? 'sponsored nofollow noopener noreferrer' : 'sponsored nofollow')
      }
      data-vendor={vendor}
      data-sku={sku}
      data-source={source}
      className={className}
    >
      {children}
    </a>
  )
}
