import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Ozempic for Dogs? GLP-1 Weight-Loss Drugs Explained | Dog.com',
  description: 'No Ozempic-style drug is FDA-approved for dogs. What GLP-1 pet therapies are in trials, why off-label use is risky, and the proven vet weight-loss alternatives.',
  path: '/nutrition/ozempic-for-dogs',
  type: 'article',
})

const FAQS = [
  {
    question: 'Is there an Ozempic for dogs?',
    answer: 'Not yet. As of 2026, no GLP-1 weight-loss drug — semaglutide (Ozempic/Wegovy) or any other — is FDA-approved for dogs. The first purpose-built GLP-1 therapy for pets, OKAVA\'s OKV-119 implant, is in clinical trials in cats, with dog studies expected to follow and a regulatory filing not anticipated before 2027–2028. Human Ozempic is not approved, studied, or considered safe for canine use.',
  },
  {
    question: 'Can I give my dog my own Ozempic or Wegovy?',
    answer: 'No. Semaglutide has not been studied in dogs, dosing is not established, and dogs metabolize drugs differently than humans. Reported risks of off-label use include vomiting, diarrhea, dehydration, dangerously low blood sugar, and pancreatitis. The Pet Poison Helpline has also documented accidental-exposure cases where a diabetic pet was given Ozempic instead of its prescribed insulin. Keep these injectable pens secured and never dose a pet without veterinary direction.',
  },
  {
    question: 'What weight-loss medication IS approved for dogs?',
    answer: 'Dirlotapide (brand name Slentrol) is FDA-approved for managing obesity in dogs. It reduces fat absorption and appetite and must be used under veterinary supervision. For the large majority of overweight dogs, however, a structured calorie-reduction and exercise plan — not medication — remains the first-line, evidence-backed approach.',
  },
  {
    question: 'When will a GLP-1 weight-loss drug be available for dogs?',
    answer: 'Timelines are uncertain. OKV-119, the furthest-along pet GLP-1 candidate, is being evaluated in cats first (the MEOW-1 study, under an FDA-CVM investigational application), with results expected around summer 2026 and a possible FDA approval request in 2027–2028. Dog studies are expected to follow that data. Any earlier "GLP-1 for dogs" product is not an FDA-approved drug.',
  },
  {
    question: 'Are "GLP-1 style" dog foods the same as Ozempic?',
    answer: 'No. Some 2026 pet foods are marketed as mimicking GLP-1 effects using amino-acid and probiotic blends. These are foods, not drugs — they are not FDA-approved medications and do not contain semaglutide or similar agents. Treat their weight-loss claims with the same skepticism you would any "lite" food, and prioritize total calorie intake.',
  },
]

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Ozempic for Dogs? GLP-1 Weight-Loss Drugs Explained',
  description: 'Whether Ozempic-style GLP-1 weight-loss drugs are available or safe for dogs, what pet therapies are in trials, and the FDA-approved alternatives.',
  url: 'https://dog.com/nutrition/ozempic-for-dogs',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
})
const faqSchema = buildFAQSchema({ questions: FAQS })
const schema = combineSchemas(articleSchema, faqSchema)

