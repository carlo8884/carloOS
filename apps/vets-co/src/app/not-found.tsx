import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container sm:px-container-sm">
      <div className="text-center max-w-lg">
        <div className="font-display font-black leading-none mb-6 text-brand-dark" style={{ fontSize: 'clamp(80px,12vw,140px)', opacity: 0.07 }}>404</div>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-4 -mt-10">Page Not Found</h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--brand-text-light)' }}>This page doesn't exist or may have moved.</p>
        <Link href="/" className="inline-flex items-center font-bold text-sm px-6 py-3 rounded no-underline text-white transition-colors" style={{ background: 'var(--brand-primary)' }}>← Back to Home</Link>
      </div>
    </div>
  )
}
