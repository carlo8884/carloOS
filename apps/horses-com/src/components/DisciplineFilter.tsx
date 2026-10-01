import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

const FILL_IMAGE =
  '[&_figure]:!my-0 [&_figure]:!h-full [&_figure]:!w-full [&_figure>div]:!absolute [&_figure>div]:!inset-0 [&_figure>div]:!rounded-none'

const DISCIPLINE_CHIPS: {
  label: string
  href: string
  manifestKey: string
  imageAlt: string
}[] = [
  { label: 'Dressage riders', href: '/disciplines/dressage', manifestKey: 'horses-com:guide-saddle-fit', imageAlt: 'A dressage horse and rider working in tack at the canter' },
  { label: 'Show jumpers', href: '/disciplines/show-jumping', manifestKey: 'horses-com:featured-joint-supplements', imageAlt: 'A show jumper mid-flight over a fence' },
  { label: 'Eventers', href: '/disciplines/eventing', manifestKey: 'horses-com:supplement-joint', imageAlt: 'A sport horse in motion' },
  { label: 'Western riders', href: '/disciplines/western-pleasure', manifestKey: 'horses-com:featured-quarter-horse', imageAlt: 'A horse and rider in an all-purpose schooling session' },
  { label: 'Reining', href: '/disciplines/reining', manifestKey: 'horses-com:breed-quarter-horse', imageAlt: 'A horse and rider working in an all-purpose schooling session' },
  { label: 'Trail riders', href: '/disciplines/trail-riding', manifestKey: 'horses-com:hero', imageAlt: 'A horse galloping through an open field' },
  { label: 'Racing', href: '/racing', manifestKey: 'horses-com:category-disciplines', imageAlt: 'A dressage horse and rider in competition' },
  { label: 'All disciplines', href: '/disciplines', manifestKey: 'horses-com:category-breeds', imageAlt: 'Close-up portrait of a horse' },
]

export function DisciplineFilter() {
  return (
    <nav aria-label="Browse by discipline" className="mb-10 -mt-2">
      <div className="text-2xs font-bold uppercase tracking-eyebrow mb-3" style={{ color: 'var(--brand-text-light)' }}>
        For
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {DISCIPLINE_CHIPS.map((chip) => (
          <Link
            key={chip.label}
            href={chip.href}
            className="group flex items-center gap-2.5 rounded-md no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'var(--brand-white)',
              color: 'var(--brand-text-mid)',
              border: '1px solid var(--brand-border)',
            }}
          >
            <span className={`relative h-14 w-16 shrink-0 overflow-hidden rounded-l-md ${FILL_IMAGE}`}>
              <StockImage
                manifestKey={chip.manifestKey}
                fallbackKey="horses-com:hero"
                alt={chip.imageAlt}
                aspect="4:3"
                variant="inline"
                subtleCredit
              />
            </span>
            <span className="pr-2 text-xs font-semibold leading-tight group-hover:text-brand-primary">{chip.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
