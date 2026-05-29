/**
 * AdSlot — single Google AdSense responsive ad unit.
 *
 * Use named slots ("in-article", "sidebar", "leaderboard") to keep ad
 * placement intent visible in source. The actual ad slot ID is resolved
 * from env vars at render time so it can be swapped without code change.
 *
 * Requires the AdSenseLoader script to have been mounted somewhere in
 * the page (usually layout.tsx). If no client/slot is configured the
 * component renders a small placeholder reservation div in dev.
 */

'use client'

import { useEffect } from 'react'

interface AdSlotProps {
  /** Editorial slot name — picks which AdSense slot ID env var to read. */
  slot:
    | 'in-article'
    | 'sidebar'
    | 'leaderboard'
    | 'footer'
  /** Optional explicit override (e.g. "1234567890"). */
  slotId?: string
  className?: string
}

const SLOT_ENV: Record<AdSlotProps['slot'], string> = {
  'in-article': 'NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE',
  sidebar: 'NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR',
  leaderboard: 'NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD',
  footer: 'NEXT_PUBLIC_ADSENSE_SLOT_FOOTER',
}

export function AdSlot({ slot, slotId, className }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  const resolvedSlot =
    slotId ??
    (typeof process !== 'undefined'
      ? process.env[SLOT_ENV[slot]]
      : undefined)

  useEffect(() => {
    if (!client || !resolvedSlot) return
    try {
      const adsbygoogle = (window as unknown as {
        adsbygoogle?: Array<Record<string, unknown>>
      }).adsbygoogle
      if (adsbygoogle) {
        adsbygoogle.push({})
      }
    } catch {
      // AdSense queue not yet defined — silently no-op
    }
  }, [client, resolvedSlot])

  if (!client || !resolvedSlot) {
    return (
      <div
        aria-hidden="true"
        data-ad-slot={slot}
        className={`my-6 min-h-[100px] rounded border border-dashed border-brand-border bg-brand-surface px-4 py-3 text-2xs text-brand-text-light ${className ?? ''}`}
      >
        Ad slot: {slot}
      </div>
    )
  }

  return (
    <ins
      className={`adsbygoogle block ${className ?? ''}`}
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={resolvedSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
