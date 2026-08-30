# Grok operator lane (2026-08-29)

Carlo asked Grok to take the build lane off the Claude bot fleet.

## How we work
- This chat (SuperGrok) is the owner. Do not spawn CSRO / IR / Visual / Racing sessions unless Carlo asks.
- Grok Bot is optional overnight grind after a written ticket. Do not run two COOs.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact applications, and Vercel env secrets.
- Grok owns code on `carlo8884/carloOS` and Vercel preview deploys.

## Live policy
- First flip: dog.com + vets.co only.
- Do not attach the other eight custom domains until those two have DNS, GA4, and at least one AFF_* tag that is not empty.
- Tier-A (dog.com, fish.com): no homepage "for sale" banner. Quiet `/inquire` only. `eftyUrl` stays unset on those two.
- petfoods.com → 301 petfood.com; ferrets.com → 301 ferret.com when DNS is pointed.

## Do not
- Fake DVMs or first-person testing claims.
- Numeric doses on vets.co.
- Direct retailer links that bypass `/go`.
- Product CTAs on toxic/emergency pages.
- Run `scripts/regenerate-sitemaps.mjs` (strips hand-maintained blocks).
- Merge June 2026 PRs without a fresh diff review.

## First human sitting (Carlo)
1. Rotate any Vercel token that was ever pasted in chat.
2. Point dog.com and vets.co DNS at the matching Vercel projects.
3. Set AFF_* and NEXT_PUBLIC_GA_MEASUREMENT_ID on those two projects.
4. Set NEXT_PUBLIC_INQUIRE_EMAIL (or leave unset; /inquire still renders).
