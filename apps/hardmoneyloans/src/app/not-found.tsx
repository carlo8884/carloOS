import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold mb-3">Page not found</h1>
      <p className="text-brand-text-mid mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-semibold rounded no-underline"
      >
        Back to HardMoneyLoans.com
      </Link>
    </div>
  )
}
