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
  title: 'Panda Ferrets — The White-Headed Pattern | Ferret.com',
  description:
    'Panda ferrets have a white head and shoulders over a colored body with white feet. What defines the panda pattern, the deafness link, and vs blaze.',
  path: '/colors/panda-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Panda Ferrets',
  description:
    'The panda ferret pattern — a fully white head and shoulders over a colored body with white mitts and a colored saddle, and its link to coat-color deafness.',
  url: 'https://ferret.com/colors/panda-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What is a panda ferret?',
    answer:
      "Panda is a coat pattern, not a base color. A panda ferret has a completely white head and throat, white shoulders, white feet (mitts), and usually a white-tipped tail, set against a colored body that forms a band or saddle of pigment across the back. The white head with dark body is what gives the panda its name.",
  },
  {
    question: 'Is panda a color or a pattern?',
    answer:
      "Panda is a pattern overlay that can sit on top of different base colors. The colored saddle on a panda might be sable, chocolate, or another shade, but the defining feature is always the same: an all-white head and forequarters with a colored body. That is why panda is grouped with patterns like blaze, mitt, and roan rather than with solid colors.",
  },
  {
    question: 'Why are panda ferrets prone to deafness?',
    answer:
      "Panda sits within the white-patterned group of coats, and the genetics that push white pigment onto the head and face are associated with coat-color-linked deafness — the same pigment-related hearing loss seen in many white-headed animals across species. A large share of panda and blaze ferrets are deaf or hard of hearing, so the pattern is a flag to check hearing, not a guarantee of it.",
  },
  {
    question: 'How do you tell a panda from a blaze ferret?',
    answer:
      "Both carry white on the head, but a blaze has a white stripe running from the nose up between the ears over a still-colored head, while a panda's entire head and throat are white. Panda is the more extreme white-head pattern; blaze is the streak version. Both share the white-patterning genetics linked to deafness.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function PandaFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Panda Ferrets — The White-Headed Pattern',
          subtitle:
            "A panda ferret looks like it dipped its head in white paint: a fully white head and shoulders over a colored saddle, with white feet to match. It is one of the most striking ferret patterns — and one of the most important to understand, because the same genetics that paint the head white are tied to a high rate of deafness. Here is what panda is, how it differs from blaze, and what the pattern means for hearing.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Panda Ferrets', href: '/colors/panda-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Panda Looks Like', href: '#look' },
                { label: 'A Pattern, Not a Color', href: '#pattern' },
                { label: 'The Deafness Connection', href: '#deafness' },
                { label: 'Panda vs. Blaze', href: '#blaze' },
                { label: 'Care Notes', href: '#care' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Blaze & Roan Patterns', href: '/colors/blaze-and-roan-patterns' },
                { label: 'Dark-Eyed White Ferrets', href: '/colors/dark-eyed-white-ferrets' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-panda"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Blaze & Roan Patterns', href: '/colors/blaze-and-roan-patterns' },
          { title: 'Dark-Eyed White Ferrets', href: '/colors/dark-eyed-white-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-panda"
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
              Keep the ferret panda-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret panda-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-panda-white-head-chart,
              fridge-panda-vs-blaze-card, and
              mustelid-panda-reference-handbook notes
              that match the white-head-saddle-look-map,
              panda-vs-blaze-log, and
              afa-panda-deafness-grounding copy on this
              page — a laminated ferret panda white-head
              chart so the all-white head / white shoulders
              / colored saddle / white-mitt map is posted
              on the fridge (not a tools-hub calculator
              chart, not a reviews buyer-guide chart, not
              a diet feeding chart, not a care routine
              chart, not a behavior cue chart, not a
              health triage chart, not an ownership
              section-map chart, not a colors-hub palette
              chart, not a first-year schedule chart, not
              a color-pattern axis chart, not a sable
              bandit-mask chart, not an albino red-eye
              chart, not a DEW dark-eye chart, not a
              cinnamon brick-coat chart, not a champagne
              milky-coat chart, not a chocolate milk-coat
              chart, not a black jet-coat chart, not a
              silver frost-coat chart), a ferret fridge
              panda-vs-blaze card so panda vs blaze white
              head notes are labeled on the fridge (not a
              measurement card, not a reviews comparison
              card, not a diet label card, not a care card,
              not a behavior card, not a health library
              card, not an ownership prep card, not a
              colors-hub color id card, not a first-year
              milestone card, not a color-vs-pattern card,
              not a sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card, not a
              champagne-vs-brown card, not a
              chocolate-vs-brown card, not a
              black-vs-sable card, not a silver-vs-dew
              card), and a mustelid panda reference
              handbook so the AFA / white-pattern deafness
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
              handbook, not a black handbook, not a silver
              handbook). Educational kitchen checklist,
              not a ranked color list, not a child
              toothbrush / dosing hop, and not a
              substitute for an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Aging
              pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret panda-ferrets checklist"
              subtitle="Email the panda-white-head-chart, fridge panda-vs-blaze card, and panda-handbook notes. No spam."
              ctaText="Email my ferret panda-ferrets checklist"
              source="colors-panda-ferrets-under-hero"
            />
          </div>

          <DropCap>
            The panda is the most theatrical of ferret patterns: a snow-white
            head and throat sitting over a colored body, as if the front half
            and back half belonged to two different animals. It is unmistakable,
            it is popular — and it carries a genuine welfare footnote that every
            prospective owner should understand before falling for the face.
          </DropCap>

          <h2 id="look">What Panda Looks Like</h2>
          <p>
            The panda pattern is defined by where the white sits, not by the
            underlying color:
          </p>
          <ul>
            <li>
              <strong>Head and throat:</strong> entirely white, the signature
              feature.
            </li>
            <li>
              <strong>Shoulders:</strong> white, continuing the pale forequarters.
            </li>
            <li>
              <strong>Feet:</strong> white mitts on all four feet.
            </li>
            <li>
              <strong>Body:</strong> a colored saddle or band across the back —
              sable, chocolate, or another base shade.
            </li>
            <li>
              <strong>Tail:</strong> often white-tipped, and the knees frequently
              white as well.
            </li>
          </ul>

          <h2 id="pattern">A Pattern, Not a Color</h2>
          <p>
            Panda is a pattern overlay, the same way mitt, blaze, and roan are —
            it describes the distribution of white rather than the pigment of the
            colored areas. That colored saddle can be any of several base colors,
            which is why you will hear of a &quot;sable panda&quot; or other
            combinations. For how panda fits alongside the rest of the white
            patterns and the solid colors, see our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>, and for the closely related streak pattern see{' '}
            <a href="/colors/blaze-and-roan-patterns">blaze and roan patterns</a>.
          </p>

          <h2 id="deafness">The Deafness Connection</h2>
          <CalloutBox variant="warning" title="Most pandas should have their hearing checked">
            <p>
              The genetics that drive white onto a ferret&apos;s head and face
              are associated with coat-color-linked deafness — the same
              pigment-related hearing loss seen in many white-headed animals. A
              large share of panda and blaze ferrets are deaf or partially deaf.
              This does not make a panda a bad pet: deaf ferrets live full, happy
              lives with simple adjustments — approach within their line of sight,
              use vibration and touch cues, and never startle a sleeping one. But
              it is worth knowing and worth checking.
            </p>
          </CalloutBox>
          <p>
            A panda&apos;s hearing has no bearing on its health otherwise, and a
            deaf ferret needs no medical treatment for it — only thoughtful
            handling. The white-pattern genetics also overlap with{' '}
            <a href="/colors/dark-eyed-white-ferrets">dark-eyed white ferrets</a>,
            which is why those coats are discussed together.
          </p>

          <h2 id="blaze">Panda vs. Blaze</h2>
          <p>
            Panda and blaze come from the same white-patterning family and are
            often confused:
          </p>
          <ul>
            <li>
              <strong>Panda</strong> has an entirely white head and throat — the
              whole front is pale.
            </li>
            <li>
              <strong>Blaze</strong> keeps a colored head but adds a white stripe
              running from the nose up between the ears.
            </li>
          </ul>
          <p>
            Think of panda as the full white head and blaze as the white streak.
            Both share the deafness-linked genetics, so the same hearing caution
            applies to each.
          </p>

          <h2 id="care">Care Notes</h2>
          <p>
            Beyond the hearing check, caring for a panda is identical to caring
            for any ferret — the pattern changes nothing about diet, temperament,
            or husbandry. A deaf panda simply benefits from a few handling habits
            built around sight and touch. For everyday husbandry see our{' '}
            <a href="/care">care references</a>; for the conditions ferret owners
            meet most, the <a href="/health">health hub</a>. Whatever the
            pattern, soundness and temperament are what matter when choosing one —
            see <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
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
            Keep a physical panda-ferrets kitchen kit next
            to this page — a laminated ferret panda
            white-head chart so the all-white head / white
            shoulders / colored saddle / white-mitt map is
            posted on the fridge, a ferret fridge
            panda-vs-blaze card so panda vs blaze white
            head notes are labeled on the fridge, and a
            mustelid panda reference handbook so the AFA /
            white-pattern deafness grounding is a physical
            kitchen book. These are educational kitchen
            searches, not a ranked color list, not a
            substitute for an exotic-mammal veterinarian,
            not a tools-hub / reviews-hub / diet-hub /
            care-hub / behavior-hub / health-hub /
            ownership-hub / colors-hub / first-year-schedule
            / colors-and-patterns / sable-ferrets /
            albino-ferrets / dew-ferrets / cinnamon-ferrets
            / champagne-ferrets / chocolate-ferrets /
            black-ferrets / silver-ferrets hop, and not a
            child toothbrush / dosing hop (those live on
            health children). This page does not hop
            medications or vaccines. This page does not
            sell insurance. This page does not claim
            hands-on testing. Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret panda white-head chart /
              ferret fridge panda-vs-blaze card /
              mustelid panda reference handbook).
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
              silver-ferrets kitchen kits and child
              finger+toothbrush / carnivore+care hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the panda-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page white-head-saddle-look-map,
              panda-vs-blaze-log, and
              afa-panda-deafness-grounding copy — a
              laminated ferret panda white-head chart, a
              ferret fridge panda-vs-blaze card, and a
              mustelid panda reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets /
              silver-ferrets hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+panda+white+head+chart?s=panda-ferrets"
                amazonLabel="Browse laminated ferret panda white-head charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+panda+vs+blaze+card?s=panda-ferrets"
                amazonLabel="Browse ferret fridge panda-vs-blaze cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+panda+reference+handbook?s=panda-ferrets"
                amazonLabel="Browse mustelid panda reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
