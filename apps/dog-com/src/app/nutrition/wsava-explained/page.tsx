import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'WSAVA Dog Food Guidelines Explained — What They Mean & Why They Matter | Dog.com',
  description: 'WSAVA guidelines are the gold standard for evaluating dog food manufacturers. A DVM explains what WSAVA compliance means, what questions to ask, and which brands pass.',
  path: '/nutrition/wsava-explained',
  category: 'Nutrition Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'WSAVA Dog Food Guidelines Explained',
  description: 'What WSAVA compliance actually means and which brands meet the standard.',
  url: 'https://dog.com/nutrition/wsava-explained',
  imageUrl: '',
  authorName: 'Dr. Patricia Mills, DVM, DACVIM',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

export default function WSAVAExplainedPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'WSAVA Dog Food Guidelines Explained',
        subtitle: 'The World Small Animal Veterinary Association (WSAVA) published guidelines for evaluating pet food manufacturers — not ingredients, but the companies making the food. Here\'s what compliance actually means.',
        category: 'Nutrition Guide',
        authorName: 'Dr. Patricia Mills, DVM, DACVIM',
        authorAvatar: '👩‍⚕️',
        publishedAt: 'May 2025',
        readTime: '8 min',
        dvmReviewed: true,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'WSAVA Guidelines', href: '/nutrition/wsava-explained' },
      ]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[
          { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' },
          { label: 'Grain-Free & DCM Risk', href: '/nutrition/grain-free-dcm-risk' },
          { label: 'Nutrition Hub', href: '/nutrition' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance every Tuesday." source="nutrition-wsava" />
      </>}
    >
      <div className="carloOS-article">
        <h2>What Are WSAVA Guidelines?</h2>
        <p>The World Small Animal Veterinary Association published nutritional guidelines that provide a framework for evaluating pet food manufacturers. The key insight: the guidelines evaluate the company and its practices — not the ingredient list. You can have a beautiful ingredient list on a bag of food made by a company with no veterinary nutritionists, no feeding trials, and no quality control processes. The ingredient list tells you almost nothing about whether that food is actually good for your dog.</p>

        <h2>The Six Questions WSAVA Recommends Asking</h2>
        <p>WSAVA recommends asking these six questions of any pet food manufacturer:</p>
        <ol>
          <li><strong>Do you employ a full-time qualified nutritionist?</strong> Look for a board-certified veterinary nutritionist (DACVN or DECVCN) or PhD animal nutritionist. Not a consultant — a full-time employee.</li>
          <li><strong>Who formulates your diets, and what are their qualifications?</strong> Same as above — you want credentialed nutritionists, not marketing teams.</li>
          <li><strong>Are your diets tested using AAFCO feeding trials?</strong> There are two ways to claim AAFCO compliance: feeding trial (dogs actually ate the food and were monitored) or formulation (the formula was calculated to meet nutrient profiles). Feeding trials are more rigorous and meaningful. Look for &quot;Animal feeding tests using AAFCO procedures substantiate that [product] provides complete and balanced nutrition.&quot;</li>
          <li><strong>Do you own your manufacturing facilities?</strong> Companies that own their manufacturing have more control over quality. Contract manufacturers produce food for many different brands under different names — quality control is less consistent.</li>
          <li><strong>What quality control measures do you use?</strong> Should include testing of raw ingredients and finished products, and verification that nutrient levels match label claims.</li>
          <li><strong>Has your diet undergone any AAFCO or industry standard feeding tests?</strong> Beyond the label claim — have they published any research on their foods?</li>
        </ol>

        <h2>Which Brands Pass WSAVA Standards?</h2>
        <p>The brands most consistently cited as meeting WSAVA guidelines by veterinary nutritionists:</p>
        <ul>
          <li><strong>Royal Canin</strong> — employs 600+ scientists including board-certified veterinary nutritionists. Conducts AAFCO feeding trials. Owns most manufacturing. Most consistently WSAVA-compliant.</li>
          <li><strong>Purina (Pro Plan, Purina Veterinary Diets)</strong> — over 400 published nutritional studies. Full-time board-certified veterinary nutritionists. AAFCO feeding trials. Strong research investment.</li>
          <li><strong>Hill&apos;s (Science Diet, Prescription Diet)</strong> — board-certified veterinary nutritionists. AAFCO feeding trials. Extensive clinical research, particularly in prescription diets.</li>
          <li><strong>Iams/Eukanuba</strong> — meets WSAVA standards, less research investment than the top three.</li>
        </ul>

        <h2>The Marketing vs Science Gap</h2>
        <p>The brands that score highest on WSAVA criteria are not the brands with the most appealing marketing. They often have ingredient lists that look less impressive on the bag than premium &quot;natural&quot; brands. This is because ingredient quality as presented on a label is not the same as nutritional quality or safety.</p>
        <p>Corn, by-products, and grains — ingredients that premium marketing frames as inferior — are not inferior from a nutritional standpoint. AAFCO feeding trials measure actual nutritional outcomes, not ingredient source aesthetics. A diet full of named single-protein sources made by a company with no veterinary nutritionists and no feeding trials is not better than a diet with &quot;chicken by-product meal&quot; made by a company that has invested decades in nutritional research.</p>

        <h2>The Bottom Line</h2>
        <p>When choosing a dog food: start with the manufacturer, not the bag. Ask the WSAVA questions or verify that the brand employs board-certified nutritionists and conducts AAFCO feeding trials. Then look at the specific formula for your dog&apos;s life stage and any health conditions. See our <a href="/reviews/best-dry-dog-food">complete dog food rankings</a> for the top options evaluated against WSAVA criteria.</p>
      </div>
    </ArticleLayout>
  )
}
