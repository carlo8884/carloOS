/**
 * Go-live indexing switch for the earning sites.
 *
 * Canonical URLs and sitemap.xml already use each site's apex
 * (https://dog.com, https://vets.co, https://fish.com, https://horses.com,
 * https://ferret.com). This module decides whether a request may be indexed.
 *
 * Indexing is on only when BOTH are true:
 *   1. SITE_INDEXABLE names that host (`vets.co`, `horses.com`, or
 *      `ferret.com`). A comma-separated list names more than one apex.
 *      `www.` of a named apex is included. The legacy value `true` does
 *      not index every host, so Dog.com and Fish.com stay noindex when
 *      another site flips.
 *   2. The request host is not a preview, localhost, or *.vercel.app host
 *
 * Preview and vercel.app hosts stay noindex even when named, so flipping
 * the switch before DNS does not publish the Vercel hostname.
 * Leave the env unset until Carlo launches one apex. This module does
 * not set it.
 */

const LEGACY_GLOBAL = new Set(['true', 'false', '1', '0', 'yes', 'no'])

export function hostnameFromHostHeader(hostHeader: string | null | undefined): string {
  const raw = (hostHeader ?? '').split(',')[0].trim().toLowerCase()
  return raw.replace(/:\d+$/, '')
}

/** True for hosts that must never be indexed, regardless of SITE_INDEXABLE. */
export function isPreviewHost(hostHeader: string | null | undefined): boolean {
  const host = hostnameFromHostHeader(hostHeader)
  if (!host) return true
  if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host.endsWith('.local')) {
    return true
  }
  if (host === 'vercel.app' || host.endsWith('.vercel.app')) return true
  return false
}

/** Apex names in SITE_INDEXABLE. `true` is ignored so one flip cannot launch every site. */
export function indexableHostNames(env: NodeJS.ProcessEnv = process.env): string[] {
  // Direct member access when reading the real process.env so Next inlines
  // SITE_INDEXABLE into the Edge middleware at build time. A later Vercel
  // env change rebuilds with the new value. Callers that pass a plain object
  // (unit tests) still read that object.
  const raw = env === process.env ? process.env.SITE_INDEXABLE : env.SITE_INDEXABLE
  if (!raw) return []
  return raw
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .filter((part) => part.length > 0 && !LEGACY_GLOBAL.has(part))
}

export function isSiteIndexable(
  env: NodeJS.ProcessEnv = process.env,
  hostHeader?: string | null,
): boolean {
  const named = indexableHostNames(env)
  if (hostHeader === undefined) return named.length > 0
  if (isPreviewHost(hostHeader)) return false
  const host = hostnameFromHostHeader(hostHeader)
  const bare = host.startsWith('www.') ? host.slice(4) : host
  return named.includes(host) || named.includes(bare)
}

/** True only when SITE_INDEXABLE names this host and the host is not a preview. */
export function shouldIndexHost(
  hostHeader: string | null | undefined,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return isSiteIndexable(env, hostHeader)
}

/** Header value for preview and pre-DNS responses. Null when the host may be indexed. */
export function robotsTagForHost(
  hostHeader: string | null | undefined,
  env: NodeJS.ProcessEnv = process.env,
): 'noindex, nofollow' | null {
  return shouldIndexHost(hostHeader, env) ? null : 'noindex, nofollow'
}
