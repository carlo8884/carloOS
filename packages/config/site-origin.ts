export type EarningSiteId = 'dog-com' | 'fish-com' | 'horses-com' | 'vets-co' | 'ferret-com'
export type SiteOriginMode = 'apex' | 'preview'

export {
  EARNING_SITE_ORIGINS,
  isEarningSiteId,
  siteOriginMode,
  siteBaseUrl,
  joinSiteUrl,
  crossSiteHref,
} from './site-origin.mjs'
