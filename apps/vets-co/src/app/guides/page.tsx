import type { Metadata } from 'next'
import Link from 'next/link'
import { buildArticleSchema, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage, HubSearch, HubJumpNav, FAQAccordion, ArticleSourcesList, LastUpdated } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Vet Visit & Cost-of-Care Guides | Vets.co', description: 'Practical guides to the cost of veterinary care, what to expect at the vet, emergency vs. ER visits, and getting the most from every appointment.', path: '/guides' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Guides', url: 'https://vets.co/guides' },
  ],
})

const SECTIONS = [
  { id: 'vets-guides-cost', category: 'Cost of Care', intro: 'What care costs and how owners pay for it.', items: [{ title: 'What Vet Care Really Costs', href: '/guides/cost-of-veterinary-care', badge: 'Start Here' }, { title: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }, { title: 'Emergency Vet Costs Explained', href: '/guides/emergency-vet-costs' }] },
  { id: 'vets-guides-visit', category: 'The Vet Visit', intro: 'What happens at an appointment and how to choose a clinic.', items: [{ title: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { title: 'Questions to Ask Your Vet', href: '/guides/questions-to-ask-your-vet' }, { title: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }] },
  { id: 'vets-guides-urgent', category: 'Urgent vs. Routine', intro: 'Which setting fits the situation.', items: [{ title: 'ER vs. Urgent Care vs. Regular Vet', href: '/guides/er-vs-urgent-care' }, { title: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }, { title: 'Pet First-Aid Kit Checklist', href: '/guides/pet-first-aid-kit' }, { title: 'Recovery Cones and E-Collars', href: '/guides/recovery-cone-e-collar' }, { title: 'How to Give Your Dog or Cat a Pill', href: '/guides/how-to-give-your-pet-a-pill' }] },
]

const FAQS = [
  { question: 'When is a problem an emergency?', answer: 'The Merck Veterinary Manual says to see a vet immediately for difficulty breathing, heavy bleeding, seizures, collapse or extreme lethargy, bluish or white gums, straining without passing urine or stool, or failure to eat or drink for 24 hours. Vomiting or diarrhea for more than 24 hours, or a sudden change in behavior, needs a vet within 24 hours.' },
  { question: 'What should I do if my pet swallowed something toxic?', answer: 'Call your vet or ASPCA Animal Poison Control at (888) 426-4435, open 24 hours a day, 365 days a year. A consultation fee may apply.' },
  { question: 'Can I give my pet human medicine while I wait for the vet?', answer: 'No, not without your vet. The FDA warns that human pain relievers such as ibuprofen and naproxen can act differently in pets, and acetaminophen is fatal to cats.' },
  { question: 'Can pet insurance help with vet costs?', answer: 'It can for new accidents and illnesses. Most policies reimburse you after you pay the vet, and most insurers exclude pre-existing, hereditary and congenital conditions, so enrolling early matters (NAIC).' },
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

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Vet Visit & Cost-of-Care Guides',
  description: 'Straight answers to the practical questions every pet owner faces: what care costs, how to pay for it, when a problem is an emergency, and how to get the most from every veterinary visit.',
  url: 'https://vets.co/guides',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
})
const schema = combineSchemas(breadcrumbSchema, itemListSchema, articleSchema)

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
        <Link href="/" className="inline-flex min-h-6 items-center hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>
      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:guides-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container pt-14 pb-2">
        <div className="max-w-2xl">
          <LastUpdated date="2026-10-13" />
          <div className="rounded-lg border-l-4 border-brand-primary bg-brand-surface p-5 my-6" data-testid="short-answer">
            <h2 className="font-display text-lg font-bold mb-2">The short answer</h2>
            <p className="text-base leading-relaxed text-brand-text-mid m-0">
              Go to a vet immediately for trouble breathing, heavy bleeding, seizures, collapse, pale or blue gums, or a pet that hasn&apos;t eaten or drunk for 24 hours (<a href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian">Merck Veterinary Manual</a>). For suspected poisoning, call ASPCA Animal Poison Control at (888) 426-4435 (<a href="https://www.aspca.org/pet-care/aspca-poison-control">ASPCA</a>). Don&apos;t give human medicines without your vet (<a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets">FDA</a>). For everything else, the guides below cover what care costs, how to pay for it and how to choose a vet.
            </p>
          </div>
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
      <div id="vets-guides-list" className="px-container-sm sm:px-container pb-14 pt-4">
        <HubSearch listId="vets-guides-list" total={ALL_GUIDE_ITEMS.length} noun="guides" />
        <HubJumpNav groups={SECTIONS.map((section) => ({ id: section.id, label: section.category }))} />
        {SECTIONS.map(section => (
          <section key={section.id} id={section.id} data-hub-group className="mb-10 scroll-mt-24">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-2 pb-3 border-b border-brand-border">{section.category}</h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">{section.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} data-hub-item data-title={item.title} data-topic={`${section.category} ${item.badge ?? ''}`} className="block min-h-11 bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                  {item.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{item.badge}</div>}
                  <div className="font-display font-bold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-content-wide pt-8">
          <h2 id="faq" className="font-display text-xl font-bold text-brand-dark mb-4">Owner guides FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          <ArticleSourcesList title="Sources" sources={[
            { label: 'When to See a Veterinarian (general guidance for pets)', url: 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian', publisher: 'Merck Veterinary Manual' },
            { label: 'ASPCA Poison Control', url: 'https://www.aspca.org/pet-care/aspca-poison-control', publisher: 'ASPCA' },
            { label: 'Get the Facts about Pain Relievers for Pets', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets', publisher: 'U.S. FDA Center for Veterinary Medicine' },
            { label: 'Pet Insurance (consumer topic page)', url: 'https://content.naic.org/insurance-topics/pet-insurance', publisher: 'NAIC' },
          ]} />
        </div>
      </section>
    </>
  </>
  )
}
