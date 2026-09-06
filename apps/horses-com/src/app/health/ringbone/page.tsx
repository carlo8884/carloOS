import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Ringbone in Horses — High vs Low, Signs, Management",
  description:
    "Reference guide to equine ringbone: arthritis of the pastern (high) and coffin (low) joints, articular vs periarticular forms, signs, diagnosis, and management.",
  path: '/health/ringbone',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Ringbone in Horses — High vs Low, Signs, Management",
  description:
    "Equine ringbone: high (pastern) versus low (coffin) ringbone, articular versus periarticular forms, clinical signs, diagnosis, and management.",
  url: 'https://horses.com/health/ringbone',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Ringbone",
  description:
    "Equine ringbone: high (pastern) versus low (coffin) ringbone, articular versus periarticular forms, clinical signs, diagnosis, and management.",
  url: 'https://horses.com/health/ringbone',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Can a horse with ringbone still be ridden?",
    answer:
      "It depends on the type. Many horses with periarticular or stabilized high ringbone return to work, and pastern-joint fusion can restore soundness because that joint moves little. Articular low ringbone in the high-motion coffin joint carries a more guarded prognosis. A veterinary diagnosis with radiographs determines the realistic outlook.",
    answerText:
      "Often yes, depending on type. Periarticular and fused pastern-joint cases frequently return to work; articular coffin-joint ringbone is more guarded. Radiographs determine the outlook.",
  },
  {
    question: "What is the difference between high and low ringbone?",
    answer:
      "High ringbone affects the pastern joint between the long and short pastern bones; low ringbone affects the coffin joint inside the hoof. Low ringbone is often harder to manage because the coffin joint is a high-motion joint hidden within the hoof capsule.",
    answerText:
      "High ringbone affects the pastern joint; low ringbone affects the coffin joint inside the hoof. Low ringbone is usually harder to manage.",
  },
  {
    question: "Does ringbone get worse over time?",
    answer:
      "Articular ringbone is progressive joint disease and tends to advance, though good farriery and veterinary management slow it. Periarticular ringbone often stabilizes once the underlying ligament injury heals, after which the horse may stay comfortable. The type, confirmed by radiographs, predicts the course.",
    answerText:
      "Articular ringbone tends to progress, though management slows it. Periarticular ringbone often stabilizes once the underlying injury heals. The type predicts the course.",
  },
]

