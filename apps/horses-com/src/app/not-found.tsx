import type { Metadata } from 'next'
import { MissedPage } from '@carloOS/ui'

export const metadata: Metadata = {
  title: 'Page not found | Horses.com',
  description: 'This address is not a Horses.com page. The buying guides below are.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://horses.com/' },
}

export default function NotFound() {
  return <MissedPage siteId="horses-com" kind="missing" />
}
