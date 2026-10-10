import type { Metadata } from 'next'
import { MissedPage } from '@carloOS/ui'

export const metadata: Metadata = {
  title: 'Page not found | Ferret.com',
  description: 'This address is not a Ferret.com page. The buying guides below are.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://ferret.com/' },
}

export default function NotFound() {
  return <MissedPage siteId="ferret-com" kind="missing" />
}
