import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Choosing an Equine Vet — Finding and Working With Your Veterinarian",
  description:
    "Reference guide to choosing an equine veterinarian: why the relationship matters, what to look for, emergency cover, building the relationship, and the VCPR.",
  path: '/ownership/choosing-a-vet',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Choosing an Equine Vet — Finding and Working With Your Veterinarian",
  description:
    "Reference guide to choosing an equine veterinarian: why the relationship matters, what to look for, emergency cover, building the relationship, and the VCPR.",
  url: 'https://horses.com/ownership/choosing-a-vet',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Why should I choose a vet before an emergency happens?",
    answer:
      "Because emergencies do not wait, and the worst time to search for a veterinarian is during a colic at midnight. A vet who already knows your horse and its history makes faster, better decisions in a crisis, and many treatments and prescriptions require an established relationship. Registering and using a vet for routine care means help is ready when you need it.",
    answerText:
      "Because emergencies don't wait, and a vet who already knows your horse decides faster in a crisis. Many treatments also need an established relationship, so register and use one before you need it.",
  },
  {
    question: "What should I look for in an equine vet?",
    answer:
      "Look for genuine equine experience and qualifications (not only small-animal practice), a location and coverage area close enough to attend promptly, a good reputation among local horse owners and your barn, access to diagnostics and clear referral arrangements, and a communication style you trust and can talk to honestly. Reliable emergency cover is especially important.",
    answerText:
      "Equine experience and qualifications, a location close enough to attend promptly, a good local reputation, access to diagnostics and referral, clear communication, and reliable emergency cover.",
  },
  {
    question: "What is a vet-client-patient relationship?",
    answer:
      "The vet-client-patient relationship (VCPR) means a veterinarian has examined and become familiar with your horse and can therefore make informed decisions and legally prescribe medication for it. Many treatments and prescriptions require an established VCPR, which is why registering with a vet and using them for routine care matters before any emergency arises.",
    answerText:
      "It means a vet has examined and knows your horse and can make informed decisions and legally prescribe for it. Many treatments require it, so establish it through routine care before emergencies.",
  },
]

