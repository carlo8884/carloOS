# Per-Site Stitch Design Briefs (10 sites, ready to paste)

**Date:** 2026-05-29
**Author:** COO research agent
**Status:** Draft, ready for Carlo to drive a designer-in-the-loop pass tomorrow
**Branch:** `coo/2026-05-29-stitch-briefs`
**Related work:**
- Brand briefs — `coo/2026-05-28-brand-briefs` (`ops/handoffs/2026-05-28-horses-brand-brief.md`, `ops/handoffs/2026-05-28-petfood-brand-brief.md`)
- Visual polish PRs — #76 (horses), #77 (ferret), #78 (saddle), #79 (vets), #28+#58 (dog), #55 (fish), #56 (lizard), #57 (petfood)
- Master prompt portfolio — 10 domains (Dog, Fish, Horses, Saddle, PetFood, PetFoods, Lizard, Vets, Ferret, Ferrets)

---

## How to use this doc

Open Stitch at **https://stitch.withgoogle.com**. For each site you want to design:

1. Scroll to the per-site section below.
2. Copy the **entire site brief block** (top "Project Type" line through "Output Format Wanted") into Stitch's prompt input.
3. Generate 3–4 variants. Pick the strongest.
4. Iterate on Prompt 1 (Hero) first. Once the hero feels right, run Prompts 2–4 in sequence so Stitch carries the visual language forward.
5. Export the resulting HTML/Tailwind output (Stitch has a Copy Code button). Save it to a scratch file named `stitch-{site}-{timestamp}.html`.
6. DM the exports back to the implementation agent with subject **"Stitch handoff: {site}"**. The agent will translate them into `@carloOS/ui` components and open a PR.

Timebox: 15–30 minutes per site. If a site is consuming more than 30 minutes, save what you have and move on — the implementation agent can iterate from a partial brief.

**Suggested order tomorrow** (sequenced by leverage, not alphabetically):

1. **Horses** — biggest brand-distinguishing palette; the visual identity is most differentiated from competitors and most worth polishing first.
2. **Saddle** — luxury read; small visual changes have outsized perception impact.
3. **PetFood** — the moss-green Consumer-Reports look is unproven; needs Stitch validation that it reads as "trustworthy data" not "boring blog."
4. **Lizard** — dark-mode design is hardest to nail without a real designer's eye.
5. **Vets** — clinical-authority requires restraint; Stitch will help us avoid the "vet clinic website" cliché.
6. **Dog** — highest traffic; polish leverages immediately.
7. **Fish** — well-defined aesthetic (aquarium-magazine); Stitch confirmation only.
8. **Ferret** — premium commercial brand; tighter than Ferrets.com.
9. **Ferrets** — library/directory voice; less visual leverage.
10. **PetFoods** — catalog/database; mostly utilitarian, lowest visual-leverage of the 10.

---

## What Stitch is good at

- **Generating ONE specific component** end-to-end (hero, category grid, email capture, etc.) with strong typography and spacing.
- **Iterating on a single prompt** — once you have a draft, "make this more editorial, less e-commerce" works well.
- **Picking up reference URLs** — pasting a Wirecutter / Hermès / Consumer Reports link in the prompt biases the output toward that visual register.
- **Color + typography pairing** — give it hex codes and font names and it will respect them.
- **Tailwind output** — produces React/JSX with Tailwind classes, which slots into our stack with minimal rework.

## What Stitch is NOT good at

- **Replacing real photography.** Stitch will insert placeholder images. We provide direction in the brief; the implementation agent swaps in real photography from Unsplash / Pexels / commissioned shoots.
- **Understanding nuanced brand voice without explicit direction.** "Authoritative reference" means nothing to it — we give it the 5 adjectives + 5 anti-adjectives.
- **Multi-page consistency.** Each page is briefed independently; we don't trust it to remember Saddle.com's brass-accent rules across requests.
- **Tabular data layouts.** Comparison tables and scoring grids come out generic. Implementation agent handcrafts these from `@carloOS/ui`.
- **SEO-load-bearing structure.** Stitch doesn't think about H1 hierarchy, schema, canonicals. The implementation agent enforces those.

## Recommended approach

- **Start with the HOMEPAGE for each site** — highest visual leverage, drives the rest of the site's design language.
- **Don't brief article templates yet.** Cornerstone-article design is a Q3 follow-up; tomorrow is about homepage polish.
- **One site at a time.** Don't context-switch mid-site — Stitch's session memory is weak and you'll get inconsistent results.
- **Save bad variants too.** Sometimes the "rejected" variant has one component (a pull quote, a card hover) worth borrowing. Screenshot before discarding.

---

## Per-site palette + typography quick-reference (for cross-checking Stitch output)

| Site | Primary | Surface | Dark masthead | Display font | Body font |
|---|---|---|---|---|---|
| Dog.com | `#E8622A` terracotta | `#FBF7F4` warm cream | `#1A0E08` deep cocoa | Playfair Display | DM Sans |
| Fish.com | `#0E5F7E` aquarium teal | `#F3F8FB` cool off-white | `#06121B` near-black blue | Cormorant Garamond | Inter |
| Horses.com | `#1F3A2F` forest green | `#F4EFE6` unbleached cream | `#13241C` green-black | Playfair Display | Source Sans 3 |
| Saddle.com | `#8C5A2A` saddle leather | `#F7F1E7` bone cream | `#100A04` near-black | Bodoni Moda | Jost |
| PetFood.com | `#3F5C3A` deep moss green | `#FAFAF7` warm white | `#1A1F18` near-black green | Cormorant Garamond | Inter + JetBrains Mono |
| PetFoods.com | `#3F5C3A` deep moss green | `#F6F7F4` cool off-white | `#161C15` near-black green | Inter (all roles) | Inter + JetBrains Mono |
| Lizard.com | `#9AD140` lime/herp | `#0D1A0D` panel surface (DARK MODE) | `#060A06` near-black green | Zilla Slab | Raleway |
| Vets.co | `#0A6B5E` clinical teal | `#F6F4EE` warm ivory paper | `#0C1F2C` deep navy | Libre Baskerville | Manrope |
| Ferret.com | `#5C3A1E` rich chocolate | `#FBF5E8` warm cream | `#1E140A` deep cocoa | Playfair Display | Source Sans 3 |
| Ferrets.com | `#6E4A28` lighter chocolate | `#FBF6EA` paper cream | `#2A1E12` masthead cocoa | Playfair Display | Source Sans 3 |

Sister-site pairs to keep straight:
- **PetFood.com (editorial / scoring)** vs **PetFoods.com (catalog / database)** — same moss-green primary, but PetFood uses Cormorant display, PetFoods uses Inter everywhere (utility tone).
- **Ferret.com (premium editorial)** vs **Ferrets.com (library / directory)** — Ferret uses deeper chocolate #5C3A1E, Ferrets uses lighter #6E4A28; both Playfair display, but Ferrets is sparser / more utility-coded.

---

## Common Stitch antipatterns to watch for (and how to correct them)

These show up across sessions; recognize them quickly so you don't spend 30 minutes coaxing.

- **Hallucinated hex codes.** Stitch substitutes "close enough" colors. Fix: append the literal phrase "Use these exact hex codes — do not substitute or round: {paste codes}." to the prompt.
- **Generic stock-photo placeholders that resemble the cliché you said not to use** (smiling vet, golden-hour-puppy). Fix: explicitly say "Use a placeholder gray rectangle labeled 'photo placeholder' instead of a stock image — we will swap in real photography in implementation."
- **Carousels appearing despite being told not to use them.** Stitch defaults to them for "featured content." Fix: append "NO carousels under any circumstance — use a static grid only."
- **Display font used in body copy.** Playfair / Cormorant / Bodoni / Zilla all destroy legibility below 18px. Fix: append "Display font is ONLY for headings 26px+ — body copy is always sans (Inter / DM Sans / Source Sans / Manrope / Raleway / Jost)."
- **Hover states missing.** Stitch sometimes ships static. Fix: append "Include explicit hover and focus-visible states for every interactive element. Cards lift 4px on hover; buttons darken 10% on hover; links underline-thickness changes on hover."
- **Tabular numerals missing on data.** Numbers jiggle in comparison rows and stat tiles. Fix: append "Every numeric value (scores, prices, measurements, dates, counts) must use `font-variant-numeric: tabular-nums` and `font-feature-settings: 'tnum'`."
- **Buttons rounded as pills by default.** Saddle and Vets specifically need 4–6px corner radius (product-tag / clinical register), not full-pill. Fix: append "Primary buttons use a 4–6px corner radius, NOT a full-pill rounded shape."
- **Trust claims fabricated.** Stitch will invent "Trusted by 50,000 owners" if not told otherwise. Fix: append "Do NOT include any social-proof claim, subscriber count, press strip, or 'trusted by' badge — these constitute fabricated trust signals per our editorial standards."
- **Cookie-banner / GDPR chrome generated.** Out of scope for the homepage design. Fix: append "No cookie banners, no GDPR consent UI — these are handled by Vercel + Mailchimp policy layers."
- **Excessive shadow depth.** Stitch's default cards have Material-Design shadows. Fix: append "Card shadows should be subtle (0 4px 24px rgba(0,0,0,0.07) max) and only appear on hover (0 12px 40px rgba(0,0,0,0.12)). Cards in default state should rely on a 1px border, not a shadow."

---

# 1. Dog.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial reference site — homepage design. The highest-traffic property in the portfolio and the launch flagship for CarloOS.

## Positioning (one line)
The cross-breed, cross-discipline reference for dog owners — Wirecutter-grade evaluation of food, gear, breed knowledge, and common ailments, written so a first-time owner and a 30-year breeder both get value on the same page.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Warm, evidence-based, plainspoken, owner-respectful, comparative.
**Anti-adjectives:** Cutesy, fearmongering, anthropomorphic ("fur baby"), influencer-y, breed-bashing.

## Target Audience
Primary: first-year owner researching the next 90 days of decisions (food, vet, training, gear). Secondary: experienced owner cross-referencing a new ailment or breed-specific quirk. Tertiary: someone considering a breed who wants honest temperament + health data before committing.

## Reference Inspiration (give Stitch real URLs)
- https://www.nytimes.com/wirecutter/pets/ — comparison tables, restrained color, evidence-led card design.
- https://akc.org — breed-data density, photography treatment of dogs as subjects (not props).
- https://www.thekitchn.com — warm editorial register, recipe-grid layout we can repurpose as breed-grid.
- https://www.consumerreports.org — scoring badge convention, methodology link prominence.

## Color Palette (hex codes — match `apps/dog-com/src/app/globals.css`)
- Primary: `#E8622A` (warm terracotta orange — CTAs, brand accents)
- Primary dark: `#C44E18`
- Primary pale: `#FEF3EE` (callout backgrounds)
- Accent (brass / caramel): `#C99A5B` — eyebrows, rules, pull-quote punctuation. Sparingly.
- Surface: `#FBF7F4` (warm off-white page background)
- Dark masthead: `#1A0E08` (deep cocoa — nav background, footer)
- Text dark / mid / light: `#1A0E08` / `#4A2E18` / `#9A7A68`
- Border: `#EDE0D8`

## Typography
- Display: **Playfair Display** (700 / 600 weights). Sized 32px+ only.
- Body: **DM Sans** (400 / 600). 16–18px body, 14px captions.
- OpenType: tabular numerals on every stat tile and comparison row (`font-feature-settings: "tnum"`).
- Letter-spacing: tight (-0.02em) on display headlines; eyebrow uppercase at 0.16em tracking.

## Layout Zones (top to bottom)
1. **Hero** — large H1 over a single editorial dog photograph (not stock). Tagline ("Dog ownership, explained.") + 80-word positioning paragraph + 2 CTAs (primary terracotta-fill "Browse breeds", secondary outline "Read our latest gear test"). Trust microcopy under hero: "Independent · No paid placement · Updated weekly."
2. **Dark trust bar** (cocoa background `#1A0E08`) — four claims: "100+ breed profiles · 80 gear comparisons · Vet-reviewed health pages · Zero brand sponsorships."
3. **Featured categories grid** — 6 cards: Breeds, Food, Gear, Training, Health, Puppies. Each card: 1 image, eyebrow ("12 guides"), title, 1-line description. Hover lifts card and underlines title.
4. **Featured cornerstone articles** — 4 long-form pieces with eyebrow + title + 2-line teaser + read-time meta. Examples to seed Stitch: "Choosing a puppy food (2026 update)", "Best harnesses for pulling dogs, tested 6 months", "When to call your vet about a limp", "Crate training in 14 days — what the literature actually says."
5. **Editorial positioning band** — full-width cream background with a pull quote treatment: "We don't sell dogs and we don't sell food. We explain what's worth your money." Below: link to the editorial-standards page.
6. **Email capture** — single-field inline form. Headline: "Get our gear-test newsletter." Microcopy: "One email a week. Never sponsored. Unsubscribe in one click."
7. **Footer** — masthead-dark, four columns (Sections / Tools / Company / Legal), small wordmark, copyright, FTC disclosure line.

## Specific Stitch Prompts (copy/paste in order)

### Prompt 1: Hero section
"Design the homepage hero for Dog.com, a premium editorial reference site for dog owners (positioned like Wirecutter for pets). Use a warm terracotta orange (#E8622A) as the single accent against a warm off-white background (#FBF7F4) with deep cocoa text (#1A0E08). Display type is Playfair Display 700 at 64px desktop / 40px mobile; body is DM Sans 400 at 18px. The hero contains: a serif H1 ('Dog ownership, explained.'), an 80-word positioning paragraph in mid-tone DM Sans, two CTAs side by side (primary terracotta fill 'Browse breeds', secondary outlined 'Read our latest gear test'), and a small-caps trust microcopy line beneath them ('Independent · No paid placement · Updated weekly'). To the right of the type column, a single full-bleed editorial photograph of one dog (no humans, no props, eye-level, golden-hour lighting, subject off-center to leave negative space). Generous whitespace, no carousels, no decorative graphics, no paw-print icons. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: Featured categories grid
"Design a 6-card featured-categories grid for Dog.com immediately below the hero. Cards: Breeds / Food / Gear / Training / Health / Puppies. Each card: one rectangular image at the top (4:3 aspect), an eyebrow line in caramel #C99A5B at 11px uppercase 0.16em tracking ('12 guides'), a serif Playfair title at 20px, a one-line description in DM Sans 15px mid-tone. Card background warm off-white #FBF7F4 with subtle 1px border #EDE0D8. Hover state: card lifts 4px with a soft 12% black drop shadow, title color shifts from text-dark to primary terracotta #E8622A, image scales 1.02. Three columns desktop, two columns tablet, one column mobile. Generous gap (gap-6). No icons inside the cards — image carries the visual weight. Output: responsive Tailwind + React, semantic HTML using <article> for each card."

### Prompt 3: Editorial positioning band
"Design a full-width editorial pull-quote band for Dog.com that sits between the cornerstone article grid and the email capture. Background: warm cream #FBF7F4 with a hairline border-top and border-bottom in #EDE0D8. Centered single-column max-width 880px, padding-y 96px. Content: a Playfair Display italic 36px pull quote in dark cocoa text — 'We don't sell dogs and we don't sell food. We explain what's worth your money.' — with a 1px caramel #C99A5B horizontal rule above it, 64px wide, centered. Below the quote, a DM Sans 14px mid-tone byline link 'Read our editorial standards' with an underline in primary terracotta at 30% opacity that goes to full opacity on hover. No images. No buttons. Pure typography moment. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Dog.com. Single horizontal row on desktop, stacked on mobile. Background: surface cream #FBF7F4 with a 1px top border #EDE0D8. Padding-y 80px, max-width 720px centered. Left half: a serif Playfair 28px headline 'Get our gear-test newsletter.' and a DM Sans 15px mid-tone subhead 'One email a week. Never sponsored. Unsubscribe in one click.' Right half: a single email input field with a flush-right primary terracotta #E8622A submit button labeled 'Subscribe'. Input has a 1px border #EDE0D8, focus state shows a 2px terracotta ring. Loading state: button shows a small spinner and text changes to 'Subscribing…'. Success state: form replaces with a caramel #C99A5B check icon and 'You're in. Check your inbox.' message. No social-proof claims, no fake subscriber counts. Output: React + Tailwind with handled form states."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Dog.com. Top nav: 68px height, warm off-white #FBF7F4 background with a 1px bottom border #EDE0D8. Left: 'Dog.com' wordmark in Playfair Display 700 at 22px, lowercase, with a small terracotta-color period as an intentional design element. Center: nav links 'Breeds · Food · Gear · Training · Health · Puppies' in DM Sans 500 at 15px, mid-tone text-dark, 24px gap. Right: a small search icon (Lucide, stroke-only) and a secondary outlined 'Newsletter' link. Mobile: collapse links into a hamburger that opens a full-screen overlay. Footer: deep cocoa #1A0E08 background, padding-y 80px, four columns desktop (Sections / Tools / Company / Legal), each with a Playfair 14px column heading in caramel #C99A5B and DM Sans 14px links in off-white at 70% alpha. Bottom row: Playfair wordmark, copyright line, FTC affiliate disclosure line in 11px ('As an Amazon Associate, Dog.com earns from qualifying purchases. Affiliate links are disclosed at the article level.'). NO social-media icon row in the footer (we don't have meaningful presence yet; faking it is QC-STANDARDS §1 territory). Output: React + Tailwind, mobile nav as a controlled overlay."

## Variations to ask Stitch for
- A variant where the hero image is full-bleed background with type overlay (centered, scrim for legibility) instead of side-by-side.
- A variant with the dark trust bar promoted above the hero (above the masthead) as a thin announcement strip.
- A variant where featured cornerstones are a 2-column 4-row list with larger imagery instead of a 4-card grid.

## Photography Direction
- **Hero imagery:** single editorial portrait of one dog, eye-level, golden-hour, off-center composition with negative space for type overlay. No humans in frame.
- **Category card imagery:** real photographs (breed close-ups, gear flatlays, training scenes). Never SVG icons.
- **DO NOT:** AI-generated dogs (per QC-STANDARDS §1), manufacturer marketing shots for product reviews, generic stock-photo clichés (smiling-vet-with-puppy, golden-retriever-pile-of-puppies, kid-hugging-dog), cartoon paw prints, breed-meme images.
- **Sources:** Unsplash (photographers Joe Caione, Anthony Duran, Justin Veenema are strong on dogs), Pexels, Wikimedia Commons; manufacturer-supplied product shots for affiliate gear reviews only via the affiliate-manager email pipeline.

## Component Sophistication (Stitch should include)
- Hover micro-interactions on every clickable card (lift + title color shift).
- Tabular numerals on read-time meta ("8 min read"), comparison rows, and any stat tiles.
- Pull-quote treatment with a caramel hairline rule above.
- Source-attribution byline under hero (small caps, mid-color, with a vertical pipe separator).
- Read-time meta on featured articles ("12 min · Updated May 2026").
- Loading + success states on the email capture form.
- Focus-visible rings on every interactive element (2px terracotta with 3px offset).

