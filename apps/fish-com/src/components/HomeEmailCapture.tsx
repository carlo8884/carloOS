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
        <div className="flex items-end justify-between mb-5 flex-wrap gap-4">
          <div className="text-center lg:text-left max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/tools/aquarium-setup-builder"
                className="group flex items-center gap-2.5 no-underline"
              >
                <div className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                  <StockImage manifestKey="fish-com:category-planted" alt="Lush aquatic plants in a planted aquarium" aspect="4:3" subtleCredit />
                </div>
                <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary group-hover:text-brand-dark">Start here</span>
              </Link>
            </div>
            <div className="mb-2 flex items-center justify-center lg:justify-start gap-2.5">
              <div className={`relative h-10 w-14 shrink-0 overflow-hidden rounded-md bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                <StockImage manifestKey="fish-com:category-planted" alt="Lush aquatic plants in a planted aquarium" aspect="4:3" subtleCredit />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-dark italic mb-0">
                New-tank setup and stocking
              </h2>
            </div>
            <div className="text-sm text-brand-text-mid mb-0 leading-relaxed">
              Build the tank first, then sketch a slim-inch ceiling — on this site, no email required.
            </div>
          </div>
          <Link
            href="/setup"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className={`relative h-14 w-20 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:species-thumb-goldfish" alt="A goldfish" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="mb-1 flex items-center gap-2">
                <div className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                  <StockImage manifestKey="fish-com:species-thumb-goldfish" alt="A goldfish" aspect="4:3" subtleCredit />
                </div>
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">Setup guides</div>
              </div>
              <div className="text-xs text-brand-text-mid mt-0.5">Size, cycle, then the first fish.</div>
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
                <div className="mb-1 flex items-center gap-2">
                  <div className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                    <StockImage manifestKey={item.imageKey} alt={item.imageAlt} aspect="4:3" subtleCredit />
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight italic group-hover:text-brand-primary">
                    {item.title}
                  </div>
                </div>
                <div className="text-xs text-brand-text-mid mt-1 leading-relaxed">{item.note}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
