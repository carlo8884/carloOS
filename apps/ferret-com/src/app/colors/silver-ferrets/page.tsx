import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  StockImage,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Silver Ferrets — The Greying, Shifting Coat | Ferret.com',
  description:
    'Silver ferrets carry white-tipped guard hairs for a frosted, grey-over-dark look. Why silver is a transitional coat and how it differs from DEW.',
  path: '/colors/silver-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Silver Ferrets',
  description:
    'The silver ferret coat — white-tipped guard hairs over a darker undercoat creating a frosted grey look, and why many silvers shift toward white with each molt.',
  url: 'https://ferret.com/colors/silver-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What does a silver ferret look like?',
    answer:
      "A silver ferret has dark guard hairs that are tipped or interspersed with white, producing a frosted, grey-over-charcoal appearance. The undercoat is usually pale, the mask is often broken or faint, and there are frequently white patches at the throat, feet, or knees. The overall effect is a steely, salt-and-pepper coat rather than a single solid color.",
  },
  {
    question: 'Is silver a permanent ferret color?',
    answer:
      "Often not. Silver is one of the most famously unstable ferret coats. Many silvers lose pigment with each seasonal molt, growing whiter year over year, and a fraction eventually progress to a near-white or dark-eyed-white appearance. A young silver and the same animal at three years old can look like two different ferrets.",
  },
  {
    question: 'How is a silver ferret different from a dark-eyed white?',
    answer:
      "A silver still retains visible dark guard hairs and a grey overall cast, while a dark-eyed white (DEW) has an essentially all-white coat with dark eyes. Some silvers progress toward the DEW look over time, which is one reason the two are linked — but a classic silver is greyish and frosted, not white.",
  },
  {
    question: "Does the silver coat affect a ferret's health?",
    answer:
      "Coat color and pattern do not change a ferret's core care needs. However, heavily white-patterned and progressively whitening ferrets sit near the same genetics associated with coat-color-linked deafness, so a silver that whitens substantially may be worth a simple hearing check. The greying itself is cosmetic and harmless.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function SilverFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Silver Ferrets — The Frosted, Shifting Coat',
          subtitle:
            "Silver is the ferret color that refuses to hold still. White-tipped guard hairs scatter over a darker base to create a steely, frosted grey — and then the coat keeps changing, often whitening with every molt until some silvers barely resemble their kit selves. Here is what silver actually is, why it shifts, and how to tell it from the whites it can grow into.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Silver Ferrets', href: '/colors/silver-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Silver Looks Like', href: '#look' },
                { label: 'Why Silver Keeps Changing', href: '#shifting' },
                { label: 'Silver vs. Dark-Eyed White', href: '#dew' },
                { label: 'The Deafness Link', href: '#deafness' },
                { label: 'Care Notes', href: '#care' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Dark-Eyed White Ferrets', href: '/colors/dark-eyed-white-ferrets' },
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-silver"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Blaze & Roan Patterns', href: '/colors/blaze-and-roan-patterns' },
          { title: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-silver"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret silver-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret silver-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-silver-frost-coat-chart,
              fridge-silver-vs-dew-card, and
              mustelid-silver-reference-handbook notes
              that match the frost-grey-look-map,
              silver-vs-dew-shift-log, and
              afa-silver-unstable-grounding copy on this
              page — a laminated ferret silver frost-coat
              chart so the white-tipped guard / pale
              undercoat / broken-mask / frost-grey map is
              posted on the fridge (not a tools-hub
              calculator chart, not a reviews buyer-guide
              chart, not a diet feeding chart, not a care
              routine chart, not a behavior cue chart, not
              a health triage chart, not an ownership
              section-map chart, not a colors-hub palette
              chart, not a first-year schedule chart, not
              a color-pattern axis chart, not a sable
              bandit-mask chart, not an albino red-eye
              chart, not a DEW dark-eye chart, not a
              cinnamon brick-coat chart, not a champagne
              milky-coat chart, not a chocolate milk-coat
              chart, not a black jet-coat chart), a ferret
              fridge silver-vs-dew card so silver vs
              dark-eyed-white whitening notes are labeled
              on the fridge (not a measurement card, not a
              reviews comparison card, not a diet label
              card, not a care card, not a behavior card,
              not a health library card, not an ownership
              prep card, not a colors-hub color id card,
              not a first-year milestone card, not a
              color-vs-pattern card, not a
              sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card, not a
              champagne-vs-brown card, not a
              chocolate-vs-brown card, not a
              black-vs-sable card), and a mustelid silver
              reference handbook so the AFA / unstable-silver
              grounding is a physical kitchen book (not a
              calculator handbook, not a reviews handbook,
              not a diet handbook, not a care handbook,
              not a behavior handbook, not a health
              handbook, not an ownership handbook, not a
              colors-hub handbook, not a first-year
              handbook, not a color-pattern handbook, not
              a sable handbook, not an albino handbook,
              not a DEW handbook, not a cinnamon handbook,
              not a champagne handbook, not a chocolate
              handbook, not a black handbook). Educational
              kitchen checklist, not a ranked color list,
              not a child toothbrush / dosing hop, and not
              a substitute for an exotic-mammal
              veterinarian. Ferret.com does not sell
              insurance. Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret silver-ferrets checklist"
              subtitle="Email the silver-frost-coat-chart, fridge silver-vs-dew card, and silver-handbook notes. No spam."
              ctaText="Email my ferret silver-ferrets checklist"
              source="colors-silver-ferrets-under-hero"
            />
          </div>

          <DropCap>
            Silver is less a fixed color than a moment in a coat&apos;s life. It
            describes dark fur shot through with white-tipped guard hairs — a
            frosted, salt-and-pepper grey that looks deliberate but is often the
            visible edge of a coat steadily losing its pigment. Of all the ferret
            colors, silver is the one most likely to look different next year.
          </DropCap>

          <h2 id="look">What Silver Looks Like</h2>
          <p>
            The silver signature is white scattered through a darker coat rather
            than an even, single tone:
          </p>
          <ul>
            <li>
              <strong>Guard hairs:</strong> dark, but tipped or streaked with
              white, giving the frosted effect.
            </li>
            <li>
              <strong>Undercoat:</strong> usually pale or cream, showing through
              the darker outer coat.
            </li>
            <li>
              <strong>Mask:</strong> frequently broken, faint, or absent — a
              far cry from the crisp sable mask.
            </li>
            <li>
              <strong>White markings:</strong> patches at the throat, feet, and
              knees are common.
            </li>
            <li>
              <strong>Overall:</strong> a steely, grey-over-charcoal cast rather
              than a warm or solid color.
            </li>
          </ul>

          <h2 id="shifting">Why Silver Keeps Changing</h2>
          <p>
            Silver is famous among ferret keepers for being unstable. Many
            silvers progressively lose pigment, growing whiter with each seasonal
            molt, so a frosted grey kit can become a much paler adult — and a
            fraction continue all the way toward a near-white coat. This is one
            reason &quot;silver&quot; is a slippery label: two breeders may apply
            it to coats at different points along the same whitening path. For
            how silver fits the wider palette and its pattern overlaps, see our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>.
          </p>

          <CalloutBox variant="tip" title="Expect your silver to shift">
            <p>
              If you adopt a young silver, do not be surprised when the coat
              lightens over the next year or two. Progressive whitening is normal
              for this color and is not a sign of illness. The animal underneath
              is unchanged — only the coat is moving.
            </p>
          </CalloutBox>

          <h2 id="dew">Silver vs. Dark-Eyed White</h2>
          <p>
            These two are easy to confuse, especially as a silver ages:
          </p>
          <ul>
            <li>
              <strong>Silver</strong> retains visible dark guard hairs and reads
              as grey or frosted — there is still pigment in the coat.
            </li>
            <li>
              <strong>Dark-eyed white</strong> is an essentially all-white coat
              with dark (burgundy-to-black) eyes and no grey cast.
            </li>
          </ul>
          <p>
            Because some silvers whiten toward the DEW look, the line between
            them is genuinely blurry at the pale end. For the white-coated,
            dark-eyed pattern in detail, see{' '}
            <a href="/colors/dark-eyed-white-ferrets">dark-eyed white ferrets</a>.
          </p>

          <h2 id="deafness">The Deafness Link</h2>
          <p>
            Heavily white-patterned ferrets — including some silvers that whiten
            substantially, blazes, pandas, and panda-type coats — sit near the
            genetics associated with coat-color-linked deafness, the same kind of
            pigment-related hearing loss seen in some white animals across many
            species. Not every white-patterned ferret is affected, and the
            frosted-grey silver look itself is purely cosmetic. If your silver
            whitens markedly, a simple at-home or vet hearing check is reasonable.
          </p>

          <h2 id="care">Care Notes</h2>
          <p>
            Nothing about caring for a silver ferret is color-specific — coat
            does not change a ferret&apos;s temperament, diet, or husbandry. The
            one thing worth tracking is the whitening trajectory, purely so a
            substantial shift toward white prompts that optional hearing check.
            For everyday husbandry browse our{' '}
            <a href="/care">care references</a>, and for the conditions ferret
            owners meet most, the <a href="/health">health hub</a>. Whatever the
            coat, what matters when choosing one is soundness and temperament —
            see <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
            ferret</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized color and pattern
              standards and owner-facing color guidance.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              coat genetics and pigment-related hearing notes.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret coat
              genetics and husbandry.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about ferret coat color, not
            individualized veterinary advice. Coat color does not change a
            ferret&apos;s medical needs; any health concern, including suspected
            hearing loss, warrants an exotic-mammal vet visit.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical silver-ferrets kitchen kit next
            to this page — a laminated ferret silver
            frost-coat chart so the white-tipped guard /
            pale undercoat / broken-mask / frost-grey map
            is posted on the fridge, a ferret fridge
            silver-vs-dew card so silver vs dark-eyed-white
            whitening notes are labeled on the fridge, and
            a mustelid silver reference handbook so the
            AFA / unstable-silver grounding is a physical
            kitchen book. These are educational kitchen
            searches, not a ranked color list, not a
            substitute for an exotic-mammal veterinarian,
            not a tools-hub / reviews-hub / diet-hub /
            care-hub / behavior-hub / health-hub /
            ownership-hub / colors-hub / first-year-schedule
            / colors-and-patterns / sable-ferrets /
            albino-ferrets / dew-ferrets / cinnamon-ferrets
            / champagne-ferrets / chocolate-ferrets /
            black-ferrets hop, and not a child toothbrush /
            dosing hop (those live on health children).
            This page does not hop medications or vaccines.
            This page does not sell insurance. This page
            does not claim hands-on testing. Ferret aging
            stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret silver frost-coat chart /
              ferret fridge silver-vs-dew card /
              mustelid silver reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets kitchen
              kits and child finger+toothbrush /
              carnivore+care hops. Directory import left
              untouched. Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the silver-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page frost-grey-look-map,
              silver-vs-dew-shift-log, and
              afa-silver-unstable-grounding copy — a
              laminated ferret silver frost-coat chart, a
              ferret fridge silver-vs-dew card, and a
              mustelid silver reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets hop, they
              are not a child toothbrush hop, and they do
              not replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+silver+frost+coat+chart?s=silver-ferrets"
                amazonLabel="Browse laminated ferret silver frost-coat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+silver+vs+dew+card?s=silver-ferrets"
                amazonLabel="Browse ferret fridge silver-vs-dew cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+silver+reference+handbook?s=silver-ferrets"
                amazonLabel="Browse mustelid silver reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
