# Go-live checklist — Vets.co

First public launch candidate. This file does not set env, DNS, or `SITE_INDEXABLE`. Dog.com and Fish.com stay noindex when this site flips.

| Gate | Result | Evidence |
|---|---|---|
| Indexability flag | Pass | `SITE_INDEXABLE` must be the apex `vets.co` (www.vets.co included). `true` does not index every host. `packages/config/indexing.test.ts` proves `dog.com` and `fish.com` stay `noindex, nofollow` when the value is `vets.co`, `horses.com`, or `ferret.com`. Preview and `*.vercel.app` stay noindex. The env is still unset in this repo and on Vercel from this change. |
| Canonical host | Pass | `packages/config/site-origin.mjs` sets vets-co apex `https://vets.co`. Preview alias is `https://carlo-os-vets-co.vercel.app`. |
| Sitemap and robots on the apex | Pass | `apps/vets-co/src/app/robots.ts` uses `shouldIndexHost`. Unset flag: `Disallow: /`. Named apex: `buildRobots('https://vets.co')` with `Sitemap: https://vets.co/sitemap.xml` (`packages/config/robots.ts`). `apps/vets-co/src/app/sitemap.ts` locs use `https://vets.co`. `/go/` stays disallowed. |
| Contact and subscribe with no inbox | Pass | Forms stay closed until the Vets capture flag and an inbox are both set (`packages/config/capture-flags.ts`). A POST with `INQUIRE_EMAIL` unset returns HTTP 200 `{ ok: false }`, not 503 (`packages/ui/src/server/inquire.ts`, `packages/config/subscribe.ts`). The form shows the not-sent sentence and does not show "Received" or fire `email_signup`. |
| Held-partner silence | Pass | `partnerLinkQuiet` hides SmartPak, Dover, Schneiders, Riding Warehouse, Wysong, Marshall, and Carniwhole until that vendor's tag is set. Insurance quote and telehealth hops stay held. This change does not add a tag. |
| Amazon tag in use | Pass | Hops read `AFF_AMAZON_TAG` and do not bake a second tag (`amazonAssociateTag` in `packages/config/affiliate-hop.ts`). The setter script's recorded tag is `boltonpets20-20`. This change does not set the env. |
| GA4 firing | Pass | `apps/vets-co/src/app/layout.tsx` mounts `Ga4Loader` with `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `AffiliateClickListener` for `vets-co`. A placeholder `G-XXXXXXXXXX` renders nothing. A real id loads gtag and the click listener sends one `affiliate_click`. This change does not set the id. |
| Legal pages | Pass | `/about`, `/disclosure`, `/editorial-standards`, `/legal/privacy-policy`, `/legal/terms`, `/how-we-pick`. |
| 404 and search recovery | Pass | `not-found.tsx` is `noindex` with canonical `https://vets.co/` and `MissedPage` (search box plus buying guides). `/search` is `noIndex` and empty queries start from care costs, emergency fees, or the cat food calculator. |
| Lighthouse | Pass | Mobile budgets in `scripts/ci/lighthouse-budgets-lib.mjs` (performance at least 0.95, accessibility 1, CLS at most 0.05). Green on main `60e01f1d` ([lighthouse run](https://github.com/carlo8884/carloOS/actions/runs/37889882379)). This change does not loosen a budget. |

Before DNS: set `SITE_INDEXABLE=vets.co` on the Vets project only, then redeploy. Leave Dog.com and Fish.com unset.
