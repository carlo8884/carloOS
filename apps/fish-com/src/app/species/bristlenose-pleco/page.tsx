import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Ancistrus cf. cirrhosus — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/ancistrus-cf-cirrhosus/", publisher: "Seriously Fish" },
  { label: "Ancistrus — FishBase genus page", url: "https://www.fishbase.se/identification/SpeciesList.php?genus=ancistrus", publisher: "FishBase" },
  { label: "Armbruster, J.W. Phylogenetic relationships of the suckermouth armored catfishes. Zoological Journal of the Linnean Society, 2004.", publisher: "Zoological Journal of the Linnean Society" },
  { label: "Burgess, W.E. Atlas of Freshwater and Marine Catfishes. TFH Publications, 1989.", publisher: "TFH Publications" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Bristlenose Pleco Care Guide — The Small Algae Eater | Fish.com', description: "Bristlenose plecos stay under 5 inches, eat algae, and suit tanks the common pleco outgrows. Needs driftwood, vegetables, and a male's signature bristles.", path: '/species/bristlenose-pleco', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Bristlenose Pleco Care Guide', description: 'Adult size, diet, driftwood requirement, and breeding for Ancistrus species.', url: 'https://fish.com/species/bristlenose-pleco', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'How big do bristlenose plecos get?',
    answer:
      'Four to five inches — a true dwarf compared with the common pleco (Hypostomus or Pterygoplichthys) sold generically as "pleco," which grows to 18–24 inches and needs a tank well over 100 gallons as an adult. A bristlenose fits comfortably in a 25- to 30-gallon community.',
    answerText:
      '4-5 inches, versus 18-24 inches for the common pleco. A 25-30 gallon tank is sufficient.',
  },
  {
    question: 'Do bristlenose plecos need driftwood?',
    answer:
      'Effectively yes. The fiber and lignin from rasping on wood are believed to be essential for proper digestion in Ancistrus, and a bristlenose tank without driftwood frequently produces a thin, sunken-bellied fish. Provide at least one substantial piece of aquarium-safe wood — bogwood, mopani, or spiderwood.',
    answerText:
      'Yes — wood fiber from rasping is believed essential for digestion. Provide at least one substantial piece of bogwood, mopani, or spiderwood.',
  },
  {
    question: 'Can a bristlenose pleco live on algae alone?',
    answer:
      'No, particularly in a clean, well-maintained aquarium where little algae grows. They need supplemental feeding: sinking algae wafers, blanched vegetables (zucchini, cucumber, spinach, sweet potato), and driftwood to rasp on.',
    answerText:
      'No. Supplement with sinking algae wafers, blanched vegetables, and driftwood — tank algae alone is not enough.',
  },
  {
    question: 'How do you tell male and female bristlenose plecos apart?',
    answer:
      'The bristles are the easiest indicator. Mature males develop long, branching tentacles across the entire snout and forehead; females either lack bristles or show only a few short ones at the edge of the mouth. Males also tend to be slightly larger and broader-headed.',
    answerText:
      'Mature males grow long branching bristles across the snout and forehead; females have few or none, confined to the mouth edge.',
  },
  {
    question: 'Are bristlenose plecos easy to breed?',
    answer:
      'Among the easiest catfish to breed at home — they frequently spawn without deliberate intervention. The male claims and cleans a cave, a female lays bright orange eggs on the cave wall, and the male guards and fans them until hatching in four to ten days. Fry graze biofilm and accept crushed wafers and blanched vegetables almost immediately.',
    answerText:
      'Yes. Males guard eggs in a cave; eggs hatch in 4-10 days and fry accept crushed wafers and blanched vegetables immediately.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function BristlenosePlecoPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Bristlenose Pleco Care Guide', subtitle: "Ancistrus spp. — the bristlenose pleco is the algae-eating catfish that actually belongs in a home aquarium. Unlike the common pleco that reaches two feet and outgrows nearly every tank it is sold for, the bristlenose stays under five inches, eats algae throughout its life, and breeds readily. Mature males grow the namesake tentacle-like bristles across the snout.", category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Bristlenose Pleco', href: '/species/bristlenose-pleco' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Pleco", href: "/species/pleco", category: "Species Guide" }, { title: "Otocinclus", href: "/species/otocinclus", category: "Species Guide" }, { title: "Aquarium Algae Control", href: "/setup/aquarium-algae-control", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Ancistrus spp.'], ['Adult size', '4–5 inches'], ['Temperature', '73–80°F'], ['pH', '6.5–7.5'], ['Tank size', '25–30 gallons'], ['Diet', 'Herbivore — algae, vegetables, wood'], ['Lifespan', '5–12 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Common Pleco', href: '/species/pleco' }, { label: 'Otocinclus', href: '/species/otocinclus' }, { label: 'Aquarium Algae Control', href: '/setup/aquarium-algae-control' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-bristlenose-pleco" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the bristlenose-pleco-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Bristlenose-pleco-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the Ancistrus notes that match
                the care copy on this page — a 25–30
                gallon tank so a 4–5 inch bristlenose
                stays a true dwarf instead of a common
                pleco, driftwood (bogwood, mopani, or
                spiderwood) so wood fiber is there to
                rasp, sinking wafers plus blanched
                vegetables because tank algae is not
                enough, 73–80°F and pH 6.5–7.5, and a
                cave or hollow wood so the nocturnal
                grazer has cover. Educational
                bristlenose-pleco-setup checklist, not
                a new product hop, not livestock, and
                not a substitute for a fish
                veterinarian. The existing
                bristlenose-pleco tank-setup Amazon
                search stays below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Bristlenose-pleco-setup checklist"
                subtitle="Email the driftwood, 25–30 gallon, and algae-wafer notes. No spam."
                ctaText="Email my bristlenose-pleco-setup checklist"
                source="species-bristlenose-pleco-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-bristlenose-pleco" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A bristlenose pleco in a home aquarium." priority />

        <h2>The Pleco You Should Actually Buy</h2>
        <DropCap>The single most common mistake in catfish keeping is buying a "pleco" without knowing which species it is. The fish sold generically as plecos in most stores is the common pleco (Hypostomus or Pterygoplichthys), which grows to 18–24 inches and requires a tank well over 100 gallons as an adult. The bristlenose pleco is the answer to that problem: a true dwarf that tops out around four to five inches, remains an effective algae grazer for its entire life rather than abandoning the habit as it matures, and fits comfortably in a 25- to 30-gallon community. If you want a hardworking algae eater for a normal-sized tank, this is the species to seek out by name.</DropCap>
        <p>Bristlenose plecos are hardy and adaptable, tolerating a broad pH and temperature range. They are nocturnal, spending daylight hours wedged into caves or under driftwood and emerging to graze after the lights go out. A cave or piece of hollow wood is essential for their sense of security.</p>

        <h2>Diet — Algae Is Not Enough</h2>
        <p>Despite their reputation, bristlenose plecos cannot survive on tank algae alone, particularly in a clean, well-maintained aquarium where little algae grows. They are primarily herbivorous and require supplemental feeding: sinking algae wafers, blanched vegetables (zucchini, cucumber, spinach, sweet potato), and most importantly, driftwood. The fiber and lignin from rasping on wood are believed to be essential for proper digestion in Ancistrus, and a bristlenose tank without driftwood frequently produces a thin, sunken-bellied fish.</p>

        <CalloutBox variant="info" title="Driftwood is not optional">
          Bristlenose plecos rasp on driftwood for dietary fiber, and many keepers consider it a genuine requirement rather than decoration. Provide at least one substantial piece of aquarium-safe wood — bogwood, mopani, or spiderwood.
        </CalloutBox>

        <h2>Telling Males from Females</h2>
        <p>The bristles that give the species its name are the easiest sex indicator. Mature males develop long, branching tentacles across the entire snout and forehead. Females either lack bristles entirely or show only a few short ones confined to the edge of the mouth. Males also tend to be slightly larger and broader-headed. These bristles are thought to mimic fry, helping males advertise their suitability as egg-guardians to prospective mates.</p>

        <h2>Easy to Breed</h2>
        <p>Bristlenose plecos are among the easiest catfish to breed in a home aquarium and frequently spawn without any deliberate intervention. The male claims a cave, cleans it, and entices a female to lay a clutch of bright orange eggs on the cave wall. He then guards and fans the eggs single-handedly until they hatch in four to ten days, and continues guarding the wrigglers until their yolk sacs are absorbed. Fry will graze biofilm and accept crushed wafers and blanched vegetables almost immediately.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({
            question: f.question,
            answer: f.answer,
            answerText: f.answerText,
          }))}
          includeSchema={false}
          allowMultiple
        />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Bristlenose Pleco — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, driftwood, and algae wafers sized for bristlenose pleco care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/bristlenose%20pleco%20tank%20setup?s=species-bristlenose-pleco" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Bristlenose Pleco Setup on Amazon →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}
