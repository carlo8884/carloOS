/**
 * Go-live indexing switch for the earning sites.
 *
 * Canonical URLs and sitemap.xml already use each site's apex
 * (https://dog.com, https://vets.co, https://fish.com, https://horses.com,
 * https://ferret.com). This module decides whether a request may be indexed.
 *
 * Indexing is on only when BOTH are true:
 *   1. SITE_INDEXABLE=true  (leave unset until DNS points at the apex)
 *   2. The request host is not a preview, localhost, or *.vercel.app host
 *
 * Preview and vercel.app hosts stay noindex even after the env flag is set,
 * so flipping the switch before DNS does not publish the Vercel hostname.
 */

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

export function isSiteIndexable(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.SITE_INDEXABLE === 'true'
}

/** True only on a live apex (or other non-preview) host after the env switch is on. */
export function shouldIndexHost(
  hostHeader: string | null | undefined,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return isSiteIndexable(env) && !isPreviewHost(hostHeader)
}

/** Header value for preview and pre-DNS responses. Null when the host may be indexed. */
export function robotsTagForHost(
  hostHeader: string | null | undefined,
  env: NodeJS.ProcessEnv = process.env,
): 'noindex, nofollow' | null {
  return shouldIndexHost(hostHeader, env) ? null : 'noindex, nofollow'
}
