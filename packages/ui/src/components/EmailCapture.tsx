'use client'

/**
 * CarloOS EmailCapture — newsletter signup form.
 * Submits to /api/subscribe (FormSubmit via INQUIRE_EMAIL until Mailchimp).
 * Tracks GA4 signup event.
 * Three variants: inline, sidebar card, full-section.
 *
 * Five earning sites (dog / fish / horses / vets / ferret): FormSubmit is
 * down (502/503). Do not promise a checklist or guide by email. Render an
 * on-page magnet only when a real resource (href or complete text) exists.
 */

import { useState, useCallback, useId, useMemo } from 'react'

type EmailCaptureVariant = 'inline' | 'sidebar' | 'section'

/** FormSubmit magnets are not delivered on these live sites. Leave other brands alone. */
const EMAIL_MAGNET_DELIVERY_PAUSED = new Set([
  'dog-com',
  'fish-com',
  'horses-com',
  'vets-co',
  'ferret-com',
])

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

  /** Complete useful resource text. Exported as-is — not the heading/promo. */
  resourceText?: string
  /** Link to the actual checklist / schedule / tool. */
  resourceHref?: string
  resourceLabel?: string
}

export function EmailCapture({
  variant = 'sidebar',
  siteId,
  title = 'Owner notes',
  subtitle,
  ctaText,
  buttonText,
  placeholder = 'your@email.com',
  source,
  tag,
  leadMagnet,
  perks,
  resourceText,
  resourceHref,
  resourceLabel,
}: EmailCaptureProps) {
  const resolvedCtaText = ctaText ?? buttonText ?? 'Send the notes'
  const resolvedSource = source ?? tag ?? 'unknown'
  // Under-hero cash-register captures always render (no Vercel env write).
  // Other placements stay behind NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED.
  const underHero = resolvedSource.endsWith('under-hero')
  const enabled =
    underHero || process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true'

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
      const form = e.currentTarget
      const honeypot = form instanceof HTMLFormElement
        ? String(new FormData(form).get('company_website') || '')
        : ''
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          siteId,
          source: resolvedSource,
          company_website: honeypot,
        }),
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

  if (!enabled) {
    return null
  }

  if (EMAIL_MAGNET_DELIVERY_PAUSED.has(siteId)) {
    return (
      <OnPageMagnet
        variant={variant}
        title={title}
        subtitle={subtitle}
        leadMagnet={leadMagnet}
        perks={perks}
        resourceText={resourceText}
        resourceHref={resourceHref}
        resourceLabel={resourceLabel}
      />
    )
  }

  if (status === 'success') {
    if (variant === 'section') {
      return (
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-5 py-4 bg-brand-success/10 border border-brand-success/30 rounded-lg">
            <span className="text-2xl text-brand-success">✓</span>
            <div className="text-left">
              <div className="font-semibold text-base text-brand-text-dark">You&apos;re on the list.</div>
              <div className="text-sm text-brand-text-mid mt-0.5">We&apos;ll use this address for the notes. No confirmation email.</div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={variant === 'sidebar' ? 'bg-brand-dark rounded-lg p-5 ring-1 ring-white/8' : ''}>
        <div className="flex items-center gap-3 text-brand-success">
          <span className="text-xl">✓</span>
          <div>
            <div className="font-semibold text-sm">You&apos;re on the list.</div>
            <div className={variant === 'sidebar' ? 'text-xs text-white/55 mt-0.5' : 'text-xs text-brand-text-light mt-0.5'}>We&apos;ll use this address for the notes.</div>
          </div>
        </div>
      </div>
    )
  }

  // ── SIDEBAR VARIANT ────────────────────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div data-email-capture="sidebar" className="bg-brand-dark rounded-lg p-5 ring-1 ring-white/8">
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
          inputClass="w-full px-3 py-2.5 bg-white/8 border border-white/12 rounded text-brand-white text-xs outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary mb-2 placeholder:text-white/30 focus:border-brand-primary"
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
        inputClass="flex-1 min-w-48 px-4 py-3 border border-brand-border rounded text-brand-dark text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary focus:border-brand-primary"
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
        inputClass="flex-1 min-w-48 px-4 py-3.5 border border-brand-border rounded-md text-brand-dark text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary focus:border-brand-primary bg-brand-white"
        btnClass="px-6 py-3.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md cursor-pointer border-0 hover:bg-brand-primary-light transition-colors whitespace-nowrap"
      />
      <p className="text-xs text-brand-text-light mt-3">
        Inbox notes only. No confirmation email and no downloadable kit.
      </p>
    </div>
  )
}

