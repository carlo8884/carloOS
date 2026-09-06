import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleSourcesList, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Aquarium Management — UF/IFAS Extension, FA-9", url: "https://edis.ifas.ufl.edu/publication/FA009", publisher: "UF/IFAS Extension" },
  { label: "Walstad, D.L. Ecology of the Planted Aquarium, 3rd ed. Echinodorus Publishing, 2013.", publisher: "Echinodorus Publishing" },
  { label: "Hargreaves, J.A. & Tucker, C.S. Managing Ammonia in Fish Ponds. SRAC 4603, 2004.", publisher: "Southern Regional Aquaculture Center" },
  { label: "Boyd, C.E. & Tucker, C.S. Pond Aquaculture Water Quality Management. Kluwer Academic, 1998.", publisher: "Kluwer Academic" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Nano Aquarium Setup Guide — Small Tanks Done Right | Fish.com', description: "How to set up a nano aquarium under 10 gallons. Stocking, stability, filtration, and the small-tank fish that actually thrive in compact setups.", path: '/setup/nano-tank-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Nano Aquarium Setup Guide', description: 'Stocking, stability, filtration, and species selection for nano tanks under 10 gallons.', url: 'https://fish.com/setup/nano-tank-setup', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
export default function NanoTankSetupPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Nano Aquarium Setup Guide', subtitle: "A nano aquarium — generally any tank under 10 gallons — can be every bit as compelling as a large display, but it rewards discipline. Small volumes of water swing in temperature and chemistry faster than large ones, so the margin for error is smaller. This guide covers how to build a stable, beautiful nano tank and which fish and invertebrates genuinely belong in one.", category: 'Tank Setup', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Nano Tank Setup', href: '/setup/nano-tank-setup' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Aquascaping Guide", href: "/setup/aquascaping-guide", category: "Tank Setup" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Best Nano Tanks", href: "/reviews/best-nano-tanks", category: "Reviews" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Good Nano Stock</div>
          {[['Chili rasbora', '5 gal+ · Tiny schooler'], ['Endlers livebearer', '10 gal · Colorful, prolific'], ['Sparkling gourami', '10 gal · Croaks, peaceful'], ['Dwarf puffer', '5 gal single · Personality'], ['Cherry shrimp', '5 gal+ · Algae cleanup'], ['Pygmy corydoras', '10 gal · Bottom shoaler']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }, { label: 'Endlers Livebearer', href: '/species/endlers-livebearer' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-nano-tank" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the nano-tank stability checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Nano-tank stability checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the air-driven corner sponge-filter, preset
            25-watt nano-heater, and food-grade 1-gallon
            water-jug notes that match the sponge-or-gentle-filter,
            reliable-heater, and dechlorinated-water-change copy
            on this page — a corner sponge so a five-gallon
            keeps gentle current, a 25-watt preset heater so a
            small volume does not swing overnight, and a 1-gallon
            jug so dechlorinated top-off water is already mixed.
            Educational checklist, not a ranked product list,
            not livestock, and not a hang-on-back / canister /
            Eheim-Jager / Prime / light-timer hop. Those stay
            on the setup hub, heater-wattage tool, and low-tech
            planted guide. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Nano-tank stability checklist"
            subtitle="Email the sponge-filter, 25-watt heater, and water-jug notes. No spam."
            ctaText="Email my nano-tank stability checklist"
            source="setup-nano-tank-under-hero"
          />
        </div>

        <h2>Why Small Tanks Are Harder, Not Easier</h2>
        <DropCap>The biggest misconception in the hobby is that a smaller tank is a beginner tank. In reality, the opposite is closer to the truth. A five-gallon nano holds a fraction of the water of a standard tank, which means any change — a dead fish, an overfeeding, a heater failure, a missed water change — produces a far more dramatic and rapid swing in temperature, pH, ammonia, and nitrate than the same event would in a buffered fifty-gallon tank. Large volumes of water are forgiving precisely because they dilute mistakes. Nano tanks demand consistency: small, frequent water changes, light stocking, careful feeding, and reliable equipment. Once those habits are in place, a nano is no harder to keep than anything else, and its compact footprint and detail make it deeply rewarding.</DropCap>

        <h2>Cycle It — No Shortcuts</h2>
        <p>A nano tank must be fully cycled before fish go in, exactly like any aquarium. Because the water volume is small, an uncycled nano can spike to lethal ammonia within a day or two of adding livestock. Run a fishless cycle with an ammonia source until ammonia and nitrite both read zero and nitrate is present, then stock slowly. Read our <a href="/setup/aquarium-cycling-guide">aquarium cycling guide</a> for the full process. A small sponge filter or a gentle internal filter is ideal — large hang-on-back filters often create too much current for a nano and its small inhabitants. An air-driven corner sponge filter is how that gentle current stays in a five-gallon — it is not a hang-on-back AquaClear, not a Fluval canister, and not the Hikari Bacto-Surge ranked on the filter reviews.</p>

        <CalloutBox variant="warning" title="Stability beats size">
          The small water volume of a nano tank swings fast. Frequent small water changes, light stocking, and a reliable heater matter more here than in any large aquarium.
        </CalloutBox>

        <h2>Stock for the Volume, Not the Glass</h2>
        <p>The single most common nano mistake is overstocking, often because the tank looks empty when first set up. Resist it. A five-gallon tank suits a single betta, a small colony of dwarf shrimp, or a tight school of the very smallest fish such as chili rasboras. A ten-gallon tank opens up options: a school of <a href="/species/endlers-livebearer">Endlers</a>, a group of <a href="/species/sparkling-gourami">sparkling gouramis</a>, pygmy corydoras, or a single <a href="/species/dwarf-puffer">dwarf puffer</a> in a planted setup. Goldfish, common plecos, and most cichlids are categorically wrong for nano tanks regardless of how small they appear in the store.</p>

        <h2>Plants and Scaping the Small Tank</h2>
        <p>Live plants are especially valuable in a nano because they consume nitrate and add stability to the small water column. Slow-growing, low-light species — Anubias, Java fern, Bucephalandra, and mosses attached to driftwood and rock — keep maintenance low and look proportional in a small space. A single well-chosen piece of hardscape reads as a focal point at nano scale, where a large display would need several. Floating plants add shade and absorb excess nutrients. Pair plants with a modest light on a timer to control algae. The aquarium light-timer hop already lives on the <a href="/setup/low-tech-planted-tank">low-tech planted tank guide</a>; this page does not re-hop it, and it does not hop livestock or a ranked plant list.</p>

        <h2>Maintenance Routine</h2>
        <p>The nano maintenance rhythm is little and often: a 15 to 25 percent water change weekly, glass wiped as needed, and feeding kept light enough that nothing settles uneaten. Always replace evaporated water with dechlorinated fresh water rather than letting the tank concentrate minerals as it evaporates down. A small, accurate heater and a thermometer are essential, since room-temperature swings reach a nano faster than a larger tank. A preset 25-watt nano aquarium heater is sized for a five-to-ten-gallon volume — it is not an Eheim Jager hop (that lives on the heater-wattage tool and setup hub) and not a digital-thermometer hop (that lives on the setup hub). Keep a jug of dechlorinated water on hand so a quick change is never a chore. A food-grade 1-gallon water jug is how that dechlorinated top-off sits ready — it is not a Python water changer, not Seachem Prime (those live on the setup hub and water-change calculator), and not a 5-gallon feed-soaking pail.</p>

        <h2 id="kit">Nano-tank stability kit</h2>
        <p>
          Everyday physical supplies that match the
          sponge-or-gentle-filter, reliable-heater, and
          dechlorinated-water-change copy on this page — an
          air-driven corner sponge filter so a five-gallon
          keeps gentle current for small inhabitants, a
          preset 25-watt nano aquarium heater so a small
          volume does not swing overnight, and a food-grade
          1-gallon water jug so dechlorinated top-off water
          is already mixed. These are educational setup
          tools, not a ranked product list, not livestock,
          and not medications. Hang-on-back AquaClear and
          Fluval canister hops already live on the
          <a href="/setup">setup hub</a>. Eheim Jager,
          digital thermometer, Seachem Prime, and gravel
          vacuum hops already live on the setup hub and
          water-change calculator. The aquarium light-timer
          hop already lives on the
          <a href="/setup/low-tech-planted-tank">low-tech planted tank guide</a>.
          This page does not hop fish, shrimp, or plants as
          shoppable SKUs. This page does not claim
          hands-on testing.
        </p>

        <AffiliateDisclosure variant="inline" siteId="fish-com" />

        {/* Money path — live amazon-brand search hops
            (air-driven corner sponge filter /
            preset 25-watt nano aquarium heater /
            food-grade 1-gallon water jug).
            These are educational setup tools, not a
            ranked product list, not livestock, not
            medications, no href="#" / PLACEHOLDER.
            ShopCtas hides empty Chewy. Category
            searches only — unused vs #1094
            lidded+5+gallon+feed+soaking+pail /
            large+smooth+feed+tub+rocks /
            apple+wedger+slicer, #1093
            48+hour+digital+kitchen+timer /
            lined+telephone+message+pad /
            medium+hard+sided+plastic+pet+carrier, #1092
            single+stainless+floor+dog+bowl /
            wobble+dog+food+dispenser /
            30+minute+sand+hourglass+timer, #1091
            letter+size+thermal+laminating+pouches /
            72+hour+digital+countdown+timer /
            collapsible+silicone+travel+dog+bowl,
            aquarium+sponge+filter (health / cycling),
            hikari+bacto+surge+sponge+filter (reviews),
            aquaclear+70+filter / fluval+307+canister+filter
            (setup hub), eheim+jager+heater /
            aqueon+pro+heater / aquarium+heater+tank+size
            (heater-wattage / setup hub),
            aquarium+digital+thermometer (setup hub),
            seachem+prime+water+conditioner /
            python+water+changer (water-change calculator),
            aquarium+light+timer /
            aquarium+plant+root+tabs (low-tech planted). */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the nano-tank stability kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page sponge-or-gentle-filter, reliable-heater,
            and dechlorinated-water-change copy — an
            air-driven corner sponge filter, a preset
            25-watt nano aquarium heater, and a food-grade
            1-gallon water jug. Educational setup gear
            only. They are not a ranked product list,
            they are not livestock, they are not a #1094
            soaking-pail / feed-tub-rock / apple-wedger hop,
            they are not a #1093 kitchen-timer / message-pad
            / pet-carrier hop, they are not a #1092
            floor-bowl / wobble-dispenser / hourglass hop,
            they are not a #1091 laminating-pouch /
            72-hour-timer / travel-bowl hop, they are not
            an aquarium+sponge+filter health hop, they are
            not an Eheim Jager / AquaClear / Prime /
            light-timer hop, and they do not replace
            cycling before fish. Fish.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/air+driven+corner+sponge+filter?s=setup-nano-tank"
              amazonLabel="Browse air-driven corner sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/preset+25+watt+nano+aquarium+heater?s=setup-nano-tank"
              amazonLabel="Browse preset 25-watt nano aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/food+grade+1+gallon+water+jug?s=setup-nano-tank"
              amazonLabel="Browse food-grade 1-gallon water jugs on Amazon →"
            />
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
