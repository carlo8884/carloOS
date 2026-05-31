/**
 * Discipline-specific saddle-fit reference data for /fit/[slug] pages.
 *
 * Sources of truth (per QC-STANDARDS §1): Society of Master Saddlers (SMS, UK)
 * fit guidance, Master Saddlers Association (MSA, US) fit guidance, USEF Rule
 * Book (where it touches saddlery), and the brand-direct fit notes already
 * published on /brands/[slug]. No fabricated test results; no fake reviewer
 * credentials; all actual fitting must be done by a qualified professional
 * on the horse.
 *
 * Brand cross-links resolve to existing /brands/[slug] pages — see
 * apps/saddle-com/src/data/saddle-brands.ts for the canonical brand list.
 */

export interface FitProblem {
  problem: string
  signs: string[]
  solution: string
}

export interface BrandKnownForFit {
  /** Display name shown to the reader. */
  name: string
  /** Brand slug — must match an entry in saddle-brands.ts. */
  slug: string
  /** Short reason this brand is on the discipline-fit shortlist. */
  knownFor: string
}

export interface FitFaq {
  question: string
  answer: string
}

export interface DisciplineFit {
  slug: string
  disciplineName: string
  /** Plain-English saddle category — what most riders ask for at a tack shop. */
  saddleType: string
  /** Short hero/meta subtitle (≤ ~140 chars). */
  tagline: string
  /** Opening overview paragraph (used in body + meta description fallback). */
  overview: string
  /** The 4–7 saddle-fit checkpoints that matter most for this discipline. */
  keyFitPoints: string[]
  /** Horse-shape considerations that change saddle choice for this discipline. */
  horseConformationConsiderations: string[]
  /** What the rider's seat / leg needs the saddle to allow. */
  riderPositionRequirements: string[]
  /** The fit problems that turn up most often in this discipline. */
  commonFitProblems: FitProblem[]
  /** When the saddle should be re-evaluated — annually, life events, etc. */
  whenToFit: string[]
  /** Why a qualified professional fitter, not a YouTube video, makes the call. */
  professionalFitterRecommendation: string
  /** 3–4 brands worth shortlisting for this discipline. Must link to /brands/[slug]. */
  brandsKnownForGoodFit: BrandKnownForFit[]
  /** Realistic new-retail USD range to get a correctly-fitted saddle of this type. */
  priceRangeForGoodFit: string
  faqs: FitFaq[]
  /** English vs Western split for the hub page. */
  group: 'English' | 'Western'
}

