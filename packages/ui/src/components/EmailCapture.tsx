'use client'

/**
 * CarloOS EmailCapture — newsletter signup form.
 * Submits to Next.js API route (/api/subscribe) which calls Mailchimp.
 * Tracks GA4 signup event.
 * Three variants: inline, sidebar card, full-section.
 */

import { useState, useCallback, useId } from 'react'

type EmailCaptureVariant = 'inline' | 'sidebar' | 'section'

interface EmailCaptureProps {
  variant?: EmailCaptureVariant
  siteId: string

  title?: string
  subtitle?: string
  ctaText?: string
  /** Alias for ctaText (back-compat with monetization call sites) */
  buttonText?: string
  placeholder?: string
  /** Source tag for analytics / Mailchimp tagging */
  source?: string
  /** Alias for source (back-compat with monetization call sites that prefix with site, e.g. "dog-com:insurance-comparison") */
  tag?: string
  /** Lead magnet description (shown in sidebar/section variants) */
  leadMagnet?: string

  perks?: string[]
}

export function EmailCapture({
  variant = 'sidebar',
  siteId,
  title = 'Free Newsletter',
  subtitle,
  ctaText,
  buttonText,
  placeholder = 'your@email.com',
  source,
  tag,
  leadMagnet,
  perks,
}: EmailCaptureProps) {
  const resolvedCtaText = ctaText ?? buttonText ?? 'Subscribe Free'
  const resolvedSource = source ?? tag ?? 'unknown'
  // Gate: render nothing until the subscribe API is wired to a real ESP.
  // Flip on by setting NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true in the deploy env.
  if (process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED !== 'true') {
    return null
  }

  const id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, siteId, source: resolvedSource }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message ?? 'Subscription failed')
      }

      setStatus('success')

      // GA4 event
      if (typeof window !== 'undefined' && 'gtag' in window) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'email_signup', {
          site_id: siteId,
          source: resolvedSource,
        })
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }, [email, siteId, resolvedSource])

  if (status === 'success') {
    if (variant === 'section') {
      return (
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-5 py-4 bg-brand-success/10 border border-brand-success/30 rounded-lg">
            <span className="text-2xl text-brand-success">✓</span>
            <div className="text-left">
              <div className="font-semibold text-base text-brand-text-dark">You&apos;re subscribed!</div>
              <div className="text-sm text-brand-text-mid mt-0.5">Check your inbox to confirm.</div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={variant === 'sidebar' ? 'bg-brand-dark rounded-lg p-5' : ''}>
        <div className="flex items-center gap-3 text-brand-success">
          <span className="text-xl">✓</span>
          <div>
            <div className="font-semibold text-sm">You&apos;re subscribed!</div>
            <div className={variant === 'sidebar' ? 'text-xs text-white/55 mt-0.5' : 'text-xs text-brand-text-light mt-0.5'}>Check your inbox to confirm.</div>
          </div>
        </div>
      </div>
    )
  }

  // ── SIDEBAR VARIANT ────────────────────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div className="bg-brand-dark rounded-lg p-5">
        <h3 className="font-display text-base font-bold text-brand-white mb-2">
          {title}
        </h3>
        {(subtitle ?? leadMagnet) && (
          <p className="text-xs text-white/45 mb-3 leading-relaxed">
            {subtitle ?? leadMagnet}
          </p>
        )}
        <Form id={id} email={email} setEmail={setEmail} onSubmit={handleSubmit}
          ctaText={resolvedCtaText} placeholder={placeholder} status={status} errorMsg={errorMsg}
          inputClass="w-full px-3 py-2.5 bg-white/8 border border-white/12 rounded text-brand-white text-xs outline-none mb-2 placeholder:text-white/30 focus:border-brand-primary"
          btnClass="w-full py-2.5 bg-brand-primary text-brand-white text-xs font-bold rounded cursor-pointer border-0"
        />
      </div>
    )
  }

  // ── INLINE VARIANT ─────────────────────────────────────────────────────────
  if (variant === 'inline') {
    return (
      <Form id={id} email={email} setEmail={setEmail} onSubmit={handleSubmit}
        ctaText={resolvedCtaText} placeholder={placeholder} status={status} errorMsg={errorMsg}
        wrapClass="flex gap-3 flex-wrap"
        inputClass="flex-1 min-w-48 px-4 py-3 border border-brand-border rounded text-brand-dark text-sm outline-none focus:border-brand-primary"
        btnClass="px-6 py-3 bg-brand-primary text-brand-white text-sm font-bold rounded cursor-pointer border-0 hover:bg-brand-primary-light transition-colors whitespace-nowrap"
      />
    )
  }

  // ── SECTION VARIANT ────────────────────────────────────────────────────────
  return (
    <div className="text-center">
      <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-brand-text-light max-w-lg mx-auto mb-5 leading-relaxed">
          {subtitle}
        </p>
      )}
      {perks && perks.length > 0 && (
        <div className="flex items-center justify-center gap-5 flex-wrap mb-6">
          {perks.map((perk, i) => (
            <span key={i} className="text-sm text-brand-text-mid flex items-center gap-1.5">
              <span aria-hidden className="text-brand-success font-bold text-xs">✓</span>
              {perk}
            </span>
          ))}
        </div>
      )}
      <Form id={id} email={email} setEmail={setEmail} onSubmit={handleSubmit}
        ctaText={resolvedCtaText} placeholder={placeholder} status={status} errorMsg={errorMsg}
        wrapClass="flex gap-3 max-w-md mx-auto flex-wrap"
        inputClass="flex-1 min-w-48 px-4 py-3.5 border border-brand-border rounded-md text-brand-dark text-sm outline-none focus:border-brand-primary bg-brand-white"
        btnClass="px-6 py-3.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md cursor-pointer border-0 hover:bg-brand-primary-light transition-colors whitespace-nowrap"
      />
      <p className="text-xs text-brand-text-light mt-3">
        🔒 No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}

// ── Shared form elements ──────────────────────────────────────────────────────

interface FormProps {
  id: string
  email: string
  setEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  ctaText: string
  placeholder: string
  status: string
  errorMsg: string
  wrapClass?: string
  inputClass: string
  btnClass: string
}

function Form({ id, email, setEmail, onSubmit, ctaText, placeholder, status, errorMsg, wrapClass, inputClass, btnClass }: FormProps) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={wrapClass ?? ''}>
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          autoComplete="email"
          disabled={status === 'loading'}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={btnClass}
        >
          {status === 'loading' ? 'Subscribing...' : ctaText}
        </button>
      </div>
      {errorMsg && <p className="text-xs text-brand-danger mt-1.5">{errorMsg}</p>}
    </form>
  )
}
