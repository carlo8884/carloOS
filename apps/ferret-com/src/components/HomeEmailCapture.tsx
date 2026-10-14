import Link from 'next/link'
import { EmailCapture } from '@carloOS/ui'
import { siteSubscribeFormVisible } from '@carloOS/config/capture-flags'

/** Homepage + hub resource strip — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="mx-auto max-w-container text-center">
        <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
          Start here
        </p>
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
          First-year schedule
        </h2>
        <p className="text-sm text-brand-text-mid mb-5 max-w-lg mx-auto leading-relaxed">
          Vaccines, neuter timing, diet milestones, and the insulinoma watch window — on this site, no email required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/first-year-schedule"
            className="inline-block px-6 py-3 bg-brand-primary text-brand-white text-sm font-bold rounded-md no-underline hover:bg-brand-primary-light transition-colors"
          >
            Open the first-year schedule
          </Link>
        </div>
        {siteSubscribeFormVisible('ferret-com') && (
          <div data-testid="under-hero-email" className="mx-auto mt-5 max-w-lg text-left">
            <p className="text-sm font-semibold text-brand-dark mb-2 text-center">Get the first-year schedule plus vaccine and vet-check reminders by email.</p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              source="ferret-home-under-hero"
              title="Get the first-year schedule plus vaccine and vet-check reminders by email."
              ctaText="Sign me up"
              captureOpen
            />
          </div>
        )}
      </div>
    </section>
  )
}
