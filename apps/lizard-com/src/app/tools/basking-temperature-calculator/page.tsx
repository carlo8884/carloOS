import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  SchemaScript,
  ArticleLayout,
  FAQAccordion,
  ArticleSourcesList,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  AffiliateDisclosure,
} from '@carloOS/ui'
import { BaskingTemperatureCalculator } from './Calculator'

const URL = 'https://lizard.com/tools/basking-temperature-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Basking Temperature Calculator | Lizard.com',
  description:
    'Target basking, cool-side, and night-drop temperatures by species — bearded dragon, leopard gecko, ball python, and more. Check your own thermal gradient.',
  path: '/tools/basking-temperature-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to set a reptile basking temperature and thermal gradient',
  description:
    'Use the species temperature target to set a basking-surface temperature, a cooler retreat, and a night-drop floor, then verify the gradient with a probe at the basking surface.',
  url: URL,
  totalTime: 'PT4M',
  steps: [
    {
      name: 'Find the species target',
      text: 'Each species has a published basking-surface target, a cool-side range, and a night-drop floor tied to its natural microclimate and Ferguson Zone.',
    },
    {
      name: 'Set the basking surface',
      text: 'Mount a basking lamp on a thermostat and bring the surface the animal sits on into the target basking range — measured at the surface, not the air.',
    },
    {
      name: 'Establish the cool side',
      text: 'Build a gradient by leaving the opposite end of the enclosure unheated so the animal can retreat to the cool-side target and thermoregulate.',
    },
    {
      name: 'Allow the night drop',
      text: 'Let temperatures fall to the species night-drop floor after lights-out. A modest night drop is natural and beneficial for most species; tropical species need a warmer floor.',
    },
    {
      name: 'Verify with a meter',
      text: 'Confirm both ends with a digital probe or infrared thermometer at install and periodically thereafter. Never rely on the lamp wattage alone.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reptile Basking Temperature Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile basking temperature calculator. Select a species to see target basking-surface, cool-side, and night-drop temperatures in °F or °C, then enter your measured warm and cool readings to check whether your thermal gradient is in range. Based on published husbandry and Ferguson-zone temperature guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: species (10 common pet reptiles), unit (°F / °C), optional measured warm + cool readings',
    'Outputs: target basking-surface, cool-side, and night-drop temperature ranges',
    'Gradient check: compares your measured temps to the target and flags out-of-range or flat gradients',
    'Husbandry guidance only — measure at the basking surface and control heat with a thermostat',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Lizard.com Editorial',
    url: 'https://lizard.com',
  },
}

const schema = howToSchema

const SOURCES = [
  {
    label:
      'Mader, D. R., & Divers, S. J. (eds.) (2014). Current Therapy in Reptile Medicine and Surgery (thermal husbandry / POTZ chapters).',
    publisher: 'Saunders / Elsevier',
  },
  {
    label:
      'Ferguson, G. W., et al. (2010). Voluntary exposure of some western-hemisphere snake and lizard species to UV-B radiation in the field. Zoo Biology, 29(3), 317–334. (Ferguson Zone framework.)',
    publisher: 'Zoo Biology',
  },
  {
    label:
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — husbandry and preferred-optimum-temperature-zone (POTZ) client resources.',
    url: 'https://arav.org',
    publisher: 'ARAV',
  },
  {
    label:
      'Boyer, T. H. Reptile thermoregulation and the provision of a thermal gradient — captive husbandry references.',
    publisher: 'Reptile Medicine and Surgery references',
  },
]

