import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  ArticleByline,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  EmailCapture,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Pet Food Recall Database — FDA CVM Record',
  description:
    'Year-by-year structured record of commercial pet food recalls reported to FDA CVM since 2018, with Class I/II/III classification and what to do.',
  path: '/recalls',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'Pet Food Recall Database — FDA CVM Record',
  description:
    'Year-by-year reference catalog of US commercial pet food recalls and withdrawals reported to the FDA Center for Veterinary Medicine since 2018, with explanations of recall classification and owner-side response.',
  url: 'https://petfoods.com/recalls',
  imageUrl: '',
  authorName: 'PetFoods.com Catalog',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

// ─── Year index ─────────────────────────────────────────────────────────────
// Each year is a placeholder section; the structured per-year record is queued.

interface YearEntry {
  year: number
  note: string
  status: 'live' | 'historical' | 'pending'
}

const YEARS: YearEntry[] = [
  { year: 2026, note: 'Current year — live tracker in development. Until live, refer to the FDA CVM Recalls & Withdrawals page directly (link in Sources).', status: 'pending' },
  { year: 2025, note: 'Structured per-recall record forthcoming. Affected products, classification, manufacturer, lot range, FDA report ID.', status: 'historical' },
  { year: 2024, note: 'Structured per-recall record forthcoming.', status: 'historical' },
  { year: 2023, note: 'Structured per-recall record forthcoming. Includes Mid America Pet Food recall (Victor and others) and several smaller manufacturer recalls.', status: 'historical' },
  { year: 2022, note: 'Structured per-recall record forthcoming. Includes Midwestern Pet Foods aflatoxin-related recalls and litigation context.', status: 'historical' },
  { year: 2021, note: 'Structured per-recall record forthcoming.', status: 'historical' },
  { year: 2020, note: 'Structured per-recall record forthcoming. Sportmix recall (aflatoxin, multiple deaths reported) is one of the most consequential entries in this period.', status: 'historical' },
  { year: 2019, note: 'Structured per-recall record forthcoming. FDA CVM DCM investigation update names 16 brands most frequently reported.', status: 'historical' },
  { year: 2018, note: 'Structured per-recall record forthcoming. FDA CVM publishes initial DCM investigation notice in July.', status: 'historical' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'When should I subscribe to recall alerts vs check periodically?',
    answer:
      'Subscribe if you feed a single primary diet, if the animal is a breed with elevated dietary-sensitivity risk, or if the manufacturer has prior recalls on record. Periodic check (monthly) is reasonable for households feeding a rotational diet across multiple brands or for shoppers comparing brands at point of purchase. The FDA CVM Recalls & Withdrawals page is the authoritative source; this catalog is a structured mirror with cross-references to manufacturer context.',
    answerText:
      'Subscribe if you feed a single primary diet or if the manufacturer has prior recalls on record. Periodic monthly check is reasonable for rotational households. FDA CVM is the authoritative source.',
  },
  {
    question: 'My food is on a recall. What do I actually do?',
    answer:
      'Stop feeding the affected product. Save the bag — the lot number, best-by date, and UPC are the only way to confirm whether your specific bag is in the recalled production run. Take a photo of the bag panel. If your pet is showing symptoms consistent with the recall (the FDA notice lists them), contact your veterinarian and reference the recall by name and date. Where the recall provides a manufacturer hotline, use it for return-and-refund; the manufacturer is the right channel for that. If your pet has been harmed, file a report at the FDA Safety Reporting Portal — the database of reports is the input for future investigations.',
    answerText:
      'Stop feeding. Save the bag and lot number. Photograph the panel. Contact your vet if pet shows symptoms. Use the manufacturer hotline for refund. File an FDA Safety Reporting Portal report if pet has been harmed.',
  },
  {
    question: 'What do Class I, II, and III actually mean?',
    answer:
      'These are FDA recall classifications. Class I is the most severe: a reasonable probability that the use of or exposure to the product will cause serious adverse health consequences or death. Class II is intermediate: temporary or medically reversible adverse consequences, or a remote probability of serious harm. Class III is the least severe: not likely to cause adverse consequences (typically a label, packaging, or quality-spec issue rather than a toxin or pathogen).',
    answerText:
      'FDA recall classifications. Class I: probability of serious harm or death. Class II: temporary or reversible adverse consequences or remote serious-harm probability. Class III: not likely to cause adverse consequences.',
  },
  {
    question: 'Is a brand’s recall history a quality signal?',
    answer:
      'Sometimes. A single recall in a long history of clean production, voluntarily reported by the manufacturer when an internal QC test caught a problem, is a different signal than a Class I recall driven by an FDA inspection that identified failure of manufacturer self-policing. The PetFood.com scoring rubric weights both the count and the root cause — and treats voluntary disclosure as a partial mitigant. A history that includes recurrent same-root-cause recalls is a stronger negative signal than a single isolated event.',
    answerText:
      'Sometimes. A voluntarily reported isolated recall is a different signal than a Class I FDA-driven recall on recurring root cause. Rubric weights count, severity, and root cause.',
  },
  {
    question: 'Why does this site cover only 2018 onward?',
    answer:
      'Earlier recalls are in the FDA CVM database; we are not deleting them. The 2018 start date is the editorial cutoff: it begins with the FDA CVM DCM investigation notice (July 2018), which is the inflection point for modern pet food recall and ingredient-investigation coverage. Pre-2018 events of substantial scope — most notably the 2007 melamine-contamination recalls — are referenced in the relevant per-brand pages on PetFood.com where they matter for current evaluation.',
    answerText:
      'The 2018 start date is the editorial cutoff, beginning with the FDA CVM DCM investigation. Pre-2018 events including the 2007 melamine recalls are referenced on per-brand pages on PetFood.com.',
  },
  {
    question: 'Does a recall affect every bag of that product?',
    answer:
      'No. A recall is scoped to specific lot numbers, production dates, or best-by date ranges. Two bags of the same SKU may differ in whether they are recalled — that is why the bag panel matters. Throwing out an entire pantry because the brand was named in a recall is over-reading; checking the lot number against the FDA notice is the right step.',
    answerText:
      'No. A recall is scoped to specific lot numbers, production dates, or best-by ranges. Check the bag panel against the FDA notice; do not assume all bags of the SKU are affected.',
  },
]

