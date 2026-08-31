import { EmailCapture } from '@carloOS/ui'

/** Always-on capture. Affiliate hops already live via /go. */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-section">
      <div className="mx-auto max-w-xl">
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The first-year schedule, in your inbox"
          subtitle="A printable 52-week schedule plus an eight-email course covering vaccines, neuter timing, dental onset, diet milestones, and the insulinoma watch window. One signup. Free."
          ctaText="Send me the schedule"
          source="homepage"
          perks={[
            'One-click unsubscribe',
            'We do not sell or rent your address',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </section>
  )
}
