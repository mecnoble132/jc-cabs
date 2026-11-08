# JC Cabs website

The website for **JC Cabs**, a taxi service in Trivandrum and Kochi, Kerala: airport transfers, local and outstation trips, and Kerala tour packages.

- **Live site:** https://www.jccabstvm.com (also accessible via https://jc-cabs.vercel.app)
- **Built with:** [Astro](https://docs.astro.build) and [Tailwind CSS](https://tailwindcss.com), with a little plain JavaScript
- **Hosted on:** [Vercel](https://vercel.com). Every push to `main` deploys automatically.

The site is static. Every page is plain HTML, and no database or server is involved. Bookings and enquiries are sent as a pre-filled WhatsApp message to the business number.

## Running it on your computer

You need [Node.js](https://nodejs.org) 22.23.4 or newer.

```sh
npm install        # once, to download the dependencies
npm run dev        # start a local copy at http://localhost:4321 that reloads as you edit
npm run build      # build the finished site into ./dist
npm run preview    # serve the built site locally to check it before pushing
```

## Changing content

Most changes need no code. Edit the JSON files in `src/data/` and the pages update everywhere.

| File | What it holds |
|---|---|
| `src/data/site.json` | Business name, tagline, phone, WhatsApp, email, office address, map pin, opening hours, menu and footer links |
| `src/data/fleet.json` | Vehicles: name, models, seats, luggage, package fare, extra km and hour rates |
| `src/data/tours.json` | Tour packages shown on the Tours page and their detail pages |
| `src/data/routes.json` | Popular routes on the home and city pages |
| `src/data/services.json` | Services on the Services page |
| `src/data/cities.json` | Text for the Trivandrum and Kochi pages |
| `src/data/faq.json` | Questions and answers on the FAQ page |
| `src/data/reviews.json` | Customer reviews on the home page. Only use real reviews. |

The phone number, address and hours in `site.json` also feed the business details Google reads (see below). Change them there and only there.

Photos live in `src/assets/images/`. Astro resizes and compresses them at build time, so you can add large originals.

## Project layout

```text
public/                 files served as they are: favicon, og-image.jpg (the preview image for shared links)
src/
  assets/images/        photos, optimised automatically
  components/           reusable pieces: header, footer, booking form, cards, sticky call bar
  data/                 the editable content (see above)
  layouts/BaseLayout    page wrapper: <head>, SEO tags, Google business data, header, footer
  lib/                  helpers for WhatsApp/call links, prices and images
  pages/                one file per page. The file name is the URL.
    tours/[slug].astro  builds one page per entry in tours.json
    404.astro           the "page not found" page
    robots.txt.ts       builds /robots.txt
    sitemap.xml.ts      builds /sitemap.xml
  styles/global.css     colours, fonts and base styles
```

## Search engines (SEO)

- **Sitemap:** `/sitemap.xml` points to `/sitemap-0.xml`, which lists every page. It's generated on each build by `@astrojs/sitemap`, so new pages are added automatically. Submit `/sitemap.xml` in Google Search Console.
- **robots.txt:** `/robots.txt` lets all search engines crawl the site and points them to the sitemap.
- **Business details for Google:** every page carries [structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) (a `LocalBusiness` / taxi service record) with the name, phone, email, address, map location, 24/7 hours and the areas served. It's built in `src/layouts/BaseLayout.astro` from `site.json`. Check it with Google's [Rich Results Test](https://search.google.com/test/rich-results).
- **Page titles, descriptions, canonical links and share previews** are set per page through `BaseLayout`.
- **404 page:** unknown URLs show a helpful page with call and WhatsApp buttons. It's marked `noindex` and left out of the sitemap.

## Connecting a custom domain

1. Add the domain in Vercel: **Project → Settings → Domains**, then follow its DNS instructions.
2. In `astro.config.mjs`, change `site: 'https://jc-cabs.vercel.app'` to the new address (for example `https://www.jccabs.in`).
3. Push to `main`. The sitemap, robots.txt, canonical links, share previews and Google business data all switch to the new domain automatically.
4. In Google Search Console, add the new domain and submit `https://<your-domain>/sitemap.xml`.

## Deploying

Push to `main`, and Vercel builds and publishes the site in about a minute. Pushes to other branches get their own preview link in Vercel, which is handy for checking a change before it goes live.

## More documentation

- `PRD.md`: what the site needs to do (requirements)
- `DESIGN.md`: how it looks (colours, type, layout rules)
- `BUILD_PLAN.md`: build phases and status
- `AGENTS.md`: notes for AI coding assistants working in this repo
