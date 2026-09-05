import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Hoof Abscess in Horses — Signs, Treatment, Prevention",
  description:
    "Reference guide to equine hoof abscess: the most common cause of sudden severe lameness, how abscesses form, drainage, soaking, and prevention.",
  path: '/health/abscess',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Hoof Abscess in Horses — Signs, Treatment, Prevention",
  description:
    "Equine hoof abscess: a localized infection in the hoof and the most common cause of sudden severe lameness. Signs, drainage, soaking, and prevention.",
  url: 'https://horses.com/health/abscess',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Hoof Abscess",
  description:
    "Equine hoof abscess: a localized infection in the hoof and the most common cause of sudden severe lameness. Signs, drainage, soaking, and prevention.",
  url: 'https://horses.com/health/abscess',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "How do I know if my horse has an abscess or a fracture?",
    answer:
      "Both can cause sudden severe lameness, and an owner cannot reliably tell them apart. Abscesses are far more common and typically show heat, a bounding digital pulse, and focal pain on hoof testers, but a fracture must be ruled out by a veterinarian, who may use radiographs. Call for professional assessment.",
    answerText:
      "Both cause sudden severe lameness and you cannot reliably tell them apart at home. Abscesses are more common and show heat, a bounding pulse, and focal hoof-tester pain, but a vet must rule out a fracture.",
  },
  {
    question: "How long does a hoof abscess take to heal?",
    answer:
      "Once an abscess drains, most horses improve dramatically within hours to a day or two, and the tract heals over the following days to weeks with soaking and clean bandaging. Abscesses that are slow to localize can take longer to mature before they can be drained.",
    answerText:
      "Once drained, most horses improve within hours to a day or two, with the tract healing over days to weeks. Slow-to-localize abscesses take longer to mature first.",
  },
  {
    question: "Should I soak an abscessed hoof?",
    answer:
      "Warm soaking, often with Epsom salts, is a standard part of treatment -- it softens the horn and encourages the abscess to drain. A soaking boot holds that Epsom soak around the hoof so the horse does not have to stand in a bucket. Soaking is usually combined with poulticing and clean bandaging after a veterinarian or farrier has located and opened the abscess. Follow their specific instructions.",
    answerText:
      "Yes -- warm Epsom-salt soaking softens horn and encourages drainage. A soaking boot holds that soak around the hoof. Poulticing and bandaging usually follow after a vet or farrier opens the abscess.",
  },
]