const FAQS = [
  {
    question: 'What temperature should a bearded dragon\'s basking spot be?',
    answer:
      'A bearded dragon is a hot open-desert basker (Ferguson Zone 4). Its basking-surface temperature should sit roughly 95–110°F (35–43°C), measured at the exact surface the dragon sits on. The cool side should be around 75–85°F so the animal can retreat, and temperatures can drop to about 65–75°F at night. Always control the basking lamp with a thermostat.',
  },
  {
    question: 'What temperature should a leopard gecko\'s basking spot be?',
    answer:
      'A leopard gecko is a ground-dwelling crepuscular species (Ferguson Zone 1). Its warm zone should sit around 88–92°F (31–33°C) at the surface, ideally as belly heat under a warm hide rather than a hot overhead spot. The cool side should be about 72–78°F, with a night floor around 65–72°F. Avoid letting the warm zone exceed the mid-90s°F.',
  },
  {
    question: 'Why does a reptile need a thermal gradient?',
    answer:
      'Reptiles are ectotherms — they regulate body temperature behaviourally by moving between warm and cool zones. A single uniform temperature gives the animal nowhere to thermoregulate. A proper enclosure provides a warm basking end and a genuinely cooler end (typically at least a 10–15°F spread) so the animal can choose its preferred body temperature throughout the day.',
  },
  {
    question: 'How much should the temperature drop at night?',
    answer:
      'A modest night drop is natural and beneficial for most species — temperate species like bearded dragons and corn snakes tolerate drops into the mid-60s°F. Tropical species such as ball pythons need a warmer floor (around 72–78°F) and should not be allowed to get cold. The calculator gives a species-specific night-drop floor; use that as the lower limit rather than a target.',
  },
  {
    question: 'Where exactly should I measure the basking temperature?',
    answer:
      'Measure at the surface the animal actually occupies — the top of the basking rock, branch, or platform — using a digital probe thermometer or an infrared (IR) temperature gun. Stick-on dial thermometers and air-temperature readings near the lamp are unreliable and routinely read several degrees off the surface the animal contacts.',
  },
  {
    question: 'Is this calculator a substitute for a thermostat?',
    answer:
      'No. This tool tells you the target temperatures and checks whether your readings are in range, but every heat source over a basking site should be regulated by a thermostat to prevent thermal burns and overheating. The calculator is husbandry guidance; for an animal showing signs of heat stress or illness, consult a reptile veterinarian.',
  },
]

