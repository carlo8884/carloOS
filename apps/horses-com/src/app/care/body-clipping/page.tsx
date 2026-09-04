import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Body Clipping Horses — Why, When, Clip Types, and Aftercare",
  description:
    "Reference guide to clipping horses: why clip, when to start and stop, the main clip patterns, technique basics, and post-clip blanketing and care.",
  path: '/care/body-clipping',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Body Clipping Horses — Why, When, Clip Types, and Aftercare",
  description:
    "Reference guide to clipping horses: why clip, when to start and stop, the main clip patterns, technique basics, and post-clip blanketing and care.",
  url: 'https://horses.com/care/body-clipping',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',
})

const FAQS = [
  {
    question: "Why would I clip my horse in winter?",
    answer:
      "A horse in regular winter work grows a heavy coat, sweats under it, and dries slowly, risking chills and poor recovery. Clipping removes the coat so the horse sweats less, cools and dries quickly, stays cleaner, and works better. It is also used for old or PPID horses that fail to shed and overheat.",
    answerText:
      "Clipping lets a working horse sweat less and cool and dry quickly after work, avoiding chills and improving recovery. It also helps old or PPID horses that overheat in heavy coats.",
  },
  {
    question: "Does a clipped horse need a blanket?",
    answer:
      "Yes. A clipped horse has lost the natural insulation of its winter coat and depends on rugs for warmth, with the weight matched to the weather and the extent of the clip. Rugging is therefore a commitment that comes with the decision to clip, and the rugs must be adjusted as conditions change.",
    answerText:
      "Yes -- clipping removes natural insulation, so a clipped horse needs rugs matched to the weather and clip extent. Rugging is part of the commitment to clip.",
  },
  {
    question: "When should I stop clipping for the season?",
    answer:
      "Many owners stop clipping in late winter, commonly avoiding clips after around the start of spring, so the new summer coat comes through cleanly rather than being cut and spoiled. The exact timing follows the horse's workload and coat growth rather than a fixed calendar date.",
    answerText:
      "Usually in late winter -- often stopping around early spring so the summer coat comes through cleanly. Timing follows workload and coat growth, not a fixed date.",
  },
]

export default function BodyClippingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
          { title: 'Horse Blanketing Guide', href: '/care/blanketing' },
          { title: 'Fly Control for Horses', href: '/care/fly-control' },
        ]}
        hero={{
          title: "Body Clipping Horses",
          subtitle:
            "Clipping removes some or all of a horse's winter coat so that a horse in work can cool down, dry off, and recover faster without overheating and sweating under a heavy coat. It is a management decision with real trade-offs: a clipped horse looks smart and works better, but it has surrendered its natural insulation and now depends on you for warmth. This is reference material to inform the decision and the aftercare.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Body Clipping", href: '/care/body-clipping' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Clip", href: "#why" },
            { label: "When to Clip", href: "#when" },
            { label: "Clip Types", href: "#types" },
            { label: "Technique Basics", href: "#technique" },
            { label: "Aftercare", href: "#aftercare" },
            { label: "Clipping Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Blanketing Guide", href: "/care/blanketing" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Blanket Weights Explained", href: "/tack/blanket-weights" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-clipping"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-04"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the body-clipping checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse body-clipping checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the clipper, blade, clipper-oil, and cooler notes so the
              kit is ready before the winter coat comes in. Educational
              checklist, not a diagnosis and not a sedation order. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse body-clipping checklist"
              subtitle="Email the clipper, blade, clipper-oil, and cooler notes. No spam."
              ctaText="Email my horse body-clipping checklist"
              source="care-body-clipping-under-hero"
            />
          </div>

          <h2 id="why">Why Clip</h2>
          <p>A horse in regular winter work grows a thick coat, sweats heavily under it, and then takes hours to dry -- risking chills and making proper cooling impossible. Clipping removes the coat so the horse sweats less, cools and dries quickly after work, is easier to keep clean, and recovers better. Clipping is also used to help old or PPID horses that fail to shed and overheat under heavy coats. The trade-off is that the horse loses its natural insulation and must be blanketed.</p>

          <h2 id="when">When to Clip</h2>
          <p>The first clip is usually done in autumn once the winter coat has come in, with horses in work re-clipped through the winter as the coat regrows -- often every few weeks. Many owners stop clipping in late winter so the summer coat comes through cleanly, commonly avoiding clips after roughly the start of spring so as not to spoil the new coat. The timing follows the horse&apos;s workload and coat growth rather than a fixed date.</p>

          <h2 id="types">Clip Types</h2>
          <ul>
            <li><strong>Full clip</strong> -- all the coat removed; for horses in hard work, requiring the most rugging.</li>
            <li><strong>Hunter clip</strong> -- coat removed except the legs (for protection) and a saddle patch.</li>
            <li><strong>Blanket clip</strong> -- coat removed from the neck and belly, leaving a blanket-shaped area of coat over the back and quarters.</li>
            <li><strong>Trace clip</strong> -- only the sweatiest lower neck, chest, and belly clipped; suits light to moderate work and keeps more natural cover.</li>
            <li><strong>Bib or chaser clips</strong> -- minimal clips for horses in light work that still grow heavy coats.</li>
          </ul>

          <h2 id="technique">Technique Basics</h2>
          <p>Clipping is done on a clean, dry horse with well-maintained, sharp, properly tensioned clippers and clean blades, working against the direction of hair growth in long overlapping strokes. The blades and motor get hot, so they need regular oiling, cooling, and cleaning to clip well and avoid burning the horse. A calm horse, good lighting, and patience matter; nervous or unhandled horses may need professional clipping or, on veterinary advice, sedation. Take care around ticklish and bony areas.</p>

          <h2 id="aftercare">Aftercare</h2>
          <p>A clipped horse has lost its insulation and must be rugged appropriately for the weather and the extent of the clip, with weights adjusted as conditions change -- see the blanketing and blanket-weights guides. Clipped horses also benefit from extra warmth after washing and from coolers that wick moisture. Watch for the horse being too cold (shivering, tucked up) or too hot under rugs, and groom regularly, since clipping exposes the skin and a clipped coat shows dirt and rubs more readily.</p>

          <h2 id="kit">Clipping Kit</h2>
          <p>Everyday physical supplies that match the technique and aftercare copy above — well-maintained, sharp, properly tensioned clippers, clean blades, clipper oil for regular oiling and cooling, and coolers that wick moisture after a wash. Rugs and blanket weights stay on the blanketing guide; veterinary sedation for a nervous horse stays with a veterinarian. These are not a treatment for PPID, overheating, or a skin condition. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (clipping kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page clipper / blade / oil / cooler copy, not rugs
              (blanketing page), medication, or sedation hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the clipping kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page technique and
              aftercare copy — horse clippers, clipper blades, clipper oil,
              and a fleece cooler that wicks moisture. Everyday physical
              supplies only. They are not a ranked product list, they are not
              rugs or blanket weights, they are not sedation or a medication,
              and they do not replace a veterinarian. Horses.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+clippers?s=care-body-clipping"
                amazonLabel="Browse horse clippers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+clipper+blades?s=care-body-clipping"
                amazonLabel="Browse horse clipper blades on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+clipper+oil?s=care-body-clipping"
                amazonLabel="Browse horse clipper oil on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+fleece+cooler?s=care-body-clipping"
                amazonLabel="Browse horse fleece coolers on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (clipping types and technique).</li>
            <li>American Association of Equine Practitioners. “Clipping and Winter Work” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
