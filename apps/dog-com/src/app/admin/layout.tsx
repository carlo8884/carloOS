import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildMetadata } from '@carloOS/ui'

/**
 * Server-component layout for the CarloOS admin dashboard.
 *
 * The dashboard page itself is a client component ('use client') and cannot
 * export metadata, so noindex lives here. This route is admin-only and must
 * never be discoverable.
 *
 * Added 2026-06-01 polish-pass-Dog audit: /admin was an orphan (no inbound
 * internal link) with no metadata and no noindex protection, so it would
 * have been crawled on launch.
 */
export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  path: '/admin',
  title: 'Admin | Dog.com',
  description:
    'Admin-only operations dashboard for Dog.com. Not a public page.',
  noIndex: true,
})

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
