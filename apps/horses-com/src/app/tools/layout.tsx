import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function HorsesToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/tools"
        hubLabel="All horse tools"
        links={[
          { href: '/reviews/best-equine-supplements', label: 'Best equine supplements' },
          { href: '/reviews/best-winter-horse-blankets', label: 'Best winter blankets' },
          { href: '/ownership/horse-insurance', label: 'Horse insurance covers' },
        ]}
      />
    </>
  )
}
