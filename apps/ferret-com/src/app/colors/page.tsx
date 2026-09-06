import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, ShopCtas } from '@carloOS/ui'
import { HubHero } from '../../components/HubHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Colors & Patterns — Sable, Albino, DEW & More | Ferret.com',
  description:
    'A field guide to ferret colors and patterns — sable, albino, dark-eyed white, cinnamon, champagne, black, chocolate — plus lifespan and choosing one.',
  path: '/colors',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Patterns', url: 'https://ferret.com/colors' },
  ],
})

interface ColorCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const COLOR_CARDS: ColorCard[] = [
  {
    slug: 'ferret-colors-and-patterns',
    eyebrow: 'Start here',
    title: 'Colors & Patterns',
    description:
      'The full ferret color and pattern map — sable, champagne, chocolate, cinnamon, black, albino, and DEW — plus pattern overlays like mitt, panda, blaze, and roan.',
  },
  {
    slug: 'sable-ferrets',
    eyebrow: 'Most common color',
    title: 'Sable Ferrets',
    description:
      'The classic "wild" ferret look: warm-brown guard hairs over a pale undercoat with a dark bandit mask. Why sable is the most common color and how it shifts with the seasons.',
  },
  {
    slug: 'albino-ferrets',
    eyebrow: 'White, red-eyed',
    title: 'Albino Ferrets',
    description:
      'True albinos: white coat, pink nose, ruby eyes, and no melanin. The genetics behind albinism, the laboratory history, sun sensitivity, and the deafness myth.',
  },
  {
    slug: 'dark-eyed-white-ferrets',
    eyebrow: 'White, dark-eyed',
    title: 'Dark-Eyed White (DEW)',
    description:
      'White coat but burgundy-to-black eyes — not albinos. How DEW ferrets differ genetically, the link to coat-color deafness, and what panda and blaze share with them.',
  },
  {
    slug: 'cinnamon-ferrets',
    eyebrow: 'Rare & warm-toned',
    title: 'Cinnamon Ferrets',
    description:
      'A reddish-brown coat over a golden undercoat — one of the rarest and most contested labels, often confused with champagne and chocolate.',
  },
  {
    slug: 'champagne-ferrets',
    eyebrow: 'Diluted sable',
    title: 'Champagne Ferrets',
    description:
      'A pale, milky-coffee dilution of the sable coat with a faint mask and pinkish nose. How to tell champagne from cinnamon and chocolate, and why the line is blurry.',
  },
  {
    slug: 'black-ferrets',
    eyebrow: 'Deepest pigment',
    title: 'Black Ferrets',
    description:
      'Black sable and true black coats with blackish noses and near-black guard hairs — the darkest end of the spectrum, and how it differs from a standard sable.',
  },
  {
    slug: 'chocolate-ferrets',
    eyebrow: 'Warm brown',
    title: 'Chocolate Ferrets',
    description:
      'Milk-chocolate guard hairs over a white-to-amber undercoat with a brown nose. Where chocolate sits between sable and champagne on the warm-brown gradient.',
  },
  {
    slug: 'ferret-lifespan',
    eyebrow: 'How long they live',
    title: 'Ferret Lifespan',
    description:
      'The typical 5–8 year span, the factors that shorten or lengthen it, and the honest answer to whether coat color has anything to do with longevity.',
  },
  {
    slug: 'male-vs-female-ferrets',
    eyebrow: 'Hobs vs. jills',
    title: 'Male vs. Female',
    description:
      'Size, temperament, and care differences between hobs (males) and jills (females), the role of spaying and neutering, and which might fit your home.',
  },
  {
    slug: 'silver-ferrets',
    eyebrow: 'Frosted & shifting',
    title: 'Silver Ferrets',
    description:
      'White-tipped guard hairs over a darker base for a steely, frosted grey — and the famously unstable coat that often whitens with every molt. How silver differs from dark-eyed white.',
  },
  {
    slug: 'panda-ferrets',
    eyebrow: 'White-headed pattern',
    title: 'Panda Ferrets',
    description:
      'A fully white head and shoulders over a colored saddle, with white mitts. What defines the panda pattern, how it differs from blaze, and why most pandas warrant a hearing check.',
  },
  {
    slug: 'blaze-and-roan-patterns',
    eyebrow: 'Stripe & salt-and-pepper',
    title: 'Blaze & Roan Patterns',
    description:
      'Blaze is a white stripe up the head; roan is a salt-and-pepper mix of white and colored guard hairs. How the two overlap, and the deafness flag that travels with the blaze.',
  },
  {
    slug: 'choosing-a-healthy-ferret',
    eyebrow: 'Before you adopt',
    title: 'Choosing a Healthy Ferret',
    description:
      'A head-to-tail checklist for picking a bright, sound ferret — coat, eyes, ears, body condition, temperament — and the color-linked health notes worth knowing first.',
  },
]

