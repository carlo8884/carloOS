'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/** Places children immediately after the first <section> in <main> (the hero). Homepage only. */
export function EmailUnderHero({ children }: { children: React.ReactNode }) {
  const path = usePathname() || ''
  const slotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (path !== '/') return
    const main = document.getElementById('main-content')
    const hero = main?.querySelector('section')
    const slot = slotRef.current
    if (!hero || !slot) return
    if (hero.nextSibling !== slot) {
      hero.after(slot)
    }
  }, [path])

  if (path !== '/') return null

  return <div ref={slotRef}>{children}</div>
}
