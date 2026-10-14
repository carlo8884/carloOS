'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export type StickyLink = { href: string; label: string }

const HIDDEN = ['/admin', '/dashboard', '/api']

/**
 * Mobile-only bottom bar with on-site next steps. Internal links only, so it
 * carries no affiliate link and needs no disclosure. It appears after the
 * reader scrolls one screen and can be dismissed for the session.
 */
export function MobileStickyCta({ primary, secondary }: { primary: StickyLink; secondary?: StickyLink }) {
  const path = usePathname() || ''
  const [shown, setShown] = useState(false)
  const [closed, setClosed] = useState(false)
  useEffect(() => {
    try {
      if (sessionStorage.getItem('sticky-cta-closed') === '1') setClosed(true)
    } catch {}
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (closed || HIDDEN.some((p) => path === p || path.startsWith(`${p}/`))) return null
  const here = (href: string) => path === href
  return (
    <div
      data-testid="mobile-sticky-cta"
      aria-hidden={!shown}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white px-3 py-2 shadow-lg transition-transform duration-200 ${shown ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`}
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2">
        {!here(primary.href) && (
          <a href={primary.href} tabIndex={shown ? 0 : -1} className="flex-1 rounded-md bg-brand-primary px-3 py-2.5 text-center text-sm font-bold text-white no-underline">
            {primary.label}
          </a>
        )}
        {secondary && !here(secondary.href) && (
          <a href={secondary.href} tabIndex={shown ? 0 : -1} className="flex-1 rounded-md border border-brand-border px-3 py-2.5 text-center text-sm font-bold text-brand-dark no-underline">
            {secondary.label}
          </a>
        )}
        <button
          type="button"
          tabIndex={shown ? 0 : -1}
          aria-label="Close"
          onClick={() => {
            setClosed(true)
            try { sessionStorage.setItem('sticky-cta-closed', '1') } catch {}
          }}
          className="px-2 py-2 text-lg leading-none text-brand-text-mid"
        >
          ×
        </button>
      </div>
    </div>
  )
}
