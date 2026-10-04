import type { ReactNode } from 'react'

/** Plain-English input error. Shown only when a required value cannot be used. */
export function ToolError({ children }: { children: ReactNode }) {
  return (
    <p role="alert" className="mt-4 text-sm font-medium text-red-800">
      {children}
    </p>
  )
}

/** One sentence under a result: what the number is for, not a second calculation. */
export function ResultMeaning({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">{children}</p>
}

/**
 * Validate a numeric field the user typed. Empty, non-numeric, and out-of-range
 * values return a sentence. A usable number returns null.
 */
export function numberFieldError(
  raw: string,
  label: string,
  min: number,
  max: number,
  unit?: string,
): string | null {
  const trimmed = raw.trim()
  if (!trimmed) return `Enter a ${label}.`
  const n = Number(trimmed)
  if (!Number.isFinite(n)) return `Enter the ${label} as a number.`
  const unitBit = unit ? ` ${unit}` : ''
  if (n < min || n > max) {
    return `Enter a ${label} between ${min} and ${max}${unitBit}.`
  }
  return null
}