export default function ChoosingVetPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Equine First-Aid Kit', href: '/ownership/first-aid-kit' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'The Pre-Purchase Exam', href: '/ownership/pre-purchase-exam' },
          { title: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
        ]}
        hero={{
          title: "Choosing an Equine Vet",
          subtitle:
            "Your veterinarian is the single most important professional relationship in horse ownership -- the partner you rely on for routine care and the person you call at two in the morning when something is badly wrong. Choosing the right equine vet, and building a genuine working relationship before an emergency, is among the most consequential decisions a new owner makes. This guide covers what to look for and how to work well together. This is reference material to inform the choice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Choosing a Vet", href: '/ownership/choosing-a-vet' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why the Relationship Matters", href: "#why" },
            { label: "What to Look For", href: "#look" },
            { label: "Emergency Cover", href: "#emergency" },
            { label: "The Vet-Client-Patient Relationship", href: "#vcpr" },
            { label: "Building the Relationship", href: "#building" },
            { label: "Equine-vet leftover interview kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "First-Aid Kit", href: "/ownership/first-aid-kit" },
              { label: "The Pre-Purchase Exam", href: "/ownership/pre-purchase-exam" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Equine professional directory", href: "/directory" },
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-vet"
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
              Keep the equine-vet interview checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Equine-vet interview checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the equine-vet-interview,
              after-hours-emergency-cover, and
              VCPR-records-readiness notes that match
              the what-to-look-for, emergency-cover,
              and keep-good-records copy on this
              page — a laminated equine-vet interview
              checklist so the equine-focus,
              coverage-area, reputation, referral,
              and communication questions are posted
              before the first call (not a first-horse
              tryout walkthrough, not a boarding-facility
              walkthrough, not a daily-care chart), a
              horse after-hours emergency-cover question
              card so 24-hour cover, who answers, response
              time, and surgical-referral questions stay
              visible (not an emergency-triage chart, not
              a vital-signs card, not a first-aid saline
              hop), and a horse veterinary history /
              VCPR records folder so the exam history
              that establishes the relationship stays
              with the horse (not a pre-purchase exam
              records binder, not a boarding-contract
              binder, not a farrier log). Educational
              owner checklist, not a ranked product
              list, and not a substitute for a
              veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Equine-vet interview checklist"
              subtitle="Email the interview, emergency-cover, and VCPR-records notes. No spam."
              ctaText="Email my equine-vet interview checklist"
              source="ownership-choosing-a-vet-under-hero"
            />
          </div>

          <h2 id="why">Why the Relationship Matters</h2>
          <p>An equine veterinarian does far more than treat illness: they guide vaccination and parasite control, perform dental and routine care, conduct pre-purchase exams, advise on nutrition and management, and are the first call in any emergency. A vet who knows your horse and its history makes faster, better decisions in a crisis. Because emergencies do not wait, the relationship must be established before you need it -- the worst time to be searching for a vet is during a colic at midnight. For a conservative sign-list urgency read while you are lining up that relationship, use the <a href="/tools/is-this-a-horse-emergency">Is This a Horse Emergency? triage tool</a> — it does not diagnose.</p>

          <h2 id="look">What to Look For</h2>
          <ul>
            <li><strong>Equine focus and qualifications</strong> -- a vet experienced with horses (an equine or large-animal practice), not only small animals.</li>
            <li><strong>Location and coverage area</strong> -- close enough to attend promptly, especially for emergencies.</li>
            <li><strong>Reputation</strong> among local horse owners, trainers, and your boarding facility.</li>
            <li><strong>Facilities and referral</strong> -- access to diagnostics, and clear arrangements for referring surgical or specialist cases.</li>
            <li><strong>Communication style</strong> that suits you -- a vet who explains clearly and whom you trust and can talk to honestly.</li>
          </ul>
          <p>
            A laminated equine-vet interview checklist is how
            the equine-focus, coverage-area, reputation,
            referral, and communication questions stay
            posted before the first call instead of being
            forgotten mid-conversation — it is not a
            laminated first-horse tryout walkthrough
            checklist (that lives on
            buying-your-first-horse), not a laminated
            horse boarding facility walkthrough checklist
            (that lives on boarding-options), and not a
            laminated horse barn daily-care chart (that
            lives on the care hub). This page does not hop
            owner-guides charts, calculator-tools charts,
            or forage-first charts already pinned on those
            hubs.
          </p>

          <h2 id="emergency">Emergency Cover</h2>
          <p>Confirm how emergencies are handled before you commit, because this is when a vet matters most. Ask whether the practice provides 24-hour emergency cover, who answers after hours, the typical response time to your location, and what referral options exist for cases needing hospital care or surgery. A practice with reliable, prompt emergency cover and a clear referral pathway to a surgical hospital is invaluable, and worth prioritizing in the choice.</p>
          <p>
            A horse after-hours emergency-cover question
            card is how the 24-hour-cover, who-answers,
            response-time, and surgical-referral questions
            stay visible when you interview a practice —
            it is not a laminated horse barn
            emergency-triage chart (that lives on the
            health hub), not a horse stall-door vital-signs
            card (that lives on the health hub), and not a
            first-aid saline / pads / scissors hop (those
            live on first-aid-kit). This page does not hop
            equine first-aid kits, digital veterinary
            thermometers, vet-wrap, or poultice searches
            already pinned on grimace-scale and emergency
            tools.
          </p>

          <h2 id="vcpr">The Vet-Client-Patient Relationship</h2>
          <p>A formal concept underpins veterinary care: the vet-client-patient relationship, or VCPR. It means a veterinarian has examined and become familiar with your horse and can therefore make informed decisions and legally prescribe medication for it. Many treatments and prescriptions require an established VCPR, which is one more reason to register with a vet and have them see your horse for routine care -- so that when something goes wrong, they already know the patient and can act.</p>
          <p>
            A horse veterinary history / VCPR records
            folder is how the exam history that
            establishes the relationship stays with the
            horse instead of living in a phone photo
            roll — it is not a horse pre-purchase exam
            records binder (that lives on
            buying-your-first-horse), not a horse boarding
            contract document binder (that lives on
            boarding-options), and not a farrier log book
            (that lives on farrier-schedule). This page
            does not hop weatherproof clipboards already
            pinned on flu pages, and it does not hop
            medications or vaccines.
          </p>

          <h2 id="building">Building the Relationship</h2>
          <p>Once you have chosen a vet, invest in the relationship through routine care -- vaccinations, dental checks, and wellness visits -- rather than only calling in crises. Keep good records, follow advice, ask questions, settle accounts promptly, and be a considerate client (a calm, prepared owner with the horse caught and the history ready makes the vet&apos;s job easier). A strong, trusting, two-way relationship pays off enormously when a real emergency comes, because the vet knows you and your horse and you trust their judgment.</p>
          <p>
            The same horse veterinary history / VCPR
            records folder is also how a prepared owner
            arrives with the history ready — vaccination
            dates, dental notes, and prior findings —
            without turning this page into a vaccine hop,
            a dental-care hop, or a clinic-directory
            listing. Educational owner records only.
            This page does not claim hands-on testing.
          </p>

          <h2 id="kit">Equine-vet leftover interview kit</h2>
          <p>
            Everyday physical supplies that match the
            what-to-look-for, emergency-cover, and
            keep-good-records copy on this page — a
            laminated equine-vet interview checklist so
            the equine-focus, coverage-area, reputation,
            referral, and communication questions are
            posted before the first call, a horse
            after-hours emergency-cover question card so
            24-hour cover, who answers, response time,
            and surgical-referral questions stay visible,
            and a horse veterinary history / VCPR records
            folder so the exam history that establishes
            the relationship stays with the horse. These
            are educational owner searches, not a ranked
            product list, not a substitute for a
            veterinarian, not a first-horse tryout
            walkthrough / buyer-visit-notebook /
            pre-purchase-exam-records-binder hop (those
            live on buying-your-first-horse), not a
            boarding-facility walkthrough /
            boarding-contract-binder / hay-bale-tarp hop
            (those live on boarding-options), not a
            first-aid saline / pads / scissors hop, not a
            daily-care-chart / stall-door-care-card /
            husbandry-handbook hop (those live on the
            care hub), not an emergency-triage-chart /
            vital-signs-card / health-handbook hop, not a
            forage-first-chart / ration-card /
            nutrition-handbook hop, not an
            owner-guides-chart hop, not a
            calculator-tools-chart hop, not a
            farrier-log / flood-light hop, and not a
            weatherproof-clipboard hop. This page does
            not hop medications or vaccines. This page
            does not claim hands-on testing. This page
            does not invent clinic listings.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated equine-vet interview checklist /
              horse after-hours emergency-cover question
              card /
              horse veterinary history / VCPR records
              folder).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1131
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
              equine+nutrition+reference+handbook, #1123
              laminated+horse+barn+treat+safety+chart /
              lidded+horse+barn+treat+tote /
              horse+barn+treat+prep+shears,
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
              Shop the equine-vet leftover interview kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page what-to-look-for,
              emergency-cover, and
              keep-good-records copy — a laminated
              equine-vet interview checklist, a horse
              after-hours emergency-cover question
              card, and a horse veterinary history /
              VCPR records folder. Educational owner
              searches only. They are not a ranked
              product list, they are not a first-horse
              tryout / buyer-notebook / PPE-records
              hop, they are not a boarding walkthrough
              / contract-binder / hay-tarp hop, they
              are not a first-aid saline / pads /
              scissors hop, they are not a daily-care
              / emergency-triage / owner-guides /
              calculator-tools chart hop, and they do
              not replace a veterinarian. Horses.com
              earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+equine+vet+interview+checklist?s=ownership-choosing-a-vet"
                amazonLabel="Browse laminated equine-vet interview checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+after+hours+emergency+cover+question+card?s=ownership-choosing-a-vet"
                amazonLabel="Browse horse after-hours emergency-cover question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+veterinary+history+vcpr+records+folder?s=ownership-choosing-a-vet"
                amazonLabel="Browse horse veterinary history / VCPR records folders on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Choosing and Working With Your Veterinarian” owner resources. aaep.org.</li>
            <li>American Veterinary Medical Association. Guidance on the veterinarian-client-patient relationship. avma.org.</li>
            <li>British Equine Veterinary Association (BEVA). Finding an equine vet. beva.org.uk.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
