/**
 * Saddle accessory buyer-guide reference data for /accessories/[slug] pages.
 *
 * Sources of truth (per QC-STANDARDS §1): Society of Master Saddlers (SMS, UK)
 * tack-fit guidance, Master Saddlers Association (MSA, US) tack and fit
 * references, USEF Rule Book (where it touches stirrups, bridles, reins, and
 * auxiliary tack), and manufacturer technical disclosures. No fabricated test
 * results, no "we tested" claims, no fake reviewer credentials. All actual
 * fitting and selection — especially of stirrups, girths, bridles, and
 * breastplates that touch the horse — must be confirmed by a qualified
 * professional saddler or trainer on the horse.
 *
 * Brand cross-links resolve to existing /brands/[slug] pages where possible —
 * see apps/saddle-com/src/data/saddle-brands.ts for the canonical brand list.
 * Accessory-only brands (e.g. Free Jump, Wahlsten) do not have brand pages and
 * are listed as text references only.
 */

export interface AccessoryType {
  type: string
  bestFor: string
  drawbacks: string
}

export interface AccessoryPriceRange {
  tier: string
  range: string
  summary: string
}

export interface AccessoryBrand {
  name: string
  knownFor: string
  /** Optional brand slug if a /brands/[slug] page exists; otherwise undefined. */
  slug?: string
}

export interface AccessoryFaq {
  question: string
  answer: string
}

export interface AccessoryCategory {
  slug: string
  categoryName: string
  /** Short hero/meta subtitle (≤ ~140 chars). */
  tagline: string
  /** Single emoji or short icon glyph for the hub-page tile. */
  icon: string
  /** Opening "What it is" paragraph. */
  whatItIs: string
  /** 4–6 bullet points explaining the why. */
  whyItMatters: string[]
  /** Types & use cases — rendered as a table. */
  typesAndUseCases: AccessoryType[]
  /** How-to-choose checklist. */
  howToChoose: string[]
  /** Common mistakes riders make. */
  commonMistakes: string[]
  /** Price tiers (entry / mid / premium). */
  priceRanges: AccessoryPriceRange[]
  /** Top brands worth shortlisting. */
  topBrands: AccessoryBrand[]
  /**
   * Why this is a useful affiliate category and how the page funnels purchase
   * intent — used in the article body to set reader expectations honestly.
   */
  affiliateAngle: string
  faqs: AccessoryFaq[]
}

