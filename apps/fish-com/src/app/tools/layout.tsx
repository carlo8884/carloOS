import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function FishToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/tools"
        hubLabel="All aquarium tools"
        links={[
          { href: '/reviews/best-aquarium-filters', label: 'Best aquarium filters' },
          { href: '/reviews/best-aquarium-heaters', label: 'Best aquarium heaters' },
          { href: '/reviews/best-water-test-kits', label: 'Best water test kits' },
        ]}
      />
    </>
  )
}
