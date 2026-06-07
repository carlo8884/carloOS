// Training & Safety cluster (Pillar B — non-wagering racing vertical).
// Pure educational content explaining how racehorses are trained, who cares for
// them, and how the sport manages safety. A trust-safe topic (zero wagering
// surface) that builds topical authority around the human + animal-welfare side
// of racing. NO odds, picks, EV, handicapping, or wagering of any kind.
//
// Trust posture (QC §1): factual/educational explanation only. Injury content is
// kept general and defers to qualified veterinarians for any individual horse —
// no medical advice, no fabricated clinical credentials. "Editorial team" voice.

export interface TrainingSafetyTopic {
  slug: string;
  name: string;
  /** One-line summary (meta + list cards). */
  short: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  /** Quick-reference facts. */
  keyFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const trainingSafetyTopics: TrainingSafetyTopic[] = [
  {
    slug: 'how-racehorses-are-trained',
    name: 'How Racehorses Are Trained',
    short:
      'The daily gallops, breezes, and conditioning work that turn a young Thoroughbred into a fit racehorse.',
    intro:
      'Training a racehorse is a patient, incremental process built around a steady daily routine. Most of a racehorse’s exercise is not flat-out speed but controlled cardiovascular and musculoskeletal conditioning — long, slow distance work layered with occasional faster pieces. The art of the trainer lies in building fitness gradually enough that the horse stays sound while still arriving at a race ready to run its best.',
    sections: [
      {
        heading: 'The daily routine at the barn',
        body: [
          'Life on the backstretch starts before dawn. Horses are typically exercised during a morning “training window” when the track is open and freshly harrowed. A horse’s day usually involves being fed, having its legs checked and groomed, going out for its morning exercise, then being walked to cool down, bathed, and returned to the stall to rest. The same rhythm repeats most days of the week, with lighter days mixed in.',
          'Consistency is the point. A racehorse is an endurance and power athlete, and like human athletes its fitness is built through a repeatable schedule rather than occasional hard efforts. Trainers keep detailed records of how each horse trains, eats, and recovers so they can spot small changes early.',
        ],
      },
      {
        heading: 'Gallops, breezing, and works',
        body: [
          'Most days a horse will “gallop” — a steady, controlled canter over a set distance that builds aerobic fitness without much strain. Galloping is the foundation of a training program and makes up the bulk of a horse’s weekly mileage.',
          'Periodically a horse is asked for a faster, timed effort known as a “breeze” or a “work.” In a breeze the horse runs a measured distance near race pace so the trainer can gauge its fitness and sharpness. Works are usually spaced several days apart and are recorded publicly at many tracks, forming an official record of a horse’s preparation. The interval between fast works lets the horse recover and adapt — the actual fitness gains happen during rest, not during the effort.',
        ],
      },
      {
        heading: 'Building toward a race',
        body: [
          'A typical preparation moves from long, slow distance early on to progressively sharper work as a target race approaches. Young or returning horses begin with weeks of walking, trotting, and easy galloping before any speed is introduced. The goal is to peak a horse’s condition for race day rather than to exhaust it in training, which is why many trainers ease off in the final days before a start.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Most common workout', value: 'The daily gallop — steady aerobic conditioning' },
      { label: 'Fast timed effort', value: 'A “breeze” or “work,” spaced days apart' },
      { label: 'Training window', value: 'Early-morning hours when the track is open' },
      { label: 'Guiding principle', value: 'Build fitness gradually to keep the horse sound' },
    ],
    faq: [
      {
        question: 'How often do racehorses train?',
        answer:
          'Most racehorses exercise on the track most mornings, but the bulk of that work is light-to-moderate galloping. Faster timed efforts (“breezes”) are far less frequent — typically spaced several days apart — to allow recovery and adaptation.',
      },
      {
        question: 'What is the difference between a gallop and a breeze?',
        answer:
          'A gallop is a steady, controlled canter that builds aerobic fitness with little strain and makes up most of a horse’s weekly mileage. A breeze (or “work”) is a faster, measured effort near race pace used to sharpen and assess the horse.',
      },
    ],
    related: ['racehorse-fitness-and-conditioning', 'the-backstretch-workforce', 'raceday-routine-and-safety'],
  },
  {
    slug: 'the-backstretch-workforce',
    name: 'The Backstretch Workforce',
    short:
      'The grooms, exercise riders, hot walkers, and assistant trainers whose daily care keeps racehorses healthy.',
    intro:
      'Behind every racehorse is a team of skilled workers who live and work in the stable area known as the “backstretch” or “backside.” These are the people who handle, exercise, feed, and watch over the horses every day — often the first to notice when something is wrong. Their hands-on knowledge is the foundation of both performance and welfare in racing.',
    sections: [
      {
        heading: 'The core roles',
        body: [
          'A groom is responsible for the daily care of a small string of horses — feeding, grooming, bandaging, mucking out stalls, and monitoring each horse’s condition. Because grooms see their horses morning and night, they are frequently the first to detect heat in a leg, a change in appetite, or an off mood that signals a problem.',
          'An exercise rider gallops horses during morning training. Exercise riders must be light, fit, and highly skilled, able to rate a horse’s pace and relay detailed feedback to the trainer about how the horse moved and felt. A hot walker leads horses by hand to cool them down after exercise, walking them in slow circles until their breathing and temperature settle.',
        ],
      },
      {
        heading: 'Assistant trainers and the chain of responsibility',
        body: [
          'An assistant trainer helps run the operation, often overseeing the string at one track while the head trainer is elsewhere, and coordinating the work of grooms, riders, and walkers. The structure means responsibility for each horse passes through several experienced sets of eyes every day.',
          'This layered attention is a welfare safeguard. With multiple skilled people observing a horse during feeding, grooming, exercise, and cooling out, subtle warning signs are more likely to be caught early and reported up the chain to the trainer and, when needed, the veterinarian.',
        ],
      },
      {
        heading: 'A demanding, early-morning profession',
        body: [
          'Backstretch work is physically demanding and starts in the dark, seven days a week. Many backstretch workers live on or near the track, and racing organizations and charities increasingly provide on-site services such as health care, meals, and education to support this essential workforce. Recognizing the skill and reliability of these workers is central to understanding how the sport actually functions day to day.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Groom', value: 'Daily care of a string; first to spot health changes' },
      { label: 'Exercise rider', value: 'Gallops horses and reports back to the trainer' },
      { label: 'Hot walker', value: 'Walks horses to cool them down after exercise' },
      { label: 'Assistant trainer', value: 'Oversees the string and coordinates the team' },
    ],
    faq: [
      {
        question: 'What is the backstretch in horse racing?',
        answer:
          'The backstretch (or “backside”) is the stable area of a racetrack where horses are housed and cared for, and where the grooms, exercise riders, hot walkers, and trainers work each day.',
      },
      {
        question: 'What does a hot walker do?',
        answer:
          'A hot walker leads a horse by hand in slow circles after exercise to cool it down gradually, letting its breathing, heart rate, and body temperature return to normal before it goes back to its stall.',
      },
    ],
    related: ['how-racehorses-are-trained', 'raceday-routine-and-safety', 'equine-injury-prevention'],
  },
  {
    slug: 'track-safety-and-surfaces',
    name: 'Track Safety and Surfaces',
    short:
      'How dirt, turf, and synthetic surfaces differ, why maintenance matters, and how tracks manage safety.',
    intro:
      'The racing surface is one of the most important safety factors in the sport. Horses race on three main types of surface — dirt, turf, and synthetic — and each behaves differently underfoot. Beyond the surface itself, consistent, science-informed track maintenance is what keeps footing uniform and predictable, which is central to reducing the risk of injury.',
    sections: [
      {
        heading: 'Dirt, turf, and synthetic',
        body: [
          'Dirt tracks are the most common surface in North American racing. A typical dirt track is a layered system — a cushion of loose material over a firmer base — and its behavior changes with moisture, from “fast” when dry to “sloppy” after rain. Turf (grass) racing, traditional in Europe and used widely worldwide, provides a softer, more cushioned surface but is sensitive to weather and can become firm or yielding depending on rainfall.',
          'Synthetic surfaces (sometimes called all-weather tracks) blend materials such as sand, fibers, and a wax or polymer coating. They were developed in part to provide more consistent footing across weather conditions and have been studied for their drainage and uniformity. Each surface has trade-offs, and many tracks offer more than one.',
        ],
      },
      {
        heading: 'Why maintenance is a safety issue',
        body: [
          'A surface is only as safe as it is consistent. Track maintenance crews harrow, water, seal, and measure the racing surface throughout the day to keep the depth and moisture uniform across the whole oval. Inconsistent footing — soft in one place, hard in another — is a recognized risk factor, so crews work to eliminate variation.',
          'Modern tracks increasingly use measurement tools to monitor surface properties such as moisture content and cushion depth, treating the track as a piece of equipment to be calibrated rather than left to chance. Weather monitoring also informs decisions about when and how to adjust the surface.',
        ],
      },
      {
        heading: 'Surface and the racing program',
        body: [
          'Because surfaces ride so differently, racing programs note the surface for each race, and many horses show a clear preference for dirt or turf. From a safety standpoint, the key point is that no single surface is universally “safest” — what matters most is that whatever surface is in use is well-built, well-drained, and meticulously maintained for consistency.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Three main surfaces', value: 'Dirt, turf (grass), and synthetic' },
      { label: 'Dirt structure', value: 'A loose cushion over a firmer base; changes with moisture' },
      { label: 'Synthetic aim', value: 'More consistent footing across weather conditions' },
      { label: 'Maintenance goal', value: 'Uniform depth and moisture across the whole track' },
    ],
    faq: [
      {
        question: 'What are the different horse racing surfaces?',
        answer:
          'The three main surfaces are dirt, turf (grass), and synthetic (all-weather). Each rides differently and responds differently to weather, and many tracks offer more than one.',
      },
      {
        question: 'Which racing surface is safest?',
        answer:
          'No single surface is universally safest. What matters most is that the surface in use is well-constructed, well-drained, and consistently maintained, since uneven footing is a recognized risk factor.',
      },
    ],
    related: ['equine-injury-prevention', 'raceday-routine-and-safety', 'how-racehorses-are-trained'],
  },
  {
    slug: 'equine-injury-prevention',
    name: 'Equine Injury Prevention',
    short:
      'How soundness monitoring, veterinary checks, and proper warm-up help keep racehorses safe — a general overview.',
    intro:
      'Keeping racehorses safe is a shared responsibility involving trainers, grooms, regulatory veterinarians, and track officials. Injury prevention in racing centers on watching each horse closely for early signs of trouble, following structured veterinary oversight, and preparing the horse properly before exercise. This is a general educational overview; any questions about a specific horse’s health should be directed to a qualified veterinarian who can examine the animal.',
    sections: [
      {
        heading: 'Soundness monitoring and daily observation',
        body: [
          'Much of injury prevention happens long before race day, through daily observation by the people who handle the horse. Grooms and trainers routinely check legs for heat, swelling, or sensitivity, watch how a horse moves at the walk and gallop, and note appetite and demeanor. The aim is to catch small problems early, when rest or a change in routine can prevent them from becoming serious.',
          'Many programs combine this hands-on watchfulness with record-keeping, so patterns — a horse that is repeatedly “not quite right” after certain work — become visible over time. Identifying a horse that needs a break is itself a core part of keeping it sound.',
        ],
      },
      {
        heading: 'Veterinary oversight on the regulatory side',
        body: [
          'On race day, horses in many jurisdictions are examined by regulatory (official) veterinarians who observe them for soundness before they are allowed to run, and a horse with any concern can be scratched. Pre-race inspections, review of a horse’s history, and observation in the paddock and during the warm-up are standard safeguards in well-run racing programs.',
          'These checks are general protective measures, not a substitute for individualized veterinary care. Decisions about diagnosis, treatment, or whether a particular horse is fit to train or race rest with qualified veterinarians who can physically examine the animal.',
        ],
      },
      {
        heading: 'Warm-up and conditioning as protection',
        body: [
          'Proper preparation reduces risk. A gradual warm-up before fast exercise helps prepare muscles, tendons, and joints for effort, and appropriate, progressive conditioning builds the durability a horse needs to handle the demands of racing. Rushing fitness or skipping warm-up is widely understood to raise injury risk, which is why patient, well-structured programs are considered both a performance and a welfare practice.',
        ],
      },
    ],
    keyFacts: [
      { label: 'First line of defense', value: 'Daily observation by grooms and trainers' },
      { label: 'Race-day safeguard', value: 'Pre-race exams by regulatory veterinarians' },
      { label: 'Key practice', value: 'Gradual warm-up and progressive conditioning' },
      { label: 'Important note', value: 'For any individual horse, consult a qualified veterinarian' },
    ],
    faq: [
      {
        question: 'How are racehorse injuries prevented?',
        answer:
          'Through a combination of daily soundness monitoring by grooms and trainers, regulatory veterinary inspections before racing, and proper warm-up and progressive conditioning. The goal is to catch problems early and prepare horses well. This is general information — questions about a specific horse should go to a qualified veterinarian.',
      },
      {
        question: 'Who decides whether a horse is fit to race?',
        answer:
          'In well-regulated racing, regulatory veterinarians examine horses for soundness before they run and can scratch any horse of concern. Individual diagnosis and treatment decisions rest with qualified veterinarians who can examine the horse.',
      },
    ],
    related: ['track-safety-and-surfaces', 'racehorse-fitness-and-conditioning', 'raceday-routine-and-safety'],
  },
  {
    slug: 'racehorse-fitness-and-conditioning',
    name: 'Racehorse Fitness and Conditioning',
    short:
      'How equine fitness is built through progressive work, interval-style efforts, and peaking for a target race.',
    intro:
      'A racehorse is a finely tuned athlete, and its fitness is built deliberately over weeks and months. Conditioning aims to develop the cardiovascular system, muscle, bone, and tendon strength a horse needs to race without breaking down. The central challenge is to build that fitness progressively, allowing the body to adapt, and then to time peak condition to coincide with a target race.',
    sections: [
      {
        heading: 'How fitness is built',
        body: [
          'Conditioning begins with a base phase of long, slow distance work — weeks of walking, trotting, and easy galloping that develop aerobic capacity and gradually strengthen bone and soft tissue. This foundation is essential: tendons, ligaments, and bone adapt more slowly than muscle, so a horse rushed into fast work before its frame is ready is at greater risk.',
          'As the base is established, trainers introduce more demanding work to build the speed and stamina specific to racing. The progression is intentional and individual — every horse adapts at its own rate, and good conditioning respects those differences rather than forcing a fixed timetable.',
        ],
      },
      {
        heading: 'Interval-style work and recovery',
        body: [
          'Faster conditioning often uses an interval approach: short, repeated efforts at speed separated by recovery, which improves the horse’s capacity to work hard and recover quickly. Crucially, the fitness gains occur during recovery, when the body adapts to the stress of the previous effort. This is why spacing between hard works matters as much as the works themselves, and why overtraining — too much hard work without adequate recovery — is counterproductive and risky.',
        ],
      },
      {
        heading: 'Peaking for a race',
        body: [
          'The goal of a campaign is to bring a horse to its best on race day. As a target race nears, many trainers sharpen the horse with one or more fast works, then ease back so the horse arrives fresh rather than fatigued. Maintaining peak fitness is a balancing act — a horse can be over-raced or over-trained as easily as under-prepared — so trainers space races and plan rest to keep horses sound and competitive over a season.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Base phase', value: 'Long, slow distance to build aerobic and structural strength' },
      { label: 'Adaptation note', value: 'Bone and tendon strengthen more slowly than muscle' },
      { label: 'Interval work', value: 'Repeated efforts with recovery; gains happen during rest' },
      { label: 'Campaign goal', value: 'Peak the horse’s condition for a target race' },
    ],
    faq: [
      {
        question: 'How long does it take to get a racehorse fit?',
        answer:
          'Building race fitness typically takes weeks to months, starting with a base of long, slow distance work before faster conditioning is added. The timeline is individual, because each horse’s bone and soft tissue adapt at their own pace.',
      },
      {
        question: 'Why do trainers space out fast workouts?',
        answer:
          'Because fitness gains happen during recovery, not during the effort itself. Spacing hard works lets the horse adapt to the previous stress and reduces the risk of overtraining, which can lead to injury.',
      },
    ],
    related: ['how-racehorses-are-trained', 'equine-injury-prevention', 'raceday-routine-and-safety'],
  },
  {
    slug: 'raceday-routine-and-safety',
    name: 'Race-Day Routine and Safety',
    short:
      'From the paddock and post parade to the starting gate and outriders — the protocols that keep race day safe.',
    intro:
      'Race day follows a carefully choreographed routine designed for both order and safety. From the moment a horse leaves the barn to the moment it returns, a series of established steps — saddling in the paddock, the post parade, loading at the gate, and the presence of outriders — ensures that horses and riders move safely through the day under the watch of trained officials.',
    sections: [
      {
        heading: 'The paddock and post parade',
        body: [
          'Before a race, horses are brought to the paddock, where they are saddled under supervision and walked in a ring. The paddock is also where officials and the public can observe each horse’s condition and demeanor. Jockeys mount here, and the horses then proceed onto the track for the “post parade,” walking or jogging past the stands toward the starting gate.',
          'This phase is more than ceremony. It lets horses warm up and acclimate to the track and crowd, and it gives officials and veterinarians a final chance to observe each runner moving before it races.',
        ],
      },
      {
        heading: 'The starting gate',
        body: [
          'Loading the starting gate is a specialized, safety-critical task handled by a trained gate crew. Horses are loaded calmly and in order, and assistant starters stand with each horse to keep it settled until the gates open simultaneously. Horses are schooled at the gate during training so that loading is familiar and low-stress, which reduces the risk of incidents at the start.',
          'The gate crew’s job is to ensure every horse is standing squarely and ready before the field is released, so the race begins fairly and safely for both horses and riders.',
        ],
      },
      {
        heading: 'Outriders and on-track protocols',
        body: [
          'Throughout race-day exercise and racing, mounted “outriders” patrol the track on experienced horses. Their role is safety: they help control loose horses, assist riders in trouble, escort horses to and from the gate, and keep order on the track. After a race, horses are pulled up, returned to be unsaddled and cooled out, and the cycle of care begins again. These layered protocols — supervised paddock, post parade, professional gate crew, and outriders — form the safety framework that surrounds every race.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Paddock', value: 'Where horses are saddled and observed before a race' },
      { label: 'Post parade', value: 'Horses warm up and pass the stands toward the gate' },
      { label: 'Starting gate', value: 'Loaded by a trained gate crew and assistant starters' },
      { label: 'Outriders', value: 'Mounted patrol who manage safety on the track' },
    ],
    faq: [
      {
        question: 'What happens before a horse race starts?',
        answer:
          'Horses are saddled and observed in the paddock, jockeys mount, and the field proceeds to the track for the post parade before being loaded into the starting gate by a trained gate crew. Each step lets officials observe the horses and keeps the start orderly and safe.',
      },
      {
        question: 'What does an outrider do?',
        answer:
          'An outrider is a mounted rider on an experienced horse who patrols the track for safety — helping catch loose horses, assisting riders in trouble, escorting horses to the gate, and keeping order during training and racing.',
      },
    ],
    related: ['how-racehorses-are-trained', 'the-backstretch-workforce', 'track-safety-and-surfaces'],
  },
];

export function allTrainingSafetySlugs(): string[] {
  return trainingSafetyTopics.map((t) => t.slug);
}

export function getTrainingSafetyTopic(slug: string): TrainingSafetyTopic | undefined {
  return trainingSafetyTopics.find((t) => t.slug === slug);
}
