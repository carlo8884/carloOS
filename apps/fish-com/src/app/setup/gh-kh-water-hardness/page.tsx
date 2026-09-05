import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleSourcesList, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, FAQAccordion } from '@carloOS/ui'

const SOURCES = [
  { label: "Water Quality in Aquaculture — UF/IFAS Extension FA-120", url: "https://edis.ifas.ufl.edu/publication/FA120", publisher: "UF/IFAS Extension" },
  { label: "Boyd, C.E. & Tucker, C.S. Pond Aquaculture Water Quality Management. Kluwer Academic, 1998.", publisher: "Kluwer Academic" },
  { label: "Harker, R. Water Chemistry for the Freshwater Aquarium. Practical Fishkeeping, 2002.", publisher: "Practical Fishkeeping" },
  { label: "Alkalinity and Hardness in Fish Culture Ponds — Southern Regional Aquaculture Center, SRAC-462", url: "https://www.srac.tamu.edu/index.cfm/event/getFactSheet/whichfactsheet/137/", publisher: "SRAC" },
]

const FAQS = [
  {
    question: 'What is the difference between GH and KH?',
    answer:
      'GH (general hardness) measures dissolved calcium and magnesium — the minerals fish use for osmoregulation and that define water as "soft" or "hard." KH (carbonate hardness) measures carbonate and bicarbonate, which buffer the tank against pH swings. They are independent: a tank can be high in one and low in the other, and a single test-strip "hardness" number does not tell you which is which.',
    answerText:
      'GH measures calcium and magnesium (defines soft vs hard water and supports osmoregulation). KH measures carbonate/bicarbonate (buffers pH). They are independent — high in one does not imply high in the other.',
  },
  {
    question: 'What KH do I need to prevent a pH crash?',
    answer:
      'KH is the buffer that absorbs the acids continuously produced by nitrification and CO2. As a general rule, keeping KH at or above roughly 4 dKH gives most community tanks a stable buffer; below about 3 dKH the buffer is easily exhausted and pH can swing more than a full unit overnight. Soft-water biotopes deliberately run lower KH and rely on smaller, more frequent water changes and careful CO2 control to stay stable.',
    answerText:
      'Keep KH at or above roughly 4 dKH for a stable community buffer. Below about 3 dKH the buffer is easily exhausted and pH can crash. Soft-water biotopes run lower KH and compensate with more frequent water changes.',
  },
  {
    question: 'How do I convert dGH and dKH to ppm?',
    answer:
      'One degree of hardness (1 dGH or 1 dKH) equals 17.9 ppm of calcium carbonate (CaCO₃) equivalent. So 4 dKH is about 71.6 ppm and 8 dGH is about 143 ppm. US test kits often report in ppm while European kits report in degrees — multiply degrees by 17.9 to convert to ppm, or divide ppm by 17.9 to convert to degrees.',
    answerText:
      '1 dGH or 1 dKH equals 17.9 ppm CaCO₃. Multiply degrees by 17.9 for ppm, or divide ppm by 17.9 for degrees. Example: 4 dKH is about 71.6 ppm.',
  },
  {
    question: 'Will raising KH also raise GH?',
    answer:
      'It depends on what you add. Crushed coral and aragonite dissolve as calcium carbonate, so they raise both GH and KH together. Baking soda (sodium bicarbonate) raises KH only, because it adds bicarbonate without calcium or magnesium. If you need to raise buffering without changing general hardness — common in some soft-water setups — a bicarbonate source lets you adjust KH independently.',
    answerText:
      'Not always. Crushed coral and aragonite raise both GH and KH. Baking soda (sodium bicarbonate) raises KH only, with no calcium or magnesium, letting you adjust buffering independently of GH.',
  },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'GH and KH Explained — Aquarium Water Hardness Guide | Fish.com', description: "What GH and KH mean, why they differ, and how they affect pH stability and fish health. How to raise, lower, and match hardness to your species.", path: '/setup/gh-kh-water-hardness', type: 'article' })

const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'GH and KH Water Hardness Guide', description: 'General hardness, carbonate hardness, pH buffering, and matching hardness to fish.', url: 'https://fish.com/setup/gh-kh-water-hardness', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z',
  citation: SOURCES,
})

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })

const schema = combineSchemas(articleSchema, faqSchema)

export default function GhKhPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'GH and KH — Water Hardness Explained', subtitle: "Water hardness is one of the most misunderstood parameters in fishkeeping, partly because two different measurements — GH and KH — both wear the word hardness. They are not the same thing, they are not interchangeable, and confusing them is behind a great many mysterious pH crashes and stalled fish. This guide explains what each measures, why both matter, and how to adjust them safely.", category: 'Water Chemistry', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'GH and KH', href: '/setup/gh-kh-water-hardness' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }, { title: "Best Water Test Kits", href: "/reviews/best-water-test-kits", category: "Reviews" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference</div>
          {[['GH', 'General hardness — Ca and Mg'], ['KH', 'Carbonate hardness — buffering'], ['Soft water', '0–6 dGH'], ['Hard water', '12+ dGH'], ['1 dKH', '17.9 ppm CaCO3'], ['Low KH risk', 'pH crashes — unstable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }, { label: 'Water Parameters Hub', href: '/water-parameters' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-gh-kh" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium hardness-adjust checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium hardness-adjust checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the GH/KH notes — crushed coral in the filter to raise
              both hardness readings together, a GH remineralizer when you
              only need calcium and magnesium, and Indian almond leaves
              when a blackwater tank needs KH and pH to drift down slowly.
              Educational checklist, not a water-test-kit restock and not
              a substitute for matching hardness to the species you keep.
              API master kits, Prime, Flourish Excel, and medications stay
              off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium hardness-adjust checklist"
              subtitle="Email the crushed-coral, GH-remineralizer, and almond-leaf notes. No spam."
              ctaText="Email my aquarium hardness-adjust checklist"
              source="setup-gh-kh-water-hardness-under-hero"
            />
          </div>

        <p className="text-lg text-brand-text-mid leading-relaxed italic mb-6">
          <strong className="not-italic">TL;DR.</strong> GH (general hardness) measures dissolved calcium and magnesium; KH (carbonate hardness) measures the carbonate/bicarbonate that buffers pH. They are independent parameters — a tank can be high in one and low in the other. One degree of hardness equals 17.9 ppm CaCO₃. Soft water runs 0–6 dGH, hard water 12+ dGH; for a stable community buffer, keep KH at or above roughly 4 dKH. Crushed coral or aragonite raise both GH and KH together; baking soda raises KH only; diluting with RO water lowers both. Change hardness slowly — over days, not minutes.
        </p>

        <h2>Two Different Measurements</h2>
        <DropCap>The single most useful thing to learn about hardness is that GH and KH measure two unrelated things. General hardness (GH) is the concentration of dissolved calcium and magnesium ions — the minerals fish need for osmoregulation, bone and scale formation, and the minerals that define a water as "soft" or "hard" in the everyday sense. Carbonate hardness (KH), sometimes called alkalinity or buffering capacity, is the concentration of carbonate and bicarbonate ions, which has nothing to do with calcium and everything to do with stabilizing pH. A tank can be high in one and low in the other. Treating them as the same parameter — or assuming a hardness test strip's single number tells the whole story — is the root of a surprising number of fishkeeping problems.</DropCap>

        <p>Both parameters are conventionally reported either in degrees (dGH and dKH, the European convention) or in parts per million of calcium-carbonate equivalent (ppm CaCO₃, common on US kits). The two scales are directly convertible: <strong>one degree equals 17.9 ppm CaCO₃</strong>. A reading of 4 dKH is therefore about 71.6 ppm, and 8 dGH is about 143 ppm. When a guide specifies a target in one unit and your test kit reports the other, multiply degrees by 17.9 to get ppm, or divide ppm by 17.9 to get degrees. Keeping the two scales straight avoids a common source of accidental over- or under-correction.</p>

        <h3>Hardness reference ranges</h3>
        <p>The descriptive bands below are the conventional fishkeeping ranges for GH. KH is interpreted differently — it is read as buffering capacity rather than as "soft" or "hard" — so the KH column describes pH-stability behavior rather than a hardness label.</p>

        <table>
          <thead>
            <tr>
              <th>Descriptor</th>
              <th>GH (dGH)</th>
              <th>GH (ppm CaCO₃)</th>
              <th>KH behavior at this range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Very soft</td>
              <td>0–3</td>
              <td>0–54</td>
              <td>Little buffer; pH drifts and can crash without frequent water changes</td>
            </tr>
            <tr>
              <td>Soft</td>
              <td>4–6</td>
              <td>72–108</td>
              <td>Modest buffer; suits blackwater biotopes with careful CO2 control</td>
            </tr>
            <tr>
              <td>Moderately hard</td>
              <td>7–11</td>
              <td>125–197</td>
              <td>Stable buffer for most community tanks</td>
            </tr>
            <tr>
              <td>Hard</td>
              <td>12–18</td>
              <td>215–322</td>
              <td>Strong buffer; pH holds high and steady</td>
            </tr>
            <tr>
              <td>Very hard</td>
              <td>19+</td>
              <td>340+</td>
              <td>Very strong buffer; typical of Rift Lake and hard-tap setups</td>
            </tr>
          </tbody>
        </table>

        <h2>Why KH Controls pH Stability</h2>
        <p>KH is arguably the more critical of the two for day-to-day stability because it buffers the tank against pH swings. The carbonates that KH measures neutralize the acids that continuously accumulate in an aquarium from fish waste, nitrification, and CO2. When KH is adequate, those acids are absorbed and pH holds steady. When KH is depleted — which happens gradually as the buffer is consumed and between water changes — there is nothing left to absorb the acid, and pH can crash suddenly and severely, stressing or killing fish overnight. A low or zero KH reading is the classic cause of the dreaded "old tank syndrome" pH crash. Maintaining a measurable KH is therefore central to a stable aquarium.</p>

        <p>The relationship also runs in the opposite direction during the nitrogen cycle: nitrification itself consumes carbonate, so a tank that is heavily stocked or actively cycling draws down KH over time. This is one reason a tank that was stable for months can begin swinging — the buffer has been quietly spent. Testing KH periodically, not just pH, catches the problem before the crash. For how nitrification consumes buffer and produces acid, see the <a href="/setup/aquarium-cycling-guide">aquarium cycling guide</a>, and for the full set of interacting parameters see the <a href="/water-parameters">water parameters hub</a>.</p>

        <CalloutBox variant="warning" title="Low KH means an unstable pH">
          KH is the buffer that keeps pH steady. As it is consumed over time, a tank with little or no KH can suffer a sudden, dangerous pH crash. Test KH periodically and refresh it through water changes or buffering.
        </CalloutBox>

        <h2>Matching Hardness to Your Fish</h2>
        <p>Different fish evolved in different waters, and matching hardness to species matters as much as temperature. Soft, acidic water (low GH and KH) suits Amazonian and Southeast Asian blackwater fish such as cardinal tetras, discus, and many wild bettas. Hard, alkaline water (high GH and KH) suits livebearers like guppies and mollies, African Rift Lake cichlids, and most snails and shrimp that need calcium for their shells. Most hardy community fish tolerate a moderate middle range. The most reliable approach is to learn what comes out of your own tap, then choose fish that thrive in it, rather than constantly fighting your source water with chemicals.</p>

        <p>The reason hardness matters biologically comes down to osmoregulation — the constant work a fish does to hold its internal salt balance against the surrounding water. Soft-water species are adapted to lose few ions to a dilute environment; drop them into hard water and they expend energy fighting an unfamiliar gradient, which shows up as chronic stress and poor color. Hard-water species and invertebrates run the opposite risk: calcium is a structural requirement, and shrimp kept too soft fail to molt cleanly while snails develop pitted, eroding shells. Calcium-hungry invertebrates such as the <a href="/species/mystery-snail">mystery snail</a> and <a href="/species/amano-shrimp">amano shrimp</a> are reliable indicators — when GH is too low, their shells and molts are the first thing to suffer.</p>

        <h2>Raising and Lowering Hardness</h2>
        <p>To <strong>raise</strong> GH and KH, the simplest tools are crushed coral or aragonite in the filter (which dissolves slowly to add both), commercial remineralizing products, or for GH specifically, products containing calcium and magnesium salts. To <strong>lower</strong> hardness, the cleanest method is to dilute hard tap water with reverse-osmosis (RO) water, then remineralize to the exact target. Peat, driftwood, and Indian almond leaves lower KH and pH gradually through tannic and humic acids, useful for soft-water biotopes. Always change hardness slowly — large, rapid swings are more stressful to fish than the original parameter, so adjust over days, not minutes.</p>

        <p>Which tool to reach for depends on whether you need to move GH, KH, or both — they are not always the same job. The table below summarizes the common methods and what each one actually changes.</p>

        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Method</th>
              <th>Affects</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raise both</td>
              <td>Crushed coral / aragonite in filter</td>
              <td>GH + KH</td>
              <td>Dissolves slowly and self-limiting; gradual and hard to overdose</td>
            </tr>
            <tr>
              <td>Raise KH only</td>
              <td>Sodium bicarbonate (baking soda)</td>
              <td>KH</td>
              <td>Adds buffer without calcium/magnesium; useful when GH is already fine</td>
            </tr>
            <tr>
              <td>Raise GH only</td>
              <td>Calcium/magnesium remineralizer (e.g. GH+ salts)</td>
              <td>GH</td>
              <td>Used on RO water to rebuild mineral content for shrimp and plants</td>
            </tr>
            <tr>
              <td>Lower both</td>
              <td>Dilute tap with RO/DI, then remineralize to target</td>
              <td>GH + KH</td>
              <td>Cleanest, most controllable way to hit a precise soft-water target</td>
            </tr>
            <tr>
              <td>Lower KH and pH</td>
              <td>Peat, driftwood, Indian almond leaves</td>
              <td>KH (pH)</td>
              <td>Gradual via tannic/humic acids; suits blackwater biotopes</td>
            </tr>
          </tbody>
        </table>

        <p>For the wider picture of pH, ammonia, and nitrate, see the <a href="/setup/water-chemistry-guide">water chemistry guide</a>, and to choose a kit that reads GH and KH accurately as drop tests rather than coarse strips, see our <a href="/reviews/best-water-test-kits">best water test kits</a> guide.</p>

          <h2 id="kit">Hardness-adjust kit</h2>
          <p>
            Everyday physical supplies that match the raise-and-lower copy
            above — crushed coral in the filter so both GH and KH climb
            slowly, a GH remineralizer when you only need calcium and
            magnesium, and Indian almond leaves when a blackwater biotope
            should lose KH and pH through tannins. API freshwater master
            test kits, Seachem Prime, Flourish Excel, aquasoil, pressurized
            CO2 gear, Seiryu stone, spiderwood, algae scrapers, light
            timers, and root tabs stay off this kit — those hops already
            live on the setup hub, CO2 calculator, planted-tank, and
            #1020–#1022 pages. Baking soda is a grocery bicarbonate, not a
            shop hop. These are not a treatment for a pH crash and not a
            diagnosis. This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="fish-com" />

          {/* Money path — live amazon-brand search hops (crushed coral /
              GH remineralizer / Indian almond leaves). ShopCtas hides
              empty Chewy; never href="#" or PLACEHOLDER. Category
              searches only — unused vs #993–#1026 setup-hub filter /
              heater / API-freshwater-master / Prime, #1020 Seiryu /
              spiderwood, #1021 scrapers, #1022 light-timer / root-tabs,
              planted aquasoil, and CO2 regulator / Flourish Excel hops.
              Test kits and medications are not hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium hardness-adjust kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page hardness
              copy — crushed coral for the filter when both GH and KH
              should rise, a GH remineralizer when only calcium and
              magnesium are low, and Indian almond leaves for a slow KH
              and pH drop in blackwater setups. Everyday physical supplies
              only. They are not a ranked product list, they are not an
              API master test-kit restock, they are not Prime or Flourish
              Excel, they are not medications, and they do not replace
              matching hardness to the species you keep. Fish.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/crushed+coral+aquarium?s=setup-gh-kh-water-hardness"
                amazonLabel="Browse crushed coral for aquariums on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+gh+remineralizer?s=setup-gh-kh-water-hardness"
                amazonLabel="Browse aquarium GH remineralizers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/indian+almond+leaves+aquarium?s=setup-gh-kh-water-hardness"
                amazonLabel="Browse Indian almond leaves on Amazon →"
              />
            </div>
          </div>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answerText }))}
          includeSchema={false}
          allowMultiple
        />

        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
