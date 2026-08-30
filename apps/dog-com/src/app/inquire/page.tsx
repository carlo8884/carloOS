import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Dog.com.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Dog.com" heroKey="dog-com:hero" />
}
