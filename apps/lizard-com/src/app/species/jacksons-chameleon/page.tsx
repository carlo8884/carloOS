import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Jackson's Chameleon Care Sheet — Setup, UVB | Lizard.com", description: "Jackson's chameleon care sheet. A cool montane chameleon for experienced keepers. Screen cage, 72–80°F, UVB required, dripper hydration, gut-loaded insects.", path: '/species/jacksons-chameleon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Jackson's Chameleon Care Sheet", description: "Enclosure, temperature, UVB, hydration, and diet for Trioceros jacksonii, the Jackson's chameleon.", url: 'https://lizard.com/species/jacksons-chameleon', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: "Are Jackson's chameleons good for beginners?", answer: "No — chameleons in general, and Jackson's chameleons specifically, are best for keepers with some experience. They are stress-prone, do not tolerate handling, and have exacting needs: a well-ventilated screen enclosure, species-correct cool montane temperatures, UVB, and reliable hydration via dripper or misting rather than a water bowl. A beginner is better served starting with a hardier species and moving up to a chameleon once comfortable with precise husbandry." },
  { question: "What temperature does a Jackson's chameleon need?", answer: "Jackson's chameleons come from cool, humid mountain forests of East Africa, so they need cooler temperatures than most chameleons. Aim for a daytime ambient of about 72–80°F with a modest basking spot of roughly 80–85°F, and importantly a meaningful night drop into the 50s–60s°F, which this montane species depends on. Sustained high heat is dangerous for them — overheating is a common and serious husbandry mistake with this species." },
  { question: "What kind of enclosure does a Jackson's chameleon need?", answer: "A well-ventilated screen (mesh) enclosure, not a glass terrarium, because chameleons need strong airflow and stagnant humid air promotes respiratory infection. A single adult does well in roughly a 24x24x48 inch screen cage oriented vertically, densely planted with live or artificial foliage and crossing branches for climbing and security. Chameleons are arboreal and territorial, so house them individually." },
  { question: "How do Jackson's chameleons drink?", answer: "Chameleons typically do not recognize standing water in a bowl; they drink moving droplets off leaves. Provide hydration with a slow dripper running for part of the day and/or several daily mistings, which create the droplets they drink and maintain humidity (around 50–70%). Reliable hydration is one of the most important and most commonly neglected parts of chameleon care — dehydration shows up as sunken eyes and stringy, orange urates." },
  { question: "Do Jackson's chameleons need UVB?", answer: "Yes — UVB is essential. Like other diurnal basking reptiles, Jackson's chameleons need UVB to synthesize vitamin D3 and use dietary calcium, and without it they develop metabolic bone disease. Provide a linear T5 HO UVB tube of appropriate strength positioned above the screen at the correct distance for that bulb (screen mesh reduces UVB transmission, which must be accounted for). Replace UVB bulbs every 12 months even though they still emit visible light." },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function JacksonsChameleonPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Jackson's Chameleon Care Sheet", subtitle: "Trioceros jacksonii — the three-horned Jackson's chameleon is a cool-climate montane species with exacting needs: strong ventilation, cooler temperatures and a real night drop, UVB, and dripper-based hydration. It is a rewarding but advanced animal, not a beginner pet or a handling pet.", category: 'Species Guide — Advanced', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: "Jackson's Chameleon", href: '/species/jacksons-chameleon' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Screen vs PVC Enclosure', href: '/setup/screen-vs-pvc-enclosure', category: 'Setup' },
        { title: 'Veiled Chameleon Care', href: '/species/veiled-chameleon', category: 'Species' },
        { title: 'Panther Chameleon Care', href: '/species/panther-chameleon', category: 'Species' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Trioceros jacksonii'], ['Difficulty', 'Advanced'], ['Adult size', '9–13 inches'], ['Enclosure (adult)', '24×24×48 in screen, vertical'], ['Ambient (day)', '72–80°F'], ['Basking', '80–85°F (modest)'], ['Night drop', '50s–60s°F — required'], ['Humidity', '50–70%'], ['UVB', 'Required — T5 HO over screen'], ['Hydration', 'Dripper / misting, not a bowl'], ['Lifespan', '5–10 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Screen vs PVC Enclosure', href: '/setup/screen-vs-pvc-enclosure' }, { label: 'Veiled Chameleon Care', href: '/species/veiled-chameleon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-jacksons-chameleon" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="overview">An Advanced Montane Chameleon</h2>
        <p>The Jackson's chameleon — instantly recognizable by the three forward-pointing horns of the male — is a cool-climate species from the highland forests of East Africa (and a long-established population in Hawaii). Its montane origins set it apart from the more commonly kept veiled and panther chameleons: it needs <em>cooler</em> temperatures, strong ventilation, and a genuine night drop. Combined with the general chameleon traits of stress-sensitivity and intolerance of handling, this makes it an advanced animal. It is a display species, not a pet to be picked up.</p>

        <h2 id="enclosure">Enclosure — Screen, Not Glass</h2>
        <p>Use a well-ventilated <strong>screen (mesh) enclosure</strong>, not a glass terrarium. Chameleons require strong airflow; stagnant humid air promotes respiratory infection. A single adult does well in roughly a <strong>24 × 24 × 48 inch</strong> screen cage oriented vertically, densely planted with live or artificial foliage and crossing branches at varied heights for climbing, basking, and visual security. House chameleons individually — they are solitary and territorial, and visible cagemates cause chronic stress.</p>

        <h2 id="temps">Temperatures — Keep It Cool</h2>
        <ul>
          <li><strong>Daytime ambient:</strong> 72–80°F</li>
          <li><strong>Basking spot:</strong> a modest 80–85°F only</li>
          <li><strong>Night drop:</strong> into the 50s–60s°F — important for this montane species</li>
        </ul>
        <p><strong>Overheating is a common and serious mistake</strong> with Jackson's chameleons. Unlike desert reptiles, they do not tolerate sustained high heat, and a too-hot basking bulb or a warm room can be dangerous. Provide only a gentle basking spot and ensure the enclosure cools meaningfully at night.</p>

        <h2 id="uvb">UVB — Required</h2>
        <p>Provide a linear T5 HO UVB tube of appropriate strength mounted above the screen at the correct distance for that bulb. Note that screen mesh reduces UVB transmission, so account for that when setting strength and distance. Without UVB, chameleons cannot synthesize vitamin D3 to use dietary calcium and develop metabolic bone disease. Replace the bulb every 12 months — output fades before the visible light does.</p>

        <h2 id="hydration">Hydration — Dripper or Misting</h2>
        <p>Chameleons generally do not drink from a standing water bowl; they drink moving droplets off leaves. Provide a slow <strong>dripper</strong> running for part of the day and/or several daily mistings, which create drinkable droplets and maintain humidity (around 50–70%). Reliable hydration is one of the most commonly neglected parts of chameleon care — watch for sunken eyes and stringy, orange urates, which signal dehydration.</p>

        <h2 id="diet">Diet</h2>
        <p>Jackson's chameleons are insectivores. Feed a varied diet of appropriately sized, well gut-loaded insects — crickets, dubia roaches, and other feeders — dusted with calcium at most feedings and a multivitamin and vitamin D3 on a measured schedule appropriate to your UVB setup. Prey should be no wider than the space between the chameleon's eyes. Variety and proper gut-loading matter: a monotonous, poorly supplemented insect diet is a frequent cause of deficiency disease.</p>

        <h2 id="handling">Temperament &amp; Handling</h2>
        <p>Chameleons are not handling animals. They are easily stressed, and frequent handling shortens their lives. Interact primarily by observation and by letting the chameleon come to you (for example during feeding or maintenance) rather than by grabbing it. Color darkening, gaping, and lateral compression are stress and threat signals — respect them and give the animal space.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Metabolic Bone Disease (MBD):</strong> from inadequate UVB and/or calcium — bowed limbs, weak grip. Correct lighting and supplementation; see a reptile vet.</li>
          <li><strong>Dehydration &amp; kidney problems:</strong> from inadequate hydration — sunken eyes, orange urates. Improve dripper/misting routine.</li>
          <li><strong>Respiratory infection:</strong> from poor ventilation, excess humidity, or overheating/cooling extremes — wheezing, open-mouth breathing, mucus. Improve airflow and temperatures.</li>
          <li><strong>Heat stress:</strong> from too-warm conditions — this montane species overheats easily. Keep it cool.</li>
        </ul>
        <p>Chameleons hide illness well, so any change in color, posture, appetite, or urate quality warrants a qualified reptile (exotic) veterinarian. Husbandry guidance is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Jackson's Chameleon — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse screen enclosures, T5 HO UVB, drippers and misting systems, and live foliage sized for Jackson's chameleon care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/jacksons%20chameleon%20setup?s=species-jacksons-chameleon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Chameleon Setup on Amazon →</a>
            <a href="/go/chewy-brand/jacksons%20chameleon%20setup?s=species-jacksons-chameleon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
