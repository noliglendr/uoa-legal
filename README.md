# UOA Legal Website

Static marketing site for UOA Legal, built with [Eleventy](https://www.11ty.dev/).

## Local development

```bash
npm install
npm run dev     # dev server with live reload at http://localhost:8080
npm run build   # writes static output to _site/
```

## Adding or editing a page

- **Practice-area pages** (`/practice-*/`) are generated from a single template,
  [`src/practice-pages.njk`](src/practice-pages.njk), looped over the data in
  [`src/_data/practices.js`](src/_data/practices.js). To edit a practice area's copy, or
  add a new one, edit that data file — you don't need to touch any template.
- **Other pages** (home, about, contact, who-we-serve) are each a plain `.njk` file at the
  project root of `src/`. Front matter at the top of each file sets `title`, `description`,
  and (for inner pages) `navCurrent` for nav highlighting.
- Shared chrome (nav, footer) lives in `src/_includes/partials/`. Site-wide values (name,
  phone, email, disclaimer) live in `src/_data/site.js`.

## Before going live — placeholders to replace

- **Contact form**: `src/_data/site.js`'s `formspreeId` is a placeholder
  (`YOUR_FORM_ID`). Create a real form at [Formspree](https://formspree.io) and replace
  it, or swap the form's `action` in `src/contact.njk` for a different provider.
  - If you deploy specifically to **Netlify**, Netlify Forms is a simpler drop-in
    alternative: change the `<form>` tag to add `data-netlify="true"` and a hidden
    `<input type="hidden" name="form-name" value="contact" />`, and you can drop the
    Formspree `action` entirely — no JS or third-party account needed.
- **Phone / email**: `site.phone` and `site.email` in `src/_data/site.js` are still
  bracketed placeholders (`[phone]` / `[email]`) carried over from the original design —
  replace with the firm's real contact details.
- **Favicon**: `src/assets/favicon.svg` is a simple placeholder monogram ("U" in gold on
  black), not the firm's real mark. It's SVG-only (no PNG/apple-touch-icon fallback yet) —
  fine for all modern browsers, but add PNG fallbacks if broader legacy support or iOS
  home-screen icons matter.
- **OpenGraph image**: `base.njk` emits `og:title`/`og:description` but no `og:image` —
  no image asset exists yet. Add one (1200×630px) and an `<meta property="og:image">` tag
  in `src/_includes/layouts/base.njk` before sharing links on social/LinkedIn.

## Deployment

Static output only — deploy `_site/` (after `npm run build`) to any static host (Netlify,
Vercel, GitHub Pages, S3 + CloudFront, etc.). No server/backend required.
