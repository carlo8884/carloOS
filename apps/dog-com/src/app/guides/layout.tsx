import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function DogGuidesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/guides"
        hubLabel="All dog guides"
        links={[
          { href: '/reviews/best-dry-dog-food', label: 'Best dry dog food' },
          { href: '/reviews/best-flea-tick-prevention', label: 'Flea and tick prevention' },
          { href: '/reviews/best-dog-crates', label: 'Best dog crates' },
        ]}
      />
    </>
  )
}
