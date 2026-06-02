import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Hay Types Compared — Grass, Legume, and Mixed",
  description:
    "Reference guide to hay types for horses: grass hays (timothy, orchard), legume hays (alfalfa, clover), quality assessment, and matching hay to the horse.",
  path: '/nutrition/hay-types',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Hay Types Compared — Grass, Legume, and Mixed",
  description:
    "Reference guide to hay types for horses: grass hays (timothy, orchard), legume hays (alfalfa, clover), quality assessment, and matching hay to the horse.",
  url: 'https://horses.com/nutrition/hay-types',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Is alfalfa good or bad for horses?",
    answer:
      "Neither inherently -- it depends on the horse. Alfalfa is rich in calories, protein, and calcium, which benefits hard keepers, broodmares, youngstock, and performance horses, and small amounts buffer stomach acid for ulcer-prone horses. The same richness makes it easy to overfeed to idle or metabolic horses, so it should be matched to the horse's needs.",
    answerText:
      "It depends on the horse. Alfalfa's high calories, protein, and calcium suit hard keepers, broodmares, youngstock, and performance horses, but can overfeed idle or metabolic horses.",
  },
  {
    question: "What hay is best for an easy keeper?",
    answer:
      "Lower-sugar grass hay, fed by weight and often soaked to reduce its sugar content, is generally best for easy keepers and laminitis-prone horses. Testing the hay removes the guesswork on sugar and starch. Rich legume hays like alfalfa are usually too calorie- and sugar-dense for these horses unless fed in small, deliberate amounts.",
    answerText:
      "Lower-sugar grass hay, fed by weight and often soaked, ideally tested for sugar and starch. Rich legume hays are usually too dense for easy keepers.",
  },
  {
    question: "How can I tell if hay is good quality?",
    answer:
      "Good hay smells sweet and fresh, is green to gold, leafy rather than coarse and stemmy, cut before heavy seed heads, and free of dust, mold, weeds, and contaminants. A musty smell or visible mold means reject it. For metabolic horses, a laboratory forage analysis of sugar and starch is the most reliable check.",
    answerText:
      "Good hay smells fresh, is green to gold, leafy not stemmy, early-cut, and free of dust, mold, and weeds. Reject musty or moldy hay. Lab analysis is best for metabolic horses.",
  },
]

export default function HayTypesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        hero={{
          title: "Horse Hay Types Compared",
          subtitle:
            "Hay is the staple of most domestic horse diets, and not all hay is alike. Grass and legume hays differ markedly in calories, protein, calcium, and sugar, and the right choice depends on the individual horse -- a hard-working sport horse, an easy-keeping pony, and a senior with poor teeth need very different forage. This guide compares the main types and how to judge quality. This is reference material to inform feeding choices alongside professional advice.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Hay Types Compared", href: '/nutrition/hay-types' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Grass Hays", href: "#grass" },
            { label: "Legume Hays", href: "#legume" },
            { label: "Mixed Hays", href: "#mixed" },
            { label: "Judging Quality", href: "#quality" },
            { label: "Matching Hay to the Horse", href: "#matching" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Feeding the Easy Keeper", href: "/nutrition/feeding-the-easy-keeper" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Heaves (Equine Asthma)", href: "/health/heaves" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-hay"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="grass">Grass Hays</h2>
          <p>Grass hays are the everyday forage for most horses. Timothy is prized for its consistent quality and palatability; orchardgrass is soft, leafy, and well liked; bermudagrass (coastal) is common in the warm south; and meadow, brome, fescue, and ryegrass hays are used regionally. Grass hays are generally moderate in calories and protein and lower in calcium than legumes, making them a sensible base forage for the majority of horses, including easy keepers when sugar content is controlled.</p>

          <h2 id="legume">Legume Hays</h2>
          <p>Alfalfa (lucerne) is the dominant legume hay, with clover hays also used. Legume hays are richer than grass hays -- higher in calories, protein, and calcium -- which makes them valuable for horses needing condition: hard keepers, lactating mares, growing youngstock, and performance horses. The same richness makes them easy to overfeed to idle or metabolic horses. Alfalfa is also useful fed in small amounts as a stomach-acid buffer for ulcer-prone horses.</p>

          <h2 id="mixed">Mixed Hays</h2>
          <p>Many hays are a mix of grass and legume -- for example a timothy-alfalfa or grass-clover blend -- which moderates the richness of pure legume while raising the nutrition of pure grass. Mixed hays are a practical middle ground for horses in moderate work or that need a little more than grass hay alone provides, and they are widely available baled together from mixed swards.</p>

          <h2 id="quality">Judging Quality</h2>
          <ul>
            <li><strong>Smell and look</strong> -- good hay smells sweet and fresh, is green to gold, and is free of dust, mold, and a musty odor.</li>
            <li><strong>Leaf-to-stem ratio</strong> -- leafier hay is more digestible and nutritious; very coarse, stemmy hay is mostly filler.</li>
            <li><strong>Maturity at cutting</strong> -- earlier-cut hay (before heavy seed heads) is higher quality than over-mature hay.</li>
            <li><strong>No contaminants</strong> -- check for weeds, blister beetles (a serious alfalfa risk in some regions), trash, and dampness.</li>
            <li><strong>Lab analysis</strong> -- for metabolic horses, a forage test of sugar, starch, and nutrients removes the guesswork.</li>
          </ul>

          <h2 id="matching">Matching Hay to the Horse</h2>
          <p>Match the forage to the horse rather than feeding one hay to all. Easy keepers and laminitis-prone horses do best on lower-sugar grass hay, often soaked, fed by weight. Hard keepers, broodmares, youngstock, and hard-working horses benefit from richer or part-legume hay. Seniors with poor teeth may need soft, leafy hay, chopped or soaked forage, or hay replacers. Whatever the type, introduce new hay gradually to let the hindgut adapt.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>Rural and agricultural extension services. Forage quality and hay-testing resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
