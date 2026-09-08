import { EmailCapture } from '@carloOS/ui'
import Link from 'next/link'

/** Homepage capture — sits under the hero. Hidden on /admin and /dashboard. */
export function HomeEmailCapture() {
  return (
    <section
      className="px-container-sm sm:px-container py-8 border-b border-brand-border"
      style={{ background: 'var(--brand-primary-pale)' }}
    >
      <div className="mx-auto max-w-container">
        <p className="text-center text-sm text-brand-text-mid mb-4">
          The triage card is on this site.{' '}
          <Link href="/emergency-triage-card" className="text-brand-primary no-underline hover:underline">
            Open the emergency triage card
          </Link>
          {' '}— no email required.
        </p>
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="The Emergency Triage Card"
          subtitle="Fifteen signs that mean drive to the ER, four that mean call your vet by morning, and what to do in the car. On this page — not emailed."
          ctaText="Send the triage card"
          source="homepage-under-hero"
          perks={[
            'One page',
            'Citation-anchored',
            'No paid placements',
          ]}
        />
      </div>
    </section>
  )
}