function stripEmailPromise(text: string): string {
  return text
    .replace(/\bEmail (?:my|the|this|your)\s+/gi, '')
    .replace(/\bin your inbox\b/gi, 'on this page')
    .replace(/\bOne short (?:Tuesday )?email:\s*/gi, '')
    .replace(/\bfree 8-email course\b/gi, 'on-page guide')
    .replace(/\ban eight-email course:\s*/gi, '')
    .replace(/\bOne signup\.\s*/gi, '')
    .replace(/\bNo spam\.?\s*/gi, '')
    .replace(/\bUnsubscribe anytime\.?\s*/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/^[\s—–-]+/, '')
    .trim()
}

function slugifyMagnet(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
  return slug || 'checklist'
}

function OnPageMagnet({
  variant,
  title,
  subtitle,
  leadMagnet,
  perks,
  resourceText,
  resourceHref,
  resourceLabel,
}: {
  variant: EmailCaptureVariant
  title: string
  subtitle?: string
  leadMagnet?: string
  perks?: string[]
  resourceText?: string
  resourceHref?: string
  resourceLabel?: string
}) {
  const heading = stripEmailPromise(title)
  const body = stripEmailPromise(subtitle ?? leadMagnet ?? '')
  const usefulText = resourceText?.trim() ?? ''
  const href = resourceHref?.trim() ?? ''
  const hasText = usefulText.length > 0
  const hasHref = href.length > 0

  // No hollow save of heading/promo/perks/disclaimer. No resource → no offer.
  if (!hasText && !hasHref) {
    return null
  }

  const visiblePerks = (perks ?? []).filter(
    (p) => !/unsubscribe|inbox|email course|one signup/i.test(p),
  )

  const fileText = useMemo(() => usefulText, [usefulText])

  const saveCopy = useCallback(() => {
    if (!fileText) return
    const blob = new Blob([fileText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${slugifyMagnet(heading)}.txt`
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }, [fileText, heading])

  const actionLabel = resourceLabel
    ?? (hasHref && !hasText ? 'Open the resource' : 'Save a copy')

  const action = hasHref ? (
    <a
      href={href}
      className={
        variant === 'sidebar'
          ? 'block w-full py-2.5 bg-brand-primary text-brand-white text-xs font-bold rounded text-center no-underline'
          : variant === 'inline'
            ? 'inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded no-underline hover:bg-brand-primary-light transition-colors'
            : 'inline-block px-6 py-3.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md no-underline hover:bg-brand-primary-light transition-colors'
      }
    >
      {actionLabel}
    </a>
  ) : (
    <button
      type="button"
      onClick={saveCopy}
      className={
        variant === 'sidebar'
          ? 'w-full py-2.5 bg-brand-primary text-brand-white text-xs font-bold rounded cursor-pointer border-0'
          : variant === 'inline'
            ? 'px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded cursor-pointer border-0 hover:bg-brand-primary-light transition-colors'
            : 'px-6 py-3.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md cursor-pointer border-0 hover:bg-brand-primary-light transition-colors'
      }
    >
      {actionLabel}
    </button>
  )

  if (variant === 'sidebar') {
    return (
      <div data-email-capture="sidebar" data-magnet="on-page" className="bg-brand-dark rounded-lg p-5 ring-1 ring-white/8">
        <h3 className="font-display text-base font-bold text-brand-white mb-2">{heading}</h3>
        {body && <p className="text-xs text-white/45 mb-3 leading-relaxed">{body}</p>}
        {action}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div data-email-capture="inline" data-magnet="on-page" className="rounded-lg border border-brand-border bg-brand-surface p-4">
        {heading && <p className="font-display text-base font-semibold text-brand-dark mb-1">{heading}</p>}
        {body && <p className="text-sm text-brand-text-mid leading-relaxed mb-2">{body}</p>}
        {action}
      </div>
    )
  }

  return (
    <div data-email-capture="section" data-magnet="on-page" className="text-center">
      <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight mb-3">
        {heading}
      </h2>
      {body && (
        <p className="text-base text-brand-text-light max-w-lg mx-auto mb-4 leading-relaxed">
          {body}
        </p>
      )}
      {visiblePerks.length > 0 && (
        <div className="flex items-center justify-center gap-5 flex-wrap mb-5">
          {visiblePerks.map((perk) => (
            <span key={perk} className="text-sm text-brand-text-mid flex items-center gap-1.5">
              <span aria-hidden className="text-brand-success font-bold text-xs">✓</span>
              {perk}
            </span>
          ))}
        </div>
      )}
      {action}
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
      <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
          {status === 'loading' ? 'Sending…' : ctaText}
        </button>
      </div>
      {errorMsg && <p role="alert" className="text-xs text-brand-danger mt-1.5">{errorMsg}</p>}
    </form>
  )
}
