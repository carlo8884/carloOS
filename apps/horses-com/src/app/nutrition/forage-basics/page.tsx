import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, StockImage } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Forage Basics — Why Fiber Comes First",
  description:
    "Reference guide to equine forage: why fiber is the foundation of the horse diet, how the hindgut works, how much forage a horse needs, and forage-first feeding.",
  path: '/nutrition/forage-basics',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Forage Basics — Why Fiber Comes First",
  description:
    "Reference guide to equine forage: why fiber is the foundation of the horse diet, how the hindgut works, how much forage a horse needs, and forage-first feeding.",
  url: 'https://horses.com/nutrition/forage-basics',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How much hay should a horse eat per day?",
    answer:
      "As a rule, a horse should eat at least 1.5 to 2 percent of its bodyweight per day in forage dry matter, which for a 500 kg horse is roughly 7.5 to 10 kg of hay or the grazing equivalent. Ideally forage is available most of the time. Dropping much below this risks gut and behavioral problems.",
    answerText:
      "At least 1.5 to 2 percent of bodyweight daily in forage dry matter -- about 7.5 to 10 kg of hay for a 500 kg horse -- ideally available most of the time.",
  },
  {
    question: "Why is forage more important than grain for horses?",
    answer:
      "The horse is a hindgut fermenter built to process a steady trickle of fiber, and forage buffers stomach acid, keeps the gut moving, generates heat, and occupies the horse. Grain in large meals disrupts the hindgut microbes and is linked to colic, ulcers, and laminitis, so forage is the foundation and grain only a marginal addition.",
    answerText:
      "Horses are hindgut fermenters built for constant fiber. Forage buffers acid, keeps the gut moving, and occupies the horse, while large grain meals disrupt the gut and cause disease.",
  },
  {
    question: "What happens if a horse goes too long without forage?",
    answer:
      "The horse's stomach secretes acid continuously, so long gaps without forage leave acid attacking an empty stomach, a direct cause of gastric ulcers, and also raise colic and stress-behavior risk. Trickle feeding -- free-choice forage or slow feeders -- prevents these long fasts and matches the horse's natural feeding pattern.",
    answerText:
      "Acid attacks the empty stomach, causing ulcers, and colic and stress-behavior risk rise. Trickle feeding with free-choice forage or slow feeders prevents the long fasts.",
  },
]

export default function ForageBasicsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Equine Forage Basics",
          subtitle:
            "Almost everything about feeding horses well begins with one principle: forage first. The horse is a hindgut fermenter built to process a steady trickle of fibrous plant material around the clock, and a forage-based diet underpins gut health, behavior, and metabolic stability. Grain and supplements are adjustments at the margins; forage is the foundation. This is reference material to inform feeding decisions, not a substitute for a veterinarian or equine nutritionist.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Forage Basics", href: '/nutrition/forage-basics' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Fiber First", href: "#fiber" },
            { label: "How the Hindgut Works", href: "#hindgut" },
            { label: "How Much Forage", href: "#howmuch" },
            { label: "Trickle Feeding", href: "#trickle" },
            { label: "Forage Quality", href: "#quality" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hay Types Compared", href: "/nutrition/hay-types" },
              { label: "Grain and Concentrates", href: "/nutrition/grain-and-concentrates" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-forage"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="fiber">Why Fiber First</h2>
          <p>The horse evolved grazing fibrous grasses for 16 or more hours a day. Its teeth, its small stomach that secretes acid continuously, and its enormous fermenting hindgut are all built for a constant flow of fiber. Feeding a forage-based diet keeps that system working as designed: it buffers stomach acid, keeps the gut moving, generates body heat, and occupies the horse mentally. Diets short on forage and heavy in grain are behind much of the colic, ulceration, and behavioral trouble seen in domestic horses.</p>

          <StockImage manifestKey="horses-com:nutrition-forage" aspect="16:9" />

          <h2 id="hindgut">How the Hindgut Works</h2>
          <p>Behind the small intestine sit the cecum and large colon -- a vast fermentation vat where billions of microbes break down fiber (cellulose) that the horse itself cannot digest, releasing volatile fatty acids that supply much of the horse&apos;s energy. This microbial population is sensitive: it thrives on steady forage and is disrupted by sudden diet changes and large grain meals, which can spill undigested starch into the hindgut, sour the fermentation, and trigger colic and laminitis. Protecting the hindgut microbes is a central goal of good feeding.</p>

          <h2 id="howmuch">How Much Forage</h2>
          <p>The standard guideline is that a horse should eat at least 1.5 to 2 percent of its bodyweight per day in forage dry matter, and ideally have forage available most of the time. For a 500 kg horse that is roughly 7.5 to 10 kg of hay or its grazing equivalent daily. Going below about 1 to 1.5 percent of bodyweight in forage risks gut and behavioral problems, which is why severe forage restriction for weight loss must be done carefully and under guidance.</p>

          <h2 id="trickle">Trickle Feeding</h2>
          <p>Because the horse&apos;s stomach produces acid continuously whether or not it is eating, long gaps without forage leave acid splashing against an empty stomach -- a direct route to gastric ulcers. Trickle feeding (free-choice forage, or slow-feeder hay nets that extend a ration over many hours) keeps something in the stomach to buffer acid and matches the horse&apos;s natural feeding pattern. For easy keepers, slow feeders let you restrict calories without imposing long fasts.</p>

          <h2 id="quality">Forage Quality</h2>
          <ul>
            <li><strong>Cleanliness</strong> -- forage should be free of dust, mold, and weeds; moldy hay causes respiratory disease and colic.</li>
            <li><strong>Maturity at cutting</strong> -- earlier-cut forage is more digestible and higher in nutrients; very stemmy late-cut hay is largely filler.</li>
            <li><strong>Type</strong> -- grass versus legume (such as alfalfa) changes calories, protein, and calcium; match to the horse.</li>
            <li><strong>Sugar and starch content</strong> -- matters greatly for laminitis-prone and metabolic horses; testing or soaking controls it.</li>
            <li><strong>Consistency</strong> -- change forage gradually, since the hindgut microbes need time to adapt.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Harris PA, et al. “Review: Feeding Conserved Forage to Horses.” Animal, 2017.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
