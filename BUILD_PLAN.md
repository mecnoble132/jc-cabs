# Build Plan: JC Cabs Website (Astro)

Companion to [PRD.md](PRD.md) and [DESIGN.md](DESIGN.md). The PRD says **what** to build; DESIGN.md says how it looks; this says **how**, in order. Written for someone new to Astro.

## Status (updated 2026-11-01)

| Phase | State |
|---|---|
| 0. Setup | Done locally: Astro 7, Tailwind 4, sitemap. **Not done:** git repo, GitHub, Vercel |
| 1. Foundation | Done: layout, header, footer, sticky call bar, contact helpers, site.json |
| 2. Content and cards | Done: fleet, routes, tours, FAQ, reviews data; five cards; Fleet & Fares, Tours and FAQ pages; home sections |
| Design v3 | Done: photo-led, light, compact redesign with real photos, form-in-hero, tour tiles and fleet table (see [DESIGN.md](DESIGN.md)). Replaces v2 |
| Quick booking form | Done in a basic form: opens WhatsApp with trip details. **Phase 4 still to do:** server email, spam protection, validation of phone |
| 3. Pages | Done (18 pages, no dead links): Services, Trivandrum and Kochi city pages, About, Contact, 6 tour pages, Terms, Cancellation/refund, Privacy. **Still open:** Google Maps embeds (need addresses), LocalBusiness schema (Phase 5), real legal text, itineraries and inclusions per tour |
| 4 to 9 | Not started |

Open blockers: package price list, fares, vehicle models, real phone numbers and addresses, photos, logo. All unknown values show as `TBD` in the site.

Stack: **Astro + Tailwind CSS + a little plain JavaScript**, deployed on **Vercel** (or Cloudflare Pages). Check the current Astro docs (docs.astro.build) for exact install commands, since versions move.

---

## 1. Astro in 10 minutes

| Concept | What it means | Where it appears here |
|---|---|---|
| **`.astro` file** | HTML with a code block on top (between `---` fences) that runs at build time and never reaches the browser | Every page and component |
| **Pages** | Any file in `src/pages/` becomes a URL: `about.astro` → `/about` | Home, Services, Fleet, Tours... |
| **Components** | Reusable `.astro` files, imported like tags: `<FleetCard car={car} />` | Header, footer, cards, CTA strip |
| **Layouts** | A component that wraps pages with `<html>`, head tags, header and footer | `BaseLayout.astro` |
| **Content as data** | JSON or Markdown files, loaded and looped over to generate cards and pages | Fleet, tours, routes, FAQ, reviews |
| **Dynamic routes** | `[slug].astro` builds one page per data entry | `/tours/munnar`, `/tours/alleppey`... |
| **Zero JS by default** | Output is plain HTML and CSS. JS is only shipped if you add a `<script>` | Booking form, FAQ accordion, estimator |
| **Endpoints** | A file in `src/pages/api/` that runs on the server | The booking-form email handler |

The mental model: **write components and data, Astro builds fast static HTML.** The browser gets what you would have hand-written, with no framework runtime.

---

## 2. Decisions to lock first

| Decision | Choice | Why |
|---|---|---|
| Framework | Astro | Fast, SEO-friendly, content-focused |
| Styling | Tailwind CSS | Fast mobile-first styling, tiny CSS output |
| Interactivity | Plain JS in `<script>` tags | No React needed |
| Content | JSON/Markdown files in `src/data/` | Owner edits data, not layout |
| Form email | Serverless endpoint + Resend (or similar) | Free tier is enough |
| Spam | Honeypot + rate limit, Cloudflare Turnstile if needed | Matches PRD B-3 |
| Hosting | Vercel | Free SSL, CDN, serverless functions |
| Analytics | GA4 | Matches PRD section 8 |

Not decided yet (blocks later phases, see PRD open questions): domain name, final brand name, the two phone numbers and WhatsApp number, whether the owner will edit via files or a CMS.

---

## 3. Prerequisites

