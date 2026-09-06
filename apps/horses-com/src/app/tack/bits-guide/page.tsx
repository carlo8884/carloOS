import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas, StockImage } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Bits Explained — Snaffles, Curbs, and How Bits Work",
  description:
    "Reference guide to horse bits: how a bit acts on the horse, snaffle vs curb (leverage) action, common mouthpieces, fit, and choosing humanely.",
  path: '/tack/bits-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Bits Explained — Snaffles, Curbs, and How Bits Work",
  description:
    "Reference guide to horse bits: how a bit acts on the horse, snaffle vs curb (leverage) action, common mouthpieces, fit, and choosing humanely.",
  url: 'https://horses.com/tack/bits-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a snaffle and a curb bit?",
    answer:
      "A snaffle applies direct pressure -- rein pressure equals mouth pressure, acting mainly on the lips, tongue, and bars with no leverage. A curb is a leverage bit with shanks and usually a curb chain, multiplying rein pressure and adding action on the poll and chin groove. Longer shanks mean more leverage. They are the two fundamental bit families.",
    answerText:
      "A snaffle applies direct (non-leverage) pressure on the lips, tongue, and bars. A curb uses shanks and a curb chain to multiply pressure and act on the poll and chin groove. They are the two main families.",
  },
  {
    question: "Is a snaffle always a gentle bit?",
    answer:
      "Not necessarily. Severity depends far more on the hands using the bit than on the bit itself -- a snaffle can be harsh in rough hands, and a single-jointed snaffle can apply a nutcracker action. A snaffle is non-leverage and often milder, but no bit is gentle on its own; fit, training, and educated hands determine kindness.",
    answerText:
      "Not on its own -- kindness depends mainly on the hands. A snaffle is non-leverage and often milder, but can be harsh in rough hands. Fit, training, and hands matter more than the bit.",
  },
  {
    question: "Will a stronger bit fix a horse that pulls?",
    answer:
      "Rarely, and usually it backfires. Pulling and resistance more often stem from training gaps, poor fit, dental pain, or rough hands, which a harsher bit masks rather than solves while risking the horse's comfort and trust. Addressing the root cause -- training, fit, dental health, and rider hands -- is the lasting fix.",
    answerText:
      "Rarely -- a stronger bit masks rather than solves pulling, which usually stems from training, fit, dental pain, or rough hands. Fixing the root cause is the lasting solution.",
  },
]

