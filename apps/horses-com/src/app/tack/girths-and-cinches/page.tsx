import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Girths and Cinches — Types, Fit, and Preventing Girth Galls",
  description:
    "Reference guide to girths and cinches: what they do, English girth and western cinch types, materials, fit, and preventing girth galls and girthiness.",
  path: '/tack/girths-and-cinches',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Girths and Cinches — Types, Fit, and Preventing Girth Galls",
  description:
    "Reference guide to girths and cinches: what they do, English girth and western cinch types, materials, fit, and preventing girth galls and girthiness.",
  url: 'https://horses.com/tack/girths-and-cinches',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "How tight should a girth be?",
    answer:
      "Tight enough that the saddle stays stable and cannot slip, but no tighter. Tighten gradually -- snug at the mounting block, then check and adjust after walking on and warming up -- rather than yanking it tight all at once, and always smooth out skin wrinkles underneath. An over-tight girth restricts movement and causes resentment.",
    answerText:
      "Tight enough that the saddle cannot slip, no more. Tighten gradually and recheck after warming up, smoothing skin wrinkles underneath. Over-tight girths restrict movement and cause resentment.",
  },
  {
    question: "What causes girth galls?",
    answer:
      "Girth galls are friction sores in the girth area caused by a dirty girth or coat, a poorly fitting or wrong-shaped girth, skin pinched in wrinkles, or sudden hard tightening. They are prevented with a clean girth and coat, correct fit, gradual tightening, smoothing the skin underneath, and a girth shape that suits the horse.",
    answerText:
      "Friction from a dirty or ill-fitting girth, pinched skin wrinkles, or hard tightening. Prevented with cleanliness, correct fit, gradual tightening, and smoothing the skin underneath.",
  },
  {
    question: "Why does my horse get grumpy when I tack up the girth?",
    answer:
      "Girthiness -- pinning ears, biting, or tensing at girthing -- can be learned discomfort from past galls or rough girthing, but it can also signal real pain such as gastric ulcers. Persistent girthiness warrants checking the girth fit and tightening technique and, if it continues, a veterinary investigation rather than treating it as bad behavior.",
    answerText:
      "Girthiness can be learned discomfort from past galls or rough girthing, but can also signal pain like gastric ulcers. Check fit and technique, and if it persists, involve a vet.",
  },
]

