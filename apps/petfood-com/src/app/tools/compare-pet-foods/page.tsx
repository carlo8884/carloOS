import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  ArticleByline,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { CompareTool } from './CompareTool'
import { otcBrands, dietTypes } from '../../../data/otc-brands'

const URL = 'https://petfood.com/tools/compare-pet-foods'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Compare Pet Foods — Side-by-Side on Disclosed Criteria | PetFood.com',
  description:
    'Compare 2–3 over-the-counter pet food brands or diet types side-by-side on disclosed criteria — owner, AAFCO posture, manufacturing, recalls, price band.',
  path: '/tools/compare-pet-foods',
})

// ── ItemList schema: the comparable entities (brands + diet types) ──
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'PetFood.com — Comparable Pet Food Brands and Diet Types',
  url: URL,
  numberOfItems: otcBrands.length + dietTypes.length,
  itemListElement: [
    ...otcBrands.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: `https://petfood.com/brands/${b.evaluationSlug}`,
    })),
    ...dietTypes.map((d, i) => ({
      '@type': 'ListItem',
      position: otcBrands.length + i + 1,
      name: d.name,
      url: `https://petfood.com/compare/${d.compareSlug}`,
    })),
  ],
}

// ── Table schema: the comparison criteria this tool discloses ──
const tableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about:
    'Side-by-side comparison of over-the-counter pet food brands on disclosed, WSAVA-derived criteria: corporate owner, AAFCO substantiation posture, manufacturing footprint, recall posture, formats, and descriptive price band.',
  url: URL,
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Compare Pet Foods',
  url: URL,
  applicationCategory: 'ReferenceApplication',
  applicationSubCategory: 'PetFoodComparison',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Interactive tool to compare 2–3 over-the-counter pet food brands and/or diet types side-by-side on disclosed criteria. No login. Not a ranking — a transparent comparison.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'PetFood.com Editorial', url: 'https://petfood.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to compare pet food brands side-by-side on disclosed criteria',
  description: 'Use the comparison tool to place 2–3 over-the-counter pet food brands or diet types next to each other on corporate owner, AAFCO posture, manufacturing, recall posture, and price band.',
  url: URL,
  steps: [
    {
      name: 'Select 2–3 brands or diet types to compare',
      text: 'Pick the over-the-counter brands or diet types you want to evaluate from the selection list. You can mix brands and diet types.',
    },
    {
      name: 'Read each column against the disclosed criteria',
      text: 'The tool displays corporate owner, AAFCO substantiation posture, manufacturing footprint, recall posture, available formats, and a descriptive price band for each selection. Every field is drawn from that entry\'s independent evaluation on PetFood.com.',
    },
    {
      name: 'Follow the brand link to the full evaluation',
      text: 'Click any brand name in the table header to reach its full independent evaluation, which cites primary sources including FDA CVM records, AAFCO\'s Official Publication, and the WSAVA Global Nutrition Guidelines.',
    },
    {
      name: 'Use the result as input — not as a verdict',
      text: 'This tool does not name a winner. Use the comparison to narrow your shortlist, then run candidates through the Food Cost Calculator and confirm the choice with your veterinarian for any medical or therapeutic diet.',
    },
  ],
})

