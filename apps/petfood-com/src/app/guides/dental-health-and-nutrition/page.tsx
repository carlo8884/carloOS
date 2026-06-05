import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Dental Health and Diet for Dogs and Cats | PetFood.com',
  description:
    'Whether food cleans teeth, what dental diets and the VOHC seal actually do, the limits of kibble, and how nutrition fits into real dental care.',
  path: '/guides/dental-health-and-nutrition',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Dental Health and Diet for Dogs and Cats | PetFood.com',
  description:
    'Whether food cleans teeth, what dental diets and the VOHC seal actually do, the limits of kibble, and how nutrition fits into real dental care.',
  url: 'https://petfood.com/guides/dental-health-and-nutrition',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
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

export default function DentalHealthAndNutritionPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Dental Health and Nutrition',
        subtitle:
          'Dental disease is one of the most common health problems in dogs and cats, and the belief that dry food keeps teeth clean is widespread and largely wrong. Diet can play a supporting role through purpose-built dental products, but it does not replace dental care. This page covers what food can and cannot do for teeth.',
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: 'Dental Health and Nutrition', href: '/guides/dental-health-and-nutrition' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides' },
        { title: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
        { title: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
        { title: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Scale of Dental Disease', href: '#scale' },
              { label: 'Does Kibble Clean Teeth?', href: '#kibble' },
              { label: 'How Dental Diets Work', href: '#dentaldiets' },
              { label: 'The VOHC Seal', href: '#vohc' },
              { label: 'Dental Treats and Chews', href: '#treats' },
              { label: 'Nutrition Is Not Enough', href: '#notenough' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
              { label: 'Treats and the 10 Percent Rule', href: '/feeding/treats-and-the-ten-percent-rule' },
              { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="dental-health-and-nutrition"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Periodontal disease affects a majority of dogs and cats by middle age and contributes to pain, tooth loss, and systemic effects. Diet is frequently invoked as a dental solution — most commonly the claim that dry food cleans teeth — but the evidence is more limited than the marketing suggests. Specially designed dental products have a real but modest effect; ordinary food does not substitute for dental care. See <a href="/compare/wet-vs-dry-food">Wet vs Dry Food</a>.</p>
        <h2 id="scale">The Scale of Dental Disease</h2>
        <p>Plaque (a bacterial film) forms on teeth continuously and mineralizes into tartar, driving gingivitis and periodontal disease. The high prevalence of dental disease in pets reflects how little routine dental care most receive. Because diet contact with the teeth is brief and most food does little mechanical cleaning, nutrition is a minor player in a problem that mainly requires brushing and professional cleaning.</p>
        <h2 id="kibble">Does Kibble Clean Teeth?</h2>
        <p>The common belief that dry kibble scrubs teeth is largely a myth. Most kibble shatters on first contact with little abrasive action, and dental disease is common in kibble-fed animals. There is no strong evidence that ordinary dry food meaningfully reduces dental disease compared with wet food. Choosing dry food primarily for dental benefit is not well supported. See <a href="/compare/wet-vs-dry-food">Wet vs Dry Food</a>.</p>
        <h2 id="dentaldiets">How Dental Diets Work</h2>
        <p>Purpose-built dental diets differ from ordinary kibble: they use a larger kibble with a fibrous matrix engineered so the tooth sinks into the kibble before it breaks, providing mechanical scrubbing along the tooth surface, and some incorporate compounds that reduce tartar mineralization. These designed dental kibbles do have measurable plaque- and tartar-reducing effects, unlike ordinary kibble. The design, not the dryness, produces the benefit.</p>
        <h2 id="vohc">The VOHC Seal</h2>
        <p>The Veterinary Oral Health Council (VOHC) awards a seal to dental products — foods, treats, chews, and additives — that meet a defined standard for reducing plaque or tartar in controlled testing. The VOHC seal is the most reliable signal that a dental product actually works, because it reflects independent standard-setting rather than marketing. Looking for the VOHC seal is the practical way to identify effective dental products.</p>
        <h2 id="treats">Dental Treats and Chews</h2>
        <p>Dental chews and treats can reduce plaque and tartar through mechanical action and, in some cases, active ingredients, and VOHC-accepted chews have demonstrated efficacy. They carry calories that must be counted within the daily budget and the 10 percent treat allowance, and hard chews carry a tooth-fracture risk if too hard. Choose appropriately sized, VOHC-accepted products and count the calories. See <a href="/feeding/treats-and-the-ten-percent-rule">Treats and the 10 Percent Rule</a>.</p>
        <h2 id="notenough">Nutrition Is Not Enough</h2>
        <p>Even the best dental diet or chew is an adjunct, not a replacement, for dental care. The gold standard is daily tooth brushing plus professional cleanings under anesthesia as recommended by the veterinarian. Diet and dental products support oral health at the margins; they do not prevent periodontal disease on their own. Owners should not rely on food to keep teeth healthy. See <a href="/diets/senior-pet-diets">Senior Pet Diets</a>.</p>

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
