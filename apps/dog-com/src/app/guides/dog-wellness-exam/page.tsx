import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Wellness Exam — What to Expect & How to Choose a Vet | Dog.com',
  description:
    'What happens at a dog wellness exam, how often to go by life stage, how to choose a veterinarian, and the questions to ask to get the most from every visit.',
  path: '/guides/dog-wellness-exam',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Wellness Exam — What to Expect and How to Choose a Veterinarian',
  description:
    'Owner reference to the canine wellness exam: the head-to-tail physical, life-stage visit frequency, choosing a veterinarian, and questions to ask.',
  url: 'https://dog.com/guides/dog-wellness-exam',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Wellness Exam — What to Expect',
  description:
    'What happens during a routine canine wellness examination and how to choose a veterinarian.',
  url: 'https://dog.com/guides/dog-wellness-exam',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-11',
})

const FAQS = [
  {
    question: 'How often should a healthy dog see the vet?',
    answer:
      'AAHA Canine Life Stage Guidelines recommend at least an annual wellness exam for healthy adult dogs, twice-yearly visits for senior dogs (because problems progress faster and twice-yearly checks catch them earlier), and a series of frequent puppy visits in the first months for vaccinations and growth monitoring. Dogs with chronic conditions need a schedule set by their veterinarian. The visit is preventive — the goal is to find problems while they are still small and cheap to manage.',
  },
  {
    question: 'What does the vet actually do during a wellness exam?',
    answer:
      'A wellness exam centers on a head-to-tail physical: weight and body condition score, temperature and other vital signs, eyes, ears, mouth and teeth, listening to the heart and lungs, palpating the abdomen and lymph nodes, checking the skin and coat, and assessing joints and gait. The veterinarian also reviews diet, behavior, parasite prevention, and vaccination status, and may recommend screening bloodwork or a fecal test depending on age and risk. You should expect a conversation about anything you have noticed at home.',
  },
  {
    question: 'How do I choose a good veterinarian?',
    answer:
      'Look for a clinic that is convenient enough that you will actually go, communicates clearly, and is accredited where possible — AAHA accreditation is voluntary and signals a clinic that has met defined standards of care. Consider the range of services, after-hours or emergency arrangements, and whether the staff explain their reasoning and respect your questions. A good fit is one where you feel comfortable raising concerns and where the team partners with you rather than rushing you. Meeting the practice for a healthy-pet visit first is a low-pressure way to assess fit.',
  },
  {
    question: 'How should I prepare for a wellness visit?',
    answer:
      'Bring any prior medical records if the dog is new to the clinic, a current list of medications and supplements with doses, the name of the food and roughly how much your dog eats, and a written list of any changes you have noticed — appetite, drinking, energy, lumps, limping, or behavior. A fresh fecal sample is often useful; a fecal-sample collection kit and leak-proof specimen bags keep it from leaking in the car. Note specific questions in advance so you do not forget them in the room. If your dog is anxious at the vet, bring high-value vet-visit treats and ask about a calm-handling or low-stress approach when you book.',
  },
  {
    question: 'Is a wellness exam worth it if my dog seems healthy?',
    answer:
      'Yes. Dogs instinctively hide illness, and many serious conditions — dental disease, heart murmurs, early kidney or endocrine disease, small masses — produce no obvious signs to an owner until they are advanced. A trained physical exam, paired with age-appropriate screening, is designed to catch these early, when they are far easier and less costly to manage. The wellness visit is also where vaccination, parasite prevention, weight, and nutrition are reviewed before they become problems.',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogWellnessExamPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'The Dog Wellness Exam — What to Expect and How to Choose a Vet',
          subtitle:
            'The routine wellness exam is the backbone of preventive care: a structured head-to-tail check designed to find problems while they are still small. This guide walks through exactly what happens at a wellness visit, how often to go by life stage, how to choose a veterinarian who fits, and the questions that get you the most from every appointment.',
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Dog Wellness Exam', href: '/guides/dog-wellness-exam' },
        ]}
        relatedLinks={[{ title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'Find a Veterinary Specialist', href: '/find-a-vet', category: 'Vets' }, { title: 'Dog Vaccinations', href: '/health/dog-vaccinations', category: 'Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Health' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Wellness Exams Matter', href: '#why' },
                { label: 'How Often, by Life Stage', href: '#frequency' },
                { label: 'The Head-to-Tail Exam', href: '#exam' },
                { label: 'Screening Tests', href: '#screening' },
                { label: 'Choosing a Veterinarian', href: '#choosing' },
                { label: 'Questions to Ask', href: '#questions' },
                { label: 'How to Prepare', href: '#prepare' },
                { label: 'Reducing Vet Stress', href: '#stress' },
                { label: 'Wellness-Visit Kit', href: '#kit' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Find a Veterinary Specialist', href: '/find-a-vet' },
                { label: 'Dog Vaccinations', href: '/health/dog-vaccinations' },
                { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
                { label: 'Body Condition Score', href: '/guides/dog-body-condition-score' },
                { label: 'Take Vital Signs at Home', href: '/guides/how-to-take-dogs-temperature' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Care Tips"
              subtitle="Evidence-based guidance every week."
              source="guide-wellness"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-06-11T00:00:00Z"
            updatedAt="2026-09-05T00:00:00Z"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the wellness-visit kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Wellness-visit kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the appointment-prep notes — a
              fecal-sample collection kit so a fresh
              stool sample is ready if the clinic asks,
              leak-proof specimen bags so it does not
              leak in the car, and high-value vet-visit
              treats for low-stress handling in the
              exam room. Educational checklist, not a
              diagnosis and not a first-aid wound kit.
              Gauze, Vetrap, saline flush, muzzles, and
              carriers stay on the first-aid-kit guide.
              Thermometers stay on the home-vitals
              guide. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Wellness-visit kit checklist"
              subtitle="Email the fecal-sample-kit, specimen-bag, and vet-visit-treat notes. No spam."
              ctaText="Email my wellness-visit kit checklist"
              source="guides-dog-wellness-exam-under-hero"
            />
          </div>

          <CalloutBox variant="evidence" title="TL;DR — What you need to know">
            <p>
              <strong>Frequency:</strong> annual for healthy adults, twice yearly for seniors, a frequent series for puppies (per AAHA Canine Life Stage Guidelines).
            </p>
            <p>
              <strong>The visit:</strong> a head-to-tail physical plus a review of diet, weight, parasite prevention, vaccines, behavior, and any age-appropriate screening. The point is to catch problems early, before you would notice them at home.
            </p>
          </CalloutBox>

          <h2 id="why">Why Wellness Exams Matter — Even for a Healthy Dog</h2>
          <DropCap>
            Dogs are evolved to conceal illness. A dog in early kidney disease, with a developing heart murmur, with painful dental disease, or with a small new mass will very often act entirely normal at home until the condition is well advanced. By the time an owner notices a clear sign, the easy window to intervene has frequently passed. The wellness exam exists to close that gap: a trained set of hands and eyes, going over the dog in a systematic order, catches things that hiding behavior and a loving but untrained owner&rsquo;s eye will miss.
          </DropCap>
          <p>
            Preventive care is also cheaper and less stressful than crisis care. Finding early dental disease and treating it is a smaller undertaking than extracting badly diseased teeth later. Catching weight gain at the wellness visit — using the <a href="/guides/dog-body-condition-score" className="text-brand-primary hover:underline">body condition score</a> — heads off the cascade of joint and metabolic problems that obesity drives. The wellness exam is where a dog&rsquo;s baseline gets recorded, so that next year&rsquo;s comparison actually means something.
          </p>

          <h2 id="frequency">How Often to Go, by Life Stage</h2>
          <p>
            The AAHA Canine Life Stage Guidelines tie visit frequency to life stage rather than a flat rule, because the rate at which problems develop changes across a dog&rsquo;s life.
          </p>
          <ul>
            <li><strong>Puppy (roughly first 6 months):</strong> a series of visits every few weeks for the vaccination series, deworming, growth and development checks, and early advice on socialization, nutrition, and spay/neuter planning.</li>
            <li><strong>Young adult and adult:</strong> at least an annual wellness exam for healthy dogs, with vaccination and parasite-prevention review.</li>
            <li><strong>Senior:</strong> twice-yearly exams are recommended, because a year is a large fraction of a senior dog&rsquo;s remaining life and disease progresses faster — twice-yearly checks catch trends sooner. See our <a href="/health/senior-dog-care" className="text-brand-primary hover:underline">senior dog care</a> guide.</li>
            <li><strong>Any dog with a chronic condition:</strong> a schedule set individually by the veterinarian.</li>
          </ul>

          <h2 id="exam">The Head-to-Tail Physical Exam</h2>
          <p>
            A thorough wellness exam follows a consistent order so nothing is skipped. What the veterinarian typically assesses:
          </p>
          <ul>
            <li><strong>Weight and body condition score</strong> — recorded and compared to prior visits to catch drift.</li>
            <li><strong>Vital signs</strong> — temperature, heart rate, respiratory rate (you can learn to check these at home, covered in our <a href="/guides/how-to-take-dogs-temperature" className="text-brand-primary hover:underline">vital signs guide</a>).</li>
            <li><strong>Eyes</strong> — clarity, discharge, signs of cataract, redness, or pressure changes.</li>
            <li><strong>Ears</strong> — odor, discharge, redness, or signs of infection or mites.</li>
            <li><strong>Mouth and teeth</strong> — tartar, gum inflammation, fractured teeth, masses; dental disease is one of the most common findings.</li>
            <li><strong>Heart and lungs</strong> — auscultation with a stethoscope to detect murmurs, arrhythmias, or abnormal lung sounds.</li>
            <li><strong>Abdomen</strong> — palpation to feel organ size and shape and to detect pain or masses.</li>
            <li><strong>Lymph nodes</strong> — checked for enlargement.</li>
            <li><strong>Skin and coat</strong> — for parasites, lumps, hot spots, and overall condition.</li>
            <li><strong>Musculoskeletal and gait</strong> — joints flexed and the dog observed moving for stiffness, pain, or lameness.</li>
          </ul>
          <p>
            Alongside the physical, expect a discussion of diet and portions, parasite prevention (fleas, ticks, heartworm), vaccination status, and behavior. This conversation is part of the exam, not an add-on — bring up everything you have noticed.
          </p>

          <h2 id="screening">Screening Tests You May Be Offered</h2>
          <p>
            Depending on age, breed, and risk, the veterinarian may recommend screening that goes beyond the physical:
          </p>
          <ul>
            <li><strong>Baseline and senior bloodwork</strong> — complete blood count and chemistry panel to screen organ function and establish a baseline; increasingly recommended as dogs age.</li>
            <li><strong>Fecal testing</strong> — for intestinal parasites, often annually.</li>
            <li><strong>Heartworm test</strong> — typically annual where heartworm is endemic, before continuing or starting prevention.</li>
            <li><strong>Urinalysis</strong> — part of senior screening and useful for early kidney and urinary disease.</li>
          </ul>
          <p>
            Screening is about establishing trends. A single normal result is reassuring; a series of results over years is what reveals slow change early. Ask which screens make sense for your dog&rsquo;s age and breed rather than treating it as all-or-nothing.
          </p>

          <h2 id="choosing">How to Choose a Veterinarian</h2>
          <p>
            The best veterinarian for your dog is one you will actually visit and feel comfortable talking to. Practical criteria:
          </p>
          <ul>
            <li><strong>Accreditation.</strong> AAHA accreditation is voluntary — clinics that hold it have met a defined set of standards. It is a useful signal, though many excellent practices are not accredited.</li>
            <li><strong>Communication.</strong> Do staff explain their reasoning, present options and costs clearly, and welcome your questions? This matters more over years than almost anything else.</li>
            <li><strong>Services and referral.</strong> What does the practice handle in-house, and how do they refer to specialists when needed? For specialist care, board-certified diplomates can be found via official directories — see our <a href="/find-a-vet" className="text-brand-primary hover:underline">specialist finder</a>.</li>
            <li><strong>Emergency arrangements.</strong> What happens after hours? Is there an affiliated or nearby 24-hour emergency hospital?</li>
            <li><strong>Convenience.</strong> A clinic close enough that you will keep appointments is worth more than a distant &ldquo;perfect&rdquo; one you avoid.</li>
          </ul>
          <p>
            A first wellness visit is a good low-pressure way to assess fit before any crisis forces the choice.
          </p>

          <h2 id="questions">Questions Worth Asking</h2>
          <ul>
            <li>Is my dog&rsquo;s weight and body condition where it should be? If not, what is the plan?</li>
            <li>What does my dog&rsquo;s dental health look like, and is a cleaning warranted?</li>
            <li>Are my dog&rsquo;s vaccines and parasite prevention appropriate for our lifestyle and region?</li>
            <li>Given my dog&rsquo;s age and breed, what screening do you recommend now?</li>
            <li>Is there anything in today&rsquo;s exam I should monitor at home before the next visit?</li>
          </ul>

          <h2 id="prepare">How to Prepare for the Visit</h2>
          <p>
            Walk in organized and you get more from the appointment. Bring prior medical records if the clinic is new to you, a current list of all medications and supplements with doses, the name and rough amount of the food your dog eats, and a written list of any changes you have noticed — appetite, thirst, energy, lumps, limping, coughing, or behavior. A fresh fecal sample is often useful: a fecal-sample collection kit and leak-proof specimen bags keep the sample from leaking in the car and make it easier to hand over at the desk. Writing your questions down beforehand keeps them from slipping your mind in the exam room.
          </p>

          <h2 id="stress">Reducing Vet-Visit Stress</h2>
          <p>
            A stressed dog is harder to examine and may have an artificially elevated heart rate and temperature, so reducing fear improves the quality of the exam as well as the dog&rsquo;s welfare. Approaches that help: acclimating a puppy to handling and car rides early, bringing high-value vet-visit treats the dog only sees at the clinic, asking the clinic about low-stress or fear-free handling protocols, scheduling at quieter times, and — for very anxious dogs — discussing pre-visit calming options with the veterinarian in advance. Many practices now train staff specifically in low-stress handling; it is fair to ask. Those treats are a handling aid. They are not a medication, they are not a sedative, and they do not replace a veterinarian-directed pre-visit calming plan.
          </p>

          <h2 id="kit">A Simple Wellness-Visit Kit</h2>
          <p>
            Three everyday physical supplies match the prepare and low-stress copy above: a fecal-sample collection kit so a fresh stool sample is ready if the clinic asks for one, leak-proof specimen bags so the sample does not leak in the car or at the desk, and high-value vet-visit treats reserved for the exam room so handling stays easier. These are appointment-prep tools. They do not diagnose intestinal parasites, they do not replace the fecal test the veterinarian runs, they are not a first-aid wound kit, and they are not vaccines, heartworm tests, or medications. Gauze, Vetrap cohesive bandage, saline wound flush, a soft muzzle, and a soft carrier already live on the <a href="/guides/dog-first-aid-kit" className="text-brand-primary hover:underline">dog first-aid kit</a> guide. Home temperature checks stay on the <a href="/guides/how-to-take-dogs-temperature" className="text-brand-primary hover:underline">vital signs guide</a>. This page does not hop medications. This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (wellness-visit kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page fecal-sample-collection-kit / leak-proof-specimen-bags /
              high-value-vet-visit-treats copy, not first-aid wound hops,
              house-training poop bags, or puppy-training treats. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the wellness-visit kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              appointment-prep copy — a fecal-sample collection
              kit, leak-proof specimen bags, and high-value
              vet-visit treats. Everyday physical prep tools
              only. They are not a ranked product list, they
              are not a first-aid wound kit, they are not the
              house-training poop-bag hop, they are not puppy
              training treats, and they do not replace a
              veterinarian. Dog.com earns a commission on
              qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/fecal+sample+collection+kit?s=guides-dog-wellness-exam"
                amazonLabel="Browse fecal-sample collection kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/leak+proof+specimen+bags?s=guides-dog-wellness-exam"
                amazonLabel="Browse leak-proof specimen bags on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/high+value+vet+visit+treats?s=guides-dog-wellness-exam"
                amazonLabel="Browse high-value vet-visit treats on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <ArticleSourcesList
            title="References"
            sources={[
              { label: 'AAHA Canine Life Stage Guidelines', url: 'https://www.aaha.org/aaha-guidelines/life-stage-canine-2019/life-stage-canine-2019/', publisher: 'AAHA' },
              { label: 'Your Pet’s Annual Wellness Examination', url: 'https://www.avma.org/resources-tools/pet-owners/petcare', publisher: 'AVMA' },
              { label: 'AAHA Accreditation — What It Means', url: 'https://www.aaha.org/your-pet/pet-owner-education/', publisher: 'AAHA' },
              { label: 'Routine Health Care of Dogs', url: 'https://www.merckvetmanual.com/dog-owners/routine-care-and-breeding-of-dogs/routine-health-care-of-dogs', publisher: 'Merck Veterinary Manual' },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
