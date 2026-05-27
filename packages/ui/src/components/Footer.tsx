/**
 * CarloOS Footer — site-aware footer component
 * Renders footer link columns from siteConfig.
 * Handles affiliate disclosure, legal links, and newsletter teaser.
 */

import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'

interface FooterProps {
  siteId: SiteId
  /** Show affiliate disclosure paragraph */
  showAffiliateDisclosure?: boolean
}

export function Footer({ siteId, showAffiliateDisclosure = true }: FooterProps) {
  const config = getSiteConfig(siteId)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark">
      {/* Main grid */}
      <div className="px-container sm:px-container-sm py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-black text-brand-white no-underline tracking-tight block mb-4"
            >
              {config.theme.siteName}
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {config.theme.siteTagline}
            </p>
          </div>

          {/* Link columns */}
          {config.footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-2xs font-bold tracking-eyebrow uppercase text-white mb-4">
                {col.heading}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 no-underline hover:text-brand-primary-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <span className="text-xs text-white/25">
            © {currentYear} {config.theme.siteName} — All rights reserved
          </span>
          <div className="flex gap-5 flex-wrap">
            {[
              { label: 'Privacy Policy', href: '/legal/privacy-policy' },
              { label: 'Terms of Use', href: '/legal/terms' },
              { label: 'Affiliate Disclosure', href: '/legal/affiliate-disclosure' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/25 no-underline hover:text-white/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Affiliate disclosure */}
        {showAffiliateDisclosure && (
          <p className="mt-6 pt-5 border-t border-white/5 text-xs text-white/20 leading-relaxed">
            {config.theme.siteName} participates in affiliate marketing programs including
            Amazon Associates, Chewy, and pet insurance referral programs. When you
            purchase through links on this site, we may earn a commission at no extra
            cost to you. Content is for general information only and is not a substitute
            for advice from a licensed veterinarian.
          </p>
        )}
      </div>
    </footer>
  )
}
