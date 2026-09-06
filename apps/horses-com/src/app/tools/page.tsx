import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, ShopCtas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Calculators & Tools | Horses.com',
  description: 'Free horse-keeping calculators: estimate weight from girth and length, plan daily hay and feed, and score body condition on the Henneke scale.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
  ],
})

const TOOLS = [
  {
    href: '/tools/is-this-a-horse-emergency',
    title: 'Is This a Horse Emergency?',
    desc: 'Check equine signs — classic colic red flags (rolling, looking at the flank, no manure, high heart rate, severe pain), choke, non-weight-bearing lameness, heavy bleeding, down and cannot rise, gum color, laminitis/founder — for a conservative go-now / same-day / monitor read, then shop an equine emergency-prep kit (first-aid, digital veterinary thermometer, vet wrap, poultice, horse electrolytes). A sign-list triage aid, not a diagnosis.',
    tag: 'Triage',
  },
  {
    href: '/tools/horse-grimace-scale',
    title: 'Horse Grimace Scale',
    desc: 'Is your horse in pain? Score five facial signs — ears, eyes, brow, chewing muscles / mouth, nostrils — on this owner Equine Grimace checklist, then shop an observation / comfort kit (equine first-aid kit, poultice, ice boot / cold therapy wrap, digital veterinary thermometer, vet wrap, horse electrolytes). Planning / observation reference, not a diagnosis. High-pain faces go to emergency triage first, not a shopping list.',
    tag: 'Health',
  },
  {
    href: '/tools/horse-age-calculator',
    title: 'Horse Age Calculator',
    desc: 'Convert horse years to a human-year estimate and a foal / young / adult / senior label. A planning reference grounded in Horses.com senior-care copy — not multiply-by-seven, not a diagnosis.',
    tag: 'Life Stage',
  },
  {
    href: '/tools/horse-weight-calculator',
    title: 'Horse Weight Calculator',
    desc: 'Estimate bodyweight from heart girth and body length using the standard weight-tape formula. Instant lbs and kg, with pony, draft, and foal adjustments.',
    tag: 'Calculator',
  },
  {
    href: '/tools/horse-blanket-size-calculator',
    title: 'Horse Blanket Size Calculator',
    desc: 'What size blanket does your horse need? Measure chest to tail and get the standard US/UK blanket size, the approximate EU/cm equivalent, and a fit tip — because US sizing is that body measurement in inches, then shop a blanket-fit kit (winter blanket, turnout sheet, stable blanket, measuring tape, fleece cooler).',
    tag: 'Tack',
  },
  {
    href: '/tools/horse-feed-calculator',
    title: 'Horse Feed & Hay Calculator',
    desc: 'Estimate daily hay and feed from bodyweight, workload, and keeper type. Forage-first, using published NRC intake ranges, with a dry-matter vs. as-fed conversion, then shop a barn feed kit (timothy hay, ration balancer, feed scoop, slow-feeder hay net, equine salt lick).',
    tag: 'Calculator',
  },
  {
    href: '/tools/body-condition-score',
    title: 'Body Condition Score (Henneke)',
    desc: 'Score six body areas (neck, withers, shoulder, ribs, loin, tailhead) to compute the standard 1-9 Henneke BCS. Returns condition narrative and feeding guidance per score range.',
    tag: 'Husbandry',
  },
  {
    href: '/tools/horse-gestation-calculator',
    title: 'Horse Gestation & Foaling Date Calculator',
    desc: 'Estimate a mare’s foaling date from her breeding date using the ~340-day average gestation, with the early/late 320–362 day window, then pack a foaling-kit checklist (thermometer, navel dip, towels, headlamp, gloves, alarm).',
    tag: 'Breeding',
  },
  {
    href: '/tools/horse-height-converter',
    title: 'Horse Height Converter (Hands, Inches, cm)',
    desc: 'Convert horse height between hands, inches, and centimetres. Handles the hands.inches notation correctly (15.2hh = 62 in = 157.5 cm) and flags the 14.2hh pony cutoff, then shop a height-and-sizing kit (measuring stick, height/weight tape, saddle-fitting kit).',
    tag: 'Converter',
  },
  {
    href: '/tools/horse-cost-calculator',
    title: 'Horse Cost of Ownership Calculator',
    desc: 'Estimate monthly and annual keeping costs — board, feed, farrier, vet, insurance — then pack a shoppable first-horse startup kit (halter, grooming, hoof pick, scoop, barn first-aid, fly mask).',
    tag: 'Budgeting',
  },
  {
    href: '/tools/horse-size-for-rider',
    title: 'Horse Size for Rider Calculator',
    desc: 'What size horse should you ride? Suggests a horse weight range and approximate height band from rider weight, height, and discipline, using the 15–20% carrying guideline — then shop the rider-fit tack set (saddle, pad, girth, stirrups, ASTM/SEI helmet, weight tape). Guidance, not a rule.',
    tag: 'Fit',
  },
  {
    href: '/tools/stall-bedding-calculator',
    title: 'Stall Bedding Calculator',
    desc: 'How many bags of shavings for a stall? Length × width × depth to cubic feet, then a bag or bale count for pine shavings, wood pellets, or straw — plus a weekly restock.',
    tag: 'Barn',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horses.com Tools & Calculators',
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.title, url: `https://horses.com${x.href}` })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={schema} />
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Horse husbandry math, <span className="italic font-normal">at the rail.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited horse-keeping calculators. Estimate bodyweight from a tape measure, plan daily hay and feed forage-first, and score body condition on the standard Henneke scale.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Tools</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horse tools-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse tools-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-barn-calculator-tools-chart,
            stall-door-measurement-card, and
            equine-calculator-reference-handbook notes that
            match the calculator-section-map,
            per-horse-measurement-log, and
            NRC-Henneke-and-weight-tape copy on this hub — a
            laminated horse barn calculator-tools chart so
            the section map (weight, feed, Henneke BCS,
            height, gestation, cost, rider-fit, bedding,
            emergency, grimace, age, blanket) is posted at
            the barn (not a daily-care chart, not an
            emergency-triage chart, not a forage-first
            chart, not an owner-guides chart, not a
            treat-safety chart, not a body-condition-score
            chart), a horse stall-door measurement card so
            each horse&apos;s weight-tape estimate, Henneke
            score, height, and daily forage target is
            labeled on the door (not a care card, not a
            vital-signs card, not a ration card, not an
            owner-guides card, not a farrier log), and an
            equine calculator reference handbook so the
            NRC / Henneke / weight-tape-formula grounding
            is a physical barn book (not a husbandry
            handbook, not a health handbook, not a
            nutrition handbook, not an owner-guides
            handbook). Educational barn checklist, not a
            treatment, not a ranked product list, and not
            a substitute for a veterinarian or qualified
            barn manager. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse tools-hub checklist"
            subtitle="Email the calculator-tools-chart, stall-door measurement-card, and calculator-handbook notes. No spam."
            ctaText="Email my horse tools-hub checklist"
            source="tools-hub-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pt-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-brand-text-dark mb-4">Why a horse owner needs the math, not the eyeball</h2>
          <p className="text-base leading-relaxed text-brand-text-mid mb-4">
            Most horse-keeping decisions that go wrong start with a guess. Is this gelding genuinely overweight, or just heavy-coated for winter? Is the easy keeper drifting toward laminitis risk, or comfortably maintaining? Eyeballing a horse over the stall door is the least reliable way to answer those questions, because a familiar animal looks &ldquo;normal&rdquo; to the person who sees it every day. The calculators in this hub exist to replace that drift with a repeatable number you can track across seasons, hand to your veterinarian, and check against published reference standards.
          </p>
          <p className="text-base leading-relaxed text-brand-text-mid mb-4">
            The three calculators chain together. Start with the <Link href="/tools/horse-weight-calculator" className="text-brand-primary underline">horse weight calculator</Link>, which turns two tape measurements &mdash; heart girth and body length &mdash; into a bodyweight estimate using the published weight-tape formula. Carry that weight into the <Link href="/tools/horse-feed-calculator" className="text-brand-primary underline">feed &amp; hay calculator</Link> to set a daily forage target, then track whether the ration is working with the <Link href="/tools/body-condition-score" className="text-brand-primary underline">Henneke body condition score</Link>, the 1&ndash;9 scale equine veterinarians have used since 1983 to standardize how fat cover is assessed across six body regions.
          </p>
          <p className="text-base leading-relaxed text-brand-text-mid">
            Treat these tools as the measurement layer beneath the rest of the site, not a standalone novelty. A condition score earns its keep when it feeds a decision: a ration adjustment worked through the <Link href="/nutrition" className="text-brand-primary underline">nutrition reference</Link>, or a conversation about metabolic risk grounded in the <Link href="/health" className="text-brand-primary underline">health library</Link>. Two more tools round out the set for buyers and breeders: the <Link href="/tools/horse-height-converter" className="text-brand-primary underline">height converter</Link> turns hands into inches and centimetres without the usual hands.inches confusion, and the <Link href="/tools/horse-gestation-calculator" className="text-brand-primary underline">gestation calculator</Link> projects a mare&rsquo;s foaling date from her breeding date and includes a packable foaling-kit checklist. Two more answer the questions every prospective owner asks first: the <Link href="/tools/horse-cost-calculator" className="text-brand-primary underline">cost-of-ownership calculator</Link> builds a realistic monthly and annual budget from board, feed, farrier, and vet care, and the <Link href="/tools/horse-size-for-rider" className="text-brand-primary underline">horse-size-for-rider calculator</Link> suggests a suitable horse weight and height band from your own size using the 15&ndash;20% carrying guideline. The <Link href="/tools/stall-bedding-calculator" className="text-brand-primary underline">stall bedding calculator</Link> turns stall length, width, and depth into a bag or bale count for shavings, pellets, or straw. The <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline">horse emergency sign-list</Link> answers how urgently to seek care — go now, same-day, or monitor — from equine-specific signs. It is a triage aid, not a diagnosis. The <Link href="/tools/horse-grimace-scale" className="text-brand-primary underline">horse grimace scale</Link> is the pain-face twin of the dog and cat grimace tools: five facial signs, a planning total, and a reminder that high-pain faces go to emergency triage first. The <Link href="/tools/horse-age-calculator" className="text-brand-primary underline">horse age calculator</Link> converts calendar age to a human-year estimate and a foal / young / adult / senior label — a planning reference, not a diagnosis. Every calculator here is source-cited, free, and built for owners and barn managers who would rather track a trend than trust a feeling.
            A laminated horse barn calculator-tools chart is how the hub map (weight, feed, Henneke BCS, height, gestation, cost, rider-fit, bedding, emergency, grimace, age, blanket) stays posted at the barn — it is not a laminated daily-care chart (that lives on the care hub), not a laminated emergency-triage chart (that lives on the health hub), not a laminated forage-first chart (that lives on the nutrition hub), not a laminated owner-guides chart (that lives on the guides hub), not a laminated treat-safety chart (that lives on the can-horses-eat hub), and not a horse body-condition-score chart (that lives on the BCS tool).
            A horse stall-door measurement card is how each horse&apos;s weight-tape estimate, Henneke score, height, and daily forage target is labeled on the door — it is not a stall-door care card (that lives on the care hub), not a stall-door vital-signs card (that lives on the health hub), not a stall-door ration card (that lives on the nutrition hub), not a stall-door owner-guides card (that lives on the guides hub), and not an equine farrier log book (that lives on the farrier schedule).
            An equine calculator reference handbook is how the NRC / Henneke / weight-tape-formula grounding sits in the barn — it is not an equine husbandry reference handbook, not an equine health reference handbook, not an equine nutrition reference handbook, and not an equine owner-guides reference handbook (those live on the care, health, nutrition, and guides hubs).
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-surface p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{tool.tag}</div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">{tool.title}</h2>
              <p className="text-sm leading-relaxed text-brand-text-mid">{tool.desc}</p>
            </Link>
          ))}
        </div>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Tools-hub barn kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          calculator-section-map, per-horse-measurement-log,
          and NRC-Henneke-and-weight-tape copy on this hub — a
          laminated horse barn calculator-tools chart so the
          section map (weight, feed, Henneke BCS, height,
          gestation, cost, rider-fit, bedding, emergency,
          grimace, age, blanket) is posted at the barn, a
          horse stall-door measurement card so each
          horse&apos;s weight-tape estimate, Henneke score,
          height, and daily forage target is labeled on the
          door, and an equine calculator reference handbook
          so the NRC / Henneke / weight-tape-formula
          grounding is a physical barn book. These are
          educational barn searches, not a ranked product
          list, not a substitute for a veterinarian or
          barn manager, not a daily-care-chart /
          stall-door-care-card / husbandry-handbook hop
          (those live on the care hub), not an
          emergency-triage-chart / stall-door-vital-signs
          / health-handbook hop, not a forage-first-chart
          / ration-card / nutrition-handbook hop, not an
          owner-guides-chart / owner-guides-card /
          owner-guides-handbook hop, not a
          treat-safety-chart hop, and not a weight-tape /
          measuring-stick / body-condition-score-chart /
          measuring-tape / livestock-barn-scale hop
          (those live on the tool children). This page
          does not hop medications or vaccines. This page
          does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn calculator-tools chart /
            horse stall-door measurement card /
            equine calculator reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1127
            laminated+horse+barn+owner+guides+chart /
            horse+stall+door+owner+guides+card /
            equine+owner+guides+reference+handbook, #1126
            laminated+horse+barn+daily+care+chart /
            horse+stall+door+care+card /
            equine+husbandry+reference+handbook, #1125
            laminated+horse+barn+emergency+triage+chart /
            horse+stall+door+vital+signs+card /
            equine+health+reference+handbook, #1124
            laminated+horse+barn+forage+first+chart /
            horse+stall+door+ration+card /
            equine+nutrition+reference+handbook, #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, tool children
            horse+weight+tape / horse+measuring+stick /
            horse+body+condition+score+chart /
            horse+measuring+tape /
            livestock+barn+scale. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the tools-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page calculator-section-map,
            per-horse-measurement-log, and
            NRC-Henneke-and-weight-tape copy — a laminated
            horse barn calculator-tools chart, a horse
            stall-door measurement card, and an equine
            calculator reference handbook. Educational
            barn searches only. They are not a ranked
            product list, they are not a daily-care chart
            / care-card / husbandry-handbook hop, they
            are not an emergency-triage chart /
            vital-signs card / health-handbook hop, they
            are not a forage-first chart / ration-card /
            nutrition-handbook hop, they are not an
            owner-guides chart / owner-guides-card /
            owner-guides-handbook hop, they are not a
            weight-tape / measuring-stick /
            body-condition-score-chart hop, and they do
            not replace a veterinarian or barn manager.
            Horses.com earns a commission on qualifying
            purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+calculator+tools+chart?s=tools-hub"
              amazonLabel="Browse laminated horse barn calculator-tools charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+measurement+card?s=tools-hub"
              amazonLabel="Browse horse stall-door measurement cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+calculator+reference+handbook?s=tools-hub"
              amazonLabel="Browse equine calculator reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

    </>
  )
}
