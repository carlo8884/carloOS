import { EXPERIMENT_COOKIE, resolveCrateHopExperiment } from './experiments'

const MAX_AGE_SECONDS = 60 * 60 * 24 * 30

export function readExperimentCookie(): string {
  if (typeof document === 'undefined') return ''
  const prefix = `${EXPERIMENT_COOKIE}=`
  const hit = document.cookie.split('; ').find((part) => part.startsWith(prefix))
  if (!hit) return ''
  try {
    return decodeURIComponent(hit.slice(prefix.length))
  } catch {
    return ''
  }
}

export function writeExperimentCookie(value: string) {
  if (typeof document === 'undefined') return
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${EXPERIMENT_COOKIE}=${encodeURIComponent(value)}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`
}

/**
 * Params merged into hop_view and affiliate_click.
 * Assigns carlo_ab only when NEXT_PUBLIC_EXPERIMENT_CRATE_HOP_LABEL is "true".
 */
export function experimentEventParams(): Record<string, string> {
  const flag = process.env.NEXT_PUBLIC_EXPERIMENT_CRATE_HOP_LABEL
  const resolved = resolveCrateHopExperiment(readExperimentCookie(), flag, Math.random())
  if (resolved.cookie) writeExperimentCookie(resolved.cookie)
  return resolved.params
}
