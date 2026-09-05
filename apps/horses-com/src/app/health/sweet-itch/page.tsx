import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Sweet Itch in Horses — Culicoides Hypersensitivity, Management",
  description:
    "Reference guide to equine sweet itch (summer seasonal recurrent dermatitis): the Culicoides midge allergy, intense itching, and a midge-control management plan.",
  path: '/health/sweet-itch',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Sweet Itch in Horses — Culicoides Hypersensitivity, Management",
  description:
    "Equine sweet itch (Culicoides hypersensitivity, summer seasonal recurrent dermatitis): the midge-bite allergy, signs, and management.",
  url: 'https://horses.com/health/sweet-itch',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Sweet Itch (Culicoides Hypersensitivity)",
  description:
    "Equine sweet itch (Culicoides hypersensitivity, summer seasonal recurrent dermatitis): the midge-bite allergy, signs, and management.",
  url: 'https://horses.com/health/sweet-itch',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "What causes sweet itch in horses?",
    answer:
      "Sweet itch is an allergic reaction to proteins in the saliva of biting Culicoides midges. Sensitized horses mount an exaggerated immune response to the bites, causing intense seasonal itching. There is a genetic predisposition, and the condition tends to recur and worsen over successive years.",
    answerText:
      "It is an allergy to the saliva of biting Culicoides midges. Sensitized horses overreact to bites, with intense seasonal itching. There is a genetic predisposition and it tends to worsen yearly.",
  },
  {
    question: "Can sweet itch be cured?",
    answer:
      "There is no cure, because the underlying allergy is lifelong. However, the condition can be controlled very effectively with a disciplined midge-control program -- fine-weave rugs, stabling at dawn and dusk, repellents, and avoiding midge breeding areas -- supported by veterinary treatment during flares.",
    answerText:
      "No cure -- the allergy is lifelong. But it is controlled effectively with midge-control measures (rugs, dawn/dusk stabling, repellents) plus veterinary treatment during flares.",
  },
  {
    question: "When should I start sweet itch prevention?",
    answer:
      "Start the midge-control program before the biting season begins, rather than waiting until the horse is already itching and has damaged its skin. Preventing the first bites is far more effective than calming an established flare, so put rugs and management in place as the weather warms.",
    answerText:
      "Start before the biting season begins, not after itching starts. Preventing the first bites is far more effective than calming an established flare.",
  },
]

