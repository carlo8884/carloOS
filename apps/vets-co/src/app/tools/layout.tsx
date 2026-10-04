import type { ReactNode } from 'react'
import { HubMoneyLinks } from '@carloOS/ui'

export default function VetsToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <HubMoneyLinks
        hubHref="/tools"
        hubLabel="All vet tools"
        links={[
          { href: '/reviews/best-pet-insurance', label: 'Best pet insurance' },
          { href: '/telehealth', label: 'Pet telehealth' },
          { href: '/insurance/wellness-plans-vs-insurance', label: 'Wellness vs insurance' },
        ]}
      />
    </>
  )
}
