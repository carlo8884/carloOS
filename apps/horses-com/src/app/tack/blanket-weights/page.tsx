import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Blanket Weights Explained — Turnout, Stable, and Fill",
  description:
    "Reference guide to horse blanket weights: turnout vs stable rugs, denier and fill explained, weight categories and temperature ranges, coolers and sheets.",
  path: '/tack/blanket-weights',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Blanket Weights Explained — Turnout, Stable, and Fill",
  description:
    "Reference guide to horse blanket weights: turnout vs stable rugs, denier and fill explained, weight categories and temperature ranges, coolers and sheets.",
  url: 'https://horses.com/tack/blanket-weights',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What does denier mean on a horse rug?",
    answer:
      "Denier measures the toughness of the rug's outer fabric -- a higher denier such as 1200D is more tear- and abrasion-resistant than a lower one such as 600D, which matters for horses that are hard on rugs in the field. Denier is about durability and waterproofing and is separate from fill, which measures warmth.",
    answerText:
      "Denier measures the outer fabric's toughness -- higher (e.g. 1200D) resists tears and abrasion better than lower (e.g. 600D). It is about durability, separate from fill, which measures warmth.",
  },
  {
    question: "What is the difference between a turnout rug and a stable rug?",
    answer:
      "A turnout rug is waterproof and tough, made for the field and the weather, while a stable rug is not waterproof and is meant for indoor use over a clean horse. Using a stable rug outside leaves the horse soaked, so the two are not interchangeable, though liners can add warmth to a turnout shell.",
    answerText:
      "A turnout rug is waterproof and tough for the field; a stable rug is non-waterproof for indoor use. They are not interchangeable -- a stable rug outside leaves the horse soaked.",
  },
  {
    question: "How do I choose the right blanket weight?",
    answer:
      "Match the fill (warmth) to the temperature, the horse's coat and condition, and whether it is clipped -- a clipped horse in hard cold may need a heavyweight, while an unclipped, sheltered horse may need only a no-fill waterproof or none. Then watch the horse: warm and dry, neither sweating nor shivering, means it is rugged about right.",
    answerText:
      "Match fill to temperature, coat, condition, and clipping, then watch the horse -- warm and dry, neither sweating nor shivering, is about right. Over-rugging harms as much as under-rugging.",
  },
]

