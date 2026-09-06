import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-3xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses supplements-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses supplements-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-supplements-category-chart,
            stall-door-supplements-label-card, and
            equine-supplements-reference-handbook notes that
            match the supplements-section-map,
            nasc-vs-efficacy-log, and
            AAEP-and-peer-reviewed-grounding copy on this
            hub — a laminated horse barn supplements
            category chart so the section map (joint,
            hoof, gastric) is posted at the barn (not a
            tools-hub calculator chart, not a reviews
            buyer-guide chart, not a forage-first
            chart), a horse stall-door supplements
            label card so NASC listing vs proof-of-
            efficacy notes are labeled on the stall
            door (not a measurement card, not a reviews
            comparison card, not a ration card), and an
            equine supplements reference handbook so
            the AAEP / peer-reviewed equine-medicine
            grounding is a physical barn book (not a
            calculator handbook, not a reviews
            handbook, not a nutrition handbook).
            Educational barn checklist, not a ranked
            product list, not a Platinum CJ hop, and
            not a substitute for a veterinarian. No
            spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses supplements-hub checklist"
            subtitle="Email the supplements-category-chart, stall-door label-card, and supplements-handbook notes. No spam."
            ctaText="Email my horses supplements-hub checklist"
            source="supplements-hub-under-hero"
          />
        </div>
      </section>

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
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-3xl">
          Supplements-hub barn kit
        </h2>
        <p className="max-w-3xl text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          supplements-section-map, nasc-vs-efficacy-log,
          and AAEP-and-peer-reviewed-grounding copy on
          this hub — a laminated horse barn supplements
          category chart so the joint / hoof / gastric
          map is posted at the barn, a horse stall-door
          supplements label card so NASC listing vs
          proof-of-efficacy notes are labeled on the
          stall door, and an equine supplements
          reference handbook so the AAEP / peer-reviewed
          equine-medicine grounding is a physical barn
          book. These are educational barn searches, not
          a ranked product list, not a substitute for a
          veterinarian, not a tools-hub / reviews-hub /
          nutrition-hub hop, and not a child Platinum
          CJ hop (that lives on joint-supplements). This
          page does not hop medications or vaccines.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-3xl mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn supplements category
            chart / horse stall-door supplements label
            card / equine supplements reference
            handbook). Educational barn searches only;
            no Rx / vaccine / Platinum-CJ hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            nutrition kitchen kits and child
            platinum+performance+CJ hop.
            Directory import left untouched. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-3xl">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the supplements-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page supplements-section-map,
            nasc-vs-efficacy-log, and
            AAEP-and-peer-reviewed-grounding copy — a
            laminated horse barn supplements category
            chart, a horse stall-door supplements
            label card, and an equine supplements
            reference handbook. Educational barn
            searches only. They are not a ranked
            product list, they are not a tools-hub /
            reviews-hub / nutrition-hub hop, they are
            not a Platinum CJ hop, and they do not
            replace a veterinarian. Horses.com earns a
            commission on qualifying purchases at no
            extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+supplements+category+chart?s=supplements-hub"
              amazonLabel="Browse laminated horse barn supplements category charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+supplements+label+card?s=supplements-hub"
              amazonLabel="Browse horse stall-door supplements label cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+supplements+reference+handbook?s=supplements-hub"
              amazonLabel="Browse equine supplements reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />

    </>
  )
}
