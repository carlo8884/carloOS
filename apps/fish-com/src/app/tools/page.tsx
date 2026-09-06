import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, SchemaScript, DirectoryPlacesCta, EmailCapture, ShopCtas } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Calculators — Volume, Stocking, Heater, CO2 | Fish.com',
  description: 'Free aquarium calculators: tank volume, stocking, heater wattage, water-change math, and planted-tank CO2 dosing. Built by aquarists.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Tools', url: 'https://fish.com/tools' },
  ],
})


const TOOLS = [
  {
    href: '/tools/aquarium-cycling-estimator',
    title: 'Aquarium Cycling Time Estimator',
    desc: 'How long will a new tank take to cycle? Pick method (fishless ammonia / bottled bacteria / used media / fish-in) and temperature, get a phase-by-phase timeline.',
    tag: 'New tank setup',
  },
  {
    href: '/tools/aquarium-volume-calculator',
    title: 'Aquarium Volume Calculator',
    desc: 'Convert tank dimensions (L × W × H) to US gallons, UK gallons, and liters — then size a glass or acrylic tank, stand, substrate, heater, and filter.',
    tag: 'Most popular',
  },
  {
    href: '/tools/substrate-calculator',
    title: 'Aquarium Substrate Calculator',
    desc: 'How much gravel, sand, or aqua soil do you need? Enter tank length, width, and depth to get substrate volume in liters and weight in lbs and kg, plus a buy-10%-extra rule.',
    tag: 'New tank setup',
  },
  {
    href: '/tools/pond-volume-calculator',
    title: 'Pond Volume Calculator',
    desc: 'Koi or garden pond volume in gallons and liters. Rectangular, circular, and oval — then size a liner, pump, and filter kit.',
    tag: 'Ponds',
  },
  {
    href: '/tools/stocking-calculator',
    title: 'Stocking Calculator',
    desc: 'How many fish can your tank hold? Filtration-adjusted estimate using surface area and bioload, not the broken "inch per gallon" rule, then shop a stocking kit (AquaClear HOB, Fluval canister, heater, sand, test kit, net).',
    tag: 'Beginner essential',
  },
  {
    href: '/tools/tank-mate-compatibility-checker',
    title: 'Tank Mate Compatibility Checker',
    desc: 'Pick two or more freshwater fish and get a Compatible / Caution / Not-recommended verdict per pair — then a divider, quarantine tank, or hiding spots if the mix is risky.',
    tag: 'Stocking',
  },
  {
    href: '/tools/heater-wattage-calculator',
    title: 'Heater Wattage Calculator',
    desc: 'Pick the right heater size for your tank, room temperature, and target water temperature — then shop a heater kit (Eheim Jager, Aqueon Pro) with a dual-heater split for tanks 40 gallons and up.',
    tag: 'Equipment',
  },
  {
    href: '/tools/filter-gph-calculator',
    title: 'Filter GPH Calculator',
    desc: 'How much filter flow does your tank need? Enter gallons and tank style for a GPH turnover range — community, goldfish, cichlid, or reef — then shop a filter kit (AquaClear HOB, Fluval canister, media, sponge, powerhead).',
    tag: 'Equipment',
  },
  {
    href: '/tools/fish-disease-symptom-checker',
    title: 'Fish Disease Symptom Checker',
    desc: 'Why is your fish sick? Tick the signs you see — ich, velvet, fin rot, dropsy and more — each linked to a treatment guide. Starts with a water test; then a quarantine / illness kit.',
    tag: 'Health',
  },
  {
    href: '/tools/aquarium-setup-builder',
    title: 'Aquarium Setup Builder',
    desc: 'What do you need to start a fish tank? Enter tank size and setup type for a complete, sized starter-kit checklist — filter, heater, light, substrate, test kit — with why each matters.',
    tag: 'Beginner',
  },
  {
    href: '/tools/water-change-calculator',
    title: 'Water Change Calculator',
    desc: 'How many gallons to siphon? Tank size, fill %, and change % in — volume to remove plus a weekly schedule tip by bioload — then shop a change kit (Python-style changer, gravel vacuum, Seachem Prime, API test kit).',
    tag: 'Maintenance',
  },
  {
    href: '/tools/co2-calculator',
    title: 'CO2 Calculator (dosing + KH/pH)',
    desc: 'Size planted-tank CO2 from tank gallons, plant density, and pressurized vs liquid carbon — bubble rate, diffuser size, drop-checker range, plus KH/pH to ppm.',
    tag: 'Planted tanks',
  },
]

