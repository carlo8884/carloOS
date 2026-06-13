import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Easy Keeper — Weight Control Without Starvation",
  description:
    "Reference guide to feeding easy-keeper horses: managing the metabolically efficient horse, controlling calories and sugar, slow feeding, and avoiding laminitis.",
  path: '/nutrition/feeding-the-easy-keeper',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Easy Keeper — Weight Control Without Starvation",
  description:
    "Reference guide to feeding easy-keeper horses: managing the metabolically efficient horse, controlling calories and sugar, slow feeding, and avoiding laminitis.",
  url: 'https://horses.com/nutrition/feeding-the-easy-keeper',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-13T00:00:00Z',
})

const FAQS = [
  {
    question: "How do I help an easy keeper lose weight safely?",
    answer:
      "Reduce calories without long fasts: feed measured, low-sugar (often soaked) forage by weight, cut out grain, restrict grazing, and use slow feeders to spread a controlled ration over many hours. Add a low-calorie ration balancer for missing nutrients, increase exercise when the horse is sound, and aim for gradual loss tracked by body condition scoring under veterinary guidance.",
    answerText:
      "Feed measured low-sugar forage by weight in slow feeders, cut grain, restrict grazing, add a ration balancer, and exercise when sound. Aim for gradual loss tracked by body condition under vet guidance.",
  },
  {
    question: "Why not just feed an easy keeper much less hay?",
    answer:
      "Severely cutting hay imposes long fasts that cause gastric ulcers, boredom, and stress behaviors, and a stressed horse can even resist losing weight. Slow feeders solve this by spreading a restricted ration over many hours, so the horse trickle-feeds and stays healthy and occupied while still eating a controlled total amount.",
    answerText:
      "Severe hay cuts cause long fasts that bring ulcers, boredom, and stress. Slow feeders spread a restricted ration over hours so the horse trickle-feeds healthily while still eating a controlled total.",
  },
  {
    question: "Why are easy keepers at higher risk of laminitis?",
    answer:
      "Easy keepers readily become overweight, and excess fat -- especially regional fat -- drives insulin dysregulation, which is directly laminitis-triggering. Keeping these horses lean and limiting dietary sugar and starch is the central way to reduce their elevated laminitis risk.",
    answerText:
      "They easily become overweight, and excess fat drives insulin dysregulation that triggers laminitis. Keeping them lean and limiting sugar and starch reduces the risk.",
  },
]

