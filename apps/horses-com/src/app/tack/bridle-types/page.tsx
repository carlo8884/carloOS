import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Bridle Types — Snaffle, Double, Western, and Bitless",
  description:
    "Reference guide to bridle types: the parts of a bridle, English snaffle and double bridles, western headstalls, bitless options, fit, and noseband basics.",
  path: '/tack/bridle-types',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Bridle Types — Snaffle, Double, Western, and Bitless",
  description:
    "Reference guide to bridle types: the parts of a bridle, English snaffle and double bridles, western headstalls, bitless options, fit, and noseband basics.",
  url: 'https://horses.com/tack/bridle-types',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is a double bridle used for?",
    answer:
      "A double bridle carries two bits -- a small snaffle (bradoon) and a curb -- on two pairs of reins, allowing very refined communication. It is used in upper-level dressage and some showing, and it demands an educated, independent rider hand. Lower-level riders use a single snaffle bridle, which is required at the lower dressage levels.",
    answerText:
      "It carries a snaffle and a curb on two reins for refined communication in upper-level dressage and showing, and demands an educated hand. Lower levels use a single snaffle bridle.",
  },
  {
    question: "Are bitless bridles gentler than bitted ones?",
    answer:
      "Not automatically. Bitless bridles apply pressure to the nose, jaw, and poll instead of the mouth, and some -- like the mechanical hackamore with its leverage shanks -- can be quite strong. As with bits, the kindness depends on the design, the fit, and above all the rider's hands. Competition eligibility for bitless also varies by discipline.",
    answerText:
      "Not automatically -- they pressure the nose, jaw, and poll, and some (like mechanical hackamores) can be strong. Kindness depends on design, fit, and hands, as with bits.",
  },
  {
    question: "How tight should a noseband be?",
    answer:
      "A noseband should be fitted loosely enough to allow the horse to chew and move its jaw comfortably -- research and many rulebooks now require room for at least a couple of fingers under the band. Over-tightened nosebands are a welfare concern, causing discomfort and restricting natural jaw movement, and should be avoided.",
    answerText:
      "Loosely enough to allow chewing and jaw movement -- many rules now require room for a couple of fingers under it. Over-tight nosebands are a welfare concern to avoid.",
  },
]

