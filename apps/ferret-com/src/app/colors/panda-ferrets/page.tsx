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
  buildBreadcrumbSchema,
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

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Panda Ferrets', url: 'https://ferret.com/colors/panda-ferrets' },
  ],
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

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

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
          authorAvatar: '🦦',
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
        </div>
      </ArticleLayout>
    </>
  )
}
