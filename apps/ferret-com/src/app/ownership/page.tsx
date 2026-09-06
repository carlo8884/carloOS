import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage } from '@carloOS/ui'
import { HubHero } from '../../components/HubHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Ownership & Lifestyle — Cost, Legality, Adoption | Ferret.com',
  description:
    'Ten references for new ferret owners: cost of ownership, state legality, adopting vs buying, ferrets with pets and kids, supplies, naming, and a first week.',
  path: '/ownership',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ownership', url: 'https://ferret.com/ownership' },
  ],
})

interface OwnershipCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const OWNERSHIP_CARDS: OwnershipCard[] = [
  {
    slug: 'cost-of-owning-a-ferret',
    eyebrow: 'Budget',
    title: 'Cost of Owning a Ferret',
    description:
      'Startup and recurring costs broken out: ferret, cage, supplies, food, litter, vaccinations, routine vet care, and the insulinoma/adrenal surgery line item owners underestimate.',
  },
  {
    slug: 'ferret-legality-by-state',
    eyebrow: 'Law',
    title: 'Legality by State',
    description:
      'Ferrets are banned in California and Hawaii and restricted in some cities. How to verify current rules where you live before you bring a ferret home.',
  },
  {
    slug: 'adoption-vs-buying',
    eyebrow: 'Sourcing',
    title: 'Adoption vs Buying',
    description:
      'Shelters and rescues, breeders, and large-scale farm-bred pet-store ferrets compared on health, early-altering, descenting, and what each says about temperament.',
  },
  {
    slug: 'ferrets-and-other-pets',
    eyebrow: 'Multi-pet homes',
    title: 'Ferrets & Other Pets',
    description:
      'How ferrets coexist with dogs and cats, and the prey species — rabbits, rodents, birds, reptiles — that should never share unsupervised space with a ferret.',
  },
  {
    slug: 'ferrets-with-kids',
    eyebrow: 'Family',
    title: 'Ferrets With Kids',
    description:
      'Are ferrets good family pets? Supervision, nip training, age-appropriate handling, and the household-hygiene considerations for homes with young children.',
  },
  {
    slug: 'ferret-names',
    eyebrow: 'Naming',
    title: 'Ferret Names',
    description:
      'A naming reference: themed lists, what tends to suit a ferret’s personality, and a note on whether ferrets respond to their names at all.',
  },
  {
    slug: 'ferret-glossary',
    eyebrow: 'Reference',
    title: 'Ferret Glossary',
    description:
      'Hob, jill, kit, gib, sprite, dooking, the war dance, business, sploot — the vocabulary of ferret keeping defined in one place.',
  },
  {
    slug: 'first-week-checklist',
    eyebrow: 'New owner',
    title: 'First-Week Checklist',
    description:
      'A day-by-day plan for the first seven days: cage setup, vet booking, quarantine for multi-ferret homes, litter and bite training, and bonding without overwhelming a new ferret.',
  },
  {
    slug: 'ferret-supplies-checklist',
    eyebrow: 'Setup',
    title: 'Supplies Checklist',
    description:
      'Everything a new ferret actually needs, by category — cage, bedding, litter, food, grooming, carrier, enrichment — what to buy first, what can wait, and what to avoid entirely.',
  },
  {
    slug: 'traveling-with-a-ferret',
    eyebrow: 'On the move',
    title: 'Traveling With a Ferret',
    description:
      'Safe car and air travel: escape-proof carriers, the heat sensitivity that makes a parked car deadly, hydration, destination legality, and when the kind choice is a sitter.',
  },
  {
    slug: 'ferret-insurance-basics',
    eyebrow: 'Planning',
    title: 'Ferret Insurance Basics',
    description:
      'A plain-English explainer on how exotic-pet insurance works for ferrets — coverage, exclusions, waiting periods, pre-existing conditions — and how it compares to a vet savings fund.',
  },
  {
    slug: 'is-a-ferret-right-for-you',
    eyebrow: 'Decision',
    title: 'Is a Ferret Right for You?',
    description:
      'An honest self-assessment: the daily time, real veterinary cost, odor, legality, household fit, and six-to-ten-year commitment that make a ferret a great fit for some homes and a poor one for others.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret Ownership and Lifestyle Guides',
  numberOfItems: OWNERSHIP_CARDS.length,
  itemListElement: OWNERSHIP_CARDS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.title,
    url: `https://ferret.com/ownership/${o.slug}`,
  })),
}

const ferretOwnershipSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function OwnershipHubPage() {
  return (
    <>
      <SchemaScript schema={ferretOwnershipSchema} />

      {/* Hero — image-first overlaid masthead (matches the homepage identity) */}
      <HubHero
        eyebrow="Ownership & Lifestyle"
        title="Ferret Ownership & Lifestyle"
        intro="Before the cage and the kibble comes the decision itself. Ten references for people deciding whether — and how — to bring a ferret home: real cost, where ferrets are legal, adopting versus buying, living with other pets and children, naming, vocabulary, a supplies checklist, and the first week. Practical, honest, and pushy about nothing."
        manifestKey="ferret-com:ownership-hero"
        imageAlt="Ferret ownership and lifestyle reference"
        cta={{ href: '/ownership/cost-of-owning-a-ferret', label: 'See the real cost first' }}
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Ownership</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the ferret ownership-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret ownership-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-ferret-ownership-section-map-chart,
            fridge-ownership-prep-card, and
            mustelid-ownership-reference-handbook notes that
            match the cost-legality-adoption-map,
            supplies-and-first-week-log, and
            exotic-pet-planning-grounding copy on this hub —
            a laminated ferret ownership section-map chart
            so the cost / legality / adoption / family map
            is posted on the fridge (not a tools-hub
            calculator chart, not a reviews buyer-guide
            chart, not a diet feeding chart, not a care
            routine chart, not a behavior cue chart, not a
            health triage chart), a ferret fridge
            ownership prep card so supplies-and-first-week
            notes are labeled on the fridge (not a
            measurement card, not a reviews comparison
            card, not a diet label card, not a care card,
            not a behavior card, not a health library
            card), and a mustelid ownership reference
            handbook so the exotic-pet-planning grounding
            is a physical kitchen book (not a calculator
            handbook, not a reviews handbook, not a diet
            handbook, not a care handbook, not a behavior
            handbook, not a health handbook). Educational
            kitchen checklist, not a ranked insurance
            list, not a child toothbrush / dosing hop, and
            not a substitute for an exotic-mammal
            veterinarian. Ferret.com does not sell
            insurance. Aging pages stay held. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret ownership-hub checklist"
            subtitle="Email the ownership-section-map-chart, fridge prep-card, and ownership-handbook notes. No spam."
            ctaText="Email my ferret ownership-hub checklist"
            source="ownership-hub-under-hero"
          />
        </div>
      </section>

      {/* Featured ownership spokes — three photo-backed pillar articles */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 80px) 0',
        }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-amber-dark)', margin: '0 0 20px' }}>
          Decide well, start well
        </p>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '18px',
          }}
        >
          {[
            {
              href: '/ownership/is-a-ferret-right-for-you',
              eyebrow: 'Decision',
              title: 'Is a Ferret Right for You?',
              desc: 'Daily time, real veterinary cost, odor, legality, and the 6–10-year commitment honestly assessed.',
              manifestKey: 'ferret-com:ownership-hero',
              imageAlt: 'A ferret being held gently — deciding if a ferret is right for you',
            },
            {
              href: '/ownership/cost-of-owning-a-ferret',
              eyebrow: 'Budget',
              title: 'Cost of Owning a Ferret',
              desc: 'Startup and recurring costs broken out — including the insulinoma/adrenal surgery line item most owners underestimate.',
              manifestKey: 'ferret-com:care-cage-setup',
              imageAlt: 'A ferret in its habitat — the real cost of ferret ownership',
            },
            {
              href: '/ownership/adoption-vs-buying',
              eyebrow: 'Sourcing',
              title: 'Adoption vs Buying',
              desc: 'Shelters, breeders, and large-scale farm-bred pet-store ferrets compared on health, early altering, and temperament.',
              manifestKey: 'ferret-com:health-hero',
              imageAlt: 'A ferret portrait — adoption versus buying a ferret',
            },
          ].map((card) => (
            <li key={card.href}>
              <a
                href={card.href}
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '100%',
                  minHeight: '260px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: 'inset 0 0 0 1px var(--brand-border)',
                }}
              >
                <div
                  className="[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0 [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <StockImage
                    manifestKey={card.manifestKey}
                    alt={card.imageAlt}
                    aspect="3:4"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30,20,10,0.92) 0%, rgba(30,20,10,0.35) 55%, rgba(30,20,10,0.08) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '260px',
                    padding: '22px',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-amber)', marginBottom: '6px' }}>
                    {card.eyebrow}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'rgba(251, 245, 232, 0.98)', lineHeight: 1.2, marginBottom: '8px' }}>
                    {card.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'rgba(251, 245, 232, 0.78)', margin: '0 0 10px' }}>
                    {card.desc}
                  </p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--brand-amber)' }}>
                    Read &rarr;
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--brand-text-light)',
            marginBottom: '40px',
            maxWidth: '720px',
            lineHeight: 1.65,
          }}
        >
          A ferret is a 6–10 year commitment to an animal that needs daily out-of-cage time, an
          exotic-mammal vet, and a household that suits it. These pages help you decide well and
          start well. Once a ferret is home, the{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>Care</Link>{' '}and{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>Health</Link>{' '}
          hubs cover day-to-day husbandry and medical references. New owners can also grab the free{' '}
          <Link href="/first-year-schedule" className="amber-link" style={{ fontWeight: 600 }}>52-week first-year schedule</Link>{' '}
          — a week-by-week calendar covering vaccines, dental onset, diet milestones, and the insulinoma watch window.
        </p>

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
          {OWNERSHIP_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/ownership/${card.slug}`}
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
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Ownership-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          cost-legality-adoption-map,
          supplies-and-first-week-log, and
          exotic-pet-planning-grounding copy on this hub —
          a laminated ferret ownership section-map chart
          so the cost / legality / adoption / family map
          is posted on the fridge, a ferret fridge
          ownership prep card so supplies-and-first-week
          notes are labeled on the fridge, and a mustelid
          ownership reference handbook so the
          exotic-pet-planning grounding is a physical
          kitchen book. These are educational kitchen
          searches, not a ranked insurance list, not a
          substitute for an exotic-mammal veterinarian,
          not a tools-hub / reviews-hub / diet-hub /
          care-hub / behavior-hub / health-hub hop, and
          not a child toothbrush / dosing hop (those live
          on health children). This page does not hop
          medications or vaccines. This page does not
          sell insurance. This page does not claim
          hands-on testing. Ferret aging stays held.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated ferret ownership section-map chart /
            ferret fridge ownership prep card /
            mustelid ownership reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / aging hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            diet / care / behavior / health kitchen kits
            and child finger+toothbrush / carnivore+care
            hops. Directory import left untouched.
            Ferret aging stays held.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the ownership-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page cost-legality-adoption-map,
            supplies-and-first-week-log, and
            exotic-pet-planning-grounding copy — a
            laminated ferret ownership section-map chart,
            a ferret fridge ownership prep card, and a
            mustelid ownership reference handbook.
            Educational kitchen searches only. They are
            not a ranked insurance list, they are not a
            tools-hub / reviews-hub / diet-hub / care-hub
            / behavior-hub / health-hub hop, they are not
            a child toothbrush hop, and they do not
            replace an exotic-mammal veterinarian.
            Ferret.com does not sell insurance. Ferret.com
            earns a commission on qualifying purchases at
            no extra cost to you. Empty Chewy buttons
            stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+ferret+ownership+section+map+chart?s=ownership-hub"
              amazonLabel="Browse laminated ferret ownership section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ferret+fridge+ownership+prep+card?s=ownership-hub"
              amazonLabel="Browse ferret fridge ownership prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mustelid+ownership+reference+handbook?s=ownership-hub"
              amazonLabel="Browse mustelid ownership reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

    </>
  )
}
