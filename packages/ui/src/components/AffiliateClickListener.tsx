'use client'

/**
 * One click listener for every /go hop. Shop buttons, review cards, and
 * plain anchors all record the same affiliate_click: site, source page
 * (`?s=`, or the path when a hop has no source), partner (the vendor),
 * and experiment plus variant when a test is on.
 */
import { useEffect } from 'react'
import { experimentEventParams } from '../lib/experiment-client'
import { trackEvent } from '../lib/track-event'

export function AffiliateClickListener({ site }: { site: string }) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href*="/go/"]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      let url: URL
      try {
        url = new URL(anchor.href, window.location.origin)
      } catch {
        return
      }
      const parts = url.pathname.split('/').filter(Boolean)
      if (parts[0] !== 'go' || !parts[1]) return
      const source = url.searchParams.get('s') || window.location.pathname
      trackEvent('affiliate_click', {
        site,
        source,
        partner: parts[1],
        link_url: `${url.pathname}${url.search}`,
        ...experimentEventParams(),
      })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [site])
  return null
}