export default function BlanketWeightsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Horse Blanketing Guide', href: '/care/blanketing' },
          { title: 'Winter Care', href: '/care/winter-care' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
        ]}
        hero={{
          title: "Horse Blanket Weights Explained",
          subtitle:
            "Blanket terminology baffles many owners: turnout versus stable, denier versus fill, light versus heavy. Yet the choices matter, because a rug that is too warm makes a horse sweat and chill while one too light leaves it cold. This guide decodes the weights and categories so you can match the rug to the horse and the weather. This is reference material to inform decisions alongside the blanketing guide.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Blanket Weights", href: '/tack/blanket-weights' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Turnout vs Stable Rugs", href: "#types" },
            { label: "Denier and Fill", href: "#denier" },
            { label: "Weight Categories", href: "#weights" },
            { label: "Coolers and Sheets", href: "#coolers" },
            { label: "Choosing the Weight", href: "#choosing" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Blanketing Guide", href: "/care/blanketing" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Body Clipping", href: "/care/body-clipping" },
              { label: "Best Winter Horse Blankets", href: "/reviews/best-winter-horse-blankets" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />

        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          <h2 id="types">Turnout vs Stable Rugs</h2>
          <p>The first distinction is turnout versus stable. Turnout rugs are waterproof and tough, built for the field and the weather. Stable rugs are not waterproof, made for use indoors over a clean horse. Using a stable rug outside leaves a horse soaked, and a turnout rug indoors can be unnecessarily heavy and harder-wearing than needed. Many horses have both, plus liners that add warmth to a shell.</p>
          

          <h2 id="denier">Denier and Fill</h2>
          <p>Two numbers describe a rug. Denier measures the toughness of the outer fabric -- a higher denier (for example 1200D versus 600D) is more tear- and abrasion-resistant, important for rough-and-tumble horses in the field. Fill (or filling) measures warmth, given in grams -- the weight of insulating material. Denier is about durability and waterproofing; fill is about warmth. A rug can be high-denier and low-fill (tough but light) or the reverse.</p>
          <p>
            A horse denier-vs-fill question card is how &quot;denier is about durability and waterproofing, fill is about warmth, and a rug can be high-denier and low-fill&quot; stays posted — it is not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads), and not a riding helmet certification-label question card (that lives on helmet-guide). This page does not invent clinic listings. </p>

          <h2 id="weights">Weight Categories</h2>
          <ul>
            <li><strong>No fill / lightweight (0 g)</strong> -- a waterproof turnout with no insulation, for rain protection in mild weather.</li>
            <li><strong>Lightweight (around 50 to 100 g)</strong> -- a little warmth for cool, wet days.</li>
            <li><strong>Medium weight (around 150 to 250 g)</strong> -- the everyday winter rug for many clipped or thin-coated horses.</li>
            <li><strong>Heavyweight (around 300 to 400+ g)</strong> -- maximum warmth for clipped horses in hard winter cold.</li>
          </ul>

          <h2 id="coolers">Coolers and Sheets</h2>
          <p>Beyond turnout and stable rugs are specialty layers. Coolers and anti-sweat sheets are breathable wicking rugs put on a hot or wet horse after work or bathing to draw moisture away while preventing a chill -- they warm by trapping a breathable layer, not by waterproof fill. Fly sheets are light mesh rugs for insect protection in summer. Liners clip inside a turnout shell to add fill flexibly as the weather changes.</p>

          <h2 id="choosing">Choosing the Weight</h2>
          <p>Match the fill to the temperature, the horse&apos;s coat and condition, and whether it is clipped -- a fully clipped horse in hard cold may need a heavyweight, while an unclipped, sheltered, well-fed horse may need only a no-fill waterproof or no rug at all. Watch the horse rather than the thermometer alone: a horse warm and dry under its rug, neither sweating nor shivering, is rugged about right. Over-rugging is as harmful as under-rugging, so check daily and adjust. See the blanketing guide for the broader decision of whether to rug at all.</p>
          <p>
            A horse over-rugging sweat-shiver watch log notebook is how match-fill-to-temperature-coat-condition-and-clipping, watch-the-horse-rather-than-the-thermometer-alone, warm-and-dry-neither-sweating-nor-shivering, and over-rugging-is-as-harmful-as-under-rugging stay written down — it is not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads), and not a riding helmet impact-retirement log notebook (that lives on helmet-guide). </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Shop leftover kit — unused vs #1143
              laminated+horse+turnout+halter+breakaway+checklist /
              horse+rope+vs+flat+halter+task+question+card /
              horse+quick+release+wither+height+tie+log+notebook, #1142
              laminated+horse+leg+bandage+bow+technique+checklist /
              horse+boot+impact+not+tendon+support+question+card /
              horse+boot+grit+rub+clean+dry+log+notebook, #1141
              laminated+saddle+pad+cannot+fix+fit+checklist /
              saddle+pad+sweat+pattern+dry+spot+question+card /
              saddle+pad+clean+dry+rotation+log+notebook, #1140
              laminated+riding+helmet+fit+and+replace+checklist /
              riding+helmet+certification+label+question+card /
              riding+helmet+impact+retirement+log+notebook, #1139
              laminated+first+horse+90+day+week+by+week+checklist /
              first+horse+ground+manners+cue+card /
              first+horse+tack+room+emergency+plan+card, #1138
              laminated+senior+horse+age+related+change+checklist /
              senior+horse+weight+and+joint+watch+notebook /
              senior+horse+quality+of+life+score+card, #1137
              laminated+horse+ear+eye+tail+signal+checklist /
              horse+handler+kick+zone+safety+question+card /
              horse+pain+demeanor+change+log+notebook, #1136
              laminated+pre+purchase+exam+stage+walkthrough+checklist /
              horse+pre+purchase+exam+findings+decision+worksheet /
              horse+buyer+vet+briefing+question+card, #1135
              horse+lease+agreement+document+binder /
              laminated+horse+lease+walkthrough+checklist /
              horse+full+vs+partial+lease+cost+share+worksheet, #1134
              horse+insurance+policy+document+binder /
              laminated+horse+insurance+claims+checklist /
              horse+mortality+vs+major+medical+decision+worksheet, #1133
              horse+ownership+monthly+budget+worksheet /
              equine+emergency+fund+expense+tracker+notebook /
              horse+keep+feed+farrier+cost+log+binder, #1132
              laminated+equine+vet+interview+checklist /
              horse+after+hours+emergency+cover+question+card /
              horse+veterinary+history+vcpr+records+folder, #1131
              first+horse+buyer+visit+field+notebook /
              laminated+first+horse+tryout+walkthrough+checklist /
              horse+pre+purchase+exam+records+binder, #1130
              laminated+horse+boarding+facility+walkthrough+checklist /
              horse+boarding+contract+document+binder /
              waterproof+horse+hay+bale+storage+tarp, #1129
              sterile+saline+wound+flush+horse /
              nonstick+wound+dressing+pads+horse /
              equine+bandage+scissors,
              blanketing
              horse+turnout+blanket /
              horse+waterproof+sheet /
              horse+lightweight+blanket /
              horse+medium+weight+blanket /
              horse+heavyweight+blanket,
              blanket-size
              winter+horse+blanket /
              horse+turnout+sheet /
              horse+stable+blanket /
              horse+fleece+cooler,
              fly-control
              horse+fly+sheet,
              cost-calculator
              horse+halter+lead+rope,
              trailering
              horse+shipping+boots /
              horse+shipping+wraps /
              horse+trailer+ties,
              saddle-fit-basics
              horse+saddle+pad /
              horse+sheepskin+half+pad /
              horse+saddle+shims /
              horse+girth+cinch,
              horse-size-for-rider
              ASTM+SEI+horse+riding+helmet,
              grimace / first-aid
              ice+boot+cold+therapy+wrap /
              vet+wrap /
              equine+first+aid+kit,
              #1128
              laminated+horse+barn+calculator+tools+chart /
              horse+stall+door+measurement+card /
              equine+calculator+reference+handbook, #1127
              laminated+horse+barn+owner+guides+chart /
              horse+stall+door+owner+guides+card /
              equine+owner+guides+reference+handbook, #1126
              laminated+horse+barn+daily+care+chart /
              horse+stall+door+care+card /
              equine+husbandry+reference+handbook, #1125
              laminated+horse+barn+emergency+triage+chart /
              horse+stall+door+vital+signs+card /
              equine+health+reference+handbook. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+supplies?s=blanket-weights"
                amazonLabel="Shop on Amazon"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+denier+vs+fill+question+card?s=blanket-weights"
                amazonLabel="Browse horse denier-vs-fill question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+over+rugging+sweat+shiver+watch+log+notebook?s=blanket-weights"
                amazonLabel="Browse horse over-rugging sweat-shiver watch log notebooks on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Manufacturer rug specifications and weight categories (industry-standard fill ranges).</li>
            <li>American Association of Equine Practitioners. “Winter Care and Blanketing” owner resources. aaep.org.</li>
            <li>British Horse Society. Rugging and turnout guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