export const ACCESSORY_CATEGORIES: AccessoryCategory[] = [
  // ─── STIRRUPS ─────────────────────────────────────────────────────────────
  {
    slug: 'stirrups',
    categoryName: 'Stirrups',
    icon: '🦶',
    tagline:
      'Safety stirrups, fillis, jointed — how the right pair changes rider security, ankle health, and discipline legality.',
    whatItIs:
      'Stirrups (or "irons" in English riding) are the metal or composite footrests that hang from the saddle\'s stirrup leathers and bear the rider\'s leg weight. Modern stirrups range from the traditional stainless-steel fillis to safety designs with magnetic release, flexible arms, or cage sides. Choice affects rider security on a fall, ankle flexion, joint loading, and — for competition — rule compliance under USEF, FEI, and breed-association rule books.',
    whyItMatters: [
      'Safety stirrups are the single highest-leverage change a rider can make to reduce the consequences of an unplanned dismount — they release the foot rather than trapping it.',
      'Stirrup tread width affects whether the ball of the foot sits stably; too narrow forces the foot to perch, too wide encourages the foot to slip through.',
      'Joint-loading: flexible-arm or composite stirrups reduce shock transmitted to the rider\'s knees, hips, and lower back, which matters for riders with arthritis, returning to riding after injury, or schooling young horses.',
      'Discipline legality varies: USEF hunter and equitation classes traditionally favour fillis-pattern irons; eventing cross-country routinely permits cage and safety designs.',
      'Weight balance: heavier stirrups hang straighter and are easier to pick up mid-ride; very light composite stirrups can flip on the leather and become harder to recover.',
    ],
    typesAndUseCases: [
      {
        type: 'Fillis (traditional stainless steel)',
        bestFor:
          'Hunter, equitation, and classical dressage where a traditional appearance is rewarded; durable, indestructible, holds value.',
        drawbacks:
          'No release mechanism — a foot can hang in the stirrup on a fall; transmits all impact straight to the rider\'s joints.',
      },
      {
        type: 'Peacock safety (rubber-band side)',
        bestFor:
          'Young riders and beginners; the rubber-band side breaks away if the foot is trapped on a fall.',
        drawbacks:
          'Asymmetric weighting makes them hang unevenly; the rubber band perishes with sun and sweat and must be replaced; not show-ring legal in many adult classes.',
      },
      {
        type: 'Bent-leg / flex-arm safety',
        bestFor:
          'Adult amateur and pro riders who want a release mechanism while keeping a traditional-looking iron; releases the foot via a hinge or flex panel.',
        drawbacks:
          'Higher price than fillis; the moving parts need annual inspection — a corroded hinge can fail to release.',
      },
      {
        type: 'Magnetic-release safety (Free Jump, Tech-Stirrups, Acavallo)',
        bestFor:
          'Eventers and jumpers who want a release that triggers on lateral force; commonly used at FEI level.',
        drawbacks:
          'Magnets weaken over time and after impact; some designs release accidentally on steep takeoffs; among the priciest stirrup categories.',
      },
      {
        type: 'Jointed / flexible-arm (e.g. Sprenger Bow Balance, Herm Sprenger System-4)',
        bestFor:
          'Riders with joint pain or recovering from lower-limb injury; the flex absorbs landing impact and encourages a deeper heel.',
        drawbacks:
          'Pricier than rigid irons; some designs are heavier and harder to recover mid-ride.',
      },
      {
        type: 'Western oxbow',
        bestFor:
          'Reiners, cutters, and ranch riders who want the foot deep in the stirrup for stops and spins; encourages heel-down position.',
        drawbacks:
          'Foot can hang up on a fall — many Western disciplines now offer breakaway hood or tapaderos.',
      },
      {
        type: 'Western roper / bell-bottom',
        bestFor:
          'Ropers and trail riders who mount and dismount frequently; wide tread is easy to find with the toe.',
        drawbacks:
          'Less heel-down support than an oxbow; not show-ring legal in some reined classes.',
      },
    ],
    howToChoose: [
      'Start with safety: unless the rider competes in a class with a fillis-only tradition, a release-mechanism stirrup is the higher-leverage choice.',
      'Match the tread to the boot: the tread should be 1 to 1.5 inches wider than the widest point of the boot at the ball of the foot.',
      'Confirm weight: a too-light stirrup (under ~100 g/side for adults) flips on the leather; a too-heavy stirrup punishes recovery after a swing-off.',
      'Check the eye width: the leather must run through the eye without binding; some composite stirrups have narrow eyes that wear leathers faster.',
      'For competition, read the discipline rule book before buying — USEF hunter, dressage, and reining rules differ on what is legal.',
      'For young or returning riders, prioritise a magnetic-release or bent-leg pattern over a fillis even if the show ring later requires changing irons.',
    ],
    commonMistakes: [
      'Buying a stirrup because a top rider is paid to ride in it — the right stirrup is the one that fits your boot, your discipline, and your joints.',
      'Reusing rubber stirrup pads past their useful life: cracked pads let the foot slip and are a common cause of stirrup loss over fences.',
      'Skipping the annual inspection of magnetic and flex-arm safety stirrups; a corroded mechanism is worse than no safety feature at all.',
      'Choosing very lightweight composite stirrups for a horse that requires the rider to recover the iron quickly (green horses, school horses) — heavier irons hang straighter.',
      'Treating Peacock irons as adult safety stirrups — they were designed for children and the rubber band perishes quickly with adult weight.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$30–$80',
        summary:
          'Standard stainless fillis irons, basic Peacock safety stirrups, and entry-level Western oxbows. Serviceable for casual use and lesson barns.',
      },
      {
        tier: 'Mid',
        range: '$80–$200',
        summary:
          'Quality fillis with composite tread inserts, bent-leg safety stirrups from established makers, mid-tier flex-arm composites.',
      },
      {
        tier: 'Premium',
        range: '$200–$450+',
        summary:
          'Free Jump Soft\'Up Pro, Sprenger Bow Balance, Tech-Stirrups Venice — magnetic-release and engineered-flex designs used at FEI level.',
      },
    ],
    topBrands: [
      {
        name: 'Herm Sprenger',
        knownFor:
          'German engineering — Bow Balance and System-4 flex stirrups, plus the long-running classical fillis line.',
      },
      {
        name: 'Free Jump',
        knownFor:
          'French-made magnetic-release safety stirrups — Soft\'Up Pro is the FEI-favourite reference design.',
      },
      {
        name: 'Tech-Stirrups',
        knownFor:
          'Italian composite safety stirrups (Venice, Iris, Mythos) — strong colour and customisation options.',
      },
      {
        name: 'Acavallo',
        knownFor:
          'Italian innovation — Arena Aluminium with magnetic release and full-cradle tread.',
      },
      {
        name: 'Compositi',
        knownFor:
          'Affordable composite irons — entry-level safety options for school programmes.',
      },
    ],
    affiliateAngle:
      'Stirrups are one of the highest purchase-intent saddle accessories: the buyer typically knows their boot size, their discipline, and whether they want a safety feature. We point readers to category-leading models on Amazon and SmartPak via cited model names; the choice still depends on the rider\'s discipline rules and a coach\'s sign-off.',
    faqs: [
      {
        question: 'Are safety stirrups legal in the show ring?',
        answer:
          'It depends on the discipline. USEF hunter classes have historically favoured traditional fillis but increasingly accept flex-arm and magnetic-release designs; USEF dressage and eventing routinely accept safety stirrups; some breed-show reining and Western pleasure classes require specific patterns. Always check the current rule book for your class.',
      },
      {
        question: 'How often should stirrup leathers be replaced?',
        answer:
          'The Master Saddlers Association recommends inspecting leathers at every grooming and replacing them when stretching is uneven, when stitching shows wear, or after any near-miss. For schoolwork, many qualified saddlers recommend replacing standard leathers every 5–7 years; nylon-reinforced and synthetic leathers can last longer.',
      },
      {
        question: 'What stirrup is best for a beginner adult?',
        answer:
          'A bent-leg or flex-arm safety stirrup is the most common recommendation for returning or beginner adults. It releases on a fall, keeps a traditional look, and reduces joint loading on landing — all three matter for a rider whose riding fitness is still building.',
      },
      {
        question: 'Should I match stirrup size to the saddle or to the boot?',
        answer:
          'Always the boot. Measure the ball of the foot at the widest point and add roughly 1 to 1.5 inches — the resulting number is the minimum tread width. A stirrup that fits the saddle but not the foot is the more dangerous error.',
      },
      {
        question: 'How heavy should an adult stirrup be?',
        answer:
          'Adult stirrups are usually in the 150–350 g per side range. Lighter than ~100 g per side tends to flip on the leather; heavier than ~400 g per side punishes recovery. Most flex-arm safety stirrups sit in the middle of the range.',
      },
    ],
  },

  // ─── SADDLE PADS ──────────────────────────────────────────────────────────
  {
    slug: 'saddle-pads',
    categoryName: 'Saddle Pads',
    icon: '🟫',
    tagline:
      'Half-pad vs full-pad, sheepskin vs gel, riser pads — what a pad can and cannot fix on a saddle that almost fits.',
    whatItIs:
      'A saddle pad is the cloth, fleece, foam, or gel layer between the saddle and the horse\'s back. Its primary jobs are to absorb sweat, protect the saddle from sweat and dirt, and provide a small amount of additional shock absorption. A correctly-fitted saddle should not depend on a pad for fit; a pad cannot make a wrong tree right, and using a pad to compensate for poor fit is the most common saddle-fit mistake reported by qualified saddlers.',
    whyItMatters: [
      'A pad protects the saddle\'s panels — sweat-soaked panels degrade and lump faster, leading to expensive reflocking.',
      'A pad spreads heat: sheepskin in particular wicks moisture and helps prevent the friction blisters that show up after long schools.',
      'The wrong pad makes a correctly-fitted saddle fit worse — a too-thick pad on a snug saddle effectively narrows the gullet and presses the spine.',
      'Half-pads and shaped pads exist for a reason: a flat square pad bunches at the wither and creates pressure where there should be clearance.',
      'Riser and corrective pads have a narrow legitimate use (temporary fix while a saddler refloccs) but are not a permanent solution.',
      'For competition, pad colour, shape, and logos are governed by USEF, FEI, and breed-show rule books — read the rule before you buy.',
    ],
    typesAndUseCases: [
      {
        type: 'Square / dressage pad (cotton or quilted)',
        bestFor:
          'Daily flatwork and competition; cotton wicks sweat, washes well, and is the default for English schooling.',
        drawbacks:
          'Adds 6–10 mm of cushioning — a snug saddle becomes snugger; bunches at the wither if not pulled up into the gullet before girthing.',
      },
      {
        type: 'Half-pad (sheepskin or foam)',
        bestFor:
          'Layered under a square pad to add localised shock absorption without raising the back of the saddle.',
        drawbacks:
          'Stacked thickness can change saddle balance; sheepskin must be washed in cool water and air-dried or it mats.',
      },
      {
        type: 'Sheepskin full pad (Mattes, Lemieux, Fleeceworks)',
        bestFor:
          'Long schools, hot climates, sensitive-skinned horses; sheepskin breathes and reduces friction.',
        drawbacks:
          'Higher purchase price; weight gain when wet; many show classes do not allow visible sheepskin trim in the ring.',
      },
      {
        type: 'Gel pad (ThinLine, Acavallo Gel)',
        bestFor:
          'Riders whose seat needs damping (post-back-injury, returning to riding); reduces high-frequency vibration.',
        drawbacks:
          'Gel can deaden the seat\'s feel for an experienced rider; many gel pads are heavier than expected and slip if not secured.',
      },
      {
        type: 'Riser / wedge pad (front, rear, or full shim)',
        bestFor:
          'Temporary correction of a slightly cantle-high or pommel-low saddle while waiting for a fitter; some shim-pocket pads allow per-side balance correction.',
        drawbacks:
          'Permanent reliance on a riser pad masks a fit problem that a qualified saddler should fix at the saddle; long-term use can compress shoulder muscle.',
      },
      {
        type: 'Western blanket / Navajo pad',
        bestFor:
          'Trail, ranch, and pleasure work — classic woolen blanket with felt or wool top.',
        drawbacks:
          'Wool needs full air-drying and brushing or it mats; some show classes specify pad style.',
      },
      {
        type: 'Western contoured wool felt',
        bestFor:
          'Reining, cutting, and ranch work where the saddle stays on for long hours; absorbs concussion under the bars.',
        drawbacks:
          'Heavier than synthetic alternatives; takes longer to dry; expensive at top tier.',
      },
    ],
    howToChoose: [
      'Match the pad to the saddle shape: English dressage and jumping pads are cut to follow the saddle\'s flap line; using the wrong shape creates pressure where the pad bunches.',
      'Sweat first, padding second — the pad\'s primary job is to keep the panels clean. Cushioning is a bonus, not the goal.',
      'Stay thin under a snug saddle: every 5 mm of additional pad equivalently narrows the tree and tightens gullet clearance.',
      'For correction work, prefer shim-pocket pads over fixed-thickness risers — and treat the correction as temporary until a saddler reflocks.',
      'For Western work, pad thickness must match the tree fit; a too-thick pad on a saddle that already fits perches the rider and lifts the bars off the back muscle.',
      'For show classes, confirm pad colour, logos, and trim against the current rule book — colour and logo violations are common cause of warnings.',
    ],
    commonMistakes: [
      'Using a riser pad to compensate for a saddle that does not fit — fixes the symptom for a week, makes the underlying problem worse over a season.',
      'Stacking three pads (square + half-pad + sheepskin) so the saddle effectively becomes the wrong size.',
      'Failing to pull the pad up into the gullet before girthing — the most common cause of wither rubs.',
      'Washing sheepskin in hot water — it mats permanently and is no longer absorbent.',
      'Ignoring asymmetric sweat marks: an uneven sweat pattern after work is a fit problem, not a pad problem.',
      'Buying a flashy show pad in a colour the rule book disallows — read the rule book first.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$25–$70',
        summary:
          'Quilted cotton square pads, basic Western blankets, entry-level synthetic half-pads. Serviceable for schooling and lesson barns.',
      },
      {
        tier: 'Mid',
        range: '$70–$200',
        summary:
          'Branded square pads (Lemieux, Eskadron), entry sheepskin half-pads, wool felt Western pads, shim-pocket correction pads.',
      },
      {
        tier: 'Premium',
        range: '$200–$500+',
        summary:
          'E.A. Mattes custom-fit sheepskin pads, top-tier ThinLine, premium contoured Western wool felts. Made-to-measure available.',
      },
    ],
    topBrands: [
      {
        name: 'E.A. Mattes',
        knownFor:
          'German-made custom-fit sheepskin pads — every dimension and shim placement specified by the buyer.',
      },
      {
        name: 'Lemieux',
        knownFor:
          'UK schooling and show pads — wide colour range, durable bamboo lining.',
      },
      {
        name: 'ThinLine',
        knownFor:
          'Low-profile shock-absorbing pads — favoured by riders with back issues.',
      },
      {
        name: 'Fleeceworks',
        knownFor:
          'US sheepskin pads with shim-pocket correction options.',
      },
      {
        name: '5 Star Equine',
        knownFor:
          'US-made contoured wool-felt Western pads — strong reputation among reiners and ranch riders.',
      },
      {
        name: 'Toklat',
        knownFor:
          'Wide range of Western and English pads — Coolback and Woolback lines.',
      },
    ],
    affiliateAngle:
      'Saddle pads are a high-volume, repeat-purchase category — riders replace pads every 1–2 years and own more than one. We point to category-leading models on SmartPak and Amazon; the buying decision is dominated by saddle shape, discipline, and show-ring legality, not flashy marketing.',
    faqs: [
      {
        question: 'Will a thicker saddle pad fix a saddle that pinches?',
        answer:
          'No — adding padding under a narrow saddle effectively narrows the tree further and tightens gullet clearance. The Society of Master Saddlers and Master Saddlers Association both note that pad-as-fix is the most common saddle-fit error. A qualified saddler should reflock or refit the saddle; the pad change is a short-term workaround at best.',
      },
      {
        question: 'Is sheepskin worth the price?',
        answer:
          'For long schools, hot climates, and sensitive-skinned horses, sheepskin\'s breathability and friction reduction earn the price. For short schooling sessions in temperate climates, a quality cotton or bamboo-lined quilted pad performs almost as well at a fraction of the cost.',
      },
      {
        question: 'How often should I wash my saddle pad?',
        answer:
          'Cotton and synthetic pads after every 3–5 rides; sheepskin pads every 8–12 rides in cool water with a wool-safe detergent. The sooner you wash sweat out, the longer the pad lasts.',
      },
      {
        question: 'Can I use the same pad for dressage and jumping?',
        answer:
          'Only if the pad is cut to the right shape for the saddle. Dressage pads are cut long and straight to follow the dressage flap; jumping pads are cut shorter and angled forward. Using the wrong shape leads to bunching and rubs.',
      },
      {
        question: 'Do show classes regulate saddle pad colour?',
        answer:
          'Yes. USEF hunter classes traditionally require white or fitted hunter pads; USEF and FEI dressage allow white with limited logo placements; jumpers are permissive. Western breed shows specify pad styles by class. Always read the current rule book.',
      },
    ],
  },

  // ─── GIRTHS ────────────────────────────────────────────────────────────────
  {
    slug: 'girths',
    categoryName: 'Girths',
    icon: '🪢',
    tagline:
      'Anatomical, elastic, mohair, neoprene — and the difference between English girths and Western billet/cinch fit.',
    whatItIs:
      'A girth (English) or cinch (Western) is the strap that holds the saddle on the horse. It runs from the saddle\'s billets or rigging, under the barrel, and back up to the opposite side. Modern girths range from straight leather and elastic to anatomically curved shapes that clear the elbow and pectoral muscles. The right girth keeps the saddle stable without restricting forelimb action, breathing, or pectoral function — the wrong girth shortens stride, sours horses, and causes girth galls.',
    whyItMatters: [
      'Saddle stability depends on girth — a perfectly-fitted saddle slips with a poor girth.',
      'Forelimb action: a straight girth that crosses the elbow shortens stride; an anatomical girth that cuts back behind the elbow restores it.',
      'Skin and pectoral health: tight or rough girths cause galls, sores, and pectoral muscle restriction (girth-sour behaviour).',
      'Material affects sweat, allergies, and cleaning: leather, mohair, neoprene, and synthetic all handle moisture differently.',
      'English vs Western fit is meaningfully different: English girths attach to billets and are short; Western cinches attach to rigging via latigo straps and are longer.',
      'Asymmetric elastic vs full elastic: girths with elastic on both ends pull the saddle into balance; one-sided elastic creates asymmetric tension.',
    ],
    typesAndUseCases: [
      {
        type: 'Straight leather girth (English)',
        bestFor:
          'Classical dressage, hunter ring, riders who want traditional aesthetics and a long-life girth.',
        drawbacks:
          'Crosses the elbow on some conformations; needs regular conditioning; less forgiving than elastic-end designs.',
      },
      {
        type: 'Anatomical / shaped girth (English)',
        bestFor:
          'Forward-moving horses, modern jumpers, horses with short backs or close-set elbows; cuts back behind the elbow.',
        drawbacks:
          'Pricier than straight girths; the shape must match the horse — a too-narrow cutback rubs.',
      },
      {
        type: 'Mohair string girth',
        bestFor:
          'Hot climates, sensitive-skinned horses, endurance — breathable and flexible.',
        drawbacks:
          'Strings catch on hair; harder to clean than smooth materials; some show rings prefer leather.',
      },
      {
        type: 'Neoprene girth (English or Western)',
        bestFor:
          'Wet conditions, schooling barns where girths are passed between horses; wipes clean and resists mold.',
        drawbacks:
          'Can irritate sensitive skin; traps heat in hot climates; some horses develop neoprene allergies.',
      },
      {
        type: 'Fleece-lined girth',
        bestFor:
          'Thin-skinned Thoroughbreds, horses prone to galls, horses returning from layoff with reduced muscle.',
        drawbacks:
          'Holds sweat and must be brushed and washed regularly; fleece mats over time.',
      },
      {
        type: 'Western roper cinch (mohair or fleece)',
        bestFor:
          'Ranch, roping, and trail work; thick mohair or fleece spreads load.',
        drawbacks:
          'Mohair stretches and must be re-tightened mid-ride; fleece needs full drying or mildews.',
      },
      {
        type: 'Western neoprene cinch',
        bestFor:
          'Pleasure, trail, and lesson programmes where the cinch is moved between horses.',
        drawbacks:
          'Can heat up; some horses are sensitive to neoprene; not show-ring traditional.',
      },
      {
        type: 'Dressage short girth (long billet)',
        bestFor:
          'Dressage saddles with long billets that sit below the rider\'s leg for close contact.',
        drawbacks:
          'Specific to dressage saddles; sizing is short and easy to mis-order.',
      },
    ],
    howToChoose: [
      'Measure from billet-to-billet on the saddle for English; measure cinch length from D-ring to D-ring for Western.',
      'For horses with short or sensitive backs, choose an anatomical cutback — the shape clears the elbow and pectoral muscle.',
      'For sweat-prone horses or hot climates, mohair or fleece-lined girths breathe better than neoprene.',
      'For horses prone to galls, prefer fleece-lined or sheepskin-lined girths and ensure 100 percent clean before every ride.',
      'For competitions, confirm material and colour against the rule book — many show classes specify leather or a specific colour.',
      'For dressage long-billet saddles, double-check girth length — sizing differs from standard English girths.',
      'For Western, match cinch material to climate and check the latigo length is appropriate for the horse\'s barrel.',
    ],
    commonMistakes: [
      'Buying a straight girth on a horse with close-set elbows or short stride — common cause of girth-sour behaviour.',
      'Skipping girth conditioning on leather girths — dry, cracked leather galls.',
      'Tightening neoprene girths in three-step increments without giving the horse time to relax — neoprene grabs and pinches.',
      'Reusing a sweat-encrusted girth — galls develop fast on dirty equipment.',
      'Ordering the wrong length for a dressage long-billet saddle — short girths come in different ranges from standard girths.',
      'Believing a girth alone can solve a saddle that rolls — saddle balance comes from saddle fit first, girth second.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$35–$80',
        summary:
          'Basic synthetic, neoprene, or short-leather girths and standard cotton mohair Western cinches. Functional for schooling.',
      },
      {
        tier: 'Mid',
        range: '$80–$200',
        summary:
          'Anatomical shaped leather girths, branded fleece-lined girths, premium mohair Western cinches.',
      },
      {
        tier: 'Premium',
        range: '$200–$450+',
        summary:
          'Total Saddle Fit StretchTec, Fairfax anatomical, Stübben Equi-Soft girths; custom-made roper cinches.',
      },
    ],
    topBrands: [
      {
        name: 'Total Saddle Fit',
        knownFor:
          'StretchTec anatomical girth — widely cited for restoring stride length in elbow-restricted horses.',
      },
      {
        name: 'Fairfax',
        knownFor:
          'UK pressure-mapping-tested anatomical girths — research-driven design.',
      },
      {
        name: 'Stübben',
        knownFor:
          'Equi-Soft girths — anatomical leather designs from the German saddlemaker.',
        slug: 'stubben',
      },
      {
        name: 'Professional\'s Choice',
        knownFor:
          'US Western neoprene cinches with SMx air-flow design.',
      },
      {
        name: 'Weaver',
        knownFor:
          'Affordable Western cinches and English girths — schoolbarn workhorses.',
      },
      {
        name: 'Mattes',
        knownFor:
          'Custom sheepskin-lined girths matched to horse conformation.',
      },
    ],
    affiliateAngle:
      'Girths are a high-intent purchase category: riders shop after a fit or behaviour problem, and they shop fast. We point to the named anatomical and material-specific models — most of which are stocked on SmartPak and Amazon — while making clear that girth choice cannot substitute for a saddler\'s saddle-fit check.',
    faqs: [
      {
        question: 'How tight should a girth be?',
        answer:
          'Tight enough that the saddle does not slip when the rider mounts and the horse is asked to walk on. The Society of Master Saddlers convention is that you should be able to slip a flat hand under the girth at the elbow with mild resistance; over-tightening restricts breathing and pectoral function.',
      },
      {
        question: 'Why do anatomical girths cost more?',
        answer:
          'The shape is more complex to cut, the materials are usually higher grade, and many of the leading designs (Fairfax, Total Saddle Fit) are based on pressure-mapping research. The premium reflects engineering, not branding.',
      },
      {
        question: 'Can the wrong girth restrict a horse\'s movement?',
        answer:
          'Yes. A straight girth that crosses the elbow on a short-coupled or close-elbowed horse shortens forelimb action. Switching to an anatomical cutback is a common first step when a coach reports the horse "feels short in front".',
      },
      {
        question: 'How long do girths last?',
        answer:
          'Quality leather girths last 8–15 years with annual conditioning. Neoprene and synthetic girths typically last 3–6 years before the surface degrades. Mohair and fleece girths last 4–8 years depending on washing care.',
      },
      {
        question: 'What is the difference between an English girth and a Western cinch?',
        answer:
          'An English girth is short (typically 38–56 inches) and attaches to billets sewn into the saddle. A Western cinch is longer (typically 26–36 inches D-to-D), attaches via latigo straps through the rigging Ds, and is usually wider to spread load on a heavier saddle.',
      },
    ],
  },

  // ─── BRIDLES ───────────────────────────────────────────────────────────────
  {
    slug: 'bridles',
    categoryName: 'Bridles',
    icon: '🐎',
    tagline:
      'Snaffle vs double, anatomical, browband styles — how bridle choice affects horse comfort, communication, and competition legality.',
    whatItIs:
      'A bridle is the headpiece that holds the bit in the horse\'s mouth and provides the rein attachment for the rider. It consists of a headpiece (crown), browband, cheekpieces, throatlash, noseband, and reins. Modern bridles range from traditional plain snaffles to anatomically-shaped designs that clear facial nerves and the temporomandibular joint (TMJ). Bridle choice affects horse comfort, rein communication, and — for competition — strict rule compliance.',
    whyItMatters: [
      'A poor-fitting bridle restricts the TMJ, presses on facial nerves, and is a leading cause of head-shaking and rein resistance.',
      'Anatomical bridles cut back behind the eye and ear and route the cheekpiece off the facial nerve — measurable comfort and behavioural improvement is reported by qualified saddlers.',
      'Noseband design (cavesson, flash, drop, crank, figure-8) changes how and where pressure is applied to the horse\'s face.',
      'Browband style is the visual signature of the bridle — and in show classes, traditional plain leather is often required while in schooling, decorative browbands are widely accepted.',
      'Double bridles (snaffle + curb) are required at FEI dressage levels above Prix St. Georges and demand precise fit and bit balance.',
      'Bit attachment style affects rein response — quick-release studs versus stitched-in cheekpieces.',
    ],
    typesAndUseCases: [
      {
        type: 'Plain snaffle bridle (traditional cavesson noseband)',
        bestFor:
          'Hunter, equitation, lower-level dressage, and most schooling; classical look and standard fit.',
        drawbacks:
          'Cavesson can sit on the cheek nerve on some heads; less able to discourage mouth opening.',
      },
      {
        type: 'Anatomical snaffle bridle',
        bestFor:
          'Sensitive horses, head-shakers, modern sport horses; cut to clear the facial nerve, TMJ, and poll.',
        drawbacks:
          'Pricier than plain bridles; visual design varies and may not suit show classes that require traditional style.',
      },
      {
        type: 'Double bridle (bradoon + curb)',
        bestFor:
          'FEI dressage at PSG and above where required; allows finer rein aids on highly trained horses.',
        drawbacks:
          'Requires precise bit fit and balance; misuse causes severe horse discomfort; legally required only at FEI level and above.',
      },
      {
        type: 'Flash / Hanoverian noseband',
        bestFor:
          'Horses that open the mouth or evade the bit; flash strap stabilises the bit and discourages opening.',
        drawbacks:
          'Over-tight flash bandages the mouth shut and is a welfare issue; FEI now imposes a 1.5 cm clearance rule.',
      },
      {
        type: 'Drop noseband',
        bestFor:
          'Classical dressage schooling, especially with young horses; sits low and discourages bit evasion gently.',
        drawbacks:
          'Cannot be used with a flash; sits close to nostrils so fit must be careful; not legal in all show classes.',
      },
      {
        type: 'Crank noseband',
        bestFor:
          'Higher-level dressage where a precise noseband fit is desired; mechanical advantage to tighten.',
        drawbacks:
          'Easy to over-tighten — FEI now imposes a 1.5 cm clearance rule; rider must be disciplined about adjustment.',
      },
      {
        type: 'Figure-8 / grackle noseband',
        bestFor:
          'Cross-country, show jumping, eventing — distributes pressure away from the airway.',
        drawbacks:
          'Not permitted in hunter and most dressage classes; visual style does not suit all rings.',
      },
      {
        type: 'Western bridle (headstall, often browband or one/two-ear)',
        bestFor:
          'Western pleasure, reining, ranch, trail — paired with a Western bit, often no noseband.',
        drawbacks:
          'Style varies by discipline and breed show; one-ear designs require careful headstall fit so the ear seat does not pinch.',
      },
    ],
    howToChoose: [
      'Measure the horse\'s head: bridle sizes (cob, full, oversize, draft) are starting points, not guarantees of fit.',
      'For sensitive horses, prefer anatomical designs that clear the facial nerve and TMJ — measurable behaviour improvement is widely reported.',
      'Noseband fit: at least 1.5 cm (FEI standard) of clearance under the noseband; the rider should slip two fingers between noseband and horse.',
      'Match the noseband to the discipline: cavesson and flash for dressage, figure-8 for cross-country, plain cavesson for hunter rings.',
      'Browband fit: should sit clear of the ears and not pull the headpiece forward; rotated forward = too tight.',
      'For competition, confirm bridle style and material against the rule book — USEF dressage and hunter rules are specific.',
      'For Western, match headstall style to the discipline (browband, single-ear, double-ear) and to the bit hanger style.',
    ],
    commonMistakes: [
      'Tightening the flash or crank noseband to mask bit evasion — the FEI 1.5 cm rule now enforces clearance for welfare reasons.',
      'Mixing bridle sizes (full crown with cob cheekpieces) without verifying fit — common cause of asymmetric pressure.',
      'Using a plain cavesson on a horse whose TMJ is under it — anatomical bridles route around the joint.',
      'Buying a double bridle for a horse not yet ready for it — double bridles require a confirmed snaffle foundation.',
      'Skipping the conditioning step — leather bridles dry, crack, and snap unexpectedly under load.',
      'Misadjusting the browband on a wide-set head — browband pulled tight rotates the headpiece forward and pinches the ear.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$75–$200',
        summary:
          'Schoolbarn bridles, synthetic schooling sets, basic show bridles in plain cavesson.',
      },
      {
        tier: 'Mid',
        range: '$200–$500',
        summary:
          'Anatomical schooling bridles, branded English plain show bridles, quality Western headstalls.',
      },
      {
        tier: 'Premium',
        range: '$500–$1,500+',
        summary:
          'PS of Sweden, Fairfax, Schockemöhle anatomical bridles; Stübben classical doubles; high-end tooled Western headstalls.',
      },
    ],
    topBrands: [
      {
        name: 'PS of Sweden',
        knownFor:
          'Anatomical bridles with patented neck-back and TMJ-clearing designs.',
      },
      {
        name: 'Fairfax',
        knownFor:
          'UK pressure-mapping-tested anatomical bridles; research-driven shape.',
      },
      {
        name: 'Schockemöhle',
        knownFor:
          'German sport-horse bridles — Equitus models with anatomical headpieces.',
      },
      {
        name: 'Stübben',
        knownFor:
          'Classical and anatomical English bridles, full doubles for FEI dressage.',
        slug: 'stubben',
      },
      {
        name: 'Pessoa',
        knownFor:
          'Hunter and equitation bridles widely used in US show rings.',
        slug: 'pessoa',
      },
      {
        name: 'Weaver',
        knownFor:
          'Affordable Western headstalls and English bridles for school programmes.',
      },
      {
        name: 'Circle Y',
        knownFor:
          'Quality Western headstalls paired with their saddle line.',
        slug: 'circle-y',
      },
    ],
    affiliateAngle:
      'Bridles are a high-margin, mid-frequency purchase: riders typically own 1–2 schooling and 1 show bridle and replace every 5–10 years. We point to category-leading anatomical models on SmartPak and Amazon, and link Western headstalls to brand pages where available. Final fit and discipline-legality decisions belong with the rider\'s coach.',
    faqs: [
      {
        question: 'How tight should a noseband be?',
        answer:
          'The FEI standard now requires a minimum 1.5 cm clearance under the noseband — measured with the ISES taper gauge. The Society of Master Saddlers and Master Saddlers Association both recommend two-finger clearance as a working rule. Tight nosebands are a documented welfare concern and are scrutinised in competition.',
      },
      {
        question: 'Are anatomical bridles worth the price?',
        answer:
          'For sensitive horses, head-shakers, or modern sport horses, anatomical designs measurably reduce pressure on the facial nerve and TMJ. For a quiet schoolmaster on a low-intensity programme, the marginal benefit is smaller. Pressure-mapping studies cited by Fairfax and PS of Sweden support the design rationale.',
      },
      {
        question: 'When is a double bridle required?',
        answer:
          'At FEI dressage Prix St. Georges and above, a double bridle is currently required (USEF dressage rules align with FEI at the upper levels). At lower levels, snaffle bridles are required or permitted depending on the test. Always check the current rule book.',
      },
      {
        question: 'Can I use a figure-8 noseband in dressage?',
        answer:
          'No — USEF and FEI dressage rules permit only specific noseband styles, typically plain cavesson, flash, drop, or crank. Figure-8 is permitted in eventing cross-country, show jumping, and some hunter classes. Always check the current rule book.',
      },
      {
        question: 'How often should I replace a bridle?',
        answer:
          'Quality leather bridles last 8–15 years with annual conditioning. Stitching wear, cheekpiece stretch, and cracked leather are the failure points — inspect at every grooming and replace any cracked or thinning component immediately. Synthetic bridles typically last 4–8 years.',
      },
    ],
  },

  // ─── REINS ────────────────────────────────────────────────────────────────
  {
    slug: 'reins',
    categoryName: 'Reins',
    icon: '🧶',
    tagline:
      'Web, rubber, laced, draw-reins — rider grip, horse-comm, and the discipline-specific choices that matter.',
    whatItIs:
      'Reins are the leather, web, rubber, or rope straps that attach to the bit (or to the bit cheek via a chain in some Western designs) and provide the rider\'s primary line of communication with the horse\'s mouth. Modern reins range from plain leather through rubber-coated grip designs, laced reins, and specialist auxiliary aids like draw-reins or side-reins. Choice affects grip in wet conditions, signal clarity to the horse, and rider hand comfort over a long school.',
    whyItMatters: [
      'Grip in wet conditions: rubber and laced reins hold securely in rain or with sweaty hands; smooth leather slides.',
      'Signal clarity: thinner, softer reins transmit subtler rein cues; thicker, stiffer reins muffle them.',
      'Hand comfort: web reins are lighter and warmer in winter; thick rubber can fatigue smaller hands.',
      'Discipline expectations: hunter and dressage rings traditionally favour plain or laced leather; eventing and jumpers accept rubber grip.',
      'Auxiliary reins (draw, side, German martingale) have specific schooling purposes and are not show-legal in most disciplines.',
      'Bit attachment: stitched, buckled, or hook-stud — affects how fast the reins can be changed between bits.',
    ],
    typesAndUseCases: [
      {
        type: 'Plain leather reins',
        bestFor:
          'Hunter, dressage, equitation, classical riding; clean look and traditional feel.',
        drawbacks:
          'Slip in rain or with sweaty hands; require conditioning to stay supple.',
      },
      {
        type: 'Laced leather reins',
        bestFor:
          'Hunter and equitation rings, all-weather schooling; subtle grip without rubber\'s visual weight.',
        drawbacks:
          'Lacing collects sweat and dirt; harder to clean than plain leather.',
      },
      {
        type: 'Rubber-covered (pimple-grip) reins',
        bestFor:
          'Jumpers, eventers, cross-country; maximum grip in wet conditions.',
        drawbacks:
          'Visually heavier; not traditional in hunter rings; rubber perishes over 4–6 years.',
      },
      {
        type: 'Web reins with stops',
        bestFor:
          'Eventing cross-country, hunting, polo; very light and fast to change hand position.',
        drawbacks:
          'Less feel than leather; stops can wear if used with hook-stud bit attachment.',
      },
      {
        type: 'Continental / German web with leather stops',
        bestFor:
          'Cross-country and field hunting; lightweight, grip via stops.',
        drawbacks:
          'Not show-ring legal in hunter classes; stops can dig into hands over long rides.',
      },
      {
        type: 'Anti-slip (Schockemöhle, PS of Sweden Comfort)',
        bestFor:
          'Modern sport-horse riders who want grip without traditional rubber pimples.',
        drawbacks:
          'Premium pricing; some designs not show-ring legal in hunter or dressage.',
      },
      {
        type: 'Draw reins (auxiliary)',
        bestFor:
          'Schooling under qualified supervision only — encourage a low head carriage on green or hollow horses.',
        drawbacks:
          'Schooling tool only; misuse causes overflexion and welfare concerns; not permitted in competition.',
      },
      {
        type: 'Side reins (auxiliary, longeing)',
        bestFor:
          'Longeing for muscle development under qualified supervision.',
        drawbacks:
          'Longeing-only; tight or fixed side reins are a welfare concern; not for ridden use.',
      },
      {
        type: 'Western split reins',
        bestFor:
          'Western pleasure, ranch, reining; one-handed riding tradition.',
        drawbacks:
          'Can drag on the ground if dropped; require training to use confidently.',
      },
      {
        type: 'Western romal reins',
        bestFor:
          'Vaquero tradition, working cow horse, classical Western; closed loop with a quirt end.',
        drawbacks:
          'Specific to discipline; not permitted in all Western classes; learning curve.',
      },
    ],
    howToChoose: [
      'Match material to climate and discipline: rubber for wet, leather for show, web for fast cross-country.',
      'Match width to the rider\'s hand: smaller hands prefer 5/8 inch, larger hands prefer 3/4 inch.',
      'For hunter and dressage show classes, confirm rein style against the rule book — most rings accept plain or laced leather only.',
      'For auxiliary reins (draw, side, German martingale), use only with a coach\'s supervision and never in competition where they are not permitted.',
      'For Western split or romal reins, ensure length matches the rider\'s arm and the horse\'s rein length needs.',
      'Bit attachment: hook-stud is fast but wears; buckled is traditional and slower; stitched is permanent.',
    ],
    commonMistakes: [
      'Using draw reins without a coach\'s sign-off — they are a schooling tool that punishes incorrect hand placement.',
      'Wearing rubber reins to a hunter show — most US hunter classes still favour plain or laced leather.',
      'Reusing cracked or perishing rubber reins — they can snap under sudden load.',
      'Ordering reins too long or too short — short reins on a long-necked horse and long reins on a small pony are common mistakes.',
      'Failing to condition leather reins — dry leather cracks where the rider\'s hand sits.',
      'Treating Western split reins like English reins — split-rein technique requires its own training.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$30–$80',
        summary:
          'Synthetic web reins, basic leather schooling reins, school-barn rubber reins.',
      },
      {
        tier: 'Mid',
        range: '$80–$200',
        summary:
          'Quality leather laced reins, branded rubber grip reins, mid-tier anti-slip designs.',
      },
      {
        tier: 'Premium',
        range: '$200–$400+',
        summary:
          'PS of Sweden Comfort reins, Stübben classical leather, high-end tooled Western split and romal reins.',
      },
    ],
    topBrands: [
      {
        name: 'PS of Sweden',
        knownFor:
          'Comfort and anatomical-grip reins — popular among modern sport-horse riders.',
      },
      {
        name: 'Schockemöhle',
        knownFor:
          'German jumper reins with anti-slip and stop designs.',
      },
      {
        name: 'Stübben',
        knownFor:
          'Classical leather reins matched to the brand\'s bridle line.',
        slug: 'stubben',
      },
      {
        name: 'Pessoa',
        knownFor:
          'Show-ring leather and laced reins favoured in US hunter and equitation classes.',
        slug: 'pessoa',
      },
      {
        name: 'Weaver',
        knownFor:
          'Affordable Western split and romal reins, English schooling reins.',
      },
      {
        name: 'Tory Leather',
        knownFor:
          'US-made leather reins and split reins for English and Western.',
      },
    ],
    affiliateAngle:
      'Reins are a low-cost, high-frequency replacement: schoolbarn reins are replaced every 1–3 years, show reins every 5–10. We point to category-leading reins on Amazon and SmartPak. Auxiliary reins (draw, side, German martingale) are listed for completeness but flagged as coach-supervised schooling tools only.',
    faqs: [
      {
        question: 'Are draw reins safe to use?',
        answer:
          'Draw reins are a schooling tool that can encourage a lower head carriage and are widely used by trained riders under a coach\'s supervision. Misuse — over-flexing, fixing the head, or using on a green rider — is a welfare concern and is broadly criticised by the FEI welfare guidelines. They are not permitted in most competitions.',
      },
      {
        question: 'What is the difference between laced and plain reins?',
        answer:
          'Laced reins have leather lacing woven through the rein for grip; plain reins are smooth leather. Laced reins offer better grip than plain leather without the visual weight of rubber and are widely accepted in US hunter and equitation rings.',
      },
      {
        question: 'How wide should reins be?',
        answer:
          'Smaller hands typically prefer 5/8 inch (16 mm); larger hands 3/4 inch (19 mm). Junior and pony reins are usually 1/2 inch. The right width is the one that the rider\'s hand closes around comfortably without bunching.',
      },
      {
        question: 'How long do rubber reins last?',
        answer:
          'Rubber-covered reins typically last 4–6 years with daily use before the rubber perishes. Inspect at every grooming — small cracks and stiffness mean it is time to replace before the rubber separates from the leather core under load.',
      },
      {
        question: 'Can I use rubber reins in a hunter show?',
        answer:
          'Most US hunter classes still favour plain or laced leather reins. Rubber reins are accepted in jumpers and eventing. Always check the current USEF rule book for your discipline.',
      },
    ],
  },

  // ─── BREASTPLATES & CRUPPERS ──────────────────────────────────────────────
  {
    slug: 'breastplates-and-cruppers',
    categoryName: 'Breastplates & Cruppers',
    icon: '⛓️',
    tagline:
      'Purpose, fit, when needed — the auxiliary tack that stops a saddle sliding back, forward, or sideways.',
    whatItIs:
      'Breastplates (hunting breastplates, polo breastplates, five-point, elastic-stretch) and cruppers are auxiliary tack pieces that stabilise the saddle against the horse\'s conformation. A breastplate attaches to the saddle\'s D-rings and runs across the chest to prevent the saddle slipping backwards; a crupper loops under the tail to prevent the saddle slipping forwards. They are not universally needed — many horses go their whole career without one — but for round-barreled, low-withered, or steeply-sloped horses they are the difference between a stable saddle and a constantly-slipping one.',
    whyItMatters: [
      'Round-barreled or low-withered horses (Iberians, Quarter Horses, ponies, draught crosses) frequently need a breastplate or crupper to keep the saddle in position.',
      'Steep terrain (trail, endurance, eventing cross-country) shifts saddle position — a breastplate stabilises on uphill, a crupper on downhill.',
      'A saddle that slips back is uncomfortable for horse and rider and concentrates pressure behind the loin; a breastplate prevents the slip without forcing the rider to over-girth.',
      'Fit matters: a too-tight breastplate restricts shoulder action; a too-loose one is useless. Anatomical five-point designs distribute pressure across the chest.',
      'Cruppers are common in pony and endurance work and rare in modern English schooling — the choice depends on conformation, not fashion.',
      'For competition, USEF, FEI, and breed-show rules permit most breastplate designs but specify which Ds they attach to.',
    ],
    typesAndUseCases: [
      {
        type: 'Hunting breastplate (three-point, leather)',
        bestFor:
          'Eventing, hunting, field work; classical look with a single chest strap and yoke.',
        drawbacks:
          'Can rub the neck on long rides if the yoke is too narrow; needs careful fit on short-coupled horses.',
      },
      {
        type: 'Five-point / polo breastplate',
        bestFor:
          'Polo, eventing cross-country, jumping; the additional attachment points distribute pressure and stop sideways shift.',
        drawbacks:
          'More straps to adjust; pricier than three-point; can clutter the shoulder if not fitted properly.',
      },
      {
        type: 'Anatomical breastplate (Stübben, PS of Sweden, Fairfax)',
        bestFor:
          'Modern sport horses, sensitive shoulders, jumpers; shaped to clear the brachiocephalic muscle.',
        drawbacks:
          'Premium pricing; the anatomical shape must match the horse — over-narrow rubs.',
      },
      {
        type: 'Elastic stretch breastplate',
        bestFor:
          'Cross-country, hunting; elastic gives at the moment of jumping rotation, reducing restriction.',
        drawbacks:
          'Elastic perishes; must be checked annually for stretch.',
      },
      {
        type: 'Western breast collar',
        bestFor:
          'Trail, ranch, roping, mountain work; wide leather chest strap prevents saddle slipping back on slopes.',
        drawbacks:
          'Style varies by discipline; tooled show breastcollars require careful conditioning.',
      },
      {
        type: 'Standard leather crupper',
        bestFor:
          'Ponies, round-barreled cobs, endurance horses on long downhill descents.',
        drawbacks:
          'Many horses must be acclimatised to a crupper before regular use; the tail dock must be inspected daily for rubs.',
      },
      {
        type: 'Padded crupper',
        bestFor:
          'Sensitive horses or extended endurance work; reduces friction at the tail dock.',
        drawbacks:
          'Padding holds sweat — must be cleaned regularly.',
      },
    ],
    howToChoose: [
      'Only fit a breastplate if the saddle actually slips — many horses do not need one and an unnecessary breastplate restricts shoulder action.',
      'For round-barreled, low-withered, or sloped-rumped horses, anatomical or five-point designs distribute pressure away from the brachiocephalic muscle.',
      'For trail and endurance, prefer a Western breast collar or a leather hunting breastplate sized for the horse\'s yoke width.',
      'For ponies and cobs, a crupper is often paired with a breast collar for steep terrain.',
      'For competition, confirm the attachment Ds against the saddle\'s rigging and against the discipline rule book.',
      'Fit check: at rest, the breastplate should not press into the chest; at full canter, it should engage without restricting the shoulder.',
      'Acclimatise the horse to a crupper before relying on it — start at walk and build to working trot.',
    ],
    commonMistakes: [
      'Fitting a breastplate on a horse whose saddle slips because the saddle is too narrow — fix the saddle, not the symptom.',
      'Over-tightening the breastplate so the yoke presses the windpipe; sign is reluctance to extend the head.',
      'Skipping crupper introduction — sudden tail pressure causes bucking and welfare-relevant behaviour.',
      'Reusing perished elastic breastplates — the elastic fails under stress.',
      'Using a too-wide hunting breastplate yoke on a short-necked horse — the yoke flops and the saddle still slides.',
      'Treating the breastplate as the primary stabiliser when the underlying issue is a poorly-fitted saddle or weak girthing.',
    ],
    priceRanges: [
      {
        tier: 'Entry',
        range: '$40–$120',
        summary:
          'Synthetic and basic leather hunting breastplates, plain Western breast collars, plain leather cruppers.',
      },
      {
        tier: 'Mid',
        range: '$120–$300',
        summary:
          'Quality leather hunting and five-point breastplates, padded cruppers, mid-tier Western tooled breast collars.',
      },
      {
        tier: 'Premium',
        range: '$300–$700+',
        summary:
          'PS of Sweden anatomical, Stübben Equi-Soft breastplate, Fairfax pressure-mapping designs, high-end tooled Western breast collars.',
      },
    ],
    topBrands: [
      {
        name: 'PS of Sweden',
        knownFor:
          'Anatomical breastplates with brachiocephalic-clearing shape.',
      },
      {
        name: 'Fairfax',
        knownFor:
          'Pressure-mapping-tested breastplate designs.',
      },
      {
        name: 'Stübben',
        knownFor:
          'Equi-Soft breastplate and classical hunting breastplate designs.',
        slug: 'stubben',
      },
      {
        name: 'Pessoa',
        knownFor:
          'Hunter and jumper breastplates matched to the brand\'s saddle line.',
        slug: 'pessoa',
      },
      {
        name: 'Weaver',
        knownFor:
          'Affordable Western breast collars and cruppers for trail and ranch use.',
      },
      {
        name: 'Circle Y',
        knownFor:
          'Western breast collars and Y-shaped trail breast collars.',
        slug: 'circle-y',
      },
      {
        name: 'Billy Cook',
        knownFor:
          'Western breast collars and traditional roper styles.',
        slug: 'billy-cook',
      },
    ],
    affiliateAngle:
      'Breastplates and cruppers are a niche but high-intent category — riders shop after a slipping problem or before a trip into steep terrain. We point to category-leading anatomical and Western models on SmartPak and Amazon, with the brand-page link for Western breast collars where the brand makes a matching saddle. Final selection still depends on horse conformation and a saddler\'s sign-off.',
    faqs: [
      {
        question: 'When do I actually need a breastplate?',
        answer:
          'When the saddle slips backwards under normal work — typically on round-barreled, low-withered, or steeply-sloped horses, on uphill terrain, or during jumping. Many horses do not need a breastplate; an unnecessary one restricts shoulder action and is not "more is better".',
      },
      {
        question: 'Are anatomical breastplates worth the price?',
        answer:
          'For sensitive, modern sport horses, the anatomical shape clears the brachiocephalic muscle and reduces measured pressure. Fairfax pressure-mapping research is the most-cited supporting evidence. For a steady trail horse on flat ground, the marginal benefit is small.',
      },
      {
        question: 'How do I introduce a crupper?',
        answer:
          'Acclimatise gradually. Start at the walk in a familiar arena, loose enough that the crupper hangs without pressure. Build to working trot over several sessions before adding it for trail or steep work. Check the tail dock daily for rubs.',
      },
      {
        question: 'Can a breastplate fix a slipping saddle?',
        answer:
          'No — it can stabilise a saddle whose fit is correct but whose horse conformation is challenging. A saddle that slips because the tree is wrong needs a qualified saddler\'s refit, not a breastplate. The Society of Master Saddlers and Master Saddlers Association both caution against using auxiliary tack as a substitute for correct fit.',
      },
      {
        question: 'Are breastplates legal in the show ring?',
        answer:
          'Yes in most disciplines — eventing, jumping, polo, and hunting routinely permit breastplates. USEF and FEI dressage rules are more restrictive at upper levels. Western breed shows accept breast collars in most working classes. Always read the current rule book.',
      },
    ],
  },
]

export function getAccessoryBySlug(slug: string): AccessoryCategory | undefined {
  return ACCESSORY_CATEGORIES.find((a) => a.slug === slug)
}

export function getAllAccessorySlugs(): string[] {
  return ACCESSORY_CATEGORIES.map((a) => a.slug)
}