1. Install **Node.js LTS** (nodejs.org). Check with `node -v`.
2. Install **Git**; create a GitHub repo for the project (Vercel deploys from it).
3. Editor: VS Code with the **Astro** extension.
4. Accounts (all free tiers): GitHub, Vercel, Resend, Google Analytics, Google Search Console, Google Business Profile.

---

## 4. Target project structure

```
jc-cabs/
├─ public/                    static files served as-is
│  ├─ favicon.svg, robots.txt
│  └─ images/                 optimised car/tour photos
├─ src/
│  ├─ data/                   <- owner-editable content
│  │  ├─ site.json            names, phones, WhatsApp, email, hours, addresses
│  │  ├─ fleet.json           cars: model, seats, luggage, rate, min charge
│  │  ├─ routes.json          popular routes + fares
│  │  ├─ tours.json           packages
│  │  ├─ faq.json
│  │  └─ reviews.json
│  ├─ layouts/BaseLayout.astro
│  ├─ components/
│  │  ├─ Header.astro  Footer.astro  StickyContactBar.astro
│  │  ├─ Hero.astro  BookingForm.astro  CtaStrip.astro
│  │  ├─ FleetCard.astro  TourCard.astro  RouteCard.astro
│  │  ├─ ReviewCard.astro  FaqItem.astro  SchemaLocalBusiness.astro
│  ├─ lib/
│  │  ├─ whatsapp.ts          builds wa.me links with prefilled text
│  │  └─ track.ts             GA4 event helper
│  ├─ pages/
│  │  ├─ index.astro  services.astro  fleet-and-fares.astro
│  │  ├─ tours/index.astro  tours/[slug].astro
│  │  ├─ taxi-in-trivandrum.astro  taxi-in-kochi.astro
│  │  ├─ about.astro  contact.astro  faq.astro
│  │  ├─ terms.astro  cancellation-refund-policy.astro  privacy-policy.astro
│  │  └─ api/booking.ts       form handler (server)
│  └─ styles/global.css
├─ astro.config.mjs
├─ .env  (never committed)    RESEND_API_KEY, BOOKING_TO_EMAIL, TURNSTILE_SECRET
└─ package.json
```

The single most valuable file is `src/data/site.json`. Every phone number, address and WhatsApp link reads from it, so there is **one place** to change a number. That also keeps name, address and phone identical across the site, which local SEO needs.

---

## 5. Phases

Each phase ends with something you can open in the browser and check. Do them in order.

### Phase 0: Project setup (half a day)
1. Scaffold: `npm create astro@latest` → choose the "empty" template, TypeScript "strict" or "relaxed", install dependencies, init git.
2. Add Tailwind using Astro's official integration (`npx astro add tailwind`, or follow the current docs).
3. Add the sitemap integration (`npx astro add sitemap`) and set `site: 'https://yourdomain.com'` in `astro.config.mjs`.
4. Run `npm run dev` and confirm the page loads at `localhost:4321`.
5. Push to GitHub; connect the repo to Vercel so every push auto-deploys a preview URL.

**Done when:** a blank page is live on a Vercel preview URL.

### Phase 1: Foundation (1 day)
1. Define design tokens in Tailwind (brand colours, font, spacing). Use a system font stack or one self-hosted web font to keep it fast.
2. Create `site.json` with placeholder values (clearly fake, e.g. `0000000000`) until real ones arrive.
3. Build `BaseLayout.astro`: `<head>` with title/description props, canonical URL, Open Graph, viewport, favicon.
4. Build `Header`, `Footer`, and `StickyContactBar` (fixed to the bottom on mobile only, Call + WhatsApp).
5. Write `lib/whatsapp.ts` (builds `https://wa.me/<number>?text=<encoded message>`).

**Done when:** an empty page shows header, footer and the sticky bar correctly at 360 px width, and the buttons open the dialler and WhatsApp.

### Phase 2: Content data and cards (1 day)
1. Fill `fleet.json`, `routes.json`, `tours.json`, `faq.json`, `reviews.json` with the real data, or labelled sample data if the owner hasn't sent it. Mark unknown values as TBD in the file so they can't slip through unseen.
2. Build `FleetCard`, `TourCard`, `RouteCard`, `ReviewCard`, `FaqItem`. Each takes data as props and loops: `{fleet.map(car => <FleetCard car={car} />)}`.
3. For the FAQ accordion, use native `<details>`/`<summary>`. It needs no JavaScript.

