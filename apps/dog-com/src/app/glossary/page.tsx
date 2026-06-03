import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Owner Glossary — Health, Training & Food Terms | Dog.com',
  description:
    'A plain-language dog glossary: vaccines, spay/neuter, body condition score, brachycephalic, socialization, positive reinforcement, AAFCO, and more terms defined.',
  path: '/glossary',
})

interface Term {
  term: string
  def: string
}
interface Group {
  category: string
  terms: Term[]
}

const GLOSSARY: Group[] = [
  {
    category: 'Health & Veterinary',
    terms: [
      { term: 'Core vs non-core vaccines', def: 'Core vaccines (rabies, distemper, parvovirus, adenovirus) are recommended for essentially all dogs; non-core (e.g., Bordetella, Lyme, leptospirosis) are given based on lifestyle and regional risk.' },
      { term: 'Titer test', def: 'A blood test measuring existing antibody levels, sometimes used to gauge whether a booster is needed rather than vaccinating on a fixed schedule.' },
      { term: 'Spay / neuter', def: 'Surgical sterilization — spay (females, ovary/uterus removal) and neuter (males, testicle removal). Timing, especially in large breeds, is a discussion to have with your veterinarian.' },
      { term: 'Microchip', def: 'A rice-grain-sized RFID chip implanted under the skin that stores an ID number linked to your contact details in a registry — permanent identification if a dog is lost. Keep the registration current.' },
      { term: 'Heartworm', def: 'A potentially fatal parasitic worm transmitted by mosquitoes that lives in the heart and lungs. Year-round preventives are far cheaper and safer than treating an established infection.' },
      { term: 'Body condition score (BCS)', def: 'A 1–9 (or 1–5) scale assessing whether a dog is underweight, ideal, or overweight from rib feel and waist/abdominal tuck — a more useful target than the scale alone.' },
      { term: 'Brachycephalic', def: 'Flat-faced breeds (e.g., bulldogs, pugs) whose shortened skull predisposes them to breathing difficulty (BOAS), heat intolerance, and related issues.' },
      { term: 'Hip dysplasia', def: 'A developmental malformation of the hip joint, common in larger breeds, leading to laxity, arthritis, and lameness. Screened by OFA or PennHIP evaluation.' },
      { term: 'GDV (bloat)', def: 'Gastric dilatation-volvulus — the stomach distends and twists, cutting off blood supply. A life-threatening emergency, especially in deep-chested breeds; unproductive retching is a red flag.' },
      { term: 'Board-certified specialist', def: 'A veterinarian who completed a residency and board exams in a specialty (e.g., DACVIM internal medicine, DACVS surgery, DACVO ophthalmology). Reached by referral from your primary vet.' },
    ],
  },
  {
    category: 'Behavior & Training',
    terms: [
      { term: 'Socialization', def: 'Deliberately exposing a puppy to varied people, animals, places, and sounds during the sensitive window (roughly 3–14 weeks) so it grows into a confident adult. Largely irreplaceable later.' },
      { term: 'Positive reinforcement', def: 'Training by rewarding desired behavior (treats, praise, play) to make it more likely — the method most supported by current behavioral science.' },
      { term: 'Crate training', def: 'Teaching a dog to see a crate as a safe den, which aids house-training, safe travel, and giving the dog a retreat. Built gradually with positive association, never as punishment.' },
      { term: 'Resource guarding', def: 'Defensive behavior (stiffening, growling, snapping) over food, toys, or space. A common, modifiable behavior best addressed early with a professional rather than confrontation.' },
      { term: 'Reactivity', def: 'Over-the-top responses (barking, lunging) to specific triggers such as other dogs or strangers, usually rooted in fear or frustration rather than aggression.' },
      { term: 'Counter-conditioning', def: 'Changing a dog’s emotional response to a trigger by pairing it with something positive, so the trigger comes to predict good things.' },
    ],
  },
  {
    category: 'Nutrition',
    terms: [
      { term: 'AAFCO "complete and balanced"', def: 'A regulated label claim that a food provides all required nutrients for a stated life stage, substantiated by meeting AAFCO nutrient profiles or passing a feeding trial.' },
      { term: 'WSAVA guidelines', def: 'World Small Animal Veterinary Association recommendations for vetting pet-food makers (nutritional expertise, quality control, research) — a widely cited selection framework.' },
      { term: 'By-product', def: 'Animal parts other than skeletal muscle, which can include nutritious organ meat. Quality depends on the source; named by-products are more transparent than generic ones.' },
      { term: 'Grain-free / DCM', def: 'Grain-free diets replace grains with legumes or potatoes. The FDA has investigated a possible link between some grain-free diets and canine dilated cardiomyopathy (DCM); the picture remains unresolved.' },
      { term: 'Life stage', def: 'The nutrient profile a food is formulated for — growth (puppy), adult maintenance, or all life stages — with large-breed puppy formulas adding controlled calcium for skeletal development.' },
      { term: 'The 10% treat rule', def: 'A rule of thumb that treats should make up no more than about 10% of a dog’s daily calories so the complete-and-balanced diet still does its job.' },
    ],
  },
  {
    category: 'Breeds & General',
    terms: [
      { term: 'Purebred', def: 'A dog whose parents are the same registered breed, conforming to a breed standard. Predictable traits, but some breeds carry concentrated inherited health risks.' },
      { term: 'Mixed breed / designer dog', def: 'A dog of more than one breed — either incidental (mixed) or an intentional cross (e.g., "doodle"). Crossbreeds are not inherently hypoallergenic or healthier despite marketing.' },
      { term: 'Breed standard', def: 'A breed registry’s written description of the ideal dog — structure, coat, temperament — used in conformation showing and responsible breeding.' },
      { term: 'DVM', def: 'Doctor of Veterinary Medicine — the degree of a licensed veterinarian (VMD, from one school, is equivalent).' },
      { term: 'Working vs companion line', def: 'Within a breed, lines bred for job performance (drive, stamina) versus for pet temperament/looks. The difference can be large and matters when choosing a puppy.' },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Glossary', url: 'https://dog.com/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Dog Owner Glossary',
  description: 'Plain-language definitions of dog health, training, nutrition, and breed terms.',
  url: 'https://dog.com/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://dog.com/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function DogGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Reference</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Dog Owner Glossary
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The terms that come up at the vet, in training class, and on the food bag — defined in plain
          English so the advice you get actually makes sense.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} terms across dog health, behavior, nutrition, and breeds. Go deeper in the
          <Link href="/health" className="text-brand-primary hover:underline"> health</Link>,
          <Link href="/training" className="text-brand-primary hover:underline"> training</Link>, and
          <Link href="/nutrition" className="text-brand-primary hover:underline"> nutrition</Link> references.
        </p>

        {GLOSSARY.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-4 pb-2 border-b border-brand-border">
              {group.category}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((t) => (
                <div key={t.term} className="border-l-2 border-brand-primary/30 pl-4">
                  <dt className="font-display font-bold text-brand-dark text-base">{t.term}</dt>
                  <dd className="text-sm text-brand-text-mid leading-relaxed mt-0.5 ml-0">{t.def}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="Free Dog Health & Training Tips"
          subtitle="Plain-English guidance every Tuesday. No spam."
          source="glossary"
          ctaText="Subscribe Free"
        />
      </div>
    </>
  )
}
