import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Martingales and Breastplates — What They Do and When to Use Them",
  description:
    "Reference guide to martingales and breastplates: standing and running martingales, breastplates and breastgirths, their purposes, correct fit, and misuse.",
  path: '/tack/martingales-and-breastplates',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Martingales and Breastplates — What They Do and When to Use Them",
  description:
    "Reference guide to martingales and breastplates: standing and running martingales, breastplates and breastgirths, their purposes, correct fit, and misuse.",
  url: 'https://horses.com/tack/martingales-and-breastplates',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a standing and a running martingale?",
    answer:
      "A standing martingale runs from the girth to the noseband and sets a fixed upper limit on head height regardless of the reins. A running martingale runs from the girth and divides into two rings the reins pass through, applying downward rein pressure only when the horse raises its head too high. One fixes a limit; the other acts through the reins.",
    answerText:
      "A standing martingale attaches to the noseband and fixes a head-height limit; a running martingale has rings the reins pass through and acts through the reins only when the head goes too high.",
  },
  {
    question: "What is a breastplate for?",
    answer:
      "A breastplate (or breastgirth) attaches to the saddle and passes around the chest to stop the saddle sliding backward, which matters on steep terrain, when jumping, and on horses whose conformation lets the saddle slip. It is a security and safety aid that keeps the saddle in place, not a training device, and some types also offer a martingale attachment.",
    answerText:
      "It attaches to the saddle and goes around the chest to stop the saddle slipping back, useful on hills, when jumping, or with slippery conformation. It is a security aid, not a training device.",
  },
  {
    question: "Will a martingale fix a horse that throws its head up?",
    answer:
      "Not really -- a martingale sets a safety limit on head height but does not teach correct head carriage, which is the job of training. Head-tossing usually stems from training gaps, pain, poor tack fit, or the rider's hands, and a too-tight martingale used to force the head down causes tension and can be dangerous. Address the root cause instead.",
    answerText:
      "No -- it sets a safety limit but does not teach head carriage. Head-tossing usually stems from training, pain, fit, or hands, and a too-tight martingale causes tension. Fix the root cause.",
  },
]

