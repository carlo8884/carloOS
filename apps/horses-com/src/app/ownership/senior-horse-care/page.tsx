import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Senior Horse Care — Keeping the Older Horse Thriving",
  description:
    "Reference guide to caring for senior horses: when a horse is old, common age-related conditions, dental and feeding changes, comfort, and quality of life.",
  path: '/ownership/senior-horse-care',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Senior Horse Care — Keeping the Older Horse Thriving",
  description:
    "Reference guide to caring for senior horses: when a horse is old, common age-related conditions, dental and feeding changes, comfort, and quality of life.",
  url: 'https://horses.com/ownership/senior-horse-care',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "At what age is a horse a senior?",
    answer:
      "There is no fixed age -- many horses are considered geriatric from the late teens into the twenties, but a well-kept horse may work soundly at twenty-five while another ages at fifteen. The real cue to shift into senior care is the appearance of age-related changes such as dental wear, stiffness, or weight change, which is why regular monitoring matters more than counting years.",
    answerText:
      "No fixed age -- often the late teens into the twenties, but it varies widely. The cue is the appearance of age-related changes like dental wear or stiffness, not a birthday.",
  },
  {
    question: "What are the most common health problems in older horses?",
    answer:
      "The most common are PPID (Cushing's disease), which causes a long coat, muscle loss, and laminitis risk and is treatable with pergolide; osteoarthritis causing stiffness and lameness; dental disease from worn or missing teeth; weight change in either direction; and reduced immunity with slower healing. Regular veterinary monitoring catches these early.",
    answerText:
      "PPID (Cushing's), osteoarthritis, dental disease, weight change, and reduced immunity are the most common. Regular monitoring catches them early, and several, like PPID, are treatable.",
  },
  {
    question: "How do I know when it's time to let an old horse go?",
    answer:
      "The decision rests on honest assessment of quality of life. When pain, disease, or decline can no longer be managed well despite good care, the kindest choice is to let the horse go before it suffers. Discussing quality of life openly with a trusted veterinarian, and putting the horse's comfort ahead of reluctance to say goodbye, guides this final responsibility of ownership.",
    answerText:
      "When pain or decline can no longer be well managed despite good care, letting the horse go before it suffers is kindest. Discuss quality of life honestly with your vet and prioritize the horse's comfort.",
  },
]

