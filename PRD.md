# PRD: JC Cabs Website

| | |
|---|---|
| **Product** | Marketing and booking-lead website for JC Cabs, a taxi service in Trivandrum and Kochi |
| **Version** | 1.0 (draft) |
| **Date** | 2026-11-01 |
| **Status** | Draft for review |
| **Owner** | JC Cabs (business owner) |

> Items marked **[TBD]** are business facts the brief doesn't supply (fares, addresses, licence numbers, years in business). They must be filled in by the owner before launch. Items marked **[Assumption]** are my defaults and should be confirmed.

---

## 1. Overview

JC Cabs is a taxi operator serving Trivandrum (TRV) and Kochi (COK). Most customers will find it on a phone, via Google search or Maps, and want to either call, WhatsApp, or send a booking request quickly. The website's job is to turn that search traffic into phone calls, WhatsApp chats and booking requests, and to rank locally for "taxi in Trivandrum" and "taxi in Kochi" style queries.

This is a lead-generation site, not an online booking-and-payment platform. Bookings are confirmed by a human (call or WhatsApp) after the customer submits a request.

### Confirmed business facts (from the owner)

- **Services:** airport pickup and drop, outstation trips, local trips, package trips, corporate trips, and all other taxi-related services.
- **Fleet categories:** hatchback, sedan, Ertiga, Innova, Innova Crysta and Innova Hycross, as on the owner's rate card. Specific models and counts are still **[TBD]**.
- **Custom tours:** customised tour packages are offered on request, in addition to the fixed packages.
- **Package pricing:** to be shown on the site. The owner will share the price details for reference.
- **Cities:** Trivandrum and Cochin (Kochi). Both are live today.
- **Naming:** the owner says "Cochin". Searchers use both "Cochin" and "Kochi", so the site writes **Kochi (Cochin)** in headings and uses both words in page copy and SEO titles.

## 2. Goals and non-goals

### Goals
1. Maximise enquiries: calls, WhatsApp chats and booking-form submissions.
2. Rank on the first page of Google for core local queries in both cities.
3. Build trust: verified drivers, clean cars, transparent fares, real reviews.
4. Load fast and work flawlessly on mid-range phones over 4G.
5. Make the owner able to update fares, packages and content without a developer **[Assumption]**.

### Non-goals (v1)
- Online payment / payment gateway.
- Real-time driver tracking or a customer app.
- User accounts and login for customers.
- Automated dispatch or driver app.
- Multi-language UI (see open questions: Malayalam is a likely v1.1).

## 3. Target users

| Persona | Need | Primary action |
|---|---|---|
| **Arriving tourist** (domestic/international) | Airport pickup to hotel/resort, sightseeing, Munnar/Alleppey trips | Book via WhatsApp, view tour packages |
| **Local resident** | Airport drop, hourly rental, railway station pickup | Click-to-call, quick form |
| **Outstation traveller** | One-way / round-trip to another city, fare clarity | Fare estimator, enquiry |
| **Corporate / event planner** | Fleet for staff, weddings, events | Enquiry form, call |
| **Family traveller** | Child seats, luggage space, safe night travel | FAQ, fleet page, call |

## 4. Success metrics

Targets are starting hypotheses; set final baselines after 4 weeks of data.

| Metric | Target (first 90 days) |
|---|---|
| Call + WhatsApp + form conversions / sessions | 8% or more of mobile sessions **[Assumption]** |
| Mobile Lighthouse performance | 90 or more |
| Largest Contentful Paint (4G) | under 2.5 s |
| Pages indexed in Google | 100% of public pages |
| Ranking for "taxi in Trivandrum" / "taxi in Kochi" | top 10 within 90 days **[Assumption]** |
| Google Business Profile → site clicks | tracked, trending up |
| Spam form submissions reaching the owner | under 2% of total |

## 5. Scope and release plan

- **Launch (v1):** everything in section 6 marked P0, plus P1 items where effort is low.
- **v1.1:** Malayalam version, fare estimator enhancements, blog, live Google reviews widget.
- **Later:** online advance payment, customer booking history, driver assignment notifications.

