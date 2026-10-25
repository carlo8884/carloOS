import Link from 'next/link'

const START_LINKS = [
  {
    title: 'First-horse roadmap',
    note: 'What to decide before you buy — on this site, no email required.',
    href: '/first-horse-roadmap',
  },
  {
    title: 'Care guides',
    note: 'Daily husbandry and the guides that follow the first 90 days.',
    href: '/care',
  },
]

/** Homepage + hub resource strip — sits under the hero (not the footer). */
export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <div className="flex items-end justify-between mb-5 flex-wrap gap-4">
          <div className="text-center lg:text-left max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Start here</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2 italic">
              First-horse roadmap
            </h2>
            <p className="text-sm text-brand-text-mid mb-0 leading-relaxed">
              What to decide before you buy, and the care guides that follow — on this site, no email required.
            </p>
          </div>
          <Link
            href="/first-horse-roadmap"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className="px-3 py-2">
              <div className="font-display font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary">90-day roadmap <span aria-hidden="true">&rarr;</span></div>
              <p className="text-xs text-brand-text-mid mt-0.5">Decide before you buy.</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {START_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start justify-between gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
            >
              <div className="py-4 pl-4 pr-1">
                <div className="font-display font-bold text-brand-dark text-base leading-tight group-hover:text-brand-primary">
                  {item.title}
                </div>
                <p className="text-xs text-brand-text-mid mt-1 leading-relaxed">{item.note}</p>
              </div>
              <span aria-hidden="true" className="mt-4 mr-4 shrink-0 text-brand-text-mid group-hover:text-brand-primary">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
