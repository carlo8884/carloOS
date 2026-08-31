'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { isEmailUnderHeroPath } from '../../../config/email-under-hero'

export {
  EMAIL_UNDER_HERO_PATHS,
  isEmailUnderHeroPath,
  normalizeEmailUnderHeroPath,
} from '../../../config/email-under-hero'

export function EmailUnderHero({
  children,
  excludePaths = [],
}: {
  children: React.ReactNode
  /** Fish homepage + reviews hub already own their capture. */
  excludePaths?: readonly string[]
}) {
  // Empty usePathname → treat as home so SSR keeps the input on `/`
  // and fish can exclude `/` without a second homepage form.
  const path = usePathname() || '/'
  const slotRef = useRef<HTMLDivElement>(null)
  const show = isEmailUnderHeroPath(path, excludePaths)

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
    if (hero === slot || hero.contains(slot)) return
    if (hero.nextSibling === slot) return
    if (!hero.parentNode) return
    // Never throw into React — a failed move (SPA teardown, repaired a>a
    // tree) is why Dog's homepage used to blank. Leave the slot in place.
    try {
      hero.after(slot)
    } catch {
      /* keep in-flow position */
    }
  }, [path, show])

  if (!show) return null

  return <div ref={slotRef}>{children}</div>
}
