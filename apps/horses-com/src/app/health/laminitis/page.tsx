import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Laminitis — Causes, Signs, Treatment, Prevention',
  description:
    'Reference guide to equine laminitis: endocrinopathic, sepsis-associated, and supporting-limb forms, signs, Obel grading, diagnostics, and emergency care.',
  path: '/health/laminitis',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Laminitis — Causes, Signs, Treatment, Prevention',
  description:
    'Comprehensive reference on equine laminitis: the three causal categories, recognition, Obel grading, diagnostic workup, acute management, and evidence-based prevention.',
  url: 'https://horses.com/health/laminitis',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Equine Laminitis',
  description:
    'Equine laminitis — inflammation and failure of the laminae that suspend the coffin bone within the hoof. Causes, signs, grading, diagnostics, treatment, and prevention.',
  url: 'https://horses.com/health/laminitis',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "What is the difference between laminitis and founder?",
    answer:
      'Laminitis is the inflammatory and metabolic failure of the laminae that bond the coffin bone (third phalanx, P3) to the hoof wall. "Founder" is the lay term for the chronic, structural endpoint in which the laminae have failed enough that the coffin bone rotates or sinks within the hoof capsule. All foundered horses have had laminitis; not every laminitis episode progresses to founder if caught and managed early.',
    answerText:
      'Laminitis is failure of the laminae bonding the coffin bone to the hoof wall. Founder is the lay term for the chronic structural endpoint where the coffin bone rotates or sinks. All founder follows laminitis, but early-managed laminitis need not progress to founder.',
  },
  {
    question: "What are the earliest signs of laminitis?",
    answer:
      'A bounding digital pulse (palpable at the back of the fetlock or pastern), increased hoof-wall temperature, a shortened or "pottery" gait, reluctance to turn, shifting weight from foot to foot, and the classic sawhorse stance in which the horse rocks weight onto the hindquarters to unload the front feet. A bounding digital pulse can precede visible lameness and is one of the most useful owner-detectable early signs.',
    answerText:
      'Earliest signs include a bounding digital pulse, warm hooves, a shortened pottery gait, reluctance to turn, weight-shifting, and the sawhorse stance. A bounding digital pulse can precede visible lameness.',
  },
  {
    question: "Is laminitis an emergency?",
    answer:
      'Yes. Acute laminitis is a veterinary emergency. The window between the onset of laminar inflammation and irreversible mechanical failure of the laminae can be a matter of hours to a few days, and outcomes are strongly tied to how quickly the horse is stabilized, the foot supported, and the underlying trigger addressed. Call a veterinarian at the first suspicion rather than waiting to see if it resolves.',
    answerText:
      'Yes. Acute laminitis is an emergency. The window before irreversible laminar failure can be hours to days, and outcome depends on rapid stabilization. Call a vet at first suspicion.',
  },
  {
    question: "Can a horse recover from laminitis?",
    answer:
      'Many horses recover and return to soundness, particularly mild endocrinopathic cases caught early and managed with the underlying endocrine disease controlled. Recovery depends on the degree of coffin-bone displacement, the cause, and the speed of intervention. Severe rotation, sinking, or chronic refractory cases carry a guarded prognosis. Lifelong management of the underlying cause (diet, EMS, or PPID control) is usually required to prevent recurrence.',
    answerText:
      'Many horses recover and return to soundness, especially mild endocrinopathic cases caught early. Prognosis depends on coffin-bone displacement, cause, and intervention speed. Lifelong management of the underlying trigger is usually needed.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function LaminitisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: 'Equine Laminitis',
          subtitle:
            'Laminitis is failure of the laminae — the interlocking soft-tissue leaves that suspend the coffin bone within the hoof capsule and transmit the horse&apos;s entire bodyweight through the foot. When those laminae inflame and weaken, the bond between bone and hoof wall fails, and the deep digital flexor tendon can pull the coffin bone into rotation or the whole bone can sink. It is one of the most painful conditions a horse can suffer and a leading cause of euthanasia in adult horses. The modern understanding divides laminitis into three causal buckets — endocrinopathic, sepsis-associated, and supporting-limb — and the cause dictates both the treatment and the prevention. This is reference material, not a substitute for veterinary attention.',
          category: 'Equine Health',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Health', href: '/health' },
          { name: 'Laminitis', href: '/health/laminitis' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'What Is Laminitis', href: '#what' },
            { label: 'The Three Causes', href: '#causes' },
            { label: 'Clinical Signs', href: '#signs' },
            { label: 'Obel Grading', href: '#grading' },
            { label: 'Diagnosis', href: '#diagnosis' },
            { label: 'Acute Treatment', href: '#treatment' },
            { label: 'Chronic Management', href: '#chronic' },
            { label: 'Prevention', href: '#prevention' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">If You Suspect Laminitis Now</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Call your veterinarian immediately. Move the horse off hard ground onto deep, soft footing (sand or shavings). Do not force the horse to walk. Remove grain and lush pasture. Do not administer medication unless your vet directs it. Time matters.
            </p>
          </div>
          <RelatedLinks
            title="Related Health"
            links={[
              { label: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
              { label: 'Cushing&apos;s / PPID', href: '/health/cushings-ppid' },
              { label: 'Hoof Abscess', href: '/health/abscess' },
              { label: 'Feeding the Easy Keeper', href: '/nutrition/feeding-the-easy-keeper' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine health articles."
            source="health-laminitis"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Laminitis</h2>
          <p>Inside the hoof capsule, the coffin bone (the third phalanx, or P3) is not resting on the sole; it is suspended from the inner hoof wall by interleaved sheets of tissue called the laminae. The epidermal laminae grow from the hoof wall and interlock with the dermal laminae attached to the bone, like two combs pushed together. This suspensory apparatus holds the entire bodyweight of the horse and transmits it to the ground through the hoof wall. Laminitis is the breakdown of that bond.</p>
          <p>When the laminae inflame, lose their attachment, or are starved of blood supply, the mechanical connection between bone and wall weakens. The constant downward pull of the deep digital flexor tendon on the back of the coffin bone, combined with bodyweight, can then rotate the coffin bone away from the dorsal hoof wall (rotational founder) or allow the entire bone to descend within the capsule (sinking, the more dangerous form). In severe cases the tip of the coffin bone can penetrate the sole.</p>

          <h2 id="causes">The Three Causes</h2>
          <p>Contemporary veterinary classification recognizes three distinct mechanisms, a framework formalized in the equine endocrinology and laminitis consensus literature (Equine Endocrinology Group guidelines; de Laat and colleagues).</p>
          <h3>Endocrinopathic laminitis</h3>
          <p>By far the most common form, accounting for the large majority of field cases. It is driven by hormonal disease — insulin dysregulation in equine metabolic syndrome (EMS) and in pituitary pars intermedia dysfunction (PPID, or equine Cushing&apos;s disease). High circulating insulin is itself laminitis-triggering: experimental hyperinsulinemia reliably induces laminitis. This is the laminitis of the overweight pony on spring grass, and it is preventable through control of the underlying endocrine disease and diet.</p>
          <h3>Sepsis-associated (inflammatory) laminitis</h3>
          <p>Triggered by systemic inflammation and endotoxemia — carbohydrate overload (a horse breaking into the grain bin), severe colic, retained placenta and metritis in the mare, severe colitis, or pleuropneumonia. The systemic inflammatory cascade damages the laminae. This is the historical model of grain-founder laminitis.</p>
          <h3>Supporting-limb laminitis</h3>
          <p>Develops in the weight-bearing limb when the opposite limb is non-weight-bearing for an extended period — a horse with a fractured leg or a severe foot infection that will not load one foot overloads the other. Reduced load-cycling impairs blood flow within the supporting foot. This is the form that took the racehorse Barbaro after his catastrophic fracture.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li><strong>Bounding digital pulse</strong> — an unusually strong pulse palpable over the digital arteries at the back of the fetlock and pastern. One of the most useful early owner-detectable signs.</li>
            <li><strong>Heat in the hoof wall</strong> — increased warmth, particularly across the toe.</li>
            <li><strong>Lameness</strong> — typically bilateral in the front feet (the most commonly affected), producing a short, stiff, pottery gait.</li>
            <li><strong>The sawhorse stance</strong> — front legs stretched forward, hind legs tucked under, weight rocked back onto the hindquarters to unload the painful toes.</li>
            <li><strong>Reluctance to turn</strong> and to walk on hard ground; the horse pivots gingerly.</li>
            <li><strong>Weight shifting</strong> — repeatedly lifting and resting alternate feet.</li>
            <li><strong>Lying down more than usual</strong> to relieve weight on the feet.</li>
            <li><strong>Increased respiratory and heart rate</strong> from pain in acute cases.</li>
          </ul>

          <h2 id="grading">Obel Grading</h2>
          <p>The Obel scale, in use since 1948, grades laminitis severity by gait and behavior, and it remains the practical clinical shorthand:</p>
          <ul>
            <li><strong>Obel grade 1</strong> — at rest the horse shifts weight repeatedly between feet; at the trot the gait is short and stilted, but the horse walks soundly.</li>
            <li><strong>Obel grade 2</strong> — the horse moves willingly at a walk but with a stilted gait; a foot can be lifted off the ground without difficulty.</li>
            <li><strong>Obel grade 3</strong> — the horse moves reluctantly and resists having a foot lifted.</li>
            <li><strong>Obel grade 4</strong> — the horse refuses to move and must be forced to take a step; it may be recumbent.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Diagnosis combines the clinical picture with radiographs and, where endocrinopathic disease is suspected, blood testing.</p>
          <h3>Radiography</h3>
          <p>Lateral hoof radiographs (ideally with a radiopaque marker on the dorsal hoof wall and the apex of the frog) measure the degree of coffin-bone rotation, the dorsal hoof-wall thickness, and the sinking (founder distance from the extensor process to the coronary band). Serial films track progression and guide farriery.</p>
          <h3>Endocrine testing</h3>
          <p>Because most laminitis is endocrinopathic, blood testing for insulin dysregulation (resting insulin, or a dynamic oral sugar test) and for PPID (basal ACTH, or a TRH stimulation test in equivocal cases) is central to the workup of any horse with no obvious sepsis or supporting-limb cause. The Equine Endocrinology Group publishes the current testing and interpretation guidelines.</p>
          <h3>Hoof examination</h3>
          <p>Hoof testers localize pain (typically across the toe in rotational cases), and the digital pulse and hoof temperature are assessed at every recheck.</p>

          <h2 id="treatment">Acute Treatment</h2>
          <p>Acute laminitis is managed by a veterinarian and, in most cases, a farrier working together. The pillars are:</p>
          <ul>
            <li><strong>Address the underlying cause</strong> — treat the sepsis or colic, remove the grain or pasture trigger, control insulin, or resolve the contralateral lameness driving supporting-limb load.</li>
            <li><strong>Pain and inflammation control</strong> — non-steroidal anti-inflammatory drugs are commonly prescribed; all dosing is determined by the veterinarian. Additional analgesia is used as the case demands.</li>
            <li><strong>Mechanical support of the foot</strong> — deep soft bedding, sole support (foam pads, Styrofoam, or commercial cuffs), and frog support to share load away from the failing dorsal laminae. The farrier may apply heart-bar shoes, clogs, or other therapeutic shoeing once the acute phase stabilizes.</li>
            <li><strong>Box rest on deep footing</strong> — strict stall confinement on a thick, soft bed limits laminar movement and load.</li>
            <li><strong>Cryotherapy</strong> — continuous distal-limb cooling (ice boots to above the fetlock) in the developmental phase of sepsis-associated laminitis has good experimental support for reducing laminar damage.</li>
          </ul>

          <h2 id="chronic">Chronic Management</h2>
          <p>Once the acute crisis is controlled, chronic laminitis is a long farriery-and-medicine project. Corrective trimming and shoeing realign the coffin bone with the ground over successive cycles, backing up the toe and supporting the heel. Hoof wall regrowth from the coronary band takes 9 to 12 months to reach the ground, so realignment is gradual. Horses with controlled endocrine disease, good farriery, and no major sinking frequently return to soundness, while cases with severe rotation, penetration, or sinking carry a guarded to poor prognosis.</p>

          <h2 id="prevention">Prevention</h2>
          <p>Because the dominant cause is endocrinopathic, prevention is largely about metabolic management:</p>
          <ul>
            <li><strong>Maintain a lean body condition.</strong> Obesity drives insulin dysregulation. Score the horse regularly with a body condition tool and keep at-risk ponies in the 4 to 5 range on the Henneke scale.</li>
            <li><strong>Restrict non-structural carbohydrate (NSC) intake.</strong> Limit or eliminate grain for easy keepers; soak hay to reduce sugar; test hay for sugar/starch content when feeding metabolic horses.</li>
            <li><strong>Manage grazing.</strong> Restrict or eliminate lush spring and autumn grass for at-risk horses; use a grazing muzzle or a dry lot. Sugar content in pasture is highest on sunny afternoons after cool nights.</li>
            <li><strong>Test and treat PPID.</strong> Older horses with a long coat, regional fat, or recurrent laminitis should be tested for PPID and treated with veterinarian-prescribed pergolide when indicated.</li>
            <li><strong>Secure the feed room.</strong> Prevent grain-overload accidents with horse-proof latches.</li>
            <li><strong>Introduce feed changes gradually</strong> and address colic and infections promptly to limit sepsis-associated risk.</li>
          </ul>
          <p>Tracking body condition is the single most reliable early-warning lever for at-risk horses; score yours with the <a href="/tools/body-condition-score">equine body-condition score tool</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. &ldquo;Recommendations for the Diagnosis and Management of Equine Metabolic Syndrome and PPID,&rdquo; current edition. sites.tufts.edu/equineendogroup.</li>
            <li>de Laat MA, McGowan CM, Sillence MN, Pollitt CC. &ldquo;Equine Laminitis: Induced by 48 h Hyperinsulinaemia in Standardbred Horses.&rdquo; <em>Equine Veterinary Journal</em>, 2010; 42(2):129&ndash;135.</li>
            <li>Patterson-Kane JC, Karikoski NP, McGowan CM. &ldquo;Paradigm Shifts in Understanding Equine Laminitis.&rdquo; <em>Veterinary Journal</em>, 2018; 231:33&ndash;40.</li>
            <li>Obel N. <em>Studies on the Histopathology of Acute Laminitis.</em> Almqvist and Wiksells, 1948.</li>
            <li>American Association of Equine Practitioners. &ldquo;Laminitis: Prevention and Treatment&rdquo; owner resources. aaep.org.</li>
            <li>van Eps AW, Pollitt CC. &ldquo;Equine Laminitis Model: Cryotherapy Reduces the Severity of Lesions.&rdquo; <em>Equine Veterinary Journal</em>, 2009; 41(8):741&ndash;746.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
