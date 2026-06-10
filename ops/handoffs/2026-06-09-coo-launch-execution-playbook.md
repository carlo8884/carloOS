---
from: COO
to: Carlo / CSRO
status: ready (execute on launch greenlight)
created: 2026-06-09
next_action: When you greenlight launch, execute Phase 1→5 in order for Vets then Dog. ~most steps are 5–30 min web-form/CLI actions.
lane: COO operational playbook (the deferred launch phase — Carlo executes the spend/DNS/secret steps)
---

# Launch execution playbook — turnkey deferred-phase sequence

Everything COO-side is structurally green (4 tools, GEO/trust/schema, 0 affiliate leaks, FTC-clean — see acquirer-readiness checklist 2026-06-09). The only things between "ready" and "earning + measured" are the deferred, Carlo-gated steps. This is the exact sequence so the launch is fast and low-risk. **Launch Vets first, then Dog** (highest revenue-density, all-Impact, lowest dependency).

Owner key: **COO** (me, repo/CI), **CARLO** (spend/DNS/accounts/secrets).

## Phase 0 — Land the work (do first, unblocks everything)
- [ ] **COO/CARLO:** merge `#364` (feature branch `claude/happy-curie-AOZay`) to `main`. It carries all session work, gates green. After merge:
  - [ ] **COO:** refresh `STATUS.md` + `DASHBOARD.md` to reflect launched-readiness (held until now per directive).
  - [ ] **COO:** rebase/close any remaining stale PRs; confirm active backlog stays <5.
- Verify: `main` green on CI (`verify`, `audit`); `npx tsc` clean per app (modulo the known sandbox font/JSX env noise).

## Phase 1 — Affiliate activation (highest ROI; do BEFORE DNS so tags are live at launch)
Per revenue-architecture review (2026-06-09): **Impact.com is the single highest-ROI activation** — one account → ~13 insurance carriers across Vets + Dog.
- [ ] **CARLO:** apply to **Impact.com** (self-serve web form; no calls). Then **Amazon Associates** (tag `boltonpets20-20` already wired) + confirm **Skimlinks** (publisher `303850X1791986`, live on Dog).
- [ ] **CARLO:** as each approval lands, set the Vercel env vars (per `2026-05-30-affiliate-wiring-round-1-applications.md`): `AFF_<VENDOR>_TAG` (uppercased vendor key, hyphens→underscores). Vets carriers: `AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`, `AFF_LEMONADE_TAG`, `AFF_PUMPKIN_TAG`, `AFF_EMBRACE_TAG`, `AFF_MANYPETS_TAG`, `AFF_FETCH_TAG`, `AFF_SPOT_TAG`, `AFF_FIGO_TAG`, plus `AFF_AMAZON_TAG`, `AFF_CHEWY_TAG`.
- Safe failure mode: if an env var is unset, `/go` still redirects — only the attribution tag is missing. So partial activation is fine; tags light up incrementally.
- Verify (COO): hit `/go/<vendor>/<sku>` on a preview → confirm the redirect URL contains the real tag once the env var is set.

## Phase 2 — DNS flip (Network Solutions — Carlo-manual)
- [ ] **CARLO:** point **vets.co** → Vercel (per `scripts/vercel-bootstrap.sh` / Vercel project domain settings). Then **dog.com**.
- [ ] **CARLO:** confirm SSL/cert provisioned; `https://vets.co/robots.txt` and `https://vets.co/llms.txt` resolve.
- Verify (COO): homepage, a hub, a tool (`/tools/insurance-finder`), and `/go/<vendor>/test` all 200/redirect on the live domain.

## Phase 3 — Analytics + Search Console (start the traffic-history clock)
The acquirer-readiness gap is "no traffic history." Stand these up at DNS-flip so the ≥90-day trend starts immediately.
- [ ] **CARLO:** create **GA4** properties (vets.co, dog.com); add the measurement ID as a Vercel env var (the GA guard in `layout.tsx` only injects when a real ID is set — currently `G-XXXXXXXXXX` placeholder).
- [ ] **CARLO:** verify **Google Search Console** (DNS TXT or the existing sitemap), submit `https://<domain>/sitemap.xml`.
- [ ] **CARLO (optional):** Bing Webmaster Tools (same sitemap) — cheap incremental AI-surface coverage.
- Verify (COO): GA4 realtime shows the test visit; GSC accepts the sitemap; `llms.txt` is fetchable (AI-crawler signal).

## Phase 4 — Launch-quality final gate (COO, pre-announce)
- [ ] **COO:** run the pixel-review checklist (`2026-06-09-pixel-review-checklist.md`) on the LIVE Vets + Dog URLs (the differentiation items are now valid post image-sync).
- [ ] Confirm: Monetization's Vets funnel-404 fix is merged (revenue blocker — see revenue-architecture review); Visual's Dog emoji/SVG + imagery landed.
- [ ] All three CI gates green on `main`; no Tier-1 trust/valuation risk (CSRO/IR sign-off).

## Phase 5 — Post-launch measurement (first 90 days → the valuation data)
- [ ] **COO:** weekly GSC/GA4 read — organic trend, top pages, tool engagement (Finder/triage/compare), `/go` click events.
- [ ] **COO:** wire a simple traffic→revenue-per-page view (the post-launch dashboard spec — can be built when GA4 data exists).
- [ ] Trigger criteria for the next launch wave (Ferret/PetFood/Lizard/Fish) + acquisition outreach: per acquirer-readiness checklist — when Vets/Dog show a clean ≥90-day traffic+revenue trend.

## The one-line value
Phases 1–3 are ~a few hours of Carlo web-form/CLI work and a DNS change; everything they switch on is **already built and verified**. Post-flip, Vets/Dog earn + accumulate the traffic-history that turns "structurally green" into "fundable exit" — no rebuild, just time.

— COO