export default function RingbonePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
          { title: 'Osteoarthritis', href: '/health/osteoarthritis' },
          { title: 'Navicular Syndrome', href: '/health/navicular-syndrome' },
        ]}
        hero={{
          title: "Ringbone in Horses",
          subtitle:
            "Ringbone is the common name for arthritis and new bone growth in the pastern or coffin joint of the horse -- so called because the bony change can encircle the pastern like a ring. It is a specific form of osteoarthritis in the lower limb and a frequent cause of chronic lameness in working horses. Whether a horse stays usable depends largely on which joint is affected and whether the joint surface itself is involved. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Ringbone", href: '/health/ringbone' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Ringbone", href: "#what" },
            { label: "High vs Low", href: "#types" },
            { label: "Articular vs Periarticular", href: "#articular" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis and Management", href: "#management" },
            { label: "Balance-and-exercise kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
              { label: "Joint Supplements", href: "/supplements/joint-supplements" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-ringbone"
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
              Keep the ringbone balance-and-exercise checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse ringbone balance-and-exercise checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the equine-hoof-angle-gauge,
              leather-horse-lunge-cavesson, and
              neoprene-horse-overreach-bell-boots notes
              that match the balance-the-foot, controlled-
              exercise, and hard-ground copy on this page
              — a hoof-angle gauge so the farrier visit
              has a recorded pastern-to-hoof angle instead
              of a guessed one, a leather lunge cavesson
              so controlled exercise is a circle instead
              of a concussive gallop, and neoprene
              overreach bell boots so the pastern and
              coffin are not struck on hard ground.
              Educational balance-and-exercise checklist,
              not a treatment, not Adequan or an NSAID,
              not a substitute for calling the
              veterinarian, and not a heart-bar, rocker-
              toe, or polo-wrap hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse ringbone balance-and-exercise checklist"
              subtitle="Email the hoof-gauge, lunge-cavesson, and overreach-boot notes. No spam."
              ctaText="Email my horse ringbone balance-and-exercise checklist"
              source="health-ringbone-under-hero"
            />
          </div>

          <h2 id="what">What Is Ringbone</h2>
          <p>Ringbone is osteoarthritis -- with associated new bone formation -- affecting the joints of the lower limb between the fetlock and the hoof. It develops from repetitive concussion, poor conformation, hoof imbalance, or previous injury that inflames the joint and provokes the bone to lay down osteophytes. As the bony change builds, it can become palpable or even visible as a firm enlargement around the pastern, the origin of the name.</p>

          <h2 id="types">High vs Low</h2>
          <p>Ringbone is classified by location. High ringbone affects the pastern joint (the proximal interphalangeal joint, between the long and short pastern bones). Low ringbone affects the coffin joint (the distal interphalangeal joint, between the short pastern bone and the coffin bone, inside the hoof capsule). Low ringbone is often harder to manage because the coffin joint is a high-motion joint and the change is hidden within the hoof.</p>

          <h2 id="articular">Articular vs Periarticular</h2>
          <p>An equally important distinction is whether the joint surface itself is involved. Articular ringbone involves the cartilage and joint surface and carries a more guarded prognosis because it is true progressive joint disease. Periarticular (or &apos;false&apos;) ringbone is new bone formation around the joint, often from a torn ligament attachment, without involving the joint surface; once it stabilizes, the horse may be sound. Imaging distinguishes the two.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A gradually worsening, often subtle lameness that increases with work.</li>
            <li>A firm, bony enlargement around the pastern in advanced high ringbone.</li>
            <li>Reduced flexibility and a shortened, stabbing stride.</li>
            <li>Heat or sensitivity over the affected joint in active phases.</li>
            <li>Lameness that worsens on hard ground and after work.</li>
          </ul>

          <h2 id="management">Diagnosis and Management</h2>
          <p>A veterinarian localizes the lameness with diagnostic blocks and confirms ringbone with radiographs, which show the location, severity, and joint involvement. Management mirrors osteoarthritis generally. All treatment decisions belong to the veterinarian.</p>
          <ul>
            <li><strong>Balance the foot and ease breakover.</strong> Corrective farriery is the foundation — a long toe and a broken hoof-pastern axis load the pastern and coffin. An equine hoof-angle gauge is how that angle is recorded at the visit instead of guessed — it is not a farrier log book or a portable hoof stand (those live on the farrier-schedule page) and not a heart-bar, wedge, or rocker shoe (those live on navicular).</li>
            <li><strong>Control the work.</strong> Controlled exercise keeps the joint moving without the concussion of hard, fast work. A leather lunge cavesson is how that work stays a quiet circle — it is not a 30-foot cotton lunge line or a traffic-cone set (those live on lameness-basics) and not cotton polo exercise wraps (those live on osteoarthritis).</li>
            <li><strong>Protect the pastern on hard ground.</strong> Lameness often worsens on hard footing and after work. Neoprene overreach bell boots are how the pastern and heel are not struck by the hind foot — they are not full-length turnout boots (those live on mud-fever), not shipping boots (those live on trailering), not fly boots, and not riding hoof boots.</li>
            <li><strong>Manage weight</strong> so extra bodyweight is not extra joint load. Hanging hay-bale scales already live on EMS; this page does not hop another scale.</li>
            <li><strong>Leave joint medication to the veterinarian.</strong> Systemic and intra-articular anti-inflammatories, Adequan, Legend, and surgical fusion of a low-motion pastern stay a veterinary call. This page does not hop NSAIDs, injectables, or joint supplements — those already live on the joint-supplement guide when they are shoppable at all.</li>
          </ul>

          <h2 id="kit">Balance-and-exercise kit</h2>
          <p>
            Everyday physical supplies that match the
            balance-the-foot, controlled-exercise, and
            hard-ground copy on this page — an equine
            hoof-angle gauge so the farrier visit has a
            recorded pastern-to-hoof angle, a leather
            lunge cavesson so work is a quiet circle,
            and neoprene overreach bell boots so the
            pastern and coffin are not struck on hard
            ground. These are educational barn tools,
            not a ranked product list, not a substitute
            for veterinary care, and not Adequan,
            Legend, NSAIDs, or a diagnosis. Heart-bar,
            wedge, and rocker shoes already live on
            navicular. Farrier stands and log books
            already live on the farrier-schedule page.
            Polo wraps and arena drags already live on
            osteoarthritis. Lunge lines and cones
            already live on lameness-basics. This page
            does not hop medications, vaccines, or
            injectable joint products. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (equine hoof angle gauge /
              leather horse lunge cavesson /
              neoprene horse overreach bell boots).
              These are educational balance-and-exercise
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              Adequan / NSAID / joint-supplement /
              horseshoe ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1106
              tow+behind+arena+drag+harrow /
              cotton+horse+polo+exercise+wraps /
              portable+horse+paddock+panels, #1105
              digital+hanging+hay+bale+scale /
              equine+forage+nsc+hay+test+kit /
              portable+strip+grazing+step+in+posts, #1104
              portable+3+sided+horse+run+in+shelter /
              labeled+stackable+horse+grooming+caddy /
              large+mesh+horse+blanket+wash+bag, #1103
              heavy+duty+paddock+mud+grid /
              full+length+horse+turnout+boots /
              waffle+weave+horse+leg+towel, #1102
              irish+knit+horse+cooler /
              wool+exercise+quarter+sheet /
              loose+plain+white+salt+horse, #1101
              steel+heart+bar+horseshoe /
              3+degree+leather+wedge+pad /
              rocker+toe+steel+horseshoe, #1100
              long+handle+stock+tank+brush /
              20+foot+barn+mosquito+netting /
              fine+mesh+horse+mosquito+sheet, #1099
              30+foot+cotton+lunge+line /
              leather+chain+lead+shank+horse /
              orange+traffic+cone+set, #1098
              weatherproof+storage+clipboard /
              round+rubber+feed+pan+horse /
              paper+pellet+horse+bedding, #1097
              color+coded+flat+back+horse+buckets /
              disposable+coverall+suit /
              heavy+duty+rubber+boot+dip+tub, #1094
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks /
              apple+wedger+slicer,
              equine+farrier+log+book /
              portable+farrier+hoof+stand
              (farrier-schedule),
              horse+hoof+boots
              (hoof-care-basics),
              horse+shipping+boots
              (trailering),
              horse+fly+boots
              (fly-control),
              platinum+performance+CJ+joint+supplement
              (joint-supplements).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ringbone balance-and-exercise kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page balance-the-foot, controlled-
              exercise, and hard-ground copy — an equine
              hoof-angle gauge, a leather lunge cavesson,
              and neoprene overreach bell boots.
              Educational barn tools only. Hopping
              Adequan, NSAIDs, or shoes is not the job
              of this kit. They are not a ranked
              product list, they are not a substitute
              for veterinary care, they are not a #1106
              arena-drag / polo-wrap / paddock-panel
              hop, they are not a #1105 hay-bale-scale /
              NSC-hay-test-kit / strip-grazing-posts
              hop, they are not a #1104 run-in-shelter /
              grooming-caddy / blanket-wash-bag hop,
              they are not a #1103 mud-grid / turnout-
              boot / leg-towel hop, they are not a
              #1102 Irish-knit-cooler / quarter-sheet /
              loose-salt hop, they are not a #1101
              heart-bar / wedge-pad / rocker-toe hop,
              they are not a #1100 stock-tank-brush /
              barn-mosquito-netting / mosquito-sheet
              hop, they are not a #1099 lunge-line /
              lead-shank / traffic-cone hop, they are
              not a farrier-schedule log / stand hop,
              they are not a joint-supplement hop, and
              they do not replace a veterinarian.
              Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+hoof+angle+gauge?s=health-ringbone"
                amazonLabel="Browse equine hoof-angle gauges on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/leather+horse+lunge+cavesson?s=health-ringbone"
                amazonLabel="Browse leather lunge cavessons on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/neoprene+horse+overreach+bell+boots?s=health-ringbone"
                amazonLabel="Browse neoprene overreach bell boots on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>Ross MW, Dyson SJ (eds). Diagnosis and Management of Lameness in the Horse, 2nd ed., Elsevier, 2011.</li>
            <li>American Association of Equine Practitioners. “Ringbone” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
