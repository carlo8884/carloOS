import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleByline, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog DNA Tests: What They Actually Tell You (2026)',
  description: 'How dog DNA tests work, how accurate breed ID really is, what health panels can and cannot screen for, and Embark vs Wisdom Panel compared.',
  path: '/nutrition/dog-dna-tests',
  type: 'article',
})

const FAQS = [
  {
    question: 'Are dog DNA tests accurate?',
    answer: 'For breed identification, the leading consumer tests are generally reliable at identifying major breed ancestry in a mixed-breed dog, and accuracy improves as the reference databases the companies compare against grow larger. They are weaker at fine distinctions — pinpointing exact percentages, distinguishing closely related breeds, or resolving very small ancestry fractions, where results can shift between companies or between updates. For health and genetic-screening results, accuracy depends on the specific variant: a test can reliably detect whether a known mutation is present, but detecting a mutation is not the same as predicting whether or when disease will develop. Treat breed percentages as a strong estimate and any health finding as a starting point for a veterinary conversation, not a diagnosis.',
  },
  {
    question: 'How do dog DNA tests work?',
    answer: 'You collect a cheek-swab sample at home and mail it to the lab, which extracts DNA and genotypes it at hundreds of thousands of genetic markers. Software compares your dog\'s markers against a reference panel of known purebred dogs to estimate breed ancestry, and screens specific locations for known disease-associated variants. The size and quality of that reference panel is a major driver of how good the breed call is — which is part of why results can differ between providers and why companies periodically re-analyze old samples as their databases grow.',
  },
  {
    question: 'Can a DNA test tell me if my dog will get sick?',
    answer: 'Not with certainty. A genetic-screening panel can tell you whether your dog carries known variants associated with certain inherited conditions, but most diseases are influenced by multiple genes plus environment, so carrying a variant is a risk signal — not a verdict. Some results are clinically actionable (for example, the MDR1 variant that affects how some dogs process certain drugs), while others are informational only. Crucially, consumer panels do not screen for everything, so a clean result is not a clean bill of health. Always review any health-related finding with your veterinarian before acting on it.',
  },
  {
    question: 'Embark vs Wisdom Panel — which is better?',
    answer: 'Both are established consumer dog-DNA brands that offer breed identification and health-screening tiers, and both are reasonable choices; the "better" one depends on what you want. As a category, the trade-offs owners weigh are reference-database size and the breadth of the health panel, the depth of breed and relative-finder features, whether you need a basic breed-only tier or a comprehensive health screen, and price. Compare the specific tier you are considering on the number of genetic conditions screened, breed-database breadth, and what is actually included, rather than relying on the brand name alone. Dog.com does not take affiliate commissions on test kits, and this comparison is editorial.',
  },
  {
    question: 'Should I tell my vet about my dog\'s DNA results?',
    answer: 'Yes, especially for any health-related finding. Bring the report to your veterinarian, who can interpret a variant in the context of your dog\'s breed, age, symptoms, and overall health, and decide whether confirmatory testing or a change in care is warranted. This matters most for clinically actionable results like drug-sensitivity variants. Your vet can also tell you when a positive screen needs a confirmatory diagnostic test before any treatment decision is made.',
  },
]

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog DNA Tests: What They Actually Tell You',
  description: 'A calibrated guide to dog DNA tests — how they work, breed-ID accuracy, the limits of health panels, and how Embark and Wisdom Panel compare.',
  url: 'https://dog.com/nutrition/dog-dna-tests',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
})
const faqSchema = buildFAQSchema({ questions: FAQS })
const schema = combineSchemas(articleSchema, faqSchema)

