# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover (PR 809) + HomeHero extract (PR 817).
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios). Trainer apply posts to InquireForm with intent pro-application. Directory empty + noindex.
- PRs 813–815, 817–818 merged. Production dog/fish/horses READY on main.
- Closed truncated PR 816 instead of shipping a broken Fish homepage.
- **2026-08-30 prior hour: PR 818 merged** — Dog.com always-on HomeEmailCapture above footer (hidden on /admin + /dashboard). Money-on-launch without touching 56k homepage.
- Confirmed: `/join/pro` + `/trainers` shells complete on main; horses `/inquire` matches dog/fish pattern (InquireOfferScreen).
- **2026-08-30 prior: Horses HomeHero shell parity** — min-h aligned to Dog/Fish approved pattern (62/70/78vh). No redesign, no DNS, no fake content, no sitemap regen.
- **2026-08-30 prior: Fish.com always-on HomeEmailCapture** — parity with Dog (above footer, gated off /admin+/dashboard). Tank-focused copy. Money-on-launch without touching homepage body.
- **2026-08-30 prior: PR 823 merged** — Horses.com always-on HomeEmailCapture parity with dog/fish. Horse-focused weekly copy. Page-level capture removed so single capture above footer. Gated off /admin+/dashboard. No redesign, no DNS, no fake content, no sitemap regen.
- **2026-08-30 this hour: PR 827 merged** — Fish.com cash register: /go tags (no PLACEHOLDER) + stocking email capture under HomeHero (single capture only; leftover Weekly Tank stripped). Matches Dog cash-register pattern. No DNS, no fake content, no sitemap regen.

## Currently underway
- Confirm Fish + Horses production deploys healthy after cash-register merges. Light visual QA only if thin vs Dog.

## Test and deployment status
- Preview SSO-gated; production dog pages confirmed without SSO historically.
- Production pattern: `*-com-carlo-tabibi-s-projects.vercel.app` / stable review URLs (dog-com-three.vercel.app, carlo-os-fish-com.vercel.app, horses-com.vercel.app).
- Dog production READY on latest main (cash register). Fish production will pick up under-hero capture + /go on next successful main deploy. Horses already has always-on capture.

## Next planned priority
1. Confirm Fish cash-register deploy healthy on carlo-os-fish-com.vercel.app.
2. Light visual QA pass on Fish/Horses homepage only where clearly weaker than Dog — not a redesign.
3. Shared footer inquire already exists; leave alone.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG`.
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ` stays on dog-com.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.
