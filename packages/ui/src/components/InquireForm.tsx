'use client'

import { useState, FormEvent } from 'react'

export type InquireIntent = 'offer' | 'pro-application'

export function InquireForm({
  siteName,
  intent = 'offer',
  variant = 'card',
  submitLabel,
}: {
  siteName: string
  intent?: InquireIntent
  variant?: 'card' | 'page'
  submitLabel?: string
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const isPro = intent === 'pro-application'
  const onCard = variant === 'card'

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
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, siteName, intent }),
      })
      if (!res.ok) throw new Error('fail')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
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
      <input name="name" required placeholder={isPro ? 'Your name' : 'Name'} className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="phone" type="tel" placeholder="Phone" className={field} />
      {isPro ? (
        <>
          <input name="city" required placeholder="City and state" className={field} />
          <input name="website" placeholder="Website or Instagram" className={field} />
          <input name="credentials" placeholder="Credentials you actually hold (CPDT-KA, CBCC-KA, …)" className={field} />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Services, species or specialties, and how long you have trained professionally"
            className={field}
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
        <p className={onCard ? 'text-white text-sm text-center' : 'text-sm text-red-700'}>
          Could not send. Tick the box and try again.
        </p>
      )}
    </form>
  )
}
