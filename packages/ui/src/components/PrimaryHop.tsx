import { partnerNeededLabel, partnerTagReady, visibleShopHref } from '@carloOS/config/affiliate-hop'

/**
 * The page's top-pick hop, in normal flow under the title.
 * Disclosure sits above the link. Nothing is fixed or overlaid.
 * holdWithoutPartnerId keeps a Trupanion, Healthy Paws, or Embrace quote
 * visible but disabled until that vendor tag is set.
 */
export function PrimaryHop({
  href,
  label,
  holdWithoutPartnerId = false,
}: {
  href: string
  label: string
  holdWithoutPartnerId?: boolean
}) {
  const held = holdWithoutPartnerId && !partnerTagReady(href)
  if (held) {
    return (
      <div className="mb-5" data-primary-hop="true">
        <p className="text-xs text-white/80 mb-2">This quote stays off until a partner ID is set.</p>
        <button
          type="button"
          disabled
          className="inline-block max-w-full bg-white/70 text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md cursor-not-allowed"
        >
          {partnerNeededLabel(label)}
        </button>
      </div>
    )
  }
  const hop = visibleShopHref(href)
  if (!hop) return null
  const amazon = /\/go\/amazon/.test(hop)
  const text = amazon && /chewy/i.test(href) ? label.replace(/\bon Chewy\b/i, 'on Amazon') : label
  return (
    <div className="mb-5" data-primary-hop="true">
      <p className="text-xs text-white/80 mb-2">
        {amazon
          ? 'As an Amazon Associate we earn from qualifying purchases.'
          : 'We may earn a commission from qualifying purchases.'}
      </p>
      <a
        href={hop}
        rel="sponsored noopener"
        className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline"
      >
        {text}
      </a>
    </div>
  )
}
