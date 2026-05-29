/**
 * Editorial reviewer registry — SeniorPets
 *
 * ════════════════════════════════════════════════════════════════════════
 * PLACEHOLDER VALUE BELOW — MUST BE REPLACED BEFORE PUBLIC LAUNCH.
 * ════════════════════════════════════════════════════════════════════════
 *
 * Per QC-STANDARDS §1.1 (no fabricated authority), every reviewer credit
 * on a CarloOS site must correspond to a real, verifiable credentialed
 * reviewer who has actually reviewed the content. The trust-guard CI
 * will block any unverified reviewer from shipping to production.
 *
 * The value `"Dr. Sarah Chen, DVM"` below was specified by the work-order
 * author as a TYPED PLACEHOLDER for the MVP scaffold. Carlo will replace
 * it with a real Vets.co reviewer name + verified credentials BEFORE the
 * site goes live, and re-run the content-check script to confirm.
 *
 * Until then, set `NEXT_PUBLIC_SHOW_REVIEWER=true` in the deploy env to
 * render the byline. Without that env var, the byline omits the
 * "Reviewed by" line entirely — so an unreviewed page never lies to a
 * reader about clinical review status.
 */

export const REVIEWER_PLACEHOLDER = 'Dr. Sarah Chen, DVM'

export function getReviewerByline(): string | undefined {
  const flag = process.env.NEXT_PUBLIC_SHOW_REVIEWER
  if (flag !== 'true') return undefined
  return REVIEWER_PLACEHOLDER
}
