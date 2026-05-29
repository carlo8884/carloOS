/**
 * Polls /api/order?session_id= every 4s until the status reaches a
 * terminal state. Renders a status badge with a per-state color.
 */
'use client'

import { useEffect, useState } from 'react'

const TERMINAL: ReadonlyArray<string> = ['delivered', 'refunded', 'failed']

const LABELS: Record<string, { label: string; tint: string }> = {
  pending: { label: 'Awaiting payment', tint: 'bg-amber-100 text-amber-900' },
  paid: { label: 'Payment received', tint: 'bg-emerald-100 text-emerald-900' },
  fulfilled: { label: 'Sent to printer', tint: 'bg-emerald-100 text-emerald-900' },
  shipped: { label: 'Shipped', tint: 'bg-sky-100 text-sky-900' },
  delivered: { label: 'Delivered', tint: 'bg-emerald-200 text-emerald-950' },
  failed: { label: 'Needs attention', tint: 'bg-red-100 text-red-900' },
  refunded: { label: 'Refunded', tint: 'bg-stone-200 text-stone-900' },
}

export function OrderStatusPoller({
  sessionId,
  initialStatus,
}: {
  sessionId: string
  initialStatus?: string
}) {
  const [status, setStatus] = useState<string | null>(initialStatus ?? null)

  useEffect(() => {
    if (status && TERMINAL.includes(status)) return
    let cancelled = false

    async function tick() {
      try {
        const res = await fetch(`/api/order?session_id=${encodeURIComponent(sessionId)}`, {
          cache: 'no-store',
        })
        if (!res.ok) return
        const data = (await res.json()) as { status?: string }
        if (!cancelled && data.status) setStatus(data.status)
      } catch {
        /* swallow — keep polling */
      }
    }

    tick()
    const t = setInterval(tick, 4000)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [sessionId, status])

  if (!status) {
    return (
      <div className="rounded-lg bg-brand-surface px-4 py-3 text-sm text-brand-text-mid">
        Finalizing…
      </div>
    )
  }

  const info = LABELS[status] ?? { label: status, tint: 'bg-stone-100 text-stone-900' }

  return (
    <div className={`rounded-lg px-4 py-3 text-sm font-semibold ${info.tint}`}>
      Status: {info.label}
    </div>
  )
}
