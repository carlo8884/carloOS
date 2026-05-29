'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold mb-3">Something went wrong</h1>
      <p className="text-brand-text-mid mb-6">
        We&apos;re looking into it. In the meantime, try again or head back home.
      </p>
      <button
        onClick={reset}
        className="px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-semibold rounded"
      >
        Try again
      </button>
    </div>
  )
}
