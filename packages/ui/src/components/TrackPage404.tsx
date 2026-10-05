'use client'

import { useEffect } from 'react'
import { trackEvent } from '../lib/track-event'

/** One GA4 event when the not-found page is shown. No-op without gtag. */
export function TrackPage404() {
  useEffect(() => {
    trackEvent('page_404', {
      page_path: window.location.pathname + window.location.search,
    })
  }, [])
  return null
}
