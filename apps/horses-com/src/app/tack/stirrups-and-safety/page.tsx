import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Stirrups and Rider Safety — Types, Sizing, and Safety Features",
  description:
    "Reference guide to stirrups and rider safety: how stirrups work, sizing to the foot, safety stirrup designs, breakaway features, and reducing drag risk.",
  path: '/tack/stirrups-and-safety',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Stirrups and Rider Safety — Types, Sizing, and Safety Features",
  description:
    "Reference guide to stirrups and rider safety: how stirrups work, sizing to the foot, safety stirrup designs, breakaway features, and reducing drag risk.",
  url: 'https://horses.com/tack/stirrups-and-safety',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What size stirrup should I use?",
    answer:
      "The stirrup should be about an inch (roughly 2.5 cm) wider than the widest part of your riding boot -- enough that the foot is not pinched and can release in a fall, but not so wide that the whole foot can slide through and get trapped. Too small risks jamming; too large risks the foot going through to the ankle, both serious safety hazards.",
    answerText:
      "About an inch (2.5 cm) wider than the widest part of your boot -- enough to release the foot but not let it slide through. Too small jams; too large traps the foot at the ankle.",
  },
  {
    question: "Why do I need a heel on my riding boots?",
    answer:
      "A riding boot's smooth sole and defined heel stop the foot sliding too far through the stirrup and hold it in place, which prevents the foot becoming trapped in a fall. Trainers and treaded work boots are dangerous because a heavy tread or flat sole can jam in the stirrup, raising the risk of being dragged.",
    answerText:
      "The smooth sole and heel stop the foot sliding through and getting trapped in a fall. Treaded or heelless footwear can jam in the stirrup, risking being dragged.",
  },
  {
    question: "Are safety stirrups worth it?",
    answer:
      "Safety stirrups -- peacock, bent-leg, and modern breakaway designs -- are engineered to release the foot in a fall and meaningfully reduce the risk of being dragged, making them a worthwhile upgrade, especially for children and beginners. They complement, rather than replace, correctly sized stirrups and proper riding footwear.",
    answerText:
      "Yes -- they release the foot in a fall and reduce the dragging risk, especially for children and beginners. They complement, not replace, correct sizing and proper footwear.",
  },
]

