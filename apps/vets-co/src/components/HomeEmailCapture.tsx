import { EmailCapture } from '@carloOS/ui'

/** Always-on capture. Affiliate hops already live via /go. */
export function HomeEmailCapture() {
  return (
    <section
      className="px-container-sm sm:px-container py-section"
      style={{ background: 'var(--brand-primary-pale)' }}
    >
      <div className="mx-auto max-w-container">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="The Emergency Triage Card"
          subtitle="A one-page reference: the fifteen signs that mean drive to the ER, the four that mean call your vet by morning, and what to do in the car. Free for subscribers."
          ctaText="Get the card"
          source="homepage-triage-card"
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
