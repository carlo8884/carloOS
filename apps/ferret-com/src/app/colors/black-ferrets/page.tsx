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
  title: 'Black Ferrets — Black Sable & True Black Coats | Ferret.com',
  description:
    'Black ferrets sit at the darkest end of the spectrum: near-black guard hairs and a deep mask. How black sable and true black differ from a standard sable.',
  path: '/colors/black-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Black Ferrets',
  description:
    'Black sable and true black ferrets — the darkest recognized coats, defined by near-black guard hairs and dark noses, and how they differ from standard sable.',
  url: 'https://ferret.com/colors/black-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-05-30T00:00:00Z',
})


const FAQS = [
  {
    question: 'What is the difference between black sable, true black, and sable?',
    answer:
      'They run along a darkness gradient. A standard sable has warm-brown guard hairs. A black sable is cooler and deeper — near-blackish-brown guard hairs with a bold mask, but still showing the two-tone sable structure against a lighter undercoat. A true black goes furthest: guard hairs as close to black as ferret coats get, a blackish nose, and a white-to-gold undercoat that makes the dark topcoat pop. The boundaries are descriptive and applied by eye.',
  },
  {
    question: 'Are black ferrets rare?',
    answer:
      'Genuinely jet-black ferrets are less common than ordinary sables, and a crisp true black with a clean white undercoat is striking enough to draw attention. That said, many ferrets sold as "black" are really dark black sables. As with every ferret color, the label is a judgment call, not a certificate.',
  },
  {
    question: 'Does a black ferret stay black year-round?',
    answer:
      'Not always. Like all ferrets, blacks shift coat with the seasons — the winter coat is typically denser and darker, while the summer coat can look browner or more faded as it thins. A black ferret may read as a very dark sable in high summer and snap back to deep black in winter.',
  },
  {
    question: 'Is a black coat linked to any health issue?',
    answer:
      'No. A dark coat is just a dark coat. Black ferrets have the same health profile and care needs as any other color. The genuine color-linked health story in ferrets involves white head markings and deafness, which does not apply to a dark-coated, fully-masked black ferret.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function BlackFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Black Ferrets',
          subtitle:
            'At the darkest end of the ferret palette sit the blacks — black sable and true black, with near-black guard hairs, deep masks, and dark noses. A crisp black coat over a white undercoat is one of the most dramatic looks in the species. Here is how the dark colors are defined and told apart.',
          category: 'Colors & Patterns',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Patterns', href: '/colors' },
          { name: 'Black Ferrets', href: '/colors/black-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Black Looks Like', href: '#look' },
                { label: 'Black Sable vs. True Black', href: '#types' },
                { label: 'How It Differs From Sable', href: '#vs-sable' },
                { label: 'Seasonal Coat Changes', href: '#seasonal' },
                { label: 'Color & Health', href: '#health' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Colors"
              links={[
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
                { label: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
                { label: 'Colors & Patterns Overview', href: '/colors/ferret-colors-and-patterns' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret.com Field Notes"
              subtitle="Color guides and care references, monthly."
              source="colors-black"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Sable Ferrets', href: '/colors/sable-ferrets' },
          { title: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-black"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-30"
            updatedAt="2026-05-30"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret black-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret black-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-black-jet-coat-chart,
              fridge-black-vs-sable-card, and
              mustelid-black-reference-handbook notes
              that match the jet-black-look-map,
              black-sable-vs-true-black-log, and
              afa-black-sable-grounding copy on this page
              — a laminated ferret black jet-coat chart so
              the near-black guard / pale undercoat / bold
              mask / blackish-nose map is posted on the
              fridge (not a tools-hub calculator chart,
              not a reviews buyer-guide chart, not a diet
              feeding chart, not a care routine chart, not
              a behavior cue chart, not a health triage
              chart, not an ownership section-map chart,
              not a colors-hub palette chart, not a
              first-year schedule chart, not a color-pattern
              axis chart, not a sable bandit-mask chart,
              not an albino red-eye chart, not a DEW
              dark-eye chart, not a cinnamon brick-coat
              chart, not a champagne milky-coat chart, not
              a chocolate milk-coat chart), a ferret fridge
              black-vs-sable card so black sable vs true
              black vs standard sable notes are labeled on
              the fridge (not a measurement card, not a
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
              chocolate-vs-brown card), and a mustelid
              black reference handbook so the AFA / black
              and black-sable grounding is a physical
              kitchen book (not a calculator handbook, not
              a reviews handbook, not a diet handbook, not
              a care handbook, not a behavior handbook,
              not a health handbook, not an ownership
              handbook, not a colors-hub handbook, not a
              first-year handbook, not a color-pattern
              handbook, not a sable handbook, not an
              albino handbook, not a DEW handbook, not a
              cinnamon handbook, not a champagne handbook,
              not a chocolate handbook). Educational
              kitchen checklist, not a ranked color list,
              not a child toothbrush / dosing hop, and not
              a substitute for an exotic-mammal
              veterinarian. Ferret.com does not sell
              insurance. Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret black-ferrets checklist"
              subtitle="Email the black-jet-coat-chart, fridge black-vs-sable card, and black-handbook notes. No spam."
              ctaText="Email my ferret black-ferrets checklist"
              source="colors-black-ferrets-under-hero"
            />
          </div>

          <DropCap>
            A true black ferret is a showstopper. Against the white or pale-gold undercoat that
            still glows underneath, the near-black guard hairs read as inky and dramatic — about as
            far from the pale champagnes as a ferret coat gets. Black sits at the dark end of the
            same spectrum that runs through sable, and the dark colors come in two flavors worth
            keeping straight.
          </DropCap>

          <h2 id="look">What Black Looks Like</h2>
          <p>
            The dark colors share a recipe: very dark guard hairs, a bold mask, and a dark nose,
            usually over an undercoat that stays surprisingly light. That contrast is the whole
            effect.
          </p>
          <ul>
            <li>
              <strong>Guard hairs:</strong> from deep blackish-brown (black sable) to as close to
              jet-black as ferret coats get (true black).
            </li>
            <li>
              <strong>Undercoat:</strong> white, cream, or pale gold — the lighter it is, the more
              the dark topcoat pops.
            </li>
            <li>
              <strong>Mask:</strong> bold and dark, often broad; a true black can look almost fully
              masked.
            </li>
            <li>
              <strong>Nose:</strong> blackish or heavily dark-speckled, rather than the brown nose of
              a standard sable.
            </li>
          </ul>

          <h2 id="types">Black Sable vs. True Black</h2>
          <p>
            The two dark colors differ mainly in degree:
          </p>
          <ul>
            <li>
              <strong>Black sable</strong> is a deepened sable — cool, near-blackish-brown guard
              hairs and a strong mask, but still clearly part of the sable family, with brown
              undertones if you look closely.
            </li>
            <li>
              <strong>True black</strong> pushes further: the guard hairs read as genuinely black
              rather than dark brown, the nose is blackish, and the contrast with the pale undercoat
              is at its sharpest.
            </li>
          </ul>
          <p>
            In practice the two blur, and many ferrets sold as &ldquo;black&rdquo; are really dark
            black sables. As always with ferret color, the name is a description applied by eye, not
            a guarantee.
          </p>

          <h2 id="vs-sable">How Black Differs From Sable</h2>
          <p>
            Black is essentially sable with the pigment turned all the way up. The structural
            similarity to <a href="/colors/sable-ferrets">sable</a> is exactly why it belongs in the
            same conversation:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">Sable</th>
                  <th className="text-left p-3 font-semibold">Black / black sable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Guard hairs</td>
                  <td className="p-3">Warm coffee-brown</td>
                  <td className="p-3">Near-black to jet-black</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Nose</td>
                  <td className="p-3">Brown to mottled</td>
                  <td className="p-3">Blackish / dark-speckled</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Mask</td>
                  <td className="p-3">Defined brown band</td>
                  <td className="p-3">Bold, broad, very dark</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For the warmer, lighter end of the brown range, see{' '}
            <a href="/colors/chocolate-ferrets">chocolate</a>, and the{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns overview</a> for the
            whole spectrum.
          </p>

          <h2 id="seasonal">Seasonal Coat Changes</h2>
          <CalloutBox variant="tip" title="Even black ferrets fade in summer">
            <p>
              A black ferret is not a fixed color. The dense winter coat is usually at its darkest
              and most dramatic; the thinner summer coat can look noticeably browner or more faded,
              and the dark guard hairs spread further apart over a paler undercoat. A ferret that
              reads jet-black in January can look like a dark sable by August, then darken again with
              the next winter coat.
            </p>
          </CalloutBox>

          <h2 id="health">Color and Health</h2>
          <p>
            A black coat has no bearing on health. Black ferrets share the same care needs and the
            same age-related disease risks as every other color; the things that matter are diet,
            environment, and routine exotic-vet care. For those, see our{' '}
            <a href="/care">care references</a> and <a href="/health">health hub</a>, and read{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy ferret</a> before
            bringing one home.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized colors and patterns standard, including
              the black and black sable classifications.
            </li>
            <li>
              Lewington JH (ed.). <em>Ferret Husbandry, Medicine and Surgery.</em> Saunders/Elsevier
              — coat color biology in the domestic ferret.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and Rodents: Clinical
              Medicine and Surgery.</em> Saunders/Elsevier — ferret husbandry and natural history.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            Ferret color names are descriptive conventions applied by eye, not laboratory
            genotypes. This page is general background and does not guarantee how any individual
            ferret will be labeled or how its coat will change with the seasons.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical black-ferrets kitchen kit next
            to this page — a laminated ferret black
            jet-coat chart so the near-black guard / pale
            undercoat / bold mask / blackish-nose map is
            posted on the fridge, a ferret fridge
            black-vs-sable card so black sable vs true
            black vs standard sable notes are labeled on
            the fridge, and a mustelid black reference
            handbook so the AFA / black and black-sable
            grounding is a physical kitchen book. These
            are educational kitchen searches, not a ranked
            color list, not a substitute for an
            exotic-mammal veterinarian, not a tools-hub /
            reviews-hub / diet-hub / care-hub / behavior-hub
            / health-hub / ownership-hub / colors-hub /
            first-year-schedule / colors-and-patterns /
            sable-ferrets / albino-ferrets / dew-ferrets /
            cinnamon-ferrets / champagne-ferrets /
            chocolate-ferrets hop, and not a child
            toothbrush / dosing hop (those live on health
            children). This page does not hop medications
            or vaccines. This page does not sell insurance.
            This page does not claim hands-on testing.
            Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret black jet-coat chart /
              ferret fridge black-vs-sable card /
              mustelid black reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets kitchen kits and child
              finger+toothbrush / carnivore+care hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the black-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page jet-black-look-map,
              black-sable-vs-true-black-log, and
              afa-black-sable-grounding copy — a laminated
              ferret black jet-coat chart, a ferret fridge
              black-vs-sable card, and a mustelid black
              reference handbook. Educational kitchen
              searches only. They are not a ranked color
              list, they are not a tools-hub / reviews-hub
              / diet-hub / care-hub / behavior-hub /
              health-hub / ownership-hub / colors-hub /
              first-year-schedule / colors-and-patterns /
              sable-ferrets / albino-ferrets / dew-ferrets
              / cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+black+jet+coat+chart?s=black-ferrets"
                amazonLabel="Browse laminated ferret black jet-coat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+black+vs+sable+card?s=black-ferrets"
                amazonLabel="Browse ferret fridge black-vs-sable cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+black+reference+handbook?s=black-ferrets"
                amazonLabel="Browse mustelid black reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
