import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div
          className="font-bold text-brand-dark leading-none mb-6"
          style={{ fontSize: 'clamp(80px, 12vw, 140px)', opacity: 0.08 }}
        >
          404
        </div>
        <h1 className="font-bold text-brand-text-dark text-3xl tracking-tight mb-4 -mt-10">
          Page not found
        </h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          This page doesn&apos;t exist or may have moved. Run a symptom check or browse common conditions.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-6 py-3 rounded-md no-underline hover:bg-brand-primary-dark transition-colors"
          >
            ← Symptom checker
          </Link>
          <Link
            href="/symptom"
            className="inline-flex items-center border border-brand-border text-brand-text-dark font-semibold text-sm px-6 py-3 rounded-md no-underline hover:border-brand-primary transition-colors"
          >
            Common symptoms
          </Link>
        </div>
      </div>
    </div>
  )
}
