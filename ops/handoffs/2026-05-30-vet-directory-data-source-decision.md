---
from: coo-bot
to: carlo
status: needs-decision
created: 2026-05-30
next_action: Carlo selects a primary data source; COO drafts ingestion pipeline brief next.
---

# Vet directory — data source decision brief

## Context

PR `feat/vets-co-vet-directory-scaffold-2026-05-30` ships the routing,
templates, and JSON-LD schema for the Vets.co programmatic vet directory
(`/vets/[state]/[city]/[slug]`). The scaffold is wired against 6 sample
placeholder vet records — clearly labeled "Sample listing — not a real vet"
on every profile page, and the profiles themselves are `noIndex`'d in
metadata until a verified data source is selected.

This brief presents 5 candidate data sources for populating real vet
listings. Each has a different cost/legal/coverage tradeoff. The directory
will not de-noindex profiles until you (Carlo) pick one and we complete an
ingestion + verification pipeline.

## Why this requires a decision (not a default)

Vet directories are a high-citation, high-traffic surface — but the
underlying data has real legal and ethical guardrails:

- **Licensure data has state-by-state ToS variation.** Some state vet boards
  permit bulk export under open-records statutes; others require explicit
  licensee consent or restrict commercial republication.
- **Commercial APIs (Google Places) have caching restrictions.** You can
  display data live but can't legally cache long-term or build a competing
  directory database from it.
- **Crowd-sourced data (OSM) is freely usable but coverage is uneven.**
- **Trade associations (AAHA, AVMA) have member directories under copyright.**

Picking the wrong source could trigger a takedown, a ToS suspension, or a
copyright claim. So this is a Carlo-only call.

## Five candidate sources

### 1. State veterinary medical board licensure databases (51 boards)

- **Coverage:** Comprehensive (every licensed vet in the US, by state).
- **Cost:** $0 - several thousand dollars one-time, depending on state.
  Most states publish license data under open-records / FOIA-style statutes;
  some charge a per-record or per-report fee. ~20 states publish free CSV
  exports; ~30 require a written records request.
- **Legal:** Generally publishable per state public-records laws, but
  individual states have ToS language we must vet (commercial use,
  re-distribution, attribution requirements). Texas, California, and New
  York all permit commercial republication with attribution — most
  permissive baseline.
- **Trust-bar (QC §1):** PRIMARY-SOURCE-GRADE — citations point at the
  authoritative regulator. Best AI-citation quality (Perplexity, ChatGPT,
  AI Overviews all prefer regulator-sourced data for licensure facts).
- **Ingestion burden:** Heavy. 51 different formats (CSV, PDF, scraped
  HTML, web service). Estimated 80-120 hours engineering for a first-pass
  pipeline, plus ongoing per-state monitoring as boards update.
- **Verification:** Strongest. License-status freshness can be re-verified
  on every page render via board lookup (cache hourly).
- **Recommendation if chosen:** Phase 1 is the 10 largest states by pet
  population (CA, TX, FL, NY, PA, IL, OH, GA, NC, MI) — ~60% of US vets in
  one engineering sprint. Phase 2 fills the long tail.

### 2. AVMA (American Veterinary Medical Association) member directory

- **Coverage:** ~105,000 US veterinarians (≈70% of licensed vets — AVMA
  membership is voluntary). Strongest in clinical-practice cohorts.
- **Cost:** No public bulk-export. Member directory is licensed
  per-record / per-listing for marketing partners — pricing not public,
  estimated $0.05-$0.20 per record one-time + annual refresh. Possible
  partnership-grade access through editorial relationship (uncertain).
- **Legal:** Copyrighted directory. Use requires explicit AVMA license
  agreement. Republication outside the license is infringement.
- **Trust-bar:** Strong — AVMA membership is a recognized professional
  signal, but it is NOT proof of active licensure. Must be combined with
  state board data to claim "verified" status.
- **Ingestion burden:** Medium (single source, well-structured).
- **Verification:** Moderate — AVMA refreshes membership lists annually;
  licensure facts need a second source.
- **Recommendation if chosen:** Strong as an enrichment overlay on top of
  state board data, weak as a sole source.

### 3. AAHA (American Animal Hospital Association) accredited hospital directory

- **Coverage:** ~3,700 accredited hospitals (only ~12-15% of US practices
  pursue AAHA accreditation). HIGH-QUALITY but small.
- **Cost:** Public-facing directory is free to consume; bulk export likely
  requires a partnership conversation. No published API.
- **Legal:** AAHA's public directory may be linked-to freely; scraping
  for republication is a gray area requiring permission. Same posture as
  AVMA.
- **Trust-bar:** EXCELLENT — AAHA accreditation is the highest voluntary
  standard for US veterinary hospitals. A directory limited to AAHA-
  accredited practices would be a strong "premium tier" play.
