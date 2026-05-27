/**
 * StatTile — small key/value tile for calculator results.
 *
 * Used in CalculatorShell results blocks and standalone in metric strips.
 * Two variants: default (neutral) and highlight (primary-tinted).
 */

interface StatTileProps {
  label: string
  value: string
  /** Tint with brand-primary background for primary results. */
  highlight?: boolean
  /** Optional secondary line below the value (e.g. unit, conversion). */
  sub?: string
}

export function StatTile({ label, value, highlight = false, sub }: StatTileProps) {
  return (
    <div
      className={
        highlight
          ? 'bg-brand-primary/10 border border-brand-primary/30 rounded p-3'
          : 'border border-brand-border rounded p-3'
      }
    >
      <div className="text-xs uppercase tracking-wide text-brand-text-light">
        {label}
      </div>
      <div className="text-xl font-bold text-brand-text mt-1">{value}</div>
      {sub && (
        <div className="text-xs text-brand-text-light mt-1">{sub}</div>
      )}
    </div>
  )
}