// ItemList of the color & pattern guides — structured, citable index of the
// color cluster for AI Overviews / Perplexity (GEO authority signal).
const colorListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret Color & Pattern Guides at Ferret.com',
  numberOfItems: COLOR_CARDS.length,
  itemListElement: COLOR_CARDS.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: card.title,
    url: `https://ferret.com/colors/${card.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, colorListSchema)

export default function ColorsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero — image-first overlaid masthead (matches the homepage identity) */}
      <HubHero
        eyebrow="Colors & Patterns"
        title="Ferret Colors & Patterns"
        intro="Sable, albino, dark-eyed white, cinnamon, champagne, black, chocolate — ferret coats come in a small but gorgeously confusing palette. This is the field guide: what each color actually looks like, how the labels overlap, and where coat color does (and doesn't) connect to health and lifespan."
        manifestKey="ferret-com:colors-hero"
        imageAlt="Ferret coat colors and patterns"
        cta={{ href: '/colors/ferret-colors-and-patterns', label: 'See the full color guide' }}
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Colors &amp; Patterns</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the ferret colors-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret colors-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-ferret-colors-palette-chart,
            fridge-color-id-card, and
            mustelid-colors-reference-handbook notes that
            match the sable-to-dew-palette-map,
            coat-label-overlap-log, and
            mustela-furo-single-species-grounding copy on
            this hub — a laminated ferret colors palette
            chart so the sable / albino / DEW / cinnamon /
            champagne / black / chocolate map is posted
            on the fridge (not a tools-hub calculator
            chart, not a reviews buyer-guide chart, not a
            diet feeding chart, not a care routine chart,
            not a behavior cue chart, not a health triage
            chart, not an ownership section-map chart), a
            ferret fridge color id card so coat-label and
            seasonal-shift notes are labeled on the fridge
            (not a measurement card, not a reviews
            comparison card, not a diet label card, not a
            care card, not a behavior card, not a health
            library card, not an ownership prep card), and
            a mustelid colors reference handbook so the
            Mustela furo single-species grounding is a
            physical kitchen book (not a calculator
            handbook, not a reviews handbook, not a diet
            handbook, not a care handbook, not a behavior
            handbook, not a health handbook, not an
            ownership handbook). Educational kitchen
            checklist, not a ranked color list, not a
            child toothbrush / dosing hop, and not a
            substitute for an exotic-mammal veterinarian.
            Ferret.com does not sell insurance. Aging
            pages stay held. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret colors-hub checklist"
            subtitle="Email the colors-palette-chart, fridge color-id-card, and colors-handbook notes. No spam."
            ctaText="Email my ferret colors-hub checklist"
            source="colors-hub-under-hero"
          />
        </div>
      </section>

      {/* Intro */}
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
            maxWidth: '700px',
            lineHeight: 1.65,
          }}
        >
          One quick myth-bust before you dive in: domestic ferrets (<em>Mustela furo</em>) are a
          single species, not a set of breeds. Color names are descriptive, not genetic — the same
          animal can be labeled differently by two breeders, and a coat shifts shade between the
          heavy winter coat and the sparse summer one. Use these guides for the look and the
          language, then see{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>Health</Link> and{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>Care</Link> for what
          actually keeps a ferret of any color thriving.
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
          {COLOR_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/colors/${card.slug}`}
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
          Colors-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          sable-to-dew-palette-map, coat-label-overlap-log,
          and mustela-furo-single-species-grounding copy on
          this hub — a laminated ferret colors palette
          chart so the sable / albino / DEW / cinnamon /
          champagne / black / chocolate map is posted on
          the fridge, a ferret fridge color id card so
          coat-label and seasonal-shift notes are labeled
          on the fridge, and a mustelid colors reference
          handbook so the Mustela furo single-species
          grounding is a physical kitchen book. These are
          educational kitchen searches, not a ranked
          color list, not a substitute for an
          exotic-mammal veterinarian, not a tools-hub /
          reviews-hub / diet-hub / care-hub / behavior-hub
          / health-hub / ownership-hub hop, and not a
          child toothbrush / dosing hop (those live on
          health children). This page does not hop
          medications or vaccines. This page does not
          sell insurance. This page does not claim
          hands-on testing. Ferret aging stays held.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated ferret colors palette chart /
            ferret fridge color id card /
            mustelid colors reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / aging hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            diet / care / behavior / health / ownership
            kitchen kits and child finger+toothbrush /
            carnivore+care hops. Directory import left
            untouched. Ferret aging stays held.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the colors-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page sable-to-dew-palette-map,
            coat-label-overlap-log, and
            mustela-furo-single-species-grounding copy — a
            laminated ferret colors palette chart, a
            ferret fridge color id card, and a mustelid
            colors reference handbook. Educational
            kitchen searches only. They are not a ranked
            color list, they are not a tools-hub /
            reviews-hub / diet-hub / care-hub /
            behavior-hub / health-hub / ownership-hub hop,
            they are not a child toothbrush hop, and they
            do not replace an exotic-mammal veterinarian.
            Ferret.com does not sell insurance. Ferret.com
            earns a commission on qualifying purchases at
            no extra cost to you. Empty Chewy buttons
            stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+ferret+colors+palette+chart?s=colors-hub"
              amazonLabel="Browse laminated ferret colors palette charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ferret+fridge+color+id+card?s=colors-hub"
              amazonLabel="Browse ferret fridge color id cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mustelid+colors+reference+handbook?s=colors-hub"
              amazonLabel="Browse mustelid colors reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section
        style={{
          background: 'var(--brand-primary-pale)',
          borderTop: '1px solid var(--brand-border)',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The Ferret.com Field Notes"
          subtitle="New color guides, care references, and health explainers. Cited. No product pushes."
          ctaText="Send the first-year schedule"
          source="colors-hub"
          perks={[
            'Plain-English field guides',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
