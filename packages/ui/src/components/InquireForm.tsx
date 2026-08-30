'use client'

import { useState, FormEvent } from 'react'

export function InquireForm({ siteName }: { siteName: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
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

  if (status === 'sent') {
    return (
      <p className="text-base leading-relaxed">
        Received. If the note is serious, you will get a reply.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl">
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Name
        <input name="name" required className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Organization
        <input name="organization" className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Your email
        <input name="email" type="email" required className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        What is this about
        <select name="topic" className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white">
          <option value="acquisition">Buying the domain or the operating site</option>
          <option value="partnership">Partnership or licensing</option>
          <option value="press">Press</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Intended use
        <input name="intendedUse" className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Offer in USD (optional)
        <input name="offer" inputMode="numeric" className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Note
        <textarea name="message" rows={5} required className="font-normal font-body border border-brand-border rounded-lg px-3 py-2.5 bg-brand-white" />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="self-start bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg border-0 cursor-pointer disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-brand-danger">Could not send. Try again in a minute.</p>
      )}
    </form>
  )
}
