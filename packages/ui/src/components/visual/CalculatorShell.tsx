/**
 * CalculatorShell — composable primitive for site calculators.
 *
 * Each site's calculator pages compose hero + intro + <Calculator>
 * (with inputs + outputs + methodology slots). The shell carries the
 * brand-consistent layout, spacing, and trust-footer pattern; per-
 * calculator math + copy lives in the page that adopts it.
 *
 * Pattern intentionally parallels Fish.com's pre-existing site-local
 * `apps/fish-com/src/app/tools/_components/CalcShell.tsx` so a future
 * migration is mechanical. New per-site calculators on Dog / Saddle /
 * Lizard / Horses / petfood* should adopt this shared shell directly.
 *
 * Trust posture (QC §1 / §1.4):
 *   - Methodology section is required (not optional) — every output
 *     must cite its source. The shell makes that hard to skip.
 *   - No fabricated "tested by N veterinarians" claims; no AI vets.
 *   - Outputs are math, not opinion — labeling them "research-based"
 *     or "vet-reviewed" is the calling page's choice and its evidence.
 *
 * The interactive bits are 'use client' (they hold input state). The
 * surrounding hero + methodology is server-rendered on the page that
 * embeds the calculator.
 */

'use client'

import { useId, type ChangeEvent, type ReactNode } from 'react'

// ── Field primitives ──────────────────────────────────────────────────────

export interface FieldNumberProps {
  label: string
  value: string
  onChange: (next: string) => void
  unit?: string
  placeholder?: string
  min?: number
  max?: number
  step?: number
  hint?: string
}

export function FieldNumber({
  label,
  value,
  onChange,
  unit,
  placeholder,
  min,
  max,
  step,
  hint,
}: FieldNumberProps) {
  const id = useId()
  return (
    <div className="block mb-5">
      <label
        htmlFor={id}
        className="block text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5"
      >
        {label}
      </label>
      <div className="flex items-stretch border border-brand-border rounded-md overflow-hidden focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary/30 transition-colors">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className="flex-1 px-3 py-2.5 text-base text-brand-text-dark outline-none bg-brand-white tabular-nums"
        />
        {unit && (
          <span className="px-3 flex items-center bg-brand-surface text-brand-text-light text-xs font-semibold border-l border-brand-border whitespace-nowrap">
            {unit}
          </span>
        )}
      </div>
      {hint && (
        <span className="text-2xs text-brand-text-light mt-1.5 block leading-relaxed">
          {hint}
        </span>
      )}
    </div>
  )
}

export interface FieldSelectOption {
  value: string
  label: string
  /** Optional sublabel rendered smaller, mid-tone. */
  hint?: string
}

export interface FieldSelectProps {
  label: string
  value: string
  onChange: (next: string) => void
  options: FieldSelectOption[]
  hint?: string
}

export function FieldSelect({
  label,
  value,
  onChange,
  options,
  hint,
}: FieldSelectProps) {
  const id = useId()
  return (
    <div className="block mb-5">
      <label
        htmlFor={id}
        className="block text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        className="w-full appearance-none border border-brand-border rounded-md px-3 py-2.5 bg-brand-white text-base text-brand-text-dark outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-colors pr-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' fill=\'none\' stroke=\'%239A7A68\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M1 1l5 5 5-5\'/></svg>")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.75rem center',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
            {opt.hint ? ` — ${opt.hint}` : ''}
          </option>
        ))}
      </select>
      {hint && (
        <span className="text-2xs text-brand-text-light mt-1.5 block leading-relaxed">
          {hint}
        </span>
      )}
    </div>
  )
}

// ── Output primitives ─────────────────────────────────────────────────────

export interface OutputBigProps {
  label: string
  value: ReactNode
  unit?: string
  /** Optional one-line context (e.g. "before adjustments"). */
  caption?: string
  /** Visual weight — 'primary' is the headline output of the calculator. */
  tone?: 'primary' | 'secondary'
}

