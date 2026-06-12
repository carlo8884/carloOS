import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline,
  AffiliateDisclosure,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Are Breed-Specific Pet Diets Worth It? | PetFood.com',
  description:
    'What breed-specific diets actually change — kibble shape, calorie density, and condition targeting — and where the value is real versus marketing.',
  path: '/compare/breed-specific-diets',
  type: 'article',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Are Breed-Specific Pet Diets Worth It? | PetFood.com',
  description:
    'What breed-specific diets actually change — kibble shape, calorie density, and breed-prevalent-condition targeting — and where the value is real versus marketing.',
  url: 'https://petfood.com/compare/breed-specific-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

// Content-aware FAQ derived from the sections below — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Are breed-specific diets worth the extra cost?',
    answer:
      'Sometimes. Kibble shape tailored to a breed’s jaw and eating style, and evidence-supported targeting of a genuine breed predisposition, are real features. Much of the rest is size-based formulation repackaged with breed branding, and the same support is often available in a non-breed-labeled diet. A breed-specific diet is not worth a premium for the breed name alone.',
  },
  {
    question: 'What do breed-specific diets actually change?',
    answer:
      'The substantive differences are kibble shape and size (for example, for brachycephalic breeds or fast eaters), calorie density matched to the breed’s size category, and condition-targeted additions such as taurine for breeds at DCM risk, joint support for large breeds, or skin-and-coat support. The actual nutrient differences versus a well-matched size-and-life-stage diet are often small.',
  },
  {
    question: 'Is a size-based diet as good as a breed-specific one?',
    answer:
      'For most animals, yes. Much of what breed-specific diets deliver is actually size-based — small-breed energy density and kibble size, large- and giant-breed growth controls — which a good size-matched diet also provides. A quality diet matched to size, life stage, and any medical needs serves most animals as well as a breed-labeled one.',
  },
]

const pageSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQ }))


export default function BreedSpecificDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Breed-Specific Diets — Useful or Marketing?',
        subtitle:
          'Breed-specific diets — a formula for the Labrador, another for the Persian — are a prominent premium category, and the honest answer to whether they are worth it is: sometimes. Some breed-specific features address real breed predispositions; others are size-based generalizations dressed as breed precision. This page separates the substantive from the marketing.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Breed-Specific Diets — Useful or Marketing?', href: '/compare/breed-specific-diets' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What They Claim', href: '#claim' },
              { label: 'Size-Based Reality', href: '#size' },
              { label: 'Kibble Shape', href: '#shape' },
              { label: 'Breed-Prevalent Conditions', href: '#conditions' },
              { label: 'The Marketing Layer', href: '#marketing' },
              { label: 'When It Is Worth It', href: '#worthit' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
              { label: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
              { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="breed-specific-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-breed-specific-diets" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Breed-specific diets — where breed-tailored formulation is substance, and where it is marketing." />
        <p>Breed-specific diets are formulated and marketed for individual breeds, implying a precision-tailored nutrition. Some of what they offer is genuinely useful — addressing the calorie needs, kibble preferences, and disease predispositions that do vary by breed and size. But much of the differentiation is size-based or cosmetic, and the breed-precise framing often outruns the actual formulation differences. The category is a mix of substance and marketing. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            Breed-specific diets are a mix of substance and marketing. Kibble shape tailored to a breed&apos;s jaw and evidence-supported targeting of a genuine breed predisposition are real features; much of the rest is size-based formulation repackaged with breed branding, and the same support is usually available in a non-breed-labeled diet. A breed-specific diet is not worth a premium for the breed name alone.
          </p>
        </div>

        <h2 id="claim">What They Claim</h2>
        <p>Breed-specific lines claim to tailor nutrition to a breed&apos;s unique needs — energy level, body type, coat, and predisposition to certain conditions. The implication is that a generic diet cannot serve a specific breed as well. Some of this is real; much is a premium-positioning narrative built on features that are really about size category.</p>
        <h2 id="size">Size-Based Reality</h2>
        <p>Much of what breed-specific diets deliver is actually size-based: small breeds need energy-dense, small kibble and have different metabolic rates and dental profiles than large breeds, and large- and giant-breed needs (including the growth calcium ceiling) are well-established. A breed-specific diet for a giant breed largely reflects giant-breed nutrition, which a good large-breed diet also provides. The breed label often repackages size-appropriate formulation. See <a href="/feeding/large-breed-puppy-nutrition">Large-Breed Puppy Nutrition</a>.</p>
        <h2 id="shape">Kibble Shape</h2>
        <p>One genuine breed-specific feature is kibble shape and size designed for a breed&apos;s jaw and eating style — for example, a kibble shaped for a brachycephalic (flat-faced) breed like the Bulldog or Persian to pick up more easily, or a larger kibble to slow a fast-eating breed and encourage chewing. This is a real, if modest, functional tailoring that affects how easily and how fast a dog or cat eats. It is one of the more defensible breed-specific features.</p>
        <h2 id="conditions">Breed-Prevalent Conditions</h2>
        <p>Some breed-specific diets target conditions a breed is prone to — added taurine for breeds at DCM risk, joint support for large breeds prone to arthritis, urinary support for breeds prone to stones, skin-and-coat support for coat-intensive breeds. Where the breed predisposition is real and the dietary lever is evidence-supported (such as omega-3s for joints), this targeting has value. But the same support is often available in a non-breed-labeled diet. See <a href="/diets/joint-and-mobility-diets">Joint and Mobility Diets</a> and <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="marketing">The Marketing Layer</h2>
        <p>Layered over the substantive features is a marketing premium: breed imagery, breed-precise naming, and the implication of bespoke formulation justify a higher price. The actual nutrient differences between a breed-specific diet and a well-matched size-and-life-stage diet are often small. As with all pet food, the regulated back of the bag and the manufacturer&apos;s substantiation matter more than the breed name on the front. See <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a>.</p>
        <h2 id="worthit">When It Is Worth It</h2>
        <p>A breed-specific diet is worth considering when its features address a real need for your animal — an appropriate kibble shape for a flat-faced breed, evidence-supported targeting of a genuine breed predisposition — and when it is otherwise a complete, well-substantiated diet from a transparent manufacturer. It is not worth a premium for breed branding alone. For most animals, a quality diet matched to size, life stage, and any medical needs serves as well. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>

        <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-surface p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            What usually matters more than the breed name
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark mb-2">
            Shop size- and life-stage-matched diets
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            For most animals, a complete diet matched to size and life stage serves as well as a
            breed-labeled one, often for less. Compare options with our independent{' '}
            <Link href="/brands">brand evaluations</Link>, then search the category below — small-,
            large-, and giant-breed lines cover most of what breed-specific framing offers. Confirm
            the AAFCO complete-and-balanced statement for the life stage on the specific product.
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/chewy-brand/breed%20size%20life%20stage%20complete%20dog%20food?s=compare-breed-specific-diets"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Search size-matched diets on Chewy →
            </a>
            <a
              href="/go/amazon-brand/small%20large%20breed%20complete%20dog%20food?s=compare-breed-specific-diets"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark no-underline hover:bg-brand-white"
            >
              Search on Amazon →
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We earn a commission if you purchase through these links — no extra cost to you, and we never rank by commission.
          </p>
        </div>

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
