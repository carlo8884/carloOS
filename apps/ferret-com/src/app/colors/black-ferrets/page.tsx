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
  title: 'Black Ferrets — Black Sable & True Black Coats | Ferret.com',
  description:
    'Black ferrets sit at the darkest end of the spectrum: near-black guard hairs, blackish noses, and a deep mask. The difference between black sable and true black, and how both differ from a standard sable.',
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

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Patterns', url: 'https://ferret.com/colors' },
    { name: 'Black Ferrets', url: 'https://ferret.com/colors/black-ferrets' },
  ],
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

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

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
          authorAvatar: '🦦',
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
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-30"
            updatedAt="2026-05-30"
          />

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
        </div>
      </ArticleLayout>
    </>
  )
}