Priority key: **P0** = required for launch, **P1** = should have, **P2** = nice to have.

## 6. Functional requirements

### 6.1 Global (all pages)

| ID | Requirement | Pri |
|---|---|---|
| G-1 | Sticky bottom bar on mobile with **Call** and **WhatsApp** buttons, visible on every page | P0 |
| G-2 | Header with logo, nav (Home, Services, Fleet & Fares, Tours, About, Contact), and a prominent **Book Now** button | P0 |
| G-3 | Footer: both city numbers, WhatsApp, email, addresses, links to FAQ, Terms, Cancellation/Refund, Privacy | P0 |
| G-4 | City-aware click-to-call: Trivandrum and Kochi each have their own `tel:` number | P0 |
| G-5 | WhatsApp links use `https://wa.me/<number>?text=<prefilled message>` with context (e.g. the vehicle or package the user was viewing) | P0 |
| G-6 | Cookie/consent notice compliant with the analytics used | P1 |

### 6.2 Home

| ID | Requirement | Pri |
|---|---|---|
| H-1 | Hero: headline "Trusted Taxi in Trivandrum & Kochi" with **Call**, **WhatsApp** and **Book Now** buttons | P0 |
| H-2 | Quick booking form: pickup, drop, date/time, vehicle type, phone (see 6.10) | P0 |
| H-3 | Service highlights: Airport, Local, Outstation, Tours, each linking to its section | P0 |
| H-4 | Fleet preview: 3 to 4 cars with seat counts, linking to Fleet & Fares | P0 |
| H-5 | Why choose us: 24/7 service, verified drivers, clean cars, fixed fares | P0 |
| H-6 | Popular routes (e.g. TRV Airport → Kovalam, Kochi → Munnar), each with starting fare **[TBD]** and an enquiry link | P0 |
| H-7 | Reviews section (manual testimonials at launch; Google widget later) | P0 |
| H-8 | Final call-to-action strip: Call / WhatsApp / Book | P0 |

### 6.3 Services

Single page with anchored sections at launch; each can be split into its own URL for SEO (P1).

| ID | Requirement | Pri |
|---|---|---|
| S-1 | Airport transfers: TRV and COK, flight-tracking pickup, meet-and-greet details **[TBD]** | P0 |
| S-2 | Local hourly rental: 4 hr / 40 km and 8 hr / 80 km packages, with extra-hour and extra-km rates **[TBD]** | P0 |
| S-3 | Outstation: one-way and round-trip, how fares are calculated | P0 |
| S-4 | Railway station pickup (Trivandrum Central, Ernakulam Junction/Town) | P0 |
| S-5 | Corporate, wedding and event hire with an enquiry CTA | P0 |
| S-7 | "Other requests" block: any taxi-related need not listed (e.g. special occasions, long-term hire) with a Call / WhatsApp CTA | P0 |
| S-6 | Each service section has its own Call / WhatsApp / Enquire CTA | P0 |

### 6.4 Fleet & Fares

| ID | Requirement | Pri |
|---|---|---|
| F-1 | Card per vehicle: photo, model, seats, luggage capacity, AC, per-km rate, minimum charge | P0 |
| F-2 | Fare notes block: driver bata, toll/parking, night charges, waiting charges | P0 |
| F-3 | "Book this car" button on each card, pre-selecting the vehicle in the form / WhatsApp message | P0 |
| F-4 | Fare estimator: choose pickup, drop, vehicle → indicative fare range with disclaimer. Based on a maintained route/distance table, not live maps pricing | P1 |
| F-5 | Fleet data stored in an editable data source (CMS or JSON), not hard-coded in markup | P0 |
| F-6 | Six vehicle categories at launch, from the owner's rate card: **Hatchback, Sedan, Ertiga, Innova, Innova Crysta, Innova Hycross**. They are listed in one rate-card table (8 hr / 80 km package, extra km and hour, short-trip hourly rate); the booking form's vehicle field offers the same options | P0 |

### 6.5 Tour Packages

