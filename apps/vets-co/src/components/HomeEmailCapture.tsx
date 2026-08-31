import { EmailCapture } from '@carloOS/ui'

/** Homepage capture — sits under the hero. Hidden on /admin and /dashboard. */
export function HomeEmailCapture() {
  return (
    <section
      className="px-container-sm sm:px-container py-8 border-b border-brand-border"
      style={{ background: 'var(--brand-primary-pale)' }}
    >
      <div className="mx-auto max-w-container">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="The Emergency Triage Card"
          subtitle="One page: fifteen signs that mean drive to the ER, four that mean call your vet by morning, and what to do in the car. Free."
          ctaText="Send the triage card"
          source="homepage-under-hero"
          perks={[
            'One PDF, one page',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </section>
  )
}
