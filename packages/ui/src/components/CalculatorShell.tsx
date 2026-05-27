/**
 * CalculatorShell — reusable chrome for interactive calculator tools.
 *
 * Calculator-page authors provide:
 *   - inputs        : the form region (controlled inputs)
 *   - results       : the StatTile row
 *   - footnote      : optional secondary stat / disclaimer line
 *
 * Shell renders the card frame, grid layout, separator, and footnote
 * slot. Keeps every calculator visually consistent across all portfolio
 * sites with one source-of-truth.
 *
 * Usage:
 *   <CalculatorShell
 *     inputs={<MyInputs ... />}
 *     results={<StatRow ... />}
 *     footnote="One bag lasts X days at this intake."
 *   />
 */

import type { ReactNode } from 'react'

interface CalculatorShellProps {
  /** Form region (controlled inputs). Will be laid out in a 2-col md grid. */
  inputs: ReactNode
  /** Results region (typically a row of StatTile components). */
  results: ReactNode
  /** Optional secondary line below results — disclaimer, annualization, etc. */
  footnote?: ReactNode
  /** A11y label for the section (visually hidden h2). Defaults to "Calculator". */
  ariaLabel?: string
}

export function CalculatorShell({
  inputs,
  results,
  footnote,
  ariaLabel = 'Calculator',
}: CalculatorShellProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="bg-brand-surface border border-brand-border rounded-lg p-6 md:p-8 mb-10"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {inputs}
      </div>

      <div className="mt-8 pt-6 border-t border-brand-border">
        {results}
      </div>

      {footnote && (
        <div className="text-xs text-brand-text-light mt-4 text-center">
          {footnote}
        </div>
      )}
    </section>
  )
}
