import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Turnout vs Stabling — Balancing Movement, Forage, and Management",
  description:
    "Reference guide to turnout versus stabling for horses: the welfare case for movement and forage, when stabling is justified, and finding a balanced routine.",
  path: '/care/turnout-vs-stabling',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Turnout vs Stabling — Balancing Movement, Forage, and Management",
  description:
    "Reference guide to turnout versus stabling for horses: the welfare case for movement and forage, when stabling is justified, and finding a balanced routine.",
  url: 'https://horses.com/care/turnout-vs-stabling',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Is turnout or stabling better for a horse?",
    answer:
      "For most horses, more turnout is healthier. Continuous movement, trickle-feeding on forage, and social contact match what the horse evolved for and reduce colic, ulcers, respiratory disease, and stress behaviors. Stabling has legitimate uses, but it should serve a real need and have its downsides actively offset rather than being the default.",
    answerText:
      "For most horses, more turnout is healthier -- it supports the gut, joints, airways, and mind. Stabling has real uses but should meet a genuine need and have its downsides offset, not be the default.",
  },
  {
    question: "What problems does too much stable confinement cause?",
    answer:
      "Excessive confinement is associated with higher colic risk, gastric ulcers, respiratory disease from stable dust, stiffness and stocking up from standing, and stress behaviors such as weaving, box-walking, and crib-biting. These downsides are why turnout is favored and why necessary stabling should be softened with forage, company, and ventilation.",
    answerText:
      "It raises colic risk and ulcers, aggravates airways, causes stiffness, and triggers stress behaviors like weaving and crib-biting. Hence turnout is favored and necessary stabling should be softened.",
  },
  {
    question: "How can I reduce the downsides when a horse must be stabled?",
    answer:
      "Provide near-continuous forage with slow feeders, ensure the horse can see and ideally touch other horses, use good ventilation and low-dust bedding, and build in as much daily movement and turnout as possible. These measures offset the gut, respiratory, and behavioral risks that come with confinement.",
    answerText:
      "Provide near-continuous forage via slow feeders, companionship and a view of other horses, good ventilation and low-dust bedding, and as much daily movement as possible.",
  },
]

export default function TurnoutStablingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Turnout vs Stabling",
          subtitle:
            "How much time a horse spends turned out versus stabled is one of the most consequential management choices an owner makes. The horse evolved to move and graze almost constantly in a herd, and the weight of evidence favors maximizing turnout for physical and mental health -- yet there are real reasons a horse sometimes needs to be stabled. The goal is a routine that respects the horse's nature while meeting practical needs. This is reference material to inform your routine.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Turnout vs Stabling", href: '/care/turnout-vs-stabling' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Horse Is Built For", href: "#built" },
            { label: "Benefits of Turnout", href: "#turnout" },
            { label: "When Stabling Is Justified", href: "#stabling" },
            { label: "Risks of Too Much Confinement", href: "#risks" },
            { label: "Finding the Balance", href: "#balance" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
              { label: "Heaves (Equine Asthma)", href: "/health/heaves" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-turnout"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="built">What the Horse Is Built For</h2>
          <p>Free-living horses spend most of the day and night moving slowly while grazing, covering many miles, in the company of other horses. Their digestive system, feet, joints, and minds are all adapted to near-constant movement and trickle-feeding. Any management system is, in effect, a compromise against this baseline, and the more a routine departs from it, the more the owner must actively compensate.</p>

          <h2 id="turnout">Benefits of Turnout</h2>
          <ul>
            <li><strong>Continuous movement</strong> supports gut motility (reducing colic), circulation, joint health, and hoof function.</li>
            <li><strong>Trickle feeding on forage</strong> matches the digestive system and reduces gastric ulcers.</li>
            <li><strong>Social contact</strong> with other horses meets a fundamental behavioral need.</li>
            <li><strong>Mental wellbeing</strong> -- space, grazing, and company reduce the stress behaviors of confinement.</li>
            <li><strong>Respiratory health</strong> from fresh air rather than the dust of a stable, important for asthma-prone horses.</li>
          </ul>

          <h2 id="stabling">When Stabling Is Justified</h2>
          <p>Stabling has legitimate uses: box rest prescribed for injury or after surgery, protection from severe weather where shelter is otherwise lacking, restricting grazing for laminitis-prone horses, managing the summer pasture-associated form of asthma, keeping competition horses clean and to a routine, and safety where turnout is genuinely unsafe. The key is that stabling should serve a real need, with its downsides actively offset, rather than being the unexamined default.</p>

          <h2 id="risks">Risks of Too Much Confinement</h2>
          <ul>
            <li><strong>Colic risk rises</strong> with reduced movement and long gaps without forage.</li>
            <li><strong>Gastric ulcers</strong> are strongly associated with confinement, low forage, and stress.</li>
            <li><strong>Respiratory disease</strong> -- stable dust and ammonia aggravate equine asthma.</li>
            <li><strong>Stereotypies and stress behaviors</strong> such as weaving, box-walking, and crib-biting develop in under-stimulated, isolated horses.</li>
            <li><strong>Stocking up and stiffness</strong> from standing still, and lost fitness and hoof function.</li>
          </ul>

          <h2 id="balance">Finding the Balance</h2>
          <p>For most horses, maximizing turnout and minimizing unnecessary stabling is the healthiest default, with stabling used deliberately for genuine needs. When a horse must be stabled, the downsides are softened by providing near-continuous forage (slow feeders), companionship and a view of other horses, good ventilation and low-dust bedding, and as much daily movement as possible. The right balance is individual -- shaped by the horse, the climate, the facilities, and the horse&apos;s job -- but the bias of the evidence is toward more turnout, not less.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Hartmann E, et al. “Reviewing the Welfare Implications of Keeping Horses Singly versus in Groups and Turnout.” Applied Animal Behaviour Science, various.</li>
            <li>Cohen ND, et al. Case-control studies linking confinement and management to colic risk. JAVMA.</li>
            <li>American Association of Equine Practitioners. “Turnout and Stable Management” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
