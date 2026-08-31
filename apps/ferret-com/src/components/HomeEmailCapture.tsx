import { EmailCapture } from '@carloOS/ui'

/** Homepage capture — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="mx-auto max-w-container">
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The first-year schedule, in your inbox"
          subtitle="A printable 52-week schedule plus an eight-email course: vaccines, neuter timing, dental onset, diet milestones, insulinoma watch window. One signup. Free."
          ctaText="Send the first-year schedule"
          source="homepage-under-hero"
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
