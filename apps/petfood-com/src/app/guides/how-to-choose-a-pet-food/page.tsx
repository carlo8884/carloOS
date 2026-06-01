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
  title: 'How to Choose a Pet Food — A Framework | PetFood.com',
  description:
    'A practical framework for choosing pet food — AAFCO substantiation, manufacturer transparency, the WSAVA questions, life-stage match, and ignoring marketing.',
  path: '/guides/how-to-choose-a-pet-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How to Choose a Pet Food — A Framework | PetFood.com',
  description:
    'A practical framework for choosing pet food — AAFCO substantiation, manufacturer transparency, the WSAVA questions, life-stage match, and ignoring marketing.',
  url: 'https://petfood.com/guides/how-to-choose-a-pet-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HowToChooseAPetFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'How to Choose a Pet Food',
        subtitle:
          'Choosing a pet food is overwhelming because the market is enormous and the marketing is loud. A sound choice comes from a short list of evidence-based questions — about completeness, manufacturer transparency, and life-stage match — rather than from front-of-bag claims. This page lays out a framework, anchored to the WSAVA selection guidance, for choosing well.',
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Start with Completeness', href: '#completeness' },
              { label: 'The WSAVA Questions', href: '#wsava' },
              { label: 'Manufacturer Transparency', href: '#transparency' },
              { label: 'Match the Life Stage', href: '#lifestage' },
              { label: 'Ignore the Marketing', href: '#marketing' },
              { label: 'A Practical Checklist', href: '#checklist' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Scoring Methodology', href: '/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="how-to-choose-a-pet-food"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The pet food aisle offers thousands of options and a barrage of marketing, but a defensible choice rests on a handful of evidence-based criteria. The strongest framework comes from the WSAVA Global Nutrition Committee, which directs owners to ask about a manufacturer&apos;s nutritional expertise, quality control, and research rather than judging by ingredient marketing. This page turns that guidance into a practical process. See <a href="/guides/methodology">Scoring Methodology</a>.</p>
        <h2 id="completeness">Start with Completeness</h2>
        <p>The first filter is the AAFCO nutritional adequacy statement: confirm the food is complete and balanced for your animal&apos;s life stage, and prefer feeding-trial substantiation over formulation-only where available. A food without a complete-and-balanced statement (carrying instead intermittent or supplemental feeding only) is a treat or topper, not a diet. This single check rules out a great deal. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="wsava">The WSAVA Questions</h2>
        <p>The WSAVA recommends asking the manufacturer: Does it employ a qualified nutritionist (such as a board-certified veterinary nutritionist or a PhD in animal nutrition)? Who formulates the diets and what are their credentials? Are the diets tested by AAFCO feeding trials? What specific quality-control measures are used? Where are the foods made? Does the company conduct and publish research? Manufacturers that answer these readily and well are more trustworthy than those that cannot. See <a href="/guides/methodology">Scoring Methodology</a>.</p>
        <h2 id="transparency">Manufacturer Transparency</h2>
        <p>Transparency is a strong signal: a manufacturer that discloses ingredient sourcing, manufacturing locations, quality-control and audit practices (such as a GFSI-benchmarked certification), nutritionist involvement, and a clear recall history is more accountable than one that hides behind marketing. Owning and operating the manufacturing facility, rather than co-packing anonymously, is a positive sign. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>
        <h2 id="lifestage">Match the Life Stage</h2>
        <p>Match the diet to the animal&apos;s life stage and needs: growth diets (including large-size growth validation for big-breed puppies) for the young, adult maintenance for healthy adults, and condition-specific therapeutic diets for diagnosed disease. The senior label is unregulated, so judge senior foods on their actual formulation. The right food depends on the individual, not on a single best brand. See <a href="/life-stage">Pet Food by Life Stage</a> and <a href="/feeding/large-breed-puppy-nutrition">Large-Breed Puppy Nutrition</a>.</p>
        <h2 id="marketing">Ignore the Marketing</h2>
        <p>Discount the front-of-bag adjectives — holistic, premium, gourmet (undefined), and the negative claims like no by-products or grain-free (marketing positions, not quality measures). Natural and organic are defined production claims, not nutrition guarantees. Base the decision on the regulated back of the bag and the manufacturer&apos;s answers, not the imagery. See <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a>.</p>
        <h2 id="checklist">A Practical Checklist</h2>
        <ol>
          <li>Confirm a complete-and-balanced AAFCO statement for the correct life stage; prefer feeding-trial substantiation.</li>
          <li>Ask the WSAVA questions; favor manufacturers that employ a qualified nutritionist and answer readily.</li>
          <li>Check manufacturer transparency: sourcing, manufacturing, quality control, recall history.</li>
          <li>Match the life stage and any medical needs to the diet.</li>
          <li>Read the calorie statement so you can feed the right amount, and ignore undefined marketing terms.</li>
          <li>Reassess via body condition over the following weeks and adjust.</li>
        </ol>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.</li>
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