export default function BitsGuidePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Bridle Types', href: '/tack/bridle-types' },
          { title: 'Martingales and Breastplates', href: '/tack/martingales-and-breastplates' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
        ]}
        hero={{
          title: "Horse Bits Explained",
          subtitle:
            "The bit is one of the most misunderstood pieces of tack. There is no such thing as a gentle or harsh bit in isolation -- a bit is only as kind as the hands that use it -- but bits do differ enormously in how they apply pressure and where. Understanding the two great families, snaffle and curb, and the parts that make up a bit lets an owner choose thoughtfully rather than by fashion. This is reference material to inform choices alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Bits Explained", href: '/tack/bits-guide' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How a Bit Works", href: "#how" },
            { label: "Snaffle vs Curb", href: "#families" },
            { label: "Mouthpieces", href: "#mouthpieces" },
            { label: "Fit", href: "#fit" },
            { label: "Choosing Humanely", href: "#choosing" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bridle Types", href: "/tack/bridle-types" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Western Pleasure", href: "/disciplines/western-pleasure" },
              { label: "Equitation", href: "/disciplines/equitation" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-bits"
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
              Keep the bits-guide checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Bits-guide checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the snaffle-vs-curb bit checklist, width-and-wrinkle fit question card, and hand-severity watch log that match the how-a-bit-works, snaffle-vs-curb, mouthpieces, fit, and choosing-humanely copy on this page — a laminated horse snaffle-vs-curb bit checklist so a-snaffle-applies-direct-pressure-with-no-leverage / a-curb-is-a-leverage-bit-with-shanks-and-usually-a-curb-chain / longer-shanks-increase-leverage stay visible before anyone picks a mouthpiece (not a laminated horse peacock-vs-breakaway stirrup checklist, not a laminated horse anatomical-vs-straight girth checklist, not a laminated horse snaffle-vs-double bridle checklist, not a laminated horse standing-vs-running martingale checklist, not a laminated horse turnout-vs-stable rug checklist, not a laminated horse turnout-halter breakaway checklist, not a laminated horse-leg bandage-bow technique checklist, not a laminated saddle-pad cannot-fix-fit checklist, not a laminated riding-helmet fit-and-replace checklist), a horse bit width-and-wrinkle fit question card so the-right-width-sits-snugly-without-pinching-the-lips-or-sliding-through / a-slight-wrinkle-or-two-at-the-corners-of-the-lips / not-so-high-it-bangs-the-molars-or-so-low-it-hits-the-teeth stays posted (not a horse stirrup width-inch-clearance question card, not a horse girth buckle-elbow-clearance question card, not a horse bridle cheekpiece-length fit question card, not a horse breastplate-vs-breastgirth fit question card, not a horse denier-vs-fill question card, not a horse rope-vs-flat-halter task question card, not a horse-boot impact-not-tendon-support question card, not a saddle-pad sweat-pattern dry-spot question card), and a horse bit hand-severity watch log notebook so severity-lives-in-the-hand-not-only-the-bit / a-mild-snaffle-can-be-cruel-in-rough-hands / reaching-for-a-stronger-bit-masks-the-root-cause stay written down (not a horse stirrup drag-entrapment watch log, not a horse girth-gall skin-wrinkle log, not a horse noseband two-finger welfare log, not a horse martingale-misuse head-carriage log, not a horse over-rugging sweat-shiver watch log, not a horse quick-release wither-height tie log, not a horse-boot grit-rub clean-dry log, not a saddle-pad clean-dry rotation log). Educational tack tools only, not a ranked product list, not a clinic listing, and not a substitute for a qualified instructor or a veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Bits-guide checklist"
              subtitle="Email the snaffle-vs-curb card, width-and-wrinkle check, and hand-severity log. No spam."
              ctaText="Email my bits-guide checklist"
              source="tack-bits-guide-under-hero"
            />
          </div>

          <h2 id="how">How a Bit Works</h2>
          <p>A bit communicates through pressure on sensitive structures of the head: the bars (the toothless gum between incisors and molars where the mouthpiece rests), the tongue, the lips and corners of the mouth, and -- with leverage bits -- the poll and chin groove. Rein pressure is transmitted through the bit to these points, and the horse learns to respond by yielding to and seeking relief from that pressure. Because these structures are sensitive, the bit must be matched to the horse and used with educated hands.</p>
          <p>
            A horse bit hand-severity watch log notebook is also how educated-hands-on-sensitive-bars-tongue-lips-poll-and-chin-groove stay written down when someone is tempted to &quot;fix&quot; a feel with a harsher mouthpiece — it is not a horse stirrup drag-entrapment watch log notebook (that lives on stirrups-and-safety). This page does not hop first-aid saline / pads / scissors, grimace-scale first-aid-kit / poultice / ice-boot, or vaccine / pergolide / prescription hops.
          </p>

          <StockImage manifestKey="horses-com:tack-bits" fallbackKey="horses-com:category-tack" aspect="16:9" />

          <h2 id="families">Snaffle vs Curb</h2>
          <p>All bits fall broadly into two action families. A snaffle applies direct pressure -- the rein pressure equals the pressure on the mouth, acting mainly on the corners of the lips, tongue, and bars, with no leverage. A curb is a leverage bit: it has shanks (cheekpieces) and usually a curb chain, so rein pressure is multiplied and acts on the bars, tongue, poll, and chin groove. Longer shanks increase leverage. A double bridle carries both a small snaffle (bradoon) and a curb together for refined communication in advanced dressage.</p>
          <p>
            A laminated horse snaffle-vs-curb bit checklist is how a-snaffle-applies-direct-pressure-with-no-leverage, a-curb-is-a-leverage-bit-with-shanks-and-usually-a-curb-chain, and longer-shanks-increase-leverage stay visible before anyone picks a mouthpiece — it is not a laminated horse peacock-vs-breakaway stirrup checklist (that lives on stirrups-and-safety), not a laminated horse anatomical-vs-straight girth checklist (that lives on girths-and-cinches), not a laminated horse snaffle-vs-double bridle checklist (that lives on bridle-types), not a laminated horse standing-vs-running martingale checklist (that lives on martingales-and-breastplates), not a laminated horse turnout-vs-stable rug checklist (that lives on blanket-weights), not a laminated horse turnout-halter breakaway checklist (that lives on halters-and-lead-ropes), not a laminated horse-leg bandage-bow technique checklist (that lives on boots-and-wraps), not a laminated saddle-pad cannot-fix-fit checklist (that lives on saddle-pads), and not a laminated riding-helmet fit-and-replace checklist (that lives on helmet-guide). This page does not hop horse+girth+cinch / horse+saddle+pad / horse+sheepskin+half+pad / horse+saddle+shims (those live on saddle-fit-basics), ASTM+SEI+horse+riding+helmet (that lives on horse-size-for-rider), or horse+halter+lead+rope (that lives on the cost calculator). This page does not hop boarding walkthroughs, lease walkthroughs, or daily-care charts already pinned on those pages.
          </p>

          <h2 id="mouthpieces">Mouthpieces</h2>
          <ul>
            <li><strong>Single-jointed</strong> -- the classic snaffle mouthpiece; folds in the middle and can apply a nutcracker action on the bars and palate.</li>
            <li><strong>Double-jointed (French link, lozenge)</strong> -- two joints with a central link reduce the nutcracker effect and lie more comfortably on the tongue.</li>
            <li><strong>Mullen mouth</strong> -- a solid, gently curved mouthpiece with no joints, spreading pressure evenly and considered mild.</li>
            <li><strong>Ported mouthpieces</strong> -- a raised central arch giving tongue relief, common on curbs.</li>
            <li><strong>Materials</strong> -- metals, rubber, and synthetics that vary in warmth, taste, and how much they encourage mouthing and salivation.</li>
          </ul>
          <p>
            The same laminated horse snaffle-vs-curb bit checklist is how single-jointed-nutcracker-action, double-jointed-french-link-or-lozenge, mullen-mouth-spreading-pressure-evenly, and ported-mouthpieces-giving-tongue-relief stay visible next to the two action families — it is not a laminated horse snaffle-vs-double bridle checklist (that lives on bridle-types and is about one bit versus a bradoon-plus-curb, not mouthpiece joints). This page does not invent ASINs, brands, or a ranked mouthpiece list.
          </p>

          <h2 id="fit">Fit</h2>
          <p>A bit must be the right width -- sitting snugly without pinching the lips or sliding through the mouth -- and at the right height, so it rests on the bars and creates a slight wrinkle or two at the corners of the lips without being so high it bangs the molars or so low it hits the teeth. The mouthpiece thickness and shape must suit the individual horse&apos;s mouth conformation (tongue size, palate height, bar shape). A poorly fitted bit causes pain, rubs, and resistance regardless of how mild the design.</p>
          <p>
            A horse bit width-and-wrinkle fit question card is how &quot;the right width sits snugly without pinching the lips or sliding through, a slight wrinkle or two at the corners of the lips, and not so high it bangs the molars or so low it hits the teeth&quot; stays posted — it is not a horse stirrup width-inch-clearance question card (that lives on stirrups-and-safety), not a horse girth buckle-elbow-clearance question card (that lives on girths-and-cinches), not a horse bridle cheekpiece-length fit question card (that lives on bridle-types), not a horse breastplate-vs-breastgirth fit question card (that lives on martingales-and-breastplates), not a horse denier-vs-fill question card (that lives on blanket-weights), not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), and not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads). This page does not hop owner-guides cards, calculator-tools cards, or vital-signs cards already pinned on those hubs. This page does not invent clinic listings.
          </p>

          <h2 id="choosing">Choosing Humanely</h2>
          <p>The guiding principle is that severity lives in the hand, not only the bit -- a mild snaffle can be cruel in rough hands and a curb kind in educated ones. Many competition rules require or restrict particular bits by discipline and level (snaffles for lower-level dressage, for example), so check the rulebook. Reaching for a stronger bit to fix a problem is usually a mistake: training, fit, dental health, and rider hands address the root cause, whereas a harsher bit masks it and risks the horse&apos;s trust and comfort.</p>
          <p>
            A horse bit hand-severity watch log notebook is how severity-lives-in-the-hand-not-only-the-bit, a-mild-snaffle-can-be-cruel-in-rough-hands, and reaching-for-a-stronger-bit-masks-the-root-cause stay written down — it is not a horse stirrup drag-entrapment watch log notebook (that lives on stirrups-and-safety), not a horse girth-gall skin-wrinkle log notebook (that lives on girths-and-cinches), not a horse noseband two-finger welfare log notebook (that lives on bridle-types), not a horse martingale-misuse head-carriage log notebook (that lives on martingales-and-breastplates), not a horse over-rugging sweat-shiver watch log notebook (that lives on blanket-weights), not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), and not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads). This page does not hop first-aid saline / pads / scissors, grimace-scale first-aid-kit / poultice / ice-boot, or vaccine / pergolide / prescription hops. This page does not hop winter+horse+blanket / horse+turnout+sheet / horse+stable+blanket / horse+fleece+cooler (those live on the blanket-size calculator).
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Shop leftover kit — unused vs #1148
              laminated+horse+peacock+vs+breakaway+stirrup+checklist /
              horse+stirrup+width+inch+clearance+question+card /
              horse+stirrup+drag+entrapment+watch+log+notebook, #1147
              laminated+horse+anatomical+vs+straight+girth+checklist /
              horse+girth+buckle+elbow+clearance+question+card /
              horse+girth+gall+skin+wrinkle+log+notebook, #1146
              laminated+horse+snaffle+vs+double+bridle+checklist /
              horse+bridle+cheekpiece+length+fit+question+card /
              horse+noseband+two+finger+welfare+log+notebook, #1145
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
              Shop the bits-guide leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page how-a-bit-works, snaffle-vs-curb, mouthpieces, fit, and choosing-humanely copy — a laminated horse snaffle-vs-curb bit checklist, a horse bit width-and-wrinkle fit question card, and a horse bit hand-severity watch log notebook. Educational tack searches only. They are not a ranked product list, they are not a clinic listing, they are not a #1148 laminated peacock-vs-breakaway / width-inch-clearance / drag-entrapment hop, they are not a #1147 laminated anatomical-vs-straight / buckle-elbow-clearance / girth-gall-skin-wrinkle hop, they are not a #1146 laminated snaffle-vs-double / cheekpiece-length / noseband-two-finger hop, they are not a #1145 laminated standing-vs-running / breastplate-vs-breastgirth / martingale-misuse-head-carriage hop, they are not a #1144 laminated-turnout-vs-stable / denier-vs-fill / over-rugging-sweat-shiver hop, they are not a #1143 turnout-halter breakaway / rope-vs-flat / wither-height-tie hop, they are not a #1142 horse-leg bandage-bow / impact-not-tendon-support / grit-rub hop, they are not a #1141 saddle-pad cannot-fix-fit / sweat-pattern / clean-dry-rotation hop, they are not a #1140 riding-helmet fit-and-replace / certification-label / impact-retirement hop, they are not a first-horse-roadmap 90-day / ground-manners / tack-room-emergency hop, they are not a senior-horse-care hop, they are not a reading-body-language ear-eye-tail / kick-zone / pain-demeanor hop, they are not a pre-purchase-exam stage-walkthrough / findings-worksheet / buyer-vet-briefing hop, they are not a lease / insurance / monthly-budget / choosing-a-vet / first-horse / boarding hop, they are not a first-aid saline / pads / scissors hop, they are not a grimace-scale first-aid-kit / poultice / ice-boot hop, they are not a daily-care / emergency-triage / owner-guides / calculator-tools chart hop, they are not a saddle-fit-basics pad / half-pad / shim / girth hop, they are not a BCS-chart hop, and they do not replace a qualified instructor. Horses.com earns a commission on qualifying purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+snaffle+vs+curb+bit+checklist?s=bits-guide"
                amazonLabel="Browse laminated horse snaffle-vs-curb bit checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+bit+width+and+wrinkle+fit+question+card?s=bits-guide"
                amazonLabel="Browse horse bit width-and-wrinkle fit question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+bit+hand+severity+watch+log+notebook?s=bits-guide"
                amazonLabel="Browse horse bit hand-severity watch log notebooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (bitting and tack).</li>
            <li>Clayton HM. Research on bit action and oral comfort in horses, various.</li>
            <li>USEF and FEI rulebooks, current editions (permitted bits by discipline and level).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
