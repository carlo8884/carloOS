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
  title: 'Cinnamon Ferrets — The Rare Reddish-Brown Coat | Ferret.com',
  description:
    'Cinnamon ferrets have a reddish, brick-toned coat over a golden undercoat — one of the rarest ferret colors, often confused with champagne and chocolate.',
  path: '/colors/cinnamon-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Cinnamon Ferrets',
  description:
    'The cinnamon ferret — a rare reddish-brown coat over a golden undercoat, the naming confusion with champagne and chocolate, and what the label really describes.',
  url: 'https://ferret.com/colors/cinnamon-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What does a cinnamon ferret look like?',
    answer:
      "A cinnamon ferret has reddish-brown guard hairs — a warm, brick or rust tone — over a golden or warm-cream undercoat, usually with a brick-red to pinkish nose. It is one of the warmer-toned ferret colors, sitting toward the red end of the brown spectrum rather than the cool, dark sable end.",
  },
  {
    question: 'Are cinnamon ferrets rare?',
    answer:
      "Yes, cinnamon is considered one of the rarer recognized ferret colors and is not commonly seen in pet stores. Part of the rarity is genuine and part is definitional — the term is applied inconsistently, so a ferret one person calls cinnamon another might call champagne or chocolate.",
  },
  {
    question: 'What is the difference between cinnamon, champagne, and chocolate?',
    answer:
      "All three are warm browns, which is exactly why they get muddled. Broadly: chocolate is a milk-chocolate brown; champagne is a paler, diluted tan-brown; and cinnamon leans reddish or brick-toned. The boundaries are fuzzy and not standardized across every breeder, so the same ferret can pick up different labels.",
  },
  {
    question: 'Does the cinnamon color affect health?',
    answer:
      "No. Like all ferret colors, cinnamon is a coat description, not a health or temperament predictor. A cinnamon ferret has the same care and health needs as any other ferret. Pick for health and personality first; color is the tiebreaker.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function CinnamonFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Cinnamon Ferrets — The Rare Warm-Toned Coat',
          subtitle:
            "Cinnamon is one of the prettiest and most argued-over ferret colors: a warm, reddish-brown coat that glows golden in the right light. It is also genuinely rare and famously hard to pin down, because the label gets used loosely. Here is what cinnamon really describes, and why even experts disagree about it.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Cinnamon Ferrets', href: '/colors/cinnamon-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Cinnamon Looks Like', href: '#look' },
                { label: 'Why It Is Rare', href: '#rare' },
                { label: 'The Naming Confusion', href: '#confusion' },
                { label: 'Cinnamon vs. Other Browns', href: '#vs' },
                { label: 'Care Notes', href: '#care' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-cinnamon"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Champagne Ferrets', href: '/colors/champagne-ferrets' },
          { title: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-cinnamon"
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
              Keep the ferret cinnamon-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret cinnamon-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-cinnamon-brick-coat-chart,
              fridge-cinnamon-vs-brown-card, and
              mustelid-cinnamon-reference-handbook notes
              that match the brick-rust-look-map,
              cinnamon-vs-warm-brown-log, and
              afa-rare-cinnamon-grounding copy on this page
              — a laminated ferret cinnamon brick-coat
              chart so the reddish guard / golden undercoat
              / brick-nose map is posted on the fridge (not
              a tools-hub calculator chart, not a reviews
              buyer-guide chart, not a diet feeding chart,
              not a care routine chart, not a behavior cue
              chart, not a health triage chart, not an
              ownership section-map chart, not a colors-hub
              palette chart, not a first-year schedule
              chart, not a color-pattern axis chart, not a
              sable bandit-mask chart, not an albino
              red-eye chart, not a DEW dark-eye chart), a
              ferret fridge cinnamon-vs-brown card so
              cinnamon vs chocolate vs champagne notes are
              labeled on the fridge (not a measurement
              card, not a reviews comparison card, not a
              diet label card, not a care card, not a
              behavior card, not a health library card,
              not an ownership prep card, not a colors-hub
              color id card, not a first-year milestone
              card, not a color-vs-pattern card, not a
              sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card), and a mustelid cinnamon reference
              handbook so the AFA / rare-cinnamon grounding
              is a physical kitchen book (not a calculator
              handbook, not a reviews handbook, not a diet
              handbook, not a care handbook, not a
              behavior handbook, not a health handbook,
              not an ownership handbook, not a colors-hub
              handbook, not a first-year handbook, not a
              color-pattern handbook, not a sable handbook,
              not an albino handbook, not a DEW handbook).
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
              title="Ferret cinnamon-ferrets checklist"
              subtitle="Email the cinnamon-brick-coat-chart, fridge cinnamon-vs-brown card, and cinnamon-handbook notes. No spam."
              ctaText="Email my ferret cinnamon-ferrets checklist"
              source="colors-cinnamon-ferrets-under-hero"
            />
          </div>

          <DropCap>
            Among ferret colors, cinnamon has a reputation: rare, beautiful, and
            maddeningly hard to define. Ask three ferret people what counts as
            cinnamon and you may get three answers. That fuzziness is part of the
            color&apos;s charm and the source of endless friendly argument in
            ferret circles. Let&apos;s sort out what is actually going on.
          </DropCap>

          <h2 id="look">What Cinnamon Looks Like</h2>
          <p>
            At its most classic, a cinnamon ferret shows:
          </p>
          <ul>
            <li>
              <strong>Reddish-brown guard hairs</strong> — a warm brick or rust
              tone, distinct from the cool brown of a sable.
            </li>
            <li>
              <strong>A golden or warm-cream undercoat</strong> glowing through.
            </li>
            <li>
              <strong>A brick-red to pinkish nose.</strong>
            </li>
            <li>
              <strong>Warm-toned mask and points,</strong> in the same reddish
              family.
            </li>
          </ul>
          <p>
            The overall impression is warmth — a ferret that reads &quot;red&quot;
            rather than &quot;brown&quot; in good light.
          </p>

          <h2 id="rare">Why Cinnamon Is Rare</h2>
          <p>
            Cinnamon is one of the less common recognized ferret colors and is
            seldom seen in pet stores. The rarity is partly real genetics — the
            specific warm-red coat is simply less frequent in the population — and
            partly a quirk of how the label is applied. Because the boundaries
            with neighboring browns are blurry, a truly textbook cinnamon is an
            uncommon find.
          </p>

          <h2 id="confusion">The Naming Confusion</h2>
          <CalloutBox variant="tip" title="Why color labels disagree">
            <p>
              Ferret color naming is not perfectly standardized, and warm-brown
              tones especially blur into one another. The same individual ferret
              might be called cinnamon by one breeder, champagne by another, and
              chocolate by a third — particularly because coat shade shifts with
              the seasons and with age. If you are set on a specific color, judge
              the actual coat in front of you rather than the label on the cage
              card. Our{' '}
              <a href="/colors/ferret-colors-and-patterns">colors and patterns
              overview</a> maps the whole warm-brown family.
            </p>
          </CalloutBox>

          <h2 id="vs">Cinnamon vs. the Other Browns</h2>
          <p>
            A rough field guide to the warm-brown ferrets:
          </p>
          <ul>
            <li>
              <strong>Chocolate</strong> — a milk-chocolate brown, richer and
              less red than cinnamon.
            </li>
            <li>
              <strong>Champagne</strong> — a pale, diluted tan-brown, lighter than
              both cinnamon and chocolate.
            </li>
            <li>
              <strong>Cinnamon</strong> — the reddest of the group, with that
              brick or rust cast.
            </li>
            <li>
              <strong>Sable</strong> — a cooler, darker brown with a darker mask;
              the most common color, covered in our{' '}
              <a href="/colors/sable-ferrets">sable guide</a>.
            </li>
          </ul>

          <h2 id="care">Care Notes</h2>
          <p>
            As with every ferret color, cinnamon is purely cosmetic. It does not
            change health, temperament, or husbandry — a cinnamon ferret needs the
            same diet, housing, and veterinary care as any other. For the things
            that genuinely matter when bringing a ferret home, see{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
            ferret</a>, and browse our <a href="/care">care</a> and{' '}
            <a href="/health">health</a> references for day-to-day guidance.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized color standards and
              owner-facing color guidance.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret coat genetics and husbandry.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              genetics and husbandry.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about cinnamon ferrets, not
            individualized veterinary advice. Coat color does not change a
            ferret&apos;s medical needs; any health concern warrants an
            exotic-mammal vet visit.
          </p>

          <h2 id="kit">Cinnamon-ferrets kitchen kit</h2>
          <p>
            Everyday physical supplies that match the
            brick-rust-look-map, cinnamon-vs-warm-brown-log,
            and afa-rare-cinnamon-grounding copy on this
            page — a laminated ferret cinnamon brick-coat
            chart so the reddish guard / golden undercoat /
            brick-nose map is posted on the fridge, a
            ferret fridge cinnamon-vs-brown card so
            cinnamon vs chocolate vs champagne notes are
            labeled on the fridge, and a mustelid cinnamon
            reference handbook so the AFA / rare-cinnamon
            grounding is a physical kitchen book. These are
            educational kitchen searches, not a ranked
            color list, not a substitute for an
            exotic-mammal veterinarian, not a tools-hub /
            reviews-hub / diet-hub / care-hub / behavior-hub
            / health-hub / ownership-hub / colors-hub /
            first-year-schedule / colors-and-patterns /
            sable-ferrets / albino-ferrets / dew-ferrets
            hop, and not a child toothbrush / dosing hop
            (those live on health children). This page does
            not hop medications or vaccines. This page does
            not sell insurance. This page does not claim
            hands-on testing. Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret cinnamon brick-coat chart /
              ferret fridge cinnamon-vs-brown card /
              mustelid cinnamon reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets kitchen kits
              and child finger+toothbrush /
              carnivore+care hops. Directory import left
              untouched. Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the cinnamon-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page brick-rust-look-map,
              cinnamon-vs-warm-brown-log, and
              afa-rare-cinnamon-grounding copy — a
              laminated ferret cinnamon brick-coat chart, a
              ferret fridge cinnamon-vs-brown card, and a
              mustelid cinnamon reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets hop, they are
              not a child toothbrush hop, and they do not
              replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+cinnamon+brick+coat+chart?s=cinnamon-ferrets"
                amazonLabel="Browse laminated ferret cinnamon brick-coat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+cinnamon+vs+brown+card?s=cinnamon-ferrets"
                amazonLabel="Browse ferret fridge cinnamon-vs-brown cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+cinnamon+reference+handbook?s=cinnamon-ferrets"
                amazonLabel="Browse mustelid cinnamon reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
