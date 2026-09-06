import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, buildItemListSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubHero } from '../../components/HubHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Best Ferret Gear: Buyer Guides & Reviews 2026 | Ferret.com',
  description:
    'Source-cited ferret buyer guides: the best ferret cage, litter, harness, and food, ranked against published husbandry and exotic-vet criteria.',
  path: '/reviews',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Reviews', url: 'https://ferret.com/reviews' },
  ],
})

interface ReviewCardEntry {
  slug: string
  href: string
  eyebrow: string
  title: string
  description: string
}

// The food guide is the existing diet/best-ferret-kibble page — it is already
// an editorial food review, so we link it rather than duplicating it (CLAUDE.md
// §6 "duplicate content across sites/pages" prohibition).
const REVIEW_CARDS: ReviewCardEntry[] = [
  {
    slug: 'best-ferret-cage',
    href: '/reviews/best-ferret-cage',
    eyebrow: 'Housing',
    title: 'Best Ferret Cage',
    description:
      'Multi-level cages compared on bar spacing (the escape-and-injury variable), usable floor space per ferret, ramp and shelf safety, and door access for cleaning.',
  },
  {
    slug: 'best-ferret-litter',
    href: '/reviews/best-ferret-litter',
    eyebrow: 'Litter',
    title: 'Best Ferret Litter',
    description:
      'Paper-pellet versus the alternatives, ranked on dust and respiratory safety, why clumping cat litter is dangerous for ferrets, odor control, and tracking.',
  },
  {
    slug: 'best-ferret-harness',
    href: '/reviews/best-ferret-harness',
    eyebrow: 'Walking',
    title: 'Best Ferret Harness',
    description:
      'H-style versus jacket harnesses compared on escape prevention, sizing for a slinky body with no real neck, fit adjustment, and material against delicate skin.',
  },
  {
    slug: 'best-ferret-kibble',
    href: '/diet/best-ferret-kibble',
    eyebrow: 'Food',
    title: 'Best Ferret Food',
    description:
      'How to read a kibble panel and the three commercial tiers, with editorial picks scored against the obligate-carnivore macronutrient window. Lives in the Diet hub.',
  },
]

const itemListSchema = buildItemListSchema({
  name: 'Ferret Buyer Guides & Reviews',
  items: REVIEW_CARDS.map((c) => ({
    name: c.title,
    url: `https://ferret.com${c.href}`,
  })),
})

const reviewsSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ReviewsHubPage() {
  return (
    <>
      <SchemaScript schema={reviewsSchema} />

      <HubHero
        eyebrow="Buyer Guides & Reviews"
        title="Ferret Gear, Ranked by Criteria"
        intro="The gear you buy for a ferret is a safety decision before it is a shopping one — the wrong bar spacing, the wrong litter, the wrong harness each map to a known way ferrets get hurt or get loose. These guides rank the options against published husbandry standards and exotic-mammal veterinary references, not against marketing copy."
        manifestKey="ferret-com:tools-hero"
        imageAlt="Ferret housing and gear reference"
        cta={{ href: '/reviews/best-ferret-cage', label: 'Start with the cage' }}
      />

      {/* Breadcrumb */}
      <nav
        style={{
          padding: '12px clamp(20px, 5vw, 80px)',
          fontSize: '0.8125rem',
          color: 'var(--brand-text-light)',
          background: 'var(--brand-surface)',
          borderBottom: '1px solid var(--brand-border)',
          display: 'flex',
          gap: '8px',
        }}
      >
        <Link href="/" className="amber-link" style={{ fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Reviews</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the ferret reviews-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret reviews-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-ferret-reviews-buyer-guide-chart,
            fridge-reviews-comparison-card, and
            mustelid-reviews-reference-handbook notes that
            match the reviews-section-map,
            per-category-comparison-log, and
            AFA-and-editorial-criteria copy on this
            hub — a laminated ferret reviews buyer-guide
            chart so the section map (cage, litter,
            harness, food) is posted on the fridge (not
            a tools-hub calculator chart, not a
            Critter-Nation hop), a ferret fridge reviews
            comparison card so each category&apos;s
            editorial criteria and shortlist is labeled
            on the fridge (not a measurement card, not a
            hammock card), and a mustelid reviews
            reference handbook so the AFA / exotic-vet /
            editorial-criteria grounding is a physical
            kitchen book (not a calculator handbook, not
            a first-aid handbook). Educational kitchen
            checklist, not a ranked product list, not a
            cage / litter / harness SKU hop, and not a
            substitute for a veterinarian. Aging pages
            stay held. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret reviews-hub checklist"
            subtitle="Email the reviews-buyer-guide-chart, fridge comparison-card, and reviews-handbook notes. No spam."
            ctaText="Email my ferret reviews-hub checklist"
            source="reviews-hub-under-hero"
          />
        </div>
      </section>

      {/* Methodology intro */}
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px) 0',
        }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-amber-dark)', margin: '0 0 16px' }}>
          How these guides are built
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--brand-text-dark)', lineHeight: 1.2, margin: '0 0 18px' }}>
          Ranked on criteria, not on a hands-on test
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--brand-text-mid)', margin: '0 0 16px' }}>
          Every guide here is a documented-criteria comparison, not a lab evaluation. We do not bench-test products. Each
          page defines the husbandry criteria that actually matter for that category — for a cage that is bar spacing,
          floor space, and ramp safety; for litter it is dust and respiratory load; for a harness it is escape
          prevention and fit — then ranks the widely available options against published manufacturer specifications,
          breeder- and shelter-community consensus, and the exotic-mammal veterinary literature. Where a product choice
          carries a genuine safety consequence, that consequence is stated plainly and sourced.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--brand-text-mid)', margin: '0 0 16px' }}>
          Editorial scores reflect how closely a product meets those stated criteria — they are not user-review
          averages, and there are no star ratings or fabricated test counts here. When a category has an obvious health
          dimension (litter dust and the respiratory tract; harness fit and a ferret&rsquo;s fragile skin), we flag it
          and point to the relevant <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>health</Link> and{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>care</Link> references rather than giving
          individualized advice. Anything affecting a ferret&rsquo;s health should be confirmed with an exotic-animal
          veterinarian.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--brand-text-mid)', margin: '0 0 16px' }}>
          For the reasoning behind the picks, each guide links back into the editorial library: cage choices into{' '}
          <Link href="/care/cage-setup" className="amber-link" style={{ fontWeight: 600 }}>cage setup</Link> and{' '}
          <Link href="/care/multi-level-housing" className="amber-link" style={{ fontWeight: 600 }}>multi-level housing</Link>,
          litter into <Link href="/care/bedding-and-litter-types" className="amber-link" style={{ fontWeight: 600 }}>bedding and litter types</Link> and{' '}
          <Link href="/care/litter-training" className="amber-link" style={{ fontWeight: 600 }}>litter training</Link>, and
          harness into{' '}
          <Link href="/behavior/leash-and-harness-training" className="amber-link" style={{ fontWeight: 600 }}>leash and harness training</Link>.
        </p>
      </div>

      {/* Guide cards */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 80px) clamp(40px, 6vw, 72px)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {REVIEW_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={card.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '24px 22px',
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'var(--brand-amber)',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber-dark)',
                    marginBottom: '8px',
                  }}
                >
                  {card.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    color: 'var(--brand-text-mid)',
                    margin: '0 0 14px',
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                  }}
                >
                  Read the guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Reviews-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          reviews-section-map, per-category-comparison-log,
          and AFA-and-editorial-criteria copy on this
          hub — a laminated ferret reviews buyer-guide
          chart so the cage / litter / harness / food map
          is posted on the fridge, a ferret fridge
          reviews comparison card so each category&apos;s
          editorial criteria and shortlist is labeled on
          the fridge, and a mustelid reviews reference
          handbook so the AFA / exotic-vet /
          editorial-criteria grounding is a physical
          kitchen book. These are educational kitchen
          searches, not a ranked product list, not a
          substitute for a veterinarian, not a tools-hub
          calculator-tools hop, and not a child
          Critter-Nation / wood-pellet / vest-harness hop
          (those live on the child reviews). This page
          does not hop medications or vaccines. This page
          does not claim hands-on testing. Ferret aging
          stays held.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated ferret reviews buyer-guide chart /
            ferret fridge reviews comparison card /
            mustelid reviews reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / cage-SKU hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools-hub
            laminated+ferret+calculator+tools+chart /
            ferret+fridge+measurement+card /
            mustelid+calculator+reference+handbook
            and child ferret+nation+critter+nation /
            compressed+wood+pellet / vest+harness hops.
            Directory import left untouched. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the reviews-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page reviews-section-map,
            per-category-comparison-log, and
            AFA-and-editorial-criteria copy — a
            laminated ferret reviews buyer-guide chart,
            a ferret fridge reviews comparison card, and
            a mustelid reviews reference handbook.
            Educational kitchen searches only. They are
            not a ranked product list, they are not a
            tools-hub calculator-tools hop, they are not
            a Critter-Nation / litter / harness hop, and
            they do not replace a veterinarian.
            Ferret.com earns a commission on qualifying
            purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+ferret+reviews+buyer+guide+chart?s=reviews-hub"
              amazonLabel="Browse laminated ferret reviews buyer-guide charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ferret+fridge+reviews+comparison+card?s=reviews-hub"
              amazonLabel="Browse ferret fridge reviews comparison cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mustelid+reviews+reference+handbook?s=reviews-hub"
              amazonLabel="Browse mustelid reviews reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed exotic-mammal professionals" />

    </>
  )
}
