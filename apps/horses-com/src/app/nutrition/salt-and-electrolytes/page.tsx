import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Salt and Electrolytes for Horses — Daily Salt & Replacing Sweat Loss",
  description:
    "Reference guide to equine salt and electrolytes: why every horse needs daily salt, what electrolytes do, when to supplement, and how to use them safely.",
  path: '/nutrition/salt-and-electrolytes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Salt and Electrolytes for Horses — Daily Salt & Replacing Sweat Loss",
  description:
    "Reference guide to equine salt and electrolytes: why every horse needs daily salt, what electrolytes do, when to supplement, and how to use them safely.",
  url: 'https://horses.com/nutrition/salt-and-electrolytes',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Does every horse need salt?",
    answer:
      "Yes. Sodium and chloride are essential nutrients that forage is usually too low in to meet a horse's baseline needs, and salt drives the thirst that maintains water intake. Every horse should have access to salt, and many do better with a measured daily amount of loose salt in feed, which is consumed more reliably than a salt block.",
    answerText:
      "Yes -- forage is too low in salt to meet baseline needs, and salt drives the thirst that keeps horses drinking. Provide access plus often a measured daily loose-salt amount in feed.",
  },
  {
    question: "When does a horse need electrolytes beyond salt?",
    answer:
      "Horses in hard or prolonged work, especially in heat and humidity, and after heavy sweating from competition or hot-weather exertion benefit from added electrolytes to replace what salty sweat removes. Idle horses in cool weather generally need only baseline salt. Always provide water alongside any electrolyte supplement.",
    answerText:
      "After heavy sweating and during hard or prolonged work in heat -- to replace what salty sweat removes. Idle horses in cool weather need only baseline salt. Always give water alongside.",
  },
  {
    question: "Why isn't plain water enough after a horse sweats heavily?",
    answer:
      "Equine sweat is saltier than body fluids, so a sweating horse loses proportionally more electrolytes than water and can lose the urge to drink even while dehydrated. Plain water dilutes the body further without replacing the lost salts, so heavy sweat losses need both water and electrolyte replacement to restore balance.",
    answerText:
      "Equine sweat is saltier than body fluids, so heavy sweating loses more salts than water and can suppress thirst. Plain water alone does not replace the lost salts; both water and electrolytes are needed.",
  },
]

