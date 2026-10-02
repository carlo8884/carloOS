import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

const START_LINKS = [
  {
    title: 'New-tank builder',
    note: 'Volume, filter, and cycle order before the first fish.',
    href: '/tools/aquarium-setup-builder',
    imageKey: 'fish-com:category-planted',
    imageAlt: 'Lush aquatic plants in a planted aquarium',
  },
  {
    title: 'Stocking planner',
    note: 'A slim-inch ceiling from footprint and filter class.',
    href: '/tools/stocking-calculator',
    imageKey: 'fish-com:species-thumb-guppy',
    imageAlt: 'A guppy fish',
  },
]

export function HomeEmailCapture() {
  return (
    <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
              Start here
            </p>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2 italic">
              New-tank setup and stocking
            </h2>
            <p className="text-sm text-brand-text-mid mb-0 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Build the tank first, then sketch a slim-inch ceiling — on this site, no email required.
            </p>
            <Link
              href="/tools/aquarium-setup-builder"
              className="group mt-4 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all text-left"
            >
              <div className={`relative h-16 w-24 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                <StockImage manifestKey="fish-com:category-planted" alt="Lush aquatic plants in a planted aquarium" aspect="4:3" subtleCredit />
              </div>
              <div className="pr-3 py-2">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">New-tank builder</div>
                <p className="text-xs text-brand-text-mid mt-0.5">Volume, filter, and cycle order.</p>
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
                  <div className="font-display font-bold text-brand-dark text-base leading-tight italic group-hover:text-brand-primary">
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
