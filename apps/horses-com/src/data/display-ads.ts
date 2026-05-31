/**
 * Horses.com — display-ad network configuration.
 *
 * Per csro-dir-2026-W22-011. Horses.com (~1K/mo per Carlo's 2026-05-30
 * traffic snapshot) JUST clears the Mediavine Journey 1K threshold —
 * staged but expect lower RPM than the higher-traffic peers (dog, ferret,
 * fish, petfood) until traffic grows. See
 * apps/dog-com/src/data/display-ads.ts for the canonical commented
 * version.
 *
 * Strategic note (csro-dir-2026-W22-012 horse-cluster build spec):
 * horses.com is being built for an Equine Network acquirer story.
 * Display ads add a recurring revenue surface without disturbing the
 * audience-capture (Layer 1) or commerce-depth (Layer 2) work in flight.
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
  monthlySessionsApprox: 1_000,
}
