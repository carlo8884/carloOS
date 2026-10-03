import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

const START_LINKS = [
  {
    title: 'First-horse roadmap',
    note: 'What to decide before you buy — on this site, no email required.',
    href: '/first-horse-roadmap',
    imageKey: 'horses-com:hero',
    imageAlt: 'A horse galloping through an open field',
  },
  {
    title: 'Care guides',
    note: 'Daily husbandry and the guides that follow the first 90 days.',
    href: '/care',
    imageKey: 'horses-com:guide-saddle-fit',
    imageAlt: 'A horse and rider working in tack at the canter',
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
            <div className={`relative h-14 w-20 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="horses-com:featured-quarter-horse" alt="A horse and rider in an all-purpose schooling session" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="font-display font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary">90-day roadmap</div>
              <p className="text-xs text-brand-text-mid mt-0.5">Decide before you buy.</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {START_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
            >
              <div className={`relative h-28 bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                <StockImage manifestKey={item.imageKey} alt={item.imageAlt} aspect="16:9" subtleCredit />
              </div>
              <div className="p-4">
                <div className="font-display font-bold text-brand-dark text-base leading-tight group-hover:text-brand-primary">
                  {item.title}
                </div>
                <p className="text-xs text-brand-text-mid mt-1 leading-relaxed">{item.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
