'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-10">
      <div className="text-center max-w-lg">
        <div className="text-5xl mb-6" aria-hidden="true">⚠️</div>
        <h2 className="font-display font-black text-brand-text-dark text-2xl tracking-tight mb-4">
          Something went wrong
        </h2>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          We hit an unexpected error. Try again — and if it keeps happening, email hello@dogpicture.com.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={reset}
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-pill hover:bg-brand-primary-light transition-colors cursor-pointer border-0">
            Try Again
          </button>
          <Link href="/"
            className="inline-flex items-center border border-brand-border text-brand-text-dark font-semibold text-sm px-6 py-3 rounded-pill no-underline hover:border-brand-primary transition-colors">
            ← Home
          </Link>
        </div>
      </div>
    </div>
  )
}
