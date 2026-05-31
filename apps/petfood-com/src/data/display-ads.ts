/**
 * PetFood.com — display-ad network configuration.
 *
 * Per csro-dir-2026-W22-011. PetFood.com (~5K/mo per Carlo's 2026-05-30
 * traffic snapshot) qualifies for Mediavine Journey (≥1K threshold).
 * See apps/dog-com/src/data/display-ads.ts for the canonical commented
 * version.
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
  monthlySessionsApprox: 5_000,
}
