import { EmailCapture } from '@carloOS/ui'

export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="Stocking and water-parameter notes"
          subtitle="One short email: what to test this week, how many fish your tank can hold, one chemistry trap to skip."
          source="homepage-under-hero"
          ctaText="Send the tank notes"
          perks={['Stocking math', 'Water-parameter checks', 'Unsubscribe anytime']}
        />
      </div>
    </section>
  )
}
