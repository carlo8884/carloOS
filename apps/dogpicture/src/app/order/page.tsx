/**
 * /order — landing for "look up my order".
 *
 * Customers reach this from the footer "Track Order" link. We ask for the
 * session id and link them through to /order/[session_id].
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function OrderLookupPage() {
  const router = useRouter()
  const [sessionId, setSessionId] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!sessionId.trim()) return
    router.push(`/order/${encodeURIComponent(sessionId.trim())}`)
  }

  return (
    <div className="max-w-content mx-auto px-container-sm sm:px-10 py-16">
      <nav className="text-xs text-brand-text-light mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          ← Home
        </Link>
      </nav>
      <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-2">
        Track an order
      </h1>
      <p className="text-base text-brand-text-mid mb-8">
        Paste the order ID from your confirmation email (starts with <code className="text-brand-primary">cs_</code>).
      </p>

      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
        <input
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          placeholder="cs_test_..."
          className="flex-1 min-w-64 px-4 py-3 border border-brand-border rounded-md text-brand-text-dark text-sm outline-none focus:border-brand-primary bg-brand-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-pill cursor-pointer border-0 hover:bg-brand-primary-light transition-colors whitespace-nowrap"
        >
          Look up →
        </button>
      </form>

      <p className="text-xs text-brand-text-light mt-6">
        Can&apos;t find your ID? Email <a href="mailto:hello@dogpicture.com" className="text-brand-primary">hello@dogpicture.com</a>.
      </p>
    </div>
  )
}
