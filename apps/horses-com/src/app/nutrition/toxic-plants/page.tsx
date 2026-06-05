import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Toxic Plants for Horses — Common Poisonous Plants and Prevention",
  description:
    "Reference guide to plants poisonous to horses: the most dangerous plants and trees, how poisoning happens, signs of trouble, and pasture and hay prevention.",
  path: '/nutrition/toxic-plants',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Toxic Plants for Horses — Common Poisonous Plants and Prevention",
  description:
    "Reference guide to plants poisonous to horses: the most dangerous plants and trees, how poisoning happens, signs of trouble, and pasture and hay prevention.",
  url: 'https://horses.com/nutrition/toxic-plants',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What are the most dangerous plants for horses?",
    answer:
      "Among the most dangerous are ragwort (cumulative liver damage, and readily eaten when dried in hay), yew (rapidly lethal in small amounts), oleander (highly heart-toxic), red maple (wilted leaves destroy red blood cells), oak acorns, and water hemlock. The specific threats vary by region, so learn the poisonous plants where you keep horses.",
    answerText:
      "Ragwort, yew, oleander, red maple (wilted leaves), oak acorns, and water hemlock are among the most dangerous. Threats vary by region, so learn your local poisonous plants.",
  },
  {
    question: "Why is ragwort especially dangerous in hay?",
    answer:
      "Ragwort causes cumulative, irreversible liver damage. Horses tend to avoid the bitter fresh plant in pasture, but drying it in hay masks the bitterness while preserving the toxin, so horses eat it unknowingly. This makes ragwort-contaminated hay particularly insidious, and checking hay for dried ragwort is an important prevention step.",
    answerText:
      "Ragwort causes cumulative irreversible liver damage. Horses avoid the bitter fresh plant but eat it once dried in hay, which masks the bitterness while keeping the toxin -- making contaminated hay insidious.",
  },
  {
    question: "Will horses naturally avoid poisonous plants?",
    answer:
      "Not reliably. Horses often avoid bitter toxic plants when good forage is plentiful, but they eat them on bare or overgrazed pasture, when the plants are dried in hay, when wilted leaves become palatable, or out of boredom and curiosity. You cannot depend on avoidance, so removing toxic plants and managing pasture and hay is essential.",
    answerText:
      "Not reliably -- they avoid them with plenty of forage but eat them on bare pasture, in hay, when wilted, or out of curiosity. Removal and good pasture and hay management are essential.",
  },
]

export default function ToxicPlantsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Pasture Management', href: '/care/pasture-management' },
          { title: 'Equine Colic', href: '/health/colic' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
        ]}
        hero={{
          title: "Toxic Plants for Horses",
          subtitle:
            "Horses are surprisingly vulnerable to plant poisoning. Some toxic plants are eaten readily, others only when dried in hay or when grazing is scarce, and a few are deadly in small amounts. Knowing the most dangerous plants for your region, recognizing trouble, and managing pasture and hay to exclude them is essential land management. This is reference material to inform prevention -- always involve a veterinarian if poisoning is suspected.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Toxic Plants for Horses", href: '/nutrition/toxic-plants' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Poisoning Happens", href: "#how" },
            { label: "Most Dangerous Plants", href: "#plants" },
            { label: "Trees to Watch", href: "#trees" },
            { label: "Signs of Poisoning", href: "#signs" },
            { label: "Prevention", href: "#prevention" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Suspected Poisoning</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              If you suspect a horse has eaten a poisonous plant, call your veterinarian immediately and, if you can, identify or photograph the plant. Some plant toxins act fast and treatment is time-sensitive.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Hay Types Compared", href: "/nutrition/hay-types" },
              { label: "Equine Colic", href: "/health/colic" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-toxic-plants"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="how">How Poisoning Happens</h2>
          <p>Horses are selective grazers and often avoid bitter or unpalatable toxic plants when good forage is plentiful. The danger rises when pasture is bare or overgrazed and hungry horses eat what they normally would not, when toxic plants are dried in hay (which can mask bitterness and concentrate toxin), when wilted leaves become more palatable or more poisonous, or when curious or bored horses sample ornamental plants and hedge clippings. Never assume a horse will simply avoid everything harmful.</p>

          <h2 id="plants">Most Dangerous Plants</h2>
          <ul>
            <li><strong>Ragwort</strong> -- causes cumulative, irreversible liver damage; dangerous fresh but readily eaten when dried in hay, which is especially insidious.</li>
            <li><strong>Yew</strong> -- one of the most acutely lethal plants; a small amount of the evergreen foliage can kill rapidly.</li>
            <li><strong>Oleander</strong> -- highly toxic to the heart, dangerous even in small amounts and when dried.</li>
            <li><strong>Bracken fern</strong> -- causes a vitamin deficiency with neurological signs when eaten over time.</li>
            <li><strong>Hemlock and water hemlock</strong> -- highly poisonous; cause neurological signs and death.</li>
            <li><strong>Nightshades, foxglove, and rhododendron</strong> -- variously toxic to the heart, nerves, and gut.</li>
          </ul>

          <h2 id="trees">Trees to Watch</h2>
          <ul>
            <li><strong>Red maple</strong> -- wilted or dried leaves (as after a storm or in autumn) destroy red blood cells and are potentially fatal.</li>
            <li><strong>Oak and acorns</strong> -- tannins cause kidney and gut damage; risk peaks when acorns drop in autumn.</li>
            <li><strong>Black walnut</strong> -- shavings used as bedding can trigger laminitis from contact.</li>
            <li><strong>Yew (as above)</strong> often planted as an ornamental hedge near paddocks -- a deadly combination.</li>
          </ul>

          <h2 id="signs">Signs of Poisoning</h2>
          <p>Signs vary enormously by plant and toxin, which is why identifying the plant helps the veterinarian so much. They can include colic and diarrhea, neurological signs (incoordination, trembling, weakness, behavioral change), dark or bloody urine, jaundice and signs of liver failure, sudden collapse, and laminitis. Because some toxins act within minutes and others cause cumulative damage over weeks, any suspicion of poisoning warrants an immediate veterinary call rather than waiting to see how it develops.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Walk and inspect pastures</strong> regularly, learning to identify the dangerous plants in your region.</li>
            <li><strong>Remove or fence off toxic plants and trees</strong> including ornamental hedges like yew near paddocks.</li>
            <li><strong>Avoid overgrazing</strong> so horses are never forced to eat weeds on bare ground.</li>
            <li><strong>Check hay carefully</strong> for dried toxic plants such as ragwort, which is dangerous and palatable when dried.</li>
            <li><strong>Dispose of clippings and prunings safely</strong> and keep wilted leaves (especially red maple) out of reach.</li>
            <li><strong>Avoid black walnut shavings</strong> as bedding.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Knight AP, Walter RG. A Guide to Plant Poisoning of Animals in North America, Teton NewMedia.</li>
            <li>ASPCA Animal Poison Control Center. Toxic and non-toxic plant lists. aspca.org.</li>
            <li>American Association of Equine Practitioners. “Poisonous Plants” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
