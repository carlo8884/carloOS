'use client'

import { useState, FormEvent } from 'react'
import { inquireFormDefaultOpen } from '@carloOS/config/capture-flags'
import { isJunkEmail, isJunkLabel, isJunkMessage, isJunkOffer, isJunkPhone } from '@carloOS/config/form-guard'
import { INQUIRE_FALLBACK_HREF, inquireFailureLead } from '../inquire-copy'

export type InquireIntent = 'offer' | 'pro-application'

export function InquireForm({
  siteName,
  intent = 'offer',
  variant = 'card',
  submitLabel,
  defaultCity,
  defaultMessage,
  defaultListing,
  open,
}: {
  siteName: string
  intent?: InquireIntent
  variant?: 'card' | 'page'
  submitLabel?: string
  defaultCity?: string
  defaultMessage?: string
  defaultListing?: string
  /** Server passes this. Dog and vets stay closed unless the flag and inbox are set. */
  open?: boolean
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showFallback, setShowFallback] = useState(false)
  const isPro = intent === 'pro-application'
  const onCard = variant === 'card'
  const formOpen = open ?? inquireFormDefaultOpen(siteName)

  if (!formOpen) {
    const guide = closedGuide(siteName, isPro)
    return (
      <div className={onCard ? 'text-white text-center text-sm leading-relaxed py-4' : 'text-sm text-slate-800 leading-relaxed py-2'}>
        <p className="m-0">This page is not collecting notes. Nothing is stored from here.</p>
        <p className="mt-3 mb-0">
          <a href={guide.href} className="underline font-semibold">{guide.label}</a>
          {' · '}
          <a href={INQUIRE_FALLBACK_HREF} className="underline font-semibold">Disclosure</a>
        </p>
      </div>
    )
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data.company_website) {
      setStatus('sent')
      return
    }
    if (data.robot !== 'on') {
      setStatus('error')
      setShowFallback(false)
      setErrorMsg('Tick the box to confirm you are not a robot.')
      return
    }
    const email = String(data.email || '')
    const name = String(data.name || '')
    const message = String(data.message || '')
    if (
      isJunkEmail(email) ||
      isJunkLabel(name) ||
      isJunkMessage(message) ||
      isJunkPhone(String(data.phone || '')) ||
      isJunkOffer(String(data.offer || ''))
    ) {
      setStatus('error')
      setShowFallback(true)
      setErrorMsg(inquireFailureLead(422))
      return
    }
    setStatus('sending')
    setErrorMsg('')
    setShowFallback(false)
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, siteName, intent }),
      })
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || body.ok !== true) {
        setStatus('error')
        setShowFallback(true)
        setErrorMsg(inquireFailureLead(body.error === 'unconfigured' ? 503 : res.status))
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setShowFallback(true)
      setErrorMsg(inquireFailureLead(0))
    }
  }

  const field = onCard
    ? 'w-full border-0 rounded-md px-3 py-3 text-sm text-slate-800 bg-white outline-none'
    : 'w-full rounded-md px-3 py-3 text-sm text-slate-800 bg-white outline-none border border-slate-300'

  if (status === 'sent') {
    return (
      <p className={onCard ? 'text-white text-center text-base py-8' : 'text-sm py-6'}>
        {isPro
          ? 'Application received. If the page is a fit, you will get a reply.'
          : 'Received. If the note is serious, you will get a reply.'}
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {isPro && defaultListing ? (
        <input type="hidden" name="listing" value={defaultListing} />
      ) : null}
      <input name="name" required placeholder={isPro ? 'Your name' : 'Name'} className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="phone" type="tel" placeholder="Phone" className={field} />
      {isPro ? (
        <>
          <input
            name="city"
            required
            placeholder="City and state"
            className={field}
            defaultValue={defaultCity}
          />
          <input name="website" placeholder="Website or Instagram" className={field} />
          <input name="credentials" placeholder="Credentials you actually hold (CPDT-KA, CBCC-KA, …)" className={field} />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Services, species or specialties, and how long you have trained professionally"
            className={field}
            defaultValue={defaultMessage}
          />
        </>
      ) : (
        <>
          <input name="offer" inputMode="numeric" placeholder="Offer (USD)" className={field} />
          <textarea name="message" rows={4} required placeholder="Message" className={field} />
        </>
      )}
      <label
        className={
          onCard
            ? 'flex items-center gap-2 bg-white rounded-md px-3 py-3 text-sm text-slate-700'
            : 'flex items-center gap-2 rounded-md px-3 py-3 text-sm text-slate-700 border border-slate-300 bg-white'
        }
      >
        <input name="robot" type="checkbox" required />
        I&apos;m not a robot
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full border-0 rounded-md py-3 font-bold text-sm uppercase tracking-wide text-white cursor-pointer disabled:opacity-60"
        style={{ background: isPro ? '#1d4ed8' : '#22c55e' }}
      >
        {status === 'sending'
          ? 'Sending…'
          : submitLabel || (isPro ? 'Send application' : 'Send offer')}
      </button>
      {status === 'error' && (
        <p role="alert" className={onCard ? 'text-white text-sm text-center' : 'text-sm text-red-700'}>
          {errorMsg || inquireFailureLead(0)}
          {showFallback ? (
            <>
              {' '}
              <a href={INQUIRE_FALLBACK_HREF} className="underline font-semibold">
                disclosure page
              </a>
              .
            </>
          ) : null}
        </p>
      )}
    </form>
  )
}

function closedGuide(siteName: string, isPro: boolean): { href: string; label: string } {
  if (siteName === 'Vets.co') {
    return isPro
      ? { href: '/find-a-vet', label: 'Find a vet' }
      : { href: '/reviews/best-pet-insurance', label: 'Pet insurance comparison' }
  }
  if (siteName === 'Ferret.com') {
    return isPro
      ? { href: '/ownership/ferret-supplies-checklist', label: 'Ferret supplies checklist' }
      : { href: '/ownership/first-week-checklist', label: 'First-week checklist' }
  }
  if (siteName === 'Fish.com') {
    return isPro
      ? { href: '/tools/stocking-calculator', label: 'Stocking calculator' }
      : { href: '/reviews', label: 'Fish reviews' }
  }
  if (siteName === 'Horses.com') {
    return isPro
      ? { href: '/ownership/boarding-options', label: 'Boarding options' }
      : { href: '/ownership/cost-of-owning-a-horse', label: 'Cost of owning a horse' }
  }
  return isPro
    ? { href: '/training/trainer-credentials', label: 'Trainer credentials' }
    : { href: '/reviews', label: 'Dog reviews' }
}
