import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'AVDC: American Veterinary Dental College — Periodontal Disease in Dogs', url: 'https://afd.avdc.org', publisher: 'AVDC' },
  { label: 'WSAVA Global Dental Guidelines — Home Care and Professional Dental Cleaning', url: 'https://wsava.org/global-guidelines/global-dental-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Dental Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/dental-care-guidelines/dental-care-guidelines/', publisher: 'AAHA' },
  { label: 'Veterinary Oral Health Council (VOHC): Accepted Products for Plaque and Tartar Control in Dogs', url: 'http://www.vohc.org/pets.html', publisher: 'VOHC' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Dental Care Guide — Daily Brushing, VOHC Products | Dog.com', description: 'Over 80% of dogs have periodontal disease by age 3 (AVDC/AAHA). Daily toothbrushing is the most effective intervention.', path: '/health/dog-dental-care', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Dental Care Guide', description: 'Daily brushing, VOHC products, and periodontal disease prevention for dogs.', url: 'https://dog.com/health/dog-dental-care', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Dental Care Guide', description: 'Toothbrushing, VOHC products, and professional dental cleaning for dogs.', url: 'https://dog.com/health/dog-dental-care', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'How often should I brush my dog\'s teeth?', answer: 'Daily. Daily toothbrushing is the gold standard of canine dental home care — veterinary dental literature (AVDC, WSAVA Global Dental Guidelines) consistently shows it produces significantly better outcomes than any other home intervention, because it physically disrupts plaque before it mineralizes into tartar. Focus on the outer tooth surfaces, especially the large carnassial teeth; the tongue naturally cleans the inner surfaces. A 30-second session covering all outer surfaces is the realistic daily target.' },
  { question: 'Can I use human toothpaste on my dog?', answer: 'No — never use human fluoride toothpaste on a dog. Use an enzymatic veterinary toothpaste (such as CET Enzymatic), which comes in flavors dogs find appealing and continues its enzymatic action after brushing. Pairing it with a soft-bristled brush and a gradual 1–2 week desensitization process produces a dog that accepts — and often enjoys — brushing.' },
  { question: 'Are dental chews as good as brushing?', answer: 'No — they are supplements, not substitutes. VOHC-accepted chews (Greenies, Whimzees) carry the Veterinary Oral Health Council seal because they have published evidence of plaque or tartar reduction, and they are meaningful additions to a brushing routine. Dental chews without the VOHC mark have no proven efficacy. In the effectiveness hierarchy on this page, daily brushing ranks first, then VOHC chews, then water additives, then dental diets.' },
  { question: 'Do dogs really need professional dental cleanings?', answer: 'Yes. Home care slows periodontal disease and extends the interval between cleanings, but plaque becomes tartar at and below the gum line — areas a brush cannot reach. Professional cleaning under anesthesia with full-mouth radiographs is required annually or every 1–2 years depending on the dog\'s progression rate, even with excellent home care. Think of home care as maintaining the professional cleaning, not replacing it.' },
  { question: 'How common is dental disease in dogs?', answer: 'Very — periodontal disease affects over 80% of dogs by age 3 (AVDC/AAHA). It is painful, contributes to systemic inflammation with implications for heart, kidney, and liver health, and is almost entirely preventable with daily brushing, VOHC-accepted adjuncts, and periodic professional cleaning. If your dog already has bad breath, visible tartar, or red gums, start with a veterinary dental assessment rather than home care alone.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function DogDentalCarePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Dental Care Guide', subtitle: 'Periodontal disease — infection and destruction of the supporting structures around the teeth — affects over 80% of dogs by age 3. It is painful, it contributes to systemic inflammation (with implications for heart, kidney, and liver health), and it is almost entirely preventable. The tools are simple; the commitment is daily.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dental Care', href: '/health/dog-dental-care' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vaccinations', href: '/health/dog-vaccinations', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }, { title: 'Best Dental Chews', href: '/reviews/best-dental-chews', category: 'Related' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">VOHC-Accepted Products</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">The Veterinary Oral Health Council (VOHC) seal means a product has been clinically tested and demonstrated efficacy for plaque or tartar control.</p>
            {[['Greenies', 'Dental chew — proven plaque reduction'], ['Vetradent water additive', 'Daily water additive — VOHC accepted'], ['CET Enzymatic Toothpaste', 'Toothpaste for brushing'], ['Whimzees', 'Dental chew alternative to Greenies'], ['Hill\'s t/d', 'Prescription dental diet — mechanical action']].map(([p, d]) => (
              <div key={p} className="py-1 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Dental Chews', href: '/reviews/best-dental-chews' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-dental" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the daily-brushing checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog dental-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the daily-brushing and VOHC-adjunct notes — a soft-bristled
              toothbrush and enzymatic toothpaste, then VOHC-accepted dental
              chews as a brushing adjunct. Educational checklist, not a
              diagnosis and not a prescription dental diet. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog dental-care checklist"
              subtitle="Email the daily-brushing and VOHC-adjunct notes. No spam."
              ctaText="Email my dog dental-care checklist"
              source="health-dog-dental-care-under-hero"
            />
          </div>

          <h2>The Hierarchy of Dental Care Effectiveness</h2>
          <DropCap>Not all dental interventions are equally effective. Evidence-based ranking from most to least effective:</DropCap>
          <ol>
            <li><strong>Daily toothbrushing</strong> — the gold standard. A soft-bristled toothbrush and enzymatic toothpaste (CET Enzymatic, Vetradent — never human fluoride toothpaste) physically disrupts plaque before it mineralizes to tartar. Veterinary dental literature (<a href="https://afd.avdc.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AVDC</a>, <a href="https://wsava.org/global-guidelines/global-dental-guidelines/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA Global Dental Guidelines</a>) is consistent: daily brushing produces significantly better outcomes than any other home-care intervention. The enzymatic action continues after brushing.</li>
            <li><strong>VOHC-accepted dental chews</strong> — Greenies, Whimzees, and similar products carry the VOHC seal because they have published evidence of plaque or tartar reduction. They are meaningful supplements to brushing but not substitutes for it. Non-VOHC dental chews have no proven efficacy.</li>
            <li><strong>Water additives and dental gels</strong> — VOHC-accepted water additives provide some antimicrobial benefit. Convenient and easy to use as a supplement. Minimal effect used alone.</li>
            <li><strong>Dental diets</strong> — Hill's t/d (prescription) and other dental-formula foods use oversized kibble that the tooth sinks into, providing mechanical cleaning across a larger surface area. More effective than standard kibble for tartar control.</li>
          </ol>

          <h2>How to Train Toothbrushing</h2>
          <p>Most dogs that resist toothbrushing were introduced to it poorly — the brush appeared suddenly and was forced into their mouth. Desensitization over 1-2 weeks produces a dog that accepts, and many that enjoy, toothbrushing:</p>
          <ol>
            <li>Let the dog sniff and lick the toothpaste — enzymatic toothpastes come in poultry, beef, and other flavors dogs find appealing. Let the dog choose whether to lick it. Do this for 2-3 days.</li>
            <li>Put toothpaste on your finger and let the dog lick it, then gently touch the teeth and gums with your finger. No brush yet. 2-3 days.</li>
            <li>Introduce the toothbrush with toothpaste — let the dog lick it. Touch the outside of the teeth briefly. End positively every session.</li>
            <li>Gradually increase coverage over a week until you can brush all outer tooth surfaces in a 30-second session.</li>
          </ol>
          <p>The outside surfaces of the teeth — especially the large carnassial teeth (upper fourth premolars, visible on each side) — accumulate the most plaque and tartar and are the highest priority. The tongue naturally cleans the inner surfaces; concentrate effort on the outer faces.</p>

          <CalloutBox variant="evidence" title="VOHC = published efficacy">
            The Veterinary Oral Health Council seal is awarded only after a product has been clinically demonstrated to reduce plaque or tartar in controlled trials. Dental chews and water additives without the VOHC mark have no published efficacy data — they may be safe, but they have not been shown to work. Prefer VOHC-accepted products when adding adjuncts to brushing.
          </CalloutBox>

          <h2>Why Professional Cleaning Is Still Necessary</h2>
          <p>Home dental care slows the progression of periodontal disease and extends the interval between professional cleanings — but it does not eliminate the need. Plaque becomes tartar (calculus) at the gum line and below it — in areas the brush cannot reach. Professional cleaning under anesthesia with full-mouth radiographs is required annually or every 1-2 years (depending on the dog's dental disease progression rate) even with excellent home care. Think of home care as maintaining the cleaning, not replacing it.</p>

          <h2 id="kit">Daily dental-care kit</h2>
          <p>Everyday physical supplies that match the home-care copy above — a soft-bristled toothbrush and enzymatic toothpaste for daily brushing, plus VOHC-accepted dental chews as a brushing adjunct. Water additives, Hill&apos;s t/d and other prescription dental diets, human fluoride toothpaste, and brand ASINs (CET, Vetradent, Greenies, Whimzees) stay educational copy only — this page never hops Rx food, brand ASINs, or medications. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (daily dental kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — reuse live sister queries from
              vets.co dental-cleaning-guide (soft+pet+toothbrush,
              enzymatic+pet+toothpaste) and the dog health hub
              (dental+chews+dog). Prescription dental diets and brand
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the daily dental-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page dental-care
              copy — a soft toothbrush, enzymatic toothpaste, and
              VOHC-accepted dental chews as a brushing adjunct. Everyday
              physical supplies only. They are not a ranked product list,
              they are not a prescription dental diet, they are not
              medications, and they do not replace a veterinarian or a
              professional cleaning. Dog.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+pet+toothbrush?s=health-dog-dental-care"
                amazonLabel="Browse soft pet toothbrushes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/enzymatic+pet+toothpaste?s=health-dog-dental-care"
                amazonLabel="Browse enzymatic pet toothpaste on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dental+chews+dog?s=health-dog-dental-care"
                amazonLabel="Browse dental chews on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
