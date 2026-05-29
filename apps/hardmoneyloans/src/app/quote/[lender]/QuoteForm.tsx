'use client'

import { useState } from 'react'
import { STATES } from '@/data/states'

interface QuoteFormProps {
  lenderSlug: string
  lenderName: string
}

const PROPERTY_TYPES = ['SFR', 'Multifamily', 'Commercial'] as const
const PURPOSES = ['fix-and-flip', 'brrrr', 'refi', 'bridge'] as const
const CREDIT_RANGES = ['<620', '620-679', '680-739', '740+'] as const

export function QuoteForm({ lenderSlug, lenderName }: QuoteFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')
  const [errMsg, setErrMsg] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      lenderSlug,
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      loanAmount: Number(fd.get('loanAmount') ?? 0),
      propertyType: String(fd.get('propertyType') ?? ''),
      state: String(fd.get('state') ?? ''),
      purpose: String(fd.get('purpose') ?? ''),
      creditRange: String(fd.get('creditRange') ?? ''),
      consent: fd.get('consent') === 'on',
      sourcePath: typeof window !== 'undefined' ? window.location.pathname : '',
    }
    if (!payload.consent) {
      setStatus('err')
      setErrMsg('Please acknowledge the disclosure to submit.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error ?? 'Submit failed')
      }
      setStatus('ok')
      form.reset()
    } catch (err) {
      setStatus('err')
      setErrMsg(err instanceof Error ? err.message : 'Submit failed')
    }
  }

  if (status === 'ok') {
    return (
      <div className="bg-brand-white border border-brand-success/30 rounded-lg p-6">
        <h2 className="font-display text-xl font-bold text-brand-success mb-2">Submitted</h2>
        <p className="text-sm text-brand-text-mid">
          Your quote request has been recorded and will be relayed to {lenderName}. Expect a follow-up email within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="bg-brand-white border border-brand-border rounded-lg p-6 space-y-4">
      <Field label="Full name">
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-3 py-2 border border-brand-border rounded text-sm"
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-3 py-2 border border-brand-border rounded text-sm"
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full px-3 py-2 border border-brand-border rounded text-sm"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Requested loan amount (USD)">
          <input
            name="loanAmount"
            type="number"
            required
            min={25_000}
            step={10_000}
            defaultValue={250_000}
            className="w-full px-3 py-2 border border-brand-border rounded text-sm"
          />
        </Field>
        <Field label="State of property">
          <select
            name="state"
            required
            defaultValue="TX"
            className="w-full px-3 py-2 border border-brand-border rounded text-sm bg-brand-white"
          >
            {STATES.map((s) => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field label="Property type">
          <select name="propertyType" required defaultValue="SFR" className="w-full px-3 py-2 border border-brand-border rounded text-sm bg-brand-white">
            {PROPERTY_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Purpose">
          <select name="purpose" required defaultValue="fix-and-flip" className="w-full px-3 py-2 border border-brand-border rounded text-sm bg-brand-white">
            {PURPOSES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Credit range">
          <select name="creditRange" required defaultValue="680-739" className="w-full px-3 py-2 border border-brand-border rounded text-sm bg-brand-white">
            {CREDIT_RANGES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
      </div>

      <label className="flex items-start gap-3 text-xs text-brand-text-mid leading-relaxed">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          By submitting, you consent to be contacted by {lenderName} regarding loan options. This is not a guarantee of loan approval. HardMoneyLoans.com earns referral fees when readers connect with lenders.
        </span>
      </label>

      {status === 'err' && (
        <p className="text-xs text-brand-danger">{errMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-brand-primary text-brand-white text-sm font-semibold rounded disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : `Send Quote Request to ${lenderName}`}
      </button>
    </form>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-2xs uppercase tracking-wider text-brand-text-light mb-1">{label}</span>
      {children}
    </label>
  )
}
