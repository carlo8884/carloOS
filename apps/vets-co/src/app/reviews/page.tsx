import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Product Reviews — Honest Comparisons | Vets.co', description: 'Pet product reviews from a veterinarian\'s perspective. Pet insurance, telehealth services ranked using public payout data and insurer disclosures.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Reviews', url: 'https://vets.co/reviews' },
  ],
})


const REVIEWS = [
  { title: 'Best Pet Insurance 2026 — Owner Reference', desc: 'Which plans actually pay when your pet needs $5,000 of care at 11pm', href: '/reviews/best-pet-insurance', badge: 'Most Important' },
  { title: 'Best Pet Telehealth 2026', desc: 'Vetster, AskVet, Chewy Connect compared by availability and credentials', href: '/telehealth', badge: 'Convenient Care' },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vets.co Pet Product Reviews',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `https://vets.co${r.href}`,
  })),
}
const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function VetsReviewsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <HubMasthead
        eyebrow="Honest Comparisons"
        title="Pet Product Reviews"
        intro="Ranked from a clinical perspective on what actually matters when your pet needs care — published payout and complaint data, policy disclosures, and the credentials behind the advice. No paid placements."
        manifestKey="vets-co:category-reviews"
        fallbackKey="vets-co:insurance-hero"
        imageAlt="A desk with documents and a calculator used to compare options"
        primaryCta={{ href: '/reviews/best-pet-insurance', label: 'Compare pet insurance' }}
        secondaryCta={{ href: '/telehealth', label: 'Compare telehealth' }}
      />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Reviews</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the vets reviews-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Vets reviews-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-pet-reviews-buyer-guide-chart,
            fridge-reviews-comparison-card, and
            veterinary-reviews-reference-handbook notes that
            match the reviews-section-map,
            per-category-comparison-log, and
            payout-data-and-editorial-criteria copy on this
            hub — a laminated pet reviews buyer-guide
            chart so the section map (pet insurance vs
            telehealth) is posted on the fridge (not a
            tools-hub calculator chart, not an insurance
            policy-map chart), a pet fridge reviews
            comparison card so each category&apos;s
            editorial criteria and shortlist is labeled
            on the fridge (not a cat measurement card,
            not an insurance levers card), and a
            veterinary reviews reference handbook so the
            payout-data / policy-disclosure / credential
            grounding is a physical kitchen book (not a
            feline calculator handbook, not an insurance
            handbook). Educational kitchen checklist, not
            a ranked insurer list, not an enrollment hop,
            and not a substitute for a veterinarian.
            Vets.co does not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Vets reviews-hub checklist"
            subtitle="Email the reviews-buyer-guide-chart, fridge comparison-card, and reviews-handbook notes. No spam."
            ctaText="Email my vets reviews-hub checklist"
            source="reviews-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container pt-12 pb-2">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 leading-tight">How these reviews are decided</h2>
          <p className="text-base text-brand-text-light leading-relaxed mb-4">
            The products covered on this hub are the ones where a bad choice is expensive and hard to reverse: pet insurance you commit to before your pet is sick, and telehealth services you reach for at the worst possible moment. Rather than rank them on marketing or sign-up bonuses, our comparisons lean on the evidence an owner can actually verify &mdash; published payout and complaint data, insurer policy disclosures, the credentials of the people answering a telehealth call, and the fine print that determines whether a claim is paid or denied. The goal is to surface what matters when care is needed, not what is easiest to advertise.
          </p>
          <p className="text-base text-brand-text-light leading-relaxed mb-4">
            The two anchor comparisons here approach the same problem &mdash; affording and accessing care &mdash; from different angles. Our <Link href="/reviews/best-pet-insurance" className="text-brand-primary font-medium hover:underline">best pet insurance reference</Link> looks at which plans hold up when a pet needs several thousand dollars of care at eleven at night, weighing reimbursement structure, exclusions, and the gap between an advertised price and a real claim. The <Link href="/telehealth" className="text-brand-primary font-medium hover:underline">pet telehealth comparison</Link> evaluates the services that connect you to a veterinarian remotely, judged on availability, the credentials behind the advice, and where virtual care genuinely substitutes for an in-person visit and where it does not.
          </p>
          <p className="text-base text-brand-text-light leading-relaxed">
            Everything here is written from a clinical perspective by the Vets.co editorial team and sourced from cited references and public disclosures. Vets.co does not sell insurance or accept payment for favorable placement; rankings reflect the data, not a commercial relationship. These pages are meant to help you make a confident decision and then have a sharper conversation with your own veterinarian &mdash; not to replace professional judgment about your individual pet.
          </p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container pb-12 pt-4">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all">
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light">{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Reviews-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          reviews-section-map, per-category-comparison-log,
          and payout-data-and-editorial-criteria copy on
          this hub — a laminated pet reviews buyer-guide
          chart so the insurance / telehealth map is
          posted on the fridge, a pet fridge reviews
          comparison card so each category&apos;s editorial
          criteria and shortlist is labeled on the fridge,
          and a veterinary reviews reference handbook so
          the payout-data / policy-disclosure / credential
          grounding is a physical kitchen book. These are
          educational kitchen searches, not a ranked
          insurer list, not a substitute for a
          veterinarian, not a tools-hub / insurance-hub
          hop, and not a child accounting-pad / date-stamp
          hop (those live on insurance children). This
          page does not hop medications or vaccines. This
          page does not sell insurance. This page does
          not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated pet reviews buyer-guide chart /
            pet fridge reviews comparison card /
            veterinary reviews reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / enrollment hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools-hub
            laminated+cat+calculator+tools+chart /
            cat+fridge+measurement+card /
            feline+calculator+reference+handbook,
            insurance-hub
            laminated+pet+insurance+policy+map+chart /
            pet+fridge+insurance+levers+card /
            veterinary+insurance+reference+handbook,
            and child four+column+accounting+pad /
            self+inking+date+stamp hops.
            Directory import left untouched. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the reviews-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page reviews-section-map,
            per-category-comparison-log, and
            payout-data-and-editorial-criteria copy — a
            laminated pet reviews buyer-guide chart, a
            pet fridge reviews comparison card, and a
            veterinary reviews reference handbook.
            Educational kitchen searches only. They are
            not a ranked insurer list, they are not a
            tools-hub / insurance-hub hop, they are not
            an enrollment hop, and they do not replace a
            veterinarian. Vets.co does not sell
            insurance. Vets.co earns a commission on
            qualifying purchases at no extra cost to
            you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+pet+reviews+buyer+guide+chart?s=reviews-hub"
              amazonLabel="Browse laminated pet reviews buyer-guide charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pet+fridge+reviews+comparison+card?s=reviews-hub"
              amazonLabel="Browse pet fridge reviews comparison cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/veterinary+reviews+reference+handbook?s=reviews-hub"
              amazonLabel="Browse veterinary reviews reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed veterinarians" />
    </>
  </>
  )
}
