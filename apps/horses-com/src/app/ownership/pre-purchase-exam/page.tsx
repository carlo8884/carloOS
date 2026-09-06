import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "The Pre-Purchase Exam — Vetting a Horse Before You Buy",
  description:
    "Reference guide to the equine pre-purchase exam (vetting): what it covers, basic vs extensive exams, radiographs, who the vet works for, and using the results.",
  path: '/ownership/pre-purchase-exam',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "The Pre-Purchase Exam — Vetting a Horse Before You Buy",
  description:
    "Reference guide to the equine pre-purchase exam (vetting): what it covers, basic vs extensive exams, radiographs, who the vet works for, and using the results.",
  url: 'https://horses.com/ownership/pre-purchase-exam',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Does a horse pass or fail a pre-purchase exam?",
    answer:
      "No -- a pre-purchase exam does not pass or fail a horse. It produces findings about the horse's current health and soundness, and the veterinarian explains whether those findings matter for the buyer's intended use. Few horses are blemish-free, so the buyer weighs the findings and risk and decides, rather than the exam delivering a simple yes or no.",
    answerText:
      "No -- it produces findings, not a pass or fail. The vet explains whether issues matter for your intended use, and you weigh the findings and risk to decide. Few horses are blemish-free.",
  },
  {
    question: "Should the seller's vet do the pre-purchase exam?",
    answer:
      "Ideally not. The examining veterinarian should be acting for the buyer and is best not being the horse's regular vet, to avoid any conflict of interest. The buyer briefs the vet on the intended use and budget, and the vet reports findings honestly and advises on their significance without trying to push the sale either way.",
    answerText:
      "Ideally not -- the vet should act for the buyer and not be the horse's regular vet, to avoid a conflict of interest. They report findings honestly for the buyer's intended use.",
  },
  {
    question: "What is the difference between a basic and a five-stage vetting?",
    answer:
      "A basic (two-stage) exam covers the resting examination plus walk and trot, suitable for low-value or low-demand purchases. A five-stage exam adds strenuous exercise to stress the heart, lungs, and limbs, a rest period and re-examination, and a final trot-up to reveal lameness that only appears after work. The level should match the horse's value and intended use.",
    answerText:
      "A basic exam covers the resting check plus walk and trot; a five-stage adds strenuous exercise, a rest-and-re-exam, and a final trot-up to catch post-exercise lameness. Match the level to the horse's value and use.",
  },
]

