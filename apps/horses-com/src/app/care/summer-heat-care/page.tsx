import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Summer Heat Care for Horses — Hydration, Cooling, Heat Stress",
  description:
    "Reference guide to hot-weather horse care: hydration and electrolytes, recognizing heat stress and anhidrosis, cooling methods, and adjusting work.",
  path: '/care/summer-heat-care',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Summer Heat Care for Horses — Hydration, Cooling, Heat Stress",
  description:
    "Reference guide to hot-weather horse care: hydration and electrolytes, recognizing heat stress and anhidrosis, cooling methods, and adjusting work.",
  url: 'https://horses.com/care/summer-heat-care',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the fastest way to cool an overheated horse?",
    answer:
      "Continuous application of copious cold water over the whole body, scraping it off with a sweat scraper and reapplying repeatedly, is the fastest safe cooling method -- the old belief that cold water on hot muscles is harmful has been disproven. Move the horse to shade with airflow (a shade cloth over a run-in or paddock helps when tree cover is thin), offer water, and call a veterinarian if it does not recover quickly.",
    answerText:
      "Repeatedly apply copious cold water and scrape it off with a sweat scraper -- continuous cold-water cooling is fastest and safe. Move to shade with airflow, offer water, and call a vet if recovery is slow.",
  },
  {
    question: "What is anhidrosis in horses?",
    answer:
      "Anhidrosis is the loss of the ability to sweat normally, most common in hot, humid climates. Because sweating is how horses shed heat, anhidrotic horses overheat easily even at rest, showing rapid breathing and poor performance. It is managed with shade, fans, cooler working hours, and veterinary guidance.",
    answerText:
      "Anhidrosis is the inability to sweat normally, common in hot humid climates. Affected horses overheat easily since sweating is their main cooling. Managed with shade, fans, and vet guidance.",
  },
  {
    question: "Why is humidity worse than heat for horses?",
    answer:
      "Horses cool mainly by evaporating sweat, and evaporation barely works in high humidity, so the horse cannot shed the heat it generates. That is why a hot, humid day is far more dangerous than an equally hot but dry day, and why owners use a combined heat-and-humidity index to judge safe working conditions.",
    answerText:
      "Horses cool by evaporating sweat, which fails in high humidity, so they cannot shed heat. Hot humid days are far more dangerous than dry heat -- use a combined heat-humidity index.",
  },
]

