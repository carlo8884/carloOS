import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Vet Visit & Cost-of-Care Guides | Vets.co', description: 'Practical guides to the cost of veterinary care, what to expect at the vet, emergency vs. ER visits, and getting the most from every appointment.', path: '/guides' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Guides', url: 'https://vets.co/guides' },
  ],
})


const SECTIONS = [
  { category: 'Cost of Care', items: [{ title: 'What Vet Care Really Costs', href: '/guides/cost-of-veterinary-care', badge: 'Start Here' }, { title: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }, { title: 'Emergency Vet Costs Explained', href: '/guides/emergency-vet-costs' }] },
  { category: 'The Vet Visit', items: [{ title: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { title: 'Questions to Ask Your Vet', href: '/guides/questions-to-ask-your-vet' }, { title: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }] },
  { category: 'Urgent vs. Routine', items: [{ title: 'ER vs. Urgent Care vs. Regular Vet', href: '/guides/er-vs-urgent-care' }, { title: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }] },
]

const ALL_GUIDE_ITEMS = SECTIONS.flatMap((s) => s.items)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vet Visit and Cost-of-Care Guides',
  numberOfItems: ALL_GUIDE_ITEMS.length,
  itemListElement: ALL_GUIDE_ITEMS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.title,
    url: `https://vets.co${item.href}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function VetsGuidesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Owner Guides</span></div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Vet Visit & Cost-of-Care Guides</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Straight answers to the practical questions every pet owner faces: what care costs, how to pay for it, when a problem is an emergency, and how to get the most from every veterinary visit.</p>
      </div>
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>
      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:guides-hero" priority aspect="16:9" variant="wide" />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the vets guides-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Vets guides-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-pet-guides-section-map-chart,
            fridge-guides-prep-card, and
            veterinary-guides-reference-handbook notes that
            match the cost-visit-urgency-map,
            appointment-prep-log, and
            owner-guides-grounding copy on this hub — a
            laminated pet guides section-map chart so the
            cost / visit / urgency tracks are posted on
            the fridge (not a tools-hub calculator chart,
            not an insurance policy-map chart, not a
            reviews buyer-guide chart, not a health
            triage chart), a pet fridge guides prep card
            so appointment-prep notes are labeled on the
            fridge (not a cat measurement card, not an
            insurance levers card, not a reviews
            comparison card, not a health library card),
            and a veterinary guides reference handbook so
            the owner-guides grounding is a physical
            kitchen book (not a feline calculator
            handbook, not an insurance handbook, not a
            reviews handbook, not a health handbook).
            Educational kitchen checklist, not a ranked
            clinic list, not a child spiral-notebook /
            budget-workbook hop, and not a substitute for
            a veterinarian. Vets.co does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Vets guides-hub checklist"
            subtitle="Email the guides-section-map-chart, fridge prep-card, and guides-handbook notes. No spam."
            ctaText="Email my vets guides-hub checklist"
            source="guides-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container pt-14 pb-2">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4 leading-tight">What this hub covers</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Most veterinary anxiety comes down to two questions an owner cannot easily answer in the moment: what is this going to cost, and is this serious enough to act on right now? These guides exist to answer both before the moment arrives. Written from a clinical perspective, they translate how veterinary pricing actually works, how to plan for it, and how to read the difference between a problem that can wait until morning and one that cannot &mdash; so that fear and unfamiliarity do not drive the decision. The hub is organized into three connected tracks: the cost of care, the visit itself, and judging urgency.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The most-read guide is <Link href="/guides/cost-of-veterinary-care" className="text-brand-primary font-medium hover:underline">what vet care really costs</Link>, which breaks down where the money goes and why the same procedure varies so widely by region and setting &mdash; the foundation for every budgeting decision that follows. Because cost and urgency are tangled together, <Link href="/guides/er-vs-urgent-care" className="text-brand-primary font-medium hover:underline">ER vs. urgent care vs. the regular vet</Link> explains which setting fits which situation, and why choosing wrong can mean either an unnecessary emergency bill or a dangerous delay. To get more from the appointment itself, <Link href="/guides/questions-to-ask-your-vet" className="text-brand-primary font-medium hover:underline">questions to ask your vet</Link> turns a rushed visit into a useful one.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            The remaining guides round out each track: how to afford care and what emergencies typically cost, what to expect at a routine visit and how to choose a veterinarian, and clear signals for when a symptom warrants a same-day trip. Everything here is written and maintained by the Vets.co editorial team and sourced from cited references. These guides are owner-focused and practical, intended to help you walk into any veterinary setting better prepared &mdash; not to substitute for the judgment of the veterinarian who examines your pet.
          </p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container pb-14 pt-4">
        {SECTIONS.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{(item as any).badge}</div>}
                  <div className="font-display font-bold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Guides-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          cost-visit-urgency-map, appointment-prep-log,
          and owner-guides-grounding copy on this hub — a
          laminated pet guides section-map chart so the
          cost / visit / urgency tracks are posted on the
          fridge, a pet fridge guides prep card so
          appointment-prep notes are labeled on the
          fridge, and a veterinary guides reference
          handbook so the owner-guides grounding is a
          physical kitchen book. These are educational
          kitchen searches, not a ranked clinic list, not
          a substitute for a veterinarian, not a
          tools-hub / insurance-hub / reviews-hub /
          health-hub hop, and not a child spiral-notebook
          / budget-workbook hop (those live on guides
          children). This page does not hop medications
          or vaccines. This page does not sell insurance.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated pet guides section-map chart /
            pet fridge guides prep card /
            veterinary guides reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / insurance /
            reviews / health kitchen kits and child
            spiral+notebook / household+budget+workbook
            hops. Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the guides-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page cost-visit-urgency-map,
            appointment-prep-log, and
            owner-guides-grounding copy — a laminated pet
            guides section-map chart, a pet fridge guides
            prep card, and a veterinary guides reference
            handbook. Educational kitchen searches only.
            They are not a ranked clinic list, they are
            not a tools-hub / insurance-hub / reviews-hub
            / health-hub hop, they are not a child
            spiral-notebook hop, and they do not replace
            a veterinarian. Vets.co does not sell
            insurance. Vets.co earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+pet+guides+section+map+chart?s=guides-hub"
              amazonLabel="Browse laminated pet guides section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pet+fridge+guides+prep+card?s=guides-hub"
              amazonLabel="Browse pet fridge guides prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/veterinary+guides+reference+handbook?s=guides-hub"
              amazonLabel="Browse veterinary guides reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>
    </>
  </>
  )
}