export default function OzempicForDogsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{ title: 'Ozempic for Dogs? What the GLP-1 Trend Actually Means', subtitle: 'Human GLP-1 drugs like Ozempic and Wegovy have reshaped weight loss — and pet owners are asking whether dogs are next. Here is the calibrated, evidence-based answer: what exists, what is in trials, what is dangerous, and what actually works today.', category: 'Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Ozempic for Dogs', href: '/nutrition/ozempic-for-dogs' }]}
      relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'Weight Management Protocol', href: '/nutrition/weight-management', category: 'Nutrition' }, { title: 'How Much to Feed', href: '/nutrition/how-much-to-feed', category: 'Nutrition' }, { title: 'Calorie Calculator', href: '/tools/dog-calorie-calculator', category: 'Tool' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'The Short Answer', href: '#short' }, { label: 'What\'s Actually in Development', href: '#development' }, { label: 'Why Not Human Ozempic', href: '#offlabel' }, { label: 'The Poisoning Risk', href: '#poison' }, { label: 'What Works Today', href: '#works' }, { label: 'What To Do Now', href: '#now' }]} />
        <RelatedLinks title="Related" links={[{ label: 'Weight Management Protocol', href: '/nutrition/weight-management' }, { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-ozempic" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="short">The Short Answer</h2>
        <p><strong>As of 2026, there is no Ozempic for dogs.</strong> No GLP-1 weight-loss drug — semaglutide or otherwise — is FDA-approved for canine use. The first weight-loss therapy designed for pets is in early clinical trials (in cats, not dogs), and any approval is years away. Giving a dog human Ozempic or Wegovy is not a shortcut; it is an unstudied, potentially dangerous off-label use that veterinarians do not endorse. For the overweight dog in front of you today, a structured calorie and exercise plan — covered in our <a href="/nutrition/weight-management">weight management protocol</a> — remains the proven, first-line approach.</p>
        <p>That said, the science is moving, and the question is reasonable. Roughly 59% of US dogs are overweight or obese (Association for Pet Obesity Prevention), and obesity measurably shortens canine lifespan. Here is where things actually stand.</p>

        <h2 id="development">What's Actually in Development</h2>
        <p>The furthest-along pet weight-loss drug is <strong>OKV-119</strong>, developed by OKAVA in partnership with Vivani Medical. It is not a weekly injection like human Ozempic — it is a miniature, under-the-skin implant that releases exenatide (a GLP-1 receptor agonist) at a steady dose for up to roughly six months, placed during a routine veterinary visit.</p>
        <ul>
          <li><strong>Species first in line:</strong> Cats, not dogs. The <em>MEOW-1</em> study — the first clinical trial of a GLP-1 weight-loss therapy in pets — is evaluating safety, tolerability, and weight loss in overweight client-owned cats under an FDA-CVM Investigational New Animal Drug application.</li>
          <li><strong>Timeline:</strong> Initial results are expected around summer 2026. The developer has stated it aims to request FDA approval in 2027–2028, and that cat data will guide whether and when similar dog studies begin.</li>
          <li><strong>What that means for dogs:</strong> A purpose-built, FDA-approved GLP-1 weight-loss drug for dogs is, realistically, several years out — and contingent on trial outcomes that do not yet exist.</li>
        </ul>
        <p>Separately, several 2026 pet-food brands market "GLP-1-style" or "Ozempic-like" formulas built on amino-acid and probiotic blends. These are <strong>foods, not drugs</strong>: they contain no semaglutide, carry no FDA drug approval, and their weight-loss claims deserve the same scrutiny as any "lite" label. What controls a dog's weight is total calories, not marketing.</p>

        <h2 id="offlabel">Why You Can't Just Use Human Ozempic</h2>
        <p>It is tempting to assume a drug that works in people will work in dogs at a smaller dose. That assumption is wrong and potentially harmful:</p>
        <ul>
          <li><strong>It hasn't been studied in dogs.</strong> Safe dosing, long-term effects, and drug interactions in canines are simply not established. "Scale it down from the human dose" is not how veterinary pharmacology works.</li>
          <li><strong>Dogs metabolize drugs differently.</strong> Reported and plausible adverse effects of off-label GLP-1 use include vomiting, diarrhea, dehydration, lethargy, dangerously low blood sugar, and pancreatitis.</li>
          <li><strong>No veterinary formulation exists.</strong> There is no canine-labeled semaglutide product, dose, or delivery device — meaning any use is improvised, and improvised dosing of an unstudied drug is exactly the risk profile vets warn against.</li>
        </ul>

        <h2 id="poison">The Poisoning Risk Owners Don't See Coming</h2>
        <p>There is a second, quieter danger that has nothing to do with intentionally medicating a pet. As GLP-1 pens have entered millions of households, the Pet Poison Helpline has documented <strong>accidental-exposure cases</strong> — including diabetic pets that were given the owner's Ozempic by mistake instead of their prescribed insulin. The injector pens look similar, live in the same fridge, and are easy to confuse in a hurry.</p>
        <p>If you keep semaglutide or any GLP-1 medication at home: store it separately from any pet insulin, label it clearly, and keep used and unused pens out of reach. If your dog ingests or is injected with a human GLP-1 drug, contact your veterinarian or the Pet Poison Helpline immediately rather than waiting for symptoms.</p>

        <h2 id="works">What Actually Works Today</h2>
        <p>While the drug pipeline matures, the tools that reliably reduce canine weight already exist — and for most dogs they are more effective than any medication would be:</p>
        <ul>
          <li><strong>Calorie-controlled feeding.</strong> Feeding to <em>ideal</em> body weight rather than current weight, measured by a kitchen scale, is the single highest-impact lever. Our <a href="/tools/dog-calorie-calculator">calorie calculator</a> estimates a starting target, and the <a href="/nutrition/weight-management">weight management protocol</a> walks through safe loss rates (1–2% of body weight per month).</li>
          <li><strong>Veterinary weight-management diets.</strong> Prescription formulas (Hill's Metabolic, Royal Canin Satiety, Purina OM) are designed to preserve satiety and muscle while cutting calorie density, and outperform simple portion-cutting in studies. See <a href="/nutrition/prescription-diets">prescription diets explained</a>.</li>
          <li><strong>Dirlotapide (Slentrol).</strong> The one FDA-approved canine weight-loss drug, reserved for cases where diet and exercise are insufficient — used strictly under veterinary supervision, not as a first step.</li>
          <li><strong>Structured exercise.</strong> Not a primary weight-loss driver on its own, but essential for preserving muscle mass during calorie restriction. Swimming and flat low-impact walks are ideal for overweight, joint-stressed dogs.</li>
        </ul>

        <h2 id="now">What To Do Now</h2>
        <p>If your dog is carrying extra weight, you do not need to wait for a GLP-1 drug:</p>
        <ol>
          <li><strong>Confirm the problem.</strong> Use body condition scoring (ribs, waist, abdominal tuck) rather than the scale alone — the <a href="/nutrition/weight-management">weight management guide</a> shows how.</li>
          <li><strong>Set a calorie target</strong> based on ideal weight, and measure food by weight, not volume.</li>
          <li><strong>Loop in your veterinarian</strong> before starting any medication or prescription diet — and before assuming a future drug is the answer for your dog.</li>
          <li><strong>Ignore the "Ozempic for dogs" shortcuts.</strong> Until an FDA-approved canine product exists, the trend is a headline, not a treatment.</li>
        </ol>
        <p>We will update this page as the OKV-119 trials report out and as the veterinary GLP-1 picture changes. For now, the honest answer is that the proven path — calories, diet quality, and movement — is also the available one.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} />

        <p className="text-sm text-gray-500 mt-8"><em>This article is general educational information from the Dog.com editorial team and is not veterinary advice. Drug-approval status and trial timelines reflect publicly reported information as of June 2026 and may change. Always consult your veterinarian before changing your dog's diet or starting any medication.</em></p>
      </div>
    </ArticleLayout>
  )
}
