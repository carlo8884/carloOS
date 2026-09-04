import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Fencing and Safety — Types, Heights, Hazards",
  description:
    "Reference guide to horse fencing and paddock safety: safe fence types, heights and spacing, hazards to avoid, gates, and routine checks.",
  path: '/care/fencing-safety',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Fencing and Safety — Types, Heights, Hazards",
  description:
    "Reference guide to horse fencing and paddock safety: safe fence types, heights and spacing, hazards to avoid, gates, and routine checks.",
  url: 'https://horses.com/care/fencing-safety',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',
})

const FAQS = [
  {
    question: "Is barbed wire safe for horses?",
    answer:
      "No. Barbed wire is widely regarded as unsuitable for horse fencing because it causes severe lacerations, degloving injuries, and entanglement when a flighty horse hits or gets caught in it. Safer alternatives include post and rail, horse-safe mesh, electric tape or rope, and coated rail systems.",
    answerText:
      "No -- barbed wire causes severe lacerations and entanglement injuries and is unsuitable for horses. Use post and rail, horse-safe mesh, electric tape, or coated rail instead.",
  },
  {
    question: "How high should horse fencing be?",
    answer:
      "Perimeter fencing for most horses is commonly around 1.3 to 1.5 meters (about 4.5 to 5 feet), with taller fencing for stallions and habitual jumpers. The exact height depends on the horses; the key is that they cannot easily jump, lean over, or get a leg over the top or under the bottom.",
    answerText:
      "Commonly about 1.3 to 1.5 m (4.5 to 5 ft), taller for stallions or jumpers. The aim is that horses cannot jump, lean over, or get a leg over or under it.",
  },
  {
    question: "Why is fence visibility important?",
    answer:
      "Horses are flighty prey animals that can panic and run into fencing they cannot see. Highly visible fences -- broad rails, wide electric tape, flagged wire -- let horses recognize and respect the boundary, reducing collisions. Invisible or thin tight wire is a major injury risk, which is why visibility is a core safety principle.",
    answerText:
      "Horses can panic into fences they cannot see. Visible fences (broad rails, wide tape, flagged wire) let horses respect the boundary and avoid collisions.",
  },
]

