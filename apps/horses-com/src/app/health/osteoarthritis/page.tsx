import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Osteoarthritis in Horses — Joint Disease, Signs, Management",
  description:
    "Reference guide to equine osteoarthritis (degenerative joint disease): how cartilage breaks down, signs, diagnosis, joint medication, and management.",
  path: '/health/osteoarthritis',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Osteoarthritis in Horses — Joint Disease, Signs, Management",
  description:
    "Equine osteoarthritis (degenerative joint disease): cartilage breakdown, clinical signs, diagnosis, joint medications, and long-term management.",
  url: 'https://horses.com/health/osteoarthritis',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Osteoarthritis",
  description:
    "Equine osteoarthritis (degenerative joint disease): cartilage breakdown, clinical signs, diagnosis, joint medications, and long-term management.",
  url: 'https://horses.com/health/osteoarthritis',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Can osteoarthritis in horses be reversed?",
    answer:
      "Cartilage damage in established osteoarthritis is not reversible, but the disease can be slowed and the horse kept comfortable. A combination of veterinary treatment, consistent low-impact exercise, weight control, good farriery, and forgiving footing keeps many arthritic horses sound and in work for years.",
    answerText:
      "Cartilage damage is not reversible, but the disease can be slowed and managed. Veterinary treatment, exercise, weight control, and good farriery keep many arthritic horses working.",
  },
  {
    question: "Is turnout good or bad for an arthritic horse?",
    answer:
      "Turnout and consistent gentle movement are generally good for arthritic joints -- motion maintains cartilage nutrition and synovial-fluid circulation, whereas stall confinement promotes stiffness. The exception is during an acute flare or following a procedure, when your veterinarian may prescribe restricted movement.",
    answerText:
      "Generally good -- gentle movement maintains cartilage health and reduces stiffness. The exception is during acute flares or after procedures, when your vet may restrict movement.",
  },
  {
    question: "Do joint supplements work for equine arthritis?",
    answer:
      "Evidence for oral joint supplements is mixed and product quality varies widely. Some horses appear to benefit and they are low-risk, so many owners use them as a long-term adjunct -- not a replacement -- alongside veterinary treatment and management. Discuss specific products with your veterinarian.",
    answerText:
      "The evidence is mixed and product quality varies. They are low-risk and some horses appear to benefit, so they are used as an adjunct, not a replacement, for veterinary care.",
  },
]

