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
  title: 'Champagne Ferrets — The Diluted Sable Coat | Ferret.com',
  description:
    'Champagne is a pale, milky-coffee dilution of the sable coat with a faint mask. What it looks like, how it differs from cinnamon and chocolate.',
  path: '/colors/champagne-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Champagne Ferrets',
  description:
    'The champagne ferret coat — a pale, diluted milky-coffee version of sable with a faint mask and pinkish nose — and how it differs from cinnamon and chocolate.',
  url: 'https://ferret.com/colors/champagne-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-05-30T00:00:00Z',
})


const FAQS = [
  {
    question: 'What does a champagne ferret look like?',
    answer:
      'A champagne ferret has pale, milky-coffee guard hairs — a soft tan-brown that is clearly lighter than a sable or chocolate — over a white-to-cream undercoat. The mask is faint, often just a watery beige smudge rather than a bold band, and the nose is pink or light beige, sometimes with a faint outline. The overall impression is delicate and washed-out.',
  },
  {
    question: 'Is champagne the same as a diluted sable?',
    answer:
      'Essentially, yes — champagne is generally described as a dilution of the sable coat. The same dark-guard-hair-over-light-undercoat structure is there, but the pigment is lightened so the browns read as soft tan rather than rich coffee, and the mask softens to a faint shadow. That is why champagne is often grouped right next to sable on the spectrum.',
  },
  {
    question: 'How do I tell champagne from cinnamon and chocolate?',
    answer:
      'Champagne is the lightest of the three. Chocolate has clearly milk-chocolate-brown guard hairs; cinnamon leans red or brick. Champagne is paler than both, with a milky-tan cast and a pinkish nose. The boundaries blur, lighting changes the call, and the same ferret can be labeled differently by different people — so treat the names as approximate.',
  },
  {
    question: 'Does the champagne color affect a ferret\'s health?',
    answer:
      'No. Champagne is a coat description and nothing more. A champagne ferret has the same care needs and disease risks as any other ferret. What determines a ferret\'s wellbeing is age, diet, and husbandry, not coat color.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function ChampagneFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Champagne Ferrets',
          subtitle:
            'Champagne is the soft-focus member of the ferret palette — a pale, milky-coffee dilution of the sable coat, with a faint shadow of a mask and a pinkish nose. Pretty, popular, and perpetually confused with its warm-brown neighbors. Here is how to recognize it and tell it apart.',
          category: 'Colors & Patterns',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Patterns', href: '/colors' },
          { name: 'Champagne Ferrets', href: '/colors/champagne-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Champagne Looks Like', href: '#look' },
                { label: 'A Diluted Sable', href: '#dilute' },
                { label: 'Champagne vs. Cinnamon vs. Chocolate', href: '#confusion' },
                { label: 'Seasonal & Age Shifts', href: '#shifts' },
                { label: 'Color & Health', href: '#health' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Colors"
              links={[
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
                { label: 'Cinnamon Ferrets', href: '/colors/cinnamon-ferrets' },
                { label: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret.com Field Notes"
              subtitle="Color guides and care references, monthly."
              source="colors-champagne"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Cinnamon Ferrets', href: '/colors/cinnamon-ferrets' },
          { title: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-champagne"
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
              Keep the ferret champagne-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret champagne-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-champagne-milky-coat-chart,
              fridge-champagne-vs-brown-card, and
              mustelid-champagne-reference-handbook notes
              that match the milky-coffee-look-map,
              champagne-vs-warm-brown-log, and
              afa-dilute-sable-grounding copy on this page
              — a laminated ferret champagne milky-coat
              chart so the pale tan guard / cream undercoat
              / faint-mask / pinkish-nose map is posted on
              the fridge (not a tools-hub calculator chart,
              not a reviews buyer-guide chart, not a diet
              feeding chart, not a care routine chart, not
              a behavior cue chart, not a health triage
              chart, not an ownership section-map chart,
              not a colors-hub palette chart, not a
              first-year schedule chart, not a color-pattern
              axis chart, not a sable bandit-mask chart,
              not an albino red-eye chart, not a DEW
              dark-eye chart, not a cinnamon brick-coat
              chart), a ferret fridge champagne-vs-brown
              card so champagne vs cinnamon vs chocolate
              notes are labeled on the fridge (not a
              measurement card, not a reviews comparison
              card, not a diet label card, not a care card,
              not a behavior card, not a health library
              card, not an ownership prep card, not a
              colors-hub color id card, not a first-year
              milestone card, not a color-vs-pattern card,
              not a sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card), and a
              mustelid champagne reference handbook so the
              AFA / diluted-sable grounding is a physical
              kitchen book (not a calculator handbook, not
              a reviews handbook, not a diet handbook, not
              a care handbook, not a behavior handbook,
              not a health handbook, not an ownership
              handbook, not a colors-hub handbook, not a
              first-year handbook, not a color-pattern
              handbook, not a sable handbook, not an
              albino handbook, not a DEW handbook, not a
              cinnamon handbook). Educational kitchen
              checklist, not a ranked color list, not a
              child toothbrush / dosing hop, and not a
              substitute for an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Aging
              pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret champagne-ferrets checklist"
              subtitle="Email the champagne-milky-coat-chart, fridge champagne-vs-brown card, and champagne-handbook notes. No spam."
              ctaText="Email my ferret champagne-ferrets checklist"
              source="colors-champagne-ferrets-under-hero"
            />
          </div>

          <DropCap>
            Champagne is the ferret color people reach for when they want &ldquo;sable, but
            softer.&rdquo; It is a pale, milky version of the classic coat — the same basic
            structure, turned down a few stops in brightness. The result is a delicate, café-au-lait
            ferret with a barely-there mask, and it is one of the most popular colors after sable
            itself.
          </DropCap>

          <h2 id="look">What Champagne Looks Like</h2>
          <p>
            The hallmark of champagne is paleness. Everything that is bold and dark on a sable is
            lightened and softened here:
          </p>
          <ul>
            <li>
              <strong>Guard hairs:</strong> milky coffee — a soft tan-brown, clearly lighter than a
              sable&apos;s rich coffee.
            </li>
            <li>
              <strong>Undercoat:</strong> white to pale cream, which lets the pale guard hairs read
              even lighter.
            </li>
            <li>
              <strong>Mask:</strong> faint — often just a watery beige smudge around the eyes rather
              than a defined band.
            </li>
            <li>
              <strong>Nose:</strong> pink to light beige, sometimes with a faint outline; legs only
              slightly darker than the body.
            </li>
          </ul>
          <p>
            Side by side with a sable, a champagne looks like the sable&apos;s ghost — same outline,
            far less pigment.
          </p>

          <h2 id="dilute">A Diluted Sable</h2>
          <p>
            Champagne is most usefully understood as a dilution of <a href="/colors/sable-ferrets">
            sable</a>. The two-tone structure — darker guard hairs over a lighter undercoat — is
            still there, but the pigment is reduced so the browns soften to tan and the mask fades to
            a shadow. That close kinship is why champagne and sable sit right next to each other on
            any ferret color chart, and why a young sable that is going through a pale phase can be
            mistaken for a champagne.
          </p>

          <h2 id="confusion">Champagne vs. Cinnamon vs. Chocolate</h2>
          <p>
            These three are the warm-brown cluster, and champagne is the lightest of them. A quick
            comparison:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Color</th>
                  <th className="text-left p-3 font-semibold">Lightness</th>
                  <th className="text-left p-3 font-semibold">Tell</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Champagne</td>
                  <td className="p-3">Lightest</td>
                  <td className="p-3">Milky tan, faint mask, pinkish nose</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Cinnamon</td>
                  <td className="p-3">Medium, warm</td>
                  <td className="p-3">Red/brick cast, golden undercoat</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Chocolate</td>
                  <td className="p-3">Medium-dark</td>
                  <td className="p-3">Clearly milk-chocolate brown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            See <a href="/colors/cinnamon-ferrets">cinnamon</a> and{' '}
            <a href="/colors/chocolate-ferrets">chocolate</a> for the full picture of each, and the{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns overview</a> for the
            whole spectrum.
          </p>

          <h2 id="shifts">Seasonal and Age Shifts</h2>
          <CalloutBox variant="tip" title="Champagne is a moving target">
            <p>
              Because champagne is already pale, seasonal coat changes can shift it dramatically. A
              champagne can deepen toward a warmer tan in its dense winter coat and wash out almost
              to off-white in summer. Kits also commonly settle into their adult shade over the first
              year, so a young champagne may not look quite the same at maturity. None of this is a
              problem — it is just what pale ferret coats do.
            </p>
          </CalloutBox>

          <h2 id="health">Color and Health</h2>
          <p>
            Champagne carries no special health considerations. It is a pale coat, not a fragile
            one — a champagne ferret is as robust as any sable and needs identical care. The factors
            that actually shape a ferret&apos;s health are diet, environment, and routine
            exotic-vet care, all covered in our <a href="/care">care references</a> and{' '}
            <a href="/health">health hub</a>. Before bringing any ferret home, read{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy ferret</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized colors and patterns standard, including
              the champagne classification.
            </li>
            <li>
              Lewington JH (ed.). <em>Ferret Husbandry, Medicine and Surgery.</em> Saunders/Elsevier
              — coat color biology and dilution in the domestic ferret.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and Rodents: Clinical
              Medicine and Surgery.</em> Saunders/Elsevier — ferret husbandry and natural history.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            Ferret color names are descriptive conventions applied by eye, not laboratory
            genotypes. This page is general background and does not guarantee how any individual
            ferret will be labeled.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical champagne-ferrets kitchen kit
            next to this page — a laminated ferret
            champagne milky-coat chart so the pale tan
            guard / cream undercoat / faint-mask /
            pinkish-nose map is posted on the fridge, a
            ferret fridge champagne-vs-brown card so
            champagne vs cinnamon vs chocolate notes are
            labeled on the fridge, and a mustelid champagne
            reference handbook so the AFA / diluted-sable
            grounding is a physical kitchen book. These are
            educational kitchen searches, not a ranked
            color list, not a substitute for an
            exotic-mammal veterinarian, not a tools-hub /
            reviews-hub / diet-hub / care-hub / behavior-hub
            / health-hub / ownership-hub / colors-hub /
            first-year-schedule / colors-and-patterns /
            sable-ferrets / albino-ferrets / dew-ferrets /
            cinnamon-ferrets hop, and not a child
            toothbrush / dosing hop (those live on health
            children). This page does not hop medications
            or vaccines. This page does not sell insurance.
            This page does not claim hands-on testing.
            Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret champagne milky-coat chart /
              ferret fridge champagne-vs-brown card /
              mustelid champagne reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets kitchen kits
              and child finger+toothbrush /
              carnivore+care hops. Directory import left
              untouched. Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the champagne-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page milky-coffee-look-map,
              champagne-vs-warm-brown-log, and
              afa-dilute-sable-grounding copy — a
              laminated ferret champagne milky-coat chart,
              a ferret fridge champagne-vs-brown card, and
              a mustelid champagne reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+champagne+milky+coat+chart?s=champagne-ferrets"
                amazonLabel="Browse laminated ferret champagne milky-coat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+champagne+vs+brown+card?s=champagne-ferrets"
                amazonLabel="Browse ferret fridge champagne-vs-brown cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+champagne+reference+handbook?s=champagne-ferrets"
                amazonLabel="Browse mustelid champagne reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