- **Ingestion burden:** Light (one source, well-curated).
- **Verification:** Strong — AAHA re-evaluates accreditation every 3 years.
- **Recommendation if chosen:** Use as a "Premium / AAHA-accredited"
  filter ribbon on top of a broader directory. Not a sole source.

### 4. OpenStreetMap `amenity=veterinary` POI data

- **Coverage:** ~30,000 POIs in the US tagged `amenity=veterinary`.
  Coverage is community-maintained — strong in metros, patchy in rural
  areas.
- **Cost:** Free. Data is ODbL-licensed (Open Database License) — requires
  attribution and "share-alike" treatment of any derived database.
- **Legal:** Most permissive option. ODbL is widely used in production
  directories (Pet Wellbeing, BringFido, others).
- **Trust-bar:** WEAKEST — POI tags can be added by anyone. Practice
  metadata (hours, phone, specialties) is incomplete or stale on a
  majority of entries.
- **Ingestion burden:** Light (single bulk download + diff updates via
  Overpass API).
- **Verification:** Weakest — no authoritative refresh signal.
- **Recommendation if chosen:** Use as a free baseline "exists / location"
  layer, enriched by state-board licensure status and Places-API hours.
  Not strong enough alone for the trust-bar standard.

### 5. Google Places API

- **Coverage:** Comprehensive — Google's POI database includes nearly all
  US veterinary practices with reviews, hours, photos, geo.
- **Cost:** Volume-based — Places Details $17 / 1,000 lookups (first 100K
  per month free under standard credit). Estimated $200-$500 / month at
  scale for refresh + new-visitor enrichment, plus a one-time crawl.
- **Legal:** STRICT. Per Places API ToS:
  - You cannot cache Places data > 30 days.
  - You cannot build or maintain a competing local-search directory using
    Places content alone.
  - Attribution ("Powered by Google") required.
  - Cannot use Places data to train ML models.
- **Trust-bar:** MIXED — review counts and hours are accurate; vet
  credentialing (specialty board cert, license status) is NOT available.
- **Ingestion burden:** Light initially, ongoing-heavy (must re-fetch every
  30 days for cached entries).
- **Verification:** Moderate — Google's data freshness is high but it is
  consumer-reported, not regulator-sourced.
- **Recommendation if chosen:** Useful as a live-only enrichment
  layer (hours, ratings, photos) on top of state-board / AAHA data. Not
  viable as a sole source given the caching restriction — we cannot legally
  ship a static `/vets/[state]/[city]/[slug]` page if its content is sourced
  primarily from Places.

## COO recommendation (for Carlo's review)

**Primary source:** State veterinary medical board databases — pick the 10
largest pet-population states first (~60% of US vets in one sprint).

**Enrichment layers:**
- AAHA accreditation status (free public directory link or licensed bulk
  export) — surfaces as a "Premium / AAHA-accredited" filter chip.
- Google Places API for live hours, ratings, and photos (within the 30-day
  cache window, with proper attribution). Used at render-time, not
  pre-baked into the static page.

**Avoid as primary:**
- AVMA bulk (cost + copyright complexity for marginal coverage gain over
  state boards).
- OSM-only (insufficient trust-bar quality).
- Google Places only (caching restriction makes it incompatible with
  static-page directory).

## Estimated path to first 10-state directory

| Step | Effort | Owner |
|---|---|---|
| Pick the 10 target states | < 1 hour | Carlo (decision) |
| Records-request package per state | 2-3 weeks elapsed (mostly waiting on board responses) | COO + sub-bot |
| Schema-normalize 10 state CSV/PDF formats | 40-60 hours | sub-bot |
| Ingestion pipeline (build-time data fetch + JSON snapshot) | 20-30 hours | sub-bot |
| AAHA accreditation overlay | 10-15 hours | sub-bot |
| Places API live-enrichment integration | 15-20 hours | sub-bot |
| QC review (random-sample license verification, dedup, missing-data audit) | 20-30 hours | COO |
| De-noindex + sitemap re-enable | 1 hour | COO |

**Estimated calendar time:** 4-6 weeks from your decision to a live,
verified directory covering ~60% of US vets.

## What I need from you

1. **Confirm or override the primary-source recommendation** (state vet
   boards as the spine).
2. **Approve a budget cap** for one-time records-request fees and Places
   API spend.
3. **Approve the 10 target states** (default: CA, TX, FL, NY, PA, IL, OH,
   GA, NC, MI).

Until then, the scaffold ships as-is — sample listings clearly labeled,
profiles noIndexed, hub and state/city pages indexed and SEO-eligible.

---

Related PR: `feat/vets-co-vet-directory-scaffold-2026-05-30`
Routing surfaces: `/vets`, `/vets/[state]`, `/vets/[state]/[city]`,
`/vets/[state]/[city]/[slug]`
Trust-bar reference: `QC-STANDARDS.md` §1
Lane policy reference: `ops/policies/bot-coordination.md` §5 (Vets.co is
insurance-only for affiliate monetization; vet-booking-software affiliate
later).
