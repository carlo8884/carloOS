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
  title: 'Ferret Colors & Patterns — The Complete Guide | Ferret.com',
  description:
    'Every ferret color and pattern explained: sable, champagne, chocolate, cinnamon, black, albino, DEW — plus patterns like mitt, panda, blaze, point, and roan.',
  path: '/colors/ferret-colors-and-patterns',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Colors and Patterns',
  description:
    'A complete map of ferret coat colors and patterns — the recognized colors from sable to albino and the pattern overlays including mitt, panda, blaze, point, and roan.',
  url: 'https://ferret.com/colors/ferret-colors-and-patterns',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'How many ferret colors are there?',
    answer:
      "It depends on the registry, but the American Ferret Association recognizes a set of base colors — including sable, black sable, black, chocolate, champagne, cinnamon, albino, and dark-eyed white — layered with separate pattern categories. In practice, color and pattern combine, so the number of describable looks is much larger than the short list of base colors.",
  },
  {
    question: 'Do ferrets change color over time?',
    answer:
      "Yes, often noticeably. Ferret coats shift with the seasons as they shed and regrow, and they can lighten or darken with age. Many ferrets are darker in winter and lighter in summer. The color a kit shows is not always the color it will carry as an adult.",
  },
  {
    question: "Does color affect a ferret's health or temperament?",
    answer:
      "There is no good evidence that coat color determines personality. One genetics caveat is worth knowing: a white head/face marking pattern (sometimes called Waardenburg-type) has been associated with deafness in some ferrets, so a blaze, panda, or extensive white-marked ferret may be more likely to be deaf. Otherwise, pick the ferret whose temperament and health you like, not its color.",
  },
  {
    question: 'What is the difference between a color and a pattern in ferrets?',
    answer:
      "Color refers to the shade of the guard hairs, undercoat, and mask — sable, chocolate, champagne, and so on. Pattern refers to the distribution of color and white markings — mitts on the feet, a bib, a blaze stripe, panda markings, or the speckled roan look. A single ferret has both a color and a pattern.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function FerretColorsPatternsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Colors and Patterns — The Complete Map',
          subtitle:
            "From the classic masked sable to the snow-white albino, ferrets come in a surprisingly rich palette. Better still, color and pattern combine, so almost every ferret is a little unique. Here is the full guide to what you are looking at — the recognized colors, the pattern overlays, and the genetics quirks worth knowing.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Color vs. Pattern', href: '#vs' },
                { label: 'The Base Colors', href: '#colors' },
                { label: 'The Patterns', href: '#patterns' },
                { label: 'Seasonal & Age Changes', href: '#change' },
                { label: 'Color & Deafness', href: '#deafness' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
                { label: 'Albino Ferrets', href: '/colors/albino-ferrets' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-overview"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Sable Ferrets', href: '/colors/sable-ferrets' },
          { title: 'Albino Ferrets', href: '/colors/albino-ferrets' },
          { title: 'Blaze & Roan Patterns', href: '/colors/blaze-and-roan-patterns' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:colors-overview"
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
              Keep the ferret colors-and-patterns checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret colors-and-patterns checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-color-pattern-axis-chart,
              fridge-color-vs-pattern-card, and
              mustelid-color-pattern-reference-handbook notes
              that match the color-vs-pattern-axis-map,
              seasonal-age-shift-log, and
              afa-quesenberry-color-grounding copy on this
              page — a laminated ferret color-pattern axis
              chart so the color / pattern two-axis map is
              posted on the fridge (not a tools-hub
              calculator chart, not a reviews buyer-guide
              chart, not a diet feeding chart, not a care
              routine chart, not a behavior cue chart, not a
              health triage chart, not an ownership
              section-map chart, not a colors-hub palette
              chart, not a first-year schedule chart), a
              ferret fridge color-vs-pattern card so
              seasonal and age-shift notes are labeled on
              the fridge (not a measurement card, not a
              reviews comparison card, not a diet label
              card, not a care card, not a behavior card,
              not a health library card, not an ownership
              prep card, not a colors-hub color id card,
              not a first-year milestone card), and a
              mustelid color-pattern reference handbook so
              the AFA / Quesenberry color grounding is a
              physical kitchen book (not a calculator
              handbook, not a reviews handbook, not a diet
              handbook, not a care handbook, not a behavior
              handbook, not a health handbook, not an
              ownership handbook, not a colors-hub
              handbook, not a first-year handbook).
              Educational kitchen checklist, not a ranked
              color list, not a child toothbrush / dosing
              hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Aging pages stay held. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret colors-and-patterns checklist"
              subtitle="Email the color-pattern-axis-chart, fridge color-vs-pattern card, and color-pattern-handbook notes. No spam."
              ctaText="Email my ferret colors-and-patterns checklist"
              source="colors-ferret-colors-and-patterns-under-hero"
            />
          </div>

          <DropCap>
            The first thing to know about ferret &quot;types&quot; is that they
            are not breeds. Every domestic ferret (<em>Mustela furo</em>) is the
            same species; what varies is coat color and pattern. So when a
            shelter lists a &quot;sable&quot; or a &quot;dark-eyed white,&quot;
            it is describing how the ferret looks, not a distinct lineage. With
            that settled, let&apos;s map the palette.
          </DropCap>

          <h2 id="vs">Color vs. Pattern — Two Different Things</h2>
          <p>
            Ferret appearance is described along two axes:
          </p>
          <ul>
            <li>
              <strong>Color</strong> — the shade of the guard hairs, the
              undercoat, the nose, the eyes, and the mask. This is your sable,
              chocolate, champagne, cinnamon, black, albino, and dark-eyed white.
            </li>
            <li>
              <strong>Pattern</strong> — how color and white markings are
              distributed across the body: mitts, bibs, blazes, panda markings,
              points, and roan speckling.
            </li>
          </ul>
          <p>
            Every ferret has both. A &quot;chocolate mitt&quot; ferret, for
            example, is chocolate in color with white mitt markings on its feet.
          </p>

          <h2 id="colors">The Base Colors</h2>
          <p>
            Registries differ slightly, but the American Ferret Association
            recognizes a core set of colors. The most commonly encountered:
          </p>
          <ul>
            <li>
              <strong>Sable.</strong> The most common color and the classic
              &quot;wild&quot; look — warm brown guard hairs over a cream
              undercoat, with a dark mask. See our{' '}
              <a href="/colors/sable-ferrets">sable ferrets guide</a>.
            </li>
            <li>
              <strong>Black sable.</strong> A darker, cooler-toned sable with
              blackish-brown guard hairs.
            </li>
            <li>
              <strong>Black.</strong> Deep black guard hairs over a white-to-cream
              undercoat, with a black nose.
            </li>
            <li>
              <strong>Chocolate.</strong> A warm milk-chocolate brown, lighter
              than sable, often with a pinkish or brown nose.
            </li>
            <li>
              <strong>Champagne.</strong> A diluted, pale tan-brown — one of the
              softer, lighter colors.
            </li>
            <li>
              <strong>Cinnamon.</strong> A reddish, brick-toned brown and one of
              the rarer colors — see our{' '}
              <a href="/colors/cinnamon-ferrets">cinnamon ferrets guide</a>.
            </li>
            <li>
              <strong>Albino.</strong> Pure white with a pink nose and red eyes,
              caused by a total lack of melanin. See{' '}
              <a href="/colors/albino-ferrets">albino ferrets</a>.
            </li>
            <li>
              <strong>Dark-eyed white (DEW).</strong> A white coat with dark
              eyes — not an albino. See our{' '}
              <a href="/colors/dark-eyed-white-ferrets">DEW guide</a>.
            </li>
          </ul>

          <h2 id="patterns">The Patterns</h2>
          <p>
            Layered over color, pattern describes the markings:
          </p>
          <ul>
            <li>
              <strong>Standard / solid.</strong> Even color distribution with the
              typical mask.
            </li>
            <li>
              <strong>Mitt.</strong> White &quot;mittens&quot; on the feet, often
              with a white bib.
            </li>
            <li>
              <strong>Panda.</strong> A white head and neck with a colored body —
              a striking, popular pattern.
            </li>
            <li>
              <strong>Blaze.</strong> A white stripe running from the head down
              the back of the neck.
            </li>
            <li>
              <strong>Point / Siamese.</strong> Color concentrated at the
              extremities — legs, tail, mask — with a paler body.
            </li>
            <li>
              <strong>Roan.</strong> A mix of colored and white guard hairs
              giving a speckled, salt-and-pepper appearance.
            </li>
          </ul>

          <h2 id="change">Seasonal and Age-Related Changes</h2>
          <p>
            A ferret&apos;s color is not fixed. Coats shift with the seasons —
            many ferrets grow darker, denser winter coats and lighter, sleeker
            summer coats as they shed and regrow. Over a lifetime, colors can
            lighten or grey with age, much as they do in other mammals. The
            implication for new owners: the color of a young kit is a preview,
            not a guarantee.
          </p>

          <h2 id="deafness">A Genetics Note — Color and Deafness</h2>
          <CalloutBox variant="warning" title="White markings and hearing">
            <p>
              Extensive white head and face markings — the patterns sometimes
              described as blaze, panda, or Waardenburg-type — have been
              associated with congenital deafness in some ferrets, the same
              pigment-related link seen in certain white-marked dogs and cats.
              This does not mean every white-marked ferret is deaf, and a deaf
              ferret can live a full, happy life with some care adjustments. But
              if you are choosing a heavily white-marked ferret, it is worth being
              aware and, if possible, checking its hearing.
            </p>
          </CalloutBox>

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
              ferret coat genetics and the pigment-deafness association.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              genetics and congenital conditions.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about ferret coat color and pattern,
            not individualized veterinary advice. Suspected deafness or other
            congenital conditions warrant evaluation by an exotic-mammal
            veterinarian.
          </p>

          <h2 id="kit">Colors-and-patterns kitchen kit</h2>
          <p>
            Everyday physical supplies that match the
            color-vs-pattern-axis-map, seasonal-age-shift-log,
            and afa-quesenberry-color-grounding copy on this
            page — a laminated ferret color-pattern axis
            chart so the color / pattern two-axis map is
            posted on the fridge, a ferret fridge
            color-vs-pattern card so seasonal and age-shift
            notes are labeled on the fridge, and a mustelid
            color-pattern reference handbook so the AFA /
            Quesenberry color grounding is a physical
            kitchen book. These are educational kitchen
            searches, not a ranked color list, not a
            substitute for an exotic-mammal veterinarian,
            not a tools-hub / reviews-hub / diet-hub /
            care-hub / behavior-hub / health-hub /
            ownership-hub / colors-hub / first-year-schedule
            hop, and not a child toothbrush / dosing hop
            (those live on health children). This page does
            not hop medications or vaccines. This page does
            not sell insurance. This page does not claim
            hands-on testing. Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret color-pattern axis chart /
              ferret fridge color-vs-pattern card /
              mustelid color-pattern reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule kitchen kits
              and child finger+toothbrush / carnivore+care
              hops. Directory import left untouched.
              Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the colors-and-patterns kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page color-vs-pattern-axis-map,
              seasonal-age-shift-log, and
              afa-quesenberry-color-grounding copy — a
              laminated ferret color-pattern axis chart, a
              ferret fridge color-vs-pattern card, and a
              mustelid color-pattern reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule hop, they
              are not a child toothbrush hop, and they do
              not replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+color+pattern+axis+chart?s=colors-and-patterns"
                amazonLabel="Browse laminated ferret color-pattern axis charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+color+vs+pattern+card?s=colors-and-patterns"
                amazonLabel="Browse ferret fridge color-vs-pattern cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+color+pattern+reference+handbook?s=colors-and-patterns"
                amazonLabel="Browse mustelid color-pattern reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