export default function BridleTypesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Bits Guide', href: '/tack/bits-guide' },
          { title: 'Martingales and Breastplates', href: '/tack/martingales-and-breastplates' },
          { title: 'Halters and Lead Ropes', href: '/tack/halters-and-lead-ropes' },
        ]}
        hero={{
          title: "Horse Bridle Types",
          subtitle:
            "The bridle holds the bit (or, in bitless designs, applies pressure directly) and carries the reins through which the rider communicates. Beneath the variety of English, western, and bitless styles lies a common set of parts and a common purpose. Understanding the types and how they fit helps an owner choose appropriately for the horse and discipline. This is reference material to inform choices alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Bridle Types", href: '/tack/bridle-types' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Parts of a Bridle", href: "#parts" },
            { label: "English Bridles", href: "#english" },
            { label: "Western Headstalls", href: "#western" },
            { label: "Bitless Bridles", href: "#bitless" },
            { label: "Nosebands", href: "#nosebands" },
            { label: "Fit", href: "#fit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bits Explained", href: "/tack/bits-guide" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
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

          <h2 id="parts">Parts of a Bridle</h2>
          <ul>
            <li><strong>Headpiece (crownpiece)</strong> over the poll, from which the bridle hangs.</li>
            <li><strong>Cheekpieces</strong> running down each side to attach the bit.</li>
            <li><strong>Browband</strong> across the forehead, preventing the bridle sliding back.</li>
            <li><strong>Throatlatch</strong> under the throat, stopping the bridle pulling off over the head.</li>
            <li><strong>Noseband (cavesson)</strong> around the nose, with various designs and purposes.</li>
            <li><strong>Reins</strong> the rider connection to the bit or bitless mechanism.</li>
          </ul>

          <h2 id="english">English Bridles</h2>
          <p>The standard English bridle is the snaffle bridle, carrying a single bit and one pair of reins, used across most English disciplines and lower-level dressage. The double bridle carries two bits -- a small snaffle (bradoon) and a curb -- on two pairs of reins, used in upper-level dressage and showing to refine communication; it demands an educated, independent hand. Bridles vary in leather weight and styling, from heavy hunting bridles to fine, elegant show bridles.</p>
          

          <h2 id="western">Western Headstalls</h2>
          <p>Western bridles, called headstalls, are typically simpler in appearance and often have no noseband. Common styles include the browband headstall and the one-ear or split-ear headstall (a loop around one ear in place of a browband). Western riding traditionally uses a curb bit ridden on a loose rein with neck-reining, so western headstalls are built around that style. Decorative tooling, silver, and rawhide reflect the western tradition.</p>

          <h2 id="bitless">Bitless Bridles</h2>
          <p>Bitless bridles apply pressure to the nose, jaw, poll, and cheeks rather than the mouth. Types include the side-pull (direct nose pressure), the bosal hackamore of the western tradition (a rawhide noseband acting on the nose and jaw), the mechanical hackamore (leverage shanks acting on the nose and poll, which can be quite strong), and cross-under designs. Bitless is not automatically gentler -- a mechanical hackamore can apply considerable force -- and, like bits, depends on the hands and fit. Competition eligibility for bitless varies by discipline and rulebook.</p>

          <h2 id="nosebands">Nosebands</h2>
          <ul>
            <li><strong>Cavesson</strong> -- the simple, standard noseband; should be fitted to allow comfort and jaw movement.</li>
            <li><strong>Flash</strong> -- a cavesson with an added lower strap, intended to keep the mouth closed and the bit stable.</li>
            <li><strong>Drop and grackle (figure-eight)</strong> -- act lower on the nose, used to discourage the mouth gaping or crossing the jaw.</li>
            <li><strong>Welfare note</strong> -- nosebands must not be over-tightened; research and many rules now require room for at least a couple of fingers under the band.</li>
          </ul>
          <p>
            A horse noseband two-finger welfare log notebook is how a-couple-of-fingers-under-the-band, over-tightened-nosebands-are-a-welfare-concern, and the-horse-must-still-chew-and-move-its-jaw stay written down — it is not a horse martingale-misuse head-carriage log notebook (that lives on martingales-and-breastplates), not a horse over-rugging sweat-shiver watch log notebook (that lives on blanket-weights), not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), and not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads). </p>

          <h2 id="fit">Fit</h2>
          <p>A well-fitted bridle sits without pinching or rubbing: the browband does not pull the headpiece into the ears, the throatlatch is loose enough to allow flexion (roughly a hand&apos;s width), the bit sits at the correct height, and the noseband is positioned correctly and fitted loosely enough to allow chewing and comfort. Check for rubs behind the ears and at the corners of the mouth. Like all tack, a bridle that fits poorly causes pain and resistance no matter how good the riding.</p>
          <p>
            A horse bridle cheekpiece-length fit question card is how &quot;cheekpieces run down each side to attach the bit, the bit sits at the correct height, and the browband does not pull the headpiece into the ears&quot; stays posted — it is not a horse breastplate-vs-breastgirth fit question card (that lives on martingales-and-breastplates), not a horse denier-vs-fill question card (that lives on blanket-weights), not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), and not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads). This page does not invent clinic listings. </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Shop leftover kit — unused vs #1145
              laminated+horse+standing+vs+running+martingale+checklist /
              horse+breastplate+vs+breastgirth+fit+question+card /
              horse+martingale+misuse+head+carriage+log+notebook, #1144
              laminated+horse+turnout+vs+stable+rug+checklist /
              horse+denier+vs+fill+question+card /
              horse+over+rugging+sweat+shiver+watch+log+notebook, #1143
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
                amazonHref="/go/amazon-brand/horse+supplies?s=bridle-types"
                amazonLabel="Shop on Amazon"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+bridle+cheekpiece+length+fit+question+card?s=bridle-types"
                amazonLabel="Browse horse bridle cheekpiece-length fit question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+noseband+two+finger+welfare+log+notebook?s=bridle-types"
                amazonLabel="Browse horse noseband two-finger welfare log notebooks on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (bridles and fitting).</li>
            <li>International Society for Equitation Science. Noseband-tightness and tack-fit research and position statements.</li>
            <li>USEF and FEI rulebooks, current editions (permitted bridles and bitless eligibility).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
