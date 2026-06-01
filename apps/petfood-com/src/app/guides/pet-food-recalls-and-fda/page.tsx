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
  title: 'Pet Food Recalls and FDA Oversight Explained | PetFood.com',
  description:
    'How pet food recalls work, the FDA CVM role, common recall causes (pathogens, vitamin D, aflatoxin), how to check the database, and what to do if affected.',
  path: '/guides/pet-food-recalls-and-fda',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Food Recalls and FDA Oversight Explained | PetFood.com',
  description:
    'How pet food recalls work, the FDA CVM role, common recall causes (pathogens, vitamin D, aflatoxin), how to check the database, and what to do if affected.',
  url: 'https://petfood.com/guides/pet-food-recalls-and-fda',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function PetFoodRecallsAndFdaPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Pet Food Recalls and the FDA',
        subtitle:
          "Pet food recalls happen, and an owner who understands how they work — what triggers them, who oversees them, and how to check — is better protected than one who relies on brand reputation alone. This page explains the FDA's role, the most common recall causes, and the practical steps to monitor recalls and respond if a food you feed is affected.",
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Pet Food Recalls and the FDA', href: '/guides/pet-food-recalls-and-fda' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Who Regulates Pet Food', href: '#regulators' },
              { label: 'How Recalls Work', href: '#howwork' },
              { label: 'Common Recall Causes', href: '#causes' },
              { label: 'Recall Classes', href: '#classes' },
              { label: 'Checking the Database', href: '#database' },
              { label: 'If Your Food Is Recalled', href: '#ifrecalled' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Pet Food Storage and Safety', href: '/feeding/food-storage-and-safety' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="pet-food-recalls-and-fda"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Pet food in the United States is overseen federally by the FDA&apos;s Center for Veterinary Medicine (FDA CVM) and enforced at the state level by feed-control officials, with AAFCO providing the model regulations states adopt. Recalls are the mechanism for removing unsafe product from the market, and they occur for contamination, formulation errors, and labeling problems. Understanding the system lets owners track recalls themselves rather than relying on news to reach them. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="regulators">Who Regulates Pet Food</h2>
        <p>FDA CVM holds federal authority over pet food safety, ingredient approval, and labeling, and can request or mandate recalls. State departments of agriculture enforce feed law within each state. AAFCO itself is not a regulator — it publishes the model regulations and nutrient profiles states adopt, and does not test, certify, or recall products. The recall authority sits with the FDA and the states. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="howwork">How Recalls Work</h2>
        <p>Most pet food recalls are voluntary, initiated by the manufacturer (sometimes at the FDA&apos;s urging) when a problem is identified through testing, inspection, complaints, or adverse-event reports. The FDA can also request a recall and, under the Food Safety Modernization Act, has mandatory recall authority if a company will not act. The manufacturer issues the recall notice with affected lot numbers and best-by dates, which is why retaining the original packaging matters. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="causes">Common Recall Causes</h2>
        <p>The most frequent recall causes are: pathogen contamination (Salmonella, Listeria — affecting raw diets and treats often, and pets and humans alike); nutrient formulation errors, notably excess vitamin D, which has caused multiple recalls and can be toxic; aflatoxin (a mold toxin in grains, which has caused fatal recalls); and foreign material or processing defects. Salmonella in raw and freeze-dried raw diets is a recurring theme. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a> and <a href="/guides/raw-pet-food-evaluation">Raw Pet Food Evaluation</a>.</p>
        <h2 id="classes">Recall Classes</h2>
        <p>The FDA classifies recalls by hazard severity: Class I (reasonable probability of serious harm or death), Class II (temporary or reversible harm, or remote probability of serious harm), and Class III (unlikely to cause harm but in violation of regulations). A Class I recall — for example, toxic vitamin D levels or a dangerous pathogen — warrants immediate action; lower classes are less urgent but still mean the product should not be fed.</p>
        <h2 id="database">Checking the Database</h2>
        <p>The FDA CVM maintains a Recalls and Withdrawals database for animal and veterinary products, updated as recalls are issued, and the FDA offers email and RSS alerts. Checking periodically, or subscribing to alerts, is the most reliable way to learn of a recall affecting a food you feed — more reliable than waiting for it to make the news. Several third parties also aggregate pet food recalls. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="ifrecalled">If Your Food Is Recalled</h2>
        <p>If a food you feed is recalled, stop feeding it immediately, check the lot number and best-by date against the recall notice (which is why keeping the original bag or can matters), follow the manufacturer&apos;s and FDA&apos;s instructions for disposal or return, watch your animal for the relevant signs, and consult your veterinarian if the animal shows symptoms or if the recall is for a serious hazard. Report adverse events to the FDA, which helps identify problems early. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>

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