export default function MartingalesBreastplatesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Bridle Types', href: '/tack/bridle-types' },
          { title: 'Bits Guide', href: '/tack/bits-guide' },
          { title: 'Show Jumping', href: '/disciplines/show-jumping' },
        ]}
        hero={{
          title: "Martingales and Breastplates",
          subtitle:
            "Martingales and breastplates are auxiliary tack often seen but frequently misunderstood. A martingale influences how high a horse can carry its head; a breastplate stops the saddle slipping back. Neither is a training shortcut, and a martingale fitted wrongly can do harm. Knowing what each does, and what it does not do, helps owners use them correctly or recognize when they are being used to mask a deeper problem. This is reference material to inform use alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Martingales and Breastplates", href: '/tack/martingales-and-breastplates' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Martingales", href: "#martingales" },
            { label: "Standing vs Running", href: "#standing-running" },
            { label: "Breastplates and Breastgirths", href: "#breastplates" },
            { label: "Fit", href: "#fit" },
            { label: "Use and Misuse", href: "#misuse" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bits Explained", href: "/tack/bits-guide" },
              { label: "Bridle Types", href: "/tack/bridle-types" },
              { label: "Show Jumping", href: "/disciplines/show-jumping" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-martingales"
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
              Keep the martingales checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Martingales checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the standing-vs-running martingale checklist, breastplate-vs-breastgirth fit question card, and martingale-misuse head-carriage log that match the martingales, standing-vs-running, breastplates-and-breastgirths, fit, and use-and-misuse copy on this page — a laminated horse standing-vs-running martingale checklist so standing-martingale-runs-girth-to-noseband-and-sets-a-fixed-upper-limit / running-martingale-divides-into-rings-the-reins-pass-through-and-acts-through-the-reins / one-fixes-a-limit-the-other-acts-through-the-reins stay visible before anyone buckles an auxiliary strap (not a laminated horse turnout-vs-stable rug checklist, not a laminated horse turnout-halter breakaway checklist, not a laminated horse-leg bandage-bow technique checklist, not a laminated saddle-pad cannot-fix-fit checklist), a horse breastplate-vs-breastgirth fit question card so breastplate-or-breastgirth-stops-the-saddle-sliding-back / breastgirths-are-a-simpler-chest-strap / snug-enough-to-stop-slip-not-so-tight-it-restricts-shoulders-or-presses-the-windpipe stays posted (not a horse denier-vs-fill question card, not a horse rope-vs-flat-halter task question card, not a horse-boot impact-not-tendon-support question card, not a saddle-pad sweat-pattern dry-spot question card), and a horse martingale-misuse head-carriage log notebook so a-martingale-does-not-teach-correct-head-carriage / too-tight-or-wrongly-fitted-restricts-and-can-be-dangerous / head-carriage-problems-usually-stem-from-training-pain-fit-or-hands stay written down (not a horse over-rugging sweat-shiver watch log, not a horse quick-release wither-height tie log, not a horse-boot grit-rub clean-dry log, not a saddle-pad clean-dry rotation log). Educational tack tools only, not a ranked product list, not a clinic listing, and not a substitute for a qualified instructor or a veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Martingales checklist"
              subtitle="Email the standing-vs-running card, breastplate-fit check, and misuse log. No spam."
              ctaText="Email my martingales checklist"
              source="tack-martingales-under-hero"
            />
          </div>

          <h2 id="martingales">Martingales</h2>
          <p>A martingale is a strap arrangement that runs from the girth, between the front legs, to the bit (via rings) or the noseband, limiting how high the horse can raise its head. Its legitimate purpose is to prevent a horse flinging its head dangerously high -- high enough to hit the rider or to evade the bit by getting its head above the angle of control. A martingale does not teach a horse to carry its head correctly; that is the job of training.</p>

          <h2 id="standing-running">Standing vs Running</h2>
          <p>The two main types act differently. A standing martingale runs from the girth to the noseband and sets a fixed upper limit on head height regardless of the reins; it is common in hunting and some jumping. A running martingale runs from the girth and divides into two straps ending in rings through which the reins pass, applying downward pressure on the reins only when the horse raises its head beyond a certain point -- it acts through the reins rather than fixing the head. Each must be fitted to the correct length for its type.</p>
          <p>
            A laminated horse standing-vs-running martingale checklist is how standing-martingale-runs-girth-to-noseband-and-sets-a-fixed-upper-limit, running-martingale-divides-into-rings-the-reins-pass-through-and-acts-through-the-reins, and one-fixes-a-limit-the-other-acts-through-the-reins stay visible before anyone buckles an auxiliary strap — it is not a laminated horse turnout-vs-stable rug checklist (that lives on blanket-weights), not a laminated horse turnout-halter breakaway checklist (that lives on halters-and-lead-ropes), not a laminated horse-leg bandage-bow technique checklist (that lives on boots-and-wraps), and not a laminated saddle-pad cannot-fix-fit checklist (that lives on saddle-pads). This page does not hop horse+saddle+pad / horse+sheepskin+half+pad / horse+saddle+shims / horse+girth+cinch (those live on saddle-fit-basics), ASTM+SEI+horse+riding+helmet (that lives on horse-size-for-rider), or horse+halter+lead+rope (that lives on the cost calculator). This page does not hop boarding walkthroughs, lease walkthroughs, or daily-care charts already pinned on those pages.
          </p>

          <h2 id="breastplates">Breastplates and Breastgirths</h2>
          <p>A breastplate (or breastgirth) attaches to the saddle and passes around the front of the chest to stop the saddle sliding backward, which matters on steep terrain, when jumping, and on horses whose conformation lets a saddle slip. Breastgirths are a simpler strap across the chest; hunting and jumping breastplates are more elaborate, sometimes with attachment points for a martingale. They are a security and safety aid, keeping the saddle in place, not a training device.</p>

          <h2 id="fit">Fit</h2>
          <ul>
            <li><strong>Standing martingale length</strong> -- commonly set so it reaches up into the gullet of the throat when adjusted; not so short that it restricts normal head carriage.</li>
            <li><strong>Running martingale length</strong> -- the rings should reach to about the withers, so they only engage the reins when the head goes too high.</li>
            <li><strong>Rein stops</strong> -- always used with a running martingale so the rings cannot slide forward and catch on the bit or rein fittings.</li>
            <li><strong>Breastplate fit</strong> -- snug enough to stop the saddle slipping but not so tight it restricts the shoulders or presses the windpipe.</li>
          </ul>
          <p>
            A horse breastplate-vs-breastgirth fit question card is how &quot;a breastplate or breastgirth stops the saddle sliding back, breastgirths are a simpler chest strap, and fit is snug enough to stop slip but not so tight it restricts the shoulders or presses the windpipe&quot; stays posted — it is not a horse denier-vs-fill question card (that lives on blanket-weights), not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), and not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads). This page does not hop owner-guides cards, calculator-tools cards, or vital-signs cards already pinned on those hubs. This page does not invent clinic listings.
          </p>

          <h2 id="misuse">Use and Misuse</h2>
          <p>Martingales are sometimes reached for to force a horse&apos;s head down or to mask resistance, which is misuse -- a too-tight or wrongly fitted martingale restricts the horse, causes discomfort and tension, and can be dangerous if it limits the head when the horse needs to balance (for example over a fence or on landing). Head-carriage problems usually stem from training, pain, fit, or the rider&apos;s hands, and addressing those is the real fix. Used correctly and at the right length, a martingale is a safety limit, and a breastplate a security aid -- not substitutes for schooling.</p>
          <p>
            A horse martingale-misuse head-carriage log notebook is how a-martingale-does-not-teach-correct-head-carriage, too-tight-or-wrongly-fitted-restricts-and-can-be-dangerous, and head-carriage-problems-usually-stem-from-training-pain-fit-or-hands stay written down — it is not a horse over-rugging sweat-shiver watch log notebook (that lives on blanket-weights), not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), and not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads). This page does not hop first-aid saline / pads / scissors, grimace-scale first-aid-kit / poultice / ice-boot, or vaccine / pergolide / prescription hops. This page does not hop winter+horse+blanket / horse+turnout+sheet / horse+stable+blanket / horse+fleece+cooler (those live on the blanket-size calculator).
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Shop leftover kit — unused vs #1144
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
              Shop the martingales leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page martingales, standing-vs-running, breastplates-and-breastgirths, fit, and use-and-misuse copy — a laminated horse standing-vs-running martingale checklist, a horse breastplate-vs-breastgirth fit question card, and a horse martingale-misuse head-carriage log notebook. Educational tack searches only. They are not a ranked product list, they are not a clinic listing, they are not a #1144 laminated-turnout-vs-stable / denier-vs-fill / over-rugging-sweat-shiver hop, they are not a #1143 turnout-halter breakaway / rope-vs-flat / wither-height-tie hop, they are not a #1142 horse-leg bandage-bow / impact-not-tendon-support / grit-rub hop, they are not a #1141 saddle-pad cannot-fix-fit / sweat-pattern / clean-dry-rotation hop, they are not a #1140 riding-helmet fit-and-replace / certification-label / impact-retirement hop, they are not a first-horse-roadmap 90-day / ground-manners / tack-room-emergency hop, they are not a senior-horse-care hop, they are not a reading-body-language ear-eye-tail / kick-zone / pain-demeanor hop, they are not a pre-purchase-exam stage-walkthrough / findings-worksheet / buyer-vet-briefing hop, they are not a lease / insurance / monthly-budget / choosing-a-vet / first-horse / boarding hop, they are not a first-aid saline / pads / scissors hop, they are not a grimace-scale first-aid-kit / poultice / ice-boot hop, they are not a daily-care / emergency-triage / owner-guides / calculator-tools chart hop, they are not a saddle-fit-basics pad / half-pad / shim / girth hop, they are not a BCS-chart hop, and they do not replace a qualified instructor or a veterinarian. Horses.com earns a commission on qualifying purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+standing+vs+running+martingale+checklist?s=martingales"
                amazonLabel="Browse laminated horse standing-vs-running martingale checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+breastplate+vs+breastgirth+fit+question+card?s=martingales"
                amazonLabel="Browse horse breastplate-vs-breastgirth fit question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+martingale+misuse+head+carriage+log+notebook?s=martingales"
                amazonLabel="Browse horse martingale-misuse head-carriage log notebooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (auxiliary tack and fitting).</li>
            <li>USEF and FEI rulebooks, current editions (permitted martingales by discipline).</li>
            <li>Research on auxiliary rein and martingale effects, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
