/**
 * Horses.com Bloodstock Hub -- /bloodstock
 *
 * Educational/editorial cluster on the breeding and sales side of racing:
 * what bloodstock means, how Thoroughbred sales work, and how to read a
 * pedigree. NON-WAGERING. No betting, odds, or handicapping anywhere.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities cited: The Jockey Club, major auction houses (educational).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, ShopCtas } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { bloodstockSpokes } from '@/data/bloodstock'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Bloodstock & Breeding -- Sales & Pedigrees | Horses.com',
  description:
    'Reference on the breeding and sales side of racing: what bloodstock means, how Thoroughbred auctions work, and how to read a pedigree.',
  path: '/bloodstock',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Bloodstock', url: 'https://horses.com/bloodstock' },
  ],
})

const bloodstockListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bloodstock & Breeding Reference Articles at Horses.com',
  description:
    'Educational reference on the breeding and sales side of horse racing: bloodstock, Thoroughbred sales, and pedigrees.',
  numberOfItems: bloodstockSpokes.length,
  itemListElement: bloodstockSpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/bloodstock/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, bloodstockListSchema)

export default function BloodstockHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:bloodstock-hero"
        fallbackKey="horses-com:hero"
        eyebrow="The Business of Racing"
        title="Bloodstock & Breeding"
        subtitle="Behind every racehorse is a market most fans never see: the breeding and sales world where pedigrees are read, foals are bred, and horses change hands at public auction. This is an educational reference to how that world works. Not a betting resource. Not a handicapping guide."
        alt="A Thoroughbred mare and foal in a breeding paddock"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Bloodstock</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses bloodstock-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses bloodstock-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-bloodstock-section-map-chart,
            stall-door-bloodstock-prep-card, and
            equine-bloodstock-reference-handbook notes that
            match the pedigree-sales-map, auction-house-log,
            and jockey-club-grounding copy on this hub — a
            laminated horse barn bloodstock section-map
            chart so the pedigree / sales / breeding map is
            posted on the stall door (not a tools-hub
            calculator chart, not a reviews buyer-guide
            chart, not a supplements category chart, not a
            tack section-map chart, not an ownership
            section-map chart, not a breeds profile chart,
            not a discipline section-map chart, not a
            forage-first chart, not a daily-care chart, not
            an emergency-triage chart, not an owner-guides
            chart), a horse stall-door bloodstock prep card
            so auction-house and pedigree notes are labeled
            on the stall door (not a measurement card, not
            a reviews comparison card, not a supplements
            label card, not a tack-fit card, not an
            ownership prep card, not a breeds library card,
            not a discipline prep card, not a ration card,
            not a care card, not a vital-signs card, not an
            owner-guides card), and an equine bloodstock
            reference handbook so The Jockey Club grounding
            is a physical barn book (not a calculator
            handbook, not a reviews handbook, not a
            supplements handbook, not a tack handbook, not
            an ownership handbook, not a breeds handbook,
            not a discipline handbook, not a nutrition
            handbook, not a husbandry handbook, not a
            health handbook, not an owner-guides handbook).
            Educational kitchen checklist, not a ranked
            auction list, not a child curry-comb /
            hoof-pick hop, and not a substitute for a
            veterinarian. Horses.com does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses bloodstock-hub checklist"
            subtitle="Email the bloodstock-section-map-chart, stall-door prep-card, and bloodstock-handbook notes. No spam."
            ctaText="Email my horses bloodstock-hub checklist"
            source="bloodstock-hub-under-hero"
          />
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          &ldquo;Bloodstock&rdquo; is the word racing uses for Thoroughbreds
          considered as breeding and trading assets &mdash; the business side of
          the sport that runs alongside the racing itself. These reference
          articles explain what the term covers, how Thoroughbred sales work,
          and how to read a pedigree page. They are educational guides: no
          betting, odds, handicapping, or individualized buying or investment
          advice appears anywhere in this cluster.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            Bloodstock Reference Articles
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {bloodstockSpokes.length} articles
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {bloodstockSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/bloodstock/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.kicker}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {spoke.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── EDITORIAL SCOPE NOTE ───────────────────────────────── */}
        <div className="mt-16 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These articles describe the breeding, sales, and pedigree side of
            racing as an educational subject. They are not wagering resources. No
            betting tips, odds commentary, or handicapping guidance is provided
            or implied. Nothing here is individualized buying, breeding, or
            investment advice; for decisions involving the purchase or breeding
            of horses, consult a qualified professional directly.
          </p>
        </div>

        {/* ── CROSS-LINKS TO SITE HUBS ────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Horses.com Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Racing Hub', href: '/racing' },
              { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
              { label: 'Breeds', href: '/breeds' },
              { label: 'Ownership', href: '/ownership' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-xs font-semibold no-underline transition rounded-pill px-3 py-1.5 border border-brand-border text-brand-text-mid hover:border-brand-primary hover:bg-brand-primary-pale"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Bloodstock-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          pedigree-sales-map, auction-house-log, and
          jockey-club-grounding copy on this hub — a
          laminated horse barn bloodstock section-map
          chart so the pedigree / sales / breeding map is
          posted on the stall door, a horse stall-door
          bloodstock prep card so auction-house and
          pedigree notes are labeled on the stall door, and
          an equine bloodstock reference handbook so The
          Jockey Club grounding is a physical barn book.
          These are educational kitchen searches, not a
          ranked auction list, not a substitute for a
          veterinarian, not a tools-hub / reviews-hub /
          supplements-hub / tack-hub / nutrition-hub /
          care-hub / health-hub / guides-hub /
          ownership-hub / breeds-hub / disciplines-hub hop,
          and not a child curry-comb / hoof-pick hop (those
          live on care children). This page does not hop
          medications or vaccines. This page does not sell
          insurance. This page does not claim hands-on
          testing. This page is not a wagering resource.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn bloodstock section-map chart /
            horse stall-door bloodstock prep card /
            equine bloodstock reference handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            supplements / tack / nutrition / care /
            health / guides / ownership / breeds /
            disciplines kitchen kits and child
            horse+curry+comb / horse+hoof+pick hops.
            Directory import left untouched. Do not
            re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the bloodstock-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page pedigree-sales-map, auction-house-log,
            and jockey-club-grounding copy — a laminated
            horse barn bloodstock section-map chart, a
            horse stall-door bloodstock prep card, and an
            equine bloodstock reference handbook.
            Educational kitchen searches only. They are
            not a ranked auction list, they are not a
            sibling-hub kitchen hop, they are not a child
            curry-comb hop, and they do not replace a
            veterinarian. Horses.com does not sell
            insurance. Horses.com earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+bloodstock+section+map+chart?s=bloodstock-hub"
              amazonLabel="Browse laminated horse barn bloodstock section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+bloodstock+prep+card?s=bloodstock-hub"
              amazonLabel="Browse horse stall-door bloodstock prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+bloodstock+reference+handbook?s=bloodstock-hub"
              amazonLabel="Browse equine bloodstock reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a discipline, breed, or the business of the sport. Citation-anchored. No product pushes."
          ctaText="Send the weekly notes"
          source="bloodstock-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
