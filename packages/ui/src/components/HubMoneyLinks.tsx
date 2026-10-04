import Link from 'next/link'

/** Hub plus two or three money-page links. Visible on tools and guides. */
export function HubMoneyLinks({
  hubHref,
  hubLabel,
  links,
}: {
  hubHref: string
  hubLabel: string
  links: Array<{ href: string; label: string }>
}) {
  return (
    <nav aria-label="Related on this site" className="border-t border-brand-border bg-brand-surface px-container-sm py-8 sm:px-container">
      <p className="m-0 text-sm leading-relaxed text-brand-text-mid">
        <Link href={hubHref} className="font-semibold text-brand-primary">
          {hubLabel}
        </Link>
        {links.map((link) => (
          <span key={link.href}>
            {' · '}
            <Link href={link.href} className="font-semibold text-brand-primary">
              {link.label}
            </Link>
          </span>
        ))}
      </p>
    </nav>
  )
}
