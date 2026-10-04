'use client'

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
  // Empty usePathname → treat as home so SSR keeps the slot on `/`
  // and fish can exclude `/` without a second homepage form.
  const path = usePathname() || '/'
  const show = isEmailUnderHeroPath(path, excludePaths)

  // Stay where the layout rendered this slot (end of <main>). Moving the
  // node with hero.after() runs from the layout before the page Suspense
  // boundary hydrates, and it inserts this div into the page tree. React
  // then hydrates a <section> and finds the slot instead (#418), then
  // insertBefore/removeChild loops until <main> is empty.
  if (!show) return null

  return <div data-email-slot="true">{children}</div>
}
