'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export type StickyLink = { href: string; label: string }

const HIDDEN = ['/admin', '/dashboard', '/api']

/**
 * Mobile-only bottom bar with one on-site next step (premium-affiliate-site-design:
 * sticky CTA at most 56px, one action, dismissible, shown after the first scroll,
 * hidden near the footer). Internal links only, so it carries no affiliate link
 * and needs no disclosure. `secondary` is accepted for old callers and ignored.
 */
export function MobileStickyCta({ primary }: { primary: StickyLink; secondary?: StickyLink }) {
  const path = usePathname() || ''
  const [scrolled, setScrolled] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)
  const [closed, setClosed] = useState(false)
  useEffect(() => {
    try {
      if (sessionStorage.getItem('sticky-cta-closed') === '1') setClosed(true)
    } catch {}
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const footer = document.querySelector('footer')
    let io: IntersectionObserver | undefined
    if (footer && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => setNearFooter(e.isIntersecting), { rootMargin: '0px 0px 200px 0px' })
      io.observe(footer)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])
  if (closed || path === primary.href || HIDDEN.some((p) => path === p || path.startsWith(`${p}/`))) return null
  const shown = scrolled && !nearFooter
  return (
    <div
      data-testid="mobile-sticky-cta"
      data-sticky-cta
      aria-hidden={!shown}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white px-3 py-1 shadow-lg transition-transform duration-200 ${shown ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`}
      style={{ paddingBottom: 'calc(0.25rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2">
        <a href={primary.href} tabIndex={shown ? 0 : -1} className="flex min-h-[44px] flex-1 items-center justify-center truncate rounded-md bg-brand-primary px-3 text-center text-sm font-bold text-white no-underline">
          {primary.label}
        </a>
        <button
          type="button"
          tabIndex={shown ? 0 : -1}
          aria-label="Close"
          onClick={() => {
            setClosed(true)
            try { sessionStorage.setItem('sticky-cta-closed', '1') } catch {}
          }}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-lg leading-none text-brand-text-mid"
        >
          ×
        </button>
      </div>
    </div>
  )
}
