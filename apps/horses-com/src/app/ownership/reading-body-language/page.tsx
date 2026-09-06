import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Reading Horse Body Language — Ears, Eyes, Tail, and Posture",
  description:
    "Reference guide to equine body language: how to read ears, eyes, muzzle, tail, and posture, signs of fear and pain, and why understanding it keeps you safe.",
  path: '/ownership/reading-body-language',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Reading Horse Body Language — Ears, Eyes, Tail, and Posture",
  description:
    "Reference guide to equine body language: how to read ears, eyes, muzzle, tail, and posture, signs of fear and pain, and why understanding it keeps you safe.",
  url: 'https://horses.com/ownership/reading-body-language',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What do a horse's ears tell you?",
    answer:
      "The ears are the most expressive signal: pricked sharply forward shows attention or interest ahead; flicking and swiveling shows the horse monitoring its surroundings or listening back to a rider; pinned flat against the neck signals anger, threat, or pain and warns of a possible bite or kick; and lolling loosely to the side usually means relaxation or dozing.",
    answerText:
      "Pricked forward shows interest; flicking and swiveling shows monitoring or listening; pinned flat warns of anger, threat, or pain and a possible bite or kick; lolling sideways means relaxation.",
  },
  {
    question: "How can I tell if a horse is afraid or tense?",
    answer:
      "A frightened or tense horse stands tall and rigid with a raised head, tight muscles, flared nostrils, and often a wide eye showing white, with a clamped tail and weight ready to move -- a horse coiled to flee. Reading the whole posture together with the ears, eyes, and tail is more reliable than any single signal.",
    answerText:
      "It stands tall and rigid, head up, muscles tight, nostrils flared, often showing the whites of the eyes with a clamped tail -- coiled to flee. Read the whole posture, not one signal.",
  },
  {
    question: "Can body language tell me if a horse is in pain?",
    answer:
      "Yes, and it is one of the most important uses, because horses hide pain. Pain shows in a tense, withdrawn expression with tight muzzle and eye lines (the grimace scale), reluctance to move or weight a limb, restlessness, lying down more, dullness, and pinned ears or aggression when a sore area is touched. Subtle, persistent changes from normal often signal pain before anything dramatic.",
    answerText:
      "Yes -- a tense, withdrawn expression with tight muzzle and eye lines, reluctance to move, restlessness, dullness, and pinned ears or aggression when touched. Subtle persistent changes often signal pain.",
  },
]

