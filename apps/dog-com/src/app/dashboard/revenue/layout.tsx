import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

/**
 * Server-component layout for the admin revenue dashboard.
 *
 * The dashboard page itself is a client component ('use client') and cannot
 * export metadata, so the title/description + noindex live here. This route is
 * admin-only and must NOT be indexed.
 *
 * Added 2026-05-31 (CSRO fix-forward) to unblock a red `main`: PR #160 shipped
 * /dashboard/revenue with no metadata, failing scripts/ci/metadata-policy.mjs
 * ("missing-title"). Per CLAUDE.md §7 (main-broken recovery) + bot-coordination
 * §8 (fix-forward to unblock main permitted across lanes). Monetization owns
 * this route's content; this is a minimal metadata-only unblock.
 */
export const metadata: Metadata = buildMetadata({
  title: 'Revenue Dashboard | Dog.com',
  description:
    'Admin-only revenue and affiliate-click dashboard for Dog.com. Not a public page.',
  noIndex: true,
})

export default function RevenueDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
