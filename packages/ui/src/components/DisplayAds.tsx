/**
 * DisplayAds — network-aware display-ad loader for the portfolio.
 *
 * Activates Mediavine Journey (and, later, full Mediavine / Raptive /
 * Ezoic / AdSense) per the site's `display-ads.ts` staging config and
 * the publisher env var. Renders nothing under any unmet gate — safe
 * failure mode for pre-launch builds and never-monetized sites.
 *
 * Per csro-dir-2026-W22-011 + Monetization Bot's 2026-05-31 staging
 * handoff (ops/handoffs/2026-05-31-monetization-to-coo-mediavine-
 * journey-staging.md). Drop one instance into each qualifying site's
 * shared layout:
 *
 *   import { displayAds } from '@/data/display-ads'
 *   import { DisplayAds } from '@carloOS/ui'
 *
 *   // apps/<site>/src/app/layout.tsx
 *   <DisplayAds config={displayAds} />
 *
 * Activation requires all of:
 *   1. config.enabled === true
 *   2. config.network is a supported network (currently 'mediavine-journey')
 *   3. NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID set in Vercel env
 */

import Script from 'next/script'

export interface DisplayAdConfig {
  readonly enabled: boolean
  readonly network:
    | 'mediavine-journey'
    | 'mediavine'
    | 'raptive'
    | 'ezoic'
    | 'adsense'
    | null
  readonly monthlySessionsApprox: number
}

interface DisplayAdsProps {
  config: DisplayAdConfig
  /** Optional route patterns to deny placement on (glob-style, simple
   * prefix / `**` suffix supported). Reserved for future per-page
   * suppression on health/medical clusters — see ferret-com note in
   * apps/ferret-com/src/data/display-ads.ts. */
  routePatterns?: { deny?: string[] }
}

export function DisplayAds({ config }: DisplayAdsProps) {
  if (!config.enabled) return null

  if (config.network === 'mediavine-journey') {
    const publisherId = process.env.NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID
    if (!publisherId) {
      if (process.env.NODE_ENV !== 'production') {
        console.info(
          '[DisplayAds] NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID not set. ' +
            'Sign up at mediavine.com/journey, then drop the publisher ID ' +
            'into the Vercel project env to activate.',
        )
      }
      return null
    }
    return <MediavineJourneyScript publisherId={publisherId} />
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info(
      `[DisplayAds] network "${config.network}" not yet supported by ` +
        '<DisplayAds>. Add a branch when the site qualifies for the ' +
        'next tier (mediavine, raptive, ezoic, adsense).',
    )
  }
  return null
}

function MediavineJourneyScript({ publisherId }: { publisherId: string }) {
  return (
    <Script
      id="mediavine-journey"
      strategy="afterInteractive"
      src={`https://scripts.mediavine.com/tags/${publisherId}.js`}
      async
      data-noptimize="1"
      data-cfasync="false"
    />
  )
}