export function OutputBig({
  label,
  value,
  unit,
  caption,
  tone = 'secondary',
}: OutputBigProps) {
  const isPrimary = tone === 'primary'
  return (
    <div
      className={[
        'rounded-md border p-5 transition-colors',
        isPrimary
          ? 'border-brand-primary/30 bg-brand-primary/5'
          : 'border-brand-border bg-brand-white',
      ].join(' ')}
    >
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
        {label}
      </div>
      <div
        className={[
          'font-display font-black leading-none tabular-display',
          isPrimary ? 'text-brand-text-dark' : 'text-brand-text-dark',
        ].join(' ')}
        style={{ fontSize: isPrimary ? 'clamp(36px, 4vw, 56px)' : 'clamp(28px, 3vw, 38px)' }}
      >
        {value}
        {unit && (
          <span className="text-base font-medium font-body ml-1.5 text-brand-text-light tracking-normal">
            {unit}
          </span>
        )}
      </div>
      {caption && (
        <div className="text-xs text-brand-text-mid mt-2 leading-relaxed">
          {caption}
        </div>
      )}
    </div>
  )
}

export interface OutputRangeProps {
  label: string
  min: ReactNode
  target: ReactNode
  max: ReactNode
  unit?: string
  caption?: string
}

/**
 * 3-up min / target / max strip. Useful for ranges (calorie windows,
 * stocking limits, target weights).
 */
export function OutputRange({
  label,
  min,
  target,
  max,
  unit,
  caption,
}: OutputRangeProps) {
  return (
    <div className="rounded-md border border-brand-border bg-brand-white p-5">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        {label}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { tag: 'Min', value: min },
          { tag: 'Target', value: target, isTarget: true },
          { tag: 'Max', value: max },
        ].map((cell) => (
          <div
            key={cell.tag}
            className={[
              'rounded p-3 text-center',
              cell.isTarget
                ? 'bg-brand-primary/10 border border-brand-primary/30'
                : 'bg-brand-surface',
            ].join(' ')}
          >
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light mb-1">
              {cell.tag}
            </div>
            <div className="font-display font-black text-2xl text-brand-text-dark tabular-display leading-none">
              {cell.value}
              {unit && (
                <span className="text-xs font-medium ml-1 text-brand-text-light font-body tracking-normal">
                  {unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <div className="text-xs text-brand-text-mid mt-3 leading-relaxed">
          {caption}
        </div>
      )}
    </div>
  )
}

// ── Container ─────────────────────────────────────────────────────────────

export interface CalculatorProps {
  /** Inputs column — a vertical stack of FieldNumber / FieldSelect. */
  inputs: ReactNode
  /** Outputs column — OutputBig / OutputRange / custom. */
  outputs: ReactNode
  /**
   * Required methodology block: how the number was calculated + the
   * source(s). Forces every adopting calculator to cite its work
   * (QC-STANDARDS §1.5).
   */
  methodology: ReactNode
}

export function Calculator({ inputs, outputs, methodology }: CalculatorProps) {
  return (
    <div className="bg-brand-surface rounded-lg border border-brand-border overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
        {/* Inputs */}
        <div className="p-6 lg:p-8 bg-brand-white">
          <div className="flex items-center gap-2.5 mb-5">
            <span
              aria-hidden="true"
              className="w-5 h-px bg-brand-primary"
            />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Inputs
            </span>
          </div>
          {inputs}
        </div>

        {/* Outputs */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <span
              aria-hidden="true"
              className="w-5 h-px bg-brand-primary"
            />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Results
            </span>
          </div>
          <div className="flex flex-col gap-4">{outputs}</div>
        </div>
      </div>

      {/* Methodology — required */}
      <div className="border-t border-brand-border bg-brand-surface px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span aria-hidden="true" className="w-5 h-px bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Methodology &amp; Sources
          </span>
        </div>
        <div className="text-sm text-brand-text-mid leading-relaxed">
          {methodology}
        </div>
      </div>
    </div>
  )
}
