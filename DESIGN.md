# Design: JC Cabs Website

Companion to [PRD.md](PRD.md) (what) and [BUILD_PLAN.md](BUILD_PLAN.md) (how). This file defines **how it looks and feels**, as built.

**Direction (v3): photo-led, light and compact.** v2 (cream, serif, brass, dark green sections) was rejected as "AI-looking" and too big. v3 replaces it: white canvas, real photography as the main visual, one sans family, small type, few boxes, and a single accent colour used only for the Book action.

---

## 1. Why v2 failed (and what changed)

| v2 problem | v3 fix |
|---|---|
| Hero type 72 to 84 px, 112 px section padding, 48 px pills | Hero h1 30 px mobile / 44 px desktop, body 15 px, section padding 48 / 72 px, 44 px buttons |
| Bordered cards for every item | Photo tiles for tours; a ruled table for the fleet; ruled lists for routes and FAQ |
| Cream + serif + brass "calm editorial" look | White canvas, Inter only, forest green as ink, brass reserved for Book |
| Dark green as the default section colour | Light by default; dark only for the footer and over photos |
| Centered symmetrical stacks | Left-aligned layouts; asymmetric tour mosaic |
| No photography (grey boxes) | Real photos in the hero, tours and CTA band |

## 2. Reference research

Refero was connected but its subscription was inactive, so no Refero style or screen data was used. References were studied directly.

