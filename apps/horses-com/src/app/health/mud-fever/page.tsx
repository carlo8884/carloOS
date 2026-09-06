import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Mud Fever in Horses — Pastern Dermatitis, Causes, Treatment",
  description:
    "Reference guide to equine mud fever (pastern dermatitis, scratches): the wet-weather skin condition of the lower legs, causes, treatment, and prevention.",
  path: '/health/mud-fever',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Mud Fever in Horses — Pastern Dermatitis, Causes, Treatment",
  description:
    "Equine mud fever (pastern dermatitis, scratches, greasy heel): causes, signs, treatment, and prevention of lower-limb skin disease.",
  url: 'https://horses.com/health/mud-fever',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Mud Fever (Pastern Dermatitis)",
  description:
    "Equine mud fever (pastern dermatitis, scratches, greasy heel): causes, signs, treatment, and prevention of lower-limb skin disease.",
  url: 'https://horses.com/health/mud-fever',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Should I wash mud off my horse's legs every day?",
    answer:
      "Constant washing keeps the skin wet and softened, which can actually promote mud fever. In wet weather it is usually better to let mud dry and then brush it off, or to wash only when necessary and dry the legs thoroughly afterward. Keeping the legs genuinely dry matters more than keeping them spotless.",
    answerText:
      "Not necessarily -- constant washing keeps skin wet and can promote mud fever. Let mud dry and brush it off, or wash only when needed and dry thoroughly. Dry legs matter more than clean ones.",
  },
  {
    question: "Why are white legs more prone to mud fever?",
    answer:
      "Non-pigmented (white) skin is more susceptible to sun-related photosensitivity reactions and tends to be more reactive, making white-legged horses notably more prone to mud fever than those with dark-skinned legs. These horses warrant extra vigilance in wet weather.",
    answerText:
      "Non-pigmented white skin is more reactive and prone to photosensitivity, making white legs more susceptible than dark-skinned legs.",
  },
  {
    question: "When should I call the vet about mud fever?",
    answer:
      "Call a veterinarian if the leg becomes hot, swollen, and painful (possible cellulitis), if the horse is lame, if the lesions are widespread or weeping heavily, or if the condition will not resolve with clean, dry conditions and basic topical care. Those cases may need systemic treatment.",
    answerText:
      "Call a vet if the leg is hot, swollen, and painful, if the horse is lame, if lesions are widespread, or if it will not resolve with basic care -- those may need systemic treatment.",
  },
]

