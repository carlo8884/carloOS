import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Supplements — Joint, Hoof, Gastric | Horses.com',
  description:
    'Reference index of equine supplement categories with evidence-anchored guidance — joint, hoof, gastric, and beyond.',
  path: '/supplements',
})

const CATEGORIES = [
  {
    slug: 'joint-supplements',
    title: 'Joint Supplements',
    description:
      'Glucosamine, chondroitin, MSM, HA — what the published equine evidence supports, what it does not, and how to evaluate a product.',
  },
]

export default function SupplementsHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Supplement Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Equine Supplements
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Reference guidance on equine supplement categories — evidence-anchored against AAEP and
          peer-reviewed equine medicine, not marketing claims. Always discuss supplement use with
          your veterinarian for your horse&apos;s specific situation.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Supplements</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-8 max-w-2xl">
          Supplements are not a substitute for qualified veterinary care. Many supplement claims
          are not well-supported by published equine evidence; the references below explain what
          the evidence actually shows for each category.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/supplements/${c.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {c.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {c.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="supplements-hub"
        />
      </section>
    </>
  )
}
