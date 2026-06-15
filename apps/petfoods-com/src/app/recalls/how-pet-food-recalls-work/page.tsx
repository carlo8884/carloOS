import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  ArticleLayout,
  ArticleByline,
  ArticleSourcesList,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
  CalloutBox,
} from '@carloOS/ui'

// ─── Sources (primary only — FDA + AVMA + regulatory) ───────────────────────
// Mirrored 1:1 into the article `citation` schema via buildArticleSchema.
// Every entry is a primary or authoritative source per QC-STANDARDS.md §1.

const SOURCES = [
  {
    label: 'FDA — Animal & Veterinary: Outbreaks and Advisories',
    url: 'https://www.fda.gov/animal-veterinary/news-events/outbreaks-and-advisories',
    publisher: 'U.S. Food and Drug Administration',
  },
  {
    label: 'FDA — Recalls & Withdrawals (Animal & Veterinary)',
    url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
    publisher: 'U.S. Food and Drug Administration',
  },
  {
    label: 'FDA Safety Reporting Portal — report a pet food problem',
    url: 'https://www.safetyreporting.hhs.gov/',
    publisher: 'U.S. Department of Health & Human Services',
  },
  {
    label: 'AVMA — Recalls & Alerts',
    url: 'https://www.avma.org/news/recalls-alerts',
    publisher: 'American Veterinary Medical Association',
  },
  {
    label: '21 CFR 7.3 — FDA recall classification framework (Class I / II / III)',
    url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-7/subpart-A/section-7.3',
    publisher: 'Code of Federal Regulations',
  },
]

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'How Pet Food Recalls Work — And How to Check | PetFoods.com',
  description:
    'How pet food recalls work: official FDA and AVMA sources to check, common causes, Class I/II/III meaning, how to tell if your bag is affected, and what to do.',
  path: '/recalls/how-pet-food-recalls-work',
  type: 'article',
})

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'Where is the official list of current pet food recalls?',
    answer:
      'The authoritative source is the FDA Animal & Veterinary program — the Outbreaks and Advisories page and the Recalls & Withdrawals page. Both publish the affected products, lot ranges, classification, manufacturer, and the firm press-release link. The AVMA Recalls & Alerts page is a useful secondary aggregator that links back to the FDA notice. Any third-party recall list (including this site) is a structured mirror, not a replacement for the FDA notice itself.',
  },
  {
    question: 'What are the most common reasons pet food is recalled?',
    answer:
      'The recurring categories are: pathogen contamination — Salmonella or Listeria monocytogenes, which is more frequently associated with raw and freeze-dried diets; vitamin D toxicity from a formulation or over-supplementation error; low thiamine (vitamin B1) in some products, more often seen in canned cat food; and aflatoxin, a mold toxin that can contaminate grain-based ingredients such as corn. Through 2026, pathogen contamination in raw and freeze-dried products and vitamin D over-supplementation have been recurring causes qualitatively, but the specific products change over time — always check the current FDA notice.',
  },
  {
    question: 'What do Class I, Class II, and Class III recalls mean?',
    answer:
      'These are FDA recall classifications defined in 21 CFR 7.3. Class I is the most serious: a reasonable probability that use of or exposure to the product will cause serious adverse health consequences or death (for example, Salmonella, aflatoxin, or a vitamin D overdose). Class II is intermediate: temporary or medically reversible adverse consequences, or a remote probability of serious harm. Class III is the least serious: not likely to cause adverse consequences — typically a labeling, packaging, or quality-specification issue.',
  },
  {
    question: 'How do I know if my specific bag is part of a recall?',
    answer:
      'A recall is scoped to specific lot codes, best-by or production dates, and sometimes UPC numbers — not to every bag of the product. The FDA notice and the manufacturer press release list the exact codes. Find the lot code and best-by date printed on the bag (usually on a back or bottom panel or a crimped seam) and the UPC barcode, then compare them against the notice. Two bags of the same product can differ in whether they are affected, so check the printed codes rather than assuming.',
  },
  {
    question: 'What should I do if my pet food is recalled?',
    answer:
      'Stop feeding the product immediately. Save the packaging — or at minimum photograph the lot code, best-by date, and UPC — because those confirm whether your bag is in the recalled run. Read the FDA notice for the associated symptoms. If your pet is showing those signs or you are concerned, contact your veterinarian and reference the recall. Use the manufacturer hotline on the notice for return and refund. If your pet has been harmed, file a report with the FDA Safety Reporting Portal, which is the input data for future investigations.',
  },
  {
    question: 'Should I subscribe to recall alerts or just check periodically?',
    answer:
      'Both are reasonable. Subscribing to FDA or AVMA recall alerts is sensible if you feed a single primary diet, feed a raw or freeze-dried product, or your brand has a prior recall history. A periodic check — monthly is a practical cadence — is reasonable for households feeding a rotation of brands. The FDA Outbreaks and Advisories and Recalls & Withdrawals pages are the authoritative places to check.',
  },
  {
    question: 'How can I reduce the risk of a recall affecting my pet?',
    answer:
      'Risk cannot be eliminated, but it can be lowered. Buy from manufacturers with transparent sourcing and a clean or well-handled recall history; store food properly and observe best-by dates; practice strict hygiene with raw and freeze-dried diets, which carry higher pathogen risk; keep the original packaging (or a photo of the lot panel) until the bag is finished so you can check codes quickly; and discuss any diet — especially raw — with your veterinarian, particularly for immunocompromised pets or households with young children, elderly, or immunocompromised people.',
  },
]

