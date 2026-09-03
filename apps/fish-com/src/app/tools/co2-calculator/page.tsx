import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/co2-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Planted Aquarium CO2 Calculator — Dosing & KH/pH | Fish.com',
  description:
    'Size planted-tank CO2 from tank gallons, plant density, and pressurized vs liquid carbon. Get bubble rate, diffuser size, drop-checker range, plus KH/pH ppm.',
  path: '/tools/co2-calculator',
})

const schema = buildHowToSchema({
  name: 'How to size planted-tank CO2 dosing',
  description:
    'Enter tank volume and plant density, choose pressurized CO2 or liquid carbon, then use the starting bubble rate or daily ml and confirm with a 4 dKH drop checker.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Enter tank volume and plant density',
      text: 'Use net water volume in gallons or liters. Low density is easy plants (anubias, java fern); medium is a typical stem-and-crypt tank; high is carpeting plants under strong light.',
    },
    {
      name: 'Choose pressurized CO2 or liquid carbon',
      text: 'Pressurized injection (cylinder + regulator + solenoid) is what high-light planted tanks need. Liquid carbon is a modest daily dose for low-tech tanks — not a substitute for carpets and red stems.',
    },
    {
      name: 'Read the starting rate and diffuser size',
      text: 'Pressurized: start near 1 bubble/second per 10 gallons, scaled by plant density, with a diffuser sized to the tank. Liquid: a typical bottle starting point is 1 ml per 10 US gallons daily — follow the label.',
    },
    {
      name: 'Confirm with a drop checker',
      text: 'Fill a drop checker with 4 dKH reference solution and bromothymol blue. Lime green after 1–2 hours is ~30 ppm. Blue is low; yellow is high. Drop checkers do not read liquid carbon.',
    },
    {
      name: 'Optional: calculate dissolved CO2 from KH and pH',
      text: 'CO2 ppm = 3 × KH (dKH) × 10^(7 − pH). Test KH and pH from the same sample. The formula assumes carbonate is the only buffer — phosphate buffers and tannins throw it off.',
    },
    {
      name: 'Watch the fish and time the solenoid',
      text: 'Target 15–35 ppm during the photoperiod. Turn CO2 on about an hour before lights and off an hour before lights-out. If fish gasp at the surface, add surface agitation and turn the rate down.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Planted Aquarium CO2 Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive planted-tank CO2 calculator. Inputs: tank volume (gallons or liters), plant density, pressurized vs liquid carbon, plus optional KH and pH. Outputs: starting bubble rate, diffuser size, drop-checker range, typical liquid-carbon daily ml, and dissolved CO2 in ppm.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Starting bubble rate from tank gallons × plant density (1 bps per 10 gal, density-scaled)',
    'Diffuser sizing bands for nano through 75+ gallon tanks',
    'Liquid-carbon daily ml starting point (1 ml per 10 US gal; follow the bottle)',
    '4 dKH drop-checker color range (blue / lime green / yellow)',
    'Standard KH/pH formula: CO2 ppm = 3 × dKH × 10^(7 − pH)',
    'Color-coded target band (15–35 ppm) with fish-stress threshold callout',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'What CO2 level should a planted tank run?',
    answer:
      '15–35 ppm during the photoperiod is the healthy range. Plants grow well, algae stays in check, and fish remain comfortable. 30 ppm is the classic target (lime green on a 4 dKH drop checker). Below 15 ppm plants struggle; above 35 ppm fish start showing stress.',
  },
  {
    question: 'How many bubbles per second for CO2?',
    answer:
      'A common starting heuristic is about 1 bubble per second per 10 US gallons, then scale down for easy plants and up for carpeting high-light tanks. A 40-gallon medium-planted tank starts near 4 bps. Bubble rate is only a starting point — dissolve rate depends on diffuser, flow, and surface agitation. Adjust until the drop checker is lime green and fish are not gasping.',
  },
  {
    question: 'What size CO2 diffuser do I need?',
    answer:
      'Nano tanks (under 15 gallons) use a ~2 cm ceramic disc or in-tank atomizer. 15–40 gallons usually take a 2–3 cm disc or an in-line atomizer. 40–75 gallons want a 3+ cm disc or an in-line reactor. Above ~75 gallons, a single ceramic disc rarely keeps up — use a reactor or two injection points.',
  },
  {
    question: 'Is liquid carbon as good as pressurized CO2?',
    answer:
      'No, not for high-light carpets and red stems. Liquid carbon (glutaraldehyde-based products such as Flourish Excel) is a modest daily carbon source and a useful BBA spot-treatment. It does not hold 25–30 ppm dissolved CO2, and a drop checker will not turn green from it. Overdose stresses vallisneria, some mosses, and shrimp. Follow the bottle; a typical starting point is 1 ml per 10 US gallons daily.',
  },
  {
    question: 'Is the KH/pH CO2 formula accurate?',
    answer:
      'It is accurate when carbonate is the only meaningful buffer in the water. Common things that break it: phosphate-based pH buffers (Seachem Neutral Regulator), peat or driftwood tannins, commercial discus buffers, and very low KH (under 2 dKH) where the formula becomes unstable. For most planted tanks running CO2 injection on tap water, the formula is within about ±20%.',
  },
  {
    question: 'Do I need a drop checker if I can calculate CO2 from KH/pH?',
    answer:
      'Yes. They measure different things. The KH/pH formula gives you a snapshot at the moment you tested. A drop checker shows CO2 at the drop checker\'s location over a ~2-hour lag. Together they confirm the calculation and catch buffer interference. Drop checkers do not read liquid carbon.',
  },
  {
    question: 'Can I run CO2 24/7?',
    answer:
      'No — turn CO2 off at night. Plants only consume CO2 during photosynthesis (lights on). At night they respire and produce CO2 along with fish, so dissolved levels climb fast if you keep injecting. Set CO2 to come on about 1 hour before lights and off 1 hour before lights off, via a solenoid on the same timer as the lights.',
  },
]

