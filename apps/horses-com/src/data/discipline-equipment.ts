/**
 * Horses.com — Per-discipline equipment buyer-guide data file.
 *
 * Source-of-truth for /disciplines/[slug]/equipment programmatic template.
 * Six discipline records mirror the existing /disciplines/[slug] overview
 * pages: dressage, show-jumping, eventing, western-pleasure, reining,
 * trail-riding.
 *
 * Editorial scope:
 *   - These are buyer guides, NOT a list of products the editorial team
 *     has hands-on tested. We summarize what each discipline requires,
 *     what is optional, what to avoid as a beginner, and which brands
 *     consistently appear in saddler / tack-shop / governing-body
 *     resource lists.
 *   - Rulebook references cite the public USEF, USDF, USEA, AQHA, NRHA,
 *     NATRC, and AERC rulebooks. We do not paraphrase rule wording —
 *     we point the reader at the canonical chapter / section.
 *   - Price ranges are USD market observations for off-the-shelf
 *     starter / mid / advanced kits as of 2025-2026; a custom saddle
 *     or competition tack falls well outside these bands.
 *
 * Trust-bar (QC-STANDARDS §1):
 *   - NO fake hands-on testing claims.
 *   - NO fake bylines — articles render the "Horses.com Editorial" byline.
 *   - Brands listed are reference points for shoppers, not endorsements.
 */

export interface BrandToConsider {
  name: string
  knownFor: string
}

export interface AccessoryItem {
  item: string
  purpose: string
}

export interface DisciplineEquipment {
  slug: string
  disciplineName: string
  /** One-paragraph overview of equipment philosophy for the discipline. */
  overview: string
  saddleType: string
  saddleNotes: string
  bridleType: string
  bitGuidance: string
  requiredApparel: string[]
  optionalApparel: string[]
  commonAccessories: AccessoryItem[]
  /** USD; off-the-shelf, not custom or top-of-the-line. */
  priceRangeBeginnerKit: string
  priceRangeIntermediate: string
  priceRangeAdvanced: string
  brandsToConsider: BrandToConsider[]
  buyingTips: string[]
  avoidWhenStartingOut: string[]
  whereToBuy: string[]
  /** Free-text rulebook citation (USEF chapter, USDF section, etc.). */
  rulebookReference: string
}

