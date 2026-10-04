/**
 * Cookie A/B assignments for after launch. No extra dependencies.
 *
 * One experiment ships, and it stays off until someone turns it on:
 *   crate_hop_label — primary hop wording on /reviews/best-dog-crates.
 *   Control (a): Check price of the MidWest iCrate on Amazon
 *   Variant (b): View the MidWest iCrate price on Amazon
 *
 * Turn it on for a deployment by setting exactly:
 *   NEXT_PUBLIC_EXPERIMENT_CRATE_HOP_LABEL=true
 * then rebuilding that app. Unset, empty, "false", "1", and "TRUE" all
 * leave the control label in place and omit experiment and variant from
 * hop_view and affiliate_click. Do not set this in production until after
 * launch.
 *
 * Visitors who are in the test get a first-party cookie named carlo_ab
 * (Path=/, 30 days, SameSite=Lax). The value is crate_hop_label=a or
 * crate_hop_label=b. The same variant is sent as GA4 parameters
 * experiment and variant on hop_view and affiliate_click.
 */

export const EXPERIMENT_COOKIE = 'carlo_ab'
export const CRATE_HOP_EXPERIMENT = 'crate_hop_label'

export function crateHopLabelEnabled(value: string | undefined): boolean {
  return value === 'true'
}

export function parseExperimentCookie(raw: string | undefined): Record<string, string> {
  const out: Record<string, string> = {}
  if (!raw) return out
  for (const part of raw.split(',')) {
    const eq = part.indexOf('=')
    if (eq <= 0) continue
    const key = part.slice(0, eq)
    const val = part.slice(eq + 1)
    if (val === 'a' || val === 'b') out[key] = val
  }
  return out
}

export function serializeExperimentCookie(map: Record<string, string>): string {
  return Object.entries(map)
    .filter(([, val]) => val === 'a' || val === 'b')
    .map(([key, val]) => `${key}=${val}`)
    .join(',')
}

/**
 * When the flag is off, params are empty and the cookie is left alone.
 * When it is on, an existing a/b assignment is kept. A missing assignment
 * uses random: below 0.5 is control a, otherwise variant b.
 */
export function resolveCrateHopExperiment(
  cookieRaw: string | undefined,
  flag: string | undefined,
  random: number,
): { params: Record<string, string>; cookie: string | null } {
  if (!crateHopLabelEnabled(flag)) return { params: {}, cookie: null }
  const map = parseExperimentCookie(cookieRaw)
  let variant = map[CRATE_HOP_EXPERIMENT]
  let cookie: string | null = null
  if (variant !== 'a' && variant !== 'b') {
    variant = random < 0.5 ? 'a' : 'b'
    map[CRATE_HOP_EXPERIMENT] = variant
    cookie = serializeExperimentCookie(map)
  }
  return {
    params: { experiment: CRATE_HOP_EXPERIMENT, variant },
    cookie,
  }
}
