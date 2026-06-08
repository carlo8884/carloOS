/**
 * Racing for Newcomers cluster data -- /racing/racing-for-newcomers/<spoke>
 *
 * Spectator-education spokes that welcome someone to horse racing as a SPORT to
 * watch and understand -- never as something to bet on. Each entry drives one
 * named spoke route (how-to-read-a-race-card, a-day-at-the-races,
 * understanding-racing-silks) with the same idiom as the great-racehorses
 * cluster: key-facts quick-reference, body sections, FAQ, references, related
 * links.
 *
 * NON-WAGERING (QC §1 / racing quality bar §2): this cluster is permanently
 * non-wagering. The race-card page in particular explains program information as
 * racing LITERACY -- what each field tells a spectator about the horse and its
 * connections -- the way one might explain a baseball box score. No odds, no
 * betting types, no handicapping angles, no "value"/"edge" language anywhere.
 *
 * ACCURACY: only well-established, widely-documented facts. No invented stats,
 * no fabricated quotes, no precise figures that vary by jurisdiction stated as
 * universal. Where conventions differ between racing nations or tracks, that is
 * said plainly.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

export interface NewcomerSection {
  id: string
  heading: string
  body: string[]
}

export interface NewcomerFAQ {
  question: string
  answer: string
  answerText: string
}

export interface NewcomerSpoke {
  slug: string
  /** Short title for the hub card. */
  name: string
  /** Card eyebrow on the hub grid. */
  eyebrow: string
  /** Short hub-card summary. */
  cardSummary: string
  /** SEO title (full title with " | Horses.com" appended in the page stays <= 70). */
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
  sections: NewcomerSection[]
  faq: NewcomerFAQ[]
  /** RelatedLinks {label, href}. */
  related: { label: string; href: string }[]
  references: string[]
}

