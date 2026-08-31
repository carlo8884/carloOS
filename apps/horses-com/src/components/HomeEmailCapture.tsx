import { EmailCapture } from '@carloOS/ui'

/** Homepage capture — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="This week for your horse"
          subtitle="One short Tuesday email: what to check this week, one product worth the money, one management trap to avoid."
          source="homepage-under-hero"
          ctaText="Send the weekly notes"
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
