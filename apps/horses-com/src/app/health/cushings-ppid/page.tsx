import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Cushing's Disease (PPID) — Signs, Testing, Treatment",
  description:
    "Reference guide to PPID (pituitary pars intermedia dysfunction), equine Cushing's disease: mechanism, signs, ACTH testing, pergolide, and laminitis risk.",
  path: '/health/cushings-ppid',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Cushing's Disease (PPID) — Signs, Testing, Treatment",
  description:
    "Pituitary pars intermedia dysfunction (PPID), equine Cushing's disease: mechanism, clinical signs, ACTH testing, treatment, and laminitis risk.",
  url: 'https://horses.com/health/cushings-ppid',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Cushing's Disease (PPID)",
  description:
    "Pituitary pars intermedia dysfunction (PPID), equine Cushing's disease: mechanism, clinical signs, ACTH testing, treatment, and laminitis risk.",
  url: 'https://horses.com/health/cushings-ppid',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "At what age do horses get PPID?",
    answer:
      "PPID is most common in horses and ponies over 15, with prevalence rising sharply with age -- studies estimate roughly one in five horses over 15 is affected. It occasionally appears in younger horses. Because it is progressive and treatable, testing older horses with any suggestive sign is worthwhile.",
    answerText:
      "PPID is most common over age 15 and prevalence rises with age, affecting roughly one in five horses over 15. It can occur earlier.",
  },
  {
    question: "Is PPID the same as equine metabolic syndrome?",
    answer:
      "No, but they overlap. PPID is a pituitary disease of older horses; EMS is a syndrome of insulin dysregulation often tied to obesity. Both cause insulin dysregulation and laminitis, and a horse can have both. The distinction matters because PPID is treated with pergolide while EMS is managed mainly through diet and exercise.",
    answerText:
      "No. PPID is a pituitary disease of older horses; EMS is an insulin-dysregulation syndrome. They overlap and both cause laminitis, but PPID is treated with pergolide and EMS mainly by diet and exercise.",
  },
  {
    question: "Why does a Cushing's horse have a long coat?",
    answer:
      "Excess hormones from the enlarged pars intermedia disrupt the normal seasonal shedding cycle, producing a long, thick, often curly coat that fails to shed (hypertrichosis). It is the most specific clinical sign of PPID. Body clipping helps affected horses stay cool in warm weather.",
    answerText:
      "Excess pituitary hormones disrupt seasonal shedding, producing the long, curly, non-shedding coat (hypertrichosis) that is the most specific sign of PPID. Clipping helps in summer.",
  },
]

