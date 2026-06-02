import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Supplements — Joint, Hoof, Gastric | Horses.com',
  description:
    'Reference index of equine supplement categories with evidence-anchored guidance — joint, hoof, gastric, and beyond.',
  path: '/supplements',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Supplements', url: 'https://horses.com/supplements' },
  ],
})

const CATEGORIES = [
  {
    slug: 'joint-supplements',
    title: 'Joint Supplements',
    description:
      'Glucosamine, chondroitin, MSM, HA — what the published equine evidence supports, what it does not, and how to evaluate a product.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Supplement Categories',
  numberOfItems: CATEGORIES.length,
  itemListElement: CATEGORIES.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.title, url: `https://horses.com/supplements/${x.slug}` })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function SupplementsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
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

      <div className="px-container-sm sm:px-container pt-12 max-w-3xl">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 leading-tight">Reading the supplement aisle honestly</h2>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Equine supplements occupy an awkward middle ground. They are not drugs, so they are not held to the evidence standard a medication must clear, yet they are marketed with the language of clinical benefit &mdash; &ldquo;supports,&rdquo; &ldquo;promotes,&rdquo; &ldquo;maintains.&rdquo; Many are sold as NASC-listed nutraceuticals, a quality-and-labeling framework rather than a proof-of-efficacy one. The result is an aisle where genuinely useful products sit beside ones whose strongest claim is the confidence of the packaging. This reference exists to help owners tell the difference by category, anchored to AAEP guidance and the peer-reviewed equine literature instead of marketing copy.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The honest summary is that evidence is uneven across categories, and the strength of the data is the first thing worth knowing before anything else. The most-studied category is joints: our <Link href="/supplements/joint-supplements" className="text-brand-primary underline">joint supplement reference</Link> grades each common ingredient &mdash; glucosamine, chondroitin, MSM, hyaluronic acid and others &mdash; by what the equine literature actually supports, where it falls short, and how to read a label critically. Other categories carry thinner evidence, and the references say so plainly rather than papering over the gaps.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          A supplement is one input among many, and rarely the most important one. Persistent stiffness, poor coat, or a dull topline are usually questions for the <Link href="/health" className="text-brand-primary underline">health library</Link> and your veterinarian before they are questions for a tub. Forage quality, ration balance, and trace-mineral status &mdash; covered in the <Link href="/nutrition" className="text-brand-primary underline">nutrition reference</Link> &mdash; resolve more &ldquo;needs a supplement&rdquo; situations than any product on a shelf. Read these pages as a way to ask better questions, not as a buying guide.
        </p>
      </div>

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