export default function EasyKeeperPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
          { title: 'Laminitis', href: '/health/laminitis' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
        ]}
        hero={{
          title: "Feeding the Easy Keeper",
          subtitle:
            "The easy keeper -- the horse or pony that gets fat on air -- is one of the most common feeding challenges and, increasingly, a welfare problem as equine obesity rises. These metabolically thrifty horses are prone to insulin dysregulation and laminitis, so managing their weight is genuinely a health priority. The trick is cutting calories and sugar without imposing the long fasts that harm the gut. This is reference material to inform a plan built with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Easy Keeper", href: '/nutrition/feeding-the-easy-keeper' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is an Easy Keeper", href: "#what" },
            { label: "Why It Matters", href: "#why" },
            { label: "Controlling Calories and Sugar", href: "#calories" },
            { label: "Slow Feeding", href: "#slow" },
            { label: "Balancing Nutrients", href: "#balancer" },
            { label: "Exercise and Monitoring", href: "#exercise" },
            { label: "Product Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Metabolic Syndrome", href: "/health/equine-metabolic-syndrome" },
              { label: "Equine Laminitis", href: "/health/laminitis" },
              { label: "Ration Balancers", href: "/nutrition/ration-balancers" },
              { label: "Body Condition Score Tool", href: "/tools/body-condition-score" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-easy-keeper"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-13"
            reviewedBy="Editorial team"
          />

          <h2 id="what">What Is an Easy Keeper</h2>
          <p>An easy keeper is a horse that maintains or gains weight on relatively little feed, often a pony or a breed adapted to sparse forage -- Shetlands, Welsh ponies, cobs, Morgans, mustangs, and many gaited and Iberian types. Their efficient metabolism was a survival advantage in harsh native environments but becomes a liability on rich modern pasture and feed, where they readily become overweight.</p>

          <h2 id="why">Why It Matters</h2>
          <p>Equine obesity is not cosmetic. Excess fat, especially regional fat deposits, drives insulin dysregulation and dramatically raises the risk of laminitis -- a painful, sometimes life-ending condition. Obesity also stresses joints and impairs heat tolerance and performance. Keeping an easy keeper lean is one of the most important things an owner can do for its long-term soundness and health.</p>

          <h2 id="calories">Controlling Calories and Sugar</h2>
          <ul>
            <li><strong>Feed by weight, not eye.</strong> Weigh the hay; for weight loss, vets often start around 1.5 percent of ideal bodyweight in forage dry matter, not dropping below about 1.25 percent without supervision.</li>
            <li><strong>Choose low-sugar forage</strong> and soak hay for 30 to 60 minutes to leach out water-soluble carbohydrate.</li>
            <li><strong>Cut the grain</strong> -- easy keepers rarely need any concentrate; calorie-dense feeds are the first thing to remove.</li>
            <li><strong>Restrict grazing</strong> with a grazing muzzle, strip grazing, a dry lot, or turnout at lower-sugar times of day.</li>
            <li><strong>Skip the treats</strong> or use low-sugar options sparingly.</li>
          </ul>

          <h2 id="slow">Slow Feeding</h2>
          <p>The dilemma with easy keepers is that simply feeding less imposes long fasts that cause ulcers, boredom, and stress behaviors, and a stressed horse may even gain weight. Slow feeders -- small-hole hay nets and slow-feed systems -- spread a restricted ration over many hours, so the horse trickle-feeds, keeps its gut healthy and its mind occupied, yet still eats a controlled total. This is the key to humane weight management.</p>

          <h2 id="balancer">Balancing Nutrients</h2>
          <p>A diet of restricted, soaked, low-quality forage can fall short on protein, vitamins, and minerals (soaking also leaches some nutrients). The answer is a low-calorie ration balancer or a vitamin-mineral supplement, which supplies what is missing in a tiny, low-sugar serving without adding meaningful calories. This lets you keep calories low while keeping the diet nutritionally complete. See the ration balancers guide.</p>

          <h2 id="exercise">Exercise and Monitoring</h2>
          <p>When the horse is sound, exercise both burns calories and improves insulin sensitivity, making it a powerful ally in weight management. Combine the dietary plan with regular work suited to the horse&apos;s fitness. Track progress objectively with body condition scoring and a weigh tape rather than the eye, which adapts to a fat horse over time; score regularly with the body-condition tool. Crash dieting is dangerous in horses, so aim for steady, gradual loss under veterinary guidance.</p>

          <h2 id="picks">Product Picks — Slow-Feed and Weight-Management Supports</h2>
          <p>Two widely-used general management tools for easy keepers: slow-feeder hay nets to extend eating time without long fasts, and a low-calorie ration balancer to fill nutrition gaps in a restricted diet. These are management aids, not treatments for laminitis, metabolic syndrome, or any diagnosed condition. For metabolic horses coordinate the full plan with your veterinarian. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="slow-feeder-hay-net"
            badge="Slow-Feed Management"
            name="Small-Hole Slow-Feeder Hay Net"
            subtitle="Extends eating time to prevent long fasts on a restricted ration"
            score={8.7}
            winner
            description={<>
              <p>Small-hole slow-feeder hay nets are one of the most practically useful tools for managing easy keepers. By making the horse work slightly harder for each bite, they can extend a measured hay ration from one or two hours of eating to six or more, preventing the long fasts that cause ulcers and stress behaviors in a calorie-restricted horse. The horse stays occupied and trickle-feeding while total intake remains controlled. A straightforward, inexpensive general management aid.</p>
              <p>General management tool for: easy keepers and any horse on a calorie-restricted forage ration that needs feeding time spread out to prevent gut fasts. Not a medical device or treatment.</p>
            </>}
            specs={[
              { label: 'Hole size', value: '1.5–2 in (small hole) for controlled intake', highlight: 'good' },
              { label: 'Purpose', value: 'Extends eating time; prevents long fasts' },
              { label: 'Best use case', value: 'Easy keepers, calorie-restricted horses' },
            ]}
            pros={['Prevents ulcer-causing long fasts on restriction', 'Extends eating time naturally', 'Inexpensive and durable']}
            cons={['Horse must be introduced gradually', 'Some horses figure out faster methods', 'Hole size selection matters']}
            price="$20–40"
            ctaText="Compare at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/small-hole-slow-feeder-hay-net?s=nutrition-easy-keeper"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="slow-feeder-hay-net"
          />

          <ReviewCard
            id="low-calorie-balancer"
            badge="Nutrient Balance on Restriction"
            name="Low-Calorie Ration Balancer"
            subtitle="Fills vitamin and mineral gaps in a low-calorie easy-keeper diet"
            score={8.6}
            description={<>
              <p>A low-calorie, low-sugar ration balancer supplies protein, vitamins, and minerals in a tiny daily serving -- exactly what an easy keeper on a restricted, soaked, or low-quality hay ration needs to stay nutritionally complete without adding calories. Look for a balancer labeled low-NSC (non-structural carbohydrate) or specifically formulated for easy keepers or metabolic horses. Feed at the label rate; choose appropriately for the forage type. Coordinate with your veterinarian, especially for insulin-dysregulated or PPID horses.</p>
              <p>General nutrition support for: easy keepers and metabolic horses on forage-only or calorie-restricted diets needing balanced micronutrition in a low-calorie serving.</p>
            </>}
            specs={[
              { label: 'Calories', value: 'Very low — tiny daily serving', highlight: 'good' },
              { label: 'NSC', value: 'Low (sugar + starch controlled)', highlight: 'good' },
              { label: 'Best use case', value: 'Easy keepers and metabolic horses on restricted forage diets' },
            ]}
            pros={['Fills nutrition gaps without calories', 'Low sugar and starch for metabolic horses', 'Small serving is economical']}
            cons={['Use under veterinary guidance for metabolic horses', 'Not a calorie source for hard keepers', 'Match to forage type']}
            price="$30–55 per 25–30 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/low+nsc+ration+balancer+easy+keeper+horse?s=nutrition-easy-keeper"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="low-calorie-balancer"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. EMS management recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>Geor RJ. "Metabolic Predispositions to Laminitis in Horses and Ponies." Journal of Equine Veterinary Science, 2008.</li>
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
