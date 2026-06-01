import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Water Requirements — How Much, and Why It Matters",
  description:
    "Reference guide to equine water needs: daily intake, what drives it up, the link between water and colic, water quality, and encouraging drinking.",
  path: '/nutrition/water-requirements',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Water Requirements — How Much, and Why It Matters",
  description:
    "Reference guide to equine water needs: daily intake, what drives it up, the link between water and colic, water quality, and encouraging drinking.",
  url: 'https://horses.com/nutrition/water-requirements',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How much water does a horse drink per day?",
    answer:
      "An average idle adult horse drinks roughly 20 to 40 liters (about 5 to 10 gallons) a day in temperate conditions, but intake rises sharply with heat, work, dry forage, and lactation, and falls when a horse gets moisture from lush grass. Always provide clean water free-choice rather than relying on a fixed amount.",
    answerText:
      "Roughly 20 to 40 liters (5 to 10 gallons) a day for an idle adult horse, far more with heat, work, dry hay, or lactation, and less on lush grass. Always provide free-choice water.",
  },
  {
    question: "Why does low water intake cause colic?",
    answer:
      "When a horse drinks too little, the gut contents dry out and can form an impaction that blocks the bowel, causing colic. This is most common in winter, when icy water suppresses drinking just as horses move to dry hay. Keeping water available, unfrozen, and palatable is a key, simple colic-prevention measure.",
    answerText:
      "Too little water dries the gut contents into an impaction that blocks the bowel. It is common in winter with icy water and dry hay. Unfrozen, palatable water helps prevent it.",
  },
  {
    question: "How do I get a horse to drink more in winter?",
    answer:
      "Offer slightly warmed water, which horses drink more readily in the cold; keep it unfrozen with tank heaters or frequent refilling; ensure salt is available to drive thirst; and keep the water clean and palatable. Monitoring how much is actually drunk lets you catch a dangerous drop early in freezing weather.",
    answerText:
      "Offer slightly warmed, unfrozen water, keep salt available to drive thirst, keep it clean, and monitor how much is drunk to catch a drop early in the cold.",
  },
]

export default function WaterRequirementsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Equine Water Requirements",
          subtitle:
            "Water is the most important and most overlooked nutrient in the horse's diet. A horse can survive far longer without feed than without water, and reduced water intake is a leading, preventable cause of impaction colic. Understanding how much horses need, what raises that need, and how to keep them drinking is basic, high-value management. This is reference material to inform daily care.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Water Requirements", href: '/nutrition/water-requirements' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Much Water", href: "#howmuch" },
            { label: "What Drives Intake Up", href: "#drivers" },
            { label: "Water and Colic", href: "#colic" },
            { label: "Water Quality", href: "#quality" },
            { label: "Encouraging Drinking", href: "#encourage" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-water"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="howmuch">How Much Water</h2>
          <p>An average idle adult horse drinks roughly 20 to 40 liters (about 5 to 10 gallons) of water a day in temperate conditions, though the figure varies widely with size, diet, weather, and work. Horses on dry hay drink more than those on lush, moisture-rich grass; a horse on pasture may drink little because it gets water from the grass. The practical rule is to provide clean water free-choice at all times and never assume a fixed amount is enough.</p>

          <h2 id="drivers">What Drives Intake Up</h2>
          <ul>
            <li><strong>Heat and humidity</strong> -- sweating in hot weather sharply increases water needs.</li>
            <li><strong>Exercise</strong> -- a hard-working horse can lose many liters of sweat in an hour and must replace them.</li>
            <li><strong>Dry forage</strong> -- a hay-based diet needs far more drinking water than moisture-rich pasture.</li>
            <li><strong>Lactation</strong> -- a nursing mare has greatly elevated water needs.</li>
            <li><strong>Large body size and high salt intake</strong> both raise daily requirement.</li>
          </ul>

          <h2 id="colic">Water and Colic</h2>
          <p>Dehydration is one of the most consistently identified risk factors for colic, especially impaction colic, where dry gut contents block the bowel. The classic scenario is winter, when icy water suppresses drinking just as horses switch to dry hay -- a recipe for impaction. Keeping water available, unfrozen, and palatable is therefore one of the simplest and most effective colic-prevention measures an owner has.</p>

          <h2 id="quality">Water Quality</h2>
          <p>Horses are fussy about water and will drink less if it is dirty, stagnant, too hot, too cold, or tainted. Troughs and buckets should be cleaned and refilled regularly, kept free of algae and droppings, and protected from freezing. Natural water sources should be checked for contamination and safe access. Poor water quality quietly reduces intake and raises colic risk just as surely as no water at all.</p>

          <h2 id="encourage">Encouraging Drinking</h2>
          <ul>
            <li><strong>Offer clean water free-choice</strong> at all times, in more than one source where possible.</li>
            <li><strong>Warm water in winter</strong> -- horses drink more slightly warmed water in the cold, reducing impaction risk.</li>
            <li><strong>Provide salt</strong> -- free-choice salt and added dietary salt drive the thirst that maintains intake.</li>
            <li><strong>Acclimate travelers</strong> to flavored water at home so they accept unfamiliar water away.</li>
            <li><strong>Monitor consumption</strong> so a sudden drop in drinking is noticed early as a warning sign.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Cohen ND, et al. Case-control studies on colic risk factors including water intake. JAVMA.</li>
            <li>American Association of Equine Practitioners. “Water and Hydration” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
