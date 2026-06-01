import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
  description:
    'How probiotics and prebiotics support the gut, the strain-specific evidence, why human probiotics are not interchangeable, viability and quality, and proper use.',
  path: '/supplements/probiotics-for-pets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Probiotics for Dogs and Cats — The Evidence | PetFood.com',
  description:
    'How probiotics and prebiotics support the gut, the strain-specific evidence, why human probiotics are not interchangeable, viability and quality, and proper use.',
  url: 'https://petfood.com/supplements/probiotics-for-pets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

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
        { name: 'Supplements' },
        { name: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
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

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
