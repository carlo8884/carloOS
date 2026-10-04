/**
 * Response headers for the five earning sites.
 * CSP allows the GA4 tag, the Skimlinks script already on Dog.com, and the
 * fonts Next serves from this origin (plus fonts.gstatic.com / fonts.googleapis.com).
 * Inline scripts and styles stay allowed so Next hydration and the forms keep working.
 * No upgrade-insecure-requests: local and CI probes are plain HTTP.
 */

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.skimresources.com https://scripts.mediavine.com https://pagead2.googlesyndication.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://*.supabase.co https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.skimresources.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://www.google.com https://*.skimresources.com https://*.mediavine.com",
  "frame-src 'self' https://www.googletagmanager.com https://*.mediavine.com",
  "media-src 'self' blob:",
  "worker-src 'self' blob:",
].join('; ')

export const SECURITY_HEADERS: ReadonlyArray<readonly [string, string]> = [
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'],
  ['Content-Security-Policy', CONTENT_SECURITY_POLICY],
]

export function applySecurityHeaders(response: { headers: { set: (name: string, value: string) => void } }): void {
  for (const [name, value] of SECURITY_HEADERS) response.headers.set(name, value)
}
