import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Beet Pulp for Horses — Benefits, Soaking, and Safe Feeding",
  description:
    "Reference guide to feeding beet pulp to horses: what it is, its super-fiber benefits, why and how to soak it, who it suits, and common myths.",
  path: '/nutrition/beet-pulp',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Beet Pulp for Horses — Benefits, Soaking, and Safe Feeding",
  description:
    "Reference guide to feeding beet pulp to horses: what it is, its super-fiber benefits, why and how to soak it, who it suits, and common myths.",
  url: 'https://horses.com/nutrition/beet-pulp',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-13T00:00:00Z',
})

const FAQS = [
  {
    question: "Do you have to soak beet pulp before feeding?",
    answer:
      "Soaking is strongly recommended. Beet pulp absorbs several times its weight in water and swells, so soaking produces a safe, easy-to-eat mash and prevents choke from a horse bolting dry pulp. Soak shreds for around 30 minutes (pellets longer) in plenty of water, and soak fresh each feed in hot weather to avoid spoilage.",
    answerText:
      "Yes, strongly recommended -- it swells greatly with water, so soaking makes a safe mash and prevents choke from bolting dry pulp. Soak shreds about 30 minutes, fresh each feed in heat.",
  },
  {
    question: "Is beet pulp high in sugar?",
    answer:
      "No -- this is a common myth. Beet pulp is the fiber left after sugar is extracted from sugar beets, so it is relatively low in sugar, especially in the molasses-free or rinsed form. That makes it suitable for many metabolic and laminitis-prone horses as a safe, low-starch source of fermentable-fiber calories.",
    answerText:
      "No -- that is a myth. The sugar has been extracted, so beet pulp is relatively low in sugar, especially molasses-free, making it suitable for many metabolic horses.",
  },
  {
    question: "What is beet pulp good for?",
    answer:
      "Beet pulp is a highly digestible super-fiber that adds safe, condition-building calories without the starch of grain, making it valuable for hard keepers and seniors. As a soft soaked mash it suits horses with poor teeth, helps horses prone to choke, carries extra water into the horse, and serves as a palatable vehicle for supplements.",
    answerText:
      "It adds safe calories without grain's starch (good for hard keepers and seniors), is easy to chew as a mash, helps hydration, and is a palatable vehicle for supplements.",
  },
]

