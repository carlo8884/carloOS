import { EmailCapture } from '@carloOS/ui'

export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="Weekly breed-care notes"
          subtitle="One short Tuesday email: what to do this week for your breed, one risk to watch, one thing that is not worth the money."
          source="homepage-under-hero"
          ctaText="Send the weekly notes"
          perks={['Breed-specific care', 'Sourced — no paid placements', 'Unsubscribe anytime']}
        />
      </div>
    </section>
  )
}
