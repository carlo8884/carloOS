'use client'

/**
 * CarloOS Nav — site-aware navigation component
 * Reads nav links from siteConfig. Handles sticky behavior, scroll shadow,
 * mobile hamburger, and CTA highlight.
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'

interface NavProps {
  siteId: SiteId
  /** Override the active path for highlighting (defaults to window.location.pathname) */
  activePath?: string
}

export function Nav({ siteId, activePath }: NavProps) {
  const config = getSiteConfig(siteId)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change / escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'flex items-center justify-between',
          'px-container sm:px-container-sm',
          'h-nav',
          'bg-brand-white/95 backdrop-blur-md',
          'border-b border-brand-border',
          'transition-shadow duration-300',
          scrolled ? 'shadow-nav' : '',
        ].join(' ')}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-black tracking-tight text-brand-dark no-underline"
          onClick={() => setMobileOpen(false)}
        >
          {config.theme.siteName}
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
          className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer border-0 bg-transparent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
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
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Menu */}
          <div
            className="fixed top-nav left-0 right-0 z-50 bg-brand-white border-b border-brand-border shadow-nav lg:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul className="list-none m-0 p-0 flex flex-col" role="list">
              {config.nav.map((item) => (
                <li key={item.href} className="border-b border-brand-border last:border-0">
                  <Link
                    href={item.href}
                    className={[
                      'block px-6 py-4 text-sm font-medium no-underline transition-colors',
                      item.highlight
                        ? 'text-brand-primary font-semibold'
                        : 'text-brand-text-mid hover:text-brand-primary',
                    ].join(' ')}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Spacer to push content below fixed nav */}
      <div className="h-nav" aria-hidden="true" />
    </>
  )
}
