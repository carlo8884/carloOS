'use client'

import { useState, FormEvent } from 'react'

export function InquireForm({ siteName }: { siteName: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

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
        body: JSON.stringify({ ...data, siteName }),
      })
      if (!res.ok) throw new Error('fail')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full border-0 rounded-md px-3 py-3 text-sm text-slate-800 bg-white outline-none'

  if (status === 'sent') {
    return (
      <p className="text-white text-center text-base py-8">
        Received. If the note is serious, you will get a reply.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input name="name" required placeholder="Name" className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="phone" type="tel" placeholder="Phone" className={field} />
      <input name="offer" inputMode="numeric" placeholder="Offer (USD)" className={field} />
      <textarea name="message" rows={4} required placeholder="Message" className={field} />
      <label className="flex items-center gap-2 bg-white rounded-md px-3 py-3 text-sm text-slate-700">
        <input name="robot" type="checkbox" required />
        I&apos;m not a robot
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full border-0 rounded-md py-3 font-bold text-sm uppercase tracking-wide text-white cursor-pointer disabled:opacity-60"
        style={{ background: '#22c55e' }}
      >
        {status === 'sending' ? 'Sending…' : 'Send offer'}
      </button>
      {status === 'error' && (
        <p className="text-white text-sm text-center">Could not send. Tick the box and try again.</p>
      )}
    </form>
  )
}
