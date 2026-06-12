/**
 * Racing Venues cluster data -- /racing/venues/<slug>
 *
 * Educational venue guides for iconic American Thoroughbred racetracks. Each
 * entry drives one spoke page: founding/history, the track itself (surfaces,
 * configuration, capacity, traditions), the signature race(s) held there,
 * notable moments, and the spectator/visitor experience.
 *
 * ACCURACY: Only well-established, verifiable facts are stated. Where a precise
 * figure is uncertain it is expressed generally ("roughly", "among the
 * largest", "first run in") rather than invented. No fabricated quotes, no
 * invented precise stats, no scraped/licensed data.
 *
 * HARD WAGERING BAN (CSRO / QC §1): these are EDUCATIONAL VENUE guides --
 * history, architecture, traditions, signature races, the spectator
 * experience. NO odds, picks, best bets, EV/fair-odds, sportsbook/ADW links,
 * betting strategy, racecards/results systems, or ratings engines anywhere.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

export interface VenueSection {
  id: string
  heading: string
  body: string[]
}

export interface VenueFAQ {
  question: string
  answer: string
  answerText: string
}

export interface RacingVenue {
  slug: string
  /** Display name (full). */
  name: string
  /** Short name for breadcrumbs / hub cards. */
  shortName: string
  /** Card eyebrow on the hub grid. */
  eyebrow: string
  /** Short hub-card summary. */
  cardSummary: string
  /** SEO title (<= 70 chars incl. " | Horses.com" added in the page). */
  metaTitle: string
  /** Meta description (<= 160 chars). */
  description: string
  /** Masthead eyebrow / kicker. */
  kicker: string
  /** Masthead headline. */
  heroTitle: string
  /** Masthead subtitle. */
  heroSubtitle: string
  /** Masthead alt text. */
  heroAlt: string
  /** Read time label. */
  readTime: string
  /** Article-layout hero intro line. */
  intro: string
  /** Quick-reference key facts. */
  keyFacts: { label: string; value: string }[]
  /** Body sections. */
  sections: VenueSection[]
  faq: VenueFAQ[]
  /** RelatedLinks {label, href} -- must include the signature race page. */
  related: { label: string; href: string }[]
  /** Source/reference anchors (well-established bodies / institutions). */
  references: string[]
}

