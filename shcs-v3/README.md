# SHCS Website v3 — Warm Heritage Editorial

A parallel redesign of the Sanatan Hindu Cultural Society (Sutton Mandir) website, hosted alongside the current root site. Static HTML/CSS/JS, no build step.

## Pages

`index.html`, `about.html`, `worship.html` (Worship & Events), `news.html`, `appeal.html` (The Mandir Appeal — the site's single conversion goal), `donate.html` (Donate & Gift Aid), `chants.html`, `privacy.html`.

## Design system

- **Style**: warm heritage editorial — ivory ground, deep saffron accent, maroon statement bands, hairline borders, serif display type.
- **Fonts (Google)**: Fraunces (display), Instrument Sans (text).
- **All tokens** live as CSS custom properties in `css/styles.css` `:root`; never hardcode colours.
- **Canonical chrome**: `chrome.html` holds the byte-for-byte header/footer used on every page; the only per-page change is `aria-current="page"` placement. Replicate any chrome edit across all 8 pages.
- **Components**: `.hero`, `.section`/`.section--cream`, `.section-head`/`.kicker`, `.card`, `.schedule`, `.news-list`, `.statement` + `.progress`, `.detail-rows`, `.accordion`, `.cta-band`, `.btn` variants.
- **Motion**: scroll reveals gated on `html.js` + `prefers-reduced-motion`; content is never hidden without JS.

## Content

All copy originates from `copy-deck.md`, which was written using only facts present in this repository (see its "Fact sources" table). Do not add testimonials, statistics, names, or figures not sourced from the organisation. Key facts that must stay exact: Charity No. 1197115; bank sort code 60-06-14, account 38162466; £200,000 fit-out target; £500+/£5,000+ giving tiers.

## Deploy

Serve this folder with any static host. The chants page links to `../pdfs/Aarti_Bhajans.pdf` in the parent site — copy that file alongside if deploying v3 standalone.
