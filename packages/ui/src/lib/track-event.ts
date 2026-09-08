/**
 * Fire a GA4 event when gtag is present. No-op when the measurement ID
 * is unset. Never throws — clicks must still navigate / download.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  try {
    gtag('event', name, params)
  } catch {
    /* keep the visitor action */
  }
}
