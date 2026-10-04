'use client'

/**
 * Funnel events for the five earning sites. Names are locked by
 * scripts/ci/journey-events.mjs:
 *   calculator_complete — site, tool
 *   guide_signup_submit — site, page, result (no address; form flag only)
 *   guide_checklist_copy / guide_checklist_print — site, page (no address)
 *   hop_view — site, page, hop, when the primary hop enters the viewport
 * affiliate_click stays on AffiliateClickListener.
 */
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '../lib/track-event'

export function JourneyEvents({ site }: { site: string }) {
  const page = usePathname() || '/'

  useEffect(() => {
    let calcFired = false
    let hopFired = false
    let hopArmed = false
    let hopObserver: IntersectionObserver | null = null

    function fireCalculator() {
      if (calcFired) return
      if (!document.querySelector('[data-calculator-result]')) return
      calcFired = true
      trackEvent('calculator_complete', { site, tool: page })
    }

    function armHop() {
      if (hopFired || hopArmed) return
      const marked = document.querySelector('[data-primary-hop]')
      const anchors = document.querySelectorAll('a[href*="/go/"]')
      const el = marked ?? (anchors.length === 1 ? anchors[0] : null)
      if (!el) return
      hopArmed = true
      hopObserver = new IntersectionObserver((entries) => {
        if (hopFired) return
        if (!entries.some((entry) => entry.isIntersecting)) return
        hopFired = true
        const anchor = el instanceof HTMLAnchorElement ? el : el.querySelector('a[href]')
        const hop = anchor instanceof HTMLAnchorElement ? anchor.getAttribute('href') || '' : ''
        trackEvent('hop_view', { site, page, hop })
        hopObserver?.disconnect()
      }, { threshold: 0.25 })
      hopObserver.observe(el)
    }

    fireCalculator()
    armHop()
    const mutations = new MutationObserver(() => {
      fireCalculator()
      armHop()
    })
    mutations.observe(document.body, { childList: true, subtree: true })
    return () => {
      mutations.disconnect()
      hopObserver?.disconnect()
    }
  }, [site, page])

  return null
}
