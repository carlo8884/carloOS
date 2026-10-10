'use client'

/**
 * One click listener for every /go hop and marked outbound partner link.
 * Shop buttons, review cards, tables, quick picks, and plain anchors record
 * affiliate_click and hop_click. hop_click carries card_id: the review-card
 * id, or hero / result / table / quick-pick / guide / search-recovery.
 * Site, page path, destination type (ASIN, search, or other), and the ASIN
 * or query stay on both events. Source, partner, and placement stay too.
 */
import { useEffect } from 'react'
import { affiliateClickParams } from '../lib/affiliate-click'
import { experimentEventParams } from '../lib/experiment-client'
import { trackEvent } from '../lib/track-event'

function slotId(anchor: HTMLAnchorElement, marked: string | null | undefined, recovery: boolean): string {
  if (recovery) return 'search-recovery'
  const card = anchor.closest('[data-review-card]')
  if (card instanceof HTMLElement && card.id) return card.id
  if (anchor.closest('[data-result-pick]')) return 'result'
  if (anchor.closest('[data-primary-hop]') || marked === 'hero') return 'hero'
  if (anchor.closest('table') || marked === 'table') return 'table'
  if (marked === 'quick-pick') return 'quick-pick'
  if (anchor.closest('[data-guide-checklist]')) return 'guide'
  return marked || 'card'
}

export function AffiliateClickListener({ site }: { site: string }) {
  useEffect(() => {
    document.documentElement.dataset.hopClick = 'on'
    let lastKey = ''
    let lastAt = 0
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!(anchor instanceof HTMLAnchorElement)) return
      const marked = anchor.closest('[data-shop-placement]')?.getAttribute('data-shop-placement')
      const recovery = Boolean(anchor.closest('#empty-search-guides, #missed-guides'))
      let recoveryPath = ''
      if (recovery) {
        try {
          recoveryPath = new URL(anchor.href, window.location.origin).pathname
        } catch {
          recoveryPath = ''
        }
      }
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
        slot: slotId(anchor, marked, recovery),
        recoveryPath,
      })
      if (!click) return
      const key = `${click.page}|${click.slot}|${click.link_url}`
      const now = Date.now()
      if (key === lastKey && now - lastAt < 1200) return
      lastKey = key
      lastAt = now
      const payload = {
        site,
        page: click.page,
        source: click.source,
        partner: click.partner,
        vendor: click.vendor,
        product: click.product,
        placement: click.placement,
        link_url: click.link_url,
        slot: click.slot,
        destination_type: click.destination_type,
        destination: click.destination,
        ...experimentEventParams(),
      }
      trackEvent('affiliate_click', payload)
      trackEvent('hop_click', {
        ...payload,
        card_id: click.slot,
      })
    }
    document.addEventListener('click', onClick, true)
    return () => {
      delete document.documentElement.dataset.hopClick
      document.removeEventListener('click', onClick, true)
    }
  }, [site])
  return null
}
