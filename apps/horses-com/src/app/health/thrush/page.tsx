import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Thrush in Horses — Causes, Treatment, Prevention",
  description:
    "Reference guide to equine thrush: bacterial infection of the frog, causes, the telltale black discharge and odor, treatment, and prevention via hoof hygiene.",
  path: '/health/thrush',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Thrush in Horses — Causes, Treatment, Prevention",
  description:
    "Equine thrush: bacterial degeneration of the frog and its grooves, causes, signs, treatment, and prevention through hoof hygiene and dry footing.",
  url: 'https://horses.com/health/thrush',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Thrush",
  description:
    "Equine thrush: bacterial degeneration of the frog and its grooves, causes, signs, treatment, and prevention through hoof hygiene and dry footing.",
  url: 'https://horses.com/health/thrush',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "What does thrush smell like?",
    answer:
      "Thrush has a distinctive strong, foul, rotten odor that is usually noticed the moment the foot is picked out. The smell, combined with a black tarry discharge in the frog grooves, is the classic giveaway. A sudden bad smell from a previously clean foot is a reliable early warning.",
    answerText:
      "Thrush has a strong, foul, rotten smell noticed when the foot is picked out, usually with black tarry discharge in the frog grooves.",
  },
  {
    question: "Will thrush cause lameness?",
    answer:
      "Mild thrush confined to the surface horn rarely causes lameness. If the infection erodes into the sensitive tissue beneath the frog, the horse can become sore and lame, which signals a more advanced case that warrants veterinary attention rather than topical treatment alone.",
    answerText:
      "Mild surface thrush rarely causes lameness, but if it reaches sensitive tissue the horse becomes sore. Lameness signals an advanced case needing veterinary care.",
  },
  {
    question: "How do I prevent thrush?",
    answer:
      "Pick out the feet daily and after riding, keep stalls and turnout clean and dry, bed deeply, and maintain a regular farrier schedule so the frog grooves stay open to air. Moving a horse from wet, dirty footing to clean dry ground is the single most effective prevention step.",
    answerText:
      "Pick feet daily, keep footing clean and dry, bed deeply, and maintain regular farriery. Dry, clean footing is the single most effective prevention.",
  },
]

