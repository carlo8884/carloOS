# Monetization Bot Handoff — 2026-05-29

**Audience:** the monetization-focused agent.
**Purpose:** brief you on what shipped/is shipping tonight so you can identify quick-win revenue strategies.
**Scope:** new surface area + existing conversion hooks + the gaps you should plug first.

---

## 1. New programmatic SEO surface (shipped tonight or in PR queue)

| Site | Path | Pages | PR | Built-in conversion hook |
|---|---|---|---|---|
| **vets-co** | `/medications/[slug]` | 12 | #108 | Pet-insurance affiliate CTA + "discuss with your vet" callout |
| **vets-co** | `/specialists/[slug]` | 8 | #119 | Pet-insurance affiliate ($3K–15K annual cost framing) + `/reviews/best-pet-insurance` link |
| **lizard-com** | `/health/[slug]` | 15 | #110 | "Find an ARAV-certified reptile vet" callout (vet directory funnel) |
| **horses-com** | `/disciplines/[slug]/equipment` | 6 | #111 | Brands-to-know section, CrossPortfolioCard → saddle-com |
| **saddle-com** | `/brands/[slug]` | 10 | #112 | ReviewCard affiliate hook per brand |
| **petfoods-com** | `/brands/[slug]` | 10 | #114 | WSAVA scorecard + "where to buy" affiliate banner |
| **dog-com** | `/breeds/[slug]/feeding` | 8 | #115 | Vet-consult callout + cross-link to `/reviews/best-dry-dog-food` |
| **petfood-com** | `/life-stage/[slug]` | 7 | #116 | Brand examples (Royal Canin / Hill's / Purina) — affiliate-ready |
| **fish-com** | `/equipment/[slug]` | 6 | #120 | Sidebar → `/reviews/best-*` + Aquarium Cycling Survival Kit lead magnet |
| **ferrets-com** | `/states/[slug]` | 51 | #121 | Petfinder + AFA shelter funnel; CrossPortfolioCard → ferret-com |
| **ferret-com** | cornerstones wave 2 | 6 | (in flight) | Vet-consult callout + EmailCapture |

**Total new pages tonight: ~139** spread across 9 of 10 portfolio sites.

---

## 2. Conversion hooks already wired (DON'T duplicate)

