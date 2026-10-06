'use client'

/**
 * One click listener for every /go hop and marked outbound partner link.
 * Shop buttons, review cards, tables, quick picks, and plain anchors record
 * the same affiliate_click: site, page path, source (`?s=`, or the path when
 * a hop has no source), partner, product or query, and placement
 * (hero, card, table, quick-pick, email landing).
 */
import { useEffect } from 'react'
import { affiliateClickParams } from '../lib/affiliate-click'
import { experimentEventParams } from '../lib/experiment-client'
import { trackEvent } from '../lib/track-event'

export function AffiliateClickListener({ site }: { site: string }) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!(anchor instanceof HTMLAnchorElement)) return
      const marked = anchor.closest('[data-shop-placement]')?.getAttribute('data-shop-placement')
      const click = affiliateClickParams({
        site,
        page: window.location.pathname,
        href: anchor.href,
        origin: window.location.origin,
        marked,
        inTable: Boolean(anchor.closest('table')),
        inHero: Boolean(anchor.closest('[data-primary-hop]')),
        inQuickPick: marked === 'quick-pick',
        text: anchor.textContent ?? '',
        dataProduct: anchor.getAttribute('data-product'),
      })
      if (!click) return
      trackEvent('affiliate_click', {
        site,
        page: click.page,
        source: click.source,
        partner: click.partner,
        product: click.product,
        placement: click.placement,
        link_url: click.link_url,
        ...experimentEventParams(),
      })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [site])
  return null
}
