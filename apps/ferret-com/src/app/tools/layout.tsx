import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function FerretToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/tools"
        hubLabel="All ferret tools"
        links={[
          { href: '/reviews/best-ferret-cage', label: 'Best ferret cage' },
          { href: '/reviews/best-ferret-litter', label: 'Best ferret litter' },
          { href: '/reviews/best-ferret-harness', label: 'Best ferret harness' },
        ]}
      />
    </>
  )
}