- **EmailCapture** — every site, in sidebar + section variants. Wired to Mailchimp via tags (`puppy-schedule`, `cycling-guide`, `saddle-fit`, `wsava-pet-food`, etc.)
- **CrossPortfolioCard** — placeholder component shipped, used inconsistently. The `getCrossPortfolioRecommendations` helper still doesn't exist in `@carloOS/config` (known gap — multiple agents have flagged it)
- **ReviewCard** — affiliate hook component exists, used on saddle-com brand pages, dog-com review pages, lizard-com review pages
- **Lead magnets shipped tonight (Mailchimp tags):**
  - `dog-com:puppy-schedule` (Free 8-Week Puppy Schedule)
  - `fish-com:cycling-guide` (Aquarium Cycling Survival Kit)
  - `saddle-com:saddle-fit` (12-Point Saddle Fit Checklist)
  - `horses-com:first-horse-90-day` (First-Horse Owner's 90-Day Roadmap)
  - `petfood-com:label-reading` (Reading the Pet Food Label)
  - `lizard-com:first-year-care` (Reptile First-Year Care Schedule)
  - `vets-co:emergency-triage` (Pet Emergency Triage Card)

---

## 3. Quick wins for you to chase

### Tier 1 — high revenue, low effort (do these first)

1. **Wire pet-insurance affiliate** — vets-co just gained **20 medication + specialty pages** with insurance CTAs that go nowhere yet. Apply to: Lemonade Pet, Embrace, Pets Best, ASPCA Pet Insurance, Spot, Healthy Paws, Pumpkin. **Per-lead payout typically $25–80.** Wire ONE network (ImpactRadius or Awin) to all CTAs. Expected: $2–10K/mo within 60 days at current traffic projections.

2. **Chewy affiliate at scale** — Chewy has a generous tiered program ($15 per first-time customer + recurring). petfood-com + petfoods-com + dog-com all have product/brand pages ready. **Easy win:** replace every "shop on Chewy" plaintext with affiliate-tagged links. ~50 pages affected, ~2 hours.

3. **Amazon Associates for fish/lizard/horses** — fish-com `/equipment/[slug]` + saddle-com brand reviews + horses-com discipline equipment all reference specific products. Wire ASIN-based affiliate links. Approval is fast (24-48h). RPM is lower than Chewy/pet-insurance but volume scales with content.

### Tier 2 — medium effort, compounding

4. **SmartPak + Dover for equestrian** — saddle-com + horses-com both need SmartPak + Dover affiliate accounts. SmartPak pays 6–10% on tack, supplements. Equestrian average order value is high ($150-400) so payouts per click are 3-5x higher than dog/cat.

5. **Mailchimp welcome sequences** — 7 lead magnets shipped, ZERO have a follow-up email sequence written. **Write 5-email welcome sequences for each tag.** Sequence pattern: deliver the lead magnet → educational follow-up → product recommendation → bigger product recommendation → review opportunity. Each sequence = ~$1-5/subscriber/year in conversion if done well.

6. **Petfinder / Adopt-a-Pet** — ferrets-com `/states/[slug]` (51 pages) funnels to Petfinder for adoption. Petfinder doesn't have a public affiliate, but Adopt-a-Pet does (~$1-3 per referral). Also: ferret-specific cage + food brands (Marshall, Wysong, Carniwhole) for adoption-triggered purchases.

### Tier 3 — high revenue, longer setup

7. **Display ads (Mediavine, Raptive, Ezoic)** — apply when each site clears the threshold:
   - **Raptive (formerly AdThrive):** 100K monthly pageviews ($30-60 RPM)
   - **Mediavine:** 50K monthly pageviews ($25-50 RPM)
   - **Ezoic:** no minimum, lower RPM ($10-20)
   - Dog.com closest to threshold. Track GA4 monthly.

8. **Pet insurance enterprise deals** — beyond affiliate, pet insurance brands do **co-marketing deals** with niche editorial sites ($5-25K/mo retainer). Vets.co + Dog.com combined surface area is pitch-worthy after 90 days of indexing.

9. **Sponsored content (post-90-day)** — petfood-com brand reviews are the natural target. **Critical: never compromise the independent stance** (QC-STANDARDS.md). Sponsored = clearly labeled "sponsored," and only for brands that pass WSAVA criteria. Otherwise sells the brand for short-term cash.

---

## 4. Gaps you should flag, not fix yourself

- **No affiliate disclosure pages** on most sites yet. Required by FTC. Template: see saddle-com `/disclosures/page.tsx` if it exists.
- **No affiliate link tracking** — every outbound link should carry UTM params + a click-tracking redirect (`/go/<vendor>/<sku>`) for analytics.
- **No revenue dashboard** — once affiliate networks are wired, build a `/dashboard/revenue` (admin-only) that pulls totals from each network's API.
- **No lead magnet thank-you pages** — currently lead magnets go to a generic confirmation. Each should have a dedicated thank-you page with affiliate recommendations.

---

## 5. Cross-portfolio internal linking strategy

Every new page should link to its sister-site equivalent. The links carry SEO authority + conversion intent:

- **dog-com** breed feeding → **petfood-com** life-stage guide → **petfoods-com** brand review
- **horses-com** discipline equipment → **saddle-com** brand review
- **vets-co** medication → **dog-com** breed health (or cat equivalent)
- **lizard-com** health → **vets-co** specialty (ARAV vet pointer)
- **ferret-com** care → **ferrets-com** state legality (regulatory primer)
- **fish-com** equipment → **fish-com** reviews (already wired)

The `CrossPortfolioCard` component exists but lacks data wiring. **Quick fix:** add `getCrossPortfolioRecommendations(siteId, topicSlug)` to `@carloOS/config` that returns 2-3 related sister-site pages. ~30 minutes.

---

## 6. Constraints (non-negotiable)

- **Trust-bar §1 (QC-STANDARDS.md):** never fake DVM/credentials, never first-person hands-on claims, never fake clinical scenes
- **No paid favorable reviews** on petfood-com / petfoods-com / dog-com / fish-com (kills the editorial position permanently)
- **Affiliate disclosure** must appear above the fold on any page with affiliate links (FTC requirement)
- **Pet insurance** — never present a single brand as "best" without a comparison table; always disclose the affiliate relationship inline

---

## 7. Your recommended first 3 actions

1. **Pick the pet-insurance affiliate network** (recommend ImpactRadius — broadest pet-insurance roster) and write the integration brief. Wire ONE brand (Lemonade or Embrace) end-to-end on vets-co as the pilot.
2. **Write the Chewy affiliate wiring brief** — which pages get which affiliate links, what the `/go/chewy/<sku>` redirect should look like.
3. **Mailchimp welcome sequence** — draft the 5-email sequence for the Aquarium Cycling Survival Kit (fish-com) as the first prototype; the pattern then repeats for the other 6 lead magnets.

Each of these is a ~half-day brief that an implementation agent can execute.

---

**Status of the live pipeline as of this brief:**
- 11+ PRs merged tonight
- 8+ PRs in CI queue
- 3 agents still running (Ferret cornerstones, others may have completed by your read time)
- 5 new Vercel projects live (just bootstrapped)
- Image manifest infra shipped (Unsplash + Pexels keys held by Carlo; populates 16 hero/category images via `node scripts/sync-images.mjs`)

Generated by COO orchestration run 2026-05-29.
