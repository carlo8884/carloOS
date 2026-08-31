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
- **2026-08-30 this hour: Horses HomeHero shell parity** — min-h aligned to Dog/Fish approved pattern (62/70/78vh). No redesign, no DNS, no fake content, no sitemap regen.

## Currently underway
- PR for Horses hero shell parity (this hour). Next: visual QA Fish hero vs Dog on production previews if needed; no further homepage redesign.

## Test and deployment status
- Preview SSO-gated; production dog pages confirmed without SSO historically.
- Production pattern: `*-com-carlo-tabibi-s-projects.vercel.app`
- Fish production READY on HomeHero extract commit; dog production READY on latest main.
- Horses production will pick up hero height on next successful main deploy.

## Next planned priority
1. Merge Horses hero shell parity; confirm deploy.
2. Visual check Fish hero vs Dog (already image-first, matching min-h).
3. Further Fish quality only where clearly weaker than Dog — not a redesign.
4. Confirm fish-com Vercel production deployment stays healthy.

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