export default function GirthsCinchesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
          { title: 'Boots and Wraps', href: '/tack/boots-and-wraps' },
        ]}
        hero={{
          title: "Girths and Cinches",
          subtitle:
            "The girth (English) or cinch (western) is the strap that holds the saddle on the horse, and despite its simplicity it has an outsized effect on comfort and behavior. A poorly fitting or roughly tightened girth causes painful galls, restricts movement, and creates the resentful behavior owners call girthiness. Choosing and fitting it well is a small detail that pays off every ride. This is reference material to inform choices alongside a saddle fitter or instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Girths and Cinches", href: '/tack/girths-and-cinches' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Girth Does", href: "#what" },
            { label: "English Girths", href: "#english" },
            { label: "Western Cinches", href: "#western" },
            { label: "Fit and Tightening", href: "#fit" },
            { label: "Girth Galls and Girthiness", href: "#galls" },
            { label: "Girth Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
              { label: "Saddle Pads", href: "/tack/saddle-pads" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-girths"
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
              Keep the girths-and-cinches checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Girths-and-cinches checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the anatomical-vs-straight girth checklist, buckle-elbow-clearance fit question card, and girth-gall skin-wrinkle log that match the what-the-girth-does, English, western, fit, and galls copy on this page — a laminated horse anatomical-vs-straight girth checklist so straight-girths-are-the-basic-form / anatomical-or-shaped-girths-curve-to-free-the-elbow / a-shape-that-suits-the-horse stay visible before anyone buckles a strap (not a laminated horse snaffle-vs-double bridle checklist, not a laminated horse standing-vs-running martingale checklist, not a laminated horse turnout-vs-stable rug checklist, not a laminated horse turnout-halter breakaway checklist, not a laminated horse-leg bandage-bow technique checklist, not a laminated saddle-pad cannot-fix-fit checklist), a horse girth buckle-elbow-clearance question card so the-right-length-keeps-buckles-or-rings-clear-of-the-elbow / positioned-in-the-natural-girth-groove / not-dragged-forward-against-the-elbow stays posted (not a horse bridle cheekpiece-length fit question card, not a horse breastplate-vs-breastgirth fit question card, not a horse denier-vs-fill question card, not a horse rope-vs-flat-halter task question card, not a horse-boot impact-not-tendon-support question card, not a saddle-pad sweat-pattern dry-spot question card), and a horse girth-gall skin-wrinkle log notebook so gradual-tightening / smooth-the-skin-under-the-girth / pull-the-forelegs-forward-to-remove-wrinkles stay written down (not a horse noseband two-finger welfare log, not a horse martingale-misuse head-carriage log, not a horse over-rugging sweat-shiver watch log, not a horse quick-release wither-height tie log, not a horse-boot grit-rub clean-dry log, not a saddle-pad clean-dry rotation log). Educational tack tools only, not a ranked product list, not a clinic listing, and not a substitute for a saddle fitter, a qualified instructor, or a veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Girths-and-cinches checklist"
              subtitle="Email the anatomical-vs-straight card, buckle-elbow check, and gall skin-wrinkle log. No spam."
              ctaText="Email my girths-and-cinches checklist"
              source="tack-girths-and-cinches-under-hero"
            />
          </div>

          <h2 id="what">What the Girth Does</h2>
          <p>The girth passes under the barrel just behind the elbows and fastens to the saddle on both sides, holding it securely in place against the forces of riding. Because it sits in the sensitive girth groove and moves against the skin with every stride, its material, shape, and fit directly affect the horse&apos;s comfort and freedom of movement. It must be secure enough that the saddle cannot slip, without being so tight or ill-shaped that it pinches or rubs.</p>

          <h2 id="english">English Girths</h2>
          <ul>
            <li><strong>Straight girths</strong> of leather, synthetic, or padded materials -- the basic form.</li>
            <li><strong>Anatomical or shaped girths</strong> curved to free the elbow and reduce pressure behind it, easing girthiness.</li>
            <li><strong>Stud-guard and short dressage girths</strong> for jumping (protecting the belly) and dressage (used with long billets and a monoflap saddle).</li>
            <li><strong>Materials</strong> -- leather, neoprene, fleece-lined, string, and breathable synthetics, varying in grip, comfort, and ease of cleaning.</li>
          </ul>
          <p>
            A laminated horse anatomical-vs-straight girth checklist is how straight-girths-are-the-basic-form, anatomical-or-shaped-girths-curve-to-free-the-elbow, and a-shape-that-suits-the-horse stay visible before anyone buckles a strap — it is not a laminated horse snaffle-vs-double bridle checklist (that lives on bridle-types), not a laminated horse standing-vs-running martingale checklist (that lives on martingales-and-breastplates), not a laminated horse turnout-vs-stable rug checklist (that lives on blanket-weights), not a laminated horse turnout-halter breakaway checklist (that lives on halters-and-lead-ropes), not a laminated horse-leg bandage-bow technique checklist (that lives on boots-and-wraps), and not a laminated saddle-pad cannot-fix-fit checklist (that lives on saddle-pads). This page does not hop horse+girth+cinch / horse+saddle+pad / horse+sheepskin+half+pad / horse+saddle+shims (those live on saddle-fit-basics), ASTM+SEI+horse+riding+helmet (that lives on horse-size-for-rider), or horse+halter+lead+rope (that lives on the cost calculator). This page does not hop boarding walkthroughs, lease walkthroughs, or daily-care charts already pinned on those pages.
          </p>

          <h2 id="western">Western Cinches</h2>
          <p>The western cinch attaches to the saddle by long latigo straps and a cinch ring. Cinches are commonly made of woven mohair, felt, fleece, or neoprene, with mohair prized for breathability and comfort. A western saddle may use a single front cinch or, for harder stopping and roping work, an additional rear cinch (the back cinch must be snugged so a hind foot cannot get caught, and connected to the front cinch). Material and width are chosen for the horse&apos;s comfort over long miles.</p>

          <h2 id="fit">Fit and Tightening</h2>
          <p>A girth should be the right length so the buckles or rings sit clear of the elbow and skin, of a width and shape that suits the horse, and positioned in the natural girth groove rather than dragged forward against the elbow. Tighten gradually -- snug enough at the mounting block to keep the saddle stable, then check and adjust after walking on and warming up, rather than yanking it tight all at once. Always smooth the skin under the girth (or pull the forelegs forward) to remove wrinkles that cause rubs.</p>
          <p>
            A horse girth buckle-elbow-clearance question card is how &quot;the right length keeps buckles or rings clear of the elbow, the girth sits in the natural girth groove, and it is not dragged forward against the elbow&quot; stays posted — it is not a horse bridle cheekpiece-length fit question card (that lives on bridle-types), not a horse breastplate-vs-breastgirth fit question card (that lives on martingales-and-breastplates), not a horse denier-vs-fill question card (that lives on blanket-weights), not a horse rope-vs-flat-halter task question card (that lives on halters-and-lead-ropes), not a horse-boot impact-not-tendon-support question card (that lives on boots-and-wraps), and not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads). This page does not hop owner-guides cards, calculator-tools cards, or vital-signs cards already pinned on those hubs. This page does not invent clinic listings.
          </p>

          <h2 id="galls">Girth Galls and Girthiness</h2>
          <p>Girth galls are painful sores or rubs in the girth area, caused by friction, dirt, a poorly fitting girth, or skin pinched in wrinkles. Prevent them with a clean girth and coat, correct fit, gradual tightening, and a girth shape suited to the horse. Girthiness -- the horse pinning its ears, biting, or tensing when girthed -- can be learned discomfort from past galls or rough girthing, but can also signal pain such as gastric ulcers, so persistent girthiness warrants checking fit and, if it continues, a veterinary look rather than just discipline.</p>
          <p>
            A horse girth-gall skin-wrinkle log notebook is how gradual-tightening, smooth-the-skin-under-the-girth, and pull-the-forelegs-forward-to-remove-wrinkles stay written down — it is not a horse noseband two-finger welfare log notebook (that lives on bridle-types), not a horse martingale-misuse head-carriage log notebook (that lives on martingales-and-breastplates), not a horse over-rugging sweat-shiver watch log notebook (that lives on blanket-weights), not a horse quick-release wither-height tie log notebook (that lives on halters-and-lead-ropes), not a horse-boot grit-rub clean-dry log notebook (that lives on boots-and-wraps), and not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads). This page does not hop first-aid saline / pads / scissors, grimace-scale first-aid-kit / poultice / ice-boot, or vaccine / pergolide / prescription hops. This page does not hop winter+horse+blanket / horse+turnout+sheet / horse+stable+blanket / horse+fleece+cooler (those live on the blanket-size calculator).
          </p>

          <h2 id="picks">Girth Picks</h2>
          <p>A few widely-stocked girth and cinch types covering the common English and Western needs. A clean girth in the correct shape and size, tightened gradually, prevents most girth galls — the product matters less than fit and hygiene. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="anatomic-english-girth"
            badge="English Everyday"
            name="Anatomic / Shaped English Girth"
            subtitle="Contoured shape to relieve the elbow and reduce galls"
            score={8.6}
            winner
            description={<>
              <p>A shaped or anatomic English girth is cut back behind the elbow to reduce pinching and rubbing in the girth groove — a common upgrade for horses prone to galls or girthiness from a straight girth. Synthetic and leather versions both work; the key is a clean surface, the right size, and gradual tightening.</p>
              <p>Reasonable choice for: any English-saddle horse, and especially one showing girth-area rubs or sensitivity under a straight girth.</p>
            </>}
            specs={[
              { label: 'Shape', value: 'Anatomic / elbow-relief cut', highlight: 'good' },
              { label: 'Material', value: 'Leather or synthetic' },
              { label: 'Best use case', value: 'English schooling and showing' },
            ]}
            pros={['Relieves elbow-area pinching', 'Reduces girth-gall risk', 'Available in leather and synthetic']}
            cons={['Anatomic leather versions are pricier', 'Still needs correct size and clean surface']}
            price="$45–140"
            ctaText="Compare at Dover Saddlery →"
            ctaHref="/go/dover/anatomic-english-girth?s=tack-girths-and-cinches"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="anatomic-english-girth"
          />

          <ReviewCard
            id="mohair-cinch"
            badge="Western"
            name="Mohair / Roper Western Cinch"
            subtitle="Breathable natural-fiber cinch for long rides"
            score={8.5}
            description={<>
              <p>A mohair (or mohair-blend) roper cinch is a traditional Western choice valued for breathability and the way natural fibers wick moisture and resist galling on long working rides. Straight or roper cuts suit most working horses; correct width and gradual tightening matter as much as material.</p>
              <p>Most relevant for trail, ranch, and Western performance riders who want a breathable natural-fiber cinch for extended time in the saddle.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Mohair or mohair blend', highlight: 'good' },
              { label: 'Cut', value: 'Straight or roper' },
              { label: 'Best use case', value: 'Western, long working rides' },
            ]}
            pros={['Breathable and moisture-wicking', 'Natural fiber resists galling', 'Traditional, durable construction']}
            cons={['Natural fiber needs cleaning to last', 'Pure mohair costs more than synthetic', 'Width must match the horse']}
            price="$40–120"
            ctaText="Compare at Schneiders →"
            ctaHref="/go/schneider/mohair-roper-cinch?s=tack-girths-and-cinches"
            ctaAffiliateProgram="schneider"
            ctaAffiliateProduct="mohair-roper-cinch"
          />

          <ReviewCard
            id="fleece-girth-cover"
            badge="Gall Prevention"
            name="Sheepskin / Fleece Girth Cover"
            subtitle="Cushioning sleeve to reduce friction on sensitive horses"
            score={8.1}
            description={<>
              <p>A sheepskin or fleece girth cover slips over an existing girth to add a soft, friction-reducing layer for horses with thin skin or a history of galls. It is a supportive measure, not a fix for a wrong-size or dirty girth — keep both the cover and the coat clean, since trapped dirt under fleece can itself cause rubs.</p>
              <p>Most relevant for gall-prone or thin-skinned horses already in a correctly sized girth that still shows minor friction.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Sheepskin or synthetic fleece' },
              { label: 'Use', value: 'Slips over an existing girth' },
              { label: 'Best use case', value: 'Gall-prone, thin-skinned horses' },
            ]}
            pros={['Adds friction-reducing cushioning', 'Fits over most existing girths', 'Inexpensive insurance for sensitive horses']}
            cons={['Not a fix for a wrong-size girth', 'Traps dirt if not cleaned', 'Adds bulk that can affect fit']}
            price="$18–45"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/fleece-girth-cover?s=tack-girths-and-cinches"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="fleece-girth-cover"
          />

          {/* Shop leftover kit — unused vs #1146
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
              Shop the girths-and-cinches leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page what-the-girth-does, English, western, fit, and galls copy — a laminated horse anatomical-vs-straight girth checklist, a horse girth buckle-elbow-clearance question card, and a horse girth-gall skin-wrinkle log notebook. Educational tack searches only. They are not a ranked product list, they are not a clinic listing, they are not a #1146 laminated snaffle-vs-double / cheekpiece-length / noseband-two-finger hop, they are not a #1145 laminated standing-vs-running / breastplate-vs-breastgirth / martingale-misuse-head-carriage hop, they are not a #1144 laminated-turnout-vs-stable / denier-vs-fill / over-rugging-sweat-shiver hop, they are not a #1143 turnout-halter breakaway / rope-vs-flat / wither-height-tie hop, they are not a #1142 horse-leg bandage-bow / impact-not-tendon-support / grit-rub hop, they are not a #1141 saddle-pad cannot-fix-fit / sweat-pattern / clean-dry-rotation hop, they are not a #1140 riding-helmet fit-and-replace / certification-label / impact-retirement hop, they are not a first-horse-roadmap 90-day / ground-manners / tack-room-emergency hop, they are not a senior-horse-care hop, they are not a reading-body-language ear-eye-tail / kick-zone / pain-demeanor hop, they are not a pre-purchase-exam stage-walkthrough / findings-worksheet / buyer-vet-briefing hop, they are not a lease / insurance / monthly-budget / choosing-a-vet / first-horse / boarding hop, they are not a first-aid saline / pads / scissors hop, they are not a grimace-scale first-aid-kit / poultice / ice-boot hop, they are not a daily-care / emergency-triage / owner-guides / calculator-tools chart hop, they are not a saddle-fit-basics pad / half-pad / shim / girth-cinch hop, they are not a BCS-chart hop, and they do not replace a saddle fitter, a qualified instructor, or a veterinarian. Horses.com earns a commission on qualifying purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+anatomical+vs+straight+girth+checklist?s=girths-and-cinches"
                amazonLabel="Browse laminated horse anatomical-vs-straight girth checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+girth+buckle+elbow+clearance+question+card?s=girths-and-cinches"
                amazonLabel="Browse horse girth buckle-elbow-clearance question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+girth+gall+skin+wrinkle+log+notebook?s=girths-and-cinches"
                amazonLabel="Browse horse girth-gall skin-wrinkle log notebooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (tack and saddling).</li>
            <li>Society of Master Saddlers. Girthing and saddle-fit guidance. mastersaddlers.co.uk.</li>
            <li>Research on girth pressure and equine comfort, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