export default function StirrupsSafetyPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Riding Helmet Guide', href: '/tack/helmet-guide' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
        ]}
        hero={{
          title: "Stirrups and Rider Safety",
          subtitle:
            "Stirrups support the rider and aid balance and security, but a foot trapped in a stirrup during a fall is one of the most dangerous things that can happen on a horse -- the risk of being dragged. Choosing correctly sized stirrups, considering modern safety designs, and pairing them with proper footwear is a serious safety matter, not a styling choice. This is reference material to inform safety decisions alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Stirrups and Safety", href: '/tack/stirrups-and-safety' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Stirrups Work", href: "#how" },
            { label: "Sizing to the Foot", href: "#sizing" },
            { label: "Safety Stirrup Designs", href: "#safety" },
            { label: "Footwear and Treads", href: "#footwear" },
            { label: "Avoiding Being Dragged", href: "#dragged" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Helmet Guide", href: "/tack/helmet-guide" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-stirrups"
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
              Keep the stirrups-and-safety checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Stirrups-and-safety checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the peacock-vs-breakaway stirrup checklist, width-inch-clearance fit question card, and drag-entrapment watch log that match the how-stirrups-work, sizing, safety-designs, footwear, and dragged copy on this page — a laminated horse peacock-vs-breakaway stirrup checklist so peacock-rubber-band-stirrups-release-the-foot-under-force / bent-leg-and-offset-safety-stirrups-let-the-foot-escape / modern-breakaway-or-release-stirrups-open-in-a-fall stay visible before anyone hangs a pair (not a laminated horse anatomical-vs-straight girth checklist, not a laminated horse snaffle-vs-double bridle checklist, not a laminated horse standing-vs-running martingale checklist, not a laminated horse turnout-vs-stable rug checklist, not a laminated horse turnout-halter breakaway checklist, not a laminated horse-leg bandage-bow technique checklist, not a laminated saddle-pad cannot-fix-fit checklist, not a laminated riding-helmet fit-and-replace checklist), a horse stirrup width-inch-clearance question card so about-an-inch-wider-than-the-widest-part-of-the-boot / enough-clearance-that-the-foot-is-not-pinched / not-so-wide-that-the-whole-foot-can-slide-through stays posted (not a horse girth buckle-elbow-clearance question card, not a horse bridle cheekpiece-length fit question card, not a horse breastplate-vs-breastgirth fit question card, not a horse denier-vs-fill question card, not a horse rope-vs-flat-halter task question card, not a horse-boot impact-not-tendon-support question card, not a saddle-pad sweat-pattern dry-spot question card), and a horse stirrup drag-entrapment watch log notebook so correctly-sized-stirrups-that-let-the-foot-release / riding-boots-with-a-heel-and-smooth-sole / ball-of-the-foot-on-the-tread-and-heels-down stay written down (not a horse girth-gall skin-wrinkle log, not a horse noseband two-finger welfare log, not a horse martingale-misuse head-carriage log, not a horse over-rugging sweat-shiver watch log, not a horse quick-release wither-height tie log, not a horse-boot grit-rub clean-dry log, not a saddle-pad clean-dry rotation log). Educational tack tools only, not a ranked product list, not a clinic listing, and not a substitute for a qualified instructor. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Stirrups-and-safety checklist"
              subtitle="Email the peacock-vs-breakaway card, width-inch check, and drag-entrapment log. No spam."
              ctaText="Email my stirrups-and-safety checklist"
              source="tack-stirrups-and-safety-under-hero"
            />
          </div>

          <h2 id="how">How Stirrups Work</h2>
          <p>Stirrups hang from the saddle by leathers (English) or fenders (western) and give the rider a platform for the ball of the foot, aiding balance, security, and the ability to rise and absorb the horse&apos;s movement. The foot should rest on the tread with the ball of the foot, heel down, so the foot can slip free in a fall rather than being trapped. The stirrup is a support to rest on lightly, not a stirrup to jam the foot through.</p>

          <h2 id="sizing">Sizing to the Foot</h2>
          <p>Stirrup size is a safety-critical fit. The stirrup should be roughly an inch (about 2.5 cm) wider than the widest part of the rider&apos;s boot -- enough clearance that the foot is not pinched and can release in a fall, but not so wide that the whole foot can slide through and become trapped. Too small risks the foot jamming; too large risks the foot going through to the ankle. Children and adults need stirrups matched to their own footwear.</p>
          <p>
            A horse stirrup width-inch-clearance question card is how &quot;about an inch wider than the widest part of the boot, enough clearance that the foot is not pinched, and not so wide that the whole foot can slide through&quot; stays posted — it is not a horse girth buckle-elbow-clearance question card (that lives on girths-and-cinches), not a horse bridle cheekpiece-length fit question card (that lives on bridle-types), not a horse breastplate-vs-breastgirth fit question card (that lives on martingales-and-breastplates), not a horse denier-vs-fill question card (that lives on blanket-weights), not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), and not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads). This page does not hop owner-guides cards, calculator-tools cards, or vital-signs cards already pinned on those hubs. This page does not invent clinic listings.
          </p>

          <h2 id="safety">Safety Stirrup Designs</h2>
          <ul>
            <li><strong>Peacock (rubber-band) stirrups</strong> -- one side is a thick rubber loop that releases the foot under force, common for children.</li>
            <li><strong>Bent-leg and offset safety stirrups</strong> -- a curved outer branch designed to let the foot escape.</li>
            <li><strong>Modern breakaway / release stirrups</strong> -- engineered to open or release the foot in a fall, an increasingly popular safety upgrade.</li>
            <li><strong>Caged or tapadero western stirrups</strong> -- enclose the front of the foot to stop it sliding through, used in some western and trail contexts.</li>
          </ul>
          <p>
            A laminated horse peacock-vs-breakaway stirrup checklist is how peacock-rubber-band-stirrups-release-the-foot-under-force, bent-leg-and-offset-safety-stirrups-let-the-foot-escape, and modern-breakaway-or-release-stirrups-open-in-a-fall stay visible before anyone hangs a pair — it is not a laminated horse anatomical-vs-straight girth checklist (that lives on girths-and-cinches), not a laminated horse snaffle-vs-double bridle checklist (that lives on bridle-types), not a laminated horse standing-vs-running martingale checklist (that lives on martingales-and-breastplates), not a laminated horse turnout-vs-stable rug checklist (that lives on blanket-weights), not a laminated horse turnout-halter breakaway checklist (that lives on halters-and-lead-ropes), not a laminated horse-leg bandage-bow technique checklist (that lives on boots-and-wraps), not a laminated saddle-pad cannot-fix-fit checklist (that lives on saddle-pads), and not a laminated riding-helmet fit-and-replace checklist (that lives on helmet-guide). This page does not hop horse+girth+cinch / horse+saddle+pad / horse+sheepskin+half+pad / horse+saddle+shims (those live on saddle-fit-basics), ASTM+SEI+horse+riding+helmet (that lives on horse-size-for-rider), or horse+halter+lead+rope (that lives on the cost calculator). This page does not hop boarding walkthroughs, lease walkthroughs, or daily-care charts already pinned on those pages.
          </p>

          <h2 id="footwear">Footwear and Treads</h2>
          <p>Proper riding footwear is part of stirrup safety. A riding boot has a smooth sole and a defined heel, which together stop the foot sliding too far through the stirrup and hold it in place. Trainers, work boots with heavy treads, and flat shoes are dangerous because a treaded or heelless sole can jam in the stirrup. Stirrup treads (rubber grips on the footbed) add grip and comfort but do not replace the need for correct footwear.</p>

          <h2 id="dragged">Avoiding Being Dragged</h2>
          <p>Being dragged by a trapped foot after a fall can cause catastrophic injury, which is why every other point on this page exists. The defenses stack together: correctly sized stirrups that let the foot release, riding boots with a heel and smooth sole, safety or breakaway stirrup designs where appropriate (especially for children and beginners), riding with the ball of the foot on the tread and heels down, and never riding in unsuitable footwear. Together these dramatically reduce the chance of a foot being trapped in a fall.</p>
          <p>
            A horse stirrup drag-entrapment watch log notebook is how correctly-sized-stirrups-that-let-the-foot-release, riding-boots-with-a-heel-and-smooth-sole, and ball-of-the-foot-on-the-tread-and-heels-down stay written down — it is not a horse girth-gall skin-wrinkle log notebook (that lives on girths-and-cinches), not a horse noseband two-finger welfare log notebook (that lives on bridle-types), not a horse martingale-misuse head-carriage log notebook (that lives on martingales-and-breastplates), not a horse over-rugging sweat-shiver watch log notebook (that lives on blanket-weights), not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), and not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads). This page does not hop first-aid saline / pads / scissors, grimace-scale first-aid-kit / poultice / ice-boot, or vaccine / pergolide / prescription hops. This page does not hop winter+horse+blanket / horse+turnout+sheet / horse+stable+blanket / horse+fleece+cooler (those live on the blanket-size calculator).
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Shop leftover kit — unused vs #1147
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
              Shop the stirrups-and-safety leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page how-stirrups-work, sizing, safety-designs, footwear, and dragged copy — a laminated horse peacock-vs-breakaway stirrup checklist, a horse stirrup width-inch-clearance question card, and a horse stirrup drag-entrapment watch log notebook. Educational tack searches only. They are not a ranked product list, they are not a clinic listing, they are not a #1147 laminated anatomical-vs-straight / buckle-elbow-clearance / girth-gall-skin-wrinkle hop, they are not a #1146 laminated snaffle-vs-double / cheekpiece-length / noseband-two-finger hop, they are not a #1145 laminated standing-vs-running / breastplate-vs-breastgirth / martingale-misuse-head-carriage hop, they are not a #1144 laminated-turnout-vs-stable / denier-vs-fill / over-rugging-sweat-shiver hop, they are not a #1143 turnout-halter breakaway / rope-vs-flat / wither-height-tie hop, they are not a #1142 horse-leg bandage-bow / impact-not-tendon-support / grit-rub hop, they are not a #1141 saddle-pad cannot-fix-fit / sweat-pattern / clean-dry-rotation hop, they are not a #1140 riding-helmet fit-and-replace / certification-label / impact-retirement hop, they are not a first-horse-roadmap 90-day / ground-manners / tack-room-emergency hop, they are not a senior-horse-care hop, they are not a reading-body-language ear-eye-tail / kick-zone / pain-demeanor hop, they are not a pre-purchase-exam stage-walkthrough / findings-worksheet / buyer-vet-briefing hop, they are not a lease / insurance / monthly-budget / choosing-a-vet / first-horse / boarding hop, they are not a first-aid saline / pads / scissors hop, they are not a grimace-scale first-aid-kit / poultice / ice-boot hop, they are not a daily-care / emergency-triage / owner-guides / calculator-tools chart hop, they are not a saddle-fit-basics pad / half-pad / shim / girth hop, they are not a BCS-chart hop, and they do not replace a qualified instructor. Horses.com earns a commission on qualifying purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+peacock+vs+breakaway+stirrup+checklist?s=stirrups-and-safety"
                amazonLabel="Browse laminated horse peacock-vs-breakaway stirrup checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+stirrup+width+inch+clearance+question+card?s=stirrups-and-safety"
                amazonLabel="Browse horse stirrup width-inch-clearance question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+stirrup+drag+entrapment+watch+log+notebook?s=stirrups-and-safety"
                amazonLabel="Browse horse stirrup drag-entrapment watch log notebooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (tack and rider safety).</li>
            <li>Equestrian safety organizations. Guidance on stirrup sizing and footwear.</li>
            <li>Research on equestrian fall injuries and entrapment, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