export default function BaskingTemperatureCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Basking Temperature Calculator',
        subtitle:
          'Get target basking-surface, cool-side, and night-drop temperatures by species, then check your own thermal gradient against the targets.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Basking Temperature Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Reptile Feeding Calculator', href: '/tools/reptile-feeding-calculator', category: 'Tools' },
        { title: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator', category: 'Tools' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        { title: 'Lighting Guide', href: '/setup/lighting-guide', category: 'Setup' },
        { title: 'Best Thermostats', href: '/reviews/best-thermostats', category: 'Reviews' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Temperature targets table', href: '#targets' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Heat &amp; lighting"
            links={[
              { label: 'Temperature Guide', href: '/setup/temperature-guide' },
              { label: 'Lighting Guide', href: '/setup/lighting-guide' },
              { label: 'Best Thermostats', href: '/reviews/best-thermostats' },
              { label: 'Best Thermometers &amp; Hygrometers', href: '/reviews/best-thermometers-hygrometers' },
              { label: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="basking-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <SchemaScript schema={softwareApplicationSchema} />

        <p>
          <strong>Quick answer:</strong> A <strong>bearded dragon</strong> needs a basking surface around{' '}
          <strong>95–110°F (35–43°C)</strong> with a 75–85°F cool side; a <strong>leopard gecko</strong> needs a warm
          zone of <strong>88–92°F (31–33°C)</strong> with a 72–78°F cool side; a <strong>ball python</strong> wants{' '}
          <strong>88–92°F</strong> on the warm end and a warmer-than-average 72–78°F night floor. Every species needs a
          real gradient between a warm end and a genuinely cooler end. Pick your species below for the full target set
          and to check your own readings.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Select a species to see its target basking-surface, cool-side, and night-drop temperatures. Then, optionally,
          enter your measured warm and cool readings and the calculator will tell you whether each is in range and
          whether your gradient is wide enough for the animal to thermoregulate.
        </p>
        <BaskingTemperatureCalculator />

        <h2 id="targets">Temperature targets by species</h2>
        <p>
          The table below summarises target temperatures for commonly kept species. These are ranges from published
          husbandry guidance, tied to each species&apos; natural microclimate and Ferguson Zone — confirm against the
          species care sheet before finalising a setup.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Species</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Zone</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Basking surface</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Cool side</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Night drop</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Bearded dragon</td><td className="py-2 pr-4">4</td><td className="py-2 pr-4">95–110°F</td><td className="py-2 pr-4">75–85°F</td><td className="py-2">65–75°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Leopard gecko</td><td className="py-2 pr-4">1</td><td className="py-2 pr-4">88–92°F</td><td className="py-2 pr-4">72–78°F</td><td className="py-2">65–72°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Crested gecko</td><td className="py-2 pr-4">2</td><td className="py-2 pr-4">72–78°F</td><td className="py-2 pr-4">68–74°F</td><td className="py-2">65–72°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Blue-tongued skink</td><td className="py-2 pr-4">3</td><td className="py-2 pr-4">95–105°F</td><td className="py-2 pr-4">75–82°F</td><td className="py-2">65–75°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Veiled chameleon</td><td className="py-2 pr-4">3</td><td className="py-2 pr-4">85–95°F</td><td className="py-2 pr-4">72–80°F</td><td className="py-2">60–70°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Panther chameleon</td><td className="py-2 pr-4">3</td><td className="py-2 pr-4">82–90°F</td><td className="py-2 pr-4">72–80°F</td><td className="py-2">62–72°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Uromastyx</td><td className="py-2 pr-4">4</td><td className="py-2 pr-4">110–130°F</td><td className="py-2 pr-4">80–90°F</td><td className="py-2">70–80°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Corn snake</td><td className="py-2 pr-4">1</td><td className="py-2 pr-4">85–90°F</td><td className="py-2 pr-4">72–78°F</td><td className="py-2">65–72°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Ball python</td><td className="py-2 pr-4">1</td><td className="py-2 pr-4">88–92°F</td><td className="py-2 pr-4">76–80°F</td><td className="py-2">72–78°F</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Russian tortoise</td><td className="py-2 pr-4">4</td><td className="py-2 pr-4">95–100°F</td><td className="py-2 pr-4">70–80°F</td><td className="py-2">60–70°F</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">How it works</h2>
        <p>
          The calculator maps each species to a published <strong>basking-surface target</strong>, a{' '}
          <strong>cool-side range</strong>, and a <strong>night-drop floor</strong>, derived from the animal&apos;s
          natural microclimate and Ferguson Zone. Three principles drive the guidance:
        </p>
        <ul>
          <li>
            <strong>Higher Ferguson zones run hotter.</strong> Open-desert baskers (Zone 4 — bearded dragons, uromastyx,
            tortoises) need the hottest basking surfaces; crepuscular and shade-dwelling species (Zone 1 — leopard
            geckos, ball pythons, corn snakes) run cooler and rely more on a warm retreat than a blazing overhead spot.
          </li>
          <li>
            <strong>A gradient matters as much as the peak.</strong> Reptiles are ectotherms and thermoregulate by
            moving between zones. A warm basking end is only useful alongside a genuinely cooler end — typically at least
            a 10–15°F spread — so the animal can pick its preferred body temperature.
          </li>
          <li>
            <strong>Night drops are natural — within limits.</strong> Most species tolerate and benefit from a modest
            overnight temperature drop. Tropical species are the exception and need a warmer night floor; the
            calculator gives a per-species floor to stay above rather than a target to hit.
          </li>
        </ul>
        <p>
          The <strong>gradient check</strong> compares your measured warm and cool readings against the species targets
          and flags any value that is too high, too low, or a warm/cool spread too small to count as a real gradient.
          Take the basking reading at the exact surface the animal occupies with a digital probe or IR thermometer — not
          an air reading near the lamp. For the UVB side of the lighting picture, pair this with the{' '}
          <Link href="/tools/uvb-distance-calculator" className="text-brand-primary hover:underline">UVB Distance Calculator</Link>{' '}
          and the <Link href="/setup/temperature-guide" className="text-brand-primary hover:underline">temperature guide</Link>.
        </p>
        <p>
          This is <strong>husbandry guidance only</strong>. Every heat source over a basking site should be on a
          thermostat to prevent thermal burns. For an animal showing signs of heat stress, lethargy, or illness, consult
          a reptile veterinarian.
        </p>

        <ArticleSourcesList sources={SOURCES} />
        <p className="text-sm text-brand-text-mid mt-3">
          Lizard.com Editorial compiled these temperature targets from the published husbandry references above. No
          in-house thermal testing by Lizard.com is implied or claimed.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          With temperatures set, finish the husbandry plan: work out the diet with the{' '}
          <Link href="/tools/reptile-feeding-calculator">Reptile Feeding Calculator</Link>, size the enclosure with the{' '}
          <Link href="/tools/enclosure-size-calculator">Enclosure Size Calculator</Link>, and read the full{' '}
          <Link href="/setup/temperature-guide">temperature guide</Link>.
        </p>

        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Shop Thermostats, Probes &amp; Heat Lamps</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>To hit and hold these targets safely, pair a basking lamp with a thermostat and a digital probe or IR thermometer. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission never influences the temperature targets above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20thermostat%20basking%20lamp?s=tool-basking-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Thermostats on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20heat%20lamp%20thermometer?s=tool-basking-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
            <Link href="/reviews/best-thermostats" style={{ display: 'inline-block', padding: '9px 16px', border: '1px solid var(--brand-border-strong, #3a4358)', color: 'var(--brand-white)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Our thermostat reviews →</Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
