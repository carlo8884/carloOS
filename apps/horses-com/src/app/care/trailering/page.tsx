import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Trailering and Transporting Horses — Safety, Stress, and Long Hauls",
  description:
    "Reference guide to transporting horses: trailer safety, loading, reducing travel stress, hydration, the dangers of tying the head high, and long-haul care.",
  path: '/care/trailering',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Trailering and Transporting Horses — Safety, Stress, and Long Hauls",
  description:
    "Reference guide to transporting horses: trailer safety, loading, reducing travel stress, hydration, the dangers of tying the head high, and long-haul care.",
  url: 'https://horses.com/care/trailering',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Why shouldn't I tie my horse's head high when traveling?",
    answer:
      "Holding the head high for long periods prevents the horse from lowering its nose to clear mucus and debris from the airway, which pools in the lungs and promotes shipping fever (travel-related respiratory disease). Tie loosely enough that the horse can periodically lower its head, while still preventing it from turning around.",
    answerText:
      "A high-tied head stops the horse clearing its airway, letting mucus pool and causing shipping fever. Tie loosely enough to lower the head periodically while preventing turning around.",
  },
  {
    question: "How do I make loading easier?",
    answer:
      "Train loading calmly and in advance, not in a panic before a trip. A bright, open, inviting trailer, patient handling, and rewarding each forward step build confidence, whereas force makes future loading worse. Most loading problems are fear of a dark enclosed space rather than stubbornness.",
    answerText:
      "Train loading calmly in advance with a bright, inviting trailer and patient, rewarding handling. Force backfires. Most loading problems are fear, not stubbornness.",
  },
  {
    question: "How often should I stop on a long horse journey?",
    answer:
      "Plan regular rest stops so the horse can lower its head to clear its airway, balance, and be offered water -- frequent stops reduce the risk of shipping fever and dehydration. On very long hauls, resting or unloading where it is safe to do so, and monitoring temperature, further protects the horse.",
    answerText:
      "Stop regularly so the horse can lower its head, rest, balance, and drink -- this reduces shipping-fever and dehydration risk. Monitor temperature on long hauls.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function TraileringPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Trailering and Transporting Horses",
          subtitle:
            "Transport is one of the more stressful and risk-laden things we ask of horses. They must balance in a moving box, often facing away from the direction they would choose, while we worry about loading, ventilation, hydration, and the well-documented risk of respiratory disease on long hauls. Good preparation and driving turn a fraught experience into a routine one. This is reference material to inform safe transport.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Trailering and Transport", href: '/care/trailering' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Trailer Safety", href: "#safety" },
            { label: "Loading", href: "#loading" },
            { label: "Reducing Travel Stress", href: "#stress" },
            { label: "The Head-Down Principle", href: "#head" },
            { label: "Long Hauls", href: "#long" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Influenza", href: "/health/equine-influenza" },
              { label: "Water Requirements", href: "/nutrition/water-requirements" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "First-Aid Kit", href: "/ownership/first-aid-kit" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-trailering"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="safety">Trailer Safety</h2>
          <ul>
            <li><strong>Maintain the trailer</strong> -- check the floor (rot is a deadly hazard), tires, brakes, hitch, lights, and ramp before every trip.</li>
            <li><strong>Match tow vehicle and hitch</strong> to the loaded weight, with safety chains and a breakaway brake.</li>
            <li><strong>Ensure ventilation</strong> without drafts; trailers can become hot, stuffy boxes that promote respiratory disease.</li>
            <li><strong>Use safe partitions and padding</strong> and remove protruding hazards inside.</li>
            <li><strong>Fit travel protection</strong> such as boots or wraps and a poll guard if the horse is accustomed to them.</li>
          </ul>

          <h2 id="loading">Loading</h2>
          <p>Loading problems are usually fear, not stubbornness -- a horse is being asked to walk into a dark, enclosed, moving cave. Train loading calmly and in advance rather than in a rush before a trip: a confident, well-handled horse that has practiced loading in a quiet setting loads far more reliably than one taught at the last minute. A bright, open, inviting trailer, patient handling, and rewarding forward steps work better than force, which makes the next loading worse.</p>

          <h2 id="stress">Reducing Travel Stress</h2>
          <p>Transport raises heart rate and stress hormones, and the muscular effort of balancing is real work. Drive smoothly -- gentle acceleration, braking, and cornering let the horse balance, while harsh driving throws it around and causes injuries and sour travelers. Keep companions where possible, since horses travel better with company, and avoid the hottest part of the day. Offer water at stops and keep journeys as short as the task allows.</p>

          <h2 id="head">The Head-Down Principle</h2>
          <p>Tying a horse with its head held high for long periods is a documented risk for travel-related respiratory disease, sometimes called shipping fever. With the head elevated, the horse cannot lower its nose to clear the airway of debris and mucus, which pools and lets bacteria multiply in the lungs. Tie long enough to let the horse lower its head periodically (while still preventing it from turning around or getting a leg over the rope), and give frequent breaks on long trips so the horse can drop its head.</p>

          <h2 id="long">Long Hauls</h2>
          <ul>
            <li><strong>Plan rest stops</strong> so the horse can lower its head, and unload for rest on very long journeys where safe.</li>
            <li><strong>Prioritize hydration</strong> -- offer water frequently; some horses refuse unfamiliar water, so acclimating them or flavoring water beforehand helps.</li>
            <li><strong>Watch for shipping fever</strong> -- monitor temperature and demeanor during and after travel and involve a veterinarian if the horse is feverish or dull.</li>
            <li><strong>Allow recovery time</strong> after a long haul before hard work, and let the horse rest, drink, and eat forage on arrival.</li>
            <li><strong>Mind biosecurity</strong> on shared transport and at events, since travel mixes horses and spreads respiratory disease.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Padalino B, et al. “Transportation and Horse Welfare: A Review of Stressors and Risk Factors.” Journal of Veterinary Behavior, 2018.</li>
            <li>Oikawa M, et al. Studies on transport-associated respiratory disease (shipping fever) and head position.</li>
            <li>American Association of Equine Practitioners. “Transporting Horses” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