export default function CO2CalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Planted Aquarium CO2 Calculator',
        subtitle:
          'Tank gallons, plant density, and pressurized vs liquid carbon in — starting bubble rate, diffuser size, and drop-checker range out. Optional KH/pH mode estimates dissolved ppm.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'CO2 Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Planted Tank Setup', href: '/setup/planted-tank-setup', category: 'Tank Setup' },
        { title: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator', category: 'Tools' },
        { title: 'Low-Tech Planted Tank', href: '/setup/low-tech-planted-tank', category: 'Tank Setup' },
        { title: 'Aquarium Cycling Estimator', href: '/tools/aquarium-cycling-estimator', category: 'Tools' },
        { title: 'Substrate Calculator', href: '/tools/substrate-calculator', category: 'Tools' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Shop CO2 gear', href: '#shop' },
              { label: 'Starting rates', href: '#rates' },
              { label: 'The KH/pH formula', href: '#formula' },
              { label: 'When it lies to you', href: '#caveats' },
              { label: 'Target ranges', href: '#targets' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Planted-tank resources"
            links={[
              { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Cycling Estimator', href: '/tools/aquarium-cycling-estimator' },
              { label: 'Best Planted-Tank Fertilizers', href: '/reviews/best-planted-tank-fertilizers' },
              { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <ArticleByline
          siteName="Fish.com Editorial"
          publishedAt="2026-05-01T00:00:00Z"
          updatedAt="2026-09-03T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Planted-tank CO2 checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the planted-tank checklist — starting bubble rates, diffuser size bands, 4 dKH
            drop-checker colors, and solenoid timing — so you can set injection without re-running
            the calculator. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Planted-tank CO2 checklist"
            subtitle="Email the planted-tank checklist — bubble rates, diffuser size, drop-checker colors, solenoid timing. No spam."
            ctaText="Email my planted-tank checklist"
            source="tools-co2-calculator-under-hero"
          />
        </div>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter tank volume, how heavily the tank is planted, and whether you inject pressurized CO2
          or dose liquid carbon. The calculator returns a starting bubble rate (or daily ml), a
          diffuser-size band, and the 4 dKH drop-checker range. Switch to KH/pH mode to estimate
          dissolved ppm from a test kit.
        </p>
        <Calculator />

        {/* Money path — live amazon-brand search hops (regulator / diffuser / drop checker / liquid carbon).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop CO2 gear
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A solenoid regulator, a diffuser sized to the tank, and a 4 dKH drop checker are the
            pressurized kit; liquid carbon is the low-tech daily dose. Same Amazon hops used on the{' '}
            <Link
              href="/setup/planted-tank-setup"
              className="text-brand-primary no-underline hover:underline"
            >
              planted tank setup
            </Link>{' '}
            guide and the{' '}
            <Link
              href="/reviews/best-aquarium-lighting"
              className="text-brand-primary no-underline hover:underline"
            >
              lighting review
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra cost to you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+co2+regulator+solenoid?s=tools-co2-calculator"
              amazonLabel="Shop CO2 regulators on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+co2+diffuser?s=tools-co2-calculator"
              amazonLabel="Shop CO2 diffusers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+co2+drop+checker?s=tools-co2-calculator"
              amazonLabel="Shop drop checkers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/seachem+flourish+excel?s=tools-co2-calculator"
              amazonLabel="Shop liquid carbon on Amazon →"
            />
          </div>
        </div>

        <h2 id="rates">Starting rates</h2>
        <p>
          Bubble rate is a starting heuristic, not a dissolved-CO2 measurement. Dissolution depends
          on diffuser surface area, contact time, and how hard the surface is breaking. Use the
          numbers to get on the board, then steer with a drop checker and fish behavior.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Tank</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Medium-planted start</th>
                <th className="text-left py-2 font-semibold text-brand-dark">Diffuser band</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">10 gal</td>
                <td className="py-2 pr-4">~1 bps</td>
                <td className="py-2">Nano ceramic (~2 cm)</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">20 gal</td>
                <td className="py-2 pr-4">~2 bps</td>
                <td className="py-2">Standard 2–3 cm disc</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">40 gal</td>
                <td className="py-2 pr-4">~4 bps</td>
                <td className="py-2">Standard disc or in-line</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">75 gal</td>
                <td className="py-2 pr-4">~7.5 bps</td>
                <td className="py-2">Large disc or reactor</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Liquid carbon (any size)</td>
                <td className="py-2 pr-4">~1 ml / 10 gal / day</td>
                <td className="py-2">No diffuser — follow the bottle</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Low-density tanks start at about 60% of the medium rate; high-density / high-light tanks
          start at about 130%. Ramp over 5–7 days. If you still need net volume from length × width
          × height, use the{' '}
          <Link href="/tools/aquarium-volume-calculator">aquarium volume calculator</Link>. Size the
          bed with the <Link href="/tools/substrate-calculator">substrate calculator</Link> before
          you inject — aquasoil and a deep root zone are the usual planted-tank pair.
        </p>

        <h2 id="formula">The KH/pH formula</h2>
        <pre className="bg-brand-surface p-4 rounded text-sm overflow-x-auto">
          CO2 (ppm) = 3 × KH (dKH) × 10^(7 − pH)
        </pre>
        <p>
          This is the standard relationship from carbonate equilibrium chemistry, written for KH in
          degrees (dKH) — the unit liquid test kits report. CO2 dissolves to form carbonic acid,
          which lowers pH. KH measures the water&apos;s capacity to resist that change. If you know
          both, you can back out how much CO2 is dissolved.
        </p>
        <p>
          At KH = 4 dKH and pH = 6.8, the formula gives:{' '}
          <strong>3 × 4 × 10^(0.2) ≈ 19 ppm</strong>. That is inside the 15–35 ppm planted-tank
          band. (A common error is applying the meq/L coefficient against a dKH input, which
          overstates CO2 by about 4.3× and would call this same tank &quot;dangerous.&quot;)
        </p>

        <h2 id="caveats">When the formula lies</h2>
        <p>The KH/pH method assumes carbonate is the only buffer in the water. It breaks when:</p>
        <ul>
          <li><strong>You use phosphate buffers</strong> (Seachem Neutral Regulator, Discus Buffer). pH is held independent of CO2, so the math returns absurd numbers.</li>
          <li><strong>Tannins from driftwood or peat</strong> contribute organic acidity. Reads CO2 higher than reality.</li>
          <li><strong>KH below 2 dKH</strong> — the formula amplifies measurement error massively. A KH test off by 0.5 dKH at low values can swing the CO2 reading by 40%.</li>
          <li><strong>Marine or brackish water</strong> — different chemistry; this calculator doesn&apos;t apply.</li>
          <li><strong>Liquid carbon</strong> — glutaraldehyde products do not register as dissolved CO2 on a drop checker or in this formula.</li>
        </ul>
        <p>
          The honest cross-check is a drop checker. Fill with 4 dKH reference solution (sold
          separately or mixed from baking soda) + bromothymol blue indicator. Color shifts from blue
          (low CO2) → green (~30 ppm) → yellow (high). The lag is 1–2 hours, which is actually
          useful — it shows a stable average.
        </p>

        <h2 id="targets">CO2 targets</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Range</th>
                <th className="text-left py-2 font-semibold text-brand-dark">What it means</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">&lt; 10 ppm</td><td className="py-2">Below target — low-tech / no injection. Plants survive but don&apos;t thrive.</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">10–15 ppm</td><td className="py-2">Light injection. OK for easy plants (java fern, anubias, cryptocoryne).</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">15–35 ppm</td><td className="py-2"><strong>Target range</strong>. Most plants grow well, fish are unbothered.</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">35–50 ppm</td><td className="py-2">High — watch fish carefully. Some experienced aquascapers push here for fast growth.</td></tr>
              <tr><td className="py-2 pr-4">&gt; 50 ppm</td><td className="py-2"><strong>Dangerous</strong>. Acute toxicity to fish, especially small species and shrimp.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          For full planted-tank setup including substrate, lighting, and dosing schedule, see our{' '}
          <Link href="/setup/planted-tank-setup">planted tank setup guide</Link>.
          Accurate readings depend on a quality liquid test kit — our{' '}
          <Link href="/reviews/best-water-test-kits">water test kit reviews</Link> cover the options for KH and pH.
          If your CO2 numbers are in range but plants still struggle, the bottleneck is usually light or nutrients — see our{' '}
          <Link href="/reviews/best-aquarium-lighting">aquarium lighting reviews</Link> and{' '}
          <Link href="/reviews/best-planted-tank-fertilizers">planted-tank fertilizer reviews</Link>.
          New tanks still need a cycle before you push high-light injection — use the{' '}
          <Link href="/tools/aquarium-cycling-estimator">cycling time estimator</Link>.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}
