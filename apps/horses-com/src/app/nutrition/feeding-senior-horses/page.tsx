import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding Senior Horses — Diet for the Aging Horse",
  description:
    "Reference guide to feeding senior horses: dental decline, senior feeds and hay replacers, protein and condition, managing PPID, and keeping seniors thriving.",
  path: '/nutrition/feeding-senior-horses',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding Senior Horses — Diet for the Aging Horse",
  description:
    "Reference guide to feeding senior horses: dental decline, senior feeds and hay replacers, protein and condition, managing PPID, and keeping seniors thriving.",
  url: 'https://horses.com/nutrition/feeding-senior-horses',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "When does a horse need senior feed?",
    answer:
      "There is no fixed age -- a horse needs a senior diet when its needs change, typically signaled by worn teeth and quidding, difficulty maintaining weight, or a diagnosis such as PPID. Some horses manage normal forage well into their twenties, while others need adapted feeding sooner. Watch the individual horse rather than the calendar.",
    answerText:
      "Not at a fixed age, but when its needs change -- worn teeth and quidding, weight loss, or PPID. Some manage normal forage into their twenties; others need senior feeding sooner.",
  },
  {
    question: "What do I feed a senior horse that can't chew hay?",
    answer:
      "Provide forage in a chewable form: soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds designed to replace forage, usually fed soaked into a mash and split into several small meals a day. The aim is to keep digestible fiber high without requiring the horse to chew long-stem hay.",
    answerText:
      "Forage in chewable form -- soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds, fed as a mash in several small meals. Keep digestible fiber high without long-stem hay.",
  },
  {
    question: "Should an old horse always be fed more?",
    answer:
      "No -- it depends on the individual. Many seniors become hard keepers needing more support, but others, especially those with PPID and insulin dysregulation or carrying regional fat, are overweight and need a restricted, low-sugar diet. A thin senior is fed up; an overweight or metabolic one is managed carefully and tested for PPID.",
    answerText:
      "No -- it depends. Some seniors need more support, but PPID or overweight seniors need restriction and a low-sugar diet. Tailor to the individual and test for PPID.",
  },
]

export default function SeniorFeedingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Beet Pulp for Horses', href: '/nutrition/beet-pulp' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
          { title: "Equine Cushing's (PPID)", href: '/health/cushings-ppid' },
        ]}
        hero={{
          title: "Feeding Senior Horses",
          subtitle:
            "Horses are living longer than ever, and many stay sound and useful well into their twenties and beyond -- but the aging horse's nutritional needs change, often quietly. Worn teeth, less efficient digestion, and conditions like PPID mean the diet that kept a horse well at ten may leave it thin and struggling at twenty-five. Feeding the senior horse well is about adapting before problems become obvious. This is reference material to inform a plan with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding Senior Horses", href: '/nutrition/feeding-senior-horses' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Aging Changes Needs", href: "#aging" },
            { label: "Dental Decline", href: "#teeth" },
            { label: "Senior Feeds and Hay Replacers", href: "#feeds" },
            { label: "Protein and Condition", href: "#protein" },
            { label: "PPID and Metabolic Issues", href: "#ppid" },
            { label: "Practical Feeding", href: "#practical" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cushing's / PPID", href: "/health/cushings-ppid" },
              { label: "Senior Horse Care", href: "/ownership/senior-horse-care" },
              { label: "Equine Dental Care", href: "/guides/equine-dental-care" },
              { label: "Feeding the Hard Keeper", href: "/nutrition/feeding-the-hard-keeper" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-senior"
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

          <h2 id="aging">How Aging Changes Needs</h2>
          <p>As horses age, several things shift together: teeth wear down and chewing becomes less effective, digestion of fiber and protein becomes somewhat less efficient, the ability to maintain condition declines, and chronic conditions such as PPID become common. Some seniors become hard keepers needing more support, while others -- especially those with PPID and regional fat -- stay overweight and need restriction. The diet must be tailored to the individual aging horse, not a single senior template.</p>

          <h2 id="teeth">Dental Decline</h2>
          <p>Dental wear is the single biggest feeding change in old age. Worn, loose, or missing teeth make a horse unable to chew long-stem hay effectively, leading to quidding (dropping balls of half-chewed hay), weight loss, and choke risk from poorly chewed feed. Regular dental care helps, but eventually many seniors cannot manage hay and need forage in a form they can process. Watching for quidding and weight loss is the cue to adapt the forage.</p>

          <h2 id="feeds">Senior Feeds and Hay Replacers</h2>
          <p>Senior horses that cannot chew hay well can be maintained on soaked, easily chewed forage and complete senior feeds. Soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds (designed to be the whole ration, including forage replacement) provide digestible fiber the horse can manage. These are usually fed soaked into a mash for horses with poor teeth, in several small meals a day. The goal is to keep fiber intake high in a chewable form.</p>

          <h2 id="protein">Protein and Condition</h2>
          <p>Older horses often need good-quality, digestible protein to maintain muscle and topline, which can decline with age, and the senior feeds designed for them reflect this. Loss of topline and a pot-bellied, sway-backed look can reflect age, reduced protein efficiency, or PPID. Maintaining condition in a thin senior means combining digestible fiber calories, adequate quality protein, and treatment of any underlying disease rather than simply adding starch.</p>

          <h2 id="ppid">PPID and Metabolic Issues</h2>
          <p>PPID is common in older horses and changes the feeding picture: many PPID horses have insulin dysregulation and need a low-sugar, low-starch diet despite being old, which rules out high-sugar senior feeds and lush grazing. A thin senior is fed up; an overweight or insulin-dysregulated senior is managed carefully and tested for PPID. This is why senior feeding must be individualized and coordinated with veterinary diagnosis. See the PPID guide.</p>

          <h2 id="practical">Practical Feeding</h2>
          <ul>
            <li><strong>Feed several small meals</strong> a day, soaked for horses with poor teeth.</li>
            <li><strong>Feed separately</strong> so a slow-eating senior is not bullied off its food by younger herdmates.</li>
            <li><strong>Keep dental care current</strong> and watch for quidding as a sign to change the forage.</li>
            <li><strong>Provide free-choice water and salt</strong> and ensure the senior is drinking, as dehydration risk rises with age.</li>
            <li><strong>Monitor condition closely</strong> with body condition scoring, since a thick or PPID coat hides weight change.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Ralston SL. “Feeding the Geriatric Horse.” Veterinary Clinics of North America: Equine Practice and related reviews.</li>
            <li>Equine Endocrinology Group. PPID recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