| ID | Requirement | Pri |
|---|---|---|
| T-1 | Cards for Munnar, Alleppey, Thekkady, Varkala, Kanyakumari, and Kerala 5D/7D | P0 |
| T-2 | Each card: duration, itinerary summary, starting price **[TBD]**, inclusions/exclusions, **Enquire on WhatsApp** (prefilled with package name) | P0 |
| T-3 | Optional detail page per package for SEO (day-by-day itinerary) | P1 |
| T-4 | Package prices shown on each card and detail page, taken from the owner's price list **[TBD: owner to supply]**. If a price varies by vehicle or group size, show a "from" price with a short pricing note | P0 |
| T-5 | **Custom tour** call-out on the Tours page and each package: "Want something different? We plan tours to your request." Opens WhatsApp with a prefilled "custom tour" message and links to an enquiry form (destinations, days, group size, vehicle) | P0 |

### 6.6 City pages (local SEO)

Two pages: `/taxi-in-trivandrum` and `/taxi-in-kochi`.

| ID | Requirement | Pri |
|---|---|---|
| C-1 | Unique, non-duplicated copy per city (not a find-and-replace of the other) | P0 |
| C-2 | Office address **[TBD]**, local number, hours, embedded Google Map | P0 |
| C-3 | Local routes with fares, airport info (TRV / COK distance, pickup point, timing) | P0 |
| C-4 | `LocalBusiness` / `TaxiService` schema with the city's address and phone | P0 |

### 6.7 About Us

| ID | Requirement | Pri |
|---|---|---|
| A-1 | Story, years in business **[TBD]**, owner/team photo **[TBD]** | P0 |
| A-2 | Licences / permits and registration details **[TBD]**, fleet size **[TBD]** | P0 |

### 6.8 Contact

| ID | Requirement | Pri |
|---|---|---|
| CT-1 | Both city numbers, WhatsApp, email, addresses, office hours | P0 |
| CT-2 | Google Maps embed for each office | P0 |
| CT-3 | Enquiry form (name, phone, email, message) with spam protection | P0 |

### 6.9 FAQ and Legal

| ID | Requirement | Pri |
|---|---|---|
| FQ-1 | FAQ covering booking, payment, cancellation, luggage, child seats, pets, night travel; accordion UI | P0 |
| FQ-2 | `FAQPage` schema | P1 |
| L-1 | Terms & Conditions, Cancellation/Refund Policy, Privacy Policy pages, linked in the footer. Content must be written or reviewed by the owner or a legal advisor | P0 |

### 6.10 Booking form (core feature)

Fields: pickup, drop, date, time, vehicle type, phone number, (optional) name and notes.

| ID | Requirement | Pri |
|---|---|---|
| B-1 | Client-side validation: all required fields present, phone is a valid Indian mobile number, date/time not in the past | P0 |
| B-2 | On submit, the request is (a) emailed to the business via a server-side endpoint and (b) opens WhatsApp with a prefilled summary message. Email must succeed independently of whether the user completes the WhatsApp step | P0 |
| B-3 | Spam protection: honeypot field plus rate limiting; CAPTCHA (e.g. Cloudflare Turnstile) if spam appears | P0 |
| B-4 | Success state tells the user what happens next and the expected response time **[TBD]** | P0 |
| B-5 | Failure state shows a clear error with direct Call / WhatsApp fallback; no lost leads | P0 |
| B-6 | Form submissions logged (stored or at least emailed) so none are lost if email delivery fails **[Assumption]** | P1 |
| B-7 | Track submit as a conversion event | P0 |

## 7. SEO requirements

| ID | Requirement | Pri |
|---|---|---|
| SEO-1 | Unique `<title>` and meta description per page, with city and service keywords | P0 |
| SEO-2 | One `<h1>` per page, logical heading hierarchy | P0 |
| SEO-3 | JSON-LD: `TaxiService`/`LocalBusiness` (per city, with NAP, hours, geo), `FAQPage`, `AggregateRating` only if backed by real, visible reviews | P0 |
| SEO-4 | `sitemap.xml`, `robots.txt`, canonical URLs | P0 |
| SEO-5 | Open Graph / Twitter tags for sharing | P1 |
| SEO-6 | NAP (name, address, phone) identical across site, Google Business Profile and directories | P0 |
| SEO-7 | Clean, readable URLs (`/services/airport-transfer`, `/tours/munnar`) | P0 |
| SEO-8 | Image alt text, descriptive file names, modern formats (WebP/AVIF) | P0 |
| SEO-9 | Search Console and Google Business Profile set up and linked to the site | P0 |

