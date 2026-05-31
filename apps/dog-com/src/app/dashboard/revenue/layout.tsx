import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

/**
 * Layout metadata for /dashboard/revenue.
 *
 * The page itself is `'use client'` (interactive dashboard) so cannot
 * export metadata directly. This layout supplies title + noIndex via
 * the shared buildMetadata helper (which the metadata-policy CI gate
 * recognizes per PR #179 layout.tsx fallback). The robots.txt /dashboard/
 * disallow (csro-dir-014) is the primary crawler-block; the noIndex here
 * is belt-and-braces.
 */
export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Revenue Dashboard — Internal',
  description: 'Internal admin dashboard for affiliate-click attribution. Not indexed.',
  path: '/dashboard/revenue',
  type: 'website',
  noIndex: true,
})

export default function RevenueDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
