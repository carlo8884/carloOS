/**
 * <CheckoutForm> — product picker + email field for /preview/[id].
 *
 * Posts to /api/checkout and follows the Stripe Checkout redirect.
 */
'use client'

import { useState } from 'react'
import { PRODUCT_LIST, formatPrice, type ProductType } from '@/data/products'

export function CheckoutForm({ generationId }: { generationId: string }) {
  const [selected, setSelected] = useState<ProductType>('digital_only')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return setError('Please enter a valid email.')
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generationId, productType: selected, email }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Checkout failed')
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setSubmitting(false)
    }
  }

  return (
    <aside className="lg:sticky lg:top-24 self-start bg-brand-white rounded-xl border border-brand-border p-6 space-y-5">
      <div>
        <div className="text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
          Choose your format
        </div>
        <div className="space-y-2">
          {PRODUCT_LIST.map((p) => (
            <label
              key={p.id}
              className={`flex items-start gap-3 rounded-lg border-2 p-3 cursor-pointer transition-colors ${
                selected === p.id
                  ? 'border-brand-primary bg-brand-primary-pale'
                  : 'border-brand-border hover:border-brand-primary'
              }`}
            >
              <input
                type="radio"
                name="product"
                value={p.id}
                checked={selected === p.id}
                onChange={() => setSelected(p.id)}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-sm text-brand-text-dark">{p.name}</span>
                  <span className="font-display font-bold text-brand-primary">
                    {formatPrice(p.priceCents)}
                  </span>
                </div>
                <div className="text-xs text-brand-text-light mt-1 leading-relaxed">
                  {p.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
          Email for delivery
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-brand-border rounded-md text-sm outline-none focus:border-brand-primary bg-brand-surface"
        />
      </div>

      {error && (
        <div role="alert" className="text-sm text-brand-danger bg-red-50 border border-red-100 rounded-md p-3">
          {error}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full bg-brand-primary text-white font-bold text-base py-4 rounded-pill cursor-pointer border-0 hover:bg-brand-primary-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {submitting ? 'Redirecting to checkout…' : 'Proceed to secure checkout →'}
      </button>

      <p className="text-xs text-brand-text-light text-center">
        🔒 Secure checkout via Stripe · Cards, Apple Pay, Google Pay
      </p>
    </aside>
  )
}
