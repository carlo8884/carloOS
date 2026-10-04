import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function DogToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/tools"
        hubLabel="All dog tools"
        links={[
          { href: '/reviews/best-dog-crates', label: 'Best dog crates' },
          { href: '/reviews/best-dry-dog-food', label: 'Best dry dog food' },
          { href: '/reviews/best-dog-harnesses', label: 'Best dog harnesses' },
        ]}
      />
    </>
  )
}
