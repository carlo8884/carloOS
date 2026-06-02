# CarloOS Opportunity Queue (CSRO-owned)

**Owner:** CSRO. **Created:** 2026-06-01.
Single strategic backlog across all domains + bots. The fleet pulls from here so it never idles —
but volume is never confused with strategy.

## Governing rules (Carlo, 2026-06-01)
1. Keep only the **top 20–50 items ACTIVE** at any time (the "Active Set" below).
2. Refresh / deepen the **Reserve** whenever real useful items drop below ~500 of capacity.
3. Every item carries: **site · lane · priority · value thesis · done-when · category**
   (category ∈ launch-quality | revenue | traffic | trust | visual | strategic).
4. **No filler.** If an item doesn't raise asset value, traffic, revenue, trust, or launch quality,
   it does not belong. The "1000" is a *capacity target the queue grows toward via real
   opportunities* — it is never padded to hit a number.
5. **Current phase: premium launch quality > page expansion.**
6. Content-expansion items may sit in the Reserve but stay **parked** unless CSRO promotes them.
7. Bots receive **small ranked batches**, never the whole queue.
8. Stale items are pruned/merged/downgraded weekly.
9. If anything conflicts with the **Premium Domain Launch Bar**, the bar wins.
10. Only the **Active Set top** is reported to Carlo; he never reads the full queue.

---

## ACTIVE SET — top items (ranked) · 2026-06-01

> Gating reality: per the premium-preview audit
> (`ops/handoffs/2026-06-01-visual-to-csro-premium-preview-audit.md`), **all 8 priority sites FAIL
> the premium bar** until Visual ships + applies the premium first-screen standard. Item A1 unblocks
> the most value.

| # | Site | Lane | Pri | Category | Value thesis | Done-when |
|---|---|---|---|---|---|---|
| A1 | All priority 8 | Visual | P0 | visual / launch-quality | The ONE premium first-screen standard (grid, hero system, homepage-tool pattern, type/color/motion). Unblocks every site's gates 1/3/5/6. | Standard doc + reference design approved by CSRO against the 7 gates |
| A2 | Horses | CSRO/Carlo | P0 | strategic | Positioning decision (general equine authority vs `/racing` flagship) gates Horses + Saddle hero design. | Carlo confirms direction; CSRO records it in the bar |
| A3 | Dog | CSRO/Carlo | P1 | strategic | "Symptom checker" promise resolves to static `/symptoms`. Decide: interactive triage build vs reframe copy. | Decision recorded; routed to COO (reframe) or product (build) |
| A4 | Saddle | Visual | P1 | visual | Saddle shares hero art with Horses (`photo-1553284965…`). Distinct luxury tack hero restores gate 5. | Saddle hero is a unique image; manifest no longer shares with Horses |
| A5 | Ferret | Visual | P1 | visual / launch-quality | Real ferret hero + owner-intent first screen (fix wrong-species defect). Brief shipped #372. | Visual applies #372; CSRO re-checks against bar |
| A6 | Vets | COO | P1 | launch-quality / traffic | Signature hubs (`/tools`,`/data`,`/medications`,`/symptoms`,`/diagnostics`,`/emergency-triage-card`) orphaned from nav/footer — site reads as loose collection, not a product. | Hubs in nav/footer + hub→spoke links; link-check green |
| A7 | Vets | COO | P1 | trust / launch-quality | `vets/[state]/[city]/[slug]` metadata `path` drops the city segment → self-canonical points at a non-existent URL. | path includes city.slug; matches route + JSON-LD |
| A8 | Vets | Monetization | P1 | trust | `/telehealth` has 3 `/go` CTAs with no inline FTC disclosure above the buy surface (§8a). | `AffiliateDisclosure` above the CTAs |
| A9 | Ferret | Monetization | P1 | revenue / trust | Finish Ferret monetization + clinical buy-box sweep; disclosures above every monetized surface (§8a). | All commercial CTAs via `/go`; disclosures above; CSRO sign-off |
| A10 | Dog | Visual+COO | P1 | launch-quality | Embed breed-selector/symptom entry as a homepage product surface (gate 3), not nav links. | Interactive entry on first/second screen (after A1) |
| A11 | PetFood | Visual | P1 | launch-quality | Make compare-two-foods / scoring engine the hero surface (gate 3); ingredient hero photography (gate 1). | Tool embedded on first screen + real ingredient hero (after A1) |
| A12 | Fish | Visual | P1 | launch-quality | Embed volume/stocking/water-change calculators as the hero ("tank control center"), aquascape hero. | Calculators embedded on first screen + aquascape hero (after A1) |
| A13 | Vets | Monetization | P2 | trust | Soften vendor superlatives ("most comprehensive") on `/telehealth` + `(funnels)/pet-insurance` — neutrality on a clinical-authority site. | Attributed/qualified phrasing |
| A14 | Lizard | Visual | P2 | visual | Dark habitat hero + distinctive reptile motif (theme already distinct — leverage it). | Real reptile/habitat hero applied |
| A15 | Vets | COO | P2 | traffic | Down-weight orphan sitemap priorities (`/data`,`/emergency-triage-card` @0.90) once A6 links land. | priorities re-weighted post-linking |

