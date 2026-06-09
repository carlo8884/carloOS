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
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Sable Ferrets — The Classic Masked Look | Ferret.com',
  description:
    'Sable is the most common ferret color: warm brown guard hairs, cream undercoat, and a dark mask. How it differs from black sable and shifts seasonally.',
  path: '/colors/sable-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Sable Ferrets',
  description:
    'The sable ferret — the most common coat color, defined by warm brown guard hairs over a cream undercoat with a dark mask, and how it differs from black sable.',
  url: 'https://ferret.com/colors/sable-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What does a sable ferret look like?',
    answer:
      "A sable ferret has warm, brown guard hairs over a cream-to-light-brown undercoat, a dark brown mask across the eyes, dark legs and tail, and typically a brown or speckled nose. It is the look most people picture when they imagine a ferret — the classic 'bandit mask' appearance closest to the wild polecat ancestor.",
  },
  {
    question: 'Why are sable ferrets the most common color?',
    answer:
      "Sable is the closest domestic color to the wild European polecat from which ferrets descend, and the genetics that produce it are dominant and widespread in the pet population. Because it has been the baseline color throughout ferret domestication, it remains the most frequently seen.",
  },
  {
    question: 'What is the difference between sable and black sable?',
    answer:
      "Both share the masked, dark-pointed look, but black sable is darker and cooler-toned — the guard hairs are a blackish-brown rather than the warm brown of standard sable, and the mask and points are deeper. Black sable is essentially a darker variation on the same theme.",
  },
  {
    question: 'Do sable ferrets change color in winter and summer?',
    answer:
      "Yes. Like most ferrets, sables grow a thicker, often darker coat in winter and a sleeker, sometimes lighter coat in summer as they shed and regrow. A sable can look noticeably different across the year, which is completely normal.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function SableFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Sable Ferrets — The Classic Bandit Mask',
          subtitle:
            "If you close your eyes and picture a ferret, you are almost certainly picturing a sable: warm brown fur, a cream undercoat glowing through, and that unmistakable dark mask across the eyes. Sable is the most common ferret color and the one closest to the wild polecat ancestor. Here is everything that makes it the classic.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Sable Ferrets', href: '/colors/sable-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Sable Looks Like', href: '#look' },
                { label: 'Why It Is So Common', href: '#common' },
                { label: 'Sable vs. Black Sable', href: '#blacksable' },
                { label: 'Seasonal Changes', href: '#seasonal' },
                { label: 'Care Notes', href: '#care' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Cinnamon Ferrets', href: '/colors/cinnamon-ferrets' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-sable"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Ferret Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
          { title: 'Black Ferrets', href: '/colors/black-ferrets' },
          { title: 'Chocolate Ferrets', href: '/colors/chocolate-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-sable"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Sable is the ferret of the imagination — the warm-brown, masked,
            mischievous face on every cartoon, every logo, every mental image of
            the species. There is a good reason it is the default: sable is the
            most common ferret color and the one that most closely echoes the
            wild European polecat from which all domestic ferrets descend.
          </DropCap>

          <h2 id="look">What Sable Looks Like</h2>
          <p>
            The sable signature is a contrast between dark guard hairs and a pale
            undercoat:
          </p>
          <ul>
            <li>
              <strong>Guard hairs:</strong> warm brown, the long outer coat that
              gives the ferret its overall color.
            </li>
            <li>
              <strong>Undercoat:</strong> cream to light brown, visible through
              and beneath the guard hairs.
            </li>
            <li>
              <strong>Mask:</strong> a distinct dark band across the eyes — the
              classic &quot;bandit&quot; look.
            </li>
            <li>
              <strong>Points:</strong> darker legs and tail.
            </li>
            <li>
              <strong>Nose:</strong> typically brown, speckled, or a
              brown-and-pink mottle.
            </li>
          </ul>

          <h2 id="common">Why Sable Is So Common</h2>
          <p>
            Two reasons. First, sable is the closest domestic color to the wild
            polecat — the species&apos; baseline appearance. Second, the genetics
            behind it are widespread in the pet ferret population, so sable
            shows up again and again across generations. It has been the
            &quot;standard&quot; ferret look throughout domestication, and it
            remains the one you are most likely to meet at a shelter or pet
            store. For the full palette beyond sable, see our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>.
          </p>

          <h2 id="blacksable">Sable vs. Black Sable</h2>
          <p>
            These two get confused constantly. Both have the masked,
            dark-pointed look, but the tone differs:
          </p>
          <ul>
            <li>
              <strong>Sable</strong> is warm and brown — guard hairs the color of
              rich coffee with milk.
            </li>
            <li>
              <strong>Black sable</strong> is darker and cooler — guard hairs a
              deep blackish-brown, with a more intense mask and points.
            </li>
          </ul>
          <p>
            Think of black sable as the dialled-up, shadowier version of the same
            essential color.
          </p>

          <h2 id="seasonal">Seasonal Changes</h2>
          <CalloutBox variant="tip" title="Your sable will not always look the same">
            <p>
              Sable ferrets, like most ferrets, shift coat with the seasons. The
              winter coat tends to be thicker and often darker; the summer coat is
              sleeker and can look lighter. A sable that seems to &quot;change
              color&quot; through the year is simply doing what ferret coats do.
              Kits also commonly darken or shift as they mature, so a young sable
              may look somewhat different as an adult.
            </p>
          </CalloutBox>

          <h2 id="care">Care Notes</h2>
          <p>
            There is nothing color-specific about caring for a sable ferret —
            coat color does not change a ferret&apos;s health needs,
            temperament, or husbandry. Sables eat, play, sleep, and live like any
            other ferret. For day-to-day care, browse our{' '}
            <a href="/care">care references</a>; for the conditions ferret owners
            encounter most, see our{' '}
            <a href="/health">health hub</a>. And whatever the color, the things
            that matter when bringing one home are health and temperament — see{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
            ferret</a>.
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
              ferret natural history and coat genetics.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              genetics and husbandry.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about ferret coat color, not
            individualized veterinary advice. Coat color does not change a
            ferret&apos;s medical needs; any health concern warrants an
            exotic-mammal vet visit.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