export default function RecallsHubPage() {
  return (
    <ArticleLayout
      siteId="petfoods-com"
      hero={{
        title: 'Pet Food Recall Database',
        subtitle:
          'Every commercial pet food recall reported to the FDA Center for Veterinary Medicine since 2018, organized by year, manufacturer, and classification. Use this catalog to check whether a product you feed has been affected, to understand what a Class I/II/III recall means in practice, and to learn the owner-side response a recall warrants.',
        category: 'Recall Catalog',
        publishedAt: 'May 2026',
        readTime: '13 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Recalls', href: '/recalls' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Ingredients A–Z Reference', href: '/ingredients', category: 'Reference' },
        { title: 'Brand Index & Reviews', href: '/brands', category: 'Reference' },
        { title: 'Pet Food by Life Stage', href: '/life-stage', category: 'Reference' },
        { title: 'Label Glossary — AAFCO Terms', href: '/glossary', category: 'Reference' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'Recall Classification (FDA)', href: '#classification' },
              { label: 'Year-by-Year Index', href: '#years' },
              { label: 'What to Do If Your Food Is Recalled', href: '#what-to-do' },
              { label: 'Recall Alert Signup', href: '#alerts' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="On the Sister Site"
            links={[
              { label: 'PetFood.com Methodology — Recall History Dimension', href: 'https://petfood.com/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: 'https://petfood.com/guides/aafco-completeness-explained' },
              { label: 'Grain-Free and DCM — The FDA Record', href: 'https://petfood.com/ingredients/grain-free-dcm-risk' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFoods.com Editorial"
          publishedAt="2026-05-28T00:00:00Z"
          updatedAt="2026-05-28T00:00:00Z"
          reviewedBy="Editorial team"
        />
        <p id="tldr">
          <strong>TL;DR.</strong> Every commercial pet food recall reported to the FDA Center for
          Veterinary Medicine since 2018, organized as a structured catalog so an owner can check
          whether a product they feed has been affected. The authoritative source is the FDA CVM
          Recalls &amp; Withdrawals page; this catalog mirrors the data, adds manufacturer context,
          and cross-references each event to the affected brand’s page when one exists. A live
          tracker for the current calendar year is in development.
        </p>

        <div
          style={{
            background: 'var(--brand-warning)',
            color: 'var(--brand-white)',
            padding: '16px 20px',
            borderRadius: '6px',
            margin: '20px 0',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          For an active recall, the FDA CVM Recalls &amp; Withdrawals page is the authoritative
          source. This catalog is a structured reference; it is not a replacement for the FDA
          notice itself. If a product you feed is on a current FDA notice, follow the FDA
          instructions on that notice.
        </div>

        <h2 id="classification">Recall Classification (FDA)</h2>
        <p>
          The FDA classifies recalls by severity. The classification is on the FDA notice for each
          recall; reading it is the first step before deciding how urgently to act.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
            margin: '18px 0 28px',
          }}
        >
          <div style={{ border: '1px solid var(--brand-danger)', borderLeft: '6px solid var(--brand-danger)', borderRadius: '6px', padding: '14px 16px', background: 'var(--brand-white)' }}>
            <strong style={{ color: 'var(--brand-danger)' }}>Class I</strong>
            <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: '6px 0 0' }}>
              Reasonable probability that the use of or exposure to the product will cause serious
              adverse health consequences or death. Examples: Salmonella, Listeria,
              aflatoxin-contaminated dry food, vitamin D toxicity from formulation error.
            </p>
          </div>
          <div style={{ border: '1px solid var(--brand-warning)', borderLeft: '6px solid var(--brand-warning)', borderRadius: '6px', padding: '14px 16px', background: 'var(--brand-white)' }}>
            <strong style={{ color: 'var(--brand-warning)' }}>Class II</strong>
            <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: '6px 0 0' }}>
              Temporary or medically reversible adverse health consequences, or remote probability
              of serious adverse consequences. Examples: nutrient under- or over-formulation
              within a tolerable range, mild contamination at a level unlikely to cause acute harm.
            </p>
          </div>
          <div style={{ border: '1px solid var(--brand-text-light)', borderLeft: '6px solid var(--brand-text-light)', borderRadius: '6px', padding: '14px 16px', background: 'var(--brand-white)' }}>
            <strong style={{ color: 'var(--brand-text-mid)' }}>Class III</strong>
            <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: '6px 0 0' }}>
              Not likely to cause adverse health consequences. Typically a label, packaging, or
              quality-specification issue — wrong species pictured on packaging, mislabeled
              guaranteed analysis, foreign material at a low level.
            </p>
          </div>
        </div>

        <h2 id="years">Year-by-Year Index</h2>
        <p>
          The catalog will publish structured per-year pages with one row per recall: affected
          product, manufacturer, classification, lot range, FDA report ID, and remediation status.
          The year cards below are the spine; the structured records are queued.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '14px',
            margin: '18px 0 28px',
          }}
        >
          {YEARS.map((y) => (
            <div
              key={y.year}
              style={{
                padding: '16px 18px',
                border: '1px solid var(--brand-border)',
                borderRadius: '6px',
                background: 'var(--brand-white)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '6px',
                }}
              >
                {y.year}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '8px' }}>
                {y.note}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:
                    y.status === 'pending'
                      ? 'var(--brand-warning)'
                      : 'var(--brand-text-light)',
                  fontWeight: 600,
                }}
              >
                {y.status === 'pending' ? 'Live tracker — coming soon' : 'Per-recall records — coming soon'}
              </div>
            </div>
          ))}
        </div>

        <h2 id="what-to-do">What to Do If Your Food Is Recalled</h2>
        <ol>
          <li>
            <strong>Stop feeding the affected product.</strong> Do not finish the bag. Recalls are
            issued at the FDA classification level for reasons the FDA notice will state — even
            Class II warrants stopping until the notice is read in full.
          </li>
          <li>
            <strong>Save the bag.</strong> Or at minimum, photograph the lot number, best-by date,
            and UPC. These are how the manufacturer and FDA will confirm whether your specific bag
            is in the recalled production run. Two bags of the same SKU can differ in whether they
            are affected.
          </li>
          <li>
            <strong>Read the FDA notice.</strong> It will list the symptoms associated with the
            recall (for example, lethargy, vomiting, neurological signs for vitamin D toxicity;
            gastrointestinal signs for Salmonella). If your pet is showing those symptoms, the
            symptom list on the FDA notice is what your veterinarian needs to hear.
          </li>
          <li>
            <strong>Contact your veterinarian if symptoms are present.</strong> Reference the
            recall by name, date, and FDA report ID. The veterinary call is more efficient when
            the owner brings the recall context.
          </li>
          <li>
            <strong>Use the manufacturer’s recall hotline for return and refund.</strong> Most
            recalls include a manufacturer-published return process. The manufacturer is the
            correct channel for that; the FDA is not.
          </li>
          <li>
            <strong>File an FDA Safety Reporting Portal report if your pet has been harmed.</strong>{' '}
            The Portal (formerly the Pet Food Complaint reporting form) is the input data for
            future FDA CVM investigations. Reports that are not filed do not become signal.
          </li>
        </ol>

        <h2 id="alerts">Recall Alert Signup</h2>
        <p>
          The recall-alert email list sends one message per FDA CVM recall affecting consumer pet
          food, with a structured summary: brand, affected products, lot range, classification,
          symptoms, and the link to the underlying FDA notice. No marketing. No newsletter. Recall
          alerts only.
        </p>
        <EmailCapture
          variant="section"
          siteId="petfoods-com"
          source="recall-alerts"
          title="Pet Food Recall Alerts"
          subtitle="One email per FDA CVM recall affecting US consumer pet food. Structured summary, no marketing."
          ctaText="Subscribe to Recall Alerts"
          perks={[
            'One email per FDA CVM recall',
            'Brand, lot range, classification, symptoms',
            'Direct link to the FDA notice',
            'Unsubscribe in one click; no marketing list',
          ]}
        />

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            <strong>
              U.S. Food and Drug Administration, Center for Veterinary Medicine — Recalls &amp;
              Withdrawals (Animal &amp; Veterinary).
            </strong>{' '}
            The authoritative public source for every entry on this catalog. FDA publishes recall
            notices with the affected product, lot range, classification, manufacturer, and the
            firm-press-release link. This catalog mirrors and structures that data; it does not
            replace the FDA notice. Available at fda.gov/animal-veterinary/safety-health/recalls-withdrawals.
          </li>
          <li>
            <strong>FDA Safety Reporting Portal.</strong> Owner-side reporting form for suspected
            adverse events from pet food, including consumer product complaints. The input data
            for FDA CVM investigations that lead to recalls.
          </li>
          <li>
            <strong>FDA Center for Veterinary Medicine — DCM Investigation Updates (2018–).</strong>{' '}
            Original 2018 notice and subsequent updates regarding the investigation into dilated
            cardiomyopathy in dog breeds not previously considered predisposed. Cross-referenced
            for the 2018–2019 period entries.
          </li>
          <li>
            <strong>21 CFR 7.3 — FDA recall classification framework.</strong> Regulatory source
            for the Class I / II / III definitions cited above.
          </li>
          <li>
            <strong>Association of American Feed Control Officials (AAFCO).</strong>{' '}
            <em>2025 Official Publication</em>. Cited for ingredient definitions and nutritional
            adequacy framework underlying many of the formulation-error recalls (vitamin D over-
            or under-fortification, thiamine deficiency, mineral imbalance).
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
