/**
 * CarloOS Footer — site-aware footer component
 * Renders footer link columns from siteConfig.
 * Handles affiliate disclosure, legal links, and newsletter teaser.
 */

import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { Logo } from './Logo'

interface FooterProps {
  siteId: SiteId
  /** Show affiliate disclosure paragraph */
  showAffiliateDisclosure?: boolean
}

export function Footer({ siteId, showAffiliateDisclosure = true }: FooterProps) {
  const config = getSiteConfig(siteId)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      {/* Main grid */}
      <div className="px-container-sm sm:px-container py-16">
        <div className="mx-auto max-w-container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="no-underline block mb-4" aria-label={config.theme.siteName}>
              <Logo config={config} size="footer" color="var(--brand-white)" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {config.theme.siteTagline}
            </p>
          </div>

          {/* Link columns */}
          {config.footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-2xs font-bold tracking-eyebrow uppercase text-white mb-4">
                {col.heading}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 no-underline hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {showAffiliateDisclosure && (
          <AffiliateDisclosure variant="footer" siteId={siteId} />
        )}

        {/* Efty listing link — discreet, only renders when siteConfig.eftyUrl is set.
            Per csro-dir-2026-W22-008: tier-gated; Tier-A flagships (Dog/Fish) leave
            eftyUrl unset → nothing renders. */}
        {config.eftyUrl && (
          <div className="border-t border-white/10 pt-4 mt-6 text-center">
            <a
              href={config.eftyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 no-underline hover:text-white/70 transition-colors"
            >
              This domain is for sale →
            </a>
          </div>
        )}

        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <span className="text-xs text-white/50">
            © {currentYear} {config.theme.siteName} — All rights reserved
          </span>
          <div className="flex gap-5 flex-wrap">
            {[
              { label: 'Privacy Policy', href: '/legal/privacy-policy' },
              { label: 'Terms of Use', href: '/legal/terms' },
              { label: 'Disclosure', href: '/disclosure' },
              { label: 'Editorial Standards', href: '/editorial-standards' },
              ...(siteId === 'dog-com' || siteId === 'fish-com' || siteId === 'horses-com'
                ? [{ label: 'Inquiries', href: '/inquire' }]
                : []),
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/55 no-underline hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
