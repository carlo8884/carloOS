import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Deworming Program — Fecal Egg Counts and Targeted Treatment",
  description:
    "Reference guide to modern equine deworming: the shift from calendar dosing to fecal-egg-count-guided targeted treatment, key parasites, and resistance.",
  path: '/care/deworming-program',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Deworming Program — Fecal Egg Counts and Targeted Treatment",
  description:
    "Reference guide to modern equine deworming: the shift from calendar dosing to fecal-egg-count-guided targeted treatment, key parasites, and resistance.",
  url: 'https://horses.com/care/deworming-program',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Should I still deworm my horse every two months?",
    answer:
      "No. Rotating dewormers on a fixed calendar is now discredited, because it breeds drug resistance and treats horses that do not need it. The modern approach uses fecal egg counts to identify high-shedding horses, treats strategically, and adds baseline treatments for parasites that egg counts miss -- all planned with your veterinarian.",
    answerText:
      "No -- fixed calendar rotation is discredited as it breeds resistance and over-treats. The modern approach uses fecal egg counts to target high shedders, planned with your vet.",
  },
  {
    question: "What is a fecal egg count?",
    answer:
      "A fecal egg count measures strongyle eggs per gram in a manure sample, estimating how much a horse contributes to pasture contamination. It identifies which horses actually need deworming and, through a reduction test before and after dosing, shows whether a dewormer still works on your farm. It is the foundation of modern parasite control.",
    answerText:
      "A fecal egg count measures worm eggs per gram in manure, showing which horses need treatment and whether a dewormer still works. It is the basis of modern parasite control.",
  },
  {
    question: "Why is dewormer resistance a problem?",
    answer:
      "Decades of blanket calendar dosing selected for parasites that survive the available drugs, and no new dewormer classes are being developed. With resistance now widespread, the strategy is to keep worm burdens low rather than eradicate them -- dosing only when needed, testing that drugs still work, and managing pasture to reduce reliance on chemicals.",
    answerText:
      "Calendar dosing bred resistance and no new drugs are coming. So the goal is keeping burdens low, not eradication -- dosing only when needed and managing pasture to spare the drugs.",
  },
]

export default function DewormingProgramPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Equine Deworming Program",
          subtitle:
            "Deworming has changed dramatically. The old habit of rotating wormers every couple of months on the calendar is now discredited -- it bred drug-resistant parasites without targeting the horses that actually need treatment. Modern parasite control uses fecal egg counts to find the minority of high-shedding horses and treats strategically, preserving the few effective drugs we have left. This is reference material to plan with your veterinarian.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Deworming Program", href: '/care/deworming-program' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why the Old Approach Failed", href: "#old" },
            { label: "Fecal Egg Counts", href: "#fec" },
            { label: "High vs Low Shedders", href: "#shedders" },
            { label: "Key Parasites", href: "#parasites" },
            { label: "Drug Resistance", href: "#resistance" },
            { label: "Building a Program", href: "#program" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Fly Control", href: "/care/fly-control" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-deworming"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="old">Why the Old Approach Failed</h2>
          <p>For decades owners rotated dewormers on a fixed calendar regardless of whether a horse carried a meaningful worm burden. This blanket dosing exposed parasite populations to drugs constantly, selecting hard for resistance, while treating many horses that did not need it. With no new classes of equine dewormer on the horizon, the parasitology community -- led by the AAEP guidelines -- shifted to a targeted, evidence-led model.</p>

          <h2 id="fec">Fecal Egg Counts</h2>
          <p>A fecal egg count (FEC) measures the number of strongyle eggs per gram in a manure sample, estimating how much a horse is contributing to pasture contamination. FECs identify which horses actually need treatment and -- via a fecal egg count reduction test done before and after dosing -- reveal whether a given dewormer still works on your farm. The FEC is the cornerstone of the modern program.</p>

          <h2 id="shedders">High vs Low Shedders</h2>
          <p>A consistent finding across studies is that a minority of horses shed the majority of eggs. Roughly speaking, a small fraction of horses are high shedders responsible for most pasture contamination, while many are low shedders that need only minimal treatment. Identifying high shedders by FEC lets you target dewormers where they matter, slowing resistance and cutting unnecessary dosing.</p>

          <h2 id="parasites">Key Parasites</h2>
          <ul>
            <li><strong>Small strongyles (cyathostomins)</strong> -- the most important modern parasite; larvae encyst in the gut wall and can cause serious disease when they emerge en masse.</li>
            <li><strong>Large strongyles</strong> -- historically dangerous (migrating larvae damaged blood vessels); now rare thanks to effective deworming.</li>
            <li><strong>Tapeworms</strong> -- associated with certain colics; typically targeted with an annual praziquantel treatment.</li>
            <li><strong>Ascarids (roundworms)</strong> -- chiefly a problem in foals and young horses, with their own resistance concerns.</li>
            <li><strong>Bots</strong> -- bot-fly larvae in the stomach, controlled with a treatment timed after a killing frost.</li>
          </ul>

          <h2 id="resistance">Drug Resistance</h2>
          <p>Resistance to the available dewormer classes is now widespread, especially in small strongyles and ascarids. Because no new drug classes are coming, the goal has shifted from eradicating worms to keeping burdens low and slowing resistance by dosing only when needed and checking that the drug still works through reduction testing. Pasture management -- removing manure and rotating grazing -- is as important as any chemical.</p>

          <h2 id="program">Building a Program</h2>
          <ul>
            <li><strong>Work with your veterinarian</strong> to design a program based on FEC results, your region, and your horses.</li>
            <li><strong>Run fecal egg counts</strong> to classify shedders and to test that dewormers still work on your farm.</li>
            <li><strong>Give baseline treatments</strong> to all horses for parasites FECs do not detect (such as a strategic tapeworm and bot treatment), as your vet advises.</li>
            <li><strong>Target high shedders</strong> with additional, drug-appropriate treatment.</li>
            <li><strong>Manage pasture</strong> by removing manure, rotating grazing, and not overstocking, which reduces reliance on drugs.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Nielsen MK, et al. AAEP Parasite Control Guidelines, current edition. aaep.org.</li>
            <li>Kaplan RM, Nielsen MK. “An Evidence-Based Approach to Equine Parasite Control.” Equine Veterinary Education, 2010; 22(6):306–316.</li>
            <li>Matthews JB. “Anthelmintic Resistance in Equine Nematodes.” International Journal for Parasitology: Drugs and Drug Resistance, 2014; 4(3):310–315.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
