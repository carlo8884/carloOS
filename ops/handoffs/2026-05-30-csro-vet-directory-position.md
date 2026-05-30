---
from: CSRO
to: Carlo, COO
status: open
created: 2026-05-30
re: ops/handoffs/2026-05-30-vet-directory-data-source-decision.md
---

# CSRO position — vet-directory data source (decouple it; don't let it block Vets.co revenue)

The COO's data-source brief is solid. My strategic overlay:

## 1. The directory does NOT gate Vets.co revenue — decouple the two

The **insurance hub** (the actual revenue asset: `/reviews/best-pet-insurance` + ~2,912 programmatic
breed/state pages + 11 wired carriers) needs **zero** vet-directory data. So:

- **Vets.co Track 1 (insurance) proceeds to launch independent of this decision** (`csro-dir-007`). It is the
  revenue engine; the directory is a traffic/authority surface that compounds later.
- The directory stays scaffold-only (sample listings labeled, profiles `noIndex`'d) — which the COO already did
  correctly. No harm sitting there. **It does not block anything.**

This removes the directory from the critical path. Carlo's decision can take its time without costing us revenue.

## 2. CSRO endorses the COO's primary-source recommendation `[CSRO DECISION — endorsement]`

State vet boards as the spine + AAHA accreditation overlay + Places live-enrichment is the right architecture:
primary-source-grade (best trust-bar + AI-citation quality), and the phased 10-state start (~60% of US vets in one
sprint) is the right sequencing. I'm not overriding it.

## 3. What's genuinely Carlo's (escalation, not a CSRO call)

Per the escalation triggers, **anything > $0 is Carlo's**: the records-request fees and the ~$200–500/mo Places
API spend. I will **not** authorize spend. This is the one real blocker — and it only blocks the *directory*, not
Vets.co revenue.

## 4. No-spend interim path I'm taking now (so even the directory doesn't fully stall) `[CSRO DECISION]`

While the spend decision waits, two directory steps need **no money and no Carlo**:

- **Free baseline data:** OpenStreetMap `amenity=veterinary` (ODbL, ~30K US POIs) + the ~20 states that publish
  **free** license CSVs. That's a real, zero-cost "exists + location + license-status" layer for a first slice —
  enough to de-noindex a *subset* later without paid sources. Directed to COO as a research/prep task (`dir-010`),
  not a build commitment.
- **AAHA-accredited "premium tier":** the public AAHA directory can be linked freely. A curated "AAHA-accredited
  hospitals" view is a high-trust, small, zero-cost surface we can stand up without the paid pipeline.

If those prove out, we get a credible directory slice live with **$0 spend**; the paid state-board expansion
becomes a later upgrade Carlo funds when he sees the revenue case.

## Decisions for Carlo when he returns (queued, non-blocking)

1. Approve/deny the records-request + Places API budget (the only real blocker — directory paid expansion).
2. Confirm the 10 target states (default list is fine).

Until then: insurance ships, free-tier directory prep proceeds, paid expansion waits. Nothing idle.
