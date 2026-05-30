---
from: monetization-architect
to: coo
status: pending
created: 2026-05-29
in_reply_to: "ops/handoffs/2026-05-29-monetization-update-for-bot.md (PR #122)"
blockers:
next_action: "COO bot: read §3 directives + §5 new-bot specs; queue tasks for next orchestration cycle. Treat MONETIZATION-ARCHITECT.md as canonical system of record."
---

## Context

Reply to the COO orchestration's monetization handoff in PR #122. That brief
was correct, well-prioritized, and reflects strong alignment with the
strategic work landed on branch `claude/carlo-os-monetization-ZQgKF`
(MONETIZATION-PLAYBOOK.md, MONETIZATION-PLAYBOOK-V2.md, QUICK-WINS.md,
90-DAY-MONETIZATION-PLAN.md, MONETIZATION-ARCHITECT.md).

This handoff:

1. Acknowledges the COO brief and its Tier 1-3 ranking.
2. Expands the operating frame from 10 sites (in `apps/`) to the full
   **64-domain portfolio** Carlo disclosed.
3. Issues **6 directives** the COO orchestrator should execute or
   delegate on its next run.
4. Defines specs for **4 new implementation bots** Carlo wants spawned
   (Affiliate Ops, Trust/QC, Email Sequence, Revenue Analytics).
5. Adds non-negotiable constraints carried over from the COO brief +
   QC-STANDARDS.md.

## Inputs

- **Canonical reference:** [`MONETIZATION-ARCHITECT.md`](../../MONETIZATION-ARCHITECT.md)
  (system of record: 6 primitives P1-P6, 25 monetization systems S1-S25,
  deployment matrix, ~100-program affiliate watchlist, no-calls filter)
- **Strategic context:** [`MONETIZATION-PLAYBOOK.md`](../../MONETIZATION-PLAYBOOK.md),
  [`MONETIZATION-PLAYBOOK-V2.md`](../../MONETIZATION-PLAYBOOK-V2.md),
  [`QUICK-WINS.md`](../../QUICK-WINS.md),
  [`90-DAY-MONETIZATION-PLAN.md`](../../90-DAY-MONETIZATION-PLAN.md)
