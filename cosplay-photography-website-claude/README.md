# Gingerbread Photography — Portfolio Website

A plain HTML/CSS/JS portfolio site — no build step, no frameworks. Works on
GitHub Pages as-is.

## File map (what to edit, where)

| File | What it is | Edit it when… |
|---|---|---|
| `index.html` | Homepage: hero slideshow, intro, featured grid, services | You want different hero/featured photos or new intro text |
| `portfolio.html` | Gallery (content comes from `js/portfolio-data.js`) | Rarely — the gallery fills itself from the data file |
| `about.html` | Your story + approach | Replacing the `EDIT ME` text and portrait placeholder |
| `contact.html` | Booking form + contact info | Wiring up the form and adding your real email/socials |
| `css/styles.css` | All styling. **Design tokens (colors, fonts, spacing) are at the top** | You want to tweak colors or fonts site-wide |
| `js/portfolio-data.js` | **The one file that controls your gallery** | Every time you add/remove/tag photos |
| `js/gallery.js` | Lightbox + lazy-load logic | Never (unless changing behavior) |
| `js/main.js` | Nav menu, hero slideshow, scroll animations | Never (unless changing behavior) |

## How to add a photo to the portfolio

1. Drop the image into `Assets/images/portfolio/`
2. Open `js/portfolio-data.js` and add one block:

```js
{
  src: "Assets/images/portfolio/my-new-photo.jpg",
  alt: "Frieren cosplayer casting a spell in a misty forest",
  w: 6000, h: 4000,               // pixel size (optional but recommended)
  cosplayer: "@stardust.cos",
  character: "Frieren",
  event: "Comic Con Vienna 2026",
},
```

That's it — the photo appears in the gallery. Captions (on hover and in
the photo viewer) show cosplayer → character → event; fields left as `""`
are simply skipped.

## Placeholders you still need to fill in

Search the project for **`EDIT ME`** — every placeholder is labeled with it:

- [ ] `js/portfolio-data.js` — cosplayer, character, and event + alt text
      for each photo (2 example entries have character/event pre-filled;
      **verify the character names are right**)
- [ ] `index.html` — hero slide alt text, featured card labels, intro paragraph
- [ ] `about.html` — your story, real stats, and your portrait (replace the
      striped placeholder box)
- [ ] `contact.html` — your email address (2 places) and social links
- [ ] Footer socials — same on all four pages
- [ ] Contact form backend — see below

## Making the booking form work

GitHub Pages can't process forms, so the form posts to a free form service:

1. Create a free account at <https://formspree.io> (50 submissions/month free)
2. Create a new form and copy its endpoint (looks like `https://formspree.io/f/abcd1234`)
3. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` attribute

Until then, the "Prefer email?" sidebar link still works.

## Publishing on GitHub Pages

1. Create a GitHub repository and push this whole folder to it
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Your site appears at `https://<username>.github.io/<repo>/`

**Gotcha:** GitHub Pages is case-sensitive. The images folder is `Assets/`
with a capital A — keep it that way (or rename it everywhere at once).

## Performance tips (optional but recommended)

Your originals are 0.7–2.3 MB each, which is fine to start but slow on
mobile data. When you have time:

- Export gallery versions at ~1600px on the long edge, JPEG quality ~80
  (or WebP) — that typically lands around 200–400 KB per image
- Keep the full-res files elsewhere; the site only needs web-size copies

## Design system quick reference

Colors (defined once in `css/styles.css` under `:root`):

| Token | Hex | Used for |
|---|---|---|
| `--espresso` | `#4a332d` | Nav, footer, dark sections, body text |
| `--cream` | `#f5f2ea` | Page background |
| `--mocha` | `#896b60` | Secondary text |
| `--taupe` | `#d0c7c2` | Borders, muted surfaces |
| `--mint` | `#b7e1cd` | Buttons, accents, highlights |

Fonts: **Playfair Display** (headlines) + **Inter** (body), loaded from
Google Fonts in each page's `<head>`. The header/nav uses **Montserrat**,
self-hosted from `Assets/fonts/` via `@font-face` in `css/styles.css`.