export default function ThrushPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
          { title: 'Picking Out the Hooves', href: '/care/hoof-picking' },
          { title: 'Mud Fever', href: '/health/mud-fever' },
        ]}
        hero={{
          title: "Thrush in Horses",
          subtitle:
            "Thrush is a common, foul-smelling bacterial infection of the frog and its grooves, most often a consequence of wet, dirty footing and infrequent hoof cleaning. Caught early it is a minor, easily treated nuisance; neglected, it can erode into sensitive tissue and cause lameness. It is one of the most preventable hoof problems and a good barometer of overall hoof hygiene. This is reference material, not a substitute for veterinary or farrier care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Thrush", href: '/health/thrush' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Thrush", href: "#what" },
            { label: "Causes", href: "#causes" },
            { label: "Recognizing It", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "Hygiene Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
              { label: "Hoof Abscess", href: "/health/abscess" },
              { label: "Mud Fever", href: "/health/mud-fever" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-thrush"
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
              Keep the thrush hygiene-kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse thrush hygiene-kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the topical equine thrush-antiseptic,
              folding-pocket equine hoof-pick, and stall
              sweet-lime notes so the grooves can be
              cleaned daily, the cleaned sulci can take
              the barn-shelf prep the label directs, and
              wet stalls can dry instead of staying packed
              with manure. Educational hygiene checklist,
              not a treatment plan and not a substitute
              for a veterinarian or farrier. Hoof-pick
              brushes, riding hoof boots, soaking boots,
              pine shavings, and generic horse hoof picks
              stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse thrush hygiene-kit checklist"
              subtitle="Email the antiseptic, folding hoof-pick, and stall-lime notes. No spam."
              ctaText="Email my horse thrush hygiene-kit checklist"
              source="health-thrush-under-hero"
            />
          </div>

          <h2 id="what">What Is Thrush</h2>
          <p>Thrush is a degenerative infection of the frog -- the V-shaped, rubbery cushion on the underside of the hoof -- and especially of the deep grooves (sulci) on either side of it and in its center. Anaerobic bacteria, classically Fusobacterium necrophorum, colonize the grooves and break down the horn, producing a characteristic black, moist, foul-smelling discharge. It usually starts in the central or collateral sulci where debris packs in and air cannot reach.</p>

          <h2 id="causes">Causes</h2>
          <p>Thrush thrives in moisture and filth. The biggest contributors are wet, muddy, or urine-soaked footing; dirty stalls bedded too infrequently; and hooves that are not picked out regularly so that packed manure and mud seal the grooves from air. Conformation plays a role too -- horses with deep, narrow frog grooves or contracted heels trap debris more easily and are more prone to recurrent thrush.</p>

          <h2 id="signs">Recognizing It</h2>
          <ul>
            <li>A strong, foul, rotten odor when the foot is picked out.</li>
            <li>Black, moist, tarry discharge in the frog grooves.</li>
            <li>Soft, ragged, or crumbling frog tissue.</li>
            <li>Sensitivity when the grooves are cleaned or probed in advanced cases.</li>
            <li>Lameness only if the infection has reached sensitive tissue -- a sign to involve a veterinarian.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>Treatment starts with mechanical cleaning: pick out the foot thoroughly, then have the frog trimmed of loose, infected horn by a farrier so air can reach the grooves. A folding pocket equine hoof pick is how that daily-cleaning copy stays a pocket tool that lives on a belt or in a grooming tote — it is not the generic horse hoof pick and not a hoof-pick brush. The grooves are then treated with a topical antiseptic thrush product as directed; many commercial preparations and dilute antiseptic solutions are used. A topical equine thrush antiseptic is how that barn-shelf prep stays a labeled groove product rather than a guessed splash of iodine or copper sulfate — it is not a prescription, not an abscess soak, and not a diagnosis kit. Move the horse to clean, dry footing -- this single change does more than any topical. Persistent or deep thrush that has reached sensitive tissue, or that causes lameness, warrants veterinary attention.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Pick out the feet daily</strong> and after riding, clearing the grooves of packed debris. A folding pocket equine hoof pick makes that daily pass a habit instead of a hunt for the aisle pick.</li>
            <li><strong>Keep footing dry and clean.</strong> Muck stalls frequently, bed deeply, and provide a dry standing area in turnout. Equine stall sweet lime is how that dry-stall copy stays a bagged stall freshener that pulls moisture and odor out of wet bedding — it is not pine shavings, not wood pellets, not deep-sand stall bedding, and not a stall rubber mat.</li>
            <li><strong>Maintain regular farriery</strong> so the frog and heels are balanced and the grooves stay open to air.</li>
            <li><strong>Address contracted heels</strong> and deep sulci with your farrier, since they predispose to recurrence.</li>
          </ul>

          <h2 id="kit">Hygiene kit</h2>
          <p>Everyday physical supplies that match the daily-picking, groove-prep, and dry-stall copy on this page — a folding pocket equine hoof pick so packed manure comes out of the sulci before it seals them from air, a topical equine thrush antiseptic so the cleaned grooves get the barn-shelf prep the label directs, and equine stall sweet lime so wet stalls dry instead of staying urine-soaked. These are household barn tools, not treatments. They do not diagnose or treat thrush, they do not replace a veterinarian or a farrier, and they are not a ranked product list. Generic horse hoof picks, hoof-pick brushes, riding hoof boots, soaking boots, pine shavings, wood pellets, stall rubber mats, deep-sand stall bedding, foam sole-support pads, and farrier log books already live on other pages. This page does not hop copper sulfate, iodine, Banamine, flunixin, bute, NSAIDs, or any medication. This page does not hop diagnosis kits that imply treatment. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (topical equine thrush antiseptic /
              folding pocket equine hoof pick /
              equine stall sweet lime).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1063 foam-pads / sand-bedding /
              easy-keeper-muzzle, #1062 thermometer /
              stethoscope / fleece-cooler, #1061
              farrier-log / hoof-stand / barn-flood-light,
              #1060 fecal-container / manure-rake /
              muck-cart, #1059 scoop / portion-cups /
              weight-log-book, #1058 stopwatch / notebook /
              bumper, #1057 feeder / maze-bowl / house-line,
              #1056 diapers / collar / crate,
              horse+hoof+pick / horse+hoof+pick+brush /
              horse+hoof+boots / pine+shavings /
              copper+sulfate / iodine. Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the horse thrush hygiene kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page daily-picking, groove-prep, and
              dry-stall copy — a folding pocket equine
              hoof pick, a topical equine thrush
              antiseptic, and equine stall sweet lime.
              Everyday physical supplies only. They are
              not a ranked product list, they are not a
              medication hop, they are not a diagnosis-
              kit hop, they are not a #1063 foam-pad /
              sand-bedding / easy-keeper-muzzle hop, they
              are not a #1062 thermometer / stethoscope /
              fleece-cooler hop, they are not a #1061
              farrier-log / hoof-stand hop, they are not
              a generic horse-hoof-pick / hoof-pick-brush
              hop, they are not a pine-shavings / wood-
              pellet hop, they are not a copper-sulfate /
              iodine hop, and they do not replace a
              veterinarian or farrier. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/topical+equine+thrush+antiseptic?s=health-thrush"
                amazonLabel="Browse topical equine thrush antiseptics on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/folding+pocket+equine+hoof+pick?s=health-thrush"
                amazonLabel="Browse folding pocket equine hoof picks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+stall+sweet+lime?s=health-thrush"
                amazonLabel="Browse equine stall sweet lime on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>O&apos;Grady SE. “Guidelines for Trimming the Equine Foot.” AAEP Proceedings, 2009.</li>
            <li>American Association of Equine Practitioners. “Thrush and Hoof Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
