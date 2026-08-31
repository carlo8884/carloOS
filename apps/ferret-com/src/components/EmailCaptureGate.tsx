'use client'

import { usePathname } from 'next/navigation'

const HIDDEN = ['/admin', '/dashboard', '/api']

export function EmailCaptureGate({ children }: { children: React.ReactNode }) {
  const path = usePathname() || ''
  if (HIDDEN.some((p) => path === p || path.startsWith(`${p}/`))) return null
  return <>{children}</>
}
