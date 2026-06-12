# DRAFT — Vets.co Pet-Insurance Q&A Hub (Tier-1 revenue cluster)

> Status: production-ready draft copy. NOT yet committed (write limit / branch held).
> When the branch frees: build as `apps/vets-co/src/app/insurance/questions/page.tsx` (hub)
> + one page per question OR a single comprehensive Q&A page with FAQPage schema.
> Trust: "Vets.co Editorial" byline only; "Editorial team" reviewer; calibrated; no
> superlatives about specific carriers; FTC AffiliateDisclosure above any monetized link;
> every page links the worth-it calculator + /reviews/best-pet-insurance (funnel).
> Sources to cite per page: NAIC, NAPHIA, CFPB, sample carrier policy docs (general, not endorsing).

## Why this cluster (demand + revenue)
Pet insurance is the highest-commission affiliate vertical in the portfolio. Search demand
is dominated by a small set of recurring questions (confirmed via 2026 search research). Each
answer is a citation magnet (AI Overviews pull concise insurance answers) AND a funnel feeder
into the worth-it calculator and the best-pet-insurance review. Own the questions → own the
top of the consideration funnel.

## Hub structure
`/insurance/questions` — intro + methodology ("we explain how plans work; we don't sell them")
+ card grid linking each Q + ItemList/Breadcrumb schema. Each spoke: Article + FAQPage +
Breadcrumb. Cross-link: worth-it calculator, insurance-finder, best-pet-insurance, the
relevant /insurance education page.

---

## Q1 — "Does pet insurance cover vaccines?"
**Extractable answer (top of page):** Standard accident-and-illness pet insurance does **not**
cover vaccines or other routine/preventive care. Vaccines are covered only if you add an
optional **wellness/routine-care plan** (sometimes called a preventive rider) for an extra
monthly cost. The core policy pays for unexpected illness and injury — not predictable annual
care.

**Body points:**
- Accident & illness (A&I) is the core product: covers the unexpected (broken bones, swallowed
  objects, cancer, infections). Predictable costs (vaccines, annual exam, flea/tick, dental
  cleaning) are excluded by design — insuring a known recurring cost wouldn't lower it.
- Wellness add-ons reimburse a fixed annual allowance toward vaccines, exams, and preventives.
  Whether it's worth it is arithmetic: compare the rider's annual premium to what you'd spend
  out of pocket — it rarely "profits," it just smooths cash flow.
- What to check on a quote: is the wellness plan a separate line item? What's the annual
  reimbursement cap per category?
- FAQ schema Qs: Does any pet insurance cover vaccines? / Is a wellness plan worth it? / What's
  the difference between accident-only, A&I, and wellness?
**Funnel:** → worth-it calculator (model the wellness rider math) + best-pet-insurance.

## Q2 — "Does pet insurance cover pre-existing conditions?"
**Extractable answer:** No pet insurer covers pre-existing conditions — a condition with signs,
symptoms, or a diagnosis **before** coverage starts or during the waiting period. Some insurers
distinguish **curable** vs **incurable** pre-existing conditions: a few will cover a previously
curable issue (e.g., a one-time ear infection or UTI) if your pet is symptom- and
treatment-free for a defined period (commonly 6–18 months, varies by insurer); chronic/incurable
conditions (diabetes, allergies, most orthopedic disease) stay permanently excluded.
**Body points:**
- This is THE reason to enroll early/young — before anything is on the record. Every insurer
  reviews vet records when you file; an undisclosed prior note can lead to a denied claim.
- "Bilateral exclusions": if one knee/elbow/eye had an issue before coverage, the matching joint
  is often excluded too.
- What to check: the insurer's exact curable-condition policy and the symptom-free window.
**Funnel:** → when-to-enroll page + best-pet-insurance.

## Q3 — "How much does pet insurance cost?"
**Extractable answer:** Most dog A&I policies run roughly **$30–$70/month** and cats roughly
**$15–$40/month** (2026 ranges; NAPHIA-style averages), but your price swings with **species,
breed, age, location, and the deductible/reimbursement/limit you pick.** Older pets and
large/brachycephalic/high-cancer-risk breeds cost more; raising your deductible or lowering your
annual limit lowers the premium.
**Body points:**
- The three dials that move price: deductible (↑ deductible = ↓ premium), reimbursement %
  (90% costs more than 70%), annual limit (unlimited costs more than a $5k cap).