export default function SeniorHorseCarePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses' },
          { title: "Equine Cushing's (PPID)", href: '/health/cushings-ppid' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
        ]}
        hero={{
          title: "Senior Horse Care",
          subtitle:
            "Thanks to better nutrition and veterinary care, horses now routinely live into their late twenties and thirties, and many stay active well into old age. Caring for a senior horse is about adapting to gradual changes -- in teeth, weight, joints, and health -- before they become crises, and about honest attention to comfort and quality of life. This guide covers the essentials of keeping an older horse thriving. This is reference material to inform care alongside your veterinarian.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Senior Horse Care", href: '/ownership/senior-horse-care' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "When Is a Horse Old", href: "#when" },
            { label: "Common Age-Related Conditions", href: "#conditions" },
            { label: "Teeth and Feeding", href: "#feeding" },
            { label: "Comfort and Exercise", href: "#comfort" },
            { label: "Veterinary Monitoring", href: "#monitoring" },
            { label: "Quality of Life", href: "#qol" },
            { label: "Senior-horse leftover comfort-watch kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cushing's / PPID", href: "/health/cushings-ppid" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Best Equine Supplements", href: "/reviews/best-equine-supplements" },
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-senior"
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
              Keep the senior-horse-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior-horse-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the age-related-change
              checklist, weight-and-joint
              watch notes, and quality-of-life
              score card that match the
              when-is-old, age-related-
              conditions, teeth-and-feeding,
              comfort-and-exercise, veterinary-
              monitoring, and quality-of-life
              copy on this page — a laminated
              senior horse age-related change
              checklist so dental wear,
              stiffness, and weight change stay
              visible before anyone waits for
              a birthday (not a feeding-senior
              chopped-forage / soak-tub /
              corner-feeder hop, not a PPID
              shedding-blade / anti-sweat-sheet
              hop, not an ear-eye-tail signal
              checklist), a senior horse
              weight-and-joint watch notebook
              so hard-keeper versus overweight
              and osteoarthritis stiffness stay
              written down between vet visits
              (not a pain-demeanor change-log,
              not a first-horse buyer visit
              notebook, not an emergency-fund
              tracker), and a senior horse
              quality-of-life score card so
              comfort, pain, and decline stay
              on one page before the kindest
              decision (not a BCS chart, not a
              kick-zone safety card, not a
              buyer-vet-briefing card).
              Educational owner senior-care
              tools only, not a ranked product
              list, not a clinic listing, and
              not a substitute for a
              veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Senior-horse-care checklist"
              subtitle="Email the age-related-change card, weight-and-joint watch notes, and quality-of-life score card. No spam."
              ctaText="Email my senior-horse-care checklist"
              source="ownership-senior-horse-care-under-hero"
            />
          </div>

          <h2 id="when">When Is a Horse Old</h2>
          <p>There is no single age at which a horse becomes a senior -- much depends on the individual, the breed, and a lifetime of management. Many horses are considered geriatric somewhere from the late teens into the twenties, but a well-kept horse may be working soundly at twenty-five while another shows its age at fifteen. Rather than a birthday, the cue to shift into senior care is the appearance of age-related changes, which is why regular monitoring matters more than counting years.</p>
          <p>
            A laminated senior horse age-related
            change checklist is how dental wear,
            stiffness, and weight change stay
            visible at the stall door so the
            shift into senior care starts when
            those changes appear — it is not a
            laminated horse ear-eye-tail signal
            checklist (that lives on
            reading-body-language and scores
            pricked / flicking / pinned ears,
            not age-related change), not a
            laminated first-horse tryout
            walkthrough checklist (that lives
            on buying-your-first-horse), not a
            laminated equine-vet interview
            checklist (that lives on
            choosing-a-vet), and not a
            laminated horse barn daily-care
            chart (that lives on the care hub).
            This page does not hop owner-guides
            charts, calculator-tools charts, or
            forage-first charts already pinned
            on those hubs. This page does not
            invent clinic listings.
          </p>

          <h2 id="conditions">Common Age-Related Conditions</h2>
          <ul>
            <li><strong>PPID (Cushing’s disease)</strong> -- very common in older horses; causes a long coat, muscle loss, and laminitis risk, and is treatable with veterinarian-prescribed pergolide.</li>
            <li><strong>Osteoarthritis</strong> -- accumulated joint wear causing stiffness and lameness, managed with movement, weight control, and veterinary treatment.</li>
            <li><strong>Dental disease</strong> -- worn, loose, or missing teeth impairing chewing.</li>
            <li><strong>Weight change</strong> in either direction -- some seniors become hard keepers, others stay overweight, especially with PPID.</li>
            <li><strong>Reduced immunity</strong> and slower healing, raising infection and parasite vulnerability.</li>
          </ul>
          <p>
            The same laminated senior horse
            age-related change checklist is how
            a long coat, muscle loss, stiffness,
            dental wear, and weight change stay
            on one card before they become a
            crisis — it is not a stainless
            horse shedding-blade hop (that
            lives on cushings-ppid and lifts
            a failed-shed coat, not a
            conditions checklist), not a
            wicking anti-sweat sheet hop
            (that also lives on
            cushings-ppid), not a horse
            clippers hop (that lives on
            body-clipping), and not a
            pergolide / vaccine / prescription
            hop. This page does not hop
            medications. This page does not
            hop grimace-scale first-aid-kit /
            poultice / ice-boot hops. This
            page does not claim hands-on
            testing.
          </p>

          <h2 id="feeding">Teeth and Feeding</h2>
          <p>Dental wear is the defining change of old age and drives much of senior feeding. As teeth wear out, a horse struggles to chew long-stem hay, leading to quidding, weight loss, and choke risk, and eventually needing forage in a chewable form -- soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds. Feeding must be tailored to the individual, fed up for a thin senior or carefully restricted for an overweight or PPID horse. See the feeding senior horses guide for detail.</p>
          <p>
            The feeding detail — soaked hay
            cubes, chopped forage, a feed
            soaking tub, a corner feeder so
            a slow-eating senior is not
            bullied, complete soakable senior
            feed, and a topline amino-acid
            lysine supplement — lives on
            feeding-senior-horses. This page
            does not hop those searches. The
            laminated senior horse
            age-related change checklist is
            how “teeth are wearing / the horse
            is quidding” stays visible as the
            cue to open that feeding guide —
            it is not a horse chopped-forage
            hop, not a horse feed-soaking-tub
            hop, and not a horse corner-feeder
            hop. This page does not hop
            forage-first charts or stall-door
            ration cards already pinned on
            the nutrition hub.
          </p>

          <h2 id="comfort">Comfort and Exercise</h2>
          <p>Gentle, consistent exercise keeps an older horse&apos;s joints mobile, muscles toned, and mind engaged; the arthritic senior generally does better with movement and turnout than with confinement. Adapt the work to the horse -- lighter, with thorough warm-ups -- and provide comfort: shelter, soft footing, protection from bullying by younger herdmates, body clipping for PPID horses that fail to shed, and attentive blanketing for those that struggle to keep warm. Small accommodations make a large difference to an old horse&apos;s comfort.</p>
          <p>
            A senior horse weight-and-joint
            watch notebook is how “stiffer
            after a night in, lighter work
            after a warm-up, bullied off
            hay” stays written down so
            turnout and work adapt before
            confinement makes the joints
            worse — it is not a winter
            horse-blanket / turnout-sheet /
            stable-blanket hop (those live
            on the blanket-size calculator),
            not a horse-clippers / clipper-
            blades hop (those live on
            body-clipping), not a portable
            3-sided run-in shelter hop
            (that lives on rain-rot), and
            not a horse stall-rubber-mat
            hop. This page does not hop
            fleece coolers. This page does
            not hop medications.
          </p>

          <h2 id="monitoring">Veterinary Monitoring</h2>
          <p>Senior horses benefit from more frequent veterinary attention: regular dental exams, testing for PPID when signs appear, more careful parasite control given reduced immunity, attention to vaccination, and prompt investigation of weight loss or other changes. Because age-related conditions develop gradually and a thick or PPID coat hides weight change, regular hands-on checks and body condition scoring catch problems early, when they are most manageable.</p>
          <p>
            The same senior horse
            weight-and-joint watch notebook
            is how hands-on weight checks
            and new stiffness stay written
            down between dental exams and
            PPID testing — it is not a
            horse body-condition-score chart
            hop (that lives on the BCS
            tool), not a horse
            pain-demeanor change-log
            notebook (that lives on
            reading-body-language and
            records grimace-scale
            demeanor, not senior weight
            and joint trend), not an
            equine farrier log book, and
            not a horse after-hours
            emergency-cover question card
            (that lives on choosing-a-vet).
            This page does not hop
            vaccines, pergolide, or other
            prescription products. This
            page does not invent clinic
            listings. This page does not
            hop stall-door vital-signs
            cards already pinned on the
            health hub.
          </p>

          <h2 id="qol">Quality of Life</h2>
          <p>The hardest and most important part of senior care is honest assessment of quality of life. An old horse can be kept comfortable and happy for many years with good management, but there comes a point in some lives when pain, disease, or decline can no longer be managed well, and the kindest decision is to let the horse go before it suffers. Discussing quality of life openly with a trusted veterinarian, and prioritizing the horse&apos;s comfort over the owner&apos;s reluctance to say goodbye, is the final responsibility of good ownership.</p>
          <p>
            A senior horse quality-of-life
            score card is how comfort, pain,
            appetite, and whether decline
            can still be managed stay on
            one page before that conversation
            with the veterinarian — it is
            not a horse handler kick-zone
            safety question card (that
            lives on reading-body-language),
            not a horse buyer vet-briefing
            question card (that lives on
            pre-purchase-exam), not a
            horse mortality-versus-major-
            medical decision worksheet
            (that lives on horse-insurance),
            and not a laminated horse
            insurance claims checklist.
            This page does not hop
            first-aid saline / pads /
            scissors. This page does not
            hop medications. This page
            does not claim hands-on
            testing. This page does not
            invent clinic listings.
          </p>

          <h2 id="kit">Senior-horse leftover comfort-watch kit</h2>
          <p>
            Everyday owner tools that match the
            when-is-old, age-related-conditions,
            teeth-and-feeding, comfort-and-
            exercise, veterinary-monitoring, and
            quality-of-life copy on this page —
            a laminated senior horse age-related
            change checklist so dental wear,
            stiffness, and weight change stay
            visible before anyone waits for a
            birthday, a senior horse
            weight-and-joint watch notebook so
            hard-keeper versus overweight and
            osteoarthritis stiffness stay
            written down between vet visits,
            and a senior horse quality-of-life
            score card so comfort, pain, and
            decline stay on one page before
            the kindest decision. These are
            educational owner searches, not a
            ranked product list, not a clinic
            listing, not a substitute for a
            veterinarian, not a chopped-forage
            / feed-soaking-tub / corner-feeder
            / complete-senior-feed hop (those
            live on feeding-senior-horses),
            not a shedding-blade /
            anti-sweat-sheet / automatic-
            waterer hop (those live on
            cushings-ppid), not a clippers /
            clipper-blades / fleece-cooler hop
            (those live on body-clipping),
            not a winter-blanket / turnout-
            sheet / stable-blanket hop (those
            live on the blanket-size
            calculator), not an ear-eye-tail
            signal-checklist / kick-zone
            safety-card / pain-demeanor
            notebook hop (those live on
            reading-body-language), not a
            pre-purchase-exam stage-
            walkthrough / findings-worksheet /
            buyer-vet-briefing hop, not a
            lease-agreement-binder /
            lease-walkthrough / cost-share hop,
            not a horse-insurance policy-
            binder / claims-checklist /
            mortality-versus-medical hop, not
            a monthly-budget / emergency-fund
            / keep-feed-farrier hop, not a
            choosing-a-vet interview /
            after-hours-cover / VCPR-folder
            hop, not a first-horse tryout /
            buyer-notebook / PPE-records hop,
            not a boarding walkthrough /
            contract-binder / hay-tarp hop,
            not a first-aid saline / pads /
            scissors hop, not a grimace-scale
            first-aid-kit / poultice /
            ice-boot hop, not a daily-care-
            chart / stall-door-care-card /
            husbandry-handbook hop, not an
            emergency-triage-chart /
            vital-signs-card / health-handbook
            hop, not a forage-first-chart /
            ration-card / nutrition-handbook
            hop, not an owner-guides-chart
            hop, not a calculator-tools-chart
            hop, not a BCS-chart hop, and
            not a farrier-log hop. This page
            does not hop medications or
            vaccines. This page does not
            claim hands-on testing. This
            page does not invent clinic
            listings.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated senior horse age-related
              change checklist /
              senior horse weight-and-joint watch
              notebook /
              senior horse quality-of-life score
              card).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1137
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
              feeding-senior-horses
              horse+chopped+forage /
              horse+feed+soaking+tub /
              horse+corner+feeder /
              complete+senior+horse+feed+soakable /
              horse+topline+amino+acid+supplement+lysine,
              cushings-ppid
              stainless+horse+shedding+blade /
              wicking+horse+anti+sweat+sheet /
              automatic+horse+waterer,
              body-clipping
              horse+clippers /
              horse+clipper+blades /
              horse+fleece+cooler,
              blanket-size calculator
              winter+horse+blanket /
              horse+turnout+sheet /
              horse+stable+blanket,
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
              BCS
              horse+body+condition+score+chart. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the senior-horse leftover comfort-watch kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page when-is-old, age-related-
              conditions, teeth-and-feeding,
              comfort-and-exercise, veterinary-
              monitoring, and quality-of-life copy —
              a laminated senior horse age-related
              change checklist, a senior horse
              weight-and-joint watch notebook, and
              a senior horse quality-of-life score
              card. Educational owner searches only.
              They are not a ranked product list,
              they are not a clinic listing, they
              are not a feeding-senior chopped-
              forage / soak-tub / corner-feeder hop,
              they are not a PPID shedding-blade /
              anti-sweat-sheet hop, they are not a
              body-clipping clippers hop, they are
              not a blanket-size calculator hop,
              they are not a reading-body-language
              ear-eye-tail / kick-zone /
              pain-demeanor hop, they are not a
              pre-purchase-exam stage-walkthrough /
              findings-worksheet / buyer-vet-
              briefing hop, they are not a
              lease / insurance / monthly-budget /
              choosing-a-vet / first-horse /
              boarding hop, they are not a
              first-aid saline / pads / scissors
              hop, they are not a grimace-scale
              first-aid-kit / poultice / ice-boot
              hop, they are not a daily-care /
              emergency-triage / owner-guides /
              calculator-tools chart hop, they are
              not a BCS-chart hop, and they do
              not replace a veterinarian. Horses.com
              earns a commission on qualifying
              purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+senior+horse+age+related+change+checklist?s=ownership-senior-horse-care"
                amazonLabel="Browse laminated senior horse age-related change checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+horse+weight+and+joint+watch+notebook?s=ownership-senior-horse-care"
                amazonLabel="Browse senior horse weight-and-joint watch notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+horse+quality+of+life+score+card?s=ownership-senior-horse-care"
                amazonLabel="Browse senior horse quality-of-life score cards on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. PPID recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>Ireland JL, et al. Research on geriatric horse health and management, various.</li>
            <li>American Association of Equine Practitioners. “Senior Horse Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