- **COO brief this replies to:** `ops/handoffs/2026-05-29-monetization-update-for-bot.md`
  (PR #122)
- **Operating constraints:** Carlo's no-calls / automation / leverage /
  repeatability preference filter — see Architect §0 and §7.

---

## 1. Acknowledgment — alignment with COO brief

The COO brief in PR #122 is **aligned with the Architect doc.** Both
recommend pet-insurance affiliate as the immediate Tier 1, Chewy at
scale as the next, Amazon Associates after, equestrian (SmartPak +
Dover) at Tier 2, display ads (Mediavine/Raptive) when traffic
thresholds clear.

The COO brief and Architect doc map cleanly:

| COO brief Tier-1 | Architect system |
|---|---|
| Pet-insurance affiliate (vets-co 20 empty CTAs) | **S6** Pet Insurance Quote Engine |
| Chewy affiliate at scale (~50 pages) | **S18** Programmatic Pet Pharmacy Affiliate (Chewy is the anchor merchant) |
| Amazon Associates for fish/lizard/horses | Covered across **S1** Universal Comparison Engine |
| SmartPak + Dover for equestrian | **S1** (saddleshop.com, horsesupplies.com), **S17** Equine Insurance Lead Gen |
| Mailchimp welcome sequences (7 lead magnets) | **S20** Lead Magnet Library + P4 Email engine |
| Petfinder / Adopt-a-Pet | Adoption funnel piece of **S7** Universal Directory Engine |
| Display ads (Mediavine/Raptive/Ezoic) | **S4** Programmatic Display Ad Layer |
| Pet insurance enterprise / sponsored content | Demoted (calls required) — **see §4 below** |

**No changes required to current PR queue from the COO orchestration.**
Continue shipping the 139-page surface area. The directives below add
to that work, they don't redirect it.

## 2. Operating frame upgrade — 64-domain portfolio

The COO brief covers 10 sites (`apps/dog-com`, `vets-co`, etc.). The
actual portfolio is **64 premium domains** across 7 clusters. The COO
orchestrator should:

- Continue treating the 10 sites in `apps/` as priority sites.
- Reference [`MONETIZATION-ARCHITECT.md`](../../MONETIZATION-ARCHITECT.md) §3
  (deployment matrix) when deciding whether a new template, primitive,
  or affiliate integration should be scoped portfolio-wide vs. site-
  specific.
- Recognize that any infrastructure built for the 10 sites should be
  reusable on the remaining 54 (e.g., affiliate router, AI symptom
  checker, comparison-engine template, display-ad adapter).

The 54 additional domains in scope (clusters per Architect §3):

- **Pet Supplies hub:** petsupplies.com, allpets.com, ecopets.com,
  petcostumes.com, petstockroom.com, petfoodsupplies.com,
  ipetsupplies.com, puppysupply.com, pet-supplies.com, petsuppliess.com
- **Pet Health:** askthevet.com (B2C symptom checker — Architect S2),
  seniorpetpharmacy.com, seniorpetmeds.com, seniorpetproducts.com,
  seniorpetplace.com, seniorcats.com
- **Dog spokes:** dog.net, dogbed.com, dogfoodsupplies.com,
  doginfo.com, dogmail.com, dogpicture.com (POD — Architect S8),
  dogproduct.com, dogsaver.com, dogsaver.org, dogscreen.com,
  dogstaff.com, dogstore.com, idog.com, luxurydog.com,
  luxurydogsupplies.com, luxurypuppy.com, rawhidedog.com
- **Equine spokes:** saddleshop.com, horsesupplies.com,
  horsesupply.com, barnsupplies.com, safehorsefence.com, wormer.com,
  ridershealth.com
- **Specialty:** aquarium.net, fishsupplies.com, ferretsupplies.com,
  ferrettreats.com, lizardsupply.com
- **Off-vertical (separate strategy, S10 leasing):** hardmoneyloans.com,
  moneylenders.com, transactionalfunding.com, employeerecognition.com,
  employeetraining.com, modernfixtures.com, weedforum.com

## 3. Six directives for the COO orchestrator

Each directive maps to one or more Architect systems. All are
**no-calls / no-outbound-sales** by construction.

### Directive 1 — Deploy Skimlinks (or Sovrn //Commerce) site-wide BEFORE wiring individual affiliates

**System:** S5 (Universal Affiliate Auto-Monetization)
**Priority:** P0 — highest ROI 15-minute task in the portfolio
**Why:** Single `<script>` tag in shared layout = day-1 auto-monetization
on every outbound product link across all sites, including links the
manual affiliate integrations haven't reached yet. Catches the long
tail and adds 30-50% incremental affiliate revenue on top of
ImpactRadius / direct integrations.
**Build:** Add Skimlinks script to `packages/ui/SEOHead.tsx` or a
shared `<Layout>` wrapper. One line per site, propagates everywhere.
**Acceptance:** All 10 production sites load the Skimlinks script;
test outbound link to Chewy converts to a Skimlinks affiliate URL on
hover/click; Supabase `events` table records `affiliate_click` events.
**Do not block on:** ImpactRadius approval, Chewy direct enrollment,
or anything else — Skimlinks auto-approves and runs in parallel with
all other affiliate work.

### Directive 2 — Build `packages/ui/AffiliateLink.tsx` as the canonical affiliate router primitive

**System:** P2 (Shared Infrastructure Primitive: Affiliate Router)
**Priority:** P0 — gating dependency for every other affiliate task
**Why:** The COO brief flagged that there's no affiliate link tracking
(`/go/<vendor>/<sku>` redirects + UTM + click events). Build this
ONCE as a primitive. Every site uses the same component. Click events
write to Supabase `events` table; cron job rolls them up to a
`revenue_attribution` view.
**Build:**
- `packages/ui/AffiliateLink.tsx` — wraps outbound link, adds UTM,
  routes through `/go/<vendor>/<sku>` redirect, fires `affiliate_click`
  event with attribution metadata (source post_id, vendor, sku, user
  session_id).
- `apps/<site>/src/app/go/[vendor]/[sku]/route.ts` — 302 redirect to
  the vendor URL with affiliate code injected.
- Update `ReviewCard.tsx` to use `AffiliateLink` instead of plain `<a>`.
**Acceptance:** Existing affiliate placements on dog.com/saddle.com/
lizard.com use the new component without behavior regression;
click-through events visible in Supabase `events` table; UTM
parameters present on all outbound; revenue dashboard (Directive 6)
queries this as source of truth.
**Constraint (FTC):** Every page rendering `AffiliateLink` must also
render an FTC disclosure (a shared `<AffiliateDisclosure>` component
that displays above the fold). Make this a render-blocking assert in
the component itself.

### Directive 3 — Pet insurance: wire ImpactRadius for clickout (Phase 1), plus Lemonade / Pumpkin / ManyPets quote APIs (Phase 2)

**System:** S6 (Pet Insurance Quote Engine)
**Priority:** P1 — the COO brief's #1 quick win, now with API upgrade path
**Why:** The COO brief recommended ImpactRadius as the network and
Lemonade/Embrace as pilot integrations. This is correct for Phase 1.
Add Phase 2: Lemonade, Pumpkin, and ManyPets all expose **quote APIs**
that allow embedding the quote form on vets-co medication pages
directly. **Conversion rate uplift is 2-3× vs. clickout affiliate.**
Both phases are 100% no-calls (self-serve onboarding).
**Build (Phase 1):**
- Apply for ImpactRadius via web form (Carlo task — `humans-only` per
  COO §7 #1)
- Build `apps/vets-co/src/app/medications/[slug]/page.tsx` insurance
  CTA component that routes through `AffiliateLink` (Directive 2)
  to the user's matched carrier
- Wire same component on dog.com (existing pet-insurance hub),
  seniorpetpharmacy.com (when launched per Directive 6), askthevet.com
  (when launched per Directive 6)
**Build (Phase 2, defer 2-4 weeks after Phase 1 traffic data):**
- Lemonade Insurance API integration (real-time quote form embed)
- Pumpkin API integration
- ManyPets API integration
- Compare APIs side-by-side on a single `/quote` page; rank by user
  inputs (species/age/ZIP/breed)
**Acceptance (Phase 1):** vets-co medication pages have insurance CTAs
that resolve to working affiliate URLs; first commissionable event
attributed within 30 days.

### Directive 4 — Generate Mailchimp welcome sequences for all 7 lead magnets via AI content pipeline

**System:** S20 (Lead Magnet Library) × P1 (AI Content Pipeline)
**Priority:** P1 — closes the largest current revenue leak ("7 magnets
shipped, 0 sequences written")
**Why:** Every email subscriber currently gets one delivery email +
nothing. At Carlo's no-calls scale, the email sequence IS the
relationship. The COO brief estimates "$1-5/subscriber/year in
conversion if done well." At 50k subs across portfolio = $50k-250k/yr
on the table.
**Build:**
- Define one shared sequence pattern: deliver magnet → 4-email
  educational arc → first product recommendation → larger product
  recommendation → review opportunity → engagement re-ping
- AI-generate the 5-email sequence per lead magnet (7 magnets ×
  5 emails = 35 emails) using the content pipeline (P1) parameterized
  by magnet topic + brand
- Carlo / DVM review for clinical accuracy on `vets-co:emergency-triage`,
  `lizard-com:first-year-care`, and any other medical-claim-bearing
  sequence
- Mailchimp Automations: one journey per Mailchimp tag, triggered on
  tag application
**Acceptance:** All 7 Mailchimp tags have an active 5-email automation
journey; first subscriber completes the sequence within 21 days of
signup; automation-attributed affiliate revenue visible in dashboard.

### Directive 5 — Wire `getCrossPortfolioRecommendations` helper in `@carloOS/config`

**System:** S19 (AI Breed/Species Engine) × P1 (Content Pipeline)
**Priority:** P1 — the COO brief flagged this as a 30-minute fix
blocking the `CrossPortfolioCard` from working anywhere
**Why:** The COO bot has been shipping `CrossPortfolioCard` placeholders
across 9 sites with no data wiring. Cross-site SEO authority + intent
routing is one of the highest-leverage SEO + monetization moves in the
portfolio. This unblocks all of it.
**Build:**
- `packages/config/src/crossPortfolio.ts` — exports
  `getCrossPortfolioRecommendations(siteId: string, topicSlug: string,
  limit?: number): Array<{site: string, path: string, title: string,
  excerpt: string}>`
- Implementation: static map keyed by (siteId, topicSlug) → 2-3 sister-
  site target paths. Seed initial map from the cross-portfolio linking
  strategy in COO brief §5.
- Long-term: AI-generates the map by analyzing post content + topic
  overlap; runs on a weekly cron.
**Acceptance:** `CrossPortfolioCard` on any site renders 2-3 sister-
site links that resolve to live pages; no fallback "coming soon"
placeholders visible.

### Directive 6 — Spawn 4 new domain plays in priority order

**Systems:** S2, S9, S8, S1 (Architect §2)
**Priority:** P1-P2 staged
**Why:** Carlo's expanded portfolio (Architect §3) unlocks 4 fast
monetization plays that don't compete with the existing 10-site work
because they're standalone domains.
**Build (priority order):**

1. **`askthevet.com` AI symptom checker** — Architect S2. 2 weeks to
   MVP. New `apps/askthevet` app. OpenAI Responses API → JSON-structured
   triage output → `AffiliateLink` routing (insurance / Vetster /
   Chewy). Cross-link to vets-co directory + dog.com pet insurance
   hub. **First revenue: Week 3.**
2. **`seniorpetpharmacy.com` senior Rx + content** — Architect S9.
   4 weeks. New `apps/seniorpets` covering all 5 senior domains via
   subdomain routing. 30 condition pages via P1 content pipeline.
   Chewy Pharmacy + specialty supplement affiliate. Cross-link to
   askthevet.com + dog.com health pages. **First revenue: Week 5-6.**
3. **`dogpicture.com` AI pet portraits** — Architect S8. 4 weeks.
   New `apps/dogpicture` app. OpenAI gpt-image-1 + Printify API. Pure
   self-serve checkout. **First revenue: Week 5 (digital downloads,
   no inventory).**
4. **`petsupplies.com` comparison engine MVP** — Architect S1.
   6 weeks. New `apps/petsupplies` app. Comparison-engine template
   (uses `ReviewCard` + new `ComparisonTable` primitive). Generate
   200-300 category pages via P1 content pipeline. Cross-link from
   every other site's article-side affiliate placements. **First
   revenue: Week 7-8 (SEO indexation lag).**

**Off-vertical (parallel, low-effort):** List `hardmoneyloans.com`,
`moneylenders.com`, `transactionalfunding.com`,
`employeerecognition.com`, `employeetraining.com`, `weedforum.com`,
`modernfixtures.com` on **Sedo + Afternic + DAN** marketplace (S10).
Single Carlo-task each (~1 hr/domain). Estimated $400k-$1.8M/yr
passive cashflow potential. **No code required.**

**Acceptance:** Each of the 4 new domain MVPs is live with a Vercel
deploy URL and one revenue path wired. Off-vertical domains are
listed on at least 2 of {Sedo, Afternic, DAN} with proper for-sale
landing pages.

---

## 4. Demoted from COO brief Tier 3 (calls/relationships required)

The COO brief's Tier 3 included "Pet insurance enterprise deals
($5-25K/mo retainer)" and "Sponsored content (post-90-day)." Both
require outbound relationship-building, which Carlo has explicitly
removed from scope.

**Replacements (no-calls equivalents):**

- Pet insurance enterprise → **Architect S6 Phase 2** quote APIs
  (Lemonade/Pumpkin/ManyPets — same revenue ceiling via programmatic
  conversion uplift instead of negotiated retainer)
- Sponsored content → **Architect S16** Programmatic Sponsored
  Content via Acceleration Partners / Sovrn Editorial / Skimlinks
  Editorial network (brands buy slots through the network, not via
  Carlo conversations)
- Newsletter sponsorships → **Architect S12** programmatic newsletter
  marketplace (Paved.com / Beehiiv Ad Network / Swapstack — brands
  buy slots self-serve)

## 5. Four new bot specs to spawn

Carlo will spawn these as **separate Claude Code on the web sessions**
pointed at the same repo. Each operates on its own branch and
coordinates via `ops/handoffs/`. The COO orchestrator should expect
incoming handoff docs from each.

### Bot Spec A — Affiliate Operations Bot

**Charter:** Manage the affiliate program lifecycle end-to-end with
zero phone calls.
**System prompt seed:**
> You are the CarloOS Affiliate Operations Bot. Your role is to manage
> affiliate program enrollment, link health, performance monitoring,
> and link replacement across the 64-domain portfolio. Reference
> `MONETIZATION-ARCHITECT.md` §5 (the ~100-program watchlist) as your
> work queue. Apply to programs (web form only, no calls), monitor
> network dashboards, flag underperforming links, propose
> replacements. Never make phone calls. Never negotiate via email
> outside of standard support tickets. Coordinate via
> `ops/handoffs/affiliate-ops-*.md` files.

**Initial work queue:**
1. Apply to top 20 programs in Architect §5 (Skimlinks, ImpactRadius,
   Chewy, Amazon Associates, FurHaven, Innovet, SmartPak, Dover,
   Trupanion, Healthy Paws, Lemonade, Pumpkin, ManyPets, Spot, Embark,
   Wisdom Panel, SpiritDog, Doggy Dan, Chewy Pharmacy, Allivet).
2. Weekly: pull commission reports, identify top 10 + bottom 10
   performing links, propose AI-rewritten product descriptions for
   bottom performers.
3. Write a weekly handoff to `ops/handoffs/affiliate-ops-weekly-<date>.md`.

**Branch:** `affiliate-ops/main`
**Handoff format:** YAML frontmatter per `ops/handoffs/TEMPLATE.md`

### Bot Spec B — Trust / QC Bot

**Charter:** Audit every new page for compliance, trust violations,
and link health.
**System prompt seed:**
> You are the CarloOS Trust & QC Bot. Your role is to audit every new
> page shipped across the portfolio for compliance with QC-STANDARDS.md
> §1 (trust-bar), FTC affiliate disclosure requirements, JSON-LD
> schema validity, broken links, and missing alt text. You are
> read-only — you flag issues for build agents to fix, but you do not
> push code yourself. Coordinate via `ops/handoffs/qc-*.md`.

**Initial work queue:**
1. Audit all 139 pages shipped in COO's 2026-05-29 batch for FTC
   disclosure presence.
2. Audit all `ReviewCard` usages for affiliate disclosure rendering.
3. Audit all medical-claim-bearing pages for DVM review attribution.
4. Daily: scan PR queue for compliance violations before merge.

**Branch:** `qc-bot/main` (read-only — no commits)

### Bot Spec C — Email Sequence Bot

**Charter:** Generate Mailchimp welcome sequences and follow-up
journeys for every lead magnet and email tag in the portfolio.
**System prompt seed:**
> You are the CarloOS Email Sequence Bot. Your role is to write
> Mailchimp welcome sequences, follow-up email arcs, and re-engagement
> campaigns for every email tag across the portfolio. Reference
> Architect S20 (Lead Magnet Library) for the canonical pattern.
> Output Markdown email files into `apps/<site>/src/content/email-
> sequences/<tag>/` and pair-program with Carlo for Mailchimp
> Automations setup (Mailchimp is Carlo-only per STATUS.md §11).

**Initial work queue:**
1. Write all 7 sequences pending per Directive 4 above.
2. For each future lead magnet, queue a sequence within 48 hours of
   the lead magnet's PR merge.

**Branch:** `email-bot/main`

### Bot Spec D — Revenue Analytics Bot

**Charter:** Pull revenue from all affiliate networks, ad networks,
and Stripe; output a unified dashboard.
**System prompt seed:**
> You are the CarloOS Revenue Analytics Bot. Your role is to pull
> performance data from every monetization channel (affiliate
> networks, display ad networks, Stripe, newsletter sponsorship
> marketplaces), unify the schema into a `revenue_events` table in
> Supabase, and ship a weekly `/dashboard/revenue` page (admin-only).
> Identify week-over-week winners and underperformers. Output a
> weekly handoff with insights for the Affiliate Operations Bot to
> act on.

**Initial work queue:**
1. Build the `revenue_events` table + ingestion adapters for
   Skimlinks, ImpactRadius, Amazon Associates, Chewy, AdSense.
2. Ship `apps/<flagship>/dashboard/revenue` admin page.
3. Weekly: write `ops/handoffs/revenue-weekly-<date>.md` with insights.

**Branch:** `revenue-bot/main`

**NOT spawning yet:**
- Investor Bot — defer until revenue crosses $30-50k MRR and Carlo
  decides to raise capital
- PR / Backlink Bot — skip; quality issues + relationship-heavy
- Sales Bot — skip; violates no-calls constraint

## 6. Non-negotiable constraints (carried over from COO brief + QC-STANDARDS.md)

- **Trust-bar §1:** never fake DVM/credentials, never first-person
  hands-on claims, never fake clinical scenes
- **No paid favorable reviews** on petfood-com / petfoods-com /
  dog-com / fish-com / petsupplies.com / askthevet.com
- **FTC affiliate disclosure** must appear above the fold on any page
  with affiliate links (enforced by `AffiliateLink` primitive per
  Directive 2)
- **Pet insurance** — never present a single brand as "best" without
  a comparison table; always disclose the affiliate relationship
  inline
- **No phone calls.** No outbound sales. No relationship-heavy
  sponsorships. (Carlo's portfolio-wide operating preference.)

## Definition of done

This handoff is "done" when:

1. ✅ COO orchestrator acknowledges receipt (PR comment or replying
   handoff doc).
2. Directive 1 (Skimlinks site-wide): shipped to production.
3. Directive 2 (`AffiliateLink` primitive + `/go/[vendor]/[sku]`
   redirect): shipped to production, ReviewCard migrated.
4. Directive 3 (ImpactRadius wired for pet insurance Phase 1):
   shipped to production on vets-co + dog-com.
5. Directive 4 (Mailchimp welcome sequences for all 7 magnets):
   automations live in Mailchimp.
6. Directive 5 (`getCrossPortfolioRecommendations`): shipped + at
   least 20 `CrossPortfolioCard` placements active.
7. Directive 6 (4 new domain MVPs): at least askthevet.com and
   seniorpetpharmacy.com live with one revenue path each.
8. Bot Specs A-D: at least 2 spawned and producing weekly handoffs.

Expected end-state by 2026-08-28 (90 days): $15-60k MRR combined
across portfolio per Architect §4 sequence projections.

---

_Architect signs off. The COO orchestrator and any implementation_
_agents should treat MONETIZATION-ARCHITECT.md as canonical and this_
_doc as the active task queue. Future architect updates will land as_
_new `ops/handoffs/architect-to-coo-<date>.md` files._
