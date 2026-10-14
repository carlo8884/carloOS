/**
 * Small visual cards for long pages (premium-affiliate-site-design: "Did you
 * know" and checklist cards). Every line must already be on the page with the
 * same source; the card links that source. No shop links inside.
 */

import type { ReactNode } from 'react'

interface CardSource {
  label: string
  url: string
}

function SourceLine({ source }: { source: CardSource }) {
  return (
    <p className="mt-3 mb-0 text-2xs text-brand-text-light">
      Source:{' '}
      <a href={source.url} className="underline underline-offset-2 hover:text-brand-primary" rel="noopener">
        {source.label}
      </a>
    </p>
  )
}

export function FactCard({ title = 'Did you know?', children, source, className = '' }: { title?: string; children: ReactNode; source: CardSource; className?: string }) {
  return (
    <aside
      data-fact-card
      className={`not-prose my-6 flex gap-4 rounded-xl border border-brand-border bg-brand-primary-pale p-5 ${className}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-7 w-7 shrink-0" fill="none" stroke="var(--brand-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2V16h5v-.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z" />
      </svg>
      <div className="min-w-0">
        <p className="m-0 mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{title}</p>
        <div className="text-base leading-relaxed text-brand-text-dark">{children}</div>
        <SourceLine source={source} />
      </div>
    </aside>
  )
}

export function ChecklistCard({ title, items, source, className = '' }: { title: string; items: ReactNode[]; source: CardSource; className?: string }) {
  return (
    <aside
      data-checklist-card
      className={`not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5 ${className}`}
    >
      <p className="m-0 mb-3 font-display text-lg font-bold text-brand-text-dark">{title}</p>
      <ul className="m-0 list-none space-y-2 p-0">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-base leading-snug text-brand-text-dark">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="var(--brand-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
              <path d="m7.5 12.5 3 3 6-6.5" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <SourceLine source={source} />
    </aside>
  )
}
