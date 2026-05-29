/**
 * <FooterEmailFallback> — drop-in client component used on the homepage
 * footer when EmailCapture is gated off (NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED).
 *
 * Posts to /api/subscribe so the dev-mode "log to console" path still works
 * end-to-end without flipping the EmailCapture feature flag.
 */
'use client'

import { useState } from 'react'

export function FooterEmailFallback() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'dogpicture:footer' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-emerald-300">✓ You&apos;re on the list. We&apos;ll see you next week.</p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 max-w-md mx-auto flex-wrap"
      aria-label="Subscribe to the DogPicture newsletter"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === 'loading'}
        className="flex-1 min-w-48 px-4 py-3 border border-white/15 bg-white/5 rounded text-white text-sm outline-none focus:border-brand-primary placeholder:text-white/40"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded cursor-pointer border-0 hover:bg-brand-primary-light transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}
