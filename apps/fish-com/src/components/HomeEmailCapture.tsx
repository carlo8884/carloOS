import Link from 'next/link'
import { IconArrowRight } from './HomeTriage'

const START_LINKS = [
  {
    title: 'New-tank builder',
    note: 'Volume, filter, and cycle order before the first fish.',
    href: '/tools/aquarium-setup-builder',
  },
  {
    title: 'Stocking planner',
    note: 'A slim-inch ceiling from footprint and filter class.',
    href: '/tools/stocking-calculator',
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
                <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary group-hover:text-brand-dark">Start here</span>
              </Link>
            </div>
            <div className="mb-2 flex items-center justify-center lg:justify-start gap-2.5">
              <h2 className="font-display text-2xl font-bold text-brand-dark italic mb-0">
                New-tank setup and stocking
              </h2>
            </div>
            <div className="text-sm text-brand-text-mid mb-0 leading-relaxed flex items-start justify-center lg:justify-start gap-2.5">
              <span>Build the tank first, then sketch a slim-inch ceiling — on this site, no email required.</span>
            </div>
          </div>
          <Link
            href="/setup"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-primary no-underline hover:text-brand-dark"
          >
            Setup guides
            <IconArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {START_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
            >
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <div className="font-display font-bold text-brand-dark text-base leading-tight italic group-hover:text-brand-primary">
                    {item.title}
                  </div>
                  <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-brand-primary" />
                </div>
                <div className="text-xs text-brand-text-mid mt-1 leading-relaxed flex items-start gap-2">
                  <span>{item.note}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