export default function SweetItchPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Rain Rot', href: '/health/rain-rot' },
          { title: 'Fly Control', href: '/care/fly-control' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
        ]}
        hero={{
          title: "Sweet Itch in Horses",
          subtitle:
            "Sweet itch is an intensely itchy, seasonal skin condition caused by an allergic reaction to the bites of tiny biting midges. Affected horses rub themselves raw along the mane, tail, and belly through the warm months, and the misery returns every year. There is no cure, but a disciplined midge-control program transforms quality of life. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Sweet Itch", href: '/health/sweet-itch' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Sweet Itch", href: "#what" },
            { label: "The Cause", href: "#cause" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Midge Control", href: "#midge" },
            { label: "Veterinary Management", href: "#medical" },
            { label: "Sweet-Itch Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Rain Rot", href: "/health/rain-rot" },
              { label: "Fly Control", href: "/care/fly-control" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
              { label: "Grooming the Horse", href: "/care/grooming" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-sweet-itch"
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
              Keep the sweet-itch rug checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse sweet-itch rug checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the sweet-itch rug and hood notes so the fine-weave
              barrier is on before the first Culicoides bites of the
              season. Educational checklist, not a diagnosis and not a
              steroid, antihistamine, or medication order. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse sweet-itch rug checklist"
              subtitle="Email the sweet-itch rug and hood notes. No spam."
              ctaText="Email my horse sweet-itch rug checklist"
              source="health-sweet-itch-under-hero"
            />
          </div>

          <h2 id="what">What Is Sweet Itch</h2>
          <p>Sweet itch -- known clinically as Culicoides hypersensitivity or summer seasonal recurrent dermatitis -- is an allergic skin disease. It is one of the most common allergic conditions in horses worldwide and is strongly seasonal, flaring when the biting insects that trigger it are active and subsiding in cold weather. The hallmark is relentless itching that drives the horse to rub and damage its own skin.</p>

          <h2 id="cause">The Cause</h2>
          <p>The reaction is an allergy to proteins in the saliva of Culicoides midges -- tiny biting flies that feed at dawn and dusk near still water. Sensitized horses mount an exaggerated immune response to the bites. There is a genetic predisposition, with some breeds and family lines more prone, and once a horse is sensitized the condition tends to recur and often worsen year on year.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Intense itching, with the horse rubbing on fences, trees, and stable fittings.</li>
            <li>Hair loss, broken hairs, and a ragged mane and tail from constant rubbing.</li>
            <li>Thickened, crusty, sometimes raw or weeping skin along the crest, mane, tailhead, and belly midline.</li>
            <li>Restlessness and irritability during peak midge activity.</li>
            <li>A clear seasonal pattern, flaring in warm months and resolving in winter.</li>
          </ul>

          <h2 id="midge">Midge Control</h2>
          <ul>
            <li><strong>Use a fitted sweet-itch rug and hood</strong> with a fine weave that physically excludes midges -- often the single most effective measure. A sweet-itch rug covers the body, belly, and often the tail dock so midges cannot reach the usual rub sites; a matching hood covers the mane, poll, and ears. These are purpose-cut eczema rugs, not the everyday fly sheet or fly mask already covered on the fly-control page.</li>
            <li><strong>Stable during peak feeding times</strong> at dawn and dusk, ideally with fine mesh over openings and a fan, since midges are weak fliers. Stall fans already live on other horses.com pages and stay off this kit.</li>
            <li><strong>Keep horses away from still water</strong> and rotting vegetation where midges breed.</li>
            <li><strong>Apply appropriate insect repellents</strong> rated for horses, reapplied as directed. Fly spray, fly traps, fly boots, fly sheets, and fly masks stay on the fly-control guide, not this page.</li>
            <li><strong>Site turnout in breezy, open ground</strong> rather than sheltered, damp corners.</li>
          </ul>

          <h2 id="medical">Veterinary Management</h2>
          <p>When midge control alone is not enough, a veterinarian can help manage the allergic reaction and the damaged skin -- soothing topical treatments, medication to control itching and inflammation during flares, and treatment of any secondary skin infection, all under veterinary direction. Because sweet itch is a lifelong sensitivity, the goal is year-on-year control through prevention rather than a one-time fix, and starting the midge-control program before the season begins works far better than reacting once the horse is already raw. This page does not hop steroids, antihistamines, spot-ons, or any other medication.</p>

          <h2 id="kit">Sweet-Itch Kit</h2>
          <p>Everyday physical supplies that match the fitted-barrier copy above — a sweet-itch rug so the body, belly, and tail dock stay covered, plus a sweet-itch hood so the mane, poll, and ears are closed to midges. These are not treatments for Culicoides hypersensitivity, summer seasonal recurrent dermatitis, or secondary skin infection; a horse that is rubbing raw, has broken skin, or is not improving after the barrier is on needs a veterinarian. Fly sheets, fly masks, fly boots, fly spray, fly traps, stall fans, turnout blankets, and any steroid, antihistamine, or spot-on stay off this kit — those already ship on other pages or are prescription-only. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (sweet-itch kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page sweet-itch rug / hood copy, not fly sheets, fly
              masks, fly spray, fans, blankets, or medication hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the sweet-itch kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page fitted-barrier
              copy — a horse sweet-itch rug for covering the body, belly,
              and tail dock, and a sweet-itch hood so the mane, poll, and
              ears stay closed to midges. Everyday physical supplies only.
              They are not a ranked product list, they are not a fly sheet
              or fly mask, they are not fly spray or fly traps, they are
              not a steroid or a spot-on, they are not a medication, and
              they do not replace a veterinarian. Horses.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+sweet+itch+rug?s=health-sweet-itch"
                amazonLabel="Browse horse sweet-itch rugs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+sweet+itch+hood?s=health-sweet-itch"
                amazonLabel="Browse horse sweet-itch hoods on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Schaffartzik A, Hamza E, Janda J, et al. “Equine Insect Bite Hypersensitivity: What Do We Know?” Veterinary Immunology and Immunopathology, 2012; 147(3–4):113–126.</li>
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011.</li>
            <li>American Association of Equine Practitioners. “Insect Hypersensitivity / Sweet Itch” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