- Premiums rise as a pet ages (claims risk rises) — budget for increases, not a flat price.
- Don't optimize for lowest premium alone: a cheap policy with a high deductible + low limit may
  not cover the catastrophic bill that's the whole point.
**Funnel:** → worth-it breakeven calculator (the natural next step) + insurance-finder.

## Q4 — "Is pet insurance worth it?"
**Extractable answer (honest, both-sides):** Pet insurance is **protection against rare, large
vet bills — not a way to save money on average.** It's most worth it when (a) you couldn't
comfortably absorb a sudden $5,000–$10,000 emergency from savings, and (b) you enroll while your
pet is young and healthy (locking in coverage before exclusions). It's least useful as a way to
recoup routine costs. Run the breakeven for your specific situation rather than relying on a
blanket yes/no.
**Body points:**
- The math: you "win" financially only if eligible claims over the pet's life exceed total
  premiums + deductibles — which mostly happens with one or more major incidents.
- The real product is **risk transfer / peace of mind / avoiding "economic euthanasia"** (having
  to decline treatment over cost), not expected savings.
- Alternative for the disciplined: a dedicated pet emergency fund — works if you actually fund it
  and don't get hit early.
**Funnel:** → worth-it calculator (primary CTA) + best-pet-insurance.

## Q5 — "How does the pet insurance claim/reimbursement process work?"
**Extractable answer:** Pet insurance is almost always **reimbursement-based**: you pay the vet
in full, then submit the itemized invoice (and sometimes records) to the insurer, which pays you
back your reimbursement % of the eligible amount after your deductible is met. Processing
typically takes a few days to a few weeks; some insurers offer faster app-based claims or, with
select vets, direct pay.
**Body points:**
- Steps: pay vet → submit invoice + claim form (app/portal) → insurer applies deductible →
  reimburses your % of the remainder up to the annual limit.
- Annual vs per-incident deductible matters: annual deductibles reset once per policy year.
- Speed-ups: digital claims, linked bank deposit; a few insurers + vets support direct payment.
**Funnel:** → best-pet-insurance (we note claim-experience differences) + worth-it calculator.

## Q6 — "When should I get pet insurance / what's the best age?"
**Extractable answer:** **As early as the insurer allows** — many start coverage at 6–8 weeks.
Enrolling while a pet is young and healthy locks in coverage before any condition becomes a
permanent pre-existing exclusion, and premiums start lower. There's no "too late" if your pet is
healthy, but every year you wait risks a new note in the records becoming an exclusion.
**Body points:**
- Waiting periods (commonly a few days for accidents, ~14 days for illness, longer for
  orthopedic/cruciate) mean coverage isn't instant — enroll before you need it.
- Some insurers have maximum-enrollment ages or senior surcharges; coverage bought young usually
  continues into old age.
**Funnel:** → pre-existing-conditions page + insurance-finder.

## Q7 — "Are there multi-pet discounts?"
**Extractable answer:** Most insurers offer a **multi-pet discount of roughly 5–10%** per
additional pet on the same account. It's a modest saving and shouldn't be the deciding factor —
coverage terms, limits, and claim handling matter far more than the discount.
**Funnel:** → best-pet-insurance + insurance-finder.

## Q8 — "Does pet insurance cover dental?"
**Extractable answer:** Most A&I policies cover **dental disease and dental injuries**
(extractions, fractured teeth, periodontal disease treatment) — but **not** routine dental
**cleanings**, which are preventive (wellness-plan territory). Many insurers require evidence of
annual dental exams/cleanings to keep dental-illness claims eligible, so read the dental clause.
**Funnel:** → does-it-cover-vaccines (wellness add-ons) + best-pet-insurance.

---

## Build notes when branch frees
- One comprehensive `/insurance/questions` page with all 8 as FAQAccordion (auto FAQPage) is the
  fast MVP; the higher-ceiling version is a hub + 8 spokes (more indexable surface, more internal
  links). Recommend hub + spokes for the flagship insurance vertical.
- Every spoke: AffiliateDisclosure above the funnel CTAs; "Vets.co Editorial"; sources cited.
- Add all routes to vets-co sitemap.ts; link hub from /insurance and /reviews/best-pet-insurance.
- Cross-portfolio: these are vets-co:health-adjacent — render CrossPortfolioCard (dog breeds /
  petfood conditions) at the bottom.
