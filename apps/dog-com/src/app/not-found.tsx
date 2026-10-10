import type { Metadata } from 'next'
import { MissedPage } from '@carloOS/ui'

export const metadata: Metadata = {
  title: 'Page not found | Dog.com',
  description: 'This address is not a Dog.com page. The buying guides below are.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://dog.com/' },
}

export default function NotFound() {
  // Phone LCP is the lede. The lazy photo still loads before it in Lighthouse, so skip it here.
  return <MissedPage siteId="dog-com" kind="missing" photo={false} />
}
