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
  title: 'Dark-Eyed White (DEW) Ferrets — Not Albinos | Ferret.com',
  description:
    'Dark-eyed white ferrets have white coats but burgundy-to-black eyes — they are not albinos. The genetics, the deafness link with white markings, and how to tell DEW from albino.',
  path: '/colors/dark-eyed-white-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Dark-Eyed White Ferrets',
  description:
    'The dark-eyed white (DEW) ferret — a white coat with dark eyes, distinct from albino, its genetics, and the association between extensive white markings and deafness.',
  url: 'https://ferret.com/colors/dark-eyed-white-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Dark-Eyed White Ferrets', url: 'https://ferret.com/colors/dark-eyed-white-ferrets' },
  ],
})

const FAQS = [
  {
    question: 'What is a dark-eyed white ferret?',
    answer:
      "A dark-eyed white (DEW), sometimes called a black-eyed white (BEW), is a ferret with a white or near-white coat but dark eyes — typically burgundy, ruby-dark, or near-black, rather than the bright red of an albino. Unlike an albino, a DEW does produce pigment; it just shows almost none in the coat.",
  },
  {
    question: 'How is a DEW ferret different from an albino?',
    answer:
      "The eyes are the giveaway. An albino has red or pink eyes and produces no melanin at all. A DEW produces pigment — you can see it in the dark eyes and often a dark nose — but the coat is white. They look similar from across a room, but genetically they are different, and the eye color tells them apart instantly.",
  },
  {
    question: 'Are dark-eyed white ferrets more likely to be deaf?',
    answer:
      "Possibly, depending on the underlying genetics. In ferrets, congenital deafness has been associated with white-coat and white-marking patterns (such as panda and blaze) through pigment-related mechanisms similar to those in some white dogs and cats. Because DEW coats sit in that white-coat space, a hearing check is sensible. A deaf ferret can still live a full, happy life with minor care adjustments.",
  },
  {
    question: 'Do DEW ferrets need special care?',
    answer:
      "Care is the same as for any ferret, with one practical note: if a particular DEW is deaf, you will adjust how you interact — approach within sight rather than from behind, use vibration or visual cues, and never startle a sleeping ferret. Deafness changes communication, not core husbandry.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function DarkEyedWhiteFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Dark-Eyed White Ferrets — The White Ferret That Is Not an Albino',
          subtitle:
            "At a glance, a dark-eyed white looks like an albino — same snowy coat, same striking presence. But look at the eyes: deep burgundy or near-black instead of bright red. That single difference marks an entirely separate kind of white ferret, with its own genetics and a couple of things worth knowing before you bring one home.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Dark-Eyed White Ferrets', href: '/colors/dark-eyed-white-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What a DEW Is', href: '#what' },
                { label: 'DEW vs. Albino', href: '#vsalbino' },
                { label: 'The Genetics', href: '#genetics' },
                { label: 'White Markings & Deafness', href: '#deafness' },
                { label: 'Living With a Deaf Ferret', href: '#deaf' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Albino Ferrets', href: '/colors/albino-ferrets' },
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-dew"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            The dark-eyed white is one of the most commonly misidentified ferrets
            around — routinely mistaken for an albino, sometimes even by people
            selling them. The mix-up is understandable: both are white. But the
            eyes tell a completely different story, and so does the genetics
            underneath. If you have, or are considering, a white ferret, this is
            the distinction to get straight.
          </DropCap>

          <h2 id="what">What a Dark-Eyed White Is</h2>
          <p>
            A dark-eyed white (DEW) — also called a black-eyed white (BEW) — is a
            ferret with a white or near-white coat and <strong>dark eyes</strong>:
            burgundy, deep ruby, or close to black. Crucially, a DEW{' '}
            <em>does</em> produce melanin. You can usually see that pigment in the
            eyes and often in a dark nose. The coat simply shows very little of
            it. A DEW may carry faint guard-hair color or be effectively pure
            white.
          </p>

          <h2 id="vsalbino">DEW vs. Albino — The One Thing to Remember</h2>
          <CalloutBox variant="tip" title="Check the eyes">
            <p>
              <strong>Red or pink eyes = albino</strong> (no melanin anywhere).{' '}
              <strong>Dark, burgundy, or near-black eyes = dark-eyed white</strong>{' '}
              (melanin present, just not in the coat). That single observation
              settles the identification every time. The two look similar but are
              genetically distinct — see our{' '}
              <a href="/colors/albino-ferrets">albino ferrets guide</a> for the
              other side of the comparison.
            </p>
          </CalloutBox>

          <h2 id="genetics">The Genetics</h2>
          <p>
            Where albinism is a clean absence of all pigment, the dark-eyed white
            coat comes from white-coat and white-marking genetics that suppress
            coat color while leaving eye and nose pigment intact. This is the same
            broad genetic neighborhood as heavily white-marked patterns like panda
            and blaze, covered in our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a> — which is exactly why the deafness note below matters
            for DEWs.
          </p>

          <h2 id="deafness">White Markings and Deafness</h2>
          <CalloutBox variant="warning" title="The hearing link">
            <p>
              Congenital deafness in ferrets has been associated with white-coat
              and white head/face marking patterns — including panda, blaze, and
              by extension some dark-eyed whites — through pigment-related
              mechanisms comparable to those seen in certain white dogs and cats.
              Not every DEW or white-marked ferret is deaf, but the association is
              real enough that a hearing check is worthwhile. The good news: a deaf
              ferret can live a completely full, happy life.
            </p>
          </CalloutBox>

          <h2 id="deaf">Living With a Deaf Ferret</h2>
          <p>
            If a DEW (or any ferret) turns out to be deaf, the adjustments are
            modest and mostly about communication:
          </p>
          <ul>
            <li>
              <strong>Approach within sight,</strong> not from behind, so you do
              not startle the ferret.
            </li>
            <li>
              <strong>Use vibration and visual cues</strong> — a gentle floor tap
              or a hand wave — instead of voice cues.
            </li>
            <li>
              <strong>Wake gently,</strong> with a soft touch the ferret can feel,
              never an abrupt grab. Deaf ferrets can be startle-prone, which can
              lead to a fear nip — see our{' '}
              <a href="/behavior/biting-and-nipping">biting and nipping guide</a>.
            </li>
            <li>
              <strong>Supervise outdoor and free-roam time more closely,</strong>{' '}
              since a deaf ferret cannot hear approaching hazards.
            </li>
          </ul>
          <p>
            Beyond hearing, a DEW&apos;s care, diet, and health needs are
            identical to any ferret&apos;s — see our{' '}
            <a href="/care">care</a> and <a href="/health">health</a> references.
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
              ferret genetics and the pigment-deafness association.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              genetics and congenital deafness.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about dark-eyed white ferrets, not
            individualized veterinary advice. Suspected deafness or other
            congenital conditions warrant evaluation by an exotic-mammal
            veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