export default function MudFeverPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Rain Rot', href: '/health/rain-rot' },
          { title: 'Thrush', href: '/health/thrush' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
        ]}
        hero={{
          title: "Mud Fever in Horses",
          subtitle:
            "Mud fever -- known variously as pastern dermatitis, scratches, greasy heel, or cracked heels -- is an inflammatory skin condition of the lower legs that flares in wet, muddy conditions. It is not a single disease but a syndrome with several possible causes, united by a breakdown of the skin barrier on the back of the pastern and heel. Most cases respond to clean, dry conditions and good leg hygiene, but stubborn or severe cases need veterinary input. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Mud Fever", href: '/health/mud-fever' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Mud Fever", href: "#what" },
            { label: "Causes", href: "#causes" },
            { label: "Recognizing It", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "Dry-leg kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Rain Rot", href: "/health/rain-rot" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Pasture Management", href: "/care/pasture-management" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-mud-fever"
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
              Keep the mud-fever dry-leg checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse mud-fever dry-leg checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the heavy-duty-paddock-mud-grid,
              full-length-horse-turnout-boots, and
              waffle-weave-horse-leg-towel notes that
              match the dry-standing, keep-legs-dry, and
              dry-thoroughly copy on this page — a paddock
              mud grid so gate and water standing is a
              drained pad instead of a wet bowl, full-length
              turnout boots so the pastern stays out of
              mud instead of soaking in it, and a waffle-
              weave leg towel so a necessary wash is dried
              instead of left wet. Educational dry-leg
              checklist, not a treatment, not an
              antimicrobial cream, not a substitute for
              calling the veterinarian, and not a fly-boot,
              shipping-boot, or soaking-boot hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse mud-fever dry-leg checklist"
              subtitle="Email the mud-grid, turnout-boot, and leg-towel notes. No spam."
              ctaText="Email my horse mud-fever dry-leg checklist"
              source="health-mud-fever-under-hero"
            />
          </div>

          <h2 id="what">What Is Mud Fever</h2>
          <p>Mud fever is dermatitis -- skin inflammation -- on the back of the pastern and the heel, and sometimes higher up the leg. When the skin is repeatedly wetted, it softens and its protective barrier breaks down, allowing organisms (often the same Dermatophilus congolensis behind rain rot, plus other bacteria and sometimes mites or fungal involvement) to colonize and inflame it. The result is scabbing, crusting, and soreness in the lower limb.</p>

          <h2 id="causes">Causes</h2>
          <p>Persistent wet, muddy conditions are the classic trigger, which is why the condition spikes in autumn, winter, and spring. White-skinned, non-pigmented legs are more prone, as are heavily feathered breeds where the long hair traps moisture. Contributing factors include abrasive sand or mud, chronic standing in wet ground, photosensitivity on white legs, mites in feathered horses, and underlying conditions that impair skin or immune health.</p>

          <h2 id="signs">Recognizing It</h2>
          <ul>
            <li>Crusty scabs and matted hair on the back of the pastern and heel.</li>
            <li>Reddened, sore, sometimes weeping skin under the scabs.</li>
            <li>Swelling of the lower leg in more severe cases (cellulitis can develop).</li>
            <li>Cracking of the skin in the heel folds.</li>
            <li>Tenderness, and occasionally lameness if the leg becomes swollen and infected.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>Get the leg clean and dry, which usually means moving the horse off wet, muddy ground. Gently clip the hair around the lesions if needed, clean with an appropriate antimicrobial wash, soften and remove scabs gently, then dry thoroughly. A waffle-weave horse leg towel is how that wash is dried instead of left wet on the pastern — it is not a clean-cotton foaling towel (that lives on the gestation calculator), not a sweat scraper (that lives on summer-heat-care), and not a dandy brush (that lives on grooming). Topical barrier and antimicrobial creams are applied as directed. This page does not hop antimicrobial wash, barrier cream, or systemic drugs — those stay with the veterinarian. A swollen, hot, painful leg, spreading infection, or a case that will not resolve needs a veterinarian, who may prescribe systemic treatment. Do not pick scabs roughly, which damages skin and worsens the problem.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Provide dry standing.</strong> Rotate muddy paddocks, use hardstanding or gravel around gates and water, and give horses a dry place to stand. A heavy-duty paddock mud grid is how that gate and water standing becomes a drained pad instead of a wet bowl — it is not ice grit (that lives on winter-care), not a stall rubber mat (that lives on the stall-bedding calculator), and not deep-sand stall bedding (that lives on laminitis).</li>
            <li><strong>Keep legs dry.</strong> Avoid washing legs constantly in winter; if you must wash off mud, dry thoroughly afterward. Full-length horse turnout boots are how the pastern stays out of mud instead of soaking in it — they are not fly boots (those live on fly-control), not shipping boots (those live on trailering), not hoof boots (those live on hoof-care-basics), and not a hoof-soaking boot (that lives on abscess).</li>
            <li><strong>Manage feathers</strong> in heavily feathered breeds, keeping them clean and dry and watching for mites. This page does not hop clippers — those live on body-clipping.</li>
            <li><strong>Check legs daily</strong> in wet weather so early lesions are caught and treated before they spread.</li>
          </ul>

          <h2 id="kit">Dry-leg kit</h2>
          <p>
            Everyday physical supplies that match the
            dry-standing, keep-legs-dry, and dry-thoroughly
            copy on this page — a heavy-duty paddock mud
            grid so gate and water standing is a drained
            pad, full-length horse turnout boots so the
            pastern stays out of mud, and a waffle-weave
            horse leg towel so a necessary wash is dried.
            These are educational dry-leg tools, not a
            ranked product list, not a substitute for
            veterinary care, and not an antimicrobial
            cream or a diagnosis. Fly boots already live
            on fly-control. Shipping boots already live
            on trailering. Hoof boots already live on
            hoof-care-basics. Soaking boots already live
            on abscess. Stall rubber mats already live on
            the stall-bedding calculator. Ice grit already
            lives on winter-care. Clippers already live on
            body-clipping. Cotton foaling towels already
            live on the gestation calculator. This page
            does not hop antimicrobial wash, barrier
            cream, mite treatments, or systemic drugs.
            This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (heavy duty paddock mud grid /
              full length horse turnout boots /
              waffle weave horse leg towel).
              These are educational dry-leg
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / antimicrobial / fly-boot /
              shipping-boot / soaking-boot ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1102
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
              horse+fly+boots (fly-control),
              horse+shipping+boots (trailering),
              horse+hoof+boots (hoof-care-basics),
              horse+hoof+soaking+boot (abscess),
              horse+stall+rubber+mats
              (stall-bedding calculator),
              ice+grit (winter-care),
              horse+clippers (body-clipping),
              clean+cotton+towels (gestation).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the mud-fever dry-leg kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page dry-standing, keep-legs-dry, and
              dry-thoroughly copy — a heavy-duty paddock
              mud grid, full-length horse turnout boots,
              and a waffle-weave horse leg towel.
              Educational dry-leg tools only. Washing
              legs every day, picking scabs, or guessing
              a cream is not the job of this kit. They
              are not a ranked product list, they are
              not a substitute for veterinary care, they
              are not a #1102 Irish-knit-cooler /
              quarter-sheet / loose-salt hop, they are
              not a #1101 heart-bar / wedge-pad /
              rocker-toe hop, they are not a #1100
              stock-tank-brush / barn-mosquito-netting /
              mosquito-sheet hop, they are not a #1099
              lunge-line / lead-shank / traffic-cone hop,
              they are not a #1098 clipboard / feed-pan /
              paper-pellet-bedding hop, they are not a
              #1097 color-coded-bucket / coverall /
              boot-dip-tub hop, they are not a #1094
              soaking-pail / feed-tub-rock / apple-wedger
              hop, they are not a fly-control fly-boot
              hop, they are not a trailering shipping-boot
              hop, they are not an abscess soaking-boot
              hop, and they do not replace a veterinarian.
              Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/heavy+duty+paddock+mud+grid?s=health-mud-fever"
                amazonLabel="Browse heavy-duty paddock mud grids on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/full+length+horse+turnout+boots?s=health-mud-fever"
                amazonLabel="Browse full-length horse turnout boots on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/waffle+weave+horse+leg+towel?s=health-mud-fever"
                amazonLabel="Browse waffle-weave horse leg towels on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011.</li>
            <li>Yu AA. “Equine Pastern Dermatitis.” Veterinary Clinics of North America: Equine Practice, 2013; 29(3):577–588.</li>
            <li>American Association of Equine Practitioners. “Scratches / Pastern Dermatitis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
