import { EmailCapture } from '@carloOS/ui'
import Link from 'next/link'

export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <p className="text-center text-sm text-brand-text-mid mb-4">
          Stocking and water-parameter notes stay on this site.{' '}
          <Link href="/tools/stocking-calculator" className="text-brand-primary no-underline hover:underline">
            Open the stocking planner
          </Link>
          {' '}— no email required.
        </p>
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="Stocking and water-parameter notes"
          subtitle="What to test this week, a slim-inch planning ceiling for your tank, and one chemistry trap to skip. On this site — not emailed."
          source="homepage-under-hero"
          ctaText="Send the tank notes"
          perks={['Stocking math', 'Water-parameter checks']}
        />
      </div>
    </section>
  )
}