**Done when:** adding a car to `fleet.json` makes a new card appear with no other edit.

### Phase 3: Pages (2 to 3 days)
Build in this order, since each reuses the previous:
1. **Home**: hero, quick booking form (placeholder submit for now), services, fleet preview, why-us, popular routes, reviews, final CTA strip.
2. **Fleet & Fares** with the fare-notes block.
3. **Services**: anchored sections, each with its own CTA.
4. **Tours**: index page, then `tours/[slug].astro` using `getStaticPaths()` to generate one page per tour from `tours.json`.
5. **City pages**: Trivandrum and Kochi, with **unique** copy, map embed, local routes, airport info.
6. **About, Contact, FAQ, and the three legal pages.**

For Google Maps embeds, use an `<iframe loading="lazy">` to protect load speed.

**Done when:** every page in the PRD site map exists and links correctly, with real or clearly marked placeholder copy.

### Phase 4: Booking form and enquiry form (1 to 2 days)
This is the revenue feature. Take extra care.

1. `BookingForm.astro` with fields: pickup, drop, date, time, vehicle, phone, optional name and notes. Include a hidden **honeypot** field.
2. Client script validates (required fields, Indian mobile format, date not in the past).
3. On submit, the browser `fetch`es `POST /api/booking`.
4. `src/pages/api/booking.ts`: validate again on the server, drop the request if the honeypot is filled, rate-limit by IP, send the email through Resend, return JSON.
5. On success: show a confirmation and open WhatsApp with a prefilled summary. On failure: show an error plus visible **Call** and **WhatsApp** buttons, so no lead is lost.
6. Fire `booking_submit` to GA4 (Phase 6).
7. Reuse the same endpoint pattern for the Contact enquiry form.

Astro note: pages are static by default. Add the Vercel adapter (`npx astro add vercel`) and put `export const prerender = false;` at the top of `api/booking.ts` so only that file runs on the server. Everything else stays static HTML.

**Done when:** a real test submission lands in the owner's inbox; submitting with the email provider switched off still shows the fallback; a filled honeypot sends nothing.

### Phase 5: SEO (1 day)
1. Per-page unique `title` and `description` passed into the layout.
2. `SchemaLocalBusiness.astro` outputs JSON-LD (`TaxiService`/`LocalBusiness`) built from `site.json`, one per city page, with address, phone, hours and geo.
3. Add `FAQPage` JSON-LD on the FAQ page, generated from `faq.json`.
4. Confirm the sitemap generates at `/sitemap-index.xml`; add `robots.txt` pointing to it.
5. Check one `<h1>` per page, descriptive alt text on images, canonical tags.
6. Set up Google Search Console and submit the sitemap; link the Google Business Profile to the site.

**Done when:** pages validate in Google's Rich Results Test.

### Phase 6: Analytics and tracking (half a day)
1. Add the GA4 snippet in `BaseLayout` (load async, ideally after consent).
2. `lib/track.ts` wraps `gtag('event', ...)`.
3. Attach tracking to every call link (`click_call`, with the city) and WhatsApp link (`click_whatsapp`, with the page) using `data-track` attributes and one small delegated click listener, instead of wiring every button by hand.
4. Fire `booking_submit`, `enquiry_submit`, `tour_enquire`.
5. Mark these as conversions in GA4. Verify using GA4 DebugView.

**Done when:** each button click and form submit appears in DebugView with the right parameters.

### Phase 7: Performance and accessibility (1 day)
1. Images: use Astro's built-in `<Image />` component to resize and convert to WebP/AVIF, with explicit width and height to prevent layout shift.
2. Lazy-load below-the-fold images and map iframes; preload the hero image.
3. Fonts: system fonts, or one self-hosted font with `font-display: swap`.
4. Run Lighthouse (mobile preset, throttled) on Home, Fleet and a City page. Targets are in PRD section 14.
5. Accessibility pass: contrast, keyboard navigation, form labels, 44 px tap targets, focus states.

