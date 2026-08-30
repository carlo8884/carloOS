import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'vets-co',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Vets.co.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Vets.co" heroKey="vets-co:hero" />
}