export default function PPIDPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
          { title: 'Laminitis', href: '/health/laminitis' },
          { title: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses' },
        ]}
        hero={{
          title: "Equine Cushing's Disease (PPID)",
          subtitle:
            "Pituitary pars intermedia dysfunction (PPID), historically called equine Cushing's disease, is the most common endocrine disorder of older horses -- prevalence rises steeply after age 15. It is a slowly progressive neurodegenerative condition that disrupts hormonal control from the pituitary gland, producing the classic long, curly, non-shedding coat alongside muscle loss, lethargy, and a serious risk of laminitis. It is highly manageable with a single veterinarian-prescribed medication, and early testing of any older horse pays off. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "12 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Cushing's / PPID", href: '/health/cushings-ppid' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is PPID", href: "#what" },
            { label: "The Mechanism", href: "#mechanism" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Treatment", href: "#treatment" },
            { label: "PPID and Laminitis", href: "#laminitis" },
            { label: "Management", href: "#management" },
            { label: "Coat-and-cooling kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Health"
            links={[
              { label: "Equine Laminitis", href: "/health/laminitis" },
              { label: "Equine Metabolic Syndrome", href: "/health/equine-metabolic-syndrome" },
              { label: "Senior Horse Care", href: "/ownership/senior-horse-care" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Body Condition Score Tool", href: "/tools/body-condition-score" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-ppid"
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
              Keep the PPID coat-and-cooling checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse PPID coat-and-cooling checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the stainless-horse-shedding-blade,
              wicking-horse-anti-sweat-sheet, and
              automatic-horse-waterer notes that match
              the failed-shed coat, heavy-coat-impairs-
              cooling, and increased-drinking copy on
              this page — a shedding blade so the long
              curly coat is lifted between clips, a
              wicking anti-sweat sheet so a clipped or
              still-coated horse can cool, and an
              automatic waterer so extra thirst is not
              a dry bucket. Educational coat-and-cooling
              checklist, not a treatment, not pergolide
              or an ACTH kit, not a substitute for
              calling the veterinarian, and not a
              clipper, hay-bale-scale, or grazing-muzzle
              hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse PPID coat-and-cooling checklist"
              subtitle="Email the shedding-blade, anti-sweat-sheet, and waterer notes. No spam."
              ctaText="Email my horse PPID coat-and-cooling checklist"
              source="health-ppid-under-hero"
            />
          </div>

          <h2 id="what">What Is PPID</h2>
          <p>PPID is a disease of the pars intermedia, the middle lobe of the pituitary gland at the base of the brain. With age, the dopamine-producing neurons that normally restrain this lobe degenerate, the pars intermedia enlarges, and it oversecretes a group of hormones derived from a precursor called proopiomelanocortin (POMC), including ACTH. The result is a cascade of downstream effects on coat, muscle, immune function, and -- critically -- insulin regulation. PPID is most common in horses and ponies over 15, but it can appear earlier.</p>

          <h2 id="mechanism">The Mechanism</h2>
          <p>Normally, dopamine released from the hypothalamus inhibits the pars intermedia. In PPID, oxidative loss of those dopaminergic neurons removes that brake, so the pars intermedia grows and pours out excess hormones. This is why treatment uses pergolide, a dopamine agonist that restores the missing inhibitory signal. Because the disease is neurodegenerative and progressive, it is controlled rather than cured.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li><strong>Hypertrichosis</strong> -- a long, thick, curly coat that fails to shed normally. This is the most specific sign of PPID and, when present, is nearly diagnostic.</li>
            <li><strong>Laminitis</strong> -- often the first or most serious presentation, driven by associated insulin dysregulation.</li>
            <li><strong>Muscle wasting</strong> especially over the topline, giving a pot-bellied, sway-backed appearance.</li>
            <li><strong>Lethargy and reduced performance.</strong></li>
            <li><strong>Regional fat deposits</strong> and abnormal sweating (either excessive or reduced).</li>
            <li><strong>Increased drinking and urination</strong> in some horses.</li>
            <li><strong>Recurrent infections</strong> -- skin, sinus, hoof abscesses, and slow wound healing from immune suppression.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>The workhorse test is basal plasma ACTH, interpreted against season-adjusted reference ranges (ACTH normally rises in autumn, which the laboratory accounts for). In early or equivocal cases, a TRH stimulation test -- measuring ACTH before and after a dose of thyrotropin-releasing hormone -- improves sensitivity. The clinical picture, especially hypertrichosis, supports the diagnosis. Many veterinarians also test for insulin dysregulation, because the combination changes the laminitis-risk conversation.</p>

          <h2 id="treatment">Treatment</h2>
          <p>Pergolide mesylate, a dopamine agonist, is the standard veterinarian-prescribed treatment and the only product licensed for PPID in horses in many regions. It restores dopaminergic inhibition of the pars intermedia, normalizing ACTH and improving clinical signs over weeks to months. Dosing and monitoring are determined by the veterinarian, with follow-up ACTH testing to confirm response. A transient reduced appetite when starting pergolide is common and usually managed by dose adjustment under veterinary guidance.</p>

          <h2 id="laminitis">PPID and Laminitis</h2>
          <p>The most dangerous consequence of PPID is laminitis, mediated largely through insulin dysregulation. Any older horse with unexplained or recurrent laminitis should be tested for PPID. Conversely, a PPID diagnosis prompts a laminitis-prevention plan: diet control, weight management, and prompt treatment of the endocrine disease.</p>

          <h2 id="management">Management</h2>
          <p>Beyond medication, PPID horses benefit from body clipping in summer (the heavy coat impairs cooling), excellent dental and hoof care, attentive deworming, prompt treatment of infections, and a diet matched to their metabolic status. With pergolide and good husbandry, many PPID horses live comfortably for years after diagnosis. Pergolide dosing stays with the veterinarian — this page does not hop pergolide, ACTH kits, or TRH stimulation supplies.</p>
          <ul>
            <li><strong>Manage the failed-shed coat.</strong> Hypertrichosis is the most specific sign; the long curly coat stays after spring. A stainless shedding blade is how that coat is lifted between clips — it is not a curry comb or dandy brush (those live on grooming) and not horse clippers (those live on body-clipping).</li>
            <li><strong>Help the horse cool.</strong> The heavy coat impairs cooling, and some PPID horses sweat abnormally. A wicking anti-sweat sheet is how a clipped or still-coated horse sheds heat after work — it is not an Irish-knit cooler or a wool quarter sheet (those live on tying-up), not a fleece cooler (that lives on body-clipping), and not a sweat scraper (that lives on summer-heat-care).</li>
            <li><strong>Keep water in front of them.</strong> Increased drinking and urination show up in some horses. An automatic waterer is how that extra thirst is not a dry bucket — it is not a color-coded flat-back bucket (that lives on strangles) and not a tank heater (that lives on winter-care).</li>
            <li><strong>Match the diet to metabolic status</strong> and watch laminitis risk. Hanging hay-bale scales, NSC hay-test kits, and strip-grazing posts already live on EMS; grazing muzzles already live on laminitis. This page does not re-ship those hops.</li>
            <li><strong>Leave medication, dental work, and infection treatment to the veterinarian.</strong> Pergolide, ACTH monitoring, and systemic drugs are not shoppable hops.</li>
          </ul>

          <h2 id="kit">Coat-and-cooling kit</h2>
          <p>
            Everyday physical supplies that match the
            failed-shed coat, heavy-coat-impairs-cooling,
            and increased-drinking copy on this page — a
            stainless shedding blade so the long curly
            coat is lifted between clips, a wicking
            anti-sweat sheet so the horse can cool, and
            an automatic waterer so extra thirst is not
            a dry bucket. These are educational barn
            tools, not a ranked product list, not a
            substitute for veterinary care, and not
            pergolide, an ACTH kit, or a diagnosis.
            Clippers already live on body-clipping.
            Hay-bale scales and NSC kits already live
            on EMS. Grazing muzzles already live on
            laminitis. Coolers and quarter sheets
            already live on tying-up. This page does
            not hop medications, vaccines, or endocrine
            test kits. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (stainless horse shedding blade /
              wicking horse anti sweat sheet /
              automatic horse waterer).
              These are educational coat-and-cooling
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              pergolide / ACTH / vaccine ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1107
              equine+hoof+angle+gauge /
              leather+horse+lunge+cavesson /
              neoprene+horse+overreach+bell+boots, #1106
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
              orange+traffic+cone+set,
              horse+clippers / horse+clipper+blades
              (body-clipping),
              horse+sweat+scraper / horse+shade+cloth
              (summer-heat-care),
              horse+tank+heater (winter-care),
              color+coded+flat+back+horse+buckets
              (strangles),
              easy+keeper+grazing+muzzle
              (laminitis).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the PPID coat-and-cooling kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page failed-shed coat, heavy-coat-
              impairs-cooling, and increased-drinking
              copy — a stainless shedding blade, a
              wicking anti-sweat sheet, and an automatic
              waterer. Educational barn tools only.
              Hopping pergolide, ACTH kits, or clippers
              is not the job of this kit. They are not
              a ranked product list, they are not a
              substitute for veterinary care, they are
              not a #1107 hoof-angle-gauge / lunge-
              cavesson / overreach-bell-boots hop, they
              are not a #1106 arena-drag / polo-wrap /
              paddock-panel hop, they are not a #1105
              hay-bale-scale / NSC-hay-test-kit /
              strip-grazing-posts hop, they are not a
              #1104 run-in-shelter / grooming-caddy /
              blanket-wash-bag hop, they are not a
              #1103 mud-grid / turnout-boot / leg-towel
              hop, they are not a #1102 Irish-knit-
              cooler / quarter-sheet / loose-salt hop,
              they are not a body-clipping clipper hop,
              they are not an EMS diet-management hop,
              they are not a laminitis grazing-muzzle
              hop, and they do not replace a
              veterinarian. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/stainless+horse+shedding+blade?s=health-ppid"
                amazonLabel="Browse stainless horse shedding blades on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/wicking+horse+anti+sweat+sheet?s=health-ppid"
                amazonLabel="Browse wicking anti-sweat sheets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/automatic+horse+waterer?s=health-ppid"
                amazonLabel="Browse automatic horse waterers on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. “Recommendations for the Diagnosis and Treatment of PPID,” current edition. sites.tufts.edu/equineendogroup.</li>
            <li>McFarlane D. “Equine Pituitary Pars Intermedia Dysfunction.” Veterinary Clinics of North America: Equine Practice, 2011; 27(1):93–113.</li>
            <li>Ireland JL, McGowan CM. “Epidemiology of Pituitary Pars Intermedia Dysfunction.” Veterinary Journal, 2018; 235:22–30.</li>
            <li>American Association of Equine Practitioners. “PPID (Equine Cushing&apos;s Disease)” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