export const racingVenues: RacingVenue[] = [
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'churchill-downs',
    name: 'Churchill Downs',
    shortName: 'Churchill Downs',
    eyebrow: 'Louisville, Kentucky · Est. 1875',
    cardSummary:
      'Home of the Kentucky Derby since 1875, crowned by the landmark Twin Spires. The most recognizable racetrack in America.',
    metaTitle: 'Churchill Downs: Home of the Kentucky Derby | Horses.com',
    description:
      'An educational guide to Churchill Downs in Louisville, Kentucky: its 1875 founding, the Twin Spires, and the Kentucky Derby. History and tradition, not wagering.',
    kicker: 'Racing Venues · Louisville, Kentucky',
    heroTitle: 'Churchill Downs',
    heroSubtitle:
      'The Louisville track that has staged the Kentucky Derby every year since 1875, framed by its landmark Twin Spires. An educational venue guide — history, architecture, and tradition, not a wagering resource.',
    heroAlt: 'A Thoroughbred racetrack grandstand on Kentucky Derby day',
    readTime: '6 min read',
    intro:
      'Churchill Downs in Louisville, Kentucky, has hosted the Kentucky Derby continuously since 1875 — one of the longest-running annual sporting events in the United States, and the spiritual home of American Thoroughbred racing.',
    keyFacts: [
      { label: 'Location', value: 'Louisville, Kentucky' },
      { label: 'Opened', value: '1875' },
      { label: 'Signature race', value: 'Kentucky Derby (first leg of the Triple Crown)' },
      { label: 'Main surface', value: 'One-mile dirt oval, with a turf course inside' },
      { label: 'Landmark', value: 'The Twin Spires (added 1895)' },
      { label: 'Traditions', value: 'Roses, mint juleps, "My Old Kentucky Home"' },
    ],
    sections: [
      {
        id: 'history',
        heading: 'Founding and history',
        body: [
          'Churchill Downs opened in 1875 on land leased from John and Henry Churchill, whose family name the track still carries. Its founder, Meriwether Lewis Clark Jr. — a grandson of the explorer William Clark — had toured the great racecourses of England and France and returned determined to build a premier racing venue and a stakes race to rival the Epsom Derby. The very first race meeting, in May 1875, featured the inaugural running of the Kentucky Derby.',
          'The track was formally incorporated as Churchill Downs in the 1880s, taking the name by which it had already become widely known. Over the decades that followed it grew from a regional course into the most famous racetrack in North America, its identity inseparable from the single race it stages on the first Saturday in May each spring.',
        ],
      },
      {
        id: 'the-track',
        heading: 'The track itself',
        body: [
          'The main course at Churchill Downs is a one-mile dirt oval, with a turf course set inside it. The Kentucky Derby is contested over a mile and a quarter (ten furlongs) on the dirt — a distance most three-year-olds in the field have never previously been asked to run.',
          'The track\'s defining architectural feature is the pair of Twin Spires that rise above the grandstand. Designed by a young draftsman named Joseph Dominic Baldez, the spires were completed in 1895 and have become the visual signature not just of Churchill Downs but of American racing itself. Continual expansion of the grandstands and clubhouse has made Churchill Downs one of the largest-capacity sporting venues in the country on Derby day, when attendance regularly climbs into the six figures.',
        ],
      },
      {
        id: 'signature-race',
        heading: 'The signature race: the Kentucky Derby',
        body: [
          'The Kentucky Derby is the first leg of the American Triple Crown and the most widely watched horse race in the United States. Known as "the Run for the Roses" — the winner is draped in a garland of red roses — and "the fastest two minutes in sports," it is restricted to three-year-old Thoroughbreds and run over a mile and a quarter.',
          'The race carries a deep set of traditions: the singing of "My Old Kentucky Home" as the field parades to the post, the mint julep as the signature drink of the day, and elaborate hats worn throughout the stands. For a fuller treatment of the race, its distance, and its place in the Triple Crown, see the Horses.com guide to the Kentucky Derby.',
        ],
      },
      {
        id: 'notable-moments',
        heading: 'Notable moments',
        body: [
          'Because the Derby is the opening leg of the Triple Crown, Churchill Downs has been the starting point for every horse that has gone on to sweep all three races. Secretariat\'s 1973 Derby — the first leg of his Triple Crown that year — remains among the most celebrated single performances ever run at the track.',
          'The Derby has also been the stage for long-shot stories that have entered racing folklore, the kind of results that make the first Saturday in May unpredictable. Heritage profiles of many of the horses associated with Churchill Downs appear in the Horses.com collection of great racehorses.',
        ],
      },
      {
        id: 'visitor-experience',
        heading: 'The spectator experience',
        body: [
          'Derby day at Churchill Downs is as much a cultural occasion as a sporting one. The infield offers a famously informal, festival-like atmosphere, while the clubhouse and grandstand seating present the pageantry of formal Derby dress, hats, and the traditions of the day. Outside of the Derby and its surrounding spring meet, Churchill Downs runs additional race meetings through the year in a calmer setting.',
          'The track is also home to the Kentucky Derby Museum, which sits at the entrance and is open year-round, offering exhibits on the race\'s history for visitors who arrive outside the racing calendar.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Churchill Downs open?',
        answer: 'Churchill Downs opened in 1875, and the first Kentucky Derby was run at that inaugural meeting in May of that year.',
        answerText: 'Churchill Downs opened in 1875, and the first Kentucky Derby was run at that inaugural meeting in May of that year.',
      },
      {
        question: 'What are the Twin Spires?',
        answer: 'The Twin Spires are the pair of towers above the Churchill Downs grandstand, completed in 1895. They are the architectural signature of the track and one of the most recognizable images in American racing.',
        answerText: 'The Twin Spires are the pair of towers above the Churchill Downs grandstand, completed in 1895. They are the architectural signature of the track and one of the most recognizable images in American racing.',
      },
      {
        question: 'What race is Churchill Downs famous for?',
        answer: 'Churchill Downs is famous for the Kentucky Derby, the first leg of the Triple Crown, run over a mile and a quarter for three-year-old Thoroughbreds on the first Saturday in May.',
        answerText: 'Churchill Downs is famous for the Kentucky Derby, the first leg of the Triple Crown, run over a mile and a quarter for three-year-old Thoroughbreds on the first Saturday in May.',
      },
      {
        question: 'How long is the Kentucky Derby track?',
        answer: 'The main course is a one-mile dirt oval with a turf course inside it. The Kentucky Derby itself is run over a mile and a quarter, or ten furlongs.',
        answerText: 'The main course is a one-mile dirt oval with a turf course inside it. The Kentucky Derby itself is run over a mile and a quarter, or ten furlongs.',
      },
    ],
    related: [
      { label: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Great Racehorses', href: '/racing/great-racehorses' },
    ],
    references: [
      'Churchill Downs Incorporated — official track history and Kentucky Derby records.',
      'Kentucky Derby Museum, Louisville, Kentucky — historical exhibits and archives.',
      'National Museum of Racing and Hall of Fame — Thoroughbred racing history.',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'pimlico-race-course',
    name: 'Pimlico Race Course',
    shortName: 'Pimlico',
    eyebrow: 'Baltimore, Maryland · Est. 1870',
    cardSummary:
      'The Baltimore track that has staged the Preakness Stakes since 1873 — home of the Black-Eyed Susans and the painted weathervane tradition.',
    metaTitle: 'Pimlico Race Course: Home of the Preakness | Horses.com',
    description:
      'An educational guide to Pimlico Race Course in Baltimore: its 1870 founding, the Preakness Stakes, the Black-Eyed Susans, and the weathervane tradition.',
    kicker: 'Racing Venues · Baltimore, Maryland',
    heroTitle: 'Pimlico Race Course',
    heroSubtitle:
      'The historic Baltimore track that has hosted the Preakness Stakes — the middle jewel of the Triple Crown — since 1873. An educational venue guide to its history, traditions, and the painted weathervane.',
    heroAlt: 'A historic Thoroughbred racecourse grandstand on a spring afternoon',
    readTime: '6 min read',
    intro:
      'Pimlico Race Course in Baltimore, Maryland, opened in 1870 and is one of the oldest racetracks in the United States. It is best known as the home of the Preakness Stakes, the middle leg of the Triple Crown.',
    keyFacts: [
      { label: 'Location', value: 'Baltimore, Maryland' },
      { label: 'Opened', value: '1870' },
      { label: 'Signature race', value: 'Preakness Stakes (second leg of the Triple Crown)' },
      { label: 'Main surface', value: 'Dirt oval, with a turf course inside' },
      { label: 'Nickname', value: '"Old Hilltop"' },
      { label: 'Traditions', value: 'Black-Eyed Susan blanket, painted weathervane' },
    ],
    sections: [
      {
        id: 'history',
        heading: 'Founding and history',
        body: [
          'Pimlico Race Course opened in 1870, making it one of the oldest operating racetracks in the country — second in age among major American venues only to Saratoga. The track took its name from the surrounding Baltimore neighborhood. For much of its early life it was affectionately known as "Old Hilltop," after a small rise in the infield from which spectators and horsemen once watched the racing; the hill was later leveled, but the nickname endured.',
          'In 1873, just three years after opening, Pimlico staged the first running of the Preakness Stakes, named for the colt Preakness who had won an important race at the track\'s inaugural meeting. The race would go on to become the second leg of the Triple Crown, anchoring Pimlico\'s place in American racing history.',
        ],
      },
      {
        id: 'the-track',
        heading: 'The track itself',
        body: [
          'Pimlico\'s main course is a dirt oval with a turf course set inside it. The Preakness Stakes is run over a mile and three-sixteenths — slightly shorter than the Kentucky Derby — and comes two weeks after the Derby in the Triple Crown calendar, giving it a reputation as a tight, tactical race.',
          'For much of its history Pimlico has carried the weathered character of a venerable old track. In recent years the future of the facility has been the subject of major redevelopment planning in Maryland aimed at modernizing the grounds while preserving the Preakness at its historic home. Throughout, the race itself has remained the centerpiece of the venue\'s identity.',
        ],
      },
      {
        id: 'signature-race',
        heading: 'The signature race: the Preakness Stakes',
        body: [
          'The Preakness Stakes is the middle jewel of the American Triple Crown, run two weeks after the Kentucky Derby. Restricted to three-year-old Thoroughbreds, it is contested over a mile and three-sixteenths on the dirt.',
          'Two traditions define Preakness day. The winner is draped with a blanket of Black-Eyed Susans, the state flower of Maryland. And atop a cupola at the track stands a weathervane in the form of a horse and jockey, which is painted in the silks of the winning stable after each running — a piece of living folk art unique to the race. For a fuller treatment of the Preakness, see the Horses.com guide to the Preakness Stakes.',
        ],
      },
      {
        id: 'notable-moments',
        heading: 'Notable moments',
        body: [
          'As the second leg of the Triple Crown, Pimlico has been the stage on which many Derby winners have kept their sweep alive — and where others have seen it end. Every horse that has gone on to win the Triple Crown passed through a Preakness victory at Pimlico to do so.',
          'The track has hosted some of the sport\'s most storied confrontations, the kind of head-to-head finishes that the two-week gap and the shorter distance tend to produce. Heritage profiles of horses associated with these runnings appear in the Horses.com collection of great racehorses.',
        ],
      },
      {
        id: 'visitor-experience',
        heading: 'The spectator experience',
        body: [
          'Preakness day has long had a livelier, more local character than the Derby — a Baltimore civic occasion as much as a national racing event, with the infield drawing a large, festival-minded crowd. The Black-Eyed Susan Stakes, run the day before the Preakness, gives the meeting a two-day rhythm.',
          'Outside the Preakness, Pimlico has historically run additional meetings through the Maryland racing calendar, though much of the track\'s public attention naturally concentrates on its single famous Saturday in May.',
        ],
      },
    ],
    faq: [
      {
        question: 'How old is Pimlico Race Course?',
        answer: 'Pimlico opened in 1870, making it one of the oldest racetracks in the United States. The Preakness Stakes was first run there in 1873.',
        answerText: 'Pimlico opened in 1870, making it one of the oldest racetracks in the United States. The Preakness Stakes was first run there in 1873.',
      },
      {
        question: 'What are the Black-Eyed Susans at the Preakness?',
        answer: 'The winner of the Preakness Stakes is draped with a blanket of Black-Eyed Susans, the state flower of Maryland — the Preakness equivalent of the Kentucky Derby\'s garland of roses.',
        answerText: 'The winner of the Preakness Stakes is draped with a blanket of Black-Eyed Susans, the state flower of Maryland, the Preakness equivalent of the Kentucky Derby garland of roses.',
      },
      {
        question: 'What is the painted weathervane tradition?',
        answer: 'After each Preakness, a weathervane atop the track in the shape of a horse and jockey is painted in the colors of the winning stable\'s silks — a tradition unique to Pimlico.',
        answerText: 'After each Preakness, a weathervane atop the track in the shape of a horse and jockey is painted in the colors of the winning stable silks, a tradition unique to Pimlico.',
      },
      {
        question: 'Why is Pimlico called "Old Hilltop"?',
        answer: 'The nickname comes from a small rise that once stood in the Pimlico infield, from which spectators watched the racing. The hill was later leveled, but the name "Old Hilltop" stuck.',
        answerText: 'The nickname comes from a small rise that once stood in the Pimlico infield, from which spectators watched the racing. The hill was later leveled, but the name Old Hilltop stuck.',
      },
    ],
    related: [
      { label: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Great Racehorses', href: '/racing/great-racehorses' },
    ],
    references: [
      'Maryland Jockey Club — official Pimlico and Preakness Stakes history.',
      'National Museum of Racing and Hall of Fame — Thoroughbred racing history.',
      'Maryland Stadium Authority redevelopment planning records (public documents).',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'belmont-park',
    name: 'Belmont Park',
    shortName: 'Belmont Park',
    eyebrow: 'Elmont, New York · Est. 1905',
    cardSummary:
      'Home of the Belmont Stakes and "Big Sandy" — the sweeping mile-and-a-half dirt oval where Triple Crowns are decided.',
    metaTitle: 'Belmont Park: Home of the Belmont Stakes | Horses.com',
    description:
      'An educational guide to Belmont Park in Elmont, New York: its 1905 opening, the mile-and-a-half "Big Sandy" dirt oval, and the Belmont Stakes.',
    kicker: 'Racing Venues · Elmont, New York',
    heroTitle: 'Belmont Park',
    heroSubtitle:
      'The expansive New York track whose mile-and-a-half main oval — "Big Sandy" — stages the Belmont Stakes, the final and longest leg of the Triple Crown. An educational venue guide.',
    heroAlt: 'A wide sweeping dirt racetrack oval under an open sky',
    readTime: '6 min read',
    intro:
      'Belmont Park in Elmont, New York, opened in 1905 and is best known for the Belmont Stakes, the third and longest leg of the Triple Crown — run on its sweeping mile-and-a-half main track, nicknamed "Big Sandy."',
    keyFacts: [
      { label: 'Location', value: 'Elmont, New York (just outside New York City)' },
      { label: 'Opened', value: '1905' },
      { label: 'Signature race', value: 'Belmont Stakes (third leg of the Triple Crown)' },
      { label: 'Main surface', value: 'Mile-and-a-half dirt oval ("Big Sandy")' },
      { label: 'Nickname', value: '"The Test of the Champion"' },
      { label: 'Operator', value: 'New York Racing Association (NYRA)' },
    ],
    sections: [
      {
        id: 'history',
        heading: 'Founding and history',
        body: [
          'Belmont Park opened in 1905, named for August Belmont II, a financier and racing figure whose family was deeply involved in the American turf. The track was built on a grand scale from the start, with vast grounds that set it apart from older, more compact venues. The Belmont Stakes itself predates the track — it was first run in 1867 at earlier New York courses — but found its permanent and most famous home at Belmont Park.',
          'Today Belmont Park is operated by the New York Racing Association (NYRA), which also runs Saratoga and Aqueduct. It has long stood as the flagship of New York racing and one of the most important venues in the sport, the place where Triple Crown bids are won or lost on the first or second Saturday in June.',
        ],
      },
      {
        id: 'the-track',
        heading: 'The track itself',
        body: [
          'Belmont Park\'s main course is a dirt oval of a mile and a half in circumference — the largest of the major American dirt tracks — which earned it the affectionate nickname "Big Sandy." Its sheer size produces long, sweeping turns and a punishing home stretch that rewards stamina, which is central to why the Belmont Stakes is considered such a demanding test.',
          'The Belmont Stakes is run at a mile and a half, the longest distance in the Triple Crown and a trip most American three-year-olds will run only once in their careers. That distance, on a track this large, is why the race carries the nickname "the Test of the Champion." Belmont Park\'s grandstand is among the largest in the sport, built to match the scale of the grounds.',
        ],
      },
      {
        id: 'signature-race',
        heading: 'The signature race: the Belmont Stakes',
        body: [
          'The Belmont Stakes is the third and final leg of the American Triple Crown, run roughly three weeks after the Preakness. At a mile and a half, it is the longest of the three races, and it is the leg at which a Triple Crown is either completed or denied.',
          'Because it is the decisive race, the Belmont has produced some of the most dramatic moments in the sport\'s history — both the completion of Triple Crowns and the heartbreak of bids that fell short in the final furlongs. For a fuller treatment of the race, its distance, and its place in the series, see the Horses.com guide to the Belmont Stakes.',
        ],
      },
      {
        id: 'notable-moments',
        heading: 'Notable moments',
        body: [
          'The most famous performance in Belmont Park history is Secretariat\'s 1973 Belmont Stakes, in which he completed the Triple Crown by an enormous, widely-celebrated margin — a run still regarded by many as the greatest in the sport. Every American Triple Crown has been sealed by a Belmont Stakes victory at the track.',
          'Belmont has equally been the scene of near-misses, where horses arriving with two legs of the Triple Crown were stopped over the long final trip. Heritage profiles of the champions tied to these runnings appear in the Horses.com collection of great racehorses.',
        ],
      },
      {
        id: 'visitor-experience',
        heading: 'The spectator experience',
        body: [
          'Belmont Stakes day, especially in years when a Triple Crown is on the line, draws enormous crowds to the Elmont grounds and a national television audience. The official drink of the day is the Belmont Jewel, and "New York, New York" has become an anthem associated with the race.',
          'Beyond the Belmont, the track hosts spring and fall meetings as part of the NYRA calendar. In recent years parts of the facility have been the subject of significant modernization and redevelopment, while the racing has at times been shifted to Aqueduct or Saratoga during construction.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is Belmont Park called "Big Sandy"?',
        answer: '"Big Sandy" is the nickname for Belmont Park\'s main dirt oval, which measures a mile and a half around — the largest of the major American dirt tracks.',
        answerText: 'Big Sandy is the nickname for Belmont Park main dirt oval, which measures a mile and a half around, the largest of the major American dirt tracks.',
      },
      {
        question: 'How long is the Belmont Stakes?',
        answer: 'The Belmont Stakes is run at a mile and a half, making it the longest of the three Triple Crown races and a major test of a horse\'s stamina.',
        answerText: 'The Belmont Stakes is run at a mile and a half, making it the longest of the three Triple Crown races and a major test of a horse stamina.',
      },
      {
        question: 'When did Belmont Park open?',
        answer: 'Belmont Park opened in 1905, named for the racing figure August Belmont II. The Belmont Stakes itself dates to 1867 and was run at earlier courses before settling at the park.',
        answerText: 'Belmont Park opened in 1905, named for the racing figure August Belmont II. The Belmont Stakes itself dates to 1867 and was run at earlier courses before settling at the park.',
      },
      {
        question: 'Who operates Belmont Park?',
        answer: 'Belmont Park is operated by the New York Racing Association (NYRA), which also runs Saratoga Race Course and Aqueduct Racetrack.',
        answerText: 'Belmont Park is operated by the New York Racing Association (NYRA), which also runs Saratoga Race Course and Aqueduct Racetrack.',
      },
    ],
    related: [
      { label: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Great Racehorses', href: '/racing/great-racehorses' },
    ],
    references: [
      'New York Racing Association (NYRA) — official Belmont Park and Belmont Stakes records.',
      'National Museum of Racing and Hall of Fame — Thoroughbred racing history.',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'saratoga-race-course',
    name: 'Saratoga Race Course',
    shortName: 'Saratoga',
    eyebrow: 'Saratoga Springs, New York · Est. 1863',
    cardSummary:
      'The oldest major sporting venue in America (1863), the summer meet in upstate New York famously known as the "Graveyard of Champions."',
    metaTitle: 'Saratoga Race Course: Graveyard of Champions | Horses.com',
    description:
      'An educational guide to Saratoga Race Course: opened in 1863, America\'s oldest major sporting venue, its summer meet, and the "Graveyard of Champions" legend.',
    kicker: 'Racing Venues · Saratoga Springs, New York',
    heroTitle: 'Saratoga Race Course',
    heroSubtitle:
      'The 1863 upstate New York track — among the oldest sporting venues in America — whose summer meet earned the nickname the "Graveyard of Champions." An educational venue guide.',
    heroAlt: 'A historic racecourse with a Victorian-era grandstand and shade trees',
    readTime: '6 min read',
    intro:
      'Saratoga Race Course in Saratoga Springs, New York, opened in 1863 and is among the oldest organized sporting venues in the United States. Its summer meet is one of the most celebrated fixtures in racing, and the track is famously nicknamed the "Graveyard of Champions."',
    keyFacts: [
      { label: 'Location', value: 'Saratoga Springs, New York' },
      { label: 'Opened', value: '1863' },
      { label: 'Signature meet', value: 'Summer meet (including the Travers Stakes)' },
      { label: 'Main surface', value: 'Dirt oval, with turf courses inside' },
      { label: 'Nickname', value: '"The Graveyard of Champions"' },
      { label: 'Operator', value: 'New York Racing Association (NYRA)' },
    ],
    sections: [
      {
        id: 'history',
        heading: 'Founding and history',
        body: [
          'Saratoga Race Course held its first Thoroughbred meeting in 1863, in the midst of the Civil War, making it one of the oldest continuously operating sporting venues in the country. The track grew up alongside the spa town of Saratoga Springs, which was already a fashionable resort destination, and racing quickly became woven into the social rhythm of the summer there.',
          'Over more than a century and a half, Saratoga has retained much of its historic, low-slung Victorian character even as it modernized — a deliberate preservation that is central to its identity. Today it is operated by the New York Racing Association (NYRA) and stages a marquee summer meet that draws horsemen and racing fans from across the country.',
        ],
      },
      {
        id: 'the-track',
        heading: 'The track itself',
        body: [
          'Saratoga\'s main course is a dirt oval, with turf courses set inside it, surrounded by a grandstand and grounds shaded by mature trees that give the venue a distinctive parkland feel quite unlike a modern stadium. The track is known for its atmosphere as much as its configuration: clubhouse turn, backyard picnic areas, and a paddock that brings spectators close to the horses.',
          'The summer meet is the heart of Saratoga\'s calendar. Its centerpiece is the Travers Stakes — sometimes called the "Midsummer Derby" — a major race for three-year-olds that brings together top horses from the spring classics. The meet as a whole is regarded as one of the highest-quality concentrations of racing anywhere in the world.',
        ],
      },
      {
        id: 'graveyard',
        heading: 'The "Graveyard of Champions"',
        body: [
          'Saratoga\'s most enduring legend is its nickname, the "Graveyard of Champions." The phrase grew out of a long history of heavily favored, seemingly unbeatable horses being upset at the track — defeats that, precisely because they were so unexpected, became part of racing lore.',
          'The most famous of these came in 1919, when the great Man o\' War suffered the only defeat of his career at Saratoga, beaten by a horse aptly named Upset. Later generations would add their own surprises to the list, cementing the track\'s reputation as a place where form can fail and favorites fall. Heritage profiles of several of the champions tied to these stories appear in the Horses.com collection of great racehorses.',
        ],
      },
      {
        id: 'visitor-experience',
        heading: 'The spectator experience',
        body: [
          'A day at Saratoga is widely considered one of the most pleasant experiences in American racing. The shaded backyard, the closeness of the paddock and walking ring, and the preserved historic architecture give the meet a character that fans return to year after year. The morning workouts on the Oklahoma training track and the breakfast-at-the-track tradition are part of the appeal.',
          'The summer meet runs across several weeks, building toward the Travers, and the town of Saratoga Springs fills with visitors for the duration — a reminder of how the resort and the racecourse have grown up together since 1863.',
        ],
      },
    ],
    faq: [
      {
        question: 'How old is Saratoga Race Course?',
        answer: 'Saratoga held its first Thoroughbred meeting in 1863, making it among the oldest continuously operating organized sporting venues in the United States.',
        answerText: 'Saratoga held its first Thoroughbred meeting in 1863, making it among the oldest continuously operating organized sporting venues in the United States.',
      },
      {
        question: 'Why is Saratoga called the "Graveyard of Champions"?',
        answer: 'The nickname comes from a long history of heavily favored, seemingly unbeatable horses being upset at the track — most famously Man o\' War\'s only career defeat there in 1919, to a horse named Upset.',
        answerText: 'The nickname comes from a long history of heavily favored, seemingly unbeatable horses being upset at the track, most famously Man o War only career defeat there in 1919, to a horse named Upset.',
      },
      {
        question: 'What is the signature race at Saratoga?',
        answer: 'The Travers Stakes — often called the "Midsummer Derby" — is the centerpiece of Saratoga\'s summer meet, a major contest for three-year-olds.',
        answerText: 'The Travers Stakes, often called the Midsummer Derby, is the centerpiece of Saratoga summer meet, a major contest for three-year-olds.',
      },
      {
        question: 'Who operates Saratoga Race Course?',
        answer: 'Saratoga is operated by the New York Racing Association (NYRA), which also runs Belmont Park and Aqueduct Racetrack.',
        answerText: 'Saratoga is operated by the New York Racing Association (NYRA), which also runs Belmont Park and Aqueduct Racetrack.',
      },
    ],
    related: [
      { label: 'Great Racehorses', href: '/racing/great-racehorses' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Racing History', href: '/racing/history' },
    ],
    references: [
      'New York Racing Association (NYRA) — official Saratoga Race Course records.',
      'National Museum of Racing and Hall of Fame (located in Saratoga Springs) — Thoroughbred racing history.',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'keeneland',
    name: 'Keeneland',
    shortName: 'Keeneland',
    eyebrow: 'Lexington, Kentucky · Est. 1936',
    cardSummary:
      'The Lexington track and bloodstock sales company opened in 1936 — a boutique spring and fall meet and a frequent host of the Breeders\' Cup.',
    metaTitle: 'Keeneland: Lexington Racing & Sales | Horses.com',
    description:
      'An educational guide to Keeneland in Lexington, Kentucky: its 1936 founding, the boutique spring and fall meets, world-famous sales, and Breeders\' Cup hosting.',
    kicker: 'Racing Venues · Lexington, Kentucky',
    heroTitle: 'Keeneland',
    heroSubtitle:
      'The Lexington racetrack and bloodstock auction house, opened in 1936, known for its boutique spring and fall meets, world-renowned horse sales, and as a recurring host of the Breeders\' Cup. An educational venue guide.',
    heroAlt: 'A limestone racecourse grandstand surrounded by Kentucky bluegrass paddocks',
    readTime: '6 min read',
    intro:
      'Keeneland in Lexington, Kentucky, opened in 1936 in the heart of the Bluegrass region. It is both a racetrack — running short, prestigious spring and fall meets — and one of the most important Thoroughbred sales companies in the world, and it has served several times as host of the Breeders\' Cup.',
    keyFacts: [
      { label: 'Location', value: 'Lexington, Kentucky' },
      { label: 'Opened', value: '1936' },
      { label: 'Signature meets', value: 'Boutique spring and fall race meets' },
      { label: 'Main surface', value: 'Dirt oval, with a turf course inside' },
      { label: 'Also known for', value: 'World-leading Thoroughbred auctions' },
      { label: 'Major event', value: 'Recurring host of the Breeders\' Cup' },
    ],
    sections: [
      {
        id: 'history',
        heading: 'Founding and history',
        body: [
          'Keeneland opened in 1936, established in the bluegrass country around Lexington, Kentucky — the historic heartland of American Thoroughbred breeding. It was conceived from the outset as something distinctive: a non-profit racing and sales operation intended to serve the breeding industry and to present racing in a refined, parklike setting rather than as a commercial spectacle.',
          'That founding character has stayed with the track. Built largely of native limestone and set among the paddocks of the surrounding horse farms, Keeneland has long been regarded as one of the most beautiful racecourses in the world, and its dual identity as both a racetrack and a sales company is central to its importance.',
        ],
      },
      {
        id: 'the-track',
        heading: 'The track itself',
        body: [
          'Keeneland\'s main course is a dirt oval, with a turf course set inside it. Rather than racing year-round, the track holds short, concentrated boutique meets — a spring meet in April and a fall meet in October — which keeps the quality of competition high and the occasions special. The compact grandstand and the limestone architecture give the venue an intimate, traditional feel.',
          'Keeneland\'s grounds also house its renowned sales pavilion. The track and the auction company operate as two halves of a single institution, so that the same place where elite horses are sold is where elite racing is run — a combination that few venues in the world share.',
        ],
      },
      {
        id: 'sales-and-breeders-cup',
        heading: 'The sales and the Breeders\' Cup',
        body: [
          'Keeneland is home to some of the most important Thoroughbred auctions in the world. Its sales — including major yearling and breeding-stock auctions — draw buyers internationally and play a defining role in the global bloodstock market. For the breeding side of the sport, Keeneland is as significant as a sales venue as it is as a racetrack.',
          'Keeneland has also served on multiple occasions as host of the Breeders\' Cup, the two-day year-end World Championships of Thoroughbred racing. Hosting the Breeders\' Cup placed Keeneland\'s boutique racing setting on the sport\'s biggest stage. For a fuller treatment of that event, see the Horses.com guide to the Breeders\' Cup.',
        ],
      },
      {
        id: 'notable-moments',
        heading: 'Notable moments',
        body: [
          'Keeneland\'s standing in the sport comes as much from the horses sold there as from the races run there: a great many champions and classic winners passed through its sales ring before reaching the track. The Breeders\' Cup runnings hosted at Keeneland brought the world\'s best horses to the Lexington oval for two days of championship racing.',
          'The spring and fall meets, though short, regularly attract top three-year-olds and older horses pointing toward the classics and the Breeders\' Cup. Heritage profiles of many celebrated Thoroughbreds appear in the Horses.com collection of great racehorses.',
        ],
      },
      {
        id: 'visitor-experience',
        heading: 'The spectator experience',
        body: [
          'A day at Keeneland is defined by its setting: limestone buildings, manicured grounds, and the surrounding Kentucky horse farms. The fall meet in particular, with its autumn color, is widely regarded as one of the most scenic experiences in racing. Tailgating in the surrounding lots is a long-standing part of the day.',
          'Outside the race meets, Keeneland\'s grounds, library, and sales calendar make it a year-round destination for those interested in the Thoroughbred industry, reflecting its dual life as both a racecourse and the center of a global bloodstock market.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Keeneland open?',
        answer: 'Keeneland opened in 1936 in Lexington, Kentucky, conceived as a non-profit racing and sales operation in the heart of Thoroughbred breeding country.',
        answerText: 'Keeneland opened in 1936 in Lexington, Kentucky, conceived as a non-profit racing and sales operation in the heart of Thoroughbred breeding country.',
      },
      {
        question: 'What is Keeneland known for besides racing?',
        answer: 'Keeneland is also one of the most important Thoroughbred auction houses in the world. Its yearling and breeding-stock sales draw international buyers and play a central role in the global bloodstock market.',
        answerText: 'Keeneland is also one of the most important Thoroughbred auction houses in the world. Its yearling and breeding-stock sales draw international buyers and play a central role in the global bloodstock market.',
      },
      {
        question: 'Has Keeneland hosted the Breeders\' Cup?',
        answer: 'Yes. Keeneland has served on multiple occasions as host of the Breeders\' Cup, the two-day year-end World Championships of Thoroughbred racing.',
        answerText: 'Yes. Keeneland has served on multiple occasions as host of the Breeders Cup, the two-day year-end World Championships of Thoroughbred racing.',
      },
      {
        question: 'When does Keeneland hold its race meets?',
        answer: 'Rather than racing year-round, Keeneland holds short boutique meets — a spring meet in April and a fall meet in October — which keeps the quality of competition high.',
        answerText: 'Rather than racing year-round, Keeneland holds short boutique meets, a spring meet in April and a fall meet in October, which keeps the quality of competition high.',
      },
    ],
    related: [
      { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
      { label: 'Great Racehorses', href: '/racing/great-racehorses' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
    ],
    references: [
      'Keeneland Association — official racetrack and sales history.',
      "Breeders' Cup Limited — World Championships host-site records.",
      'National Museum of Racing and Hall of Fame — Thoroughbred racing history.',
    ],
  },
]

export function allRacingVenueSlugs(): string[] {
  return racingVenues.map((v) => v.slug)
}

export function getRacingVenue(slug: string): RacingVenue | undefined {
  return racingVenues.find((v) => v.slug === slug)
}