// ItemList enumerating the calculator suite — the GEO citation magnet for the
// flagship tools hub (AI answer engines surface the individual SoftwareApplications).
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fish.com aquarium calculators',
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: tool.title,
      description: tool.desc,
      url: `https://fish.com${tool.href}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  })),
}

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={itemListSchema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:tools-hero"
        alt="A planted freshwater aquarium with healthy aquascaping"
        eyebrow="Calculators & Tools"
        title="Aquarium math, done for you."
        subtitle="Free calculators for the questions everyone Googles: how many gallons is my tank, how many fish can I stock, what wattage heater do I need, and how much CO2 is in my planted tank. Mobile-friendly, no signup."
        primaryCta={{ href: '/tools/stocking-calculator', label: 'Check your stocking' }}
        secondaryCta={{ href: '/tools/aquarium-volume-calculator', label: 'Calculate tank volume' }}
      />

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fish tools-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Fish tools-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-aquarium-calculator-tools-chart,
            rim-measurement-card, and
            aquarist-calculator-reference-handbook notes that
            match the calculator-section-map,
            per-tank-measurement-log, and
            surface-area-bioload-and-KH-pH copy on this hub — a
            laminated aquarium calculator-tools chart so the
            section map (volume, stocking, heater, filter GPH,
            substrate, water change, CO2, cycling, tank-mates,
            disease, setup builder, pond) is posted on the stand
            (not an equipment-hub chart, not a setup-aquarium
            chart, not a stocking-calculator chart), an aquarium
            rim measurement card so each tank&apos;s gallons,
            stocking load, heater watts, and filter GPH is
            labeled on the rim (not a thermometer card, not a
            test-kit card, not a gravel-vacuum card), and an
            aquarist calculator reference handbook so the
            surface-area / bioload / KH-pH grounding is a
            physical stand book (not an equipment handbook,
            not a setup handbook, not a stocking handbook).
            Educational stand checklist, not a treatment, not
            a ranked product list, and not a substitute for a
            water test. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Fish tools-hub checklist"
            subtitle="Email the calculator-tools-chart, rim measurement-card, and calculator-handbook notes. No spam."
            ctaText="Email my fish tools-hub checklist"
            source="tools-hub-under-hero"
          />
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-6 no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xs font-bold tracking-wider uppercase text-brand-primary bg-brand-primary-pale px-2 py-1 rounded-pill">
                  {tool.tag}
                </span>
              </div>
              <div className="font-display font-semibold text-brand-dark text-xl mb-2">{tool.title}</div>
              <div className="text-sm text-brand-text-mid leading-relaxed">{tool.desc}</div>
              <div className="text-sm font-semibold text-brand-primary mt-4">Open calculator →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section border-t border-brand-border">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl mb-4">Why our calculators are different</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Most aquarium calculators on the web are decade-old Flash-era pages with broken math, the wrong unit conversions, or — worst — the
            old &quot;inch per gallon&quot; rule that has misled new aquarists for thirty years.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Our tools use modern stocking science (surface area + filtration + bioload), give honest confidence ranges instead of false precision,
            and link to the underlying species data and equipment reviews so you can actually act on the answer.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Every calculator is built by people who keep tanks. If you spot a bad answer,{' '}
            <Link href="/editorial-standards" className="text-brand-primary font-semibold">tell us</Link> — we fix it.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mt-3">
            New to the terms these tools use? The <Link href="/glossary" className="text-brand-primary font-semibold">aquarium glossary</Link> defines
            the nitrogen cycle, pH, GH/KH, bioload, and the rest in plain English.
            A laminated aquarium calculator-tools chart is how the hub map (volume, stocking, heater, filter GPH, substrate, water change, CO2, cycling, tank-mates, disease, setup builder, pond) stays posted on the stand — it is not a laminated equipment-hub chart (that lives on the equipment hub), not a laminated setup-aquarium chart (that lives on the setup hub), and not a laminated stocking-calculator chart (that lives on the stocking tool).
            An aquarium rim measurement card is how each tank&apos;s gallons, stocking load, heater watts, and filter GPH is labeled on the rim — it is not a thermometer card, not a test-kit card, and not a gravel-vacuum card (those live on the equipment and setup hubs).
            An aquarist calculator reference handbook is how the surface-area / bioload / KH-pH grounding sits at the stand — it is not an aquarist equipment handbook and not an aquarist setup handbook (those live on the equipment and setup hubs).
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Tools-hub stand kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          calculator-section-map, per-tank-measurement-log,
          and surface-area-bioload-and-KH-pH copy on this hub — a
          laminated aquarium calculator-tools chart so the
          section map is posted on the stand, an aquarium rim
          measurement card so each tank&apos;s gallons, stocking
          load, heater watts, and filter GPH is labeled on the
          rim, and an aquarist calculator reference handbook so
          the surface-area / bioload / KH-pH grounding is a
          physical stand book. These are educational stand
          searches, not a ranked product list, not a substitute
          for a water test, not an AquaClear / Fluval / Eheim /
          API-test-kit / Seachem-Prime hop (those live on the
          equipment and setup hubs and the tool children). This
          page does not hop medications. This page does not
          claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="fish-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated aquarium calculator-tools chart /
            aquarium rim measurement card /
            aquarist calculator reference handbook).
            Educational stand searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#" or
            PLACEHOLDER. Unused vs equipment-hub /
            setup-aquarium aquaclear+70+filter /
            fluval+307+canister+filter / eheim+jager+heater /
            api+freshwater+master+test+kit /
            seachem+prime+water+conditioner, stocking
            aquarium+sand, volume aquarium+stand. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the tools-hub stand kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page calculator-section-map,
            per-tank-measurement-log, and
            surface-area-bioload-and-KH-pH copy — a laminated
            aquarium calculator-tools chart, an aquarium rim
            measurement card, and an aquarist calculator
            reference handbook. Educational stand searches
            only. They are not a ranked product list, they
            are not an AquaClear / Fluval / Eheim / API-test-kit
            hop, they are not a stocking sand hop, and they
            do not replace a water test. Fish.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+aquarium+calculator+tools+chart?s=tools-hub"
              amazonLabel="Browse laminated aquarium calculator-tools charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+rim+measurement+card?s=tools-hub"
              amazonLabel="Browse aquarium rim measurement cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarist+calculator+reference+handbook?s=tools-hub"
              amazonLabel="Browse aquarist calculator reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed aquarium professionals" />

    </>
  </>
  )
}
