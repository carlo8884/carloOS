import Link from 'next/link'

const paths = [
  { href: '/tools', label: 'Dog tools and calculators' },
  { href: '/tools/dog-crate-size-calculator', label: 'Crate size calculator' },
  { href: '/guides', label: 'Care guides' },
  { href: '/health', label: 'Dog health' },
  { href: '/reviews/best-dry-dog-food', label: 'Best dry dog food' },
  { href: '/reviews/best-dog-crates', label: 'Best dog crates' },
]

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-container-sm sm:px-container py-16">
      <div className="max-w-lg text-center">
        <div
          className="font-display font-black text-brand-dark leading-none mb-6"
          style={{ fontSize: 'clamp(80px, 12vw, 140px)', opacity: 0.08 }}
        >
          404
        </div>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-4 -mt-10">
          Page not found
        </h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">
          This page doesn&apos;t exist or may have moved. Start with a tool or a guide.
        </p>
        <ul className="list-none m-0 p-0 flex flex-col gap-3 text-left">
          {paths.map((path) => (
            <li key={path.href}>
              <Link
                href={path.href}
                className="block rounded border border-brand-border px-4 py-3 text-sm font-semibold text-brand-dark no-underline hover:border-brand-primary hover:text-brand-primary"
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
