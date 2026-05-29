import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-container sm:px-container-sm py-section text-center">
      <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
        404
      </p>
      <h1 className="font-display text-3xl font-bold text-brand-dark mb-3">
        Page not found
      </h1>
      <p className="text-sm text-brand-text-light mb-6 max-w-md mx-auto">
        The page you’re looking for doesn’t exist or has moved. Browse our senior
        pet condition guides or medication reference instead.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Link
          href="/conditions"
          className="px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md no-underline"
        >
          Browse conditions
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 border border-brand-border text-brand-text-dark text-sm font-bold rounded-md no-underline"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
