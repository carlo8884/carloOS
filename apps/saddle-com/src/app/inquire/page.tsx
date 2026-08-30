import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'saddle-com',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Saddle.com.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Saddle.com" heroKey="saddle-com:hero" />
}