export const DISCIPLINE_FITS: DisciplineFit[] = [
  // ─── DRESSAGE ─────────────────────────────────────────────────────────────
  {
    slug: 'dressage-saddle-fit',
    disciplineName: 'Dressage',
    saddleType: 'Dressage saddle — deep seat, long straight-cut flap, fixed or moveable knee blocks',
    tagline:
      'How a dressage saddle should fit horse and rider — deep seat, long flap, balanced for collected work.',
    overview:
      'A dressage saddle has the longest, straightest flap in modern English saddlery and the deepest seat. It is built to hold the rider in a vertical, ear-shoulder-hip-heel alignment so the seat can drive collection. Because the rider sits more centered and stays longer in the saddle than in jumping work, errors in panel contact, balance, and gullet clearance are amplified — the horse cannot hide them by jumping out from underneath the rider. Correct dressage fit therefore demands tighter tolerances than an all-purpose saddle.',
    keyFitPoints: [
      'Wither clearance: 2–3 fingers above the highest point of the wither at rest and through working trot, per the Society of Master Saddlers 4-point check.',
      'Even panel contact along the full length of the wool-flocked or foam panel — no bridging in the middle, no rocking at front and rear.',
      'Gullet channel of at least 3 fingers width visible along the full length, under rider weight, to clear the spinous processes.',
      'Level balance: the deepest point of the seat sits level with or very slightly behind the pommel, so the rider falls naturally to vertical without bracing.',
      'Knee block placement supports — but does not lock — the thigh in the correct dressage position (knee dropped, thigh long).',
      'Flap length covers the rider\'s lower leg so the boot contacts horse, not flap edge, when the leg is in the long dressage position.',
      'Billet alignment runs to the natural girth groove — short, long, or point billets matched to the horse\'s sternum, not to a stock setting.',
    ],
    horseConformationConsiderations: [
      'Long-backed horses tolerate the long dressage panel well; short-backed horses (some Iberians and stock-horse crosses) may need a shorter-paneled dressage tree to avoid loading the loin.',
      'High-withered Thoroughbreds and Warmbloods need a tree that clears the wither in motion, not just at halt — bridging shows up at working trot.',
      'Wide, flat-backed horses (some heavier Warmbloods, draft crosses) need a wider tree and a flatter panel curve; a too-narrow tree will perch and rock.',
      'Asymmetric musculature (very common in older riding horses) often requires asymmetric panel flocking adjusted by a qualified saddler.',
      'Topline that changes seasonally — horses in heavy work develop topline that a winter off can drop in 8–12 weeks; refit at the start of each season.',
    ],
    riderPositionRequirements: [
      'Pelvis sits in the deepest point of the seat without the rider having to grip — the saddle does the centering.',
      'Thigh hangs long and drops the knee well below the hip; the flap must allow this without forcing the leg forward.',
      'Knee block, if moveable, is positioned to support the front of the thigh in the correct position — not to prop a leg that has slid forward.',
      'Twist (the narrowest part of the seat between the thighs) suits the rider\'s pelvic width — too wide a twist forces the hips open and tips the pelvis back.',
      'Seat size: the rider should have roughly a hand\'s width between seat and cantle when sitting in the deepest part; too small perches the rider, too large leaves them sliding.',
    ],
    commonFitProblems: [
      {
        problem: 'Bridging — the panel contacts at front and rear but lifts off the middle of the horse\'s back.',
        signs: [
          'Dry patches under the middle of the saddle after work; sweat at the ends only.',
          'White hairs developing behind the shoulder and at the cantle but not in between.',
          'Horse drops the back in transitions, especially canter departs.',
          'Rider feels the saddle pivot under their seat at sitting trot.',
        ],
        solution:
          'A qualified saddle fitter re-flocks the panel to fill the gap; if the tree shape is wrong for the horse\'s back curve, the tree must be changed — flocking cannot compensate for a fundamentally wrong tree.',
      },
      {
        problem: 'Tipped forward (cantle-high) — saddle sits low at the pommel and high at the cantle.',
        signs: [
          'Rider is thrown onto the fork and braces with the leg forward.',
          'Pommel sits within 1 finger of the withers under the rider; cantle is visibly higher than the pommel from the side.',
          'Horse hollows and the croup drops behind the saddle as the rider chases the seat.',
        ],
        solution:
          'Have a qualified fitter check whether the tree is too narrow (pommel dropping) or the flocking has compressed at the front. The fix is either a wider tree or front-panel re-flocking — not a riser pad, which masks the symptom.',
      },
      {
        problem: 'Insufficient gullet clearance under load — spinal pressure shows up only with the rider mounted.',
        signs: [
          'Static gullet clearance looks fine; under the rider, the panels close toward the spine.',
          'Horse is reluctant to come through over the back; canter feels stuck.',
          'Heat or sensitivity along the spinous processes after work.',
        ],
        solution:
          'Refit with a wider gullet channel — many modern dressage trees offer wider channel options. Confirm with a fitter while the rider is mounted, not just on a stand.',
      },
      {
        problem: 'Knee blocks force the leg out of position.',
        signs: [
          'Rider\'s knee is pushed up or forward by the block, breaking the ear-shoulder-hip-heel line.',
          'Inner thigh fatigue or pinching after a 40-minute school.',
        ],
        solution:
          'Use a saddle with moveable (velcro-mounted) blocks repositioned to support the thigh in the rider\'s correct dressage position — not a fixed block sized for someone else.',
      },
    ],
    whenToFit: [
      'On purchase — before the saddle is ever ridden in.',
      'Annually as a routine check, ideally at the same point in the season each year.',
      'After any 8–12 week period off (winter break, lay-up, injury rehab).',
      'When the horse changes condition score by more than 1 (BCS body-condition shift).',
      'When a young horse is still growing — under 6 years old, expect to refit every 6 months.',
      'When unexplained behavioural changes start — refusal to bend, hollowing, canter resistance.',
      'After a fall, rotational injury, or any time the tree may have been twisted.',
    ],
    professionalFitterRecommendation:
      'For dressage work specifically, a qualified saddle fitter is not optional. Look for a Society of Master Saddlers Qualified Saddle Fitter (UK) or a Master Saddlers Association Certified Fitter (US). A qualified fitter assesses the horse statically and at working trot under the rider, adjusts panels and tree where appropriate, and documents the fit so the next refit has a baseline. Saddle.com does not provide on-horse fitting — the fitter does.',
    brandsKnownForGoodFit: [
      { name: 'Stübben', slug: 'stubben', knownFor: 'Roxane dressage model with the Quick-Change tree — re-fittable as the horse changes shape.' },
      { name: 'County', slug: 'county', knownFor: 'Custom-built focus, strong with hard-to-fit Warmbloods and asymmetric horses.' },
      { name: 'Custom Saddlery', slug: 'custom-saddlery', knownFor: 'Made-to-order dressage trees built around the individual horse\'s tracings.' },
      { name: 'Bates', slug: 'bates', knownFor: 'Adjustable Easy-Change gullet system on dressage models — practical option for changing horses.' },
    ],
    priceRangeForGoodFit:
      '$2,000–$5,500 new for a correctly-fitted purpose-built dressage saddle from an established maker. Quality used dressage saddles routinely sell at $800–$2,500 and can be excellent value when fit is verified by a qualified saddler before purchase.',
    faqs: [
      {
        question: 'Can I use an all-purpose saddle for dressage?',
        answer:
          'For introductory work and tests up through training level, an all-purpose saddle is acceptable — USEF dressage rules permit it at the lower levels. Beyond that, the forward-cut flap and shallower seat of an all-purpose saddle will work against the long-leg, vertical-pelvis position dressage requires, and most riders move to a dedicated dressage saddle as they progress.',
      },
      {
        question: 'How often should a dressage saddle be refitted?',
        answer:
          'The Society of Master Saddlers and Master Saddlers Association both recommend an annual saddle-fit check as a baseline, plus an additional check whenever the horse changes shape — typically after time off, a change in workload, or a body-condition shift of more than one score.',
      },
      {
        question: 'Are wool-flocked or foam panels better for dressage?',
        answer:
          'Wool-flocked panels can be adjusted by a qualified saddler as the horse changes shape, which is the main argument for them in dressage where horses develop topline over a season. Foam panels are more uniform out of the box and cannot drift or lump, but they cannot be adjusted. Both work — the question is who will maintain the saddle over its life.',
      },
      {
        question: 'Do I need a saddle fitter even for a used dressage saddle?',
        answer:
          'Yes — arguably more so. Used saddles may have compressed flocking, twisted trees, or asymmetric wear that is not visible to a non-specialist. A qualified saddler can assess all three before you buy and tell you what reflocking or repair would cost.',
      },
      {
        question: 'What does the USEF rule book say about dressage saddles?',
        answer:
          'The USEF Rule Book (DR121) requires an English-type saddle with stirrups for dressage competition; there are no specific design constraints beyond that at the lower levels, though FEI levels mandate specific permitted equipment. The rule book governs competition equipment — it does not address fit. Fit is the rider\'s responsibility and is checked by a qualified saddler, not a steward.',
      },
    ],
    group: 'English',
  },

  // ─── HUNTER / JUMPER ──────────────────────────────────────────────────────
  {
    slug: 'hunter-jumper-saddle-fit',
    disciplineName: 'Hunter / Jumper',
    saddleType: 'Forward-flap close-contact or jumping saddle — moderate seat depth, forward-cut flap, knee roll',
    tagline:
      'How a hunter or jumper saddle should fit — forward flap, balanced seat, security over fences without restricting the horse\'s shoulder.',
    overview:
      'Hunter and jumper saddles share a forward-cut flap that accommodates a shorter stirrup and a more closed hip angle. The hunter ring tends toward a flatter, more traditional seat (rewarding a quiet, classical position); the jumper ring tolerates a deeper, more secure seat. Both require the same fit fundamentals — wither clearance, even panel contact, full gullet — but the saddle has to clear the horse\'s shoulder in jumping rotation. A saddle that fits perfectly at halt and bridges at the gallop is the most common hunter/jumper fit failure.',
    keyFitPoints: [
      'Wither clearance of 2–3 fingers maintained at canter and over fences — not just at halt. The shoulder rotates back under the panel in jumping, and a saddle that clears the wither at rest can pinch in motion.',
      'Tree points (the front of the tree under the pommel) sit behind the shoulder blade, not on top of it. A tree point on the scapula restricts forelimb action and shows as a short, stilted canter.',
      'Even panel contact along the bearing surface so weight is distributed over the largest possible area — jumping concentrates load on landing.',
      'Gullet channel clear of the spine through the gallop and landing, not just at halt.',
      'Forward flap matches the rider\'s natural jumping-length stirrup angle — the knee should sit just behind the front edge of the flap when the leg is in jumping position.',
      'Knee roll supports the front of the thigh without pushing the knee up or away — a too-large knee roll forces the leg back.',
      'Balance is level or very slightly cantle-high; a forward-tipped jumping saddle throws the rider onto the fork and over the shoulder.',
    ],
    horseConformationConsiderations: [
      'Hunters with prominent shoulders (Thoroughbreds, TB-cross) need tree points placed cleanly behind the scapula — easier to achieve with a slightly wider, well-set tree than with a narrow one wedged forward.',
      'Big-moving Warmblood jumpers with strong shoulder action need a tree that clears the rotating scapula at the gallop; check fit in motion, not at halt.',
      'Short-backed hunters need a shorter-paneled saddle so the rear of the panel does not press on the loin in jumping rotation.',
      'High-withered, narrow-chested horses (some Thoroughbreds) need a narrow-to-medium tree with extended wither clearance and may benefit from a half-pad with shimmable inserts as the horse develops topline.',
      'Lower-withered, rounder-backed warmbloods need a wider tree to avoid perching and rocking on landing.',
    ],
    riderPositionRequirements: [
      'Hip closes naturally over the fence with the saddle supporting — not blocking — the forward fold.',
      'Knee sits behind the front edge of the flap in jumping position; flap must be cut forward enough to accommodate without forcing the leg back at the rear.',
      'Stirrup hangs naturally with the rider\'s heel under the hip on landing — a saddle that throws the rider forward will cause the leg to swing back over fences.',
      'Seat allows free movement during the jump (rider out of the saddle on takeoff, returning on landing) without catching the rider in the cantle.',
      'For the hunter ring specifically: a flatter seat that allows a quiet, classically-balanced rider position rather than a deep seat that holds the rider in.',
    ],
    commonFitProblems: [
      {
        problem: 'Tree pinching the shoulder — most common cause of "my horse won\'t go forward over fences."',
        signs: [
          'Short, choppy canter stride that does not lengthen as the rider asks.',
          'Refusals or runouts on a horse that previously jumped willingly.',
          'White hairs or temporary patches behind the shoulder at the tree-point location.',
          'Pinning ears or tucking the chin against the bit at the approach.',
        ],
        solution:
          'A qualified fitter assesses tree-point placement and width. If the tree is too narrow, widening (where the tree allows) or moving to a wider model is the fix. A wider half-pad can help diagnose but is not a long-term solution.',
      },
      {
        problem: 'Bridging on landing — saddle contacts well at halt and rocks on landing.',
        signs: [
          'Dry patches under the middle of the panel; sweat at front and rear only after a course.',
          'Horse drops the back through the in-and-out lines.',
          'Saddle slides forward repeatedly during the course.',
        ],
        solution:
          'A qualified saddler refloks the panel (or, on foam saddles, replaces the panel) so the bearing surface stays in contact through the full jumping rotation.',
      },
      {
        problem: 'Saddle tips forward at the gallop — pommel drops and the rider is thrown onto the fork.',
        signs: [
          'Rider braces with the lower leg forward to compensate.',
          'Horse becomes heavy in the bridle and falls onto the forehand.',
          'Pommel sits much closer to the withers under the rider than at halt.',
        ],
        solution:
          'The tree is too narrow or the front panel has compressed. A qualified fitter widens the tree or re-flocks the front panel; a riser pad is a temporary measure only, not a fix.',
      },
      {
        problem: 'Flap and knee roll force the leg back.',
        signs: [
          'Rider\'s lower leg swings backward over the fence and on landing.',
          'Rider has to grip with the knee to keep the heel down.',
        ],
        solution:
          'The flap is cut too straight or the knee roll is too large for the rider\'s leg length. A saddle with a more forward-cut flap and a smaller (or repositionable) knee roll is the answer — not a different saddle pad.',
      },
    ],
    whenToFit: [
      'On purchase — before the first ride.',
      'Annually at minimum, ideally before show season starts.',
      'After a horse changes condition (winter off, summer fitness, rehab return).',
      'When a young horse is filling out — under 7 years old, expect repeated refits.',
      'When the horse starts jumping a new height bracket and the muscling pattern changes.',
      'After any rotational fall — the tree may be twisted even if the saddle looks intact.',
      'Whenever a previously-willing jumper starts refusing, running out, or pinning ears at the saddling area.',
    ],
    professionalFitterRecommendation:
      'Hunter and jumper fit demands assessment in motion — at the canter, and over a small fence if possible. A Society of Master Saddlers Qualified Fitter or Master Saddlers Association Certified Fitter should observe the horse moving and the rider riding, not just the saddle on a static back. Brand-employed fitters can be excellent, but their conflict of interest in recommending their own brand should be acknowledged; independent qualified fitters are the gold standard.',
    brandsKnownForGoodFit: [
      { name: 'Pessoa', slug: 'pessoa', knownFor: 'Gen X Pro and A/O models — the hunter-ring standard, forward flap, deep enough seat for security.' },
      { name: 'Antares', slug: 'antares', knownFor: 'French close-contact construction; the maker of choice for many top jumping professionals.' },
      { name: 'Stübben', slug: 'stubben', knownFor: 'Portos jumping model with the Quick-Change tree — re-fittable as the horse develops.' },
      { name: 'Bates', slug: 'bates', knownFor: 'Caprilli and Elevation jumping models — adjustable gullet, practical for amateurs with one saddle and changing horses.' },
    ],
    priceRangeForGoodFit:
      '$2,500–$6,000 new for a correctly-fitted hunter or jumper saddle from an established maker. The used market for quality hunter/jumper saddles is well-developed; expect $1,200–$3,000 for a serviceable used Pessoa, Antares, or Stübben — always with a fit check by a qualified saddler before purchase.',
    faqs: [
      {
        question: 'What is the difference between a hunter saddle and a jumper saddle?',
        answer:
          'Hunter saddles tend toward a flatter, more traditional seat to reward a quiet, classical position in the hunter ring; jumper saddles often have a deeper seat for security on tight turns and bigger fences. Both share a forward-cut flap. Many modern saddles split the difference — Pessoa\'s A/O is hunter-oriented, the Gen X Pro is more jumper-oriented, and the underlying tree is similar.',
      },
      {
        question: 'Can a close-contact saddle be used for hunters?',
        answer:
          'Yes — many hunter riders prefer a true close-contact saddle for the feel and the classical look. The tradeoff is less security than a deeper jumping saddle on landings and at speed. Below the 3\'6" division most amateurs choose either based on personal preference.',
      },
      {
        question: 'How tight should the girth be on a jumping saddle?',
        answer:
          'Snug enough that the saddle does not shift when the rider stands in the stirrups, but no tighter. Overgirthing does not improve fit — it just compresses the ribcage. If the saddle slips, the tree fit is wrong (often too narrow); tightening the girth more is not the solution.',
      },
      {
        question: 'Does USEF specify a saddle type for hunter or jumper classes?',
        answer:
          'USEF Hunter (HU106) and Jumper rules require an English-type saddle but do not specify forward-flap construction. The discipline standard is a forward-flap close-contact or jumping saddle; an all-purpose saddle is technically legal in most classes but will work against the rider in the hunter ring at the higher levels.',
      },
      {
        question: 'My hunter started stopping at fences — could it be saddle fit?',
        answer:
          'It can be. Before assuming a training problem, have the saddle fit checked by a qualified saddler with the horse worked under the rider. Pinching tree points and bridging panels both cause refusals, and both can develop as the horse changes shape mid-season.',
      },
    ],
    group: 'English',
  },

  // ─── EVENTING ─────────────────────────────────────────────────────────────
  {
    slug: 'eventing-saddle-fit',
    disciplineName: 'Eventing',
    saddleType: 'All-purpose or two-saddle eventing setup — semi-forward flap on the AP, dedicated jumping and dressage saddles at the upper levels',
    tagline:
      'How an eventing saddle (or saddle pair) should fit — dressage position for the test, jumping security for cross-country and stadium.',
    overview:
      'Eventing is the hardest saddle-fit problem in English sport because the same horse has to do three jobs in three days, and the rider\'s position changes radically between dressage and cross-country. At the lower levels (Beginner Novice through Training) a single semi-forward all-purpose saddle can serve, with the compromise that it is neither a true dressage saddle nor a true jumping saddle. At Preliminary and above, most riders use two saddles — a dressage saddle for the test and a jumping or eventing-specific saddle for cross-country and stadium. Fit fundamentals are the same; the discipline complication is that a horse fit for a dressage saddle is not automatically fit for the jumping saddle and vice versa.',
    keyFitPoints: [
      'Wither clearance 2–3 fingers under both saddles, in motion as well as at halt — cross-country gallop pressure is the toughest test.',
      'Tree points behind the scapula in both saddles. A dressage tree pinched on the shoulder will short-stride the horse in collected work; a jumping tree pinched on the shoulder will show as refusals.',
      'Even panel contact through the full bearing surface; bridging at the gallop is the failure mode on cross-country.',
      'Full gullet channel under rider weight in both saddles.',
      'Balance level under the rider — the cross-country saddle must allow the rider to ride forward in galloping position without tipping the saddle pommel into the withers.',
      'For the AP single-saddle setup: the flap is cut at a compromise angle that allows a longer leg for flatwork and shortens acceptably for jumping — riders with longer legs will outgrow this compromise faster.',
      'Cross-country saddles often have a deeper seat and a more pronounced knee block for security at speed and over solid fences; check that the knee block does not block the rider\'s leg from reaching the horse on dressage day.',
    ],
    horseConformationConsiderations: [
      'Most event horses are Thoroughbreds, TB-crosses, or sport-horse Warmblood crosses with prominent withers and well-defined shoulders — the high-withered fit problem is the eventing fit problem.',
      'Event horses develop topline and barrel substantially through a season; expect to refit between the indoor school-season and the outdoor competition season.',
      'Horses returning from end-of-season let-down lose topline quickly — a saddle that fit in October may need adjustment by April.',
      'Cross-country gallop horses (fitter, leaner, more muscled longissimus) need different panel contact than the same horse early in the conditioning year — refit through the build-up phase.',
      'TBs with sharp withers and shallow shoulders are the most common hard-to-fit eventing horse; County, Stübben, and Custom Saddlery have strong reputations on this body type.',
    ],
    riderPositionRequirements: [
      'For the dressage saddle: long leg, vertical pelvis, ear-shoulder-hip-heel alignment — see the dressage fit page for detail.',
      'For the jumping/cross-country saddle: shorter stirrup, closed hip angle, leg secure under the rider through galloping and over solid obstacles.',
      'Forward seat and two-point on galloping stretches between fences — the saddle must allow the rider to come out of the seat without catching the cantle.',
      'On landing from a drop fence, the rider needs the seat to be there to catch them — saddles with too flat a seat compromise this at the upper levels.',
      'For the AP rider managing one saddle: a stirrup length that splits the difference and the discipline to accept the compromise.',
    ],
    commonFitProblems: [
      {
        problem: 'Saddle bridges at the gallop but contacts well at halt.',
        signs: [
          'Dry patches under the middle of the panel after a cross-country school.',
          'White hairs at front and rear of the saddle area, none in the middle.',
          'Horse drops the back over drops or banks.',
          'Saddle slides forward repeatedly on long galloping stretches.',
        ],
        solution:
          'A qualified saddler refloks the panel to maintain even contact at galloping speed. If the tree shape is fundamentally wrong for the horse, no flocking change will fix it — the tree must change.',
      },
      {
        problem: 'AP single-saddle does not work for either dressage or jumping at the higher levels.',
        signs: [
          'Rider is tipped forward in the dressage phase, behind the motion over fences.',
          'Dressage scores plateau; jumping security drops as fences grow.',
          'The horse moves differently in the AP than in a borrowed dedicated saddle.',
        ],
        solution:
          'At Preliminary level and above, most riders move to two saddles. The eventing AP is honest — it is a compromise designed to do both jobs adequately, not either well.',
      },
      {
        problem: 'Cross-country saddle pinches at the shoulder under the gallop.',
        signs: [
          'Refusals or runouts in galloping conditions but not in stadium.',
          'Short stride between fences that the rider cannot lengthen.',
          'Heat or muscle soreness behind the shoulder after a cross-country day.',
        ],
        solution:
          'Tree-point placement and tree width — assessed by a qualified saddler with the horse worked under the rider, not on a stand.',
      },
      {
        problem: 'Dressage saddle pinches on a horse that fits the jumping saddle.',
        signs: [
          'Horse moves freely in the jumping saddle but is tight, hollow, or short-strided in the dressage saddle on the same day.',
          'Dressage scores are inconsistent with the horse\'s evident ability.',
        ],
        solution:
          'The dressage tree is different from the jumping tree even when the horse is the same. Both saddles need independent fitting by a qualified saddler — fit on one does not transfer to the other.',
      },
    ],
    whenToFit: [
      'On purchase of either saddle in the eventing pair — before the first ride.',
      'At the start of each competition season — typically late winter / early spring in the US and UK.',
      'After the let-down period at the end of the season, before bringing the horse back into work.',
      'When the workload steps up — moving from hacking to schooling, schooling to fitness work.',
      'Annually as a routine check whether or not symptoms have appeared.',
      'After any fall, rotational injury, or rough cross-country landing — the tree may be twisted.',
      'When a young event horse is filling out — under 7 years, expect refits every 6 months.',
    ],
    professionalFitterRecommendation:
      'A qualified saddle fitter from the Society of Master Saddlers (UK) or Master Saddlers Association (US) is the right call for an event horse — and the right call twice if you ride a separate dressage saddle. The fitter should see the horse in motion under the rider; eventing-specific fitters who understand gallop pressure and drop-fence loading are worth the extra effort to find. Saddle.com does not provide on-horse fitting.',
    brandsKnownForGoodFit: [
      { name: 'Bates', slug: 'bates', knownFor: 'Caprilli AP and Innova eventing models — adjustable gullet, the practical eventing-amateur option.' },
      { name: 'County', slug: 'county', knownFor: 'Custom Eventer — built around the horse, strong with hard-to-fit Thoroughbreds and TB-crosses.' },
      { name: 'Stübben', slug: 'stubben', knownFor: 'Aramis AP and dedicated jumping/dressage models with the Quick-Change tree.' },
      { name: 'Wintec', slug: 'wintec', knownFor: 'Synthetic eventing and AP options with adjustable gullet — the entry-level practical choice for adult amateurs.' },
    ],
    priceRangeForGoodFit:
      'Single AP saddle: $1,200–$3,500 new. A dedicated eventing pair (dressage + jumping/XC): $4,000–$10,000 new from established makers. Used eventing saddles are widely available and often excellent value — expect $800–$2,500 for a serviceable used AP, always with a fit check by a qualified saddler before purchase.',
    faqs: [
      {
        question: 'When should I move from one saddle to two for eventing?',
        answer:
          'Most riders make the move at Preliminary / 1* level, where the dressage test demands a true dressage position and cross-country security demands a true jumping saddle. Below that, a well-fitting AP can do both jobs honestly. The cost of two saddles is significant, but so is the performance ceiling of an AP at the upper levels.',
      },
      {
        question: 'Is an "eventing saddle" different from an all-purpose saddle?',
        answer:
          'Yes — typically. A dedicated eventing saddle is a jumping saddle with a slightly deeper seat and a more pronounced knee block for security at galloping speed over solid fences. An AP is a true compromise design with a semi-forward flap and a moderate seat. Both exist; the eventing saddle is the more specialized of the two.',
      },
      {
        question: 'Can the same saddle pad be used for both the dressage and jumping saddle?',
        answer:
          'No — the saddle shapes are different and the pads are cut differently to follow the saddle outline. Use a dressage-cut pad under the dressage saddle and a jumping or AP-cut pad under the jumping saddle; mismatched pads create pressure points at the edges.',
      },
      {
        question: 'What does USEF say about eventing saddles?',
        answer:
          'USEF Eventing (EV) rules require a saddle but do not mandate a specific construction; the FEI rule book mandates an English-style saddle and stirrups for all three phases. The rule book governs equipment legality, not fit — fit is the rider\'s responsibility and is checked by a qualified saddler.',
      },
      {
        question: 'My event horse is sound but is dropping in dressage scores. Could it be saddle fit?',
        answer:
          'It can be. Drops in dressage scores on an otherwise-sound horse, especially in collected work, are a known signal of dressage-saddle fit drift as the horse develops topline over a season. A fit check by a qualified saddler is cheaper than a vet workup and addresses the most likely cause first.',
      },
    ],
    group: 'English',
  },

  // ─── WESTERN ──────────────────────────────────────────────────────────────
  {
    slug: 'western-saddle-fit',
    disciplineName: 'Western',
    saddleType: 'Western saddle — rigid tree (wood or fiberglass), bars, gullet, full or in-skirt rigging, fenders',
    tagline:
      'How a Western saddle should fit — tree fit to the horse\'s back, gullet width clearing the withers, even bar contact under the rider.',
    overview:
      'Western saddle fit centers on the tree — a rigid wood or fiberglass-and-bull-hide structure that distributes the rider\'s weight across a much larger area than an English saddle. The tree comes in defined bar angles (Quarter Horse, Semi-Quarter Horse, Full Quarter Horse, Arabian, Gaited) and gullet widths (typically 6¼" to 8" measured between the conchos at the front of the gullet). The wrong bar angle pinches; the wrong gullet sits down on the withers; the wrong bar length loads the loin or the shoulder. Because the tree is rigid and cannot be re-flocked the way an English wool-flocked panel can, getting the tree right at purchase is the whole game. A well-fitted Western saddle distributes weight beautifully; a wrongly-fitted one is much harder to fix than its English counterpart.',
    keyFitPoints: [
      'Gullet clearance: 2–3 fingers vertical clearance between the underside of the gullet (the front of the saddle tree) and the highest point of the wither, with a saddle pad of normal thickness.',
      'Bar angle matches the horse\'s shoulder angle — a Quarter Horse bar on an Arabian sits incorrectly, and vice versa.',
      'Even bar contact along the full length of the bar (not just at the front and rear) — the Western equivalent of bridging is a bar that contacts at the front and rear with a gap under the rider\'s seat.',
      'Bars sit behind the shoulder blade — the rear of the shoulder blade should clear the front of the bar when the horse moves the leg forward.',
      'Bar length does not extend past the last rib onto the loin — a bar that loads the loin will cause back soreness and resistance.',
      'Cinch (the Western girth) pulls the saddle down evenly without the rear of the saddle lifting off the back.',
      'Rigging position (full, ¾, 7/8, center-fire) suits the horse\'s anatomy and the discipline — a full rigging on a forward-girthed horse can pull the saddle forward into the shoulder.',
    ],
    horseConformationConsiderations: [
      'Stock-horse breeds (Quarter Horse, Paint, Appaloosa) are the design center of most Western trees — the standard Semi-Quarter Horse and Full Quarter Horse bars fit most adult stock horses adequately.',
      'Arabians and Arabian crosses have a different shoulder angle and a shorter back than stock horses; Arabian-bar trees (sometimes labelled "Arab" or "FQH for short-backed horses") are a real product, not a marketing line.',
      'Gaited horses (Tennessee Walking Horses, Missouri Fox Trotters, Paso Finos) often have a different topline and shoulder rotation; gaited-specific bars exist and are worth seeking out.',
      'Mules and donkeys have a very different scapula angle and require mule-specific tree designs — a horse-tree on a mule will not fit.',
      'Wide-shouldered, low-withered "mutton-withered" horses need a wider bar angle and a wider gullet to avoid sitting down on the withers under the rider\'s weight.',
      'High-withered, sharper-shouldered horses (some Thoroughbred crosses used as ranch or trail horses) need narrower bars and a higher gullet — easy to undersupply in the Western market, which is built around stock-horse shapes.',
    ],
    riderPositionRequirements: [
      'Seat size: the rider should fit comfortably between the swell (front) and cantle (rear) without forcing — a seat that is too small puts the rider on the cantle, too large leaves the rider perched forward.',
      'Stirrup length and position let the rider sit deep with the heel under the hip — fenders that hang too far forward force a "chair" seat.',
      'Cantle height and dish suit the discipline: a roping saddle has a low, flat cantle for quick dismount; a reining saddle has a higher cantle for security in sliding stops; a trail saddle splits the difference.',
      'Horn position lets the rider use the horn for support (trail, ranch) or for roping without the horn interfering with the rider\'s body in standard riding position.',
      'For Western dressage and ranch riding: the saddle should allow a long-leg, vertical-pelvis position similar to English dressage, not a chair seat.',
    ],
    commonFitProblems: [
      {
        problem: 'Gullet sits down on the withers under the rider — too-wide a tree.',
        signs: [
          'Pommel rocks against the withers when the rider mounts; clearance drops from acceptable at halt to none under the rider.',
          'White hairs developing on top of the withers.',
          'Horse is reluctant to stand for saddling; sensitive to touch on top of the wither.',
        ],
        solution:
          'A narrower bar angle and/or narrower gullet — typically requires a different saddle. Build-up pads (cutback or full) are a stopgap, not a fix; they change the geometry but do not fix a fundamentally too-wide tree.',
      },
      {
        problem: 'Bars pinch the shoulder or sit on the scapula — too-narrow tree.',
        signs: [
          'Shortened stride and reluctance to lengthen at the trot or lope.',
          'Heat or sweat marks at the front of the bars after work.',
          'Horse moves better in another saddle on the same day.',
        ],
        solution:
          'A wider bar angle and adequate gullet clearance — typically a different saddle. Wide-tree shimmed pads are sold as a fix but should be considered diagnostic, not therapeutic.',
      },
      {
        problem: 'Bridging — bars contact at the front and rear, gap under the rider\'s seat.',
        signs: [
          'Dry patches under the middle of the bars after a sweaty ride.',
          'Saddle "rocks" front-to-rear when the rider shifts weight.',
          'Pressure marks at the front and rear of the bar area only.',
        ],
        solution:
          'The bar curve (rock) is too flat for the horse\'s back curve. A different tree shape is the fix — bridging cannot be padded out, only shifted to a different point on the back.',
      },
      {
        problem: 'Bars load the loin — bars extend past the last rib.',
        signs: [
          'Back soreness behind the saddle; reluctance to engage the hindquarters.',
          'Horse hollows under the rider at the lope.',
          'Bar imprint visible behind the last rib after the saddle is removed.',
        ],
        solution:
          'A shorter-bar saddle. Common on long-bar Western trees used on short-backed horses (Arabians, short-coupled Quarter Horses).',
      },
      {
        problem: 'Cinch pulls the saddle forward into the shoulder.',
        signs: [
          'Rear of the saddle lifts off when the cinch is tightened.',
          'Saddle creeps forward during the ride and ends up over the withers.',
          'Cinch sores at the elbow as the cinch pulls forward.',
        ],
        solution:
          'Reposition the rigging (most Western saddles offer multiple D-ring positions, or 3-way / 7/8 / center-fire options) so the cinch hangs straight down from the natural girth groove. Adding a back cinch (correctly adjusted, snug but not tight) helps anchor the rear of the saddle.',
      },
    ],
    whenToFit: [
      'On purchase — before the first ride.',
      'Annually at minimum, especially if the horse changes weight or workload through the year.',
      'When the horse changes condition score by more than 1 (BCS shift).',
      'When a young Western horse is filling out — under 6 years old, expect to refit through the early career.',
      'When a working ranch horse comes back into condition after a slow season.',
      'After a roping or working accident that may have stressed the tree — Western saddle trees can crack and continue to look intact externally.',
      'When the horse develops cinchy or cold-backed behavior, or sores on top of the wither.',
    ],
    professionalFitterRecommendation:
      'Western saddle fitting is a smaller, less centralized profession than English saddle fitting; certified Western fitters do exist but are concentrated in stock-horse regions. The Society of Master Saddlers does certify Western fitters, and Master Saddlers Association members in the US include Western specialists. Where a qualified fitter is not within reach, the practical approach is to buy from a reputable maker with a documented exchange policy (Circle Y, Billy Cook, Reinsman), assess fit with the saddle on the horse before riding, and re-evaluate after a few rides. Many makers will exchange a saddle that does not fit if returned promptly. Saddle.com does not provide on-horse fitting.',
    brandsKnownForGoodFit: [
      { name: 'Circle Y', slug: 'circle-y', knownFor: 'Wide range of bar widths and tree shapes; strong reputation for trail and pleasure fit on stock-horse and Arabian shapes.' },
      { name: 'Billy Cook', slug: 'billy-cook', knownFor: 'Traditional Texas-built saddles with consistent tree quality; strong on ranch, trail, and roping fit.' },
      { name: 'Reinsman', slug: 'reinsman', knownFor: 'Reining and barrel saddles with discipline-tuned tree shapes; clear bar-width charting.' },
    ],
    priceRangeForGoodFit:
      '$1,200–$3,500 new for a correctly-fitted production Western saddle from an established maker. Custom Western saddles (Bob Marshall, Don Rich, regional makers) run $3,500–$8,000+. The used Western saddle market is very deep and excellent value — expect $400–$1,800 for a serviceable used Circle Y, Billy Cook, or similar, always with the tree and rigging inspected before purchase.',
    faqs: [
      {
        question: 'How do I measure a Western saddle gullet width?',
        answer:
          'Gullet width is measured between the conchos at the front of the gullet (the front of the bars, not the top of the swell). Standard measurements: 6¼"–6½" Semi-Quarter Horse, 6¾"–7" Full Quarter Horse, 7¼"–7½" Extra-Wide. Different makers measure slightly differently, so the same nominal width can fit differently across brands. Always confirm with the maker\'s fit chart.',
      },
      {
        question: 'Can a Western saddle tree be adjusted like an English one?',
        answer:
          'No — Western trees are rigid wood-and-rawhide or fiberglass and cannot be reshaped. Fleece-lined bars can be re-fleeced and skirts can be replaced, but the tree shape itself is fixed for the life of the saddle. This is why getting the tree right at purchase matters more for Western than for English wool-flocked saddles, which can be reflocked.',
      },
      {
        question: 'What is the right cinch tension on a Western saddle?',
        answer:
          'Snug enough that the saddle does not shift when the rider mounts and stands in the stirrups, but no tighter. The Master Saddlers Association guidance mirrors the English standard — overgirthing does not fix a fit problem and adds discomfort. The back cinch should be snug enough to maintain contact with the horse\'s belly but not so tight that it lifts the horse — typically a flat hand can slide between cinch and belly.',
      },
      {
        question: 'Do I need a thicker Western pad if my saddle is too wide?',
        answer:
          'A thicker pad changes the geometry slightly but does not fix a too-wide tree — the tree still sits down on the withers, just from a slightly higher start point. Use a build-up pad as diagnostic only; the long-term fix is the right tree for the horse.',
      },
      {
        question: 'Do USEF or AQHA rules require a specific Western saddle?',
        answer:
          'USEF Western Performance rules and AQHA show rules require a stock-type Western saddle of suitable construction for the class, but do not mandate specific tree dimensions or fit standards. As with English disciplines, the rule book governs equipment legality at competition, not fit on the horse — fit is the rider\'s responsibility and is checked by a qualified saddler.',
      },
    ],
    group: 'Western',
  },

  // ─── ENDURANCE ────────────────────────────────────────────────────────────
  {
    slug: 'endurance-saddle-fit',
    disciplineName: 'Endurance',
    saddleType: 'Endurance saddle — purpose-built English or hybrid (Australian, treeless, McClellan-derived), lightweight, large bearing surface, multiple ride-time comfort features',
    tagline:
      'How an endurance saddle should fit — large weight-distribution area, panel flexibility for 25–100 mile rides, lightweight construction.',
    overview:
      'Endurance riding asks more of saddle fit than any other discipline because the horse carries the rider for 25 to 100 miles in a day, often over varied terrain. Pressure points that would be tolerable for a 45-minute schooling session become injuries at mile 30, and a saddle that is comfortable for the rider for an hour can be painful at hour six. Endurance saddle design therefore optimizes for the largest possible weight-bearing area, the lightest possible saddle, and panel materials that conform to the horse\'s back as it changes shape over the day. The AERC (American Endurance Ride Conference) checkpoint inspections look for saddle-area soreness, and a horse pulled for back pain at a vet check is a saddle-fit failure as much as a conditioning failure.',
    keyFitPoints: [
      'Largest practical weight-bearing surface — endurance saddles spread weight over a broader area than dressage or jumping saddles, which is the central design goal.',
      'Wither clearance maintained over a full ride — sweat, fatigue, and minor swelling can change wither contact between mile 5 and mile 50.',
      'Even panel contact across the full bearing surface; bridging that appears only at hour 4 of a ride is the classic endurance fit failure.',
      'Full gullet channel maintained under the rider with the horse fatigued at the end of the ride, not just fresh at the start.',
      'Lightweight construction (saddles under 18 lb are common in serious endurance) so the horse carries less dead weight over 50–100 miles.',
      'Panel flexibility (treeless saddles, flex-panel English designs, sheepskin or wool-padded surfaces) that accommodates the horse\'s back as it changes shape over the day.',
      'Rigging or girthing that does not chafe at the elbow over many hours; many endurance saddles use English-style billets with a long-line sheepskin girth, others use Western-style cinches.',
    ],
    horseConformationConsiderations: [
      'Most endurance horses are Arabians, Arabian crosses, or Mustangs — short-backed, sharp-withered, and with a distinctive shoulder angle. Stock-horse-tree Western saddles often do not fit endurance Arabians.',
      'Endurance horses are typically very fit (low body condition score by recreational-horse standards, with prominent topline musculature) — a saddle fitted when the horse is at maintenance fitness may pinch at peak conditioning.',
      'Horses change shape during a ride — sweat dehydration can drop visible muscle volume between the start and a hold at 25 miles. The saddle must tolerate this.',
      'Sharp withers and a high-set neck are the rule, not the exception, on Arabian-bred endurance horses; tree designs developed for short, wide stock horses will not fit them.',
      'Gaited endurance horses (Tennessee Walkers, Paso Finos, Icelandics in long-distance work) need gaited-specific or trail-specific tree shapes, not standard sport-saddle designs.',
    ],
    riderPositionRequirements: [
      'Long stirrup, vertical pelvis — endurance riders alternate between sitting, two-point, and posting over a long ride and need a saddle that does not lock them into one position.',
      'Seat size sized to allow weight-shifting during the ride; many endurance riders size up by a half-inch from their schooling-saddle seat size.',
      'Stirrup hangs naturally under the rider\'s hip in both sitting and two-point positions.',
      'Fenders or full-length flaps that protect the rider\'s leg from chafing over many hours; padded fenders or sheepskin-lined leg contact is common.',
      'No fixed knee block — the rider needs freedom to move the leg over the course of the ride.',
    ],
    commonFitProblems: [
      {
        problem: 'Bridging that develops only late in a ride.',
        signs: [
          'Saddle fits well on training rides under 2 hours; horse becomes sore behind the shoulders only on rides over 4 hours.',
          'Vet-check back soreness at the 25-mile or 50-mile hold on an otherwise-sound horse.',
          'Dry patches under the middle of the saddle after a long ride but not after short rides.',
        ],
        solution:
          'A qualified saddler refits the panel to maintain contact under fatigue. Test fit on a long ride before assuming a saddle works for endurance.',
      },
      {
        problem: 'Wither clearance lost as the horse loses body water through a ride.',
        signs: [
          'Pommel sits 3+ fingers above the wither at the start, 1 finger or less by the 50-mile hold.',
          'Wither soreness at vet check at the end of the ride.',
          'White hairs developing on the wither over a season of competition.',
        ],
        solution:
          'A slightly narrower tree at start (so it is correct at peak fitness mid-ride) and a tree shape that does not bottom out as topline shifts. A qualified saddler with endurance experience can fit a saddle for the fit it has under load, not at rest.',
      },
      {
        problem: 'Treeless saddle bridges or pressure-points under the rider\'s seat bones.',
        signs: [
          'Two clear sweat marks where the rider\'s seat bones bear down.',
          'Back soreness centered under the rider\'s seat, not under the saddle generally.',
        ],
        solution:
          'A treeless saddle requires a treeless-specific pad with a built-in spinal channel and pressure-distributing inserts. Treeless saddles work for some horses and not others; if pressure points persist with a correct pad, a treed endurance saddle is the alternative.',
      },
      {
        problem: 'Rigging chafe at the elbow over many hours.',
        signs: [
          'Sore or open skin behind the elbow after a long ride.',
          'Horse becomes girthy by the second day of a multi-day ride.',
        ],
        solution:
          'A different rigging position (move toward center-fire or 7/8 rigging) or a different girth shape (anatomic, sheepskin-lined, long-line). The saddle does not necessarily need to change — the rigging often can.',
      },
    ],
    whenToFit: [
      'On purchase — before the first ride, on a horse near its competition fitness if possible.',
      'At the start of each conditioning year, before fitness work resumes.',
      'After significant muscle gain through conditioning — typically 8–12 weeks into a build-up.',
      'After a multi-day ride or 100-mile completion that may have shifted the horse\'s topline.',
      'Annually as a baseline check whether or not symptoms appear.',
      'When vet-check back scores start to drop on an otherwise-sound horse.',
      'When the horse changes feeding regime and body condition score shifts by more than 1.',
    ],
    professionalFitterRecommendation:
      'Endurance fit is a niche within the larger saddle-fitting profession; not all Society of Master Saddlers or Master Saddlers Association fitters have endurance experience. Where possible, choose a fitter who has personally completed endurance rides or fitted competing endurance horses — they will understand fit under fatigue, not just fit at halt. The AERC does not certify fitters, but its ride managers and senior vets often know the regional fitters with endurance experience. Saddle.com does not provide on-horse fitting.',
    brandsKnownForGoodFit: [
      { name: 'Wintec', slug: 'wintec', knownFor: 'Synthetic endurance and trail models with adjustable gullet — practical, lightweight, easy to clean after a wet ride.' },
      { name: 'Bates', slug: 'bates', knownFor: 'CAIR-paneled all-purpose models adapted for endurance; air panels redistribute pressure over long rides.' },
      { name: 'Stübben', slug: 'stubben', knownFor: 'Wool-flocked trail and endurance models; re-fittable as the horse changes shape through conditioning.' },
      { name: 'Circle Y', slug: 'circle-y', knownFor: 'Trail and endurance Western and Western-derived models on Arabian and gaited-horse trees.' },
    ],
    priceRangeForGoodFit:
      '$1,500–$4,500 new for a correctly-fitted purpose-built endurance saddle. Treeless options (Bob Marshall, Ghost, Sensation) run $1,200–$2,800 with the right pad system. Used endurance saddles are widely traded among the AERC community and represent excellent value — expect $700–$2,200 for a serviceable used saddle, always with a fit check by a qualified saddler before purchase.',
    faqs: [
      {
        question: 'Are treeless saddles a good option for endurance?',
        answer:
          'Treeless saddles work for some horse-rider combinations and not others. They distribute the rider\'s weight differently from a treed saddle and require a treeless-specific pad to clear the spine and spread pressure correctly. Many AERC top-ten riders use treeless; many do not. Try one with a correct pad on the actual horse over a long enough ride to see how it performs under fatigue before committing.',
      },
      {
        question: 'How light should an endurance saddle be?',
        answer:
          'Lighter is better for the horse, within reason. Many serious endurance saddles weigh under 18 lb; some treeless and synthetic options are under 12 lb. The tradeoff is durability — extremely light saddles may not tolerate the wear of regular conditioning miles. Aim for the lightest saddle that fits the horse correctly and holds up to the use.',
      },
      {
        question: 'Does AERC have rules about saddle fit?',
        answer:
          'The AERC rules require the horse to be "fit to continue" at each vet check, which in practice includes assessment of saddle-area soreness. A horse pulled for back pain is a fit failure even if the saddle is legal. The AERC does not specify saddle construction beyond requiring that the horse be safe and sound to continue.',
      },
      {
        question: 'Why are most endurance horses ridden in English-style saddles?',
        answer:
          'Most endurance horses are Arabians or Arabian crosses, and the standard Western tree (designed for stock-horse shapes) does not fit them well. Purpose-built endurance saddles, treeless saddles, and Australian saddles all evolved to fit Arabian-style horses better than standard Western trees. There are excellent Western endurance saddles built on Arabian or gaited bars, but they are a smaller share of the market.',
      },
      {
        question: 'My endurance horse passes vet checks for the first 25 miles but is sore at the 50-mile hold. Is it the saddle?',
        answer:
          'It can be. Saddle-fit problems that only show up under fatigue — bridging that develops as the horse loses muscle volume over the ride, or wither clearance that disappears as topline shifts — are the classic endurance failure mode. A fit check by a qualified saddler with endurance experience is the right first step before assuming a conditioning issue.',
      },
    ],
    group: 'English',
  },

  // ─── CLOSE-CONTACT ────────────────────────────────────────────────────────
  {
    slug: 'close-contact-saddle-fit',
    disciplineName: 'Close-Contact',
    saddleType: 'Close-contact saddle — minimal seat depth, very forward flap, low-profile panel, designed for jumping with maximum feel',
    tagline:
      'How a close-contact saddle should fit — low-profile jumping feel, forward leg position, minimal saddle between rider and horse.',
    overview:
      'A close-contact saddle is the lowest-profile jumping saddle made — a flat or near-flat seat, a very forward-cut flap, and the thinnest practical panel between the rider and the horse. The design priority is feel: the rider should sense the horse\'s back through the saddle, with as little structure as possible in the way. This is the saddle traditional hunters, equitation riders, and many show jumpers prefer. The cost of all that feel is a thinner panel and a flatter seat, which makes fit tolerances tighter than a deeper, more padded jumping saddle. A close-contact saddle that fits wrong will show every fit problem more dramatically than an all-purpose saddle will.',
    keyFitPoints: [
      'Wither clearance 2–3 fingers in motion as well as at halt — the thin panel does not absorb fit error the way a thicker AP panel would.',
      'Tree points behind the scapula. Close-contact saddles can wedge forward into the shoulder more easily than deeper jumping saddles because there is less seat to anchor the rider rearward.',
      'Even panel contact across the full bearing surface — a thin panel with bridging concentrates pressure immediately.',
      'Full gullet channel clear of the spine under the rider — close-contact panels are flat enough that this clearance can disappear under load.',
      'Flap very forward-cut to allow the short jumping-length stirrup; the knee sits behind the front edge of the flap in jumping position.',
      'Knee roll, if any, small and well-placed so it supports the front of the thigh without forcing the leg back.',
      'Balance is flat or very slightly cantle-high — a forward-tipped close-contact saddle is uncomfortable to ride flat and dangerous over fences.',
    ],
    horseConformationConsiderations: [
      'Close-contact saddles favor horses with average-to-prominent withers and well-defined backs — the thin panel works well when the back can carry it. Very flat-backed or wide horses tolerate close-contact saddles less well than deeper-paneled designs.',
      'Thoroughbreds and TB-cross hunters with prominent withers and clean shoulders are the design center of the close-contact saddle market.',
      'High-withered, light-bodied horses (some sport-bred TB types) need a narrow-to-medium tree with adequate wither clearance and benefit from the close-contact panel\'s low profile.',
      'Wider, lower-withered horses may carry a close-contact saddle but will often be better served by a slightly deeper-paneled jumping saddle that distributes weight over a larger surface.',
      'Asymmetric horses are difficult in close-contact saddles because there is so little panel material to adjust; a wool-flocked close-contact panel is easier to balance than a foam one.',
    ],
    riderPositionRequirements: [
      'Hip closes deeply over fences without the saddle catching the rider — the flat seat and forward flap are designed for this.',
      'Lower leg stays under the rider through takeoff, flight, and landing — close-contact saddles offer less security than deeper jumping saddles, and the rider\'s position has to do the work.',
      'Knee sits behind the front edge of the forward flap in jumping position.',
      'Seat allows the rider to be out of the saddle on takeoff and to return softly on landing without catching the cantle.',
      'For equitation riders specifically: a classically-balanced, quiet position is rewarded; a close-contact saddle can flatter that position but cannot create it.',
    ],
    commonFitProblems: [
      {
        problem: 'Wither clearance disappears under the rider on a thin-paneled close-contact saddle.',
        signs: [
          'Adequate clearance at halt without rider; insufficient with rider mounted.',
          'Wither soreness or white hairs developing on top of the withers.',
          'Horse becomes reluctant to stand for saddling.',
        ],
        solution:
          'A qualified saddler checks tree width under load. The fix is often a slightly wider tree or a re-flocked front panel; a thicker pad changes the geometry but does not fix the underlying tree-width problem.',
      },
      {
        problem: 'Tree points pinch the shoulder.',
        signs: [
          'Shortened canter stride that the rider cannot lengthen.',
          'Refusals or run-outs on a previously-willing horse.',
          'Heat or white-hair patches behind the shoulder at tree-point location.',
        ],
        solution:
          'Reposition the saddle slightly rearward (sometimes the saddle has been placed too far forward by habit) and have a qualified fitter assess tree-point placement. Where tree placement is correct and the points still pinch, the tree is too narrow.',
      },
      {
        problem: 'Bridging on landing — bigger problem on a thin-paneled close-contact than on a thicker AP.',
        signs: [
          'Dry patches under the middle of the panel.',
          'Saddle slides forward on each landing.',
          'Horse drops the back over fences.',
        ],
        solution:
          'Re-flock or replace the panel so contact is maintained through jumping rotation. Close-contact panels have less material to adjust than deeper panels; sometimes a different saddle is the practical answer.',
      },
      {
        problem: 'Saddle tips forward on the horse — pommel low, cantle high.',
        signs: [
          'Rider is thrown onto the fork.',
          'Saddle slides forward repeatedly during work.',
          'Heel comes up and the lower leg swings back over fences.',
        ],
        solution:
          'Tree too narrow (most common) or front panel compressed. A qualified fitter widens the tree where possible or re-flocks the front; a wedge or riser pad is a stopgap only.',
      },
    ],
    whenToFit: [
      'On purchase — before the first ride.',
      'Annually at minimum, ideally before show season.',
      'After the horse changes shape from conditioning, layoff, or seasonal weight shift.',
      'When a young horse is filling out — under 7 years old.',
      'After any fall, especially a rotational one that may have twisted the tree.',
      'When a horse that used to jump willingly starts to refuse, run out, or pin ears.',
      'When wither clearance drops below 2 fingers under the rider — recheck rather than ride.',
    ],
    professionalFitterRecommendation:
      'Close-contact saddles demand the same qualified-fitter assessment as any other discipline — Society of Master Saddlers (UK) or Master Saddlers Association (US) certified fitters are the standard. Because the panel is thinner, fit problems are amplified and refit windows are shorter. Brand-employed fitters from the major close-contact makers (Antares, Pessoa, CWD, Voltaire) often know their own product well; an independent qualified fitter is the gold standard for an unbiased assessment. Saddle.com does not provide on-horse fitting.',
    brandsKnownForGoodFit: [
      { name: 'Antares', slug: 'antares', knownFor: 'French close-contact construction at the top of the market; the show-jumping professional\'s standard.' },
      { name: 'Pessoa', slug: 'pessoa', knownFor: 'A/O and Gen X close-contact models — the equitation-ring and hunter-ring standard.' },
      { name: 'Stübben', slug: 'stubben', knownFor: 'Portos jumping saddle with the Quick-Change tree — close-contact construction, re-fittable as the horse changes.' },
    ],
    priceRangeForGoodFit:
      '$3,000–$7,000 new for a correctly-fitted close-contact saddle from a top maker (Antares, Pessoa, CWD, Voltaire). Mid-range close-contact saddles from Stübben, Bates, and similar makers run $1,800–$4,000 new. Used close-contact saddles from established makers are widely traded — expect $1,500–$4,000 for a serviceable used Antares, Pessoa, or Stübben, always with a fit check by a qualified saddler before purchase.',
    faqs: [
      {
        question: 'What is the difference between a close-contact saddle and a jumping saddle?',
        answer:
          'A close-contact saddle is a specific type of jumping saddle with the lowest-profile design — flat seat, very forward flap, thinnest practical panel. "Jumping saddle" is the broader category and includes deeper-seated, more padded designs preferred for security at speed and over bigger fences. Many hunter-ring and equitation riders use close-contact saddles; many jumper-ring riders use deeper jumping saddles. The fit fundamentals are the same.',
      },
      {
        question: 'Is a close-contact saddle harder to fit than a deeper jumping saddle?',
        answer:
          'Yes, marginally. The thinner panel has less material to absorb fit error and less to adjust, so tolerances are tighter and refit windows are shorter. The payoff is the closeness of feel that the saddle is designed to deliver.',
      },
      {
        question: 'Can I ride dressage in a close-contact saddle?',
        answer:
          'You can, but the very forward flap and flat seat will work against a long-leg, vertical-pelvis dressage position. USEF dressage rules permit it at the lower levels; performance at the higher levels will plateau. For dressage work, a dedicated dressage saddle is the right tool.',
      },
      {
        question: 'Do French close-contact saddles fit American Thoroughbreds?',
        answer:
          'Often, yes — many French close-contact makers (Antares, CWD, Voltaire) offer custom builds sized for individual horses, and Thoroughbreds with prominent withers and clean shoulders are within their design range. The custom-build process is the value driver here; off-the-shelf French close-contact saddles do not necessarily fit better than off-the-shelf alternatives.',
      },
      {
        question: 'How long does a close-contact saddle last?',
        answer:
          'A well-maintained close-contact saddle from a top maker can stay in active use for 10–20 years, with periodic re-flocking of wool panels. The leather and tree are the long-life components; the panel may need attention every few years depending on use. Foam panels have a shorter realistic life than wool because they compress and cannot be re-flocked.',
      },
    ],
    group: 'English',
  },
]

export function getDisciplineFitBySlug(slug: string): DisciplineFit | undefined {
  return DISCIPLINE_FITS.find((d) => d.slug === slug)
}

export function getAllDisciplineFitSlugs(): string[] {
  return DISCIPLINE_FITS.map((d) => d.slug)
}
