import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
  description:
    'How probiotics and prebiotics support the gut — strain-specific evidence, why human products differ, viability and quality, and proper use.',
  path: '/supplements/probiotics-for-pets',
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
const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
  description:
    'How probiotics and prebiotics support the gut, the strain-specific evidence, why human probiotics are not interchangeable, viability and quality, and proper use.',
  url: 'https://petfood.com/supplements/probiotics-for-pets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
  description:
    'How probiotics and prebiotics support the gut — strain-specific evidence, why human products differ, viability and quality, and proper use.',
  url: 'https://petfood.com/supplements/probiotics-for-pets',
  authorName: 'PetFood.com Editorial',
  lastReviewed: '2026-06-01',
  medicalAudience: 'Caregiver',
})

const schema = combineSchemas(articleSchema, medicalSchema)


export default function ProbioticsForPetsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Probiotics for Pets',
        subtitle:
          'Probiotics have a genuine evidence base for specific uses in pets — notably acute diarrhea — but the benefits are strain-specific, human products are not interchangeable with pet ones, and product quality (viable organisms at the labeled count) is a recurring problem. This page covers what works, what does not, and how to choose a product.',
        category: 'Supplement Reference',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Supplements', href: '/supplements' },
        { name: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
      ]}
      relatedLinks={[
        { title: 'Supplements Hub', href: '/supplements' },
        { title: 'Fish Oil and Omega-3', href: '/supplements/fish-oil-omega-3' },
        { title: 'Glucosamine and Joint Support', href: '/supplements/glucosamine-and-joint-support' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Probiotics and Prebiotics', href: '#probioticsprebiotics' },
              { label: 'The Gut Microbiome', href: '#microbiome' },
              { label: 'Evidence by Use', href: '#evidence' },
              { label: 'Strain Specificity', href: '#strain' },
              { label: 'Viability and Quality', href: '#viability' },
              { label: 'Using Probiotics Well', href: '#using' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Fiber and Digestive Health Diets', href: '/diets/fiber-and-digestive-health' },
              { label: 'How to Transition Pet Food', href: '/feeding/how-to-transition-pet-food' },
              { label: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="probiotics-for-pets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:supplements-hero"
          alt="Probiotic supplement powders and chews for pets"
          eyebrow="Supplement Reference"
          priority
        />
        <p>Probiotics are live microorganisms that, given in adequate amounts, confer a health benefit; prebiotics are fermentable fibers that feed beneficial gut bacteria. Together they aim to support a healthy gut microbiome. The pet probiotic category is large and uneven — some uses are well-supported, many marketing claims are not, and product quality varies considerably. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="probioticsprebiotics">Probiotics and Prebiotics</h2>
        <p>Probiotics supply live beneficial bacteria (and sometimes yeast such as Saccharomyces boulardii); prebiotics (fructooligosaccharides, inulin, beet pulp) are the fibers that nourish them. Synbiotics combine both. Many gastrointestinal diets already include prebiotics, and probiotics are added as a separate supplement or as a component of some diets. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="microbiome">The Gut Microbiome</h2>
        <p>The gut microbiome — the community of microorganisms in the digestive tract — influences digestion, immune function, and overall health, and is shaped strongly by diet. Disruptions (from disease, antibiotics, or abrupt diet change) can produce digestive upset. Probiotics aim to support or restore a favorable microbial balance, though the resident microbiome is complex and supplemented organisms are often transient.</p>
        <h2 id="evidence">Evidence by Use</h2>
        <p>The best-supported use is acute diarrhea, where specific probiotic strains can shorten the duration of episodes in dogs and cats, including antibiotic-associated and stress-related diarrhea. There is supporting evidence for some chronic GI conditions as an adjunct. Broad wellness, immune, and behavior claims are largely unsubstantiated. The benefit is real for defined situations, not a general tonic. See <a href="/feeding/how-to-transition-pet-food">How to Transition Pet Food</a>.</p>
        <h2 id="strain">Strain Specificity</h2>
        <p>Probiotic effects are strain-specific: a benefit shown for one bacterial strain does not transfer to a different strain or species, and the dose (colony-forming units) matters. This is why human probiotics are not interchangeable with pet products — the strains studied and the relevant gut environment differ. Choose a product whose specific strains and doses have evidence in dogs or cats for your intended use.</p>
        <h2 id="viability">Viability and Quality</h2>
        <p>Probiotics must contain live organisms at the labeled count at the time of use, and independent testing has repeatedly found pet probiotics with far fewer viable organisms than claimed, or contaminating organisms. Live bacteria are sensitive to heat, moisture, and time, so storage and shelf life matter. Prefer products with a guaranteed live count through the expiration date, a NASC seal or third-party testing, and proper storage. A dead probiotic does nothing.</p>
        <h2 id="using">Using Probiotics Well</h2>
        <p>Use a veterinary-grade probiotic with evidence for the intended purpose, at the studied dose, stored correctly. For acute diarrhea, an appropriate probiotic is a reasonable adjunct, but persistent or severe GI signs need diagnosis, not just a supplement. Probiotics complement, rather than replace, an appropriate diet and veterinary care. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Pet probiotics are over-the-counter supplements, and the category&apos;s biggest problem is viability — independent testing has repeatedly found far fewer live organisms than labeled. So the buying rule is specific: choose a product with a guaranteed live count through the expiration date, strains studied in dogs or cats for your intended use, and a NASC seal or third-party testing. The picks below reflect that filter, not a hands-on trial. Persistent or severe GI signs need diagnosis, not just a supplement.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="veterinary-probiotic"
          badge="Guaranteed Live Count"
          badgeEmoji="🦠"
          name="Veterinary-Grade Pet Probiotics"
          subtitle="Strain-specific, guaranteed CFU through expiration"
          score={8.5}
          winner
          description={
            <p>The best-supported use of probiotics is shortening acute diarrhea episodes, and the products with evidence are strain-specific veterinary-grade powders and pastes that guarantee a live count through the expiration date. Buy on disclosed strains and guaranteed CFU, not on broad wellness claims. Store as directed — live bacteria are sensitive to heat, moisture, and time.</p>
          }
          specs={[
            { label: 'Live count', value: 'Guaranteed to expiry', highlight: 'good' },
            { label: 'Strains', value: 'Disclosed, pet-studied', highlight: 'good' },
            { label: 'Best evidence', value: 'Acute diarrhea' },
            { label: 'Quality filter', value: 'NASC / third-party', highlight: 'good' },
          ]}
          pros={['Strain-specific evidence for diarrhea', 'Guaranteed live count', 'Low risk']}
          cons={['Broad wellness claims unsubstantiated', 'Viability varies between products', 'Not a replacement for diagnosis']}
          price="$25–45"
          ctaText="Find Veterinary Probiotics"
          ctaHref="/go/chewy-brand/dog+probiotic+guaranteed+cfu?s=supplements-probiotics-for-pets"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="dog+probiotic+guaranteed+cfu"
        />
        <ReviewCard
          id="synbiotic-prebiotic"
          badge="Synbiotic"
          badgeEmoji="🌾"
          name="Synbiotic & Prebiotic Supplements"
          subtitle="Probiotics plus the prebiotic fiber that feeds them"
          score={7.8}
          description={
            <p>Synbiotics pair live probiotic strains with prebiotic fibers (FOS, inulin) that nourish beneficial gut bacteria. They are a reasonable adjunct during diet transitions, antibiotic-associated upset, and stress-related diarrhea. Apply the same filters: disclosed strains, guaranteed live count, and a quality seal.</p>
          }
          specs={[
            { label: 'Contains', value: 'Probiotic + prebiotic' },
            { label: 'Use', value: 'Transitions / mild upset' },
            { label: 'Quality filter', value: 'NASC / third-party', highlight: 'good' },
          ]}
          pros={['Combines live cultures with prebiotic fiber', 'Useful during diet transitions', 'Low risk']}
          cons={['Same viability caveats apply', 'Not for severe or persistent GI disease']}
          price="$20–40"
          ctaText="Compare Synbiotic Supplements"
          ctaHref="/go/amazon-brand/dog+synbiotic+probiotic+prebiotic?s=supplements-probiotics-for-pets"
          ctaAffiliateProgram="amazon-brand"
          ctaAffiliateProduct="dog+synbiotic+probiotic+prebiotic"
        />

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
