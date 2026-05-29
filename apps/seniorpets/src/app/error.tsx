'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="px-container sm:px-container-sm py-section text-center">
      <h1 className="font-display text-3xl font-bold text-brand-dark mb-3">
        Something went wrong
      </h1>
      <p className="text-sm text-brand-text-light mb-6">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        className="px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md"
      >
        Try again
      </button>
    </div>
  )
}
