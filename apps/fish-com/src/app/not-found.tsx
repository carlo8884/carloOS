import type { Metadata } from 'next'
import { MissedPage } from '@carloOS/ui'

export const metadata: Metadata = {
  title: 'Page not found | Fish.com',
  description: 'This address is not a Fish.com page. The buying guides below are.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://fish.com/' },
}

export default function NotFound() {
  return <MissedPage siteId="fish-com" kind="missing" />
}
