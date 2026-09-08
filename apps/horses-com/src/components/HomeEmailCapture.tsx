import { EmailCapture } from '@carloOS/ui'
import Link from 'next/link'

/** Homepage capture — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <p className="text-center text-sm text-brand-text-mid mb-4">
          Weekly horse notes stay on this site.{' '}
          <Link href="/care" className="text-brand-primary no-underline hover:underline">
            Open the care guides
          </Link>
          {' '}— no email required.
        </p>
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="This week for your horse"
          subtitle="What to check this week, one product worth the money, one management trap to avoid. On this site — not emailed."
          source="homepage-under-hero"
          ctaText="Send the notes"
          perks={[
            'Inbox notes only',
            'Sourced — no paid placements',
          ]}
        />
      </div>
    </section>
  )
}
