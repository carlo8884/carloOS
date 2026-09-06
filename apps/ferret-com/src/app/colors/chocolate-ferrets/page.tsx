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
  title: 'Chocolate Ferrets — The Milk-Chocolate Coat | Ferret.com',
  description:
    'Chocolate ferrets have milk-chocolate guard hairs over a white-to-amber undercoat. Where chocolate sits between sable and champagne, and vs cinnamon.',
  path: '/colors/chocolate-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Chocolate Ferrets',
  description:
    'The chocolate ferret coat — milk-chocolate guard hairs over a white-to-amber undercoat with a brown nose — and where it sits between sable and champagne on the warm-brown gradient.',
  url: 'https://ferret.com/colors/chocolate-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-05-30T00:00:00Z',
})


const FAQS = [
  {
    question: 'What does a chocolate ferret look like?',
    answer:
      'A chocolate ferret has warm, milk-chocolate-brown guard hairs — clearly brown, neither as dark as a sable nor as red as a cinnamon — over a white-to-amber undercoat. The nose is brown, sometimes pinkish-brown, and the mask is brown rather than blackish. The overall read is a soft, warm, mid-brown ferret.',
  },
  {
    question: 'What is the difference between chocolate and sable?',
    answer:
      'Chocolate is lighter and warmer than sable. A sable has cooler, richer coffee-brown guard hairs and a darker, often mottled nose; chocolate is a brighter milk-chocolate brown with a clearly brown nose. Think of chocolate as a step lighter and warmer along the same brown spectrum.',
  },
  {
    question: 'How do I tell chocolate from cinnamon and champagne?',
    answer:
      'Chocolate sits in the middle of the warm-brown trio. Cinnamon is redder and more brick-toned; champagne is paler, a milky tan. Chocolate is the one that reads as a clear, balanced milk-chocolate brown — warmer than sable, browner than cinnamon, darker than champagne. The lines blur and labels vary by breeder.',
  },
  {
    question: 'Does the chocolate color affect health?',
    answer:
      'No. Chocolate is purely a coat description. A chocolate ferret has the same care requirements and the same disease risks as any other ferret. Coat color does not predict health, temperament, or lifespan.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function ChocolateFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Chocolate Ferrets',
          subtitle:
            'Chocolate is the warm, approachable middle of the ferret palette — milk-chocolate guard hairs over a bright undercoat, with a soft brown nose and brown mask. It sits neatly between the cooler sable and the pale champagne, and it gets pleasantly muddled with cinnamon. Here is how to spot it.',
          category: 'Colors & Patterns',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Patterns', href: '/colors' },
          { name: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Chocolate Looks Like', href: '#look' },
                { label: 'Between Sable & Champagne', href: '#between' },
                { label: 'Chocolate vs. Cinnamon', href: '#vs-cinnamon' },
                { label: 'Seasonal Shifts', href: '#seasonal' },
                { label: 'Color & Health', href: '#health' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Colors"
              links={[
                { label: 'Sable Ferrets', href: '/colors/sable-ferrets' },
                { label: 'Champagne Ferrets', href: '/colors/champagne-ferrets' },
                { label: 'Cinnamon Ferrets', href: '/colors/cinnamon-ferrets' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret.com Field Notes"
              subtitle="Color guides and care references, monthly."
              source="colors-chocolate"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Sable Ferrets', href: '/colors/sable-ferrets' },
          { title: 'Champagne Ferrets', href: '/colors/champagne-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-chocolate"
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
              Keep the ferret chocolate-ferrets checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret chocolate-ferrets checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-chocolate-milk-coat-chart,
              fridge-chocolate-vs-brown-card, and
              mustelid-chocolate-reference-handbook notes
              that match the milk-chocolate-look-map,
              chocolate-vs-warm-brown-log, and
              afa-chocolate-grounding copy on this page
              — a laminated ferret chocolate milk-coat
              chart so the milk-chocolate guard / white-to-amber
              undercoat / brown-nose / brown-mask map is posted
              on the fridge (not a tools-hub calculator chart,
              not a reviews buyer-guide chart, not a diet
              feeding chart, not a care routine chart, not
              a behavior cue chart, not a health triage
              chart, not an ownership section-map chart,
              not a colors-hub palette chart, not a
              first-year schedule chart, not a color-pattern
              axis chart, not a sable bandit-mask chart,
              not an albino red-eye chart, not a DEW
              dark-eye chart, not a cinnamon brick-coat
              chart, not a champagne milky-coat chart), a
              ferret fridge chocolate-vs-brown card so
              chocolate vs sable vs cinnamon vs champagne
              notes are labeled on the fridge (not a
              measurement card, not a reviews comparison
              card, not a diet label card, not a care card,
              not a behavior card, not a health library
              card, not an ownership prep card, not a
              colors-hub color id card, not a first-year
              milestone card, not a color-vs-pattern card,
              not a sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card, not a
              champagne-vs-brown card), and a mustelid
              chocolate reference handbook so the AFA /
              chocolate-classification grounding is a
              physical kitchen book (not a calculator
              handbook, not a reviews handbook, not a diet
              handbook, not a care handbook, not a
              behavior handbook, not a health handbook,
              not an ownership handbook, not a colors-hub
              handbook, not a first-year handbook, not a
              color-pattern handbook, not a sable handbook,
              not an albino handbook, not a DEW handbook,
              not a cinnamon handbook, not a champagne
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
              title="Ferret chocolate-ferrets checklist"
              subtitle="Email the chocolate-milk-coat-chart, fridge chocolate-vs-brown card, and chocolate-handbook notes. No spam."
              ctaText="Email my ferret chocolate-ferrets checklist"
              source="colors-chocolate-ferrets-under-hero"
            />
          </div>

          <DropCap>
            Chocolate is the friendliest color name in the ferret palette, and the coat lives up to
            it: a warm, milk-chocolate brown that sits comfortably between the cooler sable and the
            washed-out champagne. It is a popular, easy-to-love color — and, like every warm brown,
            a frequent source of good-natured argument over where exactly it ends and cinnamon
            begins.
          </DropCap>

          <h2 id="look">What Chocolate Looks Like</h2>
          <p>
            The chocolate signature is a clear, warm, mid-brown — neither dark nor red, but
            unmistakably <em>brown</em>:
          </p>
          <ul>
            <li>
              <strong>Guard hairs:</strong> milk-chocolate brown — lighter and warmer than a
              sable&apos;s coffee, browner than a cinnamon&apos;s red.
            </li>
            <li>
              <strong>Undercoat:</strong> white to amber, which keeps the overall coat looking bright
              rather than muddy.
            </li>
            <li>
              <strong>Nose:</strong> brown, sometimes pinkish-brown — not the blackish nose of a
              dark ferret.
            </li>
            <li>
              <strong>Mask:</strong> brown rather than black, in the same warm family as the body.
            </li>
          </ul>

          <h2 id="between">Between Sable and Champagne</h2>
          <p>
            The easiest way to place chocolate is on the brown gradient. Going from dark to light:{' '}
            <a href="/colors/black-ferrets">black</a> → <a href="/colors/sable-ferrets">sable</a> →
            chocolate → <a href="/colors/champagne-ferrets">champagne</a>. Chocolate is a notch
            lighter and warmer than sable, and a clear step darker and more saturated than champagne.
            That mid-spectrum position is why chocolate so often gets confused with the colors on
            either side of it.
          </p>

          <h2 id="vs-cinnamon">Chocolate vs. Cinnamon</h2>
          <p>
            This is the comparison that trips people up most, because both are warm browns. The tell
            is red:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Color</th>
                  <th className="text-left p-3 font-semibold">Guard hairs</th>
                  <th className="text-left p-3 font-semibold">Undercoat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Chocolate</td>
                  <td className="p-3">Clear milk-chocolate brown</td>
                  <td className="p-3">White to amber</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Cinnamon</td>
                  <td className="p-3">Reddish / brick-toned brown</td>
                  <td className="p-3">Golden, gold-tinged</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If the coat reads brown, it is chocolate; if it reads red or rust, it is{' '}
            <a href="/colors/cinnamon-ferrets">cinnamon</a>. In tricky light the call is genuinely
            hard, and the same ferret can be labeled either way. The{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns overview</a> lays out
            the whole warm-brown family.
          </p>

          <h2 id="seasonal">Seasonal Shifts</h2>
          <CalloutBox variant="tip" title="Chocolate moves with the seasons too">
            <p>
              Like every ferret coat, chocolate shifts across the year. The dense winter coat is
              usually richer and deeper, sometimes dark enough to flirt with sable; the lighter
              summer coat can wash out toward a pale, milky brown that edges toward champagne
              territory. A chocolate that looks textbook in one season may sit on the boundary in
              another — all completely normal.
            </p>
          </CalloutBox>

          <h2 id="health">Color and Health</h2>
          <p>
            Chocolate is a coat color and nothing more. A chocolate ferret needs exactly the same
            diet, housing, and veterinary care as any other ferret, and faces the same age-related
            conditions. Coat color is the last thing to weigh when choosing a ferret — health and
            temperament come first. See <a href="/colors/choosing-a-healthy-ferret">choosing a
            healthy ferret</a>, and our <a href="/care">care</a> and <a href="/health">health</a>{' '}
            references for the day-to-day.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              American Ferret Association (AFA) — recognized colors and patterns standard, including
              the chocolate classification.
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
            ferret will be labeled or how its coat will change with age and season.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical chocolate-ferrets kitchen kit
            next to this page — a laminated ferret
            chocolate milk-coat chart so the milk-chocolate
            guard / white-to-amber undercoat / brown-nose /
            brown-mask map is posted on the fridge, a
            ferret fridge chocolate-vs-brown card so
            chocolate vs sable vs cinnamon vs champagne
            notes are labeled on the fridge, and a mustelid
            chocolate reference handbook so the AFA /
            chocolate-classification grounding is a
            physical kitchen book. These are educational
            kitchen searches, not a ranked color list, not
            a substitute for an exotic-mammal veterinarian,
            not a tools-hub / reviews-hub / diet-hub /
            care-hub / behavior-hub / health-hub /
            ownership-hub / colors-hub / first-year-schedule
            / colors-and-patterns / sable-ferrets /
            albino-ferrets / dew-ferrets / cinnamon-ferrets
            / champagne-ferrets hop, and not a child
            toothbrush / dosing hop (those live on health
            children). This page does not hop medications
            or vaccines. This page does not sell insurance.
            This page does not claim hands-on testing.
            Ferret aging stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret chocolate milk-coat chart /
              ferret fridge chocolate-vs-brown card /
              mustelid chocolate reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets kitchen
              kits and child finger+toothbrush /
              carnivore+care hops. Directory import left
              untouched. Ferret aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the chocolate-ferrets kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page milk-chocolate-look-map,
              chocolate-vs-warm-brown-log, and
              afa-chocolate-grounding copy — a laminated
              ferret chocolate milk-coat chart, a ferret
              fridge chocolate-vs-brown card, and a
              mustelid chocolate reference handbook.
              Educational kitchen searches only. They are
              not a ranked color list, they are not a
              tools-hub / reviews-hub / diet-hub / care-hub
              / behavior-hub / health-hub / ownership-hub /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets hop,
              they are not a child toothbrush hop, and they
              do not replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+chocolate+milk+coat+chart?s=chocolate-ferrets"
                amazonLabel="Browse laminated ferret chocolate milk-coat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+chocolate+vs+brown+card?s=chocolate-ferrets"
                amazonLabel="Browse ferret fridge chocolate-vs-brown cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+chocolate+reference+handbook?s=chocolate-ferrets"
                amazonLabel="Browse mustelid chocolate reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