export default function FencingSafetyPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Pasture Management', href: '/care/pasture-management' },
          { title: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling' },
          { title: 'Owning a Horse — Costs', href: '/ownership/cost-of-owning-a-horse' },
        ]}
        hero={{
          title: "Horse Fencing and Safety",
          subtitle:
            "Fencing is one of the few places where getting it wrong can cost a horse its life. Horses are large, fast, flighty prey animals that panic into fences, push through weak ones, and tangle legs in the wrong materials. Choosing safe fencing, setting it up correctly, and removing hazards from the field is fundamental management. This is reference material to inform your own setup.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Fencing and Safety", href: '/care/fencing-safety' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Fencing Safety Matters", href: "#why" },
            { label: "Safe Fence Types", href: "#types" },
            { label: "Height and Spacing", href: "#height" },
            { label: "Hazards to Avoid", href: "#hazards" },
            { label: "Gates and Routine Checks", href: "#gates" },
            { label: "Fencing Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Turnout vs Stabling", href: "/care/turnout-vs-stabling" },
              { label: "First-Aid Kit", href: "/ownership/first-aid-kit" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-fencing"
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
              Keep the fencing-safety checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse fencing-safety checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the electric-tape, horse-mesh, electric-rope, and fence-tester
              notes so the paddock kit is ready before you walk the line.
              Educational checklist, not a diagnosis and not a medication
              order. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse fencing-safety checklist"
              subtitle="Email the electric-tape, horse-mesh, electric-rope, and fence-tester notes. No spam."
              ctaText="Email my horse fencing-safety checklist"
              source="care-fencing-safety-under-hero"
            />
          </div>

          <h2 id="why">Why Fencing Safety Matters</h2>
          <p>A horse that hits, leans on, or gets a leg through a fence at speed can suffer catastrophic injury. The goals of good fencing are to be highly visible so horses respect and avoid it, to contain without trapping, to flex or break safely rather than impale or saw, and to have no gaps, points, or loops that catch a leg or head. Cheap, sharp, or flimsy fencing is a false economy.</p>

          <h2 id="types">Safe Fence Types</h2>
          <ul>
            <li><strong>Post and rail (wood or synthetic)</strong> -- highly visible and traditional; synthetic rails avoid splintering and chewing.</li>
            <li><strong>Electric tape, rope, or wire</strong> -- visible and psychologically effective; the shock teaches respect and the materials give rather than cut.</li>
            <li><strong>Mesh designed for horses</strong> -- with openings too small for a hoof to pass through (avoid large-square wire that traps legs).</li>
            <li><strong>Vinyl or coated rail systems</strong> -- durable and visible, often combined with an electric line to stop leaning.</li>
          </ul>

          <h2 id="height">Height and Spacing</h2>
          <p>Perimeter fencing for most horses is commonly around 1.3 to 1.5 meters (roughly 4.5 to 5 feet) high, taller for stallions or notorious jumpers. The bottom rail or wire should be high enough that a horse cannot easily get a leg over or graze through and become trapped, but low enough to discourage rolling under. Spacing between rails should not allow a foot or head to pass and lodge. Corners are common trap points and benefit from rounding off.</p>

          <h2 id="hazards">Hazards to Avoid</h2>
          <ul>
            <li><strong>Barbed wire</strong> -- responsible for severe lacerations and degloving injuries; widely considered unsuitable for horses.</li>
            <li><strong>High-tensile plain wire run tight and unflagged</strong> which is hard to see and can cut or trap.</li>
            <li><strong>Large-square or sheep mesh</strong> that catches a pawing hoof.</li>
            <li><strong>Protruding nails, broken rails, T-post tops, and sharp edges.</strong></li>
            <li><strong>Loops, gaps, and projections</strong> that snag a halter, leg, or head.</li>
          </ul>

          <h2 id="gates">Gates and Routine Checks</h2>
          <p>Gates should be horse-safe -- well hung, easy for a person to open and close one-handed while leading, latched securely against a determined horse, and free of gaps that trap a leg. Walk the fence line regularly to check tension, look for broken rails or downed wire, test the electric charge, clear vegetation off electric lines, and remove debris and hazards from the field. Many fence injuries trace to a known fault that was not fixed in time.</p>

          <h2 id="kit">Fencing Kit</h2>
          <p>Everyday physical supplies that match the safe-fence and routine-check copy above — visible electric tape, electric rope, mesh designed for horses with openings too small for a hoof, and a tester for the electric charge. Post-and-rail lumber, vinyl rail systems, and contractor-installed fencing stay off this kit. Barbed wire, high-tensile unflagged wire, and sheep mesh stay off it too — those are hazards, not shoppable hops. These are not a treatment for a laceration or a diagnosis. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (fencing kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page electric-tape / horse-mesh / electric-rope / tester
              copy, not barbed wire, sheep mesh, medication, or
              contractor lumber hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the fencing kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page safe-fence
              and routine-check copy — horse electric tape, horse-safe mesh,
              electric rope, and an electric fence tester. Everyday physical
              supplies only. They are not a ranked product list, they are not
              barbed wire or sheep mesh, they are not a medication, and they
              do not replace a veterinarian. Horses.com earns a commission
              on qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+electric+tape?s=care-fencing-safety"
                amazonLabel="Browse horse electric tape on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+fence+mesh?s=care-fencing-safety"
                amazonLabel="Browse horse fence mesh on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+electric+rope?s=care-fencing-safety"
                amazonLabel="Browse horse electric rope on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/electric+fence+tester?s=care-fencing-safety"
                amazonLabel="Browse electric fence testers on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Rural and agricultural extension services. Horse fencing and facility-safety resources.</li>
            <li>American Association of Equine Practitioners. “Facility and Fencing Safety” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