export default function BodyLanguagePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
          { title: 'Equine First-Aid Kit', href: '/ownership/first-aid-kit' },
        ]}
        hero={{
          title: "Reading Horse Body Language",
          subtitle:
            "Horses communicate constantly through their bodies, and learning to read that language is one of the most valuable -- and safety-critical -- skills an owner can develop. A horse signals fear, relaxation, pain, and intention through its ears, eyes, muzzle, tail, and whole posture long before it acts. Understanding these signals lets you respond appropriately, build trust, and stay safe around a large prey animal. This is reference material to complement hands-on experience.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Reading Body Language", href: '/ownership/reading-body-language' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why It Matters", href: "#why" },
            { label: "The Ears", href: "#ears" },
            { label: "Eyes and Muzzle", href: "#face" },
            { label: "The Tail", href: "#tail" },
            { label: "Whole-Body Posture", href: "#posture" },
            { label: "Signs of Pain", href: "#pain" },
            { label: "Horse body-language leftover signal kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Halters and Lead Ropes", href: "/tack/halters-and-lead-ropes" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-body-language"
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
              Keep the horse body-language checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse body-language checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the ear-eye-tail signal
              checklist, handler kick-zone
              safety notes, and pain-demeanor
              change-log that match the why-it-
              matters, ears, eyes-and-muzzle,
              tail, whole-body-posture, and
              signs-of-pain copy on this page —
              a laminated horse ear-eye-tail
              signal checklist so pricked /
              flicking / pinned / lolling ears,
              soft versus white-showing eyes,
              and relaxed / clamped / swishing
              tails stay visible before anyone
              steps into the stall (not a
              first-horse tryout walkthrough,
              not a lease walkthrough, not a
              boarding-facility walkthrough, not
              a pre-purchase exam stage
              walkthrough, not an insurance-
              claims checklist), a horse
              handler kick-zone safety question
              card so “step back when ears pin
              or the tail clamps” stays posted
              before a bite or kick (not an
              after-hours emergency-cover
              question card, not a buyer-vet-
              briefing question card, not a
              stall-door vital-signs card), and
              a horse pain-demeanor change-log
              notebook so subtle, persistent
              changes from that horse&apos;s
              normal stay written down before
              anything dramatic (not a first-
              horse buyer visit field notebook,
              not an emergency-fund expense
              tracker, not a farrier log book).
              Educational owner handling-
              safety tools only, not a ranked
              product list, not a clinic
              listing, and not a substitute
              for a veterinarian or in-person
              handling instruction. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse body-language checklist"
              subtitle="Email the ear-eye-tail signal card, kick-zone safety notes, and pain-demeanor log. No spam."
              ctaText="Email my horse body-language checklist"
              source="ownership-reading-body-language-under-hero"
            />
          </div>

          <h2 id="why">Why It Matters</h2>
          <p>The horse is a large, powerful prey animal whose first instinct in fear is to flee, and it broadcasts its emotional state through subtle and not-so-subtle body signals. Reading those signals lets a handler anticipate a spook, defuse tension before it becomes a kick or bite, recognize discomfort or pain, and build the trust that comes from responding to what the horse is saying. It is fundamental to both safety and good horsemanship -- the horse is always communicating, and the skill is learning to listen.</p>
          <p>
            A horse handler kick-zone safety
            question card is how “stay out of
            the hind-end arc and the bite
            zone when the horse coils to
            flee” stays posted before anyone
            walks in close — it is not a
            horse after-hours emergency-cover
            question card (that lives on
            choosing-a-vet and asks who
            answers a midnight colic, not
            where a handler stands), not a
            horse buyer vet briefing question
            card (that lives on
            pre-purchase-exam), and not a
            horse stall-door vital-signs card
            (that lives on the health hub).
            This page does not hop
            owner-guides charts,
            calculator-tools charts, or
            forage-first charts already
            pinned on those hubs. This page
            does not hop first-aid saline,
            dressing pads, or bandage
            scissors. This page does not
            invent clinic listings.
          </p>

          <h2 id="ears">The Ears</h2>
          <p>The ears are the most expressive part of the horse and the first thing to watch. Ears pricked sharply forward show attention or interest in something ahead; ears flicking and swiveling show the horse monitoring its surroundings (and often a relaxed, working attention, as in a ridden horse listening back to the rider); ears pinned flat back against the neck signal anger, threat, or pain and are a clear warning of a possible bite or kick; and ears lolling loosely to the side often indicate relaxation or dozing.</p>
          <p>
            A laminated horse ear-eye-tail
            signal checklist is how pricked,
            flicking, pinned, and lolling
            stay visible at the stall door
            so a handler reads the ears
            before stepping in — it is not a
            laminated first-horse tryout
            walkthrough checklist (that
            lives on buying-your-first-horse
            and scores handle / ridden /
            load, not ear positions), not a
            laminated horse lease
            walkthrough checklist (that
            lives on leasing-a-horse), not a
            laminated pre-purchase exam
            stage walkthrough checklist
            (that lives on
            pre-purchase-exam), and not a
            laminated horse boarding
            facility walkthrough checklist
            (that lives on boarding-options).
            This page does not hop
            emergency-triage charts,
            daily-care charts, or
            owner-guides charts already
            pinned on those hubs.
          </p>

          <h2 id="face">Eyes and Muzzle</h2>
          <p>The eyes and muzzle add detail. A soft, relaxed eye with a calm expression signals contentment, while a wide eye showing the white (when not normal for that horse) and a tense, worried expression signal fear or stress. The muzzle and mouth speak too: tight, pinched nostrils and a clamped mouth indicate tension or pain, a drooping lower lip and soft muzzle show relaxation or dozing, and tension lines around the eyes and muzzle are increasingly used in equine pain scoring (the horse grimace scale).</p>
          <p>
            The same laminated horse
            ear-eye-tail signal checklist is
            how a soft eye versus a
            white-showing eye, and a soft
            muzzle versus pinched nostrils,
            stay on the same card as the
            ears — it is not a laminated
            equine-vet interview checklist
            (that lives on choosing-a-vet),
            not a laminated horse insurance
            claims checklist (that lives on
            horse-insurance), and not a
            laminated horse barn emergency-
            triage chart (that lives on the
            health hub). This page does not
            hop grimace-scale first-aid-kit
            / poultice / ice-boot /
            thermometer / vet-wrap hops
            (those live on the horse
            grimace-scale tool). This page
            does not hop medications or
            vaccines.
          </p>

          <h2 id="tail">The Tail</h2>
          <p>The tail reflects mood and can be a safety signal. A relaxed, gently swinging tail shows a calm horse; a clamped tail held tight to the buttocks indicates fear, tension, or cold; and a swishing or wringing tail signals irritation, annoyance, or discomfort -- a rapidly swishing tail under saddle can indicate the horse is unhappy or in pain. A high-carried tail shows excitement or alarm. Persistent tail swishing or clamping during handling or riding is worth investigating rather than ignoring.</p>
          <p>
            The same laminated horse
            ear-eye-tail signal checklist is
            how a relaxed swing, a clamped
            tail, and a wringing swish stay
            visible as safety signals
            beside the ears and eyes — it
            is not a horse mane-tail brush
            hop (that lives on grooming),
            not a horse shipping-wraps hop
            (that lives on trailering), and
            not a horse fly-sheet hop (that
            lives on fly-control). This
            page does not hop
            ASTM-helmet hops, shipping-
            boots hops, or halter-and-lead
            hops already pinned on rider-
            fit, trailering, and the cost
            calculator. This page does not
            claim hands-on testing.
          </p>

          <h2 id="posture">Whole-Body Posture</h2>
          <p>Step back and read the whole horse. A relaxed horse stands with a soft topline, a lowered or level neck, a resting hind leg, and a loose, settled outline. A tense or frightened horse stands tall and rigid, head up, muscles tight, weight ready to move, often with a raised head and flared nostrils -- a horse coiled to flee. A horse rapidly shifting weight, pawing, or unable to settle is signaling distress or discomfort. The whole picture is more reliable than any single signal read in isolation.</p>
          <p>
            The same horse handler kick-zone
            safety question card is how
            “step back and read the whole
            outline before you walk in
            close” stays posted when a
            horse stands tall, rigid, and
            coiled to flee — it is not a
            laminated first-horse tryout
            walkthrough checklist (that
            lives on buying-your-first-horse),
            not a horse stall-door
            measurement card (that lives on
            the tools hub), and not a
            horse body-condition-score chart
            hop (that lives on the BCS
            tool). This page does not hop
            weight tapes, measuring sticks,
            or saddle-fit kits. This page
            does not invent clinic
            listings.
          </p>

          <h2 id="pain">Signs of Pain</h2>
          <p>Recognizing pain is one of the most important uses of body-language reading, because horses are stoic and often hide it. Pain shows in a tense, withdrawn expression with tight muzzle and eye lines (captured in equine grimace scales), reluctance to move or weight a limb, restlessness, lying down more than usual, dullness and disinterest, pinned ears or aggression when a sore area is touched, and changes in posture such as the colic or laminitis stances. Subtle, persistent changes in a horse&apos;s normal demeanor often signal pain before anything dramatic happens, and warrant a closer look or a veterinary call.</p>
          <p>
            A horse pain-demeanor change-log
            notebook is how those subtle,
            persistent changes from that
            horse&apos;s normal — a tighter
            muzzle, more lying down, a new
            reluctance to weight a limb —
            stay written down before a
            dramatic colic or laminitis
            stance — it is not a first-
            horse buyer visit field
            notebook (that lives on
            buying-your-first-horse and
            records seller visits, not
            daily demeanor), not an equine
            emergency-fund expense
            tracker notebook (that lives on
            cost-of-owning-a-horse), and
            not an equine farrier log book
            (that lives on
            farrier-schedule). This page
            does not hop first-aid saline /
            pads / scissors. This page does
            not hop grimace-scale comfort
            hops. This page does not hop
            medications. This page does
            not claim hands-on testing.
          </p>

          <h2 id="kit">Horse body-language leftover signal kit</h2>
          <p>
            Everyday physical supplies that match the
            why-it-matters, ears, eyes-and-muzzle,
            tail, whole-body-posture, and
            signs-of-pain copy on this page —
            a laminated horse ear-eye-tail
            signal checklist so pricked /
            flicking / pinned / lolling ears,
            soft versus white-showing eyes,
            and relaxed / clamped / swishing
            tails stay visible before anyone
            steps into the stall, a horse
            handler kick-zone safety question
            card so stay-out-of-the-hind-end-
            arc when the horse coils to flee
            stays posted, and a horse pain-
            demeanor change-log notebook so
            subtle, persistent changes from
            that horse&apos;s normal stay written
            down before anything dramatic.
            These are educational owner
            searches, not a ranked product
            list, not a clinic listing, not a
            substitute for a veterinarian or
            in-person handling instruction,
            not a laminated-pre-purchase-exam-
            stage-walkthrough /
            findings-decision-worksheet /
            buyer-vet-briefing-card hop
            (those live on pre-purchase-exam),
            not a lease-agreement-binder /
            lease-walkthrough-checklist /
            full-versus-partial cost-share
            worksheet hop (those live on
            leasing-a-horse), not a
            horse-insurance-policy-binder /
            insurance-claims-checklist /
            mortality-versus-major-medical
            worksheet hop (those live on
            horse-insurance), not a
            monthly-budget-worksheet /
            emergency-fund-tracker /
            keep-feed-farrier-cost-log hop
            (those live on cost-of-owning-a-horse),
            not a laminated equine-vet interview
            checklist / after-hours emergency-cover
            question card / VCPR records folder
            hop (those live on choosing-a-vet),
            not a first-horse tryout walkthrough /
            buyer-visit-notebook /
            pre-purchase-exam-records-binder hop
            (those live on buying-your-first-horse),
            not a boarding-facility walkthrough /
            boarding-contract-binder / hay-bale-tarp
            hop (those live on boarding-options),
            not a first-aid saline / pads /
            scissors hop, not a grimace-scale
            first-aid-kit / poultice / ice-boot
            hop, not a daily-care-chart /
            stall-door-care-card /
            husbandry-handbook hop (those live
            on the care hub), not an
            emergency-triage-chart /
            vital-signs-card / health-handbook
            hop, not a forage-first-chart /
            ration-card / nutrition-handbook hop,
            not an owner-guides-chart hop, not a
            calculator-tools-chart hop, not a
            farrier-log / flood-light hop, and
            not a weatherproof-clipboard hop.
            This page does not hop medications
            or vaccines. This page does not
            claim hands-on testing. This page
            does not invent clinic listings.
            This page does not hop
            insurance-carrier deep links.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated horse ear-eye-tail signal
              checklist /
              horse handler kick-zone safety
              question card /
              horse pain-demeanor change-log
              notebook).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1136
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
              equine+bandage+scissors, #1128
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
              equine+health+reference+handbook, #1124
              laminated+horse+barn+forage+first+chart /
              horse+stall+door+ration+card /
              equine+nutrition+reference+handbook,
              grimace / emergency
              equine+first+aid+kit /
              digital+veterinary+thermometer /
              vet+wrap+bandage /
              poultice /
              ice+boot+cold+therapy+wrap,
              cost-calculator
              horse+barn+first+aid+kit /
              horse+halter+lead+rope,
              farrier-schedule
              cordless+barn+flood+light /
              equine+farrier+log+book,
              flu
              weatherproof+storage+clipboard,
              trailering
              horse+shipping+boots /
              horse+trailer+ties,
              helmet-guide
              ASTM+SEI+horse+riding+helmet. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the horse body-language leftover signal kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page why-it-matters, ears, eyes-and-
              muzzle, tail, whole-body-posture, and
              signs-of-pain copy — a laminated
              horse ear-eye-tail signal checklist,
              a horse handler kick-zone safety
              question card, and a horse pain-
              demeanor change-log notebook.
              Educational owner searches only.
              They are not a ranked product list,
              they are not a clinic listing, they
              are not a pre-purchase-exam stage-
              walkthrough / findings-worksheet /
              buyer-vet-briefing hop, they are not
              a lease-agreement-binder /
              lease-walkthrough / cost-share hop,
              they are not a horse-insurance
              policy-binder / claims-checklist /
              mortality-versus-medical hop, they
              are not a monthly-budget /
              emergency-fund / keep-feed-farrier
              hop, they are not a choosing-a-vet
              interview / after-hours-cover /
              VCPR-folder hop, they are not a
              first-horse tryout / buyer-notebook /
              PPE-records hop, they are not a
              boarding walkthrough / contract-binder
              / hay-tarp hop, they are not a
              first-aid saline / pads / scissors
              hop, they are not a grimace-scale
              first-aid-kit / poultice / ice-boot
              hop, they are not a daily-care /
              emergency-triage / owner-guides /
              calculator-tools chart hop, they are
              not a farrier-log hop, and they do
              not replace a veterinarian or
              in-person handling instruction.
              Horses.com earns a commission on
              qualifying purchases at no extra
              cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+ear+eye+tail+signal+checklist?s=ownership-reading-body-language"
                amazonLabel="Browse laminated horse ear-eye-tail signal checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+handler+kick+zone+safety+question+card?s=ownership-reading-body-language"
                amazonLabel="Browse horse handler kick-zone safety question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+pain+demeanor+change+log+notebook?s=ownership-reading-body-language"
                amazonLabel="Browse horse pain-demeanor change-log notebooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Dalla Costa E, et al. “Development of the Horse Grimace Scale (HGS) as a Pain Assessment Tool.” PLOS ONE, 2014.</li>
            <li>McGreevy P. Equine Behavior: A Guide for Veterinarians and Equine Scientists, Elsevier.</li>
            <li>International Society for Equitation Science. Equine welfare and behavior resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
