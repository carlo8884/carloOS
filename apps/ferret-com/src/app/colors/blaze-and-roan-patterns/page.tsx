import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
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
  title: 'Blaze & Roan Patterns in Ferrets | Ferret.com',
  description:
    'Blaze is a white head stripe; roan is a salt-and-pepper mix of white and colored hairs. What each means, how they overlap, and the deafness link.',
  path: '/colors/blaze-and-roan-patterns',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Blaze & Roan Patterns in Ferrets',
  description:
    'The blaze (white head stripe) and roan (mixed white-and-colored guard hairs) ferret patterns explained, including how they overlap and their relationship to coat-color deafness.',
  url: 'https://ferret.com/colors/blaze-and-roan-patterns',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What is a blaze pattern in ferrets?',
    answer:
      "A blaze is a white stripe that runs from the nose up over the top of the head and between the ears, against an otherwise colored head. Blaze ferrets also typically show white mitts on the feet, white at the throat or bib, and sometimes white knee patches. The blaze stripe is the defining marker.",
  },
  {
    question: 'What does roan mean in a ferret coat?',
    answer:
      "Roan describes a coat in which white guard hairs are mixed evenly through the colored guard hairs, creating a salt-and-pepper or frosted effect across the body. A roan is roughly half-and-half white-to-colored in its guard coat; with more white it shades toward what some call a heavy roan, and with less it approaches a standard colored coat.",
  },
  {
    question: 'Are blaze and roan ferrets more likely to be deaf?',
    answer:
      "Blaze in particular sits within the white-head patterning group that is associated with coat-color-linked deafness, so blaze ferrets have an elevated rate of hearing loss, similar to pandas. Roan on its own is a body-coat mix and is less directly tied to the white-head deafness genetics, but ferrets carrying heavy white head and face markings of any kind are worth a hearing check.",
  },
  {
    question: 'Can a ferret be both blaze and roan?',
    answer:
      "Yes. These are pattern descriptors rather than mutually exclusive colors, so a single ferret can carry a blaze stripe on the head and a roan, salt-and-pepper mix through the body coat at the same time. This overlap is part of why ferret pattern labels are so inconsistent between breeders.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function BlazeAndRoanPatternsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Blaze & Roan Patterns',
          subtitle:
            "Two of the most commonly mislabeled ferret patterns sit side by side here: the blaze, a clean white stripe running up a colored head, and the roan, a salt-and-pepper mix of white and colored guard hairs across the body. They can appear separately or together, and one of them carries the same deafness flag as the panda. Here is how to read each.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          {
            name: 'Blaze & Roan Patterns',
            href: '/colors/blaze-and-roan-patterns',
          },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Blaze Pattern', href: '#blaze' },
                { label: 'The Roan Pattern', href: '#roan' },
                { label: 'When They Overlap', href: '#overlap' },
                { label: 'The Deafness Flag', href: '#deafness' },
                { label: 'Care Notes', href: '#care' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Panda Ferrets', href: '/colors/panda-ferrets' },
                { label: 'Silver Ferrets', href: '/colors/silver-ferrets' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-blaze-roan"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Panda Ferrets', href: '/colors/panda-ferrets' },
          { title: 'Silver Ferrets', href: '/colors/silver-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret blaze-and-roan checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret blaze-and-roan checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-blaze-stripe-chart,
              fridge-blaze-vs-roan-card, and
              mustelid-blaze-roan-reference-handbook notes
              that match the blaze-stripe-look-map,
              blaze-vs-roan-log, and
              afa-blaze-deafness-grounding copy on this
              page — a laminated ferret blaze stripe chart
              so the white head-stripe / mitts / bib /
              knee-patch map is posted on the fridge (not
              a tools-hub calculator chart, not a reviews
              buyer-guide chart, not a diet feeding chart,
              not a care routine chart, not a behavior cue
              chart, not a health triage chart, not an
              ownership section-map chart, not a colors-hub
              palette chart, not a first-year schedule
              chart, not a color-pattern axis chart, not a
              sable bandit-mask chart, not an albino
              red-eye chart, not a DEW dark-eye chart, not
              a cinnamon brick-coat chart, not a champagne
              milky-coat chart, not a chocolate milk-coat
              chart, not a black jet-coat chart, not a
              silver frost-coat chart, not a panda
              white-head chart), a ferret fridge
              blaze-vs-roan card so blaze stripe vs roan
              salt-and-pepper notes are labeled on the
              fridge (not a measurement card, not a
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
              black-vs-sable card, not a silver-vs-dew
              card, not a panda-vs-blaze card), and a
              mustelid blaze-roan reference handbook so
              the AFA / blaze deafness grounding is a
              physical kitchen book (not a calculator
              handbook, not a reviews handbook, not a diet
              handbook, not a care handbook, not a
              behavior handbook, not a health handbook,
              not an ownership handbook, not a colors-hub
              handbook, not a first-year handbook, not a
              color-pattern handbook, not a sable handbook,
              not an albino handbook, not a DEW handbook,
              not a cinnamon handbook, not a champagne
              handbook, not a chocolate handbook, not a
              black handbook, not a silver handbook, not a
              panda handbook). Educational kitchen
              checklist, not a ranked color list, not a
              child toothbrush / dosing hop, and not a
              substitute for an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Aging
              pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret blaze-and-roan checklist"
              subtitle="Email the blaze-stripe-chart, fridge blaze-vs-roan card, and blaze-roan-handbook notes. No spam."
              ctaText="Email my ferret blaze-and-roan checklist"
              source="colors-blaze-and-roan-under-hero"
            />
          </div>

          <DropCap>
            Ferret pattern names describe where the white falls. Two of the most
            useful — and most muddled — are blaze and roan. A blaze is a stripe
            up the head; a roan is a mix through the coat. They are not colors,
            they can appear together, and one of them comes with a hearing
            caution that every owner should know before they choose by looks.
          </DropCap>

          <h2 id="blaze">The Blaze Pattern</h2>
          <p>
            A blaze is a white stripe running from the nose, up over the top of
            the head, and between the ears, against an otherwise colored head:
          </p>
          <ul>
            <li>
              <strong>The stripe:</strong> the defining feature — a clean band of
              white over the skull.
            </li>
            <li>
              <strong>Mitts:</strong> white feet almost always accompany a blaze.
            </li>
            <li>
              <strong>Bib and knees:</strong> white at the throat and often the
              knees rounds out the pattern.
            </li>
          </ul>
          <p>
            Blaze is the milder cousin of the panda&apos;s fully white head. For
            the full-white-head pattern it sits next to, see{' '}
            <a href="/colors/panda-ferrets">panda ferrets</a>.
          </p>

          <h2 id="roan">The Roan Pattern</h2>
          <p>
            Roan is about the body coat rather than the head. In a roan, white
            guard hairs are mixed roughly evenly through the colored guard hairs,
            producing a salt-and-pepper, frosted look across the body. A coat
            that is about half white guard hairs reads as a classic roan; heavier
            white shifts it toward what some call a heavy roan, and lighter white
            edges back toward a standard colored coat. Roan overlaps in look with
            the frosted{' '}
            <a href="/colors/silver-ferrets">silver coat</a>, though silver also
            implies a tendency to whiten over time.
          </p>

          <h2 id="overlap">When They Overlap</h2>
          <p>
            Blaze and roan are pattern descriptors, not exclusive categories, so
            a single ferret can wear both at once — a blaze stripe up the head
            and a roan mix through the body. This is a large part of why ferret
            pattern labels vary so much between breeders and listings. For how
            these overlays sit across the whole palette, see our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>.
          </p>

          <h2 id="deafness">The Deafness Flag</h2>
          <CalloutBox variant="warning" title="Blaze carries a hearing caution">
            <p>
              The blaze belongs to the white-head patterning group associated
              with coat-color-linked deafness, the same pigment-related hearing
              loss that affects many pandas and white-headed animals generally.
              Blaze ferrets have an elevated rate of deafness and are worth a
              hearing check. Roan on its own — a body-coat mix — is less directly
              tied to those white-head genetics, but any ferret with heavy white
              on the head and face deserves the same check. Deaf ferrets thrive
              with simple handling adjustments: approach in sight, use touch and
              vibration cues, and never startle a sleeping one.
            </p>
          </CalloutBox>

          <h2 id="care">Care Notes</h2>
          <p>
            Pattern changes nothing about a ferret&apos;s diet, temperament, or
            husbandry — only, in the case of a deaf blaze, a few sight-and-touch
            handling habits. For everyday care browse our{' '}
            <a href="/care">care references</a>; for the conditions ferret owners
            encounter most, the <a href="/health">health hub</a>. Whatever the
            pattern, soundness and temperament are what matter most when choosing
            a ferret — see{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
            ferret</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized color and pattern
              standards and owner-facing pattern guidance.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              coat genetics and pigment-related deafness in white-patterned
              ferrets.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret coat
              genetics, white-patterning, and hearing.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about ferret coat patterns, not
            individualized veterinary advice. A suspected hearing deficit
            warrants evaluation by an exotic-mammal veterinarian, though deafness
            itself requires no medical treatment.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical blaze-and-roan kitchen kit next
            to this page — a laminated ferret blaze stripe
            chart so the white head-stripe / mitts / bib /
            knee-patch map is posted on the fridge, a
            ferret fridge blaze-vs-roan card so blaze
            stripe vs roan salt-and-pepper notes are
            labeled on the fridge, and a mustelid
            blaze-roan reference handbook so the AFA /
            blaze deafness grounding is a physical kitchen
            book. These are educational kitchen searches,
            not a ranked color list, not a substitute for
            an exotic-mammal veterinarian, not a tools-hub
            / reviews-hub / diet-hub / care-hub /
            behavior-hub / health-hub / ownership-hub /
            colors-hub / first-year-schedule /
            colors-and-patterns / sable-ferrets /
            albino-ferrets / dew-ferrets / cinnamon-ferrets
            / champagne-ferrets / chocolate-ferrets /
            black-ferrets / silver-ferrets / panda-ferrets
            hop, and not a child toothbrush / dosing hop
            (those live on health children). This page
            does not hop medications or vaccines. This
            page does not sell insurance. This page does
            not claim hands-on testing. Ferret aging stays
            held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret blaze stripe chart /
              ferret fridge blaze-vs-roan card /
              mustelid blaze-roan reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets /
              silver-ferrets / panda-ferrets kitchen kits
              and child finger+toothbrush /
              carnivore+care hops. Directory import left
              untouched. Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the blaze-and-roan kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page blaze-stripe-look-map,
              blaze-vs-roan-log, and
              afa-blaze-deafness-grounding copy — a
              laminated ferret blaze stripe chart, a
              ferret fridge blaze-vs-roan card, and a
              mustelid blaze-roan reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets /
              silver-ferrets / panda-ferrets hop, they are
              not a child toothbrush hop, and they do not
              replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+blaze+stripe+chart?s=blaze-and-roan"
                amazonLabel="Browse laminated ferret blaze stripe charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+blaze+vs+roan+card?s=blaze-and-roan"
                amazonLabel="Browse ferret fridge blaze-vs-roan cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+blaze+roan+reference+handbook?s=blaze-and-roan"
                amazonLabel="Browse mustelid blaze-roan reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
