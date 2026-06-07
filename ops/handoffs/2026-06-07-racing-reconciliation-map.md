---
from: Horses.com Vertical Specialist (Racing Bot)
to: CSRO (controller — decides the merge), COO (implements approved ports)
status: decision-requested — CSRO to approve dispositions before any porting
created: 2026-06-07
re: Reconciliation map — staging (apps/horse-racing) vs live Horses.com racing vertical (apps/horses-com/racing)
rule: Carlo 2026-06-07 — STOP new racing builds; one clean premium vertical; CSRO controls; COO implements; I do not port.
---

# Racing reconciliation map — staging vs live Horses.com

**Why this exists (Carlo 2026-06-07):** I built ~44 pages in a **standalone staging app**
(`apps/horse-racing`) while COO **already shipped a racing vertical on the real Horses.com**
(`apps/horses-com/racing`). Two parallel racing builds = merge debt + duplicate-content risk. Carlo
halted new racing builds and asked for this map so **CSRO decides** what lands on Horses.com. **I have
ported nothing and will port nothing until CSRO approves.**

**Critical context flag:** the staging app `apps/horse-racing/vercel.json` builds `--filter=horses-com`
— it is **not a deployed site**, just a content holding pen on PR #178 (44 commits ahead of main, draft).
So "staging" = unshipped source content, not a live competitor. Nothing in staging is in production.

**Legend:** Disposition = `KEEP-HC` (keep Horses.com's, discard staging) · `KEEP-STG` (port staging,
it's better/missing) · `MERGE` (combine best parts) · `DISCARD` · `FUTURE` (backlog idea, don't build now).
Quality/overlap are my honest read; CSRO overrides. All staging content is trust-safe (QC §1, non-wagering),
already CI-green (trust-guard 782/0, link-check, metadata-policy, tsc).

---

## 1. Live Horses.com racing vertical (the baseline — COO-built, on main)
`/racing` hub + 11 spokes: `thoroughbred-flat-racing`, `harness-racing`, `quarter-horse-racing`,
`jump-racing`, `triple-crown`, `breeders-cup`, `understanding-race-types-and-classes`,
`racehorse-training-and-conditioning`, `the-people-of-racing`, `off-track-thoroughbred-aftercare`,
`glossary`. Plus `/disciplines/barrel-racing` (Western, relevant to Equine Network gravity).
**This is the canonical vertical. Default = protect it; staging must clear a bar to displace or extend it.**

---

## 2. DIRECT OVERLAPS — staging duplicates a topic Horses.com already has

| Topic | Horses.com (live) | Staging (mine) | Recommended disposition | Notes |
|---|---|---|---|---|
| Race types/classes | `understanding-race-types-and-classes` (1 page) | `race-types` hub + 7 spokes (maiden/claiming/allowance/optional-claiming/stakes/graded/handicap) | **MERGE → lean KEEP-STG depth** | HC has one overview page; staging has a 7-spoke deep cluster. Recommend: keep HC's overview as the hub, port staging's 7 spokes beneath it. Highest-value merge on the board. |
| Triple Crown | `triple-crown` (1 page) | `major-races` hub + `triple-crown` + Derby/Preakness/Belmont/Breeders' Cup | **MERGE** | Overlap on Triple Crown + Breeders' Cup (HC has BC too). Staging adds Derby/Preakness/Belmont individual explainers. Recommend port the 3 missing leg-pages; reconcile the 2 dupes (CSRO picks the better text). |
| Breeders' Cup | `breeders-cup` | `major-races/breeders-cup` | **KEEP-HC** | Straight dupe. Keep HC's; discard staging's unless CSRO judges staging's materially better. |
| Training/conditioning | `racehorse-training-and-conditioning` (1 page) | `training-safety` hub + 6 spokes | **MERGE → KEEP-STG depth** | HC has one page; staging has 6 (training, backstretch workforce, track safety, injury prevention, fitness, raceday routine). Recommend port the non-dupe spokes; fold HC's page into the training spoke. |
| People of racing | `the-people-of-racing` (1 page) | `racing-roles` hub + 4 (jockey/trainer/owner/official) | **MERGE → KEEP-STG depth** | Same topic; staging is structured per-role with schema. Recommend port staging's 4 role pages under HC's section, or replace. CSRO picks. |
| Glossary | `racing/glossary` | `glossary` + `[slug]` | **KEEP-HC** | HC already has the racing glossary in-place. Staging glossary = discard or harvest any missing terms only. |
| OTTB aftercare | `off-track-thoroughbred-aftercare` | (covered in staging `ownership`/heritage tone) | **KEEP-HC** | HC owns this well. No port. |

---

## 3. STAGING-ONLY — topics Horses.com does NOT yet have (net-new candidates)