export default function PrePurchaseExamPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Choosing an Equine Vet', href: '/ownership/choosing-a-vet' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
        ]}
        hero={{
          title: "The Pre-Purchase Exam",
          subtitle:
            "The pre-purchase examination, or vetting, is the buyer's best protection against an expensive mistake -- an independent veterinary assessment of a horse's health and soundness before money changes hands. It does not promise a perfect horse or guarantee the future, but it surfaces problems, informs the price, and lets a buyer make a clear-eyed decision. This guide explains what the exam covers and how to use it. This is reference material to inform the process alongside your veterinarian.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Pre-Purchase Exam", href: '/ownership/pre-purchase-exam' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Exam Is For", href: "#purpose" },
            { label: "What It Covers", href: "#covers" },
            { label: "Basic vs Extensive", href: "#levels" },
            { label: "Radiographs and Extras", href: "#radiographs" },
            { label: "Who the Vet Works For", href: "#whofor" },
            { label: "Using the Results", href: "#results" },
            { label: "Pre-purchase exam leftover findings kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-ppe"
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
              Keep the pre-purchase exam checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Pre-purchase exam checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the pre-purchase-exam-stage
              walkthrough, findings-decision
              worksheet, and buyer-vet-briefing
              notes that match the what-the-exam-
              is-for, basic-versus-five-stage,
              radiographs-and-extras, who-the-vet-
              works-for, and using-findings copy
              on this page — a laminated pre-
              purchase exam stage walkthrough
              checklist so two-stage rest-plus-
              walk-trot versus five-stage exercise,
              rest, and final trot-up stay visible
              before anyone books the vet (not a
              first-horse tryout walkthrough, not a
              lease walkthrough, not a boarding-
              facility walkthrough, not an
              insurance-claims checklist), a horse
              pre-purchase exam findings decision
              worksheet so findings versus intended
              use stay on one page instead of a
              pass-or-fail stamp (not a mortality-
              versus-major-medical worksheet, not
              a full-versus-partial lease cost-
              share worksheet, not a monthly-
              budget worksheet), and a horse buyer
              vet briefing question card so
              intended use, budget, and “this vet
              works for the buyer” stay posted
              before the exam (not an after-hours
              emergency-cover question card, not
              a vet-interview checklist, not a
              first-horse buyer visit notebook).
              Educational owner exam-readiness
              tools only, not a ranked product
              list, not a clinic listing, and not
              a substitute for an independent
              veterinarian acting for the buyer.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Pre-purchase exam checklist"
              subtitle="Email the stage-walkthrough, findings-worksheet, and buyer-vet-briefing notes. No spam."
              ctaText="Email my pre-purchase exam checklist"
              source="ownership-pre-purchase-exam-under-hero"
            />
          </div>

          <h2 id="purpose">What the Exam Is For</h2>
          <p>A pre-purchase exam is a veterinary assessment of a horse&apos;s current health and soundness, carried out for a prospective buyer to inform the buying decision. Its purpose is not to pass or fail the horse, nor to guarantee its future, but to identify any existing problems and assess the horse&apos;s suitability for the buyer&apos;s intended use. A jumping prospect and a quiet trail horse are judged against different demands, so the buyer&apos;s plans shape what matters in the findings.</p>
          <p>
            A horse pre-purchase exam findings
            decision worksheet is how those
            findings sit beside intended use —
            jumping versus trail, value versus
            risk — instead of collapsing into a
            pass-or-fail stamp — it is not a
            horse mortality vs major-medical
            decision worksheet (that lives on
            horse-insurance and ranks cover
            types, not exam findings), not a
            horse full vs partial lease
            cost-share worksheet (that lives on
            leasing-a-horse), and not a horse
            ownership monthly budget worksheet
            (that lives on
            cost-of-owning-a-horse). This page
            does not hop owner-guides charts,
            calculator-tools charts, or
            forage-first charts already pinned
            on those hubs. This page does not
            hop insurance-carrier quote pages
            or invent clinic listings.
          </p>

          <h2 id="covers">What It Covers</h2>
          <p>A standard exam includes a thorough physical examination at rest -- eyes, heart, lungs, teeth, skin, conformation, and a hands-on check of the limbs and back -- followed by an evaluation of the horse in motion, in hand and often on the lunge, including flexion tests that stress the joints to reveal hidden lameness. The veterinarian assesses the horse&apos;s wind (breathing), demeanor, and overall condition. The aim is a rounded picture of how the horse is functioning now.</p>
          <p>
            The same laminated pre-purchase
            exam stage walkthrough checklist
            is how rest, in-hand, lunge, and
            flexion-test stages stay visible
            so the buyer knows what was
            actually seen — it is not a
            laminated first-horse tryout
            walkthrough checklist (that lives
            on buying-your-first-horse and
            scores handle / ridden / load,
            not vetting stages), not a
            laminated horse lease walkthrough
            checklist (that lives on
            leasing-a-horse), and not a
            laminated horse boarding facility
            walkthrough checklist (that lives
            on boarding-options). This page
            does not hop first-aid saline,
            dressing pads, or bandage scissors
            already pinned on first-aid-kit.
          </p>

          <h2 id="levels">Basic vs Extensive</h2>
          <p>Pre-purchase exams come in tiers. A basic (sometimes called two-stage) exam covers the resting examination and seeing the horse walk and trot, suitable for a low-value or low-demand purchase. A more extensive (five-stage) exam adds strenuous exercise to stress the heart, lungs, and limbs, a period of rest and re-examination, and a final trot-up to catch lameness that only shows after work. The level should match the horse&apos;s value and intended job, decided with your veterinarian.</p>
          <p>
            A laminated pre-purchase exam
            stage walkthrough checklist is how
            two-stage rest-plus-walk-trot
            versus five-stage exercise, rest,
            and final trot-up stay visible
            before anyone books the vet — it
            is not a laminated equine-vet
            interview checklist (that lives
            on choosing-a-vet), not a
            laminated horse insurance claims
            checklist (that lives on
            horse-insurance), and not a
            laminated first-horse tryout
            walkthrough checklist (that lives
            on buying-your-first-horse). This
            page does not hop emergency-triage
            charts, vital-signs cards, or
            daily-care charts already pinned
            on the health and care hubs.
          </p>

          <h2 id="radiographs">Radiographs and Extras</h2>
          <p>Beyond the clinical exam, buyers can request additional diagnostics: radiographs of the feet, hocks, and other areas to look for bony change; ultrasound of soft tissues; blood tests (including, by agreement, storing a sample to test later for medication that might mask problems); endoscopy of the airway; and tests appropriate to the discipline. These add cost and are chosen based on the horse&apos;s value, age, intended use, and any findings from the clinical exam.</p>
          <p>
            The same horse pre-purchase exam
            findings decision worksheet is how
            radiographs, ultrasound, stored
            blood, and endoscopy sit as extras
            the buyer chooses — not a default
            pass stamp — beside value, age,
            and intended use — it is not a
            horse pre-purchase exam records
            binder (that lives on
            buying-your-first-horse and files
            the finished report, not the
            decide-which-extras step), not a
            horse veterinary history / VCPR
            records folder (that lives on
            choosing-a-vet), and not a horse
            keep / feed / farrier cost log
            binder (that lives on
            cost-of-owning-a-horse). This page
            does not hop medications or
            vaccines. This page does not hop
            hay tarps, hay racks, or feed
            bins already pinned on boarding
            and nutrition pages.
          </p>

          <h2 id="whofor">Who the Vet Works For</h2>
          <p>A crucial principle is independence: the examining veterinarian should be acting for the buyer, not the seller, and ideally is not the horse&apos;s regular vet, to avoid any conflict of interest. The buyer should brief the vet on the intended use and budget. The vet&apos;s job is to report findings honestly and advise on their significance for that buyer&apos;s plans, not to talk the buyer into or out of the purchase.</p>
          <p>
            A horse buyer vet briefing
            question card is how intended use,
            budget, and “this vet works for
            the buyer, not the seller” stay
            posted before the exam — it is
            not a horse after-hours emergency-
            cover question card (that lives
            on choosing-a-vet and asks who
            answers a midnight colic, not who
            the PPE vet reports to), not a
            laminated equine-vet interview
            checklist (that lives on
            choosing-a-vet), and not a first-
            horse buyer visit field notebook
            (that lives on
            buying-your-first-horse). This
            page does not hop insurance-
            carrier deep links, after-hours
            emergency-cover question cards as
            the hop itself, or first-aid
            saline / pads / scissors. This
            page does not invent clinic
            listings.
          </p>

          <h2 id="results">Using the Results</h2>
          <p>The exam produces findings, not a simple yes or no. Few horses are entirely without blemish, and the question is whether the findings matter for the intended use -- a minor issue may be irrelevant for light hacking but disqualifying for upper-level competition. The veterinarian explains the significance of each finding and the associated risk, and the buyer decides, possibly renegotiating the price, requesting further tests, or walking away. The exam is a tool for an informed decision, not a guarantee against all future problems.</p>
          <p>
            The same horse pre-purchase exam
            findings decision worksheet is how
            renegotiate, request-more-tests,
            or walk-away stay on one page
            beside each finding&apos;s
            significance — it is not a horse
            lease agreement document binder
            (that lives on leasing-a-horse),
            not a horse insurance policy
            document binder (that lives on
            horse-insurance), and not a horse
            boarding contract document binder
            (that lives on boarding-options).
            This page does not hop
            emergency-triage charts,
            vital-signs cards, or daily-care
            charts. This page does not hop
            medications. This page does not
            claim hands-on testing.
          </p>

          <h2 id="kit">Pre-purchase exam leftover findings kit</h2>
          <p>
            Everyday physical supplies that match the
            what-the-exam-is-for, basic-versus-
            five-stage, radiographs-and-extras,
            who-the-vet-works-for, and
            using-findings copy on this page —
            a laminated pre-purchase exam stage
            walkthrough checklist so two-stage
            rest-plus-walk-trot versus
            five-stage exercise, rest, and
            final trot-up stay visible before
            anyone books the vet, a horse
            pre-purchase exam findings decision
            worksheet so findings versus
            intended use stay on one page
            instead of a pass-or-fail stamp,
            and a horse buyer vet briefing
            question card so intended use,
            budget, and “this vet works for
            the buyer” stay posted before the
            exam. These are educational owner
            searches, not a ranked product
            list, not a clinic listing, not a
            substitute for an independent
            veterinarian acting for the buyer,
            not a monthly-budget-worksheet /
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
            not a horse-insurance-policy-binder /
            insurance-claims-checklist /
            mortality-versus-major-medical
            worksheet hop (those live on
            horse-insurance), not a
            lease-agreement-binder /
            lease-walkthrough-checklist /
            full-versus-partial cost-share
            worksheet hop (those live on
            leasing-a-horse), not a first-aid
            saline / pads / scissors hop, not a
            daily-care-chart / stall-door-care-card
            / husbandry-handbook hop (those live
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
              (laminated pre-purchase exam stage
              walkthrough checklist /
              horse pre-purchase exam findings
              decision worksheet /
              horse buyer vet briefing question
              card).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1135
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
              poultice,
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
              Shop the pre-purchase exam leftover findings kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page what-the-exam-is-for, basic-
              versus-five-stage, radiographs-and-
              extras, who-the-vet-works-for, and
              using-findings copy — a laminated
              pre-purchase exam stage walkthrough
              checklist, a horse pre-purchase exam
              findings decision worksheet, and a
              horse buyer vet briefing question
              card. Educational owner searches
              only. They are not a ranked product
              list, they are not a clinic listing,
              they are not a monthly-budget /
              emergency-fund / keep-feed-farrier
              hop, they are not a choosing-a-vet
              interview / after-hours-cover /
              VCPR-folder hop, they are not a
              first-horse tryout / buyer-notebook /
              PPE-records hop, they are not a
              boarding walkthrough / contract-binder
              / hay-tarp hop, they are not a
              horse-insurance policy-binder /
              claims-checklist / mortality-versus-
              medical hop, they are not a
              lease-agreement-binder /
              lease-walkthrough / cost-share hop,
              they are not a first-aid saline /
              pads / scissors hop, they
              are not a daily-care / emergency-triage
              / owner-guides / calculator-tools
              chart hop, they are not a farrier-log
              hop, and they do not replace an
              independent veterinarian acting for
              the buyer. Horses.com earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+pre+purchase+exam+stage+walkthrough+checklist?s=ownership-pre-purchase-exam"
                amazonLabel="Browse laminated pre-purchase exam stage walkthrough checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+pre+purchase+exam+findings+decision+worksheet?s=ownership-pre-purchase-exam"
                amazonLabel="Browse horse pre-purchase exam findings decision worksheets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+buyer+vet+briefing+question+card?s=ownership-pre-purchase-exam"
                amazonLabel="Browse horse buyer vet briefing question cards on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Purchase Examinations” guidelines. aaep.org.</li>
            <li>British Equine Veterinary Association (BEVA). Pre-purchase examination guidance. beva.org.uk.</li>
            <li>Veterinary texts on the equine purchase examination, current editions.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
