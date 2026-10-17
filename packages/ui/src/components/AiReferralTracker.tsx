'use client'

/**
 * One GA4 ai_referral per session when the visit came from an AI answer.
 * Quiet when the layout says GA is not configured. Does not send a Vercel
 * custom event: that mount is still an open pull request.
 */
import { useEffect } from 'react'
import {
  AI_REFERRAL_SENT_KEY,
  AI_SOURCE_STORAGE_KEY,
  resolveAiSource,
} from '../lib/ai-referral'
import { trackEvent } from '../lib/track-event'

function storageGet(key: string): string | null {
  try {
    return sessionStorage.getItem(key)
  } catch {
    return null
  }
}

function storageSet(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value)
  } catch {
    /* private mode: the event can still fire once on this page */
  }
}

export function AiReferralTracker({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return
    const utm = new URLSearchParams(window.location.search).get('utm_source')
    const source = resolveAiSource({
      referrer: document.referrer,
      utmSource: utm,
      stored: storageGet(AI_SOURCE_STORAGE_KEY),
    })
    if (!source) return
    storageSet(AI_SOURCE_STORAGE_KEY, source)
    if (storageGet(AI_REFERRAL_SENT_KEY) === source) return
    const gtag = (window as unknown as { gtag?: unknown }).gtag
    if (typeof gtag !== 'function') return
    trackEvent('ai_referral', { ai_source: source })
    storageSet(AI_REFERRAL_SENT_KEY, source)
  }, [enabled])
  return null
}
