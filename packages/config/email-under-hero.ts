/** Homepage + money hubs that get the always-on under-hero capture. */
export const EMAIL_UNDER_HERO_PATHS = [
  '/',
  '/insurance',
  '/telehealth',
  '/guides',
  '/reviews',
  '/breeds',
  '/health',
  '/find-a-vet',
  '/find-an-exotic-vet',
  '/nutrition',
  '/tack',
  '/tools',
  '/supplements',
  '/diet',
  '/care',
  '/ownership',
  '/species',
  '/training',
  '/symptoms',
  '/medications',
  '/directory',
  '/setup',
  '/water-parameters',
] as const

export function normalizeEmailUnderHeroPath(path: string): string {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

export function isEmailUnderHeroPath(
  path: string,
  excludePaths: readonly string[] = [],
): boolean {
  const normalized = normalizeEmailUnderHeroPath(path)
  if (excludePaths.some((p) => normalizeEmailUnderHeroPath(p) === normalized)) {
    return false
  }
  return (EMAIL_UNDER_HERO_PATHS as readonly string[]).includes(normalized)
}