export default function SaltElectrolytesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Water Requirements', href: '/nutrition/water-requirements' },
          { title: 'Summer Heat Care', href: '/care/summer-heat-care' },
          { title: 'Feeding the Performance Horse', href: '/nutrition/feeding-the-performance-horse' },
        ]}
        hero={{
          title: "Salt and Electrolytes for Horses",
          subtitle:
            "Salt is the one supplement nearly every horse genuinely needs, and electrolytes are the difference between a working horse that recovers well and one that ties up or stops drinking. Equine sweat is unusually salty, so hard work in the heat creates real electrolyte deficits that forage and a salt block alone may not cover. This guide explains daily salt, sweat replacement, and safe use. This is reference material to inform feeding alongside professional advice.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Salt and Electrolytes", href: '/nutrition/salt-and-electrolytes' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Salt Matters", href: "#salt" },
            { label: "What Electrolytes Do", href: "#electrolytes" },
            { label: "Equine Sweat Is Salty", href: "#sweat" },
            { label: "When to Supplement", href: "#when" },
            { label: "Using Electrolytes Safely", href: "#safe" },
            { label: "Salt and Electrolyte Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Water Requirements", href: "/nutrition/water-requirements" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
              { label: "Feeding the Performance Horse", href: "/nutrition/feeding-the-performance-horse" },
              { label: "Tying-Up", href: "/health/tying-up" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-salt"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="salt">Why Salt Matters</h2>
          <p>Sodium and chloride -- common salt -- are essential nutrients that forage is usually too low in to meet a horse&apos;s baseline needs, even before any sweating. Adequate salt drives the thirst that maintains water intake, supports nerve and muscle function, and underpins the body&apos;s fluid balance. Every horse should have access to salt, and many benefit from a measured daily amount of loose salt added to feed, which is more reliably consumed than a salt block alone.</p>

          <h2 id="electrolytes">What Electrolytes Do</h2>
          <p>Electrolytes -- chiefly sodium, chloride, and potassium, with magnesium and calcium -- are the charged minerals that govern fluid balance, nerve signaling, and muscle contraction. When a horse sweats, it loses these minerals, and significant losses impair performance, recovery, the thirst response, and muscle function, contributing to fatigue and, in some horses, tying-up. Replacing them after heavy sweating restores the body&apos;s balance and the drive to rehydrate.</p>

          <h2 id="sweat">Equine Sweat Is Salty</h2>
          <p>Unlike humans, horses produce sweat that is hypertonic -- saltier than their body fluids -- so they lose proportionally more electrolytes than water when they sweat. This is why a hard-working horse in the heat can develop a real electrolyte deficit and lose the urge to drink even while dehydrated. It also means plain water alone does not fully restore a heavily sweating horse; the lost salts must be replaced.</p>

          <h2 id="when">When to Supplement</h2>
          <ul>
            <li><strong>Baseline salt</strong> for every horse, year-round, via loose salt in feed and access to a salt source.</li>
            <li><strong>Added electrolytes</strong> for horses in hard or prolonged work, especially in heat and humidity.</li>
            <li><strong>After heavy sweating</strong> from competition, long hauls, or hot-weather exertion.</li>
            <li><strong>For poor drinkers and travelers</strong> where salt and electrolytes help maintain the drive to drink.</li>
            <li><strong>Idle horses in cool weather</strong> generally need only baseline salt, not extra electrolytes.</li>
          </ul>

          <h2 id="safe">Using Electrolytes Safely</h2>
          <ul>
            <li><strong>Always provide water alongside</strong> -- never give concentrated electrolytes to a horse without free access to water, as this worsens dehydration.</li>
            <li><strong>Choose quality products</strong> where salt is the main ingredient, not sugar fillers.</li>
            <li><strong>Introduce gradually</strong> and avoid giving large doses to an empty stomach, which can irritate it.</li>
            <li><strong>Match the dose to the work and losses</strong> rather than over-supplementing an idle horse.</li>
            <li><strong>Consult your vet</strong> for horses with kidney issues or specific medical conditions before adding electrolytes.</li>
          </ul>

          <h2 id="picks">Salt and Electrolyte Picks</h2>
          <p>A few widely-stocked options covering year-round baseline salt and sweat-replacement electrolytes. Always provide free-choice water alongside any electrolyte, and favor products where salt — not sugar — is the leading ingredient. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="plain-salt-block"
            badge="Year-Round Baseline"
            badgeEmoji="🧂"
            name="Plain White Salt Block / Loose Salt"
            subtitle="The free-choice baseline every horse needs"
            score={8.7}
            winner
            description={<>
              <p>Plain white salt — as a free-choice block or, better for reliable intake, loose salt top-dressed on feed — is the year-round baseline every horse needs to meet sodium requirements. Loose salt is easier for most horses to consume in adequate amounts than a hard block, which some horses underuse. Inexpensive and foundational; address baseline salt before any flavored electrolyte.</p>
              <p>Reasonable choice for: every horse, year-round, as the foundation under any work-related electrolyte plan.</p>
            </>}
            specs={[
              { label: 'Type', value: 'Plain sodium chloride', highlight: 'good' },
              { label: 'Form', value: 'Block or loose' },
              { label: 'Best use case', value: 'Year-round baseline for all horses' },
            ]}
            pros={['Meets baseline sodium need', 'Very inexpensive', 'Loose form ensures adequate intake', 'No sugar fillers']}
            cons={['Hard blocks can be underconsumed', 'Not sufficient alone for heavy sweat losses']}
            price="$8–25"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/plain-loose-salt?s=nutrition-salt-and-electrolytes"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="plain-loose-salt"
          />

          <ReviewCard
            id="sweat-electrolyte"
            badge="Sweat Replacement"
            badgeEmoji="💧"
            name="Salt-First Sweat-Replacement Electrolyte"
            subtitle="For horses in heavy work or hot, humid conditions"
            score={8.5}
            description={<>
              <p>A quality sweat-replacement electrolyte supplies sodium, chloride, and potassium in proportions that reflect equine sweat losses — for horses working hard, traveling, or sweating in heat and humidity. The key selection criterion from the section above: salt should be the leading ingredient, not sugar. Always offer water alongside, and match the dose to actual work and losses rather than over-supplementing an idle horse.</p>
              <p>Most relevant for performance, endurance, and traveling horses, and any horse sweating heavily in hot, humid weather.</p>
            </>}
            specs={[
              { label: 'Electrolytes', value: 'Na, Cl, K (sweat-matched)', highlight: 'good' },
              { label: 'Leading ingredient', value: 'Salt (avoid sugar-first products)', highlight: 'good' },
              { label: 'Best use case', value: 'Heavy work, heat, travel' },
            ]}
            pros={['Replaces sweat-specific losses', 'Supports recovery after hard work', 'Paste and powder formats available']}
            cons={['Useless without water alongside', 'Sugar-heavy products are poor value', 'Over-dosing an idle horse is wasteful']}
            price="$20–50"
            ctaText="Compare at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/sweat-replacement-electrolyte?s=nutrition-salt-and-electrolytes"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="sweat-replacement-electrolyte"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>McCutcheon LJ, Geor RJ. “Sweating: Fluid and Ion Losses and Replacement.” Veterinary Clinics of North America: Equine Practice, 1998.</li>
            <li>American Association of Equine Practitioners. “Electrolytes and Hydration” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