export default function BeetPulpPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Feeding the Hard Keeper', href: '/nutrition/feeding-the-hard-keeper' },
          { title: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
        ]}
        hero={{
          title: "Beet Pulp for Horses",
          subtitle:
            "Beet pulp is a humble feed with an outsized reputation among horse owners -- a soaked, mash-forming fiber that adds safe calories, suits hard keepers and seniors, and sidesteps the risks of grain. It is also the subject of persistent myths about its dangers. This guide explains what beet pulp is, why it is useful, how to feed it safely, and what is true and false about it. This is reference material to inform feeding choices.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Beet Pulp Explained", href: '/nutrition/beet-pulp' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Beet Pulp Is", href: "#what" },
            { label: "Why Feed It", href: "#why" },
            { label: "Soaking Beet Pulp", href: "#soaking" },
            { label: "Who It Suits", href: "#who" },
            { label: "Myths and Cautions", href: "#myths" },
            { label: "Beet Pulp Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Feeding the Hard Keeper", href: "/nutrition/feeding-the-hard-keeper" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Choke", href: "/health/choke" },
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-beet-pulp"
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

          <h2 id="what">What Beet Pulp Is</h2>
          <p>Beet pulp is the fibrous material left after sugar is extracted from sugar beets -- a by-product that, despite the name, is relatively low in sugar because the sugar has been removed. It is sold dried as shreds or pellets, with or without added molasses (the molasses-free or rinsed forms being preferred for low-sugar diets). Soaked in water it expands into a soft mash that many horses eat readily.</p>

          <h2 id="why">Why Feed It</h2>
          <p>Beet pulp is a super-fiber: a highly digestible, fermentable fiber that delivers more calories than typical hay but without the starch and sugar load of grain. That makes it a safe way to add condition-building energy through the hindgut rather than through risky starch. As a soft, soaked mash it is also easy to chew and swallow, ideal for horses with poor teeth, and it carries water into the horse, aiding hydration.</p>

          <h2 id="soaking">Soaking Beet Pulp</h2>
          <p>Beet pulp absorbs several times its dry weight in water and swells substantially, which is why it is soaked before feeding. Soaking dried shreds for around 30 minutes (pellets longer) produces a safe, easily eaten mash and removes the (largely theoretical, but worth avoiding) risk of dry pulp swelling after a horse bolts it. Use plenty of water, soak for the time the product specifies, and in hot weather soak fresh each feed to avoid fermentation and spoilage. Discard sour or fermented mash.</p>

          <h2 id="who">Who It Suits</h2>
          <ul>
            <li><strong>Hard keepers</strong> needing safe extra calories without high grain.</li>
            <li><strong>Senior horses</strong> that cannot chew long-stem hay and need chewable fiber.</li>
            <li><strong>Horses prone to choke</strong> when fed soaked, as the soft mash is easy to swallow (always fully soaked).</li>
            <li><strong>Horses needing extra hydration</strong> or a vehicle for medications and supplements in a palatable mash.</li>
            <li><strong>Many metabolic horses</strong> when the molasses-free, low-sugar form is used and rinsed.</li>
          </ul>

          <h2 id="myths">Myths and Cautions</h2>
          <p>Two myths persist. The first is that dry beet pulp commonly causes stomach rupture from swelling -- there is little real-world evidence of this, though soaking is still sensible practice and prevents choke from bolting. The second is that beet pulp is high in sugar -- the opposite is true once the molasses-free form is used, since the sugar has been extracted. Real cautions are to soak it to prevent choke, to introduce it gradually like any feed, to choose molasses-free for low-sugar diets, and to balance the overall ration (beet pulp is low in some minerals, so it complements rather than replaces a balanced diet).</p>

          <h2 id="picks">Beet Pulp Picks</h2>
          <p>A few widely-available beet pulp options covering shred and pellet formats and molasses-free for low-sugar diets. Always soak before feeding; introduce gradually. Use as part of a balanced ration -- beet pulp is a general fiber and calorie support, not a complete feed or a treatment. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="beet-pulp-shreds-mf"
            badge="Molasses-Free Shreds"
            name="Molasses-Free Beet Pulp Shreds"
            subtitle="Low-sugar super-fiber for hard keepers, seniors, and metabolic horses"
            score={8.8}
            winner
            description={<>
              <p>Molasses-free beet pulp shreds are the go-to form for horses on low-sugar diets -- the molasses coating is omitted so the natural low-sugar profile of the fiber is preserved, making it suitable for many easy keepers and metabolic horses as a calorie source. Shreds soak up quickly (about 30 minutes) into a palatable mash and are easy for seniors with worn teeth to eat. A very widely used general fiber supplement for adding safe condition-building calories without starch.</p>
              <p>General nutrition support for: hard keepers needing safe extra calories, seniors that cannot chew hay, and metabolic horses where molasses-free is required. Not a complete feed; supplement a balanced ration.</p>
            </>}
            specs={[
              { label: 'Form', value: 'Dried shreds (soak before feeding)', highlight: 'good' },
              { label: 'Molasses', value: 'None — low sugar', highlight: 'good' },
              { label: 'Best use case', value: 'Hard keepers, seniors, metabolic / low-sugar diets' },
            ]}
            pros={['Low sugar — suits metabolic horses', 'Soaks quickly into palatable mash', 'Safe calorie addition without starch', 'Good hydration vehicle']}
            cons={['Must be soaked before feeding', 'Not a complete feed', 'Some horses initially reluctant']}
            price="$18–35 per 40–50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/molasses+free+beet+pulp+shreds+horse?s=nutrition-beet-pulp"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="beet-pulp-shreds-mf"
          />

          <ReviewCard
            id="beet-pulp-pellets"
            badge="Pellet Format"
            name="Beet Pulp Pellets"
            subtitle="Convenient pellet form of beet pulp for horses on a super-fiber program"
            score={8.4}
            description={<>
              <p>Beet pulp pellets deliver the same high-digestibility super-fiber as shreds in a denser, easier-to-store pellet form. They take longer to soak than shreds (typically 45 minutes to 1 hour to fully expand) but are convenient for stable management and travel. Available with or without molasses; choose molasses-free for horses on low-sugar protocols. Use as a fiber and calorie supplement alongside forage and a complete mineral source.</p>
              <p>General nutrition support for: the same horses as shreds, particularly where storage convenience and consistent pellet-form serving matter.</p>
            </>}
            specs={[
              { label: 'Form', value: 'Pellets (soak 45–60 min before feeding)' },
              { label: 'Availability', value: 'With or without molasses' },
              { label: 'Best use case', value: 'Hard keepers and seniors where pellet form is preferred' },
            ]}
            pros={['Convenient to store and measure', 'Same fiber benefits as shreds', 'Suits horses that prefer pellet texture']}
            cons={['Longer soaking time than shreds', 'Must still be fully soaked', 'Check for molasses if low-sugar diet needed']}
            price="$18–32 per 40–50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/beet+pulp+pellets+horse+feed?s=nutrition-beet-pulp"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="beet-pulp-pellets"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>Rural and agricultural extension services. Equine feeding resources on beet pulp and super-fibers.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
