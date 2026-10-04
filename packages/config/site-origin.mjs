/**
 * One origin per earning site.
 * Production (and local/CI) use the apex. Vercel preview builds use the
 * public project alias, not the deployment URL behind SSO.
 */
export const EARNING_SITE_ORIGINS = {
  'dog-com': { apex: 'https://dog.com', preview: 'https://dog-com-three.vercel.app' },
  'fish-com': { apex: 'https://fish.com', preview: 'https://carlo-os-fish-com.vercel.app' },
  'horses-com': { apex: 'https://horses.com', preview: 'https://horses-com.vercel.app' },
  'vets-co': { apex: 'https://vets.co', preview: 'https://carlo-os-vets-co.vercel.app' },
  'ferret-com': { apex: 'https://ferret.com', preview: 'https://ferret-com.vercel.app' },
}

export function isEarningSiteId(siteId) {
  return Object.prototype.hasOwnProperty.call(EARNING_SITE_ORIGINS, siteId)
}

/** Apex unless this build is a Vercel preview. Direct process.env reads so Next can inline them. */
export function siteOriginMode(env = process.env) {
  if (env !== process.env) {
    const explicit = env.NEXT_PUBLIC_SITE_ORIGIN_MODE
    if (explicit === 'preview' || explicit === 'apex') return explicit
    return env.VERCEL_ENV === 'preview' ? 'preview' : 'apex'
  }
  if (process.env.NEXT_PUBLIC_SITE_ORIGIN_MODE === 'preview') return 'preview'
  if (process.env.NEXT_PUBLIC_SITE_ORIGIN_MODE === 'apex') return 'apex'
  if (process.env.VERCEL_ENV === 'preview') return 'preview'
  return 'apex'
}

export function siteBaseUrl(siteId, env = process.env) {
  const row = EARNING_SITE_ORIGINS[siteId]
  if (!row) throw new Error(`No earning-site origin for ${siteId}`)
  return siteOriginMode(env) === 'preview' ? row.preview : row.apex
}

export function joinSiteUrl(base, path) {
  const origin = String(base || '').replace(/\/$/, '')
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `${origin}${suffix}`
}

/** Absolute URL on another site. Path is that site's route, not the current one. */
export function crossSiteHref(siteId, path, env = process.env) {
  return joinSiteUrl(siteBaseUrl(siteId, env), path)
}
