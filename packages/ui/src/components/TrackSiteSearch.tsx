'use client'

import { useEffect } from 'react'
import { trackEvent } from '../lib/track-event'

/** One GA4 event for a completed site search. No-op without gtag. */
export function TrackSiteSearch({ query, resultCount }: { query: string; resultCount: number }) {
  useEffect(() => {
    const search_term = query.trim()
    if (search_term.length < 2) return
    trackEvent('site_search', { search_term, result_count: resultCount })
    if (resultCount === 0) {
      trackEvent('site_search_no_results', { search_term, result_count: 0 })
    }
  }, [query, resultCount])
  return null
}
