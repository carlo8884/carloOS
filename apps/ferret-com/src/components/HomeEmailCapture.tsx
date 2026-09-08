import { EmailCapture } from '@carloOS/ui'
import Link from 'next/link'

/** Homepage capture — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="mx-auto max-w-container">
        <p className="text-center text-sm text-brand-text-mid mb-4">
          The first-year schedule is on this site.{' '}
          <Link href="/first-year-schedule" className="text-brand-primary no-underline hover:underline">
            Open the first-year schedule
          </Link>
          {' '}— no email required.
        </p>
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The first-year schedule"
          subtitle="A 52-week schedule covering vaccines, neuter timing, dental onset, diet milestones, and the insulinoma watch window. On this site — not emailed."
          ctaText="Send the first-year schedule"
          source="homepage-under-hero"
          perks={[
            'We do not sell or rent your address',
          ]}
        />
      </div>
    </section>
  )
}