| Source | What was taken | Where it appears |
|---|---|---|
| [navbar.gallery](https://www.navbar.gallery/) | Floating navbar inset from the edges, over the hero; numbered mobile menu | `Header.astro` |
| [supahero.io](https://supahero.io/) | Image-led hero: one full-bleed photo, minimal nav, little copy | `index.astro` hero |
| [cta.gallery](https://www.cta.gallery/) | Photo band with one headline and a few buttons; arrow on the primary button | `CtaBand.astro`, `Button arrow` |
| Savaari (competitor) | The booking form lives in the hero; trip-type tabs: One way, Round trip, Local, Airport | `BookingForm.astro` |

Research gaps: Blacklane crashed in the test browser and Klook did not render, so premium chauffeur and travel-marketplace patterns were only partly covered. Revisit with Refero once its subscription is active.

## 3. Principles

1. **Photos carry the page.** Without an image the first screen should feel incomplete.
2. **Small and quiet.** Type and controls are sized for scanning on a phone, not for impact.
3. **Contact first.** Booking form in the hero, Call and WhatsApp in the header and the mobile bar.
4. **Rows, not boxes.** Tabular data (fares, routes, FAQ) is a ruled list.
5. **One accent.** Brass fills the Book action and nothing else.
6. **Honest content.** Every unknown value reads `TBD`. No invented fares or reviews.

## 4. Colour

| Token | Hex | Role |
|---|---|---|
| `paper` | `#FFFFFF` | Page canvas |
| `cream` | `#F3F4F1` | Alternate section background |
| `ink` | `#111815` | Body text, headings |
| `muted` | `#5B665F` | Secondary text (5.9:1 on white) |
| `line` | `#DFE3DE` | Hairlines, input borders |
| `forest` | `#0F2E26` | Brand ink: logo mark, footer, hero button text |
| `brass-light` | `#E3B95F` | **Book buttons only** |
| `brass` | `#C99A3F` | Book button hover |
| `whatsapp` | `#1F7A56` | WhatsApp buttons only (white text 5.3:1) |
| `danger` / `success` | `#B3261E` / `#1B6E3A` | Form states |

Rules: brass is CTA-only, never a background, border or text colour. Photos get a black gradient overlay so white text clears 4.5:1. Light mode only.

## 5. Typography

One family: **Inter** (variable, self-hosted via `@fontsource-variable/inter`), semibold headings with tight tracking, `text-balance`.

| Style | Mobile | Desktop |
|---|---|---|
| h1 | 30 px / 1.12 | 44 px |
| h2 | 22 px | 30 px |
| h3 | 16 px | 18 px |
| Body | 15 px | 15 px |
| Small / labels | 12 to 14 px | same |
| Inputs | 16 px (prevents iOS zoom) | 16 px |

## 6. Layout and shape

- Container 1200 px; side padding 20 px (32 px desktop).
- Section padding 48 px (72 px desktop).
- Radius: 8 px controls, 12 px photo tiles and the navbar. No shadows except the floating navbar and the form over the hero.
- Tap targets 44 px minimum (48 px on the mobile bar).

## 7. Components (as built)

- **Navbar:** floating white/blurred bar, `JC` monogram + name, five links, outline Call and brass Book now on desktop; on mobile a menu button opens a white numbered list with Call and WhatsApp. Works without JavaScript.
- **Hero:** full-bleed photo (`hero.jpg`, Munnar tea road) with a gradient, left-aligned h1 and one sentence, then the booking form, then four small trust facts. Height 34 rem mobile, 44 rem desktop.
- **Booking form:** trip-type tabs, pickup, drop, date (past dates blocked), time, vehicle (pre-selected from `?vehicle=`), brass "Get a quote". Opens WhatsApp with the trip details. Emailing the owner arrives in Phase 4.
- **Tour tiles:** photo tile with a bottom gradient, the tour name and the line "Customised for you", arrow badge; no price or duration is shown, since every package is quoted per request. The whole tile opens the tour's page, which has the WhatsApp enquiry. One large tile and five small on a 3-column grid.
- **Fleet table:** follows the owner's rate card. Columns: vehicle (name and short description, no photo), capacity, 8 hr / 80 km package, extra km and extra hour, short-trip hourly rate, outline Book button. Rows for Hatchback, Sedan, Ertiga, Innova, Innova Crysta, Innova Hycross and Traveller ("On request"). Stacks on mobile with labelled lines. Data lives in `src/data/fleet.json`.
- **Routes, FAQ, reviews:** ruled lists; reviews appear only when `reviews.json` has real entries.
- **CTA band:** photo (`kanyakumari.jpg`), left-aligned headline, Book / Call / WhatsApp.
- **Footer:** the one dark block (forest), small type, both cities, legal links.
- **Mobile contact bar:** white bar with outline Call and green WhatsApp, hidden from 1024 px.

## 8. Imagery

Photos are free Unsplash images in `src/assets/images/`, optimised by Astro's `<Image>`: `hero`, `munnar`, `alleppey`, `thekkady`, `varkala`, `kanyakumari`, `kerala`, plus `trivandrum` (unused yet, reserved for the Trivandrum city page).

- Thekkady uses a generic Western Ghats hillside and Kerala 5/7-day uses a second backwaters shot, so both are placeholders for better-matched photos.
- **Fleet photos are the owner's own, shown only in a gallery.** `car-white-sedan`, `car-black-sedan`, `cars-lineup` and `cars-pair` form the "Our cars" gallery on the Fleet page (listed in `fleet-and-fares.astro`). The fleet table itself has no photos, by the owner's choice. `car-hatchback` and `car-sedan` are in `src/assets/images/` but currently unused. Do not use generated or stock cars, which would misrepresent the fleet. The supplied photos are small (about 290 to 680 px wide), fine for a small gallery but too low-resolution for a full-width hero.
- Credit photographers if the owner wants attribution (Unsplash does not require it).
- Replace any photo by adding a JPEG to `src/assets/images/` and setting its name in `tours.json`.

## 9. Motion and accessibility

Motion is limited to colour transitions and a slow 3% zoom on tour tiles; `prefers-reduced-motion` disables it. Text pairs are 4.5:1 or better. Focus rings are 2 px forest (white on photo sections). Skip link, labels above inputs, `sr-only` text on image tiles. No horizontal scroll at 390 px.

## 10. Tokens

See `src/styles/global.css` (`@theme` block) for the live values.

## 11. Open design questions

1. Does JC Cabs have a logo? The `JC` monogram and name are a placeholder.
2. Photos of the real fleet, drivers and the airport pickups.
3. Better Thekkady, Kochi and Trivandrum photos, or the owner's own.
4. Which number the mobile Call button dials on non-city pages.
