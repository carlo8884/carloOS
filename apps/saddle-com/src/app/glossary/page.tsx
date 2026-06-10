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
  siteId: 'saddle-com',
  title: 'Tack & Saddle Fit Glossary -- Terms Defined | Saddle.com',
  description:
    'Plain-language tack glossary: saddle anatomy, saddle fit terms, English and Western equipment, bridle and bit basics, and girth and stirrup vocabulary defined.',
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
    category: 'Saddle Anatomy',
    terms: [
      {
        term: 'Tree',
        def: 'The rigid internal frame of a saddle, traditionally made from beech wood or fiberglass, that determines the saddle\'s shape and distributes the rider\'s weight across the horse\'s back. Every other fit decision flows from tree fit.',
      },
      {
        term: 'Gullet',
        def: 'The channel running the length of the underside of the saddle, positioned over the horse\'s spine. A correctly fitted gullet provides clearance along the entire spine and withers without pinching or pressing.',
      },
      {
        term: 'Pommel',
        def: 'The raised front arch of the saddle, forming the front of the seat. In English saddles it is relatively low; in Western saddles the pommel may incorporate the fork and horn.',
      },
      {
        term: 'Cantle',
        def: 'The raised rear section of the seat. It adds security for the rider and, with the pommel, defines the seat depth. Cantle height varies by discipline: dressage saddles tend toward higher cantles than jump saddles.',
      },
      {
        term: 'Seat',
        def: 'The area between pommel and cantle where the rider sits. Seat size is measured in inches from the nail head below the pommel to the top of the cantle, and is the primary rider-fit measurement.',
      },
      {
        term: 'Twist',
        def: 'The narrowest part of the seat, just behind the pommel, which sits between the rider\'s thighs. A narrower twist suits riders who prefer a more upright leg position; a wider twist provides a broader base.',
      },
      {
        term: 'Panel',
        def: 'The padded underside panels that contact the horse\'s back and transfer weight from the tree to the horse. Panels can be flocked with wool, or fitted with foam or CAIR air-cushion systems.',
      },
      {
        term: 'Flap',
        def: 'The leather side piece of an English saddle that covers the stirrup bar and billet straps and lies against the rider\'s leg. Flap cut and length vary by discipline: forward-cut for jumping, straighter for dressage.',
      },
      {
        term: 'Knee roll',
        def: 'A padded block on the front of the saddle flap that supports the rider\'s knee and thigh. More prominent in jumping saddles; minimal or absent in dressage saddles.',
      },
      {
        term: 'Billets',
        def: 'The three leather straps below the saddle flap to which the girth attaches. A healthy billet set shows no cracking, stretching, or fraying. Billets are among the first components to wear and should be checked regularly.',
      },
      {
        term: 'Stirrup bars',
        def: 'Metal bars fixed to the tree under the saddle flap from which the stirrup leathers hang. Most English saddle stirrup bars have a hinged safety catch designed to release the leather if the rider falls.',
      },
      {
        term: 'Points',
        def: 'The forward projections of the tree that extend down and forward under the flap, lying alongside the horse\'s shoulder muscles. Point angle and length determine how the saddle interacts with the shoulder during movement.',
      },
    ],
  },
  {
    category: 'Saddle Fit',
    terms: [
      {
        term: 'Gullet width',
        def: 'The internal width of the tree at the pommel, described as Narrow (N), Medium (M), or Wide (W) -- and in some systems as Extra Narrow or Extra Wide. Gullet width is matched to the width of the horse\'s withers and back. A qualified saddle fitter measures this on the horse.',
      },
      {
        term: 'Tree size',
        def: 'The combined descriptor for gullet width and overall tree dimensions. An estimator tool can provide a starting width from horse type and wither profile, but tree size must be verified by a qualified saddle fitter on the horse.',
      },
      {
        term: 'Flocking',
        def: 'The padding material inside the panels that contacts the horse\'s back. Wool flocking can be adjusted (reflocked) by a saddle fitter to correct minor fit issues; foam and CAIR systems are not adjustable in the same way.',
      },
      {
        term: 'Bridging',
        def: 'A fit fault where the panels make contact at the front and rear but leave a gap in the middle of the horse\'s back. Bridging creates pressure points at either end and can cause soreness and behavioral changes.',
      },
      {
        term: 'Rocking',
        def: 'A fit fault where the saddle tips forward and back when placed on the horse, indicating the panel curve does not match the horse\'s back curve. A rocking saddle destabilizes the rider and concentrates pressure unevenly.',
      },
      {
        term: 'Wither clearance',
        def: 'The space between the gullet channel (or pommel arch) and the horse\'s withers, both at rest and in motion. The widely cited guideline is at least two to three fingers of clearance; a fitter assesses this under load.',
      },
      {
        term: 'Balance',
        def: 'Whether the lowest point of the saddle seat is level, or tipped forward or back. A balanced saddle places the rider in a neutral position over the horse\'s center of gravity; an unbalanced saddle tips the rider onto the fork or cantle.',
      },
      {
        term: 'Panel contact',
        def: 'How evenly the underside panels rest against the horse\'s back along their full length. Even contact distributes weight; uneven contact (gaps, pressure points) is the core of most saddle-fit problems.',
      },
      {
        term: 'Saddle fitter',
        def: 'A qualified professional who assesses saddle fit for both horse and rider. In the UK the Society of Master Saddlers (SMS) certifies qualified saddlers; the Master Saddlers Association (MSA) offers another recognized qualification. No online tool or checklist replaces an in-person assessment.',
      },
    ],
  },
  {
    category: 'English vs Western Saddles',
    terms: [
      {
        term: 'English saddle',
        def: 'A lighter, closer-contact saddle design used across dressage, jumping, eventing, and general riding. English saddles have a minimal profile, no horn, and attach to the horse via a girth and billets.',
      },
      {
        term: 'Western saddle',
        def: 'A heavier saddle with a deep seat, pronounced horn, and large skirts, originating in working ranch and stock-horse traditions. Western saddles distribute weight over a larger surface area and attach via a cinch and rigging.',
      },
      {
        term: 'Monoflap',
        def: 'An English saddle design where a single thicker flap replaces the traditional flap-and-sweat-flap combination, reducing bulk between rider leg and horse and improving tactile feedback.',
      },
      {
        term: 'Close contact saddle',
        def: 'An English jumping saddle with a minimal, forward-cut flap and shallow seat designed to allow the rider to fold closely over the fence. Less seat depth than an all-purpose or dressage saddle.',
      },
      {
        term: 'Dressage saddle',
        def: 'An English saddle with a deep seat, straight flap, and long billets (allowing a short girth below the flap) that positions the rider\'s leg long and upright for flatwork.',
      },
      {
        term: 'Jumping saddle',
        def: 'An English saddle with a forward-cut flap, knee rolls, and shallower seat that allows the rider to shorten the stirrup and adopt a two-point position over fences.',
      },
      {
        term: 'Horn',
        def: 'The upward-projecting knob at the front of a Western saddle, originally used for roping cattle. The horn sits atop the fork (swells) and is absent from English saddles.',
      },
      {
        term: 'Fork / swells',
        def: 'The front section of a Western saddle tree that supports the horn and bears on the horse\'s shoulders. Fork width and angle affect shoulder clearance and fit in the same way that tree points do in English saddles.',
      },
      {
        term: 'Fenders',
        def: 'The broad leather straps on a Western saddle that hang from the stirrup bars, through which the stirrup leathers run. Fenders protect the rider\'s leg from the horse\'s sweat and the rigging hardware.',
      },
      {
        term: 'Rigging',
        def: 'The system of rings, straps, and hardware on a Western saddle to which the cinch attaches. Rigging position (full, 7/8, 3/4) affects how the saddle sits on the horse\'s back during work.',
      },
      {
        term: 'Skirt',
        def: 'The large leather panels that extend beneath and around the seat of a Western saddle. Skirt shape (square, round, semi-quarter-horse bars) is part of the tree-fit equation for Western saddles.',
      },
      {
        term: 'Cinch',
        def: 'The Western equivalent of the girth: a wide strap that passes under the horse\'s belly and attaches to the rigging on each side to secure the saddle. Cinches are commonly made from mohair, neoprene, or leather.',
      },
    ],
  },
  {
    category: 'Bridle & Bit',
    terms: [
      {
        term: 'Bridle',
        def: 'The headgear assembly comprising crownpiece, browband, cheekpieces, noseband, and (usually) a bit and reins, used to communicate rein aids from rider to horse. Fit affects comfort and responsiveness.',
      },
      {
        term: 'Snaffle',
        def: 'The most common bit type, acting via direct pressure on the corners or bars of the mouth. Snaffles have no curb chain and are considered a mild starting point for bit selection in most disciplines.',
      },
      {
        term: 'Curb bit',
        def: 'A bit that acts via leverage: pressure on the reins rotates the shank, applying simultaneous poll, chin-groove (curb chain), and mouth pressure. Curb bits require a more educated hand than snaffles.',
      },
      {
        term: 'Noseband',
        def: 'The part of the bridle that encircles the horse\'s nose. Nosebands vary by discipline and function (cavesson, flash, grackle, drop) and must be fitted to allow the horse to mouth the bit without being clamped shut.',
      },
      {
        term: 'Reins',
        def: 'The straps running from the bit rings to the rider\'s hands, transmitting rein aids. Rein materials include leather, rubber-covered, webbing, and continental styles; rein width and grip affect tactile communication.',
      },
      {
        term: 'Browband',
        def: 'The horizontal band of the bridle that crosses the horse\'s forehead, keeping the crownpiece from sliding back. Browband length must allow clearance at the base of the ears without pulling the crownpiece forward.',
      },
    ],
  },
  {
    category: 'Girth, Cinch & Stirrups',
    terms: [
      {
        term: 'Girth',
        def: 'The strap that secures an English saddle by passing under the horse\'s belly and fastening to the billets on each side. Girths are sized in inches (measured around the barrel) and vary in material, shape, and elasticity.',
      },
      {
        term: 'Stirrup iron',
        def: 'The metal frame that hangs from the stirrup leather and into which the rider places the foot. Safety stirrups (peacock, flex, offset-eye) release the foot on a fall; standard fillis irons are the traditional choice.',
      },
      {
        term: 'Stirrup leather',
        def: 'The strap connecting the stirrup iron to the stirrup bar. Leather quality affects stretch: cheap leathers stretch unevenly, making the rider\'s legs appear uneven. Leathers should be replaced when they begin to stretch.',
      },
      {
        term: 'Half pad',
        def: 'A supplementary pad placed between the saddle panels and the saddle pad, covering only the panel area. Half pads can be used to fine-tune minor fit issues but should not mask a fundamentally poor-fitting saddle.',
      },
      {
        term: 'Saddle pad',
        def: 'A cloth or foam pad placed between saddle and horse to protect both and absorb sweat. A saddle pad does not substitute for correct saddle fit; it should lie flat and not bunch under the panels.',
      },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Glossary', url: 'https://saddle.com/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Tack & Saddle Fit Glossary',
  description: 'Plain-language definitions of tack and saddle fit terms for equestrians.',
  url: 'https://saddle.com/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://saddle.com/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function TackGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
            <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-accent">
              Reference
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Tack &amp; Saddle Fit Glossary
          </h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
            The language of tack and saddle fit in plain English -- saddle anatomy, fit
            terminology, English and Western equipment, bridle and bit basics, and girth
            and stirrup vocabulary.
          </p>
        </div>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} tack and saddle fit terms, grouped by topic. To put the fit
          terms to work, the{' '}
          <Link href="/tools/tree-size-estimator" className="text-brand-primary hover:underline">
            tree size estimator
          </Link>{' '}
          gives a starting gullet-width estimate from horse type and wither profile, and the{' '}
          <Link href="/saddle-fit-checklist" className="text-brand-primary hover:underline">
            12-point saddle fit checklist
          </Link>{' '}
          walks through each check at the try-on.
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
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="Fit, brand comparisons, and market intelligence -- every other week."
          ctaText="Get Free Guide"
          source="glossary"
          perks={[
            'SMS-criteria fit checks',
            'Market pricing context',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </>
  )
}
