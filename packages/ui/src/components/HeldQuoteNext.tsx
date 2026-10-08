/**
 * Internal comparison step when a carrier quote cannot open.
 * The quote href stays off the page until that carrier's tag is set.
 * This link is the next step. It is not a quote and it does not invent an ID.
 */
export function HeldQuoteNext({ tone = 'ink' }: { tone?: 'ink' | 'on-color' }) {
  const className =
    tone === 'on-color'
      ? 'inline-block max-w-full whitespace-normal text-left text-sm font-bold text-white underline underline-offset-2'
      : 'inline-block max-w-full whitespace-normal text-left text-sm font-semibold text-brand-primary underline underline-offset-2'
  return (
    <a href="/reviews/best-pet-insurance" className={className}>
      Compare carriers on published terms
    </a>
  )
}
