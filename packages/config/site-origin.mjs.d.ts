export type EarningSiteId = 'dog-com' | 'fish-com' | 'horses-com' | 'vets-co' | 'ferret-com'

export function isEarningSiteId(siteId: string): siteId is EarningSiteId
export function siteOriginMode(env?: NodeJS.ProcessEnv): 'apex' | 'preview'
export function siteBaseUrl(siteId: EarningSiteId, env?: NodeJS.ProcessEnv): string
export function joinSiteUrl(base: string, path: string): string
export function crossSiteHref(siteId: EarningSiteId, path: string, env?: NodeJS.ProcessEnv): string
export const EARNING_SITE_ORIGINS: Record<EarningSiteId, { apex: string; preview: string }>
