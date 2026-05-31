/**
 * Ferret.com — display-ad network configuration.
 *
 * Per csro-dir-2026-W22-011. Ferret.com (~11K/mo per Carlo's 2026-05-30
 * traffic snapshot) qualifies for Mediavine Journey (≥1K threshold).
 * See apps/dog-com/src/data/display-ads.ts for the canonical commented
 * version (network-ladder explanation, activation gates, env-var swap).
 *
 * Trust-bar note (QC §3.3 health-page framing): display ads on the
 * health/* cluster pages (insulinoma, adrenal-disease, lymphoma,
 * aging-ferret-care, etc.) should be inserted ONLY where the layout
 * does not place an ad slot near treatment / medical claims that could
 * read as endorsement. The COO-lane <DisplayAds> primitive should
 * accept an optional `routePatterns` deny-list to suppress placement
 * on /health/* if needed. Tracking note for COO when the component lands.
 */

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

export const displayAds: DisplayAdConfig = {
  enabled: true,
  network: 'mediavine-journey',
  monthlySessionsApprox: 11_000,
}
