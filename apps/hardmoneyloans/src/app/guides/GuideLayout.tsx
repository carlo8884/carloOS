/**
 * GuideLayout — shared layout for /guides/* pages.
 *
 * Provides:
 *   - Title + intro
 *   - Article body (children rendered inside .carloOS-article)
 *   - Sidebar: in-article ad slot + quiz CTA + email capture
 *   - Affiliate disclosure at top
 */

import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  AdSlot,
  EmailCapture,
} from '@carloOS/ui'

interface GuideLayoutProps {
  title: string
  intro: string
  children: ReactNode
  /** Anchor for sidebar CTA */
  ctaText?: string
}

export function GuideLayout({ title, intro, children, ctaText = 'Find Your Lender' }: GuideLayoutProps) {
  return (
    <>
      <AffiliateDisclosure />

      <article className="px-container sm:px-container-sm py-12">
        <div className="mx-auto max-w-container-wide grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* Main column */}
          <div>
            <header className="mb-8">
              <div className="text-2xs uppercase tracking-wider text-brand-primary font-semibold mb-2">
                Hard Money Lending Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
                {title}
              </h1>
              <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl">{intro}</p>
            </header>

            <div className="carloOS-article">{children}</div>

            <AdSlot slot="in-article" className="mt-10" />
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-brand-dark rounded-lg p-5 text-brand-white">
              <h3 className="font-display text-lg font-bold mb-2">{ctaText}</h3>
              <p className="text-sm text-white/70 mb-4">
                Five questions → top 3 matched lenders.
              </p>
              <Link
                href="/quiz"
                className="block text-center px-4 py-2.5 bg-brand-primary text-brand-white text-sm font-semibold rounded no-underline"
              >
                Take the Quiz
              </Link>
            </div>

            <div className="bg-brand-white border border-brand-border rounded-lg p-5">
              <h3 className="font-display text-base font-bold mb-2">Weekly Market Update</h3>
              <p className="text-2xs text-brand-text-mid leading-relaxed mb-3">
                Top private money rates by state. No spam.
              </p>
              <EmailCapture
                siteId="hardmoneyloans"
                variant="sidebar"
                source="hardmoneyloans:market-update:guide"
                ctaText="Subscribe"
              />
            </div>

            <AdSlot slot="sidebar" />
          </aside>
        </div>
      </article>
    </>
  )
}
