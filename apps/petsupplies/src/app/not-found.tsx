import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="px-container sm:px-container-sm py-20 max-w-content mx-auto text-center">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        404
      </div>
      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Page not found.
      </h1>
      <p className="text-base text-brand-text-mid mb-8 max-w-md mx-auto">
        That URL doesn&apos;t match any category or comparison page. Try the homepage to browse the
        full category list.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
      >
        Browse categories →
      </Link>
    </div>
  )
}