export default function SummerHeatCarePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Fly Control', href: '/care/fly-control' },
          { title: 'Water Requirements', href: '/nutrition/water-requirements' },
          { title: 'Salt and Electrolytes', href: '/nutrition/salt-and-electrolytes' },
        ]}
        hero={{
          title: "Summer Heat Care for Horses",
          subtitle:
            "Heat is a serious risk for horses, which generate enormous metabolic heat during work and cool primarily by sweating. In hot, humid weather a working horse can overheat dangerously, and some horses lose the ability to sweat altogether. Managing hydration, cooling, and workload through the summer protects performance and prevents emergencies. This is reference material, not a substitute for veterinary care in a heat emergency.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Summer Heat Care", href: '/care/summer-heat-care' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Horses Cool Themselves", href: "#cooling" },
            { label: "Hydration and Electrolytes", href: "#hydration" },
            { label: "Recognizing Heat Stress", href: "#stress" },
            { label: "Anhidrosis", href: "#anhidrosis" },
            { label: "Cooling and Managing Work", href: "#manage" },
            { label: "Summer-Heat Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Heat Stroke Is an Emergency</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              A horse that is distressed, has a very high temperature, stops sweating, or becomes weak or disoriented in the heat needs immediate aggressive cooling and a veterinarian. Heat stroke can be fatal.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Water Requirements", href: "/nutrition/water-requirements" },
              { label: "Fly Control", href: "/care/fly-control" },
              { label: "Feeding the Performance Horse", href: "/nutrition/feeding-the-performance-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-summer"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-05"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the summer-heat cooling checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse summer-heat cooling checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the sweat-scraper and shade-cloth notes so the
              after-work cooling kit is ready before the first hot,
              humid day. Educational checklist, not a diagnosis and
              not an electrolyte or medication order. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse summer-heat cooling checklist"
              subtitle="Email the sweat-scraper and shade-cloth notes. No spam."
              ctaText="Email my horse summer-heat cooling checklist"
              source="care-summer-heat-care-under-hero"
            />
          </div>

          <h2 id="cooling">How Horses Cool Themselves</h2>
          <p>Horses dump heat mainly through sweating and the evaporation of that sweat, supplemented by increased breathing and blood flow to the skin. Because they are large, muscular, and work hard, they produce a lot of heat and rely heavily on evaporative cooling -- which fails in high humidity, when sweat cannot evaporate. The combination of high heat and high humidity is therefore far more dangerous than dry heat alone.</p>

          <h2 id="hydration">Hydration and Electrolytes</h2>
          <p>A horse can lose 10 liters or more of sweat in an hour of hard work in the heat, and equine sweat is rich in electrolytes -- it loses proportionally more salt than water. Constant access to clean water is essential, and electrolyte supplementation replaces what sweat removes during heavy work or hot conditions, helping maintain the drive to drink. Always provide free salt and ensure water is available alongside any electrolytes. See the salt and electrolytes guide.</p>

          <h2 id="stress">Recognizing Heat Stress</h2>
          <ul>
            <li>A high rectal temperature that stays elevated after work rather than recovering.</li>
            <li>Rapid breathing or panting that does not settle, and an elevated heart rate that is slow to recover.</li>
            <li>Profuse sweating, or alarmingly the opposite -- a hot horse that has stopped sweating.</li>
            <li>Dullness, weakness, stumbling, or disorientation.</li>
            <li>Signs of dehydration: tacky gums, a slow skin-pinch return, and reduced urination.</li>
          </ul>

          <h2 id="anhidrosis">Anhidrosis</h2>
          <p>Some horses, particularly in hot, humid climates, lose the ability to sweat normally -- a condition called anhidrosis. Without effective sweating they cannot shed heat and overheat easily even at rest, often showing rapid breathing, poor performance, and a dry coat with patchy sweating only under the mane and saddle. Anhidrosis is managed with environmental control (shade, fans, cooler hours, sometimes relocation to a cooler climate) and veterinary guidance; it is a serious heat-safety issue rather than a quirk.</p>

          <h2 id="manage">Cooling and Managing Work</h2>
          <ul>
            <li><strong>Work in the cool hours</strong> of early morning or evening and reduce intensity on hot, humid days.</li>
            <li><strong>Cool actively after work</strong> with copious cold water applied and scraped off repeatedly with a sweat scraper -- continuous cold-water application is the fastest safe method. The scraper lets water carry heat off the coat instead of sitting as a warm film.</li>
            <li><strong>Provide shade, airflow, and fans</strong> and avoid trailering in the heat of the day. A shade cloth over a run-in or paddock adds shade when tree cover is thin; stall fans already live on other horses.com pages and stay off this kit.</li>
            <li><strong>Use the heat index</strong> (temperature plus humidity) to judge risk; high combined values call for caution or rest.</li>
            <li><strong>Keep water and electrolytes available</strong> and let the horse drink during and after work. Electrolyte products stay on the salt-and-electrolytes guide, not this page.</li>
          </ul>

          <h2 id="kit">Summer-Heat Kit</h2>
          <p>Everyday physical supplies that match the cooling and shade copy above — a sweat scraper so cold water can be applied and scraped off repeatedly after work, plus a shade cloth when a run-in or paddock needs shade and tree cover is thin. These are not treatments for heat stroke or anhidrosis; a distressed horse, a very high temperature, a horse that has stopped sweating, or one that becomes weak or disoriented in the heat needs immediate aggressive cooling and a veterinarian. Fans, stall fans, electrolytes, digital thermometers, cool-water towels, fleece coolers, grazing muzzles, soil-test kits, hoof boots, and slow feeders stay off this kit — those already ship on other pages. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (summer-heat kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page sweat-scraper / shade-cloth copy, not electrolytes,
              fans, thermometers, cool-water towels, fleece coolers,
              hoof boots, grazing muzzles, or medication hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the summer-heat kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page cooling and
              shade copy — a horse sweat scraper for after-work cold-water
              cooling, and a horse shade cloth when a run-in or paddock
              needs shade. Everyday physical supplies only. They are not a
              ranked product list, they are not electrolytes, they are not
              fans or thermometers, they are not a medication, and they do
              not replace a veterinarian. Horses.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+sweat+scraper?s=care-summer-heat-care"
                amazonLabel="Browse horse sweat scrapers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+shade+cloth?s=care-summer-heat-care"
                amazonLabel="Browse horse shade cloth on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Geor RJ, McCutcheon LJ. “Thermoregulation and Clinical Disorders Associated with Exercise and Heat Stress.” Compendium and related reviews.</li>
            <li>Marlin DJ, et al. Studies on equine cooling methods and heat stress in exercising horses.</li>
            <li>American Association of Equine Practitioners. “Hot Weather Care and Anhidrosis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