## 8. Analytics and tracking

| ID | Requirement | Pri |
|---|---|---|
| AN-1 | Google Analytics 4 installed | P0 |
| AN-2 | Custom events: `click_call` (with city), `click_whatsapp` (with page/source), `booking_submit`, `enquiry_submit`, `tour_enquire` | P0 |
| AN-3 | Mark the events above as GA4 conversions | P0 |
| AN-4 | Track which page/button generated each lead (source attribution) | P1 |
| AN-5 | Simple monthly report of calls/WhatsApp/forms per city | P1 |

## 9. Non-functional requirements

- **Performance:** mobile-first; LCP under 2.5 s, CLS under 0.1, INP under 200 ms on throttled 4G. Optimised and lazy-loaded images, minimal JavaScript, no heavy sliders or autoplay video.
- **Responsive:** designed for 360 px width first; works through desktop.
- **Accessibility:** WCAG 2.1 AA: contrast, keyboard navigation, focus states, labels on form fields, tap targets of 44 px or more.
- **Security:** HTTPS everywhere (SSL) with HSTS; form endpoint validated and sanitised server-side; no secrets in client code; security headers (CSP, X-Content-Type-Options, Referrer-Policy).
- **Privacy:** collect only what's needed to fulfil a request; privacy policy discloses analytics, form data use and retention. Review applicability of India's DPDP Act, 2023 **[Assumption]**.
- **Browser support:** current and previous two versions of Chrome, Safari, Edge, Firefox, Samsung Internet; Android 8+ and iOS 14+.
- **Reliability:** target 99.9% uptime via static/CDN hosting.
- **Maintainability:** content (fares, packages, FAQs, reviews) editable without code changes.

## 10. Content requirements

The owner provides, before build completes:

- Logo and brand colours, if they exist (otherwise design a simple identity)
- Both city phone numbers, WhatsApp number, email, office addresses and hours
- Photos of real vehicles (not stock) and, ideally, owner/team and drivers
- Fare card: per-km rates, minimum charges, bata, night and waiting charges per vehicle
- Route fares, tour package itineraries and prices
- Licences, years in business, fleet size
- 8 to 10 genuine customer testimonials (with permission) or access to the Google Business Profile
- Terms, cancellation/refund and privacy policy text (drafts can be provided as a starting point)

Copy is written in simple English; Malayalam to follow.

## 11. Suggested technical approach

Decided: Astro + Tailwind CSS + plain JavaScript on Vercel. Step-by-step phases are in [BUILD_PLAN.md](BUILD_PLAN.md); visual design is in [DESIGN.md](DESIGN.md).

- **Stack:** Astro (static-first, near-zero JavaScript by default) for speed and SEO, with Tailwind CSS.
- **Content:** fleet, fares, routes, tours and FAQs as structured data (JSON/Markdown or a lightweight headless CMS) so the owner can edit without touching layout.
- **Forms:** a serverless function (e.g. on Vercel) that validates input, applies spam checks, and sends email through a transactional provider (Resend, Mailgun, SES). The WhatsApp hand-off is a client-side `wa.me` redirect.
- **Hosting:** Vercel or Cloudflare Pages behind a CDN, with free SSL.
- **Maps:** Google Maps iframe embeds, lazy-loaded, to protect page speed.
- **Reviews:** hand-written testimonials at launch; Google reviews widget in v1.1.

## 12. Site map

```
/                              Home
/services                      Services (anchors: airport, local, outstation, railway, corporate)
/fleet-and-fares               Fleet & Fares (+ fare estimator)
/tours                         Tour packages
  /tours/munnar, /alleppey, /thekkady, /varkala, /kanyakumari, /kerala-5d-7d   (P1)
/taxi-in-trivandrum            City page
/taxi-in-kochi                 City page
/about                         About Us
/contact                       Contact
/faq                           FAQ
/terms  /cancellation-refund-policy  /privacy-policy
```

