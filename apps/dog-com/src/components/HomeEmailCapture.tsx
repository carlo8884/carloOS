import { EmailCapture } from '@carloOS/ui'

/** Always-on homepage capture. Affiliate hops already live on /reviews via /go. */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-section">
      <div className="max-w-container mx-auto">
        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="This week for your dog"
          subtitle="One short Tuesday email: what to do this week (by life stage), one product worth the money, one trap to avoid."
          source="homepage"
          ctaText="Get the weekly"
          perks={[
            'By life stage (puppy / adult / senior)',
            'Sourced — no paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </section>
  )
}
