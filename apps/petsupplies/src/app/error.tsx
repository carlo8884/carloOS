'use client'

import Link from 'next/link'

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="px-container sm:px-container-sm py-20 max-w-content mx-auto text-center">
      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Something broke.
      </h1>
      <p className="text-base text-brand-text-mid mb-8">
        The page didn&apos;t render. Refresh to try again, or head back to the homepage.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
      >
        Back to PetSupplies.com →
      </Link>
      {error.digest && (
        <p className="text-2xs text-brand-text-light mt-8">
          Reference: <code>{error.digest}</code>
        </p>
      )}
    </div>
  )
}
