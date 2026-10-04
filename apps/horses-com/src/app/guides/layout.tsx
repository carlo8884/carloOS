import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function HorsesGuidesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/guides"
        hubLabel="All horse guides"
        links={[
          { href: '/reviews/best-equine-supplements', label: 'Best equine supplements' },
          { href: '/reviews/best-winter-horse-blankets', label: 'Best winter blankets' },
          { href: '/ownership/horse-insurance', label: 'Horse insurance covers' },
        ]}
      />
    </>
  )
}
