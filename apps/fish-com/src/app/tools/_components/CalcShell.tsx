'use client'

import { useState, type ReactNode } from 'react'

interface FieldNumberProps {
  label: string
  value: string
  onChange: (v: string) => void
  unit?: string
  placeholder?: string
  min?: number
  step?: number
  hint?: string
}

export function FieldNumber({ label, value, onChange, unit, placeholder, min, step, hint }: FieldNumberProps) {
  return (
    <label className="block mb-4">
      <span className="block text-xs font-bold tracking-wider uppercase text-brand-text-light mb-1.5">{label}</span>
      <div className="flex items-stretch border border-brand-border rounded overflow-hidden focus-within:border-brand-primary">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          step={step}
          className="flex-1 px-3 py-2.5 text-base text-brand-dark outline-none bg-brand-white"
        />
        {unit && (
          <span className="px-3 flex items-center bg-brand-surface text-brand-text-light text-xs font-semibold border-l border-brand-border">
            {unit}
          </span>
        )}
      </div>
      {hint && <span className="text-2xs text-brand-text-light mt-1 block">{hint}</span>}
    </label>
  )
}

interface FieldSelectProps {
  label: string
  value: string
  onChange: (v: string) => void
  options: Array<{ value: string; label: string }>
}

export function FieldSelect({ label, value, onChange, options }: FieldSelectProps) {
  return (
    <label className="block mb-4">
      <span className="block text-xs font-bold tracking-wider uppercase text-brand-text-light mb-1.5">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-base text-brand-dark bg-brand-white border border-brand-border rounded outline-none focus:border-brand-primary"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  )
}

interface UnitToggleProps {
  value: string
  options: Array<{ value: string; label: string }>
  onChange: (v: string) => void
}

export function UnitToggle({ value, options, onChange }: UnitToggleProps) {
  return (
    <div className="inline-flex bg-brand-surface border border-brand-border rounded p-0.5 mb-5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={
            'px-3 py-1.5 text-xs font-semibold rounded transition-colors ' +
            (value === o.value
              ? 'bg-brand-primary text-white'
              : 'text-brand-text-mid hover:text-brand-dark')
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

interface ResultProps {
  primary: { label: string; value: string; sub?: string }
  secondary?: Array<{ label: string; value: string }>
  note?: ReactNode
}

export function ResultPanel({ primary, secondary, note }: ResultProps) {
  return (
    <div className="bg-brand-dark text-white rounded-lg p-6 mt-2">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{primary.label}</div>
      <div className="font-display font-bold text-4xl tracking-tight leading-none">{primary.value}</div>
      {primary.sub && <div className="text-sm text-white/60 mt-2">{primary.sub}</div>}
      {secondary && secondary.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-white/10">
          {secondary.map((s) => (
            <div key={s.label}>
              <div className="text-2xs uppercase tracking-wider text-white/40 mb-0.5">{s.label}</div>
              <div className="font-display font-semibold text-lg">{s.value}</div>
            </div>
          ))}
        </div>
      )}
      {note && <div className="text-xs text-white/60 mt-4 pt-4 border-t border-white/10 leading-relaxed">{note}</div>}
    </div>
  )
}

export function CalcCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-white border border-brand-border rounded-lg p-6 mb-6">
      {children}
    </div>
  )
}

export function useNumber(initial: string) {
  return useState(initial)
}
