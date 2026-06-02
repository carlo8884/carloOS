import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Pasture Management for Horses — Grazing, Rotation & Poisonous Plants",
  description:
    "Reference guide to equine pasture management: grazing behavior, rotational grazing, weed and poisonous-plant control, soil and reseeding, and overgrazing.",
  path: '/care/pasture-management',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Pasture Management for Horses — Grazing, Rotation & Poisonous Plants",
  description:
    "Reference guide to equine pasture management: grazing behavior, rotational grazing, weed and poisonous-plant control, soil and reseeding, and overgrazing.",
  url: 'https://horses.com/care/pasture-management',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is rotational grazing and why does it help?",
    answer:
      "Rotational grazing divides pasture into sections and moves horses through them so each rests and regrows while others are grazed. It lets grass recover, spreads grazing evenly, and breaks the parasite cycle by removing horses while infective larvae die off. It is the most effective single tool for healthy horse pasture.",
    answerText:
      "It divides pasture into sections and rotates horses through them so each rests and regrows. It aids grass recovery, even grazing, and parasite control -- the most effective pasture tool.",
  },
  {
    question: "Why won't horses graze part of the pasture evenly?",
    answer:
      "Horses are selective grazers that create short grazed lawns and tall manure-fouled roughs they avoid. This natural behavior wastes pasture and concentrates parasites in the roughs. Management -- rotation, topping, harrowing, and manure removal -- counteracts it and keeps the sward more even.",
    answerText:
      "Horses create grazed lawns and avoid manure-fouled roughs, wasting pasture and concentrating parasites. Rotation, topping, harrowing, and manure removal counteract it.",
  },
  {
    question: "Is spring grass dangerous for horses?",
    answer:
      "It can be for laminitis-prone horses and ponies, because spring (and autumn) grass is high in the sugars that trigger laminitis, especially on sunny afternoons after cool nights. At-risk horses need restricted grazing via muzzles, strip grazing, dry lots, or grazing at lower-sugar times.",
    answerText:
      "Yes for laminitis-prone horses -- spring and autumn grass is high in laminitis-triggering sugar, worst on sunny afternoons after cool nights. At-risk horses need restricted grazing.",
  },
]

export default function PastureManagementPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Pasture Management for Horses",
          subtitle:
            "Good pasture is the cheapest, healthiest feed a horse can have and the foundation of low-stress management -- but horses are hard on grassland, grazing selectively, churning wet ground, and fouling areas they then refuse to eat. Managing pasture well keeps horses fed, reduces feed bills, limits parasites, and protects against problems from laminitis to poisoning. This is reference material to inform your land management.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Pasture Management", href: '/care/pasture-management' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Horses Graze", href: "#grazing" },
            { label: "Rotational Grazing", href: "#rotation" },
            { label: "Weeds and Poisonous Plants", href: "#weeds" },
            { label: "Soil, Reseeding, and Fertility", href: "#soil" },
            { label: "Avoiding Overgrazing", href: "#overgrazing" },
            { label: "Laminitis and Rich Grass", href: "#laminitis" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Toxic Plants for Horses", href: "/nutrition/toxic-plants" },
              { label: "Deworming Program", href: "/care/deworming-program" },
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Equine Laminitis", href: "/health/laminitis" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-pasture"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="grazing">How Horses Graze</h2>
          <p>Horses are selective grazers that crop grass close with their incisors and create distinct lawns and roughs -- short, repeatedly grazed areas and tall, manure-fouled areas they avoid. Left unmanaged, this patchy grazing wastes pasture, concentrates parasite larvae in the roughs, and lets weeds invade the bare lawns. Understanding this behavior is the starting point for managing the land.</p>

          <h2 id="rotation">Rotational Grazing</h2>
          <p>Dividing pasture into sections and rotating horses through them -- grazing one while others rest and regrow -- is the single most effective management tool. Rotation lets grass recover, breaks the parasite life cycle by removing horses while larvae die off, and spreads grazing pressure evenly. Resting paddocks, topping the roughs, harrowing to spread droppings in hot dry weather, and removing manure where practical all support the rotation.</p>

          <h2 id="weeds">Weeds and Poisonous Plants</h2>
          <p>Overgrazed, bare, or poorly managed pasture invites weeds, some of which are toxic. Among the most dangerous are ragwort (cumulative liver damage), and trees and shrubs such as yew, oak (acorns), red maple (wilted leaves), and oleander. Many poisonous plants are unpalatable when fresh but become dangerous when wilted, dried in hay, or when nothing else is available on bare pasture. Identify and remove them, fence off problem trees, and never assume horses will simply avoid everything harmful. See the toxic plants guide.</p>

          <h2 id="soil">Soil, Reseeding, and Fertility</h2>
          <p>Healthy pasture starts with the soil. Periodic soil testing guides liming and fertilizing to the right pH and nutrient balance for grass rather than weeds. Overseeding bare patches, choosing horse-appropriate grass species, and avoiding excessive nitrogen (which can push lush, high-sugar growth) keep the sward dense and competitive. Avoid grazing or poaching wet ground, which destroys the sward and creates mud.</p>

          <h2 id="overgrazing">Avoiding Overgrazing</h2>
          <ul>
            <li><strong>Match stocking rate to land.</strong> Too many horses on too little ground guarantees overgrazing, weeds, and mud.</li>
            <li><strong>Rest paddocks</strong> and avoid grazing grass down to the dirt, which kills the sward and invites weeds.</li>
            <li><strong>Use a sacrifice area</strong> or dry lot in wet weather to protect the main pasture from poaching.</li>
            <li><strong>Top and harrow</strong> to manage roughs and spread droppings where conditions allow.</li>
          </ul>

          <h2 id="laminitis">Laminitis and Rich Grass</h2>
          <p>Lush pasture is high in the sugars that trigger laminitis in susceptible horses. Spring and autumn flushes, and sunny afternoons after cool nights, are the high-risk windows. At-risk horses need restricted grazing through grazing muzzles, strip grazing, dry lots, or turnout at lower-sugar times. Pasture management for an easy-keeping pony is as much about limiting intake as growing grass.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Rural and agricultural extension services. Equine pasture-management and grassland resources (e.g., university extension programs).</li>
            <li>Nielsen MK, et al. AAEP Parasite Control Guidelines (pasture and rotation). aaep.org.</li>
            <li>Longland AC, Byrd BM. “Pasture Nonstructural Carbohydrates and Equine Laminitis.” Journal of Nutrition, 2006; 136(7):2099S–2102S.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
