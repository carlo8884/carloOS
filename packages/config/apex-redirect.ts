/**
 * Permanent www → apex redirect for the three launch hosts.
 * Dog.com and Fish.com are not in this map, so they stay on their own host.
 * Preview, localhost, and *.vercel.app hosts are not in this map either.
 * This module does not change DNS, domains, or SITE_INDEXABLE.
 * The host parse is inlined. A `.ts` import fails the Next type check.
 */

function hostnameFromHostHeader(hostHeader: string | null | undefined): string {
  const raw = (hostHeader ?? '').split(',')[0].trim().toLowerCase()
  return raw.replace(/:\d+$/, '')
}

const APEX_FROM_WWW: Record<string, string> = {
  'www.vets.co': 'https://vets.co',
  'www.horses.com': 'https://horses.com',
  'www.ferret.com': 'https://ferret.com',
}

/** Absolute apex URL, or null when this host should not redirect. */
export function wwwApexRedirect(
  hostHeader: string | null | undefined,
  pathname: string,
  search = '',
): string | null {
  const apex = APEX_FROM_WWW[hostnameFromHostHeader(hostHeader)]
  if (!apex) return null
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  const query = search && !search.startsWith('?') ? `?${search}` : search
  return `${apex}${path}${query}`
}
