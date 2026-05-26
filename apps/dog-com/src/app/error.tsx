'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container sm:px-container-sm">
      <div className="text-center max-w-lg">
        <div className="text-5xl mb-6">⚠️</div>
        <h2 className="font-display font-black text-brand-dark text-2xl tracking-tight mb-4">
          Something went wrong
        </h2>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          We hit an unexpected error. Try refreshing the page — if the problem persists, start from the homepage.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={reset}
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded hover:bg-brand-primary-light transition-colors cursor-pointer border-0">
            Try Again
          </button>
          <Link href="/"
            className="inline-flex items-center border border-brand-border text-brand-dark font-semibold text-sm px-6 py-3 rounded no-underline hover:border-brand-primary transition-colors">
            ← Home
          </Link>
        </div>
      </div>
    </div>
  )
}