## 13. Milestones (indicative)

| Phase | Deliverable | Estimate |
|---|---|---|
| 0. Discovery | Content, fares and assets collected; decisions on open questions | Week 1 |
| 1. Design | Mobile-first wireframes and visual design for Home, Fleet, Tours, City pages | Week 1 to 2 |
| 2. Build | Templates, content model, booking form, tracking | Week 2 to 4 |
| 3. Content and SEO | Copy, schema, sitemap, city pages, GBP linkage | Week 3 to 4 |
| 4. QA | Device testing, Lighthouse, accessibility, form delivery, analytics events | Week 4 to 5 |
| 5. Launch | DNS, SSL, Search Console submission, monitoring | Week 5 |

Timeline assumes content arrives on time; content delay is the most common cause of slippage.

## 14. Acceptance criteria (launch gate)

- All P0 requirements implemented and verified on real Android and iOS phones.
- Booking form: a test submission reaches the business email and opens WhatsApp with the correct prefilled text; a deliberately broken email provider still shows the fallback and does not silently drop the lead.
- Every call and WhatsApp button fires its GA4 event with the correct city/source.
- Mobile Lighthouse: Performance 90 or more, Accessibility 95 or more, SEO 95 or more, Best Practices 90 or more on Home, Fleet and one City page.
- Schema validates in Google's Rich Results Test; sitemap submitted in Search Console.
- No placeholder **[TBD]** content remains live.
- Legal pages published and linked in footer.

## 15. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Fares change often, so published prices go stale | Customer disputes, lost trust | Fares in editable data; "indicative" labelling; review quarterly |
| Delayed or low-quality content (photos, fares) | Launch slips, weak conversion | Collect in Phase 0; use real photos; placeholder-free launch gate |
| Form spam / fake bookings | Wasted owner time | Honeypot, rate limit, Turnstile fallback |
| Leads lost if email or WhatsApp fails | Direct revenue loss | Dual channel, stored log, visible call fallback |
| Duplicate city-page content | SEO penalty | Unique copy per city, local detail |
| Fake or unverifiable reviews | Legal/trust exposure | Only real reviews; no `AggregateRating` without genuine data |
| Strong incumbents (Ola/Uber/Savaari/aggregators) | Hard to rank on generic terms | Focus on local long-tail ("TRV airport to Kovalam taxi"), Google Business Profile, reviews |

## 16. Open questions

1. **Brand name:** is "JC Cabs" the final public name? Is there a domain already, and which one?
2. **Owner and edit rights:** who will update fares and content, and how technical are they? This decides CMS versus code-edited data.
3. **Numbers:** one WhatsApp number or one per city? Is the Kochi/Trivandrum split by staff, or does one team handle both?
4. **Fares:** published per-km rates, or "from" prices and quote on request? Fixed route fares?
5. **Languages:** English only for launch, or Malayalam (and possibly Hindi/Tamil for tourists) from day one?
6. **Online payment:** confirm out of scope for v1, or is advance payment required for tours?
7. **Vehicles:** which models and how many in each category (hatchback, sedan, Ertiga, Innova, Innova Crysta, Innova Hycross)? Are child seats available, and at what charge?
12. **Package pricing:** when will the price list arrive? Are prices per vehicle, per person or per group, and do they include driver bata, tolls and stay?
13. **Custom tours:** how quickly can a custom quote be given, and who handles it in each city?
14. **Naming:** confirm "Kochi (Cochin)" is acceptable as the on-site spelling.
8. **Reviews:** is there an existing Google Business Profile with reviews in both cities?
9. **Legal:** who will supply or approve cancellation/refund terms?
10. **Budget and deadline:** needed to decide between a lean launch and the fuller scope.
11. **Operating licences:** any tourism or transport permit details that must be displayed?

---

*This document is a living draft. Update the **[TBD]** items and open questions as the owner supplies answers.*