export default function AbscessPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
          { title: 'Laminitis', href: '/health/laminitis' },
          { title: 'Thrush', href: '/health/thrush' },
        ]}
        hero={{
          title: "Hoof Abscess in Horses",
          subtitle:
            "A hoof abscess is the single most common cause of sudden, severe lameness in horses -- a horse that was sound yesterday can be non-weight-bearing today, alarming owners who fear a fracture. In fact most abscesses are a localized pocket of infection that, once it drains, resolves quickly. Recognizing the pattern saves a great deal of worry and gets the horse comfortable faster. This is reference material, not a substitute for veterinary or farrier care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Hoof Abscess", href: '/health/abscess' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is a Hoof Abscess", href: "#what" },
            { label: "How They Form", href: "#causes" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "Abscess Soak Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Sudden Severe Lameness</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              A horse that becomes acutely, severely lame on one foot is most often dealing with an abscess, but a fracture or other emergency cannot be ruled out by an owner. Call your veterinarian or farrier to confirm.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Thrush", href: "/health/thrush" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-abscess"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-05"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the hoof-abscess soak checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse hoof-abscess soak checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the Epsom-salt soak and soaking-boot notes so the
              opened hoof can sit in a warm soak instead of a kickable
              bucket. Educational checklist, not a diagnosis and not a
              poultice, bandage, or medication order. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse hoof-abscess soak checklist"
              subtitle="Email the Epsom-salt soak and soaking-boot notes. No spam."
              ctaText="Email my horse hoof-abscess soak checklist"
              source="health-abscess-under-hero"
            />
          </div>

          <h2 id="what">What Is a Hoof Abscess</h2>
          <p>A hoof abscess is a pocket of infection trapped within the rigid hoof capsule. Because the hoof cannot expand, even a small accumulation of pus generates intense pressure on the sensitive tissues, which is why abscesses produce such dramatic, often non-weight-bearing lameness. The infection naturally tries to migrate to the path of least resistance and eventually bursts out, usually at the sole, the white line, or up at the coronary band (a &apos;gravel&apos; that tracks up and blows out at the hairline).</p>

          <h2 id="causes">How They Form</h2>
          <p>Bacteria enter through a defect in the hoof: a puncture from a nail or stone, a crack, a separation in the white line, a close nail from shoeing, or softened horn after wet weather. Once inside, the bacteria multiply in the warm, moist environment and pus accumulates under pressure. Wet-then-dry cycles, poor hoof quality, and chronic white-line disease all raise the risk.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Sudden, often severe lameness, frequently non-weight-bearing, usually in one foot.</li>
            <li>A strong, bounding digital pulse in the affected foot.</li>
            <li>Heat in the hoof.</li>
            <li>Pain on hoof-tester pressure over a focal spot, which helps localize the abscess.</li>
            <li>Sometimes swelling up the leg, or a draining tract at the coronary band once it bursts.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>The aim is to establish drainage. A veterinarian or farrier locates the abscess with hoof testers and hoof-knife exploration and opens a small drainage tract -- this often brings dramatic, immediate relief. The foot is then soaked in warm water with Epsom salts to soften horn and encourage drainage, then poulticed and kept clean and bandaged to draw the infection out and protect the opening. A soaking boot holds that Epsom soak around the hoof so the horse does not have to stand in a bucket it can kick over. Poultice paste, cohesive bandage, and equine first-aid kits already live on the grimace-scale and emergency-kit pages and stay off this kit. Most abscesses resolve within days once they drain. An abscess that will not localize, recurs, or is accompanied by significant swelling or systemic signs warrants veterinary follow-up. Pain relief, if any, is prescribed by the veterinarian. This page does not hop poultice, bandage, hoof picks, riding hoof boots, or any medication.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Pick out the feet daily</strong> and inspect for stones, punctures, and cracks.</li>
            <li><strong>Maintain a regular farrier schedule</strong> to keep the foot balanced and the white line tight.</li>
            <li><strong>Manage wet and dry cycles</strong> with dry standing and, where appropriate, hoof conditioning, since softened horn is more easily breached.</li>
            <li><strong>Support hoof quality</strong> with good nutrition and prompt attention to cracks and white-line problems.</li>
          </ul>

          <h2 id="kit">Abscess Soak Kit</h2>
          <p>Everyday physical supplies that match the soak copy above — Epsom salt for the warm hoof soak after a veterinarian or farrier opens the tract, plus a soaking boot so that soak stays around the hoof instead of in a kickable bucket. These are not treatments for a closed abscess, a fracture, or a draining tract that is not improving; sudden severe lameness still needs a veterinarian or farrier to locate and open the abscess before any soak. Poultice, cohesive bandage, equine first-aid kits, hoof picks, and riding hoof boots stay off this kit — those already ship on the grimace-scale, emergency-kit, hoof-picking, and hoof-care-basics pages. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (abscess soak kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page Epsom-salt soak / soaking-boot copy, not poultice,
              bandage, hoof picks, riding hoof boots, or medication hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the abscess soak kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page soak copy —
              Epsom salt for a warm hoof soak after the tract is opened,
              and a horse hoof soaking boot so that soak stays around the
              hoof. Everyday physical supplies only. They are not a ranked
              product list, they are not a poultice or a bandage, they are
              not a riding hoof boot or a hoof pick, they are not a
              medication, and they do not replace a veterinarian or
              farrier. Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/epsom+salt+horse+hoof?s=health-abscess"
                amazonLabel="Browse Epsom salt for hoof soaks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+soaking+boot?s=health-abscess"
                amazonLabel="Browse horse hoof soaking boots on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>O&apos;Grady SE, Parks AH. “Farriery for Common Hoof Problems.” Veterinary Clinics of North America: Equine Practice, 2012.</li>
            <li>American Association of Equine Practitioners. “Hoof Abscess” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