**Done when:** Lighthouse meets the PRD targets on the three pages.

### Phase 8: QA (1 day)
Run through the PRD section 14 acceptance checklist on a **real Android phone and an iPhone**, not only browser emulation:
- All calls and WhatsApp links work from every page.
- Booking form: success, failure and spam paths.
- All internal links; no remaining placeholder or TBD text.
- Legal pages linked in the footer.

### Phase 9: Launch (half a day)
1. Buy or point the domain; add it in Vercel; DNS and SSL go live automatically.
2. Set production environment variables in Vercel (not in the repo).
3. Submit the sitemap in Search Console; confirm the GA4 live feed.
4. Make sure the site name, address and phone on the site **exactly match** the Google Business Profile for each city.
5. Keep a copy of the launch version (a git tag).

### Phase 10: After launch (ongoing)
- Week 1: watch form delivery and GA4 conversions daily.
- Month 1: review which search queries bring traffic; adjust page titles.
- Quarterly: review fares, tour prices, and reviews.
- Backlog (PRD v1.1): Malayalam version, fare estimator, live Google reviews, tour detail pages.

---

## 6. Key code patterns (for reference)

**Reading data and looping (a page in `src/pages/fleet-and-fares.astro`):**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import FleetCard from '../components/FleetCard.astro';
import fleet from '../data/fleet.json';
---
<BaseLayout title="Fleet & Fares | JC Cabs" description="...">
  <h1>Fleet &amp; Fares</h1>
  {fleet.map((car) => <FleetCard car={car} />)}
</BaseLayout>
```

**One page per tour (`src/pages/tours/[slug].astro`):**
```astro
---
import tours from '../../data/tours.json';
export function getStaticPaths() {
  return tours.map((tour) => ({ params: { slug: tour.slug }, props: { tour } }));
}
const { tour } = Astro.props;
---
<h1>{tour.name}</h1>
```

**Tracked link (one listener handles all):**
```html
<a href="tel:+910000000000" data-track="click_call" data-city="trivandrum">Call</a>
```
```js
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (el) gtag('event', el.dataset.track, { city: el.dataset.city });
});
```

**Booking endpoint skeleton (`src/pages/api/booking.ts`):**
```ts
export const prerender = false;
export async function POST({ request }) {
  const data = await request.json();
  if (data.website) return new Response(null, { status: 204 }); // honeypot
  // validate fields, check rate limit, then send email via provider
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
```

---

## 7. Effort summary

| Phase | Effort |
|---|---|
| 0. Setup | 0.5 day |
| 1. Foundation | 1 day |
| 2. Content and cards | 1 day |
| 3. Pages | 2 to 3 days |
| 4. Booking form | 1 to 2 days |
| 5. SEO | 1 day |
| 6. Analytics | 0.5 day |
| 7. Performance and accessibility | 1 day |
| 8. QA | 1 day |
| 9. Launch | 0.5 day |
| **Total** | **about 9 to 11 working days** |

Estimates assume one developer and that content (fares, photos, addresses) arrives by the end of Phase 2. Late content is the main risk to this schedule.

## 8. Common beginner pitfalls

- **Code between the `---` fences runs at build time**, so it cannot use `window` or `document`. Browser code goes in a `<script>` tag.
- **A `<script>` in a component is bundled once** even if the component is used many times. That is intended.
- **Environment variables:** only ones prefixed `PUBLIC_` reach the browser. Keep the email API key un-prefixed so it stays on the server.
- **Images in `public/` are not optimised.** Put photos in `src/` and use `<Image />` to get compression.
- **Remember `site` in `astro.config.mjs`**, or the sitemap and canonical URLs come out wrong.
- **Don't add React "just in case".** Each framework island adds JavaScript and undoes the main benefit.

## 9. Immediate next step

Start Phase 0. If you want, I can run the scaffold now (`npm create astro`, Tailwind, sitemap), build the layout, and get Phases 0 and 1 working so you can see the site running locally.
