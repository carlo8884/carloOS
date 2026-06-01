import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Thrush in Horses — Causes, Treatment, Prevention",
  description:
    "Reference guide to equine thrush: bacterial infection of the frog, causes, the telltale black discharge and odor, treatment, and prevention through hoof hygiene.",
  path: '/health/thrush',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Thrush in Horses — Causes, Treatment, Prevention",
  description:
    "Equine thrush: bacterial degeneration of the frog and its grooves, causes, signs, treatment, and prevention through hoof hygiene and dry footing.",
  url: 'https://horses.com/health/thrush',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Thrush",
  description:
    "Equine thrush: bacterial degeneration of the frog and its grooves, causes, signs, treatment, and prevention through hoof hygiene and dry footing.",
  url: 'https://horses.com/health/thrush',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "What does thrush smell like?",
    answer:
      "Thrush has a distinctive strong, foul, rotten odor that is usually noticed the moment the foot is picked out. The smell, combined with a black tarry discharge in the frog grooves, is the classic giveaway. A sudden bad smell from a previously clean foot is a reliable early warning.",
    answerText:
      "Thrush has a strong, foul, rotten smell noticed when the foot is picked out, usually with black tarry discharge in the frog grooves.",
  },
  {
    question: "Will thrush cause lameness?",
    answer:
      "Mild thrush confined to the surface horn rarely causes lameness. If the infection erodes into the sensitive tissue beneath the frog, the horse can become sore and lame, which signals a more advanced case that warrants veterinary attention rather than topical treatment alone.",
    answerText:
      "Mild surface thrush rarely causes lameness, but if it reaches sensitive tissue the horse becomes sore. Lameness signals an advanced case needing veterinary care.",
  },
  {
    question: "How do I prevent thrush?",
    answer:
      "Pick out the feet daily and after riding, keep stalls and turnout clean and dry, bed deeply, and maintain a regular farrier schedule so the frog grooves stay open to air. Moving a horse from wet, dirty footing to clean dry ground is the single most effective prevention step.",
    answerText:
      "Pick feet daily, keep footing clean and dry, bed deeply, and maintain regular farriery. Dry, clean footing is the single most effective prevention.",
  },
]

export default function ThrushPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Thrush in Horses",
          subtitle:
            "Thrush is a common, foul-smelling bacterial infection of the frog and its grooves, most often a consequence of wet, dirty footing and infrequent hoof cleaning. Caught early it is a minor, easily treated nuisance; neglected, it can erode into sensitive tissue and cause lameness. It is one of the most preventable hoof problems and a good barometer of overall hoof hygiene. This is reference material, not a substitute for veterinary or farrier care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Thrush", href: '/health/thrush' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Thrush", href: "#what" },
            { label: "Causes", href: "#causes" },
            { label: "Recognizing It", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
              { label: "Hoof Abscess", href: "/health/abscess" },
              { label: "Mud Fever", href: "/health/mud-fever" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-thrush"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Thrush</h2>
          <p>Thrush is a degenerative infection of the frog -- the V-shaped, rubbery cushion on the underside of the hoof -- and especially of the deep grooves (sulci) on either side of it and in its center. Anaerobic bacteria, classically Fusobacterium necrophorum, colonize the grooves and break down the horn, producing a characteristic black, moist, foul-smelling discharge. It usually starts in the central or collateral sulci where debris packs in and air cannot reach.</p>

          <h2 id="causes">Causes</h2>
          <p>Thrush thrives in moisture and filth. The biggest contributors are wet, muddy, or urine-soaked footing; dirty stalls bedded too infrequently; and hooves that are not picked out regularly so that packed manure and mud seal the grooves from air. Conformation plays a role too -- horses with deep, narrow frog grooves or contracted heels trap debris more easily and are more prone to recurrent thrush.</p>

          <h2 id="signs">Recognizing It</h2>
          <ul>
            <li>A strong, foul, rotten odor when the foot is picked out.</li>
            <li>Black, moist, tarry discharge in the frog grooves.</li>
            <li>Soft, ragged, or crumbling frog tissue.</li>
            <li>Sensitivity when the grooves are cleaned or probed in advanced cases.</li>
            <li>Lameness only if the infection has reached sensitive tissue -- a sign to involve a veterinarian.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>Treatment starts with mechanical cleaning: pick out the foot thoroughly, then have the frog trimmed of loose, infected horn by a farrier so air can reach the grooves. The grooves are then treated with a topical antiseptic thrush product as directed; many commercial preparations and dilute antiseptic solutions are used. Move the horse to clean, dry footing -- this single change does more than any topical. Persistent or deep thrush that has reached sensitive tissue, or that causes lameness, warrants veterinary attention.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Pick out the feet daily</strong> and after riding, clearing the grooves of packed debris.</li>
            <li><strong>Keep footing dry and clean.</strong> Muck stalls frequently, bed deeply, and provide a dry standing area in turnout.</li>
            <li><strong>Maintain regular farriery</strong> so the frog and heels are balanced and the grooves stay open to air.</li>
            <li><strong>Address contracted heels</strong> and deep sulci with your farrier, since they predispose to recurrence.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>O&apos;Grady SE. “Guidelines for Trimming the Equine Foot.” AAEP Proceedings, 2009.</li>
            <li>American Association of Equine Practitioners. “Thrush and Hoof Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