export const DisciplineEquipmentData: DisciplineEquipment[] = [
  // ───────────────────────────────────────────────────────── Dressage ──
  {
    slug: 'dressage',
    disciplineName: 'Dressage',
    overview:
      'Dressage equipment is conservative, traditional, and built to position the rider in a long-leg balanced seat directly over the horse&apos;s center of gravity. The saddle, bridle, and rider attire are tightly regulated by USEF Chapter DR and the FEI Dressage Rules; what is permitted at one level may not be permitted at another. For a new rider building a starter kit through Second Level, a well-fitted plain-flap dressage saddle, a snaffle bridle, and conforming schooling attire is all that is required.',
    saddleType: 'English dressage saddle — deep seat, long straight flap',
    saddleNotes:
      'The dressage saddle drops the rider&apos;s leg long with the stirrup hung well forward; the seat is deep with a high pommel and cantle. Modern competition saddles use prominent thigh blocks; classical schools prefer minimal blocks. Tree width (medium, medium-wide, wide) must match the individual horse — buy a used name-brand saddle that fits your horse before a new saddle that does not. See the Horses.com saddle-fit basics guide.',
    bridleType:
      'English snaffle bridle through Fourth Level; double bridle (bradoon + Weymouth) optional from Fourth, required at FEI Prix St. Georges and above (USEF DR121).',
    bitGuidance:
      'Snaffle bits permitted are listed in USEF DR121 and FEI Dressage Rules Annex A — single- and double-jointed eggbutt, loose-ring, full-cheek, D-ring, and Baucher patterns; bit mouthpiece minimum 12 mm. Double-bridle bradoons and curbs are similarly enumerated. Hackamores, gag bits, and any non-listed bit are prohibited in competition.',
    requiredApparel: [
      'ASTM/SEI- or PAS 015-certified equestrian helmet (required at all USEF-recognized competitions per the 2021 rule)',
      'Dark coat — navy, black, or other approved color',
      'White or light-colored breeches',
      'Tall black field or dress boots',
      'White or light-colored shirt with stock tie or choker',
      'White, beige, or matching gloves',
    ],
    optionalApparel: [
      'Tailcoat (shadbelly) — permitted from Fourth Level and standard at FEI levels',
      'Spurs — required at FEI levels; optional below Second Level',
      'Dressage whip up to 120 cm including lash (USEF DR121)',
      'Stock pin or choker pin',
      'Hair net (required to keep hair contained for competition)',
    ],
    commonAccessories: [
      { item: 'White square saddle pad', purpose: 'Standard competition presentation; required to be white at USDF/USEF recognized shows' },
      { item: 'Dressage girth (short or long)', purpose: 'Short girth used with dressage saddle&apos;s long billets to keep buckles off the rider&apos;s leg' },
      { item: 'Polo wraps or schooling boots', purpose: 'Schooling-only protection; boots and wraps are PROHIBITED in the competition arena under USEF DR121' },
      { item: 'Bell boots', purpose: 'Schooling protection against overreach; prohibited in competition' },
      { item: 'Lunge cavesson and side reins', purpose: 'Groundwork tool for warm-up and gymnastic training' },
      { item: 'Half-pad or sheepskin pad', purpose: 'Saddle-fit shim while you save for a proper-fit saddle; not a substitute for fit' },
    ],
    priceRangeBeginnerKit: '$1,500 – $3,000 (used name-brand saddle, snaffle bridle, helmet, basic schooling attire)',
    priceRangeIntermediate: '$3,500 – $7,000 (new mid-range saddle, custom bridle, competition coat and boots)',
    priceRangeAdvanced: '$7,500 – $15,000+ (custom-fit saddle, double bridle, shadbelly, FEI-spec custom boots)',
    brandsToConsider: [
      { name: 'Custom Saddlery', knownFor: 'Florida-based custom dressage saddles widely seen in US small-tour barns' },
      { name: 'Schleese', knownFor: 'Saddle-fit-driven dressage saddles with on-site adjustability' },
      { name: 'Albion', knownFor: 'English-made dressage saddles common in the UK and US' },
      { name: 'County Saddlery', knownFor: 'US distributor with strong on-farm fitter network' },
      { name: 'Passier', knownFor: 'Long-established German dressage saddle maker; classical-cut models' },
      { name: 'Stübben', knownFor: 'German maker; dressage and schooling saddles at mid price points' },
      { name: 'PS of Sweden', knownFor: 'Anatomic snaffle bridles widely adopted in dressage' },
      { name: 'Pikeur and Cavalleria Toscana', knownFor: 'Competition coats, breeches, and shadbellies' },
      { name: 'Charles Owen and Samshield', knownFor: 'ASTM/PAS-certified competition helmets' },
      { name: 'Konig and Petrie', knownFor: 'Custom and semi-custom tall dressage boots' },
    ],
    buyingTips: [
      'Have a qualified saddle fitter assess your horse BEFORE you buy. A new saddle that does not fit is more expensive than a used saddle that does.',
      'Buy the helmet new from a current model year. ASTM/SEI certification labels expire and a used helmet may have been dropped without visible damage.',
      'For a first competition wardrobe, a well-cut navy show coat and white shirt is timeless and avoids the costly shadbelly until you are showing at Fourth Level or FEI.',
      'Confirm bit legality against the current year USEF DR121 and FEI Annex A before you compete — the bit lists are updated.',
      'A snaffle bridle plus the right schooling attire will take you through Third Level honestly — defer the double bridle until your trainer says the horse is ready.',
    ],
    avoidWhenStartingOut: [
      'Double bridles before Fourth Level. They are a refinement tool, not a training shortcut.',
      'Gimmick training aids — draw reins, side reins used as a riding aid, chambons, gogues — without trainer supervision. Misused, they create resistance and tension.',
      'Bling browbands and crystal-encrusted competition gear at lower levels. The USDF/USEF judging tradition is conservative; clean tack reads as more professional than ornate tack.',
      'Buying a high-end custom saddle before you know your discipline plans. A mid-range used name-brand saddle preserves resale value.',
    ],
    whereToBuy: [
      'Saddle fitters with on-farm fitting service (most US regions have at least one)',
      'Saddle.com and dedicated tack retailers (Dover Saddlery, SmartPak, FarmVet) for bridles, bits, and attire',
      'Used tack consignment (Pelham Saddlery, The Tack Trunk, Facebook groups) for name-brand saddles in good condition',
      'Local breed/discipline shows often have on-site vendors with try-before-you-buy access',
    ],
    rulebookReference:
      'USEF Rule Book, Chapter DR (Dressage Division) — DR120 saddlery, DR121 bits and bridles, DR122 rider attire. FEI Dressage Rules, Annex A (permitted bits and saddlery). USDF Member Guide. All references public at usef.org, fei.org, and usdf.org.',
  },

  // ─────────────────────────────────────────────────────── Show Jumping ──
  {
    slug: 'show-jumping',
    disciplineName: 'Show Jumping',
    overview:
      'Show jumping equipment prioritizes secure jumping position, leg protection, and unobtrusive bridle fit at speed. Tack rules under USEF Chapter JP (Jumper Division) and FEI Jumping Rules are less restrictive than dressage — most snaffles and curbs are permitted, the rider may use a wide range of training aids in schooling, and leg protection is encouraged in competition. The starter kit is a close-contact jumping saddle, a snaffle bridle with a flash or figure-eight noseband, and open-front front boots with fetlock hind boots.',
    saddleType: 'English close-contact (forward-seat) jumping saddle',
    saddleNotes:
      'A jumper saddle has a forward-cut flap, flatter seat, and prominent knee blocks designed to support the rider in a short stirrup over fences. The position is more aggressive than the show-hunter position. Tree width and panel fit must match your horse just as for a dressage saddle. Many riders own a single all-purpose or close-contact saddle for both hunters and jumpers when starting out.',
    bridleType:
      'English snaffle bridle is standard — typically with a flash or figure-eight (grackle) noseband. Pelham, gag, and elevator bits are permitted in competition under USEF JP and FEI Jumping rules; double bridles are uncommon.',
    bitGuidance:
      'USEF Jumper and FEI Jumping rules permit a wide range of bits — single- and double-jointed snaffles, three-ring elevators, gags, Pelhams (with single or double reins), and combination bits. The judgment call is which bit gives you the most control with the least leverage for THIS horse, not which is the most severe option available. Start at a basic snaffle and escalate only with trainer guidance.',
    requiredApparel: [
      'ASTM/SEI- or PAS 015-certified equestrian helmet (required at all USEF Jumper competitions)',
      'Show coat (typically navy, black, or hunter green; brighter colors permitted)',
      'Beige, white, or tan breeches',
      'Tall black field boots',
      'Collared shirt with choker or stock tie',
      'Gloves',
    ],
    optionalApparel: [
      'Body protector / safety vest (required for cross-country in eventing; optional in pure show jumping but increasingly seen at upper levels)',
      'Spurs (limited length per USEF JP; rowels permitted)',
      'Crop or bat — maximum 30 inches (75 cm) including lash per USEF JP136',
      'Sponsor patches on jacket (FEI 1* and up)',
    ],
    commonAccessories: [
      { item: 'Open-front front boots', purpose: 'Protect tendons from interference without padding the cannon bone so the horse feels rails' },
      { item: 'Fetlock hind boots (ankle boots)', purpose: 'Protect the hind fetlock from overreach and interference' },
      { item: 'Square or shaped jump pad', purpose: 'Standard saddle pad for schooling and competition; many barns color-coordinate' },
      { item: 'Breastplate', purpose: 'Keeps the saddle from sliding back over fences; essential on round-barreled horses' },
      { item: 'Running martingale', purpose: 'Limits head height in front of fences; permitted in competition; standing martingales are NOT permitted in jumpers (allowed in hunters)' },
      { item: 'Stirrup leathers and safety stirrups', purpose: 'Breakaway or composite safety stirrups reduce dragging risk in a fall' },
      { item: 'Bell boots (overreach boots)', purpose: 'Protect the heel bulbs and shoes from being grabbed' },
    ],
    priceRangeBeginnerKit: '$1,800 – $3,500 (used close-contact saddle, snaffle bridle, helmet, basic boots and attire)',
    priceRangeIntermediate: '$4,000 – $8,000 (new mid-range jumping saddle, custom bridle, competition coat and boots, leg-protection set)',
    priceRangeAdvanced: '$8,000 – $20,000+ (custom-fit saddle, sponsor-patched coats, FEI-spec custom boots, specialty bridles)',
    brandsToConsider: [
      { name: 'CWD', knownFor: 'French jumping saddles widely used at US Grand Prix level' },
      { name: 'Antares', knownFor: 'French jumping saddles with strong fitter network in the US' },
      { name: 'Voltaire', knownFor: 'French close-contact saddles common at top hunter/jumper barns' },
      { name: 'Devoucoux', knownFor: 'French saddles favored by FEI-level riders' },
      { name: 'Butet', knownFor: 'Long-established French close-contact maker' },
      { name: 'Pessoa', knownFor: 'Brazilian-French saddles at accessible price points' },
      { name: 'Eskadron, Veredus, and Equifit', knownFor: 'Open-front and fetlock boots with proven track record' },
      { name: 'Pikeur, Cavalleria Toscana, RG Italy', knownFor: 'Competition coats and breeches' },
      { name: 'Charles Owen, Samshield, KEP Italia, One K', knownFor: 'ASTM/PAS-certified jumping helmets' },
      { name: 'Konig, Parlanti, DeNiro', knownFor: 'Tall jumping boots — custom and semi-custom' },
    ],
    buyingTips: [
      'Saddle fit is non-negotiable. A jumping saddle that pinches the wither or sits long over the loin will undo any other gear you buy.',
      'Get fitted for tall boots before buying off-the-shelf. The calf height, drop, and ankle bend are the difference between a comfortable boot and a painful one.',
      'Open-front boots come in fixed and adjustable styles. Adjustable closures last longer across horses with different cannon sizes.',
      'Buy a sturdy bridle in cobsize or full to match your horse — replacement keepers and reins are cheap when you start with quality leather.',
      'Pelham, gag, and elevator bits should be added under trainer guidance, not as a default escalation when training plateaus.',
    ],
    avoidWhenStartingOut: [
      'Severe bits as a training shortcut. The judgment call is which bit gives you the most control with the least leverage for this horse.',
      'Draw reins and tie-downs in schooling without trainer supervision. They mask training gaps and create new ones.',
      'Sponsor-patched coats and FEI-spec custom boots before you are competing at the level that requires them.',
      'Cheap stirrup leathers and girths. Tack failures over fences cause falls.',
    ],
    whereToBuy: [
      'Saddle fitters representing CWD, Antares, Voltaire, Devoucoux, Butet — most US regions have on-farm fitters',
      'Saddle.com and dedicated tack retailers (Dover Saddlery, SmartPak, FarmVet) for bridles, bits, boots, and attire',
      'Used tack consignment for name-brand saddles, especially CWD and Antares which hold value well',
      'On-site vendors at A-rated and AA-rated hunter/jumper shows',
    ],
    rulebookReference:
      'USEF Rule Book, Chapter JP (Jumper Division) — JP130 tack, JP131 bits, JP136 whips and spurs, JP137 rider attire. FEI Jumping Rules, Article 257 (saddlery and bits). USHJA (US Hunter Jumper Association) provides ratings-specific guidance at ushja.org.',
  },

  // ──────────────────────────────────────────────────────────── Eventing ──
  {
    slug: 'eventing',
    disciplineName: 'Eventing',
    overview:
      'Eventing equipment must cover three phases — dressage, cross-country, and show jumping — across one to three days. Each phase has its own tack and attire rules under USEF Chapter EV and FEI Eventing Rules. The cross-country phase adds mandatory safety equipment: a body protector certified to a current standard, and a hat camera or medical armband at most events. The all-purpose or close-contact saddle used in stadium and cross-country can be the same saddle; the dressage phase requires a dressage saddle.',
    saddleType: 'Two saddles — English dressage saddle for the dressage phase, English close-contact or eventing-specific cross-country saddle for jumping phases',
    saddleNotes:
      'Many eventers own a single jumping saddle that doubles for stadium and cross-country. A cross-country-specific saddle has a slightly more secure seat and forward block; some riders prefer a separate XC saddle at Preliminary and above. The dressage saddle is the same plain-flap pattern used in straight dressage. Saddle fit must work for both jumping and dressage positions.',
    bridleType:
      'Snaffle bridle for dressage phase (per USEF EV and FEI Eventing Annex). For the jumping phases, the rider may use any bit and noseband permitted in show jumping. Many cross-country bridles add a flash, figure-eight, or grackle noseband and may include a martingale.',
    bitGuidance:
      'USEF EV permits the dressage bit list (snaffle and double for upper levels) in the dressage phase. For cross-country and stadium, the rider may use snaffles, three-ring elevators, gags, Pelhams, and combination bits — the goal is control at gallop without overbitting. Change bits between phases as needed; bit changes are routine.',
    requiredApparel: [
      'ASTM/SEI- or PAS 015-certified equestrian helmet — REQUIRED in all phases',
      'Body protector certified to BETA Level 3 or equivalent — REQUIRED for cross-country at all levels (USEF EV114)',
      'Air vest worn over body protector — strongly encouraged but does NOT replace the body protector requirement',
      'Medical armband or wristband listing current medical info',
      'Dressage phase attire — dark coat, white shirt, stock tie, gloves, tall boots',
      'Cross-country attire — long-sleeve shirt in club or stable colors, breeches, gloves, tall boots',
      'Stadium attire — show coat, breeches, gloves, tall boots',
    ],
    optionalApparel: [
      'Shadbelly for FEI dressage phase at CCI3* and above',
      'Cross-country safety vest with built-in trauma protection (Tipperary, Charles Owen, Komperdell)',
      'Spurs (permitted in dressage and stadium per current USEF EV)',
      'Hat-mounted helmet camera (optional but increasingly common)',
    ],
    commonAccessories: [
      { item: 'Cross-country boots (Woof, Eskadron, Veredus)', purpose: 'Front and hind boots designed for galloping protection across solid obstacles' },
      { item: 'Galloping boots and bell boots', purpose: 'Lower-leg and heel protection at speed' },
      { item: 'Breastplate with attached running martingale', purpose: 'Combines saddle stability with martingale control for galloping over jumps' },
      { item: 'Grease (for cross-country legs and chest)', purpose: 'Reduces injury from a hung leg on solid fences; old-school but still used at upper levels' },
      { item: 'Two saddle pads (dressage square + jumping square)', purpose: 'Different shapes match the two saddle profiles' },
      { item: 'Studs and stud kit', purpose: 'Screw-in stud holes in shoes provide grip on cross-country and stadium grass' },
      { item: 'Air vest (Hit-Air, Point Two)', purpose: 'Tethered CO2 vest worn over body protector; deploys when rider separates from horse' },
    ],
    priceRangeBeginnerKit: '$2,500 – $4,500 (used dressage and jumping saddles, snaffle bridle, certified body protector, helmet, schooling attire)',
    priceRangeIntermediate: '$5,000 – $10,000 (new mid-range saddles, dedicated XC bridle, cross-country boot set, air vest, dressage and XC attire)',
    priceRangeAdvanced: '$12,000 – $25,000+ (custom-fit saddles, FEI-spec body protector and air vest, full competition wardrobe across phases)',
    brandsToConsider: [
      { name: 'Tipperary, Charles Owen, Komperdell', knownFor: 'BETA Level 3 certified body protectors' },
      { name: 'Hit-Air, Point Two, Helite', knownFor: 'Tethered air vests worn over body protector' },
      { name: 'County Eventer, Ainsley, Black Country', knownFor: 'Eventing-specific cross-country saddles' },
      { name: 'CWD, Antares, Devoucoux', knownFor: 'Close-contact saddles widely used for stadium and XC' },
      { name: 'Custom Saddlery, Albion, County', knownFor: 'Dressage-phase saddles' },
      { name: 'Woof Wear, Eskadron, Veredus', knownFor: 'Cross-country leg protection' },
      { name: 'Charles Owen, Samshield, One K', knownFor: 'Helmets certified to current ASTM and PAS standards' },
      { name: 'Mountain Horse, Konig, Parlanti', knownFor: 'Tall boots durable enough for three phases' },
    ],
    buyingTips: [
      'Buy a certified body protector new. Used vests may have absorbed an impact, and the foam fatigues over time — a fall-rated body protector is not a piece of tack to economize on.',
      'Helmet replacement after any fall is non-negotiable, regardless of visible damage.',
      'An air vest is a supplement to the body protector, never a replacement. Most events require the body protector and treat the air vest as additional.',
      'Practice changing bits and bridles between phases at home — competition day is not the time to discover something does not fit.',
      'Stud kits and stud-tap timing matter. Buy a quality magnetic stud box and learn to change studs efficiently before your first XC competition.',
    ],
    avoidWhenStartingOut: [
      'Skipping the body protector. It is mandatory and non-negotiable.',
      'A single saddle for all phases on a young horse with developing topline. The dressage and jumping positions are too different to compromise.',
      'Severe cross-country bits as a confidence shortcut. Galloping control comes from training, not from harsher bits.',
      'Used helmets and body protectors from consignment or borrowing — replacement cycle matters.',
    ],
    whereToBuy: [
      'Saddle fitters covering both dressage and jumping ranges',
      'Eventing-specific tack retailers (Bit of Britain, Saddlery Liquidators, Dover Saddlery, SmartPak)',
      'On-site vendors at USEA recognized events',
      'Saddle.com and FarmVet for medical-armband, stud kits, and routine consumables',
    ],
    rulebookReference:
      'USEF Rule Book, Chapter EV (Eventing) — EV114 safety equipment, EV115 dress, EV116 saddlery. FEI Eventing Rules, Annex A (permitted saddlery per phase). USEA (United States Eventing Association) Member Resources at useventing.com.',
  },

  // ─────────────────────────────────────────────────── Western Pleasure ──
  {
    slug: 'western-pleasure',
    disciplineName: 'Western Pleasure',
    overview:
      'Western pleasure equipment is judged in part on its own merit — the saddle and bridle are part of the presentation. Tack rules under USEF Chapter WS (Western Division), AQHA, APHA, and ApHC are specific about silver-mounted vs working tack, curb-bit shank length, and rider attire at recognized shows. A starter kit is a balanced quality western saddle with conservative tooling, a leather show bridle with a permitted curb bit, and a felt or wool show blanket.',
    saddleType: 'Western show saddle — silver-mounted or hand-tooled, balanced equitation seat',
    saddleNotes:
      'A western pleasure show saddle has a flatter seat than a roping or barrel saddle, a moderate-height cantle, and either silver corner plates and conchos or fine hand tooling. Saddle fit on a stock-horse breed is measured by gullet width, tree shape, and skirt length. Quality used saddles from established US makers hold value well; a cheap show saddle with stamped silver looks the part for one season and then breaks down.',
    bridleType:
      'Leather western show bridle with a single curb bit; split reins, romal reins, or roping reins (per breed-association rule). Browband headstall, one-ear, or two-ear styles are permitted; nosebands are NOT used in western pleasure.',
    bitGuidance:
      'For horses 5 and over, a curb bit with solid or broken (jointed) mouthpiece and shanks no longer than 8.5 inches is standard (AQHA Rule 444). Horses 5 and under may show in a snaffle bit or bosal (hackamore). Specific bit lists and shank-length limits are published annually by AQHA, APHA, ApHC, and USEF — confirm against the current rulebook before competition.',
    requiredApparel: [
      'Western hat (felt for winter, straw for summer) — clean, creased, properly shaped',
      'Long-sleeve western show shirt with collar (button or snap)',
      'Western show jacket or vest (optional in some classes; required by judging tradition)',
      'Western show pants — Wrangler or equivalent, hemmed to the boot',
      'Western boots — clean leather, riding heel',
      'ASTM/SEI-certified helmet — REQUIRED for youth riders under 18 at AQHA events (AQHA Rule SHW302) and permitted for any rider',
    ],
    optionalApparel: [
      'Show chaps (full-length, smooth-out or hair-on)',
      'Silver belt buckle and buckle set',
      'Spurs (rowel limited per breed-association rule)',
      'Gloves (typically not worn in western pleasure)',
      'Bling-trimmed show shirt (current judging fashion at AQHA and APHA)',
    ],
    commonAccessories: [
      { item: 'Wool or felt show blanket (Navajo pattern or solid)', purpose: 'Required under the saddle; quality wool prevents friction and slippage' },
      { item: 'Saddle pad / shim (under blanket if needed)', purpose: 'Fit adjustment between blanket and saddle bars' },
      { item: 'Front saddle cinch (mohair, neoprene, or roper-style)', purpose: 'Mohair is the traditional choice; replaces cleanly when worn' },
      { item: 'Rear flank cinch (with connector strap)', purpose: 'Required on a western show saddle; not pulled tight, just snug enough to lie flat' },
      { item: 'Breast collar', purpose: 'Optional in western pleasure; common in working classes' },
      { item: 'Bit hobble (curb-bit chin strap)', purpose: 'Connects shanks under the chin; leather or chain per breed-association rule' },
      { item: 'Show grooming kit', purpose: 'Hoof polish, banding kit for mane, finish spray, fly spray' },
    ],
    priceRangeBeginnerKit: '$1,500 – $3,500 (used quality show saddle, leather bridle, blanket, basic show attire)',
    priceRangeIntermediate: '$4,000 – $8,000 (new mid-range silver-mounted saddle, custom-fit show shirts and jackets, hat shaping)',
    priceRangeAdvanced: '$10,000 – $25,000+ (custom-built silver-overlay saddle, full custom show wardrobe, multiple hats)',
    brandsToConsider: [
      { name: 'Bob&apos;s Custom Saddles', knownFor: 'Custom western show saddles used at AQHA World Show level' },
      { name: 'Dale Chavez', knownFor: 'Long-established custom western show saddles' },
      { name: 'Harris Leather and Silverworks', knownFor: 'Silver-mounted show saddles and tack' },
      { name: 'Circle Y, Tex Tan, Billy Cook', knownFor: 'Production show saddles at accessible price points' },
      { name: 'Reinsman, Professional&apos;s Choice', knownFor: 'Show blankets, pads, and cinches' },
      { name: 'Resistol, Stetson, American Hat', knownFor: 'Felt and straw western show hats' },
      { name: 'Hobby Horse, Show Me Again, Royal Highness', knownFor: 'Show shirts, jackets, and chaps' },
      { name: 'Justin, Lucchese, Tony Lama', knownFor: 'Western show boots' },
    ],
    buyingTips: [
      'Buy a used quality saddle over a new cheap saddle. The bars, tree, and stitching on a $4,500 used Bob&apos;s will outlast three $1,200 production saddles.',
      'Hat shaping matters as much as the hat itself. A good local western-wear shop will shape and reshape your hat across the season.',
      'Buy show shirts that fit your shoulders precisely. Off-the-rack works for many adults; juniors and tall riders often need tailoring.',
      'Confirm curb-bit shank length and mouthpiece against current AQHA/APHA/ApHC rules before each show season.',
      'Black or dark navy show clothes photograph cleanly and are forgiving; bright colors are a stylistic risk early in your show career.',
    ],
    avoidWhenStartingOut: [
      'Cheap saddles with stamped fake silver. They lose their finish in one season and resale value is nil.',
      'Severe curb bits as a training shortcut. Most western pleasure horses are shown in a moderate curb; harshness is not the answer to training gaps.',
      'Trend-driven bling outfits that date quickly. Conservative tailoring lasts seasons; this year&apos;s rhinestone pattern does not.',
      'Skipping the helmet just because adults are not required to wear one — concussion risk does not respect breed-association rule.',
    ],
    whereToBuy: [
      'Saddle.com and dedicated western tack retailers (NRS World, South Texas Tack, Schneiders Saddlery)',
      'Custom saddle makers with on-farm or trade-show fitting (Bob&apos;s, Dale Chavez, Harris)',
      'Western-show specialty boutiques (Hobby Horse Clothing, Show Me Again)',
      'On-site vendors at AQHA, APHA, and ApHC breed shows and the AQHA World Show',
    ],
    rulebookReference:
      'USEF Rule Book, Chapter WS (Western Division) — WS101 tack, WS104 attire. AQHA Official Handbook of Rules and Regulations, Rules 441-453 (Western Pleasure) at aqha.com. APHA Rule Book at apha.com. ApHC at appaloosa.com.',
  },

  // ──────────────────────────────────────────────────────────── Reining ──
  {
    slug: 'reining',
    disciplineName: 'Reining',
    overview:
      'Reining equipment is functional first — the saddle, bridle, and bit must support sliding stops, spins, and flying lead changes without restricting the horse. Tack rules are set by the National Reining Horse Association (NRHA) and mirrored by USEF Chapter RN. Specialty reining shoes (sliding plates) on the hinds are a fundamental requirement; without them the sliding stop is not safely possible. Starter kits center on a reining-specific saddle, working leather bridle, and the appropriate curb or snaffle bit for the horse&apos;s age.',
    saddleType: 'Western reining saddle — close-contact skirt, undercut pommel, deep slick seat',
    saddleNotes:
      'A reining saddle is built for the slide — the rider sits deep with the lower leg long, the pommel is undercut to free the rider&apos;s thigh during stops and spins, and the skirts are shorter than a roping saddle to avoid catching the horse&apos;s loin in collected work. Suede or roughout seats are common; smooth-leather seats appear in show saddles. Saddle fit on stock-horse builds matters as much as in any discipline.',
    bridleType:
      'Working leather bridle (browband, one-ear, or two-ear). Split reins are standard with the curb bit; romal reins are an alternative under specific NRHA rules. Nosebands are NOT used in reining.',
    bitGuidance:
      'Per NRHA Handbook Section 9, horses 5 and older are shown in a curb bit (one-handed); horses 5 and under may be shown two-handed in a snaffle bit or bosal hackamore. Bit shank, mouthpiece, and cricket specifications are listed in NRHA Section 9 — confirm against the current handbook annually. The bit list is more permissive than dressage and stricter than show jumping.',
    requiredApparel: [
      'Western hat (felt or straw) — clean and well-shaped',
      'Long-sleeve western show shirt with collar',
      'Western show pants — Wrangler or equivalent',
      'Western boots with riding heel',
      'ASTM/SEI-certified helmet — REQUIRED for youth riders per NRHA and AQHA youth rules; permitted for any rider',
    ],
    optionalApparel: [
      'Show chaps (smooth-out or hair-on)',
      'Show jacket or vest (less formal than western pleasure; many riders show in just a show shirt)',
      'Spurs (NRHA permits rowels within specified diameter)',
      'Belt and buckle (NRHA championship buckles are highly prized)',
    ],
    commonAccessories: [
      { item: 'Wool or felt working blanket', purpose: 'Replaces frequently with hard riding; wool wicks sweat and shapes to the horse' },
      { item: 'Front cinch (mohair or neoprene)', purpose: 'Mohair is durable and traditional; neoprene cleans easily for daily working use' },
      { item: 'Rear flank cinch', purpose: 'Standard on reining saddles to prevent the saddle from tipping forward in a hard stop' },
      { item: 'Breast collar', purpose: 'Keeps the saddle from sliding back during spins and stops' },
      { item: 'Skid boots (hind)', purpose: 'Protect the hind fetlocks during sliding stops' },
      { item: 'Splint boots (front)', purpose: 'Protect the front cannons from interference during spins' },
      { item: 'Bell boots (overreach)', purpose: 'Protect heel bulbs and sliding plates during stops' },
      { item: 'Sliding plates (farrier specialty shoes, hind only)', purpose: 'Extended-trailer keg shoes that enable the slide; require a farrier experienced with reiners' },
    ],
    priceRangeBeginnerKit: '$1,800 – $3,500 (used reining saddle, working bridle, leg protection set, schooling attire; sliding plates extra at $200-400 per shoeing cycle)',
    priceRangeIntermediate: '$4,000 – $8,500 (new mid-range reining saddle, custom-fit show wardrobe, premium leg protection)',
    priceRangeAdvanced: '$10,000 – $20,000+ (custom-built reining saddle, full show wardrobe, championship-quality leg protection)',
    brandsToConsider: [
      { name: 'Bob&apos;s Custom Saddles', knownFor: 'Reining saddles widely used at NRHA Futurity level' },
      { name: 'Crates, Billy Cook, Circle Y', knownFor: 'Production reining saddles at accessible price points' },
      { name: 'Reinsman, Cactus, Professional&apos;s Choice', knownFor: 'Skid boots, splint boots, and bell boots' },
      { name: 'Classic Equine, Iconoclast', knownFor: 'Premium leg protection and support boots' },
      { name: 'Weaver Leather', knownFor: 'Working bridles, headstalls, and tie-downs' },
      { name: 'Resistol, Stetson, American Hat', knownFor: 'Felt and straw show hats' },
      { name: 'Justin, Ariat', knownFor: 'Working and show western boots' },
      { name: 'Diamond Wool, Mayatex', knownFor: 'Saddle blankets — wool and synthetic blends' },
    ],
    buyingTips: [
      'Find a farrier with reining-shoer experience BEFORE you commit to the discipline. Sliding plates are a specialty skill and the wrong shoe ruins the stop.',
      'Buy used quality saddles. Reining saddles from established makers hold value, and the seat conformation is consistent across years.',
      'Practice spins and stops on the right footing. A well-watered, well-graded sand-and-cushion arena is essential — concrete-hard footing destroys hocks.',
      'Show clothes are simpler in reining than in western pleasure. A clean shirt, hat, and boots is the baseline; saving the jacket budget for a quality hat is reasonable.',
      'Confirm current NRHA bit and equipment rules each season — the handbook is updated and bit lists change.',
    ],
    avoidWhenStartingOut: [
      'Aggressive bits as a maneuver shortcut. A good stop comes from training, not from a longer shank.',
      'Sliding plates on a horse that has not been gradually conditioned to the slide. Soft-tissue and joint injuries are the predictable result of skipping the foundation.',
      'Buying a saddle online without trying it on your horse. Reining saddle bar shape varies and a poor fit interferes with spins.',
      'Cheap leg protection. Reining horses absorb hard concussion in stops; boot durability matters.',
    ],
    whereToBuy: [
      'NRHA Affiliate trainers often sell or trade quality used saddles to their students',
      'Saddle.com and dedicated reining tack retailers (NRS World, South Texas Tack, NRHA Marketplace)',
      'Custom saddle makers at the NRHA Futurity, Derby, and Affiliate Finals trade shows',
      'Farriers and farrier-supply houses for sliding plates and clinching tools',
    ],
    rulebookReference:
      'NRHA (National Reining Horse Association) Handbook, Section 9 (Equipment) at nrha.com. USEF Rule Book, Chapter RN (Reining Division). AQHA Rules 451-453 (Reining). FEI Reining Rules at fei.org.',
  },

  // ─────────────────────────────────────────────────────── Trail Riding ──
  {
    slug: 'trail-riding',
    disciplineName: 'Trail Riding',
    overview:
      'Trail riding equipment covers a wide spectrum — from recreational weekend riders on hour-long outings, to NATRC Competitive Trail riders on 25-50 mile rides judged on horsemanship and horse condition, to AERC endurance riders covering 50-100 miles in a single day. The shared requirements are a comfortable long-mileage saddle that fits both horse and rider, a secure bridle, a way to carry water and basic first aid, and protection from sun, weather, and biting insects. Endurance-specific kits include a heart-rate monitor, GPS, and crew-pit logistics.',
    saddleType: 'English or western trail/endurance saddle — lightweight, secure seat, multiple D-rings for accessories',
    saddleNotes:
      'Trail and endurance saddles prioritize all-day rider comfort and saddle stability over a single discipline silhouette. Western trail saddles are typically lighter than working saddles and have a deeper seat; endurance saddles (a specialty subcategory) are even lighter, often treeless or flex-tree, with multiple D-rings for water bottles, pommel bags, and crupper attachment. Synthetic saddles (Wintec, Abetta, Sensation) are popular for weight and rain durability. Saddle fit is critical — saddle sores end an endurance ride.',
    bridleType:
      'English or western bridle, often with a halter underneath the bridle so the horse can be tied and grazed at vet checks. Endurance riders often use a halter-bridle combination (Zilco, Taylored Tack) with snap-off bit hangers. Hackamores and bitless bridles are permitted in NATRC and AERC competition.',
    bitGuidance:
      'Recreational and competitive trail bit selection is rider preference within humane limits. Endurance and NATRC permit bits, snaffles, curbs, bosals, and bitless bridles. The criteria are: control at speed, drinking ability (some bits interfere with horses drinking at water stops), and rider hand sensitivity. Many endurance horses go bitless after they are conditioned.',
    requiredApparel: [
      'ASTM/SEI- or PAS 015-certified equestrian helmet — required at NATRC and AERC competition and strongly recommended for any trail riding',
      'Long-sleeve sun shirt (UPF-rated)',
      'Riding tights or breeches with seat-grip',
      'Trail or paddock boots with safety stirrup or breakaway',
      'Hydration pack or water bottle holster',
    ],
    optionalApparel: [
      'Insulated vest or shell jacket (layering for changing weather)',
      'Cap or wide-brim sun hat under the helmet (helmet-compatible)',
      'Half chaps (English) or full chaps (western) for leg protection',
      'Gloves',
      'Sunglasses on a retainer',
    ],
    commonAccessories: [
      { item: 'Pommel bag and cantle bag', purpose: 'Carries snacks, first aid, electrolyte tubes, lip balm, sunscreen' },
      { item: 'Saddle bag for tools and tack repair', purpose: 'Hoof pick, knife, baling twine, extra rein snap, electrical tape, vet wrap' },
      { item: 'Breastplate or breast collar', purpose: 'Keeps the saddle from sliding back on hills' },
      { item: 'Crupper', purpose: 'Keeps the saddle from sliding forward on steep descents; standard for endurance and mountain trail' },
      { item: 'Halter-bridle combination', purpose: 'Allows the rider to remove the bit at vet checks without removing the headstall' },
      { item: 'Heart-rate monitor (Polar, Hylofit, Equinosis)', purpose: 'Tracks recovery rate at AERC vet checks — pulse must come down to 60-64 bpm within set time' },
      { item: 'GPS / mileage tracker (Garmin watch or phone-mounted)', purpose: 'Tracks pace, mileage, and elevation; AERC vet logs benefit from accurate ride data' },
      { item: 'Electrolyte syringes', purpose: 'AERC and NATRC riders dose electrolytes at vet checks; brands include Perfect Balance, Endura-Max, Pro CMC' },
      { item: 'Trail bell (saddle or breastcollar mounted)', purpose: 'Alerts hikers, bikers, and wildlife on multi-use trails' },
    ],
    priceRangeBeginnerKit: '$1,200 – $2,800 (used trail or all-purpose saddle, halter-bridle, hydration pack, helmet, basic riding apparel)',
    priceRangeIntermediate: '$3,500 – $7,000 (endurance-specific saddle, custom pommel/cantle bags, heart-rate monitor, GPS watch, UPF wardrobe)',
    priceRangeAdvanced: '$8,000 – $15,000+ (custom-fit endurance saddle, full crew-pit setup, hauling and camping infrastructure for multi-day rides)',
    brandsToConsider: [
      { name: 'Wintec, Abetta', knownFor: 'Synthetic English and western trail saddles — light, weatherproof, washable' },
      { name: 'Sensation, Specialized, Reactor Panel', knownFor: 'Endurance-specific saddles with flexible-tree and pressure-distributing designs' },
      { name: 'Sharon Saare, Black Country', knownFor: 'Custom endurance saddles widely seen at AERC events' },
      { name: 'Tucker, Big Horn, Circle Y Flex2', knownFor: 'Western trail saddles with flex tree and lighter weight' },
      { name: 'Zilco, Taylored Tack', knownFor: 'Endurance-specific halter-bridle combinations and Beta biothane tack' },
      { name: 'Cashel, Stowaway', knownFor: 'Saddle bags, pommel and cantle packs in cordura' },
      { name: 'Polar, Hylofit, Equinosis', knownFor: 'Equine heart-rate monitors for endurance training and vet checks' },
      { name: 'Garmin', knownFor: 'GPS watches popular with endurance riders for pace and mileage tracking' },
      { name: 'Kerrits, Noble Outfitters, Irideon', knownFor: 'Riding tights and UPF sun shirts' },
      { name: 'Charles Owen, Tipperary, Troxel', knownFor: 'Lightweight ventilated trail and endurance helmets' },
    ],
    buyingTips: [
      'For long-mileage riding, saddle fit affects soundness more than any other gear choice. A used $1,500 saddle that fits is better than a new $3,000 saddle that does not.',
      'Synthetic saddles are not a downgrade for trail use — they are lighter, weatherproof, and often easier to fit across multiple horses in a riding family.',
      'For endurance, condition both horse and rider gradually. A new saddle and a 50-mile ride in the same week is a recipe for soreness on both ends.',
      'Carry redundant water and electrolytes. Heat exhaustion can shorten a ride or cause a horse to be pulled at a vet check.',
      'Practice at home with the full kit before competition. Heart-rate monitors, GPS, and electrolyte syringes all have learning curves.',
    ],
    avoidWhenStartingOut: [
      'A heavy roping or show saddle for long-mileage trail use. The weight and friction will cause sores and rider fatigue.',
      'A treeless saddle on a high-withered horse without proper padding research. Treeless works for many horse types but not all.',
      'Riding alone in remote areas without a SPOT, Garmin inReach, or cell coverage plan. Trail emergencies are when communication matters most.',
      'Skipping the helmet because trail riding feels casual. Falls happen at the walk on uneven terrain.',
    ],
    whereToBuy: [
      'Saddle.com and dedicated trail/endurance retailers (Distance Depot, Running Bear, EnduranceNet vendor list)',
      'AERC and NATRC convention trade shows for endurance saddles and bridles',
      'Used tack from Facebook endurance-rider groups and Distance Depot consignment',
      'Local tack shops for routine consumables (electrolytes, vet wrap, hoof picks)',
    ],
    rulebookReference:
      'AERC (American Endurance Ride Conference) Rules and Regulations at aerc.org. NATRC (North American Trail Ride Conference) Rule Book at natrc.org. USEF does not run a recognized trail-riding competition track; recreational trail riding is regulated by land-management authority (Forest Service, BLM, State Parks) for trail-use permits and rules.',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const DISCIPLINE_EQUIPMENT_SLUGS = DisciplineEquipmentData.map((d) => d.slug)

export function getDisciplineEquipmentBySlug(
  slug: string,
): DisciplineEquipment | undefined {
  return DisciplineEquipmentData.find((d) => d.slug === slug)
}
