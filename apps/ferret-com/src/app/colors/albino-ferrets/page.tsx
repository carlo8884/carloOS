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
  title: 'Albino Ferrets — White Coat, Red Eyes, the Genetics | Ferret.com',
  description:
    'Albino ferrets: pure white coats, pink noses, and red eyes from a lack of melanin. The genetics of albinism and care notes for white ferrets.',
  path: '/colors/albino-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Albino Ferrets',
  description:
    'The albino ferret — pure white coat, pink nose, and red eyes resulting from absent melanin — its genetics, laboratory history, and care considerations.',
  url: 'https://ferret.com/colors/albino-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Albino Ferrets', url: 'https://ferret.com/colors/albino-ferrets' },
  ],
})

const FAQS = [
  {
    question: 'What makes a ferret albino?',
    answer:
      "True albinism is a genetic condition in which the body produces no melanin, the pigment that colors hair, skin, and eyes. The result is a pure white coat, a pink nose, and pink-to-red eyes (the red is blood vessels showing through an iris with no pigment). It is recessive, so a ferret needs two copies of the albino gene to be albino.",
  },
  {
    question: 'Are albino ferrets blind or deaf?',
    answer:
      "Albino ferrets are not blind, though ferrets in general have modest eyesight and rely heavily on smell and hearing. Albinism itself is a pigment condition, not a hearing condition — the deafness link in ferrets is tied to certain white head/face MARKING patterns (like blaze and panda), which is a different genetic mechanism from albinism. Albino ferrets are no more prone to deafness than colored ones on that basis.",
  },
  {
    question: 'Why are so many lab ferrets albino?',
    answer:
      "Albino ferrets have a long association with research and the fur trade, and the albino line is well established in the domestic population. That history is part of why albinos are common and widely available. In a pet home, an albino ferret is simply a ferret that happens to be white — no special status, no special difficulty.",
  },
  {
    question: 'Do albino ferrets need special care?',
    answer:
      "Not really. Care is the same as for any ferret. The one sensible note: like other pale animals, an albino's pink skin offers little protection from strong sun, so avoid prolonged direct sun exposure — which is good advice for all ferrets, who are also heat-sensitive. Otherwise, diet, housing, and health needs are identical regardless of color.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function AlbinoFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Albino Ferrets — Snow-White and Ruby-Eyed',
          subtitle:
            "With their pure white coats, pink noses, and striking red eyes, albino ferrets are among the most recognizable in the species. They are also one of the most misunderstood — surrounded by myths about blindness and fragility that mostly are not true. Here is the real story: the genetics, the history, and what (very little) special care they actually need.",
          category: 'Ferret Colors',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Albino Ferrets', href: '/colors/albino-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Albinism Is', href: '#what' },
                { label: 'The Genetics', href: '#genetics' },
                { label: 'Albino vs. Dark-Eyed White', href: '#vsdew' },
                { label: 'The Lab & Fur History', href: '#history' },
                { label: 'Myths & Care Notes', href: '#myths' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Dark-Eyed White Ferrets', href: '/colors/dark-eyed-white-ferrets' },
                { label: 'Colors & Patterns', href: '/colors/ferret-colors-and-patterns' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-albino"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:color-albino"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            The albino ferret is the one even non-ferret-people recognize: snowy
            white from nose to tail, with bright, jewel-red eyes. It is a
            dramatic look, and it comes with a fair amount of folklore. The truth
            is more reassuring than the myths — an albino ferret is, in nearly
            every practical sense, just a ferret that happens to lack pigment.
          </DropCap>

          <h2 id="what">What Albinism Actually Is</h2>
          <p>
            Albinism is the complete absence of melanin — the pigment responsible
            for color in hair, skin, and eyes. With no melanin to produce, an
            albino ferret is:
          </p>
          <ul>
            <li>
              <strong>Pure white</strong> in coat, sometimes with a faint cream or
              yellowish cast (often from skin oils rather than pigment).
            </li>
            <li>
              <strong>Pink-nosed,</strong> because the skin has no pigment.
            </li>
            <li>
              <strong>Red- or pink-eyed,</strong> because the iris has no pigment
              and the red is the blood vessels of the eye showing through.
            </li>
          </ul>

          <h2 id="genetics">The Genetics</h2>
          <p>
            Albinism is a recessive trait: a ferret must inherit two copies of
            the albino gene — one from each parent — to be albino. A ferret with
            only one copy is a colored carrier. This is why two colored ferrets
            can sometimes produce albino kits, and why albinos breed true with
            each other. For the broader color map and how albino sits among the
            other colors, see our{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>.
          </p>

          <h2 id="vsdew">Albino vs. Dark-Eyed White — Not the Same Thing</h2>
          <CalloutBox variant="tip" title="The eyes tell you everything">
            <p>
              A white ferret with <strong>red or pink eyes</strong> is an albino —
              no pigment anywhere. A white ferret with <strong>dark
              (burgundy-to-black) eyes</strong> is a dark-eyed white, or DEW, which
              is a completely different genetic situation: the ferret produces
              pigment in its eyes but very little in its coat. They look similar at
              a glance, but they are not the same color. Our{' '}
              <a href="/colors/dark-eyed-white-ferrets">dark-eyed white guide</a>{' '}
              covers the distinction in full.
            </p>
          </CalloutBox>

          <h2 id="history">The Laboratory and Fur History</h2>
          <p>
            Albino ferrets have a long association with biomedical research and,
            historically, the fur trade — the albino line is deeply established in
            the domestic ferret population. That heritage is part of why albinos
            are so common and so readily available today. None of it affects an
            albino ferret&apos;s suitability as a pet; an albino from a shelter or
            breeder makes the same companion as any other ferret.
          </p>

          <h2 id="myths">Myths and Care Notes</h2>
          <p>
            A few persistent myths deserve correcting:
          </p>
          <ul>
            <li>
              <strong>Myth: albino ferrets are blind.</strong> They are not.
              Ferret eyesight overall is modest, and they lean on smell and
              hearing, but albinos see — they are not blind by virtue of being
              albino.
            </li>
            <li>
              <strong>Myth: albino ferrets are deaf.</strong> The deafness link in
              ferrets is tied to specific white head/face marking patterns
              (blaze, panda), a different mechanism. Albinism itself does not
              carry that association.
            </li>
            <li>
              <strong>Myth: albinos are sickly or fragile.</strong> They are as
              robust as any ferret. Their health needs are identical.
            </li>
          </ul>
          <p>
            The one sensible adjustment: an albino&apos;s unpigmented pink skin
            offers little sun protection, so avoid prolonged direct sun — sound
            advice for all ferrets, who are heat-sensitive anyway. Beyond that,
            care, diet, and health needs match any ferret; see our{' '}
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
              ferret genetics, history, and husbandry.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              genetics and congenital conditions.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about albino ferrets, not individualized
            veterinary advice. Coat color does not change a ferret&apos;s medical
            needs; any health concern warrants an exotic-mammal vet visit.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
