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
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Chocolate Ferrets — The Milk-Chocolate Coat | Ferret.com',
  description:
    'Chocolate ferrets have milk-chocolate guard hairs over a white-to-amber undercoat with a brown nose. Where chocolate sits between sable and champagne, and how to tell it from cinnamon.',
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

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Patterns', url: 'https://ferret.com/colors' },
    { name: 'Chocolate Ferrets', url: 'https://ferret.com/colors/chocolate-ferrets' },
  ],
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

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

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
          authorAvatar: '🦦',
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
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-30"
            updatedAt="2026-05-30"
          />

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
        </div>
      </ArticleLayout>
    </>
  )
}
