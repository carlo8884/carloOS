import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'fish-com',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Fish.com.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Fish.com" heroKey="fish-com:hero" />
}