// ─── Schema (Article + citation, FAQPage, Breadcrumb) ───────────────────────

const articleSchema = buildArticleSchema({
  siteId: 'petfoods-com',
  title: 'How Pet Food Recalls Work — And How to Check',
  description:
    'An evergreen reference on how pet food recalls work: the official FDA and AVMA sources to check, the common causes, the FDA Class I/II/III classification, how to confirm whether a specific bag is affected, and the owner-side response a recall warrants.',
  url: 'https://petfoods.com/recalls/how-pet-food-recalls-work',
  imageUrl: '',
  authorName: 'PetFoods.com Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
  citation: SOURCES,
})

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answer })),
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfoods.com' },
    { name: 'Recalls', url: 'https://petfoods.com/recalls' },
    {
      name: 'How Pet Food Recalls Work',
      url: 'https://petfoods.com/recalls/how-pet-food-recalls-work',
    },
  ],
})

const combinedSchema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HowPetFoodRecallsWorkPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="petfoods-com"
        hero={{
          title: 'How Pet Food Recalls Work — And How to Check',
          subtitle:
            'An evergreen guide to the pet food recall system: which official sources to check, what causes most recalls, what the FDA Class I/II/III classifications mean, how to confirm whether your specific bag is affected, and exactly what to do if it is.',
          category: 'Recall Reference',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Recalls', href: '/recalls' },
          { name: 'How Pet Food Recalls Work', href: '/recalls/how-pet-food-recalls-work' },
        ]}
        relatedLinks={[
          { title: 'Pet Food Recall Database', href: '/recalls', category: 'Hub' },
          { title: 'Ingredients A–Z Reference', href: '/ingredients', category: 'Reference' },
          { title: 'Brand Index & Reviews', href: '/brands', category: 'Reference' },
          { title: 'Label Glossary — AAFCO Terms', href: '/glossary', category: 'Reference' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Where to Check (Official Sources)', href: '#sources' },
                { label: 'Common Recall Causes', href: '#causes' },
                { label: 'Recall Classes (I / II / III)', href: '#classes' },
                { label: 'Is My Bag Affected?', href: '#my-bag' },
                { label: 'What to Do If Recalled', href: '#what-to-do' },
                { label: 'Reducing Risk', href: '#reduce-risk' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources-list' },
              ]}
            />
            <RelatedLinks
              title="Recall Reference"
              links={[
                { label: 'Pet Food Recall Database', href: '/recalls' },
                { label: 'Ingredient Catalog (A–Z)', href: '/ingredients' },
                { label: 'Brand Index (A–Z)', href: '/brands' },
                { label: 'Label Glossary', href: '/glossary' },
              ]}
            />
            <CrossPortfolioCard
              currentSite="petfoods-com"
              contentType="brand"
              variant="sidebar"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="PetFoods.com Editorial"
            publishedAt="2026-06-15T00:00:00Z"
            updatedAt="2026-06-15T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <p id="tldr">
            <strong>TL;DR.</strong> A pet food recall is a manufacturer or
            FDA-driven removal of a product from the market, almost always tied
            to specific lot codes and date ranges rather than to every bag ever
            made. The authoritative places to check are the FDA Animal &amp;
            Veterinary{' '}
            <a href="https://www.fda.gov/animal-veterinary/news-events/outbreaks-and-advisories" rel="noopener noreferrer nofollow" target="_blank">
              Outbreaks and Advisories
            </a>{' '}
            page and the AVMA{' '}
            <a href="https://www.avma.org/news/recalls-alerts" rel="noopener noreferrer nofollow" target="_blank">
              Recalls &amp; Alerts
            </a>{' '}
            page. The most common causes are pathogen contamination
            (Salmonella, Listeria), vitamin D toxicity, low thiamine, and
            aflatoxin. To know if your bag is affected, match the lot code,
            best-by date, and UPC against the notice. If it is recalled: stop
            feeding, save the packaging, read the FDA notice, and contact your
            veterinarian if your pet shows symptoms.
          </p>

          <CalloutBox variant="warning" title="For an active recall, the FDA notice is the source of truth">
            This page explains how the recall system works. For any specific,
            current recall, the FDA Recalls &amp; Withdrawals and Outbreaks and
            Advisories pages are the authoritative source — follow the
            instructions on the FDA notice itself, not a third-party summary.
          </CalloutBox>

          <h2 id="sources">Where to Check — The Official Sources</h2>
          <p>
            There are two authoritative, free sources every owner should know.
            They are kept current by the agencies themselves, so they do not go
            stale the way a hand-maintained list can.
          </p>
          <ul>
            <li>
              <strong>FDA — Animal &amp; Veterinary, Outbreaks and Advisories.</strong>{' '}
              The U.S. Food and Drug Administration publishes outbreak
              investigations and consumer advisories for pet food and treats
              here, including emerging issues that have not yet become a formal
              recall. Available at{' '}
              <a href="https://www.fda.gov/animal-veterinary/news-events/outbreaks-and-advisories" rel="noopener noreferrer nofollow" target="_blank">
                fda.gov/animal-veterinary/news-events/outbreaks-and-advisories
              </a>
              .
            </li>
            <li>
              <strong>FDA — Recalls &amp; Withdrawals (Animal &amp; Veterinary).</strong>{' '}
              The formal record of recalls, with affected products, lot ranges,
              classification, manufacturer, and the firm press-release link. It
              is the structured catalog this site mirrors.
            </li>
            <li>
              <strong>AVMA — Recalls &amp; Alerts.</strong> The American
              Veterinary Medical Association maintains a recall and alert feed
              that links back to the underlying FDA and manufacturer notices.
              Available at{' '}
              <a href="https://www.avma.org/news/recalls-alerts" rel="noopener noreferrer nofollow" target="_blank">
                avma.org/news/recalls-alerts
              </a>
              .
            </li>
            <li>
              <strong>FDA Safety Reporting Portal.</strong> Not a list to check,
              but the place to <em>report</em> a suspected problem with a pet
              food. Owner reports are the input data that drive FDA
              investigations and, ultimately, recalls.
            </li>
          </ul>
          <p>
            Both FDA pages and the AVMA feed offer the ability to subscribe to
            email or RSS alerts. For most households, subscribing to one alert
            feed plus a monthly manual check is sufficient.
          </p>

          <h2 id="causes">The Common Recall Causes</h2>
          <p>
            Most pet food recalls fall into a small number of recurring
            categories. Understanding them helps you read a notice and judge how
            seriously to treat it.
          </p>
          <ul>
            <li>
              <strong>Pathogen contamination (Salmonella, Listeria).</strong>{' '}
              Bacterial contamination — most commonly{' '}
              <em>Salmonella</em> and <em>Listeria monocytogenes</em> — is a
              frequent cause. It is more often associated with raw and
              freeze-dried diets, which are not subjected to a kill step like
              extrusion cooking. Contaminated product can also pose a risk to
              the people handling it, not just the pet.
            </li>
            <li>
              <strong>Vitamin D toxicity.</strong> A formulation or
              over-supplementation error can put far too much vitamin D in a
              finished food. Excess vitamin D is toxic and can cause kidney
              damage; recalls on this basis have recurred across multiple
              manufacturers over the years.
            </li>
            <li>
              <strong>Low thiamine (vitamin B1).</strong> Some products,
              particularly certain canned cat foods, have been recalled for
              inadequate thiamine. Thiamine deficiency can cause neurological
              signs in cats.
            </li>
            <li>
              <strong>Aflatoxin.</strong> Aflatoxin is a toxin produced by molds
              (<em>Aspergillus</em> species) that can contaminate grain
              ingredients such as corn. Aflatoxin recalls have historically been
              among the more serious, because the toxin can cause liver damage.
            </li>
          </ul>
          <p>
            Qualitatively, pathogen contamination in raw and freeze-dried
            products and vitamin D over-supplementation have been recurring
            recall causes through 2026. The specific affected products change
            over time, which is why the FDA notice — not a dated list — is the
            thing to check for any current event.
          </p>

          <h2 id="classes">Recall Classes — What I, II, and III Mean</h2>
          <p>
            The FDA assigns every recall a class, defined in 21 CFR 7.3. The
            class is on the notice and is the first signal of how urgently to
            act.
          </p>
          <ul>
            <li>
              <strong>Class I.</strong> The most serious. A reasonable
              probability that use of or exposure to the product will cause
              serious adverse health consequences or death. Pathogen
              contamination, aflatoxin, and vitamin D overdose recalls are
              typically Class I.
            </li>
            <li>
              <strong>Class II.</strong> Intermediate. Temporary or medically
              reversible adverse health consequences, or a remote probability of
              serious harm — for example, a nutrient out of specification within
              a tolerable range.
            </li>
            <li>
              <strong>Class III.</strong> The least serious. Not likely to cause
              adverse health consequences — typically a labeling, packaging, or
              quality-specification issue rather than a toxin or pathogen.
            </li>
          </ul>

          <h2 id="my-bag">Is My Bag Actually Affected?</h2>
          <p>
            A recall is almost never &ldquo;all bags of this product.&rdquo; It
            is scoped to a defined production run, identified by:
          </p>
          <ul>
            <li>
              <strong>Lot code (lot number).</strong> A production-batch
              identifier printed on the package — usually on a back or bottom
              panel, or stamped on a crimped seam. This is the single most
              important field on a recall notice.
            </li>
            <li>
              <strong>Best-by / use-by / production date.</strong> Recalls
              frequently scope to a date range; your bag&rsquo;s printed date
              tells you whether it falls inside.
            </li>
            <li>
              <strong>UPC.</strong> The barcode number identifies the exact
              product and size; some notices list affected UPCs to distinguish
              package sizes or variants.
            </li>
          </ul>
          <p>
            Compare the lot code, date, and UPC on your bag against the codes
            listed in the FDA notice or manufacturer press release. If they do
            not match the recalled run, your bag is generally not part of the
            recall — but when in doubt, the manufacturer hotline on the notice
            can confirm. Do not throw out an entire pantry simply because the
            brand was named; check the printed codes.
          </p>

          <h2 id="what-to-do">What to Do If Your Food Is Recalled</h2>
          <ol>
            <li>
              <strong>Stop feeding the affected product.</strong> Do not finish
              the bag, even for a Class II or III recall, until you have read
              the notice in full.
            </li>
            <li>
              <strong>Save the packaging — or photograph it.</strong> Capture
              the lot code, best-by date, and UPC. These confirm whether your
              specific bag is in the recalled run and are needed for any
              return, refund, or report.
            </li>
            <li>
              <strong>Read the FDA notice.</strong> It lists the associated
              symptoms (for example, vomiting and diarrhea for Salmonella;
              lethargy, increased thirst, and vomiting for vitamin D toxicity).
              That symptom list is what your veterinarian needs to hear.
            </li>
            <li>
              <strong>Contact your veterinarian if your pet shows symptoms</strong>{' '}
              — or if you are concerned. Reference the recall by name and date.
              Health decisions about your individual pet are for your
              veterinarian to make.
            </li>
            <li>
              <strong>Use the manufacturer hotline for return and refund.</strong>{' '}
              The notice usually includes a manufacturer contact and a
              return-and-refund process; the manufacturer, not the FDA, is the
              channel for that.
            </li>
            <li>
              <strong>Report harm to the FDA Safety Reporting Portal.</strong>{' '}
              If your pet has been harmed, filing a report adds to the data the
              FDA uses for future investigations. Reports that are never filed
              never become signal.
            </li>
          </ol>

          <h2 id="reduce-risk">Reducing Your Risk</h2>
          <p>
            No diet is recall-proof, but a few habits lower the odds and shorten
            your response time:
          </p>
          <ul>
            <li>
              Favor manufacturers with transparent sourcing and a clean — or
              well-handled — recall history. A single voluntarily disclosed
              recall is a different signal than a recurring same-cause pattern.
            </li>
            <li>
              Store food properly and observe best-by dates; improper storage
              can encourage mold growth (the aflatoxin pathway).
            </li>
            <li>
              Practice strict hygiene with raw and freeze-dried diets, which
              carry higher pathogen risk — and discuss those diets with your
              veterinarian, especially in households with young children,
              elderly, or immunocompromised people.
            </li>
            <li>
              Keep the original packaging (or a photo of the lot panel) until the
              bag is finished, so you can check codes against a notice in
              seconds.
            </li>
            <li>
              Subscribe to one recall alert feed (FDA or AVMA) and do a brief
              monthly check of the FDA Outbreaks and Advisories page.
            </li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <div id="sources-list">
            <ArticleSourcesList sources={SOURCES} />
          </div>

          <CrossPortfolioCard
            currentSite="petfoods-com"
            contentType="brand"
            variant="footer"
          />
        </div>
      </ArticleLayout>
    </>
  )
}
