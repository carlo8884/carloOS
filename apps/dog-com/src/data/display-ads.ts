/**
 * Dog.com — display-ad network configuration.
 *
 * Per csro-dir-2026-W22-011 (CSRO 2026-05-30). Mediavine Journey
 * threshold dropped to ≥1K monthly sessions on 2026-01-15; dog.com
 * (~36K/mo per Carlo's 2026-05-30 traffic snapshot) qualifies and is
 * staged for activation. Effective coverage path matches the P5
 * adapter ladder in MONETIZATION-ARCHITECT.md (AdSense → Ezoic →
 * Mediavine Journey → Mediavine → Raptive).
 *
 * Activation is gated on:
 *   1. Carlo signs up for Mediavine Journey (free, rev-share).
 *   2. AFF_MEDIAVINE_PUBLISHER_ID env var set in Vercel for this
 *      project (per ops/policies/bot-coordination.md §6, rule 3 —
 *      no plaintext IDs in the repo).
 *   3. <DisplayAds> shared UI primitive lives in packages/ui (COO
 *      lane; spec at ops/handoffs/2026-05-31-monetization-to-coo-
 *      mediavine-journey-staging.md). When the env var is unset, the
 *      component renders nothing. Safe failure mode.
 *
 * This file is the staging contract — it declares intent, the tier
 * choice, and the approximate-traffic justification. No imports here;
 * the consumer is the COO-lane <DisplayAds> primitive.
 */

export interface DisplayAdConfig {
  /** Whether display ads are intended to be active on this site. */
  readonly enabled: boolean
  /**
   * Network tier per the auto-switching ladder (P5 of
   * MONETIZATION-ARCHITECT.md): `adsense` (any traffic) → `ezoic`
   * (~10K+) → `mediavine-journey` (1K+, eff. 2026-01-15) → `mediavine`
   * (50K+) → `raptive` (100K+).
   *
   * The ladder is descending in network quality / RPM at higher tiers.
   * Choose the highest tier the site qualifies for at staging time;
   * upgrade later as traffic crosses thresholds.
   */
  readonly network:
    | 'mediavine-journey'
    | 'mediavine'
    | 'raptive'
    | 'ezoic'
    | 'adsense'
    | null
  /**
   * Monthly sessions at staging — Carlo's 2026-05-30 snapshot. Used to
   * justify the network-tier choice and as a marker for when an upgrade
   * (to the next tier up) becomes appropriate.
   */
  readonly monthlySessionsApprox: number
}

export const displayAds: DisplayAdConfig = {
  enabled: true,
  network: 'mediavine-journey',
  monthlySessionsApprox: 36_000,
}
