import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Grain and Concentrates for Horses — When and How to Feed",
  description:
    "Reference guide to feeding grain and concentrates to horses: what concentrates are, when needed, the dangers of large starchy meals, and safe feeding rules.",
  path: '/nutrition/grain-and-concentrates',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Grain and Concentrates for Horses — When and How to Feed",
  description:
    "Reference guide to feeding grain and concentrates to horses: what concentrates are, when needed, the dangers of large starchy meals, and safe feeding rules.",
  url: 'https://horses.com/nutrition/grain-and-concentrates',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Do all horses need grain?",
    answer:
      "No. Many horses in light work or at rest meet their needs on forage plus a vitamin-mineral balancer and need no grain at all. Concentrates are justified mainly for performance horses, hard keepers, lactating mares, and growing youngstock that cannot meet their energy and nutrient needs from forage alone.",
    answerText:
      "No -- many horses do fine on forage plus a balancer. Grain is mainly for performance horses, hard keepers, broodmares, and youngstock that need more than forage provides.",
  },
  {
    question: "Why are large grain meals dangerous for horses?",
    answer:
      "The small intestine can only digest a limited amount of starch at once. A large grain meal sends undigested starch into the hindgut, where rapid fermentation drops the pH, kills fiber-digesting microbes, and releases toxins -- causing colic and laminitis. High starch is also linked to ulcers, tying-up, and excitable behavior, which is why grain meals are kept small.",
    answerText:
      "The small intestine can only digest limited starch; excess spills into the hindgut, ferments, and causes colic and laminitis. High starch also links to ulcers and tying-up, so meals are kept small.",
  },
  {
    question: "Should I feed grain by the scoop?",
    answer:
      "No -- feed concentrates by weight, not by scoop, because different feeds vary greatly in density (a scoop of pellets weighs much more than a scoop of oats). Weighing the feed lets you control starch intake per meal and follow the feed's directions accurately, which by-volume scooping cannot.",
    answerText:
      "No -- feed by weight, not scoop, since feeds vary greatly in density. Weighing lets you control starch per meal and follow feeding directions accurately.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function GrainConcentratesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Grain and Concentrates for Horses",
          subtitle:
            "Grain and commercial concentrates can be useful tools, but they are also behind a great deal of equine disease when fed carelessly. Many horses need little or no grain at all, and those that do should receive it within firm limits, because the equine gut handles large starchy meals poorly. This guide covers when concentrates are genuinely needed and the rules for feeding them safely. This is reference material to inform feeding decisions with professional input.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Grain and Concentrates", href: '/nutrition/grain-and-concentrates' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Concentrates Are", href: "#what" },
            { label: "When They Are Needed", href: "#when" },
            { label: "Why Big Grain Meals Are Risky", href: "#risk" },
            { label: "Safe Feeding Rules", href: "#rules" },
            { label: "Reading the Feed Tag", href: "#tag" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Ration Balancers", href: "/nutrition/ration-balancers" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Tying-Up", href: "/health/tying-up" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-grain"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Concentrates Are</h2>
          <p>Concentrates are energy-dense feeds fed in addition to forage -- traditional cereal grains such as oats, barley, and corn, and the formulated bagged feeds (textured sweet feeds, pellets, and cubes) that combine grains with added protein, vitamins, minerals, and often fat and fiber. They concentrate calories and nutrients into a small volume, which is their usefulness and, fed wrongly, their danger.</p>

          <h2 id="when">When They Are Needed</h2>
          <p>Many horses in light work or at rest meet their needs on forage plus a vitamin-mineral balancer and need no grain. Concentrates earn their place when forage alone cannot supply enough energy or nutrients: hard-working performance horses, hard keepers, lactating mares, and growing youngstock. The honest starting question is whether the horse actually needs the calories -- feeding grain to an idle, fat horse is common and harmful.</p>

          <h2 id="risk">Why Big Grain Meals Are Risky</h2>
          <p>The horse&apos;s small intestine can only digest so much starch at once. Overwhelm it with a large grain meal and undigested starch spills into the hindgut, where it ferments rapidly, drops the pH, kills fiber-digesting microbes, and releases toxins -- a cascade that causes colic and laminitis. High-starch diets are also linked to gastric ulcers, tying-up, and excitable behavior. This is why grain must be limited per meal and why fat and fiber are preferred when extra calories are needed.</p>

          <h2 id="rules">Safe Feeding Rules</h2>
          <ul>
            <li><strong>Forage first.</strong> Build the diet on forage and add concentrates only to fill a real gap.</li>
            <li><strong>Limit starch per meal.</strong> Keep individual grain meals small; split a daily concentrate ration into several feeds rather than one or two large ones.</li>
            <li><strong>Feed by weight, not scoops.</strong> A scoop of pellets and a scoop of oats weigh very differently; weigh the feed.</li>
            <li><strong>Change gradually</strong> over a week or more to protect the hindgut microbes.</li>
            <li><strong>Feed at consistent times</strong> and never feed grain to a hot, exhausted, or stressed horse.</li>
            <li><strong>Prefer fat and fiber</strong> over high starch when adding calories.</li>
          </ul>

          <h2 id="tag">Reading the Feed Tag</h2>
          <p>Commercial feeds carry a guaranteed analysis and feeding directions. Look at the protein, fat, and fiber percentages, and -- important for metabolic and laminitis-prone horses -- the non-structural carbohydrate (NSC, the sugar plus starch). Crucially, the bag&apos;s feeding rate is calibrated to deliver the formulated nutrients only if you feed the recommended amount; feeding far less than directed shortchanges the horse on vitamins and minerals, which is exactly where a ration balancer fits instead. See the ration balancers guide.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Potter GD, et al. “Digestion of Starch in the Small or Large Intestine of the Equine.” Journal of Animal Science and related work.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
