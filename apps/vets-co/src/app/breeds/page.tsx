import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Breed-Specific Health Guides | Vets.co',
  description: 'Health concerns, screening recommendations, and care guidance by breed. Sourced from cited veterinary references.',
  path: '/breeds',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Breeds', url: 'https://vets.co/breeds' },
  ],
})


const BREEDS = [
  { name: 'Labrador Retriever', slug: 'labrador-health', desc: 'Hip dysplasia, exercise-induced collapse, obesity risk.' },
  { name: 'Golden Retriever', slug: 'golden-retriever-health', desc: 'Cancer risk, hip & elbow dysplasia, hypothyroidism.' },
  { name: 'German Shepherd', slug: 'german-shepherd-health', desc: 'Hip dysplasia, degenerative myelopathy, bloat risk.' },
  { name: 'French Bulldog', slug: 'french-bulldog-health', desc: 'Brachycephalic syndrome, IVDD, heat sensitivity.' },
  { name: 'Beagle', slug: 'beagle-health', desc: 'Epilepsy, hypothyroidism, intervertebral disc disease.' },
  { name: 'Yorkshire Terrier', slug: 'yorkshire-terrier-health', desc: 'Tracheal collapse, dental disease, portosystemic shunts.' },
  { name: 'Chihuahua', slug: 'chihuahua-health', desc: 'Patellar luxation, hydrocephalus, dental disease.' },
  { name: 'Siberian Husky', slug: 'husky-health', desc: 'Hereditary eye conditions, hip dysplasia, zinc-responsive dermatosis.' },
  { name: 'Pomeranian', slug: 'pomeranian-health', desc: 'Tracheal collapse, alopecia X, patellar luxation.' },
]

// ItemList of the breed health guides — structured, citable index of the
// breed-health cluster for AI Overviews / Perplexity (GEO authority signal).
const breedListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Breed-Specific Health Guides at Vets.co',
  numberOfItems: BREEDS.length,
  itemListElement: BREEDS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    url: `https://vets.co/breeds/${b.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, breedListSchema)

export default function BreedsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Health</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Breed-Specific Health Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The health concerns, screening tests, and preventive care that matter most for each breed — anchored in veterinary references and breed-club standards.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breeds</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:category-breeds" aspect="16:9" variant="wide" priority />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the vets breeds-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Vets breeds-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-pet-breeds-screening-chart,
            fridge-breeds-library-card, and
            veterinary-breeds-reference-handbook notes that
            match the breed-health-map,
            screening-and-prevention-log, and
            breed-club-grounding copy on this hub — a
            laminated pet breeds screening chart so the
            hip / eye / cardiac / airway map is posted on
            the fridge (not a tools-hub calculator chart,
            not an insurance policy-map chart, not a
            reviews buyer-guide chart, not a health
            triage chart, not a guides section-map
            chart), a pet fridge breeds library card so
            each breed-health spoke is labeled on the
            fridge (not a cat measurement card, not an
            insurance levers card, not a reviews
            comparison card, not a health library card,
            not a guides prep card), and a veterinary
            breeds reference handbook so the breed-club
            grounding is a physical kitchen book (not a
            feline calculator handbook, not an insurance
            handbook, not a reviews handbook, not a
            health handbook, not a guides handbook).
            Educational kitchen checklist, not a ranked
            breed list, not a child hygrometer /
            divider / sewing-tape hop, and not a
            substitute for a veterinarian. Vets.co does
            not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Vets breeds-hub checklist"
            subtitle="Email the breeds-screening-chart, fridge library-card, and breeds-handbook notes. No spam."
            ctaText="Email my vets breeds-hub checklist"
            source="breeds-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-14 max-w-container-wide mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BREEDS.map((breed) => (
            <Link
              key={breed.slug}
              href={`/breeds/${breed.slug}`}
              className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">{breed.name}</div>
              <div className="text-xs text-brand-text-light leading-relaxed">{breed.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Breeds-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          breed-health-map, screening-and-prevention-log,
          and breed-club-grounding copy on this hub — a
          laminated pet breeds screening chart so the
          hip / eye / cardiac / airway map is posted on
          the fridge, a pet fridge breeds library card so
          each breed-health spoke is labeled on the
          fridge, and a veterinary breeds reference
          handbook so the breed-club grounding is a
          physical kitchen book. These are educational
          kitchen searches, not a ranked breed list, not
          a substitute for a veterinarian, not a
          tools-hub / insurance-hub / reviews-hub /
          health-hub / guides-hub hop, and not a child
          hygrometer / divider / sewing-tape hop (those
          live on breed children). This page does not hop
          medications or vaccines. This page does not
          sell insurance. This page does not claim
          hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated pet breeds screening chart /
            pet fridge breeds library card /
            veterinary breeds reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / insurance /
            reviews / health / guides kitchen kits and
            child analog+indoor+hygrometer /
            four+tab+dividers /
            flexible+sewing+tape hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the breeds-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page breed-health-map,
            screening-and-prevention-log, and
            breed-club-grounding copy — a laminated pet
            breeds screening chart, a pet fridge breeds
            library card, and a veterinary breeds
            reference handbook. Educational kitchen
            searches only. They are not a ranked breed
            list, they are not a tools-hub /
            insurance-hub / reviews-hub / health-hub /
            guides-hub hop, they are not a child
            hygrometer hop, and they do not replace a
            veterinarian. Vets.co does not sell
            insurance. Vets.co earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+pet+breeds+screening+chart?s=breeds-hub"
              amazonLabel="Browse laminated pet breeds screening charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pet+fridge+breeds+library+card?s=breeds-hub"
              amazonLabel="Browse pet fridge breeds library cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/veterinary+breeds+reference+handbook?s=breeds-hub"
              amazonLabel="Browse veterinary breeds reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

    </>
  </>
  )
}
