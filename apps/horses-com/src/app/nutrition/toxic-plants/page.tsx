import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
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
  modifiedAt: '2026-09-06T00:00:00Z',
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
            { label: "Pasture toxic-plant kit", href: "#kit" },
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
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the pasture toxic-plant checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Pasture toxic-plant checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the equine-toxic-plant-identification-field-guide,
              horse-pasture-walk-weed-identification-handbook, and
              horse-paddock-tree-guard-fencing notes that match
              the walk-and-identify, inspect-the-sward, and
              fence-out-ornamentals copy on this page — an
              equine toxic-plant identification field guide so
              the dangerous plants in the region can be named
              on the walk (not a soil-test kit), a horse
              pasture-walk weed-identification handbook so
              the regular inspection has a pocket reference
              (not a grazing-muzzle hop), and horse paddock
              tree-guard fencing so ornamental hedges and
              toxic trees stay out of reach (not electric
              tape, fence mesh, electric rope, or paddock
              panels). Educational pasture-safety checklist,
              not a treatment, and not a substitute for
              calling the veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Pasture toxic-plant checklist"
              subtitle="Email the field-guide, pasture-walk, and tree-guard notes. No spam."
              ctaText="Email my pasture toxic-plant checklist"
              source="nutrition-toxic-plants-under-hero"
            />
          </div>

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
            <li><strong>Walk and inspect pastures</strong> regularly, learning to identify the dangerous plants in your region. An equine toxic-plant identification field guide is that walk-and-name reference — it is not a soil-test kit (that lives on the pasture-management page).</li>
            <li><strong>Carry a pocket ID on the walk</strong> so weeds and ornamentals can be checked against a named list rather than guessed. A horse pasture-walk weed-identification handbook is that pocket reference — it is not a grazing-muzzle hop (that lives on pasture-management and laminitis pages).</li>
            <li><strong>Remove or fence off toxic plants and trees</strong> including ornamental hedges like yew near paddocks. Horse paddock tree-guard fencing is the fence-out for those trees and hedges — it is not electric tape, fence mesh, or electric rope (those live on the fencing-safety page) and not portable paddock panels (those live on the osteoarthritis page).</li>
            <li><strong>Avoid overgrazing</strong> so horses are never forced to eat weeds on bare ground.</li>
            <li><strong>Check hay carefully</strong> for dried toxic plants such as ragwort, which is dangerous and palatable when dried.</li>
            <li><strong>Dispose of clippings and prunings safely</strong> and keep wilted leaves (especially red maple) out of reach.</li>
            <li><strong>Avoid black walnut shavings</strong> as bedding.</li>
          </ul>

          <h2 id="kit">Pasture toxic-plant kit</h2>
          <p>
            Everyday physical supplies that match the
            walk-and-identify, inspect-the-sward, and
            fence-out-ornamentals copy on this page — an
            equine toxic-plant identification field guide
            so the dangerous plants in the region can be
            named on the walk, a horse pasture-walk
            weed-identification handbook so the regular
            inspection has a pocket reference, and horse
            paddock tree-guard fencing so ornamental
            hedges and toxic trees stay out of reach.
            These are educational pasture-safety
            searches, not a ranked product list, not a
            substitute for veterinary care, and not a
            soil-test-kit hop (that lives on the
            pasture-management page), a grazing-muzzle
            hop (that lives on pasture-management and
            laminitis), an electric-tape / fence-mesh /
            electric-rope hop (those live on
            fencing-safety), or a paddock-panel hop
            (that lives on the osteoarthritis page).
            This page does not hop medications or
            vaccines. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (equine toxic plant identification field guide /
              horse pasture walk weed identification handbook /
              horse paddock tree guard fencing).
              Educational pasture/barn-safety searches only;
              no Rx / vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1114
              flat+back+horse+water+bucket /
              heated+horse+water+bucket /
              electrolyte+for+horses, #1113
              orchard+grass+hay+horse /
              alfalfa+hay+bales+horse /
              timothy+alfalfa+mixed+hay+horse, #1112
              tabletop+digital+horse+grain+scale /
              stackable+rubber+horse+feed+tubs /
              rodent+proof+metal+horse+feed+bin, #1111
              horse+hay+probe+moisture+tester /
              equine+hay+core+sampler /
              wall+mounted+horse+hay+rack, #1110
              plain+white+horse+salt+block /
              salt+first+horse+electrolyte+powder /
              wide+mouth+horse+water+bucket, #1108
              automatic+horse+waterer, #1105
              digital+hanging+hay+bale+scale /
              equine+forage+nsc+hay+test+kit /
              portable+strip+grazing+step+in+posts,
              horse+tank+heater
              (winter-care),
              color+coded+flat+back+horse+buckets
              (strangles),
              horse+electrolytes
              (emergency / grimace-scale),
              horse+electric+tape / horse+fence+mesh /
              horse+electric+rope / electric+fence+tester
              (fencing-safety),
              horse+grazing+muzzle / soil+test+kit
              (pasture-management),
              portable+horse+paddock+panels
              (osteoarthritis). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the pasture toxic-plant kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page walk-and-identify, inspect-the-sward,
              and fence-out-ornamentals copy — an equine
              toxic-plant identification field guide, a
              horse pasture-walk weed-identification
              handbook, and horse paddock tree-guard
              fencing. Educational pasture-safety
              searches only. They are not a ranked
              product list, they are not a soil-test-kit
              hop, they are not a grazing-muzzle hop,
              they are not an electric-tape or paddock-panel
              hop, and they do not replace a veterinarian.
              Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+toxic+plant+identification+field+guide?s=nutrition-toxic-plants"
                amazonLabel="Browse equine toxic-plant identification field guides on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+pasture+walk+weed+identification+handbook?s=nutrition-toxic-plants"
                amazonLabel="Browse horse pasture-walk weed-identification handbooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+paddock+tree+guard+fencing?s=nutrition-toxic-plants"
                amazonLabel="Browse horse paddock tree-guard fencing on Amazon →"
              />
            </div>
          </div>

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
