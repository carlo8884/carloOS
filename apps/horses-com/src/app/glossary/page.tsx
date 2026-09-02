/**
 * Horses.com -- Equestrian Glossary
 * /glossary
 *
 * General horsemanship and equestrian reference: gaits, coat colors and
 * markings, conformation and anatomy, routine care and health, and
 * disciplines. Racing-specific terms belong at /racing/glossary;
 * saddle-fitting detail belongs at Saddle.com.
 *
 * DefinedTermSet JSON-LD for AI / answer-surface citation (GEO).
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

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
  siteId: 'horses-com',
  title: 'Equestrian Glossary -- Horse Terms Defined | Horses.com',
  description:
    'A plain-language equestrian glossary: gaits, coat colors, conformation anatomy, routine care terms, and disciplines -- horsemanship vocabulary defined.',
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
    category: 'Gaits & Movement',
    terms: [
      {
        term: 'Walk',
        def: 'The slowest of the four natural gaits, a four-beat sequence in which each hoof strikes the ground separately. A balanced, relaxed walk is a foundation of good training.',
      },
      {
        term: 'Trot (jog)',
        def: 'A two-beat diagonal gait in which pairs of legs move in unison: left front with right hind, then right front with left hind. Called a "jog" in western disciplines, where the tempo is slow and collected.',
      },
      {
        term: 'Canter (lope)',
        def: 'A three-beat gait with a moment of suspension; the natural working pace for most riding. Called a "lope" in western riding, where a slower, more collected tempo is preferred.',
      },
      {
        term: 'Gallop',
        def: 'The fastest gait -- a four-beat sequence with a moment of complete suspension. Horses can reach speeds of 25-30 mph at a working gallop; Thoroughbreds in a racing sprint exceed 40 mph.',
      },
      {
        term: 'Lead',
        def: 'At the canter, the foreleg that appears to reach furthest forward. On a circle or turn the horse should be on the inside lead for balance; the opposite is called a wrong lead or counter-canter when ridden intentionally.',
      },
      {
        term: 'Collection',
        def: 'A state in which the horse carries more of its weight on its hindquarters, lightens the forehand, and rounds through the back and neck. Collection requires years of progressive training.',
      },
      {
        term: 'Impulsion',
        def: 'Stored energy and forward desire originating from the hindquarters, directed and contained by the rider rather than allowed to run away. Impulsion is distinct from speed.',
      },
      {
        term: 'On the bit',
        def: 'A horse is said to be "on the bit" when it accepts a soft, consistent contact with the reins, carries itself in a round outline, and is responsive to aids. It is a quality of way of going, not a head position forced by equipment.',
      },
    ],
  },
  {
    category: 'Coat Colors & Markings',
    terms: [
      {
        term: 'Bay',
        def: 'A coat color combining a reddish-brown body with a black mane, tail, and legs (the "points"). Bay is one of the most common horse colors and comes in shades from light bay to dark/brown bay.',
      },
      {
        term: 'Chestnut',
        def: 'A coat of reddish-gold to dark copper, with a mane and tail the same color as or lighter than the body. Chestnuts have no black points.',
      },
      {
        term: 'Gray',
        def: 'A coat pattern in which dark hairs are progressively replaced by white as the horse ages, so that most gray horses are born dark and lighten over their lifetime. The underlying skin remains dark.',
      },
      {
        term: 'Roan',
        def: 'A coat with a mixture of white hairs evenly intermingled with the base color -- "blue roan" on black, "red roan" on chestnut or bay. Unlike gray, roan does not lighten with age.',
      },
      {
        term: 'Dun',
        def: 'A dilute coat color characterized by a tan or golden body with a darker "primitive" dorsal stripe running down the back. Grulla is the gray-dun variant.',
      },
      {
        term: 'Palomino',
        def: 'A golden coat with a white or cream mane and tail, produced by the cream dilution gene acting on a chestnut base. Palominos range from pale cream to rich gold.',
      },
      {
        term: 'Blaze',
        def: 'A wide white marking running down the full length of the face from forehead to muzzle.',
      },
      {
        term: 'Star',
        def: 'A small white marking on the forehead, usually between or above the eyes. Roughly circular, irregular, or diamond-shaped.',
      },
      {
        term: 'Snip',
        def: 'A small white marking on the muzzle, between or on the nostrils. A strip is a narrow white marking running down the face, narrower than a blaze.',
      },
      {
        term: 'Sock / stocking',
        def: 'White leg markings: a sock typically extends to the ankle or just above; a stocking extends to the knee or hock. Multiple white legs are noted separately for identification.',
      },
    ],
  },
  {
    category: 'Conformation & Anatomy',
    terms: [
      {
        term: 'Withers',
        def: 'The bony ridge at the base of the mane between the shoulder blades, the highest point of the back. Horse height is measured vertically from the ground to the withers.',
      },
      {
        term: 'Hands',
        def: 'The unit of measurement for horse height: one hand equals four inches (approximately 10 cm). A horse described as "15.2 hh" stands fifteen hands and two inches at the withers.',
      },
      {
        term: 'Poll',
        def: 'The top of the horse\'s head, directly behind the ears. The poll is a pressure point used in headstall fit and horsemanship; poll sensitivity can affect a horse\'s way of going.',
      },
      {
        term: 'Topline',
        def: 'The muscling along the neck, back, loin, and croup. A well-developed, strong topline is a marker of correct training, adequate protein nutrition, and appropriate conditioning.',
      },
      {
        term: 'Hock',
        def: 'The large joint in the hind leg corresponding anatomically to the human ankle. It is a major power-generating joint; hock issues are a common source of hind-end lameness.',
      },
      {
        term: 'Cannon bone',
        def: 'The large bone in the lower leg between the knee (front) or hock (hind) and the fetlock. Measurement of the cannon\'s circumference is a traditional indicator of bone density relative to body weight.',
      },
      {
        term: 'Fetlock',
        def: 'The joint at the base of the cannon bone, just above the pastern. It absorbs considerable impact at every stride; fetlock injuries range from windpuffs to more serious conditions.',
      },
      {
        term: 'Pastern',
        def: 'The short sloping bone (the proximal and middle phalanges) connecting the fetlock to the hoof. The angle of the pastern relative to the hoof is a key conformation assessment.',
      },
      {
        term: 'Frog',
        def: 'The V-shaped rubbery structure on the underside of the hoof. The frog acts as a shock absorber and anti-slip pad, and its regular ground contact promotes healthy circulation within the hoof.',
      },
    ],
  },
  {
    category: 'Care & Health',
    terms: [
      {
        term: 'Farrier',
        def: 'A trained professional who trims, balances, and shoes horse hooves. Routine farrier visits every six to eight weeks (sooner for some horses) are a standard component of equine care.',
      },
      {
        term: 'Float (teeth floating)',
        def: 'The process of filing down sharp edges and uneven points on a horse\'s cheek teeth using a dental rasp or power tool. Annual dental exams and floating as needed are recommended for most horses.',
      },
      {
        term: 'Colic',
        def: 'Abdominal pain in a horse, ranging from mild gas discomfort to life-threatening intestinal displacement or impaction. Colic is a leading cause of death in domestic horses; a horse showing colic signs should be assessed by a veterinarian promptly.',
      },
      {
        term: 'Laminitis',
        def: 'Inflammation of the sensitive laminae that attach the hoof wall to the coffin bone, causing pain and, in severe cases, rotation of the bone within the hoof. Laminitis has multiple causes including diet, systemic disease, and excessive work on hard ground.',
      },
      {
        term: 'Body condition score (BCS)',
        def: 'A standardized scale (most commonly the 1-9 Henneke scale) for assessing fat cover over key areas of the body. A BCS of 4-6 is considered healthy for most horses; the scale is used to guide feeding decisions.',
      },
      {
        term: 'Deworming',
        def: 'The administration of anthelmintic (antiparasitic) medications to control internal parasites. Current veterinary guidance favors fecal egg count testing to target treatment rather than calendar-interval dosing, in order to slow resistance.',
      },
      {
        term: 'Vaccination',
        def: 'Preventive immunization against infectious diseases. Core equine vaccines recommended by the AAEP include Eastern and Western equine encephalomyelitis, West Nile virus, tetanus, and rabies; risk-based vaccines are added based on geography and use.',
      },
      {
        term: 'Turnout',
        def: 'Time a horse spends free in a pasture or paddock, able to move, graze, and socialize. Regular turnout supports physical health (gut motility, joint mobility, hoof health) and behavioral wellbeing.',
      },
    ],
  },
  {
    category: 'Disciplines',
    terms: [
      {
        term: 'Dressage',
        def: 'A discipline focused on systematic gymnastic training of the horse through progressively complex movements, judged on harmony, impulsion, and collection. See the full guide at /disciplines/dressage.',
      },
      {
        term: 'Show jumping',
        def: 'A competitive discipline in which horse and rider jump a course of colored fences against the clock, penalized for faults (knocked rails, refusals) and time. See /disciplines/show-jumping.',
      },
      {
        term: 'Eventing',
        def: 'A three-phase discipline combining dressage, cross-country jumping, and show jumping, testing all-round athleticism and partnership. See /disciplines/eventing.',
      },
      {
        term: 'Western pleasure',
        def: 'A western show class judged on the horse\'s quiet, smooth, and ground-covering way of going at the walk, jog, and lope, and on the lightness of the rider\'s cues. See /disciplines/western-pleasure.',
      },
      {
        term: 'Trail riding',
        def: 'Recreational riding on trails, tracks, or open land, emphasizing a calm, sure-footed horse and a relaxed partnership. The most widely practiced equestrian activity worldwide. See /disciplines/trail-riding.',
      },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Glossary', url: 'https://horses.com/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Equestrian Glossary',
  description: 'Plain-language definitions of equestrian and horsemanship terms.',
  url: 'https://horses.com/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://horses.com/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function EquestrianGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Equestrian Glossary
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The language of horses and horsemanship in plain English -- gaits and movement,
          coat colors and markings, conformation and anatomy, routine care and health, and
          the major disciplines.
        </p>
      </div>

      {/* BREADCRUMB */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} equestrian terms, grouped by topic. Racing-specific vocabulary
          (furlongs, race types, jockey, silks) lives in the{' '}
          <Link href="/racing/glossary" className="text-brand-primary hover:underline">
            Racing Glossary
          </Link>
          . For breed profiles, see{' '}
          <Link href="/breeds" className="text-brand-primary hover:underline">
            Breeds
          </Link>
          ; for care guides, see{' '}
          <Link href="/care" className="text-brand-primary hover:underline">
            Care &amp; Husbandry
          </Link>
          .
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
          siteId="horses-com"
          title="Equestrian Reference"
          subtitle="Citation-anchored equine reference articles, one email a week."
          source="glossary"
          ctaText="Send the weekly notes"
        />
      </div>
    </>
  )
}
