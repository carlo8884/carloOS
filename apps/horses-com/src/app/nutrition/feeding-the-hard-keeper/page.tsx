import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Hard Keeper — Putting and Keeping Weight On",
  description:
    "Reference guide to feeding hard-keeper horses: ruling out underlying causes, maximizing forage, adding calories safely with fat and fiber, and monitoring condition.",
  path: '/nutrition/feeding-the-hard-keeper',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Hard Keeper — Putting and Keeping Weight On",
  description:
    "Reference guide to feeding hard-keeper horses: ruling out underlying causes, maximizing forage, adding calories safely with fat and fiber, and monitoring condition.",
  url: 'https://horses.com/nutrition/feeding-the-hard-keeper',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Why won't my horse gain weight even though I feed a lot?",
    answer:
      "Persistent weight loss usually has an underlying cause -- dental problems, parasites, gastric ulcers, PPID or other endocrine disease, chronic pain, or being bullied off feed. Adding grain without finding the reason wastes money and can harm the horse, so a veterinary workup including a dental exam, fecal egg count, and ulcer and PPID consideration should come first.",
    answerText:
      "There is usually an underlying cause -- bad teeth, parasites, ulcers, PPID, pain, or being bullied off feed. A vet workup should come before piling on grain.",
  },
  {
    question: "What is the safest way to add calories for a hard keeper?",
    answer:
      "Add calories through forage, fat, and highly digestible fiber rather than large grain meals. Free-choice quality hay, vegetable oil or rice bran, soaked beet pulp, and high-fat low-starch feeds add energy without the hindgut upset, ulcer, and excitability risks of high grain. Any concentrate should be fed in small, frequent meals.",
    answerText:
      "Through forage, fat, and digestible fiber -- quality hay, oil or rice bran, soaked beet pulp, and high-fat low-starch feeds -- rather than large grain meals, which risk gut upset and ulcers.",
  },
  {
    question: "How long before I should see weight gain?",
    answer:
      "Weight gain in horses is gradual, so a new feeding regimen should be given several weeks before judging whether it works, with condition tracked by body condition scoring and a weigh tape rather than the eye. A horse that still fails to gain on a sound plan needs further veterinary investigation, not simply more grain.",
    answerText:
      "Several weeks -- gain is gradual, so track with body condition scoring and a weigh tape over time. Failure to gain on a sound plan means further veterinary investigation.",
  },
]

export default function HardKeeperPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Feeding the Hard Keeper",
          subtitle:
            "The hard keeper -- the horse that stays ribby no matter how much you feed -- is the mirror image of the easy keeper and just as frustrating. Before reaching for more grain, the priority is to rule out the medical causes that masquerade as a feeding problem, then to add calories the safe equine way: through forage, fat, and fiber rather than big starchy meals. This is reference material to inform a plan built with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Hard Keeper", href: '/nutrition/feeding-the-hard-keeper' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Rule Out the Cause First", href: "#cause" },
            { label: "Maximize Forage", href: "#forage" },
            { label: "Add Calories Safely", href: "#calories" },
            { label: "Fat and Super-Fibers", href: "#fat" },
            { label: "Feeding Management", href: "#management" },
            { label: "Monitoring", href: "#monitoring" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
              { label: "Equine Dental Care", href: "/guides/equine-dental-care" },
              { label: "Beet Pulp Explained", href: "/nutrition/beet-pulp" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-hard-keeper"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="cause">Rule Out the Cause First</h2>
          <p>A horse that will not hold weight despite good feeding usually has an underlying reason, and piling on grain without finding it wastes money and can do harm. Common culprits include dental problems that prevent proper chewing, a heavy parasite burden, gastric ulcers, PPID and other endocrine disease, chronic pain, and competition from herdmates at feeding time. A veterinary workup -- including a dental exam, fecal egg count, and consideration of ulcers and PPID -- should come before simply increasing the ration.</p>

          <h2 id="forage">Maximize Forage</h2>
          <p>Forage should still do the heavy lifting. Offer free-choice, good-quality, leafy hay -- the more a horse will eat, the more calories from the safest source. Higher-energy or part-legume hay (such as alfalfa mix) raises the calorie density of the forage itself. For horses that physically cannot eat enough long-stem hay, chopped forage, soaked hay cubes, and high-fiber complete feeds extend forage intake.</p>

          <h2 id="calories">Add Calories Safely</h2>
          <p>When forage alone cannot maintain condition, add calories in a way that respects the equine gut. The safest dense energy comes from fat and highly digestible fiber rather than large grain meals, which risk hindgut upset, ulcers, and excitability. If grain or a concentrate is used, feed it in small, frequent meals rather than a few large ones. The mantra is to add energy without adding starch.</p>

          <h2 id="fat">Fat and Super-Fibers</h2>
          <ul>
            <li><strong>Vegetable oil and stabilized rice bran</strong> -- concentrated, slow-burning calories that are cool (non-heating) and easy on the gut, introduced gradually.</li>
            <li><strong>Beet pulp</strong> -- a soaked super-fiber that adds digestible-fiber calories without much sugar or starch; see the beet pulp guide.</li>
            <li><strong>Soya hulls and other high-fiber feeds</strong> as additional fermentable-fiber energy.</li>
            <li><strong>High-fat, low-starch performance feeds</strong> formulated for weight gain without the risks of high grain.</li>
          </ul>

          <h2 id="management">Feeding Management</h2>
          <ul>
            <li><strong>Feed separately</strong> so a timid horse is not driven off its food by herdmates.</li>
            <li><strong>Split meals</strong> into several small feeds a day rather than one or two large ones.</li>
            <li><strong>Make changes gradually</strong> over a week or more to protect the hindgut microbes.</li>
            <li><strong>Treat ulcers and dental issues</strong> as found, since these often unlock weight gain on their own.</li>
            <li><strong>Provide a calm environment</strong> and shelter, as stress and cold burn calories a hard keeper cannot spare.</li>
          </ul>

          <h2 id="monitoring">Monitoring</h2>
          <p>Track condition objectively with body condition scoring and a weigh tape, recorded over time, rather than relying on the eye. Weight gain in horses is slow, so give a new regimen weeks before judging it, and keep coordinating with your veterinarian -- a hard keeper that still will not gain on a good plan needs further investigation rather than ever-larger grain meals.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>American Association of Equine Practitioners. “Body Condition and Weight Management” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
