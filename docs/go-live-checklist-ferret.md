# Go-live checklist — Ferret.com

Alternate if Vets.co is not the first public site. This file does not set env, DNS, or `SITE_INDEXABLE`. Dog.com and Fish.com stay noindex when this site flips.

| Gate | Result | Evidence |
|---|---|---|
| Indexability flag | Pass | `SITE_INDEXABLE` must be the apex `ferret.com` (www.ferret.com included). `true` does not index every host. `packages/config/indexing.test.ts` proves `dog.com` and `fish.com` stay `noindex, nofollow` when the value is `ferret.com`. Preview and `*.vercel.app` stay noindex. The env is still unset in this repo and on Vercel from this change. |
| Canonical host | Pass | `packages/config/site-origin.mjs` sets ferret-com apex `https://ferret.com`. Preview alias is `https://ferret-com.vercel.app`. |
| Sitemap and robots on the apex | Pass | `apps/ferret-com/src/app/robots.ts` uses `shouldIndexHost` and `buildRobots('https://ferret.com')`. Unset flag: `Disallow: /`. Named apex: `Sitemap: https://ferret.com/sitemap.xml`. `apps/ferret-com/src/app/sitemap.ts` locs use `https://ferret.com`. `/go/` stays disallowed. |
| Contact and subscribe with no inbox | Pass | Ferret inquire stays closed (`inquireOfferOpen` returns false for Ferret.com). A POST with `INQUIRE_EMAIL` unset returns HTTP 200 `{ ok: false }`, not 503. The form shows the not-sent sentence and does not show "Received" or fire `email_signup`. |
| Held-partner silence | Pass | Marshall, Wysong, and Carniwhole links stay quiet until that vendor's tag is set (`partnerLinkQuiet`). This change does not add a tag. |
| Amazon tag in use | Pass | Hops read `AFF_AMAZON_TAG` and do not bake a second tag (`amazonAssociateTag` in `packages/config/affiliate-hop.ts`). The setter script's recorded tag is `boltonpets20-20`. This change does not set the env. |
| GA4 firing | Pass | `apps/ferret-com/src/app/layout.tsx` mounts `Ga4Loader` with `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `AffiliateClickListener` for `ferret-com`. A placeholder `G-XXXXXXXXXX` renders nothing. A real id loads gtag and the click listener sends one `affiliate_click`. This change does not set the id. |
| Legal pages | Pass | `/about`, `/disclosure`, `/editorial-standards`, `/legal/privacy-policy`, `/legal/terms`, `/how-we-pick`. |
| 404 and search recovery | Pass | `not-found.tsx` is `noindex` with canonical `https://ferret.com/` and `MissedPage` (search box plus buying guides). `/search` is `noIndex`. |
| Lighthouse | Pass | Mobile budgets in `scripts/ci/lighthouse-budgets-lib.mjs` (performance at least 0.95, accessibility 1, CLS at most 0.05). Green on main `60e01f1d` ([lighthouse run](https://github.com/carlo8884/carloOS/actions/runs/37889882379)). This change does not loosen a budget. |

Before DNS: set `SITE_INDEXABLE=ferret.com` on the Ferret project only, then redeploy. Leave Dog.com and Fish.com unset.