const FAQS = [
  {
    question: 'Does this tool tell me the best pet food?',
    answer:
      'No. It is a transparent comparison, not a ranking. We do not name a winner. The tool lays the brands you pick next to each other on disclosed criteria — corporate owner, AAFCO substantiation posture, manufacturing footprint, recall posture, formats, and a descriptive price band — so you can weigh them yourself. Every field is drawn from that brand\'s independent evaluation; where the evaluation does not state a field, the cell shows a dash rather than a guess.',
  },
  {
    question: 'Why do some columns have no "buy" link?',
    answer:
      'Two reasons. Veterinary-channel brands (Hill\'s, Royal Canin) are sold through your veterinarian and their therapeutic diets are set clinically — we do not attach a retail buy link to those. And any column flagged for the FDA-CVM grain-free / DCM context shows a "discuss with your veterinarian" note instead of a buy link, because the diet choice there belongs with a clinician. Diet-type columns are comparison-only — a diet type has no single product to link.',
  },
  {
    question: 'What does the "editorial reading" row mean?',
    answer:
      'It is PetFood.com\'s plain-language reading of each brand against criteria derived from the WSAVA Global Nutrition Committee\'s recommendations on selecting pet foods. It is explicitly not a score, certification, or ranking, and no brand "wins." For the full reasoning, follow the brand name in the header to its independent evaluation.',
  },
  {
    question: 'Where does the data come from?',
    answer:
      'Every field is extracted from the linked brand evaluation on PetFood.com, which in turn cites primary sources — the FDA CVM recall and DCM-investigation records, AAFCO\'s Official Publication, and the WSAVA Global Nutrition Guidelines. We never infer a value the source evaluation does not state.',
  },
]

export default function ComparePetFoodsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Compare Pet Foods',
        subtitle:
          'Pick 2–3 over-the-counter brands or diet types and see them side-by-side on disclosed criteria — corporate owner, AAFCO posture, manufacturing, recalls, and price band. A transparent comparison, not a ranking.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Compare Pet Foods', href: '/tools/compare-pet-foods' },
      ]}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools' },
        { title: 'Brand Evaluations', href: '/brands' },
        { title: 'Food Type Comparisons', href: '/compare' },
        { title: 'Food Cost Calculator', href: '/tools/food-cost-calculator' },
      ]}
      schema={itemListSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The comparison tool', href: '#tool' },
              { label: 'How to read it', href: '#how-to-read' },
              { label: 'What we do not do', href: '#limits' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Reference clusters"
            links={[
              { label: 'Brand Database', href: '/brands' },
              { label: 'Food Type Comparisons', href: '/compare' },
              { label: 'Ingredients Library', href: '/ingredients' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="compare-pet-foods"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-10T00:00:00Z" updatedAt="2026-06-10T00:00:00Z" reviewedBy="Editorial team" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <p>
          This tool puts pet food brands and diet types next to each other on the criteria that
          actually differ between them and that rarely appear on the front of the bag — corporate
          owner, AAFCO substantiation posture, manufacturing footprint, recall posture, formats, and
          a descriptive price band. It is a <strong>transparent comparison, not a ranking</strong>:
          no brand &quot;wins,&quot; and every field is pulled from that brand&apos;s independent{' '}
          <Link href="/brands">evaluation</Link>. Where an evaluation does not state a field, the
          cell shows a dash rather than an assumed value.
        </p>

        <h2 id="tool">The comparison tool</h2>
        <CompareTool />

        <h2 id="how-to-read">How to read it</h2>
        <p>
          Follow any brand name in the table header to its full{' '}
          <Link href="/brands">independent evaluation</Link>, and any diet type to its{' '}
          <Link href="/compare">food-type comparison</Link>. The &quot;editorial reading&quot; row is
          PetFood.com&apos;s plain-language reading of each brand against criteria derived from the
          WSAVA Global Nutrition Committee&apos;s recommendations on selecting pet foods — explicitly
          not a score or certification. For the grain-free and DCM context, see{' '}
          <Link href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</Link>.
        </p>

        <h2 id="limits">What we do not do</h2>
        <ul>
          <li>We do not rank, score, or name a single recommended food.</li>
          <li>We do not fill empty cells — an unstated field shows a dash, never a guess.</li>
          <li>
            We do not attach a retail buy link to veterinary-channel brands or to any column flagged
            for the FDA-CVM grain-free / DCM context; those choices belong with your veterinarian.
          </li>
          <li>We never rank by commission. See our <Link href="/disclosure">affiliate disclosure</Link>.</li>
        </ul>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair this with the <Link href="/tools/food-cost-calculator">Food Cost Calculator</Link> to
          add real per-cup cost to any shortlist, and the{' '}
          <Link href="/ingredients">ingredients library</Link> for what separates the options on the
          things money cannot measure.
        </p>
      </div>
    </ArticleLayout>
  )
}
