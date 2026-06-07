// Racehorse Care cluster (non-wagering welfare vertical).
// Pure educational content on the daily care and welfare of racehorses — feeding,
// grooming, hoof care, recovery, turnout, and travel. Squarely trust-safe: zero
// wagering surface, general/educational framing only.
//
// Trust posture (QC §1): general welfare and husbandry education in the
// "Editorial team" voice. No betting/odds/handicapping. No first-person hands-on
// claims. No individualized veterinary or medical advice — nutrition, hoof, and
// health content stays general and defers specific decisions to a veterinarian,
// farrier, or qualified equine professional. No fabricated credentials.

export interface RacehorseCareTopic {
  slug: string;
  title: string;
  /** One-line summary (meta + list cards). */
  short: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  /** Quick-reference facts. */
  keyFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const racehorseCareTopics: RacehorseCareTopic[] = [
  {
    slug: 'daily-care-of-a-racehorse',
    title: 'The Daily Care of a Racehorse',
    short:
      'How a racing yard structures its day around feeding, mucking out, grooming, exercise, and turnout to keep horses healthy.',
    intro:
      'A racehorse in training lives to a remarkably consistent daily routine. Predictable feeding times, regular exercise, and careful stable management are the foundation of equine welfare in a busy yard. The day is built around the horse’s digestive and behavioural needs as much as its athletic schedule, and most of the work happens long before and after any time on the gallops.',
    sections: [
      {
        heading: 'The shape of a stable day',
        body: [
          'Most racing yards start very early. Staff feed the first ration at dawn, then begin checking each horse for any overnight heat, swelling, or signs of discomfort. Horses are typically exercised in groups (“lots”) through the morning, after which they are washed off, dried, and returned to a freshly prepared stable. Afternoons are quieter, used for grooming, hand-walking, turnout, and a thorough evening check.',
          'Consistency is the point. Horses are creatures of habit whose digestion and temperament both benefit from a steady rhythm, so good yards keep feeding and exercise times as regular as possible from one day to the next.',
        ],
      },
      {
        heading: 'Mucking out and bedding',
        body: [
          'Each stable is mucked out daily — soiled bedding removed, the floor allowed to dry, and clean bedding (straw, shavings, or other materials) laid down. A clean, dry bed protects the respiratory system from ammonia and dust, reduces the risk of thrush in the hooves, and gives the horse a comfortable surface to lie down on, which matters because horses need to lie down for proper deep rest.',
          'Fresh water is checked and refilled throughout the day, and hay or other forage is topped up so the horse has near-constant access to fibre, which supports healthy digestion.',
        ],
      },
      {
        heading: 'Grooming, checks, and turnout',
        body: [
          'Daily grooming does more than keep a horse looking well: it stimulates circulation, distributes natural skin oils, and — crucially — gives an experienced groom a daily hands-on chance to spot a cut, a filled leg, or a sore spot early. Picking out the feet is part of every grooming session.',
          'Where facilities allow, time in a paddock or on a horse-walker provides movement and mental relief outside the stable. Routines vary widely between yards and climates, and any specific feeding, exercise, or health plan should be set with the horse’s trainer and veterinarian.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Day starts', value: 'Early morning feed and health check' },
      { label: 'Core daily tasks', value: 'Feeding, mucking out, exercise, grooming, turnout' },
      { label: 'Why a routine', value: 'Steady times support digestion and temperament' },
      { label: 'Stable hygiene', value: 'Daily mucking out protects lungs and hooves' },
    ],
    faq: [
      {
        question: 'What does a racehorse’s daily routine look like?',
        answer:
          'A typical day begins with an early feed and health check, followed by exercise in groups through the morning, then washing off, mucking out, grooming, and turnout, with a final check in the evening. Routines vary by yard and climate.',
      },
      {
        question: 'Why are feeding and exercise times kept so consistent?',
        answer:
          'Horses are creatures of habit whose digestion and temperament both benefit from a steady rhythm, so good yards keep feeding and exercise times as regular as possible day to day.',
      },
    ],
    related: ['racehorse-nutrition-basics', 'cooling-down-and-recovery', 'turnout-and-downtime'],
  },
  {
    slug: 'racehorse-nutrition-basics',
    title: 'Racehorse Nutrition Basics',
    short:
      'A general guide to how the working equine athlete is fed — forage first, balanced hard feed, and electrolytes — in plain educational terms.',
    intro:
      'Feeding a racehorse is a balance between supplying the energy of a hard-working athlete and protecting the sensitive digestive system of an animal evolved to graze almost continuously. The guiding principle in modern equine nutrition is “forage first”: fibre forms the foundation of the diet, with concentrated feeds added to meet the extra energy demands of training. This is general education, not a feeding plan — a horse’s actual ration should be set with a qualified equine nutritionist or veterinarian.',
    sections: [
      {
        heading: 'Forage: the foundation',
        body: [
          'Horses are trickle feeders with a digestive tract designed for a steady intake of fibre. Hay, haylage, or grass should make up the bulk of the diet by weight, and many yards aim to keep some forage in front of the horse for most of the day. Adequate fibre supports gut health, reduces the risk of digestive upset and gastric ulcers, and provides slow-release energy.',
          'Because forage is so central, its quality is assessed carefully — clean, dust-free, and appropriate to the individual horse. Sudden changes to forage type are made gradually to let the gut microbes adapt.',
        ],
      },
      {
        heading: 'Hard feed and energy',
        body: [
          'On top of forage, racehorses usually receive “hard feed” — concentrated feeds such as oats, formulated racing mixes, or cubes — to supply the extra energy training demands. Energy sources are balanced between starch (for fast, glycogen-based work), oil/fat (for slow-release stamina energy), and protein for muscle repair, along with vitamins and minerals.',
          'A widely followed guideline is to feed little and often: several smaller meals rather than one or two large ones, which suits the horse’s small stomach and steadier digestion. The precise mix is matched to each horse’s workload, bodyweight, and temperament.',
        ],
      },
      {
        heading: 'Hydration and electrolytes',
        body: [
          'Clean water at all times is the single most important nutritional need. Horses in hard work lose significant fluid and electrolytes (salts such as sodium, potassium, and chloride) through sweat, so many programmes include electrolyte support, especially in hot weather or after strenuous exercise.',
          'Electrolyte and supplement use should be tailored to the individual and the conditions, and is best guided by a veterinarian or equine nutritionist rather than applied as a blanket rule.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Core principle', value: '“Forage first” — fibre is the foundation' },
      { label: 'Feeding pattern', value: 'Little and often suits the small equine stomach' },
      { label: 'Energy sources', value: 'Starch, oil/fat, and protein, balanced to workload' },
      { label: 'Hydration', value: 'Constant clean water; electrolytes after hard work' },
    ],
    faq: [
      {
        question: 'What do racehorses eat?',
        answer:
          'Their diet is built on forage (hay, haylage, or grass) with concentrated “hard feed” added for energy, plus vitamins, minerals, water, and often electrolyte support. A specific ration should be set with an equine nutritionist or veterinarian.',
      },
      {
        question: 'Why feed “little and often”?',
        answer:
          'Horses have a relatively small stomach and a digestive system designed for steady intake, so several smaller meals suit them better than one or two large ones and help reduce digestive upset.',
      },
      {
        question: 'Why are electrolytes important for racehorses?',
        answer:
          'Hard work and sweating cause significant losses of salts such as sodium, potassium, and chloride, so electrolyte support — tailored to the individual and conditions by a professional — helps maintain hydration and recovery.',
      },
    ],
    related: ['daily-care-of-a-racehorse', 'cooling-down-and-recovery', 'hoof-care-and-farriery'],
  },
  {
    slug: 'hoof-care-and-farriery',
    title: 'Hoof Care and Farriery',
    short:
      'Why “no foot, no horse” guides racing, and the farrier’s role in trimming, shoeing, and keeping a racehorse sound.',
    intro:
      'The old horseman’s saying “no foot, no horse” captures how central hoof health is to a racehorse’s career. A racing yard works closely with a professional farrier to keep each horse’s feet correctly balanced, trimmed, and — where appropriate — shod for the work ahead. This is a general overview; any specific hoof issue should be assessed by a qualified farrier and, where needed, a veterinarian.',
    sections: [
      {
        heading: 'The farrier’s role',
        body: [
          'A farrier is a skilled professional who trims and balances the hoof and fits shoes. The hoof grows continuously, like a fingernail, so it needs regular attention on a cycle of roughly every four to six weeks, though the interval varies by horse and circumstance. Correct trimming keeps the foot balanced under the limb, which helps distribute load evenly and reduces strain on tendons, ligaments, and joints.',
          'In a racing yard the farrier becomes part of the team, working alongside the trainer and veterinarian and often present on a regular schedule to address shoeing, foot balance, and any developing problems early.',
        ],
      },
      {
        heading: 'Shoeing for racing',
        body: [
          'Racehorses are often fitted with lightweight shoes — historically aluminium “racing plates” — designed to protect the foot while adding minimal weight. The choice of shoe depends on the horse, the surface it works and races on, and any conformational or soundness needs. Some horses race in different shoes from those they wear in training, and approaches differ across racing jurisdictions.',
          'Shoeing is always a balance: a shoe protects the hoof and can aid grip and support, but the goal is to interfere as little as possible with the foot’s natural function. Decisions are made case by case by the farrier in consultation with the horse’s connections.',
        ],
      },
      {
        heading: 'Everyday hoof health',
        body: [
          'Daily care matters as much as the farrier’s visits. Picking out the feet each day removes packed dirt and stones and lets staff spot problems such as thrush, bruising, or a loose shoe early. Clean, dry footing and good stable hygiene help protect the hoof, while consistent exercise supports healthy hoof growth and circulation.',
          'Nutrition also influences hoof quality, and persistent hoof problems can have underlying causes that warrant veterinary input. Any lameness or significant hoof concern should be referred to a farrier and veterinarian rather than managed by guesswork.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Guiding saying', value: '“No foot, no horse”' },
      { label: 'Farrier visits', value: 'Typically every ~4–6 weeks; varies by horse' },
      { label: 'Racing shoes', value: 'Often lightweight plates to protect with minimal weight' },
      { label: 'Daily task', value: 'Picking out feet to catch problems early' },
    ],
    faq: [
      {
        question: 'What does a farrier do for a racehorse?',
        answer:
          'A farrier trims and balances the hoof and fits shoes on a regular cycle, working with the trainer and veterinarian to keep the horse’s feet sound and correctly balanced for the work ahead.',
      },
      {
        question: 'How often does a racehorse see the farrier?',
        answer:
          'Because the hoof grows continuously, most horses are attended to roughly every four to six weeks, though the exact interval depends on the individual horse and its circumstances.',
      },
      {
        question: 'Why are racing shoes so light?',
        answer:
          'Racehorses are often fitted with lightweight shoes, historically aluminium racing plates, to protect the foot while adding as little weight as possible. The specific choice is made case by case with the farrier.',
      },
    ],
    related: ['daily-care-of-a-racehorse', 'racehorse-nutrition-basics', 'cooling-down-and-recovery'],
  },
  {
    slug: 'cooling-down-and-recovery',
    title: 'Cooling Down and Recovery',
    short:
      'What happens after exercise — cooling out, washing off, and the recovery practices that help a racehorse bounce back.',
    intro:
      'The work a racehorse does on the gallops or in a race is only half the picture; how it is brought back down afterwards is just as important to its long-term soundness and wellbeing. Cooling down and recovery are deliberate, structured parts of the routine, designed to return the horse safely to a resting state and to support repair before the next session.',
    sections: [
      {
        heading: 'Cooling out after work',
        body: [
          'Immediately after exercise a horse is hot, breathing hard, and may be sweating heavily. The first priority is to lower its temperature and let the heart and breathing settle gradually rather than abruptly. This usually means walking the horse — in hand or on a horse-walker — so circulation eases down steadily, often combined with washing off sweat using cool water.',
          'In warm conditions, repeated application of cool water and scraping it off helps draw heat away. Staff watch breathing and demeanour to judge when a horse has truly “come down,” as rushing a hot horse back into a stable is avoided.',
        ],
      },
      {
        heading: 'Legs, rest, and routine recovery',
        body: [
          'Once cooled, attention turns to the legs, which take the greatest strain in a galloping horse. Yards commonly inspect the lower limbs for heat or swelling and may use practices such as cold-water hosing, cooling therapies, or supportive bandaging as part of routine post-exercise care. These help manage normal post-work inflammation and give staff another chance to detect problems early.',
          'Rest itself is a recovery tool: access to forage, clean water, a comfortable bed to lie down on, and a calm environment all let the body repair. Specific recovery protocols and any treatment beyond routine care should be guided by the horse’s veterinarian.',
        ],
      },
    ],
    keyFacts: [
      { label: 'First priority', value: 'Lower temperature and let breathing settle gradually' },
      { label: 'Common method', value: 'Walking to cool out plus washing off with cool water' },
      { label: 'Legs', value: 'Checked for heat/swelling; cooling and support as needed' },
      { label: 'Rest', value: 'Forage, water, and a comfortable bed aid repair' },
    ],
    faq: [
      {
        question: 'How is a racehorse cooled down after exercise?',
        answer:
          'The horse is brought back to a resting state gradually — typically by walking it in hand or on a walker so breathing and circulation settle, combined with washing off sweat using cool water, especially in warm conditions.',
      },
      {
        question: 'Why is recovery care so important?',
        answer:
          'Returning a horse safely to a resting state and supporting repair afterwards protects long-term soundness, helps manage normal post-work inflammation in the legs, and gives staff a chance to spot any developing problem early.',
      },
    ],
    related: ['daily-care-of-a-racehorse', 'turnout-and-downtime', 'racehorse-nutrition-basics'],
  },
  {
    slug: 'turnout-and-downtime',
    title: 'Turnout and Downtime',
    short:
      'Why paddock time, rest days, and longer breaks matter for a racehorse’s body and mind — not just its fitness.',
    intro:
      'A racehorse is an athlete, but it is also a horse — a social, grazing animal that benefits enormously from time simply being a horse. Turnout (time in a paddock or field) and downtime (rest days and longer breaks from training) are increasingly recognised as central to both physical soundness and mental wellbeing, rather than as time “off.”',
    sections: [
      {
        heading: 'Turnout: movement and mental relief',
        body: [
          'Turning a horse out into a paddock allows free movement, grazing, and — where horses can be turned out together safely — social contact, all of which are natural behaviours that stabling alone cannot provide. Gentle, self-directed movement supports circulation, joint health, and digestion, while the change of scene provides important mental stimulation and stress relief.',
          'Not every horse can have unlimited turnout, and arrangements depend on facilities, climate, temperament, and safety. Many yards build in some form of daily turnout or, where space is limited, time on a horse-walker or in-hand grazing as a substitute.',
        ],
      },
      {
        heading: 'Rest days and longer breaks',
        body: [
          'Within a training week, easier days and rest days let the body adapt to and recover from work; fitness is built in the recovery between sessions as much as in the sessions themselves. Over a longer horizon, many horses are given a spell — an extended break from racing, often turned out — to recharge physically and mentally before returning to training.',
          'Recognising when a horse needs a break, whether for soundness or for a dip in enthusiasm, is part of good horsemanship. Decisions about a horse’s workload and time off are made by its trainer in consultation with the veterinarian.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Turnout benefits', value: 'Free movement, grazing, social contact, mental relief' },
      { label: 'Supports', value: 'Circulation, joint health, digestion, and temperament' },
      { label: 'Rest days', value: 'Fitness is built in recovery between sessions' },
      { label: 'A “spell”', value: 'A longer break, often turned out, to recharge' },
    ],
    faq: [
      {
        question: 'Why is turnout important for racehorses?',
        answer:
          'Turnout lets a horse move freely, graze, and — where safe — have social contact, supporting physical health and providing mental stimulation and stress relief that stabling alone cannot offer.',
      },
      {
        question: 'What is a “spell” in racing?',
        answer:
          'A spell is an extended break from racing and often from training, frequently spent turned out, that lets a horse recharge physically and mentally before returning to work.',
      },
    ],
    related: ['daily-care-of-a-racehorse', 'cooling-down-and-recovery', 'transport-and-travel'],
  },
  {
    slug: 'transport-and-travel',
    title: 'Transport and Travel',
    short:
      'How racehorses are shipped safely to the races — preparation, the journey itself, and settling in on arrival.',
    intro:
      'Racehorses travel — sometimes a short hop to a local track, sometimes across countries or continents. Moving a large, athletic animal safely takes careful planning, because travel is physically and mentally demanding and a stressful or poorly managed journey can affect a horse’s wellbeing and readiness. Good transport is built around minimising stress and keeping the horse comfortable, balanced, and hydrated.',
    sections: [
      {
        heading: 'Preparing for the journey',
        body: [
          'Before travelling, horses are commonly fitted with protective gear such as travel boots or bandages to guard the legs, and sometimes poll guards or tail protection, depending on the horse and the trip. The vehicle — a horsebox or trailer — is prepared with secure, non-slip footing, good ventilation, and bedding, and is checked for safety.',
          'Hydration and gut health are planned for: horses are offered water, and forage is usually provided so they can keep eating, since long gaps without fibre are avoided. Loading calmly and allowing nervous travellers time and familiarity helps reduce stress before the journey even begins.',
        ],
      },
      {
        heading: 'During the journey and on arrival',
        body: [
          'A horse has to constantly balance against the motion of the vehicle, which is tiring, so smooth, considerate driving and regular checks matter. Good ventilation helps protect the respiratory system, and on longer journeys breaks, water, and rest are factored in. Throughout, the aim is to keep the horse calm, balanced, and able to eat and drink.',
          'On arrival, horses are unloaded carefully and given time to settle into new surroundings — a fresh stable, water, and forage — before the demands of the day. The length of journey, climate, and regulations vary widely, and specific travel arrangements and any health requirements should follow veterinary and regulatory guidance.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Main goal', value: 'Move the horse safely with minimal stress' },
      { label: 'Protection', value: 'Travel boots or bandages, sometimes poll/tail guards' },
      { label: 'During travel', value: 'Balance, ventilation, water, and forage access' },
      { label: 'On arrival', value: 'Unload carefully; time to settle with water and forage' },
    ],
    faq: [
      {
        question: 'How are racehorses transported to the races?',
        answer:
          'They travel by horsebox or trailer prepared with secure footing, ventilation, and bedding. Horses are fitted with protective travel gear, offered water and forage, and driven smoothly with checks and breaks on longer trips.',
      },
      {
        question: 'Why is travel stressful for horses?',
        answer:
          'A horse must constantly balance against the motion of the vehicle, which is tiring, and the change of environment can be unsettling, so careful preparation, smooth driving, ventilation, and time to settle on arrival all help reduce stress.',
      },
    ],
    related: ['daily-care-of-a-racehorse', 'turnout-and-downtime', 'cooling-down-and-recovery'],
  },
];

export function allRacehorseCareSlugs(): string[] {
  return racehorseCareTopics.map((t) => t.slug);
}

export function getRacehorseCareTopic(slug: string): RacehorseCareTopic | undefined {
  return racehorseCareTopics.find((t) => t.slug === slug);
}
