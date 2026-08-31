import { EmailCapture } from '@carloOS/ui'

/** Always-on homepage capture — money-on-launch parity with Dog.com / Fish.com. */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-section">
      <div className="max-w-container mx-auto">
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="This week for your horse"
          subtitle="One short Tuesday email: what to check this week, one product worth the money, one management trap to avoid."
          source="homepage"
          ctaText="Get the weekly"
          perks={[
            'By discipline and life stage',
            'Sourced — no paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </section>
  )
}
