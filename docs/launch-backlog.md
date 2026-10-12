# Launch-day backlog — Vets.co and Ferret.com

Vets.co launches first. Ferret.com is next. Horses.com, Dog.com, and Fish.com are out of scope here.

Order: trust, money path, top-page quality, phone UX, speed. Items only Carlo can do are at the bottom.
Each item lists the site, the page, the problem, the fix, and how it is checked. Status changes as PRs merge.

Audit base: `origin/main` at `14ba6f87e` (after #2619, #2620, #2621), and the previews `carlo-os-vets-co.vercel.app` and `ferret-com.vercel.app` crawled on 2026-10-11 (245 Vets.co pages outside `/directory/*`, 315 Ferret.com pages, all HTTP 200).

## 1. Trust

| # | Site | Page | Problem | Fix | Check | Status |
|---|---|---|---|---|---|---|
| T1 | Vets.co | `/insurance/deductibles-reimbursement`, `/pet-insurance/breeds/beagle` | Healthy Paws card says "Fast claims", "Known for fast reimbursement", and the table says "Fast reimbursement". The Beagle entry says "fast in-app claim processing" and "one of the lowest-claim breeds in the AKC top 50" with no source. #2619 and #2620 fixed other pages, not these two. | Use the sourced line from the insurance review (Healthy Paws claims page: most claims processed in 2 days). Drop the unsourced Beagle claims. Vets.co only. | `rg -i "fast claims\|fast in-app\|lowest-claim"` finds nothing in `apps/vets-co/src`. e2e asserts the phrases are gone from both pages. | Done (#2622; Dog.com copy of the Beagle entry left as is: CI parity covers carriers only, and Dog.com is out of scope) |
| T2 | Vets.co | `/vets`, `/vets/[state]`, `/vets/[state]/[city]`, `/vets/[state]/[city]/[slug]` | A sample vet directory with made-up clinics is publicly reachable (HTTP 200 on the preview), with banners saying "Sample listing — not a real vet." It is noindex and not linked from the main nav, but anyone who types the URL sees fake listings. | Remove the sample route tree and permanently redirect `/vets` and `/vets/*` to `/find-a-vet`. Do not invent real vets. The real state-board directory at `/directory` stays. | `curl -sI /vets/california` returns 308 to `/find-a-vet`. The build has no `/vets/*` pages. e2e checks the redirect. | Done (#2623) |
| T3 | Vets.co | `/reviews`, `/reviews/trupanion-vs-healthy-paws-guide`, `/reviews/healthy-paws-vs-embrace-guide`, `/reviews/healthy-paws-vs-pets-best-guide`, `/reviews/trupanion-vs-embrace-guide` | "Fast reimbursement" and "top pick for fast reimbursement" are loose. The source only says most claims are processed in 2 days. | Use "most claims processed in 2 days, per its claims page", and link the review card that cites it. Keep meta descriptions at 160 characters or less. | `rg -i "fast reimbursement"` finds nothing in `apps/vets-co/src/app`. e2e checks one page. | Done (#2624) |
| T4 | Ferret.com, Vets.co | Ferret `/ferret-starter-kit`, `/health/adrenal-disease`. Vets `/insurance/reading-the-fine-print` | Internal wording shows to readers: "Chewy's old numeric id for this cage is not a confirmed current page, so this opens a … search", "This Chewy search is for …", "(that Chewy comfort card stays below)", "This card does not print a deductible…". | Rewrite in plain words for a reader. Name the retailer the button opens. | The phrases are gone from the source. A preview curl after merge shows them gone. | Done (#2628) |
| T5 | Vets.co, Ferret.com | Vets `/legal/privacy-policy`. Ferret `/disclosure`, `/legal/affiliate-disclosure` | These pages say the site takes part in the Chewy affiliate program. No Chewy account exists (`CLAUDE.md` §13), and Chewy links are hidden until a tag is set. | Say Chewy links may earn a commission once that program is active, or drop Chewy from the list. Keep the Amazon Associates statement and the unconditional commission disclosure. | The disclosure CI checks stay green, and the text is gone from the source. | In this PR |

## 2. Money path

| # | Site | Page | Problem | Fix | Check | Status |
|---|---|---|---|---|---|---|
| M1 | Ferret.com | `/reviews/best-ferret-litter`, `/reviews/paper-vs-wood-litter-guide`, `/reviews/paper-vs-grass-litter-guide`, `/care/litter-training`, `/care/cage-setup`, `/reviews/november-december-gift-guide`, plus 7 other Ferret pages with `/go/chewy-brand/` hops | Source hrefs are Chewy searches. With no Chewy tag, the visible buttons are rewritten to an Amazon search when the page renders, but the litter page's JSON-LD still points at `/go/chewy-brand/…`, and that hop redirects to the Chewy homepage with no commission. | Point every Ferret `chewy-brand` hop at the matching `/go/amazon-brand/…` search, or at an existing Amazon ASIN where the repo already has one. Fix the JSON-LD too. | `rg "/go/chewy-brand" apps/ferret-com/src/app` finds nothing. The preview litter page has 0 `chewy` hrefs, in the JSON-LD as well. e2e checks that the litter page's shop links go to Amazon. | Done (#2625) |
| M2 | Ferret.com | `/diet/best-ferret-kibble` | ItemList and Product JSON-LD point at the held `/go/wysong/epigen-90` (Wysong search, no tag) and `/go/marshall/premium-ferret-diet` paths. The visible buttons were moved to Amazon in #2621. | Wysong JSON-LD goes to `/go/amazon/B019W9VXZK`. Marshall goes to the on-page anchor `#marshall-premium-diet` until a Marshall tag exists. | No `ferret.com/go/(wysong\|marshall)` in that page's JSON-LD, checked in source and by e2e. | Done (#2626) |
| M3 | Vets.co | `/reviews/best-pet-insurance`, `/insurance/wellness-plans-vs-insurance`, `/telehealth` | ItemList and Product JSON-LD point at held, untagged quote hops (`/go/trupanion`, `/go/healthy-paws`, `/go/embrace`, `/go/vetster`). | Point the JSON-LD at the on-page review card anchors. The visible CTAs keep their current held behavior. | No held `/go/` URL in JSON-LD on those pages, checked in source and by e2e. | Done (#2627) |

## 3. Top-page quality

| # | Site | Page | Problem | Fix | Check | Status |
|---|---|---|---|---|---|---|
| Q1 | Vets.co | `/pet-insurance/breeds/*` (data in `insurance-by-breed.ts`) | Breed picks state claim-frequency facts ("lowest-claim breed") without a source. The Beagle one is in T1. | Sweep the other breed entries for unsourced frequency or ranking claims, and reword them to cited conditions. | Grep plus e2e on 2 breed pages. | Open |

## 4. Phone UX

| # | Site | Page | Problem | Fix | Check | Status |
|---|---|---|---|---|---|---|
| P1 | Both | 17 top pages (home, insurance review, deductibles, claim helper, telehealth, estimator, find-a-vet, directory; Ferret home, cage, litter, kibble, starter kit, harness, tools, cage setup) | Checked at 390 px (iPhone 13) on the previews on 2026-10-11. No page scrolls sideways (scrollWidth equals viewport). A few links outside paragraphs are shorter than 24 px: 7 on `/telehealth`, 6 on `/reviews/best-pet-insurance`. | Find those links and pad them to a 24 px minimum height. | Re-run the 390 px check: 0 short tap targets on those two pages. | Open |

## 5. Speed

| # | Site | Page | Problem | Fix | Check | Status |
|---|---|---|---|---|---|---|
| S1 | Both | Money pages | No open issue. The mobile Lighthouse budgets (performance at least 0.95, accessibility 1, CLS at most 0.05) are green on recent main runs (see the go-live checklists). | Keep `Lighthouse mobile budgets` green on every PR below. | The check result on each PR. | Watch |

## 6. Only Carlo can do these

| # | Site | What | Why only Carlo | Source |
|---|---|---|---|---|
| C1 | All sites | **Confirm the Amazon tag.** Every preview hop sends `tag=boltonpets20-20ls` (checked 2026-10-11: `/go/amazon/B019W9VXZK` on ferret-com, and `/go/amazon-brand/…` on vets-co). Docs record `boltonpets20-20`. US Associates tracking IDs normally end in `-20`, so `-20ls` may be a typo that earns nothing. | Only Carlo can see Associates Central. It is a Vercel env change (`AFF_AMAZON_TAG`, `AFF_AMAZON_BRAND_TAG`), not code. | `docs/affiliate-ids.md` |
| C2 | Vets.co, then Ferret.com | Publish the DNS records at Network Solutions (delete the old apex A, add the Vercel A or ALIAS records, and the `www` CNAME). | Registrar login. | `docs/launch-runbook-vets.md`, `docs/launch-runbook-ferret.md` |
| C3 | Vets.co, then Ferret.com | In Vercel, set the `www` → apex 308 redirect, set Production `SITE_INDEXABLE` to the apex on that one project, and redeploy. | It takes the site live. | Runbooks, order steps 1, 4, and 5 |
| C4 | Vets.co, then Ferret.com | Google Search Console: Domain property, the TXT record at Network Solutions, then submit the sitemap. | Google account and registrar. | Runbooks, order step 6 |
| C5 | Both | Contact and subscribe inbox: `INQUIRE_EMAIL` and the capture flag are unset, so the forms stay closed (they say the message was not sent). | Choosing an inbox or vendor. | Go-live checklists, "Contact and subscribe" row |
| C6 | Both | Partner programs: insurance (Trupanion, Healthy Paws, Embrace), telehealth (Vetster), Wysong, Marshall, and Chewy have no tags, so those hops stay held or untagged. | Applying to affiliate programs is Carlo's call. | `CLAUDE.md` §13, go-live checklists, "Held-partner silence" row |