export default function DogDnaTestsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{ title: 'Dog DNA Tests: What They Actually Tell You', subtitle: 'At-home dog DNA kits are one of the most-searched pet topics online — and one of the most over-promised. Here is the calibrated picture: how the tests work, how good breed identification really is, what health and genetic-screening panels can and cannot tell you, how Embark and Wisdom Panel compare, and when to involve your veterinarian.', category: 'Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Dog DNA Tests', href: '/nutrition/dog-dna-tests' }]}
      relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'Dog Breed Guide', href: '/breeds', category: 'Breeds' }, { title: 'DNA Testing Overview', href: '/dna-testing', category: 'Guide' }, { title: 'Is Fresh Dog Food Worth It?', href: '/reviews/fresh-dog-food-worth-it', category: 'Reviews' }, { title: 'Weight Management', href: '/nutrition/weight-management', category: 'Nutrition' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'The Short Answer', href: '#short' }, { label: 'How the Tests Work', href: '#how' }, { label: 'Breed-ID Accuracy', href: '#accuracy' }, { label: 'Health Panels & Their Limits', href: '#health' }, { label: 'Embark vs Wisdom Panel', href: '#compare' }, { label: 'What to Do With Results', href: '#now' }]} />
        <RelatedLinks title="Related" links={[{ label: 'Dog Breed Guide', href: '/breeds' }, { label: 'DNA Testing Overview', href: '/dna-testing' }, { label: 'Is Fresh Dog Food Worth It?', href: '/reviews/fresh-dog-food-worth-it' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-dna-tests" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog DNA-test checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog DNA-test checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-cheek-swab-chart,
            fridge-breed-estimate-card, and
            canine-mdr1-vet-handbook notes
            that match the cheek-swab-map,
            breed-estimate-log, and
            mdr1-vet-grounding copy on this
            page — a laminated dog cheek-swab chart so
            the at-home mail-in steps are posted on
            the fridge (not an eight-week-trial chart,
            not a NASC-seal chart, not a
            raw-salmonella chart), a dog fridge
            breed-estimate card so major-ancestry /
            soft-percentage notes are labeled on the
            fridge (not an itch-score card, not an
            EPA-DHA card, not a zoonotic-risk card),
            and a canine MDR1-vet handbook so the
            drug-sensitivity / bring-the-report
            grounding is a physical kitchen book (not
            a food-challenge handbook, not a fish-oil
            handbook, not an HPP-raw handbook).
            Educational kitchen checklist, not a
            ranked clinic list, not an Embark /
            Wisdom Panel kit hop, not a first-aid-kit
            hop, and not a substitute for a
            veterinarian. Dog.com does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog DNA-test checklist"
            subtitle="Email the cheek-swab chart, fridge breed-estimate card, and MDR1-vet-handbook notes. No spam."
            ctaText="Email my dog DNA-test checklist"
            source="nutrition-dna-tests-under-hero"
          />
        </div>

        <h2 id="short">The Short Answer</h2>
        <p>Dog DNA tests are genuinely useful for one thing — estimating a mixed-breed dog&apos;s ancestry — and partially useful for another: flagging known genetic variants. <strong>What they are not is a crystal ball.</strong> A breed result is a strong estimate, not a certificate; a health panel detects specific known mutations, not your dog&apos;s entire future health. Used with that framing, the tests are a fun and occasionally clinically helpful tool. Used as a diagnosis, they can mislead.</p>
        <p>This guide separates what these kits reliably deliver from what their marketing implies — and shows where your <a href="/breeds">breed</a> knowledge and your veterinarian still matter more than a swab.</p>

        <h2 id="how">How Dog DNA Tests Actually Work</h2>
        <p>The mechanics are consistent across the major consumer brands:</p>
        <ul>
          <li><strong>You collect a cheek swab</strong> at home and mail it back. No blood draw, no vet visit required for the sample itself.</li>
          <li><strong>The lab genotypes hundreds of thousands of markers.</strong> Rather than reading your dog&apos;s whole genome letter by letter, the test checks a large set of pre-selected genetic positions known to vary between dogs.</li>
          <li><strong>Breed ancestry is estimated by comparison.</strong> Software matches your dog&apos;s markers against a reference panel of confirmed purebred dogs. The bigger and cleaner that reference panel, the better the breed call — which is why results can differ between companies and why labs sometimes re-analyze old samples as their databases grow.</li>
          <li><strong>Health screening checks specific variants.</strong> The panel looks at known disease-associated positions to report whether your dog carries those particular variants.</li>
        </ul>
        <p>The key takeaway: a DNA test is a comparison and a lookup, not an oracle. Its quality is bounded by the reference data and the list of variants the company chose to include.</p>

        <h2 id="accuracy">How Accurate Is Breed Identification?</h2>
        <p>Breed ID is where these tests are strongest — with caveats:</p>
        <ul>
          <li><strong>Major ancestry is usually reliable.</strong> For a typical mixed-breed dog, the leading tests are generally good at identifying the main breeds in the mix, and they have improved as reference databases have expanded.</li>
          <li><strong>Exact percentages are softer.</strong> The headline &ldquo;37% this, 12% that&rdquo; breakdown is an estimate. Small fractions, very recent crossbreeding, and closely related breeds are harder to resolve, and the fine print can shift between providers or between database updates.</li>
          <li><strong>Closely related breeds can blur.</strong> Breeds that share recent ancestry are the hardest to tell apart, so a result may name a plausible relative rather than the exact breed.</li>
        </ul>
        <p>For most owners, the practical value is directional: knowing your dog is largely herding-breed or largely scenthound tells you something real about likely energy and temperament — context our <a href="/breeds">breed guide</a> can help you act on. Treat the precise percentages as interesting, not authoritative.</p>

        <h2 id="health">Health & Genetic-Screening Panels — and Their Limits</h2>
        <p>The health tier is where calibration matters most, because the gap between &ldquo;detected a variant&rdquo; and &ldquo;will get sick&rdquo; is wide:</p>
        <ul>
          <li><strong>A panel detects known variants — not all disease.</strong> It checks specific, pre-chosen mutations. Many conditions are influenced by multiple genes plus environment, so most results are risk signals, not predictions.</li>
          <li><strong>Some findings are genuinely actionable.</strong> The clearest example is the MDR1 (drug-sensitivity) variant, which can change how a dog should be dosed for certain medications — worth knowing and worth sharing with your vet.</li>
          <li><strong>A clean panel is not a clean bill of health.</strong> Consumer panels do not screen for everything. A negative result means &ldquo;none of the variants we tested were found,&rdquo; not &ldquo;your dog is genetically healthy.&rdquo;</li>
          <li><strong>Positive screens may need confirmation.</strong> A flagged variant often warrants a confirmatory diagnostic test before any treatment decision — a call for your veterinarian, not the report.</li>
        </ul>
        <p>None of this makes health panels worthless; a drug-sensitivity flag or a known inherited-condition carrier status can be valuable. It means the report is an input to a veterinary conversation, not a substitute for one. As with any health question, consult your veterinarian before acting on a result.</p>

        <h2 id="compare">Embark vs Wisdom Panel: The Category Comparison</h2>
        <p>The two best-known consumer dog-DNA brands are <strong>Embark</strong> and <strong>Wisdom Panel</strong>. Both offer breed identification and health-screening tiers, both are credible, and the right pick depends on what you want rather than on the logo. The factual axes to compare:</p>
        <ul>
          <li><strong>Reference-database breadth.</strong> A larger, well-curated reference panel tends to sharpen breed calls. Both brands maintain large databases; compare the current figures for the specific products you are weighing.</li>
          <li><strong>Health-panel depth.</strong> The number of genetic conditions screened varies by brand and by tier. If health screening is your priority, compare the count and content of conditions covered, not just the marketing.</li>
          <li><strong>Features beyond breed and health.</strong> Relative-finder, trait, and ancestry-depth features differ. Decide which you actually care about.</li>
          <li><strong>Tier and price fit.</strong> Both sell a basic breed-focused option and a more comprehensive breed-plus-health option. Match the tier to your goal — curiosity versus clinical screening — and compare prices at that tier.</li>
        </ul>
        <p><em>Dog.com does not earn affiliate commissions on DNA test kits, and this comparison is editorial.</em> The honest bottom line: for most owners either brand will answer the breed question well, and the deciding factor is usually health-panel scope and price for the tier you want.</p>

        <h2 id="now">What to Do With Your Results</h2>
        <p>A few calibrated next steps once the report lands:</p>
        <ol>
          <li><strong>Use breed results as context, not destiny.</strong> Let likely ancestry inform exercise, training, and what to watch for — cross-reference the <a href="/breeds">breed guide</a> — without treating percentages as exact.</li>
          <li><strong>Flag any health finding to your veterinarian.</strong> Especially drug-sensitivity variants like MDR1. Your vet interprets a result in the context of your individual dog.</li>
          <li><strong>Do not change diet or medication off a report alone.</strong> Nutrition and treatment decisions still run through your vet — see our <a href="/nutrition/prescription-diets">prescription diets</a> guide for how clinical diets are actually chosen, and our <a href="/reviews/fresh-dog-food-worth-it">fresh dog food</a> guide if a result has you rethinking food.</li>
          <li><strong>Keep expectations honest.</strong> The test is a useful estimate and a partial screen — a strong tool when you remember its limits.</li>
        </ol>
        <p>For a broader look at how DNA testing fits into responsible dog ownership, see our <a href="/dna-testing">DNA testing overview</a>.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} />

        <p className="text-sm text-gray-500 mt-8"><em>This article is general educational information from the Dog.com editorial team and is not veterinary advice. Test capabilities and database sizes reflect publicly reported information as of June 2026 and may change; figures are described qualitatively where exact numbers vary by provider and tier. Always consult your veterinarian before acting on any genetic-screening result.</em></p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Money path — live amazon-brand search hops
            (laminated dog cheek-swab chart /
            dog fridge breed-estimate card /
            canine MDR1-vet handbook).
            No existing product hop to keep.
            Educational kitchen searches only; no Rx /
            vaccine / flea / heartworm / nsaid hops
            and no Embark / Wisdom Panel kit hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs elimination-diet /
            dog-supplements / raw-diet-risks hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the dog DNA-test kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page cheek-swab-map,
            breed-estimate-log, and
            mdr1-vet-grounding copy — a
            laminated dog cheek-swab chart, a
            dog fridge breed-estimate card, and a
            canine MDR1-vet handbook.
            Educational kitchen searches only. They are
            not a ranked clinic list, they are not
            an elimination-diet / dog-supplements /
            raw-diet-risks hop, they are not an
            Embark / Wisdom Panel kit hop, they are
            not a first-aid-kit hop, they are not a
            child toothbrush hop, and they do not
            replace a veterinarian. Dog.com does not
            sell insurance. Dog.com earns a commission
            on qualifying purchases at no extra cost
            to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+cheek+swab+chart?s=nutrition-dna-tests"
              amazonLabel="Browse laminated dog cheek-swab charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+breed+estimate+card?s=nutrition-dna-tests"
              amazonLabel="Browse dog fridge breed-estimate cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+mdr1+vet+handbook?s=nutrition-dna-tests"
              amazonLabel="Browse canine MDR1-vet handbooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
