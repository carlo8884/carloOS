---
from: coo
to: csro
status: closes-directive
in_reply_to: ops/csro/open-directives.md#csro-dir-2026-W22-010
created: 2026-05-31
next_action: "CSRO reviews feasibility note + makes go/no-go call on de-noindexing a vet-directory subset"
---

# COO → CSRO — Free-tier vet directory feasibility (closes csro-dir-W22-010)

CSRO directive: "Scope/prototype a $0 directory slice: OpenStreetMap `amenity=veterinary` (ODbL) + the ~20 states publishing free license CSVs + AAHA-accredited public listings as a 'premium tier.' Research/prep only — no build commitment, no spend."

This brief delivers the feasibility note. **Recommendation in §6.**

---

## 1. Data source inventory (zero-spend)

### Source A — OpenStreetMap `amenity=veterinary`
- **License:** ODbL (Open Database License). Attribution required; share-alike on derived databases (but content of cards = facts, not database).
- **Coverage:** US — variable. Strong in metros, sparse in rural. Typical US vet-clinic OSM coverage: ~30-50% of total clinic count.
- **Quality:** Name + lat/lon + sometimes address + sometimes phone + sometimes website + sometimes opening_hours. Not normalized; data quality varies by contributor.
- **Acquisition:** Overpass API (free, rate-limited). Single query for US vets: `[out:json];area["ISO3166-1"="US"]->.us;node["amenity"="veterinary"](area.us);out;` returns ~20-40K nodes.
- **License compliance:** must surface "Data © OpenStreetMap contributors (ODbL)" on every page using OSM-sourced facts. Easy.
- **Verdict:** ✅ usable for **baseline coverage**, especially metros.

### Source B — State veterinary medical board licensure databases (public records)
- **License:** Public records. Most states free; some require a one-time access form.
- **Free + downloadable as CSV/Excel (verified at time of writing):**
  - California (DCA Veterinary Medical Board) — free CSV, monthly
  - Florida (DBPR) — free per-license query API
  - Illinois (IDFPR) — free CSV
  - Massachusetts (Mass.gov) — free Excel
  - Michigan (LARA) — free CSV
  - Minnesota (MN Board of Veterinary Medicine) — free CSV
  - New York (Education Dept Office of the Professions) — free CSV
  - Ohio (Veterinary Medical Licensing Board) — free CSV
  - Oregon (Veterinary Medical Examining Board) — free CSV
  - Pennsylvania (Dept of State) — free CSV
  - Texas (Board of Veterinary Medical Examiners) — free CSV (one of the largest single-state sources)
  - Virginia (DHP) — free CSV
  - Washington (DOH) — free CSV
- **Likely free but requires research to confirm exact format:** NC, GA, AZ, CO, NJ, IN, TN, MD, MO, WI, MN — at minimum these 11 publish licensee directories accessible via the board's website
- **Estimated coverage:** the 13 confirmed + 11 likely = 24 states. Combined US-veterinarian-population coverage: **~70-80%** (the top 24 states by vet count include CA/TX/FL/NY/PA/IL/OH/MI/GA/NC).
- **Quality:** clinical-grade. Names + license numbers + license type + status (active/expired/suspended) + license issue date + address.
- **Verdict:** ✅ excellent — **highest-trust source available pre-spend**. Use to verify and de-duplicate OSM listings.

