'use client'
import { useEffect } from 'react'
import Link from 'next/link'
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-container">
      <div className="text-center max-w-lg">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mx-auto mb-6">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <h2 className="font-display font-black text-brand-dark text-2xl tracking-tight mb-4">Something went wrong</h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--brand-text-light)' }}>Try refreshing — if the problem persists, start from the homepage.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="inline-flex items-center font-bold text-sm px-6 py-3 rounded text-white cursor-pointer border-0 transition-colors" style={{ background: 'var(--brand-primary)' }}>Try Again</button>
          <Link href="/" className="inline-flex items-center border text-brand-dark font-semibold text-sm px-6 py-3 rounded no-underline" style={{ borderColor: 'var(--brand-border)' }}>← Home</Link>
        </div>
      </div>
    </div>
  )
}
