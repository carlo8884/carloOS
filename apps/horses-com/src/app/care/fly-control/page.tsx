import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Fly Control for Horses — Methods, Repellents, and Management",
  description:
    "Reference guide to equine fly control: why flies matter, physical barriers, repellents, environmental management, and the diseases flies carry.",
  path: '/care/fly-control',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Fly Control for Horses — Methods, Repellents, and Management",
  description:
    "Reference guide to equine fly control: why flies matter, physical barriers, repellents, environmental management, and the diseases flies carry.",
  url: 'https://horses.com/care/fly-control',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the most effective way to control flies around horses?",
    answer:
      "Managing the environment -- removing manure frequently, eliminating standing water and rotting organic matter, and storing the muck heap away from horses -- is the most effective single measure, because it reduces the flies at the source. Repellents and physical barriers like masks and sheets then handle the flies that remain.",
    answerText:
      "Managing the environment -- frequent manure removal, no standing water, muck stored away -- is most effective since it cuts flies at the source. Repellents and barriers handle the rest.",
  },
  {
    question: "Do fly masks bother horses?",
    answer:
      "Most horses adjust quickly to well-fitted fly masks, which protect the eyes and face from irritating face flies and reduce conjunctivitis. The mask must fit so it does not rub or sit against the eyes, and it should be removed and checked daily. Properly used, the protection far outweighs the brief adjustment.",
    answerText:
      "Most horses adjust quickly to well-fitted masks, which protect the eyes from face flies. Ensure good fit, no rubbing, and daily checks; the protection outweighs the adjustment.",
  },
  {
    question: "How do flies cause health problems in horses?",
    answer:
      "Flies bite and irritate, spread eye infections, deposit larvae that cause summer sores and stomach bots, and -- in the case of midges -- trigger the sweet-itch allergy. They also cause stamping, stress, and weight loss. This is why fly control overlaps with parasite control and skin health in a horse's management plan.",
    answerText:
      "Flies bite, spread eye infections, deposit larvae causing summer sores and bots, and trigger sweet itch in midges' case. They also cause stress and weight loss.",
  },
]

export default function FlyControlPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Fly Control for Horses",
          subtitle:
            "Flies are more than a summer nuisance: they bite and irritate, spread disease, lay eggs that become internal parasites, and trigger allergic conditions like sweet itch. No single product solves the problem, so effective fly control layers physical barriers, repellents, and -- most importantly -- managing the muck and standing water where flies breed. This is reference material to inform your fly-season plan.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Fly Control", href: '/care/fly-control' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Flies Matter", href: "#why" },
            { label: "Physical Barriers", href: "#barriers" },
            { label: "Repellents", href: "#repellents" },
            { label: "Environmental Management", href: "#environment" },
            { label: "Fly-Borne Problems", href: "#disease" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Sweet Itch", href: "/health/sweet-itch" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Deworming Program", href: "/care/deworming-program" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-fly-control"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Flies Matter</h2>
          <p>Different flies cause different problems. Stable and horn flies inflict painful bites; face flies cluster at the eyes and spread conjunctivitis; bot flies lay eggs on the legs that the horse ingests, becoming stomach bots; and biting midges trigger sweet itch in allergic horses. Beyond disease, constant fly worry causes stamping (hard on hooves and shoes), stress, and weight loss, so control is a genuine welfare and health issue, not just comfort.</p>

          <h2 id="barriers">Physical Barriers</h2>
          <ul>
            <li><strong>Fly masks</strong> protect the eyes and face from face flies and reduce eye irritation.</li>
            <li><strong>Fly sheets and boots</strong> cover the body and legs to block biting flies while staying breathable.</li>
            <li><strong>Fine-mesh sweet-itch rugs</strong> physically exclude midges for allergic horses.</li>
            <li><strong>Stable screens and fans</strong> keep flies out and disrupt their weak flight indoors.</li>
          </ul>

          <h2 id="repellents">Repellents</h2>
          <p>Topical fly sprays and spot-ons rated for horses repel and deter flies for a period and are reapplied as directed by the product. Effectiveness varies with formulation, sweat, and rain, so they are a layer rather than a complete answer. Always follow label directions, patch-test sensitive horses, and avoid the eyes; use a cloth to apply product around the face rather than spraying it.</p>

          <h2 id="environment">Environmental Management</h2>
          <ul>
            <li><strong>Remove manure frequently</strong> from stalls and high-traffic areas, since manure is the prime fly-breeding site.</li>
            <li><strong>Eliminate standing water</strong> and wet, rotting organic matter where many flies and midges breed.</li>
            <li><strong>Compost or store manure away from horses</strong> and turn or cover the heap to disrupt breeding.</li>
            <li><strong>Consider fly predators and traps</strong> as part of an integrated program, placed away from the horses.</li>
            <li><strong>Site and time turnout</strong> to avoid the worst fly hours and the dampest, most sheltered fly-friendly corners.</li>
          </ul>

          <h2 id="disease">Fly-Borne Problems</h2>
          <p>Flies are vectors and irritants behind several conditions: bot larvae from bot-fly eggs (controlled through the deworming program), summer sores from stomach-worm larvae deposited by flies in wounds, eye infections spread by face flies, and the midge-driven allergy of sweet itch. Good fly control therefore overlaps with parasite control and skin health, which is why it belongs in the overall management plan rather than being treated in isolation.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Nielsen MK, et al. AAEP Parasite Control Guidelines (bots and fly-borne parasites). aaep.org.</li>
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011 (insect-related skin disease).</li>
            <li>Rural and agricultural extension services. Integrated fly-management resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
