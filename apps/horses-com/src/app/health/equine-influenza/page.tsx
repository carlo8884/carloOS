import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Influenza — Signs, Spread, Vaccination",
  description:
    "Reference guide to equine influenza: the highly contagious respiratory virus, clinical signs, transmission, vaccination, and outbreak management.",
  path: '/health/equine-influenza',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Influenza — Signs, Spread, Vaccination",
  description:
    "Equine influenza virus: a highly contagious respiratory disease of horses. Signs, transmission, vaccination strategy, and outbreak control.",
  url: 'https://horses.com/health/equine-influenza',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Influenza",
  description:
    "Equine influenza virus: a highly contagious respiratory disease of horses. Signs, transmission, vaccination strategy, and outbreak control.",
  url: 'https://horses.com/health/equine-influenza',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "How long should a horse rest after equine influenza?",
    answer:
      "The widely cited guideline is roughly one week of rest for every day of fever, which often means three weeks or more. The respiratory lining needs time to regenerate; returning to work too early risks secondary pneumonia and lasting airway damage. Your veterinarian confirms when the horse is ready.",
    answerText:
      "Roughly one week of rest per day of fever, often three weeks or more, to let the airway lining regenerate. Returning too early risks pneumonia and lasting damage.",
  },
  {
    question: "Is equine influenza contagious to people?",
    answer:
      "Equine influenza is highly contagious between horses but is not considered a meaningful threat to humans. People can, however, carry the virus on hands, clothing, and equipment and spread it between horses, which is why hygiene and biosecurity matter during an outbreak.",
    answerText:
      "It spreads readily between horses but is not a meaningful human health threat. People can carry it on hands and equipment, so hygiene matters during outbreaks.",
  },
  {
    question: "Does the flu vaccine stop a horse from catching influenza?",
    answer:
      "Vaccination greatly reduces the severity and spread of equine influenza and is the foundation of control, but no vaccine is perfectly protective, especially as the virus drifts antigenically. Vaccinated horses that do become infected typically have milder, shorter illness, which is why high vaccination coverage protects the whole group.",
    answerText:
      "Vaccination greatly reduces severity and spread but is not perfectly protective. Vaccinated horses usually get milder illness, and high coverage protects the group.",
  },
]

export default function EquineInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Equine Influenza",
          subtitle:
            "Equine influenza is one of the most contagious respiratory diseases of the horse -- a virus that can sweep through a barn or a competition venue within days. Most healthy adult horses recover with rest, but the disease is a major welfare and economic problem because of how fast it spreads and how long horses need off work. Vaccination and basic biosecurity are the practical defenses. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Equine Influenza", href: '/health/equine-influenza' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Equine Influenza", href: "#what" },
            { label: "How It Spreads", href: "#transmission" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Care and Recovery", href: "#care" },
            { label: "Vaccination", href: "#vaccination" },
            { label: "Biosecurity", href: "#biosecurity" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Strangles", href: "/health/strangles" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "West Nile Virus", href: "/health/west-nile-virus" },
              { label: "Trailering and Transport", href: "/care/trailering" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-flu"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Equine Influenza</h2>
          <p>Equine influenza is caused by influenza A virus subtypes adapted to horses, principally the H3N8 lineage. The virus infects and damages the lining of the respiratory tract, stripping the protective cilia and leaving the airway vulnerable to secondary bacterial infection. It is endemic in many horse populations worldwide and is a notifiable concern in regions that are normally free of it, where an incursion can shut down equine movement entirely.</p>

          <h2 id="transmission">How It Spreads</h2>
          <p>Influenza spreads through respiratory droplets when horses cough, and the virus can travel surprising distances on the air. It also moves on contaminated hands, clothing, equipment, and shared airspace. The incubation period is short -- often only one to three days -- so an outbreak explodes quickly, and infected horses can shed virus before they look obviously sick. Crowded events, sales, and shared transport are classic flashpoints.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A sudden high fever, often the first and most consistent sign.</li>
            <li>A harsh, dry, hacking cough that can persist for weeks.</li>
            <li>Clear nasal discharge that may turn thicker if a secondary bacterial infection develops.</li>
            <li>Depression, loss of appetite, and enlarged lymph nodes.</li>
            <li>Muscle stiffness and reluctance to move in some horses.</li>
          </ul>

          <h2 id="care">Care and Recovery</h2>
          <p>Most healthy adult horses recover with supportive care: rest, clean air, soft palatable feed, and time. The cardinal rule is rest -- the damaged airway lining needs roughly one week of rest for every day of fever, often three weeks or more, to regenerate its cilia. Pushing a horse back to work too soon invites secondary pneumonia and chronic airway problems. A veterinarian directs any medication and watches for complications, which are more likely in foals, old horses, and those with other illness.</p>

          <h2 id="vaccination">Vaccination</h2>
          <p>Vaccination is the foundation of control and is a risk-based vaccine in the AAEP framework, recommended for horses that travel, compete, or live in contact with others. Because the virus drifts antigenically, vaccines are periodically updated, and competition bodies often mandate specific booster intervals. Your veterinarian sets the schedule based on the horse&apos;s lifestyle and the products available. See the vaccination schedule guide.</p>

          <h2 id="biosecurity">Biosecurity</h2>
          <ul>
            <li><strong>Quarantine new and returning horses</strong> and monitor temperatures before mixing them with the herd.</li>
            <li><strong>Isolate coughing or feverish horses</strong> immediately and use dedicated equipment.</li>
            <li><strong>Limit shared airspace and equipment</strong> at events and in transport.</li>
            <li><strong>Maintain vaccination</strong> across the group so that population immunity blunts outbreaks.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Cullinane A, Newton JR. “Equine Influenza — A Global Perspective.” Veterinary Microbiology, 2013; 167(1–2):205–214.</li>
            <li>Daly JM, et al. “Equine Influenza: A Review.” Equine Veterinary Journal and related reviews.</li>
            <li>American Association of Equine Practitioners. “Equine Influenza Vaccination Guidelines” (risk-based vaccine). aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