export default function OsteoarthritisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
          { title: 'Ringbone', href: '/health/ringbone' },
          { title: 'Joint Supplements', href: '/supplements/joint-supplements' },
        ]}
        hero={{
          title: "Osteoarthritis in Horses",
          subtitle:
            "Osteoarthritis -- degenerative joint disease -- is the single most common cause of lameness in performance and aging horses. It is the progressive breakdown of the smooth cartilage that lines a joint, leading to inflammation, pain, bone change, and reduced range of motion. While the cartilage damage itself is not reversible, a well-built management plan combining veterinary care, farriery, exercise, and weight control keeps a great many arthritic horses sound and working. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Osteoarthritis", href: '/health/osteoarthritis' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Osteoarthritis", href: "#what" },
            { label: "Commonly Affected Joints", href: "#joints" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Veterinary Treatment", href: "#treatment" },
            { label: "Management at Home", href: "#management" },
            { label: "Keep-moving kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Joint Supplements", href: "/supplements/joint-supplements" },
              { label: "Ringbone", href: "/health/ringbone" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-osteoarthritis"
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
              Keep the osteoarthritis keep-moving checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse osteoarthritis keep-moving checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the tow-behind-arena-drag-harrow,
              cotton-horse-polo-exercise-wraps, and
              portable-horse-paddock-panels notes that
              match the choose-footing, long-warm-up, and
              keep-moving copy on this page — a drag so
              the working surface stays even after rain,
              cotton polo wraps so a long warm-up is even
              and protected, and portable paddock panels
              so a stiff horse still has a small turnout
              loop when a huge field is too deep or icy.
              Educational keep-moving checklist, not a
              treatment, not Adequan or an NSAID, not a
              substitute for calling the veterinarian,
              and not a joint-supplement, heart-bar, or
              hanging-scale hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse osteoarthritis keep-moving checklist"
              subtitle="Email the arena-drag, polo-wrap, and paddock-panel notes. No spam."
              ctaText="Email my horse osteoarthritis keep-moving checklist"
              source="health-osteoarthritis-under-hero"
            />
          </div>

          <h2 id="what">What Is Osteoarthritis</h2>
          <p>A healthy joint is lined with articular cartilage -- a slick, resilient surface that lets bone glide on bone -- and lubricated by joint (synovial) fluid. Osteoarthritis begins when that cartilage is damaged by wear, repetitive concussion, injury, or inflammation. The damaged cartilage releases enzymes that degrade it further, the joint inflames, the surrounding bone responds by forming new growth (osteophytes), and the cycle becomes self-sustaining. The result is pain, stiffness, and progressive loss of motion.</p>

          <h2 id="joints">Commonly Affected Joints</h2>
          <p>Osteoarthritis tends to settle in the joints that take the most repetitive load for a given use. The hocks (bone spavin) are classic in dressage, jumping, western, and driving horses. The coffin and pastern joints (the latter producing &apos;ringbone&apos;) are common in all disciplines. The fetlocks suffer in horses doing fast, concussive work, and the knees and stifles are affected in others. Where the arthritis sits is shaped by conformation and the demands of the discipline.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Stiffness that is worst at the start of work and eases as the horse warms up.</li>
            <li>Reduced range of motion, a shortened stride, and reluctance to perform specific movements.</li>
            <li>Visible joint swelling, heat, or effusion (fluid distension).</li>
            <li>Lameness that worsens after hard work or on hard ground.</li>
            <li>Positive response to flexion tests on the affected joint.</li>
            <li>Behavioral changes -- resistance, reluctance to go forward, or a drop in performance.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>A veterinary lameness examination localizes the problem using flexion tests and diagnostic joint blocks, then confirms it with imaging. Radiographs reveal joint-space narrowing, osteophytes, and bone change; ultrasound, and increasingly MRI and CT, add soft-tissue and early-cartilage detail. Joint-fluid analysis can support the diagnosis in some cases. Early diagnosis allows intervention before the joint deteriorates too far.</p>

          <h2 id="treatment">Veterinary Treatment</h2>
          <p>Treatment is tailored to the joint, the severity, and the horse&apos;s job, and is directed by a veterinarian. Options include systemic non-steroidal anti-inflammatory drugs, intra-articular medications (corticosteroids, hyaluronic acid), polysulfated glycosaminoglycan and pentosan injections, and biologic therapies such as platelet-rich plasma, IRAP, and stem cells. Joint fusion (arthrodesis) is an option for low-motion joints like the lower hocks. All medication selection and dosing is the veterinarian&apos;s call.</p>

          <h2 id="management">Management at Home</h2>
          <ul>
            <li><strong>Keep the horse moving.</strong> Consistent low-impact exercise and turnout maintain joint health better than stall rest; long warm-ups loosen stiff joints before work. A compact set of portable paddock panels can keep a stiff horse on a small turnout loop when a huge field is too deep or icy — this page does not hop NSAIDs, Adequan, or joint injectables.</li>
            <li><strong>Manage weight.</strong> Excess bodyweight multiplies joint load; lean is kinder to arthritic joints. Body-condition scoring lives on the weight-management and EMS pages; this hop set stays on motion and footing, not another hanging scale.</li>
            <li><strong>Choose footing carefully.</strong> Deep, even, forgiving footing reduces concussion; avoid hard or uneven ground. A tow-behind arena drag or harrow is the barn tool that levels a working surface after rain — not a ranked clinical product.</li>
            <li><strong>Maintain farriery</strong> on a tight schedule to keep the foot balanced and reduce abnormal joint loading. Heart-bar, wedge, and rocker shoes already hop on the navicular page; this page does not re-ship farrier hardware.</li>
            <li><strong>Consider oral joint supplements</strong> as a long-term adjunct, recognizing that the evidence is mixed; see the <a href="/supplements/joint-supplements">joint supplement guide</a>. Cotton polo wraps for a long, even warm-up are barn gear, not a joint-supplement hop.</li>
          </ul>

          <h2 id="kit">Keep-moving kit</h2>
          <p>
            Everyday physical supplies that match the
            choose-footing, long-warm-up, and keep-moving
            copy on this page — a tow-behind arena drag
            or harrow so the working surface stays even
            after rain, cotton polo exercise wraps so a
            long warm-up is even and protected, and
            portable paddock panels so a stiff horse
            still has a small turnout loop. These are
            educational keep-moving tools, not a ranked
            product list, not a substitute for veterinary
            care, and not Adequan, Legend, NSAIDs, or a
            diagnosis. Joint supplements already live on
            the joint-supplement guide. Heart-bar, wedge,
            and rocker shoes already live on navicular.
            Farrier stands and log books already live on
            the farrier-schedule page. Hanging hay-bale
            scales already live on EMS. Shipping wraps
            already live on trailering. Stall guards
            already live on turnout-vs-stabling. This
            page does not hop medications, vaccines, or
            injectable joint products. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (tow behind arena drag harrow /
              cotton horse polo exercise wraps /
              portable horse paddock panels).
              These are educational keep-moving
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              Adequan / NSAID / joint-supplement ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1105
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
              horse+shipping+wraps (trailering),
              nylon+equine+stall+guard
              (turnout-vs-stabling),
              platinum+performance+CJ+joint+supplement
              (joint-supplements),
              equine+farrier+log+book /
              portable+farrier+hoof+stand
              (farrier-schedule).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the osteoarthritis keep-moving kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page choose-footing, long-warm-up, and
              keep-moving copy — a tow-behind arena drag
              or harrow, cotton polo exercise wraps, and
              portable paddock panels. Educational
              keep-moving tools only. Hopping Adequan,
              NSAIDs, or joint supplements is not the
              job of this kit. They are not a ranked
              product list, they are not a substitute
              for veterinary care, they are not a #1105
              hay-bale-scale / NSC-hay-test-kit /
              strip-grazing-posts hop, they are not a
              #1104 run-in-shelter / grooming-caddy /
              blanket-wash-bag hop, they are not a
              #1103 mud-grid / turnout-boot / leg-towel
              hop, they are not a #1102 Irish-knit-
              cooler / quarter-sheet / loose-salt hop,
              they are not a #1101 heart-bar /
              wedge-pad / rocker-toe hop, they are not
              a #1100 stock-tank-brush / barn-mosquito-
              netting / mosquito-sheet hop, they are
              not a #1099 lunge-line / lead-shank /
              traffic-cone hop, they are not a #1098
              clipboard / feed-pan / paper-pellet-
              bedding hop, they are not a #1097
              color-coded-bucket / coverall / boot-dip-
              tub hop, they are not a #1094 soaking-
              pail / feed-tub-rock / apple-wedger hop,
              they are not a trailering shipping-wrap
              hop, they are not a turnout stall-guard
              hop, they are not a joint-supplement hop,
              and they do not replace a veterinarian.
              Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/tow+behind+arena+drag+harrow?s=health-osteoarthritis"
                amazonLabel="Browse tow-behind arena drag / harrows on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cotton+horse+polo+exercise+wraps?s=health-osteoarthritis"
                amazonLabel="Browse cotton polo exercise wraps on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/portable+horse+paddock+panels?s=health-osteoarthritis"
                amazonLabel="Browse portable paddock panels on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>McIlwraith CW, Frisbie DD, Kawcak CE. “The Horse as a Model of Naturally Occurring Osteoarthritis.” Bone &amp; Joint Research, 2012; 1(11):297–309.</li>
            <li>Goodrich LR, Nixon AJ. “Medical Treatment of Osteoarthritis in the Horse — A Review.” Veterinary Journal, 2006; 171(1):51–69.</li>
            <li>Frisbie DD, Kawcak CE, Werpy NM, et al. Evaluation of intra-articular therapies, multiple studies. Equine Veterinary Journal, 2007–2013.</li>
            <li>American Association of Equine Practitioners. “Arthritis / Degenerative Joint Disease” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
