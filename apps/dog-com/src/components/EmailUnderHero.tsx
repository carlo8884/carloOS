'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

/** Homepage + money hubs. Places children immediately after the first hero block. */
const EMAIL_UNDER_HERO_PATHS = new Set(['/', '/insurance', '/telehealth', '/guides', '/reviews'])

export function EmailUnderHero({ children }: { children: React.ReactNode }) {
  const path = usePathname() || ''
  const slotRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
  const show = !ready || EMAIL_UNDER_HERO_PATHS.has(path)

  useEffect(() => {
    if (!show) return
    const main = document.getElementById('main-content')
    const hero =
      main?.querySelector('section') ||
      main?.querySelector('h1')?.closest('div, section, header') ||
      main?.firstElementChild
    const slot = slotRef.current
    if (!hero || !slot) return
    if (hero.nextSibling !== slot) {
      hero.after(slot)
    }
  }, [path, show])

  if (!show) return null

  return <div ref={slotRef}>{children}</div>
}
