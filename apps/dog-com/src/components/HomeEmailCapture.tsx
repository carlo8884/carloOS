import Link from 'next/link'

export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto text-center">
        <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
          Start here
        </p>
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
          Puppy checklist and crate size
        </h2>
        <p className="text-sm text-brand-text-mid mb-5 max-w-lg mx-auto leading-relaxed">
          Day-one essentials and the crate measurement — on this site, no email required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools/new-puppy-checklist"
            className="inline-block px-6 py-3 bg-brand-primary text-brand-white text-sm font-bold rounded-md no-underline hover:bg-brand-primary-light transition-colors"
          >
            Open the puppy checklist
          </Link>
          <Link
            href="/tools/dog-crate-size-calculator"
            className="inline-block px-6 py-3 border border-brand-border bg-brand-white text-brand-dark text-sm font-bold rounded-md no-underline hover:border-brand-primary transition-colors"
          >
            Open the crate-size calculator
          </Link>
        </div>
      </div>
    </section>
  )
}
