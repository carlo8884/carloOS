/**
 * Short evidence block for a money page. Every line is a fact already
 * written on that page. No scores, prices, or reviews are added here.
 */

export function KeyFacts({ items }: { items: { label: string; detail: string }[] }) {
  if (items.length === 0) return null
  return (
    <aside
      aria-label="Key facts"
      data-key-facts
      className="not-prose mb-6 rounded-xl border border-brand-border bg-brand-surface p-5"
    >
      <p className="m-0 mb-3 text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Key facts</p>
      <ul className="m-0 list-none space-y-2 p-0">
        {items.map((item) => (
          <li key={item.label} className="text-sm leading-snug text-brand-dark">
            <span className="font-bold">{item.label}.</span> {item.detail}
          </li>
        ))}
      </ul>
    </aside>
  )
}
