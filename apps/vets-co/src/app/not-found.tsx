import Link from 'next/link'

const paths = [
  { href: '/find-a-vet', label: 'Find a vet' },
  { href: '/tools', label: 'Tools and calculators' },
  { href: '/tools/er-vs-clinic', label: 'ER vs clinic' },
  { href: '/health', label: 'Pet health library' },
  { href: '/symptoms', label: 'Symptom checker' },
  { href: '/reviews/best-pet-insurance', label: 'Best pet insurance' },
]

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-container py-16">
      <div className="max-w-lg text-center">
        <div
          className="font-display font-black leading-none mb-6 text-brand-dark"
          style={{ fontSize: 'clamp(80px, 12vw, 140px)', opacity: 0.07 }}
        >
          404
        </div>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-4 -mt-10">
          Page not found
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--brand-text-light)' }}>
          This page doesn&apos;t exist or may have moved. Start with a tool or a guide.
        </p>
        <ul className="list-none m-0 p-0 flex flex-col gap-3 text-left">
          {paths.map((path) => (
            <li key={path.href}>
              <Link
                href={path.href}
                className="block rounded border px-4 py-3 text-sm font-semibold no-underline text-brand-dark"
                style={{ borderColor: 'var(--brand-border)' }}
              >
                {path.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
