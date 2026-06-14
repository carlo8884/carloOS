---
from: COO
to: Carlo (+ CSRO/IR)
status: launch-runbook (action sequence for Carlo when launch is greenlit)
created: 2026-06-14
site: Vets.co (first launch candidate) — Dog.com follows the same runbook
---

# Vets.co — Launch Readiness Runbook

The COO-lane launch-quality work is **done and verified**. This is the
gate-by-gate status + the exact launch-day sequence (the remaining gates are
Carlo-only). Dog.com follows the identical runbook once Vets is validated.

## A. §8a launch-quality gate status (Vets.co)

| Gate | Status | Owner / note |
|---|---|---|
| `trust-guard` green | ✅ | verified on main |
| `metadata-policy` green | ✅ | title ≤70 / desc ≤160 / no dup |
| `link-check` green (strict) | ✅ | |
| No thin/duplicate pages | ✅ | deep-verified |
| Homepage → hub → spoke structure | ✅ | reference-desk tiles → hubs → spokes |
| Tools working + math-pinned | ✅ | insurance finder/estimator/worth-it + **Cat BCS + Cat Age** (new) |
| Schema/GEO complete | ✅ | Article/Medical/Breadcrumb/Dataset/tool stack |
| Zero affiliate-route leakage | ✅ | 100% via `/go`, zero leaks (audited) |
| FTC disclosures above monetized surfaces | ✅ | footer sitewide + inline on money pages |
| Trust-bar (no fake credentials/claims) | ✅ | clean (premium review) |
| **Real photography / premium visuals** | 🟡 | Visual Bot: hero tuning (needs browser) + dead `category-health` image re-sync |
| **Revenue actually earning** | 🔴 Carlo | env vars (below) — wired but $0 until set |
| **Custom DNS live** | 🔴 Carlo | the launch switch |

Vets is **content/trust/structure/tooling launch-ready**; the red items are
Carlo-only, the amber is Visual.

## B. Launch-day sequence (Carlo) — do in this order

1. **Affiliate accounts + env vars** (turns on revenue; do BEFORE DNS so launch traffic earns):
   - Apply Impact.com → set the insurance-carrier `AFF_*_TAG` vars (Trupanion, Lemonade, Healthy-Paws, Embrace, Pumpkin, ManyPets, Fetch, Spot, Pets-Best, Figo, MetLife, Wagmo) + `AFF_IMPACT_TAG`. Full list: `2026-06-11-coo-to-carlo-affiliate-activation-turnkey.md`.
   - (Dog.com later also needs `AFF_AMAZON_TAG` **and** `AFF_AMAZON_BRAND_TAG` + Chewy.)
   - Set in Vercel project env (Production scope). Verify a `/go/<vendor>/...` redirect carries the tag.
2. **Un-pause Supabase** (if any DB-backed surface is used).
3. **GA4** — create a GA4 property → set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (G-XXXX) in Vercel env. **Already wired** in `apps/vets-co/src/app/layout.tsx` (gtag) — it activates the moment the var is set. (Same var name on every site via `packages/config`.)
4. **Search Console** — add the property; submit `https://vets.co/sitemap.xml` (route already live). Verify via DNS TXT (you'll be at the registrar for DNS anyway) or the GA-linked method.
5. **DNS cutover** at Network Solutions → point vets.co to Vercel (A/ALIAS + CNAME per Vercel's domain instructions). Add the domain in the Vercel project first so the cert provisions.
6. **Smoke test** post-DNS: homepage, one hub, one tool, one `/go` redirect (confirm tag), sitemap.xml, robots.txt, a 404.

## C. Post-launch measurement (first 4 weeks)

| When | Watch | Where |
|---|---|---|
| Day 0–3 | Indexing starts; no crawl errors; Core Web Vitals | GSC Coverage + GA4 Realtime |
| Week 1 | First organic impressions; top landing pages; `/go` click events | GSC Performance; GA4 events (`gtag` fires on EmailCapture + can extend to `/go`) |
| Week 2–4 | Impressions→clicks trend; which tools/pages convert; first affiliate clicks | GSC + GA4 + affiliate dashboards (Impact) |

Suggested KPI surfaces to add post-launch (COO can build once GA4 is live):
a measurement dashboard doc tracking impressions, top pages, tool engagement,
and `/go` click-through — wired to GA4 events (the `gtag` plumbing already exists).

## D. What only Carlo can unblock (the red gates)
Affiliate accounts + env vars · Supabase · GA4 property · GSC property · DNS.
Everything else for Vets is COO-done or Visual-in-progress.

## E. Dog.com
Same runbook. Extra: Dog's product CTAs need **`AFF_AMAZON_TAG` + `AFF_AMAZON_BRAND_TAG`** (the `-brand` var carries most product CTAs) + Chewy. Dog is the exit-value flagship — flip it second, after Vets validates the sequence.
