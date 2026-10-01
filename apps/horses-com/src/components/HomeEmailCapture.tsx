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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
              Start here
            </p>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
              First-horse roadmap
            </h2>
            <p className="text-sm text-brand-text-mid mb-0 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              What to decide before you buy, and the care guides that follow — on this site, no email required.
            </p>
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
      </div>
    </section>
  )
}