export const racingForNewcomersSpokes: NewcomerSpoke[] = [
  // ───────────────────────────────────────────── HOW TO READ A RACE CARD
  {
    slug: 'how-to-read-a-race-card',
    name: 'How to Read a Race Card',
    eyebrow: 'Racing Literacy',
    cardSummary:
      'Decode the racecard or program field by field: what each entry tells you about the horse, its connections, the distance, the class, the weights, and the form line — as spectator literacy, not handicapping.',
    metaTitle: 'How to Read a Race Card — A Spectator’s Guide',
    description:
      'A plain-language guide to reading a race card as a spectator: what the horse, connections, distance, class, weights, and form figures mean. Non-wagering.',
    kicker: 'Racing for Newcomers · Racing Literacy',
    heroTitle: 'How to Read a Race Card',
    heroSubtitle:
      'A field-by-field guide to the racecard or program — what every line tells you about the horse and its connections, read as racing literacy rather than betting guidance.',
    heroAlt: 'A printed horse-racing program resting on a railing at a racetrack',
    readTime: '8 min',
    intro:
      'The racecard — called a program or, in North America, often the Daily Racing Form past performances — is the printed (or app-based) guide handed to every spectator at the track. To a newcomer it can look like a wall of abbreviations. In fact it is closer to a baseball box score: a compact, conventional way of telling you who is running, who is behind them, and what kind of race it is. This guide explains what each piece of that information means so you can follow the action with confidence. It is spectator literacy, not handicapping.',
    keyFacts: [
      { label: 'What it is', value: 'The printed or digital program listing every race and runner at a meeting' },
      { label: 'Reads like', value: 'A box score — structured, abbreviated, conventional' },
      { label: 'Tells you', value: 'The horse, its connections, distance, surface, class, weight, age/sex, and past form' },
      { label: 'This guide is', value: 'Spectator literacy only — not handicapping or betting advice' },
      { label: 'Conventions vary', value: 'Layout differs between countries, tracks, and program publishers' },
    ],
    sections: [
      {
        id: 'what-a-race-card-is',
        heading: 'What a Race Card Is',
        body: [
          'A race card is the official listing of the races at a meeting and the horses entered in each. At a track you will usually be handed or sold a program; many tracks and racing bodies also publish the same information online or in an app. Each page typically covers one race, with a block of detail for every runner in that race.',
          'The purpose of all that detail is simply to identify and describe the runners: which horse is which, who owns and trains and rides it, how old it is, what weight it carries, and how it has run in the past. Understanding those fields is the difference between watching a blur of colours and following a sport. None of it requires — and this guide does not offer — any betting interpretation.',
        ],
      },
      {
        id: 'the-horse-and-its-connections',
        heading: 'The Horse and Its Connections',
        body: [
          'Each entry begins with the horse: its name, and usually its breeding shown as the sire (father) over the dam (mother), sometimes with the dam’s sire as well. The breeding line tells you the family a horse comes from, which is part of why pedigree pages and bloodstock coverage exist on this site.',
          'Around the horse you will find its "connections" — the people responsible for it. The owner races the horse and registers the colours it runs in. The trainer prepares it and decides where and when it runs. The jockey (or, in harness racing, the driver) rides it on the day. The program lists each of these because they are part of the story of every runner; what each of them actually does is explained in the Horses.com racing-roles reference.',
          'You will also often see the horse’s saddlecloth number and the colours, or "silks", its jockey will wear. Those two things together are how you physically pick your horse out during the race — covered in detail on the understanding-racing-silks page.',
        ],
      },
      {
        id: 'distance-surface-and-class',
        heading: 'Distance, Surface, and Class',
        body: [
          'The header for each race tells you the conditions everyone in it is running under. The distance is how far the race is run — quoted in furlongs (an eighth of a mile) or metres depending on the country. The surface is what they run on: dirt, turf (grass), or a synthetic all-weather track; jump races add hurdles or fences.',
          'The class or grade of the race tells you the level of competition. Racing is organised into a ladder of classes — maiden races for horses that have never won, claiming and allowance races in the middle, and stakes and graded stakes at the top. The program states which class a race is so you know whether you are watching everyday competition or a championship-calibre event. The full ladder is explained on the Race Types & Classes hub.',
          'Some races also carry conditions in the title — restrictions on age, sex, or prior winnings that decide which horses are eligible. These are descriptive, not predictive: they tell you what kind of field has been assembled, not how it will finish.',
        ],
      },
      {
        id: 'weights-age-and-sex',
        heading: 'Weights, Age, and Sex Notation',
        body: [
          'Every entry shows the weight the horse will carry, made up of the rider plus lead weights in the saddle pad to bring each runner to its assigned figure. Weight is assigned to reflect the conditions of the race — for example, younger horses or those with lighter records often carry less. As a spectator, the weight figure simply tells you the load each horse has been set; this guide does not interpret it as a betting signal.',
          'Age is listed because many races are restricted by it, and because a horse’s age shapes its career stage. A racehorse’s official age advances on a standard date each year — 1 January in the Northern Hemisphere and 1 August in the Southern Hemisphere — so all horses foaled in a given season share an official birthday for racing purposes.',
          'Sex is shown with conventional abbreviations: a colt is a young entire (uncastrated) male, a filly a young female, a gelding a castrated male, a mare an older female, and a horse or stallion an older entire male. These terms describe the runner; they are standard racing vocabulary, also defined in the racing glossary.',
        ],
      },
      {
        id: 'reading-the-form-line',
        heading: 'Reading the Form Line',
        body: [
          'The string of numbers and letters beside a horse — often called its "form" — is a compressed history of how it has finished in recent races, read most-recent-last (or, in some formats, most-recent-first; the program will indicate which). A figure is the finishing position; symbols such as a dash, slash, or letters mark gaps between seasons or non-completions such as a pulled-up or fell in a jump race.',
          'Fuller programs expand this into past-performance lines: one row per recent race showing the date, track, distance, class, the weight carried, and where the horse was at various points of the race. Read as history, this is a factual record of what a horse has done — the equivalent of a player’s recent game log in a box score.',
          'It is worth stating plainly: this guide explains the form line as a historical record so you can understand a horse’s background, not as a tool for predicting results or placing bets. How that record might be weighed for wagering is outside the scope of everything on Horses.com.',
        ],
      },
      {
        id: 'not-a-betting-guide',
        heading: 'A Note: This Is Not a Betting Guide',
        body: [
          'Because race cards are often associated with wagering, it is worth being explicit. Everything above is offered as racing literacy — the ability to read a program and understand what it is telling you about the horses, the people, and the race, in the same spirit as learning to read a box score or a starting line-up. It is for enjoying and following the sport as a spectator.',
          'Horses.com does not provide handicapping, odds analysis, selections, tips, or any betting guidance, and nothing on this page should be read as such. If you choose to wager, that is a separate activity governed by your jurisdiction’s racing or gaming authority, and you should consult that authority directly. Our coverage stays with the horses, the sport, and the people behind it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is a race card the same as a betting guide?',
        answer:
          'No. A race card simply identifies and describes the runners — the horses, their connections, the distance, the class, the weights, and past form. Reading it is racing literacy. Horses.com explains what the information means but offers no betting, odds, or handicapping guidance.',
        answerText:
          'No. A race card simply identifies and describes the runners — the horses, their connections, the distance, the class, the weights, and past form. Reading it is racing literacy. Horses.com explains what the information means but offers no betting, odds, or handicapping guidance.',
      },
      {
        question: 'What is the “form” next to a horse’s name?',
        answer:
          'It is a compressed record of how the horse finished in recent races, with symbols marking gaps between seasons or non-completions. It is a historical log — like a player’s recent game results — not a prediction.',
        answerText:
          'It is a compressed record of how the horse finished in recent races, with symbols marking gaps between seasons or non-completions. It is a historical log — like a player’s recent game results — not a prediction.',
      },
      {
        question: 'Why do horses carry different weights?',
        answer:
          'Weight is assigned under the conditions of each race and is made up of the rider plus lead weights in the saddle pad. As a spectator the figure simply tells you the load each horse has been set; this guide does not interpret it as a wagering signal.',
        answerText:
          'Weight is assigned under the conditions of each race and is made up of the rider plus lead weights in the saddle pad. As a spectator the figure simply tells you the load each horse has been set; this guide does not interpret it as a wagering signal.',
      },
      {
        question: 'Why does the program list the owner, trainer, and jockey?',
        answer:
          'Those are the horse’s connections — the people responsible for racing, preparing, and riding it. They are part of the story of every runner, and the silks the jockey wears help you follow the horse during the race. What each role does is covered in the racing-roles reference.',
        answerText:
          'Those are the horse’s connections — the people responsible for racing, preparing, and riding it. They are part of the story of every runner, and the silks the jockey wears help you follow the horse during the race. What each role does is covered in the racing-roles reference.',
      },
    ],
    related: [
      { label: 'Race Types & Classes', href: '/racing/race-types' },
      { label: 'Horse Racing Glossary', href: '/racing/glossary' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Understanding Racing Silks', href: '/racing/racing-for-newcomers/understanding-racing-silks' },
    ],
    references: [
      'The Jockey Club — registration, naming, and official racing age conventions.',
      'Equibase / Daily Racing Form — published past-performance program formats (North America).',
      'AQHA and USTA — program conventions for Quarter Horse and harness (Standardbred) racing.',
      'Horses.com Racing Glossary — plain-language definitions of racing terms.',
    ],
  },

  // ───────────────────────────────────────────── A DAY AT THE RACES
  {
    slug: 'a-day-at-the-races',
    name: 'A Day at the Races',
    eyebrow: 'The Spectator Experience',
    cardSummary:
      'What actually happens on raceday from a spectator’s seat: the paddock, the post parade, the call to post, watching a race, etiquette, what to wear, and family-friendly notes.',
    metaTitle: 'A Day at the Races — A Newcomer’s Guide',
    description:
      'A newcomer’s guide to attending the races: the paddock, post parade, call to post, watching a race, etiquette, and what to wear. A non-wagering spectator guide.',
    kicker: 'Racing for Newcomers · The Spectator Experience',
    heroTitle: 'A Day at the Races',
    heroSubtitle:
      'A newcomer’s walk through raceday — the paddock, the post parade, the call to post, the race itself, and the etiquette and practicalities that make a first visit easy to enjoy.',
    heroAlt: 'Spectators watching horses parade in the paddock before a race',
    readTime: '8 min',
    intro:
      'A day at the races is a sporting outing first and foremost — a chance to see Thoroughbreds up close, watch genuine athletic competition, and soak up an atmosphere that has changed remarkably little in a century. This guide walks a newcomer through how a raceday unfolds, what to look for at each stage, and the small points of etiquette and preparation that make a first visit relaxed and enjoyable. It is written for the spectator; it contains no betting guidance.',
    keyFacts: [
      { label: 'What it is', value: 'A live sporting event built around a card of several races over an afternoon or evening' },
      { label: 'Rhythm', value: 'Roughly 30–40 minutes between races, each with its own paddock and parade' },
      { label: 'Best vantage points', value: 'The paddock, the parade ring, the rail, and the finish line' },
      { label: 'Dress', value: 'Varies from casual to formal depending on the meeting and any dress code' },
      { label: 'Family-friendly', value: 'Many tracks welcome families; check the specific meeting in advance' },
    ],
    sections: [
      {
        id: 'rhythm-of-the-day',
        heading: 'The Rhythm of the Day',
        body: [
          'A raceday is built around a "card" — a sequence of individual races, often eight to twelve, run across an afternoon or evening. Each race is a self-contained event, and there is typically a gap of around half an hour between them. That rhythm is part of the appeal: a cycle of build-up, a few intense minutes of racing, and then a pause to walk the grounds before the next one.',
          'Knowing the structure helps you plan. The program (race card) lists the scheduled "post time" — the intended start — for each race, so you can decide which to watch from the paddock, which from the rail, and when to find food or explore. There is no need to watch every race from the same spot.',
        ],
      },
      {
        id: 'the-paddock',
        heading: 'The Paddock and Parade Ring',
        body: [
          'Before each race the runners are led around the paddock (also called the parade ring or walking ring), where the public can see the horses up close before they are saddled and mounted. This is one of the best parts of the day for a newcomer: you can watch how each horse moves, how it carries itself, and how the grooms and trainers prepare it.',
          'The paddock is also where you will first see the jockeys in their owners’ colours and can match a saddlecloth number to a horse. Watching the paddock is a low-key, free, and genuinely informative way to connect the names in your program to the living animals about to compete.',
        ],
      },
      {
        id: 'post-parade-and-call-to-post',
        heading: 'The Post Parade and Call to Post',
        body: [
          'After the paddock, the horses make their way onto the track for the post parade, walking or cantering past the stands so the crowd — and the officials — can see each runner. Many tracks mark the approach of the start with the "call to post", a short bugle fanfare that is one of racing’s most recognisable traditions and a cue that the race is near.',
          'The horses then make their way to the starting gate (or, in harness racing, behind the mobile starting gate). The moments at the gate are tense and quiet; loading a full field takes care, and the race begins only when the starter is satisfied every runner has a fair start.',
        ],
      },
      {
        id: 'watching-a-race',
        heading: 'Watching a Race',
        body: [
          'During the race itself, the two things that help most are knowing your horse’s saddlecloth number and its jockey’s silks — together they let you pick your runner out of the field even at distance. Many spectators bring binoculars; large tracks also show the running on big screens, and a track announcer calls the race live.',
          'Part of the pleasure of watching live is seeing the shape of a race develop — the early pace, horses moving up or dropping back, and the final surge to the line. You do not need any technical knowledge to enjoy this; following one or two horses and listening to the call is plenty for a first visit.',
        ],
      },
      {
        id: 'etiquette-and-what-to-wear',
        heading: 'Etiquette and What to Wear',
        body: [
          'Raceday etiquette is mostly common courtesy: give horses and handlers room, especially near the paddock and the walkways the runners use, and never use flash photography or sudden movements close to the horses, which can startle them. Follow stewards’ and signage directions about restricted areas.',
          'Dress varies enormously by meeting. An ordinary midweek card is usually casual, while feature days and major festivals can range from smart-casual to formal, sometimes with a published dress code for certain enclosures. If a meeting is known for a dress code, the track will say so in advance — it is worth checking when you buy tickets. Comfortable shoes are always sensible, as racecourses involve a lot of walking.',
        ],
      },
      {
        id: 'family-friendly-notes',
        heading: 'Family-Friendly Notes and Practicalities',
        body: [
          'Many racecourses actively welcome families, and some host dedicated family days with activities for children; others restrict certain enclosures by age. Because policies differ from track to track, check the specific meeting in advance for admission ages, facilities, and whether children go free.',
          'Practical points that make any first visit smoother: arrive with enough time to find parking and your enclosure, bring sun protection or layers for an outdoor venue, and locate the paddock and finish line early so you know where to be. The day is a sporting outing — and approached that way, it is an easy and memorable one. This guide covers the experience only and offers no wagering advice.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I have to bet to enjoy a day at the races?',
        answer:
          'Not at all. A raceday is a live sporting event — the paddock, the parade, the atmosphere, and the racing itself are all there to be enjoyed as a spectator. This guide is written for that experience and contains no betting guidance.',
        answerText:
          'Not at all. A raceday is a live sporting event — the paddock, the parade, the atmosphere, and the racing itself are all there to be enjoyed as a spectator. This guide is written for that experience and contains no betting guidance.',
      },
      {
        question: 'What is the “call to post”?',
        answer:
          'It is a short bugle fanfare, played at many tracks, that signals the horses are heading to the start. It is one of racing’s most recognisable traditions and a cue that the race is about to begin.',
        answerText:
          'It is a short bugle fanfare, played at many tracks, that signals the horses are heading to the start. It is one of racing’s most recognisable traditions and a cue that the race is about to begin.',
      },
      {
        question: 'What should I wear to the races?',
        answer:
          'It depends on the meeting. An ordinary card is usually casual, while feature days and festivals can be smart-casual to formal, sometimes with a published dress code for certain enclosures. Check the meeting in advance, and wear comfortable shoes — racecourses involve a lot of walking.',
        answerText:
          'It depends on the meeting. An ordinary card is usually casual, while feature days and festivals can be smart-casual to formal, sometimes with a published dress code for certain enclosures. Check the meeting in advance, and wear comfortable shoes — racecourses involve a lot of walking.',
      },
      {
        question: 'Are the races family-friendly?',
        answer:
          'Often yes — many tracks welcome families and some run dedicated family days, though certain enclosures may be age-restricted. Policies vary by track, so check the specific meeting in advance for admission ages and facilities.',
        answerText:
          'Often yes — many tracks welcome families and some run dedicated family days, though certain enclosures may be age-restricted. Policies vary by track, so check the specific meeting in advance for admission ages and facilities.',
      },
    ],
    related: [
      { label: 'How to Read a Race Card', href: '/racing/racing-for-newcomers/how-to-read-a-race-card' },
      { label: 'Understanding Racing Silks', href: '/racing/racing-for-newcomers/understanding-racing-silks' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
    ],
    references: [
      'NYRA, Churchill Downs, and comparable track authorities — raceday operations and spectator information.',
      'The Jockey Club — racing colours (silks) and raceday conventions.',
      'USTA — harness raceday format, including the mobile starting gate.',
      'Horses.com Racing Glossary — plain-language definitions of racing terms.',
    ],
  },

  // ───────────────────────────────────────────── UNDERSTANDING RACING SILKS
  {
    slug: 'understanding-racing-silks',
    name: 'Understanding Racing Silks',
    eyebrow: 'Following the Field',
    cardSummary:
      'What racing silks are, how owners register their colours, a brief history of the tradition, and how silks plus saddlecloth numbers let you follow a horse through a race.',
    metaTitle: 'Understanding Racing Silks — A Spectator’s Guide',
    description:
      'What racing silks are, how owners register their colours, and how they help a spectator follow a horse during a race. A non-wagering guide to racing colours.',
    kicker: 'Racing for Newcomers · Following the Field',
    heroTitle: 'Understanding Racing Silks',
    heroSubtitle:
      'The bright jackets a jockey wears are an owner’s registered colours — a centuries-old identification system that is also the easiest way for a spectator to follow a horse through a race.',
    heroAlt: 'A rack of brightly coloured racing silks hanging in a jockeys’ room',
    readTime: '7 min',
    intro:
      'The vivid jackets and caps that jockeys wear are called silks (or, more formally, racing colours). They are not decoration: they are a registered identification system that tells you, at a glance, which owner a horse runs for — and they are the single most useful thing a spectator can learn to follow a race. This guide explains what silks are, how they are registered, where the tradition comes from, and how to use them to keep track of your horse. It is a spectator reference and contains no betting guidance.',
    keyFacts: [
      { label: 'What they are', value: 'A jockey’s jacket and cap in an owner’s registered colours and pattern' },
      { label: 'Purpose', value: 'To identify which owner each horse runs for — and to let spectators follow it' },
      { label: 'Registered with', value: 'The national racing authority (e.g. The Jockey Club in the US)' },
      { label: 'Material', value: 'Historically silk; today usually lightweight synthetics' },
      { label: 'Used with', value: 'The saddlecloth number, which identifies the individual horse' },
    ],
    sections: [
      {
        id: 'what-silks-are',
        heading: 'What Racing Silks Are',
        body: [
          'Racing silks are the coloured jacket and cap a jockey wears in a race. Each set of colours belongs to an owner, not to the jockey or the horse: the same owner’s silks are worn by whichever jockey rides any of that owner’s runners. A set is defined by its colours and a pattern — solid, striped, hooped (horizontal bands), starred, spotted, chevroned, and so on — with the cap sometimes in a different colour or pattern again.',
          'Despite the name, modern "silks" are usually made of lightweight synthetic fabrics rather than silk, chosen for durability and for the rider’s comfort and safety. The traditional name has simply stuck, the way many sporting terms outlive the materials that gave rise to them.',
        ],
      },
      {
        id: 'how-colours-are-registered',
        heading: 'How Owners Register Their Colours',
        body: [
          'Owners do not simply choose any colours they like and wear them. In each racing nation the colours are registered with and administered by the national authority — in the United States, The Jockey Club; in other countries, the equivalent governing body. Registration ensures that within a jurisdiction no two active owners carry exactly the same colours, which is what makes silks a reliable identification system.',
          'Because the number of distinct, clearly-readable colour-and-pattern combinations is limited, established sets of colours can be valued and passed down, and well-known owners are often strongly associated with a particular livery. New owners register an available combination, sometimes choosing personally meaningful colours within what the rules allow.',
        ],
      },
      {
        id: 'a-brief-history',
        heading: 'A Brief History of the Tradition',
        body: [
          'Distinguishing competitors by colour is an old idea, and organised racing formalised it early. In British racing the practice of registering owners’ colours dates back several centuries, and the convention spread with the sport around the world. The underlying problem it solves is timeless: in a field of broadly similar horses moving at speed, the crowd and the officials need a fast, unambiguous way to tell them apart.',
          'Over time the registration of colours became part of the formal administration of racing, handled by the same authorities that register horses and license participants. The tradition has proved durable precisely because it is useful — even with modern saddlecloth numbers and big-screen replays, a glance at the silks remains the quickest way to locate a horse.',
        ],
      },
      {
        id: 'using-silks-to-follow-a-race',
        heading: 'How Silks Help You Follow a Race',
        body: [
          'For a spectator, silks are the practical key to watching a race. The program lists, beside each horse, the owner’s colours and the saddlecloth number the horse will carry. If you note those two things for the horse you want to follow — the colours and the number — you can pick it out of the field as the race unfolds, even from across the track.',
          'The saddlecloth number identifies the individual horse and is often colour-coded by post position at many tracks, while the silks identify the owner. Used together, they answer the two questions a spectator asks during a race: which horse is that, and who does it run for. This is the same field-following skill described in the race-card and day-at-the-races guides.',
          'None of this requires any wagering interest. Learning to read silks is simply how you turn a fast-moving pack into individual horses you can watch, cheer, and remember.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why are they called “silks” if they aren’t made of silk?',
        answer:
          'The name is traditional. Racing colours were historically made of silk, and the term stuck even though modern versions are usually lightweight synthetic fabrics chosen for durability, comfort, and safety.',
        answerText:
          'The name is traditional. Racing colours were historically made of silk, and the term stuck even though modern versions are usually lightweight synthetic fabrics chosen for durability, comfort, and safety.',
      },
      {
        question: 'Do silks belong to the owner, the jockey, or the horse?',
        answer:
          'To the owner. The same registered colours are worn by whichever jockey rides any of that owner’s horses, which is why silks identify the owner rather than the rider or the individual horse.',
        answerText:
          'To the owner. The same registered colours are worn by whichever jockey rides any of that owner’s horses, which is why silks identify the owner rather than the rider or the individual horse.',
      },
      {
        question: 'How do I use silks to follow my horse during a race?',
        answer:
          'Note two things from the program: the owner’s colours and the horse’s saddlecloth number. Together they let you pick that horse out of the field as the race develops, even at a distance — no betting knowledge required.',
        answerText:
          'Note two things from the program: the owner’s colours and the horse’s saddlecloth number. Together they let you pick that horse out of the field as the race develops, even at a distance — no betting knowledge required.',
      },
      {
        question: 'Can two owners have the same colours?',
        answer:
          'Within a single racing jurisdiction, no. Colours are registered with the national racing authority so that each active owner’s combination is distinct, which is what makes silks a reliable way to tell runners apart.',
        answerText:
          'Within a single racing jurisdiction, no. Colours are registered with the national racing authority so that each active owner’s combination is distinct, which is what makes silks a reliable way to tell runners apart.',
      },
    ],
    related: [
      { label: 'How to Read a Race Card', href: '/racing/racing-for-newcomers/how-to-read-a-race-card' },
      { label: 'A Day at the Races', href: '/racing/racing-for-newcomers/a-day-at-the-races' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Horse Racing Glossary', href: '/racing/glossary' },
    ],
    references: [
      'The Jockey Club — registration and administration of racing colours (silks) in the United States.',
      'Comparable national racing authorities — colour registration in other jurisdictions.',
      'National Museum of Racing and Hall of Fame — heritage of racing colours.',
      'Horses.com Racing Glossary — plain-language definitions of racing terms.',
    ],
  },
]

export function allNewcomerSpokeSlugs(): string[] {
  return racingForNewcomersSpokes.map((s) => s.slug)
}

export function getNewcomerSpoke(slug: string): NewcomerSpoke | undefined {
  return racingForNewcomersSpokes.find((s) => s.slug === slug)
}
