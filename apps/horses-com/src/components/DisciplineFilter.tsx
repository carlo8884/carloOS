import Link from 'next/link'

const DISCIPLINE_CHIPS: {
  label: string
  href: string
}[] = [
  { label: 'Dressage riders', href: '/disciplines/dressage' },
  { label: 'Show jumpers', href: '/disciplines/show-jumping' },
  { label: 'Eventers', href: '/disciplines/eventing' },
  { label: 'Western riders', href: '/disciplines/western-pleasure' },
  { label: 'Reining', href: '/disciplines/reining' },
  { label: 'Trail riders', href: '/disciplines/trail-riding' },
  { label: 'Racing', href: '/racing' },
  { label: 'All disciplines', href: '/disciplines' },
]

export function DisciplineFilter() {
  return (
    <nav aria-label="Browse by discipline" className="mb-10 -mt-2">
      <div className="mb-3 flex items-center justify-between gap-3 flex-wrap">
        <Link href="/disciplines" className="group flex items-center gap-2.5 no-underline">
          <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
          <span className="text-2xs font-bold uppercase tracking-eyebrow group-hover:underline" style={{ color: 'var(--brand-accent)' }}>
            For
          </span>
        </Link>
        <Link
          href="/disciplines"
          className="group flex items-center gap-3 overflow-hidden rounded-md no-underline"
          style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}
        >
          <span className="pl-3 py-2">
            <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>All disciplines</span>
            <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>English, Western, trail, racing.</span>
          </span>
          <span aria-hidden="true" className="pr-3 text-sm transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--brand-primary)' }}>→</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {DISCIPLINE_CHIPS.map((chip) => (
          <Link
            key={chip.label}
            href={chip.href}
            className="group flex items-center justify-between gap-2.5 rounded-md px-3.5 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'var(--brand-white)',
              color: 'var(--brand-text-mid)',
              border: '1px solid var(--brand-border)',
            }}
          >
            <span className="text-xs font-semibold leading-tight group-hover:text-brand-primary">{chip.label}</span>
            <span aria-hidden="true" className="text-sm transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--brand-primary)' }}>→</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
