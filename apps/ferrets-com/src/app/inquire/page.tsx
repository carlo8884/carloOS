import type { Metadata } from 'next'
import { buildMetadata, InquireOfferScreen } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'ferrets-com',
    title: 'Make an offer',
    description: 'Acquisition and partnership inquiries for Ferrets.com.',
    path: '/inquire',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return <InquireOfferScreen siteName="Ferrets.com" heroKey="ferrets-com:home-masthead" />
}
