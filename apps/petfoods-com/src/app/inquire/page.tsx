import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'petfoods-com',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Petfoods.com.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Petfoods.com" heroKey="petfoods-com:category-brands" />
}