| Cluster (staging) | Pages | Disposition | Monetization | Visual need | Trust risk | Hybrid fit |
|---|---|---|---|---|---|---|
| `bloodstock` (sales/pedigree/what-is-bloodstock) | hub + 3 | **KEEP-STG (port)** | affluent → ownership funnel; bloodstock/insurance lead-gen (counsel-gated) | pedigree diagram, sales-ring photo (licensed, no AI) | LOW (educational) | ✅ strong — D12 Tier A |
| `racing-history` (origins/Secretariat/Man o' War/great-mares/milestones) | hub + 6 | **KEEP-STG (port), light fact-check** | display; authority/GEO | heritage archival imagery (rights-cleared) | LOW-MED — superlatives opinion-framed; verify dates/records | ✅ strong citation magnet |
| `racehorse-care` (daily care/nutrition/hoof/recovery/turnout/transport) | hub + 6 | **MERGE-CHECK** vs HC health/care/nutrition sections | supplement/tack affiliate (overlaps Saddle/HC) | care photography (no AI) | MED — general only, defer-to-vet/farrier | ⚠️ overlaps HC's existing `health`/`care`/`nutrition` top-level sections — CSRO must de-dup across the WHOLE domain, not just /racing |
| `ownership` (hub + should-you-own/fractional/syndicates + cost-calculator + ways-in + playbook) | 6 | **MERGE-CHECK** vs HC top-level `ownership` | **highest racing monetization** — syndicate referral + insurance (Carlo-gated); paid playbook | aspirational ownership imagery | MED — securities: educate-not-solicit | ✅ high value BUT HC already has an `ownership` section — reconcile, don't duplicate |
| `experiences` (race-day/travel/bucket-list) | hub + 3 | **FUTURE / KEEP-STG-lite** | experience/travel affiliate (Carlo-gated) | race-day photography | LOW | 🟡 nice-to-have, not core authority |
| `gear` (starter-kit/tack/grooming buyer's guides) | hub + 3 | **DISCARD / defer to Saddle.com** | tack affiliate | product imagery | MED (no "we tested") | ❌ DUPLICATES Saddle.com's lane + HC `tack` — do not port; Saddle owns tack |
| `first-derby` (beginner on-ramp) | 1 | **KEEP-STG (port)** | funnel → newsletter/ownership; seasonal display | Derby-day imagery (no marks) | LOW | ✅ strong casual→committed wedge |
| `newsletter` ("The Form" landing + samples) | 3 | **FUTURE** | list-building → later paid tier | brand imagery | LOW (no tips) | 🟡 only if CSRO/Monetization want a racing newsletter surface |
| `predict` (no-prize skill game) | 1 | **HOLD / FUTURE** | engagement → list | UI only | MED — no-prize only; CSRO/Carlo gate on any game | 🟡 engagement toy, not authority; defer |

---

## 4. STAGING-ONLY infrastructure (NOT for Horses.com — flag for retirement)

These exist because staging started life as a standalone "racing intelligence app." They are **off-strategy
for the Hybrid editorial vertical** and should NOT port:
- `racecards/[id]`, `tracks`, `trainers`, `jockeys`, `horses` profile systems, `methodology`, `track-record`
  — these were built around the **parked value/EV ratings engine**. **Disposition: DISCARD / leave in the
  parked app.** They imply a data product (D12 Tier B = NO-GO) and several lean on the ratings engine.
- The `analyze`/ratings engine itself: **stays parked** (dir-016 / D12). Not for Horses.com.

---

## 5. Whole-domain de-duplication CSRO must arbitrate (beyond /racing)

The biggest risk isn't within /racing — it's that staging `racehorse-care`, `ownership`, and `gear`
**overlap Horses.com's existing top-level sections** (`health`, `care`, `nutrition`, `ownership`, `tack`,
`supplements`). Porting them into `/racing` would duplicate content the domain already has elsewhere =
canonicalization harm. **Recommendation:** racing-specific *angles* only (e.g. "nutrition of the equine
athlete" distinct from general feeding); everything generic stays in HC's existing sections. CSRO to rule.

---

## 6. Recommended migration plan (for CSRO approval — I execute none of it unsolicited)

**Tier 1 — highest value, lowest risk (recommend approve first):**
1. Port `race-types` 7 spokes beneath HC's existing race-types overview. (MERGE)
2. Port `major-races` 3 missing Triple Crown leg pages (Derby/Preakness/Belmont). (MERGE)
3. Port `bloodstock` (hub + 3) — net-new, clean. (KEEP-STG)
4. Port `racing-history` (hub + 6) after a fact-check pass. (KEEP-STG)
5. Port `first-derby` beginner on-ramp. (KEEP-STG)

**Tier 2 — needs de-dup decision first:** `racing-roles` vs `the-people-of-racing`; `training-safety`
spokes vs HC's training page; `ownership`/`racehorse-care` vs HC's existing sections.

**Discard / don't port:** `gear` (Saddle lane), `breeders-cup` dupe, profile/racecard/ratings infra,
`glossary` dupe.

**Process:** CSRO approves dispositions → COO ports the approved set into `apps/horses-com` (their lane) →
staging app `apps/horse-racing` is retired (PR #178 closed without merge, or merged docs-only). I assist
with content/scoping on CSRO dispatch; **I do not commit into `apps/horses-com`.**

---

## 7. What I need from CSRO
1. **Approve/edit the dispositions** in §2–§4 (the keep/merge/discard/future calls).
2. **Rule on the whole-domain de-dup** in §5 (racing-care/ownership vs HC's existing sections).
3. **Approve the Tier-1 migration set** in §6 so COO can be dispatched.
4. **Confirm staging-app retirement** (close PR #178 unmerged once content is harvested).
5. Tell me which (if any) **scoping/fact-check packets** you want me to prep next (I can fact-check
   racing-history, or draft the racing-specific angle for care/nutrition that avoids HC overlap).

**I am paused on all new racing-page builds per Carlo. Awaiting CSRO.**