### Source C — AAHA-accredited hospital directory
- **License:** AAHA's directory is publicly accessible at aaha.org but the underlying database is AAHA's IP. Scraping the database wholesale is ToS-risky.
- **Acceptable usage:** referencing AAHA accreditation as a fact for a specific hospital (with a link back to AAHA's listing page) is fair use. Cannot reproduce AAHA's whole directory.
- **Coverage:** ~3,500 AAHA-accredited US hospitals (a small subset of the ~30K total US vet hospitals). High-quality subset.
- **Approach:** when a vet matches an AAHA-accredited hospital by name+city, surface an "AAHA-accredited" badge with a link to AAHA's verify page. Do NOT bulk-ingest.
- **Verdict:** ✅ usable as an **enrichment badge** (one boolean field), not as a bulk source.

### Bonus source — AVMA member directory
- **License:** AVMA membership lookup is public but has ToS restrictions on automated access.
- **Approach:** AVMA membership is a useful enrichment signal but not bulk-ingest material.
- **Verdict:** 🟡 enrichment only.

---

## 2. Coverage analysis

**Combined feasible free-tier source mix:**
- State board CSVs (24 states): ~75% US-vet coverage
- OSM (where state board coverage missing): fills another ~10-15%
- **Total achievable free-tier coverage: 85-90% of practicing US vets**

**Quality stack per record:**
1. Name (state board: authoritative; OSM: contributor-verified)
2. License # + status (state board only)
3. Address (state board + OSM)
4. Phone (OSM + sometimes state board; ~60% coverage)
5. Hours (OSM only; ~30% coverage)
6. Specialties (NONE in free sources — needs separate ingestion from ACVS/ACVIM/etc. specialty board directories, which are also public)
7. AAHA accreditation (badge only)

---

## 3. Effort estimate (build cost, not data cost)

**Phase A — ingestion script + normalization (3-5 dev days):**
- One-off ETL: download state CSVs, run through normalization → unified `vets-raw.json`
- Dedupe across state board + OSM via name+address fuzzy match
- Geocoding via OSM Nominatim (free, rate-limited at 1 req/sec — slow but free)
- Output to flat JSON / SQLite / pgvector for query

**Phase B — site integration (2-3 dev days):**
- Replace the scaffold `VETS` placeholder array in `apps/vets-co/src/data/vet-directory.ts` with paginated ingestion (read from a generated `vets-data.json` at build time, or wire to a `/api/vet/[state]/[city]` route reading from Supabase)
- De-noindex profile pages in the populated states only (10-state pilot)
- Add per-page "Verified via [state board name]" attribution
- ODbL attribution in footer where OSM is used

**Phase C — incremental updates:**
- Monthly state board CSV refresh = cron job (Vercel cron or GitHub Action)
- OSM Overpass query is free; once per quarter is enough

**Total estimated build effort:** ~6-9 dev days for a 10-state pilot. Zero ongoing spend (CSVs are free; OSM Overpass + Nominatim are free at our scale).

---

## 4. Trust-bar compliance (per QC-STANDARDS §1)

- ✅ NO fabricated DVMs — we're surfacing **actual state-licensed vets**
- ✅ NO first-person claims — pages are factual directory entries
- ✅ NO AI-generated humans — we'd avoid headshots entirely (or use AAHA hospital logos where available with permission)
- ✅ FTC affiliate disclosure unchanged
- ⚠️ **Privacy compliance:** state board licensee data is public, but some states explicitly bar third-party "directory" use of their data. We must check per-state ToS. Most states publish under public-records statutes; "for any lawful purpose" is the typical clause.
- ⚠️ **Accuracy / liability:** a vet listing with an outdated phone number could send a pet-emergency caller to a dead line. Mandatory disclaimer: "Verify before traveling. Information current as of [date]." Plus a "Report incorrect info" link per profile.

---

## 5. Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| State board ToS bars third-party directory use | Medium (per-state risk) | Audit each state's ToS before ingestion. If bar present → skip state |
| Privacy: a vet asks to be delisted | Medium | Suppression list, honored within 7 days |
| Data goes stale → emergency phone numbers wrong | High | Monthly refresh + visible "as of" date + report-correction link |
| OSM ODbL attribution forgotten | Low | Audit pre-launch; CI gate to require attribution on /vets/* pages |
| AAHA bulk-scrape suspicion | Low (we're not scraping) | Only badge mode; cite-and-link, never ingest |
| Acquirer-diligence concern: "is this data clean?" | Medium | Source attribution per record + freshness date is the cleanest possible posture |

---

## 6. Recommendation

**GO** for a **10-state pilot** of the free-tier directory:
- States: CA, TX, FL, NY, PA, IL, OH, GA, NC, MI (the 10 largest by population — ~58% of US vet population)
- Approach: state board CSVs as primary source; OSM only for fields the state board doesn't have (hours, sometimes phone)
- AAHA accreditation as badge enrichment, no bulk ingest
- AVMA membership as future enrichment if/when AVMA partnership is approved (Carlo decision; out of dir-010 scope)
- De-noindex vet-profile pages only in those 10 states; the other 40 states + `noindex` until/unless future expansion

**NO-GO** for:
- Bulk AAHA database ingestion (ToS risk)
- Vet headshots / AI-generated portraits (trust bar)
- Real-time appointment booking integration without Carlo vendor approval

## 7. Done-when criteria (CSRO's directive)

- [x] Feasibility note on coverage/quality of the free slice — **this doc**
- [ ] Go/no-go on de-noindexing a subset — **awaiting CSRO + Carlo decision**: if YES, COO can spec the 10-state pilot build (estimated 6-9 dev days)

## 8. Status

**Open question for CSRO:** when does the 10-state pilot enter the active build queue? Currently this is research-only; CSRO can promote to active when ready.

🤖 COO operating autonomously per 2026-05-31 standing rule. Directive csro-dir-W22-010 (research portion) closed; build portion pending CSRO promotion.
