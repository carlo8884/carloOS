import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-10">
      <div className="text-center max-w-lg">
        <div className="font-display font-black text-brand-text-dark leading-none mb-6"
          style={{ fontSize: 'clamp(80px, 12vw, 140px)', opacity: 0.08 }}>404</div>
        <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-4 -mt-10">
          Page Not Found
        </h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          That page doesn&apos;t exist — but a portrait of your dog could.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/"
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-pill no-underline hover:bg-brand-primary-light transition-colors">
            ← Back to Home
          </Link>
          <Link href="/create"
            className="inline-flex items-center border border-brand-border text-brand-text-dark font-semibold text-sm px-6 py-3 rounded-pill no-underline hover:border-brand-primary transition-colors">
            Create a Portrait
          </Link>
        </div>
      </div>
    </div>
  )
}
