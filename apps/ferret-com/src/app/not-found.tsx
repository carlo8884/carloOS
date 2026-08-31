import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-container">
      <div className="text-center max-w-lg">
        <div
          className="font-display font-black text-brand-dark leading-none mb-6"
          style={{ fontSize: 'clamp(80px, 12vw, 140px)', opacity: 0.08 }}
        >
          404
        </div>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-4 -mt-10">
          Page Not Found
        </h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          This page doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/reviews/best-ferret-cage"
          className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
        >
          See the best ferret cages →
        </Link>
      </div>
    </div>
  )
}
