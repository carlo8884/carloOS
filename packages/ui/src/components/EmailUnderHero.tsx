'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/** Homepage + money hubs. Places children immediately after the first hero block. */
export const EMAIL_UNDER_HERO_PATHS = ['/', '/insurance', '/telehealth', '/guides', '/reviews'] as const

export function isEmailUnderHeroPath(path: string): boolean {
  return (EMAIL_UNDER_HERO_PATHS as readonly string[]).includes(path)
}

export function EmailUnderHero({ children }: { children: React.ReactNode }) {
  const path = usePathname() || ''
  const slotRef = useRef<HTMLDivElement>(null)
  const show = isEmailUnderHeroPath(path)

  useEffect(() => {
    if (!show) return
    const main =
      document.getElementById('main-content') || document.querySelector('main')
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