**Batch dispatch now:** Visual → A1 (then A4/A5); CSRO/Carlo → A2/A3 decisions;
Monetization → A8/A9. Hold A10–A12 until A1 lands. A13–A15 are P2 fillers behind the above.

**✅ Completed (COO) since creation:** A6 + A7 (Vets nav wiring + profile canonical, #385).
Plus the cross-cohort orphan-hub/canonical sweep (#386/#387) and all sitemap coverage (#382/#383).
Remaining Active Set is now Visual-gated (A1/A4/A5/A10–A12), Carlo-decision (A2/A3), or
Monetization (A8/A9/A13).

---

## RESERVE — real opportunities, parked (promoted only by CSRO)

**Parked — premium-phase gate (do not start; not launch-blocking):**
- Content-expansion clusters on priority sites (per rule 5/6 — parked until CSRO names a gap).
- Lizard enclosure-size calculator build (Carlo: revisit after first cohort passes the visual bar).
- Horses `/racing` intelligence build (#178) — pending A2 positioning decision.

**Deferred — launch-infra (Carlo §8a: not launch-imminent):**
- DNS cutover (Network Solutions), GA4 properties, Mailchimp/email activation, Stripe membership.
  *Do not nudge Carlo on these until the first 3–5 sites pass the premium bar.*

**Strategic — new assets (parked):**
- `askthevet` / `seniorpets` / `dogpicture` scaffolds → Vercel projects + first cluster (post-cohort).
- `/ask` AI assistant MVP on Dog.com (Anthropic key exists; not built).

**Revenue (Monetization lane, post-trust-sweep):**
- Affiliate-account expansion beyond Skimlinks+Amazon (Chewy/SmartPak/Dover/ImpactRadius) once a
  launch site flips. Mediavine/Raptive gated by pageview thresholds.

**Structural — parked for content judgment (audit-surfaced 2026-06-02):**
- **saddle-com `/english` + `/western`** — title-twins of `/reviews/best-english-saddles` /
  `/reviews/best-western-saddles` (same titles, SERP self-competition). Redirect-to-review vs
  retitle+rel-canonical is a content/SEO call. COO once promoted.
- **lizard-com `/husbandry`** — full duplicate-cluster of the nav-wired `/setup` (8 overlapping
  topics) but `/husbandry/brumation-guide` + `/husbandry/shedding-guide` are unique. Redirect spokes
  to `/setup` (preserving the 2 unique) vs keep+wire — needs a content owner's call. COO once promoted.

**Infra / quality (COO, low-priority, real):**
- Per-site sitemap override coverage is now complete (all 10 generator-faithful, #382/#383) — monitor
  on future page adds; no action unless drift reappears.
- Cross-cohort orphan-hub + canonical-collision sweep: **COMPLETE** — Dog (#380), Vets (#385),
  Fish (#387), Horses/Lizard/Saddle nav (#386); PetFood + Ferret were clean. Re-run only on new pages.

> Reserve grows by **real** opportunities surfaced from audits (per-site launch-quality, IR,
> Monetization, Visual). It is never padded to a count. Weekly: prune merged/stale, promote the next
> ranked batch into the Active Set.

---

## Reporting protocol
- To Carlo: only the **Active Set top** + decisions he owns (currently A2 Horses positioning, A3 Dog
  symptom-checker). Never the full queue.
- To bots: ranked batches only (see "Batch dispatch now").
- Cadence: refresh Active Set after each merge wave; refresh Reserve weekly or when it thins.
