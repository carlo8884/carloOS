import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Ration Balancers for Horses — Filling Nutritional Gaps Without Calories",
  description:
    "Reference guide to equine ration balancers: what they are, why forage-only diets need them, who benefits most, and how they differ from regular feeds.",
  path: '/nutrition/ration-balancers',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Ration Balancers for Horses — Filling Nutritional Gaps Without Calories",
  description:
    "Reference guide to equine ration balancers: what they are, why forage-only diets need them, who benefits most, and how they differ from regular feeds.",
  url: 'https://horses.com/nutrition/ration-balancers',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What does a ration balancer do?",
    answer:
      "A ration balancer supplies protein, vitamins, and minerals in a small, low-calorie daily serving, balancing a forage-based diet nutritionally without adding meaningful calories, sugar, or starch. It fills the hidden gaps in hay and pasture -- minerals, quality protein, and some vitamins -- that can otherwise affect hooves, coat, immunity, and topline.",
    answerText:
      "It supplies protein, vitamins, and minerals in a small low-calorie serving, balancing a forage diet without adding calories, sugar, or starch -- filling the gaps in hay and pasture.",
  },
  {
    question: "Who should be fed a ration balancer?",
    answer:
      "Easy keepers, forage-only horses, metabolic and laminitis-prone horses, and any horse fed less than the recommended amount of a regular feed benefit most. These horses need balanced nutrition but not extra calories, which is exactly what a balancer provides -- full fortification in a tiny, low-calorie serving.",
    answerText:
      "Easy keepers, forage-only horses, metabolic horses, and those fed below a regular feed's rate -- all need balanced nutrition without extra calories, which a balancer provides.",
  },
  {
    question: "How is a balancer different from a normal horse feed?",
    answer:
      "A regular feed delivers its full vitamins and minerals only at its larger recommended feeding rate, which also adds significant calories; feed less and you shortchange the horse on nutrients. A balancer provides the same fortification in a tiny, low-calorie serving, so you can keep calories low and the diet complete at the same time.",
    answerText:
      "A regular feed gives full nutrients only at its larger, calorie-rich feeding rate. A balancer delivers the same fortification in a tiny low-calorie serving, keeping calories low and the diet complete.",
  },
]

export default function RationBalancersPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Ration Balancers for Horses",
          subtitle:
            "Ration balancers are one of the most useful and underused tools in equine feeding. They solve a common hidden problem: a horse on forage alone, or on less than the full recommended amount of a fortified feed, often falls short on protein, vitamins, and minerals. A balancer supplies exactly those nutrients in a tiny, low-calorie serving -- perfect for easy keepers and forage-fed horses. This is reference material to inform feeding choices.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Ration Balancers", href: '/nutrition/ration-balancers' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What a Ration Balancer Is", href: "#what" },
            { label: "The Hidden Gap in Forage Diets", href: "#gap" },
            { label: "Who Benefits Most", href: "#who" },
            { label: "Balancer vs Regular Feed", href: "#vs" },
            { label: "Using a Balancer", href: "#using" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Feeding the Easy Keeper", href: "/nutrition/feeding-the-easy-keeper" },
              { label: "Grain and Concentrates", href: "/nutrition/grain-and-concentrates" },
              { label: "Equine Metabolic Syndrome", href: "/health/equine-metabolic-syndrome" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-balancer"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What a Ration Balancer Is</h2>
          <p>A ration balancer is a concentrated, low-calorie feed designed to supply protein, vitamins, and minerals in a small daily serving -- typically a few hundred grams rather than the kilograms of a regular feed. It is essentially a fortified top-up that balances a forage diet nutritionally without adding meaningful calories, sugar, or starch. Think of it as a multivitamin-and-protein source rather than an energy feed.</p>

          <h2 id="gap">The Hidden Gap in Forage Diets</h2>
          <p>Forage is the right foundation, but hay and pasture are commonly low or imbalanced in certain minerals (such as copper, zinc, and selenium in many regions) and can be short on quality protein and some vitamins, with losses worsening as hay is stored or soaked. A horse thriving on forage may still be quietly deficient in nutrients that affect hoof quality, coat, immune function, and topline. The deficiency is invisible until it shows in poor hooves, a dull coat, or lost muscle.</p>

          <h2 id="who">Who Benefits Most</h2>
          <ul>
            <li><strong>Easy keepers</strong> that need balanced nutrition but no extra calories -- the classic balancer candidate.</li>
            <li><strong>Forage-only horses</strong> getting no fortified feed at all.</li>
            <li><strong>Horses fed below the recommended rate</strong> of a regular feed, who therefore miss its full vitamins and minerals.</li>
            <li><strong>Metabolic and laminitis-prone horses</strong> needing nutrients without sugar and starch.</li>
            <li><strong>Good doers in light work</strong> that maintain weight on forage but still need micronutrients.</li>
          </ul>

          <h2 id="vs">Balancer vs Regular Feed</h2>
          <p>The crucial difference is calories and serving size. A regular fortified feed delivers its full vitamins and minerals only when you feed the larger recommended amount, which also delivers significant calories -- a problem for an easy keeper. Feed far less than the recommended rate, and you starve the horse of the very nutrients the feed was meant to provide. A balancer breaks that trade-off: full fortification in a tiny, low-calorie serving, so you can keep calories low and the diet complete.</p>

          <h2 id="using">Using a Balancer</h2>
          <p>Feed a ration balancer at the manufacturer&apos;s recommended daily amount, alongside forage, to top up the diet. Because the serving is small, it is often mixed with a handful of chaff or soaked fiber to make it palatable and slow eating. Choose a balancer appropriate to the horse and forage (some are formulated for grass forage, others for legume), and for metabolic horses a low-sugar, low-starch balancer. As always, build the specifics with your veterinarian or an equine nutritionist.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>Rural and agricultural extension services. Equine mineral and forage-balancing resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
