import Link from 'next/link'

/** Homepage + hub resource strip — sits under the hero. Hidden on /admin and /dashboard. */
export function HomeEmailCapture() {
  return (
    <section
      className="px-container-sm sm:px-container py-8 border-b border-brand-border"
      style={{ background: 'var(--brand-primary-pale)' }}
    >
      <div className="mx-auto max-w-container text-center">
        <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
          Start here
        </p>
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
          Emergency triage card
        </h2>
        <p className="text-sm text-brand-text-mid mb-5 max-w-lg mx-auto leading-relaxed">
          ER-now signs, same-day signs, and what to do in the car — on this site, no email required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/emergency-triage-card"
            className="inline-block px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-md no-underline hover:opacity-90 transition-opacity"
          >
            Open the emergency triage card
          </Link>
          <Link
            href="/guides/when-to-go-to-the-vet"
            className="inline-block px-6 py-3 border border-brand-border bg-white text-brand-dark text-sm font-bold rounded-md no-underline hover:border-brand-primary transition-colors"
          >
            When to go to the vet
          </Link>
        </div>
      </div>
    </section>
  )
}
