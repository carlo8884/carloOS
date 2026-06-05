import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Choke in Horses — Esophageal Obstruction, Signs, Prevention",
  description:
    "Reference guide to equine choke: esophageal obstruction (not airway), clinical signs, why it is an emergency, treatment, and feeding-management prevention.",
  path: '/health/choke',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Choke in Horses — Esophageal Obstruction, Signs, Prevention",
  description:
    "Equine choke (esophageal obstruction): how it differs from human choking, signs, why it is an emergency, treatment, and prevention.",
  url: 'https://horses.com/health/choke',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Choke",
  description:
    "Equine choke (esophageal obstruction): how it differs from human choking, signs, why it is an emergency, treatment, and prevention.",
  url: 'https://horses.com/health/choke',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Can a choking horse still breathe?",
    answer:
      "Usually yes. In horses, choke is an esophageal obstruction, not an airway blockage, so the horse can typically still breathe. It remains an emergency because of the risk of aspirating feed and saliva into the lungs and of damage to the esophagus if the obstruction persists.",
    answerText:
      "Usually yes -- equine choke obstructs the esophagus, not the airway, so the horse can breathe. It is still an emergency due to aspiration and esophageal-damage risk.",
  },
  {
    question: "What should I do if I think my horse is choking?",
    answer:
      "Remove all feed and water, keep the horse calm with its head lowered to encourage drainage and reduce aspiration risk, and call your veterinarian. Do not try to force water or feed down the horse. Many chokes need veterinary sedation and lavage to clear safely.",
    answerText:
      "Remove feed and water, keep the horse calm with its head lowered, and call your vet. Do not force food or water. Many chokes need veterinary sedation and lavage.",
  },
  {
    question: "How can I stop my horse choking on beet pulp?",
    answer:
      "Beet pulp absorbs water and swells, so always soak it before feeding, particularly for horses that eat fast or have poor teeth. Soaking it fully, slowing the horse's eating, and keeping up dental care together make choke on beet pulp largely preventable.",
    answerText:
      "Always soak beet pulp fully before feeding, since it swells. Combine soaking with slowing fast eaters and good dental care to prevent choke.",
  },
]

export default function ChokePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Colic', href: '/health/colic' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
        ]}
        hero={{
          title: "Choke in Horses",
          subtitle:
            "Choke in horses is not what the word implies to a human: it is an obstruction of the esophagus, not the airway, so the horse can usually still breathe. It happens when feed -- often dry pellets, unsoaked beet pulp, or bolted hay -- lodges in the esophagus. It is distressing to witness and counts as a veterinary emergency because of the risk of aspiration and esophageal damage, but it is also highly preventable with sensible feeding management. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Choke", href: '/health/choke' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Choke Is", href: "#what" },
            { label: "Common Causes", href: "#causes" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Why It Is an Emergency", href: "#emergency" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">If Your Horse Is Choking</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Remove all feed and water, keep the horse calm with its head lowered, and call your veterinarian. Most chokes need professional resolution, and the longer an obstruction sits, the higher the risk of damage and aspiration.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Dental Care", href: "/guides/equine-dental-care" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Beet Pulp Explained", href: "/nutrition/beet-pulp" },
              { label: "Equine Colic", href: "/health/colic" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-choke"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="what">What Choke Is</h2>
          <p>In horses, choke means an obstruction of the esophagus -- the muscular tube carrying food from the throat to the stomach -- not of the windpipe. Because the airway is usually unaffected, a choking horse can typically still breathe, which distinguishes it from human choking. The obstruction prevents the horse from swallowing, so saliva and feed back up and may spill out of the nose and mouth.</p>

          <h2 id="causes">Common Causes</h2>
          <p>Choke happens when a horse swallows feed that is too dry, too large, or too quickly eaten to pass smoothly. Classic culprits are dry pelleted feed and unsoaked beet pulp that swell, coarse or stemmy hay bolted by a greedy eater, large pieces of apple or carrot, and inadequately chewed feed in horses with dental problems. Risk factors include poor dentition (especially in seniors), eating too fast, sedation that impairs swallowing, and prior choke episodes that leave a narrowed esophagus.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Feed and saliva discharging from both nostrils and the mouth -- the most recognizable sign.</li>
            <li>Repeated attempts to swallow, retching, coughing, and stretching or arching the neck.</li>
            <li>Distress, drooling, and standing with the head and neck extended.</li>
            <li>A visible or palpable lump along the left side of the neck where the obstruction sits, in some cases.</li>
            <li>Reluctance to eat or drink.</li>
          </ul>

          <h2 id="emergency">Why It Is an Emergency</h2>
          <p>Although the horse can usually breathe, choke is urgent for two reasons. First, feed and saliva backing up can be inhaled into the lungs (aspiration), leading to aspiration pneumonia. Second, a feed mass pressing against the esophageal wall can cause inflammation, ulceration, or even rupture if left in place, and repeated choke can scar and narrow the esophagus. The longer the obstruction persists, the higher these risks.</p>

          <h2 id="treatment">Treatment</h2>
          <p>Some mild chokes clear on their own within minutes once the horse stops eating and relaxes. Persistent choke requires a veterinarian, who typically sedates the horse (which lowers the head and relaxes the esophagus), passes a nasogastric tube, and gently lavages the obstruction clear with water. Sedation and muscle relaxants are used as the veterinarian judges. After a choke, soft or soaked feed and a watch for aspiration pneumonia are standard. Do not attempt to force feed or water during an active choke.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Soak feeds that swell or pack</strong> such as beet pulp and dry pellets, especially for fast or older eaters.</li>
            <li><strong>Slow down greedy eaters</strong> with large smooth stones in the feed tub, slow feeders, or spreading feed out.</li>
            <li><strong>Maintain dental care</strong> so the horse can chew properly; poor dentition is a leading risk factor.</li>
            <li><strong>Cut treats small</strong> and feed at ground level to encourage natural chewing and swallowing.</li>
            <li><strong>Wait after sedation</strong> before feeding, since sedation impairs swallowing.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Feige K, Schwarzwald C, Furst A, Kaser-Hotz B. “Esophageal Obstruction in Horses.” Equine Veterinary Education and related reviews.</li>
            <li>Reed SM, Bayly WM, Sellon DC. Equine Internal Medicine, 4th ed., Elsevier, 2018 (esophageal disease).</li>
            <li>American Association of Equine Practitioners. “Choke in Horses” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