## What NOT to design
- No carousels — bad SEO + low engagement.
- No video autoplay.
- No popups beyond exit-intent (deferred to membership phase).
- No display ads ever.
- No cookie-banner art-direction (Vercel + Mailchimp's defaults are fine).
- No "as seen in" press-logo strip — we have no press wins yet; fabricating one violates QC-STANDARDS §1.
- No live-counter widgets ("23,447 subscribers!") — we don't fabricate those.

## Output Format Wanted
- Tailwind CSS classes only (no custom CSS).
- Next.js / React JSX (App Router compatible).
- Responsive at sm / md / lg / xl breakpoints.
- WCAG AA contrast minimum (terracotta on cream is AA-large only — for body links, use primary-dark `#C44E18`).
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.

---

# 2. Fish.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial reference site — homepage design. The aquarium-magazine of the portfolio.

## Positioning (one line)
The serious aquarist's reference for freshwater, saltwater, and planted-tank keeping — Practical Fishkeeping in tone, with the comparison-rigor of a modern review site.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Technical, deliberate, water-chemistry-literate, calm, restrained.
**Anti-adjectives:** Beginner-condescending, hobbyist-clubby, fish-cliché ("Nemo!"), gear-influencer, overhyped.

## Target Audience
Primary: a hobbyist 3–18 months into the hobby troubleshooting a specific problem (cycling stall, algae bloom, species compatibility). Secondary: experienced reef-keeper cross-referencing a new species or piece of equipment. Tertiary: a newcomer who has decided to do this properly and wants a serious starting reference, not a YouTube channel.

## Reference Inspiration
- https://www.practicalfishkeeping.co.uk — long-standing UK magazine; serif headlines, photo-led layouts, restrained palette.
- https://www.reef2reef.com (knowledge-base sections, not the forum chrome).
- https://www.advancedaquarist.com — restrained, technical layout, no marketing fluff.
- https://www.amazonaws.com/scientificamerican — for the deep-blue editorial register and tabular data treatment.

## Color Palette (match `apps/fish-com/src/app/globals.css` post-polish)
- Primary: `#0E5F7E` (deep aquarium teal — CTAs, links, headings on light)
- Primary light: `#1A85AE`
- Primary pale: `#EAF3F8`
- Accent (refraction highlight): `#5BC0DE` — used very sparingly for active-state indicators only
- Surface: `#F3F8FB` (cool magazine off-white)
- Dark masthead: `#06121B` (near-black blue — nav, footer)
- Text dark / mid / light: `#06121B` / `#21465B` / `#6E92A8`
- Border: `#CADDE8`

## Typography
- Display: **Cormorant Garamond** (600 / 500). High-contrast didone-adjacent serif. Min size 26px.
- Body: **Inter** (400 / 600). 17px body / 14px captions. Tabular numerals on water-chemistry callouts (pH, GH, KH).
- No third family.

## Layout Zones
1. **Hero** — full-width underwater photograph (a single planted-tank scene or a single fish in clear water — never a cartoon, never a goldfish-in-a-bowl). Cormorant H1: "Fishkeeping, done seriously." Positioning paragraph (80 words) in Inter 18px on a semi-opaque dark scrim if hero is image-overlay; otherwise side-by-side. Two CTAs: primary teal-fill "Start the cycling guide", secondary outline "Browse species profiles".
2. **Dark trust bar** (near-black blue) — four claims: "Freshwater + saltwater + planted · 220 species profiles · Water-chemistry calculators · No tank-of-the-month advertorials."
3. **Featured categories grid** — 6 cards: Freshwater, Saltwater, Planted, Equipment, Species Index, Diseases & Cures.
4. **Featured cornerstone articles** — 4: "The complete nitrogen-cycle walkthrough (with timeline)", "Choosing a first saltwater protein skimmer, tested", "Bristlenose pleco care — the underexplored algae solution", "Ich treatment: the four protocols and when each one fits."
5. **Editorial positioning band** — pull quote: "We've measured every test kit on the shelf. We have opinions, and we cite our sources." Link to methodology.
6. **Email capture** — "Get the weekly water-chemistry digest."
7. **Footer** — masthead-dark, four columns.

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design the homepage hero for Fish.com, a serious aquarium reference site for freshwater, saltwater, and planted-tank keepers. The visual register should sit between Practical Fishkeeping magazine and Advanced Aquarist — restrained, editorial, not hobby-clubby. Palette: deep aquarium teal #0E5F7E as the single accent, cool off-white background #F3F8FB, near-black blue text #06121B. Typography: Cormorant Garamond 600 at 60px desktop / 36px mobile for the H1 'Fishkeeping, done seriously.'; Inter 400 at 18px for the 80-word positioning paragraph in mid-tone #21465B. Below: two CTAs — primary teal-fill 'Start the cycling guide', secondary outlined 'Browse species profiles' (border #0E5F7E, transparent fill, hover fills with #EAF3F8). To the right of the type column: a single underwater photograph — a planted freshwater tank scene with no overlay text, golden internal lighting, slight depth-of-field blur. Generous whitespace. No carousels, no fish-cartoon icons, no aquarium-bubble graphic flourishes. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: Featured categories grid
"Design a 6-card category grid for Fish.com: Freshwater, Saltwater, Planted, Equipment, Species Index, Diseases & Cures. Each card has a top photograph (4:3 — an actual specimen for species categories, gear close-up for equipment), eyebrow at 11px uppercase 0.16em tracking in primary teal #0E5F7E, Cormorant title at 22px, Inter 15px description in mid-tone #21465B. Card background: white #FFFFFF with a 1px border #CADDE8 and a subtle inner glow that intensifies on hover. Hover: card lifts 4px, title color stays text-dark (do not use the accent for hover-color; reserve #5BC0DE for active-state only), image scales 1.02. Three columns desktop, two tablet, one mobile. Disease card should not show a sick fish — instead, a microscopy or test-strip image; we don't sensationalize. Output: responsive Tailwind + React."

### Prompt 3: Editorial positioning band
"Design a full-width editorial pull-quote band for Fish.com. Background: surface off-white #F3F8FB with a 1px border-top and border-bottom #CADDE8. Centered single-column max-width 880px, padding-y 96px. Cormorant 500 italic at 32px in text-dark for the quote — 'We've measured every test kit on the shelf. We have opinions, and we cite our sources.' Above the quote, a 1px teal #0E5F7E hairline rule 64px wide, centered. Below, an Inter 14px mid-tone link 'See our test methodology' with underline in primary teal at 30% opacity, full on hover. No images, no buttons. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Fish.com. Background: white #FFFFFF with a 1px top border #CADDE8, padding-y 80px, max-width 720px centered, single horizontal row on desktop, stacked on mobile. Left: Cormorant 28px headline 'Get the weekly water-chemistry digest.' and Inter 15px subhead 'One email a week. Methodology notes, recent test results, no sponsored placements.' Right: single email input with focus state showing a 2px teal #0E5F7E ring, flush-right primary teal submit button labeled 'Subscribe'. Loading + success states as in Dog.com brief. No fake subscriber counts. Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Fish.com. Top nav: 68px height, white #FFFFFF background with a 1px bottom border #CADDE8. Left: 'Fish.com' wordmark in Cormorant 600 at 22px with a small accent-color period. Center: nav links 'Freshwater · Saltwater · Planted · Equipment · Species · Diseases' in Inter 500 at 15px, text-dark, 24px gap. Right: search icon + 'Newsletter' outlined link. Footer: near-black blue #06121B background, padding-y 80px, four columns desktop (Topics / Tools / Methodology / Legal). Cormorant 14px column headings in accent refraction-blue #5BC0DE; Inter 14px links in off-white 70% alpha. Bottom row: wordmark, copyright, FTC disclosure. NO social-media icons. NO 'as seen in' press strip. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero uses a full-bleed underwater image with a centered type overlay on a semi-opaque dark scrim.
- A variant where the categories grid uses larger card images (1:1 square) and only 4 cards (Freshwater / Saltwater / Planted / Equipment) for a more curated feel.
- A variant where Species Index is promoted as its own dedicated section with an A–Z filter chip row.

## Photography Direction
- **Hero imagery:** single planted-tank scene or single fish in clear water. Sourced from real aquarist photographers.
- **Category card imagery:** species macro photographs for Freshwater/Saltwater/Species; gear close-ups for Equipment; microscopy or test-strip for Diseases.
- **DO NOT:** Goldfish-in-bowl (the cliché the entire hobby rejects), cartoon Nemo/Dory references, AI-generated fish (anatomy fails in fins and gills), stock "happy family staring at aquarium" shots, manufacturer hero shots of branded tanks.
- **Sources:** Unsplash (Huy Phan, Worachat Sodsri are strong on aquatic), Pexels, Wikimedia (excellent CC-licensed species photography from amateur ichthyologists), AquaBid/Reef2Reef community photography with permission.

## Component Sophistication
- Hover micro-interactions on category cards (lift, image scale).
- Tabular numerals on water-chemistry callouts (pH 7.4, GH 6, KH 4).
- Pull-quote with a teal hairline rule above.
- Source-attribution under hero (small caps, mid-color).
- Read-time meta on featured articles.
- Loading + success states on email form.
- Focus-visible rings on all interactive elements.

## What NOT to design
- No carousels.
- No tank-of-the-month vanity widget.
- No bubble-animation chrome.
- No video autoplay.
- No popups beyond exit-intent.
- No "Featured on" press strip (no real press wins).
- No display ads.

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (deep teal on cream passes AA).
- Semantic HTML.

---

# 3. Horses.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial reference site — homepage design. The category-defining knowledge hub for horse owners across disciplines.

## Positioning (one line)
The authoritative cross-discipline reference for horse owners — English, Western, trail, racing, eventing, driving. Not a magazine. Not a shop. Not a community forum.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Confident, grounded, vet-respectful, technical, plainspoken.
**Anti-adjectives:** Folksy ("Howdy partner"), marketing-y, jargon-heavy, opinion-led, hype.

## Target Audience
Primary: first-horse owner researching the next 90 days of decisions (boarding, feed, farrier, basic gear). Secondary: experienced owner cross-referencing a new ailment, supplement, or discipline (e.g., a dressage rider trialing eventing). Tertiary: a researcher / vet student / aspiring trainer using us as a citable reference.

## Reference Inspiration
- https://www.hermes.com/us/en/category/equestrian/ — restraint, leather palette, cream and deep brand color, premium without ostentation. The benchmark.
- https://www.charlesowen.com — discipline-coded English, restrained.
- https://www.thehorse.com — closest content competitor (note: their UX is dated; we improve on it).
- https://www.aaep.org — veterinary reference register; we cite this body of knowledge often.

## Color Palette (match `apps/horses-com/src/app/globals.css` post-polish #76)
- Primary: `#1F3A2F` (deep forest green — hunt-coat / Hermès equestrian)
- Primary light: `#2E5444`
- Primary pale: `#E8EDE6`
- Primary dark: `#142820`
- Secondary (saddle-leather tan): `#A37547` — secondary CTAs, leather-coded UI moments
- Accent (brass / antique gold): `#B68830` — hairlines, eyebrows, single highlight glyph. Never as a fill.
- Surface: `#F4EFE6` (unbleached cream)
- Dark masthead: `#13241C` (green-black)
- Text dark / mid / light: `#13241C` / `#3F3A2E` / `#7A6E5C`
- Border: `#D9D0BE`

## Typography
- Display: **Playfair Display** (700 / 600). High-contrast didone-adjacent serif. Min 32px or it loses thin strokes.
- Body: **Source Sans 3** (400 / 600). 18px body / 14px caption.
- OpenType: tabular numerals on comparison tables (the signature pattern from the brand brief).
- No third family.

## Layout Zones
1. **Hero** — Playfair H1: "The reference for horse owners." 80-word positioning paragraph in Source Sans. Two CTAs — primary forest-green-fill "Start the new-owner roadmap", secondary outline saddle-tan "Browse cornerstones". Trust microcopy: "Discipline-aware · Cited · Vet-respectful." Hero photograph: a single horse standing in early-morning fog OR a close-up of a hand checking a girth (per brand brief). NEVER a smiling-rider-hugging-horse cliché.
2. **Dark trust bar** (green-black `#13241C`) — four claims: "English, Western, trail, eventing · 100+ cornerstone references · Discipline-tagged gear comparisons · No undisclosed affiliate placement."
3. **Featured categories grid** — 6 cards: Health & Veterinary, Tack & Equipment, Feed & Nutrition, Training, Breeds, Hoof & Farrier.
4. **Featured cornerstone articles** — 4 (drawn from `claude/horses-content-foundation-2026-05-28`): "Quarter Horse — the complete owner's reference", "Equine ulcers: symptoms, treatment, and prevention", "Saddle fit basics for English riders", "Joint supplements — what the research actually shows".
5. **Editorial positioning band** — pull quote: "Not a magazine. Not a shop. A reference, updated continuously, written by people who have mucked stalls." Link to editorial standards.
6. **Email capture** — "Get the First Horse Roadmap" (the lead-magnet from `claude/horses-lead-magnet-2026-05-28`).
7. **Footer** — masthead-dark, four columns, wordmark with brass-color period.

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design the homepage hero for Horses.com, the category-defining reference site for horse owners across all disciplines (English, Western, trail, eventing). The visual register is Hermès equestrian meets a serious veterinary reference — restrained, leather-coded, premium without ostentation. Palette: deep forest green #1F3A2F as the primary brand color, saddle-leather tan #A37547 as the secondary, brass #B68830 as a hairline accent only, unbleached cream #F4EFE6 background, off-black green text #13241C. Typography: Playfair Display 700 at 64px desktop / 40px mobile for the H1 'The reference for horse owners.'; Source Sans 3 400 at 18px for the 80-word positioning paragraph below in mid-tone #3F3A2E. Two CTAs side by side: primary forest-green-fill 'Start the new-owner roadmap' and a saddle-tan-outlined 'Browse cornerstones' (border #A37547, transparent fill, hover fills with cream-pale #E8EDE6). Below the CTAs, an uppercase 11px small-caps trust line in brass #B68830 with 0.16em tracking: 'Discipline-aware · Cited · Vet-respectful'. To the right of the type column: a single editorial photograph of one horse in early-morning fog, eye-level, golden-hour, off-center composition with negative space. No riders in frame, no smiling, no Western-saloon palette intrusions. Generous whitespace. No carousels, no horseshoe icons, no plaid backgrounds, no rope-typography flourishes. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: Featured categories grid
"Design a 6-card category grid for Horses.com: Health & Veterinary, Tack & Equipment, Feed & Nutrition, Training, Breeds, Hoof & Farrier. Each card: top photograph 4:3 (real equestrian photography — a stethoscope on a horse's chest for Health, a clean English saddle for Tack, raw oats and pellets for Feed, a rider's hand on reins for Training, a single Quarter Horse portrait for Breeds, a farrier's tools laid flat for Hoof). Eyebrow at 11px uppercase 0.16em tracking in brass #B68830 ('12 cornerstones'); Playfair title at 22px in forest green #1F3A2F; Source Sans 15px description in mid-tone #3F3A2E. Card background: white #FFFFFF with a 1px border #D9D0BE. Hover: card lifts 4px with an 8% black shadow, title underlines in saddle-tan #A37547, image scales 1.02. Three columns desktop, two tablet, one mobile. No discipline-tribalism in imagery — Tack and Training cards should rotate English / Western imagery across page loads if possible (Stitch: provide both variants). Output: responsive Tailwind + React."

### Prompt 3: Editorial positioning band
"Design a full-width editorial pull-quote band for Horses.com between the cornerstone grid and email capture. Background: warm cream #F4EFE6 with a single 1px brass #B68830 hairline rule across the full width at the top (only — no bottom rule). Centered single-column max-width 920px, padding-y 112px. Playfair Display 400 italic at 36px in forest-green-black #13241C — 'Not a magazine. Not a shop. A reference, updated continuously, written by people who have mucked stalls.' Above the quote, an uppercase Source Sans 11px brass-color eyebrow 0.16em tracking — 'Editorial position'. Below the quote, a Source Sans 14px mid-tone link 'Read our editorial standards' with underline in saddle-tan #A37547 at 40% opacity, full on hover. No images, no buttons. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Horses.com that promotes the 'First Horse Roadmap' 8-email sequence lead magnet. Background: cream #F4EFE6 with a 1px top border #D9D0BE, padding-y 96px, max-width 800px centered. Left half (60%): Playfair Display 32px headline 'Get the First Horse Roadmap' and Source Sans 16px subhead 'Eight emails over your first month of ownership. Boarding decisions, vet first visit, feed program basics, farrier cadence. Vet-reviewed. Free.' Right half (40%): single email input with focus state showing a 2px forest-green #1F3A2F ring, flush-right primary forest-green submit button labeled 'Send me the roadmap'. Loading + success states. Below the input, a Source Sans 12px trust-microcopy line in mid-tone: 'No sponsored placements. Unsubscribe in one click.' Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Horses.com. Top nav: 68px height, cream #F4EFE6 background with a 1px bottom border #D9D0BE. Left: 'Horses.com' wordmark in Playfair Display 700 at 22px, lowercase, with a small brass #B68830 period — the period IS the favicon and a meaningful design element, treat it intentionally. Center: nav links 'Health · Tack · Feed · Training · Breeds · Hoof' in Source Sans 3 500 at 15px, off-black green text, 24px gap. A small uppercase 11px brass eyebrow links 'Cornerstones' and 'Roadmap (free)' sit slightly above the nav row in 0.16em tracking. Right: search icon + 'Newsletter' outlined link in saddle-tan. Footer: green-black #13241C background, padding-y 96px (more generous than the other sites — Horses.com is the brand-leading site), four columns desktop (Disciplines / Tools / About / Legal). Playfair 14px column headings in brass; Source Sans 14px links in cream at 70% alpha. Bottom row: Playfair wordmark, copyright, FTC disclosure ('Horses.com may earn affiliate commission from retailer links. We do not accept payment from gear or supplement brands for inclusion or ranking.'). NO social-media icon row. NO horseshoe / horse-silhouette logo or favicon — the wordmark is the mark. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero uses a 60/40 type-left / photograph-right split vs a 50/50 split.
- A variant where the dark trust bar uses the saddle-tan secondary color #A37547 instead of the green-black masthead, for a warmer feel.
- A variant where the discipline-callout pill component appears as a chip-row above the categories grid (e.g., a row of pills: "For English" / "For Western" / "For trail" / "For driving") to make the cross-discipline coverage visible.
- A variant where the editorial-positioning pull quote is on a near-black green-black background instead of cream — riskier but potentially more striking.

## Photography Direction
- **Hero imagery:** moody, single-subject, environmental. A horse in early-morning fog. A close-up of a hand checking a girth. A pair of mud-streaked tall boots by a tack-room door (per brand brief).
- **Category card imagery:** real photography per category. Anatomy diagrams for Health, gear close-ups for Tack/Hoof, raw feed for Feed.
- **DO NOT:** AI-generated horses (HARD RULE per brand brief — anatomy fails are reputationally fatal in this niche), smiling-rider-hugging-horse stock, generic green-pasture-with-blue-sky, inspirational silhouette-against-sunset, manufacturer marketing shots, Western-saloon kitsch (terracotta + turquoise palette), red plaid, horseshoes-as-decoration, rope-typography.
- **Sources:** Unsplash (Helena Lopes, Mathias Reding, Soledad Lorieto for equestrian work), Pexels, Wikimedia for breed registry / anatomy reference. Long-term: commission a roster of 3–5 photographers (English-East-Coast, Western-Mountain-West, UK).

## Component Sophistication
- Hover micro-interactions on every card (lift + image scale + title underline in saddle-tan).
- Tabular numerals on comparison tables (the signature pattern), stat tiles, and read-time meta.
- Pull-quote with a brass hairline rule above and a brass-color eyebrow label.
- Brass-color period in the wordmark (intentional design element, not afterthought).
- Source-attribution byline under hero (small caps, mid-color).
- Read-time + last-reviewed meta on featured articles ("12 min · Reviewed Apr 2026").
- Discipline-callout pill component preview (small chip: "For English riders" / "For Western riders") — even one in the hero or cornerstones area to seed the system.
- Loading + success states on the email form.
- Focus-visible rings.

## What NOT to design
- No carousels.
- No "Cowboy Up" / "Saddle Up" / "Giddy Up" slogans (folksy, discipline-coded wrong).
- No horseshoe / horse-silhouette logo or favicon.
- No comments section UI.
- No "sponsored by" badge surfaces.
- No paywall chrome on health content.
- No display ads.
- No popups beyond exit-intent.
- No AI-generated horse imagery anywhere.

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (forest green on cream is AAA; brass on cream is AA-large only — never use brass for body text).
- Semantic HTML.

---

# 4. Saddle.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial luxury-reference site — homepage design. The highest-luxury-intent property in the portfolio.

## Positioning (one line)
The serious buyer's reference for saddles and luxury equestrian leather — fit, craftsmanship, brand evaluation, resale value — written for someone about to spend $3,000–$8,000 and unwilling to be sold to.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Patrician, exacting, craft-literate, restrained, deliberate.
**Anti-adjectives:** Salesy, aspirational-influencer, "luxury" as marketing word, gear-bro, beginner-condescending.

## Target Audience
Primary: experienced rider sizing up a saddle purchase — dressage, jumper, eventer, or high-end Western (cutting, reining). Secondary: a parent buying a first serious saddle for a competitive junior. Tertiary: a trainer specifying gear lists for clients. Not the first-saddle, $400 synthetic shopper — that buyer goes to Horses.com.

## Reference Inspiration
- https://www.hermes.com/us/en/category/equestrian/saddles/ — the visual benchmark. Bone cream, near-black, single product per page, oceans of whitespace.
- https://www.stubben.com — German precision, restrained palette, technical detail elevated.
- https://www.deveouxsellier.com — French saddler editorial register.
- https://www.coh.com (Charles Owen) — restrained English-discipline.

## Color Palette (match `apps/saddle-com/src/app/globals.css` post-polish #78)
- Primary: `#8C5A2A` (saddle leather)
- Primary light: `#B07A3E`
- Primary pale: `#F3ECE0`
- Primary dark: `#5E3B15`
- Accent (brass / antique gold): `#B68830` — hairlines, eyebrows, single highlight. Never as a fill.
- Accent light / dark: `#D6A14A` / `#8A6420`
- Surface: `#F7F1E7` (bone / unbleached cream)
- Dark masthead: `#100A04` (near-black, leather-deepened)
- Text dark / mid / light: `#1A1208` / `#4A3018` / `#8A6848`
- Border: `#DBCDB6`

## Typography
- Display: **Bodoni Moda** (700 / 600). The didone contrast IS the identity. Min 32px or it shatters.
- Body: **Jost** (400 / 600). 17–18px body. Geometric sans, signals modernity against the didone tradition.
- OpenType: tabular numerals on price ranges, weight specs, gullet measurements.
- Wordmark: Bodoni Moda small-caps, brass-color period.

## Layout Zones
1. **Hero** — Bodoni H1: "Saddles, evaluated." (or alternative: "The reference for saddle buyers."). 80-word positioning paragraph in Jost. CTAs — primary leather-fill "Start the fit guide" + secondary outlined-brass "Browse by discipline". Hero photograph: a single high-end English saddle on a wooden stand against deep-black studio backdrop, single warm spotlight, single brass strap-keeper catching the light. Hermès-catalog energy.
2. **Dark trust bar** (near-black) — four claims: "Independent · Fit-first · Resale-aware · No undisclosed brand relationships."
3. **Featured categories grid** — 6 cards: Dressage, Jumping, Eventing, Western Show, Trail & Endurance, Restoration & Resale.
4. **Featured cornerstone articles** — 4: "Saddle fit basics — withers, tree, gullet, panels", "Top-tier English dressage saddles, evaluated", "Buying a used CWD: what to inspect", "Why a $4,000 saddle is not always better than a $1,800 one."
5. **Editorial positioning band** — pull quote: "The most expensive saddle is the one that doesn't fit. Everything else is detail." Link to the fit-methodology.
6. **Email capture** — "Get the saddle-buyer's monthly brief."
7. **Footer** — near-black, sparse, sans tag-cloud chrome. Brass-color period in the wordmark stands out against the deep black.

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design the homepage hero for Saddle.com, a high-luxury editorial reference for serious saddle buyers (English dressage, jumping, eventing, and high-end Western). The visual register IS Hermès equestrian catalog meets a 1980s Bodoni-set fine-living quarterly — patrician, exacting, restrained. Palette: saddle leather #8C5A2A as the primary, brass / antique gold #B68830 as a hairline-only accent (never a fill), bone cream #F7F1E7 as the surface, near-black #100A04 for the masthead and any dark panels, off-black text #1A1208. Typography is the entire brand identity here: Bodoni Moda 700 at 80px desktop / 48px mobile for the H1 'Saddles, evaluated.' — the didone high-contrast strokes must be allowed to breathe (do not crowd with imagery), letter-spacing -0.02em. Jost 400 at 18px for the 80-word positioning paragraph below in mid-tone #4A3018. Two CTAs: primary saddle-leather-fill 'Start the fit guide' (#8C5A2A background, white text, no rounded-pill — use 4px corner radius to read as Hermès-product-tag, not modern-web) and a secondary brass-outlined 'Browse by discipline' (1px #B68830 border, transparent fill, hover fills with cream-pale #F3ECE0). Above the H1, a 10px uppercase Jost small-caps eyebrow in brass #B68830 with 0.18em tracking — 'The saddle reference'. To the right of the type: a single high-end English jumping saddle photographed on a dark wood stand against a deep-black gradient backdrop, single warm spotlight from the upper-left, brass strap-keeper catching a single highlight. No rider, no horse, no barn, no decorative elements. Hermès-catalog product-isolation register. Generous whitespace — at least 200px of vertical breathing room between the H1 and the dark trust bar that follows. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: Featured categories grid
"Design a 6-card category grid for Saddle.com: Dressage, Jumping, Eventing, Western Show, Trail & Endurance, Restoration & Resale. Each card: top photograph 5:4 (each category isolated against deep-black or bone backdrop — dressage saddle, jumping saddle, etc.; for Restoration use a close-up of leather conditioner being applied to old leather). Eyebrow at 10px uppercase 0.18em tracking in brass #B68830 ('14 evaluated'); Bodoni Moda 600 title at 22px in text-dark #1A1208; Jost 14px description in mid-tone #4A3018. Card background: bone cream #F7F1E7 with NO border (the visual separation is whitespace, not a rule); hover state shows a 1px brass #B68830 hairline that draws in from the bottom edge over 200ms. Hover also slightly lifts (2px) with a 6% black shadow. Three columns desktop with generous gap-12, two tablet, one mobile. The Restoration & Resale card should feel slightly different — use a sepia-toned photograph and a slightly deeper bone background — to telegraph 'this is the connoisseur lane'. Output: responsive Tailwind + React."

### Prompt 3: Editorial positioning band
"Design a full-width editorial pull-quote band for Saddle.com that sits as a quiet moment between the cornerstone-article grid and the footer. Background: near-black #100A04 with a single brass #B68830 hairline rule (1px, 64px wide) centered above the quote and another below. Centered single-column max-width 880px, padding-y 144px (this is the most generous vertical space in the entire site — let it breathe). Bodoni Moda 400 italic at 42px in bone cream #F7F1E7 — 'The most expensive saddle is the one that doesn't fit. Everything else is detail.' Below, a Jost 13px uppercase mid-light link 'Our fit methodology' in brass-light #D6A14A with 0.16em tracking, no underline (the brass color is the link affordance). On hover, the link shifts to bone cream. No images, no buttons, no decorative chrome. Pure Hermès-catalog typographic restraint. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Saddle.com. Background: bone cream #F7F1E7 with a 1px top border #DBCDB6, padding-y 112px, max-width 720px centered, stacked vertically (not side-by-side — let it feel like a printed reply card). Centered Bodoni Moda 600 at 32px 'Get the saddle-buyer's monthly brief.' Below: Jost 15px mid-tone subhead 'One email a month. New evaluations, resale market notes, restoration tips. No sponsorships, no manufacturer-supplied copy.' Below: a single email input centered, max-width 380px, with a 1px border #DBCDB6 and focus state showing a 2px brass-light #D6A14A ring. Below the input (not flush-right): a saddle-leather-fill submit button labeled 'Subscribe' with the same 4px corner radius as the hero CTA. Loading + success states. No fake subscriber count. Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Saddle.com — the most luxury-coded property in the portfolio. Top nav: 72px height (taller than other sites — luxury site convention), bone cream #F7F1E7 background with a 1px brass #B68830 hairline at the bottom. Left: 'Saddle.com' wordmark in Bodoni Moda 700 small-caps at 20px with letter-spacing 0.04em and a brass-color period. Center: nav links 'Dressage · Jumping · Eventing · Western · Trail · Restoration' in Jost 500 at 14px uppercase 0.08em tracking, text-dark, 28px gap. NO underline on hover; the brass underline draws in from the bottom over 250ms ease-out. Right: search icon (stroke-only, brass color) + a small text link 'Editorial standards' in Jost 13px brass. Footer: near-black #100A04 background, padding-y 120px (the most generous of any site — luxury restraint), four columns desktop (Categories / Reference / About / Legal). Bodoni Moda 14px column headings in brass; Jost 14px links in bone cream at 65% alpha (slightly dimmer than other sites — Hermès-catalog restraint). Bottom row: the wordmark CENTERED (not left-aligned), copyright + FTC disclosure in Jost 11px mid-tone below it. NO social-media icons whatsoever. NO sister-site links (Saddle.com is positioned as a standalone luxury property). Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero is a full-bleed near-black background with a single warm-lit saddle floating in the upper-right and type bottom-left — full Hermès-catalog spread.
- A variant where the category grid uses 6 categories displayed as a single horizontal scroll-row with larger images (more catalog-spread feel) instead of a 3×2 grid.
- A variant where the editorial pull-quote band uses bone cream background instead of near-black, with a brass full-width hairline above + below.
- A variant where the entire site uses NO photography in the hero — just typography on bone cream, true didone-quarterly restraint.

## Photography Direction
- **Hero imagery:** single saddle, isolated, on dark wood stand, deep-black backdrop, single warm spotlight catching brass hardware. Hermès-catalog product isolation.
- **Category card imagery:** isolated product photography per discipline. Restoration card gets sepia-toned close-up of leather work.
- **DO NOT:** AI-generated saddles (leatherwork detail fails reveal it instantly), manufacturer marketing shots from SmartPak / Dover catalogs, riders mounted on saddles (this is the buyer's evaluation register, not the rider's lifestyle register), horse-in-pasture-with-saddle, smiling-rider-by-trailer cliché, Western-saloon kitsch (terracotta + turquoise), barn-rustic plaid.
- **Sources:** commissioned product photography is the long-term answer (this is the site that most rewards in-house photo). Short-term: Stocksy / Trunk Archive licensed; Unsplash search "saddle" yields some usable isolated shots but requires curation.

## Component Sophistication
- Hover micro-interactions that draw a brass hairline rather than lifting heavily (the Hermès register).
- Tabular numerals on price ranges, gullet widths, weight specs.
- Pull-quote with brass hairlines above AND below (the dark band is the brand moment).
- Brass-color period in wordmark; Bodoni small-caps treatment.
- Source-attribution under hero (small-caps brass at 10px).
- Read-time + reviewer-credential on featured articles ("18 min · Reviewed by a master saddler" — only when actually true; do NOT fabricate credentials per QC-STANDARDS §1).
- 4px corner-radius on all primary buttons (signals product-tag, not modern-web pill).
- Focus-visible rings in brass-light.

## What NOT to design
- No carousels.
- No "Tested" or "Vet-recommended" badges without named tester / vet.
- No rounded-pill buttons (too modern-web; we want Hermès product-tag).
- No video autoplay.
- No popups.
- No display ads (extra hard rule here — luxury-intent breaks instantly with ads).
- No "as seen in" press strip.
- No live counter widgets.
- No horseshoe / fleur-de-lys mascot.
- No barn-rustic plaid or rope typography.

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (saddle-leather on cream passes AA-large; for body links use primary-dark `#5E3B15`; brass is hairline-only and never used for text).
- Semantic HTML.
- Generous default spacing — Saddle.com leans on whitespace harder than any other site in the portfolio.

---

# 5. PetFood.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial scoring-database reference site — homepage design. The Consumer Reports of pet food.

## Positioning (one line)
The independent ingredient-and-brand reference for cat and dog food in North America — every commercial formula scored on a transparent rubric, with no financial relationships to the brands being scored.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Skeptical, evidence-based, technical, transparent, comparative.
**Anti-adjectives:** Cheerleader, brand-favoring, fluffy ("Fido loves it"), anthropomorphizing, fearmongering.

## Target Audience
Primary: an owner cross-checking a food brand before/after a purchase decision ("is Acana actually as good as the reviews say?"). Secondary: a vet tech or kennel staff making bulk-feeding decisions. Tertiary: a journalist citing us in a pet-industry piece. Not the casual blog-reader; we are reference utility, not entertainment.

## Reference Inspiration
- https://www.consumerreports.org — the philosophical and visual benchmark. Score badges, comparison rows, restrained palette.
- https://ourworldindata.org — data-forward layout, generous whitespace, scientific without being cold.
- https://www.cooksillustrated.com — methodology-visible, evidence-led, no brand cheerleading.
- https://openfoodfacts.org — open-data product database aesthetic.

## Color Palette (match `apps/petfood-com/src/app/globals.css` post-polish #57)
- Primary: `#3F5C3A` (deep moss green — independence / earned trust)
- Primary light: `#577A50`
- Primary pale: `#EDF1EA`
- Primary dark: `#2C4128`
- Surface: `#FAFAF7` (warm white, no pure black)
- Dark masthead: `#1A1F18`
- Text dark / mid / light: `#1F2A1C` / `#3E4A3A` / `#7A8478`
- Border: `#E2E6DC`
- Score-badge palette (mandatory colorblind-safe + paired with glyph): success `#2C7A3A` (filled circle), warning `#B0822A` (ringed circle), danger `#A8442A` (hollow circle).

## Typography
- Display: **Cormorant Garamond** (600). Editorial weight without going corporate. Min 28px.
- Body: **Inter** (400 / 600 / 700). 17px body / 14px caption. Tabular numerals MANDATORY on scoring numerics and ingredient panels.
- Monospace: **JetBrains Mono** (400 / 500). Used for ingredient panels, scoring formulas, methodology references. Monospace signals "this is data, not marketing copy."
- Three families, locked.

## Layout Zones
1. **Hero** — Cormorant H1: "Pet food, scored independently." Positioning paragraph (80 words) in Inter. Two CTAs — primary moss-green-fill "Open the Index", secondary outline "How we score". Trust microcopy: "No brand payment · Versioned methodology · Re-scored on recall."
2. **Dark trust bar** (`#1A1F18`) — four claims: "1,400 scored formulas · 320 brands · FDA recall tracker · No advertising from food brands, ever."
3. **Featured categories grid** — 6 cards: Dry Dog, Wet Dog, Dry Cat, Wet Cat, Raw & Fresh, Therapeutic Diets. Each card has a small scoring distribution chart inline (e.g., "Avg score in this category: 6.2 / 10 across 240 formulas").
4. **Featured scorecards** — 4 most-searched brands with a scorecard preview component (brand name, overall score chip, top-3 ingredients in JetBrains Mono, methodology link). Examples to seed Stitch: "Hill's Science Diet Adult", "Acana Wild Atlantic", "Purina Pro Plan Sensitive Stomach", "Royal Canin Indoor Adult".
5. **Methodology / editorial positioning band** — pull quote: "We don't take payment from food brands. The scoring rubric is published, versioned, and applied identically to every formula." Link to methodology page (versioned: v1.0, v1.1).
6. **Email capture** — "Get the monthly recalls + new-scorecard digest."
7. **Footer** — masthead-dark, four columns, prominent methodology link.

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design the homepage hero for PetFood.com, an independent scoring database for cat and dog food — the Consumer Reports of pet food. Visual register: closer to Our World in Data or a scientific publisher than to a pet brand. Strip away every pet-marketing trope (no paw prints, no kibble icons, no smiling-dog stock photos). Palette: deep moss green #3F5C3A as the single accent, warm white #FAFAF7 background (NOT pure #FFFFFF), dark warm-gray text #1F2A1C. Typography: Cormorant Garamond 600 at 56px desktop / 36px mobile for the H1 'Pet food, scored independently.'; Inter 400 at 17px for the 80-word positioning paragraph below in mid-tone #3E4A3A. Two CTAs: primary moss-green-fill 'Open the Index' (#3F5C3A background, white text, sharp 6px corner radius) and outlined 'How we score' (1px #3F5C3A border, transparent fill). Above the H1, an Inter 11px uppercase eyebrow in mid-tone #3E4A3A at 0.16em tracking: 'The PetFood.com Index'. Below the CTAs, an Inter 12px mid-tone trust line with bullet separators: 'No brand payment · Versioned methodology · Re-scored on recall'. To the right of the type column: a single high-resolution close-up photograph of a raw ingredient (a pile of chicken meal in a stainless-steel petri dish, or salmon oil being poured against a neutral gray backdrop) — clinical lab-bench staging, even daylight-balanced lighting, no warm filter, no Instagram preset. This is data, not a restaurant menu. Generous whitespace. No bag-mockup product hero shots, no manufacturer marketing imagery. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: Featured categories grid (with inline scoring distribution)
"Design a 6-card category grid for PetFood.com: Dry Dog, Wet Dog, Dry Cat, Wet Cat, Raw & Fresh, Therapeutic Diets. Each card: top photograph 4:3 (an actual raw ingredient or a representative product photographed in-house against neutral background — NEVER manufacturer marketing imagery). Eyebrow at 11px uppercase 0.16em tracking in moss-green #3F5C3A ('240 scored formulas'); Cormorant title at 22px in text-dark; Inter 14px description in mid-tone. Below the description, an inline mini-stat row: 'Avg 6.2 / 10' in Inter 600 tabular at 18px, and a small horizontal distribution chart (15px tall, full card width) showing score-frequency colored in moss-green #3F5C3A. Card background: white #FFFFFF with a 1px border #E2E6DC. Hover: 4px lift with a 6% black shadow, title underlines in moss-green. Three columns desktop, two tablet, one mobile. NO cartoon dog/cat illustrations, NO kibble-bowl icons, NO paw prints anywhere. Output: responsive Tailwind + React."

### Prompt 3: Editorial / methodology positioning band
"Design a full-width editorial positioning band for PetFood.com between the featured scorecards and the email capture. Background: warm white #FAFAF7 with a 1px top and bottom border #E2E6DC. Centered single-column max-width 920px, padding-y 112px. Layout is two-column on desktop (60/40 split), stacked on mobile. Left: Cormorant 400 italic at 32px in text-dark — 'We don't take payment from food brands. The scoring rubric is published, versioned, and applied identically to every formula.' Below, an Inter 13px uppercase eyebrow in moss-green #3F5C3A at 0.16em tracking — 'Editorial independence'. Right column: a methodology-version card — JetBrains Mono 14px label 'METHODOLOGY v1.2', list of 5 dimensions ('AAFCO completeness', 'Ingredient sourcing', 'Manufacturing standards', 'Recall history', 'Observed feeding outcomes') each with a small score-weight number in Inter tabular ('20%', '25%', '15%', '20%', '20%'), and a Cormorant 14px link 'Read the full methodology'. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for PetFood.com. Background: warm white #FAFAF7 with a 1px top border #E2E6DC, padding-y 96px, max-width 760px centered, single horizontal row on desktop. Left half: Cormorant 28px headline 'Monthly recalls + new scorecards.' and Inter 15px subhead 'One email a month. FDA recall summary, the previous month's new scorecards, any methodology updates. No sponsored placements, no brand newsletters.' Right half: single email input with focus showing a 2px moss-green #3F5C3A ring, flush-right primary moss-green submit button labeled 'Subscribe'. Loading + success states. Below, an Inter 11px disclosure: 'PetFood.com may earn affiliate commission from retailers (Chewy, Amazon) when you click through. We do not accept payment from food brands and scores are not influenced by affiliate relationships.' Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for PetFood.com. Top nav: 68px height, warm white #FAFAF7 background with a 1px bottom border #E2E6DC. Left: 'PetFood.com' wordmark in Inter 700 at 22px (NOT serif — the Index utility brand uses sans), with a moss-green-color period as the favicon-equivalent design element. Center: nav links 'Index · Methodology · Recalls · Glossary · About' in Inter 500 at 15px, text-dark, 24px gap. Right: a prominent search-input (not just an icon) — placeholder 'Search 1,400+ formulas…', max-width 320px, height 40px, 1px border, focus moss-green ring; this site IS a database, so the search must be one click away from any page. Footer: dark masthead #1A1F18 background, padding-y 80px, FOUR columns desktop (Browse / Methodology / About / Legal). Cormorant 14px column headings in moss-green-pale #EDF1EA; Inter 14px links in warm-white at 70% alpha. Bottom row: Inter wordmark, copyright, a longer-than-usual disclosure paragraph: 'PetFood.com does not accept payment from food brands. Affiliate commissions from retailers (Chewy, Amazon, Petco) do not influence scoring. Our methodology is versioned and public. Last methodology update: v1.2 (Apr 2026).' This long disclosure IS the brand promise; treat it generously, not as a hidden footer line. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero uses a side-by-side ingredient photo + comparison-table preview (showing what a scorecard looks like inline) instead of just the ingredient photo.
- A variant where the dark trust bar is replaced with a horizontal mini-chart visualizing the score distribution across all 1,438 formulas (a small histogram in moss-green).
- A variant where the featured-scorecards are a single horizontal scroll-row of 6+ scorecards (database register) instead of a 4-card grid (editorial register).
- A variant where the editorial / methodology positioning band is at the TOP of the page (above the categories grid) to lead with independence as the brand promise.

## Photography Direction
- **Hero imagery:** ingredient close-ups (chicken meal in petri dish, salmon oil pour, taurine crystals at macro, raw chicken thigh on lab-bench staging). Even daylight, neutral background.
- **Category card imagery:** raw ingredient OR in-house-shot product against neutral gray. Never manufacturer marketing imagery.
- **DO NOT:** Smiling-pet-with-bowl stock, AI-generated kibble (uncanny food), cartoon ingredient illustrations, stock-photo vets in white coats, brand product hero shots from manufacturer marketing, lifestyle "happy dog on hike" imagery, paw-print icons, "vet recommended" badges without a named vet.
- **Sources:** commissioned ingredient-reference library is the long-term answer (per brand brief — 80–120 ingredients, decade-long shelf life, moat). Short-term: Unsplash for some raw ingredients (Eduardo Soares for raw meat/fish, Karyna Panchenko for grains/legumes); Wikimedia for chemistry / supplement crystal photography; in-house photography setup for product shots.

## Component Sophistication
- Scoring badge component: numeric (e.g., 7.4 / 10) on a colored chip — green for high, neutral gray for mid, muted red for low. Pair color with glyph (filled / ringed / hollow circle) — colorblind-safe is mandatory.
- Mini distribution chart inline on category cards.
- Methodology-version card (versioned: v1.0, v1.1, v1.2 visible).
- JetBrains Mono ingredient panel preview (one card showing "chicken meal, brown rice, barley, chicken fat, dried beet pulp…" in monospace, with hover-tooltip on each ingredient).
- Recall timeline preview (small horizontal timeline component visible on at least one featured-scorecard card).
- Tabular numerals everywhere a number appears.
- Loading + success states on the email form.
- Focus-visible rings in moss-green.

## What NOT to design
- No carousels.
- No cartoon pet illustrations, paw prints, kibble-bowl icons.
- No "vet recommended" or "trust badges" without named provenance.
- No bright primary palette (kid's-toy red/yellow/blue reads Petco-aisle).
- No manufacturer-supplied product imagery.
- No popups beyond exit-intent.
- No comments section.
- No display ads (independence is the brand).
- No private-label food product chrome (would compromise the entire scoring premise).

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (moss green on warm white passes AA-large for headings; for small body links use primary-dark `#2C4128`).
- Semantic HTML.

---

# 6. PetFoods.com Homepage — Design Brief for Stitch

## Project Type
Catalog / database content-engine site — homepage design. The sister site to PetFood.com. Where PetFood.com is the editorial / scoring brand, PetFoods.com is the per-SKU directory and ingredient lookup tool.

## Positioning (one line)
The exhaustive per-SKU directory and ingredient lookup for North American pet food — every product, every formulation, every ingredient, queryable.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Utilitarian, exhaustive, queryable, neutral, machine-readable.
**Anti-adjectives:** Editorial, opinionated (that's PetFood.com's job), warm, lifestyle, marketing-y.

## Target Audience
Primary: a power-user (veterinary nutritionist, savvy owner, journalist) doing a deep look-up across formulas. Secondary: a search-engine user landing on a long-tail SKU query ("Acana Wild Atlantic ingredients"). Tertiary: an API consumer (future) hitting our data programmatically.

## Reference Inspiration
- https://openfoodfacts.org — open-data product database aesthetic. Card-grid, filter sidebars, ingredient panels prominent.
- https://duckduckgo.com — utility-first, neutral palette, generous whitespace, no decorative chrome.
- https://www.fdb.com (First DataBank, drug reference) — the institutional-reference register.
- https://www.gs1.org — barcode/database visual register.

## Color Palette (match `apps/petfoods-com/src/app/globals.css`)
- Primary: `#3F5C3A` (deep moss green — same as PetFood.com for portfolio cohesion)
- Primary light: `#557454`
- Primary pale: `#EBF0E8`
- Primary dark: `#2A3E26`
- Surface: `#F6F7F4` (cool off-white)
- Dark masthead: `#161C15`
- Text dark / mid / light: `#161C15` / `#3A4438` / `#7A8278`
- Border: `#DDE2D8`

## Typography
- Display: **Inter** (700). NO serif here — this is the utility / catalog voice, not editorial. Same family for display and body to telegraph "this is a database."
- Body: **Inter** (400 / 500 / 600). 16px body / 13px caption / 14px table-row.
- Monospace: **JetBrains Mono** (400 / 500) for ingredient panels, SKU codes, GTIN / UPC barcodes, regulatory references.
- Two families, locked.

## Layout Zones
1. **Hero** — minimal. Inter H1 (NOT serif, NOT large): "The PetFoods Index — every formula, queryable." (32px desktop, generous whitespace). A prominent search input directly below the H1 — "Search 1,400+ formulas by brand, ingredient, or SKU…" — with a moss-green search button. Microcopy: "Independent · Updated weekly · API access (waitlist)."
2. **Stat strip** (not a "trust bar" — purely utilitarian counts) — "1,438 SKUs · 322 brands · 218 unique protein sources · 47 manufacturers · Last sync: 2026-05-27."
3. **Featured queries grid** — 6 utility-card entries (not "category" cards; entry-points into the DB): Browse by brand, Browse by ingredient, Browse by AAFCO life-stage, Browse by manufacturer, Recall tracker, Methodology (cross-link to PetFood.com).
4. **Sample SKU rows** — 4 horizontal rows showing what a search result looks like (brand · SKU · top-5 ingredients in JetBrains Mono · life-stage tag · last-sync date · scoring chip linked back to PetFood.com).
5. **Sister-site cross-link band** — small editorial band: "PetFoods.com is the index. For scoring and editorial, visit PetFood.com."
6. **Email / API capture** — "Get on the API waitlist" (single email field).
7. **Footer** — masthead-dark, four columns including a data-sources column with explicit attribution.

## Specific Stitch Prompts

### Prompt 1: Hero / search-first section
"Design a database-utility homepage hero for PetFoods.com — the per-SKU directory sister to PetFood.com. The visual register is DuckDuckGo / OpenFoodFacts / First DataBank — utility-first, neutral, generous whitespace, NO editorial flourish, NO decorative chrome. Palette: deep moss green #3F5C3A as the single accent against a cool off-white #F6F7F4 background; dark green-black text #161C15. Typography is INTER ONLY (no serif on this site) — Inter 700 at 36px for the H1 'The PetFoods Index — every formula, queryable.' (not larger; we deliberately under-state). Below the H1, a prominent search input — full-width on mobile, max-width 720px desktop, height 56px, 1px border #DDE2D8 with focus 2px moss-green ring, placeholder 'Search 1,400+ formulas by brand, ingredient, or SKU…', flush-right moss-green search-icon button. Below the search, an Inter 13px mid-tone trust line: 'Independent · Updated weekly · API access (waitlist)'. NO hero image, NO illustrations — the search input IS the hero. The page below is pure data. Output: responsive React + Tailwind."

### Prompt 2: Stat strip + featured queries grid
"Design two adjacent sections for PetFoods.com — a stat strip immediately below the hero, and a 6-card featured-queries grid below that. Stat strip: full-width, surface background #F6F7F4 with a 1px top + bottom border #DDE2D8, padding-y 32px, single horizontal row with 5 stat tiles each showing a large Inter 700 tabular number in moss-green #3F5C3A (e.g., '1,438') and an Inter 12px mid-tone uppercase label below ('SKUs', '322 brands', '218 unique protein sources', '47 manufacturers', 'Last sync: 2026-05-27'). Featured queries grid: 6 utility cards — Browse by brand, Browse by ingredient, Browse by AAFCO life-stage, Browse by manufacturer, Recall tracker, Methodology. Each card: NO image (utility tone). Just an icon (use 24px stroke-only line icons from Lucide or similar, not filled), title in Inter 600 at 18px, one-line Inter 14px description, and an arrow micro-affordance bottom-right. Card background: white #FFFFFF with a 1px border #DDE2D8. Hover: border color shifts to moss-green #3F5C3A, the arrow micro-affordance translates 4px right. Three columns desktop, two tablet, one mobile. Output: responsive Tailwind + React."

### Prompt 3: Sample SKU rows
"Design a sample-results section for PetFoods.com that shows what a search result page looks like. A vertical stack of 4 horizontal SKU rows, each: 100% width, padding-y 20px padding-x 24px, white #FFFFFF background, 1px bottom border #DDE2D8. Each row contains, left-to-right: a small product thumbnail 64×64 (in-house photography, neutral gray background, no manufacturer mockups), then a column with Inter 600 brand name + product name and underneath a JetBrains Mono 12px SKU code in mid-tone, then a wider column showing the top-5 ingredients in JetBrains Mono 13px separated by commas (truncate with ellipsis on overflow), then a small AAFCO life-stage chip (e.g., 'ADULT', 'ALL LIFE STAGES') in Inter 11px uppercase, then a moss-green scoring chip (e.g., '7.4') with a small 'View on PetFood.com' link below it in 11px. Hover the entire row: background tints to #EBF0E8. Output: responsive Tailwind + React, with the layout collapsing to a stacked card on mobile."

### Prompt 4: Sister-site cross-link band + API waitlist
"Design two compact sections for PetFoods.com — a sister-site cross-link band and an API-waitlist capture, stacked. Cross-link band: full-width, background warm white #FAFAF7, padding-y 64px, centered single-column max-width 880px. Inter 400 at 22px in text-dark — 'PetFoods.com is the index. For scoring and editorial coverage, visit PetFood.com.' Below: an outlined moss-green button 'Go to PetFood.com' (no fill, 1px border #3F5C3A, hover fills #EBF0E8). API-waitlist capture: directly below, padding-y 80px, white background, single horizontal row. Left: Inter 600 at 20px 'API access — get on the waitlist.' and Inter 14px subhead 'We're building a queryable API for veterinary nutritionists, retailers, and researchers. Currently in private beta.' Right: single email input + moss-green submit button labeled 'Join waitlist'. Loading + success states. Output: responsive Tailwind + React."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for PetFoods.com — utility-database register. Top nav: 60px height (slightly shorter than editorial sites — utility convention), cool off-white #F6F7F4 background with a 1px bottom border #DDE2D8. Left: 'PetFoods.com' wordmark in Inter 700 at 20px (NO serif here, utility tone), small moss-green-color period. Center: nav links 'Brands · Ingredients · Manufacturers · Recalls · API · Methodology' in Inter 500 at 14px text-dark, 20px gap (tighter than editorial sites). Right: a persistent search-input always visible (not collapsed) — placeholder 'Search…', width 240px, height 36px. Footer: dark masthead #161C15 background, padding-y 64px (less generous than editorial sites — utility brevity), four columns desktop (Browse / Data / About / Legal). A FIFTH column on the right calls out 'Data sources' explicitly: 'AAFCO · FDA CVM · WSAVA · manufacturer-disclosed specifications · in-house product photography' — this attribution row is the trust signal for a database site. Inter 14px column headings in moss-green-pale #EBF0E8; Inter 13px links in off-white 70% alpha. Bottom row: Inter wordmark, copyright, a small 'API · Status · Last sync 2026-05-27' line in JetBrains Mono 11px. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the search input has an autocomplete preview dropdown visible (4 sample suggestions: 'Acana Wild Atlantic Dog', 'Hill's Science Diet Adult', 'Brand: Purina', 'Ingredient: taurine') for screenshot purposes.
- A variant where the state-of-the-database stat strip is replaced with a horizontal mini-bar-chart visualizing top 10 brands by SKU count.
- A variant where the SKU rows include a small inline filter chip-row above them ('AAFCO Adult', 'Grain-free', 'Limited-ingredient', 'Therapeutic') to telegraph the filtering UX.
- A variant where the sister-site cross-link band is removed entirely and replaced with a 'Recent recalls' compact list (3 most recent FDA-CVM entries with date + brand + classification).

## Photography Direction
- **Hero imagery:** NONE. The search input is the hero.
- **Category card imagery:** NONE. Icons only (Lucide stroke-only).
- **SKU row thumbnails:** in-house product photography against neutral gray. Never manufacturer marketing imagery.
- **DO NOT:** Anything decorative. No hero photography. No category imagery. This site is a tool, not a magazine.
- **Sources:** in-house product photography pipeline (same as PetFood.com); Lucide icons (https://lucide.dev) under ISC license for the utility iconography.

## Component Sophistication
- Search input with autocomplete preview (Stitch can mock the dropdown — 4 sample suggestions).
- Stat strip with tabular numerals on every number.
- Utility cards with arrow-micro-affordance hover translation.
- Sample SKU rows with JetBrains Mono ingredient panels.
- Cross-link button styled as outline (the master scoring brand is PetFood.com — visual hierarchy reflects that).
- API-waitlist form with loading + success states.
- Focus-visible rings on all interactive elements.

## What NOT to design
- No carousels.
- No hero photography (the search is the hero).
- No editorial pull quotes (that voice lives on PetFood.com).
- No "category" cards with images — utility-cards with icons only.
- No popups.
- No display ads.
- No social proof widgets.
- No marketing copy ("the best!", "the largest!").

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (moss green on cool off-white passes AA).
- Semantic HTML — `<search>` (HTML5), `<table>` for SKU rows if data-tabular treatment fits.
- Performance: this is a database utility site; lazy-load card images, minimize JS bundle.

---

# 7. Lizard.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial dark-mode field-guide reference site — homepage design. The hardest visual design in the portfolio.

## Positioning (one line)
The reptile-keeper's field guide — species profiles, husbandry protocols, enclosure builds, and disease references, designed dark-mode-first because reptile keepers work in their reptile rooms at night.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Field-guide-precise, naturalist, husbandry-respectful, species-specific, calm.
**Anti-adjectives:** Sensationalist (the "shocking facts about pythons" register), exotic-pet-trade-promoting, baby-talk, generic "reptiles are cool!", drug-store-pet-store-aisle.

## Target Audience
Primary: an intermediate keeper (1–5 years in) keeping 1–6 species and researching the next addition or troubleshooting current husbandry. Secondary: an experienced multi-species keeper / breeder using us as a citable reference. Tertiary: a vet tech / herpetology student doing reference cross-checks.

## Reference Inspiration
- https://www.reptilesmagazine.com — closest content competitor; visual register is dated, we improve on it.
- https://www.inaturalist.org — naturalist field-guide aesthetic, species-card design.
- https://github.com (dark mode) — for the dark-mode UX patterns (contrast handling, hover-state visibility).
- https://www.darksky.org — dark-mode-first publication design.

## Color Palette (match `apps/lizard-com/src/app/globals.css` post-polish #56)
- Primary: `#9AD140` (lime/herp accent — tuned for AA contrast on dark)
- Primary light: `#B4E368`
- Primary pale: `#F0F7E6`
- Primary dark: `#6E9F1F`
- Accent (moss/jungle): `#1A3F1A` for editorial bands and section seams
- Dark masthead: `#060A06` (near-black with green cast)
- Surface: `#0D1A0D` (panel background, slightly warmer than masthead)
- Panel: `#0F1A0F`
- Off-white text: `#EEF0E4`
- Text mid / light / dim: `rgba(238,240,228,0.78)` / `rgba(238,240,228,0.45)` / `rgba(238,240,228,0.32)`
- Border: `rgba(255,255,255,0.07)`
- Border strong: `rgba(255,255,255,0.12)`
- Body background uses a subtle grid-dot pattern (radial-gradient at 32px spacing, 5% lime alpha) — preserve this in Stitch output.

## Typography
- Display: **Zilla Slab** (700 / 500). Slab serif reads as field-guide-cover. Min 28px.
- Body: **Raleway** (400 / 500 / 600). 17px body. Slightly geometric sans pairs well with Zilla's slab register.
- OpenType: tabular numerals on temperature / humidity / UVI specs.

## Layout Zones
1. **Hero** — Zilla Slab H1: "The reptile field guide." 80-word positioning paragraph in Raleway off-white at 75% alpha. Two CTAs — primary lime-fill (dark text) "Browse species", secondary outlined-lime "Read the husbandry standards". Trust microcopy in dim-lime: "Field-guide precise · Husbandry-respectful · Vet-reviewed." Hero photograph: a single high-resolution close-up macro of a lizard (head + eye, scales detailed) against dark-room enclosure lighting. NEVER a pet-store-aisle shot.
2. **Dark seam band** — full-width single-line band in moss-jungle `#1A3F1A` with a lime hairline above. Microcopy: "Updated weekly · 220+ species profiles · Husbandry protocols sourced from peer-reviewed herpetology literature."
3. **Featured species grid** — 6 cards (the visual anchor of the site): Bearded Dragons, Leopard Geckos, Ball Pythons, Crested Geckos, Blue-Tongue Skinks, Tegus. Each card: macro species photo, common name, scientific name in italic, husbandry summary (temp / humidity / UVI / size at maturity) in tabular Raleway.
4. **Featured cornerstone articles** — 4: "Calcium and D3 — the metabolic-bone-disease prevention reference", "UVB lamp output, measured (Arcadia vs ReptiSun vs ZooMed)", "Building a bioactive vivarium — the substrate, isopod, springtail decisions", "When to take a reptile to a vet — and finding a herp vet."
5. **Editorial positioning band** — pull quote treatment over the moss-jungle background: "Reptile keeping is husbandry, not pet ownership. We write to that distinction." Lime link to husbandry-standards page.
6. **Email capture** — "Get the monthly husbandry digest."
7. **Footer** — near-black, four columns, lime accents on link hover only.

## Specific Stitch Prompts

### Prompt 1: Hero section (dark mode)
"Design a DARK-MODE homepage hero for Lizard.com, a field-guide reference site for reptile keepers. The visual register is iNaturalist meets GitHub dark mode meets a printed field guide — dark, precise, naturalist, never sensationalist. Palette is dark-mode-first: near-black green-cast background #060A06 (with a subtle 32px grid-dot pattern in 5% lime alpha overlaying — preserve this), surface panel slightly warmer #0D1A0D, lime-green accent #9AD140 (tuned for AA contrast on the dark field — do not darken it), off-white text #EEF0E4 with mid-tone at 78% alpha for body. Typography: Zilla Slab 700 at 64px desktop / 40px mobile for the H1 'The reptile field guide.'; Raleway 400 at 17px for the 80-word positioning paragraph in 78%-alpha off-white. Two CTAs: primary lime-fill 'Browse species' with DARK text #060A06 (lime is too light for white text — use dark), and a secondary outlined-lime 'Read the husbandry standards' (1px #9AD140 border, transparent fill, hover fills with a 8%-lime tint). Above the H1, an uppercase Raleway 11px lime small-caps eyebrow with 0.18em tracking — 'The field guide'. Below CTAs, a 12px dim-lime (alpha 0.45) microcopy line — 'Field-guide precise · Husbandry-respectful · Vet-reviewed'. To the right of the type column: a single high-resolution macro photograph of a lizard's head and eye in dramatic enclosure-lighting (a leopard gecko, bearded dragon, or crested gecko works — scales must read sharp), against a dark background that bleeds into the masthead. Generous whitespace; the dark mode requires more whitespace than light mode to avoid claustrophobia. NO glow effects, NO neon, NO sci-fi chrome — this is field-guide-naturalist, not gaming-UI. Output: responsive React + Tailwind, WCAG AA contrast verified for dark backgrounds (lime on near-black passes AA at 4.5:1 minimum; verify in output)."

### Prompt 2: Featured species grid
"Design a 6-card species grid for Lizard.com (dark mode): Bearded Dragons, Leopard Geckos, Ball Pythons, Crested Geckos, Blue-Tongue Skinks, Tegus. Each card is the visual anchor of the site — premium and naturalist. Card background: panel surface #0F1A0F with a 1px subtle border rgba(255,255,255,0.07); on hover, border shifts to rgba(255,255,255,0.18) and card lifts 4px. Top of card: full-bleed macro species photograph (4:3 aspect) — eye/scale detail, dramatic enclosure lighting. Below the image, padding 24px: Raleway 11px uppercase lime #9AD140 eyebrow 'SPECIES PROFILE'; Zilla Slab 700 at 22px common name in off-white #EEF0E4; Raleway 14px italic scientific name in mid-tone (alpha 0.6); below, a horizontal husbandry-spec row in Raleway 500 tabular at 12px — '78–88°F · 40–60% RH · UVI 2–4 · 18–24in adult' — with each value separated by a vertical pipe in dim-lime (alpha 0.32). Bottom of card: a small lime arrow micro-affordance with 'Full profile' link in 13px. Three columns desktop, two tablet, one mobile. NO neon glow, NO gradient borders, NO emoji icons. Output: responsive Tailwind + React."

### Prompt 3: Editorial positioning band (dark)
"Design a full-width editorial pull-quote band for Lizard.com that uses the deeper moss-jungle accent color #1A3F1A as the background — the only place on the page where this color appears. Single 1px lime #9AD140 hairline rule at 64px wide centered above the quote. Centered single-column max-width 880px, padding-y 128px. Zilla Slab 500 italic at 38px in off-white #EEF0E4 — 'Reptile keeping is husbandry, not pet ownership. We write to that distinction.' Below, a Raleway 13px uppercase eyebrow in lime #9AD140 at 0.18em tracking — 'Editorial standards' — that links to the standards page (no underline; the lime color is the affordance, on hover the lime brightens to #B4E368). Below the eyebrow, a hairline rule mirroring the one above. No images, no buttons. Output: React + Tailwind."

### Prompt 4: Email capture (dark)
"Design an email-capture section for Lizard.com (dark mode). Background: panel surface #0D1A0D with a 1px top border rgba(255,255,255,0.07), padding-y 96px, max-width 760px centered, single horizontal row on desktop. Left: Zilla Slab 28px headline 'Monthly husbandry digest.' in off-white #EEF0E4 and Raleway 15px subhead in 78%-alpha off-white 'One email a month. New species profiles, husbandry-protocol updates, gear test results, vet-reference notes. No sponsorships.' Right: single email input — background slightly lifted from page #1A2A1A, 1px border rgba(255,255,255,0.12), focus shows a 2px lime #9AD140 ring; flush-right primary lime submit button labeled 'Subscribe' with DARK text. Loading + success states. Output: React + Tailwind."

### Prompt 5: Top navigation + footer (dark)
"Design the top navigation and footer for Lizard.com (dark mode). Top nav: 68px height, masthead near-black #060A06 with a 1px bottom border rgba(255,255,255,0.07). Left: 'Lizard.com' wordmark in Zilla Slab 700 at 22px off-white #EEF0E4, with a lime-color #9AD140 period. Center: nav links 'Species · Husbandry · Enclosures · Diet · Vet Care · Field Guide' in Raleway 500 at 14px off-white at 78% alpha, 24px gap; hover shifts text to full off-white and underlines in lime. Right: search icon (Lucide, stroke-only, in lime) + an outlined-lime 'Newsletter' link. Footer: deeper near-black #060A06, padding-y 80px, four columns desktop (Topics / Field Guide / About / Legal). Zilla Slab 14px column headings in lime; Raleway 14px links in off-white at 60% alpha. Bottom row: Zilla wordmark, copyright, FTC disclosure ('Lizard.com may earn affiliate commission from retailer links. We do not accept payment from reptile-product brands for inclusion or ranking.'). NO social-media icons. NO 'as seen in' press strip. Preserve the subtle 32px grid-dot pattern across the footer too — the entire site uses it. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero photograph is a full-bleed dark macro with the type overlaid in the upper-left over a darkened gradient — the most dramatic dark-mode framing.
- A variant where the featured-species grid uses 8 cards in a 4×2 arrangement (broader coverage) instead of 6 in a 3×2 (deeper-spotlight).
- A variant where the editorial-positioning band uses the LIME #9AD140 as a background color with dark text on it — a high-contrast accent moment.
- A variant where each species card has a small inline 'Care difficulty' chip ('Beginner', 'Intermediate', 'Advanced') in the corner — telegraphs the husbandry-respectful brand promise.

## Photography Direction
- **Hero imagery:** macro species portraits — head + eye, scales sharp, enclosure-lighting register (warm key light + cool fill). Never pet-store-aisle lighting.
- **Category card imagery:** macro species portraits per species. Real animals, real keepers' enclosures.
- **DO NOT:** AI-generated reptiles (scale and pattern fails reveal it instantly), pet-store-aisle shots, baby-talk poses (lizard wearing a tiny hat etc.), exotic-pet-trade promotional imagery, generic "reptiles are weird/scary" stock, neon-lit gaming-style chrome, glow effects, motion-blur sci-fi flourishes.
- **Sources:** Wikimedia (excellent CC-licensed herpetology macro photography from amateur and academic herpetologists), iNaturalist research-grade observations (license-check), Unsplash (David Clode, Pierre Bamin do excellent herp work), and long-term commissioned macro work for the species we cover most heavily.

## Component Sophistication
- Hover micro-interactions that increase border alpha rather than adding heavy shadows (dark mode tradition).
- Tabular numerals on every husbandry spec (temp, humidity, UVI, size).
- Species name in italic scientific Latin underneath common name.
- Lime accent reserved for editorial moments — never used as a fill for entire sections.
- Subtle grid-dot pattern preserved on body background.
- Source-attribution under hero (small-caps lime in dim alpha).
- Read-time on featured articles.
- Loading + success states on the email form.
- Focus-visible rings in lime.
- A "vet-reviewed" badge component (only used on pages where a named herp vet has actually reviewed — never fabricated, per QC-STANDARDS §1).

## What NOT to design
- No carousels.
- No neon / glow / gaming-UI chrome.
- No exotic-pet-trade promotional language ("rare morphs!" "exotic specimens!").
- No baby-talk ("our scaly friends").
- No fake "vet-reviewed" badges.
- No popups.
- No display ads.
- No sensationalist headline register ("YOU WON'T BELIEVE these python facts").

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (lime #9AD140 on near-black #060A06 must hit 4.5:1 for body text; for very small text use the lighter #B4E368).
- Semantic HTML.
- Dark-mode-first; do NOT generate a light-mode variant unless explicitly requested.

---

# 8. Vets.co Homepage — Design Brief for Stitch

## Project Type
Premium editorial veterinary-authority reference site — homepage design. The clinical-but-owner-friendly register.

## Positioning (one line)
The owner-facing veterinary reference for dogs and cats — symptom recognition, when-to-call-the-vet decisions, common conditions, and the clinical context you need before walking into the exam room.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Clinical, owner-respectful, calm, evidence-anchored, decision-supportive.
**Anti-adjectives:** Diagnostic (we don't diagnose), fearmongering, paternalistic, generic-medical-blog, vet-bashing.

## Target Audience
Primary: a pet owner researching a symptom and trying to decide if it's urgent / non-urgent / wait-and-see ("my dog has been limping since yesterday — is this an ER visit?"). Secondary: an owner preparing for an upcoming vet appointment, getting clinical context. Tertiary: a vet tech / new graduate using the site as a quick-reference for owner-handout language.

## Reference Inspiration
- https://www.merckvetmanual.com — the canonical veterinary reference; we are the owner-facing version.
- https://www.aaha.org — institutional veterinary register, restrained palette.
- https://www.uptodate.com — clinical-decision-support visual register (paywalled but the design is the benchmark).
- https://www.cdc.gov — institutional-medical authority, calm restraint.

## Color Palette (match `apps/vets-co/src/app/globals.css` post-polish #79)
- Primary: `#0A6B5E` (deep clinical teal — less aqua than the scaffold, more clinical)
- Primary light: `#0F8A78`
- Primary pale: `#E8F2F0`
- Primary dark: `#054C42`
- Accent (antique brass): `#B68830` — editorial moments (rules, eyebrows). Sparing.
- Surface: `#F6F4EE` (warm ivory paper, NOT cool grey)
- Dark masthead: `#0C1F2C` (deep navy)
- Text dark / mid / light: `#0C1F2C` / `#3A4F5C` / `#7A8C97`
- Border: `#DDE3E5`

## Typography
- Display: **Libre Baskerville** (700 / 400 italic). Editorial-medical register. Min 28px.
- Body: **Manrope** (400 / 500 / 700). 17px body / 14px caption. Tabular numerals on dosage references and rate values (HR / RR / Temp).
- No third family.

## Layout Zones
1. **Hero** — Libre Baskerville H1: "Veterinary reference, for owners." 80-word positioning paragraph in Manrope. Two CTAs — primary teal-fill "Search symptoms", secondary outlined-teal "Browse conditions". Trust microcopy: "Owner-facing · Evidence-anchored · Not a substitute for your vet." Hero photograph: a single clinical reference image — a stethoscope on examination paper, or a vet's hands gently checking a dog's gums (one hand, one animal, no staged "smiling vet" shots).
2. **Dark trust bar** (deep navy `#0C1F2C`) — four claims: "Reviewed by named DVMs · Citations to peer-reviewed literature · Updated quarterly · No advertising from pharma or pet-insurance."
3. **Decision-support panel** (this is the signature component, sits ABOVE the categories grid) — a "When to call your vet" triage card with three columns: Emergency (red) / Same-day (amber) / Wait & monitor (teal-pale). Each column lists 3–4 example presentations. This component IS the brand promise.
4. **Featured categories grid** — 6 cards: Dogs, Cats, Symptoms A–Z, Common Conditions, Medications & Dosing, Emergency Guide.
5. **Featured cornerstone articles** — 4: "Limping in dogs: triage decision tree", "Cat vomiting — when it's normal, when it's not", "Reading a CBC: what your vet's printout means", "End-of-life decisions: the literature on quality-of-life scoring."
6. **Editorial / methodology positioning band** — pull quote: "We are not a substitute for your veterinarian. We are the reference you read before, during, and after the appointment." Link to vet-reviewer credentials.
7. **Email capture** — "Get the monthly veterinary owner brief."
8. **Footer** — deep navy, four columns, prominent disclaimer line ("Vets.co is reference material; not veterinary advice. Always consult your veterinarian.").

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design a homepage hero for Vets.co, an owner-facing veterinary reference for dogs and cats. The visual register sits between AAHA (institutional veterinary) and UpToDate (clinical decision support) — calm, clinical, owner-respectful, never fearmongering, never replacing the vet. Palette: deep clinical teal #0A6B5E as the primary accent, deep navy #0C1F2C for the masthead and any dark surfaces, warm ivory paper #F6F4EE for the page background (NOT cool grey — the warmth matters), off-black navy text #0C1F2C, brass #B68830 only as a hairline editorial accent. Typography: Libre Baskerville 700 at 56px desktop / 36px mobile for the H1 'Veterinary reference, for owners.'; Manrope 400 at 17px for the 80-word positioning paragraph below in mid-tone #3A4F5C. Two CTAs: primary teal-fill 'Search symptoms' and an outlined-teal 'Browse conditions' (1px #0A6B5E border, transparent fill, hover fills with #E8F2F0). Above the H1, a Manrope 11px uppercase brass-color eyebrow at 0.16em tracking — 'Owner-facing veterinary reference'. Below the CTAs, a Manrope 12px mid-tone trust line with bullet separators: 'Owner-facing · Evidence-anchored · Not a substitute for your vet.' To the right of the type column: a single clinical reference image — a stethoscope laid on examination paper, or a single vet hand checking a dog's gums (one hand, one animal, no smiling-faces, no staged 'caring vet' tableau). Generous whitespace, calm restraint. NO red-cross / medical-cross / heart-with-stethoscope iconography. Output: responsive React + Tailwind, WCAG AA contrast verified."

### Prompt 2: Decision-support 'When to call your vet' triage panel
"Design a triage decision-support panel for Vets.co — the signature component of the homepage, sitting between the dark trust bar and the categories grid. Full-width section, warm ivory background #F6F4EE, padding-y 96px, max-width 1200px centered. Above the panel, a Libre Baskerville 32px section heading centered — 'When to call your vet'. Below the heading, a Manrope 14px mid-tone subhead — 'A starter triage reference. Always defer to your veterinarian's judgment.' Below: three columns side-by-side desktop, stacked mobile, with subtle vertical dividers between them. Each column has a colored top border 4px thick: column 1 'Emergency — go now' with border in muted danger red #A8442A (NOT bright red), column 2 'Same-day' with border in warning amber #C8952A, column 3 'Wait & monitor' with border in teal #0A6B5E. Each column has: a Manrope 13px uppercase 0.16em tracking label at the top in the column's color, a Libre Baskerville 22px column heading, then 4 bulleted example presentations in Manrope 15px text-mid (e.g., for Emergency: 'Bloated abdomen with retching', 'Sudden collapse or seizure', 'Suspected toxin ingestion', 'Difficulty breathing'). At the bottom of each column, a Manrope 13px teal link 'Full triage guide →'. Card backgrounds: white #FFFFFF with a 1px border #DDE3E5. This component MUST avoid feeling alarming — calm, clinical restraint. Output: responsive React + Tailwind."

### Prompt 3: Editorial / methodology positioning band
"Design a full-width editorial positioning band for Vets.co between the cornerstone articles and the email capture. Background: deep navy #0C1F2C (the only place on the homepage besides the masthead where deep navy appears). A single 1px brass #B68830 hairline rule 64px wide centered above the quote. Centered single-column max-width 920px, padding-y 128px. Libre Baskerville 400 italic at 36px in warm-ivory #F6F4EE — 'We are not a substitute for your veterinarian. We are the reference you read before, during, and after the appointment.' Below, a Manrope 13px uppercase brass-color eyebrow at 0.18em tracking — 'Our reviewer credentials' (link to the credentials page; the brass color is the link affordance, hover brightens to #D6A14A). No images. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Vets.co. Background: warm ivory #F6F4EE with a 1px top border #DDE3E5, padding-y 96px, max-width 760px centered, single horizontal row on desktop. Left: Libre Baskerville 28px headline 'Monthly veterinary owner brief.' and Manrope 15px subhead 'One email a month. New condition references, recent peer-reviewed research relevant to owners, owner-facing summaries of new ACVIM consensus statements.' Right: single email input with focus showing a 2px teal #0A6B5E ring, flush-right primary teal submit button labeled 'Subscribe'. Loading + success states. Below input, Manrope 11px mid-tone disclosure: 'Vets.co does not accept advertising from pharma or pet-insurance brands. Our reviewer board is named on the credentials page.' Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Vets.co. Top nav: 68px height, warm ivory #F6F4EE background with a 1px bottom border #DDE3E5. Left: 'Vets.co' wordmark in Libre Baskerville 700 at 22px text-dark navy with a small brass #B68830 period. Center: nav links 'Dogs · Cats · Symptoms · Conditions · Medications · Emergency' in Manrope 500 at 15px text-dark, 24px gap. The Emergency link should be visually distinct — slightly heavier weight + a small muted-red dot adjacent — but NEVER alarming. Right: a large search input — placeholder 'Search symptoms…', width 280px (this is a symptom-research site; search is primary UX) + 'Newsletter' outlined-teal link. Footer: deep navy #0C1F2C, padding-y 96px, FIVE columns desktop (Topics / Symptoms A–Z / Reviewer Credentials / About / Legal). Libre Baskerville 14px column headings in brass; Manrope 14px links in ivory at 70% alpha. Bottom row: prominently displayed disclaimer paragraph in Manrope 13px (not 11px — this is brand-load-bearing) in warm-ivory: 'Vets.co is reference material; not veterinary advice. Always consult your veterinarian. In an emergency, contact your nearest veterinary emergency hospital or the ASPCA Poison Control hotline at (888) 426-4435.' Then copyright + FTC line below. NO social-media icons. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the triage panel is BELOW the hero (above the categories) vs ABOVE the hero (the most prominent slot) — test which feels less alarming.
- A variant where the hero search input is the visual anchor (replacing the hero image entirely) — emphasizing the symptom-search UX.
- A variant where the triage panel uses softer colored borders (muted, not saturated) to further reduce the "alarming ER" register.
- A variant where the categories grid is replaced with a 'Browse by symptom' chip-cloud (a row of pills: 'Limping', 'Vomiting', 'Lethargy', 'Coughing', etc.) more aligned with how owners actually search.

## Photography Direction
- **Hero imagery:** clinical-reference shots — stethoscope on examination paper, single vet hand checking gums, well-lit veterinary instruments laid flat. ONE hand, ONE animal, no faces.
- **Category card imagery:** clinical reference shots per category. Cat / Dog cards use a single calm animal portrait (eye-level, calm-affect — NOT distressed).
- **DO NOT:** AI-generated humans (HARD RULE per QC-STANDARDS §1), stock "smiling vet in white coat with golden retriever" cliché, dramatic ER imagery (we are owner-facing, not entertainment), red-cross / heart / paw-print medical iconography, photos of pets in obvious distress (counterproductive to calm-clinical register), AI-generated medical imagery of any kind.
- **Sources:** Unsplash for clinical/instrument shots (search "stethoscope", "veterinary equipment"), Pexels, Wikimedia for anatomy and reference imagery. Commissioned photography is the long-term answer for the calm-animal portraits on Cat / Dog cards.

## Component Sophistication
- Triage decision-support panel (signature component — design carefully, this is the brand promise).
- Hover micro-interactions on category cards (lift + teal title underline).
- Tabular numerals on dosage references, HR/RR/Temp values, weight thresholds.
- Pull-quote on deep navy with brass hairline above.
- Brass-color eyebrows and rules — only as hairlines.
- Source-attribution under hero (small-caps brass at 10px) — but ONLY if real DVMs reviewed; do NOT fabricate.
- Read-time + last-reviewed-by-DVM meta on featured articles ("8 min · Reviewed by [named DVM], Apr 2026") — only when actually true per QC-STANDARDS §1.
- "Not veterinary advice" disclaimer component visible in footer AND inline on health content.
- Loading + success states on email form.
- Focus-visible rings.

## What NOT to design
- No carousels.
- No medical-cross / red-cross / heart-with-stethoscope iconography.
- No fearmongering symptom imagery.
- No fake DVM bylines / reviewer attributions (QC-STANDARDS §1 — Blocker-severity violation).
- No "vet-recommended" badges without named provenance.
- No popups beyond exit-intent.
- No display ads (independence is the brand).
- No "Ask a vet" chat-widget chrome (we don't offer that service).
- No diagnostic-decision-tree UI (we explicitly do not diagnose).

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (clinical teal on warm ivory passes AA at 4.5:1 for body links; for small text use primary-dark `#054C42`).
- Semantic HTML — `<aside>` for the triage panel could work, or `<section>` with `role="region"` and labeled headings.
- Accessibility: the triage panel must be keyboard-navigable and screen-reader-friendly; the color-coded borders must be accompanied by the column headings (color alone is not sufficient).

---

# 9. Ferret.com Homepage — Design Brief for Stitch

## Project Type
Premium editorial pet-keeping reference site — homepage design. The premium commercial brand in the ferret pair (sister to Ferrets.com).

## Positioning (one line)
The premium reference for ferret owners — adrenal-disease awareness, insulinoma management, FBV vaccination protocols, diet (whole-prey vs kibble debate), and the lifestyle realities (smell, scheduling, multi-ferret dynamics) most pet-store buyers don't hear before adoption.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Owner-respectful, health-aware, plainspoken, ferret-realist, warm-but-honest.
**Anti-adjectives:** Baby-talk ("fuzzy noodle"), pet-store-promotional, sentimental, anthropomorphizing, novelty-pet-framing.

## Target Audience
Primary: a current ferret owner (1–4 ferrets) navigating the species' significant health-management realities. Secondary: a prospective owner doing serious research before committing (we want to be the page that talks them into or out of it, honestly). Tertiary: a vet tech / exotic-vet looking for owner-handout material.

## Reference Inspiration
- https://www.afa.org (American Ferret Association) — institutional ferret-community register; we improve UX while respecting the ethos.
- https://lafebervet.com/exotics — clinical exotic-pet veterinary register.
- https://kit.co — premium product-curation register (for the cornerstones grid feel).
- https://www.merckvetmanual.com (Ferret section) — clinical-authority adjacency.

## Color Palette (match `apps/ferret-com/src/app/globals.css` post-polish #77)
- Primary: `#5C3A1E` (rich chocolate brown)
- Primary light (amber CTA): `#C99D5F` (warm amber — CTAs, accents, eyebrows)
- Primary pale: `#FBF5E8` (warm cream)
- Primary dark: `#3F2710`
- Amber secondary: `#C99D5F` light `#E0BC85` dark `#A77D44`
- Surface: `#FBF5E8` (warm cream — same as primary pale)
- Dark masthead: `#1E140A`
- Text dark / mid / light: `#1E140A` / `#4A3220` / `#8A7058`
- Border: `#E6D6BE`

## Typography
- Display: **Playfair Display** (700 / 600). Min 28px.
- Body: **Source Sans 3** (400 / 600). 17px body / 14px caption.
- OpenType: tabular numerals on dosing references and age-cohort data.

## Layout Zones
1. **Hero** — Playfair H1: "Ferret ownership, honestly." 80-word positioning paragraph (acknowledges the smell, the scheduling, the adrenal-disease prevalence — this honesty IS the brand promise). Two CTAs — primary amber-fill (dark text) "Read before you adopt", secondary outlined-chocolate "Browse health & care". Trust microcopy: "Health-realistic · Vet-reference-linked · Not pet-store-promotional." Hero photograph: a single ferret in its natural posture (sleeping curled tight, or alert and standing on hind legs) — eye-level, soft warm lighting, no humans, no costumes.
2. **Dark trust bar** (`#1E140A`) — four claims: "Adrenal & insulinoma references · Whole-prey vs kibble explained · Vet-network referral (exotic-trained) · No pet-store-promotional content."
3. **Featured categories grid** — 6 cards: Health & Disease, Diet & Nutrition, Housing & Enrichment, Behavior & Training, Veterinary Care, Adopting & Sourcing (this last one is specific to ferret — the rescue-vs-pet-store-vs-breeder debate is a real owner decision).
4. **Featured cornerstone articles** — 4: "Adrenal disease in ferrets — the symptom guide, treatment options, and what to expect", "Insulinoma: signs, management, and the hard end-of-life decisions", "Whole-prey vs commercial kibble: the literature, honestly", "Finding an exotic-vet — what 'exotic-trained' actually means."
5. **Editorial positioning band** — pull quote: "Ferrets are not starter pets. They have specific health vulnerabilities, specific care requirements, and a specific lifestyle cost. We say so." Link to the editorial standards.
6. **Email capture** — "Get the monthly ferret-owner brief."
7. **Footer** — masthead-dark, four columns, including a "Find an exotic vet" link.

## Specific Stitch Prompts

### Prompt 1: Hero section
"Design a homepage hero for Ferret.com, a premium owner-respectful reference for ferret keepers. The visual register sits between the American Ferret Association's institutional content and a calm warm editorial publication — health-realistic, never baby-talk, never pet-store-promotional. Palette: rich chocolate brown #5C3A1E as the primary, warm amber #C99D5F as the CTA-and-eyebrow accent, warm cream #FBF5E8 as the surface background, deep-cocoa text #1E140A. Typography: Playfair Display 700 at 60px desktop / 38px mobile for the H1 'Ferret ownership, honestly.'; Source Sans 3 400 at 17px for the 80-word positioning paragraph (this paragraph must acknowledge the smell, the scheduling, the adrenal-disease prevalence — that honesty is the brand promise). Two CTAs: primary amber-fill 'Read before you adopt' with DARK text #1E140A (amber is too light for white text), and a secondary outlined-chocolate 'Browse health & care' (1px #5C3A1E border, transparent fill, hover fills with cream-pale #FBF5E8 tint). Above the H1, a Source Sans 11px uppercase amber-color eyebrow at 0.16em tracking — 'The ferret reference'. Below CTAs, a 12px mid-tone trust line — 'Health-realistic · Vet-reference-linked · Not pet-store-promotional'. To the right of the type column: a single editorial photograph of a ferret in natural posture (curled-sleeping or alert-on-hind-legs), eye-level, soft warm lighting, no humans, no costumes, no toy props. Generous whitespace. NO cartoon ferret illustrations, NO 'fuzzy noodle' visual jokes, NO pet-store-aisle staging. Output: responsive React + Tailwind, WCAG AA contrast verified."

### Prompt 2: Featured categories grid
"Design a 6-card category grid for Ferret.com: Health & Disease, Diet & Nutrition, Housing & Enrichment, Behavior & Training, Veterinary Care, Adopting & Sourcing. Each card: top photograph 4:3 (Health uses a calm veterinary scene — a vet hand checking a ferret's abdomen, no faces; Diet uses raw meat or a measured kibble portion; Housing uses a clean multi-level cage interior; Behavior uses a ferret mid-interaction with an enrichment object; Veterinary uses a calm reference image; Adopting uses a ferret in a rescue-environment context). Eyebrow at 11px uppercase 0.16em tracking in amber #C99D5F ('14 references'); Playfair title at 22px in chocolate #5C3A1E; Source Sans 15px description in mid-tone #4A3220. Card background: white #FFFFFF with a 1px border #E6D6BE. Hover: card lifts 4px with an 8% black shadow, title underlines in amber. Three columns desktop, two tablet, one mobile. The 'Adopting & Sourcing' card should look slightly different — use a more documentary photograph (a rescue-context shot) — to telegraph that this category covers a sourcing-decision conversation, not a shopping-list category. Output: responsive Tailwind + React."

### Prompt 3: Editorial positioning band
"Design a full-width editorial pull-quote band for Ferret.com between the cornerstone articles and the email capture. Background: warm cream #FBF5E8 with a single 1px amber #C99D5F hairline 64px wide centered above the quote. Centered single-column max-width 900px, padding-y 112px. Playfair Display 400 italic at 34px in chocolate #5C3A1E — 'Ferrets are not starter pets. They have specific health vulnerabilities, specific care requirements, and a specific lifestyle cost. We say so.' Above the quote, a Source Sans 11px uppercase amber-color eyebrow at 0.16em tracking — 'Editorial honesty'. Below the quote, a Source Sans 14px mid-tone link 'Our editorial standards' with underline in amber at 40% opacity, full on hover. No images, no buttons. Output: React + Tailwind."

### Prompt 4: Email capture
"Design an email-capture section for Ferret.com. Background: warm cream #FBF5E8 with a 1px top border #E6D6BE, padding-y 96px, max-width 760px centered, single horizontal row on desktop. Left: Playfair 28px headline 'Monthly ferret-owner brief.' and Source Sans 15px subhead 'One email a month. Health-management updates, new vet-reviewed references, owner-realism notes (cost, time, replacement-of-aging-ferrets), exotic-vet network additions. No sponsorships.' Right: single email input with focus showing a 2px chocolate #5C3A1E ring, flush-right amber-fill submit button labeled 'Subscribe' with DARK text. Loading + success states. Below input, Source Sans 11px mid-tone disclosure: 'No pet-store affiliate placements. Vet-network listings are based on owner reports and verified credentials, not paid placement.' Output: React + Tailwind."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Ferret.com. Top nav: 68px height, warm cream #FBF5E8 background with a 1px bottom border #E6D6BE. Left: 'Ferret.com' wordmark in Playfair Display 700 at 22px chocolate with a small amber #C99D5F period. Center: nav links 'Health · Diet · Housing · Behavior · Vet Care · Adopting' in Source Sans 3 500 at 15px text-dark, 24px gap. Right: search icon + 'Newsletter' outlined-chocolate link. Footer: dark masthead #1E140A, padding-y 80px, four columns desktop (Topics / Vet Network / About / Legal). Playfair 14px column headings in amber; Source Sans 14px links in cream at 70% alpha. Include a prominent 'Find an exotic vet' link in the Vet Network column. Bottom row: Playfair wordmark, copyright, FTC disclosure ('Ferret.com may earn affiliate commission from retailer links. We do not accept payment from food, supplement, or cage-manufacturer brands.'). NO social-media icons. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the hero acknowledges the adrenal-disease prevalence MORE prominently — e.g., a small stat-tile in the hero ('70%+ of ferrets develop adrenal disease — here's what you need to know') as part of the brand-honesty positioning.
- A variant where the categories grid uses 4 cards instead of 6, with each card larger and the 'Adopting & Sourcing' category given a dedicated section below the grid.
- A variant where the editorial-positioning band sits at the TOP of the page (above the categories) to lead with the honesty register.
- A variant where the dark trust bar uses the amber #C99D5F as the background instead of the dark cocoa masthead, for a warmer-but-still-prominent treatment.

## Photography Direction
- **Hero imagery:** single ferret in natural posture (sleeping curled, alert on hind legs, mid-stride). Soft warm lighting, eye-level.
- **Category card imagery:** category-appropriate documentary photography. Health uses calm vet-hand-checking-abdomen (no faces). Adopting uses rescue-context imagery (not pet-store-aisle).
- **DO NOT:** AI-generated ferrets (subtle anatomy fails), ferrets in costumes / hats, "fuzzy noodle" pose memes, pet-store-aisle staging, baby-talk visual jokes, anthropomorphized scenes (ferret holding a tiny mug), AI-generated humans (per QC-STANDARDS §1), pet-store-promotional marketing imagery.
- **Sources:** Unsplash (Steve Tsang does excellent ferret work), Wikimedia for veterinary reference, AFA member photography with permission for community-context shots, commissioned photography long-term for the health-reference and rescue-context categories.

## Component Sophistication
- Hover micro-interactions on category cards.
- Tabular numerals on dosing references, age-cohort statistics, lifespan ranges.
- Pull-quote with amber hairline above and amber eyebrow label.
- Amber-color period in the wordmark.
- Source-attribution under hero (small-caps amber at 10px).
- Read-time + reviewer meta on featured articles ("12 min · Reviewed by [exotic-vet], Apr 2026") — only if real, per QC-STANDARDS §1.
- Exotic-vet finder cross-link (an inline component visible in the footer linking to a vet directory).
- Loading + success states on email form.
- Focus-visible rings in chocolate.

## What NOT to design
- No carousels.
- No "fuzzy noodle" / "your fuzzy bestie" baby-talk register.
- No cartoon ferret mascot.
- No costume / staged-cute imagery.
- No popups beyond exit-intent.
- No display ads.
- No pet-store affiliate hero placement.
- No fake vet reviewer attribution.

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (chocolate on warm cream passes AAA; amber on warm cream is AA-large only, never use amber for body text).
- Semantic HTML.

---

# 10. Ferrets.com Homepage — Design Brief for Stitch

## Project Type
Library / directory content-engine site — homepage design. The sister site to Ferret.com. Where Ferret.com is the premium editorial brand, Ferrets.com is the searchable directory / state-by-state listings / community-reference utility.

## Positioning (one line)
The exhaustive ferret directory — exotic-vet listings by state, rescues by state, ferret-shelter network, breed-and-color-pattern reference, and community-resource index.

## Brand Voice (5 adjectives + 5 anti-adjectives)
**Adjectives:** Library-comprehensive, directory-neutral, geographic-aware, evergreen, community-respectful.
**Anti-adjectives:** Editorial (that's Ferret.com), promotional, selective ("our favorites"), opinion-led, monetization-coded.

## Target Audience
Primary: a current ferret owner searching for a specific local resource ("exotic vet in Portland", "ferret rescue in Texas"). Secondary: a researcher cross-referencing color patterns or genetic terms. Tertiary: an owner-volunteer adding their local rescue / vet recommendation to the directory.

## Reference Inspiration
- https://petfinder.com — geographic-search directory register (we improve the visual clutter).
- https://www.audubon.org/bird-guide — library-reference geographic listings.
- https://www.law.cornell.edu/wex (Cornell Legal Information Institute) — institutional-library register, sparse, useful.
- https://www.ahdictionary.com — reference-utility aesthetic.

## Color Palette (match `apps/ferrets-com/src/app/globals.css`)
- Primary: `#6E4A28` (lighter chocolate — sister-site distinction from Ferret.com's deeper `#5C3A1E`)
- Primary light: `#8A6240`
- Primary pale: `#F8F1E2`
- Primary dark: `#4E331A`
- Surface: `#FBF6EA` (paper cream)
- Soft warm white: `#FFFDF7`
- Dark masthead: `#2A1E12`
- Text dark / mid / light: `#2A1E12` / `#5A4230` / `#957E62`
- Border: `#EADDC4`

## Typography
- Display: **Playfair Display** (600). Min 26px — but used less than on Ferret.com; this is a library/utility site.
- Body: **Source Sans 3** (400 / 600). 16px body / 14px caption / 13px table-row.
- OpenType: tabular numerals on state-counts, distances, ZIP-code lookups.

## Layout Zones
1. **Hero** — library-utility register. Playfair H1 (modest size — 36px): "The ferret directory & reference library." Subheading in Source Sans: "Exotic-vet listings, rescues, color-pattern reference, and community resources — by state, by topic." A prominent search input directly below — "Search by state, vet, rescue, or topic…" — with a chocolate-fill search button. Trust microcopy: "1,200+ listings · Updated monthly · Volunteer-maintained."
2. **State picker** (the signature component) — a clickable US-state grid (50 states + DC + Canadian provinces). Hovering a state previews the count of vets/rescues for that state. Clicking goes to that state's directory page.
3. **Featured directory categories grid** — 6 utility-card entries: Exotic Vets by State, Ferret Rescues by State, Color & Pattern Reference, Genetic Terms Glossary, Community Forums Index, Emergency Resources.
4. **Featured reference articles** — 4 evergreen library entries (not magazine-style): "Ferret color & pattern reference — the complete chart", "Standard ferret-genetics terminology", "The state-by-state ferret legality reference", "Emergency exotic-vet protocol if your usual vet is unavailable."
5. **Volunteer call-out band** — "Help maintain the directory. Add a vet recommendation, report an outdated listing, or join the editor pool." Single CTA.
6. **Email capture** — "Get the monthly directory-update digest."
7. **Footer** — masthead-dark, four columns, prominent sister-site link to Ferret.com for editorial coverage.

## Specific Stitch Prompts

### Prompt 1: Hero (search-first, library register)
"Design a library/directory homepage hero for Ferrets.com — the sister site to Ferret.com. The visual register is Cornell Legal Information Institute meets Audubon bird-guide — sparse, library-comprehensive, never editorial-flourish-y. Palette: lighter chocolate #6E4A28 (sister-site distinction from Ferret.com's deeper chocolate), paper cream #FBF6EA background, deep cocoa text #2A1E12. Typography: Playfair Display 600 at 36px (modest — this is a library, not a magazine) for the H1 'The ferret directory & reference library.'; Source Sans 3 400 at 16px subheading 'Exotic-vet listings, rescues, color-pattern reference, and community resources — by state, by topic.' Below: a prominent search input, max-width 720px desktop, height 56px, 1px border #EADDC4, focus 2px chocolate #6E4A28 ring, placeholder 'Search by state, vet, rescue, or topic…', flush-right chocolate-fill search-icon button. Below the search, a Source Sans 12px mid-tone trust line: '1,200+ listings · Updated monthly · Volunteer-maintained'. NO hero photograph (this is a directory, not editorial). The visual centerpiece is the search input. Output: responsive React + Tailwind, WCAG AA contrast."

### Prompt 2: State picker (signature component)
"Design a clickable US-state-grid picker for Ferrets.com — the signature component of the homepage. Full-width section, paper-cream background #FBF6EA, padding-y 96px, max-width 1200px centered. Above: Playfair Display 28px section heading 'Find resources in your state.' Below: a grid of 50 US-state tiles + DC + an optional 'Canada' row of provinces. Each state tile: 80×80px square, 1px border #EADDC4, white #FFFFFF background, Source Sans 14px tabular state postal abbreviation (e.g., 'CA', 'TX', 'NY') centered, Source Sans 11px tabular count below ('48 vets · 12 rescues' — Stitch can mock these counts). Hover: tile background shifts to primary-pale #F8F1E2, border to chocolate #6E4A28, count text becomes the chocolate color. Click goes to that state's directory page. Grid layout: 10 columns desktop (5 rows of 10), 8 columns tablet, 5 columns mobile. Below the state grid, a Source Sans 13px mid-tone link 'Add a listing for your state' that opens a contributor form. NO US-map illustration / SVG — the grid is the picker. This grid-style picker is more accessible and more performant than a US-map SVG; please do not generate a map. Output: responsive Tailwind + React."

### Prompt 3: Featured directory categories grid
"Design a 6-card directory-categories grid for Ferrets.com: Exotic Vets by State, Ferret Rescues by State, Color & Pattern Reference, Genetic Terms Glossary, Community Forums Index, Emergency Resources. Utility-card register (this is a library, not a magazine): NO photographs on these cards. Each card: a 28px stroke-only icon at the top in chocolate #6E4A28 (use Lucide icons), Playfair 18px title in text-dark, Source Sans 14px description in mid-tone, a small listing-count chip in tabular Source Sans 11px ('1,247 listings'), bottom-right arrow micro-affordance. Card background: soft white #FFFDF7 with a 1px border #EADDC4. Hover: border shifts to chocolate #6E4A28, arrow micro-affordance translates 4px right. Three columns desktop, two tablet, one mobile. NO hover lift — this is a utility site, restraint over flourish. Output: responsive Tailwind + React."

### Prompt 4: Volunteer call-out + email capture
"Design two adjacent compact sections for Ferrets.com — a volunteer call-out band and an email capture. Volunteer call-out band: full-width, primary-pale background #F8F1E2 with a 1px top + bottom border #EADDC4, padding-y 72px, centered single-column max-width 880px. Playfair 24px headline 'Help maintain the directory.' Source Sans 15px subhead 'Add a vet recommendation, report an outdated listing, or join the volunteer-editor pool. Ferrets.com is community-maintained.' Below: a chocolate-fill button 'Become a contributor' that opens a contributor signup form. Email capture: below the volunteer band, padding-y 80px, paper-cream background, max-width 720px centered, single horizontal row desktop. Left: Playfair 24px 'Monthly directory-update digest.' Source Sans 14px 'New listings, removed listings, recent contributor additions.' Right: single email input, focus state with 2px chocolate ring, flush-right chocolate-fill submit button 'Subscribe'. Loading + success states. Output: responsive Tailwind + React."

### Prompt 5: Top navigation + footer
"Design the top navigation and footer for Ferrets.com — library/directory register. Top nav: 60px height (shorter than editorial sister Ferret.com — utility convention), paper cream #FBF6EA background with a 1px bottom border #EADDC4. Left: 'Ferrets.com' wordmark in Playfair Display 600 at 20px lighter-chocolate #6E4A28 with a small amber-color period. Center: nav links 'Vets · Rescues · Color & Pattern · Genetics · Forums · Emergency' in Source Sans 3 500 at 14px text-dark, 20px gap. Right: a persistent search input always visible (not collapsed) — placeholder 'Search directory…', width 220px, height 36px. Footer: dark masthead #2A1E12, padding-y 72px, four columns desktop (Directory / Contribute / About / Legal) PLUS a fifth prominent column linking to Ferret.com: 'Editorial coverage' with a Playfair 16px link 'Visit Ferret.com →'. Playfair 14px column headings in amber; Source Sans 13px links in cream at 70% alpha. Bottom row: Playfair wordmark, copyright, contributor-attribution line ('Ferrets.com is maintained by 47 volunteer editors. Listings are owner-submitted and credential-verified. Last directory sync: 2026-05-25.'). NO social-media icons. NO 'promoted listing' chrome. Output: React + Tailwind."

## Variations to ask Stitch for
- A variant where the state-picker uses a US-map SVG instead of the text-grid (visually richer but less accessible; included for comparison only — keep the text-grid as the primary recommendation).
- A variant where the directory-categories grid includes a small recent-listings preview under each card (e.g., '3 new listings this week').
- A variant where the volunteer call-out band is removed and replaced with a 'Recently added' listings carousel-row (the only carousel exception in the portfolio, justified by the directory's update-frequency value prop).
- A variant where the hero subheading is replaced with a single line of stats: '1,247 vets · 318 rescues · 50 states · 47 contributors'.

## Photography Direction
- **Hero imagery:** NONE. Library/directory register; the search input is the hero.
- **Category card imagery:** NONE. Stroke-only icons (Lucide).
- **State picker imagery:** NONE. The text-grid IS the visual.
- **DO NOT:** Anything editorial-flourish-y. No hero photo. No category photography. No US-map SVG (use the grid instead — more accessible, more performant). No AI-generated ferret imagery anywhere.
- **Sources:** Lucide icons (https://lucide.dev) under ISC for the utility iconography. If photography is required anywhere (e.g., on the future contributor-profile pages), use real community-submitted photography with explicit license.

## Component Sophistication
- Search input with autocomplete preview.
- State picker with hover-preview counts (tabular numerals).
- Utility cards with stroke-only icons and arrow-micro-affordance.
- Listing-count chips in tabular Source Sans.
- Contributor-signup CTA (this is a community-maintained directory; calling out contributors is the brand).
- Cross-link to Ferret.com prominently in the footer (the editorial sister-site brand).
- Loading + success states on email form.
- Focus-visible rings in chocolate.

## What NOT to design
- No carousels.
- No hero photography (library register).
- No US-map SVG (use the grid — more accessible, more performant).
- No editorial pull quotes (that voice lives on Ferret.com).
- No popups.
- No display ads.
- No marketing copy ("the largest directory!", "the most comprehensive!").
- No "promoted listing" chrome — the directory is alphabetical / geographic, never paid-placement-influenced.

## Output Format Wanted
- Tailwind classes only.
- Next.js / React JSX (App Router).
- Responsive sm / md / lg / xl.
- WCAG AA contrast (lighter chocolate on paper cream passes AA; for any small text use primary-dark `#4E331A`).
- Semantic HTML — `<search>` (HTML5), `<nav>` for the state picker if appropriate.
- Performance: minimize JS, lazy-load below-fold content, this is a content-heavy directory that must stay snappy.

---

# Bonus brief — Cornerstone article template (use only if time allows)

If Carlo finishes the 10 homepage briefs with time to spare tomorrow, this single article-template brief works for every site with minor palette swaps. It's the second-highest-leverage page in the portfolio after the homepage.

## Project Type
Long-form editorial reference article template — magazine-quality typography for evergreen cornerstone content (5,000–12,000 word health and gear reference pieces).

## Positioning
The "Wikipedia + Wirecutter + Cook's Illustrated" register applied to a single pet-keeping topic. The page is a citable reference, not a blog post. It should look like a print monograph that happens to be on the web — not like a 2018 SEO blog.

## Layout zones (top to bottom)
1. **Eyebrow + breadcrumb** — small-caps eyebrow ("Equine Health / Ulcers") in the site's brass / amber / brand-accent color. Breadcrumb with home → category → article.
2. **H1** — site display font at 56–64px, max-width 14em (constrained for editorial line-length).
3. **Author + reviewer attribution byline** — small avatar (24px), author name, "Reviewed by [DVM name], [credential]" — ONLY if reviewer is real per QC-STANDARDS §1. Last-reviewed date.
4. **TL;DR callout** — site-accent-color border-left 4px callout box with 3–5 bulleted key takeaways. This serves both readers and GEO retrofit (per PR #35).
5. **Hero photograph** — full-bleed-within-content single editorial image with a caption + photo credit.
6. **Table of contents** — sticky on desktop scroll, inline on mobile. Generated from H2s.
7. **Body content** — magazine typography per site (Playfair / Cormorant / Bodoni / Zilla / etc.). 65-character max line length (`max-width: 38em`). Generous paragraph spacing (1em). H2s with site-specific treatment.
8. **Inline FAQ accordion** — schema-attached (per PR #35), 5–10 questions at the bottom.
9. **Citations** — numbered, footnoted at the bottom. Hover-preview on inline numbers.
10. **Author bio + reviewer credentials** — at the bottom, full attribution.
11. **Related cornerstones** — 3 same-category articles below the byline footer.
12. **Email capture** — same component as homepage, smaller.

## Stitch prompt (paste verbatim, replace `{site}` and `{palette}` per site)
"Design a long-form editorial article template page for {site}, a premium pet-keeping reference site. The visual register is a print magazine monograph (Cook's Illustrated, NYT Magazine long-form, Practical Horseman feature) — restrained, citation-respecting, generous whitespace. Palette: {paste site hex codes from the homepage brief}. Typography: {paste site display + body families}. Layout: above-the-fold has an eyebrow + breadcrumb in accent color, a display-font H1 at 56–64px constrained to max-width 14em, a small author/reviewer byline row with 24px avatar + 'Reviewed by [DVM], DVM' + 'Last reviewed Apr 2026', a TL;DR callout with a 4px accent border-left containing 4 bulleted key takeaways, then a full-bleed hero photograph 16:9 with a caption + photo credit in 12px mid-tone. Below the fold: a sticky table-of-contents on the left desktop / inline mobile, then the article body in 18px body font with max line-length 65 characters (`max-width: 38em` centered), generous 1em paragraph spacing, H2s in display font 32px with the site's accent-color underline treatment, H3s 22px in body font 700. Inline pull-quotes use the display font italic at 26px with an accent-color hairline left. Inline FAQ accordion at the bottom, then numbered citations footnoted below, then a full author + reviewer bio card, then a 3-card 'Related cornerstones' grid. Sticky email-capture appears on scroll past 60% page depth. NO display ads, NO popups (except exit-intent), NO autoplay video. Output: responsive React + Tailwind, WCAG AA contrast, semantic HTML (`<article>` wrapping, `<aside>` for ToC, `<footer>` for byline)."

## What NOT to design
- No display ads inline in the body.
- No autoplay video.
- No social-share buttons floating in the margin (cluttered; place at bottom only).
- No "recommended for you" infinite-scroll chrome.
- No comments section.
- No fabricated reviewer credentials (QC-STANDARDS §1).

---

# Stitch session checklist (pin this when you start)

Before you start tomorrow:
- [ ] Open this doc in a side panel; keep the per-site brief visible while you work in Stitch.
- [ ] Open the live site preview (or the `apps/{site}/src/app/page.tsx` source) so you can compare Stitch output to current state.
- [ ] Have a scratch directory ready: `mkdir -p ~/stitch-outputs/2026-05-29 && cd ~/stitch-outputs/2026-05-29`.
- [ ] Bookmark https://stitch.withgoogle.com and https://v0.dev (fallback).

During each site (15–30 min):
- [ ] Paste the entire site-brief block (top "Project Type" line through "Output Format Wanted").
- [ ] Generate Hero (Prompt 1) first. Iterate 2–3 times.
- [ ] Once Hero is acceptable, run Prompt 2 (Categories), Prompt 3 (Editorial band), Prompt 4 (Email capture) in order.
- [ ] Save the final composite HTML to `~/stitch-outputs/2026-05-29/stitch-{site}.html`.
- [ ] Screenshot the rendered preview to `~/stitch-outputs/2026-05-29/stitch-{site}.png`.

After all 10 sites:
- [ ] Create a single branch per site: `git checkout -b claude/stitch-handoff-{site}-2026-05-29` and commit the HTML + PNG.
- [ ] Push and dispatch the implementation agent with the handoff brief below.

# Variations worth asking Stitch for (per site, if first pass feels off)

- "Show me a variant with the hero text on the LEFT and image on the RIGHT, and another with it flipped."
- "Show me a variant where the hero is full-bleed image with a centered type overlay, and another where the image is a constrained rectangle in a 50/50 column split."
- "Show me a variant with the dark trust bar in [accent color] background instead of the dark masthead color."
- "Show me a variant with the category grid as 2 rows of 3 instead of 3 rows of 2 (or vice versa)."
- "Show me a variant where the email capture is a single centered column instead of side-by-side."
- "Show me a more editorially restrained variant — strip 30% of visual elements, double the whitespace."

# Implementation handoff

Once Carlo has Stitch outputs (HTML/Tailwind files saved as `stitch-{site}-{timestamp}.html`):

1. Carlo drops the file(s) into a new branch `claude/stitch-handoff-{site}-{date}` and pushes.
2. Dispatch an implementation agent with the brief:

> **Brief — Translate Stitch HTML/Tailwind into @carloOS/ui components for {site}.**
>
> Source: `stitch-{site}-{timestamp}.html` on branch `claude/stitch-handoff-{site}-{date}`.
> Per-site palette + typography: locked in `apps/{site}/src/app/globals.css` — do NOT change these tokens; the Stitch output must adapt to them.
> Component target: extract reusable pieces (Hero, CategoryGrid, EditorialBand, EmailCapture, TriagePanel etc.) into `packages/ui/src/components/{site}/` and consume from the site's `src/app/page.tsx`.
> Respect: no AI-generated humans/animals; no fake "vet-reviewed" / "tested" / "trust" claims (QC-STANDARDS §1); no carousels; semantic HTML; WCAG AA contrast verified.
> Replace placeholder Stitch images with real photography per the brief's "Photography Direction" — source from Unsplash / Pexels / Wikimedia / commissioned shoots only.
> Output: one PR per site titled `feat({site}): Stitch-derived homepage redesign`.

3. The implementation agent opens the PR; Carlo reviews and merges.

# Sister-site coherence rules

Two pairs of sister sites exist in the portfolio. The Stitch briefs must produce designs that read as related-but-distinct, never as duplicates and never as siblings-with-no-shared-DNA.

## PetFood.com (editorial / scoring) ↔ PetFoods.com (catalog / database)

**Shared:**
- Same moss-green primary `#3F5C3A`.
- Same dark masthead family (near-black with green cast).
- Same general layout grid (12-column, container max-width 1200px, padding-y 80–96px).
- Same "no carousels, no fake trust badges" hard rules.

**Distinct:**
- **PetFood.com** uses Cormorant Garamond for display (editorial register). **PetFoods.com** uses Inter for everything including display (utility register).
- **PetFood.com** has full hero photography (ingredient close-ups). **PetFoods.com** has NO hero photography — the search input is the hero.
- **PetFood.com** has an editorial-positioning pull-quote band. **PetFoods.com** has a sister-site cross-link band pointing TO PetFood.com.
- **PetFood.com** has 4 featured scorecards (curated editorial selection). **PetFoods.com** has 4 sample SKU rows (representative search results).
- **PetFood.com**'s wordmark uses Inter 700 + accent-color period. **PetFoods.com** uses the same wordmark style (intentional — same brand family) but slightly smaller and sans the editorial flourish.

**The visual hierarchy reflects the brand hierarchy:** PetFood.com is the master brand (where opinions live); PetFoods.com is the underlying data layer (where exhaustive listings live). Stitch outputs should make this hierarchy visible — PetFoods.com cross-links UP to PetFood.com; PetFood.com does not need to cross-link DOWN.

## Ferret.com (premium editorial) ↔ Ferrets.com (library / directory)

**Shared:**
- Same Playfair Display + Source Sans 3 typography pairing.
- Same general chocolate-brown family (Ferret deeper `#5C3A1E`, Ferrets lighter `#6E4A28`).
- Same warm-cream surface family (Ferret `#FBF5E8`, Ferrets `#FBF6EA`).
- Same hard rules ("no fuzzy noodle baby-talk", "no fake vet attribution").

**Distinct:**
- **Ferret.com** uses amber `#C99D5F` as a prominent CTA accent. **Ferrets.com** uses chocolate fills for CTAs (utility tone), amber only as a small accent in footers/headings.
- **Ferret.com** has full hero photography (single ferret in natural posture). **Ferrets.com** has NO hero photography — the search input + state-picker is the hero.
- **Ferret.com** has an editorial-positioning pull-quote band about "honesty." **Ferrets.com** has a volunteer-contributor call-out band about community maintenance.
- **Ferret.com** display sizes are larger (60px H1). **Ferrets.com** is more modest (36px H1) — library register.
- **Ferret.com**'s wordmark is brand-prominent. **Ferrets.com**'s wordmark is smaller and the URL (ferrets.com) is more functional than identity-coded.

**The visual hierarchy reflects the brand hierarchy:** Ferret.com is the premium editorial property; Ferrets.com is the community-maintained directory backbone. Ferrets.com prominently cross-links to Ferret.com; Ferret.com may include a small reference to Ferrets.com in the vet-network section but does not feature it.

---

# Photography sourcing master list

Stitch will use placeholder images by default; the implementation agent replaces them with real photography in PR translation. This is the source-of-truth for what gets used where.

## Approved sources (free / open-license)

| Source | URL | License | Best for |
|---|---|---|---|
| Unsplash | https://unsplash.com | Unsplash License (free commercial) | Hero photography, lifestyle, environmental |
| Pexels | https://pexels.com | Pexels License (free commercial) | Stock-photo gaps Unsplash doesn't cover |
| Wikimedia Commons | https://commons.wikimedia.org | CC variants (verify per-image) | Species reference, anatomy, breed reference, herpetology macros |
| iNaturalist (research-grade only) | https://inaturalist.org | CC variants (verify per-image) | Species identification, habitat shots |
| US government archives (USDA, FDA, NOAA) | https://www.usa.gov/agencies | Public domain | Agricultural / veterinary / fisheries reference |

## Photographers worth following (for commission consideration)

- **Dog photography** — Joe Caione, Anthony Duran, Justin Veenema (all visible on Unsplash; reach out for commercial commission).
- **Horse / equestrian** — Helena Lopes, Mathias Reding, Soledad Lorieto (Unsplash + direct commission).
- **Aquatic / aquarium** — Huy Phan, Worachat Sodsri (Unsplash); reef-photography community on Reef2Reef for high-end species shots (commission individually).
- **Reptile / herpetology** — David Clode, Pierre Bamin (Unsplash); academic-herpetologist community on iNaturalist research-grade observations.
- **Ferret** — Steve Tsang (Unsplash); American Ferret Association member-photographer network (community-submitted with permission).
- **Pet food / ingredient** — Eduardo Soares for raw meat/fish, Karyna Panchenko for grains/legumes (both Unsplash).
- **Saddle / luxury equestrian** — commissioned-only is the long-term answer; short-term licensed via Stocksy / Trunk Archive.

## Prohibited sources (HARD RULE per QC-STANDARDS §1)

- **AI-generated imagery of any animal** — anatomy fails are reputationally fatal in pet niches. Hard rule on every site.
- **AI-generated humans** — explicit Blocker-severity violation per QC-STANDARDS §1.
- **Manufacturer marketing imagery used as editorial content** — implies endorsement; violates affiliate-disclosure spirit.
- **Getty / Shutterstock stock-photo clichés** — smiling-rider-hugging-horse, vet-with-puppy, golden-retriever-pile, family-around-aquarium. Visual register that signals "low-effort content site."
- **Pet-influencer / Instagram-sourced** — unverified rights, brand-incoherent.

## File spec for production images

- **Format:** AVIF primary, WebP fallback, JPEG ultimate fallback (handled by Next.js Image component).
- **Hero:** 2400×1600 source (lossy 80–85%), served at 1200×800 (2× retina).
- **Category card:** 800×600 source, served at 400×300 (2× retina).
- **Article inline:** 1600×900 source, served at 800×450 (2× retina).
- **Captions:** every photo gets a caption + photographer credit. No exceptions on editorial pages.
- **Alt text:** descriptive, not "image of a dog." Per accessibility + GEO standards.

---

# Iteration tips

- **If Stitch's output feels generic** — add 1–2 more reference URLs to the prompt. The model leans heavily on referenced sites' visual register.
- **If it's too busy** — append "editorial restraint, more whitespace, fewer visual elements" to the prompt. Stitch responds well to this exact phrase.
- **If colors drift** — Stitch sometimes hallucinates "close enough" hex codes. Always paste the exact hex codes from the brief, and explicitly say "do not substitute hex codes; use exactly these."
- **If typography drifts** — paste the exact Google Fonts URL (e.g., `https://fonts.google.com/specimen/Playfair+Display`) so Stitch can confirm the family name.
- **If hover states are missing** — explicitly add "include hover and focus states for every interactive element" to the prompt.
- **If the output isn't responsive** — explicitly add "responsive at sm (640px), md (768px), lg (1024px), xl (1280px) breakpoints using Tailwind's default scale" to the prompt.

# Multi-tool fallback

If Stitch doesn't produce what's needed for a particular site:

- **Vercel v0** (https://v0.dev) — same brief, produces React+Tailwind output directly. Often stronger on layout precision; weaker on color/typography intuition. Use the same brief verbatim.
- **Figma AI** (https://www.figma.com/ai) — better when you want a Figma file for handoff to a separate designer or to iterate visually before code. Same brief, but rephrase Layout Zones as "frames."
- **Midjourney / DALL·E (NO)** — these generate raster images, not code, and tempt teams toward AI-generated photography. Do not substitute for any of the above.
- **Hire a human designer** — if all three tools produce mediocre output for a particular site (most likely candidates: Saddle.com luxury restraint, Lizard.com dark mode), this is a signal to commission a single $400–$800 design pass via Dribbble / a freelance editorial designer. Brief them with the same per-site brief from this doc.

# Cost

- **Stitch** — free for moderate use. Google has not announced paid tiers as of 2026-05-28.
- **Vercel v0** — free tier covers ~10 generations/day. Paid tier ($20/mo) for unlimited; not needed for tomorrow's session.
- **Figma AI** — bundled with Figma Professional ($15/editor/mo). If you already have Figma, no incremental cost.
- **Total for tomorrow's session: $0** — all three tools have free tiers sufficient for one 15–30 min session per site.

---

# Component patterns library (shared across sites — for the implementation agent)

Once Stitch outputs are translated, these components are the reusable building blocks that will end up in `packages/ui/src/components/`. The implementation agent extracts these rather than copy-pasting per-site JSX.

## Patterns that appear on ALL 10 sites

- **Top navigation** — `<NavBar />` with site-specific color tokens via CSS variables. Mobile collapse to hamburger overlay.
- **Hero (type-and-image)** — `<HeroPrimary />` with `tagline`, `headline`, `paragraph`, `ctas[]`, `imageSrc`, `imageAlt` props. Layout-flips via prop (left-type-right-image vs reverse). Image-overlay variant via prop.
- **Hero (search-first)** — `<HeroSearch />` for PetFoods + Ferrets. Props: `placeholder`, `microcopy`, `submitHref`.
- **Dark trust bar** — `<TrustBar />` with `claims[]` prop. Site-specific background color token.
- **Categories grid** — `<CategoryGrid />` with `categories[]` (each with `eyebrow`, `title`, `description`, `imageSrc`, `href`). Column count via prop (default 3).
- **Featured articles grid** — `<FeaturedArticles />` with `articles[]` (each with `eyebrow`, `title`, `teaser`, `readTime`, `reviewedBy?`, `lastReviewed?`, `href`). Layout variants via prop.
- **Editorial positioning band** — `<EditorialBand />` with `eyebrow`, `quote`, `linkText`, `linkHref`. Background variant via prop (cream / dark / accent).
- **Email capture** — `<EmailCapture />` with `headline`, `subhead`, `submitLabel`, `disclosure?`, `endpoint`. Loading / success states handled internally.
- **Footer** — `<Footer />` with `columns[]` (each with `heading`, `links[]`), `disclosure`, `wordmark`. Site-specific color tokens.

## Patterns that appear on a SUBSET of sites

- **Triage panel** (`<TriagePanel />`) — Vets.co only. Three-column with color-coded borders + categorized example presentations. Could expand to Horses.com Health and Dog.com Health in future.
- **State picker** (`<StatePickerGrid />`) — Ferrets.com only. Text-grid (NOT SVG map) for accessibility/performance.
- **SKU row** (`<SkuRow />`) — PetFoods.com only. Horizontal product-line entry with mono-font ingredient panel.
- **Scoring badge** (`<ScoreBadge />`) — PetFood.com (primary) + PetFoods.com (cross-linked). Colorblind-safe + glyph-paired.
- **Methodology version card** (`<MethodologyCard />`) — PetFood.com only. Shows current rubric version + dimension weights.
- **Recall timeline** (`<RecallTimeline />`) — PetFood.com only. Horizontal date-spread of FDA-CVM entries.
- **Discipline pill** (`<DisciplinePill />`) — Horses.com only. Inline content callout ("For English riders:" / "For Western riders:") on health and gear articles.
- **Ingredient panel** (`<IngredientPanel />`) — PetFood.com + PetFoods.com. JetBrains Mono full ingredient list with hover-annotation per ingredient.
- **Vet-network listing** (`<VetListing />`) — Ferret.com + Ferrets.com + Vets.co.

## Patterns explicitly NOT shared (per-site bespoke)

- Hero photography treatment — too brand-specific.
- Pull-quote typography — too display-font-dependent.
- Wordmark — each site has its own with site-specific accent-color period.
- Mobile nav transitions — each site can tune timing for its brand feel.

## Token-driven implementation note

Every shared component MUST consume CSS variables from `apps/{site}/src/app/globals.css` rather than hard-coding hex values. The Tailwind preset in `packages/config/tailwind.preset.ts` already exposes these as `brand-primary`, `brand-surface`, `brand-text-dark` etc. — components reference those classes, never raw hex.

This means: when Stitch outputs `bg-[#3F5C3A]`, the implementation agent rewrites it as `bg-brand-primary`. The brand-token system is the entire reason a single component can serve 10 sites without 10× code.

---

# Per-site CTA copy bank (drop-in alternatives)

If Stitch produces a hero or email-capture and you want to test alternate CTA labels mid-iteration, pick from these per-site banks. Each label has been written to match the site's voice register; don't mix-and-match across sites.

## Dog.com
- Primary CTAs: "Browse breeds" · "See the latest gear test" · "Start the new-owner roadmap" · "Read the food-buying guide"
- Secondary CTAs: "Read our standards" · "How we test" · "Find a trainer"
- Email capture: "Get the weekly gear-test digest" · "One email a week, never sponsored"

## Fish.com
- Primary CTAs: "Start the cycling guide" · "Browse species profiles" · "Open the species index" · "Read the saltwater starter"
- Secondary CTAs: "See test methodology" · "Browse equipment reviews"
- Email capture: "Get the weekly water-chemistry digest"

## Horses.com
- Primary CTAs: "Start the new-owner roadmap" · "Browse cornerstones" · "Open the discipline guide" · "Read the saddle-fit reference"
- Secondary CTAs: "Read our editorial standards" · "Find a vet"
- Email capture: "Get the First Horse Roadmap (8 emails)"

## Saddle.com
- Primary CTAs: "Start the fit guide" · "Browse by discipline" · "Open the resale reference"
- Secondary CTAs: "Our fit methodology" · "Browse by maker"
- Email capture: "The monthly saddle-buyer's brief"

## PetFood.com
- Primary CTAs: "Open the Index" · "How we score" · "Browse by brand" · "See recent recalls"
- Secondary CTAs: "Read our methodology" · "Submit a formula"
- Email capture: "Monthly recalls + new scorecards"

## PetFoods.com
- Primary CTAs: "Search the index" · "Browse by ingredient" · "API waitlist"
- Secondary CTAs: "About the data" · "Last sync: {date}"
- Email capture: "Get the monthly directory-update digest"

## Lizard.com
- Primary CTAs: "Browse species" · "Read the husbandry standards" · "Open the gear-test index"
- Secondary CTAs: "Find a herp vet" · "Editorial standards"
- Email capture: "Monthly husbandry digest"

## Vets.co
- Primary CTAs: "Search symptoms" · "Browse conditions" · "Open the emergency guide"
- Secondary CTAs: "Read our reviewer credentials" · "Find a vet"
- Email capture: "Monthly veterinary owner brief"

## Ferret.com
- Primary CTAs: "Read before you adopt" · "Browse health & care" · "Find an exotic vet"
- Secondary CTAs: "Editorial standards" · "About insulinoma" · "About adrenal disease"
- Email capture: "Monthly ferret-owner brief"

## Ferrets.com
- Primary CTAs: "Find resources in your state" · "Search the directory" · "Become a contributor"
- Secondary CTAs: "About the directory" · "Editorial coverage on Ferret.com"
- Email capture: "Monthly directory-update digest"

---

# Stitch session timeline (suggested 4-hour schedule)

The 10-site portfolio at 15–30 min each is 2.5–5 hours of Stitch work. Suggested schedule:

| Time | Activity | Notes |
|---|---|---|
| 09:00–09:15 | Setup | Open Stitch, scratch dir, this doc; bookmark v0.dev fallback |
| 09:15–09:45 | **Horses.com** (Priority 1 — biggest brand-differentiating palette) | The most visual-leverage site of the 10. Don't rush. |
| 09:45–10:15 | **Saddle.com** (Priority 2 — luxury read) | Restraint over flourish. If Stitch can't nail the Hermès-catalog feel in 30 min, save partial and flag for human-designer commission. |
| 10:15–10:45 | **PetFood.com** (Priority 3 — moss-green Consumer-Reports look needs validation) | The biggest unknown. If the moss-green-on-warm-white reads as "boring," try orange variant for comparison. |
| 10:45–11:00 | **Break + checkpoint** | Review what you have. If pace is fast, continue. If slow, drop Priority 7–10 sites and focus on Priority 4–6. |
| 11:00–11:30 | **Lizard.com** (Priority 4 — dark mode is hardest) | Dark-mode requires more iteration. Don't fight Stitch if the lime accent looks neon — try a darker variant. |
| 11:30–12:00 | **Vets.co** (Priority 5 — triage panel signature) | The triage panel is the signature component. Spend extra time on Prompt 2 there. |
| 12:00–13:00 | **Lunch + review** | Review the 5 morning outputs. Save all HTML/PNG. |
| 13:00–13:30 | **Dog.com** (Priority 6) | Polished but high-leverage; quick pass to refine the existing direction. |
| 13:30–14:00 | **Fish.com** (Priority 7) | Aquarium-magazine register; well-defined, should go fast. |
| 14:00–14:30 | **Ferret.com** (Priority 8) | Premium editorial; chocolate + amber palette is the moment. |
| 14:30–15:00 | **PetFoods.com** (Priority 9) | Utility / database register; fast since less editorial decision-making. |
| 15:00–15:30 | **Ferrets.com** (Priority 10) | Library / directory; the state-picker is the only bespoke component. |
| 15:30–16:00 | **Wrap-up** | Commit all outputs to per-site handoff branches; dispatch implementation agents. |

**If you run over on the morning sites:** drop Priority 10 (Ferrets.com) and Priority 9 (PetFoods.com) — these are utility sites that can use a templated translation from their sister-site editorial designs.

**If Stitch fails on a site:** open v0.dev with the same brief verbatim. If both fail, file a 1-line note in the handoff branch — "Stitch / v0 unable to produce satisfactory output; recommend commissioning a $400–$800 freelance designer via Dribbble for {site} only" — and proceed.

**If your energy fades:** Priority 8–10 can be deferred to a second session next week. Priorities 1–7 are the highest-leverage; if you only get those done, that's still a major step forward.

---

# Post-session: what to send the implementation agent

After tomorrow's Stitch session, Carlo opens one branch per site that produced a usable design and pushes the artifacts. The dispatch brief to the implementation agent is intentionally short — the per-site brief above plus the Stitch artifacts are the spec.

## One-liner dispatch template

> Implement {site} homepage redesign from Stitch handoff at `claude/stitch-handoff-{site}-2026-05-29`. Source brief: `ops/handoffs/2026-05-29-stitch-briefs-per-site.md` section {N}. Translate the Stitch HTML/Tailwind into `@carloOS/ui` components consuming the site's CSS-variable tokens (do not hard-code hex). Swap placeholder images for real photography per the brief's Photography Direction. Respect QC-STANDARDS §1 (no fabricated trust signals). Open one PR titled `feat({site}): Stitch-derived homepage redesign`. No additional briefs needed.

## What to inspect on the resulting PR

- Token usage: every color must reference `brand-*` Tailwind classes, never raw hex.
- Photography: placeholder gray rectangles replaced with real photos sourced from approved list.
- Accessibility: WCAG AA contrast verified (axe scan), keyboard navigation works, focus-visible rings present, semantic HTML.
- Performance: Lighthouse mobile score >= 90 (we don't ship homepages below this bar).
- Mobile responsive: passes the standard breakpoint matrix.
- QC-STANDARDS §1: no fabricated "Trusted by 50,000 owners" / "Tested" / fake DVM reviewer attributions.

## What NOT to expect from the implementation pass

- Photography commission (deferred to a Q3 budget conversation).
- Multi-page consistency (this pass is homepage-only; cornerstone-article template comes in a separate brief).
- Brand-mark redesign (the wordmarks-as-Playfair / Bodoni / Inter are stable; no logotype commission needed).
- A/B-testing infrastructure (defer to launch ops).

---

**Document status:** ready for Carlo to use in Stitch tomorrow morning.
**Next:** after Stitch session, dispatch implementation agents per the handoff format above; consider a code-review pass on the first integrated site before opening the other 9.
**Estimated total Carlo time:** 4–6 hours including breaks for one full-portfolio pass; or 2.5–3 hours for Priorities 1–7 only.
**File:** `ops/handoffs/2026-05-29-stitch-briefs-per-site.md`
**Branch:** `coo/2026-05-29-stitch-briefs`
