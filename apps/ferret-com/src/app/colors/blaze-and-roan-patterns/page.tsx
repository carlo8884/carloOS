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

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    {
      name: 'Blaze & Roan Patterns',
      url: 'https://ferret.com/colors/blaze-and-roan-patterns',
    },
  ],
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

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

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
        </div>
      </ArticleLayout>
    </>
  )
}
