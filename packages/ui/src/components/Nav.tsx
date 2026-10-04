'use client'

/**
 * CarloOS Nav — site-aware navigation component
 * Reads nav links from siteConfig. Handles sticky behavior, scroll shadow,
 * mobile hamburger, and CTA highlight.
 */

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'
import { Logo } from './Logo'

interface NavProps {
  siteId: SiteId
  /** Override the active path for highlighting (defaults to window.location.pathname) */
  activePath?: string
}

export function Nav({ siteId, activePath }: NavProps) {
  const config = getSiteConfig(siteId)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuWasOpen = useRef(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function closeMenu() {
    setMobileOpen(false)
  }

  useEffect(() => {
    if (!mobileOpen) {
      if (menuWasOpen.current) menuButtonRef.current?.focus()
      menuWasOpen.current = false
      return
    }
    menuWasOpen.current = true
    const frame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
    })
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  function trapMenuTab(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab' || !menuRef.current) return
    const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a[href]'))
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'flex items-center justify-between',
          'px-container-sm sm:px-container',
          'h-nav',
          'bg-brand-white/95 backdrop-blur-md',
          'border-b border-brand-border',
          'transition-shadow duration-300',
          scrolled ? 'shadow-nav' : '',
        ].join(' ')}
        aria-label="Main navigation"
      >
        {/* Logo — $0 typographic wordmark with brand-primary TLD dot */}
        <Link
          href="/"
          className="inline-flex items-center min-h-11 text-brand-dark no-underline"
          onClick={closeMenu}
        >
          <Logo config={config} size="nav" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0" role="list">
          {config.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  'text-sm font-medium no-underline transition-colors duration-200',
                  item.highlight
                    ? 'bg-brand-primary text-brand-white px-4 py-2 rounded font-semibold hover:bg-brand-primary-light'
                    : 'text-brand-text-mid hover:text-brand-primary',
                  activePath === item.href ? 'text-brand-primary' : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 cursor-pointer border-0 bg-transparent"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="site-menu"
        >
          <span className={[
            'block w-6 h-0.5 bg-brand-dark transition-all duration-200',
            mobileOpen ? 'translate-y-2 rotate-45' : '',
          ].join(' ')} />
          <span className={[
            'block w-6 h-0.5 bg-brand-dark transition-all duration-200',
            mobileOpen ? 'opacity-0' : '',
          ].join(' ')} />
          <span className={[
            'block w-6 h-0.5 bg-brand-dark transition-all duration-200',
            mobileOpen ? '-translate-y-2 -rotate-45' : '',
          ].join(' ')} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Menu */}
          <div
            ref={menuRef}
            id="site-menu"
            className="fixed top-nav left-0 right-0 z-50 max-h-[calc(100dvh-4.25rem)] overflow-y-auto bg-brand-white border-b border-brand-border shadow-nav lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onKeyDown={trapMenuTab}
          >
            <ul className="list-none m-0 p-0 flex flex-col" role="list">
              {config.nav.map((item) => (
                <li key={item.href} className="border-b border-brand-border last:border-0">
                  <Link
                    href={item.href}
                    className={[
                      'flex min-h-11 items-center break-words px-6 py-3 text-sm font-medium no-underline transition-colors',
                      item.highlight
                        ? 'text-brand-primary font-semibold'
                        : 'text-brand-text-mid hover:text-brand-primary',
                    ].join(' ')}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 1023px) {
          a[data-hub-item]:not(.block) {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
          }
        }
      `}</style>
      {/* Spacer to push content below fixed nav */}
      <div className="h-nav" aria-hidden="true" />
    </>
  )
}
