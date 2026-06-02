import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Performance Horse — Energy, Recovery, and Safe Fueling",
  description:
    "Reference guide to feeding performance horses: matching energy to workload, energy sources, protein and electrolytes, feeding around work, and diet pitfalls.",
  path: '/nutrition/feeding-the-performance-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Performance Horse — Energy, Recovery, and Safe Fueling",
  description:
    "Reference guide to feeding performance horses: matching energy to workload, energy sources, protein and electrolytes, feeding around work, and diet pitfalls.",
  url: 'https://horses.com/nutrition/feeding-the-performance-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the best energy source for a performance horse?",
    answer:
      "It depends on the work, but fiber should remain the base, with fat (oil, rice bran) providing dense, cool, slow-burning energy ideal for endurance and for adding calories without excitability. Starch from grain gives rapid energy for short intense efforts but carries gut and behavioral risks, so it is used judiciously rather than as the default fuel.",
    answerText:
      "Fiber as the base, fat for dense cool slow-release energy, and starch only judiciously for short intense work. Fat and fiber avoid the gut and behavior risks of high grain.",
  },
  {
    question: "Why are performance horses so prone to ulcers?",
    answer:
      "High-grain, lower-forage diets, intense exercise, stress, travel, and competition all promote gastric ulcers, which are very common in performance horses. Keeping forage central, offering forage before work to buffer acid, limiting starch, and treating ulcers when present are the main defenses against this performance-limiting problem.",
    answerText:
      "High grain, low forage, intense work, stress, and travel all promote ulcers, which are common in competition horses. Keeping forage central and limiting starch are the main defenses.",
  },
  {
    question: "Should I cut back feed on a performance horse's rest days?",
    answer:
      "Yes -- reduce concentrate energy on rest days. Feeding a high-energy ration to a horse that then stands idle on a day off is a classic trigger for tying-up. Keeping forage available while cutting back the grain on non-working days lowers that risk while maintaining gut health.",
    answerText:
      "Yes -- reduce concentrate energy on rest days. Full feed before an idle day off is a classic tying-up trigger. Keep forage available while cutting the grain.",
  },
]

export default function PerformanceFeedingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Feeding the Performance Horse",
          subtitle:
            "Performance horses have the highest and most demanding energy needs in the equine world, and feeding them well is a balance: enough fuel for the work and recovery, the right kind of energy for the discipline, and careful management to avoid the ulcers, tying-up, and excitability that careless high-grain feeding produces. The principle remains forage first, with energy added thoughtfully. This is reference material to inform a plan with a nutritionist or veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Performance Horse", href: '/nutrition/feeding-the-performance-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Match Energy to Work", href: "#energy" },
            { label: "Energy Sources", href: "#sources" },
            { label: "Protein and Electrolytes", href: "#protein" },
            { label: "Feeding Around Work", href: "#timing" },
            { label: "Avoiding Problems", href: "#problems" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Tying-Up", href: "/health/tying-up" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
              { label: "Grain and Concentrates", href: "/nutrition/grain-and-concentrates" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-performance"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="energy">Match Energy to Work</h2>
          <p>The starting point is honest workload assessment. The energy needs of a horse in light schooling are far below those of an upper-level eventer, endurance horse, or racehorse, and overfeeding energy to a horse not doing the work makes it fat and hot, while underfeeding a hard-working horse erodes condition and performance. Feed the work the horse is actually doing, adjusting as the training load rises and falls through the season.</p>

          <h2 id="sources">Energy Sources</h2>
          <p>Energy can come from fiber, fat, or starch and sugar, and the mix matters. Fiber (forage and super-fibers) provides slow-release energy and gut health and should remain the base. Fat (oil, rice bran) gives dense, cool, slow-burning energy ideal for endurance and for adding calories without fizz. Starch and sugar from grain provide rapid, readily available energy useful for short, intense efforts, but carry the gut and behavioral risks of high-grain feeding -- so they are used judiciously, not as the default fuel.</p>

          <h2 id="protein">Protein and Electrolytes</h2>
          <p>Working horses need adequate quality protein to build and repair muscle, though protein is a building block rather than a primary fuel and excess is wasteful. More pressing is electrolyte replacement: performance horses lose large volumes of salty sweat, and replacing sodium, chloride, and potassium maintains hydration, recovery, the drive to drink, and muscle function, while helping prevent tying-up. Baseline salt plus work-matched electrolytes is essential. See the salt and electrolytes guide.</p>

          <h2 id="timing">Feeding Around Work</h2>
          <ul>
            <li><strong>Do not work hard immediately after a large grain meal</strong> as it can affect blood flow and comfort; allow time after concentrate feeding.</li>
            <li><strong>Keep forage before work</strong> -- a small amount of forage in the stomach buffers acid and helps prevent ulcers during exercise.</li>
            <li><strong>Rehydrate and replace electrolytes</strong> promptly after hard work and sweating.</li>
            <li><strong>Reintroduce feed sensibly</strong> to a hot horse -- cool it down, let it drink, and offer forage before concentrates.</li>
            <li><strong>Adjust on rest days</strong> by reducing concentrate energy to lower tying-up risk on days off.</li>
          </ul>

          <h2 id="problems">Avoiding Problems</h2>
          <p>High-grain diets fed to performance horses are linked to gastric ulcers (very common in competition horses), tying-up, hindgut acidosis, colic, and excitable, hard-to-handle behavior. The defenses are to keep forage central, prefer fat and fiber for added calories, limit starch per meal, feed consistently, and treat ulcers when present. A calm, well-fueled horse on a fiber-and-fat-based diet usually performs and recovers better than one fizzed up on grain.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>Harris P, et al. Reviews on feeding management and gastric ulcers in performance horses.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
